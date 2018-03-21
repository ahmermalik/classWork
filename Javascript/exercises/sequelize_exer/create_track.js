

/* Create Track
Write a script to create a track.
 */

//Imports

var prompt = require('prompt-promise'); // for accepting user input - promise based
var db = require('./models');


//Define a promise for prompting the user for inputs
var getUserInputs = new Promise(
    function (resolve, reject) {
        var inputs =[];
        //[prompt for track name
        prompt('Please enter the track name: ')

            .then(function(value){
                inputs.push(value);
                return prompt('Please enter the album ID: ')

            })
            .then(function(value){
                inputs.push(value);
                return prompt('Please enter track length in minutes: ')


            })
            // then save the prompt information and return as resolved if there are no errors
            .then(function(value){
                inputs.push(value);
                prompt.done();
                resolve(inputs);
            })
            // catch errors while prompting and return as rejected
            .catch(function(error){
                prompt.finish();
                reject(error);
            });
    }
);

//write track to new row in database

var writeTrack = function (trackName, albumID, trackLength) {
    db.track.create({name:trackName, album:albumID, length:trackLength}) //may need to fix the names
        .then(function(track){
        console.log(track)
        db.sequelize.close();
    });
}

//write a main driver function that will call on another function to create, add, and save rows to the database

var main = function (){
    getUserInputs           //call getUserInputs, which is a function up-top.
        .then(function(inputs){
            var trackName = inputs[0];
            var albumID = inputs[1];
            var trackLength = inputs[2];
            writeTrack(trackName, albumID, trackLength);
            console.log(inputs);
        })
        .catch(function(error){
            console.error(error);
        });
}

main();