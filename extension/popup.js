//when extension is clicked
 chrome.action.onClicked.addListener((tab) => {
   console.log("extension button clicked")
 });

setTimeout(() => {
    chrome.storage.local.get(['siteData'], function(result) {
        console.log('Value currently is ' + result.siteData);
        var data = result.siteData.data;
        //calculate footprint upto 6 deciml places
        var footprint = (data*11/1024).toFixed(6);

    
        // Display data in UI
        var dataContainer = document.getElementById('consumed');
        var footprintcontainer = document.getElementById('session');
        var total = document.getElementById('website');
        if (data) {
            dataContainer.innerText = JSON.stringify(data, null, 2); // Example display, adjust as needed
            footprintcontainer.innerText = JSON.stringify(footprint, null, 2);
            total.innerText = JSON.stringify(footprint, null, 2);
        } else {
            dataContainer.innerText = 'No data available';
            footprintcontainer.innerText = 'No data available';
            total.innerText = 'No data available';
        }
      });
}, 3000)
