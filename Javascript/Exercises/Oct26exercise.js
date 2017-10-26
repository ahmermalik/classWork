/**
 * Created by ahmermalik on 10/26/17.
 */

// filename ='jsexercises.js'
//
// var fs = require('fs');
// fs.readFile(filename, function (error, buffer) {
//     if (error) {
//         console.error(error.message);
//         return;
//     }
//     console.log('File Data: ', buffer.toString());
// });



                                // Callback Exercises
                                //Function Rewrites



//Function 1
function add(x, y) {
    var result = x + y;
    return x+y;
}


// console.log(add(2,3))

let calc_add = function(num1, num2, callback) {
    return callback(num1, num2, add)
}

console.log(calc_add(2,3,add));


//Function 2
function subtract(x, y) {
    return x - y;
}

let calc_subtract = function(num1, num2, callback) {
    return callback(num1,num2, subtract)
}

console.log(calc_subtract(25,3, subtract))


//Function 3
function greeting(person){
    return 'Hola, ' + person + '!';
 }

 let greet_func = function(person1, callback){
    return callback(person1, greeting)

 }

 console.log(greet_func('Ahmer', greeting))



function product(numbers) {
    return numbers.reduce(function(a, b) {
        return a * b;
    }, 1);
}


let prod_func = function(num1, num2, callback){
    return callback(num1, num2, product)
}

// console.log(prod_func(3,2, product))
//
r
