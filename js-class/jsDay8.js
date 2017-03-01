var bookmark = "";

function dynamicpop(index){
    if (bookmark != "" && bookmark != index) {
        document.getElementById(bookmark).style.display = "none";
    }
    var theElement = document.getElementById(index);
    var visible = theElement.style.display;
    if(visible == "none"){
        theElement.style.display = "block";
        bookmark = index;
    }
    else{
        theElement.style.display = "none";
    }
}

/*
function makeIterator(array){
    var nextIndex = 0;
    return {
        next: function(){
            return nextIndex < array.length ?
                (value: array[nextIndex++], done: false):
            (done: true);
        }
    }
}

var it = makeIterator(['yo','ya']); // iterator -- object with the next method
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().done);
*/
var additem = (function(){
    var cartItems = 0;
    return function(){return cartItems += 1;}
})();



