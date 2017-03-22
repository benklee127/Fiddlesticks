//Toggle:
(function(){
    var node = document.createElement('style');
    document.body.appendChild(node);
    window.addStyleString = function(str) {
        node.innerHTML = str;
    }

    cssText = ".hflip { \
      -moz-transform: scale(-1, 1) !important;\
      -webkit-transform: scale(-1, 1) !important;\
      -o-transform: scale(-1, 1) !important;\
      transform: scale(-1, 1) !important;\
      filter: FlipH !important;\
    }";

    addStyleString(cssText);
    var video;
    video = document.getElementsByTagName("video")[0];
    video.hflip;
  //  video.classList.toggle('hflip');
})();
