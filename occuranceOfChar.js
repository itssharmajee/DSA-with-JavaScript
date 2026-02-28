/*
    Q. Given a string, try to print the number of occurance of each unique character of a string.
*/

let frequencyMap = {};
let str = "javaScript";

/*
for (let i = 0; i < str.length; i++) {
    if (frequencyMap[str[i]]) {
        frequencyMap[str[i]] += 1;
    } else {
        frequencyMap[str[i]] = 1;
    }
}
console.log(frequencyMap);
*/

// other way to solve
for (const char of str) {
    if(frequencyMap[char]){
        frequencyMap[char] +=1;
    }else{
        frequencyMap[char] = 1;
    }
}

console.log(frequencyMap);


