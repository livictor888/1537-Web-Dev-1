// when using your custom created modules
// need to use '.', ./ -> look in the current directory
let name = require('./myModule');
console.log(name);


// If it can't find a file with the name specified
// it will look for a folder then a file index.js inside of it
let splitString = require('./myCustomModule');

console.log(splitString('Kevin Kruger'));

