<template>
    <TransitionRoot :show="open" as="template" @after-leave="query = ''" appear>
        <Dialog as="div" class="relative z-10" @close="open = false">
            <TransitionChild
                as="template"
                enter="ease-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in duration-200"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <div class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
                <TransitionChild
                    as="template"
                    enter="ease-out duration-300"
                    enter-from="opacity-0 scale-95"
                    enter-to="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leave-from="opacity-100 scale-100"
                    leave-to="opacity-0 scale-95"
                >
                    <DialogPanel
                        class="mx-auto max-w-2xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
                    >
                        <AisInstantSearch :search-client="searchClient" :insights="true">
                            <AisConfigure
                                :hitsPerPage="2"
                                :attributesToRetrieve="['name']"
                                :attributesToSnippet="['name']"
                                :snippetEllipsisText="'…'"
                            />

                            <Combobox @update:modelValue="onSelect" v-model="query">
                                <div class="relative">
                                    <MagnifyingGlassIcon
                                        class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                    <ComboboxInput
                                        class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                                        placeholder="Search..."
                                        @change="query = $event.target.value"
                                    />
                                </div>
                                <AisIndex index-name="categories_index">
                                    <AisSearchBox v-model="query" class="hidden" />

                                    <AisHits>
                                        <template v-slot="{ items }">
                                            <ComboboxOptions
                                                class="max-h-80 scroll-py-2 divide-y divide-gray-100 overflow-y-auto"
                                            >
                                                <li class="p-2">
                                                    <h2
                                                        v-if="query === ''"
                                                        class="mt-4 mb-2 px-3 text-xs font-semibold text-gray-500"
                                                    >
                                                        Recherches récentes
                                                    </h2>
                                                    <ul class="text-sm text-gray-700">
                                                        <div
                                                            class="sticky top-0 z-10 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                                                        >
                                                            <h3>Catégories</h3>
                                                        </div>
                                                        <ComboboxOption v-for="item in items" :key="item.objectID">
                                                            <a
                                                                :href="`/products?paramId=${item.objectID}&type=category`"
                                                                class="text-gray-900 flex cursor-pointer select-none items-center rounded-md px-3 py-2 hover:bg-cerulean-600 hover:text-white"
                                                            >
                                                                <TagIcon
                                                                    :class="['h-6 w-6 flex-none  text-gray-400']"
                                                                    aria-hidden="true"
                                                                />
                                                                <span class="ml-3 flex-auto truncate">{{
                                                                    item.name
                                                                }}</span>
                                                                <span
                                                                    v-if="active"
                                                                    class="ml-3 flex-none text-cerulean-100"
                                                                    >Sauter à...</span
                                                                >
                                                            </a>
                                                        </ComboboxOption>
                                                    </ul>
                                                </li>
                                            </ComboboxOptions>

                                            <div
                                                v-if="items.length === 0 && query !== null && query !== ''"
                                                class="py-6 px-6 text-center sm:px-14"
                                            >
                                                <FolderIcon class="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
                                                <p class="mt-4 text-sm text-gray-900">
                                                    Nous n'avons pu trouver aucun résultat avec ce terme. S'il vous
                                                    plaît, essayez de nouveau. réessayer.
                                                </p>
                                            </div>
                                        </template>
                                    </AisHits>
                                </AisIndex>
                                <AisIndex index-name="products_index">
                                    <AisSearchBox v-model="query" class="hidden" />

                                    <AisHits>
                                        <template v-slot="{ items }">
                                            <ComboboxOptions
                                                class="max-h-80 scroll-py-2 divide-y divide-gray-100 overflow-y-auto"
                                            >
                                                <li class="p-2">
                                                    <h2
                                                        v-if="query === ''"
                                                        class="mt-4 mb-2 px-3 text-xs font-semibold text-gray-500"
                                                    >
                                                        Recherches récentes
                                                    </h2>
                                                    <ul class="text-sm text-gray-700">
                                                        <div
                                                            class="sticky top-0 z-10 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                                                        >
                                                            <h3>Produits</h3>
                                                        </div>

                                                        <ComboboxOption v-for="item in items" :key="item.objectID">
                                                            <a
                                                                :href="`/product/${item.objectID}`"
                                                                class="text-gray-900 flex cursor-pointer select-none items-center rounded-md px-3 py-2 hover:bg-cerulean-600 hover:text-white"
                                                            >
                                                                <BoltIcon
                                                                    :class="['h-6 w-6 flex-none  text-gray-400']"
                                                                    aria-hidden="true"
                                                                />
                                                                <span class="ml-3 flex-auto truncate">{{
                                                                    item.name
                                                                }}</span>
                                                                <span
                                                                    v-if="active"
                                                                    class="ml-3 flex-none text-cerulean-100"
                                                                    >Sauter à...</span
                                                                >
                                                            </a>
                                                        </ComboboxOption>
                                                    </ul>
                                                </li>
                                            </ComboboxOptions>

                                            <div
                                                v-if="items.length === 0 && query !== null && query !== ''"
                                                class="py-6 px-6 text-center sm:px-14"
                                            >
                                                <FolderIcon class="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
                                                <p class="mt-4 text-sm text-gray-900">
                                                    Nous n'avons trouvé aucun résultat avec ce terme. S'il vous plaît,
                                                    essayez de nouveau. réessayer.
                                                </p>
                                            </div>
                                        </template>
                                    </AisHits>
                                </AisIndex>
                                <AisIndex index-name="brands_index">
                                    <AisSearchBox v-model="query" class="hidden" />

                                    <AisHits>
                                        <template v-slot="{ items }">
                                            <ComboboxOptions
                                                class="max-h-80 scroll-py-2 divide-y divide-gray-100 overflow-y-auto"
                                            >
                                                <li class="p-2">
                                                    <h2
                                                        v-if="query === ''"
                                                        class="mt-4 mb-2 px-3 text-xs font-semibold text-gray-500"
                                                    >
                                                        Recherches récentes
                                                    </h2>
                                                    <ul class="text-sm text-gray-700">
                                                        <div
                                                            class="sticky top-0 z-10 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                                                        >
                                                            <h3>Marques</h3>
                                                        </div>

                                                        <ComboboxOption v-for="item in items" :key="item.objectID">
                                                            <a
                                                                :href="`/products?paramId=${item.objectID}&type=brand`"
                                                                class="text-gray-900 flex cursor-pointer select-none items-center rounded-md px-3 py-2 hover:bg-cerulean-600 hover:text-white"
                                                            >
                                                                <StopCircleIcon
                                                                    :class="['h-6 w-6 flex-none  text-gray-400']"
                                                                    aria-hidden="true"
                                                                />
                                                                <span class="ml-3 flex-auto truncate">{{
                                                                    item.name
                                                                }}</span>
                                                                <span
                                                                    v-if="active"
                                                                    class="ml-3 flex-none text-cerulean-100"
                                                                    >Sauter à...</span
                                                                >
                                                            </a>
                                                        </ComboboxOption>
                                                    </ul>
                                                </li>
                                            </ComboboxOptions>

                                            <div
                                                v-if="items.length === 0 && query !== null && query !== ''"
                                                class="py-6 px-6 text-center sm:px-14"
                                            >
                                                <FolderIcon class="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
                                                <p class="mt-4 text-sm text-gray-900">
                                                    Nous n'avons trouvé aucun résultat avec ce terme. S'il vous plaît,
                                                    essayez de nouveau. réessayer.
                                                </p>
                                            </div>
                                        </template>
                                    </AisHits>
                                </AisIndex>
                                <AisIndex index-name="accessories_index">
                                    <AisSearchBox v-model="query" class="hidden" />

                                    <AisHits>
                                        <template v-slot="{ items }">
                                            <ComboboxOptions
                                                class="max-h-80 scroll-py-2 divide-y divide-gray-100 overflow-y-auto"
                                            >
                                                <li class="p-2">
                                                    <h2
                                                        v-if="query === ''"
                                                        class="mt-4 mb-2 px-3 text-xs font-semibold text-gray-500"
                                                    >
                                                        Recherches récentes
                                                    </h2>
                                                    <ul class="text-sm text-gray-700">
                                                        <div
                                                            class="sticky top-0 z-10 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                                                        >
                                                            <h3>Accessoires</h3>
                                                        </div>

                                                        <ComboboxOption v-for="item in items" :key="item.objectID">
                                                            <a
                                                                :href="`/accessoire/${item.objectID}`"
                                                                class="text-gray-900 flex cursor-pointer select-none items-center rounded-md px-3 py-2 hover:bg-cerulean-600 hover:text-white"
                                                            >
                                                                <GiftTopIcon
                                                                    :class="['h-6 w-6 flex-none  text-gray-400']"
                                                                    aria-hidden="true"
                                                                />
                                                                <span class="ml-3 flex-auto truncate">{{
                                                                    item.name
                                                                }}</span>
                                                                <span
                                                                    v-if="active"
                                                                    class="ml-3 flex-none text-cerulean-100"
                                                                    >Sauter à...</span
                                                                >
                                                            </a>
                                                        </ComboboxOption>
                                                    </ul>
                                                </li>
                                            </ComboboxOptions>

                                            <div
                                                v-if="items.length === 0 && query !== null && query !== ''"
                                                class="py-6 px-6 text-center sm:px-14"
                                            >
                                                <FolderIcon class="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
                                                <p class="mt-4 text-sm text-gray-900">
                                                    Nous n'avons trouvé aucun résultat avec ce terme. S'il vous plaît,
                                                    essayez de nouveau. réessayer.
                                                </p>
                                            </div>
                                        </template>
                                    </AisHits>
                                </AisIndex>

                                <div class="flex flex-wrap items-center bg-gray-50 py-2.5 px-4 text-xs text-gray-700">
                                    Type
                                    <span class="ml-3 flex text-xs font-semibold">
                                        <kbd
                                            class="mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2"
                                            >⌘</kbd
                                        >
                                        <kbd
                                            class="mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2"
                                            >+</kbd
                                        >
                                        <kbd
                                            class="mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2"
                                            >K</kbd
                                        >
                                    </span>
                                    <span class="sm:hidden">To Close</span>
                                    <span class="hidden sm:inline">to Close,</span>
                                </div>
                            </Combobox>
                        </AisInstantSearch>
                    </DialogPanel>
                </TransitionChild>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import 'instantsearch.css/themes/reset.css'
