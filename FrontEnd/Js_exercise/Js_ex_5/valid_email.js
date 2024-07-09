function isValidEmail(email) {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }
  
  console.log(isValidEmail("pgupta@duck.com")); // false
  console.log(isValidEmail("example@example.com")); // true
  console.log(isValidEmail("example.example@example.com")); // true
  console.log(isValidEmail("example-example@example.com")); // true
  console.log(isValidEmail("example@example.co.in")); // true
  console.log(isValidEmail("example123@example.com")); // true
  console.log(isValidEmail("example@.com")); // false
  console.log(isValidEmail("example@example.")); // false
  console.log(isValidEmail("example@examplecom")); // false
  console.log(isValidEmail("example@examplecom.")); // false
  console.log(isValidEmail("example@.com.")); // false


  - The email address should start with one or more word characters (alphanumeric characters or underscore), followed by zero or more groups of a period or hyphen followed by one or more word characters.
- The "@" symbol must be present after the above pattern.
- The domain name should consist of one or more word characters, followed by zero or more groups of a period or hyphen followed by two or three word characters (for example, ".com" or ".edu").