<template>
    <!-- Accessories -->
    <div class="mx-auto mt-24 max-w-2xl sm:mt-32 lg:max-w-none">
        <div class="bg-gray-100">
            <div class="mx-auto max-w-7xl py-3 px-4 sm:flex sm:items-center sm:px-6 lg:px-8">
                <h3 class="text-sm font-medium text-gray-500 mb-2 sm:mb-0">
                    Accessor Types
                    <span class="sr-only">, active</span>
                </h3>

                <div aria-hidden="true" class="hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block" />
                <Carousel v-bind="settings.settings" :breakpoints="settings.breakpoints" class="mx-2 w-full space-x-5">
                    <Slide v-for="activeFilter in activeFilters" :key="activeFilter.value">
                        <label
                            class="cursor-pointer m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-2 px-4 text-base font-medium text-gray-800 hover:bg-gray-100 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition duration-300 ease-in-out peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600"
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
                    <Slide v-for="accessory in filteredData" :key="accessory.id">
                        <AccessoryCard
                            :accessory="accessory"
                            :addToCartBool="false"
                            class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white"
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
</template>

<script setup>
import { defineProps, ref, watchEffect } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import AccessoryCard from '@/Components/AccessoryCard.vue'
import { useForm } from '@inertiajs/vue3'

const props = defineProps({
    activeFilters: {
        type: Array,
        required: true,
    },
    children: {
        type: Array,
        required: true,
    },
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

let filterForm = useForm({
    radio: '',
})

let activeFilters = ref([])

watchEffect(() => {
    activeFilters.value = props.activeFilters.map((x) => ({
        value: x.id,
        label: x.name,
    }))

    console.log(activeFilters.value)
})

const filteredData = ref([])

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

watchEffect(() => {
    console.log(filterForm.radio)
    if (filterForm.radio) {
        filter({ types: [filterForm.radio] })
    }
})

let currentSelectedFilter = ref([])

watchEffect(() => {
    if (filterForm.radio) {
        console.log(props.currentSelectedFilter)
        currentSelectedFilter.value = props.activeFilters.find((x) => x.id == filterForm.radio).children || []
    }
})

/*

*/
</script>

<style scoped>
/* Your component styles go here */
</style>
