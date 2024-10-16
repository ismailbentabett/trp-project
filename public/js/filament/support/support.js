;(() => {
    function wt(e) {
        return e.split('-')[0]
    }
    function ln(e) {
        return e.split('-')[1]
    }
    function xn(e) {
        return ['top', 'bottom'].includes(wt(e)) ? 'x' : 'y'
    }
    function Yr(e) {
        return e === 'y' ? 'height' : 'width'
    }
    function xo(e, t, n) {
        let { reference: r, floating: o } = e,
            i = r.x + r.width / 2 - o.width / 2,
            s = r.y + r.height / 2 - o.height / 2,
            c = xn(t),
            u = Yr(c),
            h = r[u] / 2 - o[u] / 2,
            m = wt(t),
            g = c === 'x',
            b
        switch (m) {
            case 'top':
                b = { x: i, y: r.y - o.height }
                break
            case 'bottom':
                b = { x: i, y: r.y + r.height }
                break
            case 'right':
                b = { x: r.x + r.width, y: s }
                break
            case 'left':
                b = { x: r.x - o.width, y: s }
                break
            default:
                b = { x: r.x, y: r.y }
        }
        switch (ln(t)) {
            case 'start':
                b[c] -= h * (n && g ? -1 : 1)
                break
            case 'end':
                b[c] += h * (n && g ? -1 : 1)
                break
        }
        return b
    }
    var Ci = async (e, t, n) => {
        let { placement: r = 'bottom', strategy: o = 'absolute', middleware: i = [], platform: s } = n,
            c = await (s.isRTL == null ? void 0 : s.isRTL(t))
        if (
            (s == null &&
                console.error(
                    [
                        'Floating UI: `platform` property was not passed to config. If you',
                        'want to use Floating UI on the web, install @floating-ui/dom',
                        'instead of the /core package. Otherwise, you can create your own',
                        '`platform`: https://floating-ui.com/docs/platform',
                    ].join(' '),
                ),
            i.filter((S) => {
                let { name: T } = S
                return T === 'autoPlacement' || T === 'flip'
            }).length > 1)
        )
            throw new Error(
                [
                    'Floating UI: duplicate `flip` and/or `autoPlacement`',
                    'middleware detected. This will lead to an infinite loop. Ensure only',
                    'one of either has been passed to the `middleware` array.',
                ].join(' '),
            )
        let u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
            { x: h, y: m } = xo(u, r, c),
            g = r,
            b = {},
            O = 0
        for (let S = 0; S < i.length; S++) {
            if ((O++, O > 100))
                throw new Error(
                    [
                        'Floating UI: The middleware lifecycle appears to be',
                        'running in an infinite loop. This is usually caused by a `reset`',
                        'continually being returned without a break condition.',
                    ].join(' '),
                )
            let { name: T, fn: F } = i[S],
                {
                    x: B,
                    y: L,
                    data: K,
                    reset: W,
                } = await F({
                    x: h,
                    y: m,
                    initialPlacement: r,
                    placement: g,
                    strategy: o,
                    middlewareData: b,
                    rects: u,
                    platform: s,
                    elements: { reference: e, floating: t },
                })
            if (((h = B ?? h), (m = L ?? m), (b = { ...b, [T]: { ...b[T], ...K } }), W)) {
                typeof W == 'object' &&
                    (W.placement && (g = W.placement),
                    W.rects &&
                        (u =
                            W.rects === !0
                                ? await s.getElementRects({ reference: e, floating: t, strategy: o })
                                : W.rects),
                    ({ x: h, y: m } = xo(u, g, c))),
                    (S = -1)
                continue
            }
        }
        return { x: h, y: m, placement: g, strategy: o, middlewareData: b }
    }
    function Ai(e) {
        return { top: 0, right: 0, bottom: 0, left: 0, ...e }
    }
    function qr(e) {
        return typeof e != 'number' ? Ai(e) : { top: e, right: e, bottom: e, left: e }
    }
    function Bn(e) {
        return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height }
    }
    async function En(e, t) {
        var n
        t === void 0 && (t = {})
        let { x: r, y: o, platform: i, rects: s, elements: c, strategy: u } = e,
            {
                boundary: h = 'clippingAncestors',
                rootBoundary: m = 'viewport',
                elementContext: g = 'floating',
                altBoundary: b = !1,
                padding: O = 0,
            } = t,
            S = qr(O),
            F = c[b ? (g === 'floating' ? 'reference' : 'floating') : g],
            B = Bn(
                await i.getClippingRect({
                    element:
                        (n = await (i.isElement == null ? void 0 : i.isElement(F))) == null || n
                            ? F
                            : F.contextElement ||
                              (await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(c.floating))),
                    boundary: h,
                    rootBoundary: m,
                    strategy: u,
                }),
            ),
            L = Bn(
                i.convertOffsetParentRelativeRectToViewportRelativeRect
                    ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                          rect: g === 'floating' ? { ...s.floating, x: r, y: o } : s.reference,
                          offsetParent: await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c.floating)),
                          strategy: u,
                      })
                    : s[g],
            )
        return {
            top: B.top - L.top + S.top,
            bottom: L.bottom - B.bottom + S.bottom,
            left: B.left - L.left + S.left,
            right: L.right - B.right + S.right,
        }
    }
    var Io = Math.min,
        qt = Math.max
    function Ur(e, t, n) {
        return qt(e, Io(t, n))
    }
    var Lo = (e) => ({
            name: 'arrow',
            options: e,
            async fn(t) {
                let { element: n, padding: r = 0 } = e ?? {},
                    { x: o, y: i, placement: s, rects: c, platform: u } = t
                if (n == null)
                    return console.warn('Floating UI: No `element` was passed to the `arrow` middleware.'), {}
                let h = qr(r),
                    m = { x: o, y: i },
                    g = xn(s),
                    b = Yr(g),
                    O = await u.getDimensions(n),
                    S = g === 'y' ? 'top' : 'left',
                    T = g === 'y' ? 'bottom' : 'right',
                    F = c.reference[b] + c.reference[g] - m[g] - c.floating[b],
                    B = m[g] - c.reference[g],
                    L = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(n)),
                    K = L ? (g === 'y' ? L.clientHeight || 0 : L.clientWidth || 0) : 0,
                    W = F / 2 - B / 2,
                    he = h[S],
                    ee = K - O[b] - h[T],
                    Z = K / 2 - O[b] / 2 + W,
                    de = Ur(he, Z, ee)
                return { data: { [g]: de, centerOffset: Z - de } }
            },
        }),
        Di = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
    function lr(e) {
        return e.replace(/left|right|bottom|top/g, (t) => Di[t])
    }
    function No(e, t, n) {
        n === void 0 && (n = !1)
        let r = ln(e),
            o = xn(e),
            i = Yr(o),
            s = o === 'x' ? (r === (n ? 'end' : 'start') ? 'right' : 'left') : r === 'start' ? 'bottom' : 'top'
        return t.reference[i] > t.floating[i] && (s = lr(s)), { main: s, cross: lr(s) }
    }
    var Ti = { start: 'end', end: 'start' }
    function Xr(e) {
        return e.replace(/start|end/g, (t) => Ti[t])
    }
    var ko = ['top', 'right', 'bottom', 'left'],
        _i = ko.reduce((e, t) => e.concat(t, t + '-start', t + '-end'), [])
    function Pi(e, t, n) {
        return (
            e ? [...n.filter((o) => ln(o) === e), ...n.filter((o) => ln(o) !== e)] : n.filter((o) => wt(o) === o)
        ).filter((o) => (e ? ln(o) === e || (t ? Xr(o) !== o : !1) : !0))
    }
    var Gr = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: 'autoPlacement',
                options: e,
                async fn(t) {
                    var n, r, o, i, s
                    let { x: c, y: u, rects: h, middlewareData: m, placement: g, platform: b, elements: O } = t,
                        { alignment: S = null, allowedPlacements: T = _i, autoAlignment: F = !0, ...B } = e,
                        L = Pi(S, F, T),
                        K = await En(t, B),
                        W = (n = (r = m.autoPlacement) == null ? void 0 : r.index) != null ? n : 0,
                        he = L[W]
                    if (he == null) return {}
                    let { main: ee, cross: Z } = No(he, h, await (b.isRTL == null ? void 0 : b.isRTL(O.floating)))
                    if (g !== he) return { x: c, y: u, reset: { placement: L[0] } }
                    let de = [K[wt(he)], K[ee], K[Z]],
                        N = [
                            ...((o = (i = m.autoPlacement) == null ? void 0 : i.overflows) != null ? o : []),
                            { placement: he, overflows: de },
                        ],
                        ae = L[W + 1]
                    if (ae) return { data: { index: W + 1, overflows: N }, reset: { placement: ae } }
                    let ue = N.slice().sort((ve, We) => ve.overflows[0] - We.overflows[0]),
                        Ce =
                            (s = ue.find((ve) => {
                                let { overflows: We } = ve
                                return We.every((Le) => Le <= 0)
                            })) == null
                                ? void 0
                                : s.placement,
                        pe = Ce ?? ue[0].placement
                    return pe !== g ? { data: { index: W + 1, overflows: N }, reset: { placement: pe } } : {}
                },
            }
        )
    }
    function Mi(e) {
        let t = lr(e)
        return [Xr(e), t, Xr(t)]
    }
    var jo = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: 'flip',
                options: e,
                async fn(t) {
                    var n
                    let {
                            placement: r,
                            middlewareData: o,
                            rects: i,
                            initialPlacement: s,
                            platform: c,
                            elements: u,
                        } = t,
                        {
                            mainAxis: h = !0,
                            crossAxis: m = !0,
                            fallbackPlacements: g,
                            fallbackStrategy: b = 'bestFit',
                            flipAlignment: O = !0,
                            ...S
                        } = e,
                        T = wt(r),
                        B = g || (T === s || !O ? [lr(s)] : Mi(s)),
                        L = [s, ...B],
                        K = await En(t, S),
                        W = [],
                        he = ((n = o.flip) == null ? void 0 : n.overflows) || []
                    if ((h && W.push(K[T]), m)) {
                        let { main: N, cross: ae } = No(r, i, await (c.isRTL == null ? void 0 : c.isRTL(u.floating)))
                        W.push(K[N], K[ae])
                    }
                    if (((he = [...he, { placement: r, overflows: W }]), !W.every((N) => N <= 0))) {
                        var ee, Z
                        let N = ((ee = (Z = o.flip) == null ? void 0 : Z.index) != null ? ee : 0) + 1,
                            ae = L[N]
                        if (ae) return { data: { index: N, overflows: he }, reset: { placement: ae } }
                        let ue = 'bottom'
                        switch (b) {
                            case 'bestFit': {
                                var de
                                let Ce =
                                    (de = he
                                        .map((pe) => [
                                            pe,
                                            pe.overflows.filter((ve) => ve > 0).reduce((ve, We) => ve + We, 0),
                                        ])
                                        .sort((pe, ve) => pe[1] - ve[1])[0]) == null
                                        ? void 0
                                        : de[0].placement
                                Ce && (ue = Ce)
                                break
                            }
                            case 'initialPlacement':
                                ue = s
                                break
                        }
                        if (r !== ue) return { reset: { placement: ue } }
                    }
                    return {}
                },
            }
        )
    }
    function Oo(e, t) {
        return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width }
    }
    function So(e) {
        return ko.some((t) => e[t] >= 0)
    }
    var Fo = function (e) {
        let { strategy: t = 'referenceHidden', ...n } = e === void 0 ? {} : e
        return {
            name: 'hide',
            async fn(r) {
                let { rects: o } = r
                switch (t) {
                    case 'referenceHidden': {
                        let i = await En(r, { ...n, elementContext: 'reference' }),
                            s = Oo(i, o.reference)
                        return { data: { referenceHiddenOffsets: s, referenceHidden: So(s) } }
                    }
                    case 'escaped': {
                        let i = await En(r, { ...n, altBoundary: !0 }),
                            s = Oo(i, o.floating)
                        return { data: { escapedOffsets: s, escaped: So(s) } }
                    }
                    default:
                        return {}
                }
            },
        }
    }
    function Ri(e, t, n, r) {
        r === void 0 && (r = !1)
        let o = wt(e),
            i = ln(e),
            s = xn(e) === 'x',
            c = ['left', 'top'].includes(o) ? -1 : 1,
            u = r && s ? -1 : 1,
            h = typeof n == 'function' ? n({ ...t, placement: e }) : n,
            {
                mainAxis: m,
                crossAxis: g,
                alignmentAxis: b,
            } = typeof h == 'number'
                ? { mainAxis: h, crossAxis: 0, alignmentAxis: null }
                : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...h }
        return (
            i && typeof b == 'number' && (g = i === 'end' ? b * -1 : b),
            s ? { x: g * u, y: m * c } : { x: m * c, y: g * u }
        )
    }
    var Bo = function (e) {
        return (
            e === void 0 && (e = 0),
            {
                name: 'offset',
                options: e,
                async fn(t) {
                    let { x: n, y: r, placement: o, rects: i, platform: s, elements: c } = t,
                        u = Ri(o, i, e, await (s.isRTL == null ? void 0 : s.isRTL(c.floating)))
                    return { x: n + u.x, y: r + u.y, data: u }
                },
            }
        )
    }
    function Ii(e) {
        return e === 'x' ? 'y' : 'x'
    }
    var Ho = function (e) {
            return (
                e === void 0 && (e = {}),
                {
                    name: 'shift',
                    options: e,
                    async fn(t) {
                        let { x: n, y: r, placement: o } = t,
                            {
                                mainAxis: i = !0,
                                crossAxis: s = !1,
                                limiter: c = {
                                    fn: (F) => {
                                        let { x: B, y: L } = F
                                        return { x: B, y: L }
                                    },
                                },
                                ...u
                            } = e,
                            h = { x: n, y: r },
                            m = await En(t, u),
                            g = xn(wt(o)),
                            b = Ii(g),
                            O = h[g],
                            S = h[b]
                        if (i) {
                            let F = g === 'y' ? 'top' : 'left',
                                B = g === 'y' ? 'bottom' : 'right',
                                L = O + m[F],
                                K = O - m[B]
                            O = Ur(L, O, K)
                        }
                        if (s) {
                            let F = b === 'y' ? 'top' : 'left',
                                B = b === 'y' ? 'bottom' : 'right',
                                L = S + m[F],
                                K = S - m[B]
                            S = Ur(L, S, K)
                        }
                        let T = c.fn({ ...t, [g]: O, [b]: S })
                        return { ...T, data: { x: T.x - n, y: T.y - r } }
                    },
                }
            )
        },
        $o = function (e) {
            return (
                e === void 0 && (e = {}),
                {
                    name: 'size',
                    options: e,
                    async fn(t) {
                        let { placement: n, rects: r, platform: o, elements: i } = t,
                            { apply: s, ...c } = e,
                            u = await En(t, c),
                            h = wt(n),
                            m = ln(n),
                            g,
                            b
                        h === 'top' || h === 'bottom'
                            ? ((g = h),
                              (b =
                                  m === ((await (o.isRTL == null ? void 0 : o.isRTL(i.floating))) ? 'start' : 'end')
                                      ? 'left'
                                      : 'right'))
                            : ((b = h), (g = m === 'end' ? 'top' : 'bottom'))
                        let O = qt(u.left, 0),
                            S = qt(u.right, 0),
                            T = qt(u.top, 0),
                            F = qt(u.bottom, 0),
                            B = {
                                height:
                                    r.floating.height -
                                    (['left', 'right'].includes(n)
                                        ? 2 * (T !== 0 || F !== 0 ? T + F : qt(u.top, u.bottom))
                                        : u[g]),
                                width:
                                    r.floating.width -
                                    (['top', 'bottom'].includes(n)
                                        ? 2 * (O !== 0 || S !== 0 ? O + S : qt(u.left, u.right))
                                        : u[b]),
                            },
                            L = await o.getDimensions(i.floating)
                        s?.({ ...B, ...r })
                        let K = await o.getDimensions(i.floating)
                        return L.width !== K.width || L.height !== K.height ? { reset: { rects: !0 } } : {}
                    },
                }
            )
        },
        Wo = function (e) {
            return (
                e === void 0 && (e = {}),
                {
                    name: 'inline',
                    options: e,
                    async fn(t) {
                        var n
                        let { placement: r, elements: o, rects: i, platform: s, strategy: c } = t,
                            { padding: u = 2, x: h, y: m } = e,
                            g = Bn(
                                s.convertOffsetParentRelativeRectToViewportRelativeRect
                                    ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
                                          rect: i.reference,
                                          offsetParent: await (s.getOffsetParent == null
                                              ? void 0
                                              : s.getOffsetParent(o.floating)),
                                          strategy: c,
                                      })
                                    : i.reference,
                            ),
                            b =
                                (n = await (s.getClientRects == null ? void 0 : s.getClientRects(o.reference))) != null
                                    ? n
                                    : [],
                            O = qr(u)
                        function S() {
                            if (b.length === 2 && b[0].left > b[1].right && h != null && m != null) {
                                var F
                                return (F = b.find(
                                    (B) =>
                                        h > B.left - O.left &&
                                        h < B.right + O.right &&
                                        m > B.top - O.top &&
                                        m < B.bottom + O.bottom,
                                )) != null
                                    ? F
                                    : g
                            }
                            if (b.length >= 2) {
                                if (xn(r) === 'x') {
                                    let ue = b[0],
                                        Ce = b[b.length - 1],
                                        pe = wt(r) === 'top',
                                        ve = ue.top,
                                        We = Ce.bottom,
                                        Le = pe ? ue.left : Ce.left,
                                        Te = pe ? ue.right : Ce.right,
                                        tt = Te - Le,
                                        Nt = We - ve
                                    return {
                                        top: ve,
                                        bottom: We,
                                        left: Le,
                                        right: Te,
                                        width: tt,
                                        height: Nt,
                                        x: Le,
                                        y: ve,
                                    }
                                }
                                let B = wt(r) === 'left',
                                    L = qt(...b.map((ue) => ue.right)),
                                    K = Io(...b.map((ue) => ue.left)),
                                    W = b.filter((ue) => (B ? ue.left === K : ue.right === L)),
                                    he = W[0].top,
                                    ee = W[W.length - 1].bottom,
                                    Z = K,
                                    de = L,
                                    N = de - Z,
                                    ae = ee - he
                                return { top: he, bottom: ee, left: Z, right: de, width: N, height: ae, x: Z, y: he }
                            }
                            return g
                        }
                        let T = await s.getElementRects({
                            reference: { getBoundingClientRect: S },
                            floating: o.floating,
                            strategy: c,
                        })
                        return i.reference.x !== T.reference.x ||
                            i.reference.y !== T.reference.y ||
                            i.reference.width !== T.reference.width ||
                            i.reference.height !== T.reference.height
                            ? { reset: { rects: T } }
                            : {}
                    },
                }
            )
        }
    function Vo(e) {
        return e && e.document && e.location && e.alert && e.setInterval
    }
    function Mt(e) {
        if (e == null) return window
        if (!Vo(e)) {
            let t = e.ownerDocument
            return (t && t.defaultView) || window
        }
        return e
    }
    function Hn(e) {
        return Mt(e).getComputedStyle(e)
    }
    function _t(e) {
        return Vo(e) ? '' : e ? (e.nodeName || '').toLowerCase() : ''
    }
    function Et(e) {
        return e instanceof Mt(e).HTMLElement
    }
    function Gt(e) {
        return e instanceof Mt(e).Element
    }
    function Li(e) {
        return e instanceof Mt(e).Node
    }
    function Kr(e) {
        if (typeof ShadowRoot > 'u') return !1
        let t = Mt(e).ShadowRoot
        return e instanceof t || e instanceof ShadowRoot
    }
    function fr(e) {
        let { overflow: t, overflowX: n, overflowY: r } = Hn(e)
        return /auto|scroll|overlay|hidden/.test(t + r + n)
    }
    function Ni(e) {
        return ['table', 'td', 'th'].includes(_t(e))
    }
    function Uo(e) {
        let t = navigator.userAgent.toLowerCase().includes('firefox'),
            n = Hn(e)
        return (
            n.transform !== 'none' ||
            n.perspective !== 'none' ||
            n.contain === 'paint' ||
            ['transform', 'perspective'].includes(n.willChange) ||
            (t && n.willChange === 'filter') ||
            (t && (n.filter ? n.filter !== 'none' : !1))
        )
    }
    function Xo() {
        return !/^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    }
    var Co = Math.min,
        jn = Math.max,
        cr = Math.round
    function Pt(e, t, n) {
        var r, o, i, s
        t === void 0 && (t = !1), n === void 0 && (n = !1)
        let c = e.getBoundingClientRect(),
            u = 1,
            h = 1
        t &&
            Et(e) &&
            ((u = (e.offsetWidth > 0 && cr(c.width) / e.offsetWidth) || 1),
            (h = (e.offsetHeight > 0 && cr(c.height) / e.offsetHeight) || 1))
        let m = Gt(e) ? Mt(e) : window,
            g = !Xo() && n,
            b = (c.left + (g && (r = (o = m.visualViewport) == null ? void 0 : o.offsetLeft) != null ? r : 0)) / u,
            O = (c.top + (g && (i = (s = m.visualViewport) == null ? void 0 : s.offsetTop) != null ? i : 0)) / h,
            S = c.width / u,
            T = c.height / h
        return { width: S, height: T, top: O, right: b + S, bottom: O + T, left: b, x: b, y: O }
    }
    function Kt(e) {
        return ((Li(e) ? e.ownerDocument : e.document) || window.document).documentElement
    }
    function dr(e) {
        return Gt(e)
            ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
            : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset }
    }
    function zo(e) {
        return Pt(Kt(e)).left + dr(e).scrollLeft
    }
    function ki(e) {
        let t = Pt(e)
        return cr(t.width) !== e.offsetWidth || cr(t.height) !== e.offsetHeight
    }
    function ji(e, t, n) {
        let r = Et(t),
            o = Kt(t),
            i = Pt(e, r && ki(t), n === 'fixed'),
            s = { scrollLeft: 0, scrollTop: 0 },
            c = { x: 0, y: 0 }
        if (r || (!r && n !== 'fixed'))
            if (((_t(t) !== 'body' || fr(o)) && (s = dr(t)), Et(t))) {
                let u = Pt(t, !0)
                ;(c.x = u.x + t.clientLeft), (c.y = u.y + t.clientTop)
            } else o && (c.x = zo(o))
        return { x: i.left + s.scrollLeft - c.x, y: i.top + s.scrollTop - c.y, width: i.width, height: i.height }
    }
    function Yo(e) {
        return _t(e) === 'html' ? e : e.assignedSlot || e.parentNode || (Kr(e) ? e.host : null) || Kt(e)
    }
    function Ao(e) {
        return !Et(e) || getComputedStyle(e).position === 'fixed' ? null : e.offsetParent
    }
    function Fi(e) {
        let t = Yo(e)
        for (Kr(t) && (t = t.host); Et(t) && !['html', 'body'].includes(_t(t)); ) {
            if (Uo(t)) return t
            t = t.parentNode
        }
        return null
    }
    function zr(e) {
        let t = Mt(e),
            n = Ao(e)
        for (; n && Ni(n) && getComputedStyle(n).position === 'static'; ) n = Ao(n)
        return n && (_t(n) === 'html' || (_t(n) === 'body' && getComputedStyle(n).position === 'static' && !Uo(n)))
            ? t
            : n || Fi(e) || t
    }
    function Do(e) {
        if (Et(e)) return { width: e.offsetWidth, height: e.offsetHeight }
        let t = Pt(e)
        return { width: t.width, height: t.height }
    }
    function Bi(e) {
        let { rect: t, offsetParent: n, strategy: r } = e,
            o = Et(n),
            i = Kt(n)
        if (n === i) return t
        let s = { scrollLeft: 0, scrollTop: 0 },
            c = { x: 0, y: 0 }
        if ((o || (!o && r !== 'fixed')) && ((_t(n) !== 'body' || fr(i)) && (s = dr(n)), Et(n))) {
            let u = Pt(n, !0)
            ;(c.x = u.x + n.clientLeft), (c.y = u.y + n.clientTop)
        }
        return { ...t, x: t.x - s.scrollLeft + c.x, y: t.y - s.scrollTop + c.y }
    }
    function Hi(e, t) {
        let n = Mt(e),
            r = Kt(e),
            o = n.visualViewport,
            i = r.clientWidth,
            s = r.clientHeight,
            c = 0,
            u = 0
        if (o) {
            ;(i = o.width), (s = o.height)
            let h = Xo()
            ;(h || (!h && t === 'fixed')) && ((c = o.offsetLeft), (u = o.offsetTop))
        }
        return { width: i, height: s, x: c, y: u }
    }
    function $i(e) {
        var t
        let n = Kt(e),
            r = dr(e),
            o = (t = e.ownerDocument) == null ? void 0 : t.body,
            i = jn(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
            s = jn(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
            c = -r.scrollLeft + zo(e),
            u = -r.scrollTop
        return (
            Hn(o || n).direction === 'rtl' && (c += jn(n.clientWidth, o ? o.clientWidth : 0) - i),
            { width: i, height: s, x: c, y: u }
        )
    }
    function qo(e) {
        let t = Yo(e)
        return ['html', 'body', '#document'].includes(_t(t)) ? e.ownerDocument.body : Et(t) && fr(t) ? t : qo(t)
    }
    function ur(e, t) {
        var n
        t === void 0 && (t = [])
        let r = qo(e),
            o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
            i = Mt(r),
            s = o ? [i].concat(i.visualViewport || [], fr(r) ? r : []) : r,
            c = t.concat(s)
        return o ? c : c.concat(ur(s))
    }
    function Wi(e, t) {
        let n = t == null || t.getRootNode == null ? void 0 : t.getRootNode()
        if (e != null && e.contains(t)) return !0
        if (n && Kr(n)) {
            let r = t
            do {
                if (r && e === r) return !0
                r = r.parentNode || r.host
            } while (r)
        }
        return !1
    }
    function Vi(e, t) {
        let n = Pt(e, !1, t === 'fixed'),
            r = n.top + e.clientTop,
            o = n.left + e.clientLeft
        return {
            top: r,
            left: o,
            x: o,
            y: r,
            right: o + e.clientWidth,
            bottom: r + e.clientHeight,
            width: e.clientWidth,
            height: e.clientHeight,
        }
    }
    function To(e, t, n) {
        return t === 'viewport' ? Bn(Hi(e, n)) : Gt(t) ? Vi(t, n) : Bn($i(Kt(e)))
    }
    function Ui(e) {
        let t = ur(e),
            r = ['absolute', 'fixed'].includes(Hn(e).position) && Et(e) ? zr(e) : e
        return Gt(r) ? t.filter((o) => Gt(o) && Wi(o, r) && _t(o) !== 'body') : []
    }
    function Xi(e) {
        let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
            s = [...(n === 'clippingAncestors' ? Ui(t) : [].concat(n)), r],
            c = s[0],
            u = s.reduce(
                (h, m) => {
                    let g = To(t, m, o)
                    return (
                        (h.top = jn(g.top, h.top)),
                        (h.right = Co(g.right, h.right)),
                        (h.bottom = Co(g.bottom, h.bottom)),
                        (h.left = jn(g.left, h.left)),
                        h
                    )
                },
                To(t, c, o),
            )
        return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top }
    }
    var zi = {
        getClippingRect: Xi,
        convertOffsetParentRelativeRectToViewportRelativeRect: Bi,
        isElement: Gt,
        getDimensions: Do,
        getOffsetParent: zr,
        getDocumentElement: Kt,
        getElementRects: (e) => {
            let { reference: t, floating: n, strategy: r } = e
            return { reference: ji(t, zr(n), r), floating: { ...Do(n), x: 0, y: 0 } }
        },
        getClientRects: (e) => Array.from(e.getClientRects()),
        isRTL: (e) => Hn(e).direction === 'rtl',
    }
    function _o(e, t, n, r) {
        r === void 0 && (r = {})
        let { ancestorScroll: o = !0, ancestorResize: i = !0, elementResize: s = !0, animationFrame: c = !1 } = r,
            u = !1,
            h = o && !c,
            m = i && !c,
            g = s && !c,
            b = h || m ? [...(Gt(e) ? ur(e) : []), ...ur(t)] : []
        b.forEach((B) => {
            h && B.addEventListener('scroll', n, { passive: !0 }), m && B.addEventListener('resize', n)
        })
        let O = null
        g && ((O = new ResizeObserver(n)), Gt(e) && O.observe(e), O.observe(t))
        let S,
            T = c ? Pt(e) : null
        c && F()
        function F() {
            if (u) return
            let B = Pt(e)
            T && (B.x !== T.x || B.y !== T.y || B.width !== T.width || B.height !== T.height) && n(),
                (T = B),
                (S = requestAnimationFrame(F))
        }
        return () => {
            var B
            ;(u = !0),
                b.forEach((L) => {
                    h && L.removeEventListener('scroll', n), m && L.removeEventListener('resize', n)
                }),
                (B = O) == null || B.disconnect(),
                (O = null),
                c && cancelAnimationFrame(S)
        }
    }
    var Po = (e, t, n) => Ci(e, t, { platform: zi, ...n }),
        Yi = (e) => {
            let t = { placement: 'bottom', middleware: [] },
                n = Object.keys(e),
                r = (o) => e[o]
            return (
                n.includes('offset') && t.middleware.push(Bo(r('offset'))),
                n.includes('placement') && (t.placement = r('placement')),
                n.includes('autoPlacement') && !n.includes('flip') && t.middleware.push(Gr(r('autoPlacement'))),
                n.includes('flip') && t.middleware.push(jo(r('flip'))),
                n.includes('shift') && t.middleware.push(Ho(r('shift'))),
                n.includes('inline') && t.middleware.push(Wo(r('inline'))),
                n.includes('arrow') && t.middleware.push(Lo(r('arrow'))),
                n.includes('hide') && t.middleware.push(Fo(r('hide'))),
                n.includes('size') && t.middleware.push($o(r('size'))),
                t
            )
        },
        qi = (e, t) => {
            let n = { component: { trap: !1 }, float: { placement: 'bottom', strategy: 'absolute', middleware: [] } },
                r = (o) => e[e.indexOf(o) + 1]
            return (
                e.includes('trap') && (n.component.trap = !0),
                e.includes('teleport') && (n.float.strategy = 'fixed'),
                e.includes('offset') && n.float.middleware.push(Bo(t.offset || 10)),
                e.includes('placement') && (n.float.placement = r('placement')),
                e.includes('autoPlacement') && !e.includes('flip') && n.float.middleware.push(Gr(t.autoPlacement)),
                e.includes('flip') && n.float.middleware.push(jo(t.flip)),
                e.includes('shift') && n.float.middleware.push(Ho(t.shift)),
                e.includes('inline') && n.float.middleware.push(Wo(t.inline)),
                e.includes('arrow') && n.float.middleware.push(Lo(t.arrow)),
                e.includes('hide') && n.float.middleware.push(Fo(t.hide)),
                e.includes('size') && n.float.middleware.push($o(t.size)),
                n
            )
        },
        Gi = (e) => {
            var t = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split(''),
                n = ''
            e || (e = Math.floor(Math.random() * t.length))
            for (var r = 0; r < e; r++) n += t[Math.floor(Math.random() * t.length)]
            return n
        },
        Ki = [],
        Ji = [],
        Qi = []
    function Zi(e, t) {
        e._x_attributeCleanups &&
            Object.entries(e._x_attributeCleanups).forEach(([n, r]) => {
                ;(t === void 0 || t.includes(n)) && (r.forEach((o) => o()), delete e._x_attributeCleanups[n])
            })
    }
    var Jr = new MutationObserver(Go),
        Qr = !1
    function ea() {
        Jr.observe(document, { subtree: !0, childList: !0, attributes: !0, attributeOldValue: !0 }), (Qr = !0)
    }
    function ta() {
        na(), Jr.disconnect(), (Qr = !1)
    }
    var Fn = [],
        Vr = !1
    function na() {
        ;(Fn = Fn.concat(Jr.takeRecords())),
            Fn.length &&
                !Vr &&
                ((Vr = !0),
                queueMicrotask(() => {
                    ra(), (Vr = !1)
                }))
    }
    function ra() {
        Go(Fn), (Fn.length = 0)
    }
    function Mo(e) {
        if (!Qr) return e()
        ta()
        let t = e()
        return ea(), t
    }
    var oa = !1,
        Ro = []
    function Go(e) {
        if (oa) {
            Ro = Ro.concat(e)
            return
        }
        let t = [],
            n = [],
            r = new Map(),
            o = new Map()
        for (let i = 0; i < e.length; i++)
            if (
                !e[i].target._x_ignoreMutationObserver &&
                (e[i].type === 'childList' &&
                    (e[i].addedNodes.forEach((s) => s.nodeType === 1 && t.push(s)),
                    e[i].removedNodes.forEach((s) => s.nodeType === 1 && n.push(s))),
                e[i].type === 'attributes')
            ) {
                let s = e[i].target,
                    c = e[i].attributeName,
                    u = e[i].oldValue,
                    h = () => {
                        r.has(s) || r.set(s, []), r.get(s).push({ name: c, value: s.getAttribute(c) })
                    },
                    m = () => {
                        o.has(s) || o.set(s, []), o.get(s).push(c)
                    }
                s.hasAttribute(c) && u === null ? h() : s.hasAttribute(c) ? (m(), h()) : m()
            }
        o.forEach((i, s) => {
            Zi(s, i)
        }),
            r.forEach((i, s) => {
                Ki.forEach((c) => c(s, i))
            })
        for (let i of n)
            if (!t.includes(i) && (Ji.forEach((s) => s(i)), i._x_cleanups))
                for (; i._x_cleanups.length; ) i._x_cleanups.pop()()
        t.forEach((i) => {
            ;(i._x_ignoreSelf = !0), (i._x_ignore = !0)
        })
        for (let i of t)
            n.includes(i) ||
                (i.isConnected &&
                    (delete i._x_ignoreSelf,
                    delete i._x_ignore,
                    Qi.forEach((s) => s(i)),
                    (i._x_ignore = !0),
                    (i._x_ignoreSelf = !0)))
        t.forEach((i) => {
            delete i._x_ignoreSelf, delete i._x_ignore
        }),
            (t = null),
            (n = null),
            (r = null),
            (o = null)
    }
    function ia(e, t = () => {}) {
        let n = !1
        return function () {
            n ? t.apply(this, arguments) : ((n = !0), e.apply(this, arguments))
        }
    }
    function aa(e) {
        let t = { dismissable: !0, trap: !1 }
        function n(i, s, c = null) {
            if (s) {
                if ((s.hasAttribute('aria-expanded') || s.setAttribute('aria-expanded', !1), c.hasAttribute('id')))
                    s.setAttribute('aria-controls', c.getAttribute('id'))
                else {
                    let u = `panel-${Gi(8)}`
                    s.setAttribute('aria-controls', u), c.setAttribute('id', u)
                }
                c.setAttribute('aria-modal', !0), c.setAttribute('role', 'dialog')
            }
        }
        let r = document.querySelectorAll('[\\@click^="$float"]'),
            o = document.querySelectorAll('[x-on\\:click^="$float"]')
        ;[...r, ...o].forEach((i) => {
            let s = i.parentElement.closest('[x-data]'),
                c = s.querySelector('[x-ref="panel"]')
            n(s, i, c)
        }),
            e.magic('float', (i) => (s = {}, c = {}) => {
                let u = { ...t, ...c },
                    h = Object.keys(s).length > 0 ? Yi(s) : { middleware: [Gr()] },
                    m = i,
                    g = i.parentElement.closest('[x-data]'),
                    b = g.querySelector('[x-ref="panel"]')
                function O() {
                    return b.style.display == 'block'
                }
                function S() {
                    ;(b.style.display = ''),
                        m.setAttribute('aria-expanded', !1),
                        u.trap && b.setAttribute('x-trap', !1),
                        _o(i, b, B)
                }
                function T() {
                    ;(b.style.display = 'block'),
                        m.setAttribute('aria-expanded', !0),
                        u.trap && b.setAttribute('x-trap', !0),
                        B()
                }
                function F() {
                    O() ? S() : T()
                }
                async function B() {
                    return await Po(i, b, h).then(({ middlewareData: L, placement: K, x: W, y: he }) => {
                        if (L.arrow) {
                            let ee = L.arrow?.x,
                                Z = L.arrow?.y,
                                de = h.middleware.filter((ae) => ae.name == 'arrow')[0].options.element,
                                N = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' }[K.split('-')[0]]
                            Object.assign(de.style, {
                                left: ee != null ? `${ee}px` : '',
                                top: Z != null ? `${Z}px` : '',
                                right: '',
                                bottom: '',
                                [N]: '-4px',
                            })
                        }
                        if (L.hide) {
                            let { referenceHidden: ee } = L.hide
                            Object.assign(b.style, { visibility: ee ? 'hidden' : 'visible' })
                        }
                        Object.assign(b.style, { left: `${W}px`, top: `${he}px` })
                    })
                }
                u.dismissable &&
                    (window.addEventListener('click', (L) => {
                        !g.contains(L.target) && O() && F()
                    }),
                    window.addEventListener(
                        'keydown',
                        (L) => {
                            L.key === 'Escape' && O() && F()
                        },
                        !0,
                    )),
                    F()
            }),
            e.directive('float', (i, { modifiers: s, expression: c }, { evaluate: u, effect: h }) => {
                let m = c ? u(c) : {},
                    g = s.length > 0 ? qi(s, m) : {},
                    b = null
                g.float.strategy == 'fixed' && (i.style.position = 'fixed')
                let O = (N) =>
                        i.parentElement && !i.parentElement.closest('[x-data]').contains(N.target) ? i.close() : null,
                    S = (N) => (N.key === 'Escape' ? i.close() : null),
                    T = i.getAttribute('x-ref'),
                    F = i.parentElement.closest('[x-data]'),
                    B = F.querySelectorAll(`[\\@click^="$refs.${T}"]`),
                    L = F.querySelectorAll(`[x-on\\:click^="$refs.${T}"]`)
                i.style.setProperty('display', 'none'),
                    n(F, [...B, ...L][0], i),
                    (i._x_isShown = !1),
                    (i.trigger = null),
                    i._x_doHide ||
                        (i._x_doHide = () => {
                            Mo(() => {
                                i.style.setProperty('display', 'none', s.includes('important') ? 'important' : void 0)
                            })
                        }),
                    i._x_doShow ||
                        (i._x_doShow = () => {
                            Mo(() => {
                                i.style.setProperty('display', 'block', s.includes('important') ? 'important' : void 0)
                            })
                        })
                let K = () => {
                        i._x_doHide(), (i._x_isShown = !1)
                    },
                    W = () => {
                        i._x_doShow(), (i._x_isShown = !0)
                    },
                    he = () => setTimeout(W),
                    ee = ia(
                        (N) => (N ? W() : K()),
                        (N) => {
                            typeof i._x_toggleAndCascadeWithTransitions == 'function'
                                ? i._x_toggleAndCascadeWithTransitions(i, N, W, K)
                                : N
                                  ? he()
                                  : K()
                        },
                    ),
                    Z,
                    de = !0
                h(() =>
                    u((N) => {
                        ;(!de && N === Z) || (s.includes('immediate') && (N ? he() : K()), ee(N), (Z = N), (de = !1))
                    }),
                ),
                    (i.open = async function (N) {
                        ;(i.trigger = N.currentTarget ? N.currentTarget : N),
                            ee(!0),
                            i.trigger.setAttribute('aria-expanded', !0),
                            g.component.trap && i.setAttribute('x-trap', !0),
                            (b = _o(i.trigger, i, () => {
                                Po(i.trigger, i, g.float).then(
                                    ({ middlewareData: ae, placement: ue, x: Ce, y: pe }) => {
                                        if (ae.arrow) {
                                            let ve = ae.arrow?.x,
                                                We = ae.arrow?.y,
                                                Le = g.float.middleware.filter((tt) => tt.name == 'arrow')[0].options
                                                    .element,
                                                Te = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' }[
                                                    ue.split('-')[0]
                                                ]
                                            Object.assign(Le.style, {
                                                left: ve != null ? `${ve}px` : '',
                                                top: We != null ? `${We}px` : '',
                                                right: '',
                                                bottom: '',
                                                [Te]: '-4px',
                                            })
                                        }
                                        if (ae.hide) {
                                            let { referenceHidden: ve } = ae.hide
                                            Object.assign(i.style, { visibility: ve ? 'hidden' : 'visible' })
                                        }
                                        Object.assign(i.style, { left: `${Ce}px`, top: `${pe}px` })
                                    },
                                )
                            })),
                            window.addEventListener('click', O),
                            window.addEventListener('keydown', S, !0)
                    }),
                    (i.close = function () {
                        ee(!1),
                            i.trigger.setAttribute('aria-expanded', !1),
                            g.component.trap && i.setAttribute('x-trap', !1),
                            b(),
                            window.removeEventListener('click', O),
                            window.removeEventListener('keydown', S, !1)
                    }),
                    (i.toggle = function (N) {
                        i._x_isShown ? i.close() : i.open(N)
                    })
            })
    }
    var Ko = aa
    function sa(e) {
        e.store('lazyLoadedAssets', {
            loaded: new Set(),
            check(o) {
                return Array.isArray(o) ? o.every((i) => this.loaded.has(i)) : this.loaded.has(o)
            },
            markLoaded(o) {
                Array.isArray(o) ? o.forEach((i) => this.loaded.add(i)) : this.loaded.add(o)
            },
        })
        function t(o) {
            return new CustomEvent(o, { bubbles: !0, composed: !0, cancelable: !0 })
        }
        async function n(o, i) {
            if (document.querySelector(`link[href="${o}"]`) || e.store('lazyLoadedAssets').check(o)) return
            let s = document.createElement('link')
            ;(s.type = 'text/css'),
                (s.rel = 'stylesheet'),
                (s.href = o),
                i && (s.media = i),
                document.head.append(s),
                await new Promise((c, u) => {
                    ;(s.onload = () => {
                        e.store('lazyLoadedAssets').markLoaded(o), c()
                    }),
                        (s.onerror = () => {
                            u(new Error(`Failed to load CSS: ${o}`))
                        })
                })
        }
        async function r(o, i) {
            if (document.querySelector(`script[src="${o}"]`) || e.store('lazyLoadedAssets').check(o)) return
            let s = document.createElement('script')
            ;(s.src = o),
                i.has('body-start')
                    ? document.body.prepend(s)
                    : document[i.has('body-end') ? 'body' : 'head'].append(s),
                await new Promise((c, u) => {
                    ;(s.onload = () => {
                        e.store('lazyLoadedAssets').markLoaded(o), c()
                    }),
                        (s.onerror = () => {
                            u(new Error(`Failed to load JS: ${o}`))
                        })
                })
        }
        e.directive('load-css', (o, { expression: i }, { evaluate: s }) => {
            let c = s(i),
                u = o.media,
                h = o.getAttribute('data-dispatch')
            Promise.all(c.map((m) => n(m, u)))
                .then(() => {
                    h && window.dispatchEvent(t(h + '-css'))
                })
                .catch((m) => {
                    console.error(m)
                })
        }),
            e.directive('load-js', (o, { expression: i, modifiers: s }, { evaluate: c }) => {
                let u = c(i),
                    h = new Set(s),
                    m = o.getAttribute('data-dispatch')
                Promise.all(u.map((g) => r(g, h)))
                    .then(() => {
                        m && window.dispatchEvent(t(m + '-js'))
                    })
                    .catch((g) => {
                        console.error(g)
                    })
            })
    }
    var Jo = sa
    function Qo(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e)
            t &&
                (r = r.filter(function (o) {
                    return Object.getOwnPropertyDescriptor(e, o).enumerable
                })),
                n.push.apply(n, r)
        }
        return n
    }
    function St(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t] != null ? arguments[t] : {}
            t % 2
                ? Qo(Object(n), !0).forEach(function (r) {
                      la(e, r, n[r])
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                  : Qo(Object(n)).forEach(function (r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
                    })
        }
        return e
    }
    function mr(e) {
        '@babel/helpers - typeof'
        return (
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? (mr = function (t) {
                      return typeof t
                  })
                : (mr = function (t) {
                      return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t
                  }),
            mr(e)
        )
    }
    function la(e, t, n) {
        return (
            t in e
                ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
                : (e[t] = n),
            e
        )
    }
    function It() {
        return (
            (It =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t]
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }),
            It.apply(this, arguments)
        )
    }
    function ca(e, t) {
        if (e == null) return {}
        var n = {},
            r = Object.keys(e),
            o,
            i
        for (i = 0; i < r.length; i++) (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o])
        return n
    }
    function ua(e, t) {
        if (e == null) return {}
        var n = ca(e, t),
            r,
            o
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e)
            for (o = 0; o < i.length; o++)
                (r = i[o]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
        }
        return n
    }
    var fa = '1.15.0'
    function Rt(e) {
        if (typeof window < 'u' && window.navigator) return !!navigator.userAgent.match(e)
    }
    var Lt = Rt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
        Gn = Rt(/Edge/i),
        Zo = Rt(/firefox/i),
        Un = Rt(/safari/i) && !Rt(/chrome/i) && !Rt(/android/i),
        si = Rt(/iP(ad|od|hone)/i),
        li = Rt(/chrome/i) && Rt(/android/i),
        ci = { capture: !1, passive: !1 }
    function we(e, t, n) {
        e.addEventListener(t, n, !Lt && ci)
    }
    function me(e, t, n) {
        e.removeEventListener(t, n, !Lt && ci)
    }
    function xr(e, t) {
        if (t) {
            if ((t[0] === '>' && (t = t.substring(1)), e))
                try {
                    if (e.matches) return e.matches(t)
                    if (e.msMatchesSelector) return e.msMatchesSelector(t)
                    if (e.webkitMatchesSelector) return e.webkitMatchesSelector(t)
                } catch {
                    return !1
                }
            return !1
        }
    }
    function da(e) {
        return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode
    }
    function xt(e, t, n, r) {
        if (e) {
            n = n || document
            do {
                if ((t != null && (t[0] === '>' ? e.parentNode === n && xr(e, t) : xr(e, t))) || (r && e === n))
                    return e
                if (e === n) break
            } while ((e = da(e)))
        }
        return null
    }
    var ei = /\s+/g
    function it(e, t, n) {
        if (e && t)
            if (e.classList) e.classList[n ? 'add' : 'remove'](t)
            else {
                var r = (' ' + e.className + ' ').replace(ei, ' ').replace(' ' + t + ' ', ' ')
                e.className = (r + (n ? ' ' + t : '')).replace(ei, ' ')
            }
    }
    function Y(e, t, n) {
        var r = e && e.style
        if (r) {
            if (n === void 0)
                return (
                    document.defaultView && document.defaultView.getComputedStyle
                        ? (n = document.defaultView.getComputedStyle(e, ''))
                        : e.currentStyle && (n = e.currentStyle),
                    t === void 0 ? n : n[t]
                )
            !(t in r) && t.indexOf('webkit') === -1 && (t = '-webkit-' + t),
                (r[t] = n + (typeof n == 'string' ? '' : 'px'))
        }
    }
    function Dn(e, t) {
        var n = ''
        if (typeof e == 'string') n = e
        else
            do {
                var r = Y(e, 'transform')
                r && r !== 'none' && (n = r + ' ' + n)
            } while (!t && (e = e.parentNode))
        var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix
        return o && new o(n)
    }
    function ui(e, t, n) {
        if (e) {
            var r = e.getElementsByTagName(t),
                o = 0,
                i = r.length
            if (n) for (; o < i; o++) n(r[o], o)
            return r
        }
        return []
    }
    function Ot() {
        var e = document.scrollingElement
        return e || document.documentElement
    }
    function qe(e, t, n, r, o) {
        if (!(!e.getBoundingClientRect && e !== window)) {
            var i, s, c, u, h, m, g
            if (
                (e !== window && e.parentNode && e !== Ot()
                    ? ((i = e.getBoundingClientRect()),
                      (s = i.top),
                      (c = i.left),
                      (u = i.bottom),
                      (h = i.right),
                      (m = i.height),
                      (g = i.width))
                    : ((s = 0),
                      (c = 0),
                      (u = window.innerHeight),
                      (h = window.innerWidth),
                      (m = window.innerHeight),
                      (g = window.innerWidth)),
                (t || n) && e !== window && ((o = o || e.parentNode), !Lt))
            )
                do
                    if (
                        o &&
                        o.getBoundingClientRect &&
                        (Y(o, 'transform') !== 'none' || (n && Y(o, 'position') !== 'static'))
                    ) {
                        var b = o.getBoundingClientRect()
                        ;(s -= b.top + parseInt(Y(o, 'border-top-width'))),
                            (c -= b.left + parseInt(Y(o, 'border-left-width'))),
                            (u = s + i.height),
                            (h = c + i.width)
                        break
                    }
                while ((o = o.parentNode))
            if (r && e !== window) {
                var O = Dn(o || e),
                    S = O && O.a,
                    T = O && O.d
                O && ((s /= T), (c /= S), (g /= S), (m /= T), (u = s + m), (h = c + g))
            }
            return { top: s, left: c, bottom: u, right: h, width: g, height: m }
        }
    }
    function ti(e, t, n) {
        for (var r = Zt(e, !0), o = qe(e)[t]; r; ) {
            var i = qe(r)[n],
                s = void 0
            if ((n === 'top' || n === 'left' ? (s = o >= i) : (s = o <= i), !s)) return r
            if (r === Ot()) break
            r = Zt(r, !1)
        }
        return !1
    }
    function Tn(e, t, n, r) {
        for (var o = 0, i = 0, s = e.children; i < s.length; ) {
            if (
                s[i].style.display !== 'none' &&
                s[i] !== q.ghost &&
                (r || s[i] !== q.dragged) &&
                xt(s[i], n.draggable, e, !1)
            ) {
                if (o === t) return s[i]
                o++
            }
            i++
        }
        return null
    }
    function po(e, t) {
        for (var n = e.lastElementChild; n && (n === q.ghost || Y(n, 'display') === 'none' || (t && !xr(n, t))); )
            n = n.previousElementSibling
        return n || null
    }
    function ct(e, t) {
        var n = 0
        if (!e || !e.parentNode) return -1
        for (; (e = e.previousElementSibling); )
            e.nodeName.toUpperCase() !== 'TEMPLATE' && e !== q.clone && (!t || xr(e, t)) && n++
        return n
    }
    function ni(e) {
        var t = 0,
            n = 0,
            r = Ot()
        if (e)
            do {
                var o = Dn(e),
                    i = o.a,
                    s = o.d
                ;(t += e.scrollLeft * i), (n += e.scrollTop * s)
            } while (e !== r && (e = e.parentNode))
        return [t, n]
    }
    function pa(e, t) {
        for (var n in e)
            if (e.hasOwnProperty(n)) {
                for (var r in t) if (t.hasOwnProperty(r) && t[r] === e[n][r]) return Number(n)
            }
        return -1
    }
    function Zt(e, t) {
        if (!e || !e.getBoundingClientRect) return Ot()
        var n = e,
            r = !1
        do
            if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
                var o = Y(n)
                if (
                    (n.clientWidth < n.scrollWidth && (o.overflowX == 'auto' || o.overflowX == 'scroll')) ||
                    (n.clientHeight < n.scrollHeight && (o.overflowY == 'auto' || o.overflowY == 'scroll'))
                ) {
                    if (!n.getBoundingClientRect || n === document.body) return Ot()
                    if (r || t) return n
                    r = !0
                }
            }
        while ((n = n.parentNode))
        return Ot()
    }
    function ha(e, t) {
        if (e && t) for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        return e
    }
    function Zr(e, t) {
        return (
            Math.round(e.top) === Math.round(t.top) &&
            Math.round(e.left) === Math.round(t.left) &&
            Math.round(e.height) === Math.round(t.height) &&
            Math.round(e.width) === Math.round(t.width)
        )
    }
    var Xn
    function fi(e, t) {
        return function () {
            if (!Xn) {
                var n = arguments,
                    r = this
                n.length === 1 ? e.call(r, n[0]) : e.apply(r, n),
                    (Xn = setTimeout(function () {
                        Xn = void 0
                    }, t))
            }
        }
    }
    function va() {
        clearTimeout(Xn), (Xn = void 0)
    }
    function di(e, t, n) {
        ;(e.scrollLeft += t), (e.scrollTop += n)
    }
    function pi(e) {
        var t = window.Polymer,
            n = window.jQuery || window.Zepto
        return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0)
    }
    var st = 'Sortable' + new Date().getTime()
    function ga() {
        var e = [],
            t
        return {
            captureAnimationState: function () {
                if (((e = []), !!this.options.animation)) {
                    var r = [].slice.call(this.el.children)
                    r.forEach(function (o) {
                        if (!(Y(o, 'display') === 'none' || o === q.ghost)) {
                            e.push({ target: o, rect: qe(o) })
                            var i = St({}, e[e.length - 1].rect)
                            if (o.thisAnimationDuration) {
                                var s = Dn(o, !0)
                                s && ((i.top -= s.f), (i.left -= s.e))
                            }
                            o.fromRect = i
                        }
                    })
                }
            },
            addAnimationState: function (r) {
                e.push(r)
            },
            removeAnimationState: function (r) {
                e.splice(pa(e, { target: r }), 1)
            },
            animateAll: function (r) {
                var o = this
                if (!this.options.animation) {
                    clearTimeout(t), typeof r == 'function' && r()
                    return
                }
                var i = !1,
                    s = 0
                e.forEach(function (c) {
                    var u = 0,
                        h = c.target,
                        m = h.fromRect,
                        g = qe(h),
                        b = h.prevFromRect,
                        O = h.prevToRect,
                        S = c.rect,
                        T = Dn(h, !0)
                    T && ((g.top -= T.f), (g.left -= T.e)),
                        (h.toRect = g),
                        h.thisAnimationDuration &&
                            Zr(b, g) &&
                            !Zr(m, g) &&
                            (S.top - g.top) / (S.left - g.left) === (m.top - g.top) / (m.left - g.left) &&
                            (u = ba(S, b, O, o.options)),
                        Zr(g, m) ||
                            ((h.prevFromRect = m),
                            (h.prevToRect = g),
                            u || (u = o.options.animation),
                            o.animate(h, S, g, u)),
                        u &&
                            ((i = !0),
                            (s = Math.max(s, u)),
                            clearTimeout(h.animationResetTimer),
                            (h.animationResetTimer = setTimeout(function () {
                                ;(h.animationTime = 0),
                                    (h.prevFromRect = null),
                                    (h.fromRect = null),
                                    (h.prevToRect = null),
                                    (h.thisAnimationDuration = null)
                            }, u)),
                            (h.thisAnimationDuration = u))
                }),
                    clearTimeout(t),
                    i
                        ? (t = setTimeout(function () {
                              typeof r == 'function' && r()
                          }, s))
                        : typeof r == 'function' && r(),
                    (e = [])
            },
            animate: function (r, o, i, s) {
                if (s) {
                    Y(r, 'transition', ''), Y(r, 'transform', '')
                    var c = Dn(this.el),
                        u = c && c.a,
                        h = c && c.d,
                        m = (o.left - i.left) / (u || 1),
                        g = (o.top - i.top) / (h || 1)
                    ;(r.animatingX = !!m),
                        (r.animatingY = !!g),
                        Y(r, 'transform', 'translate3d(' + m + 'px,' + g + 'px,0)'),
                        (this.forRepaintDummy = ma(r)),
                        Y(
                            r,
                            'transition',
                            'transform ' + s + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''),
                        ),
                        Y(r, 'transform', 'translate3d(0,0,0)'),
                        typeof r.animated == 'number' && clearTimeout(r.animated),
                        (r.animated = setTimeout(function () {
                            Y(r, 'transition', ''),
                                Y(r, 'transform', ''),
                                (r.animated = !1),
                                (r.animatingX = !1),
                                (r.animatingY = !1)
                        }, s))
                }
            },
        }
    }
    function ma(e) {
        return e.offsetWidth
    }
    function ba(e, t, n, r) {
        return (
            (Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) /
                Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2))) *
            r.animation
        )
    }
    var On = [],
        eo = { initializeByDefault: !0 },
        Kn = {
            mount: function (t) {
                for (var n in eo) eo.hasOwnProperty(n) && !(n in t) && (t[n] = eo[n])
                On.forEach(function (r) {
                    if (r.pluginName === t.pluginName)
                        throw 'Sortable: Cannot mount plugin '.concat(t.pluginName, ' more than once')
                }),
                    On.push(t)
            },
            pluginEvent: function (t, n, r) {
                var o = this
                ;(this.eventCanceled = !1),
                    (r.cancel = function () {
                        o.eventCanceled = !0
                    })
                var i = t + 'Global'
                On.forEach(function (s) {
                    n[s.pluginName] &&
                        (n[s.pluginName][i] && n[s.pluginName][i](St({ sortable: n }, r)),
                        n.options[s.pluginName] && n[s.pluginName][t] && n[s.pluginName][t](St({ sortable: n }, r)))
                })
            },
            initializePlugins: function (t, n, r, o) {
                On.forEach(function (c) {
                    var u = c.pluginName
                    if (!(!t.options[u] && !c.initializeByDefault)) {
                        var h = new c(t, n, t.options)
                        ;(h.sortable = t), (h.options = t.options), (t[u] = h), It(r, h.defaults)
                    }
                })
                for (var i in t.options)
                    if (t.options.hasOwnProperty(i)) {
                        var s = this.modifyOption(t, i, t.options[i])
                        typeof s < 'u' && (t.options[i] = s)
                    }
            },
            getEventProperties: function (t, n) {
                var r = {}
                return (
                    On.forEach(function (o) {
                        typeof o.eventProperties == 'function' && It(r, o.eventProperties.call(n[o.pluginName], t))
                    }),
                    r
                )
            },
            modifyOption: function (t, n, r) {
                var o
                return (
                    On.forEach(function (i) {
                        t[i.pluginName] &&
                            i.optionListeners &&
                            typeof i.optionListeners[n] == 'function' &&
                            (o = i.optionListeners[n].call(t[i.pluginName], r))
                    }),
                    o
                )
            },
        }
    function ya(e) {
        var t = e.sortable,
            n = e.rootEl,
            r = e.name,
            o = e.targetEl,
            i = e.cloneEl,
            s = e.toEl,
            c = e.fromEl,
            u = e.oldIndex,
            h = e.newIndex,
            m = e.oldDraggableIndex,
            g = e.newDraggableIndex,
            b = e.originalEvent,
            O = e.putSortable,
            S = e.extraEventProperties
        if (((t = t || (n && n[st])), !!t)) {
            var T,
                F = t.options,
                B = 'on' + r.charAt(0).toUpperCase() + r.substr(1)
            window.CustomEvent && !Lt && !Gn
                ? (T = new CustomEvent(r, { bubbles: !0, cancelable: !0 }))
                : ((T = document.createEvent('Event')), T.initEvent(r, !0, !0)),
                (T.to = s || n),
                (T.from = c || n),
                (T.item = o || n),
                (T.clone = i),
                (T.oldIndex = u),
                (T.newIndex = h),
                (T.oldDraggableIndex = m),
                (T.newDraggableIndex = g),
                (T.originalEvent = b),
                (T.pullMode = O ? O.lastPutMode : void 0)
            var L = St(St({}, S), Kn.getEventProperties(r, t))
            for (var K in L) T[K] = L[K]
            n && n.dispatchEvent(T), F[B] && F[B].call(t, T)
        }
    }
    var wa = ['evt'],
        rt = function (t, n) {
            var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                o = r.evt,
                i = ua(r, wa)
            Kn.pluginEvent.bind(q)(
                t,
                n,
                St(
                    {
                        dragEl: D,
                        parentEl: $e,
                        ghostEl: oe,
                        rootEl: Ie,
                        nextEl: fn,
                        lastDownEl: br,
                        cloneEl: Be,
                        cloneHidden: Qt,
                        dragStarted: $n,
                        putSortable: Ge,
                        activeSortable: q.active,
                        originalEvent: o,
                        oldIndex: An,
                        oldDraggableIndex: zn,
                        newIndex: at,
                        newDraggableIndex: Jt,
                        hideGhostForTarget: mi,
                        unhideGhostForTarget: bi,
                        cloneNowHidden: function () {
                            Qt = !0
                        },
                        cloneNowShown: function () {
                            Qt = !1
                        },
                        dispatchSortableEvent: function (c) {
                            et({ sortable: n, name: c, originalEvent: o })
                        },
                    },
                    i,
                ),
            )
        }
    function et(e) {
        ya(
            St(
                {
                    putSortable: Ge,
                    cloneEl: Be,
                    targetEl: D,
                    rootEl: Ie,
                    oldIndex: An,
                    oldDraggableIndex: zn,
                    newIndex: at,
                    newDraggableIndex: Jt,
                },
                e,
            ),
        )
    }
    var D,
        $e,
        oe,
        Ie,
        fn,
        br,
        Be,
        Qt,
        An,
        at,
        zn,
        Jt,
        pr,
        Ge,
        Cn = !1,
        Or = !1,
        Sr = [],
        cn,
        vt,
        to,
        no,
        ri,
        oi,
        $n,
        Sn,
        Yn,
        qn = !1,
        hr = !1,
        yr,
        Qe,
        ro = [],
        lo = !1,
        Cr = [],
        Dr = typeof document < 'u',
        vr = si,
        ii = Gn || Lt ? 'cssFloat' : 'float',
        Ea = Dr && !li && !si && 'draggable' in document.createElement('div'),
        hi = (function () {
            if (Dr) {
                if (Lt) return !1
                var e = document.createElement('x')
                return (e.style.cssText = 'pointer-events:auto'), e.style.pointerEvents === 'auto'
            }
        })(),
        vi = function (t, n) {
            var r = Y(t),
                o =
                    parseInt(r.width) -
                    parseInt(r.paddingLeft) -
                    parseInt(r.paddingRight) -
                    parseInt(r.borderLeftWidth) -
                    parseInt(r.borderRightWidth),
                i = Tn(t, 0, n),
                s = Tn(t, 1, n),
                c = i && Y(i),
                u = s && Y(s),
                h = c && parseInt(c.marginLeft) + parseInt(c.marginRight) + qe(i).width,
                m = u && parseInt(u.marginLeft) + parseInt(u.marginRight) + qe(s).width
            if (r.display === 'flex')
                return r.flexDirection === 'column' || r.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal'
            if (r.display === 'grid') return r.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal'
            if (i && c.float && c.float !== 'none') {
                var g = c.float === 'left' ? 'left' : 'right'
                return s && (u.clear === 'both' || u.clear === g) ? 'vertical' : 'horizontal'
            }
            return i &&
                (c.display === 'block' ||
                    c.display === 'flex' ||
                    c.display === 'table' ||
                    c.display === 'grid' ||
                    (h >= o && r[ii] === 'none') ||
                    (s && r[ii] === 'none' && h + m > o))
                ? 'vertical'
                : 'horizontal'
        },
        xa = function (t, n, r) {
            var o = r ? t.left : t.top,
                i = r ? t.right : t.bottom,
                s = r ? t.width : t.height,
                c = r ? n.left : n.top,
                u = r ? n.right : n.bottom,
                h = r ? n.width : n.height
            return o === c || i === u || o + s / 2 === c + h / 2
        },
        Oa = function (t, n) {
            var r
            return (
                Sr.some(function (o) {
                    var i = o[st].options.emptyInsertThreshold
                    if (!(!i || po(o))) {
                        var s = qe(o),
                            c = t >= s.left - i && t <= s.right + i,
                            u = n >= s.top - i && n <= s.bottom + i
                        if (c && u) return (r = o)
                    }
                }),
                r
            )
        },
        gi = function (t) {
            function n(i, s) {
                return function (c, u, h, m) {
                    var g =
                        c.options.group.name && u.options.group.name && c.options.group.name === u.options.group.name
                    if (i == null && (s || g)) return !0
                    if (i == null || i === !1) return !1
                    if (s && i === 'clone') return i
                    if (typeof i == 'function') return n(i(c, u, h, m), s)(c, u, h, m)
                    var b = (s ? c : u).options.group.name
                    return i === !0 || (typeof i == 'string' && i === b) || (i.join && i.indexOf(b) > -1)
                }
            }
            var r = {},
                o = t.group
            ;(!o || mr(o) != 'object') && (o = { name: o }),
                (r.name = o.name),
                (r.checkPull = n(o.pull, !0)),
                (r.checkPut = n(o.put)),
                (r.revertClone = o.revertClone),
                (t.group = r)
        },
        mi = function () {
            !hi && oe && Y(oe, 'display', 'none')
        },
        bi = function () {
            !hi && oe && Y(oe, 'display', '')
        }
    Dr &&
        !li &&
        document.addEventListener(
            'click',
            function (e) {
                if (Or)
                    return (
                        e.preventDefault(),
                        e.stopPropagation && e.stopPropagation(),
                        e.stopImmediatePropagation && e.stopImmediatePropagation(),
                        (Or = !1),
                        !1
                    )
            },
            !0,
        )
    var un = function (t) {
            if (D) {
                t = t.touches ? t.touches[0] : t
                var n = Oa(t.clientX, t.clientY)
                if (n) {
                    var r = {}
                    for (var o in t) t.hasOwnProperty(o) && (r[o] = t[o])
                    ;(r.target = r.rootEl = n),
                        (r.preventDefault = void 0),
                        (r.stopPropagation = void 0),
                        n[st]._onDragOver(r)
                }
            }
        },
        Sa = function (t) {
            D && D.parentNode[st]._isOutsideThisEl(t.target)
        }
    function q(e, t) {
        if (!(e && e.nodeType && e.nodeType === 1))
            throw 'Sortable: `el` must be an HTMLElement, not '.concat({}.toString.call(e))
        ;(this.el = e), (this.options = t = It({}, t)), (e[st] = this)
        var n = {
            group: null,
            sort: !0,
            disabled: !1,
            store: null,
            handle: null,
            draggable: /^[uo]l$/i.test(e.nodeName) ? '>li' : '>*',
            swapThreshold: 1,
            invertSwap: !1,
            invertedSwapThreshold: null,
            removeCloneOnHide: !0,
            direction: function () {
                return vi(e, this.options)
            },
            ghostClass: 'sortable-ghost',
            chosenClass: 'sortable-chosen',
            dragClass: 'sortable-drag',
            ignore: 'a, img',
            filter: null,
            preventOnFilter: !0,
            animation: 0,
            easing: null,
            setData: function (s, c) {
                s.setData('Text', c.textContent)
            },
            dropBubble: !1,
            dragoverBubble: !1,
            dataIdAttr: 'data-id',
            delay: 0,
            delayOnTouchOnly: !1,
            touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
            forceFallback: !1,
            fallbackClass: 'sortable-fallback',
            fallbackOnBody: !1,
            fallbackTolerance: 0,
            fallbackOffset: { x: 0, y: 0 },
            supportPointer: q.supportPointer !== !1 && 'PointerEvent' in window && !Un,
            emptyInsertThreshold: 5,
        }
        Kn.initializePlugins(this, e, n)
        for (var r in n) !(r in t) && (t[r] = n[r])
        gi(t)
        for (var o in this) o.charAt(0) === '_' && typeof this[o] == 'function' && (this[o] = this[o].bind(this))
        ;(this.nativeDraggable = t.forceFallback ? !1 : Ea),
            this.nativeDraggable && (this.options.touchStartThreshold = 1),
            t.supportPointer
                ? we(e, 'pointerdown', this._onTapStart)
                : (we(e, 'mousedown', this._onTapStart), we(e, 'touchstart', this._onTapStart)),
            this.nativeDraggable && (we(e, 'dragover', this), we(e, 'dragenter', this)),
            Sr.push(this.el),
            t.store && t.store.get && this.sort(t.store.get(this) || []),
            It(this, ga())
    }
    q.prototype = {
        constructor: q,
        _isOutsideThisEl: function (t) {
            !this.el.contains(t) && t !== this.el && (Sn = null)
        },
        _getDirection: function (t, n) {
            return typeof this.options.direction == 'function'
                ? this.options.direction.call(this, t, n, D)
                : this.options.direction
        },
        _onTapStart: function (t) {
            if (t.cancelable) {
                var n = this,
                    r = this.el,
                    o = this.options,
                    i = o.preventOnFilter,
                    s = t.type,
                    c = (t.touches && t.touches[0]) || (t.pointerType && t.pointerType === 'touch' && t),
                    u = (c || t).target,
                    h =
                        (t.target.shadowRoot && ((t.path && t.path[0]) || (t.composedPath && t.composedPath()[0]))) ||
                        u,
                    m = o.filter
                if (
                    (Ra(r),
                    !D &&
                        !((/mousedown|pointerdown/.test(s) && t.button !== 0) || o.disabled) &&
                        !h.isContentEditable &&
                        !(!this.nativeDraggable && Un && u && u.tagName.toUpperCase() === 'SELECT') &&
                        ((u = xt(u, o.draggable, r, !1)), !(u && u.animated) && br !== u))
                ) {
                    if (((An = ct(u)), (zn = ct(u, o.draggable)), typeof m == 'function')) {
                        if (m.call(this, t, u, this)) {
                            et({ sortable: n, rootEl: h, name: 'filter', targetEl: u, toEl: r, fromEl: r }),
                                rt('filter', n, { evt: t }),
                                i && t.cancelable && t.preventDefault()
                            return
                        }
                    } else if (
                        m &&
                        ((m = m.split(',').some(function (g) {
                            if (((g = xt(h, g.trim(), r, !1)), g))
                                return (
                                    et({ sortable: n, rootEl: g, name: 'filter', targetEl: u, fromEl: r, toEl: r }),
                                    rt('filter', n, { evt: t }),
                                    !0
                                )
                        })),
                        m)
                    ) {
                        i && t.cancelable && t.preventDefault()
                        return
                    }
                    ;(o.handle && !xt(h, o.handle, r, !1)) || this._prepareDragStart(t, c, u)
                }
            }
        },
        _prepareDragStart: function (t, n, r) {
            var o = this,
                i = o.el,
                s = o.options,
                c = i.ownerDocument,
                u
            if (r && !D && r.parentNode === i) {
                var h = qe(r)
                if (
                    ((Ie = i),
                    (D = r),
                    ($e = D.parentNode),
                    (fn = D.nextSibling),
                    (br = r),
                    (pr = s.group),
                    (q.dragged = D),
                    (cn = { target: D, clientX: (n || t).clientX, clientY: (n || t).clientY }),
                    (ri = cn.clientX - h.left),
                    (oi = cn.clientY - h.top),
                    (this._lastX = (n || t).clientX),
                    (this._lastY = (n || t).clientY),
                    (D.style['will-change'] = 'all'),
                    (u = function () {
                        if ((rt('delayEnded', o, { evt: t }), q.eventCanceled)) {
                            o._onDrop()
                            return
                        }
                        o._disableDelayedDragEvents(),
                            !Zo && o.nativeDraggable && (D.draggable = !0),
                            o._triggerDragStart(t, n),
                            et({ sortable: o, name: 'choose', originalEvent: t }),
                            it(D, s.chosenClass, !0)
                    }),
                    s.ignore.split(',').forEach(function (m) {
                        ui(D, m.trim(), oo)
                    }),
                    we(c, 'dragover', un),
                    we(c, 'mousemove', un),
                    we(c, 'touchmove', un),
                    we(c, 'mouseup', o._onDrop),
                    we(c, 'touchend', o._onDrop),
                    we(c, 'touchcancel', o._onDrop),
                    Zo && this.nativeDraggable && ((this.options.touchStartThreshold = 4), (D.draggable = !0)),
                    rt('delayStart', this, { evt: t }),
                    s.delay && (!s.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Gn || Lt)))
                ) {
                    if (q.eventCanceled) {
                        this._onDrop()
                        return
                    }
                    we(c, 'mouseup', o._disableDelayedDrag),
                        we(c, 'touchend', o._disableDelayedDrag),
                        we(c, 'touchcancel', o._disableDelayedDrag),
                        we(c, 'mousemove', o._delayedDragTouchMoveHandler),
                        we(c, 'touchmove', o._delayedDragTouchMoveHandler),
                        s.supportPointer && we(c, 'pointermove', o._delayedDragTouchMoveHandler),
                        (o._dragStartTimer = setTimeout(u, s.delay))
                } else u()
            }
        },
        _delayedDragTouchMoveHandler: function (t) {
            var n = t.touches ? t.touches[0] : t
            Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >=
                Math.floor(
                    this.options.touchStartThreshold / ((this.nativeDraggable && window.devicePixelRatio) || 1),
                ) && this._disableDelayedDrag()
        },
        _disableDelayedDrag: function () {
            D && oo(D), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents()
        },
        _disableDelayedDragEvents: function () {
            var t = this.el.ownerDocument
            me(t, 'mouseup', this._disableDelayedDrag),
                me(t, 'touchend', this._disableDelayedDrag),
                me(t, 'touchcancel', this._disableDelayedDrag),
                me(t, 'mousemove', this._delayedDragTouchMoveHandler),
                me(t, 'touchmove', this._delayedDragTouchMoveHandler),
                me(t, 'pointermove', this._delayedDragTouchMoveHandler)
        },
        _triggerDragStart: function (t, n) {
            ;(n = n || (t.pointerType == 'touch' && t)),
                !this.nativeDraggable || n
                    ? this.options.supportPointer
                        ? we(document, 'pointermove', this._onTouchMove)
                        : n
                          ? we(document, 'touchmove', this._onTouchMove)
                          : we(document, 'mousemove', this._onTouchMove)
                    : (we(D, 'dragend', this), we(Ie, 'dragstart', this._onDragStart))
            try {
                document.selection
                    ? wr(function () {
                          document.selection.empty()
                      })
                    : window.getSelection().removeAllRanges()
            } catch {}
        },
        _dragStarted: function (t, n) {
            if (((Cn = !1), Ie && D)) {
                rt('dragStarted', this, { evt: n }), this.nativeDraggable && we(document, 'dragover', Sa)
                var r = this.options
                !t && it(D, r.dragClass, !1),
                    it(D, r.ghostClass, !0),
                    (q.active = this),
                    t && this._appendGhost(),
                    et({ sortable: this, name: 'start', originalEvent: n })
            } else this._nulling()
        },
        _emulateDragOver: function () {
            if (vt) {
                ;(this._lastX = vt.clientX), (this._lastY = vt.clientY), mi()
                for (
                    var t = document.elementFromPoint(vt.clientX, vt.clientY), n = t;
                    t && t.shadowRoot && ((t = t.shadowRoot.elementFromPoint(vt.clientX, vt.clientY)), t !== n);

                )
                    n = t
                if ((D.parentNode[st]._isOutsideThisEl(t), n))
                    do {
                        if (n[st]) {
                            var r = void 0
                            if (
                                ((r = n[st]._onDragOver({
                                    clientX: vt.clientX,
                                    clientY: vt.clientY,
                                    target: t,
                                    rootEl: n,
                                })),
                                r && !this.options.dragoverBubble)
                            )
                                break
                        }
                        t = n
                    } while ((n = n.parentNode))
                bi()
            }
        },
        _onTouchMove: function (t) {
            if (cn) {
                var n = this.options,
                    r = n.fallbackTolerance,
                    o = n.fallbackOffset,
                    i = t.touches ? t.touches[0] : t,
                    s = oe && Dn(oe, !0),
                    c = oe && s && s.a,
                    u = oe && s && s.d,
                    h = vr && Qe && ni(Qe),
                    m = (i.clientX - cn.clientX + o.x) / (c || 1) + (h ? h[0] - ro[0] : 0) / (c || 1),
                    g = (i.clientY - cn.clientY + o.y) / (u || 1) + (h ? h[1] - ro[1] : 0) / (u || 1)
                if (!q.active && !Cn) {
                    if (r && Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) < r) return
                    this._onDragStart(t, !0)
                }
                if (oe) {
                    s ? ((s.e += m - (to || 0)), (s.f += g - (no || 0))) : (s = { a: 1, b: 0, c: 0, d: 1, e: m, f: g })
                    var b = 'matrix('
                        .concat(s.a, ',')
                        .concat(s.b, ',')
                        .concat(s.c, ',')
                        .concat(s.d, ',')
                        .concat(s.e, ',')
                        .concat(s.f, ')')
                    Y(oe, 'webkitTransform', b),
                        Y(oe, 'mozTransform', b),
                        Y(oe, 'msTransform', b),
                        Y(oe, 'transform', b),
                        (to = m),
                        (no = g),
                        (vt = i)
                }
                t.cancelable && t.preventDefault()
            }
        },
        _appendGhost: function () {
            if (!oe) {
                var t = this.options.fallbackOnBody ? document.body : Ie,
                    n = qe(D, !0, vr, !0, t),
                    r = this.options
                if (vr) {
                    for (Qe = t; Y(Qe, 'position') === 'static' && Y(Qe, 'transform') === 'none' && Qe !== document; )
                        Qe = Qe.parentNode
                    Qe !== document.body && Qe !== document.documentElement
                        ? (Qe === document && (Qe = Ot()), (n.top += Qe.scrollTop), (n.left += Qe.scrollLeft))
                        : (Qe = Ot()),
                        (ro = ni(Qe))
                }
                ;(oe = D.cloneNode(!0)),
                    it(oe, r.ghostClass, !1),
                    it(oe, r.fallbackClass, !0),
                    it(oe, r.dragClass, !0),
                    Y(oe, 'transition', ''),
                    Y(oe, 'transform', ''),
                    Y(oe, 'box-sizing', 'border-box'),
                    Y(oe, 'margin', 0),
                    Y(oe, 'top', n.top),
                    Y(oe, 'left', n.left),
                    Y(oe, 'width', n.width),
                    Y(oe, 'height', n.height),
                    Y(oe, 'opacity', '0.8'),
                    Y(oe, 'position', vr ? 'absolute' : 'fixed'),
                    Y(oe, 'zIndex', '100000'),
                    Y(oe, 'pointerEvents', 'none'),
                    (q.ghost = oe),
                    t.appendChild(oe),
                    Y(
                        oe,
                        'transform-origin',
                        (ri / parseInt(oe.style.width)) * 100 + '% ' + (oi / parseInt(oe.style.height)) * 100 + '%',
                    )
            }
        },
        _onDragStart: function (t, n) {
            var r = this,
                o = t.dataTransfer,
                i = r.options
            if ((rt('dragStart', this, { evt: t }), q.eventCanceled)) {
                this._onDrop()
                return
            }
            rt('setupClone', this),
                q.eventCanceled ||
                    ((Be = pi(D)),
                    Be.removeAttribute('id'),
                    (Be.draggable = !1),
                    (Be.style['will-change'] = ''),
                    this._hideClone(),
                    it(Be, this.options.chosenClass, !1),
                    (q.clone = Be)),
                (r.cloneId = wr(function () {
                    rt('clone', r),
                        !q.eventCanceled &&
                            (r.options.removeCloneOnHide || Ie.insertBefore(Be, D),
                            r._hideClone(),
                            et({ sortable: r, name: 'clone' }))
                })),
                !n && it(D, i.dragClass, !0),
                n
                    ? ((Or = !0), (r._loopId = setInterval(r._emulateDragOver, 50)))
                    : (me(document, 'mouseup', r._onDrop),
                      me(document, 'touchend', r._onDrop),
                      me(document, 'touchcancel', r._onDrop),
                      o && ((o.effectAllowed = 'move'), i.setData && i.setData.call(r, o, D)),
                      we(document, 'drop', r),
                      Y(D, 'transform', 'translateZ(0)')),
                (Cn = !0),
                (r._dragStartId = wr(r._dragStarted.bind(r, n, t))),
                we(document, 'selectstart', r),
                ($n = !0),
                Un && Y(document.body, 'user-select', 'none')
        },
        _onDragOver: function (t) {
            var n = this.el,
                r = t.target,
                o,
                i,
                s,
                c = this.options,
                u = c.group,
                h = q.active,
                m = pr === u,
                g = c.sort,
                b = Ge || h,
                O,
                S = this,
                T = !1
            if (lo) return
            function F(tt, Nt) {
                rt(
                    tt,
                    S,
                    St(
                        {
                            evt: t,
                            isOwner: m,
                            axis: O ? 'vertical' : 'horizontal',
                            revert: s,
                            dragRect: o,
                            targetRect: i,
                            canSort: g,
                            fromSortable: b,
                            target: r,
                            completed: L,
                            onMove: function (pn, _n) {
                                return gr(Ie, n, D, o, pn, qe(pn), t, _n)
                            },
                            changed: K,
                        },
                        Nt,
                    ),
                )
            }
            function B() {
                F('dragOverAnimationCapture'), S.captureAnimationState(), S !== b && b.captureAnimationState()
            }
            function L(tt) {
                return (
                    F('dragOverCompleted', { insertion: tt }),
                    tt &&
                        (m ? h._hideClone() : h._showClone(S),
                        S !== b &&
                            (it(D, Ge ? Ge.options.ghostClass : h.options.ghostClass, !1), it(D, c.ghostClass, !0)),
                        Ge !== S && S !== q.active ? (Ge = S) : S === q.active && Ge && (Ge = null),
                        b === S && (S._ignoreWhileAnimating = r),
                        S.animateAll(function () {
                            F('dragOverAnimationComplete'), (S._ignoreWhileAnimating = null)
                        }),
                        S !== b && (b.animateAll(), (b._ignoreWhileAnimating = null))),
                    ((r === D && !D.animated) || (r === n && !r.animated)) && (Sn = null),
                    !c.dragoverBubble &&
                        !t.rootEl &&
                        r !== document &&
                        (D.parentNode[st]._isOutsideThisEl(t.target), !tt && un(t)),
                    !c.dragoverBubble && t.stopPropagation && t.stopPropagation(),
                    (T = !0)
                )
            }
            function K() {
                ;(at = ct(D)),
                    (Jt = ct(D, c.draggable)),
                    et({ sortable: S, name: 'change', toEl: n, newIndex: at, newDraggableIndex: Jt, originalEvent: t })
            }
            if (
                (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(),
                (r = xt(r, c.draggable, n, !0)),
                F('dragOver'),
                q.eventCanceled)
            )
                return T
            if (D.contains(t.target) || (r.animated && r.animatingX && r.animatingY) || S._ignoreWhileAnimating === r)
                return L(!1)
            if (
                ((Or = !1),
                h &&
                    !c.disabled &&
                    (m
                        ? g || (s = $e !== Ie)
                        : Ge === this ||
                          ((this.lastPutMode = pr.checkPull(this, h, D, t)) && u.checkPut(this, h, D, t))))
            ) {
                if (((O = this._getDirection(t, r) === 'vertical'), (o = qe(D)), F('dragOverValid'), q.eventCanceled))
                    return T
                if (s)
                    return (
                        ($e = Ie),
                        B(),
                        this._hideClone(),
                        F('revert'),
                        q.eventCanceled || (fn ? Ie.insertBefore(D, fn) : Ie.appendChild(D)),
                        L(!0)
                    )
                var W = po(n, c.draggable)
                if (!W || (Ta(t, O, this) && !W.animated)) {
                    if (W === D) return L(!1)
                    if ((W && n === t.target && (r = W), r && (i = qe(r)), gr(Ie, n, D, o, r, i, t, !!r) !== !1))
                        return (
                            B(),
                            W && W.nextSibling ? n.insertBefore(D, W.nextSibling) : n.appendChild(D),
                            ($e = n),
                            K(),
                            L(!0)
                        )
                } else if (W && Da(t, O, this)) {
                    var he = Tn(n, 0, c, !0)
                    if (he === D) return L(!1)
                    if (((r = he), (i = qe(r)), gr(Ie, n, D, o, r, i, t, !1) !== !1))
                        return B(), n.insertBefore(D, he), ($e = n), K(), L(!0)
                } else if (r.parentNode === n) {
                    i = qe(r)
                    var ee = 0,
                        Z,
                        de = D.parentNode !== n,
                        N = !xa((D.animated && D.toRect) || o, (r.animated && r.toRect) || i, O),
                        ae = O ? 'top' : 'left',
                        ue = ti(r, 'top', 'top') || ti(D, 'top', 'top'),
                        Ce = ue ? ue.scrollTop : void 0
                    Sn !== r && ((Z = i[ae]), (qn = !1), (hr = (!N && c.invertSwap) || de)),
                        (ee = _a(
                            t,
                            r,
                            i,
                            O,
                            N ? 1 : c.swapThreshold,
                            c.invertedSwapThreshold == null ? c.swapThreshold : c.invertedSwapThreshold,
                            hr,
                            Sn === r,
                        ))
                    var pe
                    if (ee !== 0) {
                        var ve = ct(D)
                        do (ve -= ee), (pe = $e.children[ve])
                        while (pe && (Y(pe, 'display') === 'none' || pe === oe))
                    }
                    if (ee === 0 || pe === r) return L(!1)
                    ;(Sn = r), (Yn = ee)
                    var We = r.nextElementSibling,
                        Le = !1
                    Le = ee === 1
                    var Te = gr(Ie, n, D, o, r, i, t, Le)
                    if (Te !== !1)
                        return (
                            (Te === 1 || Te === -1) && (Le = Te === 1),
                            (lo = !0),
                            setTimeout(Aa, 30),
                            B(),
                            Le && !We ? n.appendChild(D) : r.parentNode.insertBefore(D, Le ? We : r),
                            ue && di(ue, 0, Ce - ue.scrollTop),
                            ($e = D.parentNode),
                            Z !== void 0 && !hr && (yr = Math.abs(Z - qe(r)[ae])),
                            K(),
                            L(!0)
                        )
                }
                if (n.contains(D)) return L(!1)
            }
            return !1
        },
        _ignoreWhileAnimating: null,
        _offMoveEvents: function () {
            me(document, 'mousemove', this._onTouchMove),
                me(document, 'touchmove', this._onTouchMove),
                me(document, 'pointermove', this._onTouchMove),
                me(document, 'dragover', un),
                me(document, 'mousemove', un),
                me(document, 'touchmove', un)
        },
        _offUpEvents: function () {
            var t = this.el.ownerDocument
            me(t, 'mouseup', this._onDrop),
                me(t, 'touchend', this._onDrop),
                me(t, 'pointerup', this._onDrop),
                me(t, 'touchcancel', this._onDrop),
                me(document, 'selectstart', this)
        },
        _onDrop: function (t) {
            var n = this.el,
                r = this.options
            if (
                ((at = ct(D)),
                (Jt = ct(D, r.draggable)),
                rt('drop', this, { evt: t }),
                ($e = D && D.parentNode),
                (at = ct(D)),
                (Jt = ct(D, r.draggable)),
                q.eventCanceled)
            ) {
                this._nulling()
                return
            }
            ;(Cn = !1),
                (hr = !1),
                (qn = !1),
                clearInterval(this._loopId),
                clearTimeout(this._dragStartTimer),
                co(this.cloneId),
                co(this._dragStartId),
                this.nativeDraggable && (me(document, 'drop', this), me(n, 'dragstart', this._onDragStart)),
                this._offMoveEvents(),
                this._offUpEvents(),
                Un && Y(document.body, 'user-select', ''),
                Y(D, 'transform', ''),
                t &&
                    ($n && (t.cancelable && t.preventDefault(), !r.dropBubble && t.stopPropagation()),
                    oe && oe.parentNode && oe.parentNode.removeChild(oe),
                    (Ie === $e || (Ge && Ge.lastPutMode !== 'clone')) &&
                        Be &&
                        Be.parentNode &&
                        Be.parentNode.removeChild(Be),
                    D &&
                        (this.nativeDraggable && me(D, 'dragend', this),
                        oo(D),
                        (D.style['will-change'] = ''),
                        $n && !Cn && it(D, Ge ? Ge.options.ghostClass : this.options.ghostClass, !1),
                        it(D, this.options.chosenClass, !1),
                        et({
                            sortable: this,
                            name: 'unchoose',
                            toEl: $e,
                            newIndex: null,
                            newDraggableIndex: null,
                            originalEvent: t,
                        }),
                        Ie !== $e
                            ? (at >= 0 &&
                                  (et({ rootEl: $e, name: 'add', toEl: $e, fromEl: Ie, originalEvent: t }),
                                  et({ sortable: this, name: 'remove', toEl: $e, originalEvent: t }),
                                  et({ rootEl: $e, name: 'sort', toEl: $e, fromEl: Ie, originalEvent: t }),
                                  et({ sortable: this, name: 'sort', toEl: $e, originalEvent: t })),
                              Ge && Ge.save())
                            : at !== An &&
                              at >= 0 &&
                              (et({ sortable: this, name: 'update', toEl: $e, originalEvent: t }),
                              et({ sortable: this, name: 'sort', toEl: $e, originalEvent: t })),
                        q.active &&
                            ((at == null || at === -1) && ((at = An), (Jt = zn)),
                            et({ sortable: this, name: 'end', toEl: $e, originalEvent: t }),
                            this.save()))),
                this._nulling()
        },
        _nulling: function () {
            rt('nulling', this),
                (Ie =
                    D =
                    $e =
                    oe =
                    fn =
                    Be =
                    br =
                    Qt =
                    cn =
                    vt =
                    $n =
                    at =
                    Jt =
                    An =
                    zn =
                    Sn =
                    Yn =
                    Ge =
                    pr =
                    q.dragged =
                    q.ghost =
                    q.clone =
                    q.active =
                        null),
                Cr.forEach(function (t) {
                    t.checked = !0
                }),
                (Cr.length = to = no = 0)
        },
        handleEvent: function (t) {
            switch (t.type) {
                case 'drop':
                case 'dragend':
                    this._onDrop(t)
                    break
                case 'dragenter':
                case 'dragover':
                    D && (this._onDragOver(t), Ca(t))
                    break
                case 'selectstart':
                    t.preventDefault()
                    break
            }
        },
        toArray: function () {
            for (var t = [], n, r = this.el.children, o = 0, i = r.length, s = this.options; o < i; o++)
                (n = r[o]), xt(n, s.draggable, this.el, !1) && t.push(n.getAttribute(s.dataIdAttr) || Ma(n))
            return t
        },
        sort: function (t, n) {
            var r = {},
                o = this.el
            this.toArray().forEach(function (i, s) {
                var c = o.children[s]
                xt(c, this.options.draggable, o, !1) && (r[i] = c)
            }, this),
                n && this.captureAnimationState(),
                t.forEach(function (i) {
                    r[i] && (o.removeChild(r[i]), o.appendChild(r[i]))
                }),
                n && this.animateAll()
        },
        save: function () {
            var t = this.options.store
            t && t.set && t.set(this)
        },
        closest: function (t, n) {
            return xt(t, n || this.options.draggable, this.el, !1)
        },
        option: function (t, n) {
            var r = this.options
            if (n === void 0) return r[t]
            var o = Kn.modifyOption(this, t, n)
            typeof o < 'u' ? (r[t] = o) : (r[t] = n), t === 'group' && gi(r)
        },
        destroy: function () {
            rt('destroy', this)
            var t = this.el
            ;(t[st] = null),
                me(t, 'mousedown', this._onTapStart),
                me(t, 'touchstart', this._onTapStart),
                me(t, 'pointerdown', this._onTapStart),
                this.nativeDraggable && (me(t, 'dragover', this), me(t, 'dragenter', this)),
                Array.prototype.forEach.call(t.querySelectorAll('[draggable]'), function (n) {
                    n.removeAttribute('draggable')
                }),
                this._onDrop(),
                this._disableDelayedDragEvents(),
                Sr.splice(Sr.indexOf(this.el), 1),
                (this.el = t = null)
        },
        _hideClone: function () {
            if (!Qt) {
                if ((rt('hideClone', this), q.eventCanceled)) return
                Y(Be, 'display', 'none'),
                    this.options.removeCloneOnHide && Be.parentNode && Be.parentNode.removeChild(Be),
                    (Qt = !0)
            }
        },
        _showClone: function (t) {
            if (t.lastPutMode !== 'clone') {
                this._hideClone()
                return
            }
            if (Qt) {
                if ((rt('showClone', this), q.eventCanceled)) return
                D.parentNode == Ie && !this.options.group.revertClone
                    ? Ie.insertBefore(Be, D)
                    : fn
                      ? Ie.insertBefore(Be, fn)
                      : Ie.appendChild(Be),
                    this.options.group.revertClone && this.animate(D, Be),
                    Y(Be, 'display', ''),
                    (Qt = !1)
            }
        },
    }
    function Ca(e) {
        e.dataTransfer && (e.dataTransfer.dropEffect = 'move'), e.cancelable && e.preventDefault()
    }
    function gr(e, t, n, r, o, i, s, c) {
        var u,
            h = e[st],
            m = h.options.onMove,
            g
        return (
            window.CustomEvent && !Lt && !Gn
                ? (u = new CustomEvent('move', { bubbles: !0, cancelable: !0 }))
                : ((u = document.createEvent('Event')), u.initEvent('move', !0, !0)),
            (u.to = t),
            (u.from = e),
            (u.dragged = n),
            (u.draggedRect = r),
            (u.related = o || t),
            (u.relatedRect = i || qe(t)),
            (u.willInsertAfter = c),
            (u.originalEvent = s),
            e.dispatchEvent(u),
            m && (g = m.call(h, u, s)),
            g
        )
    }
    function oo(e) {
        e.draggable = !1
    }
    function Aa() {
        lo = !1
    }
    function Da(e, t, n) {
        var r = qe(Tn(n.el, 0, n.options, !0)),
            o = 10
        return t
            ? e.clientX < r.left - o || (e.clientY < r.top && e.clientX < r.right)
            : e.clientY < r.top - o || (e.clientY < r.bottom && e.clientX < r.left)
    }
    function Ta(e, t, n) {
        var r = qe(po(n.el, n.options.draggable)),
            o = 10
        return t
            ? e.clientX > r.right + o || (e.clientX <= r.right && e.clientY > r.bottom && e.clientX >= r.left)
            : (e.clientX > r.right && e.clientY > r.top) || (e.clientX <= r.right && e.clientY > r.bottom + o)
    }
    function _a(e, t, n, r, o, i, s, c) {
        var u = r ? e.clientY : e.clientX,
            h = r ? n.height : n.width,
            m = r ? n.top : n.left,
            g = r ? n.bottom : n.right,
            b = !1
        if (!s) {
            if (c && yr < h * o) {
                if ((!qn && (Yn === 1 ? u > m + (h * i) / 2 : u < g - (h * i) / 2) && (qn = !0), qn)) b = !0
                else if (Yn === 1 ? u < m + yr : u > g - yr) return -Yn
            } else if (u > m + (h * (1 - o)) / 2 && u < g - (h * (1 - o)) / 2) return Pa(t)
        }
        return (b = b || s), b && (u < m + (h * i) / 2 || u > g - (h * i) / 2) ? (u > m + h / 2 ? 1 : -1) : 0
    }
    function Pa(e) {
        return ct(D) < ct(e) ? 1 : -1
    }
    function Ma(e) {
        for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, r = 0; n--; )
            r += t.charCodeAt(n)
        return r.toString(36)
    }
    function Ra(e) {
        Cr.length = 0
        for (var t = e.getElementsByTagName('input'), n = t.length; n--; ) {
            var r = t[n]
            r.checked && Cr.push(r)
        }
    }
    function wr(e) {
        return setTimeout(e, 0)
    }
    function co(e) {
        return clearTimeout(e)
    }
    Dr &&
        we(document, 'touchmove', function (e) {
            ;(q.active || Cn) && e.cancelable && e.preventDefault()
        })
    q.utils = {
        on: we,
        off: me,
        css: Y,
        find: ui,
        is: function (t, n) {
            return !!xt(t, n, t, !1)
        },
        extend: ha,
        throttle: fi,
        closest: xt,
        toggleClass: it,
        clone: pi,
        index: ct,
        nextTick: wr,
        cancelNextTick: co,
        detectDirection: vi,
        getChild: Tn,
    }
    q.get = function (e) {
        return e[st]
    }
    q.mount = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
        t[0].constructor === Array && (t = t[0]),
            t.forEach(function (r) {
                if (!r.prototype || !r.prototype.constructor)
                    throw 'Sortable: Mounted plugin must be a constructor function, not '.concat({}.toString.call(r))
                r.utils && (q.utils = St(St({}, q.utils), r.utils)), Kn.mount(r)
            })
    }
    q.create = function (e, t) {
        return new q(e, t)
    }
    q.version = fa
    var Ue = [],
        Wn,
        uo,
        fo = !1,
        io,
        ao,
        Ar,
        Vn
    function Ia() {
        function e() {
            this.defaults = {
                scroll: !0,
                forceAutoScrollFallback: !1,
                scrollSensitivity: 30,
                scrollSpeed: 10,
                bubbleScroll: !0,
            }
            for (var t in this) t.charAt(0) === '_' && typeof this[t] == 'function' && (this[t] = this[t].bind(this))
        }
        return (
            (e.prototype = {
                dragStarted: function (n) {
                    var r = n.originalEvent
                    this.sortable.nativeDraggable
                        ? we(document, 'dragover', this._handleAutoScroll)
                        : this.options.supportPointer
                          ? we(document, 'pointermove', this._handleFallbackAutoScroll)
                          : r.touches
                            ? we(document, 'touchmove', this._handleFallbackAutoScroll)
                            : we(document, 'mousemove', this._handleFallbackAutoScroll)
                },
                dragOverCompleted: function (n) {
                    var r = n.originalEvent
                    !this.options.dragOverBubble && !r.rootEl && this._handleAutoScroll(r)
                },
                drop: function () {
                    this.sortable.nativeDraggable
                        ? me(document, 'dragover', this._handleAutoScroll)
                        : (me(document, 'pointermove', this._handleFallbackAutoScroll),
                          me(document, 'touchmove', this._handleFallbackAutoScroll),
                          me(document, 'mousemove', this._handleFallbackAutoScroll)),
                        ai(),
                        Er(),
                        va()
                },
                nulling: function () {
                    ;(Ar = uo = Wn = fo = Vn = io = ao = null), (Ue.length = 0)
                },
                _handleFallbackAutoScroll: function (n) {
                    this._handleAutoScroll(n, !0)
                },
                _handleAutoScroll: function (n, r) {
                    var o = this,
                        i = (n.touches ? n.touches[0] : n).clientX,
                        s = (n.touches ? n.touches[0] : n).clientY,
                        c = document.elementFromPoint(i, s)
                    if (((Ar = n), r || this.options.forceAutoScrollFallback || Gn || Lt || Un)) {
                        so(n, this.options, c, r)
                        var u = Zt(c, !0)
                        fo &&
                            (!Vn || i !== io || s !== ao) &&
                            (Vn && ai(),
                            (Vn = setInterval(function () {
                                var h = Zt(document.elementFromPoint(i, s), !0)
                                h !== u && ((u = h), Er()), so(n, o.options, h, r)
                            }, 10)),
                            (io = i),
                            (ao = s))
                    } else {
                        if (!this.options.bubbleScroll || Zt(c, !0) === Ot()) {
                            Er()
                            return
                        }
                        so(n, this.options, Zt(c, !1), !1)
                    }
                },
            }),
            It(e, { pluginName: 'scroll', initializeByDefault: !0 })
        )
    }
    function Er() {
        Ue.forEach(function (e) {
            clearInterval(e.pid)
        }),
            (Ue = [])
    }
    function ai() {
        clearInterval(Vn)
    }
    var so = fi(function (e, t, n, r) {
            if (t.scroll) {
                var o = (e.touches ? e.touches[0] : e).clientX,
                    i = (e.touches ? e.touches[0] : e).clientY,
                    s = t.scrollSensitivity,
                    c = t.scrollSpeed,
                    u = Ot(),
                    h = !1,
                    m
                uo !== n && ((uo = n), Er(), (Wn = t.scroll), (m = t.scrollFn), Wn === !0 && (Wn = Zt(n, !0)))
                var g = 0,
                    b = Wn
                do {
                    var O = b,
                        S = qe(O),
                        T = S.top,
                        F = S.bottom,
                        B = S.left,
                        L = S.right,
                        K = S.width,
                        W = S.height,
                        he = void 0,
                        ee = void 0,
                        Z = O.scrollWidth,
                        de = O.scrollHeight,
                        N = Y(O),
                        ae = O.scrollLeft,
                        ue = O.scrollTop
                    O === u
                        ? ((he =
                              K < Z &&
                              (N.overflowX === 'auto' || N.overflowX === 'scroll' || N.overflowX === 'visible')),
                          (ee =
                              W < de &&
                              (N.overflowY === 'auto' || N.overflowY === 'scroll' || N.overflowY === 'visible')))
                        : ((he = K < Z && (N.overflowX === 'auto' || N.overflowX === 'scroll')),
                          (ee = W < de && (N.overflowY === 'auto' || N.overflowY === 'scroll')))
                    var Ce = he && (Math.abs(L - o) <= s && ae + K < Z) - (Math.abs(B - o) <= s && !!ae),
                        pe = ee && (Math.abs(F - i) <= s && ue + W < de) - (Math.abs(T - i) <= s && !!ue)
                    if (!Ue[g]) for (var ve = 0; ve <= g; ve++) Ue[ve] || (Ue[ve] = {})
                    ;(Ue[g].vx != Ce || Ue[g].vy != pe || Ue[g].el !== O) &&
                        ((Ue[g].el = O),
                        (Ue[g].vx = Ce),
                        (Ue[g].vy = pe),
                        clearInterval(Ue[g].pid),
                        (Ce != 0 || pe != 0) &&
                            ((h = !0),
                            (Ue[g].pid = setInterval(
                                function () {
                                    r && this.layer === 0 && q.active._onTouchMove(Ar)
                                    var We = Ue[this.layer].vy ? Ue[this.layer].vy * c : 0,
                                        Le = Ue[this.layer].vx ? Ue[this.layer].vx * c : 0
                                    ;(typeof m == 'function' &&
                                        m.call(q.dragged.parentNode[st], Le, We, e, Ar, Ue[this.layer].el) !==
                                            'continue') ||
                                        di(Ue[this.layer].el, Le, We)
                                }.bind({ layer: g }),
                                24,
                            )))),
                        g++
                } while (t.bubbleScroll && b !== u && (b = Zt(b, !1)))
                fo = h
            }
        }, 30),
        yi = function (t) {
            var n = t.originalEvent,
                r = t.putSortable,
                o = t.dragEl,
                i = t.activeSortable,
                s = t.dispatchSortableEvent,
                c = t.hideGhostForTarget,
                u = t.unhideGhostForTarget
            if (n) {
                var h = r || i
                c()
                var m = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n,
                    g = document.elementFromPoint(m.clientX, m.clientY)
                u(), h && !h.el.contains(g) && (s('spill'), this.onSpill({ dragEl: o, putSortable: r }))
            }
        }
    function ho() {}
    ho.prototype = {
        startIndex: null,
        dragStart: function (t) {
            var n = t.oldDraggableIndex
            this.startIndex = n
        },
        onSpill: function (t) {
            var n = t.dragEl,
                r = t.putSortable
            this.sortable.captureAnimationState(), r && r.captureAnimationState()
            var o = Tn(this.sortable.el, this.startIndex, this.options)
            o ? this.sortable.el.insertBefore(n, o) : this.sortable.el.appendChild(n),
                this.sortable.animateAll(),
                r && r.animateAll()
        },
        drop: yi,
    }
    It(ho, { pluginName: 'revertOnSpill' })
    function vo() {}
    vo.prototype = {
        onSpill: function (t) {
            var n = t.dragEl,
                r = t.putSortable,
                o = r || this.sortable
            o.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), o.animateAll()
        },
        drop: yi,
    }
    It(vo, { pluginName: 'removeOnSpill' })
    q.mount(new Ia())
    q.mount(vo, ho)
    var go = q
    window.Sortable = go
    var wi = (e) => {
        e.directive('sortable', (t) => {
            t.sortable = go.create(t, {
                draggable: '[x-sortable-item]',
                handle: '[x-sortable-handle]',
                dataIdAttr: 'x-sortable-item',
            })
        })
    }
    var La = Object.create,
        yo = Object.defineProperty,
        Na = Object.getPrototypeOf,
        ka = Object.prototype.hasOwnProperty,
        ja = Object.getOwnPropertyNames,
        Fa = Object.getOwnPropertyDescriptor,
        Ba = (e) => yo(e, '__esModule', { value: !0 }),
        Ei = (e, t) => () => (t || ((t = { exports: {} }), e(t.exports, t)), t.exports),
        Ha = (e, t, n) => {
            if ((t && typeof t == 'object') || typeof t == 'function')
                for (let r of ja(t))
                    !ka.call(e, r) &&
                        r !== 'default' &&
                        yo(e, r, { get: () => t[r], enumerable: !(n = Fa(t, r)) || n.enumerable })
            return e
        },
        xi = (e) =>
            Ha(
                Ba(
                    yo(
                        e != null ? La(Na(e)) : {},
                        'default',
                        e && e.__esModule && 'default' in e
                            ? { get: () => e.default, enumerable: !0 }
                            : { value: e, enumerable: !0 },
                    ),
                ),
                e,
            ),
        $a = Ei((e) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 })
            function t(l) {
                var a = l.getBoundingClientRect()
                return {
                    width: a.width,
                    height: a.height,
                    top: a.top,
                    right: a.right,
                    bottom: a.bottom,
                    left: a.left,
                    x: a.left,
                    y: a.top,
                }
            }
            function n(l) {
                if (l == null) return window
                if (l.toString() !== '[object Window]') {
                    var a = l.ownerDocument
                    return (a && a.defaultView) || window
                }
                return l
            }
            function r(l) {
                var a = n(l),
                    d = a.pageXOffset,
                    E = a.pageYOffset
                return { scrollLeft: d, scrollTop: E }
            }
            function o(l) {
                var a = n(l).Element
                return l instanceof a || l instanceof Element
            }
            function i(l) {
                var a = n(l).HTMLElement
                return l instanceof a || l instanceof HTMLElement
            }
            function s(l) {
                if (typeof ShadowRoot > 'u') return !1
                var a = n(l).ShadowRoot
                return l instanceof a || l instanceof ShadowRoot
            }
            function c(l) {
                return { scrollLeft: l.scrollLeft, scrollTop: l.scrollTop }
            }
            function u(l) {
                return l === n(l) || !i(l) ? r(l) : c(l)
            }
            function h(l) {
                return l ? (l.nodeName || '').toLowerCase() : null
            }
            function m(l) {
                return ((o(l) ? l.ownerDocument : l.document) || window.document).documentElement
            }
            function g(l) {
                return t(m(l)).left + r(l).scrollLeft
            }
            function b(l) {
                return n(l).getComputedStyle(l)
            }
            function O(l) {
                var a = b(l),
                    d = a.overflow,
                    E = a.overflowX,
                    x = a.overflowY
                return /auto|scroll|overlay|hidden/.test(d + x + E)
            }
            function S(l, a, d) {
                d === void 0 && (d = !1)
                var E = m(a),
                    x = t(l),
                    A = i(a),
                    R = { scrollLeft: 0, scrollTop: 0 },
                    P = { x: 0, y: 0 }
                return (
                    (A || (!A && !d)) &&
                        ((h(a) !== 'body' || O(E)) && (R = u(a)),
                        i(a) ? ((P = t(a)), (P.x += a.clientLeft), (P.y += a.clientTop)) : E && (P.x = g(E))),
                    { x: x.left + R.scrollLeft - P.x, y: x.top + R.scrollTop - P.y, width: x.width, height: x.height }
                )
            }
            function T(l) {
                var a = t(l),
                    d = l.offsetWidth,
                    E = l.offsetHeight
                return (
                    Math.abs(a.width - d) <= 1 && (d = a.width),
                    Math.abs(a.height - E) <= 1 && (E = a.height),
                    { x: l.offsetLeft, y: l.offsetTop, width: d, height: E }
                )
            }
            function F(l) {
                return h(l) === 'html' ? l : l.assignedSlot || l.parentNode || (s(l) ? l.host : null) || m(l)
            }
            function B(l) {
                return ['html', 'body', '#document'].indexOf(h(l)) >= 0
                    ? l.ownerDocument.body
                    : i(l) && O(l)
                      ? l
                      : B(F(l))
            }
            function L(l, a) {
                var d
                a === void 0 && (a = [])
                var E = B(l),
                    x = E === ((d = l.ownerDocument) == null ? void 0 : d.body),
                    A = n(E),
                    R = x ? [A].concat(A.visualViewport || [], O(E) ? E : []) : E,
                    P = a.concat(R)
                return x ? P : P.concat(L(F(R)))
            }
            function K(l) {
                return ['table', 'td', 'th'].indexOf(h(l)) >= 0
            }
            function W(l) {
                return !i(l) || b(l).position === 'fixed' ? null : l.offsetParent
            }
            function he(l) {
                var a = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1,
                    d = navigator.userAgent.indexOf('Trident') !== -1
                if (d && i(l)) {
                    var E = b(l)
                    if (E.position === 'fixed') return null
                }
                for (var x = F(l); i(x) && ['html', 'body'].indexOf(h(x)) < 0; ) {
                    var A = b(x)
                    if (
                        A.transform !== 'none' ||
                        A.perspective !== 'none' ||
                        A.contain === 'paint' ||
                        ['transform', 'perspective'].indexOf(A.willChange) !== -1 ||
                        (a && A.willChange === 'filter') ||
                        (a && A.filter && A.filter !== 'none')
                    )
                        return x
                    x = x.parentNode
                }
                return null
            }
            function ee(l) {
                for (var a = n(l), d = W(l); d && K(d) && b(d).position === 'static'; ) d = W(d)
                return d && (h(d) === 'html' || (h(d) === 'body' && b(d).position === 'static')) ? a : d || he(l) || a
            }
            var Z = 'top',
                de = 'bottom',
                N = 'right',
                ae = 'left',
                ue = 'auto',
                Ce = [Z, de, N, ae],
                pe = 'start',
                ve = 'end',
                We = 'clippingParents',
                Le = 'viewport',
                Te = 'popper',
                tt = 'reference',
                Nt = Ce.reduce(function (l, a) {
                    return l.concat([a + '-' + pe, a + '-' + ve])
                }, []),
                dn = [].concat(Ce, [ue]).reduce(function (l, a) {
                    return l.concat([a, a + '-' + pe, a + '-' + ve])
                }, []),
                pn = 'beforeRead',
                _n = 'read',
                Tr = 'afterRead',
                _r = 'beforeMain',
                Pr = 'main',
                kt = 'afterMain',
                Jn = 'beforeWrite',
                Mr = 'write',
                Qn = 'afterWrite',
                Ct = [pn, _n, Tr, _r, Pr, kt, Jn, Mr, Qn]
            function Rr(l) {
                var a = new Map(),
                    d = new Set(),
                    E = []
                l.forEach(function (A) {
                    a.set(A.name, A)
                })
                function x(A) {
                    d.add(A.name)
                    var R = [].concat(A.requires || [], A.requiresIfExists || [])
                    R.forEach(function (P) {
                        if (!d.has(P)) {
                            var j = a.get(P)
                            j && x(j)
                        }
                    }),
                        E.push(A)
                }
                return (
                    l.forEach(function (A) {
                        d.has(A.name) || x(A)
                    }),
                    E
                )
            }
            function ut(l) {
                var a = Rr(l)
                return Ct.reduce(function (d, E) {
                    return d.concat(
                        a.filter(function (x) {
                            return x.phase === E
                        }),
                    )
                }, [])
            }
            function jt(l) {
                var a
                return function () {
                    return (
                        a ||
                            (a = new Promise(function (d) {
                                Promise.resolve().then(function () {
                                    ;(a = void 0), d(l())
                                })
                            })),
                        a
                    )
                }
            }
            function gt(l) {
                for (var a = arguments.length, d = new Array(a > 1 ? a - 1 : 0), E = 1; E < a; E++)
                    d[E - 1] = arguments[E]
                return [].concat(d).reduce(function (x, A) {
                    return x.replace(/%s/, A)
                }, l)
            }
            var mt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',
                Ir = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available',
                Ke = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options']
            function Lr(l) {
                l.forEach(function (a) {
                    Object.keys(a).forEach(function (d) {
                        switch (d) {
                            case 'name':
                                typeof a.name != 'string' &&
                                    console.error(
                                        gt(mt, String(a.name), '"name"', '"string"', '"' + String(a.name) + '"'),
                                    )
                                break
                            case 'enabled':
                                typeof a.enabled != 'boolean' &&
                                    console.error(
                                        gt(mt, a.name, '"enabled"', '"boolean"', '"' + String(a.enabled) + '"'),
                                    )
                            case 'phase':
                                Ct.indexOf(a.phase) < 0 &&
                                    console.error(
                                        gt(
                                            mt,
                                            a.name,
                                            '"phase"',
                                            'either ' + Ct.join(', '),
                                            '"' + String(a.phase) + '"',
                                        ),
                                    )
                                break
                            case 'fn':
                                typeof a.fn != 'function' &&
                                    console.error(gt(mt, a.name, '"fn"', '"function"', '"' + String(a.fn) + '"'))
                                break
                            case 'effect':
                                typeof a.effect != 'function' &&
                                    console.error(gt(mt, a.name, '"effect"', '"function"', '"' + String(a.fn) + '"'))
                                break
                            case 'requires':
                                Array.isArray(a.requires) ||
                                    console.error(
                                        gt(mt, a.name, '"requires"', '"array"', '"' + String(a.requires) + '"'),
                                    )
                                break
                            case 'requiresIfExists':
                                Array.isArray(a.requiresIfExists) ||
                                    console.error(
                                        gt(
                                            mt,
                                            a.name,
                                            '"requiresIfExists"',
                                            '"array"',
                                            '"' + String(a.requiresIfExists) + '"',
                                        ),
                                    )
                                break
                            case 'options':
                            case 'data':
                                break
                            default:
                                console.error(
                                    'PopperJS: an invalid property has been provided to the "' +
                                        a.name +
                                        '" modifier, valid properties are ' +
                                        Ke.map(function (E) {
                                            return '"' + E + '"'
                                        }).join(', ') +
                                        '; but "' +
                                        d +
                                        '" was provided.',
                                )
                        }
                        a.requires &&
                            a.requires.forEach(function (E) {
                                l.find(function (x) {
                                    return x.name === E
                                }) == null && console.error(gt(Ir, String(a.name), E, E))
                            })
                    })
                })
            }
            function Nr(l, a) {
                var d = new Set()
                return l.filter(function (E) {
                    var x = a(E)
                    if (!d.has(x)) return d.add(x), !0
                })
            }
            function nt(l) {
                return l.split('-')[0]
            }
            function kr(l) {
                var a = l.reduce(function (d, E) {
                    var x = d[E.name]
                    return (
                        (d[E.name] = x
                            ? Object.assign({}, x, E, {
                                  options: Object.assign({}, x.options, E.options),
                                  data: Object.assign({}, x.data, E.data),
                              })
                            : E),
                        d
                    )
                }, {})
                return Object.keys(a).map(function (d) {
                    return a[d]
                })
            }
            function Zn(l) {
                var a = n(l),
                    d = m(l),
                    E = a.visualViewport,
                    x = d.clientWidth,
                    A = d.clientHeight,
                    R = 0,
                    P = 0
                return (
                    E &&
                        ((x = E.width),
                        (A = E.height),
                        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                            ((R = E.offsetLeft), (P = E.offsetTop))),
                    { width: x, height: A, x: R + g(l), y: P }
                )
            }
            var ft = Math.max,
                en = Math.min,
                Ft = Math.round
            function er(l) {
                var a,
                    d = m(l),
                    E = r(l),
                    x = (a = l.ownerDocument) == null ? void 0 : a.body,
                    A = ft(d.scrollWidth, d.clientWidth, x ? x.scrollWidth : 0, x ? x.clientWidth : 0),
                    R = ft(d.scrollHeight, d.clientHeight, x ? x.scrollHeight : 0, x ? x.clientHeight : 0),
                    P = -E.scrollLeft + g(l),
                    j = -E.scrollTop
                return (
                    b(x || d).direction === 'rtl' && (P += ft(d.clientWidth, x ? x.clientWidth : 0) - A),
                    { width: A, height: R, x: P, y: j }
                )
            }
            function Pn(l, a) {
                var d = a.getRootNode && a.getRootNode()
                if (l.contains(a)) return !0
                if (d && s(d)) {
                    var E = a
                    do {
                        if (E && l.isSameNode(E)) return !0
                        E = E.parentNode || E.host
                    } while (E)
                }
                return !1
            }
            function Bt(l) {
                return Object.assign({}, l, { left: l.x, top: l.y, right: l.x + l.width, bottom: l.y + l.height })
            }
            function tr(l) {
                var a = t(l)
                return (
                    (a.top = a.top + l.clientTop),
                    (a.left = a.left + l.clientLeft),
                    (a.bottom = a.top + l.clientHeight),
                    (a.right = a.left + l.clientWidth),
                    (a.width = l.clientWidth),
                    (a.height = l.clientHeight),
                    (a.x = a.left),
                    (a.y = a.top),
                    a
                )
            }
            function nr(l, a) {
                return a === Le ? Bt(Zn(l)) : i(a) ? tr(a) : Bt(er(m(l)))
            }
            function hn(l) {
                var a = L(F(l)),
                    d = ['absolute', 'fixed'].indexOf(b(l).position) >= 0,
                    E = d && i(l) ? ee(l) : l
                return o(E)
                    ? a.filter(function (x) {
                          return o(x) && Pn(x, E) && h(x) !== 'body'
                      })
                    : []
            }
            function vn(l, a, d) {
                var E = a === 'clippingParents' ? hn(l) : [].concat(a),
                    x = [].concat(E, [d]),
                    A = x[0],
                    R = x.reduce(
                        function (P, j) {
                            var z = nr(l, j)
                            return (
                                (P.top = ft(z.top, P.top)),
                                (P.right = en(z.right, P.right)),
                                (P.bottom = en(z.bottom, P.bottom)),
                                (P.left = ft(z.left, P.left)),
                                P
                            )
                        },
                        nr(l, A),
                    )
                return (R.width = R.right - R.left), (R.height = R.bottom - R.top), (R.x = R.left), (R.y = R.top), R
            }
            function tn(l) {
                return l.split('-')[1]
            }
            function lt(l) {
                return ['top', 'bottom'].indexOf(l) >= 0 ? 'x' : 'y'
            }
            function rr(l) {
                var a = l.reference,
                    d = l.element,
                    E = l.placement,
                    x = E ? nt(E) : null,
                    A = E ? tn(E) : null,
                    R = a.x + a.width / 2 - d.width / 2,
                    P = a.y + a.height / 2 - d.height / 2,
                    j
                switch (x) {
                    case Z:
                        j = { x: R, y: a.y - d.height }
                        break
                    case de:
                        j = { x: R, y: a.y + a.height }
                        break
                    case N:
                        j = { x: a.x + a.width, y: P }
                        break
                    case ae:
                        j = { x: a.x - d.width, y: P }
                        break
                    default:
                        j = { x: a.x, y: a.y }
                }
                var z = x ? lt(x) : null
                if (z != null) {
                    var I = z === 'y' ? 'height' : 'width'
                    switch (A) {
                        case pe:
                            j[z] = j[z] - (a[I] / 2 - d[I] / 2)
                            break
                        case ve:
                            j[z] = j[z] + (a[I] / 2 - d[I] / 2)
                            break
                    }
                }
                return j
            }
            function or() {
                return { top: 0, right: 0, bottom: 0, left: 0 }
            }
            function ir(l) {
                return Object.assign({}, or(), l)
            }
            function ar(l, a) {
                return a.reduce(function (d, E) {
                    return (d[E] = l), d
                }, {})
            }
            function Ht(l, a) {
                a === void 0 && (a = {})
                var d = a,
                    E = d.placement,
                    x = E === void 0 ? l.placement : E,
                    A = d.boundary,
                    R = A === void 0 ? We : A,
                    P = d.rootBoundary,
                    j = P === void 0 ? Le : P,
                    z = d.elementContext,
                    I = z === void 0 ? Te : z,
                    Ee = d.altBoundary,
                    Me = Ee === void 0 ? !1 : Ee,
                    ye = d.padding,
                    fe = ye === void 0 ? 0 : ye,
                    Ae = ir(typeof fe != 'number' ? fe : ar(fe, Ce)),
                    ge = I === Te ? tt : Te,
                    ke = l.elements.reference,
                    De = l.rects.popper,
                    je = l.elements[Me ? ge : I],
                    J = vn(o(je) ? je : je.contextElement || m(l.elements.popper), R, j),
                    Se = t(ke),
                    xe = rr({ reference: Se, element: De, strategy: 'absolute', placement: x }),
                    Re = Bt(Object.assign({}, De, xe)),
                    Pe = I === Te ? Re : Se,
                    Ve = {
                        top: J.top - Pe.top + Ae.top,
                        bottom: Pe.bottom - J.bottom + Ae.bottom,
                        left: J.left - Pe.left + Ae.left,
                        right: Pe.right - J.right + Ae.right,
                    },
                    Fe = l.modifiersData.offset
                if (I === Te && Fe) {
                    var He = Fe[x]
                    Object.keys(Ve).forEach(function (ht) {
                        var Je = [N, de].indexOf(ht) >= 0 ? 1 : -1,
                            Dt = [Z, de].indexOf(ht) >= 0 ? 'y' : 'x'
                        Ve[ht] += He[Dt] * Je
                    })
                }
                return Ve
            }
            var sr =
                    'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.',
                jr =
                    'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.',
                gn = { placement: 'bottom', modifiers: [], strategy: 'absolute' }
            function nn() {
                for (var l = arguments.length, a = new Array(l), d = 0; d < l; d++) a[d] = arguments[d]
                return !a.some(function (E) {
                    return !(E && typeof E.getBoundingClientRect == 'function')
                })
            }
            function mn(l) {
                l === void 0 && (l = {})
                var a = l,
                    d = a.defaultModifiers,
                    E = d === void 0 ? [] : d,
                    x = a.defaultOptions,
                    A = x === void 0 ? gn : x
                return function (P, j, z) {
                    z === void 0 && (z = A)
                    var I = {
                            placement: 'bottom',
                            orderedModifiers: [],
                            options: Object.assign({}, gn, A),
                            modifiersData: {},
                            elements: { reference: P, popper: j },
                            attributes: {},
                            styles: {},
                        },
                        Ee = [],
                        Me = !1,
                        ye = {
                            state: I,
                            setOptions: function (ke) {
                                Ae(),
                                    (I.options = Object.assign({}, A, I.options, ke)),
                                    (I.scrollParents = {
                                        reference: o(P) ? L(P) : P.contextElement ? L(P.contextElement) : [],
                                        popper: L(j),
                                    })
                                var De = ut(kr([].concat(E, I.options.modifiers)))
                                I.orderedModifiers = De.filter(function (Fe) {
                                    return Fe.enabled
                                })
                                var je = Nr([].concat(De, I.options.modifiers), function (Fe) {
                                    var He = Fe.name
                                    return He
                                })
                                if ((Lr(je), nt(I.options.placement) === ue)) {
                                    var J = I.orderedModifiers.find(function (Fe) {
                                        var He = Fe.name
                                        return He === 'flip'
                                    })
                                    J ||
                                        console.error(
                                            [
                                                'Popper: "auto" placements require the "flip" modifier be',
                                                'present and enabled to work.',
                                            ].join(' '),
                                        )
                                }
                                var Se = b(j),
                                    xe = Se.marginTop,
                                    Re = Se.marginRight,
                                    Pe = Se.marginBottom,
                                    Ve = Se.marginLeft
                                return (
                                    [xe, Re, Pe, Ve].some(function (Fe) {
                                        return parseFloat(Fe)
                                    }) &&
                                        console.warn(
                                            [
                                                'Popper: CSS "margin" styles cannot be used to apply padding',
                                                'between the popper and its reference element or boundary.',
                                                'To replicate margin, use the `offset` modifier, as well as',
                                                'the `padding` option in the `preventOverflow` and `flip`',
                                                'modifiers.',
                                            ].join(' '),
                                        ),
                                    fe(),
                                    ye.update()
                                )
                            },
                            forceUpdate: function () {
                                if (!Me) {
                                    var ke = I.elements,
                                        De = ke.reference,
                                        je = ke.popper
                                    if (!nn(De, je)) {
                                        console.error(sr)
                                        return
                                    }
                                    ;(I.rects = {
                                        reference: S(De, ee(je), I.options.strategy === 'fixed'),
                                        popper: T(je),
                                    }),
                                        (I.reset = !1),
                                        (I.placement = I.options.placement),
                                        I.orderedModifiers.forEach(function (He) {
                                            return (I.modifiersData[He.name] = Object.assign({}, He.data))
                                        })
                                    for (var J = 0, Se = 0; Se < I.orderedModifiers.length; Se++) {
                                        if (((J += 1), J > 100)) {
                                            console.error(jr)
                                            break
                                        }
                                        if (I.reset === !0) {
                                            ;(I.reset = !1), (Se = -1)
                                            continue
                                        }
                                        var xe = I.orderedModifiers[Se],
                                            Re = xe.fn,
                                            Pe = xe.options,
                                            Ve = Pe === void 0 ? {} : Pe,
                                            Fe = xe.name
                                        typeof Re == 'function' &&
                                            (I = Re({ state: I, options: Ve, name: Fe, instance: ye }) || I)
                                    }
                                }
                            },
                            update: jt(function () {
                                return new Promise(function (ge) {
                                    ye.forceUpdate(), ge(I)
                                })
                            }),
                            destroy: function () {
                                Ae(), (Me = !0)
                            },
                        }
                    if (!nn(P, j)) return console.error(sr), ye
                    ye.setOptions(z).then(function (ge) {
                        !Me && z.onFirstUpdate && z.onFirstUpdate(ge)
                    })
                    function fe() {
                        I.orderedModifiers.forEach(function (ge) {
                            var ke = ge.name,
                                De = ge.options,
                                je = De === void 0 ? {} : De,
                                J = ge.effect
                            if (typeof J == 'function') {
                                var Se = J({ state: I, name: ke, instance: ye, options: je }),
                                    xe = function () {}
                                Ee.push(Se || xe)
                            }
                        })
                    }
                    function Ae() {
                        Ee.forEach(function (ge) {
                            return ge()
                        }),
                            (Ee = [])
                    }
                    return ye
                }
            }
            var bn = { passive: !0 }
            function Fr(l) {
                var a = l.state,
                    d = l.instance,
                    E = l.options,
                    x = E.scroll,
                    A = x === void 0 ? !0 : x,
                    R = E.resize,
                    P = R === void 0 ? !0 : R,
                    j = n(a.elements.popper),
                    z = [].concat(a.scrollParents.reference, a.scrollParents.popper)
                return (
                    A &&
                        z.forEach(function (I) {
                            I.addEventListener('scroll', d.update, bn)
                        }),
                    P && j.addEventListener('resize', d.update, bn),
                    function () {
                        A &&
                            z.forEach(function (I) {
                                I.removeEventListener('scroll', d.update, bn)
                            }),
                            P && j.removeEventListener('resize', d.update, bn)
                    }
                )
            }
            var Mn = { name: 'eventListeners', enabled: !0, phase: 'write', fn: function () {}, effect: Fr, data: {} }
            function Br(l) {
                var a = l.state,
                    d = l.name
                a.modifiersData[d] = rr({
                    reference: a.rects.reference,
                    element: a.rects.popper,
                    strategy: 'absolute',
                    placement: a.placement,
                })
            }
            var Rn = { name: 'popperOffsets', enabled: !0, phase: 'read', fn: Br, data: {} },
                Hr = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
            function $r(l) {
                var a = l.x,
                    d = l.y,
                    E = window,
                    x = E.devicePixelRatio || 1
                return { x: Ft(Ft(a * x) / x) || 0, y: Ft(Ft(d * x) / x) || 0 }
            }
            function In(l) {
                var a,
                    d = l.popper,
                    E = l.popperRect,
                    x = l.placement,
                    A = l.offsets,
                    R = l.position,
                    P = l.gpuAcceleration,
                    j = l.adaptive,
                    z = l.roundOffsets,
                    I = z === !0 ? $r(A) : typeof z == 'function' ? z(A) : A,
                    Ee = I.x,
                    Me = Ee === void 0 ? 0 : Ee,
                    ye = I.y,
                    fe = ye === void 0 ? 0 : ye,
                    Ae = A.hasOwnProperty('x'),
                    ge = A.hasOwnProperty('y'),
                    ke = ae,
                    De = Z,
                    je = window
                if (j) {
                    var J = ee(d),
                        Se = 'clientHeight',
                        xe = 'clientWidth'
                    J === n(d) &&
                        ((J = m(d)), b(J).position !== 'static' && ((Se = 'scrollHeight'), (xe = 'scrollWidth'))),
                        (J = J),
                        x === Z && ((De = de), (fe -= J[Se] - E.height), (fe *= P ? 1 : -1)),
                        x === ae && ((ke = N), (Me -= J[xe] - E.width), (Me *= P ? 1 : -1))
                }
                var Re = Object.assign({ position: R }, j && Hr)
                if (P) {
                    var Pe
                    return Object.assign(
                        {},
                        Re,
                        ((Pe = {}),
                        (Pe[De] = ge ? '0' : ''),
                        (Pe[ke] = Ae ? '0' : ''),
                        (Pe.transform =
                            (je.devicePixelRatio || 1) < 2
                                ? 'translate(' + Me + 'px, ' + fe + 'px)'
                                : 'translate3d(' + Me + 'px, ' + fe + 'px, 0)'),
                        Pe),
                    )
                }
                return Object.assign(
                    {},
                    Re,
                    ((a = {}), (a[De] = ge ? fe + 'px' : ''), (a[ke] = Ae ? Me + 'px' : ''), (a.transform = ''), a),
                )
            }
            function f(l) {
                var a = l.state,
                    d = l.options,
                    E = d.gpuAcceleration,
                    x = E === void 0 ? !0 : E,
                    A = d.adaptive,
                    R = A === void 0 ? !0 : A,
                    P = d.roundOffsets,
                    j = P === void 0 ? !0 : P,
                    z = b(a.elements.popper).transitionProperty || ''
                R &&
                    ['transform', 'top', 'right', 'bottom', 'left'].some(function (Ee) {
                        return z.indexOf(Ee) >= 0
                    }) &&
                    console.warn(
                        [
                            'Popper: Detected CSS transitions on at least one of the following',
                            'CSS properties: "transform", "top", "right", "bottom", "left".',
                            `

`,
                            'Disable the "computeStyles" modifier\'s `adaptive` option to allow',
                            'for smooth transitions, or remove these properties from the CSS',
                            'transition declaration on the popper element if only transitioning',
                            'opacity or background-color for example.',
                            `

`,
                            'We recommend using the popper element as a wrapper around an inner',
                            'element that can have any CSS property transitioned for animations.',
                        ].join(' '),
                    )
                var I = {
                    placement: nt(a.placement),
                    popper: a.elements.popper,
                    popperRect: a.rects.popper,
                    gpuAcceleration: x,
                }
                a.modifiersData.popperOffsets != null &&
                    (a.styles.popper = Object.assign(
                        {},
                        a.styles.popper,
                        In(
                            Object.assign({}, I, {
                                offsets: a.modifiersData.popperOffsets,
                                position: a.options.strategy,
                                adaptive: R,
                                roundOffsets: j,
                            }),
                        ),
                    )),
                    a.modifiersData.arrow != null &&
                        (a.styles.arrow = Object.assign(
                            {},
                            a.styles.arrow,
                            In(
                                Object.assign({}, I, {
                                    offsets: a.modifiersData.arrow,
                                    position: 'absolute',
                                    adaptive: !1,
                                    roundOffsets: j,
                                }),
                            ),
                        )),
                    (a.attributes.popper = Object.assign({}, a.attributes.popper, {
                        'data-popper-placement': a.placement,
                    }))
            }
            var p = { name: 'computeStyles', enabled: !0, phase: 'beforeWrite', fn: f, data: {} }
            function y(l) {
                var a = l.state
                Object.keys(a.elements).forEach(function (d) {
                    var E = a.styles[d] || {},
                        x = a.attributes[d] || {},
                        A = a.elements[d]
                    !i(A) ||
                        !h(A) ||
                        (Object.assign(A.style, E),
                        Object.keys(x).forEach(function (R) {
                            var P = x[R]
                            P === !1 ? A.removeAttribute(R) : A.setAttribute(R, P === !0 ? '' : P)
                        }))
                })
            }
            function C(l) {
                var a = l.state,
                    d = {
                        popper: { position: a.options.strategy, left: '0', top: '0', margin: '0' },
                        arrow: { position: 'absolute' },
                        reference: {},
                    }
                return (
                    Object.assign(a.elements.popper.style, d.popper),
                    (a.styles = d),
                    a.elements.arrow && Object.assign(a.elements.arrow.style, d.arrow),
                    function () {
                        Object.keys(a.elements).forEach(function (E) {
                            var x = a.elements[E],
                                A = a.attributes[E] || {},
                                R = Object.keys(a.styles.hasOwnProperty(E) ? a.styles[E] : d[E]),
                                P = R.reduce(function (j, z) {
                                    return (j[z] = ''), j
                                }, {})
                            !i(x) ||
                                !h(x) ||
                                (Object.assign(x.style, P),
                                Object.keys(A).forEach(function (j) {
                                    x.removeAttribute(j)
                                }))
                        })
                    }
                )
            }
            var k = { name: 'applyStyles', enabled: !0, phase: 'write', fn: y, effect: C, requires: ['computeStyles'] }
            function M(l, a, d) {
                var E = nt(l),
                    x = [ae, Z].indexOf(E) >= 0 ? -1 : 1,
                    A = typeof d == 'function' ? d(Object.assign({}, a, { placement: l })) : d,
                    R = A[0],
                    P = A[1]
                return (R = R || 0), (P = (P || 0) * x), [ae, N].indexOf(E) >= 0 ? { x: P, y: R } : { x: R, y: P }
            }
            function _(l) {
                var a = l.state,
                    d = l.options,
                    E = l.name,
                    x = d.offset,
                    A = x === void 0 ? [0, 0] : x,
                    R = dn.reduce(function (I, Ee) {
                        return (I[Ee] = M(Ee, a.rects, A)), I
                    }, {}),
                    P = R[a.placement],
                    j = P.x,
                    z = P.y
                a.modifiersData.popperOffsets != null &&
                    ((a.modifiersData.popperOffsets.x += j), (a.modifiersData.popperOffsets.y += z)),
                    (a.modifiersData[E] = R)
            }
            var se = { name: 'offset', enabled: !0, phase: 'main', requires: ['popperOffsets'], fn: _ },
                G = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
            function te(l) {
                return l.replace(/left|right|bottom|top/g, function (a) {
                    return G[a]
                })
            }
            var le = { start: 'end', end: 'start' }
            function Oe(l) {
                return l.replace(/start|end/g, function (a) {
                    return le[a]
                })
            }
            function Ne(l, a) {
                a === void 0 && (a = {})
                var d = a,
                    E = d.placement,
                    x = d.boundary,
                    A = d.rootBoundary,
                    R = d.padding,
                    P = d.flipVariations,
                    j = d.allowedAutoPlacements,
                    z = j === void 0 ? dn : j,
                    I = tn(E),
                    Ee = I
                        ? P
                            ? Nt
                            : Nt.filter(function (fe) {
                                  return tn(fe) === I
                              })
                        : Ce,
                    Me = Ee.filter(function (fe) {
                        return z.indexOf(fe) >= 0
                    })
                Me.length === 0 &&
                    ((Me = Ee),
                    console.error(
                        [
                            'Popper: The `allowedAutoPlacements` option did not allow any',
                            'placements. Ensure the `placement` option matches the variation',
                            'of the allowed placements.',
                            'For example, "auto" cannot be used to allow "bottom-start".',
                            'Use "auto-start" instead.',
                        ].join(' '),
                    ))
                var ye = Me.reduce(function (fe, Ae) {
                    return (fe[Ae] = Ht(l, { placement: Ae, boundary: x, rootBoundary: A, padding: R })[nt(Ae)]), fe
                }, {})
                return Object.keys(ye).sort(function (fe, Ae) {
                    return ye[fe] - ye[Ae]
                })
            }
            function be(l) {
                if (nt(l) === ue) return []
                var a = te(l)
                return [Oe(l), a, Oe(a)]
            }
            function _e(l) {
                var a = l.state,
                    d = l.options,
                    E = l.name
                if (!a.modifiersData[E]._skip) {
                    for (
                        var x = d.mainAxis,
                            A = x === void 0 ? !0 : x,
                            R = d.altAxis,
                            P = R === void 0 ? !0 : R,
                            j = d.fallbackPlacements,
                            z = d.padding,
                            I = d.boundary,
                            Ee = d.rootBoundary,
                            Me = d.altBoundary,
                            ye = d.flipVariations,
                            fe = ye === void 0 ? !0 : ye,
                            Ae = d.allowedAutoPlacements,
                            ge = a.options.placement,
                            ke = nt(ge),
                            De = ke === ge,
                            je = j || (De || !fe ? [te(ge)] : be(ge)),
                            J = [ge].concat(je).reduce(function (V, ie) {
                                return V.concat(
                                    nt(ie) === ue
                                        ? Ne(a, {
                                              placement: ie,
                                              boundary: I,
                                              rootBoundary: Ee,
                                              padding: z,
                                              flipVariations: fe,
                                              allowedAutoPlacements: Ae,
                                          })
                                        : ie,
                                )
                            }, []),
                            Se = a.rects.reference,
                            xe = a.rects.popper,
                            Re = new Map(),
                            Pe = !0,
                            Ve = J[0],
                            Fe = 0;
                        Fe < J.length;
                        Fe++
                    ) {
                        var He = J[Fe],
                            ht = nt(He),
                            Je = tn(He) === pe,
                            Dt = [Z, de].indexOf(ht) >= 0,
                            on = Dt ? 'width' : 'height',
                            Ut = Ht(a, { placement: He, boundary: I, rootBoundary: Ee, altBoundary: Me, padding: z }),
                            Tt = Dt ? (Je ? N : ae) : Je ? de : Z
                        Se[on] > xe[on] && (Tt = te(Tt))
                        var Ln = te(Tt),
                            Xt = []
                        if (
                            (A && Xt.push(Ut[ht] <= 0),
                            P && Xt.push(Ut[Tt] <= 0, Ut[Ln] <= 0),
                            Xt.every(function (V) {
                                return V
                            }))
                        ) {
                            ;(Ve = He), (Pe = !1)
                            break
                        }
                        Re.set(He, Xt)
                    }
                    if (Pe)
                        for (
                            var yn = fe ? 3 : 1,
                                Nn = function (ie) {
                                    var ce = J.find(function (ze) {
                                        var Ye = Re.get(ze)
                                        if (Ye)
                                            return Ye.slice(0, ie).every(function (bt) {
                                                return bt
                                            })
                                    })
                                    if (ce) return (Ve = ce), 'break'
                                },
                                w = yn;
                            w > 0;
                            w--
                        ) {
                            var H = Nn(w)
                            if (H === 'break') break
                        }
                    a.placement !== Ve && ((a.modifiersData[E]._skip = !0), (a.placement = Ve), (a.reset = !0))
                }
            }
            var U = {
                name: 'flip',
                enabled: !0,
                phase: 'main',
                fn: _e,
                requiresIfExists: ['offset'],
                data: { _skip: !1 },
            }
            function ne(l) {
                return l === 'x' ? 'y' : 'x'
            }
            function re(l, a, d) {
                return ft(l, en(a, d))
            }
            function $(l) {
                var a = l.state,
                    d = l.options,
                    E = l.name,
                    x = d.mainAxis,
                    A = x === void 0 ? !0 : x,
                    R = d.altAxis,
                    P = R === void 0 ? !1 : R,
                    j = d.boundary,
                    z = d.rootBoundary,
                    I = d.altBoundary,
                    Ee = d.padding,
                    Me = d.tether,
                    ye = Me === void 0 ? !0 : Me,
                    fe = d.tetherOffset,
                    Ae = fe === void 0 ? 0 : fe,
                    ge = Ht(a, { boundary: j, rootBoundary: z, padding: Ee, altBoundary: I }),
                    ke = nt(a.placement),
                    De = tn(a.placement),
                    je = !De,
                    J = lt(ke),
                    Se = ne(J),
                    xe = a.modifiersData.popperOffsets,
                    Re = a.rects.reference,
                    Pe = a.rects.popper,
                    Ve = typeof Ae == 'function' ? Ae(Object.assign({}, a.rects, { placement: a.placement })) : Ae,
                    Fe = { x: 0, y: 0 }
                if (xe) {
                    if (A || P) {
                        var He = J === 'y' ? Z : ae,
                            ht = J === 'y' ? de : N,
                            Je = J === 'y' ? 'height' : 'width',
                            Dt = xe[J],
                            on = xe[J] + ge[He],
                            Ut = xe[J] - ge[ht],
                            Tt = ye ? -Pe[Je] / 2 : 0,
                            Ln = De === pe ? Re[Je] : Pe[Je],
                            Xt = De === pe ? -Pe[Je] : -Re[Je],
                            yn = a.elements.arrow,
                            Nn = ye && yn ? T(yn) : { width: 0, height: 0 },
                            w = a.modifiersData['arrow#persistent']
                                ? a.modifiersData['arrow#persistent'].padding
                                : or(),
                            H = w[He],
                            V = w[ht],
                            ie = re(0, Re[Je], Nn[Je]),
                            ce = je ? Re[Je] / 2 - Tt - ie - H - Ve : Ln - ie - H - Ve,
                            ze = je ? -Re[Je] / 2 + Tt + ie + V + Ve : Xt + ie + V + Ve,
                            Ye = a.elements.arrow && ee(a.elements.arrow),
                            bt = Ye ? (J === 'y' ? Ye.clientTop || 0 : Ye.clientLeft || 0) : 0,
                            kn = a.modifiersData.offset ? a.modifiersData.offset[a.placement][J] : 0,
                            yt = xe[J] + ce - kn - bt,
                            wn = xe[J] + ze - kn
                        if (A) {
                            var an = re(ye ? en(on, yt) : on, Dt, ye ? ft(Ut, wn) : Ut)
                            ;(xe[J] = an), (Fe[J] = an - Dt)
                        }
                        if (P) {
                            var zt = J === 'x' ? Z : ae,
                                Wr = J === 'x' ? de : N,
                                Yt = xe[Se],
                                sn = Yt + ge[zt],
                                wo = Yt - ge[Wr],
                                Eo = re(ye ? en(sn, yt) : sn, Yt, ye ? ft(wo, wn) : wo)
                            ;(xe[Se] = Eo), (Fe[Se] = Eo - Yt)
                        }
                    }
                    a.modifiersData[E] = Fe
                }
            }
            var X = { name: 'preventOverflow', enabled: !0, phase: 'main', fn: $, requiresIfExists: ['offset'] },
                v = function (a, d) {
                    return (
                        (a = typeof a == 'function' ? a(Object.assign({}, d.rects, { placement: d.placement })) : a),
                        ir(typeof a != 'number' ? a : ar(a, Ce))
                    )
                }
            function Xe(l) {
                var a,
                    d = l.state,
                    E = l.name,
                    x = l.options,
                    A = d.elements.arrow,
                    R = d.modifiersData.popperOffsets,
                    P = nt(d.placement),
                    j = lt(P),
                    z = [ae, N].indexOf(P) >= 0,
                    I = z ? 'height' : 'width'
                if (!(!A || !R)) {
                    var Ee = v(x.padding, d),
                        Me = T(A),
                        ye = j === 'y' ? Z : ae,
                        fe = j === 'y' ? de : N,
                        Ae = d.rects.reference[I] + d.rects.reference[j] - R[j] - d.rects.popper[I],
                        ge = R[j] - d.rects.reference[j],
                        ke = ee(A),
                        De = ke ? (j === 'y' ? ke.clientHeight || 0 : ke.clientWidth || 0) : 0,
                        je = Ae / 2 - ge / 2,
                        J = Ee[ye],
                        Se = De - Me[I] - Ee[fe],
                        xe = De / 2 - Me[I] / 2 + je,
                        Re = re(J, xe, Se),
                        Pe = j
                    d.modifiersData[E] = ((a = {}), (a[Pe] = Re), (a.centerOffset = Re - xe), a)
                }
            }
            function Q(l) {
                var a = l.state,
                    d = l.options,
                    E = d.element,
                    x = E === void 0 ? '[data-popper-arrow]' : E
                if (x != null && !(typeof x == 'string' && ((x = a.elements.popper.querySelector(x)), !x))) {
                    if (
                        (i(x) ||
                            console.error(
                                [
                                    'Popper: "arrow" element must be an HTMLElement (not an SVGElement).',
                                    'To use an SVG arrow, wrap it in an HTMLElement that will be used as',
                                    'the arrow.',
                                ].join(' '),
                            ),
                        !Pn(a.elements.popper, x))
                    ) {
                        console.error(
                            ['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(
                                ' ',
                            ),
                        )
                        return
                    }
                    a.elements.arrow = x
                }
            }
            var At = {
                name: 'arrow',
                enabled: !0,
                phase: 'main',
                fn: Xe,
                effect: Q,
                requires: ['popperOffsets'],
                requiresIfExists: ['preventOverflow'],
            }
            function dt(l, a, d) {
                return (
                    d === void 0 && (d = { x: 0, y: 0 }),
                    {
                        top: l.top - a.height - d.y,
                        right: l.right - a.width + d.x,
                        bottom: l.bottom - a.height + d.y,
                        left: l.left - a.width - d.x,
                    }
                )
            }
            function $t(l) {
                return [Z, N, de, ae].some(function (a) {
                    return l[a] >= 0
                })
            }
            function Wt(l) {
                var a = l.state,
                    d = l.name,
                    E = a.rects.reference,
                    x = a.rects.popper,
                    A = a.modifiersData.preventOverflow,
                    R = Ht(a, { elementContext: 'reference' }),
                    P = Ht(a, { altBoundary: !0 }),
                    j = dt(R, E),
                    z = dt(P, x, A),
                    I = $t(j),
                    Ee = $t(z)
                ;(a.modifiersData[d] = {
                    referenceClippingOffsets: j,
                    popperEscapeOffsets: z,
                    isReferenceHidden: I,
                    hasPopperEscaped: Ee,
                }),
                    (a.attributes.popper = Object.assign({}, a.attributes.popper, {
                        'data-popper-reference-hidden': I,
                        'data-popper-escaped': Ee,
                    }))
            }
            var Vt = { name: 'hide', enabled: !0, phase: 'main', requiresIfExists: ['preventOverflow'], fn: Wt },
                Ze = [Mn, Rn, p, k],
                ot = mn({ defaultModifiers: Ze }),
                pt = [Mn, Rn, p, k, se, U, X, At, Vt],
                rn = mn({ defaultModifiers: pt })
            ;(e.applyStyles = k),
                (e.arrow = At),
                (e.computeStyles = p),
                (e.createPopper = rn),
                (e.createPopperLite = ot),
                (e.defaultModifiers = pt),
                (e.detectOverflow = Ht),
                (e.eventListeners = Mn),
                (e.flip = U),
                (e.hide = Vt),
                (e.offset = se),
                (e.popperGenerator = mn),
                (e.popperOffsets = Rn),
                (e.preventOverflow = X)
        }),
        Oi = Ei((e) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 })
            var t = $a(),
                n =
                    '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>',
                r = 'tippy-box',
                o = 'tippy-content',
                i = 'tippy-backdrop',
                s = 'tippy-arrow',
                c = 'tippy-svg-arrow',
                u = { passive: !0, capture: !0 }
            function h(f, p) {
                return {}.hasOwnProperty.call(f, p)
            }
            function m(f, p, y) {
                if (Array.isArray(f)) {
                    var C = f[p]
                    return C ?? (Array.isArray(y) ? y[p] : y)
                }
                return f
            }
            function g(f, p) {
                var y = {}.toString.call(f)
                return y.indexOf('[object') === 0 && y.indexOf(p + ']') > -1
            }
            function b(f, p) {
                return typeof f == 'function' ? f.apply(void 0, p) : f
            }
            function O(f, p) {
                if (p === 0) return f
                var y
                return function (C) {
                    clearTimeout(y),
                        (y = setTimeout(function () {
                            f(C)
                        }, p))
                }
            }
            function S(f, p) {
                var y = Object.assign({}, f)
                return (
                    p.forEach(function (C) {
                        delete y[C]
                    }),
                    y
                )
            }
            function T(f) {
                return f.split(/\s+/).filter(Boolean)
            }
            function F(f) {
                return [].concat(f)
            }
            function B(f, p) {
                f.indexOf(p) === -1 && f.push(p)
            }
            function L(f) {
                return f.filter(function (p, y) {
                    return f.indexOf(p) === y
                })
            }
            function K(f) {
                return f.split('-')[0]
            }
            function W(f) {
                return [].slice.call(f)
            }
            function he(f) {
                return Object.keys(f).reduce(function (p, y) {
                    return f[y] !== void 0 && (p[y] = f[y]), p
                }, {})
            }
            function ee() {
                return document.createElement('div')
            }
            function Z(f) {
                return ['Element', 'Fragment'].some(function (p) {
                    return g(f, p)
                })
            }
            function de(f) {
                return g(f, 'NodeList')
            }
            function N(f) {
                return g(f, 'MouseEvent')
            }
            function ae(f) {
                return !!(f && f._tippy && f._tippy.reference === f)
            }
            function ue(f) {
                return Z(f) ? [f] : de(f) ? W(f) : Array.isArray(f) ? f : W(document.querySelectorAll(f))
            }
            function Ce(f, p) {
                f.forEach(function (y) {
                    y && (y.style.transitionDuration = p + 'ms')
                })
            }
            function pe(f, p) {
                f.forEach(function (y) {
                    y && y.setAttribute('data-state', p)
                })
            }
            function ve(f) {
                var p,
                    y = F(f),
                    C = y[0]
                return !(C == null || (p = C.ownerDocument) == null) && p.body ? C.ownerDocument : document
            }
            function We(f, p) {
                var y = p.clientX,
                    C = p.clientY
                return f.every(function (k) {
                    var M = k.popperRect,
                        _ = k.popperState,
                        se = k.props,
                        G = se.interactiveBorder,
                        te = K(_.placement),
                        le = _.modifiersData.offset
                    if (!le) return !0
                    var Oe = te === 'bottom' ? le.top.y : 0,
                        Ne = te === 'top' ? le.bottom.y : 0,
                        be = te === 'right' ? le.left.x : 0,
                        _e = te === 'left' ? le.right.x : 0,
                        U = M.top - C + Oe > G,
                        ne = C - M.bottom - Ne > G,
                        re = M.left - y + be > G,
                        $ = y - M.right - _e > G
                    return U || ne || re || $
                })
            }
            function Le(f, p, y) {
                var C = p + 'EventListener'
                ;['transitionend', 'webkitTransitionEnd'].forEach(function (k) {
                    f[C](k, y)
                })
            }
            var Te = { isTouch: !1 },
                tt = 0
            function Nt() {
                Te.isTouch || ((Te.isTouch = !0), window.performance && document.addEventListener('mousemove', dn))
            }
            function dn() {
                var f = performance.now()
                f - tt < 20 && ((Te.isTouch = !1), document.removeEventListener('mousemove', dn)), (tt = f)
            }
            function pn() {
                var f = document.activeElement
                if (ae(f)) {
                    var p = f._tippy
                    f.blur && !p.state.isVisible && f.blur()
                }
            }
            function _n() {
                document.addEventListener('touchstart', Nt, u), window.addEventListener('blur', pn)
            }
            var Tr = typeof window < 'u' && typeof document < 'u',
                _r = Tr ? navigator.userAgent : '',
                Pr = /MSIE |Trident\//.test(_r)
            function kt(f) {
                var p = f === 'destroy' ? 'n already-' : ' '
                return [
                    f + '() was called on a' + p + 'destroyed instance. This is a no-op but',
                    'indicates a potential memory leak.',
                ].join(' ')
            }
            function Jn(f) {
                var p = /[ \t]{2,}/g,
                    y = /^[ \t]*/gm
                return f.replace(p, ' ').replace(y, '').trim()
            }
            function Mr(f) {
                return Jn(
                    `
  %ctippy.js

  %c` +
                        Jn(f) +
                        `

  %c\u{1F477}\u200D This is a development-only message. It will be removed in production.
  `,
                )
            }
            function Qn(f) {
                return [
                    Mr(f),
                    'color: #00C584; font-size: 1.3em; font-weight: bold;',
                    'line-height: 1.5',
                    'color: #a6a095;',
                ]
            }
            var Ct
            Rr()
            function Rr() {
                Ct = new Set()
            }
            function ut(f, p) {
                if (f && !Ct.has(p)) {
                    var y
                    Ct.add(p), (y = console).warn.apply(y, Qn(p))
                }
            }
            function jt(f, p) {
                if (f && !Ct.has(p)) {
                    var y
                    Ct.add(p), (y = console).error.apply(y, Qn(p))
                }
            }
            function gt(f) {
                var p = !f,
                    y = Object.prototype.toString.call(f) === '[object Object]' && !f.addEventListener
                jt(
                    p,
                    [
                        'tippy() was passed',
                        '`' + String(f) + '`',
                        'as its targets (first) argument. Valid types are: String, Element,',
                        'Element[], or NodeList.',
                    ].join(' '),
                ),
                    jt(
                        y,
                        [
                            'tippy() was passed a plain object which is not supported as an argument',
                            'for virtual positioning. Use props.getReferenceClientRect instead.',
                        ].join(' '),
                    )
            }
            var mt = { animateFill: !1, followCursor: !1, inlinePositioning: !1, sticky: !1 },
                Ir = {
                    allowHTML: !1,
                    animation: 'fade',
                    arrow: !0,
                    content: '',
                    inertia: !1,
                    maxWidth: 350,
                    role: 'tooltip',
                    theme: '',
                    zIndex: 9999,
                },
                Ke = Object.assign(
                    {
                        appendTo: function () {
                            return document.body
                        },
                        aria: { content: 'auto', expanded: 'auto' },
                        delay: 0,
                        duration: [300, 250],
                        getReferenceClientRect: null,
                        hideOnClick: !0,
                        ignoreAttributes: !1,
                        interactive: !1,
                        interactiveBorder: 2,
                        interactiveDebounce: 0,
                        moveTransition: '',
                        offset: [0, 10],
                        onAfterUpdate: function () {},
                        onBeforeUpdate: function () {},
                        onCreate: function () {},
                        onDestroy: function () {},
                        onHidden: function () {},
                        onHide: function () {},
                        onMount: function () {},
                        onShow: function () {},
                        onShown: function () {},
                        onTrigger: function () {},
                        onUntrigger: function () {},
                        onClickOutside: function () {},
                        placement: 'top',
                        plugins: [],
                        popperOptions: {},
                        render: null,
                        showOnCreate: !1,
                        touch: !0,
                        trigger: 'mouseenter focus',
                        triggerTarget: null,
                    },
                    mt,
                    {},
                    Ir,
                ),
                Lr = Object.keys(Ke),
                Nr = function (p) {
                    ft(p, [])
                    var y = Object.keys(p)
                    y.forEach(function (C) {
                        Ke[C] = p[C]
                    })
                }
            function nt(f) {
                var p = f.plugins || [],
                    y = p.reduce(function (C, k) {
                        var M = k.name,
                            _ = k.defaultValue
                        return M && (C[M] = f[M] !== void 0 ? f[M] : _), C
                    }, {})
                return Object.assign({}, f, {}, y)
            }
            function kr(f, p) {
                var y = p ? Object.keys(nt(Object.assign({}, Ke, { plugins: p }))) : Lr,
                    C = y.reduce(function (k, M) {
                        var _ = (f.getAttribute('data-tippy-' + M) || '').trim()
                        if (!_) return k
                        if (M === 'content') k[M] = _
                        else
                            try {
                                k[M] = JSON.parse(_)
                            } catch {
                                k[M] = _
                            }
                        return k
                    }, {})
                return C
            }
            function Zn(f, p) {
                var y = Object.assign({}, p, { content: b(p.content, [f]) }, p.ignoreAttributes ? {} : kr(f, p.plugins))
                return (
                    (y.aria = Object.assign({}, Ke.aria, {}, y.aria)),
                    (y.aria = {
                        expanded: y.aria.expanded === 'auto' ? p.interactive : y.aria.expanded,
                        content: y.aria.content === 'auto' ? (p.interactive ? null : 'describedby') : y.aria.content,
                    }),
                    y
                )
            }
            function ft(f, p) {
                f === void 0 && (f = {}), p === void 0 && (p = [])
                var y = Object.keys(f)
                y.forEach(function (C) {
                    var k = S(Ke, Object.keys(mt)),
                        M = !h(k, C)
                    M &&
                        (M =
                            p.filter(function (_) {
                                return _.name === C
                            }).length === 0),
                        ut(
                            M,
                            [
                                '`' + C + '`',
                                "is not a valid prop. You may have spelled it incorrectly, or if it's",
                                'a plugin, forgot to pass it in an array as props.plugins.',
                                `

`,
                                `All props: https://atomiks.github.io/tippyjs/v6/all-props/
`,
                                'Plugins: https://atomiks.github.io/tippyjs/v6/plugins/',
                            ].join(' '),
                        )
                })
            }
            var en = function () {
                return 'innerHTML'
            }
            function Ft(f, p) {
                f[en()] = p
            }
            function er(f) {
                var p = ee()
                return f === !0 ? (p.className = s) : ((p.className = c), Z(f) ? p.appendChild(f) : Ft(p, f)), p
            }
            function Pn(f, p) {
                Z(p.content)
                    ? (Ft(f, ''), f.appendChild(p.content))
                    : typeof p.content != 'function' && (p.allowHTML ? Ft(f, p.content) : (f.textContent = p.content))
            }
            function Bt(f) {
                var p = f.firstElementChild,
                    y = W(p.children)
                return {
                    box: p,
                    content: y.find(function (C) {
                        return C.classList.contains(o)
                    }),
                    arrow: y.find(function (C) {
                        return C.classList.contains(s) || C.classList.contains(c)
                    }),
                    backdrop: y.find(function (C) {
                        return C.classList.contains(i)
                    }),
                }
            }
            function tr(f) {
                var p = ee(),
                    y = ee()
                ;(y.className = r), y.setAttribute('data-state', 'hidden'), y.setAttribute('tabindex', '-1')
                var C = ee()
                ;(C.className = o),
                    C.setAttribute('data-state', 'hidden'),
                    Pn(C, f.props),
                    p.appendChild(y),
                    y.appendChild(C),
                    k(f.props, f.props)
                function k(M, _) {
                    var se = Bt(p),
                        G = se.box,
                        te = se.content,
                        le = se.arrow
                    _.theme ? G.setAttribute('data-theme', _.theme) : G.removeAttribute('data-theme'),
                        typeof _.animation == 'string'
                            ? G.setAttribute('data-animation', _.animation)
                            : G.removeAttribute('data-animation'),
                        _.inertia ? G.setAttribute('data-inertia', '') : G.removeAttribute('data-inertia'),
                        (G.style.maxWidth = typeof _.maxWidth == 'number' ? _.maxWidth + 'px' : _.maxWidth),
                        _.role ? G.setAttribute('role', _.role) : G.removeAttribute('role'),
                        (M.content !== _.content || M.allowHTML !== _.allowHTML) && Pn(te, f.props),
                        _.arrow
                            ? le
                                ? M.arrow !== _.arrow && (G.removeChild(le), G.appendChild(er(_.arrow)))
                                : G.appendChild(er(_.arrow))
                            : le && G.removeChild(le)
                }
                return { popper: p, onUpdate: k }
            }
            tr.$$tippy = !0
            var nr = 1,
                hn = [],
                vn = []
            function tn(f, p) {
                var y = Zn(f, Object.assign({}, Ke, {}, nt(he(p)))),
                    C,
                    k,
                    M,
                    _ = !1,
                    se = !1,
                    G = !1,
                    te = !1,
                    le,
                    Oe,
                    Ne,
                    be = [],
                    _e = O(De, y.interactiveDebounce),
                    U,
                    ne = nr++,
                    re = null,
                    $ = L(y.plugins),
                    X = { isEnabled: !0, isVisible: !1, isDestroyed: !1, isMounted: !1, isShown: !1 },
                    v = {
                        id: ne,
                        reference: f,
                        popper: ee(),
                        popperInstance: re,
                        props: y,
                        state: X,
                        plugins: $,
                        clearDelayTimeouts: Dt,
                        setProps: on,
                        setContent: Ut,
                        show: Tt,
                        hide: Ln,
                        hideWithInteractivity: Xt,
                        enable: ht,
                        disable: Je,
                        unmount: yn,
                        destroy: Nn,
                    }
                if (!y.render) return jt(!0, 'render() function has not been supplied.'), v
                var Xe = y.render(v),
                    Q = Xe.popper,
                    At = Xe.onUpdate
                Q.setAttribute('data-tippy-root', ''),
                    (Q.id = 'tippy-' + v.id),
                    (v.popper = Q),
                    (f._tippy = v),
                    (Q._tippy = v)
                var dt = $.map(function (w) {
                        return w.fn(v)
                    }),
                    $t = f.hasAttribute('aria-expanded')
                return (
                    Ae(),
                    x(),
                    a(),
                    d('onCreate', [v]),
                    y.showOnCreate && Fe(),
                    Q.addEventListener('mouseenter', function () {
                        v.props.interactive && v.state.isVisible && v.clearDelayTimeouts()
                    }),
                    Q.addEventListener('mouseleave', function (w) {
                        v.props.interactive &&
                            v.props.trigger.indexOf('mouseenter') >= 0 &&
                            (pt().addEventListener('mousemove', _e), _e(w))
                    }),
                    v
                )
                function Wt() {
                    var w = v.props.touch
                    return Array.isArray(w) ? w : [w, 0]
                }
                function Vt() {
                    return Wt()[0] === 'hold'
                }
                function Ze() {
                    var w
                    return !!((w = v.props.render) != null && w.$$tippy)
                }
                function ot() {
                    return U || f
                }
                function pt() {
                    var w = ot().parentNode
                    return w ? ve(w) : document
                }
                function rn() {
                    return Bt(Q)
                }
                function l(w) {
                    return (v.state.isMounted && !v.state.isVisible) || Te.isTouch || (le && le.type === 'focus')
                        ? 0
                        : m(v.props.delay, w ? 0 : 1, Ke.delay)
                }
                function a() {
                    ;(Q.style.pointerEvents = v.props.interactive && v.state.isVisible ? '' : 'none'),
                        (Q.style.zIndex = '' + v.props.zIndex)
                }
                function d(w, H, V) {
                    if (
                        (V === void 0 && (V = !0),
                        dt.forEach(function (ce) {
                            ce[w] && ce[w].apply(void 0, H)
                        }),
                        V)
                    ) {
                        var ie
                        ;(ie = v.props)[w].apply(ie, H)
                    }
                }
                function E() {
                    var w = v.props.aria
                    if (w.content) {
                        var H = 'aria-' + w.content,
                            V = Q.id,
                            ie = F(v.props.triggerTarget || f)
                        ie.forEach(function (ce) {
                            var ze = ce.getAttribute(H)
                            if (v.state.isVisible) ce.setAttribute(H, ze ? ze + ' ' + V : V)
                            else {
                                var Ye = ze && ze.replace(V, '').trim()
                                Ye ? ce.setAttribute(H, Ye) : ce.removeAttribute(H)
                            }
                        })
                    }
                }
                function x() {
                    if (!($t || !v.props.aria.expanded)) {
                        var w = F(v.props.triggerTarget || f)
                        w.forEach(function (H) {
                            v.props.interactive
                                ? H.setAttribute('aria-expanded', v.state.isVisible && H === ot() ? 'true' : 'false')
                                : H.removeAttribute('aria-expanded')
                        })
                    }
                }
                function A() {
                    pt().removeEventListener('mousemove', _e),
                        (hn = hn.filter(function (w) {
                            return w !== _e
                        }))
                }
                function R(w) {
                    if (
                        !(Te.isTouch && (G || w.type === 'mousedown')) &&
                        !(v.props.interactive && Q.contains(w.target))
                    ) {
                        if (ot().contains(w.target)) {
                            if (Te.isTouch || (v.state.isVisible && v.props.trigger.indexOf('click') >= 0)) return
                        } else d('onClickOutside', [v, w])
                        v.props.hideOnClick === !0 &&
                            (v.clearDelayTimeouts(),
                            v.hide(),
                            (se = !0),
                            setTimeout(function () {
                                se = !1
                            }),
                            v.state.isMounted || I())
                    }
                }
                function P() {
                    G = !0
                }
                function j() {
                    G = !1
                }
                function z() {
                    var w = pt()
                    w.addEventListener('mousedown', R, !0),
                        w.addEventListener('touchend', R, u),
                        w.addEventListener('touchstart', j, u),
                        w.addEventListener('touchmove', P, u)
                }
                function I() {
                    var w = pt()
                    w.removeEventListener('mousedown', R, !0),
                        w.removeEventListener('touchend', R, u),
                        w.removeEventListener('touchstart', j, u),
                        w.removeEventListener('touchmove', P, u)
                }
                function Ee(w, H) {
                    ye(w, function () {
                        !v.state.isVisible && Q.parentNode && Q.parentNode.contains(Q) && H()
                    })
                }
                function Me(w, H) {
                    ye(w, H)
                }
                function ye(w, H) {
                    var V = rn().box
                    function ie(ce) {
                        ce.target === V && (Le(V, 'remove', ie), H())
                    }
                    if (w === 0) return H()
                    Le(V, 'remove', Oe), Le(V, 'add', ie), (Oe = ie)
                }
                function fe(w, H, V) {
                    V === void 0 && (V = !1)
                    var ie = F(v.props.triggerTarget || f)
                    ie.forEach(function (ce) {
                        ce.addEventListener(w, H, V), be.push({ node: ce, eventType: w, handler: H, options: V })
                    })
                }
                function Ae() {
                    Vt() && (fe('touchstart', ke, { passive: !0 }), fe('touchend', je, { passive: !0 })),
                        T(v.props.trigger).forEach(function (w) {
                            if (w !== 'manual')
                                switch ((fe(w, ke), w)) {
                                    case 'mouseenter':
                                        fe('mouseleave', je)
                                        break
                                    case 'focus':
                                        fe(Pr ? 'focusout' : 'blur', J)
                                        break
                                    case 'focusin':
                                        fe('focusout', J)
                                        break
                                }
                        })
                }
                function ge() {
                    be.forEach(function (w) {
                        var H = w.node,
                            V = w.eventType,
                            ie = w.handler,
                            ce = w.options
                        H.removeEventListener(V, ie, ce)
                    }),
                        (be = [])
                }
                function ke(w) {
                    var H,
                        V = !1
                    if (!(!v.state.isEnabled || Se(w) || se)) {
                        var ie = ((H = le) == null ? void 0 : H.type) === 'focus'
                        ;(le = w),
                            (U = w.currentTarget),
                            x(),
                            !v.state.isVisible &&
                                N(w) &&
                                hn.forEach(function (ce) {
                                    return ce(w)
                                }),
                            w.type === 'click' &&
                            (v.props.trigger.indexOf('mouseenter') < 0 || _) &&
                            v.props.hideOnClick !== !1 &&
                            v.state.isVisible
                                ? (V = !0)
                                : Fe(w),
                            w.type === 'click' && (_ = !V),
                            V && !ie && He(w)
                    }
                }
                function De(w) {
                    var H = w.target,
                        V = ot().contains(H) || Q.contains(H)
                    if (!(w.type === 'mousemove' && V)) {
                        var ie = Ve()
                            .concat(Q)
                            .map(function (ce) {
                                var ze,
                                    Ye = ce._tippy,
                                    bt = (ze = Ye.popperInstance) == null ? void 0 : ze.state
                                return bt ? { popperRect: ce.getBoundingClientRect(), popperState: bt, props: y } : null
                            })
                            .filter(Boolean)
                        We(ie, w) && (A(), He(w))
                    }
                }
                function je(w) {
                    var H = Se(w) || (v.props.trigger.indexOf('click') >= 0 && _)
                    if (!H) {
                        if (v.props.interactive) {
                            v.hideWithInteractivity(w)
                            return
                        }
                        He(w)
                    }
                }
                function J(w) {
                    ;(v.props.trigger.indexOf('focusin') < 0 && w.target !== ot()) ||
                        (v.props.interactive && w.relatedTarget && Q.contains(w.relatedTarget)) ||
                        He(w)
                }
                function Se(w) {
                    return Te.isTouch ? Vt() !== w.type.indexOf('touch') >= 0 : !1
                }
                function xe() {
                    Re()
                    var w = v.props,
                        H = w.popperOptions,
                        V = w.placement,
                        ie = w.offset,
                        ce = w.getReferenceClientRect,
                        ze = w.moveTransition,
                        Ye = Ze() ? Bt(Q).arrow : null,
                        bt = ce ? { getBoundingClientRect: ce, contextElement: ce.contextElement || ot() } : f,
                        kn = {
                            name: '$$tippy',
                            enabled: !0,
                            phase: 'beforeWrite',
                            requires: ['computeStyles'],
                            fn: function (an) {
                                var zt = an.state
                                if (Ze()) {
                                    var Wr = rn(),
                                        Yt = Wr.box
                                    ;['placement', 'reference-hidden', 'escaped'].forEach(function (sn) {
                                        sn === 'placement'
                                            ? Yt.setAttribute('data-placement', zt.placement)
                                            : zt.attributes.popper['data-popper-' + sn]
                                              ? Yt.setAttribute('data-' + sn, '')
                                              : Yt.removeAttribute('data-' + sn)
                                    }),
                                        (zt.attributes.popper = {})
                                }
                            },
                        },
                        yt = [
                            { name: 'offset', options: { offset: ie } },
                            { name: 'preventOverflow', options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } },
                            { name: 'flip', options: { padding: 5 } },
                            { name: 'computeStyles', options: { adaptive: !ze } },
                            kn,
                        ]
                    Ze() && Ye && yt.push({ name: 'arrow', options: { element: Ye, padding: 3 } }),
                        yt.push.apply(yt, H?.modifiers || []),
                        (v.popperInstance = t.createPopper(
                            bt,
                            Q,
                            Object.assign({}, H, { placement: V, onFirstUpdate: Ne, modifiers: yt }),
                        ))
                }
                function Re() {
                    v.popperInstance && (v.popperInstance.destroy(), (v.popperInstance = null))
                }
                function Pe() {
                    var w = v.props.appendTo,
                        H,
                        V = ot()
                    ;(v.props.interactive && w === Ke.appendTo) || w === 'parent'
                        ? (H = V.parentNode)
                        : (H = b(w, [V])),
                        H.contains(Q) || H.appendChild(Q),
                        xe(),
                        ut(
                            v.props.interactive && w === Ke.appendTo && V.nextElementSibling !== Q,
                            [
                                'Interactive tippy element may not be accessible via keyboard',
                                'navigation because it is not directly after the reference element',
                                'in the DOM source order.',
                                `

`,
                                'Using a wrapper <div> or <span> tag around the reference element',
                                'solves this by creating a new parentNode context.',
                                `

`,
                                'Specifying `appendTo: document.body` silences this warning, but it',
                                'assumes you are using a focus management solution to handle',
                                'keyboard navigation.',
                                `

`,
                                'See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity',
                            ].join(' '),
                        )
                }
                function Ve() {
                    return W(Q.querySelectorAll('[data-tippy-root]'))
                }
                function Fe(w) {
                    v.clearDelayTimeouts(), w && d('onTrigger', [v, w]), z()
                    var H = l(!0),
                        V = Wt(),
                        ie = V[0],
                        ce = V[1]
                    Te.isTouch && ie === 'hold' && ce && (H = ce),
                        H
                            ? (C = setTimeout(function () {
                                  v.show()
                              }, H))
                            : v.show()
                }
                function He(w) {
                    if ((v.clearDelayTimeouts(), d('onUntrigger', [v, w]), !v.state.isVisible)) {
                        I()
                        return
                    }
                    if (
                        !(
                            v.props.trigger.indexOf('mouseenter') >= 0 &&
                            v.props.trigger.indexOf('click') >= 0 &&
                            ['mouseleave', 'mousemove'].indexOf(w.type) >= 0 &&
                            _
                        )
                    ) {
                        var H = l(!1)
                        H
                            ? (k = setTimeout(function () {
                                  v.state.isVisible && v.hide()
                              }, H))
                            : (M = requestAnimationFrame(function () {
                                  v.hide()
                              }))
                    }
                }
                function ht() {
                    v.state.isEnabled = !0
                }
                function Je() {
                    v.hide(), (v.state.isEnabled = !1)
                }
                function Dt() {
                    clearTimeout(C), clearTimeout(k), cancelAnimationFrame(M)
                }
                function on(w) {
                    if ((ut(v.state.isDestroyed, kt('setProps')), !v.state.isDestroyed)) {
                        d('onBeforeUpdate', [v, w]), ge()
                        var H = v.props,
                            V = Zn(f, Object.assign({}, v.props, {}, w, { ignoreAttributes: !0 }))
                        ;(v.props = V),
                            Ae(),
                            H.interactiveDebounce !== V.interactiveDebounce &&
                                (A(), (_e = O(De, V.interactiveDebounce))),
                            H.triggerTarget && !V.triggerTarget
                                ? F(H.triggerTarget).forEach(function (ie) {
                                      ie.removeAttribute('aria-expanded')
                                  })
                                : V.triggerTarget && f.removeAttribute('aria-expanded'),
                            x(),
                            a(),
                            At && At(H, V),
                            v.popperInstance &&
                                (xe(),
                                Ve().forEach(function (ie) {
                                    requestAnimationFrame(ie._tippy.popperInstance.forceUpdate)
                                })),
                            d('onAfterUpdate', [v, w])
                    }
                }
                function Ut(w) {
                    v.setProps({ content: w })
                }
                function Tt() {
                    ut(v.state.isDestroyed, kt('show'))
                    var w = v.state.isVisible,
                        H = v.state.isDestroyed,
                        V = !v.state.isEnabled,
                        ie = Te.isTouch && !v.props.touch,
                        ce = m(v.props.duration, 0, Ke.duration)
                    if (
                        !(w || H || V || ie) &&
                        !ot().hasAttribute('disabled') &&
                        (d('onShow', [v], !1), v.props.onShow(v) !== !1)
                    ) {
                        if (
                            ((v.state.isVisible = !0),
                            Ze() && (Q.style.visibility = 'visible'),
                            a(),
                            z(),
                            v.state.isMounted || (Q.style.transition = 'none'),
                            Ze())
                        ) {
                            var ze = rn(),
                                Ye = ze.box,
                                bt = ze.content
                            Ce([Ye, bt], 0)
                        }
                        ;(Ne = function () {
                            var yt
                            if (!(!v.state.isVisible || te)) {
                                if (
                                    ((te = !0),
                                    Q.offsetHeight,
                                    (Q.style.transition = v.props.moveTransition),
                                    Ze() && v.props.animation)
                                ) {
                                    var wn = rn(),
                                        an = wn.box,
                                        zt = wn.content
                                    Ce([an, zt], ce), pe([an, zt], 'visible')
                                }
                                E(),
                                    x(),
                                    B(vn, v),
                                    (yt = v.popperInstance) == null || yt.forceUpdate(),
                                    (v.state.isMounted = !0),
                                    d('onMount', [v]),
                                    v.props.animation &&
                                        Ze() &&
                                        Me(ce, function () {
                                            ;(v.state.isShown = !0), d('onShown', [v])
                                        })
                            }
                        }),
                            Pe()
                    }
                }
                function Ln() {
                    ut(v.state.isDestroyed, kt('hide'))
                    var w = !v.state.isVisible,
                        H = v.state.isDestroyed,
                        V = !v.state.isEnabled,
                        ie = m(v.props.duration, 1, Ke.duration)
                    if (!(w || H || V) && (d('onHide', [v], !1), v.props.onHide(v) !== !1)) {
                        if (
                            ((v.state.isVisible = !1),
                            (v.state.isShown = !1),
                            (te = !1),
                            (_ = !1),
                            Ze() && (Q.style.visibility = 'hidden'),
                            A(),
                            I(),
                            a(),
                            Ze())
                        ) {
                            var ce = rn(),
                                ze = ce.box,
                                Ye = ce.content
                            v.props.animation && (Ce([ze, Ye], ie), pe([ze, Ye], 'hidden'))
                        }
                        E(), x(), v.props.animation ? Ze() && Ee(ie, v.unmount) : v.unmount()
                    }
                }
                function Xt(w) {
                    ut(v.state.isDestroyed, kt('hideWithInteractivity')),
                        pt().addEventListener('mousemove', _e),
                        B(hn, _e),
                        _e(w)
                }
                function yn() {
                    ut(v.state.isDestroyed, kt('unmount')),
                        v.state.isVisible && v.hide(),
                        v.state.isMounted &&
                            (Re(),
                            Ve().forEach(function (w) {
                                w._tippy.unmount()
                            }),
                            Q.parentNode && Q.parentNode.removeChild(Q),
                            (vn = vn.filter(function (w) {
                                return w !== v
                            })),
                            (v.state.isMounted = !1),
                            d('onHidden', [v]))
                }
                function Nn() {
                    ut(v.state.isDestroyed, kt('destroy')),
                        !v.state.isDestroyed &&
                            (v.clearDelayTimeouts(),
                            v.unmount(),
                            ge(),
                            delete f._tippy,
                            (v.state.isDestroyed = !0),
                            d('onDestroy', [v]))
                }
            }
            function lt(f, p) {
                p === void 0 && (p = {})
                var y = Ke.plugins.concat(p.plugins || [])
                gt(f), ft(p, y), _n()
                var C = Object.assign({}, p, { plugins: y }),
                    k = ue(f),
                    M = Z(C.content),
                    _ = k.length > 1
                ut(
                    M && _,
                    [
                        'tippy() was passed an Element as the `content` prop, but more than',
                        'one tippy instance was created by this invocation. This means the',
                        'content element will only be appended to the last tippy instance.',
                        `

`,
                        'Instead, pass the .innerHTML of the element, or use a function that',
                        'returns a cloned version of the element instead.',
                        `

`,
                        `1) content: element.innerHTML
`,
                        '2) content: () => element.cloneNode(true)',
                    ].join(' '),
                )
                var se = k.reduce(function (G, te) {
                    var le = te && tn(te, C)
                    return le && G.push(le), G
                }, [])
                return Z(f) ? se[0] : se
            }
            ;(lt.defaultProps = Ke), (lt.setDefaultProps = Nr), (lt.currentInput = Te)
            var rr = function (p) {
                    var y = p === void 0 ? {} : p,
                        C = y.exclude,
                        k = y.duration
                    vn.forEach(function (M) {
                        var _ = !1
                        if ((C && (_ = ae(C) ? M.reference === C : M.popper === C.popper), !_)) {
                            var se = M.props.duration
                            M.setProps({ duration: k }), M.hide(), M.state.isDestroyed || M.setProps({ duration: se })
                        }
                    })
                },
                or = Object.assign({}, t.applyStyles, {
                    effect: function (p) {
                        var y = p.state,
                            C = {
                                popper: { position: y.options.strategy, left: '0', top: '0', margin: '0' },
                                arrow: { position: 'absolute' },
                                reference: {},
                            }
                        Object.assign(y.elements.popper.style, C.popper),
                            (y.styles = C),
                            y.elements.arrow && Object.assign(y.elements.arrow.style, C.arrow)
                    },
                }),
                ir = function (p, y) {
                    var C
                    y === void 0 && (y = {}),
                        jt(
                            !Array.isArray(p),
                            [
                                'The first argument passed to createSingleton() must be an array of',
                                'tippy instances. The passed value was',
                                String(p),
                            ].join(' '),
                        )
                    var k = p,
                        M = [],
                        _,
                        se = y.overrides,
                        G = [],
                        te = !1
                    function le() {
                        M = k.map(function ($) {
                            return $.reference
                        })
                    }
                    function Oe($) {
                        k.forEach(function (X) {
                            $ ? X.enable() : X.disable()
                        })
                    }
                    function Ne($) {
                        return k.map(function (X) {
                            var v = X.setProps
                            return (
                                (X.setProps = function (Xe) {
                                    v(Xe), X.reference === _ && $.setProps(Xe)
                                }),
                                function () {
                                    X.setProps = v
                                }
                            )
                        })
                    }
                    function be($, X) {
                        var v = M.indexOf(X)
                        if (X !== _) {
                            _ = X
                            var Xe = (se || []).concat('content').reduce(function (Q, At) {
                                return (Q[At] = k[v].props[At]), Q
                            }, {})
                            $.setProps(
                                Object.assign({}, Xe, {
                                    getReferenceClientRect:
                                        typeof Xe.getReferenceClientRect == 'function'
                                            ? Xe.getReferenceClientRect
                                            : function () {
                                                  return X.getBoundingClientRect()
                                              },
                                }),
                            )
                        }
                    }
                    Oe(!1), le()
                    var _e = {
                            fn: function () {
                                return {
                                    onDestroy: function () {
                                        Oe(!0)
                                    },
                                    onHidden: function () {
                                        _ = null
                                    },
                                    onClickOutside: function (v) {
                                        v.props.showOnCreate && !te && ((te = !0), (_ = null))
                                    },
                                    onShow: function (v) {
                                        v.props.showOnCreate && !te && ((te = !0), be(v, M[0]))
                                    },
                                    onTrigger: function (v, Xe) {
                                        be(v, Xe.currentTarget)
                                    },
                                }
                            },
                        },
                        U = lt(
                            ee(),
                            Object.assign({}, S(y, ['overrides']), {
                                plugins: [_e].concat(y.plugins || []),
                                triggerTarget: M,
                                popperOptions: Object.assign({}, y.popperOptions, {
                                    modifiers: [].concat(((C = y.popperOptions) == null ? void 0 : C.modifiers) || [], [
                                        or,
                                    ]),
                                }),
                            }),
                        ),
                        ne = U.show
                    ;(U.show = function ($) {
                        if ((ne(), !_ && $ == null)) return be(U, M[0])
                        if (!(_ && $ == null)) {
                            if (typeof $ == 'number') return M[$] && be(U, M[$])
                            if (k.includes($)) {
                                var X = $.reference
                                return be(U, X)
                            }
                            if (M.includes($)) return be(U, $)
                        }
                    }),
                        (U.showNext = function () {
                            var $ = M[0]
                            if (!_) return U.show(0)
                            var X = M.indexOf(_)
                            U.show(M[X + 1] || $)
                        }),
                        (U.showPrevious = function () {
                            var $ = M[M.length - 1]
                            if (!_) return U.show($)
                            var X = M.indexOf(_),
                                v = M[X - 1] || $
                            U.show(v)
                        })
                    var re = U.setProps
                    return (
                        (U.setProps = function ($) {
                            ;(se = $.overrides || se), re($)
                        }),
                        (U.setInstances = function ($) {
                            Oe(!0),
                                G.forEach(function (X) {
                                    return X()
                                }),
                                (k = $),
                                Oe(!1),
                                le(),
                                Ne(U),
                                U.setProps({ triggerTarget: M })
                        }),
                        (G = Ne(U)),
                        U
                    )
                },
                ar = { mouseover: 'mouseenter', focusin: 'focus', click: 'click' }
            function Ht(f, p) {
                jt(
                    !(p && p.target),
                    [
                        'You must specity a `target` prop indicating a CSS selector string matching',
                        'the target elements that should receive a tippy.',
                    ].join(' '),
                )
                var y = [],
                    C = [],
                    k = !1,
                    M = p.target,
                    _ = S(p, ['target']),
                    se = Object.assign({}, _, { trigger: 'manual', touch: !1 }),
                    G = Object.assign({}, _, { showOnCreate: !0 }),
                    te = lt(f, se),
                    le = F(te)
                function Oe(ne) {
                    if (!(!ne.target || k)) {
                        var re = ne.target.closest(M)
                        if (re) {
                            var $ = re.getAttribute('data-tippy-trigger') || p.trigger || Ke.trigger
                            if (
                                !re._tippy &&
                                !(ne.type === 'touchstart' && typeof G.touch == 'boolean') &&
                                !(ne.type !== 'touchstart' && $.indexOf(ar[ne.type]) < 0)
                            ) {
                                var X = lt(re, G)
                                X && (C = C.concat(X))
                            }
                        }
                    }
                }
                function Ne(ne, re, $, X) {
                    X === void 0 && (X = !1),
                        ne.addEventListener(re, $, X),
                        y.push({ node: ne, eventType: re, handler: $, options: X })
                }
                function be(ne) {
                    var re = ne.reference
                    Ne(re, 'touchstart', Oe, u), Ne(re, 'mouseover', Oe), Ne(re, 'focusin', Oe), Ne(re, 'click', Oe)
                }
                function _e() {
                    y.forEach(function (ne) {
                        var re = ne.node,
                            $ = ne.eventType,
                            X = ne.handler,
                            v = ne.options
                        re.removeEventListener($, X, v)
                    }),
                        (y = [])
                }
                function U(ne) {
                    var re = ne.destroy,
                        $ = ne.enable,
                        X = ne.disable
                    ;(ne.destroy = function (v) {
                        v === void 0 && (v = !0),
                            v &&
                                C.forEach(function (Xe) {
                                    Xe.destroy()
                                }),
                            (C = []),
                            _e(),
                            re()
                    }),
                        (ne.enable = function () {
                            $(),
                                C.forEach(function (v) {
                                    return v.enable()
                                }),
                                (k = !1)
                        }),
                        (ne.disable = function () {
                            X(),
                                C.forEach(function (v) {
                                    return v.disable()
                                }),
                                (k = !0)
                        }),
                        be(ne)
                }
                return le.forEach(U), te
            }
            var sr = {
                name: 'animateFill',
                defaultValue: !1,
                fn: function (p) {
                    var y
                    if (!((y = p.props.render) != null && y.$$tippy))
                        return (
                            jt(p.props.animateFill, 'The `animateFill` plugin requires the default render function.'),
                            {}
                        )
                    var C = Bt(p.popper),
                        k = C.box,
                        M = C.content,
                        _ = p.props.animateFill ? jr() : null
                    return {
                        onCreate: function () {
                            _ &&
                                (k.insertBefore(_, k.firstElementChild),
                                k.setAttribute('data-animatefill', ''),
                                (k.style.overflow = 'hidden'),
                                p.setProps({ arrow: !1, animation: 'shift-away' }))
                        },
                        onMount: function () {
                            if (_) {
                                var G = k.style.transitionDuration,
                                    te = Number(G.replace('ms', ''))
                                ;(M.style.transitionDelay = Math.round(te / 10) + 'ms'),
                                    (_.style.transitionDuration = G),
                                    pe([_], 'visible')
                            }
                        },
                        onShow: function () {
                            _ && (_.style.transitionDuration = '0ms')
                        },
                        onHide: function () {
                            _ && pe([_], 'hidden')
                        },
                    }
                },
            }
            function jr() {
                var f = ee()
                return (f.className = i), pe([f], 'hidden'), f
            }
            var gn = { clientX: 0, clientY: 0 },
                nn = []
            function mn(f) {
                var p = f.clientX,
                    y = f.clientY
                gn = { clientX: p, clientY: y }
            }
            function bn(f) {
                f.addEventListener('mousemove', mn)
            }
            function Fr(f) {
                f.removeEventListener('mousemove', mn)
            }
            var Mn = {
                name: 'followCursor',
                defaultValue: !1,
                fn: function (p) {
                    var y = p.reference,
                        C = ve(p.props.triggerTarget || y),
                        k = !1,
                        M = !1,
                        _ = !0,
                        se = p.props
                    function G() {
                        return p.props.followCursor === 'initial' && p.state.isVisible
                    }
                    function te() {
                        C.addEventListener('mousemove', Ne)
                    }
                    function le() {
                        C.removeEventListener('mousemove', Ne)
                    }
                    function Oe() {
                        ;(k = !0), p.setProps({ getReferenceClientRect: null }), (k = !1)
                    }
                    function Ne(U) {
                        var ne = U.target ? y.contains(U.target) : !0,
                            re = p.props.followCursor,
                            $ = U.clientX,
                            X = U.clientY,
                            v = y.getBoundingClientRect(),
                            Xe = $ - v.left,
                            Q = X - v.top
                        ;(ne || !p.props.interactive) &&
                            p.setProps({
                                getReferenceClientRect: function () {
                                    var dt = y.getBoundingClientRect(),
                                        $t = $,
                                        Wt = X
                                    re === 'initial' && (($t = dt.left + Xe), (Wt = dt.top + Q))
                                    var Vt = re === 'horizontal' ? dt.top : Wt,
                                        Ze = re === 'vertical' ? dt.right : $t,
                                        ot = re === 'horizontal' ? dt.bottom : Wt,
                                        pt = re === 'vertical' ? dt.left : $t
                                    return { width: Ze - pt, height: ot - Vt, top: Vt, right: Ze, bottom: ot, left: pt }
                                },
                            })
                    }
                    function be() {
                        p.props.followCursor && (nn.push({ instance: p, doc: C }), bn(C))
                    }
                    function _e() {
                        ;(nn = nn.filter(function (U) {
                            return U.instance !== p
                        })),
                            nn.filter(function (U) {
                                return U.doc === C
                            }).length === 0 && Fr(C)
                    }
                    return {
                        onCreate: be,
                        onDestroy: _e,
                        onBeforeUpdate: function () {
                            se = p.props
                        },
                        onAfterUpdate: function (ne, re) {
                            var $ = re.followCursor
                            k ||
                                ($ !== void 0 &&
                                    se.followCursor !== $ &&
                                    (_e(), $ ? (be(), p.state.isMounted && !M && !G() && te()) : (le(), Oe())))
                        },
                        onMount: function () {
                            p.props.followCursor && !M && (_ && (Ne(gn), (_ = !1)), G() || te())
                        },
                        onTrigger: function (ne, re) {
                            N(re) && (gn = { clientX: re.clientX, clientY: re.clientY }), (M = re.type === 'focus')
                        },
                        onHidden: function () {
                            p.props.followCursor && (Oe(), le(), (_ = !0))
                        },
                    }
                },
            }
            function Br(f, p) {
                var y
                return {
                    popperOptions: Object.assign({}, f.popperOptions, {
                        modifiers: [].concat(
                            (((y = f.popperOptions) == null ? void 0 : y.modifiers) || []).filter(function (C) {
                                var k = C.name
                                return k !== p.name
                            }),
                            [p],
                        ),
                    }),
                }
            }
            var Rn = {
                name: 'inlinePositioning',
                defaultValue: !1,
                fn: function (p) {
                    var y = p.reference
                    function C() {
                        return !!p.props.inlinePositioning
                    }
                    var k,
                        M = -1,
                        _ = !1,
                        se = {
                            name: 'tippyInlinePositioning',
                            enabled: !0,
                            phase: 'afterWrite',
                            fn: function (Ne) {
                                var be = Ne.state
                                C() &&
                                    (k !== be.placement &&
                                        p.setProps({
                                            getReferenceClientRect: function () {
                                                return G(be.placement)
                                            },
                                        }),
                                    (k = be.placement))
                            },
                        }
                    function G(Oe) {
                        return Hr(K(Oe), y.getBoundingClientRect(), W(y.getClientRects()), M)
                    }
                    function te(Oe) {
                        ;(_ = !0), p.setProps(Oe), (_ = !1)
                    }
                    function le() {
                        _ || te(Br(p.props, se))
                    }
                    return {
                        onCreate: le,
                        onAfterUpdate: le,
                        onTrigger: function (Ne, be) {
                            if (N(be)) {
                                var _e = W(p.reference.getClientRects()),
                                    U = _e.find(function (ne) {
                                        return (
                                            ne.left - 2 <= be.clientX &&
                                            ne.right + 2 >= be.clientX &&
                                            ne.top - 2 <= be.clientY &&
                                            ne.bottom + 2 >= be.clientY
                                        )
                                    })
                                M = _e.indexOf(U)
                            }
                        },
                        onUntrigger: function () {
                            M = -1
                        },
                    }
                },
            }
            function Hr(f, p, y, C) {
                if (y.length < 2 || f === null) return p
                if (y.length === 2 && C >= 0 && y[0].left > y[1].right) return y[C] || p
                switch (f) {
                    case 'top':
                    case 'bottom': {
                        var k = y[0],
                            M = y[y.length - 1],
                            _ = f === 'top',
                            se = k.top,
                            G = M.bottom,
                            te = _ ? k.left : M.left,
                            le = _ ? k.right : M.right,
                            Oe = le - te,
                            Ne = G - se
                        return { top: se, bottom: G, left: te, right: le, width: Oe, height: Ne }
                    }
                    case 'left':
                    case 'right': {
                        var be = Math.min.apply(
                                Math,
                                y.map(function (Q) {
                                    return Q.left
                                }),
                            ),
                            _e = Math.max.apply(
                                Math,
                                y.map(function (Q) {
                                    return Q.right
                                }),
                            ),
                            U = y.filter(function (Q) {
                                return f === 'left' ? Q.left === be : Q.right === _e
                            }),
                            ne = U[0].top,
                            re = U[U.length - 1].bottom,
                            $ = be,
                            X = _e,
                            v = X - $,
                            Xe = re - ne
                        return { top: ne, bottom: re, left: $, right: X, width: v, height: Xe }
                    }
                    default:
                        return p
                }
            }
            var $r = {
                name: 'sticky',
                defaultValue: !1,
                fn: function (p) {
                    var y = p.reference,
                        C = p.popper
                    function k() {
                        return p.popperInstance ? p.popperInstance.state.elements.reference : y
                    }
                    function M(te) {
                        return p.props.sticky === !0 || p.props.sticky === te
                    }
                    var _ = null,
                        se = null
                    function G() {
                        var te = M('reference') ? k().getBoundingClientRect() : null,
                            le = M('popper') ? C.getBoundingClientRect() : null
                        ;((te && In(_, te)) || (le && In(se, le))) && p.popperInstance && p.popperInstance.update(),
                            (_ = te),
                            (se = le),
                            p.state.isMounted && requestAnimationFrame(G)
                    }
                    return {
                        onMount: function () {
                            p.props.sticky && G()
                        },
                    }
                },
            }
            function In(f, p) {
                return f && p
                    ? f.top !== p.top || f.right !== p.right || f.bottom !== p.bottom || f.left !== p.left
                    : !0
            }
            lt.setDefaultProps({ render: tr }),
                (e.animateFill = sr),
                (e.createSingleton = ir),
                (e.default = lt),
                (e.delegate = Ht),
                (e.followCursor = Mn),
                (e.hideAll = rr),
                (e.inlinePositioning = Rn),
                (e.roundArrow = n),
                (e.sticky = $r)
        }),
        mo = xi(Oi()),
        Wa = xi(Oi()),
        Va = (e) => {
            let t = { plugins: [] },
                n = (r) => e[e.indexOf(r) + 1]
            if (
                (e.includes('animation') && (t.animation = n('animation')),
                e.includes('duration') && (t.duration = parseInt(n('duration'))),
                e.includes('delay'))
            ) {
                let r = n('delay')
                t.delay = r.includes('-') ? r.split('-').map((o) => parseInt(o)) : parseInt(r)
            }
            if (e.includes('cursor')) {
                t.plugins.push(Wa.followCursor)
                let r = n('cursor')
                ;['x', 'initial'].includes(r)
                    ? (t.followCursor = r === 'x' ? 'horizontal' : 'initial')
                    : (t.followCursor = !0)
            }
            return (
                e.includes('on') && (t.trigger = n('on')),
                e.includes('arrowless') && (t.arrow = !1),
                e.includes('html') && (t.allowHTML = !0),
                e.includes('interactive') && (t.interactive = !0),
                e.includes('border') && t.interactive && (t.interactiveBorder = parseInt(n('border'))),
                e.includes('debounce') && t.interactive && (t.interactiveDebounce = parseInt(n('debounce'))),
                e.includes('max-width') && (t.maxWidth = parseInt(n('max-width'))),
                e.includes('theme') && (t.theme = n('theme')),
                e.includes('placement') && (t.placement = n('placement')),
                t
            )
        }
    function bo(e) {
        e.magic('tooltip', (t) => (n, r = {}) => {
            let o = (0, mo.default)(t, { content: n, trigger: 'manual', ...r })
            o.show(),
                setTimeout(() => {
                    o.hide(), setTimeout(() => o.destroy(), r.duration || 300)
                }, r.timeout || 2e3)
        }),
            e.directive('tooltip', (t, { modifiers: n, expression: r }, { evaluateLater: o, effect: i }) => {
                let s = n.length > 0 ? Va(n) : {}
                t.__x_tippy || (t.__x_tippy = (0, mo.default)(t, s))
                let c = () => t.__x_tippy.enable(),
                    u = () => t.__x_tippy.disable(),
                    h = (m) => {
                        m ? (c(), t.__x_tippy.setContent(m)) : u()
                    }
                if (n.includes('raw')) h(r)
                else {
                    let m = o(r)
                    i(() => {
                        m((g) => {
                            typeof g == 'object' ? (t.__x_tippy.setProps(g), c()) : h(g)
                        })
                    })
                }
            })
    }
    bo.defaultProps = (e) => (mo.default.setDefaultProps(e), bo)
    var Ua = bo,
        Si = Ua
    document.addEventListener('alpine:init', () => {
        window.Alpine.plugin(Ko), window.Alpine.plugin(Jo), window.Alpine.plugin(wi), window.Alpine.plugin(Si)
    })
    var Xa = function (e, t, n) {
        function r(m, g) {
            for (let b of m) {
                let O = o(b, g)
                if (O !== null) return O
            }
        }
        function o(m, g) {
            let b = m.match(/^[\{\[]([^\[\]\{\}]*)[\}\]](.*)/s)
            if (b === null || b.length !== 3) return null
            let O = b[1],
                S = b[2]
            if (O.includes(',')) {
                let [T, F] = O.split(',', 2)
                if (F === '*' && g >= T) return S
                if (T === '*' && g <= F) return S
                if (g >= T && g <= F) return S
            }
            return O == g ? S : null
        }
        function i(m) {
            return m.toString().charAt(0).toUpperCase() + m.toString().slice(1)
        }
        function s(m, g) {
            if (g.length === 0) return m
            let b = {}
            for (let [O, S] of Object.entries(g))
                (b[':' + i(O ?? '')] = i(S ?? '')),
                    (b[':' + O.toUpperCase()] = S.toString().toUpperCase()),
                    (b[':' + O] = S)
            return (
                Object.entries(b).forEach(([O, S]) => {
                    m = m.replaceAll(O, S)
                }),
                m
            )
        }
        function c(m) {
            return m.map((g) => g.replace(/^[\{\[]([^\[\]\{\}]*)[\}\]]/, ''))
        }
        let u = e.split('|'),
            h = r(u, t)
        return h != null ? s(h.trim(), n) : ((u = c(u)), s(u.length > 1 && t > 1 ? u[1] : u[0], n))
    }
    window.pluralize = Xa
})()
/*! Bundled license information:

sortablejs/modular/sortable.esm.js:
  (**!
   * Sortable 1.15.0
   * @author	RubaXa   <trash@rubaxa.org>
   * @author	owenm    <owen23355@gmail.com>
   * @license MIT
   *)
*/
