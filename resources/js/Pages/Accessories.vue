<template>
    <AuthenticatedLayout title="Accessoires" description="Accessoires">
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
                                        <h2 class="text-lg font-medium text-gray-900">Filtres</h2>
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
                                        <h3 class="sr-only">Catégories</h3>

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
                                                            v-model="form.checkbox"
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
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </Dialog>
                </TransitionRoot>

                <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
                        <h1 class="text-4xl font-bold tracking-tight text-gray-900">accessoires</h1>

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

                    <section aria-labelledby="accessories-heading" class="pt-6 pb-24">
                        <h2 id="accessories-heading" class="sr-only">accessories</h2>

                        <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            <!-- Filters -->
                            <form class="hidden lg:block">
                                <h3 class="sr-only">Categories</h3>

                                <Disclosure
                                    as="div"
                                    v-for="section in filters"
                                    :key="section.id"
                                    class="border-b border-gray-200 py-6"
                                    v-slot="{ open }"
                                >
                                    <h3 class="-my-3 flow-root">
                                        <DisclosureButton
                                            class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                                        >
                                            <span class="font-medium text-gray-900">{{ section.name }}</span>
                                            <span class="ml-6 flex items-center">
                                                <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true" />
                                                <MinusIcon v-else class="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        </DisclosureButton>
                                    </h3>
                                    <DisclosurePanel class="pt-6">
                                        <div class="space-y-4">
                                            <div
                                                v-for="(option, optionIdx) in section.options"
                                                :key="option.value"
                                                class="flex items-center"
                                            >
                                                <input
                                                    v-model="form.checkbox"
                                                    :id="`filter-${section.id}-${optionIdx}`"
                                                    :name="`${section.id}[]`"
                                                    :value="option"
                                                    type="checkbox"
                                                    :checked="option.checked"
                                                    class="h-4 w-4 rounded border-gray-300 text-cerulean-600 focus:ring-cerulean-500"
                                                />
                                                <label
                                                    :for="`filter-${section.id}-${optionIdx}`"
                                                    class="ml-3 text-sm text-gray-600"
                                                    >{{ option.label }}</label
                                                >
                                            </div>
                                        </div>
                                    </DisclosurePanel>
                                </Disclosure>
                            </form>
                            <!-- Product grid -->
                            <div class="lg:col-span-3">
                                <!-- Replace with your content -->
                                <div class="h-96 rounded-lg lg:h-full">
                                    <div v-if="filteredData.data.length == 0" role="list" class="col-span-3">
                                        <EmptyState />
                                    </div>
                                    <div
                                        v-else
                                        :class="
                                            GridType === 'grid'
                                                ? 'grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8'
                                                : 'grid grid-cols-1 gap-y-6'
                                        "
                                    >
                                        <AccessoryCard
                                            v-for="accessory in filteredData.data"
                                            :key="accessory.id"
                                            :accessory="accessory"
                                            :addToCartBool="false"
                                            class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white"
                                        />
                                    </div>
                                </div>
                                <Pagination :links="filteredData.links" />
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import AccessoryCard from '@/Components/AccessoryCard.vue'
import EmptyState from '@/Components/EmptyState.vue'
import Pagination from '@/Components/Pagination.vue'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
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
import axios from 'axios'
import { defineProps, ref } from 'vue'
const props = defineProps({
    accessories: {
        type: Object,
    },
    categories: {
        type: Object,
    },
    brands: {
        type: Object,
    },
})

const filters = [
    {
        id: 'category',
        name: 'Category',
        filter: 'by_category_id',
        param: 'category_id',
        options: props.categories.map((category) => {
            return {
                value: category.id,
                label: category.name,
                checked: false,
                filter: 'by_category_id',
                param: 'category_id',
            }
        }),
    },
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

import { useForm, usePage } from '@inertiajs/vue3'
import { watchEffect } from 'vue'

const mobileFiltersOpen = ref(false)

const filteredData = ref([])
const filterAccessories = (filters) => {
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

    axios.post(`accessories/filter?${url}`).then((response) => {
        filteredData.value = response.data
    })
}

const page = usePage()
const pageUrl = page.url

const paramId = ref('')
const type = ref('')
if (pageUrl.includes('?')) {
    paramId.value = pageUrl.split('paramId=')[1].split('&')[0]
    type.value = pageUrl.split('type=')[1].split('&')[0]
}
const form = useForm({
    checkbox: paramId.value
        ? [
              filters
                  .find((filter) => {
                      return filter.id === type.value
                  })
                  .options.find((option) => {
                      return option.value == paramId.value
                  }),
          ]
        : [],
})

const query = ref('')
watchEffect(() => {
    query.value = form.checkbox.reduce((result, value) => {
        result[value.param] = result[value.param] || []
        result[value.param].push(value.value)

        return result
    }, {})

    filterAccessories(query.value)
})

const SortByPrice = (order) => {
    axios.post(`accessories/filter?price=${order}`).then((response) => {
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
    axios.post(`accessories/filter?name=${order}`).then((response) => {
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
        name: 'Prix : Du plus bas au plus haut',
        href: '#',
        current: false,
        function: PriceAscSort,
    },
    {
        name: 'Prix : du plus haut au plus bas',
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
</script>
