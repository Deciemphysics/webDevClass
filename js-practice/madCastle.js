// Things to do.
// Load my JS

// Make my 3 buttons
var buttons = ["start","continue","help"];
// I need an object with the three buttons
// After Ive made my object with three buttons, loop through buttons and inject into html
function Game(list){
    this.addButton = function () {
        for (var i = 0; i < list.length; i++) {
            document.getElementById('btnContainer').innerHTML += '<a href="#" class="myButt">' + list[i] + '</a>';
        }
    };
}

var mygame = new Game(buttons);