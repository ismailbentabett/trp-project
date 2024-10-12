<template>
    <AuthenticatedLayout title="Product" description="Product">
        <div class="bg-white">
            <main class="mx-auto px-4 pt-14 pb-24 sm:px-6 sm:pt-16 sm:pb-32 lg:max-w-7xl lg:px-8">
                <!-- Product -->

                <div class="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
                    <!-- Product image -->
                    <div class="lg:col-span-4 lg:row-end-1">
                        <div class="x">
                            <CarouselComp :images="images"></CarouselComp>
                        </div>
                    </div>

                    <!-- Product details -->
                    <div class="mt-14 sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
                        <div class="flex flex-col-reverse bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6 mb-5">
                            <div class="mt-4">
                                <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                    {{ props.product.name }}
                                </h1>
                            </div>
                        </div>

                        <div
                            class="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6"
                            v-if="
                                antenna_type.length > 0 ||
                                battery.length > 0 ||
                                charger.length > 0 ||
                                frequency_bands.length > 0 ||
                                quick_reference_guide.length > 0 ||
                                service_warranty.length > 0
                            "
                        >
                            <div
                                v-if="antenna_type.length > 0"
                                class="flex flex-col justify-center space-y-6 bg-white px-4 py-2 sm:p-3"
                            >
                                <div>
                                    <label for="AntennaType" class="block text-sm font-medium text-gray-700"
                                        >Antenna Type</label
                                    >
                                    <div class="mt-1">
                                        <SelectField v-model="form.AntennaType" :options="antenna_type" />
                                    </div>
                                </div>
                            </div>
                            <div
                                v-if="battery.length > 0"
                                class="flex flex-col justify-center space-y-6 bg-white px-4 py-2 sm:p-3"
                            >
                                <div>
                                    <label for="Battery" class="block text-sm font-medium text-gray-700">Battery</label>
                                    <div class="mt-1">
                                        <SelectField v-model="form.Battery" :options="battery" />
                                    </div>
                                </div>
                            </div>
                            <div
                                v-if="charger.length > 0"
                                class="flex flex-col justify-center space-y-6 bg-white px-4 py-2 sm:p-3"
                            >
                                <div>
                                    <label for="Charger" class="block text-sm font-medium text-gray-700">Charger</label>
                                    <div class="mt-1">
                                        <SelectField v-model="form.Charger" :options="charger" />
                                    </div>
                                </div>
                            </div>
                            <div
                                v-if="frequency_bands.length > 0"
                                class="flex flex-col justify-center space-y-6 bg-white px-4 py-2 sm:p-3"
                            >
                                <div>
                                    <label for="FrequencyBand" class="block text-sm font-medium text-gray-700"
                                        >Frequency Band</label
                                    >
                                    <div class="mt-1">
                                        <SelectField v-model="form.FrequencyBand" :options="frequency_bands" />
                                    </div>
                                </div>
                            </div>
                            <div
                                v-if="quick_reference_guide.length > 0"
                                class="flex flex-col justify-center space-y-6 bg-white px-4 py-2 sm:p-3"
                            >
                                <div>
                                    <label for="QuickReferenceGuide" class="block text-sm font-medium text-gray-700"
                                        >Quick Reference Guide</label
                                    >
                                    <div class="mt-1">
                                        <SelectField
                                            v-model="form.QuickReferenceGuide"
                                            :options="quick_reference_guide"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                v-if="service_warranty.length > 0"
                                class="flex flex-col justify-center space-y-6 bg-white px-4 py-2 sm:p-3"
                            >
                                <div>
                                    <label for="ServiceWarranty" class="block text-sm font-medium text-gray-700"
                                        >Service Warranty</label
                                    >
                                    <div class="mt-1">
                                        <SelectField v-model="form.ServiceWarranty" :options="service_warranty" />
                                    </div>
                                </div>
                            </div>

                            <!-- configuration -->
                        </div>

                        <div
                            class="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-3 bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6"
                        >
                            <button
                                @click="addTocart"
                                type="button"
                                class="col-span-2 flex w-full items-center justify-center rounded-md border border-transparent bg-cerulean-600 py-3 px-8 text-base font-medium text-white hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                            >
                                Ajouter au panier
                            </button>

                            <input
                                v-model="form.quantity"
                                type="number"
                                id="quantity"
                                minlength="10"
                                maxlength="3000"
                                pattern="/^-?\d+\.?\d*$/"
                                onKeyPress="if(this.value.quantity==4) return false;"
                                required
                                :class="[
                                    checkIfThereIsError('quantity')
                                        ? 'bg-white border border-red-500 text-red-500 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-red dark:focus:ring-red-500 dark:focus:border-red-500'
                                        : 'bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cerulean-500 focus:border-cerulean-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cerulean-500 dark:focus:border-cerulean-500',
                                ]"
                            />
                        </div>
                        <!-- attachment -->
                        <div
                            v-if="documents.length > 0"
                            class="sm:col-span-2 my-5 bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6"
                        >
                            <dd class="mt-1 text-sm text-gray-900">
                                <ul role="list" class="">
                                    <li
                                        v-for="attachment in documents"
                                        :key="attachment.id"
                                        class="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
                                    >
                                        <div class="flex w-0 flex-1 items-center">
                                            <PaperClipIcon
                                                class="h-5 w-5 flex-shrink-0 text-gray-400"
                                                aria-hidden="true"
                                            />
                                            <span class="ml-2 w-0 flex-1 truncate">{{ attachment.name }}</span>
                                        </div>
                                        <div class="ml-4 flex-shrink-0">
                                            <a
                                                :href="attachment.url"
                                                class="font-medium text-cerulean-600 hover:text-cerulean-500"
                                                >Télécharger</a
                                            >
                                        </div>
                                    </li>
                                </ul>
                            </dd>
                        </div>
                        <!-- video -->
                        <Player v-for="video in videos" :key="video.id" theme="dark" style="--vm-player-theme: #05b9e0">
                            <Video crossOrigin>
                                <source :data-src="video.url" type="video/mp4" />
                                <track
                                    default
                                    kind="subtitles"
                                    src="https://media.vimejs.com/subs/english.vtt"
                                    srclang="en"
                                    label="English"
                                />
                            </Video>

                            <DefaultUi />
                        </Player>
                    </div>

                    <div class="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
                        <p class="mt-6 text-gray-500" v-html="props.product.description"></p>
                    </div>
                </div>

                <!-- Accessories -->
                <div v-if="props.accessoryTypes.length > 0" class="mx-auto mt-24 max-w-2xl sm:mt-32 lg:max-w-none">
                    <div class="bg-gray-100">
                        <div class="mx-auto max-w-7xl py-3 px-4 sm:flex sm:items-center sm:px-6 lg:px-8">
                            <h3 class="text-sm font-medium text-gray-500 mb-2 sm:mb-0">
                                Accessor Types
                                <span class="sr-only">, active</span>
                            </h3>

                            <div aria-hidden="true" class="hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block" />
                            <Carousel
                                v-bind="settings.settings"
                                :breakpoints="settings.breakpoints"
                                class="mx-2 w-full space-x-5"
                            >
                                <Slide v-for="activeFilter in activeFilters" :key="activeFilter.value">
                                    <label
                                        class="cursor-pointer m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-2 px-4 text-base font-medium text-gray-800 hover:bg-gray-100 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition duration-300 ease-in-out peer-checked:text-cerulean-500 peer-checked:border-cerulean-600 peer-checked:text-cerulean-600"
                                    >
                                        <input
                                            type="radio"
                                            :id="'react-option-' + activeFilter.value"
                                            class="hidden peer"
                                            required
                                            :value="activeFilter.value"
                                            v-model="filterForm.radio"
                                        />
                                        <span class="mx-2 truncate">{{ activeFilter.label }} </span>
                                    </label>
                                </Slide>
                            </Carousel>
                        </div>
                    </div>
                    <!-- Product grid -->
                    <div class="lg:col-span-3 m-5">
                        <!-- Replace with your content -->
                        <div class="rounded-lg lg:h-full">
                            <!--   <div class="col-span-3" v-if="filteredData.data.length == 0">
                      <EmptyState />
                    </div> -->
                            <Carousel
                                :breakpoints="{
                                    0: {
                                        itemsToShow: 1,
                                        snapAlign: 'start',
                                    },
                                    1000: {
                                        itemsToShow: 2.5,
                                        snapAlign: 'start',
                                    },
                                }"
                                snap-align="start"
                                class="space-x-2"
                            >
                                <Slide v-for="accessory in filteredData" :key="accessory.id" class="w-full">
                                    <AccessoryCard
                                        :accessory="accessory"
                                        :addToCartBool="false"
                                        class="divide-y divide-gray-200 rounded-lg bg-white"
                                    />
                                </Slide>

                                <template #addons>
                                    <Navigation v-if="filteredData.length > 2" />
                                </template>
                            </Carousel>
                        </div>
                        <!--                                 <Pagination :links="filteredData.links" />
