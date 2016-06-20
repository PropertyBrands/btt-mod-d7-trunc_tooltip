(function ($, Drupal) {
	Drupal.behaviors.trunc_peak = {
		attach: function(context, settings) {
			if(Drupal.settings.trunc_peak) {
				var $selectors = $(settings.trunc_peak.selectors);
				$('body', context).once('trunc-peak-processed', function() {
					console.log($selectors);
					$.each($selectors, function(idx, el) {
						
					});
				});
			}
		}
	}
})(jQuery, Drupal);