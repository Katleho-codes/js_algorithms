// Create a function that sums two arguments together.
// If only one argument is provided, then return a function that expects one argument and returns the sum.

function addTogether() {
  const [first, second] = arguments;
  if (typeof first !== "number") return undefined;
  if (arguments.length === 1) return (second) => addTogether(first, second);
  if (typeof second !== "number") return undefined;
  return first + second;
}