-->
                    </div>
                </div>

                <ProuctAccessories v-if="currentSelectedFilter.length > 0" :activeFilters="currentSelectedFilter" />

                <div v-if="props.customersAlsoBought.length > 0" class="mx-auto mt-24 max-w-2xl sm:mt-32 lg:max-w-none">
                    <div class="flex items-center justify-between space-x-4">
                        <h2 class="text-lg font-medium text-gray-900 mb-5">Similliare Product</h2>
                    </div>
                    <div class="">
                        <section v-if="props.similarProducts.length > 0" aria-labelledby="related-heading">
                            <Carousel
                                :breakpoints="{
                                    0: {
                                        itemsToShow: 1,
                                        snapAlign: 'start',
                                    },
                                    1000: {
                                        itemsToShow: 2.5,
                                        snapAlign: 'start',
                                    },
                                }"
                                snap-align="start"
                                class="space-x-2"
                            >
                                <Slide v-for="product in props.similarProducts" :key="product.id" class="w-full">
                                    <ProductCard :key="product.id" :product="product" />
                                </Slide>

                                <template #addons>
                                    <Navigation v-if="props.similarProducts.length > 2" />
                                </template>
                            </Carousel>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import AccessoryCard from '@/Components/AccessoryCard.vue'
import SelectField from '@/Components/SelectField.vue'

