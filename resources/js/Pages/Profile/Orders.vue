<template>
    <AuthenticatedLayout title="Commandes" description="Commandes">
        <div class="bg-gray-50">
            <div class="mx-auto max-w-2xl pt-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="space-y-2 px-4 sm:flex sm:items-baseline sm:justify-between sm:space-y-0 sm:px-0">
                    <a href="#" class="text-sm font-medium text-cerulean-600 hover:text-cerulean-500 sm:hidden">
                        Voir la facture
                        <span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>

                <!-- Products -->
                <div class="mt-6">
                    <h2 class="sr-only">Produits achetés</h2>

                    <div v-if="props.orders.data.length == 0" class="space-y-8">
                        <EmptyState />
                    </div>
                    <div v-else class="space-y-8">
                        <div
                            v-for="item in props.orders.data"
                            :key="item.id"
                            class="border-t border-b border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border"
                        >
                            <div class="py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
                                <div class="sm:flex lg:col-span-7">
                                    <div class="mt-6 sm:mt-0 sm:ml-6">
                                        <h3 class="text-base font-medium text-cerulean-600">
                                            <a :href="`/orders/${item.id}`">Commande #00{{ item.id }}</a>
                                        </h3>
                                        <p class="mt-2 text-sm font-medium text-gray-900">{{ item.total_price }} €</p>
                                    </div>
                                </div>

                                <div class="mt-6 lg:col-span-5 lg:mt-0">
                                    <dl class="grid grid-cols-2 gap-x-6 text-sm">
                                        <div>
                                            <dt class="font-medium text-gray-900">Adresse de livraison</dt>
                                            <dd class="mt-3 text-gray-500">
                                                <span class="block"> {{ item.address }}</span>
                                                <span class="block"> {{ item.city }}</span>
                                                <span class="block"> {{ item.state }}</span>
                                                <span class="block"> {{ item.country }}</span>
                                                <span class="block"> {{ item.zip_code }}</span>
                                                <span class="block"> {{ item.apartment }}</span>
                                            </dd>
                                        </div>
                                        <div>
                                            <dt class="font-medium text-gray-900">Contact</dt>
                                            <dd class="mt-3 space-y-3 text-gray-500">
                                                <p>{{ item.email }}</p>
                                                <p>{{ item.phone }}</p>
                                                <span class="block"> {{ item.company_name }}</span>
                                                <span class="block"> {{ item.company_name }}</span>

                                                <a
                                                    type="button"
                                                    :href="`/orders/${item.id}/edit`"
                                                    class="font-medium text-cerulean-600 hover:text-cerulean-500"
                                                    >Éditer</a
                                                >
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>

                            <div class="border-t border-gray-200 py-6 px-4 sm:px-6 lg:p-8">
                                <h4 class="sr-only">Statut</h4>

                                <div class="mt-6" aria-hidden="true">
                                    <div class="overflow-hidden rounded-full bg-gray-200">
                                        <div
                                            class="h-2 rounded-full bg-cerulean-600"
                                            :style="{
                                                width: `calc((${item.status} * 2 + 1) / 7 * 100%)`,
                                            }"
                                        />
                                    </div>
                                    <div class="mt-6 hidden grid-cols-4 text-sm font-medium text-gray-600 sm:grid">
                                        <div class="text-cerulean-600">Commande effectuée</div>
                                        <div :class="[item.status >= 1 ? 'text-cerulean-600' : '', 'text-center']">
                                            Traitement
                                        </div>
                                        <div :class="[item.status >= 2 ? 'text-cerulean-600' : '', 'text-center']">
                                            Expédié
                                        </div>
                                        <div :class="[item.status >= 3 ? 'text-cerulean-600' : '', 'text-right']">
                                            Livré
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Pagination :links="props.orders.links" />
    </AuthenticatedLayout>
</template>

<script setup>
import EmptyState from '@/Components/EmptyState.vue'
import Pagination from '@/Components/Pagination.vue'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import { defineProps, ref } from 'vue'
const props = defineProps({
    orders: {
        type: Array,
        default: () => ({}),
    },
})

const ordersData = ref(props.orders.data)

//map status to number
ordersData.value.forEach((item) => {
    switch (item.status) {
        case 'Order placed':
            item.status = 0
            break
        case 'Processing':
            item.status = 1
            break
        case 'Shipped':
            item.status = 2
            break
        case 'Delivered':
            item.status = 3
            break
        default:
            item.status = 0
    }
})
</script>
