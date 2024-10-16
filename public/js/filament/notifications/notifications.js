;(() => {
    var O = Object.create
    var N = Object.defineProperty
    var V = Object.getOwnPropertyDescriptor
    var Y = Object.getOwnPropertyNames
    var H = Object.getPrototypeOf,
        W = Object.prototype.hasOwnProperty
    var d = (i, t) => () => (t || i((t = { exports: {} }).exports, t), t.exports)
    var j = (i, t, e, n) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
            for (let s of Y(t))
                !W.call(i, s) && s !== e && N(i, s, { get: () => t[s], enumerable: !(n = V(t, s)) || n.enumerable })
        return i
    }
    var J = (i, t, e) => (
        (e = i != null ? O(H(i)) : {}),
        j(t || !i || !i.__esModule ? N(e, 'default', { value: i, enumerable: !0 }) : e, i)
    )
    var T = d((ct, _) => {
        var v,
            x = typeof global < 'u' && (global.crypto || global.msCrypto)
        x &&
            x.getRandomValues &&
            ((y = new Uint8Array(16)),
            (v = function () {
                return x.getRandomValues(y), y
            }))
        var y
        v ||
            ((C = new Array(16)),
            (v = function () {
                for (var i = 0, t; i < 16; i++)
                    i & 3 || (t = Math.random() * 4294967296), (C[i] = (t >>> ((i & 3) << 3)) & 255)
                return C
            }))
        var C
        _.exports = v
    })
    var S = d((ut, P) => {
        var b = []
        for (f = 0; f < 256; ++f) b[f] = (f + 256).toString(16).substr(1)
        var f
        function K(i, t) {
            var e = t || 0,
                n = b
            return (
                n[i[e++]] +
                n[i[e++]] +
                n[i[e++]] +
                n[i[e++]] +
                '-' +
                n[i[e++]] +
                n[i[e++]] +
                '-' +
                n[i[e++]] +
                n[i[e++]] +
                '-' +
                n[i[e++]] +
                n[i[e++]] +
                '-' +
                n[i[e++]] +
                n[i[e++]] +
                n[i[e++]] +
                n[i[e++]] +
                n[i[e++]] +
                n[i[e++]]
            )
        }
        P.exports = K
    })
    var R = d((lt, F) => {
        var Q = T(),
            X = S(),
            a = Q(),
            Z = [a[0] | 1, a[1], a[2], a[3], a[4], a[5]],
            U = ((a[6] << 8) | a[7]) & 16383,
            D = 0,
            k = 0
        function tt(i, t, e) {
            var n = (t && e) || 0,
                s = t || []
            i = i || {}
            var r = i.clockseq !== void 0 ? i.clockseq : U,
                o = i.msecs !== void 0 ? i.msecs : new Date().getTime(),
                h = i.nsecs !== void 0 ? i.nsecs : k + 1,
                l = o - D + (h - k) / 1e4
            if (
                (l < 0 && i.clockseq === void 0 && (r = (r + 1) & 16383),
                (l < 0 || o > D) && i.nsecs === void 0 && (h = 0),
                h >= 1e4)
            )
                throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
            ;(D = o), (k = h), (U = r), (o += 122192928e5)
            var u = ((o & 268435455) * 1e4 + h) % 4294967296
            ;(s[n++] = (u >>> 24) & 255), (s[n++] = (u >>> 16) & 255), (s[n++] = (u >>> 8) & 255), (s[n++] = u & 255)
            var c = ((o / 4294967296) * 1e4) & 268435455
            ;(s[n++] = (c >>> 8) & 255),
                (s[n++] = c & 255),
                (s[n++] = ((c >>> 24) & 15) | 16),
                (s[n++] = (c >>> 16) & 255),
                (s[n++] = (r >>> 8) | 128),
                (s[n++] = r & 255)
            for (var E = i.node || Z, m = 0; m < 6; ++m) s[n + m] = E[m]
            return t || X(s)
        }
        F.exports = tt
    })
    var I = d((dt, G) => {
        var it = T(),
            et = S()
        function nt(i, t, e) {
            var n = (t && e) || 0
            typeof i == 'string' && ((t = i == 'binary' ? new Array(16) : null), (i = null)), (i = i || {})
            var s = i.random || (i.rng || it)()
            if (((s[6] = (s[6] & 15) | 64), (s[8] = (s[8] & 63) | 128), t)) for (var r = 0; r < 16; ++r) t[n + r] = s[r]
            return t || et(s)
        }
        G.exports = nt
    })
    var B = d((ft, z) => {
        var st = R(),
            M = I(),
            A = M
        A.v1 = st
        A.v4 = M
        z.exports = A
    })
    function $(i, t = () => {}) {
        let e = !1
        return function () {
            e ? t.apply(this, arguments) : ((e = !0), i.apply(this, arguments))
        }
    }
    var q = (i) => {
        i.data('notificationComponent', ({ notification: t }) => ({
            isShown: !1,
            computedStyle: null,
            transitionDuration: null,
            transitionEasing: null,
            init: function () {
                ;(this.computedStyle = window.getComputedStyle(this.$el)),
                    (this.transitionDuration = parseFloat(this.computedStyle.transitionDuration) * 1e3),
                    (this.transitionEasing = this.computedStyle.transitionTimingFunction),
                    this.configureTransitions(),
                    this.configureAnimations(),
                    t.duration && t.duration !== 'persistent' && setTimeout(() => this.close(), t.duration),
                    (this.isShown = !0)
            },
            configureTransitions: function () {
                let e = this.computedStyle.display,
                    n = () => {
                        i.mutateDom(() => {
                            this.$el.style.setProperty('display', e),
                                this.$el.style.setProperty('visibility', 'visible')
                        }),
                            (this.$el._x_isShown = !0)
                    },
                    s = () => {
                        i.mutateDom(() => {
                            this.$el._x_isShown
                                ? this.$el.style.setProperty('visibility', 'hidden')
                                : this.$el.style.setProperty('display', 'none')
                        })
                    },
                    r = $(
                        (o) => (o ? n() : s()),
                        (o) => {
                            this.$el._x_toggleAndCascadeWithTransitions(this.$el, o, n, s)
                        },
                    )
                i.effect(() => r(this.isShown))
            },
            configureAnimations: function () {
                let e
                Livewire.hook('commit', ({ component: n, commit: s, succeed: r, fail: o, respond: h }) => {
                    if (!n.snapshot.data.isFilamentNotificationsComponent) return
                    let l = () => this.$el.getBoundingClientRect().top,
                        u = l()
                    h(() => {
                        ;(e = () => {
                            this.isShown &&
                                this.$el.animate(
                                    [{ transform: `translateY(${u - l()}px)` }, { transform: 'translateY(0px)' }],
                                    { duration: this.transitionDuration, easing: this.transitionEasing },
                                )
                        }),
                            this.$el.getAnimations().forEach((c) => c.finish())
                    }),
                        r(({ snapshot: c, effect: E }) => {
                            e()
                        })
                })
            },
            close: function () {
                ;(this.isShown = !1),
                    setTimeout(
                        () => window.dispatchEvent(new CustomEvent('notificationClosed', { detail: { id: t.id } })),
                        this.transitionDuration,
                    )
            },
            markAsRead: function () {
                window.dispatchEvent(new CustomEvent('markedNotificationAsRead', { detail: { id: t.id } }))
            },
            markAsUnread: function () {
                window.dispatchEvent(new CustomEvent('markedNotificationAsUnread', { detail: { id: t.id } }))
            },
        }))
    }
    var L = J(B(), 1),
        p = class {
            constructor() {
                return this.id((0, L.v4)()), this
            }
            id(t) {
                return (this.id = t), this
            }
            title(t) {
                return (this.title = t), this
            }
            body(t) {
                return (this.body = t), this
            }
            actions(t) {
                return (this.actions = t), this
            }
            status(t) {
                switch (t) {
                    case 'danger':
                        this.danger()
                        break
                    case 'info':
                        this.info()
                        break
                    case 'success':
                        this.success()
                        break
                    case 'warning':
                        this.warning()
                        break
                }
                return this
            }
            color(t) {
                return (this.color = t), this
            }
            icon(t) {
                return (this.icon = t), this
            }
            iconColor(t) {
                return (this.iconColor = t), this
            }
            duration(t) {
                return (this.duration = t), this
            }
            seconds(t) {
                return this.duration(t * 1e3), this
            }
            persistent() {
                return this.duration('persistent'), this
            }
            danger() {
                return this.icon('heroicon-o-x-circle'), this.iconColor('danger'), this
            }
            info() {
                return this.icon('heroicon-o-information-circle'), this.iconColor('info'), this
            }
            success() {
                return this.icon('heroicon-o-check-circle'), this.iconColor('success'), this
            }
            warning() {
                return this.icon('heroicon-o-exclamation-circle'), this.iconColor('warning'), this
            }
            view(t) {
                return (this.view = t), this
            }
            viewData(t) {
                return (this.viewData = t), this
            }
            send() {
                return (
                    window.dispatchEvent(new CustomEvent('notificationSent', { detail: { notification: this } })), this
                )
            }
        },
        w = class {
            constructor(t) {
                return this.name(t), this
            }
            name(t) {
                return (this.name = t), this
            }
            color(t) {
                return (this.color = t), this
            }
            dispatch(t, e) {
                return this.event(t), this.eventData(e), this
            }
            dispatchSelf(t, e) {
                return this.dispatch(t, e), (this.dispatchDirection = 'self'), this
            }
            dispatchTo(t, e, n) {
                return this.dispatch(e, n), (this.dispatchDirection = 'to'), (this.dispatchToComponent = t), this
            }
            emit(t, e) {
                return this.dispatch(t, e), this
            }
            emitSelf(t, e) {
                return this.dispatchSelf(t, e), this
            }
            emitTo(t, e, n) {
                return this.dispatchTo(t, e, n), this
            }
            dispatchDirection(t) {
                return (this.dispatchDirection = t), this
            }
            dispatchToComponent(t) {
                return (this.dispatchToComponent = t), this
            }
            event(t) {
                return (this.event = t), this
            }
            eventData(t) {
                return (this.eventData = t), this
            }
            extraAttributes(t) {
                return (this.extraAttributes = t), this
            }
            icon(t) {
                return (this.icon = t), this
            }
            iconPosition(t) {
                return (this.iconPosition = t), this
            }
            outlined(t = !0) {
                return (this.isOutlined = t), this
            }
            disabled(t = !0) {
                return (this.isDisabled = t), this
            }
            label(t) {
                return (this.label = t), this
            }
            close(t = !0) {
                return (this.shouldClose = t), this
            }
            openUrlInNewTab(t = !0) {
                return (this.shouldOpenUrlInNewTab = t), this
            }
            size(t) {
                return (this.size = t), this
            }
            url(t) {
                return (this.url = t), this
            }
            view(t) {
                return (this.view = t), this
            }
            button() {
                return this.view('filament-notifications::actions.button-action'), this
            }
            grouped() {
                return this.view('filament-notifications::actions.grouped-action'), this
            }
            link() {
                return this.view('filament-notifications::actions.link-action'), this
            }
        },
        g = class {
            constructor(t) {
                return this.actions(t), this
            }
            actions(t) {
                return (this.actions = t.map((e) => e.grouped())), this
            }
            color(t) {
                return (this.color = t), this
            }
            icon(t) {
                return (this.icon = t), this
            }
            iconPosition(t) {
                return (this.iconPosition = t), this
            }
            label(t) {
                return (this.label = t), this
            }
            tooltip(t) {
                return (this.tooltip = t), this
            }
        }
    window.FilamentNotificationAction = w
    window.FilamentNotificationActionGroup = g
    window.FilamentNotification = p
    document.addEventListener('alpine:init', () => {
        window.Alpine.plugin(q)
    })
})()
