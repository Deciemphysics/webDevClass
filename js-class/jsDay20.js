// Regular expressions
//      Search and replace strings
// Syntax
//      /pattern/modifiers;
//      var patt = /Halloween/i;
// Modifiers are HOW it searches for it
// It returns a number
// var inPatt = prompt('Give me a word to check.');
// function startMe(){
//
//     var str = document.getElementById('text').innerHTML;
//     // var inPatt = prompt('Give me a word to check.');
//     var regMe = "/" + inPatt + "/i";
//     var patt = regMe;
//     if (str.search(patt) >= 0){
//         console.log('The word is in the page.')
//     } else {
//         console.log('This word is not in the page.')
//     }
//     console.log(regMe);
// }
function goSearch(){
    var thevalue = $("#searchbox").val();
    var re = new RegExp("\\b" + thevalue + "\\b");
    // console.log(re);
    var myString = $("#text").html().toString();
    var theResult = myString.search(re);
    if (theResult !== -1){
        $("#response").html("The word has been found!");
    }
    else{
        $("#response").html("Not found");
    }
}
// Modifiers allow
/*
i == Perform case-insensitive
g == perform a global match (all matches)
m == multiline matching
 */