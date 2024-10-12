<template>
    <div id="controls-carousel" class="w-full" ref="carousel" data-carousel="static">
        <!-- Carousel wrapper -->
        <div class="relative overflow-hidden rounded-lg" :style="{ height: carouselHeight, width: carouselWidth }">
            <!-- Carousel items -->
            <div
                v-for="(item, index) in pictures"
                :key="index"
                :class="{
                    'opacity-100': index === currentIndex,
                    'opacity-0': index !== currentIndex,
                    'duration-700 ease-in-out': index === currentIndex,
                }"
                data-carousel-item="active"
            >
                <img
                    :src="item.src"
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    :alt="item.alt"
                />
            </div>
            <!-- Slider controls -->
            <button
                @click="prevSlide"
                type="button"
                class="absolute top-0 start-0 z-50flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
            >
                <!-- Previous button content -->
                <span
                    class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/20 dark:bg-gray-800/30 group-hover:bg-white/100 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
                >
                    <svg
                        class="w-4 h-4 text-gray-900 dark:text-gray-900 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>

            <button
                @click="nextSlide"
                type="button"
                class="absolute top-0 end-0 z-50flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
            >
                <!-- Next button content -->
                <span
                    class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/20 dark:bg-gray-800/30 group-hover:bg-white/100 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
                >
                    <svg
                        class="w-4 h-4 text-gray-900 dark:text-gray-900 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'

const currentIndex = ref(0)
const defaultWidth = 600
const defaultHeight = 600

const props = defineProps({
    images: {
        type: Array,
        required: true,
    },
})

const pictures = computed(() =>
    props.images.map((image) => ({
        src: image.url,
        alt: image.alt,
    })),
)

const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + pictures.value.length) % pictures.value.length
}

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % pictures.value.length
}

const updateDimensions = () => {
    // Update dimensions based on window size or any other logic
    // For example, you can make it responsive up to a certain breakpoint
    const windowWidth = window.innerWidth
    const breakpoint = 768 // Example breakpoint
    const isMobile = windowWidth < breakpoint

    // Update dimensions accordingly
    if (isMobile) {
        carouselHeight.value = '300px'
        carouselWidth.value = '100%'
    } else {
        carouselHeight.value = `${defaultHeight}px`
        carouselWidth.value = `${defaultWidth}px`
    }
}

// Initial dimensions setup
const carouselHeight = ref(`${defaultHeight}px`)
const carouselWidth = ref(`${defaultWidth}px`)

onMounted(() => {
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateDimensions)
})
</script>

<style scoped>
img {
    object-fit: contain !important;
    object-position: center !important;
}

#controls-carousel img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
}
</style>
