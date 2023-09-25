from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home_page.html')

@app.route('/cities')
def cities():
    return render_template('city-model.html')

@app.route('/houston')
def houston():
    return render_template('houston.html')

@app.route('/katy')
def katy():
    return render_template('katy.html')

@app.route('/cypress')
def cypress():
    return render_template('cypress.html')
if __name__ == '__main__':
    app.run()