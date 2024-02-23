from .db import db
class Tweet(db.Model):
    __tablename__  = 'Tweets'
    
    id = db.Column(db.Integer, primary_key=True)
    tweet = db.Column(db.String, nullable=False)
    date = db.Column(db.String, nullable=True)
    likes = db.Column(db.Integer, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('Users.id'))
    
    user = db.relationship('User', back_populates='tweets')
    user_likes = db.relationship('User', back_populates='tweet_likes', secondary='Likes')
    
    def to_dict(self):
        return {
            'id': self.id,
            'tweet': self.tweet,
            'date': self.date,
            'likes': len([like for like in self.user_likes]),
            'user': self.user.to_dict()
        }
        
    def card_to_dict(self):
        return {
            'tweet': self.tweet
        }