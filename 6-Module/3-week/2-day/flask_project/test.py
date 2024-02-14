from flask import Flask
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

app.register_blueprint(routes.spots.bp)

print("secret_key is: ", app.config["SECRET_KEY"])

@app.route('/')
def hello():
    return f'<h1>{app.config["GREETING"]}</h1>'
