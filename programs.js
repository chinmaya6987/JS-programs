// 1. The hello world program
console.log('Hello World');

//2. Add two numbers
const num1 = 5;
const num2 = 3;
const sum = num1 + num2;
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

// 3. Square root of the number
const number = prompt('Enter the number: ');
const result = Math.sqrt(number);
console.log(`The square root of ${number} is ${result}`);

//4. Calculate the area of the triangle
const baseValue = prompt('Enter the base of a triangle: ');
const heightValue = prompt('Enter the height of a triangle: ');

// calculate the area
const areaValue = (baseValue * heightValue) / 2;

console.log(
  `The area of the triangle is ${areaValue}`
);

//5. JavaScript program to swap two variables
//take input from the users
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');
//create a temporary variable
let temp;
//swap variables
temp = a;
a = b;
b = temp;
console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

//6. program to convert celsius to fahrenheit
// ask the celsius value to the user 
const celsius = prompt("Enter a celsius value: ");
// calculate fahrenheit
const fahrenheit = (celsius * 1.8) + 32
// display the result
console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);

//7.Generating  a random number
const a = Math.random();
console.log(a);

//8.program that checks if the number is positive, negative or zero by using if, else if, else
const number = parseInt(prompt("Enter a number: "));
// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}
// check if number is 0
else if (number == 0) {
  console.log("The number is zero");
}
// if number is less than 0
else {
     console.log("The number is negative");
}

//9.program to check if the number is even or odd
const number = prompt("Enter a number: ");
//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}
// if the number is odd
else {
    console.log("The number is odd.");
}

//10.program to find the largest among three numbers
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));
let largest;
// check the condition
if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}
// display the result
console.log("The largest number is " + largest);

//11.program to check if a number is prime or not
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;
// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}
// check if number is greater than 1
else if (number > 1) {
// looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}
// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}

//12.program to find the factorial of a number
const number = parseInt(prompt('Enter a positive integer: '));
// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}
// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}
// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}

//13.program to generate a multiplication table
const number = parseInt(prompt('Enter an integer: '));
//creating a multiplication table
for(let i = 1; i <= 10; i++) {
// multiply i with number
    const result = i * number;
// display the result
    console.log(`${number} * ${i} = ${result}`);
}

//14.program to generate fibonacci series up to n terms
const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;
console.log('Fibonacci Series:');
for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

//15.program to check an Armstrong number of three digits
let sum = 0;
const number = prompt('Enter a three-digit positive integer: ');
// create a temporary variable
let temp = number;
while (temp > 0) {
    // finding the one's digit
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}
// check the condition
if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}

//16. program for a simple calculator

const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}
// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);

//17. program to display the sum of natural numbers
const number = parseInt(prompt('Enter a positive integer: '));

let sum = 0;

// looping from i = 1 to number
// in each iteration, i is increased by 1
for (let i = 1; i <= number; i++) {
    sum += i;
}
console.log('The sum of natural numbers:', sum);

//18.program to check whether the last digit of three numbers is same 
const a = prompt('Enter a first integer: ');
const b = prompt('Enter a second integer: ');
const c = prompt('Enter a third integer: ');

// find the last digit
const result1 = a % 10;
const result2 = b % 10;
const result3 = c % 10;

// compare the last digits
if(result1 == result2 && result1 == result3) {
    console.log(`${a}, ${b} and ${c} have the same last digit.`);
}
else {
    console.log(`${a}, ${b} and ${c} have different last digit.`);
}

//19. program to find the HCF or GCD of two integers
let hcf;
const number1 = prompt('Enter a first positive integer: ');
const number2 = prompt('Enter a second positive integer: ');

// looping from 1 to number1 and number2
for (let i = 1; i <= number1 && i <= number2; i++) {

    // check if is factor of both integers
    if( number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    }
}
console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);

//20. program to find the LCM of two integers
const num1 = prompt('Enter a first positive integer: ');
const num2 = prompt('Enter a second positive integer: ');

// higher number among number1 and number2 is stored in min
let min = (num1 > num2) ? num1 : num2;

// while loop
while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        break;
    }
    min++;
}

//21. program to find the factors of an integer
const num = prompt('Enter a positive number: ');

console.log(`The factors of ${num} is:`);

// looping through 1 to num
for(let i = 1; i <= num; i++) {

    // check if number is a factor
    if(num % i == 0) {
        console.log(i);
    }
}

