/**---------------------- Closures ----------------------**/


function add (x) {
//declare add function that takes the parameter 'x'
    var actually_add = function (y) {
//declare an actually_add variable that takes a function 'y' which adds x to the y.
        return x + y;
    }
    return actually_add;
// return the answer for x + y
}

// console.log(add(3)(4));


// function counter () {
//     var count = 0;
//     var actuallyCount = function () {
//         count++;
//         return count;
//     }
//     return actuallyCount;
// }
//
// console.log(counter());

/** Make a counter function that returns a function that returns a successive number each time it is called. **/

function counter() {
    var count = 0;
    var actualCount = function () {
        count += 1
        return count

    }
    return actualCount;
}

var count1 = counter();
var count2 = counter();

// console.log(count1());
// console.log(count1());
// console.log(count2())

/** Allow the caller of counter to initialize the count to the first argument that's passed in. **/




 function counter(x) {
    var count = x;
    var actualCount = function () {
        count += 1
        return count

    }
    return actualCount;w
}


var count = counter(2);
//
// console.log(count());
// console.log(count());



/**---------------------- Javascript Objects ----------------------**/

/** greet **/
function Person (name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
}

Person.prototype.greet = function (other) {
    console.log(`Hello ${other.name}, I'm ${this.name}`);

Person.prototype.information = function (other){
    console.log(`${other.name}, my contact information is ${this.email} and ${this.phone}, you can also hit me up on instagram. `);
}

}

var ahmer = new Person('Ahmer','ahmer@email.com','832-541-0012');
var ashar = new Person('Ashar','ashar@email.com', '281-821-0034');

// ahmer.greet(ashar)
// ashar.greet(ahmer)
//
// ashar.information(ahmer)
// ahmer.information(ashar)
//
// console.log(ahmer.email, ahmer.phone);
// console.log(ashar.email, ashar.phone);

/** Card Constructor **/
function Card (point, suit) {
    this.point = point;
    this.suit = suit;

}

Card.prototype.getimageurl = function () {
    return `Blackjack/images/${this.point}_of_${this.suit}.png `;
}

var myCard = new Card (2, 'clubs')
console.log(myCard.getimageurl());

console.log(myCard.point);

console.log(myCard.suit);