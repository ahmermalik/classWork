#!/usr/bin/env python3
import os
import tornado.ioloop
import tornado.web
import tornado.log

from jinja2 import \
    Environment, PackageLoader, select_autoescape

from models import BlogPost, Author, Comments


ENV = Environment(
    loader=PackageLoader('blog', 'templates'),
    autoescape=select_autoescape(['html', 'xml'])
)



class TemplateHandler(tornado.web.RequestHandler):
    def render_template(self, tpl, context):
        template = ENV.get_template(tpl)
        self.write(template.render(**context))


class MainHandler(TemplateHandler):
    def get(self):
        posts = BlogPost.select().order_by(BlogPost.created.desc())
        self.render_template("base.html", {'posts': posts})


class PostHandler(TemplateHandler):
    def get(self, slug):
        post = BlogPost.select().where(BlogPost.slug == slug).get()
        #comments = Comments.select().where(Comments.blogpost == post).order_by(Comments.created.desc())
        #.render_template("post.html", {'post': post, 'comments': comments})
        self.render_template("post.html", {'post': post})



class CommentHandler(TemplateHandler):
    def post(self, slug):
        comment = self.get_body_argument('comment')
        post = BlogPost.select() \
            .where(BlogPost.slug == slug).get()
        comment = Comments.create(blogpost=post, comment=comment)
        self.redirect('/post/' + slug)

class PageHandler(TemplateHandler):
  def get(self, page):
    self.set_header(
      'Cache-Control',
      'no-store, no-cache, must-revalidate, max-age=0')

    posts = BlogPost.select()
    self.render_template(page + '.html', {'posts': posts, categories: CATEGORIES})



class AuthorHandler(TemplateHandler):
  def get(self, page):
    self.set_header(
       'Cache-Control',
       'no-store, no-cache, must-revalidate, max-age=0')

    posts = BlogPost.select()
    self.render_template(page + '.html', {'posts': posts})

class CategoryHandler(TemplateHandler):
  def get(self, category):

      posts = BlogPost.select().where(BlogPost.category == category)
      self.render_template('category.html', {'posts': posts, 'category': category})


def make_app():
    return tornado.web.Application([
        (r"/", MainHandler),
        (r"/post/(.*)/comment", CommentHandler),
        (r"/post/(.*)", PostHandler),
        (r"/page/(.*)", PageHandler),
        (r"/category/(.*)", CategoryHandler),
        (r"/static/(.*)",
         tornado.web.StaticFileHandler, {'path': 'static'}),
    ], autoreload=True)


if __name__ == "__main__":
    tornado.log.enable_pretty_logging()
    app = make_app()
    app.listen(int(os.environ.get('PORT', '1337')))
    tornado.ioloop.IOLoop.current().start()
    print("PORT 1337 ACTIVATED")
