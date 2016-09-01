(function($) {
	var methods = {
		init : function(element, options) {
			var self = $(element);
			self.options = $.extend({}, $.fn.scrollmessage.setting, options);
			methods.fade(self);
			methods.loop(self);
			self.hover = false;
			var data = {
				e : self
			};
			$(element).on("mouseover", data, function(e) {
				var self = $(this);
				e.data.e.hover = true;
			}).on("mouseout", data, function(e) {
				var self = $(this);
				e.data.e.hover = false;
			});
			$("#msg_left_btn").on("click", data, function(e) {
				var self = $(this);
				methods.fadeReverse(e.data.e);
			});
			$("#msg_right_btn").on("click", data, function(e) {
				var self = $(this);
				methods.fade(e.data.e);
			});
		},
		loop : function(element) {
			element.interval = setInterval(function() {
				if (String(element.hover).match(/undefined|false/)) {
					methods.fade(element);
				}
				if(element.is(":hidden")){
					window.clearInterval(element.interval);
				}
			}, element.options.delay);
		},
		fade : function(element) {
			var firstItem = $(".scroll-message-item:eq(0)", element), activeItem = $(".scroll-message-item.active", element), activeNext = activeItem.next();
			if (String(element.attr("data-message-animate")).match(/^$|undefined/)) {
				firstItem.fadeIn().addClass("active");
				element.attr("data-message-animate", "true");
			} else {
				$(".scroll-message-content",element).append(activeItem.removeClass("active").removeAttr("style"));
				activeNext.fadeIn().addClass("active");
			}
			methods.updateNav(element);
		},
		fadeReverse : function(element) {
			var firstItem = $(".scroll-message-item:last-child", element), activeItem = $(".scroll-message-item.active", element);
			activeItem.removeClass("active").removeAttr("style");
			$(".scroll-message-content",element).prepend(firstItem);
			firstItem.fadeIn().addClass("active"),methods.updateNav(element);
		},
		updateNav : function(element) {
			$("#current_msg", element).html($(".scroll-message-item:visible").attr("data-sm-id"));
			$("#total_msg", element).html($(".scroll-message-item").size());
		}
	};
	$.fn.scrollmessage = function(options, ele) {
		return this.each(function() {
			methods.init($(this), options || {});
		});
	};
	$.fn.scrollmessage.setting = {
		delay : 5000

	};
})(jQuery);
