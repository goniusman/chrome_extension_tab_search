chrome.tabs.query({
  active: true,currentWindow: true
}).then(tabs => {
  var tab = tabs[0];
  chrome.storage.local.get("tab"+tab.id).then(data => {
         try{
          var x = data["tab"+tab.id];
          document.getElementById("iFrameHTML").innerHTML = x.iFrames;
          document.getElementById("imgHTML").innerHTML = x.images;
          document.getElementById("totalHTML").innerHTML = x.total;
       }catch(e) {
      }
      
  });
});









// chrome.extension.onRequest.addListener(
//   function(request, sender, sendResponse) {
//       if(request.method == "getText"){
//           sendResponse({data: document.all[0].innerText, method: "getText"}); //same as innerText
//       }
//   }
// );



