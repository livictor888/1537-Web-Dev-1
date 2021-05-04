// Write your code here

let fs = require("fs"); // import the file system module

function updateScore() {
    let score;
    fs.readFile("score.txt", function(err, data) {
        if(err) console.log(err);
        else score = parseInt(data);
        score += 1;
        //console.log("score.txt contains: " + score);
        fs.writeFile("score.txt", score.toString(), "utf8", function(err) {
            if(err) console.log(err);
            else console.log("updated the score");
        })
    })
}

let inputArgs = process.argv.slice(2);      // get all arguments after "node quiz"
let arg1 = inputArgs[0];      // first argument make the file name based on the console arguments
let arg2 = inputArgs[1];
let arg3 = inputArgs[2];
let arg4 = inputArgs[3];
let correctAnswer = 0;


if (arg1 == "question") {                                   // user enters question
    fs.readFile(arg1 + "s.json", function (err, data) {
        if (err) console.log(err)
        else {
            let dictionary = JSON.parse(data.toString());
            console.log(dictionary[arg2]);
        }
    })
} else if (arg1 == "answer") {                              // user enters answer
    fs.readFile(arg1 + "s.json", function (err, data) {
        if (err) console.log(err);
        else {
            let numArr = data.toString();
            if (arg2 == numArr[arg4]) {                     // check if the answer matches
                correctAnswer = 1;
                console.log("correct!")
                if (correctAnswer == 1) {
                    updateScore();
                }
            }
        }
    })
} else if (arg1 == "score") {                               // user enters score
    fs.readFile(arg1 + ".txt", function (err, data) {
        if (err) console.log(err);
        else {
            console.log("The contents of score: " + data.toString());
        }
    })
}