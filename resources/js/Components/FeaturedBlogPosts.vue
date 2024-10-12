<template>
    <div class="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
        <div class="absolute inset-0">
            <div class="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div class="relative mx-auto max-w-7xl">
            <div class="text-center">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Blog</h2>
            </div>
            <div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                <div
                    v-for="post in props.posts"
                    :key="post.title"
                    class="flex flex-col overflow-hidden rounded-lg shadow-lg"
                >
                    <div class="flex-shrink-0">
                        <img v-if="post.banner_url" class="h-48 w-full object-cover" :src="post.banner_url" alt="" />
                        <img v-else class="h-48 w-full object-cover" src="https://via.placeholder.com/150" alt="" />
                    </div>
                    <div class="flex flex-1 flex-col justify-between bg-white p-6">
                        <div class="flex-1">
                            <p class="text-sm font-medium text-cerulean-600">
                                <a :href="post.category.id" class="hover:underline">{{ post.category.name }}</a>
                            </p>
                            <a :href="post.href" class="mt-2 block">
                                <p class="text-xl font-semibold text-gray-900">
                                    {{ post.title }}
                                </p>
                                <p
                                    class="mt-3 text-base text-gray-500 break-all"
                                    v-html="post.content.substring(0, 100) + '...'"
                                ></p>
                            </a>
                        </div>
                        <div class="mt-6 flex items-center">
                            <div class="flex-shrink-0">
                                <a :href="post.author.href">
                                    <span class="sr-only">{{ post.author.name }}</span>
                                    <img
                                        v-if="post.author.photo_url"
                                        class="h-10 w-10 rounded-full"
                                        :src="post.author.photo_url"
                                        alt=""
                                    />
                                    <img v-else class="h-10 w-10 rounded-full" :src="avatar(post.author.name)" alt="" />
                                </a>
                            </div>
                            <div class="ml-3">
                                <p class="text-sm font-medium text-gray-900">
                                    <a :href="post.author.id" class="hover:underline">{{ post.author.name }}</a>
                                </p>
                                <div class="flex space-x-1 text-sm text-gray-500">
                                    <time>{{ formatDate(post.created_at) }}</time>
                                    <span aria-hidden="true">&middot;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    posts: {
        type: Array,
        required: true,
    },
})

import moment from 'moment'
const formatDate = (date) => {
    if (date) {
        return moment(String(date)).format('YYYY - MM - DD')
    }
}
import { createAvatar } from '@dicebear/core'
import { initials } from '@dicebear/collection'

const avatar = (name) => {
    return createAvatar(initials, {
        size: 128,
        // ... other options
        seed: name,
    }).toDataUriSync()
}
</script>
