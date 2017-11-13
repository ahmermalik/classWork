var pgp = require('pg-promise')({
    // initialize pg-promise library. This is how you will do SQL queries to database.
});
var db = pgp({database: 'music_database'});
// connect postgres database.
var prompt = require('prompt-promise');
// initialize prompt promise library.

var artistInfo = [];

prompt('Enter an Arist Name: ')
    .then (function artistNameResp(val){
        artistInfo.push(val);
        prompt.done();
})
    .catch(function rejected(err){
        console.log('error:', err.stack);
        prompt.finished();
});
//
// var query = `INSERT INTO  artist VALUES (default, '$artistInfo`

db.result(`INSERT INTO artist \
  VALUES (default, 'artistInfo')`)
    .then(function (result) {
        console.log(result);
    });
