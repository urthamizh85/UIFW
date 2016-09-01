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
			var s = e.value, t = s.split(""), pattern = e.options.pattern, x = x || [], f = f || [], len;
			len = (e.value.length >= e.options.minChar) ? 0 : 1;
			for(var p in pattern) {
				if(s.match(pattern[p]) != null) {
					x.push(s.match(pattern[p]));
				}
			}
			var percent = (x.length/(pattern.length+len))*100;
			return e.score = percent, r.progressBarShow(e), this;
		},
		progressBarShow : function(s) { {
				var t = e(s.ele), n = e(t).next();
				n.parent()
			}
			return 0 === n.length && (e(s.options.progressTemplate).insertAfter(t).parent().addClass("pull-relative"), r.progressBarWidth(s)), n.length > 0 && r.progressBarWidth(s), this;
		},
		progressBarWidth : function(r) {
			var s = e(r.ele), t = e(s).next(), n = n || [], a = {
				w : ["Weak", "progress-bar-danger"],
				m : ["Medium", "progress-bar-warning"],
				s : ["Strong", "progress-bar-success"],
				b : ["Best", "progress-bar-success"]
			};
			n = r.score <= 40 ? a.w : r.score > 40 && r.score <= 75 ? a.m : r.score > 75 && r.score <= 90 ? a.s : a.b, e(".progress-bar", t).width(r.score + "%").attr("class", "progress-bar " + n[1]).text(n[0])
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
		pattern : [/[A-Z]{1}/g, /[a-z]{1}/g, /[0-9]{1}/g, /[!$%^&*()_+|~@\\#\-={}\[\]:";'<>?,.\/`\s]{1}/g],
		errorMessages : {
			password_length_err : "The Password is too short",
			same_as_username : "Your password cannot be the same as your username"
		},
		usernameField : "#username",
		progressTemplate : '<div class="progress pwd_strength"><div style="width: 0%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="0" role="progressbar" class="progress-bar"></div></div>'
	}
}(jQuery);