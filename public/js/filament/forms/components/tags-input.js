function i({ state: a, splitKeys: n }) {
    return {
        newTag: '',
        state: a,
        createTag: function () {
            if (((this.newTag = this.newTag.trim()), this.newTag !== '')) {
                if (this.state.includes(this.newTag)) {
                    this.newTag = ''
                    return
                }
                this.state.push(this.newTag), (this.newTag = '')
            }
        },
        deleteTag: function (t) {
            this.state = this.state.filter((e) => e !== t)
        },
        input: {
            ['x-on:blur']: 'createTag()',
            ['x-model']: 'newTag',
            ['x-on:keydown'](t) {
                ;['Enter', ...n].includes(t.key) && (t.preventDefault(), t.stopPropagation(), this.createTag())
            },
            ['x-on:paste']() {
                this.$nextTick(() => {
                    let t = n.map((e) => e.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&')).join('|')
                    this.newTag.split(new RegExp(t, 'g')).forEach((e) => {
                        ;(this.newTag = e), this.createTag()
                    })
                })
            },
        },
    }
}
export { i as default }
