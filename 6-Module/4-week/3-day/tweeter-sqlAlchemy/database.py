from dotenv import load_dotenv
load_dotenv()
from app import app
from app.models import db, Tweet, User
from app.tweets import tweets

with app.app_context():
    # db.drop_all()
    # db.create_all()

    new_user = User(user_name='james', password='password')
    new_user_two = User(user_name='james2', password='password')
    db.session.add(new_user)
    db.session.add(new_user_two)
    
    
    tweet_one = { 
        
        "id": 1,
        'user_id': 2,
        "date": "12/4/22",
        "tweet": "Anything anyone says will be used against me in a court of law",
        "likes": 504_000,
    }
    tweet_two = { 
        "id": 2,
        'user_id': 1,
        "date": "12/3/22",
        "tweet": "Twitter servers are running at Warp 9!!",
        "likes": 527_000,
    }
    # tweet_one = Tweet(tweet=tweet_one['tweet'], likes=tweet_one['likes'], date=tweet_one['date'], user_id=1 )
    # tweet_two = Tweet(tweet=tweet_two['tweet'], likes=tweet_two['likes'], date=tweet_two['date'], user_id=2 )
    # db.session.add(tweet_one)
    # db.session.add(tweet_two)
    for old_tweet in tweets:
        new_tweet = Tweet(tweet=old_tweet['tweet'], likes=old_tweet['likes'], date=old_tweet['date'], user_id=1 )
        db.session.add(new_tweet)
        
    db.session.commit()
    