/**
 * Created by ronaldmarx on 2/24/17.
 */
/*
// Learning on arrays and syntax of arrays

var arrayName = [item1, item2, etc];

//For example an array with three items

var celestialBodies = ['earth', 'moon', 'jupiter'];

// Arrays have indexes that identify each object, that starts at 0

var myPlanet = celestialBodies[1];

celestialBodies[3] = 'Kepler-186f';

// Zero is a placeholder. This goes into the history of things and how counting works. I don't wanna go into it.

// Arrays contain any data type and don't have to be the same

var things = ['a string', myVar, function(){}];

// You can nest arrays. This is call multi dimenstional arrays

var coolArray = [['a1','a2'],['b1','b2'],['c1','c2']];

// Size can be easily accessed

var myGarage = ['bmw', 'mustang', 'camaro'];
var myCoolness = myGarage.length;

// Arrays are Objects
// They have useful functions

myGarage.push('tacoma');

// Push puts things at the END of the array


var myVar = myGarage.pop(); // 'tacoma'

myGarage.sort();

// Pop removes the last item in the array

// Sort  arranges it by alphanumerics, but treats function expressions like a string

// Arrays. numbers, objects, strings/functions in alphanumerics

// myGarage.splice(start, amount, item1, item2, etc);

// Deletes AMOUNT from START and injects ITEM1, ITEM2, etc

myGarage.splice(1, 1, 'tesla'); // ['bmw', 'tesla', 'camaro']



var numArray = [];
for (i = 1; i < 100; i ++) {
    numArray.push(i);
}

console.log(numArray[(Math.floor(numArray.length*Math.random()))]);
*/
// I need to finished this.



var array1 = [[1,2,3],[4,5,6],[7,8,9]];
var array2 = [[1,2],[4,5],[7,8]];
var arrayFinal = [];


// My function can only work if the columns in array1 equal the rows in array2
if ( array1[0].length == array2.length){


    for (var g = 0; g < array1.length; g++){ // Fill the array final with proper number of empty arrays
        arrayFinal[g] = [];
        for (var h = 0; h < array1[g].length; h++){
            for (var j = 0; j < array2[g].length; j++){
                if ( arrayFinal[g][j] === undefined ){ // Double check if there is anything in my array
                    arrayFinal [g][j] = array1[g][h] * array2[h][j];
                }
                else {
                    arrayFinal[g][j] = arrayFinal[g][j] + ( array1[g][h] * array2[h][j] );
                }
            }

        }
    }
    console.log(arrayFinal);
} else {
    console.log('You cannot take the dot product.')
}


