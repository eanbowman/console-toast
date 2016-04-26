/* toast.js - Adds toast functionality to a page
 * https://github.com/eanbowman/console-toast
 */

var _toast_;
;(function () {
  setTimeout( function() {
    var toastHTML = '<div class="console--toast"><span class="console--toast-msg"></span><a class="console--toast-action"></a></div>';
    var fadeTimeout;
    var displayTimeout;
    document.body.innerHTML += toastHTML;
    _toast_ = function(message, timeout, action, command) {
      if( typeof timeout == 'undefined' ) timeout = 2000;
      clearTimeout( fadeTimeout );
      clearTimeout( displayTimeout );
      var obj = document.getElementsByClassName('console--toast')[0];
      var msg = obj.getElementsByClassName('console--toast-msg')[0];
      obj.className = 'console--toast';
      msg.innerHTML = message;
      obj.style.display = 'block';
      if( typeof action != 'undefined' ) {
        var btn = obj.getElementsByClassName('console--toast-action')[0];
        btn.addEventListener('click', command);
        btn.innerHTML = action;
      }
      if( obj.scrollHeight > 28 ) { }
      fadeTimeout = setTimeout(function () {
        obj.className = 'console--toast console--toast-fade-out';
        displayTimeout = setTimeout(function () {
          document.body.removeChild( obj );
          document.body.innerHTML += toastHTML;
        }, 500);
      }, timeout);
    };
  }, 1 );
})();
