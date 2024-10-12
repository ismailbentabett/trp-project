<template>
    <TicketsLayout title="Create Ticket" description="Create Ticket">
        <main class="mx-auto max-w-lg px-4 pt-10 pb-12 lg:pb-16">
            <form @submit.prevent="createTicket" class="space-y-6">
                <div class="space-y-6">
                    <div>
                        <h1 class="text-lg font-medium leading-6 text-gray-900">Créer un ticket d'assistance</h1>
                        <p class="mt-1 text-sm text-gray-500">Créer un ticket d'assistance ci-dessous .</p>
                    </div>

                    <div>
                        <label for="title" class="block text-sm font-medium text-gray-700">Titre</label>
                        <div class="mt-1">
                            <input
                                v-model="form.title"
                                type="text"
                                name="title"
                                id="title"
                                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-cerulean-500 focus:ring-cerulean-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                        <div class="mt-1">
                            <textarea
                                v-model="form.message"
                                id="message"
                                name="message"
                                rows="3"
                                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-cerulean-500 focus:ring-cerulean-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <RadioGroup v-model="form.priority">
                        <RadioGroupLabel class="text-sm font-medium text-gray-900">Priorité</RadioGroupLabel>

                        <div class="isolate mt-1 -space-y-px rounded-md bg-white shadow-sm">
                            <RadioGroupOption
                                as="template"
                                v-for="(priority, priorityIdx) in priorities"
                                :key="priority.name"
                                :value="priority"
                                v-slot="{ checked, active }"
                            >
                                <div
                                    :class="[
                                        priorityIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                                        priorityIdx === priority.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                                        checked ? 'bg-cerulean-50 border-cerulean-200 z-10' : 'border-gray-200',
                                        'relative border p-4 flex cursor-pointer focus:outline-none',
                                    ]"
                                >
                                    <span
                                        :class="[
                                            checked ? 'bg-cerulean-600 border-transparent' : 'bg-white border-gray-300',
                                            active ? 'ring-2 ring-offset-2 ring-cerulean-500' : '',
                                            'mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-full border flex items-center justify-center',
                                        ]"
                                        aria-hidden="true"
                                    >
                                        <span class="rounded-full bg-white w-1.5 h-1.5" />
                                    </span>
                                    <span class="ml-3 flex flex-col">
                                        <RadioGroupLabel
                                            as="span"
                                            :class="[
                                                checked ? 'text-cerulean-900' : 'text-gray-900',
                                                'block text-sm font-medium',
                                            ]"
                                        >
                                            {{ priority.name }}</RadioGroupLabel
                                        >
                                    </span>
                                </div>
                            </RadioGroupOption>
                        </div>
                    </RadioGroup>
                    <Listbox as="div" v-model="form.categories" multiple v-if="categories && form.categories">
                        <ListboxLabel class="block text-sm font-medium text-gray-700">Catégorie</ListboxLabel>
                        <div class="relative mt-1">
                            <ListboxButton
                                class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-cerulean-500 focus:outline-none focus:ring-1 focus:ring-cerulean-500 sm:text-sm"
                            >
                                <span
                                    class="block truncate"
                                    :class="form.categories.length === 0 ? 'text-gray-400' : ''"
                                    >{{
                                        form.categories.length === 0
                                            ? 'Please select a option'
                                            : form.categories.map((category) => category.name).join(',')
                                    }}</span
                                >
                                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </ListboxButton>

                            <transition
                                leave-active-class="transition ease-in duration-100"
                                leave-from-class="opacity-100"
                                leave-to-class="opacity-0"
                            >
                                <ListboxOptions
                                    class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                >
                                    <ListboxOption
                                        as="template"
                                        v-for="category in categories"
                                        :key="category.id"
                                        :value="category"
                                        v-slot="{ active, selectedCategories }"
                                    >
                                        <li
                                            :class="[
                                                active ? 'text-white bg-cerulean-600' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-3 pr-9',
                                            ]"
                                        >
                                            <span
                                                :class="[
                                                    form.categories ? 'font-semibold' : 'font-normal',
                                                    'block truncate',
                                                ]"
                                                >{{ category.name }}</span
                                            >

                                            <span
                                                v-if="isCategorySelected(category)"
                                                :class="[
                                                    active ? 'text-white' : 'text-cerulean-600',
                                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                                ]"
                                            >
                                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        </li>
                                    </ListboxOption>
                                </ListboxOptions>
                            </transition>
                        </div>
                    </Listbox>

                    <Listbox as="div" v-model="form.labels" multiple v-if="labels && form.labels">
                        <ListboxLabel class="block text-sm font-medium text-gray-700">Label</ListboxLabel>
                        <div class="relative mt-1">
                            <ListboxButton
                                class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-cerulean-500 focus:outline-none focus:ring-1 focus:ring-cerulean-500 sm:text-sm"
                            >
                                <span class="block truncate" :class="form.labels.length === 0 ? 'text-gray-400' : ''">{{
                                    form.labels.length === 0
                                        ? 'Please select a option'
                                        : form.labels.map((label) => label.name).join(',')
                                }}</span>
                                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </ListboxButton>

                            <transition
                                leave-active-class="transition ease-in duration-100"
                                leave-from-class="opacity-100"
                                leave-to-class="opacity-0"
                            >
                                <ListboxOptions
                                    class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                >
                                    <ListboxOption
                                        as="template"
                                        v-for="label in labels"
                                        :key="label.id"
                                        :value="label"
                                        v-slot="{ active, selectedLabels }"
                                    >
                                        <li
                                            :class="[
                                                active ? 'text-white bg-cerulean-600' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-3 pr-9',
                                            ]"
                                        >
                                            <span
                                                :class="[
                                                    form.labels ? 'font-semibold' : 'font-normal',
                                                    'block truncate',
                                                ]"
                                                >{{ label.name }}</span
                                            >

                                            <span
                                                v-if="isLabelSelected(label)"
                                                :class="[
                                                    active ? 'text-white' : 'text-cerulean-600',
                                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                                ]"
                                            >
                                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        </li>
                                    </ListboxOption>
                                </ListboxOptions>
                            </transition>
                        </div>
                    </Listbox>
                    <Listbox as="div" v-model="form.products" multiple v-if="products && form.products">
                        <ListboxLabel class="block text-sm font-medium text-gray-700">Produits</ListboxLabel>
                        <div class="relative mt-1">
                            <ListboxButton
                                class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-cerulean-500 focus:outline-none focus:ring-1 focus:ring-cerulean-500 sm:text-sm"
                            >
                                <span
                                    class="block truncate"
                                    :class="form.products.length === 0 ? 'text-gray-400' : ''"
                                    >{{
                                        form.products.length === 0
                                            ? 'Please select a option'
                                            : form.products.map((product) => product.name).join(',')
                                    }}</span
                                >
                                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </ListboxButton>

                            <transition
                                leave-active-class="transition ease-in duration-100"
                                leave-from-class="opacity-100"
                                leave-to-class="opacity-0"
                            >
                                <ListboxOptions
                                    class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                >
                                    <ListboxOption
                                        as="template"
                                        v-for="product in products"
                                        :key="product.id"
                                        :value="product"
                                        v-slot="{ active, selectedProducts }"
                                    >
                                        <li
                                            :class="[
                                                active ? 'text-white bg-cerulean-600' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-3 pr-9',
                                            ]"
                                        >
                                            <span
                                                :class="[
                                                    form.products ? 'font-semibold' : 'font-normal',
                                                    'block truncate',
                                                ]"
                                                >{{ product.name }}</span
                                            >

                                            <span
                                                v-if="isProductSelected(product)"
                                                :class="[
                                                    active ? 'text-white' : 'text-cerulean-600',
                                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                                ]"
                                            >
                                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        </li>
                                    </ListboxOption>
                                </ListboxOptions>
                            </transition>
                        </div>
                    </Listbox>
                    <Listbox as="div" v-model="form.accessories" multiple v-if="accessories && form.accessories">
                        <ListboxLabel class="block text-sm font-medium text-gray-700">Accessoires</ListboxLabel>
                        <div class="relative mt-1">
                            <ListboxButton
                                class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-cerulean-500 focus:outline-none focus:ring-1 focus:ring-cerulean-500 sm:text-sm"
                            >
                                <span
                                    class="block truncate"
                                    :class="form.accessories.length === 0 ? 'text-gray-400' : ''"
                                    >{{
                                        form.accessories.length === 0
                                            ? 'Please select a option'
                                            : form.accessories.map((accessory) => accessory.name).join(',')
                                    }}</span
                                >
                                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </ListboxButton>

                            <transition
                                leave-active-class="transition ease-in duration-100"
                                leave-from-class="opacity-100"
                                leave-to-class="opacity-0"
                            >
                                <ListboxOptions
                                    class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                >
                                    <ListboxOption
                                        as="template"
                                        v-for="accessory in accessories"
                                        :key="accessory.id"
                                        :value="accessory"
                                        v-slot="{ active, selectedAccessories }"
                                    >
                                        <li
                                            :class="[
                                                active ? 'text-white bg-cerulean-600' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-3 pr-9',
                                            ]"
                                        >
                                            <span
                                                :class="[
                                                    form.accessory ? 'font-semibold' : 'font-normal',
                                                    'block truncate',
                                                ]"
                                                >{{ accessory.name }}</span
                                            >

                                            <span
                                                v-if="isAccessorySelected(accessory)"
                                                :class="[
                                                    active ? 'text-white' : 'text-cerulean-600',
                                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                                ]"
                                            >
                                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        </li>
                                    </ListboxOption>
                                </ListboxOptions>
                            </transition>
                        </div>
                    </Listbox>
                    <Listbox as="div" v-model="form.orders" multiple v-if="orders && form.orders">
                        <ListboxLabel class="block text-sm font-medium text-gray-700">Commandes</ListboxLabel>
                        <div class="relative mt-1">
                            <ListboxButton
                                class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-cerulean-500 focus:outline-none focus:ring-1 focus:ring-cerulean-500 sm:text-sm"
                            >
                                <span class="block truncate" :class="form.orders.length === 0 ? 'text-gray-400' : ''">{{
                                    form.orders.length === 0
                                        ? 'Please select a option'
                                        : form.orders.map((order) => order.name).join(',')
                                }}</span>
                                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </ListboxButton>

                            <transition
                                leave-active-class="transition ease-in duration-100"
                                leave-from-class="opacity-100"
                                leave-to-class="opacity-0"
                            >
                                <ListboxOptions
                                    class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                >
                                    <ListboxOption
                                        as="template"
                                        v-for="order in orders"
                                        :key="order.id"
                                        :value="order"
                                        v-slot="{ active, selectedOrders }"
                                    >
                                        <li
                                            :class="[
                                                active ? 'text-white bg-cerulean-600' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-3 pr-9',
                                            ]"
                                        >
                                            <span
                                                :class="[
                                                    form.order ? 'font-semibold' : 'font-normal',
                                                    'block truncate',
                                                ]"
                                                >{{ order.name }}</span
                                            >

                                            <span
                                                v-if="isOrderSelected(order)"
                                                :class="[
                                                    active ? 'text-white' : 'text-cerulean-600',
                                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                                ]"
                                            >
                                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        </li>
                                    </ListboxOption>
                                </ListboxOptions>
                            </transition>
                        </div>
                    </Listbox>

                    <div class="flex justify-end">
                        <button
                            type="submit"
                            class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-cerulean-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-cerulean-600 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2"
                        >
                            Create Ticket
                        </button>
                    </div>
                </div>
            </form>
        </main>
    </TicketsLayout>
