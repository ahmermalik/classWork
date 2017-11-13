npm install pbkdf2  //two required libraries

npm install crypto

//you want to store the password varibles/methods in another file, separate from your app.js file. Save it in a password.js
//this is a one way encryption.w
var pbkdf2 = require('pbkdf2');  //calling the modules.
var crytpo = require('crypto'); //calling the modules.


var salt = crypto.randomBytes(20).toString('hex');
var password = 'some-password';
var key = pbkdf2.pbkdf2Sync(
    password, salt, 36000, 256, 'sha256' //36000 is how many iteration it does to the encryption. the higher the number the better the encryption, but it takes longer. 256 is how long the hash will be, longer the hash, the better.
);
var hash = key.toString('hex');


var stored_pass = `pbkdf2_sha256$36000$${salt}$${hash}`;   //how the program will store the password in your database. it is documenting what algorithm you used "pbkdf2"
// checking a password
var pass_parts = stored_pass.split('$');
var key = pbkdf2.pbkdf2Sync(
    'some-password',
    pass_parts[2],
    parseInt(pass_parts[1]),
    256, 'sha256'
);


var hash = key.toString('hex');
if (hash === pass_parts[3]) {
    console.log('Passwords Matched!');
}


npm install pbkdf2-helpers

https://www.npmjs.com/package/pbkdf2-helpers

// /Users/ahmermalik/PycharmProjects/Coursework/Javascript/notes/storingpasswords.js