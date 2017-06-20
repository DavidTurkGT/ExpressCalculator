const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send("Hello there!")
});

app.get("/:operator/:num1/:num2", function(req, res){
  let operation = req.params.operator,
      num1 = parseFloat(req.params.num1),
      num2 = parseFloat(req.params.num2);

      operation = operation.toLowerCase(); //standardize operation input

      let ans;
      switch(operation){
        case "add":
          ans = num1 + num2;
          res.send("The sum of " + num1 + " and " + num2 + " is " + ans);
          break;
        case "subtract":
          ans = num1 - num2;
          res.send("The difference of " + num1 + " and " + num2 + " is " + ans);
          break;
        case "multiply":
          ans = num1 * num2;
          res.send("The product of " + num1 + " and " + num2 + " is " + ans);
          break;
        case "divide":
          ans = num1 / num2;
          res.send("The quotient of " + num1 + " and " + num2 + " is " + ans);
          break;
        case "pow":
          ans = Math.pow(num1, num2);
          res.send("The answer of " + num1 + " to the power of " + num2 + " is " + ans);
          break;
        default:
          res.send("Invalid operation.  You sent " + operation + ".  This app only supports ADD, SUBTRACT, MULTIPLY, DIVIDE, or POW");
          break;
      }
});

app.listen(3000, function(){
  console.log("App running on localhost:3000");
})
