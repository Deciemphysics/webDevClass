// Working on AJAX day 2! Project is due 3/7
// Async, allows you to dynamically update the page
// An event occurs
//      Create an XMLHttpRequest object
//      Sends the HttpRequest
// The server then
//      Processes the request
//      Creates and sends a response to the browser
// Your browser
//      Processes it using JS
//      Updates the page content
var choiceID;
var courses = {};
function getCourses() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == XMLHttpRequest.DONE && xhttp.status == 200) {
            var data = JSON.parse(xhttp.responseText);
            var courses = data.courses;
            courses.forEach(function (course){
                document.getElementById('courseSelect').innerHTML += '<option value="'+course.id+'">'+course.name+'</option>'
            })
        }
    };
    // xhttp.open("GET","http://xkcd.com/info.0.json",true);
    xhttp.open("POST","https://golf-courses-api.herokuapp.com/courses/",true);
    xhttp.setRequestHeader('Content-Type','application/json');
    var body = {
        "latitude": 40.431459252532,
        "longitude": -111.905075311661,
        "radius": 10
    };
    // xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.send(JSON.stringify(body));
}

function getCourseData(id){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState == XMLHttpRequest.DONE && xhttp.status == 200) {
            var courseData = JSON.parse(xhttp.responseText);
        }
    };
    xhttp.open("GET","https://golf-courses-api.herokuapp.com/courses/"+id,true);
    xhttp.send();
}