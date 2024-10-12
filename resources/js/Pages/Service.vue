<template>
    <AuthenticatedLayout title="Service" description="Service">
        <Carousel v-if="images.length > 0" :wrap-around="true" class="rounded-2xl">
            <Slide v-for="slide in images" :key="slide.url" class="rounded-2xl">
                <div class="carousel__item rounded-2xl m-5">
                    <div class="relative w-full rounded-2xl">
                        <div class="relative shadow-lg rounded-2xl">
                            <div
                                aria-hidden="true"
                                class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black opacity-50"
                            />
                            <img class="rounded-2xl w-full object-cover" :src="slide.url" alt="" />
                        </div>
                    </div>
                </div>
            </Slide>
        </Carousel>
        <div class="relative overflow-hidden bg-white py-16">
            <div class="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
                <div class="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
                    <svg
                        class="absolute top-12 left-full translate-x-32 transform"
                        width="404"
                        height="384"
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                            <pattern
                                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                                x="0"
                                y="0"
                                width="20"
                                height="20"
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                    </svg>
                    <svg
                        class="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
                        width="404"
                        height="384"
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                            <pattern
                                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                x="0"
                                y="0"
                                width="20"
                                height="20"
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                    </svg>
                    <svg
                        class="absolute bottom-12 left-full translate-x-32 transform"
                        width="404"
                        height="384"
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                            <pattern
                                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                                x="0"
                                y="0"
                                width="20"
                                height="20"
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                    </svg>
                </div>
            </div>
            <div class="relative px-20 lg:px-8 flex flex-col justify-center">
                <div class="mx-auto max-w-prose text-lg">
                    <h1>
                        <span
                            class="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl"
                        >
                            {{ service.title }}
                        </span>
                    </h1>
                </div>
                <div class="prose prose-lg prose-cerulean mx-auto mt-6 text-gray-500">
                    <p v-html="service.content"></p>
                </div>
            </div>
        </div>
        <div class="bg-white py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div
                    class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                >
                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Services</h2>
                    <dl class="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
                        <div v-for="feature in service.features" :key="feature.name">
                            <dt class="text-base font-semibold leading-7 text-gray-900">
                                <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-cerulean-600">
                                    <vue-feather :type="feature.icon" stroke="white"></vue-feather>
                                </div>
                                {{ feature.name }}
                            </dt>
                            <dd v-html="feature.description" class="mt-1 text-base leading-7 text-gray-600"></dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
        <!-- contact form -->
        <div class="overflow-hidden bg-white py-16 px-6 lg:px-8 lg:py-24">
            <div class="relative mx-auto max-w-xl">
                <svg
                    class="absolute left-full translate-x-1/2 transform"
                    width="404"
                    height="404"
                    fill="none"
                    viewBox="0 0 404 404"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="85737c0e-0916-41d7-917f-596dc7edfa27"
                            x="0"
                            y="0"
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                </svg>
                <svg
                    class="absolute right-full bottom-0 -translate-x-1/2 transform"
                    width="404"
                    height="404"
                    fill="none"
                    viewBox="0 0 404 404"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="85737c0e-0916-41d7-917f-596dc7edfa27"
                            x="0"
                            y="0"
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                </svg>
                <div class="text-center">
                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Contacter l'équipe commerciale
                    </h2>
                </div>
                <div class="mt-12">
                    <form
                        @submit.prevent="submitContactForm"
                        class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                    >
                        <div>
                            <label for="first-name" class="block text-sm font-medium text-gray-700">Prénom</label>
                            <div class="mt-1">
                                <input
                                    v-model="contactForm.first_name"
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autocomplete="given-name"
                                    class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-cerulean-500 focus:ring-cerulean-500"
                                />
                            </div>
                        </div>
                        <div>
                            <label for="last-name" class="block text-sm font-medium text-gray-700">Nom</label>
                            <div class="mt-1">
                                <input
                                    v-model="contactForm.last_name"
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    autocomplete="family-name"
                                    class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-cerulean-500 focus:ring-cerulean-500"
                                />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="company" class="block text-sm font-medium text-gray-700">Entreprise</label>
                            <div class="mt-1">
                                <input
                                    v-model="contactForm.company"
                                    type="text"
                                    name="company"
                                    id="company"
                                    autocomplete="organization"
                                    class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-cerulean-500 focus:ring-cerulean-500"
                                />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                            <div class="mt-1">
                                <input
                                    v-model="contactForm.email"
                                    id="email"
                                    name="email"
                                    type="email"
                                    autocomplete="email"
                                    class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-cerulean-500 focus:ring-cerulean-500"
                                />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="phone-number" class="block text-sm font-medium text-gray-700">Téléphone </label>
                            <div class="relative mt-1 rounded-md shadow-sm">
                                <input
                                    v-model="contactForm.phone"
                                    type="text"
                                    name="phone-number"
                                    id="phone-number"
                                    autocomplete="tel"
                                    class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-cerulean-500 focus:ring-cerulean-500"
                                    placeholder="+1 (555) 987-6543"
                                />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                            <div class="mt-1">
                                <textarea
                                    v-model="contactForm.message"
                                    id="message"
                                    name="message"
                                    rows="4"
                                    class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-cerulean-500 focus:ring-cerulean-500"
                                />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <div class="flex items-start"></div>
                        </div>
                        <div class="sm:col-span-2">
                            <button
                                type="submit"
                                class="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-cerulean-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
