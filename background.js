chrome.tabs.onUpdated.addListener(() => {
  chrome.tabs.executeScript({
    file: "content.js"
  })
})