<template>
    <AuthenticatedLayout title="Formulaire de radiocommunication" description="Formulaire de radiocommunication">
        <GoogleForm
            style="overflow: hidden; height: 100%; width: 100%"
            height="100%"
            width="100%"
            class="fill-window"
            src="https://docs.google.com/forms/d/1IvcgqcUnhgEmGC17jeOCupVn6jxymaTlBamrliZ6Ezo/viewform"
        />
    </AuthenticatedLayout>
</template>

<script setup>
import GoogleForm from '@/Components/GoogleForm.vue'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
</script>

<style>
.fill-window {
    height: 100%;
    position: absolute;
    width: 100%;
    overflow: hidden;
}
</style>
