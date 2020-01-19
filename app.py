from flask import Flask, render_template

app = Flask(__name__)

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

if __name__ == '__main__':
    app.run(debug=True)
