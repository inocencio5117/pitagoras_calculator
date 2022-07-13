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

    a = int(args.get("a")) if args.get("a") else 0
    b = int(args.get("b")) if args.get("b") else 0
    c = int(args.get("c")) if args.get("c") else 0

    if side == "a":
      result = math.sqrt(c ** 2 + b ** 2)
      return (f"The length of the side a is {result}")
      
    elif side == "b":
        result = math.sqrt(c ** 2 - a ** 2)
        return (f"The length of the side b is {result}")

    elif side == "c":
        result = math.sqrt(b ** 2 - a ** 2)
        return (f"The length of the hypotenuse c is {result}")
    
    elif side == "area":
        result = (a * b) / 2
        return (f"The area of this triangule is {result}")
        
    else:
        return ("Invalid input")