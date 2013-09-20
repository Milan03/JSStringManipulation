// String manipulation challenges
// Coder: Milan Sobat

/*Output the sentence to the console, but backwards. 
I know there are easier ways of doing this, but try 
using lopping through it backwards. Or perhaps charAt 
and/or substr for this one.*/

var string = "nwo ym no gnidoc won ma I";
// Your code from this point on

strLen = string.length;
var newStr = "";

for ( var i = strLen - 1; i >= 0; --i )
    newStr += string[i];
    
console.log(newStr);

/*
Use loops and google to find a way to output the given string to the console with all the words backwards, 
but the order of the words should not be reversed this time. Only the content/letters of the words
PS: Pay extra attention to the ending. No extra whitespaces allowed.
*/

var string = "erehT era a tsav rebmun fo secruoser rof gninrael erom tpircsavaJ";
// Your code follows


var strArray = string.split(" ");
var newArray = new Array(strArray.length);
var oldStr = "";
var newStr = "";

for ( var i = 0; i < strArray.length; ++i ) {
    oldStr = strArray[i];
    for( var j = oldStr.length - 1; j >= 0; --j ) 
        newStr += oldStr[j];
    
    strArray[i] = newStr;
    newStr = "";
}

for( var i = 0; i < strArray.length; ++i )
    newStr += strArray[i] + " ";
    
console.log(newStr);

/*
Write a program that outputs the given string in leetspeak acording to the rules stated above.
*/
var string = "Coders are Elites in the digital world";
//don't change the string.

var strArray = string.split("");

for( var i = 0; i < strArray.length; ++i ) {
    if ( strArray[i] === "a" || "A" === string[i] ) 
        strArray.splice(i, 1, "4");
    else if ( strArray[i] === "e" || "E" === string[i] )
        strArray.splice(i, 1, "3");
    else if ( strArray[i] === "o" || "O" === string[i] )
        strArray.splice(i, 1, "0");
    else if ( strArray[i] === "l" || "L" === string[i] )
        strArray.splice(i, 1, "1");
    else if ( strArray[i] === "t" || "T" === string[i] )
        strArray.splice(i, 1, "7");
}

string = "";
for( var i = 0; i < strArray.length; ++i ) {
    string += strArray[i];
}

console.log(string);

/*
Output the given sentence to the console, but randomly. Just scramble all the letters. 
But don't add or subtract anything.
*/
var string = "Bullshit is easy to make, even from meaning";
//don't change the string.
var strArray = string.split("");

for( var i = 0; i < strArray.length; ++i ) {
    newPos = Math.floor(Math.random() * strArray.length + 1);
    var temp = strArray[i];
    strArray[i] = strArray[newPos];
    strArray[newPos] = temp;
}

string = "";
for( var i = 0; i < strArray.length; ++i ) {
    string += strArray[i];
}

console.log(string);

/*
The vowels is defined as "a, e, i, o, u" in this exercise. 
Output the string to the console accoring to the rules.
*/
var sentence = "Banditslanguage is a scandinavian word game of sorts";
//don't change the string.
var newSen = "";
var strArray = sentence.split("");
var vowels = new RegExp(/[^aeiou]/);


for ( var i = 0; i < sentence.length; ++i ) {
    if ( sentence[i].match(vowels) && sentence[i] != " " ) {
        newSen += sentence.charAt(i) + "o" +sentence.charAt(i);
    } else 
        newSen += sentence.charAt(i);
}

console.log(newSen);

/*
Scramble the letters in the sentence, but not the first and last one in each word, and not the words. 
Only the letters inside the word.
*/

var string = "It is amazing how the mind makes order and meaning based on previous knowledge";
//don't change the string.

var aString = string.split(" ");

for ( var i = 0; i < aString.length; ++i ) {
    if ( aString[i].length > 2 ) {
        var aWord = aString[i].split("");
        var firstLetter = aWord.shift();
        var lastLetter = aWord.pop();
        var n = aWord.length;
        
        for(var t = n - 1; t > 0; t--) {
            var j = Math.floor(Math.random() * (t + 1));
            var tmp = aWord[t];
            aWord[t] = aWord[j];
            aWord[j] = tmp;
        }
        var newWord = aWord.join("");
        var finalWord = firstLetter + newWord + lastLetter;
        aString[i] = finalWord;
    }
}

var newSentence = aString.join(" ");
console.log(newSentence);