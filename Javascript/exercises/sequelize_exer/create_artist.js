
/* Create Artist
Write a script to create an artist.
*/

// Imports
var prompt = require('prompt-promise'); // for accepting user input - promise based
var db = require('./models');

// Define a Promise for prompting the User for inputs
var getUserInputs = new Promise(
    function (resolve, reject) {
        var inputs = [];
        // Prompt for the artist name
        prompt('Please enter the artist name: ')
        // then save the prompt information and return as resolved
        .then(function (value) {
            inputs.push(value);
            prompt.done();
            resolve(inputs);
        })
        // catch errors while prompting and return as rejected
        .catch(function (error) {
            prompt.finish();
            reject(error);
        });
    }
);

// Write to artist table
function writeArtist (artist_name) {
    db.artist.create({name: artist_name})
        .then(function (artist) {
            console.log(artist);
            db.sequelize.close()
        });
}

// Define main driver function
var main = function () {
    getUserInputs
        .then(function (inputs) {
            var artist_name = inputs[0];
            writeArtist(artist_name);
        })

        .catch(function (error) {
            console.error(error);
        });
}

// Execute the main function
main();