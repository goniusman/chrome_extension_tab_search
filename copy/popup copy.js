// async function fetchData() {

//   const res=await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
//   const record=await res.json();
//   document.getElementById("date").innerHTML=record.data[0].date;
//   document.getElementById("areaName").innerHTML=record.data[0].areaName;
//   document.getElementById("latestBy").innerHTML=record.data[0].latestBy;
//   document.getElementById("deathNew").innerHTML=record.data[0].deathNew;
// }
// fetchData();





  let lists = document.querySelectorAll('.btn-link')


lists.forEach(element => {
  element.addEventListener('click', async (e) => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true})
  
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      function: pickColor,
      args: [tab, 'test'],
    })
  
  })
});



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





let cl = document.querySelector('.btn')


cl.addEventListener('click',  () => {
  console.log(chrome)
})


