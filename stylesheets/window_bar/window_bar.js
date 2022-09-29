function start_window_bar_stylesheet(){
    if ('windowControlsOverlay' in navigator) {
        navigator.windowControlsOverlay.addEventListener('geometrychange', (event) => {
          if (event.visible) {
            const rect = event.titlebarAreaRect;
            console.log(rect);
            // Do something with the coordinates of the title bar area.
          }
        });
      }else{
        console.log("no windowcontrolsoverlay");
      }
    luckyapp_core.modules.window_bar.loaded = true;
}