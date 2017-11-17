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
        return prompt('What is the track\'s length?');

})
    .then (function trackNameResp(val){
        trackInfo.push(val);
        return prompt("Enter an Album ID: ")
    })
    .then(function trackNameResp(val){
        trackInfo.push(val);
        console.log(trackInfo);
        return db.result('INSERT INTO album VALUES (default, $1, $2, $3)', [trackInfo[0], trackInfo[1],trackInfo[2]]);
    })
    .then(function (result) {
        console.log(result);
        prompt.done();
        pgp.end();
    })
    .catch(function rejected(err) {
        console.log('error:', err.stack);
        prompt.finished();

    });