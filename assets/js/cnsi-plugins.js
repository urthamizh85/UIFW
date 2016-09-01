/******************************** Starts Placeholders.js v3.0.2 ********************************/
(function(t){"use strict";function e(t,e,r){return t.addEventListener?t.addEventListener(e,r,!1):t.attachEvent?t.attachEvent("on"+e,r):void 0}function r(t,e){var r,n;for(r=0,n=t.length;n>r;r++)if(t[r]===e)return!0;return!1}function n(t,e){var r;t.createTextRange?(r=t.createTextRange(),r.move("character",e),r.select()):t.selectionStart&&(t.focus(),t.setSelectionRange(e,e))}function a(t,e){try{return t.type=e,!0}catch(r){return!1}}t.Placeholders={Utils:{addEventListener:e,inArray:r,moveCaret:n,changeType:a}}})(this),function(t){"use strict";function e(){}function r(){try{return document.activeElement}catch(t){}}function n(t,e){var r,n,a=!!e&&t.value!==e,u=t.value===t.getAttribute(V);return(a||u)&&"true"===t.getAttribute(P)?(t.removeAttribute(P),t.value=t.value.replace(t.getAttribute(V),""),t.className=t.className.replace(R,""),n=t.getAttribute(z),parseInt(n,10)>=0&&(t.setAttribute("maxLength",n),t.removeAttribute(z)),r=t.getAttribute(D),r&&(t.type=r),!0):!1}function a(t){var e,r,n=t.getAttribute(V);return""===t.value&&n?(t.setAttribute(P,"true"),t.value=n,t.className+=" "+I,r=t.getAttribute(z),r||(t.setAttribute(z,t.maxLength),t.removeAttribute("maxLength")),e=t.getAttribute(D),e?t.type="text":"password"===t.type&&K.changeType(t,"text")&&t.setAttribute(D,"password"),!0):!1}function u(t,e){var r,n,a,u,i,l,o;if(t&&t.getAttribute(V))e(t);else for(a=t?t.getElementsByTagName("input"):f,u=t?t.getElementsByTagName("textarea"):h,r=a?a.length:0,n=u?u.length:0,o=0,l=r+n;l>o;o++)i=r>o?a[o]:u[o-r],e(i)}function i(t){u(t,n)}function l(t){u(t,a)}function o(t){return function(){b&&t.value===t.getAttribute(V)&&"true"===t.getAttribute(P)?K.moveCaret(t,0):n(t)}}function c(t){return function(){a(t)}}function s(t){return function(e){return A=t.value,"true"===t.getAttribute(P)&&A===t.getAttribute(V)&&K.inArray(C,e.keyCode)?(e.preventDefault&&e.preventDefault(),!1):void 0}}function d(t){return function(){n(t,A),""===t.value&&(t.blur(),K.moveCaret(t,0))}}function v(t){return function(){t===r()&&t.value===t.getAttribute(V)&&"true"===t.getAttribute(P)&&K.moveCaret(t,0)}}function g(t){return function(){i(t)}}function p(t){t.form&&(T=t.form,"string"==typeof T&&(T=document.getElementById(T)),T.getAttribute(U)||(K.addEventListener(T,"submit",g(T)),T.setAttribute(U,"true"))),K.addEventListener(t,"focus",o(t)),K.addEventListener(t,"blur",c(t)),b&&(K.addEventListener(t,"keydown",s(t)),K.addEventListener(t,"keyup",d(t)),K.addEventListener(t,"click",v(t))),t.setAttribute(j,"true"),t.setAttribute(V,x),(b||t!==r())&&a(t)}var f,h,b,m,A,y,E,x,L,T,S,N,w,B=["text","search","url","tel","email","password","number","textarea"],C=[27,33,34,35,36,37,38,39,40,8,46],k="#ccc",I="placeholdersjs",R=RegExp("(?:^|\\s)"+I+"(?!\\S)"),V="data-placeholder-value",P="data-placeholder-active",D="data-placeholder-type",U="data-placeholder-submit",j="data-placeholder-bound",q="data-placeholder-focus",Q="data-placeholder-live",z="data-placeholder-maxlength",F=document.createElement("input"),G=document.getElementsByTagName("head")[0],H=document.documentElement,J=t.Placeholders,K=J.Utils;if(J.nativeSupport=void 0!==F.placeholder,!J.nativeSupport){for(f=document.getElementsByTagName("input"),h=document.getElementsByTagName("textarea"),b="false"===H.getAttribute(q),m="false"!==H.getAttribute(Q),y=document.createElement("style"),y.type="text/css",E=document.createTextNode("."+I+" { color:"+k+"; }"),y.styleSheet?y.styleSheet.cssText=E.nodeValue:y.appendChild(E),G.insertBefore(y,G.firstChild),w=0,N=f.length+h.length;N>w;w++)S=f.length>w?f[w]:h[w-f.length],x=S.attributes.placeholder,x&&(x=x.nodeValue,x&&K.inArray(B,S.type)&&p(S));L=setInterval(function(){for(w=0,N=f.length+h.length;N>w;w++)S=f.length>w?f[w]:h[w-f.length],x=S.attributes.placeholder,x?(x=x.nodeValue,x&&K.inArray(B,S.type)&&(S.getAttribute(j)||p(S),(x!==S.getAttribute(V)||"password"===S.type&&!S.getAttribute(D))&&("password"===S.type&&!S.getAttribute(D)&&K.changeType(S,"text")&&S.setAttribute(D,"password"),S.value===S.getAttribute(V)&&(S.value=x),S.setAttribute(V,x)))):S.getAttribute(P)&&(n(S),S.removeAttribute(V));m||clearInterval(L)},100)}K.addEventListener(t,"beforeunload",function(){J.disable()}),J.disable=J.nativeSupport?e:i,J.enable=J.nativeSupport?e:l}(this),function(t){"use strict";var e=t.fn.val,r=t.fn.prop;Placeholders.nativeSupport||(t.fn.val=function(t){var r=e.apply(this,arguments),n=this.eq(0).data("placeholder-value");return void 0===t&&this.eq(0).data("placeholder-active")&&r===n?"":r},t.fn.prop=function(t,e){return void 0===e&&this.eq(0).data("placeholder-active")&&"value"===t?"":r.apply(this,arguments)})}(jQuery);
/******************************** Starts Placeholders.js v3.0.2 ********************************/

/******************************* FullCalendar starts ****************************/
/*!
 * FullCalendar v1.6.2
 * Docs & License: http://arshaw.com/fullcalendar/
 * (c) 2013 Adam Shaw
 */

/*
 * Use fullcalendar.css for basic styling.
 * For event drag & drop, requires jQuery UI draggable.
 * For event resizing, requires jQuery UI resizable.
 */
 
