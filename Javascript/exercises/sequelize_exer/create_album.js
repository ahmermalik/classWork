

var prompt = require('prompt-promise');

var albumInfo = [];

prompt('Album Name: ')
    .then(function albumNameResp(val){
        albumInfo.push(val);
        return prompt('Album Year: ');
    })
    .then(function albumYearResp(val){
        albumInfo.push(val);
        return prompt('Enter An Artist ID: ');
    })
    .then(function artistIdResp(val){
        albumInfo.push(val);
        console.log(albumInfo);
        prompt.done();
    })
    .catch(function rejected(err){
    console.log('error:', err.stack);
    prompt.finish();
});















//
// const readline = require('readline');
//
//
// function getInput(questionString){
//     return new Promise(function(resolve, reject){ // promises help prevent callback hell
//         const rl = readline.createInterface({
//             input: process.stdin,
//             output: process.stdout
//         });
//
//         rl.question(questionString, (answer) => {
//             resolve(answer);
//
//             rl.close();
//         });
//     });
// }
//
//
//
// function runReadWrite(){
//     var albumName;
//     var albumYear;
//     var outputFileName;
//
//     getInput("Enter an an album name: ")
//         .then(function(name){
//             albumName = name;
//
//             // return getInput("Enter the year: ");
//         })
//         .then(function(year){
//             getInput("Enter an an album name: ")
//
//             albumYear = year;
//         })
//         // .then(function(fileContents){
//         //     return writeFile(outputFileName, fileContents);
//         // })
//         .then(function(){
//             console.log("You got a new file!");
//         })
//         .catch(function(err){
//             console.log('error: '+err);
//         });
// }
//
// runReadWrite();
