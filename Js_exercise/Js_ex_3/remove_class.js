// Function to remove a CSS class from an element on scroll event
function removeClassOnScroll(element, className) {
    // Add scroll event listener to the window object
    window.addEventListener("scroll", function() {
      // Check if the element has the specified class name
      if (element.classList.contains(className)) {
        // Remove the class name from the element
        element.classList.remove(className);
      }
    });
  }
  
  // Test case 1
  const box1 = document.querySelector("#box1");
  removeClassOnScroll(box1, "highlight");
  
  // Test case 2
  const box2 = document.querySelector("#box2");
  removeClassOnScroll(box2, "active");