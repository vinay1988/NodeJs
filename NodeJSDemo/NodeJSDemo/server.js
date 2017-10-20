var http = require('http');
//Create req , res function
var server = http.createServer(function (req, res) {
    console.log(req.url);
    res.write("<html><body>" + req.url + " </body > </html > ");
    res.end();
});

server.listen(3000);
