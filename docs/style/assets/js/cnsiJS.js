/**
 * cnsiJS - Javascript Library
 * Copyright by CNSI CTI 2014
 */

/**
 * @module cnsiJS
 */

var cnsiJS = cnsiJS || {};
cnsiJS.core = cnsiJS.core || {};

/**
 * @class core
 */
cnsiJS.core.array = (function() {
	var library = {};
	/**
	 @method sorting
	 @param {Array} _sortArray
	 @param {String} order
	 **/
	library.sorting = function(_sortArray, order) {
		var err = cnsiJS.core.util.throwError({
			array : _sortArray,
			string : order
		});
		if (err.back) {
			var sortArray = _sortArray;
			var numberArray = [], alphaArray = [], numberalphaArray = [];
			for (var i in sortArray) {
				if (String(sortArray[i]).match(/^[0-9]/)) {
					if (String(sortArray[i]).match(/[a-z]/ig)) {
						numberalphaArray.push(sortArray[i]);
					} else {
						numberArray.push(sortArray[i]);
					}
				}
				if (String(sortArray[i]).match(/^[a-zA-Z]/)) {
					if (String(sortArray[i]).match(/[0-9]/g)) {
						numberalphaArray.push(sortArray[i]);
					} else {
						alphaArray.push(sortArray[i]);
					}
				}
			}
			;
			numberArray.sort(function(a, b) {
				return a - b;
			});
			numberalphaArray.sort(function(a, b) {
				return a < b;
			});
			alphaArray.sort();

			if (order.match(/^asc$/ig)) {
				sortArray = alphaArray.concat(numberalphaArray).concat(numberArray);
			}
			if (order.match(/^dsc$/ig)) {
				sortArray = alphaArray.concat(numberalphaArray);
				sortArray.sort(function(a, b) {
					return a > b;
				});
				sortArray.reverse(), numberArray.reverse();
				sortArray = sortArray.concat(numberArray);
			}
			if (order.match(/^numberAlpha$/ig)) {
				sortArray = alphaArray.concat(numberalphaArray);
				sortArray.sort(function(a, b) {
					return a > b;
				});
				sortArray = numberArray.concat(sortArray);
			}
			if (order.match(/^alphaNumber$/ig)) {
				sortArray = alphaArray.concat(numberalphaArray);
				sortArray.sort(function(a, b) {
					return a > b;
				});
				sortArray = sortArray.concat(numberArray);
			}
			return sortArray;
		}

	};
	/**
	 @method rangeNumGenerator
	 @param {String} start
	 @param {String} end
	 @return {Array} rangeArr
	 **/
	library.rangeNumGenerator = function(start, end, distance) {
		var rangeArr = [];
		var err = cnsiJS.core.util.throwError({
			number1 : start,
			number2 : end,
			number3 : (distance || 0)
		});
		if (err.back) {
			for (var i = start; i <= end; i++) {
				rangeArr.push(i * (distance || 1));
			}
			return rangeArr;
		}
	};
	/**
	 @method attach
	 @param {Array} array
	 @param {Array} attachArray
	 @param {Number} _begin
	 @return finalArray;
	 **/
	library.attach = function(array, attachArray, begin) {
		var err = cnsiJS.core.util.throwError({
			array1 : array,
			array2 : attachArray,
			number : begin || 0
		});
		if (err.back) {
			var finalArray = [];
			var attached1 = [], attached2 = [];
			for (var i in array) {
				if (i > begin - 1) {
					attached2.push(array[i]);
				} else {
					attached1.push(array[i]);
				}
			}
			finalArray = attached1.concat(attachArray).concat(attached2);
			return finalArray;
		}
	};
	/**
	 @method detach
	 @param {Array} array
	 @param {Array} removeArray
	 @param {Array} start
	 @param {Array} end
	 @return {Array} finalArray
	 **/
	library.detach = function(array, removeArray, type, start, end) {
		var finalArray = [];
		var err = cnsiJS.core.util.throwError({
			array1 : array,
			array2 : removeArray,
			string : type,
			number1 : start || 0,
			number2 : end || array.length
		});
		if (err.back) {
			var rangeNum = library.rangeNumGenerator(start || 0, end || array.length);
			for (var i in array) {
				if (rangeNum.indexOf(Number(i)) !== -1) {
					var cond = (type === "value") ? removeArray.indexOf(array[i]) === -1 : removeArray.indexOf(i) === -1;
					if (cond) {
						finalArray.push(array[i]);
					}
				} else {
					finalArray.push(array[i]);
				}
			}
		}
		return finalArray;
	};

	/**
	 @method detachR
	 @param {Array} array
	 @param {Array} removeArray
	 @param {Array} start
	 @param {Array} end
	 @return {Array} finalArray
	 **/
	library.detachR = function(array, removeArray, start, end) {
		var finalArray = [];
		var err = cnsiJS.core.util.throwError({
			array1 : array,
			array2 : removeArray,
			number1 : start || 0,
			number2 : end || array.length
		});
		if (err.back) {
			var rangeNum = library.rangeNumGenerator(start || 0, end || array.length);
			for (var i in array) {
				if (rangeNum.indexOf(Number(i)) !== -1) {
					if (removeArray.indexOf(array[i]) !== -1) {
						finalArray.push(array[i]);
					}
				} else {
					finalArray.push(array[i]);
				}
			}
		}
		return finalArray;
	};

	/**
	 @method unique
	 @param {Array} array
	 @return {Array} finalArray
	 **/
	library.unique = function(array) {
		var finalArray = [];
		var err = cnsiJS.core.util.throwError({
			array : array
		});
		if (err.back) {
			for (var i in array) {
				var index = finalArray.indexOf(array[i]);
				if (index === -1) {
					finalArray.push(array[i]);
				}
			}
		}
		return finalArray;
	};
	/**
	 @method toString
	 @param {Array} array
	 @return {Array} array.toString() || array
	 **/
	library.toString = function(array) {
		return ( typeof array !== "string") ? array.toString() : array;
	};
	return library;
})();

