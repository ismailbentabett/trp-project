<script setup>
import InputError from '@/Components/InputError.vue'
import PrimaryButton from '@/Components/PrimaryButton.vue'
import GuestLayout from '@/Layouts/GuestLayout.vue'
import { Link, useForm } from '@inertiajs/vue3'

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
})

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    })
}

function UrlExists(url) {
    var http = new XMLHttpRequest()
    http.open('HEAD', url, false)
    http.send()
    return http.status != 404
}

import { ref, watchEffect } from 'vue'

const Logo = ref(null)
watchEffect(() => {
    axios.get(route('logo.index')).then((response) => {
        Logo.value = response.data
    })
})
</script>

<template>
    <GuestLayout title="S'inscrire" description="S'inscrire">
        <div class="flex min-h-full">
            <div class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div class="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <a href="/" class="cursor-pointer">
                            <span class="sr-only">try</span>
                            <img v-if="Logo" class="block h-10 w-auto" alt="trp" :src="Logo" />
                            <img v-else class="block h-10 w-auto" alt="trp" src="images/logo.png" />
                        </a>
                        <h2 class="mt-6 text-3xl font-bold tracking-tight text-gray-900">
                            Connectez-vous à votre compte
                        </h2>
                        <p class="mt-2 text-sm text-gray-600">
                            Ou
                            {{ ' ' }}
                            <a href="/register" class="font-medium text-cerulean-600 hover:text-cerulean-500"
                                >S'inscrire</a
                            >
                        </p>
                    </div>

                    <div class="mt-8">
                        <div>
                            <div>
                                <p class="text-sm font-medium text-gray-700">Se connecter avec</p>

                                <div class="mt-1 grid grid-cols-1 gap-3">
                                    <div>
                                        <a
                                            :href="route('auth.google')"
                                            class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                                        >
                                            <span class="sr-only">Se connecter avec Google</span>
                                            <svg
                                                class="h-5 w-5"
                                                viewBox="0 0 32 32"
                                                data-name="Layer 1"
                                                id="Layer_1"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M23.75,16A7.7446,7.7446,0,0,1,8.7177,18.6259L4.2849,22.1721A13.244,13.244,0,0,0,29.25,16"
                                                    fill="#00ac47"
                                                />
                                                <path
                                                    d="M23.75,16a7.7387,7.7387,0,0,1-3.2516,6.2987l4.3824,3.5059A13.2042,13.2042,0,0,0,29.25,16"
                                                    fill="#4285f4"
                                                />
                                                <path
                                                    d="M8.25,16a7.698,7.698,0,0,1,.4677-2.6259L4.2849,9.8279a13.177,13.177,0,0,0,0,12.3442l4.4328-3.5462A7.698,7.698,0,0,1,8.25,16Z"
                                                    fill="#ffba00"
                                                />
                                                <polygon
                                                    fill="#2ab2db"
                                                    points="8.718 13.374 8.718 13.374 8.718 13.374 8.718 13.374"
                                                />
                                                <path
                                                    d="M16,8.25a7.699,7.699,0,0,1,4.558,1.4958l4.06-3.7893A13.2152,13.2152,0,0,0,4.2849,9.8279l4.4328,3.5462A7.756,7.756,0,0,1,16,8.25Z"
                                                    fill="#ea4435"
                                                />
                                                <polygon
                                                    fill="#2ab2db"
                                                    points="8.718 18.626 8.718 18.626 8.718 18.626 8.718 18.626"
                                                />
                                                <path
                                                    d="M29.25,15v1L27,19.5H16.5V14H28.25A1,1,0,0,1,29.25,15Z"
                                                    fill="#4285f4"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="relative mt-6">
                                <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div class="w-full border-t border-gray-300" />
                                </div>
                                <div class="relative flex justify-center text-sm">
                                    <span class="bg-white px-2 text-gray-500">Ou continuer avec</span>
                                </div>
                            </div>
                        </div>

                        <div class="mt-6">
                            <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
                                {{ status }}
                            </div>

                            <form @submit.prevent="submit">
                                <div class="space-y-1 mt-4">
                                    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                                    <div class="mt-1">
                                        <input
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-cerulean-500 focus:outline-none focus:ring-cerulean-500 sm:text-sm"
                                            id="name"
                                            type="text"
                                            v-model="form.name"
                                            required
                                            autofocus
                                            autocomplete="name"
                                        />

                                        <InputError class="mt-2" :message="form.errors.name" />
                                    </div>
                                </div>
                                <div class="space-y-1 mt-4">
                                    <label for="email" class="block text-sm font-medium text-gray-700"
                                        >Adresse électronique</label
                                    >
                                    <div class="mt-1">
                                        <input
                                            id="email"
                                            type="email"
                                            v-model="form.email"
                                            required
                                            autofocus
                                            autocomplete="username"
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-cerulean-500 focus:outline-none focus:ring-cerulean-500 sm:text-sm"
                                        />
                                        <InputError class="mt-2" :message="form.errors.email" />
                                    </div>
                                </div>

                                <div class="space-y-1 mt-4">
                                    <label for="password" class="block text-sm font-medium text-gray-700"
                                        >Mot de passe</label
                                    >
                                    <div class="mt-1">
                                        <input
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-cerulean-500 focus:outline-none focus:ring-cerulean-500 sm:text-sm"
                                            id="password"
                                            type="password"
                                            v-model="form.password"
                                            required
                                            autocomplete="current-password"
                                        />

                                        <InputError class="mt-2" :message="form.errors.password" />
                                    </div>
                                </div>

                                <div class="space-y-1 mt-4">
                                    <label for="password_confirmation" class="block text-sm font-medium text-gray-700"
                                        >Confirmer le mot de passe</label
                                    >
                                    <div class="mt-1">
                                        <input
                                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-cerulean-500 focus:outline-none focus:ring-cerulean-500 sm:text-sm"
                                            id="password_confirmation"
                                            type="password"
                                            v-model="form.password_confirmation"
                                            required
                                            autocomplete="new-password"
                                        />

                                        <InputError class="mt-2" :message="form.errors.password_confirmation" />
                                    </div>
                                </div>

                                <div class="flex items-center justify-between">
                                    <div class="block mt-4"></div>

                                    <Link
                                        :href="route('password.request')"
                                        class="text-sm text-cerulean-600 hover:text-cerulean-500 mt-4"
                                    >
                                        Register
                                    </Link>
                                </div>

                                <div class="flex items-center justify-end mt-4">
                                    <PrimaryButton
                                        class="flex w-full justify-center rounded-md border border-transparent bg-cerulean-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2"
                                        :class="{ 'opacity-25': form.processing }"
                                        :disabled="form.processing"
                                    >
                                        S'inscrire
                                    </PrimaryButton>
                                </div>
                                <div></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative hidden w-0 flex-1 lg:block">
                <img
                    class="absolute inset-0 h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
                    alt=""
                />
            </div>
        </div>
    </GuestLayout>
</template>
