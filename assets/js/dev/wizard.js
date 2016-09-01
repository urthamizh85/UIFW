(function($) {
	var methods = {
		init : function(ele) {
			var self = $(ele);
			self.option = $.extend({}, $.fn.wizard.defaults, ele.opt);
			var wizard_step = self.find('[data-wizard-step-count]').children('ul').find('li'), wizard_content_id = self.attr('data-wizard-content-id'), wizard_box = self.find('[data-wizard-step]'), wizard_visible_index = wizard_box.filter(':visible').index();
			if (self.option.validate) {
				var wizard_form = self.find('form');
				$(wizard_form).formValidate();
			}
			var obj = {
				ele : ele,
				wizardStep : wizard_step,
				wizardContentId : wizard_content_id,
				wizardBox : wizard_box,
				visibleIndex : wizard_visible_index,
				wizardSize : wizard_box.size(),
				wizardForm : wizard_form
			};
			this.navStatus(obj).click(obj);
		},
		click : function(obj) {
			var self = obj.ele, wizard_nav = $('[data-wizard-nav]:not([data-wizard-nav*=finish])').not(':disabled');
			wizard_nav.unbind().on("click", function() {
				var _ele = $(this), ele_type = _ele.attr('data-wizard-nav');
				if (obj.wizardForm) {
					var form = $(obj.wizardForm);
					if (form.formValidate('validate')) {
						(ele_type == "prev") ? methods.prev(obj) : methods.next(obj);
					}
				} else {
					(ele_type == "prev") ? methods.prev(obj) : methods.next(obj);
				}
			});
			return this;
		},
		prev : function(obj) {
			var self = $(obj.ele);
			$(obj.wizardBox).eq(obj.visibleIndex).hide();
			obj.visibleIndex -= 1;
			$(obj.wizardBox).eq(obj.visibleIndex).fadeIn('slow');
			methods.navStatus(obj).stepCount(obj).updateTitle(obj);
		},
		next : function(obj) {
			var self = $(obj.ele);
			$(obj.wizardBox).eq(obj.visibleIndex).hide();
			obj.visibleIndex += 1;
			$(obj.wizardBox).eq(obj.visibleIndex).fadeIn('slow');
			methods.navStatus(obj).stepCount(obj).updateTitle(obj);
		},
		navStatus : function(obj) {
			(obj.visibleIndex <= 0) ? $(obj.ele).find('[data-wizard-nav="prev"]').addClass('disabled') : $(obj.ele).find('[data-wizard-nav="prev"]').removeClass('disabled');
			if(obj.visibleIndex == obj.wizardSize - 1) {
				$(obj.ele).find('[data-wizard-nav="next"]').hide();
				$(obj.ele).find('[data-wizard-nav="finish"]').show();
			}else {
				$(obj.ele).find('[data-wizard-nav="next"]').show();
				$(obj.ele).find('[data-wizard-nav="finish"]').hide();
			}
			return this;
		},
		stepCount : function(obj) {
			var self = $(obj.wizardStep), prevIndex = obj.visibleIndex - 1;
			self.filter('.active').removeClass('active');
			if(prevIndex >=0 && !self.eq(prevIndex).hasClass('past')) {
				self.eq(prevIndex).addClass('past');
			}
			self.eq(obj.visibleIndex).addClass('active').removeClass('past');
			return this;
		},
		updateTitle : function(obj) {
			var self = $(obj.ele);
			self.find('.wizard-title').text('Step ' + (obj.visibleIndex + 1));
			return this;
		}
	};
	$.fn.wizard = function(options) {
		return this.each(function() {
			var self = $(this);
			self.opt = options;
			methods.init(self);
		});
	};
	$.fn.wizard.detaults = {};
})(jQuery);
/*
 * wizard plungin -----
 */