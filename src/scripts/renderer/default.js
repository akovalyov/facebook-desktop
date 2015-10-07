console.log('renderer/main.js');
var firstTime = true;
var webview = document.getElementById("webview");
var indicator = document.getElementById("preloader");

var loadstop = function() {
  // if (firstTime) {
    // firstTime = false;
    indicator.style.display = 'none';
  // }
}
webview.addEventListener("did-start-loading", function(){
  indicator.style.display = 'block';
});
webview.addEventListener("did-stop-loading", loadstop);
