!function (t, n) {
    "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define("d3", ["exports"], n) : n(t.d3 = {})
}(this, function (t) {
    "use strict";
    function n(t, n) {
        return n > t ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    }

    function e(t) {
        return 1 === t.length && (t = r(t)), {
            left: function (n, e, r, i) {
                for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = n.length); i > r;) {
                    var a = r + i >>> 1;
                    t(n[a], e) < 0 ? r = a + 1 : i = a
                }
                return r
            }, right: function (n, e, r, i) {
                for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = n.length); i > r;) {
                    var a = r + i >>> 1;
                    t(n[a], e) > 0 ? i = a : r = a + 1
                }
                return r
            }
        }
    }

    function r(t) {
        return function (e, r) {
            return n(t(e), r)
        }
    }

    function i(t, n) {
        return t > n ? -1 : n > t ? 1 : n >= t ? 0 : NaN
    }

    function a(t) {
        return null === t ? NaN : +t
    }

    function u(t, n) {
        var e, r, i = t.length, u = 0, o = 0, s = -1, c = 0;
        if (1 === arguments.length)for (; ++s < i;)isNaN(e = a(t[s])) || (r = e - u, u += r / ++c, o += r * (e - u)); else for (; ++s < i;)isNaN(e = a(n(t[s], s, t))) || (r = e - u, u += r / ++c, o += r * (e - u));
        return c > 1 ? o / (c - 1) : void 0
    }

    function o() {
        var t = u.apply(this, arguments);
        return t ? Math.sqrt(t) : t
    }

    function s(t, n) {
        var e, r, i, a = -1, u = t.length;
        if (1 === arguments.length) {
            for (; ++a < u;)if (null != (r = t[a]) && r >= r) {
                e = i = r;
                break
            }
            for (; ++a < u;)null != (r = t[a]) && (e > r && (e = r), r > i && (i = r))
        } else {
            for (; ++a < u;)if (null != (r = n(t[a], a, t)) && r >= r) {
                e = i = r;
                break
            }
            for (; ++a < u;)null != (r = n(t[a], a, t)) && (e > r && (e = r), r > i && (i = r))
        }
        return [e, i]
    }

    function c(t) {
        return function () {
            return t
        }
    }

    function f(t) {
        return t
    }

    function h(t, n, e) {
        (i = arguments.length) < 3 && (e = 1, 2 > i && (n = t, t = 0));
        for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), a = new Array(i); ++r < i;)a[r] = t + r * e;
        return a
    }

    function l(t, n, e) {
        var r = d(t, n, e);
        return h(Math.ceil(t / r) * r, Math.floor(n / r) * r + r / 2, r)
    }

    function d(t, n, e) {
        var r = Math.abs(n - t) / Math.max(0, e), i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)), a = r / i;
        return a >= Ms ? i *= 10 : a >= ws ? i *= 5 : a >= Ts && (i *= 2), t > n ? -i : i
    }

    function g(t) {
        return Math.ceil(Math.log(t.length) / Math.LN2) + 1
    }

    function m(t) {
        return +t
    }

    function p() {
        function t(t) {
            var i, a, u = t.length, o = new Array(u);
            for (i = 0; u > i; ++i)o[i] = +n(t[i], i, t);
            var s = e(o), c = +s[0], f = +s[1], h = r(o, c, f);
            Array.isArray(h) || (h = l(c, f, +h));
            var d = h.length;
            for (i = 0; d > i; ++i)h[i] = +h[i];
            for (; h[0] <= c;)h.shift(), --d;
            for (; h[d - 1] >= f;)h.pop(), --d;
            var g, m = new Array(d + 1);
            for (i = 0; d >= i; ++i)g = m[i] = [], g.x0 = i > 0 ? h[i - 1] : c, g.x1 = d > i ? h[i] : f;
            for (i = 0; u > i; ++i)a = o[i], a >= c && f >= a && m[bs(h, a, 0, d)].push(t[i]);
            return m
        }

        var n = f, e = s, r = g;
        return t.value = function (e) {
            return arguments.length ? (n = "function" == typeof e ? e : c(+e), t) : n
        }, t.domain = function (n) {
            return arguments.length ? (e = "function" == typeof n ? n : c([+n[0], +n[1]]), t) : e
        }, t.thresholds = function (n) {
            return arguments.length ? (r = "function" == typeof n ? n : c(Array.isArray(n) ? Array.prototype.map.call(n, m) : +n), t) : r
        }, t
    }

    function _(t, n, e) {
        if (arguments.length < 3 && (e = a), r = t.length) {
            if ((n = +n) <= 0 || 2 > r)return +e(t[0], 0, t);
            if (n >= 1)return +e(t[r - 1], r - 1, t);
            var r, i = (r - 1) * n, u = Math.floor(i), o = +e(t[u], u, t), s = +e(t[u + 1], u + 1, t);
            return o + (s - o) * (i - u)
        }
    }

    function y(t, e, r) {
        return t.sort(n), Math.ceil((r - e) / (2 * (_(t, .75) - _(t, .25)) * Math.pow(t.length, -1 / 3)))
    }

    function v(t, n, e) {
        return Math.ceil((e - n) / (3.5 * o(t) * Math.pow(t.length, -1 / 3)))
    }

    function b(t, n) {
        var e, r, i = -1, a = t.length;
        if (1 === arguments.length) {
            for (; ++i < a;)if (null != (r = t[i]) && r >= r) {
                e = r;
                break
            }
            for (; ++i < a;)null != (r = t[i]) && r > e && (e = r)
        } else {
            for (; ++i < a;)if (null != (r = n(t[i], i, t)) && r >= r) {
                e = r;
                break
            }
            for (; ++i < a;)null != (r = n(t[i], i, t)) && r > e && (e = r)
        }
        return e
    }

    function x(t, n) {
        var e, r = 0, i = t.length, u = -1, o = i;
        if (1 === arguments.length)for (; ++u < i;)isNaN(e = a(t[u])) ? --o : r += e; else for (; ++u < i;)isNaN(e = a(n(t[u], u, t))) ? --o : r += e;
        return o ? r / o : void 0
    }

    function M(t, e) {
        var r, i = [], u = t.length, o = -1;
        if (1 === arguments.length)for (; ++o < u;)isNaN(r = a(t[o])) || i.push(r); else for (; ++o < u;)isNaN(r = a(e(t[o], o, t))) || i.push(r);
        return _(i.sort(n), .5)
    }

    function w(t) {
        for (var n, e, r, i = t.length, a = -1, u = 0; ++a < i;)u += t[a].length;
        for (e = new Array(u); --i >= 0;)for (r = t[i], n = r.length; --n >= 0;)e[--u] = r[n];
        return e
    }

    function T(t, n) {
        var e, r, i = -1, a = t.length;
        if (1 === arguments.length) {
            for (; ++i < a;)if (null != (r = t[i]) && r >= r) {
                e = r;
                break
            }
            for (; ++i < a;)null != (r = t[i]) && e > r && (e = r)
        } else {
            for (; ++i < a;)if (null != (r = n(t[i], i, t)) && r >= r) {
                e = r;
                break
            }
            for (; ++i < a;)null != (r = n(t[i], i, t)) && e > r && (e = r)
        }
        return e
    }

    function N(t) {
        for (var n, e = 0, r = t.length - 1, i = t[0], a = new Array(0 > r ? 0 : r); r > e;)a[e] = [n = i, i = t[++e]];
        return a
    }

    function k(t, n) {
        for (var e = n.length, r = new Array(e); e--;)r[e] = t[n[e]];
        return r
    }

    function S(t, e) {
        if (r = t.length) {
            var r, i, a = 0, u = 0, o = t[u];
            for (e || (e = n); ++a < r;)(e(i = t[a], o) < 0 || 0 !== e(o, o)) && (o = i, u = a);
            return 0 === e(o, o) ? u : void 0
        }
    }

    function C(t, n, e) {
        (a = arguments.length) < 3 && (e = t.length, 2 > a && (n = 0));
        for (var r, i, a = e - n; a;)i = Math.random() * a-- | 0, r = t[a + n], t[a + n] = t[i + n], t[i + n] = r;
        return t
    }

    function A(t, n) {
        var e, r = 0, i = t.length, a = -1;
        if (1 === arguments.length)for (; ++a < i;)(e = +t[a]) && (r += e); else for (; ++a < i;)(e = +n(t[a], a, t)) && (r += e);
        return r
    }

    function D(t) {
        if (!(i = t.length))return [];
        for (var n = -1, e = T(t, F), r = new Array(e); ++n < e;)for (var i, a = -1, u = r[n] = new Array(i); ++a < i;)u[a] = t[a][n];
        return r
    }

    function F(t) {
        return t.length
    }

    function L() {
        return D(arguments)
    }

    function P() {
    }

    function E(t, n) {
        var e = new P;
        if (t instanceof P)t.each(function (t, n) {
            e.set(n, t)
        }); else if (Array.isArray(t)) {
            var r, i = -1, a = t.length;
            if (1 === arguments.length)for (; ++i < a;)e.set(i, t[i]); else for (; ++i < a;)e.set(n(r = t[i], i, t), r)
        } else if (t)for (var u in t)e.set(u, t[u]);
        return e
    }

    function U() {
        function t(n, i, u, o) {
            if (i >= a.length)return r ? r(n) : e ? n.sort(e) : n;
            for (var s, c, f, h = -1, l = n.length, d = a[i++], g = E(), m = u(); ++h < l;)(f = g.get(s = d(c = n[h]) + "")) ? f.push(c) : g.set(s, [c]);
            return g.each(function (n, e) {
                o(m, e, t(n, i, u, o))
            }), m
        }

        function n(t, e) {
            if (e >= a.length)return t;
            var r = [], i = u[e++];
            return t.each(function (t, i) {
                r.push({key: i, values: n(t, e)})
            }), i ? r.sort(function (t, n) {
                return i(t.key, n.key)
            }) : r
        }

        var e, r, i, a = [], u = [];
        return i = {
            object: function (n) {
                return t(n, 0, H, O)
            }, map: function (n) {
                return t(n, 0, R, j)
            }, entries: function (e) {
                return n(t(e, 0, R, j), 0)
            }, key: function (t) {
                return a.push(t), i
            }, sortKeys: function (t) {
                return u[a.length - 1] = t, i
            }, sortValues: function (t) {
                return e = t, i
            }, rollup: function (t) {
                return r = t, i
            }
        }
    }

    function H() {
        return {}
    }

    function O(t, n, e) {
        t[n] = e
    }

    function R() {
        return E()
    }

    function j(t, n, e) {
        t.set(n, e)
    }

    function q() {
    }

    function Y(t, n) {
        var e = new q;
        if (t instanceof q)t.each(function (t) {
            e.add(t)
        }); else if (t) {
            var r, i = -1, a = t.length;
            if (1 === arguments.length)for (; ++i < a;)e.add(t[i]); else for (; ++i < a;)e.add(n(r = t[i], i, t))
        }
        return e
    }

    function z(t) {
        var n = [];
        for (var e in t)n.push(e);
        return n
    }

    function I(t) {
        var n = [];
        for (var e in t)n.push(t[e]);
        return n
    }

    function J(t) {
        var n = [];
        for (var e in t)n.push({key: e, value: t[e]});
        return n
    }

    function B(t, n) {
        var e = arguments.length;
        return e ? 1 === e ? (n = +t, t = 0) : (t = +t, n = +n - t) : (t = 0, n = 1), function () {
            return Math.random() * n + t
        }
    }

    function X(t, n) {
        var e = arguments.length;
        return e ? 1 === e ? (t = +t, n = 1) : (t = +t, n = +n) : (t = 0, n = 1), function () {
            var e, r, i;
            do e = 2 * Math.random() - 1, r = 2 * Math.random() - 1, i = e * e + r * r; while (!i || i > 1);
            return t + n * e * Math.sqrt(-2 * Math.log(i) / i)
        }
    }

    function W() {
        var t = X.apply(this, arguments);
        return function () {
            return Math.exp(t())
        }
    }

    function V(t) {
        return function () {
            for (var n = 0, e = 0; t > e; ++e)n += Math.random();
            return n
        }
    }

    function $(t) {
        var n = V(t);
        return function () {
            return n() / t
        }
    }

    function Z(t) {
        return function () {
            return -Math.log(1 - Math.random()) / t
        }
    }

    function G(t, n) {
        return function (e) {
            return t(e, n)
        }
    }

    function K(t, n, e) {
        return function (r) {
            return t(r, n, e)
        }
    }

    function Q(t, n) {
        return n = Ss.call(n), n[0] = null, function (e) {
            return n[0] = e, t.apply(null, n)
        }
    }

    function tt(t, n, e) {
        switch (arguments.length) {
            case 1:
                return t;
            case 2:
                return G(t, n);
            case 3:
                return K(t, n, e);
            default:
                return Q(t, arguments)
        }
    }

    function nt(t) {
        return +t
    }

    function et(t) {
        return t * t
    }

    function rt(t) {
        return t * (2 - t)
    }

    function it(t) {
        return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2
    }

    function at(t) {
        return t * t * t
    }

    function ut(t) {
        return --t * t * t + 1
    }

    function ot(t) {
        return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
    }

    function st(t, n) {
        return null == n && (n = 3), Math.pow(t, n)
    }

    function ct(t, n) {
        return null == n && (n = 3), 1 - Math.pow(1 - t, n)
    }

    function ft(t, n) {
        return null == n && (n = 3), ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
    }

    function ht(t) {
        return 1 - Math.cos(t * As)
    }

    function lt(t) {
        return Math.sin(t * As)
    }

    function dt(t) {
        return (1 - Math.cos(Cs * t)) / 2
    }

    function gt(t) {
        return Math.pow(2, 10 * t - 10)
    }

    function mt(t) {
        return 1 - Math.pow(2, -10 * t)
    }

    function pt(t) {
        return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2
    }

    function _t(t) {
        return 1 - Math.sqrt(1 - t * t)
    }

    function yt(t) {
        return Math.sqrt(1 - --t * t)
    }

    function vt(t) {
        return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
    }

    function bt(t) {
        return 1 - xt(1 - t)
    }

    function xt(t) {
        return Ds > t ? js * t * t : Ls > t ? js * (t -= Fs) * t + Ps : Us > t ? js * (t -= Es) * t + Hs : js * (t -= Os) * t + Rs
    }

    function Mt(t) {
        return ((t *= 2) <= 1 ? 1 - xt(1 - t) : xt(t - 1) + 1) / 2
    }

    function wt(t, n) {
        return n = null == n ? 1.70158 : +n, t * t * ((n + 1) * t - n)
    }

    function Tt(t, n) {
        return n = null == n ? 1.70158 : +n, --t * t * ((n + 1) * t + n) + 1
    }

    function Nt(t, n) {
        return n = null == n ? 1.70158 : +n, ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
    }

    function kt(t, n, e) {
        return n = null == n ? 1 : Math.max(1, n), e = (null == e ? .3 : e) / qs, n * Math.pow(2, 10 * --t) * Math.sin((e * Math.asin(1 / n) - t) / e)
    }

    function St(t, n, e) {
        return n = null == n ? 1 : Math.max(1, n), e = (null == e ? .3 : e) / qs, 1 - n * Math.pow(2, -10 * t) * Math.sin((+t + e * Math.asin(1 / n)) / e)
    }

    function Ct(t, n, e) {
        n = null == n ? 1 : Math.max(1, n), e = (null == e ? .3 : e) / qs;
        var r = e * Math.asin(1 / n);
        return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((r - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((r + t) / e)) / 2
    }

    function At(t) {
        for (var n, e = -1, r = t.length, i = t[r - 1], a = 0; ++e < r;)n = i, i = t[e], a += n[1] * i[0] - n[0] * i[1];
        return a / 2
    }

    function Dt(t) {
        for (var n, e, r = -1, i = t.length, a = 0, u = 0, o = t[i - 1], s = 0; ++r < i;)n = o, o = t[r], s += e = n[0] * o[1] - o[0] * n[1], a += (n[0] + o[0]) * e, u += (n[1] + o[1]) * e;
        return s *= 3, [a / s, u / s]
    }

    function Ft(t, n, e) {
        return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0])
    }

    function Lt(t, n) {
        return t[0] - n[0] || t[1] - n[1]
    }

    function Pt(t) {
        for (var n = t.length, e = [0, 1], r = 2, i = 2; n > i; ++i) {
            for (; r > 1 && Ft(t[e[r - 2]], t[e[r - 1]], t[i]) <= 0;)--r;
            e[r++] = i
        }
        return e.slice(0, r)
    }

    function Et(t) {
        if ((e = t.length) < 3)return null;
        var n, e, r = new Array(e), i = new Array(e);
        for (n = 0; e > n; ++n)r[n] = [+t[n][0], +t[n][1], n];
        for (r.sort(Lt), n = 0; e > n; ++n)i[n] = [r[n][0], -r[n][1]];
        var a = Pt(r), u = Pt(i), o = u[0] === a[0], s = u[u.length - 1] === a[a.length - 1], c = [];
        for (n = a.length - 1; n >= 0; --n)c.push(t[r[a[n]][2]]);
        for (n = +o; n < u.length - s; ++n)c.push(t[r[u[n]][2]]);
        return c
    }

    function Ut(t, n) {
        for (var e, r, i = t.length, a = t[i - 1], u = n[0], o = n[1], s = a[0], c = a[1], f = !1, h = 0; i > h; ++h)a = t[h], e = a[0], r = a[1], r > o != c > o && (s - e) * (o - r) / (c - r) + e > u && (f = !f), s = e, c = r;
        return f
    }

    function Ht(t) {
        for (var n, e, r = -1, i = t.length, a = t[i - 1], u = a[0], o = a[1], s = 0; ++r < i;)n = u, e = o, a = t[r], u = a[0], o = a[1], n -= u, e -= o, s += Math.sqrt(n * n + e * e);
        return s
    }

    function Ot() {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = []
    }

    function Rt() {
        return new Ot
    }

    function jt(t) {
        return t[0]
    }

    function qt(t) {
        return t[1]
    }

    function Yt(t) {
        return function () {
            return t
        }
    }

    function zt() {
        this.x = null, this.y = null, this.leaf = !0, this.data = null, this.nodes = []
    }

    function It(t, n, e, r, i, a) {
        if (!t(n, e, r, i, a)) {
            var u = (e + i) / 2, o = (r + a) / 2, s = n.nodes;
            s[0] && It(t, s[0], e, r, u, o), s[1] && It(t, s[1], u, r, i, o), s[2] && It(t, s[2], e, o, u, a), s[3] && It(t, s[3], u, o, i, a)
        }
    }

    function Jt(t, n, e, r, i, a, u) {
        var o, s = 1 / 0;
        return function c(t, f, h, l, d) {
            if (!(f > a || h > u || r > l || i > d)) {
                if (null != t.x) {
                    var g = n - t.x, m = e - t.y, p = g * g + m * m;
                    if (s > p) {
                        var _ = Math.sqrt(s = p);
                        r = n - _, i = e - _, a = n + _, u = e + _, o = t
                    }
                }
                for (var y = t.nodes, v = (f + l) / 2, b = (h + d) / 2, x = n >= v, M = e >= b, w = M << 1 | x, T = w + 4; T > w; ++w)if (t = y[3 & w])switch (3 & w) {
                    case 0:
                        c(t, f, h, v, b);
                        break;
                    case 1:
                        c(t, v, h, l, b);
                        break;
                    case 2:
                        c(t, f, b, v, d);
                        break;
                    case 3:
                        c(t, v, b, l, d)
                }
            }
        }(t, r, i, a, u), o && o.data
    }

    function Bt() {
        function t(t) {
            function o(t, n, e, r, i, a, u, o) {
                if (!isNaN(e) && !isNaN(r))if (t.leaf) {
                    var c = t.x, f = t.y;
                    if (null != c)if (Math.abs(c - e) + Math.abs(f - r) < .01)s(t, n, e, r, i, a, u, o); else {
                        var h = t.data;
                        t.x = t.y = t.data = null, s(t, h, c, f, i, a, u, o), s(t, n, e, r, i, a, u, o)
                    } else t.x = e, t.y = r, t.data = n
                } else s(t, n, e, r, i, a, u, o)
            }

            function s(t, n, e, r, i, a, u, s) {
                var c = (i + u) / 2, f = (a + s) / 2, h = e >= c, l = r >= f, d = l << 1 | h;
                t.leaf = !1, t = t.nodes[d] || (t.nodes[d] = new zt), h ? i = c : u = c, l ? a = f : s = f, o(t, n, e, r, i, a, u, s)
            }

            var c, f, h, l, d, g, m, p, _, y = "function" == typeof a ? a : Yt(a), v = "function" == typeof u ? u : Yt(u);
            if (t || (t = []), null != n)g = n, m = r, p = e, _ = i; else for (p = _ = -(g = m = 1 / 0), f = [], h = [], d = t.length, l = 0; d > l; ++l) {
                var b = +y(c = t[l], l, t), x = +v(c, l, t);
                g > b && (g = b), m > x && (m = x), b > p && (p = b), x > _ && (_ = x), f.push(b), h.push(x)
            }
            var M = p - g, w = _ - m;
            isFinite(M) && isFinite(w) && (M > w ? _ = m + M : p = g + w);
            var T = new zt;
            if (T.add = function (t) {
                    return o(T, t, +y(t, ++l), +v(t, l), g, m, p, _), T
                }, T.visit = function (t) {
                    return It(t, T, g, m, p, _), T
                }, T.find = function (t, n) {
                    return Jt(T, t, n, g, m, p, _)
                }, l = -1, null == n) {
                for (; ++l < d;)o(T, t[l], f[l], h[l], g, m, p, _);
                --l
            } else t.forEach(T.add);
            return f = h = t = c = null, T
        }

        var n, e, r, i, a = jt, u = qt;
        return t.x = function (n) {
            return arguments.length ? (a = n, t) : a
        }, t.y = function (n) {
            return arguments.length ? (u = n, t) : u
        }, t.extent = function (a) {
            return arguments.length ? (null == a ? n = r = e = i = null : (n = +a[0][0], r = +a[0][1], e = +a[1][0], i = +a[1][1]), t) : null == n ? null : [[n, r], [e, i]]
        }, t.size = function (a) {
            return arguments.length ? (null == a ? n = r = e = i = null : (n = r = 0, e = +a[0], i = +a[1]), t) : null == n ? null : [e - n, i - r]
        }, t
    }

    function Xt(t) {
        return function () {
            return t
        }
    }

    function Wt(t) {
        return t.innerRadius
    }

    function Vt(t) {
        return t.outerRadius
    }

    function $t(t) {
        return t.startAngle
    }

    function Zt(t) {
        return t.endAngle
    }

    function Gt(t) {
        return t && t.padAngle
    }

    function Kt(t) {
        return t >= 1 ? Ws : -1 >= t ? -Ws : Math.asin(t)
    }

    function Qt(t, n, e, r, i, a, u, o) {
        var s = e - t, c = r - n, f = u - i, h = o - a, l = (f * (n - a) - h * (t - i)) / (h * s - f * c);
        return [t + l * s, n + l * c]
    }

    function tn(t, n, e, r, i, a, u) {
        var o = t - e, s = n - r, c = (u ? a : -a) / Math.sqrt(o * o + s * s), f = c * s, h = -c * o, l = t + f, d = n + h, g = e + f, m = r + h, p = (l + g) / 2, _ = (d + m) / 2, y = g - l, v = m - d, b = y * y + v * v, x = i - a, M = l * m - g * d, w = (0 > v ? -1 : 1) * Math.sqrt(Math.max(0, x * x * b - M * M)), T = (M * v - y * w) / b, N = (-M * y - v * w) / b, k = (M * v + y * w) / b, S = (-M * y + v * w) / b, C = T - p, A = N - _, D = k - p, F = S - _;
        return C * C + A * A > D * D + F * F && (T = k, N = S), {
            cx: T,
            cy: N,
            x01: -f,
            y01: -h,
            x11: T * (i / x - 1),
            y11: N * (i / x - 1)
        }
    }

    function nn() {
        function t() {
            var t, c, f = +n.apply(this, arguments), h = +e.apply(this, arguments), l = a.apply(this, arguments) - Ws, d = u.apply(this, arguments) - Ws, g = Math.abs(d - l), m = d > l;
            if (s || (s = t = Rt()), f > h && (c = h, h = f, f = c), h > Bs)if (g > Vs - Bs)s.moveTo(h * Math.cos(l), h * Math.sin(l)), s.arc(0, 0, h, l, d, !m), f > Bs && (s.moveTo(f * Math.cos(d), f * Math.sin(d)), s.arc(0, 0, f, d, l, m)); else {
                var p = l, _ = d, y = l, v = d, b = g, x = g, M = o.apply(this, arguments) / 2, w = M > Bs && (i ? +i.apply(this, arguments) : Math.sqrt(f * f + h * h)), T = Math.min(Math.abs(h - f) / 2, +r.apply(this, arguments)), N = T, k = T;
                if (w > Bs) {
                    var S = Kt(w / f * Math.sin(M)), C = Kt(w / h * Math.sin(M));
                    (b -= 2 * S) > Bs ? (S *= m ? 1 : -1, y += S, v -= S) : (b = 0, y = v = (l + d) / 2), (x -= 2 * C) > Bs ? (C *= m ? 1 : -1, p += C, _ -= C) : (x = 0, p = _ = (l + d) / 2)
                }
                var A = h * Math.cos(p), D = h * Math.sin(p), F = f * Math.cos(v), L = f * Math.sin(v);
                if (T > Bs) {
                    var P = h * Math.cos(_), E = h * Math.sin(_), U = f * Math.cos(y), H = f * Math.sin(y);
                    if (Xs > g) {
                        var O = b > Bs ? Qt(A, D, U, H, P, E, F, L) : [F, L], R = A - O[0], j = D - O[1], q = P - O[0], Y = E - O[1], z = 1 / Math.sin(Math.acos((R * q + j * Y) / (Math.sqrt(R * R + j * j) * Math.sqrt(q * q + Y * Y))) / 2), I = Math.sqrt(O[0] * O[0] + O[1] * O[1]);
                        N = Math.min(T, (f - I) / (z - 1)), k = Math.min(T, (h - I) / (z + 1))
                    }
                }
                if (x > Bs)if (k > Bs) {
                    var J = tn(U, H, A, D, h, k, m), B = tn(P, E, F, L, h, k, m);
                    s.moveTo(J.cx + J.x01, J.cy + J.y01), T > k ? s.arc(J.cx, J.cy, k, Math.atan2(J.y01, J.x01), Math.atan2(B.y01, B.x01), !m) : (s.arc(J.cx, J.cy, k, Math.atan2(J.y01, J.x01), Math.atan2(J.y11, J.x11), !m), s.arc(0, 0, h, Math.atan2(J.cy + J.y11, J.cx + J.x11), Math.atan2(B.cy + B.y11, B.cx + B.x11), !m), s.arc(B.cx, B.cy, k, Math.atan2(B.y11, B.x11), Math.atan2(B.y01, B.x01), !m))
                } else s.moveTo(A, D), s.arc(0, 0, h, p, _, !m); else s.moveTo(A, D);
                if (f > Bs && b > Bs)if (N > Bs) {
                    var J = tn(F, L, P, E, f, -N, m), B = tn(A, D, U, H, f, -N, m);
                    s.lineTo(J.cx + J.x01, J.cy + J.y01), T > N ? s.arc(J.cx, J.cy, N, Math.atan2(J.y01, J.x01), Math.atan2(B.y01, B.x01), !m) : (s.arc(J.cx, J.cy, N, Math.atan2(J.y01, J.x01), Math.atan2(J.y11, J.x11), !m), s.arc(0, 0, f, Math.atan2(J.cy + J.y11, J.cx + J.x11), Math.atan2(B.cy + B.y11, B.cx + B.x11), m), s.arc(B.cx, B.cy, N, Math.atan2(B.y11, B.x11), Math.atan2(B.y01, B.x01), !m))
                } else s.arc(0, 0, f, v, y, m); else s.lineTo(F, L)
            } else s.moveTo(0, 0);
            return s.closePath(), t ? (s = null, t + "" || null) : void 0
        }

        var n = Wt, e = Vt, r = Xt(0), i = null, a = $t, u = Zt, o = Gt, s = null, c = null;
        return t.centroid = function () {
            var t = (+n.apply(this, arguments) + +e.apply(this, arguments)) / 2, r = (+a.apply(this, arguments) + +u.apply(this, arguments)) / 2 - Xs / 2;
            return [Math.cos(r) * t, Math.sin(r) * t]
        }, t.innerRadius = function (e) {
            return arguments.length ? (n = "function" == typeof e ? e : Xt(+e), t) : n
        }, t.outerRadius = function (n) {
            return arguments.length ? (e = "function" == typeof n ? n : Xt(+n), t) : e
        }, t.cornerRadius = function (n) {
            return arguments.length ? (r = "function" == typeof n ? n : Xt(+n), t) : r
        }, t.padRadius = function (n) {
            return arguments.length ? (i = null == n ? null : "function" == typeof n ? n : Xt(+n), t) : i
        }, t.startAngle = function (n) {
            return arguments.length ? (a = "function" == typeof n ? n : Xt(+n), t) : a
        }, t.endAngle = function (n) {
            return arguments.length ? (u = "function" == typeof n ? n : Xt(+n), t) : u
        }, t.padAngle = function (n) {
            return arguments.length ? (o = "function" == typeof n ? n : Xt(+n), t) : o
        }, t.context = function (n) {
            return arguments.length ? (s = c = null == n ? null : n, t) : s
        }, t
    }

    function en(t, n) {
        return n.length < 2 ? t : (n = $s.call(n), n[0] = null, function (e) {
            return n[0] = e, t.apply(null, n)
        })
    }

    function rn(t) {
        this._context = t
    }

    function an(t) {
        return new rn(t)
    }

    function un(t) {
        return t[0]
    }

    function on(t) {
        return t[1]
    }

    function sn() {
        function t(t) {
            var c, f, h, l, d, g = t.length, m = !1, p = new Array(g), _ = new Array(g);
            for (u || (s = o(d = Rt())), c = 0; g >= c; ++c) {
                if (!(g > c && a(l = t[c], c, t)) === m)if (m = !m)f = c, s.areaStart(), s.lineStart(); else {
                    for (s.lineEnd(), s.lineStart(), h = c - 1; h >= f; --h)s.point(p[h], _[h]);
                    s.lineEnd(), s.areaEnd()
                }
                m && (p[c] = +n(l, c, t), _[c] = +r(l, c, t), s.point(e ? +e(l, c, t) : p[c], i ? +i(l, c, t) : _[c]))
            }
            return d ? (s = null, d + "" || null) : void 0
        }

        var n = un, e = null, r = Xt(0), i = on, a = Xt(!0), u = null, o = an, s = null;
        return t.x = function (r) {
            return arguments.length ? (n = "function" == typeof r ? r : Xt(+r), e = null, t) : n
        }, t.x0 = function (e) {
            return arguments.length ? (n = "function" == typeof e ? e : Xt(+e), t) : n
        }, t.x1 = function (n) {
            return arguments.length ? (e = null == n ? null : "function" == typeof n ? n : Xt(+n), t) : e
        }, t.y = function (n) {
            return arguments.length ? (r = "function" == typeof n ? n : Xt(+n), i = null, t) : r
        }, t.y0 = function (n) {
            return arguments.length ? (r = "function" == typeof n ? n : Xt(+n), t) : r
        }, t.y1 = function (n) {
            return arguments.length ? (i = null == n ? null : "function" == typeof n ? n : Xt(+n), t) : i
        }, t.defined = function (n) {
            return arguments.length ? (a = "function" == typeof n ? n : Xt(!!n), t) : a
        }, t.curve = function (n) {
            return arguments.length ? (o = en(n, arguments), null != u && (s = o(u)), t) : o
        }, t.context = function (n) {
            return arguments.length ? (null == n ? u = s = null : s = o(u = n), t) : u
        }, t
    }

    function cn() {
        function t(t) {
            var o, s, c, f = t.length, h = !1;
            for (i || (u = a(c = Rt())), o = 0; f >= o; ++o)!(f > o && r(s = t[o], o, t)) === h && ((h = !h) ? u.lineStart() : u.lineEnd()), h && u.point(+n(s, o, t), +e(s, o, t));
            return c ? (u = null, c + "" || null) : void 0
        }

        var n = un, e = on, r = Xt(!0), i = null, a = an, u = null;
        return t.x = function (e) {
            return arguments.length ? (n = "function" == typeof e ? e : Xt(+e), t) : n
        }, t.y = function (n) {
            return arguments.length ? (e = "function" == typeof n ? n : Xt(+n), t) : e
        }, t.defined = function (n) {
            return arguments.length ? (r = "function" == typeof n ? n : Xt(!!n), t) : r
        }, t.curve = function (n) {
            return arguments.length ? (a = en(n, arguments), null != i && (u = a(i)), t) : a
        }, t.context = function (n) {
            return arguments.length ? (null == n ? i = u = null : u = a(i = n), t) : i
        }, t
    }

    function fn(t, n) {
        return t > n ? -1 : n > t ? 1 : n >= t ? 0 : NaN
    }

    function hn(t) {
        return t
    }

    function ln() {
        function t(t) {
            for (var o, s, c = t.length, f = 0, h = new Array(c), l = new Array(c), d = +i.apply(this, arguments), g = Math.min(Vs, Math.max(-Vs, a.apply(this, arguments) - d)), m = Math.min(Math.abs(g) / c, u.apply(this, arguments)), p = m * (0 > g ? -1 : 1), _ = 0; c > _; ++_)(s = l[h[_] = _] = +n(t[_], _, t)) > 0 && (f += s);
            null != e ? h.sort(function (t, n) {
                return e(l[t], l[n])
            }) : null !== r && h.sort(function (n, e) {
                return r(t[n], t[e])
            });
            for (var y, _ = 0, v = f ? (g - c * p) / f : 0; c > _; ++_, d = o)y = h[_], s = l[y], o = d + (s > 0 ? s * v : 0) + p, l[y] = {
                data: t[y],
                index: _,
                value: s,
                startAngle: d,
                endAngle: o,
                padAngle: m
            };
            return l
        }

        var n = hn, e = fn, r = null, i = Xt(0), a = Xt(Vs), u = Xt(0);
        return t.value = function (e) {
            return arguments.length ? (n = "function" == typeof e ? e : Xt(+e), t) : n
        }, t.sortValues = function (n) {
            return arguments.length ? (e = n, r = null, t) : e
        }, t.sort = function (n) {
            return arguments.length ? (r = n, e = null, t) : r
        }, t.startAngle = function (n) {
            return arguments.length ? (i = "function" == typeof n ? n : Xt(+n), t) : i
        }, t.endAngle = function (n) {
            return arguments.length ? (a = "function" == typeof n ? n : Xt(+n), t) : a
        }, t.padAngle = function (n) {
            return arguments.length ? (u = "function" == typeof n ? n : Xt(+n), t) : u
        }, t
    }

    function dn(t) {
        this._curve = t
    }

    function gn(t, n) {
        function e(n) {
            return new dn(t(n))
        }

        return t = en(t, n), e._curve = t, e
    }

    function mn() {
        var t = sn(), n = t.curve;
        return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.curve = function (t) {
            return arguments.length ? n(gn(t, arguments)) : n()._curve
        }, t.curve(an)
    }

    function pn() {
        var t = cn(), n = t.curve;
        return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function (t) {
            return arguments.length ? n(gn(t, arguments)) : n()._curve
        }, t.curve(an)
    }

    function _n() {
        function t() {
            var t;
            return r || (r = t = Rt()), n.apply(this, arguments).draw(r, +e.apply(this, arguments)), t ? (r = null, t + "" || null) : void 0
        }

        var n = Xt(Zs), e = Xt(64), r = null;
        return t.type = function (e) {
            return arguments.length ? (n = "function" == typeof e ? e : Xt(e), t) : n
        }, t.size = function (n) {
            return arguments.length ? (e = "function" == typeof n ? n : Xt(+n), t) : e
        }, t.context = function (n) {
            return arguments.length ? (r = null == n ? null : n, t) : r
        }, t
    }

    function yn() {
    }

    function vn(t, n, e) {
        t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6)
    }

    function bn(t) {
        this._context = t
    }

    function xn(t) {
        return new bn(t)
    }

    function Mn(t) {
        this._context = t
    }

    function wn(t) {
        return new Mn(t)
    }

    function Tn(t) {
        this._context = t
    }

    function Nn(t) {
        return new Tn(t)
    }

    function kn(t, n) {
        this._basis = xn(t), this._beta = n
    }

    function Sn(t, n) {
        return null == n ? new kn(t, .85) : 1 === (n = +n) ? xn(t) : new kn(t, n)
    }

    function Cn(t, n, e) {
        t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2)
    }

    function An(t, n) {
        this._context = t, this._k = n
    }

    function Dn(t, n) {
        return new An(t, (null == n ? 1 : 1 - n) / 6)
    }

    function Fn(t, n) {
        this._context = t, this._k = n
    }

    function Ln(t, n) {
        return new Fn(t, (null == n ? 1 : 1 - n) / 6)
    }

    function Pn(t, n) {
        this._context = t, this._k = n
    }

    function En(t, n) {
        return new Pn(t, (null == n ? 1 : 1 - n) / 6)
    }

    function Un(t, n, e) {
        var r = t._x1, i = t._y1, a = t._x2, u = t._y2;
        if (t._l01_a > Bs) {
            var o = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a, s = 3 * t._l01_a * (t._l01_a + t._l12_a);
            r = (r * o - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / s, i = (i * o - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / s
        }
        if (t._l23_a > Bs) {
            var c = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a, f = 3 * t._l23_a * (t._l23_a + t._l12_a);
            a = (a * c + t._x1 * t._l23_2a - n * t._l12_2a) / f, u = (u * c + t._y1 * t._l23_2a - e * t._l12_2a) / f
        }
        t._context.bezierCurveTo(r, i, a, u, t._x2, t._y2)
    }

    function Hn(t, n) {
        this._context = t, this._alpha = n
    }

    function On(t, n) {
        return (n = null == n ? .5 : +n) ? new Hn(t, n) : Dn(t, 0)
    }

    function Rn(t, n) {
        this._context = t, this._alpha = n
    }

    function jn(t, n) {
        return (n = null == n ? .5 : +n) ? new Rn(t, n) : Ln(t, 0)
    }

    function qn(t, n) {
        this._context = t, this._alpha = n
    }

    function Yn(t, n) {
        return (n = null == n ? .5 : +n) ? new qn(t, n) : En(t, 0)
    }

    function zn(t) {
        this._context = t
    }

    function In(t) {
        return new zn(t)
    }

    function Jn(t) {
        return 0 > t ? -1 : 1
    }

    function Bn(t, n, e) {
        var r = t._x1 - t._x0, i = n - t._x1, a = (t._y1 - t._y0) / r, u = (e - t._y1) / i, o = (a * i + u * r) / (r + i);
        return (Jn(a) + Jn(u)) * Math.min(Math.abs(a), Math.abs(u), .5 * Math.abs(o)) || 0
    }

    function Xn(t, n) {
        var e = t._x1 - t._x0;
        return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
    }

    function Wn(t, n, e) {
        var r = t._x0, i = t._y0, a = t._x1, u = t._y1, o = (a - r) / 3;
        t._context.bezierCurveTo(r + o, i + o * n, a - o, u - o * e, a, u)
    }

    function Vn(t) {
        this._context = t
    }

    function $n(t) {
        return new Vn(t)
    }

    function Zn(t) {
        this._context = t
    }

    function Gn(t) {
        var n, e, r = t.length - 1, i = new Array(r), a = new Array(r), u = new Array(r);
        for (i[0] = 0, a[0] = 2, u[0] = t[0] + 2 * t[1], n = 1; r - 1 > n; ++n)i[n] = 1, a[n] = 4, u[n] = 4 * t[n] + 2 * t[n + 1];
        for (i[r - 1] = 2, a[r - 1] = 7, u[r - 1] = 8 * t[r - 1] + t[r], n = 1; r > n; ++n)e = i[n] / a[n - 1], a[n] -= e, u[n] -= e * u[n - 1];
        for (i[r - 1] = u[r - 1] / a[r - 1], n = r - 2; n >= 0; --n)i[n] = (u[n] - i[n + 1]) / a[n];
        for (a[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; r - 1 > n; ++n)a[n] = 2 * t[n + 1] - i[n + 1];
        return [i, a]
    }

    function Kn(t) {
        return new Zn(t)
    }

    function Qn(t, n) {
        this._context = t, this._t = n
    }

    function te(t) {
        return new Qn(t, .5)
    }

    function ne(t) {
        return new Qn(t, 0)
    }

    function ee(t) {
        return new Qn(t, 1)
    }

    function re(t, n) {
        if ((r = t.length) > 1)for (var e, r, i = 1, a = t[n[0]], u = a.length; r > i; ++i) {
            e = a, a = t[n[i]];
            for (var o = 0; u > o; ++o)a[o][1] += a[o][0] = isNaN(e[o][1]) ? e[o][0] : e[o][1]
        }
    }

    function ie(t) {
        for (var n = t.length, e = new Array(n); --n >= 0;)e[n] = n;
        return e
    }

    function ae(t, n) {
        return t[n]
    }

    function ue() {
        function t(t) {
            for (var a = n.apply(this, arguments), u = t.length, o = a.length, s = new Array(o), c = 0; o > c; ++c) {
                for (var f, h = a[c], l = s[c] = new Array(u), d = 0; u > d; ++d)l[d] = f = [0, +i(t[d], h, d, t)], f.data = t[d];
                l.key = h
            }
            for (var c = 0, g = e(s); o > c; ++c)s[g[c]].index = c;
            return r(s, g), s
        }

        var n = Xt([]), e = ie, r = re, i = ae;
        return t.keys = function (e) {
            return arguments.length ? (n = "function" == typeof e ? e : Xt(mc.call(e)), t) : n
        }, t.value = function (n) {
            return arguments.length ? (i = "function" == typeof n ? n : Xt(+n), t) : i
        }, t.order = function (n) {
            return arguments.length ? (e = null == n ? orderDefault : "function" == typeof n ? n : Xt(mc.call(n)), t) : e
        }, t.offset = function (n) {
            return arguments.length ? (r = null == n ? offsetZero : n, t) : r
        }, t
    }

    function oe(t, n) {
        if ((e = t.length) > 0) {
            for (var e, r = 0, i = t[0].length; i > r; ++r) {
                for (var a = 0, u = 0; e > a; ++a)u += t[a][r][1] || 0;
                if (u)for (var a = 0; e > a; ++a)t[a][r][1] /= u
            }
            re(t, n)
        }
    }

    function se(t, n) {
        if ((e = t.length) > 0) {
            for (var e, r = 0, i = t[n[0]], a = i.length; a > r; ++r) {
                for (var u = 0, o = 0; e > u; ++u)o += t[u][r][1] || 0;
                i[r][1] += i[r][0] = -o / 2
            }
            re(t, n)
        }
    }

    function ce(t, n) {
        if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
            for (var e, r, i, a = 0, u = 1; r > u; ++u) {
                for (var o = 0, s = 0, c = 0; i > o; ++o) {
                    for (var f = t[n[o]], h = f[u][1] || 0, l = f[u - 1][1] || 0, d = (h - l) / 2, g = 0; o > g; ++g) {
                        var m = t[n[g]], p = m[u][1] || 0, _ = m[u - 1][1] || 0;
                        d += p - _
                    }
                    s += h, c += d * h
                }
                e[u - 1][1] += e[u - 1][0] = a, s && (a -= c / s)
            }
            e[u - 1][1] += e[u - 1][0] = a, re(t, n)
        }
    }

    function fe(t) {
        var n = t.map(he);
        return ie(t).sort(function (t, e) {
            return n[t] - n[e]
        })
    }

    function he(t) {
        for (var n, e = 0, r = -1, i = t.length; ++r < i;)(n = +t[r][1]) && (e += n);
        return e
    }

    function le(t) {
        return fe(t).reverse()
    }

    function de(t) {
        var n, e, r = t.length, i = t.map(he), a = ie(t).sort(function (t, n) {
            return i[n] - i[t]
        }), u = 0, o = 0, s = [], c = [];
        for (n = 0; r > n; ++n)e = a[n], o > u ? (u += i[e], s.push(e)) : (o += i[e], c.push(e));
        return c.reverse().concat(s)
    }

    function ge(t) {
        return ie(t).reverse()
    }

    function me() {
    }

    function pe(t) {
        var n;
        return t = (t + "").trim().toLowerCase(), (n = yc.exec(t)) ? (n = parseInt(n[1], 16), new ve(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n)) : (n = vc.exec(t)) ? _e(parseInt(n[1], 16)) : (n = bc.exec(t)) ? new ve(n[1], n[2], n[3]) : (n = xc.exec(t)) ? new ve(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100) : (n = Mc.exec(t)) ? new xe(n[1], n[2] / 100, n[3] / 100) : wc.hasOwnProperty(t) ? _e(wc[t]) : null
    }

    function _e(t) {
        return new ve(t >> 16 & 255, t >> 8 & 255, 255 & t)
    }

    function ye(t, n, e) {
        return 1 === arguments.length && (t instanceof me || (t = pe(t)), t ? (t = t.rgb(), e = t.b, n = t.g, t = t.r) : t = n = e = NaN), new ve(t, n, e)
    }

    function ve(t, n, e) {
        this.r = +t, this.g = +n, this.b = +e
    }

    function be(t, n, e) {
        if (1 === arguments.length)if (t instanceof xe)e = t.l, n = t.s, t = t.h; else if (t instanceof me || (t = pe(t)), t) {
            if (t instanceof xe)return t;
            t = t.rgb();
            var r = t.r / 255, i = t.g / 255, a = t.b / 255, u = Math.min(r, i, a), o = Math.max(r, i, a), s = o - u;
            e = (o + u) / 2, s ? (n = .5 > e ? s / (o + u) : s / (2 - o - u), t = r === o ? (i - a) / s + 6 * (a > i) : i === o ? (a - r) / s + 2 : (r - i) / s + 4, t *= 60) : (t = NaN, n = e > 0 && 1 > e ? 0 : t)
        } else t = n = e = NaN;
        return new xe(t, n, e)
    }

    function xe(t, n, e) {
        this.h = +t, this.s = +n, this.l = +e
    }

    function Me(t, n, e) {
        return 255 * (60 > t ? n + (e - n) * t / 60 : 180 > t ? e : 240 > t ? n + (e - n) * (240 - t) / 60 : n)
    }

    function we(t, n, e) {
        if (1 === arguments.length)if (t instanceof Te)e = t.b, n = t.a, t = t.l; else if (t instanceof De) {
            var r = t.h * kc;
            e = Math.sin(r) * t.c, n = Math.cos(r) * t.c, t = t.l
        } else {
            t instanceof ve || (t = ye(t));
            var i = Ce(t.r), a = Ce(t.g), e = Ce(t.b), u = Ne((.4124564 * i + .3575761 * a + .1804375 * e) / Ac), o = Ne((.2126729 * i + .7151522 * a + .072175 * e) / Dc), s = Ne((.0193339 * i + .119192 * a + .9503041 * e) / Fc);
            e = 200 * (o - s), n = 500 * (u - o), t = 116 * o - 16
        }
        return new Te(t, n, e)
    }

    function Te(t, n, e) {
        this.l = +t, this.a = +n, this.b = +e
    }

    function Ne(t) {
        return t > Uc ? Math.pow(t, 1 / 3) : t / Ec + Lc
    }

    function ke(t) {
        return t > Pc ? t * t * t : Ec * (t - Lc)
    }

    function Se(t) {
        return 255 * (.0031308 >= t ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
    }

    function Ce(t) {
        return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
    }

    function Ae(t, n, e) {
        return 1 === arguments.length && (t instanceof De ? (e = t.l, n = t.c, t = t.h) : (t instanceof Te || (t = we(t)), e = t.l, n = Math.sqrt(t.a * t.a + t.b * t.b), t = Math.atan2(t.b, t.a) * Sc, 0 > t && (t += 360))), new De(t, n, e)
    }

    function De(t, n, e) {
        this.h = +t, this.c = +n, this.l = +e
    }

    function Fe(t, n, e) {
        if (1 === arguments.length)if (t instanceof Le)e = t.l, n = t.s, t = t.h; else {
            t instanceof ve || (t = ye(t));
            var r = t.r / 255, i = t.g / 255, a = t.b / 255;
            e = (Bc * a + Ic * r - Jc * i) / (Bc + Ic - Jc);
            var u = a - e, o = (zc * (i - e) - qc * u) / Yc;
            n = Math.sqrt(o * o + u * u) / (zc * e * (1 - e)), t = n ? Math.atan2(o, u) * Sc - 120 : NaN, 0 > t && (t += 360)
        }
        return new Le(t, n, e)
    }

    function Le(t, n, e) {
        this.h = +t, this.s = +n, this.l = +e
    }

    function Pe(t, n) {
        t = ye(t), n = ye(n);
        var e = t.r, r = t.g, i = t.b, a = n.r - e, u = n.g - r, o = n.b - i;
        return function (n) {
            return t.r = e + a * n, t.g = r + u * n, t.b = i + o * n, t + ""
        }
    }

    function Ee(t, n) {
        var e, r = [], i = [], a = t ? t.length : 0, u = n ? n.length : 0, o = Math.min(a, u);
        for (e = 0; o > e; ++e)r.push(qe(t[e], n[e]));
        for (; a > e; ++e)i[e] = t[e];
        for (; u > e; ++e)i[e] = n[e];
        return function (t) {
            for (e = 0; o > e; ++e)i[e] = r[e](t);
            return i
        }
    }

    function Ue(t, n) {
        return t = +t, n -= t, function (e) {
            return t + n * e
        }
    }

    function He(t, n) {
        var e, r = {}, i = {};
        (null === t || "object" != typeof t) && (t = {}), (null === n || "object" != typeof n) && (n = {});
        for (e in t)e in n ? r[e] = qe(t[e], n[e]) : i[e] = t[e];
        for (e in n)e in t || (i[e] = n[e]);
        return function (t) {
            for (e in r)i[e] = r[e](t);
            return i
        }
    }

    function Oe(t) {
        return function () {
            return t
        }
    }

    function Re(t) {
        return function (n) {
            return t(n) + ""
        }
    }

    function je(t, n) {
        var e, r, i, a = Vc.lastIndex = $c.lastIndex = 0, u = -1, o = [], s = [];
        for (t += "", n += ""; (e = Vc.exec(t)) && (r = $c.exec(n));)(i = r.index) > a && (i = n.slice(a, i), o[u] ? o[u] += i : o[++u] = i), (e = e[0]) === (r = r[0]) ? o[u] ? o[u] += r : o[++u] = r : (o[++u] = null, s.push({
            i: u,
            x: Ue(e, r)
        })), a = $c.lastIndex;
        return a < n.length && (i = n.slice(a), o[u] ? o[u] += i : o[++u] = i), o.length < 2 ? s[0] ? Re(s[0].x) : Oe(n) : (n = s.length, function (t) {
            for (var e, r = 0; n > r; ++r)o[(e = s[r]).i] = e.x(t);
            return o.join("")
        })
    }

    function qe(t, n) {
        for (var e, r = Zc.length; --r >= 0 && !(e = Zc[r](t, n)););
        return e
    }

    function Ye(t, n) {
        return t = +t, n -= t, function (e) {
            return Math.round(t + n * e)
        }
    }

    function ze(t) {
        Wc || (Wc = document.createElementNS("http://www.w3.org/2000/svg", "g")), t && (Wc.setAttribute("transform", t), n = Wc.transform.baseVal.consolidate());
        var n, e = n ? n.matrix : Kc, r = [e.a, e.b], i = [e.c, e.d], a = Je(r), u = Ie(r, i), o = Je(Be(i, r, -u)) || 0;
        r[0] * i[1] < i[0] * r[1] && (r[0] *= -1, r[1] *= -1, a *= -1, u *= -1), this.rotate = (a ? Math.atan2(r[1], r[0]) : Math.atan2(-i[0], i[1])) * Gc, this.translate = [e.e, e.f], this.scale = [a, o], this.skew = o ? Math.atan2(u, o) * Gc : 0
    }

    function Ie(t, n) {
        return t[0] * n[0] + t[1] * n[1]
    }

    function Je(t) {
        var n = Math.sqrt(Ie(t, t));
        return n && (t[0] /= n, t[1] /= n), n
    }

    function Be(t, n, e) {
        return t[0] += e * n[0], t[1] += e * n[1], t
    }

    function Xe(t) {
        return t.length ? t.pop() + "," : ""
    }

    function We(t, n, e, r) {
        if (t[0] !== n[0] || t[1] !== n[1]) {
            var i = e.push("translate(", null, ",", null, ")");
            r.push({i: i - 4, x: Ue(t[0], n[0])}, {i: i - 2, x: Ue(t[1], n[1])})
        } else(n[0] || n[1]) && e.push("translate(" + n + ")")
    }

    function Ve(t, n, e, r) {
        t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), r.push({
            i: e.push(Xe(e) + "rotate(", null, ")") - 2,
            x: Ue(t, n)
        })) : n && e.push(Xe(e) + "rotate(" + n + ")")
    }

    function $e(t, n, e, r) {
        t !== n ? r.push({
            i: e.push(Xe(e) + "skewX(", null, ")") - 2,
            x: Ue(t, n)
        }) : n && e.push(Xe(e) + "skewX(" + n + ")")
    }

    function Ze(t, n, e, r) {
        if (t[0] !== n[0] || t[1] !== n[1]) {
            var i = e.push(Xe(e) + "scale(", null, ",", null, ")");
            r.push({i: i - 4, x: Ue(t[0], n[0])}, {i: i - 2, x: Ue(t[1], n[1])})
        } else(1 !== n[0] || 1 !== n[1]) && e.push(Xe(e) + "scale(" + n + ")")
    }

    function Ge(t, n) {
        var e = [], r = [];
        return t = new ze(t), n = new ze(n), We(t.translate, n.translate, e, r), Ve(t.rotate, n.rotate, e, r), $e(t.skew, n.skew, e, r), Ze(t.scale, n.scale, e, r), t = n = null, function (t) {
            for (var n, i = -1, a = r.length; ++i < a;)e[(n = r[i]).i] = n.x(t);
            return e.join("")
        }
    }

    function Ke(t) {
        return ((t = Math.exp(t)) + 1 / t) / 2
    }

    function Qe(t) {
        return ((t = Math.exp(t)) - 1 / t) / 2
    }

    function tr(t) {
        return ((t = Math.exp(2 * t)) - 1) / (t + 1)
    }

    function nr(t, n) {
        var e, r, i = t[0], a = t[1], u = t[2], o = n[0], s = n[1], c = n[2], f = o - i, h = s - a, l = f * f + h * h;
        if (ef > l)r = Math.log(c / u) / Qc, e = function (t) {
            return [i + t * f, a + t * h, u * Math.exp(Qc * t * r)]
        }; else {
            var d = Math.sqrt(l), g = (c * c - u * u + nf * l) / (2 * u * tf * d), m = (c * c - u * u - nf * l) / (2 * c * tf * d), p = Math.log(Math.sqrt(g * g + 1) - g), _ = Math.log(Math.sqrt(m * m + 1) - m);
            r = (_ - p) / Qc, e = function (t) {
                var n = t * r, e = Ke(p), o = u / (tf * d) * (e * tr(Qc * n + p) - Qe(p));
                return [i + o * f, a + o * h, u * e / Ke(Qc * n + p)]
            }
        }
        return e.duration = 1e3 * r, e
    }

    function er(t, n) {
        var e = t - n;
        return e > 180 || -180 > e ? e - 360 * Math.round(e / 360) : e
    }

    function rr(t, n) {
        t = be(t), n = be(n);
        var e = isNaN(t.h) ? n.h : t.h, r = isNaN(t.s) ? n.s : t.s, i = t.l, a = isNaN(n.h) ? 0 : er(n.h, e), u = isNaN(n.s) ? 0 : n.s - r, o = n.l - i;
        return function (n) {
            return t.h = e + a * n, t.s = r + u * n, t.l = i + o * n, t + ""
        }
    }

    function ir(t, n) {
        t = be(t), n = be(n);
        var e = isNaN(t.h) ? n.h : t.h, r = isNaN(t.s) ? n.s : t.s, i = t.l, a = isNaN(n.h) ? 0 : n.h - e, u = isNaN(n.s) ? 0 : n.s - r, o = n.l - i;
        return function (n) {
            return t.h = e + a * n, t.s = r + u * n, t.l = i + o * n, t + ""
        }
    }

    function ar(t, n) {
        t = we(t), n = we(n);
        var e = t.l, r = t.a, i = t.b, a = n.l - e, u = n.a - r, o = n.b - i;
        return function (n) {
            return t.l = e + a * n, t.a = r + u * n, t.b = i + o * n, t + ""
        }
    }

    function ur(t, n) {
        t = Ae(t), n = Ae(n);
        var e = isNaN(t.h) ? n.h : t.h, r = isNaN(t.c) ? n.c : t.c, i = t.l, a = isNaN(n.h) ? 0 : er(n.h, e), u = isNaN(n.c) ? 0 : n.c - r, o = n.l - i;
        return function (n) {
            return t.h = e + a * n, t.c = r + u * n, t.l = i + o * n, t + ""
        }
    }

    function or(t, n) {
        t = Ae(t), n = Ae(n);
        var e = isNaN(t.h) ? n.h : t.h, r = isNaN(t.c) ? n.c : t.c, i = t.l, a = isNaN(n.h) ? 0 : n.h - e, u = isNaN(n.c) ? 0 : n.c - r, o = n.l - i;
        return function (n) {
            return t.h = e + a * n, t.c = r + u * n, t.l = i + o * n, t + ""
        }
    }

    function sr(t, n, e) {
        arguments.length < 3 && (e = 1), t = Fe(t), n = Fe(n);
        var r = isNaN(t.h) ? n.h : t.h, i = isNaN(t.s) ? n.s : t.s, a = t.l, u = isNaN(n.h) ? 0 : er(n.h, r), o = isNaN(n.s) ? 0 : n.s - i, s = n.l - a;
        return function (n) {
            return t.h = r + u * n, t.s = i + o * n, t.l = a + s * Math.pow(n, e), t + ""
        }
    }

    function cr(t, n, e) {
        arguments.length < 3 && (e = 1), t = Fe(t), n = Fe(n);
        var r = isNaN(t.h) ? n.h : t.h, i = isNaN(t.s) ? n.s : t.s, a = t.l, u = isNaN(n.h) ? 0 : n.h - r, o = isNaN(n.s) ? 0 : n.s - i, s = n.l - a;
        return function (n) {
            return t.h = r + u * n, t.s = i + o * n, t.l = a + s * Math.pow(n, e), t + ""
        }
    }

    function fr(t, n) {
        return n = rf.call(n), n[0] = null, n.unshift(null), function (e, r) {
            return n[0] = e, n[1] = r, t.apply(null, n)
        }
    }

    function hr(t) {
        return 1 === arguments.length ? t : fr(t, arguments)
    }

    function lr() {
        return new dr(arguments)
    }

    function dr(t) {
        function n(t) {
            var n = (t += "").indexOf("."), e = t;
            if (n >= 0 ? t = t.slice(0, n) : e += ".", t && !u.hasOwnProperty(t))throw new Error("unknown type: " + t);
            return {type: t, name: e}
        }

        function e(t) {
            return function () {
                for (var n, e, r = u[t], i = -1, a = r.length; ++i < a;)(e = (n = r[i]).value) && e.apply(this, arguments);
                return s
            }
        }

        var r, i = -1, a = t.length, u = {}, o = {}, s = this;
        for (s.on = function (t, e) {
            if (t = n(t), arguments.length < 2)return (e = o[t.name]) && e.value;
            if (t.type) {
                var r, i = u[t.type], a = o[t.name];
                a && (a.value = null, r = i.indexOf(a), u[t.type] = i = i.slice(0, r).concat(i.slice(r + 1)), delete o[t.name]), e && (e = {value: e}, o[t.name] = e, i.push(e))
            } else if (null == e)for (var c in u)if (e = o[c + t.name]) {
                e.value = null;
                var i = u[c], r = i.indexOf(e);
                u[c] = i.slice(0, r).concat(i.slice(r + 1)), delete o[e.name]
            }
            return s
        }; ++i < a;) {
            if (r = t[i] + "", !r || r in s)throw new Error("illegal or duplicate type: " + r);
            u[r] = [], s[r] = e(r)
        }
    }

    function gr(t) {
        return new yr(t)
    }

    function mr(t) {
        return new Function("d", "return {" + t.map(function (t, n) {
                return JSON.stringify(t) + ": d[" + n + "]"
            }).join(",") + "}")
    }

    function pr(t, n) {
        var e = mr(t);
        return function (r, i) {
            return n(e(r), i, t)
        }
    }

    function _r(t) {
        var n = Object.create(null), e = [];
        return t.forEach(function (t) {
            for (var r in t)r in n || e.push(n[r] = r)
        }), e
    }

    function yr(t) {
        function n(n) {
            return n.map(e).join(t)
        }

        function e(t) {
            return r.test(t) ? '"' + t.replace(/\"/g, '""') + '"' : t
        }

        var r = new RegExp('["' + t + "\n]"), i = t.charCodeAt(0);
        this.parse = function (t, n) {
            var e, r, i = this.parseRows(t, function (t, i) {
                return e ? e(t, i - 1) : (r = t, void(e = n ? pr(t, n) : mr(t)))
            });
            return i.columns = r, i
        }, this.parseRows = function (t, n) {
            function e() {
                if (f >= c)return o;
                if (a)return a = !1, u;
                var n = f;
                if (34 === t.charCodeAt(n)) {
                    for (var e = n; e++ < c;)if (34 === t.charCodeAt(e)) {
                        if (34 !== t.charCodeAt(e + 1))break;
                        ++e
                    }
                    f = e + 2;
                    var r = t.charCodeAt(e + 1);
                    return 13 === r ? (a = !0, 10 === t.charCodeAt(e + 2) && ++f) : 10 === r && (a = !0), t.slice(n + 1, e).replace(/""/g, '"')
                }
                for (; c > f;) {
                    var r = t.charCodeAt(f++), s = 1;
                    if (10 === r)a = !0; else if (13 === r)a = !0, 10 === t.charCodeAt(f) && (++f, ++s); else if (r !== i)continue;
                    return t.slice(n, f - s)
                }
                return t.slice(n)
            }

            for (var r, a, u = {}, o = {}, s = [], c = t.length, f = 0, h = 0; (r = e()) !== o;) {
                for (var l = []; r !== u && r !== o;)l.push(r), r = e();
                n && null == (l = n(l, h++)) || s.push(l)
            }
            return s
        }, this.format = function (n, r) {
            return arguments.length < 2 && (r = _r(n)), [r.map(e).join(t)].concat(n.map(function (n) {
                return r.map(function (t) {
                    return e(n[t])
                }).join(t)
            })).join("\n")
        }, this.formatRows = function (t) {
            return t.map(n).join("\n")
        }
    }

    function vr(t, n) {
        function e() {
            var t, n = c.status;
            if (!n && xr(c) || n >= 200 && 300 > n || 304 === n) {
                if (a)try {
                    t = a.call(r, c)
                } catch (e) {
                    return void o.error.call(r, e)
                } else t = c;
                o.load.call(r, t)
            } else o.error.call(r, c)
        }

        var r, i, a, u, o = lr("beforesend", "progress", "load", "error"), s = E(), c = new XMLHttpRequest, f = 0;
        return "undefined" == typeof XDomainRequest || "withCredentials" in c || !/^(http(s)?:)?\/\//.test(t) || (c = new XDomainRequest), "onload" in c ? c.onload = c.onerror = c.ontimeout = e : c.onreadystatechange = function () {
            c.readyState > 3 && e()
        }, c.onprogress = function (t) {
            o.progress.call(r, t)
        }, r = {
            header: function (t, n) {
                return t = (t + "").toLowerCase(), arguments.length < 2 ? s.get(t) : (null == n ? s.remove(t) : s.set(t, n + ""), r)
            }, mimeType: function (t) {
                return arguments.length ? (i = null == t ? null : t + "", r) : i
            }, responseType: function (t) {
                return arguments.length ? (u = t, r) : u
            }, timeout: function (t) {
                return arguments.length ? (f = +t, r) : f
            }, response: function (t) {
                return a = t, r
            }, get: function (t, n) {
                return r.send("GET", t, n)
            }, post: function (t, n) {
                return r.send("POST", t, n)
            }, send: function (n, e, a) {
                return a || "function" != typeof e || (a = e, e = null), a && 1 === a.length && (a = br(a)), c.open(n, t, !0), null == i || s.has("accept") || s.set("accept", i + ",*/*"), c.setRequestHeader && s.each(function (t, n) {
                    c.setRequestHeader(n, t)
                }), null != i && c.overrideMimeType && c.overrideMimeType(i), null != u && (c.responseType = u), f > 0 && (c.timeout = f), a && r.on("error", a).on("load", function (t) {
                    a(null, t)
                }), o.beforesend.call(r, c), c.send(null == e ? null : e), r
            }, abort: function () {
                return c.abort(), r
            }, on: function () {
                var t = o.on.apply(o, arguments);
                return t === o ? r : t
            }
        }, n ? r.get(n) : r
    }

    function br(t) {
        return function (n, e) {
            t(null == n ? e : null)
        }
    }

    function xr(t) {
        var n = t.responseType;
        return n && "text" !== n ? t.response : t.responseText
    }

    function Mr(t, n) {
        return function (e, r) {
            var i = vr(e).mimeType(t).response(n);
            return r ? i.get(r) : i
        }
    }

    function wr(t, n) {
        return function (e, r, i) {
            arguments.length < 3 && (i = r, r = null);
            var a = vr(e).mimeType(t);
            return a.row = function (t) {
                return arguments.length ? a.response(Tr(n, r = t)) : r
            }, a.row(r), i ? a.get(i) : a
        }
    }

    function Tr(t, n) {
        return function (e) {
            return t.parse(e.responseText, n)
        }
    }

    function Nr(t, n, e) {
        this.id = ++_f, this.restart(t, n, e)
    }

    function kr(t, n, e) {
        return new Nr(t, n, e)
    }

    function Sr(t) {
        t = null == t ? Date.now() : +t, ++mf;
        try {
            for (var n, e = af; e;)t >= e.time && (n = e.callback)(t - e.time, t), e = e.next
        } finally {
            --mf
        }
    }

    function Cr() {
        mf = pf = 0;
        try {
            Sr()
        } finally {
            for (var t, n = af, e = 1 / 0; n;)n.callback ? (e > n.time && (e = n.time), n = (t = n).next) : n = t ? t.next = n.next : af = n.next;
            uf = t, Ar(e)
        }
    }

    function Ar(t) {
        if (!mf) {
            pf && (pf = clearTimeout(pf));
            var n = t - Date.now();
            n > 24 ? 1 / 0 > t && (pf = setTimeout(Cr, n)) : (mf = 1, vf(Cr))
        }
    }

    function Dr(t, n, e, r) {
        function i(n) {
            return t(n = new Date(+n)), n
        }

        return i.floor = i, i.round = function (e) {
            var r = new Date(+e), i = new Date(e - 1);
            return t(r), t(i), n(i, 1), i - e > e - r ? r : i
        }, i.ceil = function (e) {
            return t(e = new Date(e - 1)), n(e, 1), e
        }, i.offset = function (t, e) {
            return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t
        }, i.range = function (e, r, i) {
            var a = [];
            if (e = new Date(e - 1), r = new Date(+r), i = null == i ? 1 : Math.floor(i), !(r > e && i > 0))return a;
            for (n(e, 1), t(e), r > e && a.push(new Date(+e)); n(e, i), t(e), r > e;)a.push(new Date(+e));
            return a
        }, i.filter = function (e) {
            return Dr(function (n) {
                for (; t(n), !e(n);)n.setTime(n - 1)
            }, function (t, r) {
                for (; --r >= 0;)for (; n(t, 1), !e(t););
            })
        }, e && (i.count = function (n, r) {
            return bf.setTime(+n), xf.setTime(+r), t(bf), t(xf), Math.floor(e(bf, xf))
        }, i.every = function (t) {
            return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function (n) {
                return r(n) % t === 0
            } : function (n) {
                return i.count(0, n) % t === 0
            }) : i : null
        }), i
    }

    function Fr(t) {
        return Dr(function (n) {
            n.setHours(0, 0, 0, 0), n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7)
        }, function (t, n) {
            t.setDate(t.getDate() + 7 * n)
        }, function (t, n) {
            return (n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 6048e5
        })
    }

    function Lr(t) {
        return Dr(function (n) {
            n.setUTCHours(0, 0, 0, 0), n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7)
        }, function (t, n) {
            t.setUTCDate(t.getUTCDate() + 7 * n)
        }, function (t, n) {
            return (n - t) / 6048e5
        })
    }

    function Pr(t, n) {
        if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0)return null;
        var e, r = t.slice(0, e);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
    }

    function Er(t) {
        return t = Pr(Math.abs(t)), t ? t[1] : NaN
    }

    function Ur(t, n) {
        return function (e, r) {
            for (var i = e.length, a = [], u = 0, o = t[0], s = 0; i > 0 && o > 0 && (s + o + 1 > r && (o = Math.max(1, r - s)), a.push(e.substring(i -= o, i + o)), !((s += o + 1) > r));)o = t[u = (u + 1) % t.length];
            return a.reverse().join(n)
        }
    }

    function Hr(t, n) {
        t = t.toPrecision(n);
        t:for (var e, r = t.length, i = 1, a = -1; r > i; ++i)switch (t[i]) {
            case".":
                a = e = i;
                break;
            case"0":
                0 === a && (a = i), e = i;
                break;
            case"e":
                break t;
            default:
                a > 0 && (a = 0)
        }
        return a > 0 ? t.slice(0, a) + t.slice(e + 1) : t
    }

    function Or(t, n) {
        var e = Pr(t, n);
        if (!e)return t + "";
        var r = e[0], i = e[1], a = i - (wf = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1, u = r.length;
        return a === u ? r : a > u ? r + new Array(a - u + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + Pr(t, Math.max(0, n + a - 1))[0]
    }

    function Rr(t, n) {
        var e = Pr(t, n);
        if (!e)return t + "";
        var r = e[0], i = e[1];
        return 0 > i ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
    }

    function jr(t) {
        return new qr(t)
    }

    function qr(t) {
        if (!(n = Ch.exec(t)))throw new Error("invalid format: " + t);
        var n, e = n[1] || " ", r = n[2] || ">", i = n[3] || "-", a = n[4] || "", u = !!n[5], o = n[6] && +n[6], s = !!n[7], c = n[8] && +n[8].slice(1), f = n[9] || "";
        "n" === f ? (s = !0, f = "g") : Sh[f] || (f = ""), (u || "0" === e && "=" === r) && (u = !0, e = "0", r = "="), this.fill = e, this.align = r, this.sign = i, this.symbol = a, this.zero = u, this.width = o, this.comma = s, this.precision = c, this.type = f
    }

    function Yr(t) {
        return t
    }

    function zr(t) {
        function n(t) {
            function n(t) {
                var n = g, i = m;
                if ("c" === d)i = p(t) + i, t = ""; else {
                    t = +t;
                    var s = (0 > t || 0 > 1 / t) && (t *= -1, !0);
                    if (t = p(t, l), s) {
                        var y, v = -1, b = t.length;
                        for (s = !1; ++v < b;)if (y = t.charCodeAt(v), y > 48 && 58 > y || "x" === d && y > 96 && 103 > y || "X" === d && y > 64 && 71 > y) {
                            s = !0;
                            break
                        }
                    }
                    if (n = (s ? "(" === o ? o : "-" : "-" === o || "(" === o ? "" : o) + n, i = i + ("s" === d ? Ah[8 + wf / 3] : "") + (s && "(" === o ? ")" : ""), _)for (var y, v = -1, b = t.length; ++v < b;)if (y = t.charCodeAt(v), 48 > y || y > 57) {
                        i = (46 === y ? a + t.slice(v + 1) : t.slice(v)) + i, t = t.slice(0, v);
                        break
                    }
                }
                h && !c && (t = r(t, 1 / 0));
                var x = n.length + t.length + i.length, M = f > x ? new Array(f - x + 1).join(e) : "";
                switch (h && c && (t = r(M + t, M.length ? f - i.length : 1 / 0), M = ""), u) {
                    case"<":
                        return n + t + i + M;
                    case"=":
                        return n + M + t + i;
                    case"^":
                        return M.slice(0, x = M.length >> 1) + n + t + i + M.slice(x)
                }
                return M + n + t + i
            }

            t = jr(t);
            var e = t.fill, u = t.align, o = t.sign, s = t.symbol, c = t.zero, f = t.width, h = t.comma, l = t.precision, d = t.type, g = "$" === s ? i[0] : "#" === s && /[boxX]/.test(d) ? "0" + d.toLowerCase() : "", m = "$" === s ? i[1] : /[%p]/.test(d) ? "%" : "", p = Sh[d], _ = !d || /[defgprs%]/.test(d);
            return l = null == l ? d ? 6 : 12 : /[gprs]/.test(d) ? Math.max(1, Math.min(21, l)) : Math.max(0, Math.min(20, l)), n.toString = function () {
                return t + ""
            }, n
        }

        function e(t, e) {
            var r = n((t = jr(t), t.type = "f", t)), i = 3 * Math.max(-8, Math.min(8, Math.floor(Er(e) / 3))), a = Math.pow(10, -i), u = Ah[8 + i / 3];
            return function (t) {
                return r(a * t) + u
            }
        }

        var r = t.grouping && t.thousands ? Ur(t.grouping, t.thousands) : Yr, i = t.currency, a = t.decimal;
        return {format: n, formatPrefix: e}
    }

    function Ir(t) {
        return Math.max(0, -Er(Math.abs(t)))
    }

    function Jr(t, n) {
        return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Er(n) / 3))) - Er(Math.abs(t)))
    }

    function Br(t, n) {
        return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Er(n) - Er(t)) + 1
    }

    function Xr(t) {
        if (0 <= t.y && t.y < 100) {
            var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
            return n.setFullYear(t.y), n
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
    }

    function Wr(t) {
        if (0 <= t.y && t.y < 100) {
            var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
            return n.setUTCFullYear(t.y), n
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
    }

    function Vr(t) {
        return {y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0}
    }

    function $r(t) {
        function n(t, n) {
            return function (e) {
                var r, i, a, u = [], o = -1, s = 0, c = t.length;
                for (e instanceof Date || (e = new Date(+e)); ++o < c;)37 === t.charCodeAt(o) && (u.push(t.slice(s, o)), null != (i = nl[r = t.charAt(++o)]) ? r = t.charAt(++o) : i = "e" === r ? " " : "0", (a = n[r]) && (r = a(e, i)), u.push(r), s = o + 1);
                return u.push(t.slice(s, o)), u.join("")
            }
        }

        function e(t, n) {
            return function (e) {
                var i = Vr(1900), a = r(i, t, e += "", 0);
                if (a != e.length)return null;
                if ("p" in i && (i.H = i.H % 12 + 12 * i.p), "W" in i || "U" in i) {
                    "w" in i || (i.w = "W" in i ? 1 : 0);
                    var u = "Z" in i ? Wr(Vr(i.y)).getUTCDay() : n(Vr(i.y)).getDay();
                    i.m = 0, i.d = "W" in i ? (i.w + 6) % 7 + 7 * i.W - (u + 5) % 7 : i.w + 7 * i.U - (u + 6) % 7
                }
                return "Z" in i ? (i.H += i.Z / 100 | 0, i.M += i.Z % 100, Wr(i)) : n(i)
            }
        }

        function r(t, n, e, r) {
            for (var i, a, u = 0, o = n.length, s = e.length; o > u;) {
                if (r >= s)return -1;
                if (i = n.charCodeAt(u++), 37 === i) {
                    if (i = n.charAt(u++), a = z[i in nl ? n.charAt(u++) : i], !a || (r = a(t, e, r)) < 0)return -1
                } else if (i != e.charCodeAt(r++))return -1
            }
            return r
        }

        function i(t, n, e) {
            var r = D.exec(n.slice(e));
            return r ? (t.p = F[r[0].toLowerCase()], e + r[0].length) : -1
        }

        function a(t, n, e) {
            var r = E.exec(n.slice(e));
            return r ? (t.w = U[r[0].toLowerCase()], e + r[0].length) : -1
        }

        function u(t, n, e) {
            var r = L.exec(n.slice(e));
            return r ? (t.w = P[r[0].toLowerCase()], e + r[0].length) : -1
        }

        function o(t, n, e) {
            var r = R.exec(n.slice(e));
            return r ? (t.m = j[r[0].toLowerCase()], e + r[0].length) : -1
        }

        function s(t, n, e) {
            var r = H.exec(n.slice(e));
            return r ? (t.m = O[r[0].toLowerCase()], e + r[0].length) : -1
        }

        function c(t, n, e) {
            return r(t, M, n, e)
        }

        function f(t, n, e) {
            return r(t, w, n, e)
        }

        function h(t, n, e) {
            return r(t, T, n, e)
        }

        function l(t) {
            return S[t.getDay()]
        }

        function d(t) {
            return k[t.getDay()]
        }

        function g(t) {
            return A[t.getMonth()]
        }

        function m(t) {
            return C[t.getMonth()]
        }

        function p(t) {
            return N[+(t.getHours() >= 12)]
        }

        function _(t) {
            return S[t.getUTCDay()]
        }

        function y(t) {
            return k[t.getUTCDay()]
        }

        function v(t) {
            return A[t.getUTCMonth()]
        }

        function b(t) {
            return C[t.getUTCMonth()]
        }

        function x(t) {
            return N[+(t.getUTCHours() >= 12)]
        }

        var M = t.dateTime, w = t.date, T = t.time, N = t.periods, k = t.days, S = t.shortDays, C = t.months, A = t.shortMonths, D = Kr(N), F = Qr(N), L = Kr(k), P = Qr(k), E = Kr(S), U = Qr(S), H = Kr(C), O = Qr(C), R = Kr(A), j = Qr(A), q = {
            a: l,
            A: d,
            b: g,
            B: m,
            c: null,
            d: gi,
            e: gi,
            H: mi,
            I: pi,
            j: _i,
            L: yi,
            m: vi,
            M: bi,
            p: p,
            S: xi,
            U: Mi,
            w: wi,
            W: Ti,
            x: null,
            X: null,
            y: Ni,
            Y: ki,
            Z: Si,
            "%": zi
        }, Y = {
            a: _,
            A: y,
            b: v,
            B: b,
            c: null,
            d: Ci,
            e: Ci,
            H: Ai,
            I: Di,
            j: Fi,
            L: Li,
            m: Pi,
            M: Ei,
            p: x,
            S: Ui,
            U: Hi,
            w: Oi,
            W: Ri,
            x: null,
            X: null,
            y: ji,
            Y: qi,
            Z: Yi,
            "%": zi
        }, z = {
            a: a,
            A: u,
            b: o,
            B: s,
            c: c,
            d: oi,
            e: oi,
            H: ci,
            I: ci,
            j: si,
            L: li,
            m: ui,
            M: fi,
            p: i,
            S: hi,
            U: ni,
            w: ti,
            W: ei,
            x: f,
            X: h,
            y: ii,
            Y: ri,
            Z: ai,
            "%": di
        };
        return q.x = n(w, q), q.X = n(T, q), q.c = n(M, q), Y.x = n(w, Y), Y.X = n(T, Y), Y.c = n(M, Y), {
            format: function (t) {
                var e = n(t += "", q);
                return e.toString = function () {
                    return t
                }, e
            }, parse: function (t) {
                var n = e(t += "", Xr);
                return n.toString = function () {
                    return t
                }, n
            }, utcFormat: function (t) {
                var e = n(t += "", Y);
                return e.toString = function () {
                    return t
                }, e
            }, utcParse: function (t) {
                var n = e(t, Wr);
                return n.toString = function () {
                    return t
                }, n
            }
        }
    }

    function Zr(t, n, e) {
        var r = 0 > t ? "-" : "", i = (r ? -t : t) + "", a = i.length;
        return r + (e > a ? new Array(e - a + 1).join(n) + i : i)
    }

    function Gr(t) {
        return t.replace(il, "\\$&")
    }

    function Kr(t) {
        return new RegExp("^(?:" + t.map(Gr).join("|") + ")", "i")
    }

    function Qr(t) {
        for (var n = {}, e = -1, r = t.length; ++e < r;)n[t[e].toLowerCase()] = e;
        return n
    }

    function ti(t, n, e) {
        var r = el.exec(n.slice(e, e + 1));
        return r ? (t.w = +r[0], e + r[0].length) : -1
    }

    function ni(t, n, e) {
        var r = el.exec(n.slice(e));
        return r ? (t.U = +r[0], e + r[0].length) : -1
    }

    function ei(t, n, e) {
        var r = el.exec(n.slice(e));
        return r ? (t.W = +r[0], e + r[0].length) : -1
    }

    function ri(t, n, e) {
        var r = el.exec(n.slice(e, e + 4));
        return r ? (t.y = +r[0], e + r[0].length) : -1
    }

    function ii(t, n, e) {
        var r = el.exec(n.slice(e, e + 2));
        return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1
    }

    function ai(t, n, e) {
        var r = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(n.slice(e, e + 6));
        return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1
    }

    function ui(t, n, e) {
        var r = el.exec(n.slice(e, e + 2));
        return r ? (t.m = r[0] - 1, e + r[0].length) : -1
    }

    function oi(t, n, e) {
        var r = el.exec(n.slice(e, e + 2));
        return r ? (t.d = +r[0], e + r[0].length) : -1
    }

    function si(t, n, e) {
        var r = el.exec(n.slice(e, e + 3));
        return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1
    }

    function ci(t, n, e) {
        var r = el.exec(n.slice(e, e + 2));
        return r ? (t.H = +r[0], e + r[0].length) : -1
    }

    function fi(t, n, e) {
        var r = el.exec(n.slice(e, e + 2));
        return r ? (t.M = +r[0], e + r[0].length) : -1
    }

    function hi(t, n, e) {
        var r = el.exec(n.slice(e, e + 2));
        return r ? (t.S = +r[0], e + r[0].length) : -1
    }

    function li(t, n, e) {
        var r = el.exec(n.slice(e, e + 3));
        return r ? (t.L = +r[0], e + r[0].length) : -1
    }

    function di(t, n, e) {
        var r = rl.exec(n.slice(e, e + 1));
        return r ? e + r[0].length : -1
    }

    function gi(t, n) {
        return Zr(t.getDate(), n, 2)
    }

    function mi(t, n) {
        return Zr(t.getHours(), n, 2)
    }

    function pi(t, n) {
        return Zr(t.getHours() % 12 || 12, n, 2)
    }

    function _i(t, n) {
        return Zr(1 + Sf.count(Hf(t), t), n, 3)
    }

    function yi(t, n) {
        return Zr(t.getMilliseconds(), n, 3)
    }

    function vi(t, n) {
        return Zr(t.getMonth() + 1, n, 2)
    }

    function bi(t, n) {
        return Zr(t.getMinutes(), n, 2)
    }

    function xi(t, n) {
        return Zr(t.getSeconds(), n, 2)
    }

    function Mi(t, n) {
        return Zr(Cf.count(Hf(t), t), n, 2)
    }

    function wi(t) {
        return t.getDay()
    }

    function Ti(t, n) {
        return Zr(Af.count(Hf(t), t), n, 2)
    }

    function Ni(t, n) {
        return Zr(t.getFullYear() % 100, n, 2)
    }

    function ki(t, n) {
        return Zr(t.getFullYear() % 1e4, n, 4)
    }

    function Si(t) {
        var n = t.getTimezoneOffset();
        return (n > 0 ? "-" : (n *= -1, "+")) + Zr(n / 60 | 0, "0", 2) + Zr(n % 60, "0", 2)
    }

    function Ci(t, n) {
        return Zr(t.getUTCDate(), n, 2)
    }

    function Ai(t, n) {
        return Zr(t.getUTCHours(), n, 2)
    }

    function Di(t, n) {
        return Zr(t.getUTCHours() % 12 || 12, n, 2)
    }

    function Fi(t, n) {
        return Zr(1 + qf.count($f(t), t), n, 3)
    }

    function Li(t, n) {
        return Zr(t.getUTCMilliseconds(), n, 3)
    }

    function Pi(t, n) {
        return Zr(t.getUTCMonth() + 1, n, 2)
    }

    function Ei(t, n) {
        return Zr(t.getUTCMinutes(), n, 2)
    }

    function Ui(t, n) {
        return Zr(t.getUTCSeconds(), n, 2)
    }

    function Hi(t, n) {
        return Zr(Yf.count($f(t), t), n, 2)
    }

    function Oi(t) {
        return t.getUTCDay()
    }

    function Ri(t, n) {
        return Zr(zf.count($f(t), t), n, 2)
    }

    function ji(t, n) {
        return Zr(t.getUTCFullYear() % 100, n, 2)
    }

    function qi(t, n) {
        return Zr(t.getUTCFullYear() % 1e4, n, 4)
    }

    function Yi() {
        return "+0000"
    }

    function zi() {
        return "%"
    }

    function Ii(t) {
        return t.toISOString()
    }

    function Ji(t) {
        var n = new Date(t);
        return isNaN(n) ? null : n
    }

    function Bi() {
        function t(t) {
            var a = t + "", u = n.get(a);
            if (!u) {
                if (i !== Ol)return i;
                n.set(a, u = e.push(t))
            }
            return r[(u - 1) % r.length]
        }

        var n = E(), e = [], r = [], i = Ol;
        return t.domain = function (r) {
            if (!arguments.length)return e.slice();
            e = [], n = E();
            for (var i, a, u = -1, o = r.length; ++u < o;)n.has(a = (i = r[u]) + "") || n.set(a, e.push(i));
            return t
        }, t.range = function (n) {
            return arguments.length ? (r = Hl.call(n), t) : r.slice()
        }, t.unknown = function (n) {
            return arguments.length ? (i = n, t) : i
        }, t.copy = function () {
            return Bi().domain(e).range(r).unknown(i)
        }, t
    }

    function Xi() {
        function t() {
            var t = i().length, r = u[1] < u[0], l = u[r - 0], d = u[1 - r];
            n = (d - l) / Math.max(1, t - s + 2 * c), o && (n = Math.floor(n)), l += (d - l - n * (t - s)) * f, e = n * (1 - s), o && (l = Math.round(l), e = Math.round(e));
            var g = h(t).map(function (t) {
                return l + n * t
            });
            return a(r ? g.reverse() : g)
        }

        var n, e, r = Bi().unknown(void 0), i = r.domain, a = r.range, u = [0, 1], o = !1, s = 0, c = 0, f = .5;
        return delete r.unknown, r.domain = function (n) {
            return arguments.length ? (i(n), t()) : i()
        }, r.range = function (n) {
            return arguments.length ? (u = [+n[0], +n[1]], t()) : u.slice()
        }, r.rangeRound = function (n) {
            return u = [+n[0], +n[1]], o = !0, t()
        }, r.bandwidth = function () {
            return e
        }, r.step = function () {
            return n
        }, r.round = function (n) {
            return arguments.length ? (o = !!n, t()) : o
        }, r.padding = function (n) {
            return arguments.length ? (s = c = Math.max(0, Math.min(1, n)), t()) : s
        }, r.paddingInner = function (n) {
            return arguments.length ? (s = Math.max(0, Math.min(1, n)), t()) : s
        }, r.paddingOuter = function (n) {
            return arguments.length ? (c = Math.max(0, Math.min(1, n)), t()) : c
        }, r.align = function (n) {
            return arguments.length ? (f = Math.max(0, Math.min(1, n)), t()) : f
        }, r.copy = function () {
            return Xi().domain(i()).range(u).round(o).paddingInner(s).paddingOuter(c).align(f)
        }, t()
    }

    function Wi(t) {
        var n = t.copy;
        return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function () {
            return Wi(n())
        }, t
    }

    function Vi() {
        return Wi(Xi().paddingInner(1))
    }

    function $i(t) {
        return function () {
            return t
        }
    }

    function Zi(t) {
        return +t
    }

    function Gi(t, n) {
        return (n -= t = +t) ? function (e) {
            return (e - t) / n
        } : $i(n)
    }

    function Ki(t) {
        return function (n, e) {
            var r = t(n = +n, e = +e);
            return function (t) {
                return n >= t ? 0 : t >= e ? 1 : r(t)
            }
        }
    }

    function Qi(t) {
        return function (n, e) {
            var r = t(n = +n, e = +e);
            return function (t) {
                return 0 >= t ? n : t >= 1 ? e : r(t)
            }
        }
    }

    function ta(t, n, e, r) {
        var i = t[0], a = t[1], u = n[0], o = n[1];
        return i > a ? (i = e(a, i), u = r(o, u)) : (i = e(i, a), u = r(u, o)), function (t) {
            return u(i(t))
        }
    }

    function na(t, n, e, r) {
        var i = Math.min(t.length, n.length) - 1, a = new Array(i), u = new Array(i), o = -1;
        for (t[i] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++o < i;)a[o] = e(t[o], t[o + 1]), u[o] = r(n[o], n[o + 1]);
        return function (n) {
            var e = bs(t, n, 1, i) - 1;
            return u[e](a[e](n))
        }
    }

    function ea(t, n) {
        return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
    }

    function ra(t, n) {
        function e() {
            var e = Math.min(u.length, o.length) > 2 ? na : ta;
            return i = e(u, o, c ? Ki(t) : t, s), a = e(o, u, Gi, c ? Qi(n) : n), r
        }

        function r(t) {
            return i(+t)
        }

        var i, a, u = Rl, o = Rl, s = qe, c = !1;
        return r.invert = function (t) {
            return a(+t)
        }, r.domain = function (t) {
            return arguments.length ? (u = Ul.call(t, Zi), e()) : u.slice()
        }, r.range = function (t) {
            return arguments.length ? (o = Hl.call(t), e()) : o.slice()
        }, r.rangeRound = function (t) {
            return o = Hl.call(t), s = Ye, e()
        }, r.clamp = function (t) {
            return arguments.length ? (c = !!t, e()) : c
        }, r.interpolate = function (t) {
            return arguments.length ? (s = hr.apply(null, arguments), e()) : s
        }, e()
    }

    function ia(t, n, e) {
        var r, i = t[0], a = t[t.length - 1], u = d(i, a, null == n ? 10 : n);
        switch (e = jr(null == e ? ",f" : e), e.type) {
            case"s":
                var o = Math.max(Math.abs(i), Math.abs(a));
                return null != e.precision || isNaN(r = Jr(u, o)) || (e.precision = r), tl(e, o);
            case"":
            case"e":
            case"g":
            case"p":
            case"r":
                null != e.precision || isNaN(r = Br(u, Math.max(Math.abs(i), Math.abs(a)))) || (e.precision = r - ("e" === e.type));
                break;
            case"f":
            case"%":
                null != e.precision || isNaN(r = Ir(u)) || (e.precision = r - 2 * ("%" === e.type))
        }
        return Qh(e)
    }

    function aa(t) {
        var n = t.domain;
        return t.ticks = function (t) {
            var e = n();
            return l(e[0], e[e.length - 1], null == t ? 10 : t)
        }, t.tickFormat = function (t, e) {
            return ia(n(), t, e)
        }, t.nice = function (e) {
            var r = n(), i = r.length - 1, a = null == e ? 10 : e, u = r[0], o = r[i], s = d(u, o, a);
            return s && (s = d(Math.floor(u / s) * s, Math.ceil(o / s) * s, a), r[0] = Math.floor(u / s) * s, r[i] = Math.ceil(o / s) * s, n(r)), t
        }, t
    }

    function ua() {
        var t = ra(Gi, Ue);
        return t.copy = function () {
            return ea(t, ua())
        }, aa(t)
    }

    function oa() {
        function t(t) {
            return +t
        }

        var n = [0, 1];
        return t.invert = t, t.domain = t.range = function (e) {
            return arguments.length ? (n = Ul.call(e, Zi), t) : n.slice()
        }, t.copy = function () {
            return oa().domain(n)
        }, aa(t)
    }

    function sa(t, n) {
        t = t.slice();
        var e, r = 0, i = t.length - 1, a = t[r], u = t[i];
        return a > u && (e = r, r = i, i = e, e = a, a = u, u = e), t[r] = n.floor(a), t[i] = n.ceil(u), t
    }

    function ca(t, n) {
        return (n = Math.log(n / t)) ? function (e) {
            return Math.log(e / t) / n
        } : $i(n)
    }

    function fa(t, n) {
        return 0 > t ? function (e) {
            return -Math.pow(-n, e) * Math.pow(-t, 1 - e)
        } : function (e) {
            return Math.pow(n, e) * Math.pow(t, 1 - e)
        }
    }

    function ha(t) {
        return isFinite(t) ? +("1e" + t) : 0 > t ? 0 : t
    }

    function la(t) {
        return 10 === t ? ha : t === Math.E ? Math.exp : function (n) {
            return Math.pow(t, n)
        }
    }

    function da(t) {
        return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function (n) {
            return Math.log(n) / t
        })
    }

    function ga(t) {
        return function (n) {
            return -t(-n)
        }
    }

    function ma() {
        function t() {
            return i = da(r), a = la(r), e()[0] < 0 && (i = ga(i), a = ga(a)), n
        }

        var n = ra(ca, fa).domain([1, 10]), e = n.domain, r = 10, i = da(10), a = la(10);
        return n.base = function (n) {
            return arguments.length ? (r = +n, t()) : r
        }, n.domain = function (n) {
            return arguments.length ? (e(n), t()) : e()
        }, n.ticks = function (t) {
            var n, u = e(), o = u[0], s = u[u.length - 1];
            (n = o > s) && (d = o, o = s, s = d);
            var c, f, h, d = i(o), g = i(s), m = null == t ? 10 : +t, p = [];
            if (!(r % 1) && m > g - d) {
                if (d = Math.round(d) - 1, g = Math.round(g) + 1, o > 0) {
                    for (; g > d; ++d)for (f = 1, c = a(d); r > f; ++f)if (h = c * f, !(o > h)) {
                        if (h > s)break;
                        p.push(h)
                    }
                } else for (; g > d; ++d)for (f = r - 1, c = a(d); f >= 1; --f)if (h = c * f, !(o > h)) {
                    if (h > s)break;
                    p.push(h)
                }
                n && p.reverse()
            } else p = l(d, g, Math.min(g - d, m)).map(a);
            return p
        }, n.tickFormat = function (t, e) {
            if (null == e ? e = 10 === r ? jl : ql : "function" != typeof e && (e = Qh(e)), null == t)return e;
            var u = Math.max(1, r * t / n.ticks().length);
            return function (t) {
                var n = t / a(Math.round(i(t)));
                return r - .5 > n * r && (n *= r), u >= n ? e(t) : ""
            }
        }, n.nice = function () {
            return e(sa(e(), {
                floor: function (t) {
                    return a(Math.floor(i(t)))
                }, ceil: function (t) {
                    return a(Math.ceil(i(t)))
                }
            }))
        }, n.copy = function () {
            return ea(n, ma().base(r))
        }, n
    }

    function pa(t, n) {
        return 0 > t ? -Math.pow(-t, n) : Math.pow(t, n)
    }

    function _a() {
        function t(t, n) {
            return (n = pa(n, e) - (t = pa(t, e))) ? function (r) {
                return (pa(r, e) - t) / n
            } : $i(n)
        }

        function n(t, n) {
            return n = pa(n, e) - (t = pa(t, e)), function (r) {
                return pa(t + n * r, 1 / e)
            }
        }

        var e = 1, r = ra(t, n), i = r.domain;
        return r.exponent = function (t) {
            return arguments.length ? (e = +t, i(i())) : e
        }, r.copy = function () {
            return ea(r, _a().exponent(e))
        }, aa(r)
    }

    function ya() {
        return _a().exponent(.5)
    }

    function va() {
        function t() {
            var t = 0, n = Math.max(1, i.length);
            for (a = new Array(n - 1); ++t < n;)a[t - 1] = _(r, t / n);
            return e
        }

        function e(t) {
            return isNaN(t = +t) ? void 0 : i[bs(a, t)]
        }

        var r = [], i = [], a = [];
        return e.invertExtent = function (t) {
            var n = i.indexOf(t);
            return 0 > n ? [NaN, NaN] : [n > 0 ? a[n - 1] : r[0], n < a.length ? a[n] : r[r.length - 1]]
        }, e.domain = function (e) {
            if (!arguments.length)return r.slice();
            r = [];
            for (var i, a = 0, u = e.length; u > a; ++a)i = e[a], null == i || isNaN(i = +i) || r.push(i);
            return r.sort(n), t()
        }, e.range = function (n) {
            return arguments.length ? (i = Hl.call(n), t()) : i.slice()
        }, e.quantiles = function () {
            return a.slice()
        }, e.copy = function () {
            return va().domain(r).range(i)
        }, e
    }

    function ba() {
        function t(t) {
            return t >= t ? u[bs(a, t, 0, i)] : void 0
        }

        function n() {
            var n = -1;
            for (a = new Array(i); ++n < i;)a[n] = ((n + 1) * r - (n - i) * e) / (i + 1);
            return t
        }

        var e = 0, r = 1, i = 1, a = [.5], u = [0, 1];
        return t.domain = function (t) {
            return arguments.length ? (e = +t[0], r = +t[1], n()) : [e, r]
        }, t.range = function (t) {
            return arguments.length ? (i = (u = Hl.call(t)).length - 1, n()) : u.slice()
        }, t.invertExtent = function (t) {
            var n = u.indexOf(t);
            return 0 > n ? [NaN, NaN] : 1 > n ? [e, a[0]] : n >= i ? [a[i - 1], r] : [a[n - 1], a[n]]
        }, t.copy = function () {
            return ba().domain([e, r]).range(u)
        }, aa(t)
    }

    function xa() {
        function t(t) {
            return t >= t ? e[bs(n, t, 0, r)] : void 0
        }

        var n = [.5], e = [0, 1], r = 1;
        return t.domain = function (i) {
            return arguments.length ? (n = Hl.call(i), r = Math.min(n.length, e.length - 1), t) : n.slice()
        }, t.range = function (i) {
            return arguments.length ? (e = Hl.call(i), r = Math.min(n.length, e.length - 1), t) : e.slice()
        }, t.invertExtent = function (t) {
            var r = e.indexOf(t);
            return [n[r - 1], n[r]]
        }, t.copy = function () {
            return xa().domain(n).range(e)
        }, t
    }

    function Ma(t) {
        return new Date(t)
    }

    function wa(t, n, e, r, i, a, u, o, s) {
        function c(o) {
            return (u(o) < o ? m : a(o) < o ? p : i(o) < o ? _ : r(o) < o ? y : n(o) < o ? e(o) < o ? v : b : t(o) < o ? x : M)(o)
        }

        function f(n, e, r, i) {
            if (null == n && (n = 10), "number" == typeof n) {
                var a = Math.abs(r - e) / n, u = Vl(w, a);
                u === w.length ? (i = d(e / Wl, r / Wl, n), n = t) : u ? (u = w[a / w[u - 1][2] < w[u][2] / a ? u - 1 : u], i = u[1], n = u[0]) : (i = d(e, r, n), n = o)
            }
            return null == i ? n : n.every(i)
        }

        var h = ra(Gi, Ue), l = h.invert, g = h.domain, m = s(".%L"), p = s(":%S"), _ = s("%I:%M"), y = s("%I %p"), v = s("%a %d"), b = s("%b %d"), x = s("%B"), M = s("%Y"), w = [[u, 1, Yl], [u, 5, 5 * Yl], [u, 15, 15 * Yl], [u, 30, 30 * Yl], [a, 1, zl], [a, 5, 5 * zl], [a, 15, 15 * zl], [a, 30, 30 * zl], [i, 1, Il], [i, 3, 3 * Il], [i, 6, 6 * Il], [i, 12, 12 * Il], [r, 1, Jl], [r, 2, 2 * Jl], [e, 1, Bl], [n, 1, Xl], [n, 3, 3 * Xl], [t, 1, Wl]];
        return h.invert = function (t) {
            return new Date(l(t))
        }, h.domain = function (t) {
            return arguments.length ? g(t) : g().map(Ma)
        }, h.ticks = function (t, n) {
            var e, r = g(), i = r[0], a = r[r.length - 1], u = i > a;
            return u && (e = i, i = a, a = e), e = f(t, i, a, n), e = e ? e.range(i, a + 1) : [], u ? e.reverse() : e
        }, h.tickFormat = function (t) {
            return null == t ? c : s(t)
        }, h.nice = function (t, n) {
            var e = g();
            return (t = f(t, e[0], e[e.length - 1], n)) ? g(sa(e, t)) : h
        }, h.copy = function () {
            return ea(h, wa(t, n, e, r, i, a, u, o, s))
        }, h
    }

    function Ta() {
        return wa(Hf, Uf, Cf, Sf, kf, Nf, Tf, Mf, Dl).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)])
    }

    function Na() {
        return wa($f, Vf, Yf, qf, jf, Rf, Of, hh, Ll).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)])
    }

    function ka(t) {
        return t.match(/.{6}/g).map(function (t) {
            return "#" + t
        })
    }

    function Sa() {
        return Bi().range(ka("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"))
    }

    function Ca() {
        return Bi().range(ka("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"))
    }

    function Aa() {
        return Bi().range(ka("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"))
    }

    function Da() {
        return Bi().range(ka("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"))
    }

    function Fa() {
        return ua().interpolate(cr).range([Fe(300, .5, 0), Fe(-240, .5, 1)])
    }

    function La(t) {
        function n(n) {
            var a = (n - e) / (r - e);
            return t(i ? Math.max(0, Math.min(1, a)) : a)
        }

        var e = 0, r = 1, i = !1;
        return n.domain = function (t) {
            return arguments.length ? (e = +t[0], r = +t[1], n) : [e, r]
        }, n.clamp = function (t) {
            return arguments.length ? (i = !!t, n) : i
        }, n.copy = function () {
            return La(t).domain([e, r]).clamp(i)
        }, aa(n)
    }

    function Pa(t) {
        (0 > t || t > 1) && (t -= Math.floor(t));
        var n = Math.abs(t - .5);
        return Kl.h = 360 * t - 100, Kl.s = 1.5 - 1.5 * n, Kl.l = .8 - .9 * n, Kl + ""
    }

    function Ea() {
        return La(Ql)
    }

    function Ua() {
        return La(td)
    }

    function Ha() {
        return La(Pa)
    }

    function Oa(t) {
        var n = La(function (n) {
            return t[Math.round(n * t.length - n)]
        }).clamp(!0);
        return delete n.clamp, n
    }

    function Ra() {
        return Oa(nd)
    }

    function ja() {
        return Oa(ed)
    }

    function qa() {
        return Oa(rd)
    }

    function Ya() {
        return Oa(id)
    }

    function za(t) {
        return t.replace(ad, "\\$&")
    }

    function Ia() {
    }

    function Ja(n, e, r) {
        return function (i) {
            var a = t.event;
            t.event = i;
            try {
                n.call(this, this.__data__, e, r)
            } finally {
                t.event = a
            }
        }
    }

    function Ba(t) {
        return function (n) {
            var e = n.relatedTarget;
            e && (e === this || 8 & e.compareDocumentPosition(this)) || t(n)
        }
    }

    function Xa(t, n) {
        return function () {
            var e = this[t];
            e && (this.removeEventListener(n, e, e._capture), delete this[t])
        }
    }

    function Wa(t) {
        var n = new RegExp("^__on([^.]+)" + za(t) + "$");
        return function () {
            for (var t in this) {
                var e = t.match(n);
                if (e) {
                    var r = this[t];
                    this.removeEventListener(e[1], r, r._capture), delete this[t]
                }
            }
        }
    }

    function Va(t, n, e, r, i) {
        return function (a, u, o) {
            var s = this[n];
            s && this.removeEventListener(e, s, s._capture), s = Ja(r, u, o), t && (s = Ba(s)), s._listener = r, this.addEventListener(e, this[n] = s, s._capture = i)
        }
    }

    function $a(t, n, e) {
        var r, i, a = t + "", u = "__on" + a;
        return arguments.length < 2 ? (r = this.node()[u]) && r._listener : ((r = a.indexOf(".")) > 0 && (a = a.slice(0, r)), (i = ud.hasOwnProperty(a)) && (a = ud[a]), this.each(n ? r ? Va(i, u, a, n, null == e ? !1 : e) : Ia : r ? Xa(u, a) : Wa(a)))
    }

    function Za() {
        for (var n, e = t.event; n = e.sourceEvent;)e = n;
        return e
    }

    function Ga(t) {
        return t && (t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView)
    }

    function Ka(t) {
        return function () {
            return this.querySelector(t)
        }
    }

    function Qa(t) {
        "function" != typeof t && (t = Ka(t));
        for (var n = this._nodes, e = this._update, r = n.length, i = new Array(r), a = 0; r > a; ++a)for (var u, o, s = n[a], c = s.length, f = i[a] = new Array(c), h = 0; c > h; ++h)(u = s[h]) && (o = t.call(u, u.__data__, h, s)) && ("__data__" in u && (o.__data__ = u.__data__), e && (e._nodes[a][h] = o), f[h] = o);
        return new vo(i, this._parents)
    }

    function tu(t) {
        return function () {
            return this.querySelectorAll(t)
        }
    }

    function nu(t) {
        "function" != typeof t && (t = tu(t));
        for (var n = this._nodes, e = n.length, r = [], i = [], a = 0; e > a; ++a)for (var u, o = n[a], s = o.length, c = 0; s > c; ++c)(u = o[c]) && (r.push(t.call(u, u.__data__, c, o)), i.push(u));
        return new vo(r, i)
    }

    function eu(t) {
        "function" != typeof t && (t = hd(t));
        for (var n = this._nodes, e = n.length, r = new Array(e), i = 0; e > i; ++i)for (var a, u = n[i], o = u.length, s = r[i] = [], c = 0; o > c; ++c)(a = u[c]) && t.call(a, a.__data__, c, u) && s.push(a);
        return new vo(r, this._parents)
    }

    function ru(t) {
        for (var n = t._nodes, e = 0, r = n.length; r > e; ++e)if (!Array.isArray(i = n[e]))for (var i, a = i.length, u = n[e] = new Array(a), o = 0; a > o; ++o)u[o] = i[o];
        return n
    }

    function iu(t) {
        return function () {
            return t
        }
    }

    function au(t, n, e, r, i) {
        var a, u = 0, o = n.length, s = i.length, c = Math.min(o, s);
        for (e.length = 0, e.length = s, r.length = 0, r.length = o; c > u; ++u)(a = n[u]) ? a.__data__ = i[u] : e[u] = new su(t, i[u]);
        for (; s > u; ++u)e[u] = new su(t, i[u]);
        for (; o > u; ++u)(a = n[u]) && (r[u] = n[u]);
        n.length = s
    }

    function uu(t, n, e, r, i, a) {
        var u, o, s, c = i.length, f = n.length, h = {}, l = new Array(f);
        for (e.length = 0, e.length = c, r.length = 0, r.length = f, u = 0; f > u; ++u)(o = n[u]) && (l[u] = s = ld + a.call(o, o.__data__, u, n), h[s] ? r[u] = o : h[s] = o);
        for (n.length = 0, n.length = c, u = 0; c > u; ++u)s = ld + a.call(t, i[u], u, i), (o = h[s]) ? o !== !0 && (n[u] = o, o.__data__ = i[u]) : e[u] = new su(t, i[u]), h[s] = !0;
        for (u = 0; f > u; ++u)(o = h[l[u]]) !== !0 && (r[u] = o)
    }

    function ou(t, n) {
        if (!t) {
            var e = new Array(this.size()), r = -1;
            return this.each(function (t) {
                e[++r] = t
            }), e
        }
        var i = n ? uu : au, a = this._parents, u = ru(this), o = (this._enter = this.enter())._nodes, s = (this._exit = this.exit())._nodes;
        "function" != typeof t && (t = iu(t));
        for (var c = u.length, f = 0; c > f; ++f) {
            var h = u[f], l = a[f];
            i(l, h, o[f], s[f], t.call(l, l && l.__data__, f, a), n);
            for (var d, g, m = h.length, p = 0, _ = 0; m > p; ++p)if (d = o[f][p]) {
                for (p >= _ && (_ = p + 1); !(g = h[_]) && ++_ < m;);
                d._next = g || null
            }
        }
        return this
    }

    function su(t, n) {
        this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
    }

    function cu(t) {
        return new Array(t.length)
    }

    function fu() {
        var t = this._enter;
        return t ? (this._enter = null, t) : (t = new vo(this._nodes.map(cu), this._parents), t._update = this, t)
    }

    function hu() {
        var t = this._exit;
        return t ? (this._exit = null, t) : new vo(this._nodes.map(cu), this._parents)
    }

    function lu() {
        for (var t = this._nodes, n = -1, e = t.length; ++n < e;)for (var r, i = t[n], a = i.length - 1, u = i[a]; --a >= 0;)(r = i[a]) && (u && u !== r.nextSibling && u.parentNode.insertBefore(r, u), u = r);
        return this
    }

    function du(t) {
        function n(n, e) {
            return n && e ? t(n.__data__, e.__data__) : !n - !e
        }

        t || (t = gu);
        for (var e = ru(this), r = 0, i = e.length; i > r; ++r)e[r].sort(n);
        return this.order()
    }

    function gu(t, n) {
        return n > t ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    }

    function mu() {
        var t = arguments[0];
        return arguments[0] = this, t.apply(null, arguments), this
    }

    function pu() {
        var t = new Array(this.size()), n = -1;
        return this.each(function () {
            t[++n] = this
        }), t
    }

    function _u() {
        for (var t = this._nodes, n = 0, e = t.length; e > n; ++n)for (var r = t[n], i = 0, a = r.length; a > i; ++i) {
            var u = r[i];
            if (u)return u
        }
        return null
    }

    function yu() {
        var t = 0;
        return this.each(function () {
            ++t
        }), t
    }

    function vu() {
        return !this.node()
    }

    function bu(t) {
        for (var n = this._nodes, e = 0, r = n.length; r > e; ++e)for (var i, a = n[e], u = 0, o = a.length; o > u; ++u)(i = a[u]) && t.call(i, i.__data__, u, a);
        return this
    }

    function xu(t) {
        var n = t += "", e = n.indexOf(":");
        return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), dd.hasOwnProperty(n) ? {
            space: dd[n],
            local: t
        } : t
    }

    function Mu(t) {
        return function () {
            this.removeAttribute(t)
        }
    }

    function wu(t) {
        return function () {
            this.removeAttributeNS(t.space, t.local)
        }
    }

    function Tu(t, n) {
        return function () {
            this.setAttribute(t, n)
        }
    }

    function Nu(t, n) {
        return function () {
            this.setAttributeNS(t.space, t.local, n)
        }
    }

    function ku(t, n) {
        return function () {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
        }
    }

    function Su(t, n) {
        return function () {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
        }
    }

    function Cu(t, n) {
        var e = xu(t);
        if (arguments.length < 2) {
            var r = this.node();
            return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
        }
        return this.each((null == n ? e.local ? wu : Mu : "function" == typeof n ? e.local ? Su : ku : e.local ? Nu : Tu)(e, n))
    }

    function Au(t) {
        return function () {
            this.style.removeProperty(t)
        }
    }

    function Du(t, n, e) {
        return function () {
            this.style.setProperty(t, n, e)
        }
    }

    function Fu(t, n, e) {
        return function () {
            var r = n.apply(this, arguments);
            null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
        }
    }

    function Lu(t, n, e) {
        var r;
        return arguments.length > 1 ? this.each((null == n ? Au : "function" == typeof n ? Fu : Du)(t, n, null == e ? "" : e)) : Ga(r = this.node()).getComputedStyle(r, null).getPropertyValue(t)
    }

    function Pu(t) {
        return function () {
            delete this[t]
        }
    }

    function Eu(t, n) {
        return function () {
            this[t] = n
        }
    }

    function Uu(t, n) {
        return function () {
            var e = n.apply(this, arguments);
            null == e ? delete this[t] : this[t] = e
        }
    }

    function Hu(t, n) {
        return arguments.length > 1 ? this.each((null == n ? Pu : "function" == typeof n ? Uu : Eu)(t, n)) : this.node()[t]
    }

    function Ou(t) {
        return t.trim().split(/^|\s+/)
    }

    function Ru(t) {
        return t.classList || new ju(t)
    }

    function ju(t) {
        this._node = t, this._names = Ou(t.getAttribute("class") || "")
    }

    function qu(t, n) {
        for (var e = Ru(t), r = -1, i = n.length; ++r < i;)e.add(n[r])
    }

    function Yu(t, n) {
        for (var e = Ru(t), r = -1, i = n.length; ++r < i;)e.remove(n[r])
    }

    function zu(t) {
        return function () {
            qu(this, t)
        }
    }

    function Iu(t) {
        return function () {
            Yu(this, t)
        }
    }

    function Ju(t, n) {
        return function () {
            (n.apply(this, arguments) ? qu : Yu)(this, t)
        }
    }

    function Bu(t, n) {
        var e = Ou(t + "");
        if (arguments.length < 2) {
            for (var r = Ru(this.node()), i = -1, a = e.length; ++i < a;)if (!r.contains(e[i]))return !1;
            return !0
        }
        return this.each(("function" == typeof n ? Ju : n ? zu : Iu)(e, n))
    }

    function Xu() {
        this.textContent = ""
    }

    function Wu(t) {
        return function () {
            this.textContent = t
        }
    }

    function Vu(t) {
        return function () {
            var n = t.apply(this, arguments);
            this.textContent = null == n ? "" : n
        }
    }

    function $u(t) {
        return arguments.length ? this.each(null == t ? Xu : ("function" == typeof t ? Vu : Wu)(t)) : this.node().textContent
    }

    function Zu() {
        this.innerHTML = ""
    }

    function Gu(t) {
        return function () {
            this.innerHTML = t
        }
    }

    function Ku(t) {
        return function () {
            var n = t.apply(this, arguments);
            this.innerHTML = null == n ? "" : n
        }
    }

    function Qu(t) {
        return arguments.length ? this.each(null == t ? Zu : ("function" == typeof t ? Ku : Gu)(t)) : this.node().innerHTML
    }

    function to() {
        this.parentNode.appendChild(this)
    }

    function no() {
        return this.each(to)
    }

    function eo() {
        this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }

    function ro() {
        return this.each(eo)
    }

    function io(t) {
        return function () {
            var n = this.ownerDocument, e = this.namespaceURI;
            return e ? n.createElementNS(e, t) : n.createElement(t)
        }
    }

    function ao(t) {
        return function () {
            return this.ownerDocument.createElementNS(t.space, t.local)
        }
    }

    function uo(t) {
        var n = xu(t);
        return (n.local ? ao : io)(n)
    }

    function oo(t) {
        return function () {
            return this.appendChild(t.apply(this, arguments))
        }
    }

    function so(t, n) {
        return function () {
            return this.insertBefore(t.apply(this, arguments), n.apply(this, arguments) || null)
        }
    }

    function co() {
        return null
    }

    function fo(t, n) {
        var e = "function" == typeof t ? t : uo(t);
        return this.select(arguments.length < 2 ? oo(e) : so(e, null == n ? co : "function" == typeof n ? n : Ka(n)))
    }

    function ho() {
        var t = this.parentNode;
        t && t.removeChild(this)
    }

    function lo() {
        return this.each(ho)
    }

    function go(t) {
        return arguments.length ? this.property("__data__", t) : this.node().__data__
    }

    function mo(t, n, e) {
        var r = Ga(t), i = r.CustomEvent;
        i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i)
    }

    function po(t, n) {
        return function () {
            return mo(this, t, n)
        }
    }

    function _o(t, n) {
        return function () {
            return mo(this, t, n.apply(this, arguments))
        }
    }

    function yo(t, n) {
        return this.each(("function" == typeof n ? _o : po)(t, n))
    }

    function vo(t, n) {
        this._nodes = t, this._parents = n
    }

    function bo() {
        return new vo([[document.documentElement]], gd)
    }

    function xo(t) {
        return "string" == typeof t ? new vo([[document.querySelector(t)]], [document.documentElement]) : new vo([[t]], gd)
    }

    function Mo(t, n) {
        var e = t.ownerSVGElement || t;
        if (e.createSVGPoint) {
            var r = e.createSVGPoint();
            if (0 > md) {
                var i = Ga(t);
                if (i.scrollX || i.scrollY) {
                    e = xo(i.document.body).append("svg").style({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        margin: 0,
                        padding: 0,
                        border: "none"
                    }, "important");
                    var a = e.node().getScreenCTM();
                    md = !(a.f || a.e), e.remove()
                }
            }
            return md ? (r.x = n.pageX, r.y = n.pageY) : (r.x = n.clientX, r.y = n.clientY), r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y]
        }
        var u = t.getBoundingClientRect();
        return [n.clientX - u.left - t.clientLeft, n.clientY - u.top - t.clientTop]
    }

    function wo(t, n) {
        return null == n && (n = Za()), n.changedTouches && (n = n.changedTouches[0]), Mo(t, n)
    }

    function To(t) {
        return "string" == typeof t ? new vo([document.querySelectorAll(t)], [document.documentElement]) : new vo([t], gd)
    }

    function No(t, n, e) {
        arguments.length < 3 && (e = n, n = Za().changedTouches);
        for (var r, i = 0, a = n ? n.length : 0; a > i; ++i)if ((r = n[i]).identifier === e)return Mo(t, r);
        return null
    }

    function ko(t, n) {
        null == n && (n = Za().touches);
        for (var e = 0, r = n ? n.length : 0, i = new Array(r); r > e; ++e)i[e] = Mo(t, n[e]);
        return i
    }

    function So(t) {
        return t
    }

    function Co(t) {
        return function (n) {
            return "translate(" + t(n) + ",0)"
        }
    }

    function Ao(t) {
        return function (n) {
            return "translate(0," + t(n) + ")"
        }
    }

    function Do(t) {
        var n = t.bandwidth() / 2;
        return function (e) {
            return t(e) + n
        }
    }

    function Fo(t) {
        t.enter().append("path").attr("class", "domain")
    }

    function Lo(t) {
        t.exit().remove();
        var n = t.enter().append("g", ".domain").attr("class", "tick");
        n.append("line"), n.append("text"), t.order()
    }

    function Po(t, n) {
        function e(e) {
            var c = null == i ? n.ticks ? n.ticks.apply(n, r) : n.domain() : i, f = null == a ? n.tickFormat ? n.tickFormat.apply(n, r) : So : a, h = Math.max(u, 0) + s, l = n.bandwidth ? Do(n) : n, d = n.range();
            e.each(function () {
                var e = xo(this), r = e.selectAll(".domain").data([null]).call(Fo), i = e.selectAll(".tick").data(c, n).call(Lo), a = i.select("line"), s = i.select("text").text(f);
                switch (t) {
                    case _d:
                        r.attr("d", "M" + d[0] + "," + -o + "V0H" + d[1] + "V" + -o), i.attr("transform", Co(l)), a.attr("x2", 0).attr("y2", -u), s.attr("x", 0).attr("y", -h).attr("dy", "0em").style("text-anchor", "middle");
                        break;
                    case yd:
                        r.attr("d", "M" + o + "," + d[0] + "H0V" + d[1] + "H" + o), i.attr("transform", Ao(l)), a.attr("y2", 0).attr("x2", u), s.attr("y", 0).attr("x", h).attr("dy", ".32em").style("text-anchor", "start");
                        break;
                    case vd:
                        r.attr("d", "M" + d[0] + "," + o + "V0H" + d[1] + "V" + o), i.attr("transform", Co(l)), a.attr("x2", 0).attr("y2", u), s.attr("x", 0).attr("y", h).attr("dy", ".71em").style("text-anchor", "middle");
                        break;
                    case bd:
                        r.attr("d", "M" + -o + "," + d[0] + "H0V" + d[1] + "H" + -o), i.attr("transform", Ao(l)), a.attr("y2", 0).attr("x2", -u), s.attr("y", 0).attr("x", -h).attr("dy", ".32em").style("text-anchor", "end")
                }
            })
        }

        var r = [], i = null, a = null, u = 6, o = 6, s = 3;
        return e.scale = function (t) {
            return arguments.length ? (n = t, e) : n
        }, e.ticks = function () {
            return r = pd.call(arguments), e
        }, e.tickArguments = function (t) {
            return arguments.length ? (r = null == t ? [] : pd.call(t), e) : r.slice()
        }, e.tickValues = function (t) {
            return arguments.length ? (i = null == t ? null : pd.call(t), e) : i && i.slice()
        }, e.tickFormat = function (t) {
            return arguments.length ? (a = t, e) : a
        }, e.tickSize = function (t) {
            return arguments.length ? (u = o = +t, e) : u
        }, e.tickSizeInner = function (t) {
            return arguments.length ? (u = +t, e) : u
        }, e.tickSizeOuter = function (t) {
            return arguments.length ? (o = +t, e) : o
        }, e.tickPadding = function (t) {
            return arguments.length ? (s = +t, e) : s
        }, e
    }

    function Eo(t) {
        return Po(_d, t)
    }

    function Uo(t) {
        return Po(yd, t)
    }

    function Ho(t) {
        return Po(vd, t)
    }

    function Oo(t) {
        return Po(bd, t)
    }

    function Ro(t) {
        return function () {
            return t
        }
    }

    function jo(t) {
        return t[0]
    }

    function qo(t) {
        return t[1]
    }

    function Yo() {
        this._ = null
    }

    function zo(t) {
        t.U = t.C = t.L = t.R = t.P = t.N = null
    }

    function Io(t, n) {
        var e = n, r = n.R, i = e.U;
        i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e
    }

    function Jo(t, n) {
        var e = n, r = n.L, i = e.U;
        i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e
    }

    function Bo(t) {
        for (; t.L;)t = t.L;
        return t
    }

    function Xo(t, n, e, r) {
        var i = [null, null], a = Nd.push(i) - 1;
        return i.left = t, i.right = n, e && Vo(i, t, n, e), r && Vo(i, n, t, r), wd[t.index].halfedges.push(a), wd[n.index].halfedges.push(a), i
    }

    function Wo(t, n, e) {
        var r = [n, e];
        return r.left = t, r
    }

    function Vo(t, n, e, r) {
        t[0] || t[1] ? t.left === e ? t[1] = r : t[0] = r : (t[0] = r, t.left = n, t.right = e)
    }

    function $o(t, n, e, r, i) {
        var a, u = t[0], o = t[1], s = u[0], c = u[1], f = o[0], h = o[1], l = 0, d = 1, g = f - s, m = h - c;
        if (a = n - s, g || !(a > 0)) {
            if (a /= g, 0 > g) {
                if (l > a)return;
                d > a && (d = a)
            } else if (g > 0) {
                if (a > d)return;
                a > l && (l = a)
            }
            if (a = r - s, g || !(0 > a)) {
                if (a /= g, 0 > g) {
                    if (a > d)return;
                    a > l && (l = a)
                } else if (g > 0) {
                    if (l > a)return;
                    d > a && (d = a)
                }
                if (a = e - c, m || !(a > 0)) {
                    if (a /= m, 0 > m) {
                        if (l > a)return;
                        d > a && (d = a)
                    } else if (m > 0) {
                        if (a > d)return;
                        a > l && (l = a)
                    }
                    if (a = i - c, m || !(0 > a)) {
                        if (a /= m, 0 > m) {
                            if (a > d)return;
                            a > l && (l = a)
                        } else if (m > 0) {
                            if (l > a)return;
                            d > a && (d = a)
                        }
                        if (!(l > 0 || 1 > d))return t;
                        var p = t.left, a = t.right;
                        return l > 0 && (u = [s + l * g, c + l * m]), 1 > d && (o = [s + d * g, c + d * m]), t = [u, o], t.left = p, t.right = a, t
                    }
                }
            }
        }
    }

    function Zo(t, n, e, r, i) {
        var a = t[1];
        if (a)return t;
        var u, o, s = t[0], c = t.left, f = t.right, h = c[0], l = c[1], d = f[0], g = f[1], m = (h + d) / 2, p = (l + g) / 2;
        if (g === l) {
            if (n > m || m >= r)return;
            if (h > d) {
                if (s) {
                    if (s[1] >= i)return
                } else s = [m, e];
                a = [m, i]
            } else {
                if (s) {
                    if (s[1] < e)return
                } else s = [m, i];
                a = [m, e]
            }
        } else if (u = (h - d) / (g - l), o = p - u * m, -1 > u || u > 1)if (h > d) {
            if (s) {
                if (s[1] >= i)return
            } else s = [(e - o) / u, e];
            a = [(i - o) / u, i]
        } else {
            if (s) {
                if (s[1] < e)return
            } else s = [(i - o) / u, i];
            a = [(e - o) / u, e]
        } else if (g > l) {
            if (s) {
                if (s[0] >= r)return
            } else s = [n, u * n + o];
            a = [r, u * r + o]
        } else {
            if (s) {
                if (s[0] < n)return
            } else s = [r, u * r + o];
            a = [n, u * n + o]
        }
        return t = [s, a], t.left = c, t.right = f, t
    }

    function Go(t, n, e, r) {
        for (var i, a = Nd.length, u = new Array(a); a--;)(i = Zo(Nd[a], t, n, e, r)) && (i = $o(i, t, n, e, r)) && (Math.abs(i[0][0] - i[1][0]) > Cd || Math.abs(i[0][1] - i[1][1]) > Cd) && (u[a] = i);
        return u
    }

    function Ko(t) {
        return wd[t.index] = {site: t, halfedges: []}
    }

    function Qo(t, n) {
        var e = t.site, r = n.left, i = n.right;
        return e === i && (i = r, r = e), i ? Math.atan2(i[1] - r[1], i[0] - r[0]) : (e === r ? (r = n[1], i = n[0]) : (r = n[0], i = n[1]), Math.atan2(r[0] - i[0], i[1] - r[1]))
    }

    function ts(t, n) {
        return n[+(n.left !== t.site)]
    }

    function ns(t, n) {
        return n[+(n.left === t.site)]
    }

    function es() {
        for (var t, n, e, r = 0, i = wd.length; i > r; ++r)if ((t = wd[r]) && (e = (n = t.halfedges).length)) {
            for (var a = new Array(e), u = new Array(e), o = 0; e > o; ++o)a[o] = o, u[o] = Qo(t, Nd[n[o]]);
            a.sort(function (t, n) {
                return u[n] - u[t]
            });
            for (var o = 0; e > o; ++o)u[o] = n[a[o]];
            for (var o = 0; e > o; ++o)n[o] = u[o]
        }
    }

    function rs(t, n, e, r, i) {
        for (var a, u, o, s, c, f, h, l, d, g, m = wd.length; m--;)if (a = wd[m]) {
            for (o = a.halfedges, u = o.length; u--;)t[o[u]] || o.splice(u, 1);
            for (u = 0, s = o.length; s > u;)l = ns(a, t[o[u]]), d = l[0], g = l[1], c = ts(a, t[o[++u % s]]), f = c[0], h = c[1], (Math.abs(d - f) > Cd || Math.abs(g - h) > Cd) && (o.splice(u, 0, t.push(Wo(a.site, l, Math.abs(d - n) < Cd && i - g > Cd ? [n, Math.abs(f - n) < Cd ? h : i] : Math.abs(g - i) < Cd && r - d > Cd ? [Math.abs(h - i) < Cd ? f : r, i] : Math.abs(d - r) < Cd && g - e > Cd ? [r, Math.abs(f - r) < Cd ? h : e] : Math.abs(g - e) < Cd && d - n > Cd ? [Math.abs(h - e) < Cd ? f : n, e] : null)) - 1), ++s)
        }
    }

    function is() {
        zo(this), this.x = this.y = this.arc = this.site = this.cy = null
    }

    function as(t) {
        var n = t.P, e = t.N;
        if (n && e) {
            var r = n.site, i = t.site, a = e.site;
            if (r !== a) {
                var u = i[0], o = i[1], s = r[0] - u, c = r[1] - o, f = a[0] - u, h = a[1] - o, l = 2 * (s * h - c * f);
                if (!(l >= -Ad)) {
                    var d = s * s + c * c, g = f * f + h * h, m = (h * d - c * g) / l, p = (s * g - f * d) / l, h = p + o, _ = kd.pop() || new is;
                    _.arc = t, _.site = i, _.x = m + u, _.y = h + Math.sqrt(m * m + p * p), _.cy = h, t.circle = _;
                    for (var y = null, v = Td._; v;)if (_.y < v.y || _.y === v.y && _.x <= v.x) {
                        if (!v.L) {
                            y = v.P;
                            break
                        }
                        v = v.L
                    } else {
                        if (!v.R) {
                            y = v;
                            break
                        }
                        v = v.R
                    }
                    Td.insert(y, _), y || (xd = _)
                }
            }
        }
    }

    function us(t) {
        var n = t.circle;
        n && (n.P || (xd = n.N), Td.remove(n), kd.push(n), zo(n), t.circle = null)
    }

    function os() {
        zo(this), this.edge = this.site = this.circle = null
    }

    function ss(t) {
        var n = Sd.pop() || new os;
        return n.site = t, n
    }

    function cs(t) {
        us(t), Md.remove(t), Sd.push(t), zo(t)
    }

    function fs(t) {
        var n = t.circle, e = n.x, r = n.cy, i = [e, r], a = t.P, u = t.N, o = [t];
        cs(t);
        for (var s = a; s.circle && Math.abs(e - s.circle.x) < Cd && Math.abs(r - s.circle.cy) < Cd;)a = s.P, o.unshift(s), cs(s), s = a;
        o.unshift(s), us(s);
        for (var c = u; c.circle && Math.abs(e - c.circle.x) < Cd && Math.abs(r - c.circle.cy) < Cd;)u = c.N, o.push(c), cs(c), c = u;
        o.push(c), us(c);
        var f, h = o.length;
        for (f = 1; h > f; ++f)c = o[f], s = o[f - 1], Vo(c.edge, s.site, c.site, i);
        s = o[0], c = o[h - 1], c.edge = Xo(s.site, c.site, null, i), as(s), as(c)
    }

    function hs(t) {
        for (var n, e, r, i, a = t[0], u = t[1], o = Md._; o;)if (r = ls(o, u) - a, r > Cd)o = o.L; else {
            if (i = a - ds(o, u), !(i > Cd)) {
                r > -Cd ? (n = o.P, e = o) : i > -Cd ? (n = o, e = o.N) : n = e = o;
                break
            }
            if (!o.R) {
                n = o;
                break
            }
            o = o.R
        }
        Ko(t);
        var s = ss(t);
        if (Md.insert(n, s), n || e) {
            if (n === e)return us(n), e = ss(n.site), Md.insert(s, e), s.edge = e.edge = Xo(n.site, s.site), as(n), void as(e);
            if (!e)return void(s.edge = Xo(n.site, s.site));
            us(n), us(e);
            var c = n.site, f = c[0], h = c[1], l = t[0] - f, d = t[1] - h, g = e.site, m = g[0] - f, p = g[1] - h, _ = 2 * (l * p - d * m), y = l * l + d * d, v = m * m + p * p, b = {
                x: (p * y - d * v) / _ + f,
                y: (l * v - m * y) / _ + h
            };
            Vo(e.edge, c, g, b), s.edge = Xo(c, t, null, b), e.edge = Xo(t, g, null, b), as(n), as(e)
        }
    }

    function ls(t, n) {
        var e = t.site, r = e[0], i = e[1], a = i - n;
        if (!a)return r;
        var u = t.P;
        if (!u)return -(1 / 0);
        e = u.site;
        var o = e[0], s = e[1], c = s - n;
        if (!c)return o;
        var f = o - r, h = 1 / a - 1 / c, l = f / c;
        return h ? (-l + Math.sqrt(l * l - 2 * h * (f * f / (-2 * c) - s + c / 2 + i - a / 2))) / h + r : (r + o) / 2
    }

    function ds(t, n) {
        var e = t.N;
        if (e)return ls(e, n);
        var r = t.site;
        return r[1] === n ? r[0] : 1 / 0
    }

    function gs(t, n, e) {
        return (t[0] - e[0]) * (n[1] - t[1]) - (t[0] - n[0]) * (e[1] - t[1])
    }

    function ms(t, n) {
        return n[1] - t[1] || n[0] - t[0]
    }

    function ps(t, n) {
        var e, r, i, a = t.sort(ms).pop();
        for (Nd = [], wd = new Array(t.length), Md = new Yo, Td = new Yo; ;)if (i = xd, a && (!i || a[1] < i.y || a[1] === i.y && a[0] < i.x))(a[0] !== e || a[1] !== r) && (hs(a), e = a[0], r = a[1]), a = t.pop(); else {
            if (!i)break;
            fs(i.arc)
        }
        if (es(), n) {
            var u = n[0][0], o = n[0][1], s = n[1][0], c = n[1][1];
            this.extent = [[u, o], [s, c]], this.cellEdges = Go(u, o, s, c), rs(this.cellEdges, u, o, s, c)
        } else this.cellEdges = Nd;
        this.cells = wd, this.edges = Nd, Md = Td = Nd = wd = null
    }

    function _s() {
        function t(t) {
            return new ps(t.map(function (r, i) {
                var a = [Math.round(n(r, i, t) / Cd) * Cd, Math.round(e(r, i, t) / Cd) * Cd];
                return a.index = i, a.data = r, a
            }), r)
        }

        var n = jo, e = qo, r = null;
        return t.polygons = function (n) {
            return t(n).polygons()
        }, t.links = function (n) {
            return t(n).links()
        }, t.triangles = function (n) {
            return t(n).triangles()
        }, t.x = function (e) {
            return arguments.length ? (n = "function" == typeof e ? e : Ro(+e), t) : n
        }, t.y = function (n) {
            return arguments.length ? (e = "function" == typeof n ? n : Ro(+n), t) : e
        }, t.extent = function (n) {
            return arguments.length ? (r = null == n ? null : [[+n[0][0], +n[0][1]], [+n[1][0], +n[1][1]]], t) : r && [[r[0][0], r[0][1]], [r[1][0], r[1][1]]]
        }, t.size = function (n) {
            return arguments.length ? (r = null == n ? null : [[0, 0], [+n[0], +n[1]]], t) : r && [r[1][0], r[1][1]]
        }, t
    }

    var ys = "4.0.0-alpha.9", vs = e(n), bs = vs.right, xs = vs.left, Ms = Math.sqrt(50), ws = Math.sqrt(10), Ts = Math.sqrt(2), Ns = "$";
    P.prototype = E.prototype = {
        has: function (t) {
            return Ns + t in this
        }, get: function (t) {
            return this[Ns + t]
        }, set: function (t, n) {
            return this[Ns + t] = n, this
        }, remove: function (t) {
            var n = Ns + t;
            return n in this && delete this[n]
        }, clear: function () {
            for (var t in this)t[0] === Ns && delete this[t]
        }, keys: function () {
            var t = [];
            for (var n in this)n[0] === Ns && t.push(n.slice(1));
            return t
        }, values: function () {
            var t = [];
            for (var n in this)n[0] === Ns && t.push(this[n]);
            return t
        }, entries: function () {
            var t = [];
            for (var n in this)n[0] === Ns && t.push({key: n.slice(1), value: this[n]});
            return t
        }, size: function () {
            var t = 0;
            for (var n in this)n[0] === Ns && ++t;
            return t
        }, empty: function () {
            for (var t in this)if (t[0] === Ns)return !1;
            return !0
        }, each: function (t) {
            for (var n in this)n[0] === Ns && t(this[n], n.slice(1), this)
        }
    };
    var ks = E.prototype;
    q.prototype = Y.prototype = {
        has: ks.has, add: function (t) {
            return t += "", this[Ns + t] = t, this
        }, remove: ks.remove, clear: ks.clear, values: ks.keys, size: ks.size, empty: ks.empty, each: ks.each
    };
    var Ss = Array.prototype.slice, Cs = Math.PI, As = Cs / 2, Ds = 4 / 11, Fs = 6 / 11, Ls = 8 / 11, Ps = .75, Es = 9 / 11, Us = 10 / 11, Hs = .9375, Os = 21 / 22, Rs = 63 / 64, js = 1 / Ds / Ds, qs = 2 * Math.PI, Ys = Math.PI, zs = 2 * Ys, Is = 1e-6, Js = zs - Is;
    Ot.prototype = Rt.prototype = {
        moveTo: function (t, n) {
            this._.push("M", this._x0 = this._x1 = +t, ",", this._y0 = this._y1 = +n)
        }, closePath: function () {
            null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._.push("Z"))
        }, lineTo: function (t, n) {
            this._.push("L", this._x1 = +t, ",", this._y1 = +n)
        }, quadraticCurveTo: function (t, n, e, r) {
            this._.push("Q", +t, ",", +n, ",", this._x1 = +e, ",", this._y1 = +r)
        }, bezierCurveTo: function (t, n, e, r, i, a) {
            this._.push("C", +t, ",", +n, ",", +e, ",", +r, ",", this._x1 = +i, ",", this._y1 = +a)
        }, arcTo: function (t, n, e, r, i) {
            t = +t, n = +n, e = +e, r = +r, i = +i;
            var a = this._x1, u = this._y1, o = e - t, s = r - n, c = a - t, f = u - n, h = c * c + f * f;
            if (0 > i)throw new Error("negative radius: " + i);
            if (null === this._x1)this._.push("M", this._x1 = t, ",", this._y1 = n); else if (h > Is)if (Math.abs(f * o - s * c) > Is && i) {
                var l = e - a, d = r - u, g = o * o + s * s, m = l * l + d * d, p = Math.sqrt(g), _ = Math.sqrt(h), y = i * Math.tan((Ys - Math.acos((g + h - m) / (2 * p * _))) / 2), v = y / _, b = y / p;
                Math.abs(v - 1) > Is && this._.push("L", t + v * c, ",", n + v * f), this._.push("A", i, ",", i, ",0,0,", +(f * l > c * d), ",", this._x1 = t + b * o, ",", this._y1 = n + b * s)
            } else this._.push("L", this._x1 = t, ",", this._y1 = n); else;
        }, arc: function (t, n, e, r, i, a) {
            t = +t, n = +n, e = +e;
            var u = e * Math.cos(r), o = e * Math.sin(r), s = t + u, c = n + o, f = 1 ^ a, h = a ? r - i : i - r;
            if (0 > e)throw new Error("negative radius: " + e);
            null === this._x1 ? this._.push("M", s, ",", c) : (Math.abs(this._x1 - s) > Is || Math.abs(this._y1 - c) > Is) && this._.push("L", s, ",", c), e && (h > Js ? this._.push("A", e, ",", e, ",0,1,", f, ",", t - u, ",", n - o, "A", e, ",", e, ",0,1,", f, ",", this._x1 = s, ",", this._y1 = c) : (0 > h && (h = h % zs + zs), this._.push("A", e, ",", e, ",0,", +(h >= Ys), ",", f, ",", this._x1 = t + e * Math.cos(i), ",", this._y1 = n + e * Math.sin(i))))
        }, rect: function (t, n, e, r) {
            this._.push("M", this._x0 = this._x1 = +t, ",", this._y0 = this._y1 = +n, "h", +e, "v", +r, "h", -e, "Z")
        }, toString: function () {
            return this._.join("")
        }
    };
    var Bs = 1e-12, Xs = Math.PI, Ws = Xs / 2, Vs = 2 * Xs, $s = Array.prototype.slice;
    rn.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._point = 0
        }, lineEnd: function () {
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                default:
                    this._context.lineTo(t, n)
            }
        }
    }, dn.prototype = {
        areaStart: function () {
            this._curve.areaStart()
        }, areaEnd: function () {
            this._curve.areaEnd()
        }, lineStart: function () {
            this._curve.lineStart()
        }, lineEnd: function () {
            this._curve.lineEnd()
        }, point: function (t, n) {
            t -= Ws, this._curve.point(n * Math.cos(t), n * Math.sin(t))
        }
    };
    var Zs = {
        draw: function (t, n) {
            var e = Math.sqrt(n / Xs);
            t.moveTo(e, 0), t.arc(0, 0, e, 0, Vs)
        }
    }, Gs = {
        draw: function (t, n) {
            var e = Math.sqrt(n / 5) / 2;
            t.moveTo(-3 * e, -e), t.lineTo(-e, -e), t.lineTo(-e, -3 * e), t.lineTo(e, -3 * e), t.lineTo(e, -e), t.lineTo(3 * e, -e), t.lineTo(3 * e, e), t.lineTo(e, e), t.lineTo(e, 3 * e), t.lineTo(-e, 3 * e), t.lineTo(-e, e), t.lineTo(-3 * e, e), t.closePath()
        }
    }, Ks = Math.sqrt(1 / 3), Qs = 2 * Ks, tc = {
        draw: function (t, n) {
            var e = Math.sqrt(n / Qs), r = e * Ks;
            t.moveTo(0, -e), t.lineTo(r, 0), t.lineTo(0, e), t.lineTo(-r, 0), t.closePath()
        }
    }, nc = .8908130915292852, ec = Math.sin(Xs / 10) / Math.sin(7 * Xs / 10), rc = Math.sin(Vs / 10) * ec, ic = -Math.cos(Vs / 10) * ec, ac = {
        draw: function (t, n) {
            var e = Math.sqrt(n * nc), r = rc * e, i = ic * e;
            t.moveTo(0, -e), t.lineTo(r, i);
            for (var a = 1; 5 > a; ++a) {
                var u = Vs * a / 5, o = Math.cos(u), s = Math.sin(u);
                t.lineTo(s * e, -o * e), t.lineTo(o * r - s * i, s * r + o * i)
            }
            t.closePath()
        }
    }, uc = {
        draw: function (t, n) {
            var e = Math.sqrt(n), r = -e / 2;
            t.rect(r, r, e, e)
        }
    }, oc = Math.sqrt(3), sc = {
        draw: function (t, n) {
            var e = -Math.sqrt(n / (3 * oc));
            t.moveTo(0, 2 * e), t.lineTo(-oc * e, -e), t.lineTo(oc * e, -e), t.closePath()
        }
    }, cc = -.5, fc = Math.sqrt(3) / 2, hc = 1 / Math.sqrt(12), lc = 3 * (hc / 2 + 1), dc = {
        draw: function (t, n) {
            var e = Math.sqrt(n / lc), r = e / 2, i = e * hc, a = r, u = e * hc + e, o = -a, s = u;
            t.moveTo(r, i), t.lineTo(a, u), t.lineTo(o, s), t.lineTo(cc * r - fc * i, fc * r + cc * i), t.lineTo(cc * a - fc * u, fc * a + cc * u), t.lineTo(cc * o - fc * s, fc * o + cc * s), t.lineTo(cc * r + fc * i, cc * i - fc * r), t.lineTo(cc * a + fc * u, cc * u - fc * a), t.lineTo(cc * o + fc * s, cc * s - fc * o), t.closePath()
        }
    }, gc = [Zs, Gs, tc, uc, ac, sc, dc];
    bn.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
        }, lineEnd: function () {
            switch (this._point) {
                case 3:
                    vn(this, this._x1, this._y1);
                case 2:
                    this._context.lineTo(this._x1, this._y1)
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                default:
                    vn(this, t, n)
            }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
        }
    }, Mn.prototype = {
        areaStart: yn, areaEnd: yn, lineStart: function () {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
        }, lineEnd: function () {
            switch (this._point) {
                case 1:
                    this._context.moveTo(this._x2, this._y2), this._context.closePath();
                    break;
                case 2:
                    this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                    break;
                case 3:
                    this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
            }
        }, point: function (t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._x2 = t, this._y2 = n;
                    break;
                case 1:
                    this._point = 2, this._x3 = t, this._y3 = n;
                    break;
                case 2:
                    this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
                    break;
                default:
                    vn(this, t, n)
            }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
        }
    }, Tn.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
        }, lineEnd: function () {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3;
                    var e = (this._x0 + 4 * this._x1 + t) / 6, r = (this._y0 + 4 * this._y1 + n) / 6;
                    this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
                    break;
                case 3:
                    this._point = 4;
                default:
                    vn(this, t, n)
            }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
        }
    }, kn.prototype = {
        lineStart: function () {
            this._x = [], this._y = [], this._basis.lineStart()
        }, lineEnd: function () {
            var t = this._x, n = this._y, e = t.length - 1;
            if (e > 0)for (var r, i = t[0], a = n[0], u = t[e] - i, o = n[e] - a, s = -1; ++s <= e;)r = s / e, this._basis.point(this._beta * t[s] + (1 - this._beta) * (i + r * u), this._beta * n[s] + (1 - this._beta) * (a + r * o));
            this._x = this._y = null, this._basis.lineEnd()
        }, point: function (t, n) {
            this._x.push(+t), this._y.push(+n)
        }
    }, An.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
        }, lineEnd: function () {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x2, this._y2);
                    break;
                case 3:
                    Cn(this, this._x1, this._y1)
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2, this._x1 = t, this._y1 = n;
                    break;
                case 2:
                    this._point = 3;
                default:
                    Cn(this, t, n)
            }
            this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
        }
    }, Fn.prototype = {
        areaStart: yn, areaEnd: yn, lineStart: function () {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
        }, lineEnd: function () {
            switch (this._point) {
                case 1:
                    this._context.moveTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 2:
                    this._context.lineTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 3:
                    this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
            }
        }, point: function (t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._x3 = t, this._y3 = n;
                    break;
                case 1:
                    this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                    break;
                case 2:
                    this._point = 3, this._x5 = t, this._y5 = n;
                    break;
                default:
                    Cn(this, t, n)
            }
            this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
        }
    }, Pn.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
        }, lineEnd: function () {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                    break;
                case 3:
                    this._point = 4;
                default:
                    Cn(this, t, n)
            }
            this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
        }
    }, Hn.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        }, lineEnd: function () {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x2, this._y2);
                    break;
                case 3:
                    this.point(this, this._x2, this._y2)
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, n) {
            if (t = +t, n = +n, this._point) {
                var e = this._x2 - t, r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            }
            switch (this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3;
                default:
                    Un(this, t, n)
            }
            this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
        }
    }, Rn.prototype = {
        areaStart: yn, areaEnd: yn, lineStart: function () {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        }, lineEnd: function () {
            switch (this._point) {
                case 1:
                    this._context.moveTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 2:
                    this._context.lineTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 3:
                    this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
            }
        }, point: function (t, n) {
            if (t = +t, n = +n, this._point) {
                var e = this._x2 - t, r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            }
            switch (this._point) {
                case 0:
                    this._point = 1, this._x3 = t, this._y3 = n;
                    break;
                case 1:
                    this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                    break;
                case 2:
                    this._point = 3, this._x5 = t, this._y5 = n;
                    break;
                default:
                    Un(this, t, n)
            }
            this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
        }
    }, qn.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        }, lineEnd: function () {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, n) {
            if (t = +t, n = +n, this._point) {
                var e = this._x2 - t, r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            }
            switch (this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                    break;
                case 3:
                    this._point = 4;
                default:
                    Un(this, t, n)
            }
            this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
        }
    }, zn.prototype = {
        areaStart: yn, areaEnd: yn, lineStart: function () {
            this._point = 0
        }, lineEnd: function () {
            this._point && this._context.closePath()
        }, point: function (t, n) {
            t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n))
        }
    }, Vn.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
        }, lineEnd: function () {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x1, this._y1);
                    break;
                case 3:
                    Wn(this, this._t0, Xn(this, this._t0))
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, n) {
            var e = NaN;
            if (t = +t, n = +n, t !== this._x1 || n !== this._y1) {
                switch (this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, Wn(this, Xn(this, e = Bn(this, t, n)), e);
                        break;
                    default:
                        Wn(this, this._t0, e = Bn(this, t, n))
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e
            }
        }
    }, Zn.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x = [], this._y = []
        }, lineEnd: function () {
            var t = this._x, n = this._y, e = t.length;
            if (e)if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e)this._context.lineTo(t[1], n[1]); else for (var r = Gn(t), i = Gn(n), a = 0, u = 1; e > u; ++a, ++u)this._context.bezierCurveTo(r[0][a], i[0][a], r[1][a], i[1][a], t[u], n[u]);
            (this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
        }, point: function (t, n) {
            this._x.push(+t), this._y.push(+n)
        }
    }, Qn.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x = this._y = NaN, this._point = 0
        }, lineEnd: function () {
            0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                default:
                    var e = t > this._x ? this._t : 1 - this._t;
                    if (0 >= e)this._context.lineTo(this._x, n), this._context.lineTo(t, n); else if (e >= 1)this._context.lineTo(t, this._y), this._context.lineTo(t, n); else {
                        var r = (this._x + t) * e;
                        this._context.lineTo(r, this._y), this._context.lineTo(r, n)
                    }
            }
            this._x = t, this._y = n
        }
    };
    var mc = Array.prototype.slice, pc = .7, _c = 1 / pc, yc = /^#([0-9a-f]{3})$/, vc = /^#([0-9a-f]{6})$/, bc = /^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/, xc = /^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/, Mc = /^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/, wc = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };
    pe.prototype = me.prototype = {
        displayable: function () {
            return this.rgb().displayable()
        }, toString: function () {
            return this.rgb() + ""
        }
    };
    var Tc = ye.prototype = ve.prototype = new me;
    Tc.brighter = function (t) {
        return t = null == t ? _c : Math.pow(_c, t), new ve(this.r * t, this.g * t, this.b * t)
    }, Tc.darker = function (t) {
        return t = null == t ? pc : Math.pow(pc, t), new ve(this.r * t, this.g * t, this.b * t)
    }, Tc.rgb = function () {
        return this
    }, Tc.displayable = function () {
        return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255
    }, Tc.toString = function () {
        var t = Math.round(this.r), n = Math.round(this.g), e = Math.round(this.b);
        return "#" + (isNaN(t) || 0 >= t ? "00" : 16 > t ? "0" + t.toString(16) : t >= 255 ? "ff" : t.toString(16)) + (isNaN(n) || 0 >= n ? "00" : 16 > n ? "0" + n.toString(16) : n >= 255 ? "ff" : n.toString(16)) + (isNaN(e) || 0 >= e ? "00" : 16 > e ? "0" + e.toString(16) : e >= 255 ? "ff" : e.toString(16))
    };
    var Nc = be.prototype = xe.prototype = new me;
    Nc.brighter = function (t) {
        return t = null == t ? _c : Math.pow(_c, t), new xe(this.h, this.s, this.l * t)
    }, Nc.darker = function (t) {
        return t = null == t ? pc : Math.pow(pc, t), new xe(this.h, this.s, this.l * t)
    }, Nc.rgb = function () {
        var t = this.h % 360 + 360 * (this.h < 0), n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (.5 > e ? e : 1 - e) * n, i = 2 * e - r;
        return new ve(Me(t >= 240 ? t - 240 : t + 120, i, r), Me(t, i, r), Me(120 > t ? t + 240 : t - 120, i, r))
    }, Nc.displayable = function () {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1
    };
    var kc = Math.PI / 180, Sc = 180 / Math.PI, Cc = 18, Ac = .95047, Dc = 1, Fc = 1.08883, Lc = 4 / 29, Pc = 6 / 29, Ec = 3 * Pc * Pc, Uc = Pc * Pc * Pc, Hc = we.prototype = Te.prototype = new me;
    Hc.brighter = function (t) {
        return new Te(this.l + Cc * (null == t ? 1 : t), this.a, this.b)
    }, Hc.darker = function (t) {
        return new Te(this.l - Cc * (null == t ? 1 : t), this.a, this.b)
    }, Hc.rgb = function () {
        var t = (this.l + 16) / 116, n = isNaN(this.a) ? t : t + this.a / 500, e = isNaN(this.b) ? t : t - this.b / 200;
        return t = Dc * ke(t), n = Ac * ke(n), e = Fc * ke(e), new ve(Se(3.2404542 * n - 1.5371385 * t - .4985314 * e), Se(-.969266 * n + 1.8760108 * t + .041556 * e), Se(.0556434 * n - .2040259 * t + 1.0572252 * e))
    };
    var Oc = Ae.prototype = De.prototype = new me;
    Oc.brighter = function (t) {
        return new De(this.h, this.c, this.l + Cc * (null == t ? 1 : t))
    }, Oc.darker = function (t) {
        return new De(this.h, this.c, this.l - Cc * (null == t ? 1 : t))
    }, Oc.rgb = function () {
        return we(this).rgb()
    };
    var Rc = -.14861, jc = 1.78277, qc = -.29227, Yc = -.90649, zc = 1.97294, Ic = zc * Yc, Jc = zc * jc, Bc = jc * qc - Yc * Rc, Xc = Fe.prototype = Le.prototype = new me;
    Xc.brighter = function (t) {
        return t = null == t ? _c : Math.pow(_c, t), new Le(this.h, this.s, this.l * t)
    }, Xc.darker = function (t) {
        return t = null == t ? pc : Math.pow(pc, t), new Le(this.h, this.s, this.l * t)
    }, Xc.rgb = function () {
        var t = isNaN(this.h) ? 0 : (this.h + 120) * kc, n = +this.l, e = isNaN(this.s) ? 0 : this.s * n * (1 - n), r = Math.cos(t), i = Math.sin(t);
        return new ve(255 * (n + e * (Rc * r + jc * i)), 255 * (n + e * (qc * r + Yc * i)), 255 * (n + e * (zc * r)))
    };
    var Wc, Vc = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, $c = new RegExp(Vc.source, "g"), Zc = [function (t, n) {
        var e, r = typeof n;
        return ("string" === r ? (e = pe(n)) ? (n = e, Pe) : je : n instanceof pe ? Pe : Array.isArray(n) ? Ee : "object" === r && isNaN(n) ? He : Ue)(t, n)
    }], Gc = 180 / Math.PI, Kc = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
    }, Qc = Math.SQRT2, tf = 2, nf = 4, ef = 1e-12, rf = Array.prototype.slice;
    lr.prototype = dr.prototype, gr.prototype = yr.prototype;
    var af, uf, of = gr(","), sf = gr("	"), cf = Mr("text/html", function (t) {
        return document.createRange().createContextualFragment(t.responseText)
    }), ff = Mr("application/json", function (t) {
        return JSON.parse(t.responseText)
    }), hf = Mr("text/plain", function (t) {
        return t.responseText
    }), lf = Mr("application/xml", function (t) {
        var n = t.responseXML;
        if (!n)throw new Error("parse error");
        return n
    }), df = wr("text/csv", of), gf = wr("text/tab-separated-values", sf), mf = 0, pf = 0, _f = 0, yf = {}, vf = "undefined" != typeof window && (window.requestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame) || function (t) {
            return setTimeout(t, 17)
        };
    Nr.prototype = kr.prototype = {
        restart: function (t, n, e) {
            if ("function" != typeof t)throw new TypeError("callback is not a function");
            e = (null == e ? Date.now() : +e) + (null == n ? 0 : +n);
            var r = this.id, i = yf[r];
            i ? (i.callback = t, i.time = e) : (i = {
                next: null,
                callback: t,
                time: e
            }, uf ? uf.next = i : af = i, yf[r] = uf = i), Ar()
        }, stop: function () {
            var t = this.id, n = yf[t];
            n && (n.callback = null, n.time = 1 / 0, delete yf[t], Ar())
        }
    };
    var bf = new Date, xf = new Date, Mf = Dr(function () {
    }, function (t, n) {
        t.setTime(+t + n)
    }, function (t, n) {
        return n - t
    });
    Mf.every = function (t) {
        return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? Dr(function (n) {
            n.setTime(Math.floor(n / t) * t)
        }, function (n, e) {
            n.setTime(+n + e * t)
        }, function (n, e) {
            return (e - n) / t
        }) : Mf : null
    };
    var wf, Tf = Dr(function (t) {
        t.setMilliseconds(0)
    }, function (t, n) {
        t.setTime(+t + 1e3 * n)
    }, function (t, n) {
        return (n - t) / 1e3
    }, function (t) {
        return t.getSeconds()
    }), Nf = Dr(function (t) {
        t.setSeconds(0, 0)
    }, function (t, n) {
        t.setTime(+t + 6e4 * n)
    }, function (t, n) {
        return (n - t) / 6e4
    }, function (t) {
        return t.getMinutes()
    }), kf = Dr(function (t) {
        t.setMinutes(0, 0, 0)
    }, function (t, n) {
        t.setTime(+t + 36e5 * n)
    }, function (t, n) {
        return (n - t) / 36e5
    }, function (t) {
        return t.getHours()
    }), Sf = Dr(function (t) {
        t.setHours(0, 0, 0, 0)
    }, function (t, n) {
        t.setDate(t.getDate() + n)
    }, function (t, n) {
        return (n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5
    }, function (t) {
        return t.getDate() - 1
    }), Cf = Fr(0), Af = Fr(1), Df = Fr(2), Ff = Fr(3), Lf = Fr(4), Pf = Fr(5), Ef = Fr(6), Uf = Dr(function (t) {
        t.setHours(0, 0, 0, 0), t.setDate(1)
    }, function (t, n) {
        t.setMonth(t.getMonth() + n)
    }, function (t, n) {
        return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
    }, function (t) {
        return t.getMonth()
    }), Hf = Dr(function (t) {
        t.setHours(0, 0, 0, 0), t.setMonth(0, 1)
    }, function (t, n) {
        t.setFullYear(t.getFullYear() + n)
    }, function (t, n) {
        return n.getFullYear() - t.getFullYear()
    }, function (t) {
        return t.getFullYear()
    }), Of = Dr(function (t) {
        t.setUTCMilliseconds(0)
    }, function (t, n) {
        t.setTime(+t + 1e3 * n)
    }, function (t, n) {
        return (n - t) / 1e3
    }, function (t) {
        return t.getUTCSeconds()
    }), Rf = Dr(function (t) {
        t.setUTCSeconds(0, 0)
    }, function (t, n) {
        t.setTime(+t + 6e4 * n)
    }, function (t, n) {
        return (n - t) / 6e4
    }, function (t) {
        return t.getUTCMinutes()
    }), jf = Dr(function (t) {
        t.setUTCMinutes(0, 0, 0)
    }, function (t, n) {
        t.setTime(+t + 36e5 * n)
    }, function (t, n) {
        return (n - t) / 36e5
    }, function (t) {
        return t.getUTCHours()
    }), qf = Dr(function (t) {
        t.setUTCHours(0, 0, 0, 0)
    }, function (t, n) {
        t.setUTCDate(t.getUTCDate() + n)
    }, function (t, n) {
        return (n - t) / 864e5
    }, function (t) {
        return t.getUTCDate() - 1
    }), Yf = Lr(0), zf = Lr(1), If = Lr(2), Jf = Lr(3), Bf = Lr(4), Xf = Lr(5), Wf = Lr(6), Vf = Dr(function (t) {
        t.setUTCHours(0, 0, 0, 0), t.setUTCDate(1)
    }, function (t, n) {
        t.setUTCMonth(t.getUTCMonth() + n)
    }, function (t, n) {
        return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())
    }, function (t) {
        return t.getUTCMonth()
    }), $f = Dr(function (t) {
        t.setUTCHours(0, 0, 0, 0), t.setUTCMonth(0, 1)
    }, function (t, n) {
        t.setUTCFullYear(t.getUTCFullYear() + n)
    }, function (t, n) {
        return n.getUTCFullYear() - t.getUTCFullYear()
    }, function (t) {
        return t.getUTCFullYear()
    }), Zf = Mf.range, Gf = Tf.range, Kf = Nf.range, Qf = kf.range, th = Sf.range, nh = Cf.range, eh = Af.range, rh = Df.range, ih = Ff.range, ah = Lf.range, uh = Pf.range, oh = Ef.range, sh = Cf.range, ch = Uf.range, fh = Hf.range, hh = Mf, lh = Zf, dh = Of.range, gh = Rf.range, mh = jf.range, ph = qf.range, _h = Yf.range, yh = zf.range, vh = If.range, bh = Jf.range, xh = Bf.range, Mh = Xf.range, wh = Wf.range, Th = Yf.range, Nh = Vf.range, kh = $f.range, Sh = {
        "": Hr,
        "%": function (t, n) {
            return (100 * t).toFixed(n)
        },
        b: function (t) {
            return Math.round(t).toString(2)
        },
        c: function (t) {
            return t + ""
        },
        d: function (t) {
            return Math.round(t).toString(10)
        },
        e: function (t, n) {
            return t.toExponential(n)
        },
        f: function (t, n) {
            return t.toFixed(n)
        },
        g: function (t, n) {
            return t.toPrecision(n)
        },
        o: function (t) {
            return Math.round(t).toString(8)
        },
        p: function (t, n) {
            return Rr(100 * t, n)
        },
        r: Rr,
        s: Or,
        X: function (t) {
            return Math.round(t).toString(16).toUpperCase()
        },
        x: function (t) {
            return Math.round(t).toString(16)
        }
    }, Ch = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
    qr.prototype.toString = function () {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type
    };
    var Ah = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"], Dh = zr({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""]
    }), Fh = zr({decimal: ",", thousands: ".", grouping: [3], currency: ["", " €"]}), Lh = zr({
        decimal: ",",
        thousands: " ",
        grouping: [3],
        currency: ["", " Kč"]
    }), Ph = zr({decimal: ",", thousands: "'", grouping: [3], currency: ["", " CHF"]}), Eh = zr({
        decimal: ",",
        thousands: ".",
        grouping: [3],
        currency: ["", " €"]
    }), Uh = zr({decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""]}), Hh = zr({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["£", ""]
    }), Oh = zr({decimal: ",", thousands: ".", grouping: [3], currency: ["", " €"]}), Rh = zr({
        decimal: ",",
        thousands: " ",
        grouping: [3],
        currency: ["", " €"]
    }), jh = zr({decimal: ",", thousands: " ", grouping: [3], currency: ["", "$"]}), qh = zr({
        decimal: ",",
        thousands: ".",
        grouping: [3],
        currency: ["", " €"]
    }), Yh = zr({decimal: ".", thousands: ",", grouping: [3], currency: ["₪", ""]}), zh = zr({
        decimal: ",",
        thousands: " ",
        grouping: [3],
        currency: ["", " Ft"]
    }), Ih = zr({decimal: ",", thousands: ".", grouping: [3], currency: ["€", ""]}), Jh = zr({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["", "円"]
    }), Bh = zr({decimal: ".", thousands: ",", grouping: [3], currency: ["₩", ""]}), Xh = zr({
        decimal: ",",
        thousands: ".",
        grouping: [3],
        currency: ["", " ден."]
    }), Wh = zr({decimal: ",", thousands: ".", grouping: [3], currency: ["€ ", ""]}), Vh = zr({
        decimal: ",",
        thousands: ".",
        grouping: [3],
        currency: ["", "zł"]
    }), $h = zr({decimal: ",", thousands: ".", grouping: [3], currency: ["R$", ""]}), Zh = zr({
        decimal: ",",
        thousands: " ",
        grouping: [3],
        currency: ["", " руб."]
    }), Gh = zr({decimal: ",", thousands: " ", grouping: [3], currency: ["", "SEK"]}), Kh = zr({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["¥", ""]
    }), Qh = Dh.format, tl = Dh.formatPrefix, nl = {
        "-": "",
        _: " ",
        0: "0"
    }, el = /^\s*\d+/, rl = /^%/, il = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g, al = $r({
        dateTime: "%a %b %e %X %Y",
        date: "%m/%d/%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    }), ul = $r({
        dateTime: "%A, %e de %B de %Y, %X",
        date: "%d/%m/%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"],
        shortDays: ["dg.", "dl.", "dt.", "dc.", "dj.", "dv.", "ds."],
        months: ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"],
        shortMonths: ["gen.", "febr.", "març", "abr.", "maig", "juny", "jul.", "ag.", "set.", "oct.", "nov.", "des."]
    }), ol = $r({
        dateTime: "%A, der %e. %B %Y, %X",
        date: "%d.%m.%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
        shortDays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
        months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
        shortMonths: ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
    }), sl = $r({
        dateTime: "%A, der %e. %B %Y, %X",
        date: "%d.%m.%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
        shortDays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
        months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
        shortMonths: ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
    }), cl = $r({
        dateTime: "%a %b %e %X %Y",
        date: "%Y-%m-%d",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    }), fl = $r({
        dateTime: "%a %e %b %X %Y",
        date: "%d/%m/%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    }), hl = $r({
        dateTime: "%A, %e de %B de %Y, %X",
        date: "%d/%m/%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
        shortDays: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
        months: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
        shortMonths: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
    }), ll = $r({
        dateTime: "%A, %-d. %Bta %Y klo %X",
        date: "%-d.%-m.%Y",
        time: "%H:%M:%S",
        periods: ["a.m.", "p.m."],
        days: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"],
        shortDays: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
        months: ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"],
        shortMonths: ["Tammi", "Helmi", "Maalis", "Huhti", "Touko", "Kesä", "Heinä", "Elo", "Syys", "Loka", "Marras", "Joulu"]
    }), dl = $r({
        dateTime: "%a %e %b %Y %X",
        date: "%Y-%m-%d",
        time: "%H:%M:%S",
        periods: ["", ""],
        days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
        shortDays: ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"],
        months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
        shortMonths: ["jan", "fév", "mar", "avr", "mai", "jui", "jul", "aoû", "sep", "oct", "nov", "déc"]
    }), gl = $r({
        dateTime: "%A, le %e %B %Y, %X",
        date: "%d/%m/%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
        shortDays: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
        months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
        shortMonths: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."]
    }), ml = $r({
        dateTime: "%A, %e ב%B %Y %X",
        date: "%d.%m.%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
        shortDays: ["א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"],
        months: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
        shortMonths: ["ינו׳", "פבר׳", "מרץ", "אפר׳", "מאי", "יוני", "יולי", "אוג׳", "ספט׳", "אוק׳", "נוב׳", "דצמ׳"]
    }), pl = $r({
        dateTime: "%Y. %B %-e., %A %X",
        date: "%Y. %m. %d.",
        time: "%H:%M:%S",
        periods: ["de.", "du."],
        days: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"],
        shortDays: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
        months: ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"],
        shortMonths: ["jan.", "feb.", "már.", "ápr.", "máj.", "jún.", "júl.", "aug.", "szept.", "okt.", "nov.", "dec."]
    }), _l = $r({
        dateTime: "%A %e %B %Y, %X",
        date: "%d/%m/%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
        shortDays: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
        months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
        shortMonths: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"]
    }), yl = $r({
        dateTime: "%Y %b %e %a %X",
        date: "%Y/%m/%d",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
        shortDays: ["日", "月", "火", "水", "木", "金", "土"],
        months: ["睦月", "如月", "弥生", "卯月", "皐月", "水無月", "文月", "葉月", "長月", "神無月", "霜月", "師走"],
        shortMonths: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
    }), vl = $r({
        dateTime: "%Y/%m/%d %a %X",
        date: "%Y/%m/%d",
        time: "%H:%M:%S",
        periods: ["오전", "오후"],
        days: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
        shortDays: ["일", "월", "화", "수", "목", "금", "토"],
        months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        shortMonths: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
    }), bl = $r({
        dateTime: "%A, %e %B %Y г. %X",
        date: "%d.%m.%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["недела", "понеделник", "вторник", "среда", "четврток", "петок", "сабота"],
        shortDays: ["нед", "пон", "вто", "сре", "чет", "пет", "саб"],
        months: ["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"],
        shortMonths: ["јан", "фев", "мар", "апр", "мај", "јун", "јул", "авг", "сеп", "окт", "ное", "дек"]
    }), xl = $r({
        dateTime: "%a %e %B %Y %T",
        date: "%d-%m-%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
        shortDays: ["zo", "ma", "di", "wo", "do", "vr", "za"],
        months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
        shortMonths: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"]
    }), Ml = $r({
        dateTime: "%A, %e %B %Y, %X",
        date: "%d/%m/%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
        shortDays: ["Niedz.", "Pon.", "Wt.", "Śr.", "Czw.", "Pt.", "Sob."],
        months: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
        shortMonths: ["Stycz.", "Luty", "Marz.", "Kwie.", "Maj", "Czerw.", "Lipc.", "Sierp.", "Wrz.", "Paźdz.", "Listop.", "Grudz."]
    }), wl = $r({
        dateTime: "%A, %e de %B de %Y. %X",
        date: "%d/%m/%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
        shortDays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        shortMonths: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
    }), Tl = $r({
        dateTime: "%A, %e %B %Y г. %X",
        date: "%d.%m.%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
        shortDays: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
        months: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
        shortMonths: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]
    }), Nl = $r({
        dateTime: "%A den %d %B %Y %X",
        date: "%Y-%m-%d",
        time: "%H:%M:%S",
        periods: ["fm", "em"],
        days: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
        shortDays: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
        months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"]
    }), kl = $r({
        dateTime: "%a %b %e %X %Y",
        date: "%Y/%-m/%-d",
        time: "%H:%M:%S",
        periods: ["上午", "下午"],
        days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        shortDays: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        shortMonths: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
    }), Sl = "%Y-%m-%dT%H:%M:%S.%LZ", Cl = Date.prototype.toISOString ? Ii : al.utcFormat(Sl), Al = +new Date("2000-01-01T00:00:00.000Z") ? Ji : al.utcParse(Sl), Dl = al.format, Fl = al.parse, Ll = al.utcFormat, Pl = al.utcParse, El = Array.prototype, Ul = El.map, Hl = El.slice, Ol = {name: "implicit"}, Rl = [0, 1], jl = Qh(".0e"), ql = Qh(","), Yl = 1e3, zl = 60 * Yl, Il = 60 * zl, Jl = 24 * Il, Bl = 7 * Jl, Xl = 30 * Jl, Wl = 365 * Jl, Vl = e(function (t) {
        return t[2]
    }).right, $l = Fe(-100, .75, .35), Zl = Fe(80, 1.5, .8), Gl = Fe(260, .75, .35), Kl = Fe(), Ql = cr($l, Zl), td = cr(Gl, Zl), nd = ka("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"), ed = ka("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"), rd = ka("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"), id = ka("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"), ad = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g, ud = {};
    if (t.event = null, "undefined" != typeof document) {
        var od = document.documentElement;
        "onmouseenter" in od || (ud = {mouseenter: "mouseover", mouseleave: "mouseout"})
    }
    var sd = function (t) {
        return function () {
            return this.matches(t)
        }
    };
    if ("undefined" != typeof document) {
        var cd = document.documentElement;
        if (!cd.matches) {
            var fd = cd.webkitMatchesSelector || cd.msMatchesSelector || cd.mozMatchesSelector || cd.oMatchesSelector;
            sd = function (t) {
                return function () {
                    return fd.call(this, t)
                }
            }
        }
    }
    var hd = sd, ld = "$";
    su.prototype = {
        appendChild: function (t) {
            return this._parent.insertBefore(t, this._next)
        }, insertBefore: function (t, n) {
            return this._parent.insertBefore(t, n)
        }, querySelector: function (t) {
            return this._parent.querySelector(t)
        }, querySelectorAll: function (t) {
            return this._parent.querySelectorAll(t)
        }
    };
    var dd = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };
    ju.prototype = {
        add: function (t) {
            var n = this._names.indexOf(t);
            0 > n && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
        }, remove: function (t) {
            var n = this._names.indexOf(t);
            n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
        }, contains: function (t) {
            return this._names.indexOf(t) >= 0
        }
    };
    var gd = [null];
    vo.prototype = bo.prototype = {
        select: Qa,
        selectAll: nu,
        filter: eu,
        data: ou,
        enter: fu,
        exit: hu,
        order: lu,
        sort: du,
        call: mu,
        nodes: pu,
        node: _u,
        size: yu,
        empty: vu,
        each: bu,
        attr: Cu,
        style: Lu,
        property: Hu,
        classed: Bu,
        text: $u,
        html: Qu,
        raise: no,
        lower: ro,
        append: fo,
        remove: lo,
        datum: go,
        on: $a,
        dispatch: yo
    };
    var md = "undefined" != typeof navigator && /WebKit/.test(navigator.userAgent) ? -1 : 0, pd = Array.prototype.slice, _d = {}, yd = {}, vd = {}, bd = {};
    Yo.prototype = {
        insert: function (t, n) {
            var e, r, i;
            if (t) {
                if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
                    for (t = t.R; t.L;)t = t.L;
                    t.L = n
                } else t.R = n;
                e = t
            } else this._ ? (t = Bo(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null);
            for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;)r = e.U, e === r.L ? (i = r.R, i && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.R && (Io(this, e), t = e, e = t.U), e.C = !1, r.C = !0, Jo(this, r))) : (i = r.L, i && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.L && (Jo(this, e), t = e, e = t.U), e.C = !1, r.C = !0, Io(this, r))), e = t.U;
            this._.C = !1
        }, remove: function (t) {
            t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
            var n, e, r, i = t.U, a = t.L, u = t.R;
            if (e = a ? u ? Bo(u) : a : u, i ? i.L === t ? i.L = e : i.R = e : this._ = e, a && u ? (r = e.C, e.C = t.C, e.L = a, a.U = e, e !== u ? (i = e.U, e.U = t.U, t = e.R, i.L = t, e.R = u, u.U = e) : (e.U = i, i = e, t = e.R)) : (r = t.C, t = e), t && (t.U = i), !r) {
                if (t && t.C)return void(t.C = !1);
                do {
                    if (t === this._)break;
                    if (t === i.L) {
                        if (n = i.R, n.C && (n.C = !1, i.C = !0, Io(this, i), n = i.R), n.L && n.L.C || n.R && n.R.C) {
                            n.R && n.R.C || (n.L.C = !1, n.C = !0, Jo(this, n), n = i.R), n.C = i.C, i.C = n.R.C = !1, Io(this, i), t = this._;
                            break
                        }
                    } else if (n = i.L, n.C && (n.C = !1, i.C = !0, Jo(this, i), n = i.L), n.L && n.L.C || n.R && n.R.C) {
                        n.L && n.L.C || (n.R.C = !1, n.C = !0, Io(this, n), n = i.L), n.C = i.C, i.C = n.L.C = !1, Jo(this, i), t = this._;
                        break
                    }
                    n.C = !0, t = i, i = i.U
                } while (!t.C);
                t && (t.C = !1)
            }
        }
    };
    var xd, Md, wd, Td, Nd, kd = [], Sd = [], Cd = 1e-6, Ad = 1e-12;
    ps.prototype = {
        polygons: function () {
            var t = this.cells, n = this.cellEdges, e = this.extent, r = e[0][0], i = e[0][1], a = e[1][0], u = e[1][1], o = new Array(t.length);
            return t.forEach(function (t, e) {
                var s, c = t.site, f = t.halfedges;
                if (f.length)s = f.map(function (e) {
                    return ts(t, n[e])
                }); else {
                    if (!(c[0] >= r && c[0] <= a && c[1] >= i && c[1] <= u))return;
                    s = [[r, u], [a, u], [a, i], [r, i]]
                }
                o[e] = s, s.data = c.data
            }), o
        }, triangles: function () {
            var t = [], n = this.edges;
            return this.cells.forEach(function (e, r) {
                for (var i, a, u = e.site, o = e.halfedges, s = -1, c = o.length, f = n[o[c - 1]], h = f.left === u ? f.right : f.left; ++s < c;)i = f, a = h, f = n[o[s]], h = f.left === u ? f.right : f.left, r < a.index && r < h.index && gs(u, a, h) < 0 && t.push([u.data, a.data, h.data])
            }), t
        }, links: function () {
            return this.edges.filter(function (t) {
                return t.right
            }).map(function (t) {
                return {source: t.left.data, target: t.right.data}
            })
        }
    }, t.version = ys, t.bisect = bs, t.bisectRight = bs, t.bisectLeft = xs, t.ascending = n, t.bisector = e, t.descending = i, t.deviation = o, t.extent = s, t.histogram = p, t.thresholdFreedmanDiaconis = y, t.thresholdScott = v, t.thresholdSturges = g, t.max = b, t.mean = x, t.median = M, t.merge = w, t.min = T, t.pairs = N, t.permute = k, t.quantile = _, t.range = h, t.scan = S, t.shuffle = C, t.sum = A, t.ticks = l, t.transpose = D, t.variance = u, t.zip = L, t.entries = J, t.keys = z, t.values = I, t.map = E, t.set = Y, t.nest = U, t.randomUniform = B, t.randomNormal = X, t.randomLogNormal = W, t.randomBates = $, t.randomIrwinHall = V, t.randomExponential = Z, t.easeBind = tt, t.easeLinearIn = nt, t.easeLinearOut = nt, t.easeLinearInOut = nt, t.easeQuadIn = et, t.easeQuadOut = rt, t.easeQuadInOut = it, t.easeCubicIn = at, t.easeCubicOut = ut, t.easeCubicInOut = ot, t.easePolyIn = st, t.easePolyOut = ct, t.easePolyInOut = ft, t.easeSinIn = ht, t.easeSinOut = lt, t.easeSinInOut = dt, t.easeExpIn = gt, t.easeExpOut = mt, t.easeExpInOut = pt, t.easeCircleIn = _t, t.easeCircleOut = yt, t.easeCircleInOut = vt, t.easeBounceIn = bt, t.easeBounceOut = xt, t.easeBounceInOut = Mt, t.easeBackIn = wt, t.easeBackOut = Tt, t.easeBackInOut = Nt, t.easeElasticIn = kt, t.easeElasticOut = St, t.easeElasticInOut = Ct, t.polygonArea = At, t.polygonCentroid = Dt, t.polygonHull = Et, t.polygonContains = Ut, t.polygonLength = Ht, t.path = Rt, t.quadtree = Bt, t.arc = nn, t.area = sn, t.line = cn, t.pie = ln, t.radialArea = mn, t.radialLine = pn, t.symbol = _n, t.symbols = gc, t.symbolCircle = Zs, t.symbolCross = Gs, t.symbolDiamond = tc, t.symbolSquare = uc, t.symbolStar = ac, t.symbolTriangle = sc, t.symbolWye = dc, t.curveBasisClosed = wn, t.curveBasisOpen = Nn, t.curveBasis = xn, t.curveBundle = Sn, t.curveCardinalClosed = Ln, t.curveCardinalOpen = En,t.curveCardinal = Dn,t.curveCatmullRomClosed = jn,t.curveCatmullRomOpen = Yn,t.curveCatmullRom = On,
    t.curveLinearClosed = In,t.curveLinear = an,t.curveMonotone = $n,t.curveNatural = Kn,t.curveStep = te,t.curveStepAfter = ee,t.curveStepBefore = ne,t.stack = ue,t.stackOffsetExpand = oe,t.stackOffsetNone = re,t.stackOffsetSilhouette = se,t.stackOffsetWiggle = ce,t.stackOrderAscending = fe,t.stackOrderDescending = le,t.stackOrderInsideOut = de,t.stackOrderNone = ie,t.stackOrderReverse = ge,t.color = pe,t.rgb = ye,t.hsl = be,t.lab = we,t.hcl = Ae,t.cubehelix = Fe,t.interpolateBind = hr,t.interpolate = qe,t.interpolators = Zc,t.interpolateArray = Ee,t.interpolateNumber = Ue,t.interpolateObject = He,t.interpolateRound = Ye,t.interpolateString = je,t.interpolateTransform = Ge,t.interpolateZoom = nr,t.interpolateRgb = Pe,t.interpolateHsl = rr,t.interpolateHslLong = ir,t.interpolateLab = ar,t.interpolateHcl = ur,t.interpolateHclLong = or,t.interpolateCubehelix = sr,t.interpolateCubehelixLong = cr,t.dispatch = lr,t.dsv = gr,t.csv = of,t.tsv = sf,t.request = vr,t.requestHtml = cf,t.requestJson = ff,t.requestText = hf,t.requestXml = lf,t.requestCsv = df,t.requestTsv = gf,t.timer = kr,t.timerFlush = Sr,t.timeInterval = Dr,t.timeMillisecond = Mf,t.timeMilliseconds = Zf,t.timeSecond = Tf,t.timeSeconds = Gf,t.timeMinute = Nf,t.timeMinutes = Kf,t.timeHour = kf,t.timeHours = Qf,t.timeDay = Sf,t.timeDays = th,t.timeWeek = Cf,t.timeWeeks = sh,t.timeSunday = Cf,t.timeSundays = nh,t.timeMonday = Af,t.timeMondays = eh,t.timeTuesday = Df,t.timeTuesdays = rh,t.timeWednesday = Ff,t.timeWednesdays = ih,t.timeThursday = Lf,t.timeThursdays = ah,t.timeFriday = Pf,t.timeFridays = uh,t.timeSaturday = Ef,t.timeSaturdays = oh,t.timeMonth = Uf,t.timeMonths = ch,t.timeYear = Hf,t.timeYears = fh,t.utcMillisecond = hh,t.utcMilliseconds = lh,t.utcSecond = Of,t.utcSeconds = dh,t.utcMinute = Rf,t.utcMinutes = gh,t.utcHour = jf,t.utcHours = mh,t.utcDay = qf,t.utcDays = ph,t.utcWeek = Yf,t.utcWeeks = Th,t.utcSunday = Yf,t.utcSundays = _h,t.utcMonday = zf,t.utcMondays = yh,t.utcTuesday = If,t.utcTuesdays = vh,t.utcWednesday = Jf,t.utcWednesdays = bh,t.utcThursday = Bf,t.utcThursdays = xh,t.utcFriday = Xf,t.utcFridays = Mh,t.utcSaturday = Wf,t.utcSaturdays = wh,t.utcMonth = Vf,t.utcMonths = Nh,t.utcYear = $f,t.utcYears = kh,t.format = Qh,t.formatPrefix = tl,t.formatLocale = zr,t.formatCaEs = Fh,t.formatCsCz = Lh,t.formatDeCh = Ph,t.formatDeDe = Eh,t.formatEnCa = Uh,t.formatEnGb = Hh,t.formatEnUs = Dh,t.formatEsEs = Oh,t.formatFiFi = Rh,t.formatFrCa = jh,t.formatFrFr = qh,t.formatHeIl = Yh,t.formatHuHu = zh,t.formatItIt = Ih,t.formatJaJp = Jh,t.formatKoKr = Bh,t.formatMkMk = Xh,t.formatNlNl = Wh,t.formatPlPl = Vh,t.formatPtBr = $h,t.formatRuRu = Zh,t.formatSvSe = Gh,t.formatZhCn = Kh,t.formatSpecifier = jr,t.precisionFixed = Ir,t.precisionPrefix = Jr,t.precisionRound = Br,t.timeFormat = Dl,t.timeParse = Fl,t.utcFormat = Ll,t.utcParse = Pl,t.isoFormat = Cl,t.isoParse = Al,t.timeFormatLocale = $r,t.timeFormatCaEs = ul,t.timeFormatDeCh = ol,t.timeFormatDeDe = sl,t.timeFormatEnCa = cl,t.timeFormatEnGb = fl,t.timeFormatEnUs = al,t.timeFormatEsEs = hl,t.timeFormatFiFi = ll,t.timeFormatFrCa = dl,t.timeFormatFrFr = gl,t.timeFormatHeIl = ml,t.timeFormatHuHu = pl,t.timeFormatItIt = _l,t.timeFormatJaJp = yl,t.timeFormatKoKr = vl,t.timeFormatMkMk = bl,t.timeFormatNlNl = xl,t.timeFormatPlPl = Ml,t.timeFormatPtBr = wl,t.timeFormatRuRu = Tl,t.timeFormatSvSe = Nl,t.timeFormatZhCn = kl,t.scaleBand = Xi,t.scalePoint = Vi,t.scaleIdentity = oa,t.scaleLinear = ua,t.scaleLog = ma,t.scaleOrdinal = Bi,t.scaleImplicit = Ol,t.scalePow = _a,t.scaleSqrt = ya,t.scaleQuantile = va,t.scaleQuantize = ba,t.scaleThreshold = xa,t.scaleTime = Ta,t.scaleUtc = Na,t.scaleCategory10 = Sa,t.scaleCategory20b = Ca,t.scaleCategory20c = Aa,t.scaleCategory20 = Da,t.scaleCubehelix = Fa,t.scaleRainbow = Ha,t.scaleWarm = Ea,t.scaleCool = Ua,t.scaleViridis = Ra,t.scaleMagma = ja,t.scaleInferno = qa,t.scalePlasma = Ya,t.mouse = wo,t.namespace = xu,t.namespaces = dd,t.select = xo,t.selectAll = To,t.selection = bo,t.touch = No,t.touches = ko,t.axisTop = Eo,t.axisRight = Uo,t.axisBottom = Ho,t.axisLeft = Oo,t.voronoi = _s
});