from flask import Flask
from models import app



@app.route('/')
def home():
    return ""



if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
