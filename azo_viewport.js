const AZO_VIEWPORT_PREFIX = '';
const AZO_VIEWPORT_WIDTH_PC = 960;

var azo_viewport_device = (screen.width < 640 ? 'mp' : 'pc');
var azo_viewport_viewmode = (azo_viewport_device == 'pc' || document.cookie.indexOf(AZO_VIEWPORT_PREFIX + '_azo_viewport_viewmode=pc') != -1 ? 'pc' : 'mp');

function azo_viewport_get_device() {
  return azo_viewport_device;
}
function azo_viewport_get_mode() {
  return azo_viewport_viewmode;
}

function azo_viewport_viewmode_setmp() {
  if(azo_viewport_device == 'mp') {
    if(azo_viewport_viewmode == 'pc') {
      var date = new Date();
      date.setTime(0);
      document.cookie = AZO_VIEWPORT_PREFIX + '_azo_viewport_viewmode=;expires=' + date.toGMTString();
      location.reload(false);
    }
  }
}

function azo_viewport_viewmode_setpc() {
  if(azo_viewport_device == 'mp') {
    if(azo_viewport_viewmode == 'mp') {
      document.cookie = AZO_VIEWPORT_PREFIX + '_azo_viewport_viewmode=pc';
      location.reload(false);
    }
  }
}

function azo_viewport_viewmode_switch() {
  if(azo_viewport_device == 'mp') {
    if(azo_viewport_viewmode == 'pc') {
      azo_viewport_viewmode_setmp();
    } else {
      azo_viewport_viewmode_setpc();
    }
  }
}

