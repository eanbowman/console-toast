	(function () {
		document.body.innerHTML += '<div class="console--toast"><span class="icon icon-warning"></span>&nbsp;&nbsp;<span class="msg"></span></div><style type="text/css">.console--toast { position: fixed; display: none; bottom: 5px; right: 5px; width: auto; height: 3em; line-height: 1em; padding: 1em; background: #D2492A; color: white; border-radius: 3px; opacity: 1; -webkit-transition: all 500ms cubic-bezier(0.42, 0, 0.58, 1); -moz-transition: all 500ms cubic-bezier(0.42, 0, 0.58, 1); -o-transition: all 500ms cubic-bezier(0.42, 0, 0.58, 1); transition: all 500ms cubic-bezier(0.42, 0, 0.58, 1); } .console--toast icon { float: left; line-height: 1em; height: 1em; } .console--toast.fadeOut { opacity: 0; }</style>';
		var oldLog = console.log;
		console.log = function (message) {
			document.getElementsByClassName('console--toast')[0].childNodes[0].innerHTML = message;
			document.getElementsByClassName('console--toast')[0].style.display = 'block';
			setTimeout(function () { 
				document.getElementsByClassName('console--toast')[0].className = 'console--toast fadeOut';
				setTimeout( function() {
					document.getElementsByClassName('console--toast')[0].style.display = 'none'; 
				}, 500 );
			}, 5000);
			oldLog.apply(console, arguments);
		};
	})();
