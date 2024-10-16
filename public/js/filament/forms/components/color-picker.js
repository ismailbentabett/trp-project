var l = (e, t = 0, r = 1) => (e > r ? r : e < t ? t : e),
    a = (e, t = 0, r = Math.pow(10, t)) => Math.round(r * e) / r
var nt = { grad: 360 / 400, turn: 360, rad: 360 / (Math.PI * 2) },
    B = (e) => J(x(e)),
    x = (e) => (
        e[0] === '#' && (e = e.substr(1)),
        e.length < 6
            ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: 1 }
            : {
                  r: parseInt(e.substr(0, 2), 16),
                  g: parseInt(e.substr(2, 2), 16),
                  b: parseInt(e.substr(4, 2), 16),
                  a: 1,
              }
    ),
    it = (e, t = 'deg') => Number(e) * (nt[t] || 1),
    lt = (e) => {
        let r =
            /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
                e,
            )
        return r
            ? ct({
                  h: it(r[1], r[2]),
                  s: Number(r[3]),
                  l: Number(r[4]),
                  a: r[5] === void 0 ? 1 : Number(r[5]) / (r[6] ? 100 : 1),
              })
            : { h: 0, s: 0, v: 0, a: 1 }
    },
    F = lt,
    ct = ({ h: e, s: t, l: r, a: s }) => (
        (t *= (r < 50 ? r : 100 - r) / 100), { h: e, s: t > 0 ? ((2 * t) / (r + t)) * 100 : 0, v: r + t, a: s }
    ),
    X = (e) => pt(N(e)),
    Y = ({ h: e, s: t, v: r, a: s }) => {
        let o = ((200 - t) * r) / 100
        return {
            h: a(e),
            s: a(o > 0 && o < 200 ? ((t * r) / 100 / (o <= 100 ? o : 200 - o)) * 100 : 0),
            l: a(o / 2),
            a: a(s, 2),
        }
    }
var u = (e) => {
        let { h: t, s: r, l: s } = Y(e)
        return `hsl(${t}, ${r}%, ${s}%)`
    },
    b = (e) => {
        let { h: t, s: r, l: s, a: o } = Y(e)
        return `hsla(${t}, ${r}%, ${s}%, ${o})`
    },
    N = ({ h: e, s: t, v: r, a: s }) => {
        ;(e = (e / 360) * 6), (t = t / 100), (r = r / 100)
        let o = Math.floor(e),
            n = r * (1 - t),
            i = r * (1 - (e - o) * t),
            E = r * (1 - (1 - e + o) * t),
            q = o % 6
        return {
            r: a([r, i, n, n, E, r][q] * 255),
            g: a([E, r, r, i, n, n][q] * 255),
            b: a([n, n, E, r, r, i][q] * 255),
            a: a(s, 2),
        }
    },
    _ = (e) => {
        let { r: t, g: r, b: s } = N(e)
        return `rgb(${t}, ${r}, ${s})`
    },
    U = (e) => {
        let { r: t, g: r, b: s, a: o } = N(e)
        return `rgba(${t}, ${r}, ${s}, ${o})`
    }
var A = (e) => {
        let r =
            /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
                e,
            )
        return r
            ? J({
                  r: Number(r[1]) / (r[2] ? 100 / 255 : 1),
                  g: Number(r[3]) / (r[4] ? 100 / 255 : 1),
                  b: Number(r[5]) / (r[6] ? 100 / 255 : 1),
                  a: r[7] === void 0 ? 1 : Number(r[7]) / (r[8] ? 100 : 1),
              })
            : { h: 0, s: 0, v: 0, a: 1 }
    },
    G = A,
    L = (e) => {
        let t = e.toString(16)
        return t.length < 2 ? '0' + t : t
    },
    pt = ({ r: e, g: t, b: r }) => '#' + L(e) + L(t) + L(r),
    J = ({ r: e, g: t, b: r, a: s }) => {
        let o = Math.max(e, t, r),
            n = o - Math.min(e, t, r),
            i = n ? (o === e ? (t - r) / n : o === t ? 2 + (r - e) / n : 4 + (e - t) / n) : 0
        return { h: a(60 * (i < 0 ? i + 6 : i)), s: a(o ? (n / o) * 100 : 0), v: a((o / 255) * 100), a: s }
    }
var I = (e, t) => {
        if (e === t) return !0
        for (let r in e) if (e[r] !== t[r]) return !1
        return !0
    },
    d = (e, t) => e.replace(/\s/g, '') === t.replace(/\s/g, ''),
    K = (e, t) => (e.toLowerCase() === t.toLowerCase() ? !0 : I(x(e), x(t)))
var Q = {},
    v = (e) => {
        let t = Q[e]
        return t || ((t = document.createElement('template')), (t.innerHTML = e), (Q[e] = t)), t
    },
    m = (e, t, r) => {
        e.dispatchEvent(new CustomEvent(t, { bubbles: !0, detail: r }))
    }
