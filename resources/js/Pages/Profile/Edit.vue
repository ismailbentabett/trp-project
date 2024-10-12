<!-- <script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import DeleteUserForm from './Partials/DeleteUserForm.vue';
import UpdatePasswordForm from './Partials/UpdatePasswordForm.vue';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm.vue';

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});
</script>

<template>

    <AuthenticatedLayout
    title="Profile"
    description="Profile"
    >
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <UpdateProfileInformationForm
                        :must-verify-email="mustVerifyEmail"
                        :status="status"
                        class="max-w-xl"
                    />
                </div>

                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <UpdatePasswordForm class="max-w-xl" />
                </div>

                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <DeleteUserForm class="max-w-xl" />
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
 -->
<!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')

  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          cerulean: colors.cerulean,
          cerulean: colors.cerulean,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
    <AuthenticatedLayout title="Paramètres" description="Paramètres">
        <div>
            <Disclosure as="div" class="relative overflow-hidden bg-cerulean-700 pb-32" v-slot="{ open }">
                <div
                    aria-hidden="true"
                    :class="[
                        open ? 'bottom-0' : 'inset-y-0',
                        'absolute inset-x-0 left-1/2 w-full -translate-x-1/2 transform overflow-hidden lg:inset-y-0',
                    ]"
                >
                    <div class="absolute inset-0 flex">
                        <div class="h-full w-1/2" style="background-color: #0a527b" />
                        <div class="h-full w-1/2" style="background-color: #065d8c" />
                    </div>
                    <div class="relative flex justify-center">
                        <svg
                            class="flex-shrink-0"
                            width="1750"
                            height="308"
                            viewBox="0 0 1750 308"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M284.161 308H1465.84L875.001 182.413 284.161 308z" fill="#0369a1" />
                            <path d="M1465.84 308L16.816 0H1750v308h-284.16z" fill="#065d8c" />
                            <path d="M1733.19 0L284.161 308H0V0h1733.19z" fill="#0a527b" />
                            <path d="M875.001 182.413L1733.19 0H16.816l858.185 182.413z" fill="#0a4f76" />
                        </svg>
                    </div>
                </div>
                <header class="relative py-10">
                    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <h1 class="text-3xl font-bold tracking-tight text-white">Paramètres</h1>
                    </div>
                </header>
            </Disclosure>

            <main class="relative -mt-32">
                <div class="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
                    <div class="overflow-hidden rounded-lg bg-white shadow">
                        <div class="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
                            <aside class="py-6 lg:col-span-3">
                                <nav class="space-y-1">
                                    <Link
                                        v-for="item in subNavigation"
                                        :key="item.name"
                                        :href="item.href"
                                        :class="[
                                            item.current
                                                ? 'bg-cerulean-50 border-cerulean-500 text-cerulean-700 hover:bg-cerulean-50 hover:text-cerulean-700'
                                                : 'border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                                            'group border-l-4 px-3 py-2 flex items-center text-sm font-medium',
                                        ]"
                                        :aria-current="item.current ? 'page' : undefined"
                                    >
                                        <component
                                            :is="item.icon"
                                            :class="[
                                                item.current
                                                    ? 'text-cerulean-500 group-hover:text-cerulean-500'
                                                    : 'text-gray-400 group-hover:text-gray-500',
                                                'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                                            ]"
                                            aria-hidden="true"
                                        />
                                        <span class="truncate">{{ item.name }}</span>
                                    </Link>
                                </nav>
                            </aside>
                            <slot />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'

import { ref } from 'vue'
import { Link } from '@inertiajs/vue3'
import { Disclosure } from '@headlessui/vue'
import { CogIcon, KeyIcon, UserCircleIcon } from '@heroicons/vue/24/outline'

//get current route
const currentRoute = ref(window.location.pathname)
const subNavigation = ref([
    {
        name: 'Profil',
        href: '/settings/profile',
        icon: UserCircleIcon,
        current: currentRoute.value == '/settings/profile',
    },
    {
        name: 'Compte',
        href: '/settings/account',
        icon: CogIcon,
        current: currentRoute.value == '/settings/account',
    },
    {
        name: 'Sécurité',
        href: '/settings/security',
        icon: KeyIcon,
        current: currentRoute.value == '/settings/security',
    },
])
</script>
