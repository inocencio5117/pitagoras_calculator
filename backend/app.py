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
    hip = int(args.get("hip")) if args.get("hip") else 0
    sideA = int(args.get("sideA")) if args.get("sideA") else 0
    sideB = int(args.get("sideB")) if args.get("sideB") else 0

    if side == "hip":
      result = math.sqrt(sideA ** 2 + sideB ** 2)
      return (f"The length of the hypotenuse is {result}")
      
    elif side == "sideA":
        result = math.sqrt(hip ** 2 - sideB ** 2)
        return (f"The length of the side a is {result}")

    elif side == "sideB":
        result = math.sqrt(hip ** 2 - sideA ** 2)
        return (f"The length of the side b is {result}")
    
    elif side == "area":
        result = (sideA * sideB) / 2
        return (f"The area of this triangule is {result}")
        
    else:
        return ("Invalid input")