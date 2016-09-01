$(document).ready(function() {
	var now = new Date();
	var myApp = new cnsiCoreUi();
	myApp.load_page_id = $("#load_page");
	myApp.root = "pages/";
	myApp.eleKeypage = $("[data-load-keypage]");
	myApp.core = cnsiJS.core;
	myApp.historyPage = myApp.historyPage || [];

	myApp.common = function() {
		$('.slide-nav', '[data-slidebox="#right1"],[data-slidebox="#left1"] ').slideBox({
			speed : "fast"
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
		var navList = $('<ul><li><a href="index.html">Overview</a></li><li><a href="section-1.html">String Utils</a></li><li><a href="section-2.html">Number Utils</a></li><li><a href="section-3.html">Date Utils</a></li><li><a href="section-4.html">Currency Utils</a></li><li><a href="section-5.html">CNSI Core</a></li><li><a href="section-6.html">CNSI Core UI</a></li><li><a href="section-7.html">Custom</a></li></ul>');
		$('#kss-nav .left-nav').html(navList);
		return this;
	}();

	myApp.leftNavSearch = function() {
		if ($('[data-ui="alphabetListSearch"]')) {
			$('[data-ui="alphabetListSearch"]').listSearch();
		}
	}();

	myApp.leftNavSubmenu = function() {
		var url = window.location.href, fileName = url.split('/').pop(), loc_section = fileName.split('.')[0];
		$('[data-section="' + loc_section + '"]').removeClass('pull-hide');
		$('.left-nav a[href="'+fileName+'"]').addClass('active');
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
	myApp.treeView().widgetCollapse().loadPageFromNavigation().openRightNavigation().mediaScreen().scrollTop({
		scrollTop : 1000
	});
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