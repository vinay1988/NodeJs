var http = require('http');
var express = require("express");
var app = express();
var controllers = require("./controllers");

app.set("view engine", "vash");

//set the public static resource
app.use(express.static(__dirname + "/public"));

//Initialize the route
controllers.init(app);

app.get("/api/users", function (req, res) {
    res.send({name:"vinay",age:30,address:"New Delhi"});
})

var server = http.createServer(app);

//var server = http.createServer(function (req, res) {
//    console.log(req.url);
//    res.write("<html><body>" + req.url + " </body > </html > ");
//    res.end();
//});

server.listen(3000);
