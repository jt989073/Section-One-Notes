import os

class Config:
        SECRET_KEY = os.environ.get('SECRET_KEY')
        SQLALCHEMYH_TRACK_MODIFICATIONS = False
        SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///dev.db'