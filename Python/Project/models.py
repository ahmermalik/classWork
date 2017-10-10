import datetime
import os

import peewee
from playhouse.db_url import connect

import markdown2

DB = connect(
    os.environ.get(                                         #how to connect the blog database to the server
        'DATABASE_URL',
        'postgres://localhost:5432/blog'
    )
)

CATEGORIES = (
    ("health", "Health"),
    ("travel", "Travel"),
    ("cars", "Cars")
)

class BaseModel(peewee.Model):
    class Meta:
        database = DB


class Author(BaseModel):
    name = peewee.CharField(max_length=60)
    twitter = peewee.CharField(max_length=60)

    def __str__(self):
        return self.name




class BlogPost(BaseModel):
    author = peewee.ForeignKeyField(Author, null=True)
    ##category = peewee.ForeignKeyField(Category, null=True)  ##creating a relationship
    category = peewee.CharField(max_length=60, choices=CATEGORIES) ##this is a string on each row that states what category it is.
    title = peewee.CharField(max_length=60)
    slug = peewee.CharField(max_length=50, unique=True)
    body = peewee.TextField()
    created = peewee.DateTimeField(
        default=datetime.datetime.utcnow)

    def html(self):
        return markdown2.markdown(self.body)

    def __str__(self):
        return self.title

class Comments(BaseModel):
    blogpost = peewee.ForeignKeyField(BlogPost, null=True)
    comment = peewee.TextField(null=False)
    created = peewee.DateTimeField(
        default=datetime.datetime.utcnow)

    def __str__(self):
        return self.comment