(function($, undefined) {
;;

var defaults = {

	// display
	defaultView: 'month',
	aspectRatio: 1.35,
	header: {
		left: 'title',
		center: '',
		right: 'today prev,next'
	},
	weekends: true,
	weekNumbers: false,
	weekNumberCalculation: 'iso',
	weekNumberTitle: 'W',
	
	// editing
	//editable: false,
	//disableDragging: false,
	//disableResizing: false,
	
	allDayDefault: true,
	ignoreTimezone: true,
	
	// event ajax
	lazyFetching: true,
	startParam: 'start',
	endParam: 'end',
	
	// time formats
	titleFormat: {
		month: 'MMMM yyyy',
		week: "MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}",
		day: 'dddd, MMM d, yyyy'
	},
	columnFormat: {
		month: 'ddd',
		week: 'ddd M/d',
		day: 'dddd M/d'
	},
	timeFormat: { // for event elements
		'': 'h(:mm)t' // default
	},
	
	// locale
	isRTL: false,
	firstDay: 0,
	monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
	dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
	dayNamesShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
	buttonText: {
		prev: "<span class='fc-text-arrow'>&lsaquo;</span>",
		next: "<span class='fc-text-arrow'>&rsaquo;</span>",
		prevYear: "<span class='fc-text-arrow'>&laquo;</span>",
		nextYear: "<span class='fc-text-arrow'>&raquo;</span>",
		today: 'today',
		month: 'month',
		week: 'week',
		day: 'day'
	},
	
	// jquery-ui theming
	theme: false,
	buttonIcons: {
		prev: 'circle-triangle-w',
		next: 'circle-triangle-e'
	},
	
	//selectable: false,
	unselectAuto: true,
	
	dropAccept: '*'
	
};

// right-to-left defaults
var rtlDefaults = {
	header: {
		left: 'next,prev today',
		center: '',
		right: 'title'
	},
	buttonText: {
		prev: "<span class='fc-text-arrow'>&rsaquo;</span>",
		next: "<span class='fc-text-arrow'>&lsaquo;</span>",
		prevYear: "<span class='fc-text-arrow'>&raquo;</span>",
		nextYear: "<span class='fc-text-arrow'>&laquo;</span>"
	},
	buttonIcons: {
		prev: 'circle-triangle-e',
		next: 'circle-triangle-w'
	}
};



;;

var fc = $.fullCalendar = { version: "1.6.2" };
var fcViews = fc.views = {};


$.fn.fullCalendar = function(options) {


	// method calling
	if (typeof options == 'string') {
		var args = Array.prototype.slice.call(arguments, 1);
		var res;
		this.each(function() {
			var calendar = $.data(this, 'fullCalendar');
			if (calendar && $.isFunction(calendar[options])) {
				var r = calendar[options].apply(calendar, args);
				if (res === undefined) {
					res = r;
				}
				if (options == 'destroy') {
					$.removeData(this, 'fullCalendar');
				}
			}
		});
		if (res !== undefined) {
			return res;
		}
		return this;
	}
	
	
	// would like to have this logic in EventManager, but needs to happen before options are recursively extended
	var eventSources = options.eventSources || [];
	delete options.eventSources;
	if (options.events) {
		eventSources.push(options.events);
		delete options.events;
	}
	

	options = $.extend(true, {},
		defaults,
		(options.isRTL || options.isRTL===undefined && defaults.isRTL) ? rtlDefaults : {},
		options
	);
	
	
	this.each(function(i, _element) {
		var element = $(_element);
		var calendar = new Calendar(element, options, eventSources);
		element.data('fullCalendar', calendar); // TODO: look into memory leak implications
		calendar.render();
	});
	
	
	return this;
	
};


// function for adding/overriding defaults
function setDefaults(d) {
	$.extend(true, defaults, d);
}



;;

 
function Calendar(element, options, eventSources) {
	var t = this;
	
	
	// exports
	t.options = options;
	t.render = render;
	t.destroy = destroy;
	t.refetchEvents = refetchEvents;
	t.reportEvents = reportEvents;
	t.reportEventChange = reportEventChange;
	t.rerenderEvents = rerenderEvents;
	t.changeView = changeView;
	t.select = select;
	t.unselect = unselect;
	t.prev = prev;
	t.next = next;
	t.prevYear = prevYear;
	t.nextYear = nextYear;
	t.today = today;
	t.gotoDate = gotoDate;
	t.incrementDate = incrementDate;
	t.formatDate = function(format, date) { return formatDate(format, date, options) };
	t.formatDates = function(format, date1, date2) { return formatDates(format, date1, date2, options) };
	t.getDate = getDate;
	t.getView = getView;
	t.option = option;
	t.trigger = trigger;
	
	
	// imports
	EventManager.call(t, options, eventSources);
	var isFetchNeeded = t.isFetchNeeded;
	var fetchEvents = t.fetchEvents;
	
	
	// locals
	var _element = element[0];
	var header;
	var headerElement;
	var content;
	var tm; // for making theme classes
	var currentView;
	var viewInstances = {};
	var elementOuterWidth;
	var suggestedViewHeight;
	var absoluteViewElement;
	var resizeUID = 0;
	var ignoreWindowResize = 0;
	var date = new Date();
	var events = [];
	var _dragElement;
	
	
	
	/* Main Rendering
	-----------------------------------------------------------------------------*/
	
	
	setYMD(date, options.year, options.month, options.date);
	
	
	function render(inc) {
		if (!content) {
			initialRender();
		}else{
			calcSize();
			markSizesDirty();
			markEventsDirty();
			renderView(inc);
		}
	}
	
	
	function initialRender() {
		tm = options.theme ? 'ui' : 'fc';
		element.addClass('fc');
		if (options.isRTL) {
			element.addClass('fc-rtl');
		}
		else {
			element.addClass('fc-ltr');
		}
		if (options.theme) {
			element.addClass('ui-widget');
		}
		content = $("<div class='fc-content' style='position:relative'/>")
			.prependTo(element);
		header = new Header(t, options);
		headerElement = header.render();
		if (headerElement) {
			element.prepend(headerElement);
		}
		changeView(options.defaultView);
		$(window).resize(windowResize);
		// needed for IE in a 0x0 iframe, b/c when it is resized, never triggers a windowResize
		if (!bodyVisible()) {
			lateRender();
		}
	}
	
	
	// called when we know the calendar couldn't be rendered when it was initialized,
	// but we think it's ready now
	function lateRender() {
		setTimeout(function() { // IE7 needs this so dimensions are calculated correctly
			if (!currentView.start && bodyVisible()) { // !currentView.start makes sure this never happens more than once
				renderView();
			}
		},0);
	}
	
	
	function destroy() {
		$(window).unbind('resize', windowResize);
		header.destroy();
		content.remove();
		element.removeClass('fc fc-rtl ui-widget');
	}
	
	
	
	function elementVisible() {
		return _element.offsetWidth !== 0;
	}
	
	
	function bodyVisible() {
		return $('body')[0].offsetWidth !== 0;
	}
	
	
	
	/* View Rendering
	-----------------------------------------------------------------------------*/
	
	// TODO: improve view switching (still weird transition in IE, and FF has whiteout problem)
	
	function changeView(newViewName) {
		if (!currentView || newViewName != currentView.name) {
			ignoreWindowResize++; // because setMinHeight might change the height before render (and subsequently setSize) is reached

			unselect();
			
			var oldView = currentView;
			var newViewElement;
				
			if (oldView) {
				(oldView.beforeHide || noop)(); // called before changing min-height. if called after, scroll state is reset (in Opera)
				setMinHeight(content, content.height());
				oldView.element.hide();
			}else{
				setMinHeight(content, 1); // needs to be 1 (not 0) for IE7, or else view dimensions miscalculated
			}
			content.css('overflow', 'hidden');
			
			currentView = viewInstances[newViewName];
			if (currentView) {
				currentView.element.show();
			}else{
				currentView = viewInstances[newViewName] = new fcViews[newViewName](
					newViewElement = absoluteViewElement =
						$("<div class='fc-view fc-view-" + newViewName + "' style='position:absolute'/>")
							.appendTo(content),
					t // the calendar object
				);
			}
			
			if (oldView) {
				header.deactivateButton(oldView.name);
			}
			header.activateButton(newViewName);
			
			renderView(); // after height has been set, will make absoluteViewElement's position=relative, then set to null
			
			content.css('overflow', '');
			if (oldView) {
				setMinHeight(content, 1);
			}
			
			if (!newViewElement) {
				(currentView.afterShow || noop)(); // called after setting min-height/overflow, so in final scroll state (for Opera)
			}
			
			ignoreWindowResize--;
		}
	}
	
	
	
	function renderView(inc) {
		if (elementVisible()) {
			ignoreWindowResize++; // because renderEvents might temporarily change the height before setSize is reached

			unselect();
			
			if (suggestedViewHeight === undefined) {
				calcSize();
			}
			
			var forceEventRender = false;
			if (!currentView.start || inc || date < currentView.start || date >= currentView.end) {
				// view must render an entire new date range (and refetch/render events)
				currentView.render(date, inc || 0); // responsible for clearing events
				setSize(true);
				forceEventRender = true;
			}
			else if (currentView.sizeDirty) {
				// view must resize (and rerender events)
				currentView.clearEvents();
				setSize();
				forceEventRender = true;
			}
			else if (currentView.eventsDirty) {
				currentView.clearEvents();
				forceEventRender = true;
			}
			currentView.sizeDirty = false;
			currentView.eventsDirty = false;
			updateEvents(forceEventRender);
			
			elementOuterWidth = element.outerWidth();
			
			header.updateTitle(currentView.title);
			var today = new Date();
			if (today >= currentView.start && today < currentView.end) {
				header.disableButton('today');
			}else{
				header.enableButton('today');
			}
			
			ignoreWindowResize--;
			currentView.trigger('viewDisplay', _element);
		}
	}
	
	
	
	/* Resizing
	-----------------------------------------------------------------------------*/
	
	
	function updateSize() {
		markSizesDirty();
		if (elementVisible()) {
			calcSize();
			setSize();
			unselect();
			currentView.clearEvents();
			currentView.renderEvents(events);
			currentView.sizeDirty = false;
		}
	}
	
	
	function markSizesDirty() {
		$.each(viewInstances, function(i, inst) {
			inst.sizeDirty = true;
		});
	}
	
	
	function calcSize() {
		if (options.contentHeight) {
			suggestedViewHeight = options.contentHeight;
		}
		else if (options.height) {
			suggestedViewHeight = options.height - (headerElement ? headerElement.height() : 0) - vsides(content);
		}
		else {
			suggestedViewHeight = Math.round(content.width() / Math.max(options.aspectRatio, .5));
		}
	}
	
	
	function setSize(dateChanged) { // todo: dateChanged?
		ignoreWindowResize++;
		currentView.setHeight(suggestedViewHeight, dateChanged);
		if (absoluteViewElement) {
			absoluteViewElement.css('position', 'relative');
			absoluteViewElement = null;
		}
		currentView.setWidth(content.width(), dateChanged);
		ignoreWindowResize--;
	}
	
	
	function windowResize() {
		if (!ignoreWindowResize) {
			if (currentView.start) { // view has already been rendered
				var uid = ++resizeUID;
				setTimeout(function() { // add a delay
					if (uid == resizeUID && !ignoreWindowResize && elementVisible()) {
						if (elementOuterWidth != (elementOuterWidth = element.outerWidth())) {
							ignoreWindowResize++; // in case the windowResize callback changes the height
							updateSize();
							currentView.trigger('windowResize', _element);
							ignoreWindowResize--;
						}
					}
				}, 200);
			}else{
				// calendar must have been initialized in a 0x0 iframe that has just been resized
				lateRender();
			}
		}
	}
	
	
	
	/* Event Fetching/Rendering
	-----------------------------------------------------------------------------*/
	
	
	// fetches events if necessary, rerenders events if necessary (or if forced)
	function updateEvents(forceRender) {
		if (!options.lazyFetching || isFetchNeeded(currentView.visStart, currentView.visEnd)) {
			refetchEvents();
		}
		else if (forceRender) {
			rerenderEvents();
		}
	}
	
	
	function refetchEvents() {
		fetchEvents(currentView.visStart, currentView.visEnd); // will call reportEvents
	}
	
	
	// called when event data arrives
	function reportEvents(_events) {
		events = _events;
		rerenderEvents();
	}
	
	
	// called when a single event's data has been changed
	function reportEventChange(eventID) {
		rerenderEvents(eventID);
	}
	
	
	// attempts to rerenderEvents
	function rerenderEvents(modifiedEventID) {
		markEventsDirty();
		if (elementVisible()) {
			currentView.clearEvents();
			currentView.renderEvents(events, modifiedEventID);
			currentView.eventsDirty = false;
		}
	}
	
	
	function markEventsDirty() {
		$.each(viewInstances, function(i, inst) {
			inst.eventsDirty = true;
		});
	}
	


	/* Selection
	-----------------------------------------------------------------------------*/
	

	function select(start, end, allDay) {
		currentView.select(start, end, allDay===undefined ? true : allDay);
	}
	

	function unselect() { // safe to be called before renderView
		if (currentView) {
			currentView.unselect();
		}
	}
	
	
	
	/* Date
	-----------------------------------------------------------------------------*/
	
	
	function prev() {
		renderView(-1);
	}
	
	
	function next() {
		renderView(1);
	}
	
	
	function prevYear() {
		addYears(date, -1);
		renderView();
	}
	
	
	function nextYear() {
		addYears(date, 1);
		renderView();
	}
	
	
	function today() {
		date = new Date();
		renderView();
	}
	
	
	function gotoDate(year, month, dateOfMonth) {
		if (year instanceof Date) {
			date = cloneDate(year); // provided 1 argument, a Date
		}else{
			setYMD(date, year, month, dateOfMonth);
		}
		renderView();
	}
	
	
	function incrementDate(years, months, days) {
		if (years !== undefined) {
			addYears(date, years);
		}
		if (months !== undefined) {
			addMonths(date, months);
		}
		if (days !== undefined) {
			addDays(date, days);
		}
		renderView();
	}
	
	
	function getDate() {
		return cloneDate(date);
	}
	
	
	
	/* Misc
	-----------------------------------------------------------------------------*/
	
	
	function getView() {
		return currentView;
	}
	
	
	function option(name, value) {
		if (value === undefined) {
			return options[name];
		}
		if (name == 'height' || name == 'contentHeight' || name == 'aspectRatio') {
			options[name] = value;
			updateSize();
		}
	}
	
	
	function trigger(name, thisObj) {
		if (options[name]) {
			return options[name].apply(
				thisObj || _element,
				Array.prototype.slice.call(arguments, 2)
			);
		}
	}
	
	
	
	/* External Dragging
	------------------------------------------------------------------------*/
	
	if (options.droppable) {
		$(document)
			.bind('dragstart', function(ev, ui) {
				var _e = ev.target;
				var e = $(_e);
				if (!e.parents('.fc').length) { // not already inside a calendar
					var accept = options.dropAccept;
					if ($.isFunction(accept) ? accept.call(_e, e) : e.is(accept)) {
						_dragElement = _e;
						currentView.dragStart(_dragElement, ev, ui);
					}
				}
			})
			.bind('dragstop', function(ev, ui) {
				if (_dragElement) {
					currentView.dragStop(_dragElement, ev, ui);
					_dragElement = null;
				}
			});
	}
	

}

;;

function Header(calendar, options) {
	var t = this;
	
	
	// exports
	t.render = render;
	t.destroy = destroy;
	t.updateTitle = updateTitle;
	t.activateButton = activateButton;
	t.deactivateButton = deactivateButton;
	t.disableButton = disableButton;
	t.enableButton = enableButton;
	
	
	// locals
	var element = $([]);
	var tm;
	


	function render() {
		tm = options.theme ? 'ui' : 'fc';
		var sections = options.header;
		if (sections) {
			element = $("<table class='fc-header' style='width:100%'/>")
				.append(
					$("<tr/>")
						.append(renderSection('left'))
						.append(renderSection('center'))
						.append(renderSection('right'))
				);
			return element;
		}
	}
	
	
	function destroy() {
		element.remove();
	}
	
	
	function renderSection(position) {
		var e = $("<td class='fc-header-" + position + "'/>");
		var buttonStr = options.header[position];
		if (buttonStr) {
			$.each(buttonStr.split(' '), function(i) {
				if (i > 0) {
					e.append("<span class='fc-header-space'/>");
				}
				var prevButton;
				$.each(this.split(','), function(j, buttonName) {
					if (buttonName == 'title') {
						e.append("<span class='fc-header-title'><h2>&nbsp;</h2></span>");
						if (prevButton) {
							prevButton.addClass(tm + '-corner-right');
						}
						prevButton = null;
					}else{
						var buttonClick;
						if (calendar[buttonName]) {
							buttonClick = calendar[buttonName]; // calendar method
						}
						else if (fcViews[buttonName]) {
							buttonClick = function() {
								button.removeClass(tm + '-state-hover'); // forget why
								calendar.changeView(buttonName);
							};
						}
						if (buttonClick) {
							var icon = options.theme ? smartProperty(options.buttonIcons, buttonName) : null; // why are we using smartProperty here?
							var text = smartProperty(options.buttonText, buttonName); // why are we using smartProperty here?
							var button = $(
								"<span class='fc-button fc-button-" + buttonName + " " + tm + "-state-default'>" +
									(icon ?
										"<span class='fc-icon-wrap'>" +
											"<span class='ui-icon ui-icon-" + icon + "'/>" +
										"</span>" :
										text
										) +
								"</span>"
								)
								.click(function() {
									if (!button.hasClass(tm + '-state-disabled')) {
										buttonClick();
									}
								})
								.mousedown(function() {
									button
										.not('.' + tm + '-state-active')
										.not('.' + tm + '-state-disabled')
										.addClass(tm + '-state-down');
								})
								.mouseup(function() {
									button.removeClass(tm + '-state-down');
								})
								.hover(
									function() {
										button
											.not('.' + tm + '-state-active')
											.not('.' + tm + '-state-disabled')
											.addClass(tm + '-state-hover');
									},
									function() {
										button
											.removeClass(tm + '-state-hover')
											.removeClass(tm + '-state-down');
									}
								)
								.appendTo(e);
							disableTextSelection(button);
							if (!prevButton) {
								button.addClass(tm + '-corner-left');
							}
							prevButton = button;
						}
					}
				});
				if (prevButton) {
					prevButton.addClass(tm + '-corner-right');
				}
			});
		}
		return e;
	}
	
	
	function updateTitle(html) {
		element.find('h2')
			.html(html);
	}
	
	
	function activateButton(buttonName) {
		element.find('span.fc-button-' + buttonName)
			.addClass(tm + '-state-active');
	}
	
	
	function deactivateButton(buttonName) {
		element.find('span.fc-button-' + buttonName)
			.removeClass(tm + '-state-active');
	}
	
	
	function disableButton(buttonName) {
		element.find('span.fc-button-' + buttonName)
			.addClass(tm + '-state-disabled');
	}
	
	
	function enableButton(buttonName) {
		element.find('span.fc-button-' + buttonName)
			.removeClass(tm + '-state-disabled');
	}


}

;;

fc.sourceNormalizers = [];
fc.sourceFetchers = [];

var ajaxDefaults = {
	dataType: 'json',
	cache: false
};

var eventGUID = 1;


function EventManager(options, _sources) {
	var t = this;
	
	
	// exports
	t.isFetchNeeded = isFetchNeeded;
	t.fetchEvents = fetchEvents;
	t.addEventSource = addEventSource;
	t.removeEventSource = removeEventSource;
	t.updateEvent = updateEvent;
	t.renderEvent = renderEvent;
	t.removeEvents = removeEvents;
	t.clientEvents = clientEvents;
	t.normalizeEvent = normalizeEvent;
	
	
	// imports
	var trigger = t.trigger;
	var getView = t.getView;
	var reportEvents = t.reportEvents;
	
	
	// locals
	var stickySource = { events: [] };
	var sources = [ stickySource ];
	var rangeStart, rangeEnd;
	var currentFetchID = 0;
	var pendingSourceCnt = 0;
	var loadingLevel = 0;
	var cache = [];
	
	
	for (var i=0; i<_sources.length; i++) {
		_addEventSource(_sources[i]);
	}
	
	
	
	/* Fetching
	-----------------------------------------------------------------------------*/
	
	
	function isFetchNeeded(start, end) {
		return !rangeStart || start < rangeStart || end > rangeEnd;
	}
	
	
	function fetchEvents(start, end) {
		rangeStart = start;
		rangeEnd = end;
		cache = [];
		var fetchID = ++currentFetchID;
		var len = sources.length;
		pendingSourceCnt = len;
		for (var i=0; i<len; i++) {
			fetchEventSource(sources[i], fetchID);
		}
	}
	
	
	function fetchEventSource(source, fetchID) {
		_fetchEventSource(source, function(events) {
			if (fetchID == currentFetchID) {
				if (events) {

					if (options.eventDataTransform) {
						events = $.map(events, options.eventDataTransform);
					}
					if (source.eventDataTransform) {
						events = $.map(events, source.eventDataTransform);
					}
					// TODO: this technique is not ideal for static array event sources.
					//  For arrays, we'll want to process all events right in the beginning, then never again.
				
					for (var i=0; i<events.length; i++) {
						events[i].source = source;
						normalizeEvent(events[i]);
					}
					cache = cache.concat(events);
				}
				pendingSourceCnt--;
				if (!pendingSourceCnt) {
					reportEvents(cache);
				}
			}
		});
	}
	
	
	function _fetchEventSource(source, callback) {
		var i;
		var fetchers = fc.sourceFetchers;
		var res;
		for (i=0; i<fetchers.length; i++) {
			res = fetchers[i](source, rangeStart, rangeEnd, callback);
			if (res === true) {
				// the fetcher is in charge. made its own async request
				return;
			}
			else if (typeof res == 'object') {
				// the fetcher returned a new source. process it
				_fetchEventSource(res, callback);
				return;
			}
		}
		var events = source.events;
		if (events) {
			if ($.isFunction(events)) {
				pushLoading();
				events(cloneDate(rangeStart), cloneDate(rangeEnd), function(events) {
					callback(events);
					popLoading();
				});
			}
			else if ($.isArray(events)) {
				callback(events);
			}
			else {
				callback();
			}
		}else{
			var url = source.url;
			if (url) {
				var success = source.success;
				var error = source.error;
				var complete = source.complete;
				var data = $.extend({}, source.data || {});
				var startParam = firstDefined(source.startParam, options.startParam);
				var endParam = firstDefined(source.endParam, options.endParam);
				if (startParam) {
					data[startParam] = Math.round(+rangeStart / 1000);
				}
				if (endParam) {
					data[endParam] = Math.round(+rangeEnd / 1000);
				}
				pushLoading();
				$.ajax($.extend({}, ajaxDefaults, source, {
					data: data,
					success: function(events) {
						events = events || [];
						var res = applyAll(success, this, arguments);
						if ($.isArray(res)) {
							events = res;
						}
						callback(events);
					},
					error: function() {
						applyAll(error, this, arguments);
						callback();
					},
					complete: function() {
						applyAll(complete, this, arguments);
						popLoading();
					}
				}));
			}else{
				callback();
			}
		}
	}
	
	
	
	/* Sources
	-----------------------------------------------------------------------------*/
	

	function addEventSource(source) {
		source = _addEventSource(source);
		if (source) {
			pendingSourceCnt++;
			fetchEventSource(source, currentFetchID); // will eventually call reportEvents
		}
	}
	
	
	function _addEventSource(source) {
		if ($.isFunction(source) || $.isArray(source)) {
			source = { events: source };
		}
		else if (typeof source == 'string') {
			source = { url: source };
		}
		if (typeof source == 'object') {
			normalizeSource(source);
			sources.push(source);
			return source;
		}
	}
	

	function removeEventSource(source) {
		sources = $.grep(sources, function(src) {
			return !isSourcesEqual(src, source);
		});
		// remove all client events from that source
		cache = $.grep(cache, function(e) {
			return !isSourcesEqual(e.source, source);
		});
		reportEvents(cache);
	}
	
	
	
	/* Manipulation
	-----------------------------------------------------------------------------*/
	
	
	function updateEvent(event) { // update an existing event
		var i, len = cache.length, e,
			defaultEventEnd = getView().defaultEventEnd, // getView???
			startDelta = event.start - event._start,
			endDelta = event.end ?
				(event.end - (event._end || defaultEventEnd(event))) // event._end would be null if event.end
				: 0;                                                      // was null and event was just resized
		for (i=0; i<len; i++) {
			e = cache[i];
			if (e._id == event._id && e != event) {
				e.start = new Date(+e.start + startDelta);
				if (event.end) {
					if (e.end) {
						e.end = new Date(+e.end + endDelta);
					}else{
						e.end = new Date(+defaultEventEnd(e) + endDelta);
					}
				}else{
					e.end = null;
				}
				e.title = event.title;
				e.url = event.url;
				e.allDay = event.allDay;
				e.className = event.className;
				e.editable = event.editable;
				e.color = event.color;
				e.backgroundColor = event.backgroundColor;
				e.borderColor = event.borderColor;
				e.textColor = event.textColor;
				normalizeEvent(e);
			}
		}
		normalizeEvent(event);
		reportEvents(cache);
	}
	
	
	function renderEvent(event, stick) {
		normalizeEvent(event);
		if (!event.source) {
			if (stick) {
				stickySource.events.push(event);
				event.source = stickySource;
			}
			cache.push(event);
		}
		reportEvents(cache);
	}
	
	
	function removeEvents(filter) {
		if (!filter) { // remove all
			cache = [];
			// clear all array sources
			for (var i=0; i<sources.length; i++) {
				if ($.isArray(sources[i].events)) {
					sources[i].events = [];
				}
			}
		}else{
			if (!$.isFunction(filter)) { // an event ID
				var id = filter + '';
				filter = function(e) {
					return e._id == id;
				};
			}
			cache = $.grep(cache, filter, true);
			// remove events from array sources
			for (var i=0; i<sources.length; i++) {
				if ($.isArray(sources[i].events)) {
					sources[i].events = $.grep(sources[i].events, filter, true);
				}
			}
		}
		reportEvents(cache);
	}
	
	
	function clientEvents(filter) {
		if ($.isFunction(filter)) {
			return $.grep(cache, filter);
		}
		else if (filter) { // an event ID
			filter += '';
			return $.grep(cache, function(e) {
				return e._id == filter;
			});
		}
		return cache; // else, return all
	}
	
	
	
	/* Loading State
	-----------------------------------------------------------------------------*/
	
	
	function pushLoading() {
		if (!loadingLevel++) {
			trigger('loading', null, true);
		}
	}
	
	
	function popLoading() {
		if (!--loadingLevel) {
			trigger('loading', null, false);
		}
	}
	
	
	
	/* Event Normalization
	-----------------------------------------------------------------------------*/
	
	
	function normalizeEvent(event) {
		var source = event.source || {};
		var ignoreTimezone = firstDefined(source.ignoreTimezone, options.ignoreTimezone);
		event._id = event._id || (event.id === undefined ? '_fc' + eventGUID++ : event.id + '');
		if (event.date) {
			if (!event.start) {
				event.start = event.date;
			}
			delete event.date;
		}
		event._start = cloneDate(event.start = parseDate(event.start, ignoreTimezone));
		event.end = parseDate(event.end, ignoreTimezone);
		if (event.end && event.end <= event.start) {
			event.end = null;
		}
		event._end = event.end ? cloneDate(event.end) : null;
		if (event.allDay === undefined) {
			event.allDay = firstDefined(source.allDayDefault, options.allDayDefault);
		}
		if (event.className) {
			if (typeof event.className == 'string') {
				event.className = event.className.split(/\s+/);
			}
		}else{
			event.className = [];
		}
		// TODO: if there is no start date, return false to indicate an invalid event
	}
	
	
	
	/* Utils
	------------------------------------------------------------------------------*/
	
	
	function normalizeSource(source) {
		if (source.className) {
			// TODO: repeat code, same code for event classNames
			if (typeof source.className == 'string') {
				source.className = source.className.split(/\s+/);
			}
		}else{
			source.className = [];
		}
		var normalizers = fc.sourceNormalizers;
		for (var i=0; i<normalizers.length; i++) {
			normalizers[i](source);
		}
	}
	
	
	function isSourcesEqual(source1, source2) {
		return source1 && source2 && getSourcePrimitive(source1) == getSourcePrimitive(source2);
	}
	
	
	function getSourcePrimitive(source) {
		return ((typeof source == 'object') ? (source.events || source.url) : '') || source;
	}


}

;;


fc.addDays = addDays;
fc.cloneDate = cloneDate;
fc.parseDate = parseDate;
fc.parseISO8601 = parseISO8601;
fc.parseTime = parseTime;
fc.formatDate = formatDate;
fc.formatDates = formatDates;



/* Date Math
-----------------------------------------------------------------------------*/

var dayIDs = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
	DAY_MS = 86400000,
	HOUR_MS = 3600000,
	MINUTE_MS = 60000;
	

function addYears(d, n, keepTime) {
	d.setFullYear(d.getFullYear() + n);
	if (!keepTime) {
		clearTime(d);
	}
	return d;
}


function addMonths(d, n, keepTime) { // prevents day overflow/underflow
	if (+d) { // prevent infinite looping on invalid dates
		var m = d.getMonth() + n,
			check = cloneDate(d);
		check.setDate(1);
		check.setMonth(m);
		d.setMonth(m);
		if (!keepTime) {
			clearTime(d);
		}
		while (d.getMonth() != check.getMonth()) {
			d.setDate(d.getDate() + (d < check ? 1 : -1));
		}
	}
	return d;
}


function addDays(d, n, keepTime) { // deals with daylight savings
	if (+d) {
		var dd = d.getDate() + n,
			check = cloneDate(d);
		check.setHours(9); // set to middle of day
		check.setDate(dd);
		d.setDate(dd);
		if (!keepTime) {
			clearTime(d);
		}
		fixDate(d, check);
	}
	return d;
}


function fixDate(d, check) { // force d to be on check's YMD, for daylight savings purposes
	if (+d) { // prevent infinite looping on invalid dates
		while (d.getDate() != check.getDate()) {
			d.setTime(+d + (d < check ? 1 : -1) * HOUR_MS);
		}
	}
}


function addMinutes(d, n) {
	d.setMinutes(d.getMinutes() + n);
	return d;
}


function clearTime(d) {
	d.setHours(0);
	d.setMinutes(0);
	d.setSeconds(0); 
	d.setMilliseconds(0);
	return d;
}


function cloneDate(d, dontKeepTime) {
	if (dontKeepTime) {
		return clearTime(new Date(+d));
	}
	return new Date(+d);
}


function zeroDate() { // returns a Date with time 00:00:00 and dateOfMonth=1
	var i=0, d;
	do {
		d = new Date(1970, i++, 1);
	} while (d.getHours()); // != 0
	return d;
}


function dayDiff(d1, d2) { // d1 - d2
	return Math.round((cloneDate(d1, true) - cloneDate(d2, true)) / DAY_MS);
}


function setYMD(date, y, m, d) {
	if (y !== undefined && y != date.getFullYear()) {
		date.setDate(1);
		date.setMonth(0);
		date.setFullYear(y);
	}
	if (m !== undefined && m != date.getMonth()) {
		date.setDate(1);
		date.setMonth(m);
	}
	if (d !== undefined) {
		date.setDate(d);
	}
}



/* Date Parsing
-----------------------------------------------------------------------------*/


function parseDate(s, ignoreTimezone) { // ignoreTimezone defaults to true
	if (typeof s == 'object') { // already a Date object
		return s;
	}
	if (typeof s == 'number') { // a UNIX timestamp
		return new Date(s * 1000);
	}
	if (typeof s == 'string') {
		if (s.match(/^\d+(\.\d+)?$/)) { // a UNIX timestamp
			return new Date(parseFloat(s) * 1000);
		}
		if (ignoreTimezone === undefined) {
			ignoreTimezone = true;
		}
		return parseISO8601(s, ignoreTimezone) || (s ? new Date(s) : null);
	}
	// TODO: never return invalid dates (like from new Date(<string>)), return null instead
	return null;
}


function parseISO8601(s, ignoreTimezone) { // ignoreTimezone defaults to false
	// derived from http://delete.me.uk/2005/03/iso8601.html
	// TODO: for a know glitch/feature, read tests/issue_206_parseDate_dst.html
	var m = s.match(/^([0-9]{4})(-([0-9]{2})(-([0-9]{2})([T ]([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/);
	if (!m) {
		return null;
	}
	var date = new Date(m[1], 0, 1);
	if (ignoreTimezone || !m[13]) {
		var check = new Date(m[1], 0, 1, 9, 0);
		if (m[3]) {
			date.setMonth(m[3] - 1);
			check.setMonth(m[3] - 1);
		}
		if (m[5]) {
			date.setDate(m[5]);
			check.setDate(m[5]);
		}
		fixDate(date, check);
		if (m[7]) {
			date.setHours(m[7]);
		}
		if (m[8]) {
			date.setMinutes(m[8]);
		}
		if (m[10]) {
			date.setSeconds(m[10]);
		}
		if (m[12]) {
			date.setMilliseconds(Number("0." + m[12]) * 1000);
		}
		fixDate(date, check);
	}else{
		date.setUTCFullYear(
			m[1],
			m[3] ? m[3] - 1 : 0,
			m[5] || 1
		);
		date.setUTCHours(
			m[7] || 0,
			m[8] || 0,
			m[10] || 0,
			m[12] ? Number("0." + m[12]) * 1000 : 0
		);
		if (m[14]) {
			var offset = Number(m[16]) * 60 + (m[18] ? Number(m[18]) : 0);
			offset *= m[15] == '-' ? 1 : -1;
			date = new Date(+date + (offset * 60 * 1000));
		}
	}
	return date;
}


function parseTime(s) { // returns minutes since start of day
	if (typeof s == 'number') { // an hour
		return s * 60;
	}
	if (typeof s == 'object') { // a Date object
		return s.getHours() * 60 + s.getMinutes();
	}
	var m = s.match(/(\d+)(?::(\d+))?\s*(\w+)?/);
	if (m) {
		var h = parseInt(m[1], 10);
		if (m[3]) {
			h %= 12;
			if (m[3].toLowerCase().charAt(0) == 'p') {
				h += 12;
			}
		}
		return h * 60 + (m[2] ? parseInt(m[2], 10) : 0);
	}
}



/* Date Formatting
-----------------------------------------------------------------------------*/
// TODO: use same function formatDate(date, [date2], format, [options])


function formatDate(date, format, options) {
	return formatDates(date, null, format, options);
}


function formatDates(date1, date2, format, options) {
	options = options || defaults;
	var date = date1,
		otherDate = date2,
		i, len = format.length, c,
		i2, formatter,
		res = '';

	for (i=0; i<len; i++) {
		c = format.charAt(i);
		if (c == "'") {
			for (i2=i+1; i2<len; i2++) {
				if (format.charAt(i2) == "'") {
					if (date) {
						if (i2 == i+1) {
							res += "'";
						}else{
							res += format.substring(i+1, i2);
						}
						i = i2;
					}
					break;
				}
			}
		}
		else if (c == '(') {
			for (i2=i+1; i2<len; i2++) {
				if (format.charAt(i2) == ')') {
					var subres = formatDate(date, format.substring(i+1, i2), options);
					if (parseInt(subres.replace(/\D/, ''), 10)) {
						res += subres;
					}
					i = i2;
					break;
				}
			}
		}
		else if (c == '[') {
			for (i2=i+1; i2<len; i2++) {
				if (format.charAt(i2) == ']') {
					var subformat = format.substring(i+1, i2);
					var subres = formatDate(date, subformat, options);
					if (subres != formatDate(otherDate, subformat, options)) {
						res += subres;
					}
					i = i2;
					break;
				}
			}
		}
		else if (c == '{') {
			date = date2;
			otherDate = date1;
		}
		else if (c == '}') {
			date = date1;
			otherDate = date2;
		}
		else {
			for (i2=len; i2>i; i2--) {
				if (formatter = dateFormatters[format.substring(i, i2)]) {
					if (date) {
						res += formatter(date, options);
					}
					i = i2 - 1;
					break;
				}
			}
			if (i2 == i) {
				if (date) {
					res += c;
				}
			}
				
		}
	}
	return res;
};


var dateFormatters = {
	s	: function(d)	{ return d.getSeconds() },
	ss	: function(d)	{ return zeroPad(d.getSeconds()) },
	m	: function(d)	{ return d.getMinutes() },
	mm	: function(d)	{ return zeroPad(d.getMinutes()) },
	h	: function(d)	{ return d.getHours() % 12 || 12 },
	hh	: function(d)	{ return zeroPad(d.getHours() % 12 || 12) },
	H	: function(d)	{ return d.getHours() },
	HH	: function(d)	{ return zeroPad(d.getHours()) },
	d	: function(d)	{ return d.getDate() },
	dd	: function(d)	{ return zeroPad(d.getDate()) },
	ddd	: function(d,o)	{ return o.dayNamesShort[d.getDay()] },
	dddd: function(d,o)	{ return o.dayNames[d.getDay()] },
	M	: function(d)	{ return d.getMonth() + 1 },
	MM	: function(d)	{ return zeroPad(d.getMonth() + 1) },
	MMM	: function(d,o)	{ return o.monthNamesShort[d.getMonth()] },
	MMMM: function(d,o)	{ return o.monthNames[d.getMonth()] },
	yy	: function(d)	{ return (d.getFullYear()+'').substring(2) },
	yyyy: function(d)	{ return d.getFullYear() },
	t	: function(d)	{ return d.getHours() < 12 ? 'am' : 'pm' },
	tt	: function(d)	{ return d.getHours() < 12 ? 'am' : 'pm' },
	T	: function(d)	{ return d.getHours() < 12 ? 'AM' : 'PM' },
	TT	: function(d)	{ return d.getHours() < 12 ? 'AM' : 'PM' },
	u	: function(d)	{ return formatDate(d, "yyyy-MM-dd'T'HH:mm:ss'Z'") },
	S	: function(d)	{
		var date = d.getDate();
		if (date > 10 && date < 20) {
			return 'th';
		}
		return ['st', 'nd', 'rd'][date%10-1] || 'th';
	},
	w   : function(d, o) { // local
		return o.weekNumberCalculation(d);
	},
	W   : function(d) { // ISO
		return iso8601Week(d);
	}
};
fc.dateFormatters = dateFormatters;


/* thanks jQuery UI (https://github.com/jquery/jquery-ui/blob/master/ui/jquery.ui.datepicker.js)
 * 
 * Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
 * `date` - the date to get the week for
 * `number` - the number of the week within the year that contains this date
 */
function iso8601Week(date) {
	var time;
	var checkDate = new Date(date.getTime());

	// Find Thursday of this week starting on Monday
	checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));

	time = checkDate.getTime();
	checkDate.setMonth(0); // Compare with Jan 1
	checkDate.setDate(1);
	return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
}


;;

fc.applyAll = applyAll;


/* Event Date Math
-----------------------------------------------------------------------------*/


function exclEndDay(event) {
	if (event.end) {
		return _exclEndDay(event.end, event.allDay);
	}else{
		return addDays(cloneDate(event.start), 1);
	}
}


function _exclEndDay(end, allDay) {
	end = cloneDate(end);
	return allDay || end.getHours() || end.getMinutes() ? addDays(end, 1) : clearTime(end);
	// why don't we check for seconds/ms too?
}



/* Event Element Binding
-----------------------------------------------------------------------------*/


function lazySegBind(container, segs, bindHandlers) {
	container.unbind('mouseover').mouseover(function(ev) {
		var parent=ev.target, e,
			i, seg;
		while (parent != this) {
			e = parent;
			parent = parent.parentNode;
		}
		if ((i = e._fci) !== undefined) {
			e._fci = undefined;
			seg = segs[i];
			bindHandlers(seg.event, seg.element, seg);
			$(ev.target).trigger(ev);
		}
		ev.stopPropagation();
	});
}



/* Element Dimensions
-----------------------------------------------------------------------------*/


function setOuterWidth(element, width, includeMargins) {
	for (var i=0, e; i<element.length; i++) {
		e = $(element[i]);
		e.width(Math.max(0, width - hsides(e, includeMargins)));
	}
}


function setOuterHeight(element, height, includeMargins) {
	for (var i=0, e; i<element.length; i++) {
		e = $(element[i]);
		e.height(Math.max(0, height - vsides(e, includeMargins)));
	}
}


function hsides(element, includeMargins) {
	return hpadding(element) + hborders(element) + (includeMargins ? hmargins(element) : 0);
}


function hpadding(element) {
	return (parseFloat($.css(element[0], 'paddingLeft', true)) || 0) +
	       (parseFloat($.css(element[0], 'paddingRight', true)) || 0);
}


function hmargins(element) {
	return (parseFloat($.css(element[0], 'marginLeft', true)) || 0) +
	       (parseFloat($.css(element[0], 'marginRight', true)) || 0);
}


function hborders(element) {
	return (parseFloat($.css(element[0], 'borderLeftWidth', true)) || 0) +
	       (parseFloat($.css(element[0], 'borderRightWidth', true)) || 0);
}


function vsides(element, includeMargins) {
	return vpadding(element) +  vborders(element) + (includeMargins ? vmargins(element) : 0);
}


function vpadding(element) {
	return (parseFloat($.css(element[0], 'paddingTop', true)) || 0) +
	       (parseFloat($.css(element[0], 'paddingBottom', true)) || 0);
}


function vmargins(element) {
	return (parseFloat($.css(element[0], 'marginTop', true)) || 0) +
	       (parseFloat($.css(element[0], 'marginBottom', true)) || 0);
}


function vborders(element) {
	return (parseFloat($.css(element[0], 'borderTopWidth', true)) || 0) +
	       (parseFloat($.css(element[0], 'borderBottomWidth', true)) || 0);
}


function setMinHeight(element, height) {
	height = (typeof height == 'number' ? height + 'px' : height);
	element.each(function(i, _element) {
		_element.style.cssText += ';min-height:' + height + ';_height:' + height;
		// why can't we just use .css() ? i forget
	});
}



/* Misc Utils
-----------------------------------------------------------------------------*/


//TODO: arraySlice
//TODO: isFunction, grep ?


function noop() { }


function dateCompare(a, b) {
	return a - b;
}


function arrayMax(a) {
	return Math.max.apply(Math, a);
}


function zeroPad(n) {
	return (n < 10 ? '0' : '') + n;
}


function smartProperty(obj, name) { // get a camel-cased/namespaced property of an object
	if (obj[name] !== undefined) {
		return obj[name];
	}
	var parts = name.split(/(?=[A-Z])/),
		i=parts.length-1, res;
	for (; i>=0; i--) {
		res = obj[parts[i].toLowerCase()];
		if (res !== undefined) {
			return res;
		}
	}
	return obj[''];
}


function htmlEscape(s) {
	/*
	return s.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/'/g, '&#039;')
			.replace(/"/g, '&quot;')
			.replace(/\n/g, '<br />');*/
return s;	
}


function disableTextSelection(element) {
	element
		.attr('unselectable', 'on')
		.css('MozUserSelect', 'none')
		.bind('selectstart.ui', function() { return false; });
}


/*
function enableTextSelection(element) {
	element
		.attr('unselectable', 'off')
		.css('MozUserSelect', '')
		.unbind('selectstart.ui');
}
*/


function markFirstLast(e) {
	e.children()
		.removeClass('fc-first fc-last')
		.filter(':first-child')
			.addClass('fc-first')
		.end()
		.filter(':last-child')
			.addClass('fc-last');
}


function setDayID(cell, date) {
	cell.each(function(i, _cell) {
		_cell.className = _cell.className.replace(/^fc-\w*/, 'fc-' + dayIDs[date.getDay()]);
		// TODO: make a way that doesn't rely on order of classes
	});
}


function getSkinCss(event, opt) {
	var source = event.source || {};
	var eventColor = event.color;
	var sourceColor = source.color;
	var optionColor = opt('eventColor');
	var backgroundColor =
		event.backgroundColor ||
		eventColor ||
		source.backgroundColor ||
		sourceColor ||
		opt('eventBackgroundColor') ||
		optionColor;
	var borderColor =
		event.borderColor ||
		eventColor ||
		source.borderColor ||
		sourceColor ||
		opt('eventBorderColor') ||
		optionColor;
	var textColor =
		event.textColor ||
		source.textColor ||
		opt('eventTextColor');
	var statements = [];
	if (backgroundColor) {
		statements.push('background-color:' + backgroundColor);
	}
	if (borderColor) {
		statements.push('border-color:' + borderColor);
	}
	if (textColor) {
		statements.push('color:' + textColor);
	}
	return statements.join(';');
}


function applyAll(functions, thisObj, args) {
	if ($.isFunction(functions)) {
		functions = [ functions ];
	}
	if (functions) {
		var i;
		var ret;
		for (i=0; i<functions.length; i++) {
			ret = functions[i].apply(thisObj, args) || ret;
		}
		return ret;
	}
}


function firstDefined() {
	for (var i=0; i<arguments.length; i++) {
		if (arguments[i] !== undefined) {
			return arguments[i];
		}
	}
}


;;

fcViews.month = MonthView;

function MonthView(element, calendar) {
	var t = this;
	
	
	// exports
	t.render = render;
	
	
	// imports
	BasicView.call(t, element, calendar, 'month');
	var opt = t.opt;
	var renderBasic = t.renderBasic;
	var skipHiddenDays = t.skipHiddenDays;
	var getCellsPerWeek = t.getCellsPerWeek;
	var formatDate = calendar.formatDate;
	
	
	function render(date, delta) {

		if (delta) {
			addMonths(date, delta);
			date.setDate(1);
		}

		var firstDay = opt('firstDay');

		var start = cloneDate(date, true);
		start.setDate(1);

		var end = addMonths(cloneDate(start), 1);

		var visStart = cloneDate(start);
		addDays(visStart, -((visStart.getDay() - firstDay + 7) % 7));
		skipHiddenDays(visStart);

		var visEnd = cloneDate(end);
		addDays(visEnd, (7 - visEnd.getDay() + firstDay) % 7);
		skipHiddenDays(visEnd, -1, true);

		var colCnt = getCellsPerWeek();
		var rowCnt = Math.round(dayDiff(visEnd, visStart) / 7); // should be no need for Math.round

		if (opt('weekMode') == 'fixed') {
			addDays(visEnd, (6 - rowCnt) * 7); // add weeks to make up for it
			rowCnt = 6;
		}

		t.title = formatDate(start, opt('titleFormat'));

		t.start = start;
		t.end = end;
		t.visStart = visStart;
		t.visEnd = visEnd;

		renderBasic(rowCnt, colCnt, true);
	}
	
	
}

;;

fcViews.basicWeek = BasicWeekView;

function BasicWeekView(element, calendar) {
	var t = this;
	
	
	// exports
	t.render = render;
	
	
	// imports
	BasicView.call(t, element, calendar, 'basicWeek');
	var opt = t.opt;
	var renderBasic = t.renderBasic;
	var skipHiddenDays = t.skipHiddenDays;
	var getCellsPerWeek = t.getCellsPerWeek;
	var formatDates = calendar.formatDates;
	
	
	function render(date, delta) {

		if (delta) {
			addDays(date, delta * 7);
		}

		var start = addDays(cloneDate(date), -((date.getDay() - opt('firstDay') + 7) % 7));
		var end = addDays(cloneDate(start), 7);

		var visStart = cloneDate(start);
		skipHiddenDays(visStart);

		var visEnd = cloneDate(end);
		skipHiddenDays(visEnd, -1, true);

		var colCnt = getCellsPerWeek();

		t.start = start;
		t.end = end;
		t.visStart = visStart;
		t.visEnd = visEnd;

		t.title = formatDates(
			visStart,
			addDays(cloneDate(visEnd), -1),
			opt('titleFormat')
		);

		renderBasic(1, colCnt, false);
	}
	
	
}

;;

fcViews.basicDay = BasicDayView;


function BasicDayView(element, calendar) {
	var t = this;
	
	
	// exports
	t.render = render;
	
	
	// imports
	BasicView.call(t, element, calendar, 'basicDay');
	var opt = t.opt;
	var renderBasic = t.renderBasic;
	var skipHiddenDays = t.skipHiddenDays;
	var formatDate = calendar.formatDate;
	
	
	function render(date, delta) {

		if (delta) {
			addDays(date, delta);
		}
		skipHiddenDays(date, delta < 0 ? -1 : 1);

		var start = cloneDate(date, true);
		var end = addDays(cloneDate(start), 1);

		t.title = formatDate(date, opt('titleFormat'));

		t.start = t.visStart = start;
		t.end = t.visEnd = end;

		renderBasic(1, 1, false);
	}
	
	
}

;;

setDefaults({
	weekMode: 'fixed'
});


function BasicView(element, calendar, viewName) {
	var t = this;
	
	
	// exports
	t.renderBasic = renderBasic;
	t.setHeight = setHeight;
	t.setWidth = setWidth;
	t.renderDayOverlay = renderDayOverlay;
	t.defaultSelectionEnd = defaultSelectionEnd;
	t.renderSelection = renderSelection;
	t.clearSelection = clearSelection;
	t.reportDayClick = reportDayClick; // for selection (kinda hacky)
	t.dragStart = dragStart;
	t.dragStop = dragStop;
	t.defaultEventEnd = defaultEventEnd;
	t.getHoverListener = function() { return hoverListener };
	t.colLeft = colLeft;
	t.colRight = colRight;
	t.colContentLeft = colContentLeft;
	t.colContentRight = colContentRight;
	t.getIsCellAllDay = function() { return true };
	t.allDayRow = allDayRow;
	t.getRowCnt = function() { return rowCnt };
	t.getColCnt = function() { return colCnt };
	t.getColWidth = function() { return colWidth };
	t.getDaySegmentContainer = function() { return daySegmentContainer };
	
	
	// imports
	View.call(t, element, calendar, viewName);
	OverlayManager.call(t);
	SelectionManager.call(t);
	BasicEventRenderer.call(t);
	var opt = t.opt;
	var trigger = t.trigger;
	var clearEvents = t.clearEvents;
	var renderOverlay = t.renderOverlay;
	var clearOverlays = t.clearOverlays;
	var daySelectionMousedown = t.daySelectionMousedown;
	var cellToDate = t.cellToDate;
	var dateToCell = t.dateToCell;
	var rangeToSegments = t.rangeToSegments;
	var formatDate = calendar.formatDate;
	
	
	// locals
	
	var table;
	var head;
	var headCells;
	var body;
	var bodyRows;
	var bodyCells;
	var bodyFirstCells;
	var firstRowCellInners;
	var firstRowCellContentInners;
	var daySegmentContainer;
	
	var viewWidth;
	var viewHeight;
	var colWidth;
	var weekNumberWidth;
	
	var rowCnt, colCnt;
	var showNumbers;
	var coordinateGrid;
	var hoverListener;
	var colPositions;
	var colContentPositions;
	
	var tm;
	var colFormat;
	var showWeekNumbers;
	var weekNumberTitle;
	var weekNumberFormat;
	
	
	
	/* Rendering
	------------------------------------------------------------*/
	
	
	disableTextSelection(element.addClass('fc-grid'));
	
	
	function renderBasic(_rowCnt, _colCnt, _showNumbers) {
		rowCnt = _rowCnt;
		colCnt = _colCnt;
		showNumbers = _showNumbers;
		updateOptions();
		var firstTime = !body;
		if (firstTime) {
			buildEventContainer();
		}else{
			clearEvents();
		}
		buildTable();
	}
	
	
	function updateOptions() {
		tm = opt('theme') ? 'ui' : 'fc';
		colFormat = opt('columnFormat');

		// week # options. (TODO: bad, logic also in other views)
		showWeekNumbers = opt('weekNumbers');
		weekNumberTitle = opt('weekNumberTitle');
		if (opt('weekNumberCalculation') != 'iso') {
			weekNumberFormat = "w";
		}
		else {
			weekNumberFormat = "W";
		}
	}
	
	
	function buildEventContainer() {
		daySegmentContainer =
			$("<div style='position:absolute;z-index:8;top:0;left:0'/>")
				.appendTo(element);
	}
	
	
	function buildTable() {
		var html = buildTableHTML();

		lockHeight(); // the unlock happens later, in setHeight()...
		if (table) {
			table.remove();
		}
		table = $(html).appendTo(element);

		head = table.find('thead');
		headCells = head.find('.fc-day-header');
		body = table.find('tbody');
		bodyRows = body.find('tr');
		bodyCells = body.find('.fc-day');
		bodyFirstCells = bodyRows.find('td:first-child');

		firstRowCellInners = bodyRows.eq(0).find('.fc-day > div');
		firstRowCellContentInners = bodyRows.eq(0).find('.fc-day-content > div');
		
		markFirstLast(head.add(head.find('tr'))); // marks first+last tr/th's
		markFirstLast(bodyRows); // marks first+last td's
		bodyRows.eq(0).addClass('fc-first');
		bodyRows.filter(':last').addClass('fc-last');

		bodyCells.each(function(i, _cell) {
			var date = cellToDate(
				Math.floor(i / colCnt),
				i % colCnt
			);
			trigger('dayRender', t, date, $(_cell));
		});

		dayBind(bodyCells);
	}



	/* HTML Building
	-----------------------------------------------------------*/


	function buildTableHTML() {
		var html =
			"<table class='fc-border-separate' style='width:100%' cellspacing='0'>" +
			buildHeadHTML() +
			buildBodyHTML() +
			"</table>";

		return html;
	}


	function buildHeadHTML() {
		var headerClass = tm + "-widget-header";
		var html = '';
		var col;
		var date;

		html += "<thead><tr>";

		if (showWeekNumbers) {
			html +=
				"<th class='fc-week-number " + headerClass + "'>" +
				htmlEscape(weekNumberTitle) +
				"</th>";
		}

		for (col=0; col<colCnt; col++) {
			date = cellToDate(0, col);
			html +=
				"<th class='fc-day-header fc-" + dayIDs[date.getDay()] + " " + headerClass + "'>" +
				htmlEscape(formatDate(date, colFormat)) +
				"</th>";
		}

		html += "</tr></thead>";

		return html;
	}


	function buildBodyHTML() {
		var contentClass = tm + "-widget-content";
		var html = '';
		var row;
		var col;
		var date;

		html += "<tbody>";

		for (row=0; row<rowCnt; row++) {

			html += "<tr class='fc-week'>";

			if (showWeekNumbers) {
				date = cellToDate(row, 0);
				html +=
					"<td class='fc-week-number " + contentClass + "'>" +
					"<div>" +
					htmlEscape(formatDate(date, weekNumberFormat)) +
					"</div>" +
					"</td>";
			}

			for (col=0; col<colCnt; col++) {
				date = cellToDate(row, col);
				html += buildCellHTML(date);
			}

			html += "</tr>";
		}

		html += "</tbody>";

		return html;
	}


	function buildCellHTML(date) {
		var contentClass = tm + "-widget-content";
		var month = t.start.getMonth();
		var today = clearTime(new Date());
		var html = '';
		var classNames = [
			'fc-day',
			'fc-' + dayIDs[date.getDay()],
			contentClass
		];

		if (date.getMonth() != month) {
			classNames.push('fc-other-month');
		}
		if (+date == +today) {
			classNames.push(
				'fc-today',
				tm + '-state-highlight'
			);
		}

		html +=
			"<td" +
			" class='" + classNames.join(' ') + "'" +
			" data-date='" + formatDate(date, 'yyyy-MM-dd') + "'" +
			">" +
			"<div>";

		if (showNumbers) {
			html += "<div class='fc-day-number'>" + date.getDate() + "</div>";
		}

		html +=
			"<div class='fc-day-content'>" +
			"<div style='position:relative'>&nbsp;</div>" +
			"</div>" +
			"</div>" +
			"</td>";

		return html;
	}



	/* Dimensions
	-----------------------------------------------------------*/
	
	
	function setHeight(height) {
		viewHeight = height;
		
		var bodyHeight = viewHeight - head.height();
		var rowHeight;
		var rowHeightLast;
		var cell;
			
		if (opt('weekMode') == 'variable') {
			rowHeight = rowHeightLast = Math.floor(bodyHeight / (rowCnt==1 ? 2 : 6));
		}else{
			rowHeight = Math.floor(bodyHeight / rowCnt);
			rowHeightLast = bodyHeight - rowHeight * (rowCnt-1);
		}
		
		bodyFirstCells.each(function(i, _cell) {
			if (i < rowCnt) {
				cell = $(_cell);
				setMinHeight(
					cell.find('> div'),
					(i==rowCnt-1 ? rowHeightLast : rowHeight) - vsides(cell)
				);
			}
		});
		
		unlockHeight();
	}
	
	
	function setWidth(width) {
		viewWidth = width;
		colPositions.clear();
		colContentPositions.clear();

		weekNumberWidth = 0;
		if (showWeekNumbers) {
			weekNumberWidth = head.find('th.fc-week-number').outerWidth();
		}

		colWidth = Math.floor((viewWidth - weekNumberWidth) / colCnt);
		setOuterWidth(headCells.slice(0, -1), colWidth);
	}
	
	
	
	/* Day clicking and binding
	-----------------------------------------------------------*/
	
	
	function dayBind(days) {
		days.click(dayClick)
			.mousedown(daySelectionMousedown);
	}
	
	
	function dayClick(ev) {
		if (!opt('selectable')) { // if selectable, SelectionManager will worry about dayClick
			var date = parseISO8601($(this).data('date'));
			trigger('dayClick', this, date, true, ev);
		}
	}
	
	
	
	/* Semi-transparent Overlay Helpers
	------------------------------------------------------*/
	// TODO: should be consolidated with AgendaView's methods


	function renderDayOverlay(overlayStart, overlayEnd, refreshCoordinateGrid) { // overlayEnd is exclusive

		if (refreshCoordinateGrid) {
			coordinateGrid.build();
		}

		var segments = rangeToSegments(overlayStart, overlayEnd);

		for (var i=0; i<segments.length; i++) {
			var segment = segments[i];
			dayBind(
				renderCellOverlay(
					segment.row,
					segment.leftCol,
					segment.row,
					segment.rightCol
				)
			);
		}
	}

	
	function renderCellOverlay(row0, col0, row1, col1) { // row1,col1 is inclusive
		var rect = coordinateGrid.rect(row0, col0, row1, col1, element);
		return renderOverlay(rect, element);
	}
	
	
	
	/* Selection
	-----------------------------------------------------------------------*/
	
	
	function defaultSelectionEnd(startDate, allDay) {
		return cloneDate(startDate);
	}
	
	
	function renderSelection(startDate, endDate, allDay) {
		renderDayOverlay(startDate, addDays(cloneDate(endDate), 1), true); // rebuild every time???
	}
	
	
	function clearSelection() {
		clearOverlays();
	}
	
	
	function reportDayClick(date, allDay, ev) {
		var cell = dateToCell(date);
		var _element = bodyCells[cell.row*colCnt + cell.col];
		trigger('dayClick', _element, date, allDay, ev);
	}
	
	
	
	/* External Dragging
	-----------------------------------------------------------------------*/
	
	
	function dragStart(_dragElement, ev, ui) {
		hoverListener.start(function(cell) {
			clearOverlays();
			if (cell) {
				renderCellOverlay(cell.row, cell.col, cell.row, cell.col);
			}
		}, ev);
	}
	
	
	function dragStop(_dragElement, ev, ui) {
		var cell = hoverListener.stop();
		clearOverlays();
		if (cell) {
			var d = cellToDate(cell);
			trigger('drop', _dragElement, d, true, ev, ui);
		}
	}
	
	
	
	/* Utilities
	--------------------------------------------------------*/
	
	
	function defaultEventEnd(event) {
		return cloneDate(event.start);
	}
	
	
	coordinateGrid = new CoordinateGrid(function(rows, cols) {
		var e, n, p;
		headCells.each(function(i, _e) {
			e = $(_e);
			n = e.offset().left;
			if (i) {
				p[1] = n;
			}
			p = [n];
			cols[i] = p;
		});
		p[1] = n + e.outerWidth();
		bodyRows.each(function(i, _e) {
			if (i < rowCnt) {
				e = $(_e);
				n = e.offset().top;
				if (i) {
					p[1] = n;
				}
				p = [n];
				rows[i] = p;
			}
		});
		p[1] = n + e.outerHeight();
	});
	
	
	hoverListener = new HoverListener(coordinateGrid);
	
	colPositions = new HorizontalPositionCache(function(col) {
		return firstRowCellInners.eq(col);
	});

	colContentPositions = new HorizontalPositionCache(function(col) {
		return firstRowCellContentInners.eq(col);
	});


	function colLeft(col) {
		return colPositions.left(col);
	}


	function colRight(col) {
		return colPositions.right(col);
	}
	
	
	function colContentLeft(col) {
		return colContentPositions.left(col);
	}
	
	
	function colContentRight(col) {
		return colContentPositions.right(col);
	}
	
	
	function allDayRow(i) {
		return bodyRows.eq(i);
	}



	// makes sure height doesn't collapse while we destroy/render new cells
	// (this causes a bad end-user scrollbar jump)
	// TODO: generalize this for all view rendering. (also in Calendar.js)

	function lockHeight() {
		setMinHeight(element, element.height());
	}

	function unlockHeight() {
		setMinHeight(element, 1);
	}
	
}

;;

function BasicEventRenderer() {
	var t = this;
	
	
	// exports
	t.renderEvents = renderEvents;
	t.clearEvents = clearEvents;
	

	// imports
	DayEventRenderer.call(t);

	
	function renderEvents(events, modifiedEventId) {
		t.reportEvents(events);
		t.renderDayEvents(events, modifiedEventId);
		t.trigger('eventAfterAllRender');
	}
	
	
	function clearEvents() {
		t.reportEventClear();
		t.getDaySegmentContainer().empty();
	}


	// TODO: have this class (and AgendaEventRenderer) be responsible for creating the event container div

}

;;

fcViews.agendaWeek = AgendaWeekView;

function AgendaWeekView(element, calendar) {
	var t = this;
	
	
	// exports
	t.render = render;
	
	
	// imports
	AgendaView.call(t, element, calendar, 'agendaWeek');
	var opt = t.opt;
	var renderAgenda = t.renderAgenda;
	var skipHiddenDays = t.skipHiddenDays;
	var getCellsPerWeek = t.getCellsPerWeek;
	var formatDates = calendar.formatDates;

	
	function render(date, delta) {

		if (delta) {
			addDays(date, delta * 7);
		}

		var start = addDays(cloneDate(date), -((date.getDay() - opt('firstDay') + 7) % 7));
		var end = addDays(cloneDate(start), 7);

		var visStart = cloneDate(start);
		skipHiddenDays(visStart);

		var visEnd = cloneDate(end);
		skipHiddenDays(visEnd, -1, true);

		var colCnt = getCellsPerWeek();

		t.title = formatDates(
			visStart,
			addDays(cloneDate(visEnd), -1),
			opt('titleFormat')
		);

		t.start = start;
		t.end = end;
		t.visStart = visStart;
		t.visEnd = visEnd;

		renderAgenda(colCnt);
	}

}

;;

fcViews.agendaDay = AgendaDayView;


function AgendaDayView(element, calendar) {
	var t = this;
	
	
	// exports
	t.render = render;
	
	
	// imports
	AgendaView.call(t, element, calendar, 'agendaDay');
	var opt = t.opt;
	var renderAgenda = t.renderAgenda;
	var skipHiddenDays = t.skipHiddenDays;
	var formatDate = calendar.formatDate;
	
	
	function render(date, delta) {

		if (delta) {
			addDays(date, delta);
		}
		skipHiddenDays(date, delta < 0 ? -1 : 1);

		var start = cloneDate(date, true);
		var end = addDays(cloneDate(start), 1);

		t.title = formatDate(date, opt('titleFormat'));

		t.start = t.visStart = start;
		t.end = t.visEnd = end;

		renderAgenda(1);
	}
	

}

;;

setDefaults({
	allDaySlot: true,
	allDayText: 'all-day',
	firstHour: 6,
	slotMinutes: 30,
	defaultEventMinutes: 120,
	axisFormat: 'h(:mm)tt',
	timeFormat: {
		agenda: 'h:mm{ - h:mm}'
	},
	dragOpacity: {
		agenda: .5
	},
	minTime: 0,
	maxTime: 24
});


// TODO: make it work in quirks mode (event corners, all-day height)
// TODO: test liquid width, especially in IE6


function AgendaView(element, calendar, viewName) {
	var t = this;
	
	
	// exports
	t.renderAgenda = renderAgenda;
	t.setWidth = setWidth;
	t.setHeight = setHeight;
	t.beforeHide = beforeHide;
	t.afterShow = afterShow;
	t.defaultEventEnd = defaultEventEnd;
	t.timePosition = timePosition;
	t.getIsCellAllDay = getIsCellAllDay;
	t.allDayRow = getAllDayRow;
	t.getHoverListener = function() { return hoverListener };
	t.colLeft = colLeft;
	t.colRight = colRight;
	t.colContentLeft = colContentLeft;
	t.colContentRight = colContentRight;
	t.getDaySegmentContainer = function() { return daySegmentContainer };
	t.getSlotSegmentContainer = function() { return slotSegmentContainer };
	t.getMinMinute = function() { return minMinute };
	t.getMaxMinute = function() { return maxMinute };
	t.getSlotContainer = function() { return slotContainer };
	t.getRowCnt = function() { return 1 };
	t.getColCnt = function() { return colCnt };
	t.getColWidth = function() { return colWidth };
	t.getSnapHeight = function() { return snapHeight };
	t.getSnapMinutes = function() { return snapMinutes };
	t.defaultSelectionEnd = defaultSelectionEnd;
	t.renderDayOverlay = renderDayOverlay;
	t.renderSelection = renderSelection;
	t.clearSelection = clearSelection;
	t.reportDayClick = reportDayClick; // selection mousedown hack
	t.dragStart = dragStart;
	t.dragStop = dragStop;
	
	
	// imports
	View.call(t, element, calendar, viewName);
	OverlayManager.call(t);
	SelectionManager.call(t);
	AgendaEventRenderer.call(t);
	var opt = t.opt;
	var trigger = t.trigger;
	var clearEvents = t.clearEvents;
	var renderOverlay = t.renderOverlay;
	var clearOverlays = t.clearOverlays;
	var reportSelection = t.reportSelection;
	var unselect = t.unselect;
	var daySelectionMousedown = t.daySelectionMousedown;
	var slotSegHtml = t.slotSegHtml;
	var cellToDate = t.cellToDate;
	var dateToCell = t.dateToCell;
	var rangeToSegments = t.rangeToSegments;
	var formatDate = calendar.formatDate;
	
	
	// locals
	
	var dayTable;
	var dayHead;
	var dayHeadCells;
	var dayBody;
	var dayBodyCells;
	var dayBodyCellInners;
	var dayBodyCellContentInners;
	var dayBodyFirstCell;
	var dayBodyFirstCellStretcher;
	var slotLayer;
	var daySegmentContainer;
	var allDayTable;
	var allDayRow;
	var slotScroller;
	var slotContainer;
	var slotSegmentContainer;
	var slotTable;
	var slotTableFirstInner;
	var selectionHelper;
	
	var viewWidth;
	var viewHeight;
	var axisWidth;
	var colWidth;
	var gutterWidth;
	var slotHeight; // TODO: what if slotHeight changes? (see issue 650)

	var snapMinutes;
	var snapRatio; // ratio of number of "selection" slots to normal slots. (ex: 1, 2, 4)
	var snapHeight; // holds the pixel hight of a "selection" slot
	
	var colCnt;
	var slotCnt;
	var coordinateGrid;
	var hoverListener;
	var colPositions;
	var colContentPositions;
	var slotTopCache = {};
	var savedScrollTop;
	
	var tm;
	var rtl;
	var minMinute, maxMinute;
	var colFormat;
	var showWeekNumbers;
	var weekNumberTitle;
	var weekNumberFormat;
	

	
	/* Rendering
	-----------------------------------------------------------------------------*/
	
	
	disableTextSelection(element.addClass('fc-agenda'));
	
	
	function renderAgenda(c) {
		colCnt = c;
		updateOptions();
		if (!dayTable) {
			buildSkeleton(); // builds day table, slot area, events containers
		}else{
			buildDayTable(); // rebuilds day table
			clearEvents();
		}
	}
	
	
	function updateOptions() {

		tm = opt('theme') ? 'ui' : 'fc';
		rtl = opt('isRTL')
		minMinute = parseTime(opt('minTime'));
		maxMinute = parseTime(opt('maxTime'));
		colFormat = opt('columnFormat');

		// week # options. (TODO: bad, logic also in other views)
		showWeekNumbers = opt('weekNumbers');
		weekNumberTitle = opt('weekNumberTitle');
		if (opt('weekNumberCalculation') != 'iso') {
			weekNumberFormat = "w";
		}
		else {
			weekNumberFormat = "W";
		}

		snapMinutes = opt('snapMinutes') || opt('slotMinutes');
	}



	/* Build DOM
	-----------------------------------------------------------------------*/


	function buildSkeleton() {
		var headerClass = tm + "-widget-header";
		var contentClass = tm + "-widget-content";
		var s;
		var d;
		var i;
		var maxd;
		var minutes;
		var slotNormal = opt('slotMinutes') % 15 == 0;
		
		buildDayTable();
		
		slotLayer =
			$("<div style='position:absolute;z-index:2;left:0;width:100%'/>")
				.appendTo(element);
				
		if (opt('allDaySlot')) {
		
			daySegmentContainer =
				$("<div style='position:absolute;z-index:8;top:0;left:0'/>")
					.appendTo(slotLayer);
		
			s =
				"<table style='width:100%' class='fc-agenda-allday hide' cellspacing='0'>" +
				"<tr>" +
				"<th class='" + headerClass + " fc-agenda-axis'>" + opt('allDayText') + "</th>" +
				"<td>" +
				"<div class='fc-day-content'><div style='position:relative'/></div>" +
				"</td>" +
				"<th class='" + headerClass + " fc-agenda-gutter'>&nbsp;</th>" +
				"</tr>" +
				"</table>";
			allDayTable = $(s).appendTo(slotLayer);
			allDayRow = allDayTable.find('tr');
			
			dayBind(allDayRow.find('td'));
			
			slotLayer.append(
				"<div class='fc-agenda-divider " + headerClass + "'>" +
				"<div class='fc-agenda-divider-inner'/>" +
				"</div>"
			);
			
		}else{
		
			daySegmentContainer = $([]); // in jQuery 1.4, we can just do $()
		
		}
		
		slotScroller =
			$("<div style='position:absolute;width:100%;overflow-x:hidden;overflow-y:auto'/>")
				.appendTo(slotLayer);
				
		slotContainer =
			$("<div style='position:relative;width:100%;overflow:hidden'/>")
				.appendTo(slotScroller);
				
		slotSegmentContainer =
			$("<div style='position:absolute;z-index:8;top:0;left:0'/>")
				.appendTo(slotContainer);
		
		s =
			"<table class='fc-agenda-slots' style='width:100%' cellspacing='0'>" +
			"<tbody>";
		d = zeroDate();
		maxd = addMinutes(cloneDate(d), maxMinute);
		addMinutes(d, minMinute);
		slotCnt = 0;
		for (i=0; d < maxd; i++) {
			minutes = d.getMinutes();
			s +=
				"<tr class='fc-slot" + i + ' ' + (!minutes ? '' : 'fc-minor') + "'>" +
				"<th class='fc-agenda-axis " + headerClass + "'>" +
				((!slotNormal || !minutes) ? formatDate(d, opt('axisFormat')) : '&nbsp;') +
				"</th>" +
				"<td class='" + contentClass + "'>" +
				"<div style='position:relative'>&nbsp;</div>" +
				"</td>" +
				"</tr>";
			addMinutes(d, opt('slotMinutes'));
			slotCnt++;
		}
		s +=
			"</tbody>" +
			"</table>";
		slotTable = $(s).appendTo(slotContainer);
		slotTableFirstInner = slotTable.find('div:first');
		
		slotBind(slotTable.find('td'));
	}



	/* Build Day Table
	-----------------------------------------------------------------------*/


	function buildDayTable() {
		var html = buildDayTableHTML();

		if (dayTable) {
			dayTable.remove();
		}
		dayTable = $(html).appendTo(element);

		dayHead = dayTable.find('thead');
		dayHeadCells = dayHead.find('th').slice(1, -1); // exclude gutter
		dayBody = dayTable.find('tbody');
		dayBodyCells = dayBody.find('td').slice(0, -1); // exclude gutter
		dayBodyCellInners = dayBodyCells.find('> div');
		dayBodyCellContentInners = dayBodyCells.find('.fc-day-content > div');

		dayBodyFirstCell = dayBodyCells.eq(0);
		dayBodyFirstCellStretcher = dayBodyCellInners.eq(0);
		
		markFirstLast(dayHead.add(dayHead.find('tr')));
		markFirstLast(dayBody.add(dayBody.find('tr')));

		// TODO: now that we rebuild the cells every time, we should call dayRender
	}


	function buildDayTableHTML() {
		var html =
			"<table style='width:100%' class='fc-agenda-days fc-border-separate' cellspacing='0'>" +
			buildDayTableHeadHTML() +
			buildDayTableBodyHTML() +
			"</table>";

		return html;
	}


	function buildDayTableHeadHTML() {
		var headerClass = tm + "-widget-header";
		var date;
		var html = '';
		var weekText;
		var col;

		html +=
			"<thead>" +
			"<tr>";

		if (showWeekNumbers) {
			weekText = formatDate(date, weekNumberFormat);
			if (rtl) {
				weekText += weekNumberTitle;
			}
			else {
				weekText = weekNumberTitle + weekText;
			}
			html +=
				"<th class='fc-agenda-axis fc-week-number " + headerClass + "'>" +
				htmlEscape(weekText) +
				"</th>";
		}
		else {
			html += "<th class='fc-agenda-axis " + headerClass + "'>&nbsp;</th>";
		}

		for (col=0; col<colCnt; col++) {
			date = cellToDate(0, col);
			html +=
				"<th class='fc-" + dayIDs[date.getDay()] + " fc-col" + col + ' ' + headerClass + "'>" +
				htmlEscape(formatDate(date, colFormat)) +
				"</th>";
		}

		html +=
			"<th class='fc-agenda-gutter " + headerClass + "'>&nbsp;</th>" +
			"</tr>" +
			"</thead>";

		return html;
	}


	function buildDayTableBodyHTML() {
		var headerClass = tm + "-widget-header"; // TODO: make these when updateOptions() called
		var contentClass = tm + "-widget-content";
		var date;
		var today = clearTime(new Date());
		var col;
		var cellsHTML;
		var cellHTML;
		var classNames;
		var html = '';

		html +=
			"<tbody>" +
			"<tr>" +
			"<th class='fc-agenda-axis " + headerClass + "'>&nbsp;</th>";

		cellsHTML = '';

		for (col=0; col<colCnt; col++) {

			date = cellToDate(0, col);

			classNames = [
				'fc-col' + col,
				'fc-' + dayIDs[date.getDay()],
				contentClass
			];
			if (+date == +today) {
				classNames.push(
					tm + '-state-highlight',
					'fc-today'
				);
			}

			cellHTML =
				"<td class='" + classNames.join(' ') + "'>" +
				"<div>" +
				"<div class='fc-day-content'>" +
				"<div style='position:relative'>&nbsp;</div>" +
				"</div>" +
				"</div>" +
				"</td>";

			cellsHTML += cellHTML;
		}

		html += cellsHTML;
		html +=
			"<td class='fc-agenda-gutter " + contentClass + "'>&nbsp;</td>" +
			"</tr>" +
			"</tbody>";

		return html;
	}


	// TODO: data-date on the cells

	
	
	/* Dimensions
	-----------------------------------------------------------------------*/

	
	function setHeight(height, dateChanged) {
		if (height === undefined) {
			height = viewHeight;
		}
		viewHeight = height;
		slotTopCache = {};
	
		var headHeight = dayBody.position().top;
		var allDayHeight = slotScroller.position().top; // including divider
		var bodyHeight = Math.min( // total body height, including borders
			height - headHeight,   // when scrollbars
			slotTable.height() + allDayHeight + 1 // when no scrollbars. +1 for bottom border
		);

		dayBodyFirstCellStretcher
			.height(bodyHeight - vsides(dayBodyFirstCell));
		
		slotLayer.css('top', headHeight);
		
		slotScroller.height(bodyHeight - allDayHeight - 1);
		
		slotHeight = slotTableFirstInner.height() + 1; // +1 for border

		snapRatio = opt('slotMinutes') / snapMinutes;
		snapHeight = slotHeight / snapRatio;
		
		if (dateChanged) {
			resetScroll();
		}
	}
	
	
	function setWidth(width) {
		viewWidth = width;
		colPositions.clear();
		colContentPositions.clear();

		var axisFirstCells = dayHead.find('th:first');
		if (allDayTable) {
			axisFirstCells = axisFirstCells.add(allDayTable.find('th:first'));
		}
		axisFirstCells = axisFirstCells.add(slotTable.find('th:first'));
		
		axisWidth = 0;
		setOuterWidth(
			axisFirstCells
				.width('')
				.each(function(i, _cell) {
					axisWidth = Math.max(axisWidth, $(_cell).outerWidth());
				}),
			axisWidth
		);
		
		var gutterCells = dayTable.find('.fc-agenda-gutter');
		if (allDayTable) {
			gutterCells = gutterCells.add(allDayTable.find('th.fc-agenda-gutter'));
		}

		var slotTableWidth = slotScroller[0].clientWidth; // needs to be done after axisWidth (for IE7)
		
		gutterWidth = slotScroller.width() - slotTableWidth;
		if (gutterWidth) {
			setOuterWidth(gutterCells, gutterWidth);
			gutterCells
				.show()
				.prev()
				.removeClass('fc-last');
		}else{
			gutterCells
				.hide()
				.prev()
				.addClass('fc-last');
		}
		
		colWidth = Math.floor((slotTableWidth - axisWidth) / colCnt);
		setOuterWidth(dayHeadCells.slice(0, -1), colWidth);
	}
	


	/* Scrolling
	-----------------------------------------------------------------------*/


	function resetScroll() {
		var d0 = zeroDate();
		var scrollDate = cloneDate(d0);
		scrollDate.setHours(opt('firstHour'));
		var top = timePosition(d0, scrollDate) + 1; // +1 for the border
		function scroll() {
			slotScroller.scrollTop(top);
		}
		scroll();
		setTimeout(scroll, 0); // overrides any previous scroll state made by the browser
	}
	
	
	function beforeHide() {
		savedScrollTop = slotScroller.scrollTop();
	}
	
	
	function afterShow() {
		slotScroller.scrollTop(savedScrollTop);
	}
	
	
	
	/* Slot/Day clicking and binding
	-----------------------------------------------------------------------*/
	

	function dayBind(cells) {
		cells.click(slotClick)
			.mousedown(daySelectionMousedown);
	}


	function slotBind(cells) {
		cells.click(slotClick)
			.mousedown(slotSelectionMousedown);
	}
	
	
	function slotClick(ev) {
		if (!opt('selectable')) { // if selectable, SelectionManager will worry about dayClick
			var col = Math.min(colCnt-1, Math.floor((ev.pageX - dayTable.offset().left - axisWidth) / colWidth));
			var date = cellToDate(0, col);
			var rowMatch = this.parentNode.className.match(/fc-slot(\d+)/); // TODO: maybe use data
			if (rowMatch) {
				var mins = parseInt(rowMatch[1]) * opt('slotMinutes');
				var hours = Math.floor(mins/60);
				date.setHours(hours);
				date.setMinutes(mins%60 + minMinute);
				trigger('dayClick', dayBodyCells[col], date, false, ev);
			}else{
				trigger('dayClick', dayBodyCells[col], date, true, ev);
			}
		}
	}
	
	
	
	/* Semi-transparent Overlay Helpers
	-----------------------------------------------------*/
	// TODO: should be consolidated with BasicView's methods


	function renderDayOverlay(overlayStart, overlayEnd, refreshCoordinateGrid) { // overlayEnd is exclusive

		if (refreshCoordinateGrid) {
			coordinateGrid.build();
		}

		var segments = rangeToSegments(overlayStart, overlayEnd);

		for (var i=0; i<segments.length; i++) {
			var segment = segments[i];
			dayBind(
				renderCellOverlay(
					segment.row,
					segment.leftCol,
					segment.row,
					segment.rightCol
				)
			);
		}
	}
	
	
	function renderCellOverlay(row0, col0, row1, col1) { // only for all-day?
		var rect = coordinateGrid.rect(row0, col0, row1, col1, slotLayer);
		return renderOverlay(rect, slotLayer);
	}
	

	function renderSlotOverlay(overlayStart, overlayEnd) {
		for (var i=0; i<colCnt; i++) {
			var dayStart = cellToDate(0, i);
			var dayEnd = addDays(cloneDate(dayStart), 1);
			var stretchStart = new Date(Math.max(dayStart, overlayStart));
			var stretchEnd = new Date(Math.min(dayEnd, overlayEnd));
			if (stretchStart < stretchEnd) {
				var rect = coordinateGrid.rect(0, i, 0, i, slotContainer); // only use it for horizontal coords
				var top = timePosition(dayStart, stretchStart);
				var bottom = timePosition(dayStart, stretchEnd);
				rect.top = top;
				rect.height = bottom - top;
				slotBind(
					renderOverlay(rect, slotContainer)
				);
			}
		}
	}
	
	
	
	/* Coordinate Utilities
	-----------------------------------------------------------------------------*/
	
	
	coordinateGrid = new CoordinateGrid(function(rows, cols) {
		var e, n, p;
		dayHeadCells.each(function(i, _e) {
			e = $(_e);
			n = e.offset().left;
			if (i) {
				p[1] = n;
			}
			p = [n];
			cols[i] = p;
		});
		p[1] = n + e.outerWidth();
		if (opt('allDaySlot')) {
			e = allDayRow;
			n = e.offset().top;
			rows[0] = [n, n+e.outerHeight()];
		}
		var slotTableTop = slotContainer.offset().top;
		var slotScrollerTop = slotScroller.offset().top;
		var slotScrollerBottom = slotScrollerTop + slotScroller.outerHeight();
		function constrain(n) {
			return Math.max(slotScrollerTop, Math.min(slotScrollerBottom, n));
		}
		for (var i=0; i<slotCnt*snapRatio; i++) { // adapt slot count to increased/decreased selection slot count
			rows.push([
				constrain(slotTableTop + snapHeight*i),
				constrain(slotTableTop + snapHeight*(i+1))
			]);
		}
	});
	
	
	hoverListener = new HoverListener(coordinateGrid);
	
	colPositions = new HorizontalPositionCache(function(col) {
		return dayBodyCellInners.eq(col);
	});
	
	colContentPositions = new HorizontalPositionCache(function(col) {
		return dayBodyCellContentInners.eq(col);
	});
	
	
	function colLeft(col) {
		return colPositions.left(col);
	}


	function colContentLeft(col) {
		return colContentPositions.left(col);
	}


	function colRight(col) {
		return colPositions.right(col);
	}
	
	
	function colContentRight(col) {
		return colContentPositions.right(col);
	}


	function getIsCellAllDay(cell) {
		return opt('allDaySlot') && !cell.row;
	}


	function realCellToDate(cell) { // ugh "real" ... but blame it on our abuse of the "cell" system
		var d = cellToDate(0, cell.col);
		var slotIndex = cell.row;
		if (opt('allDaySlot')) {
			slotIndex--;
		}
		if (slotIndex >= 0) {
			addMinutes(d, minMinute + slotIndex * snapMinutes);
		}
		return d;
	}
	
	
	// get the Y coordinate of the given time on the given day (both Date objects)
	function timePosition(day, time) { // both date objects. day holds 00:00 of current day
		day = cloneDate(day, true);
		if (time < addMinutes(cloneDate(day), minMinute)) {
			return 0;
		}
		if (time >= addMinutes(cloneDate(day), maxMinute)) {
			return slotTable.height();
		}
		var slotMinutes = opt('slotMinutes'),
			minutes = time.getHours()*60 + time.getMinutes() - minMinute,
			slotI = Math.floor(minutes / slotMinutes),
			slotTop = slotTopCache[slotI];
		if (slotTop === undefined) {
			slotTop = slotTopCache[slotI] = slotTable.find('tr:eq(' + slotI + ') td div')[0].offsetTop; //.position().top; // need this optimization???
		}
		return Math.max(0, Math.round(
			slotTop - 1 + slotHeight * ((minutes % slotMinutes) / slotMinutes)
		));
	}
	
	
	function getAllDayRow(index) {
		return allDayRow;
	}
	
	
	function defaultEventEnd(event) {
		var start = cloneDate(event.start);
		if (event.allDay) {
			return start;
		}
		return addMinutes(start, opt('defaultEventMinutes'));
	}
	
	
	
	/* Selection
	---------------------------------------------------------------------------------*/
	
	
	function defaultSelectionEnd(startDate, allDay) {
		if (allDay) {
			return cloneDate(startDate);
		}
		return addMinutes(cloneDate(startDate), opt('slotMinutes'));
	}
	
	
	function renderSelection(startDate, endDate, allDay) { // only for all-day
		if (allDay) {
			if (opt('allDaySlot')) {
				renderDayOverlay(startDate, addDays(cloneDate(endDate), 1), true);
			}
		}else{
			renderSlotSelection(startDate, endDate);
		}
	}
	
	
	function renderSlotSelection(startDate, endDate) {
		var helperOption = opt('selectHelper');
		coordinateGrid.build();
		if (helperOption) {
			var col = dateToCell(startDate).col;
			if (col >= 0 && col < colCnt) { // only works when times are on same day
				var rect = coordinateGrid.rect(0, col, 0, col, slotContainer); // only for horizontal coords
				var top = timePosition(startDate, startDate);
				var bottom = timePosition(startDate, endDate);
				if (bottom > top) { // protect against selections that are entirely before or after visible range
					rect.top = top;
					rect.height = bottom - top;
					rect.left += 2;
					rect.width -= 5;
					if ($.isFunction(helperOption)) {
						var helperRes = helperOption(startDate, endDate);
						if (helperRes) {
							rect.position = 'absolute';
							rect.zIndex = 8;
							selectionHelper = $(helperRes)
								.css(rect)
								.appendTo(slotContainer);
						}
					}else{
						rect.isStart = true; // conside rect a "seg" now
						rect.isEnd = true;   //
						selectionHelper = $(slotSegHtml(
							{
								title: '',
								start: startDate,
								end: endDate,
								className: ['fc-select-helper'],
								editable: false
							},
							rect
						));
						selectionHelper.css('opacity', opt('dragOpacity'));
					}
					if (selectionHelper) {
						slotBind(selectionHelper);
						slotContainer.append(selectionHelper);
						setOuterWidth(selectionHelper, rect.width, true); // needs to be after appended
						setOuterHeight(selectionHelper, rect.height, true);
					}
				}
			}
		}else{
			renderSlotOverlay(startDate, endDate);
		}
	}
	
	
	function clearSelection() {
		clearOverlays();
		if (selectionHelper) {
			selectionHelper.remove();
			selectionHelper = null;
		}
	}
	
	
	function slotSelectionMousedown(ev) {
		if (ev.which == 1 && opt('selectable')) { // ev.which==1 means left mouse button
			unselect(ev);
			var dates;
			hoverListener.start(function(cell, origCell) {
				clearSelection();
				if (cell && cell.col == origCell.col && !getIsCellAllDay(cell)) {
					var d1 = realCellToDate(origCell);
					var d2 = realCellToDate(cell);
					dates = [
						d1,
						addMinutes(cloneDate(d1), snapMinutes), // calculate minutes depending on selection slot minutes 
						d2,
						addMinutes(cloneDate(d2), snapMinutes)
					].sort(dateCompare);
					renderSlotSelection(dates[0], dates[3]);
				}else{
					dates = null;
				}
			}, ev);
			$(document).one('mouseup', function(ev) {
				hoverListener.stop();
				if (dates) {
					if (+dates[0] == +dates[1]) {
						reportDayClick(dates[0], false, ev);
					}
					reportSelection(dates[0], dates[3], false, ev);
				}
			});
		}
	}


	function reportDayClick(date, allDay, ev) {
		trigger('dayClick', dayBodyCells[dateToCell(date).col], date, allDay, ev);
	}
	
	
	
	/* External Dragging
	--------------------------------------------------------------------------------*/
	
	
	function dragStart(_dragElement, ev, ui) {
		hoverListener.start(function(cell) {
			clearOverlays();
			if (cell) {
				if (getIsCellAllDay(cell)) {
					renderCellOverlay(cell.row, cell.col, cell.row, cell.col);
				}else{
					var d1 = realCellToDate(cell);
					var d2 = addMinutes(cloneDate(d1), opt('defaultEventMinutes'));
					renderSlotOverlay(d1, d2);
				}
			}
		}, ev);
	}
	
	
	function dragStop(_dragElement, ev, ui) {
		var cell = hoverListener.stop();
		clearOverlays();
		if (cell) {
			trigger('drop', _dragElement, realCellToDate(cell), getIsCellAllDay(cell), ev, ui);
		}
	}
	

}

;;

function AgendaEventRenderer() {
	var t = this;
	
	
	// exports
	t.renderEvents = renderEvents;
	t.clearEvents = clearEvents;
	t.slotSegHtml = slotSegHtml;
	
	
	// imports
	DayEventRenderer.call(t);
	var opt = t.opt;
	var trigger = t.trigger;
	var isEventDraggable = t.isEventDraggable;
	var isEventResizable = t.isEventResizable;
	var eventEnd = t.eventEnd;
	var reportEvents = t.reportEvents;
	var reportEventClear = t.reportEventClear;
	var eventElementHandlers = t.eventElementHandlers;
	var setHeight = t.setHeight;
	var getDaySegmentContainer = t.getDaySegmentContainer;
	var getSlotSegmentContainer = t.getSlotSegmentContainer;
	var getHoverListener = t.getHoverListener;
	var getMaxMinute = t.getMaxMinute;
	var getMinMinute = t.getMinMinute;
	var timePosition = t.timePosition;
	var colContentLeft = t.colContentLeft;
	var colContentRight = t.colContentRight;
	var cellToDate = t.cellToDate;
	var segmentCompare = t.segmentCompare;
	var getColCnt = t.getColCnt;
	var getColWidth = t.getColWidth;
	var getSnapHeight = t.getSnapHeight;
	var getSnapMinutes = t.getSnapMinutes;
	var getSlotContainer = t.getSlotContainer;
	var reportEventElement = t.reportEventElement;
	var showEvents = t.showEvents;
	var hideEvents = t.hideEvents;
	var eventDrop = t.eventDrop;
	var eventResize = t.eventResize;
	var renderDayOverlay = t.renderDayOverlay;
	var clearOverlays = t.clearOverlays;
	var renderDayEvents = t.renderDayEvents;
	var calendar = t.calendar;
	var formatDate = calendar.formatDate;
	var formatDates = calendar.formatDates;


	// overrides
	t.draggableDayEvent = draggableDayEvent;

	
	
	/* Rendering
	----------------------------------------------------------------------------*/
	

	function renderEvents(events, modifiedEventId) {
		reportEvents(events);
		var i, len=events.length,
			dayEvents=[],
			slotEvents=[];
		for (i=0; i<len; i++) {
			if (events[i].allDay) {
				dayEvents.push(events[i]);
			}else{
				slotEvents.push(events[i]);
			}
		}

		if (opt('allDaySlot')) {
			renderDayEvents(dayEvents, modifiedEventId);
			setHeight(); // no params means set to viewHeight
		}

		renderSlotSegs(compileSlotSegs(slotEvents), modifiedEventId);

		trigger('eventAfterAllRender');
	}
	
	
	function clearEvents() {
		reportEventClear();
		getDaySegmentContainer().empty();
		getSlotSegmentContainer().empty();
	}

	
	function compileSlotSegs(events) {
		var colCnt = getColCnt(),
			minMinute = getMinMinute(),
			maxMinute = getMaxMinute(),
			d,
			visEventEnds = $.map(events, slotEventEnd),
			i, col,
			j, level,
			k, seg,
			segs = [];
		for (i=0; i<colCnt; i++) {

			d = cellToDate(0, i);
			addMinutes(d, minMinute);

			col = stackAgendaSegs(
				sliceSegs(
					events,
					visEventEnds,
					d,
					addMinutes(cloneDate(d), maxMinute-minMinute)
				)
			);
			countForwardSegs(col);

			for (j=0; j<col.length; j++) {
				level = col[j];
				for (k=0; k<level.length; k++) {
					seg = level[k];
					seg.col = i;
					seg.level = j;
					segs.push(seg);
				}
			}
		}
		return segs;
	}


	function sliceSegs(events, visEventEnds, start, end) {
		var segs = [],
			i, len=events.length, event,
			eventStart, eventEnd,
			segStart, segEnd,
			isStart, isEnd;
		for (i=0; i<len; i++) {
			event = events[i];
			eventStart = event.start;
			eventEnd = visEventEnds[i];
			if (eventEnd > start && eventStart < end) {
				if (eventStart < start) {
					segStart = cloneDate(start);
					isStart = false;
				}else{
					segStart = eventStart;
					isStart = true;
				}
				if (eventEnd > end) {
					segEnd = cloneDate(end);
					isEnd = false;
				}else{
					segEnd = eventEnd;
					isEnd = true;
				}
				segs.push({
					event: event,
					start: segStart,
					end: segEnd,
					isStart: isStart,
					isEnd: isEnd,
					msLength: segEnd - segStart
				});
			}
		}
		return segs.sort(segmentCompare);
	}


	function slotEventEnd(event) {
		if (event.end) {
			return cloneDate(event.end);
		}else{
			return addMinutes(cloneDate(event.start), opt('defaultEventMinutes'));
		}
	}
	
	
	// renders events in the 'time slots' at the bottom
	// TODO: when we refactor this, when user returns `false` eventRender, don't have empty space
	// TODO: refactor will include using pixels to detect collisions instead of dates (handy for seg cmp)
	
	function renderSlotSegs(segs, modifiedEventId) {
	
		var i, segCnt=segs.length, seg,
			event,
			classes,
			top, bottom,
			colI, levelI, forward,
			leftmost,
			availWidth,
			outerWidth,
			left,
			html='',
			eventElements,
			eventElement,
			triggerRes,
			titleElement,
			height,
			slotSegmentContainer = getSlotSegmentContainer(),
			rtl, dis;
			
		if (rtl = opt('isRTL')) {
			dis = -1;
		}else{
			dis = 1;
		}
			
		// calculate position/dimensions, create html
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			event = seg.event;
			top = timePosition(seg.start, seg.start);
			bottom = timePosition(seg.start, seg.end);
			colI = seg.col;
			levelI = seg.level;
			forward = seg.forward || 0;
			leftmost = colContentLeft(colI);
			availWidth = colContentRight(colI) - leftmost;
			availWidth = Math.min(availWidth-6, availWidth*.95); // TODO: move this to CSS
			if (levelI) {
				// indented and thin
				outerWidth = availWidth / (levelI + forward + 1);
			}else{
				if (forward) {
					// moderately wide, aligned left still
					outerWidth = ((availWidth / (forward + 1)) - (12/2)) * 2; // 12 is the predicted width of resizer =
				}else{
					// can be entire width, aligned left
					outerWidth = availWidth;
				}
			}
			left = leftmost +                                  // leftmost possible
				(availWidth / (levelI + forward + 1) * levelI) // indentation
				* dis + (rtl ? availWidth - outerWidth : 0);   // rtl
			seg.top = top;
			seg.left = left;
			seg.outerWidth = outerWidth;
			seg.outerHeight = bottom - top;
			html += slotSegHtml(event, seg);
		}
		slotSegmentContainer[0].innerHTML = html; // faster than html()
		eventElements = slotSegmentContainer.children();
		
		// retrieve elements, run through eventRender callback, bind event handlers
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			event = seg.event;
			eventElement = $(eventElements[i]); // faster than eq()
			triggerRes = trigger('eventRender', event, event, eventElement);
			if (triggerRes === false) {
				eventElement.remove();
			}else{
				if (triggerRes && triggerRes !== true) {
					eventElement.remove();
					eventElement = $(triggerRes)
						.css({
							position: 'absolute',
							top: seg.top,
							left: seg.left
						})
						.appendTo(slotSegmentContainer);
				}
				seg.element = eventElement;
				if (event._id === modifiedEventId) {
					bindSlotSeg(event, eventElement, seg);
				}else{
					eventElement[0]._fci = i; // for lazySegBind
				}
				reportEventElement(event, eventElement);
			}
		}
		
		lazySegBind(slotSegmentContainer, segs, bindSlotSeg);
		
		// record event sides and title positions
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			if (eventElement = seg.element) {
				seg.vsides = vsides(eventElement, true);
				seg.hsides = hsides(eventElement, true);
				titleElement = eventElement.find('.fc-event-title');
				if (titleElement.length) {
					seg.contentTop = titleElement[0].offsetTop;
				}
			}
		}
		
		// set all positions/dimensions at once
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			if (eventElement = seg.element) {
				eventElement[0].style.width = Math.max(0, seg.outerWidth - seg.hsides) + 'px';
				height = Math.max(0, seg.outerHeight - seg.vsides);
				eventElement[0].style.height = height + 'px';
				event = seg.event;
				if (seg.contentTop !== undefined && height - seg.contentTop < 10) {
					// not enough room for title, put it in the time (TODO: maybe make both display:inline instead)
					eventElement.find('div.fc-event-time')
						.text(formatDate(event.start, opt('timeFormat')) + ' - ' + event.title);
					eventElement.find('div.fc-event-title')
						.remove();
				}
				trigger('eventAfterRender', event, event, eventElement);
			}
		}
					
	}
	
	
	function slotSegHtml(event, seg) {
		var html = "<";
		var url = event.url;
		var skinCss = getSkinCss(event, opt);
		var classes = ['fc-event', 'fc-event-vert'];
		if (isEventDraggable(event)) {
			classes.push('fc-event-draggable');
		}
		if (seg.isStart) {
			classes.push('fc-event-start');
		}
		if (seg.isEnd) {
			classes.push('fc-event-end');
		}
		classes = classes.concat(event.className);
		if (event.source) {
			classes = classes.concat(event.source.className || []);
		}
		if (url) {
			html += "a href='" + htmlEscape(event.url) + "'";
		}else{
			html += "div";
		}
		html +=
			" class='" + classes.join(' ') + "'" +
			" style='position:absolute;z-index:8;top:" + seg.top + "px;left:" + seg.left + "px;" + skinCss + "'" +
			">" +
			"<div class='fc-event-inner'>" +
			"<div class='fc-event-time'>" +
			htmlEscape(formatDates(event.start, event.end, opt('timeFormat'))) +
			"</div>" +
			"<div class='fc-event-title'>" +
			htmlEscape(event.title) +
			"</div>" +
			"</div>" +
			"<div class='fc-event-bg'></div>";
		if (seg.isEnd && isEventResizable(event)) {
			html +=
				"<div class='ui-resizable-handle ui-resizable-s'>=</div>";
		}
		html +=
			"</" + (url ? "a" : "div") + ">";
		return html;
	}
	
	
	function bindSlotSeg(event, eventElement, seg) {
		var timeElement = eventElement.find('div.fc-event-time');
		if (isEventDraggable(event)) {
			draggableSlotEvent(event, eventElement, timeElement);
		}
		if (seg.isEnd && isEventResizable(event)) {
			resizableSlotEvent(event, eventElement, timeElement);
		}
		eventElementHandlers(event, eventElement);
	}
	
	
	
	/* Dragging
	-----------------------------------------------------------------------------------*/
	
	
	// when event starts out FULL-DAY
	// overrides DayEventRenderer's version because it needs to account for dragging elements
	// to and from the slot area.
	
	function draggableDayEvent(event, eventElement, seg) {
		var isStart = seg.isStart;
		var origWidth;
		var revert;
		var allDay = true;
		var dayDelta;
		var hoverListener = getHoverListener();
		var colWidth = getColWidth();
		var snapHeight = getSnapHeight();
		var snapMinutes = getSnapMinutes();
		var minMinute = getMinMinute();
		eventElement.draggable({
			zIndex: 9,
			opacity: opt('dragOpacity', 'month'), // use whatever the month view was using
			revertDuration: opt('dragRevertDuration'),
			start: function(ev, ui) {
				trigger('eventDragStart', eventElement, event, ev, ui);
				hideEvents(event, eventElement);
				origWidth = eventElement.width();
				hoverListener.start(function(cell, origCell) {
					clearOverlays();
					if (cell) {
						revert = false;
						var origDate = cellToDate(0, origCell.col);
						var date = cellToDate(0, cell.col);
						dayDelta = dayDiff(date, origDate);
						if (!cell.row) {
							// on full-days
							renderDayOverlay(
								addDays(cloneDate(event.start), dayDelta),
								addDays(exclEndDay(event), dayDelta)
							);
							resetElement();
						}else{
							// mouse is over bottom slots
							if (isStart) {
								if (allDay) {
									// convert event to temporary slot-event
									eventElement.width(colWidth - 10); // don't use entire width
									setOuterHeight(
										eventElement,
										snapHeight * Math.round(
											(event.end ? ((event.end - event.start) / MINUTE_MS) : opt('defaultEventMinutes')) /
												snapMinutes
										)
									);
									eventElement.draggable('option', 'grid', [colWidth, 1]);
									allDay = false;
								}
							}else{
								revert = true;
							}
						}
						revert = revert || (allDay && !dayDelta);
					}else{
						resetElement();
						revert = true;
					}
					eventElement.draggable('option', 'revert', revert);
				}, ev, 'drag');
			},
			stop: function(ev, ui) {
				hoverListener.stop();
				clearOverlays();
				trigger('eventDragStop', eventElement, event, ev, ui);
				if (revert) {
					// hasn't moved or is out of bounds (draggable has already reverted)
					resetElement();
					eventElement.css('filter', ''); // clear IE opacity side-effects
					showEvents(event, eventElement);
				}else{
					// changed!
					var minuteDelta = 0;
					if (!allDay) {
						minuteDelta = Math.round((eventElement.offset().top - getSlotContainer().offset().top) / snapHeight)
							* snapMinutes
							+ minMinute
							- (event.start.getHours() * 60 + event.start.getMinutes());
					}
					eventDrop(this, event, dayDelta, minuteDelta, allDay, ev, ui);
				}
			}
		});
		function resetElement() {
			if (!allDay) {
				eventElement
					.width(origWidth)
					.height('')
					.draggable('option', 'grid', null);
				allDay = true;
			}
		}
	}
	
	
	// when event starts out IN TIMESLOTS
	
	function draggableSlotEvent(event, eventElement, timeElement) {
		var origPosition;
		var allDay = false;
		var dayDelta;
		var minuteDelta;
		var prevMinuteDelta;
		var hoverListener = getHoverListener();
		var colCnt = getColCnt();
		var colWidth = getColWidth();
		var snapHeight = getSnapHeight();
		var snapMinutes = getSnapMinutes();
		eventElement.draggable({
			zIndex: 9,
			scroll: false,
			grid: [colWidth, snapHeight],
			axis: colCnt==1 ? 'y' : false,
			opacity: opt('dragOpacity'),
			revertDuration: opt('dragRevertDuration'),
			start: function(ev, ui) {
				trigger('eventDragStart', eventElement, event, ev, ui);
				hideEvents(event, eventElement);
				origPosition = eventElement.position();
				minuteDelta = prevMinuteDelta = 0;
				hoverListener.start(function(cell, origCell) {
					eventElement.draggable('option', 'revert', !cell);
					clearOverlays();
					if (cell) {
						var origDate = cellToDate(0, origCell.col);
						var date = cellToDate(0, cell.col);
						dayDelta = dayDiff(date, origDate);
						if (opt('allDaySlot') && !cell.row) {
							// over full days
							if (!allDay) {
								// convert to temporary all-day event
								allDay = true;
								timeElement.hide();
								eventElement.draggable('option', 'grid', null);
							}
							renderDayOverlay(
								addDays(cloneDate(event.start), dayDelta),
								addDays(exclEndDay(event), dayDelta)
							);
						}else{
							// on slots
							resetElement();
						}
					}
				}, ev, 'drag');
			},
			drag: function(ev, ui) {
				minuteDelta = Math.round((ui.position.top - origPosition.top) / snapHeight) * snapMinutes;
				if (minuteDelta != prevMinuteDelta) {
					if (!allDay) {
						updateTimeText(minuteDelta);
					}
					prevMinuteDelta = minuteDelta;
				}
			},
			stop: function(ev, ui) {
				var cell = hoverListener.stop();
				clearOverlays();
				trigger('eventDragStop', eventElement, event, ev, ui);
				if (cell && (dayDelta || minuteDelta || allDay)) {
					// changed!
					eventDrop(this, event, dayDelta, allDay ? 0 : minuteDelta, allDay, ev, ui);
				}else{
					// either no change or out-of-bounds (draggable has already reverted)
					resetElement();
					eventElement.css('filter', ''); // clear IE opacity side-effects
					eventElement.css(origPosition); // sometimes fast drags make event revert to wrong position
					updateTimeText(0);
					showEvents(event, eventElement);
				}
			}
		});
		function updateTimeText(minuteDelta) {
			var newStart = addMinutes(cloneDate(event.start), minuteDelta);
			var newEnd;
			if (event.end) {
				newEnd = addMinutes(cloneDate(event.end), minuteDelta);
			}
			timeElement.text(formatDates(newStart, newEnd, opt('timeFormat')));
		}
		function resetElement() {
			// convert back to original slot-event
			if (allDay) {
				timeElement.css('display', ''); // show() was causing display=inline
				eventElement.draggable('option', 'grid', [colWidth, snapHeight]);
				allDay = false;
			}
		}
	}
	
	
	
	/* Resizing
	--------------------------------------------------------------------------------------*/
	
	
	function resizableSlotEvent(event, eventElement, timeElement) {
		var snapDelta, prevSnapDelta;
		var snapHeight = getSnapHeight();
		var snapMinutes = getSnapMinutes();
		eventElement.resizable({
			handles: {
				s: '.ui-resizable-handle'
			},
			grid: snapHeight,
			start: function(ev, ui) {
				snapDelta = prevSnapDelta = 0;
				hideEvents(event, eventElement);
				eventElement.css('z-index', 9);
				trigger('eventResizeStart', this, event, ev, ui);
			},
			resize: function(ev, ui) {
				// don't rely on ui.size.height, doesn't take grid into account
				snapDelta = Math.round((Math.max(snapHeight, eventElement.height()) - ui.originalSize.height) / snapHeight);
				if (snapDelta != prevSnapDelta) {
					timeElement.text(
						formatDates(
							event.start,
							(!snapDelta && !event.end) ? null : // no change, so don't display time range
								addMinutes(eventEnd(event), snapMinutes*snapDelta),
							opt('timeFormat')
						)
					);
					prevSnapDelta = snapDelta;
				}
			},
			stop: function(ev, ui) {
				trigger('eventResizeStop', this, event, ev, ui);
				if (snapDelta) {
					eventResize(this, event, 0, snapMinutes*snapDelta, ev, ui);
				}else{
					eventElement.css('z-index', 8);
					showEvents(event, eventElement);
					// BUG: if event was really short, need to put title back in span
				}
			}
		});
	}
	

}



/* Agenda Event Segment Utilities
-----------------------------------------------------------------------------*/
// TODO: maybe somehow consolidate this with DayEventRenderer's segment system


function stackAgendaSegs(segs) {
	var levels = [],
		i, len = segs.length, seg,
		j, collide, k;
	for (i=0; i<len; i++) {
		seg = segs[i];
		j = 0; // the level index where seg should belong
		while (true) {
			collide = false;
			if (levels[j]) {
				for (k=0; k<levels[j].length; k++) {
					if (agendaSegsCollide(levels[j][k], seg)) {
						collide = true;
						break;
					}
				}
			}
			if (collide) {
				j++;
			}else{
				break;
			}
		}
		if (levels[j]) {
			levels[j].push(seg);
		}else{
			levels[j] = [seg];
		}
	}
	return levels;
}


function countForwardSegs(levels) {
	var i, j, k, level, segForward, segBack;
	for (i=levels.length-1; i>0; i--) {
		level = levels[i];
		for (j=0; j<level.length; j++) {
			segForward = level[j];
			for (k=0; k<levels[i-1].length; k++) {
				segBack = levels[i-1][k];
				if (agendaSegsCollide(segForward, segBack)) {
					segBack.forward = Math.max(segBack.forward||0, (segForward.forward||0)+1);
				}
			}
		}
	}
}


function agendaSegsCollide(seg1, seg2) {
	return seg1.end > seg2.start && seg1.start < seg2.end;
}


;;


function View(element, calendar, viewName) {
	var t = this;
	
	
	// exports
	t.element = element;
	t.calendar = calendar;
	t.name = viewName;
	t.opt = opt;
	t.trigger = trigger;
	t.isEventDraggable = isEventDraggable;
	t.isEventResizable = isEventResizable;
	t.reportEvents = reportEvents;
	t.eventEnd = eventEnd;
	t.reportEventElement = reportEventElement;
	t.reportEventClear = reportEventClear;
	t.eventElementHandlers = eventElementHandlers;
	t.showEvents = showEvents;
	t.hideEvents = hideEvents;
	t.eventDrop = eventDrop;
	t.eventResize = eventResize;
	// t.title
	// t.start, t.end
	// t.visStart, t.visEnd
	
	
	// imports
	var defaultEventEnd = t.defaultEventEnd;
	var normalizeEvent = calendar.normalizeEvent; // in EventManager
	var reportEventChange = calendar.reportEventChange;
	
	
	// locals
	var eventsByID = {};
	var eventElements = [];
	var eventElementsByID = {};
	var options = calendar.options;
	
	
	
	function opt(name, viewNameOverride) {
		var v = options[name];
		if ($.isPlainObject(v)) {
			return smartProperty(v, viewNameOverride || viewName);
		}
		return v;
	}

	
	function trigger(name, thisObj) {
		return calendar.trigger.apply(
			calendar,
			[name, thisObj || t].concat(Array.prototype.slice.call(arguments, 2), [t])
		);
	}
	


	/* Event Editable Boolean Calculations

	------------------------------------------------------------------------------*/
	
	function isEventDraggable(event) {
		return isEventEditable(event) && !opt('disableDragging');
	}
	
	
	function isEventResizable(event) { // but also need to make sure the seg.isEnd == true
		return isEventEditable(event) && !opt('disableResizing');
	}
	
	
	function isEventEditable(event) {
		return firstDefined(event.editable, (event.source || {}).editable, opt('editable'));
	}
	
	
	
	/* Event Data
	------------------------------------------------------------------------------*/
	
	
	// report when view receives new events
	function reportEvents(events) { // events are already normalized at this point
		eventsByID = {};
		var i, len=events.length, event;
		for (i=0; i<len; i++) {
			event = events[i];
			if (eventsByID[event._id]) {
				eventsByID[event._id].push(event);
			}else{
				eventsByID[event._id] = [event];
			}
		}
	}
	
	
	// returns a Date object for an event's end
	function eventEnd(event) {
		return event.end ? cloneDate(event.end) : defaultEventEnd(event);
	}
	
	
	
	/* Event Elements
	------------------------------------------------------------------------------*/
	
	
	// report when view creates an element for an event
	function reportEventElement(event, element) {
		eventElements.push(element);
		if (eventElementsByID[event._id]) {
			eventElementsByID[event._id].push(element);
		}else{
			eventElementsByID[event._id] = [element];
		}
	}
	
	
	function reportEventClear() {
		eventElements = [];
		eventElementsByID = {};
	}
	
	
	// attaches eventClick, eventMouseover, eventMouseout
	function eventElementHandlers(event, eventElement) {
		eventElement
			.click(function(ev) {
				if (!eventElement.hasClass('ui-draggable-dragging') &&
					!eventElement.hasClass('ui-resizable-resizing')) {
						return trigger('eventClick', this, event, ev);
					}
			})
			.hover(
				function(ev) {
					trigger('eventMouseover', this, event, ev);
				},
				function(ev) {
					trigger('eventMouseout', this, event, ev);
				}
			);
		// TODO: don't fire eventMouseover/eventMouseout *while* dragging is occuring (on subject element)
		// TODO: same for resizing
	}
	
	
	function showEvents(event, exceptElement) {
		eachEventElement(event, exceptElement, 'show');
	}
	
	
	function hideEvents(event, exceptElement) {
		eachEventElement(event, exceptElement, 'hide');
	}
	
	
	function eachEventElement(event, exceptElement, funcName) {
		var elements = eventElementsByID[event._id],
			i, len = elements.length;
		for (i=0; i<len; i++) {
			if (!exceptElement || elements[i][0] != exceptElement[0]) {
				elements[i][funcName]();
			}
		}
	}
	
	
	
	/* Event Modification Reporting
	---------------------------------------------------------------------------------*/
	
	
	function eventDrop(e, event, dayDelta, minuteDelta, allDay, ev, ui) {
		var oldAllDay = event.allDay;
		var eventId = event._id;
		moveEvents(eventsByID[eventId], dayDelta, minuteDelta, allDay);
		trigger(
			'eventDrop',
			e,
			event,
			dayDelta,
			minuteDelta,
			allDay,
			function() {
				// TODO: investigate cases where this inverse technique might not work
				moveEvents(eventsByID[eventId], -dayDelta, -minuteDelta, oldAllDay);
				reportEventChange(eventId);
			},
			ev,
			ui
		);
		reportEventChange(eventId);
	}
	
	
	function eventResize(e, event, dayDelta, minuteDelta, ev, ui) {
		var eventId = event._id;
		elongateEvents(eventsByID[eventId], dayDelta, minuteDelta);
		trigger(
			'eventResize',
			e,
			event,
			dayDelta,
			minuteDelta,
			function() {
				// TODO: investigate cases where this inverse technique might not work
				elongateEvents(eventsByID[eventId], -dayDelta, -minuteDelta);
				reportEventChange(eventId);
			},
			ev,
			ui
		);
		reportEventChange(eventId);
	}
	
	
	
	/* Event Modification Math
	---------------------------------------------------------------------------------*/
	
	
	function moveEvents(events, dayDelta, minuteDelta, allDay) {
		minuteDelta = minuteDelta || 0;
		for (var e, len=events.length, i=0; i<len; i++) {
			e = events[i];
			if (allDay !== undefined) {
				e.allDay = allDay;
			}
			addMinutes(addDays(e.start, dayDelta, true), minuteDelta);
			if (e.end) {
				e.end = addMinutes(addDays(e.end, dayDelta, true), minuteDelta);
			}
			normalizeEvent(e, options);
		}
	}
	
	
	function elongateEvents(events, dayDelta, minuteDelta) {
		minuteDelta = minuteDelta || 0;
		for (var e, len=events.length, i=0; i<len; i++) {
			e = events[i];
			e.end = addMinutes(addDays(eventEnd(e), dayDelta, true), minuteDelta);
			normalizeEvent(e, options);
		}
	}



	// ====================================================================================================
	// Utilities for day "cells"
	// ====================================================================================================
	// The "basic" views are completely made up of day cells.
	// The "agenda" views have day cells at the top "all day" slot.
	// This was the obvious common place to put these utilities, but they should be abstracted out into
	// a more meaningful class (like DayEventRenderer).
	// ====================================================================================================


	// For determining how a given "cell" translates into a "date":
	//
	// 1. Convert the "cell" (row and column) into a "cell offset" (the # of the cell, cronologically from the first).
	//    Keep in mind that column indices are inverted with isRTL. This is taken into account.
	//
	// 2. Convert the "cell offset" to a "day offset" (the # of days since the first visible day in the view).
	//
	// 3. Convert the "day offset" into a "date" (a JavaScript Date object).
	//
	// The reverse transformation happens when transforming a date into a cell.


	// exports
	t.isHiddenDay = isHiddenDay;
	t.skipHiddenDays = skipHiddenDays;
	t.getCellsPerWeek = getCellsPerWeek;
	t.dateToCell = dateToCell;
	t.dateToDayOffset = dateToDayOffset;
	t.dayOffsetToCellOffset = dayOffsetToCellOffset;
	t.cellOffsetToCell = cellOffsetToCell;
	t.cellToDate = cellToDate;
	t.cellToCellOffset = cellToCellOffset;
	t.cellOffsetToDayOffset = cellOffsetToDayOffset;
	t.dayOffsetToDate = dayOffsetToDate;
	t.rangeToSegments = rangeToSegments;
	t.segmentCompare = segmentCompare;


	// internals
	var hiddenDays = opt('hiddenDays') || []; // array of day-of-week indices that are hidden
	var isHiddenDayHash = []; // is the day-of-week hidden? (hash with day-of-week-index -> bool)
	var cellsPerWeek;
	var dayToCellMap = []; // hash from dayIndex -> cellIndex, for one week
	var cellToDayMap = []; // hash from cellIndex -> dayIndex, for one week
	var isRTL = opt('isRTL');


	// initialize important internal variables
	(function() {

		if (opt('weekends') === false) {
			hiddenDays.push(0, 6); // 0=sunday, 6=saturday
		}

		// Loop through a hypothetical week and determine which
		// days-of-week are hidden. Record in both hashes (one is the reverse of the other).
		for (var dayIndex=0, cellIndex=0; dayIndex<7; dayIndex++) {
			dayToCellMap[dayIndex] = cellIndex;
			isHiddenDayHash[dayIndex] = $.inArray(dayIndex, hiddenDays) != -1;
			if (!isHiddenDayHash[dayIndex]) {
				cellToDayMap[cellIndex] = dayIndex;
				cellIndex++;
			}
		}

		cellsPerWeek = cellIndex;
		if (!cellsPerWeek) {
			throw 'invalid hiddenDays'; // all days were hidden? bad.
		}

	})();


	// Is the current day hidden?
	// `day` is a day-of-week index (0-6), or a Date object
	function isHiddenDay(day) {
		if (typeof day == 'object') {
			day = day.getDay();
		}
		return isHiddenDayHash[day];
	}


	function getCellsPerWeek() {
		return cellsPerWeek;
	}


	// Keep incrementing the current day until it is no longer a hidden day.
	// If the initial value of `date` is not a hidden day, don't do anything.
	// Pass `isExclusive` as `true` if you are dealing with an end date.
	// `inc` defaults to `1` (increment one day forward each time)
	function skipHiddenDays(date, inc, isExclusive) {
		inc = inc || 1;
		while (
			isHiddenDayHash[ ( date.getDay() + (isExclusive ? inc : 0) + 7 ) % 7 ]
		) {
			addDays(date, inc);
		}
	}


	//
	// TRANSFORMATIONS: cell -> cell offset -> day offset -> date
	//

	// cell -> date (combines all transformations)
	// Possible arguments:
	// - row, col
	// - { row:#, col: # }
	function cellToDate() {
		var cellOffset = cellToCellOffset.apply(null, arguments);
		var dayOffset = cellOffsetToDayOffset(cellOffset);
		var date = dayOffsetToDate(dayOffset);
		return date;
	}

	// cell -> cell offset
	// Possible arguments:
	// - row, col
	// - { row:#, col:# }
	function cellToCellOffset(row, col) {
		var colCnt = t.getColCnt();

		// rtl variables. wish we could pre-populate these. but where?
		var dis = isRTL ? -1 : 1;
		var dit = isRTL ? colCnt - 1 : 0;

		if (typeof row == 'object') {
			col = row.col;
			row = row.row;
		}
		var cellOffset = row * colCnt + (col * dis + dit); // column, adjusted for RTL (dis & dit)

		return cellOffset;
	}

	// cell offset -> day offset
	function cellOffsetToDayOffset(cellOffset) {
		var day0 = t.visStart.getDay(); // first date's day of week
		cellOffset += dayToCellMap[day0]; // normlize cellOffset to beginning-of-week
		return Math.floor(cellOffset / cellsPerWeek) * 7 // # of days from full weeks
			+ cellToDayMap[ // # of days from partial last week
				(cellOffset % cellsPerWeek + cellsPerWeek) % cellsPerWeek // crazy math to handle negative cellOffsets
			]
			- day0; // adjustment for beginning-of-week normalization
	}

	// day offset -> date (JavaScript Date object)
	function dayOffsetToDate(dayOffset) {
		var date = cloneDate(t.visStart);
		addDays(date, dayOffset);
		return date;
	}


	//
	// TRANSFORMATIONS: date -> day offset -> cell offset -> cell
	//

	// date -> cell (combines all transformations)
	function dateToCell(date) {
		var dayOffset = dateToDayOffset(date);
		var cellOffset = dayOffsetToCellOffset(dayOffset);
		var cell = cellOffsetToCell(cellOffset);
		return cell;
	}

	// date -> day offset
	function dateToDayOffset(date) {
		return dayDiff(date, t.visStart);
	}

	// day offset -> cell offset
	function dayOffsetToCellOffset(dayOffset) {
		var day0 = t.visStart.getDay(); // first date's day of week
		dayOffset += day0; // normalize dayOffset to beginning-of-week
		return Math.floor(dayOffset / 7) * cellsPerWeek // # of cells from full weeks
			+ dayToCellMap[ // # of cells from partial last week
				(dayOffset % 7 + 7) % 7 // crazy math to handle negative dayOffsets
			]
			- dayToCellMap[day0]; // adjustment for beginning-of-week normalization
	}

	// cell offset -> cell (object with row & col keys)
	function cellOffsetToCell(cellOffset) {
		var colCnt = t.getColCnt();

		// rtl variables. wish we could pre-populate these. but where?
		var dis = isRTL ? -1 : 1;
		var dit = isRTL ? colCnt - 1 : 0;

		var row = Math.floor(cellOffset / colCnt);
		var col = ((cellOffset % colCnt + colCnt) % colCnt) * dis + dit; // column, adjusted for RTL (dis & dit)
		return {
			row: row,
			col: col
		};
	}


	//
	// Converts a date range into an array of segment objects.
	// "Segments" are horizontal stretches of time, sliced up by row.
	// A segment object has the following properties:
	// - row
	// - cols
	// - isStart
	// - isEnd
	//
	function rangeToSegments(startDate, endDate) {
		var rowCnt = t.getRowCnt();
		var colCnt = t.getColCnt();
		var segments = []; // array of segments to return

		// day offset for given date range
		var rangeDayOffsetStart = dateToDayOffset(startDate);
		var rangeDayOffsetEnd = dateToDayOffset(endDate); // exclusive

		// first and last cell offset for the given date range
		// "last" implies inclusivity
		var rangeCellOffsetFirst = dayOffsetToCellOffset(rangeDayOffsetStart);
		var rangeCellOffsetLast = dayOffsetToCellOffset(rangeDayOffsetEnd) - 1;

		// loop through all the rows in the view
		for (var row=0; row<rowCnt; row++) {

			// first and last cell offset for the row
			var rowCellOffsetFirst = row * colCnt;
			var rowCellOffsetLast = rowCellOffsetFirst + colCnt - 1;

			// get the segment's cell offsets by constraining the range's cell offsets to the bounds of the row
			var segmentCellOffsetFirst = Math.max(rangeCellOffsetFirst, rowCellOffsetFirst);
			var segmentCellOffsetLast = Math.min(rangeCellOffsetLast, rowCellOffsetLast);

			// make sure segment's offsets are valid and in view
			if (segmentCellOffsetFirst <= segmentCellOffsetLast) {

				// translate to cells
				var segmentCellFirst = cellOffsetToCell(segmentCellOffsetFirst);
				var segmentCellLast = cellOffsetToCell(segmentCellOffsetLast);

				// view might be RTL, so order by leftmost column
				var cols = [ segmentCellFirst.col, segmentCellLast.col ].sort();

				// Determine if segment's first/last cell is the beginning/end of the date range.
				// We need to compare "day offset" because "cell offsets" are often ambiguous and
				// can translate to multiple days, and an edge case reveals itself when we the
				// range's first cell is hidden (we don't want isStart to be true).
				var isStart = cellOffsetToDayOffset(segmentCellOffsetFirst) == rangeDayOffsetStart;
				var isEnd = cellOffsetToDayOffset(segmentCellOffsetLast) + 1 == rangeDayOffsetEnd; // +1 for comparing exclusively

				segments.push({
					row: row,
					leftCol: cols[0],
					rightCol: cols[1],
					isStart: isStart,
					isEnd: isEnd
				});
			}
		}

		return segments;
	}


	// Compare two event segments and determine which one takes priority (ex: rendered topmost/leftmost)
	// NOTE: only works with segments that have `event` properties!
	//
	// Returns a negative value if `a` should be first.
	// Returns a positive value of `b` should be first.
	function segmentCompare(a, b) {
		return _segmentCompare(a, b) // sort by dimension
			|| (a.event.start - b.event.start) // if a tie, sort by event start date
			|| (a.event.title || "").localeCompare(b.event.title) // if a tie, sort by event title
	}

	// compare dimensions
	// NOTE: this is not modular! depends on subclass-specific segment schemas
	function _segmentCompare(a, b) {
		if ('msLength' in a) {
			// segment generated by AgendaEventRenderer
			return b.msLength - a.msLength; // put taller events first
		}
		// segment generated by DayEventRenderer
		return (b.rightCol - b.leftCol) - (a.rightCol - a.leftCol) // put wider events first
			|| b.event.allDay - a.event.allDay; // if tie, put all-day events first (booleans cast to 0/1)
	}
	

}

;;

function DayEventRenderer() {
	var t = this;

	
	// exports
	t.renderDayEvents = renderDayEvents;
	t.draggableDayEvent = draggableDayEvent; // made public so that subclasses can override
	t.resizableDayEvent = resizableDayEvent; // "
	
	
	// imports
	var opt = t.opt;
	var trigger = t.trigger;
	var isEventDraggable = t.isEventDraggable;
	var isEventResizable = t.isEventResizable;
	var eventEnd = t.eventEnd;
	var reportEventElement = t.reportEventElement;
	var eventElementHandlers = t.eventElementHandlers;
	var showEvents = t.showEvents;
	var hideEvents = t.hideEvents;
	var eventDrop = t.eventDrop;
	var eventResize = t.eventResize;
	var getRowCnt = t.getRowCnt;
	var getColCnt = t.getColCnt;
	var getColWidth = t.getColWidth;
	var allDayRow = t.allDayRow; // TODO: rename
	var colLeft = t.colLeft;
	var colRight = t.colRight;
	var colContentLeft = t.colContentLeft;
	var colContentRight = t.colContentRight;
	var dateToCell = t.dateToCell;
	var getDaySegmentContainer = t.getDaySegmentContainer;
	var formatDates = t.calendar.formatDates;
	var renderDayOverlay = t.renderDayOverlay;
	var clearOverlays = t.clearOverlays;
	var clearSelection = t.clearSelection;
	var getHoverListener = t.getHoverListener;
	var rangeToSegments = t.rangeToSegments;
	var segmentCompare = t.segmentCompare;
	var cellToDate = t.cellToDate;
	var cellToCellOffset = t.cellToCellOffset;
	var cellOffsetToDayOffset = t.cellOffsetToDayOffset;
	var dateToDayOffset = t.dateToDayOffset;
	var dayOffsetToCellOffset = t.dayOffsetToCellOffset;


	// Render `events` onto the calendar, attach mouse event handlers, and call the `eventAfterRender` callback for each.
	// Mouse event will be lazily applied, except if the event has an ID of `modifiedEventId`.
	// Can only be called when the event container is empty (because it wipes out all innerHTML).
	function renderDayEvents(events, modifiedEventId) {

		// do the actual rendering. Receive the intermediate "segment" data structures.
		var segments = _renderDayEvents(
			events,
			false, // don't append event elements
			true // set the heights of the rows
		);

		// report the elements to the View, for general drag/resize utilities
		segmentElementEach(segments, function(segment, element) {
			reportEventElement(segment.event, element);
		});

		// attach mouse handlers
		attachHandlers(segments, modifiedEventId);

		// call `eventAfterRender` callback for each event
		segmentElementEach(segments, function(segment, element) {
			trigger('eventAfterRender', segment.event, segment.event, element);
		});
	}


	// Render an event on the calendar, but don't report them anywhere, and don't attach mouse handlers.
	// Append this event element to the event container, which might already be populated with events.
	// If an event's segment will have row equal to `adjustRow`, then explicitly set its top coordinate to `adjustTop`.
	// This hack is used to maintain continuity when user is manually resizing an event.
	// Returns an array of DOM elements for the event.
	function renderTempDayEvent(event, adjustRow, adjustTop) {

		// actually render the event. `true` for appending element to container.
		// Recieve the intermediate "segment" data structures.
		var segments = _renderDayEvents(
			[ event ],
			true, // append event elements
			false // don't set the heights of the rows
		);

		var elements = [];

		// Adjust certain elements' top coordinates
		segmentElementEach(segments, function(segment, element) {
			if (segment.row === adjustRow) {
				element.css('top', adjustTop);
			}
			elements.push(element[0]); // accumulate DOM nodes
		});

		return elements;
	}


	// Render events onto the calendar. Only responsible for the VISUAL aspect.
	// Not responsible for attaching handlers or calling callbacks.
	// Set `doAppend` to `true` for rendering elements without clearing the existing container.
	// Set `doRowHeights` to allow setting the height of each row, to compensate for vertical event overflow.
	function _renderDayEvents(events, doAppend, doRowHeights) {

		// where the DOM nodes will eventually end up
		var finalContainer = getDaySegmentContainer();

		// the container where the initial HTML will be rendered.
		// If `doAppend`==true, uses a temporary container.
		var renderContainer = doAppend ? $("<div/>") : finalContainer;

		var segments = buildSegments(events);
		var html;
		var elements;

		// calculate the desired `left` and `width` properties on each segment object
		calculateHorizontals(segments);

		// build the HTML string. relies on `left` property
		html = buildHTML(segments);

		// render the HTML. innerHTML is considerably faster than jQuery's .html()
		renderContainer[0].innerHTML = html;

		// retrieve the individual elements
		elements = renderContainer.children();

		// if we were appending, and thus using a temporary container,
		// re-attach elements to the real container.
		if (doAppend) {
			finalContainer.append(elements);
		}

		// assigns each element to `segment.event`, after filtering them through user callbacks
		resolveElements(segments, elements);

		// Calculate the left and right padding+margin for each element.
		// We need this for setting each element's desired outer width, because of the W3C box model.
		// It's important we do this in a separate pass from acually setting the width on the DOM elements
		// because alternating reading/writing dimensions causes reflow for every iteration.
		segmentElementEach(segments, function(segment, element) {
			segment.hsides = hsides(element, true); // include margins = `true`
		});

		// Set the width of each element
		segmentElementEach(segments, function(segment, element) {
			element.width(
				Math.max(0, segment.outerWidth - segment.hsides)
			);
		});

		// Grab each element's outerHeight (setVerticals uses this).
		// To get an accurate reading, it's important to have each element's width explicitly set already.
		segmentElementEach(segments, function(segment, element) {
			segment.outerHeight = element.outerHeight(true); // include margins = `true`
		});

		// Set the top coordinate on each element (requires segment.outerHeight)
		setVerticals(segments, doRowHeights);

		return segments;
	}


	// Generate an array of "segments" for all events.
	function buildSegments(events) {
		var segments = [];
		for (var i=0; i<events.length; i++) {
			var eventSegments = buildSegmentsForEvent(events[i]);
			segments.push.apply(segments, eventSegments); // append an array to an array
		}
		return segments;
	}


	// Generate an array of segments for a single event.
	// A "segment" is the same data structure that View.rangeToSegments produces,
	// with the addition of the `event` property being set to reference the original event.
	function buildSegmentsForEvent(event) {
		var startDate = event.start;
		var endDate = exclEndDay(event);
		var segments = rangeToSegments(startDate, endDate);
		for (var i=0; i<segments.length; i++) {
			segments[i].event = event;
		}
		return segments;
	}


	// Sets the `left` and `outerWidth` property of each segment.
	// These values are the desired dimensions for the eventual DOM elements.
	function calculateHorizontals(segments) {
		var isRTL = opt('isRTL');
		for (var i=0; i<segments.length; i++) {
			var segment = segments[i];

			// Determine functions used for calulating the elements left/right coordinates,
			// depending on whether the view is RTL or not.
			// NOTE:
			// colLeft/colRight returns the coordinate butting up the edge of the cell.
			// colContentLeft/colContentRight is indented a little bit from the edge.
			var leftFunc = (isRTL ? segment.isEnd : segment.isStart) ? colContentLeft : colLeft;
			var rightFunc = (isRTL ? segment.isStart : segment.isEnd) ? colContentRight : colRight;

			var left = leftFunc(segment.leftCol);
			var right = rightFunc(segment.rightCol);
			segment.left = left;
			segment.outerWidth = right - left;
		}
	}


	// Build a concatenated HTML string for an array of segments
	function buildHTML(segments) {
		var html = '';
		for (var i=0; i<segments.length; i++) {
			html += buildHTMLForSegment(segments[i]);
		}
		return html;
	}


	// Build an HTML string for a single segment.
	// Relies on the following properties:
	// - `segment.event` (from `buildSegmentsForEvent`)
	// - `segment.left` (from `calculateHorizontals`)
	function buildHTMLForSegment(segment) {
		var html = '';
		var isRTL = opt('isRTL');
		var event = segment.event;
		var url = event.url;

		// generate the list of CSS classNames
		var classNames = [ 'fc-event', 'fc-event-hori' ];
		if (isEventDraggable(event)) {
			classNames.push('fc-event-draggable');
		}
		if (segment.isStart) {
			classNames.push('fc-event-start');
		}
		if (segment.isEnd) {
			classNames.push('fc-event-end');
		}
		// use the event's configured classNames
		// guaranteed to be an array via `normalizeEvent`
		classNames = classNames.concat(event.className);
		if (event.source) {
			// use the event's source's classNames, if specified
			classNames = classNames.concat(event.source.className || []);
		}

		// generate a semicolon delimited CSS string for any of the "skin" properties
		// of the event object (`backgroundColor`, `borderColor` and such)
		var skinCss = getSkinCss(event, opt);

		if (url) {
			html += "<a href='" + htmlEscape(url) + "'";
		}else{
			html += "<div";
		}
		html +=
			" class='" + classNames.join(' ') + "'" +
			" style=" +
				"'" +
				"position:absolute;" +
				"z-index:8;" + // TODO: move this into a constant or put it in the stylesheet
				"left:" + segment.left + "px;" +
				skinCss +
				"'" +
			">" +
			"<div class='fc-event-inner'>";
		if (!event.allDay && segment.isStart) {
			html +=
				"<span class='fc-event-time'>" +
				htmlEscape(
					formatDates(event.start, event.end, opt('timeFormat'))
				) +
				"</span>";
		}
		html +=
			"<span class='fc-event-title'>" + htmlEscape(event.title) + "</span>" +
			"</div>";
		if (segment.isEnd && isEventResizable(event)) {
			html +=
				"<div class='ui-resizable-handle ui-resizable-" + (isRTL ? 'w' : 'e') + "'>" +
				"&nbsp;&nbsp;&nbsp;" + // makes hit area a lot better for IE6/7
				"</div>";
		}
		html += "</" + (url ? "a" : "div") + ">";

		// TODO:
		// When these elements are initially rendered, they will be briefly visibile on the screen,
		// even though their widths/heights are not set.
		// SOLUTION: initially set them as visibility:hidden ?

		return html;
	}


	// Associate each segment (an object) with an element (a jQuery object),
	// by setting each `segment.element`.
	// Run each element through the `eventRender` filter, which allows developers to
	// modify an existing element, supply a new one, or cancel rendering.
	function resolveElements(segments, elements) {
		for (var i=0; i<segments.length; i++) {
			var segment = segments[i];
			var event = segment.event;
			var element = elements.eq(i);

			// call the trigger with the original element
			var triggerRes = trigger('eventRender', event, event, element);

			if (triggerRes === false) {
				// if `false`, remove the event from the DOM and don't assign it to `segment.event`
				element.remove();
			}
			else {
				if (triggerRes && triggerRes !== true) {
					// the trigger returned a new element, but not `true` (which means keep the existing element)

					// re-assign the important CSS dimension properties that were already assigned in `buildHTMLForSegment`
					triggerRes = $(triggerRes)
						.css({
							position: 'absolute',
							zIndex: 8, // TODO: move this into a constant or put it in the stylesheet
							left: segment.left
						});

					element.replaceWith(triggerRes);
					element = triggerRes;
				}

				segment.element = element;
			}
		}
	}



	/* Top-coordinate Methods
	-------------------------------------------------------------------------------------------------*/


	// Sets the "top" CSS property for each element.
	// If `doRowHeights` is `true`, also sets each row's first cell to an explicit height,
	// so that if elements vertically overflow, the cell expands vertically to compensate.
	function setVerticals(segments, doRowHeights) {
		var rowContentHeights = calculateVerticals(segments); // also sets segment.top
		var rowContentElements = getRowContentElements(); // returns 1 inner div per row
		var rowContentTops = [];

		// Set each row's height by setting height of first inner div
		if (doRowHeights) {
			for (var i=0; i<rowContentElements.length; i++) {
				rowContentElements[i].height(rowContentHeights[i]);
			}
		}

		// Get each row's top, relative to the views's origin.
		// Important to do this after setting each row's height.
		for (var i=0; i<rowContentElements.length; i++) {
			rowContentTops.push(
				rowContentElements[i].position().top
			);
		}

		// Set each segment element's CSS "top" property.
		// Each segment object has a "top" property, which is relative to the row's top, but...
		segmentElementEach(segments, function(segment, element) {
			element.css(
				'top',
				rowContentTops[segment.row] + segment.top // ...now, relative to views's origin
			);
		});
	}


	// Calculate the "top" coordinate for each segment, relative to the "top" of the row.
	// Also, return an array that contains the "content" height for each row
	// (the height displaced by the vertically stacked events in the row).
	// Requires segments to have their `outerHeight` property already set.
	function calculateVerticals(segments) {
		var rowCnt = getRowCnt();
		var colCnt = getColCnt();
		var rowContentHeights = []; // content height for each row
		var segmentRows = buildSegmentRows(segments); // an array of segment arrays, one for each row

		for (var rowI=0; rowI<rowCnt; rowI++) {
			var segmentRow = segmentRows[rowI];

			// an array of running total heights for each column.
			// initialize with all zeros.
			var colHeights = [];
			for (var colI=0; colI<colCnt; colI++) {
				colHeights.push(0);
			}

			// loop through every segment
			for (var segmentI=0; segmentI<segmentRow.length; segmentI++) {
				var segment = segmentRow[segmentI];

				// find the segment's top coordinate by looking at the max height
				// of all the columns the segment will be in.
				segment.top = arrayMax(
					colHeights.slice(
						segment.leftCol,
						segment.rightCol + 1 // make exclusive for slice
					)
				);

				// adjust the columns to account for the segment's height
				for (var colI=segment.leftCol; colI<=segment.rightCol; colI++) {
					colHeights[colI] = segment.top + segment.outerHeight;
				}
			}

			// the tallest column in the row should be the "content height"
			rowContentHeights.push(arrayMax(colHeights));
		}

		return rowContentHeights;
	}


	// Build an array of segment arrays, each representing the segments that will
	// be in a row of the grid, sorted by which event should be closest to the top.
	function buildSegmentRows(segments) {
		var rowCnt = getRowCnt();
		var segmentRows = [];
		var segmentI;
		var segment;
		var rowI;

		// group segments by row
		for (segmentI=0; segmentI<segments.length; segmentI++) {
			segment = segments[segmentI];
			rowI = segment.row;
			if (segment.element) { // was rendered?
				if (segmentRows[rowI]) {
					// already other segments. append to array
					segmentRows[rowI].push(segment);
				}
				else {
					// first segment in row. create new array
					segmentRows[rowI] = [ segment ];
				}
			}
		}

		// sort each row
		for (rowI=0; rowI<rowCnt; rowI++) {
			segmentRows[rowI] = sortSegmentRow(
				segmentRows[rowI] || [] // guarantee an array, even if no segments
			);
		}

		return segmentRows;
	}


	// Sort an array of segments according to which segment should appear closest to the top
	function sortSegmentRow(segments) {
		var sortedSegments = [];

		// build the subrow array
		var subrows = buildSegmentSubrows(segments);

		// flatten it
		for (var i=0; i<subrows.length; i++) {
			sortedSegments.push.apply(sortedSegments, subrows[i]); // append an array to an array
		}

		return sortedSegments;
	}


	// Take an array of segments, which are all assumed to be in the same row,
	// and sort into subrows.
	function buildSegmentSubrows(segments) {

		// Give preference to elements with certain criteria, so they have
		// a chance to be closer to the top.
		segments.sort(segmentCompare);

		var subrows = [];
		for (var i=0; i<segments.length; i++) {
			var segment = segments[i];

			// loop through subrows, starting with the topmost, until the segment
			// doesn't collide with other segments.
			for (var j=0; j<subrows.length; j++) {
				if (!isDaySegmentCollision(segment, subrows[j])) {
					break;
				}
			}
			// `j` now holds the desired subrow index
			if (subrows[j]) {
				subrows[j].push(segment);
			}
			else {
				subrows[j] = [ segment ];
			}
		}

		return subrows;
	}


	// Return an array of jQuery objects for the placeholder content containers of each row.
	// The content containers don't actually contain anything, but their dimensions should match
	// the events that are overlaid on top.
	function getRowContentElements() {
		var i;
		var rowCnt = getRowCnt();
		var rowDivs = [];
		for (i=0; i<rowCnt; i++) {
			rowDivs[i] = allDayRow(i)
				.find('div.fc-day-content > div');
		}
		return rowDivs;
	}



	/* Mouse Handlers
	---------------------------------------------------------------------------------------------------*/
	// TODO: better documentation!


	function attachHandlers(segments, modifiedEventId) {
		var segmentContainer = getDaySegmentContainer();

		segmentElementEach(segments, function(segment, element, i) {
			var event = segment.event;
			if (event._id === modifiedEventId) {
				bindDaySeg(event, element, segment);
			}else{
				element[0]._fci = i; // for lazySegBind
			}
		});

		lazySegBind(segmentContainer, segments, bindDaySeg);
	}


	function bindDaySeg(event, eventElement, segment) {

		if (isEventDraggable(event)) {
			t.draggableDayEvent(event, eventElement, segment); // use `t` so subclasses can override
		}

		if (
			segment.isEnd && // only allow resizing on the final segment for an event
			isEventResizable(event)
		) {
			t.resizableDayEvent(event, eventElement, segment); // use `t` so subclasses can override
		}

		// attach all other handlers.
		// needs to be after, because resizableDayEvent might stopImmediatePropagation on click
		eventElementHandlers(event, eventElement);
	}

	
	function draggableDayEvent(event, eventElement) {
		var hoverListener = getHoverListener();
		var dayDelta;
		eventElement.draggable({
			zIndex: 9,
			delay: 50,
			opacity: opt('dragOpacity'),
			revertDuration: opt('dragRevertDuration'),
			start: function(ev, ui) {
				trigger('eventDragStart', eventElement, event, ev, ui);
				hideEvents(event, eventElement);
				hoverListener.start(function(cell, origCell, rowDelta, colDelta) {
					eventElement.draggable('option', 'revert', !cell || !rowDelta && !colDelta);
					clearOverlays();
					if (cell) {
						var origDate = cellToDate(origCell);
						var date = cellToDate(cell);
						dayDelta = dayDiff(date, origDate);
						renderDayOverlay(
							addDays(cloneDate(event.start), dayDelta),
							addDays(exclEndDay(event), dayDelta)
						);
					}else{
						dayDelta = 0;
					}
				}, ev, 'drag');
			},
			stop: function(ev, ui) {
				hoverListener.stop();
				clearOverlays();
				trigger('eventDragStop', eventElement, event, ev, ui);
				if (dayDelta) {
					eventDrop(this, event, dayDelta, 0, event.allDay, ev, ui);
				}else{
					eventElement.css('filter', ''); // clear IE opacity side-effects
					showEvents(event, eventElement);
				}
			}
		});
	}

	
	function resizableDayEvent(event, element, segment) {
		var isRTL = opt('isRTL');
		var direction = isRTL ? 'w' : 'e';
		var handle = element.find('.ui-resizable-' + direction); // TODO: stop using this class because we aren't using jqui for this
		var isResizing = false;
		
		// TODO: look into using jquery-ui mouse widget for this stuff
		disableTextSelection(element); // prevent native <a> selection for IE
		element
			.mousedown(function(ev) { // prevent native <a> selection for others
				ev.preventDefault();
			})
			.click(function(ev) {
				if (isResizing) {
					ev.preventDefault(); // prevent link from being visited (only method that worked in IE6)
					ev.stopImmediatePropagation(); // prevent fullcalendar eventClick handler from being called
					                               // (eventElementHandlers needs to be bound after resizableDayEvent)
				}
			});
		
		handle.mousedown(function(ev) {
			if (ev.which != 1) {
				return; // needs to be left mouse button
			}
			isResizing = true;
			var hoverListener = getHoverListener();
			var rowCnt = getRowCnt();
			var colCnt = getColCnt();
			var elementTop = element.css('top');
			var dayDelta;
			var helpers;
			var eventCopy = $.extend({}, event);
			var minCellOffset = dayOffsetToCellOffset( dateToDayOffset(event.start) );
			clearSelection();
			$('body')
				.css('cursor', direction + '-resize')
				.one('mouseup', mouseup);
			trigger('eventResizeStart', this, event, ev);
			hoverListener.start(function(cell, origCell) {
				if (cell) {

					var origCellOffset = cellToCellOffset(origCell);
					var cellOffset = cellToCellOffset(cell);

					// don't let resizing move earlier than start date cell
					cellOffset = Math.max(cellOffset, minCellOffset);

					dayDelta =
						cellOffsetToDayOffset(cellOffset) -
						cellOffsetToDayOffset(origCellOffset);

					if (dayDelta) {
						eventCopy.end = addDays(eventEnd(event), dayDelta, true);
						var oldHelpers = helpers;

						helpers = renderTempDayEvent(eventCopy, segment.row, elementTop);
						helpers = $(helpers); // turn array into a jQuery object

						helpers.find('*').css('cursor', direction + '-resize');
						if (oldHelpers) {
							oldHelpers.remove();
						}

						hideEvents(event);
					}
					else {
						if (helpers) {
							showEvents(event);
							helpers.remove();
							helpers = null;
						}
					}
					clearOverlays();
					renderDayOverlay( // coordinate grid already rebuilt with hoverListener.start()
						event.start,
						addDays( exclEndDay(event), dayDelta )
						// TODO: instead of calling renderDayOverlay() with dates,
						// call _renderDayOverlay (or whatever) with cell offsets.
					);
				}
			}, ev);
			
			function mouseup(ev) {
				trigger('eventResizeStop', this, event, ev);
				$('body').css('cursor', '');
				hoverListener.stop();
				clearOverlays();
				if (dayDelta) {
					eventResize(this, event, dayDelta, 0, ev);
					// event redraw will clear helpers
				}
				// otherwise, the drag handler already restored the old events
				
				setTimeout(function() { // make this happen after the element's click event
					isResizing = false;
				},0);
			}
		});
	}
	

}



/* Generalized Segment Utilities
-------------------------------------------------------------------------------------------------*/


function isDaySegmentCollision(segment, otherSegments) {
	for (var i=0; i<otherSegments.length; i++) {
		var otherSegment = otherSegments[i];
		if (
			otherSegment.leftCol <= segment.rightCol &&
			otherSegment.rightCol >= segment.leftCol
		) {
			return true;
		}
	}
	return false;
}


function segmentElementEach(segments, callback) { // TODO: use in AgendaView?
	for (var i=0; i<segments.length; i++) {
		var segment = segments[i];
		var element = segment.element;
		if (element) {
			callback(segment, element, i);
		}
	}
}

;;

//BUG: unselect needs to be triggered when events are dragged+dropped

function SelectionManager() {
	var t = this;
	
	
	// exports
	t.select = select;
	t.unselect = unselect;
	t.reportSelection = reportSelection;
	t.daySelectionMousedown = daySelectionMousedown;
	
	
	// imports
	var opt = t.opt;
	var trigger = t.trigger;
	var defaultSelectionEnd = t.defaultSelectionEnd;
	var renderSelection = t.renderSelection;
	var clearSelection = t.clearSelection;
	
	
	// locals
	var selected = false;



	// unselectAuto
	if (opt('selectable') && opt('unselectAuto')) {
		$(document).mousedown(function(ev) {
			var ignore = opt('unselectCancel');
			if (ignore) {
				if ($(ev.target).parents(ignore).length) { // could be optimized to stop after first match
					return;
				}
			}
			unselect(ev);
		});
	}
	

	function select(startDate, endDate, allDay) {
		unselect();
		if (!endDate) {
			endDate = defaultSelectionEnd(startDate, allDay);
		}
		renderSelection(startDate, endDate, allDay);
		reportSelection(startDate, endDate, allDay);
	}
	
	
	function unselect(ev) {
		if (selected) {
			selected = false;
			clearSelection();
			trigger('unselect', null, ev);
		}
	}
	
	
	function reportSelection(startDate, endDate, allDay, ev) {
		selected = true;
		trigger('select', null, startDate, endDate, allDay, ev);
	}
	
	
	function daySelectionMousedown(ev) { // not really a generic manager method, oh well
		var cellToDate = t.cellToDate;
		var getIsCellAllDay = t.getIsCellAllDay;
		var hoverListener = t.getHoverListener();
		var reportDayClick = t.reportDayClick; // this is hacky and sort of weird
		if (ev.which == 1 && opt('selectable')) { // which==1 means left mouse button
			unselect(ev);
			var _mousedownElement = this;
			var dates;
			hoverListener.start(function(cell, origCell) { // TODO: maybe put cellToDate/getIsCellAllDay info in cell
				clearSelection();
				if (cell && getIsCellAllDay(cell)) {
					dates = [ cellToDate(origCell), cellToDate(cell) ].sort(dateCompare);
					renderSelection(dates[0], dates[1], true);
				}else{
					dates = null;
				}
			}, ev);
			$(document).one('mouseup', function(ev) {
				hoverListener.stop();
				if (dates) {
					if (+dates[0] == +dates[1]) {
						reportDayClick(dates[0], true, ev);
					}
					reportSelection(dates[0], dates[1], true, ev);
				}
			});
		}
	}


}

;;
 
function OverlayManager() {
	var t = this;
	
	
	// exports
	t.renderOverlay = renderOverlay;
	t.clearOverlays = clearOverlays;
	
	
	// locals
	var usedOverlays = [];
	var unusedOverlays = [];
	
	
	function renderOverlay(rect, parent) {
		var e = unusedOverlays.shift();
		if (!e) {
			e = $("<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>");
		}
		if (e[0].parentNode != parent[0]) {
			e.appendTo(parent);
		}
		usedOverlays.push(e.css(rect).show());
		return e;
	}
	

	function clearOverlays() {
		var e;
		while (e = usedOverlays.shift()) {
			unusedOverlays.push(e.hide().unbind());
		}
	}


}

;;

function CoordinateGrid(buildFunc) {

	var t = this;
	var rows;
	var cols;
	
	
	t.build = function() {
		rows = [];
		cols = [];
		buildFunc(rows, cols);
	};
	
	
	t.cell = function(x, y) {
		var rowCnt = rows.length;
		var colCnt = cols.length;
		var i, r=-1, c=-1;
		for (i=0; i<rowCnt; i++) {
			if (y >= rows[i][0] && y < rows[i][1]) {
				r = i;
				break;
			}
		}
		for (i=0; i<colCnt; i++) {
			if (x >= cols[i][0] && x < cols[i][1]) {
				c = i;
				break;
			}
		}
		return (r>=0 && c>=0) ? { row:r, col:c } : null;
	};
	
	
	t.rect = function(row0, col0, row1, col1, originElement) { // row1,col1 is inclusive
		var origin = originElement.offset();
		return {
			top: rows[row0][0] - origin.top,
			left: cols[col0][0] - origin.left,
			width: cols[col1][1] - cols[col0][0],
			height: rows[row1][1] - rows[row0][0]
		};
	};

}

;;

function HoverListener(coordinateGrid) {


	var t = this;
	var bindType;
	var change;
	var firstCell;
	var cell;
	
	
	t.start = function(_change, ev, _bindType) {
		change = _change;
		firstCell = cell = null;
		coordinateGrid.build();
		mouse(ev);
		bindType = _bindType || 'mousemove';
		$(document).bind(bindType, mouse);
	};
	
	
	function mouse(ev) {
		_fixUIEvent(ev); // see below
		var newCell = coordinateGrid.cell(ev.pageX, ev.pageY);
		if (!newCell != !cell || newCell && (newCell.row != cell.row || newCell.col != cell.col)) {
			if (newCell) {
				if (!firstCell) {
					firstCell = newCell;
				}
				change(newCell, firstCell, newCell.row-firstCell.row, newCell.col-firstCell.col);
			}else{
				change(newCell, firstCell);
			}
			cell = newCell;
		}
	}
	
	
	t.stop = function() {
		$(document).unbind(bindType, mouse);
		return cell;
	};
	
	
}



// this fix was only necessary for jQuery UI 1.8.16 (and jQuery 1.7 or 1.7.1)
// upgrading to jQuery UI 1.8.17 (and using either jQuery 1.7 or 1.7.1) fixed the problem
// but keep this in here for 1.8.16 users
// and maybe remove it down the line

function _fixUIEvent(event) { // for issue 1168
	if (event.pageX === undefined) {
		event.pageX = event.originalEvent.pageX;
		event.pageY = event.originalEvent.pageY;
	}
}
;;

function HorizontalPositionCache(getElement) {

	var t = this,
		elements = {},
		lefts = {},
		rights = {};
		
	function e(i) {
		return elements[i] = elements[i] || getElement(i);
	}
	
	t.left = function(i) {
		return lefts[i] = lefts[i] === undefined ? e(i).position().left : lefts[i];
	};
	
	t.right = function(i) {
		return rights[i] = rights[i] === undefined ? t.left(i) + e(i).width() : rights[i];
	};
	
	t.clear = function() {
		elements = {};
		lefts = {};
		rights = {};
	};
	
}

;;

})(jQuery);
/******************************* FullCalendar ends ****************************/

