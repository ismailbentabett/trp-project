<template>
    <img :src="avatar" alt="Avatar" />
</template>

<script setup>
import { createAvatar } from '@dicebear/core'
import { initials } from '@dicebear/collection'
import { computed } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
    user: Object,
})
const user = computed(() => props.user)
let avatar = user.value.avatar
if (user.value.avatar == null) {
    avatar = createAvatar(initials, {
        size: 128,
        // ... other options
        seed: user.value.name,
    }).toDataUriSync()
}
</script>
