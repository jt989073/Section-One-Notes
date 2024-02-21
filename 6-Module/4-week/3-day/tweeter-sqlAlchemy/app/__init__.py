from flask import Flask, render_template, redirect
from flask_login import current_user, login_user, logout_user, LoginManager, login_required
from flask_login import LoginManager
from .config import Config
import random
from .form.form import TweetForm, LoginForm
from datetime import date
from .models import db, Tweet, User



app = Flask(__name__)

app.config.from_object(Config)

db.init_app(app)
login = LoginManager(app)
login.login_view='session.login'

@login.user_loader
def load_user(id):
    return User.query.get(int(id))


@app.route("/")
def index():
    """
    Landing page, displays a random tweet
    """
    # tweet = random.choice(tweets)
    tweets = Tweet.query.get(random.choice(range(len(Tweet.query.all()))))
    return render_template("index.html", tweet=tweets)


@app.route("/feed")
def feed():
    """
    Displays the feed page showing all tweets
    """
    tweets = Tweet.query.all()
    return render_template('feed.html', tweets=tweets)



@app.route("/new", methods=["GET", "POST"])
def new_tweet_form():
    """
    Displays the Tweet form on GET requests, and then
    validates and creates a new Tweet on POST requests
    """
    form = TweetForm()
    if form.validate_on_submit():
        new_tweet = {
            'author': form.data['author'],
            'tweet': form.data['tweet'],
            'date': date.today(),
            'likes': 0,
        }
        new_tweet = Tweet(**new_tweet)
        db.session.add(new_tweet)
        db.session.commit()
        return redirect("/feed", 302)

    if form.errors:
        return form.errors
    return render_template("new_tweet.html", form=form)


@app.route("/login", methods=["GET", "POST"])
def login():
    if current_user.is_authenticated:
        return redirect('/')
    form = LoginForm()
    if form.validate_on_submit():
        n = form.user_name.data
        user = User.query.filter(User.user_name == n).first()
        if not user or not user.check_password(form.password.data):
            return redirect('/login')
        login_user(user)
        return redirect('/feed')
    return render_template("login.html", form=form)

@app.route('/logout', methods=['POST'])
def logout():
    logout_user()
    return redirect('/login')