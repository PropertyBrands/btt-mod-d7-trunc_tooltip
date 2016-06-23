(function ($, Drupal) {
	Drupal.behaviors.trunc_tooltip = {
		attach: function(context, settings) {
			var _this = this,
					$selectors = $(settings.trunc_tooltip.selectors);

			if(Drupal.settings.trunc_tooltip) {
				$selectors.once('truncate-tooltip-processed').each(function(idx, el) {
					el.addEventListener('mouseover', _this, false);
					el.addEventListener('mouseout', _this, false);
				});
			}
		},
		toolTip: null,
		buildToolTipSpan: function() {
			var toolTip = document.createElement('span'),
					_this = this;

			toolTip.style.position = 'absolute';
			toolTip.style.zIndex = 999;
			toolTip.style.display = 'inline-block';

			toolTip.className += 'truncate-tooltip';

			return toolTip;
		},
		handleEvent: function(e) {
			var el = e.target,
					text = el.innerHTML,
					bodyTag = document.getElementsByTagName('body')[0],
					posX = e.pageX + 5
					posY = e.pageY + 5,
					_this = this;

			if(!_this.toolTip) {
				_this.toolTip = _this.buildToolTipSpan();
			}

			_this.toolTip.style.top = posY + 'px';
			_this.toolTip.style.left = posX + 'px';
			_this.toolTip.innerHTML = text;

			console.log(this);
			console.log(e);
			console.log(_this.toolTip);
			switch(e.type) {
				case 'mouseover':
					bodyTag.appendChild(_this.toolTip);
					break;
				case 'mouseout':
					_this.toolTip.remove();
					break
			}
		},
		showToolTip: function(e) {
			var el = e.target,
					pos = {},
					text = el.innerHTML,
					_this = this;

			pos.pageX = e.pageX + 5;
			pos.pageY = e.pageY + 5;

			if(el.scrollWidth > el.clientWidth) {
				console.log(_this);
			}
			return this;
		},
		hideToolTip: function(e) {

			console.log(this, _this);
			return this;

		},
	};
})(jQuery, Drupal);