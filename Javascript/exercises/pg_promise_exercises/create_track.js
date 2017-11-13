var pgp = require('pg-promise')({
    // initialize pg-promise library. This is how you will do SQL queries to database.
});
var db = pgp({database: 'music_database'});
// connect postgres database.
var prompt = require('prompt-promise');
// initialize prompt promise library.

var trackInfo = [];

prompt('Enter A Track Name: ')
    .then (function trackNameResp(val){
        trackInfo.push(val);
        return prompt('Enter an Album ID: ');

})
    .then (function albumIdResp(val){
        trackInfo.push(val);
        return prompt("What is the track's length?")
    })
    .then (function trackLengthResp(val){
        trackInfo.push(val);
        prompt.done();
    })

    .catch(function rejected(err){
        console.log('error:', err.stack);
        prompt.finished();
});

