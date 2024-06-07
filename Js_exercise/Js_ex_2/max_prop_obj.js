function findMaxByProperty(arr, prop) {
    // Check if the array is empty
    if (arr.length === 0) {
      return null;
    }
  
    // Initialize maxObj to first object in the array
    let maxObj = arr[0];
  
    // Loop through the array starting at second object
    for (let i = 1; i < arr.length; i++) {
      // Check if the current object's property value is greater than maxObj's property value
      if (arr[i][prop] > maxObj[prop]) {
        // If yes, update maxObj to current object
        maxObj = arr[i];
      }
    }
  
    // Return the object with highest value for the specified property
    return maxObj;
  }
  
  // Test case 1
  const arr1 = [
    { name: "apple", price: 1 },
    { name: "banana", price: 2 },
    { name: "orange", price: 3 },
  ];
  const maxObj1 = findMaxByProperty(arr1, "price");
  console.log(maxObj1); // { name: 'orange', price: 3 }
  
  // Test case 2
  const arr2 = [
    { name: "Pranay", age: 20 },
    { name: "Nidhi", age: 21 },
    { name: "Soumya", age: 21 },
  ];
  const maxObj2 = findMaxByProperty(arr2, "age");
  console.log(maxObj2); // { name: 'Nidhi', age: 21 }
  
  // Test case 3
  const arr3 = [];
  const maxObj3 = findMaxByProperty(arr3, "price");
  console.log(maxObj3); // null