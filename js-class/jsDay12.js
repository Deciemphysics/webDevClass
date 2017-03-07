// String manipulation day!

var mystring = "something";
var oneletter = mystring[5]; // "h"
var anotherletter = mystring.charAt(5); // "h"
var myslice = mystring.slice(1,5); // "omet" this STARTS at 1 and ENDS before 5
var mysubtr = mystring.substr(1,5); // "ometh" this STARTS at 1 and ENDS after 5

var str1 = "Hello";
var str2 = "World";
var str3 = str1.concat(str2);