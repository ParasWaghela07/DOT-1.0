function getRandomNumbersArray(length, delay) {
    return new Promise((resolve, reject) => {
      // Using setTimeout to simulate delay
      setTimeout(() => {
        // Creating an array of random numbers of specified length
        const numbersArray = Array.from({ length }, () => Math.floor(Math.random() * 100));
        // Resolving the promise with the generated array
        // resolve(numbersArray);
        reject(new Error('Rejected'))
      }, delay);
    });
  }
  
  // Testing the function with delay of 2 seconds and array length of 5
  getRandomNumbersArray(5, 2000)
    .then((result) => {
      console.log(result); // Output: [23, 74, 48, 52, 63]
    })
    .catch((error) => {
      console.error(error.message);
    });
  