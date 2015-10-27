var Configstore = require('configstore');
var webframe = require('web-frame');

var conf = new Configstore('facebook-desktop', {
  zoom: webframe.getZoomFactor()
});
webframe.setZoomFactor(conf.get('zoom'));
