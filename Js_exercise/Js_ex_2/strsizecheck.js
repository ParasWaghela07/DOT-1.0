function filterLongStrings(arr) {
    // create an empty array to store the filtered strings
    let filteredArr = [];
  
    // loop through each string in the original array
    for (let i = 0; i < arr.length; i++) {
      // check if the string's length is greater than 5
      if (arr[i].length > 5) {
        // if it is, push the string to the filtered array
        filteredArr.push(arr[i]);
      }
    }
  
    // return the filtered array
    return filteredArr;
  }
  
  // Test cases
  console.log(filterLongStrings(["apple", "banana", "kiwi", "watermelon", "orange"])); // ['watermelon', 'orange']
  console.log(filterLongStrings(["cat", "dog", "elephant", "giraffe"])); // ['elephant', 'giraffe']
  console.log(filterLongStrings(["car", "bike", "bus", "train"])); // []
  
  console.log(filterLongStrings(["123456", "123", "123456789"])); // ["123456", "123456789"]
  
  console.log(filterLongStrings([])); // []