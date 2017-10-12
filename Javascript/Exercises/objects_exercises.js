

var phonebookDict = {
    Alice: '703-493-1834',
    Bob: '857-384-1234',
    Elizabeth: '484-584-2923'
}

console.log("1. Print Elizabeth's phone number.")
console.log("Alice's phone number is " + phonebookDict.Alice + ".\n")
//console.log(phonebookDict['Alice'])

console.log("2. Add a entry to the dictionary: Kareem's number is 938-489-1234.")


console.log(phonebookDict.Kareem = '938-489-1234');

console.log("3. Delete Alice's phone entry.");

console.log("You have deleted Alice's phone entry. \n" + delete phonebookDict.Alice);



console.log("4. Change Bob's phone number to 968-345-2345.")
console.log("Bob's original Phone nubmer is " + phonebookDict.Bob+ ".")

phonebookDict.Bob = "968-345-2345";

console.log("Bob's new Phone nubmer is " + phonebookDict.Bob+ ".\n")



console.log("The most recent phonebook is: \n")
console.log(phonebookDict)