/**
 * @module cnsiJS
 */

var cnsiJS = cnsiJS || {};
cnsiJS.core = cnsiJS.core || {};

/**
 * @class core
 */
cnsiJS.core.currency = (function() {

	var library = {};
	/**
	 @method format
	 @param {Number} amount
	 @param {String} type
	 @param {Number} fixedDecimal
	 @return {String} _amount
	 **/
	library.format = function(amount, type, fixedDecimal) {
		var err = cnsiJS.core.util.throwError({
			number1 : amount,
			string : type,
			number2 : fixedDecimal || 0
		});
		if (err.back) {
			var point = (String(amount).match(/\./)) ? String(amount).split(".") : [amount, "00"], space = "";
			var _amount = String(point[0]).replace(cnsiJS.core.regex.rgx_currency.format, "$1,");
			if (String(type).match(/(euro|pound)/)) {
				_amount = String(point[0]).replace(cnsiJS.core.regex.rgx_currency.format, "$1.$2,");
			}
			var pointval = (fixedDecimal !== undefined) ? String(point[1]).substr(0, fixedDecimal) : point[1];
			_amount = _amount + "." + pointval;
			_amount = (String(amount).match(/^\-/)) ? "-" + cnsiJS.core.regex.rgx_currency.symbols[type] + space + _amount.replace(/\-/, "") : cnsiJS.core.regex.rgx_currency.symbols[type] + space + _amount;
			return _amount;
		}

	};
	return library;
})();

/**
 * @module cnsiJS
 */

var cnsiJS = cnsiJS || {};
cnsiJS.core = cnsiJS.core || {};

/**
 * @class core
 */
