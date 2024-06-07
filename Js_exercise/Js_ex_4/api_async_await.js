// Function that uses async/await to make an API call and returns a promise with the response
async function fetchData(url) {
    try {
      const response = await fetch(url); // Wait for the response from the server
      const data = await response.json(); // Wait for the JSON data from the response
      return data; // Return the data as a resolved promise
    } catch (error) {
      return Promise.reject(error); // Return the error as a rejected promise
    }
  }
  
  // Example usage of the function
  fetchData('https://jsonplaceholder.typicode.com/posts/1')
    .then((data) => {
      console.log(data); // Log the fetched data
    })
    .catch((error) => {
      console.error(error); // Log any errors
    });