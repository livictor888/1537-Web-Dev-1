let http = require('http');
let loginController = require('./controllers/loginController');
let itemController = require('./controllers/itemsController');

let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase');

let db = mongoose.connection;
db.once('open', function() {
    console.log('Connection was succesfull');
})

http.createServer(function(req, res) {
    let method = req.method;
    let url = req.url;

    if(method=='GET' && url=='/') {

        loginController.getLoginPage(req,res);
       
    } else if(method=='POST' && url=='/') {

        loginController.postLoginPage(req,res);

    } else if(method=='GET' && url=='/list') {
        
        itemController.getListPage(req,res)

    } else if(method=='POST' && url=='/list') {
        
        itemController.postItemPage(req,res);
    } 
    else {

        // Create a new ErrorController
        // use to path module to get the complete path to 404.html
        // see loginController -> getLoginPage
        /*
            res.writeHead(404, {'Content-Type': 'text/html'});
            fs.readFile('./404.html', function(err,data) {
                if(err) {
                    console.log(err)
                } else {
                    res.write(data.toString())
                }
                res.end();
            });
        */

    }

}).listen(3000);