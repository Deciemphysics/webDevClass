/**
 * Created by ronaldmarx on 2/22/17.
 */
var pi = 3.141;
var r = 4;
var lengthSquare = 2;
var heightTri = 3;
var widthTri = 5;
var mass = prompt('What is your mass in kg?');
var earthG = 9.807;
var jupG = 24.79;
var marsG = 3.711;
var moonG = 1.622;
console.log('The circumference of the circle is ' + (r * 2 * Math.PI));
console.log('The perimeter is of a square is ' + (lengthSquare * 4));
console.log('The perimeter of a triangle is ' + (lengthSquare + widthTri + heightTri));
console.log('Your weight on the moon is ' + (mass * moonG) + ' N.');
console.log('Your weight on Earth is ' + (mass * earthG) + ' N.');
console.log('Your weight on Jupiter is ' + (mass * jupG) + ' N.');
console.log('Your weight on Mars is ' + (mass * marsG) + ' N.');