</template>

<script setup>
import { ref } from 'vue'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'

import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

import TicketsLayout from '../TicketsLayout.vue'

const props = defineProps({
    ticketCategories: {
        type: String,
        required: true,
    },
    ticketLabels: {
        type: String,
        required: true,
    },
    products: {
        type: String,
        required: true,
    },
    accessories: {
        type: String,
        required: true,
    },
    orders: {
        type: String,
        required: true,
    },
})

import { reactive, onMounted, computed } from 'vue'

const categories = computed(() =>
    props.ticketCategories.map((category) => {
        return {
            id: category.id,
            name: category.name,
        }
    }),
)
const labels = computed(() =>
    props.ticketLabels.map((label) => {
        return {
            id: label.id,
            name: label.name,
        }
    }),
)

const products = computed(() =>
    props.products.map((product) => {
        return {
            id: product.id,
            name: product.name,
        }
    }),
)

const accessories = computed(() =>
    props.accessories.map((accessory) => {
        return {
            id: accessory.id,
            name: accessory.name,
        }
    }),
)

const orders = computed(() =>
    props.orders.map((order) => {
        return {
            id: order.id,
            name: 'Commande #00' + order.id,
        }
    }),
)

const isCategorySelected = (category) => {
    return form.categories.indexOf(category) !== -1
}

