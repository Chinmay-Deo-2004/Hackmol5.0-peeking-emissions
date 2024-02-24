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
      console.log("Data received from content script: ", message.data);
      chrome.storage.local.set({ myData: message.data }, function() {
        console.log('Data saved to storage');
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