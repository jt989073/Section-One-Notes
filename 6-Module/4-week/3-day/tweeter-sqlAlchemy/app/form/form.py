from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired
from wtforms.fields import (
    PasswordField, StringField, SubmitField
)

class TweetForm(FlaskForm):
    author = StringField("Author", validators=[DataRequired()])
    tweet = StringField("Tweet", validators=[DataRequired()])
    submit = SubmitField("Create Tweet")
    

class LoginForm(FlaskForm):
    user_name = StringField("User Name", [DataRequired()])
    password = PasswordField("Password", [DataRequired()])
    submit = SubmitField("Login")
