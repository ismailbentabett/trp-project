<template>
    <AuthenticatedLayout title="Marques" description="Marques">
        <div class="bg-white">
            <div
                class="py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
            >
                <div v-if="brands.data.length == 0">
                    <EmptyState />
                </div>
                <div v-else>
                    <div
                        v-for="brand in brands.data"
                        :key="brand.name"
                        :href="brand.href"
                        class="cursor-pointer min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0"
                    >
                        <a
                            :href="`/products?paramId=${brand.id}&type=brand`"
                            class="relative flex h-80 w-56 flex-col p-6"
                        >
                            <span aria-hidden="true" class="absolute inset-0">
                                <img
                                    v-if="brand.image"
                                    :src="brand.image.url"
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
                                brand.name
                            }}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <Pagination :links="brands.links" />
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import EmptyState from '@/Components/EmptyState.vue'
import Pagination from '@/Components/Pagination.vue'
import { defineProps } from 'vue'
const props = defineProps({
    brands: {
        type: Array,
        required: true,
    },
})
</script>
