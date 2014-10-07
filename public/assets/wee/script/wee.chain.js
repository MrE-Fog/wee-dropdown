// Wee 2.0.5 (weepower.com)
// Licensed under Apache 2 (http://www.apache.org/licenses/LICENSE-2.0)
// DO NOT MODIFY THIS FILE

var WeeAlias = WeeAlias || '$';

Wee.fn.extend({
	$chain: function(a, b) {
		var p = Wee._win[WeeAlias]['prototype'];

		Wee.$isString(a) ?
			p[a] = b :
			Object.keys(a).forEach(function(key) {
				p[key] = a[key];
			});
	}
});

(function(c, s) {
	function get(sel, context) {
		if (sel) {
			var el = Array.isArray(sel) ? sel : Wee.$toArray(Wee.$(sel, context)),
				i = 0;

			for (; i < el.length; i++) {
				c.call(this, el[i]);
			}
		}
	}

	Wee._win[WeeAlias] = function(sel, context) {
		var o = new get(sel, context);
			o.sel = sel;

		return o;
	}

	Wee._win[WeeAlias]['prototype'] = get['prototype'] = {
		length: 0,
		_$_: true,
		// Utilities
		reverse: function() {
			var cp = Wee.$extend({}, this),
				len = this.length,
				x = len,
				i = 0;

			for (; i < len; i++) {
				x--;
				this[i] = cp[x];
			}

			return this;
		},
		// Core
		clone: function() {
			return $(Wee.$clone(this));
		},
		each: function(fn, opt) {
			Wee.$each(this, fn, opt);
		},
		map: function(fn) {
			return Wee.$map(this, fn);
		},
		addClass: function(val) {
			Wee.$addClass(this, val);
			return this;
		},
		removeClass: function(val) {
			Wee.$removeClass(this, val);
			return this;
		},
		css: function(a, b) {
			var r = Wee.$css(this, a, b);
			return b || Wee.$isObject(a) ? this : r;
		},
		attr: function(key, val) {
			var r = Wee.$attr(this, key, val);
			return val !== undefined ? this : r;
		},
		eq: function(i) {
			return $(Wee.$eq(this, i));
		},
		first: function() {
			return $(Wee.$eq(this, 0));
		},
		hasClass: function(val) {
			return Wee.$hasClass(this, val);
		},
		data: function(key, val) {
			var r = Wee.$data(this, key, val);
			return val !== undefined ? this : r;
		},
		html: function(val) {
			var r = Wee.$html(this, val);
			return val !== undefined ? this : r;
		}
	}
})([].push);