(function($) {
	var methods = {
		init : function(element, options) {
			var self = $(element);
			self.options = $.extend({}, $.fn.checkBox.setting, options);
			($("input[type='checkbox'],input[type='radio']", self).prop("checked")) ? methods.checked(self) : methods.unchecked(self);

			self.on("click", function(e) {
				var target = $(this);
				methods.check(target);
				if (self.options.after) {
					self.options.after(target);
				}
			});
			this.self = self;
		},
		check : function(element) {
			if ($("input[type='radio']", element).size() && !$("input[type='radio']", element).prop("checked")) {
				($("input[type='checkbox'],input[type='radio']", element).prop("checked")) ? methods.unchecked(element) : methods.checked(element);
			}
			if ($("input[type='checkbox']", element).size()) {
				($("input[type='checkbox'],input[type='radio']", element).prop("checked")) ? methods.unchecked(element) : methods.checked(element);
			}

		},
		checked : function(element) {
			var checkbox = $("input[type='checkbox'],input[type='radio']", element);
			if (checkbox.attr("type") != "checkbox") {
				$("[name='" + checkbox.attr("name") + "']").each(function() {
					var self = $(this);
					self.prop("checked", false);
					$("i", self.siblings(".checkbox-style,.radio-style")).hide();
				});
			}
			checkbox.prop("checked", true);
			$(".checkbox-style i,.radio-style i", element).show();
		},
		unchecked : function(element) {
			var checkbox = $("input[type='checkbox'],input[type='radio']", element);
			if (checkbox.attr("type") != "checkbox") {
				$("[name='" + checkbox.attr("name") + "']").each(function() {
					var self = $(this);
					if (self.prop("checked")) {
						self.prop("checked", true);
						$("i", self.siblings(".checkbox-style,.radio-style")).show();
					} else {
						self.prop("checked", false);
						$("i", self.siblings(".checkbox-style,.radio-style")).hide();
					}
				});
			}
			$(".checkbox-style i,.radio-style i", element).hide();
			checkbox.prop("checked", false);
		},
		clear : function(element) {
			var checkbox = $("input[type='checkbox'],input[type='radio']", element);
			$("[name='" + checkbox.attr("name") + "']").each(function() {
				var self = $(this);
				self.prop("checked", false);
				$("i", self.siblings(".checkbox-style,.radio-style")).hide();
			});
			$(".checkbox-style i,.radio-style i", element).hide();
			checkbox.prop("checked", false);
		},
		update : function(element) {
			($("input[type='checkbox'],input[type='radio']", element).prop("checked")) ? methods.checked(element) : methods.unchecked(element);
		}
	};
	$.fn.checkBox = function(options, ele) {
		if (options == "clear") {
			return this.each(function() {
				methods.clear($(this));
			});
		} else if (options == "check") {
			return this.each(function() {
				methods.check($(this));
			});
		} else if (options == "update") {
			return this.each(function() {
				methods.update($(this));
			});
		} else {
			return this.each(function() {
				methods.init($(this), options || {});
			});
		}
	};
	$.fn.checkBox.setting = {

	};
})(jQuery);
