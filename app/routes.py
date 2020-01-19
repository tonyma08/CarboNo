from flask import render_template, flash, redirect, request
from app import app

@app.route('/')
def render_index():
    return render_template('index.html')

@app.route('/about')
def render_about():
    return render_template('about.html')

@app.route('/viewdata')
def render_view():
    return render_template('viewdata.html')

@app.route('/submit')
def submit_view():
    return render_template('submit.html')