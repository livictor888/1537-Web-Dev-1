
let Item = require('../models/itemsModel');
let top = require('../views/partials/pageListTop');
let bottom = require('../views/partials/pageListBottom');

exports.getListPage = function(req,res) {
    
    /* 
        retreive username / password in session
        saved in loginController.postLoginPage method
    */ 
    console.log(req.session.get('username'))
    console.log(req.session.get('pword'));
    console.log(req.session.get("id"));

    res.writeHead(200,{'Content-Type': 'text/html'} )
    /*
    create a ul 
    <ul>
        <li>Sleeping</li>
        <li>Playing</li>
        .......
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
}

exports.postItemPage = function(req,res) {
    let data = [];
        req.on('data', function(chunk) {
            data.push(chunk);
        })
        req.on('end', function() {
            let str = Buffer.concat(data).toString();
            // str = item=sleep
            let info = str.split('=')[1];
            let user = req.session.get("id");
            let _item = new Item({item: info, user_id: user});

            _item.save(function(err) {
                if(err) {console.log(err)}
                else {
                    res.writeHead(301, {'Location' : '/list'});
                    res.end();
                }
            })
        })
}