/***************** Confirm box Starts *****************/
(function($) {
	var methods = {
		init : function(o, options) {
			var self = $(o);
			self.el = self;
			self.opt = $.extend({}, $.fn.formValidate.setting, options);
			this.self = self;
			$(".confirmbox-content", self).removeAttr("style");
			$(".confirmbox-message", self).html(self.opt.message || "Messages");
			$(document).off("click", "#confirm_yes").on("click", "#confirm_yes", function() {
				methods.yes(self);
			});
			$(document).off("click", "#confirm_no").on("click", "#confirm_no", function() {
				methods.no(self);
			});
			if (self.opt.buttons) {
				methods.buttons(self.opt.buttons);
			} else {
				$('.confirmbox-footer').html('<button type="button" class="btn btn-sm cust-btn btn-success" id="confirm_yes"><i class="fa fa-thumbs-up"></i> Yes</button><button type="button" class="btn btn-sm cust-btn btn-cancel" id="confirm_no"><i class="fa fa-thumbs-down"></i> No</button>');
			}
		},
		show : function(ele) {
			var self = ele;
			self.fadeIn();
			this.update(self);
		},
		hide : function(ele) {
			var self = ele;
			self.fadeOut();
		},
		update : function(ele) {
			var self = ele, self_content = $(".confirmbox-content", self), self_h = self_content.height(), self_window = $(window).height();
			var pos = Math.round((self_window - self_h) / 2);
			pos = (pos > 0) ? pos : 0;
			self_content.animate({
				"top" : pos + "px"
			}, 600);
		},
		yes : function(self) {
			methods.hide(self.el);
			if (self.opt.yes) {
				self.opt.yes(self);
			}
		},
		no : function(self) {
			methods.hide(self.el);
			if (self.opt.no) {
				self.opt.no(self);
			}
		},
		buttons : function(buttons) {
			var btngroup = '', template;
			$('.confirmbox-footer').html('');
			$.each(buttons, function(i, props) {
				var btn = new methods.createButtons(props);
				btn.draw();
				btn.addEventListener('click', function() {
					props.click();
				});
			});
		},
		createButtons : function(obj) {
			this.draw = function() {
				this.element = document.createElement("button");
				this.element.type = obj.type;
				this.element.className = 'btn btn-' + obj.btnClass + ' btn-sm';
				this.element.innerHTML = obj.icon + ' ' + obj.text;
				$('.confirmbox-footer').append(this.element);
			};
		}
	};
	methods.createButtons.prototype.addEventListener = function(event, handler) {
		var el = this.element;
		if (!el) {
			throw 'Not yet rendered';
		}
		if (el.addEventListener) {
			el.addEventListener(event, handler, false);
		} else if (el.attachEvent) {
			el.attachEvent('on' + event, handler);
		}
	};

	$.fn.confirmBox = function(options) {
		if (methods[options]) {
			//console.log(this);
			methods[options]($(this));
		} else {
			return this.each(function() {
				var $this = $(this);
				methods.init($this, options);
			});
		}
	};

})(jQuery);
/***************** Confirm box Ends *****************/

