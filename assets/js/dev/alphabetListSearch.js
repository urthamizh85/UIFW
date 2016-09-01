(function($) {
	var methods = {
		init : function(element, options) {
			var self = $(element);
			self.options = $.extend({}, $.fn.alphabetListSearch.setting, options);
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
			var elem = $(obj.ele), elemVal = elem.val().toUpperCase(), targetId = elem.attr('data-search-target'), _alphaBtn, filterContId;
			if (elemVal != '') {
				var alphabet = elemVal.substr(0, 1);
				_alphaBtn = $(targetId + ' .alphabet-list [data-alpahbet=' + alphabet + ']');
				filterContId = _alphaBtn.attr('data-browse-tab-link');
				_alphaBtn.trigger('click');
				var list = $(filterContId + ' ul > li');
				$(list).each(function() {
					var _this = $(this), $a = $(this).children('a'), $text = $a.text().toUpperCase();
					($text.indexOf(elemVal) == 0) ? _this.show() : _this.hide();
				});
			} else {
				_alphaBtn = $(targetId + ' .alphabet-list [data-alpahbet="A"]');
				filterContId = _alphaBtn.attr('data-browse-tab-link');
				_alphaBtn.trigger('click');
				$(filterContId + ' ul > li').show();
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
	$.fn.alphabetListSearch = function(options, ele) {
		return this.each(function() {
			methods.init($(this), options || {});
		});
	};
	$.fn.alphabetListSearch.setting = {
		after : function(obj) {

		}
	};
})(jQuery);
