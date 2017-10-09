import models


def forward():
    models.DB.create_tables([models.BlogPost])


if __name__ == '__main__':
    forward()