<script setup>
import { computed, defineProps } from 'vue'

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import { Carousel, Slide } from 'vue3-carousel'

const props = defineProps({
    service: Object,
})

import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon, PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/outline'
import VueFeather from 'vue-feather'

const features = [
    {
        name: 'Spam report',
        description:
            'Autem reprehenderit aut debitis ut. Officiis harum omnis placeat blanditiis delectus sint vel et voluptatum. Labore asperiores non corporis molestiae.',
        icon: TrashIcon,
    },
    {
        name: 'Compose in markdown',
        description:
            'Illum et aut inventore. Ut et dignissimos quasi. Omnis saepe dolorum. Hic autem fugiat. Voluptatem officiis necessitatibus est.',
        icon: PencilSquareIcon,
    },
    {
        name: 'Email commenting',
        description:
            'Commodi quam quo. In quasi mollitia optio voluptate et est reiciendis. Ut et sunt id officiis vitae perspiciatis. Et accusantium sapiente.',
        icon: ChatBubbleOvalLeftEllipsisIcon,
    },
    {
        name: 'Customer connections',
        description:
            'Deserunt corrupti praesentium quo vel cupiditate est occaecati ad. Aperiam libero modi similique iure praesentium facilis quo cumque quibusdam.',
        icon: HeartIcon,
    },
]

import { useForm } from '@inertiajs/vue3'

const contactForm = useForm({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: '',
    company: '',
    service_id: props.service.id,
})

const submitContactForm = () => {
    contactForm.post(route('service.contact.store'), {
        preserveScroll: true,
        onSuccess: () => {
            contactForm.reset()
        },
    })
}

/* service.features[0].icon.replace(/feathericon-/, '') */

const service = {
    id: props.service.id,
    title: props.service.title,
    content: props.service.content,
    features: props.service.features.map((feature) => {
        return {
            name: feature.name,
            description: feature.description,
            icon: feature.icon.replace(/feathericon-/, ''),
        }
    }),
    medias: props.service.medias,
}

var audios = computed(() => {
    return props.service.medias.filter((media) => {
        return media.type && media.type.startsWith('audio/')
    })
})

var videos = computed(() => {
    return props.service.medias.filter((media) => {
        return media.type && media.type.startsWith('video/')
    })
})

var images = computed(() => {
    if (props.service.medias) {
        return props.service.medias.filter((media) => {
            return media.type && media.type.startsWith('image/')
        })
    } else {
        //placeholder image
        return [
            {
                url: 'https://via.placeholder.com/150',
                id: 1,
            },
            {
                url: 'https://via.placeholder.com/150',
                id: 2,
            },
            {
                url: 'https://via.placeholder.com/150',
                id: 3,
            },
        ]
    }
})

var documents = computed(() => {
    return props.service.medias.filter((media) => {
        return media.type && media.type.startsWith('service/pdf')
    })
})
</script>
