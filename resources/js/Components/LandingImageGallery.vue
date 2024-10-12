<template>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div v-for="(image, index) in images" :key="index">
            <img class="h-auto max-w-full rounded-lg" v-lazy="image" alt="" />
        </div>
    </div>
</template>

<script setup>
const images = [
    'images/Landing/gallery/1-min.jpg',
    'images/Landing/gallery/2-min.jpg',
    'images/Landing/gallery/3-min.jpg',
    'images/Landing/gallery/4-min.jpg',
    'images/Landing/gallery/5-min.jpg',
    'images/Landing/gallery/6-min.jpg',
    'images/Landing/gallery/7-min.jpg',
    'images/Landing/gallery/8-min.jpg',
    'images/Landing/gallery/9-min.jpg',
    'images/Landing/gallery/10-min.jpg',
    'images/Landing/gallery/11-min.jpg',
]
</script>

<style lang="scss" scoped></style>
