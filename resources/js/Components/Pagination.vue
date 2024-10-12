<template>
    <div v-if="links.length > 3">
        <div class="hidden sm:flex items-center justify-center border-t border-gray-200 px-6 py-4 sm:px-7">
            <template v-for="(link, key) in links" :key="key">
                <a
                    v-if="link.url && link.label != prevLabel && link.label != nextLabel"
                    class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                    :class="{
                        'relative z-10 inline-flex items-center border border-cerulean-500 bg-sky-100 px-4 py-2 text-sm font-medium text-cerulean-600 focus:z-20':
                            link.active,
                    }"
                    :href="link.url"
                    v-html="link.label"
                />

                <a
                    v-if="link.label === prevLabel && link.url"
                    class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                    :class="{ '': link.active }"
                    :href="link.url"
                >
                    <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
                </a>

                <a
                    v-if="link.label === nextLabel && link.url"
                    class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                    :class="{ '': link.active }"
                    :href="link.url"
                >
                    <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
                </a>
            </template>
        </div>

        <div class="flex flex-1 justify-between sm:hidden items-center border-t border-gray-200 px-6 py-4 sm:px-7">
            <template v-for="(link, key) in links" :key="key">
                <a
                    v-if="link.label === prevLabel && link.url"
                    class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    :class="{ '': link.active }"
                    :href="link.url"
                >
                    Précédent
                </a>
                <div v-if="link.label === prevLabel && link.url == null"></div>
                <div v-if="link.label === nextLabel && link.url == null"></div>
                <a
                    v-if="link.label === nextLabel && link.url"
                    class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    :class="{ '': link.active }"
                    :href="link.url"
                >
                    Suivant
                </a>
            </template>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
    links: {
        type: Array,
        required: true,
    },
})

let prevLabel = '&laquo; Précédent'
let nextLabel = 'Suivant &raquo;'
</script>
