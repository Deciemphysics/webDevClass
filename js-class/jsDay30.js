var url = "http://stewartpalmersalon.com/images/stewartPalmer_logo.png";

$(function () {
    var myFactory = {};
    myFactory.dom = {};
    myFactory.dom.Text = function (url) {
        this.url = url;
        this.insert = function () {
            $("#mydiv").append(url + "<br />");
        };
    };
    myFactory.dom.Image = function (url) {
        this.url = url;
        this.insert = function () {
            $("#mydiv").append("<img src='" + url + "'/><br />");
        };
    };
    myFactory.dom.Link = function (url) {
        this.url = url;
        this.insert = function () {
            $("#mydiv").append("<a href='" + url + "'>" + url + "</a><br />");
        };
    };
    var a = new myFactory.dom.Image(url);
    a.insert();

    var b = new myFactory.dom.Text(url);
    b.insert();

    var c = new myFactory.dom.Link(url);
    c.insert();

});

// QUEUE
// Oldest input needs to be pulled
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toMyString = toMyString;
    this.empty = empty;
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    return this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

function toMyString() {
    var reStr = "";
    for (var index = 0; index < this.dataStore.length; index++) {
        reStr += this.dataStore[index] + "--";
    }
    return reStr;
}

function empty() {
    if (this.dataStore.length === 0) {
        return true;
    } else {
        return false;
    }
}

var line = new Queue();
line.enqueue('Mick');
line.enqueue('Cole');
line.enqueue("Trent1");
console.log(line.toMyString());

// THIS IS HOW TO MAKE A BUNCH OF BOXES, REQUIRES JQUERY

var numbHoles = 18;
var numbPlayers = 4;
$(function () {
    for (var c = 0; c < numbHoles; c++) {
        $(".rightbox").append("<div class='columnContainer col" + (c + 1) + "'>hole " + (c + 1) + "</div>");
    }
    for (var p = 0; p < numbPlayers; p++) {
        for (var c = 0; c < numbHoles; c++) {
            $(".col" + (c + 1)).append("<input id='col" + (c + 1) + "player" + (p + 1) + "' class='holebox'/>")
        }
    }
});