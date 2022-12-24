// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG,
// which form building blocks of the DNA double helix.

// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand.
// For each character in the provided string, find the base pair character. Return the results as a 2d array.

function pairElement(str) {
  // create object for pair lookup
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  // map character to array of character and matching pair
  return str.split("").map((x) => [x, pairs[x]]);
}

// test here
pairElement("GCG");

// Code Explanation
// First define an object with all pair possibilities, this allows us to easily find by key or value.
// Split str into a characters array so we can use each letter to find its pair.
// Use the map function to map each character in the array of individual characters to an array with the character and its matching pair,
//  creating a 2D array.
