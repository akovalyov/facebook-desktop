var webview = document.getElementById('webview');
var indicator = document.getElementById('preloader');
var webframe = require('web-frame');

var loadstop = function() {
  // if (firstTime) {
  // firstTime = false;
  indicator.style.display = 'none';
  // }
};
webview.addEventListener('did-start-loading', function() {
  indicator.style.display = 'block';
});
webview.addEventListener('did-stop-loading', loadstop);
require('ipc').on('zoom:encrease', function() {
  webframe.setZoomLevel(webframe.getZoomLevel() + 1);
});
require('ipc').on('zoom:decrease', function() {
  webframe.setZoomLevel(webframe.getZoomLevel() - 1);
});
require('ipc').on('zoom:reset', function() {
  webframe.setZoomLevel(0);
});
