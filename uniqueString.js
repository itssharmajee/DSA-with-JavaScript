/**
 * Q. Given an array of strings, print all the unique strings in the array.
 */

let arrStr = ["abc","hello","c","d", "abc", "c","d"];
let frequencyMap = {};
/*
for (const val of arrStr) {
    if(frequencyMap[val]){
        frequencyMap[val] += 1;
    }else{
        frequencyMap[val] = 1;
    }
}

let uniqueStr = Object.keys(frequencyMap);
// console.log(frequencyMap); 

console.log(uniqueStr);// [ 'abc', 'hello', 'c', 'd' ]
*/


// Other way to solve this questions

for (const val of arrStr) {
    if(!frequencyMap[val]){
        frequencyMap[val] = true;
    }
}

for (const key in frequencyMap) {
    console.log(key);
}
