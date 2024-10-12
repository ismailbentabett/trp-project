<template>
    <AuthenticatedLayout title="Accessoire" description="Accessoire">
        <div class="bg-white">
            <main class="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
                <div class="mx-auto max-w-2xl lg:max-w-none">
                    <!-- Product -->
                    <div class="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-8">
                        <!-- Image gallery -->
                        <div
                            class="mt-6 aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden lg:mt-0 lg:col-span-8 space-y-6"
                        >
                            <CarouselComp :images="images"></CarouselComp>
                        </div>

                        <!-- Product info -->
                        <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 lg:px-8 lg:col-span-4">
                            <h1 class="text-3xl font-bold tracking-tight text-gray-900">
                                {{ accessory.name }}
                            </h1>

                            <div class="mt-3">
                                <h2 class="sr-only">Informations sur le produit</h2>
                                <p class="text-3xl tracking-tight text-gray-900" v-if="accessory.show_price">
                                    {{ accessory.price }} €
                                </p>
                            </div>

                            <div class="mt-6">
                                <h3 class="sr-only">Description</h3>

                                <div class="space-y-6 text-base text-gray-700" v-html="accessory.description" />
                            </div>

                            <form class="mt-6">
                                <div class="mt-10 flex">
                                    <a
                                        :href="`/special/checkout?accessory_id=${accessory.id}`"
                                        class="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-cerulean-600 py-3 px-8 text-base font-medium text-white hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                    >
                                        Commande
                                    </a>
                                </div>
                                <div v-if="accessory.url" class="mt-10 flex">
                                    <a
                                        :href="accessory.url"
                                        class="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-cerulean-600 py-3 px-8 text-base font-medium text-white hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                    >
                                        Allez sur Amazon
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <section
                        v-if="props.products.length > 0"
                        aria-labelledby="related-heading"
                        class="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0"
                    >
                        <h2 id="related-heading" class="text-xl font-bold text-gray-900">Produits apparentés</h2>

                        <div class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                            <ProductCard v-for="product in props.products" :key="product.id" :product="product" />
                        </div>
                    </section>
                </div>
            </main>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import ProductCard from '@/Components/ProductCard.vue'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'

import { defineProps, ref } from 'vue'

const props = defineProps({
    accessory: {
        type: Object,
    },
    products: {
        type: Array,
    },
})

import CarouselComp from '@/Components/CarouselComp.vue'

import { computed } from 'vue'

var images = computed(() => {
    if (props.accessory.medias.length > 0) {
        return props.accessory.medias.filter((media) => {
            return media.type && media.type.startsWith('image/')
        })
    } else {
        //placeholder image
        return [
            {
                url: 'https://via.placeholder.com/1000x1000?text=No+Image+Available',
                id: 1,
            },
            {
                url: 'https://via.placeholder.com/1000x1000?text=No+Image+Available',
                id: 2,
            },
            {
                url: 'https://via.placeholder.com/1000x1000?text=No+Image+Available',
                id: 3,
            },
        ]
    }
})

const slideTo = (val) => {
    currentSlide.value = val
}
const currentSlide = ref(0)
</script>
