from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from .db import db


class User(db.Model, UserMixin):
    __tablename__ = "Users"

    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(100), nullable=False)
    hashed_password = db.Column(db.String(255), nullable=False)
    
    tweets = db.relationship('Tweet', back_populates='user', cascade='all, delete')


    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

