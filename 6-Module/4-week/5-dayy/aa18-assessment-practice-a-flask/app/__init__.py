from flask import Flask
from .routes import bp
from .config import Configuration
from app.models import db
from flask_migrate import Migrate


app = Flask(__name__)
app.config.from_object(Configuration)
db.init_app(app)
Migrate(app, db)


app.register_blueprint(bp)