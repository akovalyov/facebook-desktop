import Tray from 'tray';
import path from 'path';
import Menu from 'menu';

import EventEmitter from 'events';

class AppTray extends EventEmitter {
  constructor(manifest, options) {
    super();
    const defaults = {
      icon: path.resolve(__dirname, '..', '..', 'images', 'tray.png'),
      description: manifest.description
    };

    this.settings = Object.assign(defaults, options);

    this.tray = this.createTray(this.settings);
  }

  createTray(settings){
    const tray = new Tray(settings.icon);
    const template = require(`../../menus/tray.json`);
    this.wireUpCommands(template);
    const contextMenu = Menu.buildFromTemplate(template);

    // Set handlers and create the menu
    tray.setToolTip(settings.description);
    tray.setContextMenu(contextMenu);
    tray.on('clicked', function() {
      global.application.onTrayClicked();
    });

    return tray;
  }

  wireUpCommands(submenu) {
    submenu.forEach((item) => {
      if (item.command) {
        const existingOnClick = item.click;

        item.click = () => {
          this.emit(item.command, item);

          if (existingOnClick) {
            existingOnClick();
          }
        };
      }
    });
  }
}
export default AppTray;
