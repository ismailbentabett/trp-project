<template>
    <div class="flex min-h-full">
        <TransitionRoot as="template" :show="sidebarOpen">
            <Dialog as="div" class="relative z-40 lg:hidden" @close="sidebarOpen = false">
                <TransitionChild
                    as="template"
                    enter="transition-opacity ease-linear duration-300"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
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
                        <DialogPanel class="relative flex w-full max-w-xs flex-1 flex-col bg-cerulean-800 pt-5 pb-4">
                            <TransitionChild
                                as="template"
                                enter="ease-in-out duration-300"
                                enter-from="opacity-0"
                                enter-to="opacity-100"
                                leave="ease-in-out duration-300"
                                leave-from="opacity-100"
                                leave-to="opacity-0"
                            >
                                <div class="absolute top-0 right-0 -mr-12 pt-2">
                                    <button
                                        type="button"
                                        class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        @click="sidebarOpen = false"
                                    >
                                        <span class="sr-only">Close sidebar</span>
                                        <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                                    </button>
                                </div>
                            </TransitionChild>

                            <div class="mt-5 h-0 flex-1 overflow-y-auto">
                                <nav class="px-2">
                                    <div class="space-y-1">
                                        <template v-for="item in navigation" :key="item.name">
                                            <a
                                                v-if="item.role == true"
                                                :href="item.href"
                                                :class="[
                                                    item.current
                                                        ? 'bg-cerulean-900 text-white'
                                                        : 'text-gray-300 hover:bg-cerulean-700 hover:text-white',
                                                    'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                                                ]"
                                                :aria-current="item.current ? 'page' : undefined"
                                            >
                                                <component
                                                    :is="item.icon"
                                                    :class="[
                                                        item.current
                                                            ? 'text-gray-300'
                                                            : 'text-gray-400 group-hover:text-gray-300',
                                                        'mr-4 flex-shrink-0 h-6 w-6',
                                                    ]"
                                                    aria-hidden="true"
                                                />
                                                {{ item.name }}
                                            </a>
                                        </template>
                                    </div>
                                </nav>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                    <div class="w-14 flex-shrink-0" aria-hidden="true">
                        <!-- Dummy element to force sidebar to shrink to fit close icon -->
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>

        <!-- Static sidebar for desktop -->
        <div class="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64">
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <div class="flex min-h-0 flex-1 flex-col">
                <div class="flex flex-1 flex-col overflow-y-auto bg-cerulean-800">
                    <nav class="flex-1 px-2 py-4">
                        <div class="space-y-1">
                            <template v-for="item in navigation" :key="item.name">
                                <a
                                    v-if="item.role == true"
                                    :href="item.href"
                                    :class="[
                                        item.current
                                            ? 'bg-cerulean-900 text-white'
                                            : 'text-gray-300 hover:bg-cerulean-700 hover:text-white',
                                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                                    ]"
                                    :aria-current="item.current ? 'page' : undefined"
                                >
                                    <component
                                        :is="item.icon"
                                        :class="[
                                            item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                                            'mr-3 flex-shrink-0 h-6 w-6',
                                        ]"
                                        aria-hidden="true"
                                    />
                                    {{ item.name }}
                                </a>
                            </template>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <div class="flex w-0 flex-1 flex-col lg:pl-64">
            <AuthenticatedLayout title="Soutien" description="Soutien">
                <div class="sticky top-0 z-5 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white">
                    <button
                        type="button"
                        class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900 lg:hidden"
                        @click="sidebarOpen = true"
                    >
                        <span class="sr-only">Open sidebar</span>
                        <Bars3BottomLeftIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div class="flex flex-1 justify-between px-4">
                        <div></div>
                        <div class="ml-4 flex items-center lg:ml-6">
                            <Link
                                type="button"
                                href="/tickets/create"
                                class="inline-flex items-center rounded-md border border-transparent bg-cerulean-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                            >
                                Créer un nouveau ticket
                            </Link>
                        </div>
                    </div>
                </div>
                <main class="flex-1">
                    <slot />
                </main>
            </AuthenticatedLayout>
        </div>
    </div>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { Link } from '@inertiajs/vue3'
