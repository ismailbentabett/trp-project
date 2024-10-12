<template>
    <Carousel :autoplay="5000" :wrap-around="true">
        <Slide v-for="data in datas" :key="data.id">
            <div class="w-full">
                <div
                    class="hidden sm:flex h-10 items-center justify-center bg-cerulean-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8"
                >
                    <div class="flex space-x-6 md:order-2">
                        <p class="flex space-x-6 items-center">
                            <PhoneIcon class="h-4 w-4 text-white mr-2" />
                            {{ data.phone }}
                        </p>
                        <p class="flex space-x-6 items-center">
                            <EnvelopeIcon class="h-4 w-4 text-white mr-2" />
                            {{ data.email }}
                        </p>
                        <a
                            v-if="data.facebook"
                            :href="getFacebook(data.facebook).href"
                            class="hidden md:block text-white hover:text-white"
                        >
                            <component :is="getFacebook(data.facebook).icon" class="h-6 w-6" aria-hidden="true" />
                        </a>
                        <a
                            v-if="data.instagram"
                            :href="getInstagram(data.instagram).href"
                            class="hidden md:block text-white hover:text-white"
                        >
                            <component :is="getInstagram(data.instagram).icon" class="h-6 w-6" aria-hidden="true" />
                        </a>
                        <a
                            v-if="data.twitter"
                            :href="getTwitter(data.twitter).href"
                            class="hidden md:block text-white hover:text-white"
                        >
                            <component :is="getTwitter(data.twitter).icon" class="h-6 w-6" aria-hidden="true" />
                        </a>
                        <a
                            v-if="data.youtube"
                            :href="getYoutube(data.youtube).href"
                            class="hidden md:block text-white hover:text-white"
                        >
                            <component :is="getYoutube(data.youtube).icon" class="h-6 w-6" aria-hidden="true" />
                        </a>
                        <a
                            v-if="data.whatsapp"
                            :href="getWhatsapp(data.whatsapp).href"
                            class="hidden md:block text-white hover:text-white"
                        >
                            <component :is="getWhatsapp(data.whatsapp).icon" class="h-6 w-6" aria-hidden="true" />
                        </a>
                        <a
                            v-if="data.linkedin"
                            :href="getLinkedin(data.linkedin).href"
                            class="hidden md:block text-white hover:text-white"
                        >
                            <component :is="getLinkedin(data.linkedin).icon" class="h-6 w-6" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        </Slide>
    </Carousel>
</template>

<script setup>
import { defineComponent, h, ref, watchEffect } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

//get header data
const socials = ref([])

import 'vue3-carousel/dist/carousel.css'

const data = ref([])

const getFacebook = (url) => {
    return {
        name: 'Facebook',
        href: url,
        icon: defineComponent({
            render: () =>
                h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                    h('path', {
                        'fill-rule': 'evenodd',
                        d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                        'clip-rule': 'evenodd',
                    }),
                ]),
        }),
    }
}

const getInstagram = (url) => {
    return {
        name: 'Instagram',
        href: url,
        icon: defineComponent({
            render: () =>
                h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                    h('path', {
                        'fill-rule': 'evenodd',
                        d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                        'clip-rule': 'evenodd',
                    }),
                ]),
        }),
    }
}

const getTwitter = (url) => {
    return {
        name: 'Twitter',
        href: url,
        icon: defineComponent({
            render: () =>
                h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                    h('path', {
                        d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
                    }),
                ]),
        }),
    }
}

const getWhatsapp = (url) => {
    return {
        name: 'YouTube',
        href: url,
        icon: defineComponent({
            render: () =>
                h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                    h('path', {
                        'fill-rule': 'evenodd',
                        d: 'M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z',
                        'clip-rule': 'evenodd',
                    }),
                ]),
        }),
    }
}

const getLinkedin = (url) => {
    return {
        name: 'Whatsapp',
        href: url,
        icon: defineComponent({
            render: () =>
                h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                    h('path', {
                        'fill-rule': 'evenodd',
                        d: 'M16.6,14c-0.2-0.1-1.5-0.7-1.7-0.8c-0.2-0.1-0.4-0.1-0.6,0.1c-0.2,0.2-0.6,0.8-0.8,1c-0.1,0.2-0.3,0.2-0.5,0.1c-0.7-0.3-1.4-0.7-2-1.2c-0.5-0.5-1-1.1-1.4-1.7c-0.1-0.2,0-0.4,0.1-0.5c0.1-0.1,0.2-0.3,0.4-0.4c0.1-0.1,0.2-0.3,0.2-0.4c0.1-0.1,0.1-0.3,0-0.4c-0.1-0.1-0.6-1.3-0.8-1.8C9.4,7.3,9.2,7.3,9,7.3c-0.1,0-0.3,0-0.5,0C8.3,7.3,8,7.5,7.9,7.6C7.3,8.2,7,8.9,7,9.7c0.1,0.9,0.4,1.8,1,2.6c1.1,1.6,2.5,2.9,4.2,3.7c0.5,0.2,0.9,0.4,1.4,0.5c0.5,0.2,1,0.2,1.6,0.1c0.7-0.1,1.3-0.6,1.7-1.2c0.2-0.4,0.2-0.8,0.1-1.2C17,14.2,16.8,14.1,16.6,14 M19.1,4.9C15.2,1,8.9,1,5,4.9c-3.2,3.2-3.8,8.1-1.6,12L2,22l5.3-1.4c1.5,0.8,3.1,1.2,4.7,1.2h0c5.5,0,9.9-4.4,9.9-9.9C22,9.3,20.9,6.8,19.1,4.9 M16.4,18.9c-1.3,0.8-2.8,1.3-4.4,1.3h0c-1.5,0-2.9-0.4-4.2-1.1l-0.3-0.2l-3.1,0.8l0.8-3l-0.2-0.3C2.6,12.4,3.8,7.4,7.7,4.9S16.6,3.7,19,7.5C21.4,11.4,20.3,16.5,16.4,18.9',
                        'clip-rule': 'evenodd',
                    }),
                ]),
        }),
    }
}

const getYoutube = (url) => {
    return {
        name: 'Linkedin',
        href: url,
        icon: defineComponent({
            render: () =>
                h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                    h('path', {
                        'fill-rule': 'evenodd',
                        d: 'M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91-1.182 0-1.886.796-2.195 1.565-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126 2.815 0 4.926 1.84 4.926 5.792zM2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254v12.869z',
                        'clip-rule': 'evenodd',
                    }),
                ]),
        }),
    }
}
const datas = ref([])
watchEffect(() => {
    axios.get('/header').then((response) => {
        datas.value = response.data
    })
})
</script>
