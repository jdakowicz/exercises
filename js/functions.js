'use strict';

var isEmpty = function (word) {
    if (word === '' || word === undefined || word === null) {
        return true;
    }
    return false;
};
var getReversedSentence = function (number) {
    if (isEmpty(number)) {
        return;
    }
    return number.toString().split('').reverse().join('');
};
var isPalindrome = function (sentence) {
    if (isEmpty(sentence)) {
        return false;
    }
    if (sentence.length === 1) {
        return true;
    }
    var temp = sentence.toLowerCase().trim().replace(/\s/g, ''),
        i;
    if (temp.length % 2 === 0) {
        for (i = 0; i < temp.length / 2; i++) {
            if (!(temp[i] === temp[temp.length - 1 - i])) {
                return false;
            }
        }
        return true;
    }
    for (i = 0; i < (temp.length - 1) / 2; i++) {
        if (!(temp[i] === temp[temp.length - 1 - i])) {
            return false;
        }
    }
    return true;
};
var getCombinations = function (word) {
    if (isEmpty(word)) {
        return;
    }
    if (word.length === 1) {
        return word;
    }
    var temp = word.toString(),
        i,
        j,
        list = [];
    for (i = 0; i < temp.length; i++) {
        for (j = 1; j < temp.length; j++) {
            list.push(temp.slice(i, j + i));
        }
    }
    return list.join();
};
var order = function (word) {
    if (isEmpty(word)) {
        return;
    }
    if (word.length === 1) {
        return word;
    }
    return word.toString().split('').sort().join('');
};
var toUpperAfterSpace = function (word) {
    if (isEmpty(word)) {
        return;
    }
    if (word.length === 1) {
        return word.toUpperCase();
    }
    var temp = [];
    word = word.trim().split(' ');
    word.forEach(function (item) {
        temp.push(item[0].toUpperCase() + item.slice(1));
    });
    return temp.join(' ');
};
var findLongestWord = function (word) {
    if (isEmpty(word)) {
        return;
    }
    if (word.length === 1) {
        return word.toString();
    }
    var words = word.toString().split(' '),
        longest = words[0],
        longests = [ longest ],
        i;
    for (i = 1; i < words.length; i++) {
        if (longest.length === words[i].length) {
            longests.push(words[i]);
        }
        if (longest.length < words[i].length) {
            longest = words[i];
            longests = [words[i]];
        }
    }
    return longests;
};
var getVowelsAmount = function (word) {
    if (isEmpty(word)) {
        return;
    }
    var temp = word.toString().trim(),
        vowels = ['a', 'e', 'i', 'o', 'u', 'y'],
        i,
        counter = 0;
    for (i = 0; i < temp.length; i++) {
        if (vowels.indexOf(temp[i]) >= 0) {
            counter++;
        }
    }
    return counter;
};
var isPrime = function (number) {
    if (isEmpty(number)) {
        return false;
    }
    if (isNaN(number)) {
        return false;
    }
    var i;
    for (i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};
var getType = function (param) {
    return typeof param;
};
var getIdentityMatrix = function (number) {
    if (isEmpty(number) || isNaN(number)) {
        return;
    }
    var matrix = [],
        i,
        j,
        row;
    for (i = 0; i < number; i++) {
        row = [];
        for (j = 0; j < number; j++) {
            if (i === j) {
                row.push(1);
            } else {
                row.push(0);
            }
        }
        console.log(row);
        matrix.push(row);
    }
    return matrix;
};
var getSeconds = function (numbers) {
    if (isEmpty(numbers)) {
        return;
    }
    if (numbers.length === 1) {
        return numbers[0] + ' ' + numbers[0];
    }
    if (numbers.length === 2) {
        return numbers[1] + ' ' + numbers[0];
    }
    var finalNumbers = [],
        i;
    for (i = 0; i < numbers.length; i++) {
        if (finalNumbers.indexOf(numbers[i]) < 0) {
            finalNumbers.push(numbers[i]);
        }
    }
    finalNumbers = finalNumbers.sort(function (x, y) {
        return x - y;
    });
    return finalNumbers[1] + ' ' + finalNumbers[finalNumbers.length - 2];
};
var isPerfect = function (number) {
    if (isEmpty(number) || isNaN(number)) {
        return;
    }
    var i,
        sum = 0;
    for (i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum = sum + i;
        }
    }
    if (sum === number) {
        return true;
    }
    return false;
};
var getPositiveFactors = function (number) {
    if (isEmpty(number) || isNaN(number)) {
        return;
    }
    var i,
        result = [number];
    for (i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            result.push(i);
        }
    }
    return result.sort(function (x, y) {
        return x - y;
    });
};
var getAmountToCoins = function (number, coins) {
    if (isEmpty(number) || isNaN(number) || isEmpty(coins)) {
        return;
    }
    // TODO
};
var extractUniques = function (word) {
    if (isEmpty(word)) {
        return;
    }
    var i,
        result = [];
    for (i = 0; i < word.length; i++) {
        if (result.indexOf(word[i]) < 0) {
            result.push(word[i]);
        }
    }
    return result.join('');
};
