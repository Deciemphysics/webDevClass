// I have no idea.
// Try/catch/throw

//  try lets you test a block of code for errors
//  catch lets you handle the error
//  throw lets you create custom errors
//  finally lets you execute code, after try and catch, regardless of the result
function handleSubmission(data){
    try{
        validateSubmission(data);
    }
    catch(error){
        console.log("We gracefully handled the following error: " + error);
    }
}

function validateSubmission(data){
    if(data == "") throw "data is empty";
    if(data == undefined) throw "data is undefined";
    if(data == null) throw "data is null";
}

function sendToBackEnd(data){
    var connection = new WebSocket("backendUrl");
    try {
        connection.open();
        connection.send(data); // this can throw an error
    }
    catch(error) {
        console.log("We gracefully handled the following error: " + error)
    }
    finally {
        connection.close(); //error or not, this will get executed
    }
}

// FORM VALIDATION
// HTML form validation can be done by JS
// What are some examples?
// Malicious code prevention, ensure entry is correct type
// Should we validate in the front-end or back-end?

function validateAddress(event){
    event.preventDefault();
    console.log("Button works");
    var address1 = document.forms["myAddress"]["addressLine1"].value;
    var address2 = document.forms["myAddress"]["addressLine2"].value;
    var city = document.forms["myAddress"]["userCity"].value;
    var state = document.forms["myAddress"]["userState"].value;
    var zip = document.forms["myAddress"]["userZip"].value;
    var minimumLength = 1;
    var addressFormat = /\d+\s\w+/;
    if (!addressFormat.test(address1)){
        document.getElementById("messageBox").innerHTML = "The form needs to be filled out.";
        toastr.info('Are you the 6 fingered man?');
        return false;
    }
}