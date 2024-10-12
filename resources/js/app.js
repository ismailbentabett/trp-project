import './bootstrap'
import '../css/app.css'

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m'
import { LoadingPlugin } from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import VueFeather from 'vue-feather'
import { createPinia } from 'pinia'
import VueTailwindDatepicker from 'vue-tailwind-datepicker'
import VueLazyLoad from 'vue3-lazyload'

const pinia = createPinia()

// Your app initialization logic goes here

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(LoadingPlugin)
            .use(VueFeather)
            .use(pinia)
            .use(VueTailwindDatepicker)
            .use(VueLazyLoad)
            .mount(el)
    },
    progress: {
        // The delay after which the progress bar will appear, in milliseconds...
        delay: 250,

        // The color of the progress bar...
        color: '#05b9e0',

        // Whether to include the default NProgress styles...
        includeCSS: true,

        // Whether the NProgress spinner will be shown...
        showSpinner: true,
    },
})
