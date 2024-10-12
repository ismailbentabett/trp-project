<template>
    <AuthenticatedLayout title="Offre" description="Offre">
        <div class="bg-white">
            <div class="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Détails de l'offre</h1>
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {{ offer.title }}
                </h2>
                <p class="text-md font-bold tracking-tight text-gray-500 sm:text-md" v-html="offer.description"></p>
                <form class="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                    <section aria-labelledby="cart-heading" class="lg:col-span-7">
                        <h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>

                        <ul role="list" class="divide-y divide-gray-200 border-t border-b border-gray-200">
                            <li v-for="(item, productIdx) in offer.products" :key="item.id" class="flex py-6 sm:py-10">
                                <div class="flex-shrink-0">
                                    <img
                                        v-if="images(item).length > 0"
                                        :src="images(item)[0].url"
                                        class="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
                                    />
                                    <img
                                        v-else
                                        src="https://placehold.co/600x400?text=No Image"
                                        class="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
                                    />
                                </div>

                                <div class="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                    <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                        <div>
                                            <div class="flex justify-between">
                                                <h3 class="text-sm">
                                                    <a
                                                        :href="item.id"
                                                        class="font-medium text-gray-700 hover:text-gray-800"
                                                        >{{ item.name }}</a
                                                    >
                                                </h3>
                                            </div>

                                            <p class="mt-1 text-sm font-medium text-gray-900">{{ item.price }} €</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>

                    <!-- Order summary -->
                    <section
                        aria-labelledby="summary-heading"
                        class="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
                    >
                        <h2 id="summary-heading" class="text-lg font-medium text-gray-900">Résumé de la commande</h2>

                        <div class="mt-6 w-full flex">
                            <a
                                :href="`/special/checkout?offer_id=${offer.id}`"
                                class="flex-1 flex justify-center items-center w-full rounded-md border border-transparent bg-cerulean-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                >Order</a
                            >
                        </div>
                    </section>
                </form>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'

import { defineProps } from 'vue'
const props = defineProps({
    offer: Object,
})
const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        price: '$32.00',
        color: 'Sienna',
        inStock: true,
        size: 'Large',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in sienna.",
    },
]

var images = (product) => {
    return product.medias.filter((media) => {
        return media.type && media.type.startsWith('image/')
    })
}
</script>