//22.program to find the sum of natural numbers using recursion
function sum(num) {
    if(num > 0) {
        return num + sum(num - 1);
    }
    else {
        return num;
    }
 }

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

const result = sum(number);
console.log(`The sum is ${result}`);

//23.program where the user has to guess a number generated by a program
function guessNumber() {

    // generating a random integer from 1 to 10
    const random = Math.floor(Math.random() * 10) + 1;

    // take input from the user
    let number = parseInt(prompt('Guess a number from 1 to 10: '));

    // take the input until the guess is correct
    while(number !== random) {
        number = parseInt(prompt('Guess a number from 1 to 10: '));
    }

    // check if the guess is correct
    if(number == random) {
        console.log('You guessed the correct number.');
    }

  }
guessNumber();

//24.program to reverse a string
function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// take input from the user
const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);

//25.program to convert decimal to binary
function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
        console.log(
            `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
        );
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    console.log(`Binary: ${bin}`);
}

// take input
let number = prompt('Enter a decimal number: ');
convertToBinary(number);

//26.program to check if the string is palindrome or not
function checkPalindrome(str) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const string = prompt('Enter a string: ');

// call the function
const value = checkPalindrome(string);
console.log(value);

//27.program to reverse a string
function reverseString(str) {
    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
// take input from the user
const string = prompt('Enter a string: ');
const result = reverseString(string);
console.log(result);

//28.program to convert first letter of a string to uppercase
function capitalizeFirstLetter(str) {

    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}
// take input
const string = prompt('Enter a string: ');
const result = capitalizeFirstLetter(string);
console.log(result);

//29.program to count the number of vowels in a string
function countVowel(str) { 
    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;
    // return number of vowels
    return count;
}
// take input
const string = prompt('Enter a string: ');
const result = countVowel(string);
console.log(result);

//30.program to merge property of two objects
// object 1
const person = {
    name: 'Jack',
    age:26
}
// object 2
const student = {
    gender: 'male'
}
// merge two objects
const newObj = Object.assign(person, student);
console.log(newObj);

//31. program to generate random strings
// declare all characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
console.log(generateString(5));

//32.compare two strings
const string1 = 'JavaScript Program';
const string2 = 'javascript program';
// compare both strings
const result = string1.toUpperCase() === string2.toUpperCase();
if(result) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}

//33.program to display the date and time
// get date and time
const date = new Date(2017, 2, 12, 9, 25, 30);
// get the date as a string
const n = date.toDateString();
// get the time as a string
const time = date.toLocaleTimeString();
// display date
console.log('Date: ' + n);
// display time
console.log('Time: ' + time);

//34.program to check leap year
function checkLeapYear(year) {
    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}
// take input
const year = prompt('Enter a year:');
checkLeapYear(year);

//35.program to format the date
// get current  date
let currentDate = new Date();
// get the day from the date
let day = currentDate.getDate();
// get the month from the date
// + 1 because month starts from 0
let month = currentDate.getMonth() + 1;
// get the year from the date
let year = currentDate.getFullYear();
// if day is less than 10, add 0 to make consistent format
if (day < 10) {
    day = '0' + day;
}
// if month is less than 10, add 0
if (month < 10) {
    month = '0' + month;
}
// display in various formats
const formattedDate1 = month + '/' + day + '/' + year;
console.log(formattedDate1);
const formattedDate2 = month + '-' + day + '-' + year;
console.log(formattedDate2);
const formattedDate3 = day + '-' + month + '-' + year;
console.log(formattedDate3);
const formattedDate4 = day + '/' + month + '/' + year;
console.log(formattedDate4);

//35.program to display the date
// get local machine date time
const date = new Date();
// get the date as a string
const n = date.toDateString();
// get the time as a string
const time = date.toLocaleTimeString();
// display date
console.log('Date: ' + n);
// display time
console.log('Time: ' + time);

//36.program to create a countdown timer
// time to countdown from (in milliseconds)
let countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000;
// countdown timer
let x = setInterval(function() {
    // get today's date and time in milliseconds
    let now = new Date().getTime();
    // find the interval between now and the countdown time
    let timeLeft = countDownDate - now;
    // time calculations for days, hours, minutes and seconds
    const days = Math.floor( timeLeft/(1000*60*60*24) );
    const hours = Math.floor( (timeLeft/(1000*60*60)) % 24 );
    const minutes = Math.floor( (timeLeft/1000/60) % 60 );
    const seconds = Math.floor( (timeLeft/1000) % 60 );
    // display the result in the element with id="demo"
    console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
    // clearing countdown when complete
    if (timeLeft < 0) {
        clearInterval(x);
        console.log('CountDown Finished');
    }
    }, 2000);

//37. program to remove item from an array
function removeItemFromArray(array, n) {
    const newArray = [];

    for ( let i = 0; i < array.length; i++) {
        if(array[i] !== n) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
const result = removeItemFromArray([1, 2, 3 , 4 , 5], 2);
console.log(result);    

//38.program to insert an item at a specific index into an array
function insertElement() {
    let array = [1, 2, 3, 4, 5];
    // index to add to
    let index = 3;
    // element that you want to add
    let element = 8;
  array.splice(index, 0, element);
    console.log(array);
}
insertElement();

//39.program to check if an object is an array
function checkObject(arr) {

    // check if arr is array
    const result = Array.isArray(arr);

    if(result) {
        console.log(`[${arr}] is an array.`);
    }
    else {
        console.log(`${arr} is not an array.`);
    }
}
const array = [1, 2, 3];
// call the function
checkObject(array);

//40.program to empty an array
function emptyArray(arr) {

    // substituting new array
    arr = [];
    
    return arr;
}
const array = [1, 2 ,3];
console.log(array);
// call the function
const result = emptyArray(array);
console.log(result);

//41.program to add element to an array using unshift
function addElement(arr) {
    // adding new array element
    arr.unshift(4);
    console.log(arr);
}
const array = [1, 2, 3];
// calling the function
// passing array argument
addElement(array);

//42.program to remove duplicate value from an array using IndexOf and push
function getUnique(arr){    
    let uniqueArr = [];
    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}
const array = [1, 2, 3, 2, 3];
// calling the function
// passing array argument
getUnique(array);

//43.program to merge and remove duplicate value from an array
function getUniqueAfterMerge(arr1, arr2){
// merge two arrays
    let arr = arr1.concat(arr2);
    let uniqueArr = [];

    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}
const array1 = [1, 2, 3];
const array2 = [2, 3, 5]
// calling the function
// passing array argument
getUniqueAfterMerge(array1, array2);

//44.program to compare two arrays using JSON.stringify
function compareArrays(arr1, arr2) {
    // compare arrays
    const result = JSON.stringify(arr1) == JSON.stringify(arr2)

    // if result is true
    if(result) {
        console.log('The arrays have the same elements.');
    }
    else {
        console.log('The arrays have different elements.');
    }

}
const array1 = [1, 3, 5, 8];
const array2 = [1, 3, 5, 8];
compareArrays(array1, array2);

//45.program to get a random item from an array
function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    return item;
}
const array = [1, 'hello', 5, 8];
const result = getRandomItem(array);
console.log(result);

//46.program to check if a variable is undefined or null
function checkVariable(variable) {
    if(variable == null) {
        console.log('The variable is undefined or null');
    }
    else {
       console.log('The variable is neither undefined nor null');
    }
}
let newVariable;
checkVariable(5);
checkVariable('hello');
checkVariable(null);
checkVariable(newVariable);

//46.Integer Value Between Two Numbers
// input from the user
const min = parseInt(prompt("Enter a min value: "));
const max = parseInt(prompt("Enter a max value: "));
// generating a random number
const a = Math.floor(Math.random() * (max - min + 1)) + min;
// display a random number
console.log(`Random value between ${min} and ${max} is ${a}`);

//47.Get The Current URL
const url1 = window.location.href;
const url2 = document.URL;
console.log(url1);
console.log(url2);

//48. program to check if a variable is of function type
function testVariable(variable) {
      
    if(variable instanceof Function) {
        console.log('The variable is of function type');
    }
    else {
        console.log('The variable is not of function type');
    }
}
const count = true;
const x = function() {
    console.log('hello')
};
testVariable(count);
testVariable(x);

//49.program to convert date to number
// create date
const d1 = new Date();
console.log(d1);
// converting to number
const result = d1.getTime();
console.log(result);

//50. program to get the dimensions of an image
const img = new Image();
// get the image
img.src = '//cdn.programiz.com/sites/tutorial2program/files/cover-artwork.png';

// get height and width
img.onload = function() {
  console.log('width ' + this.width)
  console.log('height '+ this.height);
}