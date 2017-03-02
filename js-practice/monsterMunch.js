// JavaScript Document


// create an array of food items for the monster to eat
var foodarr = ["Apple","Milk","Banana","Donut","Lettuce","Snickers","Doritos","MtDew","Coke","Pepsi", "Medicine", "Cranberry Juice"];
var currentfood = "";
var score = 0;
// start the game with a function
function rungame(){
    setfood(getfood());
    updateScore();
}

// randomly select a food to put in the box
function getfood(){
    var randomfood = Math.floor((Math.random() * foodarr.length) + 0);
    var foodname = foodarr[randomfood];
    return foodname;
}

// put the food in the box
function setfood(food){
    currentfood = food;
    if ( document.getElementById("foodbox").innerHTML == food){
        rungame();
    }
    else {
        document.getElementById("foodbox").innerHTML = food;
    }
}
function updateScore(){
    document.getElementById("scoreContent").innerHTML = score;
}
function eatit(){
    //if the food is good
    if(currentfood == "Snickers" || currentfood == "Doritos" || currentfood == "MtDew" || currentfood == "Donut" || currentfood == "Pepsi" || currentfood == "Coke"){
        document.getElementById("commentbox").innerHTML = "Yum-food!";
        score += 1;
        rungame();
    }
    // if the food is bad
    else{
        document.getElementById("commentbox").innerHTML = "Me want candy, not this!";
        score -= 1;
        rungame();
    }

}

function trashit(){
    //if the food is good
    if(currentfood == "Apple" || currentfood == "Banana" || currentfood == "Milk" || currentfood == "Lettuce" || currentfood == "Medicine" || currentfood == "Cranberry Juice"){
        document.getElementById("commentbox").innerHTML = "Good! Me no want that!";
        score = score + 1;
        rungame();
    }
    // if the food is bad
    else{
        document.getElementById("commentbox").innerHTML = "Why you throw that away!?";
        score = score - 1;
        rungame();
    }

}
