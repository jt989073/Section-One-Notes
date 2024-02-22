from .db import db
class Tweet(db.Model):
    __tablename__  = 'tweets'
    
    id = db.Column(db.Integer, primary_key=True)
    author = db.Column(db.String(20), nullable=False)
    tweet = db.Column(db.String, nullable=False)
    date = db.Column(db.String, nullable=True)
    likes = db.Column(db.Integer, nullable=True)