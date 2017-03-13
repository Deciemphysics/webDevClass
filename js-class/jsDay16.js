// Today are a bunch of challenges
// Ugh I feel soooooo tired.
// get randmom number
/*
var randomNumber = Math.floor( Math.random() * 10) + 1;
var guess = prompt("Guess a number between 1 and 10");
if ( guess == randomNumber){
    alert('Well done!');
}else{
    alert("Wrong!");
}

*/
/*
var a = prompt("Give me a number");
var b = prompt("Give me another number");
var divmult = prompt("Tell me multiplication of division");
function mult(num1,num2,operate) {
    var result;
    if ( operate === 'multiplication'){
        result = num1 * num2;
    } else if( operate === 'division'){
        result = num1 / num2;
    }
    alert(result);
    return result
}
mult(a,b,divmult);


var year = 2017 + Math.floor( Math.random() * 1000 );
var month = 1 + Math.floor( Math.random() * 12 );
var day = 0;
function dayGen(m,y){
    if ( m == 2 && y % 4 == 0){
        day = 1 + Math.floor( Math.random() *  29);
    } else if ( m == 2 ){
        day = 1 + Math.floor( Math.random() * 28 );
    } else if ( m == 1 || 3 || 5 || 7 || 8 || 10 || 12){
        day = 1 + Math.floor( Math.random() * 31 );
    } else {
        day = 1 + Math.floor( Math.random() * 30 );
    }
}
dayGen(month,year);
var date = new Date (year, month, day);
console.log(date);
*/

var helloWorld= "hello world!";
var helloArray = helloWorld.split("");
/*
while (true) {
    setTimeout(function () {
        var obj = helloArray[helloArray.length - 1];
        helloArray.splice(helloArray.length - 1, 1);
        helloArray.unshift(obj);
        console.log(helloArray);
    }, 100);
}
*/
/*
setInterval(function(){

 var obj = helloArray[helloArray.length - 1];
 var showMe;
 helloArray.splice(helloArray.length - 1, 1);
 helloArray.unshift(obj);
 showMe = helloArray.join("");
 console.log(showMe);
 },200);
*/
/*
var userInput = prompt("Give me a string");
var userArray = userInput.split("");
for (var i = 0; i < userArray.length; i++) {
    var obj = userArray[i];
    if ( obj == " "){
        userArray.splice(i,1);
    }

}
for (var i = 0; i < Math.floor(userArray.length/2); i++) {
    var obj1 = userArray[i];
    var obj2 = userArray[userArray.length - i - 1];
    if (obj1 != obj2){
        alert("This is not a palindrome.");
        break;

    }
    if (i == Math.floor(userArray.length/2 ) - 1){
    alert("This is a palindrome.")}

}
*/

var date = Date();
var dateSplit = date.split(" ");
var day = dateSplit[0];
var clock = dateSplit[4];
alert("Today is " + day + "day. Current time is " + clock + "AM.");
