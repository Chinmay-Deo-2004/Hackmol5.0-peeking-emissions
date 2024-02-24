
function calculateDataConsumed() {
    // Check if the browser supports the Performance API
    if (window.performance && window.performance.getEntriesByType) {
      // Get all resources loaded by the page
      var resources = window.performance.getEntriesByType('resource');
  
      var totalDataConsumed = 0;
  
      // Iterate through each resource and sum up the transferred size
      resources.forEach(function(resource) {
        totalDataConsumed += resource.transferSize;
      });
  
      // Convert bytes to MBs for easier understanding
      var totalDataConsumedKB = totalDataConsumed / 1024 / 1024;
  
      // Log the total data consumed by the page
      console.log('Total data consumed by the web page (MB):', totalDataConsumedKB);
    } else {
      console.log('Performance API is not supported in this browser.');
    }
  }
  
  // Call the function to calculate data consumed when the page is loaded
  window.addEventListener('load', calculateDataConsumed());
  window.addEventListener('DOMContentLoaded', calculateDataConsumed());
  console.log(calculateDataConsumed());

  //whne this script is executed, let's now send it to the extension
  chrome.runtime.sendMessage({data: calculateDataConsumed()}, function(response) {
    console.log(response);
  });

