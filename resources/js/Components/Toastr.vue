<template>
    <!-- Global notification live region, render this permanently at the end of the document -->
    <div
        aria-live="assertive"
        v-for="(notification, index) in notifications"
        :key="index"
        class="z-50 pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
    >
        <div v-if="notification.show" class="flex w-full flex-col items-center space-y-4 sm:items-end">
            <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
            <transition-group
                enter-active-class="transform ease-out duration-300 transition"
                enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
                leave-active-class="transition ease-in duration-100"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <div
                    class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                >
                    <div class="p-4">
                        <div class="flex items-start">
                            <div class="flex-shrink-0">
                                <!-- Display the appropriate icon based on the notification type -->
                                <template v-if="notification.type === 'success'">
                                    <CheckCircleIcon class="h-6 w-6 text-green-400" aria-hidden="true" />
                                </template>
                                <template v-else-if="notification.type === 'error'">
                                    <ExclamationCircleIcon class="h-6 w-6 text-red-400" aria-hidden="true" />
                                </template>
                                <template v-else-if="notification.type === 'warning'">
                                    <ExclamationTriangleIcon class="h-6 w-6 text-yellow-400" aria-hidden="true" />
                                </template>
                                <template v-else-if="notification.type === 'info'">
                                    <InformationCircleIcon class="h-6 w-6 text-blue-400" aria-hidden="true" />
                                </template>
                            </div>
                            <div class="ml-3 w-0 flex-1 pt-0.5">
                                <p class="text-sm font-medium text-gray-900">
                                    {{ notification.title }}
                                </p>
                                <p class="mt-1 text-sm text-gray-500">
                                    {{ notification.message }}
                                </p>
                            </div>
                            <div class="ml-4 flex flex-shrink-0">
                                <button
                                    type="button"
                                    @click="closeNotification(index)"
                                    class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2"
                                >
                                    <span class="sr-only">Close</span>
                                    <XMarkIcon class="h-5 w-5" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import {
    InformationCircleIcon,
    CheckCircleIcon,
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
} from '@heroicons/vue/24/solid'

import { XMarkIcon } from '@heroicons/vue/20/solid'

import { usePage } from '@inertiajs/vue3'

const { flash } = usePage().props

// Initialize an array of notifications
const notifications = ref([])

notifications.value = flash.alert.map((notification) => ({
    ...notification,
    show: true,
}))

// Function to close a notification by index
const closeNotification = (index) => {
    notifications.value[index].show = false
}
</script>
