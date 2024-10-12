<script setup>
import { defineProps, ref } from 'vue'

import GuestNavBar from '@/Components/GuestNavBar.vue'
import { Head } from '@inertiajs/vue3'

import Footer from '@/Components/Footer.vue'

import Toastr from '@/Components/Toastr.vue'
import { usePage } from '@inertiajs/vue3'

const showingNavigationDropdown = ref(false)
const { flash } = usePage().props

const props = defineProps({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
})
</script>

<template>
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
        <div class="min-h-screen bg-white">
            <Toastr v-if="flash.alert" />

            <GuestNavBar />

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
