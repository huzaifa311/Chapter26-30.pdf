//                                      MATH METHODS

/*Question No 1: Write a program that takes a positive integer from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number*/
var num = prompt("Enter a positive number:");
num = Number(num);
var rounded = Math.round(num);
var ceiled = Math.ceil(num);
var floored = Math.floor(num);
document.write("Number: " + num + "<br />" );
document.write("Round off value: " + rounded + "<br />" );
document.write("Floor value: " + floored + "<br />" );
document.write("Ceil value: " + ceiled + "<br />" );

/*Question No 2: Write a program that takes a negative floating point
number from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */
var num = prompt("Enter a negative floating point number:");
num = Number(num);
var rounded = Math.round(num);
var floored = Math.floor(num);
var ceiled = Math.ceil(num);
document.write("Number: " + num + "<br />" );
document.write("Round off value: " + rounded + "<br />" );
document.write("Floor value: " + floored + "<br />" );
document.write("Ceil value: " + ceiled + "<br />" );

/*Question No 3: Write a program that displays the absolute value of a
number.
E.g. absolute value of -4 is 4 & absolute value of 5 is 5 */
var num = prompt("Enter a number:");
num = Number(num);
var absValue = Math.abs(num);
document.write("Absolute value of " + num + " is " + absValue);

/*Question No 4: Write a program that simulates a dice using random()
method of JS Math class. Display the value of dice in your
browser.:*/
var diceValue = Math.floor(Math.random() * 6) + 1;
document.write("Random dice value: " + diceValue);

/*Question No 5: Write a program that simulates a coin toss using random()
method of JS Math class. Display the value of coin in your
browser*/
var tossValue = Math.random();
var coinValue = (tossValue < 0.5) ? "Heads" : "Tails";
document.write("<p>Random coin toss value: " + coinValue + "</p>");

/*Question No 6: Write a program that shows a random number between 1
and 100 in your browser.*/
var randomNumber = Math.floor(Math.random() * 100) + 1;
document.write("Random number between 1 and 100: " + randomNumber);

/*Question No 8: Write a program that stores a random secret number from
1 to 10 in a variable. Ask the user to input a number
between 1 and 10. If the user input equals the secret
number, congratulate the user*/
var secretNumber = Math.floor(Math.random() * 10) + 1;
var guess = +prompt("Guess the secret number between 1 and 10:");
if(guess === secretNumber){
    document.write("Congratulations! You guessed the secret number " + secretNumber + " correctly.");
}else{
    document.write("Sorry, the secret number was " + secretNumber + ". Better luck next time!");
}