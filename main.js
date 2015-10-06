var app = require('app'); // Module to control application life.
var BrowserWindow = require('browser-window'); // Module to create native browser window.
var Menu = require('menu');
var MenuItem = require('menu-item');
var Tray = require('tray');
EventEmitter = require('events').EventEmitter
var tray = null;
// Report crashes to our server.
require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the browser window.
  tray = new Tray('res/tray.png');
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    'title-bar-style': 'hidden',
    title: 'Facebok Desktop'
  });
  mainWindow.setMenu(null);

  // and load the index.html of the app.
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  //when window is closed it is minimized to tray instead.
  // this plag allows window to be closed from tray
  var forceExit = false;
  var contextMenu = Menu.buildFromTemplate([{
    label: 'Exit',
    type: 'radio',
    click: function() {
      forceExit = true;
      mainWindow.close();
    }
  }]);
  tray.setToolTip('Facebook Desktop tray.');
  tray.setContextMenu(contextMenu); // Open the DevTools.
  // mainWindow.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
  mainWindow.on('close', function(event) {
    if (!forceExit) {
      event.preventDefault();
      mainWindow.minimize();
    }
  });
  tray.on('clicked', function(event) {
    mainWindow.focus()
  });
});
