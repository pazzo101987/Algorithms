// 1-Setting and Swapping

let myNumber = 42;
let myName = "Hamza";

// Swapping values using a temporary variable
let temp = myNumber;
myNumber = myName;
myName = temp;

console.log("myNumber:", myNumber);
console.log("myName:", myName);

// 2- Print -52 to 1066

for (var i = -52; i <= 1000; i++) {
    console.log(i);
}

console.log("Done!");

//Don't Worry Be Happy!

for (var i = 1; i < 99; i++) {
    console.log("good morning!")
}

//Multiples of three , But not All

for (var i = -300; i < 1; i = i + 3) {
    if (i == -3 || i == -6) {
        continue;
    }
    console.log(i);
}

//Printing Integers While

let number = 2000;

while (number <= 5280) {
    console.log(number);
    number++;
}

//You Say It’s Your Birthday

function checkBirthday(day, month) {
    const BirthDay = 10
    const BirthMonth = 12
    if ((day === BirthDay && month === BirthMonth) || (day === BirthMonth && month === BirthDay)) {
        console.log("You're right !")
    } else {
        console.log("Fail !")
    }
}
checkBirthday(10, 10);

//Leap Year

function LeapYear(year) {
    if ((year % 4 === 0 && year % 100 === 0) || (year % 400 === 0)) {
        console.log("it's a leap year !")
    } else {
        console.log("it's not a leap year !")
    }
}
LeapYear(year);

//Print and Count
var count = 0;

for (var i = 512; i < 4097; i++) {
    if (i % 5 === 0) {
        console.log(i);
        count++;
    }
}

console.log('Total count:', count);

//Multiples of 6

let num = 6;

while (num <= 60000) {
    console.log(num);
    num += 6;
}

//Counting, the Dojo Way

for (var i = 1; i < 101; i++) {
    if (i % 5 === 0) {
        console.log("Coding")
    }
    if (i % 10 === 0) {
        console.log("Dojo")
    }
}

//What do you know

function logIncoming(incoming) {
    console.log(incoming);
}

// Example usage
const exampleValue = "Hello, world!";
logIncoming(exampleValue);


//Whoa, That Sucker’s Huge…
// var sum = 0;
// for (var i = -300000 ; i < 300001 ; i++ ){
//     if (i % 2 !== 0){
//         sum = sum + i;
//     }
// }
// console.log(sum);


//Countdown by Fours

function countdown4() {
    var i = 2016;
    while (i != 0) {
        console.log(i);
        i -= 4;
    }
}

countdown4();

// Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).

function flexCountdown(lowNum, highNum, mult) {
    for (var i = highNum; i > lowNum; i = i - 3) {
        console.log(i);
    }
}

flexCountdown(2, 9, 3);