import CarouselComp from '@/Components/CarouselComp.vue'
import ProductCard from '@/Components/ProductCard.vue'
import ProuctAccessories from '@/Components/ProuctAccessories.vue'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import { PaperClipIcon } from '@heroicons/vue/20/solid'
import { DefaultUi, Player, Video } from '@vime/vue-next'
import { defineProps, onMounted, ref } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

const props = defineProps({
    product: {
        type: Object,
        default: () => ({}),
    },
    reviews: {
        type: Object,
        default: () => ({}),
    },
    customersAlsoBought: {
        type: Array,
        default: () => ({}),
    },
    accessories: {
        type: Array,
        default: () => ({}),
    },
    numberOfReviews: {
        type: Number,
        default: () => ({}),
    },
    numberOfRatings: {
        type: Number,
        default: () => ({}),
    },
    averageRating: {
        type: Number,
        default: () => ({}),
    },
    oneRating: {
        type: Number,
        default: () => ({}),
    },
    twoRating: {
        type: Number,
        default: () => ({}),
    },
    threeRating: {
        type: Number,
        default: () => ({}),
    },
    fourRating: {
        type: Number,
        default: () => ({}),
    },
    fivesRating: {
        type: Number,
        default: () => ({}),
    },
    accessoryTypes: {
        type: Array,
        default: () => [],
    },
    similarProducts: {
        type: Array,
        default: () => [],
    },
    errors: Object,
})
let frequency_bands = ref([])
let antenna_type = ref([])
let battery = ref([])
let charger = ref([])
let service_warranty = ref([])
let quick_reference_guide = ref([])

