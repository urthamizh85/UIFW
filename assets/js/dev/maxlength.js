(function($) {
	var methods = {
		init : function(element, options) {
			var self = $(element);
			self.options = $.extend({}, $.fn.maxlength.setting, options);
			var template = $('<span class="bootstrap-maxlength ' + self.options.warningClass + ' label"></span>');
			self.on("focus", function(e) {
				var obj = {
					ele : $(this),
					template : template,
					options : self.options
				};
				methods.showLabel(obj).labelPos(obj);
			}).on("keyup", function(e) {
				var obj = {
					ele : $(this),
					template : template,
					options : self.options
				};
				methods.showLabel(obj).labelPos(obj);
			}).on("blur", function(e) {
				var target = $(this);
				methods.hideLabel(target);
			});
			this.self = self;
		},
		checkLength : function(ele) {
			var elem = $(ele), length = elem.val().length;
			return length;
		},
		showLabel : function(obj) {
			var target = $(obj.ele), target_maxlength = target.attr('maxlength'), length = methods.checkLength(target), threshold = obj.options.threshold, tagname = target.prop('tagName');
			if (target.val() != "") {
				var text = obj.options.preText + ' ' + length + ' ' + obj.options.separator + ' ' + target_maxlength + ' ' + obj.options.postText;
				if (threshold > 0) {
					if (length >= threshold) {
						$('body').append(obj.template.text(text));
					}else {
						methods.hideLabel(target);
					}
				}else {
					$('body').append(obj.template.text(text));
				}
				(length >= target_maxlength) ? obj.template.addClass(obj.options.limitReachedClass) : obj.template.removeClass(obj.options.limitReachedClass);
				if(tagname == 'TEXTAREA') {
					if(length > target_maxlength) {
						target.val(target.val().substr(0, target_maxlength));
					}
				}
			} else {
				methods.hideLabel(target);
			}
			return this;
		},
		hideLabel : function(ele) {
			$('.bootstrap-maxlength').remove();
			return this;
		},
		labelPos : function(obj) {
			var elem = $(obj.ele), height = elem.height(), lblHeight = $('.bootstrap-maxlength').height();
			$('.bootstrap-maxlength').offset({
				left : elem.offset().left,
				top : elem.offset().top + height + lblHeight
			}).css({
				'z-index':'10'
			});
			return this;
		}
	};
	$.fn.maxlength = function(options, ele) {
		return this.each(function() {
			methods.init($(this), options || {});
		});
	};
	$.fn.maxlength.setting = {
		threshold : 1,
		separator : '/',
		warningClass : "label-success",
		limitReachedClass : "label-danger",
		preText : '',
		postText : ''
	};
})(jQuery);
