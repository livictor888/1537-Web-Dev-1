let http = require('http');
let fs = require('fs');
let top = require('./pageListTop');
let bottom = require('./pageListBottom');

let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase');

let db = mongoose.connection;
db.once('open', function() {
    console.log('Connection was succesfull');
})

let User = require('./usersModel');
let Item = require('./itemsModel');

http.createServer(function(req, res) {
    let method = req.method;
    let url = req.url;

    if(method=='GET' && url=='/') {
        
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('./login.html', function(err,data) {
            if(err) {
                console.log(err)
            } else {
                res.write(data.toString())
            }
            res.end();
        });

    } else if(method=='POST' && url=='/') {
        let data = [];

        req.on('data', function(chunk) {
            console.log(chunk);
            data.push(chunk);
        })

        req.on('end', function() {
            let info = Buffer.concat(data).toString();
            console.log(info); // username=sandy&password=12345
            
            let pieces = info.split('&');
            // pieces = ['username=sandy','password=12345']

            // pieces[0] = username=sandy
            // pieces[0].spit('=') = ['username','sandy']
            // pieces[0].spit('=')[1] = sandy
            let username = pieces[0].split('=')[1];

            // pieces[1] = password=12345
            // pieces[1].spit('=') = ['password','12345']
            // pieces[1].spit('=')[1] = 12345
            let password = pieces[1].split('=')[1];

            console.log(username);
            console.log(password);

            User.find({username:username, password:password}, function(err,records) {
                if(err) {console.log(err);}
                else {
                    if(records.length==1) {
                        res.writeHead(301, {'Location' : '/list'});
                        res.end();
                    } else {
                        res.writeHead(301, {'Location' : '/'});
                        res.end();

                    }
                }
            });
        });

    } else if(method=='GET' && url=='/list') {

        res.writeHead(200,{'Content-Type': 'text/html'} )
        /*
        create a ul 
        <ul>
            <li>Sleeping</li>
            <li>Playing</li>
        </ul>
        */
       // send => top + ul + bottom
        Item.find(function(err, records) {
            if(err) {console.log(err);}
            else {
                console.log(records);
                let ul = '<ul>';

                for(let i =0 ; i< records.length; i++) {
                    let item = records[i].item;
                    let li = `<li>${item}</li>`;
                    ul = ul + li;
                }

                ul = ul + '</ul>';
                res.write(top + ul + bottom);
                res.end();
            }
        });        

    } else if(method=='POST' && url=='/list') {
        
        let data = [];
        req.on('data', function(chunk) {
            data.push(chunk);
        })
        req.on('end', function() {
            let str = Buffer.concat(data).toString();
            // str = item=sleep
            let info = str.split('=')[1];
            let _item = new Item({item: info});

            _item.save(function(err) {
                if(err) {console.log(err)}
                else {
                    res.writeHead(301, {'Location' : '/list'});
                    res.end();
                }
            })
        })
    } 
    else {

        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.readFile('./404.html', function(err,data) {
            if(err) {
                console.log(err)
            } else {
                res.write(data.toString())
            }
            res.end();
        });

    }

}).listen(3000);