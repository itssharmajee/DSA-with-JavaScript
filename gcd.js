/**
 * Calculates the Greatest Common Divisor (GCD) of two numbers using recursion.
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The GCD of a and b.
 */
function gcd(a, b) {
    // If b is 0, a is the GCD
    if (b === 0) {
        return a;
    }
    // Otherwise, recursively call the function with b and the remainder of a divided by b
    return gcd(b, a % b);
}

// Example Usage:
console.log(gcd(48, 18)); // Output: 6
console.log(gcd(12, 13)); // Output: 1
console.log(gcd(12, 0));  // Output: 12 

