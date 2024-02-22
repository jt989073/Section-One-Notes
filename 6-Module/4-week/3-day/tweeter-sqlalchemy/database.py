from dotenv import load_dotenv
load_dotenv()
from app import app
from app.models import db, Tweet, User
from app.tweets import tweets

with app.app_context():
    db.drop_all()
    db.create_all()

    new_user = User(user_name='james', password='password')
    new_user_two = User(user_name='james2', password='password')
    db.session.add(new_user)
    db.session.add(new_user_two)
    
    

    for old_tweet in tweets:
        new_tweet = Tweet(author=old_tweet['author'], tweet=old_tweet['tweet'], likes=old_tweet['likes'], date=old_tweet['date'])
        db.session.add(new_tweet)
        
    db.session.commit()
    