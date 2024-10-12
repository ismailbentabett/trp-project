<template>
    <AuthenticatedLayout title="Modification de la commande" description="Modification de la commande">
        <div class="bg-gray-50">
            <div class="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 class="sr-only">Mise à jour de l'ordre</h2>

                <form class="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16" @submit.prevent="Update">
                    <div>
                        <div>
                            <h2 class="text-lg font-medium text-gray-900 my-5">Informations sur les contacts</h2>

                            <div class="sm:col-span-6">
                                <InputLabel for="email" value="Email" />

                                <TextInput
                                    id="email"
                                    type="email"
                                    class="mt-1 block w-full"
                                    v-model="form.email"
                                    required
                                    autocomplete="username"
                                />

                                <InputError class="mt-2" :message="form.errors.email" />
                            </div>
                        </div>
                        <h2 class="text-lg font-medium text-gray-900 my-5">Informations sur l'expédition</h2>

                        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div class="sm:col-span-6">
                                <InputLabel for="name" value="Nom" />

                                <TextInput
                                    id="name"
                                    type="text"
                                    class="mt-1 block w-full"
                                    v-model="form.name"
                                    required
                                    autofocus
                                    autocomplete="name"
                                />

                                <InputError class="mt-2" :message="form.errors.name" />
                            </div>

                            <div class="sm:col-span-6">
                                <div>
                                    <label for="country" class="block text-sm font-medium text-gray-700">Pays</label>
                                    <div class="mt-1">
                                        <SelectField v-model="form.country" :options="countries" />
                                    </div>
                                </div>
                            </div>

                            <div class="sm:col-span-6">
                                <div class="sm:col-span-6">
                                    <InputLabel for="state" value="État" />

                                    <TextInput
                                        id="state"
                                        type="text"
                                        class="mt-1 block w-full"
                                        v-model="form.state"
                                        required
                                    />

                                    <InputError class="mt-2" :message="form.errors.state" />
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <div class="sm:col-span-6">
                                    <InputLabel for="city" value="Ville" />

                                    <TextInput
                                        id="city"
                                        type="text"
                                        class="mt-1 block w-full"
                                        v-model="form.city"
                                        required
                                    />

                                    <InputError class="mt-2" :message="form.errors.city" />
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <div class="sm:col-span-6">
                                    <InputLabel for="address" value="Adresse" />

                                    <TextInput
                                        id="address"
                                        type="text"
                                        class="mt-1 block w-full"
                                        v-model="form.address"
                                        required
                                    />

                                    <InputError class="mt-2" :message="form.errors.address" />
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <div class="sm:col-span-6">
                                    <InputLabel for="zip_code" value="Code postal" />

                                    <TextInput
                                        id="zip_code"
                                        type="text"
                                        class="mt-1 block w-full"
                                        v-model="form.zip_code"
                                        required
                                    />

                                    <InputError class="mt-2" :message="form.errors.zip_code" />
                                </div>
                            </div>
                            <div class="sm:col-span-6">
                                <div class="sm:col-span-6">
                                    <InputLabel for="phone" value="Numéro de téléphone" />

                                    <TextInput
                                        id="phone"
                                        type="text"
                                        class="mt-1 block w-full"
                                        v-model="form.phone"
                                        required
                                    />

                                    <InputError class="mt-2" :message="form.errors.phone" />
                                </div>
                            </div>
                            <div class="sm:col-span-6">
                                <div class="sm:col-span-6">
                                    <InputLabel for="company_name" value="Nom de l'entreprise" />

                                    <TextInput
                                        id="company_name"
                                        type="text"
                                        class="mt-1 block w-full"
                                        v-model="form.company_name"
                                        required
                                    />

                                    <InputError class="mt-2" :message="form.errors.company_name" />
                                </div>
                            </div>
                            <div class="sm:col-span-6">
                                <div class="sm:col-span-6">
                                    <InputLabel for="apartment" value="Appartement" />

                                    <TextInput
                                        id="apartment"
                                        type="text"
                                        class="mt-1 block w-full"
                                        v-model="form.apartment"
                                        required
                                    />

                                    <InputError class="mt-2" :message="form.errors.apartment" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Order summary -->
                    <div class="mt-10 lg:mt-0">
                        <h2 class="text-lg font-medium text-gray-900">Résumé de la commande</h2>

                        <div class="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                            <h3 class="sr-only">Items in your cart</h3>
                            <ul role="list" class="divide-y divide-gray-200">
                                <li v-for="item in OrderData.order_items" :key="item.id" class="flex py-6 px-4 sm:px-6">
                                    <div class="flex-shrink-0">
                                        <!--                   <img :src="product.imageSrc" :alt="product.imageAlt" class="w-20 rounded-md" />
   -->
                                    </div>

                                    <div class="ml-6 flex flex-1 flex-col">
                                        <div class="flex">
                                            <div class="min-w-0 flex-1">
                                                <h4 class="text-sm">
                                                    <a
                                                        :href="item.id"
                                                        class="font-medium text-gray-700 hover:text-gray-800"
                                                        >{{ item.product.name }}</a
                                                    >
                                                </h4>
                                                <!--        <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
                        <p class="mt-1 text-sm text-gray-500">{{ product.size }}</p> -->
                                            </div>

                                            <div class="ml-4 flow-root flex-shrink-0">
                                                <button
                                                    type="button"
                                                    class="-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500"
                                                >
                                                    <span class="sr-only">Supprimer</span>
                                                    <TrashIcon
                                                        @click="removeOrderItem(item.id)"
                                                        class="h-5 w-5"
                                                        aria-hidden="true"
                                                    />
                                                </button>
                                            </div>
                                        </div>

                                        <div class="flex flex-1 items-end justify-between pt-2">
                                            <p class="mt-1 text-sm font-medium text-gray-900">
                                                {{ item.product.price }} €
                                            </p>

                                            <div class="ml-4">
                                                <label for="quantity" class=""
                                                    >Quantité : {{ item.product.price }} €</label
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <dl class="space-y-6 border-t border-gray-200 py-6 px-4 sm:px-6">
                                <div class="flex items-center justify-between">
                                    <dt class="text-sm">Subtotal</dt>
                                    <dd class="text-sm font-medium text-gray-900">64.00€</dd>
                                </div>
                                <div class="flex items-center justify-between">
                                    <dt class="text-sm">Shipping</dt>
                                    <dd class="text-sm font-medium text-gray-900">5.00€</dd>
                                </div>
                                <div class="flex items-center justify-between">
                                    <dt class="text-sm">Taxes</dt>
                                    <dd class="text-sm font-medium text-gray-900">5.52€</dd>
                                </div>
                                <div class="flex items-center justify-between border-t border-gray-200 pt-6">
                                    <dt class="text-base font-medium">Total</dt>
                                    <dd class="text-base font-medium text-gray-900">75.52€</dd>
                                </div>
                            </dl>

                            <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                                <div class="mt-10">
                                    <button
                                        type="submit"
                                        class="w-full rounded-md border border-transparent bg-cerulean-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                    >
                                        Update
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import { ref } from 'vue'

