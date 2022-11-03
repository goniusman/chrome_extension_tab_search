// async function fetchData() {

//   const res=await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
//   const record=await res.json();
//   document.getElementById("date").innerHTML=record.data[0].date;
//   document.getElementById("areaName").innerHTML=record.data[0].areaName;
//   document.getElementById("latestBy").innerHTML=record.data[0].latestBy;
//   document.getElementById("deathNew").innerHTML=record.data[0].deathNew;
// }
// fetchData();

let lists = document.querySelectorAll(".btn-link");

lists.forEach((element) => {
  element.addEventListener("click", async (e) => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

<<<<<<< HEAD
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: pickColor,
      args: [tab, "test"],
    });
  });
});
=======


// let lists = document.querySelectorAll('.btn-link')
// lists.forEach(element => {
//   element.addEventListener('click', async (e) => {
//     let [tab] = await chrome.tabs.query({active: true, currentWindow: true})
  
//     chrome.scripting.executeScript({
//       target: {tabId: tab.id},
//       function: pickColor,
//       args: [tab, 'test'],
//     })
  
//   })
// });
>>>>>>> ffde62b866684237713ac60924f02ea0d7234468

// function pickColor(...tab) {
//   // console.log(tab[1]);

//   chrome.runtime.sendMessage(
//     "foo",
//     function (response) {
//         console.log(response);
//     }
//   );
// }

console.log("this is content.js reporting for duty");

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

let cl = document.querySelector(".btn");

cl.addEventListener("click", () => {
  console.log(chrome);
});

////////// youtube recent list
// document.addEventListener("DOMContentLoaded", async () => {
//   const linksList = document.getElementById("linksList");
//   const url = "https://jgg-utils.netlify.app/api/recentYTVideos";

//   const copy = (e) => {
//     const str = e.target.dataset.url;
//     const el = document.createElement("textarea");
//     el.value = str;
//     document.body.appendChild("copy");
//     document.removeChild(el);
//   };

<<<<<<< HEAD
//   try {
//     const res = await fetch(url);
//     const videos = await res.json();
//     const videosHTML = videos
//       .map((video) => {
//         const videoUrl = `https://www.youtube.com/watch?v=${video.videoId}`;
//         return `<li class="video-link">
//       <button class="btn" data-url="${videoUrl}">Copu URL</button>
//       <a class="btn" href="${videoUrl}" rel="noopener noreferrer" target="_blank">Watch</a>
//       ${video.title}
//     </li>`;
//       })
//       .join("");
//     linksList.innerHTML = videosHTML;
//     const videoLinks = [...document.querySelectorAll(".video-lin")];
//     videoLinks.forEach((link) => link.addEventListener("click", copy));
//   } catch (error) {
//     console.log(error);
//   }
// });
=======
// let cl = document.querySelector('.btn')


// cl.addEventListener('click',  () => {
//   console.log(chrome)
// })


// chrome.tabs.query({
//   active: true,currentWindow: true
// }).then(tabs => {
//   var tab = tabs[0];
//   chrome.storage.local.get("tab"+tab.id).then(data => {
//          try{
//           var x = data["tab"+tab.id];
//           document.getElementById("iFrameHTML").innerHTML = x.iFrames;
//           document.getElementById("imgHTML").innerHTML = x.images;
//           document.getElementById("totalHTML").innerHTML = x.total;
//        }catch(e) {
//       }
      
//   });
// });









// chrome.extension.onRequest.addListener(
//   function(request, sender, sendResponse) {
//       if(request.method == "getText"){
//           sendResponse({data: document.all[0].innerText, method: "getText"}); //same as innerText
//       }
//   }
// );



// chrome.windows.getAll({populate:true}, getAllOpenWindows);
// function getAllOpenWindows(winData) {
//   var tabs = [];
//   var alltext = ""
//   for (var i in winData) {
//     if (winData[i].focused === true) {
//         var winTabs = winData[i].tabs;
//         var totTabs = winTabs.length;
//         for (var j=0; j<totTabs;j++) {
//           tabs.push(winTabs[j].id);
//           // let tab = winTabs[j];
//         }
//     }
//   }
//   console.log(winData);
// }


// console.log(chrome);






// chrome.tabs.query({
//   active: false,currentWindow: true
// }).then(tabs => {
//   var tab = tabs[0];
//   console.log(tab);


// chrome.extension.onRequest.addListener(
//   function(request, sender, sendResponse) {
//       if(request.method == "getText"){
//           sendResponse({data: document.all[0].innerText, method: "getText"}); //same as innerText
//       }
//   }
// );

//   // chrome.storage.local.get("tab"+tab.id).then(data => {
//   //        try{
//   //         var x = data["tab"+tab.id];
//   //         document.getElementById("iFrameHTML").innerHTML = x.iFrames;
//   //         document.getElementById("imgHTML").innerHTML = x.images;
//   //         document.getElementById("totalHTML").innerHTML = x.total;
//   //      }catch(e) {
//   //     }
      
//   // });


// });









>>>>>>> ffde62b866684237713ac60924f02ea0d7234468
