function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Correct: Handles both null and undefined
  }
  return a + b; 
}