var pgp = require('pg-promise')({
    // initialize pg-promise library. This is how you will do SQL queries to database.
});
var db = pgp({database: 'music_database'});

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