// stores/cart.js

import axios from 'axios'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        cartCountData: 0,
    }),
    actions: {
        async CartCount() {
            const response = await axios.get('/cart/count')
            this.cartCountData = response.data
        },
    },
    getters: {
        getCartCount() {
            return this.cartCountData
        },
    },

    // other cart store logic
})
