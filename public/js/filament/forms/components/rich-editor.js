var et = Object.create
var Z = Object.defineProperty
var nt = Object.getOwnPropertyDescriptor
var it = Object.getOwnPropertyNames
var rt = Object.getPrototypeOf,
    ot = Object.prototype.hasOwnProperty
var st = (I, g) => () => (g || I((g = { exports: {} }).exports, g), g.exports)
var at = (I, g, x, b) => {
    if ((g && typeof g == 'object') || typeof g == 'function')
        for (let y of it(g))
            !ot.call(I, y) && y !== x && Z(I, y, { get: () => g[y], enumerable: !(b = nt(g, y)) || b.enumerable })
    return I
}
var ut = (I, g, x) => (
    (x = I != null ? et(rt(I)) : {}),
    at(g || !I || !I.__esModule ? Z(x, 'default', { value: I, enumerable: !0 }) : x, I)
)
var Q = st((q, V) => {
    ;(function () {}).call(q),
        function () {
            var I
            window.Set == null &&
                (window.Set = I =
                    (function () {
                        function g() {
                            this.clear()
                        }
                        return (
                            (g.prototype.clear = function () {
                                return (this.values = [])
                            }),
                            (g.prototype.has = function (x) {
                                return this.values.indexOf(x) !== -1
                            }),
                            (g.prototype.add = function (x) {
                                return this.has(x) || this.values.push(x), this
                            }),
                            (g.prototype.delete = function (x) {
                                var b
                                return (b = this.values.indexOf(x)) === -1 ? !1 : (this.values.splice(b, 1), !0)
                            }),
                            (g.prototype.forEach = function () {
                                var x
                                return (x = this.values).forEach.apply(x, arguments)
                            }),
                            g
                        )
                    })())
        }.call(q),
        (function (I) {
            function g() {}
            function x(n, p) {
                return function () {
                    n.apply(p, arguments)
                }
            }
            function b(n) {
                if (typeof this != 'object') throw new TypeError('Promises must be constructed via new')
                if (typeof n != 'function') throw new TypeError('not a function')
                ;(this._state = 0), (this._handled = !1), (this._value = void 0), (this._deferreds = []), d(n, this)
            }
            function y(n, p) {
                for (; n._state === 3; ) n = n._value
                return n._state === 0
                    ? void n._deferreds.push(p)
                    : ((n._handled = !0),
                      void u(function () {
                          var c = n._state === 1 ? p.onFulfilled : p.onRejected
                          if (c === null) return void (n._state === 1 ? h : o)(p.promise, n._value)
                          var v
                          try {
                              v = c(n._value)
                          } catch (t) {
                              return void o(p.promise, t)
                          }
                          h(p.promise, v)
                      }))
            }
            function h(n, p) {
                try {
                    if (p === n) throw new TypeError('A promise cannot be resolved with itself.')
                    if (p && (typeof p == 'object' || typeof p == 'function')) {
                        var c = p.then
                        if (p instanceof b) return (n._state = 3), (n._value = p), void e(n)
                        if (typeof c == 'function') return void d(x(c, p), n)
                    }
                    ;(n._state = 1), (n._value = p), e(n)
                } catch (v) {
                    o(n, v)
                }
            }
            function o(n, p) {
                ;(n._state = 2), (n._value = p), e(n)
            }
            function e(n) {
                n._state === 2 &&
                    n._deferreds.length === 0 &&
                    setTimeout(function () {
                        n._handled || s(n._value)
                    }, 1)
                for (var p = 0, c = n._deferreds.length; c > p; p++) y(n, n._deferreds[p])
                n._deferreds = null
            }
            function a(n, p, c) {
                ;(this.onFulfilled = typeof n == 'function' ? n : null),
                    (this.onRejected = typeof p == 'function' ? p : null),
                    (this.promise = c)
            }
            function d(n, p) {
                var c = !1
                try {
                    n(
                        function (v) {
                            c || ((c = !0), h(p, v))
                        },
                        function (v) {
                            c || ((c = !0), o(p, v))
                        },
                    )
                } catch (v) {
                    if (c) return
                    ;(c = !0), o(p, v)
                }
            }
            var i = setTimeout,
                u =
                    (typeof setImmediate == 'function' && setImmediate) ||
                    function (n) {
                        i(n, 1)
                    },
                s = function (n) {
                    typeof console < 'u' && console && console.warn('Possible Unhandled Promise Rejection:', n)
                }
            ;(b.prototype.catch = function (n) {
                return this.then(null, n)
            }),
                (b.prototype.then = function (n, p) {
                    var c = new b(g)
                    return y(this, new a(n, p, c)), c
                }),
                (b.all = function (n) {
                    var p = Array.prototype.slice.call(n)
                    return new b(function (c, v) {
                        function t(A, f) {
                            try {
                                if (f && (typeof f == 'object' || typeof f == 'function')) {
                                    var m = f.then
                                    if (typeof m == 'function')
                                        return void m.call(
                                            f,
                                            function (C) {
                                                t(A, C)
                                            },
                                            v,
                                        )
                                }
                                ;(p[A] = f), --r === 0 && c(p)
                            } catch (C) {
                                v(C)
                            }
                        }
                        if (p.length === 0) return c([])
                        for (var r = p.length, l = 0; l < p.length; l++) t(l, p[l])
                    })
                }),
                (b.resolve = function (n) {
                    return n && typeof n == 'object' && n.constructor === b
                        ? n
                        : new b(function (p) {
                              p(n)
                          })
                }),
                (b.reject = function (n) {
                    return new b(function (p, c) {
                        c(n)
                    })
                }),
                (b.race = function (n) {
                    return new b(function (p, c) {
                        for (var v = 0, t = n.length; t > v; v++) n[v].then(p, c)
                    })
                }),
                (b._setImmediateFn = function (n) {
                    u = n
                }),
                (b._setUnhandledRejectionFn = function (n) {
                    s = n
                }),
                typeof V < 'u' && V.exports ? (V.exports = b) : I.Promise || (I.Promise = b)
        })(q),
        function () {
            var I = typeof window.customElements == 'object',
                g = typeof document.registerElement == 'function',
                x = I || g
            x ||
                (typeof WeakMap > 'u' &&
                    (function () {
                        var b = Object.defineProperty,
                            y = Date.now() % 1e9,
                            h = function () {
                                this.name = '__st' + ((1e9 * Math.random()) >>> 0) + (y++ + '__')
                            }
                        ;(h.prototype = {
                            set: function (o, e) {
                                var a = o[this.name]
                                return (
                                    a && a[0] === o ? (a[1] = e) : b(o, this.name, { value: [o, e], writable: !0 }),
                                    this
                                )
                            },
                            get: function (o) {
                                var e
                                return (e = o[this.name]) && e[0] === o ? e[1] : void 0
                            },
                            delete: function (o) {
                                var e = o[this.name]
                                return e && e[0] === o ? ((e[0] = e[1] = void 0), !0) : !1
                            },
                            has: function (o) {
                                var e = o[this.name]
                                return e ? e[0] === o : !1
                            },
                        }),
                            (window.WeakMap = h)
                    })(),
                (function (b) {
                    function y(D) {
                        C.push(D), m || ((m = !0), r(o))
                    }
                    function h(D) {
                        return (window.ShadowDOMPolyfill && window.ShadowDOMPolyfill.wrapIfNeeded(D)) || D
                    }
                    function o() {
                        m = !1
                        var D = C
                        ;(C = []),
                            D.sort(function (E, w) {
                                return E.uid_ - w.uid_
                            })
                        var R = !1
                        D.forEach(function (E) {
                            var w = E.takeRecords()
                            e(E), w.length && (E.callback_(w, E), (R = !0))
                        }),
                            R && o()
                    }
                    function e(D) {
                        D.nodes_.forEach(function (R) {
                            var E = l.get(R)
                            E &&
                                E.forEach(function (w) {
                                    w.observer === D && w.removeTransientObservers()
                                })
                        })
                    }
                    function a(D, R) {
                        for (var E = D; E; E = E.parentNode) {
                            var w = l.get(E)
                            if (w)
                                for (var k = 0; k < w.length; k++) {
                                    var T = w[k],
                                        N = T.options
                                    if (E === D || N.subtree) {
                                        var P = R(N)
                                        P && T.enqueue(P)
                                    }
                                }
                        }
                    }
                    function d(D) {
                        ;(this.callback_ = D), (this.nodes_ = []), (this.records_ = []), (this.uid_ = ++S)
                    }
                    function i(D, R) {
                        ;(this.type = D),
                            (this.target = R),
                            (this.addedNodes = []),
                            (this.removedNodes = []),
                            (this.previousSibling = null),
                            (this.nextSibling = null),
                            (this.attributeName = null),
                            (this.attributeNamespace = null),
                            (this.oldValue = null)
                    }
                    function u(D) {
                        var R = new i(D.type, D.target)
                        return (
                            (R.addedNodes = D.addedNodes.slice()),
                            (R.removedNodes = D.removedNodes.slice()),
                            (R.previousSibling = D.previousSibling),
                            (R.nextSibling = D.nextSibling),
                            (R.attributeName = D.attributeName),
                            (R.attributeNamespace = D.attributeNamespace),
                            (R.oldValue = D.oldValue),
                            R
                        )
                    }
                    function s(D, R) {
                        return (L = new i(D, R))
                    }
                    function n(D) {
                        return O || ((O = u(L)), (O.oldValue = D), O)
                    }
                    function p() {
                        L = O = void 0
                    }
                    function c(D) {
                        return D === O || D === L
                    }
                    function v(D, R) {
                        return D === R ? D : O && c(D) ? O : null
                    }
                    function t(D, R, E) {
                        ;(this.observer = D), (this.target = R), (this.options = E), (this.transientObservedNodes = [])
                    }
                    if (!b.JsMutationObserver) {
                        var r,
                            l = new WeakMap()
                        if (/Trident|Edge/.test(navigator.userAgent)) r = setTimeout
                        else if (window.setImmediate) r = window.setImmediate
                        else {
                            var A = [],
                                f = String(Math.random())
                            window.addEventListener('message', function (D) {
                                if (D.data === f) {
                                    var R = A
                                    ;(A = []),
                                        R.forEach(function (E) {
                                            E()
                                        })
                                }
                            }),
                                (r = function (D) {
                                    A.push(D), window.postMessage(f, '*')
                                })
                        }
                        var m = !1,
                            C = [],
                            S = 0
                        d.prototype = {
                            observe: function (D, R) {
                                if (
                                    ((D = h(D)),
                                    (!R.childList && !R.attributes && !R.characterData) ||
                                        (R.attributeOldValue && !R.attributes) ||
                                        (R.attributeFilter && R.attributeFilter.length && !R.attributes) ||
                                        (R.characterDataOldValue && !R.characterData))
                                )
                                    throw new SyntaxError()
                                var E = l.get(D)
                                E || l.set(D, (E = []))
                                for (var w, k = 0; k < E.length; k++)
                                    if (E[k].observer === this) {
                                        ;(w = E[k]), w.removeListeners(), (w.options = R)
                                        break
                                    }
                                w || ((w = new t(this, D, R)), E.push(w), this.nodes_.push(D)), w.addListeners()
                            },
                            disconnect: function () {
                                this.nodes_.forEach(function (D) {
                                    for (var R = l.get(D), E = 0; E < R.length; E++) {
                                        var w = R[E]
                                        if (w.observer === this) {
                                            w.removeListeners(), R.splice(E, 1)
                                            break
                                        }
                                    }
                                }, this),
                                    (this.records_ = [])
                            },
                            takeRecords: function () {
                                var D = this.records_
                                return (this.records_ = []), D
                            },
                        }
                        var L, O
                        ;(t.prototype = {
                            enqueue: function (D) {
                                var R = this.observer.records_,
                                    E = R.length
                                if (R.length > 0) {
                                    var w = R[E - 1],
                                        k = v(w, D)
                                    if (k) return void (R[E - 1] = k)
                                } else y(this.observer)
                                R[E] = D
                            },
                            addListeners: function () {
                                this.addListeners_(this.target)
                            },
                            addListeners_: function (D) {
                                var R = this.options
                                R.attributes && D.addEventListener('DOMAttrModified', this, !0),
                                    R.characterData && D.addEventListener('DOMCharacterDataModified', this, !0),
                                    R.childList && D.addEventListener('DOMNodeInserted', this, !0),
                                    (R.childList || R.subtree) && D.addEventListener('DOMNodeRemoved', this, !0)
                            },
                            removeListeners: function () {
                                this.removeListeners_(this.target)
                            },
                            removeListeners_: function (D) {
                                var R = this.options
                                R.attributes && D.removeEventListener('DOMAttrModified', this, !0),
                                    R.characterData && D.removeEventListener('DOMCharacterDataModified', this, !0),
                                    R.childList && D.removeEventListener('DOMNodeInserted', this, !0),
                                    (R.childList || R.subtree) && D.removeEventListener('DOMNodeRemoved', this, !0)
                            },
                            addTransientObserver: function (D) {
                                if (D !== this.target) {
                                    this.addListeners_(D), this.transientObservedNodes.push(D)
                                    var R = l.get(D)
                                    R || l.set(D, (R = [])), R.push(this)
                                }
                            },
                            removeTransientObservers: function () {
                                var D = this.transientObservedNodes
                                ;(this.transientObservedNodes = []),
                                    D.forEach(function (R) {
                                        this.removeListeners_(R)
                                        for (var E = l.get(R), w = 0; w < E.length; w++)
                                            if (E[w] === this) {
                                                E.splice(w, 1)
                                                break
                                            }
                                    }, this)
                            },
                            handleEvent: function (D) {
                                switch ((D.stopImmediatePropagation(), D.type)) {
                                    case 'DOMAttrModified':
                                        var R = D.attrName,
                                            E = D.relatedNode.namespaceURI,
                                            w = D.target,
                                            B = new s('attributes', w)
                                        ;(B.attributeName = R), (B.attributeNamespace = E)
                                        var k = D.attrChange === MutationEvent.ADDITION ? null : D.prevValue
                                        a(w, function (M) {
                                            return !M.attributes ||
                                                (M.attributeFilter &&
                                                    M.attributeFilter.length &&
                                                    M.attributeFilter.indexOf(R) === -1 &&
                                                    M.attributeFilter.indexOf(E) === -1)
                                                ? void 0
                                                : M.attributeOldValue
                                                  ? n(k)
                                                  : B
                                        })
                                        break
                                    case 'DOMCharacterDataModified':
                                        var w = D.target,
                                            B = s('characterData', w),
                                            k = D.prevValue
                                        a(w, function (M) {
                                            return M.characterData ? (M.characterDataOldValue ? n(k) : B) : void 0
                                        })
                                        break
                                    case 'DOMNodeRemoved':
                                        this.addTransientObserver(D.target)
                                    case 'DOMNodeInserted':
                                        var T,
                                            N,
                                            P = D.target
                                        D.type === 'DOMNodeInserted' ? ((T = [P]), (N = [])) : ((T = []), (N = [P]))
                                        var _ = P.previousSibling,
                                            F = P.nextSibling,
                                            B = s('childList', D.target.parentNode)
                                        ;(B.addedNodes = T),
                                            (B.removedNodes = N),
                                            (B.previousSibling = _),
                                            (B.nextSibling = F),
                                            a(D.relatedNode, function (M) {
                                                return M.childList ? B : void 0
                                            })
                                }
                                p()
                            },
                        }),
                            (b.JsMutationObserver = d),
                            b.MutationObserver || ((b.MutationObserver = d), (d._isPolyfilled = !0))
                    }
                })(self),
                (function () {
                    'use strict'
                    if (!window.performance || !window.performance.now) {
                        var b = Date.now()
                        window.performance = {
                            now: function () {
                                return Date.now() - b
                            },
                        }
                    }
                    window.requestAnimationFrame ||
                        (window.requestAnimationFrame = (function () {
                            var a = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame
                            return a
                                ? function (d) {
                                      return a(function () {
                                          d(performance.now())
                                      })
                                  }
                                : function (d) {
                                      return window.setTimeout(d, 1e3 / 60)
                                  }
                        })()),
                        window.cancelAnimationFrame ||
                            (window.cancelAnimationFrame = (function () {
                                return (
                                    window.webkitCancelAnimationFrame ||
                                    window.mozCancelAnimationFrame ||
                                    function (a) {
                                        clearTimeout(a)
                                    }
                                )
                            })())
                    var y = (function () {
                        var a = document.createEvent('Event')
                        return a.initEvent('foo', !0, !0), a.preventDefault(), a.defaultPrevented
                    })()
                    if (!y) {
                        var h = Event.prototype.preventDefault
                        Event.prototype.preventDefault = function () {
                            this.cancelable &&
                                (h.call(this),
                                Object.defineProperty(this, 'defaultPrevented', {
                                    get: function () {
                                        return !0
                                    },
                                    configurable: !0,
                                }))
                        }
                    }
                    var o = /Trident/.test(navigator.userAgent)
                    if (
                        ((!window.CustomEvent || (o && typeof window.CustomEvent != 'function')) &&
                            ((window.CustomEvent = function (a, d) {
                                d = d || {}
                                var i = document.createEvent('CustomEvent')
                                return i.initCustomEvent(a, !!d.bubbles, !!d.cancelable, d.detail), i
                            }),
                            (window.CustomEvent.prototype = window.Event.prototype)),
                        !window.Event || (o && typeof window.Event != 'function'))
                    ) {
                        var e = window.Event
                        ;(window.Event = function (a, d) {
                            d = d || {}
                            var i = document.createEvent('Event')
                            return i.initEvent(a, !!d.bubbles, !!d.cancelable), i
                        }),
                            (window.Event.prototype = e.prototype)
                    }
                })(window.WebComponents),
                (window.CustomElements = window.CustomElements || { flags: {} }),
                (function (b) {
                    var y = b.flags,
                        h = [],
                        o = function (a) {
                            h.push(a)
                        },
                        e = function () {
                            h.forEach(function (a) {
                                a(b)
                            })
                        }
                    ;(b.addModule = o),
                        (b.initializeModules = e),
                        (b.hasNative = !!document.registerElement),
                        (b.isIE = /Trident/.test(navigator.userAgent)),
                        (b.useNative =
                            !y.register &&
                            b.hasNative &&
                            !window.ShadowDOMPolyfill &&
                            (!window.HTMLImports || window.HTMLImports.useNative))
                })(window.CustomElements),
                window.CustomElements.addModule(function (b) {
                    function y(i, u) {
                        h(i, function (s) {
                            return u(s) ? !0 : void o(s, u)
                        }),
                            o(i, u)
                    }
                    function h(i, u, s) {
                        var n = i.firstElementChild
                        if (!n) for (n = i.firstChild; n && n.nodeType !== Node.ELEMENT_NODE; ) n = n.nextSibling
                        for (; n; ) u(n, s) !== !0 && h(n, u, s), (n = n.nextElementSibling)
                        return null
                    }
                    function o(i, u) {
                        for (var s = i.shadowRoot; s; ) y(s, u), (s = s.olderShadowRoot)
                    }
                    function e(i, u) {
                        a(i, u, [])
                    }
                    function a(i, u, s) {
                        if (((i = window.wrap(i)), !(s.indexOf(i) >= 0))) {
                            s.push(i)
                            for (
                                var n, p = i.querySelectorAll('link[rel=' + d + ']'), c = 0, v = p.length;
                                v > c && (n = p[c]);
                                c++
                            )
                                n.import && a(n.import, u, s)
                            u(i)
                        }
                    }
                    var d = window.HTMLImports ? window.HTMLImports.IMPORT_LINK_TYPE : 'none'
                    ;(b.forDocumentTree = e), (b.forSubtree = y)
                }),
                window.CustomElements.addModule(function (b) {
                    function y(E, w) {
                        return h(E, w) || o(E, w)
                    }
                    function h(E, w) {
                        return b.upgrade(E, w) ? !0 : void (w && d(E))
                    }
                    function o(E, w) {
                        m(E, function (k) {
                            return h(k, w) ? !0 : void 0
                        })
                    }
                    function e(E) {
                        O.push(E), L || ((L = !0), setTimeout(a))
                    }
                    function a() {
                        L = !1
                        for (var E, w = O, k = 0, T = w.length; T > k && (E = w[k]); k++) E()
                        O = []
                    }
                    function d(E) {
                        S
                            ? e(function () {
                                  i(E)
                              })
                            : i(E)
                    }
                    function i(E) {
                        E.__upgraded__ &&
                            !E.__attached &&
                            ((E.__attached = !0), E.attachedCallback && E.attachedCallback())
                    }
                    function u(E) {
                        s(E),
                            m(E, function (w) {
                                s(w)
                            })
                    }
                    function s(E) {
                        S
                            ? e(function () {
                                  n(E)
                              })
                            : n(E)
                    }
                    function n(E) {
                        E.__upgraded__ &&
                            E.__attached &&
                            ((E.__attached = !1), E.detachedCallback && E.detachedCallback())
                    }
                    function p(E) {
                        for (var w = E, k = window.wrap(document); w; ) {
                            if (w == k) return !0
                            w = w.parentNode || (w.nodeType === Node.DOCUMENT_FRAGMENT_NODE && w.host)
                        }
                    }
                    function c(E) {
                        if (E.shadowRoot && !E.shadowRoot.__watched) {
                            f.dom && console.log('watching shadow-root for: ', E.localName)
                            for (var w = E.shadowRoot; w; ) r(w), (w = w.olderShadowRoot)
                        }
                    }
                    function v(E, w) {
                        if (f.dom) {
                            var k = w[0]
                            if (k && k.type === 'childList' && k.addedNodes && k.addedNodes) {
                                for (var T = k.addedNodes[0]; T && T !== document && !T.host; ) T = T.parentNode
                                var N = (T && (T.URL || T._URL || (T.host && T.host.localName))) || ''
                                N = N.split('/?').shift().split('/').pop()
                            }
                            console.group('mutations (%d) [%s]', w.length, N || '')
                        }
                        var P = p(E)
                        w.forEach(function (_) {
                            _.type === 'childList' &&
                                (D(_.addedNodes, function (F) {
                                    F.localName && y(F, P)
                                }),
                                D(_.removedNodes, function (F) {
                                    F.localName && u(F)
                                }))
                        }),
                            f.dom && console.groupEnd()
                    }
                    function t(E) {
                        for (E = window.wrap(E), E || (E = window.wrap(document)); E.parentNode; ) E = E.parentNode
                        var w = E.__observer
                        w && (v(E, w.takeRecords()), a())
                    }
                    function r(E) {
                        if (!E.__observer) {
                            var w = new MutationObserver(v.bind(this, E))
                            w.observe(E, { childList: !0, subtree: !0 }), (E.__observer = w)
                        }
                    }
                    function l(E) {
                        ;(E = window.wrap(E)), f.dom && console.group('upgradeDocument: ', E.baseURI.split('/').pop())
                        var w = E === window.wrap(document)
                        y(E, w), r(E), f.dom && console.groupEnd()
                    }
                    function A(E) {
                        C(E, l)
                    }
                    var f = b.flags,
                        m = b.forSubtree,
                        C = b.forDocumentTree,
                        S = window.MutationObserver._isPolyfilled && f['throttle-attached']
                    ;(b.hasPolyfillMutations = S), (b.hasThrottledAttached = S)
                    var L = !1,
                        O = [],
                        D = Array.prototype.forEach.call.bind(Array.prototype.forEach),
                        R = Element.prototype.createShadowRoot
                    R &&
                        (Element.prototype.createShadowRoot = function () {
                            var E = R.call(this)
                            return window.CustomElements.watchShadow(this), E
                        }),
                        (b.watchShadow = c),
                        (b.upgradeDocumentTree = A),
                        (b.upgradeDocument = l),
                        (b.upgradeSubtree = o),
                        (b.upgradeAll = y),
                        (b.attached = d),
                        (b.takeRecords = t)
                }),
                window.CustomElements.addModule(function (b) {
                    function y(i, u) {
                        if (
                            (i.localName === 'template' &&
                                window.HTMLTemplateElement &&
                                HTMLTemplateElement.decorate &&
                                HTMLTemplateElement.decorate(i),
                            !i.__upgraded__ && i.nodeType === Node.ELEMENT_NODE)
                        ) {
                            var s = i.getAttribute('is'),
                                n = b.getRegisteredDefinition(i.localName) || b.getRegisteredDefinition(s)
                            if (n && ((s && n.tag == i.localName) || (!s && !n.extends))) return h(i, n, u)
                        }
                    }
                    function h(i, u, s) {
                        return (
                            d.upgrade && console.group('upgrade:', i.localName),
                            u.is && i.setAttribute('is', u.is),
                            o(i, u),
                            (i.__upgraded__ = !0),
                            a(i),
                            s && b.attached(i),
                            b.upgradeSubtree(i, s),
                            d.upgrade && console.groupEnd(),
                            i
                        )
                    }
                    function o(i, u) {
                        Object.__proto__ || e(i, u.prototype, u.native), (i.__proto__ = u.prototype)
                    }
                    function e(i, u, s) {
                        for (var n = {}, p = u; p !== s && p !== HTMLElement.prototype; ) {
                            for (var c, v = Object.getOwnPropertyNames(p), t = 0; (c = v[t]); t++)
                                n[c] || (Object.defineProperty(i, c, Object.getOwnPropertyDescriptor(p, c)), (n[c] = 1))
                            p = Object.getPrototypeOf(p)
                        }
                    }
                    function a(i) {
                        i.createdCallback && i.createdCallback()
                    }
                    var d = b.flags
                    ;(b.upgrade = y), (b.upgradeWithDefinition = h), (b.implementPrototype = o)
                }),
                window.CustomElements.addModule(function (b) {
                    function y(E, w) {
                        var k = w || {}
                        if (!E) throw new Error('document.registerElement: first argument `name` must not be empty')
                        if (E.indexOf('-') < 0)
                            throw new Error(
                                "document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '" +
                                    String(E) +
                                    "'.",
                            )
                        if (e(E))
                            throw new Error(
                                "Failed to execute 'registerElement' on 'Document': Registration failed for type '" +
                                    String(E) +
                                    "'. The type name is invalid.",
                            )
                        if (s(E))
                            throw new Error(
                                "DuplicateDefinitionError: a type with name '" + String(E) + "' is already registered",
                            )
                        return (
                            k.prototype || (k.prototype = Object.create(HTMLElement.prototype)),
                            (k.__name = E.toLowerCase()),
                            k.extends && (k.extends = k.extends.toLowerCase()),
                            (k.lifecycle = k.lifecycle || {}),
                            (k.ancestry = a(k.extends)),
                            d(k),
                            i(k),
                            h(k.prototype),
                            n(k.__name, k),
                            (k.ctor = p(k)),
                            (k.ctor.prototype = k.prototype),
                            (k.prototype.constructor = k.ctor),
                            b.ready && l(document),
                            k.ctor
                        )
                    }
                    function h(E) {
                        if (!E.setAttribute._polyfilled) {
                            var w = E.setAttribute
                            E.setAttribute = function (T, N) {
                                o.call(this, T, N, w)
                            }
                            var k = E.removeAttribute
                            ;(E.removeAttribute = function (T) {
                                o.call(this, T, null, k)
                            }),
                                (E.setAttribute._polyfilled = !0)
                        }
                    }
                    function o(E, w, k) {
                        E = E.toLowerCase()
                        var T = this.getAttribute(E)
                        k.apply(this, arguments)
                        var N = this.getAttribute(E)
                        this.attributeChangedCallback && N !== T && this.attributeChangedCallback(E, T, N)
                    }
                    function e(E) {
                        for (var w = 0; w < S.length; w++) if (E === S[w]) return !0
                    }
                    function a(E) {
                        var w = s(E)
                        return w ? a(w.extends).concat([w]) : []
                    }
                    function d(E) {
                        for (var w, k = E.extends, T = 0; (w = E.ancestry[T]); T++) k = w.is && w.tag
                        ;(E.tag = k || E.__name), k && (E.is = E.__name)
                    }
                    function i(E) {
                        if (!Object.__proto__) {
                            var w = HTMLElement.prototype
                            if (E.is) {
                                var k = document.createElement(E.tag)
                                w = Object.getPrototypeOf(k)
                            }
                            for (var T, N = E.prototype, P = !1; N; )
                                N == w && (P = !0), (T = Object.getPrototypeOf(N)), T && (N.__proto__ = T), (N = T)
                            P || console.warn(E.tag + ' prototype not found in prototype chain for ' + E.is),
                                (E.native = w)
                        }
                    }
                    function u(E) {
                        return f(D(E.tag), E)
                    }
                    function s(E) {
                        return E ? L[E.toLowerCase()] : void 0
                    }
                    function n(E, w) {
                        L[E] = w
                    }
                    function p(E) {
                        return function () {
                            return u(E)
                        }
                    }
                    function c(E, w, k) {
                        return E === O ? v(w, k) : R(E, w)
                    }
                    function v(E, w) {
                        E && (E = E.toLowerCase()), w && (w = w.toLowerCase())
                        var k = s(w || E)
                        if (k) {
                            if (E == k.tag && w == k.is) return new k.ctor()
                            if (!w && !k.is) return new k.ctor()
                        }
                        var T
                        return w
                            ? ((T = v(E)), T.setAttribute('is', w), T)
                            : ((T = D(E)), E.indexOf('-') >= 0 && m(T, HTMLElement), T)
                    }
                    function t(E, w) {
                        var k = E[w]
                        E[w] = function () {
                            var T = k.apply(this, arguments)
                            return A(T), T
                        }
                    }
                    var r,
                        l = (b.isIE, b.upgradeDocumentTree),
                        A = b.upgradeAll,
                        f = b.upgradeWithDefinition,
                        m = b.implementPrototype,
                        C = b.useNative,
                        S = [
                            'annotation-xml',
                            'color-profile',
                            'font-face',
                            'font-face-src',
                            'font-face-uri',
                            'font-face-format',
                            'font-face-name',
                            'missing-glyph',
                        ],
                        L = {},
                        O = 'http://www.w3.org/1999/xhtml',
                        D = document.createElement.bind(document),
                        R = document.createElementNS.bind(document)
                    ;(r =
                        Object.__proto__ || C
                            ? function (E, w) {
                                  return E instanceof w
                              }
                            : function (E, w) {
                                  if (E instanceof w) return !0
                                  for (var k = E; k; ) {
                                      if (k === w.prototype) return !0
                                      k = k.__proto__
                                  }
                                  return !1
                              }),
                        t(Node.prototype, 'cloneNode'),
                        t(document, 'importNode'),
                        (document.registerElement = y),
                        (document.createElement = v),
                        (document.createElementNS = c),
                        (b.registry = L),
                        (b.instanceof = r),
                        (b.reservedTagList = S),
                        (b.getRegisteredDefinition = s),
                        (document.register = document.registerElement)
                }),
                (function (b) {
                    function y() {
                        a(window.wrap(document)), (window.CustomElements.ready = !0)
                        var u =
                            window.requestAnimationFrame ||
                            function (s) {
                                setTimeout(s, 16)
                            }
                        u(function () {
                            setTimeout(function () {
                                ;(window.CustomElements.readyTime = Date.now()),
                                    window.HTMLImports &&
                                        (window.CustomElements.elapsed =
                                            window.CustomElements.readyTime - window.HTMLImports.readyTime),
                                    document.dispatchEvent(new CustomEvent('WebComponentsReady', { bubbles: !0 }))
                            })
                        })
                    }
                    var h = b.useNative,
                        o = b.initializeModules
                    if ((b.isIE, h)) {
                        var e = function () {}
                        ;(b.watchShadow = e),
                            (b.upgrade = e),
                            (b.upgradeAll = e),
                            (b.upgradeDocumentTree = e),
                            (b.upgradeSubtree = e),
                            (b.takeRecords = e),
                            (b.instanceof = function (u, s) {
                                return u instanceof s
                            })
                    } else o()
                    var a = b.upgradeDocumentTree,
                        d = b.upgradeDocument
                    if (
                        (window.wrap ||
                            (window.ShadowDOMPolyfill
                                ? ((window.wrap = window.ShadowDOMPolyfill.wrapIfNeeded),
                                  (window.unwrap = window.ShadowDOMPolyfill.unwrapIfNeeded))
                                : (window.wrap = window.unwrap =
                                      function (u) {
                                          return u
                                      })),
                        window.HTMLImports &&
                            (window.HTMLImports.__importsParsingHook = function (u) {
                                u.import && d(wrap(u.import))
                            }),
                        document.readyState === 'complete' || b.flags.eager)
                    )
                        y()
                    else if (
                        document.readyState !== 'interactive' ||
                        window.attachEvent ||
                        (window.HTMLImports && !window.HTMLImports.ready)
                    ) {
                        var i =
                            window.HTMLImports && !window.HTMLImports.ready ? 'HTMLImportsLoaded' : 'DOMContentLoaded'
                        window.addEventListener(i, y)
                    } else y()
                })(window.CustomElements))
        }.call(q),
        function () {}.call(q),
        function () {
            var I = this
            ;(function () {
                ;(function () {
                    this.Trix = {
                        VERSION: '1.3.1',
                        ZERO_WIDTH_SPACE: '\uFEFF',
                        NON_BREAKING_SPACE: '\xA0',
                        OBJECT_REPLACEMENT_CHARACTER: '\uFFFC',
                        browser: {
                            composesExistingText: /Android.*Chrome/.test(navigator.userAgent),
                            forcesObjectResizing: /Trident.*rv:11/.test(navigator.userAgent),
                            supportsInputEvents: (function () {
                                var x, b, y, h
                                if (typeof InputEvent > 'u') return !1
                                for (h = ['data', 'getTargetRanges', 'inputType'], x = 0, b = h.length; b > x; x++)
                                    if (((y = h[x]), !(y in InputEvent.prototype))) return !1
                                return !0
                            })(),
                        },
                        config: {},
                    }
                }).call(this)
            }).call(I)
            var g = I.Trix
            ;(function () {
                ;(function () {
                    g.BasicObject = (function () {
                        function x() {}
                        var b, y, h
                        return (
                            (x.proxyMethod = function (o) {
                                var e, a, d, i, u
                                return (
                                    (d = y(o)),
                                    (e = d.name),
                                    (i = d.toMethod),
                                    (u = d.toProperty),
                                    (a = d.optional),
                                    (this.prototype[e] = function () {
                                        var s, n
                                        return (
                                            (s =
                                                i != null
                                                    ? a
                                                        ? typeof this[i] == 'function'
                                                            ? this[i]()
                                                            : void 0
                                                        : this[i]()
                                                    : u != null
                                                      ? this[u]
                                                      : void 0),
                                            a
                                                ? ((n = s?.[e]), n != null ? b.call(n, s, arguments) : void 0)
                                                : ((n = s[e]), b.call(n, s, arguments))
                                        )
                                    })
                                )
                            }),
                            (y = function (o) {
                                var e, a
                                if (!(a = o.match(h))) throw new Error("can't parse @proxyMethod expression: " + o)
                                return (
                                    (e = { name: a[4] }),
                                    a[2] != null ? (e.toMethod = a[1]) : (e.toProperty = a[1]),
                                    a[3] != null && (e.optional = !0),
                                    e
                                )
                            }),
                            (b = Function.prototype.apply),
                            (h = /^(.+?)(\(\))?(\?)?\.(.+?)$/),
                            x
                        )
                    })()
                }).call(this),
                    function () {
                        var x = function (y, h) {
                                function o() {
                                    this.constructor = y
                                }
                                for (var e in h) b.call(h, e) && (y[e] = h[e])
                                return (
                                    (o.prototype = h.prototype), (y.prototype = new o()), (y.__super__ = h.prototype), y
                                )
                            },
                            b = {}.hasOwnProperty
                        g.Object = (function (y) {
                            function h() {
                                this.id = ++o
                            }
                            var o
                            return (
                                x(h, y),
                                (o = 0),
                                (h.fromJSONString = function (e) {
                                    return this.fromJSON(JSON.parse(e))
                                }),
                                (h.prototype.hasSameConstructorAs = function (e) {
                                    return this.constructor === e?.constructor
                                }),
                                (h.prototype.isEqualTo = function (e) {
                                    return this === e
                                }),
                                (h.prototype.inspect = function () {
                                    var e, a, d
                                    return (
                                        (e = function () {
                                            var i, u, s
                                            ;(u = (i = this.contentsForInspection()) != null ? i : {}), (s = [])
                                            for (a in u) (d = u[a]), s.push(a + '=' + d)
                                            return s
                                        }.call(this)),
                                        '#<' +
                                            this.constructor.name +
                                            ':' +
                                            this.id +
                                            (e.length ? ' ' + e.join(', ') : '') +
                                            '>'
                                    )
                                }),
                                (h.prototype.contentsForInspection = function () {}),
                                (h.prototype.toJSONString = function () {
                                    return JSON.stringify(this)
                                }),
                                (h.prototype.toUTF16String = function () {
                                    return g.UTF16String.box(this)
                                }),
                                (h.prototype.getCacheKey = function () {
                                    return this.id.toString()
                                }),
                                h
                            )
                        })(g.BasicObject)
                    }.call(this),
                    function () {
                        g.extend = function (x) {
                            var b, y
                            for (b in x) (y = x[b]), (this[b] = y)
                            return this
                        }
                    }.call(this),
                    function () {
                        g.extend({
                            defer: function (x) {
                                return setTimeout(x, 1)
                            },
                        })
                    }.call(this),
                    function () {
                        var x, b
                        g.extend({
                            normalizeSpaces: function (y) {
                                return y
                                    .replace(RegExp('' + g.ZERO_WIDTH_SPACE, 'g'), '')
                                    .replace(RegExp('' + g.NON_BREAKING_SPACE, 'g'), ' ')
                            },
                            normalizeNewlines: function (y) {
                                return y.replace(
                                    /\r\n/g,
                                    `
`,
                                )
                            },
                            breakableWhitespacePattern: RegExp('[^\\S' + g.NON_BREAKING_SPACE + ']'),
                            squishBreakableWhitespace: function (y) {
                                return y
                                    .replace(RegExp('' + g.breakableWhitespacePattern.source, 'g'), ' ')
                                    .replace(/\ {2,}/g, ' ')
                            },
                            summarizeStringChange: function (y, h) {
                                var o, e, a, d
                                return (
                                    (y = g.UTF16String.box(y)),
                                    (h = g.UTF16String.box(h)),
                                    h.length < y.length
                                        ? ((e = b(y, h)), (d = e[0]), (o = e[1]))
                                        : ((a = b(h, y)), (o = a[0]), (d = a[1])),
                                    { added: o, removed: d }
                                )
                            },
                        }),
                            (b = function (y, h) {
                                var o, e, a, d, i
                                return y.isEqualTo(h)
                                    ? ['', '']
                                    : ((e = x(y, h)),
                                      (d = e.utf16String.length),
                                      (a = d
                                          ? ((i = e.offset),
                                            (o = y.codepoints.slice(0, i).concat(y.codepoints.slice(i + d))),
                                            x(h, g.UTF16String.fromCodepoints(o)))
                                          : x(h, y)),
                                      [e.utf16String.toString(), a.utf16String.toString()])
                            }),
                            (x = function (y, h) {
                                var o, e, a
                                for (o = 0, e = y.length, a = h.length; e > o && y.charAt(o).isEqualTo(h.charAt(o)); )
                                    o++
                                for (; e > o + 1 && y.charAt(e - 1).isEqualTo(h.charAt(a - 1)); ) e--, a--
                                return { utf16String: y.slice(o, e), offset: o }
                            })
                    }.call(this),
                    function () {
                        g.extend({
                            copyObject: function (x) {
                                var b, y, h
                                x == null && (x = {}), (y = {})
                                for (b in x) (h = x[b]), (y[b] = h)
                                return y
                            },
                            objectsAreEqual: function (x, b) {
                                var y, h
                                if (
                                    (x == null && (x = {}),
                                    b == null && (b = {}),
                                    Object.keys(x).length !== Object.keys(b).length)
                                )
                                    return !1
                                for (y in x) if (((h = x[y]), h !== b[y])) return !1
                                return !0
                            },
                        })
                    }.call(this),
                    function () {
                        var x = [].slice
                        g.extend({
                            arraysAreEqual: function (b, y) {
                                var h, o, e, a
                                if ((b == null && (b = []), y == null && (y = []), b.length !== y.length)) return !1
                                for (o = h = 0, e = b.length; e > h; o = ++h) if (((a = b[o]), a !== y[o])) return !1
                                return !0
                            },
                            arrayStartsWith: function (b, y) {
                                return (
                                    b == null && (b = []),
                                    y == null && (y = []),
                                    g.arraysAreEqual(b.slice(0, y.length), y)
                                )
                            },
                            spliceArray: function () {
                                var b, y, h
                                return (
                                    (y = arguments[0]),
                                    (b = 2 <= arguments.length ? x.call(arguments, 1) : []),
                                    (h = y.slice(0)),
                                    h.splice.apply(h, b),
                                    h
                                )
                            },
                            summarizeArrayChange: function (b, y) {
                                var h, o, e, a, d, i, u, s, n, p, c
                                for (
                                    b == null && (b = []),
                                        y == null && (y = []),
                                        h = [],
                                        p = [],
                                        e = new Set(),
                                        a = 0,
                                        u = b.length;
                                    u > a;
                                    a++
                                )
                                    (c = b[a]), e.add(c)
                                for (o = new Set(), d = 0, s = y.length; s > d; d++)
                                    (c = y[d]), o.add(c), e.has(c) || h.push(c)
                                for (i = 0, n = b.length; n > i; i++) (c = b[i]), o.has(c) || p.push(c)
                                return { added: h, removed: p }
                            },
                        })
                    }.call(this),
                    function () {
                        var x, b, y, h
                        ;(x = null),
                            (b = null),
                            (h = null),
                            (y = null),
                            g.extend({
                                getAllAttributeNames: function () {
                                    return x ?? (x = g.getTextAttributeNames().concat(g.getBlockAttributeNames()))
                                },
                                getBlockConfig: function (o) {
                                    return g.config.blockAttributes[o]
                                },
                                getBlockAttributeNames: function () {
                                    return b ?? (b = Object.keys(g.config.blockAttributes))
                                },
                                getTextConfig: function (o) {
                                    return g.config.textAttributes[o]
                                },
                                getTextAttributeNames: function () {
                                    return h ?? (h = Object.keys(g.config.textAttributes))
                                },
                                getListAttributeNames: function () {
                                    var o, e
                                    return (
                                        y ??
                                        (y = (function () {
                                            var a, d
                                            ;(a = g.config.blockAttributes), (d = [])
                                            for (o in a) (e = a[o].listAttribute), e != null && d.push(e)
                                            return d
                                        })())
                                    )
                                },
                            })
                    }.call(this),
                    function () {
                        var x,
                            b,
                            y,
                            h,
                            o,
                            e =
                                [].indexOf ||
                                function (a) {
                                    for (var d = 0, i = this.length; i > d; d++)
                                        if (d in this && this[d] === a) return d
                                    return -1
                                }
                        ;(x = document.documentElement),
                            (b =
                                (y =
                                    (h = (o = x.matchesSelector) != null ? o : x.webkitMatchesSelector) != null
                                        ? h
                                        : x.msMatchesSelector) != null
                                    ? y
                                    : x.mozMatchesSelector),
                            g.extend({
                                handleEvent: function (a, d) {
                                    var i, u, s, n, p, c, v, t, r, l, A, f
                                    return (
                                        (t = d ?? {}),
                                        (c = t.onElement),
                                        (p = t.matchingSelector),
                                        (f = t.withCallback),
                                        (n = t.inPhase),
                                        (v = t.preventDefault),
                                        (l = t.times),
                                        (u = c ?? x),
                                        (r = p),
                                        (i = f),
                                        (A = n === 'capturing'),
                                        (s = function (m) {
                                            var C
                                            return (
                                                l != null && --l === 0 && s.destroy(),
                                                (C = g.findClosestElementFromNode(m.target, { matchingSelector: r })),
                                                C != null && (f?.call(C, m, C), v) ? m.preventDefault() : void 0
                                            )
                                        }),
                                        (s.destroy = function () {
                                            return u.removeEventListener(a, s, A)
                                        }),
                                        u.addEventListener(a, s, A),
                                        s
                                    )
                                },
                                handleEventOnce: function (a, d) {
                                    return d == null && (d = {}), (d.times = 1), g.handleEvent(a, d)
                                },
                                triggerEvent: function (a, d) {
                                    var i, u, s, n, p, c, v
                                    return (
                                        (v = d ?? {}),
                                        (c = v.onElement),
                                        (u = v.bubbles),
                                        (s = v.cancelable),
                                        (i = v.attributes),
                                        (n = c ?? x),
                                        (u = u !== !1),
                                        (s = s !== !1),
                                        (p = document.createEvent('Events')),
                                        p.initEvent(a, u, s),
                                        i != null && g.extend.call(p, i),
                                        n.dispatchEvent(p)
                                    )
                                },
                                elementMatchesSelector: function (a, d) {
                                    return a?.nodeType === 1 ? b.call(a, d) : void 0
                                },
                                findClosestElementFromNode: function (a, d) {
                                    var i, u, s
                                    for (
                                        u = d ?? {}, i = u.matchingSelector, s = u.untilNode;
                                        a != null && a.nodeType !== Node.ELEMENT_NODE;

                                    )
                                        a = a.parentNode
                                    if (a != null) {
                                        if (i == null) return a
                                        if (a.closest && s == null) return a.closest(i)
                                        for (; a && a !== s; ) {
                                            if (g.elementMatchesSelector(a, i)) return a
                                            a = a.parentNode
                                        }
                                    }
                                },
                                findInnerElement: function (a) {
                                    for (; a?.firstElementChild; ) a = a.firstElementChild
                                    return a
                                },
                                innerElementIsActive: function (a) {
                                    return (
                                        document.activeElement !== a && g.elementContainsNode(a, document.activeElement)
                                    )
                                },
                                elementContainsNode: function (a, d) {
                                    if (a && d)
                                        for (; d; ) {
                                            if (d === a) return !0
                                            d = d.parentNode
                                        }
                                },
                                findNodeFromContainerAndOffset: function (a, d) {
                                    var i
                                    if (a)
                                        return a.nodeType === Node.TEXT_NODE
                                            ? a
                                            : d === 0
                                              ? (i = a.firstChild) != null
                                                  ? i
                                                  : a
                                              : a.childNodes.item(d - 1)
                                },
                                findElementFromContainerAndOffset: function (a, d) {
                                    var i
                                    return (i = g.findNodeFromContainerAndOffset(a, d)), g.findClosestElementFromNode(i)
                                },
                                findChildIndexOfNode: function (a) {
                                    var d
                                    if (a?.parentNode) {
                                        for (d = 0; (a = a.previousSibling); ) d++
                                        return d
                                    }
                                },
                                removeNode: function (a) {
                                    var d
                                    return a != null && (d = a.parentNode) != null ? d.removeChild(a) : void 0
                                },
                                walkTree: function (a, d) {
                                    var i, u, s, n, p
                                    return (
                                        (s = d ?? {}),
                                        (u = s.onlyNodesOfType),
                                        (n = s.usingFilter),
                                        (i = s.expandEntityReferences),
                                        (p = (function () {
                                            switch (u) {
                                                case 'element':
                                                    return NodeFilter.SHOW_ELEMENT
                                                case 'text':
                                                    return NodeFilter.SHOW_TEXT
                                                case 'comment':
                                                    return NodeFilter.SHOW_COMMENT
                                                default:
                                                    return NodeFilter.SHOW_ALL
                                            }
                                        })()),
                                        document.createTreeWalker(a, p, n ?? null, i === !0)
                                    )
                                },
                                tagName: function (a) {
                                    var d
                                    return a != null && (d = a.tagName) != null ? d.toLowerCase() : void 0
                                },
                                makeElement: function (a, d) {
                                    var i, u, s, n, p, c, v, t, r, l, A, f, m, C
                                    if (
                                        (d == null && (d = {}),
                                        typeof a == 'object' ? ((d = a), (a = d.tagName)) : (d = { attributes: d }),
                                        (s = document.createElement(a)),
                                        d.editable != null &&
                                            (d.attributes == null && (d.attributes = {}),
                                            (d.attributes.contenteditable = d.editable)),
                                        d.attributes)
                                    ) {
                                        r = d.attributes
                                        for (c in r) (C = r[c]), s.setAttribute(c, C)
                                    }
                                    if (d.style) {
                                        l = d.style
                                        for (c in l) (C = l[c]), (s.style[c] = C)
                                    }
                                    if (d.data) {
                                        A = d.data
                                        for (c in A) (C = A[c]), (s.dataset[c] = C)
                                    }
                                    if (d.className)
                                        for (f = d.className.split(' '), n = 0, v = f.length; v > n; n++)
                                            (u = f[n]), s.classList.add(u)
                                    if ((d.textContent && (s.textContent = d.textContent), d.childNodes))
                                        for (m = [].concat(d.childNodes), p = 0, t = m.length; t > p; p++)
                                            (i = m[p]), s.appendChild(i)
                                    return s
                                },
                                getBlockTagNames: function () {
                                    var a, d
                                    return g.blockTagNames != null
                                        ? g.blockTagNames
                                        : (g.blockTagNames = (function () {
                                              var i, u
                                              ;(i = g.config.blockAttributes), (u = [])
                                              for (a in i) (d = i[a].tagName), d && u.push(d)
                                              return u
                                          })())
                                },
                                nodeIsBlockContainer: function (a) {
                                    return g.nodeIsBlockStartComment(a?.firstChild)
                                },
                                nodeProbablyIsBlockContainer: function (a) {
                                    var d, i
                                    return (
                                        (d = g.tagName(a)),
                                        e.call(g.getBlockTagNames(), d) >= 0 &&
                                            ((i = g.tagName(a.firstChild)), e.call(g.getBlockTagNames(), i) < 0)
                                    )
                                },
                                nodeIsBlockStart: function (a, d) {
                                    var i
                                    return (
                                        (i = (d ?? { strict: !0 }).strict),
                                        i
                                            ? g.nodeIsBlockStartComment(a)
                                            : g.nodeIsBlockStartComment(a) ||
                                              (!g.nodeIsBlockStartComment(a.firstChild) &&
                                                  g.nodeProbablyIsBlockContainer(a))
                                    )
                                },
                                nodeIsBlockStartComment: function (a) {
                                    return g.nodeIsCommentNode(a) && a?.data === 'block'
                                },
                                nodeIsCommentNode: function (a) {
                                    return a?.nodeType === Node.COMMENT_NODE
                                },
                                nodeIsCursorTarget: function (a, d) {
                                    var i
                                    return (
                                        (i = (d ?? {}).name),
                                        a
                                            ? g.nodeIsTextNode(a)
                                                ? a.data === g.ZERO_WIDTH_SPACE
                                                    ? i
                                                        ? a.parentNode.dataset.trixCursorTarget === i
                                                        : !0
                                                    : void 0
                                                : g.nodeIsCursorTarget(a.firstChild)
                                            : void 0
                                    )
                                },
                                nodeIsAttachmentElement: function (a) {
                                    return g.elementMatchesSelector(a, g.AttachmentView.attachmentSelector)
                                },
                                nodeIsEmptyTextNode: function (a) {
                                    return g.nodeIsTextNode(a) && a?.data === ''
                                },
                                nodeIsTextNode: function (a) {
                                    return a?.nodeType === Node.TEXT_NODE
                                },
                            })
                    }.call(this),
                    function () {
                        var x, b, y, h, o
                        ;(x = g.copyObject),
                            (h = g.objectsAreEqual),
                            g.extend({
                                normalizeRange: (y = function (e) {
                                    var a
                                    if (e != null)
                                        return (
                                            Array.isArray(e) || (e = [e, e]),
                                            [b(e[0]), b((a = e[1]) != null ? a : e[0])]
                                        )
                                }),
                                rangeIsCollapsed: function (e) {
                                    var a, d, i
                                    if (e != null) return (d = y(e)), (i = d[0]), (a = d[1]), o(i, a)
                                },
                                rangesAreEqual: function (e, a) {
                                    var d, i, u, s, n, p
                                    if (e != null && a != null)
                                        return (
                                            (u = y(e)),
                                            (i = u[0]),
                                            (d = u[1]),
                                            (s = y(a)),
                                            (p = s[0]),
                                            (n = s[1]),
                                            o(i, p) && o(d, n)
                                        )
                                },
                            }),
                            (b = function (e) {
                                return typeof e == 'number' ? e : x(e)
                            }),
                            (o = function (e, a) {
                                return typeof e == 'number' ? e === a : h(e, a)
                            })
                    }.call(this),
                    function () {
                        var x, b, y, h, o, e, a
                        ;(g.registerElement = function (d, i) {
                            var u, s
                            return (
                                i == null && (i = {}),
                                (d = d.toLowerCase()),
                                (i = a(i)),
                                (s = e(i)),
                                (u = s.defaultCSS) && (delete s.defaultCSS, h(u, d)),
                                o(d, s)
                            )
                        }),
                            (h = function (d, i) {
                                var u
                                return (u = y(i)), (u.textContent = d.replace(/%t/g, i))
                            }),
                            (y = function (d) {
                                var i, u
                                return (
                                    (i = document.createElement('style')),
                                    i.setAttribute('type', 'text/css'),
                                    i.setAttribute('data-tag-name', d.toLowerCase()),
                                    (u = x()) && i.setAttribute('nonce', u),
                                    document.head.insertBefore(i, document.head.firstChild),
                                    i
                                )
                            }),
                            (x = function () {
                                var d
                                return (d = b('trix-csp-nonce') || b('csp-nonce')) ? d.getAttribute('content') : void 0
                            }),
                            (b = function (d) {
                                return document.head.querySelector('meta[name=' + d + ']')
                            }),
                            (e = function (d) {
                                var i, u, s
                                u = {}
                                for (i in d) (s = d[i]), (u[i] = typeof s == 'function' ? { value: s } : s)
                                return u
                            }),
                            (a = (function () {
                                var d
                                return (
                                    (d = function (i) {
                                        var u, s, n, p, c
                                        for (
                                            u = {}, c = ['initialize', 'connect', 'disconnect'], s = 0, p = c.length;
                                            p > s;
                                            s++
                                        )
                                            (n = c[s]), (u[n] = i[n]), delete i[n]
                                        return u
                                    }),
                                    window.customElements
                                        ? function (i) {
                                              var u, s, n, p, c
                                              return (
                                                  (c = d(i)),
                                                  (n = c.initialize),
                                                  (u = c.connect),
                                                  (s = c.disconnect),
                                                  n &&
                                                      ((p = u),
                                                      (u = function () {
                                                          return (
                                                              this.initialized ||
                                                                  ((this.initialized = !0), n.call(this)),
                                                              p?.call(this)
                                                          )
                                                      })),
                                                  u && (i.connectedCallback = u),
                                                  s && (i.disconnectedCallback = s),
                                                  i
                                              )
                                          }
                                        : function (i) {
                                              var u, s, n, p
                                              return (
                                                  (p = d(i)),
                                                  (n = p.initialize),
                                                  (u = p.connect),
                                                  (s = p.disconnect),
                                                  n && (i.createdCallback = n),
                                                  u && (i.attachedCallback = u),
                                                  s && (i.detachedCallback = s),
                                                  i
                                              )
                                          }
                                )
                            })()),
                            (o = (function () {
                                return window.customElements
                                    ? function (d, i) {
                                          var u
                                          return (
                                              (u = function () {
                                                  return typeof Reflect == 'object'
                                                      ? Reflect.construct(HTMLElement, [], u)
                                                      : HTMLElement.apply(this)
                                              }),
                                              Object.setPrototypeOf(u.prototype, HTMLElement.prototype),
                                              Object.setPrototypeOf(u, HTMLElement),
                                              Object.defineProperties(u.prototype, i),
                                              window.customElements.define(d, u),
                                              u
                                          )
                                      }
                                    : function (d, i) {
                                          var u, s
                                          return (
                                              (s = Object.create(HTMLElement.prototype, i)),
                                              (u = document.registerElement(d, { prototype: s })),
                                              Object.defineProperty(s, 'constructor', { value: u }),
                                              u
                                          )
                                      }
                            })())
                    }.call(this),
                    function () {
                        var x, b
                        g.extend({
                            getDOMSelection: function () {
                                var y
                                return (y = window.getSelection()), y.rangeCount > 0 ? y : void 0
                            },
                            getDOMRange: function () {
                                var y, h
                                return (y = (h = g.getDOMSelection()) != null ? h.getRangeAt(0) : void 0) && !x(y)
                                    ? y
                                    : void 0
                            },
                            setDOMRange: function (y) {
                                var h
                                return (
                                    (h = window.getSelection()),
                                    h.removeAllRanges(),
                                    h.addRange(y),
                                    g.selectionChangeObserver.update()
                                )
                            },
                        }),
                            (x = function (y) {
                                return b(y.startContainer) || b(y.endContainer)
                            }),
                            (b = function (y) {
                                return !Object.getPrototypeOf(y)
                            })
                    }.call(this),
                    function () {
                        var x
                        ;(x = { 'application/x-trix-feature-detection': 'test' }),
                            g.extend({
                                dataTransferIsPlainText: function (b) {
                                    var y, h, o
                                    return (
                                        (o = b.getData('text/plain')),
                                        (h = b.getData('text/html')),
                                        o && h
                                            ? ((y = new DOMParser().parseFromString(h, 'text/html').body),
                                              y.textContent === o ? !y.querySelector('*') : void 0)
                                            : o?.length
                                    )
                                },
                                dataTransferIsWritable: function (b) {
                                    var y, h
                                    if (b?.setData != null) {
                                        for (y in x)
                                            if (
                                                ((h = x[y]),
                                                !(function () {
                                                    try {
                                                        return b.setData(y, h), b.getData(y) === h
                                                    } catch {}
                                                })())
                                            )
                                                return
                                        return !0
                                    }
                                },
                                keyEventIsKeyboardCommand: (function () {
                                    return /Mac|^iP/.test(navigator.platform)
                                        ? function (b) {
                                              return b.metaKey
                                          }
                                        : function (b) {
                                              return b.ctrlKey
                                          }
                                })(),
                            })
                    }.call(this),
                    function () {
                        g.extend({
                            RTL_PATTERN:
                                /[\u05BE\u05C0\u05C3\u05D0-\u05EA\u05F0-\u05F4\u061B\u061F\u0621-\u063A\u0640-\u064A\u066D\u0671-\u06B7\u06BA-\u06BE\u06C0-\u06CE\u06D0-\u06D5\u06E5\u06E6\u200F\u202B\u202E\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE72\uFE74\uFE76-\uFEFC]/,
                            getDirection: (function () {
                                var x, b, y, h
                                return (
                                    (b = g.makeElement('input', { dir: 'auto', name: 'x', dirName: 'x.dir' })),
                                    (x = g.makeElement('form')),
                                    x.appendChild(b),
                                    (y = (function () {
                                        try {
                                            return new FormData(x).has(b.dirName)
                                        } catch {}
                                    })()),
                                    (h = (function () {
                                        try {
                                            return b.matches(':dir(ltr),:dir(rtl)')
                                        } catch {}
                                    })()),
                                    y
                                        ? function (o) {
                                              return (b.value = o), new FormData(x).get(b.dirName)
                                          }
                                        : h
                                          ? function (o) {
                                                return (b.value = o), b.matches(':dir(rtl)') ? 'rtl' : 'ltr'
                                            }
                                          : function (o) {
                                                var e
                                                return (e = o.trim().charAt(0)), g.RTL_PATTERN.test(e) ? 'rtl' : 'ltr'
                                            }
                                )
                            })(),
                        })
                    }.call(this),
                    function () {}.call(this),
                    function () {
                        var x,
                            b = function (h, o) {
                                function e() {
                                    this.constructor = h
                                }
                                for (var a in o) y.call(o, a) && (h[a] = o[a])
                                return (
                                    (e.prototype = o.prototype), (h.prototype = new e()), (h.__super__ = o.prototype), h
                                )
                            },
                            y = {}.hasOwnProperty
                        ;(x = g.arraysAreEqual),
                            (g.Hash = (function (h) {
                                function o(s) {
                                    s == null && (s = {}),
                                        (this.values = a(s)),
                                        o.__super__.constructor.apply(this, arguments)
                                }
                                var e, a, d, i, u
                                return (
                                    b(o, h),
                                    (o.fromCommonAttributesOfObjects = function (s) {
                                        var n, p, c, v, t, r
                                        if ((s == null && (s = []), !s.length)) return new this()
                                        for (
                                            n = e(s[0]), c = n.getKeys(), r = s.slice(1), p = 0, v = r.length;
                                            v > p;
                                            p++
                                        )
                                            (t = r[p]), (c = n.getKeysCommonToHash(e(t))), (n = n.slice(c))
                                        return n
                                    }),
                                    (o.box = function (s) {
                                        return e(s)
                                    }),
                                    (o.prototype.add = function (s, n) {
                                        return this.merge(i(s, n))
                                    }),
                                    (o.prototype.remove = function (s) {
                                        return new g.Hash(a(this.values, s))
                                    }),
                                    (o.prototype.get = function (s) {
                                        return this.values[s]
                                    }),
                                    (o.prototype.has = function (s) {
                                        return s in this.values
                                    }),
                                    (o.prototype.merge = function (s) {
                                        return new g.Hash(d(this.values, u(s)))
                                    }),
                                    (o.prototype.slice = function (s) {
                                        var n, p, c, v
                                        for (v = {}, n = 0, c = s.length; c > n; n++)
                                            (p = s[n]), this.has(p) && (v[p] = this.values[p])
                                        return new g.Hash(v)
                                    }),
                                    (o.prototype.getKeys = function () {
                                        return Object.keys(this.values)
                                    }),
                                    (o.prototype.getKeysCommonToHash = function (s) {
                                        var n, p, c, v, t
                                        for (s = e(s), v = this.getKeys(), t = [], n = 0, c = v.length; c > n; n++)
                                            (p = v[n]), this.values[p] === s.values[p] && t.push(p)
                                        return t
                                    }),
                                    (o.prototype.isEqualTo = function (s) {
                                        return x(this.toArray(), e(s).toArray())
                                    }),
                                    (o.prototype.isEmpty = function () {
                                        return this.getKeys().length === 0
                                    }),
                                    (o.prototype.toArray = function () {
                                        var s, n, p
                                        return (
                                            this.array != null
                                                ? this.array
                                                : (this.array = function () {
                                                      var c
                                                      ;(n = []), (c = this.values)
                                                      for (s in c) (p = c[s]), n.push(s, p)
                                                      return n
                                                  }.call(this))
                                        ).slice(0)
                                    }),
                                    (o.prototype.toObject = function () {
                                        return a(this.values)
                                    }),
                                    (o.prototype.toJSON = function () {
                                        return this.toObject()
                                    }),
                                    (o.prototype.contentsForInspection = function () {
                                        return { values: JSON.stringify(this.values) }
                                    }),
                                    (i = function (s, n) {
                                        var p
                                        return (p = {}), (p[s] = n), p
                                    }),
                                    (d = function (s, n) {
                                        var p, c, v
                                        c = a(s)
                                        for (p in n) (v = n[p]), (c[p] = v)
                                        return c
                                    }),
                                    (a = function (s, n) {
                                        var p, c, v, t, r
                                        for (t = {}, r = Object.keys(s).sort(), p = 0, v = r.length; v > p; p++)
                                            (c = r[p]), c !== n && (t[c] = s[c])
                                        return t
                                    }),
                                    (e = function (s) {
                                        return s instanceof g.Hash ? s : new g.Hash(s)
                                    }),
                                    (u = function (s) {
                                        return s instanceof g.Hash ? s.values : s
                                    }),
                                    o
                                )
                            })(g.Object))
                    }.call(this),
                    function () {
                        g.ObjectGroup = (function () {
                            function x(b, y) {
                                var h, o
                                ;(this.objects = b ?? []),
                                    (o = y.depth),
                                    (h = y.asTree),
                                    h &&
                                        ((this.depth = o),
                                        (this.objects = this.constructor.groupObjects(this.objects, {
                                            asTree: h,
                                            depth: this.depth + 1,
                                        })))
                            }
                            return (
                                (x.groupObjects = function (b, y) {
                                    var h, o, e, a, d, i, u, s, n
                                    for (
                                        b == null && (b = []),
                                            n = y ?? {},
                                            e = n.depth,
                                            h = n.asTree,
                                            h && e == null && (e = 0),
                                            s = [],
                                            d = 0,
                                            i = b.length;
                                        i > d;
                                        d++
                                    ) {
                                        if (((u = b[d]), a)) {
                                            if (
                                                typeof u.canBeGrouped == 'function' &&
                                                u.canBeGrouped(e) &&
                                                typeof (o = a[a.length - 1]).canBeGroupedWith == 'function' &&
                                                o.canBeGroupedWith(u, e)
                                            ) {
                                                a.push(u)
                                                continue
                                            }
                                            s.push(new this(a, { depth: e, asTree: h })), (a = null)
                                        }
                                        typeof u.canBeGrouped == 'function' && u.canBeGrouped(e) ? (a = [u]) : s.push(u)
                                    }
                                    return a && s.push(new this(a, { depth: e, asTree: h })), s
                                }),
                                (x.prototype.getObjects = function () {
                                    return this.objects
                                }),
                                (x.prototype.getDepth = function () {
                                    return this.depth
                                }),
                                (x.prototype.getCacheKey = function () {
                                    var b, y, h, o, e
                                    for (y = ['objectGroup'], e = this.getObjects(), b = 0, h = e.length; h > b; b++)
                                        (o = e[b]), y.push(o.getCacheKey())
                                    return y.join('/')
                                }),
                                x
                            )
                        })()
                    }.call(this),
                    function () {
                        var x = function (y, h) {
                                function o() {
                                    this.constructor = y
                                }
                                for (var e in h) b.call(h, e) && (y[e] = h[e])
                                return (
                                    (o.prototype = h.prototype), (y.prototype = new o()), (y.__super__ = h.prototype), y
                                )
                            },
                            b = {}.hasOwnProperty
                        g.ObjectMap = (function (y) {
                            function h(o) {
                                var e, a, d, i, u
                                for (o == null && (o = []), this.objects = {}, d = 0, i = o.length; i > d; d++)
                                    (u = o[d]), (a = JSON.stringify(u)), (e = this.objects)[a] == null && (e[a] = u)
                            }
                            return (
                                x(h, y),
                                (h.prototype.find = function (o) {
                                    var e
                                    return (e = JSON.stringify(o)), this.objects[e]
                                }),
                                h
                            )
                        })(g.BasicObject)
                    }.call(this),
                    function () {
                        g.ElementStore = (function () {
                            function x(y) {
                                this.reset(y)
                            }
                            var b
                            return (
                                (x.prototype.add = function (y) {
                                    var h
                                    return (h = b(y)), (this.elements[h] = y)
                                }),
                                (x.prototype.remove = function (y) {
                                    var h, o
                                    return (h = b(y)), (o = this.elements[h]) ? (delete this.elements[h], o) : void 0
                                }),
                                (x.prototype.reset = function (y) {
                                    var h, o, e
                                    for (y == null && (y = []), this.elements = {}, o = 0, e = y.length; e > o; o++)
                                        (h = y[o]), this.add(h)
                                    return y
                                }),
                                (b = function (y) {
                                    return y.dataset.trixStoreKey
                                }),
                                x
                            )
                        })()
                    }.call(this),
                    function () {}.call(this),
                    function () {
                        var x = function (y, h) {
                                function o() {
                                    this.constructor = y
                                }
                                for (var e in h) b.call(h, e) && (y[e] = h[e])
                                return (
                                    (o.prototype = h.prototype), (y.prototype = new o()), (y.__super__ = h.prototype), y
                                )
                            },
                            b = {}.hasOwnProperty
                        g.Operation = (function (y) {
                            function h() {
                                return h.__super__.constructor.apply(this, arguments)
                            }
                            return (
                                x(h, y),
                                (h.prototype.isPerforming = function () {
                                    return this.performing === !0
                                }),
                                (h.prototype.hasPerformed = function () {
                                    return this.performed === !0
                                }),
                                (h.prototype.hasSucceeded = function () {
                                    return this.performed && this.succeeded
                                }),
                                (h.prototype.hasFailed = function () {
                                    return this.performed && !this.succeeded
                                }),
                                (h.prototype.getPromise = function () {
                                    return this.promise != null
                                        ? this.promise
                                        : (this.promise = new Promise(
                                              (function (o) {
                                                  return function (e, a) {
                                                      return (
                                                          (o.performing = !0),
                                                          o.perform(function (d, i) {
                                                              return (
                                                                  (o.succeeded = d),
                                                                  (o.performing = !1),
                                                                  (o.performed = !0),
                                                                  o.succeeded ? e(i) : a(i)
                                                              )
                                                          })
                                                      )
                                                  }
                                              })(this),
                                          ))
                                }),
                                (h.prototype.perform = function (o) {
                                    return o(!1)
                                }),
                                (h.prototype.release = function () {
                                    var o
                                    return (
                                        (o = this.promise) != null && typeof o.cancel == 'function' && o.cancel(),
                                        (this.promise = null),
                                        (this.performing = null),
                                        (this.performed = null),
                                        (this.succeeded = null)
                                    )
                                }),
                                h.proxyMethod('getPromise().then'),
                                h.proxyMethod('getPromise().catch'),
                                h
                            )
                        })(g.BasicObject)
                    }.call(this),
                    function () {
                        var x,
                            b,
                            y,
                            h,
                            o,
                            e = function (d, i) {
                                function u() {
                                    this.constructor = d
                                }
                                for (var s in i) a.call(i, s) && (d[s] = i[s])
                                return (
                                    (u.prototype = i.prototype), (d.prototype = new u()), (d.__super__ = i.prototype), d
                                )
                            },
                            a = {}.hasOwnProperty
                        ;(g.UTF16String = (function (d) {
                            function i(u, s) {
                                ;(this.ucs2String = u),
                                    (this.codepoints = s),
                                    (this.length = this.codepoints.length),
                                    (this.ucs2Length = this.ucs2String.length)
                            }
                            return (
                                e(i, d),
                                (i.box = function (u) {
                                    return (
                                        u == null && (u = ''),
                                        u instanceof this ? u : this.fromUCS2String(u?.toString())
                                    )
                                }),
                                (i.fromUCS2String = function (u) {
                                    return new this(u, h(u))
                                }),
                                (i.fromCodepoints = function (u) {
                                    return new this(o(u), u)
                                }),
                                (i.prototype.offsetToUCS2Offset = function (u) {
                                    return o(this.codepoints.slice(0, Math.max(0, u))).length
                                }),
                                (i.prototype.offsetFromUCS2Offset = function (u) {
                                    return h(this.ucs2String.slice(0, Math.max(0, u))).length
                                }),
                                (i.prototype.slice = function () {
                                    var u
                                    return this.constructor.fromCodepoints(
                                        (u = this.codepoints).slice.apply(u, arguments),
                                    )
                                }),
                                (i.prototype.charAt = function (u) {
                                    return this.slice(u, u + 1)
                                }),
                                (i.prototype.isEqualTo = function (u) {
                                    return this.constructor.box(u).ucs2String === this.ucs2String
                                }),
                                (i.prototype.toJSON = function () {
                                    return this.ucs2String
                                }),
                                (i.prototype.getCacheKey = function () {
                                    return this.ucs2String
                                }),
                                (i.prototype.toString = function () {
                                    return this.ucs2String
                                }),
                                i
                            )
                        })(g.BasicObject)),
                            (x = (typeof Array.from == 'function' ? Array.from('\u{1F47C}').length : void 0) === 1),
                            (b = (typeof ' '.codePointAt == 'function' ? ' '.codePointAt(0) : void 0) != null),
                            (y =
                                (typeof String.fromCodePoint == 'function'
                                    ? String.fromCodePoint(32, 128124)
                                    : void 0) === ' \u{1F47C}'),
                            (h =
                                x && b
                                    ? function (d) {
                                          return Array.from(d).map(function (i) {
                                              return i.codePointAt(0)
                                          })
                                      }
                                    : function (d) {
                                          var i, u, s, n, p
                                          for (n = [], i = 0, s = d.length; s > i; )
                                              (p = d.charCodeAt(i++)),
                                                  p >= 55296 &&
                                                      56319 >= p &&
                                                      s > i &&
                                                      ((u = d.charCodeAt(i++)),
                                                      (64512 & u) === 56320
                                                          ? (p = ((1023 & p) << 10) + (1023 & u) + 65536)
                                                          : i--),
                                                  n.push(p)
                                          return n
                                      }),
                            (o = y
                                ? function (d) {
                                      return String.fromCodePoint.apply(String, d)
                                  }
                                : function (d) {
                                      var i, u, s
                                      return (
                                          (i = (function () {
                                              var n, p, c
                                              for (c = [], n = 0, p = d.length; p > n; n++)
                                                  (s = d[n]),
                                                      (u = ''),
                                                      s > 65535 &&
                                                          ((s -= 65536),
                                                          (u += String.fromCharCode(((s >>> 10) & 1023) | 55296)),
                                                          (s = 56320 | (1023 & s))),
                                                      c.push(u + String.fromCharCode(s))
                                              return c
                                          })()),
                                          i.join('')
                                      )
                                  })
                    }.call(this),
                    function () {}.call(this),
                    function () {}.call(this),
                    function () {
                        g.config.lang = {
                            attachFiles: 'Attach Files',
                            bold: 'Bold',
                            bullets: 'Bullets',
                            byte: 'Byte',
                            bytes: 'Bytes',
                            captionPlaceholder: 'Add a caption\u2026',
                            code: 'Code',
                            heading1: 'Heading',
                            indent: 'Increase Level',
                            italic: 'Italic',
                            link: 'Link',
                            numbers: 'Numbers',
                            outdent: 'Decrease Level',
                            quote: 'Quote',
                            redo: 'Redo',
                            remove: 'Remove',
                            strike: 'Strikethrough',
                            undo: 'Undo',
                            unlink: 'Unlink',
                            url: 'URL',
                            urlPlaceholder: 'Enter a URL\u2026',
                            GB: 'GB',
                            KB: 'KB',
                            MB: 'MB',
                            PB: 'PB',
                            TB: 'TB',
                        }
                    }.call(this),
                    function () {
                        g.config.css = {
                            attachment: 'attachment',
                            attachmentCaption: 'attachment__caption',
                            attachmentCaptionEditor: 'attachment__caption-editor',
                            attachmentMetadata: 'attachment__metadata',
                            attachmentMetadataContainer: 'attachment__metadata-container',
                            attachmentName: 'attachment__name',
                            attachmentProgress: 'attachment__progress',
                            attachmentSize: 'attachment__size',
                            attachmentToolbar: 'attachment__toolbar',
                            attachmentGallery: 'attachment-gallery',
                        }
                    }.call(this),
                    function () {
                        var x
                        g.config.blockAttributes = x = {
                            default: { tagName: 'div', parse: !1 },
                            quote: { tagName: 'blockquote', nestable: !0 },
                            heading1: { tagName: 'h1', terminal: !0, breakOnReturn: !0, group: !1 },
                            code: { tagName: 'pre', terminal: !0, text: { plaintext: !0 } },
                            bulletList: { tagName: 'ul', parse: !1 },
                            bullet: {
                                tagName: 'li',
                                listAttribute: 'bulletList',
                                group: !1,
                                nestable: !0,
                                test: function (b) {
                                    return g.tagName(b.parentNode) === x[this.listAttribute].tagName
                                },
                            },
                            numberList: { tagName: 'ol', parse: !1 },
                            number: {
                                tagName: 'li',
                                listAttribute: 'numberList',
                                group: !1,
                                nestable: !0,
                                test: function (b) {
                                    return g.tagName(b.parentNode) === x[this.listAttribute].tagName
                                },
                            },
                            attachmentGallery: { tagName: 'div', exclusive: !0, terminal: !0, parse: !1, group: !1 },
                        }
                    }.call(this),
                    function () {
                        var x, b
                        ;(x = g.config.lang),
                            (b = [x.bytes, x.KB, x.MB, x.GB, x.TB, x.PB]),
                            (g.config.fileSize = {
                                prefix: 'IEC',
                                precision: 2,
                                formatter: function (y) {
                                    var h, o, e, a, d
                                    switch (y) {
                                        case 0:
                                            return '0 ' + x.bytes
                                        case 1:
                                            return '1 ' + x.byte
                                        default:
                                            return (
                                                (h = function () {
                                                    switch (this.prefix) {
                                                        case 'SI':
                                                            return 1e3
                                                        case 'IEC':
                                                            return 1024
                                                    }
                                                }.call(this)),
                                                (o = Math.floor(Math.log(y) / Math.log(h))),
                                                (e = y / Math.pow(h, o)),
                                                (a = e.toFixed(this.precision)),
                                                (d = a.replace(/0*$/, '').replace(/\.$/, '')),
                                                d + ' ' + b[o]
                                            )
                                    }
                                },
                            })
                    }.call(this),
                    function () {
                        g.config.textAttributes = {
                            bold: {
                                tagName: 'strong',
                                inheritable: !0,
                                parser: function (x) {
                                    var b
                                    return (
                                        (b = window.getComputedStyle(x)), b.fontWeight === 'bold' || b.fontWeight >= 600
                                    )
                                },
                            },
                            italic: {
                                tagName: 'em',
                                inheritable: !0,
                                parser: function (x) {
                                    var b
                                    return (b = window.getComputedStyle(x)), b.fontStyle === 'italic'
                                },
                            },
                            href: {
                                groupTagName: 'a',
                                parser: function (x) {
                                    var b, y, h
                                    return (
                                        (b = g.AttachmentView.attachmentSelector),
                                        (h = 'a:not(' + b + ')'),
                                        (y = g.findClosestElementFromNode(x, { matchingSelector: h }))
                                            ? y.getAttribute('href')
                                            : void 0
                                    )
                                },
                            },
                            strike: { tagName: 'del', inheritable: !0 },
                            frozen: { style: { backgroundColor: 'highlight' } },
                        }
                    }.call(this),
                    function () {
                        var x, b, y, h, o
                        ;(o = '[data-trix-serialize=false]'),
                            (h = [
                                'contenteditable',
                                'data-trix-id',
                                'data-trix-store-key',
                                'data-trix-mutable',
                                'data-trix-placeholder',
                                'tabindex',
                            ]),
                            (b = 'data-trix-serialized-attributes'),
                            (y = '[' + b + ']'),
                            (x = new RegExp('<!--block-->', 'g')),
                            g.extend({
                                serializers: {
                                    'application/json': function (e) {
                                        var a
                                        if (e instanceof g.Document) a = e
                                        else {
                                            if (!(e instanceof HTMLElement)) throw new Error('unserializable object')
                                            a = g.Document.fromHTML(e.innerHTML)
                                        }
                                        return a.toSerializableDocument().toJSONString()
                                    },
                                    'text/html': function (e) {
                                        var a, d, i, u, s, n, p, c, v, t, r, l, A, f, m, C, S
                                        if (e instanceof g.Document) u = g.DocumentView.render(e)
                                        else {
                                            if (!(e instanceof HTMLElement)) throw new Error('unserializable object')
                                            u = e.cloneNode(!0)
                                        }
                                        for (f = u.querySelectorAll(o), s = 0, v = f.length; v > s; s++)
                                            (i = f[s]), g.removeNode(i)
                                        for (n = 0, t = h.length; t > n; n++)
                                            for (
                                                a = h[n], m = u.querySelectorAll('[' + a + ']'), p = 0, r = m.length;
                                                r > p;
                                                p++
                                            )
                                                (i = m[p]), i.removeAttribute(a)
                                        for (C = u.querySelectorAll(y), c = 0, l = C.length; l > c; c++) {
                                            i = C[c]
                                            try {
                                                ;(d = JSON.parse(i.getAttribute(b))), i.removeAttribute(b)
                                                for (A in d) (S = d[A]), i.setAttribute(A, S)
                                            } catch {}
                                        }
                                        return u.innerHTML.replace(x, '')
                                    },
                                },
                                deserializers: {
                                    'application/json': function (e) {
                                        return g.Document.fromJSONString(e)
                                    },
                                    'text/html': function (e) {
                                        return g.Document.fromHTML(e)
                                    },
                                },
                                serializeToContentType: function (e, a) {
                                    var d
                                    if ((d = g.serializers[a])) return d(e)
                                    throw new Error('unknown content type: ' + a)
                                },
                                deserializeFromContentType: function (e, a) {
                                    var d
                                    if ((d = g.deserializers[a])) return d(e)
                                    throw new Error('unknown content type: ' + a)
                                },
                            })
                    }.call(this),
                    function () {
                        var x
                        ;(x = g.config.lang),
                            (g.config.toolbar = {
                                getDefaultHTML: function () {
                                    return (
                                        `<div class="trix-button-row">
  <span class="trix-button-group trix-button-group--text-tools" data-trix-button-group="text-tools">
    <button type="button" class="trix-button trix-button--icon trix-button--icon-bold" data-trix-attribute="bold" data-trix-key="b" title="` +
                                        x.bold +
                                        '" tabindex="-1">' +
                                        x.bold +
                                        `</button>
    <button type="button" class="trix-button trix-button--icon trix-button--icon-italic" data-trix-attribute="italic" data-trix-key="i" title="` +
                                        x.italic +
                                        '" tabindex="-1">' +
                                        x.italic +
                                        `</button>
    <button type="button" class="trix-button trix-button--icon trix-button--icon-strike" data-trix-attribute="strike" title="` +
                                        x.strike +
                                        '" tabindex="-1">' +
                                        x.strike +
                                        `</button>
    <button type="button" class="trix-button trix-button--icon trix-button--icon-link" data-trix-attribute="href" data-trix-action="link" data-trix-key="k" title="` +
                                        x.link +
                                        '" tabindex="-1">' +
                                        x.link +
                                        `</button>
  </span>

  <span class="trix-button-group trix-button-group--block-tools" data-trix-button-group="block-tools">
    <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-1" data-trix-attribute="heading1" title="` +
                                        x.heading1 +
                                        '" tabindex="-1">' +
                                        x.heading1 +
                                        `</button>
    <button type="button" class="trix-button trix-button--icon trix-button--icon-quote" data-trix-attribute="quote" title="` +
                                        x.quote +
                                        '" tabindex="-1">' +
                                        x.quote +
                                        `</button>
    <button type="button" class="trix-button trix-button--icon trix-button--icon-code" data-trix-attribute="code" title="` +
                                        x.code +
                                        '" tabindex="-1">' +
                                        x.code +
                                        `</button>
    <button type="button" class="trix-button trix-button--icon trix-button--icon-bullet-list" data-trix-attribute="bullet" title="` +
                                        x.bullets +
                                        '" tabindex="-1">' +
                                        x.bullets +
                                        `</button>
    <button type="button" class="trix-button trix-button--icon trix-button--icon-number-list" data-trix-attribute="number" title="` +
                                        x.numbers +
                                        '" tabindex="-1">' +
                                        x.numbers +
                                        `</button>
    <button type="button" class="trix-button trix-button--icon trix-button--icon-decrease-nesting-level" data-trix-action="decreaseNestingLevel" title="` +
                                        x.outdent +
                                        '" tabindex="-1">' +
                                        x.outdent +
                                        `</button>
    <button type="button" class="trix-button trix-button--icon trix-button--icon-increase-nesting-level" data-trix-action="increaseNestingLevel" title="` +
                                        x.indent +
                                        '" tabindex="-1">' +
                                        x.indent +
                                        `</button>
  </span>

  <span class="trix-button-group trix-button-group--file-tools" data-trix-button-group="file-tools">
    <button type="button" class="trix-button trix-button--icon trix-button--icon-attach" data-trix-action="attachFiles" title="` +
                                        x.attachFiles +
                                        '" tabindex="-1">' +
                                        x.attachFiles +
                                        `</button>
  </span>

  <span class="trix-button-group-spacer"></span>

  <span class="trix-button-group trix-button-group--history-tools" data-trix-button-group="history-tools">
    <button type="button" class="trix-button trix-button--icon trix-button--icon-undo" data-trix-action="undo" data-trix-key="z" title="` +
                                        x.undo +
                                        '" tabindex="-1">' +
                                        x.undo +
                                        `</button>
    <button type="button" class="trix-button trix-button--icon trix-button--icon-redo" data-trix-action="redo" data-trix-key="shift+z" title="` +
                                        x.redo +
                                        '" tabindex="-1">' +
                                        x.redo +
                                        `</button>
  </span>
</div>

<div class="trix-dialogs" data-trix-dialogs>
  <div class="trix-dialog trix-dialog--link" data-trix-dialog="href" data-trix-dialog-attribute="href">
    <div class="trix-dialog__link-fields">
      <input type="url" name="href" class="trix-input trix-input--dialog" placeholder="` +
                                        x.urlPlaceholder +
                                        '" aria-label="' +
                                        x.url +
                                        `" required data-trix-input>
      <div class="trix-button-group">
        <input type="button" class="trix-button trix-button--dialog" value="` +
                                        x.link +
                                        `" data-trix-method="setAttribute">
        <input type="button" class="trix-button trix-button--dialog" value="` +
                                        x.unlink +
                                        `" data-trix-method="removeAttribute">
      </div>
    </div>
  </div>
</div>`
                                    )
                                },
                            })
                    }.call(this),
                    function () {
                        g.config.undoInterval = 5e3
                    }.call(this),
                    function () {
                        g.config.attachments = {
                            preview: { presentation: 'gallery', caption: { name: !0, size: !0 } },
                            file: { caption: { size: !0 } },
                        }
                    }.call(this),
                    function () {
                        g.config.keyNames = {
                            8: 'backspace',
                            9: 'tab',
                            13: 'return',
                            27: 'escape',
                            37: 'left',
                            39: 'right',
                            46: 'delete',
                            68: 'd',
                            72: 'h',
                            79: 'o',
                        }
                    }.call(this),
                    function () {
                        g.config.input = {
                            level2Enabled: !0,
                            getLevel: function () {
                                return this.level2Enabled && g.browser.supportsInputEvents ? 2 : 0
                            },
                            pickFiles: function (x) {
                                var b
                                return (
                                    (b = g.makeElement('input', {
                                        type: 'file',
                                        multiple: !0,
                                        hidden: !0,
                                        id: this.fileInputId,
                                    })),
                                    b.addEventListener('change', function () {
                                        return x(b.files), g.removeNode(b)
                                    }),
                                    g.removeNode(document.getElementById(this.fileInputId)),
                                    document.body.appendChild(b),
                                    b.click()
                                )
                            },
                            fileInputId: 'trix-file-input-' + Date.now().toString(16),
                        }
                    }.call(this),
                    function () {}.call(this),
                    function () {
                        g.registerElement('trix-toolbar', {
                            defaultCSS: `%t {
  display: block;
}

%t {
  white-space: nowrap;
}

%t [data-trix-dialog] {
  display: none;
}

%t [data-trix-dialog][data-trix-active] {
  display: block;
}

%t [data-trix-dialog] [data-trix-validate]:invalid {
  background-color: #ffdddd;
}`,
                            initialize: function () {
                                return this.innerHTML === ''
                                    ? (this.innerHTML = g.config.toolbar.getDefaultHTML())
                                    : void 0
                            },
                        })
                    }.call(this),
                    function () {
                        var x = function (h, o) {
                                function e() {
                                    this.constructor = h
                                }
                                for (var a in o) b.call(o, a) && (h[a] = o[a])
                                return (
                                    (e.prototype = o.prototype), (h.prototype = new e()), (h.__super__ = o.prototype), h
                                )
                            },
                            b = {}.hasOwnProperty,
                            y =
                                [].indexOf ||
                                function (h) {
                                    for (var o = 0, e = this.length; e > o; o++)
                                        if (o in this && this[o] === h) return o
                                    return -1
                                }
                        g.ObjectView = (function (h) {
                            function o(e, a) {
                                ;(this.object = e),
                                    (this.options = a ?? {}),
                                    (this.childViews = []),
                                    (this.rootView = this)
                            }
                            return (
                                x(o, h),
                                (o.prototype.getNodes = function () {
                                    var e, a, d, i, u
                                    for (
                                        this.nodes == null && (this.nodes = this.createNodes()),
                                            i = this.nodes,
                                            u = [],
                                            e = 0,
                                            a = i.length;
                                        a > e;
                                        e++
                                    )
                                        (d = i[e]), u.push(d.cloneNode(!0))
                                    return u
                                }),
                                (o.prototype.invalidate = function () {
                                    var e
                                    return (
                                        (this.nodes = null),
                                        (this.childViews = []),
                                        (e = this.parentView) != null ? e.invalidate() : void 0
                                    )
                                }),
                                (o.prototype.invalidateViewForObject = function (e) {
                                    var a
                                    return (a = this.findViewForObject(e)) != null ? a.invalidate() : void 0
                                }),
                                (o.prototype.findOrCreateCachedChildView = function (e, a) {
                                    var d
                                    return (
                                        (d = this.getCachedViewForObject(a))
                                            ? this.recordChildView(d)
                                            : ((d = this.createChildView.apply(this, arguments)),
                                              this.cacheViewForObject(d, a)),
                                        d
                                    )
                                }),
                                (o.prototype.createChildView = function (e, a, d) {
                                    var i
                                    return (
                                        d == null && (d = {}),
                                        a instanceof g.ObjectGroup && ((d.viewClass = e), (e = g.ObjectGroupView)),
                                        (i = new e(a, d)),
                                        this.recordChildView(i)
                                    )
                                }),
                                (o.prototype.recordChildView = function (e) {
                                    return (
                                        (e.parentView = this), (e.rootView = this.rootView), this.childViews.push(e), e
                                    )
                                }),
                                (o.prototype.getAllChildViews = function () {
                                    var e, a, d, i, u
                                    for (u = [], i = this.childViews, a = 0, d = i.length; d > a; a++)
                                        (e = i[a]), u.push(e), (u = u.concat(e.getAllChildViews()))
                                    return u
                                }),
                                (o.prototype.findElement = function () {
                                    return this.findElementForObject(this.object)
                                }),
                                (o.prototype.findElementForObject = function (e) {
                                    var a
                                    return (a = e?.id)
                                        ? this.rootView.element.querySelector("[data-trix-id='" + a + "']")
                                        : void 0
                                }),
                                (o.prototype.findViewForObject = function (e) {
                                    var a, d, i, u
                                    for (i = this.getAllChildViews(), a = 0, d = i.length; d > a; a++)
                                        if (((u = i[a]), u.object === e)) return u
                                }),
                                (o.prototype.getViewCache = function () {
                                    return this.rootView !== this
                                        ? this.rootView.getViewCache()
                                        : this.isViewCachingEnabled()
                                          ? this.viewCache != null
                                              ? this.viewCache
                                              : (this.viewCache = {})
                                          : void 0
                                }),
                                (o.prototype.isViewCachingEnabled = function () {
                                    return this.shouldCacheViews !== !1
                                }),
                                (o.prototype.enableViewCaching = function () {
                                    return (this.shouldCacheViews = !0)
                                }),
                                (o.prototype.disableViewCaching = function () {
                                    return (this.shouldCacheViews = !1)
                                }),
                                (o.prototype.getCachedViewForObject = function (e) {
                                    var a
                                    return (a = this.getViewCache()) != null ? a[e.getCacheKey()] : void 0
                                }),
                                (o.prototype.cacheViewForObject = function (e, a) {
                                    var d
                                    return (d = this.getViewCache()) != null ? (d[a.getCacheKey()] = e) : void 0
                                }),
                                (o.prototype.garbageCollectCachedViews = function () {
                                    var e, a, d, i, u, s
                                    if ((e = this.getViewCache())) {
                                        ;(s = this.getAllChildViews().concat(this)),
                                            (d = (function () {
                                                var n, p, c
                                                for (c = [], n = 0, p = s.length; p > n; n++)
                                                    (u = s[n]), c.push(u.object.getCacheKey())
                                                return c
                                            })()),
                                            (i = [])
                                        for (a in e) y.call(d, a) < 0 && i.push(delete e[a])
                                        return i
                                    }
                                }),
                                o
                            )
                        })(g.BasicObject)
                    }.call(this),
                    function () {
                        var x = function (y, h) {
                                function o() {
                                    this.constructor = y
                                }
                                for (var e in h) b.call(h, e) && (y[e] = h[e])
                                return (
                                    (o.prototype = h.prototype), (y.prototype = new o()), (y.__super__ = h.prototype), y
                                )
                            },
                            b = {}.hasOwnProperty
                        g.ObjectGroupView = (function (y) {
                            function h() {
                                h.__super__.constructor.apply(this, arguments),
                                    (this.objectGroup = this.object),
                                    (this.viewClass = this.options.viewClass),
                                    delete this.options.viewClass
                            }
                            return (
                                x(h, y),
                                (h.prototype.getChildViews = function () {
                                    var o, e, a, d
                                    if (!this.childViews.length)
                                        for (d = this.objectGroup.getObjects(), o = 0, e = d.length; e > o; o++)
                                            (a = d[o]),
                                                this.findOrCreateCachedChildView(this.viewClass, a, this.options)
                                    return this.childViews
                                }),
                                (h.prototype.createNodes = function () {
                                    var o, e, a, d, i, u, s, n, p
                                    for (
                                        o = this.createContainerElement(),
                                            s = this.getChildViews(),
                                            e = 0,
                                            d = s.length;
                                        d > e;
                                        e++
                                    )
                                        for (p = s[e], n = p.getNodes(), a = 0, i = n.length; i > a; a++)
                                            (u = n[a]), o.appendChild(u)
                                    return [o]
                                }),
                                (h.prototype.createContainerElement = function (o) {
                                    return (
                                        o == null && (o = this.objectGroup.getDepth()),
                                        this.getChildViews()[0].createContainerElement(o)
                                    )
                                }),
                                h
                            )
                        })(g.ObjectView)
                    }.call(this),
                    function () {
                        var x = function (y, h) {
                                function o() {
                                    this.constructor = y
                                }
                                for (var e in h) b.call(h, e) && (y[e] = h[e])
                                return (
                                    (o.prototype = h.prototype), (y.prototype = new o()), (y.__super__ = h.prototype), y
                                )
                            },
                            b = {}.hasOwnProperty
                        g.Controller = (function (y) {
                            function h() {
                                return h.__super__.constructor.apply(this, arguments)
                            }
                            return x(h, y), h
                        })(g.BasicObject)
                    }.call(this),
                    function () {
                        var x,
                            b,
                            y,
                            h,
                            o,
                            e,
                            a = function (s, n) {
                                return function () {
                                    return s.apply(n, arguments)
                                }
                            },
                            d = function (s, n) {
                                function p() {
                                    this.constructor = s
                                }
                                for (var c in n) i.call(n, c) && (s[c] = n[c])
                                return (
                                    (p.prototype = n.prototype), (s.prototype = new p()), (s.__super__ = n.prototype), s
                                )
                            },
                            i = {}.hasOwnProperty,
                            u =
                                [].indexOf ||
                                function (s) {
                                    for (var n = 0, p = this.length; p > n; n++)
                                        if (n in this && this[n] === s) return n
                                    return -1
                                }
                        ;(x = g.findClosestElementFromNode),
                            (y = g.nodeIsEmptyTextNode),
                            (b = g.nodeIsBlockStartComment),
                            (h = g.normalizeSpaces),
                            (o = g.summarizeStringChange),
                            (e = g.tagName),
                            (g.MutationObserver = (function (s) {
                                function n(r) {
                                    ;(this.element = r),
                                        (this.didMutate = a(this.didMutate, this)),
                                        (this.observer = new window.MutationObserver(this.didMutate)),
                                        this.start()
                                }
                                var p, c, v, t
                                return (
                                    d(n, s),
                                    (c = 'data-trix-mutable'),
                                    (v = '[' + c + ']'),
                                    (t = {
                                        attributes: !0,
                                        childList: !0,
                                        characterData: !0,
                                        characterDataOldValue: !0,
                                        subtree: !0,
                                    }),
                                    (n.prototype.start = function () {
                                        return this.reset(), this.observer.observe(this.element, t)
                                    }),
                                    (n.prototype.stop = function () {
                                        return this.observer.disconnect()
                                    }),
                                    (n.prototype.didMutate = function (r) {
                                        var l, A
                                        return (
                                            (l = this.mutations).push.apply(l, this.findSignificantMutations(r)),
                                            this.mutations.length
                                                ? ((A = this.delegate) != null &&
                                                      typeof A.elementDidMutate == 'function' &&
                                                      A.elementDidMutate(this.getMutationSummary()),
                                                  this.reset())
                                                : void 0
                                        )
                                    }),
                                    (n.prototype.reset = function () {
                                        return (this.mutations = [])
                                    }),
                                    (n.prototype.findSignificantMutations = function (r) {
                                        var l, A, f, m
                                        for (m = [], l = 0, A = r.length; A > l; l++)
                                            (f = r[l]), this.mutationIsSignificant(f) && m.push(f)
                                        return m
                                    }),
                                    (n.prototype.mutationIsSignificant = function (r) {
                                        var l, A, f, m
                                        if (this.nodeIsMutable(r.target)) return !1
                                        for (m = this.nodesModifiedByMutation(r), l = 0, A = m.length; A > l; l++)
                                            if (((f = m[l]), this.nodeIsSignificant(f))) return !0
                                        return !1
                                    }),
                                    (n.prototype.nodeIsSignificant = function (r) {
                                        return r !== this.element && !this.nodeIsMutable(r) && !y(r)
                                    }),
                                    (n.prototype.nodeIsMutable = function (r) {
                                        return x(r, { matchingSelector: v })
                                    }),
                                    (n.prototype.nodesModifiedByMutation = function (r) {
                                        var l
                                        switch (((l = []), r.type)) {
                                            case 'attributes':
                                                r.attributeName !== c && l.push(r.target)
                                                break
                                            case 'characterData':
                                                l.push(r.target.parentNode), l.push(r.target)
                                                break
                                            case 'childList':
                                                l.push.apply(l, r.addedNodes), l.push.apply(l, r.removedNodes)
                                        }
                                        return l
                                    }),
                                    (n.prototype.getMutationSummary = function () {
                                        return this.getTextMutationSummary()
                                    }),
                                    (n.prototype.getTextMutationSummary = function () {
                                        var r, l, A, f, m, C, S, L, O, D, R
                                        for (
                                            L = this.getTextChangesFromCharacterData(),
                                                A = L.additions,
                                                m = L.deletions,
                                                R = this.getTextChangesFromChildList(),
                                                O = R.additions,
                                                C = 0,
                                                S = O.length;
                                            S > C;
                                            C++
                                        )
                                            (l = O[C]), u.call(A, l) < 0 && A.push(l)
                                        return (
                                            m.push.apply(m, R.deletions),
                                            (D = {}),
                                            (r = A.join('')) && (D.textAdded = r),
                                            (f = m.join('')) && (D.textDeleted = f),
                                            D
                                        )
                                    }),
                                    (n.prototype.getMutationsByType = function (r) {
                                        var l, A, f, m, C
                                        for (m = this.mutations, C = [], l = 0, A = m.length; A > l; l++)
                                            (f = m[l]), f.type === r && C.push(f)
                                        return C
                                    }),
                                    (n.prototype.getTextChangesFromChildList = function () {
                                        var r, l, A, f, m, C, S, L, O, D, R
                                        for (
                                            r = [],
                                                S = [],
                                                C = this.getMutationsByType('childList'),
                                                l = 0,
                                                f = C.length;
                                            f > l;
                                            l++
                                        )
                                            (m = C[l]), r.push.apply(r, m.addedNodes), S.push.apply(S, m.removedNodes)
                                        return (
                                            (L = r.length === 0 && S.length === 1 && b(S[0])),
                                            L
                                                ? ((D = []),
                                                  (R = [
                                                      `
`,
                                                  ]))
                                                : ((D = p(r)), (R = p(S))),
                                            {
                                                additions: (function () {
                                                    var E, w, k
                                                    for (k = [], A = E = 0, w = D.length; w > E; A = ++E)
                                                        (O = D[A]), O !== R[A] && k.push(h(O))
                                                    return k
                                                })(),
                                                deletions: (function () {
                                                    var E, w, k
                                                    for (k = [], A = E = 0, w = R.length; w > E; A = ++E)
                                                        (O = R[A]), O !== D[A] && k.push(h(O))
                                                    return k
                                                })(),
                                            }
                                        )
                                    }),
                                    (n.prototype.getTextChangesFromCharacterData = function () {
                                        var r, l, A, f, m, C, S, L
                                        return (
                                            (l = this.getMutationsByType('characterData')),
                                            l.length &&
                                                ((L = l[0]),
                                                (A = l[l.length - 1]),
                                                (m = h(L.oldValue)),
                                                (f = h(A.target.data)),
                                                (C = o(m, f)),
                                                (r = C.added),
                                                (S = C.removed)),
                                            { additions: r ? [r] : [], deletions: S ? [S] : [] }
                                        )
                                    }),
                                    (p = function (r) {
                                        var l, A, f, m
                                        for (r == null && (r = []), m = [], l = 0, A = r.length; A > l; l++)
                                            switch (((f = r[l]), f.nodeType)) {
                                                case Node.TEXT_NODE:
                                                    m.push(f.data)
                                                    break
                                                case Node.ELEMENT_NODE:
                                                    e(f) === 'br'
                                                        ? m.push(`
`)
                                                        : m.push.apply(m, p(f.childNodes))
                                            }
                                        return m
                                    }),
                                    n
                                )
                            })(g.BasicObject))
                    }.call(this),
                    function () {
                        var x = function (y, h) {
                                function o() {
                                    this.constructor = y
                                }
                                for (var e in h) b.call(h, e) && (y[e] = h[e])
                                return (
                                    (o.prototype = h.prototype), (y.prototype = new o()), (y.__super__ = h.prototype), y
                                )
                            },
                            b = {}.hasOwnProperty
                        g.FileVerificationOperation = (function (y) {
                            function h(o) {
                                this.file = o
                            }
                            return (
                                x(h, y),
                                (h.prototype.perform = function (o) {
                                    var e
                                    return (
                                        (e = new FileReader()),
                                        (e.onerror = function () {
                                            return o(!1)
                                        }),
                                        (e.onload = (function (a) {
                                            return function () {
                                                e.onerror = null
                                                try {
                                                    e.abort()
                                                } catch {}
                                                return o(!0, a.file)
                                            }
                                        })(this)),
                                        e.readAsArrayBuffer(this.file)
                                    )
                                }),
                                h
                            )
                        })(g.Operation)
                    }.call(this),
                    function () {
                        var x,
                            b,
                            y = function (o, e) {
                                function a() {
                                    this.constructor = o
                                }
                                for (var d in e) h.call(e, d) && (o[d] = e[d])
                                return (
                                    (a.prototype = e.prototype), (o.prototype = new a()), (o.__super__ = e.prototype), o
                                )
                            },
                            h = {}.hasOwnProperty
                        ;(x = g.handleEvent),
                            (b = g.innerElementIsActive),
                            (g.InputController = (function (o) {
                                function e(a) {
                                    var d
                                    ;(this.element = a),
                                        (this.mutationObserver = new g.MutationObserver(this.element)),
                                        (this.mutationObserver.delegate = this)
                                    for (d in this.events)
                                        x(d, { onElement: this.element, withCallback: this.handlerFor(d) })
                                }
                                return (
                                    y(e, o),
                                    (e.prototype.events = {}),
                                    (e.prototype.elementDidMutate = function () {}),
                                    (e.prototype.editorWillSyncDocumentView = function () {
                                        return this.mutationObserver.stop()
                                    }),
                                    (e.prototype.editorDidSyncDocumentView = function () {
                                        return this.mutationObserver.start()
                                    }),
                                    (e.prototype.requestRender = function () {
                                        var a
                                        return (a = this.delegate) != null &&
                                            typeof a.inputControllerDidRequestRender == 'function'
                                            ? a.inputControllerDidRequestRender()
                                            : void 0
                                    }),
                                    (e.prototype.requestReparse = function () {
                                        var a
                                        return (
                                            (a = this.delegate) != null &&
                                                typeof a.inputControllerDidRequestReparse == 'function' &&
                                                a.inputControllerDidRequestReparse(),
                                            this.requestRender()
                                        )
                                    }),
                                    (e.prototype.attachFiles = function (a) {
                                        var d, i
                                        return (
                                            (i = (function () {
                                                var u, s, n
                                                for (n = [], u = 0, s = a.length; s > u; u++)
                                                    (d = a[u]), n.push(new g.FileVerificationOperation(d))
                                                return n
                                            })()),
                                            Promise.all(i).then(
                                                (function (u) {
                                                    return function (s) {
                                                        return u.handleInput(function () {
                                                            var n, p
                                                            return (
                                                                (n = this.delegate) != null &&
                                                                    n.inputControllerWillAttachFiles(),
                                                                (p = this.responder) != null && p.insertFiles(s),
                                                                this.requestRender()
                                                            )
                                                        })
                                                    }
                                                })(this),
                                            )
                                        )
                                    }),
                                    (e.prototype.handlerFor = function (a) {
                                        return (function (d) {
                                            return function (i) {
                                                return i.defaultPrevented
                                                    ? void 0
                                                    : d.handleInput(function () {
                                                          return b(this.element)
                                                              ? void 0
                                                              : ((this.eventName = a), this.events[a].call(this, i))
                                                      })
                                            }
                                        })(this)
                                    }),
                                    (e.prototype.handleInput = function (a) {
                                        var d, i
                                        try {
                                            return (
                                                (d = this.delegate) != null && d.inputControllerWillHandleInput(),
                                                a.call(this)
                                            )
                                        } finally {
                                            ;(i = this.delegate) != null && i.inputControllerDidHandleInput()
                                        }
                                    }),
                                    (e.prototype.createLinkHTML = function (a, d) {
                                        var i
                                        return (
                                            (i = document.createElement('a')),
                                            (i.href = a),
                                            (i.textContent = d ?? a),
                                            i.outerHTML
                                        )
                                    }),
                                    e
                                )
                            })(g.BasicObject))
                    }.call(this),
                    function () {
                        var x,
                            b,
                            y,
                            h,
                            o,
                            e,
                            a,
                            d,
                            i,
                            u,
                            s,
                            n,
                            p,
                            c = function (r, l) {
                                function A() {
                                    this.constructor = r
                                }
                                for (var f in l) v.call(l, f) && (r[f] = l[f])
                                return (
                                    (A.prototype = l.prototype), (r.prototype = new A()), (r.__super__ = l.prototype), r
                                )
                            },
                            v = {}.hasOwnProperty,
                            t =
                                [].indexOf ||
                                function (r) {
                                    for (var l = 0, A = this.length; A > l; l++)
                                        if (l in this && this[l] === r) return l
                                    return -1
                                }
                        ;(i = g.makeElement),
                            (u = g.objectsAreEqual),
                            (p = g.tagName),
                            (b = g.browser),
                            (a = g.keyEventIsKeyboardCommand),
                            (h = g.dataTransferIsWritable),
                            (y = g.dataTransferIsPlainText),
                            (d = g.config.keyNames),
                            (g.Level0InputController = (function (r) {
                                function l() {
                                    l.__super__.constructor.apply(this, arguments), this.resetInputSummary()
                                }
                                var A
                                return (
                                    c(l, r),
                                    (A = 0),
                                    (l.prototype.setInputSummary = function (f) {
                                        var m, C
                                        f == null && (f = {}), (this.inputSummary.eventName = this.eventName)
                                        for (m in f) (C = f[m]), (this.inputSummary[m] = C)
                                        return this.inputSummary
                                    }),
                                    (l.prototype.resetInputSummary = function () {
                                        return (this.inputSummary = {})
                                    }),
                                    (l.prototype.reset = function () {
                                        return this.resetInputSummary(), g.selectionChangeObserver.reset()
                                    }),
                                    (l.prototype.elementDidMutate = function (f) {
                                        var m
                                        return this.isComposing()
                                            ? (m = this.delegate) != null &&
                                              typeof m.inputControllerDidAllowUnhandledInput == 'function'
                                                ? m.inputControllerDidAllowUnhandledInput()
                                                : void 0
                                            : this.handleInput(function () {
                                                  return (
                                                      this.mutationIsSignificant(f) &&
                                                          (this.mutationIsExpected(f)
                                                              ? this.requestRender()
                                                              : this.requestReparse()),
                                                      this.reset()
                                                  )
                                              })
                                    }),
                                    (l.prototype.mutationIsExpected = function (f) {
                                        var m, C, S, L, O, D, R, E, w, k
                                        return (
                                            (R = f.textAdded),
                                            (E = f.textDeleted),
                                            this.inputSummary.preferDocument
                                                ? !0
                                                : ((m =
                                                      R != null
                                                          ? R === this.inputSummary.textAdded
                                                          : !this.inputSummary.textAdded),
                                                  (C =
                                                      E != null
                                                          ? this.inputSummary.didDelete
                                                          : !this.inputSummary.didDelete),
                                                  (w =
                                                      (R ===
                                                          `
` ||
                                                          R ===
                                                              ` 
`) &&
                                                      !m),
                                                  (k =
                                                      E ===
                                                          `
` && !C),
                                                  (D = (w && !k) || (k && !w)),
                                                  D &&
                                                  (L = this.getSelectedRange()) &&
                                                  ((S = w ? R.replace(/\n$/, '').length || -1 : R?.length || 1),
                                                  (O = this.responder) != null
                                                      ? O.positionIsBlockBreak(L[1] + S)
                                                      : void 0)
                                                      ? !0
                                                      : m && C)
                                        )
                                    }),
                                    (l.prototype.mutationIsSignificant = function (f) {
                                        var m, C, S
                                        return (
                                            (S = Object.keys(f).length > 0),
                                            (m =
                                                ((C = this.compositionInput) != null ? C.getEndData() : void 0) === ''),
                                            S || !m
                                        )
                                    }),
                                    (l.prototype.events = {
                                        keydown: function (f) {
                                            var m, C, S, L, O, D, R, E, w
                                            if (
                                                (this.isComposing() || this.resetInputSummary(),
                                                (this.inputSummary.didInput = !0),
                                                (L = d[f.keyCode]))
                                            ) {
                                                for (
                                                    C = this.keys,
                                                        E = ['ctrl', 'alt', 'shift', 'meta'],
                                                        S = 0,
                                                        D = E.length;
                                                    D > S;
                                                    S++
                                                )
                                                    (R = E[S]),
                                                        f[R + 'Key'] && (R === 'ctrl' && (R = 'control'), (C = C?.[R]))
                                                C?.[L] != null &&
                                                    (this.setInputSummary({ keyName: L }),
                                                    g.selectionChangeObserver.reset(),
                                                    C[L].call(this, f))
                                            }
                                            return a(f) &&
                                                (m = String.fromCharCode(f.keyCode).toLowerCase()) &&
                                                ((O = (function () {
                                                    var k, T, N, P
                                                    for (N = ['alt', 'shift'], P = [], k = 0, T = N.length; T > k; k++)
                                                        (R = N[k]), f[R + 'Key'] && P.push(R)
                                                    return P
                                                })()),
                                                O.push(m),
                                                (w = this.delegate) != null
                                                    ? w.inputControllerDidReceiveKeyboardCommand(O)
                                                    : void 0)
                                                ? f.preventDefault()
                                                : void 0
                                        },
                                        keypress: function (f) {
                                            var m, C, S
                                            if (
                                                this.inputSummary.eventName == null &&
                                                !f.metaKey &&
                                                (!f.ctrlKey || f.altKey)
                                            )
                                                return (S = n(f))
                                                    ? ((m = this.delegate) != null &&
                                                          m.inputControllerWillPerformTyping(),
                                                      (C = this.responder) != null && C.insertString(S),
                                                      this.setInputSummary({
                                                          textAdded: S,
                                                          didDelete: this.selectionIsExpanded(),
                                                      }))
                                                    : void 0
                                        },
                                        textInput: function (f) {
                                            var m, C, S, L
                                            return (
                                                (m = f.data),
                                                (L = this.inputSummary.textAdded),
                                                L && L !== m && L.toUpperCase() === m
                                                    ? ((C = this.getSelectedRange()),
                                                      this.setSelectedRange([C[0], C[1] + L.length]),
                                                      (S = this.responder) != null && S.insertString(m),
                                                      this.setInputSummary({ textAdded: m }),
                                                      this.setSelectedRange(C))
                                                    : void 0
                                            )
                                        },
                                        dragenter: function (f) {
                                            return f.preventDefault()
                                        },
                                        dragstart: function (f) {
                                            var m, C
                                            return (
                                                (C = f.target),
                                                this.serializeSelectionToDataTransfer(f.dataTransfer),
                                                (this.draggedRange = this.getSelectedRange()),
                                                (m = this.delegate) != null &&
                                                typeof m.inputControllerDidStartDrag == 'function'
                                                    ? m.inputControllerDidStartDrag()
                                                    : void 0
                                            )
                                        },
                                        dragover: function (f) {
                                            var m, C
                                            return (!this.draggedRange &&
                                                !this.canAcceptDataTransfer(f.dataTransfer)) ||
                                                (f.preventDefault(),
                                                (m = { x: f.clientX, y: f.clientY }),
                                                u(m, this.draggingPoint))
                                                ? void 0
                                                : ((this.draggingPoint = m),
                                                  (C = this.delegate) != null &&
                                                  typeof C.inputControllerDidReceiveDragOverPoint == 'function'
                                                      ? C.inputControllerDidReceiveDragOverPoint(this.draggingPoint)
                                                      : void 0)
                                        },
                                        dragend: function () {
                                            var f
                                            return (
                                                (f = this.delegate) != null &&
                                                    typeof f.inputControllerDidCancelDrag == 'function' &&
                                                    f.inputControllerDidCancelDrag(),
                                                (this.draggedRange = null),
                                                (this.draggingPoint = null)
                                            )
                                        },
                                        drop: function (f) {
                                            var m, C, S, L, O, D, R, E, w
                                            return (
                                                f.preventDefault(),
                                                (S = (O = f.dataTransfer) != null ? O.files : void 0),
                                                (L = { x: f.clientX, y: f.clientY }),
                                                (D = this.responder) != null && D.setLocationRangeFromPointRange(L),
                                                S?.length
                                                    ? this.attachFiles(S)
                                                    : this.draggedRange
                                                      ? ((R = this.delegate) != null && R.inputControllerWillMoveText(),
                                                        (E = this.responder) != null &&
                                                            E.moveTextFromRange(this.draggedRange),
                                                        (this.draggedRange = null),
                                                        this.requestRender())
                                                      : (C = f.dataTransfer.getData('application/x-trix-document')) &&
                                                        ((m = g.Document.fromJSONString(C)),
                                                        (w = this.responder) != null && w.insertDocument(m),
                                                        this.requestRender()),
                                                (this.draggedRange = null),
                                                (this.draggingPoint = null)
                                            )
                                        },
                                        cut: function (f) {
                                            var m, C
                                            return (m = this.responder) != null &&
                                                m.selectionIsExpanded() &&
                                                (this.serializeSelectionToDataTransfer(f.clipboardData) &&
                                                    f.preventDefault(),
                                                (C = this.delegate) != null && C.inputControllerWillCutText(),
                                                this.deleteInDirection('backward'),
                                                f.defaultPrevented)
                                                ? this.requestRender()
                                                : void 0
                                        },
                                        copy: function (f) {
                                            var m
                                            return (m = this.responder) != null &&
                                                m.selectionIsExpanded() &&
                                                this.serializeSelectionToDataTransfer(f.clipboardData)
                                                ? f.preventDefault()
                                                : void 0
                                        },
                                        paste: function (f) {
                                            var m, C, S, L, O, D, R, E, w, k, T, N, P, _, F, B, M, U, H, z, j, G, K
                                            return (
                                                (m = (E = f.clipboardData) != null ? E : f.testClipboardData),
                                                (R = { clipboard: m }),
                                                m == null || s(f)
                                                    ? void this.getPastedHTMLUsingHiddenElement(
                                                          (function (J) {
                                                              return function (tt) {
                                                                  var $, X, Y
                                                                  return (
                                                                      (R.type = 'text/html'),
                                                                      (R.html = tt),
                                                                      ($ = J.delegate) != null &&
                                                                          $.inputControllerWillPaste(R),
                                                                      (X = J.responder) != null && X.insertHTML(R.html),
                                                                      J.requestRender(),
                                                                      (Y = J.delegate) != null
                                                                          ? Y.inputControllerDidPaste(R)
                                                                          : void 0
                                                                  )
                                                              }
                                                          })(this),
                                                      )
                                                    : ((L = m.getData('URL'))
                                                          ? ((R.type = 'text/html'),
                                                            (K = (D = m.getData('public.url-name'))
                                                                ? g.squishBreakableWhitespace(D).trim()
                                                                : L),
                                                            (R.html = this.createLinkHTML(L, K)),
                                                            (w = this.delegate) != null &&
                                                                w.inputControllerWillPaste(R),
                                                            this.setInputSummary({
                                                                textAdded: K,
                                                                didDelete: this.selectionIsExpanded(),
                                                            }),
                                                            (F = this.responder) != null && F.insertHTML(R.html),
                                                            this.requestRender(),
                                                            (B = this.delegate) != null && B.inputControllerDidPaste(R))
                                                          : y(m)
                                                            ? ((R.type = 'text/plain'),
                                                              (R.string = m.getData('text/plain')),
                                                              (M = this.delegate) != null &&
                                                                  M.inputControllerWillPaste(R),
                                                              this.setInputSummary({
                                                                  textAdded: R.string,
                                                                  didDelete: this.selectionIsExpanded(),
                                                              }),
                                                              (U = this.responder) != null && U.insertString(R.string),
                                                              this.requestRender(),
                                                              (H = this.delegate) != null &&
                                                                  H.inputControllerDidPaste(R))
                                                            : (O = m.getData('text/html'))
                                                              ? ((R.type = 'text/html'),
                                                                (R.html = O),
                                                                (z = this.delegate) != null &&
                                                                    z.inputControllerWillPaste(R),
                                                                (j = this.responder) != null && j.insertHTML(R.html),
                                                                this.requestRender(),
                                                                (G = this.delegate) != null &&
                                                                    G.inputControllerDidPaste(R))
                                                              : t.call(m.types, 'Files') >= 0 &&
                                                                (S =
                                                                    (k = m.items) != null &&
                                                                    (T = k[0]) != null &&
                                                                    typeof T.getAsFile == 'function'
                                                                        ? T.getAsFile()
                                                                        : void 0) &&
                                                                (!S.name &&
                                                                    (C = o(S)) &&
                                                                    (S.name = 'pasted-file-' + ++A + '.' + C),
                                                                (R.type = 'File'),
                                                                (R.file = S),
                                                                (N = this.delegate) != null &&
                                                                    N.inputControllerWillAttachFiles(),
                                                                (P = this.responder) != null && P.insertFile(R.file),
                                                                this.requestRender(),
                                                                (_ = this.delegate) != null &&
                                                                    _.inputControllerDidPaste(R)),
                                                      f.preventDefault())
                                            )
                                        },
                                        compositionstart: function (f) {
                                            return this.getCompositionInput().start(f.data)
                                        },
                                        compositionupdate: function (f) {
                                            return this.getCompositionInput().update(f.data)
                                        },
                                        compositionend: function (f) {
                                            return this.getCompositionInput().end(f.data)
                                        },
                                        beforeinput: function () {
                                            return (this.inputSummary.didInput = !0)
                                        },
                                        input: function (f) {
                                            return (this.inputSummary.didInput = !0), f.stopPropagation()
                                        },
                                    }),
                                    (l.prototype.keys = {
                                        backspace: function (f) {
                                            var m
                                            return (
                                                (m = this.delegate) != null && m.inputControllerWillPerformTyping(),
                                                this.deleteInDirection('backward', f)
                                            )
                                        },
                                        delete: function (f) {
                                            var m
                                            return (
                                                (m = this.delegate) != null && m.inputControllerWillPerformTyping(),
                                                this.deleteInDirection('forward', f)
                                            )
                                        },
                                        return: function () {
                                            var f, m
                                            return (
                                                this.setInputSummary({ preferDocument: !0 }),
                                                (f = this.delegate) != null && f.inputControllerWillPerformTyping(),
                                                (m = this.responder) != null ? m.insertLineBreak() : void 0
                                            )
                                        },
                                        tab: function (f) {
                                            var m, C
                                            return (m = this.responder) != null && m.canIncreaseNestingLevel()
                                                ? ((C = this.responder) != null && C.increaseNestingLevel(),
                                                  this.requestRender(),
                                                  f.preventDefault())
                                                : void 0
                                        },
                                        left: function (f) {
                                            var m
                                            return this.selectionIsInCursorTarget()
                                                ? (f.preventDefault(),
                                                  (m = this.responder) != null
                                                      ? m.moveCursorInDirection('backward')
                                                      : void 0)
                                                : void 0
                                        },
                                        right: function (f) {
                                            var m
                                            return this.selectionIsInCursorTarget()
                                                ? (f.preventDefault(),
                                                  (m = this.responder) != null
                                                      ? m.moveCursorInDirection('forward')
                                                      : void 0)
                                                : void 0
                                        },
                                        control: {
                                            d: function (f) {
                                                var m
                                                return (
                                                    (m = this.delegate) != null && m.inputControllerWillPerformTyping(),
                                                    this.deleteInDirection('forward', f)
                                                )
                                            },
                                            h: function (f) {
                                                var m
                                                return (
                                                    (m = this.delegate) != null && m.inputControllerWillPerformTyping(),
                                                    this.deleteInDirection('backward', f)
                                                )
                                            },
                                            o: function (f) {
                                                var m, C
                                                return (
                                                    f.preventDefault(),
                                                    (m = this.delegate) != null && m.inputControllerWillPerformTyping(),
                                                    (C = this.responder) != null &&
                                                        C.insertString(
                                                            `
`,
                                                            { updatePosition: !1 },
                                                        ),
                                                    this.requestRender()
                                                )
                                            },
                                        },
                                        shift: {
                                            return: function (f) {
                                                var m, C
                                                return (
                                                    (m = this.delegate) != null && m.inputControllerWillPerformTyping(),
                                                    (C = this.responder) != null &&
                                                        C.insertString(`
`),
                                                    this.requestRender(),
                                                    f.preventDefault()
                                                )
                                            },
                                            tab: function (f) {
                                                var m, C
                                                return (m = this.responder) != null && m.canDecreaseNestingLevel()
                                                    ? ((C = this.responder) != null && C.decreaseNestingLevel(),
                                                      this.requestRender(),
                                                      f.preventDefault())
                                                    : void 0
                                            },
                                            left: function (f) {
                                                return this.selectionIsInCursorTarget()
                                                    ? (f.preventDefault(), this.expandSelectionInDirection('backward'))
                                                    : void 0
                                            },
                                            right: function (f) {
                                                return this.selectionIsInCursorTarget()
                                                    ? (f.preventDefault(), this.expandSelectionInDirection('forward'))
                                                    : void 0
                                            },
                                        },
                                        alt: {
                                            backspace: function () {
                                                var f
                                                return (
                                                    this.setInputSummary({ preferDocument: !1 }),
                                                    (f = this.delegate) != null
                                                        ? f.inputControllerWillPerformTyping()
                                                        : void 0
                                                )
                                            },
                                        },
                                        meta: {
                                            backspace: function () {
                                                var f
                                                return (
                                                    this.setInputSummary({ preferDocument: !1 }),
                                                    (f = this.delegate) != null
                                                        ? f.inputControllerWillPerformTyping()
                                                        : void 0
                                                )
                                            },
                                        },
                                    }),
                                    (l.prototype.getCompositionInput = function () {
                                        return this.isComposing()
                                            ? this.compositionInput
                                            : (this.compositionInput = new x(this))
                                    }),
                                    (l.prototype.isComposing = function () {
                                        return this.compositionInput != null && !this.compositionInput.isEnded()
                                    }),
                                    (l.prototype.deleteInDirection = function (f, m) {
                                        var C
                                        return ((C = this.responder) != null ? C.deleteInDirection(f) : void 0) !== !1
                                            ? this.setInputSummary({ didDelete: !0 })
                                            : m
                                              ? (m.preventDefault(), this.requestRender())
                                              : void 0
                                    }),
                                    (l.prototype.serializeSelectionToDataTransfer = function (f) {
                                        var m, C
                                        if (h(f))
                                            return (
                                                (m =
                                                    (C = this.responder) != null
                                                        ? C.getSelectedDocument().toSerializableDocument()
                                                        : void 0),
                                                f.setData('application/x-trix-document', JSON.stringify(m)),
                                                f.setData('text/html', g.DocumentView.render(m).innerHTML),
                                                f.setData('text/plain', m.toString().replace(/\n$/, '')),
                                                !0
                                            )
                                    }),
                                    (l.prototype.canAcceptDataTransfer = function (f) {
                                        var m, C, S, L, O, D
                                        for (
                                            D = {}, L = (S = f?.types) != null ? S : [], m = 0, C = L.length;
                                            C > m;
                                            m++
                                        )
                                            (O = L[m]), (D[O] = !0)
                                        return (
                                            D.Files ||
                                            D['application/x-trix-document'] ||
                                            D['text/html'] ||
                                            D['text/plain']
                                        )
                                    }),
                                    (l.prototype.getPastedHTMLUsingHiddenElement = function (f) {
                                        var m, C, S
                                        return (
                                            (C = this.getSelectedRange()),
                                            (S = {
                                                position: 'absolute',
                                                left: window.pageXOffset + 'px',
                                                top: window.pageYOffset + 'px',
                                                opacity: 0,
                                            }),
                                            (m = i({ style: S, tagName: 'div', editable: !0 })),
                                            document.body.appendChild(m),
                                            m.focus(),
                                            requestAnimationFrame(
                                                (function (L) {
                                                    return function () {
                                                        var O
                                                        return (
                                                            (O = m.innerHTML),
                                                            g.removeNode(m),
                                                            L.setSelectedRange(C),
                                                            f(O)
                                                        )
                                                    }
                                                })(this),
                                            )
                                        )
                                    }),
                                    l.proxyMethod('responder?.getSelectedRange'),
                                    l.proxyMethod('responder?.setSelectedRange'),
                                    l.proxyMethod('responder?.expandSelectionInDirection'),
                                    l.proxyMethod('responder?.selectionIsInCursorTarget'),
                                    l.proxyMethod('responder?.selectionIsExpanded'),
                                    l
                                )
                            })(g.InputController)),
                            (o = function (r) {
                                var l, A
                                return (l = r.type) != null && (A = l.match(/\/(\w+)$/)) != null ? A[1] : void 0
                            }),
                            (e = (typeof ' '.codePointAt == 'function' ? ' '.codePointAt(0) : void 0) != null),
                            (n = function (r) {
                                var l
                                return r.key && e && r.key.codePointAt(0) === r.keyCode
                                    ? r.key
                                    : (r.which === null
                                          ? (l = r.keyCode)
                                          : r.which !== 0 && r.charCode !== 0 && (l = r.charCode),
                                      l != null && d[l] !== 'escape'
                                          ? g.UTF16String.fromCodepoints([l]).toString()
                                          : void 0)
                            }),
                            (s = function (r) {
                                var l, A, f, m, C, S, L, O, D, R
                                if ((O = r.clipboardData)) {
                                    if (t.call(O.types, 'text/html') >= 0) {
                                        for (D = O.types, f = 0, S = D.length; S > f; f++)
                                            if (
                                                ((R = D[f]),
                                                (l = /^CorePasteboardFlavorType/.test(R)),
                                                (A = /^dyn\./.test(R) && O.getData(R)),
                                                (L = l || A))
                                            )
                                                return !0
                                        return !1
                                    }
                                    return (
                                        (m = t.call(O.types, 'com.apple.webarchive') >= 0),
                                        (C = t.call(O.types, 'com.apple.flat-rtfd') >= 0),
                                        m || C
                                    )
                                }
                            }),
                            (x = (function (r) {
                                function l(A) {
                                    var f
                                    ;(this.inputController = A),
                                        (f = this.inputController),
                                        (this.responder = f.responder),
                                        (this.delegate = f.delegate),
                                        (this.inputSummary = f.inputSummary),
                                        (this.data = {})
                                }
                                return (
                                    c(l, r),
                                    (l.prototype.start = function (A) {
                                        var f, m
                                        return (
                                            (this.data.start = A),
                                            this.isSignificant()
                                                ? (this.inputSummary.eventName === 'keypress' &&
                                                      this.inputSummary.textAdded &&
                                                      (f = this.responder) != null &&
                                                      f.deleteInDirection('left'),
                                                  this.selectionIsExpanded() ||
                                                      (this.insertPlaceholder(), this.requestRender()),
                                                  (this.range =
                                                      (m = this.responder) != null ? m.getSelectedRange() : void 0))
                                                : void 0
                                        )
                                    }),
                                    (l.prototype.update = function (A) {
                                        var f
                                        return (
                                            (this.data.update = A),
                                            this.isSignificant() && (f = this.selectPlaceholder())
                                                ? (this.forgetPlaceholder(), (this.range = f))
                                                : void 0
                                        )
                                    }),
                                    (l.prototype.end = function (A) {
                                        var f, m, C, S
                                        return (
                                            (this.data.end = A),
                                            this.isSignificant()
                                                ? (this.forgetPlaceholder(),
                                                  this.canApplyToDocument()
                                                      ? (this.setInputSummary({ preferDocument: !0, didInput: !1 }),
                                                        (f = this.delegate) != null &&
                                                            f.inputControllerWillPerformTyping(),
                                                        (m = this.responder) != null && m.setSelectedRange(this.range),
                                                        (C = this.responder) != null && C.insertString(this.data.end),
                                                        (S = this.responder) != null
                                                            ? S.setSelectedRange(this.range[0] + this.data.end.length)
                                                            : void 0)
                                                      : this.data.start != null || this.data.update != null
                                                        ? (this.requestReparse(), this.inputController.reset())
                                                        : void 0)
                                                : this.inputController.reset()
                                        )
                                    }),
                                    (l.prototype.getEndData = function () {
                                        return this.data.end
                                    }),
                                    (l.prototype.isEnded = function () {
                                        return this.getEndData() != null
                                    }),
                                    (l.prototype.isSignificant = function () {
                                        return b.composesExistingText ? this.inputSummary.didInput : !0
                                    }),
                                    (l.prototype.canApplyToDocument = function () {
                                        var A, f
                                        return (
                                            ((A = this.data.start) != null ? A.length : void 0) === 0 &&
                                            ((f = this.data.end) != null ? f.length : void 0) > 0 &&
                                            this.range != null
                                        )
                                    }),
                                    l.proxyMethod('inputController.setInputSummary'),
                                    l.proxyMethod('inputController.requestRender'),
                                    l.proxyMethod('inputController.requestReparse'),
                                    l.proxyMethod('responder?.selectionIsExpanded'),
                                    l.proxyMethod('responder?.insertPlaceholder'),
                                    l.proxyMethod('responder?.selectPlaceholder'),
                                    l.proxyMethod('responder?.forgetPlaceholder'),
                                    l
                                )
                            })(g.BasicObject))
                    }.call(this),
                    function () {
                        var x,
                            b,
                            y,
                            h = function (d, i) {
                                return function () {
                                    return d.apply(i, arguments)
                                }
                            },
                            o = function (d, i) {
                                function u() {
                                    this.constructor = d
                                }
                                for (var s in i) e.call(i, s) && (d[s] = i[s])
                                return (
                                    (u.prototype = i.prototype), (d.prototype = new u()), (d.__super__ = i.prototype), d
                                )
                            },
                            e = {}.hasOwnProperty,
                            a =
                                [].indexOf ||
                                function (d) {
                                    for (var i = 0, u = this.length; u > i; i++)
                                        if (i in this && this[i] === d) return i
                                    return -1
                                }
                        ;(x = g.dataTransferIsPlainText),
                            (b = g.keyEventIsKeyboardCommand),
                            (y = g.objectsAreEqual),
                            (g.Level2InputController = (function (d) {
                                function i() {
                                    return (
                                        (this.render = h(this.render, this)),
                                        i.__super__.constructor.apply(this, arguments)
                                    )
                                }
                                var u, s, n, p, c, v
                                return (
                                    o(i, d),
                                    (i.prototype.elementDidMutate = function () {
                                        var t
                                        return this.scheduledRender
                                            ? this.composing &&
                                              (t = this.delegate) != null &&
                                              typeof t.inputControllerDidAllowUnhandledInput == 'function'
                                                ? t.inputControllerDidAllowUnhandledInput()
                                                : void 0
                                            : this.reparse()
                                    }),
                                    (i.prototype.scheduleRender = function () {
                                        return this.scheduledRender != null
                                            ? this.scheduledRender
                                            : (this.scheduledRender = requestAnimationFrame(this.render))
                                    }),
                                    (i.prototype.render = function () {
                                        var t
                                        return (
                                            cancelAnimationFrame(this.scheduledRender),
                                            (this.scheduledRender = null),
                                            this.composing || ((t = this.delegate) != null && t.render()),
                                            typeof this.afterRender == 'function' && this.afterRender(),
                                            (this.afterRender = null)
                                        )
                                    }),
                                    (i.prototype.reparse = function () {
                                        var t
                                        return (t = this.delegate) != null ? t.reparse() : void 0
                                    }),
                                    (i.prototype.events = {
                                        keydown: function (t) {
                                            var r, l, A, f
                                            if (b(t)) {
                                                if (
                                                    ((r = s(t)),
                                                    (f = this.delegate) != null
                                                        ? f.inputControllerDidReceiveKeyboardCommand(r)
                                                        : void 0)
                                                )
                                                    return t.preventDefault()
                                            } else if (
                                                ((A = t.key),
                                                t.altKey && (A += '+Alt'),
                                                t.shiftKey && (A += '+Shift'),
                                                (l = this.keys[A]))
                                            )
                                                return this.withEvent(t, l)
                                        },
                                        paste: function (t) {
                                            var r, l, A, f, m, C, S, L, O
                                            return n(t)
                                                ? (t.preventDefault(), this.attachFiles(t.clipboardData.files))
                                                : p(t)
                                                  ? (t.preventDefault(),
                                                    (l = {
                                                        type: 'text/plain',
                                                        string: t.clipboardData.getData('text/plain'),
                                                    }),
                                                    (A = this.delegate) != null && A.inputControllerWillPaste(l),
                                                    (f = this.responder) != null && f.insertString(l.string),
                                                    this.render(),
                                                    (m = this.delegate) != null ? m.inputControllerDidPaste(l) : void 0)
                                                  : (r = (C = t.clipboardData) != null ? C.getData('URL') : void 0)
                                                    ? (t.preventDefault(),
                                                      (l = { type: 'text/html', html: this.createLinkHTML(r) }),
                                                      (S = this.delegate) != null && S.inputControllerWillPaste(l),
                                                      (L = this.responder) != null && L.insertHTML(l.html),
                                                      this.render(),
                                                      (O = this.delegate) != null
                                                          ? O.inputControllerDidPaste(l)
                                                          : void 0)
                                                    : void 0
                                        },
                                        beforeinput: function (t) {
                                            var r
                                            return (r = this.inputTypes[t.inputType])
                                                ? (this.withEvent(t, r), this.scheduleRender())
                                                : void 0
                                        },
                                        input: function () {
                                            return g.selectionChangeObserver.reset()
                                        },
                                        dragstart: function (t) {
                                            var r, l
                                            return (r = this.responder) != null && r.selectionContainsAttachments()
                                                ? (t.dataTransfer.setData('application/x-trix-dragging', !0),
                                                  (this.dragging = {
                                                      range:
                                                          (l = this.responder) != null ? l.getSelectedRange() : void 0,
                                                      point: c(t),
                                                  }))
                                                : void 0
                                        },
                                        dragenter: function (t) {
                                            return u(t) ? t.preventDefault() : void 0
                                        },
                                        dragover: function (t) {
                                            var r, l
                                            if (this.dragging) {
                                                if ((t.preventDefault(), (r = c(t)), !y(r, this.dragging.point)))
                                                    return (
                                                        (this.dragging.point = r),
                                                        (l = this.responder) != null
                                                            ? l.setLocationRangeFromPointRange(r)
                                                            : void 0
                                                    )
                                            } else if (u(t)) return t.preventDefault()
                                        },
                                        drop: function (t) {
                                            var r, l, A, f
                                            return this.dragging
                                                ? (t.preventDefault(),
                                                  (l = this.delegate) != null && l.inputControllerWillMoveText(),
                                                  (A = this.responder) != null &&
                                                      A.moveTextFromRange(this.dragging.range),
                                                  (this.dragging = null),
                                                  this.scheduleRender())
                                                : u(t)
                                                  ? (t.preventDefault(),
                                                    (r = c(t)),
                                                    (f = this.responder) != null && f.setLocationRangeFromPointRange(r),
                                                    this.attachFiles(t.dataTransfer.files))
                                                  : void 0
                                        },
                                        dragend: function () {
                                            var t
                                            return this.dragging
                                                ? ((t = this.responder) != null &&
                                                      t.setSelectedRange(this.dragging.range),
                                                  (this.dragging = null))
                                                : void 0
                                        },
                                        compositionend: function () {
                                            return this.composing
                                                ? ((this.composing = !1), this.scheduleRender())
                                                : void 0
                                        },
                                    }),
                                    (i.prototype.keys = {
                                        ArrowLeft: function () {
                                            var t, r
                                            return (t = this.responder) != null &&
                                                t.shouldManageMovingCursorInDirection('backward')
                                                ? (this.event.preventDefault(),
                                                  (r = this.responder) != null
                                                      ? r.moveCursorInDirection('backward')
                                                      : void 0)
                                                : void 0
                                        },
                                        ArrowRight: function () {
                                            var t, r
                                            return (t = this.responder) != null &&
                                                t.shouldManageMovingCursorInDirection('forward')
                                                ? (this.event.preventDefault(),
                                                  (r = this.responder) != null
                                                      ? r.moveCursorInDirection('forward')
                                                      : void 0)
                                                : void 0
                                        },
                                        Backspace: function () {
                                            var t, r, l
                                            return (t = this.responder) != null &&
                                                t.shouldManageDeletingInDirection('backward')
                                                ? (this.event.preventDefault(),
                                                  (r = this.delegate) != null && r.inputControllerWillPerformTyping(),
                                                  (l = this.responder) != null && l.deleteInDirection('backward'),
                                                  this.render())
                                                : void 0
                                        },
                                        Tab: function () {
                                            var t, r
                                            return (t = this.responder) != null && t.canIncreaseNestingLevel()
                                                ? (this.event.preventDefault(),
                                                  (r = this.responder) != null && r.increaseNestingLevel(),
                                                  this.render())
                                                : void 0
                                        },
                                        'Tab+Shift': function () {
                                            var t, r
                                            return (t = this.responder) != null && t.canDecreaseNestingLevel()
                                                ? (this.event.preventDefault(),
                                                  (r = this.responder) != null && r.decreaseNestingLevel(),
                                                  this.render())
                                                : void 0
                                        },
                                    }),
                                    (i.prototype.inputTypes = {
                                        deleteByComposition: function () {
                                            return this.deleteInDirection('backward', { recordUndoEntry: !1 })
                                        },
                                        deleteByCut: function () {
                                            return this.deleteInDirection('backward')
                                        },
                                        deleteByDrag: function () {
                                            return (
                                                this.event.preventDefault(),
                                                this.withTargetDOMRange(function () {
                                                    var t
                                                    return (this.deleteByDragRange =
                                                        (t = this.responder) != null ? t.getSelectedRange() : void 0)
                                                })
                                            )
                                        },
                                        deleteCompositionText: function () {
                                            return this.deleteInDirection('backward', { recordUndoEntry: !1 })
                                        },
                                        deleteContent: function () {
                                            return this.deleteInDirection('backward')
                                        },
                                        deleteContentBackward: function () {
                                            return this.deleteInDirection('backward')
                                        },
                                        deleteContentForward: function () {
                                            return this.deleteInDirection('forward')
                                        },
                                        deleteEntireSoftLine: function () {
                                            return this.deleteInDirection('forward')
                                        },
                                        deleteHardLineBackward: function () {
                                            return this.deleteInDirection('backward')
                                        },
                                        deleteHardLineForward: function () {
                                            return this.deleteInDirection('forward')
                                        },
                                        deleteSoftLineBackward: function () {
                                            return this.deleteInDirection('backward')
                                        },
                                        deleteSoftLineForward: function () {
                                            return this.deleteInDirection('forward')
                                        },
                                        deleteWordBackward: function () {
                                            return this.deleteInDirection('backward')
                                        },
                                        deleteWordForward: function () {
                                            return this.deleteInDirection('forward')
                                        },
                                        formatBackColor: function () {
                                            return this.activateAttributeIfSupported('backgroundColor', this.event.data)
                                        },
                                        formatBold: function () {
                                            return this.toggleAttributeIfSupported('bold')
                                        },
                                        formatFontColor: function () {
                                            return this.activateAttributeIfSupported('color', this.event.data)
                                        },
                                        formatFontName: function () {
                                            return this.activateAttributeIfSupported('font', this.event.data)
                                        },
                                        formatIndent: function () {
                                            var t
                                            return (t = this.responder) != null && t.canIncreaseNestingLevel()
                                                ? this.withTargetDOMRange(function () {
                                                      var r
                                                      return (r = this.responder) != null
                                                          ? r.increaseNestingLevel()
                                                          : void 0
                                                  })
                                                : void 0
                                        },
                                        formatItalic: function () {
                                            return this.toggleAttributeIfSupported('italic')
                                        },
                                        formatJustifyCenter: function () {
                                            return this.toggleAttributeIfSupported('justifyCenter')
                                        },
                                        formatJustifyFull: function () {
                                            return this.toggleAttributeIfSupported('justifyFull')
                                        },
                                        formatJustifyLeft: function () {
                                            return this.toggleAttributeIfSupported('justifyLeft')
                                        },
                                        formatJustifyRight: function () {
                                            return this.toggleAttributeIfSupported('justifyRight')
                                        },
                                        formatOutdent: function () {
                                            var t
                                            return (t = this.responder) != null && t.canDecreaseNestingLevel()
                                                ? this.withTargetDOMRange(function () {
                                                      var r
                                                      return (r = this.responder) != null
                                                          ? r.decreaseNestingLevel()
                                                          : void 0
                                                  })
                                                : void 0
                                        },
                                        formatRemove: function () {
                                            return this.withTargetDOMRange(function () {
                                                var t, r, l, A
                                                A = []
                                                for (t in (r = this.responder) != null
                                                    ? r.getCurrentAttributes()
                                                    : void 0)
                                                    A.push(
                                                        (l = this.responder) != null
                                                            ? l.removeCurrentAttribute(t)
                                                            : void 0,
                                                    )
                                                return A
                                            })
                                        },
                                        formatSetBlockTextDirection: function () {
                                            return this.activateAttributeIfSupported('blockDir', this.event.data)
                                        },
                                        formatSetInlineTextDirection: function () {
                                            return this.activateAttributeIfSupported('textDir', this.event.data)
                                        },
                                        formatStrikeThrough: function () {
                                            return this.toggleAttributeIfSupported('strike')
                                        },
                                        formatSubscript: function () {
                                            return this.toggleAttributeIfSupported('sub')
                                        },
                                        formatSuperscript: function () {
                                            return this.toggleAttributeIfSupported('sup')
                                        },
                                        formatUnderline: function () {
                                            return this.toggleAttributeIfSupported('underline')
                                        },
                                        historyRedo: function () {
                                            var t
                                            return (t = this.delegate) != null
                                                ? t.inputControllerWillPerformRedo()
                                                : void 0
                                        },
                                        historyUndo: function () {
                                            var t
                                            return (t = this.delegate) != null
                                                ? t.inputControllerWillPerformUndo()
                                                : void 0
                                        },
                                        insertCompositionText: function () {
                                            return (this.composing = !0), this.insertString(this.event.data)
                                        },
                                        insertFromComposition: function () {
                                            return (this.composing = !1), this.insertString(this.event.data)
                                        },
                                        insertFromDrop: function () {
                                            var t, r
                                            return (t = this.deleteByDragRange)
                                                ? ((this.deleteByDragRange = null),
                                                  (r = this.delegate) != null && r.inputControllerWillMoveText(),
                                                  this.withTargetDOMRange(function () {
                                                      var l
                                                      return (l = this.responder) != null
                                                          ? l.moveTextFromRange(t)
                                                          : void 0
                                                  }))
                                                : void 0
                                        },
                                        insertFromPaste: function () {
                                            var t, r, l, A, f, m, C, S, L, O, D
                                            return (
                                                (t = this.event.dataTransfer),
                                                (f = { dataTransfer: t }),
                                                (r = t.getData('URL'))
                                                    ? (this.event.preventDefault(),
                                                      (f.type = 'text/html'),
                                                      (D = (A = t.getData('public.url-name'))
                                                          ? g.squishBreakableWhitespace(A).trim()
                                                          : r),
                                                      (f.html = this.createLinkHTML(r, D)),
                                                      (m = this.delegate) != null && m.inputControllerWillPaste(f),
                                                      this.withTargetDOMRange(function () {
                                                          var R
                                                          return (R = this.responder) != null
                                                              ? R.insertHTML(f.html)
                                                              : void 0
                                                      }),
                                                      (this.afterRender = (function (R) {
                                                          return function () {
                                                              var E
                                                              return (E = R.delegate) != null
                                                                  ? E.inputControllerDidPaste(f)
                                                                  : void 0
                                                          }
                                                      })(this)))
                                                    : x(t)
                                                      ? ((f.type = 'text/plain'),
                                                        (f.string = t.getData('text/plain')),
                                                        (C = this.delegate) != null && C.inputControllerWillPaste(f),
                                                        this.withTargetDOMRange(function () {
                                                            var R
                                                            return (R = this.responder) != null
                                                                ? R.insertString(f.string)
                                                                : void 0
                                                        }),
                                                        (this.afterRender = (function (R) {
                                                            return function () {
                                                                var E
                                                                return (E = R.delegate) != null
                                                                    ? E.inputControllerDidPaste(f)
                                                                    : void 0
                                                            }
                                                        })(this)))
                                                      : (l = t.getData('text/html'))
                                                        ? (this.event.preventDefault(),
                                                          (f.type = 'text/html'),
                                                          (f.html = l),
                                                          (S = this.delegate) != null && S.inputControllerWillPaste(f),
                                                          this.withTargetDOMRange(function () {
                                                              var R
                                                              return (R = this.responder) != null
                                                                  ? R.insertHTML(f.html)
                                                                  : void 0
                                                          }),
                                                          (this.afterRender = (function (R) {
                                                              return function () {
                                                                  var E
                                                                  return (E = R.delegate) != null
                                                                      ? E.inputControllerDidPaste(f)
                                                                      : void 0
                                                              }
                                                          })(this)))
                                                        : (L = t.files) != null && L.length
                                                          ? ((f.type = 'File'),
                                                            (f.file = t.files[0]),
                                                            (O = this.delegate) != null &&
                                                                O.inputControllerWillPaste(f),
                                                            this.withTargetDOMRange(function () {
                                                                var R
                                                                return (R = this.responder) != null
                                                                    ? R.insertFile(f.file)
                                                                    : void 0
                                                            }),
                                                            (this.afterRender = (function (R) {
                                                                return function () {
                                                                    var E
                                                                    return (E = R.delegate) != null
                                                                        ? E.inputControllerDidPaste(f)
                                                                        : void 0
                                                                }
                                                            })(this)))
                                                          : void 0
                                            )
                                        },
                                        insertFromYank: function () {
                                            return this.insertString(this.event.data)
                                        },
                                        insertLineBreak: function () {
                                            return this.insertString(`
`)
                                        },
                                        insertLink: function () {
                                            return this.activateAttributeIfSupported('href', this.event.data)
                                        },
                                        insertOrderedList: function () {
                                            return this.toggleAttributeIfSupported('number')
                                        },
                                        insertParagraph: function () {
                                            var t
                                            return (
                                                (t = this.delegate) != null && t.inputControllerWillPerformTyping(),
                                                this.withTargetDOMRange(function () {
                                                    var r
                                                    return (r = this.responder) != null ? r.insertLineBreak() : void 0
                                                })
                                            )
                                        },
                                        insertReplacementText: function () {
                                            return this.insertString(this.event.dataTransfer.getData('text/plain'), {
                                                updatePosition: !1,
                                            })
                                        },
                                        insertText: function () {
                                            var t, r
                                            return this.insertString(
                                                (t = this.event.data) != null
                                                    ? t
                                                    : (r = this.event.dataTransfer) != null
                                                      ? r.getData('text/plain')
                                                      : void 0,
                                            )
                                        },
                                        insertTranspose: function () {
                                            return this.insertString(this.event.data)
                                        },
                                        insertUnorderedList: function () {
                                            return this.toggleAttributeIfSupported('bullet')
                                        },
                                    }),
                                    (i.prototype.insertString = function (t, r) {
                                        var l
                                        return (
                                            t == null && (t = ''),
                                            (l = this.delegate) != null && l.inputControllerWillPerformTyping(),
                                            this.withTargetDOMRange(function () {
                                                var A
                                                return (A = this.responder) != null ? A.insertString(t, r) : void 0
                                            })
                                        )
                                    }),
                                    (i.prototype.toggleAttributeIfSupported = function (t) {
                                        var r
                                        return a.call(g.getAllAttributeNames(), t) >= 0
                                            ? ((r = this.delegate) != null && r.inputControllerWillPerformFormatting(t),
                                              this.withTargetDOMRange(function () {
                                                  var l
                                                  return (l = this.responder) != null
                                                      ? l.toggleCurrentAttribute(t)
                                                      : void 0
                                              }))
                                            : void 0
                                    }),
                                    (i.prototype.activateAttributeIfSupported = function (t, r) {
                                        var l
                                        return a.call(g.getAllAttributeNames(), t) >= 0
                                            ? ((l = this.delegate) != null && l.inputControllerWillPerformFormatting(t),
                                              this.withTargetDOMRange(function () {
                                                  var A
                                                  return (A = this.responder) != null
                                                      ? A.setCurrentAttribute(t, r)
                                                      : void 0
                                              }))
                                            : void 0
                                    }),
                                    (i.prototype.deleteInDirection = function (t, r) {
                                        var l, A, f, m
                                        return (
                                            (f = (r ?? { recordUndoEntry: !0 }).recordUndoEntry),
                                            f && (m = this.delegate) != null && m.inputControllerWillPerformTyping(),
                                            (A = (function (C) {
                                                return function () {
                                                    var S
                                                    return (S = C.responder) != null ? S.deleteInDirection(t) : void 0
                                                }
                                            })(this)),
                                            (l = this.getTargetDOMRange({ minLength: 2 }))
                                                ? this.withTargetDOMRange(l, A)
                                                : A()
                                        )
                                    }),
                                    (i.prototype.withTargetDOMRange = function (t, r) {
                                        var l
                                        return (
                                            typeof t == 'function' && ((r = t), (t = this.getTargetDOMRange())),
                                            t
                                                ? (l = this.responder) != null
                                                    ? l.withTargetDOMRange(t, r.bind(this))
                                                    : void 0
                                                : (g.selectionChangeObserver.reset(), r.call(this))
                                        )
                                    }),
                                    (i.prototype.getTargetDOMRange = function (t) {
                                        var r, l, A, f
                                        return (
                                            (A = (t ?? { minLength: 0 }).minLength),
                                            (f =
                                                typeof (r = this.event).getTargetRanges == 'function'
                                                    ? r.getTargetRanges()
                                                    : void 0) &&
                                            f.length &&
                                            ((l = v(f[0])), A === 0 || l.toString().length >= A)
                                                ? l
                                                : void 0
                                        )
                                    }),
                                    (v = function (t) {
                                        var r
                                        return (
                                            (r = document.createRange()),
                                            r.setStart(t.startContainer, t.startOffset),
                                            r.setEnd(t.endContainer, t.endOffset),
                                            r
                                        )
                                    }),
                                    (i.prototype.withEvent = function (t, r) {
                                        var l
                                        this.event = t
                                        try {
                                            l = r.call(this)
                                        } finally {
                                            this.event = null
                                        }
                                        return l
                                    }),
                                    (u = function (t) {
                                        var r, l
                                        return (
                                            a.call(
                                                (r = (l = t.dataTransfer) != null ? l.types : void 0) != null ? r : [],
                                                'Files',
                                            ) >= 0
                                        )
                                    }),
                                    (n = function (t) {
                                        var r
                                        return (r = t.clipboardData)
                                            ? a.call(r.types, 'Files') >= 0 &&
                                                  r.types.length === 1 &&
                                                  r.files.length >= 1
                                            : void 0
                                    }),
                                    (p = function (t) {
                                        var r
                                        return (r = t.clipboardData)
                                            ? a.call(r.types, 'text/plain') >= 0 && r.types.length === 1
                                            : void 0
                                    }),
                                    (s = function (t) {
                                        var r
                                        return (
                                            (r = []),
                                            t.altKey && r.push('alt'),
                                            t.shiftKey && r.push('shift'),
                                            r.push(t.key),
                                            r
                                        )
                                    }),
                                    (c = function (t) {
                                        return { x: t.clientX, y: t.clientY }
                                    }),
                                    i
                                )
                            })(g.InputController))
                    }.call(this),
                    function () {
                        var x,
                            b,
                            y,
                            h,
                            o,
                            e,
                            a,
                            d,
                            i = function (n, p) {
                                return function () {
                                    return n.apply(p, arguments)
                                }
                            },
                            u = function (n, p) {
                                function c() {
                                    this.constructor = n
                                }
                                for (var v in p) s.call(p, v) && (n[v] = p[v])
                                return (
                                    (c.prototype = p.prototype), (n.prototype = new c()), (n.__super__ = p.prototype), n
                                )
                            },
                            s = {}.hasOwnProperty
                        ;(b = g.defer),
                            (y = g.handleEvent),
                            (e = g.makeElement),
                            (d = g.tagName),
                            (a = g.config),
                            (o = a.lang),
                            (x = a.css),
                            (h = a.keyNames),
                            (g.AttachmentEditorController = (function (n) {
                                function p(v, t, r, l) {
                                    ;(this.attachmentPiece = v),
                                        (this.element = t),
                                        (this.container = r),
                                        (this.options = l ?? {}),
                                        (this.didBlurCaption = i(this.didBlurCaption, this)),
                                        (this.didChangeCaption = i(this.didChangeCaption, this)),
                                        (this.didInputCaption = i(this.didInputCaption, this)),
                                        (this.didKeyDownCaption = i(this.didKeyDownCaption, this)),
                                        (this.didClickActionButton = i(this.didClickActionButton, this)),
                                        (this.didClickToolbar = i(this.didClickToolbar, this)),
                                        (this.attachment = this.attachmentPiece.attachment),
                                        d(this.element) === 'a' && (this.element = this.element.firstChild),
                                        this.install()
                                }
                                var c
                                return (
                                    u(p, n),
                                    (c = function (v) {
                                        return function () {
                                            var t
                                            return (
                                                (t = v.apply(this, arguments)),
                                                t.do(),
                                                this.undos == null && (this.undos = []),
                                                this.undos.push(t.undo)
                                            )
                                        }
                                    }),
                                    (p.prototype.install = function () {
                                        return (
                                            this.makeElementMutable(),
                                            this.addToolbar(),
                                            this.attachment.isPreviewable() ? this.installCaptionEditor() : void 0
                                        )
                                    }),
                                    (p.prototype.uninstall = function () {
                                        var v, t
                                        for (this.savePendingCaption(); (t = this.undos.pop()); ) t()
                                        return (v = this.delegate) != null
                                            ? v.didUninstallAttachmentEditor(this)
                                            : void 0
                                    }),
                                    (p.prototype.savePendingCaption = function () {
                                        var v, t, r
                                        return this.pendingCaption != null
                                            ? ((v = this.pendingCaption),
                                              (this.pendingCaption = null),
                                              v
                                                  ? (t = this.delegate) != null &&
                                                    typeof t.attachmentEditorDidRequestUpdatingAttributesForAttachment ==
                                                        'function'
                                                      ? t.attachmentEditorDidRequestUpdatingAttributesForAttachment(
                                                            { caption: v },
                                                            this.attachment,
                                                        )
                                                      : void 0
                                                  : (r = this.delegate) != null &&
                                                      typeof r.attachmentEditorDidRequestRemovingAttributeForAttachment ==
                                                          'function'
                                                    ? r.attachmentEditorDidRequestRemovingAttributeForAttachment(
                                                          'caption',
                                                          this.attachment,
                                                      )
                                                    : void 0)
                                            : void 0
                                    }),
                                    (p.prototype.makeElementMutable = c(function () {
                                        return {
                                            do: (function (v) {
                                                return function () {
                                                    return (v.element.dataset.trixMutable = !0)
                                                }
                                            })(this),
                                            undo: (function (v) {
                                                return function () {
                                                    return delete v.element.dataset.trixMutable
                                                }
                                            })(this),
                                        }
                                    })),
                                    (p.prototype.addToolbar = c(function () {
                                        var v
                                        return (
                                            (v = e({
                                                tagName: 'div',
                                                className: x.attachmentToolbar,
                                                data: { trixMutable: !0 },
                                                childNodes: e({
                                                    tagName: 'div',
                                                    className: 'trix-button-row',
                                                    childNodes: e({
                                                        tagName: 'span',
                                                        className: 'trix-button-group trix-button-group--actions',
                                                        childNodes: e({
                                                            tagName: 'button',
                                                            className: 'trix-button trix-button--remove',
                                                            textContent: o.remove,
                                                            attributes: { title: o.remove },
                                                            data: { trixAction: 'remove' },
                                                        }),
                                                    }),
                                                }),
                                            })),
                                            this.attachment.isPreviewable() &&
                                                v.appendChild(
                                                    e({
                                                        tagName: 'div',
                                                        className: x.attachmentMetadataContainer,
                                                        childNodes: e({
                                                            tagName: 'span',
                                                            className: x.attachmentMetadata,
                                                            childNodes: [
                                                                e({
                                                                    tagName: 'span',
                                                                    className: x.attachmentName,
                                                                    textContent: this.attachment.getFilename(),
                                                                    attributes: {
                                                                        title: this.attachment.getFilename(),
                                                                    },
                                                                }),
                                                                e({
                                                                    tagName: 'span',
                                                                    className: x.attachmentSize,
                                                                    textContent: this.attachment.getFormattedFilesize(),
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                ),
                                            y('click', { onElement: v, withCallback: this.didClickToolbar }),
                                            y('click', {
                                                onElement: v,
                                                matchingSelector: '[data-trix-action]',
                                                withCallback: this.didClickActionButton,
                                            }),
                                            {
                                                do: (function (t) {
                                                    return function () {
                                                        return t.element.appendChild(v)
                                                    }
                                                })(this),
                                                undo: (function () {
                                                    return function () {
                                                        return g.removeNode(v)
                                                    }
                                                })(this),
                                            }
                                        )
                                    })),
                                    (p.prototype.installCaptionEditor = c(function () {
                                        var v, t, r, l, A
                                        return (
                                            (l = e({
                                                tagName: 'textarea',
                                                className: x.attachmentCaptionEditor,
                                                attributes: { placeholder: o.captionPlaceholder },
                                                data: { trixMutable: !0 },
                                            })),
                                            (l.value = this.attachmentPiece.getCaption()),
                                            (A = l.cloneNode()),
                                            A.classList.add('trix-autoresize-clone'),
                                            (A.tabIndex = -1),
                                            (v = function () {
                                                return (A.value = l.value), (l.style.height = A.scrollHeight + 'px')
                                            }),
                                            y('input', { onElement: l, withCallback: v }),
                                            y('input', { onElement: l, withCallback: this.didInputCaption }),
                                            y('keydown', { onElement: l, withCallback: this.didKeyDownCaption }),
                                            y('change', { onElement: l, withCallback: this.didChangeCaption }),
                                            y('blur', { onElement: l, withCallback: this.didBlurCaption }),
                                            (r = this.element.querySelector('figcaption')),
                                            (t = r.cloneNode()),
                                            {
                                                do: (function (f) {
                                                    return function () {
                                                        return (
                                                            (r.style.display = 'none'),
                                                            t.appendChild(l),
                                                            t.appendChild(A),
                                                            t.classList.add(x.attachmentCaption + '--editing'),
                                                            r.parentElement.insertBefore(t, r),
                                                            v(),
                                                            f.options.editCaption
                                                                ? b(function () {
                                                                      return l.focus()
                                                                  })
                                                                : void 0
                                                        )
                                                    }
                                                })(this),
                                                undo: function () {
                                                    return g.removeNode(t), (r.style.display = null)
                                                },
                                            }
                                        )
                                    })),
                                    (p.prototype.didClickToolbar = function (v) {
                                        return v.preventDefault(), v.stopPropagation()
                                    }),
                                    (p.prototype.didClickActionButton = function (v) {
                                        var t, r
                                        switch ((t = v.target.getAttribute('data-trix-action'))) {
                                            case 'remove':
                                                return (r = this.delegate) != null
                                                    ? r.attachmentEditorDidRequestRemovalOfAttachment(this.attachment)
                                                    : void 0
                                        }
                                    }),
                                    (p.prototype.didKeyDownCaption = function (v) {
                                        var t
                                        return h[v.keyCode] === 'return'
                                            ? (v.preventDefault(),
                                              this.savePendingCaption(),
                                              (t = this.delegate) != null &&
                                              typeof t.attachmentEditorDidRequestDeselectingAttachment == 'function'
                                                  ? t.attachmentEditorDidRequestDeselectingAttachment(this.attachment)
                                                  : void 0)
                                            : void 0
                                    }),
                                    (p.prototype.didInputCaption = function (v) {
                                        return (this.pendingCaption = v.target.value.replace(/\s/g, ' ').trim())
                                    }),
                                    (p.prototype.didChangeCaption = function () {
                                        return this.savePendingCaption()
                                    }),
                                    (p.prototype.didBlurCaption = function () {
                                        return this.savePendingCaption()
                                    }),
                                    p
                                )
                            })(g.BasicObject))
                    }.call(this),
                    function () {
                        var x,
                            b,
                            y,
                            h = function (e, a) {
                                function d() {
                                    this.constructor = e
                                }
                                for (var i in a) o.call(a, i) && (e[i] = a[i])
                                return (
                                    (d.prototype = a.prototype), (e.prototype = new d()), (e.__super__ = a.prototype), e
                                )
                            },
                            o = {}.hasOwnProperty
                        ;(y = g.makeElement),
                            (x = g.config.css),
                            (g.AttachmentView = (function (e) {
                                function a() {
                                    a.__super__.constructor.apply(this, arguments),
                                        (this.attachment = this.object),
                                        (this.attachment.uploadProgressDelegate = this),
                                        (this.attachmentPiece = this.options.piece)
                                }
                                var d
                                return (
                                    h(a, e),
                                    (a.attachmentSelector = '[data-trix-attachment]'),
                                    (a.prototype.createContentNodes = function () {
                                        return []
                                    }),
                                    (a.prototype.createNodes = function () {
                                        var i, u, s, n, p, c, v
                                        if (
                                            ((i = n =
                                                y({
                                                    tagName: 'figure',
                                                    className: this.getClassName(),
                                                    data: this.getData(),
                                                    editable: !1,
                                                })),
                                            (u = this.getHref()) &&
                                                ((n = y({
                                                    tagName: 'a',
                                                    editable: !1,
                                                    attributes: { href: u, tabindex: -1 },
                                                })),
                                                i.appendChild(n)),
                                            this.attachment.hasContent())
                                        )
                                            n.innerHTML = this.attachment.getContent()
                                        else
                                            for (v = this.createContentNodes(), s = 0, p = v.length; p > s; s++)
                                                (c = v[s]), n.appendChild(c)
                                        return (
                                            n.appendChild(this.createCaptionElement()),
                                            this.attachment.isPending() &&
                                                ((this.progressElement = y({
                                                    tagName: 'progress',
                                                    attributes: {
                                                        class: x.attachmentProgress,
                                                        value: this.attachment.getUploadProgress(),
                                                        max: 100,
                                                    },
                                                    data: {
                                                        trixMutable: !0,
                                                        trixStoreKey: ['progressElement', this.attachment.id].join('/'),
                                                    },
                                                })),
                                                i.appendChild(this.progressElement)),
                                            [d('left'), i, d('right')]
                                        )
                                    }),
                                    (a.prototype.createCaptionElement = function () {
                                        var i, u, s, n, p, c, v
                                        return (
                                            (s = y({ tagName: 'figcaption', className: x.attachmentCaption })),
                                            (i = this.attachmentPiece.getCaption())
                                                ? (s.classList.add(x.attachmentCaption + '--edited'),
                                                  (s.textContent = i))
                                                : ((u = this.getCaptionConfig()),
                                                  u.name && (n = this.attachment.getFilename()),
                                                  u.size && (c = this.attachment.getFormattedFilesize()),
                                                  n &&
                                                      ((p = y({
                                                          tagName: 'span',
                                                          className: x.attachmentName,
                                                          textContent: n,
                                                      })),
                                                      s.appendChild(p)),
                                                  c &&
                                                      (n && s.appendChild(document.createTextNode(' ')),
                                                      (v = y({
                                                          tagName: 'span',
                                                          className: x.attachmentSize,
                                                          textContent: c,
                                                      })),
                                                      s.appendChild(v))),
                                            s
                                        )
                                    }),
                                    (a.prototype.getClassName = function () {
                                        var i, u
                                        return (
                                            (u = [x.attachment, x.attachment + '--' + this.attachment.getType()]),
                                            (i = this.attachment.getExtension()) && u.push(x.attachment + '--' + i),
                                            u.join(' ')
                                        )
                                    }),
                                    (a.prototype.getData = function () {
                                        var i, u
                                        return (
                                            (u = {
                                                trixAttachment: JSON.stringify(this.attachment),
                                                trixContentType: this.attachment.getContentType(),
                                                trixId: this.attachment.id,
                                            }),
                                            (i = this.attachmentPiece.attributes),
                                            i.isEmpty() || (u.trixAttributes = JSON.stringify(i)),
                                            this.attachment.isPending() && (u.trixSerialize = !1),
                                            u
                                        )
                                    }),
                                    (a.prototype.getHref = function () {
                                        return b(this.attachment.getContent(), 'a') ? void 0 : this.attachment.getHref()
                                    }),
                                    (a.prototype.getCaptionConfig = function () {
                                        var i, u, s
                                        return (
                                            (s = this.attachment.getType()),
                                            (i = g.copyObject(
                                                (u = g.config.attachments[s]) != null ? u.caption : void 0,
                                            )),
                                            s === 'file' && (i.name = !0),
                                            i
                                        )
                                    }),
                                    (a.prototype.findProgressElement = function () {
                                        var i
                                        return (i = this.findElement()) != null ? i.querySelector('progress') : void 0
                                    }),
                                    (d = function (i) {
                                        return y({
                                            tagName: 'span',
                                            textContent: g.ZERO_WIDTH_SPACE,
                                            data: { trixCursorTarget: i, trixSerialize: !1 },
                                        })
                                    }),
                                    (a.prototype.attachmentDidChangeUploadProgress = function () {
                                        var i, u
                                        return (
                                            (u = this.attachment.getUploadProgress()),
                                            (i = this.findProgressElement()) != null ? (i.value = u) : void 0
                                        )
                                    }),
                                    a
                                )
                            })(g.ObjectView)),
                            (b = function (e, a) {
                                var d
                                return (d = y('div')), (d.innerHTML = e ?? ''), d.querySelector(a)
                            })
                    }.call(this),
                    function () {
                        var x,
                            b = function (h, o) {
                                function e() {
                                    this.constructor = h
                                }
                                for (var a in o) y.call(o, a) && (h[a] = o[a])
                                return (
                                    (e.prototype = o.prototype), (h.prototype = new e()), (h.__super__ = o.prototype), h
                                )
                            },
                            y = {}.hasOwnProperty
                        ;(x = g.makeElement),
                            (g.PreviewableAttachmentView = (function (h) {
                                function o() {
                                    o.__super__.constructor.apply(this, arguments),
                                        (this.attachment.previewDelegate = this)
                                }
                                return (
                                    b(o, h),
                                    (o.prototype.createContentNodes = function () {
                                        return (
                                            (this.image = x({
                                                tagName: 'img',
                                                attributes: { src: '' },
                                                data: { trixMutable: !0 },
                                            })),
                                            this.refresh(this.image),
                                            [this.image]
                                        )
                                    }),
                                    (o.prototype.createCaptionElement = function () {
                                        var e
                                        return (
                                            (e = o.__super__.createCaptionElement.apply(this, arguments)),
                                            e.textContent ||
                                                e.setAttribute(
                                                    'data-trix-placeholder',
                                                    g.config.lang.captionPlaceholder,
                                                ),
                                            e
                                        )
                                    }),
                                    (o.prototype.refresh = function (e) {
                                        var a
                                        return (
                                            e == null &&
                                                (e =
                                                    (a = this.findElement()) != null ? a.querySelector('img') : void 0),
                                            e ? this.updateAttributesForImage(e) : void 0
                                        )
                                    }),
                                    (o.prototype.updateAttributesForImage = function (e) {
                                        var a, d, i, u, s, n
                                        return (
                                            (s = this.attachment.getURL()),
                                            (d = this.attachment.getPreviewURL()),
                                            (e.src = d || s),
                                            d === s
                                                ? e.removeAttribute('data-trix-serialized-attributes')
                                                : ((i = JSON.stringify({ src: s })),
                                                  e.setAttribute('data-trix-serialized-attributes', i)),
                                            (n = this.attachment.getWidth()),
                                            (a = this.attachment.getHeight()),
                                            n != null && (e.width = n),
                                            a != null && (e.height = a),
                                            (u = ['imageElement', this.attachment.id, e.src, e.width, e.height].join(
                                                '/',
                                            )),
                                            (e.dataset.trixStoreKey = u)
                                        )
                                    }),
                                    (o.prototype.attachmentDidChangeAttributes = function () {
                                        return this.refresh(this.image), this.refresh()
                                    }),
                                    o
                                )
                            })(g.AttachmentView))
                    }.call(this),
                    function () {
                        var x,
                            b,
                            y,
                            h = function (e, a) {
                                function d() {
                                    this.constructor = e
                                }
                                for (var i in a) o.call(a, i) && (e[i] = a[i])
                                return (
                                    (d.prototype = a.prototype), (e.prototype = new d()), (e.__super__ = a.prototype), e
                                )
                            },
                            o = {}.hasOwnProperty
                        ;(y = g.makeElement),
                            (x = g.findInnerElement),
                            (b = g.getTextConfig),
                            (g.PieceView = (function (e) {
                                function a() {
                                    var i
                                    a.__super__.constructor.apply(this, arguments),
                                        (this.piece = this.object),
                                        (this.attributes = this.piece.getAttributes()),
                                        (i = this.options),
                                        (this.textConfig = i.textConfig),
                                        (this.context = i.context),
                                        this.piece.attachment
                                            ? (this.attachment = this.piece.attachment)
                                            : (this.string = this.piece.toString())
                                }
                                var d
                                return (
                                    h(a, e),
                                    (a.prototype.createNodes = function () {
                                        var i, u, s, n, p, c
                                        if (
                                            ((c = this.attachment
                                                ? this.createAttachmentNodes()
                                                : this.createStringNodes()),
                                            (i = this.createElement()))
                                        ) {
                                            for (s = x(i), u = 0, n = c.length; n > u; u++) (p = c[u]), s.appendChild(p)
                                            c = [i]
                                        }
                                        return c
                                    }),
                                    (a.prototype.createAttachmentNodes = function () {
                                        var i, u
                                        return (
                                            (i = this.attachment.isPreviewable()
                                                ? g.PreviewableAttachmentView
                                                : g.AttachmentView),
                                            (u = this.createChildView(i, this.piece.attachment, { piece: this.piece })),
                                            u.getNodes()
                                        )
                                    }),
                                    (a.prototype.createStringNodes = function () {
                                        var i, u, s, n, p, c, v, t, r, l
                                        if ((t = this.textConfig) != null && t.plaintext)
                                            return [document.createTextNode(this.string)]
                                        for (
                                            v = [],
                                                r = this.string.split(`
`),
                                                s = u = 0,
                                                n = r.length;
                                            n > u;
                                            s = ++u
                                        )
                                            (l = r[s]),
                                                s > 0 && ((i = y('br')), v.push(i)),
                                                (p = l.length) &&
                                                    ((c = document.createTextNode(this.preserveSpaces(l))), v.push(c))
                                        return v
                                    }),
                                    (a.prototype.createElement = function () {
                                        var i, u, s, n, p, c, v, t, r
                                        ;(t = {}), (c = this.attributes)
                                        for (n in c)
                                            if (
                                                ((r = c[n]),
                                                (i = b(n)) &&
                                                    (i.tagName &&
                                                        ((p = y(i.tagName)),
                                                        s ? (s.appendChild(p), (s = p)) : (u = s = p)),
                                                    i.styleProperty && (t[i.styleProperty] = r),
                                                    i.style))
                                            ) {
                                                v = i.style
                                                for (n in v) (r = v[n]), (t[n] = r)
                                            }
                                        if (Object.keys(t).length) {
                                            u == null && (u = y('span'))
                                            for (n in t) (r = t[n]), (u.style[n] = r)
                                        }
                                        return u
                                    }),
                                    (a.prototype.createContainerElement = function () {
                                        var i, u, s, n, p
                                        n = this.attributes
                                        for (s in n)
                                            if (((p = n[s]), (u = b(s)) && u.groupTagName))
                                                return (i = {}), (i[s] = p), y(u.groupTagName, i)
                                    }),
                                    (d = g.NON_BREAKING_SPACE),
                                    (a.prototype.preserveSpaces = function (i) {
                                        return (
                                            this.context.isLast && (i = i.replace(/\ $/, d)),
                                            (i = i
                                                .replace(/(\S)\ {3}(\S)/g, '$1 ' + d + ' $2')
                                                .replace(/\ {2}/g, d + ' ')
                                                .replace(/\ {2}/g, ' ' + d)),
                                            (this.context.isFirst || this.context.followsWhitespace) &&
                                                (i = i.replace(/^\ /, d)),
                                            i
                                        )
                                    }),
                                    a
                                )
                            })(g.ObjectView))
                    }.call(this),
                    function () {
                        var x = function (y, h) {
                                function o() {
                                    this.constructor = y
                                }
                                for (var e in h) b.call(h, e) && (y[e] = h[e])
                                return (
                                    (o.prototype = h.prototype), (y.prototype = new o()), (y.__super__ = h.prototype), y
                                )
                            },
                            b = {}.hasOwnProperty
                        g.TextView = (function (y) {
                            function h() {
                                h.__super__.constructor.apply(this, arguments),
                                    (this.text = this.object),
                                    (this.textConfig = this.options.textConfig)
                            }
                            var o
                            return (
                                x(h, y),
                                (h.prototype.createNodes = function () {
                                    var e, a, d, i, u, s, n, p, c, v
                                    for (
                                        s = [],
                                            p = g.ObjectGroup.groupObjects(this.getPieces()),
                                            i = p.length - 1,
                                            d = a = 0,
                                            u = p.length;
                                        u > a;
                                        d = ++a
                                    )
                                        (n = p[d]),
                                            (e = {}),
                                            d === 0 && (e.isFirst = !0),
                                            d === i && (e.isLast = !0),
                                            o(c) && (e.followsWhitespace = !0),
                                            (v = this.findOrCreateCachedChildView(g.PieceView, n, {
                                                textConfig: this.textConfig,
                                                context: e,
                                            })),
                                            s.push.apply(s, v.getNodes()),
                                            (c = n)
                                    return s
                                }),
                                (h.prototype.getPieces = function () {
                                    var e, a, d, i, u
                                    for (i = this.text.getPieces(), u = [], e = 0, a = i.length; a > e; e++)
                                        (d = i[e]), d.hasAttribute('blockBreak') || u.push(d)
                                    return u
                                }),
                                (o = function (e) {
                                    return /\s$/.test(e?.toString())
                                }),
                                h
                            )
                        })(g.ObjectView)
                    }.call(this),
                    function () {
                        var x,
                            b,
                            y,
                            h = function (e, a) {
                                function d() {
                                    this.constructor = e
                                }
                                for (var i in a) o.call(a, i) && (e[i] = a[i])
                                return (
                                    (d.prototype = a.prototype), (e.prototype = new d()), (e.__super__ = a.prototype), e
                                )
                            },
                            o = {}.hasOwnProperty
                        ;(y = g.makeElement),
                            (b = g.getBlockConfig),
                            (x = g.config.css),
                            (g.BlockView = (function (e) {
                                function a() {
                                    a.__super__.constructor.apply(this, arguments),
                                        (this.block = this.object),
                                        (this.attributes = this.block.getAttributes())
                                }
                                return (
                                    h(a, e),
                                    (a.prototype.createNodes = function () {
                                        var d, i, u, s, n, p, c, v, t, r, l
                                        if (
                                            ((i = document.createComment('block')),
                                            (c = [i]),
                                            this.block.isEmpty()
                                                ? c.push(y('br'))
                                                : ((r =
                                                      (v = b(this.block.getLastAttribute())) != null ? v.text : void 0),
                                                  (l = this.findOrCreateCachedChildView(g.TextView, this.block.text, {
                                                      textConfig: r,
                                                  })),
                                                  c.push.apply(c, l.getNodes()),
                                                  this.shouldAddExtraNewlineElement() && c.push(y('br'))),
                                            this.attributes.length)
                                        )
                                            return c
                                        for (
                                            t = g.config.blockAttributes.default.tagName,
                                                this.block.isRTL() && (d = { dir: 'rtl' }),
                                                u = y({ tagName: t, attributes: d }),
                                                s = 0,
                                                n = c.length;
                                            n > s;
                                            s++
                                        )
                                            (p = c[s]), u.appendChild(p)
                                        return [u]
                                    }),
                                    (a.prototype.createContainerElement = function (d) {
                                        var i, u, s, n, p
                                        return (
                                            (i = this.attributes[d]),
                                            (p = b(i).tagName),
                                            d === 0 && this.block.isRTL() && (u = { dir: 'rtl' }),
                                            i === 'attachmentGallery' &&
                                                ((n = this.block.getBlockBreakPosition()),
                                                (s = x.attachmentGallery + ' ' + x.attachmentGallery + '--' + n)),
                                            y({ tagName: p, className: s, attributes: u })
                                        )
                                    }),
                                    (a.prototype.shouldAddExtraNewlineElement = function () {
                                        return /\n\n$/.test(this.block.toString())
                                    }),
                                    a
                                )
                            })(g.ObjectView))
                    }.call(this),
                    function () {
                        var x,
                            b,
                            y = function (o, e) {
                                function a() {
                                    this.constructor = o
                                }
                                for (var d in e) h.call(e, d) && (o[d] = e[d])
                                return (
                                    (a.prototype = e.prototype), (o.prototype = new a()), (o.__super__ = e.prototype), o
                                )
                            },
                            h = {}.hasOwnProperty
                        ;(x = g.defer),
                            (b = g.makeElement),
                            (g.DocumentView = (function (o) {
                                function e() {
                                    e.__super__.constructor.apply(this, arguments),
                                        (this.element = this.options.element),
                                        (this.elementStore = new g.ElementStore()),
                                        this.setDocument(this.object)
                                }
                                var a, d, i
                                return (
                                    y(e, o),
                                    (e.render = function (u) {
                                        var s, n
                                        return (
                                            (s = b('div')), (n = new this(u, { element: s })), n.render(), n.sync(), s
                                        )
                                    }),
                                    (e.prototype.setDocument = function (u) {
                                        return u.isEqualTo(this.document) ? void 0 : (this.document = this.object = u)
                                    }),
                                    (e.prototype.render = function () {
                                        var u, s, n, p, c, v, t
                                        if (
                                            ((this.childViews = []),
                                            (this.shadowElement = b('div')),
                                            !this.document.isEmpty())
                                        ) {
                                            for (
                                                c = g.ObjectGroup.groupObjects(this.document.getBlocks(), {
                                                    asTree: !0,
                                                }),
                                                    v = [],
                                                    u = 0,
                                                    s = c.length;
                                                s > u;
                                                u++
                                            )
                                                (p = c[u]),
                                                    (t = this.findOrCreateCachedChildView(g.BlockView, p)),
                                                    v.push(
                                                        function () {
                                                            var r, l, A, f
                                                            for (
                                                                A = t.getNodes(), f = [], r = 0, l = A.length;
                                                                l > r;
                                                                r++
                                                            )
                                                                (n = A[r]), f.push(this.shadowElement.appendChild(n))
                                                            return f
                                                        }.call(this),
                                                    )
                                            return v
                                        }
                                    }),
                                    (e.prototype.isSynced = function () {
                                        return a(this.shadowElement, this.element)
                                    }),
                                    (e.prototype.sync = function () {
                                        var u
                                        for (u = this.createDocumentFragmentForSync(); this.element.lastChild; )
                                            this.element.removeChild(this.element.lastChild)
                                        return this.element.appendChild(u), this.didSync()
                                    }),
                                    (e.prototype.didSync = function () {
                                        return (
                                            this.elementStore.reset(d(this.element)),
                                            x(
                                                (function (u) {
                                                    return function () {
                                                        return u.garbageCollectCachedViews()
                                                    }
                                                })(this),
                                            )
                                        )
                                    }),
                                    (e.prototype.createDocumentFragmentForSync = function () {
                                        var u, s, n, p, c, v, t, r, l, A
                                        for (
                                            s = document.createDocumentFragment(),
                                                r = this.shadowElement.childNodes,
                                                n = 0,
                                                c = r.length;
                                            c > n;
                                            n++
                                        )
                                            (t = r[n]), s.appendChild(t.cloneNode(!0))
                                        for (l = d(s), p = 0, v = l.length; v > p; p++)
                                            (u = l[p]),
                                                (A = this.elementStore.remove(u)) && u.parentNode.replaceChild(A, u)
                                        return s
                                    }),
                                    (d = function (u) {
                                        return u.querySelectorAll('[data-trix-store-key]')
                                    }),
                                    (a = function (u, s) {
                                        return i(u.innerHTML) === i(s.innerHTML)
                                    }),
                                    (i = function (u) {
                                        return u.replace(/&nbsp;/g, ' ')
                                    }),
                                    e
                                )
                            })(g.ObjectView))
                    }.call(this),
                    function () {
                        var x,
                            b,
                            y,
                            h,
                            o,
                            e = function (i, u) {
                                return function () {
                                    return i.apply(u, arguments)
                                }
                            },
                            a = function (i, u) {
                                function s() {
                                    this.constructor = i
                                }
                                for (var n in u) d.call(u, n) && (i[n] = u[n])
                                return (
                                    (s.prototype = u.prototype), (i.prototype = new s()), (i.__super__ = u.prototype), i
                                )
                            },
                            d = {}.hasOwnProperty
                        ;(y = g.findClosestElementFromNode),
                            (h = g.handleEvent),
                            (o = g.innerElementIsActive),
                            (b = g.defer),
                            (x = g.AttachmentView.attachmentSelector),
                            (g.CompositionController = (function (i) {
                                function u(s, n) {
                                    ;(this.element = s),
                                        (this.composition = n),
                                        (this.didClickAttachment = e(this.didClickAttachment, this)),
                                        (this.didBlur = e(this.didBlur, this)),
                                        (this.didFocus = e(this.didFocus, this)),
                                        (this.documentView = new g.DocumentView(this.composition.document, {
                                            element: this.element,
                                        })),
                                        h('focus', { onElement: this.element, withCallback: this.didFocus }),
                                        h('blur', { onElement: this.element, withCallback: this.didBlur }),
                                        h('click', {
                                            onElement: this.element,
                                            matchingSelector: 'a[contenteditable=false]',
                                            preventDefault: !0,
                                        }),
                                        h('mousedown', {
                                            onElement: this.element,
                                            matchingSelector: x,
                                            withCallback: this.didClickAttachment,
                                        }),
                                        h('click', {
                                            onElement: this.element,
                                            matchingSelector: 'a' + x,
                                            preventDefault: !0,
                                        })
                                }
                                return (
                                    a(u, i),
                                    (u.prototype.didFocus = function () {
                                        var s, n, p
                                        return (
                                            (s = (function (c) {
                                                return function () {
                                                    var v
                                                    return c.focused
                                                        ? void 0
                                                        : ((c.focused = !0),
                                                          (v = c.delegate) != null &&
                                                          typeof v.compositionControllerDidFocus == 'function'
                                                              ? v.compositionControllerDidFocus()
                                                              : void 0)
                                                }
                                            })(this)),
                                            (n = (p = this.blurPromise) != null ? p.then(s) : void 0) != null ? n : s()
                                        )
                                    }),
                                    (u.prototype.didBlur = function () {
                                        return (this.blurPromise = new Promise(
                                            (function (s) {
                                                return function (n) {
                                                    return b(function () {
                                                        var p
                                                        return (
                                                            o(s.element) ||
                                                                ((s.focused = null),
                                                                (p = s.delegate) != null &&
                                                                    typeof p.compositionControllerDidBlur ==
                                                                        'function' &&
                                                                    p.compositionControllerDidBlur()),
                                                            (s.blurPromise = null),
                                                            n()
                                                        )
                                                    })
                                                }
                                            })(this),
                                        ))
                                    }),
                                    (u.prototype.didClickAttachment = function (s, n) {
                                        var p, c, v
                                        return (
                                            (p = this.findAttachmentForElement(n)),
                                            (c = y(s.target, { matchingSelector: 'figcaption' }) != null),
                                            (v = this.delegate) != null &&
                                            typeof v.compositionControllerDidSelectAttachment == 'function'
                                                ? v.compositionControllerDidSelectAttachment(p, { editCaption: c })
                                                : void 0
                                        )
                                    }),
                                    (u.prototype.getSerializableElement = function () {
                                        return this.isEditingAttachment()
                                            ? this.documentView.shadowElement
                                            : this.element
                                    }),
                                    (u.prototype.render = function () {
                                        var s, n, p
                                        return (
                                            this.revision !== this.composition.revision &&
                                                (this.documentView.setDocument(this.composition.document),
                                                this.documentView.render(),
                                                (this.revision = this.composition.revision)),
                                            this.canSyncDocumentView() &&
                                                !this.documentView.isSynced() &&
                                                ((s = this.delegate) != null &&
                                                    typeof s.compositionControllerWillSyncDocumentView == 'function' &&
                                                    s.compositionControllerWillSyncDocumentView(),
                                                this.documentView.sync(),
                                                (n = this.delegate) != null &&
                                                    typeof n.compositionControllerDidSyncDocumentView == 'function' &&
                                                    n.compositionControllerDidSyncDocumentView()),
                                            (p = this.delegate) != null &&
                                            typeof p.compositionControllerDidRender == 'function'
                                                ? p.compositionControllerDidRender()
                                                : void 0
                                        )
                                    }),
                                    (u.prototype.rerenderViewForObject = function (s) {
                                        return this.invalidateViewForObject(s), this.render()
                                    }),
                                    (u.prototype.invalidateViewForObject = function (s) {
                                        return this.documentView.invalidateViewForObject(s)
                                    }),
                                    (u.prototype.isViewCachingEnabled = function () {
                                        return this.documentView.isViewCachingEnabled()
                                    }),
                                    (u.prototype.enableViewCaching = function () {
                                        return this.documentView.enableViewCaching()
                                    }),
                                    (u.prototype.disableViewCaching = function () {
                                        return this.documentView.disableViewCaching()
                                    }),
                                    (u.prototype.refreshViewCache = function () {
                                        return this.documentView.garbageCollectCachedViews()
                                    }),
                                    (u.prototype.isEditingAttachment = function () {
                                        return this.attachmentEditor != null
                                    }),
                                    (u.prototype.installAttachmentEditorForAttachment = function (s, n) {
                                        var p, c, v
                                        if (
                                            ((v = this.attachmentEditor) != null ? v.attachment : void 0) !== s &&
                                            (c = this.documentView.findElementForObject(s))
                                        )
                                            return (
                                                this.uninstallAttachmentEditor(),
                                                (p = this.composition.document.getAttachmentPieceForAttachment(s)),
                                                (this.attachmentEditor = new g.AttachmentEditorController(
                                                    p,
                                                    c,
                                                    this.element,
                                                    n,
                                                )),
                                                (this.attachmentEditor.delegate = this)
                                            )
                                    }),
                                    (u.prototype.uninstallAttachmentEditor = function () {
                                        var s
                                        return (s = this.attachmentEditor) != null ? s.uninstall() : void 0
                                    }),
                                    (u.prototype.didUninstallAttachmentEditor = function () {
                                        return (this.attachmentEditor = null), this.render()
                                    }),
                                    (u.prototype.attachmentEditorDidRequestUpdatingAttributesForAttachment = function (
                                        s,
                                        n,
                                    ) {
                                        var p
                                        return (
                                            (p = this.delegate) != null &&
                                                typeof p.compositionControllerWillUpdateAttachment == 'function' &&
                                                p.compositionControllerWillUpdateAttachment(n),
                                            this.composition.updateAttributesForAttachment(s, n)
                                        )
                                    }),
                                    (u.prototype.attachmentEditorDidRequestRemovingAttributeForAttachment = function (
                                        s,
                                        n,
                                    ) {
                                        var p
                                        return (
                                            (p = this.delegate) != null &&
                                                typeof p.compositionControllerWillUpdateAttachment == 'function' &&
                                                p.compositionControllerWillUpdateAttachment(n),
                                            this.composition.removeAttributeForAttachment(s, n)
                                        )
                                    }),
                                    (u.prototype.attachmentEditorDidRequestRemovalOfAttachment = function (s) {
                                        var n
                                        return (n = this.delegate) != null &&
                                            typeof n.compositionControllerDidRequestRemovalOfAttachment == 'function'
                                            ? n.compositionControllerDidRequestRemovalOfAttachment(s)
                                            : void 0
                                    }),
                                    (u.prototype.attachmentEditorDidRequestDeselectingAttachment = function (s) {
                                        var n
                                        return (n = this.delegate) != null &&
                                            typeof n.compositionControllerDidRequestDeselectingAttachment == 'function'
                                            ? n.compositionControllerDidRequestDeselectingAttachment(s)
                                            : void 0
                                    }),
                                    (u.prototype.canSyncDocumentView = function () {
                                        return !this.isEditingAttachment()
                                    }),
                                    (u.prototype.findAttachmentForElement = function (s) {
                                        return this.composition.document.getAttachmentById(
                                            parseInt(s.dataset.trixId, 10),
                                        )
                                    }),
                                    u
                                )
                            })(g.BasicObject))
                    }.call(this),
                    function () {
                        var x,
                            b,
                            y,
                            h = function (a, d) {
                                return function () {
                                    return a.apply(d, arguments)
                                }
                            },
                            o = function (a, d) {
                                function i() {
                                    this.constructor = a
                                }
                                for (var u in d) e.call(d, u) && (a[u] = d[u])
                                return (
                                    (i.prototype = d.prototype), (a.prototype = new i()), (a.__super__ = d.prototype), a
                                )
                            },
                            e = {}.hasOwnProperty
                        ;(b = g.handleEvent),
                            (y = g.triggerEvent),
                            (x = g.findClosestElementFromNode),
                            (g.ToolbarController = (function (a) {
                                function d(f) {
                                    ;(this.element = f),
                                        (this.didKeyDownDialogInput = h(this.didKeyDownDialogInput, this)),
                                        (this.didClickDialogButton = h(this.didClickDialogButton, this)),
                                        (this.didClickAttributeButton = h(this.didClickAttributeButton, this)),
                                        (this.didClickActionButton = h(this.didClickActionButton, this)),
                                        (this.attributes = {}),
                                        (this.actions = {}),
                                        this.resetDialogInputs(),
                                        b('mousedown', {
                                            onElement: this.element,
                                            matchingSelector: i,
                                            withCallback: this.didClickActionButton,
                                        }),
                                        b('mousedown', {
                                            onElement: this.element,
                                            matchingSelector: s,
                                            withCallback: this.didClickAttributeButton,
                                        }),
                                        b('click', {
                                            onElement: this.element,
                                            matchingSelector: A,
                                            preventDefault: !0,
                                        }),
                                        b('click', {
                                            onElement: this.element,
                                            matchingSelector: n,
                                            withCallback: this.didClickDialogButton,
                                        }),
                                        b('keydown', {
                                            onElement: this.element,
                                            matchingSelector: p,
                                            withCallback: this.didKeyDownDialogInput,
                                        })
                                }
                                var i, u, s, n, p, c, v, t, r, l, A
                                return (
                                    o(d, a),
                                    (s = '[data-trix-attribute]'),
                                    (i = '[data-trix-action]'),
                                    (A = s + ', ' + i),
                                    (c = '[data-trix-dialog]'),
                                    (u = c + '[data-trix-active]'),
                                    (n = c + ' [data-trix-method]'),
                                    (p = c + ' [data-trix-input]'),
                                    (d.prototype.didClickActionButton = function (f, m) {
                                        var C, S, L
                                        return (
                                            (S = this.delegate) != null && S.toolbarDidClickButton(),
                                            f.preventDefault(),
                                            (C = v(m)),
                                            this.getDialog(C)
                                                ? this.toggleDialog(C)
                                                : (L = this.delegate) != null
                                                  ? L.toolbarDidInvokeAction(C)
                                                  : void 0
                                        )
                                    }),
                                    (d.prototype.didClickAttributeButton = function (f, m) {
                                        var C, S, L
                                        return (
                                            (S = this.delegate) != null && S.toolbarDidClickButton(),
                                            f.preventDefault(),
                                            (C = t(m)),
                                            this.getDialog(C)
                                                ? this.toggleDialog(C)
                                                : (L = this.delegate) != null && L.toolbarDidToggleAttribute(C),
                                            this.refreshAttributeButtons()
                                        )
                                    }),
                                    (d.prototype.didClickDialogButton = function (f, m) {
                                        var C, S
                                        return (
                                            (C = x(m, { matchingSelector: c })),
                                            (S = m.getAttribute('data-trix-method')),
                                            this[S].call(this, C)
                                        )
                                    }),
                                    (d.prototype.didKeyDownDialogInput = function (f, m) {
                                        var C, S
                                        return (
                                            f.keyCode === 13 &&
                                                (f.preventDefault(),
                                                (C = m.getAttribute('name')),
                                                (S = this.getDialog(C)),
                                                this.setAttribute(S)),
                                            f.keyCode === 27 ? (f.preventDefault(), this.hideDialog()) : void 0
                                        )
                                    }),
                                    (d.prototype.updateActions = function (f) {
                                        return (this.actions = f), this.refreshActionButtons()
                                    }),
                                    (d.prototype.refreshActionButtons = function () {
                                        return this.eachActionButton(
                                            (function (f) {
                                                return function (m, C) {
                                                    return (m.disabled = f.actions[C] === !1)
                                                }
                                            })(this),
                                        )
                                    }),
                                    (d.prototype.eachActionButton = function (f) {
                                        var m, C, S, L, O
                                        for (
                                            L = this.element.querySelectorAll(i), O = [], C = 0, S = L.length;
                                            S > C;
                                            C++
                                        )
                                            (m = L[C]), O.push(f(m, v(m)))
                                        return O
                                    }),
                                    (d.prototype.updateAttributes = function (f) {
                                        return (this.attributes = f), this.refreshAttributeButtons()
                                    }),
                                    (d.prototype.refreshAttributeButtons = function () {
                                        return this.eachAttributeButton(
                                            (function (f) {
                                                return function (m, C) {
                                                    return (
                                                        (m.disabled = f.attributes[C] === !1),
                                                        f.attributes[C] || f.dialogIsVisible(C)
                                                            ? (m.setAttribute('data-trix-active', ''),
                                                              m.classList.add('trix-active'))
                                                            : (m.removeAttribute('data-trix-active'),
                                                              m.classList.remove('trix-active'))
                                                    )
                                                }
                                            })(this),
                                        )
                                    }),
                                    (d.prototype.eachAttributeButton = function (f) {
                                        var m, C, S, L, O
                                        for (
                                            L = this.element.querySelectorAll(s), O = [], C = 0, S = L.length;
                                            S > C;
                                            C++
                                        )
                                            (m = L[C]), O.push(f(m, t(m)))
                                        return O
                                    }),
                                    (d.prototype.applyKeyboardCommand = function (f) {
                                        var m, C, S, L, O, D, R
                                        for (
                                            O = JSON.stringify(f.sort()),
                                                R = this.element.querySelectorAll('[data-trix-key]'),
                                                L = 0,
                                                D = R.length;
                                            D > L;
                                            L++
                                        )
                                            if (
                                                ((m = R[L]),
                                                (S = m.getAttribute('data-trix-key').split('+')),
                                                (C = JSON.stringify(S.sort())),
                                                C === O)
                                            )
                                                return y('mousedown', { onElement: m }), !0
                                        return !1
                                    }),
                                    (d.prototype.dialogIsVisible = function (f) {
                                        var m
                                        return (m = this.getDialog(f)) ? m.hasAttribute('data-trix-active') : void 0
                                    }),
                                    (d.prototype.toggleDialog = function (f) {
                                        return this.dialogIsVisible(f) ? this.hideDialog() : this.showDialog(f)
                                    }),
                                    (d.prototype.showDialog = function (f) {
                                        var m, C, S, L, O, D, R, E, w, k
                                        for (
                                            this.hideDialog(),
                                                (R = this.delegate) != null && R.toolbarWillShowDialog(),
                                                S = this.getDialog(f),
                                                S.setAttribute('data-trix-active', ''),
                                                S.classList.add('trix-active'),
                                                E = S.querySelectorAll('input[disabled]'),
                                                L = 0,
                                                D = E.length;
                                            D > L;
                                            L++
                                        )
                                            (C = E[L]), C.removeAttribute('disabled')
                                        return (
                                            (m = t(S)) &&
                                                (O = l(S, f)) &&
                                                ((O.value = (w = this.attributes[m]) != null ? w : ''), O.select()),
                                            (k = this.delegate) != null ? k.toolbarDidShowDialog(f) : void 0
                                        )
                                    }),
                                    (d.prototype.setAttribute = function (f) {
                                        var m, C, S
                                        return (
                                            (m = t(f)),
                                            (C = l(f, m)),
                                            C.willValidate && !C.checkValidity()
                                                ? (C.setAttribute('data-trix-validate', ''),
                                                  C.classList.add('trix-validate'),
                                                  C.focus())
                                                : ((S = this.delegate) != null &&
                                                      S.toolbarDidUpdateAttribute(m, C.value),
                                                  this.hideDialog())
                                        )
                                    }),
                                    (d.prototype.removeAttribute = function (f) {
                                        var m, C
                                        return (
                                            (m = t(f)),
                                            (C = this.delegate) != null && C.toolbarDidRemoveAttribute(m),
                                            this.hideDialog()
                                        )
                                    }),
                                    (d.prototype.hideDialog = function () {
                                        var f, m
                                        return (f = this.element.querySelector(u))
                                            ? (f.removeAttribute('data-trix-active'),
                                              f.classList.remove('trix-active'),
                                              this.resetDialogInputs(),
                                              (m = this.delegate) != null ? m.toolbarDidHideDialog(r(f)) : void 0)
                                            : void 0
                                    }),
                                    (d.prototype.resetDialogInputs = function () {
                                        var f, m, C, S, L
                                        for (
                                            S = this.element.querySelectorAll(p), L = [], f = 0, C = S.length;
                                            C > f;
                                            f++
                                        )
                                            (m = S[f]),
                                                m.setAttribute('disabled', 'disabled'),
                                                m.removeAttribute('data-trix-validate'),
                                                L.push(m.classList.remove('trix-validate'))
                                        return L
                                    }),
                                    (d.prototype.getDialog = function (f) {
                                        return this.element.querySelector('[data-trix-dialog=' + f + ']')
                                    }),
                                    (l = function (f, m) {
                                        return (
                                            m == null && (m = t(f)),
                                            f.querySelector("[data-trix-input][name='" + m + "']")
                                        )
                                    }),
                                    (v = function (f) {
                                        return f.getAttribute('data-trix-action')
                                    }),
                                    (t = function (f) {
                                        var m
                                        return (m = f.getAttribute('data-trix-attribute')) != null
                                            ? m
                                            : f.getAttribute('data-trix-dialog-attribute')
                                    }),
                                    (r = function (f) {
                                        return f.getAttribute('data-trix-dialog')
                                    }),
                                    d
                                )
                            })(g.BasicObject))
                    }.call(this),
                    function () {
                        var x = function (y, h) {
                                function o() {
                                    this.constructor = y
                                }
                                for (var e in h) b.call(h, e) && (y[e] = h[e])
                                return (
                                    (o.prototype = h.prototype), (y.prototype = new o()), (y.__super__ = h.prototype), y
                                )
                            },
                            b = {}.hasOwnProperty
                        g.ImagePreloadOperation = (function (y) {
                            function h(o) {
                                this.url = o
                            }
                            return (
                                x(h, y),
                                (h.prototype.perform = function (o) {
                                    var e
                                    return (
                                        (e = new Image()),
                                        (e.onload = (function (a) {
                                            return function () {
                                                return (
                                                    (e.width = a.width = e.naturalWidth),
                                                    (e.height = a.height = e.naturalHeight),
                                                    o(!0, e)
                                                )
                                            }
                                        })(this)),
                                        (e.onerror = function () {
                                            return o(!1)
                                        }),
                                        (e.src = this.url)
                                    )
                                }),
                                h
                            )
                        })(g.Operation)
                    }.call(this),
                    function () {
                        var x = function (h, o) {
                                return function () {
                                    return h.apply(o, arguments)
                                }
                            },
                            b = function (h, o) {
                                function e() {
                                    this.constructor = h
                                }
                                for (var a in o) y.call(o, a) && (h[a] = o[a])
                                return (
                                    (e.prototype = o.prototype), (h.prototype = new e()), (h.__super__ = o.prototype), h
                                )
                            },
                            y = {}.hasOwnProperty
                        g.Attachment = (function (h) {
                            function o(e) {
                                e == null && (e = {}),
                                    (this.releaseFile = x(this.releaseFile, this)),
                                    o.__super__.constructor.apply(this, arguments),
                                    (this.attributes = g.Hash.box(e)),
                                    this.didChangeAttributes()
                            }
                            return (
                                b(o, h),
                                (o.previewablePattern = /^image(\/(gif|png|jpe?g)|$)/),
                                (o.attachmentForFile = function (e) {
                                    var a, d
                                    return (d = this.attributesForFile(e)), (a = new this(d)), a.setFile(e), a
                                }),
                                (o.attributesForFile = function (e) {
                                    return new g.Hash({ filename: e.name, filesize: e.size, contentType: e.type })
                                }),
                                (o.fromJSON = function (e) {
                                    return new this(e)
                                }),
                                (o.prototype.getAttribute = function (e) {
                                    return this.attributes.get(e)
                                }),
                                (o.prototype.hasAttribute = function (e) {
                                    return this.attributes.has(e)
                                }),
                                (o.prototype.getAttributes = function () {
                                    return this.attributes.toObject()
                                }),
                                (o.prototype.setAttributes = function (e) {
                                    var a, d, i
                                    return (
                                        e == null && (e = {}),
                                        (a = this.attributes.merge(e)),
                                        this.attributes.isEqualTo(a)
                                            ? void 0
                                            : ((this.attributes = a),
                                              this.didChangeAttributes(),
                                              (d = this.previewDelegate) != null &&
                                                  typeof d.attachmentDidChangeAttributes == 'function' &&
                                                  d.attachmentDidChangeAttributes(this),
                                              (i = this.delegate) != null &&
                                              typeof i.attachmentDidChangeAttributes == 'function'
                                                  ? i.attachmentDidChangeAttributes(this)
                                                  : void 0)
                                    )
                                }),
                                (o.prototype.didChangeAttributes = function () {
                                    return this.isPreviewable() ? this.preloadURL() : void 0
                                }),
                                (o.prototype.isPending = function () {
                                    return this.file != null && !(this.getURL() || this.getHref())
                                }),
                                (o.prototype.isPreviewable = function () {
                                    return this.attributes.has('previewable')
                                        ? this.attributes.get('previewable')
                                        : this.constructor.previewablePattern.test(this.getContentType())
                                }),
                                (o.prototype.getType = function () {
                                    return this.hasContent() ? 'content' : this.isPreviewable() ? 'preview' : 'file'
                                }),
                                (o.prototype.getURL = function () {
                                    return this.attributes.get('url')
                                }),
                                (o.prototype.getHref = function () {
                                    return this.attributes.get('href')
                                }),
                                (o.prototype.getFilename = function () {
                                    var e
                                    return (e = this.attributes.get('filename')) != null ? e : ''
                                }),
                                (o.prototype.getFilesize = function () {
                                    return this.attributes.get('filesize')
                                }),
                                (o.prototype.getFormattedFilesize = function () {
                                    var e
                                    return (
                                        (e = this.attributes.get('filesize')),
                                        typeof e == 'number' ? g.config.fileSize.formatter(e) : ''
                                    )
                                }),
                                (o.prototype.getExtension = function () {
                                    var e
                                    return (e = this.getFilename().match(/\.(\w+)$/)) != null
                                        ? e[1].toLowerCase()
                                        : void 0
                                }),
                                (o.prototype.getContentType = function () {
                                    return this.attributes.get('contentType')
                                }),
                                (o.prototype.hasContent = function () {
                                    return this.attributes.has('content')
                                }),
                                (o.prototype.getContent = function () {
                                    return this.attributes.get('content')
                                }),
                                (o.prototype.getWidth = function () {
                                    return this.attributes.get('width')
                                }),
                                (o.prototype.getHeight = function () {
                                    return this.attributes.get('height')
                                }),
                                (o.prototype.getFile = function () {
                                    return this.file
                                }),
                                (o.prototype.setFile = function (e) {
                                    return (this.file = e), this.isPreviewable() ? this.preloadFile() : void 0
                                }),
                                (o.prototype.releaseFile = function () {
                                    return this.releasePreloadedFile(), (this.file = null)
                                }),
                                (o.prototype.getUploadProgress = function () {
                                    var e
                                    return (e = this.uploadProgress) != null ? e : 0
                                }),
                                (o.prototype.setUploadProgress = function (e) {
                                    var a
                                    return this.uploadProgress !== e
                                        ? ((this.uploadProgress = e),
                                          (a = this.uploadProgressDelegate) != null &&
                                          typeof a.attachmentDidChangeUploadProgress == 'function'
                                              ? a.attachmentDidChangeUploadProgress(this)
                                              : void 0)
                                        : void 0
                                }),
                                (o.prototype.toJSON = function () {
                                    return this.getAttributes()
                                }),
                                (o.prototype.getCacheKey = function () {
                                    return [
                                        o.__super__.getCacheKey.apply(this, arguments),
                                        this.attributes.getCacheKey(),
                                        this.getPreviewURL(),
                                    ].join('/')
                                }),
                                (o.prototype.getPreviewURL = function () {
                                    return this.previewURL || this.preloadingURL
                                }),
                                (o.prototype.setPreviewURL = function (e) {
                                    var a, d
                                    return e !== this.getPreviewURL()
                                        ? ((this.previewURL = e),
                                          (a = this.previewDelegate) != null &&
                                              typeof a.attachmentDidChangeAttributes == 'function' &&
                                              a.attachmentDidChangeAttributes(this),
                                          (d = this.delegate) != null &&
                                          typeof d.attachmentDidChangePreviewURL == 'function'
                                              ? d.attachmentDidChangePreviewURL(this)
                                              : void 0)
                                        : void 0
                                }),
                                (o.prototype.preloadURL = function () {
                                    return this.preload(this.getURL(), this.releaseFile)
                                }),
                                (o.prototype.preloadFile = function () {
                                    return this.file
                                        ? ((this.fileObjectURL = URL.createObjectURL(this.file)),
                                          this.preload(this.fileObjectURL))
                                        : void 0
                                }),
                                (o.prototype.releasePreloadedFile = function () {
                                    return this.fileObjectURL
                                        ? (URL.revokeObjectURL(this.fileObjectURL), (this.fileObjectURL = null))
                                        : void 0
                                }),
                                (o.prototype.preload = function (e, a) {
                                    var d
                                    return e && e !== this.getPreviewURL()
                                        ? ((this.preloadingURL = e),
                                          (d = new g.ImagePreloadOperation(e)),
                                          d
                                              .then(
                                                  (function (i) {
                                                      return function (u) {
                                                          var s, n
                                                          return (
                                                              (n = u.width),
                                                              (s = u.height),
                                                              (i.getWidth() && i.getHeight()) ||
                                                                  i.setAttributes({ width: n, height: s }),
                                                              (i.preloadingURL = null),
                                                              i.setPreviewURL(e),
                                                              typeof a == 'function' ? a() : void 0
                                                          )
                                                      }
                                                  })(this),
                                              )
                                              .catch(
                                                  (function (i) {
                                                      return function () {
                                                          return (
                                                              (i.preloadingURL = null),
                                                              typeof a == 'function' ? a() : void 0
                                                          )
                                                      }
                                                  })(this),
                                              ))
                                        : void 0
                                }),
                                o
                            )
                        })(g.Object)
                    }.call(this),
                    function () {
                        var x = function (y, h) {
                                function o() {
                                    this.constructor = y
                                }
                                for (var e in h) b.call(h, e) && (y[e] = h[e])
                                return (
                                    (o.prototype = h.prototype), (y.prototype = new o()), (y.__super__ = h.prototype), y
                                )
                            },
                            b = {}.hasOwnProperty
                        g.Piece = (function (y) {
                            function h(o, e) {
                                e == null && (e = {}),
                                    h.__super__.constructor.apply(this, arguments),
                                    (this.attributes = g.Hash.box(e))
                            }
                            return (
                                x(h, y),
                                (h.types = {}),
                                (h.registerType = function (o, e) {
                                    return (e.type = o), (this.types[o] = e)
                                }),
                                (h.fromJSON = function (o) {
                                    var e
                                    return (e = this.types[o.type]) ? e.fromJSON(o) : void 0
                                }),
                                (h.prototype.copyWithAttributes = function (o) {
                                    return new this.constructor(this.getValue(), o)
                                }),
                                (h.prototype.copyWithAdditionalAttributes = function (o) {
                                    return this.copyWithAttributes(this.attributes.merge(o))
                                }),
                                (h.prototype.copyWithoutAttribute = function (o) {
                                    return this.copyWithAttributes(this.attributes.remove(o))
                                }),
                                (h.prototype.copy = function () {
                                    return this.copyWithAttributes(this.attributes)
                                }),
                                (h.prototype.getAttribute = function (o) {
                                    return this.attributes.get(o)
                                }),
                                (h.prototype.getAttributesHash = function () {
                                    return this.attributes
                                }),
                                (h.prototype.getAttributes = function () {
                                    return this.attributes.toObject()
                                }),
                                (h.prototype.getCommonAttributes = function () {
                                    var o, e, a
                                    return (a = pieceList.getPieceAtIndex(0))
                                        ? ((o = a.attributes),
                                          (e = o.getKeys()),
                                          pieceList.eachPiece(function (d) {
                                              return (e = o.getKeysCommonToHash(d.attributes)), (o = o.slice(e))
                                          }),
                                          o.toObject())
                                        : {}
                                }),
                                (h.prototype.hasAttribute = function (o) {
                                    return this.attributes.has(o)
                                }),
                                (h.prototype.hasSameStringValueAsPiece = function (o) {
                                    return o != null && this.toString() === o.toString()
                                }),
                                (h.prototype.hasSameAttributesAsPiece = function (o) {
                                    return (
                                        o != null &&
                                        (this.attributes === o.attributes || this.attributes.isEqualTo(o.attributes))
                                    )
                                }),
                                (h.prototype.isBlockBreak = function () {
                                    return !1
                                }),
                                (h.prototype.isEqualTo = function (o) {
                                    return (
                                        h.__super__.isEqualTo.apply(this, arguments) ||
                                        (this.hasSameConstructorAs(o) &&
                                            this.hasSameStringValueAsPiece(o) &&
                                            this.hasSameAttributesAsPiece(o))
                                    )
                                }),
                                (h.prototype.isEmpty = function () {
                                    return this.length === 0
                                }),
                                (h.prototype.isSerializable = function () {
                                    return !0
                                }),
                                (h.prototype.toJSON = function () {
                                    return { type: this.constructor.type, attributes: this.getAttributes() }
                                }),
                                (h.prototype.contentsForInspection = function () {
                                    return { type: this.constructor.type, attributes: this.attributes.inspect() }
                                }),
                                (h.prototype.canBeGrouped = function () {
                                    return this.hasAttribute('href')
                                }),
                                (h.prototype.canBeGroupedWith = function (o) {
                                    return this.getAttribute('href') === o.getAttribute('href')
                                }),
                                (h.prototype.getLength = function () {
                                    return this.length
                                }),
                                (h.prototype.canBeConsolidatedWith = function () {
                                    return !1
                                }),
                                h
                            )
                        })(g.Object)
                    }.call(this),
                    function () {
                        var x = function (y, h) {
                                function o() {
                                    this.constructor = y
                                }
                                for (var e in h) b.call(h, e) && (y[e] = h[e])
                                return (
                                    (o.prototype = h.prototype), (y.prototype = new o()), (y.__super__ = h.prototype), y
                                )
                            },
                            b = {}.hasOwnProperty
                        g.Piece.registerType(
                            'attachment',
                            (g.AttachmentPiece = (function (y) {
                                function h(o) {
                                    ;(this.attachment = o),
                                        h.__super__.constructor.apply(this, arguments),
                                        (this.length = 1),
                                        this.ensureAttachmentExclusivelyHasAttribute('href'),
                                        this.attachment.hasContent() || this.removeProhibitedAttributes()
                                }
                                return (
                                    x(h, y),
                                    (h.fromJSON = function (o) {
                                        return new this(g.Attachment.fromJSON(o.attachment), o.attributes)
                                    }),
                                    (h.permittedAttributes = ['caption', 'presentation']),
                                    (h.prototype.ensureAttachmentExclusivelyHasAttribute = function (o) {
                                        return this.hasAttribute(o)
                                            ? (this.attachment.hasAttribute(o) ||
                                                  this.attachment.setAttributes(this.attributes.slice(o)),
                                              (this.attributes = this.attributes.remove(o)))
                                            : void 0
                                    }),
                                    (h.prototype.removeProhibitedAttributes = function () {
                                        var o
                                        return (
                                            (o = this.attributes.slice(this.constructor.permittedAttributes)),
                                            o.isEqualTo(this.attributes) ? void 0 : (this.attributes = o)
                                        )
                                    }),
                                    (h.prototype.getValue = function () {
                                        return this.attachment
                                    }),
                                    (h.prototype.isSerializable = function () {
                                        return !this.attachment.isPending()
                                    }),
                                    (h.prototype.getCaption = function () {
                                        var o
                                        return (o = this.attributes.get('caption')) != null ? o : ''
                                    }),
                                    (h.prototype.isEqualTo = function (o) {
                                        var e
                                        return (
                                            h.__super__.isEqualTo.apply(this, arguments) &&
                                            this.attachment.id ===
                                                (o != null && (e = o.attachment) != null ? e.id : void 0)
                                        )
                                    }),
                                    (h.prototype.toString = function () {
                                        return g.OBJECT_REPLACEMENT_CHARACTER
                                    }),
                                    (h.prototype.toJSON = function () {
                                        var o
                                        return (
                                            (o = h.__super__.toJSON.apply(this, arguments)),
                                            (o.attachment = this.attachment),
                                            o
                                        )
                                    }),
                                    (h.prototype.getCacheKey = function () {
                                        return [
                                            h.__super__.getCacheKey.apply(this, arguments),
                                            this.attachment.getCacheKey(),
                                        ].join('/')
                                    }),
                                    (h.prototype.toConsole = function () {
                                        return JSON.stringify(this.toString())
                                    }),
                                    h
                                )
                            })(g.Piece)),
                        )
                    }.call(this),
                    function () {
                        var x,
                            b = function (h, o) {
                                function e() {
                                    this.constructor = h
                                }
                                for (var a in o) y.call(o, a) && (h[a] = o[a])
                                return (
                                    (e.prototype = o.prototype), (h.prototype = new e()), (h.__super__ = o.prototype), h
                                )
                            },
                            y = {}.hasOwnProperty
                        ;(x = g.normalizeNewlines),
                            g.Piece.registerType(
                                'string',
                                (g.StringPiece = (function (h) {
                                    function o(e) {
                                        o.__super__.constructor.apply(this, arguments),
                                            (this.string = x(e)),
                                            (this.length = this.string.length)
                                    }
                                    return (
                                        b(o, h),
                                        (o.fromJSON = function (e) {
                                            return new this(e.string, e.attributes)
                                        }),
                                        (o.prototype.getValue = function () {
                                            return this.string
                                        }),
                                        (o.prototype.toString = function () {
                                            return this.string.toString()
                                        }),
                                        (o.prototype.isBlockBreak = function () {
                                            return (
                                                this.toString() ===
                                                    `
` && this.getAttribute('blockBreak') === !0
                                            )
                                        }),
                                        (o.prototype.toJSON = function () {
                                            var e
                                            return (
                                                (e = o.__super__.toJSON.apply(this, arguments)),
                                                (e.string = this.string),
                                                e
                                            )
                                        }),
                                        (o.prototype.canBeConsolidatedWith = function (e) {
                                            return (
                                                e != null &&
                                                this.hasSameConstructorAs(e) &&
                                                this.hasSameAttributesAsPiece(e)
                                            )
                                        }),
                                        (o.prototype.consolidateWith = function (e) {
                                            return new this.constructor(this.toString() + e.toString(), this.attributes)
                                        }),
                                        (o.prototype.splitAtOffset = function (e) {
                                            var a, d
                                            return (
                                                e === 0
                                                    ? ((a = null), (d = this))
                                                    : e === this.length
                                                      ? ((a = this), (d = null))
                                                      : ((a = new this.constructor(
                                                            this.string.slice(0, e),
                                                            this.attributes,
                                                        )),
                                                        (d = new this.constructor(
                                                            this.string.slice(e),
                                                            this.attributes,
                                                        ))),
                                                [a, d]
                                            )
                                        }),
                                        (o.prototype.toConsole = function () {
                                            var e
                                            return (
                                                (e = this.string),
                                                e.length > 15 && (e = e.slice(0, 14) + '\u2026'),
                                                JSON.stringify(e.toString())
                                            )
                                        }),
                                        o
                                    )
                                })(g.Piece)),
                            )
                    }.call(this),
                    function () {
                        var x,
                            b = function (o, e) {
                                function a() {
                                    this.constructor = o
                                }
                                for (var d in e) y.call(e, d) && (o[d] = e[d])
                                return (
                                    (a.prototype = e.prototype), (o.prototype = new a()), (o.__super__ = e.prototype), o
                                )
                            },
                            y = {}.hasOwnProperty,
                            h = [].slice
                        ;(x = g.spliceArray),
                            (g.SplittableList = (function (o) {
                                function e(u) {
                                    u == null && (u = []),
                                        e.__super__.constructor.apply(this, arguments),
                                        (this.objects = u.slice(0)),
                                        (this.length = this.objects.length)
                                }
                                var a, d, i
                                return (
                                    b(e, o),
                                    (e.box = function (u) {
                                        return u instanceof this ? u : new this(u)
                                    }),
                                    (e.prototype.indexOf = function (u) {
                                        return this.objects.indexOf(u)
                                    }),
                                    (e.prototype.splice = function () {
                                        var u
                                        return (
                                            (u = 1 <= arguments.length ? h.call(arguments, 0) : []),
                                            new this.constructor(x.apply(null, [this.objects].concat(h.call(u))))
                                        )
                                    }),
                                    (e.prototype.eachObject = function (u) {
                                        var s, n, p, c, v, t
                                        for (v = this.objects, t = [], n = s = 0, p = v.length; p > s; n = ++s)
                                            (c = v[n]), t.push(u(c, n))
                                        return t
                                    }),
                                    (e.prototype.insertObjectAtIndex = function (u, s) {
                                        return this.splice(s, 0, u)
                                    }),
                                    (e.prototype.insertSplittableListAtIndex = function (u, s) {
                                        return this.splice.apply(this, [s, 0].concat(h.call(u.objects)))
                                    }),
                                    (e.prototype.insertSplittableListAtPosition = function (u, s) {
                                        var n, p, c
                                        return (
                                            (c = this.splitObjectAtPosition(s)),
                                            (p = c[0]),
                                            (n = c[1]),
                                            new this.constructor(p).insertSplittableListAtIndex(u, n)
                                        )
                                    }),
                                    (e.prototype.editObjectAtIndex = function (u, s) {
                                        return this.replaceObjectAtIndex(s(this.objects[u]), u)
                                    }),
                                    (e.prototype.replaceObjectAtIndex = function (u, s) {
                                        return this.splice(s, 1, u)
                                    }),
                                    (e.prototype.removeObjectAtIndex = function (u) {
                                        return this.splice(u, 1)
                                    }),
                                    (e.prototype.getObjectAtIndex = function (u) {
                                        return this.objects[u]
                                    }),
                                    (e.prototype.getSplittableListInRange = function (u) {
                                        var s, n, p, c
                                        return (
                                            (p = this.splitObjectsAtRange(u)),
                                            (n = p[0]),
                                            (s = p[1]),
                                            (c = p[2]),
                                            new this.constructor(n.slice(s, c + 1))
                                        )
                                    }),
                                    (e.prototype.selectSplittableList = function (u) {
                                        var s, n
                                        return (
                                            (n = function () {
                                                var p, c, v, t
                                                for (v = this.objects, t = [], p = 0, c = v.length; c > p; p++)
                                                    (s = v[p]), u(s) && t.push(s)
                                                return t
                                            }.call(this)),
                                            new this.constructor(n)
                                        )
                                    }),
                                    (e.prototype.removeObjectsInRange = function (u) {
                                        var s, n, p, c
                                        return (
                                            (p = this.splitObjectsAtRange(u)),
                                            (n = p[0]),
                                            (s = p[1]),
                                            (c = p[2]),
                                            new this.constructor(n).splice(s, c - s + 1)
                                        )
                                    }),
                                    (e.prototype.transformObjectsInRange = function (u, s) {
                                        var n, p, c, v, t, r, l
                                        return (
                                            (t = this.splitObjectsAtRange(u)),
                                            (v = t[0]),
                                            (p = t[1]),
                                            (r = t[2]),
                                            (l = (function () {
                                                var A, f, m
                                                for (m = [], n = A = 0, f = v.length; f > A; n = ++A)
                                                    (c = v[n]), m.push(n >= p && r >= n ? s(c) : c)
                                                return m
                                            })()),
                                            new this.constructor(l)
                                        )
                                    }),
                                    (e.prototype.splitObjectsAtRange = function (u) {
                                        var s, n, p, c, v, t
                                        return (
                                            (c = this.splitObjectAtPosition(i(u))),
                                            (n = c[0]),
                                            (s = c[1]),
                                            (p = c[2]),
                                            (v = new this.constructor(n).splitObjectAtPosition(a(u) + p)),
                                            (n = v[0]),
                                            (t = v[1]),
                                            [n, s, t - 1]
                                        )
                                    }),
                                    (e.prototype.getObjectAtPosition = function (u) {
                                        var s, n, p
                                        return (
                                            (p = this.findIndexAndOffsetAtPosition(u)),
                                            (s = p.index),
                                            (n = p.offset),
                                            this.objects[s]
                                        )
                                    }),
                                    (e.prototype.splitObjectAtPosition = function (u) {
                                        var s, n, p, c, v, t, r, l, A, f
                                        return (
                                            (t = this.findIndexAndOffsetAtPosition(u)),
                                            (s = t.index),
                                            (v = t.offset),
                                            (c = this.objects.slice(0)),
                                            s != null
                                                ? v === 0
                                                    ? ((A = s), (f = 0))
                                                    : ((p = this.getObjectAtIndex(s)),
                                                      (r = p.splitAtOffset(v)),
                                                      (n = r[0]),
                                                      (l = r[1]),
                                                      c.splice(s, 1, n, l),
                                                      (A = s + 1),
                                                      (f = n.getLength() - v))
                                                : ((A = c.length), (f = 0)),
                                            [c, A, f]
                                        )
                                    }),
                                    (e.prototype.consolidate = function () {
                                        var u, s, n, p, c, v
                                        for (
                                            p = [], c = this.objects[0], v = this.objects.slice(1), u = 0, s = v.length;
                                            s > u;
                                            u++
                                        )
                                            (n = v[u]),
                                                typeof c.canBeConsolidatedWith == 'function' &&
                                                c.canBeConsolidatedWith(n)
                                                    ? (c = c.consolidateWith(n))
                                                    : (p.push(c), (c = n))
                                        return c != null && p.push(c), new this.constructor(p)
                                    }),
                                    (e.prototype.consolidateFromIndexToIndex = function (u, s) {
                                        var n, p, c
                                        return (
                                            (p = this.objects.slice(0)),
                                            (c = p.slice(u, s + 1)),
                                            (n = new this.constructor(c).consolidate().toArray()),
                                            this.splice.apply(this, [u, c.length].concat(h.call(n)))
                                        )
                                    }),
                                    (e.prototype.findIndexAndOffsetAtPosition = function (u) {
                                        var s, n, p, c, v, t, r
                                        for (s = 0, r = this.objects, p = n = 0, c = r.length; c > n; p = ++n) {
                                            if (((t = r[p]), (v = s + t.getLength()), u >= s && v > u))
                                                return { index: p, offset: u - s }
                                            s = v
                                        }
                                        return { index: null, offset: null }
                                    }),
                                    (e.prototype.findPositionAtIndexAndOffset = function (u, s) {
                                        var n, p, c, v, t, r
                                        for (t = 0, r = this.objects, n = p = 0, c = r.length; c > p; n = ++p)
                                            if (((v = r[n]), u > n)) t += v.getLength()
                                            else if (n === u) {
                                                t += s
                                                break
                                            }
                                        return t
                                    }),
                                    (e.prototype.getEndPosition = function () {
                                        var u, s
                                        return this.endPosition != null
                                            ? this.endPosition
                                            : (this.endPosition = function () {
                                                  var n, p, c
                                                  for (s = 0, c = this.objects, n = 0, p = c.length; p > n; n++)
                                                      (u = c[n]), (s += u.getLength())
                                                  return s
                                              }.call(this))
                                    }),
                                    (e.prototype.toString = function () {
                                        return this.objects.join('')
                                    }),
                                    (e.prototype.toArray = function () {
                                        return this.objects.slice(0)
                                    }),
                                    (e.prototype.toJSON = function () {
                                        return this.toArray()
                                    }),
                                    (e.prototype.isEqualTo = function (u) {
                                        return (
                                            e.__super__.isEqualTo.apply(this, arguments) || d(this.objects, u?.objects)
                                        )
                                    }),
                                    (d = function (u, s) {
                                        var n, p, c, v, t
                                        if ((s == null && (s = []), u.length !== s.length)) return !1
                                        for (t = !0, p = n = 0, c = u.length; c > n; p = ++n)
                                            (v = u[p]), t && !v.isEqualTo(s[p]) && (t = !1)
                                        return t
                                    }),
                                    (e.prototype.contentsForInspection = function () {
                                        var u
                                        return {
                                            objects:
                                                '[' +
                                                function () {
                                                    var s, n, p, c
                                                    for (p = this.objects, c = [], s = 0, n = p.length; n > s; s++)
                                                        (u = p[s]), c.push(u.inspect())
                                                    return c
                                                }
                                                    .call(this)
                                                    .join(', ') +
                                                ']',
                                        }
                                    }),
                                    (i = function (u) {
                                        return u[0]
                                    }),
                                    (a = function (u) {
                                        return u[1]
                                    }),
                                    e
                                )
                            })(g.Object))
                    }.call(this),
                    function () {
                        var x = function (y, h) {
                                function o() {
                                    this.constructor = y
                                }
                                for (var e in h) b.call(h, e) && (y[e] = h[e])
                                return (
                                    (o.prototype = h.prototype), (y.prototype = new o()), (y.__super__ = h.prototype), y
                                )
                            },
                            b = {}.hasOwnProperty
                        g.Text = (function (y) {
                            function h(o) {
                                var e
                                o == null && (o = []),
                                    h.__super__.constructor.apply(this, arguments),
                                    (this.pieceList = new g.SplittableList(
                                        (function () {
                                            var a, d, i
                                            for (i = [], a = 0, d = o.length; d > a; a++)
                                                (e = o[a]), e.isEmpty() || i.push(e)
                                            return i
                                        })(),
                                    ))
                            }
                            return (
                                x(h, y),
                                (h.textForAttachmentWithAttributes = function (o, e) {
                                    var a
                                    return (a = new g.AttachmentPiece(o, e)), new this([a])
                                }),
                                (h.textForStringWithAttributes = function (o, e) {
                                    var a
                                    return (a = new g.StringPiece(o, e)), new this([a])
                                }),
                                (h.fromJSON = function (o) {
                                    var e, a
                                    return (
                                        (a = (function () {
                                            var d, i, u
                                            for (u = [], d = 0, i = o.length; i > d; d++)
                                                (e = o[d]), u.push(g.Piece.fromJSON(e))
                                            return u
                                        })()),
                                        new this(a)
                                    )
                                }),
                                (h.prototype.copy = function () {
                                    return this.copyWithPieceList(this.pieceList)
                                }),
                                (h.prototype.copyWithPieceList = function (o) {
                                    return new this.constructor(o.consolidate().toArray())
                                }),
                                (h.prototype.copyUsingObjectMap = function (o) {
                                    var e, a
                                    return (
                                        (a = function () {
                                            var d, i, u, s, n
                                            for (u = this.getPieces(), n = [], d = 0, i = u.length; i > d; d++)
                                                (e = u[d]), n.push((s = o.find(e)) != null ? s : e)
                                            return n
                                        }.call(this)),
                                        new this.constructor(a)
                                    )
                                }),
                                (h.prototype.appendText = function (o) {
                                    return this.insertTextAtPosition(o, this.getLength())
                                }),
                                (h.prototype.insertTextAtPosition = function (o, e) {
                                    return this.copyWithPieceList(
                                        this.pieceList.insertSplittableListAtPosition(o.pieceList, e),
                                    )
                                }),
                                (h.prototype.removeTextAtRange = function (o) {
                                    return this.copyWithPieceList(this.pieceList.removeObjectsInRange(o))
                                }),
                                (h.prototype.replaceTextAtRange = function (o, e) {
                                    return this.removeTextAtRange(e).insertTextAtPosition(o, e[0])
                                }),
                                (h.prototype.moveTextFromRangeToPosition = function (o, e) {
                                    var a, d
                                    if (!(o[0] <= e && e <= o[1]))
                                        return (
                                            (d = this.getTextAtRange(o)),
                                            (a = d.getLength()),
                                            o[0] < e && (e -= a),
                                            this.removeTextAtRange(o).insertTextAtPosition(d, e)
                                        )
                                }),
                                (h.prototype.addAttributeAtRange = function (o, e, a) {
                                    var d
                                    return (d = {}), (d[o] = e), this.addAttributesAtRange(d, a)
                                }),
                                (h.prototype.addAttributesAtRange = function (o, e) {
                                    return this.copyWithPieceList(
                                        this.pieceList.transformObjectsInRange(e, function (a) {
                                            return a.copyWithAdditionalAttributes(o)
                                        }),
                                    )
                                }),
                                (h.prototype.removeAttributeAtRange = function (o, e) {
                                    return this.copyWithPieceList(
                                        this.pieceList.transformObjectsInRange(e, function (a) {
                                            return a.copyWithoutAttribute(o)
                                        }),
                                    )
                                }),
                                (h.prototype.setAttributesAtRange = function (o, e) {
                                    return this.copyWithPieceList(
                                        this.pieceList.transformObjectsInRange(e, function (a) {
                                            return a.copyWithAttributes(o)
                                        }),
                                    )
                                }),
                                (h.prototype.getAttributesAtPosition = function (o) {
                                    var e, a
                                    return (e =
                                        (a = this.pieceList.getObjectAtPosition(o)) != null
                                            ? a.getAttributes()
                                            : void 0) != null
                                        ? e
                                        : {}
                                }),
                                (h.prototype.getCommonAttributes = function () {
                                    var o, e
                                    return (
                                        (o = function () {
                                            var a, d, i, u
                                            for (i = this.pieceList.toArray(), u = [], a = 0, d = i.length; d > a; a++)
                                                (e = i[a]), u.push(e.getAttributes())
                                            return u
                                        }.call(this)),
                                        g.Hash.fromCommonAttributesOfObjects(o).toObject()
                                    )
                                }),
                                (h.prototype.getCommonAttributesAtRange = function (o) {
                                    var e
                                    return (e = this.getTextAtRange(o).getCommonAttributes()) != null ? e : {}
                                }),
                                (h.prototype.getExpandedRangeForAttributeAtOffset = function (o, e) {
                                    var a, d, i
                                    for (
                                        a = i = e, d = this.getLength();
                                        a > 0 && this.getCommonAttributesAtRange([a - 1, i])[o];

                                    )
                                        a--
                                    for (; d > i && this.getCommonAttributesAtRange([e, i + 1])[o]; ) i++
                                    return [a, i]
                                }),
                                (h.prototype.getTextAtRange = function (o) {
                                    return this.copyWithPieceList(this.pieceList.getSplittableListInRange(o))
                                }),
                                (h.prototype.getStringAtRange = function (o) {
                                    return this.pieceList.getSplittableListInRange(o).toString()
                                }),
                                (h.prototype.getStringAtPosition = function (o) {
                                    return this.getStringAtRange([o, o + 1])
                                }),
                                (h.prototype.startsWithString = function (o) {
                                    return this.getStringAtRange([0, o.length]) === o
                                }),
                                (h.prototype.endsWithString = function (o) {
                                    var e
                                    return (e = this.getLength()), this.getStringAtRange([e - o.length, e]) === o
                                }),
                                (h.prototype.getAttachmentPieces = function () {
                                    var o, e, a, d, i
                                    for (d = this.pieceList.toArray(), i = [], o = 0, e = d.length; e > o; o++)
                                        (a = d[o]), a.attachment != null && i.push(a)
                                    return i
                                }),
                                (h.prototype.getAttachments = function () {
                                    var o, e, a, d, i
                                    for (d = this.getAttachmentPieces(), i = [], o = 0, e = d.length; e > o; o++)
                                        (a = d[o]), i.push(a.attachment)
                                    return i
                                }),
                                (h.prototype.getAttachmentAndPositionById = function (o) {
                                    var e, a, d, i, u, s
                                    for (i = 0, u = this.pieceList.toArray(), e = 0, a = u.length; a > e; e++) {
                                        if (((d = u[e]), ((s = d.attachment) != null ? s.id : void 0) === o))
                                            return { attachment: d.attachment, position: i }
                                        i += d.length
                                    }
                                    return { attachment: null, position: null }
                                }),
                                (h.prototype.getAttachmentById = function (o) {
                                    var e, a, d
                                    return (
                                        (d = this.getAttachmentAndPositionById(o)),
                                        (e = d.attachment),
                                        (a = d.position),
                                        e
                                    )
                                }),
                                (h.prototype.getRangeOfAttachment = function (o) {
                                    var e, a
                                    return (
                                        (a = this.getAttachmentAndPositionById(o.id)),
                                        (o = a.attachment),
                                        (e = a.position),
                                        o != null ? [e, e + 1] : void 0
                                    )
                                }),
                                (h.prototype.updateAttributesForAttachment = function (o, e) {
                                    var a
                                    return (a = this.getRangeOfAttachment(e)) ? this.addAttributesAtRange(o, a) : this
                                }),
                                (h.prototype.getLength = function () {
                                    return this.pieceList.getEndPosition()
                                }),
                                (h.prototype.isEmpty = function () {
                                    return this.getLength() === 0
                                }),
                                (h.prototype.isEqualTo = function (o) {
                                    var e
                                    return (
                                        h.__super__.isEqualTo.apply(this, arguments) ||
                                        (o != null && (e = o.pieceList) != null ? e.isEqualTo(this.pieceList) : void 0)
                                    )
                                }),
                                (h.prototype.isBlockBreak = function () {
                                    return this.getLength() === 1 && this.pieceList.getObjectAtIndex(0).isBlockBreak()
                                }),
                                (h.prototype.eachPiece = function (o) {
                                    return this.pieceList.eachObject(o)
                                }),
                                (h.prototype.getPieces = function () {
                                    return this.pieceList.toArray()
                                }),
                                (h.prototype.getPieceAtPosition = function (o) {
                                    return this.pieceList.getObjectAtPosition(o)
                                }),
                                (h.prototype.contentsForInspection = function () {
                                    return { pieceList: this.pieceList.inspect() }
                                }),
                                (h.prototype.toSerializableText = function () {
                                    var o
                                    return (
                                        (o = this.pieceList.selectSplittableList(function (e) {
                                            return e.isSerializable()
                                        })),
                                        this.copyWithPieceList(o)
                                    )
                                }),
                                (h.prototype.toString = function () {
                                    return this.pieceList.toString()
                                }),
                                (h.prototype.toJSON = function () {
                                    return this.pieceList.toJSON()
                                }),
                                (h.prototype.toConsole = function () {
                                    var o
                                    return JSON.stringify(
                                        function () {
                                            var e, a, d, i
                                            for (d = this.pieceList.toArray(), i = [], e = 0, a = d.length; a > e; e++)
                                                (o = d[e]), i.push(JSON.parse(o.toConsole()))
                                            return i
                                        }.call(this),
                                    )
                                }),
                                (h.prototype.getDirection = function () {
                                    return g.getDirection(this.toString())
                                }),
                                (h.prototype.isRTL = function () {
                                    return this.getDirection() === 'rtl'
                                }),
                                h
                            )
                        })(g.Object)
                    }.call(this),
                    function () {
                        var x,
                            b,
                            y,
                            h,
                            o,
                            e = function (u, s) {
                                function n() {
                                    this.constructor = u
                                }
                                for (var p in s) a.call(s, p) && (u[p] = s[p])
                                return (
                                    (n.prototype = s.prototype), (u.prototype = new n()), (u.__super__ = s.prototype), u
                                )
                            },
                            a = {}.hasOwnProperty,
                            d =
                                [].indexOf ||
                                function (u) {
                                    for (var s = 0, n = this.length; n > s; s++)
                                        if (s in this && this[s] === u) return s
                                    return -1
                                },
                            i = [].slice
                        ;(x = g.arraysAreEqual),
                            (o = g.spliceArray),
                            (y = g.getBlockConfig),
                            (b = g.getBlockAttributeNames),
                            (h = g.getListAttributeNames),
                            (g.Block = (function (u) {
                                function s(m, C) {
                                    m == null && (m = new g.Text()),
                                        C == null && (C = []),
                                        s.__super__.constructor.apply(this, arguments),
                                        (this.text = p(m)),
                                        (this.attributes = C)
                                }
                                var n, p, c, v, t, r, l, A, f
                                return (
                                    e(s, u),
                                    (s.fromJSON = function (m) {
                                        var C
                                        return (C = g.Text.fromJSON(m.text)), new this(C, m.attributes)
                                    }),
                                    (s.prototype.isEmpty = function () {
                                        return this.text.isBlockBreak()
                                    }),
                                    (s.prototype.isEqualTo = function (m) {
                                        return (
                                            s.__super__.isEqualTo.apply(this, arguments) ||
                                            (this.text.isEqualTo(m?.text) && x(this.attributes, m?.attributes))
                                        )
                                    }),
                                    (s.prototype.copyWithText = function (m) {
                                        return new this.constructor(m, this.attributes)
                                    }),
                                    (s.prototype.copyWithoutText = function () {
                                        return this.copyWithText(null)
                                    }),
                                    (s.prototype.copyWithAttributes = function (m) {
                                        return new this.constructor(this.text, m)
                                    }),
                                    (s.prototype.copyWithoutAttributes = function () {
                                        return this.copyWithAttributes(null)
                                    }),
                                    (s.prototype.copyUsingObjectMap = function (m) {
                                        var C
                                        return this.copyWithText(
                                            (C = m.find(this.text)) ? C : this.text.copyUsingObjectMap(m),
                                        )
                                    }),
                                    (s.prototype.addAttribute = function (m) {
                                        var C
                                        return (C = this.attributes.concat(v(m))), this.copyWithAttributes(C)
                                    }),
                                    (s.prototype.removeAttribute = function (m) {
                                        var C, S
                                        return (
                                            (S = y(m).listAttribute),
                                            (C = r(r(this.attributes, m), S)),
                                            this.copyWithAttributes(C)
                                        )
                                    }),
                                    (s.prototype.removeLastAttribute = function () {
                                        return this.removeAttribute(this.getLastAttribute())
                                    }),
                                    (s.prototype.getLastAttribute = function () {
                                        return t(this.attributes)
                                    }),
                                    (s.prototype.getAttributes = function () {
                                        return this.attributes.slice(0)
                                    }),
                                    (s.prototype.getAttributeLevel = function () {
                                        return this.attributes.length
                                    }),
                                    (s.prototype.getAttributeAtLevel = function (m) {
                                        return this.attributes[m - 1]
                                    }),
                                    (s.prototype.hasAttribute = function (m) {
                                        return d.call(this.attributes, m) >= 0
                                    }),
                                    (s.prototype.hasAttributes = function () {
                                        return this.getAttributeLevel() > 0
                                    }),
                                    (s.prototype.getLastNestableAttribute = function () {
                                        return t(this.getNestableAttributes())
                                    }),
                                    (s.prototype.getNestableAttributes = function () {
                                        var m, C, S, L, O
                                        for (L = this.attributes, O = [], C = 0, S = L.length; S > C; C++)
                                            (m = L[C]), y(m).nestable && O.push(m)
                                        return O
                                    }),
                                    (s.prototype.getNestingLevel = function () {
                                        return this.getNestableAttributes().length
                                    }),
                                    (s.prototype.decreaseNestingLevel = function () {
                                        var m
                                        return (m = this.getLastNestableAttribute()) ? this.removeAttribute(m) : this
                                    }),
                                    (s.prototype.increaseNestingLevel = function () {
                                        var m, C, S
                                        return (m = this.getLastNestableAttribute())
                                            ? ((S = this.attributes.lastIndexOf(m)),
                                              (C = o.apply(null, [this.attributes, S + 1, 0].concat(i.call(v(m))))),
                                              this.copyWithAttributes(C))
                                            : this
                                    }),
                                    (s.prototype.getListItemAttributes = function () {
                                        var m, C, S, L, O
                                        for (L = this.attributes, O = [], C = 0, S = L.length; S > C; C++)
                                            (m = L[C]), y(m).listAttribute && O.push(m)
                                        return O
                                    }),
                                    (s.prototype.isListItem = function () {
                                        var m
                                        return (m = y(this.getLastAttribute())) != null ? m.listAttribute : void 0
                                    }),
                                    (s.prototype.isTerminalBlock = function () {
                                        var m
                                        return (m = y(this.getLastAttribute())) != null ? m.terminal : void 0
                                    }),
                                    (s.prototype.breaksOnReturn = function () {
                                        var m
                                        return (m = y(this.getLastAttribute())) != null ? m.breakOnReturn : void 0
                                    }),
                                    (s.prototype.findLineBreakInDirectionFromPosition = function (m, C) {
                                        var S, L
                                        return (
                                            (L = this.toString()),
                                            (S = (function () {
                                                switch (m) {
                                                    case 'forward':
                                                        return L.indexOf(
                                                            `
`,
                                                            C,
                                                        )
                                                    case 'backward':
                                                        return L.slice(0, C).lastIndexOf(`
`)
                                                }
                                            })()),
                                            S !== -1 ? S : void 0
                                        )
                                    }),
                                    (s.prototype.contentsForInspection = function () {
                                        return { text: this.text.inspect(), attributes: this.attributes }
                                    }),
                                    (s.prototype.toString = function () {
                                        return this.text.toString()
                                    }),
                                    (s.prototype.toJSON = function () {
                                        return { text: this.text, attributes: this.attributes }
                                    }),
                                    (s.prototype.getDirection = function () {
                                        return this.text.getDirection()
                                    }),
                                    (s.prototype.isRTL = function () {
                                        return this.text.isRTL()
                                    }),
                                    (s.prototype.getLength = function () {
                                        return this.text.getLength()
                                    }),
                                    (s.prototype.canBeConsolidatedWith = function (m) {
                                        return (
                                            !this.hasAttributes() &&
                                            !m.hasAttributes() &&
                                            this.getDirection() === m.getDirection()
                                        )
                                    }),
                                    (s.prototype.consolidateWith = function (m) {
                                        var C, S
                                        return (
                                            (C = g.Text.textForStringWithAttributes(`
`)),
                                            (S = this.getTextWithoutBlockBreak().appendText(C)),
                                            this.copyWithText(S.appendText(m.text))
                                        )
                                    }),
                                    (s.prototype.splitAtOffset = function (m) {
                                        var C, S
                                        return (
                                            m === 0
                                                ? ((C = null), (S = this))
                                                : m === this.getLength()
                                                  ? ((C = this), (S = null))
                                                  : ((C = this.copyWithText(this.text.getTextAtRange([0, m]))),
                                                    (S = this.copyWithText(
                                                        this.text.getTextAtRange([m, this.getLength()]),
                                                    ))),
                                            [C, S]
                                        )
                                    }),
                                    (s.prototype.getBlockBreakPosition = function () {
                                        return this.text.getLength() - 1
                                    }),
                                    (s.prototype.getTextWithoutBlockBreak = function () {
                                        return l(this.text)
                                            ? this.text.getTextAtRange([0, this.getBlockBreakPosition()])
                                            : this.text.copy()
                                    }),
                                    (s.prototype.canBeGrouped = function (m) {
                                        return this.attributes[m]
                                    }),
                                    (s.prototype.canBeGroupedWith = function (m, C) {
                                        var S, L, O, D
                                        return (
                                            (O = m.getAttributes()),
                                            (L = O[C]),
                                            (S = this.attributes[C]),
                                            !(
                                                S !== L ||
                                                (y(S).group === !1 && ((D = O[C + 1]), d.call(h(), D) < 0)) ||
                                                (this.getDirection() !== m.getDirection() && !m.isEmpty())
                                            )
                                        )
                                    }),
                                    (p = function (m) {
                                        return (m = f(m)), (m = n(m))
                                    }),
                                    (f = function (m) {
                                        var C, S, L, O, D, R
                                        return (
                                            (O = !1),
                                            (R = m.getPieces()),
                                            (S = 2 <= R.length ? i.call(R, 0, (C = R.length - 1)) : ((C = 0), [])),
                                            (L = R[C++]),
                                            L == null
                                                ? m
                                                : ((S = (function () {
                                                      var E, w, k
                                                      for (k = [], E = 0, w = S.length; w > E; E++)
                                                          (D = S[E]),
                                                              D.isBlockBreak() ? ((O = !0), k.push(A(D))) : k.push(D)
                                                      return k
                                                  })()),
                                                  O ? new g.Text(i.call(S).concat([L])) : m)
                                        )
                                    }),
                                    (c = g.Text.textForStringWithAttributes(
                                        `
`,
                                        { blockBreak: !0 },
                                    )),
                                    (n = function (m) {
                                        return l(m) ? m : m.appendText(c)
                                    }),
                                    (l = function (m) {
                                        var C, S
                                        return (
                                            (S = m.getLength()),
                                            S === 0 ? !1 : ((C = m.getTextAtRange([S - 1, S])), C.isBlockBreak())
                                        )
                                    }),
                                    (A = function (m) {
                                        return m.copyWithoutAttribute('blockBreak')
                                    }),
                                    (v = function (m) {
                                        var C
                                        return (C = y(m).listAttribute), C != null ? [C, m] : [m]
                                    }),
                                    (t = function (m) {
                                        return m.slice(-1)[0]
                                    }),
                                    (r = function (m, C) {
                                        var S
                                        return (S = m.lastIndexOf(C)), S === -1 ? m : o(m, S, 1)
                                    }),
                                    s
                                )
                            })(g.Object))
                    }.call(this),
                    function () {
                        var x,
                            b,
                            y,
                            h = function (d, i) {
                                function u() {
                                    this.constructor = d
                                }
                                for (var s in i) o.call(i, s) && (d[s] = i[s])
                                return (
                                    (u.prototype = i.prototype), (d.prototype = new u()), (d.__super__ = i.prototype), d
                                )
                            },
                            o = {}.hasOwnProperty,
                            e =
                                [].indexOf ||
                                function (d) {
                                    for (var i = 0, u = this.length; u > i; i++)
                                        if (i in this && this[i] === d) return i
                                    return -1
                                },
                            a = [].slice
                        ;(b = g.tagName),
                            (y = g.walkTree),
                            (x = g.nodeIsAttachmentElement),
                            (g.HTMLSanitizer = (function (d) {
                                function i(c, v) {
                                    var t
                                    ;(t = v ?? {}),
                                        (this.allowedAttributes = t.allowedAttributes),
                                        (this.forbiddenProtocols = t.forbiddenProtocols),
                                        (this.forbiddenElements = t.forbiddenElements),
                                        this.allowedAttributes == null && (this.allowedAttributes = u),
                                        this.forbiddenProtocols == null && (this.forbiddenProtocols = n),
                                        this.forbiddenElements == null && (this.forbiddenElements = s),
                                        (this.body = p(c))
                                }
                                var u, s, n, p
                                return (
                                    h(i, d),
                                    (u = 'style href src width height class'.split(' ')),
                                    (n = 'javascript:'.split(' ')),
                                    (s = 'script iframe'.split(' ')),
                                    (i.sanitize = function (c, v) {
                                        var t
                                        return (t = new this(c, v)), t.sanitize(), t
                                    }),
                                    (i.prototype.sanitize = function () {
                                        return this.sanitizeElements(), this.normalizeListElementNesting()
                                    }),
                                    (i.prototype.getHTML = function () {
                                        return this.body.innerHTML
                                    }),
                                    (i.prototype.getBody = function () {
                                        return this.body
                                    }),
                                    (i.prototype.sanitizeElements = function () {
                                        var c, v, t, r, l
                                        for (l = y(this.body), r = []; l.nextNode(); )
                                            switch (((t = l.currentNode), t.nodeType)) {
                                                case Node.ELEMENT_NODE:
                                                    this.elementIsRemovable(t) ? r.push(t) : this.sanitizeElement(t)
                                                    break
                                                case Node.COMMENT_NODE:
                                                    r.push(t)
                                            }
                                        for (c = 0, v = r.length; v > c; c++) (t = r[c]), g.removeNode(t)
                                        return this.body
                                    }),
                                    (i.prototype.sanitizeElement = function (c) {
                                        var v, t, r, l, A
                                        for (
                                            c.hasAttribute('href') &&
                                                ((l = c.protocol),
                                                e.call(this.forbiddenProtocols, l) >= 0 && c.removeAttribute('href')),
                                                A = a.call(c.attributes),
                                                v = 0,
                                                t = A.length;
                                            t > v;
                                            v++
                                        )
                                            (r = A[v].name),
                                                e.call(this.allowedAttributes, r) >= 0 ||
                                                    r.indexOf('data-trix') === 0 ||
                                                    c.removeAttribute(r)
                                        return c
                                    }),
                                    (i.prototype.normalizeListElementNesting = function () {
                                        var c, v, t, r, l
                                        for (
                                            l = a.call(this.body.querySelectorAll('ul,ol')), c = 0, v = l.length;
                                            v > c;
                                            c++
                                        )
                                            (t = l[c]),
                                                (r = t.previousElementSibling) && b(r) === 'li' && r.appendChild(t)
                                        return this.body
                                    }),
                                    (i.prototype.elementIsRemovable = function (c) {
                                        return c?.nodeType === Node.ELEMENT_NODE
                                            ? this.elementIsForbidden(c) || this.elementIsntSerializable(c)
                                            : void 0
                                    }),
                                    (i.prototype.elementIsForbidden = function (c) {
                                        var v
                                        return (v = b(c)), e.call(this.forbiddenElements, v) >= 0
                                    }),
                                    (i.prototype.elementIsntSerializable = function (c) {
                                        return c.getAttribute('data-trix-serialize') === 'false' && !x(c)
                                    }),
                                    (p = function (c) {
                                        var v, t, r, l, A
                                        for (
                                            c == null && (c = ''),
                                                c = c.replace(/<\/html[^>]*>[^]*$/i, '</html>'),
                                                v = document.implementation.createHTMLDocument(''),
                                                v.documentElement.innerHTML = c,
                                                A = v.head.querySelectorAll('style'),
                                                r = 0,
                                                l = A.length;
                                            l > r;
                                            r++
                                        )
                                            (t = A[r]), v.body.appendChild(t)
                                        return v.body
                                    }),
                                    i
                                )
                            })(g.BasicObject))
                    }.call(this),
                    function () {
                        var x,
                            b,
                            y,
                            h,
                            o,
                            e,
                            a,
                            d,
                            i,
                            u,
                            s,
                            n = function (v, t) {
                                function r() {
                                    this.constructor = v
                                }
                                for (var l in t) p.call(t, l) && (v[l] = t[l])
                                return (
                                    (r.prototype = t.prototype), (v.prototype = new r()), (v.__super__ = t.prototype), v
                                )
                            },
                            p = {}.hasOwnProperty,
                            c =
                                [].indexOf ||
                                function (v) {
                                    for (var t = 0, r = this.length; r > t; t++)
                                        if (t in this && this[t] === v) return t
                                    return -1
                                }
                        ;(x = g.arraysAreEqual),
                            (e = g.makeElement),
                            (u = g.tagName),
                            (o = g.getBlockTagNames),
                            (s = g.walkTree),
                            (h = g.findClosestElementFromNode),
                            (y = g.elementContainsNode),
                            (a = g.nodeIsAttachmentElement),
                            (d = g.normalizeSpaces),
                            (b = g.breakableWhitespacePattern),
                            (i = g.squishBreakableWhitespace),
                            (g.HTMLParser = (function (v) {
                                function t(w, k) {
                                    ;(this.html = w),
                                        (this.referenceElement = (k ?? {}).referenceElement),
                                        (this.blocks = []),
                                        (this.blockElements = []),
                                        (this.processedElements = [])
                                }
                                var r, l, A, f, m, C, S, L, O, D, R, E
                                return (
                                    n(t, v),
                                    (t.parse = function (w, k) {
                                        var T
                                        return (T = new this(w, k)), T.parse(), T
                                    }),
                                    (t.prototype.getDocument = function () {
                                        return g.Document.fromJSON(this.blocks)
                                    }),
                                    (t.prototype.parse = function () {
                                        var w, k
                                        try {
                                            for (
                                                this.createHiddenContainer(),
                                                    w = g.HTMLSanitizer.sanitize(this.html).getHTML(),
                                                    this.containerElement.innerHTML = w,
                                                    k = s(this.containerElement, { usingFilter: S });
                                                k.nextNode();

                                            )
                                                this.processNode(k.currentNode)
                                            return this.translateBlockElementMarginsToNewlines()
                                        } finally {
                                            this.removeHiddenContainer()
                                        }
                                    }),
                                    (t.prototype.createHiddenContainer = function () {
                                        return this.referenceElement
                                            ? ((this.containerElement = this.referenceElement.cloneNode(!1)),
                                              this.containerElement.removeAttribute('id'),
                                              this.containerElement.setAttribute('data-trix-internal', ''),
                                              (this.containerElement.style.display = 'none'),
                                              this.referenceElement.parentNode.insertBefore(
                                                  this.containerElement,
                                                  this.referenceElement.nextSibling,
                                              ))
                                            : ((this.containerElement = e({
                                                  tagName: 'div',
                                                  style: { display: 'none' },
                                              })),
                                              document.body.appendChild(this.containerElement))
                                    }),
                                    (t.prototype.removeHiddenContainer = function () {
                                        return g.removeNode(this.containerElement)
                                    }),
                                    (S = function (w) {
                                        return u(w) === 'style' ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
                                    }),
                                    (t.prototype.processNode = function (w) {
                                        switch (w.nodeType) {
                                            case Node.TEXT_NODE:
                                                if (!this.isInsignificantTextNode(w))
                                                    return this.appendBlockForTextNode(w), this.processTextNode(w)
                                                break
                                            case Node.ELEMENT_NODE:
                                                return this.appendBlockForElement(w), this.processElement(w)
                                        }
                                    }),
                                    (t.prototype.appendBlockForTextNode = function (w) {
                                        var k, T, N
                                        return (
                                            (T = w.parentNode),
                                            T === this.currentBlockElement && this.isBlockElement(w.previousSibling)
                                                ? this.appendStringWithAttributes(`
`)
                                                : (T !== this.containerElement && !this.isBlockElement(T)) ||
                                                    ((k = this.getBlockAttributes(T)),
                                                    x(k, (N = this.currentBlock) != null ? N.attributes : void 0))
                                                  ? void 0
                                                  : ((this.currentBlock = this.appendBlockForAttributesWithElement(
                                                        k,
                                                        T,
                                                    )),
                                                    (this.currentBlockElement = T))
                                        )
                                    }),
                                    (t.prototype.appendBlockForElement = function (w) {
                                        var k, T, N, P
                                        if (
                                            ((N = this.isBlockElement(w)),
                                            (T = y(this.currentBlockElement, w)),
                                            N && !this.isBlockElement(w.firstChild))
                                        ) {
                                            if (
                                                (!this.isInsignificantTextNode(w.firstChild) ||
                                                    !this.isBlockElement(w.firstElementChild)) &&
                                                ((k = this.getBlockAttributes(w)), w.firstChild)
                                            )
                                                return T && x(k, this.currentBlock.attributes)
                                                    ? this.appendStringWithAttributes(`
`)
                                                    : ((this.currentBlock = this.appendBlockForAttributesWithElement(
                                                          k,
                                                          w,
                                                      )),
                                                      (this.currentBlockElement = w))
                                        } else if (this.currentBlockElement && !T && !N)
                                            return (P = this.findParentBlockElement(w))
                                                ? this.appendBlockForElement(P)
                                                : ((this.currentBlock = this.appendEmptyBlock()),
                                                  (this.currentBlockElement = null))
                                    }),
                                    (t.prototype.findParentBlockElement = function (w) {
                                        var k
                                        for (k = w.parentElement; k && k !== this.containerElement; ) {
                                            if (this.isBlockElement(k) && c.call(this.blockElements, k) >= 0) return k
                                            k = k.parentElement
                                        }
                                        return null
                                    }),
                                    (t.prototype.processTextNode = function (w) {
                                        var k, T
                                        return (
                                            (T = w.data),
                                            l(w.parentNode) ||
                                                ((T = i(T)),
                                                R((k = w.previousSibling) != null ? k.textContent : void 0) &&
                                                    (T = m(T))),
                                            this.appendStringWithAttributes(T, this.getTextAttributes(w.parentNode))
                                        )
                                    }),
                                    (t.prototype.processElement = function (w) {
                                        var k, T, N, P, _
                                        if (a(w))
                                            return (
                                                (k = L(w, 'attachment')),
                                                Object.keys(k).length &&
                                                    ((P = this.getTextAttributes(w)),
                                                    this.appendAttachmentWithAttributes(k, P),
                                                    (w.innerHTML = '')),
                                                this.processedElements.push(w)
                                            )
                                        switch (u(w)) {
                                            case 'br':
                                                return (
                                                    this.isExtraBR(w) ||
                                                        this.isBlockElement(w.nextSibling) ||
                                                        this.appendStringWithAttributes(
                                                            `
`,
                                                            this.getTextAttributes(w),
                                                        ),
                                                    this.processedElements.push(w)
                                                )
                                            case 'img':
                                                ;(k = { url: w.getAttribute('src'), contentType: 'image' }), (N = f(w))
                                                for (T in N) (_ = N[T]), (k[T] = _)
                                                return (
                                                    this.appendAttachmentWithAttributes(k, this.getTextAttributes(w)),
                                                    this.processedElements.push(w)
                                                )
                                            case 'tr':
                                                if (w.parentNode.firstChild !== w)
                                                    return this.appendStringWithAttributes(`
`)
                                                break
                                            case 'td':
                                                if (w.parentNode.firstChild !== w)
                                                    return this.appendStringWithAttributes(' | ')
                                        }
                                    }),
                                    (t.prototype.appendBlockForAttributesWithElement = function (w, k) {
                                        var T
                                        return this.blockElements.push(k), (T = r(w)), this.blocks.push(T), T
                                    }),
                                    (t.prototype.appendEmptyBlock = function () {
                                        return this.appendBlockForAttributesWithElement([], null)
                                    }),
                                    (t.prototype.appendStringWithAttributes = function (w, k) {
                                        return this.appendPiece(D(w, k))
                                    }),
                                    (t.prototype.appendAttachmentWithAttributes = function (w, k) {
                                        return this.appendPiece(O(w, k))
                                    }),
                                    (t.prototype.appendPiece = function (w) {
                                        return (
                                            this.blocks.length === 0 && this.appendEmptyBlock(),
                                            this.blocks[this.blocks.length - 1].text.push(w)
                                        )
                                    }),
                                    (t.prototype.appendStringToTextAtIndex = function (w, k) {
                                        var T, N
                                        return (
                                            (N = this.blocks[k].text),
                                            (T = N[N.length - 1]),
                                            T?.type === 'string' ? (T.string += w) : N.push(D(w))
                                        )
                                    }),
                                    (t.prototype.prependStringToTextAtIndex = function (w, k) {
                                        var T, N
                                        return (
                                            (N = this.blocks[k].text),
                                            (T = N[0]),
                                            T?.type === 'string' ? (T.string = w + T.string) : N.unshift(D(w))
                                        )
                                    }),
                                    (D = function (w, k) {
                                        var T
                                        return (
                                            k == null && (k = {}),
                                            (T = 'string'),
                                            (w = d(w)),
                                            { string: w, attributes: k, type: T }
                                        )
                                    }),
                                    (O = function (w, k) {
                                        var T
                                        return (
                                            k == null && (k = {}),
                                            (T = 'attachment'),
                                            { attachment: w, attributes: k, type: T }
                                        )
                                    }),
                                    (r = function (w) {
                                        var k
                                        return w == null && (w = {}), (k = []), { text: k, attributes: w }
                                    }),
                                    (t.prototype.getTextAttributes = function (w) {
                                        var k, T, N, P, _, F, B, M, U, H, z, j
                                        ;(N = {}), (U = g.config.textAttributes)
                                        for (k in U)
                                            if (
                                                ((_ = U[k]),
                                                _.tagName &&
                                                    h(w, {
                                                        matchingSelector: _.tagName,
                                                        untilNode: this.containerElement,
                                                    }))
                                            )
                                                N[k] = !0
                                            else if (_.parser) {
                                                if ((j = _.parser(w))) {
                                                    for (
                                                        T = !1,
                                                            H = this.findBlockElementAncestors(w),
                                                            F = 0,
                                                            M = H.length;
                                                        M > F;
                                                        F++
                                                    )
                                                        if (((P = H[F]), _.parser(P) === j)) {
                                                            T = !0
                                                            break
                                                        }
                                                    T || (N[k] = j)
                                                }
                                            } else _.styleProperty && (j = w.style[_.styleProperty]) && (N[k] = j)
                                        if (a(w)) {
                                            z = L(w, 'attributes')
                                            for (B in z) (j = z[B]), (N[B] = j)
                                        }
                                        return N
                                    }),
                                    (t.prototype.getBlockAttributes = function (w) {
                                        var k, T, N, P
                                        for (T = []; w && w !== this.containerElement; ) {
                                            P = g.config.blockAttributes
                                            for (k in P)
                                                (N = P[k]),
                                                    N.parse !== !1 &&
                                                        u(w) === N.tagName &&
                                                        ((typeof N.test == 'function' && N.test(w)) || !N.test) &&
                                                        (T.push(k), N.listAttribute && T.push(N.listAttribute))
                                            w = w.parentNode
                                        }
                                        return T.reverse()
                                    }),
                                    (t.prototype.findBlockElementAncestors = function (w) {
                                        var k, T
                                        for (k = []; w && w !== this.containerElement; )
                                            (T = u(w)), c.call(o(), T) >= 0 && k.push(w), (w = w.parentNode)
                                        return k
                                    }),
                                    (L = function (w, k) {
                                        try {
                                            return JSON.parse(w.getAttribute('data-trix-' + k))
                                        } catch {
                                            return {}
                                        }
                                    }),
                                    (f = function (w) {
                                        var k, T, N
                                        return (
                                            (N = w.getAttribute('width')),
                                            (T = w.getAttribute('height')),
                                            (k = {}),
                                            N && (k.width = parseInt(N, 10)),
                                            T && (k.height = parseInt(T, 10)),
                                            k
                                        )
                                    }),
                                    (t.prototype.isBlockElement = function (w) {
                                        var k
                                        if (
                                            w?.nodeType === Node.ELEMENT_NODE &&
                                            !a(w) &&
                                            !h(w, { matchingSelector: 'td', untilNode: this.containerElement })
                                        )
                                            return (
                                                (k = u(w)),
                                                c.call(o(), k) >= 0 || window.getComputedStyle(w).display === 'block'
                                            )
                                    }),
                                    (t.prototype.isInsignificantTextNode = function (w) {
                                        var k, T, N
                                        if (
                                            w?.nodeType === Node.TEXT_NODE &&
                                            E(w.data) &&
                                            ((T = w.parentNode),
                                            (N = w.previousSibling),
                                            (k = w.nextSibling),
                                            (!C(T.previousSibling) || this.isBlockElement(T.previousSibling)) && !l(T))
                                        )
                                            return !N || this.isBlockElement(N) || !k || this.isBlockElement(k)
                                    }),
                                    (t.prototype.isExtraBR = function (w) {
                                        return (
                                            u(w) === 'br' &&
                                            this.isBlockElement(w.parentNode) &&
                                            w.parentNode.lastChild === w
                                        )
                                    }),
                                    (l = function (w) {
                                        var k
                                        return (
                                            (k = window.getComputedStyle(w).whiteSpace),
                                            k === 'pre' || k === 'pre-wrap' || k === 'pre-line'
                                        )
                                    }),
                                    (C = function (w) {
                                        return w && !R(w.textContent)
                                    }),
                                    (t.prototype.translateBlockElementMarginsToNewlines = function () {
                                        var w, k, T, N, P, _, F, B
                                        for (
                                            k = this.getMarginOfDefaultBlockElement(),
                                                F = this.blocks,
                                                B = [],
                                                N = T = 0,
                                                P = F.length;
                                            P > T;
                                            N = ++T
                                        )
                                            (w = F[N]),
                                                (_ = this.getMarginOfBlockElementAtIndex(N)) &&
                                                    (_.top > 2 * k.top &&
                                                        this.prependStringToTextAtIndex(
                                                            `
`,
                                                            N,
                                                        ),
                                                    B.push(
                                                        _.bottom > 2 * k.bottom
                                                            ? this.appendStringToTextAtIndex(
                                                                  `
`,
                                                                  N,
                                                              )
                                                            : void 0,
                                                    ))
                                        return B
                                    }),
                                    (t.prototype.getMarginOfBlockElementAtIndex = function (w) {
                                        var k, T
                                        return !(k = this.blockElements[w]) ||
                                            !k.textContent ||
                                            ((T = u(k)), c.call(o(), T) >= 0 || c.call(this.processedElements, k) >= 0)
                                            ? void 0
                                            : A(k)
                                    }),
                                    (t.prototype.getMarginOfDefaultBlockElement = function () {
                                        var w
                                        return (
                                            (w = e(g.config.blockAttributes.default.tagName)),
                                            this.containerElement.appendChild(w),
                                            A(w)
                                        )
                                    }),
                                    (A = function (w) {
                                        var k
                                        return (
                                            (k = window.getComputedStyle(w)),
                                            k.display === 'block'
                                                ? { top: parseInt(k.marginTop), bottom: parseInt(k.marginBottom) }
                                                : void 0
                                        )
                                    }),
                                    (m = function (w) {
                                        return w.replace(RegExp('^' + b.source + '+'), '')
                                    }),
                                    (E = function (w) {
                                        return RegExp('^' + b.source + '*$').test(w)
                                    }),
                                    (R = function (w) {
                                        return /\s$/.test(w)
                                    }),
                                    t
                                )
                            })(g.BasicObject))
                    }.call(this),
                    function () {
                        var x,
                            b,
                            y,
                            h,
                            o = function (i, u) {
                                function s() {
                                    this.constructor = i
                                }
                                for (var n in u) e.call(u, n) && (i[n] = u[n])
                                return (
                                    (s.prototype = u.prototype), (i.prototype = new s()), (i.__super__ = u.prototype), i
                                )
                            },
                            e = {}.hasOwnProperty,
                            a = [].slice,
                            d =
                                [].indexOf ||
                                function (i) {
                                    for (var u = 0, s = this.length; s > u; u++)
                                        if (u in this && this[u] === i) return u
                                    return -1
                                }
                        ;(x = g.arraysAreEqual),
                            (y = g.normalizeRange),
                            (h = g.rangeIsCollapsed),
                            (b = g.getBlockConfig),
                            (g.Document = (function (i) {
                                function u(n) {
                                    n == null && (n = []),
                                        u.__super__.constructor.apply(this, arguments),
                                        n.length === 0 && (n = [new g.Block()]),
                                        (this.blockList = g.SplittableList.box(n))
                                }
                                var s
                                return (
                                    o(u, i),
                                    (u.fromJSON = function (n) {
                                        var p, c
                                        return (
                                            (c = (function () {
                                                var v, t, r
                                                for (r = [], v = 0, t = n.length; t > v; v++)
                                                    (p = n[v]), r.push(g.Block.fromJSON(p))
                                                return r
                                            })()),
                                            new this(c)
                                        )
                                    }),
                                    (u.fromHTML = function (n, p) {
                                        return g.HTMLParser.parse(n, p).getDocument()
                                    }),
                                    (u.fromString = function (n, p) {
                                        var c
                                        return (
                                            (c = g.Text.textForStringWithAttributes(n, p)), new this([new g.Block(c)])
                                        )
                                    }),
                                    (u.prototype.isEmpty = function () {
                                        var n
                                        return (
                                            this.blockList.length === 1 &&
                                            ((n = this.getBlockAtIndex(0)), n.isEmpty() && !n.hasAttributes())
                                        )
                                    }),
                                    (u.prototype.copy = function (n) {
                                        var p
                                        return (
                                            n == null && (n = {}),
                                            (p = n.consolidateBlocks
                                                ? this.blockList.consolidate().toArray()
                                                : this.blockList.toArray()),
                                            new this.constructor(p)
                                        )
                                    }),
                                    (u.prototype.copyUsingObjectsFromDocument = function (n) {
                                        var p
                                        return (p = new g.ObjectMap(n.getObjects())), this.copyUsingObjectMap(p)
                                    }),
                                    (u.prototype.copyUsingObjectMap = function (n) {
                                        var p, c, v
                                        return (
                                            (c = function () {
                                                var t, r, l, A
                                                for (l = this.getBlocks(), A = [], t = 0, r = l.length; r > t; t++)
                                                    (p = l[t]), A.push((v = n.find(p)) ? v : p.copyUsingObjectMap(n))
                                                return A
                                            }.call(this)),
                                            new this.constructor(c)
                                        )
                                    }),
                                    (u.prototype.copyWithBaseBlockAttributes = function (n) {
                                        var p, c, v
                                        return (
                                            n == null && (n = []),
                                            (v = function () {
                                                var t, r, l, A
                                                for (l = this.getBlocks(), A = [], t = 0, r = l.length; r > t; t++)
                                                    (c = l[t]),
                                                        (p = n.concat(c.getAttributes())),
                                                        A.push(c.copyWithAttributes(p))
                                                return A
                                            }.call(this)),
                                            new this.constructor(v)
                                        )
                                    }),
                                    (u.prototype.replaceBlock = function (n, p) {
                                        var c
                                        return (
                                            (c = this.blockList.indexOf(n)),
                                            c === -1
                                                ? this
                                                : new this.constructor(this.blockList.replaceObjectAtIndex(p, c))
                                        )
                                    }),
                                    (u.prototype.insertDocumentAtRange = function (n, p) {
                                        var c, v, t, r, l, A, f
                                        return (
                                            (v = n.blockList),
                                            (l = (p = y(p))[0]),
                                            (A = this.locationFromPosition(l)),
                                            (t = A.index),
                                            (r = A.offset),
                                            (f = this),
                                            (c = this.getBlockAtPosition(l)),
                                            h(p) && c.isEmpty() && !c.hasAttributes()
                                                ? (f = new this.constructor(f.blockList.removeObjectAtIndex(t)))
                                                : c.getBlockBreakPosition() === r && l++,
                                            (f = f.removeTextAtRange(p)),
                                            new this.constructor(f.blockList.insertSplittableListAtPosition(v, l))
                                        )
                                    }),
                                    (u.prototype.mergeDocumentAtRange = function (n, p) {
                                        var c, v, t, r, l, A, f, m, C, S, L, O
                                        return (
                                            (L = (p = y(p))[0]),
                                            (S = this.locationFromPosition(L)),
                                            (v = this.getBlockAtIndex(S.index).getAttributes()),
                                            (c = n.getBaseBlockAttributes()),
                                            (O = v.slice(-c.length)),
                                            x(c, O)
                                                ? ((f = v.slice(0, -c.length)), (A = n.copyWithBaseBlockAttributes(f)))
                                                : (A = n
                                                      .copy({ consolidateBlocks: !0 })
                                                      .copyWithBaseBlockAttributes(v)),
                                            (t = A.getBlockCount()),
                                            (r = A.getBlockAtIndex(0)),
                                            x(v, r.getAttributes())
                                                ? ((l = r.getTextWithoutBlockBreak()),
                                                  (C = this.insertTextAtRange(l, p)),
                                                  t > 1 &&
                                                      ((A = new this.constructor(A.getBlocks().slice(1))),
                                                      (m = L + l.getLength()),
                                                      (C = C.insertDocumentAtRange(A, m))))
                                                : (C = this.insertDocumentAtRange(A, p)),
                                            C
                                        )
                                    }),
                                    (u.prototype.insertTextAtRange = function (n, p) {
                                        var c, v, t, r, l
                                        return (
                                            (l = (p = y(p))[0]),
                                            (r = this.locationFromPosition(l)),
                                            (v = r.index),
                                            (t = r.offset),
                                            (c = this.removeTextAtRange(p)),
                                            new this.constructor(
                                                c.blockList.editObjectAtIndex(v, function (A) {
                                                    return A.copyWithText(A.text.insertTextAtPosition(n, t))
                                                }),
                                            )
                                        )
                                    }),
                                    (u.prototype.removeTextAtRange = function (n) {
                                        var p, c, v, t, r, l, A, f, m, C, S, L, O, D, R, E, w, k, T, N, P
                                        return (
                                            (C = n = y(n)),
                                            (f = C[0]),
                                            (k = C[1]),
                                            h(n)
                                                ? this
                                                : ((S = this.locationRangeFromRange(n)),
                                                  (l = S[0]),
                                                  (E = S[1]),
                                                  (r = l.index),
                                                  (A = l.offset),
                                                  (t = this.getBlockAtIndex(r)),
                                                  (R = E.index),
                                                  (w = E.offset),
                                                  (D = this.getBlockAtIndex(R)),
                                                  (L =
                                                      k - f === 1 &&
                                                      t.getBlockBreakPosition() === A &&
                                                      D.getBlockBreakPosition() !== w &&
                                                      D.text.getStringAtPosition(w) ===
                                                          `
`),
                                                  L
                                                      ? (v = this.blockList.editObjectAtIndex(R, function (_) {
                                                            return _.copyWithText(_.text.removeTextAtRange([w, w + 1]))
                                                        }))
                                                      : ((m = t.text.getTextAtRange([0, A])),
                                                        (T = D.text.getTextAtRange([w, D.getLength()])),
                                                        (N = m.appendText(T)),
                                                        (O = r !== R && A === 0),
                                                        (P = O && t.getAttributeLevel() >= D.getAttributeLevel()),
                                                        (c = P ? D.copyWithText(N) : t.copyWithText(N)),
                                                        (p = R + 1 - r),
                                                        (v = this.blockList.splice(r, p, c))),
                                                  new this.constructor(v))
                                        )
                                    }),
                                    (u.prototype.moveTextFromRangeToPosition = function (n, p) {
                                        var c, v, t, r, l, A, f, m, C, S
                                        return (
                                            (A = n = y(n)),
                                            (C = A[0]),
                                            (t = A[1]),
                                            p >= C && t >= p
                                                ? this
                                                : ((v = this.getDocumentAtRange(n)),
                                                  (m = this.removeTextAtRange(n)),
                                                  (l = p > C),
                                                  l && (p -= v.getLength()),
                                                  (f = v.getBlocks()),
                                                  (r = f[0]),
                                                  (c = 2 <= f.length ? a.call(f, 1) : []),
                                                  c.length === 0
                                                      ? ((S = r.getTextWithoutBlockBreak()), l && (p += 1))
                                                      : (S = r.text),
                                                  (m = m.insertTextAtRange(S, p)),
                                                  c.length === 0
                                                      ? m
                                                      : ((v = new this.constructor(c)),
                                                        (p += S.getLength()),
                                                        m.insertDocumentAtRange(v, p)))
                                        )
                                    }),
                                    (u.prototype.addAttributeAtRange = function (n, p, c) {
                                        var v
                                        return (
                                            (v = this.blockList),
                                            this.eachBlockAtRange(c, function (t, r, l) {
                                                return (v = v.editObjectAtIndex(l, function () {
                                                    return b(n)
                                                        ? t.addAttribute(n, p)
                                                        : r[0] === r[1]
                                                          ? t
                                                          : t.copyWithText(t.text.addAttributeAtRange(n, p, r))
                                                }))
                                            }),
                                            new this.constructor(v)
                                        )
                                    }),
                                    (u.prototype.addAttribute = function (n, p) {
                                        var c
                                        return (
                                            (c = this.blockList),
                                            this.eachBlock(function (v, t) {
                                                return (c = c.editObjectAtIndex(t, function () {
                                                    return v.addAttribute(n, p)
                                                }))
                                            }),
                                            new this.constructor(c)
                                        )
                                    }),
                                    (u.prototype.removeAttributeAtRange = function (n, p) {
                                        var c
                                        return (
                                            (c = this.blockList),
                                            this.eachBlockAtRange(p, function (v, t, r) {
                                                return b(n)
                                                    ? (c = c.editObjectAtIndex(r, function () {
                                                          return v.removeAttribute(n)
                                                      }))
                                                    : t[0] !== t[1]
                                                      ? (c = c.editObjectAtIndex(r, function () {
                                                            return v.copyWithText(v.text.removeAttributeAtRange(n, t))
                                                        }))
                                                      : void 0
                                            }),
                                            new this.constructor(c)
                                        )
                                    }),
                                    (u.prototype.updateAttributesForAttachment = function (n, p) {
                                        var c, v, t, r
                                        return (
                                            (t = (v = this.getRangeOfAttachment(p))[0]),
                                            (c = this.locationFromPosition(t).index),
                                            (r = this.getTextAtIndex(c)),
                                            new this.constructor(
                                                this.blockList.editObjectAtIndex(c, function (l) {
                                                    return l.copyWithText(r.updateAttributesForAttachment(n, p))
                                                }),
                                            )
                                        )
                                    }),
                                    (u.prototype.removeAttributeForAttachment = function (n, p) {
                                        var c
                                        return (c = this.getRangeOfAttachment(p)), this.removeAttributeAtRange(n, c)
                                    }),
                                    (u.prototype.insertBlockBreakAtRange = function (n) {
                                        var p, c, v, t
                                        return (
                                            (t = (n = y(n))[0]),
                                            (v = this.locationFromPosition(t).offset),
                                            (c = this.removeTextAtRange(n)),
                                            v === 0 && (p = [new g.Block()]),
                                            new this.constructor(
                                                c.blockList.insertSplittableListAtPosition(new g.SplittableList(p), t),
                                            )
                                        )
                                    }),
                                    (u.prototype.applyBlockAttributeAtRange = function (n, p, c) {
                                        var v, t, r, l
                                        return (
                                            (r = this.expandRangeToLineBreaksAndSplitBlocks(c)),
                                            (t = r.document),
                                            (c = r.range),
                                            (v = b(n)),
                                            v.listAttribute
                                                ? ((t = t.removeLastListAttributeAtRange(c, {
                                                      exceptAttributeName: n,
                                                  })),
                                                  (l = t.convertLineBreaksToBlockBreaksInRange(c)),
                                                  (t = l.document),
                                                  (c = l.range))
                                                : (t = v.exclusive
                                                      ? t.removeBlockAttributesAtRange(c)
                                                      : v.terminal
                                                        ? t.removeLastTerminalAttributeAtRange(c)
                                                        : t.consolidateBlocksAtRange(c)),
                                            t.addAttributeAtRange(n, p, c)
                                        )
                                    }),
                                    (u.prototype.removeLastListAttributeAtRange = function (n, p) {
                                        var c
                                        return (
                                            p == null && (p = {}),
                                            (c = this.blockList),
                                            this.eachBlockAtRange(n, function (v, t, r) {
                                                var l
                                                if (
                                                    (l = v.getLastAttribute()) &&
                                                    b(l).listAttribute &&
                                                    l !== p.exceptAttributeName
                                                )
                                                    return (c = c.editObjectAtIndex(r, function () {
                                                        return v.removeAttribute(l)
                                                    }))
                                            }),
                                            new this.constructor(c)
                                        )
                                    }),
                                    (u.prototype.removeLastTerminalAttributeAtRange = function (n) {
                                        var p
                                        return (
                                            (p = this.blockList),
                                            this.eachBlockAtRange(n, function (c, v, t) {
                                                var r
                                                if ((r = c.getLastAttribute()) && b(r).terminal)
                                                    return (p = p.editObjectAtIndex(t, function () {
                                                        return c.removeAttribute(r)
                                                    }))
                                            }),
                                            new this.constructor(p)
                                        )
                                    }),
                                    (u.prototype.removeBlockAttributesAtRange = function (n) {
                                        var p
                                        return (
                                            (p = this.blockList),
                                            this.eachBlockAtRange(n, function (c, v, t) {
                                                return c.hasAttributes()
                                                    ? (p = p.editObjectAtIndex(t, function () {
                                                          return c.copyWithoutAttributes()
                                                      }))
                                                    : void 0
                                            }),
                                            new this.constructor(p)
                                        )
                                    }),
                                    (u.prototype.expandRangeToLineBreaksAndSplitBlocks = function (n) {
                                        var p, c, v, t, r, l, A, f, m
                                        return (
                                            (l = n = y(n)),
                                            (m = l[0]),
                                            (t = l[1]),
                                            (f = this.locationFromPosition(m)),
                                            (v = this.locationFromPosition(t)),
                                            (p = this),
                                            (A = p.getBlockAtIndex(f.index)),
                                            (f.offset = A.findLineBreakInDirectionFromPosition('backward', f.offset)) !=
                                                null &&
                                                ((r = p.positionFromLocation(f)),
                                                (p = p.insertBlockBreakAtRange([r, r + 1])),
                                                (v.index += 1),
                                                (v.offset -= p.getBlockAtIndex(f.index).getLength()),
                                                (f.index += 1)),
                                            (f.offset = 0),
                                            v.offset === 0 && v.index > f.index
                                                ? ((v.index -= 1),
                                                  (v.offset = p.getBlockAtIndex(v.index).getBlockBreakPosition()))
                                                : ((c = p.getBlockAtIndex(v.index)),
                                                  c.text.getStringAtRange([v.offset - 1, v.offset]) ===
                                                  `
`
                                                      ? (v.offset -= 1)
                                                      : (v.offset = c.findLineBreakInDirectionFromPosition(
                                                            'forward',
                                                            v.offset,
                                                        )),
                                                  v.offset !== c.getBlockBreakPosition() &&
                                                      ((r = p.positionFromLocation(v)),
                                                      (p = p.insertBlockBreakAtRange([r, r + 1])))),
                                            (m = p.positionFromLocation(f)),
                                            (t = p.positionFromLocation(v)),
                                            (n = y([m, t])),
                                            { document: p, range: n }
                                        )
                                    }),
                                    (u.prototype.convertLineBreaksToBlockBreaksInRange = function (n) {
                                        var p, c, v
                                        return (
                                            (c = (n = y(n))[0]),
                                            (v = this.getStringAtRange(n).slice(0, -1)),
                                            (p = this),
                                            v.replace(/.*?\n/g, function (t) {
                                                return (c += t.length), (p = p.insertBlockBreakAtRange([c - 1, c]))
                                            }),
                                            { document: p, range: n }
                                        )
                                    }),
                                    (u.prototype.consolidateBlocksAtRange = function (n) {
                                        var p, c, v, t, r
                                        return (
                                            (v = n = y(n)),
                                            (r = v[0]),
                                            (c = v[1]),
                                            (t = this.locationFromPosition(r).index),
                                            (p = this.locationFromPosition(c).index),
                                            new this.constructor(this.blockList.consolidateFromIndexToIndex(t, p))
                                        )
                                    }),
                                    (u.prototype.getDocumentAtRange = function (n) {
                                        var p
                                        return (
                                            (n = y(n)),
                                            (p = this.blockList.getSplittableListInRange(n).toArray()),
                                            new this.constructor(p)
                                        )
                                    }),
                                    (u.prototype.getStringAtRange = function (n) {
                                        var p, c, v
                                        return (
                                            (v = n = y(n)),
                                            (c = v[v.length - 1]),
                                            c !== this.getLength() && (p = -1),
                                            this.getDocumentAtRange(n).toString().slice(0, p)
                                        )
                                    }),
                                    (u.prototype.getBlockAtIndex = function (n) {
                                        return this.blockList.getObjectAtIndex(n)
                                    }),
                                    (u.prototype.getBlockAtPosition = function (n) {
                                        var p
                                        return (p = this.locationFromPosition(n).index), this.getBlockAtIndex(p)
                                    }),
                                    (u.prototype.getTextAtIndex = function (n) {
                                        var p
                                        return (p = this.getBlockAtIndex(n)) != null ? p.text : void 0
                                    }),
                                    (u.prototype.getTextAtPosition = function (n) {
                                        var p
                                        return (p = this.locationFromPosition(n).index), this.getTextAtIndex(p)
                                    }),
                                    (u.prototype.getPieceAtPosition = function (n) {
                                        var p, c, v
                                        return (
                                            (v = this.locationFromPosition(n)),
                                            (p = v.index),
                                            (c = v.offset),
                                            this.getTextAtIndex(p).getPieceAtPosition(c)
                                        )
                                    }),
                                    (u.prototype.getCharacterAtPosition = function (n) {
                                        var p, c, v
                                        return (
                                            (v = this.locationFromPosition(n)),
                                            (p = v.index),
                                            (c = v.offset),
                                            this.getTextAtIndex(p).getStringAtRange([c, c + 1])
                                        )
                                    }),
                                    (u.prototype.getLength = function () {
                                        return this.blockList.getEndPosition()
                                    }),
                                    (u.prototype.getBlocks = function () {
                                        return this.blockList.toArray()
                                    }),
                                    (u.prototype.getBlockCount = function () {
                                        return this.blockList.length
                                    }),
                                    (u.prototype.getEditCount = function () {
                                        return this.editCount
                                    }),
                                    (u.prototype.eachBlock = function (n) {
                                        return this.blockList.eachObject(n)
                                    }),
                                    (u.prototype.eachBlockAtRange = function (n, p) {
                                        var c, v, t, r, l, A, f, m, C, S, L, O
                                        if (
                                            ((A = n = y(n)),
                                            (L = A[0]),
                                            (t = A[1]),
                                            (S = this.locationFromPosition(L)),
                                            (v = this.locationFromPosition(t)),
                                            S.index === v.index)
                                        )
                                            return (
                                                (c = this.getBlockAtIndex(S.index)),
                                                (O = [S.offset, v.offset]),
                                                p(c, O, S.index)
                                            )
                                        for (
                                            C = [], l = r = f = S.index, m = v.index;
                                            m >= f ? m >= r : r >= m;
                                            l = m >= f ? ++r : --r
                                        )
                                            (c = this.getBlockAtIndex(l))
                                                ? ((O = (function () {
                                                      switch (l) {
                                                          case S.index:
                                                              return [S.offset, c.text.getLength()]
                                                          case v.index:
                                                              return [0, v.offset]
                                                          default:
                                                              return [0, c.text.getLength()]
                                                      }
                                                  })()),
                                                  C.push(p(c, O, l)))
                                                : C.push(void 0)
                                        return C
                                    }),
                                    (u.prototype.getCommonAttributesAtRange = function (n) {
                                        var p, c, v
                                        return (
                                            (c = (n = y(n))[0]),
                                            h(n)
                                                ? this.getCommonAttributesAtPosition(c)
                                                : ((v = []),
                                                  (p = []),
                                                  this.eachBlockAtRange(n, function (t, r) {
                                                      return r[0] !== r[1]
                                                          ? (v.push(t.text.getCommonAttributesAtRange(r)), p.push(s(t)))
                                                          : void 0
                                                  }),
                                                  g.Hash.fromCommonAttributesOfObjects(v)
                                                      .merge(g.Hash.fromCommonAttributesOfObjects(p))
                                                      .toObject())
                                        )
                                    }),
                                    (u.prototype.getCommonAttributesAtPosition = function (n) {
                                        var p, c, v, t, r, l, A, f, m, C
                                        if (
                                            ((m = this.locationFromPosition(n)),
                                            (r = m.index),
                                            (f = m.offset),
                                            (v = this.getBlockAtIndex(r)),
                                            !v)
                                        )
                                            return {}
                                        ;(t = s(v)),
                                            (p = v.text.getAttributesAtPosition(f)),
                                            (c = v.text.getAttributesAtPosition(f - 1)),
                                            (l = (function () {
                                                var S, L
                                                ;(S = g.config.textAttributes), (L = [])
                                                for (A in S) (C = S[A]), C.inheritable && L.push(A)
                                                return L
                                            })())
                                        for (A in c) (C = c[A]), (C === p[A] || d.call(l, A) >= 0) && (t[A] = C)
                                        return t
                                    }),
                                    (u.prototype.getRangeOfCommonAttributeAtPosition = function (n, p) {
                                        var c, v, t, r, l, A, f, m, C
                                        return (
                                            (l = this.locationFromPosition(p)),
                                            (t = l.index),
                                            (r = l.offset),
                                            (C = this.getTextAtIndex(t)),
                                            (A = C.getExpandedRangeForAttributeAtOffset(n, r)),
                                            (m = A[0]),
                                            (v = A[1]),
                                            (f = this.positionFromLocation({ index: t, offset: m })),
                                            (c = this.positionFromLocation({ index: t, offset: v })),
                                            y([f, c])
                                        )
                                    }),
                                    (u.prototype.getBaseBlockAttributes = function () {
                                        var n, p, c, v, t, r, l
                                        for (
                                            n = this.getBlockAtIndex(0).getAttributes(),
                                                c = v = 1,
                                                l = this.getBlockCount();
                                            l >= 1 ? l > v : v > l;
                                            c = l >= 1 ? ++v : --v
                                        )
                                            (p = this.getBlockAtIndex(c).getAttributes()),
                                                (r = Math.min(n.length, p.length)),
                                                (n = (function () {
                                                    var A, f, m
                                                    for (
                                                        m = [], t = A = 0, f = r;
                                                        (f >= 0 ? f > A : A > f) && p[t] === n[t];
                                                        t = f >= 0 ? ++A : --A
                                                    )
                                                        m.push(p[t])
                                                    return m
                                                })())
                                        return n
                                    }),
                                    (s = function (n) {
                                        var p, c
                                        return (c = {}), (p = n.getLastAttribute()) && (c[p] = !0), c
                                    }),
                                    (u.prototype.getAttachmentById = function (n) {
                                        var p, c, v, t
                                        for (t = this.getAttachments(), c = 0, v = t.length; v > c; c++)
                                            if (((p = t[c]), p.id === n)) return p
                                    }),
                                    (u.prototype.getAttachmentPieces = function () {
                                        var n
                                        return (
                                            (n = []),
                                            this.blockList.eachObject(function (p) {
                                                var c
                                                return (c = p.text), (n = n.concat(c.getAttachmentPieces()))
                                            }),
                                            n
                                        )
                                    }),
                                    (u.prototype.getAttachments = function () {
                                        var n, p, c, v, t
                                        for (v = this.getAttachmentPieces(), t = [], n = 0, p = v.length; p > n; n++)
                                            (c = v[n]), t.push(c.attachment)
                                        return t
                                    }),
                                    (u.prototype.getRangeOfAttachment = function (n) {
                                        var p, c, v, t, r, l, A
                                        for (
                                            t = 0, r = this.blockList.toArray(), c = p = 0, v = r.length;
                                            v > p;
                                            c = ++p
                                        ) {
                                            if (((l = r[c].text), (A = l.getRangeOfAttachment(n))))
                                                return y([t + A[0], t + A[1]])
                                            t += l.getLength()
                                        }
                                    }),
                                    (u.prototype.getLocationRangeOfAttachment = function (n) {
                                        var p
                                        return (p = this.getRangeOfAttachment(n)), this.locationRangeFromRange(p)
                                    }),
                                    (u.prototype.getAttachmentPieceForAttachment = function (n) {
                                        var p, c, v, t
                                        for (t = this.getAttachmentPieces(), p = 0, c = t.length; c > p; p++)
                                            if (((v = t[p]), v.attachment === n)) return v
                                    }),
                                    (u.prototype.findRangesForBlockAttribute = function (n) {
                                        var p, c, v, t, r, l, A
                                        for (r = 0, l = [], A = this.getBlocks(), c = 0, v = A.length; v > c; c++)
                                            (p = A[c]),
                                                (t = p.getLength()),
                                                p.hasAttribute(n) && l.push([r, r + t]),
                                                (r += t)
                                        return l
                                    }),
                                    (u.prototype.findRangesForTextAttribute = function (n, p) {
                                        var c, v, t, r, l, A, f, m, C, S
                                        for (
                                            S = (p ?? {}).withValue,
                                                A = 0,
                                                f = [],
                                                m = [],
                                                r = function (L) {
                                                    return S != null ? L.getAttribute(n) === S : L.hasAttribute(n)
                                                },
                                                C = this.getPieces(),
                                                c = 0,
                                                v = C.length;
                                            v > c;
                                            c++
                                        )
                                            (l = C[c]),
                                                (t = l.getLength()),
                                                r(l) && (f[1] === A ? (f[1] = A + t) : m.push((f = [A, A + t]))),
                                                (A += t)
                                        return m
                                    }),
                                    (u.prototype.locationFromPosition = function (n) {
                                        var p, c
                                        return (
                                            (c = this.blockList.findIndexAndOffsetAtPosition(Math.max(0, n))),
                                            c.index != null
                                                ? c
                                                : ((p = this.getBlocks()),
                                                  { index: p.length - 1, offset: p[p.length - 1].getLength() })
                                        )
                                    }),
                                    (u.prototype.positionFromLocation = function (n) {
                                        return this.blockList.findPositionAtIndexAndOffset(n.index, n.offset)
                                    }),
                                    (u.prototype.locationRangeFromPosition = function (n) {
                                        return y(this.locationFromPosition(n))
                                    }),
                                    (u.prototype.locationRangeFromRange = function (n) {
                                        var p, c, v, t
                                        if ((n = y(n)))
                                            return (
                                                (t = n[0]),
                                                (c = n[1]),
                                                (v = this.locationFromPosition(t)),
                                                (p = this.locationFromPosition(c)),
                                                y([v, p])
                                            )
                                    }),
                                    (u.prototype.rangeFromLocationRange = function (n) {
                                        var p, c
                                        return (
                                            (n = y(n)),
                                            (p = this.positionFromLocation(n[0])),
                                            h(n) || (c = this.positionFromLocation(n[1])),
                                            y([p, c])
                                        )
                                    }),
                                    (u.prototype.isEqualTo = function (n) {
                                        return this.blockList.isEqualTo(n?.blockList)
                                    }),
                                    (u.prototype.getTexts = function () {
                                        var n, p, c, v, t
                                        for (v = this.getBlocks(), t = [], p = 0, c = v.length; c > p; p++)
                                            (n = v[p]), t.push(n.text)
                                        return t
                                    }),
                                    (u.prototype.getPieces = function () {
                                        var n, p, c, v, t
                                        for (c = [], v = this.getTexts(), n = 0, p = v.length; p > n; n++)
                                            (t = v[n]), c.push.apply(c, t.getPieces())
                                        return c
                                    }),
                                    (u.prototype.getObjects = function () {
                                        return this.getBlocks().concat(this.getTexts()).concat(this.getPieces())
                                    }),
                                    (u.prototype.toSerializableDocument = function () {
                                        var n
                                        return (
                                            (n = []),
                                            this.blockList.eachObject(function (p) {
                                                return n.push(p.copyWithText(p.text.toSerializableText()))
                                            }),
                                            new this.constructor(n)
                                        )
                                    }),
                                    (u.prototype.toString = function () {
                                        return this.blockList.toString()
                                    }),
                                    (u.prototype.toJSON = function () {
                                        return this.blockList.toJSON()
                                    }),
                                    (u.prototype.toConsole = function () {
                                        var n
                                        return JSON.stringify(
                                            function () {
                                                var p, c, v, t
                                                for (
                                                    v = this.blockList.toArray(), t = [], p = 0, c = v.length;
                                                    c > p;
                                                    p++
                                                )
                                                    (n = v[p]), t.push(JSON.parse(n.text.toConsole()))
                                                return t
                                            }.call(this),
                                        )
                                    }),
                                    u
                                )
                            })(g.Object))
                    }.call(this),
                    function () {
                        g.LineBreakInsertion = (function () {
                            function x(b) {
                                var y
                                ;(this.composition = b),
                                    (this.document = this.composition.document),
                                    (y = this.composition.getSelectedRange()),
                                    (this.startPosition = y[0]),
                                    (this.endPosition = y[1]),
                                    (this.startLocation = this.document.locationFromPosition(this.startPosition)),
                                    (this.endLocation = this.document.locationFromPosition(this.endPosition)),
                                    (this.block = this.document.getBlockAtIndex(this.endLocation.index)),
                                    (this.breaksOnReturn = this.block.breaksOnReturn()),
                                    (this.previousCharacter = this.block.text.getStringAtPosition(
                                        this.endLocation.offset - 1,
                                    )),
                                    (this.nextCharacter = this.block.text.getStringAtPosition(this.endLocation.offset))
                            }
                            return (
                                (x.prototype.shouldInsertBlockBreak = function () {
                                    return this.block.hasAttributes() &&
                                        this.block.isListItem() &&
                                        !this.block.isEmpty()
                                        ? this.startLocation.offset !== 0
                                        : this.breaksOnReturn &&
                                              this.nextCharacter !==
                                                  `
`
                                }),
                                (x.prototype.shouldBreakFormattedBlock = function () {
                                    return (
                                        this.block.hasAttributes() &&
                                        !this.block.isListItem() &&
                                        ((this.breaksOnReturn &&
                                            this.nextCharacter ===
                                                `
`) ||
                                            this.previousCharacter ===
                                                `
`)
                                    )
                                }),
                                (x.prototype.shouldDecreaseListLevel = function () {
                                    return this.block.hasAttributes() && this.block.isListItem() && this.block.isEmpty()
                                }),
                                (x.prototype.shouldPrependListItem = function () {
                                    return (
                                        this.block.isListItem() &&
                                        this.startLocation.offset === 0 &&
                                        !this.block.isEmpty()
                                    )
                                }),
                                (x.prototype.shouldRemoveLastBlockAttribute = function () {
                                    return (
                                        this.block.hasAttributes() && !this.block.isListItem() && this.block.isEmpty()
                                    )
                                }),
                                x
                            )
                        })()
                    }.call(this),
                    function () {
                        var x,
                            b,
                            y,
                            h,
                            o,
                            e,
                            a,
                            d,
                            i,
                            u,
                            s = function (p, c) {
                                function v() {
                                    this.constructor = p
                                }
                                for (var t in c) n.call(c, t) && (p[t] = c[t])
                                return (
                                    (v.prototype = c.prototype), (p.prototype = new v()), (p.__super__ = c.prototype), p
                                )
                            },
                            n = {}.hasOwnProperty
                        ;(e = g.normalizeRange),
                            (i = g.rangesAreEqual),
                            (d = g.rangeIsCollapsed),
                            (a = g.objectsAreEqual),
                            (x = g.arrayStartsWith),
                            (u = g.summarizeArrayChange),
                            (y = g.getAllAttributeNames),
                            (h = g.getBlockConfig),
                            (o = g.getTextConfig),
                            (b = g.extend),
                            (g.Composition = (function (p) {
                                function c() {
                                    ;(this.document = new g.Document()),
                                        (this.attachments = []),
                                        (this.currentAttributes = {}),
                                        (this.revision = 0)
                                }
                                var v
                                return (
                                    s(c, p),
                                    (c.prototype.setDocument = function (t) {
                                        var r
                                        return t.isEqualTo(this.document)
                                            ? void 0
                                            : ((this.document = t),
                                              this.refreshAttachments(),
                                              this.revision++,
                                              (r = this.delegate) != null &&
                                              typeof r.compositionDidChangeDocument == 'function'
                                                  ? r.compositionDidChangeDocument(t)
                                                  : void 0)
                                    }),
                                    (c.prototype.getSnapshot = function () {
                                        return { document: this.document, selectedRange: this.getSelectedRange() }
                                    }),
                                    (c.prototype.loadSnapshot = function (t) {
                                        var r, l, A, f
                                        return (
                                            (r = t.document),
                                            (f = t.selectedRange),
                                            (l = this.delegate) != null &&
                                                typeof l.compositionWillLoadSnapshot == 'function' &&
                                                l.compositionWillLoadSnapshot(),
                                            this.setDocument(r ?? new g.Document()),
                                            this.setSelection(f ?? [0, 0]),
                                            (A = this.delegate) != null &&
                                            typeof A.compositionDidLoadSnapshot == 'function'
                                                ? A.compositionDidLoadSnapshot()
                                                : void 0
                                        )
                                    }),
                                    (c.prototype.insertText = function (t, r) {
                                        var l, A, f, m
                                        return (
                                            (m = (r ?? { updatePosition: !0 }).updatePosition),
                                            (A = this.getSelectedRange()),
                                            this.setDocument(this.document.insertTextAtRange(t, A)),
                                            (f = A[0]),
                                            (l = f + t.getLength()),
                                            m && this.setSelection(l),
                                            this.notifyDelegateOfInsertionAtRange([f, l])
                                        )
                                    }),
                                    (c.prototype.insertBlock = function (t) {
                                        var r
                                        return (
                                            t == null && (t = new g.Block()),
                                            (r = new g.Document([t])),
                                            this.insertDocument(r)
                                        )
                                    }),
                                    (c.prototype.insertDocument = function (t) {
                                        var r, l, A
                                        return (
                                            t == null && (t = new g.Document()),
                                            (l = this.getSelectedRange()),
                                            this.setDocument(this.document.insertDocumentAtRange(t, l)),
                                            (A = l[0]),
                                            (r = A + t.getLength()),
                                            this.setSelection(r),
                                            this.notifyDelegateOfInsertionAtRange([A, r])
                                        )
                                    }),
                                    (c.prototype.insertString = function (t, r) {
                                        var l, A
                                        return (
                                            (l = this.getCurrentTextAttributes()),
                                            (A = g.Text.textForStringWithAttributes(t, l)),
                                            this.insertText(A, r)
                                        )
                                    }),
                                    (c.prototype.insertBlockBreak = function () {
                                        var t, r, l
                                        return (
                                            (r = this.getSelectedRange()),
                                            this.setDocument(this.document.insertBlockBreakAtRange(r)),
                                            (l = r[0]),
                                            (t = l + 1),
                                            this.setSelection(t),
                                            this.notifyDelegateOfInsertionAtRange([l, t])
                                        )
                                    }),
                                    (c.prototype.insertLineBreak = function () {
                                        var t, r
                                        return (
                                            (r = new g.LineBreakInsertion(this)),
                                            r.shouldDecreaseListLevel()
                                                ? (this.decreaseListLevel(), this.setSelection(r.startPosition))
                                                : r.shouldPrependListItem()
                                                  ? ((t = new g.Document([r.block.copyWithoutText()])),
                                                    this.insertDocument(t))
                                                  : r.shouldInsertBlockBreak()
                                                    ? this.insertBlockBreak()
                                                    : r.shouldRemoveLastBlockAttribute()
                                                      ? this.removeLastBlockAttribute()
                                                      : r.shouldBreakFormattedBlock()
                                                        ? this.breakFormattedBlock(r)
                                                        : this.insertString(`
`)
                                        )
                                    }),
                                    (c.prototype.insertHTML = function (t) {
                                        var r, l, A, f
                                        return (
                                            (r = g.Document.fromHTML(t)),
                                            (A = this.getSelectedRange()),
                                            this.setDocument(this.document.mergeDocumentAtRange(r, A)),
                                            (f = A[0]),
                                            (l = f + r.getLength() - 1),
                                            this.setSelection(l),
                                            this.notifyDelegateOfInsertionAtRange([f, l])
                                        )
                                    }),
                                    (c.prototype.replaceHTML = function (t) {
                                        var r, l, A
                                        return (
                                            (r = g.Document.fromHTML(t).copyUsingObjectsFromDocument(this.document)),
                                            (l = this.getLocationRange({ strict: !1 })),
                                            (A = this.document.rangeFromLocationRange(l)),
                                            this.setDocument(r),
                                            this.setSelection(A)
                                        )
                                    }),
                                    (c.prototype.insertFile = function (t) {
                                        return this.insertFiles([t])
                                    }),
                                    (c.prototype.insertFiles = function (t) {
                                        var r, l, A, f, m, C
                                        for (l = [], f = 0, m = t.length; m > f; f++)
                                            (A = t[f]),
                                                (C = this.delegate) != null &&
                                                    C.compositionShouldAcceptFile(A) &&
                                                    ((r = g.Attachment.attachmentForFile(A)), l.push(r))
                                        return this.insertAttachments(l)
                                    }),
                                    (c.prototype.insertAttachment = function (t) {
                                        return this.insertAttachments([t])
                                    }),
                                    (c.prototype.insertAttachments = function (t) {
                                        var r, l, A, f, m, C, S, L, O
                                        for (L = new g.Text(), f = 0, m = t.length; m > f; f++)
                                            (r = t[f]),
                                                (O = r.getType()),
                                                (C = (S = g.config.attachments[O]) != null ? S.presentation : void 0),
                                                (A = this.getCurrentTextAttributes()),
                                                C && (A.presentation = C),
                                                (l = g.Text.textForAttachmentWithAttributes(r, A)),
                                                (L = L.appendText(l))
                                        return this.insertText(L)
                                    }),
                                    (c.prototype.shouldManageDeletingInDirection = function (t) {
                                        var r
                                        if (((r = this.getLocationRange()), d(r))) {
                                            if (
                                                (t === 'backward' && r[0].offset === 0) ||
                                                this.shouldManageMovingCursorInDirection(t)
                                            )
                                                return !0
                                        } else if (r[0].index !== r[1].index) return !0
                                        return !1
                                    }),
                                    (c.prototype.deleteInDirection = function (t, r) {
                                        var l, A, f, m, C, S, L, O
                                        return (
                                            (m = (r ?? {}).length),
                                            (C = this.getLocationRange()),
                                            (S = this.getSelectedRange()),
                                            (L = d(S)),
                                            L
                                                ? (f = t === 'backward' && C[0].offset === 0)
                                                : (O = C[0].index !== C[1].index),
                                            f &&
                                            this.canDecreaseBlockAttributeLevel() &&
                                            ((A = this.getBlock()),
                                            A.isListItem()
                                                ? this.decreaseListLevel()
                                                : this.decreaseBlockAttributeLevel(),
                                            this.setSelection(S[0]),
                                            A.isEmpty())
                                                ? !1
                                                : (L &&
                                                      ((S = this.getExpandedRangeInDirection(t, { length: m })),
                                                      t === 'backward' && (l = this.getAttachmentAtRange(S))),
                                                  l
                                                      ? (this.editAttachment(l), !1)
                                                      : (this.setDocument(this.document.removeTextAtRange(S)),
                                                        this.setSelection(S[0]),
                                                        f || O ? !1 : void 0))
                                        )
                                    }),
                                    (c.prototype.moveTextFromRange = function (t) {
                                        var r
                                        return (
                                            (r = this.getSelectedRange()[0]),
                                            this.setDocument(this.document.moveTextFromRangeToPosition(t, r)),
                                            this.setSelection(r)
                                        )
                                    }),
                                    (c.prototype.removeAttachment = function (t) {
                                        var r
                                        return (r = this.document.getRangeOfAttachment(t))
                                            ? (this.stopEditingAttachment(),
                                              this.setDocument(this.document.removeTextAtRange(r)),
                                              this.setSelection(r[0]))
                                            : void 0
                                    }),
                                    (c.prototype.removeLastBlockAttribute = function () {
                                        var t, r, l, A
                                        return (
                                            (l = this.getSelectedRange()),
                                            (A = l[0]),
                                            (r = l[1]),
                                            (t = this.document.getBlockAtPosition(r)),
                                            this.removeCurrentAttribute(t.getLastAttribute()),
                                            this.setSelection(A)
                                        )
                                    }),
                                    (v = ' '),
                                    (c.prototype.insertPlaceholder = function () {
                                        return (this.placeholderPosition = this.getPosition()), this.insertString(v)
                                    }),
                                    (c.prototype.selectPlaceholder = function () {
                                        return this.placeholderPosition != null
                                            ? (this.setSelectedRange([
                                                  this.placeholderPosition,
                                                  this.placeholderPosition + v.length,
                                              ]),
                                              this.getSelectedRange())
                                            : void 0
                                    }),
                                    (c.prototype.forgetPlaceholder = function () {
                                        return (this.placeholderPosition = null)
                                    }),
                                    (c.prototype.hasCurrentAttribute = function (t) {
                                        var r
                                        return (r = this.currentAttributes[t]), r != null && r !== !1
                                    }),
                                    (c.prototype.toggleCurrentAttribute = function (t) {
                                        var r
                                        return (r = !this.currentAttributes[t])
                                            ? this.setCurrentAttribute(t, r)
                                            : this.removeCurrentAttribute(t)
                                    }),
                                    (c.prototype.canSetCurrentAttribute = function (t) {
                                        return h(t)
                                            ? this.canSetCurrentBlockAttribute(t)
                                            : this.canSetCurrentTextAttribute(t)
                                    }),
                                    (c.prototype.canSetCurrentTextAttribute = function () {
                                        var t, r, l, A, f
                                        if ((r = this.getSelectedDocument())) {
                                            for (f = r.getAttachments(), l = 0, A = f.length; A > l; l++)
                                                if (((t = f[l]), !t.hasContent())) return !1
                                            return !0
                                        }
                                    }),
                                    (c.prototype.canSetCurrentBlockAttribute = function () {
                                        var t
                                        if ((t = this.getBlock())) return !t.isTerminalBlock()
                                    }),
                                    (c.prototype.setCurrentAttribute = function (t, r) {
                                        return h(t)
                                            ? this.setBlockAttribute(t, r)
                                            : (this.setTextAttribute(t, r),
                                              (this.currentAttributes[t] = r),
                                              this.notifyDelegateOfCurrentAttributesChange())
                                    }),
                                    (c.prototype.setTextAttribute = function (t, r) {
                                        var l, A, f, m
                                        if ((A = this.getSelectedRange()))
                                            return (
                                                (f = A[0]),
                                                (l = A[1]),
                                                f !== l
                                                    ? this.setDocument(this.document.addAttributeAtRange(t, r, A))
                                                    : t === 'href'
                                                      ? ((m = g.Text.textForStringWithAttributes(r, { href: r })),
                                                        this.insertText(m))
                                                      : void 0
                                            )
                                    }),
                                    (c.prototype.setBlockAttribute = function (t, r) {
                                        var l, A
                                        if ((A = this.getSelectedRange()))
                                            return this.canSetCurrentAttribute(t)
                                                ? ((l = this.getBlock()),
                                                  this.setDocument(this.document.applyBlockAttributeAtRange(t, r, A)),
                                                  this.setSelection(A))
                                                : void 0
                                    }),
                                    (c.prototype.removeCurrentAttribute = function (t) {
                                        return h(t)
                                            ? (this.removeBlockAttribute(t), this.updateCurrentAttributes())
                                            : (this.removeTextAttribute(t),
                                              delete this.currentAttributes[t],
                                              this.notifyDelegateOfCurrentAttributesChange())
                                    }),
                                    (c.prototype.removeTextAttribute = function (t) {
                                        var r
                                        if ((r = this.getSelectedRange()))
                                            return this.setDocument(this.document.removeAttributeAtRange(t, r))
                                    }),
                                    (c.prototype.removeBlockAttribute = function (t) {
                                        var r
                                        if ((r = this.getSelectedRange()))
                                            return this.setDocument(this.document.removeAttributeAtRange(t, r))
                                    }),
                                    (c.prototype.canDecreaseNestingLevel = function () {
                                        var t
                                        return ((t = this.getBlock()) != null ? t.getNestingLevel() : void 0) > 0
                                    }),
                                    (c.prototype.canIncreaseNestingLevel = function () {
                                        var t, r, l
                                        if ((t = this.getBlock()))
                                            return (l = h(t.getLastNestableAttribute())) != null && l.listAttribute
                                                ? (r = this.getPreviousBlock())
                                                    ? x(r.getListItemAttributes(), t.getListItemAttributes())
                                                    : void 0
                                                : t.getNestingLevel() > 0
                                    }),
                                    (c.prototype.decreaseNestingLevel = function () {
                                        var t
                                        if ((t = this.getBlock()))
                                            return this.setDocument(
                                                this.document.replaceBlock(t, t.decreaseNestingLevel()),
                                            )
                                    }),
                                    (c.prototype.increaseNestingLevel = function () {
                                        var t
                                        if ((t = this.getBlock()))
                                            return this.setDocument(
                                                this.document.replaceBlock(t, t.increaseNestingLevel()),
                                            )
                                    }),
                                    (c.prototype.canDecreaseBlockAttributeLevel = function () {
                                        var t
                                        return ((t = this.getBlock()) != null ? t.getAttributeLevel() : void 0) > 0
                                    }),
                                    (c.prototype.decreaseBlockAttributeLevel = function () {
                                        var t, r
                                        return (t = (r = this.getBlock()) != null ? r.getLastAttribute() : void 0)
                                            ? this.removeCurrentAttribute(t)
                                            : void 0
                                    }),
                                    (c.prototype.decreaseListLevel = function () {
                                        var t, r, l, A, f, m
                                        for (
                                            m = this.getSelectedRange()[0],
                                                f = this.document.locationFromPosition(m).index,
                                                l = f,
                                                t = this.getBlock().getAttributeLevel();
                                            (r = this.document.getBlockAtIndex(l + 1)) &&
                                            r.isListItem() &&
                                            r.getAttributeLevel() > t;

                                        )
                                            l++
                                        return (
                                            (m = this.document.positionFromLocation({ index: f, offset: 0 })),
                                            (A = this.document.positionFromLocation({ index: l, offset: 0 })),
                                            this.setDocument(this.document.removeLastListAttributeAtRange([m, A]))
                                        )
                                    }),
                                    (c.prototype.updateCurrentAttributes = function () {
                                        var t, r, l, A, f, m
                                        if ((m = this.getSelectedRange({ ignoreLock: !0 }))) {
                                            for (
                                                r = this.document.getCommonAttributesAtRange(m),
                                                    f = y(),
                                                    l = 0,
                                                    A = f.length;
                                                A > l;
                                                l++
                                            )
                                                (t = f[l]), r[t] || this.canSetCurrentAttribute(t) || (r[t] = !1)
                                            if (!a(r, this.currentAttributes))
                                                return (
                                                    (this.currentAttributes = r),
                                                    this.notifyDelegateOfCurrentAttributesChange()
                                                )
                                        }
                                    }),
                                    (c.prototype.getCurrentAttributes = function () {
                                        return b.call({}, this.currentAttributes)
                                    }),
                                    (c.prototype.getCurrentTextAttributes = function () {
                                        var t, r, l, A
                                        ;(t = {}), (l = this.currentAttributes)
                                        for (r in l) (A = l[r]), A !== !1 && o(r) && (t[r] = A)
                                        return t
                                    }),
                                    (c.prototype.freezeSelection = function () {
                                        return this.setCurrentAttribute('frozen', !0)
                                    }),
                                    (c.prototype.thawSelection = function () {
                                        return this.removeCurrentAttribute('frozen')
                                    }),
                                    (c.prototype.hasFrozenSelection = function () {
                                        return this.hasCurrentAttribute('frozen')
                                    }),
                                    c.proxyMethod('getSelectionManager().getPointRange'),
                                    c.proxyMethod('getSelectionManager().setLocationRangeFromPointRange'),
                                    c.proxyMethod('getSelectionManager().createLocationRangeFromDOMRange'),
                                    c.proxyMethod('getSelectionManager().locationIsCursorTarget'),
                                    c.proxyMethod('getSelectionManager().selectionIsExpanded'),
                                    c.proxyMethod('delegate?.getSelectionManager'),
                                    (c.prototype.setSelection = function (t) {
                                        var r, l
                                        return (
                                            (r = this.document.locationRangeFromRange(t)),
                                            (l = this.delegate) != null
                                                ? l.compositionDidRequestChangingSelectionToLocationRange(r)
                                                : void 0
                                        )
                                    }),
                                    (c.prototype.getSelectedRange = function () {
                                        var t
                                        return (t = this.getLocationRange())
                                            ? this.document.rangeFromLocationRange(t)
                                            : void 0
                                    }),
                                    (c.prototype.setSelectedRange = function (t) {
                                        var r
                                        return (
                                            (r = this.document.locationRangeFromRange(t)),
                                            this.getSelectionManager().setLocationRange(r)
                                        )
                                    }),
                                    (c.prototype.getPosition = function () {
                                        var t
                                        return (t = this.getLocationRange())
                                            ? this.document.positionFromLocation(t[0])
                                            : void 0
                                    }),
                                    (c.prototype.getLocationRange = function (t) {
                                        var r, l
                                        return (r =
                                            (l = this.targetLocationRange) != null
                                                ? l
                                                : this.getSelectionManager().getLocationRange(t)) != null
                                            ? r
                                            : e({ index: 0, offset: 0 })
                                    }),
                                    (c.prototype.withTargetLocationRange = function (t, r) {
                                        var l
                                        this.targetLocationRange = t
                                        try {
                                            l = r()
                                        } finally {
                                            this.targetLocationRange = null
                                        }
                                        return l
                                    }),
                                    (c.prototype.withTargetRange = function (t, r) {
                                        var l
                                        return (
                                            (l = this.document.locationRangeFromRange(t)),
                                            this.withTargetLocationRange(l, r)
                                        )
                                    }),
                                    (c.prototype.withTargetDOMRange = function (t, r) {
                                        var l
                                        return (
                                            (l = this.createLocationRangeFromDOMRange(t, { strict: !1 })),
                                            this.withTargetLocationRange(l, r)
                                        )
                                    }),
                                    (c.prototype.getExpandedRangeInDirection = function (t, r) {
                                        var l, A, f, m
                                        return (
                                            (A = (r ?? {}).length),
                                            (f = this.getSelectedRange()),
                                            (m = f[0]),
                                            (l = f[1]),
                                            t === 'backward'
                                                ? A
                                                    ? (m -= A)
                                                    : (m = this.translateUTF16PositionFromOffset(m, -1))
                                                : A
                                                  ? (l += A)
                                                  : (l = this.translateUTF16PositionFromOffset(l, 1)),
                                            e([m, l])
                                        )
                                    }),
                                    (c.prototype.shouldManageMovingCursorInDirection = function (t) {
                                        var r
                                        return this.editingAttachment
                                            ? !0
                                            : ((r = this.getExpandedRangeInDirection(t)),
                                              this.getAttachmentAtRange(r) != null)
                                    }),
                                    (c.prototype.moveCursorInDirection = function (t) {
                                        var r, l, A, f
                                        return (
                                            this.editingAttachment
                                                ? (A = this.document.getRangeOfAttachment(this.editingAttachment))
                                                : ((f = this.getSelectedRange()),
                                                  (A = this.getExpandedRangeInDirection(t)),
                                                  (l = !i(f, A))),
                                            this.setSelectedRange(t === 'backward' ? A[0] : A[1]),
                                            l && (r = this.getAttachmentAtRange(A)) ? this.editAttachment(r) : void 0
                                        )
                                    }),
                                    (c.prototype.expandSelectionInDirection = function (t, r) {
                                        var l, A
                                        return (
                                            (l = (r ?? {}).length),
                                            (A = this.getExpandedRangeInDirection(t, { length: l })),
                                            this.setSelectedRange(A)
                                        )
                                    }),
                                    (c.prototype.expandSelectionForEditing = function () {
                                        return this.hasCurrentAttribute('href')
                                            ? this.expandSelectionAroundCommonAttribute('href')
                                            : void 0
                                    }),
                                    (c.prototype.expandSelectionAroundCommonAttribute = function (t) {
                                        var r, l
                                        return (
                                            (r = this.getPosition()),
                                            (l = this.document.getRangeOfCommonAttributeAtPosition(t, r)),
                                            this.setSelectedRange(l)
                                        )
                                    }),
                                    (c.prototype.selectionContainsAttachments = function () {
                                        var t
                                        return ((t = this.getSelectedAttachments()) != null ? t.length : void 0) > 0
                                    }),
                                    (c.prototype.selectionIsInCursorTarget = function () {
                                        return this.editingAttachment || this.positionIsCursorTarget(this.getPosition())
                                    }),
                                    (c.prototype.positionIsCursorTarget = function (t) {
                                        var r
                                        return (r = this.document.locationFromPosition(t))
                                            ? this.locationIsCursorTarget(r)
                                            : void 0
                                    }),
                                    (c.prototype.positionIsBlockBreak = function (t) {
                                        var r
                                        return (r = this.document.getPieceAtPosition(t)) != null
                                            ? r.isBlockBreak()
                                            : void 0
                                    }),
                                    (c.prototype.getSelectedDocument = function () {
                                        var t
                                        return (t = this.getSelectedRange())
                                            ? this.document.getDocumentAtRange(t)
                                            : void 0
                                    }),
                                    (c.prototype.getSelectedAttachments = function () {
                                        var t
                                        return (t = this.getSelectedDocument()) != null ? t.getAttachments() : void 0
                                    }),
                                    (c.prototype.getAttachments = function () {
                                        return this.attachments.slice(0)
                                    }),
                                    (c.prototype.refreshAttachments = function () {
                                        var t, r, l, A, f, m, C, S, L, O, D, R
                                        for (
                                            l = this.document.getAttachments(),
                                                S = u(this.attachments, l),
                                                t = S.added,
                                                D = S.removed,
                                                this.attachments = l,
                                                A = 0,
                                                m = D.length;
                                            m > A;
                                            A++
                                        )
                                            (r = D[A]),
                                                (r.delegate = null),
                                                (L = this.delegate) != null &&
                                                    typeof L.compositionDidRemoveAttachment == 'function' &&
                                                    L.compositionDidRemoveAttachment(r)
                                        for (R = [], f = 0, C = t.length; C > f; f++)
                                            (r = t[f]),
                                                (r.delegate = this),
                                                R.push(
                                                    (O = this.delegate) != null &&
                                                        typeof O.compositionDidAddAttachment == 'function'
                                                        ? O.compositionDidAddAttachment(r)
                                                        : void 0,
                                                )
                                        return R
                                    }),
                                    (c.prototype.attachmentDidChangeAttributes = function (t) {
                                        var r
                                        return (
                                            this.revision++,
                                            (r = this.delegate) != null &&
                                            typeof r.compositionDidEditAttachment == 'function'
                                                ? r.compositionDidEditAttachment(t)
                                                : void 0
                                        )
                                    }),
                                    (c.prototype.attachmentDidChangePreviewURL = function (t) {
                                        var r
                                        return (
                                            this.revision++,
                                            (r = this.delegate) != null &&
                                            typeof r.compositionDidChangeAttachmentPreviewURL == 'function'
                                                ? r.compositionDidChangeAttachmentPreviewURL(t)
                                                : void 0
                                        )
                                    }),
                                    (c.prototype.editAttachment = function (t, r) {
                                        var l
                                        if (t !== this.editingAttachment)
                                            return (
                                                this.stopEditingAttachment(),
                                                (this.editingAttachment = t),
                                                (l = this.delegate) != null &&
                                                typeof l.compositionDidStartEditingAttachment == 'function'
                                                    ? l.compositionDidStartEditingAttachment(this.editingAttachment, r)
                                                    : void 0
                                            )
                                    }),
                                    (c.prototype.stopEditingAttachment = function () {
                                        var t
                                        if (this.editingAttachment)
                                            return (
                                                (t = this.delegate) != null &&
                                                    typeof t.compositionDidStopEditingAttachment == 'function' &&
                                                    t.compositionDidStopEditingAttachment(this.editingAttachment),
                                                (this.editingAttachment = null)
                                            )
                                    }),
                                    (c.prototype.updateAttributesForAttachment = function (t, r) {
                                        return this.setDocument(this.document.updateAttributesForAttachment(t, r))
                                    }),
                                    (c.prototype.removeAttributeForAttachment = function (t, r) {
                                        return this.setDocument(this.document.removeAttributeForAttachment(t, r))
                                    }),
                                    (c.prototype.breakFormattedBlock = function (t) {
                                        var r, l, A, f, m
                                        return (
                                            (l = t.document),
                                            (r = t.block),
                                            (f = t.startPosition),
                                            (m = [f - 1, f]),
                                            r.getBlockBreakPosition() === t.startLocation.offset
                                                ? (r.breaksOnReturn() &&
                                                  t.nextCharacter ===
                                                      `
`
                                                      ? (f += 1)
                                                      : (l = l.removeTextAtRange(m)),
                                                  (m = [f, f]))
                                                : t.nextCharacter ===
                                                    `
`
                                                  ? t.previousCharacter ===
                                                    `
`
                                                      ? (m = [f - 1, f + 1])
                                                      : ((m = [f, f + 1]), (f += 1))
                                                  : t.startLocation.offset - 1 !== 0 && (f += 1),
                                            (A = new g.Document([r.removeLastAttribute().copyWithoutText()])),
                                            this.setDocument(l.insertDocumentAtRange(A, m)),
                                            this.setSelection(f)
                                        )
                                    }),
                                    (c.prototype.getPreviousBlock = function () {
                                        var t, r
                                        return (r = this.getLocationRange()) && ((t = r[0].index), t > 0)
                                            ? this.document.getBlockAtIndex(t - 1)
                                            : void 0
                                    }),
                                    (c.prototype.getBlock = function () {
                                        var t
                                        return (t = this.getLocationRange())
                                            ? this.document.getBlockAtIndex(t[0].index)
                                            : void 0
                                    }),
                                    (c.prototype.getAttachmentAtRange = function (t) {
                                        var r
                                        return (
                                            (r = this.document.getDocumentAtRange(t)),
                                            r.toString() ===
                                            g.OBJECT_REPLACEMENT_CHARACTER +
                                                `
`
                                                ? r.getAttachments()[0]
                                                : void 0
                                        )
                                    }),
                                    (c.prototype.notifyDelegateOfCurrentAttributesChange = function () {
                                        var t
                                        return (t = this.delegate) != null &&
                                            typeof t.compositionDidChangeCurrentAttributes == 'function'
                                            ? t.compositionDidChangeCurrentAttributes(this.currentAttributes)
                                            : void 0
                                    }),
                                    (c.prototype.notifyDelegateOfInsertionAtRange = function (t) {
                                        var r
                                        return (r = this.delegate) != null &&
                                            typeof r.compositionDidPerformInsertionAtRange == 'function'
                                            ? r.compositionDidPerformInsertionAtRange(t)
                                            : void 0
                                    }),
                                    (c.prototype.translateUTF16PositionFromOffset = function (t, r) {
                                        var l, A
                                        return (
                                            (A = this.document.toUTF16String()),
                                            (l = A.offsetFromUCS2Offset(t)),
                                            A.offsetToUCS2Offset(l + r)
                                        )
                                    }),
                                    c
                                )
                            })(g.BasicObject))
                    }.call(this),
                    function () {
                        var x = function (y, h) {
                                function o() {
                                    this.constructor = y
                                }
                                for (var e in h) b.call(h, e) && (y[e] = h[e])
                                return (
                                    (o.prototype = h.prototype), (y.prototype = new o()), (y.__super__ = h.prototype), y
                                )
                            },
                            b = {}.hasOwnProperty
                        g.UndoManager = (function (y) {
                            function h(e) {
                                ;(this.composition = e), (this.undoEntries = []), (this.redoEntries = [])
                            }
                            var o
                            return (
                                x(h, y),
                                (h.prototype.recordUndoEntry = function (e, a) {
                                    var d, i, u, s, n
                                    return (
                                        (s = a ?? {}),
                                        (i = s.context),
                                        (d = s.consolidatable),
                                        (u = this.undoEntries.slice(-1)[0]),
                                        d && o(u, e, i)
                                            ? void 0
                                            : ((n = this.createEntry({ description: e, context: i })),
                                              this.undoEntries.push(n),
                                              (this.redoEntries = []))
                                    )
                                }),
                                (h.prototype.undo = function () {
                                    var e, a
                                    return (a = this.undoEntries.pop())
                                        ? ((e = this.createEntry(a)),
                                          this.redoEntries.push(e),
                                          this.composition.loadSnapshot(a.snapshot))
                                        : void 0
                                }),
                                (h.prototype.redo = function () {
                                    var e, a
                                    return (e = this.redoEntries.pop())
                                        ? ((a = this.createEntry(e)),
                                          this.undoEntries.push(a),
                                          this.composition.loadSnapshot(e.snapshot))
                                        : void 0
                                }),
                                (h.prototype.canUndo = function () {
                                    return this.undoEntries.length > 0
                                }),
                                (h.prototype.canRedo = function () {
                                    return this.redoEntries.length > 0
                                }),
                                (h.prototype.createEntry = function (e) {
                                    var a, d, i
                                    return (
                                        (i = e ?? {}),
                                        (d = i.description),
                                        (a = i.context),
                                        {
                                            description: d?.toString(),
                                            context: JSON.stringify(a),
                                            snapshot: this.composition.getSnapshot(),
                                        }
                                    )
                                }),
                                (o = function (e, a, d) {
                                    return e?.description === a?.toString() && e?.context === JSON.stringify(d)
                                }),
                                h
                            )
                        })(g.BasicObject)
                    }.call(this),
                    function () {
                        var x
                        ;(g.attachmentGalleryFilter = function (b) {
                            var y
                            return (y = new x(b)), y.perform(), y.getSnapshot()
                        }),
                            (x = (function () {
                                function b(e) {
                                    ;(this.document = e.document), (this.selectedRange = e.selectedRange)
                                }
                                var y, h, o
                                return (
                                    (y = 'attachmentGallery'),
                                    (h = 'presentation'),
                                    (o = 'gallery'),
                                    (b.prototype.perform = function () {
                                        return this.removeBlockAttribute(), this.applyBlockAttribute()
                                    }),
                                    (b.prototype.getSnapshot = function () {
                                        return { document: this.document, selectedRange: this.selectedRange }
                                    }),
                                    (b.prototype.removeBlockAttribute = function () {
                                        var e, a, d, i, u
                                        for (i = this.findRangesOfBlocks(), u = [], e = 0, a = i.length; a > e; e++)
                                            (d = i[e]),
                                                u.push((this.document = this.document.removeAttributeAtRange(y, d)))
                                        return u
                                    }),
                                    (b.prototype.applyBlockAttribute = function () {
                                        var e, a, d, i, u, s
                                        for (
                                            d = 0, u = this.findRangesOfPieces(), s = [], e = 0, a = u.length;
                                            a > e;
                                            e++
                                        )
                                            (i = u[e]),
                                                i[1] - i[0] > 1 &&
                                                    ((i[0] += d),
                                                    (i[1] += d),
                                                    this.document.getCharacterAtPosition(i[1]) !==
                                                        `
` &&
                                                        ((this.document = this.document.insertBlockBreakAtRange(i[1])),
                                                        i[1] < this.selectedRange[1] && this.moveSelectedRangeForward(),
                                                        i[1]++,
                                                        d++),
                                                    i[0] !== 0 &&
                                                        this.document.getCharacterAtPosition(i[0] - 1) !==
                                                            `
` &&
                                                        ((this.document = this.document.insertBlockBreakAtRange(i[0])),
                                                        i[0] < this.selectedRange[0] && this.moveSelectedRangeForward(),
                                                        i[0]++,
                                                        d++),
                                                    s.push(
                                                        (this.document = this.document.applyBlockAttributeAtRange(
                                                            y,
                                                            !0,
                                                            i,
                                                        )),
                                                    ))
                                        return s
                                    }),
                                    (b.prototype.findRangesOfBlocks = function () {
                                        return this.document.findRangesForBlockAttribute(y)
                                    }),
                                    (b.prototype.findRangesOfPieces = function () {
                                        return this.document.findRangesForTextAttribute(h, { withValue: o })
                                    }),
                                    (b.prototype.moveSelectedRangeForward = function () {
                                        return (this.selectedRange[0] += 1), (this.selectedRange[1] += 1)
                                    }),
                                    b
                                )
                            })())
                    }.call(this),
                    function () {
                        var x = function (b, y) {
                            return function () {
                                return b.apply(y, arguments)
                            }
                        }
                        g.Editor = (function () {
                            function b(h, o, e) {
                                ;(this.composition = h),
                                    (this.selectionManager = o),
                                    (this.element = e),
                                    (this.insertFiles = x(this.insertFiles, this)),
                                    (this.undoManager = new g.UndoManager(this.composition)),
                                    (this.filters = y.slice(0))
                            }
                            var y
                            return (
                                (y = [g.attachmentGalleryFilter]),
                                (b.prototype.loadDocument = function (h) {
                                    return this.loadSnapshot({ document: h, selectedRange: [0, 0] })
                                }),
                                (b.prototype.loadHTML = function (h) {
                                    return (
                                        h == null && (h = ''),
                                        this.loadDocument(g.Document.fromHTML(h, { referenceElement: this.element }))
                                    )
                                }),
                                (b.prototype.loadJSON = function (h) {
                                    var o, e
                                    return (
                                        (o = h.document),
                                        (e = h.selectedRange),
                                        (o = g.Document.fromJSON(o)),
                                        this.loadSnapshot({ document: o, selectedRange: e })
                                    )
                                }),
                                (b.prototype.loadSnapshot = function (h) {
                                    return (
                                        (this.undoManager = new g.UndoManager(this.composition)),
                                        this.composition.loadSnapshot(h)
                                    )
                                }),
                                (b.prototype.getDocument = function () {
                                    return this.composition.document
                                }),
                                (b.prototype.getSelectedDocument = function () {
                                    return this.composition.getSelectedDocument()
                                }),
                                (b.prototype.getSnapshot = function () {
                                    return this.composition.getSnapshot()
                                }),
                                (b.prototype.toJSON = function () {
                                    return this.getSnapshot()
                                }),
                                (b.prototype.deleteInDirection = function (h) {
                                    return this.composition.deleteInDirection(h)
                                }),
                                (b.prototype.insertAttachment = function (h) {
                                    return this.composition.insertAttachment(h)
                                }),
                                (b.prototype.insertAttachments = function (h) {
                                    return this.composition.insertAttachments(h)
                                }),
                                (b.prototype.insertDocument = function (h) {
                                    return this.composition.insertDocument(h)
                                }),
                                (b.prototype.insertFile = function (h) {
                                    return this.composition.insertFile(h)
                                }),
                                (b.prototype.insertFiles = function (h) {
                                    return this.composition.insertFiles(h)
                                }),
                                (b.prototype.insertHTML = function (h) {
                                    return this.composition.insertHTML(h)
                                }),
                                (b.prototype.insertString = function (h) {
                                    return this.composition.insertString(h)
                                }),
                                (b.prototype.insertText = function (h) {
                                    return this.composition.insertText(h)
                                }),
                                (b.prototype.insertLineBreak = function () {
                                    return this.composition.insertLineBreak()
                                }),
                                (b.prototype.getSelectedRange = function () {
                                    return this.composition.getSelectedRange()
                                }),
                                (b.prototype.getPosition = function () {
                                    return this.composition.getPosition()
                                }),
                                (b.prototype.getClientRectAtPosition = function (h) {
                                    var o
                                    return (
                                        (o = this.getDocument().locationRangeFromRange([h, h + 1])),
                                        this.selectionManager.getClientRectAtLocationRange(o)
                                    )
                                }),
                                (b.prototype.expandSelectionInDirection = function (h) {
                                    return this.composition.expandSelectionInDirection(h)
                                }),
                                (b.prototype.moveCursorInDirection = function (h) {
                                    return this.composition.moveCursorInDirection(h)
                                }),
                                (b.prototype.setSelectedRange = function (h) {
                                    return this.composition.setSelectedRange(h)
                                }),
                                (b.prototype.activateAttribute = function (h, o) {
                                    return o == null && (o = !0), this.composition.setCurrentAttribute(h, o)
                                }),
                                (b.prototype.attributeIsActive = function (h) {
                                    return this.composition.hasCurrentAttribute(h)
                                }),
                                (b.prototype.canActivateAttribute = function (h) {
                                    return this.composition.canSetCurrentAttribute(h)
                                }),
                                (b.prototype.deactivateAttribute = function (h) {
                                    return this.composition.removeCurrentAttribute(h)
                                }),
                                (b.prototype.canDecreaseNestingLevel = function () {
                                    return this.composition.canDecreaseNestingLevel()
                                }),
                                (b.prototype.canIncreaseNestingLevel = function () {
                                    return this.composition.canIncreaseNestingLevel()
                                }),
                                (b.prototype.decreaseNestingLevel = function () {
                                    return this.canDecreaseNestingLevel()
                                        ? this.composition.decreaseNestingLevel()
                                        : void 0
                                }),
                                (b.prototype.increaseNestingLevel = function () {
                                    return this.canIncreaseNestingLevel()
                                        ? this.composition.increaseNestingLevel()
                                        : void 0
                                }),
                                (b.prototype.canRedo = function () {
                                    return this.undoManager.canRedo()
                                }),
                                (b.prototype.canUndo = function () {
                                    return this.undoManager.canUndo()
                                }),
                                (b.prototype.recordUndoEntry = function (h, o) {
                                    var e, a, d
                                    return (
                                        (d = o ?? {}),
                                        (a = d.context),
                                        (e = d.consolidatable),
                                        this.undoManager.recordUndoEntry(h, { context: a, consolidatable: e })
                                    )
                                }),
                                (b.prototype.redo = function () {
                                    return this.canRedo() ? this.undoManager.redo() : void 0
                                }),
                                (b.prototype.undo = function () {
                                    return this.canUndo() ? this.undoManager.undo() : void 0
                                }),
                                b
                            )
                        })()
                    }.call(this),
                    function () {
                        var x = function (y, h) {
                                function o() {
                                    this.constructor = y
                                }
                                for (var e in h) b.call(h, e) && (y[e] = h[e])
                                return (
                                    (o.prototype = h.prototype), (y.prototype = new o()), (y.__super__ = h.prototype), y
                                )
                            },
                            b = {}.hasOwnProperty
                        g.ManagedAttachment = (function (y) {
                            function h(o, e) {
                                var a
                                ;(this.attachmentManager = o),
                                    (this.attachment = e),
                                    (a = this.attachment),
                                    (this.id = a.id),
                                    (this.file = a.file)
                            }
                            return (
                                x(h, y),
                                (h.prototype.remove = function () {
                                    return this.attachmentManager.requestRemovalOfAttachment(this.attachment)
                                }),
                                h.proxyMethod('attachment.getAttribute'),
                                h.proxyMethod('attachment.hasAttribute'),
                                h.proxyMethod('attachment.setAttribute'),
                                h.proxyMethod('attachment.getAttributes'),
                                h.proxyMethod('attachment.setAttributes'),
                                h.proxyMethod('attachment.isPending'),
                                h.proxyMethod('attachment.isPreviewable'),
                                h.proxyMethod('attachment.getURL'),
                                h.proxyMethod('attachment.getHref'),
                                h.proxyMethod('attachment.getFilename'),
                                h.proxyMethod('attachment.getFilesize'),
                                h.proxyMethod('attachment.getFormattedFilesize'),
                                h.proxyMethod('attachment.getExtension'),
                                h.proxyMethod('attachment.getContentType'),
                                h.proxyMethod('attachment.getFile'),
                                h.proxyMethod('attachment.setFile'),
                                h.proxyMethod('attachment.releaseFile'),
                                h.proxyMethod('attachment.getUploadProgress'),
                                h.proxyMethod('attachment.setUploadProgress'),
                                h
                            )
                        })(g.BasicObject)
                    }.call(this),
                    function () {
                        var x = function (y, h) {
                                function o() {
                                    this.constructor = y
                                }
                                for (var e in h) b.call(h, e) && (y[e] = h[e])
                                return (
                                    (o.prototype = h.prototype), (y.prototype = new o()), (y.__super__ = h.prototype), y
                                )
                            },
                            b = {}.hasOwnProperty
                        g.AttachmentManager = (function (y) {
                            function h(o) {
                                var e, a, d
                                for (
                                    o == null && (o = []), this.managedAttachments = {}, a = 0, d = o.length;
                                    d > a;
                                    a++
                                )
                                    (e = o[a]), this.manageAttachment(e)
                            }
                            return (
                                x(h, y),
                                (h.prototype.getAttachments = function () {
                                    var o, e, a, d
                                    ;(a = this.managedAttachments), (d = [])
                                    for (e in a) (o = a[e]), d.push(o)
                                    return d
                                }),
                                (h.prototype.manageAttachment = function (o) {
                                    var e, a
                                    return (e = this.managedAttachments)[(a = o.id)] != null
                                        ? e[a]
                                        : (e[a] = new g.ManagedAttachment(this, o))
                                }),
                                (h.prototype.attachmentIsManaged = function (o) {
                                    return o.id in this.managedAttachments
                                }),
                                (h.prototype.requestRemovalOfAttachment = function (o) {
                                    var e
                                    return this.attachmentIsManaged(o) &&
                                        (e = this.delegate) != null &&
                                        typeof e.attachmentManagerDidRequestRemovalOfAttachment == 'function'
                                        ? e.attachmentManagerDidRequestRemovalOfAttachment(o)
                                        : void 0
                                }),
                                (h.prototype.unmanageAttachment = function (o) {
                                    var e
                                    return (e = this.managedAttachments[o.id]), delete this.managedAttachments[o.id], e
                                }),
                                h
                            )
                        })(g.BasicObject)
                    }.call(this),
                    function () {
                        var x, b, y, h, o, e, a, d, i, u, s
                        ;(x = g.elementContainsNode),
                            (b = g.findChildIndexOfNode),
                            (o = g.nodeIsBlockStart),
                            (e = g.nodeIsBlockStartComment),
                            (h = g.nodeIsBlockContainer),
                            (a = g.nodeIsCursorTarget),
                            (d = g.nodeIsEmptyTextNode),
                            (i = g.nodeIsTextNode),
                            (y = g.nodeIsAttachmentElement),
                            (u = g.tagName),
                            (s = g.walkTree),
                            (g.LocationMapper = (function () {
                                function n(r) {
                                    this.element = r
                                }
                                var p, c, v, t
                                return (
                                    (n.prototype.findLocationFromContainerAndOffset = function (r, l, A) {
                                        var f, m, C, S, L, O, D
                                        for (
                                            O = (A ?? { strict: !0 }).strict,
                                                m = 0,
                                                C = !1,
                                                S = { index: 0, offset: 0 },
                                                (f = this.findAttachmentElementParentForNode(r)) &&
                                                    ((r = f.parentNode), (l = b(f))),
                                                D = s(this.element, { usingFilter: v });
                                            D.nextNode();

                                        ) {
                                            if (((L = D.currentNode), L === r && i(r))) {
                                                a(L) || (S.offset += l)
                                                break
                                            }
                                            if (L.parentNode === r) {
                                                if (m++ === l) break
                                            } else if (!x(r, L) && m > 0) break
                                            o(L, { strict: O })
                                                ? (C && S.index++, (S.offset = 0), (C = !0))
                                                : (S.offset += c(L))
                                        }
                                        return S
                                    }),
                                    (n.prototype.findContainerAndOffsetFromLocation = function (r) {
                                        var l, A, f, m, C
                                        if (r.index === 0 && r.offset === 0) {
                                            for (l = this.element, m = 0; l.firstChild; )
                                                if (((l = l.firstChild), h(l))) {
                                                    m = 1
                                                    break
                                                }
                                            return [l, m]
                                        }
                                        if (((C = this.findNodeAndOffsetFromLocation(r)), (A = C[0]), (f = C[1]), A)) {
                                            if (i(A))
                                                c(A) === 0
                                                    ? ((l = A.parentNode.parentNode),
                                                      (m = b(A.parentNode)),
                                                      a(A, { name: 'right' }) && m++)
                                                    : ((l = A), (m = r.offset - f))
                                            else {
                                                if (((l = A.parentNode), !o(A.previousSibling) && !h(l)))
                                                    for (; A === l.lastChild && ((A = l), (l = l.parentNode), !h(l)); );
                                                ;(m = b(A)), r.offset !== 0 && m++
                                            }
                                            return [l, m]
                                        }
                                    }),
                                    (n.prototype.findNodeAndOffsetFromLocation = function (r) {
                                        var l, A, f, m, C, S, L, O
                                        for (
                                            L = 0, O = this.getSignificantNodesForIndex(r.index), A = 0, f = O.length;
                                            f > A;
                                            A++
                                        ) {
                                            if (((l = O[A]), (m = c(l)), r.offset <= L + m))
                                                if (i(l)) {
                                                    if (((C = l), (S = L), r.offset === S && a(C))) break
                                                } else C || ((C = l), (S = L))
                                            if (((L += m), L > r.offset)) break
                                        }
                                        return [C, S]
                                    }),
                                    (n.prototype.findAttachmentElementParentForNode = function (r) {
                                        for (; r && r !== this.element; ) {
                                            if (y(r)) return r
                                            r = r.parentNode
                                        }
                                    }),
                                    (n.prototype.getSignificantNodesForIndex = function (r) {
                                        var l, A, f, m, C
                                        for (f = [], C = s(this.element, { usingFilter: p }), m = !1; C.nextNode(); )
                                            if (((A = C.currentNode), e(A))) {
                                                if ((typeof l < 'u' && l !== null ? l++ : (l = 0), l === r)) m = !0
                                                else if (m) break
                                            } else m && f.push(A)
                                        return f
                                    }),
                                    (c = function (r) {
                                        var l
                                        return r.nodeType === Node.TEXT_NODE
                                            ? a(r)
                                                ? 0
                                                : ((l = r.textContent), l.length)
                                            : u(r) === 'br' || y(r)
                                              ? 1
                                              : 0
                                    }),
                                    (p = function (r) {
                                        return t(r) === NodeFilter.FILTER_ACCEPT ? v(r) : NodeFilter.FILTER_REJECT
                                    }),
                                    (t = function (r) {
                                        return d(r) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
                                    }),
                                    (v = function (r) {
                                        return y(r.parentNode) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
                                    }),
                                    n
                                )
                            })())
                    }.call(this),
                    function () {
                        var x,
                            b,
                            y = [].slice
                        ;(x = g.getDOMRange),
                            (b = g.setDOMRange),
                            (g.PointMapper = (function () {
                                function h() {}
                                return (
                                    (h.prototype.createDOMRangeFromPoint = function (o) {
                                        var e, a, d, i, u, s, n, p
                                        if (((n = o.x), (p = o.y), document.caretPositionFromPoint))
                                            return (
                                                (u = document.caretPositionFromPoint(n, p)),
                                                (d = u.offsetNode),
                                                (a = u.offset),
                                                (e = document.createRange()),
                                                e.setStart(d, a),
                                                e
                                            )
                                        if (document.caretRangeFromPoint) return document.caretRangeFromPoint(n, p)
                                        if (document.body.createTextRange) {
                                            i = x()
                                            try {
                                                ;(s = document.body.createTextRange()), s.moveToPoint(n, p), s.select()
                                            } catch {}
                                            return (e = x()), b(i), e
                                        }
                                    }),
                                    (h.prototype.getClientRectsForDOMRange = function (o) {
                                        var e, a, d
                                        return (
                                            (a = y.call(o.getClientRects())), (d = a[0]), (e = a[a.length - 1]), [d, e]
                                        )
                                    }),
                                    h
                                )
                            })())
                    }.call(this),
                    function () {
                        var x,
                            b = function (e, a) {
                                return function () {
                                    return e.apply(a, arguments)
                                }
                            },
                            y = function (e, a) {
                                function d() {
                                    this.constructor = e
                                }
                                for (var i in a) h.call(a, i) && (e[i] = a[i])
                                return (
                                    (d.prototype = a.prototype), (e.prototype = new d()), (e.__super__ = a.prototype), e
                                )
                            },
                            h = {}.hasOwnProperty,
                            o =
                                [].indexOf ||
                                function (e) {
                                    for (var a = 0, d = this.length; d > a; a++)
                                        if (a in this && this[a] === e) return a
                                    return -1
                                }
                        ;(x = g.getDOMRange),
                            (g.SelectionChangeObserver = (function (e) {
                                function a() {
                                    ;(this.run = b(this.run, this)),
                                        (this.update = b(this.update, this)),
                                        (this.selectionManagers = [])
                                }
                                var d
                                return (
                                    y(a, e),
                                    (a.prototype.start = function () {
                                        return this.started
                                            ? void 0
                                            : ((this.started = !0),
                                              'onselectionchange' in document
                                                  ? document.addEventListener('selectionchange', this.update, !0)
                                                  : this.run())
                                    }),
                                    (a.prototype.stop = function () {
                                        return this.started
                                            ? ((this.started = !1),
                                              document.removeEventListener('selectionchange', this.update, !0))
                                            : void 0
                                    }),
                                    (a.prototype.registerSelectionManager = function (i) {
                                        return o.call(this.selectionManagers, i) < 0
                                            ? (this.selectionManagers.push(i), this.start())
                                            : void 0
                                    }),
                                    (a.prototype.unregisterSelectionManager = function (i) {
                                        var u
                                        return (
                                            (this.selectionManagers = function () {
                                                var s, n, p, c
                                                for (
                                                    p = this.selectionManagers, c = [], s = 0, n = p.length;
                                                    n > s;
                                                    s++
                                                )
                                                    (u = p[s]), u !== i && c.push(u)
                                                return c
                                            }.call(this)),
                                            this.selectionManagers.length === 0 ? this.stop() : void 0
                                        )
                                    }),
                                    (a.prototype.notifySelectionManagersOfSelectionChange = function () {
                                        var i, u, s, n, p
                                        for (s = this.selectionManagers, n = [], i = 0, u = s.length; u > i; i++)
                                            (p = s[i]), n.push(p.selectionDidChange())
                                        return n
                                    }),
                                    (a.prototype.update = function () {
                                        var i
                                        return (
                                            (i = x()),
                                            d(i, this.domRange)
                                                ? void 0
                                                : ((this.domRange = i), this.notifySelectionManagersOfSelectionChange())
                                        )
                                    }),
                                    (a.prototype.reset = function () {
                                        return (this.domRange = null), this.update()
                                    }),
                                    (a.prototype.run = function () {
                                        return this.started ? (this.update(), requestAnimationFrame(this.run)) : void 0
                                    }),
                                    (d = function (i, u) {
                                        return (
                                            i?.startContainer === u?.startContainer &&
                                            i?.startOffset === u?.startOffset &&
                                            i?.endContainer === u?.endContainer &&
                                            i?.endOffset === u?.endOffset
                                        )
                                    }),
                                    a
                                )
                            })(g.BasicObject)),
                            g.selectionChangeObserver == null &&
                                (g.selectionChangeObserver = new g.SelectionChangeObserver())
                    }.call(this),
                    function () {
                        var x,
                            b,
                            y,
                            h,
                            o,
                            e,
                            a,
                            d,
                            i,
                            u,
                            s = function (c, v) {
                                return function () {
                                    return c.apply(v, arguments)
                                }
                            },
                            n = function (c, v) {
                                function t() {
                                    this.constructor = c
                                }
                                for (var r in v) p.call(v, r) && (c[r] = v[r])
                                return (
                                    (t.prototype = v.prototype), (c.prototype = new t()), (c.__super__ = v.prototype), c
                                )
                            },
                            p = {}.hasOwnProperty
                        ;(y = g.getDOMSelection),
                            (b = g.getDOMRange),
                            (u = g.setDOMRange),
                            (x = g.elementContainsNode),
                            (e = g.nodeIsCursorTarget),
                            (o = g.innerElementIsActive),
                            (h = g.handleEvent),
                            (a = g.normalizeRange),
                            (d = g.rangeIsCollapsed),
                            (i = g.rangesAreEqual),
                            (g.SelectionManager = (function (c) {
                                function v(t) {
                                    ;(this.element = t),
                                        (this.selectionDidChange = s(this.selectionDidChange, this)),
                                        (this.didMouseDown = s(this.didMouseDown, this)),
                                        (this.locationMapper = new g.LocationMapper(this.element)),
                                        (this.pointMapper = new g.PointMapper()),
                                        (this.lockCount = 0),
                                        h('mousedown', { onElement: this.element, withCallback: this.didMouseDown })
                                }
                                return (
                                    n(v, c),
                                    (v.prototype.getLocationRange = function (t) {
                                        var r, l
                                        return (
                                            t == null && (t = {}),
                                            (r =
                                                t.strict === !1
                                                    ? this.createLocationRangeFromDOMRange(b(), { strict: !1 })
                                                    : t.ignoreLock
                                                      ? this.currentLocationRange
                                                      : (l = this.lockedLocationRange) != null
                                                        ? l
                                                        : this.currentLocationRange)
                                        )
                                    }),
                                    (v.prototype.setLocationRange = function (t) {
                                        var r
                                        if (!this.lockedLocationRange)
                                            return (
                                                (t = a(t)),
                                                (r = this.createDOMRangeFromLocationRange(t))
                                                    ? (u(r), this.updateCurrentLocationRange(t))
                                                    : void 0
                                            )
                                    }),
                                    (v.prototype.setLocationRangeFromPointRange = function (t) {
                                        var r, l
                                        return (
                                            (t = a(t)),
                                            (l = this.getLocationAtPoint(t[0])),
                                            (r = this.getLocationAtPoint(t[1])),
                                            this.setLocationRange([l, r])
                                        )
                                    }),
                                    (v.prototype.getClientRectAtLocationRange = function (t) {
                                        var r
                                        return (r = this.createDOMRangeFromLocationRange(t))
                                            ? this.getClientRectsForDOMRange(r)[1]
                                            : void 0
                                    }),
                                    (v.prototype.locationIsCursorTarget = function (t) {
                                        var r, l, A
                                        return (A = this.findNodeAndOffsetFromLocation(t)), (r = A[0]), (l = A[1]), e(r)
                                    }),
                                    (v.prototype.lock = function () {
                                        return this.lockCount++ === 0
                                            ? (this.updateCurrentLocationRange(),
                                              (this.lockedLocationRange = this.getLocationRange()))
                                            : void 0
                                    }),
                                    (v.prototype.unlock = function () {
                                        var t
                                        return --this.lockCount === 0 &&
                                            ((t = this.lockedLocationRange),
                                            (this.lockedLocationRange = null),
                                            t != null)
                                            ? this.setLocationRange(t)
                                            : void 0
                                    }),
                                    (v.prototype.clearSelection = function () {
                                        var t
                                        return (t = y()) != null ? t.removeAllRanges() : void 0
                                    }),
                                    (v.prototype.selectionIsCollapsed = function () {
                                        var t
                                        return ((t = b()) != null ? t.collapsed : void 0) === !0
                                    }),
                                    (v.prototype.selectionIsExpanded = function () {
                                        return !this.selectionIsCollapsed()
                                    }),
                                    (v.prototype.createLocationRangeFromDOMRange = function (t, r) {
                                        var l, A
                                        if (
                                            t != null &&
                                            this.domRangeWithinElement(t) &&
                                            (A = this.findLocationFromContainerAndOffset(
                                                t.startContainer,
                                                t.startOffset,
                                                r,
                                            ))
                                        )
                                            return (
                                                t.collapsed ||
                                                    (l = this.findLocationFromContainerAndOffset(
                                                        t.endContainer,
                                                        t.endOffset,
                                                        r,
                                                    )),
                                                a([A, l])
                                            )
                                    }),
                                    v.proxyMethod('locationMapper.findLocationFromContainerAndOffset'),
                                    v.proxyMethod('locationMapper.findContainerAndOffsetFromLocation'),
                                    v.proxyMethod('locationMapper.findNodeAndOffsetFromLocation'),
                                    v.proxyMethod('pointMapper.createDOMRangeFromPoint'),
                                    v.proxyMethod('pointMapper.getClientRectsForDOMRange'),
                                    (v.prototype.didMouseDown = function () {
                                        return this.pauseTemporarily()
                                    }),
                                    (v.prototype.pauseTemporarily = function () {
                                        var t, r, l, A
                                        return (
                                            (this.paused = !0),
                                            (r = (function (f) {
                                                return function () {
                                                    var m, C, S
                                                    for (
                                                        f.paused = !1, clearTimeout(A), C = 0, S = l.length;
                                                        S > C;
                                                        C++
                                                    )
                                                        (m = l[C]), m.destroy()
                                                    return x(document, f.element) ? f.selectionDidChange() : void 0
                                                }
                                            })(this)),
                                            (A = setTimeout(r, 200)),
                                            (l = (function () {
                                                var f, m, C, S
                                                for (
                                                    C = ['mousemove', 'keydown'], S = [], f = 0, m = C.length;
                                                    m > f;
                                                    f++
                                                )
                                                    (t = C[f]), S.push(h(t, { onElement: document, withCallback: r }))
                                                return S
                                            })())
                                        )
                                    }),
                                    (v.prototype.selectionDidChange = function () {
                                        return this.paused || o(this.element)
                                            ? void 0
                                            : this.updateCurrentLocationRange()
                                    }),
                                    (v.prototype.updateCurrentLocationRange = function (t) {
                                        var r
                                        return (t ?? (t = this.createLocationRangeFromDOMRange(b()))) &&
                                            !i(t, this.currentLocationRange)
                                            ? ((this.currentLocationRange = t),
                                              (r = this.delegate) != null &&
                                              typeof r.locationRangeDidChange == 'function'
                                                  ? r.locationRangeDidChange(this.currentLocationRange.slice(0))
                                                  : void 0)
                                            : void 0
                                    }),
                                    (v.prototype.createDOMRangeFromLocationRange = function (t) {
                                        var r, l, A, f
                                        return (
                                            (A = this.findContainerAndOffsetFromLocation(t[0])),
                                            (l = d(t)
                                                ? A
                                                : (f = this.findContainerAndOffsetFromLocation(t[1])) != null
                                                  ? f
                                                  : A),
                                            A != null && l != null
                                                ? ((r = document.createRange()),
                                                  r.setStart.apply(r, A),
                                                  r.setEnd.apply(r, l),
                                                  r)
                                                : void 0
                                        )
                                    }),
                                    (v.prototype.getLocationAtPoint = function (t) {
                                        var r, l
                                        return (r = this.createDOMRangeFromPoint(t)) &&
                                            (l = this.createLocationRangeFromDOMRange(r)) != null
                                            ? l[0]
                                            : void 0
                                    }),
                                    (v.prototype.domRangeWithinElement = function (t) {
                                        return t.collapsed
                                            ? x(this.element, t.startContainer)
                                            : x(this.element, t.startContainer) && x(this.element, t.endContainer)
                                    }),
                                    v
                                )
                            })(g.BasicObject))
                    }.call(this),
                    function () {
                        var x,
                            b,
                            y,
                            h,
                            o = function (d, i) {
                                function u() {
                                    this.constructor = d
                                }
                                for (var s in i) e.call(i, s) && (d[s] = i[s])
                                return (
                                    (u.prototype = i.prototype), (d.prototype = new u()), (d.__super__ = i.prototype), d
                                )
                            },
                            e = {}.hasOwnProperty,
                            a = [].slice
                        ;(y = g.rangeIsCollapsed),
                            (h = g.rangesAreEqual),
                            (b = g.objectsAreEqual),
                            (x = g.getBlockConfig),
                            (g.EditorController = (function (d) {
                                function i(s) {
                                    var n, p
                                    ;(this.editorElement = s.editorElement),
                                        (n = s.document),
                                        (p = s.html),
                                        (this.selectionManager = new g.SelectionManager(this.editorElement)),
                                        (this.selectionManager.delegate = this),
                                        (this.composition = new g.Composition()),
                                        (this.composition.delegate = this),
                                        (this.attachmentManager = new g.AttachmentManager(
                                            this.composition.getAttachments(),
                                        )),
                                        (this.attachmentManager.delegate = this),
                                        (this.inputController = new g[
                                            'Level' + g.config.input.getLevel() + 'InputController'
                                        ](this.editorElement)),
                                        (this.inputController.delegate = this),
                                        (this.inputController.responder = this.composition),
                                        (this.compositionController = new g.CompositionController(
                                            this.editorElement,
                                            this.composition,
                                        )),
                                        (this.compositionController.delegate = this),
                                        (this.toolbarController = new g.ToolbarController(
                                            this.editorElement.toolbarElement,
                                        )),
                                        (this.toolbarController.delegate = this),
                                        (this.editor = new g.Editor(
                                            this.composition,
                                            this.selectionManager,
                                            this.editorElement,
                                        )),
                                        n != null ? this.editor.loadDocument(n) : this.editor.loadHTML(p)
                                }
                                var u
                                return (
                                    o(i, d),
                                    (i.prototype.registerSelectionManager = function () {
                                        return g.selectionChangeObserver.registerSelectionManager(this.selectionManager)
                                    }),
                                    (i.prototype.unregisterSelectionManager = function () {
                                        return g.selectionChangeObserver.unregisterSelectionManager(
                                            this.selectionManager,
                                        )
                                    }),
                                    (i.prototype.render = function () {
                                        return this.compositionController.render()
                                    }),
                                    (i.prototype.reparse = function () {
                                        return this.composition.replaceHTML(this.editorElement.innerHTML)
                                    }),
                                    (i.prototype.compositionDidChangeDocument = function () {
                                        return (
                                            this.notifyEditorElement('document-change'),
                                            this.handlingInput ? void 0 : this.render()
                                        )
                                    }),
                                    (i.prototype.compositionDidChangeCurrentAttributes = function (s) {
                                        return (
                                            (this.currentAttributes = s),
                                            this.toolbarController.updateAttributes(this.currentAttributes),
                                            this.updateCurrentActions(),
                                            this.notifyEditorElement('attributes-change', {
                                                attributes: this.currentAttributes,
                                            })
                                        )
                                    }),
                                    (i.prototype.compositionDidPerformInsertionAtRange = function (s) {
                                        return this.pasting ? (this.pastedRange = s) : void 0
                                    }),
                                    (i.prototype.compositionShouldAcceptFile = function (s) {
                                        return this.notifyEditorElement('file-accept', { file: s })
                                    }),
                                    (i.prototype.compositionDidAddAttachment = function (s) {
                                        var n
                                        return (
                                            (n = this.attachmentManager.manageAttachment(s)),
                                            this.notifyEditorElement('attachment-add', { attachment: n })
                                        )
                                    }),
                                    (i.prototype.compositionDidEditAttachment = function (s) {
                                        var n
                                        return (
                                            this.compositionController.rerenderViewForObject(s),
                                            (n = this.attachmentManager.manageAttachment(s)),
                                            this.notifyEditorElement('attachment-edit', { attachment: n }),
                                            this.notifyEditorElement('change')
                                        )
                                    }),
                                    (i.prototype.compositionDidChangeAttachmentPreviewURL = function (s) {
                                        return (
                                            this.compositionController.invalidateViewForObject(s),
                                            this.notifyEditorElement('change')
                                        )
                                    }),
                                    (i.prototype.compositionDidRemoveAttachment = function (s) {
                                        var n
                                        return (
                                            (n = this.attachmentManager.unmanageAttachment(s)),
                                            this.notifyEditorElement('attachment-remove', { attachment: n })
                                        )
                                    }),
                                    (i.prototype.compositionDidStartEditingAttachment = function (s, n) {
                                        return (
                                            (this.attachmentLocationRange =
                                                this.composition.document.getLocationRangeOfAttachment(s)),
                                            this.compositionController.installAttachmentEditorForAttachment(s, n),
                                            this.selectionManager.setLocationRange(this.attachmentLocationRange)
                                        )
                                    }),
                                    (i.prototype.compositionDidStopEditingAttachment = function () {
                                        return (
                                            this.compositionController.uninstallAttachmentEditor(),
                                            (this.attachmentLocationRange = null)
                                        )
                                    }),
                                    (i.prototype.compositionDidRequestChangingSelectionToLocationRange = function (s) {
                                        return !this.loadingSnapshot || this.isFocused()
                                            ? ((this.requestedLocationRange = s),
                                              (this.compositionRevisionWhenLocationRangeRequested =
                                                  this.composition.revision),
                                              this.handlingInput ? void 0 : this.render())
                                            : void 0
                                    }),
                                    (i.prototype.compositionWillLoadSnapshot = function () {
                                        return (this.loadingSnapshot = !0)
                                    }),
                                    (i.prototype.compositionDidLoadSnapshot = function () {
                                        return (
                                            this.compositionController.refreshViewCache(),
                                            this.render(),
                                            (this.loadingSnapshot = !1)
                                        )
                                    }),
                                    (i.prototype.getSelectionManager = function () {
                                        return this.selectionManager
                                    }),
                                    i.proxyMethod('getSelectionManager().setLocationRange'),
                                    i.proxyMethod('getSelectionManager().getLocationRange'),
                                    (i.prototype.attachmentManagerDidRequestRemovalOfAttachment = function (s) {
                                        return this.removeAttachment(s)
                                    }),
                                    (i.prototype.compositionControllerWillSyncDocumentView = function () {
                                        return (
                                            this.inputController.editorWillSyncDocumentView(),
                                            this.selectionManager.lock(),
                                            this.selectionManager.clearSelection()
                                        )
                                    }),
                                    (i.prototype.compositionControllerDidSyncDocumentView = function () {
                                        return (
                                            this.inputController.editorDidSyncDocumentView(),
                                            this.selectionManager.unlock(),
                                            this.updateCurrentActions(),
                                            this.notifyEditorElement('sync')
                                        )
                                    }),
                                    (i.prototype.compositionControllerDidRender = function () {
                                        return (
                                            this.requestedLocationRange != null &&
                                                (this.compositionRevisionWhenLocationRangeRequested ===
                                                    this.composition.revision &&
                                                    this.selectionManager.setLocationRange(this.requestedLocationRange),
                                                (this.requestedLocationRange = null),
                                                (this.compositionRevisionWhenLocationRangeRequested = null)),
                                            this.renderedCompositionRevision !== this.composition.revision &&
                                                (this.runEditorFilters(),
                                                this.composition.updateCurrentAttributes(),
                                                this.notifyEditorElement('render')),
                                            (this.renderedCompositionRevision = this.composition.revision)
                                        )
                                    }),
                                    (i.prototype.compositionControllerDidFocus = function () {
                                        return (
                                            this.isFocusedInvisibly() && this.setLocationRange({ index: 0, offset: 0 }),
                                            this.toolbarController.hideDialog(),
                                            this.notifyEditorElement('focus')
                                        )
                                    }),
                                    (i.prototype.compositionControllerDidBlur = function () {
                                        return this.notifyEditorElement('blur')
                                    }),
                                    (i.prototype.compositionControllerDidSelectAttachment = function (s, n) {
                                        return (
                                            this.toolbarController.hideDialog(), this.composition.editAttachment(s, n)
                                        )
                                    }),
                                    (i.prototype.compositionControllerDidRequestDeselectingAttachment = function (s) {
                                        var n, p
                                        return (
                                            (n =
                                                (p = this.attachmentLocationRange) != null
                                                    ? p
                                                    : this.composition.document.getLocationRangeOfAttachment(s)),
                                            this.selectionManager.setLocationRange(n[1])
                                        )
                                    }),
                                    (i.prototype.compositionControllerWillUpdateAttachment = function (s) {
                                        return this.editor.recordUndoEntry('Edit Attachment', {
                                            context: s.id,
                                            consolidatable: !0,
                                        })
                                    }),
                                    (i.prototype.compositionControllerDidRequestRemovalOfAttachment = function (s) {
                                        return this.removeAttachment(s)
                                    }),
                                    (i.prototype.inputControllerWillHandleInput = function () {
                                        return (this.handlingInput = !0), (this.requestedRender = !1)
                                    }),
                                    (i.prototype.inputControllerDidRequestRender = function () {
                                        return (this.requestedRender = !0)
                                    }),
                                    (i.prototype.inputControllerDidHandleInput = function () {
                                        return (
                                            (this.handlingInput = !1),
                                            this.requestedRender ? ((this.requestedRender = !1), this.render()) : void 0
                                        )
                                    }),
                                    (i.prototype.inputControllerDidAllowUnhandledInput = function () {
                                        return this.notifyEditorElement('change')
                                    }),
                                    (i.prototype.inputControllerDidRequestReparse = function () {
                                        return this.reparse()
                                    }),
                                    (i.prototype.inputControllerWillPerformTyping = function () {
                                        return this.recordTypingUndoEntry()
                                    }),
                                    (i.prototype.inputControllerWillPerformFormatting = function (s) {
                                        return this.recordFormattingUndoEntry(s)
                                    }),
                                    (i.prototype.inputControllerWillCutText = function () {
                                        return this.editor.recordUndoEntry('Cut')
                                    }),
                                    (i.prototype.inputControllerWillPaste = function (s) {
                                        return (
                                            this.editor.recordUndoEntry('Paste'),
                                            (this.pasting = !0),
                                            this.notifyEditorElement('before-paste', { paste: s })
                                        )
                                    }),
                                    (i.prototype.inputControllerDidPaste = function (s) {
                                        return (
                                            (s.range = this.pastedRange),
                                            (this.pastedRange = null),
                                            (this.pasting = null),
                                            this.notifyEditorElement('paste', { paste: s })
                                        )
                                    }),
                                    (i.prototype.inputControllerWillMoveText = function () {
                                        return this.editor.recordUndoEntry('Move')
                                    }),
                                    (i.prototype.inputControllerWillAttachFiles = function () {
                                        return this.editor.recordUndoEntry('Drop Files')
                                    }),
                                    (i.prototype.inputControllerWillPerformUndo = function () {
                                        return this.editor.undo()
                                    }),
                                    (i.prototype.inputControllerWillPerformRedo = function () {
                                        return this.editor.redo()
                                    }),
                                    (i.prototype.inputControllerDidReceiveKeyboardCommand = function (s) {
                                        return this.toolbarController.applyKeyboardCommand(s)
                                    }),
                                    (i.prototype.inputControllerDidStartDrag = function () {
                                        return (this.locationRangeBeforeDrag = this.selectionManager.getLocationRange())
                                    }),
                                    (i.prototype.inputControllerDidReceiveDragOverPoint = function (s) {
                                        return this.selectionManager.setLocationRangeFromPointRange(s)
                                    }),
                                    (i.prototype.inputControllerDidCancelDrag = function () {
                                        return (
                                            this.selectionManager.setLocationRange(this.locationRangeBeforeDrag),
                                            (this.locationRangeBeforeDrag = null)
                                        )
                                    }),
                                    (i.prototype.locationRangeDidChange = function (s) {
                                        return (
                                            this.composition.updateCurrentAttributes(),
                                            this.updateCurrentActions(),
                                            this.attachmentLocationRange &&
                                                !h(this.attachmentLocationRange, s) &&
                                                this.composition.stopEditingAttachment(),
                                            this.notifyEditorElement('selection-change')
                                        )
                                    }),
                                    (i.prototype.toolbarDidClickButton = function () {
                                        return this.getLocationRange()
                                            ? void 0
                                            : this.setLocationRange({ index: 0, offset: 0 })
                                    }),
                                    (i.prototype.toolbarDidInvokeAction = function (s) {
                                        return this.invokeAction(s)
                                    }),
                                    (i.prototype.toolbarDidToggleAttribute = function (s) {
                                        return (
                                            this.recordFormattingUndoEntry(s),
                                            this.composition.toggleCurrentAttribute(s),
                                            this.render(),
                                            this.selectionFrozen ? void 0 : this.editorElement.focus()
                                        )
                                    }),
                                    (i.prototype.toolbarDidUpdateAttribute = function (s, n) {
                                        return (
                                            this.recordFormattingUndoEntry(s),
                                            this.composition.setCurrentAttribute(s, n),
                                            this.render(),
                                            this.selectionFrozen ? void 0 : this.editorElement.focus()
                                        )
                                    }),
                                    (i.prototype.toolbarDidRemoveAttribute = function (s) {
                                        return (
                                            this.recordFormattingUndoEntry(s),
                                            this.composition.removeCurrentAttribute(s),
                                            this.render(),
                                            this.selectionFrozen ? void 0 : this.editorElement.focus()
                                        )
                                    }),
                                    (i.prototype.toolbarWillShowDialog = function () {
                                        return this.composition.expandSelectionForEditing(), this.freezeSelection()
                                    }),
                                    (i.prototype.toolbarDidShowDialog = function (s) {
                                        return this.notifyEditorElement('toolbar-dialog-show', { dialogName: s })
                                    }),
                                    (i.prototype.toolbarDidHideDialog = function (s) {
                                        return (
                                            this.thawSelection(),
                                            this.editorElement.focus(),
                                            this.notifyEditorElement('toolbar-dialog-hide', { dialogName: s })
                                        )
                                    }),
                                    (i.prototype.freezeSelection = function () {
                                        return this.selectionFrozen
                                            ? void 0
                                            : (this.selectionManager.lock(),
                                              this.composition.freezeSelection(),
                                              (this.selectionFrozen = !0),
                                              this.render())
                                    }),
                                    (i.prototype.thawSelection = function () {
                                        return this.selectionFrozen
                                            ? (this.composition.thawSelection(),
                                              this.selectionManager.unlock(),
                                              (this.selectionFrozen = !1),
                                              this.render())
                                            : void 0
                                    }),
                                    (i.prototype.actions = {
                                        undo: {
                                            test: function () {
                                                return this.editor.canUndo()
                                            },
                                            perform: function () {
                                                return this.editor.undo()
                                            },
                                        },
                                        redo: {
                                            test: function () {
                                                return this.editor.canRedo()
                                            },
                                            perform: function () {
                                                return this.editor.redo()
                                            },
                                        },
                                        link: {
                                            test: function () {
                                                return this.editor.canActivateAttribute('href')
                                            },
                                        },
                                        increaseNestingLevel: {
                                            test: function () {
                                                return this.editor.canIncreaseNestingLevel()
                                            },
                                            perform: function () {
                                                return this.editor.increaseNestingLevel() && this.render()
                                            },
                                        },
                                        decreaseNestingLevel: {
                                            test: function () {
                                                return this.editor.canDecreaseNestingLevel()
                                            },
                                            perform: function () {
                                                return this.editor.decreaseNestingLevel() && this.render()
                                            },
                                        },
                                        attachFiles: {
                                            test: function () {
                                                return !0
                                            },
                                            perform: function () {
                                                return g.config.input.pickFiles(this.editor.insertFiles)
                                            },
                                        },
                                    }),
                                    (i.prototype.canInvokeAction = function (s) {
                                        var n, p
                                        return this.actionIsExternal(s)
                                            ? !0
                                            : !!((n = this.actions[s]) != null && (p = n.test) != null && p.call(this))
                                    }),
                                    (i.prototype.invokeAction = function (s) {
                                        var n, p
                                        return this.actionIsExternal(s)
                                            ? this.notifyEditorElement('action-invoke', { actionName: s })
                                            : (n = this.actions[s]) != null && (p = n.perform) != null
                                              ? p.call(this)
                                              : void 0
                                    }),
                                    (i.prototype.actionIsExternal = function (s) {
                                        return /^x-./.test(s)
                                    }),
                                    (i.prototype.getCurrentActions = function () {
                                        var s, n
                                        n = {}
                                        for (s in this.actions) n[s] = this.canInvokeAction(s)
                                        return n
                                    }),
                                    (i.prototype.updateCurrentActions = function () {
                                        var s
                                        return (
                                            (s = this.getCurrentActions()),
                                            b(s, this.currentActions)
                                                ? void 0
                                                : ((this.currentActions = s),
                                                  this.toolbarController.updateActions(this.currentActions),
                                                  this.notifyEditorElement('actions-change', {
                                                      actions: this.currentActions,
                                                  }))
                                        )
                                    }),
                                    (i.prototype.runEditorFilters = function () {
                                        var s, n, p, c, v, t, r, l
                                        for (
                                            l = this.composition.getSnapshot(),
                                                v = this.editor.filters,
                                                p = 0,
                                                c = v.length;
                                            c > p;
                                            p++
                                        )
                                            (n = v[p]),
                                                (s = l.document),
                                                (r = l.selectedRange),
                                                (l = (t = n.call(this.editor, l)) != null ? t : {}),
                                                l.document == null && (l.document = s),
                                                l.selectedRange == null && (l.selectedRange = r)
                                        return u(l, this.composition.getSnapshot())
                                            ? void 0
                                            : this.composition.loadSnapshot(l)
                                    }),
                                    (u = function (s, n) {
                                        return h(s.selectedRange, n.selectedRange) && s.document.isEqualTo(n.document)
                                    }),
                                    (i.prototype.updateInputElement = function () {
                                        var s, n
                                        return (
                                            (s = this.compositionController.getSerializableElement()),
                                            (n = g.serializeToContentType(s, 'text/html')),
                                            this.editorElement.setInputElementValue(n)
                                        )
                                    }),
                                    (i.prototype.notifyEditorElement = function (s, n) {
                                        switch (s) {
                                            case 'document-change':
                                                this.documentChangedSinceLastRender = !0
                                                break
                                            case 'render':
                                                this.documentChangedSinceLastRender &&
                                                    ((this.documentChangedSinceLastRender = !1),
                                                    this.notifyEditorElement('change'))
                                                break
                                            case 'change':
                                            case 'attachment-add':
                                            case 'attachment-edit':
                                            case 'attachment-remove':
                                                this.updateInputElement()
                                        }
                                        return this.editorElement.notify(s, n)
                                    }),
                                    (i.prototype.removeAttachment = function (s) {
                                        return (
                                            this.editor.recordUndoEntry('Delete Attachment'),
                                            this.composition.removeAttachment(s),
                                            this.render()
                                        )
                                    }),
                                    (i.prototype.recordFormattingUndoEntry = function (s) {
                                        var n, p
                                        return (
                                            (n = x(s)),
                                            (p = this.selectionManager.getLocationRange()),
                                            n || !y(p)
                                                ? this.editor.recordUndoEntry('Formatting', {
                                                      context: this.getUndoContext(),
                                                      consolidatable: !0,
                                                  })
                                                : void 0
                                        )
                                    }),
                                    (i.prototype.recordTypingUndoEntry = function () {
                                        return this.editor.recordUndoEntry('Typing', {
                                            context: this.getUndoContext(this.currentAttributes),
                                            consolidatable: !0,
                                        })
                                    }),
                                    (i.prototype.getUndoContext = function () {
                                        var s
                                        return (
                                            (s = 1 <= arguments.length ? a.call(arguments, 0) : []),
                                            [this.getLocationContext(), this.getTimeContext()].concat(a.call(s))
                                        )
                                    }),
                                    (i.prototype.getLocationContext = function () {
                                        var s
                                        return (s = this.selectionManager.getLocationRange()), y(s) ? s[0].index : s
                                    }),
                                    (i.prototype.getTimeContext = function () {
                                        return g.config.undoInterval > 0
                                            ? Math.floor(new Date().getTime() / g.config.undoInterval)
                                            : 0
                                    }),
                                    (i.prototype.isFocused = function () {
                                        var s
                                        return (
                                            this.editorElement ===
                                            ((s = this.editorElement.ownerDocument) != null ? s.activeElement : void 0)
                                        )
                                    }),
                                    (i.prototype.isFocusedInvisibly = function () {
                                        return this.isFocused() && !this.getLocationRange()
                                    }),
                                    i
                                )
                            })(g.Controller))
                    }.call(this),
                    function () {
                        var x,
                            b,
                            y,
                            h,
                            o,
                            e,
                            a,
                            d =
                                [].indexOf ||
                                function (i) {
                                    for (var u = 0, s = this.length; s > u; u++)
                                        if (u in this && this[u] === i) return u
                                    return -1
                                }
                        ;(b = g.browser),
                            (e = g.makeElement),
                            (a = g.triggerEvent),
                            (h = g.handleEvent),
                            (o = g.handleEventOnce),
                            (y = g.findClosestElementFromNode),
                            (x = g.AttachmentView.attachmentSelector),
                            g.registerElement(
                                'trix-editor',
                                (function () {
                                    var i, u, s, n, p, c, v, t, r
                                    return (
                                        (v = 0),
                                        (u = function (l) {
                                            return !document.querySelector(':focus') &&
                                                l.hasAttribute('autofocus') &&
                                                document.querySelector('[autofocus]') === l
                                                ? l.focus()
                                                : void 0
                                        }),
                                        (t = function (l) {
                                            return l.hasAttribute('contenteditable')
                                                ? void 0
                                                : (l.setAttribute('contenteditable', ''),
                                                  o('focus', {
                                                      onElement: l,
                                                      withCallback: function () {
                                                          return s(l)
                                                      },
                                                  }))
                                        }),
                                        (s = function (l) {
                                            return p(l), r(l)
                                        }),
                                        (p = function (l) {
                                            return typeof document.queryCommandSupported == 'function' &&
                                                document.queryCommandSupported('enableObjectResizing')
                                                ? (document.execCommand('enableObjectResizing', !1, !1),
                                                  h('mscontrolselect', { onElement: l, preventDefault: !0 }))
                                                : void 0
                                        }),
                                        (r = function () {
                                            var l
                                            return typeof document.queryCommandSupported == 'function' &&
                                                document.queryCommandSupported('DefaultParagraphSeparator') &&
                                                ((l = g.config.blockAttributes.default.tagName),
                                                l === 'div' || l === 'p')
                                                ? document.execCommand('DefaultParagraphSeparator', !1, l)
                                                : void 0
                                        }),
                                        (i = function (l) {
                                            return l.hasAttribute('role') ? void 0 : l.setAttribute('role', 'textbox')
                                        }),
                                        (c = function (l) {
                                            var A
                                            if (!l.hasAttribute('aria-label') && !l.hasAttribute('aria-labelledby'))
                                                return (
                                                    (A = function () {
                                                        var f, m, C
                                                        return (
                                                            (C = (function () {
                                                                var S, L, O, D
                                                                for (
                                                                    O = l.labels, D = [], S = 0, L = O.length;
                                                                    L > S;
                                                                    S++
                                                                )
                                                                    (f = O[S]), f.contains(l) || D.push(f.textContent)
                                                                return D
                                                            })()),
                                                            (m = C.join(' '))
                                                                ? l.setAttribute('aria-label', m)
                                                                : l.removeAttribute('aria-label')
                                                        )
                                                    })(),
                                                    h('focus', { onElement: l, withCallback: A })
                                                )
                                        }),
                                        (n = (function () {
                                            return b.forcesObjectResizing
                                                ? { display: 'inline', width: 'auto' }
                                                : { display: 'inline-block', width: '1px' }
                                        })()),
                                        {
                                            defaultCSS:
                                                `%t {
  display: block;
}

%t:empty:not(:focus)::before {
  content: attr(placeholder);
  color: graytext;
  cursor: text;
  pointer-events: none;
}

%t a[contenteditable=false] {
  cursor: text;
}

%t img {
  max-width: 100%;
  height: auto;
}

%t ` +
                                                x +
                                                ` figcaption textarea {
  resize: none;
}

%t ` +
                                                x +
                                                ` figcaption textarea.trix-autoresize-clone {
  position: absolute;
  left: -9999px;
  max-height: 0px;
}

%t ` +
                                                x +
                                                ` figcaption[data-trix-placeholder]:empty::before {
  content: attr(data-trix-placeholder);
  color: graytext;
}

%t [data-trix-cursor-target] {
  display: ` +
                                                n.display +
                                                ` !important;
  width: ` +
                                                n.width +
                                                ` !important;
  padding: 0 !important;
  margin: 0 !important;
  border: none !important;
}

%t [data-trix-cursor-target=left] {
  vertical-align: top !important;
  margin-left: -1px !important;
}

%t [data-trix-cursor-target=right] {
  vertical-align: bottom !important;
  margin-right: -1px !important;
}`,
                                            trixId: {
                                                get: function () {
                                                    return this.hasAttribute('trix-id')
                                                        ? this.getAttribute('trix-id')
                                                        : (this.setAttribute('trix-id', ++v), this.trixId)
                                                },
                                            },
                                            labels: {
                                                get: function () {
                                                    var l, A, f
                                                    return (
                                                        (A = []),
                                                        this.id &&
                                                            this.ownerDocument &&
                                                            A.push.apply(
                                                                A,
                                                                this.ownerDocument.querySelectorAll(
                                                                    "label[for='" + this.id + "']",
                                                                ),
                                                            ),
                                                        (l = y(this, { matchingSelector: 'label' })) &&
                                                            ((f = l.control) === this || f === null) &&
                                                            A.push(l),
                                                        A
                                                    )
                                                },
                                            },
                                            toolbarElement: {
                                                get: function () {
                                                    var l, A, f
                                                    return this.hasAttribute('toolbar')
                                                        ? (A = this.ownerDocument) != null
                                                            ? A.getElementById(this.getAttribute('toolbar'))
                                                            : void 0
                                                        : this.parentNode
                                                          ? ((f = 'trix-toolbar-' + this.trixId),
                                                            this.setAttribute('toolbar', f),
                                                            (l = e('trix-toolbar', { id: f })),
                                                            this.parentNode.insertBefore(l, this),
                                                            l)
                                                          : void 0
                                                },
                                            },
                                            inputElement: {
                                                get: function () {
                                                    var l, A, f
                                                    return this.hasAttribute('input')
                                                        ? (f = this.ownerDocument) != null
                                                            ? f.getElementById(this.getAttribute('input'))
                                                            : void 0
                                                        : this.parentNode
                                                          ? ((A = 'trix-input-' + this.trixId),
                                                            this.setAttribute('input', A),
                                                            (l = e('input', { type: 'hidden', id: A })),
                                                            this.parentNode.insertBefore(l, this.nextElementSibling),
                                                            l)
                                                          : void 0
                                                },
                                            },
                                            editor: {
                                                get: function () {
                                                    var l
                                                    return (l = this.editorController) != null ? l.editor : void 0
                                                },
                                            },
                                            name: {
                                                get: function () {
                                                    var l
                                                    return (l = this.inputElement) != null ? l.name : void 0
                                                },
                                            },
                                            value: {
                                                get: function () {
                                                    var l
                                                    return (l = this.inputElement) != null ? l.value : void 0
                                                },
                                                set: function (l) {
                                                    var A
                                                    return (
                                                        (this.defaultValue = l),
                                                        (A = this.editor) != null
                                                            ? A.loadHTML(this.defaultValue)
                                                            : void 0
                                                    )
                                                },
                                            },
                                            notify: function (l, A) {
                                                return this.editorController
                                                    ? a('trix-' + l, { onElement: this, attributes: A })
                                                    : void 0
                                            },
                                            setInputElementValue: function (l) {
                                                var A
                                                return (A = this.inputElement) != null ? (A.value = l) : void 0
                                            },
                                            initialize: function () {
                                                return this.hasAttribute('data-trix-internal')
                                                    ? void 0
                                                    : (t(this), i(this), c(this))
                                            },
                                            connect: function () {
                                                return this.hasAttribute('data-trix-internal')
                                                    ? void 0
                                                    : (this.editorController ||
                                                          (a('trix-before-initialize', { onElement: this }),
                                                          (this.editorController = new g.EditorController({
                                                              editorElement: this,
                                                              html: (this.defaultValue = this.value),
                                                          })),
                                                          requestAnimationFrame(
                                                              (function (l) {
                                                                  return function () {
                                                                      return a('trix-initialize', { onElement: l })
                                                                  }
                                                              })(this),
                                                          )),
                                                      this.editorController.registerSelectionManager(),
                                                      this.registerResetListener(),
                                                      this.registerClickListener(),
                                                      u(this))
                                            },
                                            disconnect: function () {
                                                var l
                                                return (
                                                    (l = this.editorController) != null &&
                                                        l.unregisterSelectionManager(),
                                                    this.unregisterResetListener(),
                                                    this.unregisterClickListener()
                                                )
                                            },
                                            registerResetListener: function () {
                                                return (
                                                    (this.resetListener = this.resetBubbled.bind(this)),
                                                    window.addEventListener('reset', this.resetListener, !1)
                                                )
                                            },
                                            unregisterResetListener: function () {
                                                return window.removeEventListener('reset', this.resetListener, !1)
                                            },
                                            registerClickListener: function () {
                                                return (
                                                    (this.clickListener = this.clickBubbled.bind(this)),
                                                    window.addEventListener('click', this.clickListener, !1)
                                                )
                                            },
                                            unregisterClickListener: function () {
                                                return window.removeEventListener('click', this.clickListener, !1)
                                            },
                                            resetBubbled: function (l) {
                                                var A
                                                if (
                                                    !l.defaultPrevented &&
                                                    l.target === ((A = this.inputElement) != null ? A.form : void 0)
                                                )
                                                    return this.reset()
                                            },
                                            clickBubbled: function (l) {
                                                var A
                                                if (
                                                    !(
                                                        l.defaultPrevented ||
                                                        this.contains(l.target) ||
                                                        !(A = y(l.target, { matchingSelector: 'label' })) ||
                                                        d.call(this.labels, A) < 0
                                                    )
                                                )
                                                    return this.focus()
                                            },
                                            reset: function () {
                                                return (this.value = this.defaultValue)
                                            },
                                        }
                                    )
                                })(),
                            )
                    }.call(this),
                    function () {}.call(this)
            }).call(this),
                typeof V == 'object' && V.exports
                    ? (V.exports = g)
                    : typeof define == 'function' && define.amd && define(g)
        }.call(q)
})
var W = ut(Q(), 1)
W.default.config.blockAttributes.default.tagName = 'p'
W.default.config.blockAttributes.default.breakOnReturn = !0
W.default.config.blockAttributes.heading = { tagName: 'h2', terminal: !0, breakOnReturn: !0, group: !1 }
W.default.config.blockAttributes.subHeading = { tagName: 'h3', terminal: !0, breakOnReturn: !0, group: !1 }
W.default.config.textAttributes.underline = {
    style: { textDecoration: 'underline' },
    inheritable: !0,
    parser: (I) => window.getComputedStyle(I).textDecoration.includes('underline'),
}
W.default.Block.prototype.breaksOnReturn = function () {
    let I = this.getLastAttribute()
    return W.default.getBlockConfig(I || 'default')?.breakOnReturn ?? !1
}
W.default.LineBreakInsertion.prototype.shouldInsertBlockBreak = function () {
    return this.block.hasAttributes() && this.block.isListItem() && !this.block.isEmpty()
        ? this.startLocation.offset > 0
        : this.shouldBreakFormattedBlock()
          ? !1
          : this.breaksOnReturn
}
function ct({ state: I }) {
    return {
        state: I,
        init: function () {
            this.$refs.trix?.editor?.loadHTML(this.state),
                this.$watch('state', () => {
                    document.activeElement !== this.$refs.trix && this.$refs.trix?.editor?.loadHTML(this.state)
                })
        },
    }
}
export { ct as default }