/*********** Custom style checkbox and radio button **********/
! function(e) {
	var c = {
		init : function(t, i) {
			var n = e(t);
			n.options = e.extend({}, e.fn.checkBox.setting, i), e("input[type='checkbox'],input[type='radio']", n).prop("checked") ? c.checked(n) : c.unchecked(n), n.on("click", function() {
				var t = e(this);
				c.check(t), n.options.after && n.options.after(t)
			}), this.self = n
		},
		check : function(t) {
			e("input[type='radio']", t).size() && !e("input[type='radio']", t).prop("checked") && (e("input[type='checkbox'],input[type='radio']", t).prop("checked") ? c.unchecked(t) : c.checked(t)), e("input[type='checkbox']", t).size() && (e("input[type='checkbox'],input[type='radio']", t).prop("checked") ? c.unchecked(t) : c.checked(t))
		},
		checked : function(c) {
			var t = e("input[type='checkbox'],input[type='radio']", c);
			"checkbox" != t.attr("type") && e("[name='" + t.attr("name") + "']").each(function() {
				var c = e(this);
				c.prop("checked", !1), e("i", c.siblings(".checkbox-style,.radio-style")).hide()
			}), t.prop("checked", !0), e(".checkbox-style i,.radio-style i", c).show()
		},
		unchecked : function(c) {
			var t = e("input[type='checkbox'],input[type='radio']", c);
			"checkbox" != t.attr("type") && e("[name='" + t.attr("name") + "']").each(function() {
				var c = e(this);
				c.prop("checked") ? (c.prop("checked", !0), e("i", c.siblings(".checkbox-style,.radio-style")).show()) : (c.prop("checked", !1), e("i", c.siblings(".checkbox-style,.radio-style")).hide())
			}), e(".checkbox-style i,.radio-style i", c).hide(), t.prop("checked", !1)
		},
		clear : function(c) {
			var t = e("input[type='checkbox'],input[type='radio']", c);
			e("[name='" + t.attr("name") + "']").each(function() {
				var c = e(this);
				c.prop("checked", !1), e("i", c.siblings(".checkbox-style,.radio-style")).hide()
			}), e(".checkbox-style i,.radio-style i", c).hide(), t.prop("checked", !1)
		},
		update : function(t) {
			e("input[type='checkbox'],input[type='radio']", t).prop("checked") ? c.checked(t) : c.unchecked(t)
		}
	};
	e.fn.checkBox = function(t) {
		return "clear" == t ? this.each(function() {
			c.clear(e(this))
		}) : "check" == t ? this.each(function() {
			c.check(e(this))
		}) : "update" == t ? this.each(function() {
			c.update(e(this))
		}) : this.each(function() {
			c.init(e(this), t || {})
		})
	}, e.fn.checkBox.setting = {}
}(jQuery);
/*********** Custom style checkbox and radio button ends **********/

