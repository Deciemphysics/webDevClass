function countingSort(array) {
    var arrayMax = Math.max(...array);
    var count = [];
    var numStore = 0;
    var sortedArray = [];
    for (let i = 0; i <= arrayMax; i++) {
        count[i] = 0;
    }
    array.forEach(function (element) {
        count[element]++;
    });
    for (let i = 1; i <= arrayMax; i++) {
        count[i] += count[i - 1];
    }
    count.forEach(function (element, index) {
        for (let i = numStore; i < element; i++) {
            sortedArray.push(index);
        }
        numStore = element;
    })
    return sortedArray;
}
// My function is 22 lines. Thats it.

// Declare stuff before use
// Pretty 

// var hashTable = {};

// var data = {
//   name: 'john smith',
//   data: { phone: '801-876-7564' }
// };

// var hash = hashCode(data.name);

// console.log(hash);

// hashTable[hashCode(data.name)] = data;

// var john = hashTable[hashCode('john smith')];

// console.log(john);

// function hashCode(string){
// 	var hash = 0;
// 	if (string.length == 0) return hash;
// 	for (i = 0; i < string.length; i++) {
// 		char = string.charCodeAt(i);
// 		hash = ((hash<<5)-hash)+char;
// 		hash = hash & hash; // Convert to 32bit integer
// 	}
// 	return hash;
// }