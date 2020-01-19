from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
@app.route("/home")
def main():
    return render_template('index.html');

@app.route('ahout')
def about():
    return render_template('about.html');

if__name__ ==" __main__":
    app.run();
