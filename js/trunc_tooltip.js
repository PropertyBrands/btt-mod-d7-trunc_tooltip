(function ($, Drupal) {
  Drupal.behaviors.trunc_tooltip = {
    attach: function(context, settings) {
      var _this = this;

      if(Drupal.settings.trunc_tooltip) {
        $(settings.trunc_tooltip.selectors).once('truncate-tooltip-processed').each(function(idx, el) {
          el.addEventListener('mouseover', _this, false);
          el.addEventListener('mouseout', _this, false);
        });
      }
    },
    toolTip: null,
    buildToolTipSpan: function() {
      var toolTip = document.createElement('span'),
          _this = this;

      window.requestAnimationFrame(function() {
        toolTip.style.position = 'absolute';
        toolTip.style.zIndex = 999;
        toolTip.style.display = 'inline-block';
        toolTip.className += 'truncate-tooltip';
      });

      return toolTip;
    },
    handleEvent: function(e) {
      var el = e.target,
          text = el.innerHTML,
          bodyTag,
          posX = e.pageX + 5,
          posY = e.pageY + 5,
          _this = this;

      if(!_this.toolTip) {
          _this.toolTip = _this.buildToolTipSpan();
      }

      bodyTag = document.getElementsByTagName('body')[0];

      if(el.scrollWidth > el.clientWidth) {
        switch(e.type) {
          case 'mouseover':
            window.requestAnimationFrame(function() {
              _this.toolTip.style.top = posY + 'px';
              _this.toolTip.style.left = posX + 'px';
              _this.toolTip.innerHTML = text;
              bodyTag.appendChild(_this.toolTip);
            });
            break;
          case 'mouseout':
            if(!('remove' in Element.prototype)) {
              Node.prototype.remove = function() {
                if(this.parentNode) {
                  this.parentNode.removeChild(this);
                }
              }
            }
            window.requestAnimationFrame(function() {
              _this.toolTip.remove();
            });
            break;
        }
      }
    },
  };
})(jQuery, Drupal);