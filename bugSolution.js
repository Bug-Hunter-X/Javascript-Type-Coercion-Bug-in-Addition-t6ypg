function foo(a, b) {
  // Explicit type checking to ensure both inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Error: Inputs must be numbers";
  }
  return a + b; }
console.log(foo(10, 20)); // Output: 30
console.log(foo(10, "20")); // Output: Error: Inputs must be numbers