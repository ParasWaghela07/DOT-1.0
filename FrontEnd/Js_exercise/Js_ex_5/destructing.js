const objectToArray = (obj) => {
    // use object destructuring to extract the values of the object properties
    const { prop1, prop2, prop3 } = obj;
  
    // return an array with the extracted values
    return [prop1, prop2, prop3];
  };
  
  // testing the function
  console.log(objectToArray({ prop1: 5, prop2: "hello", prop3: true })); // expected output: [5, 'hello', true]
  console.log(objectToArray({ prop1: "abc", prop2: 123, prop3: null })); // expected output: ['abc', 123, null]