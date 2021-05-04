let path = require('path');
let pathToUploads = path.join(__dirname, 'www','files','uploads');
console.log(pathToUploads);

//--------------------------------------------//

let v8 = require('v8')
console.log(v8.getHeapStatistics());
