/*
Listen for messages from the page.
If the message was from the page script, show an alert.
*/
window.addEventListener("message", (event) => {
  if (event.source == window &&
      event.data &&
      event.data.direction == "from-page-script") {{
  "short_name": "AirHorner",
  "name": "Kinlan's AirHorner of Infamy",
  "icons": [
    {
      "src": "launcher-icon-1x.png",
      "type": "image/png",
      "sizes": "48x48"
    },
    {
      "src": "launcher-icon-2x.png",
      "type": "image/png",
      "sizes": "96x96"
    },
    {
      "src": "launcher-icon-4x.png",
      "type": "image/png",
      "sizes": "192x192"
    }
  ],
  "start_url": "index.html?launcher=true"
}
    alert("Content script received message: \"" + event.data.message + "\"");
  }
});

/*
Send a message to the page script.
*/
function messagePageScript() {
  window.postMessage({
    direction: "from-content-script",
    message: "Message from the content script"
  }, "https://mdn.github.io");
}

/*
Add messagePageScript() as a listener to click events on
the "from-content-script" element.
*/
var fromContentScript = document.getElementById("from-content-script");
fromContentScript.addEventListener("click", messagePageScript);
