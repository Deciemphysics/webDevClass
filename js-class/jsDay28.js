// Singleton
function Logger(){
    if(Logger.single_instance){
        Logger.single_instance = this;
    }
    return Logger.single_instance;
}

var a = new Logger(); 
var b = new Logger(); // These two are the same

// Object oriented Javascript -- Book
// Stoyan Stefanov 
// Oreilly (safari) books subscription

// Data Structures and Algorithms

// Look into Nativescript