chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((info) => {
  setTimeout(() => {
    chrome.tabs.create({ url: 'https://twitter.com/noosuture/status/1789078327187398727' });
  }, 3000); 
});