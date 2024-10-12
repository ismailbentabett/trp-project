<template>
    <div class="bg-white rounded-lg m-5">
        <div>
            <a :href="`/accessory/${accessory.id}`" class="block relative">
                <div class="relative h-72 w-full overflow-hidden rounded-t-lg">
                    <img
                        v-if="images.length > 0"
                        :src="images[0].url"
                        :alt="accessory.imageAlt"
                        class="h-full w-full object-cover object-center"
                    />
                    <img
                        v-else
                        src="https://placehold.co/600x400?text=No Image"
                        :alt="accessory.imageAlt"
                        class="h-full w-full object-cover object-center"
                    />
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"
                    ></div>
                </div>
                <div class="p-4">
                    <h3 class="text-sm font-medium text-gray-900">{{ accessory.name }}</h3>
                    <p class="mt-1 text-sm text-gray-500">{{ accessory.color }}</p>
                </div>
                <div
                    class="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4"
                    v-if="accessory.showPrice"
                >
                    <div
                        aria-hidden="true"
                        class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    ></div>
                    <p class="relative text-lg font-semibold text-white">{{ accessory.price }} €</p>
                </div>
            </a>
        </div>
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
    accessory: {
        type: Object,
        required: true,
    },
})

const images = computed(() => {
    return props.accessory.medias.filter((media) => {
        return media.type && media.type.startsWith('image/')
    })
})
</script>