watchEffect(() => {
    frequency_bands.value = props.product.frequency_bands.map((x) => {
        return {
            id: x.id,
            value: x.name,
            label: x.name,
            description: x.description,
            created_at: x.created_at,
            updated_at: x.updated_at,
        }
    })
    antenna_type.value = props.product.antenna_type.map((x) => {
        return {
            id: x.id,
            value: x.name,
            label: x.name,
            description: x.description,
            created_at: x.created_at,
            updated_at: x.updated_at,
        }
    })
    battery.value = props.product.battery.map((x) => {
        return {
            id: x.id,
            value: x.name,
            label: x.name,
            description: x.description,
            created_at: x.created_at,
            updated_at: x.updated_at,
        }
    })
    charger.value = props.product.charger.map((x) => {
        return {
            id: x.id,
            value: x.name,
            label: x.name,
            description: x.description,
            created_at: x.created_at,
            updated_at: x.updated_at,
        }
    })
    service_warranty.value = props.product.service_warranty.map((x) => {
        return {
            id: x.id,
            value: x.name,
            label: x.name,
            description: x.description,
            created_at: x.created_at,
            updated_at: x.updated_at,
        }
    })
    quick_reference_guide.value = props.product.quick_reference_guide.map((x) => {
        return {
            id: x.id,
            value: x.name,
            label: x.name,
            description: x.description,
            created_at: x.created_at,
            updated_at: x.updated_at,
        }
    })
})

import { useForm } from '@inertiajs/vue3'
import { useVuelidate } from '@vuelidate/core'
import { maxValue, minValue, required } from '@vuelidate/validators'
import { computed, watchEffect } from 'vue'

let form = useForm({
    AntennaType: '',
    Battery: '',
    Charger: '',
    FrequencyBand: '',
    QuickReferenceGuide: '',
    ServiceWarranty: '',
    quantity: 1,
})

const rules = computed(() => ({
    quantity: {
        required,
        minValue: minValue(1),
        maxValue: maxValue(999),
    },
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

let filterForm = useForm({
    radio: '',
})

var videos = computed(() => {
    return props.product.medias.filter((media) => {
        return media.type && media.type.startsWith('video/')
    })
})
var images = computed(() => {
    if (props.product.medias.length > 0) {
        return props.product.medias.filter((media) => {
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
var documents = computed(() => {
    return props.product.medias.filter((media) => {
        return media.type && media.type.startsWith('application/pdf')
    })
})

let settings = {
    // carousel settings
    settings: {
        itemsToShow: 1,
        snapAlign: 'start',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
        // 700px and up
        0: {
            itemsToShow: 1,
            snapAlign: 'start',
        },
        500: {
            itemsToShow: 2,
            snapAlign: 'start',
        },
        800: {
            itemsToShow: 3,
            snapAlign: 'start',
        },
        // 1024 and up
        1000: {
            itemsToShow: 4,
            snapAlign: 'start',
        },
    },
}

let activeFilters = ref([])

watchEffect(() => {
    console.log(props.accessoryTypes)
    activeFilters.value = props.accessoryTypes.map((x) => ({
        value: x.id,
        label: x.name,
    }))

    console.log(activeFilters.value)
})

const filteredData = ref([])

watchEffect(() => {
    console.log(props.accessories)
    filteredData.value = props.accessories.data
})

const filter = (filters) => {
    console.log(filters)
    //turn to url
    let url = Object.keys(filters)
        .map((key) => {
            return filters[key]
                .map((value) => {
                    return `${key}[]=${value}`
                })
                .join('&')
        })
        .join('&')

    axios.post(`/globalfilter/accessories?${url}`).then((response) => {
        console.log(`/globalfilter/accessories?${url}`)
        filteredData.value = response.data.data
    })
}

let currentSelectedFilter = ref([])

watchEffect(() => {
    console.log(filterForm.radio)
    if (filterForm.radio) {
        filter({ types: [filterForm.radio] })
    }
})

watchEffect(() => {
    if (filterForm.radio) {
        //get child types of selected type
        currentSelectedFilter.value = props.accessoryTypes.find((x) => x.id == filterForm.radio).children || []
    }
})

import { useCartStore } from '@/stores/CartStore'
const cartStore = useCartStore()
function addTocart() {
    if (checkIfThereIsAnyError()) return
    axios
        .post('/cart/add', {
            product_id: props.product.id,
            quantity: form.quantity,
            antenna_type: form.AntennaType ? form.AntennaType : null,
            battery: form.Battery ? form.Battery : null,
            charger: form.Charger ? form.Charger : null,
            frequency_band: form.FrequencyBand ? form.FrequencyBand : null,
            quick_reference_guide: form.QuickReferenceGuide ? form.QuickReferenceGuide : null,
            service_warranty: form.ServiceWarranty ? form.ServiceWarranty : null,
        })
        .then((response) => {
            cartStore.CartCount()
        })
        .catch((error) => {})
}
</script>
