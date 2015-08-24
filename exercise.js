/*eslint-env jquery, node, browser */
'use strict';
$(document).ready(function () {
    function getDate() {
        var date = new Date();
        return {day: date.getDay(),
                dayNumber: date.getUTCDate(),
                    month: date.getMonth(),
                    year: date.getFullYear(),
                    hour: date.getHours(),
                    minutes: date.getMinutes(),
                    seconds: date.getSeconds()
                };
    }
    function printDate() {
        var date = getDate(),
            days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            pre = (date.hour >= 12) ? 'PM' : 'AM',
            hours = (date.hour >= 12) ? date.hour - 12 : date.hour;
        (date.minutes < 10) ? date.minutes = '0' + date.minutes : date.minutes = date.minutes,
        (date.seconds < 10) ? date.seconds = '0' + date.seconds : date.seconds = date.seconds;
        $('.result').text('Today is: ' + days[date.day] + '\n' +
            'Current time is: ' + hours + ':' + date.minutes + ':' + date.seconds + pre);
    }

    function currentDate() {
        var date = getDate(),
            day = date.dayNumber,
            month = date.month + 1;
        (day < 10) ? day = '0' + day : day;
        (month < 10) ? month = '0' + month : month;
        $('.result').text(month + '/' + day + '/' + date.year);

    }
    function triangleArea(a, b, c) {
        var s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }
    function rotateString(text) {
        var length = text.length,
            temp = '',
            i;
        for (i = 0; i < length; i++) {
            temp = text[i] + temp;
        }
        return temp;
    }
    function leapYear() {
        var year = prompt('Give the year');
        (year % 4 === 0) ? $('.result').text(year + ' is leap.') : $('.result').text(year + ' is not leap.');
    }
    function findSunday() {
        var i = 2014,
            date;
        for (i; i <= 2050; i++) {
            date = new Date('July 10, ' + i);
            if (date.getDay() === 1) {
                $('.result').text(date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate());
                return;
            }
        }
    }
    function guess() {
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
                $('.result').text('lower!');
            } else {
                $('.result').text('higher!');
            }

        }
        $('.result').text('Gratz');
    }
    function daysToChristmas() {
        var today = new Date(),
            christmas = new Date('December 25, ' + today.getFullYear()),
            day = 1000 * 60 * 60 * 24;
        if (today.getMonth() === 11 && today.getDate() >= 25 ) {
            if (today.getDate() === 25) {
                console.log('Today is Chrismtas!!');
                return;
            }
            christmas.setFullYear(christmas.getFullYear() + 1);
        }
        $('.result').text('Days to next Chrismtas: ' + Math.ceil((christmas.getTime() - today.getTime()) / day));
    }
    function multiply() {
        var x = $('#input-x').val(),
            y = $('#input-y').val();
        if (isNaN(x) || isNaN(y)) {
            $('.result').text('Error - x or y is not a number!');
            return;
        }
        $('.result').text(x * y);
    }
    function divide() {
        var x = $('#input-x').val(),
            y = $('#input-y').val();
        if (isNaN(x) || isNaN(y)) {
            $('.result').text('Error - x or y is not a number!');
            return;
        }
        if (y === 0) {
            $('.result').text('You cant divide by "0"!!');
            return;
        }
        $('.result').text(x / y);
    }
    function transformCelc() {
        var celc = prompt('Give the number in Celcius');
        $('.result').text(celc + 'C = ' + celc * 9 / 5 + 32 + 'F');
    }
    function transformFar() {
        var far = prompt('Give the number in Fahrenheits');
        $('.result').text(far + ' F = ' + (far - 32) * 5 / 9 + 'C');
    }
    function getLocation() {
        $('.result').text(document.URL);
    }
    $('.time').on('click', function () {
        printDate();
    });
    $('.date').on('click', function () {
        currentDate();
    });
    $('.print').on('click', function () {
        window.print();
    });
    $('.triangle').on('click', function () {
        $('.result').text(triangleArea(5, 6, 7));
    });
    $('.swap').on('click', function () {
        $('.result').text('w3resource ->' + rotateString('w3resource'));
    });
    $('.leap').on('click', function () {
        leapYear();
    });
    $('.january').on('click', function () {
        findSunday();
    });
    $('.guess').on('click', function () {
        guess();
    });
    $('.christmas').on('click', function () {
        daysToChristmas();
    });
    $('.multiply').on('click', function (e) {
        e.preventDefault();
        multiply();
    });
    $('.divide').on('click', function (e) {
        e.preventDefault();
        divide();
    });
    $('.tranform-celc').on('click', function () {
        transformCelc();
    });
    $('.tranform-far').on('click', function () {
        transformFar();
    });
    $('.location').on('click', function () {
        getLocation();
    });
});
