import os

class Config:
    SECRET_KEY = os.environ.get("SECRET_KEY")
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL") or 'sqlite:///dev.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    