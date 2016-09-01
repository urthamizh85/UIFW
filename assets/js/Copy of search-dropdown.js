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
			$(o.button).on('click', function(event) {
				e.ajaxCall(s,o);
				$('li',o.ul).removeClass('pull-hide');
				e.dropdownPosition(o.button,o.dd);
			});
			
			$(o.stb).on('keyup', function(event) {
				var self = $(this), _this_ddMenu = $('.search-dd-menu', o.dd);
				e.ajaxCall(s,o).filterList(self);
				if (event.which == '40') {
					var _focus_ele = $('.search-dd-menu li:not(".pull-hide"):first .list-ref', o.dd);
					$(o.stb).blur(); 
					$(_focus_ele).focus();
					_focus_ele.addClass('highlighted');
				}
			}).on('focus', function(event) {
				var self = $(this);
				$('.highlighted').removeClass('highlighted');
			}).on('keydown', function(event) {
				var self = $(this), _self_val = self.val();
				$('.highlighted').removeClass('highlighted');
				if(_self_val != ""){
					$(o.dd).addClass('open');
				}
			});
			$(o.dd).on('keydown', function(e) {
				if (e.which == '40') {
					e.preventDefault();
					var _focus_ele = $(".list-ref.highlighted").closest('li').next(':not(".pull-hide")').children('.list-ref');					
					if(_focus_ele.length != 0) {
						_focus_ele.focus();
						$('.highlighted').removeClass('highlighted');
						_focus_ele.addClass('highlighted');
					}
				}
				if (e.which == '38') {
					e.preventDefault();
					var _focus_ele = $(".list-ref.highlighted").closest('li').prev('li:not(".pull-hide")').children('.list-ref');
					if(_focus_ele.length == 0) {
						$('[data-dd-input="'+o.stbid+'"]').focus();
					}else{
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
							if(!s.options.multiSelect){
								$(".search-dd-menu", o.dd).append('<li tabindex="0"><a class="list-ref" href="#" data-dd-key="' + key + '" data-dd-value="' + value + '">' + value + '</a></li>');
							}else {
								$(".search-dd-menu", o.dd).append('<li tabindex="0"><label class="list-ref" data-dd-key="' + key + '" data-dd-value="' + value + '"><input class="dropdown-checkbox" type="checkbox" value="' + value + '"/> '+value+'</label></li>');
							}
						}
					});
					
					$('[data-dd-value]').unbind().on('click', function(event) {
						var _this = $(this), self = _this.children('input'), _input_status;
						if(self.length != 0){
							/* _input_status = self.prop('checked');
							if(!_input_status) {
								self.prop('checked',true);
								
							}else{
								self.prop('checked',false);
							} */
						} else {
							self = _this;
						}
						loc_pdd = self.closest('.dropdown'), loc_ddid = loc_pdd.attr('id'), loc_ddid_arr = loc_ddid.split('_dd')[0];
						e.setValue(_this,loc_ddid_arr);
						e.checkedValue(o.ul,loc_ddid_arr);
						e.uncheckedValue(o.ul,loc_ddid_arr);
						$('#'+loc_ddid).removeClass('open');
					});
					
					$('.dropdown-checkbox').unbind().on('keydown', function(event) {
						if (event.which == '13') {
							var _this = $(this), self = _this.parent('label'), _input_status;
							_input_status = _this.prop('checked');
							if(!_input_status) {
								_this.prop('checked',true);
								
							}else{
								_this.prop('checked',false);
							} 
							loc_pdd = self.closest('.dropdown'), loc_ddid = loc_pdd.attr('id'), loc_ddid_arr = loc_ddid.split('_dd')[0];
							e.setValue(self,loc_ddid_arr);
							e.checkedValue(o.ul,loc_ddid_arr);
							e.uncheckedValue(o.ul,loc_ddid_arr);
							console.log($('#'+loc_ddid));
							$('#'+loc_ddid).removeClass('open');
						}
					});
				}
			});
			return this;
		},
		createDropdown : function(s) {
			var textId = s.attr('id');
			var template = $('<div class="dropdown" id="' + s.attr('id') + '_dd"><div class="input-group"><input type="text" placeholder="' + s.options.placeholder + '" class="form-control" data-dd-input="' + s.attr('id') + '"><span class="input-group-btn"><button type="button" data-toggle="dropdown" class="btn btn-default search-button"><i class="fa fa-caret-down"></i></button></span></div><ul class="chosen-choices pull-hide"><li id="'+textId+'_textId"></li></ul><ul class="dropdown-menu search-dd-menu" aria-labelledby="dLabel"></ul></div>');
			template.insertAfter(s);
			$('.dropdown-menu', "#" + s.attr('id') + '_dd').width('98%').css({
				'max-height' : s.options.maxHeight,
				'overflow' : 'auto'
			});
			s.hide();
			return this;
		},
		setValue : function(ele,loc_ddid_arr) {
			var loc_val = ele.attr('data-dd-value');
			$('#' + loc_ddid_arr).add($('[data-dd-input="' + loc_ddid_arr + '"]')).val(loc_val);
		},
		checkedValue : function(ele,loc_ddid_arr) {
			var checkedList = [], keyList = [], j =0;
			$(ele).each(function(index) {
				$('.list-ref', this).each(function(index) {
					var _this_input = $('input',this), checked = _this_input.prop('checked'), _this_val = _this_input.val(), _this_key = $(this).attr('data-dd-key');
					if(checked) {
						checkedList.push(_this_val);
						keyList.push(_this_key);
						j=++j;
					}
				});
				if(j <= 0) {
					$('#'+loc_ddid_arr+'_textId').parent('.chosen-choices').hide();
				}else {
					$('#'+loc_ddid_arr+'_textId').parent('.chosen-choices').show();
				}
			});
			$('#'+loc_ddid_arr+'_textId').siblings().remove();
			for(var i=0;i<checkedList.length;i++) {
				var selectedList = '<li class="search-choice">'+
						'<span>'+checkedList[i]+'</span>'+
						'<a class="search-choice-close" data-key-index="'+keyList[i]+'"></a>'+
						'</li>';
						$('#'+loc_ddid_arr+'_textId').parent('.chosen-choices').show();
				$(selectedList).insertBefore($('#'+loc_ddid_arr+'_textId'));
			}
		},
		uncheckedValue : function(ele,loc_ddid_arr) {
			$('.search-choice-close').on('click', function(event) {
				var _this = $(this), _this_parent = _this.parent('li.search-choice'), _key_index = _this.attr('data-key-index'), _uncheck_list = $('[data-dd-key="'+_key_index+'"]');
				$('input',_uncheck_list).prop('checked', false);
				_this_parent.remove();
				$(ele).each(function(index) {
					var i = 0;
					$('.dropdown-checkbox', this).each(function(index) {
						var checked = $(this).prop('checked');
						if(checked) {
							i = ++i;
						}
					});
					if(i <= 0) {
						$('#'+loc_ddid_arr+'_textId').parent('.chosen-choices').hide();
					}else{
						$('#'+loc_ddid_arr+'_textId').parent('.chosen-choices').show();
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
			var win_height = $(window).height(), dd_height = $(dd_list).height(), dd_offset = $(dd_list).offset().top, dd_position = dd_height+dd_offset,
			ddMenu = $(".search-dd-menu", dd_menu);
			if(dd_position > win_height) {
				$(ddMenu).css({
					'top': -212+'px'
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
