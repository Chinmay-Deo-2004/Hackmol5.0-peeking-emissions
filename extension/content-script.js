var totalDataConsumed = 0;
console.log('content-script.js loaded');

function calculateDataConsumed() {
    // Check if the browser supports the Performance API
    if (window.performance && window.performance.getEntriesByType) {
      // Get all resources loaded by the page
      var resources = window.performance.getEntriesByType('resource');
  
      // Iterate through each resource and sum up the transferred size
      resources.forEach(function(resource) {
        totalDataConsumed += resource.transferSize;
      });
  
      // Convert bytes to MBs for easier understanding
      var totalDataConsumedMB = totalDataConsumed / 1024 / 1024;
      chrome.runtime.sendMessage({type: "setData", data: totalDataConsumedMB});

      //send fetch request to the server
      fetch('http://localhost:8080/sendData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ domain: window.location.hostname, footprint: totalDataConsumedMB, green: false }),
      })
  
      // Log the total data consumed by the page
      console.log('Total data consumed by the web page (MB):', totalDataConsumedMB);
    } else {
      console.log('Performance API is not supported in this browser.');
    }
  }
  
  // Call the function to calculate data consumed when the page is loaded
  window.addEventListener('load', calculateDataConsumed());
  window.addEventListener('DOMContentLoaded', calculateDataConsumed());
