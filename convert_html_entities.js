// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split("")
    .map((entity) => htmlEntities[entity] || entity)
    .join("");
}

// test here
convertHTML("Dolce & Gabbana");

// Code Explanation
// Create an object to use the Lookup functionality and easily find the characters.
// Split the original string by characters and use map to check for the changed html entity or use the same one.
// The a function is added which is what returns the converted entity or the original one if there is no conversion.
// Lastly we join all the characters once again.
// Note that if you went the regex route then you don’t need to join anything, just make sure you return the whole operation or save it to a variable and then return it.