import InputError from '@/Components/InputError.vue'
import InputLabel from '@/Components/InputLabel.vue'
import SelectField from '@/Components/SelectField.vue'
import TextInput from '@/Components/TextInput.vue'
import { TrashIcon } from '@heroicons/vue/20/solid'
import { useForm } from '@inertiajs/vue3'
import countries from '../Pages/Profile/Partials/countries'

const props = defineProps({
    order: {
        type: Object,
    },
})

const OrderData = ref(props.order)
const deliveryMethods = [
    {
        id: 1,
        title: 'Standard',
        turnaround: '4–10 business days',
        price: '$5.00',
    },
    { id: 2, title: 'Express', turnaround: '2–5 business days', price: '$16.00' },
]
const paymentMethods = [
    { id: 'credit-card', title: 'Credit card' },
    { id: 'paypal', title: 'PayPal' },
    { id: 'etransfer', title: 'eTransfer' },
]

const Update = () => {
    axios
        .post(`/orders/${OrderData.value.id}/edit`, {
            name: form.name,
            email: form.email,
            state: form.state,
            city: form.city,
            address: form.address,
            zip_code: form.zip_code,
            phone: form.phone,
            country: form.country,
            company_name: form.company_name,
            apartment: form.apartment,
        })
        .then((response) => {})
}

const removeOrderItem = (id) => {
    axios.delete(`/orders/${props.order.id}/item/${id}`).then((response) => {
        OrderData.value = response.data
        if (response.data == 0) {
            window.location.href = '/products'
        }
    })
}

const form = useForm({
    name: OrderData.value.name,
    email: OrderData.value.email,
    state: OrderData.value.state,
    city: OrderData.value.city,
    address: OrderData.value.address,
    zip_code: OrderData.value.zip_code,
    phone: OrderData.value.phone,
    country: OrderData.value.country,
    company_name: OrderData.value.company_name,
    apartment: OrderData.value.apartment,
})
</script>
