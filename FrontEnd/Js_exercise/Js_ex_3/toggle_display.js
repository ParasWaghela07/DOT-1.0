function toggleDivDisplayOnClick(divId) {
    const div = document.getElementById(divId);
    if (div.style.display === "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
  
  // Test case
  // HTML:
  // <button onclick="toggleDivDisplayOnClick('myDiv')">Toggle Div Display</button>
  // <div id="myDiv" style="display:none;">This is the content of the div</div>