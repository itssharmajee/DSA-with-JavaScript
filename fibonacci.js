function printFibonacciSeries(n) {
    if (n < 0) {
        console.log("fibonacci can't be of negative number");
        return;

    }
    if (n == 0) {
        console.log(n);
        return;
    }
    if (n >= 1) {
        console.log(0);
        console.log(1);
    }
    // we start from 2 as before 2 it is seeded value
    let last = 1;
    let secondLast = 0;
    for (let i = 2; i <= n; i++) {
        let ans = last + secondLast;
        console.log(ans);
        secondLast = last;
        last = ans;
    }
}

printFibonacciSeries(13)