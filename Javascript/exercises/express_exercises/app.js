var express = require('express');
var app = express();
var body_parser = require('body-parser');


/** sets the template engine to handle bars**/
app.set('view engine', 'hbs');

/** sets the public directory as public. (for images and such)**/
app.use('/public', express.static('public'));
app.use(body_parser.urlencoded({extended: false}));

app.get("/", function (request, response) {
    response.send('<html>');
});
/** this will render a response based on your url query: localhost:8000/cats will render "Meow meow meow" from your cat.hbs file **/
app.get("/cats", function (request, response) {
    response.render('cat');
});

app.get("/dogs", function (request, response) {
    response.render('dog');
});

app.get("/cats_and_dogs", function (request, response) {
    response.render('cats_and_dog');
});

/**This will allow you to render a response based on your url query. this example renders:
 http://localhost:8000/greet/ahmer?userage=25 "Hello ahmer You're born in 1992" **/

app.get('/greet/:name', function (request, response) {
    var name = request.params.name;
    var userage = request.query.userage;
    var year = 2017 - userage;
    var context = {title: 'hello', name:name, year:year}
    response.render('greet.hbs', context);


});

app.get('/fav_animals', function (request, response) {
    var animals = [
        { name: 'cats', favorite: true },
        { name: 'dogs', favorite: true },
        { name: 'tree frogs', favorite: true },
        { name: 'earth worms', favorite: false },
        { name: 'guinea pigs', favorite: true },
    ];
    var context = {title: 'hello', animals:animals}
    response.render('fav_animals.hbs', context);
});


app.get('/year', function (request, response) {
    var userage = request.query.userage;
    response.send(`You were born in ${2017 - userage}.`);
});




app.get('/', function (request, response) {
    response.send('Hello World!');
});
app.listen(8000, function () {
    console.log('Listening on port 8000');
});c