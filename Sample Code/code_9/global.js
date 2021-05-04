// console.log(__dirname);

// global.console.log(__filename);

// console.log(process.pid);
// console.log(process.versions.node);

function grab(arg) {
    let index = process.argv.indexOf(arg);
    return index + 1;
}

let index1 = grab('argv1');
let index2 = grab('argv2');

let num1 = parseInt(process.argv[index1]);
let num2 = parseInt(process.argv[index2]);

console.log(num1 + num2);

// console.log(process.argv);
