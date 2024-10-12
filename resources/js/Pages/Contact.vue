<template>
    <AuthenticatedLayout title="Contact" description="Contact">
        <div class="bg-white">
            <main>
                <!-- Header -->
                <div class="bg-gray-50 py-24 sm:py-32">
                    <div class="mx-auto max-w-md px-6 sm:max-w-lg lg:max-w-7xl lg:px-8">
                        <h1
                            class="text-center text-4xl font-bold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none lg:text-6xl"
                        >
                            Prendre contact
                        </h1>
                    </div>
                </div>

                <!-- Contact Section -->
                <div class="relative bg-white">
                    <div class="lg:absolute lg:inset-0">
                        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                            <img
                                class="h-56 w-full object-cover lg:absolute lg:h-full"
                                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                                alt=""
                            />
                        </div>
                    </div>
                    <div
                        class="relative py-16 px-6 sm:py-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32"
                    >
                        <div class="lg:pr-8">
                            <div class="mx-auto max-w-md sm:max-w-lg lg:mx-0">
                                <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Travaillons ensemble</h2>
                                <p class="mt-4 text-lg text-gray-500 sm:mt-3">
                                    Nous aimerions avoir de vos nouvelles ! Envoyez-nous un message en utilisant le
                                    formulaire ci-contre, ou envoyez-nous un courriel. Nous aimerions avoir de vos
                                    nouvelles ! Envoyez-nous un message en utilisant le formulaire ci-contre, ou
                                    envoyez-nous un courriel.
                                </p>
                                <form
                                    @submit.prevent="submitContactForm"
                                    class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                                >
                                    <div class="sm:col-span-2">
                                        <label for="email" class="block text-sm font-medium text-gray-900">Email</label>
                                        <div class="mt-1">
                                            <input
                                                v-model="contactForm.email"
                                                id="email"
                                                name="email"
                                                type="email"
                                                autocomplete="email"
                                                class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cerulean-500 focus:border-cerulean-500 border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label for="first-name" class="block text-sm font-medium text-gray-900">
                                            Nom</label
                                        >
                                        <div class="mt-1">
                                            <input
                                                v-model="contactForm.name"
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autocomplete="given-name"
                                                class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cerulean-500 focus:border-cerulean-500 border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div class="flex justify-between">
                                            <label for="phone" class="block text-sm font-medium text-gray-900"
                                                >Téléphone</label
                                            >
                                            <span id="phone-optional" class="text-sm text-gray-500">Optional</span>
                                        </div>
                                        <div class="mt-1">
                                            <input
                                                v-model="contactForm.phone"
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                autocomplete="tel"
                                                class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cerulean-500 focus:border-cerulean-500 border-gray-300 rounded-md"
                                                aria-describedby="phone-optional"
                                            />
                                        </div>
                                    </div>
                                    <div class="sm:col-span-2">
                                        <label for="subject" class="block text-sm font-medium text-gray-900"
                                            >Sujet</label
                                        >
                                        <div class="mt-1">
                                            <input
                                                v-model="contactForm.subject"
                                                type="text"
                                                name="subject"
                                                id="subject"
                                                class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cerulean-500 focus:border-cerulean-500 border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>
                                    <div class="sm:col-span-2">
                                        <div class="flex justify-between">
                                            <label for="message" class="block text-sm font-medium text-gray-900"
                                                >Message</label
                                            >
                                            <span id="message-max" class="text-sm text-gray-500"
                                                >Max. 500 characters</span
                                            >
                                        </div>
                                        <div class="mt-1">
                                            <textarea
                                                v-model="contactForm.message"
                                                id="message"
                                                name="message"
                                                rows="4"
                                                class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cerulean-500 focus:border-cerulean-500 border border-gray-300 rounded-md"
                                                aria-describedby="message-max"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div class="sm:col-span-2 sm:flex sm:justify-end">
                                        <button
                                            type="submit"
                                            class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-cerulean-600 hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cerulean-500 sm:w-auto"
                                        >
                                            Soumettre
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'

import { useForm } from '@inertiajs/vue3'

const contactForm = useForm({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
})

const submitContactForm = () => {
    contactForm.post(route('contact.store'), {
        preserveScroll: true,
        onSuccess: () => {
            contactForm.reset()
        },
    })
}
</script>
