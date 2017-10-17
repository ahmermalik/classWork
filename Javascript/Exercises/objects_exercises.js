//
// console.log("===================================================")
//
// console.log("                   Phonebook")
// var phonebookDict = {
//     Alice: '703-493-1834',
//     Bob: '857-384-1234',
//     Elizabeth: '484-584-2923'
// }
//
// console.log("1. Print Elizabeth's phone number.")
// console.log("Alice's phone number is " + phonebookDict.Alice + ".\n")
// //console.log(phonebookDict['Alice'])
//
// console.log("2. Add a entry to the dictionary: Kareem's number is 938-489-1234.")
//
//
// console.log(phonebookDict.Kareem = '938-489-1234');
//
// console.log("3. Delete Alice's phone entry.");
//
// console.log("You have deleted Alice's phone entry. \n" + delete phonebookDict.Alice);
//
//
//
// console.log("4. Change Bob's phone number to 968-345-2345.")
// console.log("Bob's original Phone nubmer is " + phonebookDict.Bob+ ".")
//
// phonebookDict.Bob = "968-345-2345";
//
// console.log("Bob's new Phone nubmer is " + phonebookDict.Bob+ ".\n")
//
//
//
// console.log("The most recent phonebook is: \n")
// console.log(phonebookDict)
//
// console.log("===================================================")
//
// console.log("                   Letter Histogram")
//
// console.log("How many times the letter 'a' is in the sentence: 'A man is as good as his word'")
//
// str = "A man is as good as his word";
// console.log((str.split('a').length-1));
//
//
// // The string
// var str = "I want to count the number of occurances of each char in this string";
//
// // A map (in JavaScript, an object) for the character=>count mappings
// var counts = {};
//
// // Misc vars
// var ch, index, len, count;
//
// // Loop through the string...
// for (index = 0, len = str.length; index < len; ++index) {
//     // Get this character
//     ch = str.charAt(index); // Not all engines support [] on strings
//
//     // Get the count for it, if we have one; we'll get `undefined` if we
//     // don't know this character yet
//     count = counts[ch];
//
//     // If we have one, store that count plus one; if not, store one
//     // We can rely on `count` being falsey if we haven't seen it before,
//     // because we never store falsey numbers in the `counts` object.
//     counts[ch] = count ? count + 1 : 1;
// }
//
// for (ch in counts) {
//     console.log(ch + " count: " + counts[ch]);
// }


//     //Javascript primitive to objects by adding 'new' //
// var x1 = new Object();    // A new Object object
// var x2 = new String();    // A new String object
// var x3 = new Number();    // A new Number object
// var x4 = new Boolean();   // A new Boolean object
// var x5 = new Array();     // A new Array object
// var x6 = new RegExp();    // A new RegExp object
// var x7 = new Function();  // A new Function object
// var x8 = new Date();      // A new Date object

function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
var myFather = new person("John", "Doe", 50, "blue");
var myMother = new person("Sally", "Rally", 48, "green");

//console.log(myMother)

