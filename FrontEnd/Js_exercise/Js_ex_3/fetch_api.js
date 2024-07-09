function fetchData(url, callback) {
    fetch(url)
      .then(response => response.json())
      .then(data => callback(null, data))
      .catch(error => callback(error, null));
  }
  
  // Example usage
  fetchData('https://jsonplaceholder.typicode.com/todos/1', (error, data) => {
    if (error) {
      console.error(error);
    } else {
      console.log(data);
    }
  });

- The function `fetchData` takes two arguments: `url` and `callback`.
- It uses the Fetch API to make a GET request to the specified URL.
- If the request is successful, the response is converted to JSON format and passed to the callback function along with a `null` error value.
- If the request fails, the error is passed to the callback function along with a `null` data value.
- The example usage demonstrates how to call the `fetchData` function and handle the response with a callback function.
- In this example, the `fetchData` function is used to fetch data from the JSONPlaceholder API for a single to-do item and log it to the console.

Note:

- The Fetch API is built into modern web browsers and allows developers to make HTTP requests to servers using JavaScript.


//class 4 
//   async function helper() {

//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'Babbar',
//           body: 'Tagdi Body ',
//           userId: 1998,
//           weight: 90,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//     };
    
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//     let response = content.json();
//     return response;
// }


// async function utility() {
//     let ans = await helper();
//     console.log(ans);
// }

// utility();