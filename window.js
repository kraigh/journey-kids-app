
  // document.querySelector('#greeting').innerText =
  //   'Hello, World! It is ' + new Date();
  //chrome.app.window.current().fullscreen();
  console.log('foobar.');
  var webview = document.getElementById("test");
  // webview.executeScript({ file: "jsPrintSetup.js" });
  //var webview = document.getElementById("test");
  //webview.addEventListener("loadstop", injectIt);
  // webview.onload();
  // webview.executeScript({ code: "document.body.style.backgroundColor = 'red'" });
  // webview.addEventListener('load', function(e) {
  //   console.log("jsPrintSetup");
  // });
     webview.addEventListener("loadstop", function() {
        console.info("External window webview content loaded...");
        webview.executeScript({file:"jsPrintSetup.js"});

        webview.executeScript(
          {code: "content.js"},
          function(results) {
            // return value stored in results
            console.log('done');
        }); 
    
    });

  