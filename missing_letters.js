// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.
function fearNotLetter(str) {
  let currCharCode = str.charCodeAt(0);
  let missing = undefined;

  str.split("").forEach((letter) => {
    if (letter.charCodeAt(0) === currCharCode) {
      currCharCode++;
    } else {
      missing = String.fromCharCode(currCharCode);
    }
  });

  return missing;
}

// test here
fearNotLetter("abce");

// Code Explanation
// First we define variables to store the character code for the first letter in the string, and to store whatever missing letter we may find.
// We turn the string to an array in order to forEach through it instead of using for and while loops.
// As we forEach through our letters’ character codes, we go comparing with the one that should be in that position.
// If the current letter matches, we move the comparison variable to its next position so we can compare on the next cycle.
// If not, the missing letter will be assigned to the missing variable, which will be returned after the map is finished.
// If there are no missing characters, return undefined.
