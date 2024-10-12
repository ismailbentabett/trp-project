<template>
    <AuthenticatedLayout title="Panier" description="Panier">
        <div class="bg-white">
            <main>
                <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
                    <h1 class="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Panier d'achat
                    </h1>

                    <form class="mt-12">
                        <section aria-labelledby="cart-heading">
                            <h2 id="cart-heading" class="sr-only">Articles dans votre panier</h2>
                            <ul v-if="cartData.cartItems.data.length == 0">
                                <EmptyState />
                            </ul>
                            <ul v-else role="list" class="divide-y divide-gray-200 border-t border-b border-gray-200">
                                <li v-for="item in cartData.cartItems.data" :key="item.id" class="flex py-6">
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
                                                </h4>

                                                <div class="hidden sm:flex sm:flex-col">
                                                    <p
                                                        v-if="item.antenna_type"
                                                        class="ml-4 text-sm font-xs text-gray-500"
                                                    >
                                                        Antenna Type :
                                                        {{ item.antenna_type }}
                                                    </p>
                                                    <p v-if="item.battery" class="ml-4 text-sm font-xs text-gray-500">
                                                        Battery :

                                                        {{ item.battery }}
                                                    </p>
                                                    <p v-if="item.charger" class="ml-4 text-sm font-xs text-gray-500">
                                                        Charger :

                                                        {{ item.charger }}
                                                    </p>
                                                    <p
                                                        v-if="item.frequency_band"
                                                        class="ml-4 text-sm font-xs text-gray-500"
                                                    >
                                                        Frequency Band :
                                                        {{ item.frequency_band }}
                                                    </p>
                                                    <p
                                                        v-if="item.quick_reference_guide"
                                                        class="ml-4 text-sm font-xs text-gray-500"
                                                    >
                                                        Quick Frequency Range :
                                                        {{ item.quick_reference_guide }}
                                                    </p>
                                                    <p
                                                        v-if="item.quick_reference_guide"
                                                        class="ml-4 text-sm font-xs text-gray-500"
                                                    >
                                                        Service Warranty :
                                                        {{ item.service_warranty }}
                                                    </p>
                                                </div>

                                                <p class="ml-4 text-sm font-medium text-gray-900">{{ item.amount }}€</p>
                                            </div>
                                        </div>

                                        <div class="mt-4 flex flex-1 items-end justify-between">
                                            <div class="ml-4">
                                                <button
                                                    type="button"
                                                    @click="deleteCartItem(item.id)"
                                                    class="text-sm font-medium text-cerulean-600 hover:text-cerulean-500"
                                                >
                                                    <span>Supprimer</span>
                                                </button>
                                            </div>

                                            <UpdateCartForm :item="item" @reloadcart="reloadcart" />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </section>

                        <Pagination :links="cartData.cartItems.links" />

                        <!-- Order summary -->
                        <section aria-labelledby="summary-heading" class="mt-10">
                            <h2 id="summary-heading" class="sr-only">Résumé de la commande</h2>

                            <div>
                                <dl class="space-y-4">
                                    <div class="flex items-center justify-between">
                                        <dt class="text-base font-medium text-gray-900">Sous-total</dt>
                                        <dd class="ml-4 text-base font-medium text-gray-900">
                                            {{ cartData.cart.total_amount }}€
                                        </dd>
                                    </div>
                                </dl>
                                <p class="mt-1 text-sm text-gray-500">
                                    Les frais d'expédition et les taxes seront calculés au moment du paiement.
                                </p>
                            </div>

                            <div class="mt-10">
                                <a
                                    type="button"
                                    href="/orders/checkout"
                                    class="w-full rounded-md border border-transparent bg-cerulean-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                    >Checkout</a
                                >
                            </div>

                            <div class="mt-6 text-center text-sm text-gray-500">
                                <p>
                                    ou
                                    <a href="/products" class="font-medium text-cerulean-600 hover:text-cerulean-500">
                                        Poursuivre les achats
                                        <span aria-hidden="true"> &rarr;</span>
                                    </a>
                                </p>
                            </div>
                        </section>
                    </form>
                </div>
            </main>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import Pagination from '@/Components/Pagination.vue'
import EmptyState from '@/Components/EmptyState.vue'

import { ref, defineProps } from 'vue'

import UpdateCartForm from '@/Components/UpdateCartForm.vue'
const props = defineProps({
    cart: {
        type: Array,
        default: () => ({}),
    },
    cartItems: {
        type: Array,
        default: () => [],
    },
})

const cartData = ref(props)

const reloadcart = () => {
    //update inertia cart
    axios.get('/cart/my').then((response) => {
        cartData.value = response.data
    })
}
var images = (product) => {
    return product.medias.filter((media) => {
        return media.type && media.type.startsWith('image/')
    })
}
import { useCartStore } from '@/stores/CartStore'
const cartStore = useCartStore()

const deleteCartItem = (id) => {
    axios
        .delete(`/cart/${id}`)
        .then((response) => {
            cartData.value = response.data
            cartStore.CartCount()
        })
        .catch((error) => {})
}
</script>
