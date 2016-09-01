! function(t) {
	var e = {
		init : function(a, n) {
			var s = t(a), o = o || {};
			var loc_list = loc_list || "";
			s.options = t.extend({}, t.fn.searchDropdown.setting, n);
			s.listHtml = loc_list;
			e.createDropdown(s);
			o.stbid = s.attr('id'), o.dd = $('#' + o.stbid + '_dd'), o.ddl = $('[data-dd-value]', o.dd);
			o.stb = $('[data-dd-input="' + o.stbid + '"]');
			o.stbParent = $(o.stb).parent();
			o.span = $(o.stb).siblings('span');
			o.button = $(o.span).children('button');
			o.ul = $(o.stbParent).siblings('ul');
			//$(o.dd,o.button).on('click', function(event) {
			$(o.button).on('click', function(event) {
				var ele = o.stb.closest('.dropdown'), _status = ele.hasClass('open');
				e.ajaxCall(s, o);
				$('.dropdown').removeClass('open');
				if (_status) {
					ele.removeClass('open');
				} else {
					ele.addClass('open');
				}
				$('li', o.ul).removeClass('pull-hide');
				e.dropdownPosition(o.button, o.dd);
			}).on('keydown', function(e) {
				var _self = $(this), loc_dd = _self.closest('.dropdown'), loc_ddm = $('.dropdown-menu', loc_dd);
				if (e.which == '40') {
					e.preventDefault();
					$('li:not(".pull-hide"):first .list-ref', loc_ddm).focus().addClass('highlighted');
				}				
			});
			$('.search-button').on('keyup', function(event) {
				var self = $(this), _this_ddMenu = $('.search-dd-menu', o.dd);
				e.ajaxCall(s,o).filterList(self);
				if (event.keyCode == '40') {
					var _focus_ele = $('.search-dd-menu li:not(".pull-hide"):first .list-ref', o.dd);
					_focus_ele.focus();
					_focus_ele.addClass('highlighted');
				}
				
			})
			$(o.stb).on('keyup', function(event) {
				var self = $(this), _this_ddMenu = $('.search-dd-menu', o.dd);
				e.ajaxCall(s, o).filterList(self);
				if (event.which == '40') {
					var _focus_ele = $('.search-dd-menu li:not(".pull-hide"):first .list-ref', o.dd);
					//$(o.stb).blur();
					$(_focus_ele).focus();
					_focus_ele.addClass('highlighted');
				}
			}).on('focus', function(event) {
				var self = $(this);
				$('.highlighted').removeClass('highlighted');
			}).on('keydown', function(event) {
				var self = $(this), _self_val = self.val();
				$('.highlighted').removeClass('highlighted');
				if (_self_val != "") {
					$(o.dd).addClass('open');
				}
			});
			
			$(o.dd).on('keydown', function(e) {
				if (e.which == '40') {
					e.preventDefault();
					var _focus_ele = $(".list-ref.highlighted").closest('li').next('li:not(".pull-hide")').children('.list-ref');
					if (_focus_ele.length != 0) {
						console.log(_focus_ele);
						_focus_ele.focus();
						$('.highlighted').removeClass('highlighted');
						_focus_ele.addClass('highlighted');
					}
				}
				if (e.which == '38') {
					e.preventDefault();
					var _focus_ele = $(".list-ref.highlighted").closest('li').prev('li:not(".pull-hide")').children('.list-ref');
					if (_focus_ele.length == 0) {
						$('[data-dd-input="' + o.stbid + '"]').focus();
					} else {
						_focus_ele.focus();
						$('.highlighted').removeClass('highlighted');
						_focus_ele.addClass('highlighted');
					}
				}
			});
			
		},
		ajaxCall : function(s, o) {
			$.ajax({
				type : "GET",
				url : s.options.data,
				dataType : "json",
				async : false,
				success : function(data) {
					var result = data;
					$.each(result, function(key, value) {
						if ($('[data-dd-value="' + value + '"]', o.dd).length <= 0) {
							$(".search-dd-menu", o.dd).append('<li tabindex="0"><a class="list-ref" href="#" data-dd-key="' + key + '" data-dd-value="' + value + '">' + value + '</a></li>');
							if (s.options.multiSelect) {
								$(".search-dd-menu", o.dd).children('li').addClass('multi-select');
								$('.chosen-choices', o.dd).addClass('multi-select');
							}
						}
					});

					$('li', '.dropdown-menu').unbind().on('click', function(event) {
						event.preventDefault();
						var _this = $(this).children('a.list-ref'), _status, multiSelect_status, loc_pdd = _this.closest('.dropdown'), loc_ddid = loc_pdd.attr('id'), loc_ddid_arr = loc_ddid.split('_dd')[0];
						$('.highlighted').removeClass('highlighted');
						_status = _this.parent().hasClass('selected'), multiSelect_status = _this.parent().hasClass('multi-select');
						if (!_status && multiSelect_status) {
							_this.parent().addClass('selected');
						}
						e.setValue(_this, loc_ddid_arr);
						e.checkedValue(o.ul, loc_ddid_arr);
						e.uncheckedValue(o.ul, loc_ddid_arr);
						$('#' + loc_ddid).removeClass('open');
					});

					$('[data-dd-value]').unbind().on('keydown', function(event) {
						if (event.which == '13') {
							var _this = $(this), _status, multiSelect_status, loc_pdd = _this.closest('.dropdown'), loc_ddid = loc_pdd.attr('id'), loc_ddid_arr = loc_ddid.split('_dd')[0];
							_status = _this.parent().hasClass('selected'), multiSelect_status = _this.parent().hasClass('multi-select');
							if (!_status && multiSelect_status) {
								_this.parent().addClass('selected');

							}
							e.setValue(_this, loc_ddid_arr);
							e.checkedValue(o.ul, loc_ddid_arr);
							e.uncheckedValue(o.ul, loc_ddid_arr);
							$('#' + loc_ddid).removeClass('open');
						}
					});
				}
			});
			return this;
		},
		createDropdown : function(s) {
			var textId = s.attr('id');
			var template = $('<div class="dropdown" id="' + s.attr('id') + '_dd"><div class="input-group"><input type="text" placeholder="' + s.options.placeholder + '" class="form-control" data-dd-input="' + s.attr('id') + '"><span class="input-group-btn"><button type="button" title="dropdown" data-toggle="dropdown" class="btn btn-default search-button"><i class="fa fa-caret-down"></i></button></span></div><ul class="chosen-choices pull-hide"><li id="' + textId + '_textId"></li></ul><ul class="dropdown-menu search-dd-menu" aria-labelledby="dLabel"></ul></div>');
			template.insertAfter(s);
			$('.dropdown-menu', "#" + s.attr('id') + '_dd').width('98%').css({
				'max-height' : s.options.maxHeight,
				'overflow' : 'auto'
			});
			s.hide();
			return this;
		},
		setValue : function(ele, loc_ddid_arr) {
			var loc_val = ele.attr('data-dd-value');
			$('#' + loc_ddid_arr).add($('[data-dd-input="' + loc_ddid_arr + '"]')).val(loc_val);
		},
		checkedValue : function(ele, loc_ddid_arr) {
			var checkedList = [], keyList = [], j = 0;
			$(ele).each(function(index) {
				$('.list-ref', this).each(function(index) {
					var _this = $(this), checked = _this.parent().hasClass('selected'), _this_val = _this.attr('data-dd-value'), _this_key = _this.attr('data-dd-key');
					if (checked) {
						checkedList.push(_this_val);
						keyList.push(_this_key);
						j = ++j;
					}
				});
				if (j <= 0) {
					$('#' + loc_ddid_arr + '_textId').parent('.chosen-choices.multi-select').hide();
				} else {
					$('#' + loc_ddid_arr + '_textId').parent('.chosen-choices.multi-select').show();
				}
			});
			$('#' + loc_ddid_arr + '_textId').siblings().remove();
			for (var i = 0; i < checkedList.length; i++) {
				var selectedList = '<li class="search-choice">' + '<span>' + checkedList[i] + '</span>' + '<a class="search-choice-close" data-key-index="' + keyList[i] + '"></a>' + '</li>';
				$('#' + loc_ddid_arr + '_textId').parent('.chosen-choices.multi-select').show();
				$(selectedList).insertBefore($('#' + loc_ddid_arr + '_textId'));
			}
		},
		uncheckedValue : function(ele, loc_ddid_arr) {
			$('.search-choice-close').on('click', function(event) {
				var _this = $(this), _this_parent = _this.parent('li.search-choice'), _key_index = _this.attr('data-key-index'), _uncheck_list = $('[data-dd-key="' + _key_index + '"]');
				//_uncheck_list.removeClass('selected');
				_uncheck_list.parent().removeClass('selected');
				_uncheck_list.removeClass('highlighted');
				_this_parent.remove();
				$(ele).each(function(index) {
					var i = 0;
					$('.list-ref', this).each(function(index) {
						var checked = $(this).parent().hasClass('selected');
						if (checked) {
							i = ++i;
						}
					});
					if (i <= 0) {
						$('#' + loc_ddid_arr + '_textId').parent('.chosen-choices.multi-select').hide();
					} else {
						$('#' + loc_ddid_arr + '_textId').parent('.chosen-choices.multi-select').show();
					}
				});
			});
		},
		filterList : function(ele) {
			var loc_val = ele.val().toUpperCase(), loc_pr = ele.closest('.dropdown'), loc_ddul = $('.search-dd-menu', loc_pr), loc_li = $('[data-dd-value]', loc_ddul), loc_pli = loc_li.parent('li');
			loc_pr.addClass('open');
			if (loc_val != '') {
				$(loc_li).each(function() {
					var _this = $(this), $text = _this.attr('data-dd-value').toUpperCase(), $li = _this.parent('li');
					if ($text.indexOf(loc_val) == 0) {
						$li.removeClass('pull-hide');
					} else {
						$li.addClass('pull-hide');
					}
				});
			} else {
				loc_pli.removeClass('pull-hide');
			}
			(loc_pli.length <= loc_pli.filter('.pull-hide').length) ? ($('.no-match', loc_ddul).length <= 0) ? loc_ddul.append('<li class="no-match"><a class="danger">No matches found</a></li>') : null : $('.no-match', loc_ddul).remove();
			return this;
		},
		dropdownPosition : function(dd_list, dd_menu) {
			var win_height = $(window).height(), dd_height = $(dd_list).height(), dd_offset = $(dd_list).offset().top, dd_position = dd_height + dd_offset, ddMenu = $(".search-dd-menu", dd_menu);
			if (dd_position > win_height) {
				$(ddMenu).css({
					'top' : -212 + 'px'
				});
			}
		}
	};
	t.fn.searchDropdown = function(a) {
		return e.init(t(this), a || {});
		/* this.each(function() {
		 e.init(t(this), a || {});
		 }); */
	}, t.fn.searchDropdown.setting = {
		container : false,
		dropupAuto : true,
		placeholder : 'Search for ..',
		width : "auto",
		data : {},
		multiSelect : false,
		maxHeight : 200
	};
}(jQuery);
