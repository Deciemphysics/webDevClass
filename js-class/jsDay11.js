/*
Object Oriented Programming ( THIS IS IMPORTANT )
    -Its how we orient our programming around objects.
    -We represent things as objects in our code.
    -Structured around objects instead of actions, data over logic.
    -How does JS do object oriented programming?

Classes and Objects

Inheritance
    -Allows new objects to take on the same properties as established objects
    -The basis class is the superclass or base class. Derived classes are derived or sub class. Parent and child are okay as well
    -Similar to CSS

Examples
Prototypes
    -Example
        function Car(make,model,year){
            this.make = make;
            this.model = model;
            this.year = year;
            this.start = function(key){};
            this.go = function(speed){};
        }
        var myCar = new Car('toyota', 'tacoma', 2008);
        var myOtherCar = new Car('nissan', 'skyline', 2015);
    -Everything inherits from the "OBJECT" class
Everything inherits from the object class
    -So nice I said it twice
    -The prototype inside an object is an object
    -Constructors also define prototypes.
    -Uppercase your functions if defining a prototype. See example above.
    -ADDING A FIELD should be done via constructor
Examples below
 */

function BankAccount(accountNumber, userName, balance){
    var balance = balance;
    this.accountNumber = accountNumber;
    this.userName = userName;
    this.deposit = function(amount){
        if (amount > 0){
            balance += amount;
        }
        return balance;
    };
    this.withdraw = function(amount){
        if (amount > 0){
            balance -= amount;
        }
        return balance;
    };
}
function CheckingAccount(accountNumber, userName, balance, numberOfChecks){
    BankAccount.call(this, accountNumber, userName, balance);
    this.numberOfChecks = numberOfChecks;
}
function SavingsAccount(accountNumber, userName, balance, interest){
    BankAccount.call(this, accountNumber, userName, balance);
    this.interest = interest;
}
function Bank(employees, bankName){
    this.employees = employees;
    this.bankName = bankName;
    this.customers = [];
    this.addCustomers = function(customer) {
        this.customers.push(customer);
    }
}
function CustomerProfile(age, customerName, gender){
    this.age = age;
    this.customerName = customerName;
    this.gender = gender;
    this.bankAccount = [];
    this.addAccount = function(account) {
        this.bankAccount.push(account);
    }
}



CheckingAccount.prototype = Object.create(BankAccount.prototype);
CheckingAccount.prototype.constructor = CheckingAccount;

SavingsAccount.prototype = Object.create(BankAccount.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;

var savings = new SavingsAccount(65165421,"Ron",200,0.04);
var myProfile = new CustomerProfile(27, "Ron", "male");
var myBank = new Bank(7, "Ron's Bank");
myProfile.addAccount(savings);
myBank.addCustomers(myProfile);




