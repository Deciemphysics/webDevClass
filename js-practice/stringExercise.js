
// JavaScript Document
var currentstring = '';
var inputstring = 'STRING';
function buildhtml(inString) {
    var nonrandContainer = inputstring.split("");
    var contLength = inString.length;
    for (var i = 0; i < contLength; i++){
        var insideNum = Math.floor((Math.random() * nonrandContainer.length) + 0);
        var htmlInput = nonrandContainer[insideNum];
        nonrandContainer.splice(insideNum, 1);
        console.log(nonrandContainer);
        document.getElementById("allletters").innerHTML += '<div class="letter" onClick="sendLetter(this.innerHTML)">' + htmlInput + '</div>';
    }

}

function sendLetter(theletter) {
    var outputcontdiv = document.getElementById("output");

    currentstring = currentstring.concat(theletter); // We need to concatenate the strings together.
    checkmyAnswer(currentstring);
    outputcontdiv.innerHTML = currentstring.toLowerCase(); // I want you to make it print to the page in lower case.

}

function checkmyAnswer(instring) {
    var otheranswer = currentstring.substr(2,5);  // Lets pull another word out of the word we want them to spell.
    if(instring === "STRING"){
        alert("you win! String also contains the word " + otheranswer);
    }
}
