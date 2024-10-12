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
                                            <DialogTitle class="text-lg font-medium text-gray-900">Panier</DialogTitle>
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
                                    <div class="relative mt-6 flex-1 px-4 sm:px-6">
                                        <!-- Replace with your content -->
                                        <div class="">
                                            <div class="h-full" aria-hidden="true">
                                                <div class="">
                                                    <form class="">
                                                        <section aria-labelledby="cart-heading">
                                                            <h2 id="cart-heading" class="sr-only">
                                                                Articles dans votre panier
                                                            </h2>

                                                            <ul v-if="cartItems.length == 0" role="list">
                                                                <EmptyState />
                                                            </ul>
                                                            <ul v-else role="list">
                                                                <li
                                                                    v-for="item in cartItems"
                                                                    :key="item.id"
                                                                    class="flex py-6"
                                                                >
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
                                                                                <p
                                                                                    class="ml-4 text-sm font-medium text-gray-900"
                                                                                >
                                                                                    {{ item.amount }}$
                                                                                </p>
                                                                            </div>
                                                                            <p class="mt-1 text-sm text-gray-500">
                                                                                Quantité : {{ item.quantity }}
                                                                            </p>
                                                                        </div>

                                                                        <div
                                                                            class="mt-4 flex flex-1 items-end justify-between"
                                                                        >
                                                                            <!--   <p class="flex items-center space-x-2 text-sm text-gray-700">
                        <CheckIcon v-if="product.inStock" class="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                        <ClockIcon v-else class="h-5 w-5 flex-shrink-0 text-gray-300" aria-hidden="true" />
                         <span>{{ item.pro ? 'In stock' : `Will ship in ${product.leadTime}` }}</span>
                     </p> -->
                                                                            <div class="ml-4">
                                                                                <button
                                                                                    type="button"
                                                                                    @click="deleteCartItem(item.id)"
                                                                                    class="text-sm font-medium text-cerulean-600 hover:text-cerulean-500"
                                                                                >
                                                                                    <span>Supprimer</span>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </section>

                                                        <!-- Order summary -->
                                                        <section aria-labelledby="summary-heading" class="mt-10">
                                                            <h2 id="summary-heading" class="sr-only">
                                                                Récapitulatif de la commande
                                                            </h2>

                                                            <div>
                                                                <dl class="space-y-4">
                                                                    <div class="flex items-center justify-between">
                                                                        <dt class="text-base font-medium text-gray-900">
                                                                            Sous-total
                                                                        </dt>
                                                                        <dd
                                                                            class="ml-4 text-base font-medium text-gray-900"
                                                                        >
                                                                            {{ cart.total_amount }}
                                                                            EUR
                                                                        </dd>
                                                                    </div>
                                                                </dl>
                                                                <p class="mt-1 text-sm text-gray-500">
                                                                    Les frais d'expédition et les taxes seront calculés
                                                                    au moment du paiement.
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
                                                                    <a
                                                                        href="/cart"
                                                                        class="font-medium text-cerulean-600 hover:text-cerulean-500"
                                                                    >
                                                                        Voir le panier complet
                                                                        <span aria-hidden="true"> &rarr;</span>
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </section>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- /End replace -->
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
const cart = ref([])
const cartItems = ref([])

var images = (product) => {
    return product.medias.filter((media) => {
        return media.type && media.type.startsWith('image/')
    })
}

watchEffect(() => {
    open.value = props.open

    axios.get('/cart/my').then((response) => {
        cart.value = response.data.cart
        cartItems.value = response.data.cartItems
    })
})

import { useCartStore } from '@/stores/CartStore'
const cartStore = useCartStore()
const deleteCartItem = (id) => {
    axios
        .delete(`/cart/${id}`)
        .then((response) => {
            cart.value = response.data.cart
            cartItems.value = response.data.nonpaginatedCartItems

            cartStore.CartCount()
        })
        .catch((error) => {})
}
</script>
