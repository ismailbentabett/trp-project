<template>
    <AuthenticatedLayout title="Catégories" description="Catégories">
        <div class="bg-white">
            <div
                class="py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
            >
                <div v-if="categories.data.length == 0">
                    <EmptyState />
                </div>
                <div v-else>
                    <div
                        v-for="category in categories.data"
                        :key="category.name"
                        :href="category.href"
                        class="cursor-pointer min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0"
                    >
                        <a
                            :href="`/products?paramId=${category.id}&type=category`"
                            class="relative flex h-80 w-56 flex-col p-6"
                        >
                            <span aria-hidden="true" class="absolute inset-0">
                                <img
                                    v-if="category.image"
                                    :src="category.image.url"
                                    alt=""
                                    class="h-full w-full object-cover object-center"
                                />

                                <img
                                    v-else
                                    src="https://placehold.co/600x400?text=No Image"
                                    alt=""
                                    class="h-full w-full object-cover object-center"
                                />
                            </span>
                            <span
                                aria-hidden="true"
                                class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                            />
                            <span class="relative mt-auto text-center text-xl font-bold text-white">{{
                                category.name
                            }}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <Pagination :links="categories.links" />
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import Pagination from '@/Components/Pagination.vue'
import { defineProps } from 'vue'
import EmptyState from '@/Components/EmptyState.vue'
const props = defineProps({
    categories: {
        type: Array,
        required: true,
    },
})
</script>