/*********** Drag and Drop Starts **********/
! function() {
	var e = {
		placement : {
			ele : "none"
		},
		dragInit : function(e, o) {
			var t = $(e);
			t.options = $.extend({}, $.fn.dragDrop.setting, o), t._grid = t.parents('[data-dragdrop="container"]'), t._col = t.parents('[data-dragdrop="col"]'), t._cell = $("[data-dragdrop='row']", t._grid), t._btn = $("[data-dragdrop='btn']", t._cell), t._dropPlaceholderElement = $(".place-it", t._grid), this.self = t, this.dropPlaceholderCreate(), this.dropPlaceholder(), t.unbind().on("mousedown", this.dragMouseDown), $(document).on("mousemove", this.dragMouseMove), $(document).on("mouseup", this.dragMouseUp)
		},
		dragMouseDown : function(e) {
			var o = $(this), t = o.parents("[data-dragdrop='row']");
			"1" == e.which && ($("body").addClass("selectDisable overflow-x-none"), t.css({
				"box-shadow" : "0 0 5px #ddd"
			}), t.attr("clicked", "true"), $(".place-it", o._grid).show())
		},
		dragMouseMove : function(e) { {
				var o = $("[data-dragdrop='container'] [data-dragdrop='row'][clicked='true']"), t = e.pageX, a = e.pageY;
				o.width()
			}
			"absolute" != o.css("position") && o.css({
				position : "fixed",
				"z-index" : "1090",
				width : o.outerWidth()
			}), "true" == o.attr("clicked") ? ($(".place-it").show(), t -= o.width() / 2, a += 10, o.css({
				left : t,
				top : a + "px"
			}), $(document).on("selectstart", !1)) : $(document).on("selectstart", !0)
		},
		dragMouseUp : function(o) { {
				var t = $("[data-dragdrop='container'] [data-dragdrop='row'][clicked='true']");
				t.offset()
			}
			if (o.preventDefault(), t.size()) {
				if ("none" != e.placement.ele) {
					placementpos = e.placement.ele.offset();
					var a = e.dropElementPosition(e.placement.position, o.pageY, e.placement.ele);
					e.placement.ele[a.placement](t)
				}
				e.dropPlaceholderCreate(), t.removeAttr("style clicked"), e.placement.ele = "none", $("body").addClass("selectDisable overflow-x-none"), e.self.options.after && (console.log(e.self.options.after), e.self.options.after())
			}
		},
		dropPosition : function(e) {
			var o = {};
			$(e).each(function(e) {
				var t = $(this);
				t.attr("dragid", e + 1);
				var a = {};
				a.top = t.offset().top, a.maxtop = a.top + t.height() / 2, a.dragid = t.attr("dragid"), o["drag-" + (e + 1)] = a
			}), this.placement.position = o
		},
		dropPlaceholderCreate : function() {
			var e = this.self;
			$(".place-it", e._grid).remove(), e._cell.each(function() {
				var o = $(this);
				o.next(".place-it").size() || o.after(e.options.dropPlaceholder)
			}), $("[data-dragdrop='col']", e._grid).each(function() {
				var o = $(this), t = o.children(e._row);
				t.size() || (console.log("here"), o.append(e.options.dropPlaceholder))
			}), "" != e.options.dropPlaceholderClassName ? $(".place-it", e._grid).addClass(e.options.dropPlaceholderClassName) : $(".place-it", e._grid).css(e.options.dropPlaceholderCss), $(".place-it", e._grid).html(e.options.dropPlaceholderText).hide(), this.dropPosition(".place-it"), this.dropPlaceholder()
		},
		dropPlaceholder : function() {
			var e = this;
			$(document).off("mouseover mouseout", ".place-it").on("mouseover", ".place-it", function() {
				var o = $(this);
				e.placement.ele = o, o.css("opacity", ".7")
			}).on("mouseout", ".place-it", function() {
				var e = $(this);
				e.css("opacity", "1")
			})
		},
		dropElementPosition : function(e, o, t) {
			if (e) {
				var a = e["drag-" + t.attr("dragid")];
				return a.maxtop > o ? {
					placement : "before"
				} : {
					placement : "after"
				}
			}
		}
	};
	$.fn.dragDrop = function(o) {
		return this.each(function() {
			e.dragInit($(this), o || {})
		}), this
	}, $.fn.dragDrop.setting = {
		dropPlaceholder : "<div class='place-it'></div>",
		dropPlaceholderCss : {
			background : "#F7F7F7",
			border : "1px dashed #b3b3b3",
			margin : "5px 2px",
			padding : "10px"
		},
		dropPlaceholderClassName : "",
		dropPlaceholderText : "Drop here!",
		after : !1
	}
}(jQuery);
/*********** Drag and Drop ends **********/

