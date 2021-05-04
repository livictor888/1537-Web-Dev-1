let fs = require('fs');

fs.readFile('myFile.txt', function(err,data){
    if(err) console.log(err);
    else console.log(data.toString());
})
