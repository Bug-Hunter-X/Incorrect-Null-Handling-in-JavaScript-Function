function foo(a, b) {
  if (a === null || b === null) {
    return 0; //Incorrect: Should handle undefined as well
  }
  return a + b; 
}