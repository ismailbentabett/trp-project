<template>
    <AnimatedHeader />
    <Disclosure as="header" class="bg-white shadow" v-slot="{ open }">
        <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
            <div class="relative h-16 flex justify-between">
                <div class="relative z-10 px-2 flex lg:px-0">
                    <div class="flex-shrink-0 flex items-center">
                        <a href="/" class="cursor-pointer">
                            <span class="sr-only">try</span>
                            <img v-if="Logo" class="block h-14 w-auto" alt="trp" :src="Logo" />
                        </a>
                    </div>
                </div>
                <div class="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
                    <div class="w-full sm:max-w-xs">
                        <label for="search" class="sr-only">Search</label>
                        <div class="relative">
                            <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                <Bars2Icon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </div>
                            <div>
                                <div class="relative mt-1 flex items-center">
                                    <input
                                        v-model="searchInput"
                                        type="text"
                                        name="search"
                                        id="search"
                                        class="block w-full rounded-md border-gray-300 pr-12 shadow-sm focus:border-cerulean-500 focus:ring-cerulean-500 sm:text-sm"
                                    />
                                    <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                                        <kbd
                                            class="inline-flex items-center rounded border border-gray-200 px-2 font-sans text-sm font-medium text-gray-400"
                                            >⌘K</kbd
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CommandPalette :searchInput="searchInput" />
                </div>
                <div class="relative z-10 flex items-center lg:hidden">
                    <!-- Mobile menu button -->
                    <DisclosureButton
                        class="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cerulean-500"
                    >
                        <span class="sr-only">Open menu</span>
                        <Bars2Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                        <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                    </DisclosureButton>
                </div>
                <div class="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                    <button
                        type="button"
                        @click="openCartSlideOver"
                        class="relative inline-flex items-center p-3 text-sm font-medium text-center text-gray-400 hover:text-gray-500 focus:ring-4 focus:outline-none"
                    >
                        <span class="sr-only">View cart</span>
                        <ShoppingCartIcon class="h-6 w-6" aria-hidden="true" />

                        <div
                            class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900"
                        >
                            {{ cartCount }}
                        </div>
                    </button>
                    <CartSlideOver :open="openCart" />

                    <OrdersSlideOver :open="openOrders" />

                    <!-- Profile dropdown -->
                    <Menu as="div" class="flex-shrink-0 relative ml-4">
                        <div>
                            <MenuButton
                                class="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cerulean-500"
                            >
                                <span class="sr-only">Open user menu</span>
                                <div>
                                    <Avatar :user="user" class="h-8 w-8 rounded-full" alt="" />
                                </div>
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
                                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none"
                            >
                                <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                                    <a
                                        :href="item.href"
                                        @click="item.onclick"
                                        :class="[
                                            active ? 'cursor-pointer bg-gray-100' : '',
                                            'block py-2 px-4 text-sm text-gray-700 cursor-pointer',
                                        ]"
                                        >{{ item.name }}</a
                                    >
                                </MenuItem>
                            </MenuItems>
                        </transition>
                    </Menu>
                </div>
            </div>
        </div>

        <DisclosurePanel as="nav" class="lg:hidden" aria-label="Global">
            <div class="pt-2 pb-3 px-2 space-y-1">
                <DisclosureButton
                    v-for="item in navigation"
                    :key="item.name"
                    as="a"
                    :href="item.href"
                    :class="[
                        item.current
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                        'block rounded-md py-2 px-3 text-base font-medium',
                    ]"
                    :aria-current="item.current ? 'page' : undefined"
                    >{{ item.name }}</DisclosureButton
                >
            </div>
            <div class="border-t border-gray-200 pt-4 pb-3">
                <div class="px-4 flex items-center">
                    <div class="flex-shrink-0">
                        <Avatar :user="user" class="h-10 w-10 rounded-full" alt="" />
                    </div>
                    <div class="ml-3">
                        <div class="text-base font-medium text-gray-800">
                            {{ user.name }}
                        </div>
                        <div class="text-sm font-medium text-gray-500">
                            {{ user.email }}
                        </div>
                    </div>
                    <button
                        type="button"
                        @click="openCartSlideOver"
                        class="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cerulean-500"
                    >
                        <span class="sr-only">View cart</span>
                        <ShoppingCartIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                    <CartSlideOver :open="openCart" />

                    <OrdersSlideOver :open="openOrders" />
                </div>
                <div class="mt-3 px-2 space-y-1">
                    <DisclosureButton
                        v-for="item in userNavigation"
                        :key="item.name"
                        as="a"
                        :href="item.href"
                        @click="item.onclick"
                        class="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    >
                        {{ item.name }}
                    </DisclosureButton>
                </div>
            </div>
        </DisclosurePanel>
        <div>
            <!-- Mobile menu -->
            <TransitionRoot as="template" :show="mobileMenuOpen == true">
                <Dialog as="div" class="relative z-40 lg:hidden" @close="mobileMenuOpen = false">
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
                            enter-from="-translate-x-full"
                            enter-to="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leave-from="translate-x-0"
                            leave-to="-translate-x-full"
                        >
                            <DialogPanel
                                class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
                            >
                                <div class="flex px-4 pt-5 pb-2">
                                    <button
                                        type="button"
                                        class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        @click="mobileMenuOpen = false"
                                    >
                                        <span class="sr-only">Close menu</span>
                                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                <!-- Links -->
                                <TabGroup as="div" class="mt-2">
                                    <div class="border-b border-gray-200">
                                        <TabList class="-mb-px flex flex-col">
                                            <Tab
                                                as="template"
                                                v-for="category in subnavigation.categories"
                                                :key="category.name"
                                                v-slot="{ selected }"
                                            >
                                                <button
                                                    :class="[
                                                        selected
                                                            ? 'text-cerulean-600 border-cerulean-600'
                                                            : 'text-gray-900 border-transparent',
                                                        'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium',
                                                    ]"
                                                >
                                                    {{ category.name }}
                                                </button>
                                            </Tab>
                                        </TabList>
                                    </div>
                                    <TabPanels as="template">
                                        <TabPanel
                                            v-for="category in subnavigation.categories"
                                            :key="category.name"
                                            class="space-y-10 px-4 pt-10 pb-8"
                                        >
                                            <div v-for="section in category.sections" :key="section.name">
                                                <p
                                                    :id="`${category.id}-${section.id}-heading-mobile`"
                                                    class="font-medium text-gray-900"
                                                >
                                                    {{ section.name }}
                                                </p>
                                                <ul
                                                    role="list"
                                                    :aria-labelledby="`${category.id}-${section.id}-heading-mobile`"
                                                    class="mt-6 flex flex-col space-y-6"
                                                >
                                                    <li
                                                        v-for="item in section.items"
                                                        :key="item.name"
                                                        class="flow-root"
                                                    >
                                                        <a
                                                            :href="item.url"
                                                            class="-m-2 block p-2 text-gray-500 cursor-pointer"
                                                            >{{ item.name }}</a
                                                        >
                                                    </li>
                                                </ul>
                                            </div>
                                        </TabPanel>
                                    </TabPanels>
                                </TabGroup>

                                <div class="space-y-6 border-t border-gray-200 py-6 px-4">
                                    <div v-for="page in subnavigation.pages" :key="page.name" class="flow-root">
                                        <a :href="page.url" class="-m-2 block p-2 font-medium text-gray-900">{{
                                            page.name
                                        }}</a>
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </Dialog>
            </TransitionRoot>

            <header class="relative bg-white">
                <nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="border-b border-gray-200">
                        <div class="flex h-16 items-center">
                            <button
                                type="button"
                                class="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                                @click="mobileMenuOpen = true"
                            >
                                <span class="sr-only">Open menu</span>
                                <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                            </button>

                            <!-- Flyout menus -->
                            <PopoverGroup class="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div class="flex h-full space-x-8">
                                    <Popover
                                        v-for="category in subnavigation.categories"
                                        :key="category.name"
                                        class="flex"
                                        v-slot="{ open }"
                                    >
                                        <div class="relative flex">
                                            <PopoverButton
                                                :class="[
                                                    open
                                                        ? 'border-cerulean-600 text-cerulean-600'
                                                        : 'border-transparent text-gray-700 hover:text-gray-800',
                                                    'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out',
                                                ]"
                                            >
                                                {{ category.name }}
                                                <svg
                                                    class="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </PopoverButton>
                                        </div>

                                        <transition
                                            enter-active-class="transition ease-out duration-200"
                                            enter-from-class="opacity-0"
                                            enter-to-class="opacity-100"
                                            leave-active-class="transition ease-in duration-150"
                                            leave-from-class="opacity-100"
                                            leave-to-class="opacity-0"
                                        >
                                            <PopoverPanel
                                                class="absolute inset-x-0 top-full z-20 text-sm text-gray-500"
                                            >
                                                <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                                                <div
                                                    class="absolute inset-0 top-1/2 bg-white shadow"
                                                    aria-hidden="true"
                                                />

                                                <div class="relative bg-white">
                                                    <div class="w-full px-10 sm:px-10 lg:px-10">
                                                        <div class="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                                            <div class="row-start-1 flex space-x-10 text-sm">
                                                                <div
                                                                    v-for="section in category.sections"
                                                                    :key="section.name"
                                                                >
                                                                    <p
                                                                        :id="`${section.name}-heading`"
                                                                        class="font-medium text-gray-900"
                                                                    >
                                                                        {{ section.name }}
                                                                    </p>
                                                                    <ul
                                                                        role="list"
                                                                        :aria-labelledby="`${section.name}-heading`"
                                                                        class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                    >
                                                                        <li
                                                                            v-for="item in section.items"
                                                                            :key="item.name"
                                                                            class="flex"
                                                                        >
                                                                            <a
                                                                                :href="item.url"
                                                                                class="hover:text-gray-800 cursor-pointer"
                                                                                >{{ item.name }}</a
                                                                            >
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </PopoverPanel>
                                        </transition>
                                    </Popover>

                                    <a
                                        v-for="page in subnavigation.pages"
                                        :key="page.name"
                                        :href="page.url"
                                        class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                        >{{ page.name }}</a
                                    >
                                </div>
                            </PopoverGroup>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    </Disclosure>
