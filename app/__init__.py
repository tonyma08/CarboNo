from flask import Flask, redirect, request, url_for
from config import Config

# Third-party libraries
from flask_login import (
    LoginManager,
    current_user,
    login_required,
    login_user,
    logout_user,
)
import requests
import json
import os
import sqlite3

# Internal imports
from db import init_db_command
from user import User

app = Flask(__name__)
app.config.from_object(Config)

# User session management setup
# https://flask-login.readthedocs.io/en/latest
login_manager = LoginManager()
login_manager.init_app(app)

# Flask-Login helper to retrieve a user from our db
@login_manager.user_loader
def load_user(user_id):
    return User.get(user_id)

from app import routes