var http = require('http')
var fs = require('fs')
var path = require('path')

http.createServer((req, res) => {
    fs.readFile(path.join(__dirname, 'home.html'), null, (err, data) => {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(data);
        res.end();
    })
}).listen(8081);
