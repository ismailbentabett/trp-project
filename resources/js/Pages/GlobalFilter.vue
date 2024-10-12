<template>
    <AuthenticatedLayout title="GlobalFilter" description="GlobalFilter">
        <div class="bg-white">
            <div>
                <!-- Mobile filter dialog -->
                <TransitionRoot as="template" :show="mobileFiltersOpen">
                    <Dialog as="div" class="relative z-40 lg:hidden" @close="mobileFiltersOpen = false">
                        <TransitionChild
                            as="template"
                            enter="transition-opacity ease-linear duration-300"
                            enter-from="opacity-0"
                            enter-to="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leave-from="opacity-100"
                            leave-to="opacity-0"
                        >
                            <div class="fixed inset-0 bg-black bg-opacity-25" />
                        </TransitionChild>

                        <div class="fixed inset-0 z-40 flex">
                            <TransitionChild
                                as="template"
                                enter="transition ease-in-out duration-300 transform"
                                enter-from="translate-x-full"
                                enter-to="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leave-from="translate-x-0"
                                leave-to="translate-x-full"
                            >
                                <DialogPanel
                                    class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl"
                                >
                                    <div class="flex items-center justify-between px-4">
                                        <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                                        <button
                                            type="button"
                                            class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                            @click="mobileFiltersOpen = false"
                                        >
                                            <span class="sr-only">Close menu</span>
                                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>

                                    <!-- Filters -->
                                    <form class="mt-4 border-t border-gray-200">
                                        <h3 class="sr-only">Categories</h3>

                                        <Disclosure
                                            as="div"
                                            class="m-5 border-b border-gray-200 py-6"
                                            v-slot="{ open }"
                                        >
                                            <h3 class="-my-3 flow-root">
                                                <DisclosureButton
                                                    class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                                                >
                                                    <span class="font-medium text-gray-900">Products Filter</span>
                                                    <span class="ml-6 flex items-center">
                                                        <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true" />
                                                        <MinusIcon v-else class="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                </DisclosureButton>
                                            </h3>
                                            <DisclosurePanel class="bg-white py-5">
                                                <TreeView :categories="props.categories" />
                                            </DisclosurePanel>
                                        </Disclosure>
                                    </form>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </Dialog>
                </TransitionRoot>

                <main class="mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
                        <h1 class="text-4xl font-bold tracking-tight text-gray-900">Produits</h1>

                        <div class="flex items-center">
                            <Menu as="div" class="relative inline-block text-left">
                                <div>
                                    <MenuButton
                                        class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                                    >
                                        Trier
                                        <ChevronDownIcon
                                            class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                        />
                                    </MenuButton>
                                </div>

                                <transition
                                    enter-active-class="transition ease-out duration-100"
                                    enter-from-class="transform opacity-0 scale-95"
                                    enter-to-class="transform opacity-100 scale-100"
                                    leave-active-class="transition ease-in duration-75"
                                    leave-from-class="transform opacity-100 scale-100"
                                    leave-to-class="transform opacity-0 scale-95"
                                >
                                    <MenuItems
                                        class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    >
                                        <div class="py-1">
                                            <MenuItem
                                                v-for="option in sortOptions"
                                                :key="option.name"
                                                v-slot="{ active }"
                                            >
                                                <a
                                                    @click="option.function"
                                                    class="cursor-pointer"
                                                    :class="[
                                                        option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                        active ? 'bg-gray-100' : '',
                                                        'block px-4 py-2 text-sm',
                                                    ]"
                                                    >{{ option.name }}</a
                                                >
                                            </MenuItem>
                                        </div>
                                    </MenuItems>
                                </transition>
                            </Menu>

                            <button
                                @click="ToggleGridType"
                                type="button"
                                class="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                            >
                                <span class="sr-only">View grid</span>
                                <Squares2X2Icon v-if="GridType === 'grid'" class="h-5 w-5" aria-hidden="true" />
                                <QueueListIcon v-if="GridType === 'list'" class="h-5 w-5" aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                class="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                @click="mobileFiltersOpen = true"
                            >
                                <span class="sr-only">Filters</span>
                                <FunnelIcon class="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                    <div class="bg-gray-100">
                        <div class="mx-auto max-w-7xl py-3 px-4 sm:flex sm:items-center sm:px-6 lg:px-8">
                            <h3 class="text-sm font-medium text-gray-500 mb-2 sm:mb-0">
                                Products Accessories
                                <span class="sr-only">, active</span>
                            </h3>

                            <div aria-hidden="true" class="hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block" />

                            <!-- Use a transition to create a smooth sliding effect -->
                            <Carousel
                                v-bind="settings.settings"
                                :breakpoints="settings.breakpoints"
                                :items-to-show="4"
                                class="w-full space-x-2"
                                :wrap-around="true"
                            >
                                <Slide
                                    v-for="activeFilter in activeFilters"
                                    :key="activeFilter.value"
                                    class="m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-1.5 pl-3 pr-2 text-sm font-medium text-gray-900 inline-flex items-center justify-between w-full p-5 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                                >
                                    <label>
                                        <input
                                            type="radio"
                                            :id="'react-option-' + activeFilter.value"
                                            class="hidden peer"
                                            required
                                            @click="toggleOpenSlider(activeFilter.value)"
                                        />
                                        <span class="mx-1 cursor-pointer flex truncate justify-center items-center">{{
                                            activeFilter.label
                                        }}</span>
                                    </label>
                                </Slide>
                            </Carousel>
                        </div>

                        <ProductAccessoriesPanel
                            :open="openSlider"
                            :type_accessoire="props.type_accessoire"
                            :productId="productId"
                        />
                    </div>

                    <!-- filtering -->
                    <section aria-labelledby="products-heading" class="pt-6 pb-24">
                        <h2 id="products-heading" class="sr-only">Products</h2>

                        <div>
                            <!-- Filters -->
                            <splitpanes
                                :push-other-panes="false"
                                class="w-full grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 default-theme"
                            >
                                <pane
                                    style="background-color: white !important ; border: none"
                                    min-size="50"
                                    size="50"
                                    class="hidden lg:block p-4"
                                >
                                    <form class="bg-white bo rounded p-4">
                                        <h3 class="sr-only">Filters</h3>

                                        <Disclosure as="div" class="border-b border-gray-200 py-6" v-slot="{ open }">
                                            <h3 class="-my-3 flow-root">
                                                <DisclosureButton
                                                    class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                                                >
                                                    <span class="font-medium text-gray-900">Categories</span>
                                                    <span class="ml-6 flex items-center">
                                                        <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true" />
                                                        <MinusIcon v-else class="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                </DisclosureButton>
                                            </h3>
                                            <DisclosurePanel class="bg-white py-5">
                                                <TreeView :categories="props.categories" />
                                            </DisclosurePanel>
                                        </Disclosure>
                                        <!-- filters -->
                                        <Disclosure
                                            as="div"
                                            v-for="section in filters"
                                            :key="section.id"
                                            class="border-t border-gray-200 px-4 py-6"
                                            v-slot="{ open }"
                                        >
                                            <h3 class="-mx-2 -my-3 flow-root">
                                                <DisclosureButton
                                                    class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                                                >
                                                    <span class="font-medium text-gray-900">{{ section.name }}</span>
                                                    <span class="ml-6 flex items-center">
                                                        <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true" />
                                                        <MinusIcon v-else class="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                </DisclosureButton>
                                            </h3>
                                            <DisclosurePanel class="pt-6">
                                                <div class="space-y-6">
                                                    <div
                                                        v-for="(option, optionIdx) in section.options"
                                                        :key="option.value"
                                                        class="flex items-center"
                                                    >
                                                        <input
                                                            :id="`filter-mobile-${section.id}-${optionIdx}`"
                                                            :name="`${section.id}[]`"
                                                            :value="option"
                                                            type="checkbox"
                                                            :checked="option.checked"
                                                            class="h-4 w-4 rounded border-gray-300 text-cerulean-600 focus:ring-cerulean-500"
                                                        />
                                                        <label
                                                            :for="`filter-mobile-${section.id}-${optionIdx}`"
                                                            class="ml-3 min-w-0 flex-1 text-gray-500"
                                                            >{{ option.label }}</label
                                                        >
                                                    </div>
                                                </div>
                                            </DisclosurePanel>
                                        </Disclosure>
                                    </form>
                                </pane>
                                <pane class="w-full p-4 bg-white" style="background-color: white !important" size="150">
                                    <!-- Product grid -->
                                    <div class="lg:col-span-3">
                                        <!-- Replace with your content -->
                                        <div class="rounded-lg lg:h-full">
                                            <!--   <div class="col-span-3" v-if="filteredData.data.length == 0">
                        <EmptyState />
                      </div> -->
                                            <div
                                                :class="
                                                    GridType === 'grid'
                                                        ? 'flex flex-col gap-y-10 sm:flex-row sm:gap-x-6 lg:flex-row lg:gap-x-8 lg:flex-wrap'
                                                        : 'grid grid-cols-1 gap-y-6'
                                                "
                                            >
                                                <ProductCard
                                                    v-for="product in filteredData.data"
                                                    :key="product.id"
                                                    :product="product"
                                                    class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white"
                                                />
                                            </div>
                                        </div>
                                        <!-- <Pagination :links="filteredData.links" /> -->
                                    </div>
                                </pane>
                            </splitpanes>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import ProductAccessoriesPanel from '@/Components/ProductAccessoriesPanel.vue'
