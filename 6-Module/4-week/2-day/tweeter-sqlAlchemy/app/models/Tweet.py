from app.models import db


class Tweet(db.Model):
    __tablename__ = 'Tweets'
    
    id = db.Column(db.Integer, primary_key=True)
    author = db.Column(db.String, nullable=False)
    tweet = db.Column(db.String, nullable=False)
    date = db.Column(db.String, nullable=True)
    likes = db.Column(db.Integer, nullable=True)
    
    
    