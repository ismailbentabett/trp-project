<template>
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-10" @close="open = false">
            <div class="fixed inset-0" />

            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                        <TransitionChild
                            as="template"
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enter-from="translate-x-full"
                            enter-to="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leave-from="translate-x-0"
                            leave-to="translate-x-full"
                        >
                            <DialogPanel class="pointer-events-auto w-screen max-w-full">
                                <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                    <div class="px-4 sm:px-6">
                                        <div class="flex items-start justify-between">
                                            <DialogTitle class="text-lg font-medium text-gray-900">
                                                <!-- {{ filteredData.product.name }} -->
                                                Accessoires
                                            </DialogTitle>
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
                                    <div class="relative flex-1 px-4 sm:px-6">
                                        <div class="bg-white">
                                            <div>
                                                <!-- Mobile filter dialog -->
                                                <TransitionRoot as="template" :show="mobileFiltersOpen">
                                                    <Dialog
                                                        as="div"
                                                        class="relative z-40 lg:hidden"
                                                        @close="mobileFiltersOpen = false"
                                                    >
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
                                                                        <h2 class="text-lg font-medium text-gray-900">
                                                                            Filters
                                                                        </h2>
                                                                        <button
                                                                            type="button"
                                                                            class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                                                            @click="mobileFiltersOpen = false"
                                                                        >
                                                                            <span class="sr-only">Close menu</span>
                                                                            <XMarkIcon
                                                                                class="h-6 w-6"
                                                                                aria-hidden="true"
                                                                            />
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
                                                                                    <span
                                                                                        class="font-medium text-gray-900"
                                                                                        >Products Filter</span
                                                                                    >
                                                                                    <span
                                                                                        class="ml-6 flex items-center"
                                                                                    >
                                                                                        <PlusIcon
                                                                                            v-if="!open"
                                                                                            class="h-5 w-5"
                                                                                            aria-hidden="true"
                                                                                        />
                                                                                        <MinusIcon
                                                                                            v-else
                                                                                            class="h-5 w-5"
                                                                                            aria-hidden="true"
                                                                                        />
                                                                                    </span>
                                                                                </DisclosureButton>
                                                                            </h3>
                                                                            <DisclosurePanel class="bg-white py-5">
                                                                                <TreeViewAccessory
                                                                                    :type_accessoire="
                                                                                        filteredData.types
                                                                                    "
                                                                                />
                                                                            </DisclosurePanel>
                                                                        </Disclosure>
                                                                    </form>
                                                                </DialogPanel>
                                                            </TransitionChild>
                                                        </div>
                                                    </Dialog>
                                                </TransitionRoot>

                                                <main class="mx-auto px-4 sm:px-6 lg:px-8">
                                                    <div
                                                        class="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6"
                                                    >
                                                        <h1
                                                            class="text-4xl font-bold tracking-tight text-gray-900"
                                                        ></h1>

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
                                                                                        option.current
                                                                                            ? 'font-medium text-gray-900'
                                                                                            : 'text-gray-500',
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
                                                                <Squares2X2Icon
                                                                    v-if="GridType === 'grid'"
                                                                    class="h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                                <QueueListIcon
                                                                    v-if="GridType === 'list'"
                                                                    class="h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
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

                                                    <!-- filtering -->
                                                    <section aria-labelledby="products-heading" class="pt-6 pb-24">
                                                        <h2 id="products-heading" class="sr-only">Accessories</h2>

                                                        <div>
                                                            <!-- Filters -->
                                                            <splitpanes
                                                                :push-other-panes="false"
                                                                style="height: 100vh; width: 100%"
                                                                class="w-full grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 default-theme"
                                                            >
                                                                <pane
                                                                    style="
                                                                        background-color: white !important ;
                                                                        border: none;
                                                                    "
                                                                    min-size="50"
                                                                    size="50"
                                                                    class="hidden lg:block p-4"
                                                                >
                                                                    <form class="bg-white bo rounded p-4">
                                                                        <h3 class="sr-only">Categories</h3>

                                                                        <Disclosure
                                                                            as="div"
                                                                            class="border-b border-gray-200 py-6"
                                                                            v-slot="{ open }"
                                                                        >
                                                                            <h3 class="-my-3 flow-root">
                                                                                <DisclosureButton
                                                                                    class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                                                                                >
                                                                                    <span
                                                                                        class="font-medium text-gray-900"
                                                                                        >Accessory Filter</span
                                                                                    >
                                                                                    <span
                                                                                        class="ml-6 flex items-center"
                                                                                    >
                                                                                        <PlusIcon
                                                                                            v-if="!open"
                                                                                            class="h-5 w-5"
                                                                                            aria-hidden="true"
                                                                                        />
                                                                                        <MinusIcon
                                                                                            v-else
                                                                                            class="h-5 w-5"
                                                                                            aria-hidden="true"
                                                                                        />
                                                                                    </span>
                                                                                </DisclosureButton>
                                                                            </h3>
                                                                            <DisclosurePanel class="bg-white py-5">
                                                                                <TreeViewAccessory
                                                                                    :type_accessoire="
                                                                                        filteredData.types
                                                                                    "
                                                                                />
                                                                            </DisclosurePanel>
                                                                        </Disclosure>
                                                                    </form>
                                                                </pane>
                                                                <pane
                                                                    class="w-full p-4 bg-white"
                                                                    style="background-color: white !important"
                                                                    size="150"
                                                                >
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
                                                                                <AccessoryCard
                                                                                    v-for="accessory in filteredData.accessories"
                                                                                    :key="accessory.id"
                                                                                    :accessory="accessory"
                                                                                    :addToCartBool="false"
                                                                                    class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <!--                                 <Pagination :links="filteredData.links" />
 -->
                                                                    </div>
                                                                </pane>
                                                            </splitpanes>
                                                        </div>
                                                    </section>
                                                </main>
                                            </div>
                                        </div>
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
import AccessoryCard from '@/Components/AccessoryCard.vue'
import EmptyState from '@/Components/EmptyState.vue'
import Pagination from '@/Components/Pagination.vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import axios from 'axios'
import { Pane, Splitpanes } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import { defineProps, ref, watchEffect } from 'vue'

const props = defineProps({
    type_accessoire: {
        type: Array,
        default: () => [],
    },
    productId: {
        type: Number,
    },
    open: {
        type: Boolean,
        default: false,
    },
})

const open = ref(false)

watchEffect(() => {
    open.value = props.open

    axios.get(`/globalfilter/get-product-accessories-by-id/${props.productId}`).then((response) => {
        filteredData.value = response.data
    })
})

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import {
    ChevronDownIcon,
    FunnelIcon,
    MinusIcon,
    PlusIcon,
    QueueListIcon,
    Squares2X2Icon,
} from '@heroicons/vue/20/solid'

import TreeViewAccessory from '@/Components/TreeViewAccessory.vue'
import { useGlobalFilterStore } from '@/stores/GlobalFilterStore'

const globalFilterStore = useGlobalFilterStore()

const mobileFiltersOpen = ref(false)

const filteredData = ref([])

const filter = (filters) => {
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
        filteredData.value.accessories = response.data.data
    })
}

const query = ref('')

watchEffect(() => {
    query.value = globalFilterStore.getAccessoryTreeData
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
    axios.post(`/globalfilter/accessories?price=${order}`).then((response) => {
        filteredData.value.accessories = response.data.data
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
    axios.post(`/globalfilter/accessories?name=${order}`).then((response) => {
        filteredData.value.accessories = response.data.data
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
</script>

<style scoped></style>
