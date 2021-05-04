let filesystem = require('fs');

console.log('File write began');

filesystem.writeFile('myFile.txt', 'Hello-World-!', 'utf8', function(err) {
    if(err) console.log(err);
    else console.log('All good !')
})

console.log('File write ended');
