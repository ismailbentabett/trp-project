<template>
    <Carousel :autoplay="10000" :wrap-around="true">
        <Slide v-for="offer in props.offers" :key="offer.id">
            <div class="carousel__item">
                <!-- CTA section -->
                <section aria-labelledby="sale-heading">
                    <div class="overflow-hidden pt-32 sm:pt-14">
                        <div class="bg-cerulean-950">
                            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div class="relative flex justify-between pt-48 pb-16 sm:pb-24">
                                    <div>
                                        <h2
                                            id="sale-heading"
                                            class="text-4xl font-bold tracking-tight text-white md:text-5xl"
                                        >
                                            {{ offer.title }} {{ offer.id }}
                                            <br />

                                            <span
                                                class="truncate text-2xl text-gray-400 font-normal"
                                                v-html="offer.description"
                                            ></span>
                                        </h2>
                                        <div class="mt-6 text-base">
                                            <a :href="`offer/${offer.id}`" class="font-semibold text-white">
                                                Offre d'achat
                                                <span aria-hidden="true"> &rarr;</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div
                                        class="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0"
                                    >
                                        <div class="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                                            <div
                                                class="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8"
                                            >
                                                <div v-if="offer.products.length > 0" class="flex-shrink-0">
                                                    <img
                                                        class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                                        :src="getImAGES(offer.products[0].medias)"
                                                        alt=""
                                                    />
                                                </div>

                                                <div
                                                    v-if="offer.products.length > 3"
                                                    class="mt-6 flex-shrink-0 sm:mt-0"
                                                >
                                                    <img
                                                        class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                                        :src="getImAGES(offer.products[3].medias)"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                class="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8"
                                            >
                                                <div v-if="offer.products.length > 1" class="flex-shrink-0">
                                                    <img
                                                        class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                                        :src="getImAGES(offer.products[1].medias)"
                                                        alt=""
                                                    />
                                                </div>

                                                <div
                                                    v-if="offer.products.length > 2"
                                                    class="mt-6 flex-shrink-0 sm:mt-0"
                                                >
                                                    <img
                                                        class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                                        :src="getImAGES(offer.products[2].medias)"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Slide>
    </Carousel>
</template>

<script setup>
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
import { defineProps } from 'vue'

const props = defineProps({
    offers: {
        type: Object,
    },
})

import { first } from 'lodash'

var getImAGES = (medias) => {
    var images = medias.filter((media) => {
        return media.type && media.type.startsWith('image/')
    })

    //return one image
    return first(images) ? first(images).url : 'https://placehold.co/600x400?text=No Image'
}
</script>
