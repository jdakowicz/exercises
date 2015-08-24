'use strict';

var getDate = function () {
    var date = new Date();
    return {
        day: date.getDay(),
        dayNumber: date.getUTCDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
        hour: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    };
};
var printDate = function () {
    var date = getDate(),
        days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        pre = (date.hour >= 12) ? 'PM' : 'AM',
        hours = (date.hour >= 12) ? date.hour - 12 : date.hour;
    if (date.minutes < 10) {
        date.minutes = '0' + date.minutes;
    }
    if (date.seconds < 10) {
        date.seconds = '0' + date.seconds;
    }
    console.log('Today is: ' + days[date.day] + '\n' +
        'Current time is: ' + hours + ':' + date.minutes + ':' + date.seconds + pre);
};
var getCurrentDate = function () {
    var date = getDate(),
        day = date.dayNumber,
        month = date.month + 1;
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    return month + '/' + day + '/' + date.year;
};
var triangleArea = function (a, b, c) {
    var s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
};
var rotateString = function (text) {
    var length = text.length,
        temp = '',
        i;
    for (i = 0; i < length; i++) {
        temp = text[i] + temp;
    }
    return temp;
};
var isYearLeap = function (year) {
    if (year % 4 === 0) {
        return true;
    }
    return false;
};
var findSunday = function () {
    var i = 2014,
        date;
    for (i; i <= 2050; i++) {
        date = new Date('July 10, ' + i);
        if (date.getDay() === 1) {
            return date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate();
        }
    }
};
var guessNumber = function () {
    var number = Math.floor((Math.random() * 10) + 1),
        guessed = false,
        usernumber;

    while (guessed === false) {
        usernumber = prompt('Guess the number');
        usernumber = parseInt(usernumber, 10);
        if (usernumber === number) {
            guessed = true;
            break;
        }
        if (usernumber > number) {
            console.log('lower!');
        } else {
            console.log('higher!');
        }
    }
    console.log('Gratz');
    return usernumber;
};
var daysToChristmas = function () {
    var today = new Date(),
        christmas = new Date('December 25, ' + today.getFullYear()),
        day = 1000 * 60 * 60 * 24;
    if (today.getMonth() === 11 && today.getDate() >= 25) {
        if (today.getDate() === 25) {
            console.log('Today is Chrismtas!!');
            return 0;
        }
        christmas.setFullYear(christmas.getFullYear() + 1);
    }
    return 'Days to next Christmas: ' + Math.ceil((christmas.getTime() - today.getTime()) / day);
};
var multiply = function (x, y) {
    if (isNaN(x) || isNaN(y)) {
        return;
    }
    return x * y;
};
var divide = function (x, y) {
    if (isNaN(x) || isNaN(y) || y === 0) {
        return;
    }
    return x / y;
};
var transformCelc = function (celcius) {
    return celcius * 9 / 5 + 32;
};
var transformFahr = function (fahrenheits) {
    return (fahrenheits - 32) * 5 / 9;
};
var getLocation = function () {
    return document.URL;
};

// printDate(); //prints the date
// getCurrentDate(); //returns actual date
// triangleArea(1, 2, 3); //return the triangel area of x, y, z
// rotateString('exercise');    //rotates string
// isYearLeap(2015);    //return true if year is leap
// findSunday();    //return next sunday of 10 July
// daysToChristmas();   //return number of days left to Christmas
// multiply(23, 15);    //return result of multiplying 2 numbers
// divide(4, 24);   //return result of dividing 2 numbers
// transformFahr(76);   //return tranformed F to C degrees
// transformCelc(28);   //return transformed C to F degrees
// getLocation();   //returns path fo website
// guessNumber();   //guess the number game
