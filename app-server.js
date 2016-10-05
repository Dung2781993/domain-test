var express = require('express');
var fs = require('fs');
var parser = require('body-parser');
var ejs = require('ejs');
var app = express();

app.use(express.static('./public'));

app.use(express.static('./node_modules/bootstrap/dist'));

app.use(parser.json());
app.use(parser.urlencoded({extended: true}))

app.set('views', __dirname + '/public');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
/*Test Post Request Form*/

app.post('/submit', function (req, res) {
    console.dir(req.body);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello Mama');

});


app.listen(3000);

console.log("SPA is running at 'http://localhost:3000'");