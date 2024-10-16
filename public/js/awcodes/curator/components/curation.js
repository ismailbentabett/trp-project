function _t(a, t) {
    var e = Object.keys(a)
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(a)
        t &&
            (i = i.filter(function (n) {
                return Object.getOwnPropertyDescriptor(a, n).enumerable
            })),
            e.push.apply(e, i)
    }
    return e
}
function Jt(a) {
    for (var t = 1; t < arguments.length; t++) {
        var e = arguments[t] != null ? arguments[t] : {}
        t % 2
            ? _t(Object(e), !0).forEach(function (i) {
                  vi(a, i, e[i])
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(e))
              : _t(Object(e)).forEach(function (i) {
                    Object.defineProperty(a, i, Object.getOwnPropertyDescriptor(e, i))
                })
    }
    return a
}
function vt(a) {
    '@babel/helpers - typeof'
    return (
        (vt =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t
                  }
                : function (t) {
                      return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t
                  }),
        vt(a)
    )
}
function gi(a, t) {
    if (!(a instanceof t)) throw new TypeError('Cannot call a class as a function')
}
function Yt(a, t) {
    for (var e = 0; e < t.length; e++) {
        var i = t[e]
        ;(i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(a, i.key, i)
    }
}
function mi(a, t, e) {
    return t && Yt(a.prototype, t), e && Yt(a, e), Object.defineProperty(a, 'prototype', { writable: !1 }), a
}
function vi(a, t, e) {
    return (
        t in a ? Object.defineProperty(a, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : (a[t] = e),
        a
    )
}
function ti(a) {
    return wi(a) || bi(a) || yi(a) || xi()
}
function wi(a) {
    if (Array.isArray(a)) return wt(a)
}
function bi(a) {
    if ((typeof Symbol < 'u' && a[Symbol.iterator] != null) || a['@@iterator'] != null) return Array.from(a)
}
function yi(a, t) {
    if (a) {
        if (typeof a == 'string') return wt(a, t)
        var e = Object.prototype.toString.call(a).slice(8, -1)
        if ((e === 'Object' && a.constructor && (e = a.constructor.name), e === 'Map' || e === 'Set'))
            return Array.from(a)
        if (e === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return wt(a, t)
    }
}
function wt(a, t) {
    ;(t == null || t > a.length) && (t = a.length)
    for (var e = 0, i = new Array(t); e < t; e++) i[e] = a[e]
    return i
}
function xi() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
var ft = typeof window < 'u' && typeof window.document < 'u',
    _ = ft ? window : {},
    Ot = ft && _.document.documentElement ? 'ontouchstart' in _.document.documentElement : !1,
    Nt = ft ? 'PointerEvent' in _ : !1,
    y = 'cropper',
    At = 'all',
    ii = 'crop',
    ei = 'move',
    ai = 'zoom',
    G = 'e',
    q = 'w',
    Q = 's',
    P = 'n',
    it = 'ne',
    et = 'nw',
    at = 'se',
    rt = 'sw',
    bt = ''.concat(y, '-crop'),
    zt = ''.concat(y, '-disabled'),
    R = ''.concat(y, '-hidden'),
    Xt = ''.concat(y, '-hide'),
    Di = ''.concat(y, '-invisible'),
    pt = ''.concat(y, '-modal'),
    yt = ''.concat(y, '-move'),
    ot = ''.concat(y, 'Action'),
    ct = ''.concat(y, 'Preview'),
    Rt = 'crop',
    ri = 'move',
    ni = 'none',
    xt = 'crop',
    Dt = 'cropend',
    Mt = 'cropmove',
    Et = 'cropstart',
    Pt = 'dblclick',
    Mi = Ot ? 'touchstart' : 'mousedown',
    Ei = Ot ? 'touchmove' : 'mousemove',
    Ci = Ot ? 'touchend touchcancel' : 'mouseup',
    Wt = Nt ? 'pointerdown' : Mi,
    Ut = Nt ? 'pointermove' : Ei,
    Vt = Nt ? 'pointerup pointercancel' : Ci,
    jt = 'ready',
    $t = 'resize',
    Gt = 'wheel',
    Ct = 'zoom',
    qt = 'image/jpeg',
    Ti = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,
    Oi = /^data:/,
    Ni = /^data:image\/jpeg;base64,/,
    Ai = /^img|canvas$/i,
    oi = 200,
    si = 100,
    Ft = {
        viewMode: 0,
        dragMode: Rt,
        initialAspectRatio: NaN,
        aspectRatio: NaN,
        data: null,
        preview: '',
        responsive: !0,
        restore: !0,
        checkCrossOrigin: !0,
        checkOrientation: !0,
        modal: !0,
        guides: !0,
        center: !0,
        highlight: !0,
        background: !0,
        autoCrop: !0,
        autoCropArea: 0.8,
        movable: !0,
        rotatable: !0,
        scalable: !0,
        zoomable: !0,
        zoomOnTouch: !0,
        zoomOnWheel: !0,
        wheelZoomRatio: 0.1,
        cropBoxMovable: !0,
        cropBoxResizable: !0,
        toggleDragModeOnDblclick: !0,
        minCanvasWidth: 0,
        minCanvasHeight: 0,
        minCropBoxWidth: 0,
        minCropBoxHeight: 0,
        minContainerWidth: oi,
        minContainerHeight: si,
        ready: null,
        cropstart: null,
        cropmove: null,
        cropend: null,
        crop: null,
        zoom: null,
    },
    Ri =
        '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',
    Si = Number.isNaN || _.isNaN
function u(a) {
    return typeof a == 'number' && !Si(a)
}
var Qt = function (t) {
    return t > 0 && t < 1 / 0
}
function gt(a) {
    return typeof a > 'u'
}
function F(a) {
    return vt(a) === 'object' && a !== null
}
var Bi = Object.prototype.hasOwnProperty
function Z(a) {
    if (!F(a)) return !1
    try {
        var t = a.constructor,
            e = t.prototype
        return t && e && Bi.call(e, 'isPrototypeOf')
    } catch {
        return !1
    }
}
function A(a) {
    return typeof a == 'function'
}
var Ii = Array.prototype.slice
function hi(a) {
    return Array.from ? Array.from(a) : Ii.call(a)
}
function M(a, t) {
    return (
        a &&
            A(t) &&
            (Array.isArray(a) || u(a.length)
                ? hi(a).forEach(function (e, i) {
                      t.call(a, e, i, a)
                  })
                : F(a) &&
                  Object.keys(a).forEach(function (e) {
                      t.call(a, a[e], e, a)
                  })),
        a
    )
}
var x =
        Object.assign ||
        function (t) {
            for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n]
            return (
                F(t) &&
                    i.length > 0 &&
                    i.forEach(function (r) {
                        F(r) &&
                            Object.keys(r).forEach(function (o) {
                                t[o] = r[o]
                            })
                    }),
                t
            )
        },
    ki = /\.\d*(?:0|9){12}\d*$/
function J(a) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11
    return ki.test(a) ? Math.round(a * t) / t : a
}
var Li = /^width|height|left|top|marginLeft|marginTop$/
function W(a, t) {
    var e = a.style
    M(t, function (i, n) {
        Li.test(n) && u(i) && (i = ''.concat(i, 'px')), (e[n] = i)
    })
}
function Hi(a, t) {
    return a.classList ? a.classList.contains(t) : a.className.indexOf(t) > -1
}
function O(a, t) {
    if (t) {
        if (u(a.length)) {
            M(a, function (i) {
                O(i, t)
            })
            return
        }
        if (a.classList) {
            a.classList.add(t)
            return
        }
        var e = a.className.trim()
        e ? e.indexOf(t) < 0 && (a.className = ''.concat(e, ' ').concat(t)) : (a.className = t)
    }
}
function H(a, t) {
    if (t) {
        if (u(a.length)) {
            M(a, function (e) {
                H(e, t)
            })
            return
        }
        if (a.classList) {
            a.classList.remove(t)
            return
        }
        a.className.indexOf(t) >= 0 && (a.className = a.className.replace(t, ''))
    }
}
function K(a, t, e) {
    if (t) {
        if (u(a.length)) {
            M(a, function (i) {
                K(i, t, e)
            })
            return
        }
        e ? O(a, t) : H(a, t)
    }
}
var _i = /([a-z\d])([A-Z])/g
function St(a) {
    return a.replace(_i, '$1-$2').toLowerCase()
}
function Tt(a, t) {
    return F(a[t]) ? a[t] : a.dataset ? a.dataset[t] : a.getAttribute('data-'.concat(St(t)))
}
function st(a, t, e) {
    F(e) ? (a[t] = e) : a.dataset ? (a.dataset[t] = e) : a.setAttribute('data-'.concat(St(t)), e)
}
function Yi(a, t) {
    if (F(a[t]))
        try {
            delete a[t]
        } catch {
            a[t] = void 0
        }
    else if (a.dataset)
        try {
            delete a.dataset[t]
        } catch {
            a.dataset[t] = void 0
        }
    else a.removeAttribute('data-'.concat(St(t)))
}
var ci = /\s\s*/,
    li = (function () {
        var a = !1
        if (ft) {
            var t = !1,
                e = function () {},
                i = Object.defineProperty({}, 'once', {
                    get: function () {
                        return (a = !0), t
                    },
                    set: function (r) {
                        t = r
                    },
                })
            _.addEventListener('test', e, i), _.removeEventListener('test', e, i)
        }
        return a
    })()
function k(a, t, e) {
    var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
        n = e
    t.trim()
        .split(ci)
        .forEach(function (r) {
            if (!li) {
                var o = a.listeners
                o &&
                    o[r] &&
                    o[r][e] &&
                    ((n = o[r][e]),
                    delete o[r][e],
                    Object.keys(o[r]).length === 0 && delete o[r],
                    Object.keys(o).length === 0 && delete a.listeners)
            }
            a.removeEventListener(r, n, i)
        })
}
function I(a, t, e) {
    var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
        n = e
    t.trim()
        .split(ci)
        .forEach(function (r) {
            if (i.once && !li) {
                var o = a.listeners,
                    s = o === void 0 ? {} : o
                ;(n = function () {
                    delete s[r][e], a.removeEventListener(r, n, i)
                    for (var l = arguments.length, h = new Array(l), c = 0; c < l; c++) h[c] = arguments[c]
                    e.apply(a, h)
                }),
                    s[r] || (s[r] = {}),
                    s[r][e] && a.removeEventListener(r, s[r][e], i),
                    (s[r][e] = n),
                    (a.listeners = s)
            }
            a.addEventListener(r, n, i)
        })
}
function tt(a, t, e) {
    var i
    return (
        A(Event) && A(CustomEvent)
            ? (i = new CustomEvent(t, { detail: e, bubbles: !0, cancelable: !0 }))
            : ((i = document.createEvent('CustomEvent')), i.initCustomEvent(t, !0, !0, e)),
        a.dispatchEvent(i)
    )
}
function pi(a) {
    var t = a.getBoundingClientRect()
    return {
        left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
        top: t.top + (window.pageYOffset - document.documentElement.clientTop),
    }
}
var mt = _.location,
    zi = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i
function Zt(a) {
    var t = a.match(zi)
    return t !== null && (t[1] !== mt.protocol || t[2] !== mt.hostname || t[3] !== mt.port)
}
function Kt(a) {
    var t = 'timestamp='.concat(new Date().getTime())
    return a + (a.indexOf('?') === -1 ? '?' : '&') + t
}
function nt(a) {
    var t = a.rotate,
        e = a.scaleX,
        i = a.scaleY,
        n = a.translateX,
        r = a.translateY,
        o = []
    u(n) && n !== 0 && o.push('translateX('.concat(n, 'px)')),
        u(r) && r !== 0 && o.push('translateY('.concat(r, 'px)')),
        u(t) && t !== 0 && o.push('rotate('.concat(t, 'deg)')),
        u(e) && e !== 1 && o.push('scaleX('.concat(e, ')')),
        u(i) && i !== 1 && o.push('scaleY('.concat(i, ')'))
    var s = o.length ? o.join(' ') : 'none'
    return { WebkitTransform: s, msTransform: s, transform: s }
}
function Xi(a) {
    var t = Jt({}, a),
        e = 0
    return (
        M(a, function (i, n) {
            delete t[n],
                M(t, function (r) {
                    var o = Math.abs(i.startX - r.startX),
                        s = Math.abs(i.startY - r.startY),
                        f = Math.abs(i.endX - r.endX),
                        l = Math.abs(i.endY - r.endY),
                        h = Math.sqrt(o * o + s * s),
                        c = Math.sqrt(f * f + l * l),
                        p = (c - h) / h
                    Math.abs(p) > Math.abs(e) && (e = p)
                })
        }),
        e
    )
}
function lt(a, t) {
    var e = a.pageX,
        i = a.pageY,
        n = { endX: e, endY: i }
    return t ? n : Jt({ startX: e, startY: i }, n)
}
function Pi(a) {
    var t = 0,
        e = 0,
        i = 0
    return (
        M(a, function (n) {
            var r = n.startX,
                o = n.startY
            ;(t += r), (e += o), (i += 1)
        }),
        (t /= i),
        (e /= i),
        { pageX: t, pageY: e }
    )
}
function U(a) {
    var t = a.aspectRatio,
        e = a.height,
        i = a.width,
        n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'contain',
        r = Qt(i),
        o = Qt(e)
    if (r && o) {
        var s = e * t
        ;(n === 'contain' && s > i) || (n === 'cover' && s < i) ? (e = i / t) : (i = e * t)
    } else r ? (e = i / t) : o && (i = e * t)
    return { width: i, height: e }
}
function Wi(a) {
    var t = a.width,
        e = a.height,
        i = a.degree
    if (((i = Math.abs(i) % 180), i === 90)) return { width: e, height: t }
    var n = ((i % 90) * Math.PI) / 180,
        r = Math.sin(n),
        o = Math.cos(n),
        s = t * o + e * r,
        f = t * r + e * o
    return i > 90 ? { width: f, height: s } : { width: s, height: f }
}
function Ui(a, t, e, i) {
    var n = t.aspectRatio,
        r = t.naturalWidth,
        o = t.naturalHeight,
        s = t.rotate,
        f = s === void 0 ? 0 : s,
        l = t.scaleX,
        h = l === void 0 ? 1 : l,
        c = t.scaleY,
        p = c === void 0 ? 1 : c,
        m = e.aspectRatio,
        g = e.naturalWidth,
        b = e.naturalHeight,
        v = i.fillColor,
        E = v === void 0 ? 'transparent' : v,
        T = i.imageSmoothingEnabled,
        D = T === void 0 ? !0 : T,
        Y = i.imageSmoothingQuality,
        S = Y === void 0 ? 'low' : Y,
        d = i.maxWidth,
        w = d === void 0 ? 1 / 0 : d,
        C = i.maxHeight,
        B = C === void 0 ? 1 / 0 : C,
        z = i.minWidth,
        V = z === void 0 ? 0 : z,
        j = i.minHeight,
        X = j === void 0 ? 0 : j,
        L = document.createElement('canvas'),
        N = L.getContext('2d'),
        $ = U({ aspectRatio: m, width: w, height: B }),
        ht = U({ aspectRatio: m, width: V, height: X }, 'cover'),
        dt = Math.min($.width, Math.max(ht.width, g)),
        ut = Math.min($.height, Math.max(ht.height, b)),
        It = U({ aspectRatio: n, width: w, height: B }),
        kt = U({ aspectRatio: n, width: V, height: X }, 'cover'),
        Lt = Math.min(It.width, Math.max(kt.width, r)),
        Ht = Math.min(It.height, Math.max(kt.height, o)),
        di = [-Lt / 2, -Ht / 2, Lt, Ht]
    return (
        (L.width = J(dt)),
        (L.height = J(ut)),
        (N.fillStyle = E),
        N.fillRect(0, 0, dt, ut),
        N.save(),
        N.translate(dt / 2, ut / 2),
        N.rotate((f * Math.PI) / 180),
        N.scale(h, p),
        (N.imageSmoothingEnabled = D),
        (N.imageSmoothingQuality = S),
        N.drawImage.apply(
            N,
            [a].concat(
                ti(
                    di.map(function (ui) {
                        return Math.floor(J(ui))
                    }),
                ),
            ),
        ),
        N.restore(),
        L
    )
}
var fi = String.fromCharCode
function Vi(a, t, e) {
    var i = ''
    e += t
    for (var n = t; n < e; n += 1) i += fi(a.getUint8(n))
    return i
}
var ji = /^data:.*,/
function $i(a) {
    var t = a.replace(ji, ''),
        e = atob(t),
        i = new ArrayBuffer(e.length),
        n = new Uint8Array(i)
    return (
        M(n, function (r, o) {
            n[o] = e.charCodeAt(o)
        }),
        i
    )
}
function Gi(a, t) {
    for (var e = [], i = 8192, n = new Uint8Array(a); n.length > 0; )
        e.push(fi.apply(null, hi(n.subarray(0, i)))), (n = n.subarray(i))
    return 'data:'.concat(t, ';base64,').concat(btoa(e.join('')))
}
function qi(a) {
    var t = new DataView(a),
        e
    try {
        var i, n, r
        if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
            for (var o = t.byteLength, s = 2; s + 1 < o; ) {
                if (t.getUint8(s) === 255 && t.getUint8(s + 1) === 225) {
                    n = s
                    break
                }
                s += 1
            }
        if (n) {
            var f = n + 4,
                l = n + 10
            if (Vi(t, f, 4) === 'Exif') {
                var h = t.getUint16(l)
                if (((i = h === 18761), (i || h === 19789) && t.getUint16(l + 2, i) === 42)) {
                    var c = t.getUint32(l + 4, i)
                    c >= 8 && (r = l + c)
                }
            }
        }
        if (r) {
            var p = t.getUint16(r, i),
                m,
                g
            for (g = 0; g < p; g += 1)
                if (((m = r + g * 12 + 2), t.getUint16(m, i) === 274)) {
                    ;(m += 8), (e = t.getUint16(m, i)), t.setUint16(m, 1, i)
                    break
                }
        }
    } catch {
        e = 1
    }
    return e
}
function Fi(a) {
    var t = 0,
        e = 1,
        i = 1
    switch (a) {
        case 2:
            e = -1
            break
        case 3:
            t = -180
            break
        case 4:
            i = -1
            break
        case 5:
            ;(t = 90), (i = -1)
            break
        case 6:
            t = 90
            break
        case 7:
            ;(t = 90), (e = -1)
            break
        case 8:
            t = -90
            break
    }
    return { rotate: t, scaleX: e, scaleY: i }
}
var Qi = {
        render: function () {
            this.initContainer(),
                this.initCanvas(),
                this.initCropBox(),
                this.renderCanvas(),
                this.cropped && this.renderCropBox()
        },
        initContainer: function () {
            var t = this.element,
                e = this.options,
                i = this.container,
                n = this.cropper,
                r = Number(e.minContainerWidth),
                o = Number(e.minContainerHeight)
            O(n, R), H(t, R)
            var s = {
                width: Math.max(i.offsetWidth, r >= 0 ? r : oi),
                height: Math.max(i.offsetHeight, o >= 0 ? o : si),
            }
            ;(this.containerData = s), W(n, { width: s.width, height: s.height }), O(t, R), H(n, R)
        },
        initCanvas: function () {
            var t = this.containerData,
                e = this.imageData,
                i = this.options.viewMode,
                n = Math.abs(e.rotate) % 180 === 90,
                r = n ? e.naturalHeight : e.naturalWidth,
                o = n ? e.naturalWidth : e.naturalHeight,
                s = r / o,
                f = t.width,
                l = t.height
            t.height * s > t.width
                ? i === 3
                    ? (f = t.height * s)
                    : (l = t.width / s)
                : i === 3
                  ? (l = t.width / s)
                  : (f = t.height * s)
            var h = { aspectRatio: s, naturalWidth: r, naturalHeight: o, width: f, height: l }
            ;(this.canvasData = h),
                (this.limited = i === 1 || i === 2),
                this.limitCanvas(!0, !0),
                (h.width = Math.min(Math.max(h.width, h.minWidth), h.maxWidth)),
                (h.height = Math.min(Math.max(h.height, h.minHeight), h.maxHeight)),
                (h.left = (t.width - h.width) / 2),
                (h.top = (t.height - h.height) / 2),
                (h.oldLeft = h.left),
                (h.oldTop = h.top),
                (this.initialCanvasData = x({}, h))
        },
        limitCanvas: function (t, e) {
            var i = this.options,
                n = this.containerData,
                r = this.canvasData,
                o = this.cropBoxData,
                s = i.viewMode,
                f = r.aspectRatio,
                l = this.cropped && o
            if (t) {
                var h = Number(i.minCanvasWidth) || 0,
                    c = Number(i.minCanvasHeight) || 0
                s > 1
                    ? ((h = Math.max(h, n.width)),
                      (c = Math.max(c, n.height)),
                      s === 3 && (c * f > h ? (h = c * f) : (c = h / f)))
                    : s > 0 &&
                      (h
                          ? (h = Math.max(h, l ? o.width : 0))
                          : c
                            ? (c = Math.max(c, l ? o.height : 0))
                            : l && ((h = o.width), (c = o.height), c * f > h ? (h = c * f) : (c = h / f)))
                var p = U({ aspectRatio: f, width: h, height: c })
                ;(h = p.width),
                    (c = p.height),
                    (r.minWidth = h),
                    (r.minHeight = c),
                    (r.maxWidth = 1 / 0),
                    (r.maxHeight = 1 / 0)
            }
            if (e)
                if (s > (l ? 0 : 1)) {
                    var m = n.width - r.width,
                        g = n.height - r.height
                    ;(r.minLeft = Math.min(0, m)),
                        (r.minTop = Math.min(0, g)),
                        (r.maxLeft = Math.max(0, m)),
                        (r.maxTop = Math.max(0, g)),
                        l &&
                            this.limited &&
                            ((r.minLeft = Math.min(o.left, o.left + (o.width - r.width))),
                            (r.minTop = Math.min(o.top, o.top + (o.height - r.height))),
                            (r.maxLeft = o.left),
                            (r.maxTop = o.top),
                            s === 2 &&
                                (r.width >= n.width && ((r.minLeft = Math.min(0, m)), (r.maxLeft = Math.max(0, m))),
                                r.height >= n.height && ((r.minTop = Math.min(0, g)), (r.maxTop = Math.max(0, g)))))
                } else (r.minLeft = -r.width), (r.minTop = -r.height), (r.maxLeft = n.width), (r.maxTop = n.height)
        },
        renderCanvas: function (t, e) {
            var i = this.canvasData,
                n = this.imageData
            if (e) {
                var r = Wi({
                        width: n.naturalWidth * Math.abs(n.scaleX || 1),
                        height: n.naturalHeight * Math.abs(n.scaleY || 1),
                        degree: n.rotate || 0,
                    }),
                    o = r.width,
                    s = r.height,
                    f = i.width * (o / i.naturalWidth),
                    l = i.height * (s / i.naturalHeight)
                ;(i.left -= (f - i.width) / 2),
                    (i.top -= (l - i.height) / 2),
                    (i.width = f),
                    (i.height = l),
                    (i.aspectRatio = o / s),
                    (i.naturalWidth = o),
                    (i.naturalHeight = s),
                    this.limitCanvas(!0, !1)
            }
            ;(i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft),
                (i.height > i.maxHeight || i.height < i.minHeight) && (i.top = i.oldTop),
                (i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth)),
                (i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight)),
                this.limitCanvas(!1, !0),
                (i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft)),
                (i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop)),
                (i.oldLeft = i.left),
                (i.oldTop = i.top),
                W(this.canvas, x({ width: i.width, height: i.height }, nt({ translateX: i.left, translateY: i.top }))),
                this.renderImage(t),
                this.cropped && this.limited && this.limitCropBox(!0, !0)
        },
        renderImage: function (t) {
            var e = this.canvasData,
                i = this.imageData,
                n = i.naturalWidth * (e.width / e.naturalWidth),
                r = i.naturalHeight * (e.height / e.naturalHeight)
            x(i, { width: n, height: r, left: (e.width - n) / 2, top: (e.height - r) / 2 }),
                W(
                    this.image,
                    x({ width: i.width, height: i.height }, nt(x({ translateX: i.left, translateY: i.top }, i))),
                ),
                t && this.output()
        },
        initCropBox: function () {
            var t = this.options,
                e = this.canvasData,
                i = t.aspectRatio || t.initialAspectRatio,
                n = Number(t.autoCropArea) || 0.8,
                r = { width: e.width, height: e.height }
            i && (e.height * i > e.width ? (r.height = r.width / i) : (r.width = r.height * i)),
                (this.cropBoxData = r),
                this.limitCropBox(!0, !0),
                (r.width = Math.min(Math.max(r.width, r.minWidth), r.maxWidth)),
                (r.height = Math.min(Math.max(r.height, r.minHeight), r.maxHeight)),
                (r.width = Math.max(r.minWidth, r.width * n)),
                (r.height = Math.max(r.minHeight, r.height * n)),
                (r.left = e.left + (e.width - r.width) / 2),
                (r.top = e.top + (e.height - r.height) / 2),
                (r.oldLeft = r.left),
                (r.oldTop = r.top),
                (this.initialCropBoxData = x({}, r))
        },
        limitCropBox: function (t, e) {
            var i = this.options,
                n = this.containerData,
                r = this.canvasData,
                o = this.cropBoxData,
                s = this.limited,
                f = i.aspectRatio
            if (t) {
                var l = Number(i.minCropBoxWidth) || 0,
                    h = Number(i.minCropBoxHeight) || 0,
                    c = s ? Math.min(n.width, r.width, r.width + r.left, n.width - r.left) : n.width,
                    p = s ? Math.min(n.height, r.height, r.height + r.top, n.height - r.top) : n.height
                ;(l = Math.min(l, n.width)),
                    (h = Math.min(h, n.height)),
                    f &&
                        (l && h ? (h * f > l ? (h = l / f) : (l = h * f)) : l ? (h = l / f) : h && (l = h * f),
                        p * f > c ? (p = c / f) : (c = p * f)),
                    (o.minWidth = Math.min(l, c)),
                    (o.minHeight = Math.min(h, p)),
                    (o.maxWidth = c),
                    (o.maxHeight = p)
            }
            e &&
                (s
                    ? ((o.minLeft = Math.max(0, r.left)),
                      (o.minTop = Math.max(0, r.top)),
                      (o.maxLeft = Math.min(n.width, r.left + r.width) - o.width),
                      (o.maxTop = Math.min(n.height, r.top + r.height) - o.height))
                    : ((o.minLeft = 0),
                      (o.minTop = 0),
                      (o.maxLeft = n.width - o.width),
                      (o.maxTop = n.height - o.height)))
        },
        renderCropBox: function () {
            var t = this.options,
                e = this.containerData,
                i = this.cropBoxData
            ;(i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft),
                (i.height > i.maxHeight || i.height < i.minHeight) && (i.top = i.oldTop),
                (i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth)),
                (i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight)),
                this.limitCropBox(!1, !0),
                (i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft)),
                (i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop)),
                (i.oldLeft = i.left),
                (i.oldTop = i.top),
                t.movable &&
                    t.cropBoxMovable &&
                    st(this.face, ot, i.width >= e.width && i.height >= e.height ? ei : At),
                W(this.cropBox, x({ width: i.width, height: i.height }, nt({ translateX: i.left, translateY: i.top }))),
                this.cropped && this.limited && this.limitCanvas(!0, !0),
                this.disabled || this.output()
        },
        output: function () {
            this.preview(), tt(this.element, xt, this.getData())
        },
    },
    Zi = {
        initPreview: function () {
            var t = this.element,
                e = this.crossOrigin,
                i = this.options.preview,
                n = e ? this.crossOriginUrl : this.url,
                r = t.alt || 'The image to preview',
                o = document.createElement('img')
            if (
                (e && (o.crossOrigin = e),
                (o.src = n),
                (o.alt = r),
                this.viewBox.appendChild(o),
                (this.viewBoxImage = o),
                !!i)
            ) {
                var s = i
                typeof i == 'string' ? (s = t.ownerDocument.querySelectorAll(i)) : i.querySelector && (s = [i]),
                    (this.previews = s),
                    M(s, function (f) {
                        var l = document.createElement('img')
                        st(f, ct, { width: f.offsetWidth, height: f.offsetHeight, html: f.innerHTML }),
                            e && (l.crossOrigin = e),
                            (l.src = n),
                            (l.alt = r),
                            (l.style.cssText =
                                'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"'),
                            (f.innerHTML = ''),
                            f.appendChild(l)
                    })
            }
        },
        resetPreview: function () {
            M(this.previews, function (t) {
                var e = Tt(t, ct)
                W(t, { width: e.width, height: e.height }), (t.innerHTML = e.html), Yi(t, ct)
            })
        },
        preview: function () {
            var t = this.imageData,
                e = this.canvasData,
                i = this.cropBoxData,
                n = i.width,
                r = i.height,
                o = t.width,
                s = t.height,
                f = i.left - e.left - t.left,
                l = i.top - e.top - t.top
            !this.cropped ||
                this.disabled ||
                (W(this.viewBoxImage, x({ width: o, height: s }, nt(x({ translateX: -f, translateY: -l }, t)))),
                M(this.previews, function (h) {
                    var c = Tt(h, ct),
                        p = c.width,
                        m = c.height,
                        g = p,
                        b = m,
                        v = 1
                    n && ((v = p / n), (b = r * v)),
                        r && b > m && ((v = m / r), (g = n * v), (b = m)),
                        W(h, { width: g, height: b }),
                        W(
                            h.getElementsByTagName('img')[0],
                            x({ width: o * v, height: s * v }, nt(x({ translateX: -f * v, translateY: -l * v }, t))),
                        )
                }))
        },
    },
    Ki = {
        bind: function () {
            var t = this.element,
                e = this.options,
                i = this.cropper
            A(e.cropstart) && I(t, Et, e.cropstart),
                A(e.cropmove) && I(t, Mt, e.cropmove),
                A(e.cropend) && I(t, Dt, e.cropend),
                A(e.crop) && I(t, xt, e.crop),
                A(e.zoom) && I(t, Ct, e.zoom),
                I(i, Wt, (this.onCropStart = this.cropStart.bind(this))),
                e.zoomable &&
                    e.zoomOnWheel &&
                    I(i, Gt, (this.onWheel = this.wheel.bind(this)), { passive: !1, capture: !0 }),
                e.toggleDragModeOnDblclick && I(i, Pt, (this.onDblclick = this.dblclick.bind(this))),
                I(t.ownerDocument, Ut, (this.onCropMove = this.cropMove.bind(this))),
                I(t.ownerDocument, Vt, (this.onCropEnd = this.cropEnd.bind(this))),
                e.responsive && I(window, $t, (this.onResize = this.resize.bind(this)))
        },
        unbind: function () {
            var t = this.element,
                e = this.options,
                i = this.cropper
            A(e.cropstart) && k(t, Et, e.cropstart),
                A(e.cropmove) && k(t, Mt, e.cropmove),
                A(e.cropend) && k(t, Dt, e.cropend),
                A(e.crop) && k(t, xt, e.crop),
                A(e.zoom) && k(t, Ct, e.zoom),
                k(i, Wt, this.onCropStart),
                e.zoomable && e.zoomOnWheel && k(i, Gt, this.onWheel, { passive: !1, capture: !0 }),
                e.toggleDragModeOnDblclick && k(i, Pt, this.onDblclick),
                k(t.ownerDocument, Ut, this.onCropMove),
                k(t.ownerDocument, Vt, this.onCropEnd),
                e.responsive && k(window, $t, this.onResize)
        },
    },
    Ji = {
        resize: function () {
            if (!this.disabled) {
                var t = this.options,
                    e = this.container,
                    i = this.containerData,
                    n = e.offsetWidth / i.width,
                    r = e.offsetHeight / i.height,
                    o = Math.abs(n - 1) > Math.abs(r - 1) ? n : r
                if (o !== 1) {
                    var s, f
                    t.restore && ((s = this.getCanvasData()), (f = this.getCropBoxData())),
                        this.render(),
                        t.restore &&
                            (this.setCanvasData(
                                M(s, function (l, h) {
                                    s[h] = l * o
                                }),
                            ),
                            this.setCropBoxData(
                                M(f, function (l, h) {
                                    f[h] = l * o
                                }),
                            ))
                }
            }
        },
        dblclick: function () {
            this.disabled || this.options.dragMode === ni || this.setDragMode(Hi(this.dragBox, bt) ? ri : Rt)
        },
        wheel: function (t) {
            var e = this,
                i = Number(this.options.wheelZoomRatio) || 0.1,
                n = 1
            this.disabled ||
                (t.preventDefault(),
                !this.wheeling &&
                    ((this.wheeling = !0),
                    setTimeout(function () {
                        e.wheeling = !1
                    }, 50),
                    t.deltaY
                        ? (n = t.deltaY > 0 ? 1 : -1)
                        : t.wheelDelta
                          ? (n = -t.wheelDelta / 120)
                          : t.detail && (n = t.detail > 0 ? 1 : -1),
                    this.zoom(-n * i, t)))
        },
        cropStart: function (t) {
            var e = t.buttons,
                i = t.button
            if (
                !(
                    this.disabled ||
                    ((t.type === 'mousedown' || (t.type === 'pointerdown' && t.pointerType === 'mouse')) &&
                        ((u(e) && e !== 1) || (u(i) && i !== 0) || t.ctrlKey))
                )
            ) {
                var n = this.options,
                    r = this.pointers,
                    o
                t.changedTouches
                    ? M(t.changedTouches, function (s) {
                          r[s.identifier] = lt(s)
                      })
                    : (r[t.pointerId || 0] = lt(t)),
                    Object.keys(r).length > 1 && n.zoomable && n.zoomOnTouch ? (o = ai) : (o = Tt(t.target, ot)),
                    Ti.test(o) &&
                        tt(this.element, Et, { originalEvent: t, action: o }) !== !1 &&
                        (t.preventDefault(),
                        (this.action = o),
                        (this.cropping = !1),
                        o === ii && ((this.cropping = !0), O(this.dragBox, pt)))
            }
        },
        cropMove: function (t) {
            var e = this.action
            if (!(this.disabled || !e)) {
                var i = this.pointers
                t.preventDefault(),
                    tt(this.element, Mt, { originalEvent: t, action: e }) !== !1 &&
                        (t.changedTouches
                            ? M(t.changedTouches, function (n) {
                                  x(i[n.identifier] || {}, lt(n, !0))
                              })
                            : x(i[t.pointerId || 0] || {}, lt(t, !0)),
                        this.change(t))
            }
        },
        cropEnd: function (t) {
            if (!this.disabled) {
                var e = this.action,
                    i = this.pointers
                t.changedTouches
                    ? M(t.changedTouches, function (n) {
                          delete i[n.identifier]
                      })
                    : delete i[t.pointerId || 0],
                    e &&
                        (t.preventDefault(),
                        Object.keys(i).length || (this.action = ''),
                        this.cropping &&
                            ((this.cropping = !1), K(this.dragBox, pt, this.cropped && this.options.modal)),
                        tt(this.element, Dt, { originalEvent: t, action: e }))
            }
        },
    },
    te = {
        change: function (t) {
            var e = this.options,
                i = this.canvasData,
                n = this.containerData,
                r = this.cropBoxData,
                o = this.pointers,
                s = this.action,
                f = e.aspectRatio,
                l = r.left,
                h = r.top,
                c = r.width,
                p = r.height,
                m = l + c,
                g = h + p,
                b = 0,
                v = 0,
                E = n.width,
                T = n.height,
                D = !0,
                Y
            !f && t.shiftKey && (f = c && p ? c / p : 1),
                this.limited &&
                    ((b = r.minLeft),
                    (v = r.minTop),
                    (E = b + Math.min(n.width, i.width, i.left + i.width)),
                    (T = v + Math.min(n.height, i.height, i.top + i.height)))
            var S = o[Object.keys(o)[0]],
                d = { x: S.endX - S.startX, y: S.endY - S.startY },
                w = function (B) {
                    switch (B) {
                        case G:
                            m + d.x > E && (d.x = E - m)
                            break
                        case q:
                            l + d.x < b && (d.x = b - l)
                            break
                        case P:
                            h + d.y < v && (d.y = v - h)
                            break
                        case Q:
                            g + d.y > T && (d.y = T - g)
                            break
                    }
                }
            switch (s) {
                case At:
                    ;(l += d.x), (h += d.y)
                    break
                case G:
                    if (d.x >= 0 && (m >= E || (f && (h <= v || g >= T)))) {
                        D = !1
                        break
                    }
                    w(G),
                        (c += d.x),
                        c < 0 && ((s = q), (c = -c), (l -= c)),
                        f && ((p = c / f), (h += (r.height - p) / 2))
                    break
                case P:
                    if (d.y <= 0 && (h <= v || (f && (l <= b || m >= E)))) {
                        D = !1
                        break
                    }
                    w(P),
                        (p -= d.y),
                        (h += d.y),
                        p < 0 && ((s = Q), (p = -p), (h -= p)),
                        f && ((c = p * f), (l += (r.width - c) / 2))
                    break
                case q:
                    if (d.x <= 0 && (l <= b || (f && (h <= v || g >= T)))) {
                        D = !1
                        break
                    }
                    w(q),
                        (c -= d.x),
                        (l += d.x),
                        c < 0 && ((s = G), (c = -c), (l -= c)),
                        f && ((p = c / f), (h += (r.height - p) / 2))
                    break
                case Q:
                    if (d.y >= 0 && (g >= T || (f && (l <= b || m >= E)))) {
                        D = !1
                        break
                    }
                    w(Q),
                        (p += d.y),
                        p < 0 && ((s = P), (p = -p), (h -= p)),
                        f && ((c = p * f), (l += (r.width - c) / 2))
                    break
                case it:
                    if (f) {
                        if (d.y <= 0 && (h <= v || m >= E)) {
                            D = !1
                            break
                        }
                        w(P), (p -= d.y), (h += d.y), (c = p * f)
                    } else
                        w(P),
                            w(G),
                            d.x >= 0 ? (m < E ? (c += d.x) : d.y <= 0 && h <= v && (D = !1)) : (c += d.x),
                            d.y <= 0 ? h > v && ((p -= d.y), (h += d.y)) : ((p -= d.y), (h += d.y))
                    c < 0 && p < 0
                        ? ((s = rt), (p = -p), (c = -c), (h -= p), (l -= c))
                        : c < 0
                          ? ((s = et), (c = -c), (l -= c))
                          : p < 0 && ((s = at), (p = -p), (h -= p))
                    break
                case et:
                    if (f) {
                        if (d.y <= 0 && (h <= v || l <= b)) {
                            D = !1
                            break
                        }
                        w(P), (p -= d.y), (h += d.y), (c = p * f), (l += r.width - c)
                    } else
                        w(P),
                            w(q),
                            d.x <= 0
                                ? l > b
                                    ? ((c -= d.x), (l += d.x))
                                    : d.y <= 0 && h <= v && (D = !1)
                                : ((c -= d.x), (l += d.x)),
                            d.y <= 0 ? h > v && ((p -= d.y), (h += d.y)) : ((p -= d.y), (h += d.y))
                    c < 0 && p < 0
                        ? ((s = at), (p = -p), (c = -c), (h -= p), (l -= c))
                        : c < 0
                          ? ((s = it), (c = -c), (l -= c))
                          : p < 0 && ((s = rt), (p = -p), (h -= p))
                    break
                case rt:
                    if (f) {
                        if (d.x <= 0 && (l <= b || g >= T)) {
                            D = !1
                            break
                        }
                        w(q), (c -= d.x), (l += d.x), (p = c / f)
                    } else
                        w(Q),
                            w(q),
                            d.x <= 0
                                ? l > b
                                    ? ((c -= d.x), (l += d.x))
                                    : d.y >= 0 && g >= T && (D = !1)
                                : ((c -= d.x), (l += d.x)),
                            d.y >= 0 ? g < T && (p += d.y) : (p += d.y)
                    c < 0 && p < 0
                        ? ((s = it), (p = -p), (c = -c), (h -= p), (l -= c))
                        : c < 0
                          ? ((s = at), (c = -c), (l -= c))
                          : p < 0 && ((s = et), (p = -p), (h -= p))
                    break
                case at:
                    if (f) {
                        if (d.x >= 0 && (m >= E || g >= T)) {
                            D = !1
                            break
                        }
                        w(G), (c += d.x), (p = c / f)
                    } else
                        w(Q),
                            w(G),
                            d.x >= 0 ? (m < E ? (c += d.x) : d.y >= 0 && g >= T && (D = !1)) : (c += d.x),
                            d.y >= 0 ? g < T && (p += d.y) : (p += d.y)
                    c < 0 && p < 0
                        ? ((s = et), (p = -p), (c = -c), (h -= p), (l -= c))
                        : c < 0
                          ? ((s = rt), (c = -c), (l -= c))
                          : p < 0 && ((s = it), (p = -p), (h -= p))
                    break
                case ei:
                    this.move(d.x, d.y), (D = !1)
                    break
                case ai:
                    this.zoom(Xi(o), t), (D = !1)
                    break
                case ii:
                    if (!d.x || !d.y) {
                        D = !1
                        break
                    }
                    ;(Y = pi(this.cropper)),
                        (l = S.startX - Y.left),
                        (h = S.startY - Y.top),
                        (c = r.minWidth),
                        (p = r.minHeight),
                        d.x > 0 ? (s = d.y > 0 ? at : it) : d.x < 0 && ((l -= c), (s = d.y > 0 ? rt : et)),
                        d.y < 0 && (h -= p),
                        this.cropped ||
                            (H(this.cropBox, R), (this.cropped = !0), this.limited && this.limitCropBox(!0, !0))
                    break
            }
            D && ((r.width = c), (r.height = p), (r.left = l), (r.top = h), (this.action = s), this.renderCropBox()),
                M(o, function (C) {
                    ;(C.startX = C.endX), (C.startY = C.endY)
                })
        },
    },
    ie = {
        crop: function () {
            return (
                this.ready &&
                    !this.cropped &&
                    !this.disabled &&
                    ((this.cropped = !0),
                    this.limitCropBox(!0, !0),
                    this.options.modal && O(this.dragBox, pt),
                    H(this.cropBox, R),
                    this.setCropBoxData(this.initialCropBoxData)),
                this
            )
        },
        reset: function () {
            return (
                this.ready &&
                    !this.disabled &&
                    ((this.imageData = x({}, this.initialImageData)),
                    (this.canvasData = x({}, this.initialCanvasData)),
                    (this.cropBoxData = x({}, this.initialCropBoxData)),
                    this.renderCanvas(),
                    this.cropped && this.renderCropBox()),
                this
            )
        },
        clear: function () {
            return (
                this.cropped &&
                    !this.disabled &&
                    (x(this.cropBoxData, { left: 0, top: 0, width: 0, height: 0 }),
                    (this.cropped = !1),
                    this.renderCropBox(),
                    this.limitCanvas(!0, !0),
                    this.renderCanvas(),
                    H(this.dragBox, pt),
                    O(this.cropBox, R)),
                this
            )
        },
        replace: function (t) {
            var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
            return (
                !this.disabled &&
                    t &&
                    (this.isImg && (this.element.src = t),
                    e
                        ? ((this.url = t),
                          (this.image.src = t),
                          this.ready &&
                              ((this.viewBoxImage.src = t),
                              M(this.previews, function (i) {
                                  i.getElementsByTagName('img')[0].src = t
                              })))
                        : (this.isImg && (this.replaced = !0),
                          (this.options.data = null),
                          this.uncreate(),
                          this.load(t))),
                this
            )
        },
        enable: function () {
            return this.ready && this.disabled && ((this.disabled = !1), H(this.cropper, zt)), this
        },
        disable: function () {
            return this.ready && !this.disabled && ((this.disabled = !0), O(this.cropper, zt)), this
        },
        destroy: function () {
            var t = this.element
            return t[y]
                ? ((t[y] = void 0), this.isImg && this.replaced && (t.src = this.originalUrl), this.uncreate(), this)
                : this
        },
        move: function (t) {
            var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t,
                i = this.canvasData,
                n = i.left,
                r = i.top
            return this.moveTo(gt(t) ? t : n + Number(t), gt(e) ? e : r + Number(e))
        },
        moveTo: function (t) {
            var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t,
                i = this.canvasData,
                n = !1
            return (
                (t = Number(t)),
                (e = Number(e)),
                this.ready &&
                    !this.disabled &&
                    this.options.movable &&
                    (u(t) && ((i.left = t), (n = !0)), u(e) && ((i.top = e), (n = !0)), n && this.renderCanvas(!0)),
                this
            )
        },
        zoom: function (t, e) {
            var i = this.canvasData
            return (
                (t = Number(t)),
                t < 0 ? (t = 1 / (1 - t)) : (t = 1 + t),
                this.zoomTo((i.width * t) / i.naturalWidth, null, e)
            )
        },
        zoomTo: function (t, e, i) {
            var n = this.options,
                r = this.canvasData,
                o = r.width,
                s = r.height,
                f = r.naturalWidth,
                l = r.naturalHeight
            if (((t = Number(t)), t >= 0 && this.ready && !this.disabled && n.zoomable)) {
                var h = f * t,
                    c = l * t
                if (tt(this.element, Ct, { ratio: t, oldRatio: o / f, originalEvent: i }) === !1) return this
                if (i) {
                    var p = this.pointers,
                        m = pi(this.cropper),
                        g = p && Object.keys(p).length ? Pi(p) : { pageX: i.pageX, pageY: i.pageY }
                    ;(r.left -= (h - o) * ((g.pageX - m.left - r.left) / o)),
                        (r.top -= (c - s) * ((g.pageY - m.top - r.top) / s))
                } else
                    Z(e) && u(e.x) && u(e.y)
                        ? ((r.left -= (h - o) * ((e.x - r.left) / o)), (r.top -= (c - s) * ((e.y - r.top) / s)))
                        : ((r.left -= (h - o) / 2), (r.top -= (c - s) / 2))
                ;(r.width = h), (r.height = c), this.renderCanvas(!0)
            }
            return this
        },
        rotate: function (t) {
            return this.rotateTo((this.imageData.rotate || 0) + Number(t))
        },
        rotateTo: function (t) {
            return (
                (t = Number(t)),
                u(t) &&
                    this.ready &&
                    !this.disabled &&
                    this.options.rotatable &&
                    ((this.imageData.rotate = t % 360), this.renderCanvas(!0, !0)),
                this
            )
        },
        scaleX: function (t) {
            var e = this.imageData.scaleY
            return this.scale(t, u(e) ? e : 1)
        },
        scaleY: function (t) {
            var e = this.imageData.scaleX
            return this.scale(u(e) ? e : 1, t)
        },
        scale: function (t) {
            var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t,
                i = this.imageData,
                n = !1
            return (
                (t = Number(t)),
                (e = Number(e)),
                this.ready &&
                    !this.disabled &&
                    this.options.scalable &&
                    (u(t) && ((i.scaleX = t), (n = !0)),
                    u(e) && ((i.scaleY = e), (n = !0)),
                    n && this.renderCanvas(!0, !0)),
                this
            )
        },
        getData: function () {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
                e = this.options,
                i = this.imageData,
                n = this.canvasData,
                r = this.cropBoxData,
                o
            if (this.ready && this.cropped) {
                o = { x: r.left - n.left, y: r.top - n.top, width: r.width, height: r.height }
                var s = i.width / i.naturalWidth
                if (
                    (M(o, function (h, c) {
                        o[c] = h / s
                    }),
                    t)
                ) {
                    var f = Math.round(o.y + o.height),
                        l = Math.round(o.x + o.width)
                    ;(o.x = Math.round(o.x)), (o.y = Math.round(o.y)), (o.width = l - o.x), (o.height = f - o.y)
                }
            } else o = { x: 0, y: 0, width: 0, height: 0 }
            return (
                e.rotatable && (o.rotate = i.rotate || 0),
                e.scalable && ((o.scaleX = i.scaleX || 1), (o.scaleY = i.scaleY || 1)),
                o
            )
        },
        setData: function (t) {
            var e = this.options,
                i = this.imageData,
                n = this.canvasData,
                r = {}
            if (this.ready && !this.disabled && Z(t)) {
                var o = !1
                e.rotatable && u(t.rotate) && t.rotate !== i.rotate && ((i.rotate = t.rotate), (o = !0)),
                    e.scalable &&
                        (u(t.scaleX) && t.scaleX !== i.scaleX && ((i.scaleX = t.scaleX), (o = !0)),
                        u(t.scaleY) && t.scaleY !== i.scaleY && ((i.scaleY = t.scaleY), (o = !0))),
                    o && this.renderCanvas(!0, !0)
                var s = i.width / i.naturalWidth
                u(t.x) && (r.left = t.x * s + n.left),
                    u(t.y) && (r.top = t.y * s + n.top),
                    u(t.width) && (r.width = t.width * s),
                    u(t.height) && (r.height = t.height * s),
                    this.setCropBoxData(r)
            }
            return this
        },
        getContainerData: function () {
            return this.ready ? x({}, this.containerData) : {}
        },
        getImageData: function () {
            return this.sized ? x({}, this.imageData) : {}
        },
        getCanvasData: function () {
            var t = this.canvasData,
                e = {}
            return (
                this.ready &&
                    M(['left', 'top', 'width', 'height', 'naturalWidth', 'naturalHeight'], function (i) {
                        e[i] = t[i]
                    }),
                e
            )
        },
        setCanvasData: function (t) {
            var e = this.canvasData,
                i = e.aspectRatio
            return (
                this.ready &&
                    !this.disabled &&
                    Z(t) &&
                    (u(t.left) && (e.left = t.left),
                    u(t.top) && (e.top = t.top),
                    u(t.width)
                        ? ((e.width = t.width), (e.height = t.width / i))
                        : u(t.height) && ((e.height = t.height), (e.width = t.height * i)),
                    this.renderCanvas(!0)),
                this
            )
        },
        getCropBoxData: function () {
            var t = this.cropBoxData,
                e
            return (
                this.ready && this.cropped && (e = { left: t.left, top: t.top, width: t.width, height: t.height }),
                e || {}
            )
        },
        setCropBoxData: function (t) {
            var e = this.cropBoxData,
                i = this.options.aspectRatio,
                n,
                r
            return (
                this.ready &&
                    this.cropped &&
                    !this.disabled &&
                    Z(t) &&
                    (u(t.left) && (e.left = t.left),
                    u(t.top) && (e.top = t.top),
                    u(t.width) && t.width !== e.width && ((n = !0), (e.width = t.width)),
                    u(t.height) && t.height !== e.height && ((r = !0), (e.height = t.height)),
                    i && (n ? (e.height = e.width / i) : r && (e.width = e.height * i)),
                    this.renderCropBox()),
                this
            )
        },
        getCroppedCanvas: function () {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
            if (!this.ready || !window.HTMLCanvasElement) return null
            var e = this.canvasData,
                i = Ui(this.image, this.imageData, e, t)
            if (!this.cropped) return i
            var n = this.getData(),
                r = n.x,
                o = n.y,
                s = n.width,
                f = n.height,
                l = i.width / Math.floor(e.naturalWidth)
            l !== 1 && ((r *= l), (o *= l), (s *= l), (f *= l))
            var h = s / f,
                c = U({ aspectRatio: h, width: t.maxWidth || 1 / 0, height: t.maxHeight || 1 / 0 }),
                p = U({ aspectRatio: h, width: t.minWidth || 0, height: t.minHeight || 0 }, 'cover'),
                m = U({
                    aspectRatio: h,
                    width: t.width || (l !== 1 ? i.width : s),
                    height: t.height || (l !== 1 ? i.height : f),
                }),
                g = m.width,
                b = m.height
            ;(g = Math.min(c.width, Math.max(p.width, g))), (b = Math.min(c.height, Math.max(p.height, b)))
            var v = document.createElement('canvas'),
                E = v.getContext('2d')
            ;(v.width = J(g)), (v.height = J(b)), (E.fillStyle = t.fillColor || 'transparent'), E.fillRect(0, 0, g, b)
            var T = t.imageSmoothingEnabled,
                D = T === void 0 ? !0 : T,
                Y = t.imageSmoothingQuality
            ;(E.imageSmoothingEnabled = D), Y && (E.imageSmoothingQuality = Y)
            var S = i.width,
                d = i.height,
                w = r,
                C = o,
                B,
                z,
                V,
                j,
                X,
                L
            w <= -s || w > S
                ? ((w = 0), (B = 0), (V = 0), (X = 0))
                : w <= 0
                  ? ((V = -w), (w = 0), (B = Math.min(S, s + w)), (X = B))
                  : w <= S && ((V = 0), (B = Math.min(s, S - w)), (X = B)),
                B <= 0 || C <= -f || C > d
                    ? ((C = 0), (z = 0), (j = 0), (L = 0))
                    : C <= 0
                      ? ((j = -C), (C = 0), (z = Math.min(d, f + C)), (L = z))
                      : C <= d && ((j = 0), (z = Math.min(f, d - C)), (L = z))
            var N = [w, C, B, z]
            if (X > 0 && L > 0) {
                var $ = g / s
                N.push(V * $, j * $, X * $, L * $)
            }
            return (
                E.drawImage.apply(
                    E,
                    [i].concat(
                        ti(
                            N.map(function (ht) {
                                return Math.floor(J(ht))
                            }),
                        ),
                    ),
                ),
                v
            )
        },
        setAspectRatio: function (t) {
            var e = this.options
            return (
                !this.disabled &&
                    !gt(t) &&
                    ((e.aspectRatio = Math.max(0, t) || NaN),
                    this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())),
                this
            )
        },
        setDragMode: function (t) {
            var e = this.options,
                i = this.dragBox,
                n = this.face
            if (this.ready && !this.disabled) {
                var r = t === Rt,
                    o = e.movable && t === ri
                ;(t = r || o ? t : ni),
                    (e.dragMode = t),
                    st(i, ot, t),
                    K(i, bt, r),
                    K(i, yt, o),
                    e.cropBoxMovable || (st(n, ot, t), K(n, bt, r), K(n, yt, o))
            }
            return this
        },
    },
    ee = _.Cropper,
    Bt = (function () {
        function a(t) {
            var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
            if ((gi(this, a), !t || !Ai.test(t.tagName)))
                throw new Error('The first argument is required and must be an <img> or <canvas> element.')
            ;(this.element = t),
                (this.options = x({}, Ft, Z(e) && e)),
                (this.cropped = !1),
                (this.disabled = !1),
                (this.pointers = {}),
                (this.ready = !1),
                (this.reloading = !1),
                (this.replaced = !1),
                (this.sized = !1),
                (this.sizing = !1),
                this.init()
        }
        return (
            mi(
                a,
                [
                    {
                        key: 'init',
                        value: function () {
                            var e = this.element,
                                i = e.tagName.toLowerCase(),
                                n
                            if (!e[y]) {
                                if (((e[y] = this), i === 'img')) {
                                    if (
                                        ((this.isImg = !0),
                                        (n = e.getAttribute('src') || ''),
                                        (this.originalUrl = n),
                                        !n)
                                    )
                                        return
                                    n = e.src
                                } else i === 'canvas' && window.HTMLCanvasElement && (n = e.toDataURL())
                                this.load(n)
                            }
                        },
                    },
                    {
                        key: 'load',
                        value: function (e) {
                            var i = this
                            if (e) {
                                ;(this.url = e), (this.imageData = {})
                                var n = this.element,
                                    r = this.options
                                if (
                                    (!r.rotatable && !r.scalable && (r.checkOrientation = !1),
                                    !r.checkOrientation || !window.ArrayBuffer)
                                ) {
                                    this.clone()
                                    return
                                }
                                if (Oi.test(e)) {
                                    Ni.test(e) ? this.read($i(e)) : this.clone()
                                    return
                                }
                                var o = new XMLHttpRequest(),
                                    s = this.clone.bind(this)
                                ;(this.reloading = !0),
                                    (this.xhr = o),
                                    (o.onabort = s),
                                    (o.onerror = s),
                                    (o.ontimeout = s),
                                    (o.onprogress = function () {
                                        o.getResponseHeader('content-type') !== qt && o.abort()
                                    }),
                                    (o.onload = function () {
                                        i.read(o.response)
                                    }),
                                    (o.onloadend = function () {
                                        ;(i.reloading = !1), (i.xhr = null)
                                    }),
                                    r.checkCrossOrigin && Zt(e) && n.crossOrigin && (e = Kt(e)),
                                    o.open('GET', e, !0),
                                    (o.responseType = 'arraybuffer'),
                                    (o.withCredentials = n.crossOrigin === 'use-credentials'),
                                    o.send()
                            }
                        },
                    },
                    {
                        key: 'read',
                        value: function (e) {
                            var i = this.options,
                                n = this.imageData,
                                r = qi(e),
                                o = 0,
                                s = 1,
                                f = 1
                            if (r > 1) {
                                this.url = Gi(e, qt)
                                var l = Fi(r)
                                ;(o = l.rotate), (s = l.scaleX), (f = l.scaleY)
                            }
                            i.rotatable && (n.rotate = o), i.scalable && ((n.scaleX = s), (n.scaleY = f)), this.clone()
                        },
                    },
                    {
                        key: 'clone',
                        value: function () {
                            var e = this.element,
                                i = this.url,
                                n = e.crossOrigin,
                                r = i
                            this.options.checkCrossOrigin && Zt(i) && (n || (n = 'anonymous'), (r = Kt(i))),
                                (this.crossOrigin = n),
                                (this.crossOriginUrl = r)
                            var o = document.createElement('img')
                            n && (o.crossOrigin = n),
                                (o.src = r || i),
                                (o.alt = e.alt || 'The image to crop'),
                                (this.image = o),
                                (o.onload = this.start.bind(this)),
                                (o.onerror = this.stop.bind(this)),
                                O(o, Xt),
                                e.parentNode.insertBefore(o, e.nextSibling)
                        },
                    },
                    {
                        key: 'start',
                        value: function () {
                            var e = this,
                                i = this.image
                            ;(i.onload = null), (i.onerror = null), (this.sizing = !0)
                            var n = _.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(_.navigator.userAgent),
                                r = function (l, h) {
                                    x(e.imageData, { naturalWidth: l, naturalHeight: h, aspectRatio: l / h }),
                                        (e.initialImageData = x({}, e.imageData)),
                                        (e.sizing = !1),
                                        (e.sized = !0),
                                        e.build()
                                }
                            if (i.naturalWidth && !n) {
                                r(i.naturalWidth, i.naturalHeight)
                                return
                            }
                            var o = document.createElement('img'),
                                s = document.body || document.documentElement
                            ;(this.sizingImage = o),
                                (o.onload = function () {
                                    r(o.width, o.height), n || s.removeChild(o)
                                }),
                                (o.src = i.src),
                                n ||
                                    ((o.style.cssText =
                                        'left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;'),
                                    s.appendChild(o))
                        },
                    },
                    {
                        key: 'stop',
                        value: function () {
                            var e = this.image
                            ;(e.onload = null), (e.onerror = null), e.parentNode.removeChild(e), (this.image = null)
                        },
                    },
                    {
                        key: 'build',
                        value: function () {
                            if (!(!this.sized || this.ready)) {
                                var e = this.element,
                                    i = this.options,
                                    n = this.image,
                                    r = e.parentNode,
                                    o = document.createElement('div')
                                o.innerHTML = Ri
                                var s = o.querySelector('.'.concat(y, '-container')),
                                    f = s.querySelector('.'.concat(y, '-canvas')),
                                    l = s.querySelector('.'.concat(y, '-drag-box')),
                                    h = s.querySelector('.'.concat(y, '-crop-box')),
                                    c = h.querySelector('.'.concat(y, '-face'))
                                ;(this.container = r),
                                    (this.cropper = s),
                                    (this.canvas = f),
                                    (this.dragBox = l),
                                    (this.cropBox = h),
                                    (this.viewBox = s.querySelector('.'.concat(y, '-view-box'))),
                                    (this.face = c),
                                    f.appendChild(n),
                                    O(e, R),
                                    r.insertBefore(s, e.nextSibling),
                                    H(n, Xt),
                                    this.initPreview(),
                                    this.bind(),
                                    (i.initialAspectRatio = Math.max(0, i.initialAspectRatio) || NaN),
                                    (i.aspectRatio = Math.max(0, i.aspectRatio) || NaN),
                                    (i.viewMode = Math.max(0, Math.min(3, Math.round(i.viewMode))) || 0),
                                    O(h, R),
                                    i.guides || O(h.getElementsByClassName(''.concat(y, '-dashed')), R),
                                    i.center || O(h.getElementsByClassName(''.concat(y, '-center')), R),
                                    i.background && O(s, ''.concat(y, '-bg')),
                                    i.highlight || O(c, Di),
                                    i.cropBoxMovable && (O(c, yt), st(c, ot, At)),
                                    i.cropBoxResizable ||
                                        (O(h.getElementsByClassName(''.concat(y, '-line')), R),
                                        O(h.getElementsByClassName(''.concat(y, '-point')), R)),
                                    this.render(),
                                    (this.ready = !0),
                                    this.setDragMode(i.dragMode),
                                    i.autoCrop && this.crop(),
                                    this.setData(i.data),
                                    A(i.ready) && I(e, jt, i.ready, { once: !0 }),
                                    tt(e, jt)
                            }
                        },
                    },
                    {
                        key: 'unbuild',
                        value: function () {
                            if (this.ready) {
                                ;(this.ready = !1), this.unbind(), this.resetPreview()
                                var e = this.cropper.parentNode
                                e && e.removeChild(this.cropper), H(this.element, R)
                            }
                        },
                    },
                    {
                        key: 'uncreate',
                        value: function () {
                            this.ready
                                ? (this.unbuild(), (this.ready = !1), (this.cropped = !1))
                                : this.sizing
                                  ? ((this.sizingImage.onload = null), (this.sizing = !1), (this.sized = !1))
                                  : this.reloading
                                    ? ((this.xhr.onabort = null), this.xhr.abort())
                                    : this.image && this.stop()
                        },
                    },
                ],
                [
                    {
                        key: 'noConflict',
                        value: function () {
                            return (window.Cropper = ee), a
                        },
                    },
                    {
                        key: 'setDefaults',
                        value: function (e) {
                            x(Ft, Z(e) && e)
                        },
                    },
                ],
            ),
            a
        )
    })()
