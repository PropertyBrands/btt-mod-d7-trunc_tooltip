(function ($, Drupal) {
	Drupal.behaviors.trunc_peak = {
		attach: function(context, settings) {
			if(Drupal.settings.trunc_peak) {
				$('body', context).once('trunc-peak-processed', function() {
					var $selectors = $(settings.trunc_peak.selectors),
							truncToolTip = document.createElement('span'),
							bodyTag = document.getElementsByTagName('body')[0];

					truncToolTip.className += 'truncate-tooltip';
					truncToolTip.style.position = 'absolute';
					truncToolTip.style.zIndex = 999;
					truncToolTip.style.display = 'none';
					bodyTag.appendChild(truncToolTip);

					$.each($selectors, function(idx, el) {
						var $this = $(el),
								elText = el.innerHTML;

						el.addEventListener('mouseover', showToolTip, false);
					});

					function showToolTip(e) {
						var el = e.target,
								pageX = e.pageX,
								pageY = e.pageY,
								elText = el.innerHTML;

						console.log(e, el.getBoundingClientRect());

						if(el.scrollWidth > el.clientWidth) {
							truncToolTip.innerHTML = elText;
							truncToolTip.style.display = 'inline-block';
							truncToolTip.style.top = pageY + 'px';
							truncToolTip.style.left = pageX + 'px';
						}

					}
				});
			}
		}
	}
})(jQuery, Drupal);