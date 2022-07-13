import math
from flask import Flask, request

app = Flask(__name__)

@app.get("/health_check")
def health_check():
    return "API is healthy!"

@app.get("/calculate")
def pitagoras_calculator():
    args = request.args
    side = args.get("side")

    if side == "a":
      b = int(args.get("b"))
      c = int(args.get("c"))
      result = math.sqrt(c ** 2 - b ** 2)
      return (f"The length of the side a is {result}")
      
    elif side == "b":
        a = int(args.get("a"))
        c = int(args.get("c"))
        result = math.sqrt(c ** 2 - a ** 2)
        return (f"The length of the side b is {result}")

    elif side == "c":
        b = int(args.get("b"))
        a = int(args.get("a"))
        result = math.sqrt(a ** 2 + b ** 2)
        return (f"The length of the hypotenuse c is {result}")
    else:
        return ("Invalid input")