(function ($, Drupal) {
	Drupal.behaviors.trunc_tooltip = {
		attach: function(context, settings) {
			
			if(Drupal.settings.trunc_tooltip) {
				$('body', context).once('trunc-peak-processed', function() {
					var $selectors = $(settings.trunc_tooltip.selectors),
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
						el.addEventListener('mouseout', hideToolTip, false);
					});

					function showToolTip(e) {
						var el = e.target,
								pageX = e.pageX + 5,
								pageY = e.pageY + 5,
								elText = el.innerHTML;

						if(el.scrollWidth > el.clientWidth) {
							truncToolTip.innerHTML = elText;
							truncToolTip.style.display = 'inline-block';
							truncToolTip.style.top = pageY + 'px';
							truncToolTip.style.left = pageX + 'px';
						}
					}

					function hideToolTip(e) {
						truncToolTip.innerHTML = '';
						truncToolTip.style.display = 'none';
						truncToolTip.style.top = 0 + 'px';
						truncToolTip.style.left = 0 + 'px';
					}
				});
			}
		}
	}
})(jQuery, Drupal);