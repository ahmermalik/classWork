import tornado.ioloop
import tornado.web
import tornado.log


from jinja2 import \
  Environment, PackageLoader, select_autoescape                     #This is setting up jinja to know where the python module is located.
ENV = Environment(                                                  #the module and which directory within the module has your templates
  loader=PackageLoader('myapp', 'templates'),
  autoescape=select_autoescape(['html', 'xml'])
)

CITIES = {
  'paris': {'pop': 1000}
}

class TemplateHandler(tornado.web.RequestHandler):
  def render_template (self, tpl, context):
    template = ENV.get_template(tpl)
    self.write(template.render(**context))
class MainHandler(TemplateHandler):
  def get(self):
    self.set_header(
      'Cache-Control',
      'no-store, no-cache, must-revalidate, max-age=0')
    self.render_template("admin.html", {'bitcoin': 100, 'names': ['paul', 'joe'], 'data': CITIES['paris']})
3



class RickHandler(TemplateHandler):
  def get(self, page):
    self.set_header(
      'Cache-Control',
      'no-store, no-cache, must-revalidate, max-age=0')
    self.render_template(page + '.html', {})

class MainHandlerOld(tornado.web.RequestHandler):              ##
  def get(self):
    self.set_header("Content-Type", 'text/plain')
    self.write("Hello World.")


class YouTooHandler(tornado.web.RequestHandler):            #this is a handler
  def get(self):
    self.set_header("Content-Type", 'text/plain')
    name = self.get_query_argument('name', 'Nobody')
    self.write("Hello World{}".format(name))



def make_app():                                 ##make_app will return the application and all the routing logic within it.
  return tornado.web.Application([              ##the r/hello2 will call the YouTooHandler hanlder
    (r"/", MainHandler),
    (r"/hello2", YouTooHandler),
    (r"/page/(.*)", RickHandler),
    (
     r"/static/(.*)",
     tornado.web.StaticFileHandler,
     {'path': 'static'}
    ),
  ], autoreload=True)


if __name__ == "__main__":
  tornado.log.enable_pretty_logging()

  app = make_app()
  app.listen(8888)
  tornado.ioloop.IOLoop.current().start()
