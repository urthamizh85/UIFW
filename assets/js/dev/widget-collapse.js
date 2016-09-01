///memberportal plugin
/*
//widgetCollapse - Plugin
// localstorage id clear $(".btn-minimize").widgetCollapse({clear : 'storedname'});
// localstorage clear all $(".btn-minimize").widgetCollapse({clearAll : true});

* intializing
$("btnname").widgetCollapse({
storageid : "btn",
parent : ".well-white",
child : ".well-content"
});
*
*
*///
!
(function($) {
	var methods = {
		init : function(ele) {
			var self = $(ele);
			self.option = $.extend({}, $.fn.widgetCollapse.defaults, ele.opt);
			if ($(self.option.parent).size() && $(self.option.child).size()) {
				self._ele = self;
				self._ele.clicked = false;
				this.storage(self);
			}
			this.click(self);
			this.storageclear(self);

		},
		storage : function(ele) {
			var self = ele;
			var _ele = $(self.option.child, $(self._ele).closest($(self.option.parent)));
			if (localStorage) {
				if (self._ele.clicked) {
					(_ele.is(":visible")) ? $("i", $(self._ele)).removeClass("fa-chevron-circle-down").addClass("fa-chevron-circle-up") : $("i", $(self._ele)).removeClass("fa-chevron-circle-up").addClass("fa-chevron-circle-down");
					(_ele.is(":visible")) ? _ele.slideUp() : _ele.slideDown();
					var val = (_ele.is(":visible")) ? "open" : "close";
					localStorage.setItem(self.attr("id"), self.attr("id") + "/" + val);
					localStorage.name = self.option.storagename;
					if (self.option.callback) {
						self.option.callback(self);
					}
				} else {
					var splitval = String(localStorage.getItem(self.attr("id"))).split("/");
					if (self.attr("id") == splitval[0]) {
						if (String(splitval[1]) == "close") {
							_ele.hide();
							$("i", self._ele).addClass("fa-chevron-circle-up").removeClass("fa-chevron-circle-down");
						} else {
							_ele.show();
							$("i", self._ele).addClass("fa-chevron-circle-down").removeClass("fa-chevron-circle-up");
						}
					}
				}
			}
		},
		click : function(ele) {
			var self = ele;
			self.unbind().on("click", function() {
				var _ele = $(this);
				_ele.clicked = true;
				self._ele = _ele;
				methods.storage(self);
			});
		},
		storageclear : function(ele) {
			var self = ele;
			if (self.option.clear != undefined) {
				localStorage[self.option.clear];
			}
			if (self.option.clearAll) {
				localStorage.clear();
			}
		}
	};
	$.fn.widgetCollapse = function(options) {
		return this.each(function() {
			var self = $(this);
			self.opt = options;
			methods.init(self);
		});
	};

	$.fn.widgetCollapse.detaults = {};
})(jQuery);
/*
 * widgetCollapse plungin -----
 */