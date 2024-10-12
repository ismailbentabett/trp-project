<template>
    <div class="max-w-7xl">
        <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
        <div class="mx-auto max-w-3xl">
            <form @submit.prevent="submit">
                <div class="mt-1">
                    <div class="flex items-center border border-gray-200 rounded">
                        <button
                            type="button"
                            @click="minus()"
                            class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                        >
                            &minus;
                        </button>

                        <input
                            v-model="form.quantity"
                            type="number"
                            id="quantity"
                            minlength="10"
                            maxlength="3000"
                            pattern="/^-?\d+\.?\d*$/"
                            onKeyPress="if(this.value.quantity==4) return false;"
                            :class="[
                                form.errors.quantity
                                    ? 'block w-full rounded-md border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm h-10 w-full border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none'
                                    : 'block w-full rounded-md pr-10 text-gray-900  focus:outline-none sm:text-sm border-gray-300 focus:ring-cerulean-500 focus:border-cerulean-500 h-10 w-full border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none',
                            ]"
                        />

                        <button
                            type="button"
                            @click="plus()"
                            class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                        >
                            &plus;
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useForm } from '@inertiajs/vue3'
import axios from 'axios'
import { defineEmits, defineProps } from 'vue'
const emit = defineEmits(['reloadcart'])

const props = defineProps({
    item: Object,
})
let form = useForm({
    quantity: props.item.quantity,
})

const plus = () => {
    form.quantity++
    axios.post(`/cart/update-quantity/${props.item.id}`, { quantity: form.quantity }).then(() => {
        emit('reloadcart')
    })
}
const minus = () => {
    if (form.quantity >= 1) {
        form.quantity--
        axios.post(`/cart/update-quantity/${props.item.id}`, form).then(() => {
            emit('reloadcart')
        })
    }
}
</script>