cnsiJS.core.date = (function() {

	var privateFn = {};
	/**
	 @method datetype
	 @param {String} date
	 @return {Number} _datetype
	 **/
	privateFn.datetype = function(date) {
		var err = cnsiJS.core.util.throwError({
			string : date
		});
		if (err.back) {
			var _datetype = "";
			for (var i in cnsiJS.core.regex.rgx_date) {
				if (String(date).match(cnsiJS.core.regex.rgx_date[i])) {
					return i;
				}
			}
			return _datetype;
		}
	};
	/**
	 @method dateDigitFormate
	 @param {String} digits
	 @return {String} result
	 **/
	privateFn.dateDigitFormate = function(digits) {
		digits = String(digits);
		var err = cnsiJS.core.util.throwError({
			string : digits
		});
		if (err.back) {
			var _digits = (Number(digits) < 10) ? "0" + digits : digits;
			return _digits;
		}
	};

	var library = {};
	library.dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	library.monthName = ["December", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"];
	/**
	 @method currentTime
	 @param {Object} options
	 @param {String} currenttime
	 **/
	library.currentTime = function(options) {
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
		hh = _this.zeroFormat(((hh > 12) ? (hh - setting.format) : hh));
		ss = (setting.seconds) ? setting.join + ss : "";
		var amPm = (newDate.getHours() < 12) ? setting.am : setting.pm, ampmString = (setting.AMPM) ? amPm : "";
		var currenttime = hh + setting.join + mm + ss + ampmString;
		return currenttime;
	};
	/**
	 @method getWeekCount
	 @param {Number} year
	 @param {Number} month
	 @param {String} week
	 **/
	library.getWeekCount = function(year, month) {
		var err = cnsiJS.core.util.throwError({
			number1 : year,
			number2 : month
		});
		if (err.back) {
			var date = new Date(year, month + 1, 0);
			var setday = new Date();
			var total = date.getDate();
			var cnt = 0;
			var isoWeek = 0;
			for (var i = 0, w = ""; i < date.getDate(); i++) {
				setday.setFullYear(date.getFullYear(), date.getMonth(), (i + 1));
				w = (setday.getDay() === 0 || w !== "") ? w + setday.getDay() : w;
				isoWeek = (w.length === 7) ? isoWeek + 1 : isoWeek;
				w = (w.length === 7) ? "" : w;
				cnt = (i % 7 === 6) ? cnt + 1 : cnt;
			}
			var balance = (total - (cnt * 7));
			balance = (balance === 0) ? "" : "." + balance;
			var week = {
				week : cnt + balance,
				isoWeek : isoWeek,
				totalDays : total
			};
			return week;
		}
	};
	/**
	 @method getWeekAllCount
	 @param {String} year
	 @return {Object} weeks
	 **/
	library.getWeekAllCount = function(year) {
		var err = cnsiJS.core.util.throwError({
			number : year
		});
		if (err.back) {
			var monthStart = 0, monthEnd = 12, weeks = {};
			weeks.weekAll = weeks.isoWeekAll = weeks.totalDays = weeks.betweendays = 0;
			for (var i = monthStart; i < monthEnd; i++) {
				var getWeek = library.getWeekCount(year, i);
				weeks.weekAll = Number(weeks.weekAll) + Number(getWeek.week);
				weeks.isoWeekAll = Number(weeks.isoWeekAll) + Number(getWeek.isoWeek);
				weeks.totalDays = Number(weeks.totalDays) + Number(getWeek.totalDays);
				var monthStr = cnsiJS.core.string.extract(library.monthName[i], 0, 3);
				monthStr = cnsiJS.core.string.lowerCase(monthStr);
				weeks[monthStr] = getWeek;
			}
			return weeks;
		}
	};
	/**
	 @method setDateInfo
	 @param {Object} obj
	 @param {Date Object} d
	 **/
	library.setDateInfo = function(obj, d) {
		var err = cnsiJS.core.util.throwError({
			object : obj,
			date : d
		});
		if (err.back) {
			obj.year = (d.getFullYear());
			obj.month = (d.getMonth());
			obj.date = (d.getDate());
			obj.hours = (d.getHours());
			obj.minutes = (d.getMinutes());
			obj.seconds = (d.getSeconds());
			obj.milliseconds = (d.getMilliseconds());
			obj.day = d.getDay();
			obj.dayName = this.dayName[d.getDay()];
			obj.monthName = this.monthName[d.getMonth()];
			obj.mdy = privateFn.dateDigitFormate(obj.month + 1) + "/" + privateFn.dateDigitFormate(obj.date) + "/" + obj.year;
			obj.ymd = obj.year + "/" + privateFn.dateDigitFormate(obj.month + 1) + "/" + privateFn.dateDigitFormate(obj.date);
			obj.dmy = privateFn.dateDigitFormate(obj.date) + "/" + privateFn.dateDigitFormate(obj.month + 1) + "/" + obj.year;
		}
	};

	/**
	 @method betweenDays
	 @param {Date} from
	 @param {Date} to
	 @return {Object} betweendays
	 **/
	library.betweenDays = function(from, to) {
		var err = cnsiJS.core.util.throwError({
			date1 : from,
			date2 : to
		});
		if (err.back) {
			var fromDate = new Date(from), toDate = new Date(to), distance = toDate - fromDate;
			var sec = 1000, min = sec * 60, hou = min * 60, day = hou * 24;
			var betweendays = {};
			betweendays.days = Math.floor(distance / day);
			betweendays.hours = Math.floor((distance % day) / hou);
			betweendays.minutes = Math.floor((distance % hou) / min);
			betweendays.seconds = Math.floor((distance % min) / sec);
			betweendays.countdown = betweendays.days + " days " + betweendays.hours + " hrs " + betweendays.minutes + " min " + betweendays.seconds + " sec";
			return betweendays;
		}

	};

	/**
	 @method now
	 @return {Object} obj
	 **/
	library.now = function(date) {
		var err = cnsiJS.core.util.throwError({
			string : date || ""
		});
		if (err.back) {
			var d = (date) ? new Date(date) : new Date(), obj = {};
			this.setDateInfo(obj, d);
			obj.fulldate = d;
			return obj;
		}
	};
	/**
	 @method next
	 @return {Object} obj
	 **/
	library.next = function(date) {
		var err = cnsiJS.core.util.throwError({
			string : date || ""
		});
		if (err.back) {
			var d = (date) ? new Date(date) : new Date(), obj = {};
			obj.year = d.getFullYear() + 1;
			obj.month = (d.getMonth() >= 11) ? 1 : d.getMonth() + 2;
			obj.date = d.getDate() + 1;
			obj.hours = d.getHours() + 1;
			obj.minutes = d.getMinutes() + 1;
			obj.seconds = d.getSeconds() + 1;
			obj.milliseconds = d.getMilliseconds() + 1;
			obj.day = (d.getDay() === 6) ? 0 : d.getDay() + 1;
			obj.dayName = this.dayName[obj.day];
			obj.monthName = this.monthName[obj.month];
			d.setFullYear(d.getFullYear(), d.getMonth(), d.getDate() + 1);
			obj.fulldate = d;
			return obj;
		}
	};
	/**
	 @method previous
	 @return {Object} obj
	 **/
	library.previous = function(date) {
		var err = cnsiJS.core.util.throwError({
			string : date || ""
		});
		if (err.back) {
			var d = (date) ? new Date(date) : new Date(), obj = {};
			obj.year = d.getFullYear() - 1;
			obj.month = (d.getMonth() === 0) ? 11 : d.getMonth();
			obj.monthName = this.monthName[(obj.month === 11) ? 11 : obj.month];
			obj.date = ((d.getDate() - 1) === 0) ? this.totalDays(d.getFullYear(), d.getMonth()) : d.getDate() - 1;
			obj.day = (d.getDay() === 6) ? 0 : d.getDay() - 1;
			obj.dayName = this.dayName[obj.day];
			obj.hours = (d.getHours() - 1 === -1) ? 0 : d.getHours() - 1;
			obj.minutes = (d.getMinutes() - 1 === -1) ? 0 : d.getMinutes() - 1;
			obj.seconds = (d.getSeconds() - 1 === -1) ? 0 : d.getSeconds() - 1;
			obj.milliseconds = (d.getMilliseconds() - 1 === -1) ? 0 : d.getMilliseconds() - 1;
			d.setFullYear(d.getFullYear(), d.getMonth(), d.getDate() - 1);
			obj.fulldate = d;
			return obj;
		}

	};
	/**
	 @method launch
	 @return {string} d
	 **/
	library.launch = function(year, month, date, hours, minutes, seconds, milliseconds) {
		var err = cnsiJS.core.util.throwError({
			number1 : year,
			number2 : month || 1,
			number3 : date || 1,
			number4 : hours || 0,
			number5 : minutes || 0,
			number6 : seconds || 0,
			number7 : milliseconds || 0
		});
		if (err.back) {
			var d = new Date(year || new Date().getFullYear(), month || 0, date || 1, hours || 0, minutes || 0, seconds || 0, milliseconds || 0), obj = {};
			d.setMonth(month || 0);
			this.setDateInfo(obj, d);
			obj.betweendays = this.betweenDays(new Date(), d);
			return obj;
		}
	};
	/**
	 @method leap
	 @param {String|Number} year
	 @return {Boolean} leapyear
	 **/
	library.leap = function(year) {
		var err = cnsiJS.core.util.throwError({
			string : year
		});
		if (err.back) {
			var newdate = new Date();
			year = (year === "current") ? newdate.getFullYear() : (year === "previous") ? newdate.getFullYear() - 1 : (year === "next") ? newdate.getFullYear() + 1 : year;
			var d = new Date(year, 2, 0), leapyear = (d.getDate() === 29) ? true : false;
			return leapyear;
		}
	};
	/**
	 @method totalDays
	 @param {String|Number} year
	 @param {String|Number} month
	 @return {String} totaldays
	 **/
	library.numberOfDays = function(year, month) {
		var err = cnsiJS.core.util.throwError({
			number1 : year,
			number2 : month
		});
		if (err.back) {
			var d = new Date(year, (Number(month) === 0) ? 12 : Number(month), 0), totaldays = d.getDate();
			return totaldays;
		}
	};
	/**
	 @method dateToOneYear
	 @param {String|Number} date
	 @param {String|Number} mont
	 @param {String|Number} year
	 @return {String} enddate
	 **/
	library.dateToOneYear = function(paramdate, parammonth, paramyear) {
		var err = cnsiJS.core.util.throwError({
			number1 : paramdate || 0,
			number2 : parammonth || 0,
			number3 : paramyear || 0
		});
		if (err.back) {
			var currentDate = new Date(), newDate = new Date(), endDate;
			currentDate.setFullYear(paramyear || currentDate.getYear(), parammonth || currentDate.getMonth(), paramdate || currentDate.getDate());
			newDate.setFullYear(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate());
			endDate = (newDate.getMonth()) + "/" + newDate.getDate() + "/" + newDate.getFullYear();
			endDate = library.format(endDate, "mm/dd/yyyy");
			return endDate;
		}
	};
	/**
	 @method format
	 @param {String} date
	 @param {String} format
	 @return {String} formatDefault
	 **/
	library.format = function(date, format, join) {
		var err = cnsiJS.core.util.throwError({
			string1 : date,
			string2 : format || "",
			string3 : (format) ? (cnsiJS.core.regex.rgx_date[format] === undefined) ? undefined : "" : "",
			string4 : join || ""
		});
		if (err.back) {
			var strdate = String(date);
			var datesplit = strdate.split(/\/|-/g);
			var datetype = privateFn.datetype(date);
			var divider = join || "/";
			var arrangedDate = function(datetype, order) {
				var inputOrder = "", outputOrder, zeroadd = function(value) {
					var loc_val = Number(value);
					return (loc_val < 10) ? "0" + loc_val : loc_val;
				}, matched = true, year, month;

				if (matched && datetype === "yyyy/mm/dd") {
					year = (String(order[0]).length == 2) ? "20" + order[0] : order[0], month = Number(order[1]);
					inputOrder = (year + divider + month + divider + order[2]);
					matched = false;
				}
				if (matched && datetype === "mm/dd/yyyy") {
					year = (String(order[2]).length == 2) ? "20" + order[2] : order[2], month = Number(order[0]);
					inputOrder = (year + divider + month + divider + order[1]);
					matched = false;
				}
				if (matched && datetype === "dd/mm/yyyy") {
					year = (String(order[2]).length == 2) ? "20" + order[2] : order[2], month = Number(order[1]);
					inputOrder = (year + divider + month + divider + order[0]);
					matched = false;
				}
				if (matched && datetype === "yyyy/dd/mm") {
					year = (String(order[0]).length == 2) ? "20" + order[0] : order[0], month = Number(order[2]);
					inputOrder = (year + divider + month + divider + order[1]);
					matched = false;
				}
				if (matched && datetype === "dd/yyyy/mm") {
					year = (String(order[1]).length == 2) ? "20" + order[1] : order[1], month = Number(order[2]);
					inputOrder = (year + divider + month + divider + order[0]);
					matched = false;
				}
				if (matched && datetype === "mm/yyyy/dd") {
					year = (String(order[1]).length == 2) ? "20" + order[1] : order[1], month = Number(order[0]);
					inputOrder = (year + divider + month + divider + order[2]);
					matched = false;
				}
				if (!matched) {
					outputOrder = inputOrder.split("/");
					var year = outputOrder[0], month = zeroadd(Number(outputOrder[1])), date = zeroadd(outputOrder[2]);
					if (format === "yyyy/mm/dd") {
						outputOrder = year + divider + month + divider + date;
					}
					if (format === "mm/dd/yyyy") {
						outputOrder = month + divider + date + divider + year;
					}
					if (format === "dd/mm/yyyy") {
						outputOrder = date + divider + month + divider + year;
					}
					if (format === "yyyy/dd/mm") {
						outputOrder = year + divider + date + divider + month;
					}
					if (format === "dd/yyyy/mm") {
						outputOrder = date + divider + year + divider + month;
					}
					if (format === "mm/yyyy/dd") {
						outputOrder = month + divider + year + divider + date;
					}
				}
				return outputOrder;
			};
			var formatDefault = arrangedDate(datetype, datesplit);
			return formatDefault;
		}

	};

	return library;
})();

/**
 * @module cnsiJS
 */

var cnsiJS = cnsiJS || {};
cnsiJS.core = cnsiJS.core || {};

/**
 * @class core
 */
cnsiJS.core.number = (function() {
	var library = {};
	/**
	 @method minMax
	 @param {Array} numberArray
	 @param {String} type ("min" or "max")
	 @return {String} _number (min or max) value
	 **/
	library.minMax = function(numberArray, type) {
		var err = cnsiJS.core.util.throwError({
			array : numberArray,
			string : type
		});
		if (err.back) {
			var _number = (type.match(/max/ig)) ? cnsiJS.core.array.sorting(numberArray, "dsc")[0] : cnsiJS.core.array.sorting(numberArray, "asc")[0];
			return _number;
		}
	};
	/**
	 @method add
	 @param {Array} numberArray
	 @return {String} total
	 **/
	library.add = function(numberArray) {
		var err = cnsiJS.core.util.throwError({
			array : numberArray
		});
		if (err.back) {
			var _numberArray = numberArray, total = 0;
			for (var i in _numberArray) {
				var err2 = cnsiJS.core.util.throwError({
					number : _numberArray[i]
				});
				if (err2.back) {
					total = total + Number(_numberArray[i]);
				}
			}
			return total;
		}
	};
	/**
	 @method subtract
	 @param {Array} numberArray
	 @return {String} substract
	 **/
	library.subtract = function(numberArray) {
		var err = cnsiJS.core.util.throwError({
			array : numberArray
		});
		if (err.back) {
			var _numberArray = numberArray, substracted = 0;
			for (var i in _numberArray) {
				var err2 = cnsiJS.core.util.throwError({
					number : _numberArray[i]
				});
				if (err2.back) {
					substracted = Number(_numberArray[i]) - substracted;
				}
			}
			return substracted;
		}
	};
	/**
	 @method multiplication
	 @param {Array} numberArray
	 @return {String} multiplied
	 **/
	library.multiplication = function(numberArray) {
		var err = cnsiJS.core.util.throwError({
			array : numberArray
		});
		if (err.back) {
			var _numberArray = numberArray, multiplied = 1;
			for (var i in _numberArray) {
				var err2 = cnsiJS.core.util.throwError({
					number : _numberArray[i]
				});
				if (err2.back) {
					multiplied = Number(_numberArray[i]) * multiplied;
				}
			}
			return multiplied;
		}
	};
	/**
	 @method division
	 @param {Array} numberArray
	 @return {String} multiplied
	 **/
	library.division = function(numberArray) {
		var err = cnsiJS.core.util.throwError({
			array : numberArray
		});
		if (err.back) {
			var _numberArray = numberArray, division = 1;
			for (var i in _numberArray) {
				var err2 = cnsiJS.core.util.throwError({
					number : _numberArray[i]
				});
				if (err2.back) {
					division = Number(_numberArray[i]) / division;
				}
			}
			return division;
		}
	};
	/**
	 @method fixedDecimal
	 @param {Number} number
	 @param {Number} length
	 @return {String} _number
	 **/
	library.fixedDecimal = function(number, length) {
		var err = cnsiJS.core.util.throwError({
			decimal : number,
			number : length
		});
		if (err.back) {
			var _number = String(number);
			_number = _number.substr(0, String(number).indexOf(".")) + "." + _number.substr(String(number).lastIndexOf(".") + 1, length);
			return _number;
		}
	};
	return library;
})();

/**
 * @module cnsiJS
 */
var cnsiJS = cnsiJS || {};
cnsiJS.core = cnsiJS.core || {};
/**
 * @class core
 */
cnsiJS.core.regex = (function() {
	/**
	 @event {Object} regularExpression
	 @return {object} regularExpression
	 **/
	var regularExpression = {
		rgx_email : /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/,
		rgx_symbols : /[!$%^&*()_+|~\-={}\[\]:";'<>?,.\/`]/g,
		rgx_symbolsAll : /[!$%^&*()_+|~@\\#\-={}\[\]:";'<>?,.\/`]/g,
		rgx_symbolsAlls : /[!$%^&*()_+|~@\\#\-={}\[\]:";'<>?,.\/`\s]/g,
		rgx_alphabet : /^[a-zA-Z]{0,}$/g,
		rgx_alphabetSpace : /^[ a-z A-Z ]{0,}$/,
		rgx_alphabetsNumeric : /^([a-zA-Z]|[0-9]){0,}$/,
		rgx_alphabetsNumericSpace : /^[ a-z A-Z 0-9 ]{0,}$/,
		rgx_numeric : /^[0-9]{0,}$/g,
		rgx_numericSpace : /^[0-9 ]{0,}$/,
		rgx_decimal : /^\d+(\.\d+)?$/,
		rgx_decimalPoint : /\.\d+?$/,
		rgx_firstCase : /^[a-zA-Z]/,
		rgx_startCase : /(\s[a-z])|(^[a-z])/g,
		rgx_escape_char : /\.\^\$\*\+\?\(\)\[\{\\\|\-\]/,
		rgx_emptystrings : /(^$)|(^ {0,}$)/,
		rgx_date : {
			"mm/dd/yyyy" : /^(0[1-9]|1[0-2]|[1-9])\/(0[1-9]|[1-2][0-9]|3[0-1]|[1-9])\/((19|[2][0-9])[0-9]{2})/,
			"dd/mm/yyyy" : /^(0[1-9]|[1-2][0-9]|3[0-1]|[1-9])\/(0[1-9]|1[0-2]|[1-9])\/((19|[2][0-9])[0-9]{2})/,
			"yyyy/mm/dd" : /^((19|[2][0-9])[0-9]{2})\/(0[1-9]|1[0-2]|[1-9])\/(0[1-9]|[1-2][0-9]|3[0-1]|[1-9])/,
			"yyyy/dd/mm" : /^((19|[2][0-9])[0-9]{2})\/(0[1-9]|[1-2][0-9]|3[0-1]|[1-9])\/(0[1-9]|1[0-2]|[1-9])/,
			"dd/yyyy/mm" : /^(0[1-9]|[1-2][0-9]|3[0-1]|[1-9])\/((19|[2][0-9])[0-9]{2})\/(0[1-9]|1[0-2]|[1-9])/,
			"mm/yyyy/dd" : /^(0[1-9]|1[0-2]|[1-9])\/((19|[2][0-9])[0-9]{2})\/(0[1-9]|[1-2][0-9]|3[0-1]|[1-9])/
		},
		rgx_dateNotAcceptSymbol : /[a-zA-Z!$%^&*()_+|~\\={}\[\]:";'<>?,.@#`]/g,
		rgx_currency : {
			format : /(\d)(?=(\d{3})+(?!\d))/g,
			symbols : {
				"dollar" : "$",
				"pound" : "£",
				"euro" : "€",
				"$" : "$",
				"£" : "£",
				"€" : "€"
			}
		},
		rgx_ssn : {
			format : /^\d{3}-\d{2}-\d{4}$/,
			formatNotHypen : /^\d{9}$/,
			validFormat : /(?!\b(\d)\1+-(\d)\1+-(\d)\1+\b)(?!0|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}/,
			validFormatNotHypen : /(?!\b(\d)\1+\b)(?!0|9\d{2})\d{3}(?!00)\d{2}(?!0{4})\d{4}/
		}
	};
	return regularExpression;
})();

/**
 * @module cnsiJS
 */

var cnsiJS = cnsiJS || {};
cnsiJS.core = cnsiJS.core || {};

/**
 * @class core
 */
cnsiJS.core.storage = (function() {
	var library = {};
	/**
	 @method minMax
	 @param {Array} numberArray
	 @param {String} type ("min" or "max")
	 @return {String} _number (min or max) value
	 **/
	library.cookies = function() {
	};

	return library;
})();

/**
 * @module cnsiJS
 */

var cnsiJS = cnsiJS || {};
cnsiJS.core = cnsiJS.core || {};

/**
 * @class core
 */
cnsiJS.core.string = (function() {
	var library = {};

	/**
	 @method replaceAll
	 @param {String} string
	 @param {String} match
	 @param {String} replaceText || empty
	 @return {String} finalString
	 **/
	library.replaceAll = function(string, match, replaceText) {
		var err = cnsiJS.core.util.throwError({
			string1 : string,
			regex : match,
			string2 : replaceText || ""
		});
		if (err.back) {
			var str = String(string);
			var pattern = new RegExp(match);
			var finalString = str.replace(pattern, replaceText || "");
			return finalString;
		}
	};
	/**
	 @method lowerCase
	 @param {String} string
	 @return {String} lowercase
	 **/
	library.lowerCase = function(string) {
		var err = cnsiJS.core.util.throwError({
			string : string
		});
		if (err.back) {
			var lowercase = string.toLowerCase();
			return lowercase;
		}
	};
	/**
	 @method upperCase
	 @param {String} string
	 @return {String} uppercase
	 **/
	library.upperCase = function(string) {
		var err = cnsiJS.core.util.throwError({
			string : string
		});
		if (err.back) {
			var uppercase = string.toUpperCase();
			return uppercase;
		}
	};
	/**
	 @method firstcase
	 @param {String} string
	 @return {String} finalString
	 **/
	library.firstCase = function(string) {
		var err = cnsiJS.core.util.throwError({
			string : string
		});
		if (err.back) {
			var str = String(string).toLowerCase();
			var strMatch = str.match(cnsiJS.core.regex.rgx_firstCase);
			var finalString = str.replace(strMatch, String(strMatch).toUpperCase());
			return finalString;
		}
	};
	/**
	 @method startcase
	 @param {String} string
	 @return {String} finalString
	 **/
	library.startCase = function(string) {
		var err = cnsiJS.core.util.throwError({
			string : string
		});
		if (err.back) {
			var str = String(string).toLowerCase();
			var strMatch = str.match(cnsiJS.core.regex.rgx_startCase);
			var finalString = str;
			for (var match in strMatch) {
				finalString = finalString.replace(strMatch[match], String(strMatch[match]).toUpperCase());
			}
			return finalString;
		}
	};
	/**
	 @method wrap
	 @param {String} string
	 @param {String} wrapTxt
	 @param {String} replace
	 @return {String} finalString
	 **/
	library.wrap = function(string, wrapTxt, replace) {
		var err = cnsiJS.core.util.throwError({
			string1 : string,
			string2 : wrapTxt,
			regex : replace || ""
		});
		if (err.back) {
			var finalString = String(string);
			var _wrapTxt = wrapTxt.split("|");
			var pattern = new RegExp(replace || string, "ig");
			var matched = finalString.match(pattern);
			for (var i in matched) {
				finalString = finalString.replace(matched[i], _wrapTxt[0] + matched[i] + _wrapTxt[1]);
			}
			return finalString;
		}
	};
	/**
	 @method unwrap
	 @param {String} string
	 @param {String} wrapTxt
	 @param {String} replace
	 @return {String} finalString
	 **/
	library.unwrap = function(string, wrapTxt, replace) {
		var err = cnsiJS.core.util.throwError({
			string1 : string,
			string2 : wrapTxt,
			regex : replace || ""
		});
		if (err.back) {
			var finalString = this.replaceAll(string, wrapTxt, replace || " ");
			return finalString;
		}
	};
	/**
	 @method after
	 @param {String} string
	 @param {String} afterTxt
	 @param {String} find
	 @return {String} finalString
	 **/
	library.after = function(string, afterTxt, find) {
		var err = cnsiJS.core.util.throwError({
			string1 : string,
			string2 : afterTxt,
			regex : find || ""
		});
		if (err.back) {
			var finalString = String(string);
			var pattern = new RegExp(find || string, "ig");
			var matched = finalString.match(pattern);
			finalString = this.replaceAll(string, find || string, (find || string) + (afterTxt || " "));
			return finalString;
		}
	};
	/**
	 @method before
	 @param {String} string
	 @param {String} beforeTxt
	 @param {String} find
	 @return {String} finalString
	 **/
	library.before = function(string, beforeTxt, find) {
		var err = cnsiJS.core.util.throwError({
			string1 : string,
			string2 : beforeTxt,
			regex : find || ""
		});
		if (err.back) {
			var finalString = String(string);
			var pattern = new RegExp(find || string, "ig");
			var matched = finalString.match(pattern);
			finalString = library.replaceAll(string, find || string, (beforeTxt || " ") + (find || string));
			return finalString;
		}
	};
	/**
	 @method find
	 @param {String} string
	 @param {String} beforeTxt
	 @return {String} finalString
	 **/
	library.find = function(string, findTxt) {
		var err = cnsiJS.core.util.throwError({
			string1 : string,
			regex : findTxt
		});
		if (err.back) {
			var pattern = new RegExp(findTxt || string);
			var finalString = String(string).match(pattern) || "";
			return finalString;
		}
	};
	/**
	 @method extract
	 @param {String} string
	 @param {String} start
	 @param {String} end
	 @return {String} finalString
	 **/
	library.extract = function(string, start, end) {
		var err = cnsiJS.core.util.throwError({
			string : string,
			number1 : start,
			number2 : end
		});
		if (err.back) {
			var finalString = String(string);
			finalString = finalString.substr(start, end);
			return finalString;
		}
	};
	/**
	 @method comments
	 @param {String} string
	 @param {String} start
	 @param {String} end
	 @return {String} finalString
	 **/
	library.comments = function(string, type) {
		var err = cnsiJS.core.util.throwError({
			string1 : string,
			string2 : type
		});
		if (err.back) {
			var finalString = String(string);
			var ftype = String(type);
			ftype = (ftype.match(/html/i)) ? "<!--|-->" : (ftype.match(/^line/i)) ? "//|" : (ftype.match(/multiline/i)) ? "/*|*/" : "";
			finalString = library.wrap(finalString, ftype);
			return finalString;
		}
	};
	/**
	 @method entity
	 @param {String} string
	 @return {String} finalString
	 **/
	library.entity = function(string) {
		var err = cnsiJS.core.util.throwError({
			string : string
		});
		if (err.back) {
			var finalString = String(string);
			finalString = finalString.replace("<", "&lt;").replace(">", "&gt;");
			return finalString;
		}
	};
	/**
	 @method trim
	 @param {String} string
	 @param {String} chars
	 @return {String} finalString
	 **/
	library.trim = function(string, chars) {
		var err = cnsiJS.core.util.throwError({
			string1 : string,
			string2 : chars || " "
		});
		if (err.back) {
			var finalString = String(string);
			var strsplit = String(chars || " ").split("").join("|");
			var pattern = eval("/[" + strsplit + "]{2}/g");
			var matched = finalString.match(pattern);
			for (var j in matched) {
				var fchar = String(matched[j]).split("");
				finalString = finalString.replace(String(matched[j]), String(fchar[0]));
				if (finalString.match(pattern))
					finalString = library.trim(finalString, fchar[0]);
			}
			return finalString;
		}
	};
	/**
	 @method tag
	 @param {String} string
	 @param {String} tagname
	 @return {String} finalString
	 **/
	library.tag = function(string, tagname) {
		var err = cnsiJS.core.util.throwError({
			string1 : string,
			string2 : tagname
		});
		if (err.back) {
			var finalString = String(string);
			if (tagname.match("|")) {
				var tagArray = tagname.split("|");
				var endtag = library.wrap(tagArray[0], "</|>");
				var starttag = library.wrap(tagname.replace(/\|/g, " "), "<|>");
				finalString = library.wrap(string, starttag + "|" + endtag);
			} else {
				finalString = library.wrap(string, "<" + tagname + ">|</" + tagname + ">");
			}
			return finalString;
		}
	};
	/**
	 @method join
	 @param {Object/Array} obj
	 @return {String} finalString
	 **/
	library.join = function(obj, joiner) {
		var err = cnsiJS.core.util.throwError({
			object : obj,
			string : (joiner || "")
		});
		if (err.back) {
			var finalString = "";
			joiner = joiner || ",";
			for (var i in obj) {
				if (String( typeof obj[i]).match(/string|number/ig) == null) {
					finalString += library.join(obj[i], joiner) + joiner;
				} else {
					finalString += obj[i] + (joiner || ",");
				}
			}
			var pattern = cnsiJS.core.regex.rgx_escape_char;
			joiner = (joiner.match(pattern)) ? joiner.replace(pattern, "\\$1") : joiner;
			finalString = finalString.replace(finalString.match(eval("/" + ((joiner || ",") + "{0,2}") + "$/")), "");
			return finalString;
		}

	};
	return library;
})();

/**
 * @module cnsiJS
 */
var cnsiJS = cnsiJS || {};
cnsiJS.core = cnsiJS.core || {};
/**
 * @class core
 */
cnsiJS.core.util = (function() {
	/**
	 @method util
	 @return {object} document object
	 **/
	var util = {};
	/**
	 @method throwError
	 @param {Object} handle
	 @return error
	 **/
	util.throwError = function(handle) {
		var error = {
			back : true,
			message : ""
		};
		if (handle) {
			for (var i in handle) {
				var key = i;
				if (String(key).match(/^array/)) {
					if ( typeof handle[key] === "string") {
						error.message = "Invalid Array";
						error.back = false;
						throw error.message;
					}
				}
				if (String(key).match(/^string/)) {
					if ( typeof handle[key] !== "string") {
						error.message = "Invalid String";
						error.back = false;
						throw error.message;
					}
				}
				if (String(key).match(/^method/)) {
					if (!handle[key]) {
						error.message = "Invalid Method";
						error.back = false;
						throw error.message;
					}
				}
				if (String(key).match(/^number/)) {
					if ( typeof handle[key] !== "number" && String(handle[key]).match(/[a-z]/ig)) {
						error.message = "Invalid Number";
						error.back = false;
						//throw error.message;
					}
				}
				if (String(key).match(/^regex/)) {
					if (!handle[key] instanceof RegExp && typeof handle[key] !== "string") {
						error.message = "Invalid Regex";
						error.back = false;
						throw error.message;
					}
				}
				if (String(key).match(/^object/)) {
					if (!handle[key] instanceof Object) {
						error.message = "Invalid Object";
						error.back = false;
						throw error.message;
					}
				}
				if (String(key).match(/^date/)) {
					if (!handle[key] instanceof Date) {
						error.message = "Invalid Date Object";
						error.back = false;
						throw error.message;
					}
				}
				if (String(key).match(/^decimal/)) {
					if (String(handle[key]).match(/[a-z]/ig) || String(handle[key]).match(cnsiJS.core.regex.rgx_decimalPoint) === null) {
						error.message = "Invalid Float Number";
						error.back = false;
						throw error.message;
					}
				}
			}
		}
		return error;
	};
	/**
	 @method indexOf
	 //for below ie8 version
	 **/
	util.indexOf = function() {
		if (!Array.prototype.indexOf) {
			Array.prototype.indexOf = function(obj, start) {
				for (var i = (start || 0), j = this.length; i < j; i++) {
					if (this[i] === obj) {
						return i;
					}
				}
				return -1;
			};
		}
		;
	}();
	return util;

})();

/**
 * @module cnsiJS
 */

var cnsiJS = cnsiJS || {};
cnsiJS.core = cnsiJS.core || {};

/**
 * @class core
 */
cnsiJS.core.validation = (function() {

	var library = {};
	/**
	 @method form
	 @param {Number} amount
	 @param {String} type
	 @param {Number} fixedDecimal
	 @return {String} _amount
	 **/
	/**
	 @method isNumber
	 @param {String} string
	 @return {Boolean} true|false
	 **/
	library.isNumber = function(string) {
		var err = cnsiJS.core.util.throwError({
			string : string
		});
		if (err.back) {
			var str = String(string);
			str = (str.match(cnsiJS.core.regex.rgx_numeric)) ? true : false;
			return str;
		}
	};
	/**
	 @method isSymbols
	 @param {String} string
	 @return {Boolean} true|false
	 **/
	library.isSymbols = function(string) {
		var err = cnsiJS.core.util.throwError({
			string : string
		});
		if (err.back) {
			var str = String(string);
			str = (str.match(cnsiJS.core.regex.rgx_symbols)) ? true : false;
			return str;
		}

	};
	/**
	 @method isAlphabets
	 @param {String} string
	 @return {Boolean} true|false
	 **/
	library.isAlphabets = function(string) {
		var err = cnsiJS.core.util.throwError({
			string : string
		});
		if (err.back) {
			var str = String(string);
			str = (str.match(cnsiJS.core.regex.rgx_alphabet)) ? true : false;
			return str;
		}

	};
	/**
	 @method isAlphabetsNumeric
	 @param {String} string
	 @return {Boolean} true|false
	 **/
	library.isAlphabetsNumeric = function(string) {
		var err = cnsiJS.core.util.throwError({
			string : string
		});
		if (err.back) {
			var str = String(string);
			str = (str.match(cnsiJS.core.regex.rgx_alphabetsNumeric)) ? true : false;
			return str;
		}

	};
	/**
	 @method isDecimal
	 @param {String} string
	 @return {Boolean} true|false
	 **/
	library.isDecimal = function(string) {
		var err = cnsiJS.core.util.throwError({
			string : string
		});
		if (err.back) {
			var str = String(string);
			str = (str.match(cnsiJS.core.regex.rgx_decimal)) ? true : false;
			return str;
		}
	};
	/**
	 @method isDecimalR
	 @param {String} string
	 @return {Boolean} true|false
	 **/
	library.isDecimalR = function(string) {
		var err = cnsiJS.core.util.throwError({
			string : string
		});
		if (err.back) {
			var str = String(string);
			str = (str.match(cnsiJS.core.regex.rgx_decimalPoint)) ? true : false;
			return str;
		}
	};
	/**
	 @method isEmail
	 @param {String} string
	 @return {Boolean} true|false
	 **/
	library.isEmail = function(string) {
		var err = cnsiJS.core.util.throwError({
			string : string
		});
		if (err.back) {
			var str = String(string);
			str = (str.match(cnsiJS.core.regex.rgx_email)) ? true : false;
			return str;
		}

	};
	/**
	 @method isSSN
	 @param {String} string
	 @return {Boolean} result (true|false)
	 **/
	library.isSSN = function(string) {
		var err = cnsiJS.core.util.throwError({
			string : string
		});
		if (err.back) {
			var str = String(string).replace(/-/g, "");
			var result = false;
			if (str.match(cnsiJS.core.regex.rgx_ssn.formatNotHypen) !== null && str.match(cnsiJS.core.regex.rgx_ssn.validFormatNotHypen) !== null) {
				result = true;
			}
			return result;
		}

	};
	/**
	 @method isDate
	 @param {String} string
	 @param {String} format
	 @return {Boolean} result (true|false)
	 **/
	library.isDate = function(string, format) {
		format = format || "mm/dd/yyyy";
		var err = cnsiJS.core.util.throwError({
			string1 : string,
			string2 : format,
			string4 : (format) ? (cnsiJS.core.regex.rgx_date[format] === undefined) ? undefined : "" : ""
		});

		if (err.back) {
			var str = String(string);
			var result = false, patternMatched;
			for (var i in cnsiJS.core.regex.rgx_date) {
				var pattern = cnsiJS.core.regex.rgx_date[format || i];
				if (!result && str.match(pattern)) {
					patternMatched = i;
					result = true;
					break;
				}
			}
			if (result) {
				var year = cnsiJS.core.date.format(str, "yyyy/mm/dd"), ndate = new Date(year), leapok = (Number(ndate.getFullYear()) % 4);
				var str = cnsiJS.core.date.format(str, "mm/dd/yyyy");
				if (str.match(/^(02|2)\/(29|30|31)/) && leapok) {
					result = false;
				}
				if (str.match(/^((0)2|(0)6|(0)4|(0)9|11)\/(31)/)) {
					result = false;
				}
			}
			return result;
		}
	};

	/**
	 @method dateRange
	 @param {String} dateFrom
	 @param {String} dateTo
	 @param {Boolean} acceptSameDay
	 @return {Boolean} result (true|false)
	 **/
	library.dateRange = function(dateFrom, dateTo, acceptSameDay) {
		var err = cnsiJS.core.util.throwError({
			string1 : dateFrom,
			string2 : dateTo,
			string5 : (library.isDate(dateFrom, "mm/dd/yyyy")) ? "" : undefined,
			string6 : (library.isDate(dateTo, "mm/dd/yyyy")) ? "" : undefined
		});
		if (err.back) {
			var result = true;
			var _dateFrom = new Date(cnsiJS.core.date.format(dateFrom, "yyyy/mm/dd"));
			var _dateTo = new Date(cnsiJS.core.date.format(dateTo, "yyyy/mm/dd"));
			var dateFromNumber = Date.parse(_dateFrom);
			var dateToNumber = Date.parse(_dateTo);
			result = (String(acceptSameDay).match(/undefined|true/)) ? (dateToNumber > dateFromNumber || dateToNumber == dateFromNumber) : (dateToNumber > dateFromNumber);
			return result;
		}
	};
	return library;
})();
