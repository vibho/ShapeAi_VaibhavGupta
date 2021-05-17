const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extented: true}));

app.get('/', function (req, res) {
  res.sendfile(__dirname+'<h1>He</h1>')
});

var n1 = req.body.num1;
var n2 = req.body.num2;

app.post("/", function(req, res)){
   var n1 = Number(req.body.num1);
   var n2 = Number(req.body.num2);
   var result =n1+n2;
    res.send("The answer is" + result);
});

app.listen(8383,function){
 console.log("Server has started on part 3000");
});
