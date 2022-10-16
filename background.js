

// A function to use as callback
function doStuffWithDom(domContent) {
  console.log('I received the following DOM content:\n' + domContent);
}


// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   chrome.tabs.sendMessage(889923911, {greeting: "hello"}, function(response) {
//     console.log(tabs);
//   });
// });

chrome.tabs.sendMessage(889923911, {greeting: "hello"}, function(response) {
  console.log(response);
});



chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    // console.log(request);
    console.log(sender);
    // console.log(sendResponse);

    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");

    if (request.greeting === "hello")
        sendResponse({farewell: "goodbye"});
    }

);
// chrome.tabs.sendMessage(889923908, {text: 'report_back'}, doStuffWithDom);






////// this is another function
chrome.runtime.onInstalled.addListener(details => {
  chrome.storage.local.clear();
});
chrome.tabs.onUpdated.addListener((tabId, tab)=> {
    if (tab.status == "complete") {
        chrome.tabs.sendMessage(tabId, {start: true});
    }
});
chrome.runtime.onMessage.addListener((request, sender) => {
    //console.log(request)
    chrome.storage.local.set({["tab"+sender.tab.id]:request}); 
    chrome.storage.local.get("tab"+sender.tab.id).then(dat => {
        chrome.action.setBadgeText({
            text: request.total+ "",
            tabId: sender.tab.id
        });
    });
});
// Clear Cache
chrome.tabs.onRemoved.addListener(tabId => {
    chrome.storage.local.get('tab'+tabId).then(data => {
        delete data['tab' + tabId];
    });
});













  chrome.windows.getAll({populate:true}, getAllOpenWindows);
  function getAllOpenWindows(winData) {
    var tabs = [];
    var alltext = ""
    for (var i in winData) {
      if (winData[i].focused === true) {
          var winTabs = winData[i].tabs;
          var totTabs = winTabs.length;
          for (var j=0; j<totTabs;j++) {
            tabs.push(winTabs[j].id);
            // let tab = winTabs[j];
          }
      }
    }
    console.log(winData);
  }
