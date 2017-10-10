import sys

import models
import peewee
from playhouse.migrate import migrate, PostgresqlMigrator


def forward():
    models.DB.create_tables([models.Comments])

    comments = peewee.ForeignKeyField(
        models.Comments, null=True, to_field=models.Comments.id)

    migrator = PostgresqlMigrator(models.DB)
    migrate(
        migrator.add_column('blogpost', 'comments', comments),
    )


def backward():
    migrator = PostgresqlMigrator(models.DB)
    migrate(
        migrator.drop_column('comment', 'slug'),
    )
    models.Author.drop_table()


if __name__ == '__main__':
    if 'back' in sys.argv:
        backward()
    else:
        forward()