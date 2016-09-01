(function($) {
	var methods = {
		init : function(element, options) {
			var self = $(element);
			self.options = $.extend({}, $.fn.listSearch.setting, options);
			self.on("focus", function(e) {
				var obj = {
					ele : $(this),
					options : self.options
				};
				methods.listFilter(obj).after(obj);
			}).on("keyup", function(e) {
				var obj = {
					ele : $(this),
					options : self.options
				};
				methods.listFilter(obj).after(obj);
			}).on("blur", function(e) {
				var target = $(this);
			});
			this.self = self;
		},
		listFilter : function(obj) {
			var elem = $(obj.ele), elemVal = elem.val().toLowerCase(), targetId = elem.attr('data-search-target'), 
			targetElem = $('li > a', targetId);
			if (elemVal != '') {
				$(targetElem).each(function(index) {
					var self = $(targetElem[index]), parentLi = self.parent('li'), text = self.text().toLowerCase();
					(text.indexOf(elemVal) !== -1) ? $(parentLi).fadeIn() : $(parentLi).fadeOut();
				});
			} else {
				$('li', targetId).fadeIn('fast');
			}
			return this;
		},
		after : function(obj) {
			if ( typeof obj.options.after == 'function') {
				obj.options.after(obj);
			}
			return this;
		}
	};
	$.fn.listSearch = function(options, ele) {
		return this.each(function() {
			methods.init($(this), options || {});
		});
	};
	$.fn.listSearch.setting = {
		after : function(obj) {
			
		}
	};
})(jQuery);
