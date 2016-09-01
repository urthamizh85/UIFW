$(document).ready(function() {
	var now = new Date();
	var myApp = new cnsiCoreUi();
	myApp.errorPage = "#";
	myApp.load_page_id = $("#load_page");
	myApp.root = "pages/";
	myApp.eleKeypage = $("[data-load-keypage]");
	myApp.core = cnsiJS.core;
	myApp.historyPage = myApp.historyPage || [];

	myApp.common = function() {
		$('.slide-nav', '[data-slidebox="#right1"],[data-slidebox="#left1"] ').slideBox({
			speed : "fast"
		});

		$(document).off('click', '#session_timeout').on('click', '#session_timeout', function() {
			$.sessionTimeout({
				message : 'Your session is about to expire in one minute.',
				keepAliveUrl : 'section-36.html',
				logoutUrl : 'section-36.html',
				redirUrl : 'section-36.html',
				warnAfter : 1000,
				redirAfter : 60000
			});
		});
		return this;
	};

	myApp.handlebarsRegisterHelper = function() {
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

	myApp.setLeftMenuPosition = function() {
		var _this = this, device = myApp.mediaScreen().deviceName, elem = $(".page-content"), marginLeft = elem.css('margin-left');
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

	myApp.collapseSideMenu = function() {
		var _this = this, device = myApp.mediaScreen().deviceName;
		$(document).off("click", '[data-trigger="leftmenu-collapse"]').on("click", '[data-trigger="leftmenu-collapse"]', function() {
			var elem = $(".page-content"), elem_margin = elem.css('margin-left'), icon = $(this).children("i.fa");
			if ($(".sidebar").width() < 100) {
				$("li.open ul").hide();
			} else {
				$("li.open ul").show();
			}
			if (elem_margin == '230px') {
				myApp.setLeftMenuPosition().smallDeviceFn();
			} else {
				myApp.setLeftMenuPosition().largeDeviceFn();
			}
			myApp.setPageHeight();
		});
		this.apply(arguments);
		return this;
	};

	myApp.setLeftMenuActive = function(ele) {
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

	myApp.loadPageFromNavigation = function() {
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
					url : myApp.root + loc_url,
					success : function(data) {
						_this.load_page_id.html(data);
						_this.eleKeypage.attr("data-load-keypage", loc_keypage);
						myApp.historyPage.push({
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

	myApp.openRightNavigation = function() {
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

	myApp.dashboardPage = function() {
		var initCharts = function() {
			var charts = $('[data-toggle="easypiechart"]');
			charts.easyPieChart({
				trackColor : "#fff",
				scaleColor : false,
				lineCap : "square",
				lineWidth : 3,
				animate : 1000,
				size : 110,
				onStart : function() {
					var elem = $(this.el), track = elem.attr('data-trackcolor'), bar_color = elem.attr('data-barcolor');
					this.options.barColor = bar_color;
					this.options.trackColor = track;
					this.options.lineWidth = elem.attr('data-linewidth');
					this.options.size = elem.attr('data-size');
				},
				onStep : function(value) {
					var span = this.$el.find('span');
					if (!span.hasClass('chart-icon')) {
						span.text(~~value);
					}
				}
			});
		}();
	}();

	myApp.widgetsPage = function() {
		var _this = this;
		myApp.widgetCollapse().setPageHeight();
	};

	myApp.alertsTooltipPage = function() {
		var _this = this;
		$("[data-toggle=tooltip]").tooltip({
			html : !0
		});
		var popovers = $("[data-toggle=popover]");
		$.each(popovers, function() {
			$(this).popover({
				html : !0,
				template : '<div class="popover ' + $(this).data("class") + '"><div class="arrow"><\/div><h3 class="popover-title ' + $(this).data("titleclass") + '">Popover right<\/h3><div class="popover-content"><\/div><\/div>'
			});
		});
		var hoverpopovers = $("[data-toggle=popover-hover]");
		$.each(hoverpopovers, function() {
			$(this).popover({
				html : !0,
				template : '<div class="popover ' + $(this).data("class") + '"><div class="arrow"><\/div><h3 class="popover-title ' + $(this).data("titleclass") + '">Popover right<\/h3><div class="popover-content"><\/div><\/div>',
				trigger : "hover"
			});
		});
	}();

	myApp.treeViewPage = function() {
		var _this = this;
		myApp.treeView();
	};

	myApp.maxLengthPage = function() {
		$('[maxlength]').maxlength({
			preText : 'You have typed',
			postText : 'Characters',
			separator : 'of'
		});
	}();

	myApp.datePickersPage = function() {
		var _this = this;
		myApp.datePicker('#datepicker_group .input-group-addon', {
			focus : false
		});
		myApp.timePicker('#timepicker', {});
	}();

	myApp.passStrengthPage = function() {
		$('input:password').passwordStrength();
	};

	myApp.wizardPage = function() {
		var _this = this;
		$('#wizard1').wizard({
			validate : false
		});
	}();

	//$('[data-ui="alphabetListSearch"]').listSearch();

	myApp.autoPageLoad = function(parent) {
		var _this = this, loc_arg = arguments;
		$("[data-load-page]", parent || document).each(function() {
			var self = $(this), loc_keypage = (self.attr("data-keypage")) ? self.attr("data-keypage") : "none";
			_this.loadPage({
				throbber : {},
				url : myApp.root + self.attr("data-load-page"),
				success : function(data) {
					self.html(data);
					if (loc_keypage != "none") {
						_this.applyPageMethod(loc_keypage, data);
					}
					_this.apply(loc_arg, data);
					myApp.setPageHeight();
				},
				fail : _this.ajaxError
			});
		});
		return this;
	};

	myApp.scrollMessagePage = function() {
		$("#scrollMessage").scrollmessage({
			delay : 5000
		});
		return this;
	}();

	myApp.formValidation = function() {
		var _this = this, loc_form = $('#form_validate');
		loc_form.formValidate();
		$(document).off("click", "#form_submit_btn").on("click", "#form_submit_btn", function() {
			var formOk = loc_form.formValidate("validate"), loc_formData = myApp.customSerialize(loc_form.serializeArray());
			if (formOk) {
				console.log(loc_formData);
			}
			return false;
		});
		return this;
	};

	myApp.confirmBoxPage = function() {
		var _this = this;
		$(document).off('click', '[data-toggle="confirmbox"]').on('click', '[data-toggle="confirmbox"]', function() {
			$("#confirmbox").confirmBox({
				message : ["Your custom message comes here"],
				yes : function() {
				}
			});
			$("#confirmbox").confirmBox("show");
		});
		$(document).off('click', '#custom_button_confirmbox').on('click', '#custom_button_confirmbox', function() {
			$("#confirmbox").confirmBox({
				message : ["Your custom message comes here"],
				buttons : [{
					text : 'Ok',
					btnClass : 'success',
					type : 'button',
					icon : '<i class="fa fa-check"></i>',
					click : function() {
						$("#confirmbox").confirmBox("hide");
					}
				}, {
					text : 'Cancel',
					btnClass : 'cancel',
					type : 'button',
					icon : '<i class="fa fa-times-circle"></i>',
					click : function() {
						$("#confirmbox").confirmBox("hide");
					}
				}]
			});
			$("#confirmbox").confirmBox("show");
		});
	}();

	myApp.notificationPage = function() {
		$(document).off('click', '[data-toggle="notification"]').on('click', '[data-toggle="notification"]', function() {
			myApp.notification({
				"message" : ["This is a notification alert."],
				"duration" : "5000",
				"status" : "info"
			});
		});
	}();

	myApp.throbberPage = function() {
		var _this = this;
		$(document).off('click', '#default_throbber').on('click', '#default_throbber', function() {
			myApp.throbber({
				throbberText : 'Please wait...',
				waitTime : 3000
			});
		});
		$(document).off('click', '#autohide_throbber').on('click', '#autohide_throbber', function() {
			myApp.throbber({
				throbberText : 'Please wait. Auto hide in 3 seconds',
				hideTime : 3000
			});
		});
		$(document).off('click', '#multi_throbber').on('click', '#multi_throbber', function() {
			myApp.throbber({
				throbberText : 'Please wait...',
				multiCallback : {
					counter : 3,
					duration : [2000, 2000, 2000],
					callback : [throbberMsg1, throbberMsg2, throbberMsg3]
				},
				hideTime : 2000
			});
		});
		$(document).off('click', '#header_throbber').on('click', '#header_throbber', function() {
			myApp.throbber({
				throbberText : 'Please wait...',
				headerText : 'Throbber Title',
				hideTime : 2000
			});
		});
		$(document).off('click', '#image_throbber').on('click', '#image_throbber', function() {
			myApp.throbber({
				throbberText : 'Please wait...',
				throbberImage : '<img src="assets/images/loading_2.gif" />',
				hideTime : 4000
			});
		});

		function throbberMsg1() {
			$('#throbber_text').append('<p><i class="fa fa-check-circle"></i> Callback1 completed<p>');
		}

		function throbberMsg2() {
			$('#throbber_text').append('<p><i class="fa fa-check-circle"></i> Callback2 completed</p>');
		}

		function throbberMsg3() {
			$('#throbber_text').append('<p><i class="fa fa-check-circle"></i> Callback3 completed</p>');
		}

	}();

	myApp.templating = function() {
		var dataNavBar = $("#Template").attr("dataNavBar");
		if (dataNavBar == "horizontal") {
			$(".horizontal-navbar .nav > li > a").attr("data-toggle", "dropdown");
			$(".horizontal-navbar .nav > li > a").addClass('dropdown-toggle');
			$(".horizontal-navbar .nav > li > ul").addClass("dropdown-menu theme arrow left");
			$("#content").addClass("horizontal-page-content");
			$("#page-container").addClass("horizontal-page-container");
		} else {
			$(".sidebar .nav > li").attr("data-menu", "submenu");
			$(".sidebar .nav > li > ul").addClass("submenu");
			$("#content").addClass("page-content");
			$("#page-container").addClass("page-container");
		}
	}();

	myApp.leftNavList = function() {
		var navList = $('<ul>' + '<li><a href="index.html">Overview</a></li>' + '<li><a href="section-1.html">Grid System</a></li>' + '<li><a href="section-2.html">Typogarphy</a>' + '</li>' + '<li><a href="section-3.html">Top Navigation</a>' + '</li>' + '<li><a href="section-4.html">Left Navigation</a>' + '</li>' + '<li><a href="section-5.html">Labels/Badges</a>' + '</li>' + '<li><a href="section-6.html">Progress Bars</a>' + '</li>' + '<li><a href="section-7.html">Breadcrumbs/Pagination</a>' + '</li>' + '<li><a href="section-8.html">List Groups</a>' + '</li>' + '<li><a href="section-9.html">Widgets</a>' + '</li>' + '<li><a href="section-10.html">Input/Input Groups</a>' + '</li>' + '<li><a href="section-11.html">Wells</a>' + '</li>' + '<li><a href="section-12.html">Tabs</a>' + '</li>' + '<li><a href="section-13.html">Accordion</a></li>' + '<li><a href="section-14.html">Alerts</a>' + '</li>' + '<li><a href="section-15.html">Tooltips</a>' + '</li>' + '<li><a href="section-16.html">Dropdowns</a>' + '</li>' + '<li><a href="section-17.html">Modals</a>' + '</li>' + '<li><a href="section-18.html">Databox</a>' + '</li>' + '<li><a href="section-19.html">Pie-Chart</a>' + '</li>' + '<li><a href="section-20.html">Maxlength</a>' + '</li>' + '<li><a href="section-21.html">Password Strength</a>' + '</li>' + '<li><a href="section-22.html">Popovers</a>' + '</li>' + '<li><a href="section-23.html">Datepicker</a>' + '</li>' + '<li><a href="section-24.html">Timepicker</a>' + '</li>' + '<li><a href="section-25.html">Scroll Message</a>' + '</li>' + '<li><a href="section-26.html">Templates</a>' + '</li>' + '<li><a href="section-27.html">Simple/Responsive Tables</a>' + '</li>' + '<li><a href="section-28.html">Form Elements</a>' + '</li>' + '<li><a href="section-29.html">Buttons</a>' + '</li>' + '<li><a href="section-30.html">Confirm Box</a>' + '</li>' + '<li><a href="section-31.html">Wizard</a>' + '</li>' + '<li><a href="section-32.html">Notification Alert</a>' + '</li>' + '<li><a href="section-33.html">Throbber</a>' + '</li>' + '<li><a href="section-34.html">Icons</a></li><li><a href="section-35.html">Input Mask</a></li>' + '<li><a href="section-36.html">Session Timeout</a></li>' + '<li><a href="../js/index.html" target="_blank">Javascript Libraries</a></li>' + '</ul>');
		$('#kss-nav .left-nav').html(navList);
		return this;
	};

	myApp.leftNavSearch = function() {
		if ($('[data-ui="alphabetListSearch"]')) {
			$('[data-ui="alphabetListSearch"]').listSearch();
		}
	}();

	myApp.leftNavSubmenu = function() {
		var url = window.location.href, fileName = url.split('/').pop(), loc_section = fileName.split('.')[0];
		$('[data-section="' + loc_section + '"]').removeClass('pull-hide');
		$('.left-nav a[href="' + fileName + '"]').addClass('active');
		return this;
	};

	myApp.scrollTopBtn = function() {
		var btn = '<a href="#" class="scrolltop" data-scrolltop="true" title="Scroll to top"><i class="fa fa-angle-up"></i></a>';
		$('body').append(btn);
		return this;
	}();

	if ($("[data-page]").size() && $("[data-page-action]").size() && $("[data-page-action]").attr("data-page") != "") {
		myApp.actionName = $("[data-page-action]").attr("data-page-action");
		myApp.autoPageLoad(function() {
			var loc_activelink = $(".sidebar [data-link][data-keypage='" + $("#load_page").attr("data-keypage") + "']");
			loc_activelink.addClass("active");
		}).handlebarsRegisterHelper().loadPageFromNavigation().collapseSideMenu().common().scrollTop({
			scrollTop : 1000
		}).customClick().stopPropagate().searchForm().openRightNavigation().pageFontSize().mediaScreen().setLeftMenuPosition().setPageHeight();
		$("[data-toggle=tooltip]").tooltip({
			html : !0
		});
	}
	myApp.treeView().widgetCollapse().loadPageFromNavigation().openRightNavigation().mediaScreen().leftNavList().leftNavSubmenu().scrollTop({
		scrollTop : 500
	}).common();
	$("[data-toggle=tooltip]").tooltip({
		html : !0
	});

	$(window).on("resize", function() {
		myApp.scrollMove(0);
		myApp.mediaScreen().setLeftMenuPosition().setPageHeight();
	});
});
function getPercent(ele) {
	var elem = $(ele);
	var percent = elem.children('span').text();
	console.log(percent);
};