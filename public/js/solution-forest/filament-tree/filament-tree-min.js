;(() => {
    var Y = (l, r) => () => (r || ((r = { exports: {} }), l(r.exports, r)), r.exports)
    var v = Y(() => {
        ;(function (l, r, h, u) {
            var N = 'ontouchstart' in h,
                m = (function () {
                    var t = h.createElement('div'),
                        s = h.documentElement
                    if (!('pointerEvents' in t.style)) return !1
                    ;(t.style.pointerEvents = 'auto'), (t.style.pointerEvents = 'x'), s.appendChild(t)
                    var n = r.getComputedStyle && r.getComputedStyle(t, '').pointerEvents === 'auto'
                    return s.removeChild(t), !!n
                })(),
                C = {
                    listNodeName: 'ol',
                    itemNodeName: 'li',
                    rootClass: 'dd',
                    listClass: 'dd-list',
                    itemClass: 'dd-item',
                    dragClass: 'dd-dragel',
                    handleClass: 'dd-handle',
                    collapsedClass: 'dd-collapsed',
                    placeClass: 'dd-placeholder',
                    noDragClass: 'dd-nodrag',
                    emptyClass: 'dd-empty',
                    expandBtnHTML: '<button data-action="expand" type="button">Expand</button>',
                    collapseBtnHTML: '<button data-action="collapse" type="button">Collapse</button>',
                    group: 0,
                    maxDepth: 5,
                    threshold: 20,
                }
            function E(t, s) {
                ;(this.w = l(h)), (this.el = l(t)), (this.options = l.extend({}, C, s)), this.init()
            }
            ;(E.prototype = {
                init: function () {
                    var t = this
                    t.reset(),
                        t.el.data('nestable-group', this.options.group),
                        (t.placeEl = l('<div class="' + t.options.placeClass + '"/>')),
                        l.each(this.el.find(t.options.itemNodeName), function (a, d) {
                            t.setParent(l(d))
                        }),
                        t.el.on('click', 'button', function (a) {
                            if (!t.dragEl) {
                                var d = l(a.currentTarget),
                                    i = d.data('action'),
                                    e = d.parent(t.options.itemNodeName)
                                i === 'collapse' && t.collapseItem(e), i === 'expand' && t.expandItem(e)
                            }
                        })
                    var s = function (a) {
                            var d = l(a.target)
                            if (!d.hasClass(t.options.handleClass)) {
                                if (d.closest('.' + t.options.noDragClass).length) return
                                d = d.closest('.' + t.options.handleClass)
                            }
                            !d.length ||
                                t.dragEl ||
                                ((t.isTouch = /^touch/.test(a.type)),
                                !(t.isTouch && a.touches.length !== 1) &&
                                    (a.preventDefault(), t.dragStart(a.touches ? a.touches[0] : a)))
                        },
                        n = function (a) {
                            t.dragEl && (a.preventDefault(), t.dragMove(a.touches ? a.touches[0] : a))
                        },
                        o = function (a) {
                            t.dragEl && (a.preventDefault(), t.dragStop(a.touches ? a.touches[0] : a))
                        }
                    N &&
                        (t.el[0].addEventListener('touchstart', s, !1),
                        r.addEventListener('touchmove', n, !1),
                        r.addEventListener('touchend', o, !1),
                        r.addEventListener('touchcancel', o, !1)),
                        t.el.on('mousedown', s),
                        t.w.on('mousemove', n),
                        t.w.on('mouseup', o)
                },
                serialize: function () {
                    var t,
                        s = 0,
                        n = this
                    return (
                        (step = function (o, a) {
                            var d = [],
                                i = o.children(n.options.itemNodeName)
                            return (
                                i.each(function () {
                                    var e = l(this),
                                        p = l.extend({}, e.data()),
                                        f = e.children(n.options.listNodeName)
                                    f.length && (p.children = step(f, a + 1)), d.push(p)
                                }),
                                d
                            )
                        }),
                        (t = step(n.el.find(n.options.listNodeName).first(), s)),
                        t
                    )
                },
                serialise: function () {
                    return this.serialize()
                },
                reset: function () {
                    ;(this.mouse = {
                        offsetX: 0,
                        offsetY: 0,
                        startX: 0,
                        startY: 0,
                        lastX: 0,
                        lastY: 0,
                        nowX: 0,
                        nowY: 0,
                        distX: 0,
                        distY: 0,
                        dirAx: 0,
                        dirX: 0,
                        dirY: 0,
                        lastDirX: 0,
                        lastDirY: 0,
                        distAxX: 0,
                        distAxY: 0,
                    }),
                        (this.isTouch = !1),
                        (this.moving = !1),
                        (this.dragEl = null),
                        (this.dragRootEl = null),
                        (this.dragDepth = 0),
                        (this.hasNewRoot = !1),
                        (this.pointEl = null)
                },
                expandItem: function (t) {
                    t.removeClass(this.options.collapsedClass),
                        t.children('[data-action="expand"]').hide(),
                        t.children('[data-action="collapse"]').show(),
                        t.children(this.options.listNodeName).show()
                },
                collapseItem: function (t) {
                    var s = t.children(this.options.listNodeName)
                    s.length &&
                        (t.addClass(this.options.collapsedClass),
                        t.children('[data-action="collapse"]').hide(),
                        t.children('[data-action="expand"]').show(),
                        t.children(this.options.listNodeName).hide())
                },
                expandAll: function () {
                    var t = this
                    t.el.find(t.options.itemNodeName).each(function () {
                        t.expandItem(l(this))
                    })
                },
                collapseAll: function () {
                    var t = this
                    t.el.find(t.options.itemNodeName).each(function () {
                        t.collapseItem(l(this))
                    })
                },
                setParent: function (t) {
                    t.children(this.options.listNodeName).length &&
                        (t.prepend(l(this.options.expandBtnHTML)), t.prepend(l(this.options.collapseBtnHTML))),
                        t.children('[data-action="expand"]').hide()
                },
                unsetParent: function (t) {
                    t.removeClass(this.options.collapsedClass),
                        t.children('[data-action]').remove(),
                        t.children(this.options.listNodeName).remove()
                },
                dragStart: function (t) {
                    var s = this.mouse,
                        n = l(t.target),
                        o = n.closest(this.options.itemNodeName)
                    this.placeEl.css('height', o.height()),
                        (s.offsetX = t.offsetX !== u ? t.offsetX : t.pageX - n.offset().left),
                        (s.offsetY = t.offsetY !== u ? t.offsetY : t.pageY - n.offset().top),
                        (s.startX = s.lastX = t.pageX),
                        (s.startY = s.lastY = t.pageY),
                        (this.dragRootEl = this.el),
                        (this.dragEl = l(h.createElement(this.options.listNodeName)).addClass(
                            this.options.listClass + ' ' + this.options.dragClass,
                        )),
                        this.dragEl.css('width', o.width()),
                        o.after(this.placeEl),
                        o[0].parentNode.removeChild(o[0]),
                        o.appendTo(this.dragEl),
                        l(h.body).append(this.dragEl),
                        this.dragEl.css({ left: t.pageX - s.offsetX, top: t.pageY - s.offsetY })
                    var a,
                        d,
                        i = this.dragEl.find(this.options.itemNodeName)
                    for (a = 0; a < i.length; a++)
                        (d = l(i[a]).parents(this.options.listNodeName).length),
                            d > this.dragDepth && (this.dragDepth = d)
                },
                dragStop: function (t) {
                    var s = this.dragEl.children(this.options.itemNodeName).first()
                    s[0].parentNode.removeChild(s[0]),
                        this.placeEl.replaceWith(s),
                        this.dragEl.remove(),
                        this.el.trigger('change'),
                        this.hasNewRoot && this.dragRootEl.trigger('change'),
                        this.reset()
                },
                dragMove: function (t) {
                    var s,
                        n,
                        o,
                        a,
                        d,
                        i = this.options,
                        e = this.mouse
                    this.dragEl.css({ left: t.pageX - e.offsetX, top: t.pageY - e.offsetY }),
                        (e.lastX = e.nowX),
                        (e.lastY = e.nowY),
                        (e.nowX = t.pageX),
                        (e.nowY = t.pageY),
                        (e.distX = e.nowX - e.lastX),
                        (e.distY = e.nowY - e.lastY),
                        (e.lastDirX = e.dirX),
                        (e.lastDirY = e.dirY),
                        (e.dirX = e.distX === 0 ? 0 : e.distX > 0 ? 1 : -1),
                        (e.dirY = e.distY === 0 ? 0 : e.distY > 0 ? 1 : -1)
                    var p = Math.abs(e.distX) > Math.abs(e.distY) ? 1 : 0
                    if (!e.moving) {
                        ;(e.dirAx = p), (e.moving = !0)
                        return
                    }
                    e.dirAx !== p
                        ? ((e.distAxX = 0), (e.distAxY = 0))
                        : ((e.distAxX += Math.abs(e.distX)),
                          e.dirX !== 0 && e.dirX !== e.lastDirX && (e.distAxX = 0),
                          (e.distAxY += Math.abs(e.distY)),
                          e.dirY !== 0 && e.dirY !== e.lastDirY && (e.distAxY = 0)),
                        (e.dirAx = p),
                        e.dirAx &&
                            e.distAxX >= i.threshold &&
                            ((e.distAxX = 0),
                            (o = this.placeEl.prev(i.itemNodeName)),
                            e.distX > 0 &&
                                o.length &&
                                !o.hasClass(i.collapsedClass) &&
                                ((s = o.find(i.listNodeName).last()),
                                (d = this.placeEl.parents(i.listNodeName).length),
                                d + this.dragDepth <= i.maxDepth &&
                                    (s.length
                                        ? ((s = o.children(i.listNodeName).last()), s.append(this.placeEl))
                                        : ((s = l('<' + i.listNodeName + '/>').addClass(i.listClass)),
                                          s.append(this.placeEl),
                                          o.append(s),
                                          this.setParent(o)))),
                            e.distX < 0 &&
                                ((a = this.placeEl.next(i.itemNodeName)),
                                a.length ||
                                    ((n = this.placeEl.parent()),
                                    this.placeEl.closest(i.itemNodeName).after(this.placeEl),
                                    n.children().length || this.unsetParent(n.parent()))))
                    var f = !1
                    if (
                        (m || (this.dragEl[0].style.visibility = 'hidden'),
                        (this.pointEl = l(
                            h.elementFromPoint(
                                t.pageX - h.body.scrollLeft,
                                t.pageY - (r.pageYOffset || h.documentElement.scrollTop),
                            ),
                        )),
                        m || (this.dragEl[0].style.visibility = 'visible'),
                        this.pointEl.hasClass(i.handleClass) && (this.pointEl = this.pointEl.parent(i.itemNodeName)),
                        this.pointEl.hasClass(i.emptyClass))
                    )
                        f = !0
                    else if (!this.pointEl.length || !this.pointEl.hasClass(i.itemClass)) return
                    var c = this.pointEl.closest('.' + i.rootClass),
                        g = this.dragRootEl.data('nestable-id') !== c.data('nestable-id')
                    if (!e.dirAx || g || f) {
                        if (
                            (g && i.group !== c.data('nestable-group')) ||
                            ((d = this.dragDepth - 1 + this.pointEl.parents(i.listNodeName).length), d > i.maxDepth)
                        )
                            return
                        var X = t.pageY < this.pointEl.offset().top + this.pointEl.height() / 2
                        ;(n = this.placeEl.parent()),
                            f
                                ? ((s = l(h.createElement(i.listNodeName)).addClass(i.listClass)),
                                  s.append(this.placeEl),
                                  this.pointEl.replaceWith(s))
                                : X
                                  ? this.pointEl.before(this.placeEl)
                                  : this.pointEl.after(this.placeEl),
                            n.children().length || this.unsetParent(n.parent()),
                            this.dragRootEl.find(i.itemNodeName).length ||
                                this.dragRootEl.append('<div class="' + i.emptyClass + '"/>'),
                            g && ((this.dragRootEl = c), (this.hasNewRoot = this.el[0] !== this.dragRootEl[0]))
                    }
                },
            }),
                (l.fn.nestable = function (t) {
                    var s = this,
                        n = this
                    return (
                        s.each(function () {
                            var o = l(this).data('nestable')
                            o
                                ? typeof t == 'string' && typeof o[t] == 'function' && (n = o[t]())
                                : (l(this).data('nestable', new E(this, t)),
                                  l(this).data('nestable-id', new Date().getTime()))
                        }),
                        n || s
                    )
                })
        })(window.jQuery || window.Zepto, window, document)
    })
    v()
})()
/*!
 * Nestable jQuery Plugin - Copyright (c) 2012 David Bushell - http://dbushell.com/
 * Dual-licensed under the BSD or MIT licenses
 */
