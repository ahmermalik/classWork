
/* Create Artist
Write a script to create an album.
*/

// Imports
var prompt = require('prompt-promise'); // for accepting user input - promise based
var db = require('./models');

// Define a Promise for prompting the User for inputs
var getUserInputs = new Promise(
    function (resolve, reject) {
        var inputs = [];
        // Prompt for the artist name
        prompt('Please enter the album name: ')

            .then(function (value) {
                inputs.push(value);
                return prompt('Please enter album year: ');
            })
            .then(function (value) {
                inputs.push(value);
                return prompt('Please enter Artist ID: ');

            })
            // then save the prompt information and return as resolved
            .then(function(value){
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


var writeAlbum = function (albumName, albumYear, artist_ID) {
    db.album.create({name:albumName, year:albumYear, artistId: artist_ID})
    .then(function(album){
        console.log(album);
        db.sequelize.close();
    });
}


var main = function () {
    getUserInputs
        .then(function (inputs){
            var albumName = inputs[0];
            var albumYear = inputs[1];
            var artist_ID = inputs[2];
            writeAlbum(albumName, albumYear, artist_ID);
            console.log(inputs);
        })

        .catch(function (error){
            console.error(error);
        });
}

main();