const isLabelSelected = (label) => {
    return form.labels.indexOf(label) !== -1
}

const isProductSelected = (product) => {
    return form.products.indexOf(product) !== -1
}

const isAccessorySelected = (accessory) => {
    return form.accessories.indexOf(accessory) !== -1
}

const isOrderSelected = (order) => {
    return form.orders.indexOf(order) !== -1
}
const user = {
    name: 'Floyd Miles',
    email: 'floyd.miles@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const priorities = [{ name: 'low' }, { name: 'normal' }, { name: 'high' }]

const selected = ref(priorities[0])

import { useVuelidate } from '@vuelidate/core'
import { minLength, required, minValue, maxValue } from '@vuelidate/validators'

let form = reactive({
    title: '',
    message: '',
    priority: priorities[0],
    categories: [],
    labels: [],
    products: [],
    accessories: [],
    orders: [],
})

const selectedCategories = ref(form.categories)
const selectedLabels = ref(form.labels)
const selectedProducts = ref(form.products)
const selectedAccessories = ref(form.accessories)
const selectedOrders = ref(form.orders)

const rules = computed(() => ({
    title: { required },
    message: { required },
    priority: { required },
    categories: { required },
    labels: { required },
    products: {},
    accessories: {},
    orders: {},
}))

const v$ = useVuelidate(rules, form)

onMounted(() => {
    v$.value.$touch()
})

const getErrorMessage = (property) => {
    if (v$.value[property] !== undefined) {
        return v$.value[property].$errors
    }

    return []
}

const checkIfThereIsError = (property) => {
    return v$.value[property].$error
}

const checkIfThereIsAnyError = () => {
    return v$.value.$error
}

const createTicket = () => {
    axios
        .post('/tickets/store', {
            title: form.title,
            message: form.message,
            priority: form.priority.name,
            categories: form.categories ? form.categories.map((category) => category.id) : [],
            labels: form.labels ? form.labels.map((label) => label.name) : [],
            products: form.products ? form.products.map((product) => product.id) : [],
            accessories: form.accessories ? form.accessories.map((accessory) => accessory.id) : [],
            orders: form.orders ? form.orders.map((order) => order.id) : [],
        })
        .then((response) => {
            window.location.href = '/tickets/discussion/' + response.data.id
        })
        .catch((error) => {})
}

import { watchEffect } from 'vue'

import { usePage } from '@inertiajs/vue3'

const alert = computed(() => usePage().props.value.flash.alert)

const url = computed(() => usePage().url)

// Create a ref to store the query parameters
const params = ref([])

const parseQueryParameters = () => {
    const searchParams = new URLSearchParams(url.value.split('?')[1])
    for (const [key, value] of searchParams.entries()) {
        //push
        params.value.push({ key: key, value: value })
    }

    //filter and group by key object of params
    const res = params.value.reduce((acc, { key, value }) => {
        if (!acc[key]) acc[key] = []
        acc[key].push(value)
        return acc
    }, {})

    //remove duplicates
    for (const [key, value] of Object.entries(res)) {
        res[key] = [...new Set(value)]
    }

    params.value = res

    //filter products & accessories & orders by id
    if (params.value.products) {
        /* [
        {
            "id": 1,
            "name": "Créer product"
        }
    ] */

        form.products = products.value.filter((item) => params.value.products.includes(item.id.toString()))
    }

    if (params.value.accessories) {
        form.accessories = accessories.value.filter((accessory) =>
            params.value.accessories.includes(accessory.id.toString()),
        )
    }

    if (params.value.orders) {
        form.orders = orders.value.filter((order) => params.value.orders.includes(order.id.toString()))
    }
}

// Watch for changes in the URL and update the query parameters
watchEffect(() => {
    parseQueryParameters()
})
</script>
