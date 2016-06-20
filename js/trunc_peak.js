(function ($, Drupal) {
	Drupal.behaviors.trunc_peak = {
		attach: function(context, settings) {
			var selectors = settings;
			console.log(selectors);
		}
	}
})(jQuery, Drupal);