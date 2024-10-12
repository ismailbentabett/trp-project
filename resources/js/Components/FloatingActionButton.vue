<template>
    <div>
        <div aria-live="assertive" class="z-50 fixed inset-0 flex px-4 py-6 pointer-events-none sm:p-6 items-end">
            <div class="w-full flex flex-col items-end space-y-4 sm:items-end">
                <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->

                <div class="pointer-events-auto">
                    <Popper placement="top">
                        <button
                            type="button"
                            class="inline-flex items-center rounded-full border border-transparent bg-cerulean-600 p-3 text-white shadow-sm hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2"
                        >
                            <!-- Heroicon name: outline/plus-sm -->

                            <BoltIcon class="h-5 w-5 text-white" aria-hidden="true" />
                        </button>

                        <template #content>
                            <div class="flex flex-col space-y-3">
                                <a
                                    v-if="is_admin || is_super_admin || is_editor"
                                    type="button"
                                    href="/aigenerate"
                                    class="inline-flex items-center rounded-full border border-transparent bg-cerulean-600 p-3 text-white shadow-sm hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2"
                                >
                                    <!-- Heroicon name: outline/plus-sm -->
                                    <GlobeAltIcon class="h-5 w-5 text-white" aria-hidden="true" />
                                </a>
                                <a
                                    type="button"
                                    href="/tickets/my"
                                    class="inline-flex items-center rounded-full border border-transparent bg-cerulean-600 p-3 text-white shadow-sm hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2"
                                >
                                    <!-- Heroicon name: outline/plus-sm -->
                                    <TicketIcon class="h-5 w-5 text-white" aria-hidden="true" />
                                </a>
                                <a
                                    v-if="is_admin || is_super_admin || is_editor"
                                    type="button"
                                    href="/admin"
                                    class="inline-flex items-center rounded-full border border-transparent bg-cerulean-600 p-3 text-white shadow-sm hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2"
                                >
                                    <!-- Heroicon name: outline/plus-sm -->
                                    <HomeIcon class="h-5 w-5 text-white" aria-hidden="true" />
                                </a>
                            </div>
                        </template>
                    </Popper>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Popper from 'vue3-popper'

import { GlobeAltIcon, BoltIcon, TicketIcon, HomeIcon } from '@heroicons/vue/24/solid'
import { computed } from 'vue'
import { usePage } from '@inertiajs/vue3'

const props = usePage().props

const auth = computed(() => props.auth)
const is_admin = computed(() => auth.value.is_admin)
const is_editor = computed(() => auth.value.is_editor)
const is_super_admin = computed(() => auth.value.is_super_admin)
</script>

<style></style>
