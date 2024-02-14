## WTForms

WTForms is a package that allows us to easily create forms with our flask app

### Creating the form class

We import `FlaskForm` and any input fields from `flask_wtf` & `wtforms`, respectively

```py
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, PasswordField, BooleanField ... etc.
```

To create a form, we create a class and pass it the `FlaskForm` we imported

- Any fields we imported should be saved to a variable and invoked
  - Pass in to the field what you'd like it to be named

```py
# app/auth.py
class SignUpForm(FlaskForm):
    user_name = StringField('Name')
    email = StringField('Email')
    password = PasswordField('Password')
    confirm = PasswordField('Confirm Password')
    submit = SubmitField('Sign Up')
```

### Routing to the form

In our routing file, we need to import our form and invoke it in our route

```py
# app/__init__.py
from flask import Flask, render_template
from .auth import SignUpForm
# ...
# ...
# ...
@app.route('/sign-up', methods=['GET', 'POST'])
def sign_up_form():
    form = SignUpForm()
    return render_template('sign_up.html', form=form)
```

### Using the form in HTML

In our HTML, we can access our form and use it like an object with methods

- Key into the form, invoke the method to get the input to appear
- Use `form.method_name.label` to show the text you passed into the field

```html
<!-- app/templates/sign_up.html -->
<form action="" method="post" novalidate>
  {{ form.csrf_token }}
  <p>{{ form.user_name.label }} {{ form.user_name() }}</p>
  <p>{{ form.email.label }} {{ form.email() }}</p>
  <p>{{ form.password.label }} {{ form.password() }}</p>
  <p>{{ form.confirm.label }} {{ form.confirm() }}</p>
  <p>{{ form.submit() }}</p>
</form>
```

### Validations

WTForms has built in validators that we can use

- [All validators](https://wtforms.readthedocs.io/en/2.3.x/validators/)

Import them from `wtforms.validators`, then pass them in to the field you wish to validate

- `var_name = FieldName("LabelName", validators=[Validator1(), Validator2(), etc])`

```py
from wtforms.validators import DataRequired, ...etc

class SignUpForm(FlaskForm):
    user_name = StringField('Name', validators=[DataRequired()])
```


# Flask Sessions

Allows us to save data across sessions

- Similar to local & session storage in the browser

To get a value, use `session.get('key_name')`

- You can also simply key in like you would a dictionary
- `session['key_name']`

To set a value, simply use a key/value pair assignment like you would a dictionary

To remove a value, use `session.pop('key_name', default_value)`

```py
from flask import Flask, render_template, session

app = Flask(__name__)


def track_wins_losses(did_win):
    if did_win:
        session['wins'] = session.get('wins') + 1
    else:
        session['losses'] = session.get('losses') + 1

    return f"You currently have {session.get('wins')} wins and {session.get('losses')} losses"


@app.route('/')
def main():
    if 'wins' not in session:
        session['wins'] = 0
    if 'losses' not in session:
        session['losses'] = 0

    return render_template("game.html")


@app.route('/result')
def result():
    res = game_played() # Pretend a game was played

    score = track_wins_losses(res.did_win)

    return render_template("play_again.html", score=score)


@app.route('/submit-scores')
def submit_scores():
    wins = session.pop('wins', 'no')
    losses = session.pop('losses', 'no')

    return f"Thanks for playing! You ended with {wins} wins and {losses} losses"
```
