<template>
    <AnimatedHeader />
    <!-- When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars -->
    <Popover as="template" v-slot="{ open }">
        <header
            :class="[open ? 'fixed inset-0 z-40 overflow-y-auto' : '', 'bg-white -sm lg:static lg:overflow-y-visible']"
        >
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
                    <div class="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
                        <div class="flex flex-shrink-0 items-center">
                            <a href="/" class="cursor-pointer">
                                <span class="sr-only">try</span>
                                <img v-if="Logo" class="block h-10 w-auto" alt="trp" :src="Logo" />
                                <img v-else class="block h-10 w-auto" alt="trp" src="images/logo.png" />
                            </a>
                        </div>
                    </div>
                    <div class="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                        <div class="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                            <div class="w-full">
                                <label for="search" class="sr-only">Search</label>
                                <div class="relative">
                                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <div class="relative mt-1 flex items-center">
                                        <input
                                            v-model="searchInput"
                                            type="text"
                                            name="search"
                                            id="search"
                                            class="block w-full rounded-md border-gray-300 pr-12 shadow-sm focus:border-cerulean-500 focus:ring-cerulean-500 sm:text-sm"
                                        />
                                        <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                                            <kbd
                                                class="inline-flex items-center rounded border border-gray-200 px-2 font-sans text-sm font-medium text-gray-400"
                                                >⌘K</kbd
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <CommandPalette :searchInput="searchInput" />
                    </div>
                    <div class="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
                        <!-- Mobile menu button -->
                        <PopoverButton
                            class="-mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cerulean-500"
                        >
                            <span class="sr-only">Open menu</span>
                            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                        </PopoverButton>
                    </div>
                    <div class="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                        <Link
                            class="ml-6 inline-flex items-center rounded-md border border-transparent bg-white-600 px-4 py-2 text-sm font-medium text-gray-900 hover:text-white cursor-pointer -sm hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2"
                            href="/login"
                            >Connexion</Link
                        >
                        <Link
                            href="/register"
                            class="ml-6 inline-flex items-center rounded-md border-solid border-gray-900 bg-cerulean-600 px-4 py-2 text-sm font-medium text-white -sm cursor-pointer hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2"
                        >
                            S'inscrire</Link
                        >
                    </div>
                </div>
            </div>

            <PopoverPanel as="nav" class="lg:hidden" aria-label="Global">
                <div class="mx-auto max-w-3xl space-y-1 px-2 pt-2 pb-3 sm:px-4">
                    <a
                        v-for="item in navigation"
                        :key="item.name"
                        :href="item.href"
                        :aria-current="item.current ? 'page' : undefined"
                        :class="[
                            item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50',
                            'block rounded-md py-2 px-3 text-base font-medium',
                        ]"
                        >{{ item.name }}</a
                    >
                    <div class="flex flex-col lg:flex-row lg:items-center lg:justify-end xl:col-span-4">
                        <Link
                            class="inline-flex items-center rounded-md border border-transparent bg-white-600 px-4 py-2 text-sm font-medium text-gray-900 hover:text-white cursor-pointer -sm hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2"
                            href="/login"
                            >Connexion</Link
                        >
                        <Link
                            href="/register"
                            class="inline-flex items-center rounded-md border-solid border-gray-900 bg-cerulean-600 px-4 py-2 text-sm font-medium text-white -sm cursor-pointer hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2"
                        >
                            S'inscrire</Link
                        >
                    </div>
                </div>
            </PopoverPanel>
        </header>
    </Popover>
</template>

<script setup>
import AnimatedHeader from '@/Components/AnimatedHeader.vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ref, watch, watchEffect } from 'vue'
import CommandPalette from './CommandPalette.vue'

import { Link } from '@inertiajs/vue3'

const openSearch = ref(false)
const searchInput = ref('')

watch(searchInput, (value) => {
    if (value.length > 0) {
        openSearch.value = true
    } else {
        openSearch.value = false
    }
})

const Logo = ref(null)
watchEffect(() => {
    axios.get(route('logo.index')).then((response) => {
        Logo.value = response.data
    })
})

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Teams', href: '#', current: false },
    { name: 'Directory', href: '#', current: false },
]
</script>
