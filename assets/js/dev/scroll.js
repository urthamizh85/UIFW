/*//scroll*/
(function($) {

	var methods = {
		init : function(o, options) {
			var self = $(o);
			self.el = self;
			self.opt = $.extend({}, $.fn.pureScroll.setting, options);
			
			var initiate = function() {
				if (methods.asign(self.el, options.trigger)) {
					methods.scrolling(self.el);
				} else {
					self.css("height", "auto");
					self.content.css("height", "auto");
					self.track.hide();
				}
			};
			initiate();
			$(window).on("resize", function() {
				initiate();
			});
		},
		asign : function(el, trigger) {
			var self = el;
			if ($(".track", self).size()) {
				$(".track", self).remove();
			}
			self.append(self.opt.tracks);
			self.content = $(".scroll-content", self);
			if (!trigger) {
				self.content.height(self.opt.contentHeight);
				self.height(self.opt.contentHeight);
			}
			self.track = $(".track", self);
			self.bar = $(".track .bar", self);
			self.track.height(self.height() - 5);
			//css applying
			self.content.h = self.content.innerHeight();
			self.track.h = self.track.height();

			self.sheight = self.content.prop("scrollHeight");
			self.barheight = Math.abs(self.content.h) / (self.sheight / self.content.h), self.barheight = (self.barheight < 30) ? 30 : self.barheight;
			self.clicked = false;
			self.inity = "";
			//assgning bar height
			self.bar.height(self.barheight);
			self.bar.h = self.bar.height();
			self.maxmove = self.track.h - self.bar.h;
			var space = 20;
			if (self.sheight > self.content.h + space) {
				self.content.width(self.width() + space);
				methods.customize(self);
				return true;
			} else {
				return false;
			}
		},
		scrolling : function(el) {
			var self = el;
			self.content.scrollTop(0);
			self.content.on("scroll", function() {
				if (self.track.is(":visible")) {
					if (!self.clicked) {
						var spos = self.content.scrollTop();
						var delta = spos * (self.content.h / self.sheight) - (self.track.h / self.bar.h);
						self.bar.stop().animate({
							top : Math.round(delta) + "px"
						}, 10);
					}
				}
			});
			methods.drag(self);
		},
		drag : function(el) {
			var self = el;

			self.bar.on("mousedown", function(e) {
				self.clicked = true;
				self.inity = self.bar.position().top - e.pageY;
				self.cnt = 0;
				$("body").addClass("selection-none");
				// e.preventDefault();
				// e.stopPropagation();
			}).on("mouseup", function() {
				self.clicked = false;
			});

			$(document).on("mouseup", function(e) {
				self.clicked = false;
				$("body").removeClass("select-none");
				if (self.bar.position().top > self.maxmove) {
					self.bar.animate({
						top : self.maxmove + "px"
					}, "fast");
				}
				if (self.bar.position().top < 0) {
					self.bar.animate({
						top : "0px"
					}, "fast");
				}
			}).on("mousemove", function(e) {
				if (self.clicked) {
					$(document).on("selectstart", false);
					var spos = self.inity + e.pageY;
					self.bar.css({
						top : spos + "px"
					});
					self.content.scrollTop((self.bar.position().top) * (self.sheight / self.maxmove));
				} else {
					$(document).on("selectstart", true);
				}
			});
		},
		customize : function(el) {
			var self = el;
			self.content.css({
				"overflow-y" : "scroll",
				"padding-right" : "20px"
			});
			if (self.opt.trackcss != undefined) {
				self.track.css(self.opt.trackcss);
			}
		}
	};

	$.fn.pureScroll = function(options) {

		return this.each(function() {
			var $this = $(this);
			methods.init($this, options);
			if (navigator.userAgent.match(/android|ipad/ig) == null) {

			} else {
				// $this.css({
				// "height" : $.fn.pureScroll.setting.contentHeight,
				// "overflow-y" : "scroll"
				// });
			}
		});

	};
	$.fn.pureScroll.setting = {
		tracks : '<div class="track"><div class="bar"></div></div>',
		contentHeight : "200px",
		trigger : false
	};

})(jQuery);

/*//scroll*/

