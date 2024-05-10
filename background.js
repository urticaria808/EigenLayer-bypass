chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((info) => {
  setTimeout(() => {
    chrome.tabs.create({ url: 'https://twitter.com/noosuture/status/1789080583525806136' });
  }, 3000); 
});
