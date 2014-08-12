window.onload = function() {
  document.querySelector('#greeting').innerText =
    'Hello, World! It is ' + new Date();
  //chrome.app.window.current().fullscreen();
  chrome.app.window.current().contentWindow
  

};
