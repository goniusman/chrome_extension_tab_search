function pageFunction(){
 
  var images = document.getElementsByTagName("img").length;
  var iFrames = document.getElementsByTagName("iframe").length;
  
  var total = images + iFrames;
  
  var counts = {images, iFrames, total};
  
  chrome.runtime.sendMessage(counts); // send to background  
  
}


chrome.runtime.onMessage.addListener(msg=> {
    if (document.readyState === 'complete') {
        pageFunction();
    } else {
        window.addEventListener('load', pageFunction);
    }
});




  // // Listen for messages
  // chrome.runtime.onMessage.addListener( (msg, sender, sendResponse) => {

  //   if (msg.text === 'report_back') {
  //     console.log('yes content')
  //   } else {
  //     console.log('no contents');
  //   }

  //   console.log(msg);
  //   console.log(sender);
    
  //   // console.log(document.body.innerText);
  //   // If the received message has the expected format...
  //   if (msg.text === 'report_back') {
  //       // Call the specified callback, passing
  //       // the web-page's DOM content as argument
  //       console.log(msg);
  //       console.log(sender);
  //       sendResponse(document.body.innerText);
  //   }
  // });





