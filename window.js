window.onload = function() {
  document.querySelector('#greeting').innerText =
    'Hello, World! It is ' + new Date();
  //chrome.app.window.current().fullscreen();
  chrome.app.window.current().contentWindow
  var webview = document.getElementById("test");
  webview.addEventListener("loadstop", injectIt);
  // webview.onload();
  //webview.executeScript({ code: "document.body.style.backgroundColor = 'red'" });
  // webview.addEventListener('load', function(e) {
  //   console.log("jsPrintSetup");
  // });
  
  var injectIt = function() {
    console.log('foobar?');
    webview.executeScript({ code: "console.log('foobar!');" });
  }

};



