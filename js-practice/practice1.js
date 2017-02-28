/**
 * Created by ronaldmarx on 2/22/17.
 */

// This is an example of coercion //

/* var a = '42';
var b = Number ( a );

console.log( a ); // '42'
console.log( b ); // 42

*/
/*

// This is an example of type declaration\
var amount = 99.99;
amount = amount * 2;
console.log( amount ); // 199.98

//convert 'amount' to a string and add stuff in front

amount = '$' + String( amount );
console.log( amount ); // '$199.98'

*/


// This is a silly example
const TAX_RATE = 0.08; // 8% sales tax
const ACCESSORY_PRICE = 9.99;
const MENTAL_LIMIT = 200;
const PHONE_PRICE = 99.99;
var amount = 0;
var bank_balance = 302.13;
var count = 0;
function taxAmount( amount ) {
    return amount * TAX_RATE;
}
function formatAmount ( amount ) {
    return '$' + amount.toFixed(2);
}
/*
if ( amount > 10 ) { // attached block to if statement
    amount = amount * 2;
    amount = amount + ( amount * TAX_RATE);

    console.log(amount); // 215.9784
    console.log(amount.toFixed(2)); // '215.95'
}
*/
while ( amount < bank_balance ) {
    amount = amount + PHONE_PRICE;
        if ( amount < MENTAL_LIMIT ) {
            amount = amount + ACCESSORY_PRICE;
        }

    count = count + 1;
}
//otherwise:

    amount = amount + taxAmount( amount );

    console.log( formatAmount( amount ) );
    console.log( count );

    if ( amount > bank_balance ) {
        console.log ( 'You cant afford this heathen.')
    }




/*
// This is an example of loops
var numOfCustomers = 7;
while (numOfCustomers > 0) {
    console.log( 'How may I help you?');
    // help the customer you lazy savage...
    numOfCustomers = numOfCustomers - 1
}

do {
    console.log( 'What is wrong with you?' );
    numOfCustomers = numOfCustomers - 1

} while (numOfCustomers > 0);
*/

// on this
// this points to an object. NOT the function

function foo() {
    console.log( this.bar );
}
var bar = "global";
var obj1 = {
    bar: "obj1",
    foo: foo
};
var obj2 = {
    bar: "obj2"
};

// ---------------

foo(); // "global"
obj1.foo(); // "obj1"
foo.call( obj2 ); // "obj2"
new foo(); // und

// Prototype operators

var foo = {
    a: 42
}

var bar = Object.create( foo );
bar.b = "hello world";

bar.b; // hello world
bar.a; // 42


//function foo(a=3) {
//    console.log(a);
//}

//foo(); //3
//foo(42); //42