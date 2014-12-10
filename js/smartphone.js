	var change_viewport_for_mobiles = function () {
		var win_Width		= 1024,
			win_min_Width	= 768;

		// Internet Explorer (backward-compatibility mode):
		if (document.body && document.body.offsetWidth) {
			win_Width = document.body.offsetWidth;
		}

		// Internet Explorer (standards mode, document.compatMode=='CSS1Compat'):
		if (document.compatMode=='CSS1Compat' && document.documentElement && document.documentElement.offsetWidth) {
			win_Width = document.documentElement.offsetWidth;
		}

		// In most other browsers – as well as IE9 (standards mode):
		if (window.innerWidth && window.innerHeight) {
			win_Width = window.innerWidth;
		}

		if (win_Width < win_min_Width) {
			var metaElement = document.getElementById("myMeta"),
					initial_scale = parseFloat((win_Width / win_min_Width)).toFixed(2),
					viewportMeta = document.createElement('meta');

			if (metaElement) {
				document.head.removeChild(metaElement);
			}

			viewportMeta.setAttribute('id', 'myMeta');
			viewportMeta.setAttribute('name', 'viewport');
			viewportMeta.setAttribute('content', 'width=768, initial-scale=' + initial_scale + ', user-scalable=yes');
			document.head.appendChild(viewportMeta);
		}
	};

	function doOnOrientationChange() {
		change_viewport_for_mobiles();
	}

	if (window.addEventListener) {
		window.addEventListener('orientationchange', doOnOrientationChange);
	}
	

	change_viewport_for_mobiles();
