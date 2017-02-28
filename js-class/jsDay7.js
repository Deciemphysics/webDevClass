/*
 (function() {
 var myVar;

 function myFunction(param1, param2) {

 var inFunctionVar;
 param1 = myVar;
 param1 = inFunctionVar; // param1 will be assigned to undefined

 inFunctionVar = 'a string';
 }

 param1 = myVar; // doesnt work

 var myOtherVar;

 // myVar = inFunctionVar; // sets myVar to undefined

 myFunction('hi', 'hello');

 myFunction(function () {
 }, []);

 function add(operand1, operand2) {
 if (typeof operand1 != 'number') {
 throw "You're crazy"; // can return undefined
 }
 var additionResult = operand1 + operand2;
 console.log(operand1);
 console.log(operand2);
 console.log(additionResult);
 return additionResult;
 }

 var sum = function (operand1, operand2) {
 var additionResult = operand1 + operand2;
 return additionResult;

 }

 var result = add(1, 2, 6);
 var addFunction = add;

 var otherResult = addFunction(1, 2);

 add(add, sum); // additionResult = add + sum;
 })()


 */
var toBeExec;
var newArray;
var likeables = ['apple', 'cat', 'banana'];
(function () {
    function reverseArray(stringArray) {
        stringArray.forEach(function (string, index) {
            stringArray[index] = reverseString(string);
        });

        return stringArray;

        function reverseString(string) {
            var reversedString = '';
            for (var i = string.length - 1; i >= 0; i--) {
                reversedString = reversedString + string[i]; // CAN TREAT STRING AS AN ARRAY THIS WOULD HAVE BEEN HELPFUL CURSE WORDS
            }
            return reversedString;
        }
    }

    toBeExec = reverseArray;
})();

newArray = toBeExec(likeables);
console.log(newArray);