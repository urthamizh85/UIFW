/*//dragDrop*/
/*
 $("[data-dragdrop='btn']").dragDrop();
 */
(function() {
	var methods = {
		placement : {
			ele : "none"
		},
		dragInit : function(element, options) {
			var self = $(element);
			self.options = $.extend({}, $.fn.dragDrop.setting, options);
			self._grid = self.parents('[data-dragdrop="container"]');
			self._col = self.parents('[data-dragdrop="col"]');
			self._cell = $("[data-dragdrop='row']", self._grid);
			self._btn = $("[data-dragdrop='btn']", self._cell);
			self._dropPlaceholderElement = $(".place-it", self._grid);
			this.self = self;
			this.dropPlaceholderCreate();
			this.dropPlaceholder();
			self.unbind().on("mousedown", this.dragMouseDown);
			$(document).on("mousemove", this.dragMouseMove);
			$(document).on("mouseup", this.dragMouseUp);
		},
		dragMouseDown : function(e) {
			var self = $(this), _parent = self.parents("[data-dragdrop='row']");
			if (e.which == "1") {
				$("body").addClass("selectDisable overflow-x-none");
				_parent.css({
					"box-shadow" : "0 0 5px #ddd"
				});
				_parent.attr("clicked", "true");
				$(".place-it", self._grid).show();
			}
		},
		dragMouseMove : function(e) {
			var self = $("[data-dragdrop='container'] [data-dragdrop='row'][clicked='true']");
			var left = e.pageX, top = e.pageY, width = self.width();
			if (self.css("position") != "absolute") {
				self.css({
					"position" : "fixed",
					"z-index" : "1090",
					"width" : self.outerWidth()
				});
			}
			if (self.attr("clicked") == "true") {
				$(".place-it").show();
				left = left - (self.width() / 2), top = top + 10;
				self.css({
					"left" : left,
					"top" : top + "px"
				});
				$(document).on("selectstart", false);
			} else {
				$(document).on("selectstart", true);
			}
		},
		dragMouseUp : function(e) {
			var self = $("[data-dragdrop='container'] [data-dragdrop='row'][clicked='true']"), selfpos = self.offset();
			e.preventDefault();
			if (self.size()) {
				if (methods.placement.ele != "none") {
					placementpos = methods.placement.ele.offset();
					var wrap = methods.dropElementPosition(methods.placement.position, e.pageY, methods.placement.ele);
					methods.placement.ele[wrap.placement](self);
				}
				methods.dropPlaceholderCreate();
				self.removeAttr("style clicked");
				methods.placement.ele = "none";
				$("body").addClass("selectDisable overflow-x-none");
				if (methods.self.options.after) {
					console.log(methods.self.options.after);
					methods.self.options.after();
				}
			}
		},
		dropPosition : function(element) {
			var position = {};
			$(element).each(function(i, ival) {
				var self = $(this);
				self.attr("dragid", (i + 1));
				var obj = {};
				obj.top = self.offset().top;
				obj.maxtop = obj.top + (self.height() / 2);
				obj.dragid = self.attr("dragid");
				position["drag-" + (i + 1)] = obj;
			});
			this.placement.position = position;
		},
		dropPlaceholderCreate : function() {
			var self = this.self;
			$(".place-it", self._grid).remove();
			self._cell.each(function() {
				var target = $(this);
				if (!target.next(".place-it").size()) {
					target.after(self.options.dropPlaceholder);
				}
			});
			$("[data-dragdrop='col']", self._grid).each(function() {
				var target = $(this), child = target.children(self._row);
				if (!child.size()) {
					console.log("here");
					target.append(self.options.dropPlaceholder);
				}
			});
			if (self.options.dropPlaceholderClassName != "") {
				$(".place-it", self._grid).addClass(self.options.dropPlaceholderClassName);
			} else {
				$(".place-it", self._grid).css(self.options.dropPlaceholderCss);
			}
			$(".place-it", self._grid).html(self.options.dropPlaceholderText).hide();
			this.dropPosition(".place-it");
			this.dropPlaceholder();
		},
		dropPlaceholder : function() {
			var _this = this;
			$(document).off("mouseover mouseout", ".place-it").on("mouseover", ".place-it", function(e) {
				var self = $(this);
				_this.placement.ele = self, self.css("opacity", ".7");
			}).on("mouseout", ".place-it", function() {
				var self = $(this);
				self.css("opacity", "1");
			});
		},
		dropElementPosition : function(obj, checkpos, matchpos) {
			if (obj) {
				var ele1 = obj["drag-" + matchpos.attr("dragid")];
				if (ele1.maxtop > checkpos) {
					return {
						placement : "before"
					};
				} else {
					return {
						placement : "after"
					};
				}
			}
		}
	};
	$.fn.dragDrop = function(options) {
		this.each(function() {
			methods.dragInit($(this), options || {});
		});
		return this;
	};
	$.fn.dragDrop.setting = {
		dropPlaceholder : "<div class='place-it'></div>",
		dropPlaceholderCss : {
			"background" : "#F7F7F7",
			"border" : "1px dashed #b3b3b3",
			"margin" : "5px 2px",
			"padding" : "10px"
		},
		dropPlaceholderClassName : "",
		dropPlaceholderText : "Drop here!",
		after : false
		
	};
})(jQuery);

