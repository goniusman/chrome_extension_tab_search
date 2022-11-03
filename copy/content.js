chrome.runtime.onMessage.addListener((obj, sender, response) => {
  const { type, value, videoId } = obj;

  if (type === "PLAY") {
    console.log("I am playing");
  } else {
    console.log("i am not playing");
  }

  response("currentVideoBookmarks");
});
