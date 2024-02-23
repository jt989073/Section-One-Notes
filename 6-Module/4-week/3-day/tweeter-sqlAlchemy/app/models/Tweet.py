from .db import db


class Tweet(db.Model):
    __tablename__ = 'Tweets'
    
    id = db.Column(db.Integer, primary_key=True)
    tweet = db.Column(db.String, nullable=False)
    date = db.Column(db.String, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('Users.id'))
    
    user = db.relationship('User', back_populates='tweets')
    user_likes = db.relationship('User', back_populates='likess', secondary='Likes')
    
    def to_dict(self):
        return {
            'id': self.id,
            'tweet': self.tweet,
            'date': self.date,
            'likes': len([like for like in self.user_likes]),
            'user_id': self.user_id,
            'user': self.user.to_dict()
        }
    
    def small_to_dict(self):
        return {
            'tweet': self.tweet
        }
    