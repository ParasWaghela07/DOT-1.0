// This function takes an element ID and a class name as arguments
// It adds the class name to the element on mouseover event
function addClassOnMouseOver(elementID, className) {
    // Get the element by ID
    const element = document.getElementById(elementID);
  
    // Add an event listener to the element for the "mouseover" event
    element.addEventListener("mouseover", () => {
      // Add the class name to the element
      element.classList.add(className);
    });
  }
  
  // Test case
  // Add the "active" class to the "button" element on mouseover
  addClassOnMouseOver("button", "active");