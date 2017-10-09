#!/usr/bin/env python3
import os
import tornado.ioloop
import tornado.web
import tornado.log

from jinja2 import \
    Environment, PackageLoader, select_autoescape

from models import BlogPost, Author

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
        self.render_template("home.html", {'posts': posts})


class PostHandler(TemplateHandler):
    def get(self, slug):
        post = BlogPost.select().where(BlogPost.slug == slug).get()
        self.render_template("post.html", {'post': post})


class CommentHandler(TemplateHandler):
    def post(self, slug):
        comment = self.get_body_argument('comment')
        post = BlogPost.select() \
            .where(BlogPost.slug == slug).get()
        # Save Comment Here
        self.redirect('/post/' + slug)


def make_app():
    return tornado.web.Application([
        (r"/", MainHandler),
        (r"/post/(.*)/comment", CommentHandler),
        (r"/post/(.*)", PostHandler),
        (r"/static/(.*)",
         tornado.web.StaticFileHandler, {'path': 'static'}),
    ], autoreload=True)


if __name__ == "__main__":
    tornado.log.enable_pretty_logging()
    app = make_app()
    app.listen(int(os.environ.get('PORT', '1338')))
    tornado.ioloop.IOLoop.current().start()