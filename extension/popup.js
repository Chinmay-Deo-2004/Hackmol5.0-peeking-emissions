document.addEventListener('DOMContentLoaded', function () {
    // Retrieve output data from URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const output = urlParams.get('output');
  
    // Display output data in the popup
    const outputDiv = document.getElementById('consumed');
    outputDiv.textContent = output;
  });