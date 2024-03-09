from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from .models import db, Photo
from dotenv import load_dotenv
from werkzeug.utils import secure_filename
from .config import Config
import os

load_dotenv('.env') # Load environment variables

app = Flask(__name__)
CORS(app)
# app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL') or 'sqlite:///dev.db'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config.from_object(Config)
db.init_app(app)
migrate = Migrate(app, db)

    

import boto3

s3 = boto3.client(
    's3',
    aws_access_key_id=os.environ.get('S3_KEY'),
    aws_secret_access_key=os.environ.get('AWS_SECRET_ACCESS_KEY'),
)

def upload_file_to_s3(file, bucket_name, acl="public-read"):
    try:
        s3.upload_fileobj(
            file,
            bucket_name,
            file.filename,
            ExtraArgs={
                "ACL": acl,
                "ContentType": file.content_type
            }
        )
        return f"https://{bucket_name}.s3.amazonaws.com/{file.filename}"
    except Exception as e:
        print(e)
        return None
    

