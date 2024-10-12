<script setup>
import { computed } from 'vue'
import { Link } from '@inertiajs/vue3'

const props = defineProps({
    href: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
    },
})

const classes = computed(() =>
    props.active
        ? 'block w-full pl-3 pr-4 py-2 border-l-4 border-cerulean-400 text-left text-base font-medium text-cerulean-700 bg-cerulean-50 focus:outline-none focus:text-cerulean-800 focus:bg-cerulean-100 focus:border-cerulean-700 transition duration-150 ease-in-out'
        : 'block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out',
)
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
