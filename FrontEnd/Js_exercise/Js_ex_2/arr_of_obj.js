function getPropertyValues(arr, propName) {
    // Using Array.map() method to get the values of the specified property
    const values = arr.map((obj) => obj[propName]);
  
    return values;
  }
  
  // Test cases
  const people = [
    { name: "Pranay", age: 20, gender: "male" },
    { name: "Nidhi", age: 21, gender: "female" },
    { name: "Soumya", age: 21, gender: "male" },
  ];
  
  console.log(getPropertyValues(people, "name")); // ["Pranay", "Nidhi", "Soumya"]
  console.log(getPropertyValues(people, "age")); //  [20, 21, 21]
  console.log(getPropertyValues(people, "gender")); // ["male", "female", "male"]
  console.log(getPropertyValues(people, "address")); // [undefined, undefined, undefined]