from flask import render_template, flash, redirect
from app import app
from app.forms import LoginForm

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

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        flash('Login requested for user {}, remember_me={}'.format(
            form.username.data, form.remember_me.data))
        return redirect('/index')
    return render_template('login.html', title='Sign In', form=form)
    
if __name__ == '__main__':
    app.run(debug=True)
