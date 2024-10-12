<script setup>
import { ref, watchEffect } from 'vue'

import NavBar from '@/Components/NavBar.vue'

import Footer from '@/Components/Footer.vue'

import { Head } from '@inertiajs/vue3'

import { usePage } from '@inertiajs/vue3'
import { computed } from 'vue'

import FloatingActionButton from '@/Components/FloatingActionButton.vue'

import Toastr from '@/Components/Toastr.vue'

const showingNavigationDropdown = ref(false)

const props = defineProps({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
})

//redirect if not authenticated
const page = usePage()

const authenticated = computed(() => page.props.auth.user)

watchEffect(() => {
    if (!authenticated.value) {
        page.props.flash.error = 'You must be logged in to visit that page.'
        page.props.intended = page.url.value
        page.visit('/login')
    }
})

const { flash } = usePage().props
</script>

<template>
    <Toastr v-if="flash.alert" />
    <FloatingActionButton />

    <Head>
        <title>{{ props.title ? props.title : '' }}</title>
        <meta name="description" :content="description" />
        <meta property="og:type" content="business.business" />
        <meta
            property="og:title"
            :content="`${props.title ? props.title : ''} Trp - Télécom Radio Professionnel Motorola Solutions`"
        />
        <meta property="og:url" content="https://trp-france.fr/" />
        <meta property="og:image" content="https://trp-algeria.com/wp-content/uploads/2021/08/logo-motorola-1.png" />
        <meta property="og:description" content="EURL Télécom Radio Professionnel Motorola Solutions " />
        <meta property="business:contact_data:street_address" content="" />
        <meta property="business:contact_data:locality" content="" />
        <meta property="business:contact_data:region" content="" />
        <meta property="business:contact_data:country_name" content="France" />

        <!-- Primary Meta Tags -->
        <title>Trp - Télécom Radio Professionnel Motorola Solutions</title>
        <meta
            name="title"
            :content="`${props.title ? props.title : ''} Trp - Télécom Radio Professionnel Motorola Solutions`"
        />
        <meta name="description" content="Trp - Télécom Radio Professionnel Motorola Solutions" />

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta
            property="og:title"
            :content="`${props.title ? props.title : ''} Trp - Télécom Radio Professionnel Motorola Solutions`"
        />
        <meta property="og:description" content="Trp - Télécom Radio Professionnel Motorola Solutions" />
        <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta
            property="twitter:title"
            :content="`${props.title ? props.title : ''} Trp - Télécom Radio Professionnel Motorola Solutions`"
        />
        <meta property="twitter:description" content="Trp - Télécom Radio Professionnel Motorola Solutions" />
        <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />

        <!-- Meta Tags Generated with https://metatags.io -->
        <meta
            name="title"
            :content="`${props.title ? props.title : ''} Trp - Télécom Radio Professionnel Motorola Solutions`"
        />
        <meta name="description" content="Trp - Télécom Radio Professionnel Motorola Solutions" />
        <meta name="keywords" content="Trp,Télécom,Radio,Professionnel,Motorola,Solutions" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="French" />
    </Head>
    <div>
        <div class="min-h-screen bg-gray-100">
            <NavBar />

            <!-- Page Heading -->
            <header class="bg-white shadow" v-if="$slots.header">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <slot name="header" />
                </div>
            </header>

            <!-- Page Content -->
            <main>
                <slot />
            </main>
            <Footer />
        </div>
    </div>
</template>
