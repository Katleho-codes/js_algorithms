// Given the array arr, iterate through and remove each element starting from the first element
// (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
});

// Code Explanation
// Use a while loop with Array.prototype.shift() to continue checking and dropping the first element of the array until the function returns true.
// It also makes sure the array is not empty first to avoid infinite loops.
// Return the filtered array.
