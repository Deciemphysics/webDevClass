// JavaScript Document


// create an array of food items for the monster to eat
var foodarr = ["Apple","Baby","Banana","Donut","Treacle","Snickers","Doritos","MtDew","Coke","Pepsi"];
var currentfood = "";

// start the game with a function
function rungame(){
    setfood(getfood());
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
    document.getElementById("foodbox").innerHTML = food;
}

function eatit(){
    //if the food is good
    if(currentfood == "Snickers" || currentfood == "Doritos" || currentfood == "MtDew"){
        document.getElementById("commentbox").innerHTML = "Yum-food!";
    }
    // if the food is bad
    else{
        document.getElementById("commentbox").innerHTML = "Me not feel so good.";
    }

}

function trashit(){
    //if the food is good
    if(currentfood == "Apple" || currentfood == "Banana" || currentfood == "Pepsi"){
        document.getElementById("commentbox").innerHTML = "Good! Me no want that!";

    }
    // if the food is bad
    else{
        document.getElementById("commentbox").innerHTML = "Why you throw that away!?";
    }

}
