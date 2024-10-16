var as = Object.defineProperty
var kd = Object.getOwnPropertyDescriptor
var wd = Object.getOwnPropertyNames
var Sd = Object.prototype.hasOwnProperty
var Td = (o, p) => () => (o && (p = o((o = 0))), p)
var Ue = (o, p) => () => (p || o((p = { exports: {} }).exports, p), p.exports)
var Ld = (o, p, v, C) => {
    if ((p && typeof p == 'object') || typeof p == 'function')
        for (let b of wd(p))
            !Sd.call(o, b) && b !== v && as(o, b, { get: () => p[b], enumerable: !(C = kd(p, b)) || C.enumerable })
    return o
}
var Cd = (o) => Ld(as({}, '__esModule', { value: !0 }), o)
var Re = Ue((Xo, Yo) => {
    ;(function (o, p) {
        typeof Xo == 'object' && typeof Yo < 'u'
            ? (Yo.exports = p())
            : typeof define == 'function' && define.amd
              ? define(p)
              : ((o = o || self), (o.CodeMirror = p()))
    })(Xo, function () {
        'use strict'
        var o = navigator.userAgent,
            p = navigator.platform,
            v = /gecko\/\d/i.test(o),
            C = /MSIE \d/.test(o),
            b = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(o),
            _ = /Edge\/(\d+)/.exec(o),
            s = C || b || _,
            g = s && (C ? document.documentMode || 6 : +(_ || b)[1]),
            h = !_ && /WebKit\//.test(o),
            w = h && /Qt\/\d+\.\d+/.test(o),
            k = !_ && /Chrome\/(\d+)/.exec(o),
            c = k && +k[1],
            d = /Opera\//.test(o),
            S = /Apple Computer/.test(navigator.vendor),
            E = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(o),
            z = /PhantomJS/.test(o),
            y = S && (/Mobile\/\w+/.test(o) || navigator.maxTouchPoints > 2),
            H = /Android/.test(o),
            M = y || H || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(o),
            B = y || /Mac/.test(p),
            X = /\bCrOS\b/.test(o),
            re = /win/i.test(p),
            ne = d && o.match(/Version\/(\d*\.\d*)/)
        ne && (ne = Number(ne[1])), ne && ne >= 15 && ((d = !1), (h = !0))
        var N = B && (w || (d && (ne == null || ne < 12.11))),
            F = v || (s && g >= 9)
        function D(e) {
            return new RegExp('(^|\\s)' + e + '(?:$|\\s)\\s*')
        }
        var V = function (e, t) {
            var n = e.className,
                r = D(t).exec(n)
            if (r) {
                var i = n.slice(r.index + r[0].length)
                e.className = n.slice(0, r.index) + (i ? r[1] + i : '')
            }
        }
        function j(e) {
            for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild)
            return e
        }
        function J(e, t) {
            return j(e).appendChild(t)
        }
        function x(e, t, n, r) {
            var i = document.createElement(e)
            if ((n && (i.className = n), r && (i.style.cssText = r), typeof t == 'string'))
                i.appendChild(document.createTextNode(t))
            else if (t) for (var a = 0; a < t.length; ++a) i.appendChild(t[a])
            return i
        }
        function K(e, t, n, r) {
            var i = x(e, t, n, r)
            return i.setAttribute('role', 'presentation'), i
        }
        var Y
        document.createRange
            ? (Y = function (e, t, n, r) {
                  var i = document.createRange()
                  return i.setEnd(r || e, n), i.setStart(e, t), i
              })
            : (Y = function (e, t, n) {
                  var r = document.body.createTextRange()
                  try {
                      r.moveToElementText(e.parentNode)
                  } catch {
                      return r
                  }
                  return r.collapse(!0), r.moveEnd('character', n), r.moveStart('character', t), r
              })
        function I(e, t) {
            if ((t.nodeType == 3 && (t = t.parentNode), e.contains)) return e.contains(t)
            do if ((t.nodeType == 11 && (t = t.host), t == e)) return !0
            while ((t = t.parentNode))
        }
        function W(e) {
            var t
            try {
                t = e.activeElement
            } catch {
                t = e.body || null
            }
            for (; t && t.shadowRoot && t.shadowRoot.activeElement; ) t = t.shadowRoot.activeElement
            return t
        }
        function le(e, t) {
            var n = e.className
            D(t).test(n) || (e.className += (n ? ' ' : '') + t)
        }
        function ye(e, t) {
            for (var n = e.split(' '), r = 0; r < n.length; r++) n[r] && !D(n[r]).test(t) && (t += ' ' + n[r])
            return t
        }
        var q = function (e) {
            e.select()
        }
        y
            ? (q = function (e) {
                  ;(e.selectionStart = 0), (e.selectionEnd = e.value.length)
              })
            : s &&
              (q = function (e) {
                  try {
                      e.select()
                  } catch {}
              })
        function T(e) {
            return e.display.wrapper.ownerDocument
        }
        function de(e) {
            return T(e).defaultView
        }
        function Ee(e) {
            var t = Array.prototype.slice.call(arguments, 1)
            return function () {
                return e.apply(null, t)
            }
        }
        function fe(e, t, n) {
            t || (t = {})
            for (var r in e) e.hasOwnProperty(r) && (n !== !1 || !t.hasOwnProperty(r)) && (t[r] = e[r])
            return t
        }
        function xe(e, t, n, r, i) {
            t == null && ((t = e.search(/[^\s\u00a0]/)), t == -1 && (t = e.length))
            for (var a = r || 0, l = i || 0; ; ) {
                var u = e.indexOf('	', a)
                if (u < 0 || u >= t) return l + (t - a)
                ;(l += u - a), (l += n - (l % n)), (a = u + 1)
            }
        }
        var pe = function () {
            ;(this.id = null), (this.f = null), (this.time = 0), (this.handler = Ee(this.onTimeout, this))
        }
        ;(pe.prototype.onTimeout = function (e) {
            ;(e.id = 0), e.time <= +new Date() ? e.f() : setTimeout(e.handler, e.time - +new Date())
        }),
            (pe.prototype.set = function (e, t) {
                this.f = t
                var n = +new Date() + e
                ;(!this.id || n < this.time) &&
                    (clearTimeout(this.id), (this.id = setTimeout(this.handler, e)), (this.time = n))
            })
        function De(e, t) {
            for (var n = 0; n < e.length; ++n) if (e[n] == t) return n
            return -1
        }
        var Ne = 50,
            Me = {
                toString: function () {
                    return 'CodeMirror.Pass'
                },
            },
            Fe = { scroll: !1 },
            Ge = { origin: '*mouse' },
            Le = { origin: '+move' }
        function Je(e, t, n) {
            for (var r = 0, i = 0; ; ) {
                var a = e.indexOf('	', r)
                a == -1 && (a = e.length)
                var l = a - r
                if (a == e.length || i + l >= t) return r + Math.min(l, t - i)
                if (((i += a - r), (i += n - (i % n)), (r = a + 1), i >= t)) return r
            }
        }
        var He = ['']
        function $e(e) {
            for (; He.length <= e; ) He.push(O(He) + ' ')
            return He[e]
        }
        function O(e) {
            return e[e.length - 1]
        }
        function Z(e, t) {
            for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r)
            return n
        }
        function me(e, t, n) {
            for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i; ) r++
            e.splice(r, 0, t)
        }
        function Be() {}
        function te(e, t) {
            var n
            return Object.create ? (n = Object.create(e)) : ((Be.prototype = e), (n = new Be())), t && fe(t, n), n
        }
        var ce =
            /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/
        function oe(e) {
            return /\w/.test(e) || (e > '\x80' && (e.toUpperCase() != e.toLowerCase() || ce.test(e)))
        }
        function je(e, t) {
            return t ? (t.source.indexOf('\\w') > -1 && oe(e) ? !0 : t.test(e)) : oe(e)
        }
        function ke(e) {
            for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1
            return !0
        }
        var Ce =
            /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/
        function we(e) {
            return e.charCodeAt(0) >= 768 && Ce.test(e)
        }
        function $(e, t, n) {
            for (; (n < 0 ? t > 0 : t < e.length) && we(e.charAt(t)); ) t += n
            return t
        }
        function U(e, t, n) {
            for (var r = t > n ? -1 : 1; ; ) {
                if (t == n) return t
                var i = (t + n) / 2,
                    a = r < 0 ? Math.ceil(i) : Math.floor(i)
                if (a == t) return e(a) ? t : n
                e(a) ? (n = a) : (t = a + r)
            }
        }
        function se(e, t, n, r) {
            if (!e) return r(t, n, 'ltr', 0)
            for (var i = !1, a = 0; a < e.length; ++a) {
                var l = e[a]
                ;((l.from < n && l.to > t) || (t == n && l.to == t)) &&
                    (r(Math.max(l.from, t), Math.min(l.to, n), l.level == 1 ? 'rtl' : 'ltr', a), (i = !0))
            }
            i || r(t, n, 'ltr')
        }
        var Ae = null
        function et(e, t, n) {
            var r
            Ae = null
            for (var i = 0; i < e.length; ++i) {
                var a = e[i]
                if (a.from < t && a.to > t) return i
                a.to == t && (a.from != a.to && n == 'before' ? (r = i) : (Ae = i)),
                    a.from == t && (a.from != a.to && n != 'before' ? (r = i) : (Ae = i))
            }
            return r ?? Ae
        }
        var zt = (function () {
            var e =
                    'bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN',
                t =
                    'nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111'
            function n(m) {
                return m <= 247
                    ? e.charAt(m)
                    : 1424 <= m && m <= 1524
                      ? 'R'
                      : 1536 <= m && m <= 1785
                        ? t.charAt(m - 1536)
                        : 1774 <= m && m <= 2220
                          ? 'r'
                          : 8192 <= m && m <= 8203
                            ? 'w'
                            : m == 8204
                              ? 'b'
                              : 'L'
            }
            var r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
                i = /[stwN]/,
                a = /[LRr]/,
                l = /[Lb1n]/,
                u = /[1n]/
            function f(m, A, P) {
                ;(this.level = m), (this.from = A), (this.to = P)
            }
            return function (m, A) {
                var P = A == 'ltr' ? 'L' : 'R'
                if (m.length == 0 || (A == 'ltr' && !r.test(m))) return !1
                for (var ee = m.length, Q = [], ae = 0; ae < ee; ++ae) Q.push(n(m.charCodeAt(ae)))
                for (var ue = 0, he = P; ue < ee; ++ue) {
                    var ve = Q[ue]
                    ve == 'm' ? (Q[ue] = he) : (he = ve)
                }
                for (var _e = 0, be = P; _e < ee; ++_e) {
                    var Te = Q[_e]
                    Te == '1' && be == 'r' ? (Q[_e] = 'n') : a.test(Te) && ((be = Te), Te == 'r' && (Q[_e] = 'R'))
                }
                for (var Ie = 1, qe = Q[0]; Ie < ee - 1; ++Ie) {
                    var We = Q[Ie]
                    We == '+' && qe == '1' && Q[Ie + 1] == '1'
                        ? (Q[Ie] = '1')
                        : We == ',' && qe == Q[Ie + 1] && (qe == '1' || qe == 'n') && (Q[Ie] = qe),
                        (qe = We)
                }
                for (var Ve = 0; Ve < ee; ++Ve) {
                    var mt = Q[Ve]
                    if (mt == ',') Q[Ve] = 'N'
                    else if (mt == '%') {
                        var it = void 0
                        for (it = Ve + 1; it < ee && Q[it] == '%'; ++it);
                        for (
                            var jt = (Ve && Q[Ve - 1] == '!') || (it < ee && Q[it] == '1') ? '1' : 'N', It = Ve;
                            It < it;
                            ++It
                        )
                            Q[It] = jt
                        Ve = it - 1
                    }
                }
                for (var ut = 0, Ft = P; ut < ee; ++ut) {
                    var yt = Q[ut]
                    Ft == 'L' && yt == '1' ? (Q[ut] = 'L') : a.test(yt) && (Ft = yt)
                }
                for (var dt = 0; dt < ee; ++dt)
                    if (i.test(Q[dt])) {
                        var ct = void 0
                        for (ct = dt + 1; ct < ee && i.test(Q[ct]); ++ct);
                        for (
                            var lt = (dt ? Q[dt - 1] : P) == 'L',
                                Nt = (ct < ee ? Q[ct] : P) == 'L',
                                un = lt == Nt ? (lt ? 'L' : 'R') : P,
                                Tr = dt;
                            Tr < ct;
                            ++Tr
                        )
                            Q[Tr] = un
                        dt = ct - 1
                    }
                for (var St = [], tr, vt = 0; vt < ee; )
                    if (l.test(Q[vt])) {
                        var Go = vt
                        for (++vt; vt < ee && l.test(Q[vt]); ++vt);
                        St.push(new f(0, Go, vt))
                    } else {
                        var fr = vt,
                            Or = St.length,
                            Pr = A == 'rtl' ? 1 : 0
                        for (++vt; vt < ee && Q[vt] != 'L'; ++vt);
                        for (var Et = fr; Et < vt; )
                            if (u.test(Q[Et])) {
                                fr < Et && (St.splice(Or, 0, new f(1, fr, Et)), (Or += Pr))
                                var cn = Et
                                for (++Et; Et < vt && u.test(Q[Et]); ++Et);
                                St.splice(Or, 0, new f(2, cn, Et)), (Or += Pr), (fr = Et)
                            } else ++Et
                        fr < vt && St.splice(Or, 0, new f(1, fr, vt))
                    }
                return (
                    A == 'ltr' &&
                        (St[0].level == 1 &&
                            (tr = m.match(/^\s+/)) &&
                            ((St[0].from = tr[0].length), St.unshift(new f(0, 0, tr[0].length))),
                        O(St).level == 1 &&
                            (tr = m.match(/\s+$/)) &&
                            ((O(St).to -= tr[0].length), St.push(new f(0, ee - tr[0].length, ee)))),
                    A == 'rtl' ? St.reverse() : St
                )
            }
        })()
        function xt(e, t) {
            var n = e.order
            return n == null && (n = e.order = zt(e.text, t)), n
        }
        var Mt = [],
            ge = function (e, t, n) {
                if (e.addEventListener) e.addEventListener(t, n, !1)
                else if (e.attachEvent) e.attachEvent('on' + t, n)
                else {
                    var r = e._handlers || (e._handlers = {})
                    r[t] = (r[t] || Mt).concat(n)
                }
            }
        function bt(e, t) {
            return (e._handlers && e._handlers[t]) || Mt
        }
        function _t(e, t, n) {
            if (e.removeEventListener) e.removeEventListener(t, n, !1)
            else if (e.detachEvent) e.detachEvent('on' + t, n)
            else {
                var r = e._handlers,
                    i = r && r[t]
                if (i) {
                    var a = De(i, n)
                    a > -1 && (r[t] = i.slice(0, a).concat(i.slice(a + 1)))
                }
            }
        }
        function tt(e, t) {
            var n = bt(e, t)
            if (n.length)
                for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i) n[i].apply(null, r)
        }
        function ot(e, t, n) {
            return (
                typeof t == 'string' &&
                    (t = {
                        type: t,
                        preventDefault: function () {
                            this.defaultPrevented = !0
                        },
                    }),
                tt(e, n || t.type, e, t),
                gn(t) || t.codemirrorIgnore
            )
        }
        function Yn(e) {
            var t = e._handlers && e._handlers.cursorActivity
            if (t)
                for (
                    var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0;
                    r < t.length;
                    ++r
                )
                    De(n, t[r]) == -1 && n.push(t[r])
        }
        function Tt(e, t) {
            return bt(e, t).length > 0
        }
        function Lt(e) {
            ;(e.prototype.on = function (t, n) {
                ge(this, t, n)
            }),
                (e.prototype.off = function (t, n) {
                    _t(this, t, n)
                })
        }
        function kt(e) {
            e.preventDefault ? e.preventDefault() : (e.returnValue = !1)
        }
        function Er(e) {
            e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0)
        }
        function gn(e) {
            return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == !1
        }
        function rr(e) {
            kt(e), Er(e)
        }
        function At(e) {
            return e.target || e.srcElement
        }
        function mn(e) {
            var t = e.which
            return (
                t == null && (e.button & 1 ? (t = 1) : e.button & 2 ? (t = 3) : e.button & 4 && (t = 2)),
                B && e.ctrlKey && t == 1 && (t = 3),
                t
            )
        }
        var Ji = (function () {
                if (s && g < 9) return !1
                var e = x('div')
                return 'draggable' in e || 'dragDrop' in e
            })(),
            Bt
        function eo(e) {
            if (Bt == null) {
                var t = x('span', '\u200B')
                J(e, x('span', [t, document.createTextNode('x')])),
                    e.firstChild.offsetHeight != 0 && (Bt = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(s && g < 8))
            }
            var n = Bt
                ? x('span', '\u200B')
                : x('span', '\xA0', null, 'display: inline-block; width: 1px; margin-right: -1px')
            return n.setAttribute('cm-text', ''), n
        }
        var Br
        function Qn(e) {
            if (Br != null) return Br
            var t = J(e, document.createTextNode('A\u062EA')),
                n = Y(t, 0, 1).getBoundingClientRect(),
                r = Y(t, 1, 2).getBoundingClientRect()
            return j(e), !n || n.left == n.right ? !1 : (Br = r.right - n.right < 3)
        }
        var vn =
                `

b`.split(/\n/).length != 3
                    ? function (e) {
                          for (var t = 0, n = [], r = e.length; t <= r; ) {
                              var i = e.indexOf(
                                  `
`,
                                  t,
                              )
                              i == -1 && (i = e.length)
                              var a = e.slice(t, e.charAt(i - 1) == '\r' ? i - 1 : i),
                                  l = a.indexOf('\r')
                              l != -1 ? (n.push(a.slice(0, l)), (t += l + 1)) : (n.push(a), (t = i + 1))
                          }
                          return n
                      }
                    : function (e) {
                          return e.split(/\r\n?|\n/)
                      },
            pr = window.getSelection
                ? function (e) {
                      try {
                          return e.selectionStart != e.selectionEnd
                      } catch {
                          return !1
                      }
                  }
                : function (e) {
                      var t
                      try {
                          t = e.ownerDocument.selection.createRange()
                      } catch {}
                      return !t || t.parentElement() != e ? !1 : t.compareEndPoints('StartToEnd', t) != 0
                  },
            Xt = (function () {
                var e = x('div')
                return 'oncopy' in e ? !0 : (e.setAttribute('oncopy', 'return;'), typeof e.oncopy == 'function')
            })(),
            Yt = null
        function Vn(e) {
            if (Yt != null) return Yt
            var t = J(e, x('span', 'x')),
                n = t.getBoundingClientRect(),
                r = Y(t, 0, 1).getBoundingClientRect()
            return (Yt = Math.abs(n.left - r.left) > 1)
        }
        var Ut = {},
            hr = {}
        function Jn(e, t) {
            arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), (Ut[e] = t)
        }
        function Wr(e, t) {
            hr[e] = t
        }
        function Ot(e) {
            if (typeof e == 'string' && hr.hasOwnProperty(e)) e = hr[e]
            else if (e && typeof e.name == 'string' && hr.hasOwnProperty(e.name)) {
                var t = hr[e.name]
                typeof t == 'string' && (t = { name: t }), (e = te(t, e)), (e.name = t.name)
            } else {
                if (typeof e == 'string' && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return Ot('application/xml')
                if (typeof e == 'string' && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return Ot('application/json')
            }
            return typeof e == 'string' ? { name: e } : e || { name: 'null' }
        }
        function nr(e, t) {
            t = Ot(t)
            var n = Ut[t.name]
            if (!n) return nr(e, 'text/plain')
            var r = n(e, t)
            if (gr.hasOwnProperty(t.name)) {
                var i = gr[t.name]
                for (var a in i) i.hasOwnProperty(a) && (r.hasOwnProperty(a) && (r['_' + a] = r[a]), (r[a] = i[a]))
            }
            if (((r.name = t.name), t.helperType && (r.helperType = t.helperType), t.modeProps))
                for (var l in t.modeProps) r[l] = t.modeProps[l]
            return r
        }
        var gr = {}
        function ei(e, t) {
            var n = gr.hasOwnProperty(e) ? gr[e] : (gr[e] = {})
            fe(t, n)
        }
        function ir(e, t) {
            if (t === !0) return t
            if (e.copyState) return e.copyState(t)
            var n = {}
            for (var r in t) {
                var i = t[r]
                i instanceof Array && (i = i.concat([])), (n[r] = i)
            }
            return n
        }
        function mr(e, t) {
            for (var n; e.innerMode && ((n = e.innerMode(t)), !(!n || n.mode == e)); ) (t = n.state), (e = n.mode)
            return n || { mode: e, state: t }
        }
        function bn(e, t, n) {
            return e.startState ? e.startState(t, n) : !0
        }
        var at = function (e, t, n) {
            ;(this.pos = this.start = 0),
                (this.string = e),
                (this.tabSize = t || 8),
                (this.lastColumnPos = this.lastColumnValue = 0),
                (this.lineStart = 0),
                (this.lineOracle = n)
        }
        ;(at.prototype.eol = function () {
            return this.pos >= this.string.length
        }),
            (at.prototype.sol = function () {
                return this.pos == this.lineStart
            }),
            (at.prototype.peek = function () {
                return this.string.charAt(this.pos) || void 0
            }),
            (at.prototype.next = function () {
                if (this.pos < this.string.length) return this.string.charAt(this.pos++)
            }),
            (at.prototype.eat = function (e) {
                var t = this.string.charAt(this.pos),
                    n
                if ((typeof e == 'string' ? (n = t == e) : (n = t && (e.test ? e.test(t) : e(t))), n))
                    return ++this.pos, t
            }),
            (at.prototype.eatWhile = function (e) {
                for (var t = this.pos; this.eat(e); );
                return this.pos > t
            }),
            (at.prototype.eatSpace = function () {
                for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); ) ++this.pos
                return this.pos > e
            }),
            (at.prototype.skipToEnd = function () {
                this.pos = this.string.length
            }),
            (at.prototype.skipTo = function (e) {
                var t = this.string.indexOf(e, this.pos)
                if (t > -1) return (this.pos = t), !0
            }),
            (at.prototype.backUp = function (e) {
                this.pos -= e
            }),
            (at.prototype.column = function () {
                return (
                    this.lastColumnPos < this.start &&
                        ((this.lastColumnValue = xe(
                            this.string,
                            this.start,
                            this.tabSize,
                            this.lastColumnPos,
                            this.lastColumnValue,
                        )),
                        (this.lastColumnPos = this.start)),
                    this.lastColumnValue - (this.lineStart ? xe(this.string, this.lineStart, this.tabSize) : 0)
                )
            }),
            (at.prototype.indentation = function () {
                return (
                    xe(this.string, null, this.tabSize) -
                    (this.lineStart ? xe(this.string, this.lineStart, this.tabSize) : 0)
                )
            }),
            (at.prototype.match = function (e, t, n) {
                if (typeof e == 'string') {
                    var r = function (l) {
                            return n ? l.toLowerCase() : l
                        },
                        i = this.string.substr(this.pos, e.length)
                    if (r(i) == r(e)) return t !== !1 && (this.pos += e.length), !0
                } else {
                    var a = this.string.slice(this.pos).match(e)
                    return a && a.index > 0 ? null : (a && t !== !1 && (this.pos += a[0].length), a)
                }
            }),
            (at.prototype.current = function () {
                return this.string.slice(this.start, this.pos)
            }),
            (at.prototype.hideFirstChars = function (e, t) {
                this.lineStart += e
                try {
                    return t()
                } finally {
                    this.lineStart -= e
                }
            }),
            (at.prototype.lookAhead = function (e) {
                var t = this.lineOracle
                return t && t.lookAhead(e)
            }),
            (at.prototype.baseToken = function () {
                var e = this.lineOracle
                return e && e.baseToken(this.pos)
            })
        function ze(e, t) {
            if (((t -= e.first), t < 0 || t >= e.size))
                throw new Error('There is no line ' + (t + e.first) + ' in the document.')
            for (var n = e; !n.lines; )
                for (var r = 0; ; ++r) {
                    var i = n.children[r],
                        a = i.chunkSize()
                    if (t < a) {
                        n = i
                        break
                    }
                    t -= a
                }
            return n.lines[t]
        }
        function or(e, t, n) {
            var r = [],
                i = t.line
            return (
                e.iter(t.line, n.line + 1, function (a) {
                    var l = a.text
                    i == n.line && (l = l.slice(0, n.ch)), i == t.line && (l = l.slice(t.ch)), r.push(l), ++i
                }),
                r
            )
        }
        function Ur(e, t, n) {
            var r = []
            return (
                e.iter(t, n, function (i) {
                    r.push(i.text)
                }),
                r
            )
        }
        function Wt(e, t) {
            var n = t - e.height
            if (n) for (var r = e; r; r = r.parent) r.height += n
        }
        function Xe(e) {
            if (e.parent == null) return null
            for (var t = e.parent, n = De(t.lines, e), r = t.parent; r; t = r, r = r.parent)
                for (var i = 0; r.children[i] != t; ++i) n += r.children[i].chunkSize()
            return n + t.first
        }
        function Qt(e, t) {
            var n = e.first
            e: do {
                for (var r = 0; r < e.children.length; ++r) {
                    var i = e.children[r],
                        a = i.height
                    if (t < a) {
                        e = i
                        continue e
                    }
                    ;(t -= a), (n += i.chunkSize())
                }
                return n
            } while (!e.lines)
            for (var l = 0; l < e.lines.length; ++l) {
                var u = e.lines[l],
                    f = u.height
                if (t < f) break
                t -= f
            }
            return n + l
        }
        function L(e, t) {
            return t >= e.first && t < e.first + e.size
        }
        function R(e, t) {
            return String(e.lineNumberFormatter(t + e.firstLineNumber))
        }
        function G(e, t, n) {
            if ((n === void 0 && (n = null), !(this instanceof G))) return new G(e, t, n)
            ;(this.line = e), (this.ch = t), (this.sticky = n)
        }
        function ie(e, t) {
            return e.line - t.line || e.ch - t.ch
        }
        function Oe(e, t) {
            return e.sticky == t.sticky && ie(e, t) == 0
        }
        function Ke(e) {
            return G(e.line, e.ch)
        }
        function Ze(e, t) {
            return ie(e, t) < 0 ? t : e
        }
        function ft(e, t) {
            return ie(e, t) < 0 ? e : t
        }
        function Rt(e, t) {
            return Math.max(e.first, Math.min(t, e.first + e.size - 1))
        }
        function Pe(e, t) {
            if (t.line < e.first) return G(e.first, 0)
            var n = e.first + e.size - 1
            return t.line > n ? G(n, ze(e, n).text.length) : kc(t, ze(e, t.line).text.length)
        }
        function kc(e, t) {
            var n = e.ch
            return n == null || n > t ? G(e.line, t) : n < 0 ? G(e.line, 0) : e
        }
        function sa(e, t) {
            for (var n = [], r = 0; r < t.length; r++) n[r] = Pe(e, t[r])
            return n
        }
        var ti = function (e, t) {
                ;(this.state = e), (this.lookAhead = t)
            },
            Vt = function (e, t, n, r) {
                ;(this.state = t),
                    (this.doc = e),
                    (this.line = n),
                    (this.maxLookAhead = r || 0),
                    (this.baseTokens = null),
                    (this.baseTokenPos = 1)
            }
        ;(Vt.prototype.lookAhead = function (e) {
            var t = this.doc.getLine(this.line + e)
            return t != null && e > this.maxLookAhead && (this.maxLookAhead = e), t
        }),
            (Vt.prototype.baseToken = function (e) {
                if (!this.baseTokens) return null
                for (; this.baseTokens[this.baseTokenPos] <= e; ) this.baseTokenPos += 2
                var t = this.baseTokens[this.baseTokenPos + 1]
                return { type: t && t.replace(/( |^)overlay .*/, ''), size: this.baseTokens[this.baseTokenPos] - e }
            }),
            (Vt.prototype.nextLine = function () {
                this.line++, this.maxLookAhead > 0 && this.maxLookAhead--
            }),
            (Vt.fromSaved = function (e, t, n) {
                return t instanceof ti ? new Vt(e, ir(e.mode, t.state), n, t.lookAhead) : new Vt(e, ir(e.mode, t), n)
            }),
            (Vt.prototype.save = function (e) {
                var t = e !== !1 ? ir(this.doc.mode, this.state) : this.state
                return this.maxLookAhead > 0 ? new ti(t, this.maxLookAhead) : t
            })
        function ua(e, t, n, r) {
            var i = [e.state.modeGen],
                a = {}
            ga(
                e,
                t.text,
                e.doc.mode,
                n,
                function (m, A) {
                    return i.push(m, A)
                },
                a,
                r,
            )
            for (
                var l = n.state,
                    u = function (m) {
                        n.baseTokens = i
                        var A = e.state.overlays[m],
                            P = 1,
                            ee = 0
                        ;(n.state = !0),
                            ga(
                                e,
                                t.text,
                                A.mode,
                                n,
                                function (Q, ae) {
                                    for (var ue = P; ee < Q; ) {
                                        var he = i[P]
                                        he > Q && i.splice(P, 1, Q, i[P + 1], he), (P += 2), (ee = Math.min(Q, he))
                                    }
                                    if (ae)
                                        if (A.opaque) i.splice(ue, P - ue, Q, 'overlay ' + ae), (P = ue + 2)
                                        else
                                            for (; ue < P; ue += 2) {
                                                var ve = i[ue + 1]
                                                i[ue + 1] = (ve ? ve + ' ' : '') + 'overlay ' + ae
                                            }
                                },
                                a,
                            ),
                            (n.state = l),
                            (n.baseTokens = null),
                            (n.baseTokenPos = 1)
                    },
                    f = 0;
                f < e.state.overlays.length;
                ++f
            )
                u(f)
            return { styles: i, classes: a.bgClass || a.textClass ? a : null }
        }
        function ca(e, t, n) {
            if (!t.styles || t.styles[0] != e.state.modeGen) {
                var r = yn(e, Xe(t)),
                    i = t.text.length > e.options.maxHighlightLength && ir(e.doc.mode, r.state),
                    a = ua(e, t, r)
                i && (r.state = i),
                    (t.stateAfter = r.save(!i)),
                    (t.styles = a.styles),
                    a.classes ? (t.styleClasses = a.classes) : t.styleClasses && (t.styleClasses = null),
                    n === e.doc.highlightFrontier &&
                        (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier))
            }
            return t.styles
        }
        function yn(e, t, n) {
            var r = e.doc,
                i = e.display
            if (!r.mode.startState) return new Vt(r, !0, t)
            var a = wc(e, t, n),
                l = a > r.first && ze(r, a - 1).stateAfter,
                u = l ? Vt.fromSaved(r, l, a) : new Vt(r, bn(r.mode), a)
            return (
                r.iter(a, t, function (f) {
                    to(e, f.text, u)
                    var m = u.line
                    ;(f.stateAfter = m == t - 1 || m % 5 == 0 || (m >= i.viewFrom && m < i.viewTo) ? u.save() : null),
                        u.nextLine()
                }),
                n && (r.modeFrontier = u.line),
                u
            )
        }
        function to(e, t, n, r) {
            var i = e.doc.mode,
                a = new at(t, e.options.tabSize, n)
            for (a.start = a.pos = r || 0, t == '' && fa(i, n.state); !a.eol(); ) ro(i, a, n.state), (a.start = a.pos)
        }
        function fa(e, t) {
            if (e.blankLine) return e.blankLine(t)
            if (e.innerMode) {
                var n = mr(e, t)
                if (n.mode.blankLine) return n.mode.blankLine(n.state)
            }
        }
        function ro(e, t, n, r) {
            for (var i = 0; i < 10; i++) {
                r && (r[0] = mr(e, n).mode)
                var a = e.token(t, n)
                if (t.pos > t.start) return a
            }
            throw new Error('Mode ' + e.name + ' failed to advance stream.')
        }
        var da = function (e, t, n) {
            ;(this.start = e.start),
                (this.end = e.pos),
                (this.string = e.current()),
                (this.type = t || null),
                (this.state = n)
        }
        function pa(e, t, n, r) {
            var i = e.doc,
                a = i.mode,
                l
            t = Pe(i, t)
            var u = ze(i, t.line),
                f = yn(e, t.line, n),
                m = new at(u.text, e.options.tabSize, f),
                A
            for (r && (A = []); (r || m.pos < t.ch) && !m.eol(); )
                (m.start = m.pos), (l = ro(a, m, f.state)), r && A.push(new da(m, l, ir(i.mode, f.state)))
            return r ? A : new da(m, l, f.state)
        }
        function ha(e, t) {
            if (e)
                for (;;) {
                    var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/)
                    if (!n) break
                    e = e.slice(0, n.index) + e.slice(n.index + n[0].length)
                    var r = n[1] ? 'bgClass' : 'textClass'
                    t[r] == null
                        ? (t[r] = n[2])
                        : new RegExp('(?:^|\\s)' + n[2] + '(?:$|\\s)').test(t[r]) || (t[r] += ' ' + n[2])
                }
            return e
        }
        function ga(e, t, n, r, i, a, l) {
            var u = n.flattenSpans
            u == null && (u = e.options.flattenSpans)
            var f = 0,
                m = null,
                A = new at(t, e.options.tabSize, r),
                P,
                ee = e.options.addModeClass && [null]
            for (t == '' && ha(fa(n, r.state), a); !A.eol(); ) {
                if (
                    (A.pos > e.options.maxHighlightLength
                        ? ((u = !1), l && to(e, t, r, A.pos), (A.pos = t.length), (P = null))
                        : (P = ha(ro(n, A, r.state, ee), a)),
                    ee)
                ) {
                    var Q = ee[0].name
                    Q && (P = 'm-' + (P ? Q + ' ' + P : Q))
                }
                if (!u || m != P) {
                    for (; f < A.start; ) (f = Math.min(A.start, f + 5e3)), i(f, m)
                    m = P
                }
                A.start = A.pos
            }
            for (; f < A.pos; ) {
                var ae = Math.min(A.pos, f + 5e3)
                i(ae, m), (f = ae)
            }
        }
        function wc(e, t, n) {
            for (var r, i, a = e.doc, l = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), u = t; u > l; --u) {
                if (u <= a.first) return a.first
                var f = ze(a, u - 1),
                    m = f.stateAfter
                if (m && (!n || u + (m instanceof ti ? m.lookAhead : 0) <= a.modeFrontier)) return u
                var A = xe(f.text, null, e.options.tabSize)
                ;(i == null || r > A) && ((i = u - 1), (r = A))
            }
            return i
        }
        function Sc(e, t) {
            if (((e.modeFrontier = Math.min(e.modeFrontier, t)), !(e.highlightFrontier < t - 10))) {
                for (var n = e.first, r = t - 1; r > n; r--) {
                    var i = ze(e, r).stateAfter
                    if (i && (!(i instanceof ti) || r + i.lookAhead < t)) {
                        n = r + 1
                        break
                    }
                }
                e.highlightFrontier = Math.min(e.highlightFrontier, n)
            }
        }
        var ma = !1,
            ar = !1
        function Tc() {
            ma = !0
        }
        function Lc() {
            ar = !0
        }
        function ri(e, t, n) {
            ;(this.marker = e), (this.from = t), (this.to = n)
        }
        function xn(e, t) {
            if (e)
                for (var n = 0; n < e.length; ++n) {
                    var r = e[n]
                    if (r.marker == t) return r
                }
        }
        function Cc(e, t) {
            for (var n, r = 0; r < e.length; ++r) e[r] != t && (n || (n = [])).push(e[r])
            return n
        }
        function Ec(e, t, n) {
            var r = n && window.WeakSet && (n.markedSpans || (n.markedSpans = new WeakSet()))
            r && e.markedSpans && r.has(e.markedSpans)
                ? e.markedSpans.push(t)
                : ((e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t]), r && r.add(e.markedSpans)),
                t.marker.attachLine(e)
        }
        function zc(e, t, n) {
            var r
            if (e)
                for (var i = 0; i < e.length; ++i) {
                    var a = e[i],
                        l = a.marker,
                        u = a.from == null || (l.inclusiveLeft ? a.from <= t : a.from < t)
                    if (u || (a.from == t && l.type == 'bookmark' && (!n || !a.marker.insertLeft))) {
                        var f = a.to == null || (l.inclusiveRight ? a.to >= t : a.to > t)
                        ;(r || (r = [])).push(new ri(l, a.from, f ? null : a.to))
                    }
                }
            return r
        }
        function Mc(e, t, n) {
            var r
            if (e)
                for (var i = 0; i < e.length; ++i) {
                    var a = e[i],
                        l = a.marker,
                        u = a.to == null || (l.inclusiveRight ? a.to >= t : a.to > t)
                    if (u || (a.from == t && l.type == 'bookmark' && (!n || a.marker.insertLeft))) {
                        var f = a.from == null || (l.inclusiveLeft ? a.from <= t : a.from < t)
                        ;(r || (r = [])).push(new ri(l, f ? null : a.from - t, a.to == null ? null : a.to - t))
                    }
                }
            return r
        }
        function no(e, t) {
            if (t.full) return null
            var n = L(e, t.from.line) && ze(e, t.from.line).markedSpans,
                r = L(e, t.to.line) && ze(e, t.to.line).markedSpans
            if (!n && !r) return null
            var i = t.from.ch,
                a = t.to.ch,
                l = ie(t.from, t.to) == 0,
                u = zc(n, i, l),
                f = Mc(r, a, l),
                m = t.text.length == 1,
                A = O(t.text).length + (m ? i : 0)
            if (u)
                for (var P = 0; P < u.length; ++P) {
                    var ee = u[P]
                    if (ee.to == null) {
                        var Q = xn(f, ee.marker)
                        Q ? m && (ee.to = Q.to == null ? null : Q.to + A) : (ee.to = i)
                    }
                }
            if (f)
                for (var ae = 0; ae < f.length; ++ae) {
                    var ue = f[ae]
                    if ((ue.to != null && (ue.to += A), ue.from == null)) {
                        var he = xn(u, ue.marker)
                        he || ((ue.from = A), m && (u || (u = [])).push(ue))
                    } else (ue.from += A), m && (u || (u = [])).push(ue)
                }
            u && (u = va(u)), f && f != u && (f = va(f))
            var ve = [u]
            if (!m) {
                var _e = t.text.length - 2,
                    be
                if (_e > 0 && u)
                    for (var Te = 0; Te < u.length; ++Te)
                        u[Te].to == null && (be || (be = [])).push(new ri(u[Te].marker, null, null))
                for (var Ie = 0; Ie < _e; ++Ie) ve.push(be)
                ve.push(f)
            }
            return ve
        }
        function va(e) {
            for (var t = 0; t < e.length; ++t) {
                var n = e[t]
                n.from != null && n.from == n.to && n.marker.clearWhenEmpty !== !1 && e.splice(t--, 1)
            }
            return e.length ? e : null
        }
        function Ac(e, t, n) {
            var r = null
            if (
                (e.iter(t.line, n.line + 1, function (Q) {
                    if (Q.markedSpans)
                        for (var ae = 0; ae < Q.markedSpans.length; ++ae) {
                            var ue = Q.markedSpans[ae].marker
                            ue.readOnly && (!r || De(r, ue) == -1) && (r || (r = [])).push(ue)
                        }
                }),
                !r)
            )
                return null
            for (var i = [{ from: t, to: n }], a = 0; a < r.length; ++a)
                for (var l = r[a], u = l.find(0), f = 0; f < i.length; ++f) {
                    var m = i[f]
                    if (!(ie(m.to, u.from) < 0 || ie(m.from, u.to) > 0)) {
                        var A = [f, 1],
                            P = ie(m.from, u.from),
                            ee = ie(m.to, u.to)
                        ;(P < 0 || (!l.inclusiveLeft && !P)) && A.push({ from: m.from, to: u.from }),
                            (ee > 0 || (!l.inclusiveRight && !ee)) && A.push({ from: u.to, to: m.to }),
                            i.splice.apply(i, A),
                            (f += A.length - 3)
                    }
                }
            return i
        }
        function ba(e) {
            var t = e.markedSpans
            if (t) {
                for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e)
                e.markedSpans = null
            }
        }
        function ya(e, t) {
            if (t) {
                for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e)
                e.markedSpans = t
            }
        }
        function ni(e) {
            return e.inclusiveLeft ? -1 : 0
        }
        function ii(e) {
            return e.inclusiveRight ? 1 : 0
        }
        function io(e, t) {
            var n = e.lines.length - t.lines.length
            if (n != 0) return n
            var r = e.find(),
                i = t.find(),
                a = ie(r.from, i.from) || ni(e) - ni(t)
            if (a) return -a
            var l = ie(r.to, i.to) || ii(e) - ii(t)
            return l || t.id - e.id
        }
        function xa(e, t) {
            var n = ar && e.markedSpans,
                r
            if (n)
                for (var i = void 0, a = 0; a < n.length; ++a)
                    (i = n[a]),
                        i.marker.collapsed &&
                            (t ? i.from : i.to) == null &&
                            (!r || io(r, i.marker) < 0) &&
                            (r = i.marker)
            return r
        }
        function _a(e) {
            return xa(e, !0)
        }
        function oi(e) {
            return xa(e, !1)
        }
        function Dc(e, t) {
            var n = ar && e.markedSpans,
                r
            if (n)
                for (var i = 0; i < n.length; ++i) {
                    var a = n[i]
                    a.marker.collapsed &&
                        (a.from == null || a.from < t) &&
                        (a.to == null || a.to > t) &&
                        (!r || io(r, a.marker) < 0) &&
                        (r = a.marker)
                }
            return r
        }
        function ka(e, t, n, r, i) {
            var a = ze(e, t),
                l = ar && a.markedSpans
            if (l)
                for (var u = 0; u < l.length; ++u) {
                    var f = l[u]
                    if (f.marker.collapsed) {
                        var m = f.marker.find(0),
                            A = ie(m.from, n) || ni(f.marker) - ni(i),
                            P = ie(m.to, r) || ii(f.marker) - ii(i)
                        if (
                            !((A >= 0 && P <= 0) || (A <= 0 && P >= 0)) &&
                            ((A <= 0 &&
                                (f.marker.inclusiveRight && i.inclusiveLeft ? ie(m.to, n) >= 0 : ie(m.to, n) > 0)) ||
                                (A >= 0 &&
                                    (f.marker.inclusiveRight && i.inclusiveLeft
                                        ? ie(m.from, r) <= 0
                                        : ie(m.from, r) < 0)))
                        )
                            return !0
                    }
                }
        }
        function $t(e) {
            for (var t; (t = _a(e)); ) e = t.find(-1, !0).line
            return e
        }
        function qc(e) {
            for (var t; (t = oi(e)); ) e = t.find(1, !0).line
            return e
        }
        function Ic(e) {
            for (var t, n; (t = oi(e)); ) (e = t.find(1, !0).line), (n || (n = [])).push(e)
            return n
        }
        function oo(e, t) {
            var n = ze(e, t),
                r = $t(n)
            return n == r ? t : Xe(r)
        }
        function wa(e, t) {
            if (t > e.lastLine()) return t
            var n = ze(e, t),
                r
            if (!vr(e, n)) return t
            for (; (r = oi(n)); ) n = r.find(1, !0).line
            return Xe(n) + 1
        }
        function vr(e, t) {
            var n = ar && t.markedSpans
            if (n) {
                for (var r = void 0, i = 0; i < n.length; ++i)
                    if (((r = n[i]), !!r.marker.collapsed)) {
                        if (r.from == null) return !0
                        if (!r.marker.widgetNode && r.from == 0 && r.marker.inclusiveLeft && ao(e, t, r)) return !0
                    }
            }
        }
        function ao(e, t, n) {
            if (n.to == null) {
                var r = n.marker.find(1, !0)
                return ao(e, r.line, xn(r.line.markedSpans, n.marker))
            }
            if (n.marker.inclusiveRight && n.to == t.text.length) return !0
            for (var i = void 0, a = 0; a < t.markedSpans.length; ++a)
                if (
                    ((i = t.markedSpans[a]),
                    i.marker.collapsed &&
                        !i.marker.widgetNode &&
                        i.from == n.to &&
                        (i.to == null || i.to != n.from) &&
                        (i.marker.inclusiveLeft || n.marker.inclusiveRight) &&
                        ao(e, t, i))
                )
                    return !0
        }
        function lr(e) {
            e = $t(e)
            for (var t = 0, n = e.parent, r = 0; r < n.lines.length; ++r) {
                var i = n.lines[r]
                if (i == e) break
                t += i.height
            }
            for (var a = n.parent; a; n = a, a = n.parent)
                for (var l = 0; l < a.children.length; ++l) {
                    var u = a.children[l]
                    if (u == n) break
                    t += u.height
                }
            return t
        }
        function ai(e) {
            if (e.height == 0) return 0
            for (var t = e.text.length, n, r = e; (n = _a(r)); ) {
                var i = n.find(0, !0)
                ;(r = i.from.line), (t += i.from.ch - i.to.ch)
            }
            for (r = e; (n = oi(r)); ) {
                var a = n.find(0, !0)
                ;(t -= r.text.length - a.from.ch), (r = a.to.line), (t += r.text.length - a.to.ch)
            }
            return t
        }
        function lo(e) {
            var t = e.display,
                n = e.doc
            ;(t.maxLine = ze(n, n.first)),
                (t.maxLineLength = ai(t.maxLine)),
                (t.maxLineChanged = !0),
                n.iter(function (r) {
                    var i = ai(r)
                    i > t.maxLineLength && ((t.maxLineLength = i), (t.maxLine = r))
                })
        }
        var $r = function (e, t, n) {
            ;(this.text = e), ya(this, t), (this.height = n ? n(this) : 1)
        }
        ;($r.prototype.lineNo = function () {
            return Xe(this)
        }),
            Lt($r)
        function Fc(e, t, n, r) {
            ;(e.text = t),
                e.stateAfter && (e.stateAfter = null),
                e.styles && (e.styles = null),
                e.order != null && (e.order = null),
                ba(e),
                ya(e, n)
            var i = r ? r(e) : 1
            i != e.height && Wt(e, i)
        }
        function Nc(e) {
            ;(e.parent = null), ba(e)
        }
        var Oc = {},
            Pc = {}
        function Sa(e, t) {
            if (!e || /^\s*$/.test(e)) return null
            var n = t.addModeClass ? Pc : Oc
            return n[e] || (n[e] = e.replace(/\S+/g, 'cm-$&'))
        }
        function Ta(e, t) {
            var n = K('span', null, null, h ? 'padding-right: .1px' : null),
                r = {
                    pre: K('pre', [n], 'CodeMirror-line'),
                    content: n,
                    col: 0,
                    pos: 0,
                    cm: e,
                    trailingSpace: !1,
                    splitSpaces: e.getOption('lineWrapping'),
                }
            t.measure = {}
            for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
                var a = i ? t.rest[i - 1] : t.line,
                    l = void 0
                ;(r.pos = 0),
                    (r.addToken = Rc),
                    Qn(e.display.measure) && (l = xt(a, e.doc.direction)) && (r.addToken = Bc(r.addToken, l)),
                    (r.map = [])
                var u = t != e.display.externalMeasured && Xe(a)
                Wc(a, r, ca(e, a, u)),
                    a.styleClasses &&
                        (a.styleClasses.bgClass && (r.bgClass = ye(a.styleClasses.bgClass, r.bgClass || '')),
                        a.styleClasses.textClass && (r.textClass = ye(a.styleClasses.textClass, r.textClass || ''))),
                    r.map.length == 0 && r.map.push(0, 0, r.content.appendChild(eo(e.display.measure))),
                    i == 0
                        ? ((t.measure.map = r.map), (t.measure.cache = {}))
                        : ((t.measure.maps || (t.measure.maps = [])).push(r.map),
                          (t.measure.caches || (t.measure.caches = [])).push({}))
            }
            if (h) {
                var f = r.content.lastChild
                ;(/\bcm-tab\b/.test(f.className) || (f.querySelector && f.querySelector('.cm-tab'))) &&
                    (r.content.className = 'cm-tab-wrap-hack')
            }
            return (
                tt(e, 'renderLine', e, t.line, r.pre),
                r.pre.className && (r.textClass = ye(r.pre.className, r.textClass || '')),
                r
            )
        }
        function jc(e) {
            var t = x('span', '\u2022', 'cm-invalidchar')
            return (t.title = '\\u' + e.charCodeAt(0).toString(16)), t.setAttribute('aria-label', t.title), t
        }
        function Rc(e, t, n, r, i, a, l) {
            if (t) {
                var u = e.splitSpaces ? Hc(t, e.trailingSpace) : t,
                    f = e.cm.state.specialChars,
                    m = !1,
                    A
                if (!f.test(t))
                    (e.col += t.length),
                        (A = document.createTextNode(u)),
                        e.map.push(e.pos, e.pos + t.length, A),
                        s && g < 9 && (m = !0),
                        (e.pos += t.length)
                else {
                    A = document.createDocumentFragment()
                    for (var P = 0; ; ) {
                        f.lastIndex = P
                        var ee = f.exec(t),
                            Q = ee ? ee.index - P : t.length - P
                        if (Q) {
                            var ae = document.createTextNode(u.slice(P, P + Q))
                            s && g < 9 ? A.appendChild(x('span', [ae])) : A.appendChild(ae),
                                e.map.push(e.pos, e.pos + Q, ae),
                                (e.col += Q),
                                (e.pos += Q)
                        }
                        if (!ee) break
                        P += Q + 1
                        var ue = void 0
                        if (ee[0] == '	') {
                            var he = e.cm.options.tabSize,
                                ve = he - (e.col % he)
                            ;(ue = A.appendChild(x('span', $e(ve), 'cm-tab'))),
                                ue.setAttribute('role', 'presentation'),
                                ue.setAttribute('cm-text', '	'),
                                (e.col += ve)
                        } else
                            ee[0] == '\r' ||
                            ee[0] ==
                                `
`
                                ? ((ue = A.appendChild(
                                      x('span', ee[0] == '\r' ? '\u240D' : '\u2424', 'cm-invalidchar'),
                                  )),
                                  ue.setAttribute('cm-text', ee[0]),
                                  (e.col += 1))
                                : ((ue = e.cm.options.specialCharPlaceholder(ee[0])),
                                  ue.setAttribute('cm-text', ee[0]),
                                  s && g < 9 ? A.appendChild(x('span', [ue])) : A.appendChild(ue),
                                  (e.col += 1))
                        e.map.push(e.pos, e.pos + 1, ue), e.pos++
                    }
                }
                if (((e.trailingSpace = u.charCodeAt(t.length - 1) == 32), n || r || i || m || a || l)) {
                    var _e = n || ''
                    r && (_e += r), i && (_e += i)
                    var be = x('span', [A], _e, a)
                    if (l)
                        for (var Te in l)
                            l.hasOwnProperty(Te) && Te != 'style' && Te != 'class' && be.setAttribute(Te, l[Te])
                    return e.content.appendChild(be)
                }
                e.content.appendChild(A)
            }
        }
        function Hc(e, t) {
            if (e.length > 1 && !/  /.test(e)) return e
            for (var n = t, r = '', i = 0; i < e.length; i++) {
                var a = e.charAt(i)
                a == ' ' && n && (i == e.length - 1 || e.charCodeAt(i + 1) == 32) && (a = '\xA0'),
                    (r += a),
                    (n = a == ' ')
            }
            return r
        }
        function Bc(e, t) {
            return function (n, r, i, a, l, u, f) {
                i = i ? i + ' cm-force-border' : 'cm-force-border'
                for (var m = n.pos, A = m + r.length; ; ) {
                    for (var P = void 0, ee = 0; ee < t.length && ((P = t[ee]), !(P.to > m && P.from <= m)); ee++);
                    if (P.to >= A) return e(n, r, i, a, l, u, f)
                    e(n, r.slice(0, P.to - m), i, a, null, u, f), (a = null), (r = r.slice(P.to - m)), (m = P.to)
                }
            }
        }
        function La(e, t, n, r) {
            var i = !r && n.widgetNode
            i && e.map.push(e.pos, e.pos + t, i),
                !r &&
                    e.cm.display.input.needsContentAttribute &&
                    (i || (i = e.content.appendChild(document.createElement('span'))),
                    i.setAttribute('cm-marker', n.id)),
                i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)),
                (e.pos += t),
                (e.trailingSpace = !1)
        }
        function Wc(e, t, n) {
            var r = e.markedSpans,
                i = e.text,
                a = 0
            if (!r) {
                for (var l = 1; l < n.length; l += 2) t.addToken(t, i.slice(a, (a = n[l])), Sa(n[l + 1], t.cm.options))
                return
            }
            for (var u = i.length, f = 0, m = 1, A = '', P, ee, Q = 0, ae, ue, he, ve, _e; ; ) {
                if (Q == f) {
                    ;(ae = ue = he = ee = ''), (_e = null), (ve = null), (Q = 1 / 0)
                    for (var be = [], Te = void 0, Ie = 0; Ie < r.length; ++Ie) {
                        var qe = r[Ie],
                            We = qe.marker
                        if (We.type == 'bookmark' && qe.from == f && We.widgetNode) be.push(We)
                        else if (
                            qe.from <= f &&
                            (qe.to == null || qe.to > f || (We.collapsed && qe.to == f && qe.from == f))
                        ) {
                            if (
                                (qe.to != null && qe.to != f && Q > qe.to && ((Q = qe.to), (ue = '')),
                                We.className && (ae += ' ' + We.className),
                                We.css && (ee = (ee ? ee + ';' : '') + We.css),
                                We.startStyle && qe.from == f && (he += ' ' + We.startStyle),
                                We.endStyle && qe.to == Q && (Te || (Te = [])).push(We.endStyle, qe.to),
                                We.title && ((_e || (_e = {})).title = We.title),
                                We.attributes)
                            )
                                for (var Ve in We.attributes) (_e || (_e = {}))[Ve] = We.attributes[Ve]
                            We.collapsed && (!ve || io(ve.marker, We) < 0) && (ve = qe)
                        } else qe.from > f && Q > qe.from && (Q = qe.from)
                    }
                    if (Te) for (var mt = 0; mt < Te.length; mt += 2) Te[mt + 1] == Q && (ue += ' ' + Te[mt])
                    if (!ve || ve.from == f) for (var it = 0; it < be.length; ++it) La(t, 0, be[it])
                    if (ve && (ve.from || 0) == f) {
                        if ((La(t, (ve.to == null ? u + 1 : ve.to) - f, ve.marker, ve.from == null), ve.to == null))
                            return
                        ve.to == f && (ve = !1)
                    }
                }
                if (f >= u) break
                for (var jt = Math.min(u, Q); ; ) {
                    if (A) {
                        var It = f + A.length
                        if (!ve) {
                            var ut = It > jt ? A.slice(0, jt - f) : A
                            t.addToken(t, ut, P ? P + ae : ae, he, f + ut.length == Q ? ue : '', ee, _e)
                        }
                        if (It >= jt) {
                            ;(A = A.slice(jt - f)), (f = jt)
                            break
                        }
                        ;(f = It), (he = '')
                    }
                    ;(A = i.slice(a, (a = n[m++]))), (P = Sa(n[m++], t.cm.options))
                }
            }
        }
        function Ca(e, t, n) {
            ;(this.line = t),
                (this.rest = Ic(t)),
                (this.size = this.rest ? Xe(O(this.rest)) - n + 1 : 1),
                (this.node = this.text = null),
                (this.hidden = vr(e, t))
        }
        function li(e, t, n) {
            for (var r = [], i, a = t; a < n; a = i) {
                var l = new Ca(e.doc, ze(e.doc, a), a)
                ;(i = a + l.size), r.push(l)
            }
            return r
        }
        var Kr = null
        function Uc(e) {
            Kr ? Kr.ops.push(e) : (e.ownsGroup = Kr = { ops: [e], delayedCallbacks: [] })
        }
        function $c(e) {
            var t = e.delayedCallbacks,
                n = 0
            do {
                for (; n < t.length; n++) t[n].call(null)
                for (var r = 0; r < e.ops.length; r++) {
                    var i = e.ops[r]
                    if (i.cursorActivityHandlers)
                        for (; i.cursorActivityCalled < i.cursorActivityHandlers.length; )
                            i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm)
                }
            } while (n < t.length)
        }
        function Kc(e, t) {
            var n = e.ownsGroup
            if (n)
                try {
                    $c(n)
                } finally {
                    ;(Kr = null), t(n)
                }
        }
        var _n = null
        function pt(e, t) {
            var n = bt(e, t)
            if (n.length) {
                var r = Array.prototype.slice.call(arguments, 2),
                    i
                Kr ? (i = Kr.delayedCallbacks) : _n ? (i = _n) : ((i = _n = []), setTimeout(Gc, 0))
                for (
                    var a = function (u) {
                            i.push(function () {
                                return n[u].apply(null, r)
                            })
                        },
                        l = 0;
                    l < n.length;
                    ++l
                )
                    a(l)
            }
        }
        function Gc() {
            var e = _n
            _n = null
            for (var t = 0; t < e.length; ++t) e[t]()
        }
        function Ea(e, t, n, r) {
            for (var i = 0; i < t.changes.length; i++) {
                var a = t.changes[i]
                a == 'text'
                    ? Xc(e, t)
                    : a == 'gutter'
                      ? Ma(e, t, n, r)
                      : a == 'class'
                        ? so(e, t)
                        : a == 'widget' && Yc(e, t, r)
            }
            t.changes = null
        }
        function kn(e) {
            return (
                e.node == e.text &&
                    ((e.node = x('div', null, null, 'position: relative')),
                    e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text),
                    e.node.appendChild(e.text),
                    s && g < 8 && (e.node.style.zIndex = 2)),
                e.node
            )
        }
        function Zc(e, t) {
            var n = t.bgClass ? t.bgClass + ' ' + (t.line.bgClass || '') : t.line.bgClass
            if ((n && (n += ' CodeMirror-linebackground'), t.background))
                n
                    ? (t.background.className = n)
                    : (t.background.parentNode.removeChild(t.background), (t.background = null))
            else if (n) {
                var r = kn(t)
                ;(t.background = r.insertBefore(x('div', null, n), r.firstChild)),
                    e.display.input.setUneditable(t.background)
            }
        }
        function za(e, t) {
            var n = e.display.externalMeasured
            return n && n.line == t.line
                ? ((e.display.externalMeasured = null), (t.measure = n.measure), n.built)
                : Ta(e, t)
        }
        function Xc(e, t) {
            var n = t.text.className,
                r = za(e, t)
            t.text == t.node && (t.node = r.pre),
                t.text.parentNode.replaceChild(r.pre, t.text),
                (t.text = r.pre),
                r.bgClass != t.bgClass || r.textClass != t.textClass
                    ? ((t.bgClass = r.bgClass), (t.textClass = r.textClass), so(e, t))
                    : n && (t.text.className = n)
        }
        function so(e, t) {
            Zc(e, t),
                t.line.wrapClass ? (kn(t).className = t.line.wrapClass) : t.node != t.text && (t.node.className = '')
            var n = t.textClass ? t.textClass + ' ' + (t.line.textClass || '') : t.line.textClass
            t.text.className = n || ''
        }
        function Ma(e, t, n, r) {
            if (
                (t.gutter && (t.node.removeChild(t.gutter), (t.gutter = null)),
                t.gutterBackground && (t.node.removeChild(t.gutterBackground), (t.gutterBackground = null)),
                t.line.gutterClass)
            ) {
                var i = kn(t)
                ;(t.gutterBackground = x(
                    'div',
                    null,
                    'CodeMirror-gutter-background ' + t.line.gutterClass,
                    'left: ' +
                        (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) +
                        'px; width: ' +
                        r.gutterTotalWidth +
                        'px',
                )),
                    e.display.input.setUneditable(t.gutterBackground),
                    i.insertBefore(t.gutterBackground, t.text)
            }
            var a = t.line.gutterMarkers
            if (e.options.lineNumbers || a) {
                var l = kn(t),
                    u = (t.gutter = x(
                        'div',
                        null,
                        'CodeMirror-gutter-wrapper',
                        'left: ' + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + 'px',
                    ))
                if (
                    (u.setAttribute('aria-hidden', 'true'),
                    e.display.input.setUneditable(u),
                    l.insertBefore(u, t.text),
                    t.line.gutterClass && (u.className += ' ' + t.line.gutterClass),
                    e.options.lineNumbers &&
                        (!a || !a['CodeMirror-linenumbers']) &&
                        (t.lineNumber = u.appendChild(
                            x(
                                'div',
                                R(e.options, n),
                                'CodeMirror-linenumber CodeMirror-gutter-elt',
                                'left: ' +
                                    r.gutterLeft['CodeMirror-linenumbers'] +
                                    'px; width: ' +
                                    e.display.lineNumInnerWidth +
                                    'px',
                            ),
                        )),
                    a)
                )
                    for (var f = 0; f < e.display.gutterSpecs.length; ++f) {
                        var m = e.display.gutterSpecs[f].className,
                            A = a.hasOwnProperty(m) && a[m]
                        A &&
                            u.appendChild(
                                x(
                                    'div',
                                    [A],
                                    'CodeMirror-gutter-elt',
                                    'left: ' + r.gutterLeft[m] + 'px; width: ' + r.gutterWidth[m] + 'px',
                                ),
                            )
                    }
            }
        }
        function Yc(e, t, n) {
            t.alignable && (t.alignable = null)
            for (var r = D('CodeMirror-linewidget'), i = t.node.firstChild, a = void 0; i; i = a)
                (a = i.nextSibling), r.test(i.className) && t.node.removeChild(i)
            Aa(e, t, n)
        }
        function Qc(e, t, n, r) {
            var i = za(e, t)
            return (
                (t.text = t.node = i.pre),
                i.bgClass && (t.bgClass = i.bgClass),
                i.textClass && (t.textClass = i.textClass),
                so(e, t),
                Ma(e, t, n, r),
                Aa(e, t, r),
                t.node
            )
        }
        function Aa(e, t, n) {
            if ((Da(e, t.line, t, n, !0), t.rest)) for (var r = 0; r < t.rest.length; r++) Da(e, t.rest[r], t, n, !1)
        }
        function Da(e, t, n, r, i) {
            if (t.widgets)
                for (var a = kn(n), l = 0, u = t.widgets; l < u.length; ++l) {
                    var f = u[l],
                        m = x('div', [f.node], 'CodeMirror-linewidget' + (f.className ? ' ' + f.className : ''))
                    f.handleMouseEvents || m.setAttribute('cm-ignore-events', 'true'),
                        Vc(f, m, n, r),
                        e.display.input.setUneditable(m),
                        i && f.above ? a.insertBefore(m, n.gutter || n.text) : a.appendChild(m),
                        pt(f, 'redraw')
                }
        }
        function Vc(e, t, n, r) {
            if (e.noHScroll) {
                ;(n.alignable || (n.alignable = [])).push(t)
                var i = r.wrapperWidth
                ;(t.style.left = r.fixedPos + 'px'),
                    e.coverGutter || ((i -= r.gutterTotalWidth), (t.style.paddingLeft = r.gutterTotalWidth + 'px')),
                    (t.style.width = i + 'px')
            }
            e.coverGutter &&
                ((t.style.zIndex = 5),
                (t.style.position = 'relative'),
                e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + 'px'))
        }
        function wn(e) {
            if (e.height != null) return e.height
            var t = e.doc.cm
            if (!t) return 0
            if (!I(document.body, e.node)) {
                var n = 'position: relative;'
                e.coverGutter && (n += 'margin-left: -' + t.display.gutters.offsetWidth + 'px;'),
                    e.noHScroll && (n += 'width: ' + t.display.wrapper.clientWidth + 'px;'),
                    J(t.display.measure, x('div', [e.node], null, n))
            }
            return (e.height = e.node.parentNode.offsetHeight)
        }
        function sr(e, t) {
            for (var n = At(t); n != e.wrapper; n = n.parentNode)
                if (
                    !n ||
                    (n.nodeType == 1 && n.getAttribute('cm-ignore-events') == 'true') ||
                    (n.parentNode == e.sizer && n != e.mover)
                )
                    return !0
        }
        function si(e) {
            return e.lineSpace.offsetTop
        }
        function uo(e) {
            return e.mover.offsetHeight - e.lineSpace.offsetHeight
        }
        function qa(e) {
            if (e.cachedPaddingH) return e.cachedPaddingH
            var t = J(e.measure, x('pre', 'x', 'CodeMirror-line-like')),
                n = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
                r = { left: parseInt(n.paddingLeft), right: parseInt(n.paddingRight) }
            return !isNaN(r.left) && !isNaN(r.right) && (e.cachedPaddingH = r), r
        }
        function Jt(e) {
            return Ne - e.display.nativeBarWidth
        }
        function zr(e) {
            return e.display.scroller.clientWidth - Jt(e) - e.display.barWidth
        }
        function co(e) {
            return e.display.scroller.clientHeight - Jt(e) - e.display.barHeight
        }
        function Jc(e, t, n) {
            var r = e.options.lineWrapping,
                i = r && zr(e)
            if (!t.measure.heights || (r && t.measure.width != i)) {
                var a = (t.measure.heights = [])
                if (r) {
                    t.measure.width = i
                    for (var l = t.text.firstChild.getClientRects(), u = 0; u < l.length - 1; u++) {
                        var f = l[u],
                            m = l[u + 1]
                        Math.abs(f.bottom - m.bottom) > 2 && a.push((f.bottom + m.top) / 2 - n.top)
                    }
                }
                a.push(n.bottom - n.top)
            }
        }
        function Ia(e, t, n) {
            if (e.line == t) return { map: e.measure.map, cache: e.measure.cache }
            if (e.rest) {
                for (var r = 0; r < e.rest.length; r++)
                    if (e.rest[r] == t) return { map: e.measure.maps[r], cache: e.measure.caches[r] }
                for (var i = 0; i < e.rest.length; i++)
                    if (Xe(e.rest[i]) > n) return { map: e.measure.maps[i], cache: e.measure.caches[i], before: !0 }
            }
        }
        function ef(e, t) {
            t = $t(t)
            var n = Xe(t),
                r = (e.display.externalMeasured = new Ca(e.doc, t, n))
            r.lineN = n
            var i = (r.built = Ta(e, r))
            return (r.text = i.pre), J(e.display.lineMeasure, i.pre), r
        }
        function Fa(e, t, n, r) {
            return er(e, Gr(e, t), n, r)
        }
        function fo(e, t) {
            if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[Dr(e, t)]
            var n = e.display.externalMeasured
            if (n && t >= n.lineN && t < n.lineN + n.size) return n
        }
        function Gr(e, t) {
            var n = Xe(t),
                r = fo(e, n)
            r && !r.text ? (r = null) : r && r.changes && (Ea(e, r, n, vo(e)), (e.curOp.forceUpdate = !0)),
                r || (r = ef(e, t))
            var i = Ia(r, t, n)
            return { line: t, view: r, rect: null, map: i.map, cache: i.cache, before: i.before, hasHeights: !1 }
        }
        function er(e, t, n, r, i) {
            t.before && (n = -1)
            var a = n + (r || ''),
                l
            return (
                t.cache.hasOwnProperty(a)
                    ? (l = t.cache[a])
                    : (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
                      t.hasHeights || (Jc(e, t.view, t.rect), (t.hasHeights = !0)),
                      (l = rf(e, t, n, r)),
                      l.bogus || (t.cache[a] = l)),
                { left: l.left, right: l.right, top: i ? l.rtop : l.top, bottom: i ? l.rbottom : l.bottom }
            )
        }
        var Na = { left: 0, right: 0, top: 0, bottom: 0 }
        function Oa(e, t, n) {
            for (var r, i, a, l, u, f, m = 0; m < e.length; m += 3)
                if (
                    ((u = e[m]),
                    (f = e[m + 1]),
                    t < u
                        ? ((i = 0), (a = 1), (l = 'left'))
                        : t < f
                          ? ((i = t - u), (a = i + 1))
                          : (m == e.length - 3 || (t == f && e[m + 3] > t)) &&
                            ((a = f - u), (i = a - 1), t >= f && (l = 'right')),
                    i != null)
                ) {
                    if (
                        ((r = e[m + 2]),
                        u == f && n == (r.insertLeft ? 'left' : 'right') && (l = n),
                        n == 'left' && i == 0)
                    )
                        for (; m && e[m - 2] == e[m - 3] && e[m - 1].insertLeft; ) (r = e[(m -= 3) + 2]), (l = 'left')
                    if (n == 'right' && i == f - u)
                        for (; m < e.length - 3 && e[m + 3] == e[m + 4] && !e[m + 5].insertLeft; )
                            (r = e[(m += 3) + 2]), (l = 'right')
                    break
                }
            return { node: r, start: i, end: a, collapse: l, coverStart: u, coverEnd: f }
        }
        function tf(e, t) {
            var n = Na
            if (t == 'left') for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++);
            else for (var i = e.length - 1; i >= 0 && (n = e[i]).left == n.right; i--);
            return n
        }
        function rf(e, t, n, r) {
            var i = Oa(t.map, n, r),
                a = i.node,
                l = i.start,
                u = i.end,
                f = i.collapse,
                m
            if (a.nodeType == 3) {
                for (var A = 0; A < 4; A++) {
                    for (; l && we(t.line.text.charAt(i.coverStart + l)); ) --l
                    for (; i.coverStart + u < i.coverEnd && we(t.line.text.charAt(i.coverStart + u)); ) ++u
                    if (
                        (s && g < 9 && l == 0 && u == i.coverEnd - i.coverStart
                            ? (m = a.parentNode.getBoundingClientRect())
                            : (m = tf(Y(a, l, u).getClientRects(), r)),
                        m.left || m.right || l == 0)
                    )
                        break
                    ;(u = l), (l = l - 1), (f = 'right')
                }
                s && g < 11 && (m = nf(e.display.measure, m))
            } else {
                l > 0 && (f = r = 'right')
                var P
                e.options.lineWrapping && (P = a.getClientRects()).length > 1
                    ? (m = P[r == 'right' ? P.length - 1 : 0])
                    : (m = a.getBoundingClientRect())
            }
            if (s && g < 9 && !l && (!m || (!m.left && !m.right))) {
                var ee = a.parentNode.getClientRects()[0]
                ee ? (m = { left: ee.left, right: ee.left + Xr(e.display), top: ee.top, bottom: ee.bottom }) : (m = Na)
            }
            for (
                var Q = m.top - t.rect.top,
                    ae = m.bottom - t.rect.top,
                    ue = (Q + ae) / 2,
                    he = t.view.measure.heights,
                    ve = 0;
                ve < he.length - 1 && !(ue < he[ve]);
                ve++
            );
            var _e = ve ? he[ve - 1] : 0,
                be = he[ve],
                Te = {
                    left: (f == 'right' ? m.right : m.left) - t.rect.left,
                    right: (f == 'left' ? m.left : m.right) - t.rect.left,
                    top: _e,
                    bottom: be,
                }
            return (
                !m.left && !m.right && (Te.bogus = !0),
                e.options.singleCursorHeightPerLine || ((Te.rtop = Q), (Te.rbottom = ae)),
                Te
            )
        }
        function nf(e, t) {
            if (!window.screen || screen.logicalXDPI == null || screen.logicalXDPI == screen.deviceXDPI || !Vn(e))
                return t
            var n = screen.logicalXDPI / screen.deviceXDPI,
                r = screen.logicalYDPI / screen.deviceYDPI
            return { left: t.left * n, right: t.right * n, top: t.top * r, bottom: t.bottom * r }
        }
        function Pa(e) {
            if (e.measure && ((e.measure.cache = {}), (e.measure.heights = null), e.rest))
                for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {}
        }
        function ja(e) {
            ;(e.display.externalMeasure = null), j(e.display.lineMeasure)
            for (var t = 0; t < e.display.view.length; t++) Pa(e.display.view[t])
        }
        function Sn(e) {
            ja(e),
                (e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null),
                e.options.lineWrapping || (e.display.maxLineChanged = !0),
                (e.display.lineNumChars = null)
        }
        function Ra(e) {
            return k && H
                ? -(e.body.getBoundingClientRect().left - parseInt(getComputedStyle(e.body).marginLeft))
                : e.defaultView.pageXOffset || (e.documentElement || e.body).scrollLeft
        }
        function Ha(e) {
            return k && H
                ? -(e.body.getBoundingClientRect().top - parseInt(getComputedStyle(e.body).marginTop))
                : e.defaultView.pageYOffset || (e.documentElement || e.body).scrollTop
        }
        function po(e) {
            var t = $t(e),
                n = t.widgets,
                r = 0
            if (n) for (var i = 0; i < n.length; ++i) n[i].above && (r += wn(n[i]))
            return r
        }
        function ui(e, t, n, r, i) {
            if (!i) {
                var a = po(t)
                ;(n.top += a), (n.bottom += a)
            }
            if (r == 'line') return n
            r || (r = 'local')
            var l = lr(t)
            if ((r == 'local' ? (l += si(e.display)) : (l -= e.display.viewOffset), r == 'page' || r == 'window')) {
                var u = e.display.lineSpace.getBoundingClientRect()
                l += u.top + (r == 'window' ? 0 : Ha(T(e)))
                var f = u.left + (r == 'window' ? 0 : Ra(T(e)))
                ;(n.left += f), (n.right += f)
            }
            return (n.top += l), (n.bottom += l), n
        }
        function Ba(e, t, n) {
            if (n == 'div') return t
            var r = t.left,
                i = t.top
            if (n == 'page') (r -= Ra(T(e))), (i -= Ha(T(e)))
            else if (n == 'local' || !n) {
                var a = e.display.sizer.getBoundingClientRect()
                ;(r += a.left), (i += a.top)
            }
            var l = e.display.lineSpace.getBoundingClientRect()
            return { left: r - l.left, top: i - l.top }
        }
        function ci(e, t, n, r, i) {
            return r || (r = ze(e.doc, t.line)), ui(e, r, Fa(e, r, t.ch, i), n)
        }
        function Kt(e, t, n, r, i, a) {
            ;(r = r || ze(e.doc, t.line)), i || (i = Gr(e, r))
            function l(ae, ue) {
                var he = er(e, i, ae, ue ? 'right' : 'left', a)
                return ue ? (he.left = he.right) : (he.right = he.left), ui(e, r, he, n)
            }
            var u = xt(r, e.doc.direction),
                f = t.ch,
                m = t.sticky
            if ((f >= r.text.length ? ((f = r.text.length), (m = 'before')) : f <= 0 && ((f = 0), (m = 'after')), !u))
                return l(m == 'before' ? f - 1 : f, m == 'before')
            function A(ae, ue, he) {
                var ve = u[ue],
                    _e = ve.level == 1
                return l(he ? ae - 1 : ae, _e != he)
            }
            var P = et(u, f, m),
                ee = Ae,
                Q = A(f, P, m == 'before')
            return ee != null && (Q.other = A(f, ee, m != 'before')), Q
        }
        function Wa(e, t) {
            var n = 0
            ;(t = Pe(e.doc, t)), e.options.lineWrapping || (n = Xr(e.display) * t.ch)
            var r = ze(e.doc, t.line),
                i = lr(r) + si(e.display)
            return { left: n, right: n, top: i, bottom: i + r.height }
        }
        function ho(e, t, n, r, i) {
            var a = G(e, t, n)
            return (a.xRel = i), r && (a.outside = r), a
        }
        function go(e, t, n) {
            var r = e.doc
            if (((n += e.display.viewOffset), n < 0)) return ho(r.first, 0, null, -1, -1)
            var i = Qt(r, n),
                a = r.first + r.size - 1
            if (i > a) return ho(r.first + r.size - 1, ze(r, a).text.length, null, 1, 1)
            t < 0 && (t = 0)
            for (var l = ze(r, i); ; ) {
                var u = of(e, l, i, t, n),
                    f = Dc(l, u.ch + (u.xRel > 0 || u.outside > 0 ? 1 : 0))
                if (!f) return u
                var m = f.find(1)
                if (m.line == i) return m
                l = ze(r, (i = m.line))
            }
        }
        function Ua(e, t, n, r) {
            r -= po(t)
            var i = t.text.length,
                a = U(
                    function (l) {
                        return er(e, n, l - 1).bottom <= r
                    },
                    i,
                    0,
                )
            return (
                (i = U(
                    function (l) {
                        return er(e, n, l).top > r
                    },
                    a,
                    i,
                )),
                { begin: a, end: i }
            )
        }
        function $a(e, t, n, r) {
            n || (n = Gr(e, t))
            var i = ui(e, t, er(e, n, r), 'line').top
            return Ua(e, t, n, i)
        }
        function mo(e, t, n, r) {
            return e.bottom <= n ? !1 : e.top > n ? !0 : (r ? e.left : e.right) > t
        }
        function of(e, t, n, r, i) {
            i -= lr(t)
            var a = Gr(e, t),
                l = po(t),
                u = 0,
                f = t.text.length,
                m = !0,
                A = xt(t, e.doc.direction)
            if (A) {
                var P = (e.options.lineWrapping ? lf : af)(e, t, n, a, A, r, i)
                ;(m = P.level != 1), (u = m ? P.from : P.to - 1), (f = m ? P.to : P.from - 1)
            }
            var ee = null,
                Q = null,
                ae = U(
                    function (Ie) {
                        var qe = er(e, a, Ie)
                        return (
                            (qe.top += l),
                            (qe.bottom += l),
                            mo(qe, r, i, !1) ? (qe.top <= i && qe.left <= r && ((ee = Ie), (Q = qe)), !0) : !1
                        )
                    },
                    u,
                    f,
                ),
                ue,
                he,
                ve = !1
            if (Q) {
                var _e = r - Q.left < Q.right - r,
                    be = _e == m
                ;(ae = ee + (be ? 0 : 1)), (he = be ? 'after' : 'before'), (ue = _e ? Q.left : Q.right)
            } else {
                !m && (ae == f || ae == u) && ae++,
                    (he =
                        ae == 0
                            ? 'after'
                            : ae == t.text.length
                              ? 'before'
                              : er(e, a, ae - (m ? 1 : 0)).bottom + l <= i == m
                                ? 'after'
                                : 'before')
                var Te = Kt(e, G(n, ae, he), 'line', t, a)
                ;(ue = Te.left), (ve = i < Te.top ? -1 : i >= Te.bottom ? 1 : 0)
            }
            return (ae = $(t.text, ae, 1)), ho(n, ae, he, ve, r - ue)
        }
        function af(e, t, n, r, i, a, l) {
            var u = U(
                    function (P) {
                        var ee = i[P],
                            Q = ee.level != 1
                        return mo(Kt(e, G(n, Q ? ee.to : ee.from, Q ? 'before' : 'after'), 'line', t, r), a, l, !0)
                    },
                    0,
                    i.length - 1,
                ),
                f = i[u]
            if (u > 0) {
                var m = f.level != 1,
                    A = Kt(e, G(n, m ? f.from : f.to, m ? 'after' : 'before'), 'line', t, r)
                mo(A, a, l, !0) && A.top > l && (f = i[u - 1])
            }
            return f
        }
        function lf(e, t, n, r, i, a, l) {
            var u = Ua(e, t, r, l),
                f = u.begin,
                m = u.end
            ;/\s/.test(t.text.charAt(m - 1)) && m--
            for (var A = null, P = null, ee = 0; ee < i.length; ee++) {
                var Q = i[ee]
                if (!(Q.from >= m || Q.to <= f)) {
                    var ae = Q.level != 1,
                        ue = er(e, r, ae ? Math.min(m, Q.to) - 1 : Math.max(f, Q.from)).right,
                        he = ue < a ? a - ue + 1e9 : ue - a
                    ;(!A || P > he) && ((A = Q), (P = he))
                }
            }
            return (
                A || (A = i[i.length - 1]),
                A.from < f && (A = { from: f, to: A.to, level: A.level }),
                A.to > m && (A = { from: A.from, to: m, level: A.level }),
                A
            )
        }
        var Mr
        function Zr(e) {
            if (e.cachedTextHeight != null) return e.cachedTextHeight
            if (Mr == null) {
                Mr = x('pre', null, 'CodeMirror-line-like')
                for (var t = 0; t < 49; ++t) Mr.appendChild(document.createTextNode('x')), Mr.appendChild(x('br'))
                Mr.appendChild(document.createTextNode('x'))
            }
            J(e.measure, Mr)
            var n = Mr.offsetHeight / 50
            return n > 3 && (e.cachedTextHeight = n), j(e.measure), n || 1
        }
        function Xr(e) {
            if (e.cachedCharWidth != null) return e.cachedCharWidth
            var t = x('span', 'xxxxxxxxxx'),
                n = x('pre', [t], 'CodeMirror-line-like')
            J(e.measure, n)
            var r = t.getBoundingClientRect(),
                i = (r.right - r.left) / 10
            return i > 2 && (e.cachedCharWidth = i), i || 10
        }
        function vo(e) {
            for (
                var t = e.display, n = {}, r = {}, i = t.gutters.clientLeft, a = t.gutters.firstChild, l = 0;
                a;
                a = a.nextSibling, ++l
            ) {
                var u = e.display.gutterSpecs[l].className
                ;(n[u] = a.offsetLeft + a.clientLeft + i), (r[u] = a.clientWidth)
            }
            return {
                fixedPos: bo(t),
                gutterTotalWidth: t.gutters.offsetWidth,
                gutterLeft: n,
                gutterWidth: r,
                wrapperWidth: t.wrapper.clientWidth,
            }
        }
        function bo(e) {
            return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left
        }
        function Ka(e) {
            var t = Zr(e.display),
                n = e.options.lineWrapping,
                r = n && Math.max(5, e.display.scroller.clientWidth / Xr(e.display) - 3)
            return function (i) {
                if (vr(e.doc, i)) return 0
                var a = 0
                if (i.widgets)
                    for (var l = 0; l < i.widgets.length; l++) i.widgets[l].height && (a += i.widgets[l].height)
                return n ? a + (Math.ceil(i.text.length / r) || 1) * t : a + t
            }
        }
        function yo(e) {
            var t = e.doc,
                n = Ka(e)
            t.iter(function (r) {
                var i = n(r)
                i != r.height && Wt(r, i)
            })
        }
        function Ar(e, t, n, r) {
            var i = e.display
            if (!n && At(t).getAttribute('cm-not-content') == 'true') return null
            var a,
                l,
                u = i.lineSpace.getBoundingClientRect()
            try {
                ;(a = t.clientX - u.left), (l = t.clientY - u.top)
            } catch {
                return null
            }
            var f = go(e, a, l),
                m
            if (r && f.xRel > 0 && (m = ze(e.doc, f.line).text).length == f.ch) {
                var A = xe(m, m.length, e.options.tabSize) - m.length
                f = G(f.line, Math.max(0, Math.round((a - qa(e.display).left) / Xr(e.display)) - A))
            }
            return f
        }
        function Dr(e, t) {
            if (t >= e.display.viewTo || ((t -= e.display.viewFrom), t < 0)) return null
            for (var n = e.display.view, r = 0; r < n.length; r++) if (((t -= n[r].size), t < 0)) return r
        }
        function Dt(e, t, n, r) {
            t == null && (t = e.doc.first), n == null && (n = e.doc.first + e.doc.size), r || (r = 0)
            var i = e.display
            if (
                (r &&
                    n < i.viewTo &&
                    (i.updateLineNumbers == null || i.updateLineNumbers > t) &&
                    (i.updateLineNumbers = t),
                (e.curOp.viewChanged = !0),
                t >= i.viewTo)
            )
                ar && oo(e.doc, t) < i.viewTo && yr(e)
            else if (n <= i.viewFrom) ar && wa(e.doc, n + r) > i.viewFrom ? yr(e) : ((i.viewFrom += r), (i.viewTo += r))
            else if (t <= i.viewFrom && n >= i.viewTo) yr(e)
            else if (t <= i.viewFrom) {
                var a = fi(e, n, n + r, 1)
                a ? ((i.view = i.view.slice(a.index)), (i.viewFrom = a.lineN), (i.viewTo += r)) : yr(e)
            } else if (n >= i.viewTo) {
                var l = fi(e, t, t, -1)
                l ? ((i.view = i.view.slice(0, l.index)), (i.viewTo = l.lineN)) : yr(e)
            } else {
                var u = fi(e, t, t, -1),
                    f = fi(e, n, n + r, 1)
                u && f
                    ? ((i.view = i.view
                          .slice(0, u.index)
                          .concat(li(e, u.lineN, f.lineN))
                          .concat(i.view.slice(f.index))),
                      (i.viewTo += r))
                    : yr(e)
            }
            var m = i.externalMeasured
            m && (n < m.lineN ? (m.lineN += r) : t < m.lineN + m.size && (i.externalMeasured = null))
        }
        function br(e, t, n) {
            e.curOp.viewChanged = !0
            var r = e.display,
                i = e.display.externalMeasured
            if (
                (i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null),
                !(t < r.viewFrom || t >= r.viewTo))
            ) {
                var a = r.view[Dr(e, t)]
                if (a.node != null) {
                    var l = a.changes || (a.changes = [])
                    De(l, n) == -1 && l.push(n)
                }
            }
        }
        function yr(e) {
            ;(e.display.viewFrom = e.display.viewTo = e.doc.first), (e.display.view = []), (e.display.viewOffset = 0)
        }
        function fi(e, t, n, r) {
            var i = Dr(e, t),
                a,
                l = e.display.view
            if (!ar || n == e.doc.first + e.doc.size) return { index: i, lineN: n }
            for (var u = e.display.viewFrom, f = 0; f < i; f++) u += l[f].size
            if (u != t) {
                if (r > 0) {
                    if (i == l.length - 1) return null
                    ;(a = u + l[i].size - t), i++
                } else a = u - t
                ;(t += a), (n += a)
            }
            for (; oo(e.doc, n) != n; ) {
                if (i == (r < 0 ? 0 : l.length - 1)) return null
                ;(n += r * l[i - (r < 0 ? 1 : 0)].size), (i += r)
            }
            return { index: i, lineN: n }
        }
        function sf(e, t, n) {
            var r = e.display,
                i = r.view
            i.length == 0 || t >= r.viewTo || n <= r.viewFrom
                ? ((r.view = li(e, t, n)), (r.viewFrom = t))
                : (r.viewFrom > t
                      ? (r.view = li(e, t, r.viewFrom).concat(r.view))
                      : r.viewFrom < t && (r.view = r.view.slice(Dr(e, t))),
                  (r.viewFrom = t),
                  r.viewTo < n
                      ? (r.view = r.view.concat(li(e, r.viewTo, n)))
                      : r.viewTo > n && (r.view = r.view.slice(0, Dr(e, n)))),
                (r.viewTo = n)
        }
        function Ga(e) {
            for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
                var i = t[r]
                !i.hidden && (!i.node || i.changes) && ++n
            }
            return n
        }
        function Tn(e) {
            e.display.input.showSelection(e.display.input.prepareSelection())
        }
        function Za(e, t) {
            t === void 0 && (t = !0)
            var n = e.doc,
                r = {},
                i = (r.cursors = document.createDocumentFragment()),
                a = (r.selection = document.createDocumentFragment()),
                l = e.options.$customCursor
            l && (t = !0)
            for (var u = 0; u < n.sel.ranges.length; u++)
                if (!(!t && u == n.sel.primIndex)) {
                    var f = n.sel.ranges[u]
                    if (!(f.from().line >= e.display.viewTo || f.to().line < e.display.viewFrom)) {
                        var m = f.empty()
                        if (l) {
                            var A = l(e, f)
                            A && xo(e, A, i)
                        } else (m || e.options.showCursorWhenSelecting) && xo(e, f.head, i)
                        m || uf(e, f, a)
                    }
                }
            return r
        }
        function xo(e, t, n) {
            var r = Kt(e, t, 'div', null, null, !e.options.singleCursorHeightPerLine),
                i = n.appendChild(x('div', '\xA0', 'CodeMirror-cursor'))
            if (
                ((i.style.left = r.left + 'px'),
                (i.style.top = r.top + 'px'),
                (i.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + 'px'),
                /\bcm-fat-cursor\b/.test(e.getWrapperElement().className))
            ) {
                var a = ci(e, t, 'div', null, null),
                    l = a.right - a.left
                i.style.width = (l > 0 ? l : e.defaultCharWidth()) + 'px'
            }
            if (r.other) {
                var u = n.appendChild(x('div', '\xA0', 'CodeMirror-cursor CodeMirror-secondarycursor'))
                ;(u.style.display = ''),
                    (u.style.left = r.other.left + 'px'),
                    (u.style.top = r.other.top + 'px'),
                    (u.style.height = (r.other.bottom - r.other.top) * 0.85 + 'px')
            }
        }
        function di(e, t) {
            return e.top - t.top || e.left - t.left
        }
        function uf(e, t, n) {
            var r = e.display,
                i = e.doc,
                a = document.createDocumentFragment(),
                l = qa(e.display),
                u = l.left,
                f = Math.max(r.sizerWidth, zr(e) - r.sizer.offsetLeft) - l.right,
                m = i.direction == 'ltr'
            function A(be, Te, Ie, qe) {
                Te < 0 && (Te = 0),
                    (Te = Math.round(Te)),
                    (qe = Math.round(qe)),
                    a.appendChild(
                        x(
                            'div',
                            null,
                            'CodeMirror-selected',
                            'position: absolute; left: ' +
                                be +
                                `px;
                             top: ` +
                                Te +
                                'px; width: ' +
                                (Ie ?? f - be) +
                                `px;
                             height: ` +
                                (qe - Te) +
                                'px',
                        ),
                    )
            }
            function P(be, Te, Ie) {
                var qe = ze(i, be),
                    We = qe.text.length,
                    Ve,
                    mt
                function it(ut, Ft) {
                    return ci(e, G(be, ut), 'div', qe, Ft)
                }
                function jt(ut, Ft, yt) {
                    var dt = $a(e, qe, null, ut),
                        ct = (Ft == 'ltr') == (yt == 'after') ? 'left' : 'right',
                        lt = yt == 'after' ? dt.begin : dt.end - (/\s/.test(qe.text.charAt(dt.end - 1)) ? 2 : 1)
                    return it(lt, ct)[ct]
                }
                var It = xt(qe, i.direction)
                return (
                    se(It, Te || 0, Ie ?? We, function (ut, Ft, yt, dt) {
                        var ct = yt == 'ltr',
                            lt = it(ut, ct ? 'left' : 'right'),
                            Nt = it(Ft - 1, ct ? 'right' : 'left'),
                            un = Te == null && ut == 0,
                            Tr = Ie == null && Ft == We,
                            St = dt == 0,
                            tr = !It || dt == It.length - 1
                        if (Nt.top - lt.top <= 3) {
                            var vt = (m ? un : Tr) && St,
                                Go = (m ? Tr : un) && tr,
                                fr = vt ? u : (ct ? lt : Nt).left,
                                Or = Go ? f : (ct ? Nt : lt).right
                            A(fr, lt.top, Or - fr, lt.bottom)
                        } else {
                            var Pr, Et, cn, Zo
                            ct
                                ? ((Pr = m && un && St ? u : lt.left),
                                  (Et = m ? f : jt(ut, yt, 'before')),
                                  (cn = m ? u : jt(Ft, yt, 'after')),
                                  (Zo = m && Tr && tr ? f : Nt.right))
                                : ((Pr = m ? jt(ut, yt, 'before') : u),
                                  (Et = !m && un && St ? f : lt.right),
                                  (cn = !m && Tr && tr ? u : Nt.left),
                                  (Zo = m ? jt(Ft, yt, 'after') : f)),
                                A(Pr, lt.top, Et - Pr, lt.bottom),
                                lt.bottom < Nt.top && A(u, lt.bottom, null, Nt.top),
                                A(cn, Nt.top, Zo - cn, Nt.bottom)
                        }
                        ;(!Ve || di(lt, Ve) < 0) && (Ve = lt),
                            di(Nt, Ve) < 0 && (Ve = Nt),
                            (!mt || di(lt, mt) < 0) && (mt = lt),
                            di(Nt, mt) < 0 && (mt = Nt)
                    }),
                    { start: Ve, end: mt }
                )
            }
            var ee = t.from(),
                Q = t.to()
            if (ee.line == Q.line) P(ee.line, ee.ch, Q.ch)
            else {
                var ae = ze(i, ee.line),
                    ue = ze(i, Q.line),
                    he = $t(ae) == $t(ue),
                    ve = P(ee.line, ee.ch, he ? ae.text.length + 1 : null).end,
                    _e = P(Q.line, he ? 0 : null, Q.ch).start
                he &&
                    (ve.top < _e.top - 2
                        ? (A(ve.right, ve.top, null, ve.bottom), A(u, _e.top, _e.left, _e.bottom))
                        : A(ve.right, ve.top, _e.left - ve.right, ve.bottom)),
                    ve.bottom < _e.top && A(u, ve.bottom, null, _e.top)
            }
            n.appendChild(a)
        }
        function _o(e) {
            if (e.state.focused) {
                var t = e.display
                clearInterval(t.blinker)
                var n = !0
                ;(t.cursorDiv.style.visibility = ''),
                    e.options.cursorBlinkRate > 0
                        ? (t.blinker = setInterval(function () {
                              e.hasFocus() || Yr(e), (t.cursorDiv.style.visibility = (n = !n) ? '' : 'hidden')
                          }, e.options.cursorBlinkRate))
                        : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = 'hidden')
            }
        }
        function Xa(e) {
            e.hasFocus() || (e.display.input.focus(), e.state.focused || wo(e))
        }
        function ko(e) {
            ;(e.state.delayingBlurEvent = !0),
                setTimeout(function () {
                    e.state.delayingBlurEvent && ((e.state.delayingBlurEvent = !1), e.state.focused && Yr(e))
                }, 100)
        }
        function wo(e, t) {
            e.state.delayingBlurEvent && !e.state.draggingText && (e.state.delayingBlurEvent = !1),
                e.options.readOnly != 'nocursor' &&
                    (e.state.focused ||
                        (tt(e, 'focus', e, t),
                        (e.state.focused = !0),
                        le(e.display.wrapper, 'CodeMirror-focused'),
                        !e.curOp &&
                            e.display.selForContextMenu != e.doc.sel &&
                            (e.display.input.reset(),
                            h &&
                                setTimeout(function () {
                                    return e.display.input.reset(!0)
                                }, 20)),
                        e.display.input.receivedFocus()),
                    _o(e))
        }
        function Yr(e, t) {
            e.state.delayingBlurEvent ||
                (e.state.focused &&
                    (tt(e, 'blur', e, t), (e.state.focused = !1), V(e.display.wrapper, 'CodeMirror-focused')),
                clearInterval(e.display.blinker),
                setTimeout(function () {
                    e.state.focused || (e.display.shift = !1)
                }, 150))
        }
        function pi(e) {
            for (
                var t = e.display,
                    n = t.lineDiv.offsetTop,
                    r = Math.max(0, t.scroller.getBoundingClientRect().top),
                    i = t.lineDiv.getBoundingClientRect().top,
                    a = 0,
                    l = 0;
                l < t.view.length;
                l++
            ) {
                var u = t.view[l],
                    f = e.options.lineWrapping,
                    m = void 0,
                    A = 0
                if (!u.hidden) {
                    if (((i += u.line.height), s && g < 8)) {
                        var P = u.node.offsetTop + u.node.offsetHeight
                        ;(m = P - n), (n = P)
                    } else {
                        var ee = u.node.getBoundingClientRect()
                        ;(m = ee.bottom - ee.top),
                            !f &&
                                u.text.firstChild &&
                                (A = u.text.firstChild.getBoundingClientRect().right - ee.left - 1)
                    }
                    var Q = u.line.height - m
                    if ((Q > 0.005 || Q < -0.005) && (i < r && (a -= Q), Wt(u.line, m), Ya(u.line), u.rest))
                        for (var ae = 0; ae < u.rest.length; ae++) Ya(u.rest[ae])
                    if (A > e.display.sizerWidth) {
                        var ue = Math.ceil(A / Xr(e.display))
                        ue > e.display.maxLineLength &&
                            ((e.display.maxLineLength = ue),
                            (e.display.maxLine = u.line),
                            (e.display.maxLineChanged = !0))
                    }
                }
            }
            Math.abs(a) > 2 && (t.scroller.scrollTop += a)
        }
        function Ya(e) {
            if (e.widgets)
                for (var t = 0; t < e.widgets.length; ++t) {
                    var n = e.widgets[t],
                        r = n.node.parentNode
                    r && (n.height = r.offsetHeight)
                }
        }
        function hi(e, t, n) {
            var r = n && n.top != null ? Math.max(0, n.top) : e.scroller.scrollTop
            r = Math.floor(r - si(e))
            var i = n && n.bottom != null ? n.bottom : r + e.wrapper.clientHeight,
                a = Qt(t, r),
                l = Qt(t, i)
            if (n && n.ensure) {
                var u = n.ensure.from.line,
                    f = n.ensure.to.line
                u < a
                    ? ((a = u), (l = Qt(t, lr(ze(t, u)) + e.wrapper.clientHeight)))
                    : Math.min(f, t.lastLine()) >= l && ((a = Qt(t, lr(ze(t, f)) - e.wrapper.clientHeight)), (l = f))
            }
            return { from: a, to: Math.max(l, a + 1) }
        }
        function cf(e, t) {
            if (!ot(e, 'scrollCursorIntoView')) {
                var n = e.display,
                    r = n.sizer.getBoundingClientRect(),
                    i = null,
                    a = n.wrapper.ownerDocument
                if (
                    (t.top + r.top < 0
                        ? (i = !0)
                        : t.bottom + r.top > (a.defaultView.innerHeight || a.documentElement.clientHeight) && (i = !1),
                    i != null && !z)
                ) {
                    var l = x(
                        'div',
                        '\u200B',
                        null,
                        `position: absolute;
                         top: ` +
                            (t.top - n.viewOffset - si(e.display)) +
                            `px;
                         height: ` +
                            (t.bottom - t.top + Jt(e) + n.barHeight) +
                            `px;
                         left: ` +
                            t.left +
                            'px; width: ' +
                            Math.max(2, t.right - t.left) +
                            'px;',
                    )
                    e.display.lineSpace.appendChild(l), l.scrollIntoView(i), e.display.lineSpace.removeChild(l)
                }
            }
        }
        function ff(e, t, n, r) {
            r == null && (r = 0)
            var i
            !e.options.lineWrapping &&
                t == n &&
                ((n = t.sticky == 'before' ? G(t.line, t.ch + 1, 'before') : t),
                (t = t.ch ? G(t.line, t.sticky == 'before' ? t.ch - 1 : t.ch, 'after') : t))
            for (var a = 0; a < 5; a++) {
                var l = !1,
                    u = Kt(e, t),
                    f = !n || n == t ? u : Kt(e, n)
                i = {
                    left: Math.min(u.left, f.left),
                    top: Math.min(u.top, f.top) - r,
                    right: Math.max(u.left, f.left),
                    bottom: Math.max(u.bottom, f.bottom) + r,
                }
                var m = So(e, i),
                    A = e.doc.scrollTop,
                    P = e.doc.scrollLeft
                if (
                    (m.scrollTop != null && (Cn(e, m.scrollTop), Math.abs(e.doc.scrollTop - A) > 1 && (l = !0)),
                    m.scrollLeft != null && (qr(e, m.scrollLeft), Math.abs(e.doc.scrollLeft - P) > 1 && (l = !0)),
                    !l)
                )
                    break
            }
            return i
        }
        function df(e, t) {
            var n = So(e, t)
            n.scrollTop != null && Cn(e, n.scrollTop), n.scrollLeft != null && qr(e, n.scrollLeft)
        }
        function So(e, t) {
            var n = e.display,
                r = Zr(e.display)
            t.top < 0 && (t.top = 0)
            var i = e.curOp && e.curOp.scrollTop != null ? e.curOp.scrollTop : n.scroller.scrollTop,
                a = co(e),
                l = {}
            t.bottom - t.top > a && (t.bottom = t.top + a)
            var u = e.doc.height + uo(n),
                f = t.top < r,
                m = t.bottom > u - r
            if (t.top < i) l.scrollTop = f ? 0 : t.top
            else if (t.bottom > i + a) {
                var A = Math.min(t.top, (m ? u : t.bottom) - a)
                A != i && (l.scrollTop = A)
            }
            var P = e.options.fixedGutter ? 0 : n.gutters.offsetWidth,
                ee = e.curOp && e.curOp.scrollLeft != null ? e.curOp.scrollLeft : n.scroller.scrollLeft - P,
                Q = zr(e) - n.gutters.offsetWidth,
                ae = t.right - t.left > Q
            return (
                ae && (t.right = t.left + Q),
                t.left < 10
                    ? (l.scrollLeft = 0)
                    : t.left < ee
                      ? (l.scrollLeft = Math.max(0, t.left + P - (ae ? 0 : 10)))
                      : t.right > Q + ee - 3 && (l.scrollLeft = t.right + (ae ? 0 : 10) - Q),
                l
            )
        }
        function To(e, t) {
            t != null &&
                (gi(e), (e.curOp.scrollTop = (e.curOp.scrollTop == null ? e.doc.scrollTop : e.curOp.scrollTop) + t))
        }
        function Qr(e) {
            gi(e)
            var t = e.getCursor()
            e.curOp.scrollToPos = { from: t, to: t, margin: e.options.cursorScrollMargin }
        }
        function Ln(e, t, n) {
            ;(t != null || n != null) && gi(e),
                t != null && (e.curOp.scrollLeft = t),
                n != null && (e.curOp.scrollTop = n)
        }
        function pf(e, t) {
            gi(e), (e.curOp.scrollToPos = t)
        }
        function gi(e) {
            var t = e.curOp.scrollToPos
            if (t) {
                e.curOp.scrollToPos = null
                var n = Wa(e, t.from),
                    r = Wa(e, t.to)
                Qa(e, n, r, t.margin)
            }
        }
        function Qa(e, t, n, r) {
            var i = So(e, {
                left: Math.min(t.left, n.left),
                top: Math.min(t.top, n.top) - r,
                right: Math.max(t.right, n.right),
                bottom: Math.max(t.bottom, n.bottom) + r,
            })
            Ln(e, i.scrollLeft, i.scrollTop)
        }
        function Cn(e, t) {
            Math.abs(e.doc.scrollTop - t) < 2 || (v || Co(e, { top: t }), Va(e, t, !0), v && Co(e), Mn(e, 100))
        }
        function Va(e, t, n) {
            ;(t = Math.max(0, Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t))),
                !(e.display.scroller.scrollTop == t && !n) &&
                    ((e.doc.scrollTop = t),
                    e.display.scrollbars.setScrollTop(t),
                    e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t))
        }
        function qr(e, t, n, r) {
            ;(t = Math.max(0, Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth))),
                !((n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !r) &&
                    ((e.doc.scrollLeft = t),
                    nl(e),
                    e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t),
                    e.display.scrollbars.setScrollLeft(t))
        }
        function En(e) {
            var t = e.display,
                n = t.gutters.offsetWidth,
                r = Math.round(e.doc.height + uo(e.display))
            return {
                clientHeight: t.scroller.clientHeight,
                viewHeight: t.wrapper.clientHeight,
                scrollWidth: t.scroller.scrollWidth,
                clientWidth: t.scroller.clientWidth,
                viewWidth: t.wrapper.clientWidth,
                barLeft: e.options.fixedGutter ? n : 0,
                docHeight: r,
                scrollHeight: r + Jt(e) + t.barHeight,
                nativeBarWidth: t.nativeBarWidth,
                gutterWidth: n,
            }
        }
        var Ir = function (e, t, n) {
            this.cm = n
            var r = (this.vert = x('div', [x('div', null, null, 'min-width: 1px')], 'CodeMirror-vscrollbar')),
                i = (this.horiz = x(
                    'div',
                    [x('div', null, null, 'height: 100%; min-height: 1px')],
                    'CodeMirror-hscrollbar',
                ))
            ;(r.tabIndex = i.tabIndex = -1),
                e(r),
                e(i),
                ge(r, 'scroll', function () {
                    r.clientHeight && t(r.scrollTop, 'vertical')
                }),
                ge(i, 'scroll', function () {
                    i.clientWidth && t(i.scrollLeft, 'horizontal')
                }),
                (this.checkedZeroWidth = !1),
                s && g < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = '18px')
        }
        ;(Ir.prototype.update = function (e) {
            var t = e.scrollWidth > e.clientWidth + 1,
                n = e.scrollHeight > e.clientHeight + 1,
                r = e.nativeBarWidth
            if (n) {
                ;(this.vert.style.display = 'block'), (this.vert.style.bottom = t ? r + 'px' : '0')
                var i = e.viewHeight - (t ? r : 0)
                this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + 'px'
            } else (this.vert.scrollTop = 0), (this.vert.style.display = ''), (this.vert.firstChild.style.height = '0')
            if (t) {
                ;(this.horiz.style.display = 'block'),
                    (this.horiz.style.right = n ? r + 'px' : '0'),
                    (this.horiz.style.left = e.barLeft + 'px')
                var a = e.viewWidth - e.barLeft - (n ? r : 0)
                this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + a) + 'px'
            } else (this.horiz.style.display = ''), (this.horiz.firstChild.style.width = '0')
            return (
                !this.checkedZeroWidth &&
                    e.clientHeight > 0 &&
                    (r == 0 && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
                { right: n ? r : 0, bottom: t ? r : 0 }
            )
        }),
            (Ir.prototype.setScrollLeft = function (e) {
                this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
                    this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, 'horiz')
            }),
            (Ir.prototype.setScrollTop = function (e) {
                this.vert.scrollTop != e && (this.vert.scrollTop = e),
                    this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, 'vert')
            }),
            (Ir.prototype.zeroWidthHack = function () {
                var e = B && !E ? '12px' : '18px'
                ;(this.horiz.style.height = this.vert.style.width = e),
                    (this.horiz.style.visibility = this.vert.style.visibility = 'hidden'),
                    (this.disableHoriz = new pe()),
                    (this.disableVert = new pe())
            }),
            (Ir.prototype.enableZeroWidthBar = function (e, t, n) {
                e.style.visibility = ''
                function r() {
                    var i = e.getBoundingClientRect(),
                        a =
                            n == 'vert'
                                ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2)
                                : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1)
                    a != e ? (e.style.visibility = 'hidden') : t.set(1e3, r)
                }
                t.set(1e3, r)
            }),
            (Ir.prototype.clear = function () {
                var e = this.horiz.parentNode
                e.removeChild(this.horiz), e.removeChild(this.vert)
            })
        var zn = function () {}
        ;(zn.prototype.update = function () {
            return { bottom: 0, right: 0 }
        }),
            (zn.prototype.setScrollLeft = function () {}),
            (zn.prototype.setScrollTop = function () {}),
            (zn.prototype.clear = function () {})
        function Vr(e, t) {
            t || (t = En(e))
            var n = e.display.barWidth,
                r = e.display.barHeight
            Ja(e, t)
            for (var i = 0; (i < 4 && n != e.display.barWidth) || r != e.display.barHeight; i++)
                n != e.display.barWidth && e.options.lineWrapping && pi(e),
                    Ja(e, En(e)),
                    (n = e.display.barWidth),
                    (r = e.display.barHeight)
        }
        function Ja(e, t) {
            var n = e.display,
                r = n.scrollbars.update(t)
            ;(n.sizer.style.paddingRight = (n.barWidth = r.right) + 'px'),
                (n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + 'px'),
                (n.heightForcer.style.borderBottom = r.bottom + 'px solid transparent'),
                r.right && r.bottom
                    ? ((n.scrollbarFiller.style.display = 'block'),
                      (n.scrollbarFiller.style.height = r.bottom + 'px'),
                      (n.scrollbarFiller.style.width = r.right + 'px'))
                    : (n.scrollbarFiller.style.display = ''),
                r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter
                    ? ((n.gutterFiller.style.display = 'block'),
                      (n.gutterFiller.style.height = r.bottom + 'px'),
                      (n.gutterFiller.style.width = t.gutterWidth + 'px'))
                    : (n.gutterFiller.style.display = '')
        }
        var el = { native: Ir, null: zn }
        function tl(e) {
            e.display.scrollbars &&
                (e.display.scrollbars.clear(),
                e.display.scrollbars.addClass && V(e.display.wrapper, e.display.scrollbars.addClass)),
                (e.display.scrollbars = new el[e.options.scrollbarStyle](
                    function (t) {
                        e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
                            ge(t, 'mousedown', function () {
                                e.state.focused &&
                                    setTimeout(function () {
                                        return e.display.input.focus()
                                    }, 0)
                            }),
                            t.setAttribute('cm-not-content', 'true')
                    },
                    function (t, n) {
                        n == 'horizontal' ? qr(e, t) : Cn(e, t)
                    },
                    e,
                )),
                e.display.scrollbars.addClass && le(e.display.wrapper, e.display.scrollbars.addClass)
        }
        var hf = 0
        function Fr(e) {
            ;(e.curOp = {
                cm: e,
                viewChanged: !1,
                startHeight: e.doc.height,
                forceUpdate: !1,
                updateInput: 0,
                typing: !1,
                changeObjs: null,
                cursorActivityHandlers: null,
                cursorActivityCalled: 0,
                selectionChanged: !1,
                updateMaxLine: !1,
                scrollLeft: null,
                scrollTop: null,
                scrollToPos: null,
                focus: !1,
                id: ++hf,
                markArrays: null,
            }),
                Uc(e.curOp)
        }
        function Nr(e) {
            var t = e.curOp
            t &&
                Kc(t, function (n) {
                    for (var r = 0; r < n.ops.length; r++) n.ops[r].cm.curOp = null
                    gf(n)
                })
        }
        function gf(e) {
            for (var t = e.ops, n = 0; n < t.length; n++) mf(t[n])
            for (var r = 0; r < t.length; r++) vf(t[r])
            for (var i = 0; i < t.length; i++) bf(t[i])
            for (var a = 0; a < t.length; a++) yf(t[a])
            for (var l = 0; l < t.length; l++) xf(t[l])
        }
        function mf(e) {
            var t = e.cm,
                n = t.display
            kf(t),
                e.updateMaxLine && lo(t),
                (e.mustUpdate =
                    e.viewChanged ||
                    e.forceUpdate ||
                    e.scrollTop != null ||
                    (e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo)) ||
                    (n.maxLineChanged && t.options.lineWrapping)),
                (e.update =
                    e.mustUpdate &&
                    new mi(t, e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos }, e.forceUpdate))
        }
        function vf(e) {
            e.updatedDisplay = e.mustUpdate && Lo(e.cm, e.update)
        }
        function bf(e) {
            var t = e.cm,
                n = t.display
            e.updatedDisplay && pi(t),
                (e.barMeasure = En(t)),
                n.maxLineChanged &&
                    !t.options.lineWrapping &&
                    ((e.adjustWidthTo = Fa(t, n.maxLine, n.maxLine.text.length).left + 3),
                    (t.display.sizerWidth = e.adjustWidthTo),
                    (e.barMeasure.scrollWidth = Math.max(
                        n.scroller.clientWidth,
                        n.sizer.offsetLeft + e.adjustWidthTo + Jt(t) + t.display.barWidth,
                    )),
                    (e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - zr(t)))),
                (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection())
        }
        function yf(e) {
            var t = e.cm
            e.adjustWidthTo != null &&
                ((t.display.sizer.style.minWidth = e.adjustWidthTo + 'px'),
                e.maxScrollLeft < t.doc.scrollLeft &&
                    qr(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0),
                (t.display.maxLineChanged = !1))
            var n = e.focus && e.focus == W(T(t))
            e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n),
                (e.updatedDisplay || e.startHeight != t.doc.height) && Vr(t, e.barMeasure),
                e.updatedDisplay && zo(t, e.barMeasure),
                e.selectionChanged && _o(t),
                t.state.focused && e.updateInput && t.display.input.reset(e.typing),
                n && Xa(e.cm)
        }
        function xf(e) {
            var t = e.cm,
                n = t.display,
                r = t.doc
            if (
                (e.updatedDisplay && rl(t, e.update),
                n.wheelStartX != null &&
                    (e.scrollTop != null || e.scrollLeft != null || e.scrollToPos) &&
                    (n.wheelStartX = n.wheelStartY = null),
                e.scrollTop != null && Va(t, e.scrollTop, e.forceScroll),
                e.scrollLeft != null && qr(t, e.scrollLeft, !0, !0),
                e.scrollToPos)
            ) {
                var i = ff(t, Pe(r, e.scrollToPos.from), Pe(r, e.scrollToPos.to), e.scrollToPos.margin)
                cf(t, i)
            }
            var a = e.maybeHiddenMarkers,
                l = e.maybeUnhiddenMarkers
            if (a) for (var u = 0; u < a.length; ++u) a[u].lines.length || tt(a[u], 'hide')
            if (l) for (var f = 0; f < l.length; ++f) l[f].lines.length && tt(l[f], 'unhide')
            n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop),
                e.changeObjs && tt(t, 'changes', t, e.changeObjs),
                e.update && e.update.finish()
        }
        function Pt(e, t) {
            if (e.curOp) return t()
            Fr(e)
            try {
                return t()
            } finally {
                Nr(e)
            }
        }
        function ht(e, t) {
            return function () {
                if (e.curOp) return t.apply(e, arguments)
                Fr(e)
                try {
                    return t.apply(e, arguments)
                } finally {
                    Nr(e)
                }
            }
        }
        function Ct(e) {
            return function () {
                if (this.curOp) return e.apply(this, arguments)
                Fr(this)
                try {
                    return e.apply(this, arguments)
                } finally {
                    Nr(this)
                }
            }
        }
        function gt(e) {
            return function () {
                var t = this.cm
                if (!t || t.curOp) return e.apply(this, arguments)
                Fr(t)
                try {
                    return e.apply(this, arguments)
                } finally {
                    Nr(t)
                }
            }
        }
        function Mn(e, t) {
            e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, Ee(_f, e))
        }
        function _f(e) {
            var t = e.doc
            if (!(t.highlightFrontier >= e.display.viewTo)) {
                var n = +new Date() + e.options.workTime,
                    r = yn(e, t.highlightFrontier),
                    i = []
                t.iter(r.line, Math.min(t.first + t.size, e.display.viewTo + 500), function (a) {
                    if (r.line >= e.display.viewFrom) {
                        var l = a.styles,
                            u = a.text.length > e.options.maxHighlightLength ? ir(t.mode, r.state) : null,
                            f = ua(e, a, r, !0)
                        u && (r.state = u), (a.styles = f.styles)
                        var m = a.styleClasses,
                            A = f.classes
                        A ? (a.styleClasses = A) : m && (a.styleClasses = null)
                        for (
                            var P =
                                    !l ||
                                    l.length != a.styles.length ||
                                    (m != A && (!m || !A || m.bgClass != A.bgClass || m.textClass != A.textClass)),
                                ee = 0;
                            !P && ee < l.length;
                            ++ee
                        )
                            P = l[ee] != a.styles[ee]
                        P && i.push(r.line), (a.stateAfter = r.save()), r.nextLine()
                    } else
                        a.text.length <= e.options.maxHighlightLength && to(e, a.text, r),
                            (a.stateAfter = r.line % 5 == 0 ? r.save() : null),
                            r.nextLine()
                    if (+new Date() > n) return Mn(e, e.options.workDelay), !0
                }),
                    (t.highlightFrontier = r.line),
                    (t.modeFrontier = Math.max(t.modeFrontier, r.line)),
                    i.length &&
                        Pt(e, function () {
                            for (var a = 0; a < i.length; a++) br(e, i[a], 'text')
                        })
            }
        }
        var mi = function (e, t, n) {
            var r = e.display
            ;(this.viewport = t),
                (this.visible = hi(r, e.doc, t)),
                (this.editorIsHidden = !r.wrapper.offsetWidth),
                (this.wrapperHeight = r.wrapper.clientHeight),
                (this.wrapperWidth = r.wrapper.clientWidth),
                (this.oldDisplayWidth = zr(e)),
                (this.force = n),
                (this.dims = vo(e)),
                (this.events = [])
        }
        ;(mi.prototype.signal = function (e, t) {
            Tt(e, t) && this.events.push(arguments)
        }),
            (mi.prototype.finish = function () {
                for (var e = 0; e < this.events.length; e++) tt.apply(null, this.events[e])
            })
        function kf(e) {
            var t = e.display
            !t.scrollbarsClipped &&
                t.scroller.offsetWidth &&
                ((t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth),
                (t.heightForcer.style.height = Jt(e) + 'px'),
                (t.sizer.style.marginBottom = -t.nativeBarWidth + 'px'),
                (t.sizer.style.borderRightWidth = Jt(e) + 'px'),
                (t.scrollbarsClipped = !0))
        }
        function wf(e) {
            if (e.hasFocus()) return null
            var t = W(T(e))
            if (!t || !I(e.display.lineDiv, t)) return null
            var n = { activeElt: t }
            if (window.getSelection) {
                var r = de(e).getSelection()
                r.anchorNode &&
                    r.extend &&
                    I(e.display.lineDiv, r.anchorNode) &&
                    ((n.anchorNode = r.anchorNode),
                    (n.anchorOffset = r.anchorOffset),
                    (n.focusNode = r.focusNode),
                    (n.focusOffset = r.focusOffset))
            }
            return n
        }
        function Sf(e) {
            if (
                !(!e || !e.activeElt || e.activeElt == W(e.activeElt.ownerDocument)) &&
                (e.activeElt.focus(),
                !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) &&
                    e.anchorNode &&
                    I(document.body, e.anchorNode) &&
                    I(document.body, e.focusNode))
            ) {
                var t = e.activeElt.ownerDocument,
                    n = t.defaultView.getSelection(),
                    r = t.createRange()
                r.setEnd(e.anchorNode, e.anchorOffset),
                    r.collapse(!1),
                    n.removeAllRanges(),
                    n.addRange(r),
                    n.extend(e.focusNode, e.focusOffset)
            }
        }
        function Lo(e, t) {
            var n = e.display,
                r = e.doc
            if (t.editorIsHidden) return yr(e), !1
            if (
                !t.force &&
                t.visible.from >= n.viewFrom &&
                t.visible.to <= n.viewTo &&
                (n.updateLineNumbers == null || n.updateLineNumbers >= n.viewTo) &&
                n.renderedView == n.view &&
                Ga(e) == 0
            )
                return !1
            il(e) && (yr(e), (t.dims = vo(e)))
            var i = r.first + r.size,
                a = Math.max(t.visible.from - e.options.viewportMargin, r.first),
                l = Math.min(i, t.visible.to + e.options.viewportMargin)
            n.viewFrom < a && a - n.viewFrom < 20 && (a = Math.max(r.first, n.viewFrom)),
                n.viewTo > l && n.viewTo - l < 20 && (l = Math.min(i, n.viewTo)),
                ar && ((a = oo(e.doc, a)), (l = wa(e.doc, l)))
            var u =
                a != n.viewFrom ||
                l != n.viewTo ||
                n.lastWrapHeight != t.wrapperHeight ||
                n.lastWrapWidth != t.wrapperWidth
            sf(e, a, l), (n.viewOffset = lr(ze(e.doc, n.viewFrom))), (e.display.mover.style.top = n.viewOffset + 'px')
            var f = Ga(e)
            if (
                !u &&
                f == 0 &&
                !t.force &&
                n.renderedView == n.view &&
                (n.updateLineNumbers == null || n.updateLineNumbers >= n.viewTo)
            )
                return !1
            var m = wf(e)
            return (
                f > 4 && (n.lineDiv.style.display = 'none'),
                Tf(e, n.updateLineNumbers, t.dims),
                f > 4 && (n.lineDiv.style.display = ''),
                (n.renderedView = n.view),
                Sf(m),
                j(n.cursorDiv),
                j(n.selectionDiv),
                (n.gutters.style.height = n.sizer.style.minHeight = 0),
                u && ((n.lastWrapHeight = t.wrapperHeight), (n.lastWrapWidth = t.wrapperWidth), Mn(e, 400)),
                (n.updateLineNumbers = null),
                !0
            )
        }
        function rl(e, t) {
            for (var n = t.viewport, r = !0; ; r = !1) {
                if (!r || !e.options.lineWrapping || t.oldDisplayWidth == zr(e)) {
                    if (
                        (n && n.top != null && (n = { top: Math.min(e.doc.height + uo(e.display) - co(e), n.top) }),
                        (t.visible = hi(e.display, e.doc, n)),
                        t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo)
                    )
                        break
                } else r && (t.visible = hi(e.display, e.doc, n))
                if (!Lo(e, t)) break
                pi(e)
                var i = En(e)
                Tn(e), Vr(e, i), zo(e, i), (t.force = !1)
            }
            t.signal(e, 'update', e),
                (e.display.viewFrom != e.display.reportedViewFrom || e.display.viewTo != e.display.reportedViewTo) &&
                    (t.signal(e, 'viewportChange', e, e.display.viewFrom, e.display.viewTo),
                    (e.display.reportedViewFrom = e.display.viewFrom),
                    (e.display.reportedViewTo = e.display.viewTo))
        }
        function Co(e, t) {
            var n = new mi(e, t)
            if (Lo(e, n)) {
                pi(e), rl(e, n)
                var r = En(e)
                Tn(e), Vr(e, r), zo(e, r), n.finish()
            }
        }
        function Tf(e, t, n) {
            var r = e.display,
                i = e.options.lineNumbers,
                a = r.lineDiv,
                l = a.firstChild
            function u(ae) {
                var ue = ae.nextSibling
                return (
                    h && B && e.display.currentWheelTarget == ae
                        ? (ae.style.display = 'none')
                        : ae.parentNode.removeChild(ae),
                    ue
                )
            }
            for (var f = r.view, m = r.viewFrom, A = 0; A < f.length; A++) {
                var P = f[A]
                if (!P.hidden)
                    if (!P.node || P.node.parentNode != a) {
                        var ee = Qc(e, P, m, n)
                        a.insertBefore(ee, l)
                    } else {
                        for (; l != P.node; ) l = u(l)
                        var Q = i && t != null && t <= m && P.lineNumber
                        P.changes && (De(P.changes, 'gutter') > -1 && (Q = !1), Ea(e, P, m, n)),
                            Q && (j(P.lineNumber), P.lineNumber.appendChild(document.createTextNode(R(e.options, m)))),
                            (l = P.node.nextSibling)
                    }
                m += P.size
            }
            for (; l; ) l = u(l)
        }
        function Eo(e) {
            var t = e.gutters.offsetWidth
            ;(e.sizer.style.marginLeft = t + 'px'), pt(e, 'gutterChanged', e)
        }
        function zo(e, t) {
            ;(e.display.sizer.style.minHeight = t.docHeight + 'px'),
                (e.display.heightForcer.style.top = t.docHeight + 'px'),
                (e.display.gutters.style.height = t.docHeight + e.display.barHeight + Jt(e) + 'px')
        }
        function nl(e) {
            var t = e.display,
                n = t.view
            if (!(!t.alignWidgets && (!t.gutters.firstChild || !e.options.fixedGutter))) {
                for (
                    var r = bo(t) - t.scroller.scrollLeft + e.doc.scrollLeft,
                        i = t.gutters.offsetWidth,
                        a = r + 'px',
                        l = 0;
                    l < n.length;
                    l++
                )
                    if (!n[l].hidden) {
                        e.options.fixedGutter &&
                            (n[l].gutter && (n[l].gutter.style.left = a),
                            n[l].gutterBackground && (n[l].gutterBackground.style.left = a))
                        var u = n[l].alignable
                        if (u) for (var f = 0; f < u.length; f++) u[f].style.left = a
                    }
                e.options.fixedGutter && (t.gutters.style.left = r + i + 'px')
            }
        }
        function il(e) {
            if (!e.options.lineNumbers) return !1
            var t = e.doc,
                n = R(e.options, t.first + t.size - 1),
                r = e.display
            if (n.length != r.lineNumChars) {
                var i = r.measure.appendChild(x('div', [x('div', n)], 'CodeMirror-linenumber CodeMirror-gutter-elt')),
                    a = i.firstChild.offsetWidth,
                    l = i.offsetWidth - a
                return (
                    (r.lineGutter.style.width = ''),
                    (r.lineNumInnerWidth = Math.max(a, r.lineGutter.offsetWidth - l) + 1),
                    (r.lineNumWidth = r.lineNumInnerWidth + l),
                    (r.lineNumChars = r.lineNumInnerWidth ? n.length : -1),
                    (r.lineGutter.style.width = r.lineNumWidth + 'px'),
                    Eo(e.display),
                    !0
                )
            }
            return !1
        }
        function Mo(e, t) {
            for (var n = [], r = !1, i = 0; i < e.length; i++) {
                var a = e[i],
                    l = null
                if ((typeof a != 'string' && ((l = a.style), (a = a.className)), a == 'CodeMirror-linenumbers'))
                    if (t) r = !0
                    else continue
                n.push({ className: a, style: l })
            }
            return t && !r && n.push({ className: 'CodeMirror-linenumbers', style: null }), n
        }
        function ol(e) {
            var t = e.gutters,
                n = e.gutterSpecs
            j(t), (e.lineGutter = null)
            for (var r = 0; r < n.length; ++r) {
                var i = n[r],
                    a = i.className,
                    l = i.style,
                    u = t.appendChild(x('div', null, 'CodeMirror-gutter ' + a))
                l && (u.style.cssText = l),
                    a == 'CodeMirror-linenumbers' &&
                        ((e.lineGutter = u), (u.style.width = (e.lineNumWidth || 1) + 'px'))
            }
            ;(t.style.display = n.length ? '' : 'none'), Eo(e)
        }
        function An(e) {
            ol(e.display), Dt(e), nl(e)
        }
        function Lf(e, t, n, r) {
            var i = this
            ;(this.input = n),
                (i.scrollbarFiller = x('div', null, 'CodeMirror-scrollbar-filler')),
                i.scrollbarFiller.setAttribute('cm-not-content', 'true'),
                (i.gutterFiller = x('div', null, 'CodeMirror-gutter-filler')),
                i.gutterFiller.setAttribute('cm-not-content', 'true'),
                (i.lineDiv = K('div', null, 'CodeMirror-code')),
                (i.selectionDiv = x('div', null, null, 'position: relative; z-index: 1')),
                (i.cursorDiv = x('div', null, 'CodeMirror-cursors')),
                (i.measure = x('div', null, 'CodeMirror-measure')),
                (i.lineMeasure = x('div', null, 'CodeMirror-measure')),
                (i.lineSpace = K(
                    'div',
                    [i.measure, i.lineMeasure, i.selectionDiv, i.cursorDiv, i.lineDiv],
                    null,
                    'position: relative; outline: none',
                ))
            var a = K('div', [i.lineSpace], 'CodeMirror-lines')
            ;(i.mover = x('div', [a], null, 'position: relative')),
                (i.sizer = x('div', [i.mover], 'CodeMirror-sizer')),
                (i.sizerWidth = null),
                (i.heightForcer = x('div', null, null, 'position: absolute; height: ' + Ne + 'px; width: 1px;')),
                (i.gutters = x('div', null, 'CodeMirror-gutters')),
                (i.lineGutter = null),
                (i.scroller = x('div', [i.sizer, i.heightForcer, i.gutters], 'CodeMirror-scroll')),
                i.scroller.setAttribute('tabIndex', '-1'),
                (i.wrapper = x('div', [i.scrollbarFiller, i.gutterFiller, i.scroller], 'CodeMirror')),
                k && c >= 105 && (i.wrapper.style.clipPath = 'inset(0px)'),
                i.wrapper.setAttribute('translate', 'no'),
                s && g < 8 && ((i.gutters.style.zIndex = -1), (i.scroller.style.paddingRight = 0)),
                !h && !(v && M) && (i.scroller.draggable = !0),
                e && (e.appendChild ? e.appendChild(i.wrapper) : e(i.wrapper)),
                (i.viewFrom = i.viewTo = t.first),
                (i.reportedViewFrom = i.reportedViewTo = t.first),
                (i.view = []),
                (i.renderedView = null),
                (i.externalMeasured = null),
                (i.viewOffset = 0),
                (i.lastWrapHeight = i.lastWrapWidth = 0),
                (i.updateLineNumbers = null),
                (i.nativeBarWidth = i.barHeight = i.barWidth = 0),
                (i.scrollbarsClipped = !1),
                (i.lineNumWidth = i.lineNumInnerWidth = i.lineNumChars = null),
                (i.alignWidgets = !1),
                (i.cachedCharWidth = i.cachedTextHeight = i.cachedPaddingH = null),
                (i.maxLine = null),
                (i.maxLineLength = 0),
                (i.maxLineChanged = !1),
                (i.wheelDX = i.wheelDY = i.wheelStartX = i.wheelStartY = null),
                (i.shift = !1),
                (i.selForContextMenu = null),
                (i.activeTouch = null),
                (i.gutterSpecs = Mo(r.gutters, r.lineNumbers)),
                ol(i),
                n.init(i)
        }
        var vi = 0,
            ur = null
        s ? (ur = -0.53) : v ? (ur = 15) : k ? (ur = -0.7) : S && (ur = -1 / 3)
        function al(e) {
            var t = e.wheelDeltaX,
                n = e.wheelDeltaY
            return (
                t == null && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail),
                n == null && e.detail && e.axis == e.VERTICAL_AXIS ? (n = e.detail) : n == null && (n = e.wheelDelta),
                { x: t, y: n }
            )
        }
        function Cf(e) {
            var t = al(e)
            return (t.x *= ur), (t.y *= ur), t
        }
        function ll(e, t) {
            k &&
                c == 102 &&
                (e.display.chromeScrollHack == null
                    ? (e.display.sizer.style.pointerEvents = 'none')
                    : clearTimeout(e.display.chromeScrollHack),
                (e.display.chromeScrollHack = setTimeout(function () {
                    ;(e.display.chromeScrollHack = null), (e.display.sizer.style.pointerEvents = '')
                }, 100)))
            var n = al(t),
                r = n.x,
                i = n.y,
                a = ur
            t.deltaMode === 0 && ((r = t.deltaX), (i = t.deltaY), (a = 1))
            var l = e.display,
                u = l.scroller,
                f = u.scrollWidth > u.clientWidth,
                m = u.scrollHeight > u.clientHeight
            if ((r && f) || (i && m)) {
                if (i && B && h) {
                    e: for (var A = t.target, P = l.view; A != u; A = A.parentNode)
                        for (var ee = 0; ee < P.length; ee++)
                            if (P[ee].node == A) {
                                e.display.currentWheelTarget = A
                                break e
                            }
                }
                if (r && !v && !d && a != null) {
                    i && m && Cn(e, Math.max(0, u.scrollTop + i * a)),
                        qr(e, Math.max(0, u.scrollLeft + r * a)),
                        (!i || (i && m)) && kt(t),
                        (l.wheelStartX = null)
                    return
                }
                if (i && a != null) {
                    var Q = i * a,
                        ae = e.doc.scrollTop,
                        ue = ae + l.wrapper.clientHeight
                    Q < 0 ? (ae = Math.max(0, ae + Q - 50)) : (ue = Math.min(e.doc.height, ue + Q + 50)),
                        Co(e, { top: ae, bottom: ue })
                }
                vi < 20 &&
                    t.deltaMode !== 0 &&
                    (l.wheelStartX == null
                        ? ((l.wheelStartX = u.scrollLeft),
                          (l.wheelStartY = u.scrollTop),
                          (l.wheelDX = r),
                          (l.wheelDY = i),
                          setTimeout(function () {
                              if (l.wheelStartX != null) {
                                  var he = u.scrollLeft - l.wheelStartX,
                                      ve = u.scrollTop - l.wheelStartY,
                                      _e = (ve && l.wheelDY && ve / l.wheelDY) || (he && l.wheelDX && he / l.wheelDX)
                                  ;(l.wheelStartX = l.wheelStartY = null),
                                      _e && ((ur = (ur * vi + _e) / (vi + 1)), ++vi)
                              }
                          }, 200))
                        : ((l.wheelDX += r), (l.wheelDY += i)))
            }
        }
        var Ht = function (e, t) {
            ;(this.ranges = e), (this.primIndex = t)
        }
        ;(Ht.prototype.primary = function () {
            return this.ranges[this.primIndex]
        }),
            (Ht.prototype.equals = function (e) {
                if (e == this) return !0
                if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1
                for (var t = 0; t < this.ranges.length; t++) {
                    var n = this.ranges[t],
                        r = e.ranges[t]
                    if (!Oe(n.anchor, r.anchor) || !Oe(n.head, r.head)) return !1
                }
                return !0
            }),
            (Ht.prototype.deepCopy = function () {
                for (var e = [], t = 0; t < this.ranges.length; t++)
                    e[t] = new Ye(Ke(this.ranges[t].anchor), Ke(this.ranges[t].head))
                return new Ht(e, this.primIndex)
            }),
            (Ht.prototype.somethingSelected = function () {
                for (var e = 0; e < this.ranges.length; e++) if (!this.ranges[e].empty()) return !0
                return !1
            }),
            (Ht.prototype.contains = function (e, t) {
                t || (t = e)
                for (var n = 0; n < this.ranges.length; n++) {
                    var r = this.ranges[n]
                    if (ie(t, r.from()) >= 0 && ie(e, r.to()) <= 0) return n
                }
                return -1
            })
        var Ye = function (e, t) {
            ;(this.anchor = e), (this.head = t)
        }
        ;(Ye.prototype.from = function () {
            return ft(this.anchor, this.head)
        }),
            (Ye.prototype.to = function () {
                return Ze(this.anchor, this.head)
            }),
            (Ye.prototype.empty = function () {
                return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
            })
        function Gt(e, t, n) {
            var r = e && e.options.selectionsMayTouch,
                i = t[n]
            t.sort(function (ee, Q) {
                return ie(ee.from(), Q.from())
            }),
                (n = De(t, i))
            for (var a = 1; a < t.length; a++) {
                var l = t[a],
                    u = t[a - 1],
                    f = ie(u.to(), l.from())
                if (r && !l.empty() ? f > 0 : f >= 0) {
                    var m = ft(u.from(), l.from()),
                        A = Ze(u.to(), l.to()),
                        P = u.empty() ? l.from() == l.head : u.from() == u.head
                    a <= n && --n, t.splice(--a, 2, new Ye(P ? A : m, P ? m : A))
                }
            }
            return new Ht(t, n)
        }
        function xr(e, t) {
            return new Ht([new Ye(e, t || e)], 0)
        }
        function _r(e) {
            return e.text
                ? G(e.from.line + e.text.length - 1, O(e.text).length + (e.text.length == 1 ? e.from.ch : 0))
                : e.to
        }
        function sl(e, t) {
            if (ie(e, t.from) < 0) return e
            if (ie(e, t.to) <= 0) return _r(t)
            var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
                r = e.ch
            return e.line == t.to.line && (r += _r(t).ch - t.to.ch), G(n, r)
        }
        function Ao(e, t) {
            for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
                var i = e.sel.ranges[r]
                n.push(new Ye(sl(i.anchor, t), sl(i.head, t)))
            }
            return Gt(e.cm, n, e.sel.primIndex)
        }
        function ul(e, t, n) {
            return e.line == t.line ? G(n.line, e.ch - t.ch + n.ch) : G(n.line + (e.line - t.line), e.ch)
        }
        function Ef(e, t, n) {
            for (var r = [], i = G(e.first, 0), a = i, l = 0; l < t.length; l++) {
                var u = t[l],
                    f = ul(u.from, i, a),
                    m = ul(_r(u), i, a)
                if (((i = u.to), (a = m), n == 'around')) {
                    var A = e.sel.ranges[l],
                        P = ie(A.head, A.anchor) < 0
                    r[l] = new Ye(P ? m : f, P ? f : m)
                } else r[l] = new Ye(f, f)
            }
            return new Ht(r, e.sel.primIndex)
        }
        function Do(e) {
            ;(e.doc.mode = nr(e.options, e.doc.modeOption)), Dn(e)
        }
        function Dn(e) {
            e.doc.iter(function (t) {
                t.stateAfter && (t.stateAfter = null), t.styles && (t.styles = null)
            }),
                (e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first),
                Mn(e, 100),
                e.state.modeGen++,
                e.curOp && Dt(e)
        }
        function cl(e, t) {
            return t.from.ch == 0 && t.to.ch == 0 && O(t.text) == '' && (!e.cm || e.cm.options.wholeLineUpdateBefore)
        }
        function qo(e, t, n, r) {
            function i(_e) {
                return n ? n[_e] : null
            }
            function a(_e, be, Te) {
                Fc(_e, be, Te, r), pt(_e, 'change', _e, t)
            }
            function l(_e, be) {
                for (var Te = [], Ie = _e; Ie < be; ++Ie) Te.push(new $r(m[Ie], i(Ie), r))
                return Te
            }
            var u = t.from,
                f = t.to,
                m = t.text,
                A = ze(e, u.line),
                P = ze(e, f.line),
                ee = O(m),
                Q = i(m.length - 1),
                ae = f.line - u.line
            if (t.full) e.insert(0, l(0, m.length)), e.remove(m.length, e.size - m.length)
            else if (cl(e, t)) {
                var ue = l(0, m.length - 1)
                a(P, P.text, Q), ae && e.remove(u.line, ae), ue.length && e.insert(u.line, ue)
            } else if (A == P)
                if (m.length == 1) a(A, A.text.slice(0, u.ch) + ee + A.text.slice(f.ch), Q)
                else {
                    var he = l(1, m.length - 1)
                    he.push(new $r(ee + A.text.slice(f.ch), Q, r)),
                        a(A, A.text.slice(0, u.ch) + m[0], i(0)),
                        e.insert(u.line + 1, he)
                }
            else if (m.length == 1)
                a(A, A.text.slice(0, u.ch) + m[0] + P.text.slice(f.ch), i(0)), e.remove(u.line + 1, ae)
            else {
                a(A, A.text.slice(0, u.ch) + m[0], i(0)), a(P, ee + P.text.slice(f.ch), Q)
                var ve = l(1, m.length - 1)
                ae > 1 && e.remove(u.line + 1, ae - 1), e.insert(u.line + 1, ve)
            }
            pt(e, 'change', e, t)
        }
        function kr(e, t, n) {
            function r(i, a, l) {
                if (i.linked)
                    for (var u = 0; u < i.linked.length; ++u) {
                        var f = i.linked[u]
                        if (f.doc != a) {
                            var m = l && f.sharedHist
                            ;(n && !m) || (t(f.doc, m), r(f.doc, i, m))
                        }
                    }
            }
            r(e, null, !0)
        }
        function fl(e, t) {
            if (t.cm) throw new Error('This document is already in use.')
            ;(e.doc = t),
                (t.cm = e),
                yo(e),
                Do(e),
                dl(e),
                (e.options.direction = t.direction),
                e.options.lineWrapping || lo(e),
                (e.options.mode = t.modeOption),
                Dt(e)
        }
        function dl(e) {
            ;(e.doc.direction == 'rtl' ? le : V)(e.display.lineDiv, 'CodeMirror-rtl')
        }
        function zf(e) {
            Pt(e, function () {
                dl(e), Dt(e)
            })
        }
        function bi(e) {
            ;(this.done = []),
                (this.undone = []),
                (this.undoDepth = e ? e.undoDepth : 1 / 0),
                (this.lastModTime = this.lastSelTime = 0),
                (this.lastOp = this.lastSelOp = null),
                (this.lastOrigin = this.lastSelOrigin = null),
                (this.generation = this.maxGeneration = e ? e.maxGeneration : 1)
        }
        function Io(e, t) {
            var n = { from: Ke(t.from), to: _r(t), text: or(e, t.from, t.to) }
            return (
                gl(e, n, t.from.line, t.to.line + 1),
                kr(
                    e,
                    function (r) {
                        return gl(r, n, t.from.line, t.to.line + 1)
                    },
                    !0,
                ),
                n
            )
        }
        function pl(e) {
            for (; e.length; ) {
                var t = O(e)
                if (t.ranges) e.pop()
                else break
            }
        }
        function Mf(e, t) {
            if (t) return pl(e.done), O(e.done)
            if (e.done.length && !O(e.done).ranges) return O(e.done)
            if (e.done.length > 1 && !e.done[e.done.length - 2].ranges) return e.done.pop(), O(e.done)
        }
        function hl(e, t, n, r) {
            var i = e.history
            i.undone.length = 0
            var a = +new Date(),
                l,
                u
            if (
                (i.lastOp == r ||
                    (i.lastOrigin == t.origin &&
                        t.origin &&
                        ((t.origin.charAt(0) == '+' &&
                            i.lastModTime > a - (e.cm ? e.cm.options.historyEventDelay : 500)) ||
                            t.origin.charAt(0) == '*'))) &&
                (l = Mf(i, i.lastOp == r))
            )
                (u = O(l.changes)),
                    ie(t.from, t.to) == 0 && ie(t.from, u.to) == 0 ? (u.to = _r(t)) : l.changes.push(Io(e, t))
            else {
                var f = O(i.done)
                for (
                    (!f || !f.ranges) && yi(e.sel, i.done),
                        l = { changes: [Io(e, t)], generation: i.generation },
                        i.done.push(l);
                    i.done.length > i.undoDepth;

                )
                    i.done.shift(), i.done[0].ranges || i.done.shift()
            }
            i.done.push(n),
                (i.generation = ++i.maxGeneration),
                (i.lastModTime = i.lastSelTime = a),
                (i.lastOp = i.lastSelOp = r),
                (i.lastOrigin = i.lastSelOrigin = t.origin),
                u || tt(e, 'historyAdded')
        }
        function Af(e, t, n, r) {
            var i = t.charAt(0)
            return (
                i == '*' ||
                (i == '+' &&
                    n.ranges.length == r.ranges.length &&
                    n.somethingSelected() == r.somethingSelected() &&
                    new Date() - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500))
            )
        }
        function Df(e, t, n, r) {
            var i = e.history,
                a = r && r.origin
            n == i.lastSelOp ||
            (a &&
                i.lastSelOrigin == a &&
                ((i.lastModTime == i.lastSelTime && i.lastOrigin == a) || Af(e, a, O(i.done), t)))
                ? (i.done[i.done.length - 1] = t)
                : yi(t, i.done),
                (i.lastSelTime = +new Date()),
                (i.lastSelOrigin = a),
                (i.lastSelOp = n),
                r && r.clearRedo !== !1 && pl(i.undone)
        }
        function yi(e, t) {
            var n = O(t)
            ;(n && n.ranges && n.equals(e)) || t.push(e)
        }
        function gl(e, t, n, r) {
            var i = t['spans_' + e.id],
                a = 0
            e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function (l) {
                l.markedSpans && ((i || (i = t['spans_' + e.id] = {}))[a] = l.markedSpans), ++a
            })
        }
        function qf(e) {
            if (!e) return null
            for (var t, n = 0; n < e.length; ++n)
                e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n])
            return t ? (t.length ? t : null) : e
        }
        function If(e, t) {
            var n = t['spans_' + e.id]
            if (!n) return null
            for (var r = [], i = 0; i < t.text.length; ++i) r.push(qf(n[i]))
            return r
        }
        function ml(e, t) {
            var n = If(e, t),
                r = no(e, t)
            if (!n) return r
            if (!r) return n
            for (var i = 0; i < n.length; ++i) {
                var a = n[i],
                    l = r[i]
                if (a && l)
                    e: for (var u = 0; u < l.length; ++u) {
                        for (var f = l[u], m = 0; m < a.length; ++m) if (a[m].marker == f.marker) continue e
                        a.push(f)
                    }
                else l && (n[i] = l)
            }
            return n
        }
        function Jr(e, t, n) {
            for (var r = [], i = 0; i < e.length; ++i) {
                var a = e[i]
                if (a.ranges) {
                    r.push(n ? Ht.prototype.deepCopy.call(a) : a)
                    continue
                }
                var l = a.changes,
                    u = []
                r.push({ changes: u })
                for (var f = 0; f < l.length; ++f) {
                    var m = l[f],
                        A = void 0
                    if ((u.push({ from: m.from, to: m.to, text: m.text }), t))
                        for (var P in m)
                            (A = P.match(/^spans_(\d+)$/)) &&
                                De(t, Number(A[1])) > -1 &&
                                ((O(u)[P] = m[P]), delete m[P])
                }
            }
            return r
        }
        function Fo(e, t, n, r) {
            if (r) {
                var i = e.anchor
                if (n) {
                    var a = ie(t, i) < 0
                    a != ie(n, i) < 0 ? ((i = t), (t = n)) : a != ie(t, n) < 0 && (t = n)
                }
                return new Ye(i, t)
            } else return new Ye(n || t, t)
        }
        function xi(e, t, n, r, i) {
            i == null && (i = e.cm && (e.cm.display.shift || e.extend)),
                wt(e, new Ht([Fo(e.sel.primary(), t, n, i)], 0), r)
        }
        function vl(e, t, n) {
            for (var r = [], i = e.cm && (e.cm.display.shift || e.extend), a = 0; a < e.sel.ranges.length; a++)
                r[a] = Fo(e.sel.ranges[a], t[a], null, i)
            var l = Gt(e.cm, r, e.sel.primIndex)
            wt(e, l, n)
        }
        function No(e, t, n, r) {
            var i = e.sel.ranges.slice(0)
            ;(i[t] = n), wt(e, Gt(e.cm, i, e.sel.primIndex), r)
        }
        function bl(e, t, n, r) {
            wt(e, xr(t, n), r)
        }
        function Ff(e, t, n) {
            var r = {
                ranges: t.ranges,
                update: function (i) {
                    this.ranges = []
                    for (var a = 0; a < i.length; a++) this.ranges[a] = new Ye(Pe(e, i[a].anchor), Pe(e, i[a].head))
                },
                origin: n && n.origin,
            }
            return (
                tt(e, 'beforeSelectionChange', e, r),
                e.cm && tt(e.cm, 'beforeSelectionChange', e.cm, r),
                r.ranges != t.ranges ? Gt(e.cm, r.ranges, r.ranges.length - 1) : t
            )
        }
        function yl(e, t, n) {
            var r = e.history.done,
                i = O(r)
            i && i.ranges ? ((r[r.length - 1] = t), _i(e, t, n)) : wt(e, t, n)
        }
        function wt(e, t, n) {
            _i(e, t, n), Df(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n)
        }
        function _i(e, t, n) {
            ;(Tt(e, 'beforeSelectionChange') || (e.cm && Tt(e.cm, 'beforeSelectionChange'))) && (t = Ff(e, t, n))
            var r = (n && n.bias) || (ie(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1)
            xl(e, kl(e, t, r, !0)),
                !(n && n.scroll === !1) && e.cm && e.cm.getOption('readOnly') != 'nocursor' && Qr(e.cm)
        }
        function xl(e, t) {
            t.equals(e.sel) ||
                ((e.sel = t),
                e.cm && ((e.cm.curOp.updateInput = 1), (e.cm.curOp.selectionChanged = !0), Yn(e.cm)),
                pt(e, 'cursorActivity', e))
        }
        function _l(e) {
            xl(e, kl(e, e.sel, null, !1))
        }
        function kl(e, t, n, r) {
            for (var i, a = 0; a < t.ranges.length; a++) {
                var l = t.ranges[a],
                    u = t.ranges.length == e.sel.ranges.length && e.sel.ranges[a],
                    f = ki(e, l.anchor, u && u.anchor, n, r),
                    m = l.head == l.anchor ? f : ki(e, l.head, u && u.head, n, r)
                ;(i || f != l.anchor || m != l.head) && (i || (i = t.ranges.slice(0, a)), (i[a] = new Ye(f, m)))
            }
            return i ? Gt(e.cm, i, t.primIndex) : t
        }
        function en(e, t, n, r, i) {
            var a = ze(e, t.line)
            if (a.markedSpans)
                for (var l = 0; l < a.markedSpans.length; ++l) {
                    var u = a.markedSpans[l],
                        f = u.marker,
                        m = 'selectLeft' in f ? !f.selectLeft : f.inclusiveLeft,
                        A = 'selectRight' in f ? !f.selectRight : f.inclusiveRight
                    if (
                        (u.from == null || (m ? u.from <= t.ch : u.from < t.ch)) &&
                        (u.to == null || (A ? u.to >= t.ch : u.to > t.ch))
                    ) {
                        if (i && (tt(f, 'beforeCursorEnter'), f.explicitlyCleared))
                            if (a.markedSpans) {
                                --l
                                continue
                            } else break
                        if (!f.atomic) continue
                        if (n) {
                            var P = f.find(r < 0 ? 1 : -1),
                                ee = void 0
                            if (
                                ((r < 0 ? A : m) && (P = wl(e, P, -r, P && P.line == t.line ? a : null)),
                                P && P.line == t.line && (ee = ie(P, n)) && (r < 0 ? ee < 0 : ee > 0))
                            )
                                return en(e, P, t, r, i)
                        }
                        var Q = f.find(r < 0 ? -1 : 1)
                        return (
                            (r < 0 ? m : A) && (Q = wl(e, Q, r, Q.line == t.line ? a : null)),
                            Q ? en(e, Q, t, r, i) : null
                        )
                    }
                }
            return t
        }
        function ki(e, t, n, r, i) {
            var a = r || 1,
                l = en(e, t, n, a, i) || (!i && en(e, t, n, a, !0)) || en(e, t, n, -a, i) || (!i && en(e, t, n, -a, !0))
            return l || ((e.cantEdit = !0), G(e.first, 0))
        }
        function wl(e, t, n, r) {
            return n < 0 && t.ch == 0
                ? t.line > e.first
                    ? Pe(e, G(t.line - 1))
                    : null
                : n > 0 && t.ch == (r || ze(e, t.line)).text.length
                  ? t.line < e.first + e.size - 1
                      ? G(t.line + 1, 0)
                      : null
                  : new G(t.line, t.ch + n)
        }
        function Sl(e) {
            e.setSelection(G(e.firstLine(), 0), G(e.lastLine()), Fe)
        }
        function Tl(e, t, n) {
            var r = {
                canceled: !1,
                from: t.from,
                to: t.to,
                text: t.text,
                origin: t.origin,
                cancel: function () {
                    return (r.canceled = !0)
                },
            }
            return (
                n &&
                    (r.update = function (i, a, l, u) {
                        i && (r.from = Pe(e, i)),
                            a && (r.to = Pe(e, a)),
                            l && (r.text = l),
                            u !== void 0 && (r.origin = u)
                    }),
                tt(e, 'beforeChange', e, r),
                e.cm && tt(e.cm, 'beforeChange', e.cm, r),
                r.canceled
                    ? (e.cm && (e.cm.curOp.updateInput = 2), null)
                    : { from: r.from, to: r.to, text: r.text, origin: r.origin }
            )
        }
        function tn(e, t, n) {
            if (e.cm) {
                if (!e.cm.curOp) return ht(e.cm, tn)(e, t, n)
                if (e.cm.state.suppressEdits) return
            }
            if (!((Tt(e, 'beforeChange') || (e.cm && Tt(e.cm, 'beforeChange'))) && ((t = Tl(e, t, !0)), !t))) {
                var r = ma && !n && Ac(e, t.from, t.to)
                if (r)
                    for (var i = r.length - 1; i >= 0; --i)
                        Ll(e, { from: r[i].from, to: r[i].to, text: i ? [''] : t.text, origin: t.origin })
                else Ll(e, t)
            }
        }
        function Ll(e, t) {
            if (!(t.text.length == 1 && t.text[0] == '' && ie(t.from, t.to) == 0)) {
                var n = Ao(e, t)
                hl(e, t, n, e.cm ? e.cm.curOp.id : NaN), qn(e, t, n, no(e, t))
                var r = []
                kr(e, function (i, a) {
                    !a && De(r, i.history) == -1 && (Ml(i.history, t), r.push(i.history)), qn(i, t, null, no(i, t))
                })
            }
        }
        function wi(e, t, n) {
            var r = e.cm && e.cm.state.suppressEdits
            if (!(r && !n)) {
                for (
                    var i = e.history,
                        a,
                        l = e.sel,
                        u = t == 'undo' ? i.done : i.undone,
                        f = t == 'undo' ? i.undone : i.done,
                        m = 0;
                    m < u.length && ((a = u[m]), !(n ? a.ranges && !a.equals(e.sel) : !a.ranges));
                    m++
                );
                if (m != u.length) {
                    for (i.lastOrigin = i.lastSelOrigin = null; ; )
                        if (((a = u.pop()), a.ranges)) {
                            if ((yi(a, f), n && !a.equals(e.sel))) {
                                wt(e, a, { clearRedo: !1 })
                                return
                            }
                            l = a
                        } else if (r) {
                            u.push(a)
                            return
                        } else break
                    var A = []
                    yi(l, f),
                        f.push({ changes: A, generation: i.generation }),
                        (i.generation = a.generation || ++i.maxGeneration)
                    for (
                        var P = Tt(e, 'beforeChange') || (e.cm && Tt(e.cm, 'beforeChange')),
                            ee = function (ue) {
                                var he = a.changes[ue]
                                if (((he.origin = t), P && !Tl(e, he, !1))) return (u.length = 0), {}
                                A.push(Io(e, he))
                                var ve = ue ? Ao(e, he) : O(u)
                                qn(e, he, ve, ml(e, he)),
                                    !ue && e.cm && e.cm.scrollIntoView({ from: he.from, to: _r(he) })
                                var _e = []
                                kr(e, function (be, Te) {
                                    !Te && De(_e, be.history) == -1 && (Ml(be.history, he), _e.push(be.history)),
                                        qn(be, he, null, ml(be, he))
                                })
                            },
                            Q = a.changes.length - 1;
                        Q >= 0;
                        --Q
                    ) {
                        var ae = ee(Q)
                        if (ae) return ae.v
                    }
                }
            }
        }
        function Cl(e, t) {
            if (
                t != 0 &&
                ((e.first += t),
                (e.sel = new Ht(
                    Z(e.sel.ranges, function (i) {
                        return new Ye(G(i.anchor.line + t, i.anchor.ch), G(i.head.line + t, i.head.ch))
                    }),
                    e.sel.primIndex,
                )),
                e.cm)
            ) {
                Dt(e.cm, e.first, e.first - t, t)
                for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++) br(e.cm, r, 'gutter')
            }
        }
        function qn(e, t, n, r) {
            if (e.cm && !e.cm.curOp) return ht(e.cm, qn)(e, t, n, r)
            if (t.to.line < e.first) {
                Cl(e, t.text.length - 1 - (t.to.line - t.from.line))
                return
            }
            if (!(t.from.line > e.lastLine())) {
                if (t.from.line < e.first) {
                    var i = t.text.length - 1 - (e.first - t.from.line)
                    Cl(e, i),
                        (t = {
                            from: G(e.first, 0),
                            to: G(t.to.line + i, t.to.ch),
                            text: [O(t.text)],
                            origin: t.origin,
                        })
                }
                var a = e.lastLine()
                t.to.line > a &&
                    (t = { from: t.from, to: G(a, ze(e, a).text.length), text: [t.text[0]], origin: t.origin }),
                    (t.removed = or(e, t.from, t.to)),
                    n || (n = Ao(e, t)),
                    e.cm ? Nf(e.cm, t, r) : qo(e, t, r),
                    _i(e, n, Fe),
                    e.cantEdit && ki(e, G(e.firstLine(), 0)) && (e.cantEdit = !1)
            }
        }
        function Nf(e, t, n) {
            var r = e.doc,
                i = e.display,
                a = t.from,
                l = t.to,
                u = !1,
                f = a.line
            e.options.lineWrapping ||
                ((f = Xe($t(ze(r, a.line)))),
                r.iter(f, l.line + 1, function (Q) {
                    if (Q == i.maxLine) return (u = !0), !0
                })),
                r.sel.contains(t.from, t.to) > -1 && Yn(e),
                qo(r, t, n, Ka(e)),
                e.options.lineWrapping ||
                    (r.iter(f, a.line + t.text.length, function (Q) {
                        var ae = ai(Q)
                        ae > i.maxLineLength &&
                            ((i.maxLine = Q), (i.maxLineLength = ae), (i.maxLineChanged = !0), (u = !1))
                    }),
                    u && (e.curOp.updateMaxLine = !0)),
                Sc(r, a.line),
                Mn(e, 400)
            var m = t.text.length - (l.line - a.line) - 1
            t.full
                ? Dt(e)
                : a.line == l.line && t.text.length == 1 && !cl(e.doc, t)
                  ? br(e, a.line, 'text')
                  : Dt(e, a.line, l.line + 1, m)
            var A = Tt(e, 'changes'),
                P = Tt(e, 'change')
            if (P || A) {
                var ee = { from: a, to: l, text: t.text, removed: t.removed, origin: t.origin }
                P && pt(e, 'change', e, ee), A && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(ee)
            }
            e.display.selForContextMenu = null
        }
        function rn(e, t, n, r, i) {
            var a
            r || (r = n),
                ie(r, n) < 0 && ((a = [r, n]), (n = a[0]), (r = a[1])),
                typeof t == 'string' && (t = e.splitLines(t)),
                tn(e, { from: n, to: r, text: t, origin: i })
        }
        function El(e, t, n, r) {
            n < e.line ? (e.line += r) : t < e.line && ((e.line = t), (e.ch = 0))
        }
        function zl(e, t, n, r) {
            for (var i = 0; i < e.length; ++i) {
                var a = e[i],
                    l = !0
                if (a.ranges) {
                    a.copied || ((a = e[i] = a.deepCopy()), (a.copied = !0))
                    for (var u = 0; u < a.ranges.length; u++)
                        El(a.ranges[u].anchor, t, n, r), El(a.ranges[u].head, t, n, r)
                    continue
                }
                for (var f = 0; f < a.changes.length; ++f) {
                    var m = a.changes[f]
                    if (n < m.from.line) (m.from = G(m.from.line + r, m.from.ch)), (m.to = G(m.to.line + r, m.to.ch))
                    else if (t <= m.to.line) {
                        l = !1
                        break
                    }
                }
                l || (e.splice(0, i + 1), (i = 0))
            }
        }
        function Ml(e, t) {
            var n = t.from.line,
                r = t.to.line,
                i = t.text.length - (r - n) - 1
            zl(e.done, n, r, i), zl(e.undone, n, r, i)
        }
        function In(e, t, n, r) {
            var i = t,
                a = t
            return (
                typeof t == 'number' ? (a = ze(e, Rt(e, t))) : (i = Xe(t)),
                i == null ? null : (r(a, i) && e.cm && br(e.cm, i, n), a)
            )
        }
        function Fn(e) {
            ;(this.lines = e), (this.parent = null)
            for (var t = 0, n = 0; n < e.length; ++n) (e[n].parent = this), (t += e[n].height)
            this.height = t
        }
        Fn.prototype = {
            chunkSize: function () {
                return this.lines.length
            },
            removeInner: function (e, t) {
                for (var n = e, r = e + t; n < r; ++n) {
                    var i = this.lines[n]
                    ;(this.height -= i.height), Nc(i), pt(i, 'delete')
                }
                this.lines.splice(e, t)
            },
            collapse: function (e) {
                e.push.apply(e, this.lines)
            },
            insertInner: function (e, t, n) {
                ;(this.height += n), (this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e)))
                for (var r = 0; r < t.length; ++r) t[r].parent = this
            },
            iterN: function (e, t, n) {
                for (var r = e + t; e < r; ++e) if (n(this.lines[e])) return !0
            },
        }
        function Nn(e) {
            this.children = e
            for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
                var i = e[r]
                ;(t += i.chunkSize()), (n += i.height), (i.parent = this)
            }
            ;(this.size = t), (this.height = n), (this.parent = null)
        }
        Nn.prototype = {
            chunkSize: function () {
                return this.size
            },
            removeInner: function (e, t) {
                this.size -= t
                for (var n = 0; n < this.children.length; ++n) {
                    var r = this.children[n],
                        i = r.chunkSize()
                    if (e < i) {
                        var a = Math.min(t, i - e),
                            l = r.height
                        if (
                            (r.removeInner(e, a),
                            (this.height -= l - r.height),
                            i == a && (this.children.splice(n--, 1), (r.parent = null)),
                            (t -= a) == 0)
                        )
                            break
                        e = 0
                    } else e -= i
                }
                if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof Fn))) {
                    var u = []
                    this.collapse(u), (this.children = [new Fn(u)]), (this.children[0].parent = this)
                }
            },
            collapse: function (e) {
                for (var t = 0; t < this.children.length; ++t) this.children[t].collapse(e)
            },
            insertInner: function (e, t, n) {
                ;(this.size += t.length), (this.height += n)
                for (var r = 0; r < this.children.length; ++r) {
                    var i = this.children[r],
                        a = i.chunkSize()
                    if (e <= a) {
                        if ((i.insertInner(e, t, n), i.lines && i.lines.length > 50)) {
                            for (var l = (i.lines.length % 25) + 25, u = l; u < i.lines.length; ) {
                                var f = new Fn(i.lines.slice(u, (u += 25)))
                                ;(i.height -= f.height), this.children.splice(++r, 0, f), (f.parent = this)
                            }
                            ;(i.lines = i.lines.slice(0, l)), this.maybeSpill()
                        }
                        break
                    }
                    e -= a
                }
            },
            maybeSpill: function () {
                if (!(this.children.length <= 10)) {
                    var e = this
                    do {
                        var t = e.children.splice(e.children.length - 5, 5),
                            n = new Nn(t)
                        if (e.parent) {
                            ;(e.size -= n.size), (e.height -= n.height)
                            var i = De(e.parent.children, e)
                            e.parent.children.splice(i + 1, 0, n)
                        } else {
                            var r = new Nn(e.children)
                            ;(r.parent = e), (e.children = [r, n]), (e = r)
                        }
                        n.parent = e.parent
                    } while (e.children.length > 10)
                    e.parent.maybeSpill()
                }
            },
            iterN: function (e, t, n) {
                for (var r = 0; r < this.children.length; ++r) {
                    var i = this.children[r],
                        a = i.chunkSize()
                    if (e < a) {
                        var l = Math.min(t, a - e)
                        if (i.iterN(e, l, n)) return !0
                        if ((t -= l) == 0) break
                        e = 0
                    } else e -= a
                }
            },
        }
        var On = function (e, t, n) {
            if (n) for (var r in n) n.hasOwnProperty(r) && (this[r] = n[r])
            ;(this.doc = e), (this.node = t)
        }
        ;(On.prototype.clear = function () {
            var e = this.doc.cm,
                t = this.line.widgets,
                n = this.line,
                r = Xe(n)
            if (!(r == null || !t)) {
                for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1)
                t.length || (n.widgets = null)
                var a = wn(this)
                Wt(n, Math.max(0, n.height - a)),
                    e &&
                        (Pt(e, function () {
                            Al(e, n, -a), br(e, r, 'widget')
                        }),
                        pt(e, 'lineWidgetCleared', e, this, r))
            }
        }),
            (On.prototype.changed = function () {
                var e = this,
                    t = this.height,
                    n = this.doc.cm,
                    r = this.line
                this.height = null
                var i = wn(this) - t
                i &&
                    (vr(this.doc, r) || Wt(r, r.height + i),
                    n &&
                        Pt(n, function () {
                            ;(n.curOp.forceUpdate = !0), Al(n, r, i), pt(n, 'lineWidgetChanged', n, e, Xe(r))
                        }))
            }),
            Lt(On)
        function Al(e, t, n) {
            lr(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) && To(e, n)
        }
        function Of(e, t, n, r) {
            var i = new On(e, n, r),
                a = e.cm
            return (
                a && i.noHScroll && (a.display.alignWidgets = !0),
                In(e, t, 'widget', function (l) {
                    var u = l.widgets || (l.widgets = [])
                    if (
                        (i.insertAt == null ? u.push(i) : u.splice(Math.min(u.length, Math.max(0, i.insertAt)), 0, i),
                        (i.line = l),
                        a && !vr(e, l))
                    ) {
                        var f = lr(l) < e.scrollTop
                        Wt(l, l.height + wn(i)), f && To(a, i.height), (a.curOp.forceUpdate = !0)
                    }
                    return !0
                }),
                a && pt(a, 'lineWidgetAdded', a, i, typeof t == 'number' ? t : Xe(t)),
                i
            )
        }
        var Dl = 0,
            wr = function (e, t) {
                ;(this.lines = []), (this.type = t), (this.doc = e), (this.id = ++Dl)
            }
        ;(wr.prototype.clear = function () {
            if (!this.explicitlyCleared) {
                var e = this.doc.cm,
                    t = e && !e.curOp
                if ((t && Fr(e), Tt(this, 'clear'))) {
                    var n = this.find()
                    n && pt(this, 'clear', n.from, n.to)
                }
                for (var r = null, i = null, a = 0; a < this.lines.length; ++a) {
                    var l = this.lines[a],
                        u = xn(l.markedSpans, this)
                    e && !this.collapsed
                        ? br(e, Xe(l), 'text')
                        : e && (u.to != null && (i = Xe(l)), u.from != null && (r = Xe(l))),
                        (l.markedSpans = Cc(l.markedSpans, u)),
                        u.from == null && this.collapsed && !vr(this.doc, l) && e && Wt(l, Zr(e.display))
                }
                if (e && this.collapsed && !e.options.lineWrapping)
                    for (var f = 0; f < this.lines.length; ++f) {
                        var m = $t(this.lines[f]),
                            A = ai(m)
                        A > e.display.maxLineLength &&
                            ((e.display.maxLine = m), (e.display.maxLineLength = A), (e.display.maxLineChanged = !0))
                    }
                r != null && e && this.collapsed && Dt(e, r, i + 1),
                    (this.lines.length = 0),
                    (this.explicitlyCleared = !0),
                    this.atomic && this.doc.cantEdit && ((this.doc.cantEdit = !1), e && _l(e.doc)),
                    e && pt(e, 'markerCleared', e, this, r, i),
                    t && Nr(e),
                    this.parent && this.parent.clear()
            }
        }),
            (wr.prototype.find = function (e, t) {
                e == null && this.type == 'bookmark' && (e = 1)
                for (var n, r, i = 0; i < this.lines.length; ++i) {
                    var a = this.lines[i],
                        l = xn(a.markedSpans, this)
                    if (l.from != null && ((n = G(t ? a : Xe(a), l.from)), e == -1)) return n
                    if (l.to != null && ((r = G(t ? a : Xe(a), l.to)), e == 1)) return r
                }
                return n && { from: n, to: r }
            }),
            (wr.prototype.changed = function () {
                var e = this,
                    t = this.find(-1, !0),
                    n = this,
                    r = this.doc.cm
                !t ||
                    !r ||
                    Pt(r, function () {
                        var i = t.line,
                            a = Xe(t.line),
                            l = fo(r, a)
                        if (
                            (l && (Pa(l), (r.curOp.selectionChanged = r.curOp.forceUpdate = !0)),
                            (r.curOp.updateMaxLine = !0),
                            !vr(n.doc, i) && n.height != null)
                        ) {
                            var u = n.height
                            n.height = null
                            var f = wn(n) - u
                            f && Wt(i, i.height + f)
                        }
                        pt(r, 'markerChanged', r, e)
                    })
            }),
            (wr.prototype.attachLine = function (e) {
                if (!this.lines.length && this.doc.cm) {
                    var t = this.doc.cm.curOp
                    ;(!t.maybeHiddenMarkers || De(t.maybeHiddenMarkers, this) == -1) &&
                        (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this)
                }
                this.lines.push(e)
            }),
            (wr.prototype.detachLine = function (e) {
                if ((this.lines.splice(De(this.lines, e), 1), !this.lines.length && this.doc.cm)) {
                    var t = this.doc.cm.curOp
                    ;(t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
                }
            }),
            Lt(wr)
        function nn(e, t, n, r, i) {
            if (r && r.shared) return Pf(e, t, n, r, i)
            if (e.cm && !e.cm.curOp) return ht(e.cm, nn)(e, t, n, r, i)
            var a = new wr(e, i),
                l = ie(t, n)
            if ((r && fe(r, a, !1), l > 0 || (l == 0 && a.clearWhenEmpty !== !1))) return a
            if (
                (a.replacedWith &&
                    ((a.collapsed = !0),
                    (a.widgetNode = K('span', [a.replacedWith], 'CodeMirror-widget')),
                    r.handleMouseEvents || a.widgetNode.setAttribute('cm-ignore-events', 'true'),
                    r.insertLeft && (a.widgetNode.insertLeft = !0)),
                a.collapsed)
            ) {
                if (ka(e, t.line, t, n, a) || (t.line != n.line && ka(e, n.line, t, n, a)))
                    throw new Error('Inserting collapsed marker partially overlapping an existing one')
                Lc()
            }
            a.addToHistory && hl(e, { from: t, to: n, origin: 'markText' }, e.sel, NaN)
            var u = t.line,
                f = e.cm,
                m
            if (
                (e.iter(u, n.line + 1, function (P) {
                    f && a.collapsed && !f.options.lineWrapping && $t(P) == f.display.maxLine && (m = !0),
                        a.collapsed && u != t.line && Wt(P, 0),
                        Ec(P, new ri(a, u == t.line ? t.ch : null, u == n.line ? n.ch : null), e.cm && e.cm.curOp),
                        ++u
                }),
                a.collapsed &&
                    e.iter(t.line, n.line + 1, function (P) {
                        vr(e, P) && Wt(P, 0)
                    }),
                a.clearOnEnter &&
                    ge(a, 'beforeCursorEnter', function () {
                        return a.clear()
                    }),
                a.readOnly && (Tc(), (e.history.done.length || e.history.undone.length) && e.clearHistory()),
                a.collapsed && ((a.id = ++Dl), (a.atomic = !0)),
                f)
            ) {
                if ((m && (f.curOp.updateMaxLine = !0), a.collapsed)) Dt(f, t.line, n.line + 1)
                else if (a.className || a.startStyle || a.endStyle || a.css || a.attributes || a.title)
                    for (var A = t.line; A <= n.line; A++) br(f, A, 'text')
                a.atomic && _l(f.doc), pt(f, 'markerAdded', f, a)
            }
            return a
        }
        var Pn = function (e, t) {
            ;(this.markers = e), (this.primary = t)
            for (var n = 0; n < e.length; ++n) e[n].parent = this
        }
        ;(Pn.prototype.clear = function () {
            if (!this.explicitlyCleared) {
                this.explicitlyCleared = !0
                for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear()
                pt(this, 'clear')
            }
        }),
            (Pn.prototype.find = function (e, t) {
                return this.primary.find(e, t)
            }),
            Lt(Pn)
        function Pf(e, t, n, r, i) {
            ;(r = fe(r)), (r.shared = !1)
            var a = [nn(e, t, n, r, i)],
                l = a[0],
                u = r.widgetNode
            return (
                kr(e, function (f) {
                    u && (r.widgetNode = u.cloneNode(!0)), a.push(nn(f, Pe(f, t), Pe(f, n), r, i))
                    for (var m = 0; m < f.linked.length; ++m) if (f.linked[m].isParent) return
                    l = O(a)
                }),
                new Pn(a, l)
            )
        }
        function ql(e) {
            return e.findMarks(G(e.first, 0), e.clipPos(G(e.lastLine())), function (t) {
                return t.parent
            })
        }
        function jf(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n],
                    i = r.find(),
                    a = e.clipPos(i.from),
                    l = e.clipPos(i.to)
                if (ie(a, l)) {
                    var u = nn(e, a, l, r.primary, r.primary.type)
                    r.markers.push(u), (u.parent = r)
                }
            }
        }
        function Rf(e) {
            for (
                var t = function (r) {
                        var i = e[r],
                            a = [i.primary.doc]
                        kr(i.primary.doc, function (f) {
                            return a.push(f)
                        })
                        for (var l = 0; l < i.markers.length; l++) {
                            var u = i.markers[l]
                            De(a, u.doc) == -1 && ((u.parent = null), i.markers.splice(l--, 1))
                        }
                    },
                    n = 0;
                n < e.length;
                n++
            )
                t(n)
        }
        var Hf = 0,
            qt = function (e, t, n, r, i) {
                if (!(this instanceof qt)) return new qt(e, t, n, r, i)
                n == null && (n = 0),
                    Nn.call(this, [new Fn([new $r('', null)])]),
                    (this.first = n),
                    (this.scrollTop = this.scrollLeft = 0),
                    (this.cantEdit = !1),
                    (this.cleanGeneration = 1),
                    (this.modeFrontier = this.highlightFrontier = n)
                var a = G(n, 0)
                ;(this.sel = xr(a)),
                    (this.history = new bi(null)),
                    (this.id = ++Hf),
                    (this.modeOption = t),
                    (this.lineSep = r),
                    (this.direction = i == 'rtl' ? 'rtl' : 'ltr'),
                    (this.extend = !1),
                    typeof e == 'string' && (e = this.splitLines(e)),
                    qo(this, { from: a, to: a, text: e }),
                    wt(this, xr(a), Fe)
            }
        ;(qt.prototype = te(Nn.prototype, {
            constructor: qt,
            iter: function (e, t, n) {
                n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e)
            },
            insert: function (e, t) {
                for (var n = 0, r = 0; r < t.length; ++r) n += t[r].height
                this.insertInner(e - this.first, t, n)
            },
            remove: function (e, t) {
                this.removeInner(e - this.first, t)
            },
            getValue: function (e) {
                var t = Ur(this, this.first, this.first + this.size)
                return e === !1 ? t : t.join(e || this.lineSeparator())
            },
            setValue: gt(function (e) {
                var t = G(this.first, 0),
                    n = this.first + this.size - 1
                tn(
                    this,
                    {
                        from: t,
                        to: G(n, ze(this, n).text.length),
                        text: this.splitLines(e),
                        origin: 'setValue',
                        full: !0,
                    },
                    !0,
                ),
                    this.cm && Ln(this.cm, 0, 0),
                    wt(this, xr(t), Fe)
            }),
            replaceRange: function (e, t, n, r) {
                ;(t = Pe(this, t)), (n = n ? Pe(this, n) : t), rn(this, e, t, n, r)
            },
            getRange: function (e, t, n) {
                var r = or(this, Pe(this, e), Pe(this, t))
                return n === !1 ? r : n === '' ? r.join('') : r.join(n || this.lineSeparator())
            },
            getLine: function (e) {
                var t = this.getLineHandle(e)
                return t && t.text
            },
            getLineHandle: function (e) {
                if (L(this, e)) return ze(this, e)
            },
            getLineNumber: function (e) {
                return Xe(e)
            },
            getLineHandleVisualStart: function (e) {
                return typeof e == 'number' && (e = ze(this, e)), $t(e)
            },
            lineCount: function () {
                return this.size
            },
            firstLine: function () {
                return this.first
            },
            lastLine: function () {
                return this.first + this.size - 1
            },
            clipPos: function (e) {
                return Pe(this, e)
            },
            getCursor: function (e) {
                var t = this.sel.primary(),
                    n
                return (
                    e == null || e == 'head'
                        ? (n = t.head)
                        : e == 'anchor'
                          ? (n = t.anchor)
                          : e == 'end' || e == 'to' || e === !1
                            ? (n = t.to())
                            : (n = t.from()),
                    n
                )
            },
            listSelections: function () {
                return this.sel.ranges
            },
            somethingSelected: function () {
                return this.sel.somethingSelected()
            },
            setCursor: gt(function (e, t, n) {
                bl(this, Pe(this, typeof e == 'number' ? G(e, t || 0) : e), null, n)
            }),
            setSelection: gt(function (e, t, n) {
                bl(this, Pe(this, e), Pe(this, t || e), n)
            }),
            extendSelection: gt(function (e, t, n) {
                xi(this, Pe(this, e), t && Pe(this, t), n)
            }),
            extendSelections: gt(function (e, t) {
                vl(this, sa(this, e), t)
            }),
            extendSelectionsBy: gt(function (e, t) {
                var n = Z(this.sel.ranges, e)
                vl(this, sa(this, n), t)
            }),
            setSelections: gt(function (e, t, n) {
                if (e.length) {
                    for (var r = [], i = 0; i < e.length; i++)
                        r[i] = new Ye(Pe(this, e[i].anchor), Pe(this, e[i].head || e[i].anchor))
                    t == null && (t = Math.min(e.length - 1, this.sel.primIndex)), wt(this, Gt(this.cm, r, t), n)
                }
            }),
            addSelection: gt(function (e, t, n) {
                var r = this.sel.ranges.slice(0)
                r.push(new Ye(Pe(this, e), Pe(this, t || e))), wt(this, Gt(this.cm, r, r.length - 1), n)
            }),
            getSelection: function (e) {
                for (var t = this.sel.ranges, n, r = 0; r < t.length; r++) {
                    var i = or(this, t[r].from(), t[r].to())
                    n = n ? n.concat(i) : i
                }
                return e === !1 ? n : n.join(e || this.lineSeparator())
            },
            getSelections: function (e) {
                for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
                    var i = or(this, n[r].from(), n[r].to())
                    e !== !1 && (i = i.join(e || this.lineSeparator())), (t[r] = i)
                }
                return t
            },
            replaceSelection: function (e, t, n) {
                for (var r = [], i = 0; i < this.sel.ranges.length; i++) r[i] = e
                this.replaceSelections(r, t, n || '+input')
            },
            replaceSelections: gt(function (e, t, n) {
                for (var r = [], i = this.sel, a = 0; a < i.ranges.length; a++) {
                    var l = i.ranges[a]
                    r[a] = { from: l.from(), to: l.to(), text: this.splitLines(e[a]), origin: n }
                }
                for (var u = t && t != 'end' && Ef(this, r, t), f = r.length - 1; f >= 0; f--) tn(this, r[f])
                u ? yl(this, u) : this.cm && Qr(this.cm)
            }),
            undo: gt(function () {
                wi(this, 'undo')
            }),
            redo: gt(function () {
                wi(this, 'redo')
            }),
            undoSelection: gt(function () {
                wi(this, 'undo', !0)
            }),
            redoSelection: gt(function () {
                wi(this, 'redo', !0)
            }),
            setExtending: function (e) {
                this.extend = e
            },
            getExtending: function () {
                return this.extend
            },
            historySize: function () {
                for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++) e.done[r].ranges || ++t
                for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++n
                return { undo: t, redo: n }
            },
            clearHistory: function () {
                var e = this
                ;(this.history = new bi(this.history)),
                    kr(
                        this,
                        function (t) {
                            return (t.history = e.history)
                        },
                        !0,
                    )
            },
            markClean: function () {
                this.cleanGeneration = this.changeGeneration(!0)
            },
            changeGeneration: function (e) {
                return (
                    e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null),
                    this.history.generation
                )
            },
            isClean: function (e) {
                return this.history.generation == (e || this.cleanGeneration)
            },
            getHistory: function () {
                return { done: Jr(this.history.done), undone: Jr(this.history.undone) }
            },
            setHistory: function (e) {
                var t = (this.history = new bi(this.history))
                ;(t.done = Jr(e.done.slice(0), null, !0)), (t.undone = Jr(e.undone.slice(0), null, !0))
            },
            setGutterMarker: gt(function (e, t, n) {
                return In(this, e, 'gutter', function (r) {
                    var i = r.gutterMarkers || (r.gutterMarkers = {})
                    return (i[t] = n), !n && ke(i) && (r.gutterMarkers = null), !0
                })
            }),
            clearGutter: gt(function (e) {
                var t = this
                this.iter(function (n) {
                    n.gutterMarkers &&
                        n.gutterMarkers[e] &&
                        In(t, n, 'gutter', function () {
                            return (n.gutterMarkers[e] = null), ke(n.gutterMarkers) && (n.gutterMarkers = null), !0
                        })
                })
            }),
            lineInfo: function (e) {
                var t
                if (typeof e == 'number') {
                    if (!L(this, e) || ((t = e), (e = ze(this, e)), !e)) return null
                } else if (((t = Xe(e)), t == null)) return null
                return {
                    line: t,
                    handle: e,
                    text: e.text,
                    gutterMarkers: e.gutterMarkers,
                    textClass: e.textClass,
                    bgClass: e.bgClass,
                    wrapClass: e.wrapClass,
                    widgets: e.widgets,
                }
            },
            addLineClass: gt(function (e, t, n) {
                return In(this, e, t == 'gutter' ? 'gutter' : 'class', function (r) {
                    var i =
                        t == 'text'
                            ? 'textClass'
                            : t == 'background'
                              ? 'bgClass'
                              : t == 'gutter'
                                ? 'gutterClass'
                                : 'wrapClass'
                    if (!r[i]) r[i] = n
                    else {
                        if (D(n).test(r[i])) return !1
                        r[i] += ' ' + n
                    }
                    return !0
                })
            }),
            removeLineClass: gt(function (e, t, n) {
                return In(this, e, t == 'gutter' ? 'gutter' : 'class', function (r) {
                    var i =
                            t == 'text'
                                ? 'textClass'
                                : t == 'background'
                                  ? 'bgClass'
                                  : t == 'gutter'
                                    ? 'gutterClass'
                                    : 'wrapClass',
                        a = r[i]
                    if (a)
                        if (n == null) r[i] = null
                        else {
                            var l = a.match(D(n))
                            if (!l) return !1
                            var u = l.index + l[0].length
                            r[i] = a.slice(0, l.index) + (!l.index || u == a.length ? '' : ' ') + a.slice(u) || null
                        }
                    else return !1
                    return !0
                })
            }),
            addLineWidget: gt(function (e, t, n) {
                return Of(this, e, t, n)
            }),
            removeLineWidget: function (e) {
                e.clear()
            },
            markText: function (e, t, n) {
                return nn(this, Pe(this, e), Pe(this, t), n, (n && n.type) || 'range')
            },
            setBookmark: function (e, t) {
                var n = {
                    replacedWith: t && (t.nodeType == null ? t.widget : t),
                    insertLeft: t && t.insertLeft,
                    clearWhenEmpty: !1,
                    shared: t && t.shared,
                    handleMouseEvents: t && t.handleMouseEvents,
                }
                return (e = Pe(this, e)), nn(this, e, e, n, 'bookmark')
            },
            findMarksAt: function (e) {
                e = Pe(this, e)
                var t = [],
                    n = ze(this, e.line).markedSpans
                if (n)
                    for (var r = 0; r < n.length; ++r) {
                        var i = n[r]
                        ;(i.from == null || i.from <= e.ch) &&
                            (i.to == null || i.to >= e.ch) &&
                            t.push(i.marker.parent || i.marker)
                    }
                return t
            },
            findMarks: function (e, t, n) {
                ;(e = Pe(this, e)), (t = Pe(this, t))
                var r = [],
                    i = e.line
                return (
                    this.iter(e.line, t.line + 1, function (a) {
                        var l = a.markedSpans
                        if (l)
                            for (var u = 0; u < l.length; u++) {
                                var f = l[u]
                                !(
                                    (f.to != null && i == e.line && e.ch >= f.to) ||
                                    (f.from == null && i != e.line) ||
                                    (f.from != null && i == t.line && f.from >= t.ch)
                                ) &&
                                    (!n || n(f.marker)) &&
                                    r.push(f.marker.parent || f.marker)
                            }
                        ++i
                    }),
                    r
                )
            },
            getAllMarks: function () {
                var e = []
                return (
                    this.iter(function (t) {
                        var n = t.markedSpans
                        if (n) for (var r = 0; r < n.length; ++r) n[r].from != null && e.push(n[r].marker)
                    }),
                    e
                )
            },
            posFromIndex: function (e) {
                var t,
                    n = this.first,
                    r = this.lineSeparator().length
                return (
                    this.iter(function (i) {
                        var a = i.text.length + r
                        if (a > e) return (t = e), !0
                        ;(e -= a), ++n
                    }),
                    Pe(this, G(n, t))
                )
            },
            indexFromPos: function (e) {
                e = Pe(this, e)
                var t = e.ch
                if (e.line < this.first || e.ch < 0) return 0
                var n = this.lineSeparator().length
                return (
                    this.iter(this.first, e.line, function (r) {
                        t += r.text.length + n
                    }),
                    t
                )
            },
            copy: function (e) {
                var t = new qt(
                    Ur(this, this.first, this.first + this.size),
                    this.modeOption,
                    this.first,
                    this.lineSep,
                    this.direction,
                )
                return (
                    (t.scrollTop = this.scrollTop),
                    (t.scrollLeft = this.scrollLeft),
                    (t.sel = this.sel),
                    (t.extend = !1),
                    e && ((t.history.undoDepth = this.history.undoDepth), t.setHistory(this.getHistory())),
                    t
                )
            },
            linkedDoc: function (e) {
                e || (e = {})
                var t = this.first,
                    n = this.first + this.size
                e.from != null && e.from > t && (t = e.from), e.to != null && e.to < n && (n = e.to)
                var r = new qt(Ur(this, t, n), e.mode || this.modeOption, t, this.lineSep, this.direction)
                return (
                    e.sharedHist && (r.history = this.history),
                    (this.linked || (this.linked = [])).push({ doc: r, sharedHist: e.sharedHist }),
                    (r.linked = [{ doc: this, isParent: !0, sharedHist: e.sharedHist }]),
                    jf(r, ql(this)),
                    r
                )
            },
            unlinkDoc: function (e) {
                if ((e instanceof nt && (e = e.doc), this.linked))
                    for (var t = 0; t < this.linked.length; ++t) {
                        var n = this.linked[t]
                        if (n.doc == e) {
                            this.linked.splice(t, 1), e.unlinkDoc(this), Rf(ql(this))
                            break
                        }
                    }
                if (e.history == this.history) {
                    var r = [e.id]
                    kr(
                        e,
                        function (i) {
                            return r.push(i.id)
                        },
                        !0,
                    ),
                        (e.history = new bi(null)),
                        (e.history.done = Jr(this.history.done, r)),
                        (e.history.undone = Jr(this.history.undone, r))
                }
            },
            iterLinkedDocs: function (e) {
                kr(this, e)
            },
            getMode: function () {
                return this.mode
            },
            getEditor: function () {
                return this.cm
            },
            splitLines: function (e) {
                return this.lineSep ? e.split(this.lineSep) : vn(e)
            },
            lineSeparator: function () {
                return (
                    this.lineSep ||
                    `
`
                )
            },
            setDirection: gt(function (e) {
                e != 'rtl' && (e = 'ltr'),
                    e != this.direction &&
                        ((this.direction = e),
                        this.iter(function (t) {
                            return (t.order = null)
                        }),
                        this.cm && zf(this.cm))
            }),
        })),
            (qt.prototype.eachLine = qt.prototype.iter)
        var Il = 0
        function Bf(e) {
            var t = this
            if ((Fl(t), !(ot(t, e) || sr(t.display, e)))) {
                kt(e), s && (Il = +new Date())
                var n = Ar(t, e, !0),
                    r = e.dataTransfer.files
                if (!(!n || t.isReadOnly()))
                    if (r && r.length && window.FileReader && window.File)
                        for (
                            var i = r.length,
                                a = Array(i),
                                l = 0,
                                u = function () {
                                    ++l == i &&
                                        ht(t, function () {
                                            n = Pe(t.doc, n)
                                            var Q = {
                                                from: n,
                                                to: n,
                                                text: t.doc.splitLines(
                                                    a
                                                        .filter(function (ae) {
                                                            return ae != null
                                                        })
                                                        .join(t.doc.lineSeparator()),
                                                ),
                                                origin: 'paste',
                                            }
                                            tn(t.doc, Q), yl(t.doc, xr(Pe(t.doc, n), Pe(t.doc, _r(Q))))
                                        })()
                                },
                                f = function (Q, ae) {
                                    if (
                                        t.options.allowDropFileTypes &&
                                        De(t.options.allowDropFileTypes, Q.type) == -1
                                    ) {
                                        u()
                                        return
                                    }
                                    var ue = new FileReader()
                                    ;(ue.onerror = function () {
                                        return u()
                                    }),
                                        (ue.onload = function () {
                                            var he = ue.result
                                            if (/[\x00-\x08\x0e-\x1f]{2}/.test(he)) {
                                                u()
                                                return
                                            }
                                            ;(a[ae] = he), u()
                                        }),
                                        ue.readAsText(Q)
                                },
                                m = 0;
                            m < r.length;
                            m++
                        )
                            f(r[m], m)
                    else {
                        if (t.state.draggingText && t.doc.sel.contains(n) > -1) {
                            t.state.draggingText(e),
                                setTimeout(function () {
                                    return t.display.input.focus()
                                }, 20)
                            return
                        }
                        try {
                            var A = e.dataTransfer.getData('Text')
                            if (A) {
                                var P
                                if (
                                    (t.state.draggingText && !t.state.draggingText.copy && (P = t.listSelections()),
                                    _i(t.doc, xr(n, n)),
                                    P)
                                )
                                    for (var ee = 0; ee < P.length; ++ee)
                                        rn(t.doc, '', P[ee].anchor, P[ee].head, 'drag')
                                t.replaceSelection(A, 'around', 'paste'), t.display.input.focus()
                            }
                        } catch {}
                    }
            }
        }
        function Wf(e, t) {
            if (s && (!e.state.draggingText || +new Date() - Il < 100)) {
                rr(t)
                return
            }
            if (
                !(ot(e, t) || sr(e.display, t)) &&
                (t.dataTransfer.setData('Text', e.getSelection()),
                (t.dataTransfer.effectAllowed = 'copyMove'),
                t.dataTransfer.setDragImage && !S)
            ) {
                var n = x('img', null, null, 'position: fixed; left: 0; top: 0;')
                ;(n.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='),
                    d && ((n.width = n.height = 1), e.display.wrapper.appendChild(n), (n._top = n.offsetTop)),
                    t.dataTransfer.setDragImage(n, 0, 0),
                    d && n.parentNode.removeChild(n)
            }
        }
        function Uf(e, t) {
            var n = Ar(e, t)
            if (n) {
                var r = document.createDocumentFragment()
                xo(e, n, r),
                    e.display.dragCursor ||
                        ((e.display.dragCursor = x('div', null, 'CodeMirror-cursors CodeMirror-dragcursors')),
                        e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)),
                    J(e.display.dragCursor, r)
            }
        }
        function Fl(e) {
            e.display.dragCursor &&
                (e.display.lineSpace.removeChild(e.display.dragCursor), (e.display.dragCursor = null))
        }
        function Nl(e) {
            if (document.getElementsByClassName) {
                for (var t = document.getElementsByClassName('CodeMirror'), n = [], r = 0; r < t.length; r++) {
                    var i = t[r].CodeMirror
                    i && n.push(i)
                }
                n.length &&
                    n[0].operation(function () {
                        for (var a = 0; a < n.length; a++) e(n[a])
                    })
            }
        }
        var Ol = !1
        function $f() {
            Ol || (Kf(), (Ol = !0))
        }
        function Kf() {
            var e
            ge(window, 'resize', function () {
                e == null &&
                    (e = setTimeout(function () {
                        ;(e = null), Nl(Gf)
                    }, 100))
            }),
                ge(window, 'blur', function () {
                    return Nl(Yr)
                })
        }
        function Gf(e) {
            var t = e.display
            ;(t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null), (t.scrollbarsClipped = !1), e.setSize()
        }
        for (
            var Sr = {
                    3: 'Pause',
                    8: 'Backspace',
                    9: 'Tab',
                    13: 'Enter',
                    16: 'Shift',
                    17: 'Ctrl',
                    18: 'Alt',
                    19: 'Pause',
                    20: 'CapsLock',
                    27: 'Esc',
                    32: 'Space',
                    33: 'PageUp',
                    34: 'PageDown',
                    35: 'End',
                    36: 'Home',
                    37: 'Left',
                    38: 'Up',
                    39: 'Right',
                    40: 'Down',
                    44: 'PrintScrn',
                    45: 'Insert',
                    46: 'Delete',
                    59: ';',
                    61: '=',
                    91: 'Mod',
                    92: 'Mod',
                    93: 'Mod',
                    106: '*',
                    107: '=',
                    109: '-',
                    110: '.',
                    111: '/',
                    145: 'ScrollLock',
                    173: '-',
                    186: ';',
                    187: '=',
                    188: ',',
                    189: '-',
                    190: '.',
                    191: '/',
                    192: '`',
                    219: '[',
                    220: '\\',
                    221: ']',
                    222: "'",
                    224: 'Mod',
                    63232: 'Up',
                    63233: 'Down',
                    63234: 'Left',
                    63235: 'Right',
                    63272: 'Delete',
                    63273: 'Home',
                    63275: 'End',
                    63276: 'PageUp',
                    63277: 'PageDown',
                    63302: 'Insert',
                },
                jn = 0;
            jn < 10;
            jn++
        )
            Sr[jn + 48] = Sr[jn + 96] = String(jn)
        for (var Si = 65; Si <= 90; Si++) Sr[Si] = String.fromCharCode(Si)
        for (var Rn = 1; Rn <= 12; Rn++) Sr[Rn + 111] = Sr[Rn + 63235] = 'F' + Rn
        var cr = {}
        ;(cr.basic = {
            Left: 'goCharLeft',
            Right: 'goCharRight',
            Up: 'goLineUp',
            Down: 'goLineDown',
            End: 'goLineEnd',
            Home: 'goLineStartSmart',
            PageUp: 'goPageUp',
            PageDown: 'goPageDown',
            Delete: 'delCharAfter',
            Backspace: 'delCharBefore',
            'Shift-Backspace': 'delCharBefore',
            Tab: 'defaultTab',
            'Shift-Tab': 'indentAuto',
            Enter: 'newlineAndIndent',
            Insert: 'toggleOverwrite',
            Esc: 'singleSelection',
        }),
            (cr.pcDefault = {
                'Ctrl-A': 'selectAll',
                'Ctrl-D': 'deleteLine',
                'Ctrl-Z': 'undo',
                'Shift-Ctrl-Z': 'redo',
                'Ctrl-Y': 'redo',
                'Ctrl-Home': 'goDocStart',
                'Ctrl-End': 'goDocEnd',
                'Ctrl-Up': 'goLineUp',
                'Ctrl-Down': 'goLineDown',
                'Ctrl-Left': 'goGroupLeft',
                'Ctrl-Right': 'goGroupRight',
                'Alt-Left': 'goLineStart',
                'Alt-Right': 'goLineEnd',
                'Ctrl-Backspace': 'delGroupBefore',
                'Ctrl-Delete': 'delGroupAfter',
                'Ctrl-S': 'save',
                'Ctrl-F': 'find',
                'Ctrl-G': 'findNext',
                'Shift-Ctrl-G': 'findPrev',
                'Shift-Ctrl-F': 'replace',
                'Shift-Ctrl-R': 'replaceAll',
                'Ctrl-[': 'indentLess',
                'Ctrl-]': 'indentMore',
                'Ctrl-U': 'undoSelection',
                'Shift-Ctrl-U': 'redoSelection',
                'Alt-U': 'redoSelection',
                fallthrough: 'basic',
            }),
            (cr.emacsy = {
                'Ctrl-F': 'goCharRight',
                'Ctrl-B': 'goCharLeft',
                'Ctrl-P': 'goLineUp',
                'Ctrl-N': 'goLineDown',
                'Ctrl-A': 'goLineStart',
                'Ctrl-E': 'goLineEnd',
                'Ctrl-V': 'goPageDown',
                'Shift-Ctrl-V': 'goPageUp',
                'Ctrl-D': 'delCharAfter',
                'Ctrl-H': 'delCharBefore',
                'Alt-Backspace': 'delWordBefore',
                'Ctrl-K': 'killLine',
                'Ctrl-T': 'transposeChars',
                'Ctrl-O': 'openLine',
            }),
            (cr.macDefault = {
                'Cmd-A': 'selectAll',
                'Cmd-D': 'deleteLine',
                'Cmd-Z': 'undo',
                'Shift-Cmd-Z': 'redo',
                'Cmd-Y': 'redo',
                'Cmd-Home': 'goDocStart',
                'Cmd-Up': 'goDocStart',
                'Cmd-End': 'goDocEnd',
                'Cmd-Down': 'goDocEnd',
                'Alt-Left': 'goGroupLeft',
                'Alt-Right': 'goGroupRight',
                'Cmd-Left': 'goLineLeft',
                'Cmd-Right': 'goLineRight',
                'Alt-Backspace': 'delGroupBefore',
                'Ctrl-Alt-Backspace': 'delGroupAfter',
                'Alt-Delete': 'delGroupAfter',
                'Cmd-S': 'save',
                'Cmd-F': 'find',
                'Cmd-G': 'findNext',
                'Shift-Cmd-G': 'findPrev',
                'Cmd-Alt-F': 'replace',
                'Shift-Cmd-Alt-F': 'replaceAll',
                'Cmd-[': 'indentLess',
                'Cmd-]': 'indentMore',
                'Cmd-Backspace': 'delWrappedLineLeft',
                'Cmd-Delete': 'delWrappedLineRight',
                'Cmd-U': 'undoSelection',
                'Shift-Cmd-U': 'redoSelection',
                'Ctrl-Up': 'goDocStart',
                'Ctrl-Down': 'goDocEnd',
                fallthrough: ['basic', 'emacsy'],
            }),
            (cr.default = B ? cr.macDefault : cr.pcDefault)
        function Zf(e) {
            var t = e.split(/-(?!$)/)
            e = t[t.length - 1]
            for (var n, r, i, a, l = 0; l < t.length - 1; l++) {
                var u = t[l]
                if (/^(cmd|meta|m)$/i.test(u)) a = !0
                else if (/^a(lt)?$/i.test(u)) n = !0
                else if (/^(c|ctrl|control)$/i.test(u)) r = !0
                else if (/^s(hift)?$/i.test(u)) i = !0
                else throw new Error('Unrecognized modifier name: ' + u)
            }
            return n && (e = 'Alt-' + e), r && (e = 'Ctrl-' + e), a && (e = 'Cmd-' + e), i && (e = 'Shift-' + e), e
        }
        function Xf(e) {
            var t = {}
            for (var n in e)
                if (e.hasOwnProperty(n)) {
                    var r = e[n]
                    if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue
                    if (r == '...') {
                        delete e[n]
                        continue
                    }
                    for (var i = Z(n.split(' '), Zf), a = 0; a < i.length; a++) {
                        var l = void 0,
                            u = void 0
                        a == i.length - 1
                            ? ((u = i.join(' ')), (l = r))
                            : ((u = i.slice(0, a + 1).join(' ')), (l = '...'))
                        var f = t[u]
                        if (!f) t[u] = l
                        else if (f != l) throw new Error('Inconsistent bindings for ' + u)
                    }
                    delete e[n]
                }
            for (var m in t) e[m] = t[m]
            return e
        }
        function on(e, t, n, r) {
            t = Ti(t)
            var i = t.call ? t.call(e, r) : t[e]
            if (i === !1) return 'nothing'
            if (i === '...') return 'multi'
            if (i != null && n(i)) return 'handled'
            if (t.fallthrough) {
                if (Object.prototype.toString.call(t.fallthrough) != '[object Array]') return on(e, t.fallthrough, n, r)
                for (var a = 0; a < t.fallthrough.length; a++) {
                    var l = on(e, t.fallthrough[a], n, r)
                    if (l) return l
                }
            }
        }
        function Pl(e) {
            var t = typeof e == 'string' ? e : Sr[e.keyCode]
            return t == 'Ctrl' || t == 'Alt' || t == 'Shift' || t == 'Mod'
        }
        function jl(e, t, n) {
            var r = e
            return (
                t.altKey && r != 'Alt' && (e = 'Alt-' + e),
                (N ? t.metaKey : t.ctrlKey) && r != 'Ctrl' && (e = 'Ctrl-' + e),
                (N ? t.ctrlKey : t.metaKey) && r != 'Mod' && (e = 'Cmd-' + e),
                !n && t.shiftKey && r != 'Shift' && (e = 'Shift-' + e),
                e
            )
        }
        function Rl(e, t) {
            if (d && e.keyCode == 34 && e.char) return !1
            var n = Sr[e.keyCode]
            return n == null || e.altGraphKey ? !1 : (e.keyCode == 3 && e.code && (n = e.code), jl(n, e, t))
        }
        function Ti(e) {
            return typeof e == 'string' ? cr[e] : e
        }
        function an(e, t) {
            for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
                for (var a = t(n[i]); r.length && ie(a.from, O(r).to) <= 0; ) {
                    var l = r.pop()
                    if (ie(l.from, a.from) < 0) {
                        a.from = l.from
                        break
                    }
                }
                r.push(a)
            }
            Pt(e, function () {
                for (var u = r.length - 1; u >= 0; u--) rn(e.doc, '', r[u].from, r[u].to, '+delete')
                Qr(e)
            })
        }
        function Oo(e, t, n) {
            var r = $(e.text, t + n, n)
            return r < 0 || r > e.text.length ? null : r
        }
        function Po(e, t, n) {
            var r = Oo(e, t.ch, n)
            return r == null ? null : new G(t.line, r, n < 0 ? 'after' : 'before')
        }
        function jo(e, t, n, r, i) {
            if (e) {
                t.doc.direction == 'rtl' && (i = -i)
                var a = xt(n, t.doc.direction)
                if (a) {
                    var l = i < 0 ? O(a) : a[0],
                        u = i < 0 == (l.level == 1),
                        f = u ? 'after' : 'before',
                        m
                    if (l.level > 0 || t.doc.direction == 'rtl') {
                        var A = Gr(t, n)
                        m = i < 0 ? n.text.length - 1 : 0
                        var P = er(t, A, m).top
                        ;(m = U(
                            function (ee) {
                                return er(t, A, ee).top == P
                            },
                            i < 0 == (l.level == 1) ? l.from : l.to - 1,
                            m,
                        )),
                            f == 'before' && (m = Oo(n, m, 1))
                    } else m = i < 0 ? l.to : l.from
                    return new G(r, m, f)
                }
            }
            return new G(r, i < 0 ? n.text.length : 0, i < 0 ? 'before' : 'after')
        }
        function Yf(e, t, n, r) {
            var i = xt(t, e.doc.direction)
            if (!i) return Po(t, n, r)
            n.ch >= t.text.length
                ? ((n.ch = t.text.length), (n.sticky = 'before'))
                : n.ch <= 0 && ((n.ch = 0), (n.sticky = 'after'))
            var a = et(i, n.ch, n.sticky),
                l = i[a]
            if (e.doc.direction == 'ltr' && l.level % 2 == 0 && (r > 0 ? l.to > n.ch : l.from < n.ch))
                return Po(t, n, r)
            var u = function (ve, _e) {
                    return Oo(t, ve instanceof G ? ve.ch : ve, _e)
                },
                f,
                m = function (ve) {
                    return e.options.lineWrapping
                        ? ((f = f || Gr(e, t)), $a(e, t, f, ve))
                        : { begin: 0, end: t.text.length }
                },
                A = m(n.sticky == 'before' ? u(n, -1) : n.ch)
            if (e.doc.direction == 'rtl' || l.level == 1) {
                var P = (l.level == 1) == r < 0,
                    ee = u(n, P ? 1 : -1)
                if (ee != null && (P ? ee <= l.to && ee <= A.end : ee >= l.from && ee >= A.begin)) {
                    var Q = P ? 'before' : 'after'
                    return new G(n.line, ee, Q)
                }
            }
            var ae = function (ve, _e, be) {
                    for (
                        var Te = function (Ve, mt) {
                            return mt ? new G(n.line, u(Ve, 1), 'before') : new G(n.line, Ve, 'after')
                        };
                        ve >= 0 && ve < i.length;
                        ve += _e
                    ) {
                        var Ie = i[ve],
                            qe = _e > 0 == (Ie.level != 1),
                            We = qe ? be.begin : u(be.end, -1)
                        if (
                            (Ie.from <= We && We < Ie.to) ||
                            ((We = qe ? Ie.from : u(Ie.to, -1)), be.begin <= We && We < be.end)
                        )
                            return Te(We, qe)
                    }
                },
                ue = ae(a + r, r, A)
            if (ue) return ue
            var he = r > 0 ? A.end : u(A.begin, -1)
            return he != null && !(r > 0 && he == t.text.length) && ((ue = ae(r > 0 ? 0 : i.length - 1, r, m(he))), ue)
                ? ue
                : null
        }
        var Hn = {
            selectAll: Sl,
            singleSelection: function (e) {
                return e.setSelection(e.getCursor('anchor'), e.getCursor('head'), Fe)
            },
            killLine: function (e) {
                return an(e, function (t) {
                    if (t.empty()) {
                        var n = ze(e.doc, t.head.line).text.length
                        return t.head.ch == n && t.head.line < e.lastLine()
                            ? { from: t.head, to: G(t.head.line + 1, 0) }
                            : { from: t.head, to: G(t.head.line, n) }
                    } else return { from: t.from(), to: t.to() }
                })
            },
            deleteLine: function (e) {
                return an(e, function (t) {
                    return { from: G(t.from().line, 0), to: Pe(e.doc, G(t.to().line + 1, 0)) }
                })
            },
            delLineLeft: function (e) {
                return an(e, function (t) {
                    return { from: G(t.from().line, 0), to: t.from() }
                })
            },
            delWrappedLineLeft: function (e) {
                return an(e, function (t) {
                    var n = e.charCoords(t.head, 'div').top + 5,
                        r = e.coordsChar({ left: 0, top: n }, 'div')
                    return { from: r, to: t.from() }
                })
            },
            delWrappedLineRight: function (e) {
                return an(e, function (t) {
                    var n = e.charCoords(t.head, 'div').top + 5,
                        r = e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: n }, 'div')
                    return { from: t.from(), to: r }
                })
            },
            undo: function (e) {
                return e.undo()
            },
            redo: function (e) {
                return e.redo()
            },
            undoSelection: function (e) {
                return e.undoSelection()
            },
            redoSelection: function (e) {
                return e.redoSelection()
            },
            goDocStart: function (e) {
                return e.extendSelection(G(e.firstLine(), 0))
            },
            goDocEnd: function (e) {
                return e.extendSelection(G(e.lastLine()))
            },
            goLineStart: function (e) {
                return e.extendSelectionsBy(
                    function (t) {
                        return Hl(e, t.head.line)
                    },
                    { origin: '+move', bias: 1 },
                )
            },
            goLineStartSmart: function (e) {
                return e.extendSelectionsBy(
                    function (t) {
                        return Bl(e, t.head)
                    },
                    { origin: '+move', bias: 1 },
                )
            },
            goLineEnd: function (e) {
                return e.extendSelectionsBy(
                    function (t) {
                        return Qf(e, t.head.line)
                    },
                    { origin: '+move', bias: -1 },
                )
            },
            goLineRight: function (e) {
                return e.extendSelectionsBy(function (t) {
                    var n = e.cursorCoords(t.head, 'div').top + 5
                    return e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: n }, 'div')
                }, Le)
            },
            goLineLeft: function (e) {
                return e.extendSelectionsBy(function (t) {
                    var n = e.cursorCoords(t.head, 'div').top + 5
                    return e.coordsChar({ left: 0, top: n }, 'div')
                }, Le)
            },
            goLineLeftSmart: function (e) {
                return e.extendSelectionsBy(function (t) {
                    var n = e.cursorCoords(t.head, 'div').top + 5,
                        r = e.coordsChar({ left: 0, top: n }, 'div')
                    return r.ch < e.getLine(r.line).search(/\S/) ? Bl(e, t.head) : r
                }, Le)
            },
            goLineUp: function (e) {
                return e.moveV(-1, 'line')
            },
            goLineDown: function (e) {
                return e.moveV(1, 'line')
            },
            goPageUp: function (e) {
                return e.moveV(-1, 'page')
            },
            goPageDown: function (e) {
                return e.moveV(1, 'page')
            },
            goCharLeft: function (e) {
                return e.moveH(-1, 'char')
            },
            goCharRight: function (e) {
                return e.moveH(1, 'char')
            },
            goColumnLeft: function (e) {
                return e.moveH(-1, 'column')
            },
            goColumnRight: function (e) {
                return e.moveH(1, 'column')
            },
            goWordLeft: function (e) {
                return e.moveH(-1, 'word')
            },
            goGroupRight: function (e) {
                return e.moveH(1, 'group')
            },
            goGroupLeft: function (e) {
                return e.moveH(-1, 'group')
            },
            goWordRight: function (e) {
                return e.moveH(1, 'word')
            },
            delCharBefore: function (e) {
                return e.deleteH(-1, 'codepoint')
            },
            delCharAfter: function (e) {
                return e.deleteH(1, 'char')
            },
            delWordBefore: function (e) {
                return e.deleteH(-1, 'word')
            },
            delWordAfter: function (e) {
                return e.deleteH(1, 'word')
            },
            delGroupBefore: function (e) {
                return e.deleteH(-1, 'group')
            },
            delGroupAfter: function (e) {
                return e.deleteH(1, 'group')
            },
            indentAuto: function (e) {
                return e.indentSelection('smart')
            },
            indentMore: function (e) {
                return e.indentSelection('add')
            },
            indentLess: function (e) {
                return e.indentSelection('subtract')
            },
            insertTab: function (e) {
                return e.replaceSelection('	')
            },
            insertSoftTab: function (e) {
                for (var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0; i < n.length; i++) {
                    var a = n[i].from(),
                        l = xe(e.getLine(a.line), a.ch, r)
                    t.push($e(r - (l % r)))
                }
                e.replaceSelections(t)
            },
            defaultTab: function (e) {
                e.somethingSelected() ? e.indentSelection('add') : e.execCommand('insertTab')
            },
            transposeChars: function (e) {
                return Pt(e, function () {
                    for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++)
                        if (t[r].empty()) {
                            var i = t[r].head,
                                a = ze(e.doc, i.line).text
                            if (a) {
                                if ((i.ch == a.length && (i = new G(i.line, i.ch - 1)), i.ch > 0))
                                    (i = new G(i.line, i.ch + 1)),
                                        e.replaceRange(
                                            a.charAt(i.ch - 1) + a.charAt(i.ch - 2),
                                            G(i.line, i.ch - 2),
                                            i,
                                            '+transpose',
                                        )
                                else if (i.line > e.doc.first) {
                                    var l = ze(e.doc, i.line - 1).text
                                    l &&
                                        ((i = new G(i.line, 1)),
                                        e.replaceRange(
                                            a.charAt(0) + e.doc.lineSeparator() + l.charAt(l.length - 1),
                                            G(i.line - 1, l.length - 1),
                                            i,
                                            '+transpose',
                                        ))
                                }
                            }
                            n.push(new Ye(i, i))
                        }
                    e.setSelections(n)
                })
            },
            newlineAndIndent: function (e) {
                return Pt(e, function () {
                    for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--)
                        e.replaceRange(e.doc.lineSeparator(), t[n].anchor, t[n].head, '+input')
                    t = e.listSelections()
                    for (var r = 0; r < t.length; r++) e.indentLine(t[r].from().line, null, !0)
                    Qr(e)
                })
            },
            openLine: function (e) {
                return e.replaceSelection(
                    `
`,
                    'start',
                )
            },
            toggleOverwrite: function (e) {
                return e.toggleOverwrite()
            },
        }
        function Hl(e, t) {
            var n = ze(e.doc, t),
                r = $t(n)
            return r != n && (t = Xe(r)), jo(!0, e, r, t, 1)
        }
        function Qf(e, t) {
            var n = ze(e.doc, t),
                r = qc(n)
            return r != n && (t = Xe(r)), jo(!0, e, n, t, -1)
        }
        function Bl(e, t) {
            var n = Hl(e, t.line),
                r = ze(e.doc, n.line),
                i = xt(r, e.doc.direction)
            if (!i || i[0].level == 0) {
                var a = Math.max(n.ch, r.text.search(/\S/)),
                    l = t.line == n.line && t.ch <= a && t.ch
                return G(n.line, l ? 0 : a, n.sticky)
            }
            return n
        }
        function Li(e, t, n) {
            if (typeof t == 'string' && ((t = Hn[t]), !t)) return !1
            e.display.input.ensurePolled()
            var r = e.display.shift,
                i = !1
            try {
                e.isReadOnly() && (e.state.suppressEdits = !0), n && (e.display.shift = !1), (i = t(e) != Me)
            } finally {
                ;(e.display.shift = r), (e.state.suppressEdits = !1)
            }
            return i
        }
        function Vf(e, t, n) {
            for (var r = 0; r < e.state.keyMaps.length; r++) {
                var i = on(t, e.state.keyMaps[r], n, e)
                if (i) return i
            }
            return (e.options.extraKeys && on(t, e.options.extraKeys, n, e)) || on(t, e.options.keyMap, n, e)
        }
        var Jf = new pe()
        function Bn(e, t, n, r) {
            var i = e.state.keySeq
            if (i) {
                if (Pl(t)) return 'handled'
                if (
                    (/\'$/.test(t)
                        ? (e.state.keySeq = null)
                        : Jf.set(50, function () {
                              e.state.keySeq == i && ((e.state.keySeq = null), e.display.input.reset())
                          }),
                    Wl(e, i + ' ' + t, n, r))
                )
                    return !0
            }
            return Wl(e, t, n, r)
        }
        function Wl(e, t, n, r) {
            var i = Vf(e, t, r)
            return (
                i == 'multi' && (e.state.keySeq = t),
                i == 'handled' && pt(e, 'keyHandled', e, t, n),
                (i == 'handled' || i == 'multi') && (kt(n), _o(e)),
                !!i
            )
        }
        function Ul(e, t) {
            var n = Rl(t, !0)
            return n
                ? t.shiftKey && !e.state.keySeq
                    ? Bn(e, 'Shift-' + n, t, function (r) {
                          return Li(e, r, !0)
                      }) ||
                      Bn(e, n, t, function (r) {
                          if (typeof r == 'string' ? /^go[A-Z]/.test(r) : r.motion) return Li(e, r)
                      })
                    : Bn(e, n, t, function (r) {
                          return Li(e, r)
                      })
                : !1
        }
        function ed(e, t, n) {
            return Bn(e, "'" + n + "'", t, function (r) {
                return Li(e, r, !0)
            })
        }
        var Ro = null
        function $l(e) {
            var t = this
            if (!(e.target && e.target != t.display.input.getField()) && ((t.curOp.focus = W(T(t))), !ot(t, e))) {
                s && g < 11 && e.keyCode == 27 && (e.returnValue = !1)
                var n = e.keyCode
                t.display.shift = n == 16 || e.shiftKey
                var r = Ul(t, e)
                d &&
                    ((Ro = r ? n : null),
                    !r && n == 88 && !Xt && (B ? e.metaKey : e.ctrlKey) && t.replaceSelection('', null, 'cut')),
                    v &&
                        !B &&
                        !r &&
                        n == 46 &&
                        e.shiftKey &&
                        !e.ctrlKey &&
                        document.execCommand &&
                        document.execCommand('cut'),
                    n == 18 && !/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) && td(t)
            }
        }
        function td(e) {
            var t = e.display.lineDiv
            le(t, 'CodeMirror-crosshair')
            function n(r) {
                ;(r.keyCode == 18 || !r.altKey) &&
                    (V(t, 'CodeMirror-crosshair'), _t(document, 'keyup', n), _t(document, 'mouseover', n))
            }
            ge(document, 'keyup', n), ge(document, 'mouseover', n)
        }
        function Kl(e) {
            e.keyCode == 16 && (this.doc.sel.shift = !1), ot(this, e)
        }
        function Gl(e) {
            var t = this
            if (
                !(e.target && e.target != t.display.input.getField()) &&
                !(sr(t.display, e) || ot(t, e) || (e.ctrlKey && !e.altKey) || (B && e.metaKey))
            ) {
                var n = e.keyCode,
                    r = e.charCode
                if (d && n == Ro) {
                    ;(Ro = null), kt(e)
                    return
                }
                if (!(d && (!e.which || e.which < 10) && Ul(t, e))) {
                    var i = String.fromCharCode(r ?? n)
                    i != '\b' && (ed(t, e, i) || t.display.input.onKeyPress(e))
                }
            }
        }
        var rd = 400,
            Ho = function (e, t, n) {
                ;(this.time = e), (this.pos = t), (this.button = n)
            }
        Ho.prototype.compare = function (e, t, n) {
            return this.time + rd > e && ie(t, this.pos) == 0 && n == this.button
        }
        var Wn, Un
        function nd(e, t) {
            var n = +new Date()
            return Un && Un.compare(n, e, t)
                ? ((Wn = Un = null), 'triple')
                : Wn && Wn.compare(n, e, t)
                  ? ((Un = new Ho(n, e, t)), (Wn = null), 'double')
                  : ((Wn = new Ho(n, e, t)), (Un = null), 'single')
        }
        function Zl(e) {
            var t = this,
                n = t.display
            if (!(ot(t, e) || (n.activeTouch && n.input.supportsTouch()))) {
                if ((n.input.ensurePolled(), (n.shift = e.shiftKey), sr(n, e))) {
                    h ||
                        ((n.scroller.draggable = !1),
                        setTimeout(function () {
                            return (n.scroller.draggable = !0)
                        }, 100))
                    return
                }
                if (!Bo(t, e)) {
                    var r = Ar(t, e),
                        i = mn(e),
                        a = r ? nd(r, i) : 'single'
                    de(t).focus(),
                        i == 1 && t.state.selectingText && t.state.selectingText(e),
                        !(r && id(t, i, r, a, e)) &&
                            (i == 1
                                ? r
                                    ? ad(t, r, a, e)
                                    : At(e) == n.scroller && kt(e)
                                : i == 2
                                  ? (r && xi(t.doc, r),
                                    setTimeout(function () {
                                        return n.input.focus()
                                    }, 20))
                                  : i == 3 && (F ? t.display.input.onContextMenu(e) : ko(t)))
                }
            }
        }
        function id(e, t, n, r, i) {
            var a = 'Click'
            return (
                r == 'double' ? (a = 'Double' + a) : r == 'triple' && (a = 'Triple' + a),
                (a = (t == 1 ? 'Left' : t == 2 ? 'Middle' : 'Right') + a),
                Bn(e, jl(a, i), i, function (l) {
                    if ((typeof l == 'string' && (l = Hn[l]), !l)) return !1
                    var u = !1
                    try {
                        e.isReadOnly() && (e.state.suppressEdits = !0), (u = l(e, n) != Me)
                    } finally {
                        e.state.suppressEdits = !1
                    }
                    return u
                })
            )
        }
        function od(e, t, n) {
            var r = e.getOption('configureMouse'),
                i = r ? r(e, t, n) : {}
            if (i.unit == null) {
                var a = X ? n.shiftKey && n.metaKey : n.altKey
                i.unit = a ? 'rectangle' : t == 'single' ? 'char' : t == 'double' ? 'word' : 'line'
            }
            return (
                (i.extend == null || e.doc.extend) && (i.extend = e.doc.extend || n.shiftKey),
                i.addNew == null && (i.addNew = B ? n.metaKey : n.ctrlKey),
                i.moveOnDrag == null && (i.moveOnDrag = !(B ? n.altKey : n.ctrlKey)),
                i
            )
        }
        function ad(e, t, n, r) {
            s ? setTimeout(Ee(Xa, e), 0) : (e.curOp.focus = W(T(e)))
            var i = od(e, n, r),
                a = e.doc.sel,
                l
            e.options.dragDrop &&
            Ji &&
            !e.isReadOnly() &&
            n == 'single' &&
            (l = a.contains(t)) > -1 &&
            (ie((l = a.ranges[l]).from(), t) < 0 || t.xRel > 0) &&
            (ie(l.to(), t) > 0 || t.xRel < 0)
                ? ld(e, r, t, i)
                : sd(e, r, t, i)
        }
        function ld(e, t, n, r) {
            var i = e.display,
                a = !1,
                l = ht(e, function (m) {
                    h && (i.scroller.draggable = !1),
                        (e.state.draggingText = !1),
                        e.state.delayingBlurEvent && (e.hasFocus() ? (e.state.delayingBlurEvent = !1) : ko(e)),
                        _t(i.wrapper.ownerDocument, 'mouseup', l),
                        _t(i.wrapper.ownerDocument, 'mousemove', u),
                        _t(i.scroller, 'dragstart', f),
                        _t(i.scroller, 'drop', l),
                        a ||
                            (kt(m),
                            r.addNew || xi(e.doc, n, null, null, r.extend),
                            (h && !S) || (s && g == 9)
                                ? setTimeout(function () {
                                      i.wrapper.ownerDocument.body.focus({ preventScroll: !0 }), i.input.focus()
                                  }, 20)
                                : i.input.focus())
                }),
                u = function (m) {
                    a = a || Math.abs(t.clientX - m.clientX) + Math.abs(t.clientY - m.clientY) >= 10
                },
                f = function () {
                    return (a = !0)
                }
            h && (i.scroller.draggable = !0),
                (e.state.draggingText = l),
                (l.copy = !r.moveOnDrag),
                ge(i.wrapper.ownerDocument, 'mouseup', l),
                ge(i.wrapper.ownerDocument, 'mousemove', u),
                ge(i.scroller, 'dragstart', f),
                ge(i.scroller, 'drop', l),
                (e.state.delayingBlurEvent = !0),
                setTimeout(function () {
                    return i.input.focus()
                }, 20),
                i.scroller.dragDrop && i.scroller.dragDrop()
        }
        function Xl(e, t, n) {
            if (n == 'char') return new Ye(t, t)
            if (n == 'word') return e.findWordAt(t)
            if (n == 'line') return new Ye(G(t.line, 0), Pe(e.doc, G(t.line + 1, 0)))
            var r = n(e, t)
            return new Ye(r.from, r.to)
        }
        function sd(e, t, n, r) {
            s && ko(e)
            var i = e.display,
                a = e.doc
            kt(t)
            var l,
                u,
                f = a.sel,
                m = f.ranges
            if (
                (r.addNew && !r.extend
                    ? ((u = a.sel.contains(n)), u > -1 ? (l = m[u]) : (l = new Ye(n, n)))
                    : ((l = a.sel.primary()), (u = a.sel.primIndex)),
                r.unit == 'rectangle')
            )
                r.addNew || (l = new Ye(n, n)), (n = Ar(e, t, !0, !0)), (u = -1)
            else {
                var A = Xl(e, n, r.unit)
                r.extend ? (l = Fo(l, A.anchor, A.head, r.extend)) : (l = A)
            }
            r.addNew
                ? u == -1
                    ? ((u = m.length), wt(a, Gt(e, m.concat([l]), u), { scroll: !1, origin: '*mouse' }))
                    : m.length > 1 && m[u].empty() && r.unit == 'char' && !r.extend
                      ? (wt(a, Gt(e, m.slice(0, u).concat(m.slice(u + 1)), 0), { scroll: !1, origin: '*mouse' }),
                        (f = a.sel))
                      : No(a, u, l, Ge)
                : ((u = 0), wt(a, new Ht([l], 0), Ge), (f = a.sel))
            var P = n
            function ee(be) {
                if (ie(P, be) != 0)
                    if (((P = be), r.unit == 'rectangle')) {
                        for (
                            var Te = [],
                                Ie = e.options.tabSize,
                                qe = xe(ze(a, n.line).text, n.ch, Ie),
                                We = xe(ze(a, be.line).text, be.ch, Ie),
                                Ve = Math.min(qe, We),
                                mt = Math.max(qe, We),
                                it = Math.min(n.line, be.line),
                                jt = Math.min(e.lastLine(), Math.max(n.line, be.line));
                            it <= jt;
                            it++
                        ) {
                            var It = ze(a, it).text,
                                ut = Je(It, Ve, Ie)
                            Ve == mt
                                ? Te.push(new Ye(G(it, ut), G(it, ut)))
                                : It.length > ut && Te.push(new Ye(G(it, ut), G(it, Je(It, mt, Ie))))
                        }
                        Te.length || Te.push(new Ye(n, n)),
                            wt(a, Gt(e, f.ranges.slice(0, u).concat(Te), u), { origin: '*mouse', scroll: !1 }),
                            e.scrollIntoView(be)
                    } else {
                        var Ft = l,
                            yt = Xl(e, be, r.unit),
                            dt = Ft.anchor,
                            ct
                        ie(yt.anchor, dt) > 0
                            ? ((ct = yt.head), (dt = ft(Ft.from(), yt.anchor)))
                            : ((ct = yt.anchor), (dt = Ze(Ft.to(), yt.head)))
                        var lt = f.ranges.slice(0)
                        ;(lt[u] = ud(e, new Ye(Pe(a, dt), ct))), wt(a, Gt(e, lt, u), Ge)
                    }
            }
            var Q = i.wrapper.getBoundingClientRect(),
                ae = 0
            function ue(be) {
                var Te = ++ae,
                    Ie = Ar(e, be, !0, r.unit == 'rectangle')
                if (Ie)
                    if (ie(Ie, P) != 0) {
                        ;(e.curOp.focus = W(T(e))), ee(Ie)
                        var qe = hi(i, a)
                        ;(Ie.line >= qe.to || Ie.line < qe.from) &&
                            setTimeout(
                                ht(e, function () {
                                    ae == Te && ue(be)
                                }),
                                150,
                            )
                    } else {
                        var We = be.clientY < Q.top ? -20 : be.clientY > Q.bottom ? 20 : 0
                        We &&
                            setTimeout(
                                ht(e, function () {
                                    ae == Te && ((i.scroller.scrollTop += We), ue(be))
                                }),
                                50,
                            )
                    }
            }
            function he(be) {
                ;(e.state.selectingText = !1),
                    (ae = 1 / 0),
                    be && (kt(be), i.input.focus()),
                    _t(i.wrapper.ownerDocument, 'mousemove', ve),
                    _t(i.wrapper.ownerDocument, 'mouseup', _e),
                    (a.history.lastSelOrigin = null)
            }
            var ve = ht(e, function (be) {
                    be.buttons === 0 || !mn(be) ? he(be) : ue(be)
                }),
                _e = ht(e, he)
            ;(e.state.selectingText = _e),
                ge(i.wrapper.ownerDocument, 'mousemove', ve),
                ge(i.wrapper.ownerDocument, 'mouseup', _e)
        }
        function ud(e, t) {
            var n = t.anchor,
                r = t.head,
                i = ze(e.doc, n.line)
            if (ie(n, r) == 0 && n.sticky == r.sticky) return t
            var a = xt(i)
            if (!a) return t
            var l = et(a, n.ch, n.sticky),
                u = a[l]
            if (u.from != n.ch && u.to != n.ch) return t
            var f = l + ((u.from == n.ch) == (u.level != 1) ? 0 : 1)
            if (f == 0 || f == a.length) return t
            var m
            if (r.line != n.line) m = (r.line - n.line) * (e.doc.direction == 'ltr' ? 1 : -1) > 0
            else {
                var A = et(a, r.ch, r.sticky),
                    P = A - l || (r.ch - n.ch) * (u.level == 1 ? -1 : 1)
                A == f - 1 || A == f ? (m = P < 0) : (m = P > 0)
            }
            var ee = a[f + (m ? -1 : 0)],
                Q = m == (ee.level == 1),
                ae = Q ? ee.from : ee.to,
                ue = Q ? 'after' : 'before'
            return n.ch == ae && n.sticky == ue ? t : new Ye(new G(n.line, ae, ue), r)
        }
        function Yl(e, t, n, r) {
            var i, a
            if (t.touches) (i = t.touches[0].clientX), (a = t.touches[0].clientY)
            else
                try {
                    ;(i = t.clientX), (a = t.clientY)
                } catch {
                    return !1
                }
            if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1
            r && kt(t)
            var l = e.display,
                u = l.lineDiv.getBoundingClientRect()
            if (a > u.bottom || !Tt(e, n)) return gn(t)
            a -= u.top - l.viewOffset
            for (var f = 0; f < e.display.gutterSpecs.length; ++f) {
                var m = l.gutters.childNodes[f]
                if (m && m.getBoundingClientRect().right >= i) {
                    var A = Qt(e.doc, a),
                        P = e.display.gutterSpecs[f]
                    return tt(e, n, e, A, P.className, t), gn(t)
                }
            }
        }
        function Bo(e, t) {
            return Yl(e, t, 'gutterClick', !0)
        }
        function Ql(e, t) {
            sr(e.display, t) || cd(e, t) || ot(e, t, 'contextmenu') || F || e.display.input.onContextMenu(t)
        }
        function cd(e, t) {
            return Tt(e, 'gutterContextMenu') ? Yl(e, t, 'gutterContextMenu', !1) : !1
        }
        function Vl(e) {
            ;(e.display.wrapper.className =
                e.display.wrapper.className.replace(/\s*cm-s-\S+/g, '') +
                e.options.theme.replace(/(^|\s)\s*/g, ' cm-s-')),
                Sn(e)
        }
        var ln = {
                toString: function () {
                    return 'CodeMirror.Init'
                },
            },
            Jl = {},
            Ci = {}
        function fd(e) {
            var t = e.optionHandlers
            function n(r, i, a, l) {
                ;(e.defaults[r] = i),
                    a &&
                        (t[r] = l
                            ? function (u, f, m) {
                                  m != ln && a(u, f, m)
                              }
                            : a)
            }
            ;(e.defineOption = n),
                (e.Init = ln),
                n(
                    'value',
                    '',
                    function (r, i) {
                        return r.setValue(i)
                    },
                    !0,
                ),
                n(
                    'mode',
                    null,
                    function (r, i) {
                        ;(r.doc.modeOption = i), Do(r)
                    },
                    !0,
                ),
                n('indentUnit', 2, Do, !0),
                n('indentWithTabs', !1),
                n('smartIndent', !0),
                n(
                    'tabSize',
                    4,
                    function (r) {
                        Dn(r), Sn(r), Dt(r)
                    },
                    !0,
                ),
                n('lineSeparator', null, function (r, i) {
                    if (((r.doc.lineSep = i), !!i)) {
                        var a = [],
                            l = r.doc.first
                        r.doc.iter(function (f) {
                            for (var m = 0; ; ) {
                                var A = f.text.indexOf(i, m)
                                if (A == -1) break
                                ;(m = A + i.length), a.push(G(l, A))
                            }
                            l++
                        })
                        for (var u = a.length - 1; u >= 0; u--) rn(r.doc, i, a[u], G(a[u].line, a[u].ch + i.length))
                    }
                }),
                n(
                    'specialChars',
                    /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g,
                    function (r, i, a) {
                        ;(r.state.specialChars = new RegExp(i.source + (i.test('	') ? '' : '|	'), 'g')),
                            a != ln && r.refresh()
                    },
                ),
                n(
                    'specialCharPlaceholder',
                    jc,
                    function (r) {
                        return r.refresh()
                    },
                    !0,
                ),
                n('electricChars', !0),
                n(
                    'inputStyle',
                    M ? 'contenteditable' : 'textarea',
                    function () {
                        throw new Error('inputStyle can not (yet) be changed in a running editor')
                    },
                    !0,
                ),
                n(
                    'spellcheck',
                    !1,
                    function (r, i) {
                        return (r.getInputField().spellcheck = i)
                    },
                    !0,
                ),
                n(
                    'autocorrect',
                    !1,
                    function (r, i) {
                        return (r.getInputField().autocorrect = i)
                    },
                    !0,
                ),
                n(
                    'autocapitalize',
                    !1,
                    function (r, i) {
                        return (r.getInputField().autocapitalize = i)
                    },
                    !0,
                ),
                n('rtlMoveVisually', !re),
                n('wholeLineUpdateBefore', !0),
                n(
                    'theme',
                    'default',
                    function (r) {
                        Vl(r), An(r)
                    },
                    !0,
                ),
                n('keyMap', 'default', function (r, i, a) {
                    var l = Ti(i),
                        u = a != ln && Ti(a)
                    u && u.detach && u.detach(r, l), l.attach && l.attach(r, u || null)
                }),
                n('extraKeys', null),
                n('configureMouse', null),
                n('lineWrapping', !1, pd, !0),
                n(
                    'gutters',
                    [],
                    function (r, i) {
                        ;(r.display.gutterSpecs = Mo(i, r.options.lineNumbers)), An(r)
                    },
                    !0,
                ),
                n(
                    'fixedGutter',
                    !0,
                    function (r, i) {
                        ;(r.display.gutters.style.left = i ? bo(r.display) + 'px' : '0'), r.refresh()
                    },
                    !0,
                ),
                n(
                    'coverGutterNextToScrollbar',
                    !1,
                    function (r) {
                        return Vr(r)
                    },
                    !0,
                ),
                n(
                    'scrollbarStyle',
                    'native',
                    function (r) {
                        tl(r),
                            Vr(r),
                            r.display.scrollbars.setScrollTop(r.doc.scrollTop),
                            r.display.scrollbars.setScrollLeft(r.doc.scrollLeft)
                    },
                    !0,
                ),
                n(
                    'lineNumbers',
                    !1,
                    function (r, i) {
                        ;(r.display.gutterSpecs = Mo(r.options.gutters, i)), An(r)
                    },
                    !0,
                ),
                n('firstLineNumber', 1, An, !0),
                n(
                    'lineNumberFormatter',
                    function (r) {
                        return r
                    },
                    An,
                    !0,
                ),
                n('showCursorWhenSelecting', !1, Tn, !0),
                n('resetSelectionOnContextMenu', !0),
                n('lineWiseCopyCut', !0),
                n('pasteLinesPerSelection', !0),
                n('selectionsMayTouch', !1),
                n('readOnly', !1, function (r, i) {
                    i == 'nocursor' && (Yr(r), r.display.input.blur()), r.display.input.readOnlyChanged(i)
                }),
                n('screenReaderLabel', null, function (r, i) {
                    ;(i = i === '' ? null : i), r.display.input.screenReaderLabelChanged(i)
                }),
                n(
                    'disableInput',
                    !1,
                    function (r, i) {
                        i || r.display.input.reset()
                    },
                    !0,
                ),
                n('dragDrop', !0, dd),
                n('allowDropFileTypes', null),
                n('cursorBlinkRate', 530),
                n('cursorScrollMargin', 0),
                n('cursorHeight', 1, Tn, !0),
                n('singleCursorHeightPerLine', !0, Tn, !0),
                n('workTime', 100),
                n('workDelay', 100),
                n('flattenSpans', !0, Dn, !0),
                n('addModeClass', !1, Dn, !0),
                n('pollInterval', 100),
                n('undoDepth', 200, function (r, i) {
                    return (r.doc.history.undoDepth = i)
                }),
                n('historyEventDelay', 1250),
                n(
                    'viewportMargin',
                    10,
                    function (r) {
                        return r.refresh()
                    },
                    !0,
                ),
                n('maxHighlightLength', 1e4, Dn, !0),
                n('moveInputWithCursor', !0, function (r, i) {
                    i || r.display.input.resetPosition()
                }),
                n('tabindex', null, function (r, i) {
                    return (r.display.input.getField().tabIndex = i || '')
                }),
                n('autofocus', null),
                n(
                    'direction',
                    'ltr',
                    function (r, i) {
                        return r.doc.setDirection(i)
                    },
                    !0,
                ),
                n('phrases', null)
        }
        function dd(e, t, n) {
            var r = n && n != ln
            if (!t != !r) {
                var i = e.display.dragFunctions,
                    a = t ? ge : _t
                a(e.display.scroller, 'dragstart', i.start),
                    a(e.display.scroller, 'dragenter', i.enter),
                    a(e.display.scroller, 'dragover', i.over),
                    a(e.display.scroller, 'dragleave', i.leave),
                    a(e.display.scroller, 'drop', i.drop)
            }
        }
        function pd(e) {
            e.options.lineWrapping
                ? (le(e.display.wrapper, 'CodeMirror-wrap'),
                  (e.display.sizer.style.minWidth = ''),
                  (e.display.sizerWidth = null))
                : (V(e.display.wrapper, 'CodeMirror-wrap'), lo(e)),
                yo(e),
                Dt(e),
                Sn(e),
                setTimeout(function () {
                    return Vr(e)
                }, 100)
        }
        function nt(e, t) {
            var n = this
            if (!(this instanceof nt)) return new nt(e, t)
            ;(this.options = t = t ? fe(t) : {}), fe(Jl, t, !1)
            var r = t.value
            typeof r == 'string'
                ? (r = new qt(r, t.mode, null, t.lineSeparator, t.direction))
                : t.mode && (r.modeOption = t.mode),
                (this.doc = r)
            var i = new nt.inputStyles[t.inputStyle](this),
                a = (this.display = new Lf(e, r, i, t))
            ;(a.wrapper.CodeMirror = this),
                Vl(this),
                t.lineWrapping && (this.display.wrapper.className += ' CodeMirror-wrap'),
                tl(this),
                (this.state = {
                    keyMaps: [],
                    overlays: [],
                    modeGen: 0,
                    overwrite: !1,
                    delayingBlurEvent: !1,
                    focused: !1,
                    suppressEdits: !1,
                    pasteIncoming: -1,
                    cutIncoming: -1,
                    selectingText: !1,
                    draggingText: !1,
                    highlight: new pe(),
                    keySeq: null,
                    specialChars: null,
                }),
                t.autofocus && !M && a.input.focus(),
                s &&
                    g < 11 &&
                    setTimeout(function () {
                        return n.display.input.reset(!0)
                    }, 20),
                hd(this),
                $f(),
                Fr(this),
                (this.curOp.forceUpdate = !0),
                fl(this, r),
                (t.autofocus && !M) || this.hasFocus()
                    ? setTimeout(function () {
                          n.hasFocus() && !n.state.focused && wo(n)
                      }, 20)
                    : Yr(this)
            for (var l in Ci) Ci.hasOwnProperty(l) && Ci[l](this, t[l], ln)
            il(this), t.finishInit && t.finishInit(this)
            for (var u = 0; u < Wo.length; ++u) Wo[u](this)
            Nr(this),
                h &&
                    t.lineWrapping &&
                    getComputedStyle(a.lineDiv).textRendering == 'optimizelegibility' &&
                    (a.lineDiv.style.textRendering = 'auto')
        }
        ;(nt.defaults = Jl), (nt.optionHandlers = Ci)
        function hd(e) {
            var t = e.display
            ge(t.scroller, 'mousedown', ht(e, Zl)),
                s && g < 11
                    ? ge(
                          t.scroller,
                          'dblclick',
                          ht(e, function (f) {
                              if (!ot(e, f)) {
                                  var m = Ar(e, f)
                                  if (!(!m || Bo(e, f) || sr(e.display, f))) {
                                      kt(f)
                                      var A = e.findWordAt(m)
                                      xi(e.doc, A.anchor, A.head)
                                  }
                              }
                          }),
                      )
                    : ge(t.scroller, 'dblclick', function (f) {
                          return ot(e, f) || kt(f)
                      }),
                ge(t.scroller, 'contextmenu', function (f) {
                    return Ql(e, f)
                }),
                ge(t.input.getField(), 'contextmenu', function (f) {
                    t.scroller.contains(f.target) || Ql(e, f)
                })
            var n,
                r = { end: 0 }
            function i() {
                t.activeTouch &&
                    ((n = setTimeout(function () {
                        return (t.activeTouch = null)
                    }, 1e3)),
                    (r = t.activeTouch),
                    (r.end = +new Date()))
            }
            function a(f) {
                if (f.touches.length != 1) return !1
                var m = f.touches[0]
                return m.radiusX <= 1 && m.radiusY <= 1
            }
            function l(f, m) {
                if (m.left == null) return !0
                var A = m.left - f.left,
                    P = m.top - f.top
                return A * A + P * P > 20 * 20
            }
            ge(t.scroller, 'touchstart', function (f) {
                if (!ot(e, f) && !a(f) && !Bo(e, f)) {
                    t.input.ensurePolled(), clearTimeout(n)
                    var m = +new Date()
                    ;(t.activeTouch = { start: m, moved: !1, prev: m - r.end <= 300 ? r : null }),
                        f.touches.length == 1 &&
                            ((t.activeTouch.left = f.touches[0].pageX), (t.activeTouch.top = f.touches[0].pageY))
                }
            }),
                ge(t.scroller, 'touchmove', function () {
                    t.activeTouch && (t.activeTouch.moved = !0)
                }),
                ge(t.scroller, 'touchend', function (f) {
                    var m = t.activeTouch
                    if (m && !sr(t, f) && m.left != null && !m.moved && new Date() - m.start < 300) {
                        var A = e.coordsChar(t.activeTouch, 'page'),
                            P
                        !m.prev || l(m, m.prev)
                            ? (P = new Ye(A, A))
                            : !m.prev.prev || l(m, m.prev.prev)
                              ? (P = e.findWordAt(A))
                              : (P = new Ye(G(A.line, 0), Pe(e.doc, G(A.line + 1, 0)))),
                            e.setSelection(P.anchor, P.head),
                            e.focus(),
                            kt(f)
                    }
                    i()
                }),
                ge(t.scroller, 'touchcancel', i),
                ge(t.scroller, 'scroll', function () {
                    t.scroller.clientHeight &&
                        (Cn(e, t.scroller.scrollTop), qr(e, t.scroller.scrollLeft, !0), tt(e, 'scroll', e))
                }),
                ge(t.scroller, 'mousewheel', function (f) {
                    return ll(e, f)
                }),
                ge(t.scroller, 'DOMMouseScroll', function (f) {
                    return ll(e, f)
                }),
                ge(t.wrapper, 'scroll', function () {
                    return (t.wrapper.scrollTop = t.wrapper.scrollLeft = 0)
                }),
                (t.dragFunctions = {
                    enter: function (f) {
                        ot(e, f) || rr(f)
                    },
                    over: function (f) {
                        ot(e, f) || (Uf(e, f), rr(f))
                    },
                    start: function (f) {
                        return Wf(e, f)
                    },
                    drop: ht(e, Bf),
                    leave: function (f) {
                        ot(e, f) || Fl(e)
                    },
                })
            var u = t.input.getField()
            ge(u, 'keyup', function (f) {
                return Kl.call(e, f)
            }),
                ge(u, 'keydown', ht(e, $l)),
                ge(u, 'keypress', ht(e, Gl)),
                ge(u, 'focus', function (f) {
                    return wo(e, f)
                }),
                ge(u, 'blur', function (f) {
                    return Yr(e, f)
                })
        }
        var Wo = []
        nt.defineInitHook = function (e) {
            return Wo.push(e)
        }
        function $n(e, t, n, r) {
            var i = e.doc,
                a
            n == null && (n = 'add'), n == 'smart' && (i.mode.indent ? (a = yn(e, t).state) : (n = 'prev'))
            var l = e.options.tabSize,
                u = ze(i, t),
                f = xe(u.text, null, l)
            u.stateAfter && (u.stateAfter = null)
            var m = u.text.match(/^\s*/)[0],
                A
            if (!r && !/\S/.test(u.text)) (A = 0), (n = 'not')
            else if (n == 'smart' && ((A = i.mode.indent(a, u.text.slice(m.length), u.text)), A == Me || A > 150)) {
                if (!r) return
                n = 'prev'
            }
            n == 'prev'
                ? t > i.first
                    ? (A = xe(ze(i, t - 1).text, null, l))
                    : (A = 0)
                : n == 'add'
                  ? (A = f + e.options.indentUnit)
                  : n == 'subtract'
                    ? (A = f - e.options.indentUnit)
                    : typeof n == 'number' && (A = f + n),
                (A = Math.max(0, A))
            var P = '',
                ee = 0
            if (e.options.indentWithTabs) for (var Q = Math.floor(A / l); Q; --Q) (ee += l), (P += '	')
            if ((ee < A && (P += $e(A - ee)), P != m))
                return rn(i, P, G(t, 0), G(t, m.length), '+input'), (u.stateAfter = null), !0
            for (var ae = 0; ae < i.sel.ranges.length; ae++) {
                var ue = i.sel.ranges[ae]
                if (ue.head.line == t && ue.head.ch < m.length) {
                    var he = G(t, m.length)
                    No(i, ae, new Ye(he, he))
                    break
                }
            }
        }
        var Zt = null
        function Ei(e) {
            Zt = e
        }
        function Uo(e, t, n, r, i) {
            var a = e.doc
            ;(e.display.shift = !1), r || (r = a.sel)
            var l = +new Date() - 200,
                u = i == 'paste' || e.state.pasteIncoming > l,
                f = vn(t),
                m = null
            if (u && r.ranges.length > 1)
                if (
                    Zt &&
                    Zt.text.join(`
`) == t
                ) {
                    if (r.ranges.length % Zt.text.length == 0) {
                        m = []
                        for (var A = 0; A < Zt.text.length; A++) m.push(a.splitLines(Zt.text[A]))
                    }
                } else
                    f.length == r.ranges.length &&
                        e.options.pasteLinesPerSelection &&
                        (m = Z(f, function (ve) {
                            return [ve]
                        }))
            for (var P = e.curOp.updateInput, ee = r.ranges.length - 1; ee >= 0; ee--) {
                var Q = r.ranges[ee],
                    ae = Q.from(),
                    ue = Q.to()
                Q.empty() &&
                    (n && n > 0
                        ? (ae = G(ae.line, ae.ch - n))
                        : e.state.overwrite && !u
                          ? (ue = G(ue.line, Math.min(ze(a, ue.line).text.length, ue.ch + O(f).length)))
                          : u &&
                            Zt &&
                            Zt.lineWise &&
                            Zt.text.join(`
`) ==
                                f.join(`
`) &&
                            (ae = ue = G(ae.line, 0)))
                var he = {
                    from: ae,
                    to: ue,
                    text: m ? m[ee % m.length] : f,
                    origin: i || (u ? 'paste' : e.state.cutIncoming > l ? 'cut' : '+input'),
                }
                tn(e.doc, he), pt(e, 'inputRead', e, he)
            }
            t && !u && ts(e, t),
                Qr(e),
                e.curOp.updateInput < 2 && (e.curOp.updateInput = P),
                (e.curOp.typing = !0),
                (e.state.pasteIncoming = e.state.cutIncoming = -1)
        }
        function es(e, t) {
            var n = e.clipboardData && e.clipboardData.getData('Text')
            if (n)
                return (
                    e.preventDefault(),
                    !t.isReadOnly() &&
                        !t.options.disableInput &&
                        t.hasFocus() &&
                        Pt(t, function () {
                            return Uo(t, n, 0, null, 'paste')
                        }),
                    !0
                )
        }
        function ts(e, t) {
            if (!(!e.options.electricChars || !e.options.smartIndent))
                for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
                    var i = n.ranges[r]
                    if (!(i.head.ch > 100 || (r && n.ranges[r - 1].head.line == i.head.line))) {
                        var a = e.getModeAt(i.head),
                            l = !1
                        if (a.electricChars) {
                            for (var u = 0; u < a.electricChars.length; u++)
                                if (t.indexOf(a.electricChars.charAt(u)) > -1) {
                                    l = $n(e, i.head.line, 'smart')
                                    break
                                }
                        } else
                            a.electricInput &&
                                a.electricInput.test(ze(e.doc, i.head.line).text.slice(0, i.head.ch)) &&
                                (l = $n(e, i.head.line, 'smart'))
                        l && pt(e, 'electricInput', e, i.head.line)
                    }
                }
        }
        function rs(e) {
            for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
                var i = e.doc.sel.ranges[r].head.line,
                    a = { anchor: G(i, 0), head: G(i + 1, 0) }
                n.push(a), t.push(e.getRange(a.anchor, a.head))
            }
            return { text: t, ranges: n }
        }
        function $o(e, t, n, r) {
            e.setAttribute('autocorrect', n ? 'on' : 'off'),
                e.setAttribute('autocapitalize', r ? 'on' : 'off'),
                e.setAttribute('spellcheck', !!t)
        }
        function ns() {
            var e = x(
                    'textarea',
                    null,
                    null,
                    'position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none',
                ),
                t = x('div', [e], null, 'overflow: hidden; position: relative; width: 3px; height: 0px;')
            return (
                h ? (e.style.width = '1000px') : e.setAttribute('wrap', 'off'),
                y && (e.style.border = '1px solid black'),
                t
            )
        }
        function gd(e) {
            var t = e.optionHandlers,
                n = (e.helpers = {})
            ;(e.prototype = {
                constructor: e,
                focus: function () {
                    de(this).focus(), this.display.input.focus()
                },
                setOption: function (r, i) {
                    var a = this.options,
                        l = a[r]
                    ;(a[r] == i && r != 'mode') ||
                        ((a[r] = i),
                        t.hasOwnProperty(r) && ht(this, t[r])(this, i, l),
                        tt(this, 'optionChange', this, r))
                },
                getOption: function (r) {
                    return this.options[r]
                },
                getDoc: function () {
                    return this.doc
                },
                addKeyMap: function (r, i) {
                    this.state.keyMaps[i ? 'push' : 'unshift'](Ti(r))
                },
                removeKeyMap: function (r) {
                    for (var i = this.state.keyMaps, a = 0; a < i.length; ++a)
                        if (i[a] == r || i[a].name == r) return i.splice(a, 1), !0
                },
                addOverlay: Ct(function (r, i) {
                    var a = r.token ? r : e.getMode(this.options, r)
                    if (a.startState) throw new Error('Overlays may not be stateful.')
                    me(
                        this.state.overlays,
                        { mode: a, modeSpec: r, opaque: i && i.opaque, priority: (i && i.priority) || 0 },
                        function (l) {
                            return l.priority
                        },
                    ),
                        this.state.modeGen++,
                        Dt(this)
                }),
                removeOverlay: Ct(function (r) {
                    for (var i = this.state.overlays, a = 0; a < i.length; ++a) {
                        var l = i[a].modeSpec
                        if (l == r || (typeof r == 'string' && l.name == r)) {
                            i.splice(a, 1), this.state.modeGen++, Dt(this)
                            return
                        }
                    }
                }),
                indentLine: Ct(function (r, i, a) {
                    typeof i != 'string' &&
                        typeof i != 'number' &&
                        (i == null ? (i = this.options.smartIndent ? 'smart' : 'prev') : (i = i ? 'add' : 'subtract')),
                        L(this.doc, r) && $n(this, r, i, a)
                }),
                indentSelection: Ct(function (r) {
                    for (var i = this.doc.sel.ranges, a = -1, l = 0; l < i.length; l++) {
                        var u = i[l]
                        if (u.empty())
                            u.head.line > a &&
                                ($n(this, u.head.line, r, !0),
                                (a = u.head.line),
                                l == this.doc.sel.primIndex && Qr(this))
                        else {
                            var f = u.from(),
                                m = u.to(),
                                A = Math.max(a, f.line)
                            a = Math.min(this.lastLine(), m.line - (m.ch ? 0 : 1)) + 1
                            for (var P = A; P < a; ++P) $n(this, P, r)
                            var ee = this.doc.sel.ranges
                            f.ch == 0 &&
                                i.length == ee.length &&
                                ee[l].from().ch > 0 &&
                                No(this.doc, l, new Ye(f, ee[l].to()), Fe)
                        }
                    }
                }),
                getTokenAt: function (r, i) {
                    return pa(this, r, i)
                },
                getLineTokens: function (r, i) {
                    return pa(this, G(r), i, !0)
                },
                getTokenTypeAt: function (r) {
                    r = Pe(this.doc, r)
                    var i = ca(this, ze(this.doc, r.line)),
                        a = 0,
                        l = (i.length - 1) / 2,
                        u = r.ch,
                        f
                    if (u == 0) f = i[2]
                    else
                        for (;;) {
                            var m = (a + l) >> 1
                            if ((m ? i[m * 2 - 1] : 0) >= u) l = m
                            else if (i[m * 2 + 1] < u) a = m + 1
                            else {
                                f = i[m * 2 + 2]
                                break
                            }
                        }
                    var A = f ? f.indexOf('overlay ') : -1
                    return A < 0 ? f : A == 0 ? null : f.slice(0, A - 1)
                },
                getModeAt: function (r) {
                    var i = this.doc.mode
                    return i.innerMode ? e.innerMode(i, this.getTokenAt(r).state).mode : i
                },
                getHelper: function (r, i) {
                    return this.getHelpers(r, i)[0]
                },
                getHelpers: function (r, i) {
                    var a = []
                    if (!n.hasOwnProperty(i)) return a
                    var l = n[i],
                        u = this.getModeAt(r)
                    if (typeof u[i] == 'string') l[u[i]] && a.push(l[u[i]])
                    else if (u[i])
                        for (var f = 0; f < u[i].length; f++) {
                            var m = l[u[i][f]]
                            m && a.push(m)
                        }
                    else u.helperType && l[u.helperType] ? a.push(l[u.helperType]) : l[u.name] && a.push(l[u.name])
                    for (var A = 0; A < l._global.length; A++) {
                        var P = l._global[A]
                        P.pred(u, this) && De(a, P.val) == -1 && a.push(P.val)
                    }
                    return a
                },
                getStateAfter: function (r, i) {
                    var a = this.doc
                    return (r = Rt(a, r ?? a.first + a.size - 1)), yn(this, r + 1, i).state
                },
                cursorCoords: function (r, i) {
                    var a,
                        l = this.doc.sel.primary()
                    return (
                        r == null
                            ? (a = l.head)
                            : typeof r == 'object'
                              ? (a = Pe(this.doc, r))
                              : (a = r ? l.from() : l.to()),
                        Kt(this, a, i || 'page')
                    )
                },
                charCoords: function (r, i) {
                    return ci(this, Pe(this.doc, r), i || 'page')
                },
                coordsChar: function (r, i) {
                    return (r = Ba(this, r, i || 'page')), go(this, r.left, r.top)
                },
                lineAtHeight: function (r, i) {
                    return (
                        (r = Ba(this, { top: r, left: 0 }, i || 'page').top), Qt(this.doc, r + this.display.viewOffset)
                    )
                },
                heightAtLine: function (r, i, a) {
                    var l = !1,
                        u
                    if (typeof r == 'number') {
                        var f = this.doc.first + this.doc.size - 1
                        r < this.doc.first ? (r = this.doc.first) : r > f && ((r = f), (l = !0)), (u = ze(this.doc, r))
                    } else u = r
                    return ui(this, u, { top: 0, left: 0 }, i || 'page', a || l).top + (l ? this.doc.height - lr(u) : 0)
                },
                defaultTextHeight: function () {
                    return Zr(this.display)
                },
                defaultCharWidth: function () {
                    return Xr(this.display)
                },
                getViewport: function () {
                    return { from: this.display.viewFrom, to: this.display.viewTo }
                },
                addWidget: function (r, i, a, l, u) {
                    var f = this.display
                    r = Kt(this, Pe(this.doc, r))
                    var m = r.bottom,
                        A = r.left
                    if (
                        ((i.style.position = 'absolute'),
                        i.setAttribute('cm-ignore-events', 'true'),
                        this.display.input.setUneditable(i),
                        f.sizer.appendChild(i),
                        l == 'over')
                    )
                        m = r.top
                    else if (l == 'above' || l == 'near') {
                        var P = Math.max(f.wrapper.clientHeight, this.doc.height),
                            ee = Math.max(f.sizer.clientWidth, f.lineSpace.clientWidth)
                        ;(l == 'above' || r.bottom + i.offsetHeight > P) && r.top > i.offsetHeight
                            ? (m = r.top - i.offsetHeight)
                            : r.bottom + i.offsetHeight <= P && (m = r.bottom),
                            A + i.offsetWidth > ee && (A = ee - i.offsetWidth)
                    }
                    ;(i.style.top = m + 'px'),
                        (i.style.left = i.style.right = ''),
                        u == 'right'
                            ? ((A = f.sizer.clientWidth - i.offsetWidth), (i.style.right = '0px'))
                            : (u == 'left' ? (A = 0) : u == 'middle' && (A = (f.sizer.clientWidth - i.offsetWidth) / 2),
                              (i.style.left = A + 'px')),
                        a && df(this, { left: A, top: m, right: A + i.offsetWidth, bottom: m + i.offsetHeight })
                },
                triggerOnKeyDown: Ct($l),
                triggerOnKeyPress: Ct(Gl),
                triggerOnKeyUp: Kl,
                triggerOnMouseDown: Ct(Zl),
                execCommand: function (r) {
                    if (Hn.hasOwnProperty(r)) return Hn[r].call(null, this)
                },
                triggerElectric: Ct(function (r) {
                    ts(this, r)
                }),
                findPosH: function (r, i, a, l) {
                    var u = 1
                    i < 0 && ((u = -1), (i = -i))
                    for (var f = Pe(this.doc, r), m = 0; m < i && ((f = Ko(this.doc, f, u, a, l)), !f.hitSide); ++m);
                    return f
                },
                moveH: Ct(function (r, i) {
                    var a = this
                    this.extendSelectionsBy(function (l) {
                        return a.display.shift || a.doc.extend || l.empty()
                            ? Ko(a.doc, l.head, r, i, a.options.rtlMoveVisually)
                            : r < 0
                              ? l.from()
                              : l.to()
                    }, Le)
                }),
                deleteH: Ct(function (r, i) {
                    var a = this.doc.sel,
                        l = this.doc
                    a.somethingSelected()
                        ? l.replaceSelection('', null, '+delete')
                        : an(this, function (u) {
                              var f = Ko(l, u.head, r, i, !1)
                              return r < 0 ? { from: f, to: u.head } : { from: u.head, to: f }
                          })
                }),
                findPosV: function (r, i, a, l) {
                    var u = 1,
                        f = l
                    i < 0 && ((u = -1), (i = -i))
                    for (var m = Pe(this.doc, r), A = 0; A < i; ++A) {
                        var P = Kt(this, m, 'div')
                        if ((f == null ? (f = P.left) : (P.left = f), (m = is(this, P, u, a)), m.hitSide)) break
                    }
                    return m
                },
                moveV: Ct(function (r, i) {
                    var a = this,
                        l = this.doc,
                        u = [],
                        f = !this.display.shift && !l.extend && l.sel.somethingSelected()
                    if (
                        (l.extendSelectionsBy(function (A) {
                            if (f) return r < 0 ? A.from() : A.to()
                            var P = Kt(a, A.head, 'div')
                            A.goalColumn != null && (P.left = A.goalColumn), u.push(P.left)
                            var ee = is(a, P, r, i)
                            return i == 'page' && A == l.sel.primary() && To(a, ci(a, ee, 'div').top - P.top), ee
                        }, Le),
                        u.length)
                    )
                        for (var m = 0; m < l.sel.ranges.length; m++) l.sel.ranges[m].goalColumn = u[m]
                }),
                findWordAt: function (r) {
                    var i = this.doc,
                        a = ze(i, r.line).text,
                        l = r.ch,
                        u = r.ch
                    if (a) {
                        var f = this.getHelper(r, 'wordChars')
                        ;(r.sticky == 'before' || u == a.length) && l ? --l : ++u
                        for (
                            var m = a.charAt(l),
                                A = je(m, f)
                                    ? function (P) {
                                          return je(P, f)
                                      }
                                    : /\s/.test(m)
                                      ? function (P) {
                                            return /\s/.test(P)
                                        }
                                      : function (P) {
                                            return !/\s/.test(P) && !je(P)
                                        };
                            l > 0 && A(a.charAt(l - 1));

                        )
                            --l
                        for (; u < a.length && A(a.charAt(u)); ) ++u
                    }
                    return new Ye(G(r.line, l), G(r.line, u))
                },
                toggleOverwrite: function (r) {
                    ;(r != null && r == this.state.overwrite) ||
                        ((this.state.overwrite = !this.state.overwrite)
                            ? le(this.display.cursorDiv, 'CodeMirror-overwrite')
                            : V(this.display.cursorDiv, 'CodeMirror-overwrite'),
                        tt(this, 'overwriteToggle', this, this.state.overwrite))
                },
                hasFocus: function () {
                    return this.display.input.getField() == W(T(this))
                },
                isReadOnly: function () {
                    return !!(this.options.readOnly || this.doc.cantEdit)
                },
                scrollTo: Ct(function (r, i) {
                    Ln(this, r, i)
                }),
                getScrollInfo: function () {
                    var r = this.display.scroller
                    return {
                        left: r.scrollLeft,
                        top: r.scrollTop,
                        height: r.scrollHeight - Jt(this) - this.display.barHeight,
                        width: r.scrollWidth - Jt(this) - this.display.barWidth,
                        clientHeight: co(this),
                        clientWidth: zr(this),
                    }
                },
                scrollIntoView: Ct(function (r, i) {
                    r == null
                        ? ((r = { from: this.doc.sel.primary().head, to: null }),
                          i == null && (i = this.options.cursorScrollMargin))
                        : typeof r == 'number'
                          ? (r = { from: G(r, 0), to: null })
                          : r.from == null && (r = { from: r, to: null }),
                        r.to || (r.to = r.from),
                        (r.margin = i || 0),
                        r.from.line != null ? pf(this, r) : Qa(this, r.from, r.to, r.margin)
                }),
                setSize: Ct(function (r, i) {
                    var a = this,
                        l = function (f) {
                            return typeof f == 'number' || /^\d+$/.test(String(f)) ? f + 'px' : f
                        }
                    r != null && (this.display.wrapper.style.width = l(r)),
                        i != null && (this.display.wrapper.style.height = l(i)),
                        this.options.lineWrapping && ja(this)
                    var u = this.display.viewFrom
                    this.doc.iter(u, this.display.viewTo, function (f) {
                        if (f.widgets) {
                            for (var m = 0; m < f.widgets.length; m++)
                                if (f.widgets[m].noHScroll) {
                                    br(a, u, 'widget')
                                    break
                                }
                        }
                        ++u
                    }),
                        (this.curOp.forceUpdate = !0),
                        tt(this, 'refresh', this)
                }),
                operation: function (r) {
                    return Pt(this, r)
                },
                startOperation: function () {
                    return Fr(this)
                },
                endOperation: function () {
                    return Nr(this)
                },
                refresh: Ct(function () {
                    var r = this.display.cachedTextHeight
                    Dt(this),
                        (this.curOp.forceUpdate = !0),
                        Sn(this),
                        Ln(this, this.doc.scrollLeft, this.doc.scrollTop),
                        Eo(this.display),
                        (r == null || Math.abs(r - Zr(this.display)) > 0.5 || this.options.lineWrapping) && yo(this),
                        tt(this, 'refresh', this)
                }),
                swapDoc: Ct(function (r) {
                    var i = this.doc
                    return (
                        (i.cm = null),
                        this.state.selectingText && this.state.selectingText(),
                        fl(this, r),
                        Sn(this),
                        this.display.input.reset(),
                        Ln(this, r.scrollLeft, r.scrollTop),
                        (this.curOp.forceScroll = !0),
                        pt(this, 'swapDoc', this, i),
                        i
                    )
                }),
                phrase: function (r) {
                    var i = this.options.phrases
                    return i && Object.prototype.hasOwnProperty.call(i, r) ? i[r] : r
                },
                getInputField: function () {
                    return this.display.input.getField()
                },
                getWrapperElement: function () {
                    return this.display.wrapper
                },
                getScrollerElement: function () {
                    return this.display.scroller
                },
                getGutterElement: function () {
                    return this.display.gutters
                },
            }),
                Lt(e),
                (e.registerHelper = function (r, i, a) {
                    n.hasOwnProperty(r) || (n[r] = e[r] = { _global: [] }), (n[r][i] = a)
                }),
                (e.registerGlobalHelper = function (r, i, a, l) {
                    e.registerHelper(r, i, l), n[r]._global.push({ pred: a, val: l })
                })
        }
        function Ko(e, t, n, r, i) {
            var a = t,
                l = n,
                u = ze(e, t.line),
                f = i && e.direction == 'rtl' ? -n : n
            function m() {
                var _e = t.line + f
                return _e < e.first || _e >= e.first + e.size ? !1 : ((t = new G(_e, t.ch, t.sticky)), (u = ze(e, _e)))
            }
            function A(_e) {
                var be
                if (r == 'codepoint') {
                    var Te = u.text.charCodeAt(t.ch + (n > 0 ? 0 : -1))
                    if (isNaN(Te)) be = null
                    else {
                        var Ie = n > 0 ? Te >= 55296 && Te < 56320 : Te >= 56320 && Te < 57343
                        be = new G(t.line, Math.max(0, Math.min(u.text.length, t.ch + n * (Ie ? 2 : 1))), -n)
                    }
                } else i ? (be = Yf(e.cm, u, t, n)) : (be = Po(u, t, n))
                if (be == null)
                    if (!_e && m()) t = jo(i, e.cm, u, t.line, f)
                    else return !1
                else t = be
                return !0
            }
            if (r == 'char' || r == 'codepoint') A()
            else if (r == 'column') A(!0)
            else if (r == 'word' || r == 'group')
                for (
                    var P = null, ee = r == 'group', Q = e.cm && e.cm.getHelper(t, 'wordChars'), ae = !0;
                    !(n < 0 && !A(!ae));
                    ae = !1
                ) {
                    var ue =
                            u.text.charAt(t.ch) ||
                            `
`,
                        he = je(ue, Q)
                            ? 'w'
                            : ee &&
                                ue ==
                                    `
`
                              ? 'n'
                              : !ee || /\s/.test(ue)
                                ? null
                                : 'p'
                    if ((ee && !ae && !he && (he = 's'), P && P != he)) {
                        n < 0 && ((n = 1), A(), (t.sticky = 'after'))
                        break
                    }
                    if ((he && (P = he), n > 0 && !A(!ae))) break
                }
            var ve = ki(e, t, a, l, !0)
            return Oe(a, ve) && (ve.hitSide = !0), ve
        }
        function is(e, t, n, r) {
            var i = e.doc,
                a = t.left,
                l
            if (r == 'page') {
                var u = Math.min(
                        e.display.wrapper.clientHeight,
                        de(e).innerHeight || i(e).documentElement.clientHeight,
                    ),
                    f = Math.max(u - 0.5 * Zr(e.display), 3)
                l = (n > 0 ? t.bottom : t.top) + n * f
            } else r == 'line' && (l = n > 0 ? t.bottom + 3 : t.top - 3)
            for (var m; (m = go(e, a, l)), !!m.outside; ) {
                if (n < 0 ? l <= 0 : l >= i.height) {
                    m.hitSide = !0
                    break
                }
                l += n * 5
            }
            return m
        }
        var Qe = function (e) {
            ;(this.cm = e),
                (this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null),
                (this.polling = new pe()),
                (this.composing = null),
                (this.gracePeriod = !1),
                (this.readDOMTimeout = null)
        }
        ;(Qe.prototype.init = function (e) {
            var t = this,
                n = this,
                r = n.cm,
                i = (n.div = e.lineDiv)
            ;(i.contentEditable = !0), $o(i, r.options.spellcheck, r.options.autocorrect, r.options.autocapitalize)
            function a(u) {
                for (var f = u.target; f; f = f.parentNode) {
                    if (f == i) return !0
                    if (/\bCodeMirror-(?:line)?widget\b/.test(f.className)) break
                }
                return !1
            }
            ge(i, 'paste', function (u) {
                !a(u) ||
                    ot(r, u) ||
                    es(u, r) ||
                    (g <= 11 &&
                        setTimeout(
                            ht(r, function () {
                                return t.updateFromDOM()
                            }),
                            20,
                        ))
            }),
                ge(i, 'compositionstart', function (u) {
                    t.composing = { data: u.data, done: !1 }
                }),
                ge(i, 'compositionupdate', function (u) {
                    t.composing || (t.composing = { data: u.data, done: !1 })
                }),
                ge(i, 'compositionend', function (u) {
                    t.composing && (u.data != t.composing.data && t.readFromDOMSoon(), (t.composing.done = !0))
                }),
                ge(i, 'touchstart', function () {
                    return n.forceCompositionEnd()
                }),
                ge(i, 'input', function () {
                    t.composing || t.readFromDOMSoon()
                })
            function l(u) {
                if (!(!a(u) || ot(r, u))) {
                    if (r.somethingSelected())
                        Ei({ lineWise: !1, text: r.getSelections() }),
                            u.type == 'cut' && r.replaceSelection('', null, 'cut')
                    else if (r.options.lineWiseCopyCut) {
                        var f = rs(r)
                        Ei({ lineWise: !0, text: f.text }),
                            u.type == 'cut' &&
                                r.operation(function () {
                                    r.setSelections(f.ranges, 0, Fe), r.replaceSelection('', null, 'cut')
                                })
                    } else return
                    if (u.clipboardData) {
                        u.clipboardData.clearData()
                        var m = Zt.text.join(`
`)
                        if ((u.clipboardData.setData('Text', m), u.clipboardData.getData('Text') == m)) {
                            u.preventDefault()
                            return
                        }
                    }
                    var A = ns(),
                        P = A.firstChild
                    $o(P),
                        r.display.lineSpace.insertBefore(A, r.display.lineSpace.firstChild),
                        (P.value = Zt.text.join(`
`))
                    var ee = W(i.ownerDocument)
                    q(P),
                        setTimeout(function () {
                            r.display.lineSpace.removeChild(A), ee.focus(), ee == i && n.showPrimarySelection()
                        }, 50)
                }
            }
            ge(i, 'copy', l), ge(i, 'cut', l)
        }),
            (Qe.prototype.screenReaderLabelChanged = function (e) {
                e ? this.div.setAttribute('aria-label', e) : this.div.removeAttribute('aria-label')
            }),
            (Qe.prototype.prepareSelection = function () {
                var e = Za(this.cm, !1)
                return (e.focus = W(this.div.ownerDocument) == this.div), e
            }),
            (Qe.prototype.showSelection = function (e, t) {
                !e ||
                    !this.cm.display.view.length ||
                    ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e))
            }),
            (Qe.prototype.getSelection = function () {
                return this.cm.display.wrapper.ownerDocument.getSelection()
            }),
            (Qe.prototype.showPrimarySelection = function () {
                var e = this.getSelection(),
                    t = this.cm,
                    n = t.doc.sel.primary(),
                    r = n.from(),
                    i = n.to()
                if (
                    t.display.viewTo == t.display.viewFrom ||
                    r.line >= t.display.viewTo ||
                    i.line < t.display.viewFrom
                ) {
                    e.removeAllRanges()
                    return
                }
                var a = zi(t, e.anchorNode, e.anchorOffset),
                    l = zi(t, e.focusNode, e.focusOffset)
                if (!(a && !a.bad && l && !l.bad && ie(ft(a, l), r) == 0 && ie(Ze(a, l), i) == 0)) {
                    var u = t.display.view,
                        f = (r.line >= t.display.viewFrom && os(t, r)) || { node: u[0].measure.map[2], offset: 0 },
                        m = i.line < t.display.viewTo && os(t, i)
                    if (!m) {
                        var A = u[u.length - 1].measure,
                            P = A.maps ? A.maps[A.maps.length - 1] : A.map
                        m = { node: P[P.length - 1], offset: P[P.length - 2] - P[P.length - 3] }
                    }
                    if (!f || !m) {
                        e.removeAllRanges()
                        return
                    }
                    var ee = e.rangeCount && e.getRangeAt(0),
                        Q
                    try {
                        Q = Y(f.node, f.offset, m.offset, m.node)
                    } catch {}
                    Q &&
                        (!v && t.state.focused
                            ? (e.collapse(f.node, f.offset), Q.collapsed || (e.removeAllRanges(), e.addRange(Q)))
                            : (e.removeAllRanges(), e.addRange(Q)),
                        ee && e.anchorNode == null ? e.addRange(ee) : v && this.startGracePeriod()),
                        this.rememberSelection()
                }
            }),
            (Qe.prototype.startGracePeriod = function () {
                var e = this
                clearTimeout(this.gracePeriod),
                    (this.gracePeriod = setTimeout(function () {
                        ;(e.gracePeriod = !1),
                            e.selectionChanged() &&
                                e.cm.operation(function () {
                                    return (e.cm.curOp.selectionChanged = !0)
                                })
                    }, 20))
            }),
            (Qe.prototype.showMultipleSelections = function (e) {
                J(this.cm.display.cursorDiv, e.cursors), J(this.cm.display.selectionDiv, e.selection)
            }),
            (Qe.prototype.rememberSelection = function () {
                var e = this.getSelection()
                ;(this.lastAnchorNode = e.anchorNode),
                    (this.lastAnchorOffset = e.anchorOffset),
                    (this.lastFocusNode = e.focusNode),
                    (this.lastFocusOffset = e.focusOffset)
            }),
            (Qe.prototype.selectionInEditor = function () {
                var e = this.getSelection()
                if (!e.rangeCount) return !1
                var t = e.getRangeAt(0).commonAncestorContainer
                return I(this.div, t)
            }),
            (Qe.prototype.focus = function () {
                this.cm.options.readOnly != 'nocursor' &&
                    ((!this.selectionInEditor() || W(this.div.ownerDocument) != this.div) &&
                        this.showSelection(this.prepareSelection(), !0),
                    this.div.focus())
            }),
            (Qe.prototype.blur = function () {
                this.div.blur()
            }),
            (Qe.prototype.getField = function () {
                return this.div
            }),
            (Qe.prototype.supportsTouch = function () {
                return !0
            }),
            (Qe.prototype.receivedFocus = function () {
                var e = this,
                    t = this
                this.selectionInEditor()
                    ? setTimeout(function () {
                          return e.pollSelection()
                      }, 20)
                    : Pt(this.cm, function () {
                          return (t.cm.curOp.selectionChanged = !0)
                      })
                function n() {
                    t.cm.state.focused && (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, n))
                }
                this.polling.set(this.cm.options.pollInterval, n)
            }),
            (Qe.prototype.selectionChanged = function () {
                var e = this.getSelection()
                return (
                    e.anchorNode != this.lastAnchorNode ||
                    e.anchorOffset != this.lastAnchorOffset ||
                    e.focusNode != this.lastFocusNode ||
                    e.focusOffset != this.lastFocusOffset
                )
            }),
            (Qe.prototype.pollSelection = function () {
                if (!(this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged())) {
                    var e = this.getSelection(),
                        t = this.cm
                    if (H && k && this.cm.display.gutterSpecs.length && md(e.anchorNode)) {
                        this.cm.triggerOnKeyDown({ type: 'keydown', keyCode: 8, preventDefault: Math.abs }),
                            this.blur(),
                            this.focus()
                        return
                    }
                    if (!this.composing) {
                        this.rememberSelection()
                        var n = zi(t, e.anchorNode, e.anchorOffset),
                            r = zi(t, e.focusNode, e.focusOffset)
                        n &&
                            r &&
                            Pt(t, function () {
                                wt(t.doc, xr(n, r), Fe), (n.bad || r.bad) && (t.curOp.selectionChanged = !0)
                            })
                    }
                }
            }),
            (Qe.prototype.pollContent = function () {
                this.readDOMTimeout != null && (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null))
                var e = this.cm,
                    t = e.display,
                    n = e.doc.sel.primary(),
                    r = n.from(),
                    i = n.to()
                if (
                    (r.ch == 0 && r.line > e.firstLine() && (r = G(r.line - 1, ze(e.doc, r.line - 1).length)),
                    i.ch == ze(e.doc, i.line).text.length && i.line < e.lastLine() && (i = G(i.line + 1, 0)),
                    r.line < t.viewFrom || i.line > t.viewTo - 1)
                )
                    return !1
                var a, l, u
                r.line == t.viewFrom || (a = Dr(e, r.line)) == 0
                    ? ((l = Xe(t.view[0].line)), (u = t.view[0].node))
                    : ((l = Xe(t.view[a].line)), (u = t.view[a - 1].node.nextSibling))
                var f = Dr(e, i.line),
                    m,
                    A
                if (
                    (f == t.view.length - 1
                        ? ((m = t.viewTo - 1), (A = t.lineDiv.lastChild))
                        : ((m = Xe(t.view[f + 1].line) - 1), (A = t.view[f + 1].node.previousSibling)),
                    !u)
                )
                    return !1
                for (
                    var P = e.doc.splitLines(vd(e, u, A, l, m)),
                        ee = or(e.doc, G(l, 0), G(m, ze(e.doc, m).text.length));
                    P.length > 1 && ee.length > 1;

                )
                    if (O(P) == O(ee)) P.pop(), ee.pop(), m--
                    else if (P[0] == ee[0]) P.shift(), ee.shift(), l++
                    else break
                for (
                    var Q = 0, ae = 0, ue = P[0], he = ee[0], ve = Math.min(ue.length, he.length);
                    Q < ve && ue.charCodeAt(Q) == he.charCodeAt(Q);

                )
                    ++Q
                for (
                    var _e = O(P),
                        be = O(ee),
                        Te = Math.min(_e.length - (P.length == 1 ? Q : 0), be.length - (ee.length == 1 ? Q : 0));
                    ae < Te && _e.charCodeAt(_e.length - ae - 1) == be.charCodeAt(be.length - ae - 1);

                )
                    ++ae
                if (P.length == 1 && ee.length == 1 && l == r.line)
                    for (; Q && Q > r.ch && _e.charCodeAt(_e.length - ae - 1) == be.charCodeAt(be.length - ae - 1); )
                        Q--, ae++
                ;(P[P.length - 1] = _e.slice(0, _e.length - ae).replace(/^\u200b+/, '')),
                    (P[0] = P[0].slice(Q).replace(/\u200b+$/, ''))
                var Ie = G(l, Q),
                    qe = G(m, ee.length ? O(ee).length - ae : 0)
                if (P.length > 1 || P[0] || ie(Ie, qe)) return rn(e.doc, P, Ie, qe, '+input'), !0
            }),
            (Qe.prototype.ensurePolled = function () {
                this.forceCompositionEnd()
            }),
            (Qe.prototype.reset = function () {
                this.forceCompositionEnd()
            }),
            (Qe.prototype.forceCompositionEnd = function () {
                this.composing &&
                    (clearTimeout(this.readDOMTimeout),
                    (this.composing = null),
                    this.updateFromDOM(),
                    this.div.blur(),
                    this.div.focus())
            }),
            (Qe.prototype.readFromDOMSoon = function () {
                var e = this
                this.readDOMTimeout == null &&
                    (this.readDOMTimeout = setTimeout(function () {
                        if (((e.readDOMTimeout = null), e.composing))
                            if (e.composing.done) e.composing = null
                            else return
                        e.updateFromDOM()
                    }, 80))
            }),
            (Qe.prototype.updateFromDOM = function () {
                var e = this
                ;(this.cm.isReadOnly() || !this.pollContent()) &&
                    Pt(this.cm, function () {
                        return Dt(e.cm)
                    })
            }),
            (Qe.prototype.setUneditable = function (e) {
                e.contentEditable = 'false'
            }),
            (Qe.prototype.onKeyPress = function (e) {
                e.charCode == 0 ||
                    this.composing ||
                    (e.preventDefault(),
                    this.cm.isReadOnly() ||
                        ht(this.cm, Uo)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0))
            }),
            (Qe.prototype.readOnlyChanged = function (e) {
                this.div.contentEditable = String(e != 'nocursor')
            }),
            (Qe.prototype.onContextMenu = function () {}),
            (Qe.prototype.resetPosition = function () {}),
            (Qe.prototype.needsContentAttribute = !0)
        function os(e, t) {
            var n = fo(e, t.line)
            if (!n || n.hidden) return null
            var r = ze(e.doc, t.line),
                i = Ia(n, r, t.line),
                a = xt(r, e.doc.direction),
                l = 'left'
            if (a) {
                var u = et(a, t.ch)
                l = u % 2 ? 'right' : 'left'
            }
            var f = Oa(i.map, t.ch, l)
            return (f.offset = f.collapse == 'right' ? f.end : f.start), f
        }
        function md(e) {
            for (var t = e; t; t = t.parentNode) if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0
            return !1
        }
        function sn(e, t) {
            return t && (e.bad = !0), e
        }
        function vd(e, t, n, r, i) {
            var a = '',
                l = !1,
                u = e.doc.lineSeparator(),
                f = !1
            function m(Q) {
                return function (ae) {
                    return ae.id == Q
                }
            }
            function A() {
                l && ((a += u), f && (a += u), (l = f = !1))
            }
            function P(Q) {
                Q && (A(), (a += Q))
            }
            function ee(Q) {
                if (Q.nodeType == 1) {
                    var ae = Q.getAttribute('cm-text')
                    if (ae) {
                        P(ae)
                        return
                    }
                    var ue = Q.getAttribute('cm-marker'),
                        he
                    if (ue) {
                        var ve = e.findMarks(G(r, 0), G(i + 1, 0), m(+ue))
                        ve.length && (he = ve[0].find(0)) && P(or(e.doc, he.from, he.to).join(u))
                        return
                    }
                    if (Q.getAttribute('contenteditable') == 'false') return
                    var _e = /^(pre|div|p|li|table|br)$/i.test(Q.nodeName)
                    if (!/^br$/i.test(Q.nodeName) && Q.textContent.length == 0) return
                    _e && A()
                    for (var be = 0; be < Q.childNodes.length; be++) ee(Q.childNodes[be])
                    ;/^(pre|p)$/i.test(Q.nodeName) && (f = !0), _e && (l = !0)
                } else Q.nodeType == 3 && P(Q.nodeValue.replace(/\u200b/g, '').replace(/\u00a0/g, ' '))
            }
            for (; ee(t), t != n; ) (t = t.nextSibling), (f = !1)
            return a
        }
        function zi(e, t, n) {
            var r
            if (t == e.display.lineDiv) {
                if (((r = e.display.lineDiv.childNodes[n]), !r)) return sn(e.clipPos(G(e.display.viewTo - 1)), !0)
                ;(t = null), (n = 0)
            } else
                for (r = t; ; r = r.parentNode) {
                    if (!r || r == e.display.lineDiv) return null
                    if (r.parentNode && r.parentNode == e.display.lineDiv) break
                }
            for (var i = 0; i < e.display.view.length; i++) {
                var a = e.display.view[i]
                if (a.node == r) return bd(a, t, n)
            }
        }
        function bd(e, t, n) {
            var r = e.text.firstChild,
                i = !1
            if (!t || !I(r, t)) return sn(G(Xe(e.line), 0), !0)
            if (t == r && ((i = !0), (t = r.childNodes[n]), (n = 0), !t)) {
                var a = e.rest ? O(e.rest) : e.line
                return sn(G(Xe(a), a.text.length), i)
            }
            var l = t.nodeType == 3 ? t : null,
                u = t
            for (
                !l &&
                t.childNodes.length == 1 &&
                t.firstChild.nodeType == 3 &&
                ((l = t.firstChild), n && (n = l.nodeValue.length));
                u.parentNode != r;

            )
                u = u.parentNode
            var f = e.measure,
                m = f.maps
            function A(he, ve, _e) {
                for (var be = -1; be < (m ? m.length : 0); be++)
                    for (var Te = be < 0 ? f.map : m[be], Ie = 0; Ie < Te.length; Ie += 3) {
                        var qe = Te[Ie + 2]
                        if (qe == he || qe == ve) {
                            var We = Xe(be < 0 ? e.line : e.rest[be]),
                                Ve = Te[Ie] + _e
                            return (_e < 0 || qe != he) && (Ve = Te[Ie + (_e ? 1 : 0)]), G(We, Ve)
                        }
                    }
            }
            var P = A(l, u, n)
            if (P) return sn(P, i)
            for (var ee = u.nextSibling, Q = l ? l.nodeValue.length - n : 0; ee; ee = ee.nextSibling) {
                if (((P = A(ee, ee.firstChild, 0)), P)) return sn(G(P.line, P.ch - Q), i)
                Q += ee.textContent.length
            }
            for (var ae = u.previousSibling, ue = n; ae; ae = ae.previousSibling) {
                if (((P = A(ae, ae.firstChild, -1)), P)) return sn(G(P.line, P.ch + ue), i)
                ue += ae.textContent.length
            }
        }
        var st = function (e) {
            ;(this.cm = e),
                (this.prevInput = ''),
                (this.pollingFast = !1),
                (this.polling = new pe()),
                (this.hasSelection = !1),
                (this.composing = null),
                (this.resetting = !1)
        }
        ;(st.prototype.init = function (e) {
            var t = this,
                n = this,
                r = this.cm
            this.createField(e)
            var i = this.textarea
            e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild),
                y && (i.style.width = '0px'),
                ge(i, 'input', function () {
                    s && g >= 9 && t.hasSelection && (t.hasSelection = null), n.poll()
                }),
                ge(i, 'paste', function (l) {
                    ot(r, l) || es(l, r) || ((r.state.pasteIncoming = +new Date()), n.fastPoll())
                })
            function a(l) {
                if (!ot(r, l)) {
                    if (r.somethingSelected()) Ei({ lineWise: !1, text: r.getSelections() })
                    else if (r.options.lineWiseCopyCut) {
                        var u = rs(r)
                        Ei({ lineWise: !0, text: u.text }),
                            l.type == 'cut'
                                ? r.setSelections(u.ranges, null, Fe)
                                : ((n.prevInput = ''),
                                  (i.value = u.text.join(`
`)),
                                  q(i))
                    } else return
                    l.type == 'cut' && (r.state.cutIncoming = +new Date())
                }
            }
            ge(i, 'cut', a),
                ge(i, 'copy', a),
                ge(e.scroller, 'paste', function (l) {
                    if (!(sr(e, l) || ot(r, l))) {
                        if (!i.dispatchEvent) {
                            ;(r.state.pasteIncoming = +new Date()), n.focus()
                            return
                        }
                        var u = new Event('paste')
                        ;(u.clipboardData = l.clipboardData), i.dispatchEvent(u)
                    }
                }),
                ge(e.lineSpace, 'selectstart', function (l) {
                    sr(e, l) || kt(l)
                }),
                ge(i, 'compositionstart', function () {
                    var l = r.getCursor('from')
                    n.composing && n.composing.range.clear(),
                        (n.composing = {
                            start: l,
                            range: r.markText(l, r.getCursor('to'), { className: 'CodeMirror-composing' }),
                        })
                }),
                ge(i, 'compositionend', function () {
                    n.composing && (n.poll(), n.composing.range.clear(), (n.composing = null))
                })
        }),
            (st.prototype.createField = function (e) {
                ;(this.wrapper = ns()), (this.textarea = this.wrapper.firstChild)
                var t = this.cm.options
                $o(this.textarea, t.spellcheck, t.autocorrect, t.autocapitalize)
            }),
            (st.prototype.screenReaderLabelChanged = function (e) {
                e ? this.textarea.setAttribute('aria-label', e) : this.textarea.removeAttribute('aria-label')
            }),
            (st.prototype.prepareSelection = function () {
                var e = this.cm,
                    t = e.display,
                    n = e.doc,
                    r = Za(e)
                if (e.options.moveInputWithCursor) {
                    var i = Kt(e, n.sel.primary().head, 'div'),
                        a = t.wrapper.getBoundingClientRect(),
                        l = t.lineDiv.getBoundingClientRect()
                    ;(r.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + l.top - a.top))),
                        (r.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + l.left - a.left)))
                }
                return r
            }),
            (st.prototype.showSelection = function (e) {
                var t = this.cm,
                    n = t.display
                J(n.cursorDiv, e.cursors),
                    J(n.selectionDiv, e.selection),
                    e.teTop != null &&
                        ((this.wrapper.style.top = e.teTop + 'px'), (this.wrapper.style.left = e.teLeft + 'px'))
            }),
            (st.prototype.reset = function (e) {
                if (!(this.contextMenuPending || (this.composing && e))) {
                    var t = this.cm
                    if (((this.resetting = !0), t.somethingSelected())) {
                        this.prevInput = ''
                        var n = t.getSelection()
                        ;(this.textarea.value = n),
                            t.state.focused && q(this.textarea),
                            s && g >= 9 && (this.hasSelection = n)
                    } else e || ((this.prevInput = this.textarea.value = ''), s && g >= 9 && (this.hasSelection = null))
                    this.resetting = !1
                }
            }),
            (st.prototype.getField = function () {
                return this.textarea
            }),
            (st.prototype.supportsTouch = function () {
                return !1
            }),
            (st.prototype.focus = function () {
                if (this.cm.options.readOnly != 'nocursor' && (!M || W(this.textarea.ownerDocument) != this.textarea))
                    try {
                        this.textarea.focus()
                    } catch {}
            }),
            (st.prototype.blur = function () {
                this.textarea.blur()
            }),
            (st.prototype.resetPosition = function () {
                this.wrapper.style.top = this.wrapper.style.left = 0
            }),
            (st.prototype.receivedFocus = function () {
                this.slowPoll()
            }),
            (st.prototype.slowPoll = function () {
                var e = this
                this.pollingFast ||
                    this.polling.set(this.cm.options.pollInterval, function () {
                        e.poll(), e.cm.state.focused && e.slowPoll()
                    })
            }),
            (st.prototype.fastPoll = function () {
                var e = !1,
                    t = this
                t.pollingFast = !0
                function n() {
                    var r = t.poll()
                    !r && !e ? ((e = !0), t.polling.set(60, n)) : ((t.pollingFast = !1), t.slowPoll())
                }
                t.polling.set(20, n)
            }),
            (st.prototype.poll = function () {
                var e = this,
                    t = this.cm,
                    n = this.textarea,
                    r = this.prevInput
                if (
                    this.contextMenuPending ||
                    this.resetting ||
                    !t.state.focused ||
                    (pr(n) && !r && !this.composing) ||
                    t.isReadOnly() ||
                    t.options.disableInput ||
                    t.state.keySeq
                )
                    return !1
                var i = n.value
                if (i == r && !t.somethingSelected()) return !1
                if ((s && g >= 9 && this.hasSelection === i) || (B && /[\uf700-\uf7ff]/.test(i)))
                    return t.display.input.reset(), !1
                if (t.doc.sel == t.display.selForContextMenu) {
                    var a = i.charCodeAt(0)
                    if ((a == 8203 && !r && (r = '\u200B'), a == 8666)) return this.reset(), this.cm.execCommand('undo')
                }
                for (var l = 0, u = Math.min(r.length, i.length); l < u && r.charCodeAt(l) == i.charCodeAt(l); ) ++l
                return (
                    Pt(t, function () {
                        Uo(t, i.slice(l), r.length - l, null, e.composing ? '*compose' : null),
                            i.length > 1e3 ||
                            i.indexOf(`
`) > -1
                                ? (n.value = e.prevInput = '')
                                : (e.prevInput = i),
                            e.composing &&
                                (e.composing.range.clear(),
                                (e.composing.range = t.markText(e.composing.start, t.getCursor('to'), {
                                    className: 'CodeMirror-composing',
                                })))
                    }),
                    !0
                )
            }),
            (st.prototype.ensurePolled = function () {
                this.pollingFast && this.poll() && (this.pollingFast = !1)
            }),
            (st.prototype.onKeyPress = function () {
                s && g >= 9 && (this.hasSelection = null), this.fastPoll()
            }),
            (st.prototype.onContextMenu = function (e) {
                var t = this,
                    n = t.cm,
                    r = n.display,
                    i = t.textarea
                t.contextMenuPending && t.contextMenuPending()
                var a = Ar(n, e),
                    l = r.scroller.scrollTop
                if (!a || d) return
                var u = n.options.resetSelectionOnContextMenu
                u && n.doc.sel.contains(a) == -1 && ht(n, wt)(n.doc, xr(a), Fe)
                var f = i.style.cssText,
                    m = t.wrapper.style.cssText,
                    A = t.wrapper.offsetParent.getBoundingClientRect()
                ;(t.wrapper.style.cssText = 'position: static'),
                    (i.style.cssText =
                        `position: absolute; width: 30px; height: 30px;
      top: ` +
                        (e.clientY - A.top - 5) +
                        'px; left: ' +
                        (e.clientX - A.left - 5) +
                        `px;
      z-index: 1000; background: ` +
                        (s ? 'rgba(255, 255, 255, .05)' : 'transparent') +
                        `;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`)
                var P
                h && (P = i.ownerDocument.defaultView.scrollY),
                    r.input.focus(),
                    h && i.ownerDocument.defaultView.scrollTo(null, P),
                    r.input.reset(),
                    n.somethingSelected() || (i.value = t.prevInput = ' '),
                    (t.contextMenuPending = Q),
                    (r.selForContextMenu = n.doc.sel),
                    clearTimeout(r.detectingSelectAll)
                function ee() {
                    if (i.selectionStart != null) {
                        var ue = n.somethingSelected(),
                            he = '\u200B' + (ue ? i.value : '')
                        ;(i.value = '\u21DA'),
                            (i.value = he),
                            (t.prevInput = ue ? '' : '\u200B'),
                            (i.selectionStart = 1),
                            (i.selectionEnd = he.length),
                            (r.selForContextMenu = n.doc.sel)
                    }
                }
                function Q() {
                    if (
                        t.contextMenuPending == Q &&
                        ((t.contextMenuPending = !1),
                        (t.wrapper.style.cssText = m),
                        (i.style.cssText = f),
                        s && g < 9 && r.scrollbars.setScrollTop((r.scroller.scrollTop = l)),
                        i.selectionStart != null)
                    ) {
                        ;(!s || (s && g < 9)) && ee()
                        var ue = 0,
                            he = function () {
                                r.selForContextMenu == n.doc.sel &&
                                i.selectionStart == 0 &&
                                i.selectionEnd > 0 &&
                                t.prevInput == '\u200B'
                                    ? ht(n, Sl)(n)
                                    : ue++ < 10
                                      ? (r.detectingSelectAll = setTimeout(he, 500))
                                      : ((r.selForContextMenu = null), r.input.reset())
                            }
                        r.detectingSelectAll = setTimeout(he, 200)
                    }
                }
                if ((s && g >= 9 && ee(), F)) {
                    rr(e)
                    var ae = function () {
                        _t(window, 'mouseup', ae), setTimeout(Q, 20)
                    }
                    ge(window, 'mouseup', ae)
                } else setTimeout(Q, 50)
            }),
            (st.prototype.readOnlyChanged = function (e) {
                e || this.reset(), (this.textarea.disabled = e == 'nocursor'), (this.textarea.readOnly = !!e)
            }),
            (st.prototype.setUneditable = function () {}),
            (st.prototype.needsContentAttribute = !1)
        function yd(e, t) {
            if (
                ((t = t ? fe(t) : {}),
                (t.value = e.value),
                !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex),
                !t.placeholder && e.placeholder && (t.placeholder = e.placeholder),
                t.autofocus == null)
            ) {
                var n = W(e.ownerDocument)
                t.autofocus = n == e || (e.getAttribute('autofocus') != null && n == document.body)
            }
            function r() {
                e.value = u.getValue()
            }
            var i
            if (e.form && (ge(e.form, 'submit', r), !t.leaveSubmitMethodAlone)) {
                var a = e.form
                i = a.submit
                try {
                    var l = (a.submit = function () {
                        r(), (a.submit = i), a.submit(), (a.submit = l)
                    })
                } catch {}
            }
            ;(t.finishInit = function (f) {
                ;(f.save = r),
                    (f.getTextArea = function () {
                        return e
                    }),
                    (f.toTextArea = function () {
                        ;(f.toTextArea = isNaN),
                            r(),
                            e.parentNode.removeChild(f.getWrapperElement()),
                            (e.style.display = ''),
                            e.form &&
                                (_t(e.form, 'submit', r),
                                !t.leaveSubmitMethodAlone && typeof e.form.submit == 'function' && (e.form.submit = i))
                    })
            }),
                (e.style.display = 'none')
            var u = nt(function (f) {
                return e.parentNode.insertBefore(f, e.nextSibling)
            }, t)
            return u
        }
        function xd(e) {
            ;(e.off = _t),
                (e.on = ge),
                (e.wheelEventPixels = Cf),
                (e.Doc = qt),
                (e.splitLines = vn),
                (e.countColumn = xe),
                (e.findColumn = Je),
                (e.isWordChar = oe),
                (e.Pass = Me),
                (e.signal = tt),
                (e.Line = $r),
                (e.changeEnd = _r),
                (e.scrollbarModel = el),
                (e.Pos = G),
                (e.cmpPos = ie),
                (e.modes = Ut),
                (e.mimeModes = hr),
                (e.resolveMode = Ot),
                (e.getMode = nr),
                (e.modeExtensions = gr),
                (e.extendMode = ei),
                (e.copyState = ir),
                (e.startState = bn),
                (e.innerMode = mr),
                (e.commands = Hn),
                (e.keyMap = cr),
                (e.keyName = Rl),
                (e.isModifierKey = Pl),
                (e.lookupKey = on),
                (e.normalizeKeyMap = Xf),
                (e.StringStream = at),
                (e.SharedTextMarker = Pn),
                (e.TextMarker = wr),
                (e.LineWidget = On),
                (e.e_preventDefault = kt),
                (e.e_stopPropagation = Er),
                (e.e_stop = rr),
                (e.addClass = le),
                (e.contains = I),
                (e.rmClass = V),
                (e.keyNames = Sr)
        }
        fd(nt), gd(nt)
        var _d = 'iter insert remove copy getEditor constructor'.split(' ')
        for (var Mi in qt.prototype)
            qt.prototype.hasOwnProperty(Mi) &&
                De(_d, Mi) < 0 &&
                (nt.prototype[Mi] = (function (e) {
                    return function () {
                        return e.apply(this.doc, arguments)
                    }
                })(qt.prototype[Mi]))
        return (
            Lt(qt),
            (nt.inputStyles = { textarea: st, contenteditable: Qe }),
            (nt.defineMode = function (e) {
                !nt.defaults.mode && e != 'null' && (nt.defaults.mode = e), Jn.apply(this, arguments)
            }),
            (nt.defineMIME = Wr),
            nt.defineMode('null', function () {
                return {
                    token: function (e) {
                        return e.skipToEnd()
                    },
                }
            }),
            nt.defineMIME('text/plain', 'null'),
            (nt.defineExtension = function (e, t) {
                nt.prototype[e] = t
            }),
            (nt.defineDocExtension = function (e, t) {
                qt.prototype[e] = t
            }),
            (nt.fromTextArea = yd),
            xd(nt),
            (nt.version = '5.65.15'),
            nt
        )
    })
})
var Kn = Ue((ls, ss) => {
    ;(function (o) {
        typeof ls == 'object' && typeof ss == 'object'
            ? o(Re())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        o.overlayMode = function (p, v, C) {
            return {
                startState: function () {
                    return {
                        base: o.startState(p),
                        overlay: o.startState(v),
                        basePos: 0,
                        baseCur: null,
                        overlayPos: 0,
                        overlayCur: null,
                        streamSeen: null,
                    }
                },
                copyState: function (b) {
                    return {
                        base: o.copyState(p, b.base),
                        overlay: o.copyState(v, b.overlay),
                        basePos: b.basePos,
                        baseCur: null,
                        overlayPos: b.overlayPos,
                        overlayCur: null,
                    }
                },
                token: function (b, _) {
                    return (
                        (b != _.streamSeen || Math.min(_.basePos, _.overlayPos) < b.start) &&
                            ((_.streamSeen = b), (_.basePos = _.overlayPos = b.start)),
                        b.start == _.basePos && ((_.baseCur = p.token(b, _.base)), (_.basePos = b.pos)),
                        b.start == _.overlayPos &&
                            ((b.pos = b.start), (_.overlayCur = v.token(b, _.overlay)), (_.overlayPos = b.pos)),
                        (b.pos = Math.min(_.basePos, _.overlayPos)),
                        _.overlayCur == null
                            ? _.baseCur
                            : (_.baseCur != null && _.overlay.combineTokens) || (C && _.overlay.combineTokens == null)
                              ? _.baseCur + ' ' + _.overlayCur
                              : _.overlayCur
                    )
                },
                indent:
                    p.indent &&
                    function (b, _, s) {
                        return p.indent(b.base, _, s)
                    },
                electricChars: p.electricChars,
                innerMode: function (b) {
                    return { state: b.base, mode: p }
                },
                blankLine: function (b) {
                    var _, s
                    return (
                        p.blankLine && (_ = p.blankLine(b.base)),
                        v.blankLine && (s = v.blankLine(b.overlay)),
                        s == null ? _ : C && _ != null ? _ + ' ' + s : s
                    )
                },
            }
        }
    })
})
var fs = Ue((us, cs) => {
    ;(function (o) {
        typeof us == 'object' && typeof cs == 'object'
            ? o(Re())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        var p = /^(\s*)(>[> ]*|[*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]))(\s*)/,
            v = /^(\s*)(>[> ]*|[*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/,
            C = /[*+-]\s/
        o.commands.newlineAndIndentContinueMarkdownList = function (_) {
            if (_.getOption('disableInput')) return o.Pass
            for (var s = _.listSelections(), g = [], h = 0; h < s.length; h++) {
                var w = s[h].head,
                    k = _.getStateAfter(w.line),
                    c = o.innerMode(_.getMode(), k)
                if (c.mode.name !== 'markdown' && c.mode.helperType !== 'markdown') {
                    _.execCommand('newlineAndIndent')
                    return
                } else k = c.state
                var d = k.list !== !1,
                    S = k.quote !== 0,
                    E = _.getLine(w.line),
                    z = p.exec(E),
                    y = /^\s*$/.test(E.slice(0, w.ch))
                if (!s[h].empty() || (!d && !S) || !z || y) {
                    _.execCommand('newlineAndIndent')
                    return
                }
                if (v.test(E)) {
                    var H = S && />\s*$/.test(E),
                        M = !/>\s*$/.test(E)
                    ;(H || M) && _.replaceRange('', { line: w.line, ch: 0 }, { line: w.line, ch: w.ch + 1 }),
                        (g[h] = `
`)
                } else {
                    var B = z[1],
                        X = z[5],
                        re = !(C.test(z[2]) || z[2].indexOf('>') >= 0),
                        ne = re ? parseInt(z[3], 10) + 1 + z[4] : z[2].replace('x', ' ')
                    ;(g[h] =
                        `
` +
                        B +
                        ne +
                        X),
                        re && b(_, w)
                }
            }
            _.replaceSelections(g)
        }
        function b(_, s) {
            var g = s.line,
                h = 0,
                w = 0,
                k = p.exec(_.getLine(g)),
                c = k[1]
            do {
                h += 1
                var d = g + h,
                    S = _.getLine(d),
                    E = p.exec(S)
                if (E) {
                    var z = E[1],
                        y = parseInt(k[3], 10) + h - w,
                        H = parseInt(E[3], 10),
                        M = H
                    if (c === z && !isNaN(H))
                        y === H && (M = H + 1),
                            y > H && (M = y + 1),
                            _.replaceRange(
                                S.replace(p, z + M + E[4] + E[5]),
                                { line: d, ch: 0 },
                                { line: d, ch: S.length },
                            )
                    else {
                        if (c.length > z.length || (c.length < z.length && h === 1)) return
                        w += 1
                    }
                }
            } while (E)
        }
    })
})
var hs = Ue((ds, ps) => {
    ;(function (o) {
        typeof ds == 'object' && typeof ps == 'object'
            ? o(Re())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror'], o)
              : o(CodeMirror)
    })(function (o) {
        o.defineOption('placeholder', '', function (g, h, w) {
            var k = w && w != o.Init
            if (h && !k)
                g.on('blur', b),
                    g.on('change', _),
                    g.on('swapDoc', _),
                    o.on(
                        g.getInputField(),
                        'compositionupdate',
                        (g.state.placeholderCompose = function () {
                            C(g)
                        }),
                    ),
                    _(g)
            else if (!h && k) {
                g.off('blur', b),
                    g.off('change', _),
                    g.off('swapDoc', _),
                    o.off(g.getInputField(), 'compositionupdate', g.state.placeholderCompose),
                    p(g)
                var c = g.getWrapperElement()
                c.className = c.className.replace(' CodeMirror-empty', '')
            }
            h && !g.hasFocus() && b(g)
        })
        function p(g) {
            g.state.placeholder &&
                (g.state.placeholder.parentNode.removeChild(g.state.placeholder), (g.state.placeholder = null))
        }
        function v(g) {
            p(g)
            var h = (g.state.placeholder = document.createElement('pre'))
            ;(h.style.cssText = 'height: 0; overflow: visible'),
                (h.style.direction = g.getOption('direction')),
                (h.className = 'CodeMirror-placeholder CodeMirror-line-like')
            var w = g.getOption('placeholder')
            typeof w == 'string' && (w = document.createTextNode(w)),
                h.appendChild(w),
                g.display.lineSpace.insertBefore(h, g.display.lineSpace.firstChild)
        }
        function C(g) {
            setTimeout(function () {
                var h = !1
                if (g.lineCount() == 1) {
                    var w = g.getInputField()
                    h =
                        w.nodeName == 'TEXTAREA'
                            ? !g.getLine(0).length
                            : !/[^\u200b]/.test(w.querySelector('.CodeMirror-line').textContent)
                }
                h ? v(g) : p(g)
            }, 20)
        }
        function b(g) {
            s(g) && v(g)
        }
        function _(g) {
            var h = g.getWrapperElement(),
                w = s(g)
            ;(h.className = h.className.replace(' CodeMirror-empty', '') + (w ? ' CodeMirror-empty' : '')),
                w ? v(g) : p(g)
        }
        function s(g) {
            return g.lineCount() === 1 && g.getLine(0) === ''
        }
    })
})
var vs = Ue((gs, ms) => {
    ;(function (o) {
        typeof gs == 'object' && typeof ms == 'object'
            ? o(Re())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        o.defineOption('styleSelectedText', !1, function (k, c, d) {
            var S = d && d != o.Init
            c && !S
                ? ((k.state.markedSelection = []),
                  (k.state.markedSelectionStyle = typeof c == 'string' ? c : 'CodeMirror-selectedtext'),
                  h(k),
                  k.on('cursorActivity', p),
                  k.on('change', v))
                : !c &&
                  S &&
                  (k.off('cursorActivity', p),
                  k.off('change', v),
                  g(k),
                  (k.state.markedSelection = k.state.markedSelectionStyle = null))
        })
        function p(k) {
            k.state.markedSelection &&
                k.operation(function () {
                    w(k)
                })
        }
        function v(k) {
            k.state.markedSelection &&
                k.state.markedSelection.length &&
                k.operation(function () {
                    g(k)
                })
        }
        var C = 8,
            b = o.Pos,
            _ = o.cmpPos
        function s(k, c, d, S) {
            if (_(c, d) != 0)
                for (var E = k.state.markedSelection, z = k.state.markedSelectionStyle, y = c.line; ; ) {
                    var H = y == c.line ? c : b(y, 0),
                        M = y + C,
                        B = M >= d.line,
                        X = B ? d : b(M, 0),
                        re = k.markText(H, X, { className: z })
                    if ((S == null ? E.push(re) : E.splice(S++, 0, re), B)) break
                    y = M
                }
        }
        function g(k) {
            for (var c = k.state.markedSelection, d = 0; d < c.length; ++d) c[d].clear()
            c.length = 0
        }
        function h(k) {
            g(k)
            for (var c = k.listSelections(), d = 0; d < c.length; d++) s(k, c[d].from(), c[d].to())
        }
        function w(k) {
            if (!k.somethingSelected()) return g(k)
            if (k.listSelections().length > 1) return h(k)
            var c = k.getCursor('start'),
                d = k.getCursor('end'),
                S = k.state.markedSelection
            if (!S.length) return s(k, c, d)
            var E = S[0].find(),
                z = S[S.length - 1].find()
            if (!E || !z || d.line - c.line <= C || _(c, z.to) >= 0 || _(d, E.from) <= 0) return h(k)
            for (; _(c, E.from) > 0; ) S.shift().clear(), (E = S[0].find())
            for (
                _(c, E.from) < 0 &&
                (E.to.line - c.line < C ? (S.shift().clear(), s(k, c, E.to, 0)) : s(k, c, E.from, 0));
                _(d, z.to) < 0;

            )
                S.pop().clear(), (z = S[S.length - 1].find())
            _(d, z.to) > 0 && (d.line - z.from.line < C ? (S.pop().clear(), s(k, z.from, d)) : s(k, z.to, d))
        }
    })
})
var xs = Ue((bs, ys) => {
    ;(function (o) {
        typeof bs == 'object' && typeof ys == 'object'
            ? o(Re())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        var p = o.Pos
        function v(y) {
            var H = y.flags
            return H ?? (y.ignoreCase ? 'i' : '') + (y.global ? 'g' : '') + (y.multiline ? 'm' : '')
        }
        function C(y, H) {
            for (var M = v(y), B = M, X = 0; X < H.length; X++) B.indexOf(H.charAt(X)) == -1 && (B += H.charAt(X))
            return M == B ? y : new RegExp(y.source, B)
        }
        function b(y) {
            return /\\s|\\n|\n|\\W|\\D|\[\^/.test(y.source)
        }
        function _(y, H, M) {
            H = C(H, 'g')
            for (var B = M.line, X = M.ch, re = y.lastLine(); B <= re; B++, X = 0) {
                H.lastIndex = X
                var ne = y.getLine(B),
                    N = H.exec(ne)
                if (N) return { from: p(B, N.index), to: p(B, N.index + N[0].length), match: N }
            }
        }
        function s(y, H, M) {
            if (!b(H)) return _(y, H, M)
            H = C(H, 'gm')
            for (var B, X = 1, re = M.line, ne = y.lastLine(); re <= ne; ) {
                for (var N = 0; N < X && !(re > ne); N++) {
                    var F = y.getLine(re++)
                    B =
                        B == null
                            ? F
                            : B +
                              `
` +
                              F
                }
                ;(X = X * 2), (H.lastIndex = M.ch)
                var D = H.exec(B)
                if (D) {
                    var V = B.slice(0, D.index).split(`
`),
                        j = D[0].split(`
`),
                        J = M.line + V.length - 1,
                        x = V[V.length - 1].length
                    return {
                        from: p(J, x),
                        to: p(J + j.length - 1, j.length == 1 ? x + j[0].length : j[j.length - 1].length),
                        match: D,
                    }
                }
            }
        }
        function g(y, H, M) {
            for (var B, X = 0; X <= y.length; ) {
                H.lastIndex = X
                var re = H.exec(y)
                if (!re) break
                var ne = re.index + re[0].length
                if (ne > y.length - M) break
                ;(!B || ne > B.index + B[0].length) && (B = re), (X = re.index + 1)
            }
            return B
        }
        function h(y, H, M) {
            H = C(H, 'g')
            for (var B = M.line, X = M.ch, re = y.firstLine(); B >= re; B--, X = -1) {
                var ne = y.getLine(B),
                    N = g(ne, H, X < 0 ? 0 : ne.length - X)
                if (N) return { from: p(B, N.index), to: p(B, N.index + N[0].length), match: N }
            }
        }
        function w(y, H, M) {
            if (!b(H)) return h(y, H, M)
            H = C(H, 'gm')
            for (var B, X = 1, re = y.getLine(M.line).length - M.ch, ne = M.line, N = y.firstLine(); ne >= N; ) {
                for (var F = 0; F < X && ne >= N; F++) {
                    var D = y.getLine(ne--)
                    B =
                        B == null
                            ? D
                            : D +
                              `
` +
                              B
                }
                X *= 2
                var V = g(B, H, re)
                if (V) {
                    var j = B.slice(0, V.index).split(`
`),
                        J = V[0].split(`
`),
                        x = ne + j.length,
                        K = j[j.length - 1].length
                    return {
                        from: p(x, K),
                        to: p(x + J.length - 1, J.length == 1 ? K + J[0].length : J[J.length - 1].length),
                        match: V,
                    }
                }
            }
        }
        var k, c
        String.prototype.normalize
            ? ((k = function (y) {
                  return y.normalize('NFD').toLowerCase()
              }),
              (c = function (y) {
                  return y.normalize('NFD')
              }))
            : ((k = function (y) {
                  return y.toLowerCase()
              }),
              (c = function (y) {
                  return y
              }))
        function d(y, H, M, B) {
            if (y.length == H.length) return M
            for (var X = 0, re = M + Math.max(0, y.length - H.length); ; ) {
                if (X == re) return X
                var ne = (X + re) >> 1,
                    N = B(y.slice(0, ne)).length
                if (N == M) return ne
                N > M ? (re = ne) : (X = ne + 1)
            }
        }
        function S(y, H, M, B) {
            if (!H.length) return null
            var X = B ? k : c,
                re = X(H).split(/\r|\n\r?/)
            e: for (var ne = M.line, N = M.ch, F = y.lastLine() + 1 - re.length; ne <= F; ne++, N = 0) {
                var D = y.getLine(ne).slice(N),
                    V = X(D)
                if (re.length == 1) {
                    var j = V.indexOf(re[0])
                    if (j == -1) continue e
                    var M = d(D, V, j, X) + N
                    return { from: p(ne, d(D, V, j, X) + N), to: p(ne, d(D, V, j + re[0].length, X) + N) }
                } else {
                    var J = V.length - re[0].length
                    if (V.slice(J) != re[0]) continue e
                    for (var x = 1; x < re.length - 1; x++) if (X(y.getLine(ne + x)) != re[x]) continue e
                    var K = y.getLine(ne + re.length - 1),
                        Y = X(K),
                        I = re[re.length - 1]
                    if (Y.slice(0, I.length) != I) continue e
                    return { from: p(ne, d(D, V, J, X) + N), to: p(ne + re.length - 1, d(K, Y, I.length, X)) }
                }
            }
        }
        function E(y, H, M, B) {
            if (!H.length) return null
            var X = B ? k : c,
                re = X(H).split(/\r|\n\r?/)
            e: for (var ne = M.line, N = M.ch, F = y.firstLine() - 1 + re.length; ne >= F; ne--, N = -1) {
                var D = y.getLine(ne)
                N > -1 && (D = D.slice(0, N))
                var V = X(D)
                if (re.length == 1) {
                    var j = V.lastIndexOf(re[0])
                    if (j == -1) continue e
                    return { from: p(ne, d(D, V, j, X)), to: p(ne, d(D, V, j + re[0].length, X)) }
                } else {
                    var J = re[re.length - 1]
                    if (V.slice(0, J.length) != J) continue e
                    for (var x = 1, M = ne - re.length + 1; x < re.length - 1; x++)
                        if (X(y.getLine(M + x)) != re[x]) continue e
                    var K = y.getLine(ne + 1 - re.length),
                        Y = X(K)
                    if (Y.slice(Y.length - re[0].length) != re[0]) continue e
                    return {
                        from: p(ne + 1 - re.length, d(K, Y, K.length - re[0].length, X)),
                        to: p(ne, d(D, V, J.length, X)),
                    }
                }
            }
        }
        function z(y, H, M, B) {
            ;(this.atOccurrence = !1),
                (this.afterEmptyMatch = !1),
                (this.doc = y),
                (M = M ? y.clipPos(M) : p(0, 0)),
                (this.pos = { from: M, to: M })
            var X
            typeof B == 'object' ? (X = B.caseFold) : ((X = B), (B = null)),
                typeof H == 'string'
                    ? (X == null && (X = !1),
                      (this.matches = function (re, ne) {
                          return (re ? E : S)(y, H, ne, X)
                      }))
                    : ((H = C(H, 'gm')),
                      !B || B.multiline !== !1
                          ? (this.matches = function (re, ne) {
                                return (re ? w : s)(y, H, ne)
                            })
                          : (this.matches = function (re, ne) {
                                return (re ? h : _)(y, H, ne)
                            }))
        }
        ;(z.prototype = {
            findNext: function () {
                return this.find(!1)
            },
            findPrevious: function () {
                return this.find(!0)
            },
            find: function (y) {
                var H = this.doc.clipPos(y ? this.pos.from : this.pos.to)
                if (
                    this.afterEmptyMatch &&
                    this.atOccurrence &&
                    ((H = p(H.line, H.ch)),
                    y
                        ? (H.ch--, H.ch < 0 && (H.line--, (H.ch = (this.doc.getLine(H.line) || '').length)))
                        : (H.ch++, H.ch > (this.doc.getLine(H.line) || '').length && ((H.ch = 0), H.line++)),
                    o.cmpPos(H, this.doc.clipPos(H)) != 0)
                )
                    return (this.atOccurrence = !1)
                var M = this.matches(y, H)
                if (((this.afterEmptyMatch = M && o.cmpPos(M.from, M.to) == 0), M))
                    return (this.pos = M), (this.atOccurrence = !0), this.pos.match || !0
                var B = p(y ? this.doc.firstLine() : this.doc.lastLine() + 1, 0)
                return (this.pos = { from: B, to: B }), (this.atOccurrence = !1)
            },
            from: function () {
                if (this.atOccurrence) return this.pos.from
            },
            to: function () {
                if (this.atOccurrence) return this.pos.to
            },
            replace: function (y, H) {
                if (this.atOccurrence) {
                    var M = o.splitLines(y)
                    this.doc.replaceRange(M, this.pos.from, this.pos.to, H),
                        (this.pos.to = p(
                            this.pos.from.line + M.length - 1,
                            M[M.length - 1].length + (M.length == 1 ? this.pos.from.ch : 0),
                        ))
                }
            },
        }),
            o.defineExtension('getSearchCursor', function (y, H, M) {
                return new z(this.doc, y, H, M)
            }),
            o.defineDocExtension('getSearchCursor', function (y, H, M) {
                return new z(this, y, H, M)
            }),
            o.defineExtension('selectMatches', function (y, H) {
                for (
                    var M = [], B = this.getSearchCursor(y, this.getCursor('from'), H);
                    B.findNext() && !(o.cmpPos(B.to(), this.getCursor('to')) > 0);

                )
                    M.push({ anchor: B.from(), head: B.to() })
                M.length && this.setSelections(M, 0)
            })
    })
})
var Qo = Ue((_s, ks) => {
    ;(function (o) {
        typeof _s == 'object' && typeof ks == 'object'
            ? o(Re())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        function p(I, W, le, ye, q, T) {
            ;(this.indented = I),
                (this.column = W),
                (this.type = le),
                (this.info = ye),
                (this.align = q),
                (this.prev = T)
        }
        function v(I, W, le, ye) {
            var q = I.indented
            return (
                I.context && I.context.type == 'statement' && le != 'statement' && (q = I.context.indented),
                (I.context = new p(q, W, le, ye, null, I.context))
            )
        }
        function C(I) {
            var W = I.context.type
            return (W == ')' || W == ']' || W == '}') && (I.indented = I.context.indented), (I.context = I.context.prev)
        }
        function b(I, W, le) {
            if (
                W.prevToken == 'variable' ||
                W.prevToken == 'type' ||
                /\S(?:[^- ]>|[*\]])\s*$|\*$/.test(I.string.slice(0, le)) ||
                (W.typeAtEndOfLine && I.column() == I.indentation())
            )
                return !0
        }
        function _(I) {
            for (;;) {
                if (!I || I.type == 'top') return !0
                if (I.type == '}' && I.prev.info != 'namespace') return !1
                I = I.prev
            }
        }
        o.defineMode('clike', function (I, W) {
            var le = I.indentUnit,
                ye = W.statementIndentUnit || le,
                q = W.dontAlignCalls,
                T = W.keywords || {},
                de = W.types || {},
                Ee = W.builtin || {},
                fe = W.blockKeywords || {},
                xe = W.defKeywords || {},
                pe = W.atoms || {},
                De = W.hooks || {},
                Ne = W.multiLineStrings,
                Me = W.indentStatements !== !1,
                Fe = W.indentSwitch !== !1,
                Ge = W.namespaceSeparator,
                Le = W.isPunctuationChar || /[\[\]{}\(\),;\:\.]/,
                Je = W.numberStart || /[\d\.]/,
                He = W.number || /^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,
                $e = W.isOperatorChar || /[+\-*&%=<>!?|\/]/,
                O = W.isIdentifierChar || /[\w\$_\xa1-\uffff]/,
                Z = W.isReservedIdentifier || !1,
                me,
                Be
            function te(ke, Ce) {
                var we = ke.next()
                if (De[we]) {
                    var $ = De[we](ke, Ce)
                    if ($ !== !1) return $
                }
                if (we == '"' || we == "'") return (Ce.tokenize = ce(we)), Ce.tokenize(ke, Ce)
                if (Je.test(we)) {
                    if ((ke.backUp(1), ke.match(He))) return 'number'
                    ke.next()
                }
                if (Le.test(we)) return (me = we), null
                if (we == '/') {
                    if (ke.eat('*')) return (Ce.tokenize = oe), oe(ke, Ce)
                    if (ke.eat('/')) return ke.skipToEnd(), 'comment'
                }
                if ($e.test(we)) {
                    for (; !ke.match(/^\/[\/*]/, !1) && ke.eat($e); );
                    return 'operator'
                }
                if ((ke.eatWhile(O), Ge)) for (; ke.match(Ge); ) ke.eatWhile(O)
                var U = ke.current()
                return g(T, U)
                    ? (g(fe, U) && (me = 'newstatement'), g(xe, U) && (Be = !0), 'keyword')
                    : g(de, U)
                      ? 'type'
                      : g(Ee, U) || (Z && Z(U))
                        ? (g(fe, U) && (me = 'newstatement'), 'builtin')
                        : g(pe, U)
                          ? 'atom'
                          : 'variable'
            }
            function ce(ke) {
                return function (Ce, we) {
                    for (var $ = !1, U, se = !1; (U = Ce.next()) != null; ) {
                        if (U == ke && !$) {
                            se = !0
                            break
                        }
                        $ = !$ && U == '\\'
                    }
                    return (se || !($ || Ne)) && (we.tokenize = null), 'string'
                }
            }
            function oe(ke, Ce) {
                for (var we = !1, $; ($ = ke.next()); ) {
                    if ($ == '/' && we) {
                        Ce.tokenize = null
                        break
                    }
                    we = $ == '*'
                }
                return 'comment'
            }
            function je(ke, Ce) {
                W.typeFirstDefinitions && ke.eol() && _(Ce.context) && (Ce.typeAtEndOfLine = b(ke, Ce, ke.pos))
            }
            return {
                startState: function (ke) {
                    return {
                        tokenize: null,
                        context: new p((ke || 0) - le, 0, 'top', null, !1),
                        indented: 0,
                        startOfLine: !0,
                        prevToken: null,
                    }
                },
                token: function (ke, Ce) {
                    var we = Ce.context
                    if (
                        (ke.sol() &&
                            (we.align == null && (we.align = !1),
                            (Ce.indented = ke.indentation()),
                            (Ce.startOfLine = !0)),
                        ke.eatSpace())
                    )
                        return je(ke, Ce), null
                    me = Be = null
                    var $ = (Ce.tokenize || te)(ke, Ce)
                    if ($ == 'comment' || $ == 'meta') return $
                    if (
                        (we.align == null && (we.align = !0),
                        me == ';' || me == ':' || (me == ',' && ke.match(/^\s*(?:\/\/.*)?$/, !1)))
                    )
                        for (; Ce.context.type == 'statement'; ) C(Ce)
                    else if (me == '{') v(Ce, ke.column(), '}')
                    else if (me == '[') v(Ce, ke.column(), ']')
                    else if (me == '(') v(Ce, ke.column(), ')')
                    else if (me == '}') {
                        for (; we.type == 'statement'; ) we = C(Ce)
                        for (we.type == '}' && (we = C(Ce)); we.type == 'statement'; ) we = C(Ce)
                    } else
                        me == we.type
                            ? C(Ce)
                            : Me &&
                              (((we.type == '}' || we.type == 'top') && me != ';') ||
                                  (we.type == 'statement' && me == 'newstatement')) &&
                              v(Ce, ke.column(), 'statement', ke.current())
                    if (
                        ($ == 'variable' &&
                            (Ce.prevToken == 'def' ||
                                (W.typeFirstDefinitions &&
                                    b(ke, Ce, ke.start) &&
                                    _(Ce.context) &&
                                    ke.match(/^\s*\(/, !1))) &&
                            ($ = 'def'),
                        De.token)
                    ) {
                        var U = De.token(ke, Ce, $)
                        U !== void 0 && ($ = U)
                    }
                    return (
                        $ == 'def' && W.styleDefs === !1 && ($ = 'variable'),
                        (Ce.startOfLine = !1),
                        (Ce.prevToken = Be ? 'def' : $ || me),
                        je(ke, Ce),
                        $
                    )
                },
                indent: function (ke, Ce) {
                    if ((ke.tokenize != te && ke.tokenize != null) || (ke.typeAtEndOfLine && _(ke.context)))
                        return o.Pass
                    var we = ke.context,
                        $ = Ce && Ce.charAt(0),
                        U = $ == we.type
                    if ((we.type == 'statement' && $ == '}' && (we = we.prev), W.dontIndentStatements))
                        for (; we.type == 'statement' && W.dontIndentStatements.test(we.info); ) we = we.prev
                    if (De.indent) {
                        var se = De.indent(ke, we, Ce, le)
                        if (typeof se == 'number') return se
                    }
                    var Ae = we.prev && we.prev.info == 'switch'
                    if (W.allmanIndentation && /[{(]/.test($)) {
                        for (; we.type != 'top' && we.type != '}'; ) we = we.prev
                        return we.indented
                    }
                    return we.type == 'statement'
                        ? we.indented + ($ == '{' ? 0 : ye)
                        : we.align && (!q || we.type != ')')
                          ? we.column + (U ? 0 : 1)
                          : we.type == ')' && !U
                            ? we.indented + ye
                            : we.indented + (U ? 0 : le) + (!U && Ae && !/^(?:case|default)\b/.test(Ce) ? le : 0)
                },
                electricInput: Fe ? /^\s*(?:case .*?:|default:|\{\}?|\})$/ : /^\s*[{}]$/,
                blockCommentStart: '/*',
                blockCommentEnd: '*/',
                blockCommentContinue: ' * ',
                lineComment: '//',
                fold: 'brace',
            }
        })
        function s(I) {
            for (var W = {}, le = I.split(' '), ye = 0; ye < le.length; ++ye) W[le[ye]] = !0
            return W
        }
        function g(I, W) {
            return typeof I == 'function' ? I(W) : I.propertyIsEnumerable(W)
        }
        var h =
                'auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran',
            w =
                'alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq',
            k =
                'bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available',
            c =
                'FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT',
            d = s('int long char short double float unsigned signed void bool'),
            S = s('SEL instancetype id Class Protocol BOOL')
        function E(I) {
            return g(d, I) || /.+_t$/.test(I)
        }
        function z(I) {
            return E(I) || g(S, I)
        }
        var y = 'case do else for if switch while struct enum union',
            H = 'struct enum union'
        function M(I, W) {
            if (!W.startOfLine) return !1
            for (var le, ye = null; (le = I.peek()); ) {
                if (le == '\\' && I.match(/^.$/)) {
                    ye = M
                    break
                } else if (le == '/' && I.match(/^\/[\/\*]/, !1)) break
                I.next()
            }
            return (W.tokenize = ye), 'meta'
        }
        function B(I, W) {
            return W.prevToken == 'type' ? 'type' : !1
        }
        function X(I) {
            return !I || I.length < 2 || I[0] != '_' ? !1 : I[1] == '_' || I[1] !== I[1].toLowerCase()
        }
        function re(I) {
            return I.eatWhile(/[\w\.']/), 'number'
        }
        function ne(I, W) {
            if ((I.backUp(1), I.match(/^(?:R|u8R|uR|UR|LR)/))) {
                var le = I.match(/^"([^\s\\()]{0,16})\(/)
                return le ? ((W.cpp11RawStringDelim = le[1]), (W.tokenize = D), D(I, W)) : !1
            }
            return I.match(/^(?:u8|u|U|L)/) ? (I.match(/^["']/, !1) ? 'string' : !1) : (I.next(), !1)
        }
        function N(I) {
            var W = /(\w+)::~?(\w+)$/.exec(I)
            return W && W[1] == W[2]
        }
        function F(I, W) {
            for (var le; (le = I.next()) != null; )
                if (le == '"' && !I.eat('"')) {
                    W.tokenize = null
                    break
                }
            return 'string'
        }
        function D(I, W) {
            var le = W.cpp11RawStringDelim.replace(/[^\w\s]/g, '\\$&'),
                ye = I.match(new RegExp('.*?\\)' + le + '"'))
            return ye ? (W.tokenize = null) : I.skipToEnd(), 'string'
        }
        function V(I, W) {
            typeof I == 'string' && (I = [I])
            var le = []
            function ye(T) {
                if (T) for (var de in T) T.hasOwnProperty(de) && le.push(de)
            }
            ye(W.keywords),
                ye(W.types),
                ye(W.builtin),
                ye(W.atoms),
                le.length && ((W.helperType = I[0]), o.registerHelper('hintWords', I[0], le))
            for (var q = 0; q < I.length; ++q) o.defineMIME(I[q], W)
        }
        V(['text/x-csrc', 'text/x-c', 'text/x-chdr'], {
            name: 'clike',
            keywords: s(h),
            types: E,
            blockKeywords: s(y),
            defKeywords: s(H),
            typeFirstDefinitions: !0,
            atoms: s('NULL true false'),
            isReservedIdentifier: X,
            hooks: { '#': M, '*': B },
            modeProps: { fold: ['brace', 'include'] },
        }),
            V(['text/x-c++src', 'text/x-c++hdr'], {
                name: 'clike',
                keywords: s(h + ' ' + w),
                types: E,
                blockKeywords: s(y + ' class try catch'),
                defKeywords: s(H + ' class namespace'),
                typeFirstDefinitions: !0,
                atoms: s('true false NULL nullptr'),
                dontIndentStatements: /^template$/,
                isIdentifierChar: /[\w\$_~\xa1-\uffff]/,
                isReservedIdentifier: X,
                hooks: {
                    '#': M,
                    '*': B,
                    u: ne,
                    U: ne,
                    L: ne,
                    R: ne,
                    0: re,
                    1: re,
                    2: re,
                    3: re,
                    4: re,
                    5: re,
                    6: re,
                    7: re,
                    8: re,
                    9: re,
                    token: function (I, W, le) {
                        if (
                            le == 'variable' &&
                            I.peek() == '(' &&
                            (W.prevToken == ';' || W.prevToken == null || W.prevToken == '}') &&
                            N(I.current())
                        )
                            return 'def'
                    },
                },
                namespaceSeparator: '::',
                modeProps: { fold: ['brace', 'include'] },
            }),
            V('text/x-java', {
                name: 'clike',
                keywords: s(
                    'abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface',
                ),
                types: s(
                    'var byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void',
                ),
                blockKeywords: s('catch class do else finally for if switch try while'),
                defKeywords: s('class interface enum @interface'),
                typeFirstDefinitions: !0,
                atoms: s('true false null'),
                number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
                hooks: {
                    '@': function (I) {
                        return I.match('interface', !1) ? !1 : (I.eatWhile(/[\w\$_]/), 'meta')
                    },
                    '"': function (I, W) {
                        return I.match(/""$/) ? ((W.tokenize = j), W.tokenize(I, W)) : !1
                    },
                },
                modeProps: { fold: ['brace', 'import'] },
            }),
            V('text/x-csharp', {
                name: 'clike',
                keywords: s(
                    'abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in init interface internal is lock namespace new operator out override params private protected public readonly record ref required return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield',
                ),
                types: s(
                    'Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong',
                ),
                blockKeywords: s('catch class do else finally for foreach if struct switch try while'),
                defKeywords: s('class interface namespace record struct var'),
                typeFirstDefinitions: !0,
                atoms: s('true false null'),
                hooks: {
                    '@': function (I, W) {
                        return I.eat('"') ? ((W.tokenize = F), F(I, W)) : (I.eatWhile(/[\w\$_]/), 'meta')
                    },
                },
            })
        function j(I, W) {
            for (var le = !1; !I.eol(); ) {
                if (!le && I.match('"""')) {
                    W.tokenize = null
                    break
                }
                le = I.next() == '\\' && !le
            }
            return 'string'
        }
        function J(I) {
            return function (W, le) {
                for (var ye; (ye = W.next()); )
                    if (ye == '*' && W.eat('/'))
                        if (I == 1) {
                            le.tokenize = null
                            break
                        } else return (le.tokenize = J(I - 1)), le.tokenize(W, le)
                    else if (ye == '/' && W.eat('*')) return (le.tokenize = J(I + 1)), le.tokenize(W, le)
                return 'comment'
            }
        }
        V('text/x-scala', {
            name: 'clike',
            keywords: s(
                'abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble',
            ),
            types: s(
                'AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void',
            ),
            multiLineStrings: !0,
            blockKeywords: s('catch class enum do else finally for forSome if match switch try while'),
            defKeywords: s('class enum def object package trait type val var'),
            atoms: s('true false null'),
            indentStatements: !1,
            indentSwitch: !1,
            isOperatorChar: /[+\-*&%=<>!?|\/#:@]/,
            hooks: {
                '@': function (I) {
                    return I.eatWhile(/[\w\$_]/), 'meta'
                },
                '"': function (I, W) {
                    return I.match('""') ? ((W.tokenize = j), W.tokenize(I, W)) : !1
                },
                "'": function (I) {
                    return I.match(/^(\\[^'\s]+|[^\\'])'/) ? 'string-2' : (I.eatWhile(/[\w\$_\xa1-\uffff]/), 'atom')
                },
                '=': function (I, W) {
                    var le = W.context
                    return le.type == '}' && le.align && I.eat('>')
                        ? ((W.context = new p(le.indented, le.column, le.type, le.info, null, le.prev)), 'operator')
                        : !1
                },
                '/': function (I, W) {
                    return I.eat('*') ? ((W.tokenize = J(1)), W.tokenize(I, W)) : !1
                },
            },
            modeProps: { closeBrackets: { pairs: '()[]{}""', triples: '"' } },
        })
        function x(I) {
            return function (W, le) {
                for (var ye = !1, q, T = !1; !W.eol(); ) {
                    if (!I && !ye && W.match('"')) {
                        T = !0
                        break
                    }
                    if (I && W.match('"""')) {
                        T = !0
                        break
                    }
                    ;(q = W.next()), !ye && q == '$' && W.match('{') && W.skipTo('}'), (ye = !ye && q == '\\' && !I)
                }
                return (T || !I) && (le.tokenize = null), 'string'
            }
        }
        V('text/x-kotlin', {
            name: 'clike',
            keywords: s(
                'package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam value',
            ),
            types: s(
                'Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit',
            ),
            intendSwitch: !1,
            indentStatements: !1,
            multiLineStrings: !0,
            number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
            blockKeywords: s('catch class do else finally for if where try while enum'),
            defKeywords: s('class val var object interface fun'),
            atoms: s('true false null this'),
            hooks: {
                '@': function (I) {
                    return I.eatWhile(/[\w\$_]/), 'meta'
                },
                '*': function (I, W) {
                    return W.prevToken == '.' ? 'variable' : 'operator'
                },
                '"': function (I, W) {
                    return (W.tokenize = x(I.match('""'))), W.tokenize(I, W)
                },
                '/': function (I, W) {
                    return I.eat('*') ? ((W.tokenize = J(1)), W.tokenize(I, W)) : !1
                },
                indent: function (I, W, le, ye) {
                    var q = le && le.charAt(0)
                    if ((I.prevToken == '}' || I.prevToken == ')') && le == '') return I.indented
                    if (
                        (I.prevToken == 'operator' && le != '}' && I.context.type != '}') ||
                        (I.prevToken == 'variable' && q == '.') ||
                        ((I.prevToken == '}' || I.prevToken == ')') && q == '.')
                    )
                        return ye * 2 + W.indented
                    if (W.align && W.type == '}') return W.indented + (I.context.type == (le || '').charAt(0) ? 0 : ye)
                },
            },
            modeProps: { closeBrackets: { triples: '"' } },
        }),
            V(['x-shader/x-vertex', 'x-shader/x-fragment'], {
                name: 'clike',
                keywords: s(
                    'sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout',
                ),
                types: s('float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4'),
                blockKeywords: s('for while do if else struct'),
                builtin: s(
                    'radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4',
                ),
                atoms: s(
                    'true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TextureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers',
                ),
                indentSwitch: !1,
                hooks: { '#': M },
                modeProps: { fold: ['brace', 'include'] },
            }),
            V('text/x-nesc', {
                name: 'clike',
                keywords: s(
                    h +
                        ' as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends',
                ),
                types: E,
                blockKeywords: s(y),
                atoms: s('null true false'),
                hooks: { '#': M },
                modeProps: { fold: ['brace', 'include'] },
            }),
            V('text/x-objectivec', {
                name: 'clike',
                keywords: s(h + ' ' + k),
                types: z,
                builtin: s(c),
                blockKeywords: s(y + ' @synthesize @try @catch @finally @autoreleasepool @synchronized'),
                defKeywords: s(H + ' @interface @implementation @protocol @class'),
                dontIndentStatements: /^@.*$/,
                typeFirstDefinitions: !0,
                atoms: s('YES NO NULL Nil nil true false nullptr'),
                isReservedIdentifier: X,
                hooks: { '#': M, '*': B },
                modeProps: { fold: ['brace', 'include'] },
            }),
            V('text/x-objectivec++', {
                name: 'clike',
                keywords: s(h + ' ' + k + ' ' + w),
                types: z,
                builtin: s(c),
                blockKeywords: s(
                    y + ' @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch',
                ),
                defKeywords: s(H + ' @interface @implementation @protocol @class class namespace'),
                dontIndentStatements: /^@.*$|^template$/,
                typeFirstDefinitions: !0,
                atoms: s('YES NO NULL Nil nil true false nullptr'),
                isReservedIdentifier: X,
                hooks: {
                    '#': M,
                    '*': B,
                    u: ne,
                    U: ne,
                    L: ne,
                    R: ne,
                    0: re,
                    1: re,
                    2: re,
                    3: re,
                    4: re,
                    5: re,
                    6: re,
                    7: re,
                    8: re,
                    9: re,
                    token: function (I, W, le) {
                        if (
                            le == 'variable' &&
                            I.peek() == '(' &&
                            (W.prevToken == ';' || W.prevToken == null || W.prevToken == '}') &&
                            N(I.current())
                        )
                            return 'def'
                    },
                },
                namespaceSeparator: '::',
                modeProps: { fold: ['brace', 'include'] },
            }),
            V('text/x-squirrel', {
                name: 'clike',
                keywords: s(
                    'base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static',
                ),
                types: E,
                blockKeywords: s('case catch class else for foreach if switch try while'),
                defKeywords: s('function local class'),
                typeFirstDefinitions: !0,
                atoms: s('true false null'),
                hooks: { '#': M },
                modeProps: { fold: ['brace', 'include'] },
            })
        var K = null
        function Y(I) {
            return function (W, le) {
                for (var ye = !1, q, T = !1; !W.eol(); ) {
                    if (!ye && W.match('"') && (I == 'single' || W.match('""'))) {
                        T = !0
                        break
                    }
                    if (!ye && W.match('``')) {
                        ;(K = Y(I)), (T = !0)
                        break
                    }
                    ;(q = W.next()), (ye = I == 'single' && !ye && q == '\\')
                }
                return T && (le.tokenize = null), 'string'
            }
        }
        V('text/x-ceylon', {
            name: 'clike',
            keywords: s(
                'abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while',
            ),
            types: function (I) {
                var W = I.charAt(0)
                return W === W.toUpperCase() && W !== W.toLowerCase()
            },
            blockKeywords: s(
                'case catch class dynamic else finally for function if interface module new object switch try while',
            ),
            defKeywords: s('class dynamic function interface module object package value'),
            builtin: s(
                'abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable',
            ),
            isPunctuationChar: /[\[\]{}\(\),;\:\.`]/,
            isOperatorChar: /[+\-*&%=<>!?|^~:\/]/,
            numberStart: /[\d#$]/,
            number: /^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,
            multiLineStrings: !0,
            typeFirstDefinitions: !0,
            atoms: s('true false null larger smaller equal empty finished'),
            indentSwitch: !1,
            styleDefs: !1,
            hooks: {
                '@': function (I) {
                    return I.eatWhile(/[\w\$_]/), 'meta'
                },
                '"': function (I, W) {
                    return (W.tokenize = Y(I.match('""') ? 'triple' : 'single')), W.tokenize(I, W)
                },
                '`': function (I, W) {
                    return !K || !I.match('`') ? !1 : ((W.tokenize = K), (K = null), W.tokenize(I, W))
                },
                "'": function (I) {
                    return I.eatWhile(/[\w\$_\xa1-\uffff]/), 'atom'
                },
                token: function (I, W, le) {
                    if ((le == 'variable' || le == 'type') && W.prevToken == '.') return 'variable-2'
                },
            },
            modeProps: { fold: ['brace', 'import'], closeBrackets: { triples: '"' } },
        })
    })
})
var Ts = Ue((ws, Ss) => {
    ;(function (o) {
        typeof ws == 'object' && typeof Ss == 'object'
            ? o(Re())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        o.defineMode('cmake', function () {
            var p = /({)?[a-zA-Z0-9_]+(})?/
            function v(b, _) {
                for (var s, g, h = !1; !b.eol() && (s = b.next()) != _.pending; ) {
                    if (s === '$' && g != '\\' && _.pending == '"') {
                        h = !0
                        break
                    }
                    g = s
                }
                return h && b.backUp(1), s == _.pending ? (_.continueString = !1) : (_.continueString = !0), 'string'
            }
            function C(b, _) {
                var s = b.next()
                return s === '$'
                    ? b.match(p)
                        ? 'variable-2'
                        : 'variable'
                    : _.continueString
                      ? (b.backUp(1), v(b, _))
                      : b.match(/(\s+)?\w+\(/) || b.match(/(\s+)?\w+\ \(/)
                        ? (b.backUp(1), 'def')
                        : s == '#'
                          ? (b.skipToEnd(), 'comment')
                          : s == "'" || s == '"'
                            ? ((_.pending = s), v(b, _))
                            : s == '(' || s == ')'
                              ? 'bracket'
                              : s.match(/[0-9]/)
                                ? 'number'
                                : (b.eatWhile(/[\w-]/), null)
            }
            return {
                startState: function () {
                    var b = {}
                    return (b.inDefinition = !1), (b.inInclude = !1), (b.continueString = !1), (b.pending = !1), b
                },
                token: function (b, _) {
                    return b.eatSpace() ? null : C(b, _)
                },
            }
        }),
            o.defineMIME('text/x-cmake', 'cmake')
    })
})
var fn = Ue((Ls, Cs) => {
    ;(function (o) {
        typeof Ls == 'object' && typeof Cs == 'object'
            ? o(Re())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        o.defineMode('css', function (F, D) {
            var V = D.inline
            D.propertyKeywords || (D = o.resolveMode('text/css'))
            var j = F.indentUnit,
                J = D.tokenHooks,
                x = D.documentTypes || {},
                K = D.mediaTypes || {},
                Y = D.mediaFeatures || {},
                I = D.mediaValueKeywords || {},
                W = D.propertyKeywords || {},
                le = D.nonStandardPropertyKeywords || {},
                ye = D.fontProperties || {},
                q = D.counterDescriptors || {},
                T = D.colorKeywords || {},
                de = D.valueKeywords || {},
                Ee = D.allowNested,
                fe = D.lineComment,
                xe = D.supportsAtComponent === !0,
                pe = F.highlightNonStandardPropertyKeywords !== !1,
                De,
                Ne
            function Me(te, ce) {
                return (De = ce), te
            }
            function Fe(te, ce) {
                var oe = te.next()
                if (J[oe]) {
                    var je = J[oe](te, ce)
                    if (je !== !1) return je
                }
                if (oe == '@') return te.eatWhile(/[\w\\\-]/), Me('def', te.current())
                if (oe == '=' || ((oe == '~' || oe == '|') && te.eat('='))) return Me(null, 'compare')
                if (oe == '"' || oe == "'") return (ce.tokenize = Ge(oe)), ce.tokenize(te, ce)
                if (oe == '#') return te.eatWhile(/[\w\\\-]/), Me('atom', 'hash')
                if (oe == '!') return te.match(/^\s*\w*/), Me('keyword', 'important')
                if (/\d/.test(oe) || (oe == '.' && te.eat(/\d/))) return te.eatWhile(/[\w.%]/), Me('number', 'unit')
                if (oe === '-') {
                    if (/[\d.]/.test(te.peek())) return te.eatWhile(/[\w.%]/), Me('number', 'unit')
                    if (te.match(/^-[\w\\\-]*/))
                        return (
                            te.eatWhile(/[\w\\\-]/),
                            te.match(/^\s*:/, !1)
                                ? Me('variable-2', 'variable-definition')
                                : Me('variable-2', 'variable')
                        )
                    if (te.match(/^\w+-/)) return Me('meta', 'meta')
                } else
                    return /[,+>*\/]/.test(oe)
                        ? Me(null, 'select-op')
                        : oe == '.' && te.match(/^-?[_a-z][_a-z0-9-]*/i)
                          ? Me('qualifier', 'qualifier')
                          : /[:;{}\[\]\(\)]/.test(oe)
                            ? Me(null, oe)
                            : te.match(/^[\w-.]+(?=\()/)
                              ? (/^(url(-prefix)?|domain|regexp)$/i.test(te.current()) && (ce.tokenize = Le),
                                Me('variable callee', 'variable'))
                              : /[\w\\\-]/.test(oe)
                                ? (te.eatWhile(/[\w\\\-]/), Me('property', 'word'))
                                : Me(null, null)
            }
            function Ge(te) {
                return function (ce, oe) {
                    for (var je = !1, ke; (ke = ce.next()) != null; ) {
                        if (ke == te && !je) {
                            te == ')' && ce.backUp(1)
                            break
                        }
                        je = !je && ke == '\\'
                    }
                    return (ke == te || (!je && te != ')')) && (oe.tokenize = null), Me('string', 'string')
                }
            }
            function Le(te, ce) {
                return (
                    te.next(),
                    te.match(/^\s*[\"\')]/, !1) ? (ce.tokenize = null) : (ce.tokenize = Ge(')')),
                    Me(null, '(')
                )
            }
            function Je(te, ce, oe) {
                ;(this.type = te), (this.indent = ce), (this.prev = oe)
            }
            function He(te, ce, oe, je) {
                return (te.context = new Je(oe, ce.indentation() + (je === !1 ? 0 : j), te.context)), oe
            }
            function $e(te) {
                return te.context.prev && (te.context = te.context.prev), te.context.type
            }
            function O(te, ce, oe) {
                return Be[oe.context.type](te, ce, oe)
            }
            function Z(te, ce, oe, je) {
                for (var ke = je || 1; ke > 0; ke--) oe.context = oe.context.prev
                return O(te, ce, oe)
            }
            function me(te) {
                var ce = te.current().toLowerCase()
                de.hasOwnProperty(ce) ? (Ne = 'atom') : T.hasOwnProperty(ce) ? (Ne = 'keyword') : (Ne = 'variable')
            }
            var Be = {}
            return (
                (Be.top = function (te, ce, oe) {
                    if (te == '{') return He(oe, ce, 'block')
                    if (te == '}' && oe.context.prev) return $e(oe)
                    if (xe && /@component/i.test(te)) return He(oe, ce, 'atComponentBlock')
                    if (/^@(-moz-)?document$/i.test(te)) return He(oe, ce, 'documentTypes')
                    if (/^@(media|supports|(-moz-)?document|import)$/i.test(te)) return He(oe, ce, 'atBlock')
                    if (/^@(font-face|counter-style)/i.test(te)) return (oe.stateArg = te), 'restricted_atBlock_before'
                    if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(te)) return 'keyframes'
                    if (te && te.charAt(0) == '@') return He(oe, ce, 'at')
                    if (te == 'hash') Ne = 'builtin'
                    else if (te == 'word') Ne = 'tag'
                    else {
                        if (te == 'variable-definition') return 'maybeprop'
                        if (te == 'interpolation') return He(oe, ce, 'interpolation')
                        if (te == ':') return 'pseudo'
                        if (Ee && te == '(') return He(oe, ce, 'parens')
                    }
                    return oe.context.type
                }),
                (Be.block = function (te, ce, oe) {
                    if (te == 'word') {
                        var je = ce.current().toLowerCase()
                        return W.hasOwnProperty(je)
                            ? ((Ne = 'property'), 'maybeprop')
                            : le.hasOwnProperty(je)
                              ? ((Ne = pe ? 'string-2' : 'property'), 'maybeprop')
                              : Ee
                                ? ((Ne = ce.match(/^\s*:(?:\s|$)/, !1) ? 'property' : 'tag'), 'block')
                                : ((Ne += ' error'), 'maybeprop')
                    } else
                        return te == 'meta'
                            ? 'block'
                            : !Ee && (te == 'hash' || te == 'qualifier')
                              ? ((Ne = 'error'), 'block')
                              : Be.top(te, ce, oe)
                }),
                (Be.maybeprop = function (te, ce, oe) {
                    return te == ':' ? He(oe, ce, 'prop') : O(te, ce, oe)
                }),
                (Be.prop = function (te, ce, oe) {
                    if (te == ';') return $e(oe)
                    if (te == '{' && Ee) return He(oe, ce, 'propBlock')
                    if (te == '}' || te == '{') return Z(te, ce, oe)
                    if (te == '(') return He(oe, ce, 'parens')
                    if (te == 'hash' && !/^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(ce.current()))
                        Ne += ' error'
                    else if (te == 'word') me(ce)
                    else if (te == 'interpolation') return He(oe, ce, 'interpolation')
                    return 'prop'
                }),
                (Be.propBlock = function (te, ce, oe) {
                    return te == '}' ? $e(oe) : te == 'word' ? ((Ne = 'property'), 'maybeprop') : oe.context.type
                }),
                (Be.parens = function (te, ce, oe) {
                    return te == '{' || te == '}'
                        ? Z(te, ce, oe)
                        : te == ')'
                          ? $e(oe)
                          : te == '('
                            ? He(oe, ce, 'parens')
                            : te == 'interpolation'
                              ? He(oe, ce, 'interpolation')
                              : (te == 'word' && me(ce), 'parens')
                }),
                (Be.pseudo = function (te, ce, oe) {
                    return te == 'meta'
                        ? 'pseudo'
                        : te == 'word'
                          ? ((Ne = 'variable-3'), oe.context.type)
                          : O(te, ce, oe)
                }),
                (Be.documentTypes = function (te, ce, oe) {
                    return te == 'word' && x.hasOwnProperty(ce.current())
                        ? ((Ne = 'tag'), oe.context.type)
                        : Be.atBlock(te, ce, oe)
                }),
                (Be.atBlock = function (te, ce, oe) {
                    if (te == '(') return He(oe, ce, 'atBlock_parens')
                    if (te == '}' || te == ';') return Z(te, ce, oe)
                    if (te == '{') return $e(oe) && He(oe, ce, Ee ? 'block' : 'top')
                    if (te == 'interpolation') return He(oe, ce, 'interpolation')
                    if (te == 'word') {
                        var je = ce.current().toLowerCase()
                        je == 'only' || je == 'not' || je == 'and' || je == 'or'
                            ? (Ne = 'keyword')
                            : K.hasOwnProperty(je)
                              ? (Ne = 'attribute')
                              : Y.hasOwnProperty(je)
                                ? (Ne = 'property')
                                : I.hasOwnProperty(je)
                                  ? (Ne = 'keyword')
                                  : W.hasOwnProperty(je)
                                    ? (Ne = 'property')
                                    : le.hasOwnProperty(je)
                                      ? (Ne = pe ? 'string-2' : 'property')
                                      : de.hasOwnProperty(je)
                                        ? (Ne = 'atom')
                                        : T.hasOwnProperty(je)
                                          ? (Ne = 'keyword')
                                          : (Ne = 'error')
                    }
                    return oe.context.type
                }),
                (Be.atComponentBlock = function (te, ce, oe) {
                    return te == '}'
                        ? Z(te, ce, oe)
                        : te == '{'
                          ? $e(oe) && He(oe, ce, Ee ? 'block' : 'top', !1)
                          : (te == 'word' && (Ne = 'error'), oe.context.type)
                }),
                (Be.atBlock_parens = function (te, ce, oe) {
                    return te == ')' ? $e(oe) : te == '{' || te == '}' ? Z(te, ce, oe, 2) : Be.atBlock(te, ce, oe)
                }),
                (Be.restricted_atBlock_before = function (te, ce, oe) {
                    return te == '{'
                        ? He(oe, ce, 'restricted_atBlock')
                        : te == 'word' && oe.stateArg == '@counter-style'
                          ? ((Ne = 'variable'), 'restricted_atBlock_before')
                          : O(te, ce, oe)
                }),
                (Be.restricted_atBlock = function (te, ce, oe) {
                    return te == '}'
                        ? ((oe.stateArg = null), $e(oe))
                        : te == 'word'
                          ? ((oe.stateArg == '@font-face' && !ye.hasOwnProperty(ce.current().toLowerCase())) ||
                            (oe.stateArg == '@counter-style' && !q.hasOwnProperty(ce.current().toLowerCase()))
                                ? (Ne = 'error')
                                : (Ne = 'property'),
                            'maybeprop')
                          : 'restricted_atBlock'
                }),
                (Be.keyframes = function (te, ce, oe) {
                    return te == 'word'
                        ? ((Ne = 'variable'), 'keyframes')
                        : te == '{'
                          ? He(oe, ce, 'top')
                          : O(te, ce, oe)
                }),
                (Be.at = function (te, ce, oe) {
                    return te == ';'
                        ? $e(oe)
                        : te == '{' || te == '}'
                          ? Z(te, ce, oe)
                          : (te == 'word' ? (Ne = 'tag') : te == 'hash' && (Ne = 'builtin'), 'at')
                }),
                (Be.interpolation = function (te, ce, oe) {
                    return te == '}'
                        ? $e(oe)
                        : te == '{' || te == ';'
                          ? Z(te, ce, oe)
                          : (te == 'word'
                                ? (Ne = 'variable')
                                : te != 'variable' && te != '(' && te != ')' && (Ne = 'error'),
                            'interpolation')
                }),
                {
                    startState: function (te) {
                        return {
                            tokenize: null,
                            state: V ? 'block' : 'top',
                            stateArg: null,
                            context: new Je(V ? 'block' : 'top', te || 0, null),
                        }
                    },
                    token: function (te, ce) {
                        if (!ce.tokenize && te.eatSpace()) return null
                        var oe = (ce.tokenize || Fe)(te, ce)
                        return (
                            oe && typeof oe == 'object' && ((De = oe[1]), (oe = oe[0])),
                            (Ne = oe),
                            De != 'comment' && (ce.state = Be[ce.state](De, te, ce)),
                            Ne
                        )
                    },
                    indent: function (te, ce) {
                        var oe = te.context,
                            je = ce && ce.charAt(0),
                            ke = oe.indent
                        return (
                            oe.type == 'prop' && (je == '}' || je == ')') && (oe = oe.prev),
                            oe.prev &&
                                (je == '}' &&
                                (oe.type == 'block' ||
                                    oe.type == 'top' ||
                                    oe.type == 'interpolation' ||
                                    oe.type == 'restricted_atBlock')
                                    ? ((oe = oe.prev), (ke = oe.indent))
                                    : ((je == ')' && (oe.type == 'parens' || oe.type == 'atBlock_parens')) ||
                                          (je == '{' && (oe.type == 'at' || oe.type == 'atBlock'))) &&
                                      (ke = Math.max(0, oe.indent - j))),
                            ke
                        )
                    },
                    electricChars: '}',
                    blockCommentStart: '/*',
                    blockCommentEnd: '*/',
                    blockCommentContinue: ' * ',
                    lineComment: fe,
                    fold: 'brace',
                }
            )
        })
        function p(F) {
            for (var D = {}, V = 0; V < F.length; ++V) D[F[V].toLowerCase()] = !0
            return D
        }
        var v = ['domain', 'regexp', 'url', 'url-prefix'],
            C = p(v),
            b = ['all', 'aural', 'braille', 'handheld', 'print', 'projection', 'screen', 'tty', 'tv', 'embossed'],
            _ = p(b),
            s = [
                'width',
                'min-width',
                'max-width',
                'height',
                'min-height',
                'max-height',
                'device-width',
                'min-device-width',
                'max-device-width',
                'device-height',
                'min-device-height',
                'max-device-height',
                'aspect-ratio',
                'min-aspect-ratio',
                'max-aspect-ratio',
                'device-aspect-ratio',
                'min-device-aspect-ratio',
                'max-device-aspect-ratio',
                'color',
                'min-color',
                'max-color',
                'color-index',
                'min-color-index',
                'max-color-index',
                'monochrome',
                'min-monochrome',
                'max-monochrome',
                'resolution',
                'min-resolution',
                'max-resolution',
                'scan',
                'grid',
                'orientation',
                'device-pixel-ratio',
                'min-device-pixel-ratio',
                'max-device-pixel-ratio',
                'pointer',
                'any-pointer',
                'hover',
                'any-hover',
                'prefers-color-scheme',
                'dynamic-range',
                'video-dynamic-range',
            ],
            g = p(s),
            h = [
                'landscape',
                'portrait',
                'none',
                'coarse',
                'fine',
                'on-demand',
                'hover',
                'interlace',
                'progressive',
                'dark',
                'light',
                'standard',
                'high',
            ],
            w = p(h),
            k = [
                'align-content',
                'align-items',
                'align-self',
                'alignment-adjust',
                'alignment-baseline',
                'all',
                'anchor-point',
                'animation',
                'animation-delay',
                'animation-direction',
                'animation-duration',
                'animation-fill-mode',
                'animation-iteration-count',
                'animation-name',
                'animation-play-state',
                'animation-timing-function',
                'appearance',
                'azimuth',
                'backdrop-filter',
                'backface-visibility',
                'background',
                'background-attachment',
                'background-blend-mode',
                'background-clip',
                'background-color',
                'background-image',
                'background-origin',
                'background-position',
                'background-position-x',
                'background-position-y',
                'background-repeat',
                'background-size',
                'baseline-shift',
                'binding',
                'bleed',
                'block-size',
                'bookmark-label',
                'bookmark-level',
                'bookmark-state',
                'bookmark-target',
                'border',
                'border-bottom',
                'border-bottom-color',
                'border-bottom-left-radius',
                'border-bottom-right-radius',
                'border-bottom-style',
                'border-bottom-width',
                'border-collapse',
                'border-color',
                'border-image',
                'border-image-outset',
                'border-image-repeat',
                'border-image-slice',
                'border-image-source',
                'border-image-width',
                'border-left',
                'border-left-color',
                'border-left-style',
                'border-left-width',
                'border-radius',
                'border-right',
                'border-right-color',
                'border-right-style',
                'border-right-width',
                'border-spacing',
                'border-style',
                'border-top',
                'border-top-color',
                'border-top-left-radius',
                'border-top-right-radius',
                'border-top-style',
                'border-top-width',
                'border-width',
                'bottom',
                'box-decoration-break',
                'box-shadow',
                'box-sizing',
                'break-after',
                'break-before',
                'break-inside',
                'caption-side',
                'caret-color',
                'clear',
                'clip',
                'color',
                'color-profile',
                'column-count',
                'column-fill',
                'column-gap',
                'column-rule',
                'column-rule-color',
                'column-rule-style',
                'column-rule-width',
                'column-span',
                'column-width',
                'columns',
                'contain',
                'content',
                'counter-increment',
                'counter-reset',
                'crop',
                'cue',
                'cue-after',
                'cue-before',
                'cursor',
                'direction',
                'display',
                'dominant-baseline',
                'drop-initial-after-adjust',
                'drop-initial-after-align',
                'drop-initial-before-adjust',
                'drop-initial-before-align',
                'drop-initial-size',
                'drop-initial-value',
                'elevation',
                'empty-cells',
                'fit',
                'fit-content',
                'fit-position',
                'flex',
                'flex-basis',
                'flex-direction',
                'flex-flow',
                'flex-grow',
                'flex-shrink',
                'flex-wrap',
                'float',
                'float-offset',
                'flow-from',
                'flow-into',
                'font',
                'font-family',
                'font-feature-settings',
                'font-kerning',
                'font-language-override',
                'font-optical-sizing',
                'font-size',
                'font-size-adjust',
                'font-stretch',
                'font-style',
                'font-synthesis',
                'font-variant',
                'font-variant-alternates',
                'font-variant-caps',
                'font-variant-east-asian',
                'font-variant-ligatures',
                'font-variant-numeric',
                'font-variant-position',
                'font-variation-settings',
                'font-weight',
                'gap',
                'grid',
                'grid-area',
                'grid-auto-columns',
                'grid-auto-flow',
                'grid-auto-rows',
                'grid-column',
                'grid-column-end',
                'grid-column-gap',
                'grid-column-start',
                'grid-gap',
                'grid-row',
                'grid-row-end',
                'grid-row-gap',
                'grid-row-start',
                'grid-template',
                'grid-template-areas',
                'grid-template-columns',
                'grid-template-rows',
                'hanging-punctuation',
                'height',
                'hyphens',
                'icon',
                'image-orientation',
                'image-rendering',
                'image-resolution',
                'inline-box-align',
                'inset',
                'inset-block',
                'inset-block-end',
                'inset-block-start',
                'inset-inline',
                'inset-inline-end',
                'inset-inline-start',
                'isolation',
                'justify-content',
                'justify-items',
                'justify-self',
                'left',
                'letter-spacing',
                'line-break',
                'line-height',
                'line-height-step',
                'line-stacking',
                'line-stacking-ruby',
                'line-stacking-shift',
                'line-stacking-strategy',
                'list-style',
                'list-style-image',
                'list-style-position',
                'list-style-type',
                'margin',
                'margin-bottom',
                'margin-left',
                'margin-right',
                'margin-top',
                'marks',
                'marquee-direction',
                'marquee-loop',
                'marquee-play-count',
                'marquee-speed',
                'marquee-style',
                'mask-clip',
                'mask-composite',
                'mask-image',
                'mask-mode',
                'mask-origin',
                'mask-position',
                'mask-repeat',
                'mask-size',
                'mask-type',
                'max-block-size',
                'max-height',
                'max-inline-size',
                'max-width',
                'min-block-size',
                'min-height',
                'min-inline-size',
                'min-width',
                'mix-blend-mode',
                'move-to',
                'nav-down',
                'nav-index',
                'nav-left',
                'nav-right',
                'nav-up',
                'object-fit',
                'object-position',
                'offset',
                'offset-anchor',
                'offset-distance',
                'offset-path',
                'offset-position',
                'offset-rotate',
                'opacity',
                'order',
                'orphans',
                'outline',
                'outline-color',
                'outline-offset',
                'outline-style',
                'outline-width',
                'overflow',
                'overflow-style',
                'overflow-wrap',
                'overflow-x',
                'overflow-y',
                'padding',
                'padding-bottom',
                'padding-left',
                'padding-right',
                'padding-top',
                'page',
                'page-break-after',
                'page-break-before',
                'page-break-inside',
                'page-policy',
                'pause',
                'pause-after',
                'pause-before',
                'perspective',
                'perspective-origin',
                'pitch',
                'pitch-range',
                'place-content',
                'place-items',
                'place-self',
                'play-during',
                'position',
                'presentation-level',
                'punctuation-trim',
                'quotes',
                'region-break-after',
                'region-break-before',
                'region-break-inside',
                'region-fragment',
                'rendering-intent',
                'resize',
                'rest',
                'rest-after',
                'rest-before',
                'richness',
                'right',
                'rotate',
                'rotation',
                'rotation-point',
                'row-gap',
                'ruby-align',
                'ruby-overhang',
                'ruby-position',
                'ruby-span',
                'scale',
                'scroll-behavior',
                'scroll-margin',
                'scroll-margin-block',
                'scroll-margin-block-end',
                'scroll-margin-block-start',
                'scroll-margin-bottom',
                'scroll-margin-inline',
                'scroll-margin-inline-end',
                'scroll-margin-inline-start',
                'scroll-margin-left',
                'scroll-margin-right',
                'scroll-margin-top',
                'scroll-padding',
                'scroll-padding-block',
                'scroll-padding-block-end',
                'scroll-padding-block-start',
                'scroll-padding-bottom',
                'scroll-padding-inline',
                'scroll-padding-inline-end',
                'scroll-padding-inline-start',
                'scroll-padding-left',
                'scroll-padding-right',
                'scroll-padding-top',
                'scroll-snap-align',
                'scroll-snap-type',
                'shape-image-threshold',
                'shape-inside',
                'shape-margin',
                'shape-outside',
                'size',
                'speak',
                'speak-as',
                'speak-header',
                'speak-numeral',
                'speak-punctuation',
                'speech-rate',
                'stress',
                'string-set',
                'tab-size',
                'table-layout',
                'target',
                'target-name',
                'target-new',
                'target-position',
                'text-align',
                'text-align-last',
                'text-combine-upright',
                'text-decoration',
                'text-decoration-color',
                'text-decoration-line',
                'text-decoration-skip',
                'text-decoration-skip-ink',
                'text-decoration-style',
                'text-emphasis',
                'text-emphasis-color',
                'text-emphasis-position',
                'text-emphasis-style',
                'text-height',
                'text-indent',
                'text-justify',
                'text-orientation',
                'text-outline',
                'text-overflow',
                'text-rendering',
                'text-shadow',
                'text-size-adjust',
                'text-space-collapse',
                'text-transform',
                'text-underline-position',
                'text-wrap',
                'top',
                'touch-action',
                'transform',
                'transform-origin',
                'transform-style',
                'transition',
                'transition-delay',
                'transition-duration',
                'transition-property',
                'transition-timing-function',
                'translate',
                'unicode-bidi',
                'user-select',
                'vertical-align',
                'visibility',
                'voice-balance',
                'voice-duration',
                'voice-family',
                'voice-pitch',
                'voice-range',
                'voice-rate',
                'voice-stress',
                'voice-volume',
                'volume',
                'white-space',
                'widows',
                'width',
                'will-change',
                'word-break',
                'word-spacing',
                'word-wrap',
                'writing-mode',
                'z-index',
                'clip-path',
                'clip-rule',
                'mask',
                'enable-background',
                'filter',
                'flood-color',
                'flood-opacity',
                'lighting-color',
                'stop-color',
                'stop-opacity',
                'pointer-events',
                'color-interpolation',
                'color-interpolation-filters',
                'color-rendering',
                'fill',
                'fill-opacity',
                'fill-rule',
                'image-rendering',
                'marker',
                'marker-end',
                'marker-mid',
                'marker-start',
                'paint-order',
                'shape-rendering',
                'stroke',
                'stroke-dasharray',
                'stroke-dashoffset',
                'stroke-linecap',
                'stroke-linejoin',
                'stroke-miterlimit',
                'stroke-opacity',
                'stroke-width',
                'text-rendering',
                'baseline-shift',
                'dominant-baseline',
                'glyph-orientation-horizontal',
                'glyph-orientation-vertical',
                'text-anchor',
                'writing-mode',
            ],
            c = p(k),
            d = [
                'accent-color',
                'aspect-ratio',
                'border-block',
                'border-block-color',
                'border-block-end',
                'border-block-end-color',
                'border-block-end-style',
                'border-block-end-width',
                'border-block-start',
                'border-block-start-color',
                'border-block-start-style',
                'border-block-start-width',
                'border-block-style',
                'border-block-width',
                'border-inline',
                'border-inline-color',
                'border-inline-end',
                'border-inline-end-color',
                'border-inline-end-style',
                'border-inline-end-width',
                'border-inline-start',
                'border-inline-start-color',
                'border-inline-start-style',
                'border-inline-start-width',
                'border-inline-style',
                'border-inline-width',
                'content-visibility',
                'margin-block',
                'margin-block-end',
                'margin-block-start',
                'margin-inline',
                'margin-inline-end',
                'margin-inline-start',
                'overflow-anchor',
                'overscroll-behavior',
                'padding-block',
                'padding-block-end',
                'padding-block-start',
                'padding-inline',
                'padding-inline-end',
                'padding-inline-start',
                'scroll-snap-stop',
                'scrollbar-3d-light-color',
                'scrollbar-arrow-color',
                'scrollbar-base-color',
                'scrollbar-dark-shadow-color',
                'scrollbar-face-color',
                'scrollbar-highlight-color',
                'scrollbar-shadow-color',
                'scrollbar-track-color',
                'searchfield-cancel-button',
                'searchfield-decoration',
                'searchfield-results-button',
                'searchfield-results-decoration',
                'shape-inside',
                'zoom',
            ],
            S = p(d),
            E = [
                'font-display',
                'font-family',
                'src',
                'unicode-range',
                'font-variant',
                'font-feature-settings',
                'font-stretch',
                'font-weight',
                'font-style',
            ],
            z = p(E),
            y = [
                'additive-symbols',
                'fallback',
                'negative',
                'pad',
                'prefix',
                'range',
                'speak-as',
                'suffix',
                'symbols',
                'system',
            ],
            H = p(y),
            M = [
                'aliceblue',
                'antiquewhite',
                'aqua',
                'aquamarine',
                'azure',
                'beige',
                'bisque',
                'black',
                'blanchedalmond',
                'blue',
                'blueviolet',
                'brown',
                'burlywood',
                'cadetblue',
                'chartreuse',
                'chocolate',
                'coral',
                'cornflowerblue',
                'cornsilk',
                'crimson',
                'cyan',
                'darkblue',
                'darkcyan',
                'darkgoldenrod',
                'darkgray',
                'darkgreen',
                'darkgrey',
                'darkkhaki',
                'darkmagenta',
                'darkolivegreen',
                'darkorange',
                'darkorchid',
                'darkred',
                'darksalmon',
                'darkseagreen',
                'darkslateblue',
                'darkslategray',
                'darkslategrey',
                'darkturquoise',
                'darkviolet',
                'deeppink',
                'deepskyblue',
                'dimgray',
                'dimgrey',
                'dodgerblue',
                'firebrick',
                'floralwhite',
                'forestgreen',
                'fuchsia',
                'gainsboro',
                'ghostwhite',
                'gold',
                'goldenrod',
                'gray',
                'grey',
                'green',
                'greenyellow',
                'honeydew',
                'hotpink',
                'indianred',
                'indigo',
                'ivory',
                'khaki',
                'lavender',
                'lavenderblush',
                'lawngreen',
                'lemonchiffon',
                'lightblue',
                'lightcoral',
                'lightcyan',
                'lightgoldenrodyellow',
                'lightgray',
                'lightgreen',
                'lightgrey',
                'lightpink',
                'lightsalmon',
                'lightseagreen',
                'lightskyblue',
                'lightslategray',
                'lightslategrey',
                'lightsteelblue',
                'lightyellow',
                'lime',
                'limegreen',
                'linen',
                'magenta',
                'maroon',
                'mediumaquamarine',
                'mediumblue',
                'mediumorchid',
                'mediumpurple',
                'mediumseagreen',
                'mediumslateblue',
                'mediumspringgreen',
                'mediumturquoise',
                'mediumvioletred',
                'midnightblue',
                'mintcream',
                'mistyrose',
                'moccasin',
                'navajowhite',
                'navy',
                'oldlace',
                'olive',
                'olivedrab',
                'orange',
                'orangered',
                'orchid',
                'palegoldenrod',
                'palegreen',
                'paleturquoise',
                'palevioletred',
                'papayawhip',
                'peachpuff',
                'peru',
                'pink',
                'plum',
                'powderblue',
                'purple',
                'rebeccapurple',
                'red',
                'rosybrown',
                'royalblue',
                'saddlebrown',
                'salmon',
                'sandybrown',
                'seagreen',
                'seashell',
                'sienna',
                'silver',
                'skyblue',
                'slateblue',
                'slategray',
                'slategrey',
                'snow',
                'springgreen',
                'steelblue',
                'tan',
                'teal',
                'thistle',
                'tomato',
                'turquoise',
                'violet',
                'wheat',
                'white',
                'whitesmoke',
                'yellow',
                'yellowgreen',
            ],
            B = p(M),
            X = [
                'above',
                'absolute',
                'activeborder',
                'additive',
                'activecaption',
                'afar',
                'after-white-space',
                'ahead',
                'alias',
                'all',
                'all-scroll',
                'alphabetic',
                'alternate',
                'always',
                'amharic',
                'amharic-abegede',
                'antialiased',
                'appworkspace',
                'arabic-indic',
                'armenian',
                'asterisks',
                'attr',
                'auto',
                'auto-flow',
                'avoid',
                'avoid-column',
                'avoid-page',
                'avoid-region',
                'axis-pan',
                'background',
                'backwards',
                'baseline',
                'below',
                'bidi-override',
                'binary',
                'bengali',
                'blink',
                'block',
                'block-axis',
                'blur',
                'bold',
                'bolder',
                'border',
                'border-box',
                'both',
                'bottom',
                'break',
                'break-all',
                'break-word',
                'brightness',
                'bullets',
                'button',
                'buttonface',
                'buttonhighlight',
                'buttonshadow',
                'buttontext',
                'calc',
                'cambodian',
                'capitalize',
                'caps-lock-indicator',
                'caption',
                'captiontext',
                'caret',
                'cell',
                'center',
                'checkbox',
                'circle',
                'cjk-decimal',
                'cjk-earthly-branch',
                'cjk-heavenly-stem',
                'cjk-ideographic',
                'clear',
                'clip',
                'close-quote',
                'col-resize',
                'collapse',
                'color',
                'color-burn',
                'color-dodge',
                'column',
                'column-reverse',
                'compact',
                'condensed',
                'conic-gradient',
                'contain',
                'content',
                'contents',
                'content-box',
                'context-menu',
                'continuous',
                'contrast',
                'copy',
                'counter',
                'counters',
                'cover',
                'crop',
                'cross',
                'crosshair',
                'cubic-bezier',
                'currentcolor',
                'cursive',
                'cyclic',
                'darken',
                'dashed',
                'decimal',
                'decimal-leading-zero',
                'default',
                'default-button',
                'dense',
                'destination-atop',
                'destination-in',
                'destination-out',
                'destination-over',
                'devanagari',
                'difference',
                'disc',
                'discard',
                'disclosure-closed',
                'disclosure-open',
                'document',
                'dot-dash',
                'dot-dot-dash',
                'dotted',
                'double',
                'down',
                'drop-shadow',
                'e-resize',
                'ease',
                'ease-in',
                'ease-in-out',
                'ease-out',
                'element',
                'ellipse',
                'ellipsis',
                'embed',
                'end',
                'ethiopic',
                'ethiopic-abegede',
                'ethiopic-abegede-am-et',
                'ethiopic-abegede-gez',
                'ethiopic-abegede-ti-er',
                'ethiopic-abegede-ti-et',
                'ethiopic-halehame-aa-er',
                'ethiopic-halehame-aa-et',
                'ethiopic-halehame-am-et',
                'ethiopic-halehame-gez',
                'ethiopic-halehame-om-et',
                'ethiopic-halehame-sid-et',
                'ethiopic-halehame-so-et',
                'ethiopic-halehame-ti-er',
                'ethiopic-halehame-ti-et',
                'ethiopic-halehame-tig',
                'ethiopic-numeric',
                'ew-resize',
                'exclusion',
                'expanded',
                'extends',
                'extra-condensed',
                'extra-expanded',
                'fantasy',
                'fast',
                'fill',
                'fill-box',
                'fixed',
                'flat',
                'flex',
                'flex-end',
                'flex-start',
                'footnotes',
                'forwards',
                'from',
                'geometricPrecision',
                'georgian',
                'grayscale',
                'graytext',
                'grid',
                'groove',
                'gujarati',
                'gurmukhi',
                'hand',
                'hangul',
                'hangul-consonant',
                'hard-light',
                'hebrew',
                'help',
                'hidden',
                'hide',
                'higher',
                'highlight',
                'highlighttext',
                'hiragana',
                'hiragana-iroha',
                'horizontal',
                'hsl',
                'hsla',
                'hue',
                'hue-rotate',
                'icon',
                'ignore',
                'inactiveborder',
                'inactivecaption',
                'inactivecaptiontext',
                'infinite',
                'infobackground',
                'infotext',
                'inherit',
                'initial',
                'inline',
                'inline-axis',
                'inline-block',
                'inline-flex',
                'inline-grid',
                'inline-table',
                'inset',
                'inside',
                'intrinsic',
                'invert',
                'italic',
                'japanese-formal',
                'japanese-informal',
                'justify',
                'kannada',
                'katakana',
                'katakana-iroha',
                'keep-all',
                'khmer',
                'korean-hangul-formal',
                'korean-hanja-formal',
                'korean-hanja-informal',
                'landscape',
                'lao',
                'large',
                'larger',
                'left',
                'level',
                'lighter',
                'lighten',
                'line-through',
                'linear',
                'linear-gradient',
                'lines',
                'list-item',
                'listbox',
                'listitem',
                'local',
                'logical',
                'loud',
                'lower',
                'lower-alpha',
                'lower-armenian',
                'lower-greek',
                'lower-hexadecimal',
                'lower-latin',
                'lower-norwegian',
                'lower-roman',
                'lowercase',
                'ltr',
                'luminosity',
                'malayalam',
                'manipulation',
                'match',
                'matrix',
                'matrix3d',
                'media-play-button',
                'media-slider',
                'media-sliderthumb',
                'media-volume-slider',
                'media-volume-sliderthumb',
                'medium',
                'menu',
                'menulist',
                'menulist-button',
                'menutext',
                'message-box',
                'middle',
                'min-intrinsic',
                'mix',
                'mongolian',
                'monospace',
                'move',
                'multiple',
                'multiple_mask_images',
                'multiply',
                'myanmar',
                'n-resize',
                'narrower',
                'ne-resize',
                'nesw-resize',
                'no-close-quote',
                'no-drop',
                'no-open-quote',
                'no-repeat',
                'none',
                'normal',
                'not-allowed',
                'nowrap',
                'ns-resize',
                'numbers',
                'numeric',
                'nw-resize',
                'nwse-resize',
                'oblique',
                'octal',
                'opacity',
                'open-quote',
                'optimizeLegibility',
                'optimizeSpeed',
                'oriya',
                'oromo',
                'outset',
                'outside',
                'outside-shape',
                'overlay',
                'overline',
                'padding',
                'padding-box',
                'painted',
                'page',
                'paused',
                'persian',
                'perspective',
                'pinch-zoom',
                'plus-darker',
                'plus-lighter',
                'pointer',
                'polygon',
                'portrait',
                'pre',
                'pre-line',
                'pre-wrap',
                'preserve-3d',
                'progress',
                'push-button',
                'radial-gradient',
                'radio',
                'read-only',
                'read-write',
                'read-write-plaintext-only',
                'rectangle',
                'region',
                'relative',
                'repeat',
                'repeating-linear-gradient',
                'repeating-radial-gradient',
                'repeating-conic-gradient',
                'repeat-x',
                'repeat-y',
                'reset',
                'reverse',
                'rgb',
                'rgba',
                'ridge',
                'right',
                'rotate',
                'rotate3d',
                'rotateX',
                'rotateY',
                'rotateZ',
                'round',
                'row',
                'row-resize',
                'row-reverse',
                'rtl',
                'run-in',
                'running',
                's-resize',
                'sans-serif',
                'saturate',
                'saturation',
                'scale',
                'scale3d',
                'scaleX',
                'scaleY',
                'scaleZ',
                'screen',
                'scroll',
                'scrollbar',
                'scroll-position',
                'se-resize',
                'searchfield',
                'searchfield-cancel-button',
                'searchfield-decoration',
                'searchfield-results-button',
                'searchfield-results-decoration',
                'self-start',
                'self-end',
                'semi-condensed',
                'semi-expanded',
                'separate',
                'sepia',
                'serif',
                'show',
                'sidama',
                'simp-chinese-formal',
                'simp-chinese-informal',
                'single',
                'skew',
                'skewX',
                'skewY',
                'skip-white-space',
                'slide',
                'slider-horizontal',
                'slider-vertical',
                'sliderthumb-horizontal',
                'sliderthumb-vertical',
                'slow',
                'small',
                'small-caps',
                'small-caption',
                'smaller',
                'soft-light',
                'solid',
                'somali',
                'source-atop',
                'source-in',
                'source-out',
                'source-over',
                'space',
                'space-around',
                'space-between',
                'space-evenly',
                'spell-out',
                'square',
                'square-button',
                'start',
                'static',
                'status-bar',
                'stretch',
                'stroke',
                'stroke-box',
                'sub',
                'subpixel-antialiased',
                'svg_masks',
                'super',
                'sw-resize',
                'symbolic',
                'symbols',
                'system-ui',
                'table',
                'table-caption',
                'table-cell',
                'table-column',
                'table-column-group',
                'table-footer-group',
                'table-header-group',
                'table-row',
                'table-row-group',
                'tamil',
                'telugu',
                'text',
                'text-bottom',
                'text-top',
                'textarea',
                'textfield',
                'thai',
                'thick',
                'thin',
                'threeddarkshadow',
                'threedface',
                'threedhighlight',
                'threedlightshadow',
                'threedshadow',
                'tibetan',
                'tigre',
                'tigrinya-er',
                'tigrinya-er-abegede',
                'tigrinya-et',
                'tigrinya-et-abegede',
                'to',
                'top',
                'trad-chinese-formal',
                'trad-chinese-informal',
                'transform',
                'translate',
                'translate3d',
                'translateX',
                'translateY',
                'translateZ',
                'transparent',
                'ultra-condensed',
                'ultra-expanded',
                'underline',
                'unidirectional-pan',
                'unset',
                'up',
                'upper-alpha',
                'upper-armenian',
                'upper-greek',
                'upper-hexadecimal',
                'upper-latin',
                'upper-norwegian',
                'upper-roman',
                'uppercase',
                'urdu',
                'url',
                'var',
                'vertical',
                'vertical-text',
                'view-box',
                'visible',
                'visibleFill',
                'visiblePainted',
                'visibleStroke',
                'visual',
                'w-resize',
                'wait',
                'wave',
                'wider',
                'window',
                'windowframe',
                'windowtext',
                'words',
                'wrap',
                'wrap-reverse',
                'x-large',
                'x-small',
                'xor',
                'xx-large',
                'xx-small',
            ],
            re = p(X),
            ne = v.concat(b).concat(s).concat(h).concat(k).concat(d).concat(M).concat(X)
        o.registerHelper('hintWords', 'css', ne)
        function N(F, D) {
            for (var V = !1, j; (j = F.next()) != null; ) {
                if (V && j == '/') {
                    D.tokenize = null
                    break
                }
                V = j == '*'
            }
            return ['comment', 'comment']
        }
        o.defineMIME('text/css', {
            documentTypes: C,
            mediaTypes: _,
            mediaFeatures: g,
            mediaValueKeywords: w,
            propertyKeywords: c,
            nonStandardPropertyKeywords: S,
            fontProperties: z,
            counterDescriptors: H,
            colorKeywords: B,
            valueKeywords: re,
            tokenHooks: {
                '/': function (F, D) {
                    return F.eat('*') ? ((D.tokenize = N), N(F, D)) : !1
                },
            },
            name: 'css',
        }),
            o.defineMIME('text/x-scss', {
                mediaTypes: _,
                mediaFeatures: g,
                mediaValueKeywords: w,
                propertyKeywords: c,
                nonStandardPropertyKeywords: S,
                colorKeywords: B,
                valueKeywords: re,
                fontProperties: z,
                allowNested: !0,
                lineComment: '//',
                tokenHooks: {
                    '/': function (F, D) {
                        return F.eat('/')
                            ? (F.skipToEnd(), ['comment', 'comment'])
                            : F.eat('*')
                              ? ((D.tokenize = N), N(F, D))
                              : ['operator', 'operator']
                    },
                    ':': function (F) {
                        return F.match(/^\s*\{/, !1) ? [null, null] : !1
                    },
                    $: function (F) {
                        return (
                            F.match(/^[\w-]+/),
                            F.match(/^\s*:/, !1) ? ['variable-2', 'variable-definition'] : ['variable-2', 'variable']
                        )
                    },
                    '#': function (F) {
                        return F.eat('{') ? [null, 'interpolation'] : !1
                    },
                },
                name: 'css',
                helperType: 'scss',
            }),
            o.defineMIME('text/x-less', {
                mediaTypes: _,
                mediaFeatures: g,
                mediaValueKeywords: w,
                propertyKeywords: c,
                nonStandardPropertyKeywords: S,
                colorKeywords: B,
                valueKeywords: re,
                fontProperties: z,
                allowNested: !0,
                lineComment: '//',
                tokenHooks: {
                    '/': function (F, D) {
                        return F.eat('/')
                            ? (F.skipToEnd(), ['comment', 'comment'])
                            : F.eat('*')
                              ? ((D.tokenize = N), N(F, D))
                              : ['operator', 'operator']
                    },
                    '@': function (F) {
                        return F.eat('{')
                            ? [null, 'interpolation']
                            : F.match(
                                    /^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,
                                    !1,
                                )
                              ? !1
                              : (F.eatWhile(/[\w\\\-]/),
                                F.match(/^\s*:/, !1)
                                    ? ['variable-2', 'variable-definition']
                                    : ['variable-2', 'variable'])
                    },
                    '&': function () {
                        return ['atom', 'atom']
                    },
                },
                name: 'css',
                helperType: 'less',
            }),
            o.defineMIME('text/x-gss', {
                documentTypes: C,
                mediaTypes: _,
                mediaFeatures: g,
                propertyKeywords: c,
                nonStandardPropertyKeywords: S,
                fontProperties: z,
                counterDescriptors: H,
                colorKeywords: B,
                valueKeywords: re,
                supportsAtComponent: !0,
                tokenHooks: {
                    '/': function (F, D) {
                        return F.eat('*') ? ((D.tokenize = N), N(F, D)) : !1
                    },
                },
                name: 'css',
                helperType: 'gss',
            })
    })
})
var Ms = Ue((Es, zs) => {
    ;(function (o) {
        typeof Es == 'object' && typeof zs == 'object'
            ? o(Re())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        o.defineMode('diff', function () {
            var p = { '+': 'positive', '-': 'negative', '@': 'meta' }
            return {
                token: function (v) {
                    var C = v.string.search(/[\t ]+?$/)
                    if (!v.sol() || C === 0)
                        return v.skipToEnd(), ('error ' + (p[v.string.charAt(0)] || '')).replace(/ $/, '')
                    var b = p[v.peek()] || v.skipToEnd()
                    return C === -1 ? v.skipToEnd() : (v.pos = C), b
                },
            }
        }),
            o.defineMIME('text/x-diff', 'diff')
    })
})
var dn = Ue((As, Ds) => {
    ;(function (o) {
        typeof As == 'object' && typeof Ds == 'object'
            ? o(Re())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        var p = {
                autoSelfClosers: {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    command: !0,
                    embed: !0,
                    frame: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    keygen: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0,
                    menuitem: !0,
                },
                implicitlyClosed: {
                    dd: !0,
                    li: !0,
                    optgroup: !0,
                    option: !0,
                    p: !0,
                    rp: !0,
                    rt: !0,
                    tbody: !0,
                    td: !0,
                    tfoot: !0,
                    th: !0,
                    tr: !0,
                },
                contextGrabbers: {
                    dd: { dd: !0, dt: !0 },
                    dt: { dd: !0, dt: !0 },
                    li: { li: !0 },
                    option: { option: !0, optgroup: !0 },
                    optgroup: { optgroup: !0 },
                    p: {
                        address: !0,
                        article: !0,
                        aside: !0,
                        blockquote: !0,
                        dir: !0,
                        div: !0,
                        dl: !0,
                        fieldset: !0,
                        footer: !0,
                        form: !0,
                        h1: !0,
                        h2: !0,
                        h3: !0,
                        h4: !0,
                        h5: !0,
                        h6: !0,
                        header: !0,
                        hgroup: !0,
                        hr: !0,
                        menu: !0,
                        nav: !0,
                        ol: !0,
                        p: !0,
                        pre: !0,
                        section: !0,
                        table: !0,
                        ul: !0,
                    },
                    rp: { rp: !0, rt: !0 },
                    rt: { rp: !0, rt: !0 },
                    tbody: { tbody: !0, tfoot: !0 },
                    td: { td: !0, th: !0 },
                    tfoot: { tbody: !0 },
                    th: { td: !0, th: !0 },
                    thead: { tbody: !0, tfoot: !0 },
                    tr: { tr: !0 },
                },
                doNotIndent: { pre: !0 },
                allowUnquoted: !0,
                allowMissing: !0,
                caseFold: !0,
            },
            v = {
                autoSelfClosers: {},
                implicitlyClosed: {},
                contextGrabbers: {},
                doNotIndent: {},
                allowUnquoted: !1,
                allowMissing: !1,
                allowMissingTagName: !1,
                caseFold: !1,
            }
        o.defineMode('xml', function (C, b) {
            var _ = C.indentUnit,
                s = {},
                g = b.htmlMode ? p : v
            for (var h in g) s[h] = g[h]
            for (var h in b) s[h] = b[h]
            var w, k
            function c(x, K) {
                function Y(le) {
                    return (K.tokenize = le), le(x, K)
                }
                var I = x.next()
                if (I == '<')
                    return x.eat('!')
                        ? x.eat('[')
                            ? x.match('CDATA[')
                                ? Y(E('atom', ']]>'))
                                : null
                            : x.match('--')
                              ? Y(E('comment', '-->'))
                              : x.match('DOCTYPE', !0, !0)
                                ? (x.eatWhile(/[\w\._\-]/), Y(z(1)))
                                : null
                        : x.eat('?')
                          ? (x.eatWhile(/[\w\._\-]/), (K.tokenize = E('meta', '?>')), 'meta')
                          : ((w = x.eat('/') ? 'closeTag' : 'openTag'), (K.tokenize = d), 'tag bracket')
                if (I == '&') {
                    var W
                    return (
                        x.eat('#')
                            ? x.eat('x')
                                ? (W = x.eatWhile(/[a-fA-F\d]/) && x.eat(';'))
                                : (W = x.eatWhile(/[\d]/) && x.eat(';'))
                            : (W = x.eatWhile(/[\w\.\-:]/) && x.eat(';')),
                        W ? 'atom' : 'error'
                    )
                } else return x.eatWhile(/[^&<]/), null
            }
            c.isInText = !0
            function d(x, K) {
                var Y = x.next()
                if (Y == '>' || (Y == '/' && x.eat('>')))
                    return (K.tokenize = c), (w = Y == '>' ? 'endTag' : 'selfcloseTag'), 'tag bracket'
                if (Y == '=') return (w = 'equals'), null
                if (Y == '<') {
                    ;(K.tokenize = c), (K.state = X), (K.tagName = K.tagStart = null)
                    var I = K.tokenize(x, K)
                    return I ? I + ' tag error' : 'tag error'
                } else
                    return /[\'\"]/.test(Y)
                        ? ((K.tokenize = S(Y)), (K.stringStartCol = x.column()), K.tokenize(x, K))
                        : (x.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), 'word')
            }
            function S(x) {
                var K = function (Y, I) {
                    for (; !Y.eol(); )
                        if (Y.next() == x) {
                            I.tokenize = d
                            break
                        }
                    return 'string'
                }
                return (K.isInAttribute = !0), K
            }
            function E(x, K) {
                return function (Y, I) {
                    for (; !Y.eol(); ) {
                        if (Y.match(K)) {
                            I.tokenize = c
                            break
                        }
                        Y.next()
                    }
                    return x
                }
            }
            function z(x) {
                return function (K, Y) {
                    for (var I; (I = K.next()) != null; ) {
                        if (I == '<') return (Y.tokenize = z(x + 1)), Y.tokenize(K, Y)
                        if (I == '>')
                            if (x == 1) {
                                Y.tokenize = c
                                break
                            } else return (Y.tokenize = z(x - 1)), Y.tokenize(K, Y)
                    }
                    return 'meta'
                }
            }
            function y(x) {
                return x && x.toLowerCase()
            }
            function H(x, K, Y) {
                ;(this.prev = x.context),
                    (this.tagName = K || ''),
                    (this.indent = x.indented),
                    (this.startOfLine = Y),
                    (s.doNotIndent.hasOwnProperty(K) || (x.context && x.context.noIndent)) && (this.noIndent = !0)
            }
            function M(x) {
                x.context && (x.context = x.context.prev)
            }
            function B(x, K) {
                for (var Y; ; ) {
                    if (
                        !x.context ||
                        ((Y = x.context.tagName),
                        !s.contextGrabbers.hasOwnProperty(y(Y)) || !s.contextGrabbers[y(Y)].hasOwnProperty(y(K)))
                    )
                        return
                    M(x)
                }
            }
            function X(x, K, Y) {
                return x == 'openTag' ? ((Y.tagStart = K.column()), re) : x == 'closeTag' ? ne : X
            }
            function re(x, K, Y) {
                return x == 'word'
                    ? ((Y.tagName = K.current()), (k = 'tag'), D)
                    : s.allowMissingTagName && x == 'endTag'
                      ? ((k = 'tag bracket'), D(x, K, Y))
                      : ((k = 'error'), re)
            }
            function ne(x, K, Y) {
                if (x == 'word') {
                    var I = K.current()
                    return (
                        Y.context &&
                            Y.context.tagName != I &&
                            s.implicitlyClosed.hasOwnProperty(y(Y.context.tagName)) &&
                            M(Y),
                        (Y.context && Y.context.tagName == I) || s.matchClosing === !1
                            ? ((k = 'tag'), N)
                            : ((k = 'tag error'), F)
                    )
                } else
                    return s.allowMissingTagName && x == 'endTag'
                        ? ((k = 'tag bracket'), N(x, K, Y))
                        : ((k = 'error'), F)
            }
            function N(x, K, Y) {
                return x != 'endTag' ? ((k = 'error'), N) : (M(Y), X)
            }
            function F(x, K, Y) {
                return (k = 'error'), N(x, K, Y)
            }
            function D(x, K, Y) {
                if (x == 'word') return (k = 'attribute'), V
                if (x == 'endTag' || x == 'selfcloseTag') {
                    var I = Y.tagName,
                        W = Y.tagStart
                    return (
                        (Y.tagName = Y.tagStart = null),
                        x == 'selfcloseTag' || s.autoSelfClosers.hasOwnProperty(y(I))
                            ? B(Y, I)
                            : (B(Y, I), (Y.context = new H(Y, I, W == Y.indented))),
                        X
                    )
                }
                return (k = 'error'), D
            }
            function V(x, K, Y) {
                return x == 'equals' ? j : (s.allowMissing || (k = 'error'), D(x, K, Y))
            }
            function j(x, K, Y) {
                return x == 'string'
                    ? J
                    : x == 'word' && s.allowUnquoted
                      ? ((k = 'string'), D)
                      : ((k = 'error'), D(x, K, Y))
            }
            function J(x, K, Y) {
                return x == 'string' ? J : D(x, K, Y)
            }
            return {
                startState: function (x) {
                    var K = { tokenize: c, state: X, indented: x || 0, tagName: null, tagStart: null, context: null }
                    return x != null && (K.baseIndent = x), K
                },
                token: function (x, K) {
                    if ((!K.tagName && x.sol() && (K.indented = x.indentation()), x.eatSpace())) return null
                    w = null
                    var Y = K.tokenize(x, K)
                    return (
                        (Y || w) &&
                            Y != 'comment' &&
                            ((k = null), (K.state = K.state(w || Y, x, K)), k && (Y = k == 'error' ? Y + ' error' : k)),
                        Y
                    )
                },
                indent: function (x, K, Y) {
                    var I = x.context
                    if (x.tokenize.isInAttribute)
                        return x.tagStart == x.indented ? x.stringStartCol + 1 : x.indented + _
                    if (I && I.noIndent) return o.Pass
                    if (x.tokenize != d && x.tokenize != c) return Y ? Y.match(/^(\s*)/)[0].length : 0
                    if (x.tagName)
                        return s.multilineTagIndentPastTag !== !1
                            ? x.tagStart + x.tagName.length + 2
                            : x.tagStart + _ * (s.multilineTagIndentFactor || 1)
                    if (s.alignCDATA && /<!\[CDATA\[/.test(K)) return 0
                    var W = K && /^<(\/)?([\w_:\.-]*)/.exec(K)
                    if (W && W[1])
                        for (; I; )
                            if (I.tagName == W[2]) {
                                I = I.prev
                                break
                            } else if (s.implicitlyClosed.hasOwnProperty(y(I.tagName))) I = I.prev
                            else break
                    else if (W)
                        for (; I; ) {
                            var le = s.contextGrabbers[y(I.tagName)]
                            if (le && le.hasOwnProperty(y(W[2]))) I = I.prev
                            else break
                        }
                    for (; I && I.prev && !I.startOfLine; ) I = I.prev
                    return I ? I.indent + _ : x.baseIndent || 0
                },
                electricInput: /<\/[\s\w:]+>$/,
                blockCommentStart: '<!--',
                blockCommentEnd: '-->',
                configuration: s.htmlMode ? 'html' : 'xml',
                helperType: s.htmlMode ? 'html' : 'xml',
                skipAttribute: function (x) {
                    x.state == j && (x.state = D)
                },
                xmlCurrentTag: function (x) {
                    return x.tagName ? { name: x.tagName, close: x.type == 'closeTag' } : null
                },
                xmlCurrentContext: function (x) {
                    for (var K = [], Y = x.context; Y; Y = Y.prev) K.push(Y.tagName)
                    return K.reverse()
                },
            }
        }),
            o.defineMIME('text/xml', 'xml'),
            o.defineMIME('application/xml', 'xml'),
            o.mimeModes.hasOwnProperty('text/html') || o.defineMIME('text/html', { name: 'xml', htmlMode: !0 })
    })
})
var pn = Ue((qs, Is) => {
    ;(function (o) {
        typeof qs == 'object' && typeof Is == 'object'
            ? o(Re())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        o.defineMode('javascript', function (p, v) {
            var C = p.indentUnit,
                b = v.statementIndent,
                _ = v.jsonld,
                s = v.json || _,
                g = v.trackScope !== !1,
                h = v.typescript,
                w = v.wordCharacters || /[\w$\xa1-\uffff]/,
                k = (function () {
                    function L(ft) {
                        return { type: ft, style: 'keyword' }
                    }
                    var R = L('keyword a'),
                        G = L('keyword b'),
                        ie = L('keyword c'),
                        Oe = L('keyword d'),
                        Ke = L('operator'),
                        Ze = { type: 'atom', style: 'atom' }
                    return {
                        if: L('if'),
                        while: R,
                        with: R,
                        else: G,
                        do: G,
                        try: G,
                        finally: G,
                        return: Oe,
                        break: Oe,
                        continue: Oe,
                        new: L('new'),
                        delete: ie,
                        void: ie,
                        throw: ie,
                        debugger: L('debugger'),
                        var: L('var'),
                        const: L('var'),
                        let: L('var'),
                        function: L('function'),
                        catch: L('catch'),
                        for: L('for'),
                        switch: L('switch'),
                        case: L('case'),
                        default: L('default'),
                        in: Ke,
                        typeof: Ke,
                        instanceof: Ke,
                        true: Ze,
                        false: Ze,
                        null: Ze,
                        undefined: Ze,
                        NaN: Ze,
                        Infinity: Ze,
                        this: L('this'),
                        class: L('class'),
                        super: L('atom'),
                        yield: ie,
                        export: L('export'),
                        import: L('import'),
                        extends: ie,
                        await: ie,
                    }
                })(),
                c = /[+\-*&%=<>!?|~^@]/,
                d = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/
            function S(L) {
                for (var R = !1, G, ie = !1; (G = L.next()) != null; ) {
                    if (!R) {
                        if (G == '/' && !ie) return
                        G == '[' ? (ie = !0) : ie && G == ']' && (ie = !1)
                    }
                    R = !R && G == '\\'
                }
            }
            var E, z
            function y(L, R, G) {
                return (E = L), (z = G), R
            }
            function H(L, R) {
                var G = L.next()
                if (G == '"' || G == "'") return (R.tokenize = M(G)), R.tokenize(L, R)
                if (G == '.' && L.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) return y('number', 'number')
                if (G == '.' && L.match('..')) return y('spread', 'meta')
                if (/[\[\]{}\(\),;\:\.]/.test(G)) return y(G)
                if (G == '=' && L.eat('>')) return y('=>', 'operator')
                if (G == '0' && L.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) return y('number', 'number')
                if (/\d/.test(G))
                    return L.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), y('number', 'number')
                if (G == '/')
                    return L.eat('*')
                        ? ((R.tokenize = B), B(L, R))
                        : L.eat('/')
                          ? (L.skipToEnd(), y('comment', 'comment'))
                          : Qt(L, R, 1)
                            ? (S(L), L.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/), y('regexp', 'string-2'))
                            : (L.eat('='), y('operator', 'operator', L.current()))
                if (G == '`') return (R.tokenize = X), X(L, R)
                if (G == '#' && L.peek() == '!') return L.skipToEnd(), y('meta', 'meta')
                if (G == '#' && L.eatWhile(w)) return y('variable', 'property')
                if (
                    (G == '<' && L.match('!--')) ||
                    (G == '-' && L.match('->') && !/\S/.test(L.string.slice(0, L.start)))
                )
                    return L.skipToEnd(), y('comment', 'comment')
                if (c.test(G))
                    return (
                        (G != '>' || !R.lexical || R.lexical.type != '>') &&
                            (L.eat('=')
                                ? (G == '!' || G == '=') && L.eat('=')
                                : /[<>*+\-|&?]/.test(G) && (L.eat(G), G == '>' && L.eat(G))),
                        G == '?' && L.eat('.') ? y('.') : y('operator', 'operator', L.current())
                    )
                if (w.test(G)) {
                    L.eatWhile(w)
                    var ie = L.current()
                    if (R.lastType != '.') {
                        if (k.propertyIsEnumerable(ie)) {
                            var Oe = k[ie]
                            return y(Oe.type, Oe.style, ie)
                        }
                        if (ie == 'async' && L.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1))
                            return y('async', 'keyword', ie)
                    }
                    return y('variable', 'variable', ie)
                }
            }
            function M(L) {
                return function (R, G) {
                    var ie = !1,
                        Oe
                    if (_ && R.peek() == '@' && R.match(d)) return (G.tokenize = H), y('jsonld-keyword', 'meta')
                    for (; (Oe = R.next()) != null && !(Oe == L && !ie); ) ie = !ie && Oe == '\\'
                    return ie || (G.tokenize = H), y('string', 'string')
                }
            }
            function B(L, R) {
                for (var G = !1, ie; (ie = L.next()); ) {
                    if (ie == '/' && G) {
                        R.tokenize = H
                        break
                    }
                    G = ie == '*'
                }
                return y('comment', 'comment')
            }
            function X(L, R) {
                for (var G = !1, ie; (ie = L.next()) != null; ) {
                    if (!G && (ie == '`' || (ie == '$' && L.eat('{')))) {
                        R.tokenize = H
                        break
                    }
                    G = !G && ie == '\\'
                }
                return y('quasi', 'string-2', L.current())
            }
            var re = '([{}])'
            function ne(L, R) {
                R.fatArrowAt && (R.fatArrowAt = null)
                var G = L.string.indexOf('=>', L.start)
                if (!(G < 0)) {
                    if (h) {
                        var ie = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(L.string.slice(L.start, G))
                        ie && (G = ie.index)
                    }
                    for (var Oe = 0, Ke = !1, Ze = G - 1; Ze >= 0; --Ze) {
                        var ft = L.string.charAt(Ze),
                            Rt = re.indexOf(ft)
                        if (Rt >= 0 && Rt < 3) {
                            if (!Oe) {
                                ++Ze
                                break
                            }
                            if (--Oe == 0) {
                                ft == '(' && (Ke = !0)
                                break
                            }
                        } else if (Rt >= 3 && Rt < 6) ++Oe
                        else if (w.test(ft)) Ke = !0
                        else if (/["'\/`]/.test(ft))
                            for (; ; --Ze) {
                                if (Ze == 0) return
                                var Pe = L.string.charAt(Ze - 1)
                                if (Pe == ft && L.string.charAt(Ze - 2) != '\\') {
                                    Ze--
                                    break
                                }
                            }
                        else if (Ke && !Oe) {
                            ++Ze
                            break
                        }
                    }
                    Ke && !Oe && (R.fatArrowAt = Ze)
                }
            }
            var N = {
                atom: !0,
                number: !0,
                variable: !0,
                string: !0,
                regexp: !0,
                this: !0,
                import: !0,
                'jsonld-keyword': !0,
            }
            function F(L, R, G, ie, Oe, Ke) {
                ;(this.indented = L),
                    (this.column = R),
                    (this.type = G),
                    (this.prev = Oe),
                    (this.info = Ke),
                    ie != null && (this.align = ie)
            }
            function D(L, R) {
                if (!g) return !1
                for (var G = L.localVars; G; G = G.next) if (G.name == R) return !0
                for (var ie = L.context; ie; ie = ie.prev)
                    for (var G = ie.vars; G; G = G.next) if (G.name == R) return !0
            }
            function V(L, R, G, ie, Oe) {
                var Ke = L.cc
                for (
                    j.state = L,
                        j.stream = Oe,
                        j.marked = null,
                        j.cc = Ke,
                        j.style = R,
                        L.lexical.hasOwnProperty('align') || (L.lexical.align = !0);
                    ;

                ) {
                    var Ze = Ke.length ? Ke.pop() : s ? Me : De
                    if (Ze(G, ie)) {
                        for (; Ke.length && Ke[Ke.length - 1].lex; ) Ke.pop()()
                        return j.marked ? j.marked : G == 'variable' && D(L, ie) ? 'variable-2' : R
                    }
                }
            }
            var j = { state: null, column: null, marked: null, cc: null }
            function J() {
                for (var L = arguments.length - 1; L >= 0; L--) j.cc.push(arguments[L])
            }
            function x() {
                return J.apply(null, arguments), !0
            }
            function K(L, R) {
                for (var G = R; G; G = G.next) if (G.name == L) return !0
                return !1
            }
            function Y(L) {
                var R = j.state
                if (((j.marked = 'def'), !!g)) {
                    if (R.context) {
                        if (R.lexical.info == 'var' && R.context && R.context.block) {
                            var G = I(L, R.context)
                            if (G != null) {
                                R.context = G
                                return
                            }
                        } else if (!K(L, R.localVars)) {
                            R.localVars = new ye(L, R.localVars)
                            return
                        }
                    }
                    v.globalVars && !K(L, R.globalVars) && (R.globalVars = new ye(L, R.globalVars))
                }
            }
            function I(L, R) {
                if (R)
                    if (R.block) {
                        var G = I(L, R.prev)
                        return G ? (G == R.prev ? R : new le(G, R.vars, !0)) : null
                    } else return K(L, R.vars) ? R : new le(R.prev, new ye(L, R.vars), !1)
                else return null
            }
            function W(L) {
                return L == 'public' || L == 'private' || L == 'protected' || L == 'abstract' || L == 'readonly'
            }
            function le(L, R, G) {
                ;(this.prev = L), (this.vars = R), (this.block = G)
            }
            function ye(L, R) {
                ;(this.name = L), (this.next = R)
            }
            var q = new ye('this', new ye('arguments', null))
            function T() {
                ;(j.state.context = new le(j.state.context, j.state.localVars, !1)), (j.state.localVars = q)
            }
            function de() {
                ;(j.state.context = new le(j.state.context, j.state.localVars, !0)), (j.state.localVars = null)
            }
            T.lex = de.lex = !0
            function Ee() {
                ;(j.state.localVars = j.state.context.vars), (j.state.context = j.state.context.prev)
            }
            Ee.lex = !0
            function fe(L, R) {
                var G = function () {
                    var ie = j.state,
                        Oe = ie.indented
                    if (ie.lexical.type == 'stat') Oe = ie.lexical.indented
                    else for (var Ke = ie.lexical; Ke && Ke.type == ')' && Ke.align; Ke = Ke.prev) Oe = Ke.indented
                    ie.lexical = new F(Oe, j.stream.column(), L, null, ie.lexical, R)
                }
                return (G.lex = !0), G
            }
            function xe() {
                var L = j.state
                L.lexical.prev &&
                    (L.lexical.type == ')' && (L.indented = L.lexical.indented), (L.lexical = L.lexical.prev))
            }
            xe.lex = !0
            function pe(L) {
                function R(G) {
                    return G == L ? x() : L == ';' || G == '}' || G == ')' || G == ']' ? J() : x(R)
                }
                return R
            }
            function De(L, R) {
                return L == 'var'
                    ? x(fe('vardef', R), rr, pe(';'), xe)
                    : L == 'keyword a'
                      ? x(fe('form'), Ge, De, xe)
                      : L == 'keyword b'
                        ? x(fe('form'), De, xe)
                        : L == 'keyword d'
                          ? j.stream.match(/^\s*$/, !1)
                              ? x()
                              : x(fe('stat'), Je, pe(';'), xe)
                          : L == 'debugger'
                            ? x(pe(';'))
                            : L == '{'
                              ? x(fe('}'), de, Ae, xe, Ee)
                              : L == ';'
                                ? x()
                                : L == 'if'
                                  ? (j.state.lexical.info == 'else' &&
                                        j.state.cc[j.state.cc.length - 1] == xe &&
                                        j.state.cc.pop()(),
                                    x(fe('form'), Ge, De, xe, Br))
                                  : L == 'function'
                                    ? x(Xt)
                                    : L == 'for'
                                      ? x(fe('form'), de, Qn, De, Ee, xe)
                                      : L == 'class' || (h && R == 'interface')
                                        ? ((j.marked = 'keyword'), x(fe('form', L == 'class' ? L : R), Jn, xe))
                                        : L == 'variable'
                                          ? h && R == 'declare'
                                              ? ((j.marked = 'keyword'), x(De))
                                              : h &&
                                                  (R == 'module' || R == 'enum' || R == 'type') &&
                                                  j.stream.match(/^\s*\w/, !1)
                                                ? ((j.marked = 'keyword'),
                                                  R == 'enum'
                                                      ? x(Ur)
                                                      : R == 'type'
                                                        ? x(Vn, pe('operator'), ge, pe(';'))
                                                        : x(fe('form'), At, pe('{'), fe('}'), Ae, xe, xe))
                                                : h && R == 'namespace'
                                                  ? ((j.marked = 'keyword'), x(fe('form'), Me, De, xe))
                                                  : h && R == 'abstract'
                                                    ? ((j.marked = 'keyword'), x(De))
                                                    : x(fe('stat'), je)
                                          : L == 'switch'
                                            ? x(fe('form'), Ge, pe('{'), fe('}', 'switch'), de, Ae, xe, xe, Ee)
                                            : L == 'case'
                                              ? x(Me, pe(':'))
                                              : L == 'default'
                                                ? x(pe(':'))
                                                : L == 'catch'
                                                  ? x(fe('form'), T, Ne, De, xe, Ee)
                                                  : L == 'export'
                                                    ? x(fe('stat'), gr, xe)
                                                    : L == 'import'
                                                      ? x(fe('stat'), ir, xe)
                                                      : L == 'async'
                                                        ? x(De)
                                                        : R == '@'
                                                          ? x(Me, De)
                                                          : J(fe('stat'), Me, pe(';'), xe)
            }
            function Ne(L) {
                if (L == '(') return x(Ut, pe(')'))
            }
            function Me(L, R) {
                return Le(L, R, !1)
            }
            function Fe(L, R) {
                return Le(L, R, !0)
            }
            function Ge(L) {
                return L != '(' ? J() : x(fe(')'), Je, pe(')'), xe)
            }
            function Le(L, R, G) {
                if (j.state.fatArrowAt == j.stream.start) {
                    var ie = G ? Be : me
                    if (L == '(') return x(T, fe(')'), U(Ut, ')'), xe, pe('=>'), ie, Ee)
                    if (L == 'variable') return J(T, At, pe('=>'), ie, Ee)
                }
                var Oe = G ? $e : He
                return N.hasOwnProperty(L)
                    ? x(Oe)
                    : L == 'function'
                      ? x(Xt, Oe)
                      : L == 'class' || (h && R == 'interface')
                        ? ((j.marked = 'keyword'), x(fe('form'), hr, xe))
                        : L == 'keyword c' || L == 'async'
                          ? x(G ? Fe : Me)
                          : L == '('
                            ? x(fe(')'), Je, pe(')'), xe, Oe)
                            : L == 'operator' || L == 'spread'
                              ? x(G ? Fe : Me)
                              : L == '['
                                ? x(fe(']'), or, xe, Oe)
                                : L == '{'
                                  ? se(Ce, '}', null, Oe)
                                  : L == 'quasi'
                                    ? J(O, Oe)
                                    : L == 'new'
                                      ? x(te(G))
                                      : x()
            }
            function Je(L) {
                return L.match(/[;\}\)\],]/) ? J() : J(Me)
            }
            function He(L, R) {
                return L == ',' ? x(Je) : $e(L, R, !1)
            }
            function $e(L, R, G) {
                var ie = G == !1 ? He : $e,
                    Oe = G == !1 ? Me : Fe
                if (L == '=>') return x(T, G ? Be : me, Ee)
                if (L == 'operator')
                    return /\+\+|--/.test(R) || (h && R == '!')
                        ? x(ie)
                        : h && R == '<' && j.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1)
                          ? x(fe('>'), U(ge, '>'), xe, ie)
                          : R == '?'
                            ? x(Me, pe(':'), Oe)
                            : x(Oe)
                if (L == 'quasi') return J(O, ie)
                if (L != ';') {
                    if (L == '(') return se(Fe, ')', 'call', ie)
                    if (L == '.') return x(ke, ie)
                    if (L == '[') return x(fe(']'), Je, pe(']'), xe, ie)
                    if (h && R == 'as') return (j.marked = 'keyword'), x(ge, ie)
                    if (L == 'regexp')
                        return (
                            (j.state.lastType = j.marked = 'operator'),
                            j.stream.backUp(j.stream.pos - j.stream.start - 1),
                            x(Oe)
                        )
                }
            }
            function O(L, R) {
                return L != 'quasi' ? J() : R.slice(R.length - 2) != '${' ? x(O) : x(Je, Z)
            }
            function Z(L) {
                if (L == '}') return (j.marked = 'string-2'), (j.state.tokenize = X), x(O)
            }
            function me(L) {
                return ne(j.stream, j.state), J(L == '{' ? De : Me)
            }
            function Be(L) {
                return ne(j.stream, j.state), J(L == '{' ? De : Fe)
            }
            function te(L) {
                return function (R) {
                    return R == '.' ? x(L ? oe : ce) : R == 'variable' && h ? x(kt, L ? $e : He) : J(L ? Fe : Me)
                }
            }
            function ce(L, R) {
                if (R == 'target') return (j.marked = 'keyword'), x(He)
            }
            function oe(L, R) {
                if (R == 'target') return (j.marked = 'keyword'), x($e)
            }
            function je(L) {
                return L == ':' ? x(xe, De) : J(He, pe(';'), xe)
            }
            function ke(L) {
                if (L == 'variable') return (j.marked = 'property'), x()
            }
            function Ce(L, R) {
                if (L == 'async') return (j.marked = 'property'), x(Ce)
                if (L == 'variable' || j.style == 'keyword') {
                    if (((j.marked = 'property'), R == 'get' || R == 'set')) return x(we)
                    var G
                    return (
                        h &&
                            j.state.fatArrowAt == j.stream.start &&
                            (G = j.stream.match(/^\s*:\s*/, !1)) &&
                            (j.state.fatArrowAt = j.stream.pos + G[0].length),
                        x($)
                    )
                } else {
                    if (L == 'number' || L == 'string') return (j.marked = _ ? 'property' : j.style + ' property'), x($)
                    if (L == 'jsonld-keyword') return x($)
                    if (h && W(R)) return (j.marked = 'keyword'), x(Ce)
                    if (L == '[') return x(Me, et, pe(']'), $)
                    if (L == 'spread') return x(Fe, $)
                    if (R == '*') return (j.marked = 'keyword'), x(Ce)
                    if (L == ':') return J($)
                }
            }
            function we(L) {
                return L != 'variable' ? J($) : ((j.marked = 'property'), x(Xt))
            }
            function $(L) {
                if (L == ':') return x(Fe)
                if (L == '(') return J(Xt)
            }
            function U(L, R, G) {
                function ie(Oe, Ke) {
                    if (G ? G.indexOf(Oe) > -1 : Oe == ',') {
                        var Ze = j.state.lexical
                        return (
                            Ze.info == 'call' && (Ze.pos = (Ze.pos || 0) + 1),
                            x(function (ft, Rt) {
                                return ft == R || Rt == R ? J() : J(L)
                            }, ie)
                        )
                    }
                    return Oe == R || Ke == R ? x() : G && G.indexOf(';') > -1 ? J(L) : x(pe(R))
                }
                return function (Oe, Ke) {
                    return Oe == R || Ke == R ? x() : J(L, ie)
                }
            }
            function se(L, R, G) {
                for (var ie = 3; ie < arguments.length; ie++) j.cc.push(arguments[ie])
                return x(fe(R, G), U(L, R), xe)
            }
            function Ae(L) {
                return L == '}' ? x() : J(De, Ae)
            }
            function et(L, R) {
                if (h) {
                    if (L == ':') return x(ge)
                    if (R == '?') return x(et)
                }
            }
            function zt(L, R) {
                if (h && (L == ':' || R == 'in')) return x(ge)
            }
            function xt(L) {
                if (h && L == ':') return j.stream.match(/^\s*\w+\s+is\b/, !1) ? x(Me, Mt, ge) : x(ge)
            }
            function Mt(L, R) {
                if (R == 'is') return (j.marked = 'keyword'), x()
            }
            function ge(L, R) {
                if (R == 'keyof' || R == 'typeof' || R == 'infer' || R == 'readonly')
                    return (j.marked = 'keyword'), x(R == 'typeof' ? Fe : ge)
                if (L == 'variable' || R == 'void') return (j.marked = 'type'), x(Lt)
                if (R == '|' || R == '&') return x(ge)
                if (L == 'string' || L == 'number' || L == 'atom') return x(Lt)
                if (L == '[') return x(fe(']'), U(ge, ']', ','), xe, Lt)
                if (L == '{') return x(fe('}'), _t, xe, Lt)
                if (L == '(') return x(U(Tt, ')'), bt, Lt)
                if (L == '<') return x(U(ge, '>'), ge)
                if (L == 'quasi') return J(ot, Lt)
            }
            function bt(L) {
                if (L == '=>') return x(ge)
            }
            function _t(L) {
                return L.match(/[\}\)\]]/) ? x() : L == ',' || L == ';' ? x(_t) : J(tt, _t)
            }
            function tt(L, R) {
                if (L == 'variable' || j.style == 'keyword') return (j.marked = 'property'), x(tt)
                if (R == '?' || L == 'number' || L == 'string') return x(tt)
                if (L == ':') return x(ge)
                if (L == '[') return x(pe('variable'), zt, pe(']'), tt)
                if (L == '(') return J(Yt, tt)
                if (!L.match(/[;\}\)\],]/)) return x()
            }
            function ot(L, R) {
                return L != 'quasi' ? J() : R.slice(R.length - 2) != '${' ? x(ot) : x(ge, Yn)
            }
            function Yn(L) {
                if (L == '}') return (j.marked = 'string-2'), (j.state.tokenize = X), x(ot)
            }
            function Tt(L, R) {
                return (L == 'variable' && j.stream.match(/^\s*[?:]/, !1)) || R == '?'
                    ? x(Tt)
                    : L == ':'
                      ? x(ge)
                      : L == 'spread'
                        ? x(Tt)
                        : J(ge)
            }
            function Lt(L, R) {
                if (R == '<') return x(fe('>'), U(ge, '>'), xe, Lt)
                if (R == '|' || L == '.' || R == '&') return x(ge)
                if (L == '[') return x(ge, pe(']'), Lt)
                if (R == 'extends' || R == 'implements') return (j.marked = 'keyword'), x(ge)
                if (R == '?') return x(ge, pe(':'), ge)
            }
            function kt(L, R) {
                if (R == '<') return x(fe('>'), U(ge, '>'), xe, Lt)
            }
            function Er() {
                return J(ge, gn)
            }
            function gn(L, R) {
                if (R == '=') return x(ge)
            }
            function rr(L, R) {
                return R == 'enum' ? ((j.marked = 'keyword'), x(Ur)) : J(At, et, Bt, eo)
            }
            function At(L, R) {
                if (h && W(R)) return (j.marked = 'keyword'), x(At)
                if (L == 'variable') return Y(R), x()
                if (L == 'spread') return x(At)
                if (L == '[') return se(Ji, ']')
                if (L == '{') return se(mn, '}')
            }
            function mn(L, R) {
                return L == 'variable' && !j.stream.match(/^\s*:/, !1)
                    ? (Y(R), x(Bt))
                    : (L == 'variable' && (j.marked = 'property'),
                      L == 'spread'
                          ? x(At)
                          : L == '}'
                            ? J()
                            : L == '['
                              ? x(Me, pe(']'), pe(':'), mn)
                              : x(pe(':'), At, Bt))
            }
            function Ji() {
                return J(At, Bt)
            }
            function Bt(L, R) {
                if (R == '=') return x(Fe)
            }
            function eo(L) {
                if (L == ',') return x(rr)
            }
            function Br(L, R) {
                if (L == 'keyword b' && R == 'else') return x(fe('form', 'else'), De, xe)
            }
            function Qn(L, R) {
                if (R == 'await') return x(Qn)
                if (L == '(') return x(fe(')'), vn, xe)
            }
            function vn(L) {
                return L == 'var' ? x(rr, pr) : L == 'variable' ? x(pr) : J(pr)
            }
            function pr(L, R) {
                return L == ')'
                    ? x()
                    : L == ';'
                      ? x(pr)
                      : R == 'in' || R == 'of'
                        ? ((j.marked = 'keyword'), x(Me, pr))
                        : J(Me, pr)
            }
            function Xt(L, R) {
                if (R == '*') return (j.marked = 'keyword'), x(Xt)
                if (L == 'variable') return Y(R), x(Xt)
                if (L == '(') return x(T, fe(')'), U(Ut, ')'), xe, xt, De, Ee)
                if (h && R == '<') return x(fe('>'), U(Er, '>'), xe, Xt)
            }
            function Yt(L, R) {
                if (R == '*') return (j.marked = 'keyword'), x(Yt)
                if (L == 'variable') return Y(R), x(Yt)
                if (L == '(') return x(T, fe(')'), U(Ut, ')'), xe, xt, Ee)
                if (h && R == '<') return x(fe('>'), U(Er, '>'), xe, Yt)
            }
            function Vn(L, R) {
                if (L == 'keyword' || L == 'variable') return (j.marked = 'type'), x(Vn)
                if (R == '<') return x(fe('>'), U(Er, '>'), xe)
            }
            function Ut(L, R) {
                return (
                    R == '@' && x(Me, Ut),
                    L == 'spread'
                        ? x(Ut)
                        : h && W(R)
                          ? ((j.marked = 'keyword'), x(Ut))
                          : h && L == 'this'
                            ? x(et, Bt)
                            : J(At, et, Bt)
                )
            }
            function hr(L, R) {
                return L == 'variable' ? Jn(L, R) : Wr(L, R)
            }
            function Jn(L, R) {
                if (L == 'variable') return Y(R), x(Wr)
            }
            function Wr(L, R) {
                if (R == '<') return x(fe('>'), U(Er, '>'), xe, Wr)
                if (R == 'extends' || R == 'implements' || (h && L == ','))
                    return R == 'implements' && (j.marked = 'keyword'), x(h ? ge : Me, Wr)
                if (L == '{') return x(fe('}'), Ot, xe)
            }
            function Ot(L, R) {
                if (
                    L == 'async' ||
                    (L == 'variable' &&
                        (R == 'static' || R == 'get' || R == 'set' || (h && W(R))) &&
                        j.stream.match(/^\s+#?[\w$\xa1-\uffff]/, !1))
                )
                    return (j.marked = 'keyword'), x(Ot)
                if (L == 'variable' || j.style == 'keyword') return (j.marked = 'property'), x(nr, Ot)
                if (L == 'number' || L == 'string') return x(nr, Ot)
                if (L == '[') return x(Me, et, pe(']'), nr, Ot)
                if (R == '*') return (j.marked = 'keyword'), x(Ot)
                if (h && L == '(') return J(Yt, Ot)
                if (L == ';' || L == ',') return x(Ot)
                if (L == '}') return x()
                if (R == '@') return x(Me, Ot)
            }
            function nr(L, R) {
                if (R == '!' || R == '?') return x(nr)
                if (L == ':') return x(ge, Bt)
                if (R == '=') return x(Fe)
                var G = j.state.lexical.prev,
                    ie = G && G.info == 'interface'
                return J(ie ? Yt : Xt)
            }
            function gr(L, R) {
                return R == '*'
                    ? ((j.marked = 'keyword'), x(ze, pe(';')))
                    : R == 'default'
                      ? ((j.marked = 'keyword'), x(Me, pe(';')))
                      : L == '{'
                        ? x(U(ei, '}'), ze, pe(';'))
                        : J(De)
            }
            function ei(L, R) {
                if (R == 'as') return (j.marked = 'keyword'), x(pe('variable'))
                if (L == 'variable') return J(Fe, ei)
            }
            function ir(L) {
                return L == 'string' ? x() : L == '(' ? J(Me) : L == '.' ? J(He) : J(mr, bn, ze)
            }
            function mr(L, R) {
                return L == '{' ? se(mr, '}') : (L == 'variable' && Y(R), R == '*' && (j.marked = 'keyword'), x(at))
            }
            function bn(L) {
                if (L == ',') return x(mr, bn)
            }
            function at(L, R) {
                if (R == 'as') return (j.marked = 'keyword'), x(mr)
            }
            function ze(L, R) {
                if (R == 'from') return (j.marked = 'keyword'), x(Me)
            }
            function or(L) {
                return L == ']' ? x() : J(U(Fe, ']'))
            }
            function Ur() {
                return J(fe('form'), At, pe('{'), fe('}'), U(Wt, '}'), xe, xe)
            }
            function Wt() {
                return J(At, Bt)
            }
            function Xe(L, R) {
                return L.lastType == 'operator' || L.lastType == ',' || c.test(R.charAt(0)) || /[,.]/.test(R.charAt(0))
            }
            function Qt(L, R, G) {
                return (
                    (R.tokenize == H &&
                        /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(
                            R.lastType,
                        )) ||
                    (R.lastType == 'quasi' && /\{\s*$/.test(L.string.slice(0, L.pos - (G || 0))))
                )
            }
            return {
                startState: function (L) {
                    var R = {
                        tokenize: H,
                        lastType: 'sof',
                        cc: [],
                        lexical: new F((L || 0) - C, 0, 'block', !1),
                        localVars: v.localVars,
                        context: v.localVars && new le(null, null, !1),
                        indented: L || 0,
                    }
                    return v.globalVars && typeof v.globalVars == 'object' && (R.globalVars = v.globalVars), R
                },
                token: function (L, R) {
                    if (
                        (L.sol() &&
                            (R.lexical.hasOwnProperty('align') || (R.lexical.align = !1),
                            (R.indented = L.indentation()),
                            ne(L, R)),
                        R.tokenize != B && L.eatSpace())
                    )
                        return null
                    var G = R.tokenize(L, R)
                    return E == 'comment'
                        ? G
                        : ((R.lastType = E == 'operator' && (z == '++' || z == '--') ? 'incdec' : E), V(R, G, E, z, L))
                },
                indent: function (L, R) {
                    if (L.tokenize == B || L.tokenize == X) return o.Pass
                    if (L.tokenize != H) return 0
                    var G = R && R.charAt(0),
                        ie = L.lexical,
                        Oe
                    if (!/^\s*else\b/.test(R))
                        for (var Ke = L.cc.length - 1; Ke >= 0; --Ke) {
                            var Ze = L.cc[Ke]
                            if (Ze == xe) ie = ie.prev
                            else if (Ze != Br && Ze != Ee) break
                        }
                    for (
                        ;
                        (ie.type == 'stat' || ie.type == 'form') &&
                        (G == '}' ||
                            ((Oe = L.cc[L.cc.length - 1]) && (Oe == He || Oe == $e) && !/^[,\.=+\-*:?[\(]/.test(R)));

                    )
                        ie = ie.prev
                    b && ie.type == ')' && ie.prev.type == 'stat' && (ie = ie.prev)
                    var ft = ie.type,
                        Rt = G == ft
                    return ft == 'vardef'
                        ? ie.indented + (L.lastType == 'operator' || L.lastType == ',' ? ie.info.length + 1 : 0)
                        : ft == 'form' && G == '{'
                          ? ie.indented
                          : ft == 'form'
                            ? ie.indented + C
                            : ft == 'stat'
                              ? ie.indented + (Xe(L, R) ? b || C : 0)
                              : ie.info == 'switch' && !Rt && v.doubleIndentSwitch != !1
                                ? ie.indented + (/^(?:case|default)\b/.test(R) ? C : 2 * C)
                                : ie.align
                                  ? ie.column + (Rt ? 0 : 1)
                                  : ie.indented + (Rt ? 0 : C)
                },
                electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
                blockCommentStart: s ? null : '/*',
                blockCommentEnd: s ? null : '*/',
                blockCommentContinue: s ? null : ' * ',
                lineComment: s ? null : '//',
                fold: 'brace',
                closeBrackets: '()[]{}\'\'""``',
                helperType: s ? 'json' : 'javascript',
                jsonldMode: _,
                jsonMode: s,
                expressionAllowed: Qt,
                skipExpression: function (L) {
                    V(L, 'atom', 'atom', 'true', new o.StringStream('', 2, null))
                },
            }
        }),
            o.registerHelper('wordChars', 'javascript', /[\w$]/),
            o.defineMIME('text/javascript', 'javascript'),
            o.defineMIME('text/ecmascript', 'javascript'),
            o.defineMIME('application/javascript', 'javascript'),
            o.defineMIME('application/x-javascript', 'javascript'),
            o.defineMIME('application/ecmascript', 'javascript'),
            o.defineMIME('application/json', { name: 'javascript', json: !0 }),
            o.defineMIME('application/x-json', { name: 'javascript', json: !0 }),
            o.defineMIME('application/manifest+json', { name: 'javascript', json: !0 }),
            o.defineMIME('application/ld+json', { name: 'javascript', jsonld: !0 }),
            o.defineMIME('text/typescript', { name: 'javascript', typescript: !0 }),
            o.defineMIME('application/typescript', { name: 'javascript', typescript: !0 })
    })
})
var Gn = Ue((Fs, Ns) => {
    ;(function (o) {
        typeof Fs == 'object' && typeof Ns == 'object'
            ? o(Re(), dn(), pn(), fn())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror', '../xml/xml', '../javascript/javascript', '../css/css'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        var p = {
            script: [
                ['lang', /(javascript|babel)/i, 'javascript'],
                ['type', /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i, 'javascript'],
                ['type', /./, 'text/plain'],
                [null, null, 'javascript'],
            ],
            style: [
                ['lang', /^css$/i, 'css'],
                ['type', /^(text\/)?(x-)?(stylesheet|css)$/i, 'css'],
                ['type', /./, 'text/plain'],
                [null, null, 'css'],
            ],
        }
        function v(w, k, c) {
            var d = w.current(),
                S = d.search(k)
            return (
                S > -1
                    ? w.backUp(d.length - S)
                    : d.match(/<\/?$/) && (w.backUp(d.length), w.match(k, !1) || w.match(d)),
                c
            )
        }
        var C = {}
        function b(w) {
            var k = C[w]
            return k || (C[w] = new RegExp('\\s+' + w + `\\s*=\\s*('|")?([^'"]+)('|")?\\s*`))
        }
        function _(w, k) {
            var c = w.match(b(k))
            return c ? /^\s*(.*?)\s*$/.exec(c[2])[1] : ''
        }
        function s(w, k) {
            return new RegExp((k ? '^' : '') + '</\\s*' + w + '\\s*>', 'i')
        }
        function g(w, k) {
            for (var c in w) for (var d = k[c] || (k[c] = []), S = w[c], E = S.length - 1; E >= 0; E--) d.unshift(S[E])
        }
        function h(w, k) {
            for (var c = 0; c < w.length; c++) {
                var d = w[c]
                if (!d[0] || d[1].test(_(k, d[0]))) return d[2]
            }
        }
        o.defineMode(
            'htmlmixed',
            function (w, k) {
                var c = o.getMode(w, {
                        name: 'xml',
                        htmlMode: !0,
                        multilineTagIndentFactor: k.multilineTagIndentFactor,
                        multilineTagIndentPastTag: k.multilineTagIndentPastTag,
                        allowMissingTagName: k.allowMissingTagName,
                    }),
                    d = {},
                    S = k && k.tags,
                    E = k && k.scriptTypes
                if ((g(p, d), S && g(S, d), E))
                    for (var z = E.length - 1; z >= 0; z--) d.script.unshift(['type', E[z].matches, E[z].mode])
                function y(H, M) {
                    var B = c.token(H, M.htmlState),
                        X = /\btag\b/.test(B),
                        re
                    if (
                        X &&
                        !/[<>\s\/]/.test(H.current()) &&
                        (re = M.htmlState.tagName && M.htmlState.tagName.toLowerCase()) &&
                        d.hasOwnProperty(re)
                    )
                        M.inTag = re + ' '
                    else if (M.inTag && X && />$/.test(H.current())) {
                        var ne = /^([\S]+) (.*)/.exec(M.inTag)
                        M.inTag = null
                        var N = H.current() == '>' && h(d[ne[1]], ne[2]),
                            F = o.getMode(w, N),
                            D = s(ne[1], !0),
                            V = s(ne[1], !1)
                        ;(M.token = function (j, J) {
                            return j.match(D, !1)
                                ? ((J.token = y), (J.localState = J.localMode = null), null)
                                : v(j, V, J.localMode.token(j, J.localState))
                        }),
                            (M.localMode = F),
                            (M.localState = o.startState(F, c.indent(M.htmlState, '', '')))
                    } else M.inTag && ((M.inTag += H.current()), H.eol() && (M.inTag += ' '))
                    return B
                }
                return {
                    startState: function () {
                        var H = o.startState(c)
                        return { token: y, inTag: null, localMode: null, localState: null, htmlState: H }
                    },
                    copyState: function (H) {
                        var M
                        return (
                            H.localState && (M = o.copyState(H.localMode, H.localState)),
                            {
                                token: H.token,
                                inTag: H.inTag,
                                localMode: H.localMode,
                                localState: M,
                                htmlState: o.copyState(c, H.htmlState),
                            }
                        )
                    },
                    token: function (H, M) {
                        return M.token(H, M)
                    },
                    indent: function (H, M, B) {
                        return !H.localMode || /^\s*<\//.test(M)
                            ? c.indent(H.htmlState, M, B)
                            : H.localMode.indent
                              ? H.localMode.indent(H.localState, M, B)
                              : o.Pass
                    },
                    innerMode: function (H) {
                        return { state: H.localState || H.htmlState, mode: H.localMode || c }
                    },
                }
            },
            'xml',
            'javascript',
            'css',
        ),
            o.defineMIME('text/html', 'htmlmixed')
    })
})
var js = Ue((Os, Ps) => {
    ;(function (o) {
        typeof Os == 'object' && typeof Ps == 'object'
            ? o(Re(), Gn(), Kn())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror', '../htmlmixed/htmlmixed', '../../addon/mode/overlay'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        o.defineMode('django:inner', function () {
            var p = [
                    'block',
                    'endblock',
                    'for',
                    'endfor',
                    'true',
                    'false',
                    'filter',
                    'endfilter',
                    'loop',
                    'none',
                    'self',
                    'super',
                    'if',
                    'elif',
                    'endif',
                    'as',
                    'else',
                    'import',
                    'with',
                    'endwith',
                    'without',
                    'context',
                    'ifequal',
                    'endifequal',
                    'ifnotequal',
                    'endifnotequal',
                    'extends',
                    'include',
                    'load',
                    'comment',
                    'endcomment',
                    'empty',
                    'url',
                    'static',
                    'trans',
                    'blocktrans',
                    'endblocktrans',
                    'now',
                    'regroup',
                    'lorem',
                    'ifchanged',
                    'endifchanged',
                    'firstof',
                    'debug',
                    'cycle',
                    'csrf_token',
                    'autoescape',
                    'endautoescape',
                    'spaceless',
                    'endspaceless',
                    'ssi',
                    'templatetag',
                    'verbatim',
                    'endverbatim',
                    'widthratio',
                ],
                v = [
                    'add',
                    'addslashes',
                    'capfirst',
                    'center',
                    'cut',
                    'date',
                    'default',
                    'default_if_none',
                    'dictsort',
                    'dictsortreversed',
                    'divisibleby',
                    'escape',
                    'escapejs',
                    'filesizeformat',
                    'first',
                    'floatformat',
                    'force_escape',
                    'get_digit',
                    'iriencode',
                    'join',
                    'last',
                    'length',
                    'length_is',
                    'linebreaks',
                    'linebreaksbr',
                    'linenumbers',
                    'ljust',
                    'lower',
                    'make_list',
                    'phone2numeric',
                    'pluralize',
                    'pprint',
                    'random',
                    'removetags',
                    'rjust',
                    'safe',
                    'safeseq',
                    'slice',
                    'slugify',
                    'stringformat',
                    'striptags',
                    'time',
                    'timesince',
                    'timeuntil',
                    'title',
                    'truncatechars',
                    'truncatechars_html',
                    'truncatewords',
                    'truncatewords_html',
                    'unordered_list',
                    'upper',
                    'urlencode',
                    'urlize',
                    'urlizetrunc',
                    'wordcount',
                    'wordwrap',
                    'yesno',
                ],
                C = ['==', '!=', '<', '>', '<=', '>='],
                b = ['in', 'not', 'or', 'and']
            ;(p = new RegExp('^\\b(' + p.join('|') + ')\\b')),
                (v = new RegExp('^\\b(' + v.join('|') + ')\\b')),
                (C = new RegExp('^\\b(' + C.join('|') + ')\\b')),
                (b = new RegExp('^\\b(' + b.join('|') + ')\\b'))
            function _(c, d) {
                if (c.match('{{')) return (d.tokenize = g), 'tag'
                if (c.match('{%')) return (d.tokenize = h), 'tag'
                if (c.match('{#')) return (d.tokenize = w), 'comment'
                for (; c.next() != null && !c.match(/\{[{%#]/, !1); );
                return null
            }
            function s(c, d) {
                return function (S, E) {
                    if (!E.escapeNext && S.eat(c)) E.tokenize = d
                    else {
                        E.escapeNext && (E.escapeNext = !1)
                        var z = S.next()
                        z == '\\' && (E.escapeNext = !0)
                    }
                    return 'string'
                }
            }
            function g(c, d) {
                if (d.waitDot) {
                    if (((d.waitDot = !1), c.peek() != '.')) return 'null'
                    if (c.match(/\.\W+/)) return 'error'
                    if (c.eat('.')) return (d.waitProperty = !0), 'null'
                    throw Error('Unexpected error while waiting for property.')
                }
                if (d.waitPipe) {
                    if (((d.waitPipe = !1), c.peek() != '|')) return 'null'
                    if (c.match(/\.\W+/)) return 'error'
                    if (c.eat('|')) return (d.waitFilter = !0), 'null'
                    throw Error('Unexpected error while waiting for filter.')
                }
                return d.waitProperty && ((d.waitProperty = !1), c.match(/\b(\w+)\b/))
                    ? ((d.waitDot = !0), (d.waitPipe = !0), 'property')
                    : d.waitFilter && ((d.waitFilter = !1), c.match(v))
                      ? 'variable-2'
                      : c.eatSpace()
                        ? ((d.waitProperty = !1), 'null')
                        : c.match(/\b\d+(\.\d+)?\b/)
                          ? 'number'
                          : c.match("'")
                            ? ((d.tokenize = s("'", d.tokenize)), 'string')
                            : c.match('"')
                              ? ((d.tokenize = s('"', d.tokenize)), 'string')
                              : c.match(/\b(\w+)\b/) && !d.foundVariable
                                ? ((d.waitDot = !0), (d.waitPipe = !0), 'variable')
                                : c.match('}}')
                                  ? ((d.waitProperty = null),
                                    (d.waitFilter = null),
                                    (d.waitDot = null),
                                    (d.waitPipe = null),
                                    (d.tokenize = _),
                                    'tag')
                                  : (c.next(), 'null')
            }
            function h(c, d) {
                if (d.waitDot) {
                    if (((d.waitDot = !1), c.peek() != '.')) return 'null'
                    if (c.match(/\.\W+/)) return 'error'
                    if (c.eat('.')) return (d.waitProperty = !0), 'null'
                    throw Error('Unexpected error while waiting for property.')
                }
                if (d.waitPipe) {
                    if (((d.waitPipe = !1), c.peek() != '|')) return 'null'
                    if (c.match(/\.\W+/)) return 'error'
                    if (c.eat('|')) return (d.waitFilter = !0), 'null'
                    throw Error('Unexpected error while waiting for filter.')
                }
                if (d.waitProperty && ((d.waitProperty = !1), c.match(/\b(\w+)\b/)))
                    return (d.waitDot = !0), (d.waitPipe = !0), 'property'
                if (d.waitFilter && ((d.waitFilter = !1), c.match(v))) return 'variable-2'
                if (c.eatSpace()) return (d.waitProperty = !1), 'null'
                if (c.match(/\b\d+(\.\d+)?\b/)) return 'number'
                if (c.match("'")) return (d.tokenize = s("'", d.tokenize)), 'string'
                if (c.match('"')) return (d.tokenize = s('"', d.tokenize)), 'string'
                if (c.match(C)) return 'operator'
                if (c.match(b)) return 'keyword'
                var S = c.match(p)
                return S
                    ? (S[0] == 'comment' && (d.blockCommentTag = !0), 'keyword')
                    : c.match(/\b(\w+)\b/)
                      ? ((d.waitDot = !0), (d.waitPipe = !0), 'variable')
                      : c.match('%}')
                        ? ((d.waitProperty = null),
                          (d.waitFilter = null),
                          (d.waitDot = null),
                          (d.waitPipe = null),
                          d.blockCommentTag ? ((d.blockCommentTag = !1), (d.tokenize = k)) : (d.tokenize = _),
                          'tag')
                        : (c.next(), 'null')
            }
            function w(c, d) {
                return c.match(/^.*?#\}/) ? (d.tokenize = _) : c.skipToEnd(), 'comment'
            }
            function k(c, d) {
                return c.match(/\{%\s*endcomment\s*%\}/, !1)
                    ? ((d.tokenize = h), c.match('{%'), 'tag')
                    : (c.next(), 'comment')
            }
            return {
                startState: function () {
                    return { tokenize: _ }
                },
                token: function (c, d) {
                    return d.tokenize(c, d)
                },
                blockCommentStart: '{% comment %}',
                blockCommentEnd: '{% endcomment %}',
            }
        }),
            o.defineMode('django', function (p) {
                var v = o.getMode(p, 'text/html'),
                    C = o.getMode(p, 'django:inner')
                return o.overlayMode(v, C)
            }),
            o.defineMIME('text/x-django', 'django')
    })
})
var Ai = Ue((Rs, Hs) => {
    ;(function (o) {
        typeof Rs == 'object' && typeof Hs == 'object'
            ? o(Re())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        ;(o.defineSimpleMode = function (k, c) {
            o.defineMode(k, function (d) {
                return o.simpleMode(d, c)
            })
        }),
            (o.simpleMode = function (k, c) {
                p(c, 'start')
                var d = {},
                    S = c.meta || {},
                    E = !1
                for (var z in c)
                    if (z != S && c.hasOwnProperty(z))
                        for (var y = (d[z] = []), H = c[z], M = 0; M < H.length; M++) {
                            var B = H[M]
                            y.push(new b(B, c)), (B.indent || B.dedent) && (E = !0)
                        }
                var X = {
                    startState: function () {
                        return { state: 'start', pending: null, local: null, localState: null, indent: E ? [] : null }
                    },
                    copyState: function (ne) {
                        var N = {
                            state: ne.state,
                            pending: ne.pending,
                            local: ne.local,
                            localState: null,
                            indent: ne.indent && ne.indent.slice(0),
                        }
                        ne.localState && (N.localState = o.copyState(ne.local.mode, ne.localState)),
                            ne.stack && (N.stack = ne.stack.slice(0))
                        for (var F = ne.persistentStates; F; F = F.next)
                            N.persistentStates = {
                                mode: F.mode,
                                spec: F.spec,
                                state: F.state == ne.localState ? N.localState : o.copyState(F.mode, F.state),
                                next: N.persistentStates,
                            }
                        return N
                    },
                    token: _(d, k),
                    innerMode: function (ne) {
                        return ne.local && { mode: ne.local.mode, state: ne.localState }
                    },
                    indent: w(d, S),
                }
                if (S) for (var re in S) S.hasOwnProperty(re) && (X[re] = S[re])
                return X
            })
        function p(k, c) {
            if (!k.hasOwnProperty(c)) throw new Error('Undefined state ' + c + ' in simple mode')
        }
        function v(k, c) {
            if (!k) return /(?:)/
            var d = ''
            return (
                k instanceof RegExp
                    ? (k.ignoreCase && (d = 'i'), k.unicode && (d += 'u'), (k = k.source))
                    : (k = String(k)),
                new RegExp((c === !1 ? '' : '^') + '(?:' + k + ')', d)
            )
        }
        function C(k) {
            if (!k) return null
            if (k.apply) return k
            if (typeof k == 'string') return k.replace(/\./g, ' ')
            for (var c = [], d = 0; d < k.length; d++) c.push(k[d] && k[d].replace(/\./g, ' '))
            return c
        }
        function b(k, c) {
            ;(k.next || k.push) && p(c, k.next || k.push),
                (this.regex = v(k.regex)),
                (this.token = C(k.token)),
                (this.data = k)
        }
        function _(k, c) {
            return function (d, S) {
                if (S.pending) {
                    var E = S.pending.shift()
                    return S.pending.length == 0 && (S.pending = null), (d.pos += E.text.length), E.token
                }
                if (S.local)
                    if (S.local.end && d.match(S.local.end)) {
                        var z = S.local.endToken || null
                        return (S.local = S.localState = null), z
                    } else {
                        var z = S.local.mode.token(d, S.localState),
                            y
                        return (
                            S.local.endScan && (y = S.local.endScan.exec(d.current())) && (d.pos = d.start + y.index), z
                        )
                    }
                for (var H = k[S.state], M = 0; M < H.length; M++) {
                    var B = H[M],
                        X = (!B.data.sol || d.sol()) && d.match(B.regex)
                    if (X) {
                        B.data.next
                            ? (S.state = B.data.next)
                            : B.data.push
                              ? ((S.stack || (S.stack = [])).push(S.state), (S.state = B.data.push))
                              : B.data.pop && S.stack && S.stack.length && (S.state = S.stack.pop()),
                            B.data.mode && g(c, S, B.data.mode, B.token),
                            B.data.indent && S.indent.push(d.indentation() + c.indentUnit),
                            B.data.dedent && S.indent.pop()
                        var re = B.token
                        if ((re && re.apply && (re = re(X)), X.length > 2 && B.token && typeof B.token != 'string')) {
                            for (var ne = 2; ne < X.length; ne++)
                                X[ne] && (S.pending || (S.pending = [])).push({ text: X[ne], token: B.token[ne - 1] })
                            return d.backUp(X[0].length - (X[1] ? X[1].length : 0)), re[0]
                        } else return re && re.join ? re[0] : re
                    }
                }
                return d.next(), null
            }
        }
        function s(k, c) {
            if (k === c) return !0
            if (!k || typeof k != 'object' || !c || typeof c != 'object') return !1
            var d = 0
            for (var S in k)
                if (k.hasOwnProperty(S)) {
                    if (!c.hasOwnProperty(S) || !s(k[S], c[S])) return !1
                    d++
                }
            for (var S in c) c.hasOwnProperty(S) && d--
            return d == 0
        }
        function g(k, c, d, S) {
            var E
            if (d.persistent)
                for (var z = c.persistentStates; z && !E; z = z.next)
                    (d.spec ? s(d.spec, z.spec) : d.mode == z.mode) && (E = z)
            var y = E ? E.mode : d.mode || o.getMode(k, d.spec),
                H = E ? E.state : o.startState(y)
            d.persistent && !E && (c.persistentStates = { mode: y, spec: d.spec, state: H, next: c.persistentStates }),
                (c.localState = H),
                (c.local = {
                    mode: y,
                    end: d.end && v(d.end),
                    endScan: d.end && d.forceEnd !== !1 && v(d.end, !1),
                    endToken: S && S.join ? S[S.length - 1] : S,
                })
        }
        function h(k, c) {
            for (var d = 0; d < c.length; d++) if (c[d] === k) return !0
        }
        function w(k, c) {
            return function (d, S, E) {
                if (d.local && d.local.mode.indent) return d.local.mode.indent(d.localState, S, E)
                if (d.indent == null || d.local || (c.dontIndentStates && h(d.state, c.dontIndentStates) > -1))
                    return o.Pass
                var z = d.indent.length - 1,
                    y = k[d.state]
                e: for (;;) {
                    for (var H = 0; H < y.length; H++) {
                        var M = y[H]
                        if (M.data.dedent && M.data.dedentIfLineStart !== !1) {
                            var B = M.regex.exec(S)
                            if (B && B[0]) {
                                z--, (M.next || M.push) && (y = k[M.next || M.push]), (S = S.slice(B[0].length))
                                continue e
                            }
                        }
                    }
                    break
                }
                return z < 0 ? 0 : d.indent[z]
            }
        }
    })
})
var Us = Ue((Bs, Ws) => {
    ;(function (o) {
        typeof Bs == 'object' && typeof Ws == 'object'
            ? o(Re(), Ai())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror', '../../addon/mode/simple'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        var p = 'from',
            v = new RegExp('^(\\s*)\\b(' + p + ')\\b', 'i'),
            C = ['run', 'cmd', 'entrypoint', 'shell'],
            b = new RegExp('^(\\s*)(' + C.join('|') + ')(\\s+\\[)', 'i'),
            _ = 'expose',
            s = new RegExp('^(\\s*)(' + _ + ')(\\s+)', 'i'),
            g = [
                'arg',
                'from',
                'maintainer',
                'label',
                'env',
                'add',
                'copy',
                'volume',
                'user',
                'workdir',
                'onbuild',
                'stopsignal',
                'healthcheck',
                'shell',
            ],
            h = [p, _].concat(C).concat(g),
            w = '(' + h.join('|') + ')',
            k = new RegExp('^(\\s*)' + w + '(\\s*)(#.*)?$', 'i'),
            c = new RegExp('^(\\s*)' + w + '(\\s+)', 'i')
        o.defineSimpleMode('dockerfile', {
            start: [
                { regex: /^\s*#.*$/, sol: !0, token: 'comment' },
                { regex: v, token: [null, 'keyword'], sol: !0, next: 'from' },
                { regex: k, token: [null, 'keyword', null, 'error'], sol: !0 },
                { regex: b, token: [null, 'keyword', null], sol: !0, next: 'array' },
                { regex: s, token: [null, 'keyword', null], sol: !0, next: 'expose' },
                { regex: c, token: [null, 'keyword', null], sol: !0, next: 'arguments' },
                { regex: /./, token: null },
            ],
            from: [
                { regex: /\s*$/, token: null, next: 'start' },
                { regex: /(\s*)(#.*)$/, token: [null, 'error'], next: 'start' },
                { regex: /(\s*\S+\s+)(as)/i, token: [null, 'keyword'], next: 'start' },
                { token: null, next: 'start' },
            ],
            single: [
                { regex: /(?:[^\\']|\\.)/, token: 'string' },
                { regex: /'/, token: 'string', pop: !0 },
            ],
            double: [
                { regex: /(?:[^\\"]|\\.)/, token: 'string' },
                { regex: /"/, token: 'string', pop: !0 },
            ],
            array: [
                { regex: /\]/, token: null, next: 'start' },
                { regex: /"(?:[^\\"]|\\.)*"?/, token: 'string' },
            ],
            expose: [
                { regex: /\d+$/, token: 'number', next: 'start' },
                { regex: /[^\d]+$/, token: null, next: 'start' },
                { regex: /\d+/, token: 'number' },
                { regex: /[^\d]+/, token: null },
                { token: null, next: 'start' },
            ],
            arguments: [
                { regex: /^\s*#.*$/, sol: !0, token: 'comment' },
                { regex: /"(?:[^\\"]|\\.)*"?$/, token: 'string', next: 'start' },
                { regex: /"/, token: 'string', push: 'double' },
                { regex: /'(?:[^\\']|\\.)*'?$/, token: 'string', next: 'start' },
                { regex: /'/, token: 'string', push: 'single' },
                { regex: /[^#"']+[\\`]$/, token: null },
                { regex: /[^#"']+$/, token: null, next: 'start' },
                { regex: /[^#"']+/, token: null },
                { token: null, next: 'start' },
            ],
            meta: { lineComment: '#' },
        }),
            o.defineMIME('text/x-dockerfile', 'dockerfile')
    })
})
var Gs = Ue(($s, Ks) => {
    ;(function (o) {
        typeof $s == 'object' && typeof Ks == 'object'
            ? o(Re())
            : typeof define == 'function' && define.amd
              ? define(['../lib/codemirror'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        o.modeInfo = [
            { name: 'APL', mime: 'text/apl', mode: 'apl', ext: ['dyalog', 'apl'] },
            {
                name: 'PGP',
                mimes: [
                    'application/pgp',
                    'application/pgp-encrypted',
                    'application/pgp-keys',
                    'application/pgp-signature',
                ],
                mode: 'asciiarmor',
                ext: ['asc', 'pgp', 'sig'],
            },
            { name: 'ASN.1', mime: 'text/x-ttcn-asn', mode: 'asn.1', ext: ['asn', 'asn1'] },
            { name: 'Asterisk', mime: 'text/x-asterisk', mode: 'asterisk', file: /^extensions\.conf$/i },
            { name: 'Brainfuck', mime: 'text/x-brainfuck', mode: 'brainfuck', ext: ['b', 'bf'] },
            { name: 'C', mime: 'text/x-csrc', mode: 'clike', ext: ['c', 'h', 'ino'] },
            {
                name: 'C++',
                mime: 'text/x-c++src',
                mode: 'clike',
                ext: ['cpp', 'c++', 'cc', 'cxx', 'hpp', 'h++', 'hh', 'hxx'],
                alias: ['cpp'],
            },
            { name: 'Cobol', mime: 'text/x-cobol', mode: 'cobol', ext: ['cob', 'cpy', 'cbl'] },
            { name: 'C#', mime: 'text/x-csharp', mode: 'clike', ext: ['cs'], alias: ['csharp', 'cs'] },
            { name: 'Clojure', mime: 'text/x-clojure', mode: 'clojure', ext: ['clj', 'cljc', 'cljx'] },
            { name: 'ClojureScript', mime: 'text/x-clojurescript', mode: 'clojure', ext: ['cljs'] },
            { name: 'Closure Stylesheets (GSS)', mime: 'text/x-gss', mode: 'css', ext: ['gss'] },
            {
                name: 'CMake',
                mime: 'text/x-cmake',
                mode: 'cmake',
                ext: ['cmake', 'cmake.in'],
                file: /^CMakeLists\.txt$/,
            },
            {
                name: 'CoffeeScript',
                mimes: ['application/vnd.coffeescript', 'text/coffeescript', 'text/x-coffeescript'],
                mode: 'coffeescript',
                ext: ['coffee'],
                alias: ['coffee', 'coffee-script'],
            },
            {
                name: 'Common Lisp',
                mime: 'text/x-common-lisp',
                mode: 'commonlisp',
                ext: ['cl', 'lisp', 'el'],
                alias: ['lisp'],
            },
            { name: 'Cypher', mime: 'application/x-cypher-query', mode: 'cypher', ext: ['cyp', 'cypher'] },
            { name: 'Cython', mime: 'text/x-cython', mode: 'python', ext: ['pyx', 'pxd', 'pxi'] },
            { name: 'Crystal', mime: 'text/x-crystal', mode: 'crystal', ext: ['cr'] },
            { name: 'CSS', mime: 'text/css', mode: 'css', ext: ['css'] },
            { name: 'CQL', mime: 'text/x-cassandra', mode: 'sql', ext: ['cql'] },
            { name: 'D', mime: 'text/x-d', mode: 'd', ext: ['d'] },
            { name: 'Dart', mimes: ['application/dart', 'text/x-dart'], mode: 'dart', ext: ['dart'] },
            { name: 'diff', mime: 'text/x-diff', mode: 'diff', ext: ['diff', 'patch'] },
            { name: 'Django', mime: 'text/x-django', mode: 'django' },
            { name: 'Dockerfile', mime: 'text/x-dockerfile', mode: 'dockerfile', file: /^Dockerfile$/ },
            { name: 'DTD', mime: 'application/xml-dtd', mode: 'dtd', ext: ['dtd'] },
            { name: 'Dylan', mime: 'text/x-dylan', mode: 'dylan', ext: ['dylan', 'dyl', 'intr'] },
            { name: 'EBNF', mime: 'text/x-ebnf', mode: 'ebnf' },
            { name: 'ECL', mime: 'text/x-ecl', mode: 'ecl', ext: ['ecl'] },
            { name: 'edn', mime: 'application/edn', mode: 'clojure', ext: ['edn'] },
            { name: 'Eiffel', mime: 'text/x-eiffel', mode: 'eiffel', ext: ['e'] },
            { name: 'Elm', mime: 'text/x-elm', mode: 'elm', ext: ['elm'] },
            { name: 'Embedded JavaScript', mime: 'application/x-ejs', mode: 'htmlembedded', ext: ['ejs'] },
            { name: 'Embedded Ruby', mime: 'application/x-erb', mode: 'htmlembedded', ext: ['erb'] },
            { name: 'Erlang', mime: 'text/x-erlang', mode: 'erlang', ext: ['erl'] },
            { name: 'Esper', mime: 'text/x-esper', mode: 'sql' },
            { name: 'Factor', mime: 'text/x-factor', mode: 'factor', ext: ['factor'] },
            { name: 'FCL', mime: 'text/x-fcl', mode: 'fcl' },
            { name: 'Forth', mime: 'text/x-forth', mode: 'forth', ext: ['forth', 'fth', '4th'] },
            { name: 'Fortran', mime: 'text/x-fortran', mode: 'fortran', ext: ['f', 'for', 'f77', 'f90', 'f95'] },
            { name: 'F#', mime: 'text/x-fsharp', mode: 'mllike', ext: ['fs'], alias: ['fsharp'] },
            { name: 'Gas', mime: 'text/x-gas', mode: 'gas', ext: ['s'] },
            { name: 'Gherkin', mime: 'text/x-feature', mode: 'gherkin', ext: ['feature'] },
            {
                name: 'GitHub Flavored Markdown',
                mime: 'text/x-gfm',
                mode: 'gfm',
                file: /^(readme|contributing|history)\.md$/i,
            },
            { name: 'Go', mime: 'text/x-go', mode: 'go', ext: ['go'] },
            { name: 'Groovy', mime: 'text/x-groovy', mode: 'groovy', ext: ['groovy', 'gradle'], file: /^Jenkinsfile$/ },
            { name: 'HAML', mime: 'text/x-haml', mode: 'haml', ext: ['haml'] },
            { name: 'Haskell', mime: 'text/x-haskell', mode: 'haskell', ext: ['hs'] },
            { name: 'Haskell (Literate)', mime: 'text/x-literate-haskell', mode: 'haskell-literate', ext: ['lhs'] },
            { name: 'Haxe', mime: 'text/x-haxe', mode: 'haxe', ext: ['hx'] },
            { name: 'HXML', mime: 'text/x-hxml', mode: 'haxe', ext: ['hxml'] },
            {
                name: 'ASP.NET',
                mime: 'application/x-aspx',
                mode: 'htmlembedded',
                ext: ['aspx'],
                alias: ['asp', 'aspx'],
            },
            {
                name: 'HTML',
                mime: 'text/html',
                mode: 'htmlmixed',
                ext: ['html', 'htm', 'handlebars', 'hbs'],
                alias: ['xhtml'],
            },
            { name: 'HTTP', mime: 'message/http', mode: 'http' },
            { name: 'IDL', mime: 'text/x-idl', mode: 'idl', ext: ['pro'] },
            { name: 'Pug', mime: 'text/x-pug', mode: 'pug', ext: ['jade', 'pug'], alias: ['jade'] },
            { name: 'Java', mime: 'text/x-java', mode: 'clike', ext: ['java'] },
            {
                name: 'Java Server Pages',
                mime: 'application/x-jsp',
                mode: 'htmlembedded',
                ext: ['jsp'],
                alias: ['jsp'],
            },
            {
                name: 'JavaScript',
                mimes: [
                    'text/javascript',
                    'text/ecmascript',
                    'application/javascript',
                    'application/x-javascript',
                    'application/ecmascript',
                ],
                mode: 'javascript',
                ext: ['js'],
                alias: ['ecmascript', 'js', 'node'],
            },
            {
                name: 'JSON',
                mimes: ['application/json', 'application/x-json'],
                mode: 'javascript',
                ext: ['json', 'map'],
                alias: ['json5'],
            },
            { name: 'JSON-LD', mime: 'application/ld+json', mode: 'javascript', ext: ['jsonld'], alias: ['jsonld'] },
            { name: 'JSX', mime: 'text/jsx', mode: 'jsx', ext: ['jsx'] },
            { name: 'Jinja2', mime: 'text/jinja2', mode: 'jinja2', ext: ['j2', 'jinja', 'jinja2'] },
            { name: 'Julia', mime: 'text/x-julia', mode: 'julia', ext: ['jl'], alias: ['jl'] },
            { name: 'Kotlin', mime: 'text/x-kotlin', mode: 'clike', ext: ['kt'] },
            { name: 'LESS', mime: 'text/x-less', mode: 'css', ext: ['less'] },
            { name: 'LiveScript', mime: 'text/x-livescript', mode: 'livescript', ext: ['ls'], alias: ['ls'] },
            { name: 'Lua', mime: 'text/x-lua', mode: 'lua', ext: ['lua'] },
            { name: 'Markdown', mime: 'text/x-markdown', mode: 'markdown', ext: ['markdown', 'md', 'mkd'] },
            { name: 'mIRC', mime: 'text/mirc', mode: 'mirc' },
            { name: 'MariaDB SQL', mime: 'text/x-mariadb', mode: 'sql' },
            { name: 'Mathematica', mime: 'text/x-mathematica', mode: 'mathematica', ext: ['m', 'nb', 'wl', 'wls'] },
            { name: 'Modelica', mime: 'text/x-modelica', mode: 'modelica', ext: ['mo'] },
            { name: 'MUMPS', mime: 'text/x-mumps', mode: 'mumps', ext: ['mps'] },
            { name: 'MS SQL', mime: 'text/x-mssql', mode: 'sql' },
            { name: 'mbox', mime: 'application/mbox', mode: 'mbox', ext: ['mbox'] },
            { name: 'MySQL', mime: 'text/x-mysql', mode: 'sql' },
            { name: 'Nginx', mime: 'text/x-nginx-conf', mode: 'nginx', file: /nginx.*\.conf$/i },
            { name: 'NSIS', mime: 'text/x-nsis', mode: 'nsis', ext: ['nsh', 'nsi'] },
            {
                name: 'NTriples',
                mimes: ['application/n-triples', 'application/n-quads', 'text/n-triples'],
                mode: 'ntriples',
                ext: ['nt', 'nq'],
            },
            {
                name: 'Objective-C',
                mime: 'text/x-objectivec',
                mode: 'clike',
                ext: ['m'],
                alias: ['objective-c', 'objc'],
            },
            {
                name: 'Objective-C++',
                mime: 'text/x-objectivec++',
                mode: 'clike',
                ext: ['mm'],
                alias: ['objective-c++', 'objc++'],
            },
            { name: 'OCaml', mime: 'text/x-ocaml', mode: 'mllike', ext: ['ml', 'mli', 'mll', 'mly'] },
            { name: 'Octave', mime: 'text/x-octave', mode: 'octave', ext: ['m'] },
            { name: 'Oz', mime: 'text/x-oz', mode: 'oz', ext: ['oz'] },
            { name: 'Pascal', mime: 'text/x-pascal', mode: 'pascal', ext: ['p', 'pas'] },
            { name: 'PEG.js', mime: 'null', mode: 'pegjs', ext: ['jsonld'] },
            { name: 'Perl', mime: 'text/x-perl', mode: 'perl', ext: ['pl', 'pm'] },
            {
                name: 'PHP',
                mimes: ['text/x-php', 'application/x-httpd-php', 'application/x-httpd-php-open'],
                mode: 'php',
                ext: ['php', 'php3', 'php4', 'php5', 'php7', 'phtml'],
            },
            { name: 'Pig', mime: 'text/x-pig', mode: 'pig', ext: ['pig'] },
            {
                name: 'Plain Text',
                mime: 'text/plain',
                mode: 'null',
                ext: ['txt', 'text', 'conf', 'def', 'list', 'log'],
            },
            { name: 'PLSQL', mime: 'text/x-plsql', mode: 'sql', ext: ['pls'] },
            { name: 'PostgreSQL', mime: 'text/x-pgsql', mode: 'sql' },
            { name: 'PowerShell', mime: 'application/x-powershell', mode: 'powershell', ext: ['ps1', 'psd1', 'psm1'] },
            {
                name: 'Properties files',
                mime: 'text/x-properties',
                mode: 'properties',
                ext: ['properties', 'ini', 'in'],
                alias: ['ini', 'properties'],
            },
            { name: 'ProtoBuf', mime: 'text/x-protobuf', mode: 'protobuf', ext: ['proto'] },
            {
                name: 'Python',
                mime: 'text/x-python',
                mode: 'python',
                ext: ['BUILD', 'bzl', 'py', 'pyw'],
                file: /^(BUCK|BUILD)$/,
            },
            { name: 'Puppet', mime: 'text/x-puppet', mode: 'puppet', ext: ['pp'] },
            { name: 'Q', mime: 'text/x-q', mode: 'q', ext: ['q'] },
            { name: 'R', mime: 'text/x-rsrc', mode: 'r', ext: ['r', 'R'], alias: ['rscript'] },
            { name: 'reStructuredText', mime: 'text/x-rst', mode: 'rst', ext: ['rst'], alias: ['rst'] },
            { name: 'RPM Changes', mime: 'text/x-rpm-changes', mode: 'rpm' },
            { name: 'RPM Spec', mime: 'text/x-rpm-spec', mode: 'rpm', ext: ['spec'] },
            {
                name: 'Ruby',
                mime: 'text/x-ruby',
                mode: 'ruby',
                ext: ['rb'],
                alias: ['jruby', 'macruby', 'rake', 'rb', 'rbx'],
            },
            { name: 'Rust', mime: 'text/x-rustsrc', mode: 'rust', ext: ['rs'] },
            { name: 'SAS', mime: 'text/x-sas', mode: 'sas', ext: ['sas'] },
            { name: 'Sass', mime: 'text/x-sass', mode: 'sass', ext: ['sass'] },
            { name: 'Scala', mime: 'text/x-scala', mode: 'clike', ext: ['scala'] },
            { name: 'Scheme', mime: 'text/x-scheme', mode: 'scheme', ext: ['scm', 'ss'] },
            { name: 'SCSS', mime: 'text/x-scss', mode: 'css', ext: ['scss'] },
            {
                name: 'Shell',
                mimes: ['text/x-sh', 'application/x-sh'],
                mode: 'shell',
                ext: ['sh', 'ksh', 'bash'],
                alias: ['bash', 'sh', 'zsh'],
                file: /^PKGBUILD$/,
            },
            { name: 'Sieve', mime: 'application/sieve', mode: 'sieve', ext: ['siv', 'sieve'] },
            { name: 'Slim', mimes: ['text/x-slim', 'application/x-slim'], mode: 'slim', ext: ['slim'] },
            { name: 'Smalltalk', mime: 'text/x-stsrc', mode: 'smalltalk', ext: ['st'] },
            { name: 'Smarty', mime: 'text/x-smarty', mode: 'smarty', ext: ['tpl'] },
            { name: 'Solr', mime: 'text/x-solr', mode: 'solr' },
            { name: 'SML', mime: 'text/x-sml', mode: 'mllike', ext: ['sml', 'sig', 'fun', 'smackspec'] },
            { name: 'Soy', mime: 'text/x-soy', mode: 'soy', ext: ['soy'], alias: ['closure template'] },
            {
                name: 'SPARQL',
                mime: 'application/sparql-query',
                mode: 'sparql',
                ext: ['rq', 'sparql'],
                alias: ['sparul'],
            },
            { name: 'Spreadsheet', mime: 'text/x-spreadsheet', mode: 'spreadsheet', alias: ['excel', 'formula'] },
            { name: 'SQL', mime: 'text/x-sql', mode: 'sql', ext: ['sql'] },
            { name: 'SQLite', mime: 'text/x-sqlite', mode: 'sql' },
            { name: 'Squirrel', mime: 'text/x-squirrel', mode: 'clike', ext: ['nut'] },
            { name: 'Stylus', mime: 'text/x-styl', mode: 'stylus', ext: ['styl'] },
            { name: 'Swift', mime: 'text/x-swift', mode: 'swift', ext: ['swift'] },
            { name: 'sTeX', mime: 'text/x-stex', mode: 'stex' },
            { name: 'LaTeX', mime: 'text/x-latex', mode: 'stex', ext: ['text', 'ltx', 'tex'], alias: ['tex'] },
            { name: 'SystemVerilog', mime: 'text/x-systemverilog', mode: 'verilog', ext: ['v', 'sv', 'svh'] },
            { name: 'Tcl', mime: 'text/x-tcl', mode: 'tcl', ext: ['tcl'] },
            { name: 'Textile', mime: 'text/x-textile', mode: 'textile', ext: ['textile'] },
            { name: 'TiddlyWiki', mime: 'text/x-tiddlywiki', mode: 'tiddlywiki' },
            { name: 'Tiki wiki', mime: 'text/tiki', mode: 'tiki' },
            { name: 'TOML', mime: 'text/x-toml', mode: 'toml', ext: ['toml'] },
            { name: 'Tornado', mime: 'text/x-tornado', mode: 'tornado' },
            { name: 'troff', mime: 'text/troff', mode: 'troff', ext: ['1', '2', '3', '4', '5', '6', '7', '8', '9'] },
            { name: 'TTCN', mime: 'text/x-ttcn', mode: 'ttcn', ext: ['ttcn', 'ttcn3', 'ttcnpp'] },
            { name: 'TTCN_CFG', mime: 'text/x-ttcn-cfg', mode: 'ttcn-cfg', ext: ['cfg'] },
            { name: 'Turtle', mime: 'text/turtle', mode: 'turtle', ext: ['ttl'] },
            { name: 'TypeScript', mime: 'application/typescript', mode: 'javascript', ext: ['ts'], alias: ['ts'] },
            { name: 'TypeScript-JSX', mime: 'text/typescript-jsx', mode: 'jsx', ext: ['tsx'], alias: ['tsx'] },
            { name: 'Twig', mime: 'text/x-twig', mode: 'twig' },
            { name: 'Web IDL', mime: 'text/x-webidl', mode: 'webidl', ext: ['webidl'] },
            { name: 'VB.NET', mime: 'text/x-vb', mode: 'vb', ext: ['vb'] },
            { name: 'VBScript', mime: 'text/vbscript', mode: 'vbscript', ext: ['vbs'] },
            { name: 'Velocity', mime: 'text/velocity', mode: 'velocity', ext: ['vtl'] },
            { name: 'Verilog', mime: 'text/x-verilog', mode: 'verilog', ext: ['v'] },
            { name: 'VHDL', mime: 'text/x-vhdl', mode: 'vhdl', ext: ['vhd', 'vhdl'] },
            { name: 'Vue.js Component', mimes: ['script/x-vue', 'text/x-vue'], mode: 'vue', ext: ['vue'] },
            {
                name: 'XML',
                mimes: ['application/xml', 'text/xml'],
                mode: 'xml',
                ext: ['xml', 'xsl', 'xsd', 'svg'],
                alias: ['rss', 'wsdl', 'xsd'],
            },
            { name: 'XQuery', mime: 'application/xquery', mode: 'xquery', ext: ['xy', 'xquery'] },
            { name: 'Yacas', mime: 'text/x-yacas', mode: 'yacas', ext: ['ys'] },
            { name: 'YAML', mimes: ['text/x-yaml', 'text/yaml'], mode: 'yaml', ext: ['yaml', 'yml'], alias: ['yml'] },
            { name: 'Z80', mime: 'text/x-z80', mode: 'z80', ext: ['z80'] },
            { name: 'mscgen', mime: 'text/x-mscgen', mode: 'mscgen', ext: ['mscgen', 'mscin', 'msc'] },
            { name: 'xu', mime: 'text/x-xu', mode: 'mscgen', ext: ['xu'] },
            { name: 'msgenny', mime: 'text/x-msgenny', mode: 'mscgen', ext: ['msgenny'] },
            { name: 'WebAssembly', mime: 'text/webassembly', mode: 'wast', ext: ['wat', 'wast'] },
        ]
        for (var p = 0; p < o.modeInfo.length; p++) {
            var v = o.modeInfo[p]
            v.mimes && (v.mime = v.mimes[0])
        }
        ;(o.findModeByMIME = function (C) {
            C = C.toLowerCase()
            for (var b = 0; b < o.modeInfo.length; b++) {
                var _ = o.modeInfo[b]
                if (_.mime == C) return _
                if (_.mimes) {
                    for (var s = 0; s < _.mimes.length; s++) if (_.mimes[s] == C) return _
                }
            }
            if (/\+xml$/.test(C)) return o.findModeByMIME('application/xml')
            if (/\+json$/.test(C)) return o.findModeByMIME('application/json')
        }),
            (o.findModeByExtension = function (C) {
                C = C.toLowerCase()
                for (var b = 0; b < o.modeInfo.length; b++) {
                    var _ = o.modeInfo[b]
                    if (_.ext) {
                        for (var s = 0; s < _.ext.length; s++) if (_.ext[s] == C) return _
                    }
                }
            }),
            (o.findModeByFileName = function (C) {
                for (var b = 0; b < o.modeInfo.length; b++) {
                    var _ = o.modeInfo[b]
                    if (_.file && _.file.test(C)) return _
                }
                var s = C.lastIndexOf('.'),
                    g = s > -1 && C.substring(s + 1, C.length)
                if (g) return o.findModeByExtension(g)
            }),
            (o.findModeByName = function (C) {
                C = C.toLowerCase()
                for (var b = 0; b < o.modeInfo.length; b++) {
                    var _ = o.modeInfo[b]
                    if (_.name.toLowerCase() == C) return _
                    if (_.alias) {
                        for (var s = 0; s < _.alias.length; s++) if (_.alias[s].toLowerCase() == C) return _
                    }
                }
            })
    })
})
var Vo = Ue((Zs, Xs) => {
    ;(function (o) {
        typeof Zs == 'object' && typeof Xs == 'object'
            ? o(Re(), dn(), Gs())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror', '../xml/xml', '../meta'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        o.defineMode(
            'markdown',
            function (p, v) {
                var C = o.getMode(p, 'text/html'),
                    b = C.name == 'null'
                function _(q) {
                    if (o.findModeByName) {
                        var T = o.findModeByName(q)
                        T && (q = T.mime || T.mimes[0])
                    }
                    var de = o.getMode(p, q)
                    return de.name == 'null' ? null : de
                }
                v.highlightFormatting === void 0 && (v.highlightFormatting = !1),
                    v.maxBlockquoteDepth === void 0 && (v.maxBlockquoteDepth = 0),
                    v.taskLists === void 0 && (v.taskLists = !1),
                    v.strikethrough === void 0 && (v.strikethrough = !1),
                    v.emoji === void 0 && (v.emoji = !1),
                    v.fencedCodeBlockHighlighting === void 0 && (v.fencedCodeBlockHighlighting = !0),
                    v.fencedCodeBlockDefaultMode === void 0 && (v.fencedCodeBlockDefaultMode = 'text/plain'),
                    v.xml === void 0 && (v.xml = !0),
                    v.tokenTypeOverrides === void 0 && (v.tokenTypeOverrides = {})
                var s = {
                    header: 'header',
                    code: 'comment',
                    quote: 'quote',
                    list1: 'variable-2',
                    list2: 'variable-3',
                    list3: 'keyword',
                    hr: 'hr',
                    image: 'image',
                    imageAltText: 'image-alt-text',
                    imageMarker: 'image-marker',
                    formatting: 'formatting',
                    linkInline: 'link',
                    linkEmail: 'link',
                    linkText: 'link',
                    linkHref: 'string',
                    em: 'em',
                    strong: 'strong',
                    strikethrough: 'strikethrough',
                    emoji: 'builtin',
                }
                for (var g in s) s.hasOwnProperty(g) && v.tokenTypeOverrides[g] && (s[g] = v.tokenTypeOverrides[g])
                var h = /^([*\-_])(?:\s*\1){2,}\s*$/,
                    w = /^(?:[*\-+]|^[0-9]+([.)]))\s+/,
                    k = /^\[(x| )\](?=\s)/i,
                    c = v.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/,
                    d = /^ {0,3}(?:\={1,}|-{2,})\s*$/,
                    S = /^[^#!\[\]*_\\<>` "'(~:]+/,
                    E = /^(~~~+|```+)[ \t]*([\w\/+#-]*)[^\n`]*$/,
                    z = /^\s*\[[^\]]+?\]:.*$/,
                    y =
                        /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/,
                    H = '    '
                function M(q, T, de) {
                    return (T.f = T.inline = de), de(q, T)
                }
                function B(q, T, de) {
                    return (T.f = T.block = de), de(q, T)
                }
                function X(q) {
                    return !q || !/\S/.test(q.string)
                }
                function re(q) {
                    if (
                        ((q.linkTitle = !1),
                        (q.linkHref = !1),
                        (q.linkText = !1),
                        (q.em = !1),
                        (q.strong = !1),
                        (q.strikethrough = !1),
                        (q.quote = 0),
                        (q.indentedCode = !1),
                        q.f == N)
                    ) {
                        var T = b
                        if (!T) {
                            var de = o.innerMode(C, q.htmlState)
                            T =
                                de.mode.name == 'xml' &&
                                de.state.tagStart === null &&
                                !de.state.context &&
                                de.state.tokenize.isInText
                        }
                        T && ((q.f = j), (q.block = ne), (q.htmlState = null))
                    }
                    return (
                        (q.trailingSpace = 0),
                        (q.trailingSpaceNewLine = !1),
                        (q.prevLine = q.thisLine),
                        (q.thisLine = { stream: null }),
                        null
                    )
                }
                function ne(q, T) {
                    var de = q.column() === T.indentation,
                        Ee = X(T.prevLine.stream),
                        fe = T.indentedCode,
                        xe = T.prevLine.hr,
                        pe = T.list !== !1,
                        De = (T.listStack[T.listStack.length - 1] || 0) + 3
                    T.indentedCode = !1
                    var Ne = T.indentation
                    if (T.indentationDiff === null && ((T.indentationDiff = T.indentation), pe)) {
                        for (T.list = null; Ne < T.listStack[T.listStack.length - 1]; )
                            T.listStack.pop(),
                                T.listStack.length
                                    ? (T.indentation = T.listStack[T.listStack.length - 1])
                                    : (T.list = !1)
                        T.list !== !1 && (T.indentationDiff = Ne - T.listStack[T.listStack.length - 1])
                    }
                    var Me = !Ee && !xe && !T.prevLine.header && (!pe || !fe) && !T.prevLine.fencedCodeEnd,
                        Fe = (T.list === !1 || xe || Ee) && T.indentation <= De && q.match(h),
                        Ge = null
                    if (T.indentationDiff >= 4 && (fe || T.prevLine.fencedCodeEnd || T.prevLine.header || Ee))
                        return q.skipToEnd(), (T.indentedCode = !0), s.code
                    if (q.eatSpace()) return null
                    if (de && T.indentation <= De && (Ge = q.match(c)) && Ge[1].length <= 6)
                        return (
                            (T.quote = 0),
                            (T.header = Ge[1].length),
                            (T.thisLine.header = !0),
                            v.highlightFormatting && (T.formatting = 'header'),
                            (T.f = T.inline),
                            D(T)
                        )
                    if (T.indentation <= De && q.eat('>'))
                        return (
                            (T.quote = de ? 1 : T.quote + 1),
                            v.highlightFormatting && (T.formatting = 'quote'),
                            q.eatSpace(),
                            D(T)
                        )
                    if (!Fe && !T.setext && de && T.indentation <= De && (Ge = q.match(w))) {
                        var Le = Ge[1] ? 'ol' : 'ul'
                        return (
                            (T.indentation = Ne + q.current().length),
                            (T.list = !0),
                            (T.quote = 0),
                            T.listStack.push(T.indentation),
                            (T.em = !1),
                            (T.strong = !1),
                            (T.code = !1),
                            (T.strikethrough = !1),
                            v.taskLists && q.match(k, !1) && (T.taskList = !0),
                            (T.f = T.inline),
                            v.highlightFormatting && (T.formatting = ['list', 'list-' + Le]),
                            D(T)
                        )
                    } else {
                        if (de && T.indentation <= De && (Ge = q.match(E, !0)))
                            return (
                                (T.quote = 0),
                                (T.fencedEndRE = new RegExp(Ge[1] + '+ *$')),
                                (T.localMode =
                                    v.fencedCodeBlockHighlighting && _(Ge[2] || v.fencedCodeBlockDefaultMode)),
                                T.localMode && (T.localState = o.startState(T.localMode)),
                                (T.f = T.block = F),
                                v.highlightFormatting && (T.formatting = 'code-block'),
                                (T.code = -1),
                                D(T)
                            )
                        if (
                            T.setext ||
                            ((!Me || !pe) &&
                                !T.quote &&
                                T.list === !1 &&
                                !T.code &&
                                !Fe &&
                                !z.test(q.string) &&
                                (Ge = q.lookAhead(1)) &&
                                (Ge = Ge.match(d)))
                        )
                            return (
                                T.setext
                                    ? ((T.header = T.setext),
                                      (T.setext = 0),
                                      q.skipToEnd(),
                                      v.highlightFormatting && (T.formatting = 'header'))
                                    : ((T.header = Ge[0].charAt(0) == '=' ? 1 : 2), (T.setext = T.header)),
                                (T.thisLine.header = !0),
                                (T.f = T.inline),
                                D(T)
                            )
                        if (Fe) return q.skipToEnd(), (T.hr = !0), (T.thisLine.hr = !0), s.hr
                        if (q.peek() === '[') return M(q, T, I)
                    }
                    return M(q, T, T.inline)
                }
                function N(q, T) {
                    var de = C.token(q, T.htmlState)
                    if (!b) {
                        var Ee = o.innerMode(C, T.htmlState)
                        ;((Ee.mode.name == 'xml' &&
                            Ee.state.tagStart === null &&
                            !Ee.state.context &&
                            Ee.state.tokenize.isInText) ||
                            (T.md_inside && q.current().indexOf('>') > -1)) &&
                            ((T.f = j), (T.block = ne), (T.htmlState = null))
                    }
                    return de
                }
                function F(q, T) {
                    var de = T.listStack[T.listStack.length - 1] || 0,
                        Ee = T.indentation < de,
                        fe = de + 3
                    if (T.fencedEndRE && T.indentation <= fe && (Ee || q.match(T.fencedEndRE))) {
                        v.highlightFormatting && (T.formatting = 'code-block')
                        var xe
                        return (
                            Ee || (xe = D(T)),
                            (T.localMode = T.localState = null),
                            (T.block = ne),
                            (T.f = j),
                            (T.fencedEndRE = null),
                            (T.code = 0),
                            (T.thisLine.fencedCodeEnd = !0),
                            Ee ? B(q, T, T.block) : xe
                        )
                    } else return T.localMode ? T.localMode.token(q, T.localState) : (q.skipToEnd(), s.code)
                }
                function D(q) {
                    var T = []
                    if (q.formatting) {
                        T.push(s.formatting), typeof q.formatting == 'string' && (q.formatting = [q.formatting])
                        for (var de = 0; de < q.formatting.length; de++)
                            T.push(s.formatting + '-' + q.formatting[de]),
                                q.formatting[de] === 'header' &&
                                    T.push(s.formatting + '-' + q.formatting[de] + '-' + q.header),
                                q.formatting[de] === 'quote' &&
                                    (!v.maxBlockquoteDepth || v.maxBlockquoteDepth >= q.quote
                                        ? T.push(s.formatting + '-' + q.formatting[de] + '-' + q.quote)
                                        : T.push('error'))
                    }
                    if (q.taskOpen) return T.push('meta'), T.length ? T.join(' ') : null
                    if (q.taskClosed) return T.push('property'), T.length ? T.join(' ') : null
                    if (
                        (q.linkHref
                            ? T.push(s.linkHref, 'url')
                            : (q.strong && T.push(s.strong),
                              q.em && T.push(s.em),
                              q.strikethrough && T.push(s.strikethrough),
                              q.emoji && T.push(s.emoji),
                              q.linkText && T.push(s.linkText),
                              q.code && T.push(s.code),
                              q.image && T.push(s.image),
                              q.imageAltText && T.push(s.imageAltText, 'link'),
                              q.imageMarker && T.push(s.imageMarker)),
                        q.header && T.push(s.header, s.header + '-' + q.header),
                        q.quote &&
                            (T.push(s.quote),
                            !v.maxBlockquoteDepth || v.maxBlockquoteDepth >= q.quote
                                ? T.push(s.quote + '-' + q.quote)
                                : T.push(s.quote + '-' + v.maxBlockquoteDepth)),
                        q.list !== !1)
                    ) {
                        var Ee = (q.listStack.length - 1) % 3
                        Ee ? (Ee === 1 ? T.push(s.list2) : T.push(s.list3)) : T.push(s.list1)
                    }
                    return (
                        q.trailingSpaceNewLine
                            ? T.push('trailing-space-new-line')
                            : q.trailingSpace && T.push('trailing-space-' + (q.trailingSpace % 2 ? 'a' : 'b')),
                        T.length ? T.join(' ') : null
                    )
                }
                function V(q, T) {
                    if (q.match(S, !0)) return D(T)
                }
                function j(q, T) {
                    var de = T.text(q, T)
                    if (typeof de < 'u') return de
                    if (T.list) return (T.list = null), D(T)
                    if (T.taskList) {
                        var Ee = q.match(k, !0)[1] === ' '
                        return (
                            Ee ? (T.taskOpen = !0) : (T.taskClosed = !0),
                            v.highlightFormatting && (T.formatting = 'task'),
                            (T.taskList = !1),
                            D(T)
                        )
                    }
                    if (((T.taskOpen = !1), (T.taskClosed = !1), T.header && q.match(/^#+$/, !0)))
                        return v.highlightFormatting && (T.formatting = 'header'), D(T)
                    var fe = q.next()
                    if (T.linkTitle) {
                        T.linkTitle = !1
                        var xe = fe
                        fe === '(' && (xe = ')'), (xe = (xe + '').replace(/([.?*+^\[\]\\(){}|-])/g, '\\$1'))
                        var pe = '^\\s*(?:[^' + xe + '\\\\]+|\\\\\\\\|\\\\.)' + xe
                        if (q.match(new RegExp(pe), !0)) return s.linkHref
                    }
                    if (fe === '`') {
                        var De = T.formatting
                        v.highlightFormatting && (T.formatting = 'code'), q.eatWhile('`')
                        var Ne = q.current().length
                        if (T.code == 0 && (!T.quote || Ne == 1)) return (T.code = Ne), D(T)
                        if (Ne == T.code) {
                            var Me = D(T)
                            return (T.code = 0), Me
                        } else return (T.formatting = De), D(T)
                    } else if (T.code) return D(T)
                    if (fe === '\\' && (q.next(), v.highlightFormatting)) {
                        var Fe = D(T),
                            Ge = s.formatting + '-escape'
                        return Fe ? Fe + ' ' + Ge : Ge
                    }
                    if (fe === '!' && q.match(/\[[^\]]*\] ?(?:\(|\[)/, !1))
                        return (
                            (T.imageMarker = !0),
                            (T.image = !0),
                            v.highlightFormatting && (T.formatting = 'image'),
                            D(T)
                        )
                    if (fe === '[' && T.imageMarker && q.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/, !1))
                        return (
                            (T.imageMarker = !1),
                            (T.imageAltText = !0),
                            v.highlightFormatting && (T.formatting = 'image'),
                            D(T)
                        )
                    if (fe === ']' && T.imageAltText) {
                        v.highlightFormatting && (T.formatting = 'image')
                        var Fe = D(T)
                        return (T.imageAltText = !1), (T.image = !1), (T.inline = T.f = x), Fe
                    }
                    if (fe === '[' && !T.image)
                        return (
                            (T.linkText && q.match(/^.*?\]/)) ||
                                ((T.linkText = !0), v.highlightFormatting && (T.formatting = 'link')),
                            D(T)
                        )
                    if (fe === ']' && T.linkText) {
                        v.highlightFormatting && (T.formatting = 'link')
                        var Fe = D(T)
                        return (T.linkText = !1), (T.inline = T.f = q.match(/\(.*?\)| ?\[.*?\]/, !1) ? x : j), Fe
                    }
                    if (fe === '<' && q.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, !1)) {
                        ;(T.f = T.inline = J), v.highlightFormatting && (T.formatting = 'link')
                        var Fe = D(T)
                        return Fe ? (Fe += ' ') : (Fe = ''), Fe + s.linkInline
                    }
                    if (fe === '<' && q.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, !1)) {
                        ;(T.f = T.inline = J), v.highlightFormatting && (T.formatting = 'link')
                        var Fe = D(T)
                        return Fe ? (Fe += ' ') : (Fe = ''), Fe + s.linkEmail
                    }
                    if (
                        v.xml &&
                        fe === '<' &&
                        q.match(
                            /^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i,
                            !1,
                        )
                    ) {
                        var Le = q.string.indexOf('>', q.pos)
                        if (Le != -1) {
                            var Je = q.string.substring(q.start, Le)
                            ;/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(Je) && (T.md_inside = !0)
                        }
                        return q.backUp(1), (T.htmlState = o.startState(C)), B(q, T, N)
                    }
                    if (v.xml && fe === '<' && q.match(/^\/\w*?>/)) return (T.md_inside = !1), 'tag'
                    if (fe === '*' || fe === '_') {
                        for (var He = 1, $e = q.pos == 1 ? ' ' : q.string.charAt(q.pos - 2); He < 3 && q.eat(fe); ) He++
                        var O = q.peek() || ' ',
                            Z = !/\s/.test(O) && (!y.test(O) || /\s/.test($e) || y.test($e)),
                            me = !/\s/.test($e) && (!y.test($e) || /\s/.test(O) || y.test(O)),
                            Be = null,
                            te = null
                        if (
                            (He % 2 &&
                                (!T.em && Z && (fe === '*' || !me || y.test($e))
                                    ? (Be = !0)
                                    : T.em == fe && me && (fe === '*' || !Z || y.test(O)) && (Be = !1)),
                            He > 1 &&
                                (!T.strong && Z && (fe === '*' || !me || y.test($e))
                                    ? (te = !0)
                                    : T.strong == fe && me && (fe === '*' || !Z || y.test(O)) && (te = !1)),
                            te != null || Be != null)
                        ) {
                            v.highlightFormatting &&
                                (T.formatting = Be == null ? 'strong' : te == null ? 'em' : 'strong em'),
                                Be === !0 && (T.em = fe),
                                te === !0 && (T.strong = fe)
                            var Me = D(T)
                            return Be === !1 && (T.em = !1), te === !1 && (T.strong = !1), Me
                        }
                    } else if (fe === ' ' && (q.eat('*') || q.eat('_'))) {
                        if (q.peek() === ' ') return D(T)
                        q.backUp(1)
                    }
                    if (v.strikethrough) {
                        if (fe === '~' && q.eatWhile(fe)) {
                            if (T.strikethrough) {
                                v.highlightFormatting && (T.formatting = 'strikethrough')
                                var Me = D(T)
                                return (T.strikethrough = !1), Me
                            } else if (q.match(/^[^\s]/, !1))
                                return (
                                    (T.strikethrough = !0),
                                    v.highlightFormatting && (T.formatting = 'strikethrough'),
                                    D(T)
                                )
                        } else if (fe === ' ' && q.match('~~', !0)) {
                            if (q.peek() === ' ') return D(T)
                            q.backUp(2)
                        }
                    }
                    if (v.emoji && fe === ':' && q.match(/^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/)) {
                        ;(T.emoji = !0), v.highlightFormatting && (T.formatting = 'emoji')
                        var ce = D(T)
                        return (T.emoji = !1), ce
                    }
                    return (
                        fe === ' ' &&
                            (q.match(/^ +$/, !1)
                                ? T.trailingSpace++
                                : T.trailingSpace && (T.trailingSpaceNewLine = !0)),
                        D(T)
                    )
                }
                function J(q, T) {
                    var de = q.next()
                    if (de === '>') {
                        ;(T.f = T.inline = j), v.highlightFormatting && (T.formatting = 'link')
                        var Ee = D(T)
                        return Ee ? (Ee += ' ') : (Ee = ''), Ee + s.linkInline
                    }
                    return q.match(/^[^>]+/, !0), s.linkInline
                }
                function x(q, T) {
                    if (q.eatSpace()) return null
                    var de = q.next()
                    return de === '(' || de === '['
                        ? ((T.f = T.inline = Y(de === '(' ? ')' : ']')),
                          v.highlightFormatting && (T.formatting = 'link-string'),
                          (T.linkHref = !0),
                          D(T))
                        : 'error'
                }
                var K = {
                    ')': /^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,
                    ']': /^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/,
                }
                function Y(q) {
                    return function (T, de) {
                        var Ee = T.next()
                        if (Ee === q) {
                            ;(de.f = de.inline = j), v.highlightFormatting && (de.formatting = 'link-string')
                            var fe = D(de)
                            return (de.linkHref = !1), fe
                        }
                        return T.match(K[q]), (de.linkHref = !0), D(de)
                    }
                }
                function I(q, T) {
                    return q.match(/^([^\]\\]|\\.)*\]:/, !1)
                        ? ((T.f = W),
                          q.next(),
                          v.highlightFormatting && (T.formatting = 'link'),
                          (T.linkText = !0),
                          D(T))
                        : M(q, T, j)
                }
                function W(q, T) {
                    if (q.match(']:', !0)) {
                        ;(T.f = T.inline = le), v.highlightFormatting && (T.formatting = 'link')
                        var de = D(T)
                        return (T.linkText = !1), de
                    }
                    return q.match(/^([^\]\\]|\\.)+/, !0), s.linkText
                }
                function le(q, T) {
                    return q.eatSpace()
                        ? null
                        : (q.match(/^[^\s]+/, !0),
                          q.peek() === void 0
                              ? (T.linkTitle = !0)
                              : q.match(/^(?:\s+(?:"(?:[^"\\]|\\.)+"|'(?:[^'\\]|\\.)+'|\((?:[^)\\]|\\.)+\)))?/, !0),
                          (T.f = T.inline = j),
                          s.linkHref + ' url')
                }
                var ye = {
                    startState: function () {
                        return {
                            f: ne,
                            prevLine: { stream: null },
                            thisLine: { stream: null },
                            block: ne,
                            htmlState: null,
                            indentation: 0,
                            inline: j,
                            text: V,
                            formatting: !1,
                            linkText: !1,
                            linkHref: !1,
                            linkTitle: !1,
                            code: 0,
                            em: !1,
                            strong: !1,
                            header: 0,
                            setext: 0,
                            hr: !1,
                            taskList: !1,
                            list: !1,
                            listStack: [],
                            quote: 0,
                            trailingSpace: 0,
                            trailingSpaceNewLine: !1,
                            strikethrough: !1,
                            emoji: !1,
                            fencedEndRE: null,
                        }
                    },
                    copyState: function (q) {
                        return {
                            f: q.f,
                            prevLine: q.prevLine,
                            thisLine: q.thisLine,
                            block: q.block,
                            htmlState: q.htmlState && o.copyState(C, q.htmlState),
                            indentation: q.indentation,
                            localMode: q.localMode,
                            localState: q.localMode ? o.copyState(q.localMode, q.localState) : null,
                            inline: q.inline,
                            text: q.text,
                            formatting: !1,
                            linkText: q.linkText,
                            linkTitle: q.linkTitle,
                            linkHref: q.linkHref,
                            code: q.code,
                            em: q.em,
                            strong: q.strong,
                            strikethrough: q.strikethrough,
                            emoji: q.emoji,
                            header: q.header,
                            setext: q.setext,
                            hr: q.hr,
                            taskList: q.taskList,
                            list: q.list,
                            listStack: q.listStack.slice(0),
                            quote: q.quote,
                            indentedCode: q.indentedCode,
                            trailingSpace: q.trailingSpace,
                            trailingSpaceNewLine: q.trailingSpaceNewLine,
                            md_inside: q.md_inside,
                            fencedEndRE: q.fencedEndRE,
                        }
                    },
                    token: function (q, T) {
                        if (((T.formatting = !1), q != T.thisLine.stream)) {
                            if (((T.header = 0), (T.hr = !1), q.match(/^\s*$/, !0))) return re(T), null
                            if (
                                ((T.prevLine = T.thisLine),
                                (T.thisLine = { stream: q }),
                                (T.taskList = !1),
                                (T.trailingSpace = 0),
                                (T.trailingSpaceNewLine = !1),
                                !T.localState && ((T.f = T.block), T.f != N))
                            ) {
                                var de = q.match(/^\s*/, !0)[0].replace(/\t/g, H).length
                                if (((T.indentation = de), (T.indentationDiff = null), de > 0)) return null
                            }
                        }
                        return T.f(q, T)
                    },
                    innerMode: function (q) {
                        return q.block == N
                            ? { state: q.htmlState, mode: C }
                            : q.localState
                              ? { state: q.localState, mode: q.localMode }
                              : { state: q, mode: ye }
                    },
                    indent: function (q, T, de) {
                        return q.block == N && C.indent
                            ? C.indent(q.htmlState, T, de)
                            : q.localState && q.localMode.indent
                              ? q.localMode.indent(q.localState, T, de)
                              : o.Pass
                    },
                    blankLine: re,
                    getType: D,
                    blockCommentStart: '<!--',
                    blockCommentEnd: '-->',
                    closeBrackets: '()[]{}\'\'""``',
                    fold: 'markdown',
                }
                return ye
            },
            'xml',
        ),
            o.defineMIME('text/markdown', 'markdown'),
            o.defineMIME('text/x-markdown', 'markdown')
    })
})
var Vs = Ue((Ys, Qs) => {
    ;(function (o) {
        typeof Ys == 'object' && typeof Qs == 'object'
            ? o(Re(), Vo(), Kn())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror', '../markdown/markdown', '../../addon/mode/overlay'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        var p =
            /^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?«»“”‘’]))/i
        o.defineMode(
            'gfm',
            function (v, C) {
                var b = 0
                function _(w) {
                    return (w.code = !1), null
                }
                var s = {
                        startState: function () {
                            return { code: !1, codeBlock: !1, ateSpace: !1 }
                        },
                        copyState: function (w) {
                            return { code: w.code, codeBlock: w.codeBlock, ateSpace: w.ateSpace }
                        },
                        token: function (w, k) {
                            if (((k.combineTokens = null), k.codeBlock))
                                return w.match(/^```+/) ? ((k.codeBlock = !1), null) : (w.skipToEnd(), null)
                            if ((w.sol() && (k.code = !1), w.sol() && w.match(/^```+/)))
                                return w.skipToEnd(), (k.codeBlock = !0), null
                            if (w.peek() === '`') {
                                w.next()
                                var c = w.pos
                                w.eatWhile('`')
                                var d = 1 + w.pos - c
                                return k.code ? d === b && (k.code = !1) : ((b = d), (k.code = !0)), null
                            } else if (k.code) return w.next(), null
                            if (w.eatSpace()) return (k.ateSpace = !0), null
                            if ((w.sol() || k.ateSpace) && ((k.ateSpace = !1), C.gitHubSpice !== !1)) {
                                if (
                                    w.match(
                                        /^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?=.{0,6}\d)(?:[a-f0-9]{7,40}\b)/,
                                    )
                                )
                                    return (k.combineTokens = !0), 'link'
                                if (w.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/))
                                    return (k.combineTokens = !0), 'link'
                            }
                            return w.match(p) &&
                                w.string.slice(w.start - 2, w.start) != '](' &&
                                (w.start == 0 || /\W/.test(w.string.charAt(w.start - 1)))
                                ? ((k.combineTokens = !0), 'link')
                                : (w.next(), null)
                        },
                        blankLine: _,
                    },
                    g = { taskLists: !0, strikethrough: !0, emoji: !0 }
                for (var h in C) g[h] = C[h]
                return (g.name = 'markdown'), o.overlayMode(o.getMode(v, g), s)
            },
            'markdown',
        ),
            o.defineMIME('text/x-gfm', 'gfm')
    })
})
var tu = Ue((Js, eu) => {
    ;(function (o) {
        typeof Js == 'object' && typeof eu == 'object'
            ? o(Re())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        o.defineMode('go', function (p) {
            var v = p.indentUnit,
                C = {
                    break: !0,
                    case: !0,
                    chan: !0,
                    const: !0,
                    continue: !0,
                    default: !0,
                    defer: !0,
                    else: !0,
                    fallthrough: !0,
                    for: !0,
                    func: !0,
                    go: !0,
                    goto: !0,
                    if: !0,
                    import: !0,
                    interface: !0,
                    map: !0,
                    package: !0,
                    range: !0,
                    return: !0,
                    select: !0,
                    struct: !0,
                    switch: !0,
                    type: !0,
                    var: !0,
                    bool: !0,
                    byte: !0,
                    complex64: !0,
                    complex128: !0,
                    float32: !0,
                    float64: !0,
                    int8: !0,
                    int16: !0,
                    int32: !0,
                    int64: !0,
                    string: !0,
                    uint8: !0,
                    uint16: !0,
                    uint32: !0,
                    uint64: !0,
                    int: !0,
                    uint: !0,
                    uintptr: !0,
                    error: !0,
                    rune: !0,
                    any: !0,
                    comparable: !0,
                },
                b = {
                    true: !0,
                    false: !0,
                    iota: !0,
                    nil: !0,
                    append: !0,
                    cap: !0,
                    close: !0,
                    complex: !0,
                    copy: !0,
                    delete: !0,
                    imag: !0,
                    len: !0,
                    make: !0,
                    new: !0,
                    panic: !0,
                    print: !0,
                    println: !0,
                    real: !0,
                    recover: !0,
                },
                _ = /[+\-*&^%:=<>!|\/]/,
                s
            function g(S, E) {
                var z = S.next()
                if (z == '"' || z == "'" || z == '`') return (E.tokenize = h(z)), E.tokenize(S, E)
                if (/[\d\.]/.test(z))
                    return (
                        z == '.'
                            ? S.match(/^[0-9]+([eE][\-+]?[0-9]+)?/)
                            : z == '0'
                              ? S.match(/^[xX][0-9a-fA-F]+/) || S.match(/^0[0-7]+/)
                              : S.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/),
                        'number'
                    )
                if (/[\[\]{}\(\),;\:\.]/.test(z)) return (s = z), null
                if (z == '/') {
                    if (S.eat('*')) return (E.tokenize = w), w(S, E)
                    if (S.eat('/')) return S.skipToEnd(), 'comment'
                }
                if (_.test(z)) return S.eatWhile(_), 'operator'
                S.eatWhile(/[\w\$_\xa1-\uffff]/)
                var y = S.current()
                return C.propertyIsEnumerable(y)
                    ? ((y == 'case' || y == 'default') && (s = 'case'), 'keyword')
                    : b.propertyIsEnumerable(y)
                      ? 'atom'
                      : 'variable'
            }
            function h(S) {
                return function (E, z) {
                    for (var y = !1, H, M = !1; (H = E.next()) != null; ) {
                        if (H == S && !y) {
                            M = !0
                            break
                        }
                        y = !y && S != '`' && H == '\\'
                    }
                    return (M || !(y || S == '`')) && (z.tokenize = g), 'string'
                }
            }
            function w(S, E) {
                for (var z = !1, y; (y = S.next()); ) {
                    if (y == '/' && z) {
                        E.tokenize = g
                        break
                    }
                    z = y == '*'
                }
                return 'comment'
            }
            function k(S, E, z, y, H) {
                ;(this.indented = S), (this.column = E), (this.type = z), (this.align = y), (this.prev = H)
            }
            function c(S, E, z) {
                return (S.context = new k(S.indented, E, z, null, S.context))
            }
            function d(S) {
                if (S.context.prev) {
                    var E = S.context.type
                    return (
                        (E == ')' || E == ']' || E == '}') && (S.indented = S.context.indented),
                        (S.context = S.context.prev)
                    )
                }
            }
            return {
                startState: function (S) {
                    return { tokenize: null, context: new k((S || 0) - v, 0, 'top', !1), indented: 0, startOfLine: !0 }
                },
                token: function (S, E) {
                    var z = E.context
                    if (
                        (S.sol() &&
                            (z.align == null && (z.align = !1),
                            (E.indented = S.indentation()),
                            (E.startOfLine = !0),
                            z.type == 'case' && (z.type = '}')),
                        S.eatSpace())
                    )
                        return null
                    s = null
                    var y = (E.tokenize || g)(S, E)
                    return (
                        y == 'comment' ||
                            (z.align == null && (z.align = !0),
                            s == '{'
                                ? c(E, S.column(), '}')
                                : s == '['
                                  ? c(E, S.column(), ']')
                                  : s == '('
                                    ? c(E, S.column(), ')')
                                    : s == 'case'
                                      ? (z.type = 'case')
                                      : ((s == '}' && z.type == '}') || s == z.type) && d(E),
                            (E.startOfLine = !1)),
                        y
                    )
                },
                indent: function (S, E) {
                    if (S.tokenize != g && S.tokenize != null) return o.Pass
                    var z = S.context,
                        y = E && E.charAt(0)
                    if (z.type == 'case' && /^(?:case|default)\b/.test(E)) return (S.context.type = '}'), z.indented
                    var H = y == z.type
                    return z.align ? z.column + (H ? 0 : 1) : z.indented + (H ? 0 : v)
                },
                electricChars: '{}):',
                closeBrackets: '()[]{}\'\'""``',
                fold: 'brace',
                blockCommentStart: '/*',
                blockCommentEnd: '*/',
                lineComment: '//',
            }
        }),
            o.defineMIME('text/x-go', 'go')
    })
})
var iu = Ue((ru, nu) => {
    ;(function (o) {
        typeof ru == 'object' && typeof nu == 'object'
            ? o(Re())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        o.defineMode('http', function () {
            function p(w, k) {
                return w.skipToEnd(), (k.cur = g), 'error'
            }
            function v(w, k) {
                return w.match(/^HTTP\/\d\.\d/)
                    ? ((k.cur = C), 'keyword')
                    : w.match(/^[A-Z]+/) && /[ \t]/.test(w.peek())
                      ? ((k.cur = _), 'keyword')
                      : p(w, k)
            }
            function C(w, k) {
                var c = w.match(/^\d+/)
                if (!c) return p(w, k)
                k.cur = b
                var d = Number(c[0])
                return d >= 100 && d < 200
                    ? 'positive informational'
                    : d >= 200 && d < 300
                      ? 'positive success'
                      : d >= 300 && d < 400
                        ? 'positive redirect'
                        : d >= 400 && d < 500
                          ? 'negative client-error'
                          : d >= 500 && d < 600
                            ? 'negative server-error'
                            : 'error'
            }
            function b(w, k) {
                return w.skipToEnd(), (k.cur = g), null
            }
            function _(w, k) {
                return w.eatWhile(/\S/), (k.cur = s), 'string-2'
            }
            function s(w, k) {
                return w.match(/^HTTP\/\d\.\d$/) ? ((k.cur = g), 'keyword') : p(w, k)
            }
            function g(w) {
                return w.sol() && !w.eat(/[ \t]/)
                    ? w.match(/^.*?:/)
                        ? 'atom'
                        : (w.skipToEnd(), 'error')
                    : (w.skipToEnd(), 'string')
            }
            function h(w) {
                return w.skipToEnd(), null
            }
            return {
                token: function (w, k) {
                    var c = k.cur
                    return c != g && c != h && w.eatSpace() ? null : c(w, k)
                },
                blankLine: function (w) {
                    w.cur = h
                },
                startState: function () {
                    return { cur: v }
                },
            }
        }),
            o.defineMIME('message/http', 'http')
    })
})
var lu = Ue((ou, au) => {
    ;(function (o) {
        typeof ou == 'object' && typeof au == 'object'
            ? o(Re())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        o.defineMode('jinja2', function () {
            var p = [
                    'and',
                    'as',
                    'block',
                    'endblock',
                    'by',
                    'cycle',
                    'debug',
                    'else',
                    'elif',
                    'extends',
                    'filter',
                    'endfilter',
                    'firstof',
                    'do',
                    'for',
                    'endfor',
                    'if',
                    'endif',
                    'ifchanged',
                    'endifchanged',
                    'ifequal',
                    'endifequal',
                    'ifnotequal',
                    'set',
                    'raw',
                    'endraw',
                    'endifnotequal',
                    'in',
                    'include',
                    'load',
                    'not',
                    'now',
                    'or',
                    'parsed',
                    'regroup',
                    'reversed',
                    'spaceless',
                    'call',
                    'endcall',
                    'macro',
                    'endmacro',
                    'endspaceless',
                    'ssi',
                    'templatetag',
                    'openblock',
                    'closeblock',
                    'openvariable',
                    'closevariable',
                    'without',
                    'context',
                    'openbrace',
                    'closebrace',
                    'opencomment',
                    'closecomment',
                    'widthratio',
                    'url',
                    'with',
                    'endwith',
                    'get_current_language',
                    'trans',
                    'endtrans',
                    'noop',
                    'blocktrans',
                    'endblocktrans',
                    'get_available_languages',
                    'get_current_language_bidi',
                    'pluralize',
                    'autoescape',
                    'endautoescape',
                ],
                v = /^[+\-*&%=<>!?|~^]/,
                C = /^[:\[\(\{]/,
                b = ['true', 'false'],
                _ = /^(\d[+\-\*\/])?\d+(\.\d+)?/
            ;(p = new RegExp('((' + p.join(')|(') + '))\\b')), (b = new RegExp('((' + b.join(')|(') + '))\\b'))
            function s(g, h) {
                var w = g.peek()
                if (h.incomment)
                    return g.skipTo('#}') ? (g.eatWhile(/\#|}/), (h.incomment = !1)) : g.skipToEnd(), 'comment'
                if (h.intag) {
                    if (h.operator) {
                        if (((h.operator = !1), g.match(b))) return 'atom'
                        if (g.match(_)) return 'number'
                    }
                    if (h.sign) {
                        if (((h.sign = !1), g.match(b))) return 'atom'
                        if (g.match(_)) return 'number'
                    }
                    if (h.instring) return w == h.instring && (h.instring = !1), g.next(), 'string'
                    if (w == "'" || w == '"') return (h.instring = w), g.next(), 'string'
                    if (h.inbraces > 0 && w == ')') g.next(), h.inbraces--
                    else if (w == '(') g.next(), h.inbraces++
                    else if (h.inbrackets > 0 && w == ']') g.next(), h.inbrackets--
                    else if (w == '[') g.next(), h.inbrackets++
                    else {
                        if (!h.lineTag && (g.match(h.intag + '}') || (g.eat('-') && g.match(h.intag + '}'))))
                            return (h.intag = !1), 'tag'
                        if (g.match(v)) return (h.operator = !0), 'operator'
                        if (g.match(C)) h.sign = !0
                        else {
                            if (g.column() == 1 && h.lineTag && g.match(p)) return 'keyword'
                            if (g.eat(' ') || g.sol()) {
                                if (g.match(p)) return 'keyword'
                                if (g.match(b)) return 'atom'
                                if (g.match(_)) return 'number'
                                g.sol() && g.next()
                            } else g.next()
                        }
                    }
                    return 'variable'
                } else if (g.eat('{')) {
                    if (g.eat('#'))
                        return (
                            (h.incomment = !0),
                            g.skipTo('#}') ? (g.eatWhile(/\#|}/), (h.incomment = !1)) : g.skipToEnd(),
                            'comment'
                        )
                    if ((w = g.eat(/\{|%/)))
                        return (
                            (h.intag = w),
                            (h.inbraces = 0),
                            (h.inbrackets = 0),
                            w == '{' && (h.intag = '}'),
                            g.eat('-'),
                            'tag'
                        )
                } else if (g.eat('#')) {
                    if (g.peek() == '#') return g.skipToEnd(), 'comment'
                    if (!g.eol()) return (h.intag = !0), (h.lineTag = !0), (h.inbraces = 0), (h.inbrackets = 0), 'tag'
                }
                g.next()
            }
            return {
                startState: function () {
                    return { tokenize: s, inbrackets: 0, inbraces: 0 }
                },
                token: function (g, h) {
                    var w = h.tokenize(g, h)
                    return (
                        g.eol() &&
                            h.lineTag &&
                            !h.instring &&
                            h.inbraces == 0 &&
                            h.inbrackets == 0 &&
                            ((h.intag = !1), (h.lineTag = !1)),
                        w
                    )
                },
                blockCommentStart: '{#',
                blockCommentEnd: '#}',
                lineComment: '##',
            }
        }),
            o.defineMIME('text/jinja2', 'jinja2')
    })
})
var cu = Ue((su, uu) => {
    ;(function (o) {
        typeof su == 'object' && typeof uu == 'object'
            ? o(Re(), dn(), pn())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror', '../xml/xml', '../javascript/javascript'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        function p(C, b, _, s) {
            ;(this.state = C), (this.mode = b), (this.depth = _), (this.prev = s)
        }
        function v(C) {
            return new p(o.copyState(C.mode, C.state), C.mode, C.depth, C.prev && v(C.prev))
        }
        o.defineMode(
            'jsx',
            function (C, b) {
                var _ = o.getMode(C, {
                        name: 'xml',
                        allowMissing: !0,
                        multilineTagIndentPastTag: !1,
                        allowMissingTagName: !0,
                    }),
                    s = o.getMode(C, (b && b.base) || 'javascript')
                function g(c) {
                    var d = c.tagName
                    c.tagName = null
                    var S = _.indent(c, '', '')
                    return (c.tagName = d), S
                }
                function h(c, d) {
                    return d.context.mode == _ ? w(c, d, d.context) : k(c, d, d.context)
                }
                function w(c, d, S) {
                    if (S.depth == 2) return c.match(/^.*?\*\//) ? (S.depth = 1) : c.skipToEnd(), 'comment'
                    if (c.peek() == '{') {
                        _.skipAttribute(S.state)
                        var E = g(S.state),
                            z = S.state.context
                        if (z && c.match(/^[^>]*>\s*$/, !1)) {
                            for (; z.prev && !z.startOfLine; ) z = z.prev
                            z.startOfLine
                                ? (E -= C.indentUnit)
                                : S.prev.state.lexical && (E = S.prev.state.lexical.indented)
                        } else S.depth == 1 && (E += C.indentUnit)
                        return (d.context = new p(o.startState(s, E), s, 0, d.context)), null
                    }
                    if (S.depth == 1) {
                        if (c.peek() == '<')
                            return (
                                _.skipAttribute(S.state),
                                (d.context = new p(o.startState(_, g(S.state)), _, 0, d.context)),
                                null
                            )
                        if (c.match('//')) return c.skipToEnd(), 'comment'
                        if (c.match('/*')) return (S.depth = 2), h(c, d)
                    }
                    var y = _.token(c, S.state),
                        H = c.current(),
                        M
                    return (
                        /\btag\b/.test(y)
                            ? />$/.test(H)
                                ? S.state.context
                                    ? (S.depth = 0)
                                    : (d.context = d.context.prev)
                                : /^</.test(H) && (S.depth = 1)
                            : !y && (M = H.indexOf('{')) > -1 && c.backUp(H.length - M),
                        y
                    )
                }
                function k(c, d, S) {
                    if (c.peek() == '<' && s.expressionAllowed(c, S.state))
                        return (
                            (d.context = new p(o.startState(_, s.indent(S.state, '', '')), _, 0, d.context)),
                            s.skipExpression(S.state),
                            null
                        )
                    var E = s.token(c, S.state)
                    if (!E && S.depth != null) {
                        var z = c.current()
                        z == '{' ? S.depth++ : z == '}' && --S.depth == 0 && (d.context = d.context.prev)
                    }
                    return E
                }
                return {
                    startState: function () {
                        return { context: new p(o.startState(s), s) }
                    },
                    copyState: function (c) {
                        return { context: v(c.context) }
                    },
                    token: h,
                    indent: function (c, d, S) {
                        return c.context.mode.indent(c.context.state, d, S)
                    },
                    innerMode: function (c) {
                        return c.context
                    },
                }
            },
            'xml',
            'javascript',
        ),
            o.defineMIME('text/jsx', 'jsx'),
            o.defineMIME('text/typescript-jsx', { name: 'jsx', base: { name: 'javascript', typescript: !0 } })
    })
})
var pu = Ue((fu, du) => {
    ;(function (o) {
        typeof fu == 'object' && typeof du == 'object'
            ? o(Re())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        o.defineMode('nginx', function (p) {
            function v(S) {
                for (var E = {}, z = S.split(' '), y = 0; y < z.length; ++y) E[z[y]] = !0
                return E
            }
            var C = v(
                    'break return rewrite set accept_mutex accept_mutex_delay access_log add_after_body add_before_body add_header addition_types aio alias allow ancient_browser ancient_browser_value auth_basic auth_basic_user_file auth_http auth_http_header auth_http_timeout autoindex autoindex_exact_size autoindex_localtime charset charset_types client_body_buffer_size client_body_in_file_only client_body_in_single_buffer client_body_temp_path client_body_timeout client_header_buffer_size client_header_timeout client_max_body_size connection_pool_size create_full_put_path daemon dav_access dav_methods debug_connection debug_points default_type degradation degrade deny devpoll_changes devpoll_events directio directio_alignment empty_gif env epoll_events error_log eventport_events expires fastcgi_bind fastcgi_buffer_size fastcgi_buffers fastcgi_busy_buffers_size fastcgi_cache fastcgi_cache_key fastcgi_cache_methods fastcgi_cache_min_uses fastcgi_cache_path fastcgi_cache_use_stale fastcgi_cache_valid fastcgi_catch_stderr fastcgi_connect_timeout fastcgi_hide_header fastcgi_ignore_client_abort fastcgi_ignore_headers fastcgi_index fastcgi_intercept_errors fastcgi_max_temp_file_size fastcgi_next_upstream fastcgi_param fastcgi_pass_header fastcgi_pass_request_body fastcgi_pass_request_headers fastcgi_read_timeout fastcgi_send_lowat fastcgi_send_timeout fastcgi_split_path_info fastcgi_store fastcgi_store_access fastcgi_temp_file_write_size fastcgi_temp_path fastcgi_upstream_fail_timeout fastcgi_upstream_max_fails flv geoip_city geoip_country google_perftools_profiles gzip gzip_buffers gzip_comp_level gzip_disable gzip_hash gzip_http_version gzip_min_length gzip_no_buffer gzip_proxied gzip_static gzip_types gzip_vary gzip_window if_modified_since ignore_invalid_headers image_filter image_filter_buffer image_filter_jpeg_quality image_filter_transparency imap_auth imap_capabilities imap_client_buffer index ip_hash keepalive_requests keepalive_timeout kqueue_changes kqueue_events large_client_header_buffers limit_conn limit_conn_log_level limit_rate limit_rate_after limit_req limit_req_log_level limit_req_zone limit_zone lingering_time lingering_timeout lock_file log_format log_not_found log_subrequest map_hash_bucket_size map_hash_max_size master_process memcached_bind memcached_buffer_size memcached_connect_timeout memcached_next_upstream memcached_read_timeout memcached_send_timeout memcached_upstream_fail_timeout memcached_upstream_max_fails merge_slashes min_delete_depth modern_browser modern_browser_value msie_padding msie_refresh multi_accept open_file_cache open_file_cache_errors open_file_cache_events open_file_cache_min_uses open_file_cache_valid open_log_file_cache output_buffers override_charset perl perl_modules perl_require perl_set pid pop3_auth pop3_capabilities port_in_redirect postpone_gzipping postpone_output protocol proxy proxy_bind proxy_buffer proxy_buffer_size proxy_buffering proxy_buffers proxy_busy_buffers_size proxy_cache proxy_cache_key proxy_cache_methods proxy_cache_min_uses proxy_cache_path proxy_cache_use_stale proxy_cache_valid proxy_connect_timeout proxy_headers_hash_bucket_size proxy_headers_hash_max_size proxy_hide_header proxy_ignore_client_abort proxy_ignore_headers proxy_intercept_errors proxy_max_temp_file_size proxy_method proxy_next_upstream proxy_pass_error_message proxy_pass_header proxy_pass_request_body proxy_pass_request_headers proxy_read_timeout proxy_redirect proxy_send_lowat proxy_send_timeout proxy_set_body proxy_set_header proxy_ssl_session_reuse proxy_store proxy_store_access proxy_temp_file_write_size proxy_temp_path proxy_timeout proxy_upstream_fail_timeout proxy_upstream_max_fails random_index read_ahead real_ip_header recursive_error_pages request_pool_size reset_timedout_connection resolver resolver_timeout rewrite_log rtsig_overflow_events rtsig_overflow_test rtsig_overflow_threshold rtsig_signo satisfy secure_link_secret send_lowat send_timeout sendfile sendfile_max_chunk server_name_in_redirect server_names_hash_bucket_size server_names_hash_max_size server_tokens set_real_ip_from smtp_auth smtp_capabilities smtp_client_buffer smtp_greeting_delay so_keepalive source_charset ssi ssi_ignore_recycled_buffers ssi_min_file_chunk ssi_silent_errors ssi_types ssi_value_length ssl ssl_certificate ssl_certificate_key ssl_ciphers ssl_client_certificate ssl_crl ssl_dhparam ssl_engine ssl_prefer_server_ciphers ssl_protocols ssl_session_cache ssl_session_timeout ssl_verify_client ssl_verify_depth starttls stub_status sub_filter sub_filter_once sub_filter_types tcp_nodelay tcp_nopush thread_stack_size timeout timer_resolution types_hash_bucket_size types_hash_max_size underscores_in_headers uninitialized_variable_warn use user userid userid_domain userid_expires userid_mark userid_name userid_p3p userid_path userid_service valid_referers variables_hash_bucket_size variables_hash_max_size worker_connections worker_cpu_affinity worker_priority worker_processes worker_rlimit_core worker_rlimit_nofile worker_rlimit_sigpending worker_threads working_directory xclient xml_entities xslt_stylesheet xslt_typesdrew@li229-23',
                ),
                b = v('http mail events server types location upstream charset_map limit_except if geo map'),
                _ = v(
                    'include root server server_name listen internal proxy_pass memcached_pass fastcgi_pass try_files',
                ),
                s = p.indentUnit,
                g
            function h(S, E) {
                return (g = E), S
            }
            function w(S, E) {
                S.eatWhile(/[\w\$_]/)
                var z = S.current()
                if (C.propertyIsEnumerable(z)) return 'keyword'
                if (b.propertyIsEnumerable(z)) return 'variable-2'
                if (_.propertyIsEnumerable(z)) return 'string-2'
                var y = S.next()
                if (y == '@') return S.eatWhile(/[\w\\\-]/), h('meta', S.current())
                if (y == '/' && S.eat('*')) return (E.tokenize = k), k(S, E)
                if (y == '<' && S.eat('!')) return (E.tokenize = c), c(S, E)
                if (y == '=') h(null, 'compare')
                else
                    return (y == '~' || y == '|') && S.eat('=')
                        ? h(null, 'compare')
                        : y == '"' || y == "'"
                          ? ((E.tokenize = d(y)), E.tokenize(S, E))
                          : y == '#'
                            ? (S.skipToEnd(), h('comment', 'comment'))
                            : y == '!'
                              ? (S.match(/^\s*\w*/), h('keyword', 'important'))
                              : /\d/.test(y)
                                ? (S.eatWhile(/[\w.%]/), h('number', 'unit'))
                                : /[,.+>*\/]/.test(y)
                                  ? h(null, 'select-op')
                                  : /[;{}:\[\]]/.test(y)
                                    ? h(null, y)
                                    : (S.eatWhile(/[\w\\\-]/), h('variable', 'variable'))
            }
            function k(S, E) {
                for (var z = !1, y; (y = S.next()) != null; ) {
                    if (z && y == '/') {
                        E.tokenize = w
                        break
                    }
                    z = y == '*'
                }
                return h('comment', 'comment')
            }
            function c(S, E) {
                for (var z = 0, y; (y = S.next()) != null; ) {
                    if (z >= 2 && y == '>') {
                        E.tokenize = w
                        break
                    }
                    z = y == '-' ? z + 1 : 0
                }
                return h('comment', 'comment')
            }
            function d(S) {
                return function (E, z) {
                    for (var y = !1, H; (H = E.next()) != null && !(H == S && !y); ) y = !y && H == '\\'
                    return y || (z.tokenize = w), h('string', 'string')
                }
            }
            return {
                startState: function (S) {
                    return { tokenize: w, baseIndent: S || 0, stack: [] }
                },
                token: function (S, E) {
                    if (S.eatSpace()) return null
                    g = null
                    var z = E.tokenize(S, E),
                        y = E.stack[E.stack.length - 1]
                    return (
                        g == 'hash' && y == 'rule'
                            ? (z = 'atom')
                            : z == 'variable' && (y == 'rule' ? (z = 'number') : (!y || y == '@media{') && (z = 'tag')),
                        y == 'rule' && /^[\{\};]$/.test(g) && E.stack.pop(),
                        g == '{'
                            ? y == '@media'
                                ? (E.stack[E.stack.length - 1] = '@media{')
                                : E.stack.push('{')
                            : g == '}'
                              ? E.stack.pop()
                              : g == '@media'
                                ? E.stack.push('@media')
                                : y == '{' && g != 'comment' && E.stack.push('rule'),
                        z
                    )
                },
                indent: function (S, E) {
                    var z = S.stack.length
                    return /^\}/.test(E) && (z -= S.stack[S.stack.length - 1] == 'rule' ? 2 : 1), S.baseIndent + z * s
                },
                electricChars: '}',
            }
        }),
            o.defineMIME('text/x-nginx-conf', 'nginx')
    })
})
var mu = Ue((hu, gu) => {
    ;(function (o) {
        typeof hu == 'object' && typeof gu == 'object'
            ? o(Re())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        o.defineMode('pascal', function () {
            function p(w) {
                for (var k = {}, c = w.split(' '), d = 0; d < c.length; ++d) k[c[d]] = !0
                return k
            }
            var v = p(
                    'absolute and array asm begin case const constructor destructor div do downto else end file for function goto if implementation in inherited inline interface label mod nil not object of operator or packed procedure program record reintroduce repeat self set shl shr string then to type unit until uses var while with xor as class dispinterface except exports finalization finally initialization inline is library on out packed property raise resourcestring threadvar try absolute abstract alias assembler bitpacked break cdecl continue cppdecl cvar default deprecated dynamic enumerator experimental export external far far16 forward generic helper implements index interrupt iocheck local message name near nodefault noreturn nostackframe oldfpccall otherwise overload override pascal platform private protected public published read register reintroduce result safecall saveregisters softfloat specialize static stdcall stored strict unaligned unimplemented varargs virtual write',
                ),
                C = { null: !0 },
                b = /[+\-*&%=<>!?|\/]/
            function _(w, k) {
                var c = w.next()
                if (c == '#' && k.startOfLine) return w.skipToEnd(), 'meta'
                if (c == '"' || c == "'") return (k.tokenize = s(c)), k.tokenize(w, k)
                if (c == '(' && w.eat('*')) return (k.tokenize = g), g(w, k)
                if (c == '{') return (k.tokenize = h), h(w, k)
                if (/[\[\]\(\),;\:\.]/.test(c)) return null
                if (/\d/.test(c)) return w.eatWhile(/[\w\.]/), 'number'
                if (c == '/' && w.eat('/')) return w.skipToEnd(), 'comment'
                if (b.test(c)) return w.eatWhile(b), 'operator'
                w.eatWhile(/[\w\$_]/)
                var d = w.current()
                return v.propertyIsEnumerable(d) ? 'keyword' : C.propertyIsEnumerable(d) ? 'atom' : 'variable'
            }
            function s(w) {
                return function (k, c) {
                    for (var d = !1, S, E = !1; (S = k.next()) != null; ) {
                        if (S == w && !d) {
                            E = !0
                            break
                        }
                        d = !d && S == '\\'
                    }
                    return (E || !d) && (c.tokenize = null), 'string'
                }
            }
            function g(w, k) {
                for (var c = !1, d; (d = w.next()); ) {
                    if (d == ')' && c) {
                        k.tokenize = null
                        break
                    }
                    c = d == '*'
                }
                return 'comment'
            }
            function h(w, k) {
                for (var c; (c = w.next()); )
                    if (c == '}') {
                        k.tokenize = null
                        break
                    }
                return 'comment'
            }
            return {
                startState: function () {
                    return { tokenize: null }
                },
                token: function (w, k) {
                    if (w.eatSpace()) return null
                    var c = (k.tokenize || _)(w, k)
                    return c == 'comment' || c == 'meta', c
                },
                electricChars: '{}',
            }
        }),
            o.defineMIME('text/x-pascal', 'pascal')
    })
})
var yu = Ue((vu, bu) => {
    ;(function (o) {
        typeof vu == 'object' && typeof bu == 'object'
            ? o(Re())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        o.defineMode('perl', function () {
            var _ = {
                    '->': 4,
                    '++': 4,
                    '--': 4,
                    '**': 4,
                    '=~': 4,
                    '!~': 4,
                    '*': 4,
                    '/': 4,
                    '%': 4,
                    x: 4,
                    '+': 4,
                    '-': 4,
                    '.': 4,
                    '<<': 4,
                    '>>': 4,
                    '<': 4,
                    '>': 4,
                    '<=': 4,
                    '>=': 4,
                    lt: 4,
                    gt: 4,
                    le: 4,
                    ge: 4,
                    '==': 4,
                    '!=': 4,
                    '<=>': 4,
                    eq: 4,
                    ne: 4,
                    cmp: 4,
                    '~~': 4,
                    '&': 4,
                    '|': 4,
                    '^': 4,
                    '&&': 4,
                    '||': 4,
                    '//': 4,
                    '..': 4,
                    '...': 4,
                    '?': 4,
                    ':': 4,
                    '=': 4,
                    '+=': 4,
                    '-=': 4,
                    '*=': 4,
                    ',': 4,
                    '=>': 4,
                    '::': 4,
                    not: 4,
                    and: 4,
                    or: 4,
                    xor: 4,
                    BEGIN: [5, 1],
                    END: [5, 1],
                    PRINT: [5, 1],
                    PRINTF: [5, 1],
                    GETC: [5, 1],
                    READ: [5, 1],
                    READLINE: [5, 1],
                    DESTROY: [5, 1],
                    TIE: [5, 1],
                    TIEHANDLE: [5, 1],
                    UNTIE: [5, 1],
                    STDIN: 5,
                    STDIN_TOP: 5,
                    STDOUT: 5,
                    STDOUT_TOP: 5,
                    STDERR: 5,
                    STDERR_TOP: 5,
                    $ARG: 5,
                    $_: 5,
                    '@ARG': 5,
                    '@_': 5,
                    $LIST_SEPARATOR: 5,
                    '$"': 5,
                    $PROCESS_ID: 5,
                    $PID: 5,
                    $$: 5,
                    $REAL_GROUP_ID: 5,
                    $GID: 5,
                    '$(': 5,
                    $EFFECTIVE_GROUP_ID: 5,
                    $EGID: 5,
                    '$)': 5,
                    $PROGRAM_NAME: 5,
                    $0: 5,
                    $SUBSCRIPT_SEPARATOR: 5,
                    $SUBSEP: 5,
                    '$;': 5,
                    $REAL_USER_ID: 5,
                    $UID: 5,
                    '$<': 5,
                    $EFFECTIVE_USER_ID: 5,
                    $EUID: 5,
                    '$>': 5,
                    $a: 5,
                    $b: 5,
                    $COMPILING: 5,
                    '$^C': 5,
                    $DEBUGGING: 5,
                    '$^D': 5,
                    '${^ENCODING}': 5,
                    $ENV: 5,
                    '%ENV': 5,
                    $SYSTEM_FD_MAX: 5,
                    '$^F': 5,
                    '@F': 5,
                    '${^GLOBAL_PHASE}': 5,
                    '$^H': 5,
                    '%^H': 5,
                    '@INC': 5,
                    '%INC': 5,
                    $INPLACE_EDIT: 5,
                    '$^I': 5,
                    '$^M': 5,
                    $OSNAME: 5,
                    '$^O': 5,
                    '${^OPEN}': 5,
                    $PERLDB: 5,
                    '$^P': 5,
                    $SIG: 5,
                    '%SIG': 5,
                    $BASETIME: 5,
                    '$^T': 5,
                    '${^TAINT}': 5,
                    '${^UNICODE}': 5,
                    '${^UTF8CACHE}': 5,
                    '${^UTF8LOCALE}': 5,
                    $PERL_VERSION: 5,
                    '$^V': 5,
                    '${^WIN32_SLOPPY_STAT}': 5,
                    $EXECUTABLE_NAME: 5,
                    '$^X': 5,
                    $1: 5,
                    $MATCH: 5,
                    '$&': 5,
                    '${^MATCH}': 5,
                    $PREMATCH: 5,
                    '$`': 5,
                    '${^PREMATCH}': 5,
                    $POSTMATCH: 5,
                    "$'": 5,
                    '${^POSTMATCH}': 5,
                    $LAST_PAREN_MATCH: 5,
                    '$+': 5,
                    $LAST_SUBMATCH_RESULT: 5,
                    '$^N': 5,
                    '@LAST_MATCH_END': 5,
                    '@+': 5,
                    '%LAST_PAREN_MATCH': 5,
                    '%+': 5,
                    '@LAST_MATCH_START': 5,
                    '@-': 5,
                    '%LAST_MATCH_START': 5,
                    '%-': 5,
                    $LAST_REGEXP_CODE_RESULT: 5,
                    '$^R': 5,
                    '${^RE_DEBUG_FLAGS}': 5,
                    '${^RE_TRIE_MAXBUF}': 5,
                    $ARGV: 5,
                    '@ARGV': 5,
                    ARGV: 5,
                    ARGVOUT: 5,
                    $OUTPUT_FIELD_SEPARATOR: 5,
                    $OFS: 5,
                    '$,': 5,
                    $INPUT_LINE_NUMBER: 5,
                    $NR: 5,
                    '$.': 5,
                    $INPUT_RECORD_SEPARATOR: 5,
                    $RS: 5,
                    '$/': 5,
                    $OUTPUT_RECORD_SEPARATOR: 5,
                    $ORS: 5,
                    '$\\': 5,
                    $OUTPUT_AUTOFLUSH: 5,
                    '$|': 5,
                    $ACCUMULATOR: 5,
                    '$^A': 5,
                    $FORMAT_FORMFEED: 5,
                    '$^L': 5,
                    $FORMAT_PAGE_NUMBER: 5,
                    '$%': 5,
                    $FORMAT_LINES_LEFT: 5,
                    '$-': 5,
                    $FORMAT_LINE_BREAK_CHARACTERS: 5,
                    '$:': 5,
                    $FORMAT_LINES_PER_PAGE: 5,
                    '$=': 5,
                    $FORMAT_TOP_NAME: 5,
                    '$^': 5,
                    $FORMAT_NAME: 5,
                    '$~': 5,
                    '${^CHILD_ERROR_NATIVE}': 5,
                    $EXTENDED_OS_ERROR: 5,
                    '$^E': 5,
                    $EXCEPTIONS_BEING_CAUGHT: 5,
                    '$^S': 5,
                    $WARNING: 5,
                    '$^W': 5,
                    '${^WARNING_BITS}': 5,
                    $OS_ERROR: 5,
                    $ERRNO: 5,
                    '$!': 5,
                    '%OS_ERROR': 5,
                    '%ERRNO': 5,
                    '%!': 5,
                    $CHILD_ERROR: 5,
                    '$?': 5,
                    $EVAL_ERROR: 5,
                    '$@': 5,
                    $OFMT: 5,
                    '$#': 5,
                    '$*': 5,
                    $ARRAY_BASE: 5,
                    '$[': 5,
                    $OLD_PERL_VERSION: 5,
                    '$]': 5,
                    if: [1, 1],
                    elsif: [1, 1],
                    else: [1, 1],
                    while: [1, 1],
                    unless: [1, 1],
                    for: [1, 1],
                    foreach: [1, 1],
                    abs: 1,
                    accept: 1,
                    alarm: 1,
                    atan2: 1,
                    bind: 1,
                    binmode: 1,
                    bless: 1,
                    bootstrap: 1,
                    break: 1,
                    caller: 1,
                    chdir: 1,
                    chmod: 1,
                    chomp: 1,
                    chop: 1,
                    chown: 1,
                    chr: 1,
                    chroot: 1,
                    close: 1,
                    closedir: 1,
                    connect: 1,
                    continue: [1, 1],
                    cos: 1,
                    crypt: 1,
                    dbmclose: 1,
                    dbmopen: 1,
                    default: 1,
                    defined: 1,
                    delete: 1,
                    die: 1,
                    do: 1,
                    dump: 1,
                    each: 1,
                    endgrent: 1,
                    endhostent: 1,
                    endnetent: 1,
                    endprotoent: 1,
                    endpwent: 1,
                    endservent: 1,
                    eof: 1,
                    eval: 1,
                    exec: 1,
                    exists: 1,
                    exit: 1,
                    exp: 1,
                    fcntl: 1,
                    fileno: 1,
                    flock: 1,
                    fork: 1,
                    format: 1,
                    formline: 1,
                    getc: 1,
                    getgrent: 1,
                    getgrgid: 1,
                    getgrnam: 1,
                    gethostbyaddr: 1,
                    gethostbyname: 1,
                    gethostent: 1,
                    getlogin: 1,
                    getnetbyaddr: 1,
                    getnetbyname: 1,
                    getnetent: 1,
                    getpeername: 1,
                    getpgrp: 1,
                    getppid: 1,
                    getpriority: 1,
                    getprotobyname: 1,
                    getprotobynumber: 1,
                    getprotoent: 1,
                    getpwent: 1,
                    getpwnam: 1,
                    getpwuid: 1,
                    getservbyname: 1,
                    getservbyport: 1,
                    getservent: 1,
                    getsockname: 1,
                    getsockopt: 1,
                    given: 1,
                    glob: 1,
                    gmtime: 1,
                    goto: 1,
                    grep: 1,
                    hex: 1,
                    import: 1,
                    index: 1,
                    int: 1,
                    ioctl: 1,
                    join: 1,
                    keys: 1,
                    kill: 1,
                    last: 1,
                    lc: 1,
                    lcfirst: 1,
                    length: 1,
                    link: 1,
                    listen: 1,
                    local: 2,
                    localtime: 1,
                    lock: 1,
                    log: 1,
                    lstat: 1,
                    m: null,
                    map: 1,
                    mkdir: 1,
                    msgctl: 1,
                    msgget: 1,
                    msgrcv: 1,
                    msgsnd: 1,
                    my: 2,
                    new: 1,
                    next: 1,
                    no: 1,
                    oct: 1,
                    open: 1,
                    opendir: 1,
                    ord: 1,
                    our: 2,
                    pack: 1,
                    package: 1,
                    pipe: 1,
                    pop: 1,
                    pos: 1,
                    print: 1,
                    printf: 1,
                    prototype: 1,
                    push: 1,
                    q: null,
                    qq: null,
                    qr: null,
                    quotemeta: null,
                    qw: null,
                    qx: null,
                    rand: 1,
                    read: 1,
                    readdir: 1,
                    readline: 1,
                    readlink: 1,
                    readpipe: 1,
                    recv: 1,
                    redo: 1,
                    ref: 1,
                    rename: 1,
                    require: 1,
                    reset: 1,
                    return: 1,
                    reverse: 1,
                    rewinddir: 1,
                    rindex: 1,
                    rmdir: 1,
                    s: null,
                    say: 1,
                    scalar: 1,
                    seek: 1,
                    seekdir: 1,
                    select: 1,
                    semctl: 1,
                    semget: 1,
                    semop: 1,
                    send: 1,
                    setgrent: 1,
                    sethostent: 1,
                    setnetent: 1,
                    setpgrp: 1,
                    setpriority: 1,
                    setprotoent: 1,
                    setpwent: 1,
                    setservent: 1,
                    setsockopt: 1,
                    shift: 1,
                    shmctl: 1,
                    shmget: 1,
                    shmread: 1,
                    shmwrite: 1,
                    shutdown: 1,
                    sin: 1,
                    sleep: 1,
                    socket: 1,
                    socketpair: 1,
                    sort: 1,
                    splice: 1,
                    split: 1,
                    sprintf: 1,
                    sqrt: 1,
                    srand: 1,
                    stat: 1,
                    state: 1,
                    study: 1,
                    sub: 1,
                    substr: 1,
                    symlink: 1,
                    syscall: 1,
                    sysopen: 1,
                    sysread: 1,
                    sysseek: 1,
                    system: 1,
                    syswrite: 1,
                    tell: 1,
                    telldir: 1,
                    tie: 1,
                    tied: 1,
                    time: 1,
                    times: 1,
                    tr: null,
                    truncate: 1,
                    uc: 1,
                    ucfirst: 1,
                    umask: 1,
                    undef: 1,
                    unlink: 1,
                    unpack: 1,
                    unshift: 1,
                    untie: 1,
                    use: 1,
                    utime: 1,
                    values: 1,
                    vec: 1,
                    wait: 1,
                    waitpid: 1,
                    wantarray: 1,
                    warn: 1,
                    when: 1,
                    write: 1,
                    y: null,
                },
                s = 'string-2',
                g = /[goseximacplud]/
            function h(c, d, S, E, z) {
                return (
                    (d.chain = null),
                    (d.style = null),
                    (d.tail = null),
                    (d.tokenize = function (y, H) {
                        for (var M = !1, B, X = 0; (B = y.next()); ) {
                            if (B === S[X] && !M)
                                return (
                                    S[++X] !== void 0
                                        ? ((H.chain = S[X]), (H.style = E), (H.tail = z))
                                        : z && y.eatWhile(z),
                                    (H.tokenize = k),
                                    E
                                )
                            M = !M && B == '\\'
                        }
                        return E
                    }),
                    d.tokenize(c, d)
                )
            }
            function w(c, d, S) {
                return (
                    (d.tokenize = function (E, z) {
                        return E.string == S && (z.tokenize = k), E.skipToEnd(), 'string'
                    }),
                    d.tokenize(c, d)
                )
            }
            function k(c, d) {
                if (c.eatSpace()) return null
                if (d.chain) return h(c, d, d.chain, d.style, d.tail)
                if (
                    c.match(
                        /^(\-?((\d[\d_]*)?\.\d+(e[+-]?\d+)?|\d+\.\d*)|0x[\da-fA-F_]+|0b[01_]+|\d[\d_]*(e[+-]?\d+)?)/,
                    )
                )
                    return 'number'
                if (c.match(/^<<(?=[_a-zA-Z])/)) return c.eatWhile(/\w/), w(c, d, c.current().substr(2))
                if (c.sol() && c.match(/^\=item(?!\w)/)) return w(c, d, '=cut')
                var S = c.next()
                if (S == '"' || S == "'") {
                    if (v(c, 3) == '<<' + S) {
                        var E = c.pos
                        c.eatWhile(/\w/)
                        var z = c.current().substr(1)
                        if (z && c.eat(S)) return w(c, d, z)
                        c.pos = E
                    }
                    return h(c, d, [S], 'string')
                }
                if (S == 'q') {
                    var y = p(c, -2)
                    if (!(y && /\w/.test(y))) {
                        if (((y = p(c, 0)), y == 'x')) {
                            if (((y = p(c, 1)), y == '(')) return b(c, 2), h(c, d, [')'], s, g)
                            if (y == '[') return b(c, 2), h(c, d, [']'], s, g)
                            if (y == '{') return b(c, 2), h(c, d, ['}'], s, g)
                            if (y == '<') return b(c, 2), h(c, d, ['>'], s, g)
                            if (/[\^'"!~\/]/.test(y)) return b(c, 1), h(c, d, [c.eat(y)], s, g)
                        } else if (y == 'q') {
                            if (((y = p(c, 1)), y == '(')) return b(c, 2), h(c, d, [')'], 'string')
                            if (y == '[') return b(c, 2), h(c, d, [']'], 'string')
                            if (y == '{') return b(c, 2), h(c, d, ['}'], 'string')
                            if (y == '<') return b(c, 2), h(c, d, ['>'], 'string')
                            if (/[\^'"!~\/]/.test(y)) return b(c, 1), h(c, d, [c.eat(y)], 'string')
                        } else if (y == 'w') {
                            if (((y = p(c, 1)), y == '(')) return b(c, 2), h(c, d, [')'], 'bracket')
                            if (y == '[') return b(c, 2), h(c, d, [']'], 'bracket')
                            if (y == '{') return b(c, 2), h(c, d, ['}'], 'bracket')
                            if (y == '<') return b(c, 2), h(c, d, ['>'], 'bracket')
                            if (/[\^'"!~\/]/.test(y)) return b(c, 1), h(c, d, [c.eat(y)], 'bracket')
                        } else if (y == 'r') {
                            if (((y = p(c, 1)), y == '(')) return b(c, 2), h(c, d, [')'], s, g)
                            if (y == '[') return b(c, 2), h(c, d, [']'], s, g)
                            if (y == '{') return b(c, 2), h(c, d, ['}'], s, g)
                            if (y == '<') return b(c, 2), h(c, d, ['>'], s, g)
                            if (/[\^'"!~\/]/.test(y)) return b(c, 1), h(c, d, [c.eat(y)], s, g)
                        } else if (/[\^'"!~\/(\[{<]/.test(y)) {
                            if (y == '(') return b(c, 1), h(c, d, [')'], 'string')
                            if (y == '[') return b(c, 1), h(c, d, [']'], 'string')
                            if (y == '{') return b(c, 1), h(c, d, ['}'], 'string')
                            if (y == '<') return b(c, 1), h(c, d, ['>'], 'string')
                            if (/[\^'"!~\/]/.test(y)) return h(c, d, [c.eat(y)], 'string')
                        }
                    }
                }
                if (S == 'm') {
                    var y = p(c, -2)
                    if (!(y && /\w/.test(y)) && ((y = c.eat(/[(\[{<\^'"!~\/]/)), y)) {
                        if (/[\^'"!~\/]/.test(y)) return h(c, d, [y], s, g)
                        if (y == '(') return h(c, d, [')'], s, g)
                        if (y == '[') return h(c, d, [']'], s, g)
                        if (y == '{') return h(c, d, ['}'], s, g)
                        if (y == '<') return h(c, d, ['>'], s, g)
                    }
                }
                if (S == 's') {
                    var y = /[\/>\]})\w]/.test(p(c, -2))
                    if (!y && ((y = c.eat(/[(\[{<\^'"!~\/]/)), y))
                        return y == '['
                            ? h(c, d, [']', ']'], s, g)
                            : y == '{'
                              ? h(c, d, ['}', '}'], s, g)
                              : y == '<'
                                ? h(c, d, ['>', '>'], s, g)
                                : y == '('
                                  ? h(c, d, [')', ')'], s, g)
                                  : h(c, d, [y, y], s, g)
                }
                if (S == 'y') {
                    var y = /[\/>\]})\w]/.test(p(c, -2))
                    if (!y && ((y = c.eat(/[(\[{<\^'"!~\/]/)), y))
                        return y == '['
                            ? h(c, d, [']', ']'], s, g)
                            : y == '{'
                              ? h(c, d, ['}', '}'], s, g)
                              : y == '<'
                                ? h(c, d, ['>', '>'], s, g)
                                : y == '('
                                  ? h(c, d, [')', ')'], s, g)
                                  : h(c, d, [y, y], s, g)
                }
                if (S == 't') {
                    var y = /[\/>\]})\w]/.test(p(c, -2))
                    if (!y && ((y = c.eat('r')), y && ((y = c.eat(/[(\[{<\^'"!~\/]/)), y)))
                        return y == '['
                            ? h(c, d, [']', ']'], s, g)
                            : y == '{'
                              ? h(c, d, ['}', '}'], s, g)
                              : y == '<'
                                ? h(c, d, ['>', '>'], s, g)
                                : y == '('
                                  ? h(c, d, [')', ')'], s, g)
                                  : h(c, d, [y, y], s, g)
                }
                if (S == '`') return h(c, d, [S], 'variable-2')
                if (S == '/') return /~\s*$/.test(v(c)) ? h(c, d, [S], s, g) : 'operator'
                if (S == '$') {
                    var E = c.pos
                    if (c.eatWhile(/\d/) || (c.eat('{') && c.eatWhile(/\d/) && c.eat('}'))) return 'variable-2'
                    c.pos = E
                }
                if (/[$@%]/.test(S)) {
                    var E = c.pos
                    if (
                        (c.eat('^') && c.eat(/[A-Z]/)) ||
                        (!/[@$%&]/.test(p(c, -2)) && c.eat(/[=|\\\-#?@;:&`~\^!\[\]*'"$+.,\/<>()]/))
                    ) {
                        var y = c.current()
                        if (_[y]) return 'variable-2'
                    }
                    c.pos = E
                }
                if (/[$@%&]/.test(S) && (c.eatWhile(/[\w$]/) || (c.eat('{') && c.eatWhile(/[\w$]/) && c.eat('}')))) {
                    var y = c.current()
                    return _[y] ? 'variable-2' : 'variable'
                }
                if (S == '#' && p(c, -2) != '$') return c.skipToEnd(), 'comment'
                if (/[:+\-\^*$&%@=<>!?|\/~\.]/.test(S)) {
                    var E = c.pos
                    if ((c.eatWhile(/[:+\-\^*$&%@=<>!?|\/~\.]/), _[c.current()])) return 'operator'
                    c.pos = E
                }
                if (S == '_' && c.pos == 1) {
                    if (C(c, 6) == '_END__') return h(c, d, ['\0'], 'comment')
                    if (C(c, 7) == '_DATA__') return h(c, d, ['\0'], 'variable-2')
                    if (C(c, 7) == '_C__') return h(c, d, ['\0'], 'string')
                }
                if (/\w/.test(S)) {
                    var E = c.pos
                    if (p(c, -2) == '{' && (p(c, 0) == '}' || (c.eatWhile(/\w/) && p(c, 0) == '}'))) return 'string'
                    c.pos = E
                }
                if (/[A-Z]/.test(S)) {
                    var H = p(c, -2),
                        E = c.pos
                    if ((c.eatWhile(/[A-Z_]/), /[\da-z]/.test(p(c, 0)))) c.pos = E
                    else {
                        var y = _[c.current()]
                        return y
                            ? (y[1] && (y = y[0]),
                              H != ':'
                                  ? y == 1
                                      ? 'keyword'
                                      : y == 2
                                        ? 'def'
                                        : y == 3
                                          ? 'atom'
                                          : y == 4
                                            ? 'operator'
                                            : y == 5
                                              ? 'variable-2'
                                              : 'meta'
                                  : 'meta')
                            : 'meta'
                    }
                }
                if (/[a-zA-Z_]/.test(S)) {
                    var H = p(c, -2)
                    c.eatWhile(/\w/)
                    var y = _[c.current()]
                    return y
                        ? (y[1] && (y = y[0]),
                          H != ':'
                              ? y == 1
                                  ? 'keyword'
                                  : y == 2
                                    ? 'def'
                                    : y == 3
                                      ? 'atom'
                                      : y == 4
                                        ? 'operator'
                                        : y == 5
                                          ? 'variable-2'
                                          : 'meta'
                              : 'meta')
                        : 'meta'
                }
                return null
            }
            return {
                startState: function () {
                    return { tokenize: k, chain: null, style: null, tail: null }
                },
                token: function (c, d) {
                    return (d.tokenize || k)(c, d)
                },
                lineComment: '#',
            }
        }),
            o.registerHelper('wordChars', 'perl', /[\w$]/),
            o.defineMIME('text/x-perl', 'perl')
        function p(_, s) {
            return _.string.charAt(_.pos + (s || 0))
        }
        function v(_, s) {
            if (s) {
                var g = _.pos - s
                return _.string.substr(g >= 0 ? g : 0, s)
            } else return _.string.substr(0, _.pos - 1)
        }
        function C(_, s) {
            var g = _.string.length,
                h = g - _.pos + 1
            return _.string.substr(_.pos, s && s < g ? s : h)
        }
        function b(_, s) {
            var g = _.pos + s,
                h
            g <= 0 ? (_.pos = 0) : g >= (h = _.string.length - 1) ? (_.pos = h) : (_.pos = g)
        }
    })
})
var ku = Ue((xu, _u) => {
    ;(function (o) {
        typeof xu == 'object' && typeof _u == 'object'
            ? o(Re(), Gn(), Qo())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror', '../htmlmixed/htmlmixed', '../clike/clike'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        function p(w) {
            for (var k = {}, c = w.split(' '), d = 0; d < c.length; ++d) k[c[d]] = !0
            return k
        }
        function v(w, k, c) {
            return w.length == 0
                ? C(k)
                : function (d, S) {
                      for (var E = w[0], z = 0; z < E.length; z++)
                          if (d.match(E[z][0])) return (S.tokenize = v(w.slice(1), k)), E[z][1]
                      return (S.tokenize = C(k, c)), 'string'
                  }
        }
        function C(w, k) {
            return function (c, d) {
                return b(c, d, w, k)
            }
        }
        function b(w, k, c, d) {
            if ((d !== !1 && w.match('${', !1)) || w.match('{$', !1)) return (k.tokenize = null), 'string'
            if (d !== !1 && w.match(/^\$[a-zA-Z_][a-zA-Z0-9_]*/))
                return (
                    w.match('[', !1) &&
                        (k.tokenize = v(
                            [
                                [['[', null]],
                                [
                                    [/\d[\w\.]*/, 'number'],
                                    [/\$[a-zA-Z_][a-zA-Z0-9_]*/, 'variable-2'],
                                    [/[\w\$]+/, 'variable'],
                                ],
                                [[']', null]],
                            ],
                            c,
                            d,
                        )),
                    w.match(/^->\w/, !1) && (k.tokenize = v([[['->', null]], [[/[\w]+/, 'variable']]], c, d)),
                    'variable-2'
                )
            for (
                var S = !1;
                !w.eol() && (S || d === !1 || (!w.match('{$', !1) && !w.match(/^(\$[a-zA-Z_][a-zA-Z0-9_]*|\$\{)/, !1)));

            ) {
                if (!S && w.match(c)) {
                    ;(k.tokenize = null), k.tokStack.pop(), k.tokStack.pop()
                    break
                }
                S = w.next() == '\\' && !S
            }
            return 'string'
        }
        var _ =
                'abstract and array as break case catch class clone const continue declare default do else elseif enddeclare endfor endforeach endif endswitch endwhile enum extends final for foreach function global goto if implements interface instanceof namespace new or private protected public static switch throw trait try use var while xor die echo empty exit eval include include_once isset list require require_once return print unset __halt_compiler self static parent yield insteadof finally readonly match',
            s =
                'true false null TRUE FALSE NULL __CLASS__ __DIR__ __FILE__ __LINE__ __METHOD__ __FUNCTION__ __NAMESPACE__ __TRAIT__',
            g =
                'func_num_args func_get_arg func_get_args strlen strcmp strncmp strcasecmp strncasecmp each error_reporting define defined trigger_error user_error set_error_handler restore_error_handler get_declared_classes get_loaded_extensions extension_loaded get_extension_funcs debug_backtrace constant bin2hex hex2bin sleep usleep time mktime gmmktime strftime gmstrftime strtotime date gmdate getdate localtime checkdate flush wordwrap htmlspecialchars htmlentities html_entity_decode md5 md5_file crc32 getimagesize image_type_to_mime_type phpinfo phpversion phpcredits strnatcmp strnatcasecmp substr_count strspn strcspn strtok strtoupper strtolower strpos strrpos strrev hebrev hebrevc nl2br basename dirname pathinfo stripslashes stripcslashes strstr stristr strrchr str_shuffle str_word_count strcoll substr substr_replace quotemeta ucfirst ucwords strtr addslashes addcslashes rtrim str_replace str_repeat count_chars chunk_split trim ltrim strip_tags similar_text explode implode setlocale localeconv parse_str str_pad chop strchr sprintf printf vprintf vsprintf sscanf fscanf parse_url urlencode urldecode rawurlencode rawurldecode readlink linkinfo link unlink exec system escapeshellcmd escapeshellarg passthru shell_exec proc_open proc_close rand srand getrandmax mt_rand mt_srand mt_getrandmax base64_decode base64_encode abs ceil floor round is_finite is_nan is_infinite bindec hexdec octdec decbin decoct dechex base_convert number_format fmod ip2long long2ip getenv putenv getopt microtime gettimeofday getrusage uniqid quoted_printable_decode set_time_limit get_cfg_var magic_quotes_runtime set_magic_quotes_runtime get_magic_quotes_gpc get_magic_quotes_runtime import_request_variables error_log serialize unserialize memory_get_usage memory_get_peak_usage var_dump var_export debug_zval_dump print_r highlight_file show_source highlight_string ini_get ini_get_all ini_set ini_alter ini_restore get_include_path set_include_path restore_include_path setcookie header headers_sent connection_aborted connection_status ignore_user_abort parse_ini_file is_uploaded_file move_uploaded_file intval floatval doubleval strval gettype settype is_null is_resource is_bool is_long is_float is_int is_integer is_double is_real is_numeric is_string is_array is_object is_scalar ereg ereg_replace eregi eregi_replace split spliti join sql_regcase dl pclose popen readfile rewind rmdir umask fclose feof fgetc fgets fgetss fread fopen fpassthru ftruncate fstat fseek ftell fflush fwrite fputs mkdir rename copy tempnam tmpfile file file_get_contents file_put_contents stream_select stream_context_create stream_context_set_params stream_context_set_option stream_context_get_options stream_filter_prepend stream_filter_append fgetcsv flock get_meta_tags stream_set_write_buffer set_file_buffer set_socket_blocking stream_set_blocking socket_set_blocking stream_get_meta_data stream_register_wrapper stream_wrapper_register stream_set_timeout socket_set_timeout socket_get_status realpath fnmatch fsockopen pfsockopen pack unpack get_browser crypt opendir closedir chdir getcwd rewinddir readdir dir glob fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype file_exists is_writable is_writeable is_readable is_executable is_file is_dir is_link stat lstat chown touch clearstatcache mail ob_start ob_flush ob_clean ob_end_flush ob_end_clean ob_get_flush ob_get_clean ob_get_length ob_get_level ob_get_status ob_get_contents ob_implicit_flush ob_list_handlers ksort krsort natsort natcasesort asort arsort sort rsort usort uasort uksort shuffle array_walk count end prev next reset current key min max in_array array_search extract compact array_fill range array_multisort array_push array_pop array_shift array_unshift array_splice array_slice array_merge array_merge_recursive array_keys array_values array_count_values array_reverse array_reduce array_pad array_flip array_change_key_case array_rand array_unique array_intersect array_intersect_assoc array_diff array_diff_assoc array_sum array_filter array_map array_chunk array_key_exists array_intersect_key array_combine array_column pos sizeof key_exists assert assert_options version_compare ftok str_rot13 aggregate session_name session_module_name session_save_path session_id session_regenerate_id session_decode session_register session_unregister session_is_registered session_encode session_start session_destroy session_unset session_set_save_handler session_cache_limiter session_cache_expire session_set_cookie_params session_get_cookie_params session_write_close preg_match preg_match_all preg_replace preg_replace_callback preg_split preg_quote preg_grep overload ctype_alnum ctype_alpha ctype_cntrl ctype_digit ctype_lower ctype_graph ctype_print ctype_punct ctype_space ctype_upper ctype_xdigit virtual apache_request_headers apache_note apache_lookup_uri apache_child_terminate apache_setenv apache_response_headers apache_get_version getallheaders mysql_connect mysql_pconnect mysql_close mysql_select_db mysql_create_db mysql_drop_db mysql_query mysql_unbuffered_query mysql_db_query mysql_list_dbs mysql_list_tables mysql_list_fields mysql_list_processes mysql_error mysql_errno mysql_affected_rows mysql_insert_id mysql_result mysql_num_rows mysql_num_fields mysql_fetch_row mysql_fetch_array mysql_fetch_assoc mysql_fetch_object mysql_data_seek mysql_fetch_lengths mysql_fetch_field mysql_field_seek mysql_free_result mysql_field_name mysql_field_table mysql_field_len mysql_field_type mysql_field_flags mysql_escape_string mysql_real_escape_string mysql_stat mysql_thread_id mysql_client_encoding mysql_get_client_info mysql_get_host_info mysql_get_proto_info mysql_get_server_info mysql_info mysql mysql_fieldname mysql_fieldtable mysql_fieldlen mysql_fieldtype mysql_fieldflags mysql_selectdb mysql_createdb mysql_dropdb mysql_freeresult mysql_numfields mysql_numrows mysql_listdbs mysql_listtables mysql_listfields mysql_db_name mysql_dbname mysql_tablename mysql_table_name pg_connect pg_pconnect pg_close pg_connection_status pg_connection_busy pg_connection_reset pg_host pg_dbname pg_port pg_tty pg_options pg_ping pg_query pg_send_query pg_cancel_query pg_fetch_result pg_fetch_row pg_fetch_assoc pg_fetch_array pg_fetch_object pg_fetch_all pg_affected_rows pg_get_result pg_result_seek pg_result_status pg_free_result pg_last_oid pg_num_rows pg_num_fields pg_field_name pg_field_num pg_field_size pg_field_type pg_field_prtlen pg_field_is_null pg_get_notify pg_get_pid pg_result_error pg_last_error pg_last_notice pg_put_line pg_end_copy pg_copy_to pg_copy_from pg_trace pg_untrace pg_lo_create pg_lo_unlink pg_lo_open pg_lo_close pg_lo_read pg_lo_write pg_lo_read_all pg_lo_import pg_lo_export pg_lo_seek pg_lo_tell pg_escape_string pg_escape_bytea pg_unescape_bytea pg_client_encoding pg_set_client_encoding pg_meta_data pg_convert pg_insert pg_update pg_delete pg_select pg_exec pg_getlastoid pg_cmdtuples pg_errormessage pg_numrows pg_numfields pg_fieldname pg_fieldsize pg_fieldtype pg_fieldnum pg_fieldprtlen pg_fieldisnull pg_freeresult pg_result pg_loreadall pg_locreate pg_lounlink pg_loopen pg_loclose pg_loread pg_lowrite pg_loimport pg_loexport http_response_code get_declared_traits getimagesizefromstring socket_import_stream stream_set_chunk_size trait_exists header_register_callback class_uses session_status session_register_shutdown echo print global static exit array empty eval isset unset die include require include_once require_once json_decode json_encode json_last_error json_last_error_msg curl_close curl_copy_handle curl_errno curl_error curl_escape curl_exec curl_file_create curl_getinfo curl_init curl_multi_add_handle curl_multi_close curl_multi_exec curl_multi_getcontent curl_multi_info_read curl_multi_init curl_multi_remove_handle curl_multi_select curl_multi_setopt curl_multi_strerror curl_pause curl_reset curl_setopt_array curl_setopt curl_share_close curl_share_init curl_share_setopt curl_strerror curl_unescape curl_version mysqli_affected_rows mysqli_autocommit mysqli_change_user mysqli_character_set_name mysqli_close mysqli_commit mysqli_connect_errno mysqli_connect_error mysqli_connect mysqli_data_seek mysqli_debug mysqli_dump_debug_info mysqli_errno mysqli_error_list mysqli_error mysqli_fetch_all mysqli_fetch_array mysqli_fetch_assoc mysqli_fetch_field_direct mysqli_fetch_field mysqli_fetch_fields mysqli_fetch_lengths mysqli_fetch_object mysqli_fetch_row mysqli_field_count mysqli_field_seek mysqli_field_tell mysqli_free_result mysqli_get_charset mysqli_get_client_info mysqli_get_client_stats mysqli_get_client_version mysqli_get_connection_stats mysqli_get_host_info mysqli_get_proto_info mysqli_get_server_info mysqli_get_server_version mysqli_info mysqli_init mysqli_insert_id mysqli_kill mysqli_more_results mysqli_multi_query mysqli_next_result mysqli_num_fields mysqli_num_rows mysqli_options mysqli_ping mysqli_prepare mysqli_query mysqli_real_connect mysqli_real_escape_string mysqli_real_query mysqli_reap_async_query mysqli_refresh mysqli_rollback mysqli_select_db mysqli_set_charset mysqli_set_local_infile_default mysqli_set_local_infile_handler mysqli_sqlstate mysqli_ssl_set mysqli_stat mysqli_stmt_init mysqli_store_result mysqli_thread_id mysqli_thread_safe mysqli_use_result mysqli_warning_count'
        o.registerHelper('hintWords', 'php', [_, s, g].join(' ').split(' ')),
            o.registerHelper('wordChars', 'php', /[\w$]/)
        var h = {
            name: 'clike',
            helperType: 'php',
            keywords: p(_),
            blockKeywords: p('catch do else elseif for foreach if switch try while finally'),
            defKeywords: p('class enum function interface namespace trait'),
            atoms: p(s),
            builtin: p(g),
            multiLineStrings: !0,
            hooks: {
                $: function (w) {
                    return w.eatWhile(/[\w\$_]/), 'variable-2'
                },
                '<': function (w, k) {
                    var c
                    if ((c = w.match(/^<<\s*/))) {
                        var d = w.eat(/['"]/)
                        w.eatWhile(/[\w\.]/)
                        var S = w.current().slice(c[0].length + (d ? 2 : 1))
                        if ((d && w.eat(d), S))
                            return (k.tokStack || (k.tokStack = [])).push(S, 0), (k.tokenize = C(S, d != "'")), 'string'
                    }
                    return !1
                },
                '#': function (w) {
                    for (; !w.eol() && !w.match('?>', !1); ) w.next()
                    return 'comment'
                },
                '/': function (w) {
                    if (w.eat('/')) {
                        for (; !w.eol() && !w.match('?>', !1); ) w.next()
                        return 'comment'
                    }
                    return !1
                },
                '"': function (w, k) {
                    return (k.tokStack || (k.tokStack = [])).push('"', 0), (k.tokenize = C('"')), 'string'
                },
                '{': function (w, k) {
                    return k.tokStack && k.tokStack.length && k.tokStack[k.tokStack.length - 1]++, !1
                },
                '}': function (w, k) {
                    return (
                        k.tokStack &&
                            k.tokStack.length > 0 &&
                            !--k.tokStack[k.tokStack.length - 1] &&
                            (k.tokenize = C(k.tokStack[k.tokStack.length - 2])),
                        !1
                    )
                },
            },
        }
        o.defineMode(
            'php',
            function (w, k) {
                var c = o.getMode(w, (k && k.htmlMode) || 'text/html'),
                    d = o.getMode(w, h)
                function S(E, z) {
                    var y = z.curMode == d
                    if ((E.sol() && z.pending && z.pending != '"' && z.pending != "'" && (z.pending = null), y))
                        return y && z.php.tokenize == null && E.match('?>')
                            ? ((z.curMode = c), (z.curState = z.html), z.php.context.prev || (z.php = null), 'meta')
                            : d.token(E, z.curState)
                    if (E.match(/^<\?\w*/))
                        return (
                            (z.curMode = d),
                            z.php || (z.php = o.startState(d, c.indent(z.html, '', ''))),
                            (z.curState = z.php),
                            'meta'
                        )
                    if (z.pending == '"' || z.pending == "'") {
                        for (; !E.eol() && E.next() != z.pending; );
                        var H = 'string'
                    } else if (z.pending && E.pos < z.pending.end) {
                        E.pos = z.pending.end
                        var H = z.pending.style
                    } else var H = c.token(E, z.curState)
                    z.pending && (z.pending = null)
                    var M = E.current(),
                        B = M.search(/<\?/),
                        X
                    return (
                        B != -1 &&
                            (H == 'string' && (X = M.match(/[\'\"]$/)) && !/\?>/.test(M)
                                ? (z.pending = X[0])
                                : (z.pending = { end: E.pos, style: H }),
                            E.backUp(M.length - B)),
                        H
                    )
                }
                return {
                    startState: function () {
                        var E = o.startState(c),
                            z = k.startOpen ? o.startState(d) : null
                        return {
                            html: E,
                            php: z,
                            curMode: k.startOpen ? d : c,
                            curState: k.startOpen ? z : E,
                            pending: null,
                        }
                    },
                    copyState: function (E) {
                        var z = E.html,
                            y = o.copyState(c, z),
                            H = E.php,
                            M = H && o.copyState(d, H),
                            B
                        return (
                            E.curMode == c ? (B = y) : (B = M),
                            { html: y, php: M, curMode: E.curMode, curState: B, pending: E.pending }
                        )
                    },
                    token: S,
                    indent: function (E, z, y) {
                        return (E.curMode != d && /^\s*<\//.test(z)) || (E.curMode == d && /^\?>/.test(z))
                            ? c.indent(E.html, z, y)
                            : E.curMode.indent(E.curState, z, y)
                    },
                    blockCommentStart: '/*',
                    blockCommentEnd: '*/',
                    lineComment: '//',
                    innerMode: function (E) {
                        return { state: E.curState, mode: E.curMode }
                    },
                }
            },
            'htmlmixed',
            'clike',
        ),
            o.defineMIME('application/x-httpd-php', 'php'),
            o.defineMIME('application/x-httpd-php-open', { name: 'php', startOpen: !0 }),
            o.defineMIME('text/x-php', h)
    })
})
var Tu = Ue((wu, Su) => {
    ;(function (o) {
        typeof wu == 'object' && typeof Su == 'object'
            ? o(Re())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        function p(s) {
            return new RegExp('^((' + s.join(')|(') + '))\\b', 'i')
        }
        var v = [
                'package',
                'message',
                'import',
                'syntax',
                'required',
                'optional',
                'repeated',
                'reserved',
                'default',
                'extensions',
                'packed',
                'bool',
                'bytes',
                'double',
                'enum',
                'float',
                'string',
                'int32',
                'int64',
                'uint32',
                'uint64',
                'sint32',
                'sint64',
                'fixed32',
                'fixed64',
                'sfixed32',
                'sfixed64',
                'option',
                'service',
                'rpc',
                'returns',
            ],
            C = p(v)
        o.registerHelper('hintWords', 'protobuf', v)
        var b = new RegExp('^[_A-Za-z\xA1-\uFFFF][_A-Za-z0-9\xA1-\uFFFF]*')
        function _(s) {
            return s.eatSpace()
                ? null
                : s.match('//')
                  ? (s.skipToEnd(), 'comment')
                  : s.match(/^[0-9\.+-]/, !1) &&
                      (s.match(/^[+-]?0x[0-9a-fA-F]+/) ||
                          s.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?/) ||
                          s.match(/^[+-]?\d+([EeDd][+-]?\d+)?/))
                    ? 'number'
                    : s.match(/^"([^"]|(""))*"/) || s.match(/^'([^']|(''))*'/)
                      ? 'string'
                      : s.match(C)
                        ? 'keyword'
                        : s.match(b)
                          ? 'variable'
                          : (s.next(), null)
        }
        o.defineMode('protobuf', function () {
            return { token: _, fold: 'brace' }
        }),
            o.defineMIME('text/x-protobuf', 'protobuf')
    })
})
var Eu = Ue((Lu, Cu) => {
    ;(function (o) {
        typeof Lu == 'object' && typeof Cu == 'object'
            ? o(Re())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        function p(g) {
            return new RegExp('^((' + g.join(')|(') + '))\\b')
        }
        var v = p(['and', 'or', 'not', 'is']),
            C = [
                'as',
                'assert',
                'break',
                'class',
                'continue',
                'def',
                'del',
                'elif',
                'else',
                'except',
                'finally',
                'for',
                'from',
                'global',
                'if',
                'import',
                'lambda',
                'pass',
                'raise',
                'return',
                'try',
                'while',
                'with',
                'yield',
                'in',
                'False',
                'True',
            ],
            b = [
                'abs',
                'all',
                'any',
                'bin',
                'bool',
                'bytearray',
                'callable',
                'chr',
                'classmethod',
                'compile',
                'complex',
                'delattr',
                'dict',
                'dir',
                'divmod',
                'enumerate',
                'eval',
                'filter',
                'float',
                'format',
                'frozenset',
                'getattr',
                'globals',
                'hasattr',
                'hash',
                'help',
                'hex',
                'id',
                'input',
                'int',
                'isinstance',
                'issubclass',
                'iter',
                'len',
                'list',
                'locals',
                'map',
                'max',
                'memoryview',
                'min',
                'next',
                'object',
                'oct',
                'open',
                'ord',
                'pow',
                'property',
                'range',
                'repr',
                'reversed',
                'round',
                'set',
                'setattr',
                'slice',
                'sorted',
                'staticmethod',
                'str',
                'sum',
                'super',
                'tuple',
                'type',
                'vars',
                'zip',
                '__import__',
                'NotImplemented',
                'Ellipsis',
                '__debug__',
            ]
        o.registerHelper('hintWords', 'python', C.concat(b).concat(['exec', 'print']))
        function _(g) {
            return g.scopes[g.scopes.length - 1]
        }
        o.defineMode('python', function (g, h) {
            for (
                var w = 'error',
                    k = h.delimiters || h.singleDelimiters || /^[\(\)\[\]\{\}@,:`=;\.\\]/,
                    c = [
                        h.singleOperators,
                        h.doubleOperators,
                        h.doubleDelimiters,
                        h.tripleDelimiters,
                        h.operators || /^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/,
                    ],
                    d = 0;
                d < c.length;
                d++
            )
                c[d] || c.splice(d--, 1)
            var S = h.hangingIndent || g.indentUnit,
                E = C,
                z = b
            h.extra_keywords != null && (E = E.concat(h.extra_keywords)),
                h.extra_builtins != null && (z = z.concat(h.extra_builtins))
            var y = !(h.version && Number(h.version) < 3)
            if (y) {
                var H = h.identifiers || /^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/
                ;(E = E.concat([
                    'nonlocal',
                    'None',
                    'aiter',
                    'anext',
                    'async',
                    'await',
                    'breakpoint',
                    'match',
                    'case',
                ])),
                    (z = z.concat(['ascii', 'bytes', 'exec', 'print']))
                var M = new RegExp(`^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|"{3}|['"]))`, 'i')
            } else {
                var H = h.identifiers || /^[_A-Za-z][_A-Za-z0-9]*/
                ;(E = E.concat(['exec', 'print'])),
                    (z = z.concat([
                        'apply',
                        'basestring',
                        'buffer',
                        'cmp',
                        'coerce',
                        'execfile',
                        'file',
                        'intern',
                        'long',
                        'raw_input',
                        'reduce',
                        'reload',
                        'unichr',
                        'unicode',
                        'xrange',
                        'None',
                    ]))
                var M = new RegExp(`^(([rubf]|(ur)|(br))?('{3}|"{3}|['"]))`, 'i')
            }
            var B = p(E),
                X = p(z)
            function re(K, Y) {
                var I = K.sol() && Y.lastToken != '\\'
                if ((I && (Y.indent = K.indentation()), I && _(Y).type == 'py')) {
                    var W = _(Y).offset
                    if (K.eatSpace()) {
                        var le = K.indentation()
                        return le > W ? D(Y) : le < W && j(K, Y) && K.peek() != '#' && (Y.errorToken = !0), null
                    } else {
                        var ye = ne(K, Y)
                        return W > 0 && j(K, Y) && (ye += ' ' + w), ye
                    }
                }
                return ne(K, Y)
            }
            function ne(K, Y, I) {
                if (K.eatSpace()) return null
                if (!I && K.match(/^#.*/)) return 'comment'
                if (K.match(/^[0-9\.]/, !1)) {
                    var W = !1
                    if (
                        (K.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i) && (W = !0),
                        K.match(/^[\d_]+\.\d*/) && (W = !0),
                        K.match(/^\.\d+/) && (W = !0),
                        W)
                    )
                        return K.eat(/J/i), 'number'
                    var le = !1
                    if (
                        (K.match(/^0x[0-9a-f_]+/i) && (le = !0),
                        K.match(/^0b[01_]+/i) && (le = !0),
                        K.match(/^0o[0-7_]+/i) && (le = !0),
                        K.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/) && (K.eat(/J/i), (le = !0)),
                        K.match(/^0(?![\dx])/i) && (le = !0),
                        le)
                    )
                        return K.eat(/L/i), 'number'
                }
                if (K.match(M)) {
                    var ye = K.current().toLowerCase().indexOf('f') !== -1
                    return ye
                        ? ((Y.tokenize = N(K.current(), Y.tokenize)), Y.tokenize(K, Y))
                        : ((Y.tokenize = F(K.current(), Y.tokenize)), Y.tokenize(K, Y))
                }
                for (var q = 0; q < c.length; q++) if (K.match(c[q])) return 'operator'
                return K.match(k)
                    ? 'punctuation'
                    : Y.lastToken == '.' && K.match(H)
                      ? 'property'
                      : K.match(B) || K.match(v)
                        ? 'keyword'
                        : K.match(X)
                          ? 'builtin'
                          : K.match(/^(self|cls)\b/)
                            ? 'variable-2'
                            : K.match(H)
                              ? Y.lastToken == 'def' || Y.lastToken == 'class'
                                  ? 'def'
                                  : 'variable'
                              : (K.next(), I ? null : w)
            }
            function N(K, Y) {
                for (; 'rubf'.indexOf(K.charAt(0).toLowerCase()) >= 0; ) K = K.substr(1)
                var I = K.length == 1,
                    W = 'string'
                function le(q) {
                    return function (T, de) {
                        var Ee = ne(T, de, !0)
                        return (
                            Ee == 'punctuation' &&
                                (T.current() == '{'
                                    ? (de.tokenize = le(q + 1))
                                    : T.current() == '}' && (q > 1 ? (de.tokenize = le(q - 1)) : (de.tokenize = ye))),
                            Ee
                        )
                    }
                }
                function ye(q, T) {
                    for (; !q.eol(); )
                        if ((q.eatWhile(/[^'"\{\}\\]/), q.eat('\\'))) {
                            if ((q.next(), I && q.eol())) return W
                        } else {
                            if (q.match(K)) return (T.tokenize = Y), W
                            if (q.match('{{')) return W
                            if (q.match('{', !1)) return (T.tokenize = le(0)), q.current() ? W : T.tokenize(q, T)
                            if (q.match('}}')) return W
                            if (q.match('}')) return w
                            q.eat(/['"]/)
                        }
                    if (I) {
                        if (h.singleLineStringErrors) return w
                        T.tokenize = Y
                    }
                    return W
                }
                return (ye.isString = !0), ye
            }
            function F(K, Y) {
                for (; 'rubf'.indexOf(K.charAt(0).toLowerCase()) >= 0; ) K = K.substr(1)
                var I = K.length == 1,
                    W = 'string'
                function le(ye, q) {
                    for (; !ye.eol(); )
                        if ((ye.eatWhile(/[^'"\\]/), ye.eat('\\'))) {
                            if ((ye.next(), I && ye.eol())) return W
                        } else {
                            if (ye.match(K)) return (q.tokenize = Y), W
                            ye.eat(/['"]/)
                        }
                    if (I) {
                        if (h.singleLineStringErrors) return w
                        q.tokenize = Y
                    }
                    return W
                }
                return (le.isString = !0), le
            }
            function D(K) {
                for (; _(K).type != 'py'; ) K.scopes.pop()
                K.scopes.push({ offset: _(K).offset + g.indentUnit, type: 'py', align: null })
            }
            function V(K, Y, I) {
                var W = K.match(/^[\s\[\{\(]*(?:#|$)/, !1) ? null : K.column() + 1
                Y.scopes.push({ offset: Y.indent + S, type: I, align: W })
            }
            function j(K, Y) {
                for (var I = K.indentation(); Y.scopes.length > 1 && _(Y).offset > I; ) {
                    if (_(Y).type != 'py') return !0
                    Y.scopes.pop()
                }
                return _(Y).offset != I
            }
            function J(K, Y) {
                K.sol() && ((Y.beginningOfLine = !0), (Y.dedent = !1))
                var I = Y.tokenize(K, Y),
                    W = K.current()
                if (Y.beginningOfLine && W == '@') return K.match(H, !1) ? 'meta' : y ? 'operator' : w
                if (
                    (/\S/.test(W) && (Y.beginningOfLine = !1),
                    (I == 'variable' || I == 'builtin') && Y.lastToken == 'meta' && (I = 'meta'),
                    (W == 'pass' || W == 'return') && (Y.dedent = !0),
                    W == 'lambda' && (Y.lambda = !0),
                    W == ':' && !Y.lambda && _(Y).type == 'py' && K.match(/^\s*(?:#|$)/, !1) && D(Y),
                    W.length == 1 && !/string|comment/.test(I))
                ) {
                    var le = '[({'.indexOf(W)
                    if ((le != -1 && V(K, Y, '])}'.slice(le, le + 1)), (le = '])}'.indexOf(W)), le != -1))
                        if (_(Y).type == W) Y.indent = Y.scopes.pop().offset - S
                        else return w
                }
                return Y.dedent && K.eol() && _(Y).type == 'py' && Y.scopes.length > 1 && Y.scopes.pop(), I
            }
            var x = {
                startState: function (K) {
                    return {
                        tokenize: re,
                        scopes: [{ offset: K || 0, type: 'py', align: null }],
                        indent: K || 0,
                        lastToken: null,
                        lambda: !1,
                        dedent: 0,
                    }
                },
                token: function (K, Y) {
                    var I = Y.errorToken
                    I && (Y.errorToken = !1)
                    var W = J(K, Y)
                    return (
                        W && W != 'comment' && (Y.lastToken = W == 'keyword' || W == 'punctuation' ? K.current() : W),
                        W == 'punctuation' && (W = null),
                        K.eol() && Y.lambda && (Y.lambda = !1),
                        I ? W + ' ' + w : W
                    )
                },
                indent: function (K, Y) {
                    if (K.tokenize != re) return K.tokenize.isString ? o.Pass : 0
                    var I = _(K),
                        W =
                            I.type == Y.charAt(0) ||
                            (I.type == 'py' && !K.dedent && /^(else:|elif |except |finally:)/.test(Y))
                    return I.align != null ? I.align - (W ? 1 : 0) : I.offset - (W ? S : 0)
                },
                electricInput: /^\s*([\}\]\)]|else:|elif |except |finally:)$/,
                closeBrackets: { triples: `'"` },
                lineComment: '#',
                fold: 'indent',
            }
            return x
        }),
            o.defineMIME('text/x-python', 'python')
        var s = function (g) {
            return g.split(' ')
        }
        o.defineMIME('text/x-cython', {
            name: 'python',
            extra_keywords: s(
                'by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE',
            ),
        })
    })
})
var Au = Ue((zu, Mu) => {
    ;(function (o) {
        typeof zu == 'object' && typeof Mu == 'object'
            ? o(Re())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        function p(h) {
            for (var w = {}, k = 0, c = h.length; k < c; ++k) w[h[k]] = !0
            return w
        }
        var v = [
                'alias',
                'and',
                'BEGIN',
                'begin',
                'break',
                'case',
                'class',
                'def',
                'defined?',
                'do',
                'else',
                'elsif',
                'END',
                'end',
                'ensure',
                'false',
                'for',
                'if',
                'in',
                'module',
                'next',
                'not',
                'or',
                'redo',
                'rescue',
                'retry',
                'return',
                'self',
                'super',
                'then',
                'true',
                'undef',
                'unless',
                'until',
                'when',
                'while',
                'yield',
                'nil',
                'raise',
                'throw',
                'catch',
                'fail',
                'loop',
                'callcc',
                'caller',
                'lambda',
                'proc',
                'public',
                'protected',
                'private',
                'require',
                'load',
                'require_relative',
                'extend',
                'autoload',
                '__END__',
                '__FILE__',
                '__LINE__',
                '__dir__',
            ],
            C = p(v),
            b = p(['def', 'class', 'case', 'for', 'while', 'until', 'module', 'catch', 'loop', 'proc', 'begin']),
            _ = p(['end', 'until']),
            s = { '[': ']', '{': '}', '(': ')' },
            g = { ']': '[', '}': '{', ')': '(' }
        o.defineMode('ruby', function (h) {
            var w
            function k(M, B, X) {
                return X.tokenize.push(M), M(B, X)
            }
            function c(M, B) {
                if (M.sol() && M.match('=begin') && M.eol()) return B.tokenize.push(H), 'comment'
                if (M.eatSpace()) return null
                var X = M.next(),
                    re
                if (X == '`' || X == "'" || X == '"') return k(z(X, 'string', X == '"' || X == '`'), M, B)
                if (X == '/') return d(M) ? k(z(X, 'string-2', !0), M, B) : 'operator'
                if (X == '%') {
                    var ne = 'string',
                        N = !0
                    M.eat('s')
                        ? (ne = 'atom')
                        : M.eat(/[WQ]/)
                          ? (ne = 'string')
                          : M.eat(/[r]/)
                            ? (ne = 'string-2')
                            : M.eat(/[wxq]/) && ((ne = 'string'), (N = !1))
                    var F = M.eat(/[^\w\s=]/)
                    return F ? (s.propertyIsEnumerable(F) && (F = s[F]), k(z(F, ne, N, !0), M, B)) : 'operator'
                } else {
                    if (X == '#') return M.skipToEnd(), 'comment'
                    if (X == '<' && (re = M.match(/^<([-~])[\`\"\']?([a-zA-Z_?]\w*)[\`\"\']?(?:;|$)/)))
                        return k(y(re[2], re[1]), M, B)
                    if (X == '0')
                        return (
                            M.eat('x')
                                ? M.eatWhile(/[\da-fA-F]/)
                                : M.eat('b')
                                  ? M.eatWhile(/[01]/)
                                  : M.eatWhile(/[0-7]/),
                            'number'
                        )
                    if (/\d/.test(X)) return M.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+\-]?[\d_]+)?/), 'number'
                    if (X == '?') {
                        for (; M.match(/^\\[CM]-/); );
                        return M.eat('\\') ? M.eatWhile(/\w/) : M.next(), 'string'
                    } else {
                        if (X == ':')
                            return M.eat("'")
                                ? k(z("'", 'atom', !1), M, B)
                                : M.eat('"')
                                  ? k(z('"', 'atom', !0), M, B)
                                  : M.eat(/[\<\>]/)
                                    ? (M.eat(/[\<\>]/), 'atom')
                                    : M.eat(/[\+\-\*\/\&\|\:\!]/)
                                      ? 'atom'
                                      : M.eat(/[a-zA-Z$@_\xa1-\uffff]/)
                                        ? (M.eatWhile(/[\w$\xa1-\uffff]/), M.eat(/[\?\!\=]/), 'atom')
                                        : 'operator'
                        if (X == '@' && M.match(/^@?[a-zA-Z_\xa1-\uffff]/))
                            return M.eat('@'), M.eatWhile(/[\w\xa1-\uffff]/), 'variable-2'
                        if (X == '$')
                            return (
                                M.eat(/[a-zA-Z_]/) ? M.eatWhile(/[\w]/) : M.eat(/\d/) ? M.eat(/\d/) : M.next(),
                                'variable-3'
                            )
                        if (/[a-zA-Z_\xa1-\uffff]/.test(X))
                            return M.eatWhile(/[\w\xa1-\uffff]/), M.eat(/[\?\!]/), M.eat(':') ? 'atom' : 'ident'
                        if (X == '|' && (B.varList || B.lastTok == '{' || B.lastTok == 'do')) return (w = '|'), null
                        if (/[\(\)\[\]{}\\;]/.test(X)) return (w = X), null
                        if (X == '-' && M.eat('>')) return 'arrow'
                        if (/[=+\-\/*:\.^%<>~|]/.test(X)) {
                            var D = M.eatWhile(/[=+\-\/*:\.^%<>~|]/)
                            return X == '.' && !D && (w = '.'), 'operator'
                        } else return null
                    }
                }
            }
            function d(M) {
                for (var B = M.pos, X = 0, re, ne = !1, N = !1; (re = M.next()) != null; )
                    if (N) N = !1
                    else {
                        if ('[{('.indexOf(re) > -1) X++
                        else if (']})'.indexOf(re) > -1) {
                            if ((X--, X < 0)) break
                        } else if (re == '/' && X == 0) {
                            ne = !0
                            break
                        }
                        N = re == '\\'
                    }
                return M.backUp(M.pos - B), ne
            }
            function S(M) {
                return (
                    M || (M = 1),
                    function (B, X) {
                        if (B.peek() == '}') {
                            if (M == 1) return X.tokenize.pop(), X.tokenize[X.tokenize.length - 1](B, X)
                            X.tokenize[X.tokenize.length - 1] = S(M - 1)
                        } else B.peek() == '{' && (X.tokenize[X.tokenize.length - 1] = S(M + 1))
                        return c(B, X)
                    }
                )
            }
            function E() {
                var M = !1
                return function (B, X) {
                    return M ? (X.tokenize.pop(), X.tokenize[X.tokenize.length - 1](B, X)) : ((M = !0), c(B, X))
                }
            }
            function z(M, B, X, re) {
                return function (ne, N) {
                    var F = !1,
                        D
                    for (
                        N.context.type === 'read-quoted-paused' && ((N.context = N.context.prev), ne.eat('}'));
                        (D = ne.next()) != null;

                    ) {
                        if (D == M && (re || !F)) {
                            N.tokenize.pop()
                            break
                        }
                        if (X && D == '#' && !F) {
                            if (ne.eat('{')) {
                                M == '}' && (N.context = { prev: N.context, type: 'read-quoted-paused' }),
                                    N.tokenize.push(S())
                                break
                            } else if (/[@\$]/.test(ne.peek())) {
                                N.tokenize.push(E())
                                break
                            }
                        }
                        F = !F && D == '\\'
                    }
                    return B
                }
            }
            function y(M, B) {
                return function (X, re) {
                    return B && X.eatSpace(), X.match(M) ? re.tokenize.pop() : X.skipToEnd(), 'string'
                }
            }
            function H(M, B) {
                return M.sol() && M.match('=end') && M.eol() && B.tokenize.pop(), M.skipToEnd(), 'comment'
            }
            return {
                startState: function () {
                    return {
                        tokenize: [c],
                        indented: 0,
                        context: { type: 'top', indented: -h.indentUnit },
                        continuedLine: !1,
                        lastTok: null,
                        varList: !1,
                    }
                },
                token: function (M, B) {
                    ;(w = null), M.sol() && (B.indented = M.indentation())
                    var X = B.tokenize[B.tokenize.length - 1](M, B),
                        re,
                        ne = w
                    if (X == 'ident') {
                        var N = M.current()
                        ;(X =
                            B.lastTok == '.'
                                ? 'property'
                                : C.propertyIsEnumerable(M.current())
                                  ? 'keyword'
                                  : /^[A-Z]/.test(N)
                                    ? 'tag'
                                    : B.lastTok == 'def' || B.lastTok == 'class' || B.varList
                                      ? 'def'
                                      : 'variable'),
                            X == 'keyword' &&
                                ((ne = N),
                                b.propertyIsEnumerable(N)
                                    ? (re = 'indent')
                                    : _.propertyIsEnumerable(N)
                                      ? (re = 'dedent')
                                      : (((N == 'if' || N == 'unless') && M.column() == M.indentation()) ||
                                            (N == 'do' && B.context.indented < B.indented)) &&
                                        (re = 'indent'))
                    }
                    return (
                        (w || (X && X != 'comment')) && (B.lastTok = ne),
                        w == '|' && (B.varList = !B.varList),
                        re == 'indent' || /[\(\[\{]/.test(w)
                            ? (B.context = { prev: B.context, type: w || X, indented: B.indented })
                            : (re == 'dedent' || /[\)\]\}]/.test(w)) && B.context.prev && (B.context = B.context.prev),
                        M.eol() && (B.continuedLine = w == '\\' || X == 'operator'),
                        X
                    )
                },
                indent: function (M, B) {
                    if (M.tokenize[M.tokenize.length - 1] != c) return o.Pass
                    var X = B && B.charAt(0),
                        re = M.context,
                        ne =
                            re.type == g[X] ||
                            (re.type == 'keyword' && /^(?:end|until|else|elsif|when|rescue)\b/.test(B))
                    return re.indented + (ne ? 0 : h.indentUnit) + (M.continuedLine ? h.indentUnit : 0)
                },
                electricInput: /^\s*(?:end|rescue|elsif|else|\})$/,
                lineComment: '#',
                fold: 'indent',
            }
        }),
            o.defineMIME('text/x-ruby', 'ruby'),
            o.registerHelper('hintWords', 'ruby', v)
    })
})
var Iu = Ue((Du, qu) => {
    ;(function (o) {
        typeof Du == 'object' && typeof qu == 'object'
            ? o(Re(), Ai())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror', '../../addon/mode/simple'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        o.defineSimpleMode('rust', {
            start: [
                { regex: /b?"/, token: 'string', next: 'string' },
                { regex: /b?r"/, token: 'string', next: 'string_raw' },
                { regex: /b?r#+"/, token: 'string', next: 'string_raw_hash' },
                { regex: /'(?:[^'\\]|\\(?:[nrt0'"]|x[\da-fA-F]{2}|u\{[\da-fA-F]{6}\}))'/, token: 'string-2' },
                { regex: /b'(?:[^']|\\(?:['\\nrt0]|x[\da-fA-F]{2}))'/, token: 'string-2' },
                {
                    regex: /(?:(?:[0-9][0-9_]*)(?:(?:[Ee][+-]?[0-9_]+)|\.[0-9_]+(?:[Ee][+-]?[0-9_]+)?)(?:f32|f64)?)|(?:0(?:b[01_]+|(?:o[0-7_]+)|(?:x[0-9a-fA-F_]+))|(?:[0-9][0-9_]*))(?:u8|u16|u32|u64|i8|i16|i32|i64|isize|usize)?/,
                    token: 'number',
                },
                {
                    regex: /(let(?:\s+mut)?|fn|enum|mod|struct|type|union)(\s+)([a-zA-Z_][a-zA-Z0-9_]*)/,
                    token: ['keyword', null, 'def'],
                },
                {
                    regex: /(?:abstract|alignof|as|async|await|box|break|continue|const|crate|do|dyn|else|enum|extern|fn|for|final|if|impl|in|loop|macro|match|mod|move|offsetof|override|priv|proc|pub|pure|ref|return|self|sizeof|static|struct|super|trait|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
                    token: 'keyword',
                },
                {
                    regex: /\b(?:Self|isize|usize|char|bool|u8|u16|u32|u64|f16|f32|f64|i8|i16|i32|i64|str|Option)\b/,
                    token: 'atom',
                },
                { regex: /\b(?:true|false|Some|None|Ok|Err)\b/, token: 'builtin' },
                { regex: /\b(fn)(\s+)([a-zA-Z_][a-zA-Z0-9_]*)/, token: ['keyword', null, 'def'] },
                { regex: /#!?\[.*\]/, token: 'meta' },
                { regex: /\/\/.*/, token: 'comment' },
                { regex: /\/\*/, token: 'comment', next: 'comment' },
                { regex: /[-+\/*=<>!]+/, token: 'operator' },
                { regex: /[a-zA-Z_]\w*!/, token: 'variable-3' },
                { regex: /[a-zA-Z_]\w*/, token: 'variable' },
                { regex: /[\{\[\(]/, indent: !0 },
                { regex: /[\}\]\)]/, dedent: !0 },
            ],
            string: [
                { regex: /"/, token: 'string', next: 'start' },
                { regex: /(?:[^\\"]|\\(?:.|$))*/, token: 'string' },
            ],
            string_raw: [
                { regex: /"/, token: 'string', next: 'start' },
                { regex: /[^"]*/, token: 'string' },
            ],
            string_raw_hash: [
                { regex: /"#+/, token: 'string', next: 'start' },
                { regex: /(?:[^"]|"(?!#))*/, token: 'string' },
            ],
            comment: [
                { regex: /.*?\*\//, token: 'comment', next: 'start' },
                { regex: /.*/, token: 'comment' },
            ],
            meta: {
                dontIndentStates: ['comment'],
                electricInput: /^\s*\}$/,
                blockCommentStart: '/*',
                blockCommentEnd: '*/',
                lineComment: '//',
                fold: 'brace',
            },
        }),
            o.defineMIME('text/x-rustsrc', 'rust'),
            o.defineMIME('text/rust', 'rust')
    })
})
var Jo = Ue((Fu, Nu) => {
    ;(function (o) {
        typeof Fu == 'object' && typeof Nu == 'object'
            ? o(Re(), fn())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror', '../css/css'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        o.defineMode(
            'sass',
            function (p) {
                var v = o.mimeModes['text/css'],
                    C = v.propertyKeywords || {},
                    b = v.colorKeywords || {},
                    _ = v.valueKeywords || {},
                    s = v.fontProperties || {}
                function g(N) {
                    return new RegExp('^' + N.join('|'))
                }
                var h = ['true', 'false', 'null', 'auto'],
                    w = new RegExp('^' + h.join('|')),
                    k = [
                        '\\(',
                        '\\)',
                        '=',
                        '>',
                        '<',
                        '==',
                        '>=',
                        '<=',
                        '\\+',
                        '-',
                        '\\!=',
                        '/',
                        '\\*',
                        '%',
                        'and',
                        'or',
                        'not',
                        ';',
                        '\\{',
                        '\\}',
                        ':',
                    ],
                    c = g(k),
                    d = /^::?[a-zA-Z_][\w\-]*/,
                    S
                function E(N) {
                    return !N.peek() || N.match(/\s+$/, !1)
                }
                function z(N, F) {
                    var D = N.peek()
                    return D === ')'
                        ? (N.next(), (F.tokenizer = re), 'operator')
                        : D === '('
                          ? (N.next(), N.eatSpace(), 'operator')
                          : D === "'" || D === '"'
                            ? ((F.tokenizer = H(N.next())), 'string')
                            : ((F.tokenizer = H(')', !1)), 'string')
                }
                function y(N, F) {
                    return function (D, V) {
                        return D.sol() && D.indentation() <= N
                            ? ((V.tokenizer = re), re(D, V))
                            : (F && D.skipTo('*/') ? (D.next(), D.next(), (V.tokenizer = re)) : D.skipToEnd(),
                              'comment')
                    }
                }
                function H(N, F) {
                    F == null && (F = !0)
                    function D(V, j) {
                        var J = V.next(),
                            x = V.peek(),
                            K = V.string.charAt(V.pos - 2),
                            Y = (J !== '\\' && x === N) || (J === N && K !== '\\')
                        return Y
                            ? (J !== N && F && V.next(), E(V) && (j.cursorHalf = 0), (j.tokenizer = re), 'string')
                            : J === '#' && x === '{'
                              ? ((j.tokenizer = M(D)), V.next(), 'operator')
                              : 'string'
                    }
                    return D
                }
                function M(N) {
                    return function (F, D) {
                        return F.peek() === '}' ? (F.next(), (D.tokenizer = N), 'operator') : re(F, D)
                    }
                }
                function B(N) {
                    if (N.indentCount == 0) {
                        N.indentCount++
                        var F = N.scopes[0].offset,
                            D = F + p.indentUnit
                        N.scopes.unshift({ offset: D })
                    }
                }
                function X(N) {
                    N.scopes.length != 1 && N.scopes.shift()
                }
                function re(N, F) {
                    var D = N.peek()
                    if (N.match('/*')) return (F.tokenizer = y(N.indentation(), !0)), F.tokenizer(N, F)
                    if (N.match('//')) return (F.tokenizer = y(N.indentation(), !1)), F.tokenizer(N, F)
                    if (N.match('#{')) return (F.tokenizer = M(re)), 'operator'
                    if (D === '"' || D === "'") return N.next(), (F.tokenizer = H(D)), 'string'
                    if (F.cursorHalf) {
                        if (
                            (D === '#' && (N.next(), N.match(/[0-9a-fA-F]{6}|[0-9a-fA-F]{3}/))) ||
                            N.match(/^-?[0-9\.]+/)
                        )
                            return E(N) && (F.cursorHalf = 0), 'number'
                        if (N.match(/^(px|em|in)\b/)) return E(N) && (F.cursorHalf = 0), 'unit'
                        if (N.match(w)) return E(N) && (F.cursorHalf = 0), 'keyword'
                        if (N.match(/^url/) && N.peek() === '(')
                            return (F.tokenizer = z), E(N) && (F.cursorHalf = 0), 'atom'
                        if (D === '$') return N.next(), N.eatWhile(/[\w-]/), E(N) && (F.cursorHalf = 0), 'variable-2'
                        if (D === '!') return N.next(), (F.cursorHalf = 0), N.match(/^[\w]+/) ? 'keyword' : 'operator'
                        if (N.match(c)) return E(N) && (F.cursorHalf = 0), 'operator'
                        if (N.eatWhile(/[\w-]/))
                            return (
                                E(N) && (F.cursorHalf = 0),
                                (S = N.current().toLowerCase()),
                                _.hasOwnProperty(S)
                                    ? 'atom'
                                    : b.hasOwnProperty(S)
                                      ? 'keyword'
                                      : C.hasOwnProperty(S)
                                        ? ((F.prevProp = N.current().toLowerCase()), 'property')
                                        : 'tag'
                            )
                        if (E(N)) return (F.cursorHalf = 0), null
                    } else {
                        if (D === '-' && N.match(/^-\w+-/)) return 'meta'
                        if (D === '.') {
                            if ((N.next(), N.match(/^[\w-]+/))) return B(F), 'qualifier'
                            if (N.peek() === '#') return B(F), 'tag'
                        }
                        if (D === '#') {
                            if ((N.next(), N.match(/^[\w-]+/))) return B(F), 'builtin'
                            if (N.peek() === '#') return B(F), 'tag'
                        }
                        if (D === '$') return N.next(), N.eatWhile(/[\w-]/), 'variable-2'
                        if (N.match(/^-?[0-9\.]+/)) return 'number'
                        if (N.match(/^(px|em|in)\b/)) return 'unit'
                        if (N.match(w)) return 'keyword'
                        if (N.match(/^url/) && N.peek() === '(') return (F.tokenizer = z), 'atom'
                        if (D === '=' && N.match(/^=[\w-]+/)) return B(F), 'meta'
                        if (D === '+' && N.match(/^\+[\w-]+/)) return 'variable-3'
                        if (
                            (D === '@' && N.match('@extend') && (N.match(/\s*[\w]/) || X(F)),
                            N.match(/^@(else if|if|media|else|for|each|while|mixin|function)/))
                        )
                            return B(F), 'def'
                        if (D === '@') return N.next(), N.eatWhile(/[\w-]/), 'def'
                        if (N.eatWhile(/[\w-]/))
                            if (N.match(/ *: *[\w-\+\$#!\("']/, !1)) {
                                S = N.current().toLowerCase()
                                var V = F.prevProp + '-' + S
                                return C.hasOwnProperty(V)
                                    ? 'property'
                                    : C.hasOwnProperty(S)
                                      ? ((F.prevProp = S), 'property')
                                      : s.hasOwnProperty(S)
                                        ? 'property'
                                        : 'tag'
                            } else
                                return N.match(/ *:/, !1)
                                    ? (B(F), (F.cursorHalf = 1), (F.prevProp = N.current().toLowerCase()), 'property')
                                    : (N.match(/ *,/, !1) || B(F), 'tag')
                        if (D === ':') return N.match(d) ? 'variable-3' : (N.next(), (F.cursorHalf = 1), 'operator')
                    }
                    return N.match(c) ? 'operator' : (N.next(), null)
                }
                function ne(N, F) {
                    N.sol() && (F.indentCount = 0)
                    var D = F.tokenizer(N, F),
                        V = N.current()
                    if (((V === '@return' || V === '}') && X(F), D !== null)) {
                        for (
                            var j = N.pos - V.length, J = j + p.indentUnit * F.indentCount, x = [], K = 0;
                            K < F.scopes.length;
                            K++
                        ) {
                            var Y = F.scopes[K]
                            Y.offset <= J && x.push(Y)
                        }
                        F.scopes = x
                    }
                    return D
                }
                return {
                    startState: function () {
                        return {
                            tokenizer: re,
                            scopes: [{ offset: 0, type: 'sass' }],
                            indentCount: 0,
                            cursorHalf: 0,
                            definedVars: [],
                            definedMixins: [],
                        }
                    },
                    token: function (N, F) {
                        var D = ne(N, F)
                        return (F.lastToken = { style: D, content: N.current() }), D
                    },
                    indent: function (N) {
                        return N.scopes[0].offset
                    },
                    blockCommentStart: '/*',
                    blockCommentEnd: '*/',
                    lineComment: '//',
                    fold: 'indent',
                }
            },
            'css',
        ),
            o.defineMIME('text/x-sass', 'sass')
    })
})
var ju = Ue((Ou, Pu) => {
    ;(function (o) {
        typeof Ou == 'object' && typeof Pu == 'object'
            ? o(Re())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        o.defineMode('shell', function () {
            var p = {}
            function v(d, S) {
                for (var E = 0; E < S.length; E++) p[S[E]] = d
            }
            var C = ['true', 'false'],
                b = [
                    'if',
                    'then',
                    'do',
                    'else',
                    'elif',
                    'while',
                    'until',
                    'for',
                    'in',
                    'esac',
                    'fi',
                    'fin',
                    'fil',
                    'done',
                    'exit',
                    'set',
                    'unset',
                    'export',
                    'function',
                ],
                _ = [
                    'ab',
                    'awk',
                    'bash',
                    'beep',
                    'cat',
                    'cc',
                    'cd',
                    'chown',
                    'chmod',
                    'chroot',
                    'clear',
                    'cp',
                    'curl',
                    'cut',
                    'diff',
                    'echo',
                    'find',
                    'gawk',
                    'gcc',
                    'get',
                    'git',
                    'grep',
                    'hg',
                    'kill',
                    'killall',
                    'ln',
                    'ls',
                    'make',
                    'mkdir',
                    'openssl',
                    'mv',
                    'nc',
                    'nl',
                    'node',
                    'npm',
                    'ping',
                    'ps',
                    'restart',
                    'rm',
                    'rmdir',
                    'sed',
                    'service',
                    'sh',
                    'shopt',
                    'shred',
                    'source',
                    'sort',
                    'sleep',
                    'ssh',
                    'start',
                    'stop',
                    'su',
                    'sudo',
                    'svn',
                    'tee',
                    'telnet',
                    'top',
                    'touch',
                    'vi',
                    'vim',
                    'wall',
                    'wc',
                    'wget',
                    'who',
                    'write',
                    'yes',
                    'zsh',
                ]
            o.registerHelper('hintWords', 'shell', C.concat(b, _)), v('atom', C), v('keyword', b), v('builtin', _)
            function s(d, S) {
                if (d.eatSpace()) return null
                var E = d.sol(),
                    z = d.next()
                if (z === '\\') return d.next(), null
                if (z === "'" || z === '"' || z === '`')
                    return S.tokens.unshift(g(z, z === '`' ? 'quote' : 'string')), c(d, S)
                if (z === '#') return E && d.eat('!') ? (d.skipToEnd(), 'meta') : (d.skipToEnd(), 'comment')
                if (z === '$') return S.tokens.unshift(w), c(d, S)
                if (z === '+' || z === '=') return 'operator'
                if (z === '-') return d.eat('-'), d.eatWhile(/\w/), 'attribute'
                if (z == '<') {
                    if (d.match('<<')) return 'operator'
                    var y = d.match(/^<-?\s*['"]?([^'"]*)['"]?/)
                    if (y) return S.tokens.unshift(k(y[1])), 'string-2'
                }
                if (/\d/.test(z) && (d.eatWhile(/\d/), d.eol() || !/\w/.test(d.peek()))) return 'number'
                d.eatWhile(/[\w-]/)
                var H = d.current()
                return d.peek() === '=' && /\w+/.test(H) ? 'def' : p.hasOwnProperty(H) ? p[H] : null
            }
            function g(d, S) {
                var E = d == '(' ? ')' : d == '{' ? '}' : d
                return function (z, y) {
                    for (var H, M = !1; (H = z.next()) != null; ) {
                        if (H === E && !M) {
                            y.tokens.shift()
                            break
                        } else if (H === '$' && !M && d !== "'" && z.peek() != E) {
                            ;(M = !0), z.backUp(1), y.tokens.unshift(w)
                            break
                        } else {
                            if (!M && d !== E && H === d) return y.tokens.unshift(g(d, S)), c(z, y)
                            if (!M && /['"]/.test(H) && !/['"]/.test(d)) {
                                y.tokens.unshift(h(H, 'string')), z.backUp(1)
                                break
                            }
                        }
                        M = !M && H === '\\'
                    }
                    return S
                }
            }
            function h(d, S) {
                return function (E, z) {
                    return (z.tokens[0] = g(d, S)), E.next(), c(E, z)
                }
            }
            var w = function (d, S) {
                S.tokens.length > 1 && d.eat('$')
                var E = d.next()
                return /['"({]/.test(E)
                    ? ((S.tokens[0] = g(E, E == '(' ? 'quote' : E == '{' ? 'def' : 'string')), c(d, S))
                    : (/\d/.test(E) || d.eatWhile(/\w/), S.tokens.shift(), 'def')
            }
            function k(d) {
                return function (S, E) {
                    return S.sol() && S.string == d && E.tokens.shift(), S.skipToEnd(), 'string-2'
                }
            }
            function c(d, S) {
                return (S.tokens[0] || s)(d, S)
            }
            return {
                startState: function () {
                    return { tokens: [] }
                },
                token: function (d, S) {
                    return c(d, S)
                },
                closeBrackets: '()[]{}\'\'""``',
                lineComment: '#',
                fold: 'brace',
            }
        }),
            o.defineMIME('text/x-sh', 'shell'),
            o.defineMIME('application/x-sh', 'shell')
    })
})
var Bu = Ue((Ru, Hu) => {
    ;(function (o) {
        typeof Ru == 'object' && typeof Hu == 'object'
            ? o(Re())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        o.defineMode('sql', function (h, w) {
            var k = w.client || {},
                c = w.atoms || { false: !0, true: !0, null: !0 },
                d = w.builtin || s(g),
                S = w.keywords || s(_),
                E = w.operatorChars || /^[*+\-%<>!=&|~^\/]/,
                z = w.support || {},
                y = w.hooks || {},
                H = w.dateSQL || { date: !0, time: !0, timestamp: !0 },
                M = w.backslashStringEscapes !== !1,
                B = w.brackets || /^[\{}\(\)\[\]]/,
                X = w.punctuation || /^[;.,:]/
            function re(V, j) {
                var J = V.next()
                if (y[J]) {
                    var x = y[J](V, j)
                    if (x !== !1) return x
                }
                if (
                    z.hexNumber &&
                    ((J == '0' && V.match(/^[xX][0-9a-fA-F]+/)) ||
                        ((J == 'x' || J == 'X') && V.match(/^'[0-9a-fA-F]*'/)))
                )
                    return 'number'
                if (
                    z.binaryNumber &&
                    (((J == 'b' || J == 'B') && V.match(/^'[01]*'/)) || (J == '0' && V.match(/^b[01]+/)))
                )
                    return 'number'
                if (J.charCodeAt(0) > 47 && J.charCodeAt(0) < 58)
                    return (
                        V.match(/^[0-9]*(\.[0-9]+)?([eE][-+]?[0-9]+)?/),
                        z.decimallessFloat && V.match(/^\.(?!\.)/),
                        'number'
                    )
                if (J == '?' && (V.eatSpace() || V.eol() || V.eat(';'))) return 'variable-3'
                if (J == "'" || (J == '"' && z.doubleQuote)) return (j.tokenize = ne(J)), j.tokenize(V, j)
                if (
                    ((z.nCharCast && (J == 'n' || J == 'N')) ||
                        (z.charsetCast && J == '_' && V.match(/[a-z][a-z0-9]*/i))) &&
                    (V.peek() == "'" || V.peek() == '"')
                )
                    return 'keyword'
                if (
                    z.escapeConstant &&
                    (J == 'e' || J == 'E') &&
                    (V.peek() == "'" || (V.peek() == '"' && z.doubleQuote))
                )
                    return (
                        (j.tokenize = function (Y, I) {
                            return (I.tokenize = ne(Y.next(), !0))(Y, I)
                        }),
                        'keyword'
                    )
                if (z.commentSlashSlash && J == '/' && V.eat('/')) return V.skipToEnd(), 'comment'
                if ((z.commentHash && J == '#') || (J == '-' && V.eat('-') && (!z.commentSpaceRequired || V.eat(' '))))
                    return V.skipToEnd(), 'comment'
                if (J == '/' && V.eat('*')) return (j.tokenize = N(1)), j.tokenize(V, j)
                if (J == '.') {
                    if (z.zerolessFloat && V.match(/^(?:\d+(?:e[+-]?\d+)?)/i)) return 'number'
                    if (V.match(/^\.+/)) return null
                    if (V.match(/^[\w\d_$#]+/)) return 'variable-2'
                } else {
                    if (E.test(J)) return V.eatWhile(E), 'operator'
                    if (B.test(J)) return 'bracket'
                    if (X.test(J)) return V.eatWhile(X), 'punctuation'
                    if (
                        J == '{' &&
                        (V.match(/^( )*(d|D|t|T|ts|TS)( )*'[^']*'( )*}/) ||
                            V.match(/^( )*(d|D|t|T|ts|TS)( )*"[^"]*"( )*}/))
                    )
                        return 'number'
                    V.eatWhile(/^[_\w\d]/)
                    var K = V.current().toLowerCase()
                    return H.hasOwnProperty(K) && (V.match(/^( )+'[^']*'/) || V.match(/^( )+"[^"]*"/))
                        ? 'number'
                        : c.hasOwnProperty(K)
                          ? 'atom'
                          : d.hasOwnProperty(K)
                            ? 'type'
                            : S.hasOwnProperty(K)
                              ? 'keyword'
                              : k.hasOwnProperty(K)
                                ? 'builtin'
                                : null
                }
            }
            function ne(V, j) {
                return function (J, x) {
                    for (var K = !1, Y; (Y = J.next()) != null; ) {
                        if (Y == V && !K) {
                            x.tokenize = re
                            break
                        }
                        K = (M || j) && !K && Y == '\\'
                    }
                    return 'string'
                }
            }
            function N(V) {
                return function (j, J) {
                    var x = j.match(/^.*?(\/\*|\*\/)/)
                    return (
                        x
                            ? x[1] == '/*'
                                ? (J.tokenize = N(V + 1))
                                : V > 1
                                  ? (J.tokenize = N(V - 1))
                                  : (J.tokenize = re)
                            : j.skipToEnd(),
                        'comment'
                    )
                }
            }
            function F(V, j, J) {
                j.context = { prev: j.context, indent: V.indentation(), col: V.column(), type: J }
            }
            function D(V) {
                ;(V.indent = V.context.indent), (V.context = V.context.prev)
            }
            return {
                startState: function () {
                    return { tokenize: re, context: null }
                },
                token: function (V, j) {
                    if (
                        (V.sol() && j.context && j.context.align == null && (j.context.align = !1),
                        j.tokenize == re && V.eatSpace())
                    )
                        return null
                    var J = j.tokenize(V, j)
                    if (J == 'comment') return J
                    j.context && j.context.align == null && (j.context.align = !0)
                    var x = V.current()
                    return (
                        x == '(' ? F(V, j, ')') : x == '[' ? F(V, j, ']') : j.context && j.context.type == x && D(j), J
                    )
                },
                indent: function (V, j) {
                    var J = V.context
                    if (!J) return o.Pass
                    var x = j.charAt(0) == J.type
                    return J.align ? J.col + (x ? 0 : 1) : J.indent + (x ? 0 : h.indentUnit)
                },
                blockCommentStart: '/*',
                blockCommentEnd: '*/',
                lineComment: z.commentSlashSlash ? '//' : z.commentHash ? '#' : '--',
                closeBrackets: '()[]{}\'\'""``',
                config: w,
            }
        })
        function p(h) {
            for (var w; (w = h.next()) != null; ) if (w == '`' && !h.eat('`')) return 'variable-2'
            return h.backUp(h.current().length - 1), h.eatWhile(/\w/) ? 'variable-2' : null
        }
        function v(h) {
            for (var w; (w = h.next()) != null; ) if (w == '"' && !h.eat('"')) return 'variable-2'
            return h.backUp(h.current().length - 1), h.eatWhile(/\w/) ? 'variable-2' : null
        }
        function C(h) {
            return (
                h.eat('@') && (h.match('session.'), h.match('local.'), h.match('global.')),
                h.eat("'")
                    ? (h.match(/^.*'/), 'variable-2')
                    : h.eat('"')
                      ? (h.match(/^.*"/), 'variable-2')
                      : h.eat('`')
                        ? (h.match(/^.*`/), 'variable-2')
                        : h.match(/^[0-9a-zA-Z$\.\_]+/)
                          ? 'variable-2'
                          : null
            )
        }
        function b(h) {
            return h.eat('N') ? 'atom' : h.match(/^[a-zA-Z.#!?]/) ? 'variable-2' : null
        }
        var _ =
            'alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit '
        function s(h) {
            for (var w = {}, k = h.split(' '), c = 0; c < k.length; ++c) w[k[c]] = !0
            return w
        }
        var g =
            'bool boolean bit blob enum long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision real date datetime year unsigned signed decimal numeric'
        o.defineMIME('text/x-sql', {
            name: 'sql',
            keywords: s(_ + 'begin'),
            builtin: s(g),
            atoms: s('false true null unknown'),
            dateSQL: s('date time timestamp'),
            support: s('doubleQuote binaryNumber hexNumber'),
        }),
            o.defineMIME('text/x-mssql', {
                name: 'sql',
                client: s(
                    '$partition binary_checksum checksum connectionproperty context_info current_request_id error_line error_message error_number error_procedure error_severity error_state formatmessage get_filestream_transaction_context getansinull host_id host_name isnull isnumeric min_active_rowversion newid newsequentialid rowcount_big xact_state object_id',
                ),
                keywords: s(
                    _ +
                        'begin trigger proc view index for add constraint key primary foreign collate clustered nonclustered declare exec go if use index holdlock nolock nowait paglock readcommitted readcommittedlock readpast readuncommitted repeatableread rowlock serializable snapshot tablock tablockx updlock with',
                ),
                builtin: s(
                    'bigint numeric bit smallint decimal smallmoney int tinyint money float real char varchar text nchar nvarchar ntext binary varbinary image cursor timestamp hierarchyid uniqueidentifier sql_variant xml table ',
                ),
                atoms: s(
                    'is not null like and or in left right between inner outer join all any some cross unpivot pivot exists',
                ),
                operatorChars: /^[*+\-%<>!=^\&|\/]/,
                brackets: /^[\{}\(\)]/,
                punctuation: /^[;.,:/]/,
                backslashStringEscapes: !1,
                dateSQL: s('date datetimeoffset datetime2 smalldatetime datetime time'),
                hooks: { '@': C },
            }),
            o.defineMIME('text/x-mysql', {
                name: 'sql',
                client: s(
                    'charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee',
                ),
                keywords: s(
                    _ +
                        'accessible action add after algorithm all analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general get global grant grants group group_concat handler hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show signal slave slow smallint snapshot soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views warnings when while with work write xa xor year_month zerofill begin do then else loop repeat',
                ),
                builtin: s(
                    'bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric',
                ),
                atoms: s('false true null unknown'),
                operatorChars: /^[*+\-%<>!=&|^]/,
                dateSQL: s('date time timestamp'),
                support: s(
                    'decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired',
                ),
                hooks: { '@': C, '`': p, '\\': b },
            }),
            o.defineMIME('text/x-mariadb', {
                name: 'sql',
                client: s(
                    'charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee',
                ),
                keywords: s(
                    _ +
                        'accessible action add after algorithm all always analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general generated get global grant grants group group_concat handler hard hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password persistent phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show shutdown signal slave slow smallint snapshot soft soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views virtual warnings when while with work write xa xor year_month zerofill begin do then else loop repeat',
                ),
                builtin: s(
                    'bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric',
                ),
                atoms: s('false true null unknown'),
                operatorChars: /^[*+\-%<>!=&|^]/,
                dateSQL: s('date time timestamp'),
                support: s(
                    'decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired',
                ),
                hooks: { '@': C, '`': p, '\\': b },
            }),
            o.defineMIME('text/x-sqlite', {
                name: 'sql',
                client: s(
                    'auth backup bail binary changes check clone databases dbinfo dump echo eqp exit explain fullschema headers help import imposter indexes iotrace limit lint load log mode nullvalue once open output print prompt quit read restore save scanstats schema separator session shell show stats system tables testcase timeout timer trace vfsinfo vfslist vfsname width',
                ),
                keywords: s(
                    _ +
                        'abort action add after all analyze attach autoincrement before begin cascade case cast check collate column commit conflict constraint cross current_date current_time current_timestamp database default deferrable deferred detach each else end escape except exclusive exists explain fail for foreign full glob if ignore immediate index indexed initially inner instead intersect isnull key left limit match natural no notnull null of offset outer plan pragma primary query raise recursive references regexp reindex release rename replace restrict right rollback row savepoint temp temporary then to transaction trigger unique using vacuum view virtual when with without',
                ),
                builtin: s(
                    'bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text clob bigint int int2 int8 integer float double char varchar date datetime year unsigned signed numeric real',
                ),
                atoms: s('null current_date current_time current_timestamp'),
                operatorChars: /^[*+\-%<>!=&|/~]/,
                dateSQL: s('date time timestamp datetime'),
                support: s('decimallessFloat zerolessFloat'),
                identifierQuote: '"',
                hooks: { '@': C, ':': C, '?': C, $: C, '"': v, '`': p },
            }),
            o.defineMIME('text/x-cassandra', {
                name: 'sql',
                client: {},
                keywords: s(
                    'add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime',
                ),
                builtin: s(
                    'ascii bigint blob boolean counter decimal double float frozen inet int list map static text timestamp timeuuid tuple uuid varchar varint',
                ),
                atoms: s('false true infinity NaN'),
                operatorChars: /^[<>=]/,
                dateSQL: {},
                support: s('commentSlashSlash decimallessFloat'),
                hooks: {},
            }),
            o.defineMIME('text/x-plsql', {
                name: 'sql',
                client: s(
                    'appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define describe echo editfile embedded escape exec execute feedback flagger flush heading headsep instance linesize lno loboffset logsource long longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar release repfooter repheader serveroutput shiftinout show showmode size spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout time timing trimout trimspool ttitle underline verify version wrap',
                ),
                keywords: s(
                    'abort accept access add all alter and any array arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body boolean by case cast char char_base check close cluster clusters colauth column comment commit compress connect connected constant constraint crash create current currval cursor data_base database date dba deallocate debugoff debugon decimal declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry escape exception exception_init exchange exclusive exists exit external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging long loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base object of off offline on online only open option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw read rebuild record ref references refresh release rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate session set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work',
                ),
                builtin: s(
                    'abs acos add_months ascii asin atan atan2 average bfile bfilename bigserial bit blob ceil character chartorowid chr clob concat convert cos cosh count dec decode deref dual dump dup_val_on_index empty error exp false float floor found glb greatest hextoraw initcap instr instrb int integer isopen last_day least length lengthb ln lower lpad ltrim lub make_ref max min mlslabel mod months_between natural naturaln nchar nclob new_time next_day nextval nls_charset_decl_len nls_charset_id nls_charset_name nls_initcap nls_lower nls_sort nls_upper nlssort no_data_found notfound null number numeric nvarchar2 nvl others power rawtohex real reftohex round rowcount rowidtochar rowtype rpad rtrim serial sign signtype sin sinh smallint soundex sqlcode sqlerrm sqrt stddev string substr substrb sum sysdate tan tanh to_char text to_date to_label to_multi_byte to_number to_single_byte translate true trunc uid unlogged upper user userenv varchar varchar2 variance varying vsize xml',
                ),
                operatorChars: /^[*\/+\-%<>!=~]/,
                dateSQL: s('date time timestamp'),
                support: s('doubleQuote nCharCast zerolessFloat binaryNumber hexNumber'),
            }),
            o.defineMIME('text/x-hive', {
                name: 'sql',
                keywords: s(
                    'select alter $elem$ $key$ $value$ add after all analyze and archive as asc before between binary both bucket buckets by cascade case cast change cluster clustered clusterstatus collection column columns comment compute concatenate continue create cross cursor data database databases dbproperties deferred delete delimited desc describe directory disable distinct distribute drop else enable end escaped exclusive exists explain export extended external fetch fields fileformat first format formatted from full function functions grant group having hold_ddltime idxproperties if import in index indexes inpath inputdriver inputformat insert intersect into is items join keys lateral left like limit lines load local location lock locks mapjoin materialized minus msck no_drop nocompress not of offline on option or order out outer outputdriver outputformat overwrite partition partitioned partitions percent plus preserve procedure purge range rcfile read readonly reads rebuild recordreader recordwriter recover reduce regexp rename repair replace restrict revoke right rlike row schema schemas semi sequencefile serde serdeproperties set shared show show_database sort sorted ssl statistics stored streamtable table tables tablesample tblproperties temporary terminated textfile then tmp to touch transform trigger unarchive undo union uniquejoin unlock update use using utc utc_tmestamp view when where while with admin authorization char compact compactions conf cube current current_date current_timestamp day decimal defined dependency directories elem_type exchange file following for grouping hour ignore inner interval jar less logical macro minute month more none noscan over owner partialscan preceding pretty principals protection reload rewrite role roles rollup rows second server sets skewed transactions truncate unbounded unset uri user values window year',
                ),
                builtin: s(
                    'bool boolean long timestamp tinyint smallint bigint int float double date datetime unsigned string array struct map uniontype key_type utctimestamp value_type varchar',
                ),
                atoms: s('false true null unknown'),
                operatorChars: /^[*+\-%<>!=]/,
                dateSQL: s('date timestamp'),
                support: s('doubleQuote binaryNumber hexNumber'),
            }),
            o.defineMIME('text/x-pgsql', {
                name: 'sql',
                client: s('source'),
                keywords: s(
                    _ +
                        'a abort abs absent absolute access according action ada add admin after aggregate alias all allocate also alter always analyse analyze and any are array array_agg array_max_cardinality as asc asensitive assert assertion assignment asymmetric at atomic attach attribute attributes authorization avg backward base64 before begin begin_frame begin_partition bernoulli between bigint binary bit bit_length blob blocked bom boolean both breadth by c cache call called cardinality cascade cascaded case cast catalog catalog_name ceil ceiling chain char char_length character character_length character_set_catalog character_set_name character_set_schema characteristics characters check checkpoint class class_origin clob close cluster coalesce cobol collate collation collation_catalog collation_name collation_schema collect column column_name columns command_function command_function_code comment comments commit committed concurrently condition condition_number configuration conflict connect connection connection_name constant constraint constraint_catalog constraint_name constraint_schema constraints constructor contains content continue control conversion convert copy corr corresponding cost count covar_pop covar_samp create cross csv cube cume_dist current current_catalog current_date current_default_transform_group current_path current_role current_row current_schema current_time current_timestamp current_transform_group_for_type current_user cursor cursor_name cycle data database datalink datatype date datetime_interval_code datetime_interval_precision day db deallocate debug dec decimal declare default defaults deferrable deferred defined definer degree delete delimiter delimiters dense_rank depends depth deref derived desc describe descriptor detach detail deterministic diagnostics dictionary disable discard disconnect dispatch distinct dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue do document domain double drop dump dynamic dynamic_function dynamic_function_code each element else elseif elsif empty enable encoding encrypted end end_frame end_partition endexec enforced enum equals errcode error escape event every except exception exclude excluding exclusive exec execute exists exit exp explain expression extension external extract false family fetch file filter final first first_value flag float floor following for force foreach foreign fortran forward found frame_row free freeze from fs full function functions fusion g general generated get global go goto grant granted greatest group grouping groups handler having header hex hierarchy hint hold hour id identity if ignore ilike immediate immediately immutable implementation implicit import in include including increment indent index indexes indicator info inherit inherits initially inline inner inout input insensitive insert instance instantiable instead int integer integrity intersect intersection interval into invoker is isnull isolation join k key key_member key_type label lag language large last last_value lateral lead leading leakproof least left length level library like like_regex limit link listen ln load local localtime localtimestamp location locator lock locked log logged loop lower m map mapping match matched materialized max max_cardinality maxvalue member merge message message_length message_octet_length message_text method min minute minvalue mod mode modifies module month more move multiset mumps name names namespace national natural nchar nclob nesting new next nfc nfd nfkc nfkd nil no none normalize normalized not nothing notice notify notnull nowait nth_value ntile null nullable nullif nulls number numeric object occurrences_regex octet_length octets of off offset oids old on only open operator option options or order ordering ordinality others out outer output over overlaps overlay overriding owned owner p pad parallel parameter parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partial partition pascal passing passthrough password path percent percent_rank percentile_cont percentile_disc perform period permission pg_context pg_datatype_name pg_exception_context pg_exception_detail pg_exception_hint placing plans pli policy portion position position_regex power precedes preceding precision prepare prepared preserve primary print_strict_params prior privileges procedural procedure procedures program public publication query quote raise range rank read reads real reassign recheck recovery recursive ref references referencing refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex relative release rename repeatable replace replica requiring reset respect restart restore restrict result result_oid return returned_cardinality returned_length returned_octet_length returned_sqlstate returning returns reverse revoke right role rollback rollup routine routine_catalog routine_name routine_schema routines row row_count row_number rows rowtype rule savepoint scale schema schema_name schemas scope scope_catalog scope_name scope_schema scroll search second section security select selective self sensitive sequence sequences serializable server server_name session session_user set setof sets share show similar simple size skip slice smallint snapshot some source space specific specific_name specifictype sql sqlcode sqlerror sqlexception sqlstate sqlwarning sqrt stable stacked standalone start state statement static statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset subscription substring substring_regex succeeds sum symmetric sysid system system_time system_user t table table_name tables tablesample tablespace temp template temporary text then ties time timestamp timezone_hour timezone_minute to token top_level_count trailing transaction transaction_active transactions_committed transactions_rolled_back transform transforms translate translate_regex translation treat trigger trigger_catalog trigger_name trigger_schema trim trim_array true truncate trusted type types uescape unbounded uncommitted under unencrypted union unique unknown unlink unlisten unlogged unnamed unnest until untyped update upper uri usage use_column use_variable user user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema using vacuum valid validate validator value value_of values var_pop var_samp varbinary varchar variable_conflict variadic varying verbose version versioning view views volatile warning when whenever where while whitespace width_bucket window with within without work wrapper write xml xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate year yes zone',
                ),
                builtin: s(
                    'bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float8 inet integer int int4 interval json jsonb line lseg macaddr macaddr8 money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time zone timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml',
                ),
                atoms: s('false true null unknown'),
                operatorChars: /^[*\/+\-%<>!=&|^\/#@?~]/,
                backslashStringEscapes: !1,
                dateSQL: s('date time timestamp'),
                support: s(
                    'decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast escapeConstant',
                ),
            }),
            o.defineMIME('text/x-gql', {
                name: 'sql',
                keywords: s(
                    'ancestor and asc by contains desc descendant distinct from group has in is limit offset on order select superset where',
                ),
                atoms: s('false true'),
                builtin: s('blob datetime first key __key__ string integer double boolean null'),
                operatorChars: /^[*+\-%<>!=]/,
            }),
            o.defineMIME('text/x-gpsql', {
                name: 'sql',
                client: s('source'),
                keywords: s(
                    'abort absolute access action active add admin after aggregate all also alter always analyse analyze and any array as asc assertion assignment asymmetric at authorization backward before begin between bigint binary bit boolean both by cache called cascade cascaded case cast chain char character characteristics check checkpoint class close cluster coalesce codegen collate column comment commit committed concurrency concurrently configuration connection constraint constraints contains content continue conversion copy cost cpu_rate_limit create createdb createexttable createrole createuser cross csv cube current current_catalog current_date current_role current_schema current_time current_timestamp current_user cursor cycle data database day deallocate dec decimal declare decode default defaults deferrable deferred definer delete delimiter delimiters deny desc dictionary disable discard distinct distributed do document domain double drop dxl each else enable encoding encrypted end enum errors escape every except exchange exclude excluding exclusive execute exists explain extension external extract false family fetch fields filespace fill filter first float following for force foreign format forward freeze from full function global grant granted greatest group group_id grouping handler hash having header hold host hour identity if ignore ilike immediate immutable implicit in including inclusive increment index indexes inherit inherits initially inline inner inout input insensitive insert instead int integer intersect interval into invoker is isnull isolation join key language large last leading least left level like limit list listen load local localtime localtimestamp location lock log login mapping master match maxvalue median merge minute minvalue missing mode modifies modify month move name names national natural nchar new newline next no nocreatedb nocreateexttable nocreaterole nocreateuser noinherit nologin none noovercommit nosuperuser not nothing notify notnull nowait null nullif nulls numeric object of off offset oids old on only operator option options or order ordered others out outer over overcommit overlaps overlay owned owner parser partial partition partitions passing password percent percentile_cont percentile_disc placing plans position preceding precision prepare prepared preserve primary prior privileges procedural procedure protocol queue quote randomly range read readable reads real reassign recheck recursive ref references reindex reject relative release rename repeatable replace replica reset resource restart restrict returning returns revoke right role rollback rollup rootpartition row rows rule savepoint scatter schema scroll search second security segment select sequence serializable session session_user set setof sets share show similar simple smallint some split sql stable standalone start statement statistics stdin stdout storage strict strip subpartition subpartitions substring superuser symmetric sysid system table tablespace temp template temporary text then threshold ties time timestamp to trailing transaction treat trigger trim true truncate trusted type unbounded uncommitted unencrypted union unique unknown unlisten until update user using vacuum valid validation validator value values varchar variadic varying verbose version view volatile web when where whitespace window with within without work writable write xml xmlattributes xmlconcat xmlelement xmlexists xmlforest xmlparse xmlpi xmlroot xmlserialize year yes zone',
                ),
                builtin: s(
                    'bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float float8 inet integer int int4 interval json jsonb line lseg macaddr macaddr8 money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time without zone with timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml',
                ),
                atoms: s('false true null unknown'),
                operatorChars: /^[*+\-%<>!=&|^\/#@?~]/,
                dateSQL: s('date time timestamp'),
                support: s('decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast'),
            }),
            o.defineMIME('text/x-sparksql', {
                name: 'sql',
                keywords: s(
                    'add after all alter analyze and anti archive array as asc at between bucket buckets by cache cascade case cast change clear cluster clustered codegen collection column columns comment commit compact compactions compute concatenate cost create cross cube current current_date current_timestamp database databases data dbproperties defined delete delimited deny desc describe dfs directories distinct distribute drop else end escaped except exchange exists explain export extended external false fields fileformat first following for format formatted from full function functions global grant group grouping having if ignore import in index indexes inner inpath inputformat insert intersect interval into is items join keys last lateral lazy left like limit lines list load local location lock locks logical macro map minus msck natural no not null nulls of on optimize option options or order out outer outputformat over overwrite partition partitioned partitions percent preceding principals purge range recordreader recordwriter recover reduce refresh regexp rename repair replace reset restrict revoke right rlike role roles rollback rollup row rows schema schemas select semi separated serde serdeproperties set sets show skewed sort sorted start statistics stored stratify struct table tables tablesample tblproperties temp temporary terminated then to touch transaction transactions transform true truncate unarchive unbounded uncache union unlock unset use using values view when where window with',
                ),
                builtin: s(
                    'abs acos acosh add_months aggregate and any approx_count_distinct approx_percentile array array_contains array_distinct array_except array_intersect array_join array_max array_min array_position array_remove array_repeat array_sort array_union arrays_overlap arrays_zip ascii asin asinh assert_true atan atan2 atanh avg base64 between bigint bin binary bit_and bit_count bit_get bit_length bit_or bit_xor bool_and bool_or boolean bround btrim cardinality case cast cbrt ceil ceiling char char_length character_length chr coalesce collect_list collect_set concat concat_ws conv corr cos cosh cot count count_if count_min_sketch covar_pop covar_samp crc32 cume_dist current_catalog current_database current_date current_timestamp current_timezone current_user date date_add date_format date_from_unix_date date_part date_sub date_trunc datediff day dayofmonth dayofweek dayofyear decimal decode degrees delimited dense_rank div double e element_at elt encode every exists exp explode explode_outer expm1 extract factorial filter find_in_set first first_value flatten float floor forall format_number format_string from_csv from_json from_unixtime from_utc_timestamp get_json_object getbit greatest grouping grouping_id hash hex hour hypot if ifnull in initcap inline inline_outer input_file_block_length input_file_block_start input_file_name inputformat instr int isnan isnotnull isnull java_method json_array_length json_object_keys json_tuple kurtosis lag last last_day last_value lcase lead least left length levenshtein like ln locate log log10 log1p log2 lower lpad ltrim make_date make_dt_interval make_interval make_timestamp make_ym_interval map map_concat map_entries map_filter map_from_arrays map_from_entries map_keys map_values map_zip_with max max_by md5 mean min min_by minute mod monotonically_increasing_id month months_between named_struct nanvl negative next_day not now nth_value ntile nullif nvl nvl2 octet_length or outputformat overlay parse_url percent_rank percentile percentile_approx pi pmod posexplode posexplode_outer position positive pow power printf quarter radians raise_error rand randn random rank rcfile reflect regexp regexp_extract regexp_extract_all regexp_like regexp_replace repeat replace reverse right rint rlike round row_number rpad rtrim schema_of_csv schema_of_json second sentences sequence sequencefile serde session_window sha sha1 sha2 shiftleft shiftright shiftrightunsigned shuffle sign signum sin sinh size skewness slice smallint some sort_array soundex space spark_partition_id split sqrt stack std stddev stddev_pop stddev_samp str_to_map string struct substr substring substring_index sum tan tanh textfile timestamp timestamp_micros timestamp_millis timestamp_seconds tinyint to_csv to_date to_json to_timestamp to_unix_timestamp to_utc_timestamp transform transform_keys transform_values translate trim trunc try_add try_divide typeof ucase unbase64 unhex uniontype unix_date unix_micros unix_millis unix_seconds unix_timestamp upper uuid var_pop var_samp variance version weekday weekofyear when width_bucket window xpath xpath_boolean xpath_double xpath_float xpath_int xpath_long xpath_number xpath_short xpath_string xxhash64 year zip_with',
                ),
                atoms: s('false true null'),
                operatorChars: /^[*\/+\-%<>!=~&|^]/,
                dateSQL: s('date time timestamp'),
                support: s('doubleQuote zerolessFloat'),
            }),
            o.defineMIME('text/x-esper', {
                name: 'sql',
                client: s('source'),
                keywords: s(
                    'alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit after all and as at asc avedev avg between by case cast coalesce count create current_timestamp day days delete define desc distinct else end escape events every exists false first from full group having hour hours in inner insert instanceof into irstream is istream join last lastweekday left limit like max match_recognize matches median measures metadatasql min minute minutes msec millisecond milliseconds not null offset on or order outer output partition pattern prev prior regexp retain-union retain-intersection right rstream sec second seconds select set some snapshot sql stddev sum then true unidirectional until update variable weekday when where window',
                ),
                builtin: {},
                atoms: s('false true null'),
                operatorChars: /^[*+\-%<>!=&|^\/#@?~]/,
                dateSQL: s('time'),
                support: s('decimallessFloat zerolessFloat binaryNumber hexNumber'),
            }),
            o.defineMIME('text/x-trino', {
                name: 'sql',
                keywords: s(
                    'abs absent acos add admin after all all_match alter analyze and any any_match approx_distinct approx_most_frequent approx_percentile approx_set arbitrary array_agg array_distinct array_except array_intersect array_join array_max array_min array_position array_remove array_sort array_union arrays_overlap as asc asin at at_timezone atan atan2 authorization avg bar bernoulli beta_cdf between bing_tile bing_tile_at bing_tile_coordinates bing_tile_polygon bing_tile_quadkey bing_tile_zoom_level bing_tiles_around bit_count bitwise_and bitwise_and_agg bitwise_left_shift bitwise_not bitwise_or bitwise_or_agg bitwise_right_shift bitwise_right_shift_arithmetic bitwise_xor bool_and bool_or both by call cardinality cascade case cast catalogs cbrt ceil ceiling char2hexint checksum chr classify coalesce codepoint column columns combinations comment commit committed concat concat_ws conditional constraint contains contains_sequence convex_hull_agg copartition corr cos cosh cosine_similarity count count_if covar_pop covar_samp crc32 create cross cube cume_dist current current_catalog current_date current_groups current_path current_role current_schema current_time current_timestamp current_timezone current_user data date_add date_diff date_format date_parse date_trunc day day_of_month day_of_week day_of_year deallocate default define definer degrees delete dense_rank deny desc describe descriptor distinct distributed dow doy drop e element_at else empty empty_approx_set encoding end error escape evaluate_classifier_predictions every except excluding execute exists exp explain extract false features fetch filter final first first_value flatten floor following for format format_datetime format_number from from_base from_base32 from_base64 from_base64url from_big_endian_32 from_big_endian_64 from_encoded_polyline from_geojson_geometry from_hex from_ieee754_32 from_ieee754_64 from_iso8601_date from_iso8601_timestamp from_iso8601_timestamp_nanos from_unixtime from_unixtime_nanos from_utf8 full functions geometric_mean geometry_from_hadoop_shape geometry_invalid_reason geometry_nearest_points geometry_to_bing_tiles geometry_union geometry_union_agg grant granted grants graphviz great_circle_distance greatest group grouping groups hamming_distance hash_counts having histogram hmac_md5 hmac_sha1 hmac_sha256 hmac_sha512 hour human_readable_seconds if ignore in including index infinity initial inner input insert intersect intersection_cardinality into inverse_beta_cdf inverse_normal_cdf invoker io is is_finite is_infinite is_json_scalar is_nan isolation jaccard_index join json_array json_array_contains json_array_get json_array_length json_exists json_extract json_extract_scalar json_format json_object json_parse json_query json_size json_value keep key keys kurtosis lag last last_day_of_month last_value lateral lead leading learn_classifier learn_libsvm_classifier learn_libsvm_regressor learn_regressor least left length level levenshtein_distance like limit line_interpolate_point line_interpolate_points line_locate_point listagg ln local localtime localtimestamp log log10 log2 logical lower lpad ltrim luhn_check make_set_digest map_agg map_concat map_entries map_filter map_from_entries map_keys map_union map_values map_zip_with match match_recognize matched matches materialized max max_by md5 measures merge merge_set_digest millisecond min min_by minute mod month multimap_agg multimap_from_entries murmur3 nan natural next nfc nfd nfkc nfkd ngrams no none none_match normal_cdf normalize not now nth_value ntile null nullif nulls numeric_histogram object objectid_timestamp of offset omit on one only option or order ordinality outer output over overflow parse_data_size parse_datetime parse_duration partition partitions passing past path pattern per percent_rank permute pi position pow power preceding prepare privileges properties prune qdigest_agg quarter quotes radians rand random range rank read recursive reduce reduce_agg refresh regexp_count regexp_extract regexp_extract_all regexp_like regexp_position regexp_replace regexp_split regr_intercept regr_slope regress rename render repeat repeatable replace reset respect restrict returning reverse revoke rgb right role roles rollback rollup round row_number rows rpad rtrim running scalar schema schemas second security seek select sequence serializable session set sets sha1 sha256 sha512 show shuffle sign simplify_geometry sin skewness skip slice some soundex spatial_partitioning spatial_partitions split split_part split_to_map split_to_multimap spooky_hash_v2_32 spooky_hash_v2_64 sqrt st_area st_asbinary st_astext st_boundary st_buffer st_centroid st_contains st_convexhull st_coorddim st_crosses st_difference st_dimension st_disjoint st_distance st_endpoint st_envelope st_envelopeaspts st_equals st_exteriorring st_geometries st_geometryfromtext st_geometryn st_geometrytype st_geomfrombinary st_interiorringn st_interiorrings st_intersection st_intersects st_isclosed st_isempty st_isring st_issimple st_isvalid st_length st_linefromtext st_linestring st_multipoint st_numgeometries st_numinteriorring st_numpoints st_overlaps st_point st_pointn st_points st_polygon st_relate st_startpoint st_symdifference st_touches st_union st_within st_x st_xmax st_xmin st_y st_ymax st_ymin start starts_with stats stddev stddev_pop stddev_samp string strpos subset substr substring sum system table tables tablesample tan tanh tdigest_agg text then ties timestamp_objectid timezone_hour timezone_minute to to_base to_base32 to_base64 to_base64url to_big_endian_32 to_big_endian_64 to_char to_date to_encoded_polyline to_geojson_geometry to_geometry to_hex to_ieee754_32 to_ieee754_64 to_iso8601 to_milliseconds to_spherical_geography to_timestamp to_unixtime to_utf8 trailing transaction transform transform_keys transform_values translate trim trim_array true truncate try try_cast type typeof uescape unbounded uncommitted unconditional union unique unknown unmatched unnest update upper url_decode url_encode url_extract_fragment url_extract_host url_extract_parameter url_extract_path url_extract_port url_extract_protocol url_extract_query use user using utf16 utf32 utf8 validate value value_at_quantile values values_at_quantiles var_pop var_samp variance verbose version view week week_of_year when where width_bucket wilson_interval_lower wilson_interval_upper window with with_timezone within without word_stem work wrapper write xxhash64 year year_of_week yow zip zip_with',
                ),
                builtin: s(
                    'array bigint bingtile boolean char codepoints color date decimal double function geometry hyperloglog int integer interval ipaddress joniregexp json json2016 jsonpath kdbtree likepattern map model objectid p4hyperloglog precision qdigest re2jregexp real regressor row setdigest smallint sphericalgeography tdigest time timestamp tinyint uuid varbinary varchar zone',
                ),
                atoms: s('false true null unknown'),
                operatorChars: /^[[\]|<>=!\-+*/%]/,
                dateSQL: s('date time timestamp zone'),
                support: s('decimallessFloat zerolessFloat hexNumber'),
            })
    })
})
var ea = Ue((Wu, Uu) => {
    ;(function (o) {
        typeof Wu == 'object' && typeof Uu == 'object'
            ? o(Re())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        o.defineMode('stylus', function (M) {
            for (
                var B = M.indentUnit,
                    X = '',
                    re = y(p),
                    ne = /^(a|b|i|s|col|em)$/i,
                    N = y(_),
                    F = y(s),
                    D = y(w),
                    V = y(h),
                    j = y(v),
                    J = z(v),
                    x = y(b),
                    K = y(C),
                    Y = y(g),
                    I = /^\s*([.]{2,3}|&&|\|\||\*\*|[?!=:]?=|[-+*\/%<>]=?|\?:|\~)/,
                    W = z(k),
                    le = y(c),
                    ye = new RegExp(/^\-(moz|ms|o|webkit)-/i),
                    q = y(d),
                    T = '',
                    de = {},
                    Ee,
                    fe,
                    xe,
                    pe;
                X.length < B;

            )
                X += ' '
            function De($, U) {
                if (
                    ((T = $.string.match(
                        /(^[\w-]+\s*=\s*$)|(^\s*[\w-]+\s*=\s*[\w-])|(^\s*(\.|#|@|\$|\&|\[|\d|\+|::?|\{|\>|~|\/)?\s*[\w-]*([a-z0-9-]|\*|\/\*)(\(|,)?)/,
                    )),
                    (U.context.line.firstWord = T ? T[0].replace(/^\s*/, '') : ''),
                    (U.context.line.indent = $.indentation()),
                    (Ee = $.peek()),
                    $.match('//'))
                )
                    return $.skipToEnd(), ['comment', 'comment']
                if ($.match('/*')) return (U.tokenize = Ne), Ne($, U)
                if (Ee == '"' || Ee == "'") return $.next(), (U.tokenize = Me(Ee)), U.tokenize($, U)
                if (Ee == '@') return $.next(), $.eatWhile(/[\w\\-]/), ['def', $.current()]
                if (Ee == '#') {
                    if (($.next(), $.match(/^[0-9a-f]{3}([0-9a-f]([0-9a-f]{2}){0,2})?\b(?!-)/i)))
                        return ['atom', 'atom']
                    if ($.match(/^[a-z][\w-]*/i)) return ['builtin', 'hash']
                }
                return $.match(ye)
                    ? ['meta', 'vendor-prefixes']
                    : $.match(/^-?[0-9]?\.?[0-9]/)
                      ? ($.eatWhile(/[a-z%]/i), ['number', 'unit'])
                      : Ee == '!'
                        ? ($.next(), [$.match(/^(important|optional)/i) ? 'keyword' : 'operator', 'important'])
                        : Ee == '.' && $.match(/^\.[a-z][\w-]*/i)
                          ? ['qualifier', 'qualifier']
                          : $.match(J)
                            ? ($.peek() == '(' && (U.tokenize = Fe), ['property', 'word'])
                            : $.match(/^[a-z][\w-]*\(/i)
                              ? ($.backUp(1), ['keyword', 'mixin'])
                              : $.match(/^(\+|-)[a-z][\w-]*\(/i)
                                ? ($.backUp(1), ['keyword', 'block-mixin'])
                                : $.string.match(/^\s*&/) && $.match(/^[-_]+[a-z][\w-]*/)
                                  ? ['qualifier', 'qualifier']
                                  : $.match(/^(\/|&)(-|_|:|\.|#|[a-z])/)
                                    ? ($.backUp(1), ['variable-3', 'reference'])
                                    : $.match(/^&{1}\s*$/)
                                      ? ['variable-3', 'reference']
                                      : $.match(W)
                                        ? ['operator', 'operator']
                                        : $.match(/^\$?[-_]*[a-z0-9]+[\w-]*/i)
                                          ? $.match(/^(\.|\[)[\w-\'\"\]]+/i, !1) && !O($.current())
                                              ? ($.match('.'), ['variable-2', 'variable-name'])
                                              : ['variable-2', 'word']
                                          : $.match(I)
                                            ? ['operator', $.current()]
                                            : /[:;,{}\[\]\(\)]/.test(Ee)
                                              ? ($.next(), [null, Ee])
                                              : ($.next(), [null, null])
            }
            function Ne($, U) {
                for (var se = !1, Ae; (Ae = $.next()) != null; ) {
                    if (se && Ae == '/') {
                        U.tokenize = null
                        break
                    }
                    se = Ae == '*'
                }
                return ['comment', 'comment']
            }
            function Me($) {
                return function (U, se) {
                    for (var Ae = !1, et; (et = U.next()) != null; ) {
                        if (et == $ && !Ae) {
                            $ == ')' && U.backUp(1)
                            break
                        }
                        Ae = !Ae && et == '\\'
                    }
                    return (et == $ || (!Ae && $ != ')')) && (se.tokenize = null), ['string', 'string']
                }
            }
            function Fe($, U) {
                return $.next(), $.match(/\s*[\"\')]/, !1) ? (U.tokenize = null) : (U.tokenize = Me(')')), [null, '(']
            }
            function Ge($, U, se, Ae) {
                ;(this.type = $), (this.indent = U), (this.prev = se), (this.line = Ae || { firstWord: '', indent: 0 })
            }
            function Le($, U, se, Ae) {
                return (Ae = Ae >= 0 ? Ae : B), ($.context = new Ge(se, U.indentation() + Ae, $.context)), se
            }
            function Je($, U) {
                var se = $.context.indent - B
                return (U = U || !1), ($.context = $.context.prev), U && ($.context.indent = se), $.context.type
            }
            function He($, U, se) {
                return de[se.context.type]($, U, se)
            }
            function $e($, U, se, Ae) {
                for (var et = Ae || 1; et > 0; et--) se.context = se.context.prev
                return He($, U, se)
            }
            function O($) {
                return $.toLowerCase() in re
            }
            function Z($) {
                return ($ = $.toLowerCase()), $ in N || $ in Y
            }
            function me($) {
                return $.toLowerCase() in le
            }
            function Be($) {
                return $.toLowerCase().match(ye)
            }
            function te($) {
                var U = $.toLowerCase(),
                    se = 'variable-2'
                return (
                    O($)
                        ? (se = 'tag')
                        : me($)
                          ? (se = 'block-keyword')
                          : Z($)
                            ? (se = 'property')
                            : U in D || U in q
                              ? (se = 'atom')
                              : U == 'return' || U in V
                                ? (se = 'keyword')
                                : $.match(/^[A-Z]/) && (se = 'string'),
                    se
                )
            }
            function ce($, U) {
                return (Ce(U) && ($ == '{' || $ == ']' || $ == 'hash' || $ == 'qualifier')) || $ == 'block-mixin'
            }
            function oe($, U) {
                return $ == '{' && U.match(/^\s*\$?[\w-]+/i, !1)
            }
            function je($, U) {
                return $ == ':' && U.match(/^[a-z-]+/, !1)
            }
            function ke($) {
                return $.sol() || $.string.match(new RegExp('^\\s*' + H($.current())))
            }
            function Ce($) {
                return $.eol() || $.match(/^\s*$/, !1)
            }
            function we($) {
                var U = /^\s*[-_]*[a-z0-9]+[\w-]*/i,
                    se = typeof $ == 'string' ? $.match(U) : $.string.match(U)
                return se ? se[0].replace(/^\s*/, '') : ''
            }
            return (
                (de.block = function ($, U, se) {
                    if (($ == 'comment' && ke(U)) || ($ == ',' && Ce(U)) || $ == 'mixin') return Le(se, U, 'block', 0)
                    if (oe($, U)) return Le(se, U, 'interpolation')
                    if (Ce(U) && $ == ']' && !/^\s*(\.|#|:|\[|\*|&)/.test(U.string) && !O(we(U)))
                        return Le(se, U, 'block', 0)
                    if (ce($, U)) return Le(se, U, 'block')
                    if ($ == '}' && Ce(U)) return Le(se, U, 'block', 0)
                    if ($ == 'variable-name')
                        return U.string.match(/^\s?\$[\w-\.\[\]\'\"]+$/) || me(we(U))
                            ? Le(se, U, 'variableName')
                            : Le(se, U, 'variableName', 0)
                    if ($ == '=') return !Ce(U) && !me(we(U)) ? Le(se, U, 'block', 0) : Le(se, U, 'block')
                    if ($ == '*' && (Ce(U) || U.match(/\s*(,|\.|#|\[|:|{)/, !1)))
                        return (pe = 'tag'), Le(se, U, 'block')
                    if (je($, U)) return Le(se, U, 'pseudo')
                    if (/@(font-face|media|supports|(-moz-)?document)/.test($))
                        return Le(se, U, Ce(U) ? 'block' : 'atBlock')
                    if (/@(-(moz|ms|o|webkit)-)?keyframes$/.test($)) return Le(se, U, 'keyframes')
                    if (/@extends?/.test($)) return Le(se, U, 'extend', 0)
                    if ($ && $.charAt(0) == '@')
                        return U.indentation() > 0 && Z(U.current().slice(1))
                            ? ((pe = 'variable-2'), 'block')
                            : /(@import|@require|@charset)/.test($)
                              ? Le(se, U, 'block', 0)
                              : Le(se, U, 'block')
                    if ($ == 'reference' && Ce(U)) return Le(se, U, 'block')
                    if ($ == '(') return Le(se, U, 'parens')
                    if ($ == 'vendor-prefixes') return Le(se, U, 'vendorPrefixes')
                    if ($ == 'word') {
                        var Ae = U.current()
                        if (((pe = te(Ae)), pe == 'property'))
                            return ke(U) ? Le(se, U, 'block', 0) : ((pe = 'atom'), 'block')
                        if (pe == 'tag') {
                            if (
                                (/embed|menu|pre|progress|sub|table/.test(Ae) && Z(we(U))) ||
                                U.string.match(new RegExp('\\[\\s*' + Ae + '|' + Ae + '\\s*\\]'))
                            )
                                return (pe = 'atom'), 'block'
                            if (
                                ne.test(Ae) &&
                                ((ke(U) && U.string.match(/=/)) ||
                                    (!ke(U) && !U.string.match(/^(\s*\.|#|\&|\[|\/|>|\*)/) && !O(we(U))))
                            )
                                return (pe = 'variable-2'), me(we(U)) ? 'block' : Le(se, U, 'block', 0)
                            if (Ce(U)) return Le(se, U, 'block')
                        }
                        if (pe == 'block-keyword')
                            return (pe = 'keyword'), U.current(/(if|unless)/) && !ke(U) ? 'block' : Le(se, U, 'block')
                        if (Ae == 'return') return Le(se, U, 'block', 0)
                        if (pe == 'variable-2' && U.string.match(/^\s?\$[\w-\.\[\]\'\"]+$/)) return Le(se, U, 'block')
                    }
                    return se.context.type
                }),
                (de.parens = function ($, U, se) {
                    if ($ == '(') return Le(se, U, 'parens')
                    if ($ == ')')
                        return se.context.prev.type == 'parens'
                            ? Je(se)
                            : (U.string.match(/^[a-z][\w-]*\(/i) && Ce(U)) ||
                                me(we(U)) ||
                                /(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(we(U)) ||
                                (!U.string.match(/^-?[a-z][\w-\.\[\]\'\"]*\s*=/) && O(we(U)))
                              ? Le(se, U, 'block')
                              : U.string.match(/^[\$-]?[a-z][\w-\.\[\]\'\"]*\s*=/) ||
                                  U.string.match(/^\s*(\(|\)|[0-9])/) ||
                                  U.string.match(/^\s+[a-z][\w-]*\(/i) ||
                                  U.string.match(/^\s+[\$-]?[a-z]/i)
                                ? Le(se, U, 'block', 0)
                                : Ce(U)
                                  ? Le(se, U, 'block')
                                  : Le(se, U, 'block', 0)
                    if (($ && $.charAt(0) == '@' && Z(U.current().slice(1)) && (pe = 'variable-2'), $ == 'word')) {
                        var Ae = U.current()
                        ;(pe = te(Ae)),
                            pe == 'tag' && ne.test(Ae) && (pe = 'variable-2'),
                            (pe == 'property' || Ae == 'to') && (pe = 'atom')
                    }
                    return $ == 'variable-name'
                        ? Le(se, U, 'variableName')
                        : je($, U)
                          ? Le(se, U, 'pseudo')
                          : se.context.type
                }),
                (de.vendorPrefixes = function ($, U, se) {
                    return $ == 'word' ? ((pe = 'property'), Le(se, U, 'block', 0)) : Je(se)
                }),
                (de.pseudo = function ($, U, se) {
                    return Z(we(U.string))
                        ? $e($, U, se)
                        : (U.match(/^[a-z-]+/), (pe = 'variable-3'), Ce(U) ? Le(se, U, 'block') : Je(se))
                }),
                (de.atBlock = function ($, U, se) {
                    if ($ == '(') return Le(se, U, 'atBlock_parens')
                    if (ce($, U)) return Le(se, U, 'block')
                    if (oe($, U)) return Le(se, U, 'interpolation')
                    if ($ == 'word') {
                        var Ae = U.current().toLowerCase()
                        if (
                            (/^(only|not|and|or)$/.test(Ae)
                                ? (pe = 'keyword')
                                : j.hasOwnProperty(Ae)
                                  ? (pe = 'tag')
                                  : K.hasOwnProperty(Ae)
                                    ? (pe = 'attribute')
                                    : x.hasOwnProperty(Ae)
                                      ? (pe = 'property')
                                      : F.hasOwnProperty(Ae)
                                        ? (pe = 'string-2')
                                        : (pe = te(U.current())),
                            pe == 'tag' && Ce(U))
                        )
                            return Le(se, U, 'block')
                    }
                    return $ == 'operator' && /^(not|and|or)$/.test(U.current()) && (pe = 'keyword'), se.context.type
                }),
                (de.atBlock_parens = function ($, U, se) {
                    if ($ == '{' || $ == '}') return se.context.type
                    if ($ == ')') return Ce(U) ? Le(se, U, 'block') : Le(se, U, 'atBlock')
                    if ($ == 'word') {
                        var Ae = U.current().toLowerCase()
                        return (
                            (pe = te(Ae)),
                            /^(max|min)/.test(Ae) && (pe = 'property'),
                            pe == 'tag' && (ne.test(Ae) ? (pe = 'variable-2') : (pe = 'atom')),
                            se.context.type
                        )
                    }
                    return de.atBlock($, U, se)
                }),
                (de.keyframes = function ($, U, se) {
                    return U.indentation() == '0' &&
                        (($ == '}' && ke(U)) || $ == ']' || $ == 'hash' || $ == 'qualifier' || O(U.current()))
                        ? $e($, U, se)
                        : $ == '{'
                          ? Le(se, U, 'keyframes')
                          : $ == '}'
                            ? ke(U)
                                ? Je(se, !0)
                                : Le(se, U, 'keyframes')
                            : $ == 'unit' && /^[0-9]+\%$/.test(U.current())
                              ? Le(se, U, 'keyframes')
                              : $ == 'word' && ((pe = te(U.current())), pe == 'block-keyword')
                                ? ((pe = 'keyword'), Le(se, U, 'keyframes'))
                                : /@(font-face|media|supports|(-moz-)?document)/.test($)
                                  ? Le(se, U, Ce(U) ? 'block' : 'atBlock')
                                  : $ == 'mixin'
                                    ? Le(se, U, 'block', 0)
                                    : se.context.type
                }),
                (de.interpolation = function ($, U, se) {
                    return (
                        $ == '{' && Je(se) && Le(se, U, 'block'),
                        $ == '}'
                            ? U.string.match(/^\s*(\.|#|:|\[|\*|&|>|~|\+|\/)/i) ||
                              (U.string.match(/^\s*[a-z]/i) && O(we(U)))
                                ? Le(se, U, 'block')
                                : !U.string.match(/^(\{|\s*\&)/) || U.match(/\s*[\w-]/, !1)
                                  ? Le(se, U, 'block', 0)
                                  : Le(se, U, 'block')
                            : $ == 'variable-name'
                              ? Le(se, U, 'variableName', 0)
                              : ($ == 'word' && ((pe = te(U.current())), pe == 'tag' && (pe = 'atom')), se.context.type)
                    )
                }),
                (de.extend = function ($, U, se) {
                    return $ == '[' || $ == '='
                        ? 'extend'
                        : $ == ']'
                          ? Je(se)
                          : $ == 'word'
                            ? ((pe = te(U.current())), 'extend')
                            : Je(se)
                }),
                (de.variableName = function ($, U, se) {
                    return $ == 'string' || $ == '[' || $ == ']' || U.current().match(/^(\.|\$)/)
                        ? (U.current().match(/^\.[\w-]+/i) && (pe = 'variable-2'), 'variableName')
                        : $e($, U, se)
                }),
                {
                    startState: function ($) {
                        return { tokenize: null, state: 'block', context: new Ge('block', $ || 0, null) }
                    },
                    token: function ($, U) {
                        return !U.tokenize && $.eatSpace()
                            ? null
                            : ((fe = (U.tokenize || De)($, U)),
                              fe && typeof fe == 'object' && ((xe = fe[1]), (fe = fe[0])),
                              (pe = fe),
                              (U.state = de[U.state](xe, $, U)),
                              pe)
                    },
                    indent: function ($, U, se) {
                        var Ae = $.context,
                            et = U && U.charAt(0),
                            zt = Ae.indent,
                            xt = we(U),
                            Mt = se.match(/^\s*/)[0].replace(/\t/g, X).length,
                            ge = $.context.prev ? $.context.prev.line.firstWord : '',
                            bt = $.context.prev ? $.context.prev.line.indent : Mt
                        return (
                            Ae.prev &&
                            ((et == '}' && (Ae.type == 'block' || Ae.type == 'atBlock' || Ae.type == 'keyframes')) ||
                                (et == ')' && (Ae.type == 'parens' || Ae.type == 'atBlock_parens')) ||
                                (et == '{' && Ae.type == 'at'))
                                ? (zt = Ae.indent - B)
                                : /(\})/.test(et) ||
                                  (/@|\$|\d/.test(et) ||
                                  /^\{/.test(U) ||
                                  /^\s*\/(\/|\*)/.test(U) ||
                                  /^\s*\/\*/.test(ge) ||
                                  /^\s*[\w-\.\[\]\'\"]+\s*(\?|:|\+)?=/i.test(U) ||
                                  /^(\+|-)?[a-z][\w-]*\(/i.test(U) ||
                                  /^return/.test(U) ||
                                  me(xt)
                                      ? (zt = Mt)
                                      : /(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(et) || O(xt)
                                        ? /\,\s*$/.test(ge)
                                            ? (zt = bt)
                                            : /^\s+/.test(se) && (/(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(ge) || O(ge))
                                              ? (zt = Mt <= bt ? bt : bt + B)
                                              : (zt = Mt)
                                        : !/,\s*$/.test(se) &&
                                          (Be(xt) || Z(xt)) &&
                                          (me(ge)
                                              ? (zt = Mt <= bt ? bt : bt + B)
                                              : /^\{/.test(ge)
                                                ? (zt = Mt <= bt ? Mt : bt + B)
                                                : Be(ge) || Z(ge)
                                                  ? (zt = Mt >= bt ? bt : Mt)
                                                  : /^(\.|#|:|\[|\*|&|@|\+|\-|>|~|\/)/.test(ge) ||
                                                      /=\s*$/.test(ge) ||
                                                      O(ge) ||
                                                      /^\$[\w-\.\[\]\'\"]/.test(ge)
                                                    ? (zt = bt + B)
                                                    : (zt = Mt))),
                            zt
                        )
                    },
                    electricChars: '}',
                    blockCommentStart: '/*',
                    blockCommentEnd: '*/',
                    blockCommentContinue: ' * ',
                    lineComment: '//',
                    fold: 'indent',
                }
            )
        })
        var p = [
                'a',
                'abbr',
                'address',
                'area',
                'article',
                'aside',
                'audio',
                'b',
                'base',
                'bdi',
                'bdo',
                'bgsound',
                'blockquote',
                'body',
                'br',
                'button',
                'canvas',
                'caption',
                'cite',
                'code',
                'col',
                'colgroup',
                'data',
                'datalist',
                'dd',
                'del',
                'details',
                'dfn',
                'div',
                'dl',
                'dt',
                'em',
                'embed',
                'fieldset',
                'figcaption',
                'figure',
                'footer',
                'form',
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
                'head',
                'header',
                'hgroup',
                'hr',
                'html',
                'i',
                'iframe',
                'img',
                'input',
                'ins',
                'kbd',
                'keygen',
                'label',
                'legend',
                'li',
                'link',
                'main',
                'map',
                'mark',
                'marquee',
                'menu',
                'menuitem',
                'meta',
                'meter',
                'nav',
                'nobr',
                'noframes',
                'noscript',
                'object',
                'ol',
                'optgroup',
                'option',
                'output',
                'p',
                'param',
                'pre',
                'progress',
                'q',
                'rp',
                'rt',
                'ruby',
                's',
                'samp',
                'script',
                'section',
                'select',
                'small',
                'source',
                'span',
                'strong',
                'style',
                'sub',
                'summary',
                'sup',
                'table',
                'tbody',
                'td',
                'textarea',
                'tfoot',
                'th',
                'thead',
                'time',
                'tr',
                'track',
                'u',
                'ul',
                'var',
                'video',
            ],
            v = ['domain', 'regexp', 'url-prefix', 'url'],
            C = ['all', 'aural', 'braille', 'handheld', 'print', 'projection', 'screen', 'tty', 'tv', 'embossed'],
            b = [
                'width',
                'min-width',
                'max-width',
                'height',
                'min-height',
                'max-height',
                'device-width',
                'min-device-width',
                'max-device-width',
                'device-height',
                'min-device-height',
                'max-device-height',
                'aspect-ratio',
                'min-aspect-ratio',
                'max-aspect-ratio',
                'device-aspect-ratio',
                'min-device-aspect-ratio',
                'max-device-aspect-ratio',
                'color',
                'min-color',
                'max-color',
                'color-index',
                'min-color-index',
                'max-color-index',
                'monochrome',
                'min-monochrome',
                'max-monochrome',
                'resolution',
                'min-resolution',
                'max-resolution',
                'scan',
                'grid',
                'dynamic-range',
                'video-dynamic-range',
            ],
            _ = [
                'align-content',
                'align-items',
                'align-self',
                'alignment-adjust',
                'alignment-baseline',
                'anchor-point',
                'animation',
                'animation-delay',
                'animation-direction',
                'animation-duration',
                'animation-fill-mode',
                'animation-iteration-count',
                'animation-name',
                'animation-play-state',
                'animation-timing-function',
                'appearance',
                'azimuth',
                'backface-visibility',
                'background',
                'background-attachment',
                'background-clip',
                'background-color',
                'background-image',
                'background-origin',
                'background-position',
                'background-repeat',
                'background-size',
                'baseline-shift',
                'binding',
                'bleed',
                'bookmark-label',
                'bookmark-level',
                'bookmark-state',
                'bookmark-target',
                'border',
                'border-bottom',
                'border-bottom-color',
                'border-bottom-left-radius',
                'border-bottom-right-radius',
                'border-bottom-style',
                'border-bottom-width',
                'border-collapse',
                'border-color',
                'border-image',
                'border-image-outset',
                'border-image-repeat',
                'border-image-slice',
                'border-image-source',
                'border-image-width',
                'border-left',
                'border-left-color',
                'border-left-style',
                'border-left-width',
                'border-radius',
                'border-right',
                'border-right-color',
                'border-right-style',
                'border-right-width',
                'border-spacing',
                'border-style',
                'border-top',
                'border-top-color',
                'border-top-left-radius',
                'border-top-right-radius',
                'border-top-style',
                'border-top-width',
                'border-width',
                'bottom',
                'box-decoration-break',
                'box-shadow',
                'box-sizing',
                'break-after',
                'break-before',
                'break-inside',
                'caption-side',
                'clear',
                'clip',
                'color',
                'color-profile',
                'column-count',
                'column-fill',
                'column-gap',
                'column-rule',
                'column-rule-color',
                'column-rule-style',
                'column-rule-width',
                'column-span',
                'column-width',
                'columns',
                'content',
                'counter-increment',
                'counter-reset',
                'crop',
                'cue',
                'cue-after',
                'cue-before',
                'cursor',
                'direction',
                'display',
                'dominant-baseline',
                'drop-initial-after-adjust',
                'drop-initial-after-align',
                'drop-initial-before-adjust',
                'drop-initial-before-align',
                'drop-initial-size',
                'drop-initial-value',
                'elevation',
                'empty-cells',
                'fit',
                'fit-position',
                'flex',
                'flex-basis',
                'flex-direction',
                'flex-flow',
                'flex-grow',
                'flex-shrink',
                'flex-wrap',
                'float',
                'float-offset',
                'flow-from',
                'flow-into',
                'font',
                'font-feature-settings',
                'font-family',
                'font-kerning',
                'font-language-override',
                'font-size',
                'font-size-adjust',
                'font-stretch',
                'font-style',
                'font-synthesis',
                'font-variant',
                'font-variant-alternates',
                'font-variant-caps',
                'font-variant-east-asian',
                'font-variant-ligatures',
                'font-variant-numeric',
                'font-variant-position',
                'font-weight',
                'grid',
                'grid-area',
                'grid-auto-columns',
                'grid-auto-flow',
                'grid-auto-position',
                'grid-auto-rows',
                'grid-column',
                'grid-column-end',
                'grid-column-start',
                'grid-row',
                'grid-row-end',
                'grid-row-start',
                'grid-template',
                'grid-template-areas',
                'grid-template-columns',
                'grid-template-rows',
                'hanging-punctuation',
                'height',
                'hyphens',
                'icon',
                'image-orientation',
                'image-rendering',
                'image-resolution',
                'inline-box-align',
                'justify-content',
                'left',
                'letter-spacing',
                'line-break',
                'line-height',
                'line-stacking',
                'line-stacking-ruby',
                'line-stacking-shift',
                'line-stacking-strategy',
                'list-style',
                'list-style-image',
                'list-style-position',
                'list-style-type',
                'margin',
                'margin-bottom',
                'margin-left',
                'margin-right',
                'margin-top',
                'marker-offset',
                'marks',
                'marquee-direction',
                'marquee-loop',
                'marquee-play-count',
                'marquee-speed',
                'marquee-style',
                'max-height',
                'max-width',
                'min-height',
                'min-width',
                'move-to',
                'nav-down',
                'nav-index',
                'nav-left',
                'nav-right',
                'nav-up',
                'object-fit',
                'object-position',
                'opacity',
                'order',
                'orphans',
                'outline',
                'outline-color',
                'outline-offset',
                'outline-style',
                'outline-width',
                'overflow',
                'overflow-style',
                'overflow-wrap',
                'overflow-x',
                'overflow-y',
                'padding',
                'padding-bottom',
                'padding-left',
                'padding-right',
                'padding-top',
                'page',
                'page-break-after',
                'page-break-before',
                'page-break-inside',
                'page-policy',
                'pause',
                'pause-after',
                'pause-before',
                'perspective',
                'perspective-origin',
                'pitch',
                'pitch-range',
                'play-during',
                'position',
                'presentation-level',
                'punctuation-trim',
                'quotes',
                'region-break-after',
                'region-break-before',
                'region-break-inside',
                'region-fragment',
                'rendering-intent',
                'resize',
                'rest',
                'rest-after',
                'rest-before',
                'richness',
                'right',
                'rotation',
                'rotation-point',
                'ruby-align',
                'ruby-overhang',
                'ruby-position',
                'ruby-span',
                'shape-image-threshold',
                'shape-inside',
                'shape-margin',
                'shape-outside',
                'size',
                'speak',
                'speak-as',
                'speak-header',
                'speak-numeral',
                'speak-punctuation',
                'speech-rate',
                'stress',
                'string-set',
                'tab-size',
                'table-layout',
                'target',
                'target-name',
                'target-new',
                'target-position',
                'text-align',
                'text-align-last',
                'text-decoration',
                'text-decoration-color',
                'text-decoration-line',
                'text-decoration-skip',
                'text-decoration-style',
                'text-emphasis',
                'text-emphasis-color',
                'text-emphasis-position',
                'text-emphasis-style',
                'text-height',
                'text-indent',
                'text-justify',
                'text-outline',
                'text-overflow',
                'text-shadow',
                'text-size-adjust',
                'text-space-collapse',
                'text-transform',
                'text-underline-position',
                'text-wrap',
                'top',
                'transform',
                'transform-origin',
                'transform-style',
                'transition',
                'transition-delay',
                'transition-duration',
                'transition-property',
                'transition-timing-function',
                'unicode-bidi',
                'vertical-align',
                'visibility',
                'voice-balance',
                'voice-duration',
                'voice-family',
                'voice-pitch',
                'voice-range',
                'voice-rate',
                'voice-stress',
                'voice-volume',
                'volume',
                'white-space',
                'widows',
                'width',
                'will-change',
                'word-break',
                'word-spacing',
                'word-wrap',
                'z-index',
                'clip-path',
                'clip-rule',
                'mask',
                'enable-background',
                'filter',
                'flood-color',
                'flood-opacity',
                'lighting-color',
                'stop-color',
                'stop-opacity',
                'pointer-events',
                'color-interpolation',
                'color-interpolation-filters',
                'color-rendering',
                'fill',
                'fill-opacity',
                'fill-rule',
                'image-rendering',
                'marker',
                'marker-end',
                'marker-mid',
                'marker-start',
                'shape-rendering',
                'stroke',
                'stroke-dasharray',
                'stroke-dashoffset',
                'stroke-linecap',
                'stroke-linejoin',
                'stroke-miterlimit',
                'stroke-opacity',
                'stroke-width',
                'text-rendering',
                'baseline-shift',
                'dominant-baseline',
                'glyph-orientation-horizontal',
                'glyph-orientation-vertical',
                'text-anchor',
                'writing-mode',
                'font-smoothing',
                'osx-font-smoothing',
            ],
            s = [
                'scrollbar-arrow-color',
                'scrollbar-base-color',
                'scrollbar-dark-shadow-color',
                'scrollbar-face-color',
                'scrollbar-highlight-color',
                'scrollbar-shadow-color',
                'scrollbar-3d-light-color',
                'scrollbar-track-color',
                'shape-inside',
                'searchfield-cancel-button',
                'searchfield-decoration',
                'searchfield-results-button',
                'searchfield-results-decoration',
                'zoom',
            ],
            g = [
                'font-family',
                'src',
                'unicode-range',
                'font-variant',
                'font-feature-settings',
                'font-stretch',
                'font-weight',
                'font-style',
            ],
            h = [
                'aliceblue',
                'antiquewhite',
                'aqua',
                'aquamarine',
                'azure',
                'beige',
                'bisque',
                'black',
                'blanchedalmond',
                'blue',
                'blueviolet',
                'brown',
                'burlywood',
                'cadetblue',
                'chartreuse',
                'chocolate',
                'coral',
                'cornflowerblue',
                'cornsilk',
                'crimson',
                'cyan',
                'darkblue',
                'darkcyan',
                'darkgoldenrod',
                'darkgray',
                'darkgreen',
                'darkkhaki',
                'darkmagenta',
                'darkolivegreen',
                'darkorange',
                'darkorchid',
                'darkred',
                'darksalmon',
                'darkseagreen',
                'darkslateblue',
                'darkslategray',
                'darkturquoise',
                'darkviolet',
                'deeppink',
                'deepskyblue',
                'dimgray',
                'dodgerblue',
                'firebrick',
                'floralwhite',
                'forestgreen',
                'fuchsia',
                'gainsboro',
                'ghostwhite',
                'gold',
                'goldenrod',
                'gray',
                'grey',
                'green',
                'greenyellow',
                'honeydew',
                'hotpink',
                'indianred',
                'indigo',
                'ivory',
                'khaki',
                'lavender',
                'lavenderblush',
                'lawngreen',
                'lemonchiffon',
                'lightblue',
                'lightcoral',
                'lightcyan',
                'lightgoldenrodyellow',
                'lightgray',
                'lightgreen',
                'lightpink',
                'lightsalmon',
                'lightseagreen',
                'lightskyblue',
                'lightslategray',
                'lightsteelblue',
                'lightyellow',
                'lime',
                'limegreen',
                'linen',
                'magenta',
                'maroon',
                'mediumaquamarine',
                'mediumblue',
                'mediumorchid',
                'mediumpurple',
                'mediumseagreen',
                'mediumslateblue',
                'mediumspringgreen',
                'mediumturquoise',
                'mediumvioletred',
                'midnightblue',
                'mintcream',
                'mistyrose',
                'moccasin',
                'navajowhite',
                'navy',
                'oldlace',
                'olive',
                'olivedrab',
                'orange',
                'orangered',
                'orchid',
                'palegoldenrod',
                'palegreen',
                'paleturquoise',
                'palevioletred',
                'papayawhip',
                'peachpuff',
                'peru',
                'pink',
                'plum',
                'powderblue',
                'purple',
                'rebeccapurple',
                'red',
                'rosybrown',
                'royalblue',
                'saddlebrown',
                'salmon',
                'sandybrown',
                'seagreen',
                'seashell',
                'sienna',
                'silver',
                'skyblue',
                'slateblue',
                'slategray',
                'snow',
                'springgreen',
                'steelblue',
                'tan',
                'teal',
                'thistle',
                'tomato',
                'turquoise',
                'violet',
                'wheat',
                'white',
                'whitesmoke',
                'yellow',
                'yellowgreen',
            ],
            w = [
                'above',
                'absolute',
                'activeborder',
                'additive',
                'activecaption',
                'afar',
                'after-white-space',
                'ahead',
                'alias',
                'all',
                'all-scroll',
                'alphabetic',
                'alternate',
                'always',
                'amharic',
                'amharic-abegede',
                'antialiased',
                'appworkspace',
                'arabic-indic',
                'armenian',
                'asterisks',
                'attr',
                'auto',
                'avoid',
                'avoid-column',
                'avoid-page',
                'avoid-region',
                'background',
                'backwards',
                'baseline',
                'below',
                'bidi-override',
                'binary',
                'bengali',
                'blink',
                'block',
                'block-axis',
                'bold',
                'bolder',
                'border',
                'border-box',
                'both',
                'bottom',
                'break',
                'break-all',
                'break-word',
                'bullets',
                'button',
                'buttonface',
                'buttonhighlight',
                'buttonshadow',
                'buttontext',
                'calc',
                'cambodian',
                'capitalize',
                'caps-lock-indicator',
                'caption',
                'captiontext',
                'caret',
                'cell',
                'center',
                'checkbox',
                'circle',
                'cjk-decimal',
                'cjk-earthly-branch',
                'cjk-heavenly-stem',
                'cjk-ideographic',
                'clear',
                'clip',
                'close-quote',
                'col-resize',
                'collapse',
                'column',
                'compact',
                'condensed',
                'conic-gradient',
                'contain',
                'content',
                'contents',
                'content-box',
                'context-menu',
                'continuous',
                'copy',
                'counter',
                'counters',
                'cover',
                'crop',
                'cross',
                'crosshair',
                'currentcolor',
                'cursive',
                'cyclic',
                'dashed',
                'decimal',
                'decimal-leading-zero',
                'default',
                'default-button',
                'destination-atop',
                'destination-in',
                'destination-out',
                'destination-over',
                'devanagari',
                'disc',
                'discard',
                'disclosure-closed',
                'disclosure-open',
                'document',
                'dot-dash',
                'dot-dot-dash',
                'dotted',
                'double',
                'down',
                'e-resize',
                'ease',
                'ease-in',
                'ease-in-out',
                'ease-out',
                'element',
                'ellipse',
                'ellipsis',
                'embed',
                'end',
                'ethiopic',
                'ethiopic-abegede',
                'ethiopic-abegede-am-et',
                'ethiopic-abegede-gez',
                'ethiopic-abegede-ti-er',
                'ethiopic-abegede-ti-et',
                'ethiopic-halehame-aa-er',
                'ethiopic-halehame-aa-et',
                'ethiopic-halehame-am-et',
                'ethiopic-halehame-gez',
                'ethiopic-halehame-om-et',
                'ethiopic-halehame-sid-et',
                'ethiopic-halehame-so-et',
                'ethiopic-halehame-ti-er',
                'ethiopic-halehame-ti-et',
                'ethiopic-halehame-tig',
                'ethiopic-numeric',
                'ew-resize',
                'expanded',
                'extends',
                'extra-condensed',
                'extra-expanded',
                'fantasy',
                'fast',
                'fill',
                'fixed',
                'flat',
                'flex',
                'footnotes',
                'forwards',
                'from',
                'geometricPrecision',
                'georgian',
                'graytext',
                'groove',
                'gujarati',
                'gurmukhi',
                'hand',
                'hangul',
                'hangul-consonant',
                'hebrew',
                'help',
                'hidden',
                'hide',
                'high',
                'higher',
                'highlight',
                'highlighttext',
                'hiragana',
                'hiragana-iroha',
                'horizontal',
                'hsl',
                'hsla',
                'icon',
                'ignore',
                'inactiveborder',
                'inactivecaption',
                'inactivecaptiontext',
                'infinite',
                'infobackground',
                'infotext',
                'inherit',
                'initial',
                'inline',
                'inline-axis',
                'inline-block',
                'inline-flex',
                'inline-table',
                'inset',
                'inside',
                'intrinsic',
                'invert',
                'italic',
                'japanese-formal',
                'japanese-informal',
                'justify',
                'kannada',
                'katakana',
                'katakana-iroha',
                'keep-all',
                'khmer',
                'korean-hangul-formal',
                'korean-hanja-formal',
                'korean-hanja-informal',
                'landscape',
                'lao',
                'large',
                'larger',
                'left',
                'level',
                'lighter',
                'line-through',
                'linear',
                'linear-gradient',
                'lines',
                'list-item',
                'listbox',
                'listitem',
                'local',
                'logical',
                'loud',
                'lower',
                'lower-alpha',
                'lower-armenian',
                'lower-greek',
                'lower-hexadecimal',
                'lower-latin',
                'lower-norwegian',
                'lower-roman',
                'lowercase',
                'ltr',
                'malayalam',
                'match',
                'matrix',
                'matrix3d',
                'media-play-button',
                'media-slider',
                'media-sliderthumb',
                'media-volume-slider',
                'media-volume-sliderthumb',
                'medium',
                'menu',
                'menulist',
                'menulist-button',
                'menutext',
                'message-box',
                'middle',
                'min-intrinsic',
                'mix',
                'mongolian',
                'monospace',
                'move',
                'multiple',
                'myanmar',
                'n-resize',
                'narrower',
                'ne-resize',
                'nesw-resize',
                'no-close-quote',
                'no-drop',
                'no-open-quote',
                'no-repeat',
                'none',
                'normal',
                'not-allowed',
                'nowrap',
                'ns-resize',
                'numbers',
                'numeric',
                'nw-resize',
                'nwse-resize',
                'oblique',
                'octal',
                'open-quote',
                'optimizeLegibility',
                'optimizeSpeed',
                'oriya',
                'oromo',
                'outset',
                'outside',
                'outside-shape',
                'overlay',
                'overline',
                'padding',
                'padding-box',
                'painted',
                'page',
                'paused',
                'persian',
                'perspective',
                'plus-darker',
                'plus-lighter',
                'pointer',
                'polygon',
                'portrait',
                'pre',
                'pre-line',
                'pre-wrap',
                'preserve-3d',
                'progress',
                'push-button',
                'radial-gradient',
                'radio',
                'read-only',
                'read-write',
                'read-write-plaintext-only',
                'rectangle',
                'region',
                'relative',
                'repeat',
                'repeating-linear-gradient',
                'repeating-radial-gradient',
                'repeating-conic-gradient',
                'repeat-x',
                'repeat-y',
                'reset',
                'reverse',
                'rgb',
                'rgba',
                'ridge',
                'right',
                'rotate',
                'rotate3d',
                'rotateX',
                'rotateY',
                'rotateZ',
                'round',
                'row-resize',
                'rtl',
                'run-in',
                'running',
                's-resize',
                'sans-serif',
                'scale',
                'scale3d',
                'scaleX',
                'scaleY',
                'scaleZ',
                'scroll',
                'scrollbar',
                'scroll-position',
                'se-resize',
                'searchfield',
                'searchfield-cancel-button',
                'searchfield-decoration',
                'searchfield-results-button',
                'searchfield-results-decoration',
                'semi-condensed',
                'semi-expanded',
                'separate',
                'serif',
                'show',
                'sidama',
                'simp-chinese-formal',
                'simp-chinese-informal',
                'single',
                'skew',
                'skewX',
                'skewY',
                'skip-white-space',
                'slide',
                'slider-horizontal',
                'slider-vertical',
                'sliderthumb-horizontal',
                'sliderthumb-vertical',
                'slow',
                'small',
                'small-caps',
                'small-caption',
                'smaller',
                'solid',
                'somali',
                'source-atop',
                'source-in',
                'source-out',
                'source-over',
                'space',
                'spell-out',
                'square',
                'square-button',
                'standard',
                'start',
                'static',
                'status-bar',
                'stretch',
                'stroke',
                'sub',
                'subpixel-antialiased',
                'super',
                'sw-resize',
                'symbolic',
                'symbols',
                'table',
                'table-caption',
                'table-cell',
                'table-column',
                'table-column-group',
                'table-footer-group',
                'table-header-group',
                'table-row',
                'table-row-group',
                'tamil',
                'telugu',
                'text',
                'text-bottom',
                'text-top',
                'textarea',
                'textfield',
                'thai',
                'thick',
                'thin',
                'threeddarkshadow',
                'threedface',
                'threedhighlight',
                'threedlightshadow',
                'threedshadow',
                'tibetan',
                'tigre',
                'tigrinya-er',
                'tigrinya-er-abegede',
                'tigrinya-et',
                'tigrinya-et-abegede',
                'to',
                'top',
                'trad-chinese-formal',
                'trad-chinese-informal',
                'translate',
                'translate3d',
                'translateX',
                'translateY',
                'translateZ',
                'transparent',
                'ultra-condensed',
                'ultra-expanded',
                'underline',
                'up',
                'upper-alpha',
                'upper-armenian',
                'upper-greek',
                'upper-hexadecimal',
                'upper-latin',
                'upper-norwegian',
                'upper-roman',
                'uppercase',
                'urdu',
                'url',
                'var',
                'vertical',
                'vertical-text',
                'visible',
                'visibleFill',
                'visiblePainted',
                'visibleStroke',
                'visual',
                'w-resize',
                'wait',
                'wave',
                'wider',
                'window',
                'windowframe',
                'windowtext',
                'words',
                'x-large',
                'x-small',
                'xor',
                'xx-large',
                'xx-small',
                'bicubic',
                'optimizespeed',
                'grayscale',
                'row',
                'row-reverse',
                'wrap',
                'wrap-reverse',
                'column-reverse',
                'flex-start',
                'flex-end',
                'space-between',
                'space-around',
                'unset',
            ],
            k = ['in', 'and', 'or', 'not', 'is not', 'is a', 'is', 'isnt', 'defined', 'if unless'],
            c = ['for', 'if', 'else', 'unless', 'from', 'to'],
            d = ['null', 'true', 'false', 'href', 'title', 'type', 'not-allowed', 'readonly', 'disabled'],
            S = ['@font-face', '@keyframes', '@media', '@viewport', '@page', '@host', '@supports', '@block', '@css'],
            E = p.concat(v, C, b, _, s, h, w, g, k, c, d, S)
        function z(M) {
            return (
                (M = M.sort(function (B, X) {
                    return X > B
                })),
                new RegExp('^((' + M.join(')|(') + '))\\b')
            )
        }
        function y(M) {
            for (var B = {}, X = 0; X < M.length; ++X) B[M[X]] = !0
            return B
        }
        function H(M) {
            return M.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
        }
        o.registerHelper('hintWords', 'stylus', E), o.defineMIME('text/x-styl', 'stylus')
    })
})
var Gu = Ue(($u, Ku) => {
    ;(function (o) {
        typeof $u == 'object' && typeof Ku == 'object'
            ? o(Re())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        function p(N) {
            for (var F = {}, D = 0; D < N.length; D++) F[N[D]] = !0
            return F
        }
        var v = p([
                '_',
                'var',
                'let',
                'actor',
                'class',
                'enum',
                'extension',
                'import',
                'protocol',
                'struct',
                'func',
                'typealias',
                'associatedtype',
                'open',
                'public',
                'internal',
                'fileprivate',
                'private',
                'deinit',
                'init',
                'new',
                'override',
                'self',
                'subscript',
                'super',
                'convenience',
                'dynamic',
                'final',
                'indirect',
                'lazy',
                'required',
                'static',
                'unowned',
                'unowned(safe)',
                'unowned(unsafe)',
                'weak',
                'as',
                'is',
                'break',
                'case',
                'continue',
                'default',
                'else',
                'fallthrough',
                'for',
                'guard',
                'if',
                'in',
                'repeat',
                'switch',
                'where',
                'while',
                'defer',
                'return',
                'inout',
                'mutating',
                'nonmutating',
                'isolated',
                'nonisolated',
                'catch',
                'do',
                'rethrows',
                'throw',
                'throws',
                'async',
                'await',
                'try',
                'didSet',
                'get',
                'set',
                'willSet',
                'assignment',
                'associativity',
                'infix',
                'left',
                'none',
                'operator',
                'postfix',
                'precedence',
                'precedencegroup',
                'prefix',
                'right',
                'Any',
                'AnyObject',
                'Type',
                'dynamicType',
                'Self',
                'Protocol',
                '__COLUMN__',
                '__FILE__',
                '__FUNCTION__',
                '__LINE__',
            ]),
            C = p([
                'var',
                'let',
                'actor',
                'class',
                'enum',
                'extension',
                'import',
                'protocol',
                'struct',
                'func',
                'typealias',
                'associatedtype',
                'for',
            ]),
            b = p(['true', 'false', 'nil', 'self', 'super', '_']),
            _ = p([
                'Array',
                'Bool',
                'Character',
                'Dictionary',
                'Double',
                'Float',
                'Int',
                'Int8',
                'Int16',
                'Int32',
                'Int64',
                'Never',
                'Optional',
                'Set',
                'String',
                'UInt8',
                'UInt16',
                'UInt32',
                'UInt64',
                'Void',
            ]),
            s = '+-/*%=|&<>~^?!',
            g = ':;,.(){}[]',
            h = /^\-?0b[01][01_]*/,
            w = /^\-?0o[0-7][0-7_]*/,
            k = /^\-?0x[\dA-Fa-f][\dA-Fa-f_]*(?:(?:\.[\dA-Fa-f][\dA-Fa-f_]*)?[Pp]\-?\d[\d_]*)?/,
            c = /^\-?\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee]\-?\d[\d_]*)?/,
            d = /^\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1/,
            S = /^\.(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/,
            E = /^\#[A-Za-z]+/,
            z = /^@(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/
        function y(N, F, D) {
            if ((N.sol() && (F.indented = N.indentation()), N.eatSpace())) return null
            var V = N.peek()
            if (V == '/') {
                if (N.match('//')) return N.skipToEnd(), 'comment'
                if (N.match('/*')) return F.tokenize.push(B), B(N, F)
            }
            if (N.match(E)) return 'builtin'
            if (N.match(z)) return 'attribute'
            if (N.match(h) || N.match(w) || N.match(k) || N.match(c)) return 'number'
            if (N.match(S)) return 'property'
            if (s.indexOf(V) > -1) return N.next(), 'operator'
            if (g.indexOf(V) > -1) return N.next(), N.match('..'), 'punctuation'
            var j
            if ((j = N.match(/("""|"|')/))) {
                var J = M.bind(null, j[0])
                return F.tokenize.push(J), J(N, F)
            }
            if (N.match(d)) {
                var x = N.current()
                return _.hasOwnProperty(x)
                    ? 'variable-2'
                    : b.hasOwnProperty(x)
                      ? 'atom'
                      : v.hasOwnProperty(x)
                        ? (C.hasOwnProperty(x) && (F.prev = 'define'), 'keyword')
                        : D == 'define'
                          ? 'def'
                          : 'variable'
            }
            return N.next(), null
        }
        function H() {
            var N = 0
            return function (F, D, V) {
                var j = y(F, D, V)
                if (j == 'punctuation') {
                    if (F.current() == '(') ++N
                    else if (F.current() == ')') {
                        if (N == 0) return F.backUp(1), D.tokenize.pop(), D.tokenize[D.tokenize.length - 1](F, D)
                        --N
                    }
                }
                return j
            }
        }
        function M(N, F, D) {
            for (var V = N.length == 1, j, J = !1; (j = F.peek()); )
                if (J) {
                    if ((F.next(), j == '(')) return D.tokenize.push(H()), 'string'
                    J = !1
                } else {
                    if (F.match(N)) return D.tokenize.pop(), 'string'
                    F.next(), (J = j == '\\')
                }
            return V && D.tokenize.pop(), 'string'
        }
        function B(N, F) {
            for (var D; (D = N.next()); )
                if (D === '/' && N.eat('*')) F.tokenize.push(B)
                else if (D === '*' && N.eat('/')) {
                    F.tokenize.pop()
                    break
                }
            return 'comment'
        }
        function X(N, F, D) {
            ;(this.prev = N), (this.align = F), (this.indented = D)
        }
        function re(N, F) {
            var D = F.match(/^\s*($|\/[\/\*])/, !1) ? null : F.column() + 1
            N.context = new X(N.context, D, N.indented)
        }
        function ne(N) {
            N.context && ((N.indented = N.context.indented), (N.context = N.context.prev))
        }
        o.defineMode('swift', function (N) {
            return {
                startState: function () {
                    return { prev: null, context: null, indented: 0, tokenize: [] }
                },
                token: function (F, D) {
                    var V = D.prev
                    D.prev = null
                    var j = D.tokenize[D.tokenize.length - 1] || y,
                        J = j(F, D, V)
                    if ((!J || J == 'comment' ? (D.prev = V) : D.prev || (D.prev = J), J == 'punctuation')) {
                        var x = /[\(\[\{]|([\]\)\}])/.exec(F.current())
                        x && (x[1] ? ne : re)(D, F)
                    }
                    return J
                },
                indent: function (F, D) {
                    var V = F.context
                    if (!V) return 0
                    var j = /^[\]\}\)]/.test(D)
                    return V.align != null ? V.align - (j ? 1 : 0) : V.indented + (j ? 0 : N.indentUnit)
                },
                electricInput: /^\s*[\)\}\]]$/,
                lineComment: '//',
                blockCommentStart: '/*',
                blockCommentEnd: '*/',
                fold: 'brace',
                closeBrackets: '()[]{}\'\'""``',
            }
        }),
            o.defineMIME('text/x-swift', 'swift')
    })
})
var Yu = Ue((Zu, Xu) => {
    ;(function (o) {
        typeof Zu == 'object' && typeof Xu == 'object'
            ? o(Re())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        o.defineMode('coffeescript', function (p, v) {
            var C = 'error'
            function b(F) {
                return new RegExp('^((' + F.join(')|(') + '))\\b')
            }
            var _ =
                    /^(?:->|=>|\+[+=]?|-[\-=]?|\*[\*=]?|\/[\/=]?|[=!]=|<[><]?=?|>>?=?|%=?|&=?|\|=?|\^=?|\~|!|\?|(or|and|\|\||&&|\?)=)/,
                s = /^(?:[()\[\]{},:`=;]|\.\.?\.?)/,
                g = /^[_A-Za-z$][_A-Za-z$0-9]*/,
                h = /^@[_A-Za-z$][_A-Za-z$0-9]*/,
                w = b(['and', 'or', 'not', 'is', 'isnt', 'in', 'instanceof', 'typeof']),
                k = ['for', 'while', 'loop', 'if', 'unless', 'else', 'switch', 'try', 'catch', 'finally', 'class'],
                c = [
                    'break',
                    'by',
                    'continue',
                    'debugger',
                    'delete',
                    'do',
                    'in',
                    'of',
                    'new',
                    'return',
                    'then',
                    'this',
                    '@',
                    'throw',
                    'when',
                    'until',
                    'extends',
                ],
                d = b(k.concat(c))
            k = b(k)
            var S = /^('{3}|\"{3}|['\"])/,
                E = /^(\/{3}|\/)/,
                z = ['Infinity', 'NaN', 'undefined', 'null', 'true', 'false', 'on', 'off', 'yes', 'no'],
                y = b(z)
            function H(F, D) {
                if (F.sol()) {
                    D.scope.align === null && (D.scope.align = !1)
                    var V = D.scope.offset
                    if (F.eatSpace()) {
                        var j = F.indentation()
                        return j > V && D.scope.type == 'coffee' ? 'indent' : j < V ? 'dedent' : null
                    } else V > 0 && re(F, D)
                }
                if (F.eatSpace()) return null
                var J = F.peek()
                if (F.match('####')) return F.skipToEnd(), 'comment'
                if (F.match('###')) return (D.tokenize = B), D.tokenize(F, D)
                if (J === '#') return F.skipToEnd(), 'comment'
                if (F.match(/^-?[0-9\.]/, !1)) {
                    var x = !1
                    if (
                        (F.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i) && (x = !0),
                        F.match(/^-?\d+\.\d*/) && (x = !0),
                        F.match(/^-?\.\d+/) && (x = !0),
                        x)
                    )
                        return F.peek() == '.' && F.backUp(1), 'number'
                    var K = !1
                    if (
                        (F.match(/^-?0x[0-9a-f]+/i) && (K = !0),
                        F.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/) && (K = !0),
                        F.match(/^-?0(?![\dx])/i) && (K = !0),
                        K)
                    )
                        return 'number'
                }
                if (F.match(S)) return (D.tokenize = M(F.current(), !1, 'string')), D.tokenize(F, D)
                if (F.match(E)) {
                    if (F.current() != '/' || F.match(/^.*\//, !1))
                        return (D.tokenize = M(F.current(), !0, 'string-2')), D.tokenize(F, D)
                    F.backUp(1)
                }
                return F.match(_) || F.match(w)
                    ? 'operator'
                    : F.match(s)
                      ? 'punctuation'
                      : F.match(y)
                        ? 'atom'
                        : F.match(h) || (D.prop && F.match(g))
                          ? 'property'
                          : F.match(d)
                            ? 'keyword'
                            : F.match(g)
                              ? 'variable'
                              : (F.next(), C)
            }
            function M(F, D, V) {
                return function (j, J) {
                    for (; !j.eol(); )
                        if ((j.eatWhile(/[^'"\/\\]/), j.eat('\\'))) {
                            if ((j.next(), D && j.eol())) return V
                        } else {
                            if (j.match(F)) return (J.tokenize = H), V
                            j.eat(/['"\/]/)
                        }
                    return D && (v.singleLineStringErrors ? (V = C) : (J.tokenize = H)), V
                }
            }
            function B(F, D) {
                for (; !F.eol(); ) {
                    if ((F.eatWhile(/[^#]/), F.match('###'))) {
                        D.tokenize = H
                        break
                    }
                    F.eatWhile('#')
                }
                return 'comment'
            }
            function X(F, D, V) {
                V = V || 'coffee'
                for (var j = 0, J = !1, x = null, K = D.scope; K; K = K.prev)
                    if (K.type === 'coffee' || K.type == '}') {
                        j = K.offset + p.indentUnit
                        break
                    }
                V !== 'coffee'
                    ? ((J = null), (x = F.column() + F.current().length))
                    : D.scope.align && (D.scope.align = !1),
                    (D.scope = { offset: j, type: V, prev: D.scope, align: J, alignOffset: x })
            }
            function re(F, D) {
                if (D.scope.prev)
                    if (D.scope.type === 'coffee') {
                        for (var V = F.indentation(), j = !1, J = D.scope; J; J = J.prev)
                            if (V === J.offset) {
                                j = !0
                                break
                            }
                        if (!j) return !0
                        for (; D.scope.prev && D.scope.offset !== V; ) D.scope = D.scope.prev
                        return !1
                    } else return (D.scope = D.scope.prev), !1
            }
            function ne(F, D) {
                var V = D.tokenize(F, D),
                    j = F.current()
                j === 'return' && (D.dedent = !0),
                    (((j === '->' || j === '=>') && F.eol()) || V === 'indent') && X(F, D)
                var J = '[({'.indexOf(j)
                if (
                    (J !== -1 && X(F, D, '])}'.slice(J, J + 1)),
                    k.exec(j) && X(F, D),
                    j == 'then' && re(F, D),
                    V === 'dedent' && re(F, D))
                )
                    return C
                if (((J = '])}'.indexOf(j)), J !== -1)) {
                    for (; D.scope.type == 'coffee' && D.scope.prev; ) D.scope = D.scope.prev
                    D.scope.type == j && (D.scope = D.scope.prev)
                }
                return (
                    D.dedent &&
                        F.eol() &&
                        (D.scope.type == 'coffee' && D.scope.prev && (D.scope = D.scope.prev), (D.dedent = !1)),
                    V
                )
            }
            var N = {
                startState: function (F) {
                    return {
                        tokenize: H,
                        scope: { offset: F || 0, type: 'coffee', prev: null, align: !1 },
                        prop: !1,
                        dedent: 0,
                    }
                },
                token: function (F, D) {
                    var V = D.scope.align === null && D.scope
                    V && F.sol() && (V.align = !1)
                    var j = ne(F, D)
                    return (
                        j &&
                            j != 'comment' &&
                            (V && (V.align = !0), (D.prop = j == 'punctuation' && F.current() == '.')),
                        j
                    )
                },
                indent: function (F, D) {
                    if (F.tokenize != H) return 0
                    var V = F.scope,
                        j = D && '])}'.indexOf(D.charAt(0)) > -1
                    if (j) for (; V.type == 'coffee' && V.prev; ) V = V.prev
                    var J = j && V.type === D.charAt(0)
                    return V.align ? V.alignOffset - (J ? 1 : 0) : (J ? V.prev : V).offset
                },
                lineComment: '#',
                fold: 'indent',
            }
            return N
        }),
            o.defineMIME('application/vnd.coffeescript', 'coffeescript'),
            o.defineMIME('text/x-coffeescript', 'coffeescript'),
            o.defineMIME('text/coffeescript', 'coffeescript')
    })
})
var Ju = Ue((Qu, Vu) => {
    ;(function (o) {
        typeof Qu == 'object' && typeof Vu == 'object'
            ? o(Re(), pn(), fn(), Gn())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror', '../javascript/javascript', '../css/css', '../htmlmixed/htmlmixed'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        o.defineMode(
            'pug',
            function (p) {
                var v = 'keyword',
                    C = 'meta',
                    b = 'builtin',
                    _ = 'qualifier',
                    s = { '{': '}', '(': ')', '[': ']' },
                    g = o.getMode(p, 'javascript')
                function h() {
                    ;(this.javaScriptLine = !1),
                        (this.javaScriptLineExcludesColon = !1),
                        (this.javaScriptArguments = !1),
                        (this.javaScriptArgumentsDepth = 0),
                        (this.isInterpolating = !1),
                        (this.interpolationNesting = 0),
                        (this.jsState = o.startState(g)),
                        (this.restOfLine = ''),
                        (this.isIncludeFiltered = !1),
                        (this.isEach = !1),
                        (this.lastTag = ''),
                        (this.scriptType = ''),
                        (this.isAttrs = !1),
                        (this.attrsNest = []),
                        (this.inAttributeName = !0),
                        (this.attributeIsType = !1),
                        (this.attrValue = ''),
                        (this.indentOf = 1 / 0),
                        (this.indentToken = ''),
                        (this.innerMode = null),
                        (this.innerState = null),
                        (this.innerModeForLine = !1)
                }
                h.prototype.copy = function () {
                    var O = new h()
                    return (
                        (O.javaScriptLine = this.javaScriptLine),
                        (O.javaScriptLineExcludesColon = this.javaScriptLineExcludesColon),
                        (O.javaScriptArguments = this.javaScriptArguments),
                        (O.javaScriptArgumentsDepth = this.javaScriptArgumentsDepth),
                        (O.isInterpolating = this.isInterpolating),
                        (O.interpolationNesting = this.interpolationNesting),
                        (O.jsState = o.copyState(g, this.jsState)),
                        (O.innerMode = this.innerMode),
                        this.innerMode &&
                            this.innerState &&
                            (O.innerState = o.copyState(this.innerMode, this.innerState)),
                        (O.restOfLine = this.restOfLine),
                        (O.isIncludeFiltered = this.isIncludeFiltered),
                        (O.isEach = this.isEach),
                        (O.lastTag = this.lastTag),
                        (O.scriptType = this.scriptType),
                        (O.isAttrs = this.isAttrs),
                        (O.attrsNest = this.attrsNest.slice()),
                        (O.inAttributeName = this.inAttributeName),
                        (O.attributeIsType = this.attributeIsType),
                        (O.attrValue = this.attrValue),
                        (O.indentOf = this.indentOf),
                        (O.indentToken = this.indentToken),
                        (O.innerModeForLine = this.innerModeForLine),
                        O
                    )
                }
                function w(O, Z) {
                    if (
                        (O.sol() && ((Z.javaScriptLine = !1), (Z.javaScriptLineExcludesColon = !1)), Z.javaScriptLine)
                    ) {
                        if (Z.javaScriptLineExcludesColon && O.peek() === ':') {
                            ;(Z.javaScriptLine = !1), (Z.javaScriptLineExcludesColon = !1)
                            return
                        }
                        var me = g.token(O, Z.jsState)
                        return O.eol() && (Z.javaScriptLine = !1), me || !0
                    }
                }
                function k(O, Z) {
                    if (Z.javaScriptArguments) {
                        if (Z.javaScriptArgumentsDepth === 0 && O.peek() !== '(') {
                            Z.javaScriptArguments = !1
                            return
                        }
                        if (
                            (O.peek() === '('
                                ? Z.javaScriptArgumentsDepth++
                                : O.peek() === ')' && Z.javaScriptArgumentsDepth--,
                            Z.javaScriptArgumentsDepth === 0)
                        ) {
                            Z.javaScriptArguments = !1
                            return
                        }
                        var me = g.token(O, Z.jsState)
                        return me || !0
                    }
                }
                function c(O) {
                    if (O.match(/^yield\b/)) return 'keyword'
                }
                function d(O) {
                    if (O.match(/^(?:doctype) *([^\n]+)?/)) return C
                }
                function S(O, Z) {
                    if (O.match('#{')) return (Z.isInterpolating = !0), (Z.interpolationNesting = 0), 'punctuation'
                }
                function E(O, Z) {
                    if (Z.isInterpolating) {
                        if (O.peek() === '}') {
                            if ((Z.interpolationNesting--, Z.interpolationNesting < 0))
                                return O.next(), (Z.isInterpolating = !1), 'punctuation'
                        } else O.peek() === '{' && Z.interpolationNesting++
                        return g.token(O, Z.jsState) || !0
                    }
                }
                function z(O, Z) {
                    if (O.match(/^case\b/)) return (Z.javaScriptLine = !0), v
                }
                function y(O, Z) {
                    if (O.match(/^when\b/)) return (Z.javaScriptLine = !0), (Z.javaScriptLineExcludesColon = !0), v
                }
                function H(O) {
                    if (O.match(/^default\b/)) return v
                }
                function M(O, Z) {
                    if (O.match(/^extends?\b/)) return (Z.restOfLine = 'string'), v
                }
                function B(O, Z) {
                    if (O.match(/^append\b/)) return (Z.restOfLine = 'variable'), v
                }
                function X(O, Z) {
                    if (O.match(/^prepend\b/)) return (Z.restOfLine = 'variable'), v
                }
                function re(O, Z) {
                    if (O.match(/^block\b *(?:(prepend|append)\b)?/)) return (Z.restOfLine = 'variable'), v
                }
                function ne(O, Z) {
                    if (O.match(/^include\b/)) return (Z.restOfLine = 'string'), v
                }
                function N(O, Z) {
                    if (O.match(/^include:([a-zA-Z0-9\-]+)/, !1) && O.match('include'))
                        return (Z.isIncludeFiltered = !0), v
                }
                function F(O, Z) {
                    if (Z.isIncludeFiltered) {
                        var me = W(O, Z)
                        return (Z.isIncludeFiltered = !1), (Z.restOfLine = 'string'), me
                    }
                }
                function D(O, Z) {
                    if (O.match(/^mixin\b/)) return (Z.javaScriptLine = !0), v
                }
                function V(O, Z) {
                    if (O.match(/^\+([-\w]+)/))
                        return (
                            O.match(/^\( *[-\w]+ *=/, !1) ||
                                ((Z.javaScriptArguments = !0), (Z.javaScriptArgumentsDepth = 0)),
                            'variable'
                        )
                    if (O.match('+#{', !1)) return O.next(), (Z.mixinCallAfter = !0), S(O, Z)
                }
                function j(O, Z) {
                    if (Z.mixinCallAfter)
                        return (
                            (Z.mixinCallAfter = !1),
                            O.match(/^\( *[-\w]+ *=/, !1) ||
                                ((Z.javaScriptArguments = !0), (Z.javaScriptArgumentsDepth = 0)),
                            !0
                        )
                }
                function J(O, Z) {
                    if (O.match(/^(if|unless|else if|else)\b/)) return (Z.javaScriptLine = !0), v
                }
                function x(O, Z) {
                    if (O.match(/^(- *)?(each|for)\b/)) return (Z.isEach = !0), v
                }
                function K(O, Z) {
                    if (Z.isEach) {
                        if (O.match(/^ in\b/)) return (Z.javaScriptLine = !0), (Z.isEach = !1), v
                        if (O.sol() || O.eol()) Z.isEach = !1
                        else if (O.next()) {
                            for (; !O.match(/^ in\b/, !1) && O.next(); );
                            return 'variable'
                        }
                    }
                }
                function Y(O, Z) {
                    if (O.match(/^while\b/)) return (Z.javaScriptLine = !0), v
                }
                function I(O, Z) {
                    var me
                    if ((me = O.match(/^(\w(?:[-:\w]*\w)?)\/?/)))
                        return (
                            (Z.lastTag = me[1].toLowerCase()),
                            Z.lastTag === 'script' && (Z.scriptType = 'application/javascript'),
                            'tag'
                        )
                }
                function W(O, Z) {
                    if (O.match(/^:([\w\-]+)/)) {
                        var me
                        return (
                            p && p.innerModes && (me = p.innerModes(O.current().substring(1))),
                            me || (me = O.current().substring(1)),
                            typeof me == 'string' && (me = o.getMode(p, me)),
                            Fe(O, Z, me),
                            'atom'
                        )
                    }
                }
                function le(O, Z) {
                    if (O.match(/^(!?=|-)/)) return (Z.javaScriptLine = !0), 'punctuation'
                }
                function ye(O) {
                    if (O.match(/^#([\w-]+)/)) return b
                }
                function q(O) {
                    if (O.match(/^\.([\w-]+)/)) return _
                }
                function T(O, Z) {
                    if (O.peek() == '(')
                        return (
                            O.next(),
                            (Z.isAttrs = !0),
                            (Z.attrsNest = []),
                            (Z.inAttributeName = !0),
                            (Z.attrValue = ''),
                            (Z.attributeIsType = !1),
                            'punctuation'
                        )
                }
                function de(O, Z) {
                    if (Z.isAttrs) {
                        if (
                            (s[O.peek()] && Z.attrsNest.push(s[O.peek()]),
                            Z.attrsNest[Z.attrsNest.length - 1] === O.peek())
                        )
                            Z.attrsNest.pop()
                        else if (O.eat(')')) return (Z.isAttrs = !1), 'punctuation'
                        if (Z.inAttributeName && O.match(/^[^=,\)!]+/))
                            return (
                                (O.peek() === '=' || O.peek() === '!') &&
                                    ((Z.inAttributeName = !1),
                                    (Z.jsState = o.startState(g)),
                                    Z.lastTag === 'script' && O.current().trim().toLowerCase() === 'type'
                                        ? (Z.attributeIsType = !0)
                                        : (Z.attributeIsType = !1)),
                                'attribute'
                            )
                        var me = g.token(O, Z.jsState)
                        if (
                            (Z.attributeIsType && me === 'string' && (Z.scriptType = O.current().toString()),
                            Z.attrsNest.length === 0 && (me === 'string' || me === 'variable' || me === 'keyword'))
                        )
                            try {
                                return (
                                    Function('', 'var x ' + Z.attrValue.replace(/,\s*$/, '').replace(/^!/, '')),
                                    (Z.inAttributeName = !0),
                                    (Z.attrValue = ''),
                                    O.backUp(O.current().length),
                                    de(O, Z)
                                )
                            } catch {}
                        return (Z.attrValue += O.current()), me || !0
                    }
                }
                function Ee(O, Z) {
                    if (O.match(/^&attributes\b/))
                        return (Z.javaScriptArguments = !0), (Z.javaScriptArgumentsDepth = 0), 'keyword'
                }
                function fe(O) {
                    if (O.sol() && O.eatSpace()) return 'indent'
                }
                function xe(O, Z) {
                    if (O.match(/^ *\/\/(-)?([^\n]*)/))
                        return (Z.indentOf = O.indentation()), (Z.indentToken = 'comment'), 'comment'
                }
                function pe(O) {
                    if (O.match(/^: */)) return 'colon'
                }
                function De(O, Z) {
                    if (O.match(/^(?:\| ?| )([^\n]+)/)) return 'string'
                    if (O.match(/^(<[^\n]*)/, !1)) return Fe(O, Z, 'htmlmixed'), (Z.innerModeForLine = !0), Ge(O, Z, !0)
                }
                function Ne(O, Z) {
                    if (O.eat('.')) {
                        var me = null
                        return (
                            Z.lastTag === 'script' && Z.scriptType.toLowerCase().indexOf('javascript') != -1
                                ? (me = Z.scriptType.toLowerCase().replace(/"|'/g, ''))
                                : Z.lastTag === 'style' && (me = 'css'),
                            Fe(O, Z, me),
                            'dot'
                        )
                    }
                }
                function Me(O) {
                    return O.next(), null
                }
                function Fe(O, Z, me) {
                    ;(me = o.mimeModes[me] || me),
                        (me = (p.innerModes && p.innerModes(me)) || me),
                        (me = o.mimeModes[me] || me),
                        (me = o.getMode(p, me)),
                        (Z.indentOf = O.indentation()),
                        me && me.name !== 'null' ? (Z.innerMode = me) : (Z.indentToken = 'string')
                }
                function Ge(O, Z, me) {
                    if (O.indentation() > Z.indentOf || (Z.innerModeForLine && !O.sol()) || me)
                        return Z.innerMode
                            ? (Z.innerState ||
                                  (Z.innerState = Z.innerMode.startState
                                      ? o.startState(Z.innerMode, O.indentation())
                                      : {}),
                              O.hideFirstChars(Z.indentOf + 2, function () {
                                  return Z.innerMode.token(O, Z.innerState) || !0
                              }))
                            : (O.skipToEnd(), Z.indentToken)
                    O.sol() &&
                        ((Z.indentOf = 1 / 0), (Z.indentToken = null), (Z.innerMode = null), (Z.innerState = null))
                }
                function Le(O, Z) {
                    if ((O.sol() && (Z.restOfLine = ''), Z.restOfLine)) {
                        O.skipToEnd()
                        var me = Z.restOfLine
                        return (Z.restOfLine = ''), me
                    }
                }
                function Je() {
                    return new h()
                }
                function He(O) {
                    return O.copy()
                }
                function $e(O, Z) {
                    var me =
                        Ge(O, Z) ||
                        Le(O, Z) ||
                        E(O, Z) ||
                        F(O, Z) ||
                        K(O, Z) ||
                        de(O, Z) ||
                        w(O, Z) ||
                        k(O, Z) ||
                        j(O, Z) ||
                        c(O) ||
                        d(O) ||
                        S(O, Z) ||
                        z(O, Z) ||
                        y(O, Z) ||
                        H(O) ||
                        M(O, Z) ||
                        B(O, Z) ||
                        X(O, Z) ||
                        re(O, Z) ||
                        ne(O, Z) ||
                        N(O, Z) ||
                        D(O, Z) ||
                        V(O, Z) ||
                        J(O, Z) ||
                        x(O, Z) ||
                        Y(O, Z) ||
                        I(O, Z) ||
                        W(O, Z) ||
                        le(O, Z) ||
                        ye(O) ||
                        q(O) ||
                        T(O, Z) ||
                        Ee(O, Z) ||
                        fe(O) ||
                        De(O, Z) ||
                        xe(O, Z) ||
                        pe(O) ||
                        Ne(O, Z) ||
                        Me(O)
                    return me === !0 ? null : me
                }
                return { startState: Je, copyState: He, token: $e }
            },
            'javascript',
            'css',
            'htmlmixed',
        ),
            o.defineMIME('text/x-pug', 'pug'),
            o.defineMIME('text/x-jade', 'pug')
    })
})
var rc = Ue((ec, tc) => {
    ;(function (o) {
        typeof ec == 'object' && typeof tc == 'object'
            ? o(Re())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        o.multiplexingMode = function (p) {
            var v = Array.prototype.slice.call(arguments, 1)
            function C(b, _, s, g) {
                if (typeof _ == 'string') {
                    var h = b.indexOf(_, s)
                    return g && h > -1 ? h + _.length : h
                }
                var w = _.exec(s ? b.slice(s) : b)
                return w ? w.index + s + (g ? w[0].length : 0) : -1
            }
            return {
                startState: function () {
                    return { outer: o.startState(p), innerActive: null, inner: null, startingInner: !1 }
                },
                copyState: function (b) {
                    return {
                        outer: o.copyState(p, b.outer),
                        innerActive: b.innerActive,
                        inner: b.innerActive && o.copyState(b.innerActive.mode, b.inner),
                        startingInner: b.startingInner,
                    }
                },
                token: function (b, _) {
                    if (_.innerActive) {
                        var E = _.innerActive,
                            g = b.string
                        if (!E.close && b.sol()) return (_.innerActive = _.inner = null), this.token(b, _)
                        var k = E.close && !_.startingInner ? C(g, E.close, b.pos, E.parseDelimiters) : -1
                        if (k == b.pos && !E.parseDelimiters)
                            return (
                                b.match(E.close),
                                (_.innerActive = _.inner = null),
                                E.delimStyle && E.delimStyle + ' ' + E.delimStyle + '-close'
                            )
                        k > -1 && (b.string = g.slice(0, k))
                        var z = E.mode.token(b, _.inner)
                        return (
                            k > -1 ? (b.string = g) : b.pos > b.start && (_.startingInner = !1),
                            k == b.pos && E.parseDelimiters && (_.innerActive = _.inner = null),
                            E.innerStyle && (z ? (z = z + ' ' + E.innerStyle) : (z = E.innerStyle)),
                            z
                        )
                    } else {
                        for (var s = 1 / 0, g = b.string, h = 0; h < v.length; ++h) {
                            var w = v[h],
                                k = C(g, w.open, b.pos)
                            if (k == b.pos) {
                                w.parseDelimiters || b.match(w.open),
                                    (_.startingInner = !!w.parseDelimiters),
                                    (_.innerActive = w)
                                var c = 0
                                if (p.indent) {
                                    var d = p.indent(_.outer, '', '')
                                    d !== o.Pass && (c = d)
                                }
                                return (
                                    (_.inner = o.startState(w.mode, c)),
                                    w.delimStyle && w.delimStyle + ' ' + w.delimStyle + '-open'
                                )
                            } else k != -1 && k < s && (s = k)
                        }
                        s != 1 / 0 && (b.string = g.slice(0, s))
                        var S = p.token(b, _.outer)
                        return s != 1 / 0 && (b.string = g), S
                    }
                },
                indent: function (b, _, s) {
                    var g = b.innerActive ? b.innerActive.mode : p
                    return g.indent ? g.indent(b.innerActive ? b.inner : b.outer, _, s) : o.Pass
                },
                blankLine: function (b) {
                    var _ = b.innerActive ? b.innerActive.mode : p
                    if ((_.blankLine && _.blankLine(b.innerActive ? b.inner : b.outer), b.innerActive))
                        b.innerActive.close ===
                            `
` && (b.innerActive = b.inner = null)
                    else
                        for (var s = 0; s < v.length; ++s) {
                            var g = v[s]
                            g.open ===
                                `
` && ((b.innerActive = g), (b.inner = o.startState(g.mode, _.indent ? _.indent(b.outer, '', '') : 0)))
                        }
                },
                electricChars: p.electricChars,
                innerMode: function (b) {
                    return b.inner ? { state: b.inner, mode: b.innerActive.mode } : { state: b.outer, mode: p }
                },
            }
        }
    })
})
var oc = Ue((nc, ic) => {
    ;(function (o) {
        typeof nc == 'object' && typeof ic == 'object'
            ? o(Re(), Ai(), rc())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror', '../../addon/mode/simple', '../../addon/mode/multiplex'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        o.defineSimpleMode('handlebars-tags', {
            start: [
                { regex: /\{\{\{/, push: 'handlebars_raw', token: 'tag' },
                { regex: /\{\{!--/, push: 'dash_comment', token: 'comment' },
                { regex: /\{\{!/, push: 'comment', token: 'comment' },
                { regex: /\{\{/, push: 'handlebars', token: 'tag' },
            ],
            handlebars_raw: [{ regex: /\}\}\}/, pop: !0, token: 'tag' }],
            handlebars: [
                { regex: /\}\}/, pop: !0, token: 'tag' },
                { regex: /"(?:[^\\"]|\\.)*"?/, token: 'string' },
                { regex: /'(?:[^\\']|\\.)*'?/, token: 'string' },
                { regex: />|[#\/]([A-Za-z_]\w*)/, token: 'keyword' },
                { regex: /(?:else|this)\b/, token: 'keyword' },
                { regex: /\d+/i, token: 'number' },
                { regex: /=|~|@|true|false/, token: 'atom' },
                { regex: /(?:\.\.\/)*(?:[A-Za-z_][\w\.]*)+/, token: 'variable-2' },
            ],
            dash_comment: [
                { regex: /--\}\}/, pop: !0, token: 'comment' },
                { regex: /./, token: 'comment' },
            ],
            comment: [
                { regex: /\}\}/, pop: !0, token: 'comment' },
                { regex: /./, token: 'comment' },
            ],
            meta: { blockCommentStart: '{{--', blockCommentEnd: '--}}' },
        }),
            o.defineMode('handlebars', function (p, v) {
                var C = o.getMode(p, 'handlebars-tags')
                return !v || !v.base
                    ? C
                    : o.multiplexingMode(o.getMode(p, v.base), {
                          open: '{{',
                          close: /\}\}\}?/,
                          mode: C,
                          parseDelimiters: !0,
                      })
            }),
            o.defineMIME('text/x-handlebars-template', 'handlebars')
    })
})
var sc = Ue((ac, lc) => {
    ;(function (o) {
        'use strict'
        typeof ac == 'object' && typeof lc == 'object'
            ? o(Re(), Kn(), dn(), pn(), Yu(), fn(), Jo(), ea(), Ju(), oc())
            : typeof define == 'function' && define.amd
              ? define(
                    [
                        '../../lib/codemirror',
                        '../../addon/mode/overlay',
                        '../xml/xml',
                        '../javascript/javascript',
                        '../coffeescript/coffeescript',
                        '../css/css',
                        '../sass/sass',
                        '../stylus/stylus',
                        '../pug/pug',
                        '../handlebars/handlebars',
                    ],
                    o,
                )
              : o(CodeMirror)
    })(function (o) {
        var p = {
            script: [
                ['lang', /coffee(script)?/, 'coffeescript'],
                ['type', /^(?:text|application)\/(?:x-)?coffee(?:script)?$/, 'coffeescript'],
                ['lang', /^babel$/, 'javascript'],
                ['type', /^text\/babel$/, 'javascript'],
                ['type', /^text\/ecmascript-\d+$/, 'javascript'],
            ],
            style: [
                ['lang', /^stylus$/i, 'stylus'],
                ['lang', /^sass$/i, 'sass'],
                ['lang', /^less$/i, 'text/x-less'],
                ['lang', /^scss$/i, 'text/x-scss'],
                ['type', /^(text\/)?(x-)?styl(us)?$/i, 'stylus'],
                ['type', /^text\/sass/i, 'sass'],
                ['type', /^(text\/)?(x-)?scss$/i, 'text/x-scss'],
                ['type', /^(text\/)?(x-)?less$/i, 'text/x-less'],
            ],
            template: [
                ['lang', /^vue-template$/i, 'vue'],
                ['lang', /^pug$/i, 'pug'],
                ['lang', /^handlebars$/i, 'handlebars'],
                ['type', /^(text\/)?(x-)?pug$/i, 'pug'],
                ['type', /^text\/x-handlebars-template$/i, 'handlebars'],
                [null, null, 'vue-template'],
            ],
        }
        o.defineMode('vue-template', function (v, C) {
            var b = {
                token: function (_) {
                    if (_.match(/^\{\{.*?\}\}/)) return 'meta mustache'
                    for (; _.next() && !_.match('{{', !1); );
                    return null
                },
            }
            return o.overlayMode(o.getMode(v, C.backdrop || 'text/html'), b)
        }),
            o.defineMode(
                'vue',
                function (v) {
                    return o.getMode(v, { name: 'htmlmixed', tags: p })
                },
                'htmlmixed',
                'xml',
                'javascript',
                'coffeescript',
                'css',
                'sass',
                'stylus',
                'pug',
                'handlebars',
            ),
            o.defineMIME('script/x-vue', 'vue'),
            o.defineMIME('text/x-vue', 'vue')
    })
})
var fc = Ue((uc, cc) => {
    ;(function (o) {
        typeof uc == 'object' && typeof cc == 'object'
            ? o(Re())
            : typeof define == 'function' && define.amd
              ? define(['../../lib/codemirror'], o)
              : o(CodeMirror)
    })(function (o) {
        'use strict'
        o.defineMode('yaml', function () {
            var p = ['true', 'false', 'on', 'off', 'yes', 'no'],
                v = new RegExp('\\b((' + p.join(')|(') + '))$', 'i')
            return {
                token: function (C, b) {
                    var _ = C.peek(),
                        s = b.escaped
                    if (((b.escaped = !1), _ == '#' && (C.pos == 0 || /\s/.test(C.string.charAt(C.pos - 1)))))
                        return C.skipToEnd(), 'comment'
                    if (C.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/)) return 'string'
                    if (b.literal && C.indentation() > b.keyCol) return C.skipToEnd(), 'string'
                    if ((b.literal && (b.literal = !1), C.sol())) {
                        if (((b.keyCol = 0), (b.pair = !1), (b.pairStart = !1), C.match('---') || C.match('...')))
                            return 'def'
                        if (C.match(/\s*-\s+/)) return 'meta'
                    }
                    if (C.match(/^(\{|\}|\[|\])/))
                        return (
                            _ == '{'
                                ? b.inlinePairs++
                                : _ == '}'
                                  ? b.inlinePairs--
                                  : _ == '['
                                    ? b.inlineList++
                                    : b.inlineList--,
                            'meta'
                        )
                    if (b.inlineList > 0 && !s && _ == ',') return C.next(), 'meta'
                    if (b.inlinePairs > 0 && !s && _ == ',')
                        return (b.keyCol = 0), (b.pair = !1), (b.pairStart = !1), C.next(), 'meta'
                    if (b.pairStart) {
                        if (C.match(/^\s*(\||\>)\s*/)) return (b.literal = !0), 'meta'
                        if (C.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i)) return 'variable-2'
                        if (
                            (b.inlinePairs == 0 && C.match(/^\s*-?[0-9\.\,]+\s?$/)) ||
                            (b.inlinePairs > 0 && C.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/))
                        )
                            return 'number'
                        if (C.match(v)) return 'keyword'
                    }
                    return !b.pair &&
                        C.match(/^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^\s,\[\]{}#&*!|>'"%@`])[^#:]*(?=:($|\s))/)
                        ? ((b.pair = !0), (b.keyCol = C.indentation()), 'atom')
                        : b.pair && C.match(/^:\s*/)
                          ? ((b.pairStart = !0), 'meta')
                          : ((b.pairStart = !1), (b.escaped = _ == '\\'), C.next(), null)
                },
                startState: function () {
                    return {
                        pair: !1,
                        pairStart: !1,
                        keyCol: 0,
                        inlinePairs: 0,
                        inlineList: 0,
                        literal: !1,
                        escaped: !1,
                    }
                },
                lineComment: '#',
                fold: 'indent',
            }
        }),
            o.defineMIME('text/x-yaml', 'yaml'),
            o.defineMIME('text/yaml', 'yaml')
    })
})
var Wd = {}
function Ad(o) {
    for (var p; (p = Ed.exec(o)) !== null; ) {
        var v = p[0]
        if (v.indexOf('target=') === -1) {
            var C = v.replace(/>$/, ' target="_blank">')
            o = o.replace(v, C)
        }
    }
    return o
}
function Dd(o) {
    for (
        var p = new DOMParser(), v = p.parseFromString(o, 'text/html'), C = v.getElementsByTagName('li'), b = 0;
        b < C.length;
        b++
    )
        for (var _ = C[b], s = 0; s < _.children.length; s++) {
            var g = _.children[s]
            g instanceof HTMLInputElement &&
                g.type === 'checkbox' &&
                ((_.style.marginLeft = '-1.5em'), (_.style.listStyleType = 'none'))
        }
    return v.documentElement.innerHTML
}
function gc(o) {
    return hc ? (o = o.replace('Ctrl', 'Cmd')) : (o = o.replace('Cmd', 'Ctrl')), o
}
function qd(o, p, v, C) {
    var b = Di(o, !1, p, v, 'button', C)
    b.classList.add('easymde-dropdown'),
        (b.onclick = function () {
            b.focus()
        })
    var _ = document.createElement('div')
    _.className = 'easymde-dropdown-content'
    for (var s = 0; s < o.children.length; s++) {
        var g = o.children[s],
            h
        typeof g == 'string' && g in jr ? (h = Di(jr[g], !0, p, v, 'button', C)) : (h = Di(g, !0, p, v, 'button', C)),
            h.addEventListener(
                'click',
                function (w) {
                    w.stopPropagation()
                },
                !1,
            ),
            _.appendChild(h)
    }
    return b.appendChild(_), b
}
function Di(o, p, v, C, b, _) {
    o = o || {}
    var s = document.createElement(b)
    if (o.attributes)
        for (var g in o.attributes)
            Object.prototype.hasOwnProperty.call(o.attributes, g) && s.setAttribute(g, o.attributes[g])
    ;(s.className = o.name),
        s.setAttribute('type', b),
        (v = v ?? !0),
        o.text && (s.innerText = o.text),
        o.name && o.name in C && (Zn[o.name] = o.action),
        o.title &&
            v &&
            ((s.title = Fd(o.title, o.action, C)),
            hc && ((s.title = s.title.replace('Ctrl', '\u2318')), (s.title = s.title.replace('Alt', '\u2325')))),
        o.title && s.setAttribute('aria-label', o.title),
        o.noDisable && s.classList.add('no-disable'),
        o.noMobile && s.classList.add('no-mobile')
    var h = []
    typeof o.className < 'u' && (h = o.className.split(' '))
    for (var w = [], k = 0; k < h.length; k++) {
        var c = h[k]
        c.match(/^fa([srlb]|(-[\w-]*)|$)/) ? w.push(c) : s.classList.add(c)
    }
    if (((s.tabIndex = -1), w.length > 0)) {
        for (var d = document.createElement('i'), S = 0; S < w.length; S++) {
            var E = w[S]
            d.classList.add(E)
        }
        s.appendChild(d)
    }
    return (
        typeof o.icon < 'u' && (s.innerHTML = o.icon),
        o.action &&
            p &&
            (typeof o.action == 'function'
                ? (s.onclick = function (z) {
                      z.preventDefault(), o.action(_)
                  })
                : typeof o.action == 'string' &&
                  (s.onclick = function (z) {
                      z.preventDefault(), window.open(o.action, '_blank')
                  })),
        s
    )
}
function Id() {
    var o = document.createElement('i')
    return (o.className = 'separator'), (o.innerHTML = '|'), o
}
function Fd(o, p, v) {
    var C,
        b = o
    return p && ((C = Md(p)), v[C] && (b += ' (' + gc(v[C]) + ')')), b
}
function Lr(o, p) {
    p = p || o.getCursor('start')
    var v = o.getTokenAt(p)
    if (!v.type) return {}
    for (var C = v.type.split(' '), b = {}, _, s, g = 0; g < C.length; g++)
        (_ = C[g]),
            _ === 'strong'
                ? (b.bold = !0)
                : _ === 'variable-2'
                  ? ((s = o.getLine(p.line)),
                    /^\s*\d+\.\s/.test(s) ? (b['ordered-list'] = !0) : (b['unordered-list'] = !0))
                  : _ === 'atom'
                    ? (b.quote = !0)
                    : _ === 'em'
                      ? (b.italic = !0)
                      : _ === 'quote'
                        ? (b.quote = !0)
                        : _ === 'strikethrough'
                          ? (b.strikethrough = !0)
                          : _ === 'comment'
                            ? (b.code = !0)
                            : _ === 'link' && !b.image
                              ? (b.link = !0)
                              : _ === 'image'
                                ? (b.image = !0)
                                : _.match(/^header(-[1-6])?$/) && (b[_.replace('header', 'heading')] = !0)
    return b
}
function Rr(o) {
    var p = o.codemirror
    p.setOption('fullScreen', !p.getOption('fullScreen')),
        p.getOption('fullScreen')
            ? ((dc = document.body.style.overflow), (document.body.style.overflow = 'hidden'))
            : (document.body.style.overflow = dc)
    var v = p.getWrapperElement(),
        C = v.nextSibling
    if (C.classList.contains('editor-preview-active-side'))
        if (o.options.sideBySideFullscreen === !1) {
            var b = v.parentNode
            p.getOption('fullScreen')
                ? b.classList.remove('sided--no-fullscreen')
                : b.classList.add('sided--no-fullscreen')
        } else hn(o)
    if (
        (o.options.onToggleFullScreen && o.options.onToggleFullScreen(p.getOption('fullScreen') || !1),
        typeof o.options.maxHeight < 'u' &&
            (p.getOption('fullScreen')
                ? (p.getScrollerElement().style.removeProperty('height'), C.style.removeProperty('height'))
                : ((p.getScrollerElement().style.height = o.options.maxHeight), o.setPreviewMaxHeight())),
        o.toolbar_div.classList.toggle('fullscreen'),
        o.toolbarElements && o.toolbarElements.fullscreen)
    ) {
        var _ = o.toolbarElements.fullscreen
        _.classList.toggle('active')
    }
}
function Ii(o) {
    la(o, 'bold', o.options.blockStyles.bold)
}
function Fi(o) {
    la(o, 'italic', o.options.blockStyles.italic)
}
function Ni(o) {
    la(o, 'strikethrough', '~~')
}
function Oi(o) {
    var p = o.options.blockStyles.code
    function v(K) {
        if (typeof K != 'object')
            throw "fencing_line() takes a 'line' object (not a line number, or line text).  Got: " + typeof K + ': ' + K
        return K.styles && K.styles[2] && K.styles[2].indexOf('formatting-code-block') !== -1
    }
    function C(K) {
        return K.state.base.base || K.state.base
    }
    function b(K, Y, I, W, le) {
        ;(I = I || K.getLineHandle(Y)),
            (W = W || K.getTokenAt({ line: Y, ch: 1 })),
            (le = le || (!!I.text && K.getTokenAt({ line: Y, ch: I.text.length - 1 })))
        var ye = W.type ? W.type.split(' ') : []
        return le && C(le).indentedCode
            ? 'indented'
            : ye.indexOf('comment') === -1
              ? !1
              : C(W).fencedChars || C(le).fencedChars || v(I)
                ? 'fenced'
                : 'single'
    }
    function _(K, Y, I, W) {
        var le = Y.line + 1,
            ye = I.line + 1,
            q = Y.line !== I.line,
            T =
                W +
                `
`,
            de =
                `
` + W
        q && ye++,
            q &&
                I.ch === 0 &&
                ((de =
                    W +
                    `
`),
                ye--),
            Hr(K, !1, [T, de]),
            K.setSelection({ line: le, ch: 0 }, { line: ye, ch: 0 })
    }
    var s = o.codemirror,
        g = s.getCursor('start'),
        h = s.getCursor('end'),
        w = s.getTokenAt({ line: g.line, ch: g.ch || 1 }),
        k = s.getLineHandle(g.line),
        c = b(s, g.line, k, w),
        d,
        S,
        E
    if (c === 'single') {
        var z = k.text.slice(0, g.ch).replace('`', ''),
            y = k.text.slice(g.ch).replace('`', '')
        s.replaceRange(z + y, { line: g.line, ch: 0 }, { line: g.line, ch: 99999999999999 }),
            g.ch--,
            g !== h && h.ch--,
            s.setSelection(g, h),
            s.focus()
    } else if (c === 'fenced')
        if (g.line !== h.line || g.ch !== h.ch) {
            for (d = g.line; d >= 0 && ((k = s.getLineHandle(d)), !v(k)); d--);
            var H = s.getTokenAt({ line: d, ch: 1 }),
                M = C(H).fencedChars,
                B,
                X,
                re,
                ne
            v(s.getLineHandle(g.line))
                ? ((B = ''), (X = g.line))
                : v(s.getLineHandle(g.line - 1))
                  ? ((B = ''), (X = g.line - 1))
                  : ((B =
                        M +
                        `
`),
                    (X = g.line)),
                v(s.getLineHandle(h.line))
                    ? ((re = ''), (ne = h.line), h.ch === 0 && (ne += 1))
                    : h.ch !== 0 && v(s.getLineHandle(h.line + 1))
                      ? ((re = ''), (ne = h.line + 1))
                      : ((re =
                            M +
                            `
`),
                        (ne = h.line + 1)),
                h.ch === 0 && (ne -= 1),
                s.operation(function () {
                    s.replaceRange(re, { line: ne, ch: 0 }, { line: ne + (re ? 0 : 1), ch: 0 }),
                        s.replaceRange(B, { line: X, ch: 0 }, { line: X + (B ? 0 : 1), ch: 0 })
                }),
                s.setSelection({ line: X + (B ? 1 : 0), ch: 0 }, { line: ne + (B ? 1 : -1), ch: 0 }),
                s.focus()
        } else {
            var N = g.line
            if (
                (v(s.getLineHandle(g.line)) &&
                    (b(s, g.line + 1) === 'fenced'
                        ? ((d = g.line), (N = g.line + 1))
                        : ((S = g.line), (N = g.line - 1))),
                d === void 0)
            )
                for (d = N; d >= 0 && ((k = s.getLineHandle(d)), !v(k)); d--);
            if (S === void 0) for (E = s.lineCount(), S = N; S < E && ((k = s.getLineHandle(S)), !v(k)); S++);
            s.operation(function () {
                s.replaceRange('', { line: d, ch: 0 }, { line: d + 1, ch: 0 }),
                    s.replaceRange('', { line: S - 1, ch: 0 }, { line: S, ch: 0 })
            }),
                s.focus()
        }
    else if (c === 'indented') {
        if (g.line !== h.line || g.ch !== h.ch) (d = g.line), (S = h.line), h.ch === 0 && S--
        else {
            for (d = g.line; d >= 0; d--)
                if (((k = s.getLineHandle(d)), !k.text.match(/^\s*$/) && b(s, d, k) !== 'indented')) {
                    d += 1
                    break
                }
            for (E = s.lineCount(), S = g.line; S < E; S++)
                if (((k = s.getLineHandle(S)), !k.text.match(/^\s*$/) && b(s, S, k) !== 'indented')) {
                    S -= 1
                    break
                }
        }
        var F = s.getLineHandle(S + 1),
            D = F && s.getTokenAt({ line: S + 1, ch: F.text.length - 1 }),
            V = D && C(D).indentedCode
        V &&
            s.replaceRange(
                `
`,
                { line: S + 1, ch: 0 },
            )
        for (var j = d; j <= S; j++) s.indentLine(j, 'subtract')
        s.focus()
    } else {
        var J = g.line === h.line && g.ch === h.ch && g.ch === 0,
            x = g.line !== h.line
        J || x ? _(s, g, h, p) : Hr(s, !1, ['`', '`'])
    }
}
function Pi(o) {
    aa(o.codemirror, 'quote')
}
function Xn(o) {
    Cr(o.codemirror, 'smaller')
}
function ji(o) {
    Cr(o.codemirror, 'bigger')
}
function Ri(o) {
    Cr(o.codemirror, void 0, 1)
}
function Hi(o) {
    Cr(o.codemirror, void 0, 2)
}
function Bi(o) {
    Cr(o.codemirror, void 0, 3)
}
function ra(o) {
    Cr(o.codemirror, void 0, 4)
}
function na(o) {
    Cr(o.codemirror, void 0, 5)
}
function ia(o) {
    Cr(o.codemirror, void 0, 6)
}
function Wi(o) {
    var p = o.codemirror,
        v = '*'
    ;['-', '+', '*'].includes(o.options.unorderedListStyle) && (v = o.options.unorderedListStyle),
        aa(p, 'unordered-list', v)
}
function Ui(o) {
    aa(o.codemirror, 'ordered-list')
}
function $i(o) {
    Nd(o.codemirror)
}
function Ki(o) {
    var p = o.options,
        v = 'https://'
    if (p.promptURLs) {
        var C = prompt(p.promptTexts.link, v)
        if (!C) return !1
        v = mc(C)
    }
    bc(o, 'link', p.insertTexts.link, v)
}
function Gi(o) {
    var p = o.options,
        v = 'https://'
    if (p.promptURLs) {
        var C = prompt(p.promptTexts.image, v)
        if (!C) return !1
        v = mc(C)
    }
    bc(o, 'image', p.insertTexts.image, v)
}
function mc(o) {
    return encodeURI(o).replace(/([\\()])/g, '\\$1')
}
function oa(o) {
    o.openBrowseFileWindow()
}
function vc(o, p) {
    var v = o.codemirror,
        C = Lr(v),
        b = o.options,
        _ = p.substr(p.lastIndexOf('/') + 1),
        s = _.substring(_.lastIndexOf('.') + 1)
            .replace(/\?.*$/, '')
            .toLowerCase()
    if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'apng', 'avif', 'webp'].includes(s))
        Hr(v, C.image, b.insertTexts.uploadedImage, p)
    else {
        var g = b.insertTexts.link
        ;(g[0] = '[' + _), Hr(v, C.link, g, p)
    }
    o.updateStatusBar('upload-image', o.options.imageTexts.sbOnUploaded.replace('#image_name#', _)),
        setTimeout(function () {
            o.updateStatusBar('upload-image', o.options.imageTexts.sbInit)
        }, 1e3)
}
function Zi(o) {
    var p = o.codemirror,
        v = Lr(p),
        C = o.options
    Hr(p, v.table, C.insertTexts.table)
}
function Xi(o) {
    var p = o.codemirror,
        v = Lr(p),
        C = o.options
    Hr(p, v.image, C.insertTexts.horizontalRule)
}
function Yi(o) {
    var p = o.codemirror
    p.undo(), p.focus()
}
function Qi(o) {
    var p = o.codemirror
    p.redo(), p.focus()
}
function hn(o) {
    var p = o.codemirror,
        v = p.getWrapperElement(),
        C = v.nextSibling,
        b = o.toolbarElements && o.toolbarElements['side-by-side'],
        _ = !1,
        s = v.parentNode
    C.classList.contains('editor-preview-active-side')
        ? (o.options.sideBySideFullscreen === !1 && s.classList.remove('sided--no-fullscreen'),
          C.classList.remove('editor-preview-active-side'),
          b && b.classList.remove('active'),
          v.classList.remove('CodeMirror-sided'))
        : (setTimeout(function () {
              p.getOption('fullScreen') ||
                  (o.options.sideBySideFullscreen === !1 ? s.classList.add('sided--no-fullscreen') : Rr(o)),
                  C.classList.add('editor-preview-active-side')
          }, 1),
          b && b.classList.add('active'),
          v.classList.add('CodeMirror-sided'),
          (_ = !0))
    var g = v.lastChild
    if (g.classList.contains('editor-preview-active')) {
        g.classList.remove('editor-preview-active')
        var h = o.toolbarElements.preview,
            w = o.toolbar_div
        h.classList.remove('active'), w.classList.remove('disabled-for-preview')
    }
    var k = function () {
        var d = o.options.previewRender(o.value(), C)
        d != null && (C.innerHTML = d)
    }
    if ((p.sideBySideRenderingFunction || (p.sideBySideRenderingFunction = k), _)) {
        var c = o.options.previewRender(o.value(), C)
        c != null && (C.innerHTML = c), p.on('update', p.sideBySideRenderingFunction)
    } else p.off('update', p.sideBySideRenderingFunction)
    p.refresh()
}
function Vi(o) {
    var p = o.codemirror,
        v = p.getWrapperElement(),
        C = o.toolbar_div,
        b = o.options.toolbar ? o.toolbarElements.preview : !1,
        _ = v.lastChild,
        s = p.getWrapperElement().nextSibling
    if (
        (s.classList.contains('editor-preview-active-side') && hn(o),
        !_ || !_.classList.contains('editor-preview-full'))
    ) {
        if (((_ = document.createElement('div')), (_.className = 'editor-preview-full'), o.options.previewClass))
            if (Array.isArray(o.options.previewClass))
                for (var g = 0; g < o.options.previewClass.length; g++) _.classList.add(o.options.previewClass[g])
            else typeof o.options.previewClass == 'string' && _.classList.add(o.options.previewClass)
        v.appendChild(_)
    }
    _.classList.contains('editor-preview-active')
        ? (_.classList.remove('editor-preview-active'),
          b && (b.classList.remove('active'), C.classList.remove('disabled-for-preview')))
        : (setTimeout(function () {
              _.classList.add('editor-preview-active')
          }, 1),
          b && (b.classList.add('active'), C.classList.add('disabled-for-preview')))
    var h = o.options.previewRender(o.value(), _)
    h !== null && (_.innerHTML = h)
}
function Hr(o, p, v, C) {
    if (!o.getWrapperElement().lastChild.classList.contains('editor-preview-active')) {
        var b,
            _ = v[0],
            s = v[1],
            g = {},
            h = {}
        Object.assign(g, o.getCursor('start')),
            Object.assign(h, o.getCursor('end')),
            C && ((_ = _.replace('#url#', C)), (s = s.replace('#url#', C))),
            p
                ? ((b = o.getLine(g.line)),
                  (_ = b.slice(0, g.ch)),
                  (s = b.slice(g.ch)),
                  o.replaceRange(_ + s, { line: g.line, ch: 0 }))
                : ((b = o.getSelection()),
                  o.replaceSelection(_ + b + s),
                  (g.ch += _.length),
                  g !== h && (h.ch += _.length)),
            o.setSelection(g, h),
            o.focus()
    }
}
function Cr(o, p, v) {
    if (!o.getWrapperElement().lastChild.classList.contains('editor-preview-active')) {
        for (var C = o.getCursor('start'), b = o.getCursor('end'), _ = C.line; _ <= b.line; _++)
            (function (s) {
                var g = o.getLine(s),
                    h = g.search(/[^#]/)
                p !== void 0
                    ? h <= 0
                        ? p == 'bigger'
                            ? (g = '###### ' + g)
                            : (g = '# ' + g)
                        : h == 6 && p == 'smaller'
                          ? (g = g.substr(7))
                          : h == 1 && p == 'bigger'
                            ? (g = g.substr(2))
                            : p == 'bigger'
                              ? (g = g.substr(1))
                              : (g = '#' + g)
                    : h <= 0
                      ? (g = '#'.repeat(v) + ' ' + g)
                      : h == v
                        ? (g = g.substr(h + 1))
                        : (g = '#'.repeat(v) + ' ' + g.substr(h + 1)),
                    o.replaceRange(g, { line: s, ch: 0 }, { line: s, ch: 99999999999999 })
            })(_)
        o.focus()
    }
}
function aa(o, p, v) {
    if (!o.getWrapperElement().lastChild.classList.contains('editor-preview-active')) {
        for (
            var C = /^(\s*)(\*|-|\+|\d*\.)(\s+)/,
                b = /^\s*/,
                _ = Lr(o),
                s = o.getCursor('start'),
                g = o.getCursor('end'),
                h = { quote: /^(\s*)>\s+/, 'unordered-list': C, 'ordered-list': C },
                w = function (E, z) {
                    var y = { quote: '>', 'unordered-list': v, 'ordered-list': '%%i.' }
                    return y[E].replace('%%i', z)
                },
                k = function (E, z) {
                    var y = { quote: '>', 'unordered-list': '\\' + v, 'ordered-list': '\\d+.' },
                        H = new RegExp(y[E])
                    return z && H.test(z)
                },
                c = function (E, z, y) {
                    var H = C.exec(z),
                        M = w(E, d)
                    return (
                        H !== null
                            ? (k(E, H[2]) && (M = ''), (z = H[1] + M + H[3] + z.replace(b, '').replace(h[E], '$1')))
                            : y == !1 && (z = M + ' ' + z),
                        z
                    )
                },
                d = 1,
                S = s.line;
            S <= g.line;
            S++
        )
            (function (E) {
                var z = o.getLine(E)
                _[p]
                    ? (z = z.replace(h[p], '$1'))
                    : (p == 'unordered-list' && (z = c('ordered-list', z, !0)), (z = c(p, z, !1)), (d += 1)),
                    o.replaceRange(z, { line: E, ch: 0 }, { line: E, ch: 99999999999999 })
            })(S)
        o.focus()
    }
}
function bc(o, p, v, C) {
    if (!(!o.codemirror || o.isPreviewActive())) {
        var b = o.codemirror,
            _ = Lr(b),
            s = _[p]
        if (!s) {
            Hr(b, s, v, C)
            return
        }
        var g = b.getCursor('start'),
            h = b.getCursor('end'),
            w = b.getLine(g.line),
            k = w.slice(0, g.ch),
            c = w.slice(g.ch)
        p == 'link' ? (k = k.replace(/(.*)[^!]\[/, '$1')) : p == 'image' && (k = k.replace(/(.*)!\[$/, '$1')),
            (c = c.replace(/]\(.*?\)/, '')),
            b.replaceRange(k + c, { line: g.line, ch: 0 }, { line: g.line, ch: 99999999999999 }),
            (g.ch -= v[0].length),
            g !== h && (h.ch -= v[0].length),
            b.setSelection(g, h),
            b.focus()
    }
}
function la(o, p, v, C) {
    if (!(!o.codemirror || o.isPreviewActive())) {
        C = typeof C > 'u' ? v : C
        var b = o.codemirror,
            _ = Lr(b),
            s,
            g = v,
            h = C,
            w = b.getCursor('start'),
            k = b.getCursor('end')
        _[p]
            ? ((s = b.getLine(w.line)),
              (g = s.slice(0, w.ch)),
              (h = s.slice(w.ch)),
              p == 'bold'
                  ? ((g = g.replace(/(\*\*|__)(?![\s\S]*(\*\*|__))/, '')), (h = h.replace(/(\*\*|__)/, '')))
                  : p == 'italic'
                    ? ((g = g.replace(/(\*|_)(?![\s\S]*(\*|_))/, '')), (h = h.replace(/(\*|_)/, '')))
                    : p == 'strikethrough' &&
                      ((g = g.replace(/(\*\*|~~)(?![\s\S]*(\*\*|~~))/, '')), (h = h.replace(/(\*\*|~~)/, ''))),
              b.replaceRange(g + h, { line: w.line, ch: 0 }, { line: w.line, ch: 99999999999999 }),
              p == 'bold' || p == 'strikethrough'
                  ? ((w.ch -= 2), w !== k && (k.ch -= 2))
                  : p == 'italic' && ((w.ch -= 1), w !== k && (k.ch -= 1)))
            : ((s = b.getSelection()),
              p == 'bold'
                  ? ((s = s.split('**').join('')), (s = s.split('__').join('')))
                  : p == 'italic'
                    ? ((s = s.split('*').join('')), (s = s.split('_').join('')))
                    : p == 'strikethrough' && (s = s.split('~~').join('')),
              b.replaceSelection(g + s + h),
              (w.ch += v.length),
              (k.ch = w.ch + s.length)),
            b.setSelection(w, k),
            b.focus()
    }
}
function Nd(o) {
    if (!o.getWrapperElement().lastChild.classList.contains('editor-preview-active'))
        for (var p = o.getCursor('start'), v = o.getCursor('end'), C, b = p.line; b <= v.line; b++)
            (C = o.getLine(b)),
                (C = C.replace(/^[ ]*([# ]+|\*|-|[> ]+|[0-9]+(.|\)))[ ]*/, '')),
                o.replaceRange(C, { line: b, ch: 0 }, { line: b, ch: 99999999999999 })
}
function qi(o, p) {
    if (Math.abs(o) < 1024) return '' + o + p[0]
    var v = 0
    do (o /= 1024), ++v
    while (Math.abs(o) >= 1024 && v < p.length)
    return '' + o.toFixed(1) + p[v]
}
function yc(o, p) {
    for (var v in p)
        Object.prototype.hasOwnProperty.call(p, v) &&
            (p[v] instanceof Array
                ? (o[v] = p[v].concat(o[v] instanceof Array ? o[v] : []))
                : p[v] !== null && typeof p[v] == 'object' && p[v].constructor === Object
                  ? (o[v] = yc(o[v] || {}, p[v]))
                  : (o[v] = p[v]))
    return o
}
function dr(o) {
    for (var p = 1; p < arguments.length; p++) o = yc(o, arguments[p])
    return o
}
function pc(o) {
    var p =
            /[a-zA-Z0-9_\u00A0-\u02AF\u0392-\u03c9\u0410-\u04F9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g,
        v = o.match(p),
        C = 0
    if (v === null) return C
    for (var b = 0; b < v.length; b++) v[b].charCodeAt(0) >= 19968 ? (C += v[b].length) : (C += 1)
    return C
}
function Se(o) {
    ;(o = o || {}), (o.parent = this)
    var p = !0
    if ((o.autoDownloadFontAwesome === !1 && (p = !1), o.autoDownloadFontAwesome !== !0))
        for (var v = document.styleSheets, C = 0; C < v.length; C++)
            v[C].href && v[C].href.indexOf('//maxcdn.bootstrapcdn.com/font-awesome/') > -1 && (p = !1)
    if (p) {
        var b = document.createElement('link')
        ;(b.rel = 'stylesheet'),
            (b.href = 'https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css'),
            document.getElementsByTagName('head')[0].appendChild(b)
    }
    if (o.element) this.element = o.element
    else if (o.element === null) {
        console.log('EasyMDE: Error. No element was found.')
        return
    }
    if (o.toolbar === void 0) {
        o.toolbar = []
        for (var _ in jr)
            Object.prototype.hasOwnProperty.call(jr, _) &&
                (_.indexOf('separator-') != -1 && o.toolbar.push('|'),
                (jr[_].default === !0 ||
                    (o.showIcons && o.showIcons.constructor === Array && o.showIcons.indexOf(_) != -1)) &&
                    o.toolbar.push(_))
    }
    if (
        (Object.prototype.hasOwnProperty.call(o, 'previewClass') || (o.previewClass = 'editor-preview'),
        Object.prototype.hasOwnProperty.call(o, 'status') ||
            ((o.status = ['autosave', 'lines', 'words', 'cursor']), o.uploadImage && o.status.unshift('upload-image')),
        o.previewRender ||
            (o.previewRender = function (g) {
                return this.parent.markdown(g)
            }),
        (o.parsingConfig = dr({ highlightFormatting: !0 }, o.parsingConfig || {})),
        (o.insertTexts = dr({}, Od, o.insertTexts || {})),
        (o.promptTexts = dr({}, Pd, o.promptTexts || {})),
        (o.blockStyles = dr({}, Rd, o.blockStyles || {})),
        o.autosave != null && (o.autosave.timeFormat = dr({}, jd, o.autosave.timeFormat || {})),
        (o.iconClassMap = dr({}, rt, o.iconClassMap || {})),
        (o.shortcuts = dr({}, zd, o.shortcuts || {})),
        (o.maxHeight = o.maxHeight || void 0),
        (o.direction = o.direction || 'ltr'),
        typeof o.maxHeight < 'u' ? (o.minHeight = o.maxHeight) : (o.minHeight = o.minHeight || '300px'),
        (o.errorCallback =
            o.errorCallback ||
            function (g) {
                alert(g)
            }),
        (o.uploadImage = o.uploadImage || !1),
        (o.imageMaxSize = o.imageMaxSize || 2097152),
        (o.imageAccept = o.imageAccept || 'image/png, image/jpeg, image/gif, image/avif'),
        (o.imageTexts = dr({}, Hd, o.imageTexts || {})),
        (o.errorMessages = dr({}, Bd, o.errorMessages || {})),
        (o.imagePathAbsolute = o.imagePathAbsolute || !1),
        (o.imageCSRFName = o.imageCSRFName || 'csrfmiddlewaretoken'),
        (o.imageCSRFHeader = o.imageCSRFHeader || !1),
        o.autosave != null &&
            o.autosave.unique_id != null &&
            o.autosave.unique_id != '' &&
            (o.autosave.uniqueId = o.autosave.unique_id),
        o.overlayMode && o.overlayMode.combine === void 0 && (o.overlayMode.combine = !0),
        (this.options = o),
        this.render(),
        o.initialValue &&
            (!this.options.autosave || this.options.autosave.foundSavedValue !== !0) &&
            this.value(o.initialValue),
        o.uploadImage)
    ) {
        var s = this
        this.codemirror.on('dragenter', function (g, h) {
            s.updateStatusBar('upload-image', s.options.imageTexts.sbOnDragEnter),
                h.stopPropagation(),
                h.preventDefault()
        }),
            this.codemirror.on('dragend', function (g, h) {
                s.updateStatusBar('upload-image', s.options.imageTexts.sbInit), h.stopPropagation(), h.preventDefault()
            }),
            this.codemirror.on('dragleave', function (g, h) {
                s.updateStatusBar('upload-image', s.options.imageTexts.sbInit), h.stopPropagation(), h.preventDefault()
            }),
            this.codemirror.on('dragover', function (g, h) {
                s.updateStatusBar('upload-image', s.options.imageTexts.sbOnDragEnter),
                    h.stopPropagation(),
                    h.preventDefault()
            }),
            this.codemirror.on('drop', function (g, h) {
                h.stopPropagation(),
                    h.preventDefault(),
                    o.imageUploadFunction
                        ? s.uploadImagesUsingCustomFunction(o.imageUploadFunction, h.dataTransfer.files)
                        : s.uploadImages(h.dataTransfer.files)
            }),
            this.codemirror.on('paste', function (g, h) {
                o.imageUploadFunction
                    ? s.uploadImagesUsingCustomFunction(o.imageUploadFunction, h.clipboardData.files)
                    : s.uploadImages(h.clipboardData.files)
            })
    }
}
function xc() {
    if (typeof localStorage == 'object')
        try {
            localStorage.setItem('smde_localStorage', 1), localStorage.removeItem('smde_localStorage')
        } catch {
            return !1
        }
    else return !1
    return !0
}
var hc,
    Ed,
    Zn,
    zd,
    Md,
    ta,
    dc,
    rt,
    jr,
    Od,
    Pd,
    jd,
    Rd,
    Hd,
    Bd,
    _c = Td(() => {
        ;(hc = /Mac/.test(navigator.platform)),
            (Ed = new RegExp(/(<a.*?https?:\/\/.*?[^a]>)+?/g)),
            (Zn = {
                toggleBold: Ii,
                toggleItalic: Fi,
                drawLink: Ki,
                toggleHeadingSmaller: Xn,
                toggleHeadingBigger: ji,
                drawImage: Gi,
                toggleBlockquote: Pi,
                toggleOrderedList: Ui,
                toggleUnorderedList: Wi,
                toggleCodeBlock: Oi,
                togglePreview: Vi,
                toggleStrikethrough: Ni,
                toggleHeading1: Ri,
                toggleHeading2: Hi,
                toggleHeading3: Bi,
                toggleHeading4: ra,
                toggleHeading5: na,
                toggleHeading6: ia,
                cleanBlock: $i,
                drawTable: Zi,
                drawHorizontalRule: Xi,
                undo: Yi,
                redo: Qi,
                toggleSideBySide: hn,
                toggleFullScreen: Rr,
            }),
            (zd = {
                toggleBold: 'Cmd-B',
                toggleItalic: 'Cmd-I',
                drawLink: 'Cmd-K',
                toggleHeadingSmaller: 'Cmd-H',
                toggleHeadingBigger: 'Shift-Cmd-H',
                toggleHeading1: 'Ctrl+Alt+1',
                toggleHeading2: 'Ctrl+Alt+2',
                toggleHeading3: 'Ctrl+Alt+3',
                toggleHeading4: 'Ctrl+Alt+4',
                toggleHeading5: 'Ctrl+Alt+5',
                toggleHeading6: 'Ctrl+Alt+6',
                cleanBlock: 'Cmd-E',
                drawImage: 'Cmd-Alt-I',
                toggleBlockquote: "Cmd-'",
                toggleOrderedList: 'Cmd-Alt-L',
                toggleUnorderedList: 'Cmd-L',
                toggleCodeBlock: 'Cmd-Alt-C',
                togglePreview: 'Cmd-P',
                toggleSideBySide: 'F9',
                toggleFullScreen: 'F11',
            }),
            (Md = function (o) {
                for (var p in Zn) if (Zn[p] === o) return p
                return null
            }),
            (ta = function () {
                var o = !1
                return (
                    (function (p) {
                        ;(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
                            p,
                        ) ||
                            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
                                p.substr(0, 4),
                            )) &&
                            (o = !0)
                    })(navigator.userAgent || navigator.vendor || window.opera),
                    o
                )
            })
        dc = ''
        ;(rt = {
            bold: 'fa fa-bold',
            italic: 'fa fa-italic',
            strikethrough: 'fa fa-strikethrough',
            heading: 'fa fa-header fa-heading',
            'heading-smaller': 'fa fa-header fa-heading header-smaller',
            'heading-bigger': 'fa fa-header fa-heading header-bigger',
            'heading-1': 'fa fa-header fa-heading header-1',
            'heading-2': 'fa fa-header fa-heading header-2',
            'heading-3': 'fa fa-header fa-heading header-3',
            code: 'fa fa-code',
            quote: 'fa fa-quote-left',
            'ordered-list': 'fa fa-list-ol',
            'unordered-list': 'fa fa-list-ul',
            'clean-block': 'fa fa-eraser',
            link: 'fa fa-link',
            image: 'fa fa-image',
            'upload-image': 'fa fa-image',
            table: 'fa fa-table',
            'horizontal-rule': 'fa fa-minus',
            preview: 'fa fa-eye',
            'side-by-side': 'fa fa-columns',
            fullscreen: 'fa fa-arrows-alt',
            guide: 'fa fa-question-circle',
            undo: 'fa fa-undo',
            redo: 'fa fa-repeat fa-redo',
        }),
            (jr = {
                bold: { name: 'bold', action: Ii, className: rt.bold, title: 'Bold', default: !0 },
                italic: { name: 'italic', action: Fi, className: rt.italic, title: 'Italic', default: !0 },
                strikethrough: {
                    name: 'strikethrough',
                    action: Ni,
                    className: rt.strikethrough,
                    title: 'Strikethrough',
                },
                heading: { name: 'heading', action: Xn, className: rt.heading, title: 'Heading', default: !0 },
                'heading-smaller': {
                    name: 'heading-smaller',
                    action: Xn,
                    className: rt['heading-smaller'],
                    title: 'Smaller Heading',
                },
                'heading-bigger': {
                    name: 'heading-bigger',
                    action: ji,
                    className: rt['heading-bigger'],
                    title: 'Bigger Heading',
                },
                'heading-1': { name: 'heading-1', action: Ri, className: rt['heading-1'], title: 'Big Heading' },
                'heading-2': { name: 'heading-2', action: Hi, className: rt['heading-2'], title: 'Medium Heading' },
                'heading-3': { name: 'heading-3', action: Bi, className: rt['heading-3'], title: 'Small Heading' },
                'separator-1': { name: 'separator-1' },
                code: { name: 'code', action: Oi, className: rt.code, title: 'Code' },
                quote: { name: 'quote', action: Pi, className: rt.quote, title: 'Quote', default: !0 },
                'unordered-list': {
                    name: 'unordered-list',
                    action: Wi,
                    className: rt['unordered-list'],
                    title: 'Generic List',
                    default: !0,
                },
                'ordered-list': {
                    name: 'ordered-list',
                    action: Ui,
                    className: rt['ordered-list'],
                    title: 'Numbered List',
                    default: !0,
                },
                'clean-block': { name: 'clean-block', action: $i, className: rt['clean-block'], title: 'Clean block' },
                'separator-2': { name: 'separator-2' },
                link: { name: 'link', action: Ki, className: rt.link, title: 'Create Link', default: !0 },
                image: { name: 'image', action: Gi, className: rt.image, title: 'Insert Image', default: !0 },
                'upload-image': {
                    name: 'upload-image',
                    action: oa,
                    className: rt['upload-image'],
                    title: 'Import an image',
                },
                table: { name: 'table', action: Zi, className: rt.table, title: 'Insert Table' },
                'horizontal-rule': {
                    name: 'horizontal-rule',
                    action: Xi,
                    className: rt['horizontal-rule'],
                    title: 'Insert Horizontal Line',
                },
                'separator-3': { name: 'separator-3' },
                preview: {
                    name: 'preview',
                    action: Vi,
                    className: rt.preview,
                    noDisable: !0,
                    title: 'Toggle Preview',
                    default: !0,
                },
                'side-by-side': {
                    name: 'side-by-side',
                    action: hn,
                    className: rt['side-by-side'],
                    noDisable: !0,
                    noMobile: !0,
                    title: 'Toggle Side by Side',
                    default: !0,
                },
                fullscreen: {
                    name: 'fullscreen',
                    action: Rr,
                    className: rt.fullscreen,
                    noDisable: !0,
                    noMobile: !0,
                    title: 'Toggle Fullscreen',
                    default: !0,
                },
                'separator-4': { name: 'separator-4' },
                guide: {
                    name: 'guide',
                    action: 'https://www.markdownguide.org/basic-syntax/',
                    className: rt.guide,
                    noDisable: !0,
                    title: 'Markdown Guide',
                    default: !0,
                },
                'separator-5': { name: 'separator-5' },
                undo: { name: 'undo', action: Yi, className: rt.undo, noDisable: !0, title: 'Undo' },
                redo: { name: 'redo', action: Qi, className: rt.redo, noDisable: !0, title: 'Redo' },
            }),
            (Od = {
                link: ['[', '](#url#)'],
                image: ['![', '](#url#)'],
                uploadedImage: ['![](#url#)', ''],
                table: [
                    '',
                    `

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Text     | Text     | Text     |

`,
                ],
                horizontalRule: [
                    '',
                    `

-----

`,
                ],
            }),
            (Pd = { link: 'URL for the link:', image: 'URL of the image:' }),
            (jd = { locale: 'en-US', format: { hour: '2-digit', minute: '2-digit' } }),
            (Rd = { bold: '**', code: '```', italic: '*' }),
            (Hd = {
                sbInit: 'Attach files by drag and dropping or pasting from clipboard.',
                sbOnDragEnter: 'Drop image to upload it.',
                sbOnDrop: 'Uploading image #images_names#...',
                sbProgress: 'Uploading #file_name#: #progress#%',
                sbOnUploaded: 'Uploaded #image_name#',
                sizeUnits: ' B, KB, MB',
            }),
            (Bd = {
                noFileGiven: 'You must select a file.',
                typeNotAllowed: 'This image type is not allowed.',
                fileTooLarge: `Image #image_name# is too big (#image_size#).
Maximum file size is #image_max_size#.`,
                importError: 'Something went wrong when uploading the image #image_name#.',
            })
        Se.prototype.uploadImages = function (o, p, v) {
            if (o.length !== 0) {
                for (var C = [], b = 0; b < o.length; b++) C.push(o[b].name), this.uploadImage(o[b], p, v)
                this.updateStatusBar(
                    'upload-image',
                    this.options.imageTexts.sbOnDrop.replace('#images_names#', C.join(', ')),
                )
            }
        }
        Se.prototype.uploadImagesUsingCustomFunction = function (o, p) {
            if (p.length !== 0) {
                for (var v = [], C = 0; C < p.length; C++)
                    v.push(p[C].name), this.uploadImageUsingCustomFunction(o, p[C])
                this.updateStatusBar(
                    'upload-image',
                    this.options.imageTexts.sbOnDrop.replace('#images_names#', v.join(', ')),
                )
            }
        }
        Se.prototype.updateStatusBar = function (o, p) {
            if (this.gui.statusbar) {
                var v = this.gui.statusbar.getElementsByClassName(o)
                v.length === 1
                    ? (this.gui.statusbar.getElementsByClassName(o)[0].textContent = p)
                    : v.length === 0
                      ? console.log('EasyMDE: status bar item ' + o + ' was not found.')
                      : console.log('EasyMDE: Several status bar items named ' + o + ' was found.')
            }
        }
        Se.prototype.markdown = function (o) {
            if (marked) {
                var p
                if (
                    (this.options && this.options.renderingConfig && this.options.renderingConfig.markedOptions
                        ? (p = this.options.renderingConfig.markedOptions)
                        : (p = {}),
                    this.options && this.options.renderingConfig && this.options.renderingConfig.singleLineBreaks === !1
                        ? (p.breaks = !1)
                        : (p.breaks = !0),
                    this.options &&
                        this.options.renderingConfig &&
                        this.options.renderingConfig.codeSyntaxHighlighting === !0)
                ) {
                    var v = this.options.renderingConfig.hljs || window.hljs
                    v &&
                        (p.highlight = function (b, _) {
                            return _ && v.getLanguage(_) ? v.highlight(_, b).value : v.highlightAuto(b).value
                        })
                }
                marked.setOptions(p)
                var C = marked.parse(o)
                return (
                    this.options.renderingConfig &&
                        typeof this.options.renderingConfig.sanitizerFunction == 'function' &&
                        (C = this.options.renderingConfig.sanitizerFunction.call(this, C)),
                    (C = Ad(C)),
                    (C = Dd(C)),
                    C
                )
            }
        }
        Se.prototype.render = function (o) {
            if (
                (o || (o = this.element || document.getElementsByTagName('textarea')[0]),
                this._rendered && this._rendered === o)
            )
                return
            this.element = o
            var p = this.options,
                v = this,
                C = {}
            for (var b in p.shortcuts)
                p.shortcuts[b] !== null &&
                    Zn[b] !== null &&
                    (function (y) {
                        C[gc(p.shortcuts[y])] = function () {
                            var H = Zn[y]
                            typeof H == 'function' ? H(v) : typeof H == 'string' && window.open(H, '_blank')
                        }
                    })(b)
            ;(C.Enter = 'newlineAndIndentContinueMarkdownList'),
                (C.Tab = 'tabAndIndentMarkdownList'),
                (C['Shift-Tab'] = 'shiftTabAndUnindentMarkdownList'),
                (C.Esc = function (y) {
                    y.getOption('fullScreen') && Rr(v)
                }),
                (this.documentOnKeyDown = function (y) {
                    ;(y = y || window.event), y.keyCode == 27 && v.codemirror.getOption('fullScreen') && Rr(v)
                }),
                document.addEventListener('keydown', this.documentOnKeyDown, !1)
            var _, s
            p.overlayMode
                ? (CodeMirror.defineMode('overlay-mode', function (y) {
                      return CodeMirror.overlayMode(
                          CodeMirror.getMode(y, p.spellChecker !== !1 ? 'spell-checker' : 'gfm'),
                          p.overlayMode.mode,
                          p.overlayMode.combine,
                      )
                  }),
                  (_ = 'overlay-mode'),
                  (s = p.parsingConfig),
                  (s.gitHubSpice = !1))
                : ((_ = p.parsingConfig), (_.name = 'gfm'), (_.gitHubSpice = !1)),
                p.spellChecker !== !1 &&
                    ((_ = 'spell-checker'),
                    (s = p.parsingConfig),
                    (s.name = 'gfm'),
                    (s.gitHubSpice = !1),
                    typeof p.spellChecker == 'function'
                        ? p.spellChecker({ codeMirrorInstance: CodeMirror })
                        : CodeMirrorSpellChecker({ codeMirrorInstance: CodeMirror }))
            function g(y, H, M) {
                return { addNew: !1 }
            }
            if (
                ((CodeMirror.getMode('php').mime = 'text/x-php'),
                (this.codemirror = CodeMirror.fromTextArea(o, {
                    mode: _,
                    backdrop: s,
                    theme: p.theme != null ? p.theme : 'easymde',
                    tabSize: p.tabSize != null ? p.tabSize : 2,
                    indentUnit: p.tabSize != null ? p.tabSize : 2,
                    indentWithTabs: p.indentWithTabs !== !1,
                    lineNumbers: p.lineNumbers === !0,
                    autofocus: p.autofocus === !0,
                    extraKeys: C,
                    direction: p.direction,
                    lineWrapping: p.lineWrapping !== !1,
                    allowDropFileTypes: ['text/plain'],
                    placeholder: p.placeholder || o.getAttribute('placeholder') || '',
                    styleSelectedText: p.styleSelectedText != null ? p.styleSelectedText : !ta(),
                    scrollbarStyle: p.scrollbarStyle != null ? p.scrollbarStyle : 'native',
                    configureMouse: g,
                    inputStyle: p.inputStyle != null ? p.inputStyle : ta() ? 'contenteditable' : 'textarea',
                    spellcheck: p.nativeSpellcheck != null ? p.nativeSpellcheck : !0,
                    autoRefresh: p.autoRefresh != null ? p.autoRefresh : !1,
                })),
                (this.codemirror.getScrollerElement().style.minHeight = p.minHeight),
                typeof p.maxHeight < 'u' && (this.codemirror.getScrollerElement().style.height = p.maxHeight),
                p.forceSync === !0)
            ) {
                var h = this.codemirror
                h.on('change', function () {
                    h.save()
                })
            }
            this.gui = {}
            var w = document.createElement('div')
            w.classList.add('EasyMDEContainer'), w.setAttribute('role', 'application')
            var k = this.codemirror.getWrapperElement()
            k.parentNode.insertBefore(w, k),
                w.appendChild(k),
                p.toolbar !== !1 && (this.gui.toolbar = this.createToolbar()),
                p.status !== !1 && (this.gui.statusbar = this.createStatusbar()),
                p.autosave != null &&
                    p.autosave.enabled === !0 &&
                    (this.autosave(),
                    this.codemirror.on('change', function () {
                        clearTimeout(v._autosave_timeout),
                            (v._autosave_timeout = setTimeout(
                                function () {
                                    v.autosave()
                                },
                                v.options.autosave.submit_delay || v.options.autosave.delay || 1e3,
                            ))
                    }))
            function c(y, H) {
                var M,
                    B = window.getComputedStyle(document.querySelector('.CodeMirror-sizer')).width.replace('px', '')
                return y < B ? (M = H + 'px') : (M = (H / y) * 100 + '%'), M
            }
            var d = this
            function S(y, H) {
                y.setAttribute('data-img-src', H.url),
                    y.setAttribute(
                        'style',
                        '--bg-image:url(' +
                            H.url +
                            ');--width:' +
                            H.naturalWidth +
                            'px;--height:' +
                            c(H.naturalWidth, H.naturalHeight),
                    ),
                    d.codemirror.setSize()
            }
            function E() {
                p.previewImagesInEditor &&
                    w.querySelectorAll('.cm-image-marker').forEach(function (y) {
                        var H = y.parentElement
                        if (H.innerText.match(/^!\[.*?\]\(.*\)/g) && !H.hasAttribute('data-img-src')) {
                            var M = H.innerText.match('\\((.*)\\)')
                            if ((window.EMDEimagesCache || (window.EMDEimagesCache = {}), M && M.length >= 2)) {
                                var B = M[1]
                                if (p.imagesPreviewHandler) {
                                    var X = p.imagesPreviewHandler(M[1])
                                    typeof X == 'string' && (B = X)
                                }
                                if (window.EMDEimagesCache[B]) S(H, window.EMDEimagesCache[B])
                                else {
                                    var re = document.createElement('img')
                                    ;(re.onload = function () {
                                        ;(window.EMDEimagesCache[B] = {
                                            naturalWidth: re.naturalWidth,
                                            naturalHeight: re.naturalHeight,
                                            url: B,
                                        }),
                                            S(H, window.EMDEimagesCache[B])
                                    }),
                                        (re.src = B)
                                }
                            }
                        }
                    })
            }
            this.codemirror.on('update', function () {
                E()
            }),
                (this.gui.sideBySide = this.createSideBySide()),
                (this._rendered = this.element),
                (p.autofocus === !0 || o.autofocus) && this.codemirror.focus()
            var z = this.codemirror
            setTimeout(
                function () {
                    z.refresh()
                }.bind(z),
                0,
            )
        }
        Se.prototype.cleanup = function () {
            document.removeEventListener('keydown', this.documentOnKeyDown)
        }
        Se.prototype.autosave = function () {
            if (xc()) {
                var o = this
                if (this.options.autosave.uniqueId == null || this.options.autosave.uniqueId == '') {
                    console.log('EasyMDE: You must set a uniqueId to use the autosave feature')
                    return
                }
                this.options.autosave.binded !== !0 &&
                    (o.element.form != null &&
                        o.element.form != null &&
                        o.element.form.addEventListener('submit', function () {
                            clearTimeout(o.autosaveTimeoutId),
                                (o.autosaveTimeoutId = void 0),
                                localStorage.removeItem('smde_' + o.options.autosave.uniqueId)
                        }),
                    (this.options.autosave.binded = !0)),
                    this.options.autosave.loaded !== !0 &&
                        (typeof localStorage.getItem('smde_' + this.options.autosave.uniqueId) == 'string' &&
                            localStorage.getItem('smde_' + this.options.autosave.uniqueId) != '' &&
                            (this.codemirror.setValue(localStorage.getItem('smde_' + this.options.autosave.uniqueId)),
                            (this.options.autosave.foundSavedValue = !0)),
                        (this.options.autosave.loaded = !0))
                var p = o.value()
                p !== ''
                    ? localStorage.setItem('smde_' + this.options.autosave.uniqueId, p)
                    : localStorage.removeItem('smde_' + this.options.autosave.uniqueId)
                var v = document.getElementById('autosaved')
                if (v != null && v != null && v != '') {
                    var C = new Date(),
                        b = new Intl.DateTimeFormat(
                            [this.options.autosave.timeFormat.locale, 'en-US'],
                            this.options.autosave.timeFormat.format,
                        ).format(C),
                        _ = this.options.autosave.text == null ? 'Autosaved: ' : this.options.autosave.text
                    v.innerHTML = _ + b
                }
            } else console.log('EasyMDE: localStorage not available, cannot autosave')
        }
        Se.prototype.clearAutosavedValue = function () {
            if (xc()) {
                if (
                    this.options.autosave == null ||
                    this.options.autosave.uniqueId == null ||
                    this.options.autosave.uniqueId == ''
                ) {
                    console.log('EasyMDE: You must set a uniqueId to clear the autosave value')
                    return
                }
                localStorage.removeItem('smde_' + this.options.autosave.uniqueId)
            } else console.log('EasyMDE: localStorage not available, cannot autosave')
        }
        Se.prototype.openBrowseFileWindow = function (o, p) {
            var v = this,
                C = this.gui.toolbar.getElementsByClassName('imageInput')[0]
            C.click()
            function b(_) {
                v.options.imageUploadFunction
                    ? v.uploadImagesUsingCustomFunction(v.options.imageUploadFunction, _.target.files)
                    : v.uploadImages(_.target.files, o, p),
                    C.removeEventListener('change', b)
            }
            C.addEventListener('change', b)
        }
        Se.prototype.uploadImage = function (o, p, v) {
            var C = this
            p =
                p ||
                function (w) {
                    vc(C, w)
                }
            function b(h) {
                C.updateStatusBar('upload-image', h),
                    setTimeout(function () {
                        C.updateStatusBar('upload-image', C.options.imageTexts.sbInit)
                    }, 1e4),
                    v && typeof v == 'function' && v(h),
                    C.options.errorCallback(h)
            }
            function _(h) {
                var w = C.options.imageTexts.sizeUnits.split(',')
                return h
                    .replace('#image_name#', o.name)
                    .replace('#image_size#', qi(o.size, w))
                    .replace('#image_max_size#', qi(C.options.imageMaxSize, w))
            }
            if (o.size > this.options.imageMaxSize) {
                b(_(this.options.errorMessages.fileTooLarge))
                return
            }
            var s = new FormData()
            s.append('image', o),
                C.options.imageCSRFToken &&
                    !C.options.imageCSRFHeader &&
                    s.append(C.options.imageCSRFName, C.options.imageCSRFToken)
            var g = new XMLHttpRequest()
            ;(g.upload.onprogress = function (h) {
                if (h.lengthComputable) {
                    var w = '' + Math.round((h.loaded * 100) / h.total)
                    C.updateStatusBar(
                        'upload-image',
                        C.options.imageTexts.sbProgress.replace('#file_name#', o.name).replace('#progress#', w),
                    )
                }
            }),
                g.open('POST', this.options.imageUploadEndpoint),
                C.options.imageCSRFToken &&
                    C.options.imageCSRFHeader &&
                    g.setRequestHeader(C.options.imageCSRFName, C.options.imageCSRFToken),
                (g.onload = function () {
                    try {
                        var h = JSON.parse(this.responseText)
                    } catch {
                        console.error('EasyMDE: The server did not return a valid json.'),
                            b(_(C.options.errorMessages.importError))
                        return
                    }
                    this.status === 200 && h && !h.error && h.data && h.data.filePath
                        ? p((C.options.imagePathAbsolute ? '' : window.location.origin + '/') + h.data.filePath)
                        : h.error && h.error in C.options.errorMessages
                          ? b(_(C.options.errorMessages[h.error]))
                          : h.error
                            ? b(_(h.error))
                            : (console.error(
                                  'EasyMDE: Received an unexpected response after uploading the image.' +
                                      this.status +
                                      ' (' +
                                      this.statusText +
                                      ')',
                              ),
                              b(_(C.options.errorMessages.importError)))
                }),
                (g.onerror = function (h) {
                    console.error(
                        'EasyMDE: An unexpected error occurred when trying to upload the image.' +
                            h.target.status +
                            ' (' +
                            h.target.statusText +
                            ')',
                    ),
                        b(C.options.errorMessages.importError)
                }),
                g.send(s)
        }
        Se.prototype.uploadImageUsingCustomFunction = function (o, p) {
            var v = this
            function C(s) {
                vc(v, s)
            }
            function b(s) {
                var g = _(s)
                v.updateStatusBar('upload-image', g),
                    setTimeout(function () {
                        v.updateStatusBar('upload-image', v.options.imageTexts.sbInit)
                    }, 1e4),
                    v.options.errorCallback(g)
            }
            function _(s) {
                var g = v.options.imageTexts.sizeUnits.split(',')
                return s
                    .replace('#image_name#', p.name)
                    .replace('#image_size#', qi(p.size, g))
                    .replace('#image_max_size#', qi(v.options.imageMaxSize, g))
            }
            o.apply(this, [p, C, b])
        }
        Se.prototype.setPreviewMaxHeight = function () {
            var o = this.codemirror,
                p = o.getWrapperElement(),
                v = p.nextSibling,
                C = parseInt(window.getComputedStyle(p).paddingTop),
                b = parseInt(window.getComputedStyle(p).borderTopWidth),
                _ = parseInt(this.options.maxHeight),
                s = _ + C * 2 + b * 2,
                g = s.toString() + 'px'
            v.style.height = g
        }
        Se.prototype.createSideBySide = function () {
            var o = this.codemirror,
                p = o.getWrapperElement(),
                v = p.nextSibling
            if (!v || !v.classList.contains('editor-preview-side')) {
                if (
                    ((v = document.createElement('div')),
                    (v.className = 'editor-preview-side'),
                    this.options.previewClass)
                )
                    if (Array.isArray(this.options.previewClass))
                        for (var C = 0; C < this.options.previewClass.length; C++)
                            v.classList.add(this.options.previewClass[C])
                    else typeof this.options.previewClass == 'string' && v.classList.add(this.options.previewClass)
                p.parentNode.insertBefore(v, p.nextSibling)
            }
            if (
                (typeof this.options.maxHeight < 'u' && this.setPreviewMaxHeight(),
                this.options.syncSideBySidePreviewScroll === !1)
            )
                return v
            var b = !1,
                _ = !1
            return (
                o.on('scroll', function (s) {
                    if (b) {
                        b = !1
                        return
                    }
                    _ = !0
                    var g = s.getScrollInfo().height - s.getScrollInfo().clientHeight,
                        h = parseFloat(s.getScrollInfo().top) / g,
                        w = (v.scrollHeight - v.clientHeight) * h
                    v.scrollTop = w
                }),
                (v.onscroll = function () {
                    if (_) {
                        _ = !1
                        return
                    }
                    b = !0
                    var s = v.scrollHeight - v.clientHeight,
                        g = parseFloat(v.scrollTop) / s,
                        h = (o.getScrollInfo().height - o.getScrollInfo().clientHeight) * g
                    o.scrollTo(0, h)
                }),
                v
            )
        }
        Se.prototype.createToolbar = function (o) {
            if (((o = o || this.options.toolbar), !(!o || o.length === 0))) {
                var p
                for (p = 0; p < o.length; p++) jr[o[p]] != null && (o[p] = jr[o[p]])
                var v = document.createElement('div')
                ;(v.className = 'editor-toolbar'), v.setAttribute('role', 'toolbar')
                var C = this,
                    b = {}
                for (C.toolbar = o, p = 0; p < o.length; p++)
                    if (
                        !(o[p].name == 'guide' && C.options.toolbarGuideIcon === !1) &&
                        !(C.options.hideIcons && C.options.hideIcons.indexOf(o[p].name) != -1) &&
                        !((o[p].name == 'fullscreen' || o[p].name == 'side-by-side') && ta())
                    ) {
                        if (o[p] === '|') {
                            for (var _ = !1, s = p + 1; s < o.length; s++)
                                o[s] !== '|' &&
                                    (!C.options.hideIcons || C.options.hideIcons.indexOf(o[s].name) == -1) &&
                                    (_ = !0)
                            if (!_) continue
                        }
                        ;(function (w) {
                            var k
                            if (
                                (w === '|'
                                    ? (k = Id())
                                    : w.children
                                      ? (k = qd(w, C.options.toolbarTips, C.options.shortcuts, C))
                                      : (k = Di(w, !0, C.options.toolbarTips, C.options.shortcuts, 'button', C)),
                                (b[w.name || w] = k),
                                v.appendChild(k),
                                w.name === 'upload-image')
                            ) {
                                var c = document.createElement('input')
                                ;(c.className = 'imageInput'),
                                    (c.type = 'file'),
                                    (c.multiple = !0),
                                    (c.name = 'image'),
                                    (c.accept = C.options.imageAccept),
                                    (c.style.display = 'none'),
                                    (c.style.opacity = 0),
                                    v.appendChild(c)
                            }
                        })(o[p])
                    }
                ;(C.toolbar_div = v), (C.toolbarElements = b)
                var g = this.codemirror
                g.on('cursorActivity', function () {
                    var w = Lr(g)
                    for (var k in b)
                        (function (c) {
                            var d = b[c]
                            w[c]
                                ? d.classList.add('active')
                                : c != 'fullscreen' && c != 'side-by-side' && d.classList.remove('active')
                        })(k)
                })
                var h = g.getWrapperElement()
                return h.parentNode.insertBefore(v, h), v
            }
        }
        Se.prototype.createStatusbar = function (o) {
            o = o || this.options.status
            var p = this.options,
                v = this.codemirror
            if (!(!o || o.length === 0)) {
                var C = [],
                    b,
                    _,
                    s,
                    g
                for (b = 0; b < o.length; b++)
                    if (((_ = void 0), (s = void 0), (g = void 0), typeof o[b] == 'object'))
                        C.push({
                            className: o[b].className,
                            defaultValue: o[b].defaultValue,
                            onUpdate: o[b].onUpdate,
                            onActivity: o[b].onActivity,
                        })
                    else {
                        var h = o[b]
                        h === 'words'
                            ? ((g = function (S) {
                                  S.innerHTML = pc(v.getValue())
                              }),
                              (_ = function (S) {
                                  S.innerHTML = pc(v.getValue())
                              }))
                            : h === 'lines'
                              ? ((g = function (S) {
                                    S.innerHTML = v.lineCount()
                                }),
                                (_ = function (S) {
                                    S.innerHTML = v.lineCount()
                                }))
                              : h === 'cursor'
                                ? ((g = function (S) {
                                      S.innerHTML = '1:1'
                                  }),
                                  (s = function (S) {
                                      var E = v.getCursor(),
                                          z = E.line + 1,
                                          y = E.ch + 1
                                      S.innerHTML = z + ':' + y
                                  }))
                                : h === 'autosave'
                                  ? (g = function (S) {
                                        p.autosave != null &&
                                            p.autosave.enabled === !0 &&
                                            S.setAttribute('id', 'autosaved')
                                    })
                                  : h === 'upload-image' &&
                                    (g = function (S) {
                                        S.innerHTML = p.imageTexts.sbInit
                                    }),
                            C.push({ className: h, defaultValue: g, onUpdate: _, onActivity: s })
                    }
                var w = document.createElement('div')
                for (w.className = 'editor-statusbar', b = 0; b < C.length; b++) {
                    var k = C[b],
                        c = document.createElement('span')
                    ;(c.className = k.className),
                        typeof k.defaultValue == 'function' && k.defaultValue(c),
                        typeof k.onUpdate == 'function' &&
                            this.codemirror.on(
                                'update',
                                (function (S, E) {
                                    return function () {
                                        E.onUpdate(S)
                                    }
                                })(c, k),
                            ),
                        typeof k.onActivity == 'function' &&
                            this.codemirror.on(
                                'cursorActivity',
                                (function (S, E) {
                                    return function () {
                                        E.onActivity(S)
                                    }
                                })(c, k),
                            ),
                        w.appendChild(c)
                }
                var d = this.codemirror.getWrapperElement()
                return d.parentNode.insertBefore(w, d.nextSibling), w
            }
        }
        Se.prototype.value = function (o) {
            var p = this.codemirror
            if (o === void 0) return p.getValue()
            if ((p.getDoc().setValue(o), this.isPreviewActive())) {
                var v = p.getWrapperElement(),
                    C = v.lastChild,
                    b = this.options.previewRender(o, C)
                b !== null && (C.innerHTML = b)
            }
            return this
        }
        Se.toggleBold = Ii
        Se.toggleItalic = Fi
        Se.toggleStrikethrough = Ni
        Se.toggleBlockquote = Pi
        Se.toggleHeadingSmaller = Xn
        Se.toggleHeadingBigger = ji
        Se.toggleHeading1 = Ri
        Se.toggleHeading2 = Hi
        Se.toggleHeading3 = Bi
        Se.toggleHeading4 = ra
        Se.toggleHeading5 = na
        Se.toggleHeading6 = ia
        Se.toggleCodeBlock = Oi
        Se.toggleUnorderedList = Wi
        Se.toggleOrderedList = Ui
        Se.cleanBlock = $i
        Se.drawLink = Ki
        Se.drawImage = Gi
        Se.drawUploadedImage = oa
        Se.drawTable = Zi
        Se.drawHorizontalRule = Xi
        Se.undo = Yi
        Se.redo = Qi
        Se.togglePreview = Vi
        Se.toggleSideBySide = hn
        Se.toggleFullScreen = Rr
        Se.prototype.toggleBold = function () {
            Ii(this)
        }
        Se.prototype.toggleItalic = function () {
            Fi(this)
        }
        Se.prototype.toggleStrikethrough = function () {
            Ni(this)
        }
        Se.prototype.toggleBlockquote = function () {
            Pi(this)
        }
        Se.prototype.toggleHeadingSmaller = function () {
            Xn(this)
        }
        Se.prototype.toggleHeadingBigger = function () {
            ji(this)
        }
        Se.prototype.toggleHeading1 = function () {
            Ri(this)
        }
        Se.prototype.toggleHeading2 = function () {
            Hi(this)
        }
        Se.prototype.toggleHeading3 = function () {
            Bi(this)
        }
        Se.prototype.toggleHeading4 = function () {
            ra(this)
        }
        Se.prototype.toggleHeading5 = function () {
            na(this)
        }
        Se.prototype.toggleHeading6 = function () {
            ia(this)
        }
        Se.prototype.toggleCodeBlock = function () {
            Oi(this)
        }
        Se.prototype.toggleUnorderedList = function () {
            Wi(this)
        }
        Se.prototype.toggleOrderedList = function () {
            Ui(this)
        }
        Se.prototype.cleanBlock = function () {
            $i(this)
        }
        Se.prototype.drawLink = function () {
            Ki(this)
        }
        Se.prototype.drawImage = function () {
            Gi(this)
        }
        Se.prototype.drawUploadedImage = function () {
            oa(this)
        }
        Se.prototype.drawTable = function () {
            Zi(this)
        }
        Se.prototype.drawHorizontalRule = function () {
            Xi(this)
        }
        Se.prototype.undo = function () {
            Yi(this)
        }
        Se.prototype.redo = function () {
            Qi(this)
        }
        Se.prototype.togglePreview = function () {
            Vi(this)
        }
        Se.prototype.toggleSideBySide = function () {
            hn(this)
        }
        Se.prototype.toggleFullScreen = function () {
            Rr(this)
        }
        Se.prototype.isPreviewActive = function () {
            var o = this.codemirror,
                p = o.getWrapperElement(),
                v = p.lastChild
            return v.classList.contains('editor-preview-active')
        }
        Se.prototype.isSideBySideActive = function () {
            var o = this.codemirror,
                p = o.getWrapperElement(),
                v = p.nextSibling
            return v.classList.contains('editor-preview-active-side')
        }
        Se.prototype.isFullscreenActive = function () {
            var o = this.codemirror
            return o.getOption('fullScreen')
        }
        Se.prototype.getState = function () {
            var o = this.codemirror
            return Lr(o)
        }
        Se.prototype.toTextArea = function () {
            var o = this.codemirror,
                p = o.getWrapperElement(),
                v = p.parentNode
            v &&
                (this.gui.toolbar && v.removeChild(this.gui.toolbar),
                this.gui.statusbar && v.removeChild(this.gui.statusbar),
                this.gui.sideBySide && v.removeChild(this.gui.sideBySide)),
                v.parentNode.insertBefore(p, v),
                v.remove(),
                o.toTextArea(),
                this.autosaveTimeoutId &&
                    (clearTimeout(this.autosaveTimeoutId),
                    (this.autosaveTimeoutId = void 0),
                    this.clearAutosavedValue())
        }
        window.EasyMDE = Se
    })
window.CodeMirror = Re()
Re()
Kn()
fs()
hs()
vs()
xs()
Qo()
Ts()
fn()
Ms()
js()
Us()
Vs()
tu()
Gn()
iu()
pn()
lu()
cu()
Vo()
pu()
mu()
yu()
ku()
Tu()
Eu()
Au()
Iu()
Jo()
ju()
Bu()
ea()
Gu()
sc()
dn()
fc()
_c()
CodeMirror.commands.tabAndIndentMarkdownList = function (o) {
    var p = o.listSelections(),
        v = p[0].head,
        C = o.getStateAfter(v.line),
        b = C.list !== !1
    if (b) {
        o.execCommand('indentMore')
        return
    }
    if (o.options.indentWithTabs) {
        o.execCommand('insertTab')
        return
    }
    var _ = Array(o.options.tabSize + 1).join(' ')
    o.replaceSelection(_)
}
CodeMirror.commands.shiftTabAndUnindentMarkdownList = function (o) {
    var p = o.listSelections(),
        v = p[0].head,
        C = o.getStateAfter(v.line),
        b = C.list !== !1
    if (b) {
        o.execCommand('indentLess')
        return
    }
    if (o.options.indentWithTabs) {
        o.execCommand('insertTab')
        return
    }
    var _ = Array(o.options.tabSize + 1).join(' ')
    o.replaceSelection(_)
}
function Ud({
    isLiveDebounced: o,
    isLiveOnBlur: p,
    liveDebounce: v,
    placeholder: C,
    state: b,
    translations: _,
    toolbarButtons: s,
    uploadFileAttachmentUsing: g,
}) {
    return {
        editor: null,
        state: b,
        init: async function () {
            ;(this.editor = new EasyMDE({
                autoDownloadFontAwesome: !1,
                autoRefresh: !0,
                autoSave: !1,
                element: this.$refs.editor,
                imageAccept: 'image/png, image/jpeg, image/gif, image/avif',
                imageUploadFunction: g,
                initialValue: this.state ?? '',
                minHeight: '11.25rem',
                placeholder: C,
                previewImagesInEditor: !0,
                spellChecker: !1,
                status: [{ className: 'upload-image', defaultValue: '' }],
                toolbar: this.getToolbar(),
                uploadImage: !0,
            })),
                this.editor.codemirror.setOption('direction', document.documentElement?.dir ?? 'ltr'),
                this.editor.codemirror.on('changes', (h, w) => {
                    try {
                        let k = w[w.length - 1]
                        if (k.origin === '+input') {
                            let c = '(https://)',
                                d = k.text[k.text.length - 1]
                            if (d.endsWith(c) && d !== '[]' + c) {
                                let S = k.from,
                                    E = k.to,
                                    y = k.text.length > 1 ? 0 : S.ch
                                setTimeout(() => {
                                    h.setSelection(
                                        { line: E.line, ch: y + d.lastIndexOf('(') + 1 },
                                        { line: E.line, ch: y + d.lastIndexOf(')') },
                                    )
                                }, 25)
                            }
                        }
                    } catch {}
                }),
                this.editor.codemirror.on(
                    'change',
                    Alpine.debounce(() => {
                        this.editor && ((this.state = this.editor.value()), o && this.$wire.call('$refresh'))
                    }, v ?? 300),
                ),
                p && this.editor.codemirror.on('blur', () => this.$wire.call('$refresh')),
                this.$watch('state', () => {
                    this.editor && (this.editor.codemirror.hasFocus() || this.editor.value(this.state ?? ''))
                })
        },
        destroy: function () {
            this.editor.cleanup(), (this.editor = null)
        },
        getToolbar: function () {
            let h = []
            return (
                s.includes('bold') &&
                    h.push({ name: 'bold', action: EasyMDE.toggleBold, title: _.toolbar_buttons?.bold }),
                s.includes('italic') &&
                    h.push({ name: 'italic', action: EasyMDE.toggleItalic, title: _.toolbar_buttons?.italic }),
                s.includes('strike') &&
                    h.push({
                        name: 'strikethrough',
                        action: EasyMDE.toggleStrikethrough,
                        title: _.toolbar_buttons?.strike,
                    }),
                s.includes('link') &&
                    h.push({ name: 'link', action: EasyMDE.drawLink, title: _.toolbar_buttons?.link }),
                ['bold', 'italic', 'strike', 'link'].some((w) => s.includes(w)) &&
                    ['heading'].some((w) => s.includes(w)) &&
                    h.push('|'),
                s.includes('heading') &&
                    h.push({
                        name: 'heading',
                        action: EasyMDE.toggleHeadingSmaller,
                        title: _.toolbar_buttons?.heading,
                    }),
                ['heading'].some((w) => s.includes(w)) &&
                    ['blockquote', 'codeBlock', 'bulletList', 'orderedList'].some((w) => s.includes(w)) &&
                    h.push('|'),
                s.includes('blockquote') &&
                    h.push({ name: 'quote', action: EasyMDE.toggleBlockquote, title: _.toolbar_buttons?.blockquote }),
                s.includes('codeBlock') &&
                    h.push({ name: 'code', action: EasyMDE.toggleCodeBlock, title: _.toolbar_buttons?.code_block }),
                s.includes('bulletList') &&
                    h.push({
                        name: 'unordered-list',
                        action: EasyMDE.toggleUnorderedList,
                        title: _.toolbar_buttons?.bullet_list,
                    }),
                s.includes('orderedList') &&
                    h.push({
                        name: 'ordered-list',
                        action: EasyMDE.toggleOrderedList,
                        title: _.toolbar_buttons?.ordered_list,
                    }),
                ['blockquote', 'codeBlock', 'bulletList', 'orderedList'].some((w) => s.includes(w)) &&
                    ['table', 'attachFiles'].some((w) => s.includes(w)) &&
                    h.push('|'),
                s.includes('table') &&
                    h.push({ name: 'table', action: EasyMDE.drawTable, title: _.toolbar_buttons?.table }),
                s.includes('attachFiles') &&
                    h.push({
                        name: 'upload-image',
                        action: EasyMDE.drawUploadedImage,
                        title: _.toolbar_buttons?.attach_files,
                    }),
                ['table', 'attachFiles'].some((w) => s.includes(w)) &&
                    ['undo', 'redo'].some((w) => s.includes(w)) &&
                    h.push('|'),
                s.includes('undo') && h.push({ name: 'undo', action: EasyMDE.undo, title: _.toolbar_buttons?.undo }),
                s.includes('redo') && h.push({ name: 'redo', action: EasyMDE.redo, title: _.toolbar_buttons?.redo }),
                h
            )
        },
    }
}
export { Ud as default }
