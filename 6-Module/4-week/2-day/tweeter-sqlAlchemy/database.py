from dotenv import load_dotenv
load_dotenv()

from app import app
from app.models import db
from app.tweets import tweets
from app.models.Tweet import Tweet

with app.app_context():
    db.drop_all()
    db.create_all()
    
    # print(Tweet)
    # new_tweet = Tweet(author='James', tweet='something awesome to talk about')
    # db.session.add(new_tweet)
    
    for old_tweet in tweets:
        new_tweet = Tweet(author=old_tweet['author'], tweet=old_tweet['tweet'], likes=old_tweet['likes'], date=old_tweet['date'] )
        db.session.add(new_tweet)
        
    db.session.commit()
    