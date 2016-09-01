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
			var status = true, focusfield = fields.field, msg = "", fieldFormId = fields.field.closest("form").attr("id"), empty = true, validateCase = 2;
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
											msg = fields.opt.messages.required;
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
						var pattern = [/(\d{3})(\d{3})(\d{3})/, /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/];
						if (phoneType.match(pattern[0])) {
							if (phonefieldVal.match(pattern[0]) == null) {
								msg = fields.opt.messages.phonenumber;
								validateCase = 3;
								status = false;
								break;
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
						var currentdate = (now.month + 1) + "/" + now.date + "/" + now.year;
						var fieldVal = gb.date.format(String(fields.field.val()), mmddyyyy);

						if (status && String(vType).match(/^date\[end/)) {
							var endval = String(vType).replace(/date\[end|[\[\]]/g, "");
							if (String(endval).match(/^startdateto1year$/ig)) {
								var relationId = $(fields.field.attr("data-validate-relation"));
								if (relationId.size() && gb.validation.isDate(relationId.val(), mmddyyyy) && gb.validation.isDate(fields.field.val(), mmddyyyy)) {
									var datesplit = String(relationId.val()).split("/");
									var oneyeardate = gb.date.dateToOneYear(datesplit[1], Number(datesplit[0]) - 1, datesplit[2]);
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

						if (String(datefrom).match(patternempty) || String(dateto).match(patternempty)) {
							var field = (String(datefrom).match(patternempty)) ? elefrom : eleto;
							//methods.validateField(field);
							unvalidate = true;
							break;
						}
						if (!gb.validation.isDate(datefrom, mmddyyyy)) {
							focusfield = elefrom;
							msg = fields.opt.messages.date;
							validateCase = 3;
							status = false;
							break;
						}

						if (status && !gb.validation.isDate(dateto, mmddyyyy)) {
							focusfield = eleto;
							msg = fields.opt.messages.date;
							validateCase = 3;
							status = false;
							break;
						}

						if (status && String(datefrom).match(/^$|undefined/) == null && String(dateto).match(/^$|undefined/) == null) {
							var valid = gb.validation.dateRange(datefrom, dateto);
							if (!valid) {
								//focusfield = $(elefrom);
								msg = fields.opt.messages.daterange;
								validateCase = 3;
								status = false;
								break;
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
							msg = fields.opt.messages.charlen;
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
			if (String(fields.groupcheck).match(/undefined|false/))
				if (!status && !unvalidate) {
					methods.setFocus(focusfield);
					var emptypattern = /^$|^( ){0,}$|undefined/;
					var fieldMessage = String(focusfield.attr("data-validate-message")), errorMessage = (fieldMessage.match(/|/)) ? fieldMessage.split("|") : [fieldMessage];
					var condMsg = (String(focusfield.attr("data-validate-message")).match(emptypattern)) ? msg : errorMessage[validateCnt];
					msg = (String(condMsg).match(emptypattern)) ? msg : condMsg;
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
					placement.after(errHtml);
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
				errElement.slideUp("medium", function() {
					$(this).remove();
				});
			});
		},
		errorMessageHide : function(field) {
			var loc_field = field || $(".error-msg:visible");
			var errElement = (loc_field.hasClass(".error-msg")) ? loc_field : $(".error-msg[data-error-msg-id='" + loc_field.attr("name") + "']");
			errElement.slideUp("fast", function() {
				$(this).remove();
			});
		},
		removeError : function(id) {
			methods.errorMessageHide(id);
			return status;
		}
	};

	$.fn.formValidate = function(options) {
		if (options == "validate") {
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
			"minchar" : "This field is minimum character length is required.",
			"maxchar" : "This field is maximum character length is required.",
			"min" : "This field is minimum value is required.",
			"max" : "This field is maximum value is required.",
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
			"decimalLen" : "Please enter the lenth decimal only.",
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

