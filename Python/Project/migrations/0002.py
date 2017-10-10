import sys

import models
import peewee
from playhouse.migrate import migrate, PostgresqlMigrator


def forward():
    models.DB.create_tables([models.Author])
    #     models.DB.create_tables([models.Author, models.BlogPost, models.Comment])     #You can also create all tables at once through this method.

    author = peewee.ForeignKeyField(
        models.Author, null=True, to_field=models.Author.id)

    migrator = PostgresqlMigrator(models.DB)
    migrate(
        migrator.add_column('blogpost', 'author_id', author),
    )


def backward():
    migrator = PostgresqlMigrator(models.DB)
    migrate(
        migrator.drop_column('blogpost', 'author_id', 'comment'),
    )
    models.Author.drop_table()


if __name__ == '__main__':
    if 'back' in sys.argv:
        backward()

    else:
        forward()