import ProductCard from '@/Components/ProductCard.vue'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import axios from 'axios'
import { Pane, Splitpanes } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import { defineProps, ref, watchEffect } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
const props = defineProps({
    products: {
        type: Object,
    },
    categories: {
        type: Array,
        default: () => [],
    },
    type_accessoire: {
        type: Array,
        default: () => [],
    },
    brands: {
        type: Array,
        default: () => [],
    },
})

import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import {
    ChevronDownIcon,
    FunnelIcon,
    MinusIcon,
    PlusIcon,
    QueueListIcon,
    Squares2X2Icon,
} from '@heroicons/vue/20/solid'
import { XMarkIcon } from '@heroicons/vue/24/outline'

import TreeView from '@/Components/TreeView.vue'
import { useGlobalFilterStore } from '@/stores/GlobalFilterStore'

const openSlider = ref(false)
const productId = ref(null)

const toggleOpenSlider = (id) => {
    openSlider.value = !openSlider.value
    productId.value = id
}
const globalFilterStore = useGlobalFilterStore()

const mobileFiltersOpen = ref(false)

const filteredData = ref([])

const filter = (filters) => {
    /* {category_id: Array(2), brand_id: Array(1)} */

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

    axios.post(`/globalfilter/products?${url}`).then((response) => {
        filteredData.value = response.data
    })
}