import { ref } from 'vue'

import { LockClosedIcon, LockOpenIcon } from '@heroicons/vue/20/solid'
import {
    Bars3BottomLeftIcon,
    Bars4Icon,
    HomeIcon,
    UserCircleIcon as UserCircleIconOutline,
    XMarkIcon,
} from '@heroicons/vue/24/solid'

//usepage
import { usePage } from '@inertiajs/vue3'
import moment from 'moment'
import { computed } from 'vue'

const page = usePage()

const user = computed(() => page.props.auth.user)
const props = defineProps({
    ticket: {
        type: Array,
        required: true,
    },
    openUser: {
        type: Object,
        required: true,
    },
    tracking: {
        type: Object,
        required: true,
    },
})

const pageUrl = page.url

const pageProps = usePage().props

const auth = computed(() => pageProps.auth)
const is_user = computed(() => auth.value.is_user)
const is_admin = computed(() => auth.value.is_admin)
const is_editor = computed(() => auth.value.is_editor)
const is_super_admin = computed(() => auth.value.is_super_admin)
const is_customer = computed(() => auth.value.is_customer)
const navigation = [
    {
        name: 'All tickets',
        href: '/tickets',
        icon: HomeIcon,
        current: pageUrl == '/tickets',
        role: is_admin.value || is_super_admin.value || is_editor.value,
    },
    {
        name: 'My tickets',
        href: '/tickets/my',
        icon: Bars4Icon,
        current: pageUrl == '/tickets/my',
        role: true,
    },
    {
        name: 'Assigned To Me',
        href: '/tickets/assigned-to-me',
        icon: UserCircleIconOutline,
        current: pageUrl == '/tickets/assigned-to-me',
        role: is_admin.value || is_super_admin.value || is_editor.value,
    },
    {
        name: 'Closed',
        href: '/tickets/closed',
        icon: LockClosedIcon,
        current: pageUrl == '/tickets/closed',
        role: true,
    },
    {
        name: 'Opened',
        href: '/tickets/opened',
        icon: LockOpenIcon,
        current: pageUrl == '/tickets/opened',
        role: true,
    },
]

const activity = [
    {
        id: 1,
        type: 'comment',
        person: { name: 'Eduardo Benz', href: '#' },
        imageUrl:
            'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ',
        date: '6d ago',
    },
    {
        id: 2,
        type: 'assignment',
        person: { name: 'Hilary Mahy', href: '#' },
        assigned: { name: 'Kristin Watson', href: '#' },
        date: '2d ago',
    },
    {
        id: 3,
        type: 'tags',
        person: { name: 'Hilary Mahy', href: '#' },
        tags: [
            { name: 'Bug', href: '#', color: 'bg-cerulean-500' },
            { name: 'Accessibility', href: '#', color: 'bg-cerulean-500' },
        ],
        date: '6h ago',
    },
    {
        id: 4,
        type: 'comment',
        person: { name: 'Jason Meyers', href: '#' },
        imageUrl:
            'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.',
        date: '2h ago',
    },
]

const sidebarOpen = ref(false)
const formatDate = (date) => {
    if (date) {
        return moment(String(date)).format('YYYY - MM - DD')
    }
}

const closeTicketAsResolved = () => {
    axios
        .post('/tickets/close-as-resolved', {
            ticket_id: props.ticket.id,
        })
        .then((response) => {})
}

const closeTicketAsUnresolved = () => {
    axios
        .post('/tickets/close-as-unresolved', {
            ticket_id: props.ticket.id,
        })
        .then((response) => {})
}

const reopenTicket = () => {
    axios
        .post('/tickets/reopen', {
            ticket_id: props.ticket.id,
        })
        .then((response) => {})
}

const reopenTicketAsUnreSolved = () => {
    axios
        .post('/tickets/reopen-as-unresolved', {
            ticket_id: props.ticket.id,
        })
        .then((response) => {})
}
</script>
