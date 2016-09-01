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
			}else {
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

/*********** Form validation starts **********/
var gb = gb || {}, core = core || cnsiJS.core, patternempty = /^$|undefined|null/, mmddyyyy = "mm/dd/yyyy";
for (var i in core)
gb[i] = core[i];
! function($) {
	var methods = {
		init : function(e, a) {
			var t = $(e);
			t.el = t, t.opt = $.extend({}, $.fn.formValidate.setting, a), this[t.attr("id")] &&
			delete this[t.attr("id")], this[t.attr("id")] = {}, this[t.attr("id")].self = t, this.gatheringField(t)
		},
		gatheringField : function(e) {
			var a = e, t = [], i = {}, s = {}, d = 0;
			$.each($("input , select , textarea", a), function(e, l) {
				var r = $(l), n = {};
				if (String(r.attr("type")).match(/text|password/) && r.attr("autocomplete", "off"),
				void 0 != r.data("validate")) {
					if (n.field = $(r, a), n.id = r.attr("id"), n.formId = r.attr("id"), n.opt = a.opt, n.validateType = r.data("validate"), n.validateMsg = r.data("validate-message"), n.fieldNum = 0 != d ? d + 1 : 0, n.fieldtype = r.attr("type") || "", n.validateCondition = r.data("validate-condition") || "", n.form = a, n.formId = a.attr("id"), "radio" != r.attr("type") && (n.fieldname = n.field.attr("name")), "checkbox" != r.attr("type") && (n.fieldname = n.field.attr("name")),
					void 0 != r.data("validate-group") && (n.validateGroup = r.data("validate-group"), i[n.validateGroup] = i[n.validateGroup] || [], i[n.validateGroup].push(n)), String(r.data("validate")).match(/daterange\[/g)) {
						var f = $("[data-validate^='" + r.data("validate") + "']");
						n.daterange = r.data("validate"), s[n.daterange] = s[n.daterange] || {}, s[n.daterange].ele = n, s[n.daterange].ids = f
					}
					t.push(n)
				}
			}), this[a.attr("id")].self = {}, this[a.attr("id")].self.fields = t, this[a.attr("id")].self.groupField = i, this[a.attr("id")].self.daterange = s, this[a.attr("id")].self.targetid = a.attr("id"), $.each(t, function(e, t) {
				t.field.on("blur", function() {
					var e = $(this);
					(null == String(e.val()).match(/select/i) || null == String(e.val()).match(gb.regex.rgx_emptystrings) || String(e.attr("type")).match(/(radio|checkbox)/g) && !$("[name='" + focusfield.attr("name") + "']").is(":checked")) && ( status = methods.fieldvalidate([t], a.attr("id")), "true" == status && methods.errorMessageHide(e))
				})
			})
		},
		removeValidate : function(e) {
			var a = this[e.closest("form").attr("id")];
			a && ($.each(a.self.fields, function(e, a) {
				a.field.off("blur")
			}),
			delete this[e.closest("form").attr("id")])
		},
		validate : function(e) {
			if (!String(e).match(patternempty) && !String(this[e.attr("id")]).match(patternempty)) {
				$(".error-msg", e).remove(), methods.unvalidate = !0;
				var a = this[e.attr("id")].self.fields, t = methods.fieldvalidate(a, e.attr("id"));
				return t && methods.errorMessageHide(), methods.unvalidate = !1, t
			}
		},
		validateField : function(e) {
			var a, t = this[e.closest("form").attr("id")].self.fields;
			for (a in t)
			if (t[a].field.attr("id") == e.attr("id")) {
				var i = methods.fieldvalidate([t[a]], e.closest("form").attr("id"));
				i && methods.errorMessageHide(t[a].field);
				break
			}
			return i
		},
		fieldvalidate : function(e, a) {
			var t = this[a].self.groupField, i = (this[a].self.daterange, !0), s = !0;
			for (var d in e)
			if ( s = !0, e[d].self = this[a].self,
			void 0 != e[d].validateGroup) {
				var l = 0;
				for (var r in t[e[d].validateGroup]) {
					var n = t[e[d].validateGroup][r];
					if (null == String(n.field.val()).match(gb.regex.rgx_emptystrings) && (n.groupcheck = !0, i = methods.validateType(n), i && s)) {
						l += 1, s = !1;
						for (var f in t[e[d].validateGroup]) {
							var m = t[e[d].validateGroup][f];
							if (m.id != n.id && null == String(m.fieldtype).match(/radio|select/gi)) {
								m.avoidCase = "required", i = methods.validateType(m), i || ( l = 0);
								break
							}
							delete m.avoidCase, methods.errorMessageHide(m.field)
						}
						break
					}
				}
				if (0 != l) {
					if (!i)
						break;
					$("[data-validate-group='" + e[d].validateGroup + "']").each(function() {
						var e = $(this);
						methods.errorMessageHide(e)
					}), d++
				} else if (e[d].groupcheck = !1, i = methods.validateType(e[d]), !i && s) {
					s = !1;
					break
				}
			} else if (e[d].field.is(":visible") ? i = methods.validateType(e[d]) : d++, !i && s) {
				s = !1;
				break
			}
			return i
		},
		validateType : function(fields) {
			var status = !0, focusfield = fields.field, msg = "", fieldFormId = fields.field.closest("form").attr("id"), empty = !0, validateCase = 2;
			fields.validateType = focusfield.attr("data-validate");
			var validateType = fields.validateType.match(/|/) ? fields.validateType.split("|") : [fields.validateType], validateCnt = 0, changeValidateCnt = 0, unvalidate = !1;
			String(fields.field.val()).match(gb.regex.rgx_emptystrings) && ( empty = !1);
			var cond1 = "" == fields.validateCondition, cond2 = fields.validateType.match(/required/g);
			if (String(fields.avoidCase).match(/^$|undefined/) && cond1 && cond2 && String(fields.field.val()).match(gb.regex.rgx_emptystrings) && ( msg = fields.opt.messages.required, validateCase = 1, status = !1, String(methods.unvalidate).match(/^$|undefined|false/) && ( unvalidate = !0)), status)
				for (var i in validateType) {
					var vType = String(validateType[i]);
					if ("" != fields.validateCondition && (String(fields.field.attr("type")).match(/(radio|checkbox)/g) && !$("[name='" + fields.fieldname + "']").props("checked") || !empty && null == String(fields.field.attr("type")).match(/(radio|checkbox)/i))) {
						var validateConditionFields = fields.validateCondition.match(/\],(or|and)/) ? fields.validateCondition.split(/\],(or|and)/) : [fields.validateCondition];
						for (var j in validateConditionFields) {
							var or_cond = String(validateConditionFields[j]).match(/or/) ? !0 : !1, vcfFields = String(validateConditionFields[j]).replace(/(or|and)\[|\]$/g, "");
							vcfFields = vcfFields.match(/,/) ? vcfFields.split(",") : [vcfFields];
							var kfieldCount = 0;
							for (var k in vcfFields) {
								var kfield = $(vcfFields[k]);
								if ("text" == kfield.attr("type") && status && "" != $(vcfFields[k] + "[type='text']").val() && ( msg = fields.opt.messages.required, kfieldCount++, or_cond))
									break;
								if (String(kfield.attr("type")).match(/(radio|checkbox)/g) && (status && $(vcfFields[k] + "[type='radio']:checked").size() || $(vcfFields[k] + "[type='checkbox']:checked").size()) && ( msg = fields.opt.messages.required, kfieldCount++, or_cond))
									break;
								if ($("select" + vcfFields[k]).size() && "" != String($("select" + vcfFields[k]).val()) && " " != String($("select" + vcfFields[k]).val()) && null == String($("select" + vcfFields[k]).val()).match(/select/i) && ( msg = fields.opt.messages.required, kfieldCount++, or_cond))
									break
							}
							if (or_cond && 0 != kfieldCount) {
								status = !1;
								break
							}
							if (!or_cond && kfieldCount == vcfFields.length) {
								status = !1;
								break
							}
						}
					}
					if (status && "required" == vType && fields.fieldtype.match(/^(radio)$/) && "" == fields.validateCondition && !$("[name='" + fields.fieldname + "']:checked").size()) {
						msg = fields.opt.messages.required, validateCase = 1, status = !1;
						break
					}
					if (status && "required" == vType && fields.fieldtype.match(/^(checkbox)$/) && "" == fields.validateCondition && !$("[name='" + fields.fieldname + "']").is(":checked") && !$("[data-validate-group='" + fields.validateGroup + "']:checked").size()) {
						msg = fields.opt.messages.required, validateCase = 1, status = !1;
						break
					}
					if (status && "required" == vType && String(fields.field.val()).match(gb.regex.rgx_emptystrings) && String(fields.avoidCase).match(/^$|undefined/)) {
						msg = fields.opt.messages.required, validateCase = 1, status = !1, String(methods.unvalidate).match(/^$|undefined|false/) && ( unvalidate = !0);
						break
					}
					if (status && "nospace" == vType && String(fields.field.val()).match(/\s|\t|\n/)) {
						msg = fields.opt.messages.nospace, validateCase = 1, status = !1;
						break
					}
					if (status && empty && "alphabetsOnly" == vType && null == String(fields.field.val()).match(gb.regex.rgx_alphabetSpace)) {
						msg = fields.opt.messages.alphabetsOnly, validateCase = 3, status = !1;
						break
					}
					if (status && empty && "numberOnly" == vType && null == String(fields.field.val()).match(gb.regex.rgx_numeric)) {
						msg = fields.opt.messages.numbersOnly, validateCase = 3, status = !1;
						break
					}
					if (status && empty && "numbersOnly" == vType && null == String(fields.field.val()).match(gb.regex.rgx_numericSpace)) {
						msg = fields.opt.messages.numbersOnly, validateCase = 3, status = !1;
						break
					}
					if (status && empty && "alphabetsSpaceOnly" == vType && null == String(fields.field.val()).match(gb.regex.rgx_alphabetSpace)) {
						msg = fields.opt.messages.alphabetsOnly, validateCase = 3, status = !1;
						break
					}
					if (status && empty && "numbersSpaceOnly" == vType && null == String(fields.field.val()).match(gb.regex.rgx_numericSpace)) {
						msg = fields.opt.messages.numbersOnly, validateCase = 3, status = !1;
						break
					}
					if (status && empty && vType.match(/numbersSpecialOnly/g)) {
						msg = fields.opt.messages.numbersSpecialOnly;
						var pattern = eval("/^((?![a-z]).)*$|^[0-9?]{0,}$/");
						if (null == String(fields.field.val()).match(pattern)) {
							validateCase = 3, status = !1;
							break
						}
					}
					if (status && empty && vType.match(/alphabetsSpecialOnly/g)) {
						msg = fields.opt.messages.alphabetsSpecialOnly;
						var pattern = eval("/^((?![0-9]).)*$|^[a-zA-Z?]{0,}$/");
						if (null == String(fields.field.val()).match(pattern)) {
							validateCase = 3, status = !1;
							break
						}
					}
					if (status && empty && "alphabetsNumbersOnly" == vType && null == String(fields.field.val()).match(gb.regex.rgx_alphabetsNumeric)) {
						msg = fields.opt.messages.alphabetsNumbersOnly, validateCase = 3, status = !1;
						break
					}
					if (status && empty && "alphabetsNumbersSpaceOnly" == vType && null == String(fields.field.val()).match(gb.regex.rgx_alphabetsNumericSpace)) {
						msg = fields.opt.messages.alphabetsNumbersSpaceOnly, validateCase = 3, status = !1;
						break
					}
					if (status && empty && "numberDecimalOnly" == vType && !gb.validation.isDecimal(fields.field.val())) {
						msg = fields.opt.messages.numberDecimalOnly, validateCase = 3, status = !1;
						break
					}
					if (status && empty && vType.match(/^decimalLen\[/g) && gb.validation.isDecimalR(fields.field.val())) {
						var decimalLen = vType.replace(/decimalLen\[|\]/g, ""), fieldLen = String(fields.field.val()).replace(/[0-9]{0,}\./, "");
						if (fieldLen.length > decimalLen) {
							msg = fields.opt.messages.decimalLen.replace(/length/, decimalLen), validateCase = 3, status = !1;
							break
						}
					}
					if (status && empty && "email" == vType && !gb.validation.isEmail(String(fields.field.val()))) {
						msg = fields.opt.messages.email, validateCase = 3, status = !1;
						break
					}
					if (status && empty && String(vType).match(/phonenumber\[/)) {
						var phoneType = String(vType).replace(/[a-zA-Z]|[\[\]]/g, ""), phonefieldVal = String(fields.field.val()), pattern = [/(\d{3})(\d{3})(\d{3})/, /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/];
						if (phoneType.match(pattern[0]) && null == phonefieldVal.match(pattern[0])) {
							msg = fields.opt.messages.phonenumber, validateCase = 3, status = !1;
							break
						}
					}
					if (status && empty && String(vType).match(/datetime\[/i)) {
						var datetype = String(vType), dateId = String(datetype.replace(/future|starttime|endtime|datetime|[\[\]]/g, "")).split(","), dateEle = $(dateId[0]), startfield = $(dateId[1]), endfield = $(dateId[2]), focusfield = fields.field;
						if (dateEle.size() && startfield.size() && endfield.size()) {
							var formatTime24h = function(e) {
								var a, t = Number(e.match(/^(\d+)/)[1]), i = Number(e.match(/:(\d+)/)[1]), s = e.match(/\s(.*)$/)[1];
								"PM" == s && 12 > t && (t += 12), "AM" == s && 12 == t && (t -= 12);
								var d = t.toString(), l = i.toString();
								return 10 > d && ( d = "0" + d), 10 > l && ( l = "0" + l), a = d + ":" + l
							}, timearrange = function(e, a) {
								var t = formatTime24h(a), i = String(t.replace(/[\s]/, "")).split(":"), s = Number(i[0]), d = Number(i[1]), l = String(gb.date.format(e, "yyyy/mm/dd")), r = l.split("/"), n = new Date(r[0], Number(r[1]) - 1, r[2], s, d);
								return n
							};
							if (null == String(dateEle.val()).match(patternempty) && !gb.validation.isDate(dateEle.val())) {
								msg = fields.opt.messages.date, validateCase = 3, status = !1;
								break
							}
							var nowdate = gb.date.now(), l_date = "" == dateEle.val() ? nowdate.mdy : dateEle.val(), startdate = timearrange(l_date, startfield.val()), currentdate = new Date;
							if (currentdate.setSeconds(0), fields.field.attr("id") == startfield.attr("id") && null == String(startfield.val()).match(patternempty)) {
								var start = Date.parse(currentdate), end = Date.parse(startdate);
								if (start > end) {
									focusfield = startfield, msg = fields.opt.messages.starttime, validateCase = 3, status = !1;
									break
								}
								methods.errorMessageHide(fields.field)
							}
							if (fields.field.attr("id") == endfield.attr("id") && null == String(endfield.val()).match(patternempty)) {
								var enddate = timearrange(l_date, endfield.val());
								if ( start = Date.parse(startdate), end = Date.parse(enddate), start > end) {
									focusfield = endfield, msg = fields.opt.messages.endtime, validateCase = 3, status = !1;
									break
								}
								methods.errorMessageHide(fields.field)
							}
						}
					}
					if (status && empty && String(vType).match(/^date\[/)) {
						if (!gb.validation.isDate(String(fields.field.val()))) {
							msg = fields.opt.messages.date, validateCase = 3, status = !1;
							break
						}
						var now = gb.date.now(), currentdate = now.month + 1 + "/" + now.date + "/" + now.year, fieldVal = gb.date.format(String(fields.field.val()), mmddyyyy);
						if (status && String(vType).match(/^date\[end/)) {
							var endval = String(vType).replace(/date\[end|[\[\]]/g, "");
							if (String(endval).match(/^startdateto1year$/gi)) {
								var relationId = $(fields.field.attr("data-validate-relation"));
								if (relationId.size() && gb.validation.isDate(relationId.val(), mmddyyyy) && gb.validation.isDate(fields.field.val(), mmddyyyy)) {
									var datesplit = String(relationId.val()).split("/"), oneyeardate = gb.date.dateToOneYear(datesplit[1], datesplit[0], datesplit[2]);
									if (!gb.validation.dateRange(fields.field.val(), oneyeardate)) {
										msg = fields.opt.messages.startDateToOneYear, validateCase = 3, status = !1;
										break
									}
								}
							} else if (gb.validation.isDate(endval, mmddyyyy) && !gb.validation.dateRange(fieldVal, endval)) {
								msg = fields.opt.messages.enddate, validateCase = 3, status = !1;
								break
							}
						}
						if (status && String(vType).match(/^date\[start/)) {
							var endval = String(vType).replace(/^date\[start|[\[\]]/g, "");
							if (gb.validation.isDate(endval, mmddyyyy) && !gb.validation.dateRange(endval, fieldVal)) {
								msg = fields.opt.messages.startdate, validateCase = 3, status = !1;
								break
							}
						}
						if (status && String(vType).match(/date\[future\]/gi) && !gb.validation.dateRange(String(currentdate), fieldVal)) {
							msg = fields.opt.messages.future, validateCase = 3, status = !1;
							break
						}
						if (status && String(vType).match(/date\[futureexact\]/gi) && !gb.validation.dateRange(String(currentdate), fieldVal, !1)) {
							msg = fields.opt.messages.future, validateCase = 3, status = !1;
							break
						}
						if (status && String(vType).match(/date\[past\]/gi) && !gb.validation.dateRange(fieldVal, String(currentdate))) {
							msg = fields.opt.messages.past, validateCase = 3, status = !1;
							break
						}
						if (status && String(vType).match(/date\[pastexact\]/gi) && !gb.validation.dateRange(fieldVal, String(currentdate), !1)) {
							msg = fields.opt.messages.past, validateCase = 3, status = !1;
							break
						}
					}
					if (status && empty && String(vType).match(/daterange\[/g)) {
						var id = String(vType).replace(/daterange\[|\]/, ""), ele = $("[data-validate*='daterange[" + id + "']"), elefrom = $(ele[0]), eleto = $(ele[1]), datefrom = elefrom.val(), dateto = eleto.val();
						if (String(datefrom).match(patternempty) || String(dateto).match(patternempty)) {
							var field = String(datefrom).match(patternempty) ? elefrom : eleto;
							unvalidate = !0;
							break
						}
						if (!gb.validation.isDate(datefrom, mmddyyyy)) {
							focusfield = elefrom, msg = fields.opt.messages.date, validateCase = 3, status = !1;
							break
						}
						if (status && !gb.validation.isDate(dateto, mmddyyyy)) {
							focusfield = eleto, msg = fields.opt.messages.date, validateCase = 3, status = !1;
							break
						}
						if (status && null == String(datefrom).match(/^$|undefined/) && null == String(dateto).match(/^$|undefined/)) {
							var valid = gb.validation.dateRange(datefrom, dateto);
							if (!valid) {
								msg = fields.opt.messages.daterange, validateCase = 3, status = !1;
								break
							}
						}
					}
					if (status && empty && String(vType).match(/daterangestring\[/g)) {
						var ids = focusfield, vType_val = String(vType).replace(/daterangestring|\[|\]|\s{0,}/g, ""), val = String(focusfield.val()).split(vType_val), elefrom = String(val[0]).replace(/\s{0,}/g, ""), eleto = String(val[1]).replace(/\s{0,}/g, "");
						if (String(elefrom).match(/^$|^\s{0,}$|undefined/) || String(eleto).match(/^$|^\s{0,}$|undefined/)) {
							msg = fields.opt.messages.daterange, validateCase = 3, status = !1;
							break
						}
						var datefrom = gb.date.format(elefrom, mmddyyyy), dateto = gb.date.format(eleto, mmddyyyy);
						if (!gb.validation.isDate(String(datefrom)) || !gb.validation.isDate(String(dateto))) {
							msg = fields.opt.messages.daterange, validateCase = 3, status = !1;
							break
						}
						var valid = gb.validation.dateRange(datefrom, dateto);
						if (!valid) {
							msg = fields.opt.messages.daterange, validateCase = 3, status = !1;
							break
						}
					}
					if (status && empty && vType.match(/^char\[/g)) {
						var len = String(vType.replace(/(char\[)|\]/g, "")), fieldval = fields.field.val(), bk_len = String(len);
						len = String(len).match(/\,/) ? len.split(",") : [len], msg = fields.opt.messages.charlen.replace("length", "length (" + bk_len.replace(/,/, " or ") + ")");
						var matched = 0;
						for (var c in len) {
							var v_len = Number(len[c]), f_len = Number(fieldval.length);
							v_len == f_len && (matched += 1)
						}
						if (!matched) {
							msg = fields.opt.messages.charlen, validateCase = 3, status = !1;
							break
						}
					}
					if (status && empty && vType.match(/maxchar\[/g)) {
						var len = Number(vType.replace(/(maxchar\[)|\]/g, ""));
						if ( msg = fields.opt.messages.maxchar.replace("length", "length (" + len + ")"), fields.field.val().length > len) {
							validateCase = 3, status = !1;
							break
						}
					}
					if (status && empty && vType.match(/minchar\[/g)) {
						var len = Number(vType.replace(/(minchar\[)|\]/g, ""));
						if ( msg = fields.opt.messages.minchar.replace("length", "length (" + len + ")"), fields.field.val().length < len) {
							validateCase = 3, status = !1;
							break
						}
					}
					if (status && empty && vType.match(/min\[/g)) {
						var min = Number(vType.replace(/(min\[)|\]/g, ""));
						if ( msg = fields.opt.messages.min, Number(fields.field.val()) < min) {
							validateCase = 3, status = !1;
							break
						}
					}
					if (status && empty && vType.match(/max\[/g)) {
						var max = Number(vType.replace(/(max\[)|\]/g, ""));
						if ( msg = fields.opt.messages.max, Number(fields.field.val()) > max) {
							validateCase = 3, status = !1;
							break
						}
					}
					if (status && empty && vType.match(/^equals\[/g)) {
						var compare = String(vType.replace(/(equals\[)|\]/g, "")), comparefield = $(compare);
						if ( msg = fields.opt.messages.equals, String(fields.field.val()) != String(comparefield.val()) && "" != String(comparefield.val())) {
							validateCase = 3, status = !1;
							break
						}
						methods.errorMessageHide(comparefield), focusfield = fields.field
					}
					if (status && empty && vType.match(/^notequals\[/g)) {
						var compare = String(vType.replace(/(^notequals\[)|\]/g, "")), comparefield = $(compare);
						if ( msg = fields.opt.messages.notequals, String(fields.field.val()) == String(comparefield.val()) && "" != String(comparefield.val())) {
							validateCase = 3, status = !1;
							break
						}
						methods.errorMessageHide(comparefield), focusfield = fields.field
					}
					if (status && empty && "ssn" == vType && !gb.validation.isSSN(fields.field.val())) {
						msg = fields.opt.messages.ssn, validateCase = 3, status = !1;
						break
					}
					validateCnt += 1
				}
			if ((!fields.field.is(":visible") || fields.field.attr("disabled")) && ( status = !0), String(fields.groupcheck).match(/undefined|false/))
				if (status || unvalidate)
					unvalidate || (this.errorMessageHide(focusfield), focusfield.removeAttr("data-error"));
				else {
					methods.setFocus(focusfield);
					var emptypattern = /^$|^( ){0,}$|undefined/, fieldMessage = String(focusfield.attr("data-validate-message")), errorMessage = fieldMessage.match(/|/) ? fieldMessage.split("|") : [fieldMessage], condMsg = String(focusfield.attr("data-validate-message")).match(emptypattern) ? msg : errorMessage[validateCnt];
					msg = String(condMsg).match(emptypattern) ? msg : condMsg, (null == String(focusfield.val()).match(/select/i) || null == String(focusfield.val()).match(gb.regex.rgx_emptystrings) || String(focusfield.attr("type")).match(/(radio|checkbox)/g) && !$("[name='" + focusfield.attr("name") + "']").is(":checked")) && fields.field.is(":visible") && (this.showError(focusfield, msg, fieldFormId, fields), focusfield.attr("data-error", "true"))
				}
			return status
		},
		setFocus : function() {
		},
		showError : function(e, a, t, i) {
			var s = i;
			$(".error-msg[data-error-msg-id='" + e.attr("name") + "']").remove();
			var d = "<div class='error-msg' data-error-msg-id='" + e.attr("name") + "'><p class='error-msg-content'></p> ", l = e.closest("[data-error-showid]").size() ? e.closest(e.attr("data-error-showid")) : e, r = l.siblings(".error-msg:visible");
			if (r.size() || ("top" == s.opt.messageDirection ? l.before(d) : l.after(d)), l.siblings(".error-msg").children("p.error-msg-content").html(a + "<span class='error-msg-dismiss'>&times;</span>"), $(e).addClass("errField"), "tooltip" == s.opt.messageType) {
				r.css({
					"max-width" : s.opt.messageMaxWidth
				});
				var n = e.position(), f = r.position().top - (e.height() + r.height());
				r.addClass("error-tooltip error-bg"), "top" == s.opt.messageDirection && r.css({
					top : f + "px"
				}), r.css({
					left : n.left + "px"
				})
			}
			if ("validate" == methods.action) {
				var m = e.offset().top - (r.outerHeight() + 30);
				$("html,body").animate({
					scrollTop : m
				}, "fast")
			}
			s.opt.messageAutoHide && setTimeout(function() {
				methods.errorMessageHide(e), clearTimeout(this)
			}, s.opt.messageHideDelay), $(document).off("click", ".error-msg-dismiss").on("click", ".error-msg-dismiss", function(a) {
				a.preventDefault();
				var t = $(this), i = t.parents(".error-msg");
				i.slideUp("medium", function() {
					$(this).remove(), $(e).removeClass("errField")
				})
			})
		},
		errorMessageHide : function(e) {
			var a = e || $(".error-msg:visible"), t = a.hasClass(".error-msg") ? a : $(".error-msg[data-error-msg-id='" + a.attr("name") + "']");
			t.slideUp("fast", function() {
				$(this).remove(), $(e).removeClass("errField")
			})
		},
		removeError : function(e) {
			return methods.errorMessageHide(e), status
		}
	};
	$.fn.formValidate = function(e) {
		if ("validate" == e) {
			var a = $(this);
			return methods[e](a)
		}
		if ("validateField" == e) {
			var a = $(this);
			return methods[e](a)
		}
		if ("removeError" == e) {
			var a = $(this);
			return methods[e](a)
		}
		if ("removeValidate" == e) {
			var a = $(this);
			return methods[e](a)
		}
		return this.each(function() {
			var a = $(this);
			methods.init(a, e)
		})
	}, $.fn.formValidate.setting = {
		messages : {
			required : "This field is required.",
			email : "Please enter a valid email id.",
			minchar : "This field is minimum character length is required.",
			maxchar : "This field is maximum character length is required.",
			min : "This field is minimum value is required.",
			max : "This field is maximum value is required.",
			daterange : "Please enter the valid date range.",
			date : "Please enter a valid date (MM/DD/YYYY).",
			startdate : "Please enter a valid date (MM/DD/YYYY).",
			enddate : "Please enter a valid date (MM/DD/YYYY).",
			starttime : "Please enter Start Time greater than Current Time.",
			endtime : "Please enter End Time greater than Start Time.",
			future : "Please enter the future date.",
			startDateToOneYear : "Please enter the end date less than one year from start date.",
			past : "Please enter the past date.",
			alphabetsOnly : "Please enter alphabets only.",
			numbersOnly : "Please enter numbers only.",
			numbersSpecialOnly : "Please enter numbers & special characters only.",
			alphabetsNumbersOnly : "Please enter alphabet & numbers only.",
			alphabetsNumbersSpaceOnly : "Please enter alphabet & numbers , space only.",
			decimalLen : "Please enter the lenth decimal only.",
			ssn : "Please enter valid ssn.",
			equals : "Please enter same value to related field value.",
			notequals : "Please enter different value to related field value.",
			phonenumber : "Please enter valid phone number.",
			charlen : "This field length only.",
			nospace : "Space not allowed."
		},
		messageType : "attach",
		messageDirection : "bottom",
		messageMaxWidth : "400px",
		messageHideDelay : 3e3,
		messageAutoHide : !1
	}
}(jQuery);
/*********** Form validation ends **********/

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
				r.checkLength(s)
			}).on("blur", function() {
				e(this)
			}), this.self = n
		},
		caseFinder : function(e) {
			var s = e.value, t = s.split(""), n = n || [], a = a || [], o = o || [], i = i || [];
			for (var h in t)t[h].match(/[A-Z]/) ? n.push(t[h]) : t[h].match(/[a-z]/) ? a.push(t[h]) : t[h].match(/[0-9]/) ? o.push(t[h]) : i.push(t[h]);
			var g = n.length > 1 ? 25 : 1 == n.length ? 12.5 : 0, l = a.length > 1 ? 25 : 1 == a.length ? 12.5 : 0, p = o.length > 1 ? 25 : 1 == o.length ? 12.5 : 0, u = i.length > 1 ? 25 : 1 == i.length ? 12.5 : 0;
			return e.score = g + l + p + u, r.progressBarShow(e), this
		},
		progressBarShow : function(s) { {
				var t = e(s.ele), n = e(t).next();
				n.parent()
			}
			return 0 === n.length && (e(s.options.progressTemplate).insertAfter(t).parent().addClass("pull-relative"), r.progressBarWidth(s)), n.length > 0 && r.progressBarWidth(s), this
		},
		progressBarWidth : function(r) {
			var s = e(r.ele), t = e(s).next(), n = n || [], a = {
				w : ["Weak", "progress-bar-danger"],
				m : ["Medium", "progress-bar-warning"],
				s : ["Strong", "progress-bar-success"]
			};
			n = r.score <= 40 ? a.w : r.score > 40 && r.score <= 83 ? a.m : a.s, e(".progress-bar", t).width(r.score + "%").attr("class", "progress-bar " + n[1]).text(n[0])
		},
		progressBarHide : function(r) {
			var s = e(r.ele), t = e(s).next();
			t.length > 0 && t.remove()
		},
		checkLength : function(s) {
			var t = e(s.ele), n = t.val().length;
			return n > 0 ? r.caseFinder(s) : r.progressBarHide(s), this
		}
	};
	e.fn.passwordStrength = function(s) {
		return this.each(function() {
			r.init(e(this), s || {})
		})
	}, e.fn.passwordStrength.setting = {
		minChar : 8,
		errorMessages : {
			password_length_err : "The Password is too short",
			same_as_username : "Your password cannot be the same as your username"
		},
		usernameField : "#username",
		progressTemplate : '<div class="progress pwd_strength"><div style="width: 0%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="0" role="progressbar" class="progress-bar"></div></div>'
	}
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

/*********** Wizard collapse Starts **********/
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
/*********** Wizard collapse ends **********/

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
/***************************** Alphabet list search ends *****************************/


/***************************** List Search *****************************/
(function($) {
	var methods = {
		init : function(element, options) {
			var self = $(element);
			self.options = $.extend({}, $.fn.listSearch.setting, options);
			self.on("focus", function(e) {
				var obj = {
					ele : $(this),
					options : self.options
				};
				methods.listFilter(obj).after(obj);
			}).on("keyup", function(e) {
				var obj = {
					ele : $(this),
					options : self.options
				};
				methods.listFilter(obj).after(obj);
			}).on("blur", function(e) {
				var target = $(this);
			});
			this.self = self;
		},
		listFilter : function(obj) {
			var elem = $(obj.ele), elemVal = elem.val().toLowerCase(), targetId = elem.attr('data-search-target'), 
			targetElem = $('li > a', targetId);
			if (elemVal != '') {
				$(targetElem).each(function(index) {
					var self = $(targetElem[index]), parentLi = self.parent('li'), text = self.text().toLowerCase();
					(text.indexOf(elemVal) !== -1) ? $(parentLi).fadeIn() : $(parentLi).fadeOut();
				});
			} else {
				$('li', targetId).fadeIn('fast');
			}
			return this;
		},
		after : function(obj) {
			if ( typeof obj.options.after == 'function') {
				obj.options.after(obj);
			}
			return this;
		}
	};
	$.fn.listSearch = function(options, ele) {
		return this.each(function() {
			methods.init($(this), options || {});
		});
	};
	$.fn.listSearch.setting = {
		after : function(obj) {
			
		}
	};
})(jQuery);
/******************************* List Search *****************************/

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

/******************************* Serialize Object Starts *************************/
$.fn.serializeObject=function(){"use strict";var a={},b=function(b,c){var d=a[c.name];"undefined"!=typeof d&&d!==null?$.isArray(d)?d.push(c.value):a[c.name]=[d,c.value]:a[c.name]=c.value};return $.each(this.serializeArray(),b),a};
/******************************* Serialize Object ends *************************/