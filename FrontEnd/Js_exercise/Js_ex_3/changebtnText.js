// Function to change the text of a button on click event
function changeButtonText() {
    // Select the button element
    const button = document.querySelector("button");
  
    // Check if the button is currently showing "Click Me!"
    if (button.textContent === "Click Me!") {
      // If it is, change the text to "Clicked!"
      button.textContent = "Clicked!";
    } else {
      // If it is not, change the text back to "Click Me!"
      button.textContent = "Click Me!";
    }
  }
  
  // Add a click event listener to the button
  const button = document.querySelector("button");
  button.addEventListener("click", changeButtonText);