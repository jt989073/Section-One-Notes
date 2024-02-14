from flask import Flask
from config import Config

app = Flask(__name__)

app.config.from_object(Config)
print("Secret key is: ", app.config["SECRET_KEY"])

@app.route("/")
def hello():
    return f'<h1>{app.config["GREETING"]}</h1>'
