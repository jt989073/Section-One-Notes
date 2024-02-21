from dotenv import load_dotenv
from app.models import db
from app.models.Tweet import Tweet
from app import app, tweets
load_dotenv()

with app.app_context():
    db.drop_all()
    db.create_all()
    
    for old_tweet in tweets:
        new_tweet = Tweet(author=old_tweet['author'], tweet=old_tweet['tweet'], date=old_tweet['date'], likes=old_tweet['likes'])
        db.session.add(new_tweet)
        
    db.session.commit()