var h = !1,
    O = (e) => 'touches' in e,
    ut = (e) => (h && !O(e) ? !1 : (h || (h = O(e)), !0)),
    W = (e, t) => {
        let r = O(t) ? t.touches[0] : t,
            s = e.el.getBoundingClientRect()
        m(
            e.el,
            'move',
            e.getMove({
                x: l((r.pageX - (s.left + window.pageXOffset)) / s.width),
                y: l((r.pageY - (s.top + window.pageYOffset)) / s.height),
            }),
        )
    },
    dt = (e, t) => {
        let r = t.keyCode
        r > 40 ||
            (e.xy && r < 37) ||
            r < 33 ||
            (t.preventDefault(),
            m(
                e.el,
                'move',
                e.getMove(
                    {
                        x:
                            r === 39
                                ? 0.01
                                : r === 37
                                  ? -0.01
                                  : r === 34
                                    ? 0.05
                                    : r === 33
                                      ? -0.05
                                      : r === 35
                                        ? 1
                                        : r === 36
                                          ? -1
                                          : 0,
                        y: r === 40 ? 0.01 : r === 38 ? -0.01 : 0,
                    },
                    !0,
                ),
            ))
    },
    p = class {
        constructor(t, r, s, o) {
            let n = v(`<div role="slider" tabindex="0" part="${r}" ${s}><div part="${r}-pointer"></div></div>`)
            t.appendChild(n.content.cloneNode(!0))
            let i = t.querySelector(`[part=${r}]`)
            i.addEventListener('mousedown', this),
                i.addEventListener('touchstart', this),
                i.addEventListener('keydown', this),
                (this.el = i),
                (this.xy = o),
                (this.nodes = [i.firstChild, i])
        }
        set dragging(t) {
            let r = t ? document.addEventListener : document.removeEventListener
            r(h ? 'touchmove' : 'mousemove', this), r(h ? 'touchend' : 'mouseup', this)
        }
        handleEvent(t) {
            switch (t.type) {
                case 'mousedown':
                case 'touchstart':
                    if ((t.preventDefault(), !ut(t) || (!h && t.button != 0))) return
                    this.el.focus(), W(this, t), (this.dragging = !0)
                    break
                case 'mousemove':
                case 'touchmove':
                    t.preventDefault(), W(this, t)
                    break
                case 'mouseup':
                case 'touchend':
                    this.dragging = !1
                    break
                case 'keydown':
                    dt(this, t)
                    break
            }
        }
        style(t) {
            t.forEach((r, s) => {
                for (let o in r) this.nodes[s].style.setProperty(o, r[o])
            })
        }
    }
var $ = class extends p {
    constructor(t) {
        super(t, 'hue', 'aria-label="Hue" aria-valuemin="0" aria-valuemax="360"', !1)
    }
    update({ h: t }) {
        ;(this.h = t),
            this.style([{ left: `${(t / 360) * 100}%`, color: u({ h: t, s: 100, v: 100, a: 1 }) }]),
            this.el.setAttribute('aria-valuenow', `${a(t)}`)
    }
    getMove(t, r) {
        return { h: r ? l(this.h + t.x * 360, 0, 360) : 360 * t.x }
    }
}
var H = class extends p {
    constructor(t) {
        super(t, 'saturation', 'aria-label="Color"', !0)
    }
    update(t) {
        ;(this.hsva = t),
            this.style([
                { top: `${100 - t.v}%`, left: `${t.s}%`, color: u(t) },
                { 'background-color': u({ h: t.h, s: 100, v: 100, a: 1 }) },
            ]),
            this.el.setAttribute('aria-valuetext', `Saturation ${a(t.s)}%, Brightness ${a(t.v)}%`)
    }
    getMove(t, r) {
        return {
            s: r ? l(this.hsva.s + t.x * 100, 0, 100) : t.x * 100,
            v: r ? l(this.hsva.v - t.y * 100, 0, 100) : Math.round(100 - t.y * 100),
        }
    }
}
var Z =
    ":host{display:flex;flex-direction:column;position:relative;width:200px;height:200px;user-select:none;-webkit-user-select:none;cursor:default}:host([hidden]){display:none!important}[role=slider]{position:relative;touch-action:none;user-select:none;-webkit-user-select:none;outline:0}[role=slider]:last-child{border-radius:0 0 8px 8px}[part$=pointer]{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}[part$=pointer]::after{display:block;content:'';position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;background-color:currentColor}[role=slider]:focus [part$=pointer]{transform:translate(-50%,-50%) scale(1.1)}"
var tt =
    '[part=hue]{flex:0 0 24px;background:linear-gradient(to right,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}[part=hue-pointer]{top:50%;z-index:2}'
var rt =
    '[part=saturation]{flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,rgba(255,255,255,0));box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}[part=saturation-pointer]{z-index:3}'
