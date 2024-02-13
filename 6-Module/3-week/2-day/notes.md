# Flask Setup

When we setup a flask project we want to make a project folder and install flask using pipenv

```py
pipenv install Flask~=2.2.2
pipenv run flask --version
```

we can then create a new python file and import the flask package
and initialize a flask app

While it is possible to pass in a string, most experienced developers will instead use the dunder __name__ which will automatically pick up the file name. That means you can easily copy this line from project to project.


```py
from flask import Flask


app = Flask(__name__)
```

In order to verify Flask is working properly, you will want a url to load. In Flask that is specified using a decorator before a function that returns the desired content.
```py

# the path for the route is the parameter passed to the app.route decorator
# the function can have any name and the we are returning html here because it is for a web apage, but in other use cases we will return JSON or something like that
@app.route('/')
def hello():
    return '<h1>Hello, world!</h1>'
```

In order to start a Flask application, you need to first specify which file to use. This is done through the environment variable FLASK_APP. To quickly set an environment variable from the command line, use the export command.


```
export FLASK_APP=test.py
```

and then finally we neeed to start the application

```
pipenv run flask run
```

We are automatically set to production, so we need to change that to do this we run the following command

```
export FLASK_DEBUG=True
```

If we want to use a different port we give it the -p flag to the flask run command


```
pipenv run flask run -p 5001
```

Every time you start your virtual environment you need to remember to set the FLASK_APP environment variable. When you change projects, you'll need to switch to the appropriate file name. You will get an error message if you don't

To get around this we will use a `.flaskenv` to do this we must install the python-dotenv package

```
pipenv install python-dotenv~0.21
```

now we create a .flaskenv and input our environment variables

```py
FLASK_APP=simple.py
FLASK_DEBUG=True
```

if we have already run the export environment variable command we need to reeset those or reboot our machine. 

```
unset FLASK_APP
unset FLASK_DEBUG
```

A lot of times we will also be setting up a config class to work with our environment variables

We will create a new file in our project folder named config.py. 

Begin in the Config class. Since you know the value could come from the environment, import the build-in os package and create a class variable which first tries to get the environment value, and if not found, uses a hard-coded value.



```py
import os


class Config(object):
    GREETING = 'Salutations, superior students!'
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'default-key-for-devs'
```

We then have to update our app

```py

from config import Config


app.config.from_object(Config)
```


so our whole app file looks like this 

```py

from flask import Flask
# Load configuration class
from config import Config

app = Flask(__name__)
# Apply configuration from class
app.config.from_object(Config)
# Test value of variable that may or may not come from the environment
print("SECRET KEY IS: ", app.config["SECRET_KEY"])


@app.route('/')
def hello():
    # Use configuration variable
    return f'<h1>{app.config["GREETING"]}</h1>'
```

Lastly we want to add the SECRET_KEY to our .flaskenv so that it isn't using the default


```
SECRET KEY IS:  super-secret-stuff
```



# Templating 

Readings pretend like you know was templating is, but you don't

Pug is an annoying tool that I'm glad I didn't have to teach

Jinja is a less annoying tool that I'm not glad I have to teach

Main reasons to use templating

- "Easier"
  - If you understand the template language very well, it's easier
  - A complex React App's html can be messier than using templates
- Lightweight
  - Much easier to run than a React App
  - Generally used for internal tools, in development, etc
    - You wouldn't book a flight to a place you can walk to
    - You shouldn't build a React App for a task you can template
- You might see it somewhere in the real world
  - Might not be Jinja, but templating is very similar across many implementations
- Not really any other reasons to use templates
  - If the above cases don't apply, use React!

## Works with Flask right out the box

`render_template` built-in function in Flask package

```py
from flask import render_template
from flask import Flask, render_template
```

Expects that all templates are in a "templates" folder

Pass filename to function to render that template

- Will automatically look in your "templates" folder

```py
@app.route('/')
def index():
    return render_template('index.html')
```

## Jinjariables

We can use variables through double curly braces `{{ variable_name }}`

Pass as kwarg to `render_template` and used inside your templates

```py
res = # Pretend database stuff happens here
return render_template('index.html', user=res.first_name)
```

```html
<!-- /app/templates/index.html -->
<!DOCTYPE html>
<html>
  <head>
    <h1>Hello {{ user }}!</h1>
  </head>
</html>
```

## Jinjitionals

Put conditionals right into html

```html
{% if not logged_in %}
<a href="/login">Log in</a>
{% endif %}
```

## Jinjeration

```py
nav = [
  { 'href': 'https://appacademy.io', 'caption': 'App Academy' },
  { 'href': 'https://archive.or', 'caption': 'Internet Archive' },
]

render_template("page.html", nav=nav)
```

```html
<ul>
  {% for el in nav %}
  <li>
    <a href="{{ el.href }}">{{ el.caption }}</a>
  </li>
  {% endfor %}
</ul>
```

## Jinjonents

You can break your templates into React-like "components" by simply making more template files

Then, combine using the `include` keyword

```html
<!-- /app/templates/other_page.html -->
<h2>This sure is some other page!</h2>

<!---->
<!---->
<!---->

<!-- /app/templates/index.html -->
<!DOCTYPE html>
<html>
  <head>
    <h1>Hello {{ user }}!</h1>
    {% include 'other_page.html' %}
  </head>
</html>
```

---

## Flask Blueprints

Blueprints are extremely similar to `Router` from Express

Blueprint takes 3 arguments

- String to set the name of the blueprint
- `__name__` to specify the file name this blueprint is in
- `url_prefix=` set to the url path

Like with Express Router, any requests that start with `/spots` would go here

```py
# /app/routes/spots.py
from flask import Blueprint

bp = Blueprint('spots', __name__, url_prefix='/spots')

@bp.route('/pet-friendly')
def my_route():
    return render_template('pet_spots.html')
```

And any requests starting with `/reviews` will go here

```py
# /app/reviews/reviews.py
from flask import Blueprint

bp = Blueprint('reviews', __name__, url_prefix='/reviews')

@bp.route('/5-star')
def my_route():
    return render_template('bribed-reviews.html')
```

All of your blueprints need to be connected to your app

`register_blueprint()` takes your blueprint, access through your module

```py
app.register_blueprint(routes.spots.bp)
app.register_blueprint(routes.reviews.bp)
```

---
