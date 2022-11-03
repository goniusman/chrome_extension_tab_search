document.addEventListener("DOMContentLoaded", async() => {
    var tabs = [];

    const btn = document.querySelector(".btn");
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        let searchInput = document.querySelector("#searchinput").value;
        // let selectedTabs = handleRequest(searchInput);

        chrome.windows.getAll({ populate: true }, async(winData) => {
            let allWinTabs = winData[0].tabs;

            let another = allWinTabs
                .map(async(item, index, arr) => {
                    let data = await contetnLoded(item.url, searchInput);

                    if (data !== "") {
                        return `<li
                                class="list-group-item d-flex justify-content-between align-items-center"
                                >
                                <div class="d-flex align-items-center">
                                <img
                                    src="${item.favIconUrl}"
                                    class="rounded-circle"
                                    alt=""
                                    style="width: 45px; height: 45px"
                                />
                                <div class="ms-3">
                                    <p class="fw-bold mb-1">${item.title}</p>
                                    <p class="text-muted mb-0">${item.url}</p>
                                </div>
                                </div>

                                <a class="btn btn-link btn-rounded btn-sm" href="#" role="button"
                                >View</a
                                >
                            </li>`;
                    } else {

                    }
                })
                .join("");
            console.log(another);
            let selectedTabsHTML = another;
            document.querySelector(".list-group").innerHTML = selectedTabsHTML;
        });
    });

    // handleRequest();
});

async function handleRequest(textSearch) {
    // var filterTabs = [];
    return chrome.windows.getAll({ populate: true }, async(winData) => {
        // let url = winData[0].tabs[3].url;
        let allWinData = winData[0].tabs;

        return allWinData.filter(async(item, index, arr) => {
            let data = await contetnLoded(item.url, textSearch);
            var value;
            if (data === "") {
                value = arr[index];
                return item !== value;
            }
            return item;
        });
    });
}

const contetnLoded = async(url, textSearch) => {
    var content = "";
    var parser = new DOMParser();
    const test = await fetch(url)
        .then((res) => res.text())
        .then((r) => {
            var htmlDoc = parser.parseFromString(r, "text/html");
            let data = htmlDoc.all[0].innerText.trim().replace(/\s/g, "");
            // console.log(content.toLowerCase().includes(textSearch));
            if (data.toLowerCase().includes(textSearch)) {
                content = data;
            } else {
                content = "";
            }
        })
        .catch((err) => console.error(err));

    // console.log();
    // return test;
    return content;
};

function onlySearchTab(params) {
    if (searchInput == "" || searchInput == null) {
        alert("Ohh! You forfot to write something");
    } else {
        chrome.windows.getAll({ populate: true }, (winData) => {
            let tabs = winData[0].tabs;

            let selectedTabs = tabs.filter((item) => {
                let title = item.title.toLowerCase().includes(searchInput);
                let url = item.url
                    .split("?")[0]
                    .substr("8")
                    .split(".")[0]
                    .toLowerCase()
                    .includes(searchInput);
                // console.log([...url, ...title]);

                // return [...url, ...title];

                if (url != null) {
                    return url;
                } else if (title != null) {
                    return title;
                }
            });

            let selectedTabsHTML = selectedTabs
                .map((item) => {
                    return `
                <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                <div class="d-flex align-items-center">
                  <img
                    src="${item.favIconUrl}"
                    class="rounded-circle"
                    alt=""
                    style="width: 45px; height: 45px"
                  />
                  <div class="ms-3">
                    <p class="fw-bold mb-1">${item.title}</p>
                    <p class="text-muted mb-0">${item.url}</p>
                  </div>
                </div>

                <a class="btn btn-link btn-rounded btn-sm" href="#" role="button"
                  >View</a
                >
              </li>
                `;
                })
                .join("");
            console.log(selectedTabs);
            document.querySelector(".list-group").innerHTML = selectedTabsHTML;
        });
    }
}