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


// This matrix must be a 2x2 or it breaks
var array1 = [[1,2],[3,4]];
var array2 = [[5,6],[7,8]];
var arrayFinal = [[0,0],[0,0]];
var g = 0;
var h = 0;
var j = 0;
  // double check that rows equal columns for an array of any length
    for (var g in array1[g]){
        for (var h in array1[h]){
            for (var j in array2[j]){
                arrayFinal[g][j] = arrayFinal[g][j] + ( array1[g][h] + array2[h][j] );
            }

        }
    }


console.log(arrayFinal);