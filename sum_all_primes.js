// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.
// For example, 2 is a prime number because it is only divisible by 1 and 2.
// In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

function sumPrimes(num) {
  // Check all numbers for primality
  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (primes.every((prime) => i % prime !== 0)) primes.push(i);
  }
  return primes.reduce((sum, prime) => sum + prime, 0);
}

// Code Explanation
// This solution is very similar to Solution 1.
// In this solution we retain a list of all primes found so far and check if any of these numbers divide into each number in our range.
// Note that this solution is actually less efficient than Solution 1 for very large values of n. Frequently growing the size of an array in JavaScript can be inefficient and slow.
