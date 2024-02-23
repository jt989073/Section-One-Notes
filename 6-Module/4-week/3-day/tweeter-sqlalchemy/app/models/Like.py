from .db import db

class Like(db.Model):
    __tablename__  = 'Likes'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('Users.id'))
    tweet_id = db.Column(db.Integer, db.ForeignKey('Tweets.id'))