const toUpperCase = (strings) => {
    // use Array.map() to create a new array with the uppercase versions of the strings
    return strings.map((string) => string.toUpperCase());
  };
  
  // testing the function
  console.log(toUpperCase(["Pranay", "Gupta"])); // expected output: ['PRANAY', 'GUPTA']
  console.log(toUpperCase(["hello", "world"])); // expected output: ['HELLO', 'WORLD']
  console.log(toUpperCase(["abc", "DEF", "gHi"])); // expected output: ['ABC', 'DEF', 'GHI']