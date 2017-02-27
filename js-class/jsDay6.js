/* // loops are a way to iterate through an array

var fruits = ['banana', 'pear', 'apple', 'orange'];

var snack; //I feel like an actual orange. No wait, thats trump

// for loops

for (var fruitIndex = 0; fruitIndex < fruits.length; fruitIndex++){
    if (fruits[fruitIndex] === 'apple'){
        snack = fruits[fruitIndex];
        break; // (keyword) will break out of for loop
    }
}

// Let protects the variable inside the scope of itself

// I eat my snack

//me.eat(snack); // This does not exist at all.



// for (backwards)

for (fruitIndex = fruitIndex.length - 1; fruitIndex >= 0; fruitIndex--) {
    if (fruits[fruitIndex] === 'apple') {
        snack = fruits[fruitIndex];
        break; // (keyword) will break out of for loop

    }
}

// for each



function iterationOverFruits(fruit, fruitsIndex) {
    if (fruit === 'apple'){
        snack = fruit;
    }
}
// expect(fruit).toBe('banana'); This just checks, in code, what it should be doing
fruits.forEach(iterationOverFruits);



/*
var returnedFruit = iterationOverFruits('banana');

    // expect(returnedFruit).toBe('banana');

var returnedFruit = iterationOverFruits('orange');

    // expect(returnedFruit).toBe('orange');

var done = false;

while (!done) {
    if ( fruits[fruitIndex] === 'apple' ){
        snack = fruits[fruitIndex];
        done = true;
    }
    fruitIndex++;
}


done = false;
while(!done){
    var memes = http.get('google.com/search/memes');
    if(shouldShow(memes) == true) {
        show(memes);
        done = true;
    }
}

*/


var dictionary = ['apple', 'boat', 'cat', 'door', 'elephant'];
function randomize(array){
    for(i = 0; i < 2 * array.length; i++){
        var arrayIndex = Math.floor(array.length*Math.random())
        array.push(array[arrayIndex]);
        array.splice(arrayIndex,1);
    }
}

randomize(dictionary);