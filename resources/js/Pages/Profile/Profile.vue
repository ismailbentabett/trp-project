<script setup>
import Avatar from '@/Components/Avatar.vue'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import { TicketIcon } from '@heroicons/vue/20/solid'
import { usePage } from '@inertiajs/vue3'
import { computed, ref } from 'vue'
const page = usePage()

const user = computed(() => page.props.auth.user)
const CoverUrl = user.value.cover
    ? user.value.cover
    : 'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'

const AvatarUrl = import.meta.env.VITE_APP_URL + '/storage/' + user.value.avatar

const tabs = [{ name: 'Profile', href: '#', current: true }]

const profile = {
    fields: {
        Téléphone: user.value.phone ? user.value.phone : 'N/A',
        Email: user.value.email ? user.value.email : 'N/A',
        Pays: user.value.country ? user.value.country : 'N/A',
        Ville: user.value.city ? user.value.city : 'N/A',
        Adresse: user.value.address ? user.value.address : 'N/A',
        'Code postal': user.value.zip_code ? user.value.zip_code : 'N/A',
        État: user.value.state ? user.value.state : 'N/A',
    },
}
const sidebarOpen = ref(false)
</script>

<template>
    <AuthenticatedLayout title="Profil" description="Profil">
        <div class="flex h-full bg-white">
            <div class="flex min-w-0 flex-1 flex-col overflow-hidden">
                <div class="relative z-0 flex flex-1 overflow-hidden">
                    <main class="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
                        <!-- Breadcrumb -->

                        <article>
                            <!-- Profile header -->
                            <div>
                                <div>
                                    <img class="h-32 w-full object-cover lg:h-48" :src="CoverUrl" alt="" />
                                </div>
                                <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                                    <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                                        <div class="flex">
                                            <Avatar
                                                :user="user"
                                                class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                                            />
                                        </div>
                                        <div
                                            class="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1"
                                        >
                                            <div class="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                                                <h1 class="truncate text-2xl font-bold text-gray-900">
                                                    {{ user.name }}
                                                </h1>
                                            </div>
                                            <div
                                                class="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4"
                                            >
                                                <button
                                                    type="button"
                                                    class="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                                                >
                                                    <TicketIcon
                                                        class="-ml-1 mr-2 h-5 w-5 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                    <span>Tickets</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                                        <h1 class="truncate text-2xl font-bold text-gray-900">
                                            {{ user.name }}
                                        </h1>
                                    </div>
                                </div>
                            </div>

                            <!-- Tabs -->
                            <div class="mt-6 sm:mt-2 2xl:mt-5">
                                <div class="border-b border-gray-200">
                                    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                                        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                            <a
                                                v-for="tab in tabs"
                                                :key="tab.name"
                                                :href="tab.href"
                                                :class="[
                                                    tab.current
                                                        ? 'border-pink-500 text-gray-900'
                                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                                    'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
                                                ]"
                                                :aria-current="tab.current ? 'page' : undefined"
                                                >{{ tab.name }}</a
                                            >
                                        </nav>
                                    </div>
                                </div>
                            </div>

                            <!-- Description list -->
                            <div class="mx-auto mt-6 max-w-5xl px-4 sm:px-6 lg:px-8">
                                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                    <div
                                        v-for="field in Object.keys(profile.fields)"
                                        :key="field"
                                        class="sm:col-span-1"
                                    >
                                        <dt class="text-sm font-medium text-gray-500">
                                            {{ field }}
                                        </dt>
                                        <dd class="mt-1 text-sm text-gray-900">
                                            {{ profile.fields[field] }}
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </article>
                    </main>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
