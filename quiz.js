/* var answer = prompt('What is PL is a name of a gem?');
if (answer.toUpperCase() === 'RUBY') {
    document.write("<p> That's right </p>");
} else {
    document.write("<p> Sorry, that's wrong </p>");
} */

/* var randomNumber = Math.floor(Math.random() * 7) + 1;
var guess = prompt("What number am i thinking between 1 and 7 = ");
if (parseInt(guess) === randomNumber) {
    document.write ('Your guess is right!,');
} else {
    document.write ('Oops, your guess is wrong. ' + randomNumber + ' is the correct number');
} */

var number = prompt('Enter a number between 1 - 100 = ');
enteredNum = parseInt(number);
if ((number % 3) === 0) {
    document.write ("Fizz");
} else {
    document.write ("Fizzbuzz");
}
