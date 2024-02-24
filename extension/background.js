chrome.action.onClicked.addListener((tab) => {
  console.log("extension button clicked")
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content-script.js"]
    });
  });

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if(message.output){
      chrome.action.setPopup({
        popup: "popup.html?output=" + encodedURIComponent(message.output)
      })
    }
  })