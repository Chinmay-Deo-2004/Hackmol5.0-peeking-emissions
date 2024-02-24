//when extension is clicked
 chrome.action.onClicked.addListener((tab) => {
   console.log("extension button clicked")
 });

setTimeout(() => {
    chrome.storage.local.get(['myData'], function(result) {
        var data = result.myData;
    
        // Display data in UI
        var dataContainer = document.getElementById('consumed');
        if (data) {
          dataContainer.innerText = JSON.stringify(data, null, 2); // Example display, adjust as needed
        } else {
          dataContainer.innerText = 'No data available';
        }
      });
}, 3000)
