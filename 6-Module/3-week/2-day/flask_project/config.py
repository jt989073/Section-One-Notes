import os

class Config():
    GREETING = os.environ.get("GREETING") or "salutations, superior students!"
    SECRET_KEY = os.environ.get("SECRET_KEY") or 'default-key-for-devs'
