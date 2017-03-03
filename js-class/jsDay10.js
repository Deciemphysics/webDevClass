/*
 function playerjumps(param){
 document.innerHTML = '<div>' + param +'</div>';
 }
 function swapIn(boxID){
 document.getElementById(boxID).innerHTML = '<a href="#">Hiya</a>';
 }

 */

// Notes for interaction basics
// The 'canvas' is self contained?
// IMPORTANT DAY

function loaded(){
    document.getElementById("gamecontainer").innerHTML = "<a href='#'>My Button</a>"
}

function sendsrc(imagessrc){
    alert(imagessrc);
}
function Game(){
    this.gamestart = function(index){
        document.getElementById(index).innerHTML = "Its working!"
    };
}

var mygame = new Game();