/*********** Form Validation Starts **********/
var gb = gb || {}, core = core || cnsiJS.core, patternempty = /^$|undefined|null/, mmddyyyy = "mm/dd/yyyy";
for (var i in core) {
	gb[i] = core[i];
}

(function($) {

	var methods = {
		init : function(o, options) {
			var self = $(o);
			self.el = self;
			self.opt = $.extend({}, $.fn.formValidate.setting, options);
			if (this[self.attr("id")]) {
				delete this[self.attr("id")];
			}
			this[self.attr("id")] = {};
			this[self.attr("id")].self = self;
			this.gatheringField(self);
		},
		gatheringField : function(o) {
			var target = o;
			var fields = [], groupField = {}, daterange = {}, fieldNum = 0;

			$.each($("input , select , textarea", target), function(i, ele) {
				var self = $(ele);
				var d = {};
				if (String(self.attr("type")).match(/text|password/)) {
					self.attr("autocomplete", "off");
				}
				if (self.data("validate") != undefined) {
					d.field = $(self, target);
					d.id = self.attr("id");
					d.formId = self.attr("id");
					d.opt = target.opt;
					d.validateType = self.data("validate");
					d.validateMsg = self.data("validate-message");
					d.fieldNum = (fieldNum != 0) ? fieldNum + 1 : 0;
					d.fieldtype = self.attr("type") || "";
					d.validateCondition = self.data("validate-condition") || "";
					d.form = target, d.formId = target.attr("id");
					if (self.attr("type") != "radio") {
						d.fieldname = d.field.attr("name");
					}
					if (self.attr("type") != "checkbox") {
						d.fieldname = d.field.attr("name");
					}
					if (self.data("validate-group") != undefined) {
						d.validateGroup = self.data("validate-group");
						groupField[d.validateGroup] = groupField[d.validateGroup] || [];
						groupField[d.validateGroup].push(d);
					}
					if (String(self.data("validate")).match(/daterange\[/g)) {
						var ids = $("[data-validate^='" + self.data("validate") + "']");
						d.daterange = self.data("validate");
						daterange[d.daterange] = daterange[d.daterange] || {};
						daterange[d.daterange].ele = d, daterange[d.daterange].ids = ids;
					}
					fields.push(d);
				}
			});
			this[target.attr("id")].self = {};
			this[target.attr("id")].self.fields = fields;
			this[target.attr("id")].self.groupField = groupField;
			this[target.attr("id")].self.daterange = daterange;
			this[target.attr("id")].self.targetid = target.attr("id");
			$.each(fields, function(index, ele) {
				ele.field.on("blur", function() {
					var field = $(this);
					if (String(field.val()).match(/select/i) == null || String(field.val()).match(gb.regex.rgx_emptystrings) == null || String(field.attr("type")).match(/(radio|checkbox)/g) && !$("[name='" + focusfield.attr("name") + "']").is(":checked")) {
						status = methods.fieldvalidate([ele], target.attr("id"));
						if (status == "true") {
							methods.errorMessageHide(field);
						}
					}
				});
			});
		},
		removeValidate : function(id) {
			var fields = this[id.closest("form").attr("id")];
			if (fields) {
				$.each(fields.self.fields, function(index, ele) {
					ele.field.off("blur");
				});
				delete this[id.closest("form").attr("id")];
			}
		},
		validate : function(id) {
			if (String(id).match(patternempty) || String(this[id.attr("id")]).match(patternempty)) {
			} else {
				$(".error-msg", id).remove();
				methods.unvalidate = true;
				var fields = this[id.attr("id")].self.fields;
				var status = methods.fieldvalidate(fields, id.attr("id"));
				if (status) {
					methods.errorMessageHide();
				}
				methods.unvalidate = false;
				return status;
			}
		},
		validateAll : function(id) {
			if (String(id).match(patternempty) || String(this[id.attr("id")]).match(patternempty)) {
			} else {
				$(".error-msg", id).remove();
				methods.unvalidate = true;
				var status = true, statusJoinString = "";
				var fields = this[id.closest("form").attr("id")].self.fields, i;
				for (i in fields ) {
					status = methods.fieldvalidate([fields[i]], id.closest("form").attr("id"));
						statusJoinString += status;
						if (status) {
							methods.errorMessageHide(fields[i].field);
						}
				}
				status = (statusJoinString.match(/false/ig)) ? false : status;
				methods.unvalidate = false;
				return status;
			}
		},
		validateField : function(id) {
			var fields = this[id.closest("form").attr("id")].self.fields, i;
			for (i in fields ) {
				if (fields[i].field.attr("id") == id.attr("id")) {
					var status = methods.fieldvalidate([fields[i]], id.closest("form").attr("id"));
					if (status) {
						methods.errorMessageHide(fields[i].field);
					}
					break;
				}
			}
			return status;
		},
		fieldvalidate : function(fields, objid) {
			var groupField = this[objid].self.groupField;
			var daterange = this[objid].self.daterange;
			var status = true, flag = true, alreadyMatched = {};
			for (var i in fields) {
				flag = true;
				fields[i].self = this[objid].self;
				if (fields[i].validateGroup != undefined) {
					var gFieldEmptycheck = 0, allFieldCheck = 0;
					for (var j in groupField[fields[i].validateGroup]) {
						var gfield = groupField[fields[i].validateGroup][j];
						if (String(gfield.field.val()).match(gb.regex.rgx_emptystrings) == null) {
							gfield.groupcheck = true;
							status = methods.validateType(gfield);
							if (status && flag) {
								gFieldEmptycheck = gFieldEmptycheck + 1;
								flag = false;
								for (var k in groupField[fields[i].validateGroup]) {
									var avoidField = groupField[fields[i].validateGroup][k];
									if (avoidField.id != gfield.id && String(avoidField.fieldtype).match(/radio|select/ig) == null) {
										avoidField.avoidCase = "required";
										status = methods.validateType(avoidField);
										if (!status) {
											gFieldEmptycheck = 0;
										}
										break;
									} else {
										delete avoidField.avoidCase;
										methods.errorMessageHide(avoidField.field);
									}
								}
								break;
							}
						}
					}
					if (gFieldEmptycheck != 0) {
						if (status) {
							$("[data-validate-group='" + fields[i].validateGroup + "']").each(function() {
								var self = $(this);
								methods.errorMessageHide(self);
							});
							i++;
						} else {
							break;
						}
					} else {
						fields[i].groupcheck = false;
						status = methods.validateType(fields[i]);
						if (!status && flag) {
							flag = false;
							break;
						}
					}
				} else {
					if (fields[i].field.is(":visible")) {
						status = methods.validateType(fields[i]);
					} else {
						i++;
					}
					if (!status && flag) {
						flag = false;
						break;
					}
				}
			}
			return status;
		},
		validateType : function(fields) {
			var status = true, focusfield = fields.field, msg = "", fieldFormId = fields.field.closest("form").attr("id"), empty = true, validateCase = 2, dateless;
			fields.validateType = focusfield.attr("data-validate");
			var validateType = (fields.validateType.match(/|/)) ? fields.validateType.split("|") : [fields.validateType], validateCnt = 0, changeValidateCnt = 0, unvalidate = false;
			if (String(fields.field.val()).match(gb.regex.rgx_emptystrings)) {
				empty = false;
			}
			var cond1 = (fields.validateCondition == ""), cond2 = (fields.validateType.match(/required/g));

			if (String(fields.avoidCase).match(/^$|undefined/)) {
				if (cond1 && cond2) {
					if (String(fields.field.val()).match(gb.regex.rgx_emptystrings)) {
						msg = fields.opt.messages.required;
						validateCase = 1;
						status = false;
						if (String(methods.unvalidate).match(/^$|undefined|false/)) {
							unvalidate = true;
						}
					}
				}
			}
			if (status) {
				for (var i in validateType) {
					var vType = String(validateType[i]);

					if (fields.validateCondition != "") {
						if (String(fields.field.attr("type")).match(/(radio|checkbox)/g) && !$("[name='" + fields.fieldname + "']").props("checked") || !empty && String(fields.field.attr("type")).match(/(radio|checkbox)/i) == null) {
							var validateConditionFields = (fields.validateCondition.match(/\],(or|and)/)) ? fields.validateCondition.split(/\],(or|and)/) : [fields.validateCondition];
							for (var j in validateConditionFields) {
								var or_cond = (String(validateConditionFields[j]).match(/or/)) ? true : false;
								var vcfFields = String(validateConditionFields[j]).replace(/(or|and)\[|\]$/g, "");
								vcfFields = (vcfFields.match(/,/)) ? vcfFields.split(",") : [vcfFields];
								var kfieldCount = 0;
								for (var k in vcfFields) {
									var kfield = $(vcfFields[k]);
									if (kfield.attr("type") == "text") {
										if (status && $(vcfFields[k] + "[type='text']").val() != "") {
											msg = fields.field.data("required-message") || fields.opt.messages.required;
											kfieldCount++;
											if (or_cond)
												break;
										}
									}
									if (String(kfield.attr("type")).match(/(radio|checkbox)/g)) {
										if (status && $(vcfFields[k] + "[type='radio']:checked").size() || $(vcfFields[k] + "[type='checkbox']:checked").size()) {
											msg = fields.opt.messages.required;
											kfieldCount++;
											if (or_cond)
												break;
										}
									}
									if ($("select" + vcfFields[k]).size() && String($("select" + vcfFields[k]).val()) != "" && String($("select" + vcfFields[k]).val()) != " " && String($("select" + vcfFields[k]).val()).match(/select/i) == null) {
										msg = fields.opt.messages.required;
										kfieldCount++;
										if (or_cond)
											break;
									}
								}

								if (or_cond && kfieldCount != 0) {
									status = false;
									break;
								}
								if (!or_cond && kfieldCount == vcfFields.length) {
									status = false;
									break;
								}
							}
						}
					}

					if (status && vType == "required" && fields.fieldtype.match(/^(radio)$/) && fields.validateCondition == "" && !$("[name='" + fields.fieldname + "']:checked").size()) {
						msg = fields.opt.messages.required;
						validateCase = 1;
						status = false;
						break;
					}
					if (status && vType == "required" && fields.fieldtype.match(/^(checkbox)$/) && fields.validateCondition == "" && !$("[name='" + fields.fieldname + "']").is(":checked") && !$("[data-validate-group='" + fields.validateGroup + "']:checked").size()) {
						msg = fields.opt.messages.required;
						validateCase = 1;
						status = false;
						break;
					}
					if (status && vType == "required" && String(fields.field.val()).match(gb.regex.rgx_emptystrings) && String(fields.avoidCase).match(/^$|undefined/)) {
						msg = fields.opt.messages.required;
						validateCase = 1;
						status = false;
						if (String(methods.unvalidate).match(/^$|undefined|false/)) {
							unvalidate = true;
						}
						break;
					}
					if (status && vType == "nospace" && String(fields.field.val()).match(/\s|\t|\n/)) {
						msg = fields.opt.messages.nospace;
						validateCase = 1;
						status = false;
						break;
					}
					if (status && empty && vType == "alphabetsOnly" && String(fields.field.val()).match(gb.regex.rgx_alphabetSpace) == null) {
						msg = fields.opt.messages.alphabetsOnly;
						validateCase = 3;
						status = false;
						break;
					}
					if (status && empty && vType == "numberOnly" && String(fields.field.val()).match(gb.regex.rgx_numeric) == null) {
						msg = fields.opt.messages.numbersOnly;
						validateCase = 3;
						status = false;
						break;
					}
					if (status && empty && vType == "numbersOnly" && String(fields.field.val()).match(gb.regex.rgx_numericSpace) == null) {
						msg = fields.opt.messages.numbersOnly;
						validateCase = 3;
						status = false;
						break;
					}
					if (status && empty && vType == "alphabetsSpaceOnly" && String(fields.field.val()).match(gb.regex.rgx_alphabetSpace) == null) {
						msg = fields.opt.messages.alphabetsOnly;
						validateCase = 3;
						status = false;
						break;
					}
					if (status && empty && vType == "numbersSpaceOnly" && String(fields.field.val()).match(gb.regex.rgx_numericSpace) == null) {
						msg = fields.opt.messages.numbersOnly;
						validateCase = 3;
						status = false;
						break;
					}

					if (status && empty && vType.match(/numbersSpecialOnly/g)) {
						msg = fields.opt.messages.numbersSpecialOnly;
						var pattern = eval("/^((?![a-z]).)*$|" + "^[0-9?]{0,}$/");
						if (String(fields.field.val()).match(pattern) == null) {
							validateCase = 3;
							status = false;
							break;
						}
					}
					if (status && empty && vType.match(/alphabetsSpecialOnly/g)) {
						msg = fields.opt.messages.alphabetsSpecialOnly;
						var pattern = eval("/^((?![0-9]).)*$|" + "^[a-zA-Z?]{0,}$/");
						if (String(fields.field.val()).match(pattern) == null) {
							validateCase = 3;
							status = false;
							break;
						}
					}
					if (status && empty && vType == "alphabetsNumbersOnly" && String(fields.field.val()).match(gb.regex.rgx_alphabetsNumeric) == null) {
						msg = fields.opt.messages.alphabetsNumbersOnly;
						validateCase = 3;
						status = false;
						break;
					}
					if (status && empty && vType == "alphabetsNumbersSpaceOnly" && String(fields.field.val()).match(gb.regex.rgx_alphabetsNumericSpace) == null) {
						msg = fields.opt.messages.alphabetsNumbersSpaceOnly;
						validateCase = 3;
						status = false;
						break;
					}
					if (status && empty && vType == "numberDecimalOnly" && !gb.validation.isDecimal(fields.field.val())) {
						msg = fields.opt.messages.numberDecimalOnly;
						validateCase = 3;
						status = false;
						break;
					}
					if (status && empty && vType.match(/^decimalLen\[/g) && gb.validation.isDecimalR(fields.field.val())) {
						var decimalLen = vType.replace(/decimalLen\[|\]/g, ""), fieldLen = String(fields.field.val()).replace(/[0-9]{0,}\./, "");
						if (fieldLen.length > decimalLen) {
							msg = fields.opt.messages.decimalLen.replace(/length/, decimalLen);
							validateCase = 3;
							status = false;
							break;
						}
					}
					if (status && empty && vType == "email" && !gb.validation.isEmail(String(fields.field.val()))) {
						msg = fields.opt.messages.email;
						validateCase = 3;
						status = false;
						break;
					}

					if (status && empty && String(vType).match(/phonenumber\[/)) {
						var phoneType = String(vType).replace(/[a-zA-Z]|[\[\]]/g, ""), phonefieldVal = String(fields.field.val());
						var pattern = [/(\d{3})(\d{3})(\d{4})/, /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/, /^\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/];
						for (var p in pattern) {
							if (phoneType.match(pattern[p])) {
								if (phonefieldVal.match(pattern[p]) == null) {
									msg = fields.opt.messages.phonenumber;
									validateCase = 3;
									status = false;
									break;
								}
							}
						}
					}
					if (status && empty && String(vType).match(/datetime\[/i)) {
						var datetype = String(vType), dateId = String(datetype.replace(/future|starttime|endtime|datetime|[\[\]]/g, "")).split(",");
						var dateEle = $(dateId[0]), startfield = $(dateId[1]), endfield = $(dateId[2]), focusfield = fields.field;
						if (dateEle.size() && startfield.size() && endfield.size()) {
							var formatTime24h = function(time) {
								var new_time, hours = Number(time.match(/^(\d+)/)[1]), minutes = Number(time.match(/:(\d+)/)[1]), AMPM = time.match(/\s(.*)$/)[1];
								if (AMPM == 'PM' && hours < 12) {
									hours = hours + 12;
								}
								if (AMPM == 'AM' && hours == 12) {
									hours = hours - 12;
								}
								var sHours = hours.toString();
								var sMinutes = minutes.toString();
								if (sHours < 10) {
									sHours = '0' + sHours;
								}
								if (sMinutes < 10) {
									sMinutes = '0' + sMinutes;
								}
								new_time = sHours + ':' + sMinutes;
								return new_time;
							};
							var timearrange = function(dateStr, timeStr) {
								var formattime = formatTime24h(timeStr);
								var time = String(formattime.replace(/[\s]/, "")).split(":"), hh = Number(time[0]), mm = Number(time[1]);
								var isdate = String(gb.date.format(dateStr, "yyyy/mm/dd")), joindate = isdate.split("/"), ndate = new Date(joindate[0], Number(joindate[1]) - 1, joindate[2], hh, mm);
								return ndate;
							};
							if (String(dateEle.val()).match(patternempty) == null) {
								if (!gb.validation.isDate(dateEle.val())) {
									msg = fields.opt.messages.date;
									validateCase = 3;
									status = false;
									break;
								}
							}
							var nowdate = gb.date.now(), l_date = (dateEle.val() == "") ? nowdate.mdy : dateEle.val();
							var startdate = timearrange(l_date, startfield.val()), currentdate = new Date();
							currentdate.setSeconds(0);
							if (fields.field.attr("id") == startfield.attr("id") && String(startfield.val()).match(patternempty) == null) {
								var start = Date.parse(currentdate), end = Date.parse(startdate);
								if (end < start) {
									focusfield = startfield;
									msg = fields.opt.messages.starttime;
									validateCase = 3;
									status = false;
									break;
								} else {
									methods.errorMessageHide(fields.field);
								}
							}

							if (fields.field.attr("id") == endfield.attr("id") && String(endfield.val()).match(patternempty) == null) {
								var enddate = timearrange(l_date, endfield.val());
								start = Date.parse(startdate), end = Date.parse(enddate);
								if (end < start) {
									focusfield = endfield;
									msg = fields.opt.messages.endtime;
									validateCase = 3;
									status = false;
									break;
								} else {
									methods.errorMessageHide(fields.field);
								}
							}
						}
					}

					if (status && empty && String(vType).match(/^date\[/)) {
						if (!gb.validation.isDate(String(fields.field.val()))) {
							msg = fields.opt.messages.date;
							validateCase = 3;
							status = false;
							break;
						}
						var now = gb.date.now();
						var currentdate = now.mdy;
						var fieldVal = gb.date.format(String(fields.field.val()), mmddyyyy);

						if (status && String(vType).match(/^date\[end/)) {
							var endval = String(vType).replace(/date\[end|[\[\]]/g, "");
							if (String(endval).match(/^startdateto1year$/ig)) {
								var relationId = $(fields.field.attr("data-validate-relation"));
								if (relationId.size() && gb.validation.isDate(relationId.val(), mmddyyyy) && gb.validation.isDate(fields.field.val(), mmddyyyy)) {
									var datesplit = String(relationId.val()).split("/");
									var oneyeardate = gb.date.dateToOneYear(datesplit[1], datesplit[0], datesplit[2]);
									if (!gb.validation.dateRange(fields.field.val(), oneyeardate)) {
										msg = fields.opt.messages.startDateToOneYear;
										validateCase = 3;
										status = false;
										break;
									}
								}
							} else {
								if (gb.validation.isDate(endval, mmddyyyy) && !gb.validation.dateRange(fieldVal, endval)) {
									msg = fields.opt.messages.enddate;
									validateCase = 3;
									status = false;
									break;
								}
							}
						}
						if (status && String(vType).match(/^date\[start/)) {
							var endval = String(vType).replace(/^date\[start|[\[\]]/g, "");
							if (gb.validation.isDate(endval, mmddyyyy) && !gb.validation.dateRange(endval, fieldVal)) {
								msg = fields.opt.messages.startdate;
								validateCase = 3;
								status = false;
								break;
							}
						}
						if (status && String(vType).match(/date\[future\]/ig) && !gb.validation.dateRange(String(currentdate), fieldVal)) {
							msg = fields.opt.messages.future;
							validateCase = 3;
							status = false;
							break;
						}
						if (status && String(vType).match(/date\[futureexact\]/ig) && !gb.validation.dateRange(String(currentdate), fieldVal, false)) {
							msg = fields.opt.messages.future;
							validateCase = 3;
							status = false;
							break;
						}
						if (status && String(vType).match(/date\[past\]/ig) && !gb.validation.dateRange(fieldVal, String(currentdate))) {
							msg = fields.opt.messages.past;
							validateCase = 3;
							status = false;
							break;
						}
						if (status && String(vType).match(/date\[pastexact\]/ig) && !gb.validation.dateRange(fieldVal, String(currentdate), false)) {
							msg = fields.opt.messages.past;
							validateCase = 3;
							status = false;
							break;
						}
					}

					if (status && empty && String(vType).match(/daterange\[/g)) {
						//var daterange = fields.self.daterange, id = String(vType).replace(/daterange\[|\]/, ""), ele = $("[data-validate*='daterange[" + id + "']");
						var id = String(vType).replace(/daterange\[|\]/, ""), ele = $("[data-validate*='daterange[" + id + "']");
						var elefrom = $(ele[0]), eleto = $(ele[1]), datefrom = elefrom.val(), dateto = eleto.val();
						var fcase = true, tcase = true;
						if (String(datefrom).match(patternempty) || String(dateto).match(patternempty)) {
							var field = (String(datefrom).match(patternempty)) ? elefrom : eleto;
							//methods.validateField(field);
							unvalidate = true;
							break;
						}
						if (!gb.validation.isDate(datefrom, mmddyyyy)) {
							//focusfield = elefrom;
							msg = fields.opt.messages.date;
							validateCase = 3;
							status = false;
							fcase = false;
							return methods.validateField(elefrom);
							break;
						}
						if (status && !gb.validation.isDate(dateto, mmddyyyy)) {
							//focusfield = eleto;
							msg = fields.opt.messages.date;
							validateCase = 3;
							status = false;
							tcase = false;
							return methods.validateField(eleto);
							break;
						}
						if (fcase == true && tcase == true) {
							if (status && String(datefrom).match(/^$|undefined/) == null && String(dateto).match(/^$|undefined/) == null) {
								var valid = gb.validation.dateRange(datefrom, dateto);
								if (!valid) {
									//focusfield = $(elefrom);
									msg = fields.opt.messages.daterange;
									validateCase = 3;
									status = false;
									dateless = 1;
									break;
								}
							}
						}
					}

					if (status && empty && String(vType).match(/daterangestring\[/g)) {
						var ids = focusfield, vType_val = String(vType).replace(/daterangestring|\[|\]|\s{0,}/g, ""), val = String(focusfield.val()).split(vType_val);
						var elefrom = String(val[0]).replace(/\s{0,}/g, ""), eleto = String(val[1]).replace(/\s{0,}/g, "");
						if (String(elefrom).match(/^$|^\s{0,}$|undefined/) || String(eleto).match(/^$|^\s{0,}$|undefined/)) {
							msg = fields.opt.messages.daterange;
							validateCase = 3;
							status = false;
							break;
						}
						var datefrom = gb.date.format(elefrom, mmddyyyy), dateto = gb.date.format(eleto, mmddyyyy);
						if (!gb.validation.isDate(String(datefrom)) || !gb.validation.isDate(String(dateto))) {
							msg = fields.opt.messages.daterange;
							validateCase = 3;
							status = false;
							break;
						} else {
							var valid = gb.validation.dateRange(datefrom, dateto);
							if (!valid) {
								msg = fields.opt.messages.daterange;
								validateCase = 3;
								status = false;
								break;
							}
						}
					}
					if (status && empty && vType.match(/^char\[/g)) {
						var len = String(vType.replace(/(char\[)|\]/g, "")), fieldval = fields.field.val(), bk_len = String(len);
						len = (String(len).match(/\,/)) ? len.split(",") : [len];
						msg = fields.opt.messages.charlen.replace("length", "length (" + bk_len.replace(/,/, " or ") + ")");
						var matched = 0;
						for (var c in len) {
							var v_len = Number(len[c]), f_len = Number(fieldval.length);
							if (v_len == f_len) {
								matched = matched + 1;
							}
						}
						if (!matched) {
							validateCase = 3;
							status = false;
							break;
						}
					}
					if (status && empty && vType.match(/maxchar\[/g)) {
						var len = Number(vType.replace(/(maxchar\[)|\]/g, ""));
						msg = fields.opt.messages.maxchar.replace("length", "length (" + len + ")");
						if (fields.field.val().length > len) {
							validateCase = 3;
							status = false;
							break;
						}
					}
					if (status && empty && vType.match(/minchar\[/g)) {
						var len = Number(vType.replace(/(minchar\[)|\]/g, ""));
						msg = fields.opt.messages.minchar.replace("length", "length (" + len + ")");
						if (fields.field.val().length < len) {
							validateCase = 3;
							status = false;
							break;
						}
					}
					if (status && empty && vType.match(/min\[/g)) {
						var min = Number(vType.replace(/(min\[)|\]/g, ""));
						msg = fields.opt.messages.min;
						if (Number(fields.field.val()) < min) {
							validateCase = 3;
							status = false;
							break;
						}
					}
					if (status && empty && vType.match(/max\[/g)) {
						var max = Number(vType.replace(/(max\[)|\]/g, ""));
						msg = fields.opt.messages.max;
						if (Number(fields.field.val()) > max) {
							validateCase = 3;
							status = false;
							break;
						}
					}
					if (status && empty && vType.match(/^equals\[/g)) {
						var compare = String(vType.replace(/(equals\[)|\]/g, "")), comparefield = $(compare);
						msg = fields.opt.messages.equals;
						if (String(fields.field.val()) != String(comparefield.val()) && String(comparefield.val()) != "") {
							validateCase = 3;
							status = false;
							break;
						} else {
							methods.errorMessageHide(comparefield);
						}
						focusfield = fields.field;
					}
					if (status && empty && vType.match(/^notequals\[/g)) {
						var compare = String(vType.replace(/(^notequals\[)|\]/g, "")), comparefield = $(compare);
						msg = fields.opt.messages.notequals;
						if (String(fields.field.val()) == String(comparefield.val()) && String(comparefield.val()) != "") {
							validateCase = 3;
							status = false;
							break;
						} else {
							methods.errorMessageHide(comparefield);
						}
						focusfield = fields.field;
					}

					if (status && empty && vType == "ssn" && !gb.validation.isSSN(fields.field.val())) {
						msg = fields.opt.messages.ssn;
						validateCase = 3;
						status = false;
						break;
					}
					validateCnt += 1;
				}
			}
			if (!fields.field.is(":visible") || fields.field.attr("disabled")) {
				status = true;
			}
			if (String(fields.groupcheck).match(/undefined|false/)) {
				if (!status && !unvalidate) {
					methods.setFocus(focusfield);
					var emptypattern = /^$|^( ){0,}$|undefined/, fieldvalidation = String(focusfield.attr("data-validate"));
					var fieldMessage = String(focusfield.attr("data-validate-message")), errorMessage = (fieldMessage.match(/|/)) ? fieldMessage.split("|") : [fieldMessage];
					var condMsg = (String(focusfield.attr("data-validate-message")).match(emptypattern)) ? msg : errorMessage[validateCnt];
					msg = (String(condMsg).match(emptypattern)) ? msg : condMsg;
					if (String(fields.field.val()).match(emptypattern)) {
						msg = (String(fields.field.data("required-message")).match(/^$|undefined/) == null) ? fields.field.data("required-message") : (fieldvalidation.match(/^required/)) ? errorMessage[0] : fields.opt.messages.required;
						msg = (msg.match(/undefined/)) ? fields.opt.messages.required : msg;
					}
					if (String(focusfield.val()).match(/select/i) == null || String(focusfield.val()).match(gb.regex.rgx_emptystrings) == null || String(focusfield.attr("type")).match(/(radio|checkbox)/g) && !$("[name='" + focusfield.attr("name") + "']").is(":checked")) {
						if (fields.field.is(":visible")) {
							this.showError(focusfield, msg, fieldFormId, fields);
							focusfield.attr("data-error", "true");
						}
					}
				} else {
					if (!unvalidate) {
						this.errorMessageHide(focusfield);
						focusfield.removeAttr("data-error");
						focusfield.removeClass('errField').parent().removeClass('errField');
					}
				}
			}
			return status;
		},
		setFocus : function(field) {
			//$(field).focus();
		},
		showError : function(field, msg, fieldFormId, fields) {
			var self = fields;
			$(".error-msg[data-error-msg-id='" + field.attr("name") + "']").remove();
			var errHtml = "<div class='error-msg' data-error-msg-id='" + field.attr("name") + "'><p class='error-msg-content'></p> ";
			var placement = (field.closest("[data-error-showid]").size()) ? field.closest(field.attr("data-error-showid")) : field;
			var errElement = placement.siblings(".error-msg:visible");
			if (!errElement.size()) {
				if (self.opt.messageDirection == "top") {
					placement.before(errHtml);
				} else {
					placement.addClass('errField').after(errHtml);
				}
			}
			placement.siblings(".error-msg").children("p.error-msg-content").html(msg + "<span class='error-msg-dismiss'>&times;</span>");

			if (self.opt.messageType == "tooltip") {
				errElement.css({ 
					"max-width" : self.opt.messageMaxWidth
				});
				var fpos = field.position(), top = errElement.position().top - (field.height() + errElement.height());
				errElement.addClass("error-tooltip error-bg");

				if (self.opt.messageDirection == "top") {
					errElement.css({
						"top" : top + "px"
					});
				}
				errElement.css({
					"left" : fpos.left + "px"
				});
			}
			if (methods.action == "validate") {
				var scrolltop = field.offset().top - (errElement.outerHeight() + 30);
				$("html,body").animate({
					scrollTop : scrolltop
				}, "fast");
			}

			if (self.opt.messageAutoHide) {
				setTimeout(function() {
					methods.errorMessageHide(field);
					clearTimeout(this);
				}, self.opt.messageHideDelay);
			}
			$(document).off("click", ".error-msg-dismiss").on("click", ".error-msg-dismiss", function(e) {
				e.preventDefault();
				var close = $(this), errElement = close.parents(".error-msg");
				var errField = errElement.parent().children('.errField');
				errElement.slideUp("medium", function() {
					$(this).remove();
					errField.removeClass('errField');
				});
			});
		},
		errorMessageHide : function(field) {
			var loc_field = field || $(".error-msg:visible");
			var errElement = (loc_field.hasClass(".error-msg")) ? loc_field : $(".error-msg[data-error-msg-id='" + loc_field.attr("name") + "']");
			errElement.slideUp("fast", function() {
				errElement.siblings('.errField').removeClass('errField');
				$(this).remove();
			});
		},
		removeError : function(id) {
			methods.errorMessageHide(id);
			return status;
		},
		showCustomError : function(id, options) {
			var field = $(id);
			$(".error-msg[data-error-msg-id='" + field.attr("name") + "']").remove();
			var errHtml = "<div class='error-msg' data-error-msg-id='" + field.attr("name") + "'><p class='error-msg-content'></p> ";
			var placement = options.where || field;
			var errElement = placement.siblings(".error-msg:visible");
			if (!errElement.size()) {
				if (options.messageDirection == "top") {
					placement.before(errHtml);
				} else {
					placement.after(errHtml);
				}
			}
			placement.siblings(".error-msg").children("p.error-msg-content").html((options.msg || "This field is error.") + "<span class='error-msg-dismiss'>&times;</span>");
			$(document).off("click", "[data-error-msg-id='" + field.attr("name") + "'] .error-msg-dismiss").on("click", "[data-error-msg-id='" + field.attr("name") + "'] .error-msg-dismiss", function(e) {
				e.preventDefault();
				var close = $(this), errElement = close.parents(".error-msg");
				errElement.slideUp("medium", function() {
					errElement.siblings('.errField').removeClass('errField');
					$(this).remove();
				});
			});
		}
	};

	$.fn.formValidate = function(options) {
		if (options == "validate") {
			var $this = $(this);
			return methods[options]($this);
		} else if (options == "validateAll") {
			var $this = $(this);
			return methods[options]($this);
		} else if (options == "validateField") {
			var $this = $(this);
			return methods[options]($this);

		} else if (options == "removeError") {
			var $this = $(this);
			return methods[options]($this);

		} else if (options == "removeValidate") {
			var $this = $(this);
			return methods[options]($this);

		} else if (options == "showCustomError") {
			var $this = $(this);
			return methods["showCustomError"]($this, arguments[arguments.length - 1]);
		} else {
			return this.each(function() {
				var $this = $(this);
				methods.init($this, options);
			});
		}
	};
	$.fn.formValidate.setting = {
		messages : {
			"required" : "This field is required.",
			"email" : "Please enter a valid email id.",
			"minchar" : "Minimum character length is required.",
			"maxchar" : "Maximum character length is required.",
			"min" : "Minimum value is required.",
			"max" : "Maximum value is required.",
			"daterange" : "Please enter the valid date range.",
			"date" : "Please enter a valid date (MM/DD/YYYY).",
			"startdate" : "Please enter a valid date (MM/DD/YYYY).",
			"enddate" : "Please enter a valid date (MM/DD/YYYY).",
			"starttime" : "Please enter Start Time greater than Current Time.",
			"endtime" : "Please enter End Time greater than Start Time.",
			"future" : "Please enter the future date.",
			"startDateToOneYear" : "Please enter the end date less than one year from start date.",
			"past" : "Please enter the past date.",
			"alphabetsOnly" : "Please enter alphabets only.",
			"numbersOnly" : "Please enter numbers only.",
			"numbersSpecialOnly" : "Please enter numbers & special characters only.",
			"alphabetsNumbersOnly" : "Please enter alphabet & numbers only.",
			"alphabetsNumbersSpaceOnly" : "Please enter alphabet & numbers , space only.",
			"decimalLen" : "Please enter length decimal only.",
			"ssn" : "Please enter valid ssn.",
			"equals" : "Please enter same value to related field value.",
			"notequals" : "Please enter different value to related field value.",
			"phonenumber" : "Please enter valid phone number.",
			"charlen" : "This field length only.",
			"nospace" : "Space not allowed."
		},
		messageType : "attach",
		messageDirection : "bottom",
		messageMaxWidth : "400px",
		messageHideDelay : 3000,
		messageAutoHide : false
	};

})(jQuery);
/*********** Form Validation Ends **********/

/*********** Maxlength Starts **********/
! function(t) {
	var e = {
		init : function(a, n) {
			var s = t(a);
			s.options = t.extend({}, t.fn.maxlength.setting, n);
			var o = t('<span class="bootstrap-maxlength ' + s.options.warningClass + ' label"></span>');
			s.on("focus", function() {
				var a = {
					ele : t(this),
					template : o,
					options : s.options
				};
				e.showLabel(a).labelPos(a)
			}).on("keyup", function() {
				var a = {
					ele : t(this),
					template : o,
					options : s.options
				};
				e.showLabel(a).labelPos(a)
			}).on("blur", function() {
				var a = t(this);
				e.hideLabel(a)
			}), this.self = s
		},
		checkLength : function(e) {
			var a = t(e), n = a.val().length;
			return n
		},
		showLabel : function(a) {
			var n = t(a.ele), s = n.attr("maxlength"), o = e.checkLength(n), l = a.options.threshold, i = n.prop("tagName");
			if ("" != n.val()) {
				var r = a.options.preText + " " + o + " " + a.options.separator + " " + s + " " + a.options.postText;
				l > 0 ? o >= l ? t("body").append(a.template.text(r)) : e.hideLabel(n) : t("body").append(a.template.text(r)), o >= s ? a.template.addClass(a.options.limitReachedClass) : a.template.removeClass(a.options.limitReachedClass), "TEXTAREA" == i && o > s && n.val(n.val().substr(0, s))
			} else
				e.hideLabel(n);
			return this
		},
		hideLabel : function() {
			return t(".bootstrap-maxlength").remove(), this
		},
		labelPos : function(e) {
			var a = t(e.ele), n = a.height(), s = t(".bootstrap-maxlength").height();
			return t(".bootstrap-maxlength").offset({
				left : a.offset().left,
				top : a.offset().top + n + s
			}).css({
				"z-index" : "10"
			}), this
		}
	};
	t.fn.maxlength = function(a) {
		return this.each(function() {
			e.init(t(this), a || {})
		})
	}, t.fn.maxlength.setting = {
		threshold : 1,
		separator : "/",
		warningClass : "label-success",
		limitReachedClass : "label-danger",
		preText : "",
		postText : ""
	}
}(jQuery);
/*********** Maxlength ends **********/

/*********** Password strength starts **********/
! function(e) {
    var r = {
        init : function(s, t) {
            var n = e(s);
            n.options = e.extend({}, e.fn.passwordStrength.setting, t), n.on("keyup", function() {
                var s = {
                    ele : e(this),
                    value : e(this).val(),
                    options : n.options
                };
                r.checkLength(s);
            }).on("blur", function() {
                e(this);
            }), this.self = n;
        },
        caseFinder : function(e) {
            var s = e.value, t = s.split(""), pattern = e.options.pattern, x = x || [], f = f || [], len;
            len = (e.value.length >= e.options.minChar) ? 0 : 1;
            var level = 0;
            var unmatched = true;
            for (var p in pattern) {
                if (s.match(pattern[p]) != null) {
                    if (unmatched) {
                        x.push(s.match(pattern[p]));
                        level += 1;
                    }
                } else {
                    unmatched = false;
                    level = level;
                }
            }
            e.level = level - 1;
            //var percent = (x.length/(pattern.length+len))*100;
            var percent = (e.level + 1) / pattern.length * 100;
            return e.score = percent, r.progressBarShow(e), this;
        },
        progressBarShow : function(s) {
            var t = e(s.ele), n = e(t).next();
            n.parent();
            return 0 === n.length && (e(s.options.progressTemplate).insertAfter(t).parent().addClass("pull-relative"), r.progressBarWidth(s)), n.length > 0 && r.progressBarWidth(s), this;
        },
        progressBarWidth : function(r) {
            var s = e(r.ele), t = e(s).next(), n = n || [], a = {
                w : ["Weak", "progress-bar-danger"],
                m : ["Medium", "progress-bar-warning"],
                s : ["Strong", "progress-bar-success"],
                b : ["Best", "progress-bar-success"]
            }, levels = r.options.levels[r.level], levelgrade = r.options.levelClassName[r.options.levels[r.level]];
            n = levels;
            e(".progress-bar", t).width(r.score + "%").attr("class", "progress-bar " + levelgrade).text(levels);
        },
        progressBarHide : function(r) {
            var s = e(r.ele), t = e(s).next();
            t.length > 0 && t.remove();
        },
        checkLength : function(s) {
            var t = e(s.ele), n = t.val().length;
            return n > 0 ? r.caseFinder(s) : r.progressBarHide(s), this;
        }
    };
    e.fn.passwordStrength = function(s) {
        return this.each(function() {
            r.init(e(this), s || {});
        });
    }, e.fn.passwordStrength.setting = {
        minChar : 8,
        pattern : [/[A-Z]{1}/g, /[a-z]{1}/g, /[0-9]{1}/g, /[!$%^&*()_+|~@\\#\-={}\[\]:";'<>?,.\/`\s]{1}/g],
        levels : ["Weak", "Weak", "Medium", "Medium"],
        levelClassName : {
            "Weak" : "progress-bar-danger",
            "Medium" : "progress-bar-warning",
            "Strong" : "progress-bar-success",
            "Best" : "progress-bar-success"
        },
        errorMessages : {
            password_length_err : "The Password is too short",
            same_as_username : "Your password cannot be the same as your username"
        },
        usernameField : "#username",
        progressTemplate : '<div class="progress pwd_strength"><div style="width: 0%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="0" role="progressbar" class="progress-bar"></div></div>'
    };
}(jQuery);
/*********** Password strength ends **********/

/*********** Scroll starts **********/
! function(t) {
	var n = {
		init : function(o, e) {
			var i = t(o);
			i.el = i, i.opt = t.extend({}, t.fn.pureScroll.setting, e);
			var c = function() {
				n.asign(i.el, e.trigger) ? n.scrolling(i.el) : (i.css("height", "auto"), i.content.css("height", "auto"), i.track.hide())
			};
			c(), t(window).on("resize", function() {
				c()
			})
		},
		asign : function(o, e) {
			var i = o;
			t(".track", i).size() && t(".track", i).remove(), i.append(i.opt.tracks), i.content = t(".scroll-content", i), e || (i.content.height(i.opt.contentHeight), i.height(i.opt.contentHeight)), i.track = t(".track", i), i.bar = t(".track .bar", i), i.track.height(i.height() - 5), i.content.h = i.content.innerHeight(), i.track.h = i.track.height(), i.sheight = i.content.prop("scrollHeight"), i.barheight = Math.abs(i.content.h) / (i.sheight / i.content.h), i.barheight = i.barheight < 30 ? 30 : i.barheight, i.clicked = !1, i.inity = "", i.bar.height(i.barheight), i.bar.h = i.bar.height(), i.maxmove = i.track.h - i.bar.h;
			var c = 20;
			return i.sheight > i.content.h + c ? (i.content.width(i.width() + c), n.customize(i), !0) : !1
		},
		scrolling : function(t) {
			var o = t;
			o.content.scrollTop(0), o.content.on("scroll", function() {
				if (o.track.is(":visible") && !o.clicked) {
					var t = o.content.scrollTop(), n = t * (o.content.h / o.sheight) - o.track.h / o.bar.h;
					o.bar.stop().animate({
						top : Math.round(n) + "px"
					}, 10)
				}
			}), n.drag(o)
		},
		drag : function(n) {
			var o = n;
			o.bar.on("mousedown", function(n) {
				o.clicked = !0, o.inity = o.bar.position().top - n.pageY, o.cnt = 0, t("body").addClass("selection-none")
			}).on("mouseup", function() {
				o.clicked = !1
			}), t(document).on("mouseup", function() {
				o.clicked = !1, t("body").removeClass("select-none"), o.bar.position().top > o.maxmove && o.bar.animate({
					top : o.maxmove + "px"
				}, "fast"), o.bar.position().top < 0 && o.bar.animate({
					top : "0px"
				}, "fast")
			}).on("mousemove", function(n) {
				if (o.clicked) {
					t(document).on("selectstart", !1);
					var e = o.inity + n.pageY;
					o.bar.css({
						top : e + "px"
					}), o.content.scrollTop(o.bar.position().top * (o.sheight / o.maxmove))
				} else
					t(document).on("selectstart", !0)
			})
		},
		customize : function(t) {
			var n = t;
			n.content.css({
				"overflow-y" : "scroll",
				"padding-right" : "20px"
			}),
			void 0 != n.opt.trackcss && n.track.css(n.opt.trackcss)
		}
	};
	t.fn.pureScroll = function(o) {
		return this.each(function() {
			var e = t(this);
			n.init(e, o), null == navigator.userAgent.match(/android|ipad/gi)
		})
	}, t.fn.pureScroll.setting = {
		tracks : '<div class="track"><div class="bar"></div></div>',
		contentHeight : "200px",
		trigger : !1
	}
}(jQuery);
/*********** Scroll ends **********/

/*********** Scroll message Starts **********/
! function(e) {
	var t = {
		init : function(a, s) {
			var n = e(a);
			n.options = e.extend({}, e.fn.scrollmessage.setting, s), t.fade(n), t.loop(n), n.hover = !1;
			var i = {
				e : n
			};
			e(a).on("mouseover", i, function(t) {
				e(this);
				t.data.e.hover = !0
			}).on("mouseout", i, function(t) {
				e(this);
				t.data.e.hover = !1
			}), e("#msg_left_btn").on("click", i, function(a) {
				e(this);
				t.fadeReverse(a.data.e)
			}), e("#msg_right_btn").on("click", i, function(a) {
				e(this);
				t.fade(a.data.e)
			})
		},
		loop : function(e) {
			e.interval = setInterval(function() {
				String(e.hover).match(/undefined|false/) && t.fade(e), e.is(":hidden") && window.clearInterval(e.interval)
			}, e.options.delay)
		},
		fade : function(a) {
			var s = e(".scroll-message-item:eq(0)", a), n = e(".scroll-message-item.active", a), i = n.next();
			String(a.attr("data-message-animate")).match(/^$|undefined/) ? (s.fadeIn().addClass("active"), a.attr("data-message-animate", "true")) : (e(".scroll-message-content", a).append(n.removeClass("active").removeAttr("style")), i.fadeIn().addClass("active")), t.updateNav(a)
		},
		fadeReverse : function(a) {
			var s = e(".scroll-message-item:last-child", a), n = e(".scroll-message-item.active", a);
			n.removeClass("active").removeAttr("style"), e(".scroll-message-content", a).prepend(s), s.fadeIn().addClass("active"), t.updateNav(a)
		},
		updateNav : function(t) {
			e("#current_msg", t).html(e(".scroll-message-item:visible").attr("data-sm-id")), e("#total_msg", t).html(e(".scroll-message-item").size())
		}
	};
	e.fn.scrollmessage = function(a) {
		return this.each(function() {
			t.init(e(this), a || {})
		})
	}, e.fn.scrollmessage.setting = {
		delay : 5e3
	}
}(jQuery);
/*********** Scroll message ends **********/

/*********** Slidebox Starts **********/
! function(t) {
	var e = {
		init : function(n, i) {
			var s = t(n);
			s.options = t.extend({}, t.fn.slideBox.setting, i);
			var a = {
				e : s
			};
			t(s).on("click", a, function(n) {
				var i = t(this), s = i.closest(".slide-box"), a = t(".slide-content", s);
				n.data.e._parent = s, n.data.e._content = a, e.auto(n.data.e)
			})
		},
		auto : function(t) {
			t._parent.hasClass("slide-box-active") ? e.hide(t) : e.show(t)
		},
		show : function(t) {
			var e = {};
			e = t._parent.hasClass("slide-box-left") ? {
				left : 0
			} : {
				right : 0
			}, t._parent.animate(e, t.options.speed || "fast", function() {
				t._parent.addClass("slide-box-active")
			})
		},
		hide : function(t) {
			var e = {};
			e = t._parent.hasClass("slide-box-left") ? {
				left : -t._content.outerWidth() + "px"
			} : {
				right : -t._content.outerWidth() + "px"
			}, t._parent.removeClass("slide-box-active").animate(e, t.options.speed || "fast", function() {
			})
		}
	};
	t.fn.slideBox = function(n) {
		return this.each(function() {
			String(n).match(/^show$/) ? e[n](t(this)) : String(n).match(/^hide$/) ? e[n](t(this)) : e.init(t(this), n || {})
		})
	}, t.fn.slideBox.setting = {
		speed : 1e3
	}
}(jQuery);
/*********** Slidebox ends **********/

/*********** Widget collapse Starts **********/
! function(e) {
	var i = {
		init : function(i) {
			var o = e(i);
			o.option = e.extend({}, e.fn.widgetCollapse.defaults, i.opt), e(o.option.parent).size() && e(o.option.child).size() && (o._ele = o, o._ele.clicked = !1, this.storage(o)), this.click(o), this.storageclear(o)
		},
		storage : function(i) {
			var o = i, l = e(o.option.child, e(o._ele).closest(e(o.option.parent)));
			if (localStorage)
				if (o._ele.clicked) {
					l.is(":visible") ? e("i", e(o._ele)).removeClass("fa-chevron-circle-down").addClass("fa-chevron-circle-up") : e("i", e(o._ele)).removeClass("fa-chevron-circle-up").addClass("fa-chevron-circle-down"), l.is(":visible") ? l.slideUp() : l.slideDown();
					var a = l.is(":visible") ? "open" : "close";
					localStorage.setItem(o.attr("id"), o.attr("id") + "/" + a), localStorage.name = o.option.storagename, o.option.callback && o.option.callback(o)
				} else {
					var t = String(localStorage.getItem(o.attr("id"))).split("/");
					o.attr("id") == t[0] && ("close" == String(t[1]) ? (l.hide(), e("i", o._ele).addClass("fa-chevron-circle-up").removeClass("fa-chevron-circle-down")) : (l.show(), e("i", o._ele).addClass("fa-chevron-circle-down").removeClass("fa-chevron-circle-up")))
				}
		},
		click : function(o) {
			var l = o;
			l.unbind().on("click", function() {
				var o = e(this);
				o.clicked = !0, l._ele = o, i.storage(l)
			})
		},
		storageclear : function(e) {
			var i = e;
			void 0 != i.option.clear && localStorage[i.option.clear], i.option.clearAll && localStorage.clear()
		}
	};
	e.fn.widgetCollapse = function(o) {
		return this.each(function() {
			var l = e(this);
			l.opt = o, i.init(l)
		})
	}, e.fn.widgetCollapse.detaults = {}
}(jQuery);
/*********** Widget collapse ends **********/

/*********** Wizard Starts **********/
! function(i) {
	var e = {
		init : function(e) {
			var a = i(e);
			a.option = i.extend({}, i.fn.wizard.defaults, e.opt);
			var t = a.find("[data-wizard-step-count]").children("ul").find("li"), d = a.attr("data-wizard-content-id"), n = a.find("[data-wizard-step]"), r = n.filter(":visible").index();
			if (a.option.validate) {
				var s = a.find("form");
				i(s).formValidate()
			}
			var l = {
				ele : e,
				wizardStep : t,
				wizardContentId : d,
				wizardBox : n,
				visibleIndex : r,
				wizardSize : n.size(),
				wizardForm : s
			};
			this.navStatus(l).click(l)
		},
		click : function(a) {
			var t = (a.ele, i("[data-wizard-nav]:not([data-wizard-nav*=finish])").not(":disabled"));
			return t.unbind().on("click", function() {
				var t = i(this), d = t.attr("data-wizard-nav");
				if (a.wizardForm) {
					var n = i(a.wizardForm);
					n.formValidate("validate") && ("prev" == d ? e.prev(a) : e.next(a))
				} else
					"prev" == d ? e.prev(a) : e.next(a)
			}), this
		},
		prev : function(a) {
			i(a.ele);
			i(a.wizardBox).eq(a.visibleIndex).hide(), a.visibleIndex -= 1, i(a.wizardBox).eq(a.visibleIndex).fadeIn("slow"), e.navStatus(a).stepCount(a).updateTitle(a)
		},
		next : function(a) {
			i(a.ele);
			i(a.wizardBox).eq(a.visibleIndex).hide(), a.visibleIndex += 1, i(a.wizardBox).eq(a.visibleIndex).fadeIn("slow"), e.navStatus(a).stepCount(a).updateTitle(a)
		},
		navStatus : function(e) {
			return e.visibleIndex <= 0 ? i(e.ele).find('[data-wizard-nav="prev"]').addClass("disabled") : i(e.ele).find('[data-wizard-nav="prev"]').removeClass("disabled"), e.visibleIndex == e.wizardSize - 1 ? (i(e.ele).find('[data-wizard-nav="next"]').hide(), i(e.ele).find('[data-wizard-nav="finish"]').show()) : (i(e.ele).find('[data-wizard-nav="next"]').show(), i(e.ele).find('[data-wizard-nav="finish"]').hide()), this
		},
		stepCount : function(e) {
			var a = i(e.wizardStep), t = e.visibleIndex - 1;
			return a.filter(".active").removeClass("active"), t >= 0 && !a.eq(t).hasClass("past") && a.eq(t).addClass("past"), a.eq(e.visibleIndex).addClass("active").removeClass("past"), this
		},
		updateTitle : function(e) {
			var a = i(e.ele);
			return a.find(".wizard-title").text("Step " + (e.visibleIndex + 1)), this
		}
	};
	i.fn.wizard = function(a) {
		return this.each(function() {
			var t = i(this);
			t.opt = a, e.init(t)
		})
	}, i.fn.wizard.detaults = {}
}(jQuery);
/*********** Wizard ends **********/

/*********** Alphabet list search Starts **********/
! function(t) {
	var i = {
		init : function(a, e) {
			var n = t(a);
			n.options = t.extend({}, t.fn.alphabetListSearch.setting, e), n.on("focus", function() {
				var a = {
					ele : t(this),
					options : n.options
				};
				i.listFilter(a).after(a)
			}).on("keyup", function() {
				var a = {
					ele : t(this),
					options : n.options
				};
				i.listFilter(a).after(a)
			}).on("blur", function() {
				t(this)
			}), this.self = n
		},
		listFilter : function(i) {
			var a, e, n = t(i.ele), r = n.val().toUpperCase(), s = n.attr("data-search-target");
			if ("" != r) {
				var o = r.substr(0, 1);
				a = t(s + " .alphabet-list [data-alpahbet=" + o + "]"), e = a.attr("data-browse-tab-link"), a.trigger("click");
				var l = t(e + " ul > li");
				t(l).each(function() {
					var i = t(this), a = t(this).children("a"), e = a.text().toUpperCase();
					0 == e.indexOf(r) ? i.show() : i.hide()
				})
			} else
				a = t(s + ' .alphabet-list [data-alpahbet="A"]'), e = a.attr("data-browse-tab-link"), a.trigger("click"), t(e + " ul > li").show();
			return this
		},
		after : function(t) {
			return "function" == typeof t.options.after && t.options.after(t), this
		}
	};
	t.fn.alphabetListSearch = function(a) {
		return this.each(function() {
			i.init(t(this), a || {})
		})
	}, t.fn.alphabetListSearch.setting = {
		after : function() {
		}
	}
}(jQuery);
/*********** Alphabet list search ends **********/

/******************************* easy piechart starts *****************************/
// Generated by CoffeeScript 1.6.3
/*
 Easy pie chart is a jquery plugin to display simple animated pie charts for only one value

 Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.

 Built on top of the jQuery library (http://jquery.com)

 @source: http://github.com/rendro/easy-pie-chart/
 @autor: Robert Fleischmann
 @version: 1.2.3

 Inspired by: http://dribbble.com/shots/631074-Simple-Pie-Charts-II?list=popular&offset=210
 Thanks to Philip Thrasher for the jquery plugin boilerplate for coffee script
 */
function gestureStart() {
	for ( i = 0; i < metas.length; i++)
		"viewport" == metas[i].name && (metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6")
}

var metas = document.getElementsByTagName("meta"), i;
if (navigator.userAgent.match(/iPhone/i)) {
	for ( i = 0; i < metas.length; i++)
		"viewport" == metas[i].name && (metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0");
	document.addEventListener("gesturestart", gestureStart, !1)
}! function(t) {
	return t.easyPieChart = function(e, i) {
		var n, o, a, s, r, c, l, p, h = this;
		return this.el = e, this.$el = t(e), this.$el.data("easyPieChart", this), this.init = function() {
			var e, n;
			return h.options = t.extend({}, t.easyPieChart.defaultOptions, i), e = parseInt(h.$el.data("percent"), 10), h.percentage = 0, h.canvas = t("<canvas width='" + h.options.size + "' height='" + h.options.size + "'></canvas>").get(0), h.$el.append(h.canvas), "undefined" != typeof G_vmlCanvasManager && null !== G_vmlCanvasManager && G_vmlCanvasManager.initElement(h.canvas), h.ctx = h.canvas.getContext("2d"), window.devicePixelRatio > 1 && ( n = window.devicePixelRatio, t(h.canvas).css({
				width : h.options.size,
				height : h.options.size
			}), h.canvas.width *= n, h.canvas.height *= n, h.ctx.scale(n, n)), h.ctx.translate(h.options.size / 2, h.options.size / 2), h.ctx.rotate(h.options.rotate * Math.PI / 180), h.$el.addClass("easyPieChart"), h.$el.css({
				width : h.options.size,
				height : h.options.size,
				lineHeight : "" + h.options.size + "px"
			}), h.update(e), h
		}, this.update = function(t) {
			return t = parseFloat(t) || 0, h.options.animate === !1 ? a(t) : o(h.percentage, t), h
		}, l = function() {
			var t, e, i;
			for (h.ctx.fillStyle = h.options.scaleColor, h.ctx.lineWidth = 1, i = [], t = e = 0; 24 >= e; t = ++e)
				i.push(n(t));
			return i
		}, n = function(t) {
			var e;
			e = t % 6 === 0 ? 0 : .017 * h.options.size, h.ctx.save(), h.ctx.rotate(t * Math.PI / 12), h.ctx.fillRect(h.options.size / 2 - e, 0, .05 * -h.options.size + e, 1), h.ctx.restore()
		}, p = function() {
			var t;
			t = h.options.size / 2 - h.options.lineWidth / 2, h.options.scaleColor !== !1 && (t -= .08 * h.options.size), h.ctx.beginPath(), h.ctx.arc(0, 0, t, 0, 2 * Math.PI, !0), h.ctx.closePath(), h.ctx.strokeStyle = h.options.trackColor, h.ctx.lineWidth = h.options.lineWidth, h.ctx.stroke()
		}, c = function() {
			h.options.scaleColor !== !1 && l(), h.options.trackColor !== !1 && p()
		}, a = function(e) {
			var i;
			c(), h.ctx.strokeStyle = t.isFunction(h.options.barColor) ? h.options.barColor(e) : h.options.barColor, h.ctx.lineCap = h.options.lineCap, h.ctx.lineWidth = h.options.lineWidth, i = h.options.size / 2 - h.options.lineWidth / 2, h.options.scaleColor !== !1 && (i -= .08 * h.options.size), h.ctx.save(), h.ctx.rotate(-Math.PI / 2), h.ctx.beginPath(), h.ctx.arc(0, 0, i, 0, 2 * Math.PI * e / 100, !1), h.ctx.stroke(), h.ctx.restore()
		}, r = function() {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
			function(t) {
				return window.setTimeout(t, 1e3 / 60)
			}

		}(), o = function(t, e) {
			var i, n;
			h.options.onStart.call(h), h.percentage = e, Date.now || (Date.now = function() {
				return +new Date
			}), n = Date.now(), i = function() {
				var o, l;
				return l = Date.now() - n, l < h.options.animate && r(i), h.ctx.clearRect(-h.options.size / 2, -h.options.size / 2, h.options.size, h.options.size), c.call(h), o = [s(l, t, e - t, h.options.animate)], h.options.onStep.call(h, o), a.call(h, o), l >= h.options.animate ? h.options.onStop.call(h, o, e) :
				void 0
			}, r(i)
		}, s = function(t, e, i, n) {
			var o, a;
			return o = function(t) {
				return Math.pow(t, 2)
			}, a = function(t) {
				return 1 > t ? o(t) : 2 - o(t / 2 * -2 + 2)
			}, t /= n / 2, i / 2 * a(t) + e
		}, this.init()
	}, t.easyPieChart.defaultOptions = {
		barColor : "#ef1e25",
		trackColor : "#f2f2f2",
		scaleColor : "#dfe0e0",
		lineCap : "round",
		rotate : 0,
		size : 110,
		lineWidth : 3,
		animate : !1,
		onStart : t.noop,
		onStop : t.noop,
		onStep : t.noop
	}, t.fn.easyPieChart = function(e) {
		return t.each(this, function(i, n) {
			var o, a;
			return o = t(n), o.data("easyPieChart") ?
			void 0 : ( a = t.extend({}, e, o.data()), o.data("easyPieChart", new t.easyPieChart(n, a)))
		})
	},
	void 0
}(jQuery);
/******************************* easy piechart ends *****************************/


/******************************* Input Mask Starts*******************************/
/* ===========================================================
 * Bootstrap: inputmask.js v3.1.0
 * http://jasny.github.io/bootstrap/javascript/#inputmask
 * 
 * Based on Masked Input plugin by Josh Bush (digitalbush.com)
 * ===========================================================
 * Copyright 2012-2014 Arnold Daniels
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

+function ($) { "use strict";

  var isIphone = (window.orientation !== undefined)
  var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1
  var isIE = window.navigator.appName == 'Microsoft Internet Explorer'

  // INPUTMASK PUBLIC CLASS DEFINITION
  // =================================

  var Inputmask = function (element, options) {
    if (isAndroid) return // No support because caret positioning doesn't work on Android
    
    this.$element = $(element)
    this.options = $.extend({}, Inputmask.DEFAULTS, options)
    this.mask = String(this.options.mask)
    
    this.init()
    this.listen()
        
    this.checkVal() //Perform initial check for existing values
  }

  Inputmask.DEFAULTS = {
    mask: "",
    placeholder: "_",
    definitions: {
      '9': "[0-9]",
      'a': "[A-Za-z]",
      'w': "[A-Za-z0-9]",
      '*': "."
    }
  }

  Inputmask.prototype.init = function() {
    var defs = this.options.definitions
    var len = this.mask.length

    this.tests = [] 
    this.partialPosition = this.mask.length
    this.firstNonMaskPos = null

    $.each(this.mask.split(""), $.proxy(function(i, c) {
      if (c == '?') {
        len--
        this.partialPosition = i
      } else if (defs[c]) {
        this.tests.push(new RegExp(defs[c]))
        if (this.firstNonMaskPos === null)
          this.firstNonMaskPos =  this.tests.length - 1
      } else {
        this.tests.push(null)
      }
    }, this))

    this.buffer = $.map(this.mask.split(""), $.proxy(function(c, i) {
      if (c != '?') return defs[c] ? this.options.placeholder : c
    }, this))

    this.focusText = this.$element.val()

    this.$element.data("rawMaskFn", $.proxy(function() {
      return $.map(this.buffer, function(c, i) {
        return this.tests[i] && c != this.options.placeholder ? c : null
      }).join('')
    }, this))
  }
    
  Inputmask.prototype.listen = function() {
    if (this.$element.attr("readonly")) return

    var pasteEventName = (isIE ? 'paste' : 'input') + ".mask"

    this.$element
      .on("unmask.bs.inputmask", $.proxy(this.unmask, this))

      .on("focus.bs.inputmask", $.proxy(this.focusEvent, this))
      .on("blur.bs.inputmask", $.proxy(this.blurEvent, this))

      .on("keydown.bs.inputmask", $.proxy(this.keydownEvent, this))
      .on("keypress.bs.inputmask", $.proxy(this.keypressEvent, this))

      .on(pasteEventName, $.proxy(this.pasteEvent, this))
  }

  //Helper Function for Caret positioning
  Inputmask.prototype.caret = function(begin, end) {
    if (this.$element.length === 0) return
    if (typeof begin == 'number') {
      end = (typeof end == 'number') ? end : begin
      return this.$element.each(function() {
        if (this.setSelectionRange) {
          this.setSelectionRange(begin, end)
        } else if (this.createTextRange) {
          var range = this.createTextRange()
          range.collapse(true)
          range.moveEnd('character', end)
          range.moveStart('character', begin)
          range.select()
        }
      })
    } else {
      if (this.$element[0].setSelectionRange) {
        begin = this.$element[0].selectionStart
        end = this.$element[0].selectionEnd
      } else if (document.selection && document.selection.createRange) {
        var range = document.selection.createRange()
        begin = 0 - range.duplicate().moveStart('character', -100000)
        end = begin + range.text.length
      }
      return {
        begin: begin, 
        end: end
      }
    }
  }
  
  Inputmask.prototype.seekNext = function(pos) {
    var len = this.mask.length
    while (++pos <= len && !this.tests[pos]);

    return pos
  }
  
  Inputmask.prototype.seekPrev = function(pos) {
    while (--pos >= 0 && !this.tests[pos]);

    return pos
  }

  Inputmask.prototype.shiftL = function(begin,end) {
    var len = this.mask.length

    if (begin < 0) return

    for (var i = begin, j = this.seekNext(end); i < len; i++) {
      if (this.tests[i]) {
        if (j < len && this.tests[i].test(this.buffer[j])) {
          this.buffer[i] = this.buffer[j]
          this.buffer[j] = this.options.placeholder
        } else
          break
        j = this.seekNext(j)
      }
    }
    this.writeBuffer()
    this.caret(Math.max(this.firstNonMaskPos, begin))
  }

  Inputmask.prototype.shiftR = function(pos) {
    var len = this.mask.length

    for (var i = pos, c = this.options.placeholder; i < len; i++) {
      if (this.tests[i]) {
        var j = this.seekNext(i)
        var t = this.buffer[i]
        this.buffer[i] = c
        if (j < len && this.tests[j].test(t))
          c = t
        else
          break
      }
    }
  },

  Inputmask.prototype.unmask = function() {
    this.$element
      .unbind(".mask")
      .removeData("inputmask")
  }

  Inputmask.prototype.focusEvent = function() {
    this.focusText = this.$element.val()
    var len = this.mask.length 
    var pos = this.checkVal()
    this.writeBuffer()

    var that = this
    var moveCaret = function() {
      if (pos == len)
        that.caret(0, pos)
      else
        that.caret(pos)
    }

    moveCaret()
    setTimeout(moveCaret, 50)
  }

  Inputmask.prototype.blurEvent = function() {
    this.checkVal()
    if (this.$element.val() !== this.focusText)
      this.$element.trigger('change')
  }

  Inputmask.prototype.keydownEvent = function(e) {
    var k = e.which

    //backspace, delete, and escape get special treatment
    if (k == 8 || k == 46 || (isIphone && k == 127)) {
      var pos = this.caret(),
      begin = pos.begin,
      end = pos.end

      if (end - begin === 0) {
        begin = k != 46 ? this.seekPrev(begin) : (end = this.seekNext(begin - 1))
        end = k == 46 ? this.seekNext(end) : end
      }
      this.clearBuffer(begin, end)
      this.shiftL(begin, end - 1)

      return false
    } else if (k == 27) {//escape
      this.$element.val(this.focusText)
      this.caret(0, this.checkVal())
      return false
    }
  }

  Inputmask.prototype.keypressEvent = function(e) {
    var len = this.mask.length

    var k = e.which,
    pos = this.caret()

    if (e.ctrlKey || e.altKey || e.metaKey || k < 32)  {//Ignore
      return true
    } else if (k) {
      if (pos.end - pos.begin !== 0) {
        this.clearBuffer(pos.begin, pos.end)
        this.shiftL(pos.begin, pos.end - 1)
      }

      var p = this.seekNext(pos.begin - 1)
      if (p < len) {
        var c = String.fromCharCode(k)
        if (this.tests[p].test(c)) {
          this.shiftR(p)
          this.buffer[p] = c
          this.writeBuffer()
          var next = this.seekNext(p)
          this.caret(next)
        }
      }
      return false
    }
  }

  Inputmask.prototype.pasteEvent = function() {
    var that = this

    setTimeout(function() {
      that.caret(that.checkVal(true))
    }, 0)
  }

  Inputmask.prototype.clearBuffer = function(start, end) {
    var len = this.mask.length

    for (var i = start; i < end && i < len; i++) {
      if (this.tests[i])
        this.buffer[i] = this.options.placeholder
    }
  }

  Inputmask.prototype.writeBuffer = function() {
    return this.$element.val(this.buffer.join('')).val()
  }

  Inputmask.prototype.checkVal = function(allow) {
    var len = this.mask.length
    //try to place characters where they belong
    var test = this.$element.val()
    var lastMatch = -1

    for (var i = 0, pos = 0; i < len; i++) {
      if (this.tests[i]) {
        this.buffer[i] = this.options.placeholder
        while (pos++ < test.length) {
          var c = test.charAt(pos - 1)
          if (this.tests[i].test(c)) {
            this.buffer[i] = c
            lastMatch = i
            break
          }
        }
        if (pos > test.length)
          break
      } else if (this.buffer[i] == test.charAt(pos) && i != this.partialPosition) {
        pos++
        lastMatch = i
      }
    }
    if (!allow && lastMatch + 1 < this.partialPosition) {
      this.$element.val("")
      this.clearBuffer(0, len)
    } else if (allow || lastMatch + 1 >= this.partialPosition) {
      this.writeBuffer()
      if (!allow) this.$element.val(this.$element.val().substring(0, lastMatch + 1))
    }
    return (this.partialPosition ? i : this.firstNonMaskPos)
  }

  
  // INPUTMASK PLUGIN DEFINITION
  // ===========================

  var old = $.fn.inputmask
  
  $.fn.inputmask = function (options) {
    return this.each(function () {
      var $this = $(this)
      var data = $this.data('bs.inputmask')
      
      if (!data) $this.data('bs.inputmask', (data = new Inputmask(this, options)))
    })
  }

  $.fn.inputmask.Constructor = Inputmask


  // INPUTMASK NO CONFLICT
  // ====================

  $.fn.inputmask.noConflict = function () {
    $.fn.inputmask = old
    return this
  }
  
  // INPUTMASK DATA-API
  // ==================

  $(document).on('focus.bs.inputmask.data-api', '[data-mask]', function (e) {
    var $this = $(this)
    if ($this.data('bs.inputmask')) return
    $this.inputmask($this.data())
  })

}(window.jQuery);

/******************************* Input Mask Ends *******************************/


/******************************* Session Timeout Starts *******************************/
/*
 * bootstrap-session-timeout
 * www.orangehilldev.com
 *
 * Copyright (c) 2014 Vedran Opacic
 * Licensed under the MIT license.
 */

'use strict';
(function( $ ){
    jQuery.sessionTimeout = function( options ) {
        var defaults = {
            title               : 'Your Session is About to Expire!',
            message             : 'Your session is about to expire.',
            logoutButton        : 'Logout',
            keepAliveButton     : 'Stay Connected',
            keepAliveUrl        : '/keep-alive',
            ajaxType            : 'POST',
            ajaxData            : '',
            redirUrl            : '/timed-out',
            logoutUrl           : '/log-out',
            warnAfter           : 900000,   // 15 minutes
            redirAfter          : 1200000,  // 20 minutes
            keepAliveInterval   : 5000,
            keepAlive           : true,
            ignoreUserActivity  : false,
            onWarn              : false,
            onRedir             : false
        };

        var opt = defaults,
            timer;

        // extend user-set options over defaults
        if ( options ) {
            opt = $.extend( defaults, options );
        }

        // some error handling if options are miss-configured
        if(opt.warnAfter >= opt.redirAfter){
            // for IE8 and earlier
            if (typeof console !== "undefined" || typeof console.error !== "undefined") {
                console.error('Bootstrap-session-timeout plugin is miss-configured. Option "redirAfter" must be equal or greater than "warnAfter".');
            }
            return false;
        }

        // unless user set his own callback function, prepare bootstrap modal elements and events
        if(typeof opt.onWarn !== 'function'){
            // create timeout warning dialog
            $('body').append('<div class="session-timeout fade" id="sessionTimeout-dialog"> \
			<div class="alert alert-danger alert-dismissable"> \
				<div class="row"> \
					<div class="col-md-8 st-message"> \
						<span class="st-icon"><i class="fa fa-clock-o"></i></span> '+ opt.message +' \
					</div> \
					<div class="col-md-4 text-right"> \
						<button class="btn btn-default" type="button" id="sessionTimeout-dialog-logout">'+ opt.logoutButton +'</button> \
						<button class="btn btn-primary" type="button" id="sessionTimeout-dialog-keepalive">'+ opt.keepAliveButton +'</button> \
					</div> \
				</div> \
			</div> \
		</div>');

            // "Logout" button click
            $('#sessionTimeout-dialog-logout').on('click', function () { window.location = opt.logoutUrl; });
            // "Stay Connected" button click
            $('#sessionTimeout-dialog-keepalive').on('click', function () {
            	$('#sessionTimeout-dialog').removeClass('in');
                // restart session timer
                startSessionTimer();
            });
        }

        // reset timer on any of these events
        if (!opt.ignoreUserActivity) {
            $(document).on('keyup mouseup mousemove touchend touchmove', function() {
                startSessionTimer();
            });
        }

        // keeps the server side connection live, by pingin url set in keepAliveUrl option
        // keepAlivePinged is a helper var to ensure the functionality of the keepAliveInterval option
        var keepAlivePinged = false;
        function keepAlive () {
            if (!keepAlivePinged){
                $.ajax({
                    type: opt.ajaxType,
                    url: opt.keepAliveUrl,
                    data: opt.ajaxData
                });
                keepAlivePinged = true;
                setTimeout(function() {
                    keepAlivePinged = false;
                }, opt.keepAliveInterval);
            }
        }

        function startSessionTimer(){
            // console.log('startSessionTimer()');
            // clear session timer
            clearTimeout(timer);

            // if keepAlive option is set to "true", ping the "keepAliveUrl" url
            if (opt.keepAlive) {
                keepAlive();
            }

            // set session timer 
            timer = setTimeout(function(){
                // check for onWarn callback function and if there is none, launch dialog
                if(typeof opt.onWarn !== 'function'){
                    $('#sessionTimeout-dialog').addClass('in');
                }
                else {
                    opt.onWarn('warn');
                }
                // start dialog timer
                startDialogTimer();
            }, opt.warnAfter);
        }

        function startDialogTimer(){
            // console.log('startDialogTimer()');
            // clear session timer
            clearTimeout(timer);

            // set dialog timer 
            timer = setTimeout(function(){
                // check for onRedir callback function and if there is none, launch redirect
                if(typeof opt.onRedir !== 'function'){
                    startDialogTimer('start');
                    window.location = opt.redirUrl;
                }
                else {
                    opt.onRedir();
                }
            }, (opt.redirAfter - opt.warnAfter));
        }

        // start session timer
        startSessionTimer();
    };
})( jQuery );
/******************************* Session Timeout Ends *******************************/


/**************************** SERIALIZE TO JSON **********************/
/*!
  SerializeJSON jQuery plugin.
  https://github.com/marioizquierdo/jquery.serializeJSON
  version 2.4.1 (Oct, 2014)

  Copyright (c) 2014 Mario Izquierdo
  Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
  and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
*/
(function(e){"use strict";e.fn.serializeJSON=function(t){var n,r,i,s,o,u,a,f;a=e.serializeJSON;f=a.optsWithDefaults(t);a.validateOptions(f);r=this.serializeArray();a.readCheckboxUncheckedValues(r,this,f);n={};e.each(r,function(e,t){i=a.splitInputNameIntoKeysArray(t.name);s=i.pop();if(s!=="skip"){o=a.parseValue(t.value,s,f);if(f.parseWithFunction&&s==="_")o=f.parseWithFunction(o,t.name);a.deepSet(n,i,o,f)}});return n};e.serializeJSON={defaultOptions:{parseNumbers:false,parseBooleans:false,parseNulls:false,parseAll:false,parseWithFunction:null,checkboxUncheckedValue:undefined,useIntKeysAsArrayIndex:false},optsWithDefaults:function(t){var n,r;if(t==null)t={};n=e.serializeJSON;r=n.optWithDefaults("parseAll",t);return{parseNumbers:r||n.optWithDefaults("parseNumbers",t),parseBooleans:r||n.optWithDefaults("parseBooleans",t),parseNulls:r||n.optWithDefaults("parseNulls",t),parseWithFunction:n.optWithDefaults("parseWithFunction",t),checkboxUncheckedValue:n.optWithDefaults("checkboxUncheckedValue",t),useIntKeysAsArrayIndex:n.optWithDefaults("useIntKeysAsArrayIndex",t)}},optWithDefaults:function(t,n){return n[t]!==false&&n[t]!==""&&(n[t]||e.serializeJSON.defaultOptions[t])},validateOptions:function(e){var t,n;n=["parseNumbers","parseBooleans","parseNulls","parseAll","parseWithFunction","checkboxUncheckedValue","useIntKeysAsArrayIndex"];for(t in e){if(n.indexOf(t)===-1){throw new Error("serializeJSON ERROR: invalid option '"+t+"'. Please use one of "+n.join(","))}}},parseValue:function(t,n,r){var i,s;s=e.serializeJSON;if(n=="string")return t;if(n=="number"||r.parseNumbers&&s.isNumeric(t))return Number(t);if(n=="boolean"||r.parseBooleans&&(t==="true"||t==="false"))return["false","null","undefined","","0"].indexOf(t)===-1;if(n=="null"||r.parseNulls&&t=="null")return["false","null","undefined","","0"].indexOf(t)!==-1?null:t;if(n=="array"||n=="object")return JSON.parse(t);if(n=="auto")return s.parseValue(t,null,{parseNumbers:true,parseBooleans:true,parseNulls:true});return t},isObject:function(e){return e===Object(e)},isUndefined:function(e){return e===void 0},isValidArrayIndex:function(e){return/^[0-9]+$/.test(String(e))},isNumeric:function(e){return e-parseFloat(e)>=0},splitInputNameIntoKeysArray:function(t){var n,r,i,s,o;o=e.serializeJSON;s=o.extractTypeFromInputName(t),r=s[0],i=s[1];n=r.split("[");n=e.map(n,function(e){return e.replace(/]/g,"")});if(n[0]===""){n.shift()}n.push(i);return n},extractTypeFromInputName:function(t){var n,r;r=e.serializeJSON;if(n=t.match(/(.*):([^:]+)$/)){var i=["string","number","boolean","null","array","object","skip","auto"];if(i.indexOf(n[2])!==-1){return[n[1],n[2]]}else{throw new Error("serializeJSON ERROR: Invalid type "+n[2]+" found in input name '"+t+"', please use one of "+i.join(", "))}}else{return[t,"_"]}},deepSet:function(t,n,r,i){var s,o,u,a,f,l;if(i==null)i={};l=e.serializeJSON;if(l.isUndefined(t)){throw new Error("ArgumentError: param 'o' expected to be an object or array, found undefined")}if(!n||n.length===0){throw new Error("ArgumentError: param 'keys' expected to be an array with least one element")}s=n[0];if(n.length===1){if(s===""){t.push(r)}else{t[s]=r}}else{o=n[1];if(s===""){a=t.length-1;f=t[a];if(l.isObject(f)&&(l.isUndefined(f[o])||n.length>2)){s=a}else{s=a+1}}if(l.isUndefined(t[s])){if(o===""){t[s]=[]}else if(i.useIntKeysAsArrayIndex&&l.isValidArrayIndex(o)){t[s]=[]}else{t[s]={}}}u=n.slice(1);l.deepSet(t[s],u,r,i)}},readCheckboxUncheckedValues:function(t,n,r){var i,s,o,u,a;if(r==null)r={};a=e.serializeJSON;i="input[type=checkbox][name]:not(:checked,[disabled])";s=n.find(i).add(n.filter(i));s.each(function(n,i){o=e(i);u=o.attr("data-unchecked-value");if(u){t.push({name:i.name,value:u})}else{if(!a.isUndefined(r.checkboxUncheckedValue)){t.push({name:i.name,value:r.checkboxUncheckedValue})}}})}}})(window.jQuery||window.Zepto||window.$);
/**************************** SERIALIZE TO JSON Ends **********************/

/**************************** Fullscreen JS Starts **********************/
(function () {   
	'use strict';
	var isCommonjs = typeof module !== 'undefined' && module.exports;
	var keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element;
	var fn = (function () {
		var val;
		var valLength;
		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};
		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0, valLength = val.length; i < valLength; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}
		return false;
	})();

	var screenfull = {
		request: function (elem) {
			var request = fn.requestFullscreen;
			elem = elem || document.documentElement;
			// Work around Safari 5.1 bug: reports support for
			// keyboard in fullscreen even though it doesn't.
			// Browser sniffing, since the alternative with
			// setTimeout is even worse.
			if (/5\.1[\.\d]* Safari/.test(navigator.userAgent)) {
				elem[request]();
			} else {
				elem[request](keyboardAllowed && Element.ALLOW_KEYBOARD_INPUT);
			}
		},
		exit: function () {
			document[fn.exitFullscreen]();
		},
		toggle: function (elem) {
			if (this.isFullscreen) {
				this.exit();
			} else {
				this.request(elem);
			}
		},
		raw: fn
	};
	if (!fn) {
		if (isCommonjs) {
			module.exports = false;
		} else {
			window.screenfull = false;
		}
		return;
	}
	Object.defineProperties(screenfull, {
		isFullscreen: {
			get: function () {
				return !!document[fn.fullscreenElement];
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		enabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return !!document[fn.fullscreenEnabled];
			}
		}
	});

	if (isCommonjs) {
		module.exports = screenfull;
	} else {
		window.screenfull = screenfull;
	}
})();
/**************************** Fullscreen JS Ends **********************/

/********************* Searcheable Dropdown *******************/


/********************* Searcheable Dropdown Ends *******************/
