import Tray from 'tray';
import path from 'path';

import EventEmitter from 'events';

class AppTray extends EventEmitter {
  constructor(manifest, options) {
    super();
    const defaults = {
      icon: path.resolve(__dirname, '..', '..', 'images', 'tray.png'),
      description: manifest.description
    };

    this.settings = Object.assign(defaults, options);

    this.tray = this.createTray(this.settings)
  }
  createTray(settings){

    const tray = new Tray(settings.icon);
    tray.setToolTip(settings.description);

    tray.on('clicked', function(event) {
      global.application.onTrayClicked();
    });

    return tray;
  }
}
export default AppTray;
