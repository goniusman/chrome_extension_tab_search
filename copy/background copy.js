
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


 


  // chrome.tabs.query({ currentWindow: true }, function (tabs) {
  //   let search = tabs.filter(function (tab) {
  //   return tab.url.split("?")[0].substr("8").split('.')[0].includes('m');
  // });

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

    ////find tab id
    // chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    //     your_tab_Id = sender.tab.id);
    // });


    ///////// use instead of onRequest 
    //   chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    //     your_tab_Id = sender.tab.id;
    //     chrome.tabs.update(your_tab_Id,{"active":true,"highlighted":true},function (tab){
    //         console.log("Completed updating tab .." + JSON.stringify(tab));
    //     });
    // })


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


  
  // });









//// find text
  // let do = document.getElementsByClassName('question-page');

  // function deepText(node){
  //     var A= [];
  //     if(node){
  //         node= node.firstChild;
  //         while(node!= null){
  //             if(node.nodeType== 3) A[A.length]=node;
  //             else A= A.concat(deepText(node));
  //             node= node.nextSibling;
  //         }
  //     }
  //     return A;
  // }

  // deepText(dos[0])



//// selection 
// Clear any current selection
// const selection = window.getSelection();
// selection.removeAllRanges();

// const node = document.getElementById('demo_text');
// const range = document.createRange();   
// range.selectNodeContents(node);

// // Add the range to the empty selection
// selection.addRange(range);
// ::-moz-selection {
//   background: pink;
// }

// ::selection {
//   background: pink;
// }




// function getSartEnd(elementID)
//   {
//   let el    = document.getElementById(elementID)
//     , elTxt = el.textContent.replace(/[\n\r]+/g, '').trim()
//     , pTxt  = el.parentNode.textContent.replace(/[\n\r]+/g, '').trim()
//     , start = pTxt.indexOf(el.textContent)
//     , end   = start + elTxt.length -1
//     ;
//   return { start, end }
//   }

// console.log( getSartEnd('demo_text') )




// // 
// chrome.app.runtime.onLaunched.addListener(function() {
//   var windowWidth = 300;
//   var windowHeight = 325;
//   chrome.app.window.create(
//     'popup.html',
//     {
//       innerBounds: {
//         width: windowWidth,
//         height: windowHeight
//       },
//       resizable: false,
//       frame: 'none'
//     },
//     function(win) {
//       win.outerBounds.setPosition(
//         screen.availWidth - win.outerBounds.width, // left
//         screen.availHeight - win.outerBounds.height // top
//       );
//     }
//   );      
// });







// async function fetchData() {

//   const res=await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
//   const record=await res.json();
//   document.getElementById("date").innerHTML=record.data[0].date;
//   document.getElementById("areaName").innerHTML=record.data[0].areaName;
//   document.getElementById("latestBy").innerHTML=record.data[0].latestBy;
//   document.getElementById("deathNew").innerHTML=record.data[0].deathNew;
// }
// fetchData();








  
 







// (function () {
//   const basicAutocomplete = document.querySelector('#search-autocomplete');
// const data = ['One', 'Two', 'Three', 'Four', 'Five'];
// const dataFilter = (value) => {
// return data.filter((item) => {
// return item.toLowerCase().startsWith(value.toLowerCase());
// });
// };

// new mdb.Autocomplete(basicAutocomplete, {
// filter: dataFilter
// });

// })()


// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//       console.log("background.js got a message")
//       console.log(request);
//       console.log(sender);
//       sendResponse(sender);
//   }
// );






