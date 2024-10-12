<template>
    <AuthenticatedLayout title="Paiment" description="Paiment">
        <div class="bg-gray-50">
            <div class="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 class="sr-only">Paiement</h2>

                <form class="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
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
                        <h2 v-if="accessory" class="text-lg font-medium text-gray-900">
                            Accessoires Résumé de la commande
                        </h2>
                        <h2 v-if="offer" class="text-lg font-medium text-gray-900">Résumé de l'offre</h2>

                        <div class="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                            <h3 class="sr-only">Articles dans votre panier</h3>

                            <div v-if="accessory" class="flex py-6 px-4 sm:px-6">
                                <div class="flex-shrink-0">
                                    <!--                                     <img :src="product.imageSrc" :alt="product.imageAlt" class="w-20 rounded-md" />
 -->
                                </div>

                                <div class="ml-6 flex flex-1 flex-col">
                                    <div class="flex">
                                        <div class="min-w-0 flex-1">
                                            <h4 class="text-sm">
                                                <a
                                                    :href="accessory.id"
                                                    class="font-medium text-gray-700 hover:text-gray-800"
                                                    >{{ accessory.name }}</a
                                                >
                                            </h4>
                                        </div>
                                    </div>

                                    <div class="flex flex-1 items-end justify-between pt-2">
                                        <p class="mt-1 text-sm font-medium text-gray-900">{{ accessory.price }} €</p>

                                        <div class="ml-4">
                                            <label for="quantity" class="">Quantité : 1</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-if="offer" class="flex py-6 px-4 sm:px-6">
                                <div v-for="product in offer.products">
                                    <div class="flex-shrink-0">
                                        <!--                                     <img :src="product.imageSrc" :alt="product.imageAlt" class="w-20 rounded-md" />
 -->
                                    </div>

                                    <div class="ml-6 flex flex-1 flex-col">
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

                                        <div class="flex flex-1 items-end justify-between pt-2">
                                            <p class="mt-1 text-sm font-medium text-gray-900">{{ product.price }} €</p>

                                            <div class="ml-4">
                                                <label for="quantity" class="">Quantité : 1</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <dl v-if="accessory" class="space-y-6 border-t border-gray-200 py-6 px-4 sm:px-6">
                                <div class="flex items-center justify-between">
                                    <dt class="text-sm">Sous-total</dt>
                                    <dd class="text-sm font-medium text-gray-900">${{ accessory.price }} €</dd>
                                </div>

                                <div class="flex items-center justify-between border-t border-gray-200 pt-6">
                                    <dt class="text-base font-medium">Total</dt>
                                    <dd class="text-base font-medium text-gray-900">${{ accessory.price }} €</dd>
                                </div>
                            </dl>

                            <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                                <div class="mt-10">
                                    <button
                                        v-if="accessory"
                                        type="button"
                                        @click="AddAccessory()"
                                        class="w-full rounded-md border border-transparent bg-cerulean-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                    >
                                        Checkout
                                    </button>
                                    <button
                                        v-if="offer"
                                        type="button"
                                        @click="AddOffer()"
                                        class="w-full rounded-md border border-transparent bg-cerulean-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                    >
                                        Checkout
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
import { ref, watchEffect } from 'vue'

import InputError from '@/Components/InputError.vue'
import InputLabel from '@/Components/InputLabel.vue'
import SelectField from '@/Components/SelectField.vue'
import TextInput from '@/Components/TextInput.vue'
import { useForm, usePage } from '@inertiajs/vue3'
import countries from '../../Pages/Profile/Partials/countries'

const AddAccessory = () => {
    axios
        .post('/special/add-accessory', {
            accessory_id: accessory.value.id,
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
        .then((response) => {
            /*     window.location.href = '/speacial/orders';
             */
        })
}
const AddOffer = () => {
    axios
        .post('/special/add-offer', {
            offer_id: offer.value.id,
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
        .then((response) => {
            /*     window.location.href = '/speacial/orders';
             */
        })
}

//get the query params and if it includes accessory_id or offer_id
//then call the appropriate function
const offer = ref(null)
const accessory = ref(null)

const props = usePage().props
watchEffect(() => {
    const accessory_id = props.accessoryId ? parseInt(props.accessoryId) : null

    const offer_id = props.offerId ? parseInt(props.offerId) : null

    if (accessory_id) {
        axios.get('/special/accessory/' + accessory_id).then((response) => {
            accessory.value = response.data
        })
    }
    if (offer_id) {
        axios.get('/special/offer/' + offer_id).then((response) => {
            offer.value = response.data
        })
    }
})

const user = usePage().props.auth.user

const form = useForm({
    name: user.name,
    email: user.email,
    state: user.state,
    city: user.city,
    address: user.address,
    zip_code: user.zip_code,
    phone: user.phone,
    country: user.country,
    company_name: '',
    apartment: '',
})
</script>