var S = Symbol('same'),
    et = Symbol('color'),
    ot = Symbol('hsva'),
    R = Symbol('change'),
    P = Symbol('update'),
    st = Symbol('parts'),
    f = Symbol('css'),
    g = Symbol('sliders'),
    c = class extends HTMLElement {
        static get observedAttributes() {
            return ['color']
        }
        get [f]() {
            return [Z, tt, rt]
        }
        get [g]() {
            return [H, $]
        }
        get color() {
            return this[et]
        }
        set color(t) {
            if (!this[S](t)) {
                let r = this.colorModel.toHsva(t)
                this[P](r), this[R](t)
            }
        }
        constructor() {
            super()
            let t = v(`<style>${this[f].join('')}</style>`),
                r = this.attachShadow({ mode: 'open' })
            r.appendChild(t.content.cloneNode(!0)),
                r.addEventListener('move', this),
                (this[st] = this[g].map((s) => new s(r)))
        }
        connectedCallback() {
            if (this.hasOwnProperty('color')) {
                let t = this.color
                delete this.color, (this.color = t)
            } else this.color || (this.color = this.colorModel.defaultColor)
        }
        attributeChangedCallback(t, r, s) {
            let o = this.colorModel.fromAttr(s)
            this[S](o) || (this.color = o)
        }
        handleEvent(t) {
            let r = this[ot],
                s = { ...r, ...t.detail }
            this[P](s)
            let o
            !I(s, r) && !this[S]((o = this.colorModel.fromHsva(s))) && this[R](o)
        }
        [S](t) {
            return this.color && this.colorModel.equal(t, this.color)
        }
        [P](t) {
            ;(this[ot] = t), this[st].forEach((r) => r.update(t))
        }
        [R](t) {
            ;(this[et] = t), m(this, 'color-changed', { value: t })
        }
    }
var ht = { defaultColor: '#000', toHsva: B, fromHsva: X, equal: K, fromAttr: (e) => e },
    y = class extends c {
        get colorModel() {
            return ht
        }
    }
var z = class extends y {}
customElements.define('hex-color-picker', z)
var mt = { defaultColor: 'hsl(0, 0%, 0%)', toHsva: F, fromHsva: u, equal: d, fromAttr: (e) => e },
    T = class extends c {
        get colorModel() {
            return mt
        }
    }
var V = class extends T {}
customElements.define('hsl-string-color-picker', V)
var ft = { defaultColor: 'rgb(0, 0, 0)', toHsva: G, fromHsva: _, equal: d, fromAttr: (e) => e },
    w = class extends c {
        get colorModel() {
            return ft
        }
    }
var j = class extends w {}
customElements.define('rgb-string-color-picker', j)
var M = class extends p {
    constructor(t) {
        super(t, 'alpha', 'aria-label="Alpha" aria-valuemin="0" aria-valuemax="1"', !1)
    }
    update(t) {
        this.hsva = t
        let r = b({ ...t, a: 0 }),
            s = b({ ...t, a: 1 }),
            o = t.a * 100
        this.style([{ left: `${o}%`, color: b(t) }, { '--gradient': `linear-gradient(90deg, ${r}, ${s}` }])
        let n = a(o)
        this.el.setAttribute('aria-valuenow', `${n}`), this.el.setAttribute('aria-valuetext', `${n}%`)
    }
    getMove(t, r) {
        return { a: r ? l(this.hsva.a + t.x) : t.x }
    }
}
var at = `[part=alpha]{flex:0 0 24px}[part=alpha]::after{display:block;content:'';position:absolute;top:0;left:0;right:0;bottom:0;border-radius:inherit;background-image:var(--gradient);box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}[part^=alpha]{background-color:#fff;background-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><rect x="8" width="8" height="8"/><rect y="8" width="8" height="8"/></svg>')}[part=alpha-pointer]{top:50%}`
var k = class extends c {
    get [f]() {
        return [...super[f], at]
    }
    get [g]() {
        return [...super[g], M]
    }
}
var gt = { defaultColor: 'rgba(0, 0, 0, 1)', toHsva: A, fromHsva: U, equal: d, fromAttr: (e) => e },
    C = class extends k {
        get colorModel() {
            return gt
        }
    }
var D = class extends C {}
customElements.define('rgba-string-color-picker', D)
function xt({ isAutofocused: e, isDisabled: t, isLiveOnPickerClose: r, state: s }) {
    return {
        state: s,
        init: function () {
            this.state === null || this.state === '' || this.setState(this.state),
                e && this.togglePanelVisibility(this.$refs.input),
                this.$refs.input.addEventListener('change', (o) => {
                    this.setState(o.target.value)
                }),
                this.$refs.panel.addEventListener('color-changed', (o) => {
                    this.setState(o.detail.value)
                }),
                r &&
                    new MutationObserver(() => {
                        this.$refs.panel.style.display === 'none' && this.$wire.call('$refresh')
                    }).observe(this.$refs.panel, { attributes: !0, childList: !0 })
        },
        togglePanelVisibility: function () {
            t || this.$refs.panel.toggle(this.$refs.input)
        },
        setState: function (o) {
            ;(this.state = o), (this.$refs.input.value = o), (this.$refs.panel.color = o)
        },
        isOpen: function () {
            return this.$refs.panel.style.display === 'block'
        },
    }
}
export { xt as default }
