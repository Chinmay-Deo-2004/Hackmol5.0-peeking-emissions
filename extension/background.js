chrome.action.onClicked.addListener((tab) => {
  console.log("extension button clicked")
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      // files: ["content-script.js"]
      function: injectScript
    });
  });

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if(message.type === "setData") {
      console.log(message)
      console.log("Data received from content script: ", message.data);
      chrome.storage.local.set({ siteData: message }, function() {
        console.log('Data saved to storage');
        const payload = {
          domain: message.domain,
          footprint: message.data,
          green: message.green
        }

        //sending data to server
        fetch('http://localhost:8800/sendData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });


      });
    }
  })

//when tab is closed
chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
  console.log("Tab is closed")
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    files: ["content-script.js"]
  });
})

function injectScript() {
  console.log("hello!");
}