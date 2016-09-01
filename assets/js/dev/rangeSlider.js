(function($) {
	var methods = {
		init : function(element, options) {
			var self = $(element);
			self.option = $.extend({}, $.fn.rangeSlider.defaults, options);
			var sliderTemplate = $('<div class="range-slider ' + self.option.sliderType + '" data-min="' + self.option.minValue + '" data-max="' + self.option.maxValue + '" data-precision="' + self.option.precision + '" data-range="' + self.option.range + '"><div class="slider-track"><div class="slider-selection"></div><div class="slider-handle handle-min ' + self.option.handleShape + '"></div><div class="tooltip tooltip-min slider-tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner">' + self.option.minValue + '</div></div><div class="slider-handle handle-max ' + self.option.handleShape + '"></div><div class="tooltip tooltip-max slider-tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner">' + self.option.maxValue + '</div></div></div></div><div class="form-inline range-input"><input class="form-control range_minValue" type="text" name="range_minValue" /><input type="text" class="form-control range_maxValue" name="range_maxValue" /></div>');
			self.append(sliderTemplate);
			(!self.option.range) ? self.find('.slider-handle:last,.range_maxValue').hide() : self.find('.slider-handle:last,.range_maxValue').show();
			(!self.option.input) ? self.children('.range-input').hide() : self.children('.range-input').show();
			this.handle(self);
		},
		handle : function(ele) {
			var _ele = $(ele), _handle = _ele.find('.slider-handle'), _rslider = _handle.closest('.range-slider'), _stype = _rslider.hasClass('slider-horizontal'), _handlePos = (_stype) ? _handle.offset().left : _handle.offset().top, _trackWidth = _handle.parent('.slider-track').width(), _rangeState = _rslider.attr('data-range');
			var obj = {
				handle : _handle,
				rslider : _rslider,
				stype : _stype,
				handlePos : _handlePos,
				trackWidth : _trackWidth,
				rangeState : _rangeState
			};
			$(_handle).each(function() {
				var _self = $(this);
				_self.on('mousedown', function(e) {
					_self.addClass('drag');
					_self.next().addClass('in');
					methods.drag(_self, obj);
				});
				_self.on('mouseup', function(e) {
					_self.removeClass('drag');
					_self.next().removeClass('in');
				});
				methods.trackClick(obj);
			});
			return this;
		},
		drag : function(handle, obj) {
			var _handle = $(handle);
			$(document).off('mousemove', '.drag').on('mousemove', '.drag', function(event) {
				var _this = $(this), _posX, _posY;
				var _selection = _this.siblings('.slider-selection');
				if (obj.stype) {
					var thisX = event.pageX - $(this).width() / 2;
					if (thisX < obj.handlePos) {
						thisX = obj.handlePos;
					} else if (thisX > (obj.trackWidth + obj.handlePos)) {
						thisX = obj.trackWidth + obj.handlePos;
					}
					_this.offset({
						left : thisX
					});
					_this.next().offset({
						left : thisX - ($(this).width() / 2)
					});
					if (obj.rangeState == "true") {
						var hPosMin, hPosMax, _selWidth;
						if (_this.hasClass('handle-min')) {
							hPosMin = _this.position().left, hPosMax = _this.siblings('.handle-max').position().left;
						} else {
							hPosMin = _this.siblings('.handle-min').position().left, hPosMax = _this.position().left;
						}
						_selWidth = hPosMax - hPosMin;
						_selection.css({
							left : hPosMin
						}).width(_selWidth);
					} else {
						_posX = $(this).position().left;
						_selection.width(_posX);
					}
				} else {
					var thisY = event.pageY - $(this).height() / 2;
					_posY = $(this).position().top;
					$(this).offset({
						top : thisY
					});
					_selection.height(_posY);
				}
				methods.percentageCalc(obj);
			});
			return this;
		},
		trackClick : function(obj) {
			var _handle = $(obj.handle), _track = _handle.parent('.slider-track');
			$(_track).on('click', function(event) {
				var _trackWidth = $(this).width();
				if ($(event.target).hasClass('slider-handle')) {
					return;
				} else {
					var parentOffset = $(_track).parent().offset();
					var relX = event.pageX - parentOffset.left;
					if (relX > _trackWidth) {
						relX = _trackWidth;
					} else if (relX < 0) {
						relX = 0;
					}
					$('.slider-handle:visible', _track).animate({
						left : relX
					}, 300, function() {
						handle = $(this);
						handle.next().animate({
							left : relX - handle.width()
						}, 300);
					});
					$('.slider-selection', _track).animate({
						width : relX
					}, 300);
				}
				setTimeout(function() {
					methods.percentageCalc(obj);
				}, 400);
			});
			return this;
		},
		percentageCalc : function(obj) {
			var _handle = $(obj.handle), _track = _handle.parent('.slider-track'), _trackWidth = _track.width();
			var _selectWidth = $('.slider-selection', _track).width();
			obj.percentage = Math.round(_selectWidth / _trackWidth * 100);
			methods.valueCalc(obj);
			return this;
		},
		valueCalc : function(obj) {
			var _handle = $(obj.handle), _rslider = _handle.closest('.range-slider'), minVal = _rslider.attr('data-min'), maxVal = _rslider.attr('data-max'), precision = _rslider.attr('data-precision'), range_input = _rslider.siblings('.range-input');
			if (obj.rangeState == "true") {
				(obj.rslider)
				console.log(obj.percentage);
			} else {
				var currentValue = ((obj.percentage / 100) * maxVal).toFixed(precision);
				_handle.attr('title', currentValue).next().children('.tooltip-inner').text(currentValue);
				(_handle.hasClass('handle-min')) ? $('.range_minValue', range_input).val(currentValue) : $('.range_maxValue', range_input).val(currentValue);
			}
			return currentValue;
		},
		getCurrentValue : function(ele) {
			var self = $(ele);
		}
	};
	$.fn.rangeSlider = function(options) {
		return this.each(function() {
			methods.init($(this), options || {});
		});
	};
	$.fn.rangeSlider.defaults = {
		sliderType : 'slider-horizontal',
		handleShape : '',
		range : false,
		input : true,
		minValue : 0,
		maxValue : 100,
		precision : 2
	};
})(jQuery);
/*
 * wizard plungin -----
 */