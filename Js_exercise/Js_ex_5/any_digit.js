function containsDigit(str) {
    const regex = /\d/;
    return regex.test(str);
  }
  
  console.log(containsDigit("abc123")); // true
  console.log(containsDigit("abc")); // false
  console.log(containsDigit("123")); // true
  console.log(containsDigit("a1b2c3")); // true