function assertEqual(actual, expected, message) {
    console.assert(actual === expected, message || `Expected ${expected}, but got ${actual}`);

    //parameter 1 ---> expression if true then prints nothing
    //paramter 2 ---> custom error msg
    //parameter 3 --> optional (if not custom provided then this)
  }