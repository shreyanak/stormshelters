from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home_page.html')

@app.route('/home')
def home_page():
    return render_template('home_page.html')

# city model
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

# shelter model
@app.route('/shelters')
def shelters():
    return render_template('shelter-model.html')

@app.route('/shelter1')
def shelter1():
    return render_template('shelter1.html')

@app.route('/shelter2')
def shelter2():
    return render_template('shelter2.html')

@app.route('/shelter3')
def shelter3():
    return render_template('shelter3.html')


if __name__ == '__main__':
    app.run()