elation.elements.define('janus.ui.buttons', class extends elation.elements.base {
  create() {
    this.innerHTML = elation.template.get('janus.ui.buttons');
alert('new buttons' + this.innerHTML);
  }
});
elation.elements.define('janus-buttons-display', class extends elation.elements.ui.dropdownbutton {
  init() {
    super.init();

    var detect = {
      fullscreen: () => this.supportsFullscreen(),
      webvr: () => this.supportsWebVR(),
      chromecast: () => this.supportsChromecast(),
      equirectangular: () => this.supportsEquirectangular(),
      sbs3d: () => this.supportsSBS3D(),
      ou3d: () => this.supportsOU3D(),
      peppersghost: () => this.supportsPeppersGhost(),
    };

  }
  supportsFullscreen() {
  }
  supportsWebVR() {
  }
  supportsChromecast() {
  }
  supportsEquirectangular() {
  }
  supportsSBS3D() {
  }
  supportsOU3D() {
  }
  supportsPeppersGhost() {
  }
});

elation.elements.define('janus-buttons-fullscreen', class extends elation.elements.ui.togglebutton {
  create() {
    super.create();
    elation.events.add(document, 'fullscreenchange', (ev) => {
      if (document.fullscreen) {
        this.active = true;
      } else {
        this.active = false;
      }
    });
  }
  onactivate(ev) {
    this.client.fullscreen(true);
  }
  ondeactivate(ev) {
    this.client.fullscreen(false);
  }
});
elation.elements.define('janus-buttons-webvr', class extends elation.elements.ui.togglebutton {
});
elation.elements.define('janus-buttons-chromecast', class extends elation.elements.ui.togglebutton {
});
elation.elements.define('janus-buttons-equirectangular', class extends elation.elements.ui.togglebutton {
});
elation.elements.define('janus-buttons-sbs3d', class extends elation.elements.ui.togglebutton {
});
elation.elements.define('janus-buttons-ou3d', class extends elation.elements.ui.togglebutton {
});
elation.elements.define('janus-buttons-peppersghost', class extends elation.elements.ui.togglebutton {
});
