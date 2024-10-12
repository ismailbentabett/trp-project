<template>
    <AuthenticatedLayout title="Commandes" description="Commandes">
        <div class="bg-gray-50">
            <main class="mx-auto max-w-2xl pt-8 pb-24 sm:px-6 sm:pt-16 lg:max-w-7xl lg:px-8">
                <div v-for="order in props.orders.data" :key="order.id" class="sm:rounded-lg sm:overflow-hidden">
                    <div class="px-4 sm:flex sm:items-baseline sm:justify-between sm:space-y-0 sm:px-0 mt-3">
                        <div class="flex sm:items-baseline sm:space-x-4">
                            <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                Commande spéciale #00{{ order.id }}
                            </h1>
                        </div>
                        <p class="text-sm text-gray-600">
                            Commande effectuée
                            <time datetime="2021-03-22" class="font-medium text-gray-900">{{
                                formatDate(order.created_at)
                            }}</time>
                        </p>
                    </div>

                    <!-- Products -->
                    <section v-if="order.accessory" aria-labelledby="cart-heading">
                        <h2 id="cart-heading" class="sr-only">Articles dans votre panier</h2>
                        <div v-if="order.accessory" class="flex py-6 px-4 sm:px-6">
                            <div class="flex-shrink-0">
                                <img
                                    v-if="accessoryimage(order.accessory).length > 0"
                                    :src="accessoryimage(order.accessory)[0].url"
                                    alt=""
                                    class="w-20 rounded-md"
                                />

                                <img v-else src="https://via.placeholder.com/150" alt="" class="w-20 rounded-md" />
                            </div>

                            <div class="ml-6 flex flex-1 flex-col">
                                <div class="flex">
                                    <div class="min-w-0 flex-1">
                                        <h4 class="text-sm">
                                            <a
                                                :href="order.accessory.id"
                                                class="font-medium text-gray-700 hover:text-gray-800"
                                                >{{ order.accessory.name }}</a
                                            >
                                        </h4>
                                    </div>
                                </div>

                                <div class="flex flex-1 items-end justify-between pt-2">
                                    <p class="mt-1 text-sm font-medium text-gray-900">{{ order.accessory.price }} €</p>

                                    <div class="ml-4">
                                        <label for="quantity" class="">Quantité : 1</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section v-if="order.offer" aria-labelledby="cart-heading">
                        <h2 id="cart-heading" class="sr-only">Articles dans votre panier</h2>
                        <div v-if="order.offer" class="flex py-6 px-4 sm:px-6">
                            <div
                                v-for="product in order.offer.products"
                                :key="product.id"
                                class="flex flex-1 py-6 px-4 sm:px-6"
                            >
                                <div class="flex-shrink-0">
                                    <img
                                        v-if="images(product).length > 0"
                                        :src="images(product)[0].url"
                                        :alt="product.imageAlt"
                                        class="w-20 rounded-md"
                                    />

                                    <img v-else src="https://via.placeholder.com/150" alt="" class="w-20 rounded-md" />
                                </div>

                                <div class="w-full ml-6 flex flex-1 flex-col">
                                    <div class="flex">
                                        <div class="min-w-0 flex-1">
                                            <h4 class="text-sm">
                                                <a
                                                    :href="product.id"
                                                    class="font-medium text-gray-700 hover:text-gray-800"
                                                    >{{ product.name }}</a
                                                >
                                            </h4>
                                        </div>
                                    </div>

                                    <div class="flex w-full flex-1 items-end justify-between pt-2">
                                        <p class="mt-1 text-sm font-medium text-gray-900">{{ product.price }} €</p>

                                        <div class="ml-4">
                                            <label for="quantity" class="">Quantité : 1</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

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
                        </div>
                    </section>
                </div>
                <Pagination :links="props.orders.links" />
            </main>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import Pagination from '@/Components/Pagination.vue'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import moment from 'moment'
import { defineProps, ref } from 'vue'

const props = defineProps({
    orders: {
        type: Object,
        required: true,
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

var accessoryimage = (accessory) => {
    return accessory.medias.filter((media) => {
        return media.type && media.type.startsWith('image/')
    })
}
</script>
