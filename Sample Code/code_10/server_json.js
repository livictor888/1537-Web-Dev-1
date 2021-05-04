let http = require('http');

http.createServer(function(req,res) {
  
   res.writeHead(200,{'Content-type':'text/json'});
   res.write(JSON.stringify({age: 21, name: 'Mike'}))
   res.end();
   
}).listen(8000);