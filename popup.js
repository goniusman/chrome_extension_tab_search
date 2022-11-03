document.addEventListener("DOMContentLoaded", async() => {
    const linksList = document.getElementById("linksList");
    const url = "https://jgg-utils.netlify.app/api/recentYTVideos";

    const copy = (e) => {
        const str = e.target.dataset.url;
        const el = document.createElement("textarea");
        el.value = str;
        document.body.appendChild("copy");
        document.removeChild(el);
    };

    try {
        const res = await fetch(url);
        const videos = await res.json();
        const videosHTML = videos
            .map((video) => {
                const videoUrl = `https://www.youtube.com/watch?v=${video.videoId}`;
                return `<li class="video-link">
      <button class="btn" data-url="${videoUrl}">Copu URL</button>
      <a class="btn" href="${videoUrl}" rel="noopener noreferrer" target="_blank">Watch</a>
      ${video.title}
    </li>`;
            })
            .join("");
        linksList.innerHTML = videosHTML;
        const videoLinks = [...document.querySelectorAll(".video-lin")];
        videoLinks.forEach((link) => link.addEventListener("click", copy));
    } catch (error) {
        console.log(error);
    }
});

document.addEventListener("");