let activeFilters = ref([])

watchEffect(() => {
    let data = filteredData.value.data ? filteredData.value.data : []
    activeFilters.value = data.map((x) => ({
        value: x.id,
        label: x.name,
    }))
})

const query = ref('')

watchEffect(() => {
    query.value = globalFilterStore.getTreeData
        .filter((x) => x.checked === true)
        .reduce((result, value) => {
            if (!result[value.level]) {
                result[value.level] = []
            }
            result[value.level].push(value.id)
            return result
        }, {})
    filter(query.value)
})

const SortByPrice = (order) => {
    axios.post(`/globalfilter/products?price=${order}`).then((response) => {
        filteredData.value = response.data
    })
}

const PriceAscSort = () => {
    sortOptions.forEach((option) => {
        option.current = false
    })
    sortOptions[0].current = true
    SortByPrice('asc')
}

const PriceDescSort = () => {
    sortOptions.forEach((option) => {
        option.current = false
    })
    sortOptions[1].current = true
    SortByPrice('desc')
}

const AlphabeticalSort = (order) => {
    axios.post(`/globalfilter/products?name=${order}`).then((response) => {
        filteredData.value = response.data
    })
}

const AlphabeticalAscSort = () => {
    sortOptions.forEach((option) => {
        option.current = false
    })
    sortOptions[2].current = true
    AlphabeticalSort('asc')
}

const AlphabeticalDescSort = () => {
    sortOptions.forEach((option) => {
        option.current = false
    })
    sortOptions[3].current = true
    AlphabeticalSort('desc')
}
const sortOptions = [
    {
        name: 'Prix: Bas à Haut',
        href: '#',
        current: false,
        function: PriceAscSort,
    },
    {
        name: 'Prix : Haut à Bas',
        href: '#',
        current: false,
        function: PriceDescSort,
    },
    { name: 'A à Z', href: '#', current: false, function: AlphabeticalAscSort },
    { name: 'Z à A', href: '#', current: false, function: AlphabeticalDescSort },
]

const GridType = ref('grid')

const ToggleGridType = () => {
    if (GridType.value === 'grid') {
        GridType.value = 'list'
    } else {
        GridType.value = 'grid'
    }
}

let settings = {
    // carousel settings
    settings: {
        itemsToShow: 1,
        snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
        // 700px and up
        0: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        500: {
            itemsToShow: 2,
            snapAlign: 'center',
        },
        800: {
            itemsToShow: 3,
            snapAlign: 'center',
        },
        // 1024 and up
        1000: {
            itemsToShow: 4,
            snapAlign: 'center',
        },
    },
}

const filters = [
    {
        id: 'brand',
        name: 'Brand',
        filter: 'by_brand_id',
        param: 'brand_id',
        options: props.brands.map((brand) => {
            return {
                value: brand.id,
                label: brand.name,
                checked: false,
                filter: 'by_brand_id',
                param: 'brand_id',
            }
        }),
    },
]
</script>

<style scoped></style>