</template>

<script>
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
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'

import { BellIcon, ShoppingBagIcon, ShoppingCartIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { PhoneIcon } from '@heroicons/vue/24/solid'
import AnimatedHeader from './AnimatedHeader.vue'
import CommandPalette from './CommandPalette.vue'

import { useCartStore } from '@/stores/CartStore'

import { EnvelopeIcon } from '@heroicons/vue/24/solid'

import { Bars2Icon, Bars3Icon } from '@heroicons/vue/24/solid'

import Avatar from '@/Components/Avatar.vue'
import CartSlideOver from '@/Components/CartSlideOver.vue'
import DropdownLink from '@/Components/DropdownLink.vue'
import OrdersSlideOver from '@/Components/OrdersSlideOver.vue'
import { computed, ref, watchEffect } from 'vue'
import NavDropDown from './NavDropDown.vue'

import { watch } from 'vue'
//usepage
import { usePage } from '@inertiajs/vue3'

const page = usePage()

const user = computed(() => page.props.auth.user)
const Logo = ref(null)
watchEffect(() => {
    axios.get(route('logo.index')).then((response) => {
        Logo.value = response.data
    })
})

const signout = () => {
    axios
        .post(route('logout'))
        .then((response) => {
            this.$router.push('/login')
        })
        .catch((error) => {
            location.reload()
        })
}

const navigation = []

const userNavigation = [
    { name: 'Votre profil', href: '/profile', onclick: null },
    {
        name: 'Commandes',
        href: null,
        onclick: () => {
            openOrdersSlideOver()
        },
    },
    { name: 'Paramètres', href: '/settings/profile', onclick: null },
    { name: 'Se déconnecter', href: '#', onclick: signout },
]

let menuItems = ref([])

const openSearch = ref(false)
const searchInput = ref('')

watch(searchInput, (value) => {
    if (value.length > 0) {
        openSearch.value = true
    } else {
        openSearch.value = false
    }
})

const openCart = ref(false)
const openOrders = ref(false)

const openCartSlideOver = () => {
    openCart.value = !openCart.value
}

const openOrdersSlideOver = () => {
    openOrders.value = !openOrders.value
}

export default {
    components: {
        Disclosure,
        PhoneIcon,
        EnvelopeIcon,
        DisclosureButton,
        DisclosurePanel,
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        BellIcon,
        Bars2Icon,
        Bars3Icon,
        Bars2Icon,
        XMarkIcon,
        NavDropDown,
        DropdownLink,
        ShoppingCartIcon,
        CommandPalette,
        OrdersSlideOver,
        CartSlideOver,
        ShoppingBagIcon,
        Avatar,
        Popover,
        PopoverButton,
        PopoverGroup,
        PopoverPanel,
        Dialog,
        DialogPanel,

        Tab,
        TabGroup,
        TabList,
        TabPanel,
        TabPanels,
        TransitionChild,
        TransitionRoot,
    },
    setup() {
        const cartStore = useCartStore()
        cartStore.CartCount()

        const cartCount = computed(() => cartStore.getCartCount)

        const mobileMenuOpen = ref(true)
        /*
            const subnavigation = {
                categories: [
                    {
                        id: 'women',
                        name: 'Women',

                        sections: [
                            {
                                id: 'clothing',
                                name: 'Clothing',
                                items: [
                                    { name: 'Tops', href: '#' },

                                ],
                            },
                            {
                                id: 'accessories',
                                name: 'Accessories',
                                items: [
                                    { name: 'Watches', href: '#' },

                                ],
                            },
                            {
                                id: 'brands',
                                name: 'Brands',
                                items: [
                                    { name: 'Full Nelson', href: '#' },

                                ],
                            },
                        ],
                    },
                    {
                        id: 'men',
                        name: 'Men',

                        sections: [
                            {
                                id: 'clothing',
                                name: 'Clothing',
                                items: [
                                    { name: 'Tops', href: '#' },
                                ],
                            },
                            {
                                id: 'accessories',
                                name: 'Accessories',
                                items: [
                                    { name: 'Watches', href: '#' },
                                ],
                            },
                            {
                                id: 'brands',
                                name: 'Brands',
                                items: [
                                    { name: 'Re-Arranged', href: '#' },
                                ],
                            },
                        ],
                    },
                ],
                pages: [
                    { name: 'Company', href: '#' },
                    { name: 'Stores', href: '#' },
                ],
            } */

        // Function to fetch data and build hierarchy
        async function fetchAndBuildHierarchy() {
            try {
                const response = await axios.get('/navbar')
                const data = response.data

                const originalData = JSON.parse(JSON.stringify(data))

                const categories = []

                // Map data into categories
                originalData.forEach((item) => {
                    if (!item.parent_id || item.parent_id === -1) {
                        const category = {
                            id: item.id,
                            name: item.title,
                            sections: [],
                        }

                        // Map sections
                        category.sections = originalData
                            .filter((section) => section.parent_id === item.id)
                            .map((section) => {
                                return {
                                    id: section.id,
                                    name: section.title,
                                    url: section.url,
                                    items: [],
                                }
                            })

                        // Map items within sections
                        category.sections.forEach((section) => {
                            section.items = originalData
                                .filter((item) => item.parent_id === section.id)
                                .map((item) => {
                                    return {
                                        name: item.title,
                                        url: item.url,
                                    }
                                })
                        })

                        categories.push(category)
                    }
                })

                // Check if the data has changed
                const newData = {
                    categories,
                }

                const cachedData = JSON.parse(localStorage.getItem('navData'))

                if (JSON.stringify(newData) !== JSON.stringify(cachedData)) {
                    localStorage.setItem('navData', JSON.stringify(newData))
                }

                return newData
            } catch (error) {
                console.error('Error fetching data:', error)
                return { categories: [] }
            }
        }

        const subnavigation = ref({ categories: [] })

        fetchAndBuildHierarchy().then((response) => {
            subnavigation.value.categories = response.categories.filter((category) => category.sections.length > 0)

            subnavigation.value.pages = response.categories.filter((category) => category.sections.length == 0)
        })
        function UrlExists(url) {
            var http = new XMLHttpRequest()
            http.open('HEAD', url, false)
            http.send()
            return http.status != 404
        }

        return {
            user,
            navigation,
            userNavigation,
            openSearch,
            searchInput,
            openCart,
            openOrders,
            openCartSlideOver,
            openOrdersSlideOver,
            menuItems,
            subnavigation,
            mobileMenuOpen,
            Logo,
            UrlExists,
            cartCount,
        }
    },
}
</script>