import { ref } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { DocumentPlusIcon, FolderIcon, FolderPlusIcon, HashtagIcon } from '@heroicons/vue/24/outline'
import { TagIcon, BoltIcon, GiftTopIcon, StopCircleIcon } from '@heroicons/vue/24/solid'

import { AisInstantSearch, AisSearchBox, AisHits, AisIndex, AisConfigure } from 'vue-instantsearch/vue3/es'

import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'

const props = defineProps({
    searchInput: {
        type: String,
        required: true,
    },
})

const projects = [
    { id: 1, name: 'TRP Inc. / Website Redesign', url: '#' },
    // More projects...
]
const recent = [projects[0]]
const quickActions = [
    { name: 'Add new file...', icon: DocumentPlusIcon, shortcut: 'N', url: '#' },
    { name: 'Add new folder...', icon: FolderPlusIcon, shortcut: 'F', url: '#' },
    { name: 'Add hashtag...', icon: HashtagIcon, shortcut: 'H', url: '#' },
    { name: 'Add label...', icon: TagIcon, shortcut: 'L', url: '#' },
]

const open = ref(false)

//ctrl + k open command palette use open = true

window.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault()
        open.value = !open.value
        //focus on input
    }
})

const query = ref(null)

watchEffect(() => {
    open.value = props.searchInput !== null && props.searchInput !== ''

    query.value = props.searchInput
})

function onSelect(item) {
    window.location = item.url
}

import algoliasearch from 'algoliasearch/lite'

const searchClient = ref(null)
const categories_index = ref(null)
const products_index = ref(null)
const brands_index = ref(null)
const accessories_index = ref(null)

;(searchClient.value = algoliasearch(import.meta.env.VITE_ALGOLIA_APP_ID, import.meta.env.VITE_ALGOLIA_SECRET)),
    (categories_index.value = searchClient.value.initIndex('categories_index'))
products_index.value = searchClient.value.initIndex('products_index')
brands_index.value = searchClient.value.initIndex('brands_index')
accessories_index.value = searchClient.value.initIndex('accessories_index')

import { watchEffect } from 'vue'
watchEffect(() => {
    if (query.value == null || query.value == '') {
        query.value = null
    } else {
        query.value = query.value
    }
})
</script>
