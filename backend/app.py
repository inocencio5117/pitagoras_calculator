from flask import Flask, request

app = Flask(__name__)

@app.get("/api")
def pitagoras_calc():
    return "Get method called"