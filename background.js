

// chrome.windows.getAll({populate:true}, getAllOpenWindows);
// function getAllOpenWindows(winData) {
//   var tabs = [];
//   for (var i in winData) {
//     if (winData[i].focused === true) {
//         var winTabs = winData[i].tabs;
//         var totTabs = winTabs.length;
//         for (var j=0; j<totTabs;j++) {
//           tabs.push(winTabs[j].url);
//         }
//     }
//   }
//   console.log(winData);
// }


// {
//   "active": false,
//   "audible": false,
//   "autoDiscardable": true,
//   "discarded": false,
//   "favIconUrl": "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico",
//   "groupId": -1,
//   "height": 937,
//   "highlighted": false,
//   "id": 1596125134,
//   "incognito": false,
//   "index": 1,
//   "mutedInfo": {
//       "muted": false
//   },
//   "pinned": false,
//   "selected": false,
//   "status": "complete",
//   "title": "Inbox - goniusman600@gmail.com - Gmail",
//   "url": "https://mail.google.com/mail/u/0/#inbox",
//   "width": 1920,
//   "windowId": 1596125132
// }


chrome.tabs.query({ currentWindow: true }, function (tabs) {
  let search = tabs.filter(function (tab) {
   return tab.url.split("?")[0].substr("8").split('.')[0].includes('m');
});

  // console.log(search[0].selected);
  // search[0].selected = true;
  // search[0].active = true;
  // search[0].highlighted = true;
  // console.log(search[0].selected);

// console.log(tabs);

  // chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  //     your_tab_Id = sender.tab.id;
  //     chrome.tabs.update(your_tab_Id,{"active":true,"highlighted":true},function (tab){
  //         console.log("Completed updating tab .." + JSON.stringify(tab));
  //     });
  // });

  // chrome.tabs.update(1596125322,{"active":true,"highlighted":true},function (tab){
  //   console.log("Completed updating tab .." + JSON.stringify(tab));
  // }); 

  // search.forEach(element => {
  //   // console.log(element.favIconUrl);
  //   // console.log(element.title);
  //   // console.log(element.windowId);

  //   element.active = true;
  //   element.selected = true;


  // });
  // console.log(all);


  
});






























