import math
from flask import Flask, jsonify, request

app = Flask(__name__)

# Simply checks if the API is available
@app.get("/health_check")
def health_check():
    return "API is healthy!"

# This route function as the following:
# It receives 4 query params (/calculate?side=X&hip=Y&sideA=Z&sideB=W)
# -> side = the side that will be calculated (they can be: hip, sideA, sideB or area)
# -> hip, sideA and sideB = represents each side value
@app.get("/calculate")
def pitagoras_calculator():
    # retrieve all the args
    args = request.args
    side = args.get("side")

    # cheks if the query param exists and return it value or 0
    hip = int(args.get("hip")) if args.get("hip") else 0
    sideA = int(args.get("sideA")) if args.get("sideA") else 0
    sideB = int(args.get("sideB")) if args.get("sideB") else 0

    # The implementation of the theorem
    if side == "hip":
      result = math.sqrt(sideA ** 2 + sideB ** 2)
      response = jsonify(result=result)
      response.headers.add("Access-Control-Allow-Origin", "*")
      return response
      
    elif side == "sideA":
        result = math.sqrt(hip ** 2 - sideB ** 2)
        response = jsonify(result=result)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response

    elif side == "sideB":
        result = math.sqrt(hip ** 2 - sideA ** 2)
        response = jsonify(result=result)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response
    
    elif side == "area":
        result = (sideA * sideB) / 2
        response = jsonify(result=result)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response
        
    else:
        return jsonify(result="Invalid Input")