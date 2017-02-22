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

/*
// This is a silly example
const TAX_RATE = 0.08; // 8% sales tax
const ACCESSORY_PRICE = 9.99;
var amount = 99.99;
var bank_balance = 302.13;

if ( amount > 10 ) { // attached block to if statement
    amount = amount * 2;
    amount = amount + ( amount * TAX_RATE);

    console.log(amount); // 215.9784
    console.log(amount.toFixed(2)); // '215.95'
}

if ( amount < bank_balance ) {
    console.log( 'I want that phone!' );
    amount = amount + ACCESSORY_PRICE;
}

//otherwise:
else {
    console.log( 'No, thanks.' );
}

*/

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