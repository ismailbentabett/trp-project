<template>
    <AuthenticatedLayout title="Soumettre un avis" description="Soumettre un avis">
        <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
            <h3 class="text-lg font-medium leading-6 text-gray-900 ml-20">Créer une Avis</h3>
        </div>
        <div class="bg-white p-20 rounded-lg shadow-md m-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
            <div class="mx-auto max-w-3xl">
                <ProductCard
                    :addToCartBool="false"
                    :product="props.product"
                    class="mb-10 col-span-1 divide-y divide-gray-200 rounded-lg bg-white"
                />
                <form @submit.prevent="createFeedBack">
                    <TabGroup v-slot="{ selectedIndex }">
                        <TabList class="flex items-center">
                            <Tab as="template" v-slot="{ selected }">
                                <button
                                    :class="[
                                        selected
                                            ? 'text-gray-900 bg-gray-100 hover:bg-gray-200'
                                            : 'text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100',
                                        'rounded-md border border-transparent px-3 py-1.5 text-sm font-medium',
                                    ]"
                                >
                                    Write
                                </button>
                            </Tab>
                            <Tab as="template" v-slot="{ selected }">
                                <button
                                    :class="[
                                        selected
                                            ? 'text-gray-900 bg-gray-100 hover:bg-gray-200'
                                            : 'text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100',
                                        'ml-2 rounded-md border border-transparent px-3 py-1.5 text-sm font-medium',
                                    ]"
                                >
                                    Preview
                                </button>
                            </Tab>

                            <!-- These buttons are here simply as examples and don't actually do anything. -->
                            <div v-if="selectedIndex === 0" class="ml-auto flex items-center space-x-5">
                                <div class="flex items-center">
                                    <div class="hidden sm:flex items-center xl:col-span-1">
                                        <div class="flex items-center">
                                            <vue3starRatings
                                                inactiveColor="#e4e4e4"
                                                starColor="#f5a623"
                                                v-model="form.rating"
                                            />
                                        </div>
                                        <p class="self-end ml-3 text-sm text-gray-700">
                                            {{ form.rating }}<span class="sr-only"> sur de 5 étoiles</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </TabList>
                        <TabPanels class="mt-2">
                            <TabPanel class="-m-0.5 rounded-lg p-0.5">
                                <label for="comment" class="sr-only">Commentaire</label>
                                <div>
                                    <textarea
                                        v-model="form.review"
                                        rows="5"
                                        name="comment"
                                        id="comment"
                                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-cerulean-500 focus:ring-cerulean-500 sm:text-sm"
                                        placeholder="Add your comment..."
                                    />
                                </div>
                                <div class="sm:hidden flex items-center">
                                    <div class="my-5 flex flex-wrap items-center xl:col-span-1">
                                        <div class="flex items-center">
                                            <vue3starRatings
                                                inactiveColor="#e4e4e4"
                                                starColor="#f5a623"
                                                v-model="form.rating"
                                            />
                                        </div>
                                        <p class="self-end ml-3 text-sm text-gray-700">
                                            {{ form.rating }}<span class="sr-only"> sur de 5 étoiles</span>
                                        </p>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel class="-m-0.5 rounded-lg p-5">
                                <div class="bg-white">
                                    <div>
                                        <h2 class="sr-only">Avis des clients</h2>

                                        <div class="-my-10">
                                            <div class="flex space-x-4 text-sm text-gray-500">
                                                <div class="flex-none py-10">
                                                    <Avatar :user="props.user" class="h-8 w-8 rounded-full" alt="" />
                                                </div>
                                                <div class="flex-1 py-10">
                                                    <h3 class="font-medium text-gray-900">
                                                        {{ user.name }}
                                                    </h3>
                                                    <p>
                                                        <time :datetime="today">{{ formatDate(today) }}</time>
                                                    </p>
                                                    <div class="flex items-center xl:col-span-1">
                                                        <div class="flex items-center">
                                                            <vue3starRatings
                                                                starSize="20"
                                                                :disableClick="true"
                                                                inactiveColor="#e4e4e4"
                                                                starColor="#f5a623"
                                                                v-model="form.rating"
                                                            />
                                                        </div>
                                                        <p class="ml-3 text-xs self-end text-gray-700">
                                                            {{ form.rating
                                                            }}<span class="sr-only"> sur de 5 étoiles</span>
                                                        </p>
                                                    </div>

                                                    <div
                                                        class="break-all prose prose-sm mt-4 max-w-none text-gray-500"
                                                        v-html="form.review"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </TabPanels>
                    </TabGroup>
                    <div class="mt-2 flex justify-end">
                        <button
                            type="submit"
                            class="inline-flex items-center rounded-md border border-transparent bg-cerulean-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2"
                        >
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import vue3starRatings from 'vue3-star-ratings'
import Avatar from '@/Components/Avatar.vue'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue'

import { useForm } from '@inertiajs/vue3'
import { defineProps } from 'vue'
const props = defineProps({
    product: Object,
    user: Object,
})

import ProductCard from '@/Components/ProductCard.vue'
const form = useForm({
    review: '',
    rating: 0,
})

const today = new Date()
import moment from 'moment'
import axios from 'axios'

const formatDate = (date) => {
    if (date) {
        return moment(String(date)).format('YYYY - MM - DD')
    }
}

const createFeedBack = () => {
    axios
        .post('/product/feedback/store', {
            review: form.review,
            rating: form.rating,
            product_id: props.product.id,
        })
        .then((response) => {
            window.location = '/product/' + props.product.id
        })
        .catch((error) => {})
}
</script>
