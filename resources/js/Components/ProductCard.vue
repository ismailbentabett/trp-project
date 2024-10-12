<template>
    <div class="">
        <div>
            <a :href="`/product/${product.id}`" class="relative cursor-pointer">
                <div class="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                        v-if="images.length > 0"
                        :src="images[0].url"
                        :alt="product.imageAlt"
                        class="h-full w-full object-cover object-center"
                    />
                    <img
                        v-else
                        src="https://placehold.co/600x400?text=No Image"
                        :alt="product.imageAlt"
                        class="h-full w-full object-cover object-center"
                    />
                </div>

                <div class="relative mt-4">
                    <h3 class="text-sm font-medium text-gray-900">{{ product.name }}</h3>
                    <p class="mt-1 text-sm text-gray-500">{{ product.brand.name }}</p>
                </div>
                <div class="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                        aria-hidden="true"
                        class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p class="relative text-lg font-semibold text-white" v-if="product.show_price">
                        {{ product.price }} €
                    </p>
                </div>
            </a>
            <div class="mt-6">
                <a
                    v-if="addToCartBool"
                    @click="addTocart"
                    class="cursor-pointer relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
                    >Ajouter au panier<span class="sr-only">, {{ product.name }}</span></a
                >
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
    addToCartBool: {
        type: Boolean,
        default: true,
    },
})
var images = computed(() => {
    return props.product.medias.filter((media) => {
        return media.type && media.type.startsWith('image/')
    })
})

import { useCartStore } from '@/stores/CartStore'
const cartStore = useCartStore()

function addTocart() {
    axios
        .post('/cart/add', {
            product_id: props.product.id,
            quantity: 1,
        })
        .then((response) => {
            cartStore.CartCount()
        })
        .catch((error) => {})
}
</script>
