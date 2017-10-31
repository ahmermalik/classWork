

/**
 * Created by ahmermalik on 10/26/17.
 */



//
//                                 // Callback exercises
//                                 //Function Rewrites
//
//
//
// //Function 1
// function add(x, y) {
//     var result = x + y;
//     return x+y;
// }
//
//
// // console.log(add(2,3))
//
// let calc_add = function(num1, num2, callback) {
//     return callback(num1, num2, add)
// }
//
// console.log(calc_add(2,3,add));
//
//
// //Function 2
// function subtract(x, y) {
//     return x - y;
// }
//
// let calc_subtract = function(num1, num2, callback) {
//     return callback(num1,num2, subtract)
// }
//
// console.log(calc_subtract(25,3, subtract))
//
//
// //Function 3
// function greeting(person){
//     return 'Hola, ' + person + '!';
//  }
//
//  let greet_func = function(person1, callback){
//     return callback(person1, greeting)
//
//  }
//
//  console.log(greet_func('Ahmer', greeting))
//
//
//
// function product(numbers) {
//     return numbers.reduce(function(a, b) {
//         return a * b;
//     }, 1);
// }
//
//
// let prod_func = function(num1, num2, callback){
//     return callback(num1, num2, product)
// }
//

// var readline = require('readline');
// var rl = readline.createInterface(process.stdin, process.stdout);
// rl.setPrompt('guess> ');
// rl.prompt();
// rl.on('line', function(line) {
//     if (line === "right") rl.close();
//     rl.prompt();
// }).on('close',function(){
//     process.exit(0);
// });

const readline = require('readline');
const fs = require('fs');
const dns = require('dns');

/**
 * Get input from console
 * @returns {Promise}
 */
function getInput(questionString){
    return new Promise(function(resolve, reject){ // promises help prevent callback hell
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(questionString, (answer) => {
            resolve(answer);

            rl.close();
        });
    });
}

/**
 * Read file
 * @param fileName
 */
function readFile(fileName){
    return new Promise(function(resolve, reject){
        fs.readFile(fileName, 'utf8', function (error, buffer) {
            if (error) {
                reject(error.message);
            } else {
                resolve(buffer.toString());
            }
        });
    });
}

/**
 * Write a file
 * @param fileName (string) file name
 * @param text (string) the text that the file will have
 */
function writeFile(fileName, text){
    return new Promise(function(resolve, reject){
        fs.writeFile(fileName, text, function(err){
            if(err){
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

/**
 * Run the program
 */
function runFileReader(){
    getInput('Enter a filename: ')
        .then(function(userInput){ // read file
            var fileName = userInput;

            return readFile(fileName);
        })
        .then(function(fileContents){
            console.log(fileContents);
        })
        .catch(function(err){
            console.log(' got an error '+err);
        });
}

function runDNSLookup(){
    getInput('Domain name: ')
        .then(function(domainName){ // read file
            return dns.lookup(domainName, null, function(err, ip){
                if(err){
                    console.log('Uh oh: '+err);
                } else {
                    console.log(ip);
                }
            });
        })
        .catch(function(err){
            console.log(' got an error '+err);
        });
}

// exports.saveWebPage = saveWebPage;


function runReadWrite(){
    var inputFileName;
    var outputFileName;

    getInput("Enter a file name to read: ")
        .then(function(fileName){
            inputFileName = fileName;

            return getInput("Enter output file name: ");
        })
        .then(function(fileName){
            outputFileName = fileName;

            return readFile(inputFileName);
        })
        .then(function(fileContents){
            return writeFile(outputFileName, fileContents);
        })
        .then(function(){
            console.log("You got a new file!");
        })
        .catch(function(err){
            console.log('error: '+err);
        });
}

function hello() {
    console.log('Hello World');
};

/** if you are in a class method, use the arrow method for functions **/
new Promise((resolve, reject) => {

});

