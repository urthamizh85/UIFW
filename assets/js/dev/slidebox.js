(function($) {
	var methods = {
		init : function(element, options) {
			var self = $(element);
			self.options = $.extend({}, $.fn.slideBox.setting, options);
			var data = {
				e : self
			};
			$(self).on("click", data, function(e) {
				var self = $(this), self_parent = self.closest(".slide-box"), self_content = $(".slide-content", self_parent);
				e.data.e._parent = self_parent, e.data.e._content = self_content;
				methods.auto(e.data.e);
			});
		},
		auto : function(element) {
			if (!element._parent.hasClass("slide-box-active")) {
				methods.show(element);
			} else {
				methods.hide(element);
			}
		},
		show : function(element) {
			var animateObject = {};
			if (element._parent.hasClass("slide-box-left")) {
				animateObject = {
					left : 0
				};
			} else {
				animateObject = {
					right : 0
				};
			}
			element._parent.animate(animateObject, element.options.speed || "fast", function() {
				element._parent.addClass("slide-box-active");
			});
		},
		hide : function(element) {
			var animateObject = {};
			if (element._parent.hasClass("slide-box-left")) {
				animateObject = {
					left : -element._content.outerWidth() + "px"
				};
			} else {
				animateObject = {
					right : -element._content.outerWidth() + "px"
				};
			}
			element._parent.removeClass("slide-box-active").animate(animateObject, element.options.speed || "fast", function() {
			});
		}
	};
	$.fn.slideBox = function(options, ele) {
		return this.each(function() {
			if (String(options).match(/^show$/)) {
				methods[options]($(this));
			} else if (String(options).match(/^hide$/)) {
				methods[options]($(this));
			} else {
				methods.init($(this), options || {});
			}
		});
	};
	$.fn.slideBox.setting = {
		speed : 1000
	};
})(jQuery);
