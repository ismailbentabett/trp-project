<template>
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-10" @close="open = false">
            <div class="fixed inset-0" />

            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <TransitionChild
                            as="template"
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enter-from="translate-x-full"
                            enter-to="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leave-from="translate-x-0"
                            leave-to="translate-x-full"
                        >
                            <DialogPanel class="pointer-events-auto w-screen max-w-md">
                                <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                    <div class="px-4 sm:px-6">
                                        <div class="flex items-start justify-between">
                                            <DialogTitle class="text-lg font-medium text-gray-900"
                                                >Commandes</DialogTitle
                                            >
                                            <div class="ml-3 flex h-7 items-center">
                                                <button
                                                    type="button"
                                                    class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2"
                                                    @click="open = false"
                                                >
                                                    <span class="sr-only">Close panel</span>
                                                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="ordersData.length == 0" role="list">
                                        <EmptyState />
                                    </div>
                                    <div v-else class="relative mt-6 flex-1 px-4 sm:px-6">
                                        <!-- Replace with your content -->
                                        <div
                                            v-for="item in ordersData"
                                            :key="item.id"
                                            class="bg-white shadow-sm sm:rounded-lg sm:border"
                                        >
                                            <div class="py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
                                                <div class="sm:flex lg:col-span-7">
                                                    <div class="sm:mt-0 sm:ml-6">
                                                        <h3 class="text-base font-medium text-cerulean-600">
                                                            <a :href="`/orders/${item.id}`"
                                                                >Commande #00{{ item.id }}</a
                                                            >
                                                        </h3>
                                                        <p class="mt-2 text-sm font-medium text-gray-900">
                                                            {{ item.total_price }} $
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="py-6 px-4 sm:px-6 lg:p-8">
                                                <h4 class="sr-only">Statut</h4>

                                                <div class="" aria-hidden="true">
                                                    <div class="overflow-hidden rounded-full bg-gray-200">
                                                        <div
                                                            class="h-2 rounded-full bg-cerulean-600"
                                                            :style="{
                                                                width: `calc((${item.status} * 2 + 1) / 7 * 100%)`,
                                                            }"
                                                        />
                                                    </div>
                                                    <div
                                                        class="mt-6 hidden grid-cols-4 text-sm font-medium text-gray-600 sm:grid"
                                                    >
                                                        <div class="text-cerulean-600">Commande effectuée</div>
                                                        <div
                                                            :class="[
                                                                item.status >= 1 ? 'text-cerulean-600' : '',
                                                                'text-center',
                                                            ]"
                                                        >
                                                            Traitement
                                                        </div>
                                                        <div
                                                            :class="[
                                                                item.status >= 2 ? 'text-cerulean-600' : '',
                                                                'text-center',
                                                            ]"
                                                        >
                                                            Expédié
                                                        </div>
                                                        <div
                                                            :class="[
                                                                item.status >= 3 ? 'text-cerulean-600' : '',
                                                                'text-right',
                                                            ]"
                                                        >
                                                            Livré
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- /End replace -->
                                    </div>
                                    <div class="mt-6 text-center text-sm text-gray-500">
                                        <p>
                                            <a
                                                href="/orders"
                                                class="font-medium text-cerulean-600 hover:text-cerulean-500"
                                            >
                                                Voir les commandes complètes
                                                <span aria-hidden="true"> &rarr;</span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { ref, defineProps, watchEffect } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import EmptyState from './EmptyState.vue'
const props = defineProps({
    open: Boolean,
})

const open = ref(false)

const ordersData = ref(props.orders)

watchEffect(() => {
    open.value = props.open

    axios.get('/orders/myorder').then((response) => {
        ordersData.value = response.data

        //map status to number
        /* ordersData.value.forEach((item) => {
                switch (item.status) {
                    case 'Order placed':
                        item.status = 0;
                        break;
                    case 'Processing':
                        item.status = 1;
                        break;
                    case 'Shipped':
                        item.status = 2;
                        break;
                    case 'Delivered':
                        item.status = 3;
                        break;
                    default:
                        item.status = 0;
                }
            }) */
    })
})
</script>
