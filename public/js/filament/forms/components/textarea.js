function t({ initialHeight: e }) {
    return {
        init: function () {
            this.render()
        },
        render: function () {
            this.$el.scrollHeight > 0 &&
                ((this.$el.style.height = e + 'rem'), (this.$el.style.height = this.$el.scrollHeight + 'px'))
        },
    }
}
export { t as default }
