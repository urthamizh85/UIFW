$(document).ready(function() {
	var now = new Date();
	var myApp = new cnsiCoreUi();
	myApp.errorPage = "#";
	myApp.load_page_id = $("#load_page");
	myApp.root = "pages/";
	myApp.eleKeypage = $("[data-load-keypage]");
	myApp.core = cnsiJS.core;
	myApp.historyPage = myApp.historyPage || [];
	myApp.pageDetails = (sessionStorage.pageDetails) ? $.parseJSON(sessionStorage.pageDetails) : {
		currentPage : {
			url : "dashboard.html",
			keypage : "dashboardPage"
		}
	};

	myApp.common = function() {
		$('.slide-nav', '[data-slidebox="#right1"],[data-slidebox="#left1"] ').slideBox({
			speed : "fast"
		});
		$("[data-toggle=tooltip]").tooltip({
			html : !0
		});
		$(document).off('click', '#logout_btn').on('click', '#logout_btn', function() {
			console.log('hi');
			window.location.href = 'login.html';
		});
		$(document).off('click', '#login_btn').on('click', '#login_btn', function() {
			sessionStorage.clear();
			window.location.href = 'index.html';
		});
		$("body").on("click", function() {
			myApp.mediaScreen().setLeftMenuPosition().setPageHeight();
		});
		return this;
	};

	myApp.sessionStorage = function(options) {
		if (options && options.key && options.data) {
			sessionStorage[options.key] = JSON.stringify(options.data);
		}
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
	};

	myApp.widgetsPage = function() {
		var _this = this;
		myApp.widgetCollapse().setPageHeight();
	};
	
	myApp.faqPage = function() {
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
	};

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
	};

	myApp.datePickersPage = function() {
		var _this = this;
		_this.datePicker('#datepicker_group .input-group-addon', {
			focus : false
		});
		_this.timePicker('#timepicker', {});
	};

	myApp.passStrengthPage = function() {
		$('input:password').passwordStrength();
	};

	myApp.wizardPage = function() {
		var _this = this;
		$('#wizard1').wizard({
			validate : false
		});
	};

	myApp.dataTablePage = function() {
		var _this = this, loc_jsonObject = {
			"totalRows" : 26,
			"rowNum" : 10,
			"totalPage" : 3,
			"start" : 1,
			"end" : 4,
			"currentPage" : 1,
			"title" : "Healthcare Coverage",
			"data" : [{
				"report_name" : "Encounter Data Reporting",
				"date" : "07/01/2014",
				"ytd_files" : "6",
				"frequency" : "Monthly"
			}, {
				"report_name" : "Reconciliation Reporting",
				"date" : "07/01/2014",
				"ytd_files" : "2",
				"frequency" : "Quarterly"
			}, {
				"report_name" : "Claims Payment Reporting",
				"date" : "04/30/2014",
				"ytd_files" : "4",
				"frequency" : "Monthly"
			}, {
				"report_name" : "Provider Network Distance Standards",
				"date" : "04/01/2014",
				"ytd_files" : "4",
				"frequency" : "Monthly"
			}, {
				"report_name" : "Performance Improvement Projects",
				"date" : "01/01/2014",
				"ytd_files" : "1",
				"frequency" : "Annually"
			}, {
				"report_name" : "Transitional Healthcare services",
				"date" : "04/30/2014",
				"ytd_files" : "1",
				"frequency" : "Quarterly"
			}, {
				"report_name" : "Community Events",
				"date" : "04/01/2014",
				"ytd_files" : "1",
				"frequency" : "Yearly"
			}, {
				"report_name" : "Coordination of Benefits",
				"date" : "04/01/2014",
				"ytd_files" : "4",
				"frequency" : "Monthly"
			}, {
				"report_name" : "Cost Experience",
				"date" : "04/01/2014",
				"ytd_files" : "4",
				"frequency" : "Monthly"
			}, {
				"report_name" : "HEDIS Reporting",
				"date" : "04/01/2014",
				"ytd_files" : "4",
				"frequency" : "Monthly"
			}, {
				"report_name" : "CAHPS Reporting",
				"date" : "04/01/2014",
				"ytd_files" : "4",
				"frequency" : "Monthly"
			}, {
				"report_name" : "Other Quality Reporting",
				"date" : "04/01/2014",
				"ytd_files" : "4",
				"frequency" : "Monthly"
			}, {
				"report_name" : "Encounter Data Reporting",
				"date" : "07/01/2014",
				"ytd_files" : "6",
				"frequency" : "Monthly"
			}, {
				"report_name" : "Reconciliation Reporting",
				"date" : "07/01/2014",
				"ytd_files" : "2",
				"frequency" : "Quarterly"
			}, {
				"report_name" : "Claims Payment Reporting",
				"date" : "04/30/2014",
				"ytd_files" : "4",
				"frequency" : "Monthly"
			}, {
				"report_name" : "Provider Network Distance Standards",
				"date" : "04/01/2014",
				"ytd_files" : "4",
				"frequency" : "Monthly"
			}, {
				"report_name" : "Performance Improvement Projects",
				"date" : "01/01/2014",
				"ytd_files" : "1",
				"frequency" : "Annually"
			}, {
				"report_name" : "Transitional Healthcare services",
				"date" : "04/30/2014",
				"ytd_files" : "1",
				"frequency" : "Quarterly"
			}, {
				"report_name" : "Community Events",
				"date" : "04/01/2014",
				"ytd_files" : "1",
				"frequency" : "Yearly"
			}, {
				"report_name" : "Coordination of Benefits",
				"date" : "04/01/2014",
				"ytd_files" : "4",
				"frequency" : "Monthly"
			}, {
				"report_name" : "Cost Experience",
				"date" : "04/01/2014",
				"ytd_files" : "4",
				"frequency" : "Monthly"
			}, {
				"report_name" : "HEDIS Reporting",
				"date" : "04/01/2014",
				"ytd_files" : "4",
				"frequency" : "Monthly"
			}, {
				"report_name" : "CAHPS Reporting",
				"date" : "04/01/2014",
				"ytd_files" : "4",
				"frequency" : "Monthly"
			}, {
				"report_name" : "Other Quality Reporting",
				"date" : "04/01/2014",
				"ytd_files" : "4",
				"frequency" : "Monthly"
			}],
			"column" : {
				"colNames" : ["Report name", "Date", "YTD # of files", "Frequency"],
				"colModel" : [{
					"name" : "report_name",
					"index" : "report_name",
					"sortable" : "String"
				}, {
					"name" : "date",
					"index" : "date",
					"sortable" : true,
					"sorttype" : "date",
					"datefmt" : "m/d/y"
				}, {
					"name" : "ytd_files",
					"index" : "ytd_files",
					"sortable" : "String"
				}, {
					"name" : "frequency",
					"index" : "frequency",
					"sortable" : "String"
				}]
			}
		};
		loc_jsonObject.title = false;
		myApp.gridWithPaginationInitiate({
			json : loc_jsonObject,
			gridId : "#health_coverage_list",
			gridPagerId : "#health_coverage_list_pager",
			settingId : "#hc_grid_columns",
			onCellClick : function(row, cell, cellcontent) {
				if (cell == 3) {
					var rownum = $(cellcontent).attr("data-rowid");
					var currentpage = Number(Number(loc_jsonObject.page[0].page) - 1) * Number(loc_jsonObject.rowNum), loc_row = Number(rownum) - 1;
					var loc_data = loc_jsonObject.data[loc_row], loc_url = loc_data.m_sUrl, loc_keypage = loc_data.m_sMethod;
					myApp.loadPage({
						throbber : {},
						url : myApp.root + loc_url,
						success : function(data) {
							myApp.load_page_id.html(data);
							myApp.applyPageMethod(loc_keypage, loc_data);
							myApp.historyPage.push({
								keypage : loc_keypage,
								url : loc_url,
								subpage : true
							});
						},
						fail : myApp.ajaxError
					});
				}
			},
			paginationAjax : function(startnum, obj) {
				//ajax call here
			}
		});
	};

	myApp.scrollMessagePage = function() {
		$("#scrollMessage").scrollmessage({
			delay : 5000
		});
		return this;
	};

	myApp.formValidationPage = function() {
		var _this = this, loc_form = $('#form_validate');
		loc_form.formValidate();
		$(document).off("click", "#form_submit_btn").on("click", "#form_submit_btn", function() {
			var formOk = loc_form.formValidate("validateAll"), loc_formData = myApp.customSerialize(loc_form.serializeArray());
			console.log(loc_form.serializeArray);
			if (formOk) {
				console.log(loc_form.serializeArray);
				console.log(loc_formData);
			}
			return false;
		});

		_this.datePicker('#datepicker_group .input-group-addon', {
			focus : false
		});
		$('#datepicker_group .input-group-addon').on('dp.change dp.show', function(e) {
			$('#form_validate').bootstrapValidator('revalidateField', 'form_validate');
		});
		$("[data-toggle=tooltip]").tooltip({
			html : !0
		});
		$(document).off("click", "#btn_validate").on("click", "#btn_validate", function(e) {
			var _this = $(this), loc_form = _this.closest("form");
			loc_form.formValidate();
			var formOk = loc_form.formValidate("validateAll"), loc_formData = myApp.customSerialize(loc_form.serializeArray());
			if (formOk) {
				alert("Form validation all success!");
			}
			return false;
		});
		$(document).off("click", "#btn_validateall").on("click", "#btn_validateall", function(e) {
			var _this = $(this), loc_form = _this.closest("form");
			loc_form.formValidate();
			var formOk = loc_form.formValidate("validateAll"), loc_formData = myApp.customSerialize(loc_form.serializeArray());
			if (formOk) {
				alert("Form validation all success!");
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
	};

	myApp.notificationPage = function() {
		$(document).off('click', '[data-toggle="notification"]').on('click', '[data-toggle="notification"]', function() {
			myApp.notification({
				"message" : ["This is a notification alert."],
				"duration" : "10000",
				"status" : "info"
			});
		});
	};

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

	};

	myApp.calendarPage = function() {
		if (calendarEvent != "") {
			$("#calendar_view_event").fullCalendar("destroy");
		}
		var calendarEvent = $("#calendar_view_event").fullCalendar({
			header : {
				left : 'prev,next today',
				center : 'title',
				right : 'month,agendaWeek,agendaDay'
			},
			defaultDate : '2014-11-12',
			editable : false,
			eventLimit : false, // allow "more" link when too many events
			events : [{
				title : 'All Day Event',
				start : '2014-11-01'
			}, {
				title : 'Long Event',
				start : '2014-11-07',
				end : '2014-11-10'
			}, {
				id : 999,
				title : 'Repeating Event',
				start : '2014-11-09T16:00:00'
			}, {
				id : 999,
				title : 'Repeating Event',
				start : '2014-11-16T16:00:00'
			}, {
				title : 'Conference',
				start : '2014-11-11',
				end : '2014-11-13'
			}, {
				title : 'Meeting',
				start : '2014-11-12T10:30:00',
				end : '2014-11-12T12:30:00'
			}, {
				title : 'Lunch',
				start : '2014-11-12T12:00:00'
			}, {
				title : 'Meeting',
				start : '2014-11-12T14:30:00'
			}, {
				title : 'Happy Hour',
				start : '2014-11-12T17:30:00'
			}, {
				title : 'Dinner',
				start : '2014-11-12T20:00:00'
			}, {
				title : 'Birthday Party',
				start : '2014-11-13T07:00:00'
			}]
		});
	};

	myApp.screenFullPage = function() {
		$(document).off('click', '[data-fullscreen]').on('click', '[data-fullscreen]', function() {
			var self = $(this), loc_type = self.attr('data-fullscreen');
			
			if ( loc_type == 'page') {
				if (screenfull.enabled) {
					screenfull.request();
				}
			}else if(loc_type == 'element') {
				if (screenfull.enabled) {
					screenfull.toggle(this);
				}
			}
		});
	};

	myApp.sessionTimeoutAlert = function() {
		if ($('[data-page="login"]').length <= 0) {
			$.sessionTimeout({
				message : 'Your session is about to expire in one minute.',
				keepAliveUrl : 'index.html',
				logoutUrl : 'login.html',
				redirUrl : 'index.html',
				warnAfter : 300000000,
				redirAfter : 120000000000
			});
		}
		return this;
	};
	
	myApp.searchDropDownPage = function() {
		var loc_data = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Detroit', 'Michigan', 'Maryland'];
		$('#search_Dropdown').searchDropdown({
			data:"assets/js/list_json.json",
			multiSelect:true			
		});
		$('#search_Dropdown1').searchDropdown({
			data:"assets/js/list_json.json"
		});
	};

	if ($("[data-page]").size() && $("[data-page-action]").size() && $("[data-page-action]").attr("data-page") != "") {
		myApp.load_page_id.attr("data-load-page", myApp.pageDetails.currentPage.url).attr("data-keypage", myApp.pageDetails.currentPage.keypage);
		myApp.actionName = $("[data-page-action]").attr("data-page-action");
		myApp.autoPageLoad(function() {
			var loc_activelink = $(".sidebar [data-link][data-keypage='" + $("#load_page").attr("data-keypage") + "']");
			loc_activelink.addClass("active");
		}).handlebarsRegisterHelper().mediaScreen().loadPageFromNavigation().persistPage().collapseSideMenu().common().scrollTop({
			scrollTop : 1000
		}).customClick().stopPropagate().searchForm().openRightNavigation().pageFontSize().mediaScreen().setLeftMenuPosition().setPageHeight().sessionTimeoutAlert();
		$("[data-toggle=tooltip]").tooltip({
			html : !0
		});
	}

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