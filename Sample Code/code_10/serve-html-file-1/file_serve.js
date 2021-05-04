let http = require('http');
let fs = require('fs');

http.createServer(function(req, res) {
    let method = req.method;
    let url = req.url;

    if(method=='GET' && url=='/') {   // if the user doesn't type a valid url, go to 404 page
        
        res.writeHead(200, {'Content-Type': 'text/html'});          // when we get a  GET request, read 
        fs.readFile('./form.html', function(err,data) {             // and send out the html file form.html
            if(err) {
                console.log(err)
            } else {
                res.write(data.toString())
            }
            res.end();
        });

    } else if(method=='POST' && url=='/') {
        console.log("FORM was submitted");
        let data = [];

        req.on('data', function(chunk) {  // this is a listener, on "send data to the server reqest", data is received as little chunks when user hits submit
            console.log(chunk);                 // <Buffer 75 73 65 72 6e 61 6d 65 3d 4b 65 76 69 6e 26 70 61 73 73>
            data.push(chunk);               // put it in the data array 
        })

        req.on('end', function() {          // after we receive all the chunks of data
            let info = Buffer.concat(data).toString(); // now we can parse (transform it in to data we can use) the buffer data (machine code) to use 
            console.log(info); // username=sandy&password=password
            
            let pieces = info.split('&'); // now we have to neatly organize the data we have received, split based on the "&" symbol
            // pieces = username=Kevin&password=password
            // pieces = ['username=sandy','password=password']

            // pieces[0] = username=sandy
            // pieces[0].spit('=') = ['username','sandy']
            // pieces[0].spit('=')[1] = sandy
            let username = pieces[0].split('=')[1];     //pieces[0] = [username, sandy]
            let password = pieces[1].split('=')[1];     //pieces[1] = [password, somepassword]

            console.log(username);
            console.log(password);
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