let http = require('http');

http.createServer(function(req,res) {
    console.log(req.method);
    console.log(req.url);
    
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<html>');
    res.write('<head><title>Hello</title></head>');
    res.write('<body><h1>Hello World!</h1></body>');
    res.write('</html>');
    res.end();

}).listen(8000);