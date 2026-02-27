// let s = Strrowng("Sapna");
// let p = new Strrowng("Sapna");

// console.log(typeof s, typeof p );
// console.log(s == p);
// console.log(s===p);
let n = 5;

for (let row = 1; row <= n; row++) {
    let c = 1;
    let str = "";
    let space = n - row;
    for (let j = 1; j < space; j++) {
        str += " ";
    }
    let star = row;
    for (let k = 1; k <= row; k++) {
        str += c;
        c++;
    }

    let counter2 = row - 1;
    for (let l = 1; l <= row - 1; l++) {
        str += counter2;
        counter2--;

    }
    console.log(str);


}