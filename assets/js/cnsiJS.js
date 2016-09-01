var cnsiJS = new cnsiJS();
function cnsiJS() {
	var _this = this;
	_this.core = {};
	_this.core.util = {
		throwError : function(handle) {
			/**
			 @method throwError
			 @param {Object} handle
			 @return error
			 **/
			var error = {
				back : true,
				message : ""
			};
			if (handle) {
				for (var i in handle) {
					var key = i;
					if (String(key).match(/^array/)) {
						if (String( typeof handle[key]).match(/string|number|function/ig)) {
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
						if ( typeof handle[key] !== "function") {
							error.message = "Invalid Method";
							error.back = false;
							throw error.message;
						}
					}
					if (String(key).match(/^number/)) {
						if ( typeof handle[key] !== "number" || String(handle[key]).match(/[a-z]/ig)) {
							error.message = "Invalid Number";
							error.back = false;
							throw error.message;
						}
					}
					if (String(key).match(/^regex/)) {
						if (handle[key] instanceof RegExp == false) {
							error.message = "Invalid Regex";
							error.back = false;
							throw error.message;
						}
					}
					if (String(key).match(/^object/)) {
						if (handle[key] instanceof Object == false) {
							error.message = "Invalid Object";
							error.back = false;
							throw error.message;
						}
					}
					if (String(key).match(/^date/)) {
						if (handle[key] instanceof Date == false) {
							error.message = "Invalid Date Object";
							error.back = false;
							throw error.message;
						}
					}
					if (String(key).match(/^decimal/)) {
						if (String(handle[key]).match(/[a-z]/ig) || String(handle[key]).match(_this.core.regex.rgx_decimalPoint) === null) {
							error.message = "Invalid Float Number";
							error.back = false;
							throw error.message;
						}
					}
				}
			}
			return error;
		}
	}, _this.core.array = {
		sorting : function(_sortArray, order) {
			/**
			 @method sorting
			 @param {Array} _sortArray
			 @param {String} order
			 **/
			var err = _this.core.util.throwError({
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

		},
		rangeNumGenerator : function(start, end, distance) {
			/**
			 @method rangeNumGenerator
			 @param {String} start
			 @param {String} end
			 @return {Array} rangeArr
			 **/
			var rangeArr = [];
			var err = _this.core.util.throwError({
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
		},
		attach : function(array, attachArray, begin) {
			/**
			 @method attach
			 @param {Array} array
			 @param {Array} attachArray
			 @param {Number} _begin
			 @return finalArray;
			 **/
			var err = _this.core.util.throwError({
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
		},
		detach : function(array, removeArray, type, start, end) {
			/**
			 @method detach
			 @param {Array} array
			 @param {Array} removeArray
			 @param {Array} start
			 @param {Array} end
			 @return {Array} finalArray
			 **/
			var finalArray = [];
			var err = _this.core.util.throwError({
				array1 : array,
				array2 : removeArray,
				string : type || "",
				number1 : start || 0,
				number2 : end || array.length
			});
			if (err.back) {
				var rangeNum = _this.core.array.rangeNumGenerator(start || 0, end || array.length);
				for (var i in array) {
					if (rangeNum.indexOf(Number(i)) !== -1) {
						var cond = (String(type).match(/value/)) ? removeArray.indexOf(array[i]) === -1 : removeArray.indexOf(Number(i)) === -1;
						if (cond) {
							finalArray.push(array[i]);
						}
					} else {
						finalArray.push(array[i]);
					}
				}
			}
			return finalArray;
		},
		detachR : function(array, removeArray, type, start, end) {
			/**
			 @method detachR
			 @param {Array} array
			 @param {Array} removeArray
			 @param {Array} start
			 @param {Array} end
			 @param {String} type
			 @return {Array} finalArray
			 **/
			var finalArray = [];
			var err = _this.core.util.throwError({
				array1 : array,
				array2 : removeArray,
				number1 : start || 0,
				number2 : end || array.length
			});
			if (err.back) {
				var rangeNum = _this.core.array.rangeNumGenerator(start || 0, end || array.length);
				for (var i in array) {
					if (rangeNum.indexOf(Number(i)) !== -1) {
						if (removeArray.indexOf(array[i]) !== -1 && String(type).match(/value/)) {
							finalArray.push(array[i]);
						}
						if (removeArray.indexOf(Number(i)) !== -1) {
							finalArray.push(array[i]);
						}
					}
				}
			}
			return finalArray;
		},
		unique : function(array) {
			/**
			 @method unique
			 @param {Array} array
			 @return {Array} finalArray
			 **/
			var finalArray = [];
			var err = _this.core.util.throwError({
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
		},
		toString : function(array) {
			/**
			 @method toString
			 @param {Array} array
			 @return {Array} array.toString() || array
			 **/
			return ( typeof array !== "string") ? array.toString() : array;
		}
	}, _this.core.currency = {
		format : function(amount, type, fixedDecimal) {
			/**
			 @method format
			 @param {Number} amount
			 @param {String} type
			 @param {Number} fixedDecimal
			 @return {String} _amount
			 **/
			var errorObject = {
				number1 : Number(String(amount).replace(/[-]/g, "")),
				string : type,
			};
			if (String(fixedDecimal).match(/undefined/) == null) {
				errorObject.number2 = fixedDecimal;
			}
			var err = _this.core.util.throwError(errorObject);
			if (err.back) {
				var point = (String(amount).match(/\./)) ? String(amount).split(".") : [amount, "00"], space = "";
				var _amount = String(point[0]).replace(_this.core.regex.rgx_currency.format, "$1,");
				if (String(type).match(/(euro|pound)/)) {
					_amount = String(point[0]).replace(_this.core.regex.rgx_currency.format, "$1.$2,");
				}
				var pointval = (fixedDecimal !== undefined) ? String(point[1]).substr(0, fixedDecimal) : point[1];
				_amount = _amount + "." + pointval;
				_amount = (String(amount).match(/^\-/)) ? "-" + _this.core.regex.rgx_currency.symbols[type] + space + _amount.replace(/\-/, "") : _this.core.regex.rgx_currency.symbols[type] + space + _amount;
				return _amount;
			}
		}
	}, _this.core.date = {
		datetype : function(date) {
			var err = _this.core.util.throwError({
				string : date
			});
			if (err.back) {
				var _datetype = "";
				for (var i in _this.core.regex.rgx_date) {
					if (String(date).match(_this.core.regex.rgx_date[i])) {
						return i;
					}
				}
				return _datetype;
			}
		},
		dateDigitFormate : function(digits) {

			/**
			 @method dateDigitFormate
			 @param {String} digits
			 @return {String} result
			 **/
			digits = String(digits);
			var err = _this.core.util.throwError({
				string : digits
			});
			if (err.back) {
				var _digits = (Number(digits) < 10) ? "0" + digits : digits;
				return _digits;
			}
		},
		dayName : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		monthName : ["December", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"],
		currentTime : function(options) {
			/**
			 @method currentTime
			 @param {Object} options
			 @param {String} currenttime
			 **/
			var defaults = {
				join : ":",
				format : 12,
				am : " AM",
				pm : " PM",
				AMPM : true,
				seconds : false
			};
			var setting = $.extend({}, defaults, options);
			var newDate = new Date(), hh = newDate.getHours(), mm = _this.core.date.dateDigitFormate(newDate.getMinutes()), ss = _this.core.date.dateDigitFormate(newDate.getSeconds());
			hh = (String(setting.format).match(/12/)) ? _this.core.date.dateDigitFormate(((hh > 12) ? (hh - setting.format) : hh)) : hh;
			ss = (setting.seconds) ? setting.join + ss : "";
			var amPm = (newDate.getHours() < 12) ? setting.am : setting.pm, ampmString = (setting.AMPM) ? amPm : "";
			var currenttime = hh + setting.join + mm + ss + ampmString;
			return currenttime;
		},
		getWeekCount : function(year, month) {
			/**
			 @method getWeekCount
			 @param {Number} year
			 @param {Number} month
			 @param {String} week
			 **/
			var err = _this.core.util.throwError({
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
		},
		getWeekAllCount : function(year) {
			/**
			 @method getWeekAllCount
			 @param {String} year
			 @return {Object} weeks
			 **/
			var err = _this.core.util.throwError({
				number : year
			});
			if (err.back) {
				var monthStart = 0, monthEnd = 12, weeks = {};
				weeks.weekAll = weeks.isoWeekAll = weeks.totalDays = weeks.betweendays = 0;
				for (var i = monthStart; i < monthEnd; i++) {
					var getWeek = _this.core.date.getWeekCount(year, i);
					weeks.weekAll = Number(weeks.weekAll) + Number(getWeek.week);
					weeks.isoWeekAll = Number(weeks.isoWeekAll) + Number(getWeek.isoWeek);
					weeks.totalDays = Number(weeks.totalDays) + Number(getWeek.totalDays);
					var monthStr = _this.core.string.extract(_this.core.date.monthName[i], 0, 3);
					monthStr = _this.core.string.lowerCase(monthStr);
					weeks[monthStr] = getWeek;
				}
				return weeks;
			}
		},
		setDateInfo : function(obj, d) {
			/**
			 @method setDateInfo
			 @param {Object} obj
			 @param {Date Object} d
			 **/
			var err = _this.core.util.throwError({
				object : obj,
				date : d
			});
			if (err.back) {
				obj.year = (d.getFullYear());
				obj.month = (d.getMonth()) ? d.getMonth() + 1 : 12;
				obj.date = (d.getDate());
				obj.hours = (d.getHours());
				obj.minutes = (d.getMinutes());
				obj.seconds = (d.getSeconds());
				obj.milliseconds = (d.getMilliseconds());
				obj.day = d.getDay();
				obj.dayName = _this.core.date.dayName[d.getDay()];
				obj.monthName = _this.core.date.monthName[d.getMonth()];
				obj.mdy = _this.core.date.dateDigitFormate(obj.month) + "/" + _this.core.date.dateDigitFormate(obj.date) + "/" + obj.year;
				obj.ymd = obj.year + "/" + _this.core.date.dateDigitFormate(obj.month) + "/" + _this.core.date.dateDigitFormate(obj.date);
				obj.dmy = _this.core.date.dateDigitFormate(obj.date) + "/" + _this.core.date.dateDigitFormate(obj.month) + "/" + obj.year;
			}
			return obj;
		},
		betweenDays : function(from, to) {
			/**
			 @method betweenDays
			 @param {Date} from
			 @param {Date} to
			 @return {Object} betweendays
			 **/
			var err = {
				back : true
			};
			if (!_this.core.validation.isDate(from) && !_this.core.validation.isDate(to)) {
				throw ("Invalid Date");
				err.back = false;
			}
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

		},
		now : function(date) {
			/**
			 @method now
			 @return {Object} obj
			 **/
			var err = _this.core.util.throwError({
				string : date || ""
			});
			if (err.back) {
				var d = (date) ? new Date(date) : new Date(), obj = {};
				obj = _this.core.date.setDateInfo(obj, d);
				obj.fulldate = String(d);
				return obj;
			}
		},
		next : function(date) {
			/**
			 @method next
			 @return {Object} obj
			 **/
			var err = _this.core.util.throwError({
				string : date || ""
			});
			if (err.back) {
				var d = (date) ? new Date(date) : new Date(), obj = {};
				d.setFullYear(d.getFullYear(), d.getMonth(), d.getDate() + 1);
				obj = _this.core.date.setDateInfo(obj, d);
				obj.fulldate = String(d);
				return obj;
			}
		},
		previous : function(date) {
			/**
			 @method previous
			 @return {Object} obj
			 **/
			var err = _this.core.util.throwError({
				string : date || ""
			});
			if (err.back) {
				var d = (date) ? new Date(date) : new Date(), obj = {};
				d.setFullYear(d.getFullYear(), d.getMonth(), d.getDate() - 1);
				obj = _this.core.date.setDateInfo(obj, d);
				obj.fulldate = String(d);
				return obj;
			}

		},
		launch : function(year, month, date, hours, minutes, seconds, milliseconds) {
			/**
			 @method launch
			 @return {string} d
			 **/
			var err = _this.core.util.throwError({
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
				obj = this.setDateInfo(obj, d);
				var n = _this.core.date.now();
				obj.betweendays = this.betweenDays(n.mdy, obj.mdy);
				return obj;
			}
		},
		leap : function(year) {
			/**
			 @method leap
			 @param {String|Number} year
			 @return {Boolean} leapyear
			 **/
			var err = _this.core.util.throwError({
				string : year
			});
			if (err.back) {
				var newdate = new Date();
				year = (year === "current") ? newdate.getFullYear() : (year === "previous") ? newdate.getFullYear() - 1 : (year === "next") ? newdate.getFullYear() + 1 : year;
				var d = new Date(year, 2, 0), leapyear = (d.getDate() === 29) ? true : false;
				return leapyear;
			}
		},
		numberOfDays : function(year, month) {
			/**
			 @method totalDays
			 @param {String|Number} year
			 @param {String|Number} month
			 @return {String} totaldays
			 **/
			var err = _this.core.util.throwError({
				number1 : year,
				number2 : month
			});
			if (err.back) {
				var d = new Date(year, (Number(month) === 0) ? 12 : Number(month), 0), totaldays = d.getDate();
				return totaldays;
			}
		},
		dateToOneYear : function(paramdate, parammonth, paramyear) {
			/**
			 @method dateToOneYear
			 @param {String|Number} date
			 @param {String|Number} mont
			 @param {String|Number} year
			 @return {String} enddate
			 **/
			var err = _this.core.util.throwError({
				number1 : Number(paramdate) || 1,
				number2 : Number(parammonth) || 1,
				number3 : Number(paramyear) || 1
			});

			if (err.back) {
				var currentDate = new Date(), newDate = new Date(), endDate;
				currentDate.setFullYear(paramyear || currentDate.getYear(), parammonth || currentDate.getMonth(), paramdate || currentDate.getDate());
				newDate.setFullYear(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate());
				endDate = ((newDate.getMonth()) ? newDate.getMonth() : 12) + "/" + newDate.getDate() + "/" + newDate.getFullYear();
				//endDate = _this.core.date.format(endDate, "mm/dd/yyyy");
				return endDate;
			}
		},
		format : function(date, format, join) {
			/**
			 @method format
			 @param {String} date
			 @param {String} format
			 @return {String} formatDefault
			 **/
			var err = _this.core.util.throwError({
				string1 : date,
				string2 : format || "",
				string3 : (format) ? (_this.core.regex.rgx_date[format] === undefined) ? undefined : "" : "",
				string4 : join || ""
			});
			if (err.back) {
				var strdate = String(date);
				var datesplit = strdate.split(/\/|-/g);
				var datetype = _this.core.date.datetype(date);
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

		}
	}, _this.core.number = {
		minMax : function(numberArray, type) {
			/**
			 @method minMax
			 @param {Array} numberArray
			 @param {String} type ("min" or "max")
			 @return {String} _number (min or max) value
			 **/
			var err = _this.core.util.throwError({
				array : numberArray,
				string : type
			});
			if (err.back) {
				var _number = (type.match(/max/ig)) ? _this.core.array.sorting(numberArray, "dsc")[0] : _this.core.array.sorting(numberArray, "asc")[0];
				return _number;
			}
		},
		add : function(numberArray) {
			/**
			 @method add
			 @param {Array} numberArray
			 @return {String} total
			 **/
			var err = _this.core.util.throwError({
				array : numberArray
			});
			if (err.back) {
				var _numberArray = numberArray, total = 0;
				for (var i in _numberArray) {
					var err2 = _this.core.util.throwError({
						number : _numberArray[i]
					});
					if (err2.back) {
						total = total + Number(_numberArray[i]);
					}
				}
				return total;
			}
		},
		subtract : function(numberArray) {
			/**
			 @method subtract
			 @param {Array} numberArray
			 @return {String} substract
			 **/
			var err = _this.core.util.throwError({
				array : numberArray
			});
			if (err.back) {
				var _numberArray = numberArray, substracted = 0;
				for (var i in _numberArray) {
					var err2 = _this.core.util.throwError({
						number : _numberArray[i]
					});
					if (err2.back) {
						substracted = Number(_numberArray[i]) - substracted;
					}
				}
				return substracted;
			}
		},
		multiplication : function(numberArray) {
			/**
			 @method multiplication
			 @param {Array} numberArray
			 @return {String} multiplied
			 **/
			var err = _this.core.util.throwError({
				array : numberArray
			});
			if (err.back) {
				var _numberArray = numberArray, multiplied = 1;
				for (var i in _numberArray) {
					var err2 = _this.core.util.throwError({
						number : _numberArray[i]
					});
					if (err2.back) {
						multiplied = Number(_numberArray[i]) * multiplied;
					}
				}
				return multiplied;
			}
		},
		division : function(numberArray) {
			/**
			 @method division
			 @param {Array} numberArray
			 @return {String} multiplied
			 **/
			var err = _this.core.util.throwError({
				array : numberArray
			});
			if (err.back) {
				var _numberArray = numberArray, division = 1;
				for (var i in _numberArray) {
					var err2 = _this.core.util.throwError({
						number : _numberArray[i]
					});
					if (err2.back) {
						division = Number(_numberArray[i]) / division;
					}
				}
				return division;
			}
		},
		fixedDecimal : function(number, length) {
			/**
			 @method fixedDecimal
			 @param {Number} number
			 @param {Number} length
			 @return {String} _number
			 **/
			var err = _this.core.util.throwError({
				decimal : number,
				number : length
			});
			if (err.back) {
				var _number = String(number);
				_number = _number.substr(0, String(number).indexOf(".")) + "." + _number.substr(String(number).lastIndexOf(".") + 1, length);
				return _number;
			}
		}
	}, _this.core.regex = {
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

	}, _this.core.string = {
		replaceAll : function(string, match, replaceText) {
			/**
			 @method replaceAll
			 @param {String} string
			 @param {String} match
			 @param {String} replaceText || empty
			 @return {String} finalString
			 **/
			var err = _this.core.util.throwError({
				string1 : string,
				//regex : match,
				string2 : replaceText || ""
			});
			if (err.back) {
				var str = String(string);
				var pattern = ( typeof match === "object") ? match : new RegExp(match, "ig");
				var finalString = str.replace(pattern, replaceText || "");
				return finalString;
			}
		},
		lowerCase : function(string) {
			/**
			 @method lowerCase
			 @param {String} string
			 @return {String} lowercase
			 **/
			var err = _this.core.util.throwError({
				string : string
			});
			if (err.back) {
				var lowercase = string.toLowerCase();
				return lowercase;
			}
		},
		upperCase : function(string) {
			/**
			 @method upperCase
			 @param {String} string
			 @return {String} uppercase
			 **/
			var err = _this.core.util.throwError({
				string : string
			});
			if (err.back) {
				var uppercase = string.toUpperCase();
				return uppercase;
			}
		},
		firstCase : function(string) {
			/**
			 @method firstcase
			 @param {String} string
			 @return {String} finalString
			 **/
			var err = _this.core.util.throwError({
				string : string
			});
			if (err.back) {
				var str = String(string).toLowerCase();
				var strMatch = str.match(_this.core.regex.rgx_firstCase);
				var finalString = str.replace(strMatch, String(strMatch).toUpperCase());
				return finalString;
			}
		},
		startCase : function(string) {
			/**
			 @method startcase
			 @param {String} string
			 @return {String} finalString
			 **/
			var err = _this.core.util.throwError({
				string : string
			});
			if (err.back) {
				var str = String(string).toLowerCase();
				var strMatch = str.match(_this.core.regex.rgx_startCase);
				var finalString = str;
				for (var match in strMatch) {
					finalString = finalString.replace(strMatch[match], String(strMatch[match]).toUpperCase());
				}
				return finalString;
			}
		},
		wrap : function(string, wrapTxt, replace) {
			/**
			 @method wrap
			 @param {String} string
			 @param {String} wrapTxt
			 @param {String} replace
			 @return {String} finalString
			 **/
			var errorObject = {
				string1 : string,
				string2 : wrapTxt,
			};
			if (String(replace).match(/undefined/) == null) {
				if ( typeof replace === "string")
					errorObject.string3 = replace;
				else
					errorObject.regex = replace;
			}
			var err = _this.core.util.throwError(errorObject);
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
		},
		unwrap : function(string, wrapTxt, replace) {
			/**
			 @method unwrap
			 @param {String} string
			 @param {String} wrapTxt
			 @param {String} replace
			 @return {String} finalString
			 **/
			var err = _this.core.util.throwError({
				string1 : string,
				string2 : wrapTxt,
				regex : replace || ""
			});
			if (err.back) {
				var finalString = this.replaceAll(string, wrapTxt, replace || " ");
				return finalString;
			}
		},
		after : function(string, afterTxt, find) {
			/**
			 @method after
			 @param {String} string
			 @param {String} afterTxt
			 @param {String} find
			 @return {String} finalString
			 **/
			var errorObject = {
				string1 : string,
				string2 : afterTxt
			};
			if (String(find).match(/undefined/) == null) {
				if ( typeof find === "string")
					errorObject.string3 = find;
				else
					errorObject.regex = find;
			}
			var err = _this.core.util.throwError(errorObject);
			if (err.back) {
				var finalString = String(string);
				var pattern = new RegExp(find || string, "ig");
				var matched = finalString.match(pattern);
				finalString = this.replaceAll(string, find || string, (find || string) + (afterTxt || " "));
				return finalString;
			}
		},
		before : function(string, beforeTxt, find) {
			/**
			 @method before
			 @param {String} string
			 @param {String} beforeTxt
			 @param {String} find
			 @return {String} finalString
			 **/
			var errorObject = {
				string1 : string,
				string2 : beforeTxt
			};
			if (String(find).match(/undefined/) == null) {
				if ( typeof find === "string")
					errorObject.string3 = find;
				else
					errorObject.regex = find;
			}
			var err = _this.core.util.throwError(errorObject);
			if (err.back) {
				var finalString = String(string);
				var pattern = new RegExp(find || string, "ig");
				var matched = finalString.match(pattern);
				finalString = _this.core.string.replaceAll(string, find || string, (beforeTxt || " ") + (find || string));
				return finalString;
			}
		},
		find : function(string, findTxt) {
			/**
			 @method find
			 @param {String} string
			 @param {String} beforeTxt
			 @return {String} finalString
			 **/
			var errorObject = {
				string1 : string,
			};
			if (String(findTxt).match(/undefined/) == null) {
				if ( typeof findTxt === "string")
					errorObject.string3 = findTxt;
				else
					errorObject.regex = findTxt;
			}
			var err = _this.core.util.throwError(errorObject);
			if (err.back) {
				var pattern = new RegExp(findTxt || string, "ig");
				var finalString = String(string).match(pattern) || "";
				return finalString;
			}
		},
		extract : function(string, start, end) {
			/**
			 @method extract
			 @param {String} string
			 @param {String} start
			 @param {String} end
			 @return {String} finalString
			 **/
			var err = _this.core.util.throwError({
				string : string,
				number1 : start,
				number2 : end
			});
			if (err.back) {
				var finalString = String(string);
				finalString = finalString.substr(start, end);
				return finalString;
			}
		},
		comments : function(string, type) {
			/**
			 @method comments
			 @param {String} string
			 @param {String} start
			 @param {String} end
			 @return {String} finalString
			 **/
			var err = _this.core.util.throwError({
				string1 : string,
				string2 : type
			});
			if (err.back) {
				var finalString = String(string);
				var ftype = String(type);
				ftype = (ftype.match(/html/i)) ? "<!--|-->" : (ftype.match(/^line/i)) ? "//|" : (ftype.match(/multiline/i)) ? "/*|*/" : "";
				finalString = _this.core.string.wrap(finalString, ftype);
				return finalString;
			}
		},
		entity : function(string) {
			/**
			 @method entity
			 @param {String} string
			 @return {String} finalString
			 **/
			var err = _this.core.util.throwError({
				string : string
			});
			if (err.back) {
				var finalString = String(string);
				finalString = finalString.replace("<", "&lt;").replace(">", "&gt;");
				return finalString;
			}
		},
		trim : function(string, chars) {
			/**
			 @method trim
			 @param {String} string
			 @param {String} chars
			 @return {String} finalString
			 **/
			var err = _this.core.util.throwError({
				string1 : string,
				string2 : chars || " "
			});
			if (err.back) {
				var finalString = (string.match(/\s{2}/g)) ? ( string = string.replace(/^\s{0,}|(\s{0,})$/g, "").replace(/(\s){2}/g, " "), _this.core.string.trim(string, " ")) : string;
				var strsplit = String(chars || " ").split("").join("|");
				var pattern = eval("/[" + strsplit + "]{2}/g");
				var matched = finalString.match(pattern);
				for (var j in matched) {
					var fchar = String(matched[j]).split("");
					finalString = finalString.replace(String(matched[j]), String(fchar[0]));
					if (finalString.match(pattern))
						finalString = _this.core.string.trim(finalString, fchar[0]);
				}
				return finalString;
			}
		},
		tag : function(string, tagname) {
			/**
			 @method tag
			 @param {String} string
			 @param {String} tagname
			 @return {String} finalString
			 **/
			var err = _this.core.util.throwError({
				string1 : string,
				string2 : tagname
			});
			if (err.back) {
				var finalString = String(string);
				if (tagname.match("|")) {
					var tagArray = tagname.split("|");
					var endtag = _this.core.string.wrap(tagArray[0], "</|>");
					var starttag = _this.core.string.wrap(tagname.replace(/\|/g, " "), "<|>");
					finalString = _this.core.string.wrap(string, starttag + "|" + endtag);
				} else {
					finalString = _this.core.string.wrap(string, "<" + tagname + ">|</" + tagname + ">");
				}
				return finalString;
			}
		},
		join : function(obj, joiner) {
			/**
			 @method join
			 @param {Object/Array} obj
			 @return {String} finalString
			 **/
			var err = _this.core.util.throwError({
				object : obj,
				string : (joiner || "")
			});
			if (err.back) {
				var finalString = "";
				joiner = joiner || ",";
				for (var i in obj) {
					if (String( typeof obj[i]).match(/string|number/ig) == null) {
						finalString += join(obj[i], joiner) + joiner;
					} else {
						finalString += obj[i] + (joiner || ",");
					}
				}
				var pattern = _this.core.regex.rgx_escape_char;
				joiner = (joiner.match(pattern)) ? joiner.replace(pattern, "\\$1") : joiner;
				finalString = finalString.replace(finalString.match(eval("/" + ((joiner || ",") + "{0,2}") + "$/")), "");
				return finalString;
			}

		}
	}, _this.core.validation = {
		isNumber : function(string) {
			/**
			 @method isNumber
			 @param {String} string
			 @return {Boolean} true|false
			 **/
			var err = _this.core.util.throwError({
				string : string
			});
			if (err.back) {
				var str = String(string);
				str = (str.match(_this.core.regex.rgx_numeric)) ? true : false;
				return str;
			}
		},
		isSymbols : function(string) {
			/**
			 @method isSymbols
			 @param {String} string
			 @return {Boolean} true|false
			 **/
			var err = _this.core.util.throwError({
				string : string
			});
			if (err.back) {
				var str = String(string);
				str = (str.match(_this.core.regex.rgx_symbols)) ? true : false;
				return str;
			}

		},
		isAlphabets : function(string) {
			/**
			 @method isAlphabets
			 @param {String} string
			 @return {Boolean} true|false
			 **/
			var err = _this.core.util.throwError({
				string : string
			});
			if (err.back) {
				var str = String(string);
				str = (str.match(_this.core.regex.rgx_alphabet)) ? true : false;
				return str;
			}

		},
		isAlphabetsNumeric : function(string) {
			/**
			 @method isAlphabetsNumeric
			 @param {String} string
			 @return {Boolean} true|false
			 **/
			var err = _this.core.util.throwError({
				string : string
			});
			if (err.back) {
				var str = String(string);
				str = (str.match(_this.core.regex.rgx_alphabetsNumeric)) ? true : false;
				return str;
			}

		},
		isDecimal : function(string) {
			/**
			 @method isDecimal
			 @param {String} string
			 @return {Boolean} true|false
			 **/
			var err = _this.core.util.throwError({
				string : string
			});
			if (err.back) {
				var str = String(string);
				str = (str.match(_this.core.regex.rgx_decimal)) ? true : false;
				return str;
			}
		},
		isDecimalR : function(string) {
			/**
			 @method isDecimalR
			 @param {String} string
			 @return {Boolean} true|false
			 **/
			var err = _this.core.util.throwError({
				string : string
			});
			if (err.back) {
				var str = String(string);
				str = (str.match(_this.core.regex.rgx_decimalPoint)) ? true : false;
				return str;
			}
		},
		isEmail : function(string) {
			/**
			 @method isEmail
			 @param {String} string
			 @return {Boolean} true|false
			 **/
			var err = _this.core.util.throwError({
				string : string
			});
			if (err.back) {
				var str = String(string);
				str = (str.match(_this.core.regex.rgx_email)) ? true : false;
				return str;
			}

		},
		isSSN : function(string) {
			/**
			 @method isSSN
			 @param {String} string
			 @return {Boolean} result (true|false)
			 **/
			var err = _this.core.util.throwError({
				string : string
			});
			if (err.back) {
				var str = String(string).replace(/-/g, "");
				var result = false;
				if (str.match(_this.core.regex.rgx_ssn.formatNotHypen) !== null && str.match(_this.core.regex.rgx_ssn.validFormatNotHypen) !== null) {
					result = true;
				}
				return result;
			}

		},
		isDate : function(string, format) {
			/**
			 @method isDate
			 @param {String} string
			 @param {String} format
			 @return {Boolean} result (true|false)
			 **/
			format = format || "mm/dd/yyyy";
			var err = _this.core.util.throwError({
				string1 : string,
				string2 : format,
				string4 : (format) ? (_this.core.regex.rgx_date[format] === undefined) ? undefined : "" : ""
			});

			if (err.back) {
				var str = String(string);
				var result = false, patternMatched;
				for (var i in _this.core.regex.rgx_date) {
					var pattern = _this.core.regex.rgx_date[format || i];
					if (!result && str.match(pattern)) {
						patternMatched = i;
						result = true;
						break;
					}
				}
				if (result) {
					var year = _this.core.date.format(str, "yyyy/mm/dd"), ndate = new Date(year), leapok = (Number(ndate.getFullYear()) % 4);
					var str = _this.core.date.format(str, "mm/dd/yyyy");
					if (str.match(/^(02|2)\/(29|30|31)/) && leapok) {
						result = false;
					}
					if (str.match(/^((0)2|(0)6|(0)4|(0)9|11)\/(31)/)) {
						result = false;
					}
				}
				return result;
			}
		},
		dateRange : function(dateFrom, dateTo, acceptSameDay) {
			/**
			 @method dateRange
			 @param {String} dateFrom
			 @param {String} dateTo
			 @param {Boolean} acceptSameDay
			 @return {Boolean} result (true|false)
			 **/
			var err = _this.core.util.throwError({
				string1 : dateFrom,
				string2 : dateTo,
				string5 : (_this.core.validation.isDate(dateFrom, "mm/dd/yyyy")) ? "" : undefined,
				string6 : (_this.core.validation.isDate(dateTo, "mm/dd/yyyy")) ? "" : undefined
			});
			if (err.back) {
				var result = true;
				var _dateFrom = new Date(_this.core.date.format(dateFrom, "yyyy/mm/dd"));
				var _dateTo = new Date(_this.core.date.format(dateTo, "yyyy/mm/dd"));
				var dateFromNumber = Date.parse(_dateFrom);
				var dateToNumber = Date.parse(_dateTo);
				result = (String(acceptSameDay).match(/undefined|true/)) ? (dateToNumber > dateFromNumber || dateToNumber == dateFromNumber) : (dateToNumber > dateFromNumber);
				return result;
			}
		}
	};
};
function cnsiJSExample() {
	var example = {};
	example.util = [{
		casefor : "array",
		example : "cnsiJS.core.util.throwError({array : 1,});",
		result : "uncaught exception: Invalid Array",
		notes : "This error occurred the application won't run"
	}, {
		casefor : "string",
		example : "cnsiJS.core.util.throwError({string : 1,});",
		result : "uncaught exception: Invalid String",
		notes : "This error occurred the application won't run"
	}, {
		casefor : "method",
		example : "cnsiJS.core.util.throwError({method : [1],});",
		result : "uncaught exception: Invalid Method",
		notes : "This error occurred the application won't run"
	}, {
		casefor : "number",
		example : "cnsiJS.core.util.throwError({number : [1],});",
		result : "uncaught exception: Invalid Number",
		notes : "This error occurred the application won't run"
	}, {
		casefor : "regex",
		example : "cnsiJS.core.util.throwError({regex : [1],});",
		result : "uncaught exception: Invalid Regex",
		notes : "This error occurred the application won't run"
	}, {
		casefor : "object",
		example : "cnsiJS.core.util.throwError({object : 'width',});",
		result : "uncaught exception: Invalid Object",
		notes : "This error occurred the application won't run"
	}, {
		casefor : "date",
		example : "cnsiJS.core.util.throwError({date : 'width',});",
		result : "uncaught exception: Invalid Object",
		notes : "This error occurred the application won't run"
	}, {
		casefor : "decimal",
		example : "cnsiJS.core.util.throwError({decimal : 500,});",
		result : "uncaught exception: Invalid decimal",
		notes : "This error occurred the application won't run"
	}], example.regex = (function() {
		var regexArray = [], regex = cnsiJS.core.regex;
		for (var i in regex) {
			var d_arrayResult = regex[i], obj = {
				casefor : i,
				example : regex[i],
				result : regex[i],
				notes : "-"
			};
			regexArray.push(obj);
		}
		return regexArray;
	})(), example.validation = [{
		casefor : "isNumber",
		example : 'cnsiJS.core.validation.isNumber("ab13")',
		result : cnsiJS.core.validation.isNumber("ab13"),
		notes : "This function will return true or false"
	}, {
		casefor : "isNumber",
		example : 'cnsiJS.core.validation.isNumber("123")',
		result : cnsiJS.core.validation.isNumber("123"),
		notes : "This function will return true or false"
	}, {
		casefor : "isSymbols",
		example : 'cnsiJS.core.validation.isSymbols("!")',
		result : cnsiJS.core.validation.isSymbols("!"),
		notes : "This function will return true or false"
	}, {
		casefor : "isSymbols",
		example : 'cnsiJS.core.validation.isSymbols("a1")',
		result : cnsiJS.core.validation.isSymbols("a1"),
		notes : "This function will return true or false"
	}, {
		casefor : "isAlphabets",
		example : 'cnsiJS.core.validation.isAlphabets("a1")',
		result : cnsiJS.core.validation.isAlphabets("a1"),
		notes : "This function will return true or false"
	}, {
		casefor : "isAlphabets",
		example : 'cnsiJS.core.validation.isAlphabets("aaa")',
		result : cnsiJS.core.validation.isAlphabets("aaa"),
		notes : "This function will return true or false"
	}, {
		casefor : "isAlphabetsNumeric",
		example : 'cnsiJS.core.validation.isAlphabetsNumeric("!")',
		result : cnsiJS.core.validation.isAlphabetsNumeric("!"),
		notes : "This function will return true or false"
	}, {
		casefor : "isAlphabetsNumeric",
		example : 'cnsiJS.core.validation.isAlphabetsNumeric("aaa1")',
		result : cnsiJS.core.validation.isAlphabetsNumeric("aaa1"),
		notes : "This function will return true or false"
	}, {
		casefor : "isDecimal",
		example : 'cnsiJS.core.validation.isDecimal("0.1")',
		result : cnsiJS.core.validation.isDecimal("0.1"),
		notes : "This function will return true or false"
	}, {
		casefor : "isDecimal",
		example : 'cnsiJS.core.validation.isDecimal("50")',
		result : cnsiJS.core.validation.isDecimal("50"),
		notes : "This function will return true or false"
	}, {
		casefor : "isDecimalR",
		example : 'cnsiJS.core.validation.isDecimalR(".1")',
		result : cnsiJS.core.validation.isDecimalR(".1"),
		notes : "This function will return true or false"
	}, {
		casefor : "isDecimalR",
		example : 'cnsiJS.core.validation.isDecimalR("50")',
		result : cnsiJS.core.validation.isDecimalR("50"),
		notes : "This function will return true or false"
	}, {
		casefor : "isEmail",
		example : 'cnsiJS.core.validation.isEmail("exmple@gmail.com")',
		result : cnsiJS.core.validation.isEmail("exmple@gmail.com"),
		notes : "This function will return true or false"
	}, {
		casefor : "isEmail",
		example : 'cnsiJS.core.validation.isEmail("exmplegmail.com")',
		result : cnsiJS.core.validation.isEmail("exmplegmail.com"),
		notes : "This function will return true or false"
	}, {
		casefor : "isSSN",
		example : 'cnsiJS.core.validation.isSSN("333-33-3333")',
		result : cnsiJS.core.validation.isSSN("333-33-3333"),
		notes : "This function will return true or false"
	}, {
		casefor : "isSSN",
		example : 'cnsiJS.core.validation.isSSN("000-45-7891")',
		result : cnsiJS.core.validation.isSSN("000-45-7891"),
		notes : "This function will return true or false"
	}, {
		casefor : "isSSN",
		example : 'cnsiJS.core.validation.isSSN("100-45-7891")',
		result : cnsiJS.core.validation.isSSN("100-45-7891"),
		notes : "This function will return true or false"
	}, {
		casefor : "isSSN",
		example : 'cnsiJS.core.validation.isSSN("121-00-7891")',
		result : cnsiJS.core.validation.isSSN("121-00-7891"),
		notes : "This function will return true or false"
	}, {
		casefor : "isSSN",
		example : 'cnsiJS.core.validation.isSSN("121-01-7891")',
		result : cnsiJS.core.validation.isSSN("121-01-7891"),
		notes : "This function will return true or false"
	}, {
		casefor : "isSSN",
		example : 'cnsiJS.core.validation.isSSN("121-01-7891")',
		result : cnsiJS.core.validation.isSSN("121-01-7891"),
		notes : "This function will return true or false"
	}, {
		casefor : "isSSN",
		example : 'cnsiJS.core.validation.isSSN("121-01-0000")',
		result : cnsiJS.core.validation.isSSN("121-01-0000"),
		notes : "This function will return true or false"
	}, {
		casefor : "isSSN",
		example : 'cnsiJS.core.validation.isSSN("121-01-0001")',
		result : cnsiJS.core.validation.isSSN("121-01-0001"),
		notes : "This function will return true or false"
	}, {
		casefor : "isSSN",
		example : 'cnsiJS.core.validation.isSSN("421-45-7891")',
		result : cnsiJS.core.validation.isSSN("421-45-7891"),
		notes : "This function will return true or false"
	}, {
		casefor : "isDate",
		example : 'cnsiJS.core.validation.isDate("11/31/2012")',
		result : cnsiJS.core.validation.isDate("11/31/2012"),
		notes : "This function will return true or false"
	}, {
		casefor : "isDate",
		example : 'cnsiJS.core.validation.isDate("11/30/2012")',
		result : cnsiJS.core.validation.isDate("11/30/2012"),
		notes : "This function will return true or false"
	}, {
		casefor : "isDate",
		example : 'cnsiJS.core.validation.isDate("30/11/2012")',
		result : cnsiJS.core.validation.isDate("30/11/2012"),
		notes : "This function will return true or false"
	}, {
		casefor : "isDate",
		example : 'cnsiJS.core.validation.isDate("30/11/2012","dd/mm/yyyy")',
		result : cnsiJS.core.validation.isDate("30/11/2012", "dd/mm/yyyy"),
		notes : "This function will return true or false"
	}, {
		casefor : "dateRange",
		example : 'cnsiJS.core.validation.dateRange("11/30/2014","12/01/2014")',
		result : cnsiJS.core.validation.dateRange("11/30/2014", "12/01/2014"),
		notes : "This function will return true or false"
	}, {
		casefor : "dateRange",
		example : 'cnsiJS.core.validation.dateRange("11/30/2014","12/30/2014")',
		result : cnsiJS.core.validation.dateRange("11/30/2014", "12/30/2014"),
		notes : "This function will return true or false"
	}, {
		casefor : "dateRange",
		example : 'cnsiJS.core.validation.dateRange("11/30/2014","11/30/2014",false)',
		result : cnsiJS.core.validation.dateRange("11/30/2014", "11/30/2014", false),
		notes : "This function will return true or false"
	}, {
		casefor : "dateRange",
		example : 'cnsiJS.core.validation.dateRange("11/30/2014","11/30/2014",true)',
		result : cnsiJS.core.validation.dateRange("11/30/2014", "11/30/2014", true),
		notes : "This function will return true or false"
	}], example.string = [{
		casefor : "replaceAll",
		example : 'cnsiJS.core.string.replaceAll("1234 5867 8415", "5", "a")',
		result : cnsiJS.core.string.replaceAll("1234 5867 8415", "5", "a"),
		notes : "Replace string 5 ,replaced string a"
	}, {
		casefor : "replaceAll",
		example : 'cnsiJS.core.string.replaceAll("asdfklfhjsfhadadasdS", "s", " ")',
		result : cnsiJS.core.string.replaceAll("asdfklfhjsfhadadasdS", "s", " "),
		notes : "Where ever 'S' or 's' strings are all replaced with space character(' ')"
	}, {
		casefor : "lowerCase",
		example : 'cnsiJS.core.string.lowerCase("JOHN DOE")',
		result : cnsiJS.core.string.lowerCase("JOHN DOE"),
		notes : "-"
	}, {
		casefor : "upperCase",
		example : 'cnsiJS.core.string.upperCase("peter rafelson")',
		result : cnsiJS.core.string.upperCase("peter rafelson"),
		notes : "-"
	}, {
		casefor : "upperCase",
		example : 'cnsiJS.core.string.upperCase("peter rafelson")',
		result : cnsiJS.core.string.upperCase("peter rafelson"),
		notes : "-"
	}, {
		casefor : "firstCase",
		example : 'cnsiJS.core.string.firstCase("peter rafelson")',
		result : cnsiJS.core.string.firstCase("peter rafelson"),
		notes : "-"
	}, {
		casefor : "startCase",
		example : 'cnsiJS.core.string.startCase("peter rafelson")',
		result : cnsiJS.core.string.startCase("peter rafelson"),
		notes : "-"
	}, {
		casefor : "wrap",
		example : 'cnsiJS.core.string.wrap("peter rafelson", "|")',
		result : cnsiJS.core.string.wrap("peter rafelson", '"|"'),
		notes : "-"
	}, {
		casefor : "wrap",
		example : 'cnsiJS.core.string.wrap("peter rafelson", String(<span class="label-value">|</span>), "peter")',
		result : cnsiJS.core.string.wrap("peter rafelson", '<span class="label-value">|</span>', "peter"),
		notes : "-"
	}, {
		casefor : "unwrap",
		example : 'cnsiJS.core.string.unwrap(' + cnsiJS.core.string.wrap("peter rafelson", "<span class=\'label-value\'>|</span>", "peter") + ', "<span class=\'label-value\'>|</span>")',
		result : cnsiJS.core.string.wrap(cnsiJS.core.string.wrap("peter rafelson", "<span class='label-value'>|</span>", "peter"), "<span class='label-value'>|</span>"),
		notes : "The exact tags required."
	}, {
		casefor : "after",
		example : 'cnsiJS.core.string.after("abcdef", "g")',
		result : cnsiJS.core.string.after("abcdef", "g"),
		notes : "-"
	}, {
		casefor : "after",
		example : 'cnsiJS.core.string.after("abdef", "c","b")',
		result : cnsiJS.core.string.after("abdef", "c", "b"),
		notes : "-"
	}, {
		casefor : "before",
		example : 'cnsiJS.core.string.before("bcdef", "a")',
		result : cnsiJS.core.string.before("bcdef", "a"),
		notes : "-"
	}, {
		casefor : "before",
		example : 'cnsiJS.core.string.before("abdef", "c", "d")',
		result : cnsiJS.core.string.before("abdef", "c", "d"),
		notes : "-"
	}, {
		casefor : "find",
		example : 'cnsiJS.core.string.find("ability", "i")',
		result : cnsiJS.core.string.find("ability", "i"),
		notes : "-"
	}, {
		casefor : "extract",
		example : 'cnsiJS.core.string.extract("lorem ipsum", 3, 7)',
		result : cnsiJS.core.string.extract("lorem ipsum", 3, 7),
		notes : "-"
	}, {
		casefor : "comments",
		example : 'cnsiJS.core.string.comments("This is your html comments", "html")',
		result : cnsiJS.core.string.comments("This is your html comments", "html"),
		notes : "-"
	}, {
		casefor : "comments",
		example : 'cnsiJS.core.string.comments("This is your single line comments", "line")',
		result : cnsiJS.core.string.comments("This is your single line comments", "line"),
		notes : "-"
	}, {
		casefor : "comments",
		example : 'cnsiJS.core.string.comments("This is your multiline comments", "multiline")',
		result : cnsiJS.core.string.comments("This is your multiline comments", "multiline"),
		notes : "-"
	}, {
		casefor : "entity",
		example : 'cnsiJS.core.string.entity("<This is your comments>")',
		result : cnsiJS.core.string.entity("<This is your comments>"),
		notes : "-"
	}, {
		casefor : "entity",
		example : 'cnsiJS.core.string.entity("<This is your comments>")',
		result : cnsiJS.core.string.entity("<This is your comments>"),
		notes : "-"
	}, {
		casefor : "trim",
		example : 'cnsiJS.core.string.trim(" Peter   Rafeeeelson  ")',
		result : cnsiJS.core.string.trim(" Peter   Rafeeeelson  "),
		notes : "-"
	}, {
		casefor : "trim",
		example : 'cnsiJS.core.string.trim(" Peter   Rafeeeelson  ", "e")',
		result : cnsiJS.core.string.trim(" Peter   Rafeeeelson  ", "e"),
		notes : "-"
	}], example.number = [{
		casefor : "minMax",
		example : 'cnsiJS.core.string.minMax([1,12,35,40,234],"min")',
		result : cnsiJS.core.number.minMax([1, 12, 35, 40, 234], "min"),
		notes : "This case return value is minimum"
	}, {
		casefor : "minMax",
		example : 'cnsiJS.core.number.minMax([1121,2.5,87,400,234],"max")',
		result : cnsiJS.core.number.minMax([1121, 2.5, 87, 400, 234], "max"),
		notes : "This case return value is maximum"
	}, {
		casefor : "add",
		example : 'cnsiJS.core.number.add([1121,2.5,87,400,234])',
		result : cnsiJS.core.number.add([1121, 2.5, 87, 400, 234]),
		notes : "This case return value is maximum"
	}, {
		casefor : "subtract",
		example : 'cnsiJS.core.number.subtract([1121,2.5,87,400,234])',
		result : cnsiJS.core.number.subtract([1121, 2.5, 87, 400, 234]),
		notes : "-"
	}, {
		casefor : "multiplication",
		example : 'cnsiJS.core.number.multiplication([2,4,6])',
		result : cnsiJS.core.number.multiplication([2, 4, 6]),
		notes : "-"
	}, {
		casefor : "division",
		example : 'cnsiJS.core.number.division([2,4,6])',
		result : cnsiJS.core.number.division([2, 4, 6]),
		notes : "-"
	}, {
		casefor : "fixedDecimal",
		example : 'cnsiJS.core.number.fixedDecimal(2222.5555,2)',
		result : cnsiJS.core.number.fixedDecimal(2222.5555, 2),
		notes : "-"
	}], example.date = [{
		casefor : "datetype",
		example : 'cnsiJS.core.date.datetype("11/05/2014")',
		result : cnsiJS.core.date.datetype("11/05/2014"),
		notes : "-"
	}, {
		casefor : "dateDigitFormate",
		example : 'cnsiJS.core.date.dateDigitFormate("1")',
		result : cnsiJS.core.date.dateDigitFormate("1"),
		notes : "-"
	}, {
		casefor : "dateDigitFormate",
		example : 'cnsiJS.core.date.dateDigitFormate("1")',
		result : cnsiJS.core.date.dateDigitFormate("1"),
		notes : "If you sent value less than 10, then zero will add begining of your value."
	}, {
		casefor : "currentTime",
		example : 'cnsiJS.core.date.currentTime({AMPM : false,seconds : true,format : 24})',
		result : cnsiJS.core.date.currentTime({
			AMPM : false,
			seconds : true,
			format : 24
		}),
		notes : "-"
	}, {
		casefor : "getWeekCount",
		example : 'cnsiJS.core.date.getWeekCount(new Date().getFullYear() , new Date().getMonth())',
		result : cnsiJS.core.date.getWeekCount(new Date().getFullYear(), new Date().getMonth()),
		notes : "-"
	}, {
		casefor : "getWeekAllCount",
		example : 'cnsiJS.core.date.getWeekAllCount(new Date().getFullYear())',
		result : cnsiJS.core.date.getWeekAllCount(new Date().getFullYear()),
		notes : "-"
	}, {
		casefor : "setDateInfo",
		example : 'var getDateInfo = {}; \n cnsiJS.core.date.setDateInfo({},new Date("2014,11,18"))',
		result : cnsiJS.core.date.setDateInfo({}, new Date("2014,11,18")),
		notes : "-"
	}, {
		casefor : "betweenDays",
		example : 'cnsiJS.core.date.betweenDays("11/18/2014","11/18/2015")',
		result : cnsiJS.core.date.betweenDays("11/18/2014","11/18/2015"),
		notes : "-"
	}, {
		casefor : "now",
		example : 'cnsiJS.core.date.now("2014,12,18")',
		result : cnsiJS.core.date.now("2014,12,18"),
		notes : "If you not send custom date value, it will send system current date information."
	}, {
		casefor : "previous",
		example : 'cnsiJS.core.date.previous("2014,12,18")',
		result : cnsiJS.core.date.previous("2014,12,18"),
		notes : "If you not send custom date value, it will send yesterday date information."
	}, {
		casefor : "next",
		example : 'cnsiJS.core.date.next("2014,12,18")',
		result : cnsiJS.core.date.next("2014,12,18"),
		notes : "If you not send custom date value, it will send tomorrow date information."
	}, {
		casefor : "launch",
		example : 'cnsiJS.core.date.launch(2015,1,18)',
		result : cnsiJS.core.date.launch(2015, 1, 18),
		notes : ""
	}, {
		casefor : "leap",
		example : 'cnsiJS.core.date.leap("2015")',
		result : cnsiJS.core.date.leap("2015"),
		notes : "It will return true or false."
	}, {
		casefor : "numberOfDays",
		example : 'cnsiJS.core.date.numberOfDays(2014,11)',
		result : cnsiJS.core.date.numberOfDays(2014, 11),
		notes : "-"
	}, {
		casefor : "dateToOneYear",
		example : 'cnsiJS.core.date.dateToOneYear(18,11,2014)',
		result : cnsiJS.core.date.dateToOneYear(18, 11, 2014),
		notes : "The param value is dd,mm & yyyy"
	}, {
		casefor : "format",
		example : 'cnsiJS.core.date.format("18/11/2014","mm/dd/yyyy")',
		result : cnsiJS.core.date.format("18/11/2014", "mm/dd/yyyy"),
		notes : "-"
	}, {
		casefor : "format",
		example : 'cnsiJS.core.date.format("18/11/2014","dd/mm/yyyy")',
		result : cnsiJS.core.date.format("18/11/2014", "dd/mm/yyyy"),
		notes : "-"
	}, {
		casefor : "format",
		example : 'cnsiJS.core.date.format("18/11/2014","yyyy/mm/dd")',
		result : cnsiJS.core.date.format("18/11/2014", "yyyy/mm/dd"),
		notes : "-"
	}, {
		casefor : "format",
		example : 'cnsiJS.core.date.format("18/11/2014","yyyy/dd/mm")',
		result : cnsiJS.core.date.format("18/11/2014", "yyyy/dd/mm"),
		notes : "-"
	}, {
		casefor : "format",
		example : 'cnsiJS.core.date.format("18/11/2014","dd/yyyy/mm")',
		result : cnsiJS.core.date.format("18/11/2014", "dd/yyyy/mm"),
		notes : "-"
	}];
	for (var i in cnsiJS.core.date.dayName) {
		var obj = {
			casefor : "dayName",
			example : 'cnsiJS.core.date.dayName[' + i + ']',
			result : cnsiJS.core.date.dayName[i],
			notes : ""
		};
		example.date.push(obj);
	};
	for (var i in cnsiJS.core.date.monthName) {
		var obj = {
			casefor : "monthName",
			example : 'cnsiJS.core.date.monthName[' + i + ']',
			result : cnsiJS.core.date.monthName[i],
			notes : ""
		};
		example.date.push(obj);
	}
	example.array = [{
		casefor : "sorting",
		example : 'cnsiJS.core.array.sorting([2, 3, 534, "64", "75"], "asc")',
		result : cnsiJS.core.array.sorting([2, 3, 534, "64", "75"], "asc"),
		notes : "-"
	}, {
		casefor : "sorting",
		example : 'cnsiJS.core.array.sorting([2, 3, 534, "64", "75"], "dsc")',
		result : cnsiJS.core.array.sorting([2, 3, 534, "64", "75"], "dsc"),
		notes : "-"
	}, {
		casefor : "sorting",
		example : 'cnsiJS.core.array.sorting([2, 3, 534, "john doe", "64", "Peter Rafelson", "75"], "numberAlpha")',
		result : cnsiJS.core.array.sorting([2, 3, 534, "john doe", "64", "Peter Rafelson", "75"], "numberAlpha"),
		notes : "-"
	}, {
		casefor : "sorting",
		example : 'cnsiJS.core.array.sorting([2, 3, 534, "john doe", "64", "Peter Rafelson", "75"], "alphaNumber")',
		result : cnsiJS.core.array.sorting([2, 3, 534, "john doe", "64", "Peter Rafelson", "75"], "alphaNumber"),
		notes : "-"
	}, {
		casefor : "rangeNumGenerator",
		example : 'cnsiJS.core.array.rangeNumGenerator(5, 15)',
		result : cnsiJS.core.array.rangeNumGenerator(5, 15),
		notes : "-"
	}, {
		casefor : "attach",
		example : 'cnsiJS.core.array.attach([1, 2, 3, 7, 8, 9], [4, 5, 6])',
		result : cnsiJS.core.array.attach([1, 2, 3, 7, 8, 9], [4, 5, 6]),
		notes : "-"
	}, {
		casefor : "attach",
		example : 'cnsiJS.core.array.attach([1, 2, 3, 7, 8, 9], [4, 5, 6], 3)',
		result : cnsiJS.core.array.attach([1, 2, 3, 7, 8, 9], [4, 5, 6], 3),
		notes : "-"
	}, {
		casefor : "detach",
		example : 'cnsiJS.core.array.detach([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 6])',
		result : cnsiJS.core.array.detach([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 6]),
		notes : "The second param is which index you want remove."
	}, {
		casefor : "detachR",
		example : 'cnsiJS.core.array.detachR([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 5, 6])',
		result : cnsiJS.core.array.detachR([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 5, 6]),
		notes : "This detachR method will retrun which index you mentioned."
	}, {
		casefor : "unique",
		example : 'cnsiJS.core.array.unique([1, 1, 2, "john doe", "john doe"])',
		result : cnsiJS.core.array.unique([1, 1, 2, "john doe", "john doe"]),
		notes : "-"
	}, {
		casefor : "toString",
		example : 'cnsiJS.core.array.toString([1, 1, 2, "john doe", "john doe"])',
		result : cnsiJS.core.array.toString([1, 1, 2, "john doe", "john doe"]),
		notes : "-"
	}], example.currency = [{
		casefor : "format",
		example : 'cnsiJS.core.currency.format(53565.653,"dollar",2)',
		result : cnsiJS.core.currency.format(5356565.653, "dollar", 2),
		notes : "-"
	}, {
		casefor : "format",
		example : 'cnsiJS.core.currency.format(5356565.653,"euro",2)',
		result : cnsiJS.core.currency.format(5356565.653, "euro", 2),
		notes : "-"
	}, {
		casefor : "format",
		example : 'cnsiJS.core.currency.format(5356565.653,"pound",2)',
		result : cnsiJS.core.currency.format(5356565.653, "pound", 2),
		notes : "-"
	}];
	this.example = example;
};