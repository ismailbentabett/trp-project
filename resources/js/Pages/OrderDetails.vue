<template>
    <AuthenticatedLayout title="Détails de la commande" description="Détails de la commande">
        <div class="sticky top-0 z-5 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white">
            <div class="flex flex-1 justify-between px-4">
                <div></div>
                <div class="ml-4 flex items-center lg:ml-6">
                    <a
                        type="button"
                        :href="createTicket"
                        target="_blank"
                        class="cursor-pointer inline-flex items-center rounded-md border border-transparent bg-cerulean-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                    >
                        Créer un nouveau ticket
                    </a>
                </div>
            </div>
        </div>
        <div class="bg-gray-50">
            <main class="mx-auto max-w-2xl pt-8 pb-24 sm:px-6 sm:pt-16 lg:max-w-7xl lg:px-8">
                <div class="space-y-2 px-4 sm:flex sm:items-baseline sm:justify-between sm:space-y-0 sm:px-0">
                    <div class="flex sm:items-baseline sm:space-x-4">
                        <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                            Commande #00{{ order.id }}
                        </h1>
                    </div>
                    <p class="text-sm text-gray-600">
                        Commande passée<time datetime="2021-03-22" class="font-medium text-gray-900">{{
                            formatDate(props.order.created_at)
                        }}</time>
                    </p>
                </div>

                <!-- Products -->
                <section aria-labelledby="cart-heading">
                    <h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>

                    <ul role="list" class="divide-y divide-gray-200 border-t border-b border-gray-200">
                        <li v-for="item in props.orderItems.data" :key="item.id" class="flex py-6">
                            <div class="flex-shrink-0">
                                <img
                                    v-if="images(item.product).length > 0"
                                    :src="images(item.product)[0].url"
                                    class="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
                                />
                                <img
                                    v-else
                                    src="https://placehold.co/600x400?text=No Image"
                                    class="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
                                />
                            </div>

                            <div class="ml-4 flex flex-1 flex-col sm:ml-6">
                                <div>
                                    <div class="flex justify-between">
                                        <h4 class="text-sm">
                                            <a
                                                :href="item.product.id"
                                                class="font-medium text-gray-700 hover:text-gray-800"
                                                >{{ item.product.name }}</a
                                            >
                                            <p class="text-sm font-medium text-gray-900 mt-5">
                                                Quantité : {{ item.quantity }}
                                            </p>
                                        </h4>
                                        <p class="ml-4 text-sm font-medium text-gray-900">{{ item.amount }}€</p>
                                    </div>
                                </div>

                                <div class="mt-4 flex flex-1 items-end justify-between">
                                    <!--                                     <UpdateCartForm :item="item" @reloadcart="reloadcart" />
 -->
                                </div>

                                <a
                                    type="button"
                                    :href="`/product/${item.product.id}/feedback/create`"
                                    class="inline-flex items-center justify-between space-x-1 self-end rounded-full border border-transparent bg-cerulean-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2"
                                >
                                    <span>Avis </span>
                                    <StarIcon :class="'text-yellow-400 flex-shrink-0 h-5 w-5'" aria-hidden="true" />
                                </a>
                            </div>
                        </li>
                    </ul>
                </section>
                <Pagination :links="props.orderItems.links" />

                <!-- Billing -->
                <section aria-labelledby="summary-heading" class="mt-16">
                    <h2 id="summary-heading" class="sr-only">Résumé de la facturation</h2>

                    <div
                        class="bg-gray-100 py-6 px-4 sm:rounded-lg sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-8"
                    >
                        <dl class="grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:col-span-7">
                            <div>
                                <dt class="font-medium text-gray-900">Adresse de facturation</dt>
                                <dd class="mt-3 text-gray-500">
                                    <span class="block">{{ order.address }}</span>
                                    <span class="block">{{ order.city }}</span>
                                    <span class="block">{{ order.state }}</span>
                                    <span class="block">{{ order.country }}</span>
                                    <span class="block">{{ order.zip_code }}</span>
                                    <span class="block">{{ order.apartment }}</span>
                                </dd>
                            </div>
                        </dl>

                        <dl class="mt-8 divide-y divide-gray-200 text-sm lg:col-span-5 lg:mt-0">
                            <div class="flex items-center justify-between pb-4">
                                <dt class="text-gray-600">Sous-total</dt>
                                <dd class="font-medium text-gray-900">{{ order.total_price }}€</dd>
                            </div>

                            <div class="flex items-center justify-between py-8"></div>
                            <div class="flex items-center justify-between pt-4">
                                <dt class="font-medium text-gray-900">Total de la commande</dt>
                                <dd class="font-medium text-cerulean-600">{{ order.total_price }}€</dd>
                            </div>
                        </dl>
                    </div>
                </section>
            </main>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import Pagination from '@/Components/Pagination.vue'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import { StarIcon } from '@heroicons/vue/20/solid'
import moment from 'moment'
import { defineProps, ref } from 'vue'

const props = defineProps({
    order: {
        type: Object,
        required: true,
    },
    orderItems: {
        type: Object,
    },
})

const open = ref(false)
const formatDate = (date) => {
    if (date) {
        return moment(String(date)).format('YYYY - MM - DD')
    }
}
var images = (product) => {
    return product.medias.filter((media) => {
        return media.type && media.type.startsWith('image/')
    })
}

import { computed } from 'vue'

const createTicket = computed(() => {
    const products = props.orderItems.data.map((item) => {
        return item.product.id
    })

    const accessories = props.orderItems.data.map((item) => {
        return item.product.accessories.map((accessory) => {
            return accessory.id
        })
    })

    const orders = props.order.id

    const baseurl = import.meta.env.VITE_APP_URL
    const url = new URL(`${baseurl}/tickets/create`)
    const params = { products, accessories, orders }
    Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]))

    return url.href
})
</script>
