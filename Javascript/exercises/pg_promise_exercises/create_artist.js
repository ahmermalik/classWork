var pgp = require('pg-promise')({
    // initialize pg-promise library. This is how you will do SQL queries to database.
});
var db = pgp({database: 'music_database'});
// connect postgres database.
var prompt = require('prompt-promise');
// initialize prompt promise library.

var artistInfo = [];

prompt('Enter an Arist Name: ')
    .then (function artistNameResp(val){  //call this user response.
        artistInfo.push(val);

        return db.result('INSERT INTO artist VALUES (default, $1)', artistInfo[0]);
        // return db.result(`INSERT INTO artist VALUES (default, ${artistInfo[0]})`);
})
    .then(function (result) {
        console.log(result);
        prompt.done();
        pgp.end();
    })
    .catch(function rejected(err){
        console.log('error:', err.stack);
        prompt.finished();
});
