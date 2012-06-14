chrome.contextMenus.create({
  title: "Open all links in selection",
  contexts: ["selection"],
  onclick: function (tab) {
    chrome.tabs.executeScript(null, {file: "content_script.js"});
  }
});
