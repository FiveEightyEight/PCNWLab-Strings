/*
 *  README!!!
 *  For the problems below, use only string methods / conditionals, etc
 *  it may be tempting to use concepts like looping but do not attempt! 
 */
 
 
/* 1
    @func makeEven
    @param {string} str
    @returns {string}
    @desc - if the input string is odd number of characters, 
            add a "#" to make it even number of characters
            otherwise return string
    @example - makeEven('taq');  // 'taq#'
    @example - makeEven('john'); // 'john'
*/

const makeEven = (string) => {
    if (string.length % 2 !== 0){
        string += '#';
    }
    return string;
}

console.log(makeEven('odd'))
console.log(makeEven('even'))
/* 2
    @func getLastChar
    @param {string} str
    @returns {string}
    @desc - return the last character in string
    @example - getLastChar('taq'); // 'q'
*/

const getLastChar = (str) => {
    return str.charAt(str.length-1);
}

console.log(getLastChar('jeX'));
/* 3
    @func get3rdChar
    @param {string} str
    @returns {string}
    @desc - return the third character in string
    @example - get3rdChar('taq'); // 'q'
    @example - get3rdChar('mo'); // 'not enough characters!'
*/

const get3rdChar = (str) => {
    if (str.length-1 < 2) {
        return 'not enough characters!';
    }
    return str.charAt(2);
}
console.log(get3rdChar('An'));
console.log(get3rdChar('Jex'));

/* 4
    @func get3rdCharFromEnd
    @param {string} str
    @returns {string}
    @desc - return the third character _FROM THE END_ in string
    @example - get3rdCharFromEnd('taq'); // 't'
    @example - get3rdCharFromEnd('mo'); // 'not enough characters!'
    @example - get3rdCharFromEnd('taq karim'); // 'r'
*/

const get3rdCharFromEnd = (str) => {
    if(str.length - 1 < 2){
        return 'not enough characters!';
    }
    return str.charAt(str.length-3);
}
console.log(get3rdCharFromEnd('robert'));
console.log(get3rdCharFromEnd('box'));
/* 5
    @func startsWithVowel
    @param {string} str
    @returns {boolean}
    @desc - if string STARTS with vowel, return true
    @example - startsWithVowel('taq'); // false
    @example - startsWithVowel('Dfghjkl'); // false
    @example - startsWithVowel('andy'); // true
    @example - startsWithVowel('Andy'); // true
*/

const startsWithVowel = (str) => {
    str = str.toLowerCase();

    if (str.charAt(0) === 'a' || str.charAt(0) === 'e' || str.charAt(0) === 'i' || str.charAt(0) === 'o' || str.charAt(0) === 'u'){
        return true;
    }
    return false;
}

console.log(startsWithVowel('jexi'));
console.log(startsWithVowel('aaron'));

/* 6
    @func endsWithVowel
    @param {string} str
    @returns {boolean}
    @desc - if string ENDS with vowel, return true
    @example - endsWithVowel('taq'); // false
    @example - endsWithVowel('Dfghjkl'); // false
    @example - endsWithVowel('andi'); // true
    @example - endsWithVowel('AndI'); // true
*/

const endsWithVowel = (str) => {
    str = str.toLowerCase();

    if (str.charAt(str.length-1) === 'a' || str.charAt(str.length-1) === 'e' || str.charAt(str.length-1) === 'i' || str.charAt(str.length-1) === 'o' || str.charAt(str.length-1) === 'u'){
        return true;
    }
    return false;
}

console.log(endsWithVowel('jexi'));
console.log(endsWithVowel('aaron'));

/* 7
    @func hasVowels
    @param {string} str
    @returns {boolean}
    @desc - if string has at least one vowel, return true
    @example - hasVowels('taq'); // true
    @example - hasVowels('TAQ'); // true
    @example - hasVowels('dfghjkl'); // false
    @example - hasVowels('taq karim'); // true
*/

const hasVowels = (str) => {
    str = str.toLowerCase();
    if(str.match(/a|e|i|o|u/)){
        return true;
    }
    return false;
}
console.log(hasVowels('robert'));
console.log(hasVowels('dfghjkl'));

/* 8
    @func hasUpperCase
    @param {string} str
    @returns {boolean}
    @desc - if string has at least one uppercase letter, return true
    @example - hasUpperCase('tAq'); // true
    @example - hasUpperCase('TAQ'); // true
    @example - hasUpperCase('tag'); // false
    @example - hasUpperCase('taq karim'); // false
*/

const hasUpperCase = (str) => {

    if(str !== str.toLowerCase()){
        return true;
    }
    return false;
}

console.log('~~~~~~~~~~~~~~~')
console.log(hasUpperCase('TAQ')); // true
console.log(hasUpperCase('tag')); // false

/* 9
    @func isPalindromic
    @param {string} str
    @returns {boolean}
    @desc - if string is a palindrome (ie: the same forward and backwards, like "racecar") return true
    @example - isPalindromic('racecar'); // true
    @example - isPalindromic('racecars'); // false
    @example - isPalindromic('bats see bees stab'); // false
    @example - hasUpperCase('taq karim'); // false
*/



const reverseMe = (str) => {
    if (str === ""){
        return "";
    } else {
    return reverseMe(str.substr(1)) + str.charAt(0);
    }
}

const isPalindromic = (str) => {
    str = str.toLowerCase();
    let letMe = reverseMe(str);
    if (letMe !== str){
        return false;
    } 
    return true;
}


console.log('~~~~~~~~~~~~~~~')
console.log(isPalindromic('abcd'));
console.log(isPalindromic('racecar')); // true
console.log(isPalindromic('racecars')); // false

/* 10
    @func getInitials
    @param {string} str
    @returns {string}
    @desc - given a name (ie: "taq karim"), return the initials (ie: "tk")
            assume there will always be at least one space between first name/last name
            assume only first and last names are provided
    @example - getInitials('taq karim'); // "tk"
    @example - getInitials('mo    mosayed'); // "mm"
    @example - getInitials('John       Smith'); // "js"
    @example - getInitials('sue RonaN'); // "sr"
*/

/* 11
    @func isPerfectStr
    @param {string} str
    @returns {boolean}
    @desc - a "perfect" string (not real, I just made this up) is defined to be a string such that:
            1. has more than three characters
            2. the three middle characters are arranged such that first character is vowel,
                second character is consonant and last character is another vowel
            3. the three middle characters are palindromic
    @example - isPerfectStr('ab'); // false
    @example - isPerfectStr('aba'); // true
    @example - isPerfectStr('asdfaeKeccc'); // false
    @example - isPerfectStr('asdfaeKeccccc'); // true
*/

/* 12
    @func strMasher
    @param {string} str1
    @param {string} str2
    @returns {string}
    @desc - given two strings, str1 and str2, return a new string
            with str2 mashed into the middle of str1
    @example - strMasher('help', 'me'); // "hemelp"
    @example - capitalLast('hello', 'wrold'); // "helwroldlo"
*/