x(Bt.prototype, Qi, Zi, Ki, Ji, te, ie)
function ae({ statePath: a, fileName: t, fileType: e, presets: i = {} }) {
    return {
        statePath: a,
        filename: t,
        filetype: e,
        cropper: null,
        presets: i,
        preset: 'custom',
        flippedHorizontally: !1,
        flippedVertically: !1,
        format: 'jpg',
        quality: 60,
        key: null,
        finalWidth: 0,
        finalHeight: 0,
        cropBoxData: { left: 0, top: 0, width: 0, height: 0 },
        data: { left: 0, top: 0, width: 0, height: 0, rotate: 0, scaleX: 1, scaleY: 1 },
        init() {
            this.destroy(),
                setTimeout(() => {
                    this.cropper = new Bt(this.$refs.image, { background: !1 })
                }, 100),
                this.$watch('preset', (n) => {
                    if (n === 'custom')
                        this.cropper.reset(), (this.key = null), (this.format = 'jpg'), (this.quality = 60)
                    else {
                        let r = this.cropper.getContainerData(),
                            o = this.cropper.getCropBoxData(),
                            s = this.presets.find((p) => p.key === n),
                            f = s.width,
                            l = s.height,
                            h = Math.round((r.width - f) / 2),
                            c = Math.round((r.height - l) / 2)
                        this.cropper.setCropBoxData({ ...o, left: h, top: c, width: f, height: l }),
                            (this.key = s.key),
                            (this.format = s.format),
                            (this.quality = s.quality)
                    }
                })
        },
        destroy() {
            this.cropper != null && (this.cropper.destroy(), (this.cropper = null))
        },
        setData() {
            ;(this.finalWidth = this.data.width),
                (this.finalHeight = this.data.height),
                (this.data = this.cropper.getData(!0)),
                (this.cropBoxData = this.cropper.getCropBoxData())
        },
        updateData() {
            ;(this.finalWidth = this.data.width),
                (this.finalHeight = this.data.height),
                (this.data = this.cropper.getData(!0)),
                (this.cropBoxData = this.cropper.getCropBoxData())
        },
        setCropBoxX(n) {
            let r = this.cropper.getCropBoxData()
            this.cropper.setCropBoxData({ ...r, left: parseInt(n.target.value) })
        },
        setCropBoxY(n) {
            let r = this.cropper.getCropBoxData()
            this.cropper.setCropBoxData({ ...r, top: parseInt(n.target.value) })
        },
        setCropBoxWidth(n) {
            let r = this.cropper.getCropBoxData()
            this.cropper.setCropBoxData({ ...r, width: parseInt(n.target.value) })
        },
        setCropBoxHeight(n) {
            let r = this.cropper.getCropBoxData()
            this.cropper.setCropBoxData({ ...r, height: parseInt(n.target.value) })
        },
        flipHorizontally() {
            this.cropper.scaleY(this.flippedHorizontally ? 1 : -1),
                (this.flippedHorizontally = !this.flippedHorizontally)
        },
        flipVertically() {
            this.cropper.scaleX(this.flippedVertically ? 1 : -1), (this.flippedVertically = !this.flippedVertically)
        },
        saveCuration() {
            let n = this.cropper.getData(!0)
            ;(n = {
                ...n,
                containerData: this.cropper.getContainerData(),
                imageData: this.cropper.getImageData(),
                canvasData: this.cropper.getCanvasData(),
                croppedCanvasData: this.cropper.getCroppedCanvas(),
                format: this.format,
                quality: this.quality,
                preset: this.preset,
                key: this.key ?? this.preset,
            }),
                this.$wire.saveCuration(n)
        },
    }
}
export { ae as default }
/*! Bundled license information:

cropperjs/dist/cropper.esm.js:
  (*!
   * Cropper.js v1.5.13
   * https://fengyuanchen.github.io/cropperjs
   *
   * Copyright 2015-present Chen Fengyuan
   * Released under the MIT license
   *
   * Date: 2022-11-20T05:30:46.114Z
   *)
*/
