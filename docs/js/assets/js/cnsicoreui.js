function cnsiCoreUi() {
	var _this = this;
	_this.scrollMove = function(top, duration) {
		$("html,body").stop().animate({
			scrollTop : top
		}, duration || "fast");
	};
	_this.scroll = function(scrollID, options) {
		$(scrollID).pureScroll(options || {});
		_this.apply(arguments);
		return this;
	};
	_this.formreset = function(options) {
		var options = options || {};
		$("input,select,textarea", options.formId || "form").each(function(e) {
			var self = $(this);
			if (self.attr("type") == "radio" || self.attr("type") == "checkbox") {
				self.prop("checked", false);
				_this.checkbox("update");
			} else if ($("option", self).size()) {
				self.val($("option", self).eq(0).val());
			} else {
				self.val("");
			}
		});
		$(".error-msg").remove();
		return this;
	};
	_this.widgetCollapse = function(options) {
		$('[data-ui="widget-collapse"]').each(function() {
			var self = $(this), _parent = self.attr("data-widget-parent"), _child = self.attr("data-widget-child");
			var loc_json = {
				storagename : "widget",
				parent : _parent,
				child : _child
			};
			loc_json = $.extend({}, loc_json, options || {});
			$('[data-ui="widget-collapse"]').widgetCollapse(loc_json);
		});
		_this.apply(arguments);
		return this;
	};
	_this.tagClickEvent = function() {
		$("#alphabet_list [data-browse-tab-link]").unbind().on("click", function(e) {
			var self = $(this), self_target = $(self.attr("data-browse-tab-link"));
			if (self_target.size()) {
				self.parent("li").siblings().removeClass("active");
				self.parent("li").addClass("active");
				$("#alphabet_list ~ .alphabet-list-content .alphabet-pane").not(self_target.addClass("active")).removeClass("active");
			}
			var alphabet_content_h = $("#alphabet_list").height();
			alphabet_content_h = (alphabet_content_h < 200) ? 200 : alphabet_content_h;
			_this.scroll("#alphabet_scroll", {
				contentHeight : alphabet_content_h
			});
			_this.apply(arguments);
			e.preventDefault();
		});
		_this.apply(arguments);
		return this;
	};
	_this.loadPage = function(obj) {
		if (obj && obj.url) {
			if (obj.throbber == undefined || obj.throbber != false) {
				_this.throbber(obj.throbber);
			}
			_this.ajax(obj);
		}
		_this.apply(arguments);
		return this;
	};
	_this.apply = function(arguments) {
		for (var i in arguments) {
			if ( typeof arguments[i] === "function") {
				arguments[i]();
			}
		}
		return this;
	};
	//generic methods
	_this.ajax = function(post) {
		var methods = {
			init : function() {
				if (post.data || post.datatype) {
					_this.ajaxID = $[post.method||"post"](post.url, post.data, function(data) {
					}, post.datatype);
				} else {
					_this.ajaxID = $[post.method||"post"](post.url, function(data) {
						//console.log(data)
					});
				}
				_this.ajaxID.done(methods.done);
				_this.ajaxID.fail(methods.fail);
				_this.ajaxID.always(methods.always);
			},
			done : function(data) {
				if (post.success) {
					post.success.apply(this, arguments);
				}
				_this.throbber();
			},
			fail : function(data) {
				if (post.fail) {
					post.fail.apply(this, arguments);
				}
				_this.throbber();
			},
			always : function(data) {
				if (post.always) {
					post.always.apply(this, arguments);
				}
			},
			error : function(data) {
				if (post.error) {
					post.error.apply(this, arguments);
				}
				_this.throbber();
			}
		};

		methods.init();
		_this.apply(arguments);
		return this;
	};
	_this.ajaxAbort = function() {
		if ($('#progress_outer').size()) {
			$('#progress_outer').remove();
		}
		_this.ajaxID.abort();
		_this.apply(arguments);
		return this;

	};
	_this.ajaxError = function(e) {
		if (String(e.status).match(/404/g)) {
			_this.notification({
				message : "Page not found",
				duration : 5000
			});
		}
		return this;
	};

	_this.throbber = function(obj) {
		var l_obj = {}, l_throbber = $("#throbber"), l_throbber_text = $("#throbber_text", l_throbber), l_throbberAnimation = $("#throbber_animation", l_throbber), l_throbberContinue = $("#throbber_continue", l_throbber), l_throbber_continue_text = $("#throbber_continue_text", l_throbber), l_thobberHeader = $(".throbber-header", l_throbber), l_thobberImage = $(".throbber-img", l_throbber);
		var template = $('<div class="throbber-wrapper pull-hide" id="throbber"><div class="throbber-box"><div class="throbber-header pull-hide"></div><div class="throbber-img"><img src="assets/images/loader.gif" /></div><div class="throbber-text" id="throbber_text">Loading Please Wait ...</div><div class="throbber-alert pull-hide" id="throbber_continue"><span class="throbber-alert-text" id="throbber_continue_text">This process is taking more time than usual. Do you want to keep trying? Or cancel</span><button class="btn cust-btn btn-success" type="button" data-throbber-btn="yes"><i class="fa fa-check"></i> Yes</button> <button class="btn cust-btn btn-success btn-danger" type="button" data-throbber-btn="no"><i class="fa fa-times-circle"></i> No</button></div></div><div class="modal-backdrop fade in"></div></div>');
		if (l_throbber.length <= 0) {
			$('body').append(template);
		}
		if (obj) {
			l_obj.throbberText = obj.throbberText || "Please wait...";
			l_obj.throbberContinueText = obj.throbberContinueText || "This process is taking more time than usual. Do you want to keep trying? Or cancel";
			obj.throbberImage = obj.throbberImage || '<img src="assets/images/loader.gif" />';
			l_throbber_text.html(l_obj.throbberText), l_throbber_continue_text.html(l_obj.throbberContinueText);
			_this.loader();
			this.continueFn = function() {
				$('[data-throbber-btn]').on('click', function() {
					var self = $(this), btnType = self.attr('data-throbber-btn');
					(btnType == 'yes') ? $('#throbber_continue', l_throbber).slideUp() : l_throbber.hide();
				});
				return this;
			};
			this.continueText = function(waitTime) {
				$('#throbber_continue', l_throbber).hide();
				setTimeout(function() {
					$('#throbber_continue', l_throbber).slideDown();
					clearTimeout();
				}, waitTime);
				return this;
			};
			this.setHideDuration = function(hideTime) {
				setTimeout(function() {
					l_throbber.hide();
				}, hideTime);
				return this;
			};
			if (obj || obj == 'show') {
				$('#throbber_continue', l_throbber).hide();
				l_thobberHeader.hide();
				l_throbber.show();
			}
			if (obj == 'hide') {
				l_throbber.hide();
			}
			if (obj.headerText && obj.headerText != '') {
				l_thobberHeader.html(obj.headerText).show();
			}
			if (obj.throbberImage) {
				l_thobberImage.html(obj.throbberImage);
			}
			if (obj.waitTime) {
				this.continueText(Number(obj.waitTime));
				this.continueFn();
			}
			if (obj.hideTime) {
				if (obj.multiCallback) {
					var time = 0;
					for (var i in obj.multiCallback.duration) {
						time = time + parseInt(obj.multiCallback.duration[i]);
					}
					var totaltime = parseInt(time) + parseInt(obj.hideTime);
					this.setHideDuration(totaltime);
				} else {
					this.setHideDuration(obj.hideTime);
				}
			}
			if (obj.multiCallback) {
				var newContDown = new _this.countDown({
					counter : obj.multiCallback.counter,
					duration : obj.multiCallback.duration,
					callback : obj.multiCallback.callback
				});
				newContDown.init(newContDown.setting);
			}
		} else {
			l_throbber.hide();
		}

		return this;
	};

	_this.loader = function() {
		if ($('[data-load-animate]').is(":visible")) {
			$('[data-load-animate]').animate({
				'background-position' : '-=10%'
			}, 500, 'linear', function() {
				_this.loader();
			});
		}
		return this;
	};

	_this.applyPageMethod = function(method, data) {
		if (_this[method]) {
			_this[method](data);
		}
		return this;
	};

	_this.notification = function(obj) {
		if (obj) {
			if (!$("[data-notifyid='" + obj.id + "']").size()) {
				var cloned = $("[data-ui='alert_notification']").eq(0).hide().clone();
				loc_status = {
					"success" : "fa-check-circle",
					"danger" : "fa-times-circle",
					"info" : "fa-info-circle",
					"warning" : "fa-exclamation-circle"
				};
				loc_icon = '<i class="fa ' + loc_status[obj.status || "info"] + '"></i>';
				obj.message = ( typeof obj.message === "string") ? [obj.message] : obj.message;
				var html = ( function(obj) {
						var i, loc_joinstr = "<ul class='list-unstyled'>";
						for (i in obj.message) {
							loc_joinstr += '<li>' + loc_icon + obj.message[i] + '</li>';
						}
						loc_joinstr += "</ul>";
						return loc_joinstr;
					}(obj));
				if (obj.alertid) {
					cloned.attr("data-alertid", obj.alertid);
				}

				cloned.attr("data-notifyid", obj.id).append(html);
				$("[data-ui='alert_notification']:first").after(cloned);
				cloned.addClass("alert-" + obj.status || "info").fadeIn(1000);
				cloned.delay(obj.duration || 6000).fadeOut(1000, function() {
					$(this).remove();
				});
			}
		}
		return this;
	};

	_this.handlebar = function(_obj) {
		var obj = _obj;
		obj.id = $(obj.id);

		if (obj.id.size()) {
			var source = $(obj.template).html();
			var template = Handlebars.compile(source);
			if (obj.json == undefined) {
				obj.id.html(template());
			} else {
				obj.id.html(template(obj.json));
			}
			if ( typeof obj.complete == "function")
				obj.complete.apply();
		}
		return _this;
	};
	_this.matchHeight = function(id1, id2) {
		$(id1).css("height", "auto");
		$(id2).css("height", "auto");
		var h = Math.max($(id1).height(), $(id2).height());
		$(id1).height(h);
		$(id2).height(h);
		return this;
	};

	_this.scrollTop = function() {
		var _window = $(window), _scrollpos = _window.scrollTop(), _newscrollpos;
		$(window).scroll(function() {
			_newscrollpos = _window.scrollTop();
			if (_newscrollpos > _scrollpos) {
				$('[data-scrolltop]').stop().animate({
					right : 5,
					opacity : '0.7'
				}, 500);
			} else {
				$('[data-scrolltop]').stop().animate({
					right : -70
				}, 500);
			}
		});
		$(document).off('click', '[data-scrolltop]').on('click', '[data-scrolltop]', function(e) {
			e.preventDefault();
			e.stopPropagation();
			$('html,body').stop().animate({
				scrollTop : 0
			}, 1500);
		});
		return this;
	};

	_this.datePicker = function(id, options) {
		var loc_detaults = {
			forceParse : true,
			format : "mm/dd/yyyy",
			autoclose : false,
			orientation : "auto bottom"
		}, loc_options;
		loc_options = $.extend({}, loc_detaults, options || {});
		$("#" + $(id).prev().attr('id')).datepicker(loc_options).on("changeDate", function(e) {
			if (loc_options.changeDate) {
				loc_options.changeDate(e);
			}
		}).off('focus').on("blur", function() {
			var self = $(this);
			setTimeout(function() {
				if (self.val() != "") {
					$(".error-msg").slideUp("fast", function() {
						$(this).remove();
					});
				}
				clearTimeout(this);
			}, 500);
		});
		$(id).on('click', function() {
			$("#" + $(id).prev().attr('id')).datepicker('show');
		});
		if (options.focus != undefined && !options.focus) {
			$(document).off("click", id).on("click", id, function() {
				$("#" + $(this).prev().attr('id')).focus();
			});
		}
		$(document).off("click", "#datepicker_close").on("click", "#datepicker_close", function() {
			$(".error-msg:visible").remove();
		});
		return this;
	};

	_this.jqGrid = function(options) {
		if (options) {
			var grid_selector = options.gridId, pager_selector = options.gridPagerId;
			//replace icons with FontAwesome icons like above
			var constructColumnHideShow = function(colName, colModel) {
				var colCofigPrefix = '<ul class="dropdown-menu arrow-right pull-right" id="column_configure" data-columnconfigure="' + grid_selector + '"><div class="dropdown-header">Setting <button type="button" class="close dropdown-close" aria-hidden="true" data-dropdown-close="speciality_list"><i class="fa fa-times-circle"></i></button></div>';
				var colConfigSurfix = '</ul>';
				var li = [];

				for ( i = 0; i < colModel.length; i++) {
					li.push('<li class="list-item"><div data-ui="checkbox" class="checkbox-wrap margin-right10px">' + '<input type="checkbox" value="' + colModel[i].name + '" checked="checked" id="' + colModel[i].name + '" name="' + colModel[i].name + '"  class="checkbox-hide">' + '<span class="checkbox-style"><i class="fa fa-check"></i></span><span class="checkbox-text">' + colName[i] + '</span></div></li>');
				}
				$(".ui-jqgrid-title").append(colCofigPrefix + li.join("") + colConfigSurfix);
				$(".ui-jqgrid .ui-jqgrid-titlebar-close").hide();
			};

			//resize to fit page size
			$(window).on('resize.jqGrid', function() {
				$(grid_selector).jqGrid('setGridWidth', $(".ui-jqgrid:visible").parent().width());
			});
			if (options.title && String(options.title).match(/column_hide_show/g) == null) {
				options.title = '<span class="jq-grid-head text-bold"> ' + options.title + ' </span> <a class="ui-jqgrid-titlebar-config" id="column_hide_show" data-columnconfigurefor="' + grid_selector + '" role="link" title="' + options.title + ' - setting" ><i class="fa fa-wrench"></i></a>';
			}
			$(grid_selector).attr("data-jqgrid-id", grid_selector);
			var jqGrid = jQuery(grid_selector).jqGrid({
				data : options.data,
				jsonReader : {
					repeatitems : false
				},
				datatype : "local",
				//height: 325,
				colNames : options.column.colNames,
				colModel : options.column.colModel,
				viewrecords : true,
				rowNum : options.rowNum,
				//emptyrecords : options.noRecordMessage || "<p class='text-danger'><strong>No records found!</strong></p>",
				//rowList:[10,20,30],
				pager : pager_selector,
				sortable : options.sortable || true,
				sortorder : options.sortorder || "",
				sortname : options.sortname || "",
				altRows : true,
				//toppager: true,
				//multiselect: true,
				//multikey: "ctrlKey",
				subGrid : options.subGrid || false,
				subGridRowExpanded : function(param1, param2) {
					if ( typeof options.subGridRowExpanded === "function") {
						options.subGridRowExpanded(param1, param2);
					}
				},
				subGridRowColapsed : function(param1, param2) {
					if ( typeof options.subGridRowColapsed === "function") {
						options.subGridRowColapsed(param1, param2);
					}
				},
				multiboxonly : true,
				loadComplete : function() {
					var table = this;
					if ($(grid_selector).getGridParam("records") != 0) {
						setTimeout(function() {
							if (!$("[data-columnconfigure='" + grid_selector + "']").size()) {
								constructColumnHideShow(options.column.colNames, options.column.colModel);
							}
							clearTimeout(this);
						}, 1);
						if (options.loadComplete) {
							options.loadComplete(options);
						}
						options.page = arguments;
						if (options.sorted) {
							options.sortname = $(grid_selector).getGridParam("sortname");
							options.sortorder = $(grid_selector).getGridParam("sortorder");
							options.sorted = false;
							var page = $("li.active a[data-grid-page]", pager_selector).attr("data-grid-page");
							$("li a[data-grid-page='" + page + "']", pager_selector).trigger("click", [true]);
						} else {
							//$(".s-ico span").addClass("ui-state-disabled");
						}
						setTimeout(function() {
							$(options.gridId).jqGrid('setGridWidth', $(".ui-jqgrid:visible").parent().width());
							clearTimeout(this);
						}, 100);
						$(pager_selector).show();

					} else {
						$("tbody tr", grid_selector).after("<tr><td colspan='12'><div class='alert alert-warning margin10px pull-hide text-center' data-norecords='" + grid_selector + "'>" + (options.noRecordsMessage || "No records found!") + "</div></td></tr>");
						$(pager_selector).hide();
						$("[data-norecords='" + grid_selector + "']").show();
					}
					$(".ui-jqgrid .ui-jqgrid-titlebar-close").hide();
				},
				onCellSelect : function(row, cell, cellcontent) {
					if (options.onCellClick) {
						options.onCellClick(row, cell, cellcontent);
					}
				},
				onSelectRow : function(rowid, status, e) {
					if (options.onRowClick) {
						options.onRowClick(rowid, status, e);
					}
				},
				onPaging : function(id) {
					if (options.onPaging) {
						options.onPaging(id, jqGrid, options);
					}
				},
				onSortCol : function(name, index) {
					if (options.onSortCol) {
						options.onSortCol(name, index, options);
					}
					options.sorted = true;
				},
				caption : options.title
			});

			if (options.gridCustomPager) {
				options.gridCustomPager(options);
			}

			$(window).triggerHandler('resize.jqGrid');
			//trigger window resize to make the grid get the correct size

			$(document).off("click", "[data-columnconfigure='" + grid_selector + "'] [data-ui='checkbox']").on("click", "[data-columnconfigure='" + grid_selector + "'] [data-ui='checkbox']", function(e) {
				var self = $(this), chkBoxInput = $("input[type='checkbox']", self), chkBoxIcon = $(".checkbox-style i", self), checked = $("[data-columnconfigure='" + grid_selector + "']:visible input[type='checkbox']:checked").length;
				if (chkBoxInput.prop("checked") && checked > 1) {
					chkBoxInput.prop("checked", false);
					$(chkBoxIcon).addClass("fa-uncheck").removeClass("fa-check");
					$(grid_selector).jqGrid('hideCol', chkBoxInput.val());
				} else {
					chkBoxInput.prop("checked", true);
					$(chkBoxIcon).addClass("fa-check").removeClass("fa-uncheck");
					$(grid_selector).jqGrid('showCol', chkBoxInput.val());
				}
				$(grid_selector).jqGrid('setGridWidth', $(".ui-jqgrid[id*='" + grid_selector + "']").parent().width());
				e.stopPropagation();
			});
			$(document).off("click", '#column_hide_show').on("click", '#column_hide_show', function() {
				var self = $(this);
				if (!$(".jqSubGrid:visible").size()) {
					$("[data-columnconfigure='" + self.attr("data-columnconfigurefor") + "']").toggle();
				}
			});
			$(document).off("click", "[data-columnconfigure='" + grid_selector + "'] .dropdown-close").on("click", "[data-columnconfigure='" + grid_selector + "'] .dropdown-close", function() {
				$("[data-columnconfigure='" + grid_selector + "']").hide();
			});

		}

		return this;
	};

	_this.gridInitiate = function(obj) {
		var loc_jsonObject = obj.json, i;
		for (i in obj) {
			if (i != "json") {
				var condition = String(i).match(/loadComplete|onPaging|onCellClick|gridCustomPager|paginationAjax/g);
				if (condition && typeof obj[i] === "function" || condition == null && typeof obj[i] !== "function") {
					loc_jsonObject[i] = obj[i];
				}
			}
		}
		_this.jqGrid(loc_jsonObject);
		return this;
	};

	_this.pagination = function(obj) {
		this.pageNumClick = function(ele, param_obj) {
			var self = $(ele), self_parent = self.parent("li"), status = 0, active_li = $("[data-page='" + self.attr("data-currentpage") + "']", self.parents("ul"));
			var currentpage = self.attr("data-page"), selfNextPrevId = $("[data-currentpage]", self.parents("ul"));
			selfNextPrevId.attr("data-currentpage", currentpage);
			$("li", self.parents("ul")).not(self_parent.addClass("active")).removeClass("active");
			if (String(param_obj.pager.totalPage) != "1") {
				if (selfNextPrevId.attr("data-currentpage") == "1") {
					$("#prev", self.parents("ul")).addClass("disable");
					$("#next", self.parents("ul")).removeClass("disable");
				} else if (param_obj.pager.totalPage == selfNextPrevId.attr("data-currentpage")) {
					$("#next", self.parents("ul")).addClass("disable");
					$("#prev", self.parents("ul")).removeClass("disable");
				} else {
					$("#next , #prev", self.parents("ul")).removeClass("disable");
				}
			}
			var infostart = Number((currentpage - 1) * param_obj.pager.rowNum), infoend = Number(infostart) + Number(param_obj.pager.rowNum);
			$("#view-start", param_obj.pager.gridPagerId).html(infostart + 1);
			$("#view-end", param_obj.pager.gridPagerId).html((infoend < param_obj.pager.totalRows) ? infoend : param_obj.pager.totalRows);

			var modules = Number(currentpage) % 10;
			param_obj.pager.gridLastPage = (Number(modules) == 0) ? 10 : Number(modules);
			var grid = $(param_obj.pager.gridId), gridObject = {}, arg = arguments[arguments.length - 1];
			gridObject = {
				page : param_obj.pager.gridLastPage
			};
			grid.setGridParam(gridObject);
			setTimeout(function() {
				grid.trigger("reloadGrid");
				clearTimeout(this);
			}, 10);
		};
		if (String(obj.id).match(/next|prev/ig)) {
			$(document).off("click", obj.id).on("click", obj.id, function() {
				var self = $(this), self_parent = self.parent("li"), status = 0, active_li = $("[data-page='" + self.attr("data-currentpage") + "']", self.parents("ul"));
				if (self.attr("id") == "prev") {
					if (self_parent.next("li.active").size() && self.attr("data-currentpage") != "1") {
						if ( typeof obj.callback === "function") {
							obj.callback(Number(obj.pager.start) - Number(obj.pager.rowNum), Number(obj.pager.rowNum), "prev");
							status = 1;
						}
					} else if (self.attr("data-currentpage") != "1") {
						active_li.parent("li").removeClass("active").prev("li").addClass("active");
						$("[data-currentpage]", self.parents("ul")).attr("data-currentpage", $("li.active a", self.parents("ul")).attr("data-page"));
						$(obj.pager.gridPagerId + ' #next').removeClass("disable");
					}
				}
				if (self.attr("id") == "next") {
					if (self_parent.prev("li.active").size() && self.attr("data-currentpage") != obj.pager.totalPage) {
						if ( typeof obj.callback === "function") {
							obj.callback(Number(obj.pager.start) + Number(obj.pager.rowNum), Number(obj.pager.rowNum), "next");
							status = 2;
						}
					} else if (self.attr("data-currentpage") != obj.pager.totalPage) {
						active_li.parent("li").removeClass("active").next("li").addClass("active");
						$("[data-currentpage]", self.parents("ul")).attr("data-currentpage", $("li.active a", self.parents("ul")).attr("data-page"));
						$(obj.pager.gridPagerId + ' #prev').removeClass("disable");
					}
				}

				if (self.attr("data-currentpage") == "1") {
					$(obj.pager.gridPagerId + ' #prev').addClass("disable");
				} else if (obj.pager.totalPage == self.attr("data-currentpage")) {
					$(obj.pager.gridPagerId + ' #next').addClass("disable");
				} else {
					if (obj.pager.totalPage != 1) {
						$(obj.pager.gridPagerId + ' #prev ,' + obj.pager.gridPagerId + ' #next').removeClass("disable");
					}
				}

				var currentpage = (status == 2) ? self.attr("data-currentpage") : self.attr("data-currentpage") - 1;
				currentpage = Number((status == 1) ? currentpage - 1 : currentpage);
				var infostart = (currentpage * obj.pager.rowNum), infoend = infostart + obj.pager.rowNum;
				$("#view-start", obj.pager.gridPagerId).html(infostart + 1);
				$("#view-end", obj.pager.gridPagerId).html((infoend < obj.pager.totalRows) ? infoend : obj.pager.totalRows);

				var modules = (Number(currentpage)) % 10;
				obj.pager.gridLastPage = Number(modules) + 1;
				var grid = $(obj.pager.gridId);
				grid.setGridParam({
					page : obj.pager.gridLastPage
				});
				// if (obj.pager.sortColumnName) {
				// obj.sortname = obj.pager.sortColumnName;
				// obj.sortorder = obj.pager.sortOrder || "asc";
				// } else {
				// obj.sortname = obj.pager.column.colModel[0].name;
				// obj.sortorder = "asc";
				// }
				grid.trigger("reloadGrid");
			});
		}
		if (String(obj.id).match(/data-grid-page/ig)) {
			$(document).off("click", obj.id).on("click", obj.id, function(e, isTriggered) {
				_this.pageNumClick(this, obj, isTriggered);
				e.preventDefault();
			});
		}
		return this;
	};

	_this.buildPagination = function(obj) {
		if (obj) {
			var loc_header = $(obj.gridPagerId), loc_tmpHeaderID = "#" + loc_header.attr("data-template");
			_this.handlebar({
				id : loc_header,
				template : loc_tmpHeaderID,
				json : obj,
				complete : function() {
					if (obj.complete) {
						obj.complete($(obj.gridPagerId));
					}
				}
			});
		}
	};
	_this.getGridRowFromCell = function(options) {
		var matched = false;
		for (var i in options.data) {
			var object = options.data[i], cond = ($(object[options.key]).attr("data-rowid") == $(options.cell).attr("data-rowid"));
			if (cond) {
				matched = object;
				break;
			}
		}
		return matched;
	};

	_this.gridWithPaginationInitiate = function(objJson) {
		_this.gridColumnCreator = function(obj) {
			if (obj.settingId) {
				var loc_header = $(obj.settingId), loc_tmpHeaderID = "#" + loc_header.attr("data-template");
				var newHiddenColumn = [];
				for (var i in obj.json.column.colModel) {
					var loc_obj = obj.json.column.colModel[i];
					loc_obj.displayName = obj.json.column.colNames[i];
					if (String(loc_obj.hidden).match(/undefined|false/)) {
						newHiddenColumn.push(loc_obj);
					}
				}
				var newcolumn = {
					column : {
						colModel : newHiddenColumn
					}
				};
				_this.handlebar({
					id : loc_header,
					template : loc_tmpHeaderID,
					json : newcolumn,
					complete : function() {
						$("#column_configure", objJson.settingId).attr("data-columnconfigure", objJson.gridId);
						$("#column_hide_show", objJson.settingId).attr("data-columnconfigurefor", objJson.gridId);
						if (obj.complete) {
							obj.complete($(obj.gridPagerId));
						}
					}
				});
			}
		};
		if (objJson.json.settingId) {
			objJson.json.gridTitle = objJson.json.title;
			objJson.json.title = false;
		}
		if (objJson.json.data.length != 0) {
			_this.gridColumnCreator(objJson);
		} else {
			$(objJson.settingId).html("");
		}
		_this.gridInitiate(objJson);
		var loc_objJson = objJson.json;
		loc_objJson.pagination = _this.core.array.rangeNumGenerator(Number(loc_objJson.start), Number(loc_objJson.end));
		loc_objJson.pagination = (loc_objJson.pagination.length == 0) ? [1] : loc_objJson.pagination;
		if (loc_objJson.data.length != 0) {
			_this.buildPagination(loc_objJson);
			var paginationObject = {
				pager : loc_objJson,
				id : loc_objJson.gridPagerId + ' #prev',
				callback : function(startnum, rowNum, direction) {
					loc_objJson.direction = direction;
					if ( typeof loc_objJson.paginationAjax === "function") {
						loc_objJson.paginationAjax(startnum, rowNum, loc_objJson);
					}
				}
			};
			_this.pagination(paginationObject);
			paginationObject.id = loc_objJson.gridPagerId + ' #next';
			_this.pagination(paginationObject).pagination({
				pager : loc_objJson,
				id : loc_objJson.gridPagerId + ' [data-grid-page]'
			});
			_this.pageNumClick($("li a[data-page='" + (loc_objJson.gridLastPage || loc_objJson.currentPage) + "']", loc_objJson.gridPagerId), paginationObject);
		}
		return this;
	};

	_this.dateConvertion = function(obj) {
		if (obj != undefined && obj.data != undefined && obj.key) {
			var i;
			for (i in obj.data) {
				if ( typeof obj.data[i][obj.key] == "string") {
					var startsplit = obj.data[i][obj.key].split(",");
					obj.data[i][obj.key] = new Date(startsplit[2], startsplit[0] - 1, startsplit[1], startsplit[3], startsplit[4]);
				}
			}
		}
	};
	_this.objectToArray = function(obj, joinedArray) {
		var loc_joinedArray = joinedArray || [];
		for (var i in obj) {
			if ( typeof obj[i] === "string" || typeof obj[i] === "number") {
				loc_joinedArray.push(obj[i]);
			} else {
				_this.objectToArray(obj[i], loc_joinedArray);
			}
		}
		return loc_joinedArray;
	};
	_this.tryCatch = function(trycode, callback) {
		try {
			trycode();
		} catch(er) {
			if (callback && typeof callback === "function") {
				callback(er);
			}
		}
	};

	_this.apply = function(arguments, data) {
		for (var i in arguments) {
			if ( typeof arguments[i] === "function") {
				arguments[i](data);
			}
		}
	};

	_this.setPageHeight = function() {
		this.matchHeight(".sidebar", ".page-content");
		return this;
	};

	_this.mediaScreen = function() {
		var loc_userAgent = navigator.userAgent, _this = this, i;
		_this.window = $(window);
		var cond = {
			miniDevice : (_this.window.width() <= 480),
			smallDevice : (_this.window.width() <= 768),
			mediumDevice : (_this.window.width() > 768 && _this.window.width() <= 1024),
			largeDevice : (_this.window.width() > 1024)
		};
		for (i in cond) {
			if (cond[i]) {
				_this.deviceName = i;
				break;
			}
		}
		return this;
	};

	_this.widgetCollapse = function() {
		var _this = this;
		$(document).off('click', '[data-widget-toggle="collapse"]').on('click', '[data-widget-toggle="collapse"]', function(e) {
			var self = $(this), parent = self.closest('.widget-header'), toggleClass = self.attr('data-toggle-class'), widgetBody = parent.siblings('.widget-body');
			widgetBody.slideToggle();
			$('.fa', self).toggleClass(toggleClass);
		});
		return this;
	};

	_this.treeView = function() {
		var _this = this;
		$(document).off('click', '.tree-folder-header').on('click', '.tree-folder-header', function() {
			var self = $(this);
			loc_parent = self.parent('.tree-folder'), loc_tree_content = loc_parent.children('.tree-folder-content');
			loc_tree_content.slideToggle(500, function() {
				_this.setPageHeight();
			});
		});
		return this;
	};

	_this.searchForm = function(formId, callback) {
		var loc_searchbtn = $('.search-btn', formId);
		$(loc_searchbtn).on("click", function() {
			var search_field = $('input[type="text"]', formId), search_value = search_field.val();
			if ( typeof callback == 'funciton') {
				callback();
			}
		});
		return this;
	};

	_this.stopPropagate = function() {
		$(document).off("click", "[data-propagate='stop']").on("click", "[data-propagate='stop']", function(event) {
			var self = $(this);
			event.stopPropagation();
		});
		return this;
	};

	_this.customClick = function() {
		$(document).off("click", "[data-click]").on("click", "[data-click]", function(event) {
			var self = $(this), method = self.attr('data-click');
			eval(method);
		});
		return this;
	};
	_this.currentTime = function(options) {
		var defaults = {
			join : ":",
			format : 12,
			am : " AM",
			pm : " PM",
			AMPM : true,
			seconds : false
		};
		var setting = $.extend({}, defaults, options);
		var newDate = new Date(), hh = newDate.getHours(), mm = _this.zeroFormat(newDate.getMinutes()), ss = _this.zeroFormat(newDate.getSeconds());
		ss = (setting.seconds) ? ss : "";
		var currenttime = hh + setting.join + mm + ss;
		var current_time = (setting.AMPM) ? _this.formatTime12h(currenttime) : currenttime;
		return current_time;
	};

	_this.formatTime12h = function(time) {
		var hh = time.split(':')[0], min = time.split(':')[1], AMPM = "AM", new_time;
		if (hh >= 12) {
			hh = _this.zeroFormat(hh - 12);
			AMPM = 'PM';
		}
		new_time = hh + ':' + min + ' ' + AMPM;
		return new_time;
	};
	_this.zeroFormat = function(val) {
		return (val < 10) ? "0" + val : val;
	};

	_this.timePicker = function(id, options) {
		var loc_detaults = {
			defaultTime : _this.currentTime({
				format : 12,
				AMPM : true
			}),
			showSeconds : false,
			disableFocus : false,
			isOpen : false,
			minuteStep : 1,
			modalBackdrop : false,
			secondStep : 1,
			showInputs : true,
			showMeridian : true,
			template : 'dropdown',
			id : id
		}, loc_options, loc_timepickerId = $(id);
		loc_options = $.extend({}, loc_detaults, options || {});
		loc_timepickerId.timepicker(loc_options);
		loc_timepickerId.next("span.input-group-addon").unbind("click").bind("click", function() {
			loc_timepickerId.focus();
		});
		loc_timepickerId.on('show.timepicker', function(e) {
			$("[data-dropdown-close='bootstrap-timepicker-widget']").unbind("click").bind("click", function() {
				var self = $(this);
				loc_options.self = self;
				if ( typeof loc_options.onClose == "function") {
					loc_options.onClose(e, loc_options);
				}
			});
			if ( typeof loc_options.onShow == "function") {
				loc_options.onShow(e, loc_options);
			}
		}).on('hide.timepicker', function(e) {
			if ( typeof loc_options.onHide == "function") {
				loc_options.onHide(e, loc_options);
			}
		}).on('changeTime.timepicker', function(e) {
			if ( typeof loc_options.onChange == "function") {
				loc_options.onChange(e, loc_options);
			}
		});
		loc_timepickerId.unbind("keyup").bind("keyup", function() {
			var timeval = $(this).val();
			var cond = String(timeval).match(/^[0-9][0-9]:[0-9][0-9]\s(am|pm|AM|PM)$/);
			if (cond) {
				$('input.bootstrap-timepicker-hour:visible').val(timeval.substr(0, 2));
				$('input.bootstrap-timepicker-minute:visible').val(timeval.substr(3, 2));
				$('input.bootstrap-timepicker-meridian:visible').val(timeval.replace(/[0-9:\s]/g, ""));
			}
		});
		return this;
	};

	_this.customSerialize = function(obj, avoidkey, joiner) {
		if (obj) {
			var o, data = {}, formid;
			for (o in obj) {
				var backendField = (String($("[name='" + obj[o].name + "']").attr("type")).match(/^$|undefined|text/ig)) ? $("[name='" + obj[o].name + "']") : $("[name='" + obj[o].name + "'][value='" + obj[o].value + "']"), formid = formid || $("#" + backendField.parents("form").attr("id"));
				if (avoidkey == undefined || String(obj[o].name).match(avoidkey) == null) {
					data[obj[o].name] = (String(data[obj[o].name]).match(/undefined/)) ? obj[o].value : data[obj[o].name] + (joiner || ",") + obj[o].value;
				}
				if (String(backendField.attr("data-backend")).match(/^$|undefined/) == null) {
					var backendAttr = String(backendField.attr("data-backend")).replace(/[\'\[\]]/g, ""), backendObj = (backendAttr.match(",")) ? backendAttr.split(",") : [backendAttr];
					for (i in backendObj) {
						var ikey = backendObj[i], iArray = ikey.split(":");
						data[iArray[0]] = iArray[1];
					}
				}
			}
			$("input[disabled]", formid).each(function() {
				var self = $(this), selfname = self.attr("name"), backendField = $("[name='" + selfname + "']");
				if (avoidkey == undefined || String(selfname).match(avoidkey) == null) {
					data[selfname] = (String(data[selfname]).match(/undefined/)) ? self.val() : data[selfname] + (joiner || ",") + self.val();
				}
				if (String(backendField.attr("data-backend")).match(/^$|undefined/) == null) {
					var backendAttr = String(backendField.attr("data-backend")).replace(/[\'\[\]]/g, ""), backendObj = (backendAttr.match(",")) ? backendAttr.split(",") : [backendAttr];
					for (i in backendObj) {
						var ikey = backendObj[i], iArray = ikey.split(":");
						data[iArray[0]] = iArray[1];
					}
				}
			});
			return data;
		} else {
			return obj;
		}
	};

	_this.objectextend = function(options) {
		var params = options;
		for (var i in params.from) {
			if (String( typeof params.from[i]).match(/string|number|function/ig)) {
				params.to[i] = params.from[i];
			} else {
				var paramto = (String( typeof params.from[i]).match(/string/) == null && String(params.from[i].length).match(/^[0-9]{0,}$/)) ? [] : {};
				params.to[i] = _this.objectextend({
					from : params.from[i],
					to : paramto
				});
			}
		}
		return params.to;
	};
	_this.timeOut = function(options) {
		var loc_timeout = setTimeout(function() {
			if ( typeof options.callback === "function") {
				options.timeoutId = loc_timeout;
				options.callback(options);
			}
			clearTimeout(this);
		}, options.duration || 1);
		return this;
	};
	_this.countDown = function(params) {
		var defaults = {
			counter : 0
		}, methods = {
			setting : params,
			init : function(param1) {
				methods.setting = _this.objectextend({
					from : param1,
					to : defaults
				});
				var loopCount = 0, loop = function() {
					if (loopCount != methods.setting.counter - 1) {
						_this.timeOut({
							duration : (String(methods.setting.duration[loopCount]).match(/undefined/) && String(methods.setting.duration[loopCount]).match(/[0-9]/g) == null) ? 2000 : methods.setting.duration[loopCount],
							callback : function(timerid) {
								methods.setting.currentCount = loopCount;
								if ( typeof methods.setting.callback[loopCount] === "function") {
									methods.setting.callback[loopCount](methods.setting);
								}
								if ( typeof methods.setting.callback === "function") {
									methods.setting.callback(methods.setting);
								}
								clearTimeout(timerid), loop();
								loopCount = loopCount + 1;
							}
						});
					}
				};
				loop();
			}
		};
		return methods;
	};

	_this.createTable = function(options) {
		if (options) {
			var table = $(options.id), json = options.json, data = json.table, joinstring = "", headerArray = [], i, j, k, l;
			if (String(table.prop("tagName")).match(/table/ig) == null) {
				table = table.append("<table></table");
				table.attr("class", options.classes).attr("id", options.tableId || table.attr("id") + "_table");
			}
			joinstring += "<thead><tr>";
			for (i in data.thead) {
				var colname = data.thead[i];
				if (String(colname.hidden).match(/true|undefined|null/)) {
					joinstring += "<th>" + colname.title + "</th>";
				}
				headerArray.push(data.thead[i].name);
			}
			joinstring += "</tr><thead>";
			if (data.tbody.length) {
				joinstring += "<tbody><tr>";
				for (j in data.tbody) {
					var loc_obj_1 = data.tbody[j];
					for (l in data.thead) {
						var cell = data.thead[l];
						if (String(loc_obj_1[cell.name]) && !cell.hidden) {
							joinstring += "<td>" + loc_obj_1[cell.name] + "</td>";
						}
					}
					joinstring += "</tr><tr>";
				}
				joinstring += "</tr><tbody>";
			} else {
				joinstring += "<tr><td class='text-center text-danger' colspan='12'>" + (json.noRecordMessage || "No record found.") + "</td></tr>";
			}
			table.html(joinstring);
			$("tr:empty,tbody:empty,thead:empty", table).remove();
			if ( typeof options.completed === "function") {
				options.completed(options);
			}
		}
		return this;
	};

	///How to:
	//var params = {};
	//params.id = $("#mytable")
	//params.json = { table :
	//{
	//thead : [{name : "id" , title : "S.NO"},{name : "Col1" , title : "Column 1"}]},
	//tbody : [{ "id" : "1" , "Col1" : "Column 1 value"}]
	//}
	// The below method for callback, when table generation completed then it will execute.
	//params.completed = function(options){
	//This method return params object data for your reference.
	//}
	//_this.tableAssignTo(params);

	///html
	//<table id="#mytable" ></table>
	_this.tableAssignTo = function(param) {
		var tableCreateObject = {
			id : param.id,
			json : param.json,
			completed : function(options) {
				if ( typeof param.completed === "function") {
					param.completed(options);
				}
			}
		};
		if (String(param).match(/^$|undefined|null/)) {
			throw ("//Data not available");
		} else if (String(param.id).match(/^$|undefined|null/)) {
			throw ("//Table id not available");
		} else if (String($(param.id).prop("tagName")) != "TABLE") {
			throw ("//ID is not a table element");
		} else if (String(param.json).match(/^$|undefined|null/)) {
			throw ("//Table data not available");
		} else {
			_this.createTable(tableCreateObject);
		}
		return this;
	};
	///How to :
	// The below id for selector which element you want collapse, default = '[data-ui-collapse]'
	// The below afterClicked options for callback method, it will run after clicked each collapse

	// var newCollapse = _this.uiCollapse({
	// id : $("#id"),
	//afterClicked : function(data){
	// the above param of data is which element clicked and whatever you initiated data
	//}
	//});

	//newCollapse.init(newCollapse.setting);

	///html
	// <div data-ui-collapse='uniqueid' data-ui-collapse-setting='toggle:hide'>
	// content...
	// <div data-ui-collapse-case='uniqueid'>
	// content...
	// </div>
	// </div>
	// <div data-ui-collapse-case='uniqueid'>
	// content...
	// </div>

	_this.uiCollapse = function(options) {
		var methods = {
			defaults : {
				id : "[data-ui-collapse]",
				css : {
					"cursor" : "pointer"
				}
			},
			setting : options,
			init : function(options) {
				methods.setting = $.extend({}, methods.defaults, options);
				var id = methods.setting.id;
				$(id).each(function() {
					var self = $(this), selfToggleDefault = {
						toggle : "show"
					}, selfSettingAttr = self.attr("data-ui-collapse-setting"), selfSetting = (String(selfSettingAttr).match(_this.emptypattern)) ? selfToggleDefault : _this.dataObject({
						string : selfSettingAttr
					}), selfToggle = (String(selfSetting.toggle).match(/show|hide/)) ? selfSetting : {
						toggle : "show"
					};
					self.css((methods.setting.styles || methods.defaults.css));
					$("[data-ui-collapse-case='" + self.attr("data-ui-collapse") + "']")[selfToggle.toggle]();
					self.off("click").on("click", methods.setting, methods.click);
				});
				return options;
			},
			click : function(e) {
				var options = e.data, self = $(this), selfWhich = self.attr("data-ui-collapse"), selfSettingAttr = self.attr("data-ui-collapse-setting"), selfSetting = (String(selfSettingAttr).match(_this.emptypattern)) ? {} : _this.dataObject({
					string : selfSettingAttr
				}), selfTarget = $("[data-ui-collapse-case='" + selfWhich + "']");
				(selfTarget.is(":visible")) ? selfTarget.hide() : selfTarget.show();
				options.element = self, options.e = e, options.toggle = (selfTarget.is(":visible"));
				if ( typeof options.afterClicked === "function") {
					options.afterClicked(options);
				}
			}
		};
		return methods;
	};

	_this.handlebarsRegisterHelper = function() {
		var _this = this;
		Handlebars.registerHelper("pageCalc", function(start, total, init, options) {
			var retVal = "";
			if (init == "start") {
				retVal = (((start == 1) ? (Number(start) - 1) : Number(start)) * Number(total)) + 1;
			}
			if (init == "end") {
				retVal = (((start == 1) ? (Number(start) - 1) : Number(start)) * Number(total)) + Number(total);
			}
			return retVal;
		});
		Handlebars.registerHelper("customIf", function(value, match, options) {
			if (String(value) == String(match)) {
				return options.fn(this);
			} else {
				return options.inverse(this);
			}
		});
		return this;
	};

	_this.setLeftMenuPosition = function() {
		var _this = this, device = _this.mediaScreen().deviceName, elem = $(".page-content"), marginLeft = elem.css('margin-left');
		_this.largeDeviceFn = function() {
			elem.stop().animate({
				marginLeft : "230px"
			}, 400, function() {
				$('.sidebar-collapse .fa').addClass('fa-outdent').removeClass('fa-indent');
				$('[data-menu="submenu"].open').children('ul').slideDown();
				_this.setPageHeight();
			});
			return this;
		};
		_this.smallDeviceFn = function() {
			elem.stop().animate({
				marginLeft : "46px"
			}, 400, function() {
				$('.sidebar-collapse .fa').addClass('fa-indent').removeClass('fa-outdent');
				$('[data-menu="submenu"]').children('ul').slideUp();
				_this.setPageHeight();
			});
			return this;
		};
		_this.miniDeviceFn = function() {
			elem.stop().animate({
				marginLeft : "0"
			}, 400, function() {
				$('.sidebar-collapse .fa').addClass('fa-outdent').removeClass('fa-indent');
				_this.setPageHeight();
			});
			return this;
		};

		if (device == "largeDevice" || device == "mediumDevice") {
			_this.largeDeviceFn();
		} else if (device == "smallDevice") {
			_this.smallDeviceFn();
		} else {
			_this.miniDeviceFn();
		}
		$(document).click(function(event) {
			var target = $(event.target), parent = target.closest('[data-template]');
			if (parent.hasClass('nav-sidebar') || parent.hasClass('sidebar-profile')) {
				elem.stop().animate({
					marginLeft : "230px"
				}, 400);
				$('.leftmenu-trigger .fa').removeClass('fa-outdent').addClass('fa-indent');
			}
		});
		return this;
	};

	_this.collapseSideMenu = function() {
		var _this = this, device = _this.mediaScreen().deviceName;
		$(document).off("click", '[data-trigger="leftmenu-collapse"]').on("click", '[data-trigger="leftmenu-collapse"]', function() {
			var elem = $(".page-content"), elem_margin = elem.css('margin-left'), icon = $(this).children("i.fa");
			if ($(".sidebar").width() < 100) {
				$("li.open ul").hide();
			} else {
				$("li.open ul").show();
			}
			if (elem_margin == '230px') {
				_this.setLeftMenuPosition().smallDeviceFn();
			} else {
				_this.setLeftMenuPosition().largeDeviceFn();
			}
			_this.setPageHeight();
		});
		this.apply(arguments);
		return this;
	};

	_this.setLeftMenuActive = function(ele) {
		var self = ele, li = self.parent("li"), siblings = li.siblings("[data-menu='submenu']");
		var iconright = li.find("[data-toggle-class]"), iconrightsiblings = siblings.find("[data-toggle-class]");
		siblings.removeClass("open").children("ul").slideUp();
		iconrightsiblings.removeClass(iconrightsiblings.attr("data-toggle-class"));
		if (li.hasClass("open") && li.children("ul:visible").size()) {
			li.children("ul").slideUp().parent('li').removeClass("open");
			iconright.removeClass(iconright.attr("data-toggle-class"));
		} else {
			li.children("ul").slideDown().parent('li').addClass("open");
			iconright.addClass(iconright.attr("data-toggle-class"));
		}
		$("[data-link] , [data-menu='submenu'] > a").not(self.not(self.parent("li[data-menu='submenu']").children("a")).addClass("active")).removeClass("active");
		return this;
	};

	_this.loadPageFromNavigation = function() {
		var _this = this;
		_this.loc_smallPortMenuHide = function(self) {
			if (_this.deviceName.match(/(small)/ig)) {
				//self.closest("li.open").children("ul").hide();
			}
		};
		$(document).off("click", "[data-link]:not('.active'),[data-menu='submenu'] > a:not('.active')").on("click", "[data-link]:not('.active'),[data-menu='submenu'] > a:not('.active')", function() {
			var self = $(this), loc_url = self.attr("data-link"), loc_keypage = (self.attr("data-keypage")) ? self.attr("data-keypage") : "none";
			if (loc_url != "" && loc_keypage != "none") {
				_this.loadPage({
					url : _this.root + loc_url,
					success : function(data) {
						_this.load_page_id.html(data);
						_this.eleKeypage.attr("data-load-keypage", loc_keypage);
						_this.historyPage.push({
							keypage : loc_keypage,
							url : loc_url
						});
						_this.setLeftMenuActive(self).applyPageMethod(loc_keypage).widgetCollapse().setPageHeight();
						if (_this.deviceName.match(/(small)/ig)) {
							_this.setLeftMenuPosition().smallDeviceFn();
						} else if (_this.deviceName.match(/(mini)/ig)) {
							_this.setLeftMenuPosition().miniDeviceFn();
						}
						$("[data-toggle=tooltip]").tooltip({
							html : !0
						});
					},
					fail : function(e) {
						_this.ajaxError(e);
					}
				});
				if (_this.deviceName.match(/(mini)/ig)) {
					$('[data-trigger="leftmenu-collapse"]').trigger("click");
				}
				if (!$('.collapse-leftmenu').size()) {
					_this.loc_smallPortMenuHide(self);
				}
				if (_this.deviceName.match(/(mini)/ig) && !$('.collapse-leftmenu').size() || _this.deviceName.match(/(large)/ig) && $('.collapse-leftmenu').size()) {
					self.closest("li.open").children("ul").hide();
				}
			} else {
				if (self.parent("li[data-menu='submenu']").size()) {
					_this.setLeftMenuActive(self);
				} else {
					if (self.attr("data-modal-url") == undefined && self.attr("id") != "logout") {
						_this.notification({
							"id" : "page_not_found",
							message : "Page not found",
							duration : 5000
						});
					}
					if (_this.deviceName.match(/(mini)/ig)) {
						$('[data-trigger="leftmenu-collapse"]').trigger("click");
					}
				}
			}
			_this.apply(arguments);

			if ($('.page-content').css('margin-left') == "46px") {
				$('[data-trigger="leftmenu-collapse"]').trigger("click");
			}
		});

		$(document).off("click", "#page_content,.navbar-collapse,.navbar-brand > a:not('.leftmeu-collapse-btn')").on("click", "#page_content,.navbar-collapse,.navbar-brand > a:not('.leftmeu-collapse-btn')", function() {
			if (_this.deviceName.match(/(small)/ig)) {
				_this.setLeftMenuPosition().smallDeviceFn();
			} else if (_this.deviceName.match(/(mini)/ig)) {
				_this.setLeftMenuPosition().miniDeviceFn();
			}
		});
		return this;
	};

	_this.openRightNavigation = function() {
		var _this = this;
		$(document).off('click', '[data-trigger="rightnav"]').on('click', '[data-trigger="rightnav"]', function() {
			var self = $(this), elem = $('.rightnav'), pos = elem.css('right'), toggle_class = self.attr('data-toggle-class');
			elem.stop().animate({
				right : "0px"
			}, 300, function() {
				$('.fa', self).addClass(toggle_class);
			});
		});
		$(document).off('click', 'body:not(".rightnav")').on('click', 'body:not(".rightnav")', function() {
			var elem = $('.rightnav'), pos = elem.css('right'), nav_btn = $('[data-trigger="rightnav"]'), toggle_class = nav_btn.attr('data-toggle-class');
			if (pos == '0px') {
				elem.stop().animate({
					right : "-230px"
				}, 300, function() {
					$('.fa', nav_btn).removeClass(toggle_class);
				});
			}
		});
		$(document).off('click', '.rightnav').on('click', '.rightnav', function(e) {
			e.stopPropagation();
		});
		return this;
	};

	_this.autoPageLoad = function(parent) {
		var _this = this, loc_arg = arguments;
		$("[data-load-page]", parent || document).each(function() {
			var self = $(this), loc_keypage = (self.attr("data-keypage")) ? self.attr("data-keypage") : "none";
			_this.loadPage({
				throbber : {},
				url : _this.root + self.attr("data-load-page"),
				success : function(data) {
					self.html(data);
					if (loc_keypage != "none") {
						_this.applyPageMethod(loc_keypage, data);
					}
					_this.apply(loc_arg, data);
					_this.setPageHeight();
				},
				fail : _this.ajaxError
			});
		});
		return this;
	};

	_this.pageFontSize = function() {
		var fontSize = 14;
		$(document).off("click", "[data-font-size]").on("click", "[data-font-size]", function() {
			var self = $(this), fontType = self.attr('data-font-size');
			if (fontType == "plus") {
				if (fontSize < 20) {
					fontSize = fontSize + 1;
					$('body').attr('style', 'font-size:' + fontSize + 'px !important');
				}
			} else {
				if (fontSize > 10) {
					fontSize = fontSize - 1;
					$('body').attr('style', 'font-size:' + fontSize + 'px !important');
				}
			}
		});
		return this;
	};
};
