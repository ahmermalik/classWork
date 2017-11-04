var co = require('co');
var prompt = require('prompt-promise');
var res = [];

//user will be prompted for a 'username'
prompt('username: ')
    //then a function name username will run
    .then(function username(val) {
        //add the user input 'val' into the res list.
        res.push(val);
        return prompt.password('password: ');
    })
    .then(function pasword(val) {
        //add the user input 'val' into the res list.
        res.push(val);
        console.log(res);
        prompt.done();
    })
    .catch(function rejected(err) {
        console.log('error:', err.stack);
        prompt.finish();
    });