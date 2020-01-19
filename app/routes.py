from flask import render_template, flash, redirect, request
from app import app
# Third-party libraries
from flask_login import (
    LoginManager,
    current_user,
    login_required,
    login_user,
    logout_user,
)
import requests
from oauthlib.oauth2 import WebApplicationClient
import os

# Configuration
GOOGLE_CLIENT_ID = os.environ.get("GOOGLE_CLIENT_ID", None)
GOOGLE_CLIENT_SECRET = os.environ.get("GOOGLE_CLIENT_SECRET", None)
GOOGLE_DISCOVERY_URL = (
    "https://accounts.google.com/.well-known/openid-configuration"
)


# OAuth 2 client setup
client = WebApplicationClient(GOOGLE_CLIENT_ID)

def get_google_provider_cfg():
    return requests.get(GOOGLE_DISCOVERY_URL).json()
    
@app.route('/')
def render_index():
    return render_template('index.html', is_authentiated=current_user.is_authenticated)

@app.route('/about')
def render_about():
    return render_template('about.html')

@app.route('/viewdata')
def render_view():
    return render_template('viewdata.html')

@app.route('/submit')
def submit_view():
    return render_template('submit.html')
   
@app.route("/login")
def login():
    # Find out what URL to hit for Google login
    google_provider_cfg = get_google_provider_cfg()
    authorization_endpoint = google_provider_cfg["authorization_endpoint"]

    # Use library to construct the request for Google login and provide
    # scopes that let you retrieve user's profile from Google
    request_uri = client.prepare_request_uri(
        authorization_endpoint,
        redirect_uri=request.base_url + "/callback",
        scope=["openid", "email", "profile"],
    )
    return redirect(request_uri)
    
if __name__ == '__main__':
    app.run(debug=True)
