var Oo = Object.defineProperty
var Do = (e, t) => {
    for (var i in t) Oo(e, i, { get: t[i], enumerable: !0 })
}
var $i = {}
Do($i, {
    FileOrigin: () => wt,
    FileStatus: () => st,
    OptionTypes: () => Mi,
    Status: () => Wn,
    create: () => at,
    destroy: () => nt,
    find: () => Di,
    getOptions: () => xi,
    parse: () => Oi,
    registerPlugin: () => ge,
    setOptions: () => yt,
    supported: () => Li,
})
var xo = (e) => e instanceof HTMLElement,
    Po = (e, t = [], i = []) => {
        let a = { ...e },
            n = [],
            r = [],
            o = () => ({ ...a }),
            l = () => {
                let p = [...n]
                return (n.length = 0), p
            },
            s = () => {
                let p = [...r]
                ;(r.length = 0),
                    p.forEach(({ type: m, data: g }) => {
                        u(m, g)
                    })
            },
            u = (p, m, g) => {
                if (g && !document.hidden) {
                    r.push({ type: p, data: m })
                    return
                }
                f[p] && f[p](m), n.push({ type: p, data: m })
            },
            c = (p, ...m) => (h[p] ? h[p](...m) : null),
            d = { getState: o, processActionQueue: l, processDispatchQueue: s, dispatch: u, query: c },
            h = {}
        t.forEach((p) => {
            h = { ...p(a), ...h }
        })
        let f = {}
        return (
            i.forEach((p) => {
                f = { ...p(u, c, a), ...f }
            }),
            d
        )
    },
    Co = (e, t, i) => {
        if (typeof i == 'function') {
            e[t] = i
            return
        }
        Object.defineProperty(e, t, { ...i })
    },
    Z = (e, t) => {
        for (let i in e) e.hasOwnProperty(i) && t(i, e[i])
    },
    Fe = (e) => {
        let t = {}
        return (
            Z(e, (i) => {
                Co(t, i, e[i])
            }),
            t
        )
    },
    ee = (e, t, i = null) => {
        if (i === null) return e.getAttribute(t) || e.hasAttribute(t)
        e.setAttribute(t, i)
    },
    Fo = 'http://www.w3.org/2000/svg',
    zo = ['svg', 'path'],
    Ea = (e) => zo.includes(e),
    $t = (e, t, i = {}) => {
        typeof t == 'object' && ((i = t), (t = null))
        let a = Ea(e) ? document.createElementNS(Fo, e) : document.createElement(e)
        return (
            t && (Ea(e) ? ee(a, 'class', t) : (a.className = t)),
            Z(i, (n, r) => {
                ee(a, n, r)
            }),
            a
        )
    },
    No = (e) => (t, i) => {
        typeof i < 'u' && e.children[i] ? e.insertBefore(t, e.children[i]) : e.appendChild(t)
    },
    Bo = (e, t) => (i, a) => (typeof a < 'u' ? t.splice(a, 0, i) : t.push(i), i),
    Go = (e, t) => (i) => (t.splice(t.indexOf(i), 1), i.element.parentNode && e.removeChild(i.element), i),
    Vo = (() => typeof window < 'u' && typeof window.document < 'u')(),
    an = () => Vo,
    Uo = an() ? $t('svg') : {},
    ko = 'children' in Uo ? (e) => e.children.length : (e) => e.childNodes.length,
    nn = (e, t, i, a) => {
        let n = i[0] || e.left,
            r = i[1] || e.top,
            o = n + e.width,
            l = r + e.height * (a[1] || 1),
            s = {
                element: { ...e },
                inner: { left: e.left, top: e.top, right: e.right, bottom: e.bottom },
                outer: { left: n, top: r, right: o, bottom: l },
            }
        return (
            t
                .filter((u) => !u.isRectIgnored())
                .map((u) => u.rect)
                .forEach((u) => {
                    Ta(s.inner, { ...u.inner }), Ta(s.outer, { ...u.outer })
                }),
            Ia(s.inner),
            (s.outer.bottom += s.element.marginBottom),
            (s.outer.right += s.element.marginRight),
            Ia(s.outer),
            s
        )
    },
    Ta = (e, t) => {
        ;(t.top += e.top),
            (t.right += e.left),
            (t.bottom += e.top),
            (t.left += e.left),
            t.bottom > e.bottom && (e.bottom = t.bottom),
            t.right > e.right && (e.right = t.right)
    },
    Ia = (e) => {
        ;(e.width = e.right - e.left), (e.height = e.bottom - e.top)
    },
    Ve = (e) => typeof e == 'number',
    Ho = (e, t, i, a = 0.001) => Math.abs(e - t) < a && Math.abs(i) < a,
    Wo = ({ stiffness: e = 0.5, damping: t = 0.75, mass: i = 10 } = {}) => {
        let a = null,
            n = null,
            r = 0,
            o = !1,
            u = Fe({
                interpolate: (c, d) => {
                    if (o) return
                    if (!(Ve(a) && Ve(n))) {
                        ;(o = !0), (r = 0)
                        return
                    }
                    let h = -(n - a) * e
                    ;(r += h / i),
                        (n += r),
                        (r *= t),
                        Ho(n, a, r) || d ? ((n = a), (r = 0), (o = !0), u.onupdate(n), u.oncomplete(n)) : u.onupdate(n)
                },
                target: {
                    set: (c) => {
                        if (
                            (Ve(c) && !Ve(n) && (n = c),
                            a === null && ((a = c), (n = c)),
                            (a = c),
                            n === a || typeof a > 'u')
                        ) {
                            ;(o = !0), (r = 0), u.onupdate(n), u.oncomplete(n)
                            return
                        }
                        o = !1
                    },
                    get: () => a,
                },
                resting: { get: () => o },
                onupdate: (c) => {},
                oncomplete: (c) => {},
            })
        return u
    }
var Yo = (e) => (e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e),
    $o = ({ duration: e = 500, easing: t = Yo, delay: i = 0 } = {}) => {
        let a = null,
            n,
            r,
            o = !0,
            l = !1,
            s = null,
            c = Fe({
                interpolate: (d, h) => {
                    o ||
                        s === null ||
                        (a === null && (a = d),
                        !(d - a < i) &&
                            ((n = d - a - i),
                            n >= e || h
                                ? ((n = 1), (r = l ? 0 : 1), c.onupdate(r * s), c.oncomplete(r * s), (o = !0))
                                : ((r = n / e), c.onupdate((n >= 0 ? t(l ? 1 - r : r) : 0) * s))))
                },
                target: {
                    get: () => (l ? 0 : s),
                    set: (d) => {
                        if (s === null) {
                            ;(s = d), c.onupdate(d), c.oncomplete(d)
                            return
                        }
                        d < s ? ((s = 1), (l = !0)) : ((l = !1), (s = d)), (o = !1), (a = null)
                    },
                },
                resting: { get: () => o },
                onupdate: (d) => {},
                oncomplete: (d) => {},
            })
        return c
    },
    ba = { spring: Wo, tween: $o },
    qo = (e, t, i) => {
        let a = e[t] && typeof e[t][i] == 'object' ? e[t][i] : e[t] || e,
            n = typeof a == 'string' ? a : a.type,
            r = typeof a == 'object' ? { ...a } : {}
        return ba[n] ? ba[n](r) : null
    },
    Pi = (e, t, i, a = !1) => {
        ;(t = Array.isArray(t) ? t : [t]),
            t.forEach((n) => {
                e.forEach((r) => {
                    let o = r,
                        l = () => i[r],
                        s = (u) => (i[r] = u)
                    typeof r == 'object' && ((o = r.key), (l = r.getter || l), (s = r.setter || s)),
                        !(n[o] && !a) && (n[o] = { get: l, set: s })
                })
            })
    },
    Xo = ({ mixinConfig: e, viewProps: t, viewInternalAPI: i, viewExternalAPI: a }) => {
        let n = { ...t },
            r = []
        return (
            Z(e, (o, l) => {
                let s = qo(l)
                if (!s) return
                ;(s.onupdate = (c) => {
                    t[o] = c
                }),
                    (s.target = n[o]),
                    Pi(
                        [
                            {
                                key: o,
                                setter: (c) => {
                                    s.target !== c && (s.target = c)
                                },
                                getter: () => t[o],
                            },
                        ],
                        [i, a],
                        t,
                        !0,
                    ),
                    r.push(s)
            }),
            {
                write: (o) => {
                    let l = document.hidden,
                        s = !0
                    return (
                        r.forEach((u) => {
                            u.resting || (s = !1), u.interpolate(o, l)
                        }),
                        s
                    )
                },
                destroy: () => {},
            }
        )
    },
    jo = (e) => (t, i) => {
        e.addEventListener(t, i)
    },
    Qo = (e) => (t, i) => {
        e.removeEventListener(t, i)
    },
    Zo = ({ mixinConfig: e, viewProps: t, viewInternalAPI: i, viewExternalAPI: a, viewState: n, view: r }) => {
        let o = [],
            l = jo(r.element),
            s = Qo(r.element)
        return (
            (a.on = (u, c) => {
                o.push({ type: u, fn: c }), l(u, c)
            }),
            (a.off = (u, c) => {
                o.splice(
                    o.findIndex((d) => d.type === u && d.fn === c),
                    1,
                ),
                    s(u, c)
            }),
            {
                write: () => !0,
                destroy: () => {
                    o.forEach((u) => {
                        s(u.type, u.fn)
                    })
                },
            }
        )
    },
    Ko = ({ mixinConfig: e, viewProps: t, viewExternalAPI: i }) => {
        Pi(e, i, t)
    },
    se = (e) => e != null,
    Jo = {
        opacity: 1,
        scaleX: 1,
        scaleY: 1,
        translateX: 0,
        translateY: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        originX: 0,
        originY: 0,
    },
    el = ({ mixinConfig: e, viewProps: t, viewInternalAPI: i, viewExternalAPI: a, view: n }) => {
        let r = { ...t },
            o = {}
        Pi(e, [i, a], t)
        let l = () => [t.translateX || 0, t.translateY || 0],
            s = () => [t.scaleX || 0, t.scaleY || 0],
            u = () => (n.rect ? nn(n.rect, n.childViews, l(), s()) : null)
        return (
            (i.rect = { get: u }),
            (a.rect = { get: u }),
            e.forEach((c) => {
                t[c] = typeof r[c] > 'u' ? Jo[c] : r[c]
            }),
            {
                write: () => {
                    if (tl(o, t)) return il(n.element, t), Object.assign(o, { ...t }), !0
                },
                destroy: () => {},
            }
        )
    },
    tl = (e, t) => {
        if (Object.keys(e).length !== Object.keys(t).length) return !0
        for (let i in t) if (t[i] !== e[i]) return !0
        return !1
    },
    il = (
        e,
        {
            opacity: t,
            perspective: i,
            translateX: a,
            translateY: n,
            scaleX: r,
            scaleY: o,
            rotateX: l,
            rotateY: s,
            rotateZ: u,
            originX: c,
            originY: d,
            width: h,
            height: f,
        },
    ) => {
        let p = '',
            m = ''
        ;(se(c) || se(d)) && (m += `transform-origin: ${c || 0}px ${d || 0}px;`),
            se(i) && (p += `perspective(${i}px) `),
            (se(a) || se(n)) && (p += `translate3d(${a || 0}px, ${n || 0}px, 0) `),
            (se(r) || se(o)) && (p += `scale3d(${se(r) ? r : 1}, ${se(o) ? o : 1}, 1) `),
            se(u) && (p += `rotateZ(${u}rad) `),
            se(l) && (p += `rotateX(${l}rad) `),
            se(s) && (p += `rotateY(${s}rad) `),
            p.length && (m += `transform:${p};`),
            se(t) &&
                ((m += `opacity:${t};`),
                t === 0 && (m += 'visibility:hidden;'),
                t < 1 && (m += 'pointer-events:none;')),
            se(f) && (m += `height:${f}px;`),
            se(h) && (m += `width:${h}px;`)
        let g = e.elementCurrentStyle || ''
        ;(m.length !== g.length || m !== g) && ((e.style.cssText = m), (e.elementCurrentStyle = m))
    },
    al = { styles: el, listeners: Zo, animations: Xo, apis: Ko },
    _a = (e = {}, t = {}, i = {}) => (
        t.layoutCalculated ||
            ((e.paddingTop = parseInt(i.paddingTop, 10) || 0),
            (e.marginTop = parseInt(i.marginTop, 10) || 0),
            (e.marginRight = parseInt(i.marginRight, 10) || 0),
            (e.marginBottom = parseInt(i.marginBottom, 10) || 0),
            (e.marginLeft = parseInt(i.marginLeft, 10) || 0),
            (t.layoutCalculated = !0)),
        (e.left = t.offsetLeft || 0),
        (e.top = t.offsetTop || 0),
        (e.width = t.offsetWidth || 0),
        (e.height = t.offsetHeight || 0),
        (e.right = e.left + e.width),
        (e.bottom = e.top + e.height),
        (e.scrollTop = t.scrollTop),
        (e.hidden = t.offsetParent === null),
        e
    ),
    te =
        ({
            tag: e = 'div',
            name: t = null,
            attributes: i = {},
            read: a = () => {},
            write: n = () => {},
            create: r = () => {},
            destroy: o = () => {},
            filterFrameActionsForChild: l = (f, p) => p,
            didCreateView: s = () => {},
            didWriteView: u = () => {},
            ignoreRect: c = !1,
            ignoreRectUpdate: d = !1,
            mixins: h = [],
        } = {}) =>
        (f, p = {}) => {
            let m = $t(e, `filepond--${t}`, i),
                g = window.getComputedStyle(m, null),
                b = _a(),
                E = null,
                T = !1,
                _ = [],
                y = [],
                I = {},
                A = {},
                R = [n],
                S = [a],
                x = [o],
                D = () => m,
                O = () => _.concat(),
                z = () => I,
                v = (U) => (W, $) => W(U, $),
                P = () => E || ((E = nn(b, _, [0, 0], [1, 1])), E),
                w = () => g,
                L = () => {
                    ;(E = null), _.forEach(($) => $._read()), !(d && b.width && b.height) && _a(b, m, g)
                    let W = { root: k, props: p, rect: b }
                    S.forEach(($) => $(W))
                },
                F = (U, W, $) => {
                    let ae = W.length === 0
                    return (
                        R.forEach((X) => {
                            X({ props: p, root: k, actions: W, timestamp: U, shouldOptimize: $ }) === !1 && (ae = !1)
                        }),
                        y.forEach((X) => {
                            X.write(U) === !1 && (ae = !1)
                        }),
                        _.filter((X) => !!X.element.parentNode).forEach((X) => {
                            X._write(U, l(X, W), $) || (ae = !1)
                        }),
                        _.forEach((X, Bt) => {
                            X.element.parentNode ||
                                (k.appendChild(X.element, Bt), X._read(), X._write(U, l(X, W), $), (ae = !1))
                        }),
                        (T = ae),
                        u({ props: p, root: k, actions: W, timestamp: U }),
                        ae
                    )
                },
                C = () => {
                    y.forEach((U) => U.destroy()),
                        x.forEach((U) => {
                            U({ root: k, props: p })
                        }),
                        _.forEach((U) => U._destroy())
                },
                V = { element: { get: D }, style: { get: w }, childViews: { get: O } },
                G = {
                    ...V,
                    rect: { get: P },
                    ref: { get: z },
                    is: (U) => t === U,
                    appendChild: No(m),
                    createChildView: v(f),
                    linkView: (U) => (_.push(U), U),
                    unlinkView: (U) => {
                        _.splice(_.indexOf(U), 1)
                    },
                    appendChildView: Bo(m, _),
                    removeChildView: Go(m, _),
                    registerWriter: (U) => R.push(U),
                    registerReader: (U) => S.push(U),
                    registerDestroyer: (U) => x.push(U),
                    invalidateLayout: () => (m.layoutCalculated = !1),
                    dispatch: f.dispatch,
                    query: f.query,
                },
                B = {
                    element: { get: D },
                    childViews: { get: O },
                    rect: { get: P },
                    resting: { get: () => T },
                    isRectIgnored: () => c,
                    _read: L,
                    _write: F,
                    _destroy: C,
                },
                N = { ...V, rect: { get: () => b } }
            Object.keys(h)
                .sort((U, W) => (U === 'styles' ? 1 : W === 'styles' ? -1 : 0))
                .forEach((U) => {
                    let W = al[U]({
                        mixinConfig: h[U],
                        viewProps: p,
                        viewState: A,
                        viewInternalAPI: G,
                        viewExternalAPI: B,
                        view: Fe(N),
                    })
                    W && y.push(W)
                })
            let k = Fe(G)
            r({ root: k, props: p })
            let q = ko(m)
            return (
                _.forEach((U, W) => {
                    k.appendChild(U.element, q + W)
                }),
                s(k),
                Fe(B)
            )
        },
    nl = (e, t, i = 60) => {
        let a = '__framePainter'
        if (window[a]) {
            window[a].readers.push(e), window[a].writers.push(t)
            return
        }
        window[a] = { readers: [e], writers: [t] }
        let n = window[a],
            r = 1e3 / i,
            o = null,
            l = null,
            s = null,
            u = null,
            c = () => {
                document.hidden
                    ? ((s = () => window.setTimeout(() => d(performance.now()), r)), (u = () => window.clearTimeout(l)))
                    : ((s = () => window.requestAnimationFrame(d)), (u = () => window.cancelAnimationFrame(l)))
            }
        document.addEventListener('visibilitychange', () => {
            u && u(), c(), d(performance.now())
        })
        let d = (h) => {
            ;(l = s(d)), o || (o = h)
            let f = h - o
            f <= r || ((o = h - (f % r)), n.readers.forEach((p) => p()), n.writers.forEach((p) => p(h)))
        }
        return (
            c(),
            d(performance.now()),
            {
                pause: () => {
                    u(l)
                },
            }
        )
    },
    de =
        (e, t) =>
        ({ root: i, props: a, actions: n = [], timestamp: r, shouldOptimize: o }) => {
            n
                .filter((l) => e[l.type])
                .forEach((l) => e[l.type]({ root: i, props: a, action: l.data, timestamp: r, shouldOptimize: o })),
                t && t({ root: i, props: a, actions: n, timestamp: r, shouldOptimize: o })
        },
    Ra = (e, t) => t.parentNode.insertBefore(e, t),
    ya = (e, t) => t.parentNode.insertBefore(e, t.nextSibling),
    Qt = (e) => Array.isArray(e),
    xe = (e) => e == null,
    rl = (e) => e.trim(),
    Zt = (e) => '' + e,
    ol = (e, t = ',') =>
        xe(e)
            ? []
            : Qt(e)
              ? e
              : Zt(e)
                    .split(t)
                    .map(rl)
                    .filter((i) => i.length),
    rn = (e) => typeof e == 'boolean',
    on = (e) => (rn(e) ? e : e === 'true'),
    ce = (e) => typeof e == 'string',
    ln = (e) => (Ve(e) ? e : ce(e) ? Zt(e).replace(/[a-z]+/gi, '') : 0),
    Yt = (e) => parseInt(ln(e), 10),
    Sa = (e) => parseFloat(ln(e)),
    lt = (e) => Ve(e) && isFinite(e) && Math.floor(e) === e,
    wa = (e, t = 1e3) => {
        if (lt(e)) return e
        let i = Zt(e).trim()
        return /MB$/i.test(i)
            ? ((i = i.replace(/MB$i/, '').trim()), Yt(i) * t * t)
            : /KB/i.test(i)
              ? ((i = i.replace(/KB$i/, '').trim()), Yt(i) * t)
              : Yt(i)
    },
    Ue = (e) => typeof e == 'function',
    ll = (e) => {
        let t = self,
            i = e.split('.'),
            a = null
        for (; (a = i.shift()); ) if (((t = t[a]), !t)) return null
        return t
    },
    Aa = { process: 'POST', patch: 'PATCH', revert: 'DELETE', fetch: 'GET', restore: 'GET', load: 'GET' },
    sl = (e) => {
        let t = {}
        return (
            (t.url = ce(e) ? e : e.url || ''),
            (t.timeout = e.timeout ? parseInt(e.timeout, 10) : 0),
            (t.headers = e.headers ? e.headers : {}),
            Z(Aa, (i) => {
                t[i] = cl(i, e[i], Aa[i], t.timeout, t.headers)
            }),
            (t.process = e.process || ce(e) || e.url ? t.process : null),
            (t.remove = e.remove || null),
            delete t.headers,
            t
        )
    },
    cl = (e, t, i, a, n) => {
        if (t === null) return null
        if (typeof t == 'function') return t
        let r = {
            url: i === 'GET' || i === 'PATCH' ? `?${e}=` : '',
            method: i,
            headers: n,
            withCredentials: !1,
            timeout: a,
            onload: null,
            ondata: null,
            onerror: null,
        }
        if (ce(t)) return (r.url = t), r
        if ((Object.assign(r, t), ce(r.headers))) {
            let o = r.headers.split(/:(.+)/)
            r.headers = { header: o[0], value: o[1] }
        }
        return (r.withCredentials = on(r.withCredentials)), r
    },
    dl = (e) => sl(e),
    ul = (e) => e === null,
    re = (e) => typeof e == 'object' && e !== null,
    hl = (e) => re(e) && ce(e.url) && re(e.process) && re(e.revert) && re(e.restore) && re(e.fetch),
    bi = (e) =>
        Qt(e)
            ? 'array'
            : ul(e)
              ? 'null'
              : lt(e)
                ? 'int'
                : /^[0-9]+ ?(?:GB|MB|KB)$/gi.test(e)
                  ? 'bytes'
                  : hl(e)
                    ? 'api'
                    : typeof e,
    fl = (e) =>
        e
            .replace(/{\s*'/g, '{"')
            .replace(/'\s*}/g, '"}')
            .replace(/'\s*:/g, '":')
            .replace(/:\s*'/g, ':"')
            .replace(/,\s*'/g, ',"')
            .replace(/'\s*,/g, '",'),
    pl = {
        array: ol,
        boolean: on,
        int: (e) => (bi(e) === 'bytes' ? wa(e) : Yt(e)),
        number: Sa,
        float: Sa,
        bytes: wa,
        string: (e) => (Ue(e) ? e : Zt(e)),
        function: (e) => ll(e),
        serverapi: dl,
        object: (e) => {
            try {
                return JSON.parse(fl(e))
            } catch {
                return null
            }
        },
    },
    ml = (e, t) => pl[t](e),
    sn = (e, t, i) => {
        if (e === t) return e
        let a = bi(e)
        if (a !== i) {
            let n = ml(e, i)
            if (((a = bi(n)), n === null))
                throw `Trying to assign value with incorrect type to "${option}", allowed type: "${i}"`
            e = n
        }
        return e
    },
    gl = (e, t) => {
        let i = e
        return {
            enumerable: !0,
            get: () => i,
            set: (a) => {
                i = sn(a, e, t)
            },
        }
    },
    El = (e) => {
        let t = {}
        return (
            Z(e, (i) => {
                let a = e[i]
                t[i] = gl(a[0], a[1])
            }),
            Fe(t)
        )
    },
    Tl = (e) => ({ items: [], listUpdateTimeout: null, itemUpdateTimeout: null, processingQueue: [], options: El(e) }),
    Kt = (e, t = '-') =>
        e
            .split(/(?=[A-Z])/)
            .map((i) => i.toLowerCase())
            .join(t),
    Il = (e, t) => {
        let i = {}
        return (
            Z(t, (a) => {
                i[a] = {
                    get: () => e.getState().options[a],
                    set: (n) => {
                        e.dispatch(`SET_${Kt(a, '_').toUpperCase()}`, { value: n })
                    },
                }
            }),
            i
        )
    },
    bl = (e) => (t, i, a) => {
        let n = {}
        return (
            Z(e, (r) => {
                let o = Kt(r, '_').toUpperCase()
                n[`SET_${o}`] = (l) => {
                    try {
                        a.options[r] = l.value
                    } catch {}
                    t(`DID_SET_${o}`, { value: a.options[r] })
                }
            }),
            n
        )
    },
    _l = (e) => (t) => {
        let i = {}
        return (
            Z(e, (a) => {
                i[`GET_${Kt(a, '_').toUpperCase()}`] = (n) => t.options[a]
            }),
            i
        )
    },
    Ie = { API: 1, DROP: 2, BROWSE: 3, PASTE: 4, NONE: 5 },
    Ci = () => Math.random().toString(36).substring(2, 11),
    Fi = (e, t) => e.splice(t, 1),
    Rl = (e, t) => {
        t ? e() : document.hidden ? Promise.resolve(1).then(e) : setTimeout(e, 0)
    },
    Jt = () => {
        let e = [],
            t = (a, n) => {
                Fi(
                    e,
                    e.findIndex((r) => r.event === a && (r.cb === n || !n)),
                )
            },
            i = (a, n, r) => {
                e.filter((o) => o.event === a)
                    .map((o) => o.cb)
                    .forEach((o) => Rl(() => o(...n), r))
            }
        return {
            fireSync: (a, ...n) => {
                i(a, n, !0)
            },
            fire: (a, ...n) => {
                i(a, n, !1)
            },
            on: (a, n) => {
                e.push({ event: a, cb: n })
            },
            onOnce: (a, n) => {
                e.push({
                    event: a,
                    cb: (...r) => {
                        t(a, n), n(...r)
                    },
                })
            },
            off: t,
        }
    },
    cn = (e, t, i) => {
        Object.getOwnPropertyNames(e)
            .filter((a) => !i.includes(a))
            .forEach((a) => Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a)))
    },
    yl = [
        'fire',
        'process',
        'revert',
        'load',
        'on',
        'off',
        'onOnce',
        'retryLoad',
        'extend',
        'archive',
        'archived',
        'release',
        'released',
        'requestProcessing',
        'freeze',
    ],
    ue = (e) => {
        let t = {}
        return cn(e, t, yl), t
    },
    Sl = (e) => {
        e.forEach((t, i) => {
            t.released && Fi(e, i)
        })
    },
    H = {
        INIT: 1,
        IDLE: 2,
        PROCESSING_QUEUED: 9,
        PROCESSING: 3,
        PROCESSING_COMPLETE: 5,
        PROCESSING_ERROR: 6,
        PROCESSING_REVERT_ERROR: 10,
        LOADING: 7,
        LOAD_ERROR: 8,
    },
    ne = { INPUT: 1, LIMBO: 2, LOCAL: 3 },
    dn = (e) => /[^0-9]+/.exec(e),
    un = () => dn((1.1).toLocaleString())[0],
    wl = () => {
        let e = un(),
            t = (1e3).toLocaleString(),
            i = (1e3).toString()
        return t !== i ? dn(t)[0] : e === '.' ? ',' : '.'
    },
    M = {
        BOOLEAN: 'boolean',
        INT: 'int',
        NUMBER: 'number',
        STRING: 'string',
        ARRAY: 'array',
        OBJECT: 'object',
        FUNCTION: 'function',
        ACTION: 'action',
        SERVER_API: 'serverapi',
        REGEX: 'regex',
    },
    zi = [],
    ye = (e, t, i) =>
        new Promise((a, n) => {
            let r = zi.filter((l) => l.key === e).map((l) => l.cb)
            if (r.length === 0) {
                a(t)
                return
            }
            let o = r.shift()
            r.reduce((l, s) => l.then((u) => s(u, i)), o(t, i))
                .then((l) => a(l))
                .catch((l) => n(l))
        }),
    $e = (e, t, i) => zi.filter((a) => a.key === e).map((a) => a.cb(t, i)),
    Al = (e, t) => zi.push({ key: e, cb: t }),
    vl = (e) => Object.assign(et, e),
    qt = () => ({ ...et }),
    Ll = (e) => {
        Z(e, (t, i) => {
            et[t] && (et[t][0] = sn(i, et[t][0], et[t][1]))
        })
    },
    et = {
        id: [null, M.STRING],
        name: ['filepond', M.STRING],
        disabled: [!1, M.BOOLEAN],
        className: [null, M.STRING],
        required: [!1, M.BOOLEAN],
        captureMethod: [null, M.STRING],
        allowSyncAcceptAttribute: [!0, M.BOOLEAN],
        allowDrop: [!0, M.BOOLEAN],
        allowBrowse: [!0, M.BOOLEAN],
        allowPaste: [!0, M.BOOLEAN],
        allowMultiple: [!1, M.BOOLEAN],
        allowReplace: [!0, M.BOOLEAN],
        allowRevert: [!0, M.BOOLEAN],
        allowRemove: [!0, M.BOOLEAN],
        allowProcess: [!0, M.BOOLEAN],
        allowReorder: [!1, M.BOOLEAN],
        allowDirectoriesOnly: [!1, M.BOOLEAN],
        storeAsFile: [!1, M.BOOLEAN],
        forceRevert: [!1, M.BOOLEAN],
        maxFiles: [null, M.INT],
        checkValidity: [!1, M.BOOLEAN],
        itemInsertLocationFreedom: [!0, M.BOOLEAN],
        itemInsertLocation: ['before', M.STRING],
        itemInsertInterval: [75, M.INT],
        dropOnPage: [!1, M.BOOLEAN],
        dropOnElement: [!0, M.BOOLEAN],
        dropValidation: [!1, M.BOOLEAN],
        ignoredFiles: [['.ds_store', 'thumbs.db', 'desktop.ini'], M.ARRAY],
        instantUpload: [!0, M.BOOLEAN],
        maxParallelUploads: [2, M.INT],
        allowMinimumUploadDuration: [!0, M.BOOLEAN],
        chunkUploads: [!1, M.BOOLEAN],
        chunkForce: [!1, M.BOOLEAN],
        chunkSize: [5e6, M.INT],
        chunkRetryDelays: [[500, 1e3, 3e3], M.ARRAY],
        server: [null, M.SERVER_API],
        fileSizeBase: [1e3, M.INT],
        labelFileSizeBytes: ['bytes', M.STRING],
        labelFileSizeKilobytes: ['KB', M.STRING],
        labelFileSizeMegabytes: ['MB', M.STRING],
        labelFileSizeGigabytes: ['GB', M.STRING],
        labelDecimalSeparator: [un(), M.STRING],
        labelThousandsSeparator: [wl(), M.STRING],
        labelIdle: ['Drag & Drop your files or <span class="filepond--label-action">Browse</span>', M.STRING],
        labelInvalidField: ['Field contains invalid files', M.STRING],
        labelFileWaitingForSize: ['Waiting for size', M.STRING],
        labelFileSizeNotAvailable: ['Size not available', M.STRING],
        labelFileCountSingular: ['file in list', M.STRING],
        labelFileCountPlural: ['files in list', M.STRING],
        labelFileLoading: ['Loading', M.STRING],
        labelFileAdded: ['Added', M.STRING],
        labelFileLoadError: ['Error during load', M.STRING],
        labelFileRemoved: ['Removed', M.STRING],
        labelFileRemoveError: ['Error during remove', M.STRING],
        labelFileProcessing: ['Uploading', M.STRING],
        labelFileProcessingComplete: ['Upload complete', M.STRING],
        labelFileProcessingAborted: ['Upload cancelled', M.STRING],
        labelFileProcessingError: ['Error during upload', M.STRING],
        labelFileProcessingRevertError: ['Error during revert', M.STRING],
        labelTapToCancel: ['tap to cancel', M.STRING],
        labelTapToRetry: ['tap to retry', M.STRING],
        labelTapToUndo: ['tap to undo', M.STRING],
        labelButtonRemoveItem: ['Remove', M.STRING],
        labelButtonAbortItemLoad: ['Abort', M.STRING],
        labelButtonRetryItemLoad: ['Retry', M.STRING],
        labelButtonAbortItemProcessing: ['Cancel', M.STRING],
        labelButtonUndoItemProcessing: ['Undo', M.STRING],
        labelButtonRetryItemProcessing: ['Retry', M.STRING],
        labelButtonProcessItem: ['Upload', M.STRING],
        iconRemove: [
            '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"/></svg>',
            M.STRING,
        ],
        iconProcess: [
            '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M14 10.414v3.585a1 1 0 0 1-2 0v-3.585l-1.293 1.293a1 1 0 0 1-1.414-1.415l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.415L14 10.414zM9 18a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2H9z" fill="currentColor" fill-rule="evenodd"/></svg>',
            M.STRING,
        ],
        iconRetry: [
            '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M10.81 9.185l-.038.02A4.997 4.997 0 0 0 8 13.683a5 5 0 0 0 5 5 5 5 0 0 0 5-5 1 1 0 0 1 2 0A7 7 0 1 1 9.722 7.496l-.842-.21a.999.999 0 1 1 .484-1.94l3.23.806c.535.133.86.675.73 1.21l-.804 3.233a.997.997 0 0 1-1.21.73.997.997 0 0 1-.73-1.21l.23-.928v-.002z" fill="currentColor" fill-rule="nonzero"/></svg>',
            M.STRING,
        ],
        iconUndo: [
            '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M9.185 10.81l.02-.038A4.997 4.997 0 0 1 13.683 8a5 5 0 0 1 5 5 5 5 0 0 1-5 5 1 1 0 0 0 0 2A7 7 0 1 0 7.496 9.722l-.21-.842a.999.999 0 1 0-1.94.484l.806 3.23c.133.535.675.86 1.21.73l3.233-.803a.997.997 0 0 0 .73-1.21.997.997 0 0 0-1.21-.73l-.928.23-.002-.001z" fill="currentColor" fill-rule="nonzero"/></svg>',
            M.STRING,
        ],
        iconDone: [
            '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M18.293 9.293a1 1 0 0 1 1.414 1.414l-7.002 7a1 1 0 0 1-1.414 0l-3.998-4a1 1 0 1 1 1.414-1.414L12 15.586l6.294-6.293z" fill="currentColor" fill-rule="nonzero"/></svg>',
            M.STRING,
        ],
        oninit: [null, M.FUNCTION],
        onwarning: [null, M.FUNCTION],
        onerror: [null, M.FUNCTION],
        onactivatefile: [null, M.FUNCTION],
        oninitfile: [null, M.FUNCTION],
        onaddfilestart: [null, M.FUNCTION],
        onaddfileprogress: [null, M.FUNCTION],
        onaddfile: [null, M.FUNCTION],
        onprocessfilestart: [null, M.FUNCTION],
        onprocessfileprogress: [null, M.FUNCTION],
        onprocessfileabort: [null, M.FUNCTION],
        onprocessfilerevert: [null, M.FUNCTION],
        onprocessfile: [null, M.FUNCTION],
        onprocessfiles: [null, M.FUNCTION],
        onremovefile: [null, M.FUNCTION],
        onpreparefile: [null, M.FUNCTION],
        onupdatefiles: [null, M.FUNCTION],
        onreorderfiles: [null, M.FUNCTION],
        beforeDropFile: [null, M.FUNCTION],
        beforeAddFile: [null, M.FUNCTION],
        beforeRemoveFile: [null, M.FUNCTION],
        beforePrepareFile: [null, M.FUNCTION],
        stylePanelLayout: [null, M.STRING],
        stylePanelAspectRatio: [null, M.STRING],
        styleItemPanelAspectRatio: [null, M.STRING],
        styleButtonRemoveItemPosition: ['left', M.STRING],
        styleButtonProcessItemPosition: ['right', M.STRING],
        styleLoadIndicatorPosition: ['right', M.STRING],
        styleProgressIndicatorPosition: ['right', M.STRING],
        styleButtonRemoveItemAlign: [!1, M.BOOLEAN],
        files: [[], M.ARRAY],
        credits: [['https://pqina.nl/', 'Powered by PQINA'], M.ARRAY],
    },
    ke = (e, t) =>
        xe(t)
            ? e[0] || null
            : lt(t)
              ? e[t] || null
              : (typeof t == 'object' && (t = t.id), e.find((i) => i.id === t) || null),
    hn = (e) => {
        if (xe(e)) return e
        if (/:/.test(e)) {
            let t = e.split(':')
            return t[1] / t[0]
        }
        return parseFloat(e)
    },
    Se = (e) => e.filter((t) => !t.archived),
    fn = { EMPTY: 0, IDLE: 1, ERROR: 2, BUSY: 3, READY: 4 },
    Gt = null,
    Ml = () => {
        if (Gt === null)
            try {
                let e = new DataTransfer()
                e.items.add(new File(['hello world'], 'This_Works.txt'))
                let t = document.createElement('input')
                t.setAttribute('type', 'file'), (t.files = e.files), (Gt = t.files.length === 1)
            } catch {
                Gt = !1
            }
        return Gt
    },
    Ol = [H.LOAD_ERROR, H.PROCESSING_ERROR, H.PROCESSING_REVERT_ERROR],
    Dl = [H.LOADING, H.PROCESSING, H.PROCESSING_QUEUED, H.INIT],
    xl = [H.PROCESSING_COMPLETE],
    Pl = (e) => Ol.includes(e.status),
    Cl = (e) => Dl.includes(e.status),
    Fl = (e) => xl.includes(e.status),
    va = (e) => re(e.options.server) && (re(e.options.server.process) || Ue(e.options.server.process)),
    zl = (e) => ({
        GET_STATUS: () => {
            let t = Se(e.items),
                { EMPTY: i, ERROR: a, BUSY: n, IDLE: r, READY: o } = fn
            return t.length === 0 ? i : t.some(Pl) ? a : t.some(Cl) ? n : t.some(Fl) ? o : r
        },
        GET_ITEM: (t) => ke(e.items, t),
        GET_ACTIVE_ITEM: (t) => ke(Se(e.items), t),
        GET_ACTIVE_ITEMS: () => Se(e.items),
        GET_ITEMS: () => e.items,
        GET_ITEM_NAME: (t) => {
            let i = ke(e.items, t)
            return i ? i.filename : null
        },
        GET_ITEM_SIZE: (t) => {
            let i = ke(e.items, t)
            return i ? i.fileSize : null
        },
        GET_STYLES: () =>
            Object.keys(e.options)
                .filter((t) => /^style/.test(t))
                .map((t) => ({ name: t, value: e.options[t] })),
        GET_PANEL_ASPECT_RATIO: () =>
            /circle/.test(e.options.stylePanelLayout) ? 1 : hn(e.options.stylePanelAspectRatio),
        GET_ITEM_PANEL_ASPECT_RATIO: () => e.options.styleItemPanelAspectRatio,
        GET_ITEMS_BY_STATUS: (t) => Se(e.items).filter((i) => i.status === t),
        GET_TOTAL_ITEMS: () => Se(e.items).length,
        SHOULD_UPDATE_FILE_INPUT: () => e.options.storeAsFile && Ml() && !va(e),
        IS_ASYNC: () => va(e),
        GET_FILE_SIZE_LABELS: (t) => ({
            labelBytes: t('GET_LABEL_FILE_SIZE_BYTES') || void 0,
            labelKilobytes: t('GET_LABEL_FILE_SIZE_KILOBYTES') || void 0,
            labelMegabytes: t('GET_LABEL_FILE_SIZE_MEGABYTES') || void 0,
            labelGigabytes: t('GET_LABEL_FILE_SIZE_GIGABYTES') || void 0,
        }),
    }),
    Nl = (e) => {
        let t = Se(e.items).length
        if (!e.options.allowMultiple) return t === 0
        let i = e.options.maxFiles
        return i === null || t < i
    },
    pn = (e, t, i) => Math.max(Math.min(i, e), t),
    Bl = (e, t, i) => e.splice(t, 0, i),
    Gl = (e, t, i) => (xe(t) ? null : typeof i > 'u' ? (e.push(t), t) : ((i = pn(i, 0, e.length)), Bl(e, i, t), t)),
    _i = (e) =>
        /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i.test(
            e,
        ),
    St = (e) => e.split('/').pop().split('?').shift(),
    ei = (e) => e.split('.').pop(),
    Vl = (e) => {
        if (typeof e != 'string') return ''
        let t = e.split('/').pop()
        return /svg/.test(t)
            ? 'svg'
            : /zip|compressed/.test(t)
              ? 'zip'
              : /plain/.test(t)
                ? 'txt'
                : /msword/.test(t)
                  ? 'doc'
                  : /[a-z]+/.test(t)
                    ? t === 'jpeg'
                        ? 'jpg'
                        : t
                    : ''
    },
    It = (e, t = '') => (t + e).slice(-t.length),
    mn = (e = new Date()) =>
        `${e.getFullYear()}-${It(e.getMonth() + 1, '00')}-${It(e.getDate(), '00')}_${It(e.getHours(), '00')}-${It(
            e.getMinutes(),
            '00',
        )}-${It(e.getSeconds(), '00')}`,
    rt = (e, t, i = null, a = null) => {
        let n = typeof i == 'string' ? e.slice(0, e.size, i) : e.slice(0, e.size, e.type)
        return (
            (n.lastModifiedDate = new Date()),
            e._relativePath && (n._relativePath = e._relativePath),
            ce(t) || (t = mn()),
            t && a === null && ei(t) ? (n.name = t) : ((a = a || Vl(n.type)), (n.name = t + (a ? '.' + a : ''))),
            n
        )
    },
    Ul = () =>
        (window.BlobBuilder =
            window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder),
    gn = (e, t) => {
        let i = Ul()
        if (i) {
            let a = new i()
            return a.append(e), a.getBlob(t)
        }
        return new Blob([e], { type: t })
    },
    kl = (e, t) => {
        let i = new ArrayBuffer(e.length),
            a = new Uint8Array(i)
        for (let n = 0; n < e.length; n++) a[n] = e.charCodeAt(n)
        return gn(i, t)
    },
    En = (e) => (/^data:(.+);/.exec(e) || [])[1] || null,
    Hl = (e) => e.split(',')[1].replace(/\s/g, ''),
    Wl = (e) => atob(Hl(e)),
    Yl = (e) => {
        let t = En(e),
            i = Wl(e)
        return kl(i, t)
    },
    $l = (e, t, i) => rt(Yl(e), t, null, i),
    ql = (e) => {
        if (!/^content-disposition:/i.test(e)) return null
        let t = e
            .split(/filename=|filename\*=.+''/)
            .splice(1)
            .map((i) => i.trim().replace(/^["']|[;"']{0,2}$/g, ''))
            .filter((i) => i.length)
        return t.length ? decodeURI(t[t.length - 1]) : null
    },
    Xl = (e) => {
        if (/content-length:/i.test(e)) {
            let t = e.match(/[0-9]+/)[0]
            return t ? parseInt(t, 10) : null
        }
        return null
    },
    jl = (e) => (/x-content-transfer-id:/i.test(e) && (e.split(':')[1] || '').trim()) || null,
    Ni = (e) => {
        let t = { source: null, name: null, size: null },
            i = e.split(`
`)
        for (let a of i) {
            let n = ql(a)
            if (n) {
                t.name = n
                continue
            }
            let r = Xl(a)
            if (r) {
                t.size = r
                continue
            }
            let o = jl(a)
            if (o) {
                t.source = o
                continue
            }
        }
        return t
    },
    Ql = (e) => {
        let t = { source: null, complete: !1, progress: 0, size: null, timestamp: null, duration: 0, request: null },
            i = () => t.progress,
            a = () => {
                t.request && t.request.abort && t.request.abort()
            },
            n = () => {
                let l = t.source
                o.fire('init', l),
                    l instanceof File
                        ? o.fire('load', l)
                        : l instanceof Blob
                          ? o.fire('load', rt(l, l.name))
                          : _i(l)
                            ? o.fire('load', $l(l))
                            : r(l)
            },
            r = (l) => {
                if (!e) {
                    o.fire('error', { type: 'error', body: "Can't load URL", code: 400 })
                    return
                }
                ;(t.timestamp = Date.now()),
                    (t.request = e(
                        l,
                        (s) => {
                            ;(t.duration = Date.now() - t.timestamp),
                                (t.complete = !0),
                                s instanceof Blob && (s = rt(s, s.name || St(l))),
                                o.fire('load', s instanceof Blob ? s : s ? s.body : null)
                        },
                        (s) => {
                            o.fire('error', typeof s == 'string' ? { type: 'error', code: 0, body: s } : s)
                        },
                        (s, u, c) => {
                            if ((c && (t.size = c), (t.duration = Date.now() - t.timestamp), !s)) {
                                t.progress = null
                                return
                            }
                            ;(t.progress = u / c), o.fire('progress', t.progress)
                        },
                        () => {
                            o.fire('abort')
                        },
                        (s) => {
                            let u = Ni(typeof s == 'string' ? s : s.headers)
                            o.fire('meta', { size: t.size || u.size, filename: u.name, source: u.source })
                        },
                    ))
            },
            o = { ...Jt(), setSource: (l) => (t.source = l), getProgress: i, abort: a, load: n }
        return o
    },
    La = (e) => /GET|HEAD/.test(e),
    He = (e, t, i) => {
        let a = {
                onheaders: () => {},
                onprogress: () => {},
                onload: () => {},
                ontimeout: () => {},
                onerror: () => {},
                onabort: () => {},
                abort: () => {
                    ;(n = !0), o.abort()
                },
            },
            n = !1,
            r = !1
        ;(i = { method: 'POST', headers: {}, withCredentials: !1, ...i }),
            (t = encodeURI(t)),
            La(i.method) && e && (t = `${t}${encodeURIComponent(typeof e == 'string' ? e : JSON.stringify(e))}`)
        let o = new XMLHttpRequest(),
            l = La(i.method) ? o : o.upload
        return (
            (l.onprogress = (s) => {
                n || a.onprogress(s.lengthComputable, s.loaded, s.total)
            }),
            (o.onreadystatechange = () => {
                o.readyState < 2 || (o.readyState === 4 && o.status === 0) || r || ((r = !0), a.onheaders(o))
            }),
            (o.onload = () => {
                o.status >= 200 && o.status < 300 ? a.onload(o) : a.onerror(o)
            }),
            (o.onerror = () => a.onerror(o)),
            (o.onabort = () => {
                ;(n = !0), a.onabort()
            }),
            (o.ontimeout = () => a.ontimeout(o)),
            o.open(i.method, t, !0),
            lt(i.timeout) && (o.timeout = i.timeout),
            Object.keys(i.headers).forEach((s) => {
                let u = unescape(encodeURIComponent(i.headers[s]))
                o.setRequestHeader(s, u)
            }),
            i.responseType && (o.responseType = i.responseType),
            i.withCredentials && (o.withCredentials = !0),
            o.send(e),
            a
        )
    },
    K = (e, t, i, a) => ({ type: e, code: t, body: i, headers: a }),
    We = (e) => (t) => {
        e(K('error', 0, 'Timeout', t.getAllResponseHeaders()))
    },
    Ma = (e) => /\?/.test(e),
    Rt = (...e) => {
        let t = ''
        return (
            e.forEach((i) => {
                t += Ma(t) && Ma(i) ? i.replace(/\?/, '&') : i
            }),
            t
        )
    },
    pi = (e = '', t) => {
        if (typeof t == 'function') return t
        if (!t || !ce(t.url)) return null
        let i = t.onload || ((n) => n),
            a = t.onerror || ((n) => null)
        return (n, r, o, l, s, u) => {
            let c = He(n, Rt(e, t.url), { ...t, responseType: 'blob' })
            return (
                (c.onload = (d) => {
                    let h = d.getAllResponseHeaders(),
                        f = Ni(h).name || St(n)
                    r(K('load', d.status, t.method === 'HEAD' ? null : rt(i(d.response), f), h))
                }),
                (c.onerror = (d) => {
                    o(K('error', d.status, a(d.response) || d.statusText, d.getAllResponseHeaders()))
                }),
                (c.onheaders = (d) => {
                    u(K('headers', d.status, null, d.getAllResponseHeaders()))
                }),
                (c.ontimeout = We(o)),
                (c.onprogress = l),
                (c.onabort = s),
                c
            )
        }
    },
    Ee = { QUEUED: 0, COMPLETE: 1, PROCESSING: 2, ERROR: 3, WAITING: 4 },
    Zl = (e, t, i, a, n, r, o, l, s, u, c) => {
        let d = [],
            { chunkTransferId: h, chunkServer: f, chunkSize: p, chunkRetryDelays: m } = c,
            g = { serverId: h, aborted: !1 },
            b = t.ondata || ((v) => v),
            E = t.onload || ((v, P) => (P === 'HEAD' ? v.getResponseHeader('Upload-Offset') : v.response)),
            T = t.onerror || ((v) => null),
            _ = (v) => {
                let P = new FormData()
                re(n) && P.append(i, JSON.stringify(n))
                let w = typeof t.headers == 'function' ? t.headers(a, n) : { ...t.headers, 'Upload-Length': a.size },
                    L = { ...t, headers: w },
                    F = He(b(P), Rt(e, t.url), L)
                ;(F.onload = (C) => v(E(C, L.method))),
                    (F.onerror = (C) =>
                        o(K('error', C.status, T(C.response) || C.statusText, C.getAllResponseHeaders()))),
                    (F.ontimeout = We(o))
            },
            y = (v) => {
                let P = Rt(e, f.url, g.serverId),
                    L = {
                        headers: typeof t.headers == 'function' ? t.headers(g.serverId) : { ...t.headers },
                        method: 'HEAD',
                    },
                    F = He(null, P, L)
                ;(F.onload = (C) => v(E(C, L.method))),
                    (F.onerror = (C) =>
                        o(K('error', C.status, T(C.response) || C.statusText, C.getAllResponseHeaders()))),
                    (F.ontimeout = We(o))
            },
            I = Math.floor(a.size / p)
        for (let v = 0; v <= I; v++) {
            let P = v * p,
                w = a.slice(P, P + p, 'application/offset+octet-stream')
            d[v] = {
                index: v,
                size: w.size,
                offset: P,
                data: w,
                file: a,
                progress: 0,
                retries: [...m],
                status: Ee.QUEUED,
                error: null,
                request: null,
                timeout: null,
            }
        }
        let A = () => r(g.serverId),
            R = (v) => v.status === Ee.QUEUED || v.status === Ee.ERROR,
            S = (v) => {
                if (g.aborted) return
                if (((v = v || d.find(R)), !v)) {
                    d.every((V) => V.status === Ee.COMPLETE) && A()
                    return
                }
                ;(v.status = Ee.PROCESSING), (v.progress = null)
                let P = f.ondata || ((V) => V),
                    w = f.onerror || ((V) => null),
                    L = Rt(e, f.url, g.serverId),
                    F =
                        typeof f.headers == 'function'
                            ? f.headers(v)
                            : {
                                  ...f.headers,
                                  'Content-Type': 'application/offset+octet-stream',
                                  'Upload-Offset': v.offset,
                                  'Upload-Length': a.size,
                                  'Upload-Name': a.name,
                              },
                    C = (v.request = He(P(v.data), L, { ...f, headers: F }))
                ;(C.onload = () => {
                    ;(v.status = Ee.COMPLETE), (v.request = null), O()
                }),
                    (C.onprogress = (V, G, B) => {
                        ;(v.progress = V ? G : null), D()
                    }),
                    (C.onerror = (V) => {
                        ;(v.status = Ee.ERROR),
                            (v.request = null),
                            (v.error = w(V.response) || V.statusText),
                            x(v) || o(K('error', V.status, w(V.response) || V.statusText, V.getAllResponseHeaders()))
                    }),
                    (C.ontimeout = (V) => {
                        ;(v.status = Ee.ERROR), (v.request = null), x(v) || We(o)(V)
                    }),
                    (C.onabort = () => {
                        ;(v.status = Ee.QUEUED), (v.request = null), s()
                    })
            },
            x = (v) =>
                v.retries.length === 0
                    ? !1
                    : ((v.status = Ee.WAITING),
                      clearTimeout(v.timeout),
                      (v.timeout = setTimeout(() => {
                          S(v)
                      }, v.retries.shift())),
                      !0),
            D = () => {
                let v = d.reduce((w, L) => (w === null || L.progress === null ? null : w + L.progress), 0)
                if (v === null) return l(!1, 0, 0)
                let P = d.reduce((w, L) => w + L.size, 0)
                l(!0, v, P)
            },
            O = () => {
                d.filter((P) => P.status === Ee.PROCESSING).length >= 1 || S()
            },
            z = () => {
                d.forEach((v) => {
                    clearTimeout(v.timeout), v.request && v.request.abort()
                })
            }
        return (
            g.serverId
                ? y((v) => {
                      g.aborted ||
                          (d
                              .filter((P) => P.offset < v)
                              .forEach((P) => {
                                  ;(P.status = Ee.COMPLETE), (P.progress = P.size)
                              }),
                          O())
                  })
                : _((v) => {
                      g.aborted || (u(v), (g.serverId = v), O())
                  }),
            {
                abort: () => {
                    ;(g.aborted = !0), z()
                },
            }
        )
    },
    Kl = (e, t, i, a) => (n, r, o, l, s, u, c) => {
        if (!n) return
        let d = a.chunkUploads,
            h = d && n.size > a.chunkSize,
            f = d && (h || a.chunkForce)
        if (n instanceof Blob && f) return Zl(e, t, i, n, r, o, l, s, u, c, a)
        let p = t.ondata || ((y) => y),
            m = t.onload || ((y) => y),
            g = t.onerror || ((y) => null),
            b = typeof t.headers == 'function' ? t.headers(n, r) || {} : { ...t.headers },
            E = { ...t, headers: b }
        var T = new FormData()
        re(r) && T.append(i, JSON.stringify(r)),
            (n instanceof Blob ? [{ name: null, file: n }] : n).forEach((y) => {
                T.append(i, y.file, y.name === null ? y.file.name : `${y.name}${y.file.name}`)
            })
        let _ = He(p(T), Rt(e, t.url), E)
        return (
            (_.onload = (y) => {
                o(K('load', y.status, m(y.response), y.getAllResponseHeaders()))
            }),
            (_.onerror = (y) => {
                l(K('error', y.status, g(y.response) || y.statusText, y.getAllResponseHeaders()))
            }),
            (_.ontimeout = We(l)),
            (_.onprogress = s),
            (_.onabort = u),
            _
        )
    },
    Jl = (e = '', t, i, a) =>
        typeof t == 'function' ? (...n) => t(i, ...n, a) : !t || !ce(t.url) ? null : Kl(e, t, i, a),
    bt = (e = '', t) => {
        if (typeof t == 'function') return t
        if (!t || !ce(t.url)) return (n, r) => r()
        let i = t.onload || ((n) => n),
            a = t.onerror || ((n) => null)
        return (n, r, o) => {
            let l = He(n, e + t.url, t)
            return (
                (l.onload = (s) => {
                    r(K('load', s.status, i(s.response), s.getAllResponseHeaders()))
                }),
                (l.onerror = (s) => {
                    o(K('error', s.status, a(s.response) || s.statusText, s.getAllResponseHeaders()))
                }),
                (l.ontimeout = We(o)),
                l
            )
        }
    },
    Tn = (e = 0, t = 1) => e + Math.random() * (t - e),
    es = (e, t = 1e3, i = 0, a = 25, n = 250) => {
        let r = null,
            o = Date.now(),
            l = () => {
                let s = Date.now() - o,
                    u = Tn(a, n)
                s + u > t && (u = s + u - t)
                let c = s / t
                if (c >= 1 || document.hidden) {
                    e(1)
                    return
                }
                e(c), (r = setTimeout(l, u))
            }
        return (
            t > 0 && l(),
            {
                clear: () => {
                    clearTimeout(r)
                },
            }
        )
    },
    ts = (e, t) => {
        let i = {
                complete: !1,
                perceivedProgress: 0,
                perceivedPerformanceUpdater: null,
                progress: null,
                timestamp: null,
                perceivedDuration: 0,
                duration: 0,
                request: null,
                response: null,
            },
            { allowMinimumUploadDuration: a } = t,
            n = (c, d) => {
                let h = () => {
                        i.duration === 0 || i.progress === null || u.fire('progress', u.getProgress())
                    },
                    f = () => {
                        ;(i.complete = !0), u.fire('load-perceived', i.response.body)
                    }
                u.fire('start'),
                    (i.timestamp = Date.now()),
                    (i.perceivedPerformanceUpdater = es(
                        (p) => {
                            ;(i.perceivedProgress = p),
                                (i.perceivedDuration = Date.now() - i.timestamp),
                                h(),
                                i.response && i.perceivedProgress === 1 && !i.complete && f()
                        },
                        a ? Tn(750, 1500) : 0,
                    )),
                    (i.request = e(
                        c,
                        d,
                        (p) => {
                            ;(i.response = re(p) ? p : { type: 'load', code: 200, body: `${p}`, headers: {} }),
                                (i.duration = Date.now() - i.timestamp),
                                (i.progress = 1),
                                u.fire('load', i.response.body),
                                (!a || (a && i.perceivedProgress === 1)) && f()
                        },
                        (p) => {
                            i.perceivedPerformanceUpdater.clear(),
                                u.fire('error', re(p) ? p : { type: 'error', code: 0, body: `${p}` })
                        },
                        (p, m, g) => {
                            ;(i.duration = Date.now() - i.timestamp), (i.progress = p ? m / g : null), h()
                        },
                        () => {
                            i.perceivedPerformanceUpdater.clear(), u.fire('abort', i.response ? i.response.body : null)
                        },
                        (p) => {
                            u.fire('transfer', p)
                        },
                    ))
            },
            r = () => {
                i.request &&
                    (i.perceivedPerformanceUpdater.clear(), i.request.abort && i.request.abort(), (i.complete = !0))
            },
            o = () => {
                r(),
                    (i.complete = !1),
                    (i.perceivedProgress = 0),
                    (i.progress = 0),
                    (i.timestamp = null),
                    (i.perceivedDuration = 0),
                    (i.duration = 0),
                    (i.request = null),
                    (i.response = null)
            },
            l = a ? () => (i.progress ? Math.min(i.progress, i.perceivedProgress) : null) : () => i.progress || null,
            s = a ? () => Math.min(i.duration, i.perceivedDuration) : () => i.duration,
            u = { ...Jt(), process: n, abort: r, getProgress: l, getDuration: s, reset: o }
        return u
    },
    In = (e) => e.substring(0, e.lastIndexOf('.')) || e,
    is = (e) => {
        let t = [e.name, e.size, e.type]
        return (
            e instanceof Blob || _i(e)
                ? (t[0] = e.name || mn())
                : _i(e)
                  ? ((t[1] = e.length), (t[2] = En(e)))
                  : ce(e) && ((t[0] = St(e)), (t[1] = 0), (t[2] = 'application/octet-stream')),
            { name: t[0], size: t[1], type: t[2] }
        )
    },
    ot = (e) => !!(e instanceof File || (e instanceof Blob && e.name)),
    bn = (e) => {
        if (!re(e)) return e
        let t = Qt(e) ? [] : {}
        for (let i in e) {
            if (!e.hasOwnProperty(i)) continue
            let a = e[i]
            t[i] = a && re(a) ? bn(a) : a
        }
        return t
    },
    as = (e = null, t = null, i = null) => {
        let a = Ci(),
            n = {
                archived: !1,
                frozen: !1,
                released: !1,
                source: null,
                file: i,
                serverFileReference: t,
                transferId: null,
                processingAborted: !1,
                status: t ? H.PROCESSING_COMPLETE : H.INIT,
                activeLoader: null,
                activeProcessor: null,
            },
            r = null,
            o = {},
            l = (R) => (n.status = R),
            s = (R, ...S) => {
                n.released || n.frozen || I.fire(R, ...S)
            },
            u = () => ei(n.file.name),
            c = () => n.file.type,
            d = () => n.file.size,
            h = () => n.file,
            f = (R, S, x) => {
                if (((n.source = R), I.fireSync('init'), n.file)) {
                    I.fireSync('load-skip')
                    return
                }
                ;(n.file = is(R)),
                    S.on('init', () => {
                        s('load-init')
                    }),
                    S.on('meta', (D) => {
                        ;(n.file.size = D.size),
                            (n.file.filename = D.filename),
                            D.source &&
                                ((e = ne.LIMBO),
                                (n.serverFileReference = D.source),
                                (n.status = H.PROCESSING_COMPLETE)),
                            s('load-meta')
                    }),
                    S.on('progress', (D) => {
                        l(H.LOADING), s('load-progress', D)
                    }),
                    S.on('error', (D) => {
                        l(H.LOAD_ERROR), s('load-request-error', D)
                    }),
                    S.on('abort', () => {
                        l(H.INIT), s('load-abort')
                    }),
                    S.on('load', (D) => {
                        n.activeLoader = null
                        let O = (v) => {
                                ;(n.file = ot(v) ? v : n.file),
                                    e === ne.LIMBO && n.serverFileReference ? l(H.PROCESSING_COMPLETE) : l(H.IDLE),
                                    s('load')
                            },
                            z = (v) => {
                                ;(n.file = D), s('load-meta'), l(H.LOAD_ERROR), s('load-file-error', v)
                            }
                        if (n.serverFileReference) {
                            O(D)
                            return
                        }
                        x(D, O, z)
                    }),
                    S.setSource(R),
                    (n.activeLoader = S),
                    S.load()
            },
            p = () => {
                n.activeLoader && n.activeLoader.load()
            },
            m = () => {
                if (n.activeLoader) {
                    n.activeLoader.abort()
                    return
                }
                l(H.INIT), s('load-abort')
            },
            g = (R, S) => {
                if (n.processingAborted) {
                    n.processingAborted = !1
                    return
                }
                if ((l(H.PROCESSING), (r = null), !(n.file instanceof Blob))) {
                    I.on('load', () => {
                        g(R, S)
                    })
                    return
                }
                R.on('load', (O) => {
                    ;(n.transferId = null), (n.serverFileReference = O)
                }),
                    R.on('transfer', (O) => {
                        n.transferId = O
                    }),
                    R.on('load-perceived', (O) => {
                        ;(n.activeProcessor = null),
                            (n.transferId = null),
                            (n.serverFileReference = O),
                            l(H.PROCESSING_COMPLETE),
                            s('process-complete', O)
                    }),
                    R.on('start', () => {
                        s('process-start')
                    }),
                    R.on('error', (O) => {
                        ;(n.activeProcessor = null), l(H.PROCESSING_ERROR), s('process-error', O)
                    }),
                    R.on('abort', (O) => {
                        ;(n.activeProcessor = null),
                            (n.serverFileReference = O),
                            l(H.IDLE),
                            s('process-abort'),
                            r && r()
                    }),
                    R.on('progress', (O) => {
                        s('process-progress', O)
                    })
                let x = (O) => {
                        n.archived || R.process(O, { ...o })
                    },
                    D = console.error
                S(n.file, x, D), (n.activeProcessor = R)
            },
            b = () => {
                ;(n.processingAborted = !1), l(H.PROCESSING_QUEUED)
            },
            E = () =>
                new Promise((R) => {
                    if (!n.activeProcessor) {
                        ;(n.processingAborted = !0), l(H.IDLE), s('process-abort'), R()
                        return
                    }
                    ;(r = () => {
                        R()
                    }),
                        n.activeProcessor.abort()
                }),
            T = (R, S) =>
                new Promise((x, D) => {
                    let O = n.serverFileReference !== null ? n.serverFileReference : n.transferId
                    if (O === null) {
                        x()
                        return
                    }
                    R(
                        O,
                        () => {
                            ;(n.serverFileReference = null), (n.transferId = null), x()
                        },
                        (z) => {
                            if (!S) {
                                x()
                                return
                            }
                            l(H.PROCESSING_REVERT_ERROR), s('process-revert-error'), D(z)
                        },
                    ),
                        l(H.IDLE),
                        s('process-revert')
                }),
            _ = (R, S, x) => {
                let D = R.split('.'),
                    O = D[0],
                    z = D.pop(),
                    v = o
                D.forEach((P) => (v = v[P])),
                    JSON.stringify(v[z]) !== JSON.stringify(S) &&
                        ((v[z] = S), s('metadata-update', { key: O, value: o[O], silent: x }))
            },
            I = {
                id: { get: () => a },
                origin: { get: () => e, set: (R) => (e = R) },
                serverId: { get: () => n.serverFileReference },
                transferId: { get: () => n.transferId },
                status: { get: () => n.status },
                filename: { get: () => n.file.name },
                filenameWithoutExtension: { get: () => In(n.file.name) },
                fileExtension: { get: u },
                fileType: { get: c },
                fileSize: { get: d },
                file: { get: h },
                relativePath: { get: () => n.file._relativePath },
                source: { get: () => n.source },
                getMetadata: (R) => bn(R ? o[R] : o),
                setMetadata: (R, S, x) => {
                    if (re(R)) {
                        let D = R
                        return (
                            Object.keys(D).forEach((O) => {
                                _(O, D[O], S)
                            }),
                            R
                        )
                    }
                    return _(R, S, x), S
                },
                extend: (R, S) => (A[R] = S),
                abortLoad: m,
                retryLoad: p,
                requestProcessing: b,
                abortProcessing: E,
                load: f,
                process: g,
                revert: T,
                ...Jt(),
                freeze: () => (n.frozen = !0),
                release: () => (n.released = !0),
                released: { get: () => n.released },
                archive: () => (n.archived = !0),
                archived: { get: () => n.archived },
            },
            A = Fe(I)
        return A
    },
    ns = (e, t) => (xe(t) ? 0 : ce(t) ? e.findIndex((i) => i.id === t) : -1),
    Oa = (e, t) => {
        let i = ns(e, t)
        if (!(i < 0)) return e[i] || null
    },
    Da = (e, t, i, a, n, r) => {
        let o = He(null, e, { method: 'GET', responseType: 'blob' })
        return (
            (o.onload = (l) => {
                let s = l.getAllResponseHeaders(),
                    u = Ni(s).name || St(e)
                t(K('load', l.status, rt(l.response, u), s))
            }),
            (o.onerror = (l) => {
                i(K('error', l.status, l.statusText, l.getAllResponseHeaders()))
            }),
            (o.onheaders = (l) => {
                r(K('headers', l.status, null, l.getAllResponseHeaders()))
            }),
            (o.ontimeout = We(i)),
            (o.onprogress = a),
            (o.onabort = n),
            o
        )
    },
    xa = (e) => (
        e.indexOf('//') === 0 && (e = location.protocol + e),
        e
            .toLowerCase()
            .replace('blob:', '')
            .replace(/([a-z])?:\/\//, '$1')
            .split('/')[0]
    ),
    rs = (e) => (e.indexOf(':') > -1 || e.indexOf('//') > -1) && xa(location.href) !== xa(e),
    Vt =
        (e) =>
        (...t) =>
            Ue(e) ? e(...t) : e,
    os = (e) => !ot(e.file),
    mi = (e, t) => {
        clearTimeout(t.listUpdateTimeout),
            (t.listUpdateTimeout = setTimeout(() => {
                e('DID_UPDATE_ITEMS', { items: Se(t.items) })
            }, 0))
    },
    Pa = (e, ...t) =>
        new Promise((i) => {
            if (!e) return i(!0)
            let a = e(...t)
            if (a == null) return i(!0)
            if (typeof a == 'boolean') return i(a)
            typeof a.then == 'function' && a.then(i)
        }),
    gi = (e, t) => {
        e.items.sort((i, a) => t(ue(i), ue(a)))
    },
    Te =
        (e, t) =>
        ({ query: i, success: a = () => {}, failure: n = () => {}, ...r } = {}) => {
            let o = ke(e.items, i)
            if (!o) {
                n({ error: K('error', 0, 'Item not found'), file: null })
                return
            }
            t(o, a, n, r || {})
        },
    ls = (e, t, i) => ({
        ABORT_ALL: () => {
            Se(i.items).forEach((a) => {
                a.freeze(), a.abortLoad(), a.abortProcessing()
            })
        },
        DID_SET_FILES: ({ value: a = [] }) => {
            let n = a.map((o) => ({ source: o.source ? o.source : o, options: o.options })),
                r = Se(i.items)
            r.forEach((o) => {
                n.find((l) => l.source === o.source || l.source === o.file) ||
                    e('REMOVE_ITEM', { query: o, remove: !1 })
            }),
                (r = Se(i.items)),
                n.forEach((o, l) => {
                    r.find((s) => s.source === o.source || s.file === o.source) ||
                        e('ADD_ITEM', { ...o, interactionMethod: Ie.NONE, index: l })
                })
        },
        DID_UPDATE_ITEM_METADATA: ({ id: a, action: n, change: r }) => {
            r.silent ||
                (clearTimeout(i.itemUpdateTimeout),
                (i.itemUpdateTimeout = setTimeout(() => {
                    let o = Oa(i.items, a)
                    if (!t('IS_ASYNC')) {
                        ye('SHOULD_PREPARE_OUTPUT', !1, { item: o, query: t, action: n, change: r }).then((c) => {
                            let d = t('GET_BEFORE_PREPARE_FILE')
                            d && (c = d(o, c)),
                                c &&
                                    e(
                                        'REQUEST_PREPARE_OUTPUT',
                                        {
                                            query: a,
                                            item: o,
                                            success: (h) => {
                                                e('DID_PREPARE_OUTPUT', { id: a, file: h })
                                            },
                                        },
                                        !0,
                                    )
                        })
                        return
                    }
                    o.origin === ne.LOCAL &&
                        e('DID_LOAD_ITEM', { id: o.id, error: null, serverFileReference: o.source })
                    let l = () => {
                            setTimeout(() => {
                                e('REQUEST_ITEM_PROCESSING', { query: a })
                            }, 32)
                        },
                        s = (c) => {
                            o.revert(bt(i.options.server.url, i.options.server.revert), t('GET_FORCE_REVERT'))
                                .then(c ? l : () => {})
                                .catch(() => {})
                        },
                        u = (c) => {
                            o.abortProcessing().then(c ? l : () => {})
                        }
                    if (o.status === H.PROCESSING_COMPLETE) return s(i.options.instantUpload)
                    if (o.status === H.PROCESSING) return u(i.options.instantUpload)
                    i.options.instantUpload && l()
                }, 0)))
        },
        MOVE_ITEM: ({ query: a, index: n }) => {
            let r = ke(i.items, a)
            if (!r) return
            let o = i.items.indexOf(r)
            ;(n = pn(n, 0, i.items.length - 1)), o !== n && i.items.splice(n, 0, i.items.splice(o, 1)[0])
        },
        SORT: ({ compare: a }) => {
            gi(i, a), e('DID_SORT_ITEMS', { items: t('GET_ACTIVE_ITEMS') })
        },
        ADD_ITEMS: ({ items: a, index: n, interactionMethod: r, success: o = () => {}, failure: l = () => {} }) => {
            let s = n
            if (n === -1 || typeof n > 'u') {
                let f = t('GET_ITEM_INSERT_LOCATION'),
                    p = t('GET_TOTAL_ITEMS')
                s = f === 'before' ? 0 : p
            }
            let u = t('GET_IGNORED_FILES'),
                c = (f) => (ot(f) ? !u.includes(f.name.toLowerCase()) : !xe(f)),
                h = a.filter(c).map(
                    (f) =>
                        new Promise((p, m) => {
                            e('ADD_ITEM', {
                                interactionMethod: r,
                                source: f.source || f,
                                success: p,
                                failure: m,
                                index: s++,
                                options: f.options || {},
                            })
                        }),
                )
            Promise.all(h).then(o).catch(l)
        },
        ADD_ITEM: ({
            source: a,
            index: n = -1,
            interactionMethod: r,
            success: o = () => {},
            failure: l = () => {},
            options: s = {},
        }) => {
            if (xe(a)) {
                l({ error: K('error', 0, 'No source'), file: null })
                return
            }
            if (ot(a) && i.options.ignoredFiles.includes(a.name.toLowerCase())) return
            if (!Nl(i)) {
                if (i.options.allowMultiple || (!i.options.allowMultiple && !i.options.allowReplace)) {
                    let E = K('warning', 0, 'Max files')
                    e('DID_THROW_MAX_FILES', { source: a, error: E }), l({ error: E, file: null })
                    return
                }
                let b = Se(i.items)[0]
                if (b.status === H.PROCESSING_COMPLETE || b.status === H.PROCESSING_REVERT_ERROR) {
                    let E = t('GET_FORCE_REVERT')
                    if (
                        (b
                            .revert(bt(i.options.server.url, i.options.server.revert), E)
                            .then(() => {
                                E &&
                                    e('ADD_ITEM', {
                                        source: a,
                                        index: n,
                                        interactionMethod: r,
                                        success: o,
                                        failure: l,
                                        options: s,
                                    })
                            })
                            .catch(() => {}),
                        E)
                    )
                        return
                }
                e('REMOVE_ITEM', { query: b.id })
            }
            let u = s.type === 'local' ? ne.LOCAL : s.type === 'limbo' ? ne.LIMBO : ne.INPUT,
                c = as(u, u === ne.INPUT ? null : a, s.file)
            Object.keys(s.metadata || {}).forEach((b) => {
                c.setMetadata(b, s.metadata[b])
            }),
                $e('DID_CREATE_ITEM', c, { query: t, dispatch: e })
            let d = t('GET_ITEM_INSERT_LOCATION')
            i.options.itemInsertLocationFreedom || (n = d === 'before' ? -1 : i.items.length),
                Gl(i.items, c, n),
                Ue(d) && a && gi(i, d)
            let h = c.id
            c.on('init', () => {
                e('DID_INIT_ITEM', { id: h })
            }),
                c.on('load-init', () => {
                    e('DID_START_ITEM_LOAD', { id: h })
                }),
                c.on('load-meta', () => {
                    e('DID_UPDATE_ITEM_META', { id: h })
                }),
                c.on('load-progress', (b) => {
                    e('DID_UPDATE_ITEM_LOAD_PROGRESS', { id: h, progress: b })
                }),
                c.on('load-request-error', (b) => {
                    let E = Vt(i.options.labelFileLoadError)(b)
                    if (b.code >= 400 && b.code < 500) {
                        e('DID_THROW_ITEM_INVALID', {
                            id: h,
                            error: b,
                            status: { main: E, sub: `${b.code} (${b.body})` },
                        }),
                            l({ error: b, file: ue(c) })
                        return
                    }
                    e('DID_THROW_ITEM_LOAD_ERROR', {
                        id: h,
                        error: b,
                        status: { main: E, sub: i.options.labelTapToRetry },
                    })
                }),
                c.on('load-file-error', (b) => {
                    e('DID_THROW_ITEM_INVALID', { id: h, error: b.status, status: b.status }),
                        l({ error: b.status, file: ue(c) })
                }),
                c.on('load-abort', () => {
                    e('REMOVE_ITEM', { query: h })
                }),
                c.on('load-skip', () => {
                    e('COMPLETE_LOAD_ITEM', { query: h, item: c, data: { source: a, success: o } })
                }),
                c.on('load', () => {
                    let b = (E) => {
                        if (!E) {
                            e('REMOVE_ITEM', { query: h })
                            return
                        }
                        c.on('metadata-update', (T) => {
                            e('DID_UPDATE_ITEM_METADATA', { id: h, change: T })
                        }),
                            ye('SHOULD_PREPARE_OUTPUT', !1, { item: c, query: t }).then((T) => {
                                let _ = t('GET_BEFORE_PREPARE_FILE')
                                _ && (T = _(c, T))
                                let y = () => {
                                    e('COMPLETE_LOAD_ITEM', { query: h, item: c, data: { source: a, success: o } }),
                                        mi(e, i)
                                }
                                if (T) {
                                    e(
                                        'REQUEST_PREPARE_OUTPUT',
                                        {
                                            query: h,
                                            item: c,
                                            success: (I) => {
                                                e('DID_PREPARE_OUTPUT', { id: h, file: I }), y()
                                            },
                                        },
                                        !0,
                                    )
                                    return
                                }
                                y()
                            })
                    }
                    ye('DID_LOAD_ITEM', c, { query: t, dispatch: e })
                        .then(() => {
                            Pa(t('GET_BEFORE_ADD_FILE'), ue(c)).then(b)
                        })
                        .catch((E) => {
                            if (!E || !E.error || !E.status) return b(!1)
                            e('DID_THROW_ITEM_INVALID', { id: h, error: E.error, status: E.status })
                        })
                }),
                c.on('process-start', () => {
                    e('DID_START_ITEM_PROCESSING', { id: h })
                }),
                c.on('process-progress', (b) => {
                    e('DID_UPDATE_ITEM_PROCESS_PROGRESS', { id: h, progress: b })
                }),
                c.on('process-error', (b) => {
                    e('DID_THROW_ITEM_PROCESSING_ERROR', {
                        id: h,
                        error: b,
                        status: { main: Vt(i.options.labelFileProcessingError)(b), sub: i.options.labelTapToRetry },
                    })
                }),
                c.on('process-revert-error', (b) => {
                    e('DID_THROW_ITEM_PROCESSING_REVERT_ERROR', {
                        id: h,
                        error: b,
                        status: {
                            main: Vt(i.options.labelFileProcessingRevertError)(b),
                            sub: i.options.labelTapToRetry,
                        },
                    })
                }),
                c.on('process-complete', (b) => {
                    e('DID_COMPLETE_ITEM_PROCESSING', { id: h, error: null, serverFileReference: b }),
                        e('DID_DEFINE_VALUE', { id: h, value: b })
                }),
                c.on('process-abort', () => {
                    e('DID_ABORT_ITEM_PROCESSING', { id: h })
                }),
                c.on('process-revert', () => {
                    e('DID_REVERT_ITEM_PROCESSING', { id: h }), e('DID_DEFINE_VALUE', { id: h, value: null })
                }),
                e('DID_ADD_ITEM', { id: h, index: n, interactionMethod: r }),
                mi(e, i)
            let { url: f, load: p, restore: m, fetch: g } = i.options.server || {}
            c.load(
                a,
                Ql(u === ne.INPUT ? (ce(a) && rs(a) && g ? pi(f, g) : Da) : u === ne.LIMBO ? pi(f, m) : pi(f, p)),
                (b, E, T) => {
                    ye('LOAD_FILE', b, { query: t }).then(E).catch(T)
                },
            )
        },
        REQUEST_PREPARE_OUTPUT: ({ item: a, success: n, failure: r = () => {} }) => {
            let o = { error: K('error', 0, 'Item not found'), file: null }
            if (a.archived) return r(o)
            ye('PREPARE_OUTPUT', a.file, { query: t, item: a }).then((l) => {
                ye('COMPLETE_PREPARE_OUTPUT', l, { query: t, item: a }).then((s) => {
                    if (a.archived) return r(o)
                    n(s)
                })
            })
        },
        COMPLETE_LOAD_ITEM: ({ item: a, data: n }) => {
            let { success: r, source: o } = n,
                l = t('GET_ITEM_INSERT_LOCATION')
            if (
                (Ue(l) && o && gi(i, l),
                e('DID_LOAD_ITEM', { id: a.id, error: null, serverFileReference: a.origin === ne.INPUT ? null : o }),
                r(ue(a)),
                a.origin === ne.LOCAL)
            ) {
                e('DID_LOAD_LOCAL_ITEM', { id: a.id })
                return
            }
            if (a.origin === ne.LIMBO) {
                e('DID_COMPLETE_ITEM_PROCESSING', { id: a.id, error: null, serverFileReference: o }),
                    e('DID_DEFINE_VALUE', { id: a.id, value: a.serverId || o })
                return
            }
            t('IS_ASYNC') && i.options.instantUpload && e('REQUEST_ITEM_PROCESSING', { query: a.id })
        },
        RETRY_ITEM_LOAD: Te(i, (a) => {
            a.retryLoad()
        }),
        REQUEST_ITEM_PREPARE: Te(i, (a, n, r) => {
            e(
                'REQUEST_PREPARE_OUTPUT',
                {
                    query: a.id,
                    item: a,
                    success: (o) => {
                        e('DID_PREPARE_OUTPUT', { id: a.id, file: o }), n({ file: a, output: o })
                    },
                    failure: r,
                },
                !0,
            )
        }),
        REQUEST_ITEM_PROCESSING: Te(i, (a, n, r) => {
            if (!(a.status === H.IDLE || a.status === H.PROCESSING_ERROR)) {
                let l = () => e('REQUEST_ITEM_PROCESSING', { query: a, success: n, failure: r }),
                    s = () => (document.hidden ? l() : setTimeout(l, 32))
                a.status === H.PROCESSING_COMPLETE || a.status === H.PROCESSING_REVERT_ERROR
                    ? a
                          .revert(bt(i.options.server.url, i.options.server.revert), t('GET_FORCE_REVERT'))
                          .then(s)
                          .catch(() => {})
                    : a.status === H.PROCESSING && a.abortProcessing().then(s)
                return
            }
            a.status !== H.PROCESSING_QUEUED &&
                (a.requestProcessing(),
                e('DID_REQUEST_ITEM_PROCESSING', { id: a.id }),
                e('PROCESS_ITEM', { query: a, success: n, failure: r }, !0))
        }),
        PROCESS_ITEM: Te(i, (a, n, r) => {
            let o = t('GET_MAX_PARALLEL_UPLOADS')
            if (t('GET_ITEMS_BY_STATUS', H.PROCESSING).length === o) {
                i.processingQueue.push({ id: a.id, success: n, failure: r })
                return
            }
            if (a.status === H.PROCESSING) return
            let s = () => {
                let c = i.processingQueue.shift()
                if (!c) return
                let { id: d, success: h, failure: f } = c,
                    p = ke(i.items, d)
                if (!p || p.archived) {
                    s()
                    return
                }
                e('PROCESS_ITEM', { query: d, success: h, failure: f }, !0)
            }
            a.onOnce('process-complete', () => {
                n(ue(a)), s()
                let c = i.options.server
                if (i.options.instantUpload && a.origin === ne.LOCAL && Ue(c.remove)) {
                    let f = () => {}
                    ;(a.origin = ne.LIMBO), i.options.server.remove(a.source, f, f)
                }
                t('GET_ITEMS_BY_STATUS', H.PROCESSING_COMPLETE).length === i.items.length &&
                    e('DID_COMPLETE_ITEM_PROCESSING_ALL')
            }),
                a.onOnce('process-error', (c) => {
                    r({ error: c, file: ue(a) }), s()
                })
            let u = i.options
            a.process(
                ts(
                    Jl(u.server.url, u.server.process, u.name, {
                        chunkTransferId: a.transferId,
                        chunkServer: u.server.patch,
                        chunkUploads: u.chunkUploads,
                        chunkForce: u.chunkForce,
                        chunkSize: u.chunkSize,
                        chunkRetryDelays: u.chunkRetryDelays,
                    }),
                    { allowMinimumUploadDuration: t('GET_ALLOW_MINIMUM_UPLOAD_DURATION') },
                ),
                (c, d, h) => {
                    ye('PREPARE_OUTPUT', c, { query: t, item: a })
                        .then((f) => {
                            e('DID_PREPARE_OUTPUT', { id: a.id, file: f }), d(f)
                        })
                        .catch(h)
                },
            )
        }),
        RETRY_ITEM_PROCESSING: Te(i, (a) => {
            e('REQUEST_ITEM_PROCESSING', { query: a })
        }),
        REQUEST_REMOVE_ITEM: Te(i, (a) => {
            Pa(t('GET_BEFORE_REMOVE_FILE'), ue(a)).then((n) => {
                n && e('REMOVE_ITEM', { query: a })
            })
        }),
        RELEASE_ITEM: Te(i, (a) => {
            a.release()
        }),
        REMOVE_ITEM: Te(i, (a, n, r, o) => {
            let l = () => {
                    let u = a.id
                    Oa(i.items, u).archive(), e('DID_REMOVE_ITEM', { error: null, id: u, item: a }), mi(e, i), n(ue(a))
                },
                s = i.options.server
            a.origin === ne.LOCAL && s && Ue(s.remove) && o.remove !== !1
                ? (e('DID_START_ITEM_REMOVE', { id: a.id }),
                  s.remove(
                      a.source,
                      () => l(),
                      (u) => {
                          e('DID_THROW_ITEM_REMOVE_ERROR', {
                              id: a.id,
                              error: K('error', 0, u, null),
                              status: { main: Vt(i.options.labelFileRemoveError)(u), sub: i.options.labelTapToRetry },
                          })
                      },
                  ))
                : (((o.revert && a.origin !== ne.LOCAL && a.serverId !== null) ||
                      (i.options.chunkUploads && a.file.size > i.options.chunkSize) ||
                      (i.options.chunkUploads && i.options.chunkForce)) &&
                      a.revert(bt(i.options.server.url, i.options.server.revert), t('GET_FORCE_REVERT')),
                  l())
        }),
        ABORT_ITEM_LOAD: Te(i, (a) => {
            a.abortLoad()
        }),
        ABORT_ITEM_PROCESSING: Te(i, (a) => {
            if (a.serverId) {
                e('REVERT_ITEM_PROCESSING', { id: a.id })
                return
            }
            a.abortProcessing().then(() => {
                i.options.instantUpload && e('REMOVE_ITEM', { query: a.id })
            })
        }),
        REQUEST_REVERT_ITEM_PROCESSING: Te(i, (a) => {
            if (!i.options.instantUpload) {
                e('REVERT_ITEM_PROCESSING', { query: a })
                return
            }
            let n = (l) => {
                    l && e('REVERT_ITEM_PROCESSING', { query: a })
                },
                r = t('GET_BEFORE_REMOVE_FILE')
            if (!r) return n(!0)
            let o = r(ue(a))
            if (o == null) return n(!0)
            if (typeof o == 'boolean') return n(o)
            typeof o.then == 'function' && o.then(n)
        }),
        REVERT_ITEM_PROCESSING: Te(i, (a) => {
            a.revert(bt(i.options.server.url, i.options.server.revert), t('GET_FORCE_REVERT'))
                .then(() => {
                    ;(i.options.instantUpload || os(a)) && e('REMOVE_ITEM', { query: a.id })
                })
                .catch(() => {})
        }),
        SET_OPTIONS: ({ options: a }) => {
            let n = Object.keys(a),
                r = ss.filter((l) => n.includes(l))
            ;[...r, ...Object.keys(a).filter((l) => !r.includes(l))].forEach((l) => {
                e(`SET_${Kt(l, '_').toUpperCase()}`, { value: a[l] })
            })
        },
    }),
    ss = ['server'],
    Bi = (e) => e,
    Pe = (e) => document.createElement(e),
    J = (e, t) => {
        let i = e.childNodes[0]
        i ? t !== i.nodeValue && (i.nodeValue = t) : ((i = document.createTextNode(t)), e.appendChild(i))
    },
    Ca = (e, t, i, a) => {
        let n = (((a % 360) - 90) * Math.PI) / 180
        return { x: e + i * Math.cos(n), y: t + i * Math.sin(n) }
    },
    cs = (e, t, i, a, n, r) => {
        let o = Ca(e, t, i, n),
            l = Ca(e, t, i, a)
        return ['M', o.x, o.y, 'A', i, i, 0, r, 0, l.x, l.y].join(' ')
    },
    ds = (e, t, i, a, n) => {
        let r = 1
        return (
            n > a && n - a <= 0.5 && (r = 0),
            a > n && a - n >= 0.5 && (r = 0),
            cs(e, t, i, Math.min(0.9999, a) * 360, Math.min(0.9999, n) * 360, r)
        )
    },
    us = ({ root: e, props: t }) => {
        ;(t.spin = !1), (t.progress = 0), (t.opacity = 0)
        let i = $t('svg')
        ;(e.ref.path = $t('path', { 'stroke-width': 2, 'stroke-linecap': 'round' })),
            i.appendChild(e.ref.path),
            (e.ref.svg = i),
            e.appendChild(i)
    },
    hs = ({ root: e, props: t }) => {
        if (t.opacity === 0) return
        t.align && (e.element.dataset.align = t.align)
        let i = parseInt(ee(e.ref.path, 'stroke-width'), 10),
            a = e.rect.element.width * 0.5,
            n = 0,
            r = 0
        t.spin ? ((n = 0), (r = 0.5)) : ((n = 0), (r = t.progress))
        let o = ds(a, a, a - i, n, r)
        ee(e.ref.path, 'd', o), ee(e.ref.path, 'stroke-opacity', t.spin || t.progress > 0 ? 1 : 0)
    },
    Fa = te({
        tag: 'div',
        name: 'progress-indicator',
        ignoreRectUpdate: !0,
        ignoreRect: !0,
        create: us,
        write: hs,
        mixins: {
            apis: ['progress', 'spin', 'align'],
            styles: ['opacity'],
            animations: {
                opacity: { type: 'tween', duration: 500 },
                progress: { type: 'spring', stiffness: 0.95, damping: 0.65, mass: 10 },
            },
        },
    }),
    fs = ({ root: e, props: t }) => {
        ;(e.element.innerHTML = (t.icon || '') + `<span>${t.label}</span>`), (t.isDisabled = !1)
    },
    ps = ({ root: e, props: t }) => {
        let { isDisabled: i } = t,
            a = e.query('GET_DISABLED') || t.opacity === 0
        a && !i
            ? ((t.isDisabled = !0), ee(e.element, 'disabled', 'disabled'))
            : !a && i && ((t.isDisabled = !1), e.element.removeAttribute('disabled'))
    },
    _n = te({
        tag: 'button',
        attributes: { type: 'button' },
        ignoreRect: !0,
        ignoreRectUpdate: !0,
        name: 'file-action-button',
        mixins: {
            apis: ['label'],
            styles: ['translateX', 'translateY', 'scaleX', 'scaleY', 'opacity'],
            animations: {
                scaleX: 'spring',
                scaleY: 'spring',
                translateX: 'spring',
                translateY: 'spring',
                opacity: { type: 'tween', duration: 250 },
            },
            listeners: !0,
        },
        create: fs,
        write: ps,
    }),
    Rn = (e, t = '.', i = 1e3, a = {}) => {
        let {
            labelBytes: n = 'bytes',
            labelKilobytes: r = 'KB',
            labelMegabytes: o = 'MB',
            labelGigabytes: l = 'GB',
        } = a
        e = Math.round(Math.abs(e))
        let s = i,
            u = i * i,
            c = i * i * i
        return e < s
            ? `${e} ${n}`
            : e < u
              ? `${Math.floor(e / s)} ${r}`
              : e < c
                ? `${za(e / u, 1, t)} ${o}`
                : `${za(e / c, 2, t)} ${l}`
    },
    za = (e, t, i) =>
        e
            .toFixed(t)
            .split('.')
            .filter((a) => a !== '0')
            .join(i),
    ms = ({ root: e, props: t }) => {
        let i = Pe('span')
        ;(i.className = 'filepond--file-info-main'),
            ee(i, 'aria-hidden', 'true'),
            e.appendChild(i),
            (e.ref.fileName = i)
        let a = Pe('span')
        ;(a.className = 'filepond--file-info-sub'),
            e.appendChild(a),
            (e.ref.fileSize = a),
            J(a, e.query('GET_LABEL_FILE_WAITING_FOR_SIZE')),
            J(i, Bi(e.query('GET_ITEM_NAME', t.id)))
    },
    Ri = ({ root: e, props: t }) => {
        J(
            e.ref.fileSize,
            Rn(
                e.query('GET_ITEM_SIZE', t.id),
                '.',
                e.query('GET_FILE_SIZE_BASE'),
                e.query('GET_FILE_SIZE_LABELS', e.query),
            ),
        ),
            J(e.ref.fileName, Bi(e.query('GET_ITEM_NAME', t.id)))
    },
    Na = ({ root: e, props: t }) => {
        if (lt(e.query('GET_ITEM_SIZE', t.id))) {
            Ri({ root: e, props: t })
            return
        }
        J(e.ref.fileSize, e.query('GET_LABEL_FILE_SIZE_NOT_AVAILABLE'))
    },
    gs = te({
        name: 'file-info',
        ignoreRect: !0,
        ignoreRectUpdate: !0,
        write: de({
            DID_LOAD_ITEM: Ri,
            DID_UPDATE_ITEM_META: Ri,
            DID_THROW_ITEM_LOAD_ERROR: Na,
            DID_THROW_ITEM_INVALID: Na,
        }),
        didCreateView: (e) => {
            $e('CREATE_VIEW', { ...e, view: e })
        },
        create: ms,
        mixins: { styles: ['translateX', 'translateY'], animations: { translateX: 'spring', translateY: 'spring' } },
    }),
    yn = (e) => Math.round(e * 100),
    Es = ({ root: e }) => {
        let t = Pe('span')
        ;(t.className = 'filepond--file-status-main'), e.appendChild(t), (e.ref.main = t)
        let i = Pe('span')
        ;(i.className = 'filepond--file-status-sub'),
            e.appendChild(i),
            (e.ref.sub = i),
            Sn({ root: e, action: { progress: null } })
    },
    Sn = ({ root: e, action: t }) => {
        let i =
            t.progress === null
                ? e.query('GET_LABEL_FILE_LOADING')
                : `${e.query('GET_LABEL_FILE_LOADING')} ${yn(t.progress)}%`
        J(e.ref.main, i), J(e.ref.sub, e.query('GET_LABEL_TAP_TO_CANCEL'))
    },
    Ts = ({ root: e, action: t }) => {
        let i =
            t.progress === null
                ? e.query('GET_LABEL_FILE_PROCESSING')
                : `${e.query('GET_LABEL_FILE_PROCESSING')} ${yn(t.progress)}%`
        J(e.ref.main, i), J(e.ref.sub, e.query('GET_LABEL_TAP_TO_CANCEL'))
    },
    Is = ({ root: e }) => {
        J(e.ref.main, e.query('GET_LABEL_FILE_PROCESSING')), J(e.ref.sub, e.query('GET_LABEL_TAP_TO_CANCEL'))
    },
    bs = ({ root: e }) => {
        J(e.ref.main, e.query('GET_LABEL_FILE_PROCESSING_ABORTED')), J(e.ref.sub, e.query('GET_LABEL_TAP_TO_RETRY'))
    },
    _s = ({ root: e }) => {
        J(e.ref.main, e.query('GET_LABEL_FILE_PROCESSING_COMPLETE')), J(e.ref.sub, e.query('GET_LABEL_TAP_TO_UNDO'))
    },
    Ba = ({ root: e }) => {
        J(e.ref.main, ''), J(e.ref.sub, '')
    },
    _t = ({ root: e, action: t }) => {
        J(e.ref.main, t.status.main), J(e.ref.sub, t.status.sub)
    },
    Rs = te({
        name: 'file-status',
        ignoreRect: !0,
        ignoreRectUpdate: !0,
        write: de({
            DID_LOAD_ITEM: Ba,
            DID_REVERT_ITEM_PROCESSING: Ba,
            DID_REQUEST_ITEM_PROCESSING: Is,
            DID_ABORT_ITEM_PROCESSING: bs,
            DID_COMPLETE_ITEM_PROCESSING: _s,
            DID_UPDATE_ITEM_PROCESS_PROGRESS: Ts,
            DID_UPDATE_ITEM_LOAD_PROGRESS: Sn,
            DID_THROW_ITEM_LOAD_ERROR: _t,
            DID_THROW_ITEM_INVALID: _t,
            DID_THROW_ITEM_PROCESSING_ERROR: _t,
            DID_THROW_ITEM_PROCESSING_REVERT_ERROR: _t,
            DID_THROW_ITEM_REMOVE_ERROR: _t,
        }),
        didCreateView: (e) => {
            $e('CREATE_VIEW', { ...e, view: e })
        },
        create: Es,
        mixins: {
            styles: ['translateX', 'translateY', 'opacity'],
            animations: { opacity: { type: 'tween', duration: 250 }, translateX: 'spring', translateY: 'spring' },
        },
    }),
    yi = {
        AbortItemLoad: {
            label: 'GET_LABEL_BUTTON_ABORT_ITEM_LOAD',
            action: 'ABORT_ITEM_LOAD',
            className: 'filepond--action-abort-item-load',
            align: 'LOAD_INDICATOR_POSITION',
        },
        RetryItemLoad: {
            label: 'GET_LABEL_BUTTON_RETRY_ITEM_LOAD',
            action: 'RETRY_ITEM_LOAD',
            icon: 'GET_ICON_RETRY',
            className: 'filepond--action-retry-item-load',
            align: 'BUTTON_PROCESS_ITEM_POSITION',
        },
        RemoveItem: {
            label: 'GET_LABEL_BUTTON_REMOVE_ITEM',
            action: 'REQUEST_REMOVE_ITEM',
            icon: 'GET_ICON_REMOVE',
            className: 'filepond--action-remove-item',
            align: 'BUTTON_REMOVE_ITEM_POSITION',
        },
        ProcessItem: {
            label: 'GET_LABEL_BUTTON_PROCESS_ITEM',
            action: 'REQUEST_ITEM_PROCESSING',
            icon: 'GET_ICON_PROCESS',
            className: 'filepond--action-process-item',
            align: 'BUTTON_PROCESS_ITEM_POSITION',
        },
        AbortItemProcessing: {
            label: 'GET_LABEL_BUTTON_ABORT_ITEM_PROCESSING',
            action: 'ABORT_ITEM_PROCESSING',
            className: 'filepond--action-abort-item-processing',
            align: 'BUTTON_PROCESS_ITEM_POSITION',
        },
        RetryItemProcessing: {
            label: 'GET_LABEL_BUTTON_RETRY_ITEM_PROCESSING',
            action: 'RETRY_ITEM_PROCESSING',
            icon: 'GET_ICON_RETRY',
            className: 'filepond--action-retry-item-processing',
            align: 'BUTTON_PROCESS_ITEM_POSITION',
        },
        RevertItemProcessing: {
            label: 'GET_LABEL_BUTTON_UNDO_ITEM_PROCESSING',
            action: 'REQUEST_REVERT_ITEM_PROCESSING',
            icon: 'GET_ICON_UNDO',
            className: 'filepond--action-revert-item-processing',
            align: 'BUTTON_PROCESS_ITEM_POSITION',
        },
    },
    Si = []
Z(yi, (e) => {
    Si.push(e)
})
var me = (e) => {
        if (wi(e) === 'right') return 0
        let t = e.ref.buttonRemoveItem.rect.element
        return t.hidden ? null : t.width + t.left
    },
    ys = (e) => e.ref.buttonAbortItemLoad.rect.element.width,
    Ut = (e) => Math.floor(e.ref.buttonRemoveItem.rect.element.height / 4),
    Ss = (e) => Math.floor(e.ref.buttonRemoveItem.rect.element.left / 2),
    ws = (e) => e.query('GET_STYLE_LOAD_INDICATOR_POSITION'),
    As = (e) => e.query('GET_STYLE_PROGRESS_INDICATOR_POSITION'),
    wi = (e) => e.query('GET_STYLE_BUTTON_REMOVE_ITEM_POSITION'),
    vs = {
        buttonAbortItemLoad: { opacity: 0 },
        buttonRetryItemLoad: { opacity: 0 },
        buttonRemoveItem: { opacity: 0 },
        buttonProcessItem: { opacity: 0 },
        buttonAbortItemProcessing: { opacity: 0 },
        buttonRetryItemProcessing: { opacity: 0 },
        buttonRevertItemProcessing: { opacity: 0 },
        loadProgressIndicator: { opacity: 0, align: ws },
        processProgressIndicator: { opacity: 0, align: As },
        processingCompleteIndicator: { opacity: 0, scaleX: 0.75, scaleY: 0.75 },
        info: { translateX: 0, translateY: 0, opacity: 0 },
        status: { translateX: 0, translateY: 0, opacity: 0 },
    },
    Ga = {
        buttonRemoveItem: { opacity: 1 },
        buttonProcessItem: { opacity: 1 },
        info: { translateX: me },
        status: { translateX: me },
    },
    Ei = {
        buttonAbortItemProcessing: { opacity: 1 },
        processProgressIndicator: { opacity: 1 },
        status: { opacity: 1 },
    },
    tt = {
        DID_THROW_ITEM_INVALID: {
            buttonRemoveItem: { opacity: 1 },
            info: { translateX: me },
            status: { translateX: me, opacity: 1 },
        },
        DID_START_ITEM_LOAD: {
            buttonAbortItemLoad: { opacity: 1 },
            loadProgressIndicator: { opacity: 1 },
            status: { opacity: 1 },
        },
        DID_THROW_ITEM_LOAD_ERROR: {
            buttonRetryItemLoad: { opacity: 1 },
            buttonRemoveItem: { opacity: 1 },
            info: { translateX: me },
            status: { opacity: 1 },
        },
        DID_START_ITEM_REMOVE: {
            processProgressIndicator: { opacity: 1, align: wi },
            info: { translateX: me },
            status: { opacity: 0 },
        },
        DID_THROW_ITEM_REMOVE_ERROR: {
            processProgressIndicator: { opacity: 0, align: wi },
            buttonRemoveItem: { opacity: 1 },
            info: { translateX: me },
            status: { opacity: 1, translateX: me },
        },
        DID_LOAD_ITEM: Ga,
        DID_LOAD_LOCAL_ITEM: { buttonRemoveItem: { opacity: 1 }, info: { translateX: me }, status: { translateX: me } },
        DID_START_ITEM_PROCESSING: Ei,
        DID_REQUEST_ITEM_PROCESSING: Ei,
        DID_UPDATE_ITEM_PROCESS_PROGRESS: Ei,
        DID_COMPLETE_ITEM_PROCESSING: {
            buttonRevertItemProcessing: { opacity: 1 },
            info: { opacity: 1 },
            status: { opacity: 1 },
        },
        DID_THROW_ITEM_PROCESSING_ERROR: {
            buttonRemoveItem: { opacity: 1 },
            buttonRetryItemProcessing: { opacity: 1 },
            status: { opacity: 1 },
            info: { translateX: me },
        },
        DID_THROW_ITEM_PROCESSING_REVERT_ERROR: {
            buttonRevertItemProcessing: { opacity: 1 },
            status: { opacity: 1 },
            info: { opacity: 1 },
        },
        DID_ABORT_ITEM_PROCESSING: {
            buttonRemoveItem: { opacity: 1 },
            buttonProcessItem: { opacity: 1 },
            info: { translateX: me },
            status: { opacity: 1 },
        },
        DID_REVERT_ITEM_PROCESSING: Ga,
    },
    Ls = te({
        create: ({ root: e }) => {
            e.element.innerHTML = e.query('GET_ICON_DONE')
        },
        name: 'processing-complete-indicator',
        ignoreRect: !0,
        mixins: {
            styles: ['scaleX', 'scaleY', 'opacity'],
            animations: { scaleX: 'spring', scaleY: 'spring', opacity: { type: 'tween', duration: 250 } },
        },
    }),
    Ms = ({ root: e, props: t }) => {
        let i = Object.keys(yi).reduce((p, m) => ((p[m] = { ...yi[m] }), p), {}),
            { id: a } = t,
            n = e.query('GET_ALLOW_REVERT'),
            r = e.query('GET_ALLOW_REMOVE'),
            o = e.query('GET_ALLOW_PROCESS'),
            l = e.query('GET_INSTANT_UPLOAD'),
            s = e.query('IS_ASYNC'),
            u = e.query('GET_STYLE_BUTTON_REMOVE_ITEM_ALIGN'),
            c
        s
            ? o && !n
                ? (c = (p) => !/RevertItemProcessing/.test(p))
                : !o && n
                  ? (c = (p) => !/ProcessItem|RetryItemProcessing|AbortItemProcessing/.test(p))
                  : !o && !n && (c = (p) => !/Process/.test(p))
            : (c = (p) => !/Process/.test(p))
        let d = c ? Si.filter(c) : Si.concat()
        if (
            (l &&
                n &&
                ((i.RevertItemProcessing.label = 'GET_LABEL_BUTTON_REMOVE_ITEM'),
                (i.RevertItemProcessing.icon = 'GET_ICON_REMOVE')),
            s && !n)
        ) {
            let p = tt.DID_COMPLETE_ITEM_PROCESSING
            ;(p.info.translateX = Ss),
                (p.info.translateY = Ut),
                (p.status.translateY = Ut),
                (p.processingCompleteIndicator = { opacity: 1, scaleX: 1, scaleY: 1 })
        }
        if (
            (s &&
                !o &&
                ([
                    'DID_START_ITEM_PROCESSING',
                    'DID_REQUEST_ITEM_PROCESSING',
                    'DID_UPDATE_ITEM_PROCESS_PROGRESS',
                    'DID_THROW_ITEM_PROCESSING_ERROR',
                ].forEach((p) => {
                    tt[p].status.translateY = Ut
                }),
                (tt.DID_THROW_ITEM_PROCESSING_ERROR.status.translateX = ys)),
            u && n)
        ) {
            i.RevertItemProcessing.align = 'BUTTON_REMOVE_ITEM_POSITION'
            let p = tt.DID_COMPLETE_ITEM_PROCESSING
            ;(p.info.translateX = me),
                (p.status.translateY = Ut),
                (p.processingCompleteIndicator = { opacity: 1, scaleX: 1, scaleY: 1 })
        }
        r || (i.RemoveItem.disabled = !0),
            Z(i, (p, m) => {
                let g = e.createChildView(_n, { label: e.query(m.label), icon: e.query(m.icon), opacity: 0 })
                d.includes(p) && e.appendChildView(g),
                    m.disabled &&
                        (g.element.setAttribute('disabled', 'disabled'), g.element.setAttribute('hidden', 'hidden')),
                    (g.element.dataset.align = e.query(`GET_STYLE_${m.align}`)),
                    g.element.classList.add(m.className),
                    g.on('click', (b) => {
                        b.stopPropagation(), !m.disabled && e.dispatch(m.action, { query: a })
                    }),
                    (e.ref[`button${p}`] = g)
            }),
            (e.ref.processingCompleteIndicator = e.appendChildView(e.createChildView(Ls))),
            (e.ref.processingCompleteIndicator.element.dataset.align = e.query(
                'GET_STYLE_BUTTON_PROCESS_ITEM_POSITION',
            )),
            (e.ref.info = e.appendChildView(e.createChildView(gs, { id: a }))),
            (e.ref.status = e.appendChildView(e.createChildView(Rs, { id: a })))
        let h = e.appendChildView(
            e.createChildView(Fa, { opacity: 0, align: e.query('GET_STYLE_LOAD_INDICATOR_POSITION') }),
        )
        h.element.classList.add('filepond--load-indicator'), (e.ref.loadProgressIndicator = h)
        let f = e.appendChildView(
            e.createChildView(Fa, { opacity: 0, align: e.query('GET_STYLE_PROGRESS_INDICATOR_POSITION') }),
        )
        f.element.classList.add('filepond--process-indicator'),
            (e.ref.processProgressIndicator = f),
            (e.ref.activeStyles = [])
    },
    Os = ({ root: e, actions: t, props: i }) => {
        Ds({ root: e, actions: t, props: i })
        let a = t
            .concat()
            .filter((n) => /^DID_/.test(n.type))
            .reverse()
            .find((n) => tt[n.type])
        if (a) {
            e.ref.activeStyles = []
            let n = tt[a.type]
            Z(vs, (r, o) => {
                let l = e.ref[r]
                Z(o, (s, u) => {
                    let c = n[r] && typeof n[r][s] < 'u' ? n[r][s] : u
                    e.ref.activeStyles.push({ control: l, key: s, value: c })
                })
            })
        }
        e.ref.activeStyles.forEach(({ control: n, key: r, value: o }) => {
            n[r] = typeof o == 'function' ? o(e) : o
        })
    },
    Ds = de({
        DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING: ({ root: e, action: t }) => {
            e.ref.buttonAbortItemProcessing.label = t.value
        },
        DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD: ({ root: e, action: t }) => {
            e.ref.buttonAbortItemLoad.label = t.value
        },
        DID_SET_LABEL_BUTTON_ABORT_ITEM_REMOVAL: ({ root: e, action: t }) => {
            e.ref.buttonAbortItemRemoval.label = t.value
        },
        DID_REQUEST_ITEM_PROCESSING: ({ root: e }) => {
            ;(e.ref.processProgressIndicator.spin = !0), (e.ref.processProgressIndicator.progress = 0)
        },
        DID_START_ITEM_LOAD: ({ root: e }) => {
            ;(e.ref.loadProgressIndicator.spin = !0), (e.ref.loadProgressIndicator.progress = 0)
        },
        DID_START_ITEM_REMOVE: ({ root: e }) => {
            ;(e.ref.processProgressIndicator.spin = !0), (e.ref.processProgressIndicator.progress = 0)
        },
        DID_UPDATE_ITEM_LOAD_PROGRESS: ({ root: e, action: t }) => {
            ;(e.ref.loadProgressIndicator.spin = !1), (e.ref.loadProgressIndicator.progress = t.progress)
        },
        DID_UPDATE_ITEM_PROCESS_PROGRESS: ({ root: e, action: t }) => {
            ;(e.ref.processProgressIndicator.spin = !1), (e.ref.processProgressIndicator.progress = t.progress)
        },
    }),
    xs = te({
        create: Ms,
        write: Os,
        didCreateView: (e) => {
            $e('CREATE_VIEW', { ...e, view: e })
        },
        name: 'file',
    }),
    Ps = ({ root: e, props: t }) => {
        ;(e.ref.fileName = Pe('legend')),
            e.appendChild(e.ref.fileName),
            (e.ref.file = e.appendChildView(e.createChildView(xs, { id: t.id }))),
            (e.ref.data = !1)
    },
    Cs = ({ root: e, props: t }) => {
        J(e.ref.fileName, Bi(e.query('GET_ITEM_NAME', t.id)))
    },
    Fs = te({
        create: Ps,
        ignoreRect: !0,
        write: de({ DID_LOAD_ITEM: Cs }),
        didCreateView: (e) => {
            $e('CREATE_VIEW', { ...e, view: e })
        },
        tag: 'fieldset',
        name: 'file-wrapper',
    }),
    Va = { type: 'spring', damping: 0.6, mass: 7 },
    zs = ({ root: e, props: t }) => {
        ;[
            { name: 'top' },
            {
                name: 'center',
                props: { translateY: null, scaleY: null },
                mixins: { animations: { scaleY: Va }, styles: ['translateY', 'scaleY'] },
            },
            {
                name: 'bottom',
                props: { translateY: null },
                mixins: { animations: { translateY: Va }, styles: ['translateY'] },
            },
        ].forEach((i) => {
            Ns(e, i, t.name)
        }),
            e.element.classList.add(`filepond--${t.name}`),
            (e.ref.scalable = null)
    },
    Ns = (e, t, i) => {
        let a = te({ name: `panel-${t.name} filepond--${i}`, mixins: t.mixins, ignoreRectUpdate: !0 }),
            n = e.createChildView(a, t.props)
        e.ref[t.name] = e.appendChildView(n)
    },
    Bs = ({ root: e, props: t }) => {
        if (
            ((e.ref.scalable === null || t.scalable !== e.ref.scalable) &&
                ((e.ref.scalable = rn(t.scalable) ? t.scalable : !0), (e.element.dataset.scalable = e.ref.scalable)),
            !t.height)
        )
            return
        let i = e.ref.top.rect.element,
            a = e.ref.bottom.rect.element,
            n = Math.max(i.height + a.height, t.height)
        ;(e.ref.center.translateY = i.height),
            (e.ref.center.scaleY = (n - i.height - a.height) / 100),
            (e.ref.bottom.translateY = n - a.height)
    },
    wn = te({
        name: 'panel',
        read: ({ root: e, props: t }) => (t.heightCurrent = e.ref.bottom.translateY),
        write: Bs,
        create: zs,
        ignoreRect: !0,
        mixins: { apis: ['height', 'heightCurrent', 'scalable'] },
    }),
    Gs = (e) => {
        let t = e.map((a) => a.id),
            i
        return {
            setIndex: (a) => {
                i = a
            },
            getIndex: () => i,
            getItemIndex: (a) => t.indexOf(a.id),
        }
    },
    Ua = { type: 'spring', stiffness: 0.75, damping: 0.45, mass: 10 },
    ka = 'spring',
    Ha = {
        DID_START_ITEM_LOAD: 'busy',
        DID_UPDATE_ITEM_LOAD_PROGRESS: 'loading',
        DID_THROW_ITEM_INVALID: 'load-invalid',
        DID_THROW_ITEM_LOAD_ERROR: 'load-error',
        DID_LOAD_ITEM: 'idle',
        DID_THROW_ITEM_REMOVE_ERROR: 'remove-error',
        DID_START_ITEM_REMOVE: 'busy',
        DID_START_ITEM_PROCESSING: 'busy processing',
        DID_REQUEST_ITEM_PROCESSING: 'busy processing',
        DID_UPDATE_ITEM_PROCESS_PROGRESS: 'processing',
        DID_COMPLETE_ITEM_PROCESSING: 'processing-complete',
        DID_THROW_ITEM_PROCESSING_ERROR: 'processing-error',
        DID_THROW_ITEM_PROCESSING_REVERT_ERROR: 'processing-revert-error',
        DID_ABORT_ITEM_PROCESSING: 'cancelled',
        DID_REVERT_ITEM_PROCESSING: 'idle',
    },
    Vs = ({ root: e, props: t }) => {
        if (
            ((e.ref.handleClick = (a) => e.dispatch('DID_ACTIVATE_ITEM', { id: t.id })),
            (e.element.id = `filepond--item-${t.id}`),
            e.element.addEventListener('click', e.ref.handleClick),
            (e.ref.container = e.appendChildView(e.createChildView(Fs, { id: t.id }))),
            (e.ref.panel = e.appendChildView(e.createChildView(wn, { name: 'item-panel' }))),
            (e.ref.panel.height = null),
            (t.markedForRemoval = !1),
            !e.query('GET_ALLOW_REORDER'))
        )
            return
        e.element.dataset.dragState = 'idle'
        let i = (a) => {
            if (!a.isPrimary) return
            let n = !1,
                r = { x: a.pageX, y: a.pageY }
            ;(t.dragOrigin = { x: e.translateX, y: e.translateY }), (t.dragCenter = { x: a.offsetX, y: a.offsetY })
            let o = Gs(e.query('GET_ACTIVE_ITEMS'))
            e.dispatch('DID_GRAB_ITEM', { id: t.id, dragState: o })
            let l = (u) => {
                    if (!u.isPrimary) return
                    u.stopPropagation(),
                        u.preventDefault(),
                        (t.dragOffset = { x: u.pageX - r.x, y: u.pageY - r.y }),
                        t.dragOffset.x * t.dragOffset.x + t.dragOffset.y * t.dragOffset.y > 16 &&
                            !n &&
                            ((n = !0), e.element.removeEventListener('click', e.ref.handleClick)),
                        e.dispatch('DID_DRAG_ITEM', { id: t.id, dragState: o })
                },
                s = (u) => {
                    u.isPrimary &&
                        (document.removeEventListener('pointermove', l),
                        document.removeEventListener('pointerup', s),
                        (t.dragOffset = { x: u.pageX - r.x, y: u.pageY - r.y }),
                        e.dispatch('DID_DROP_ITEM', { id: t.id, dragState: o }),
                        n && setTimeout(() => e.element.addEventListener('click', e.ref.handleClick), 0))
                }
            document.addEventListener('pointermove', l), document.addEventListener('pointerup', s)
        }
        e.element.addEventListener('pointerdown', i)
    },
    Us = de({
        DID_UPDATE_PANEL_HEIGHT: ({ root: e, action: t }) => {
            e.height = t.height
        },
    }),
    ks = de(
        {
            DID_GRAB_ITEM: ({ root: e, props: t }) => {
                t.dragOrigin = { x: e.translateX, y: e.translateY }
            },
            DID_DRAG_ITEM: ({ root: e }) => {
                e.element.dataset.dragState = 'drag'
            },
            DID_DROP_ITEM: ({ root: e, props: t }) => {
                ;(t.dragOffset = null), (t.dragOrigin = null), (e.element.dataset.dragState = 'drop')
            },
        },
        ({ root: e, actions: t, props: i, shouldOptimize: a }) => {
            e.element.dataset.dragState === 'drop' && e.scaleX <= 1 && (e.element.dataset.dragState = 'idle')
            let n = t
                .concat()
                .filter((o) => /^DID_/.test(o.type))
                .reverse()
                .find((o) => Ha[o.type])
            n &&
                n.type !== i.currentState &&
                ((i.currentState = n.type), (e.element.dataset.filepondItemState = Ha[i.currentState] || ''))
            let r = e.query('GET_ITEM_PANEL_ASPECT_RATIO') || e.query('GET_PANEL_ASPECT_RATIO')
            r
                ? a || (e.height = e.rect.element.width * r)
                : (Us({ root: e, actions: t, props: i }),
                  !e.height &&
                      e.ref.container.rect.element.height > 0 &&
                      (e.height = e.ref.container.rect.element.height)),
                a && (e.ref.panel.height = null),
                (e.ref.panel.height = e.height)
        },
    ),
    Hs = te({
        create: Vs,
        write: ks,
        destroy: ({ root: e, props: t }) => {
            e.element.removeEventListener('click', e.ref.handleClick), e.dispatch('RELEASE_ITEM', { query: t.id })
        },
        tag: 'li',
        name: 'item',
        mixins: {
            apis: [
                'id',
                'interactionMethod',
                'markedForRemoval',
                'spawnDate',
                'dragCenter',
                'dragOrigin',
                'dragOffset',
            ],
            styles: ['translateX', 'translateY', 'scaleX', 'scaleY', 'opacity', 'height'],
            animations: {
                scaleX: ka,
                scaleY: ka,
                translateX: Ua,
                translateY: Ua,
                opacity: { type: 'tween', duration: 150 },
            },
        },
    }),
    Gi = (e, t) => Math.max(1, Math.floor((e + 1) / t)),
    Vi = (e, t, i) => {
        if (!i) return
        let a = e.rect.element.width,
            n = t.length,
            r = null
        if (n === 0 || i.top < t[0].rect.element.top) return -1
        let l = t[0].rect.element,
            s = l.marginLeft + l.marginRight,
            u = l.width + s,
            c = Gi(a, u)
        if (c === 1) {
            for (let f = 0; f < n; f++) {
                let p = t[f],
                    m = p.rect.outer.top + p.rect.element.height * 0.5
                if (i.top < m) return f
            }
            return n
        }
        let d = l.marginTop + l.marginBottom,
            h = l.height + d
        for (let f = 0; f < n; f++) {
            let p = f % c,
                m = Math.floor(f / c),
                g = p * u,
                b = m * h,
                E = b - l.marginTop,
                T = g + u,
                _ = b + h + l.marginBottom
            if (i.top < _ && i.top > E) {
                if (i.left < T) return f
                f !== n - 1 ? (r = f) : (r = null)
            }
        }
        return r !== null ? r : n
    },
    kt = {
        height: 0,
        width: 0,
        get getHeight() {
            return this.height
        },
        set setHeight(e) {
            ;(this.height === 0 || e === 0) && (this.height = e)
        },
        get getWidth() {
            return this.width
        },
        set setWidth(e) {
            ;(this.width === 0 || e === 0) && (this.width = e)
        },
        setDimensions: function (e, t) {
            ;(this.height === 0 || e === 0) && (this.height = e), (this.width === 0 || t === 0) && (this.width = t)
        },
    },
    Ws = ({ root: e }) => {
        ee(e.element, 'role', 'list'), (e.ref.lastItemSpanwDate = Date.now())
    },
    Ys = ({ root: e, action: t }) => {
        let { id: i, index: a, interactionMethod: n } = t
        e.ref.addIndex = a
        let r = Date.now(),
            o = r,
            l = 1
        if (n !== Ie.NONE) {
            l = 0
            let s = e.query('GET_ITEM_INSERT_INTERVAL'),
                u = r - e.ref.lastItemSpanwDate
            o = u < s ? r + (s - u) : r
        }
        ;(e.ref.lastItemSpanwDate = o),
            e.appendChildView(e.createChildView(Hs, { spawnDate: o, id: i, opacity: l, interactionMethod: n }), a)
    },
    Wa = (e, t, i, a = 0, n = 1) => {
        e.dragOffset
            ? ((e.translateX = null),
              (e.translateY = null),
              (e.translateX = e.dragOrigin.x + e.dragOffset.x),
              (e.translateY = e.dragOrigin.y + e.dragOffset.y),
              (e.scaleX = 1.025),
              (e.scaleY = 1.025))
            : ((e.translateX = t),
              (e.translateY = i),
              Date.now() > e.spawnDate &&
                  (e.opacity === 0 && $s(e, t, i, a, n), (e.scaleX = 1), (e.scaleY = 1), (e.opacity = 1)))
    },
    $s = (e, t, i, a, n) => {
        e.interactionMethod === Ie.NONE
            ? ((e.translateX = null), (e.translateX = t), (e.translateY = null), (e.translateY = i))
            : e.interactionMethod === Ie.DROP
              ? ((e.translateX = null),
                (e.translateX = t - a * 20),
                (e.translateY = null),
                (e.translateY = i - n * 10),
                (e.scaleX = 0.8),
                (e.scaleY = 0.8))
              : e.interactionMethod === Ie.BROWSE
                ? ((e.translateY = null), (e.translateY = i - 30))
                : e.interactionMethod === Ie.API &&
                  ((e.translateX = null), (e.translateX = t - 30), (e.translateY = null))
    },
    qs = ({ root: e, action: t }) => {
        let { id: i } = t,
            a = e.childViews.find((n) => n.id === i)
        a && ((a.scaleX = 0.9), (a.scaleY = 0.9), (a.opacity = 0), (a.markedForRemoval = !0))
    },
    Ti = (e) => e.rect.element.height + e.rect.element.marginBottom * 0.5 + e.rect.element.marginTop * 0.5,
    Xs = (e) => e.rect.element.width + e.rect.element.marginLeft * 0.5 + e.rect.element.marginRight * 0.5,
    js = ({ root: e, action: t }) => {
        let { id: i, dragState: a } = t,
            n = e.query('GET_ITEM', { id: i }),
            r = e.childViews.find((g) => g.id === i),
            o = e.childViews.length,
            l = a.getItemIndex(n)
        if (!r) return
        let s = {
                x: r.dragOrigin.x + r.dragOffset.x + r.dragCenter.x,
                y: r.dragOrigin.y + r.dragOffset.y + r.dragCenter.y,
            },
            u = Ti(r),
            c = Xs(r),
            d = Math.floor(e.rect.outer.width / c)
        d > o && (d = o)
        let h = Math.floor(o / d + 1)
        ;(kt.setHeight = u * h), (kt.setWidth = c * d)
        var f = {
            y: Math.floor(s.y / u),
            x: Math.floor(s.x / c),
            getGridIndex: function () {
                return s.y > kt.getHeight || s.y < 0 || s.x > kt.getWidth || s.x < 0 ? l : this.y * d + this.x
            },
            getColIndex: function () {
                let b = e.query('GET_ACTIVE_ITEMS'),
                    E = e.childViews.filter((D) => D.rect.element.height),
                    T = b.map((D) => E.find((O) => O.id === D.id)),
                    _ = T.findIndex((D) => D === r),
                    y = Ti(r),
                    I = T.length,
                    A = I,
                    R = 0,
                    S = 0,
                    x = 0
                for (let D = 0; D < I; D++)
                    if (((R = Ti(T[D])), (x = S), (S = x + R), s.y < S)) {
                        if (_ > D) {
                            if (s.y < x + y) {
                                A = D
                                break
                            }
                            continue
                        }
                        A = D
                        break
                    }
                return A
            },
        }
        let p = d > 1 ? f.getGridIndex() : f.getColIndex()
        e.dispatch('MOVE_ITEM', { query: r, index: p })
        let m = a.getIndex()
        if (m === void 0 || m !== p) {
            if ((a.setIndex(p), m === void 0)) return
            e.dispatch('DID_REORDER_ITEMS', { items: e.query('GET_ACTIVE_ITEMS'), origin: l, target: p })
        }
    },
    Qs = de({ DID_ADD_ITEM: Ys, DID_REMOVE_ITEM: qs, DID_DRAG_ITEM: js }),
    Zs = ({ root: e, props: t, actions: i, shouldOptimize: a }) => {
        Qs({ root: e, props: t, actions: i })
        let { dragCoordinates: n } = t,
            r = e.rect.element.width,
            o = e.childViews.filter((T) => T.rect.element.height),
            l = e
                .query('GET_ACTIVE_ITEMS')
                .map((T) => o.find((_) => _.id === T.id))
                .filter((T) => T),
            s = n ? Vi(e, l, n) : null,
            u = e.ref.addIndex || null
        e.ref.addIndex = null
        let c = 0,
            d = 0,
            h = 0
        if (l.length === 0) return
        let f = l[0].rect.element,
            p = f.marginTop + f.marginBottom,
            m = f.marginLeft + f.marginRight,
            g = f.width + m,
            b = f.height + p,
            E = Gi(r, g)
        if (E === 1) {
            let T = 0,
                _ = 0
            l.forEach((y, I) => {
                if (s) {
                    let S = I - s
                    S === -2
                        ? (_ = -p * 0.25)
                        : S === -1
                          ? (_ = -p * 0.75)
                          : S === 0
                            ? (_ = p * 0.75)
                            : S === 1
                              ? (_ = p * 0.25)
                              : (_ = 0)
                }
                a && ((y.translateX = null), (y.translateY = null)), y.markedForRemoval || Wa(y, 0, T + _)
                let R = (y.rect.element.height + p) * (y.markedForRemoval ? y.opacity : 1)
                T += R
            })
        } else {
            let T = 0,
                _ = 0
            l.forEach((y, I) => {
                I === s && (c = 1), I === u && (h += 1), y.markedForRemoval && y.opacity < 0.5 && (d -= 1)
                let A = I + h + c + d,
                    R = A % E,
                    S = Math.floor(A / E),
                    x = R * g,
                    D = S * b,
                    O = Math.sign(x - T),
                    z = Math.sign(D - _)
                ;(T = x),
                    (_ = D),
                    !y.markedForRemoval && (a && ((y.translateX = null), (y.translateY = null)), Wa(y, x, D, O, z))
            })
        }
    },
    Ks = (e, t) => t.filter((i) => (i.data && i.data.id ? e.id === i.data.id : !0)),
    Js = te({
        create: Ws,
        write: Zs,
        tag: 'ul',
        name: 'list',
        didWriteView: ({ root: e }) => {
            e.childViews
                .filter((t) => t.markedForRemoval && t.opacity === 0 && t.resting)
                .forEach((t) => {
                    t._destroy(), e.removeChildView(t)
                })
        },
        filterFrameActionsForChild: Ks,
        mixins: { apis: ['dragCoordinates'] },
    }),
    ec = ({ root: e, props: t }) => {
        ;(e.ref.list = e.appendChildView(e.createChildView(Js))), (t.dragCoordinates = null), (t.overflowing = !1)
    },
    tc = ({ root: e, props: t, action: i }) => {
        e.query('GET_ITEM_INSERT_LOCATION_FREEDOM') &&
            (t.dragCoordinates = {
                left: i.position.scopeLeft - e.ref.list.rect.element.left,
                top: i.position.scopeTop - (e.rect.outer.top + e.rect.element.marginTop + e.rect.element.scrollTop),
            })
    },
    ic = ({ props: e }) => {
        e.dragCoordinates = null
    },
    ac = de({ DID_DRAG: tc, DID_END_DRAG: ic }),
    nc = ({ root: e, props: t, actions: i }) => {
        if (
            (ac({ root: e, props: t, actions: i }),
            (e.ref.list.dragCoordinates = t.dragCoordinates),
            t.overflowing && !t.overflow && ((t.overflowing = !1), (e.element.dataset.state = ''), (e.height = null)),
            t.overflow)
        ) {
            let a = Math.round(t.overflow)
            a !== e.height && ((t.overflowing = !0), (e.element.dataset.state = 'overflow'), (e.height = a))
        }
    },
    rc = te({
        create: ec,
        write: nc,
        name: 'list-scroller',
        mixins: {
            apis: ['overflow', 'dragCoordinates'],
            styles: ['height', 'translateY'],
            animations: { translateY: 'spring' },
        },
    }),
    we = (e, t, i, a = '') => {
        i ? ee(e, t, a) : e.removeAttribute(t)
    },
    oc = (e) => {
        if (!(!e || e.value === '')) {
            try {
                e.value = ''
            } catch {}
            if (e.value) {
                let t = Pe('form'),
                    i = e.parentNode,
                    a = e.nextSibling
                t.appendChild(e), t.reset(), a ? i.insertBefore(e, a) : i.appendChild(e)
            }
        }
    },
    lc = ({ root: e, props: t }) => {
        ;(e.element.id = `filepond--browser-${t.id}`),
            ee(e.element, 'name', e.query('GET_NAME')),
            ee(e.element, 'aria-controls', `filepond--assistant-${t.id}`),
            ee(e.element, 'aria-labelledby', `filepond--drop-label-${t.id}`),
            An({ root: e, action: { value: e.query('GET_ACCEPTED_FILE_TYPES') } }),
            vn({ root: e, action: { value: e.query('GET_ALLOW_MULTIPLE') } }),
            Ln({ root: e, action: { value: e.query('GET_ALLOW_DIRECTORIES_ONLY') } }),
            Ai({ root: e }),
            Mn({ root: e, action: { value: e.query('GET_REQUIRED') } }),
            On({ root: e, action: { value: e.query('GET_CAPTURE_METHOD') } }),
            (e.ref.handleChange = (i) => {
                if (!e.element.value) return
                let a = Array.from(e.element.files).map((n) => ((n._relativePath = n.webkitRelativePath), n))
                setTimeout(() => {
                    t.onload(a), oc(e.element)
                }, 250)
            }),
            e.element.addEventListener('change', e.ref.handleChange)
    },
    An = ({ root: e, action: t }) => {
        e.query('GET_ALLOW_SYNC_ACCEPT_ATTRIBUTE') &&
            we(e.element, 'accept', !!t.value, t.value ? t.value.join(',') : '')
    },
    vn = ({ root: e, action: t }) => {
        we(e.element, 'multiple', t.value)
    },
    Ln = ({ root: e, action: t }) => {
        we(e.element, 'webkitdirectory', t.value)
    },
    Ai = ({ root: e }) => {
        let t = e.query('GET_DISABLED'),
            i = e.query('GET_ALLOW_BROWSE'),
            a = t || !i
        we(e.element, 'disabled', a)
    },
    Mn = ({ root: e, action: t }) => {
        t.value ? e.query('GET_TOTAL_ITEMS') === 0 && we(e.element, 'required', !0) : we(e.element, 'required', !1)
    },
    On = ({ root: e, action: t }) => {
        we(e.element, 'capture', !!t.value, t.value === !0 ? '' : t.value)
    },
    Ya = ({ root: e }) => {
        let { element: t } = e
        e.query('GET_TOTAL_ITEMS') > 0
            ? (we(t, 'required', !1), we(t, 'name', !1))
            : (we(t, 'name', !0, e.query('GET_NAME')),
              e.query('GET_CHECK_VALIDITY') && t.setCustomValidity(''),
              e.query('GET_REQUIRED') && we(t, 'required', !0))
    },
    sc = ({ root: e }) => {
        e.query('GET_CHECK_VALIDITY') && e.element.setCustomValidity(e.query('GET_LABEL_INVALID_FIELD'))
    },
    cc = te({
        tag: 'input',
        name: 'browser',
        ignoreRect: !0,
        ignoreRectUpdate: !0,
        attributes: { type: 'file' },
        create: lc,
        destroy: ({ root: e }) => {
            e.element.removeEventListener('change', e.ref.handleChange)
        },
        write: de({
            DID_LOAD_ITEM: Ya,
            DID_REMOVE_ITEM: Ya,
            DID_THROW_ITEM_INVALID: sc,
            DID_SET_DISABLED: Ai,
            DID_SET_ALLOW_BROWSE: Ai,
            DID_SET_ALLOW_DIRECTORIES_ONLY: Ln,
            DID_SET_ALLOW_MULTIPLE: vn,
            DID_SET_ACCEPTED_FILE_TYPES: An,
            DID_SET_CAPTURE_METHOD: On,
            DID_SET_REQUIRED: Mn,
        }),
    }),
    $a = { ENTER: 13, SPACE: 32 },
    dc = ({ root: e, props: t }) => {
        let i = Pe('label')
        ee(i, 'for', `filepond--browser-${t.id}`),
            ee(i, 'id', `filepond--drop-label-${t.id}`),
            ee(i, 'aria-hidden', 'true'),
            (e.ref.handleKeyDown = (a) => {
                ;(a.keyCode === $a.ENTER || a.keyCode === $a.SPACE) && (a.preventDefault(), e.ref.label.click())
            }),
            (e.ref.handleClick = (a) => {
                a.target === i || i.contains(a.target) || e.ref.label.click()
            }),
            i.addEventListener('keydown', e.ref.handleKeyDown),
            e.element.addEventListener('click', e.ref.handleClick),
            Dn(i, t.caption),
            e.appendChild(i),
            (e.ref.label = i)
    },
    Dn = (e, t) => {
        e.innerHTML = t
        let i = e.querySelector('.filepond--label-action')
        return i && ee(i, 'tabindex', '0'), t
    },
    uc = te({
        name: 'drop-label',
        ignoreRect: !0,
        create: dc,
        destroy: ({ root: e }) => {
            e.ref.label.addEventListener('keydown', e.ref.handleKeyDown),
                e.element.removeEventListener('click', e.ref.handleClick)
        },
        write: de({
            DID_SET_LABEL_IDLE: ({ root: e, action: t }) => {
                Dn(e.ref.label, t.value)
            },
        }),
        mixins: {
            styles: ['opacity', 'translateX', 'translateY'],
            animations: { opacity: { type: 'tween', duration: 150 }, translateX: 'spring', translateY: 'spring' },
        },
    }),
    hc = te({
        name: 'drip-blob',
        ignoreRect: !0,
        mixins: {
            styles: ['translateX', 'translateY', 'scaleX', 'scaleY', 'opacity'],
            animations: {
                scaleX: 'spring',
                scaleY: 'spring',
                translateX: 'spring',
                translateY: 'spring',
                opacity: { type: 'tween', duration: 250 },
            },
        },
    }),
    fc = ({ root: e }) => {
        let t = e.rect.element.width * 0.5,
            i = e.rect.element.height * 0.5
        e.ref.blob = e.appendChildView(
            e.createChildView(hc, { opacity: 0, scaleX: 2.5, scaleY: 2.5, translateX: t, translateY: i }),
        )
    },
    pc = ({ root: e, action: t }) => {
        if (!e.ref.blob) {
            fc({ root: e })
            return
        }
        ;(e.ref.blob.translateX = t.position.scopeLeft),
            (e.ref.blob.translateY = t.position.scopeTop),
            (e.ref.blob.scaleX = 1),
            (e.ref.blob.scaleY = 1),
            (e.ref.blob.opacity = 1)
    },
    mc = ({ root: e }) => {
        e.ref.blob && (e.ref.blob.opacity = 0)
    },
    gc = ({ root: e }) => {
        e.ref.blob && ((e.ref.blob.scaleX = 2.5), (e.ref.blob.scaleY = 2.5), (e.ref.blob.opacity = 0))
    },
    Ec = ({ root: e, props: t, actions: i }) => {
        Tc({ root: e, props: t, actions: i })
        let { blob: a } = e.ref
        i.length === 0 && a && a.opacity === 0 && (e.removeChildView(a), (e.ref.blob = null))
    },
    Tc = de({ DID_DRAG: pc, DID_DROP: gc, DID_END_DRAG: mc }),
    Ic = te({ ignoreRect: !0, ignoreRectUpdate: !0, name: 'drip', write: Ec }),
    xn = (e, t) => {
        try {
            let i = new DataTransfer()
            t.forEach((a) => {
                a instanceof File ? i.items.add(a) : i.items.add(new File([a], a.name, { type: a.type }))
            }),
                (e.files = i.files)
        } catch {
            return !1
        }
        return !0
    },
    bc = ({ root: e }) => (e.ref.fields = {}),
    ti = (e, t) => e.ref.fields[t],
    Ui = (e) => {
        e.query('GET_ACTIVE_ITEMS').forEach((t) => {
            e.ref.fields[t.id] && e.element.appendChild(e.ref.fields[t.id])
        })
    },
    qa = ({ root: e }) => Ui(e),
    _c = ({ root: e, action: t }) => {
        let n = !(e.query('GET_ITEM', t.id).origin === ne.LOCAL) && e.query('SHOULD_UPDATE_FILE_INPUT'),
            r = Pe('input')
        ;(r.type = n ? 'file' : 'hidden'),
            (r.name = e.query('GET_NAME')),
            (r.disabled = e.query('GET_DISABLED')),
            (e.ref.fields[t.id] = r),
            Ui(e)
    },
    Rc = ({ root: e, action: t }) => {
        let i = ti(e, t.id)
        if (
            !i ||
            (t.serverFileReference !== null && (i.value = t.serverFileReference), !e.query('SHOULD_UPDATE_FILE_INPUT'))
        )
            return
        let a = e.query('GET_ITEM', t.id)
        xn(i, [a.file])
    },
    yc = ({ root: e, action: t }) => {
        e.query('SHOULD_UPDATE_FILE_INPUT') &&
            setTimeout(() => {
                let i = ti(e, t.id)
                i && xn(i, [t.file])
            }, 0)
    },
    Sc = ({ root: e }) => {
        e.element.disabled = e.query('GET_DISABLED')
    },
    wc = ({ root: e, action: t }) => {
        let i = ti(e, t.id)
        i && (i.parentNode && i.parentNode.removeChild(i), delete e.ref.fields[t.id])
    },
    Ac = ({ root: e, action: t }) => {
        let i = ti(e, t.id)
        i && (t.value === null ? i.removeAttribute('value') : (i.value = t.value), Ui(e))
    },
    vc = de({
        DID_SET_DISABLED: Sc,
        DID_ADD_ITEM: _c,
        DID_LOAD_ITEM: Rc,
        DID_REMOVE_ITEM: wc,
        DID_DEFINE_VALUE: Ac,
        DID_PREPARE_OUTPUT: yc,
        DID_REORDER_ITEMS: qa,
        DID_SORT_ITEMS: qa,
    }),
    Lc = te({ tag: 'fieldset', name: 'data', create: bc, write: vc, ignoreRect: !0 }),
    Mc = (e) => ('getRootNode' in e ? e.getRootNode() : document),
    Oc = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg', 'tiff'],
    Dc = ['css', 'csv', 'html', 'txt'],
    xc = { zip: 'zip|compressed', epub: 'application/epub+zip' },
    Pn = (e = '') => (
        (e = e.toLowerCase()),
        Oc.includes(e)
            ? 'image/' + (e === 'jpg' ? 'jpeg' : e === 'svg' ? 'svg+xml' : e)
            : Dc.includes(e)
              ? 'text/' + e
              : xc[e] || ''
    ),
    ki = (e) =>
        new Promise((t, i) => {
            let a = Vc(e)
            if (a.length && !Pc(e)) return t(a)
            Cc(e).then(t)
        }),
    Pc = (e) => (e.files ? e.files.length > 0 : !1),
    Cc = (e) =>
        new Promise((t, i) => {
            let a = (e.items ? Array.from(e.items) : []).filter((n) => Fc(n)).map((n) => zc(n))
            if (!a.length) {
                t(e.files ? Array.from(e.files) : [])
                return
            }
            Promise.all(a)
                .then((n) => {
                    let r = []
                    n.forEach((o) => {
                        r.push.apply(r, o)
                    }),
                        t(
                            r
                                .filter((o) => o)
                                .map((o) => (o._relativePath || (o._relativePath = o.webkitRelativePath), o)),
                        )
                })
                .catch(console.error)
        }),
    Fc = (e) => {
        if (Cn(e)) {
            let t = Hi(e)
            if (t) return t.isFile || t.isDirectory
        }
        return e.kind === 'file'
    },
    zc = (e) =>
        new Promise((t, i) => {
            if (Gc(e)) {
                Nc(Hi(e)).then(t).catch(i)
                return
            }
            t([e.getAsFile()])
        }),
    Nc = (e) =>
        new Promise((t, i) => {
            let a = [],
                n = 0,
                r = 0,
                o = () => {
                    r === 0 && n === 0 && t(a)
                },
                l = (s) => {
                    n++
                    let u = s.createReader(),
                        c = () => {
                            u.readEntries((d) => {
                                if (d.length === 0) {
                                    n--, o()
                                    return
                                }
                                d.forEach((h) => {
                                    h.isDirectory
                                        ? l(h)
                                        : (r++,
                                          h.file((f) => {
                                              let p = Bc(f)
                                              h.fullPath && (p._relativePath = h.fullPath), a.push(p), r--, o()
                                          }))
                                }),
                                    c()
                            }, i)
                        }
                    c()
                }
            l(e)
        }),
    Bc = (e) => {
        if (e.type.length) return e
        let t = e.lastModifiedDate,
            i = e.name,
            a = Pn(ei(e.name))
        return a.length && ((e = e.slice(0, e.size, a)), (e.name = i), (e.lastModifiedDate = t)), e
    },
    Gc = (e) => Cn(e) && (Hi(e) || {}).isDirectory,
    Cn = (e) => 'webkitGetAsEntry' in e,
    Hi = (e) => e.webkitGetAsEntry(),
    Vc = (e) => {
        let t = []
        try {
            if (((t = kc(e)), t.length)) return t
            t = Uc(e)
        } catch {}
        return t
    },
    Uc = (e) => {
        let t = e.getData('url')
        return typeof t == 'string' && t.length ? [t] : []
    },
    kc = (e) => {
        let t = e.getData('text/html')
        if (typeof t == 'string' && t.length) {
            let i = t.match(/src\s*=\s*"(.+?)"/)
            if (i) return [i[1]]
        }
        return []
    },
    Xt = [],
    Ye = (e) => ({
        pageLeft: e.pageX,
        pageTop: e.pageY,
        scopeLeft: e.offsetX || e.layerX,
        scopeTop: e.offsetY || e.layerY,
    }),
    Hc = (e, t, i) => {
        let a = Wc(t),
            n = {
                element: e,
                filterElement: i,
                state: null,
                ondrop: () => {},
                onenter: () => {},
                ondrag: () => {},
                onexit: () => {},
                onload: () => {},
                allowdrop: () => {},
            }
        return (n.destroy = a.addListener(n)), n
    },
    Wc = (e) => {
        let t = Xt.find((a) => a.element === e)
        if (t) return t
        let i = Yc(e)
        return Xt.push(i), i
    },
    Yc = (e) => {
        let t = [],
            i = { dragenter: qc, dragover: Xc, dragleave: Qc, drop: jc },
            a = {}
        Z(i, (r, o) => {
            ;(a[r] = o(e, t)), e.addEventListener(r, a[r], !1)
        })
        let n = {
            element: e,
            addListener: (r) => (
                t.push(r),
                () => {
                    t.splice(t.indexOf(r), 1),
                        t.length === 0 &&
                            (Xt.splice(Xt.indexOf(n), 1),
                            Z(i, (o) => {
                                e.removeEventListener(o, a[o], !1)
                            }))
                }
            ),
        }
        return n
    },
    $c = (e, t) => ('elementFromPoint' in e || (e = document), e.elementFromPoint(t.x, t.y)),
    Wi = (e, t) => {
        let i = Mc(t),
            a = $c(i, { x: e.pageX - window.pageXOffset, y: e.pageY - window.pageYOffset })
        return a === t || t.contains(a)
    },
    Fn = null,
    Ht = (e, t) => {
        try {
            e.dropEffect = t
        } catch {}
    },
    qc = (e, t) => (i) => {
        i.preventDefault(),
            (Fn = i.target),
            t.forEach((a) => {
                let { element: n, onenter: r } = a
                Wi(i, n) && ((a.state = 'enter'), r(Ye(i)))
            })
    },
    Xc = (e, t) => (i) => {
        i.preventDefault()
        let a = i.dataTransfer
        ki(a).then((n) => {
            let r = !1
            t.some((o) => {
                let { filterElement: l, element: s, onenter: u, onexit: c, ondrag: d, allowdrop: h } = o
                Ht(a, 'copy')
                let f = h(n)
                if (!f) {
                    Ht(a, 'none')
                    return
                }
                if (Wi(i, s)) {
                    if (((r = !0), o.state === null)) {
                        ;(o.state = 'enter'), u(Ye(i))
                        return
                    }
                    if (((o.state = 'over'), l && !f)) {
                        Ht(a, 'none')
                        return
                    }
                    d(Ye(i))
                } else l && !r && Ht(a, 'none'), o.state && ((o.state = null), c(Ye(i)))
            })
        })
    },
    jc = (e, t) => (i) => {
        i.preventDefault()
        let a = i.dataTransfer
        ki(a).then((n) => {
            t.forEach((r) => {
                let { filterElement: o, element: l, ondrop: s, onexit: u, allowdrop: c } = r
                if (((r.state = null), !(o && !Wi(i, l)))) {
                    if (!c(n)) return u(Ye(i))
                    s(Ye(i), n)
                }
            })
        })
    },
    Qc = (e, t) => (i) => {
        Fn === i.target &&
            t.forEach((a) => {
                let { onexit: n } = a
                ;(a.state = null), n(Ye(i))
            })
    },
    Zc = (e, t, i) => {
        e.classList.add('filepond--hopper')
        let { catchesDropsOnPage: a, requiresDropOnElement: n, filterItems: r = (c) => c } = i,
            o = Hc(e, a ? document.documentElement : e, n),
            l = '',
            s = ''
        ;(o.allowdrop = (c) => t(r(c))),
            (o.ondrop = (c, d) => {
                let h = r(d)
                if (!t(h)) {
                    u.ondragend(c)
                    return
                }
                ;(s = 'drag-drop'), u.onload(h, c)
            }),
            (o.ondrag = (c) => {
                u.ondrag(c)
            }),
            (o.onenter = (c) => {
                ;(s = 'drag-over'), u.ondragstart(c)
            }),
            (o.onexit = (c) => {
                ;(s = 'drag-exit'), u.ondragend(c)
            })
        let u = {
            updateHopperState: () => {
                l !== s && ((e.dataset.hopperState = s), (l = s))
            },
            onload: () => {},
            ondragstart: () => {},
            ondrag: () => {},
            ondragend: () => {},
            destroy: () => {
                o.destroy()
            },
        }
        return u
    },
    vi = !1,
    it = [],
    zn = (e) => {
        let t = document.activeElement
        if (t && /textarea|input/i.test(t.nodeName)) {
            let i = !1,
                a = t
            for (; a !== document.body; ) {
                if (a.classList.contains('filepond--root')) {
                    i = !0
                    break
                }
                a = a.parentNode
            }
            if (!i) return
        }
        ki(e.clipboardData).then((i) => {
            i.length && it.forEach((a) => a(i))
        })
    },
    Kc = (e) => {
        it.includes(e) || (it.push(e), !vi && ((vi = !0), document.addEventListener('paste', zn)))
    },
    Jc = (e) => {
        Fi(it, it.indexOf(e)), it.length === 0 && (document.removeEventListener('paste', zn), (vi = !1))
    },
    ed = () => {
        let e = (i) => {
                t.onload(i)
            },
            t = {
                destroy: () => {
                    Jc(e)
                },
                onload: () => {},
            }
        return Kc(e), t
    },
    td = ({ root: e, props: t }) => {
        ;(e.element.id = `filepond--assistant-${t.id}`),
            ee(e.element, 'role', 'status'),
            ee(e.element, 'aria-live', 'polite'),
            ee(e.element, 'aria-relevant', 'additions')
    },
    Xa = null,
    ja = null,
    Ii = [],
    ii = (e, t) => {
        e.element.textContent = t
    },
    id = (e) => {
        e.element.textContent = ''
    },
    Nn = (e, t, i) => {
        let a = e.query('GET_TOTAL_ITEMS')
        ii(
            e,
            `${i} ${t}, ${a} ${
                a === 1 ? e.query('GET_LABEL_FILE_COUNT_SINGULAR') : e.query('GET_LABEL_FILE_COUNT_PLURAL')
            }`,
        ),
            clearTimeout(ja),
            (ja = setTimeout(() => {
                id(e)
            }, 1500))
    },
    Bn = (e) => e.element.parentNode.contains(document.activeElement),
    ad = ({ root: e, action: t }) => {
        if (!Bn(e)) return
        e.element.textContent = ''
        let i = e.query('GET_ITEM', t.id)
        Ii.push(i.filename),
            clearTimeout(Xa),
            (Xa = setTimeout(() => {
                Nn(e, Ii.join(', '), e.query('GET_LABEL_FILE_ADDED')), (Ii.length = 0)
            }, 750))
    },
    nd = ({ root: e, action: t }) => {
        if (!Bn(e)) return
        let i = t.item
        Nn(e, i.filename, e.query('GET_LABEL_FILE_REMOVED'))
    },
    rd = ({ root: e, action: t }) => {
        let a = e.query('GET_ITEM', t.id).filename,
            n = e.query('GET_LABEL_FILE_PROCESSING_COMPLETE')
        ii(e, `${a} ${n}`)
    },
    Qa = ({ root: e, action: t }) => {
        let a = e.query('GET_ITEM', t.id).filename,
            n = e.query('GET_LABEL_FILE_PROCESSING_ABORTED')
        ii(e, `${a} ${n}`)
    },
    Wt = ({ root: e, action: t }) => {
        let a = e.query('GET_ITEM', t.id).filename
        ii(e, `${t.status.main} ${a} ${t.status.sub}`)
    },
    od = te({
        create: td,
        ignoreRect: !0,
        ignoreRectUpdate: !0,
        write: de({
            DID_LOAD_ITEM: ad,
            DID_REMOVE_ITEM: nd,
            DID_COMPLETE_ITEM_PROCESSING: rd,
            DID_ABORT_ITEM_PROCESSING: Qa,
            DID_REVERT_ITEM_PROCESSING: Qa,
            DID_THROW_ITEM_REMOVE_ERROR: Wt,
            DID_THROW_ITEM_LOAD_ERROR: Wt,
            DID_THROW_ITEM_INVALID: Wt,
            DID_THROW_ITEM_PROCESSING_ERROR: Wt,
        }),
        tag: 'span',
        name: 'assistant',
    }),
    Gn = (e, t = '-') => e.replace(new RegExp(`${t}.`, 'g'), (i) => i.charAt(1).toUpperCase()),
    Vn = (e, t = 16, i = !0) => {
        let a = Date.now(),
            n = null
        return (...r) => {
            clearTimeout(n)
            let o = Date.now() - a,
                l = () => {
                    ;(a = Date.now()), e(...r)
                }
            o < t ? i || (n = setTimeout(l, t - o)) : l()
        }
    },
    ld = 1e6,
    jt = (e) => e.preventDefault(),
    sd = ({ root: e, props: t }) => {
        let i = e.query('GET_ID')
        i && (e.element.id = i)
        let a = e.query('GET_CLASS_NAME')
        a &&
            a
                .split(' ')
                .filter((s) => s.length)
                .forEach((s) => {
                    e.element.classList.add(s)
                }),
            (e.ref.label = e.appendChildView(
                e.createChildView(uc, { ...t, translateY: null, caption: e.query('GET_LABEL_IDLE') }),
            )),
            (e.ref.list = e.appendChildView(e.createChildView(rc, { translateY: null }))),
            (e.ref.panel = e.appendChildView(e.createChildView(wn, { name: 'panel-root' }))),
            (e.ref.assistant = e.appendChildView(e.createChildView(od, { ...t }))),
            (e.ref.data = e.appendChildView(e.createChildView(Lc, { ...t }))),
            (e.ref.measure = Pe('div')),
            (e.ref.measure.style.height = '100%'),
            e.element.appendChild(e.ref.measure),
            (e.ref.bounds = null),
            e
                .query('GET_STYLES')
                .filter((s) => !xe(s.value))
                .map(({ name: s, value: u }) => {
                    e.element.dataset[s] = u
                }),
            (e.ref.widthPrevious = null),
            (e.ref.widthUpdated = Vn(() => {
                ;(e.ref.updateHistory = []), e.dispatch('DID_RESIZE_ROOT')
            }, 250)),
            (e.ref.previousAspectRatio = null),
            (e.ref.updateHistory = [])
        let n = window.matchMedia('(pointer: fine) and (hover: hover)').matches,
            r = 'PointerEvent' in window
        e.query('GET_ALLOW_REORDER') &&
            r &&
            !n &&
            (e.element.addEventListener('touchmove', jt, { passive: !1 }),
            e.element.addEventListener('gesturestart', jt))
        let o = e.query('GET_CREDITS')
        if (o.length === 2) {
            let s = document.createElement('a')
            ;(s.className = 'filepond--credits'),
                s.setAttribute('aria-hidden', 'true'),
                (s.href = o[0]),
                (s.tabindex = -1),
                (s.target = '_blank'),
                (s.rel = 'noopener noreferrer'),
                (s.textContent = o[1]),
                e.element.appendChild(s),
                (e.ref.credits = s)
        }
    },
    cd = ({ root: e, props: t, actions: i }) => {
        if (
            (pd({ root: e, props: t, actions: i }),
            i
                .filter((I) => /^DID_SET_STYLE_/.test(I.type))
                .filter((I) => !xe(I.data.value))
                .map(({ type: I, data: A }) => {
                    let R = Gn(I.substring(8).toLowerCase(), '_')
                    ;(e.element.dataset[R] = A.value), e.invalidateLayout()
                }),
            e.rect.element.hidden)
        )
            return
        e.rect.element.width !== e.ref.widthPrevious &&
            ((e.ref.widthPrevious = e.rect.element.width), e.ref.widthUpdated())
        let a = e.ref.bounds
        a || ((a = e.ref.bounds = hd(e)), e.element.removeChild(e.ref.measure), (e.ref.measure = null))
        let { hopper: n, label: r, list: o, panel: l } = e.ref
        n && n.updateHopperState()
        let s = e.query('GET_PANEL_ASPECT_RATIO'),
            u = e.query('GET_ALLOW_MULTIPLE'),
            c = e.query('GET_TOTAL_ITEMS'),
            d = u ? e.query('GET_MAX_FILES') || ld : 1,
            h = c === d,
            f = i.find((I) => I.type === 'DID_ADD_ITEM')
        if (h && f) {
            let I = f.data.interactionMethod
            ;(r.opacity = 0),
                u
                    ? (r.translateY = -40)
                    : I === Ie.API
                      ? (r.translateX = 40)
                      : I === Ie.BROWSE
                        ? (r.translateY = 40)
                        : (r.translateY = 30)
        } else h || ((r.opacity = 1), (r.translateX = 0), (r.translateY = 0))
        let p = dd(e),
            m = ud(e),
            g = r.rect.element.height,
            b = !u || h ? 0 : g,
            E = h ? o.rect.element.marginTop : 0,
            T = c === 0 ? 0 : o.rect.element.marginBottom,
            _ = b + E + m.visual + T,
            y = b + E + m.bounds + T
        if (((o.translateY = Math.max(0, b - o.rect.element.marginTop) - p.top), s)) {
            let I = e.rect.element.width,
                A = I * s
            s !== e.ref.previousAspectRatio && ((e.ref.previousAspectRatio = s), (e.ref.updateHistory = []))
            let R = e.ref.updateHistory
            R.push(I)
            let S = 2
            if (R.length > S * 2) {
                let D = R.length,
                    O = D - 10,
                    z = 0
                for (let v = D; v >= O; v--) if ((R[v] === R[v - 2] && z++, z >= S)) return
            }
            ;(l.scalable = !1), (l.height = A)
            let x = A - b - (T - p.bottom) - (h ? E : 0)
            m.visual > x ? (o.overflow = x) : (o.overflow = null), (e.height = A)
        } else if (a.fixedHeight) {
            l.scalable = !1
            let I = a.fixedHeight - b - (T - p.bottom) - (h ? E : 0)
            m.visual > I ? (o.overflow = I) : (o.overflow = null)
        } else if (a.cappedHeight) {
            let I = _ >= a.cappedHeight,
                A = Math.min(a.cappedHeight, _)
            ;(l.scalable = !0), (l.height = I ? A : A - p.top - p.bottom)
            let R = A - b - (T - p.bottom) - (h ? E : 0)
            _ > a.cappedHeight && m.visual > R ? (o.overflow = R) : (o.overflow = null),
                (e.height = Math.min(a.cappedHeight, y - p.top - p.bottom))
        } else {
            let I = c > 0 ? p.top + p.bottom : 0
            ;(l.scalable = !0), (l.height = Math.max(g, _ - I)), (e.height = Math.max(g, y - I))
        }
        e.ref.credits && l.heightCurrent && (e.ref.credits.style.transform = `translateY(${l.heightCurrent}px)`)
    },
    dd = (e) => {
        let t = e.ref.list.childViews[0].childViews[0]
        return t ? { top: t.rect.element.marginTop, bottom: t.rect.element.marginBottom } : { top: 0, bottom: 0 }
    },
    ud = (e) => {
        let t = 0,
            i = 0,
            a = e.ref.list,
            n = a.childViews[0],
            r = n.childViews.filter((E) => E.rect.element.height),
            o = e
                .query('GET_ACTIVE_ITEMS')
                .map((E) => r.find((T) => T.id === E.id))
                .filter((E) => E)
        if (o.length === 0) return { visual: t, bounds: i }
        let l = n.rect.element.width,
            s = Vi(n, o, a.dragCoordinates),
            u = o[0].rect.element,
            c = u.marginTop + u.marginBottom,
            d = u.marginLeft + u.marginRight,
            h = u.width + d,
            f = u.height + c,
            p = typeof s < 'u' && s >= 0 ? 1 : 0,
            m = o.find((E) => E.markedForRemoval && E.opacity < 0.45) ? -1 : 0,
            g = o.length + p + m,
            b = Gi(l, h)
        return (
            b === 1
                ? o.forEach((E) => {
                      let T = E.rect.element.height + c
                      ;(i += T), (t += T * E.opacity)
                  })
                : ((i = Math.ceil(g / b) * f), (t = i)),
            { visual: t, bounds: i }
        )
    },
    hd = (e) => {
        let t = e.ref.measureHeight || null
        return { cappedHeight: parseInt(e.style.maxHeight, 10) || null, fixedHeight: t === 0 ? null : t }
    },
    Yi = (e, t) => {
        let i = e.query('GET_ALLOW_REPLACE'),
            a = e.query('GET_ALLOW_MULTIPLE'),
            n = e.query('GET_TOTAL_ITEMS'),
            r = e.query('GET_MAX_FILES'),
            o = t.length
        return !a && o > 1
            ? (e.dispatch('DID_THROW_MAX_FILES', { source: t, error: K('warning', 0, 'Max files') }), !0)
            : ((r = a ? r : 1),
              !a && i
                  ? !1
                  : lt(r) && n + o > r
                    ? (e.dispatch('DID_THROW_MAX_FILES', { source: t, error: K('warning', 0, 'Max files') }), !0)
                    : !1)
    },
    fd = (e, t, i) => {
        let a = e.childViews[0]
        return Vi(a, t, {
            left: i.scopeLeft - a.rect.element.left,
            top: i.scopeTop - (e.rect.outer.top + e.rect.element.marginTop + e.rect.element.scrollTop),
        })
    },
    Za = (e) => {
        let t = e.query('GET_ALLOW_DROP'),
            i = e.query('GET_DISABLED'),
            a = t && !i
        if (a && !e.ref.hopper) {
            let n = Zc(
                e.element,
                (r) => {
                    let o = e.query('GET_BEFORE_DROP_FILE') || (() => !0)
                    return e.query('GET_DROP_VALIDATION')
                        ? r.every((s) => $e('ALLOW_HOPPER_ITEM', s, { query: e.query }).every((u) => u === !0) && o(s))
                        : !0
                },
                {
                    filterItems: (r) => {
                        let o = e.query('GET_IGNORED_FILES')
                        return r.filter((l) => (ot(l) ? !o.includes(l.name.toLowerCase()) : !0))
                    },
                    catchesDropsOnPage: e.query('GET_DROP_ON_PAGE'),
                    requiresDropOnElement: e.query('GET_DROP_ON_ELEMENT'),
                },
            )
            ;(n.onload = (r, o) => {
                let s = e.ref.list.childViews[0].childViews.filter((c) => c.rect.element.height),
                    u = e
                        .query('GET_ACTIVE_ITEMS')
                        .map((c) => s.find((d) => d.id === c.id))
                        .filter((c) => c)
                ye('ADD_ITEMS', r, { dispatch: e.dispatch }).then((c) => {
                    if (Yi(e, c)) return !1
                    e.dispatch('ADD_ITEMS', { items: c, index: fd(e.ref.list, u, o), interactionMethod: Ie.DROP })
                }),
                    e.dispatch('DID_DROP', { position: o }),
                    e.dispatch('DID_END_DRAG', { position: o })
            }),
                (n.ondragstart = (r) => {
                    e.dispatch('DID_START_DRAG', { position: r })
                }),
                (n.ondrag = Vn((r) => {
                    e.dispatch('DID_DRAG', { position: r })
                })),
                (n.ondragend = (r) => {
                    e.dispatch('DID_END_DRAG', { position: r })
                }),
                (e.ref.hopper = n),
                (e.ref.drip = e.appendChildView(e.createChildView(Ic)))
        } else !a && e.ref.hopper && (e.ref.hopper.destroy(), (e.ref.hopper = null), e.removeChildView(e.ref.drip))
    },
    Ka = (e, t) => {
        let i = e.query('GET_ALLOW_BROWSE'),
            a = e.query('GET_DISABLED'),
            n = i && !a
        n && !e.ref.browser
            ? (e.ref.browser = e.appendChildView(
                  e.createChildView(cc, {
                      ...t,
                      onload: (r) => {
                          ye('ADD_ITEMS', r, { dispatch: e.dispatch }).then((o) => {
                              if (Yi(e, o)) return !1
                              e.dispatch('ADD_ITEMS', { items: o, index: -1, interactionMethod: Ie.BROWSE })
                          })
                      },
                  }),
                  0,
              ))
            : !n && e.ref.browser && (e.removeChildView(e.ref.browser), (e.ref.browser = null))
    },
    Ja = (e) => {
        let t = e.query('GET_ALLOW_PASTE'),
            i = e.query('GET_DISABLED'),
            a = t && !i
        a && !e.ref.paster
            ? ((e.ref.paster = ed()),
              (e.ref.paster.onload = (n) => {
                  ye('ADD_ITEMS', n, { dispatch: e.dispatch }).then((r) => {
                      if (Yi(e, r)) return !1
                      e.dispatch('ADD_ITEMS', { items: r, index: -1, interactionMethod: Ie.PASTE })
                  })
              }))
            : !a && e.ref.paster && (e.ref.paster.destroy(), (e.ref.paster = null))
    },
    pd = de({
        DID_SET_ALLOW_BROWSE: ({ root: e, props: t }) => {
            Ka(e, t)
        },
        DID_SET_ALLOW_DROP: ({ root: e }) => {
            Za(e)
        },
        DID_SET_ALLOW_PASTE: ({ root: e }) => {
            Ja(e)
        },
        DID_SET_DISABLED: ({ root: e, props: t }) => {
            Za(e),
                Ja(e),
                Ka(e, t),
                e.query('GET_DISABLED')
                    ? (e.element.dataset.disabled = 'disabled')
                    : e.element.removeAttribute('data-disabled')
        },
    }),
    md = te({
        name: 'root',
        read: ({ root: e }) => {
            e.ref.measure && (e.ref.measureHeight = e.ref.measure.offsetHeight)
        },
        create: sd,
        write: cd,
        destroy: ({ root: e }) => {
            e.ref.paster && e.ref.paster.destroy(),
                e.ref.hopper && e.ref.hopper.destroy(),
                e.element.removeEventListener('touchmove', jt),
                e.element.removeEventListener('gesturestart', jt)
        },
        mixins: { styles: ['height'] },
    }),
    gd = (e = {}) => {
        let t = null,
            i = qt(),
            a = Po(Tl(i), [zl, _l(i)], [ls, bl(i)])
        a.dispatch('SET_OPTIONS', { options: e })
        let n = () => {
            document.hidden || a.dispatch('KICK')
        }
        document.addEventListener('visibilitychange', n)
        let r = null,
            o = !1,
            l = !1,
            s = null,
            u = null,
            c = () => {
                o || (o = !0),
                    clearTimeout(r),
                    (r = setTimeout(() => {
                        ;(o = !1), (s = null), (u = null), l && ((l = !1), a.dispatch('DID_STOP_RESIZE'))
                    }, 500))
            }
        window.addEventListener('resize', c)
        let d = md(a, { id: Ci() }),
            h = !1,
            f = !1,
            p = {
                _read: () => {
                    o &&
                        ((u = window.innerWidth),
                        s || (s = u),
                        !l && u !== s && (a.dispatch('DID_START_RESIZE'), (l = !0))),
                        f && h && (h = d.element.offsetParent === null),
                        !h && (d._read(), (f = d.rect.element.hidden))
                },
                _write: (w) => {
                    let L = a.processActionQueue().filter((F) => !/^SET_/.test(F.type))
                    ;(h && !L.length) ||
                        (E(L), (h = d._write(w, L, l)), Sl(a.query('GET_ITEMS')), h && a.processDispatchQueue())
                },
            },
            m = (w) => (L) => {
                let F = { type: w }
                if (!L) return F
                if (
                    (L.hasOwnProperty('error') && (F.error = L.error ? { ...L.error } : null),
                    L.status && (F.status = { ...L.status }),
                    L.file && (F.output = L.file),
                    L.source)
                )
                    F.file = L.source
                else if (L.item || L.id) {
                    let C = L.item ? L.item : a.query('GET_ITEM', L.id)
                    F.file = C ? ue(C) : null
                }
                return (
                    L.items && (F.items = L.items.map(ue)),
                    /progress/.test(w) && (F.progress = L.progress),
                    L.hasOwnProperty('origin') &&
                        L.hasOwnProperty('target') &&
                        ((F.origin = L.origin), (F.target = L.target)),
                    F
                )
            },
            g = {
                DID_DESTROY: m('destroy'),
                DID_INIT: m('init'),
                DID_THROW_MAX_FILES: m('warning'),
                DID_INIT_ITEM: m('initfile'),
                DID_START_ITEM_LOAD: m('addfilestart'),
                DID_UPDATE_ITEM_LOAD_PROGRESS: m('addfileprogress'),
                DID_LOAD_ITEM: m('addfile'),
                DID_THROW_ITEM_INVALID: [m('error'), m('addfile')],
                DID_THROW_ITEM_LOAD_ERROR: [m('error'), m('addfile')],
                DID_THROW_ITEM_REMOVE_ERROR: [m('error'), m('removefile')],
                DID_PREPARE_OUTPUT: m('preparefile'),
                DID_START_ITEM_PROCESSING: m('processfilestart'),
                DID_UPDATE_ITEM_PROCESS_PROGRESS: m('processfileprogress'),
                DID_ABORT_ITEM_PROCESSING: m('processfileabort'),
                DID_COMPLETE_ITEM_PROCESSING: m('processfile'),
                DID_COMPLETE_ITEM_PROCESSING_ALL: m('processfiles'),
                DID_REVERT_ITEM_PROCESSING: m('processfilerevert'),
                DID_THROW_ITEM_PROCESSING_ERROR: [m('error'), m('processfile')],
                DID_REMOVE_ITEM: m('removefile'),
                DID_UPDATE_ITEMS: m('updatefiles'),
                DID_ACTIVATE_ITEM: m('activatefile'),
                DID_REORDER_ITEMS: m('reorderfiles'),
            },
            b = (w) => {
                let L = { pond: P, ...w }
                delete L.type,
                    d.element.dispatchEvent(
                        new CustomEvent(`FilePond:${w.type}`, { detail: L, bubbles: !0, cancelable: !0, composed: !0 }),
                    )
                let F = []
                w.hasOwnProperty('error') && F.push(w.error), w.hasOwnProperty('file') && F.push(w.file)
                let C = ['type', 'error', 'file']
                Object.keys(w)
                    .filter((G) => !C.includes(G))
                    .forEach((G) => F.push(w[G])),
                    P.fire(w.type, ...F)
                let V = a.query(`GET_ON${w.type.toUpperCase()}`)
                V && V(...F)
            },
            E = (w) => {
                w.length &&
                    w
                        .filter((L) => g[L.type])
                        .forEach((L) => {
                            let F = g[L.type]
                            ;(Array.isArray(F) ? F : [F]).forEach((C) => {
                                L.type === 'DID_INIT_ITEM'
                                    ? b(C(L.data))
                                    : setTimeout(() => {
                                          b(C(L.data))
                                      }, 0)
                            })
                        })
            },
            T = (w) => a.dispatch('SET_OPTIONS', { options: w }),
            _ = (w) => a.query('GET_ACTIVE_ITEM', w),
            y = (w) =>
                new Promise((L, F) => {
                    a.dispatch('REQUEST_ITEM_PREPARE', {
                        query: w,
                        success: (C) => {
                            L(C)
                        },
                        failure: (C) => {
                            F(C)
                        },
                    })
                }),
            I = (w, L = {}) =>
                new Promise((F, C) => {
                    S([{ source: w, options: L }], { index: L.index })
                        .then((V) => F(V && V[0]))
                        .catch(C)
                }),
            A = (w) => w.file && w.id,
            R = (w, L) => (
                typeof w == 'object' && !A(w) && !L && ((L = w), (w = void 0)),
                a.dispatch('REMOVE_ITEM', { ...L, query: w }),
                a.query('GET_ACTIVE_ITEM', w) === null
            ),
            S = (...w) =>
                new Promise((L, F) => {
                    let C = [],
                        V = {}
                    if (Qt(w[0])) C.push.apply(C, w[0]), Object.assign(V, w[1] || {})
                    else {
                        let G = w[w.length - 1]
                        typeof G == 'object' && !(G instanceof Blob) && Object.assign(V, w.pop()), C.push(...w)
                    }
                    a.dispatch('ADD_ITEMS', {
                        items: C,
                        index: V.index,
                        interactionMethod: Ie.API,
                        success: L,
                        failure: F,
                    })
                }),
            x = () => a.query('GET_ACTIVE_ITEMS'),
            D = (w) =>
                new Promise((L, F) => {
                    a.dispatch('REQUEST_ITEM_PROCESSING', {
                        query: w,
                        success: (C) => {
                            L(C)
                        },
                        failure: (C) => {
                            F(C)
                        },
                    })
                }),
            O = (...w) => {
                let L = Array.isArray(w[0]) ? w[0] : w,
                    F = L.length ? L : x()
                return Promise.all(F.map(y))
            },
            z = (...w) => {
                let L = Array.isArray(w[0]) ? w[0] : w
                if (!L.length) {
                    let F = x().filter(
                        (C) =>
                            !(C.status === H.IDLE && C.origin === ne.LOCAL) &&
                            C.status !== H.PROCESSING &&
                            C.status !== H.PROCESSING_COMPLETE &&
                            C.status !== H.PROCESSING_REVERT_ERROR,
                    )
                    return Promise.all(F.map(D))
                }
                return Promise.all(L.map(D))
            },
            v = (...w) => {
                let L = Array.isArray(w[0]) ? w[0] : w,
                    F
                typeof L[L.length - 1] == 'object' ? (F = L.pop()) : Array.isArray(w[0]) && (F = w[1])
                let C = x()
                return L.length
                    ? L.map((G) => (Ve(G) ? (C[G] ? C[G].id : null) : G))
                          .filter((G) => G)
                          .map((G) => R(G, F))
                    : Promise.all(C.map((G) => R(G, F)))
            },
            P = {
                ...Jt(),
                ...p,
                ...Il(a, i),
                setOptions: T,
                addFile: I,
                addFiles: S,
                getFile: _,
                processFile: D,
                prepareFile: y,
                removeFile: R,
                moveFile: (w, L) => a.dispatch('MOVE_ITEM', { query: w, index: L }),
                getFiles: x,
                processFiles: z,
                removeFiles: v,
                prepareFiles: O,
                sort: (w) => a.dispatch('SORT', { compare: w }),
                browse: () => {
                    var w = d.element.querySelector('input[type=file]')
                    w && w.click()
                },
                destroy: () => {
                    P.fire('destroy', d.element),
                        a.dispatch('ABORT_ALL'),
                        d._destroy(),
                        window.removeEventListener('resize', c),
                        document.removeEventListener('visibilitychange', n),
                        a.dispatch('DID_DESTROY')
                },
                insertBefore: (w) => Ra(d.element, w),
                insertAfter: (w) => ya(d.element, w),
                appendTo: (w) => w.appendChild(d.element),
                replaceElement: (w) => {
                    Ra(d.element, w), w.parentNode.removeChild(w), (t = w)
                },
                restoreElement: () => {
                    t && (ya(t, d.element), d.element.parentNode.removeChild(d.element), (t = null))
                },
                isAttachedTo: (w) => d.element === w || t === w,
                element: { get: () => d.element },
                status: { get: () => a.query('GET_STATUS') },
            }
        return a.dispatch('DID_INIT'), Fe(P)
    },
    Un = (e = {}) => {
        let t = {}
        return (
            Z(qt(), (a, n) => {
                t[a] = n[0]
            }),
            gd({ ...t, ...e })
        )
    },
    Ed = (e) => e.charAt(0).toLowerCase() + e.slice(1),
    Td = (e) => Gn(e.replace(/^data-/, '')),
    kn = (e, t) => {
        Z(t, (i, a) => {
            Z(e, (n, r) => {
                let o = new RegExp(i)
                if (!o.test(n) || (delete e[n], a === !1)) return
                if (ce(a)) {
                    e[a] = r
                    return
                }
                let s = a.group
                re(a) && !e[s] && (e[s] = {}), (e[s][Ed(n.replace(o, ''))] = r)
            }),
                a.mapping && kn(e[a.group], a.mapping)
        })
    },
    Id = (e, t = {}) => {
        let i = []
        Z(e.attributes, (n) => {
            i.push(e.attributes[n])
        })
        let a = i
            .filter((n) => n.name)
            .reduce((n, r) => {
                let o = ee(e, r.name)
                return (n[Td(r.name)] = o === r.name ? !0 : o), n
            }, {})
        return kn(a, t), a
    },
    bd = (e, t = {}) => {
        let i = {
            '^class$': 'className',
            '^multiple$': 'allowMultiple',
            '^capture$': 'captureMethod',
            '^webkitdirectory$': 'allowDirectoriesOnly',
            '^server': {
                group: 'server',
                mapping: {
                    '^process': { group: 'process' },
                    '^revert': { group: 'revert' },
                    '^fetch': { group: 'fetch' },
                    '^restore': { group: 'restore' },
                    '^load': { group: 'load' },
                },
            },
            '^type$': !1,
            '^files$': !1,
        }
        $e('SET_ATTRIBUTE_TO_OPTION_MAP', i)
        let a = { ...t },
            n = Id(e.nodeName === 'FIELDSET' ? e.querySelector('input[type=file]') : e, i)
        Object.keys(n).forEach((o) => {
            re(n[o]) ? (re(a[o]) || (a[o] = {}), Object.assign(a[o], n[o])) : (a[o] = n[o])
        }),
            (a.files = (t.files || []).concat(
                Array.from(e.querySelectorAll('input:not([type=file])')).map((o) => ({
                    source: o.value,
                    options: { type: o.dataset.type },
                })),
            ))
        let r = Un(a)
        return (
            e.files &&
                Array.from(e.files).forEach((o) => {
                    r.addFile(o)
                }),
            r.replaceElement(e),
            r
        )
    },
    _d = (...e) => (xo(e[0]) ? bd(...e) : Un(...e)),
    Rd = ['fire', '_read', '_write'],
    en = (e) => {
        let t = {}
        return cn(e, t, Rd), t
    },
    yd = (e, t) => e.replace(/(?:{([a-zA-Z]+)})/g, (i, a) => t[a]),
    Sd = (e) => {
        let t = new Blob(['(', e.toString(), ')()'], { type: 'application/javascript' }),
            i = URL.createObjectURL(t),
            a = new Worker(i)
        return {
            transfer: (n, r) => {},
            post: (n, r, o) => {
                let l = Ci()
                ;(a.onmessage = (s) => {
                    s.data.id === l && r(s.data.message)
                }),
                    a.postMessage({ id: l, message: n }, o)
            },
            terminate: () => {
                a.terminate(), URL.revokeObjectURL(i)
            },
        }
    },
    wd = (e) =>
        new Promise((t, i) => {
            let a = new Image()
            ;(a.onload = () => {
                t(a)
            }),
                (a.onerror = (n) => {
                    i(n)
                }),
                (a.src = e)
        }),
    Hn = (e, t) => {
        let i = e.slice(0, e.size, e.type)
        return (i.lastModifiedDate = e.lastModifiedDate), (i.name = t), i
    },
    Ad = (e) => Hn(e, e.name),
    tn = [],
    vd = (e) => {
        if (tn.includes(e)) return
        tn.push(e)
        let t = e({
            addFilter: Al,
            utils: {
                Type: M,
                forin: Z,
                isString: ce,
                isFile: ot,
                toNaturalFileSize: Rn,
                replaceInString: yd,
                getExtensionFromFilename: ei,
                getFilenameWithoutExtension: In,
                guesstimateMimeType: Pn,
                getFileFromBlob: rt,
                getFilenameFromURL: St,
                createRoute: de,
                createWorker: Sd,
                createView: te,
                createItemAPI: ue,
                loadImage: wd,
                copyFile: Ad,
                renameFile: Hn,
                createBlob: gn,
                applyFilterChain: ye,
                text: J,
                getNumericAspectRatioFromString: hn,
            },
            views: { fileActionButton: _n },
        })
        vl(t.options)
    },
    Ld = () => Object.prototype.toString.call(window.operamini) === '[object OperaMini]',
    Md = () => 'Promise' in window,
    Od = () => 'slice' in Blob.prototype,
    Dd = () => 'URL' in window && 'createObjectURL' in window.URL,
    xd = () => 'visibilityState' in document,
    Pd = () => 'performance' in window,
    Cd = () => 'supports' in (window.CSS || {}),
    Fd = () => /MSIE|Trident/.test(window.navigator.userAgent),
    Li = (() => {
        let e = an() && !Ld() && xd() && Md() && Od() && Dd() && Pd() && (Cd() || Fd())
        return () => e
    })(),
    Ce = { apps: [] },
    zd = 'filepond',
    qe = () => {},
    Wn = {},
    st = {},
    wt = {},
    Mi = {},
    at = qe,
    nt = qe,
    Oi = qe,
    Di = qe,
    ge = qe,
    xi = qe,
    yt = qe
if (Li()) {
    nl(
        () => {
            Ce.apps.forEach((i) => i._read())
        },
        (i) => {
            Ce.apps.forEach((a) => a._write(i))
        },
    )
    let e = () => {
        document.dispatchEvent(
            new CustomEvent('FilePond:loaded', {
                detail: {
                    supported: Li,
                    create: at,
                    destroy: nt,
                    parse: Oi,
                    find: Di,
                    registerPlugin: ge,
                    setOptions: yt,
                },
            }),
        ),
            document.removeEventListener('DOMContentLoaded', e)
    }
    document.readyState !== 'loading' ? setTimeout(() => e(), 0) : document.addEventListener('DOMContentLoaded', e)
    let t = () =>
        Z(qt(), (i, a) => {
            Mi[i] = a[1]
        })
    ;(Wn = { ...fn }),
        (wt = { ...ne }),
        (st = { ...H }),
        (Mi = {}),
        t(),
        (at = (...i) => {
            let a = _d(...i)
            return a.on('destroy', nt), Ce.apps.push(a), en(a)
        }),
        (nt = (i) => {
            let a = Ce.apps.findIndex((n) => n.isAttachedTo(i))
            return a >= 0 ? (Ce.apps.splice(a, 1)[0].restoreElement(), !0) : !1
        }),
        (Oi = (i) =>
            Array.from(i.querySelectorAll(`.${zd}`))
                .filter((r) => !Ce.apps.find((o) => o.isAttachedTo(r)))
                .map((r) => at(r))),
        (Di = (i) => {
            let a = Ce.apps.find((n) => n.isAttachedTo(i))
            return a ? en(a) : null
        }),
        (ge = (...i) => {
            i.forEach(vd), t()
        }),
        (xi = () => {
            let i = {}
            return (
                Z(qt(), (a, n) => {
                    i[a] = n[0]
                }),
                i
            )
        }),
        (yt = (i) => (
            re(i) &&
                (Ce.apps.forEach((a) => {
                    a.setOptions(i)
                }),
                Ll(i)),
            xi()
        ))
}
function Yn(e, t) {
    var i = Object.keys(e)
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e)
        t &&
            (a = a.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable
            })),
            i.push.apply(i, a)
    }
    return i
}
function lr(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t] != null ? arguments[t] : {}
        t % 2
            ? Yn(Object(i), !0).forEach(function (a) {
                  Gd(e, a, i[a])
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : Yn(Object(i)).forEach(function (a) {
                    Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(i, a))
                })
    }
    return e
}
function ji(e) {
    '@babel/helpers - typeof'
    return (
        (ji =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t
                  }
                : function (t) {
                      return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t
                  }),
        ji(e)
    )
}
function Nd(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}
function $n(e, t) {
    for (var i = 0; i < t.length; i++) {
        var a = t[i]
        ;(a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(e, cr(a.key), a)
    }
}
function Bd(e, t, i) {
    return t && $n(e.prototype, t), i && $n(e, i), Object.defineProperty(e, 'prototype', { writable: !1 }), e
}
function Gd(e, t, i) {
    return (
        (t = cr(t)),
        t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = i),
        e
    )
}
function sr(e) {
    return Vd(e) || Ud(e) || kd(e) || Hd()
}
function Vd(e) {
    if (Array.isArray(e)) return Qi(e)
}
function Ud(e) {
    if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null) return Array.from(e)
}
function kd(e, t) {
    if (e) {
        if (typeof e == 'string') return Qi(e, t)
        var i = Object.prototype.toString.call(e).slice(8, -1)
        if ((i === 'Object' && e.constructor && (i = e.constructor.name), i === 'Map' || i === 'Set'))
            return Array.from(e)
        if (i === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return Qi(e, t)
    }
}
function Qi(e, t) {
    ;(t == null || t > e.length) && (t = e.length)
    for (var i = 0, a = new Array(t); i < t; i++) a[i] = e[i]
    return a
}
function Hd() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function Wd(e, t) {
    if (typeof e != 'object' || e === null) return e
    var i = e[Symbol.toPrimitive]
    if (i !== void 0) {
        var a = i.call(e, t || 'default')
        if (typeof a != 'object') return a
        throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return (t === 'string' ? String : Number)(e)
}
function cr(e) {
    var t = Wd(e, 'string')
    return typeof t == 'symbol' ? t : String(t)
}
var oi = typeof window < 'u' && typeof window.document < 'u',
    Le = oi ? window : {},
    ra = oi && Le.document.documentElement ? 'ontouchstart' in Le.document.documentElement : !1,
    oa = oi ? 'PointerEvent' in Le : !1,
    j = 'cropper',
    la = 'all',
    dr = 'crop',
    ur = 'move',
    hr = 'zoom',
    Xe = 'e',
    je = 'w',
    ct = 's',
    ze = 'n',
    At = 'ne',
    vt = 'nw',
    Lt = 'se',
    Mt = 'sw',
    Zi = ''.concat(j, '-crop'),
    qn = ''.concat(j, '-disabled'),
    fe = ''.concat(j, '-hidden'),
    Xn = ''.concat(j, '-hide'),
    Yd = ''.concat(j, '-invisible'),
    ri = ''.concat(j, '-modal'),
    Ki = ''.concat(j, '-move'),
    Dt = ''.concat(j, 'Action'),
    ai = ''.concat(j, 'Preview'),
    sa = 'crop',
    fr = 'move',
    pr = 'none',
    Ji = 'crop',
    ea = 'cropend',
    ta = 'cropmove',
    ia = 'cropstart',
    jn = 'dblclick',
    $d = ra ? 'touchstart' : 'mousedown',
    qd = ra ? 'touchmove' : 'mousemove',
    Xd = ra ? 'touchend touchcancel' : 'mouseup',
    Qn = oa ? 'pointerdown' : $d,
    Zn = oa ? 'pointermove' : qd,
    Kn = oa ? 'pointerup pointercancel' : Xd,
    Jn = 'ready',
    er = 'resize',
    tr = 'wheel',
    aa = 'zoom',
    ir = 'image/jpeg',
    jd = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,
    Qd = /^data:/,
    Zd = /^data:image\/jpeg;base64,/,
    Kd = /^img|canvas$/i,
    mr = 200,
    gr = 100,
    ar = {
        viewMode: 0,
        dragMode: sa,
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
        minContainerWidth: mr,
        minContainerHeight: gr,
        ready: null,
        cropstart: null,
        cropmove: null,
        cropend: null,
        crop: null,
        zoom: null,
    },
    Jd =
        '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',
    eu = Number.isNaN || Le.isNaN
function Y(e) {
    return typeof e == 'number' && !eu(e)
}
var nr = function (t) {
    return t > 0 && t < 1 / 0
}
function qi(e) {
    return typeof e > 'u'
}
function Qe(e) {
    return ji(e) === 'object' && e !== null
}
var tu = Object.prototype.hasOwnProperty
function dt(e) {
    if (!Qe(e)) return !1
    try {
        var t = e.constructor,
            i = t.prototype
        return t && i && tu.call(i, 'isPrototypeOf')
    } catch {
        return !1
    }
}
function he(e) {
    return typeof e == 'function'
}
var iu = Array.prototype.slice
function Er(e) {
    return Array.from ? Array.from(e) : iu.call(e)
}
function ie(e, t) {
    return (
        e &&
            he(t) &&
            (Array.isArray(e) || Y(e.length)
                ? Er(e).forEach(function (i, a) {
                      t.call(e, i, a, e)
                  })
                : Qe(e) &&
                  Object.keys(e).forEach(function (i) {
                      t.call(e, e[i], i, e)
                  })),
        e
    )
}
var Q =
        Object.assign ||
        function (t) {
            for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++) a[n - 1] = arguments[n]
            return (
                Qe(t) &&
                    a.length > 0 &&
                    a.forEach(function (r) {
                        Qe(r) &&
                            Object.keys(r).forEach(function (o) {
                                t[o] = r[o]
                            })
                    }),
                t
            )
        },
    au = /\.\d*(?:0|9){12}\d*$/
function ht(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11
    return au.test(e) ? Math.round(e * t) / t : e
}
var nu = /^width|height|left|top|marginLeft|marginTop$/
function Ne(e, t) {
    var i = e.style
    ie(t, function (a, n) {
        nu.test(n) && Y(a) && (a = ''.concat(a, 'px')), (i[n] = a)
    })
}
function ru(e, t) {
    return e.classList ? e.classList.contains(t) : e.className.indexOf(t) > -1
}
function oe(e, t) {
    if (t) {
        if (Y(e.length)) {
            ie(e, function (a) {
                oe(a, t)
            })
            return
        }
        if (e.classList) {
            e.classList.add(t)
            return
        }
        var i = e.className.trim()
        i ? i.indexOf(t) < 0 && (e.className = ''.concat(i, ' ').concat(t)) : (e.className = t)
    }
}
function ve(e, t) {
    if (t) {
        if (Y(e.length)) {
            ie(e, function (i) {
                ve(i, t)
            })
            return
        }
        if (e.classList) {
            e.classList.remove(t)
            return
        }
        e.className.indexOf(t) >= 0 && (e.className = e.className.replace(t, ''))
    }
}
function ut(e, t, i) {
    if (t) {
        if (Y(e.length)) {
            ie(e, function (a) {
                ut(a, t, i)
            })
            return
        }
        i ? oe(e, t) : ve(e, t)
    }
}
var ou = /([a-z\d])([A-Z])/g
function ca(e) {
    return e.replace(ou, '$1-$2').toLowerCase()
}
function na(e, t) {
    return Qe(e[t]) ? e[t] : e.dataset ? e.dataset[t] : e.getAttribute('data-'.concat(ca(t)))
}
function xt(e, t, i) {
    Qe(i) ? (e[t] = i) : e.dataset ? (e.dataset[t] = i) : e.setAttribute('data-'.concat(ca(t)), i)
}
function lu(e, t) {
    if (Qe(e[t]))
        try {
            delete e[t]
        } catch {
            e[t] = void 0
        }
    else if (e.dataset)
        try {
            delete e.dataset[t]
        } catch {
            e.dataset[t] = void 0
        }
    else e.removeAttribute('data-'.concat(ca(t)))
}
var Tr = /\s\s*/,
    Ir = (function () {
        var e = !1
        if (oi) {
            var t = !1,
                i = function () {},
                a = Object.defineProperty({}, 'once', {
                    get: function () {
                        return (e = !0), t
                    },
                    set: function (r) {
                        t = r
                    },
                })
            Le.addEventListener('test', i, a), Le.removeEventListener('test', i, a)
        }
        return e
    })()
function Ae(e, t, i) {
    var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
        n = i
    t.trim()
        .split(Tr)
        .forEach(function (r) {
            if (!Ir) {
                var o = e.listeners
                o &&
                    o[r] &&
                    o[r][i] &&
                    ((n = o[r][i]),
                    delete o[r][i],
                    Object.keys(o[r]).length === 0 && delete o[r],
                    Object.keys(o).length === 0 && delete e.listeners)
            }
            e.removeEventListener(r, n, a)
        })
}
function be(e, t, i) {
    var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
        n = i
    t.trim()
        .split(Tr)
        .forEach(function (r) {
            if (a.once && !Ir) {
                var o = e.listeners,
                    l = o === void 0 ? {} : o
                ;(n = function () {
                    delete l[r][i], e.removeEventListener(r, n, a)
                    for (var u = arguments.length, c = new Array(u), d = 0; d < u; d++) c[d] = arguments[d]
                    i.apply(e, c)
                }),
                    l[r] || (l[r] = {}),
                    l[r][i] && e.removeEventListener(r, l[r][i], a),
                    (l[r][i] = n),
                    (e.listeners = l)
            }
            e.addEventListener(r, n, a)
        })
}
function ft(e, t, i) {
    var a
    return (
        he(Event) && he(CustomEvent)
            ? (a = new CustomEvent(t, { detail: i, bubbles: !0, cancelable: !0 }))
            : ((a = document.createEvent('CustomEvent')), a.initCustomEvent(t, !0, !0, i)),
        e.dispatchEvent(a)
    )
}
function br(e) {
    var t = e.getBoundingClientRect()
    return {
        left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
        top: t.top + (window.pageYOffset - document.documentElement.clientTop),
    }
}
var Xi = Le.location,
    su = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i
function rr(e) {
    var t = e.match(su)
    return t !== null && (t[1] !== Xi.protocol || t[2] !== Xi.hostname || t[3] !== Xi.port)
}
function or(e) {
    var t = 'timestamp='.concat(new Date().getTime())
    return e + (e.indexOf('?') === -1 ? '?' : '&') + t
}
function Ot(e) {
    var t = e.rotate,
        i = e.scaleX,
        a = e.scaleY,
        n = e.translateX,
        r = e.translateY,
        o = []
    Y(n) && n !== 0 && o.push('translateX('.concat(n, 'px)')),
        Y(r) && r !== 0 && o.push('translateY('.concat(r, 'px)')),
        Y(t) && t !== 0 && o.push('rotate('.concat(t, 'deg)')),
        Y(i) && i !== 1 && o.push('scaleX('.concat(i, ')')),
        Y(a) && a !== 1 && o.push('scaleY('.concat(a, ')'))
    var l = o.length ? o.join(' ') : 'none'
    return { WebkitTransform: l, msTransform: l, transform: l }
}
function cu(e) {
    var t = lr({}, e),
        i = 0
    return (
        ie(e, function (a, n) {
            delete t[n],
                ie(t, function (r) {
                    var o = Math.abs(a.startX - r.startX),
                        l = Math.abs(a.startY - r.startY),
                        s = Math.abs(a.endX - r.endX),
                        u = Math.abs(a.endY - r.endY),
                        c = Math.sqrt(o * o + l * l),
                        d = Math.sqrt(s * s + u * u),
                        h = (d - c) / c
                    Math.abs(h) > Math.abs(i) && (i = h)
                })
        }),
        i
    )
}
function ni(e, t) {
    var i = e.pageX,
        a = e.pageY,
        n = { endX: i, endY: a }
    return t ? n : lr({ startX: i, startY: a }, n)
}
function du(e) {
    var t = 0,
        i = 0,
        a = 0
    return (
        ie(e, function (n) {
            var r = n.startX,
                o = n.startY
            ;(t += r), (i += o), (a += 1)
        }),
        (t /= a),
        (i /= a),
        { pageX: t, pageY: i }
    )
}
function Be(e) {
    var t = e.aspectRatio,
        i = e.height,
        a = e.width,
        n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'contain',
        r = nr(a),
        o = nr(i)
    if (r && o) {
        var l = i * t
        ;(n === 'contain' && l > a) || (n === 'cover' && l < a) ? (i = a / t) : (a = i * t)
    } else r ? (i = a / t) : o && (a = i * t)
    return { width: a, height: i }
}
function uu(e) {
    var t = e.width,
        i = e.height,
        a = e.degree
    if (((a = Math.abs(a) % 180), a === 90)) return { width: i, height: t }
    var n = ((a % 90) * Math.PI) / 180,
        r = Math.sin(n),
        o = Math.cos(n),
        l = t * o + i * r,
        s = t * r + i * o
    return a > 90 ? { width: s, height: l } : { width: l, height: s }
}
function hu(e, t, i, a) {
    var n = t.aspectRatio,
        r = t.naturalWidth,
        o = t.naturalHeight,
        l = t.rotate,
        s = l === void 0 ? 0 : l,
        u = t.scaleX,
        c = u === void 0 ? 1 : u,
        d = t.scaleY,
        h = d === void 0 ? 1 : d,
        f = i.aspectRatio,
        p = i.naturalWidth,
        m = i.naturalHeight,
        g = a.fillColor,
        b = g === void 0 ? 'transparent' : g,
        E = a.imageSmoothingEnabled,
        T = E === void 0 ? !0 : E,
        _ = a.imageSmoothingQuality,
        y = _ === void 0 ? 'low' : _,
        I = a.maxWidth,
        A = I === void 0 ? 1 / 0 : I,
        R = a.maxHeight,
        S = R === void 0 ? 1 / 0 : R,
        x = a.minWidth,
        D = x === void 0 ? 0 : x,
        O = a.minHeight,
        z = O === void 0 ? 0 : O,
        v = document.createElement('canvas'),
        P = v.getContext('2d'),
        w = Be({ aspectRatio: f, width: A, height: S }),
        L = Be({ aspectRatio: f, width: D, height: z }, 'cover'),
        F = Math.min(w.width, Math.max(L.width, p)),
        C = Math.min(w.height, Math.max(L.height, m)),
        V = Be({ aspectRatio: n, width: A, height: S }),
        G = Be({ aspectRatio: n, width: D, height: z }, 'cover'),
        B = Math.min(V.width, Math.max(G.width, r)),
        N = Math.min(V.height, Math.max(G.height, o)),
        k = [-B / 2, -N / 2, B, N]
    return (
        (v.width = ht(F)),
        (v.height = ht(C)),
        (P.fillStyle = b),
        P.fillRect(0, 0, F, C),
        P.save(),
        P.translate(F / 2, C / 2),
        P.rotate((s * Math.PI) / 180),
        P.scale(c, h),
        (P.imageSmoothingEnabled = T),
        (P.imageSmoothingQuality = y),
        P.drawImage.apply(
            P,
            [e].concat(
                sr(
                    k.map(function (q) {
                        return Math.floor(ht(q))
                    }),
                ),
            ),
        ),
        P.restore(),
        v
    )
}
var _r = String.fromCharCode
function fu(e, t, i) {
    var a = ''
    i += t
    for (var n = t; n < i; n += 1) a += _r(e.getUint8(n))
    return a
}
var pu = /^data:.*,/
function mu(e) {
    var t = e.replace(pu, ''),
        i = atob(t),
        a = new ArrayBuffer(i.length),
        n = new Uint8Array(a)
    return (
        ie(n, function (r, o) {
            n[o] = i.charCodeAt(o)
        }),
        a
    )
}
function gu(e, t) {
    for (var i = [], a = 8192, n = new Uint8Array(e); n.length > 0; )
        i.push(_r.apply(null, Er(n.subarray(0, a)))), (n = n.subarray(a))
    return 'data:'.concat(t, ';base64,').concat(btoa(i.join('')))
}
function Eu(e) {
    var t = new DataView(e),
        i
    try {
        var a, n, r
        if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
            for (var o = t.byteLength, l = 2; l + 1 < o; ) {
                if (t.getUint8(l) === 255 && t.getUint8(l + 1) === 225) {
                    n = l
                    break
                }
                l += 1
            }
        if (n) {
            var s = n + 4,
                u = n + 10
            if (fu(t, s, 4) === 'Exif') {
                var c = t.getUint16(u)
                if (((a = c === 18761), (a || c === 19789) && t.getUint16(u + 2, a) === 42)) {
                    var d = t.getUint32(u + 4, a)
                    d >= 8 && (r = u + d)
                }
            }
        }
        if (r) {
            var h = t.getUint16(r, a),
                f,
                p
            for (p = 0; p < h; p += 1)
                if (((f = r + p * 12 + 2), t.getUint16(f, a) === 274)) {
                    ;(f += 8), (i = t.getUint16(f, a)), t.setUint16(f, 1, a)
                    break
                }
        }
    } catch {
        i = 1
    }
    return i
}
function Tu(e) {
    var t = 0,
        i = 1,
        a = 1
    switch (e) {
        case 2:
            i = -1
            break
        case 3:
            t = -180
            break
        case 4:
            a = -1
            break
        case 5:
            ;(t = 90), (a = -1)
            break
        case 6:
            t = 90
            break
        case 7:
            ;(t = 90), (i = -1)
            break
        case 8:
            t = -90
            break
    }
    return { rotate: t, scaleX: i, scaleY: a }
}
var Iu = {
        render: function () {
            this.initContainer(),
                this.initCanvas(),
                this.initCropBox(),
                this.renderCanvas(),
                this.cropped && this.renderCropBox()
        },
        initContainer: function () {
            var t = this.element,
                i = this.options,
                a = this.container,
                n = this.cropper,
                r = Number(i.minContainerWidth),
                o = Number(i.minContainerHeight)
            oe(n, fe), ve(t, fe)
            var l = {
                width: Math.max(a.offsetWidth, r >= 0 ? r : mr),
                height: Math.max(a.offsetHeight, o >= 0 ? o : gr),
            }
            ;(this.containerData = l), Ne(n, { width: l.width, height: l.height }), oe(t, fe), ve(n, fe)
        },
        initCanvas: function () {
            var t = this.containerData,
                i = this.imageData,
                a = this.options.viewMode,
                n = Math.abs(i.rotate) % 180 === 90,
                r = n ? i.naturalHeight : i.naturalWidth,
                o = n ? i.naturalWidth : i.naturalHeight,
                l = r / o,
                s = t.width,
                u = t.height
            t.height * l > t.width
                ? a === 3
                    ? (s = t.height * l)
                    : (u = t.width / l)
                : a === 3
                  ? (u = t.width / l)
                  : (s = t.height * l)
            var c = { aspectRatio: l, naturalWidth: r, naturalHeight: o, width: s, height: u }
            ;(this.canvasData = c),
                (this.limited = a === 1 || a === 2),
                this.limitCanvas(!0, !0),
                (c.width = Math.min(Math.max(c.width, c.minWidth), c.maxWidth)),
                (c.height = Math.min(Math.max(c.height, c.minHeight), c.maxHeight)),
                (c.left = (t.width - c.width) / 2),
                (c.top = (t.height - c.height) / 2),
                (c.oldLeft = c.left),
                (c.oldTop = c.top),
                (this.initialCanvasData = Q({}, c))
        },
        limitCanvas: function (t, i) {
            var a = this.options,
                n = this.containerData,
                r = this.canvasData,
                o = this.cropBoxData,
                l = a.viewMode,
                s = r.aspectRatio,
                u = this.cropped && o
            if (t) {
                var c = Number(a.minCanvasWidth) || 0,
                    d = Number(a.minCanvasHeight) || 0
                l > 1
                    ? ((c = Math.max(c, n.width)),
                      (d = Math.max(d, n.height)),
                      l === 3 && (d * s > c ? (c = d * s) : (d = c / s)))
                    : l > 0 &&
                      (c
                          ? (c = Math.max(c, u ? o.width : 0))
                          : d
                            ? (d = Math.max(d, u ? o.height : 0))
                            : u && ((c = o.width), (d = o.height), d * s > c ? (c = d * s) : (d = c / s)))
                var h = Be({ aspectRatio: s, width: c, height: d })
                ;(c = h.width),
                    (d = h.height),
                    (r.minWidth = c),
                    (r.minHeight = d),
                    (r.maxWidth = 1 / 0),
                    (r.maxHeight = 1 / 0)
            }
            if (i)
                if (l > (u ? 0 : 1)) {
                    var f = n.width - r.width,
                        p = n.height - r.height
                    ;(r.minLeft = Math.min(0, f)),
                        (r.minTop = Math.min(0, p)),
                        (r.maxLeft = Math.max(0, f)),
                        (r.maxTop = Math.max(0, p)),
                        u &&
                            this.limited &&
                            ((r.minLeft = Math.min(o.left, o.left + (o.width - r.width))),
                            (r.minTop = Math.min(o.top, o.top + (o.height - r.height))),
                            (r.maxLeft = o.left),
                            (r.maxTop = o.top),
                            l === 2 &&
                                (r.width >= n.width && ((r.minLeft = Math.min(0, f)), (r.maxLeft = Math.max(0, f))),
                                r.height >= n.height && ((r.minTop = Math.min(0, p)), (r.maxTop = Math.max(0, p)))))
                } else (r.minLeft = -r.width), (r.minTop = -r.height), (r.maxLeft = n.width), (r.maxTop = n.height)
        },
        renderCanvas: function (t, i) {
            var a = this.canvasData,
                n = this.imageData
            if (i) {
                var r = uu({
                        width: n.naturalWidth * Math.abs(n.scaleX || 1),
                        height: n.naturalHeight * Math.abs(n.scaleY || 1),
                        degree: n.rotate || 0,
                    }),
                    o = r.width,
                    l = r.height,
                    s = a.width * (o / a.naturalWidth),
                    u = a.height * (l / a.naturalHeight)
                ;(a.left -= (s - a.width) / 2),
                    (a.top -= (u - a.height) / 2),
                    (a.width = s),
                    (a.height = u),
                    (a.aspectRatio = o / l),
                    (a.naturalWidth = o),
                    (a.naturalHeight = l),
                    this.limitCanvas(!0, !1)
            }
            ;(a.width > a.maxWidth || a.width < a.minWidth) && (a.left = a.oldLeft),
                (a.height > a.maxHeight || a.height < a.minHeight) && (a.top = a.oldTop),
                (a.width = Math.min(Math.max(a.width, a.minWidth), a.maxWidth)),
                (a.height = Math.min(Math.max(a.height, a.minHeight), a.maxHeight)),
                this.limitCanvas(!1, !0),
                (a.left = Math.min(Math.max(a.left, a.minLeft), a.maxLeft)),
                (a.top = Math.min(Math.max(a.top, a.minTop), a.maxTop)),
                (a.oldLeft = a.left),
                (a.oldTop = a.top),
                Ne(this.canvas, Q({ width: a.width, height: a.height }, Ot({ translateX: a.left, translateY: a.top }))),
                this.renderImage(t),
                this.cropped && this.limited && this.limitCropBox(!0, !0)
        },
        renderImage: function (t) {
            var i = this.canvasData,
                a = this.imageData,
                n = a.naturalWidth * (i.width / i.naturalWidth),
                r = a.naturalHeight * (i.height / i.naturalHeight)
            Q(a, { width: n, height: r, left: (i.width - n) / 2, top: (i.height - r) / 2 }),
                Ne(
                    this.image,
                    Q({ width: a.width, height: a.height }, Ot(Q({ translateX: a.left, translateY: a.top }, a))),
                ),
                t && this.output()
        },
        initCropBox: function () {
            var t = this.options,
                i = this.canvasData,
                a = t.aspectRatio || t.initialAspectRatio,
                n = Number(t.autoCropArea) || 0.8,
                r = { width: i.width, height: i.height }
            a && (i.height * a > i.width ? (r.height = r.width / a) : (r.width = r.height * a)),
                (this.cropBoxData = r),
                this.limitCropBox(!0, !0),
                (r.width = Math.min(Math.max(r.width, r.minWidth), r.maxWidth)),
                (r.height = Math.min(Math.max(r.height, r.minHeight), r.maxHeight)),
                (r.width = Math.max(r.minWidth, r.width * n)),
                (r.height = Math.max(r.minHeight, r.height * n)),
                (r.left = i.left + (i.width - r.width) / 2),
                (r.top = i.top + (i.height - r.height) / 2),
                (r.oldLeft = r.left),
                (r.oldTop = r.top),
                (this.initialCropBoxData = Q({}, r))
        },
        limitCropBox: function (t, i) {
            var a = this.options,
                n = this.containerData,
                r = this.canvasData,
                o = this.cropBoxData,
                l = this.limited,
                s = a.aspectRatio
            if (t) {
                var u = Number(a.minCropBoxWidth) || 0,
                    c = Number(a.minCropBoxHeight) || 0,
                    d = l ? Math.min(n.width, r.width, r.width + r.left, n.width - r.left) : n.width,
                    h = l ? Math.min(n.height, r.height, r.height + r.top, n.height - r.top) : n.height
                ;(u = Math.min(u, n.width)),
                    (c = Math.min(c, n.height)),
                    s &&
                        (u && c ? (c * s > u ? (c = u / s) : (u = c * s)) : u ? (c = u / s) : c && (u = c * s),
                        h * s > d ? (h = d / s) : (d = h * s)),
                    (o.minWidth = Math.min(u, d)),
                    (o.minHeight = Math.min(c, h)),
                    (o.maxWidth = d),
                    (o.maxHeight = h)
            }
            i &&
                (l
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
                i = this.containerData,
                a = this.cropBoxData
            ;(a.width > a.maxWidth || a.width < a.minWidth) && (a.left = a.oldLeft),
                (a.height > a.maxHeight || a.height < a.minHeight) && (a.top = a.oldTop),
                (a.width = Math.min(Math.max(a.width, a.minWidth), a.maxWidth)),
                (a.height = Math.min(Math.max(a.height, a.minHeight), a.maxHeight)),
                this.limitCropBox(!1, !0),
                (a.left = Math.min(Math.max(a.left, a.minLeft), a.maxLeft)),
                (a.top = Math.min(Math.max(a.top, a.minTop), a.maxTop)),
                (a.oldLeft = a.left),
                (a.oldTop = a.top),
                t.movable &&
                    t.cropBoxMovable &&
                    xt(this.face, Dt, a.width >= i.width && a.height >= i.height ? ur : la),
                Ne(
                    this.cropBox,
                    Q({ width: a.width, height: a.height }, Ot({ translateX: a.left, translateY: a.top })),
                ),
                this.cropped && this.limited && this.limitCanvas(!0, !0),
                this.disabled || this.output()
        },
        output: function () {
            this.preview(), ft(this.element, Ji, this.getData())
        },
    },
    bu = {
        initPreview: function () {
            var t = this.element,
                i = this.crossOrigin,
                a = this.options.preview,
                n = i ? this.crossOriginUrl : this.url,
                r = t.alt || 'The image to preview',
                o = document.createElement('img')
            if (
                (i && (o.crossOrigin = i),
                (o.src = n),
                (o.alt = r),
                this.viewBox.appendChild(o),
                (this.viewBoxImage = o),
                !!a)
            ) {
                var l = a
                typeof a == 'string' ? (l = t.ownerDocument.querySelectorAll(a)) : a.querySelector && (l = [a]),
                    (this.previews = l),
                    ie(l, function (s) {
                        var u = document.createElement('img')
                        xt(s, ai, { width: s.offsetWidth, height: s.offsetHeight, html: s.innerHTML }),
                            i && (u.crossOrigin = i),
                            (u.src = n),
                            (u.alt = r),
                            (u.style.cssText =
                                'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"'),
                            (s.innerHTML = ''),
                            s.appendChild(u)
                    })
            }
        },
        resetPreview: function () {
            ie(this.previews, function (t) {
                var i = na(t, ai)
                Ne(t, { width: i.width, height: i.height }), (t.innerHTML = i.html), lu(t, ai)
            })
        },
        preview: function () {
            var t = this.imageData,
                i = this.canvasData,
                a = this.cropBoxData,
                n = a.width,
                r = a.height,
                o = t.width,
                l = t.height,
                s = a.left - i.left - t.left,
                u = a.top - i.top - t.top
            !this.cropped ||
                this.disabled ||
                (Ne(this.viewBoxImage, Q({ width: o, height: l }, Ot(Q({ translateX: -s, translateY: -u }, t)))),
                ie(this.previews, function (c) {
                    var d = na(c, ai),
                        h = d.width,
                        f = d.height,
                        p = h,
                        m = f,
                        g = 1
                    n && ((g = h / n), (m = r * g)),
                        r && m > f && ((g = f / r), (p = n * g), (m = f)),
                        Ne(c, { width: p, height: m }),
                        Ne(
                            c.getElementsByTagName('img')[0],
                            Q({ width: o * g, height: l * g }, Ot(Q({ translateX: -s * g, translateY: -u * g }, t))),
                        )
                }))
        },
    },
    _u = {
        bind: function () {
            var t = this.element,
                i = this.options,
                a = this.cropper
            he(i.cropstart) && be(t, ia, i.cropstart),
                he(i.cropmove) && be(t, ta, i.cropmove),
                he(i.cropend) && be(t, ea, i.cropend),
                he(i.crop) && be(t, Ji, i.crop),
                he(i.zoom) && be(t, aa, i.zoom),
                be(a, Qn, (this.onCropStart = this.cropStart.bind(this))),
                i.zoomable &&
                    i.zoomOnWheel &&
                    be(a, tr, (this.onWheel = this.wheel.bind(this)), { passive: !1, capture: !0 }),
                i.toggleDragModeOnDblclick && be(a, jn, (this.onDblclick = this.dblclick.bind(this))),
                be(t.ownerDocument, Zn, (this.onCropMove = this.cropMove.bind(this))),
                be(t.ownerDocument, Kn, (this.onCropEnd = this.cropEnd.bind(this))),
                i.responsive && be(window, er, (this.onResize = this.resize.bind(this)))
        },
        unbind: function () {
            var t = this.element,
                i = this.options,
                a = this.cropper
            he(i.cropstart) && Ae(t, ia, i.cropstart),
                he(i.cropmove) && Ae(t, ta, i.cropmove),
                he(i.cropend) && Ae(t, ea, i.cropend),
                he(i.crop) && Ae(t, Ji, i.crop),
                he(i.zoom) && Ae(t, aa, i.zoom),
                Ae(a, Qn, this.onCropStart),
                i.zoomable && i.zoomOnWheel && Ae(a, tr, this.onWheel, { passive: !1, capture: !0 }),
                i.toggleDragModeOnDblclick && Ae(a, jn, this.onDblclick),
                Ae(t.ownerDocument, Zn, this.onCropMove),
                Ae(t.ownerDocument, Kn, this.onCropEnd),
                i.responsive && Ae(window, er, this.onResize)
        },
    },
    Ru = {
        resize: function () {
            if (!this.disabled) {
                var t = this.options,
                    i = this.container,
                    a = this.containerData,
                    n = i.offsetWidth / a.width,
                    r = i.offsetHeight / a.height,
                    o = Math.abs(n - 1) > Math.abs(r - 1) ? n : r
                if (o !== 1) {
                    var l, s
                    t.restore && ((l = this.getCanvasData()), (s = this.getCropBoxData())),
                        this.render(),
                        t.restore &&
                            (this.setCanvasData(
                                ie(l, function (u, c) {
                                    l[c] = u * o
                                }),
                            ),
                            this.setCropBoxData(
                                ie(s, function (u, c) {
                                    s[c] = u * o
                                }),
                            ))
                }
            }
        },
        dblclick: function () {
            this.disabled || this.options.dragMode === pr || this.setDragMode(ru(this.dragBox, Zi) ? fr : sa)
        },
        wheel: function (t) {
            var i = this,
                a = Number(this.options.wheelZoomRatio) || 0.1,
                n = 1
            this.disabled ||
                (t.preventDefault(),
                !this.wheeling &&
                    ((this.wheeling = !0),
                    setTimeout(function () {
                        i.wheeling = !1
                    }, 50),
                    t.deltaY
                        ? (n = t.deltaY > 0 ? 1 : -1)
                        : t.wheelDelta
                          ? (n = -t.wheelDelta / 120)
                          : t.detail && (n = t.detail > 0 ? 1 : -1),
                    this.zoom(-n * a, t)))
        },
        cropStart: function (t) {
            var i = t.buttons,
                a = t.button
            if (
                !(
                    this.disabled ||
                    ((t.type === 'mousedown' || (t.type === 'pointerdown' && t.pointerType === 'mouse')) &&
                        ((Y(i) && i !== 1) || (Y(a) && a !== 0) || t.ctrlKey))
                )
            ) {
                var n = this.options,
                    r = this.pointers,
                    o
                t.changedTouches
                    ? ie(t.changedTouches, function (l) {
                          r[l.identifier] = ni(l)
                      })
                    : (r[t.pointerId || 0] = ni(t)),
                    Object.keys(r).length > 1 && n.zoomable && n.zoomOnTouch ? (o = hr) : (o = na(t.target, Dt)),
                    jd.test(o) &&
                        ft(this.element, ia, { originalEvent: t, action: o }) !== !1 &&
                        (t.preventDefault(),
                        (this.action = o),
                        (this.cropping = !1),
                        o === dr && ((this.cropping = !0), oe(this.dragBox, ri)))
            }
        },
        cropMove: function (t) {
            var i = this.action
            if (!(this.disabled || !i)) {
                var a = this.pointers
                t.preventDefault(),
                    ft(this.element, ta, { originalEvent: t, action: i }) !== !1 &&
                        (t.changedTouches
                            ? ie(t.changedTouches, function (n) {
                                  Q(a[n.identifier] || {}, ni(n, !0))
                              })
                            : Q(a[t.pointerId || 0] || {}, ni(t, !0)),
                        this.change(t))
            }
        },
        cropEnd: function (t) {
            if (!this.disabled) {
                var i = this.action,
                    a = this.pointers
                t.changedTouches
                    ? ie(t.changedTouches, function (n) {
                          delete a[n.identifier]
                      })
                    : delete a[t.pointerId || 0],
                    i &&
                        (t.preventDefault(),
                        Object.keys(a).length || (this.action = ''),
                        this.cropping &&
                            ((this.cropping = !1), ut(this.dragBox, ri, this.cropped && this.options.modal)),
                        ft(this.element, ea, { originalEvent: t, action: i }))
            }
        },
    },
    yu = {
        change: function (t) {
            var i = this.options,
                a = this.canvasData,
                n = this.containerData,
                r = this.cropBoxData,
                o = this.pointers,
                l = this.action,
                s = i.aspectRatio,
                u = r.left,
                c = r.top,
                d = r.width,
                h = r.height,
                f = u + d,
                p = c + h,
                m = 0,
                g = 0,
                b = n.width,
                E = n.height,
                T = !0,
                _
            !s && t.shiftKey && (s = d && h ? d / h : 1),
                this.limited &&
                    ((m = r.minLeft),
                    (g = r.minTop),
                    (b = m + Math.min(n.width, a.width, a.left + a.width)),
                    (E = g + Math.min(n.height, a.height, a.top + a.height)))
            var y = o[Object.keys(o)[0]],
                I = { x: y.endX - y.startX, y: y.endY - y.startY },
                A = function (S) {
                    switch (S) {
                        case Xe:
                            f + I.x > b && (I.x = b - f)
                            break
                        case je:
                            u + I.x < m && (I.x = m - u)
                            break
                        case ze:
                            c + I.y < g && (I.y = g - c)
                            break
                        case ct:
                            p + I.y > E && (I.y = E - p)
                            break
                    }
                }
            switch (l) {
                case la:
                    ;(u += I.x), (c += I.y)
                    break
                case Xe:
                    if (I.x >= 0 && (f >= b || (s && (c <= g || p >= E)))) {
                        T = !1
                        break
                    }
                    A(Xe),
                        (d += I.x),
                        d < 0 && ((l = je), (d = -d), (u -= d)),
                        s && ((h = d / s), (c += (r.height - h) / 2))
                    break
                case ze:
                    if (I.y <= 0 && (c <= g || (s && (u <= m || f >= b)))) {
                        T = !1
                        break
                    }
                    A(ze),
                        (h -= I.y),
                        (c += I.y),
                        h < 0 && ((l = ct), (h = -h), (c -= h)),
                        s && ((d = h * s), (u += (r.width - d) / 2))
                    break
                case je:
                    if (I.x <= 0 && (u <= m || (s && (c <= g || p >= E)))) {
                        T = !1
                        break
                    }
                    A(je),
                        (d -= I.x),
                        (u += I.x),
                        d < 0 && ((l = Xe), (d = -d), (u -= d)),
                        s && ((h = d / s), (c += (r.height - h) / 2))
                    break
                case ct:
                    if (I.y >= 0 && (p >= E || (s && (u <= m || f >= b)))) {
                        T = !1
                        break
                    }
                    A(ct),
                        (h += I.y),
                        h < 0 && ((l = ze), (h = -h), (c -= h)),
                        s && ((d = h * s), (u += (r.width - d) / 2))
                    break
                case At:
                    if (s) {
                        if (I.y <= 0 && (c <= g || f >= b)) {
                            T = !1
                            break
                        }
                        A(ze), (h -= I.y), (c += I.y), (d = h * s)
                    } else
                        A(ze),
                            A(Xe),
                            I.x >= 0 ? (f < b ? (d += I.x) : I.y <= 0 && c <= g && (T = !1)) : (d += I.x),
                            I.y <= 0 ? c > g && ((h -= I.y), (c += I.y)) : ((h -= I.y), (c += I.y))
                    d < 0 && h < 0
                        ? ((l = Mt), (h = -h), (d = -d), (c -= h), (u -= d))
                        : d < 0
                          ? ((l = vt), (d = -d), (u -= d))
                          : h < 0 && ((l = Lt), (h = -h), (c -= h))
                    break
                case vt:
                    if (s) {
                        if (I.y <= 0 && (c <= g || u <= m)) {
                            T = !1
                            break
                        }
                        A(ze), (h -= I.y), (c += I.y), (d = h * s), (u += r.width - d)
                    } else
                        A(ze),
                            A(je),
                            I.x <= 0
                                ? u > m
                                    ? ((d -= I.x), (u += I.x))
                                    : I.y <= 0 && c <= g && (T = !1)
                                : ((d -= I.x), (u += I.x)),
                            I.y <= 0 ? c > g && ((h -= I.y), (c += I.y)) : ((h -= I.y), (c += I.y))
                    d < 0 && h < 0
                        ? ((l = Lt), (h = -h), (d = -d), (c -= h), (u -= d))
                        : d < 0
                          ? ((l = At), (d = -d), (u -= d))
                          : h < 0 && ((l = Mt), (h = -h), (c -= h))
                    break
                case Mt:
                    if (s) {
                        if (I.x <= 0 && (u <= m || p >= E)) {
                            T = !1
                            break
                        }
                        A(je), (d -= I.x), (u += I.x), (h = d / s)
                    } else
                        A(ct),
                            A(je),
                            I.x <= 0
                                ? u > m
                                    ? ((d -= I.x), (u += I.x))
                                    : I.y >= 0 && p >= E && (T = !1)
                                : ((d -= I.x), (u += I.x)),
                            I.y >= 0 ? p < E && (h += I.y) : (h += I.y)
                    d < 0 && h < 0
                        ? ((l = At), (h = -h), (d = -d), (c -= h), (u -= d))
                        : d < 0
                          ? ((l = Lt), (d = -d), (u -= d))
                          : h < 0 && ((l = vt), (h = -h), (c -= h))
                    break
                case Lt:
                    if (s) {
                        if (I.x >= 0 && (f >= b || p >= E)) {
                            T = !1
                            break
                        }
                        A(Xe), (d += I.x), (h = d / s)
                    } else
                        A(ct),
                            A(Xe),
                            I.x >= 0 ? (f < b ? (d += I.x) : I.y >= 0 && p >= E && (T = !1)) : (d += I.x),
                            I.y >= 0 ? p < E && (h += I.y) : (h += I.y)
                    d < 0 && h < 0
                        ? ((l = vt), (h = -h), (d = -d), (c -= h), (u -= d))
                        : d < 0
                          ? ((l = Mt), (d = -d), (u -= d))
                          : h < 0 && ((l = At), (h = -h), (c -= h))
                    break
                case ur:
                    this.move(I.x, I.y), (T = !1)
                    break
                case hr:
                    this.zoom(cu(o), t), (T = !1)
                    break
                case dr:
                    if (!I.x || !I.y) {
                        T = !1
                        break
                    }
                    ;(_ = br(this.cropper)),
                        (u = y.startX - _.left),
                        (c = y.startY - _.top),
                        (d = r.minWidth),
                        (h = r.minHeight),
                        I.x > 0 ? (l = I.y > 0 ? Lt : At) : I.x < 0 && ((u -= d), (l = I.y > 0 ? Mt : vt)),
                        I.y < 0 && (c -= h),
                        this.cropped ||
                            (ve(this.cropBox, fe), (this.cropped = !0), this.limited && this.limitCropBox(!0, !0))
                    break
            }
            T && ((r.width = d), (r.height = h), (r.left = u), (r.top = c), (this.action = l), this.renderCropBox()),
                ie(o, function (R) {
                    ;(R.startX = R.endX), (R.startY = R.endY)
                })
        },
    },
    Su = {
        crop: function () {
            return (
                this.ready &&
                    !this.cropped &&
                    !this.disabled &&
                    ((this.cropped = !0),
                    this.limitCropBox(!0, !0),
                    this.options.modal && oe(this.dragBox, ri),
                    ve(this.cropBox, fe),
                    this.setCropBoxData(this.initialCropBoxData)),
                this
            )
        },
        reset: function () {
            return (
                this.ready &&
                    !this.disabled &&
                    ((this.imageData = Q({}, this.initialImageData)),
                    (this.canvasData = Q({}, this.initialCanvasData)),
                    (this.cropBoxData = Q({}, this.initialCropBoxData)),
                    this.renderCanvas(),
                    this.cropped && this.renderCropBox()),
                this
            )
        },
        clear: function () {
            return (
                this.cropped &&
                    !this.disabled &&
                    (Q(this.cropBoxData, { left: 0, top: 0, width: 0, height: 0 }),
                    (this.cropped = !1),
                    this.renderCropBox(),
                    this.limitCanvas(!0, !0),
                    this.renderCanvas(),
                    ve(this.dragBox, ri),
                    oe(this.cropBox, fe)),
                this
            )
        },
        replace: function (t) {
            var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
            return (
                !this.disabled &&
                    t &&
                    (this.isImg && (this.element.src = t),
                    i
                        ? ((this.url = t),
                          (this.image.src = t),
                          this.ready &&
                              ((this.viewBoxImage.src = t),
                              ie(this.previews, function (a) {
                                  a.getElementsByTagName('img')[0].src = t
                              })))
                        : (this.isImg && (this.replaced = !0),
                          (this.options.data = null),
                          this.uncreate(),
                          this.load(t))),
                this
            )
        },
        enable: function () {
            return this.ready && this.disabled && ((this.disabled = !1), ve(this.cropper, qn)), this
        },
        disable: function () {
            return this.ready && !this.disabled && ((this.disabled = !0), oe(this.cropper, qn)), this
        },
        destroy: function () {
            var t = this.element
            return t[j]
                ? ((t[j] = void 0), this.isImg && this.replaced && (t.src = this.originalUrl), this.uncreate(), this)
                : this
        },
        move: function (t) {
            var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t,
                a = this.canvasData,
                n = a.left,
                r = a.top
            return this.moveTo(qi(t) ? t : n + Number(t), qi(i) ? i : r + Number(i))
        },
        moveTo: function (t) {
            var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t,
                a = this.canvasData,
                n = !1
            return (
                (t = Number(t)),
                (i = Number(i)),
                this.ready &&
                    !this.disabled &&
                    this.options.movable &&
                    (Y(t) && ((a.left = t), (n = !0)), Y(i) && ((a.top = i), (n = !0)), n && this.renderCanvas(!0)),
                this
            )
        },
        zoom: function (t, i) {
            var a = this.canvasData
            return (
                (t = Number(t)),
                t < 0 ? (t = 1 / (1 - t)) : (t = 1 + t),
                this.zoomTo((a.width * t) / a.naturalWidth, null, i)
            )
        },
        zoomTo: function (t, i, a) {
            var n = this.options,
                r = this.canvasData,
                o = r.width,
                l = r.height,
                s = r.naturalWidth,
                u = r.naturalHeight
            if (((t = Number(t)), t >= 0 && this.ready && !this.disabled && n.zoomable)) {
                var c = s * t,
                    d = u * t
                if (ft(this.element, aa, { ratio: t, oldRatio: o / s, originalEvent: a }) === !1) return this
                if (a) {
                    var h = this.pointers,
                        f = br(this.cropper),
                        p = h && Object.keys(h).length ? du(h) : { pageX: a.pageX, pageY: a.pageY }
                    ;(r.left -= (c - o) * ((p.pageX - f.left - r.left) / o)),
                        (r.top -= (d - l) * ((p.pageY - f.top - r.top) / l))
                } else
                    dt(i) && Y(i.x) && Y(i.y)
                        ? ((r.left -= (c - o) * ((i.x - r.left) / o)), (r.top -= (d - l) * ((i.y - r.top) / l)))
                        : ((r.left -= (c - o) / 2), (r.top -= (d - l) / 2))
                ;(r.width = c), (r.height = d), this.renderCanvas(!0)
            }
            return this
        },
        rotate: function (t) {
            return this.rotateTo((this.imageData.rotate || 0) + Number(t))
        },
        rotateTo: function (t) {
            return (
                (t = Number(t)),
                Y(t) &&
                    this.ready &&
                    !this.disabled &&
                    this.options.rotatable &&
                    ((this.imageData.rotate = t % 360), this.renderCanvas(!0, !0)),
                this
            )
        },
        scaleX: function (t) {
            var i = this.imageData.scaleY
            return this.scale(t, Y(i) ? i : 1)
        },
        scaleY: function (t) {
            var i = this.imageData.scaleX
            return this.scale(Y(i) ? i : 1, t)
        },
        scale: function (t) {
            var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t,
                a = this.imageData,
                n = !1
            return (
                (t = Number(t)),
                (i = Number(i)),
                this.ready &&
                    !this.disabled &&
                    this.options.scalable &&
                    (Y(t) && ((a.scaleX = t), (n = !0)),
                    Y(i) && ((a.scaleY = i), (n = !0)),
                    n && this.renderCanvas(!0, !0)),
                this
            )
        },
        getData: function () {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
                i = this.options,
                a = this.imageData,
                n = this.canvasData,
                r = this.cropBoxData,
                o
            if (this.ready && this.cropped) {
                o = { x: r.left - n.left, y: r.top - n.top, width: r.width, height: r.height }
                var l = a.width / a.naturalWidth
                if (
                    (ie(o, function (c, d) {
                        o[d] = c / l
                    }),
                    t)
                ) {
                    var s = Math.round(o.y + o.height),
                        u = Math.round(o.x + o.width)
                    ;(o.x = Math.round(o.x)), (o.y = Math.round(o.y)), (o.width = u - o.x), (o.height = s - o.y)
                }
            } else o = { x: 0, y: 0, width: 0, height: 0 }
            return (
                i.rotatable && (o.rotate = a.rotate || 0),
                i.scalable && ((o.scaleX = a.scaleX || 1), (o.scaleY = a.scaleY || 1)),
                o
            )
        },
        setData: function (t) {
            var i = this.options,
                a = this.imageData,
                n = this.canvasData,
                r = {}
            if (this.ready && !this.disabled && dt(t)) {
                var o = !1
                i.rotatable && Y(t.rotate) && t.rotate !== a.rotate && ((a.rotate = t.rotate), (o = !0)),
                    i.scalable &&
                        (Y(t.scaleX) && t.scaleX !== a.scaleX && ((a.scaleX = t.scaleX), (o = !0)),
                        Y(t.scaleY) && t.scaleY !== a.scaleY && ((a.scaleY = t.scaleY), (o = !0))),
                    o && this.renderCanvas(!0, !0)
                var l = a.width / a.naturalWidth
                Y(t.x) && (r.left = t.x * l + n.left),
                    Y(t.y) && (r.top = t.y * l + n.top),
                    Y(t.width) && (r.width = t.width * l),
                    Y(t.height) && (r.height = t.height * l),
                    this.setCropBoxData(r)
            }
            return this
        },
        getContainerData: function () {
            return this.ready ? Q({}, this.containerData) : {}
        },
        getImageData: function () {
            return this.sized ? Q({}, this.imageData) : {}
        },
        getCanvasData: function () {
            var t = this.canvasData,
                i = {}
            return (
                this.ready &&
                    ie(['left', 'top', 'width', 'height', 'naturalWidth', 'naturalHeight'], function (a) {
                        i[a] = t[a]
                    }),
                i
            )
        },
        setCanvasData: function (t) {
            var i = this.canvasData,
                a = i.aspectRatio
            return (
                this.ready &&
                    !this.disabled &&
                    dt(t) &&
                    (Y(t.left) && (i.left = t.left),
                    Y(t.top) && (i.top = t.top),
                    Y(t.width)
                        ? ((i.width = t.width), (i.height = t.width / a))
                        : Y(t.height) && ((i.height = t.height), (i.width = t.height * a)),
                    this.renderCanvas(!0)),
                this
            )
        },
        getCropBoxData: function () {
            var t = this.cropBoxData,
                i
            return (
                this.ready && this.cropped && (i = { left: t.left, top: t.top, width: t.width, height: t.height }),
                i || {}
            )
        },
        setCropBoxData: function (t) {
            var i = this.cropBoxData,
                a = this.options.aspectRatio,
                n,
                r
            return (
                this.ready &&
                    this.cropped &&
                    !this.disabled &&
                    dt(t) &&
                    (Y(t.left) && (i.left = t.left),
                    Y(t.top) && (i.top = t.top),
                    Y(t.width) && t.width !== i.width && ((n = !0), (i.width = t.width)),
                    Y(t.height) && t.height !== i.height && ((r = !0), (i.height = t.height)),
                    a && (n ? (i.height = i.width / a) : r && (i.width = i.height * a)),
                    this.renderCropBox()),
                this
            )
        },
        getCroppedCanvas: function () {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
            if (!this.ready || !window.HTMLCanvasElement) return null
            var i = this.canvasData,
                a = hu(this.image, this.imageData, i, t)
            if (!this.cropped) return a
            var n = this.getData(t.rounded),
                r = n.x,
                o = n.y,
                l = n.width,
                s = n.height,
                u = a.width / Math.floor(i.naturalWidth)
            u !== 1 && ((r *= u), (o *= u), (l *= u), (s *= u))
            var c = l / s,
                d = Be({ aspectRatio: c, width: t.maxWidth || 1 / 0, height: t.maxHeight || 1 / 0 }),
                h = Be({ aspectRatio: c, width: t.minWidth || 0, height: t.minHeight || 0 }, 'cover'),
                f = Be({
                    aspectRatio: c,
                    width: t.width || (u !== 1 ? a.width : l),
                    height: t.height || (u !== 1 ? a.height : s),
                }),
                p = f.width,
                m = f.height
            ;(p = Math.min(d.width, Math.max(h.width, p))), (m = Math.min(d.height, Math.max(h.height, m)))
            var g = document.createElement('canvas'),
                b = g.getContext('2d')
            ;(g.width = ht(p)), (g.height = ht(m)), (b.fillStyle = t.fillColor || 'transparent'), b.fillRect(0, 0, p, m)
            var E = t.imageSmoothingEnabled,
                T = E === void 0 ? !0 : E,
                _ = t.imageSmoothingQuality
            ;(b.imageSmoothingEnabled = T), _ && (b.imageSmoothingQuality = _)
            var y = a.width,
                I = a.height,
                A = r,
                R = o,
                S,
                x,
                D,
                O,
                z,
                v
            A <= -l || A > y
                ? ((A = 0), (S = 0), (D = 0), (z = 0))
                : A <= 0
                  ? ((D = -A), (A = 0), (S = Math.min(y, l + A)), (z = S))
                  : A <= y && ((D = 0), (S = Math.min(l, y - A)), (z = S)),
                S <= 0 || R <= -s || R > I
                    ? ((R = 0), (x = 0), (O = 0), (v = 0))
                    : R <= 0
                      ? ((O = -R), (R = 0), (x = Math.min(I, s + R)), (v = x))
                      : R <= I && ((O = 0), (x = Math.min(s, I - R)), (v = x))
            var P = [A, R, S, x]
            if (z > 0 && v > 0) {
                var w = p / l
                P.push(D * w, O * w, z * w, v * w)
            }
            return (
                b.drawImage.apply(
                    b,
                    [a].concat(
                        sr(
                            P.map(function (L) {
                                return Math.floor(ht(L))
                            }),
                        ),
                    ),
                ),
                g
            )
        },
        setAspectRatio: function (t) {
            var i = this.options
            return (
                !this.disabled &&
                    !qi(t) &&
                    ((i.aspectRatio = Math.max(0, t) || NaN),
                    this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())),
                this
            )
        },
        setDragMode: function (t) {
            var i = this.options,
                a = this.dragBox,
                n = this.face
            if (this.ready && !this.disabled) {
                var r = t === sa,
                    o = i.movable && t === fr
                ;(t = r || o ? t : pr),
                    (i.dragMode = t),
                    xt(a, Dt, t),
                    ut(a, Zi, r),
                    ut(a, Ki, o),
                    i.cropBoxMovable || (xt(n, Dt, t), ut(n, Zi, r), ut(n, Ki, o))
            }
            return this
        },
    },
    wu = Le.Cropper,
    da = (function () {
        function e(t) {
            var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
            if ((Nd(this, e), !t || !Kd.test(t.tagName)))
                throw new Error('The first argument is required and must be an <img> or <canvas> element.')
            ;(this.element = t),
                (this.options = Q({}, ar, dt(i) && i)),
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
            Bd(
                e,
                [
                    {
                        key: 'init',
                        value: function () {
                            var i = this.element,
                                a = i.tagName.toLowerCase(),
                                n
                            if (!i[j]) {
                                if (((i[j] = this), a === 'img')) {
                                    if (
                                        ((this.isImg = !0),
                                        (n = i.getAttribute('src') || ''),
                                        (this.originalUrl = n),
                                        !n)
                                    )
                                        return
                                    n = i.src
                                } else a === 'canvas' && window.HTMLCanvasElement && (n = i.toDataURL())
                                this.load(n)
                            }
                        },
                    },
                    {
                        key: 'load',
                        value: function (i) {
                            var a = this
                            if (i) {
                                ;(this.url = i), (this.imageData = {})
                                var n = this.element,
                                    r = this.options
                                if (
                                    (!r.rotatable && !r.scalable && (r.checkOrientation = !1),
                                    !r.checkOrientation || !window.ArrayBuffer)
                                ) {
                                    this.clone()
                                    return
                                }
                                if (Qd.test(i)) {
                                    Zd.test(i) ? this.read(mu(i)) : this.clone()
                                    return
                                }
                                var o = new XMLHttpRequest(),
                                    l = this.clone.bind(this)
                                ;(this.reloading = !0),
                                    (this.xhr = o),
                                    (o.onabort = l),
                                    (o.onerror = l),
                                    (o.ontimeout = l),
                                    (o.onprogress = function () {
                                        o.getResponseHeader('content-type') !== ir && o.abort()
                                    }),
                                    (o.onload = function () {
                                        a.read(o.response)
                                    }),
                                    (o.onloadend = function () {
                                        ;(a.reloading = !1), (a.xhr = null)
                                    }),
                                    r.checkCrossOrigin && rr(i) && n.crossOrigin && (i = or(i)),
                                    o.open('GET', i, !0),
                                    (o.responseType = 'arraybuffer'),
                                    (o.withCredentials = n.crossOrigin === 'use-credentials'),
                                    o.send()
                            }
                        },
                    },
                    {
                        key: 'read',
                        value: function (i) {
                            var a = this.options,
                                n = this.imageData,
                                r = Eu(i),
                                o = 0,
                                l = 1,
                                s = 1
                            if (r > 1) {
                                this.url = gu(i, ir)
                                var u = Tu(r)
                                ;(o = u.rotate), (l = u.scaleX), (s = u.scaleY)
                            }
                            a.rotatable && (n.rotate = o), a.scalable && ((n.scaleX = l), (n.scaleY = s)), this.clone()
                        },
                    },
                    {
                        key: 'clone',
                        value: function () {
                            var i = this.element,
                                a = this.url,
                                n = i.crossOrigin,
                                r = a
                            this.options.checkCrossOrigin && rr(a) && (n || (n = 'anonymous'), (r = or(a))),
                                (this.crossOrigin = n),
                                (this.crossOriginUrl = r)
                            var o = document.createElement('img')
                            n && (o.crossOrigin = n),
                                (o.src = r || a),
                                (o.alt = i.alt || 'The image to crop'),
                                (this.image = o),
                                (o.onload = this.start.bind(this)),
                                (o.onerror = this.stop.bind(this)),
                                oe(o, Xn),
                                i.parentNode.insertBefore(o, i.nextSibling)
                        },
                    },
                    {
                        key: 'start',
                        value: function () {
                            var i = this,
                                a = this.image
                            ;(a.onload = null), (a.onerror = null), (this.sizing = !0)
                            var n = Le.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(Le.navigator.userAgent),
                                r = function (u, c) {
                                    Q(i.imageData, { naturalWidth: u, naturalHeight: c, aspectRatio: u / c }),
                                        (i.initialImageData = Q({}, i.imageData)),
                                        (i.sizing = !1),
                                        (i.sized = !0),
                                        i.build()
                                }
                            if (a.naturalWidth && !n) {
                                r(a.naturalWidth, a.naturalHeight)
                                return
                            }
                            var o = document.createElement('img'),
                                l = document.body || document.documentElement
                            ;(this.sizingImage = o),
                                (o.onload = function () {
                                    r(o.width, o.height), n || l.removeChild(o)
                                }),
                                (o.src = a.src),
                                n ||
                                    ((o.style.cssText =
                                        'left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;'),
                                    l.appendChild(o))
                        },
                    },
                    {
                        key: 'stop',
                        value: function () {
                            var i = this.image
                            ;(i.onload = null), (i.onerror = null), i.parentNode.removeChild(i), (this.image = null)
                        },
                    },
                    {
                        key: 'build',
                        value: function () {
                            if (!(!this.sized || this.ready)) {
                                var i = this.element,
                                    a = this.options,
                                    n = this.image,
                                    r = i.parentNode,
                                    o = document.createElement('div')
                                o.innerHTML = Jd
                                var l = o.querySelector('.'.concat(j, '-container')),
                                    s = l.querySelector('.'.concat(j, '-canvas')),
                                    u = l.querySelector('.'.concat(j, '-drag-box')),
                                    c = l.querySelector('.'.concat(j, '-crop-box')),
                                    d = c.querySelector('.'.concat(j, '-face'))
                                ;(this.container = r),
                                    (this.cropper = l),
                                    (this.canvas = s),
                                    (this.dragBox = u),
                                    (this.cropBox = c),
                                    (this.viewBox = l.querySelector('.'.concat(j, '-view-box'))),
                                    (this.face = d),
                                    s.appendChild(n),
                                    oe(i, fe),
                                    r.insertBefore(l, i.nextSibling),
                                    ve(n, Xn),
                                    this.initPreview(),
                                    this.bind(),
                                    (a.initialAspectRatio = Math.max(0, a.initialAspectRatio) || NaN),
                                    (a.aspectRatio = Math.max(0, a.aspectRatio) || NaN),
                                    (a.viewMode = Math.max(0, Math.min(3, Math.round(a.viewMode))) || 0),
                                    oe(c, fe),
                                    a.guides || oe(c.getElementsByClassName(''.concat(j, '-dashed')), fe),
                                    a.center || oe(c.getElementsByClassName(''.concat(j, '-center')), fe),
                                    a.background && oe(l, ''.concat(j, '-bg')),
                                    a.highlight || oe(d, Yd),
                                    a.cropBoxMovable && (oe(d, Ki), xt(d, Dt, la)),
                                    a.cropBoxResizable ||
                                        (oe(c.getElementsByClassName(''.concat(j, '-line')), fe),
                                        oe(c.getElementsByClassName(''.concat(j, '-point')), fe)),
                                    this.render(),
                                    (this.ready = !0),
                                    this.setDragMode(a.dragMode),
                                    a.autoCrop && this.crop(),
                                    this.setData(a.data),
                                    he(a.ready) && be(i, Jn, a.ready, { once: !0 }),
                                    ft(i, Jn)
                            }
                        },
                    },
                    {
                        key: 'unbuild',
                        value: function () {
                            if (this.ready) {
                                ;(this.ready = !1), this.unbind(), this.resetPreview()
                                var i = this.cropper.parentNode
                                i && i.removeChild(this.cropper), ve(this.element, fe)
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
                            return (window.Cropper = wu), e
                        },
                    },
                    {
                        key: 'setDefaults',
                        value: function (i) {
                            Q(ar, dt(i) && i)
                        },
                    },
                ],
            ),
            e
        )
    })()
Q(da.prototype, Iu, bu, _u, Ru, yu, Su)
var Rr = ({ addFilter: e, utils: t }) => {
        let { Type: i, replaceInString: a, toNaturalFileSize: n } = t
        return (
            e('ALLOW_HOPPER_ITEM', (r, { query: o }) => {
                if (!o('GET_ALLOW_FILE_SIZE_VALIDATION')) return !0
                let l = o('GET_MAX_FILE_SIZE')
                if (l !== null && r.size > l) return !1
                let s = o('GET_MIN_FILE_SIZE')
                return !(s !== null && r.size < s)
            }),
            e(
                'LOAD_FILE',
                (r, { query: o }) =>
                    new Promise((l, s) => {
                        if (!o('GET_ALLOW_FILE_SIZE_VALIDATION')) return l(r)
                        let u = o('GET_FILE_VALIDATE_SIZE_FILTER')
                        if (u && !u(r)) return l(r)
                        let c = o('GET_MAX_FILE_SIZE')
                        if (c !== null && r.size > c) {
                            s({
                                status: {
                                    main: o('GET_LABEL_MAX_FILE_SIZE_EXCEEDED'),
                                    sub: a(o('GET_LABEL_MAX_FILE_SIZE'), {
                                        filesize: n(c, '.', o('GET_FILE_SIZE_BASE'), o('GET_FILE_SIZE_LABELS', o)),
                                    }),
                                },
                            })
                            return
                        }
                        let d = o('GET_MIN_FILE_SIZE')
                        if (d !== null && r.size < d) {
                            s({
                                status: {
                                    main: o('GET_LABEL_MIN_FILE_SIZE_EXCEEDED'),
                                    sub: a(o('GET_LABEL_MIN_FILE_SIZE'), {
                                        filesize: n(d, '.', o('GET_FILE_SIZE_BASE'), o('GET_FILE_SIZE_LABELS', o)),
                                    }),
                                },
                            })
                            return
                        }
                        let h = o('GET_MAX_TOTAL_FILE_SIZE')
                        if (h !== null && o('GET_ACTIVE_ITEMS').reduce((p, m) => p + m.fileSize, 0) > h) {
                            s({
                                status: {
                                    main: o('GET_LABEL_MAX_TOTAL_FILE_SIZE_EXCEEDED'),
                                    sub: a(o('GET_LABEL_MAX_TOTAL_FILE_SIZE'), {
                                        filesize: n(h, '.', o('GET_FILE_SIZE_BASE'), o('GET_FILE_SIZE_LABELS', o)),
                                    }),
                                },
                            })
                            return
                        }
                        l(r)
                    }),
            ),
            {
                options: {
                    allowFileSizeValidation: [!0, i.BOOLEAN],
                    maxFileSize: [null, i.INT],
                    minFileSize: [null, i.INT],
                    maxTotalFileSize: [null, i.INT],
                    fileValidateSizeFilter: [null, i.FUNCTION],
                    labelMinFileSizeExceeded: ['File is too small', i.STRING],
                    labelMinFileSize: ['Minimum file size is {filesize}', i.STRING],
                    labelMaxFileSizeExceeded: ['File is too large', i.STRING],
                    labelMaxFileSize: ['Maximum file size is {filesize}', i.STRING],
                    labelMaxTotalFileSizeExceeded: ['Maximum total size exceeded', i.STRING],
                    labelMaxTotalFileSize: ['Maximum total file size is {filesize}', i.STRING],
                },
            }
        )
    },
    Au = typeof window < 'u' && typeof window.document < 'u'
Au && document.dispatchEvent(new CustomEvent('FilePond:pluginloaded', { detail: Rr }))
var yr = Rr
var Sr = ({ addFilter: e, utils: t }) => {
        let {
                Type: i,
                isString: a,
                replaceInString: n,
                guesstimateMimeType: r,
                getExtensionFromFilename: o,
                getFilenameFromURL: l,
            } = t,
            s = (f, p) => {
                let m = (/^[^/]+/.exec(f) || []).pop(),
                    g = p.slice(0, -2)
                return m === g
            },
            u = (f, p) => f.some((m) => (/\*$/.test(m) ? s(p, m) : m === p)),
            c = (f) => {
                let p = ''
                if (a(f)) {
                    let m = l(f),
                        g = o(m)
                    g && (p = r(g))
                } else p = f.type
                return p
            },
            d = (f, p, m) => {
                if (p.length === 0) return !0
                let g = c(f)
                return m
                    ? new Promise((b, E) => {
                          m(f, g)
                              .then((T) => {
                                  u(p, T) ? b() : E()
                              })
                              .catch(E)
                      })
                    : u(p, g)
            },
            h = (f) => (p) => (f[p] === null ? !1 : f[p] || p)
        return (
            e('SET_ATTRIBUTE_TO_OPTION_MAP', (f) => Object.assign(f, { accept: 'acceptedFileTypes' })),
            e('ALLOW_HOPPER_ITEM', (f, { query: p }) =>
                p('GET_ALLOW_FILE_TYPE_VALIDATION') ? d(f, p('GET_ACCEPTED_FILE_TYPES')) : !0,
            ),
            e(
                'LOAD_FILE',
                (f, { query: p }) =>
                    new Promise((m, g) => {
                        if (!p('GET_ALLOW_FILE_TYPE_VALIDATION')) {
                            m(f)
                            return
                        }
                        let b = p('GET_ACCEPTED_FILE_TYPES'),
                            E = p('GET_FILE_VALIDATE_TYPE_DETECT_TYPE'),
                            T = d(f, b, E),
                            _ = () => {
                                let y = b
                                        .map(h(p('GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES_MAP')))
                                        .filter((A) => A !== !1),
                                    I = y.filter(function (A, R) {
                                        return y.indexOf(A) === R
                                    })
                                g({
                                    status: {
                                        main: p('GET_LABEL_FILE_TYPE_NOT_ALLOWED'),
                                        sub: n(p('GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES'), {
                                            allTypes: I.join(', '),
                                            allButLastType: I.slice(0, -1).join(', '),
                                            lastType: I[y.length - 1],
                                        }),
                                    },
                                })
                            }
                        if (typeof T == 'boolean') return T ? m(f) : _()
                        T.then(() => {
                            m(f)
                        }).catch(_)
                    }),
            ),
            {
                options: {
                    allowFileTypeValidation: [!0, i.BOOLEAN],
                    acceptedFileTypes: [[], i.ARRAY],
                    labelFileTypeNotAllowed: ['File is of invalid type', i.STRING],
                    fileValidateTypeLabelExpectedTypes: ['Expects {allButLastType} or {lastType}', i.STRING],
                    fileValidateTypeLabelExpectedTypesMap: [{}, i.OBJECT],
                    fileValidateTypeDetectType: [null, i.FUNCTION],
                },
            }
        )
    },
    vu = typeof window < 'u' && typeof window.document < 'u'
vu && document.dispatchEvent(new CustomEvent('FilePond:pluginloaded', { detail: Sr }))
var wr = Sr
var Ar = (e) => /^image/.test(e.type),
    vr = ({ addFilter: e, utils: t }) => {
        let { Type: i, isFile: a, getNumericAspectRatioFromString: n } = t,
            r = (u, c) => !(!Ar(u.file) || !c('GET_ALLOW_IMAGE_CROP')),
            o = (u) => typeof u == 'object',
            l = (u) => typeof u == 'number',
            s = (u, c) => u.setMetadata('crop', Object.assign({}, u.getMetadata('crop'), c))
        return (
            e('DID_CREATE_ITEM', (u, { query: c }) => {
                u.extend('setImageCrop', (d) => {
                    if (!(!r(u, c) || !o(center))) return u.setMetadata('crop', d), d
                }),
                    u.extend('setImageCropCenter', (d) => {
                        if (!(!r(u, c) || !o(d))) return s(u, { center: d })
                    }),
                    u.extend('setImageCropZoom', (d) => {
                        if (!(!r(u, c) || !l(d))) return s(u, { zoom: Math.max(1, d) })
                    }),
                    u.extend('setImageCropRotation', (d) => {
                        if (!(!r(u, c) || !l(d))) return s(u, { rotation: d })
                    }),
                    u.extend('setImageCropFlip', (d) => {
                        if (!(!r(u, c) || !o(d))) return s(u, { flip: d })
                    }),
                    u.extend('setImageCropAspectRatio', (d) => {
                        if (!r(u, c) || typeof d > 'u') return
                        let h = u.getMetadata('crop'),
                            f = n(d),
                            p = {
                                center: { x: 0.5, y: 0.5 },
                                flip: h ? Object.assign({}, h.flip) : { horizontal: !1, vertical: !1 },
                                rotation: 0,
                                zoom: 1,
                                aspectRatio: f,
                            }
                        return u.setMetadata('crop', p), p
                    })
            }),
            e(
                'DID_LOAD_ITEM',
                (u, { query: c }) =>
                    new Promise((d, h) => {
                        let f = u.file
                        if (!a(f) || !Ar(f) || !c('GET_ALLOW_IMAGE_CROP') || u.getMetadata('crop')) return d(u)
                        let m = c('GET_IMAGE_CROP_ASPECT_RATIO')
                        u.setMetadata('crop', {
                            center: { x: 0.5, y: 0.5 },
                            flip: { horizontal: !1, vertical: !1 },
                            rotation: 0,
                            zoom: 1,
                            aspectRatio: m ? n(m) : null,
                        }),
                            d(u)
                    }),
            ),
            { options: { allowImageCrop: [!0, i.BOOLEAN], imageCropAspectRatio: [null, i.STRING] } }
        )
    },
    Lu = typeof window < 'u' && typeof window.document < 'u'
Lu && document.dispatchEvent(new CustomEvent('FilePond:pluginloaded', { detail: vr }))
var Lr = vr
var ua = (e) => /^image/.test(e.type),
    Mr = (e) => {
        let { addFilter: t, utils: i, views: a } = e,
            { Type: n, createRoute: r, createItemAPI: o = (c) => c } = i,
            { fileActionButton: l } = a
        t(
            'SHOULD_REMOVE_ON_REVERT',
            (c, { item: d, query: h }) =>
                new Promise((f) => {
                    let { file: p } = d,
                        m = h('GET_ALLOW_IMAGE_EDIT') && h('GET_IMAGE_EDIT_ALLOW_EDIT') && ua(p)
                    f(!m)
                }),
        ),
            t(
                'DID_LOAD_ITEM',
                (c, { query: d, dispatch: h }) =>
                    new Promise((f, p) => {
                        if (c.origin > 1) {
                            f(c)
                            return
                        }
                        let { file: m } = c
                        if (!d('GET_ALLOW_IMAGE_EDIT') || !d('GET_IMAGE_EDIT_INSTANT_EDIT')) {
                            f(c)
                            return
                        }
                        if (!ua(m)) {
                            f(c)
                            return
                        }
                        let g = (E, T, _) => (y) => {
                                s.shift(), y ? T(E) : _(E), h('KICK'), b()
                            },
                            b = () => {
                                if (!s.length) return
                                let { item: E, resolve: T, reject: _ } = s[0]
                                h('EDIT_ITEM', { id: E.id, handleEditorResponse: g(E, T, _) })
                            }
                        u({ item: c, resolve: f, reject: p }), s.length === 1 && b()
                    }),
            ),
            t('DID_CREATE_ITEM', (c, { query: d, dispatch: h }) => {
                c.extend('edit', () => {
                    h('EDIT_ITEM', { id: c.id })
                })
            })
        let s = [],
            u = (c) => (s.push(c), c)
        return (
            t('CREATE_VIEW', (c) => {
                let { is: d, view: h, query: f } = c
                if (!f('GET_ALLOW_IMAGE_EDIT')) return
                let p = f('GET_ALLOW_IMAGE_PREVIEW')
                if (!((d('file-info') && !p) || (d('file') && p))) return
                let g = f('GET_IMAGE_EDIT_EDITOR')
                if (!g) return
                g.filepondCallbackBridge ||
                    ((g.outputData = !0),
                    (g.outputFile = !1),
                    (g.filepondCallbackBridge = {
                        onconfirm: g.onconfirm || (() => {}),
                        oncancel: g.oncancel || (() => {}),
                    }))
                let b = ({ root: _, props: y, action: I }) => {
                        let { id: A } = y,
                            { handleEditorResponse: R } = I
                        ;(g.cropAspectRatio = _.query('GET_IMAGE_CROP_ASPECT_RATIO') || g.cropAspectRatio),
                            (g.outputCanvasBackgroundColor =
                                _.query('GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR') || g.outputCanvasBackgroundColor)
                        let S = _.query('GET_ITEM', A)
                        if (!S) return
                        let x = S.file,
                            D = S.getMetadata('crop'),
                            O = {
                                center: { x: 0.5, y: 0.5 },
                                flip: { horizontal: !1, vertical: !1 },
                                zoom: 1,
                                rotation: 0,
                                aspectRatio: null,
                            },
                            z = S.getMetadata('resize'),
                            v = S.getMetadata('filter') || null,
                            P = S.getMetadata('filters') || null,
                            w = S.getMetadata('colors') || null,
                            L = S.getMetadata('markup') || null,
                            F = {
                                crop: D || O,
                                size: z
                                    ? { upscale: z.upscale, mode: z.mode, width: z.size.width, height: z.size.height }
                                    : null,
                                filter: P
                                    ? P.id || P.matrix
                                    : _.query('GET_ALLOW_IMAGE_FILTER') &&
                                        _.query('GET_IMAGE_FILTER_COLOR_MATRIX') &&
                                        !w
                                      ? v
                                      : null,
                                color: w,
                                markup: L,
                            }
                        ;(g.onconfirm = ({ data: C }) => {
                            let { crop: V, size: G, filter: B, color: N, colorMatrix: k, markup: q } = C,
                                U = {}
                            if ((V && (U.crop = V), G)) {
                                let W = (S.getMetadata('resize') || {}).size,
                                    $ = { width: G.width, height: G.height }
                                !($.width && $.height) && W && (($.width = W.width), ($.height = W.height)),
                                    ($.width || $.height) && (U.resize = { upscale: G.upscale, mode: G.mode, size: $ })
                            }
                            q && (U.markup = q),
                                (U.colors = N),
                                (U.filters = B),
                                (U.filter = k),
                                S.setMetadata(U),
                                g.filepondCallbackBridge.onconfirm(C, o(S)),
                                R &&
                                    (g.onclose = () => {
                                        R(!0), (g.onclose = null)
                                    })
                        }),
                            (g.oncancel = () => {
                                g.filepondCallbackBridge.oncancel(o(S)),
                                    R &&
                                        (g.onclose = () => {
                                            R(!1), (g.onclose = null)
                                        })
                            }),
                            g.open(x, F)
                    },
                    E = ({ root: _, props: y }) => {
                        if (!f('GET_IMAGE_EDIT_ALLOW_EDIT')) return
                        let { id: I } = y,
                            A = f('GET_ITEM', I)
                        if (!A) return
                        let R = A.file
                        if (ua(R))
                            if (
                                ((_.ref.handleEdit = (S) => {
                                    S.stopPropagation(), _.dispatch('EDIT_ITEM', { id: I })
                                }),
                                p)
                            ) {
                                let S = h.createChildView(l, {
                                    label: 'edit',
                                    icon: f('GET_IMAGE_EDIT_ICON_EDIT'),
                                    opacity: 0,
                                })
                                S.element.classList.add('filepond--action-edit-item'),
                                    (S.element.dataset.align = f('GET_STYLE_IMAGE_EDIT_BUTTON_EDIT_ITEM_POSITION')),
                                    S.on('click', _.ref.handleEdit),
                                    (_.ref.buttonEditItem = h.appendChildView(S))
                            } else {
                                let S = h.element.querySelector('.filepond--file-info-main'),
                                    x = document.createElement('button')
                                ;(x.className = 'filepond--action-edit-item-alt'),
                                    (x.innerHTML = f('GET_IMAGE_EDIT_ICON_EDIT') + '<span>edit</span>'),
                                    x.addEventListener('click', _.ref.handleEdit),
                                    S.appendChild(x),
                                    (_.ref.editButton = x)
                            }
                    }
                h.registerDestroyer(({ root: _ }) => {
                    _.ref.buttonEditItem && _.ref.buttonEditItem.off('click', _.ref.handleEdit),
                        _.ref.editButton && _.ref.editButton.removeEventListener('click', _.ref.handleEdit)
                })
                let T = { EDIT_ITEM: b, DID_LOAD_ITEM: E }
                if (p) {
                    let _ = ({ root: y }) => {
                        y.ref.buttonEditItem && (y.ref.buttonEditItem.opacity = 1)
                    }
                    T.DID_IMAGE_PREVIEW_SHOW = _
                }
                h.registerWriter(r(T))
            }),
            {
                options: {
                    allowImageEdit: [!0, n.BOOLEAN],
                    styleImageEditButtonEditItemPosition: ['bottom center', n.STRING],
                    imageEditInstantEdit: [!1, n.BOOLEAN],
                    imageEditAllowEdit: [!0, n.BOOLEAN],
                    imageEditIconEdit: [
                        '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M8.5 17h1.586l7-7L15.5 8.414l-7 7V17zm-1.707-2.707l8-8a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-8 8A1 1 0 0 1 10.5 19h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 .293-.707z" fill="currentColor" fill-rule="nonzero"/></svg>',
                        n.STRING,
                    ],
                    imageEditEditor: [null, n.OBJECT],
                },
            }
        )
    },
    Mu = typeof window < 'u' && typeof window.document < 'u'
Mu && document.dispatchEvent(new CustomEvent('FilePond:pluginloaded', { detail: Mr }))
var Or = Mr
var Ou = (e) => /^image\/jpeg/.test(e.type),
    Ze = { JPEG: 65496, APP1: 65505, EXIF: 1165519206, TIFF: 18761, Orientation: 274, Unknown: 65280 },
    Ke = (e, t, i = !1) => e.getUint16(t, i),
    Dr = (e, t, i = !1) => e.getUint32(t, i),
    Du = (e) =>
        new Promise((t, i) => {
            let a = new FileReader()
            ;(a.onload = function (n) {
                let r = new DataView(n.target.result)
                if (Ke(r, 0) !== Ze.JPEG) {
                    t(-1)
                    return
                }
                let o = r.byteLength,
                    l = 2
                for (; l < o; ) {
                    let s = Ke(r, l)
                    if (((l += 2), s === Ze.APP1)) {
                        if (Dr(r, (l += 2)) !== Ze.EXIF) break
                        let u = Ke(r, (l += 6)) === Ze.TIFF
                        l += Dr(r, l + 4, u)
                        let c = Ke(r, l, u)
                        l += 2
                        for (let d = 0; d < c; d++)
                            if (Ke(r, l + d * 12, u) === Ze.Orientation) {
                                t(Ke(r, l + d * 12 + 8, u))
                                return
                            }
                    } else {
                        if ((s & Ze.Unknown) !== Ze.Unknown) break
                        l += Ke(r, l)
                    }
                }
                t(-1)
            }),
                a.readAsArrayBuffer(e.slice(0, 64 * 1024))
        }),
    xu = (() => typeof window < 'u' && typeof window.document < 'u')(),
    Pu = () => xu,
    Cu =
        'data:image/jpg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QA6RXhpZgAATU0AKgAAAAgAAwESAAMAAAABAAYAAAEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wAALCAABAAIBASIA/8QAJgABAAAAAAAAAAAAAAAAAAAAAxABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQAAPwBH/9k=',
    xr,
    li = Pu() ? new Image() : {}
li.onload = () => (xr = li.naturalWidth > li.naturalHeight)
li.src = Cu
var Fu = () => xr,
    Pr = ({ addFilter: e, utils: t }) => {
        let { Type: i, isFile: a } = t
        return (
            e(
                'DID_LOAD_ITEM',
                (n, { query: r }) =>
                    new Promise((o, l) => {
                        let s = n.file
                        if (!a(s) || !Ou(s) || !r('GET_ALLOW_IMAGE_EXIF_ORIENTATION') || !Fu()) return o(n)
                        Du(s).then((u) => {
                            n.setMetadata('exif', { orientation: u }), o(n)
                        })
                    }),
            ),
            { options: { allowImageExifOrientation: [!0, i.BOOLEAN] } }
        )
    },
    zu = typeof window < 'u' && typeof window.document < 'u'
zu && document.dispatchEvent(new CustomEvent('FilePond:pluginloaded', { detail: Pr }))
var Cr = Pr
var Nu = (e) => /^image/.test(e.type),
    Fr = (e, t) => Ct(e.x * t, e.y * t),
    zr = (e, t) => Ct(e.x + t.x, e.y + t.y),
    Bu = (e) => {
        let t = Math.sqrt(e.x * e.x + e.y * e.y)
        return t === 0 ? { x: 0, y: 0 } : Ct(e.x / t, e.y / t)
    },
    si = (e, t, i) => {
        let a = Math.cos(t),
            n = Math.sin(t),
            r = Ct(e.x - i.x, e.y - i.y)
        return Ct(i.x + a * r.x - n * r.y, i.y + n * r.x + a * r.y)
    },
    Ct = (e = 0, t = 0) => ({ x: e, y: t }),
    pe = (e, t, i = 1, a) => {
        if (typeof e == 'string') return parseFloat(e) * i
        if (typeof e == 'number') return e * (a ? t[a] : Math.min(t.width, t.height))
    },
    Gu = (e, t, i) => {
        let a = e.borderStyle || e.lineStyle || 'solid',
            n = e.backgroundColor || e.fontColor || 'transparent',
            r = e.borderColor || e.lineColor || 'transparent',
            o = pe(e.borderWidth || e.lineWidth, t, i),
            l = e.lineCap || 'round',
            s = e.lineJoin || 'round',
            u = typeof a == 'string' ? '' : a.map((d) => pe(d, t, i)).join(','),
            c = e.opacity || 1
        return {
            'stroke-linecap': l,
            'stroke-linejoin': s,
            'stroke-width': o || 0,
            'stroke-dasharray': u,
            stroke: r,
            fill: n,
            opacity: c,
        }
    },
    _e = (e) => e != null,
    Vu = (e, t, i = 1) => {
        let a = pe(e.x, t, i, 'width') || pe(e.left, t, i, 'width'),
            n = pe(e.y, t, i, 'height') || pe(e.top, t, i, 'height'),
            r = pe(e.width, t, i, 'width'),
            o = pe(e.height, t, i, 'height'),
            l = pe(e.right, t, i, 'width'),
            s = pe(e.bottom, t, i, 'height')
        return (
            _e(n) || (_e(o) && _e(s) ? (n = t.height - o - s) : (n = s)),
            _e(a) || (_e(r) && _e(l) ? (a = t.width - r - l) : (a = l)),
            _e(r) || (_e(a) && _e(l) ? (r = t.width - a - l) : (r = 0)),
            _e(o) || (_e(n) && _e(s) ? (o = t.height - n - s) : (o = 0)),
            { x: a || 0, y: n || 0, width: r || 0, height: o || 0 }
        )
    },
    Uu = (e) => e.map((t, i) => `${i === 0 ? 'M' : 'L'} ${t.x} ${t.y}`).join(' '),
    Oe = (e, t) => Object.keys(t).forEach((i) => e.setAttribute(i, t[i])),
    ku = 'http://www.w3.org/2000/svg',
    pt = (e, t) => {
        let i = document.createElementNS(ku, e)
        return t && Oe(i, t), i
    },
    Hu = (e) => Oe(e, { ...e.rect, ...e.styles }),
    Wu = (e) => {
        let t = e.rect.x + e.rect.width * 0.5,
            i = e.rect.y + e.rect.height * 0.5,
            a = e.rect.width * 0.5,
            n = e.rect.height * 0.5
        return Oe(e, { cx: t, cy: i, rx: a, ry: n, ...e.styles })
    },
    Yu = { contain: 'xMidYMid meet', cover: 'xMidYMid slice' },
    $u = (e, t) => {
        Oe(e, { ...e.rect, ...e.styles, preserveAspectRatio: Yu[t.fit] || 'none' })
    },
    qu = { left: 'start', center: 'middle', right: 'end' },
    Xu = (e, t, i, a) => {
        let n = pe(t.fontSize, i, a),
            r = t.fontFamily || 'sans-serif',
            o = t.fontWeight || 'normal',
            l = qu[t.textAlign] || 'start'
        Oe(e, {
            ...e.rect,
            ...e.styles,
            'stroke-width': 0,
            'font-weight': o,
            'font-size': n,
            'font-family': r,
            'text-anchor': l,
        }),
            e.text !== t.text && ((e.text = t.text), (e.textContent = t.text.length ? t.text : ' '))
    },
    ju = (e, t, i, a) => {
        Oe(e, { ...e.rect, ...e.styles, fill: 'none' })
        let n = e.childNodes[0],
            r = e.childNodes[1],
            o = e.childNodes[2],
            l = e.rect,
            s = { x: e.rect.x + e.rect.width, y: e.rect.y + e.rect.height }
        if ((Oe(n, { x1: l.x, y1: l.y, x2: s.x, y2: s.y }), !t.lineDecoration)) return
        ;(r.style.display = 'none'), (o.style.display = 'none')
        let u = Bu({ x: s.x - l.x, y: s.y - l.y }),
            c = pe(0.05, i, a)
        if (t.lineDecoration.indexOf('arrow-begin') !== -1) {
            let d = Fr(u, c),
                h = zr(l, d),
                f = si(l, 2, h),
                p = si(l, -2, h)
            Oe(r, { style: 'display:block;', d: `M${f.x},${f.y} L${l.x},${l.y} L${p.x},${p.y}` })
        }
        if (t.lineDecoration.indexOf('arrow-end') !== -1) {
            let d = Fr(u, -c),
                h = zr(s, d),
                f = si(s, 2, h),
                p = si(s, -2, h)
            Oe(o, { style: 'display:block;', d: `M${f.x},${f.y} L${s.x},${s.y} L${p.x},${p.y}` })
        }
    },
    Qu = (e, t, i, a) => {
        Oe(e, {
            ...e.styles,
            fill: 'none',
            d: Uu(t.points.map((n) => ({ x: pe(n.x, i, a, 'width'), y: pe(n.y, i, a, 'height') }))),
        })
    },
    ci = (e) => (t) => pt(e, { id: t.id }),
    Zu = (e) => {
        let t = pt('image', { id: e.id, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', opacity: '0' })
        return (
            (t.onload = () => {
                t.setAttribute('opacity', e.opacity || 1)
            }),
            t.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', e.src),
            t
        )
    },
    Ku = (e) => {
        let t = pt('g', { id: e.id, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }),
            i = pt('line')
        t.appendChild(i)
        let a = pt('path')
        t.appendChild(a)
        let n = pt('path')
        return t.appendChild(n), t
    },
    Ju = { image: Zu, rect: ci('rect'), ellipse: ci('ellipse'), text: ci('text'), path: ci('path'), line: Ku },
    eh = { rect: Hu, ellipse: Wu, image: $u, text: Xu, path: Qu, line: ju },
    th = (e, t) => Ju[e](t),
    ih = (e, t, i, a, n) => {
        t !== 'path' && (e.rect = Vu(i, a, n)), (e.styles = Gu(i, a, n)), eh[t](e, i, a, n)
    },
    ah = ['x', 'y', 'left', 'top', 'right', 'bottom', 'width', 'height'],
    nh = (e) => (typeof e == 'string' && /%/.test(e) ? parseFloat(e) / 100 : e),
    rh = (e) => {
        let [t, i] = e,
            a = i.points ? {} : ah.reduce((n, r) => ((n[r] = nh(i[r])), n), {})
        return [t, { zIndex: 0, ...i, ...a }]
    },
    oh = (e, t) => (e[1].zIndex > t[1].zIndex ? 1 : e[1].zIndex < t[1].zIndex ? -1 : 0),
    lh = (e) =>
        e.utils.createView({
            name: 'image-preview-markup',
            tag: 'svg',
            ignoreRect: !0,
            mixins: { apis: ['width', 'height', 'crop', 'markup', 'resize', 'dirty'] },
            write: ({ root: t, props: i }) => {
                if (!i.dirty) return
                let { crop: a, resize: n, markup: r } = i,
                    o = i.width,
                    l = i.height,
                    s = a.width,
                    u = a.height
                if (n) {
                    let { size: f } = n,
                        p = f && f.width,
                        m = f && f.height,
                        g = n.mode,
                        b = n.upscale
                    p && !m && (m = p), m && !p && (p = m)
                    let E = s < p && u < m
                    if (!E || (E && b)) {
                        let T = p / s,
                            _ = m / u
                        if (g === 'force') (s = p), (u = m)
                        else {
                            let y
                            g === 'cover' ? (y = Math.max(T, _)) : g === 'contain' && (y = Math.min(T, _)),
                                (s = s * y),
                                (u = u * y)
                        }
                    }
                }
                let c = { width: o, height: l }
                t.element.setAttribute('width', c.width), t.element.setAttribute('height', c.height)
                let d = Math.min(o / s, l / u)
                t.element.innerHTML = ''
                let h = t.query('GET_IMAGE_PREVIEW_MARKUP_FILTER')
                r.filter(h)
                    .map(rh)
                    .sort(oh)
                    .forEach((f) => {
                        let [p, m] = f,
                            g = th(p, m)
                        ih(g, p, m, c, d), t.element.appendChild(g)
                    })
            },
        }),
    Pt = (e, t) => ({ x: e, y: t }),
    sh = (e, t) => e.x * t.x + e.y * t.y,
    Nr = (e, t) => Pt(e.x - t.x, e.y - t.y),
    ch = (e, t) => sh(Nr(e, t), Nr(e, t)),
    Br = (e, t) => Math.sqrt(ch(e, t)),
    Gr = (e, t) => {
        let i = e,
            a = 1.5707963267948966,
            n = t,
            r = 1.5707963267948966 - t,
            o = Math.sin(a),
            l = Math.sin(n),
            s = Math.sin(r),
            u = Math.cos(r),
            c = i / o,
            d = c * l,
            h = c * s
        return Pt(u * d, u * h)
    },
    dh = (e, t) => {
        let i = e.width,
            a = e.height,
            n = Gr(i, t),
            r = Gr(a, t),
            o = Pt(e.x + Math.abs(n.x), e.y - Math.abs(n.y)),
            l = Pt(e.x + e.width + Math.abs(r.y), e.y + Math.abs(r.x)),
            s = Pt(e.x - Math.abs(r.y), e.y + e.height - Math.abs(r.x))
        return { width: Br(o, l), height: Br(o, s) }
    },
    uh = (e, t, i = 1) => {
        let a = e.height / e.width,
            n = 1,
            r = t,
            o = 1,
            l = a
        l > r && ((l = r), (o = l / a))
        let s = Math.max(n / o, r / l),
            u = e.width / (i * s * o),
            c = u * t
        return { width: u, height: c }
    },
    Ur = (e, t, i, a) => {
        let n = a.x > 0.5 ? 1 - a.x : a.x,
            r = a.y > 0.5 ? 1 - a.y : a.y,
            o = n * 2 * e.width,
            l = r * 2 * e.height,
            s = dh(t, i)
        return Math.max(s.width / o, s.height / l)
    },
    kr = (e, t) => {
        let i = e.width,
            a = i * t
        a > e.height && ((a = e.height), (i = a / t))
        let n = (e.width - i) * 0.5,
            r = (e.height - a) * 0.5
        return { x: n, y: r, width: i, height: a }
    },
    hh = (e, t = {}) => {
        let { zoom: i, rotation: a, center: n, aspectRatio: r } = t
        r || (r = e.height / e.width)
        let o = uh(e, r, i),
            l = { x: o.width * 0.5, y: o.height * 0.5 },
            s = { x: 0, y: 0, width: o.width, height: o.height, center: l },
            u = typeof t.scaleToFit > 'u' || t.scaleToFit,
            c = Ur(e, kr(s, r), a, u ? n : { x: 0.5, y: 0.5 }),
            d = i * c
        return {
            widthFloat: o.width / d,
            heightFloat: o.height / d,
            width: Math.round(o.width / d),
            height: Math.round(o.height / d),
        }
    },
    Me = { type: 'spring', stiffness: 0.5, damping: 0.45, mass: 10 },
    fh = (e) =>
        e.utils.createView({
            name: 'image-bitmap',
            ignoreRect: !0,
            mixins: { styles: ['scaleX', 'scaleY'] },
            create: ({ root: t, props: i }) => {
                t.appendChild(i.image)
            },
        }),
    ph = (e) =>
        e.utils.createView({
            name: 'image-canvas-wrapper',
            tag: 'div',
            ignoreRect: !0,
            mixins: {
                apis: ['crop', 'width', 'height'],
                styles: ['originX', 'originY', 'translateX', 'translateY', 'scaleX', 'scaleY', 'rotateZ'],
                animations: {
                    originX: Me,
                    originY: Me,
                    scaleX: Me,
                    scaleY: Me,
                    translateX: Me,
                    translateY: Me,
                    rotateZ: Me,
                },
            },
            create: ({ root: t, props: i }) => {
                ;(i.width = i.image.width),
                    (i.height = i.image.height),
                    (t.ref.bitmap = t.appendChildView(t.createChildView(fh(e), { image: i.image })))
            },
            write: ({ root: t, props: i }) => {
                let { flip: a } = i.crop,
                    { bitmap: n } = t.ref
                ;(n.scaleX = a.horizontal ? -1 : 1), (n.scaleY = a.vertical ? -1 : 1)
            },
        }),
    mh = (e) =>
        e.utils.createView({
            name: 'image-clip',
            tag: 'div',
            ignoreRect: !0,
            mixins: {
                apis: ['crop', 'markup', 'resize', 'width', 'height', 'dirty', 'background'],
                styles: ['width', 'height', 'opacity'],
                animations: { opacity: { type: 'tween', duration: 250 } },
            },
            didWriteView: function ({ root: t, props: i }) {
                i.background && (t.element.style.backgroundColor = i.background)
            },
            create: ({ root: t, props: i }) => {
                ;(t.ref.image = t.appendChildView(t.createChildView(ph(e), Object.assign({}, i)))),
                    (t.ref.createMarkup = () => {
                        t.ref.markup ||
                            (t.ref.markup = t.appendChildView(t.createChildView(lh(e), Object.assign({}, i))))
                    }),
                    (t.ref.destroyMarkup = () => {
                        t.ref.markup && (t.removeChildView(t.ref.markup), (t.ref.markup = null))
                    })
                let a = t.query('GET_IMAGE_PREVIEW_TRANSPARENCY_INDICATOR')
                a !== null &&
                    (a === 'grid'
                        ? (t.element.dataset.transparencyIndicator = a)
                        : (t.element.dataset.transparencyIndicator = 'color'))
            },
            write: ({ root: t, props: i, shouldOptimize: a }) => {
                let { crop: n, markup: r, resize: o, dirty: l, width: s, height: u } = i
                t.ref.image.crop = n
                let c = { x: 0, y: 0, width: s, height: u, center: { x: s * 0.5, y: u * 0.5 } },
                    d = { width: t.ref.image.width, height: t.ref.image.height },
                    h = { x: n.center.x * d.width, y: n.center.y * d.height },
                    f = { x: c.center.x - d.width * n.center.x, y: c.center.y - d.height * n.center.y },
                    p = Math.PI * 2 + (n.rotation % (Math.PI * 2)),
                    m = n.aspectRatio || d.height / d.width,
                    g = typeof n.scaleToFit > 'u' || n.scaleToFit,
                    b = Ur(d, kr(c, m), p, g ? n.center : { x: 0.5, y: 0.5 }),
                    E = n.zoom * b
                r && r.length
                    ? (t.ref.createMarkup(),
                      (t.ref.markup.width = s),
                      (t.ref.markup.height = u),
                      (t.ref.markup.resize = o),
                      (t.ref.markup.dirty = l),
                      (t.ref.markup.markup = r),
                      (t.ref.markup.crop = hh(d, n)))
                    : t.ref.markup && t.ref.destroyMarkup()
                let T = t.ref.image
                if (a) {
                    ;(T.originX = null),
                        (T.originY = null),
                        (T.translateX = null),
                        (T.translateY = null),
                        (T.rotateZ = null),
                        (T.scaleX = null),
                        (T.scaleY = null)
                    return
                }
                ;(T.originX = h.x),
                    (T.originY = h.y),
                    (T.translateX = f.x),
                    (T.translateY = f.y),
                    (T.rotateZ = p),
                    (T.scaleX = E),
                    (T.scaleY = E)
            },
        }),
    gh = (e) =>
        e.utils.createView({
            name: 'image-preview',
            tag: 'div',
            ignoreRect: !0,
            mixins: {
                apis: ['image', 'crop', 'markup', 'resize', 'dirty', 'background'],
                styles: ['translateY', 'scaleX', 'scaleY', 'opacity'],
                animations: { scaleX: Me, scaleY: Me, translateY: Me, opacity: { type: 'tween', duration: 400 } },
            },
            create: ({ root: t, props: i }) => {
                t.ref.clip = t.appendChildView(
                    t.createChildView(mh(e), {
                        id: i.id,
                        image: i.image,
                        crop: i.crop,
                        markup: i.markup,
                        resize: i.resize,
                        dirty: i.dirty,
                        background: i.background,
                    }),
                )
            },
            write: ({ root: t, props: i, shouldOptimize: a }) => {
                let { clip: n } = t.ref,
                    { image: r, crop: o, markup: l, resize: s, dirty: u } = i
                if (
                    ((n.crop = o),
                    (n.markup = l),
                    (n.resize = s),
                    (n.dirty = u),
                    (n.opacity = a ? 0 : 1),
                    a || t.rect.element.hidden)
                )
                    return
                let c = r.height / r.width,
                    d = o.aspectRatio || c,
                    h = t.rect.inner.width,
                    f = t.rect.inner.height,
                    p = t.query('GET_IMAGE_PREVIEW_HEIGHT'),
                    m = t.query('GET_IMAGE_PREVIEW_MIN_HEIGHT'),
                    g = t.query('GET_IMAGE_PREVIEW_MAX_HEIGHT'),
                    b = t.query('GET_PANEL_ASPECT_RATIO'),
                    E = t.query('GET_ALLOW_MULTIPLE')
                b && !E && ((p = h * b), (d = b))
                let T = p !== null ? p : Math.max(m, Math.min(h * d, g)),
                    _ = T / d
                _ > h && ((_ = h), (T = _ * d)), T > f && ((T = f), (_ = f / d)), (n.width = _), (n.height = T)
            },
        }),
    Eh = `<svg width="500" height="200" viewBox="0 0 500 200" preserveAspectRatio="none">
    <defs>
        <radialGradient id="gradient-__UID__" cx=".5" cy="1.25" r="1.15">
            <stop offset='50%' stop-color='#000000'/>
            <stop offset='56%' stop-color='#0a0a0a'/>
            <stop offset='63%' stop-color='#262626'/>
            <stop offset='69%' stop-color='#4f4f4f'/>
            <stop offset='75%' stop-color='#808080'/>
            <stop offset='81%' stop-color='#b1b1b1'/>
            <stop offset='88%' stop-color='#dadada'/>
            <stop offset='94%' stop-color='#f6f6f6'/>
            <stop offset='100%' stop-color='#ffffff'/>
        </radialGradient>
        <mask id="mask-__UID__">
            <rect x="0" y="0" width="500" height="200" fill="url(#gradient-__UID__)"></rect>
        </mask>
    </defs>
    <rect x="0" width="500" height="200" fill="currentColor" mask="url(#mask-__UID__)"></rect>
</svg>`,
    Vr = 0,
    Th = (e) =>
        e.utils.createView({
            name: 'image-preview-overlay',
            tag: 'div',
            ignoreRect: !0,
            create: ({ root: t, props: i }) => {
                let a = Eh
                if (document.querySelector('base')) {
                    let n = new URL(window.location.href.replace(window.location.hash, '')).href
                    a = a.replace(/url\(\#/g, 'url(' + n + '#')
                }
                Vr++,
                    t.element.classList.add(`filepond--image-preview-overlay-${i.status}`),
                    (t.element.innerHTML = a.replace(/__UID__/g, Vr))
            },
            mixins: { styles: ['opacity'], animations: { opacity: { type: 'spring', mass: 25 } } },
        }),
    Ih = function () {
        self.onmessage = (e) => {
            createImageBitmap(e.data.message.file).then((t) => {
                self.postMessage({ id: e.data.id, message: t }, [t])
            })
        }
    },
    bh = function () {
        self.onmessage = (e) => {
            let t = e.data.message.imageData,
                i = e.data.message.colorMatrix,
                a = t.data,
                n = a.length,
                r = i[0],
                o = i[1],
                l = i[2],
                s = i[3],
                u = i[4],
                c = i[5],
                d = i[6],
                h = i[7],
                f = i[8],
                p = i[9],
                m = i[10],
                g = i[11],
                b = i[12],
                E = i[13],
                T = i[14],
                _ = i[15],
                y = i[16],
                I = i[17],
                A = i[18],
                R = i[19],
                S = 0,
                x = 0,
                D = 0,
                O = 0,
                z = 0
            for (; S < n; S += 4)
                (x = a[S] / 255),
                    (D = a[S + 1] / 255),
                    (O = a[S + 2] / 255),
                    (z = a[S + 3] / 255),
                    (a[S] = Math.max(0, Math.min((x * r + D * o + O * l + z * s + u) * 255, 255))),
                    (a[S + 1] = Math.max(0, Math.min((x * c + D * d + O * h + z * f + p) * 255, 255))),
                    (a[S + 2] = Math.max(0, Math.min((x * m + D * g + O * b + z * E + T) * 255, 255))),
                    (a[S + 3] = Math.max(0, Math.min((x * _ + D * y + O * I + z * A + R) * 255, 255)))
            self.postMessage({ id: e.data.id, message: t }, [t.data.buffer])
        }
    },
    _h = (e, t) => {
        let i = new Image()
        ;(i.onload = () => {
            let a = i.naturalWidth,
                n = i.naturalHeight
            ;(i = null), t(a, n)
        }),
            (i.src = e)
    },
    Rh = {
        1: () => [1, 0, 0, 1, 0, 0],
        2: (e) => [-1, 0, 0, 1, e, 0],
        3: (e, t) => [-1, 0, 0, -1, e, t],
        4: (e, t) => [1, 0, 0, -1, 0, t],
        5: () => [0, 1, 1, 0, 0, 0],
        6: (e, t) => [0, 1, -1, 0, t, 0],
        7: (e, t) => [0, -1, -1, 0, t, e],
        8: (e) => [0, -1, 1, 0, 0, e],
    },
    yh = (e, t, i, a) => {
        a !== -1 && e.transform.apply(e, Rh[a](t, i))
    },
    Sh = (e, t, i, a) => {
        ;(t = Math.round(t)), (i = Math.round(i))
        let n = document.createElement('canvas')
        ;(n.width = t), (n.height = i)
        let r = n.getContext('2d')
        return a >= 5 && a <= 8 && ([t, i] = [i, t]), yh(r, t, i, a), r.drawImage(e, 0, 0, t, i), n
    },
    Hr = (e) => /^image/.test(e.type) && !/svg/.test(e.type),
    wh = 10,
    Ah = 10,
    vh = (e) => {
        let t = Math.min(wh / e.width, Ah / e.height),
            i = document.createElement('canvas'),
            a = i.getContext('2d'),
            n = (i.width = Math.ceil(e.width * t)),
            r = (i.height = Math.ceil(e.height * t))
        a.drawImage(e, 0, 0, n, r)
        let o = null
        try {
            o = a.getImageData(0, 0, n, r).data
        } catch {
            return null
        }
        let l = o.length,
            s = 0,
            u = 0,
            c = 0,
            d = 0
        for (; d < l; d += 4) (s += o[d] * o[d]), (u += o[d + 1] * o[d + 1]), (c += o[d + 2] * o[d + 2])
        return (s = ha(s, l)), (u = ha(u, l)), (c = ha(c, l)), { r: s, g: u, b: c }
    },
    ha = (e, t) => Math.floor(Math.sqrt(e / (t / 4))),
    Lh = (e, t) => (
        (t = t || document.createElement('canvas')),
        (t.width = e.width),
        (t.height = e.height),
        t.getContext('2d').drawImage(e, 0, 0),
        t
    ),
    Mh = (e) => {
        let t
        try {
            t = new ImageData(e.width, e.height)
        } catch {
            t = document.createElement('canvas').getContext('2d').createImageData(e.width, e.height)
        }
        return t.data.set(new Uint8ClampedArray(e.data)), t
    },
    Oh = (e) =>
        new Promise((t, i) => {
            let a = new Image()
            ;(a.crossOrigin = 'Anonymous'),
                (a.onload = () => {
                    t(a)
                }),
                (a.onerror = (n) => {
                    i(n)
                }),
                (a.src = e)
        }),
    Dh = (e) => {
        let t = Th(e),
            i = gh(e),
            { createWorker: a } = e.utils,
            n = (E, T, _) =>
                new Promise((y) => {
                    E.ref.imageData || (E.ref.imageData = _.getContext('2d').getImageData(0, 0, _.width, _.height))
                    let I = Mh(E.ref.imageData)
                    if (!T || T.length !== 20) return _.getContext('2d').putImageData(I, 0, 0), y()
                    let A = a(bh)
                    A.post(
                        { imageData: I, colorMatrix: T },
                        (R) => {
                            _.getContext('2d').putImageData(R, 0, 0), A.terminate(), y()
                        },
                        [I.data.buffer],
                    )
                }),
            r = (E, T) => {
                E.removeChildView(T), (T.image.width = 1), (T.image.height = 1), T._destroy()
            },
            o = ({ root: E }) => {
                let T = E.ref.images.shift()
                return (T.opacity = 0), (T.translateY = -15), E.ref.imageViewBin.push(T), T
            },
            l = ({ root: E, props: T, image: _ }) => {
                let y = T.id,
                    I = E.query('GET_ITEM', { id: y })
                if (!I) return
                let A = I.getMetadata('crop') || {
                        center: { x: 0.5, y: 0.5 },
                        flip: { horizontal: !1, vertical: !1 },
                        zoom: 1,
                        rotation: 0,
                        aspectRatio: null,
                    },
                    R = E.query('GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR'),
                    S,
                    x,
                    D = !1
                E.query('GET_IMAGE_PREVIEW_MARKUP_SHOW') &&
                    ((S = I.getMetadata('markup') || []), (x = I.getMetadata('resize')), (D = !0))
                let O = E.appendChildView(
                    E.createChildView(i, {
                        id: y,
                        image: _,
                        crop: A,
                        resize: x,
                        markup: S,
                        dirty: D,
                        background: R,
                        opacity: 0,
                        scaleX: 1.15,
                        scaleY: 1.15,
                        translateY: 15,
                    }),
                    E.childViews.length,
                )
                E.ref.images.push(O),
                    (O.opacity = 1),
                    (O.scaleX = 1),
                    (O.scaleY = 1),
                    (O.translateY = 0),
                    setTimeout(() => {
                        E.dispatch('DID_IMAGE_PREVIEW_SHOW', { id: y })
                    }, 250)
            },
            s = ({ root: E, props: T }) => {
                let _ = E.query('GET_ITEM', { id: T.id })
                if (!_) return
                let y = E.ref.images[E.ref.images.length - 1]
                ;(y.crop = _.getMetadata('crop')),
                    (y.background = E.query('GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR')),
                    E.query('GET_IMAGE_PREVIEW_MARKUP_SHOW') &&
                        ((y.dirty = !0), (y.resize = _.getMetadata('resize')), (y.markup = _.getMetadata('markup')))
            },
            u = ({ root: E, props: T, action: _ }) => {
                if (!/crop|filter|markup|resize/.test(_.change.key) || !E.ref.images.length) return
                let y = E.query('GET_ITEM', { id: T.id })
                if (y) {
                    if (/filter/.test(_.change.key)) {
                        let I = E.ref.images[E.ref.images.length - 1]
                        n(E, _.change.value, I.image)
                        return
                    }
                    if (/crop|markup|resize/.test(_.change.key)) {
                        let I = y.getMetadata('crop'),
                            A = E.ref.images[E.ref.images.length - 1]
                        if (
                            I &&
                            I.aspectRatio &&
                            A.crop &&
                            A.crop.aspectRatio &&
                            Math.abs(I.aspectRatio - A.crop.aspectRatio) > 1e-5
                        ) {
                            let R = o({ root: E })
                            l({ root: E, props: T, image: Lh(R.image) })
                        } else s({ root: E, props: T })
                    }
                }
            },
            c = (E) => {
                let _ = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./)
                return (_ ? parseInt(_[1]) : null) <= 58 ? !1 : 'createImageBitmap' in window && Hr(E)
            },
            d = ({ root: E, props: T }) => {
                let { id: _ } = T,
                    y = E.query('GET_ITEM', _)
                if (!y) return
                let I = URL.createObjectURL(y.file)
                _h(I, (A, R) => {
                    E.dispatch('DID_IMAGE_PREVIEW_CALCULATE_SIZE', { id: _, width: A, height: R })
                })
            },
            h = ({ root: E, props: T }) => {
                let { id: _ } = T,
                    y = E.query('GET_ITEM', _)
                if (!y) return
                let I = URL.createObjectURL(y.file),
                    A = () => {
                        Oh(I).then(R)
                    },
                    R = (S) => {
                        URL.revokeObjectURL(I)
                        let D = (y.getMetadata('exif') || {}).orientation || -1,
                            { width: O, height: z } = S
                        if (!O || !z) return
                        D >= 5 && D <= 8 && ([O, z] = [z, O])
                        let v = Math.max(1, window.devicePixelRatio * 0.75),
                            w = E.query('GET_IMAGE_PREVIEW_ZOOM_FACTOR') * v,
                            L = z / O,
                            F = E.rect.element.width,
                            C = E.rect.element.height,
                            V = F,
                            G = V * L
                        L > 1 ? ((V = Math.min(O, F * w)), (G = V * L)) : ((G = Math.min(z, C * w)), (V = G / L))
                        let B = Sh(S, V, G, D),
                            N = () => {
                                let q = E.query('GET_IMAGE_PREVIEW_CALCULATE_AVERAGE_IMAGE_COLOR') ? vh(data) : null
                                y.setMetadata('color', q, !0),
                                    'close' in S && S.close(),
                                    (E.ref.overlayShadow.opacity = 1),
                                    l({ root: E, props: T, image: B })
                            },
                            k = y.getMetadata('filter')
                        k ? n(E, k, B).then(N) : N()
                    }
                if (c(y.file)) {
                    let S = a(Ih)
                    S.post({ file: y.file }, (x) => {
                        if ((S.terminate(), !x)) {
                            A()
                            return
                        }
                        R(x)
                    })
                } else A()
            },
            f = ({ root: E }) => {
                let T = E.ref.images[E.ref.images.length - 1]
                ;(T.translateY = 0), (T.scaleX = 1), (T.scaleY = 1), (T.opacity = 1)
            },
            p = ({ root: E }) => {
                ;(E.ref.overlayShadow.opacity = 1), (E.ref.overlayError.opacity = 0), (E.ref.overlaySuccess.opacity = 0)
            },
            m = ({ root: E }) => {
                ;(E.ref.overlayShadow.opacity = 0.25), (E.ref.overlayError.opacity = 1)
            },
            g = ({ root: E }) => {
                ;(E.ref.overlayShadow.opacity = 0.25), (E.ref.overlaySuccess.opacity = 1)
            },
            b = ({ root: E }) => {
                ;(E.ref.images = []),
                    (E.ref.imageData = null),
                    (E.ref.imageViewBin = []),
                    (E.ref.overlayShadow = E.appendChildView(E.createChildView(t, { opacity: 0, status: 'idle' }))),
                    (E.ref.overlaySuccess = E.appendChildView(E.createChildView(t, { opacity: 0, status: 'success' }))),
                    (E.ref.overlayError = E.appendChildView(E.createChildView(t, { opacity: 0, status: 'failure' })))
            }
        return e.utils.createView({
            name: 'image-preview-wrapper',
            create: b,
            styles: ['height'],
            apis: ['height'],
            destroy: ({ root: E }) => {
                E.ref.images.forEach((T) => {
                    ;(T.image.width = 1), (T.image.height = 1)
                })
            },
            didWriteView: ({ root: E }) => {
                E.ref.images.forEach((T) => {
                    T.dirty = !1
                })
            },
            write: e.utils.createRoute(
                {
                    DID_IMAGE_PREVIEW_DRAW: f,
                    DID_IMAGE_PREVIEW_CONTAINER_CREATE: d,
                    DID_FINISH_CALCULATE_PREVIEWSIZE: h,
                    DID_UPDATE_ITEM_METADATA: u,
                    DID_THROW_ITEM_LOAD_ERROR: m,
                    DID_THROW_ITEM_PROCESSING_ERROR: m,
                    DID_THROW_ITEM_INVALID: m,
                    DID_COMPLETE_ITEM_PROCESSING: g,
                    DID_START_ITEM_PROCESSING: p,
                    DID_REVERT_ITEM_PROCESSING: p,
                },
                ({ root: E }) => {
                    let T = E.ref.imageViewBin.filter((_) => _.opacity === 0)
                    ;(E.ref.imageViewBin = E.ref.imageViewBin.filter((_) => _.opacity > 0)),
                        T.forEach((_) => r(E, _)),
                        (T.length = 0)
                },
            ),
        })
    },
    Wr = (e) => {
        let { addFilter: t, utils: i } = e,
            { Type: a, createRoute: n, isFile: r } = i,
            o = Dh(e)
        return (
            t('CREATE_VIEW', (l) => {
                let { is: s, view: u, query: c } = l
                if (!s('file') || !c('GET_ALLOW_IMAGE_PREVIEW')) return
                let d = ({ root: g, props: b }) => {
                        let { id: E } = b,
                            T = c('GET_ITEM', E)
                        if (!T || !r(T.file) || T.archived) return
                        let _ = T.file
                        if (!Nu(_) || !c('GET_IMAGE_PREVIEW_FILTER_ITEM')(T)) return
                        let y = 'createImageBitmap' in (window || {}),
                            I = c('GET_IMAGE_PREVIEW_MAX_FILE_SIZE')
                        if (!y && I && _.size > I) return
                        g.ref.imagePreview = u.appendChildView(u.createChildView(o, { id: E }))
                        let A = g.query('GET_IMAGE_PREVIEW_HEIGHT')
                        A && g.dispatch('DID_UPDATE_PANEL_HEIGHT', { id: T.id, height: A })
                        let R = !y && _.size > c('GET_IMAGE_PREVIEW_MAX_INSTANT_PREVIEW_FILE_SIZE')
                        g.dispatch('DID_IMAGE_PREVIEW_CONTAINER_CREATE', { id: E }, R)
                    },
                    h = (g, b) => {
                        if (!g.ref.imagePreview) return
                        let { id: E } = b,
                            T = g.query('GET_ITEM', { id: E })
                        if (!T) return
                        let _ = g.query('GET_PANEL_ASPECT_RATIO'),
                            y = g.query('GET_ITEM_PANEL_ASPECT_RATIO'),
                            I = g.query('GET_IMAGE_PREVIEW_HEIGHT')
                        if (_ || y || I) return
                        let { imageWidth: A, imageHeight: R } = g.ref
                        if (!A || !R) return
                        let S = g.query('GET_IMAGE_PREVIEW_MIN_HEIGHT'),
                            x = g.query('GET_IMAGE_PREVIEW_MAX_HEIGHT'),
                            O = (T.getMetadata('exif') || {}).orientation || -1
                        if (
                            (O >= 5 && O <= 8 && ([A, R] = [R, A]), !Hr(T.file) || g.query('GET_IMAGE_PREVIEW_UPSCALE'))
                        ) {
                            let F = 2048 / A
                            ;(A *= F), (R *= F)
                        }
                        let z = R / A,
                            v = (T.getMetadata('crop') || {}).aspectRatio || z,
                            P = Math.max(S, Math.min(R, x)),
                            w = g.rect.element.width,
                            L = Math.min(w * v, P)
                        g.dispatch('DID_UPDATE_PANEL_HEIGHT', { id: T.id, height: L })
                    },
                    f = ({ root: g }) => {
                        g.ref.shouldRescale = !0
                    },
                    p = ({ root: g, action: b }) => {
                        b.change.key === 'crop' && (g.ref.shouldRescale = !0)
                    },
                    m = ({ root: g, action: b }) => {
                        ;(g.ref.imageWidth = b.width),
                            (g.ref.imageHeight = b.height),
                            (g.ref.shouldRescale = !0),
                            (g.ref.shouldDrawPreview = !0),
                            g.dispatch('KICK')
                    }
                u.registerWriter(
                    n(
                        {
                            DID_RESIZE_ROOT: f,
                            DID_STOP_RESIZE: f,
                            DID_LOAD_ITEM: d,
                            DID_IMAGE_PREVIEW_CALCULATE_SIZE: m,
                            DID_UPDATE_ITEM_METADATA: p,
                        },
                        ({ root: g, props: b }) => {
                            g.ref.imagePreview &&
                                (g.rect.element.hidden ||
                                    (g.ref.shouldRescale && (h(g, b), (g.ref.shouldRescale = !1)),
                                    g.ref.shouldDrawPreview &&
                                        (requestAnimationFrame(() => {
                                            requestAnimationFrame(() => {
                                                g.dispatch('DID_FINISH_CALCULATE_PREVIEWSIZE', { id: b.id })
                                            })
                                        }),
                                        (g.ref.shouldDrawPreview = !1))))
                        },
                    ),
                )
            }),
            {
                options: {
                    allowImagePreview: [!0, a.BOOLEAN],
                    imagePreviewFilterItem: [() => !0, a.FUNCTION],
                    imagePreviewHeight: [null, a.INT],
                    imagePreviewMinHeight: [44, a.INT],
                    imagePreviewMaxHeight: [256, a.INT],
                    imagePreviewMaxFileSize: [null, a.INT],
                    imagePreviewZoomFactor: [2, a.INT],
                    imagePreviewUpscale: [!1, a.BOOLEAN],
                    imagePreviewMaxInstantPreviewFileSize: [1e6, a.INT],
                    imagePreviewTransparencyIndicator: [null, a.STRING],
                    imagePreviewCalculateAverageImageColor: [!1, a.BOOLEAN],
                    imagePreviewMarkupShow: [!0, a.BOOLEAN],
                    imagePreviewMarkupFilter: [() => !0, a.FUNCTION],
                },
            }
        )
    },
    xh = typeof window < 'u' && typeof window.document < 'u'
xh && document.dispatchEvent(new CustomEvent('FilePond:pluginloaded', { detail: Wr }))
var Yr = Wr
var Ph = (e) => /^image/.test(e.type),
    Ch = (e, t) => {
        let i = new Image()
        ;(i.onload = () => {
            let a = i.naturalWidth,
                n = i.naturalHeight
            ;(i = null), t({ width: a, height: n })
        }),
            (i.onerror = () => t(null)),
            (i.src = e)
    },
    $r = ({ addFilter: e, utils: t }) => {
        let { Type: i } = t
        return (
            e(
                'DID_LOAD_ITEM',
                (a, { query: n }) =>
                    new Promise((r, o) => {
                        let l = a.file
                        if (!Ph(l) || !n('GET_ALLOW_IMAGE_RESIZE')) return r(a)
                        let s = n('GET_IMAGE_RESIZE_MODE'),
                            u = n('GET_IMAGE_RESIZE_TARGET_WIDTH'),
                            c = n('GET_IMAGE_RESIZE_TARGET_HEIGHT'),
                            d = n('GET_IMAGE_RESIZE_UPSCALE')
                        if (u === null && c === null) return r(a)
                        let h = u === null ? c : u,
                            f = c === null ? h : c,
                            p = URL.createObjectURL(l)
                        Ch(p, (m) => {
                            if ((URL.revokeObjectURL(p), !m)) return r(a)
                            let { width: g, height: b } = m,
                                E = (a.getMetadata('exif') || {}).orientation || -1
                            if ((E >= 5 && E <= 8 && ([g, b] = [b, g]), g === h && b === f)) return r(a)
                            if (!d) {
                                if (s === 'cover') {
                                    if (g <= h || b <= f) return r(a)
                                } else if (g <= h && b <= h) return r(a)
                            }
                            a.setMetadata('resize', { mode: s, upscale: d, size: { width: h, height: f } }), r(a)
                        })
                    }),
            ),
            {
                options: {
                    allowImageResize: [!0, i.BOOLEAN],
                    imageResizeMode: ['cover', i.STRING],
                    imageResizeUpscale: [!0, i.BOOLEAN],
                    imageResizeTargetWidth: [null, i.INT],
                    imageResizeTargetHeight: [null, i.INT],
                },
            }
        )
    },
    Fh = typeof window < 'u' && typeof window.document < 'u'
Fh && document.dispatchEvent(new CustomEvent('FilePond:pluginloaded', { detail: $r }))
var qr = $r
var zh = (e) => /^image/.test(e.type),
    Nh = (e) => e.substr(0, e.lastIndexOf('.')) || e,
    Bh = { jpeg: 'jpg', 'svg+xml': 'svg' },
    Gh = (e, t) => {
        let i = Nh(e),
            a = t.split('/')[1],
            n = Bh[a] || a
        return `${i}.${n}`
    },
    Vh = (e) => (/jpeg|png|svg\+xml/.test(e) ? e : 'image/jpeg'),
    Uh = (e) => /^image/.test(e.type),
    kh = {
        1: () => [1, 0, 0, 1, 0, 0],
        2: (e) => [-1, 0, 0, 1, e, 0],
        3: (e, t) => [-1, 0, 0, -1, e, t],
        4: (e, t) => [1, 0, 0, -1, 0, t],
        5: () => [0, 1, 1, 0, 0, 0],
        6: (e, t) => [0, 1, -1, 0, t, 0],
        7: (e, t) => [0, -1, -1, 0, t, e],
        8: (e) => [0, -1, 1, 0, 0, e],
    },
    Hh = (e, t, i) => (i === -1 && (i = 1), kh[i](e, t)),
    Ft = (e, t) => ({ x: e, y: t }),
    Wh = (e, t) => e.x * t.x + e.y * t.y,
    Xr = (e, t) => Ft(e.x - t.x, e.y - t.y),
    Yh = (e, t) => Wh(Xr(e, t), Xr(e, t)),
    jr = (e, t) => Math.sqrt(Yh(e, t)),
    Qr = (e, t) => {
        let i = e,
            a = 1.5707963267948966,
            n = t,
            r = 1.5707963267948966 - t,
            o = Math.sin(a),
            l = Math.sin(n),
            s = Math.sin(r),
            u = Math.cos(r),
            c = i / o,
            d = c * l,
            h = c * s
        return Ft(u * d, u * h)
    },
    $h = (e, t) => {
        let i = e.width,
            a = e.height,
            n = Qr(i, t),
            r = Qr(a, t),
            o = Ft(e.x + Math.abs(n.x), e.y - Math.abs(n.y)),
            l = Ft(e.x + e.width + Math.abs(r.y), e.y + Math.abs(r.x)),
            s = Ft(e.x - Math.abs(r.y), e.y + e.height - Math.abs(r.x))
        return { width: jr(o, l), height: jr(o, s) }
    },
    Jr = (e, t, i = 0, a = { x: 0.5, y: 0.5 }) => {
        let n = a.x > 0.5 ? 1 - a.x : a.x,
            r = a.y > 0.5 ? 1 - a.y : a.y,
            o = n * 2 * e.width,
            l = r * 2 * e.height,
            s = $h(t, i)
        return Math.max(s.width / o, s.height / l)
    },
    eo = (e, t) => {
        let i = e.width,
            a = i * t
        a > e.height && ((a = e.height), (i = a / t))
        let n = (e.width - i) * 0.5,
            r = (e.height - a) * 0.5
        return { x: n, y: r, width: i, height: a }
    },
    Zr = (e, t, i = 1) => {
        let a = e.height / e.width,
            n = 1,
            r = t,
            o = 1,
            l = a
        l > r && ((l = r), (o = l / a))
        let s = Math.max(n / o, r / l),
            u = e.width / (i * s * o),
            c = u * t
        return { width: u, height: c }
    },
    to = (e) => {
        ;(e.width = 1), (e.height = 1), e.getContext('2d').clearRect(0, 0, 1, 1)
    },
    Kr = (e) => e && (e.horizontal || e.vertical),
    qh = (e, t, i) => {
        if (t <= 1 && !Kr(i)) return (e.width = e.naturalWidth), (e.height = e.naturalHeight), e
        let a = document.createElement('canvas'),
            n = e.naturalWidth,
            r = e.naturalHeight,
            o = t >= 5 && t <= 8
        o ? ((a.width = r), (a.height = n)) : ((a.width = n), (a.height = r))
        let l = a.getContext('2d')
        if ((t && l.transform.apply(l, Hh(n, r, t)), Kr(i))) {
            let s = [1, 0, 0, 1, 0, 0]
            ;((!o && i.horizontal) || o & i.vertical) && ((s[0] = -1), (s[4] = n)),
                ((!o && i.vertical) || (o && i.horizontal)) && ((s[3] = -1), (s[5] = r)),
                l.transform(...s)
        }
        return l.drawImage(e, 0, 0, n, r), a
    },
    Xh = (e, t, i = {}, a = {}) => {
        let { canvasMemoryLimit: n, background: r = null } = a,
            o = i.zoom || 1,
            l = qh(e, t, i.flip),
            s = { width: l.width, height: l.height },
            u = i.aspectRatio || s.height / s.width,
            c = Zr(s, u, o)
        if (n) {
            let T = c.width * c.height
            if (T > n) {
                let _ = Math.sqrt(n) / Math.sqrt(T)
                ;(s.width = Math.floor(s.width * _)), (s.height = Math.floor(s.height * _)), (c = Zr(s, u, o))
            }
        }
        let d = document.createElement('canvas'),
            h = { x: c.width * 0.5, y: c.height * 0.5 },
            f = { x: 0, y: 0, width: c.width, height: c.height, center: h },
            p = typeof i.scaleToFit > 'u' || i.scaleToFit,
            m = o * Jr(s, eo(f, u), i.rotation, p ? i.center : { x: 0.5, y: 0.5 })
        ;(d.width = Math.round(c.width / m)), (d.height = Math.round(c.height / m)), (h.x /= m), (h.y /= m)
        let g = { x: h.x - s.width * (i.center ? i.center.x : 0.5), y: h.y - s.height * (i.center ? i.center.y : 0.5) },
            b = d.getContext('2d')
        r && ((b.fillStyle = r), b.fillRect(0, 0, d.width, d.height)),
            b.translate(h.x, h.y),
            b.rotate(i.rotation || 0),
            b.drawImage(l, g.x - h.x, g.y - h.y, s.width, s.height)
        let E = b.getImageData(0, 0, d.width, d.height)
        return to(d), E
    },
    jh = (() => typeof window < 'u' && typeof window.document < 'u')()
jh &&
    (HTMLCanvasElement.prototype.toBlob ||
        Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
            value: function (e, t, i) {
                var a = this.toDataURL(t, i).split(',')[1]
                setTimeout(function () {
                    for (var n = atob(a), r = n.length, o = new Uint8Array(r), l = 0; l < r; l++) o[l] = n.charCodeAt(l)
                    e(new Blob([o], { type: t || 'image/png' }))
                })
            },
        }))
var Qh = (e, t, i = null) =>
        new Promise((a) => {
            let n = i ? i(e) : e
            Promise.resolve(n).then((r) => {
                r.toBlob(a, t.type, t.quality)
            })
        }),
    ui = (e, t) => zt(e.x * t, e.y * t),
    hi = (e, t) => zt(e.x + t.x, e.y + t.y),
    io = (e) => {
        let t = Math.sqrt(e.x * e.x + e.y * e.y)
        return t === 0 ? { x: 0, y: 0 } : zt(e.x / t, e.y / t)
    },
    Ge = (e, t, i) => {
        let a = Math.cos(t),
            n = Math.sin(t),
            r = zt(e.x - i.x, e.y - i.y)
        return zt(i.x + a * r.x - n * r.y, i.y + n * r.x + a * r.y)
    },
    zt = (e = 0, t = 0) => ({ x: e, y: t }),
    le = (e, t, i = 1, a) => {
        if (typeof e == 'string') return parseFloat(e) * i
        if (typeof e == 'number') return e * (a ? t[a] : Math.min(t.width, t.height))
    },
    Je = (e, t, i) => {
        let a = e.borderStyle || e.lineStyle || 'solid',
            n = e.backgroundColor || e.fontColor || 'transparent',
            r = e.borderColor || e.lineColor || 'transparent',
            o = le(e.borderWidth || e.lineWidth, t, i),
            l = e.lineCap || 'round',
            s = e.lineJoin || 'round',
            u = typeof a == 'string' ? '' : a.map((d) => le(d, t, i)).join(','),
            c = e.opacity || 1
        return {
            'stroke-linecap': l,
            'stroke-linejoin': s,
            'stroke-width': o || 0,
            'stroke-dasharray': u,
            stroke: r,
            fill: n,
            opacity: c,
        }
    },
    Re = (e) => e != null,
    gt = (e, t, i = 1) => {
        let a = le(e.x, t, i, 'width') || le(e.left, t, i, 'width'),
            n = le(e.y, t, i, 'height') || le(e.top, t, i, 'height'),
            r = le(e.width, t, i, 'width'),
            o = le(e.height, t, i, 'height'),
            l = le(e.right, t, i, 'width'),
            s = le(e.bottom, t, i, 'height')
        return (
            Re(n) || (Re(o) && Re(s) ? (n = t.height - o - s) : (n = s)),
            Re(a) || (Re(r) && Re(l) ? (a = t.width - r - l) : (a = l)),
            Re(r) || (Re(a) && Re(l) ? (r = t.width - a - l) : (r = 0)),
            Re(o) || (Re(n) && Re(s) ? (o = t.height - n - s) : (o = 0)),
            { x: a || 0, y: n || 0, width: r || 0, height: o || 0 }
        )
    },
    Zh = (e) => e.map((t, i) => `${i === 0 ? 'M' : 'L'} ${t.x} ${t.y}`).join(' '),
    De = (e, t) => Object.keys(t).forEach((i) => e.setAttribute(i, t[i])),
    Kh = 'http://www.w3.org/2000/svg',
    mt = (e, t) => {
        let i = document.createElementNS(Kh, e)
        return t && De(i, t), i
    },
    Jh = (e) => De(e, { ...e.rect, ...e.styles }),
    ef = (e) => {
        let t = e.rect.x + e.rect.width * 0.5,
            i = e.rect.y + e.rect.height * 0.5,
            a = e.rect.width * 0.5,
            n = e.rect.height * 0.5
        return De(e, { cx: t, cy: i, rx: a, ry: n, ...e.styles })
    },
    tf = { contain: 'xMidYMid meet', cover: 'xMidYMid slice' },
    af = (e, t) => {
        De(e, { ...e.rect, ...e.styles, preserveAspectRatio: tf[t.fit] || 'none' })
    },
    nf = { left: 'start', center: 'middle', right: 'end' },
    rf = (e, t, i, a) => {
        let n = le(t.fontSize, i, a),
            r = t.fontFamily || 'sans-serif',
            o = t.fontWeight || 'normal',
            l = nf[t.textAlign] || 'start'
        De(e, {
            ...e.rect,
            ...e.styles,
            'stroke-width': 0,
            'font-weight': o,
            'font-size': n,
            'font-family': r,
            'text-anchor': l,
        }),
            e.text !== t.text && ((e.text = t.text), (e.textContent = t.text.length ? t.text : ' '))
    },
    of = (e, t, i, a) => {
        De(e, { ...e.rect, ...e.styles, fill: 'none' })
        let n = e.childNodes[0],
            r = e.childNodes[1],
            o = e.childNodes[2],
            l = e.rect,
            s = { x: e.rect.x + e.rect.width, y: e.rect.y + e.rect.height }
        if ((De(n, { x1: l.x, y1: l.y, x2: s.x, y2: s.y }), !t.lineDecoration)) return
        ;(r.style.display = 'none'), (o.style.display = 'none')
        let u = io({ x: s.x - l.x, y: s.y - l.y }),
            c = le(0.05, i, a)
        if (t.lineDecoration.indexOf('arrow-begin') !== -1) {
            let d = ui(u, c),
                h = hi(l, d),
                f = Ge(l, 2, h),
                p = Ge(l, -2, h)
            De(r, { style: 'display:block;', d: `M${f.x},${f.y} L${l.x},${l.y} L${p.x},${p.y}` })
        }
        if (t.lineDecoration.indexOf('arrow-end') !== -1) {
            let d = ui(u, -c),
                h = hi(s, d),
                f = Ge(s, 2, h),
                p = Ge(s, -2, h)
            De(o, { style: 'display:block;', d: `M${f.x},${f.y} L${s.x},${s.y} L${p.x},${p.y}` })
        }
    },
    lf = (e, t, i, a) => {
        De(e, {
            ...e.styles,
            fill: 'none',
            d: Zh(t.points.map((n) => ({ x: le(n.x, i, a, 'width'), y: le(n.y, i, a, 'height') }))),
        })
    },
    di = (e) => (t) => mt(e, { id: t.id }),
    sf = (e) => {
        let t = mt('image', { id: e.id, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', opacity: '0' })
        return (
            (t.onload = () => {
                t.setAttribute('opacity', e.opacity || 1)
            }),
            t.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', e.src),
            t
        )
    },
    cf = (e) => {
        let t = mt('g', { id: e.id, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }),
            i = mt('line')
        t.appendChild(i)
        let a = mt('path')
        t.appendChild(a)
        let n = mt('path')
        return t.appendChild(n), t
    },
    df = { image: sf, rect: di('rect'), ellipse: di('ellipse'), text: di('text'), path: di('path'), line: cf },
    uf = { rect: Jh, ellipse: ef, image: af, text: rf, path: lf, line: of },
    hf = (e, t) => df[e](t),
    ff = (e, t, i, a, n) => {
        t !== 'path' && (e.rect = gt(i, a, n)), (e.styles = Je(i, a, n)), uf[t](e, i, a, n)
    },
    ao = (e, t) => (e[1].zIndex > t[1].zIndex ? 1 : e[1].zIndex < t[1].zIndex ? -1 : 0),
    pf = (e, t = {}, i, a) =>
        new Promise((n) => {
            let { background: r = null } = a,
                o = new FileReader()
            ;(o.onloadend = () => {
                let l = o.result,
                    s = document.createElement('div')
                ;(s.style.cssText = 'position:absolute;pointer-events:none;width:0;height:0;visibility:hidden;'),
                    (s.innerHTML = l)
                let u = s.querySelector('svg')
                document.body.appendChild(s)
                let c = u.getBBox()
                s.parentNode.removeChild(s)
                let d = s.querySelector('title'),
                    h = u.getAttribute('viewBox') || '',
                    f = u.getAttribute('width') || '',
                    p = u.getAttribute('height') || '',
                    m = parseFloat(f) || null,
                    g = parseFloat(p) || null,
                    b = (f.match(/[a-z]+/) || [])[0] || '',
                    E = (p.match(/[a-z]+/) || [])[0] || '',
                    T = h.split(' ').map(parseFloat),
                    _ = T.length ? { x: T[0], y: T[1], width: T[2], height: T[3] } : c,
                    y = m ?? _.width,
                    I = g ?? _.height
                ;(u.style.overflow = 'visible'), u.setAttribute('width', y), u.setAttribute('height', I)
                let A = ''
                if (i && i.length) {
                    let k = { width: y, height: I }
                    ;(A = i.sort(ao).reduce((q, U) => {
                        let W = hf(U[0], U[1])
                        return (
                            ff(W, U[0], U[1], k),
                            W.removeAttribute('id'),
                            W.getAttribute('opacity') === 1 && W.removeAttribute('opacity'),
                            q +
                                `
` +
                                W.outerHTML +
                                `
`
                        )
                    }, '')),
                        (A = `

<g>${A.replace(/&nbsp;/g, ' ')}</g>

`)
                }
                let R = t.aspectRatio || I / y,
                    S = y,
                    x = S * R,
                    D = typeof t.scaleToFit > 'u' || t.scaleToFit,
                    O = t.center ? t.center.x : 0.5,
                    z = t.center ? t.center.y : 0.5,
                    v = Jr(
                        { width: y, height: I },
                        eo({ width: S, height: x }, R),
                        t.rotation,
                        D ? { x: O, y: z } : { x: 0.5, y: 0.5 },
                    ),
                    P = t.zoom * v,
                    w = t.rotation * (180 / Math.PI),
                    L = { x: S * 0.5, y: x * 0.5 },
                    F = { x: L.x - y * O, y: L.y - I * z },
                    C = [
                        `rotate(${w} ${L.x} ${L.y})`,
                        `translate(${L.x} ${L.y})`,
                        `scale(${P})`,
                        `translate(${-L.x} ${-L.y})`,
                        `translate(${F.x} ${F.y})`,
                    ],
                    V = t.flip && t.flip.horizontal,
                    G = t.flip && t.flip.vertical,
                    B = [`scale(${V ? -1 : 1} ${G ? -1 : 1})`, `translate(${V ? -y : 0} ${G ? -I : 0})`],
                    N = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${S}${b}" height="${x}${E}" 
viewBox="0 0 ${S} ${x}" ${r ? 'style="background:' + r + '" ' : ''}
preserveAspectRatio="xMinYMin"
xmlns:xlink="http://www.w3.org/1999/xlink"
xmlns="http://www.w3.org/2000/svg">
<!-- Generated by PQINA - https://pqina.nl/ -->
<title>${d ? d.textContent : ''}</title>
<g transform="${C.join(' ')}">
<g transform="${B.join(' ')}">
${u.outerHTML}${A}
</g>
</g>
</svg>`
                n(N)
            }),
                o.readAsText(e)
        }),
    mf = (e) => {
        let t
        try {
            t = new ImageData(e.width, e.height)
        } catch {
            t = document.createElement('canvas').getContext('2d').createImageData(e.width, e.height)
        }
        return t.data.set(e.data), t
    },
    gf = () => {
        let e = { resize: c, filter: u },
            t = (d, h) => (
                d.forEach((f) => {
                    h = e[f.type](h, f.data)
                }),
                h
            ),
            i = (d, h) => {
                let f = d.transforms,
                    p = null
                if (
                    (f.forEach((m) => {
                        m.type === 'filter' && (p = m)
                    }),
                    p)
                ) {
                    let m = null
                    f.forEach((g) => {
                        g.type === 'resize' && (m = g)
                    }),
                        m && ((m.data.matrix = p.data), (f = f.filter((g) => g.type !== 'filter')))
                }
                h(t(f, d.imageData))
            }
        self.onmessage = (d) => {
            i(d.data.message, (h) => {
                self.postMessage({ id: d.data.id, message: h }, [h.data.buffer])
            })
        }
        let a = 1,
            n = 1,
            r = 1
        function o(d, h, f) {
            let p = h[d] / 255,
                m = h[d + 1] / 255,
                g = h[d + 2] / 255,
                b = h[d + 3] / 255,
                E = p * f[0] + m * f[1] + g * f[2] + b * f[3] + f[4],
                T = p * f[5] + m * f[6] + g * f[7] + b * f[8] + f[9],
                _ = p * f[10] + m * f[11] + g * f[12] + b * f[13] + f[14],
                y = p * f[15] + m * f[16] + g * f[17] + b * f[18] + f[19],
                I = Math.max(0, E * y) + a * (1 - y),
                A = Math.max(0, T * y) + n * (1 - y),
                R = Math.max(0, _ * y) + r * (1 - y)
            ;(h[d] = Math.max(0, Math.min(1, I)) * 255),
                (h[d + 1] = Math.max(0, Math.min(1, A)) * 255),
                (h[d + 2] = Math.max(0, Math.min(1, R)) * 255)
        }
        let l = self.JSON.stringify([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0])
        function s(d) {
            return self.JSON.stringify(d || []) === l
        }
        function u(d, h) {
            if (!h || s(h)) return d
            let f = d.data,
                p = f.length,
                m = h[0],
                g = h[1],
                b = h[2],
                E = h[3],
                T = h[4],
                _ = h[5],
                y = h[6],
                I = h[7],
                A = h[8],
                R = h[9],
                S = h[10],
                x = h[11],
                D = h[12],
                O = h[13],
                z = h[14],
                v = h[15],
                P = h[16],
                w = h[17],
                L = h[18],
                F = h[19],
                C = 0,
                V = 0,
                G = 0,
                B = 0,
                N = 0,
                k = 0,
                q = 0,
                U = 0,
                W = 0,
                $ = 0,
                ae = 0,
                X = 0
            for (; C < p; C += 4)
                (V = f[C] / 255),
                    (G = f[C + 1] / 255),
                    (B = f[C + 2] / 255),
                    (N = f[C + 3] / 255),
                    (k = V * m + G * g + B * b + N * E + T),
                    (q = V * _ + G * y + B * I + N * A + R),
                    (U = V * S + G * x + B * D + N * O + z),
                    (W = V * v + G * P + B * w + N * L + F),
                    ($ = Math.max(0, k * W) + a * (1 - W)),
                    (ae = Math.max(0, q * W) + n * (1 - W)),
                    (X = Math.max(0, U * W) + r * (1 - W)),
                    (f[C] = Math.max(0, Math.min(1, $)) * 255),
                    (f[C + 1] = Math.max(0, Math.min(1, ae)) * 255),
                    (f[C + 2] = Math.max(0, Math.min(1, X)) * 255)
            return d
        }
        function c(d, h) {
            let { mode: f = 'contain', upscale: p = !1, width: m, height: g, matrix: b } = h
            if (((b = !b || s(b) ? null : b), !m && !g)) return u(d, b)
            if ((m === null ? (m = g) : g === null && (g = m), f !== 'force')) {
                let O = m / d.width,
                    z = g / d.height,
                    v = 1
                if ((f === 'cover' ? (v = Math.max(O, z)) : f === 'contain' && (v = Math.min(O, z)), v > 1 && p === !1))
                    return u(d, b)
                ;(m = d.width * v), (g = d.height * v)
            }
            let E = d.width,
                T = d.height,
                _ = Math.round(m),
                y = Math.round(g),
                I = d.data,
                A = new Uint8ClampedArray(_ * y * 4),
                R = E / _,
                S = T / y,
                x = Math.ceil(R * 0.5),
                D = Math.ceil(S * 0.5)
            for (let O = 0; O < y; O++)
                for (let z = 0; z < _; z++) {
                    let v = (z + O * _) * 4,
                        P = 0,
                        w = 0,
                        L = 0,
                        F = 0,
                        C = 0,
                        V = 0,
                        G = 0,
                        B = (O + 0.5) * S
                    for (let N = Math.floor(O * S); N < (O + 1) * S; N++) {
                        let k = Math.abs(B - (N + 0.5)) / D,
                            q = (z + 0.5) * R,
                            U = k * k
                        for (let W = Math.floor(z * R); W < (z + 1) * R; W++) {
                            let $ = Math.abs(q - (W + 0.5)) / x,
                                ae = Math.sqrt(U + $ * $)
                            if (ae >= -1 && ae <= 1 && ((P = 2 * ae * ae * ae - 3 * ae * ae + 1), P > 0)) {
                                $ = 4 * (W + N * E)
                                let X = I[$ + 3]
                                ;(G += P * X),
                                    (L += P),
                                    X < 255 && (P = (P * X) / 250),
                                    (F += P * I[$]),
                                    (C += P * I[$ + 1]),
                                    (V += P * I[$ + 2]),
                                    (w += P)
                            }
                        }
                    }
                    ;(A[v] = F / w), (A[v + 1] = C / w), (A[v + 2] = V / w), (A[v + 3] = G / L), b && o(v, A, b)
                }
            return { data: A, width: _, height: y }
        }
    },
    Ef = (e, t) => {
        if (e.getUint32(t + 4, !1) !== 1165519206) return
        t += 4
        let i = e.getUint16((t += 6), !1) === 18761
        t += e.getUint32(t + 4, i)
        let a = e.getUint16(t, i)
        t += 2
        for (let n = 0; n < a; n++) if (e.getUint16(t + n * 12, i) === 274) return e.setUint16(t + n * 12 + 8, 1, i), !0
        return !1
    },
    Tf = (e) => {
        let t = new DataView(e)
        if (t.getUint16(0) !== 65496) return null
        let i = 2,
            a,
            n,
            r = !1
        for (
            ;
            i < t.byteLength &&
            ((a = t.getUint16(i, !1)),
            (n = t.getUint16(i + 2, !1) + 2),
            !(!((a >= 65504 && a <= 65519) || a === 65534) || (r || (r = Ef(t, i, n)), i + n > t.byteLength)));

        )
            i += n
        return e.slice(0, i)
    },
    If = (e) =>
        new Promise((t) => {
            let i = new FileReader()
            ;(i.onload = () => t(Tf(i.result) || null)), i.readAsArrayBuffer(e.slice(0, 256 * 1024))
        }),
    bf = () =>
        (window.BlobBuilder =
            window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder),
    _f = (e, t) => {
        let i = bf()
        if (i) {
            let a = new i()
            return a.append(e), a.getBlob(t)
        }
        return new Blob([e], { type: t })
    },
    Rf = () => Math.random().toString(36).substr(2, 9),
    yf = (e) => {
        let t = new Blob(['(', e.toString(), ')()'], { type: 'application/javascript' }),
            i = URL.createObjectURL(t),
            a = new Worker(i),
            n = []
        return {
            transfer: () => {},
            post: (r, o, l) => {
                let s = Rf()
                ;(n[s] = o),
                    (a.onmessage = (u) => {
                        let c = n[u.data.id]
                        c && (c(u.data.message), delete n[u.data.id])
                    }),
                    a.postMessage({ id: s, message: r }, l)
            },
            terminate: () => {
                a.terminate(), URL.revokeObjectURL(i)
            },
        }
    },
    Sf = (e) =>
        new Promise((t, i) => {
            let a = new Image()
            ;(a.onload = () => {
                t(a)
            }),
                (a.onerror = (n) => {
                    i(n)
                }),
                (a.src = e)
        }),
    wf = (e) => e.reduce((t, i) => t.then((a) => i().then(Array.prototype.concat.bind(a))), Promise.resolve([])),
    Af = (e, t) =>
        new Promise((i) => {
            let a = { width: e.width, height: e.height },
                n = e.getContext('2d'),
                r = t.sort(ao).map(
                    (o) => () =>
                        new Promise((l) => {
                            Pf[o[0]](n, a, o[1], l) && l()
                        }),
                )
            wf(r).then(() => i(e))
        }),
    Et = (e, t) => {
        e.beginPath(),
            (e.lineCap = t['stroke-linecap']),
            (e.lineJoin = t['stroke-linejoin']),
            (e.lineWidth = t['stroke-width']),
            t['stroke-dasharray'].length && e.setLineDash(t['stroke-dasharray'].split(',')),
            (e.fillStyle = t.fill),
            (e.strokeStyle = t.stroke),
            (e.globalAlpha = t.opacity || 1)
    },
    Tt = (e) => {
        e.fill(), e.stroke(), (e.globalAlpha = 1)
    },
    vf = (e, t, i) => {
        let a = gt(i, t),
            n = Je(i, t)
        return Et(e, n), e.rect(a.x, a.y, a.width, a.height), Tt(e, n), !0
    },
    Lf = (e, t, i) => {
        let a = gt(i, t),
            n = Je(i, t)
        Et(e, n)
        let r = a.x,
            o = a.y,
            l = a.width,
            s = a.height,
            u = 0.5522848,
            c = (l / 2) * u,
            d = (s / 2) * u,
            h = r + l,
            f = o + s,
            p = r + l / 2,
            m = o + s / 2
        return (
            e.moveTo(r, m),
            e.bezierCurveTo(r, m - d, p - c, o, p, o),
            e.bezierCurveTo(p + c, o, h, m - d, h, m),
            e.bezierCurveTo(h, m + d, p + c, f, p, f),
            e.bezierCurveTo(p - c, f, r, m + d, r, m),
            Tt(e, n),
            !0
        )
    },
    Mf = (e, t, i, a) => {
        let n = gt(i, t),
            r = Je(i, t)
        Et(e, r)
        let o = new Image()
        new URL(i.src, window.location.href).origin !== window.location.origin && (o.crossOrigin = ''),
            (o.onload = () => {
                if (i.fit === 'cover') {
                    let s = n.width / n.height,
                        u = s > 1 ? o.width : o.height * s,
                        c = s > 1 ? o.width / s : o.height,
                        d = o.width * 0.5 - u * 0.5,
                        h = o.height * 0.5 - c * 0.5
                    e.drawImage(o, d, h, u, c, n.x, n.y, n.width, n.height)
                } else if (i.fit === 'contain') {
                    let s = Math.min(n.width / o.width, n.height / o.height),
                        u = s * o.width,
                        c = s * o.height,
                        d = n.x + n.width * 0.5 - u * 0.5,
                        h = n.y + n.height * 0.5 - c * 0.5
                    e.drawImage(o, 0, 0, o.width, o.height, d, h, u, c)
                } else e.drawImage(o, 0, 0, o.width, o.height, n.x, n.y, n.width, n.height)
                Tt(e, r), a()
            }),
            (o.src = i.src)
    },
    Of = (e, t, i) => {
        let a = gt(i, t),
            n = Je(i, t)
        Et(e, n)
        let r = le(i.fontSize, t),
            o = i.fontFamily || 'sans-serif',
            l = i.fontWeight || 'normal',
            s = i.textAlign || 'left'
        return (e.font = `${l} ${r}px ${o}`), (e.textAlign = s), e.fillText(i.text, a.x, a.y), Tt(e, n), !0
    },
    Df = (e, t, i) => {
        let a = Je(i, t)
        Et(e, a), e.beginPath()
        let n = i.points.map((o) => ({ x: le(o.x, t, 1, 'width'), y: le(o.y, t, 1, 'height') }))
        e.moveTo(n[0].x, n[0].y)
        let r = n.length
        for (let o = 1; o < r; o++) e.lineTo(n[o].x, n[o].y)
        return Tt(e, a), !0
    },
    xf = (e, t, i) => {
        let a = gt(i, t),
            n = Je(i, t)
        Et(e, n), e.beginPath()
        let r = { x: a.x, y: a.y },
            o = { x: a.x + a.width, y: a.y + a.height }
        e.moveTo(r.x, r.y), e.lineTo(o.x, o.y)
        let l = io({ x: o.x - r.x, y: o.y - r.y }),
            s = 0.04 * Math.min(t.width, t.height)
        if (i.lineDecoration.indexOf('arrow-begin') !== -1) {
            let u = ui(l, s),
                c = hi(r, u),
                d = Ge(r, 2, c),
                h = Ge(r, -2, c)
            e.moveTo(d.x, d.y), e.lineTo(r.x, r.y), e.lineTo(h.x, h.y)
        }
        if (i.lineDecoration.indexOf('arrow-end') !== -1) {
            let u = ui(l, -s),
                c = hi(o, u),
                d = Ge(o, 2, c),
                h = Ge(o, -2, c)
            e.moveTo(d.x, d.y), e.lineTo(o.x, o.y), e.lineTo(h.x, h.y)
        }
        return Tt(e, n), !0
    },
    Pf = { rect: vf, ellipse: Lf, image: Mf, text: Of, line: xf, path: Df },
    Cf = (e) => {
        let t = document.createElement('canvas')
        return (t.width = e.width), (t.height = e.height), t.getContext('2d').putImageData(e, 0, 0), t
    },
    Ff = (e, t, i = {}) =>
        new Promise((a, n) => {
            if (!e || !Uh(e)) return n({ status: 'not an image file', file: e })
            let { stripImageHead: r, beforeCreateBlob: o, afterCreateBlob: l, canvasMemoryLimit: s } = i,
                { crop: u, size: c, filter: d, markup: h, output: f } = t,
                p = t.image && t.image.orientation ? Math.max(1, Math.min(8, t.image.orientation)) : null,
                m = f && f.quality,
                g = m === null ? null : m / 100,
                b = (f && f.type) || null,
                E = (f && f.background) || null,
                T = []
            c && (typeof c.width == 'number' || typeof c.height == 'number') && T.push({ type: 'resize', data: c }),
                d && d.length === 20 && T.push({ type: 'filter', data: d })
            let _ = (A) => {
                    let R = l ? l(A) : A
                    Promise.resolve(R).then(a)
                },
                y = (A, R) => {
                    let S = Cf(A),
                        x = h.length ? Af(S, h) : S
                    Promise.resolve(x).then((D) => {
                        Qh(D, R, o)
                            .then((O) => {
                                if ((to(D), r)) return _(O)
                                If(e).then((z) => {
                                    z !== null && (O = new Blob([z, O.slice(20)], { type: O.type })), _(O)
                                })
                            })
                            .catch(n)
                    })
                }
            if (/svg/.test(e.type) && b === null)
                return pf(e, u, h, { background: E }).then((A) => {
                    a(_f(A, 'image/svg+xml'))
                })
            let I = URL.createObjectURL(e)
            Sf(I)
                .then((A) => {
                    URL.revokeObjectURL(I)
                    let R = Xh(A, p, u, { canvasMemoryLimit: s, background: E }),
                        S = { quality: g, type: b || e.type }
                    if (!T.length) return y(R, S)
                    let x = yf(gf)
                    x.post(
                        { transforms: T, imageData: R },
                        (D) => {
                            y(mf(D), S), x.terminate()
                        },
                        [R.data.buffer],
                    )
                })
                .catch(n)
        }),
    zf = ['x', 'y', 'left', 'top', 'right', 'bottom', 'width', 'height'],
    Nf = (e) => (typeof e == 'string' && /%/.test(e) ? parseFloat(e) / 100 : e),
    Bf = (e) => {
        let [t, i] = e,
            a = i.points ? {} : zf.reduce((n, r) => ((n[r] = Nf(i[r])), n), {})
        return [t, { zIndex: 0, ...i, ...a }]
    },
    Gf = (e) =>
        new Promise((t, i) => {
            let a = new Image()
            a.src = URL.createObjectURL(e)
            let n = () => {
                let o = a.naturalWidth,
                    l = a.naturalHeight
                o && l && (URL.revokeObjectURL(a.src), clearInterval(r), t({ width: o, height: l }))
            }
            a.onerror = (o) => {
                URL.revokeObjectURL(a.src), clearInterval(r), i(o)
            }
            let r = setInterval(n, 1)
            n()
        })
typeof window < 'u' &&
    typeof window.document < 'u' &&
    (HTMLCanvasElement.prototype.toBlob ||
        Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
            value: function (e, t, i) {
                let a = this
                setTimeout(() => {
                    let n = a.toDataURL(t, i).split(',')[1],
                        r = atob(n),
                        o = r.length,
                        l = new Uint8Array(o)
                    for (; o--; ) l[o] = r.charCodeAt(o)
                    e(new Blob([l], { type: t || 'image/png' }))
                })
            },
        }))
var fa = typeof window < 'u' && typeof window.document < 'u',
    Vf = fa && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
    no = ({ addFilter: e, utils: t }) => {
        let { Type: i, forin: a, getFileFromBlob: n, isFile: r } = t,
            o = ['crop', 'resize', 'filter', 'markup', 'output'],
            l = (c) => (d, h, f) => d(h, c ? c(f) : f),
            s = (c) =>
                c.aspectRatio === null &&
                c.rotation === 0 &&
                c.zoom === 1 &&
                c.center &&
                c.center.x === 0.5 &&
                c.center.y === 0.5 &&
                c.flip &&
                c.flip.horizontal === !1 &&
                c.flip.vertical === !1
        e(
            'SHOULD_PREPARE_OUTPUT',
            (c, { query: d }) =>
                new Promise((h) => {
                    h(!d('IS_ASYNC'))
                }),
        )
        let u = (c, d, h) =>
            new Promise((f) => {
                if (!c('GET_ALLOW_IMAGE_TRANSFORM') || h.archived || !r(d) || !zh(d)) return f(!1)
                Gf(d)
                    .then(() => {
                        let p = c('GET_IMAGE_TRANSFORM_IMAGE_FILTER')
                        if (p) {
                            let m = p(d)
                            if (m == null) return handleRevert(!0)
                            if (typeof m == 'boolean') return f(m)
                            if (typeof m.then == 'function') return m.then(f)
                        }
                        f(!0)
                    })
                    .catch((p) => {
                        f(!1)
                    })
            })
        return (
            e('DID_CREATE_ITEM', (c, { query: d, dispatch: h }) => {
                d('GET_ALLOW_IMAGE_TRANSFORM') &&
                    c.extend(
                        'requestPrepare',
                        () =>
                            new Promise((f, p) => {
                                h('REQUEST_PREPARE_OUTPUT', { query: c.id, item: c, success: f, failure: p }, !0)
                            }),
                    )
            }),
            e(
                'PREPARE_OUTPUT',
                (c, { query: d, item: h }) =>
                    new Promise((f) => {
                        u(d, c, h).then((p) => {
                            if (!p) return f(c)
                            let m = []
                            d('GET_IMAGE_TRANSFORM_VARIANTS_INCLUDE_ORIGINAL') &&
                                m.push(
                                    () =>
                                        new Promise((R) => {
                                            R({ name: d('GET_IMAGE_TRANSFORM_VARIANTS_ORIGINAL_NAME'), file: c })
                                        }),
                                ),
                                d('GET_IMAGE_TRANSFORM_VARIANTS_INCLUDE_DEFAULT') &&
                                    m.push(
                                        (R, S, x) =>
                                            new Promise((D) => {
                                                R(S, x).then((O) =>
                                                    D({
                                                        name: d('GET_IMAGE_TRANSFORM_VARIANTS_DEFAULT_NAME'),
                                                        file: O,
                                                    }),
                                                )
                                            }),
                                    )
                            let g = d('GET_IMAGE_TRANSFORM_VARIANTS') || {}
                            a(g, (R, S) => {
                                let x = l(S)
                                m.push(
                                    (D, O, z) =>
                                        new Promise((v) => {
                                            x(D, O, z).then((P) => v({ name: R, file: P }))
                                        }),
                                )
                            })
                            let b = d('GET_IMAGE_TRANSFORM_OUTPUT_QUALITY'),
                                E = d('GET_IMAGE_TRANSFORM_OUTPUT_QUALITY_MODE'),
                                T = b === null ? null : b / 100,
                                _ = d('GET_IMAGE_TRANSFORM_OUTPUT_MIME_TYPE'),
                                y = d('GET_IMAGE_TRANSFORM_CLIENT_TRANSFORMS') || o
                            h.setMetadata('output', { type: _, quality: T, client: y }, !0)
                            let I = (R, S) =>
                                    new Promise((x, D) => {
                                        let O = { ...S }
                                        Object.keys(O)
                                            .filter((G) => G !== 'exif')
                                            .forEach((G) => {
                                                y.indexOf(G) === -1 && delete O[G]
                                            })
                                        let { resize: z, exif: v, output: P, crop: w, filter: L, markup: F } = O,
                                            C = {
                                                image: { orientation: v ? v.orientation : null },
                                                output:
                                                    P && (P.type || typeof P.quality == 'number' || P.background)
                                                        ? {
                                                              type: P.type,
                                                              quality:
                                                                  typeof P.quality == 'number' ? P.quality * 100 : null,
                                                              background:
                                                                  P.background ||
                                                                  d('GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR') ||
                                                                  null,
                                                          }
                                                        : void 0,
                                                size:
                                                    z && (z.size.width || z.size.height)
                                                        ? { mode: z.mode, upscale: z.upscale, ...z.size }
                                                        : void 0,
                                                crop: w && !s(w) ? { ...w } : void 0,
                                                markup: F && F.length ? F.map(Bf) : [],
                                                filter: L,
                                            }
                                        if (C.output) {
                                            let G = P.type ? P.type !== R.type : !1,
                                                B = /\/jpe?g$/.test(R.type),
                                                N = P.quality !== null ? B && E === 'always' : !1
                                            if (!!!(C.size || C.crop || C.filter || G || N)) return x(R)
                                        }
                                        let V = {
                                            beforeCreateBlob: d('GET_IMAGE_TRANSFORM_BEFORE_CREATE_BLOB'),
                                            afterCreateBlob: d('GET_IMAGE_TRANSFORM_AFTER_CREATE_BLOB'),
                                            canvasMemoryLimit: d('GET_IMAGE_TRANSFORM_CANVAS_MEMORY_LIMIT'),
                                            stripImageHead: d('GET_IMAGE_TRANSFORM_OUTPUT_STRIP_IMAGE_HEAD'),
                                        }
                                        Ff(R, C, V)
                                            .then((G) => {
                                                let B = n(G, Gh(R.name, Vh(G.type)))
                                                x(B)
                                            })
                                            .catch(D)
                                    }),
                                A = m.map((R) => R(I, c, h.getMetadata()))
                            Promise.all(A).then((R) => {
                                f(R.length === 1 && R[0].name === null ? R[0].file : R)
                            })
                        })
                    }),
            ),
            {
                options: {
                    allowImageTransform: [!0, i.BOOLEAN],
                    imageTransformImageFilter: [null, i.FUNCTION],
                    imageTransformOutputMimeType: [null, i.STRING],
                    imageTransformOutputQuality: [null, i.INT],
                    imageTransformOutputStripImageHead: [!0, i.BOOLEAN],
                    imageTransformClientTransforms: [null, i.ARRAY],
                    imageTransformOutputQualityMode: ['always', i.STRING],
                    imageTransformVariants: [null, i.OBJECT],
                    imageTransformVariantsIncludeDefault: [!0, i.BOOLEAN],
                    imageTransformVariantsDefaultName: [null, i.STRING],
                    imageTransformVariantsIncludeOriginal: [!1, i.BOOLEAN],
                    imageTransformVariantsOriginalName: ['original_', i.STRING],
                    imageTransformBeforeCreateBlob: [null, i.FUNCTION],
                    imageTransformAfterCreateBlob: [null, i.FUNCTION],
                    imageTransformCanvasMemoryLimit: [fa && Vf ? 4096 * 4096 : null, i.INT],
                    imageTransformCanvasBackgroundColor: [null, i.STRING],
                },
            }
        )
    }
fa && document.dispatchEvent(new CustomEvent('FilePond:pluginloaded', { detail: no }))
var ro = no
var pa = (e) => /^video/.test(e.type),
    Nt = (e) => /^audio/.test(e.type),
    ma = class {
        constructor(t, i) {
            ;(this.mediaEl = t),
                (this.audioElems = i),
                (this.onplayhead = !1),
                (this.duration = 0),
                (this.timelineWidth = this.audioElems.timeline.offsetWidth - this.audioElems.playhead.offsetWidth),
                (this.moveplayheadFn = this.moveplayhead.bind(this)),
                this.registerListeners()
        }
        registerListeners() {
            this.mediaEl.addEventListener('timeupdate', this.timeUpdate.bind(this), !1),
                this.mediaEl.addEventListener('canplaythrough', () => (this.duration = this.mediaEl.duration), !1),
                this.audioElems.timeline.addEventListener('click', this.timelineClicked.bind(this), !1),
                this.audioElems.button.addEventListener('click', this.play.bind(this)),
                this.audioElems.playhead.addEventListener('mousedown', this.mouseDown.bind(this), !1),
                window.addEventListener('mouseup', this.mouseUp.bind(this), !1)
        }
        play() {
            this.mediaEl.paused ? this.mediaEl.play() : this.mediaEl.pause(),
                this.audioElems.button.classList.toggle('play'),
                this.audioElems.button.classList.toggle('pause')
        }
        timeUpdate() {
            let t = (this.mediaEl.currentTime / this.duration) * 100
            ;(this.audioElems.playhead.style.marginLeft = t + '%'),
                this.mediaEl.currentTime === this.duration &&
                    (this.audioElems.button.classList.toggle('play'), this.audioElems.button.classList.toggle('pause'))
        }
        moveplayhead(t) {
            let i = t.clientX - this.getPosition(this.audioElems.timeline)
            i >= 0 && i <= this.timelineWidth && (this.audioElems.playhead.style.marginLeft = i + 'px'),
                i < 0 && (this.audioElems.playhead.style.marginLeft = '0px'),
                i > this.timelineWidth && (this.audioElems.playhead.style.marginLeft = this.timelineWidth - 4 + 'px')
        }
        timelineClicked(t) {
            this.moveplayhead(t), (this.mediaEl.currentTime = this.duration * this.clickPercent(t))
        }
        mouseDown() {
            ;(this.onplayhead = !0),
                window.addEventListener('mousemove', this.moveplayheadFn, !0),
                this.mediaEl.removeEventListener('timeupdate', this.timeUpdate.bind(this), !1)
        }
        mouseUp(t) {
            window.removeEventListener('mousemove', this.moveplayheadFn, !0),
                this.onplayhead == !0 &&
                    (this.moveplayhead(t),
                    (this.mediaEl.currentTime = this.duration * this.clickPercent(t)),
                    this.mediaEl.addEventListener('timeupdate', this.timeUpdate.bind(this), !1)),
                (this.onplayhead = !1)
        }
        clickPercent(t) {
            return (t.clientX - this.getPosition(this.audioElems.timeline)) / this.timelineWidth
        }
        getPosition(t) {
            return t.getBoundingClientRect().left
        }
    },
    Uf = (e) =>
        e.utils.createView({
            name: 'media-preview',
            tag: 'div',
            ignoreRect: !0,
            create: ({ root: t, props: i }) => {
                let { id: a } = i,
                    n = t.query('GET_ITEM', { id: i.id }),
                    r = Nt(n.file) ? 'audio' : 'video'
                if (
                    ((t.ref.media = document.createElement(r)),
                    t.ref.media.setAttribute('controls', !0),
                    t.element.appendChild(t.ref.media),
                    Nt(n.file))
                ) {
                    let o = document.createDocumentFragment()
                    ;(t.ref.audio = []),
                        (t.ref.audio.container = document.createElement('div')),
                        (t.ref.audio.button = document.createElement('span')),
                        (t.ref.audio.timeline = document.createElement('div')),
                        (t.ref.audio.playhead = document.createElement('div')),
                        (t.ref.audio.container.className = 'audioplayer'),
                        (t.ref.audio.button.className = 'playpausebtn play'),
                        (t.ref.audio.timeline.className = 'timeline'),
                        (t.ref.audio.playhead.className = 'playhead'),
                        t.ref.audio.timeline.appendChild(t.ref.audio.playhead),
                        t.ref.audio.container.appendChild(t.ref.audio.button),
                        t.ref.audio.container.appendChild(t.ref.audio.timeline),
                        o.appendChild(t.ref.audio.container),
                        t.element.appendChild(o)
                }
            },
            write: e.utils.createRoute({
                DID_MEDIA_PREVIEW_LOAD: ({ root: t, props: i }) => {
                    let { id: a } = i,
                        n = t.query('GET_ITEM', { id: i.id })
                    if (!n) return
                    let r = window.URL || window.webkitURL,
                        o = new Blob([n.file], { type: n.file.type })
                    ;(t.ref.media.type = n.file.type),
                        (t.ref.media.src = (n.file.mock && n.file.url) || r.createObjectURL(o)),
                        Nt(n.file) && new ma(t.ref.media, t.ref.audio),
                        t.ref.media.addEventListener(
                            'loadeddata',
                            () => {
                                let l = 75
                                if (pa(n.file)) {
                                    let s = t.ref.media.offsetWidth,
                                        u = t.ref.media.videoWidth / s
                                    l = t.ref.media.videoHeight / u
                                }
                                t.dispatch('DID_UPDATE_PANEL_HEIGHT', { id: i.id, height: l })
                            },
                            !1,
                        )
                },
            }),
        }),
    kf = (e) => {
        let t = ({ root: a, props: n }) => {
                let { id: r } = n
                a.query('GET_ITEM', r) && a.dispatch('DID_MEDIA_PREVIEW_LOAD', { id: r })
            },
            i = ({ root: a, props: n }) => {
                let r = Uf(e)
                a.ref.media = a.appendChildView(a.createChildView(r, { id: n.id }))
            }
        return e.utils.createView({
            name: 'media-preview-wrapper',
            create: i,
            write: e.utils.createRoute({ DID_MEDIA_PREVIEW_CONTAINER_CREATE: t }),
        })
    },
    ga = (e) => {
        let { addFilter: t, utils: i } = e,
            { Type: a, createRoute: n } = i,
            r = kf(e)
        return (
            t('CREATE_VIEW', (o) => {
                let { is: l, view: s, query: u } = o
                if (!l('file')) return
                let c = ({ root: d, props: h }) => {
                    let { id: f } = h,
                        p = u('GET_ITEM', f),
                        m = u('GET_ALLOW_VIDEO_PREVIEW'),
                        g = u('GET_ALLOW_AUDIO_PREVIEW')
                    !p ||
                        p.archived ||
                        ((!pa(p.file) || !m) && (!Nt(p.file) || !g)) ||
                        ((d.ref.mediaPreview = s.appendChildView(s.createChildView(r, { id: f }))),
                        d.dispatch('DID_MEDIA_PREVIEW_CONTAINER_CREATE', { id: f }))
                }
                s.registerWriter(
                    n({ DID_LOAD_ITEM: c }, ({ root: d, props: h }) => {
                        let { id: f } = h,
                            p = u('GET_ITEM', f),
                            m = d.query('GET_ALLOW_VIDEO_PREVIEW'),
                            g = d.query('GET_ALLOW_AUDIO_PREVIEW')
                        !p || ((!pa(p.file) || !m) && (!Nt(p.file) || !g)) || d.rect.element.hidden
                    }),
                )
            }),
            { options: { allowVideoPreview: [!0, a.BOOLEAN], allowAudioPreview: [!0, a.BOOLEAN] } }
        )
    },
    Hf = typeof window < 'u' && typeof window.document < 'u'
Hf && document.dispatchEvent(new CustomEvent('FilePond:pluginloaded', { detail: ga }))
var oo = {
    labelIdle:
        '\u0627\u0633\u062D\u0628 \u0648 \u0627\u062F\u0631\u062C \u0645\u0644\u0641\u0627\u062A\u0643 \u0623\u0648 <span class="filepond--label-action"> \u062A\u0635\u0641\u062D </span>',
    labelInvalidField:
        '\u0627\u0644\u062D\u0642\u0644 \u064A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u0645\u0644\u0641\u0627\u062A \u063A\u064A\u0631 \u0635\u0627\u0644\u062D\u0629',
    labelFileWaitingForSize: '\u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u062D\u062C\u0645',
    labelFileSizeNotAvailable: '\u0627\u0644\u062D\u062C\u0645 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D',
    labelFileLoading: '\u0628\u0627\u0644\u0625\u0646\u062A\u0638\u0627\u0631',
    labelFileLoadError:
        '\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062A\u062D\u0645\u064A\u0644',
    labelFileProcessing: '\u064A\u062A\u0645 \u0627\u0644\u0631\u0641\u0639',
    labelFileProcessingComplete: '\u062A\u0645 \u0627\u0644\u0631\u0641\u0639',
    labelFileProcessingAborted: '\u062A\u0645 \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0631\u0641\u0639',
    labelFileProcessingError:
        '\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u0631\u0641\u0639',
    labelFileProcessingRevertError:
        '\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062A\u0631\u0627\u062C\u0639',
    labelFileRemoveError:
        '\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062D\u0630\u0641',
    labelTapToCancel: '\u0627\u0646\u0642\u0631 \u0644\u0644\u0625\u0644\u063A\u0627\u0621',
    labelTapToRetry:
        '\u0627\u0646\u0642\u0631 \u0644\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629',
    labelTapToUndo: '\u0627\u0646\u0642\u0631 \u0644\u0644\u062A\u0631\u0627\u062C\u0639',
    labelButtonRemoveItem: '\u0645\u0633\u062D',
    labelButtonAbortItemLoad: '\u0625\u0644\u063A\u0627\u0621',
    labelButtonRetryItemLoad: '\u0625\u0639\u0627\u062F\u0629',
    labelButtonAbortItemProcessing: '\u0625\u0644\u063A\u0627\u0621',
    labelButtonUndoItemProcessing: '\u062A\u0631\u0627\u062C\u0639',
    labelButtonRetryItemProcessing: '\u0625\u0639\u0627\u062F\u0629',
    labelButtonProcessItem: '\u0631\u0641\u0639',
    labelMaxFileSizeExceeded: '\u0627\u0644\u0645\u0644\u0641 \u0643\u0628\u064A\u0631 \u062C\u062F\u0627',
    labelMaxFileSize:
        '\u062D\u062C\u0645 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0623\u0642\u0635\u0649: {filesize}',
    labelMaxTotalFileSizeExceeded:
        '\u062A\u0645 \u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 \u0644\u0644\u062D\u062C\u0645 \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A',
    labelMaxTotalFileSize:
        '\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 \u0644\u062D\u062C\u0645 \u0627\u0644\u0645\u0644\u0641: {filesize}',
    labelFileTypeNotAllowed:
        '\u0645\u0644\u0641 \u0645\u0646 \u0646\u0648\u0639 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D',
    fileValidateTypeLabelExpectedTypes: '\u062A\u062A\u0648\u0642\u0639 {allButLastType} \u0645\u0646 {lastType}',
    imageValidateSizeLabelFormatError:
        '\u0646\u0648\u0639 \u0627\u0644\u0635\u0648\u0631\u0629 \u063A\u064A\u0631 \u0645\u062F\u0639\u0648\u0645',
    imageValidateSizeLabelImageSizeTooSmall:
        '\u0627\u0644\u0635\u0648\u0631\u0629 \u0635\u063A\u064A\u0631 \u062C\u062F\u0627',
    imageValidateSizeLabelImageSizeTooBig:
        '\u0627\u0644\u0635\u0648\u0631\u0629 \u0643\u0628\u064A\u0631\u0629 \u062C\u062F\u0627',
    imageValidateSizeLabelExpectedMinSize:
        '\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0644\u0623\u0628\u0639\u0627\u062F \u0647\u0648: {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        '\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 \u0644\u0644\u0623\u0628\u0639\u0627\u062F \u0647\u0648: {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow:
        '\u0627\u0644\u062F\u0642\u0629 \u0636\u0639\u064A\u0641\u0629 \u062C\u062F\u0627',
    imageValidateSizeLabelImageResolutionTooHigh:
        '\u0627\u0644\u062F\u0642\u0629 \u0645\u0631\u062A\u0641\u0639\u0629 \u062C\u062F\u0627',
    imageValidateSizeLabelExpectedMinResolution: '\u0623\u0642\u0644 \u062F\u0642\u0629: {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution: '\u0623\u0642\u0635\u0649 \u062F\u0642\u0629: {maxResolution}',
}
var lo = {
    labelIdle:
        'P\u0159et\xE1hn\u011Bte soubor sem (drag&drop) nebo <span class="filepond--label-action"> Vyhledat </span>',
    labelInvalidField: 'Pole obsahuje chybn\xE9 soubory',
    labelFileWaitingForSize: 'Zji\u0161\u0165uje se velikost',
    labelFileSizeNotAvailable: 'Velikost nen\xED zn\xE1m\xE1',
    labelFileLoading: 'P\u0159en\xE1\u0161\xED se',
    labelFileLoadError: 'Chyba p\u0159i p\u0159enosu',
    labelFileProcessing: 'Prob\xEDh\xE1 upload',
    labelFileProcessingComplete: 'Upload dokon\u010Den',
    labelFileProcessingAborted: 'Upload stornov\xE1n',
    labelFileProcessingError: 'Chyba p\u0159i uploadu',
    labelFileProcessingRevertError: 'Chyba p\u0159i obnov\u011B',
    labelFileRemoveError: 'Chyba p\u0159i odstran\u011Bn\xED',
    labelTapToCancel: 'klepn\u011Bte pro storno',
    labelTapToRetry: 'klepn\u011Bte pro opakov\xE1n\xED',
    labelTapToUndo: 'klepn\u011Bte pro vr\xE1cen\xED',
    labelButtonRemoveItem: 'Odstranit',
    labelButtonAbortItemLoad: 'Storno',
    labelButtonRetryItemLoad: 'Opakovat',
    labelButtonAbortItemProcessing: 'Zp\u011Bt',
    labelButtonUndoItemProcessing: 'Vr\xE1tit',
    labelButtonRetryItemProcessing: 'Opakovat',
    labelButtonProcessItem: 'Upload',
    labelMaxFileSizeExceeded: 'Soubor je p\u0159\xEDli\u0161 velk\xFD',
    labelMaxFileSize: 'Nejv\u011Bt\u0161\xED velikost souboru je {filesize}',
    labelMaxTotalFileSizeExceeded: 'P\u0159ekro\u010Dena maxim\xE1ln\xED celkov\xE1 velikost souboru',
    labelMaxTotalFileSize: 'Maxim\xE1ln\xED celkov\xE1 velikost souboru je {filesize}',
    labelFileTypeNotAllowed: 'Soubor je nespr\xE1vn\xE9ho typu',
    fileValidateTypeLabelExpectedTypes: 'O\u010Dek\xE1v\xE1 se {allButLastType} nebo {lastType}',
    imageValidateSizeLabelFormatError: 'Obr\xE1zek tohoto typu nen\xED podporov\xE1n',
    imageValidateSizeLabelImageSizeTooSmall: 'Obr\xE1zek je p\u0159\xEDli\u0161 mal\xFD',
    imageValidateSizeLabelImageSizeTooBig: 'Obr\xE1zek je p\u0159\xEDli\u0161 velk\xFD',
    imageValidateSizeLabelExpectedMinSize: 'Minim\xE1ln\xED rozm\u011Br je {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize: 'Maxim\xE1ln\xED rozm\u011Br je {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'Rozli\u0161en\xED je p\u0159\xEDli\u0161 mal\xE9',
    imageValidateSizeLabelImageResolutionTooHigh: 'Rozli\u0161en\xED je p\u0159\xEDli\u0161 velk\xE9',
    imageValidateSizeLabelExpectedMinResolution: 'Minim\xE1ln\xED rozli\u0161en\xED je {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution: 'Maxim\xE1ln\xED rozli\u0161en\xED je {maxResolution}',
}
var so = {
    labelIdle: 'Tr\xE6k & slip filer eller <span class = "filepond - label-action"> Gennemse </span>',
    labelInvalidField: 'Felt indeholder ugyldige filer',
    labelFileWaitingForSize: 'Venter p\xE5 st\xF8rrelse',
    labelFileSizeNotAvailable: 'St\xF8rrelse ikke tilg\xE6ngelig',
    labelFileLoading: 'Loader',
    labelFileLoadError: 'Load fejlede',
    labelFileProcessing: 'Uploader',
    labelFileProcessingComplete: 'Upload f\xE6rdig',
    labelFileProcessingAborted: 'Upload annulleret',
    labelFileProcessingError: 'Upload fejlede',
    labelFileProcessingRevertError: 'Fortryd fejlede',
    labelFileRemoveError: 'Fjern fejlede',
    labelTapToCancel: 'tryk for at annullere',
    labelTapToRetry: 'tryk for at pr\xF8ve igen',
    labelTapToUndo: 'tryk for at fortryde',
    labelButtonRemoveItem: 'Fjern',
    labelButtonAbortItemLoad: 'Annuller',
    labelButtonRetryItemLoad: 'Fors\xF8g igen',
    labelButtonAbortItemProcessing: 'Annuller',
    labelButtonUndoItemProcessing: 'Fortryd',
    labelButtonRetryItemProcessing: 'Pr\xF8v igen',
    labelButtonProcessItem: 'Upload',
    labelMaxFileSizeExceeded: 'Filen er for stor',
    labelMaxFileSize: 'Maksimal filst\xF8rrelse er {filesize}',
    labelMaxTotalFileSizeExceeded: 'Maksimal totalst\xF8rrelse overskredet',
    labelMaxTotalFileSize: 'Maksimal total filst\xF8rrelse er {filesize}',
    labelFileTypeNotAllowed: 'Ugyldig filtype',
    fileValidateTypeLabelExpectedTypes: 'Forventer {allButLastType} eller {lastType}',
    imageValidateSizeLabelFormatError: 'Ugyldigt format',
    imageValidateSizeLabelImageSizeTooSmall: 'Billedet er for lille',
    imageValidateSizeLabelImageSizeTooBig: 'Billedet er for stort',
    imageValidateSizeLabelExpectedMinSize: 'Minimum st\xF8rrelse er {minBredde} \xD7 {minH\xF8jde}',
    imageValidateSizeLabelExpectedMaxSize: 'Maksimal st\xF8rrelse er {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'For lav opl\xF8sning',
    imageValidateSizeLabelImageResolutionTooHigh: 'For h\xF8j opl\xF8sning',
    imageValidateSizeLabelExpectedMinResolution: 'Minimum opl\xF8sning er {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution: 'Maksimal opl\xF8sning er {maxResolution}',
}
var co = {
    labelIdle: 'Dateien ablegen oder <span class="filepond--label-action"> ausw\xE4hlen </span>',
    labelInvalidField: 'Feld beinhaltet ung\xFCltige Dateien',
    labelFileWaitingForSize: 'Dateigr\xF6\xDFe berechnen',
    labelFileSizeNotAvailable: 'Dateigr\xF6\xDFe nicht verf\xFCgbar',
    labelFileLoading: 'Laden',
    labelFileLoadError: 'Fehler beim Laden',
    labelFileProcessing: 'Upload l\xE4uft',
    labelFileProcessingComplete: 'Upload abgeschlossen',
    labelFileProcessingAborted: 'Upload abgebrochen',
    labelFileProcessingError: 'Fehler beim Upload',
    labelFileProcessingRevertError: 'Fehler beim Wiederherstellen',
    labelFileRemoveError: 'Fehler beim L\xF6schen',
    labelTapToCancel: 'abbrechen',
    labelTapToRetry: 'erneut versuchen',
    labelTapToUndo: 'r\xFCckg\xE4ngig',
    labelButtonRemoveItem: 'Entfernen',
    labelButtonAbortItemLoad: 'Verwerfen',
    labelButtonRetryItemLoad: 'Erneut versuchen',
    labelButtonAbortItemProcessing: 'Abbrechen',
    labelButtonUndoItemProcessing: 'R\xFCckg\xE4ngig',
    labelButtonRetryItemProcessing: 'Erneut versuchen',
    labelButtonProcessItem: 'Upload',
    labelMaxFileSizeExceeded: 'Datei ist zu gro\xDF',
    labelMaxFileSize: 'Maximale Dateigr\xF6\xDFe: {filesize}',
    labelMaxTotalFileSizeExceeded: 'Maximale gesamte Dateigr\xF6\xDFe \xFCberschritten',
    labelMaxTotalFileSize: 'Maximale gesamte Dateigr\xF6\xDFe: {filesize}',
    labelFileTypeNotAllowed: 'Dateityp ung\xFCltig',
    fileValidateTypeLabelExpectedTypes: 'Erwartet {allButLastType} oder {lastType}',
    imageValidateSizeLabelFormatError: 'Bildtyp nicht unterst\xFCtzt',
    imageValidateSizeLabelImageSizeTooSmall: 'Bild ist zu klein',
    imageValidateSizeLabelImageSizeTooBig: 'Bild ist zu gro\xDF',
    imageValidateSizeLabelExpectedMinSize: 'Mindestgr\xF6\xDFe: {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize: 'Maximale Gr\xF6\xDFe: {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'Aufl\xF6sung ist zu niedrig',
    imageValidateSizeLabelImageResolutionTooHigh: 'Aufl\xF6sung ist zu hoch',
    imageValidateSizeLabelExpectedMinResolution: 'Mindestaufl\xF6sung: {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution: 'Maximale Aufl\xF6sung: {maxResolution}',
}
var uo = {
    labelIdle: 'Drag & Drop your files or <span class="filepond--label-action"> Browse </span>',
    labelInvalidField: 'Field contains invalid files',
    labelFileWaitingForSize: 'Waiting for size',
    labelFileSizeNotAvailable: 'Size not available',
    labelFileLoading: 'Loading',
    labelFileLoadError: 'Error during load',
    labelFileProcessing: 'Uploading',
    labelFileProcessingComplete: 'Upload complete',
    labelFileProcessingAborted: 'Upload cancelled',
    labelFileProcessingError: 'Error during upload',
    labelFileProcessingRevertError: 'Error during revert',
    labelFileRemoveError: 'Error during remove',
    labelTapToCancel: 'tap to cancel',
    labelTapToRetry: 'tap to retry',
    labelTapToUndo: 'tap to undo',
    labelButtonRemoveItem: 'Remove',
    labelButtonAbortItemLoad: 'Abort',
    labelButtonRetryItemLoad: 'Retry',
    labelButtonAbortItemProcessing: 'Cancel',
    labelButtonUndoItemProcessing: 'Undo',
    labelButtonRetryItemProcessing: 'Retry',
    labelButtonProcessItem: 'Upload',
    labelMaxFileSizeExceeded: 'File is too large',
    labelMaxFileSize: 'Maximum file size is {filesize}',
    labelMaxTotalFileSizeExceeded: 'Maximum total size exceeded',
    labelMaxTotalFileSize: 'Maximum total file size is {filesize}',
    labelFileTypeNotAllowed: 'File of invalid type',
    fileValidateTypeLabelExpectedTypes: 'Expects {allButLastType} or {lastType}',
    imageValidateSizeLabelFormatError: 'Image type not supported',
    imageValidateSizeLabelImageSizeTooSmall: 'Image is too small',
    imageValidateSizeLabelImageSizeTooBig: 'Image is too big',
    imageValidateSizeLabelExpectedMinSize: 'Minimum size is {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize: 'Maximum size is {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'Resolution is too low',
    imageValidateSizeLabelImageResolutionTooHigh: 'Resolution is too high',
    imageValidateSizeLabelExpectedMinResolution: 'Minimum resolution is {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution: 'Maximum resolution is {maxResolution}',
}
var ho = {
    labelIdle: 'Arrastra y suelta tus archivos o <span class = "filepond--label-action"> Examinar <span>',
    labelInvalidField: 'El campo contiene archivos inv\xE1lidos',
    labelFileWaitingForSize: 'Esperando tama\xF1o',
    labelFileSizeNotAvailable: 'Tama\xF1o no disponible',
    labelFileLoading: 'Cargando',
    labelFileLoadError: 'Error durante la carga',
    labelFileProcessing: 'Cargando',
    labelFileProcessingComplete: 'Carga completa',
    labelFileProcessingAborted: 'Carga cancelada',
    labelFileProcessingError: 'Error durante la carga',
    labelFileProcessingRevertError: 'Error durante la reversi\xF3n',
    labelFileRemoveError: 'Error durante la eliminaci\xF3n',
    labelTapToCancel: 'toca para cancelar',
    labelTapToRetry: 'tocar para volver a intentar',
    labelTapToUndo: 'tocar para deshacer',
    labelButtonRemoveItem: 'Eliminar',
    labelButtonAbortItemLoad: 'Abortar',
    labelButtonRetryItemLoad: 'Reintentar',
    labelButtonAbortItemProcessing: 'Cancelar',
    labelButtonUndoItemProcessing: 'Deshacer',
    labelButtonRetryItemProcessing: 'Reintentar',
    labelButtonProcessItem: 'Cargar',
    labelMaxFileSizeExceeded: 'El archivo es demasiado grande',
    labelMaxFileSize: 'El tama\xF1o m\xE1ximo del archivo es {filesize}',
    labelMaxTotalFileSizeExceeded: 'Tama\xF1o total m\xE1ximo excedido',
    labelMaxTotalFileSize: 'El tama\xF1o total m\xE1ximo del archivo es {filesize}',
    labelFileTypeNotAllowed: 'Archivo de tipo no v\xE1lido',
    fileValidateTypeLabelExpectedTypes: 'Espera {allButLastType} o {lastType}',
    imageValidateSizeLabelFormatError: 'Tipo de imagen no compatible',
    imageValidateSizeLabelImageSizeTooSmall: 'La imagen es demasiado peque\xF1a',
    imageValidateSizeLabelImageSizeTooBig: 'La imagen es demasiado grande',
    imageValidateSizeLabelExpectedMinSize: 'El tama\xF1o m\xEDnimo es {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize: 'El tama\xF1o m\xE1ximo es {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'La resoluci\xF3n es demasiado baja',
    imageValidateSizeLabelImageResolutionTooHigh: 'La resoluci\xF3n es demasiado alta',
    imageValidateSizeLabelExpectedMinResolution: 'La resoluci\xF3n m\xEDnima es {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution: 'La resoluci\xF3n m\xE1xima es {maxResolution}',
}
var fo = {
    labelIdle:
        '\u0641\u0627\u06CC\u0644 \u0631\u0627 \u0627\u06CC\u0646\u062C\u0627 \u0628\u06A9\u0634\u06CC\u062F \u0648 \u0631\u0647\u0627 \u06A9\u0646\u06CC\u062F\u060C \u06CC\u0627 <span class="filepond--label-action"> \u062C\u0633\u062A\u062C\u0648 \u06A9\u0646\u06CC\u062F </span>',
    labelInvalidField:
        '\u0641\u06CC\u0644\u062F \u062F\u0627\u0631\u0627\u06CC \u0641\u0627\u06CC\u0644 \u0647\u0627\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A',
    labelFileWaitingForSize: 'Waiting for size',
    labelFileSizeNotAvailable:
        '\u062D\u062C\u0645 \u0641\u0627\u06CC\u0644 \u0645\u062C\u0627\u0632 \u0646\u06CC\u0633\u062A',
    labelFileLoading: '\u062F\u0631\u062D\u0627\u0644 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC',
    labelFileLoadError: '\u062E\u0637\u0627 \u062F\u0631 \u0632\u0645\u0627\u0646 \u0627\u062C\u0631\u0627',
    labelFileProcessing: '\u062F\u0631\u062D\u0627\u0644 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC',
    labelFileProcessingComplete:
        '\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u06A9\u0627\u0645\u0644 \u0634\u062F',
    labelFileProcessingAborted: '\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0644\u063A\u0648 \u0634\u062F',
    labelFileProcessingError:
        '\u062E\u0637\u0627 \u062F\u0631 \u0632\u0645\u0627\u0646 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC',
    labelFileProcessingRevertError: '\u062E\u0637\u0627 \u062F\u0631 \u0632\u0645\u0627\u0646 \u062D\u0630\u0641',
    labelFileRemoveError: '\u062E\u0637\u0627 \u062F\u0631 \u0632\u0645\u0627\u0646 \u062D\u0630\u0641',
    labelTapToCancel:
        '\u0628\u0631\u0627\u06CC \u0644\u063A\u0648 \u0636\u0631\u0628\u0647 \u0628\u0632\u0646\u06CC\u062F',
    labelTapToRetry:
        '\u0628\u0631\u0627\u06CC \u062A\u06A9\u0631\u0627\u0631 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F',
    labelTapToUndo:
        '\u0628\u0631\u0627\u06CC \u0628\u0631\u06AF\u0634\u062A \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F',
    labelButtonRemoveItem: '\u062D\u0630\u0641',
    labelButtonAbortItemLoad: '\u0644\u063A\u0648',
    labelButtonRetryItemLoad: '\u062A\u06A9\u0631\u0627\u0631',
    labelButtonAbortItemProcessing: '\u0644\u063A\u0648',
    labelButtonUndoItemProcessing: '\u0628\u0631\u06AF\u0634\u062A',
    labelButtonRetryItemProcessing: '\u062A\u06A9\u0631\u0627\u0631',
    labelButtonProcessItem: '\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC',
    labelMaxFileSizeExceeded:
        '\u0641\u0627\u06CC\u0644 \u0628\u0633\u06CC\u0627\u0631 \u062D\u062C\u06CC\u0645 \u0627\u0633\u062A',
    labelMaxFileSize:
        '\u062D\u062F\u0627\u06A9\u062B\u0631 \u0645\u062C\u0627\u0632 \u0641\u0627\u06CC\u0644 {filesize} \u0627\u0633\u062A',
    labelMaxTotalFileSizeExceeded:
        '\u0627\u0632 \u062D\u062F\u0627\u06A9\u062B\u0631 \u062D\u062C\u0645 \u0641\u0627\u06CC\u0644 \u0628\u06CC\u0634\u062A\u0631 \u0634\u062F',
    labelMaxTotalFileSize:
        '\u062D\u062F\u0627\u06A9\u062B\u0631 \u062D\u062C\u0645 \u0641\u0627\u06CC\u0644 {filesize} \u0627\u0633\u062A',
    labelFileTypeNotAllowed:
        '\u0646\u0648\u0639 \u0641\u0627\u06CC\u0644 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A',
    fileValidateTypeLabelExpectedTypes:
        '\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631 {allButLastType} \u06CC\u0627 {lastType}',
    imageValidateSizeLabelFormatError:
        '\u0641\u0631\u0645\u062A \u062A\u0635\u0648\u06CC\u0631 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0646\u0645\u06CC \u0634\u0648\u062F',
    imageValidateSizeLabelImageSizeTooSmall:
        '\u062A\u0635\u0648\u06CC\u0631 \u0628\u0633\u06CC\u0627\u0631 \u06A9\u0648\u0686\u06A9 \u0627\u0633\u062A',
    imageValidateSizeLabelImageSizeTooBig:
        '\u062A\u0635\u0648\u06CC\u0631 \u0628\u0633\u06CC\u0627\u0631 \u0628\u0632\u0631\u06AF \u0627\u0633\u062A',
    imageValidateSizeLabelExpectedMinSize:
        '\u062D\u062F\u0627\u0642\u0644 \u0627\u0646\u062F\u0627\u0632\u0647 {minWidth} \xD7 {minHeight} \u0627\u0633\u062A',
    imageValidateSizeLabelExpectedMaxSize:
        '\u062D\u062F\u0627\u06A9\u062B\u0631 \u0627\u0646\u062F\u0627\u0632\u0647 {maxWidth} \xD7 {maxHeight} \u0627\u0633\u062A',
    imageValidateSizeLabelImageResolutionTooLow:
        '\u0648\u0636\u0648\u062D \u062A\u0635\u0648\u06CC\u0631 \u0628\u0633\u06CC\u0627\u0631 \u06A9\u0645 \u0627\u0633\u062A',
    imageValidateSizeLabelImageResolutionTooHigh:
        '\u0648\u0636\u0648\u0639 \u062A\u0635\u0648\u06CC\u0631 \u0628\u0633\u06CC\u0627\u0631 \u0632\u06CC\u0627\u062F \u0627\u0633\u062A',
    imageValidateSizeLabelExpectedMinResolution:
        '\u062D\u062F\u0627\u0642\u0644 \u0648\u0636\u0648\u062D \u062A\u0635\u0648\u06CC\u0631 {minResolution} \u0627\u0633\u062A',
    imageValidateSizeLabelExpectedMaxResolution:
        '\u062D\u062F\u0627\u06A9\u062B\u0631 \u0648\u0636\u0648\u062D \u062A\u0635\u0648\u06CC\u0631 {maxResolution} \u0627\u0633\u062A',
}
var po = {
    labelIdle: 'Ved\xE4 ja pudota tiedostoja tai <span class="filepond--label-action"> Selaa </span>',
    labelInvalidField: 'Kent\xE4ss\xE4 on virheellisi\xE4 tiedostoja',
    labelFileWaitingForSize: 'Odotetaan kokoa',
    labelFileSizeNotAvailable: 'Kokoa ei saatavilla',
    labelFileLoading: 'Ladataan',
    labelFileLoadError: 'Virhe latauksessa',
    labelFileProcessing: 'L\xE4hetet\xE4\xE4n',
    labelFileProcessingComplete: 'L\xE4hetys valmis',
    labelFileProcessingAborted: 'L\xE4hetys peruttu',
    labelFileProcessingError: 'Virhe l\xE4hetyksess\xE4',
    labelFileProcessingRevertError: 'Virhe palautuksessa',
    labelFileRemoveError: 'Virhe poistamisessa',
    labelTapToCancel: 'peruuta napauttamalla',
    labelTapToRetry: 'yrit\xE4 uudelleen napauttamalla',
    labelTapToUndo: 'kumoa napauttamalla',
    labelButtonRemoveItem: 'Poista',
    labelButtonAbortItemLoad: 'Keskeyt\xE4',
    labelButtonRetryItemLoad: 'Yrit\xE4 uudelleen',
    labelButtonAbortItemProcessing: 'Peruuta',
    labelButtonUndoItemProcessing: 'Kumoa',
    labelButtonRetryItemProcessing: 'Yrit\xE4 uudelleen',
    labelButtonProcessItem: 'L\xE4het\xE4',
    labelMaxFileSizeExceeded: 'Tiedoston koko on liian suuri',
    labelMaxFileSize: 'Tiedoston maksimikoko on {filesize}',
    labelMaxTotalFileSizeExceeded: 'Tiedostojen yhdistetty maksimikoko ylitetty',
    labelMaxTotalFileSize: 'Tiedostojen yhdistetty maksimikoko on {filesize}',
    labelFileTypeNotAllowed: 'Tiedostotyyppi\xE4 ei sallita',
    fileValidateTypeLabelExpectedTypes: 'Sallitaan {allButLastType} tai {lastType}',
    imageValidateSizeLabelFormatError: 'Kuvatyyppi\xE4 ei tueta',
    imageValidateSizeLabelImageSizeTooSmall: 'Kuva on liian pieni',
    imageValidateSizeLabelImageSizeTooBig: 'Kuva on liian suuri',
    imageValidateSizeLabelExpectedMinSize: 'Minimikoko on {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize: 'Maksimikoko on {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'Resoluutio on liian pieni',
    imageValidateSizeLabelImageResolutionTooHigh: 'Resoluutio on liian suuri',
    imageValidateSizeLabelExpectedMinResolution: 'Minimiresoluutio on {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution: 'Maksimiresoluutio on {maxResolution}',
}
var mo = {
    labelIdle: 'Faites glisser vos fichiers ou <span class = "filepond--label-action"> Parcourir <span>',
    labelInvalidField: 'Le champ contient des fichiers invalides',
    labelFileWaitingForSize: 'En attente de taille',
    labelFileSizeNotAvailable: 'Taille non disponible',
    labelFileLoading: 'Chargement',
    labelFileLoadError: 'Erreur durant le chargement',
    labelFileProcessing: 'Traitement',
    labelFileProcessingComplete: 'Traitement effectu\xE9',
    labelFileProcessingAborted: 'Traitement interrompu',
    labelFileProcessingError: 'Erreur durant le traitement',
    labelFileProcessingRevertError: 'Erreur durant la restauration',
    labelFileRemoveError: 'Erreur durant la suppression',
    labelTapToCancel: 'appuyer pour annuler',
    labelTapToRetry: 'appuyer pour r\xE9essayer',
    labelTapToUndo: 'appuyer pour revenir en arri\xE8re',
    labelButtonRemoveItem: 'Retirer',
    labelButtonAbortItemLoad: 'Annuler',
    labelButtonRetryItemLoad: 'Recommencer',
    labelButtonAbortItemProcessing: 'Annuler',
    labelButtonUndoItemProcessing: 'Revenir en arri\xE8re',
    labelButtonRetryItemProcessing: 'Recommencer',
    labelButtonProcessItem: 'Transf\xE9rer',
    labelMaxFileSizeExceeded: 'Le fichier est trop volumineux',
    labelMaxFileSize: 'La taille maximale de fichier est {filesize}',
    labelMaxTotalFileSizeExceeded: 'Taille totale maximale d\xE9pass\xE9e',
    labelMaxTotalFileSize: 'La taille totale maximale des fichiers est {filesize}',
    labelFileTypeNotAllowed: 'Fichier non valide',
    fileValidateTypeLabelExpectedTypes: 'Attendu {allButLastType} ou {lastType}',
    imageValidateSizeLabelFormatError: "Type d'image non pris en charge",
    imageValidateSizeLabelImageSizeTooSmall: "L'image est trop petite",
    imageValidateSizeLabelImageSizeTooBig: "L'image est trop grande",
    imageValidateSizeLabelExpectedMinSize: 'La taille minimale est {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize: 'La taille maximale est {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'La r\xE9solution est trop faible',
    imageValidateSizeLabelImageResolutionTooHigh: 'La r\xE9solution est trop \xE9lev\xE9e',
    imageValidateSizeLabelExpectedMinResolution: 'La r\xE9solution minimale est {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution: 'La r\xE9solution maximale est {maxResolution}',
}
var go = {
    labelIdle:
        'Mozgasd ide a f\xE1jlt a felt\xF6lt\xE9shez, vagy <span class="filepond--label-action"> tall\xF3z\xE1s </span>',
    labelInvalidField: 'A mez\u0151 \xE9rv\xE9nytelen f\xE1jlokat tartalmaz',
    labelFileWaitingForSize: 'F\xE1ljm\xE9ret kisz\xE1mol\xE1sa',
    labelFileSizeNotAvailable: 'A f\xE1jlm\xE9ret nem el\xE9rhet\u0151',
    labelFileLoading: 'T\xF6lt\xE9s',
    labelFileLoadError: 'Hiba a bet\xF6lt\xE9s sor\xE1n',
    labelFileProcessing: 'Felt\xF6lt\xE9s',
    labelFileProcessingComplete: 'Sikeres felt\xF6lt\xE9s',
    labelFileProcessingAborted: 'A felt\xF6lt\xE9s megszak\xEDtva',
    labelFileProcessingError: 'Hiba t\xF6rt\xE9nt a felt\xF6lt\xE9s sor\xE1n',
    labelFileProcessingRevertError: 'Hiba a vissza\xE1ll\xEDt\xE1s sor\xE1n',
    labelFileRemoveError: 'Hiba t\xF6rt\xE9nt az elt\xE1vol\xEDt\xE1s sor\xE1n',
    labelTapToCancel: 'koppints a t\xF6rl\xE9shez',
    labelTapToRetry: 'koppints az \xFAjrakezd\xE9shez',
    labelTapToUndo: 'koppints a visszavon\xE1shoz',
    labelButtonRemoveItem: 'Elt\xE1vol\xEDt\xE1s',
    labelButtonAbortItemLoad: 'Megszak\xEDt\xE1s',
    labelButtonRetryItemLoad: '\xDAjrapr\xF3b\xE1lkoz\xE1s',
    labelButtonAbortItemProcessing: 'Megszak\xEDt\xE1s',
    labelButtonUndoItemProcessing: 'Visszavon\xE1s',
    labelButtonRetryItemProcessing: '\xDAjrapr\xF3b\xE1lkoz\xE1s',
    labelButtonProcessItem: 'Felt\xF6lt\xE9s',
    labelMaxFileSizeExceeded: 'A f\xE1jl t\xFAll\xE9pte a maxim\xE1lis m\xE9retet',
    labelMaxFileSize: 'Maxim\xE1lis f\xE1jlm\xE9ret: {filesize}',
    labelMaxTotalFileSizeExceeded: 'T\xFAll\xE9pte a maxim\xE1lis teljes m\xE9retet',
    labelMaxTotalFileSize: 'A maxim\xE1is teljes f\xE1jlm\xE9ret: {filesize}',
    labelFileTypeNotAllowed: '\xC9rv\xE9nytelen t\xEDpus\xFA f\xE1jl',
    fileValidateTypeLabelExpectedTypes: 'Enged\xE9lyezett t\xEDpusok {allButLastType} vagy {lastType}',
    imageValidateSizeLabelFormatError: 'A k\xE9pt\xEDpus nem t\xE1mogatott',
    imageValidateSizeLabelImageSizeTooSmall: 'A k\xE9p t\xFAl kicsi',
    imageValidateSizeLabelImageSizeTooBig: 'A k\xE9p t\xFAl nagy',
    imageValidateSizeLabelExpectedMinSize: 'Minimum m\xE9ret: {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize: 'Maximum m\xE9ret: {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'A felbont\xE1s t\xFAl alacsony',
    imageValidateSizeLabelImageResolutionTooHigh: 'A felbont\xE1s t\xFAl magas',
    imageValidateSizeLabelExpectedMinResolution: 'Minim\xE1is felbont\xE1s: {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution: 'Maxim\xE1lis felbont\xE1s: {maxResolution}',
}
var Eo = {
    labelIdle: 'Seret dan Jatuhkan file Anda atau <span class="filepond--label-action">Jelajahi</span>',
    labelInvalidField: 'Field berisi file tidak valid',
    labelFileWaitingForSize: 'Menunggu ukuran',
    labelFileSizeNotAvailable: 'Ukuran tidak tersedia',
    labelFileLoading: 'Memuat',
    labelFileLoadError: 'Kesalahan saat memuat',
    labelFileProcessing: 'Mengunggah',
    labelFileProcessingComplete: 'Unggahan selesai',
    labelFileProcessingAborted: 'Unggahan dibatalkan',
    labelFileProcessingError: 'Kesalahan saat mengunggah',
    labelFileProcessingRevertError: 'Kesalahan saat pengembalian',
    labelFileRemoveError: 'Kesalahan saat menghapus',
    labelTapToCancel: 'ketuk untuk membatalkan',
    labelTapToRetry: 'ketuk untuk mencoba lagi',
    labelTapToUndo: 'ketuk untuk mengurungkan',
    labelButtonRemoveItem: 'Hapus',
    labelButtonAbortItemLoad: 'Batal',
    labelButtonRetryItemLoad: 'Coba Kembali',
    labelButtonAbortItemProcessing: 'Batal',
    labelButtonUndoItemProcessing: 'Batal',
    labelButtonRetryItemProcessing: 'Coba Kembali',
    labelButtonProcessItem: 'Unggah',
    labelMaxFileSizeExceeded: 'File terlalu besar',
    labelMaxFileSize: 'Ukuran file maksimum adalah {filesize}',
    labelMaxTotalFileSizeExceeded: 'Jumlah file maksimum terlampaui',
    labelMaxTotalFileSize: 'Jumlah file maksimum adalah {filesize}',
    labelFileTypeNotAllowed: 'Jenis file tidak valid',
    fileValidateTypeLabelExpectedTypes: 'Mengharapkan {allButLastType} atau {lastType}',
    imageValidateSizeLabelFormatError: 'Jenis gambar tidak didukung',
    imageValidateSizeLabelImageSizeTooSmall: 'Gambar terlalu kecil',
    imageValidateSizeLabelImageSizeTooBig: 'Gambar terlalu besar',
    imageValidateSizeLabelExpectedMinSize: 'Ukuran minimum adalah {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize: 'Ukuran maksimum adalah {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'Resolusi terlalu rendah',
    imageValidateSizeLabelImageResolutionTooHigh: 'Resolusi terlalu tinggi',
    imageValidateSizeLabelExpectedMinResolution: 'Resolusi minimum adalah {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution: 'Resolusi maksimum adalah {maxResolution}',
}
var To = {
    labelIdle: 'Trascina e rilascia i tuoi file oppure <span class = "filepond--label-action"> Carica <span>',
    labelInvalidField: 'Il campo contiene dei file non validi',
    labelFileWaitingForSize: 'Aspettando le dimensioni',
    labelFileSizeNotAvailable: 'Dimensioni non disponibili',
    labelFileLoading: 'Caricamento',
    labelFileLoadError: 'Errore durante il caricamento',
    labelFileProcessing: 'Caricamento',
    labelFileProcessingComplete: 'Caricamento completato',
    labelFileProcessingAborted: 'Caricamento cancellato',
    labelFileProcessingError: 'Errore durante il caricamento',
    labelFileProcessingRevertError: 'Errore durante il ripristino',
    labelFileRemoveError: "Errore durante l'eliminazione",
    labelTapToCancel: 'tocca per cancellare',
    labelTapToRetry: 'tocca per riprovare',
    labelTapToUndo: 'tocca per ripristinare',
    labelButtonRemoveItem: 'Elimina',
    labelButtonAbortItemLoad: 'Cancella',
    labelButtonRetryItemLoad: 'Ritenta',
    labelButtonAbortItemProcessing: 'Camcella',
    labelButtonUndoItemProcessing: 'Indietro',
    labelButtonRetryItemProcessing: 'Ritenta',
    labelButtonProcessItem: 'Carica',
    labelMaxFileSizeExceeded: 'Il peso del file \xE8 eccessivo',
    labelMaxFileSize: 'Il peso massimo del file \xE8 {filesize}',
    labelMaxTotalFileSizeExceeded: 'Dimensione totale massima superata',
    labelMaxTotalFileSize: 'La dimensione massima totale del file \xE8 {filesize}',
    labelFileTypeNotAllowed: 'File non supportato',
    fileValidateTypeLabelExpectedTypes: 'Aspetta {allButLastType} o {lastType}',
    imageValidateSizeLabelFormatError: 'Tipo di immagine non compatibile',
    imageValidateSizeLabelImageSizeTooSmall: "L'immagine \xE8 troppo piccola",
    imageValidateSizeLabelImageSizeTooBig: "L'immagine \xE8 troppo grande",
    imageValidateSizeLabelExpectedMinSize: 'La dimensione minima \xE8 {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize: 'La dimensione massima \xE8 {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'La risoluzione \xE8 troppo bassa',
    imageValidateSizeLabelImageResolutionTooHigh: 'La risoluzione \xE8 troppo alta',
    imageValidateSizeLabelExpectedMinResolution: 'La risoluzione minima \xE8 {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution: 'La risoluzione massima \xE8 {maxResolution}',
}
var Io = {
    labelIdle: 'Drag & Drop je bestanden of <span class="filepond--label-action"> Bladeren </span>',
    labelInvalidField: 'Veld bevat ongeldige bestanden',
    labelFileWaitingForSize: 'Wachten op grootte',
    labelFileSizeNotAvailable: 'Grootte niet beschikbaar',
    labelFileLoading: 'Laden',
    labelFileLoadError: 'Fout tijdens laden',
    labelFileProcessing: 'Uploaden',
    labelFileProcessingComplete: 'Upload afgerond',
    labelFileProcessingAborted: 'Upload geannuleerd',
    labelFileProcessingError: 'Fout tijdens upload',
    labelFileProcessingRevertError: 'Fout bij herstellen',
    labelFileRemoveError: 'Fout bij verwijderen',
    labelTapToCancel: 'tik om te annuleren',
    labelTapToRetry: 'tik om opnieuw te proberen',
    labelTapToUndo: 'tik om ongedaan te maken',
    labelButtonRemoveItem: 'Verwijderen',
    labelButtonAbortItemLoad: 'Afbreken',
    labelButtonRetryItemLoad: 'Opnieuw proberen',
    labelButtonAbortItemProcessing: 'Annuleren',
    labelButtonUndoItemProcessing: 'Ongedaan maken',
    labelButtonRetryItemProcessing: 'Opnieuw proberen',
    labelButtonProcessItem: 'Upload',
    labelMaxFileSizeExceeded: 'Bestand is te groot',
    labelMaxFileSize: 'Maximale bestandsgrootte is {filesize}',
    labelMaxTotalFileSizeExceeded: 'Maximale totale grootte overschreden',
    labelMaxTotalFileSize: 'Maximale totale bestandsgrootte is {filesize}',
    labelFileTypeNotAllowed: 'Ongeldig bestandstype',
    fileValidateTypeLabelExpectedTypes: 'Verwacht {allButLastType} of {lastType}',
    imageValidateSizeLabelFormatError: 'Afbeeldingstype niet ondersteund',
    imageValidateSizeLabelImageSizeTooSmall: 'Afbeelding is te klein',
    imageValidateSizeLabelImageSizeTooBig: 'Afbeelding is te groot',
    imageValidateSizeLabelExpectedMinSize: 'Minimale afmeting is {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize: 'Maximale afmeting is {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'Resolutie is te laag',
    imageValidateSizeLabelImageResolutionTooHigh: 'Resolution is too high',
    imageValidateSizeLabelExpectedMinResolution: 'Minimale resolutie is {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution: 'Maximale resolutie is {maxResolution}',
}
var bo = {
    labelIdle: 'Przeci\u0105gnij i upu\u015B\u0107 lub <span class="filepond--label-action">wybierz</span> pliki',
    labelInvalidField: 'Nieprawid\u0142owe pliki',
    labelFileWaitingForSize: 'Pobieranie rozmiaru',
    labelFileSizeNotAvailable: 'Nieznany rozmiar',
    labelFileLoading: 'Wczytywanie',
    labelFileLoadError: 'B\u0142\u0105d wczytywania',
    labelFileProcessing: 'Przesy\u0142anie',
    labelFileProcessingComplete: 'Przes\u0142ano',
    labelFileProcessingAborted: 'Przerwano',
    labelFileProcessingError: 'Przesy\u0142anie nie powiod\u0142o si\u0119',
    labelFileProcessingRevertError: 'Co\u015B posz\u0142o nie tak',
    labelFileRemoveError: 'Nieudane usuni\u0119cie',
    labelTapToCancel: 'Anuluj',
    labelTapToRetry: 'Pon\xF3w',
    labelTapToUndo: 'Cofnij',
    labelButtonRemoveItem: 'Usu\u0144',
    labelButtonAbortItemLoad: 'Przerwij',
    labelButtonRetryItemLoad: 'Pon\xF3w',
    labelButtonAbortItemProcessing: 'Anuluj',
    labelButtonUndoItemProcessing: 'Cofnij',
    labelButtonRetryItemProcessing: 'Pon\xF3w',
    labelButtonProcessItem: 'Prze\u015Blij',
    labelMaxFileSizeExceeded: 'Plik jest zbyt du\u017Cy',
    labelMaxFileSize: 'Dopuszczalna wielko\u015B\u0107 pliku to {filesize}',
    labelMaxTotalFileSizeExceeded: 'Przekroczono \u0142\u0105czny rozmiar plik\xF3w',
    labelMaxTotalFileSize: '\u0141\u0105czny rozmiar plik\xF3w nie mo\u017Ce przekroczy\u0107 {filesize}',
    labelFileTypeNotAllowed: 'Niedozwolony rodzaj pliku',
    fileValidateTypeLabelExpectedTypes: 'Oczekiwano {allButLastType} lub {lastType}',
    imageValidateSizeLabelFormatError: 'Nieobs\u0142ugiwany format obrazu',
    imageValidateSizeLabelImageSizeTooSmall: 'Obraz jest zbyt ma\u0142y',
    imageValidateSizeLabelImageSizeTooBig: 'Obraz jest zbyt du\u017Cy',
    imageValidateSizeLabelExpectedMinSize: 'Minimalne wymiary obrazu to {minWidth}\xD7{minHeight}',
    imageValidateSizeLabelExpectedMaxSize: 'Maksymalna wymiary obrazu to {maxWidth}\xD7{maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'Rozdzielczo\u015B\u0107 jest zbyt niska',
    imageValidateSizeLabelImageResolutionTooHigh: 'Rozdzielczo\u015B\u0107 jest zbyt wysoka',
    imageValidateSizeLabelExpectedMinResolution: 'Minimalna rozdzielczo\u015B\u0107 to {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution: 'Maksymalna rozdzielczo\u015B\u0107 to {maxResolution}',
}
var fi = {
    labelIdle: 'Arraste e solte os arquivos ou <span class="filepond--label-action"> Clique aqui </span>',
    labelInvalidField: 'Arquivos inv\xE1lidos',
    labelFileWaitingForSize: 'Calculando o tamanho do arquivo',
    labelFileSizeNotAvailable: 'Tamanho do arquivo indispon\xEDvel',
    labelFileLoading: 'Carregando',
    labelFileLoadError: 'Erro durante o carregamento',
    labelFileProcessing: 'Enviando',
    labelFileProcessingComplete: 'Envio finalizado',
    labelFileProcessingAborted: 'Envio cancelado',
    labelFileProcessingError: 'Erro durante o envio',
    labelFileProcessingRevertError: 'Erro ao reverter o envio',
    labelFileRemoveError: 'Erro ao remover o arquivo',
    labelTapToCancel: 'clique para cancelar',
    labelTapToRetry: 'clique para reenviar',
    labelTapToUndo: 'clique para desfazer',
    labelButtonRemoveItem: 'Remover',
    labelButtonAbortItemLoad: 'Abortar',
    labelButtonRetryItemLoad: 'Reenviar',
    labelButtonAbortItemProcessing: 'Cancelar',
    labelButtonUndoItemProcessing: 'Desfazer',
    labelButtonRetryItemProcessing: 'Reenviar',
    labelButtonProcessItem: 'Enviar',
    labelMaxFileSizeExceeded: 'Arquivo \xE9 muito grande',
    labelMaxFileSize: 'O tamanho m\xE1ximo permitido: {filesize}',
    labelMaxTotalFileSizeExceeded: 'Tamanho total dos arquivos excedido',
    labelMaxTotalFileSize: 'Tamanho total permitido: {filesize}',
    labelFileTypeNotAllowed: 'Tipo de arquivo inv\xE1lido',
    fileValidateTypeLabelExpectedTypes: 'Tipos de arquivo suportados s\xE3o {allButLastType} ou {lastType}',
    imageValidateSizeLabelFormatError: 'Tipo de imagem inv\xE1lida',
    imageValidateSizeLabelImageSizeTooSmall: 'Imagem muito pequena',
    imageValidateSizeLabelImageSizeTooBig: 'Imagem muito grande',
    imageValidateSizeLabelExpectedMinSize: 'Tamanho m\xEDnimo permitida: {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize: 'Tamanho m\xE1ximo permitido: {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'Resolu\xE7\xE3o muito baixa',
    imageValidateSizeLabelImageResolutionTooHigh: 'Resolu\xE7\xE3o muito alta',
    imageValidateSizeLabelExpectedMinResolution: 'Resolu\xE7\xE3o m\xEDnima permitida: {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution: 'Resolu\xE7\xE3o m\xE1xima permitida: {maxResolution}',
}
var _o = {
    labelIdle:
        'Trage \u0219i plaseaz\u0103 fi\u0219iere sau <span class="filepond--label-action"> Caut\u0103-le </span>',
    labelInvalidField: 'C\xE2mpul con\u021Bine fi\u0219iere care nu sunt valide',
    labelFileWaitingForSize: '\xCEn a\u0219teptarea dimensiunii',
    labelFileSizeNotAvailable: 'Dimensiunea nu este diponibil\u0103',
    labelFileLoading: 'Se \xEEncarc\u0103',
    labelFileLoadError: 'Eroare la \xEEnc\u0103rcare',
    labelFileProcessing: 'Se \xEEncarc\u0103',
    labelFileProcessingComplete: '\xCEnc\u0103rcare finalizat\u0103',
    labelFileProcessingAborted: '\xCEnc\u0103rcare anulat\u0103',
    labelFileProcessingError: 'Eroare la \xEEnc\u0103rcare',
    labelFileProcessingRevertError: 'Eroare la anulare',
    labelFileRemoveError: 'Eroare la \u015Ftergere',
    labelTapToCancel: 'apas\u0103 pentru a anula',
    labelTapToRetry: 'apas\u0103 pentru a re\xEEncerca',
    labelTapToUndo: 'apas\u0103 pentru a anula',
    labelButtonRemoveItem: '\u015Eterge',
    labelButtonAbortItemLoad: 'Anuleaz\u0103',
    labelButtonRetryItemLoad: 'Re\xEEncearc\u0103',
    labelButtonAbortItemProcessing: 'Anuleaz\u0103',
    labelButtonUndoItemProcessing: 'Anuleaz\u0103',
    labelButtonRetryItemProcessing: 'Re\xEEncearc\u0103',
    labelButtonProcessItem: '\xCEncarc\u0103',
    labelMaxFileSizeExceeded: 'Fi\u0219ierul este prea mare',
    labelMaxFileSize: 'Dimensiunea maxim\u0103 a unui fi\u0219ier este de {filesize}',
    labelMaxTotalFileSizeExceeded: 'Dimensiunea total\u0103 maxim\u0103 a fost dep\u0103\u0219it\u0103',
    labelMaxTotalFileSize: 'Dimensiunea total\u0103 maxim\u0103 a fi\u0219ierelor este de {filesize}',
    labelFileTypeNotAllowed: 'Tipul fi\u0219ierului nu este valid',
    fileValidateTypeLabelExpectedTypes: 'Se a\u0219teapt\u0103 {allButLastType} sau {lastType}',
    imageValidateSizeLabelFormatError: 'Formatul imaginii nu este acceptat',
    imageValidateSizeLabelImageSizeTooSmall: 'Imaginea este prea mic\u0103',
    imageValidateSizeLabelImageSizeTooBig: 'Imaginea este prea mare',
    imageValidateSizeLabelExpectedMinSize: 'M\u0103rimea minim\u0103 este de {maxWidth} x {maxHeight}',
    imageValidateSizeLabelExpectedMaxSize: 'M\u0103rimea maxim\u0103 este de {maxWidth} x {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'Rezolu\u021Bia este prea mic\u0103',
    imageValidateSizeLabelImageResolutionTooHigh: 'Rezolu\u021Bia este prea mare',
    imageValidateSizeLabelExpectedMinResolution: 'Rezolu\u021Bia minim\u0103 este de {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution: 'Rezolu\u021Bia maxim\u0103 este de {maxResolution}',
}
var Ro = {
    labelIdle:
        '\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0444\u0430\u0439\u043B\u044B \u0438\u043B\u0438 <span class="filepond--label-action"> \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 </span>',
    labelInvalidField:
        '\u041F\u043E\u043B\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0444\u0430\u0439\u043B\u044B',
    labelFileWaitingForSize: '\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0440\u0430\u0437\u043C\u0435\u0440',
    labelFileSizeNotAvailable:
        '\u0420\u0430\u0437\u043C\u0435\u0440 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F',
    labelFileLoading: '\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435',
    labelFileLoadError:
        '\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0438',
    labelFileProcessing: '\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430',
    labelFileProcessingComplete:
        '\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430',
    labelFileProcessingAborted:
        '\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u0430',
    labelFileProcessingError:
        '\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435',
    labelFileProcessingRevertError:
        '\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0435',
    labelFileRemoveError:
        '\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0438',
    labelTapToCancel:
        '\u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u043E\u0442\u043C\u0435\u043D\u044B',
    labelTapToRetry:
        '\u043D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u043F\u043E\u043F\u044B\u0442\u043A\u0443',
    labelTapToUndo:
        '\u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u043E\u0442\u043C\u0435\u043D\u044B \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F',
    labelButtonRemoveItem: '\u0423\u0434\u0430\u043B\u0438\u0442\u044C',
    labelButtonAbortItemLoad: '\u041F\u0440\u0435\u043A\u0440\u0430\u0449\u0435\u043D\u043E',
    labelButtonRetryItemLoad:
        '\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443',
    labelButtonAbortItemProcessing: '\u041E\u0442\u043C\u0435\u043D\u0430',
    labelButtonUndoItemProcessing:
        '\u041E\u0442\u043C\u0435\u043D\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F',
    labelButtonRetryItemProcessing:
        '\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443',
    labelButtonProcessItem: '\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430',
    labelMaxFileSizeExceeded:
        '\u0424\u0430\u0439\u043B \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0439',
    labelMaxFileSize:
        '\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u0430: {filesize}',
    labelMaxTotalFileSizeExceeded:
        '\u041F\u0440\u0435\u0432\u044B\u0448\u0435\u043D \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440',
    labelMaxTotalFileSize:
        '\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u0430: {filesize}',
    labelFileTypeNotAllowed:
        '\u0424\u0430\u0439\u043B \u043D\u0435\u0432\u0435\u0440\u043D\u043E\u0433\u043E \u0442\u0438\u043F\u0430',
    fileValidateTypeLabelExpectedTypes:
        '\u041E\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044F {allButLastType} \u0438\u043B\u0438 {lastType}',
    imageValidateSizeLabelFormatError:
        '\u0422\u0438\u043F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F',
    imageValidateSizeLabelImageSizeTooSmall:
        '\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435',
    imageValidateSizeLabelImageSizeTooBig:
        '\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435',
    imageValidateSizeLabelExpectedMinSize:
        '\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440: {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        '\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440: {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow:
        '\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043D\u0438\u0437\u043A\u043E\u0435',
    imageValidateSizeLabelImageResolutionTooHigh:
        '\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0432\u044B\u0441\u043E\u043A\u043E\u0435',
    imageValidateSizeLabelExpectedMinResolution:
        '\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435: {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        '\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435: {maxResolution}',
}
var yo = {
    labelIdle: 'Drag och sl\xE4pp dina filer eller <span class="filepond--label-action"> Bl\xE4ddra </span>',
    labelInvalidField: 'F\xE4ltet inneh\xE5ller felaktiga filer',
    labelFileWaitingForSize: 'V\xE4ntar p\xE5 storlek',
    labelFileSizeNotAvailable: 'Storleken finns inte tillg\xE4nglig',
    labelFileLoading: 'Laddar',
    labelFileLoadError: 'Fel under laddning',
    labelFileProcessing: 'Laddar upp',
    labelFileProcessingComplete: 'Uppladdning klar',
    labelFileProcessingAborted: 'Uppladdning avbruten',
    labelFileProcessingError: 'Fel under uppladdning',
    labelFileProcessingRevertError: 'Fel under \xE5terst\xE4llning',
    labelFileRemoveError: 'Fel under borttagning',
    labelTapToCancel: 'tryck f\xF6r att avbryta',
    labelTapToRetry: 'tryck f\xF6r att f\xF6rs\xF6ka igen',
    labelTapToUndo: 'tryck f\xF6r att \xE5ngra',
    labelButtonRemoveItem: 'Tabort',
    labelButtonAbortItemLoad: 'Avbryt',
    labelButtonRetryItemLoad: 'F\xF6rs\xF6k igen',
    labelButtonAbortItemProcessing: 'Avbryt',
    labelButtonUndoItemProcessing: '\xC5ngra',
    labelButtonRetryItemProcessing: 'F\xF6rs\xF6k igen',
    labelButtonProcessItem: 'Ladda upp',
    labelMaxFileSizeExceeded: 'Filen \xE4r f\xF6r stor',
    labelMaxFileSize: 'St\xF6rsta till\xE5tna filstorlek \xE4r {filesize}',
    labelMaxTotalFileSizeExceeded: 'Maximal uppladdningsstorlek uppn\xE5d',
    labelMaxTotalFileSize: 'Maximal uppladdningsstorlek \xE4r {filesize}',
    labelFileTypeNotAllowed: 'Felaktig filtyp',
    fileValidateTypeLabelExpectedTypes: 'Godk\xE4nda filtyper {allButLastType} eller {lastType}',
    imageValidateSizeLabelFormatError: 'Bildtypen saknar st\xF6d',
    imageValidateSizeLabelImageSizeTooSmall: 'Bilden \xE4r f\xF6r liten',
    imageValidateSizeLabelImageSizeTooBig: 'Bilden \xE4r f\xF6r stor',
    imageValidateSizeLabelExpectedMinSize: 'Minimal storlek \xE4r {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize: 'Maximal storlek \xE4r {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'Uppl\xF6sningen \xE4r f\xF6r l\xE5g',
    imageValidateSizeLabelImageResolutionTooHigh: 'Uppl\xF6sningen \xE4r f\xF6r h\xF6g',
    imageValidateSizeLabelExpectedMinResolution: 'Minsta till\xE5tna uppl\xF6sning \xE4r {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution: 'H\xF6gsta till\xE5tna uppl\xF6sning \xE4r {maxResolution}',
}
var So = {
    labelIdle:
        'Dosyan\u0131z\u0131 S\xFCr\xFCkleyin & B\u0131rak\u0131n ya da <span class="filepond--label-action"> Se\xE7in </span>',
    labelInvalidField: 'Alan ge\xE7ersiz dosyalar i\xE7eriyor',
    labelFileWaitingForSize: 'Boyut hesaplan\u0131yor',
    labelFileSizeNotAvailable: 'Boyut mevcut de\u011Fil',
    labelFileLoading: 'Y\xFCkleniyor',
    labelFileLoadError: 'Y\xFCkleme s\u0131ras\u0131nda hata olu\u015Ftu',
    labelFileProcessing: 'Y\xFCkleniyor',
    labelFileProcessingComplete: 'Y\xFCkleme tamamland\u0131',
    labelFileProcessingAborted: 'Y\xFCkleme iptal edildi',
    labelFileProcessingError: 'Y\xFCklerken hata olu\u015Ftu',
    labelFileProcessingRevertError: 'Geri \xE7ekerken hata olu\u015Ftu',
    labelFileRemoveError: 'Kald\u0131r\u0131rken hata olu\u015Ftu',
    labelTapToCancel: '\u0130ptal etmek i\xE7in t\u0131klay\u0131n',
    labelTapToRetry: 'Tekrar denemek i\xE7in t\u0131klay\u0131n',
    labelTapToUndo: 'Geri almak i\xE7in t\u0131klay\u0131n',
    labelButtonRemoveItem: 'Kald\u0131r',
    labelButtonAbortItemLoad: '\u0130ptal Et',
    labelButtonRetryItemLoad: 'Tekrar dene',
    labelButtonAbortItemProcessing: '\u0130ptal et',
    labelButtonUndoItemProcessing: 'Geri Al',
    labelButtonRetryItemProcessing: 'Tekrar dene',
    labelButtonProcessItem: 'Y\xFCkle',
    labelMaxFileSizeExceeded: 'Dosya \xE7ok b\xFCy\xFCk',
    labelMaxFileSize: 'En fazla dosya boyutu: {filesize}',
    labelMaxTotalFileSizeExceeded: 'Maximum boyut a\u015F\u0131ld\u0131',
    labelMaxTotalFileSize: 'Maximum dosya boyutu :{filesize}',
    labelFileTypeNotAllowed: 'Ge\xE7ersiz dosya tipi',
    fileValidateTypeLabelExpectedTypes: '\u015Eu {allButLastType} ya da \u015Fu dosya olmas\u0131 gerekir: {lastType}',
    imageValidateSizeLabelFormatError: 'Resim tipi desteklenmiyor',
    imageValidateSizeLabelImageSizeTooSmall: 'Resim \xE7ok k\xFC\xE7\xFCk',
    imageValidateSizeLabelImageSizeTooBig: 'Resim \xE7ok b\xFCy\xFCk',
    imageValidateSizeLabelExpectedMinSize: 'Minimum boyut {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize: 'Maximum boyut {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: '\xC7\xF6z\xFCn\xFCrl\xFCk \xE7ok d\xFC\u015F\xFCk',
    imageValidateSizeLabelImageResolutionTooHigh: '\xC7\xF6z\xFCn\xFCrl\xFCk \xE7ok y\xFCksek',
    imageValidateSizeLabelExpectedMinResolution: 'Minimum \xE7\xF6z\xFCn\xFCrl\xFCk {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution: 'Maximum \xE7\xF6z\xFCn\xFCrl\xFCk {maxResolution}',
}
var wo = {
    labelIdle:
        '\u041F\u0435\u0440\u0435\u0442\u044F\u0433\u043D\u0456\u0442\u044C \u0444\u0430\u0439\u043B\u0438 \u0430\u0431\u043E <span class="filepond--label-action"> \u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044C </span>',
    labelInvalidField:
        '\u041F\u043E\u043B\u0435 \u043C\u0456\u0441\u0442\u0438\u0442\u044C \u043D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u0456 \u0444\u0430\u0439\u043B\u0438',
    labelFileWaitingForSize: '\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0440\u043E\u0437\u043C\u0456\u0440',
    labelFileSizeNotAvailable:
        '\u0420\u043E\u0437\u043C\u0456\u0440 \u043D\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0439',
    labelFileLoading: '\u041E\u0447\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F',
    labelFileLoadError:
        '\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u043E\u0447\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u0456',
    labelFileProcessing: '\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F',
    labelFileProcessingComplete:
        '\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E',
    labelFileProcessingAborted:
        '\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0441\u043A\u0430\u0441\u043E\u0432\u0430\u043D\u043E',
    labelFileProcessingError:
        '\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u0456',
    labelFileProcessingRevertError:
        '\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u0456',
    labelFileRemoveError:
        '\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456',
    labelTapToCancel: '\u0412\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438',
    labelTapToRetry:
        '\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0438 \u0441\u043F\u0440\u043E\u0431\u0443',
    labelTapToUndo:
        '\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u0432\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438 \u043E\u0441\u0442\u0430\u043D\u043D\u044E \u0434\u0456\u044E',
    labelButtonRemoveItem: '\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438',
    labelButtonAbortItemLoad: '\u0412\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438',
    labelButtonRetryItemLoad:
        '\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0438 \u0441\u043F\u0440\u043E\u0431\u0443',
    labelButtonAbortItemProcessing: '\u0412\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438',
    labelButtonUndoItemProcessing:
        '\u0412\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438 \u043E\u0441\u0442\u0430\u043D\u043D\u044E \u0434\u0456\u044E',
    labelButtonRetryItemProcessing:
        '\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0438 \u0441\u043F\u0440\u043E\u0431\u0443',
    labelButtonProcessItem: '\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F',
    labelMaxFileSizeExceeded:
        '\u0424\u0430\u0439\u043B \u0437\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0438\u0439',
    labelMaxFileSize:
        '\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u043E\u0437\u043C\u0456\u0440 \u0444\u0430\u0439\u043B\u0443: {filesize}',
    labelMaxTotalFileSizeExceeded:
        '\u041F\u0435\u0440\u0435\u0432\u0438\u0449\u0435\u043D\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0438\u0439 \u0437\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u043E\u0437\u043C\u0456\u0440',
    labelMaxTotalFileSize:
        '\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0438\u0439 \u0437\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u043E\u0437\u043C\u0456\u0440: {filesize}',
    labelFileTypeNotAllowed:
        '\u0424\u043E\u0440\u043C\u0430\u0442 \u0444\u0430\u0439\u043B\u0443 \u043D\u0435 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u044C\u0441\u044F',
    fileValidateTypeLabelExpectedTypes:
        '\u041E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F {allButLastType} \u0430\u0431\u043E {lastType}',
    imageValidateSizeLabelFormatError:
        '\u0424\u043E\u0440\u043C\u0430\u0442 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u043D\u0435 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u044C\u0441\u044F',
    imageValidateSizeLabelImageSizeTooSmall:
        '\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0437\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0435',
    imageValidateSizeLabelImageSizeTooBig:
        '\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0437\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435',
    imageValidateSizeLabelExpectedMinSize:
        '\u041C\u0456\u043D\u0456\u043C\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u043E\u0437\u043C\u0456\u0440: {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        '\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u043E\u0437\u043C\u0456\u0440: {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow:
        '\u0420\u043E\u0437\u043C\u0456\u0440\u0438 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0437\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0456',
    imageValidateSizeLabelImageResolutionTooHigh:
        '\u0420\u043E\u0437\u043C\u0456\u0440\u0438 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0437\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0456',
    imageValidateSizeLabelExpectedMinResolution:
        '\u041C\u0456\u043D\u0456\u043C\u0430\u043B\u044C\u043D\u0456 \u0440\u043E\u0437\u043C\u0456\u0440\u0438: {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        '\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0456 \u0440\u043E\u0437\u043C\u0456\u0440\u0438: {maxResolution}',
}
var Ao = {
    labelIdle:
        'K\xE9o th\u1EA3 t\u1EC7p c\u1EE7a b\u1EA1n ho\u1EB7c <span class="filepond--label-action"> T\xECm ki\u1EBFm </span>',
    labelInvalidField: 'Tr\u01B0\u1EDDng ch\u1EE9a c\xE1c t\u1EC7p kh\xF4ng h\u1EE3p l\u1EC7',
    labelFileWaitingForSize: '\u0110ang ch\u1EDD k\xEDch th\u01B0\u1EDBc',
    labelFileSizeNotAvailable: 'K\xEDch th\u01B0\u1EDBc kh\xF4ng c\xF3 s\u1EB5n',
    labelFileLoading: '\u0110ang t\u1EA3i',
    labelFileLoadError: 'L\u1ED7i khi t\u1EA3i',
    labelFileProcessing: '\u0110ang t\u1EA3i l\xEAn',
    labelFileProcessingComplete: 'T\u1EA3i l\xEAn th\xE0nh c\xF4ng',
    labelFileProcessingAborted: '\u0110\xE3 hu\u1EF7 t\u1EA3i l\xEAn',
    labelFileProcessingError: 'L\u1ED7i khi t\u1EA3i l\xEAn',
    labelFileProcessingRevertError: 'L\u1ED7i khi ho\xE0n nguy\xEAn',
    labelFileRemoveError: 'L\u1ED7i khi x\xF3a',
    labelTapToCancel: 'nh\u1EA5n \u0111\u1EC3 h\u1EE7y',
    labelTapToRetry: 'nh\u1EA5n \u0111\u1EC3 th\u1EED l\u1EA1i',
    labelTapToUndo: 'nh\u1EA5n \u0111\u1EC3 ho\xE0n t\xE1c',
    labelButtonRemoveItem: 'Xo\xE1',
    labelButtonAbortItemLoad: 'Hu\u1EF7 b\u1ECF',
    labelButtonRetryItemLoad: 'Th\u1EED l\u1EA1i',
    labelButtonAbortItemProcessing: 'H\u1EE7y b\u1ECF',
    labelButtonUndoItemProcessing: 'Ho\xE0n t\xE1c',
    labelButtonRetryItemProcessing: 'Th\u1EED l\u1EA1i',
    labelButtonProcessItem: 'T\u1EA3i l\xEAn',
    labelMaxFileSizeExceeded: 'T\u1EADp tin qu\xE1 l\u1EDBn',
    labelMaxFileSize: 'K\xEDch th\u01B0\u1EDBc t\u1EC7p t\u1ED1i \u0111a l\xE0 {filesize}',
    labelMaxTotalFileSizeExceeded:
        '\u0110\xE3 v\u01B0\u1EE3t qu\xE1 t\u1ED5ng k\xEDch th\u01B0\u1EDBc t\u1ED1i \u0111a',
    labelMaxTotalFileSize: 'T\u1ED5ng k\xEDch th\u01B0\u1EDBc t\u1EC7p t\u1ED1i \u0111a l\xE0 {filesize}',
    labelFileTypeNotAllowed: 'T\u1EC7p thu\u1ED9c lo\u1EA1i kh\xF4ng h\u1EE3p l\u1EC7',
    fileValidateTypeLabelExpectedTypes:
        'Ki\u1EC3u t\u1EC7p h\u1EE3p l\u1EC7 l\xE0 {allButLastType} ho\u1EB7c {lastType}',
    imageValidateSizeLabelFormatError: 'Lo\u1EA1i h\xECnh \u1EA3nh kh\xF4ng \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3',
    imageValidateSizeLabelImageSizeTooSmall: 'H\xECnh \u1EA3nh qu\xE1 nh\u1ECF',
    imageValidateSizeLabelImageSizeTooBig: 'H\xECnh \u1EA3nh qu\xE1 l\u1EDBn',
    imageValidateSizeLabelExpectedMinSize:
        'K\xEDch th\u01B0\u1EDBc t\u1ED1i thi\u1EC3u l\xE0 {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize: 'K\xEDch th\u01B0\u1EDBc t\u1ED1i \u0111a l\xE0 {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: '\u0110\u1ED9 ph\xE2n gi\u1EA3i qu\xE1 th\u1EA5p',
    imageValidateSizeLabelImageResolutionTooHigh: '\u0110\u1ED9 ph\xE2n gi\u1EA3i qu\xE1 cao',
    imageValidateSizeLabelExpectedMinResolution:
        '\u0110\u1ED9 ph\xE2n gi\u1EA3i t\u1ED1i thi\u1EC3u l\xE0 {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        '\u0110\u1ED9 ph\xE2n gi\u1EA3i t\u1ED1i \u0111a l\xE0 {maxResolution}',
}
var vo = {
    labelIdle: '\u62D6\u653E\u6587\u4EF6\uFF0C\u6216\u8005 <span class="filepond--label-action"> \u6D4F\u89C8 </span>',
    labelInvalidField: '\u5B57\u6BB5\u5305\u542B\u65E0\u6548\u6587\u4EF6',
    labelFileWaitingForSize: '\u8BA1\u7B97\u6587\u4EF6\u5927\u5C0F',
    labelFileSizeNotAvailable: '\u6587\u4EF6\u5927\u5C0F\u4E0D\u53EF\u7528',
    labelFileLoading: '\u52A0\u8F7D',
    labelFileLoadError: '\u52A0\u8F7D\u9519\u8BEF',
    labelFileProcessing: '\u4E0A\u4F20',
    labelFileProcessingComplete: '\u5DF2\u4E0A\u4F20',
    labelFileProcessingAborted: '\u4E0A\u4F20\u5DF2\u53D6\u6D88',
    labelFileProcessingError: '\u4E0A\u4F20\u51FA\u9519',
    labelFileProcessingRevertError: '\u8FD8\u539F\u51FA\u9519',
    labelFileRemoveError: '\u5220\u9664\u51FA\u9519',
    labelTapToCancel: '\u70B9\u51FB\u53D6\u6D88',
    labelTapToRetry: '\u70B9\u51FB\u91CD\u8BD5',
    labelTapToUndo: '\u70B9\u51FB\u64A4\u6D88',
    labelButtonRemoveItem: '\u5220\u9664',
    labelButtonAbortItemLoad: '\u4E2D\u6B62',
    labelButtonRetryItemLoad: '\u91CD\u8BD5',
    labelButtonAbortItemProcessing: '\u53D6\u6D88',
    labelButtonUndoItemProcessing: '\u64A4\u6D88',
    labelButtonRetryItemProcessing: '\u91CD\u8BD5',
    labelButtonProcessItem: '\u4E0A\u4F20',
    labelMaxFileSizeExceeded: '\u6587\u4EF6\u592A\u5927',
    labelMaxFileSize: '\u6700\u5927\u503C: {filesize}',
    labelMaxTotalFileSizeExceeded: '\u8D85\u8FC7\u6700\u5927\u6587\u4EF6\u5927\u5C0F',
    labelMaxTotalFileSize: '\u6700\u5927\u6587\u4EF6\u5927\u5C0F\uFF1A{filesize}',
    labelFileTypeNotAllowed: '\u6587\u4EF6\u7C7B\u578B\u65E0\u6548',
    fileValidateTypeLabelExpectedTypes: '\u5E94\u4E3A {allButLastType} \u6216 {lastType}',
    imageValidateSizeLabelFormatError: '\u4E0D\u652F\u6301\u56FE\u50CF\u7C7B\u578B',
    imageValidateSizeLabelImageSizeTooSmall: '\u56FE\u50CF\u592A\u5C0F',
    imageValidateSizeLabelImageSizeTooBig: '\u56FE\u50CF\u592A\u5927',
    imageValidateSizeLabelExpectedMinSize: '\u6700\u5C0F\u503C: {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize: '\u6700\u5927\u503C: {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: '\u5206\u8FA8\u7387\u592A\u4F4E',
    imageValidateSizeLabelImageResolutionTooHigh: '\u5206\u8FA8\u7387\u592A\u9AD8',
    imageValidateSizeLabelExpectedMinResolution: '\u6700\u5C0F\u5206\u8FA8\u7387\uFF1A{minResolution}',
    imageValidateSizeLabelExpectedMaxResolution: '\u6700\u5927\u5206\u8FA8\u7387\uFF1A{maxResolution}',
}
var Lo = {
    labelIdle: '\u62D6\u653E\u6A94\u6848\uFF0C\u6216\u8005 <span class="filepond--label-action"> \u700F\u89BD </span>',
    labelInvalidField: '\u4E0D\u652F\u63F4\u6B64\u6A94\u6848',
    labelFileWaitingForSize: '\u6B63\u5728\u8A08\u7B97\u6A94\u6848\u5927\u5C0F',
    labelFileSizeNotAvailable: '\u6A94\u6848\u5927\u5C0F\u4E0D\u7B26',
    labelFileLoading: '\u8B80\u53D6\u4E2D',
    labelFileLoadError: '\u8B80\u53D6\u932F\u8AA4',
    labelFileProcessing: '\u4E0A\u50B3',
    labelFileProcessingComplete: '\u5DF2\u4E0A\u50B3',
    labelFileProcessingAborted: '\u4E0A\u50B3\u5DF2\u53D6\u6D88',
    labelFileProcessingError: '\u4E0A\u50B3\u767C\u751F\u932F\u8AA4',
    labelFileProcessingRevertError: '\u9084\u539F\u932F\u8AA4',
    labelFileRemoveError: '\u522A\u9664\u932F\u8AA4',
    labelTapToCancel: '\u9EDE\u64CA\u53D6\u6D88',
    labelTapToRetry: '\u9EDE\u64CA\u91CD\u8A66',
    labelTapToUndo: '\u9EDE\u64CA\u9084\u539F',
    labelButtonRemoveItem: '\u522A\u9664',
    labelButtonAbortItemLoad: '\u505C\u6B62',
    labelButtonRetryItemLoad: '\u91CD\u8A66',
    labelButtonAbortItemProcessing: '\u53D6\u6D88',
    labelButtonUndoItemProcessing: '\u53D6\u6D88',
    labelButtonRetryItemProcessing: '\u91CD\u8A66',
    labelButtonProcessItem: '\u4E0A\u50B3',
    labelMaxFileSizeExceeded: '\u6A94\u6848\u904E\u5927',
    labelMaxFileSize: '\u6700\u5927\u503C\uFF1A{filesize}',
    labelMaxTotalFileSizeExceeded: '\u8D85\u904E\u6700\u5927\u53EF\u4E0A\u50B3\u5927\u5C0F',
    labelMaxTotalFileSize: '\u6700\u5927\u53EF\u4E0A\u50B3\u5927\u5C0F\uFF1A{filesize}',
    labelFileTypeNotAllowed: '\u4E0D\u652F\u63F4\u6B64\u985E\u578B\u6A94\u6848',
    fileValidateTypeLabelExpectedTypes: '\u61C9\u70BA {allButLastType} \u6216 {lastType}',
    imageValidateSizeLabelFormatError: '\u4E0D\u652F\u6301\u6B64\u985E\u5716\u7247\u985E\u578B',
    imageValidateSizeLabelImageSizeTooSmall: '\u5716\u7247\u904E\u5C0F',
    imageValidateSizeLabelImageSizeTooBig: '\u5716\u7247\u904E\u5927',
    imageValidateSizeLabelExpectedMinSize: '\u6700\u5C0F\u5C3A\u5BF8\uFF1A{minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize: '\u6700\u5927\u5C3A\u5BF8\uFF1A{maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: '\u89E3\u6790\u5EA6\u904E\u4F4E',
    imageValidateSizeLabelImageResolutionTooHigh: '\u89E3\u6790\u5EA6\u904E\u9AD8',
    imageValidateSizeLabelExpectedMinResolution: '\u6700\u4F4E\u89E3\u6790\u5EA6\uFF1A{minResolution}',
    imageValidateSizeLabelExpectedMaxResolution: '\u6700\u9AD8\u89E3\u6790\u5EA6\uFF1A{maxResolution}',
}
ge(yr)
ge(wr)
ge(Lr)
ge(Or)
ge(Cr)
ge(Yr)
ge(qr)
ge(ro)
ge(ga)
window.FilePond = $i
function Wf({
    acceptedFileTypes: e,
    imageEditorEmptyFillColor: t,
    imageEditorMode: i,
    imageEditorViewportHeight: a,
    imageEditorViewportWidth: n,
    deleteUploadedFileUsing: r,
    isDeletable: o,
    isDisabled: l,
    getUploadedFilesUsing: s,
    imageCropAspectRatio: u,
    imagePreviewHeight: c,
    imageResizeMode: d,
    imageResizeTargetHeight: h,
    imageResizeTargetWidth: f,
    imageResizeUpscale: p,
    isAvatar: m,
    hasImageEditor: g,
    isDownloadable: b,
    isOpenable: E,
    isPreviewable: T,
    isReorderable: _,
    loadingIndicatorPosition: y,
    locale: I,
    maxSize: A,
    minSize: R,
    panelAspectRatio: S,
    panelLayout: x,
    placeholder: D,
    removeUploadedFileButtonPosition: O,
    removeUploadedFileUsing: z,
    reorderUploadedFilesUsing: v,
    shouldAppendFiles: P,
    shouldOrientImageFromExif: w,
    shouldTransformImage: L,
    state: F,
    uploadButtonPosition: C,
    uploadProgressIndicatorPosition: V,
    uploadUsing: G,
}) {
    return {
        fileKeyIndex: {},
        pond: null,
        shouldUpdateState: !0,
        state: F,
        lastState: null,
        uploadedFileIndex: {},
        isEditorOpen: !1,
        editingFile: {},
        currentRatio: '',
        editor: {},
        init: async function () {
            yt(Mo[I] ?? Mo.en),
                (this.pond = at(this.$refs.input, {
                    acceptedFileTypes: e,
                    allowImageExifOrientation: w,
                    allowPaste: !1,
                    allowRemove: o,
                    allowReorder: _,
                    allowImagePreview: T,
                    allowVideoPreview: T,
                    allowAudioPreview: T,
                    allowImageTransform: L,
                    credits: !1,
                    files: await this.getFiles(),
                    imageCropAspectRatio: u,
                    imagePreviewHeight: c,
                    imageResizeTargetHeight: h,
                    imageResizeTargetWidth: f,
                    imageResizeMode: d,
                    imageResizeUpscale: p,
                    itemInsertLocation: P ? 'after' : 'before',
                    ...(D && { labelIdle: D }),
                    maxFileSize: A,
                    minFileSize: R,
                    styleButtonProcessItemPosition: C,
                    styleButtonRemoveItemPosition: O,
                    styleLoadIndicatorPosition: y,
                    stylePanelAspectRatio: S,
                    stylePanelLayout: x,
                    styleProgressIndicatorPosition: V,
                    server: {
                        load: async (N, k) => {
                            let U = await (await fetch(N, { cache: 'no-store' })).blob()
                            k(U)
                        },
                        process: (N, k, q, U, W, $) => {
                            this.shouldUpdateState = !1
                            let ae = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (X) =>
                                (X ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (X / 4)))).toString(16),
                            )
                            G(
                                ae,
                                k,
                                (X) => {
                                    ;(this.shouldUpdateState = !0), U(X)
                                },
                                W,
                                $,
                            )
                        },
                        remove: async (N, k) => {
                            let q = this.uploadedFileIndex[N] ?? null
                            q && (await r(q), k())
                        },
                        revert: async (N, k) => {
                            await z(N), k()
                        },
                    },
                    allowImageEdit: g,
                    imageEditEditor: {
                        open: (N) => this.loadEditor(N),
                        onconfirm: () => {},
                        oncancel: () => this.closeEditor(),
                        onclose: () => this.closeEditor(),
                    },
                })),
                this.$watch('state', async () => {
                    if (this.pond && this.shouldUpdateState) {
                        if (
                            this.state !== null &&
                            Object.values(this.state).filter((N) => N.startsWith('livewire-file:')).length
                        ) {
                            this.lastState = null
                            return
                        }
                        JSON.stringify(this.state) !== this.lastState &&
                            ((this.lastState = JSON.stringify(this.state)), (this.pond.files = await this.getFiles()))
                    }
                }),
                this.pond.on('reorderfiles', async (N) => {
                    let k = N.map((q) =>
                        q.source instanceof File ? q.serverId : this.uploadedFileIndex[q.source] ?? null,
                    ).filter((q) => q)
                    await v(P ? k : k.reverse())
                }),
                this.pond.on('initfile', async (N) => {
                    b && (m || this.insertDownloadLink(N))
                }),
                this.pond.on('initfile', async (N) => {
                    E && (m || this.insertOpenLink(N))
                }),
                this.pond.on('addfilestart', async (N) => {
                    N.status === st.PROCESSING_QUEUED && this.dispatchFormEvent('file-upload-started')
                })
            let B = async () => {
                this.pond.getFiles().filter((N) => N.status === st.PROCESSING || N.status === st.PROCESSING_QUEUED)
                    .length || this.dispatchFormEvent('file-upload-finished')
            }
            this.pond.on('processfile', B), this.pond.on('processfileabort', B), this.pond.on('processfilerevert', B)
        },
        destroy: function () {
            this.destroyEditor(), nt(this.$refs.input), (this.pond = null)
        },
        dispatchFormEvent: function (B) {
            this.$el.closest('form')?.dispatchEvent(new CustomEvent(B, { composed: !0, cancelable: !0 }))
        },
        getUploadedFiles: async function () {
            let B = await s()
            ;(this.fileKeyIndex = B ?? {}),
                (this.uploadedFileIndex = Object.entries(this.fileKeyIndex)
                    .filter(([N, k]) => k?.url)
                    .reduce((N, [k, q]) => ((N[q.url] = k), N), {}))
        },
        getFiles: async function () {
            await this.getUploadedFiles()
            let B = []
            for (let N of Object.values(this.fileKeyIndex))
                N &&
                    B.push({
                        source: N.url,
                        options: {
                            type: 'local',
                            ...(/^image/.test(N.type) ? {} : { file: { name: N.name, size: N.size, type: N.type } }),
                        },
                    })
            return P ? B : B.reverse()
        },
        insertDownloadLink: function (B) {
            if (B.origin !== wt.LOCAL) return
            let N = this.getDownloadLink(B)
            N && document.getElementById(`filepond--item-${B.id}`).querySelector('.filepond--file-info-main').prepend(N)
        },
        insertOpenLink: function (B) {
            if (B.origin !== wt.LOCAL) return
            let N = this.getOpenLink(B)
            N && document.getElementById(`filepond--item-${B.id}`).querySelector('.filepond--file-info-main').prepend(N)
        },
        getDownloadLink: function (B) {
            let N = B.source
            if (!N) return
            let k = document.createElement('a')
            return (k.className = 'filepond--download-icon'), (k.href = N), (k.download = B.file.name), k
        },
        getOpenLink: function (B) {
            let N = B.source
            if (!N) return
            let k = document.createElement('a')
            return (k.className = 'filepond--open-icon'), (k.href = N), (k.target = '_blank'), k
        },
        initEditor: function () {
            l ||
                (g &&
                    (this.editor = new da(this.$refs.editor, {
                        aspectRatio: n / a,
                        autoCropArea: 1,
                        center: !0,
                        crop: (B) => {
                            ;(this.$refs.xPositionInput.value = Math.round(B.detail.x)),
                                (this.$refs.yPositionInput.value = Math.round(B.detail.y)),
                                (this.$refs.heightInput.value = Math.round(B.detail.height)),
                                (this.$refs.widthInput.value = Math.round(B.detail.width)),
                                (this.$refs.rotationInput.value = B.detail.rotate)
                        },
                        cropBoxResizable: !0,
                        guides: !0,
                        highlight: !0,
                        responsive: !0,
                        toggleDragModeOnDblclick: !0,
                        viewMode: i,
                        wheelZoomRatio: 0.02,
                    })))
        },
        closeEditor: function () {
            ;(this.editingFile = {}), (this.isEditorOpen = !1), this.destroyEditor()
        },
        loadEditor: function (B) {
            if (l || !g || !B) return
            ;(this.editingFile = B), this.initEditor()
            let N = new FileReader()
            ;(N.onload = (k) => {
                ;(this.isEditorOpen = !0), setTimeout(() => this.editor.replace(k.target.result), 200)
            }),
                N.readAsDataURL(B)
        },
        saveEditor: function () {
            l ||
                (g &&
                    this.editor
                        .getCroppedCanvas({
                            fillColor: t ?? 'transparent',
                            height: h,
                            imageSmoothingEnabled: !0,
                            imageSmoothingQuality: 'high',
                            width: f,
                        })
                        .toBlob((B) => {
                            this.pond.removeFile(
                                this.pond.getFiles().find((N) => N.filename === this.editingFile.name),
                            ),
                                this.$nextTick(() => {
                                    ;(this.shouldUpdateState = !1),
                                        this.pond
                                            .addFile(
                                                new File([B], this.editingFile.name, {
                                                    type:
                                                        this.editingFile.type === 'image/svg+xml'
                                                            ? 'image/png'
                                                            : this.editingFile.type,
                                                    lastModified: new Date().getTime(),
                                                }),
                                            )
                                            .then(() => {
                                                this.closeEditor()
                                            })
                                })
                        }, this.editingFile.type))
        },
        destroyEditor: function () {
            this.editor && typeof this.editor.destroy == 'function' && this.editor.destroy(), (this.editor = null)
        },
    }
}
var Mo = {
    ar: oo,
    cs: lo,
    da: so,
    de: co,
    en: uo,
    es: ho,
    fa: fo,
    fi: po,
    fr: mo,
    hu: go,
    id: Eo,
    it: To,
    nl: Io,
    pl: bo,
    pt_BR: fi,
    pt_PT: fi,
    ro: _o,
    ru: Ro,
    sv: yo,
    tr: So,
    uk: wo,
    vi: Ao,
    zh_CN: vo,
    zh_TW: Lo,
}
export { Wf as default }
/*! Bundled license information:

filepond/dist/filepond.esm.js:
  (*!
   * FilePond 4.30.4
   * Licensed under MIT, https://opensource.org/licenses/MIT/
   * Please visit https://pqina.nl/filepond/ for details.
   *)

cropperjs/dist/cropper.esm.js:
  (*!
   * Cropper.js v1.6.1
   * https://fengyuanchen.github.io/cropperjs
   *
   * Copyright 2015-present Chen Fengyuan
   * Released under the MIT license
   *
   * Date: 2023-09-17T03:44:19.860Z
   *)

filepond-plugin-file-validate-size/dist/filepond-plugin-file-validate-size.esm.js:
  (*!
   * FilePondPluginFileValidateSize 2.2.8
   * Licensed under MIT, https://opensource.org/licenses/MIT/
   * Please visit https://pqina.nl/filepond/ for details.
   *)

filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js:
  (*!
   * FilePondPluginFileValidateType 1.2.8
   * Licensed under MIT, https://opensource.org/licenses/MIT/
   * Please visit https://pqina.nl/filepond/ for details.
   *)

filepond-plugin-image-crop/dist/filepond-plugin-image-crop.esm.js:
  (*!
   * FilePondPluginImageCrop 2.0.6
   * Licensed under MIT, https://opensource.org/licenses/MIT/
   * Please visit https://pqina.nl/filepond/ for details.
   *)

filepond-plugin-image-edit/dist/filepond-plugin-image-edit.esm.js:
  (*!
   * FilePondPluginImageEdit 1.6.3
   * Licensed under MIT, https://opensource.org/licenses/MIT/
   * Please visit https://pqina.nl/filepond/ for details.
   *)

filepond-plugin-image-exif-orientation/dist/filepond-plugin-image-exif-orientation.esm.js:
  (*!
   * FilePondPluginImageExifOrientation 1.0.11
   * Licensed under MIT, https://opensource.org/licenses/MIT/
   * Please visit https://pqina.nl/filepond/ for details.
   *)

filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js:
  (*!
   * FilePondPluginImagePreview 4.6.11
   * Licensed under MIT, https://opensource.org/licenses/MIT/
   * Please visit https://pqina.nl/filepond/ for details.
   *)

filepond-plugin-image-resize/dist/filepond-plugin-image-resize.esm.js:
  (*!
   * FilePondPluginImageResize 2.0.10
   * Licensed under MIT, https://opensource.org/licenses/MIT/
   * Please visit https://pqina.nl/filepond/ for details.
   *)

filepond-plugin-image-transform/dist/filepond-plugin-image-transform.esm.js:
  (*!
   * FilePondPluginImageTransform 3.8.7
   * Licensed under MIT, https://opensource.org/licenses/MIT/
   * Please visit https://pqina.nl/filepond/ for details.
   *)

filepond-plugin-media-preview/dist/filepond-plugin-media-preview.esm.js:
  (*!
   * FilePondPluginMediaPreview 1.0.11
   * Licensed under MIT, https://opensource.org/licenses/MIT/
   * Please visit undefined for details.
   *)
*/
