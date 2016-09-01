(function($) {

	var methods = {
		init : function(o, options) {
			var self = $(o);
			self.el = self;
			self.opt = $.extend({}, $.fn.formValidate.setting, options);
			this.self = self;
			$(".confirmbox-content", self).removeAttr("style");
			$(".confirmbox-message", self).html(self.opt.message || "Messages");

			$(document).off("click", "#confirm_yes").on("click", "#confirm_yes", function() {
				methods.yes(self);
			});
			$(document).off("click", "#confirm_no").on("click", "#confirm_no", function() {
				methods.no(self);
			});
		},
		show : function(ele) {
			var self = ele;
			self.fadeIn();
			this.update(self);
		},
		hide : function(ele) {
			var self = ele;
			self.fadeOut();
		},
		update : function(ele) {
			var self = ele, self_content = $(".confirmbox-content", self), self_h = self_content.height(), self_window = $(window).height();
			var pos = Math.round((self_window - self_h) / 2);
			pos = (pos > 0) ? pos : 0;
			self_content.animate({
				"top" : pos + "px"
			}, 600);
		},
		yes : function(self) {
			methods.hide(self.el);
			if (self.opt.yes) {
				self.opt.yes(self);
			}
		},
		no : function(self) {
			methods.hide(self.el);
			if (self.opt.no) {
				self.opt.no(self);
			}
		}
	};

	$.fn.confirmBox = function(options) {
		if (methods[options]) {
			console.log(this);
			methods[options]($(this));
		} else {
			return this.each(function() {
				var $this = $(this);
				methods.init($this, options);
			});
		}
	};

})(jQuery);

