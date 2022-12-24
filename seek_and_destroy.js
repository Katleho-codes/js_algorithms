// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

function destroyer(arr, ...valsToRemove) {
  return arr.filter((elem) => !valsToRemove.includes(elem));
}

// Code Explanation
// Using spread operator to retrieve the arguments.
// Return the filtered array, using includes().
