/* window.setTimeout( // setTimeout CREATES A NEW THREAD
    function() {
        // We do some async stuff here
        document...
    }, Math.random() * 2000 + 1000);
    */
/*
function showProfile(profile){
    document.getElementById('profile').innerHTML = profile;
}
function getUserProfileAsync(username, password, callback){
    setTimeout( function(){
        var profile = "<h1>Ron</h1><h2>Professional Student</h2><h2>@nonotreally</h2>";
        callback(profile);
    }, Math.random() * 2000 + 1000);
}
getUserProfileAsync('Red', "asdflkj", showProfile);
*/
var myStringArray = ["dog","cat","tree","sauce","boss"];
function showCaps(cappedarray){
    document.getElementById('profile').innerHTML = cappedarray.toString();
}
function processArrayAsyn(arrayToCap, callback){
    setTimeout( function(){
        // var cappedArray = [];
                // I need to cap the items in the array
        for ( var i = 0; i < arrayToCap.length; i++) {
            var letters = arrayToCap[i];
            var capWord = letters[0].toUpperCase() + letters.substr(1);
            // cappedArray[i] = letters.toString();
            arrayToCap[i] = capWord;
        }
        callback(arrayToCap);
    }, Math.random() * 2000 + 1000);
}

processArrayAsyn(myStringArray, showCaps);



// Create a similar function that filters out non string items