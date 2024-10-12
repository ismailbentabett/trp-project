<!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
    <AuthenticatedLayout :title="application.title" description="Activity Sector">
        <div class="bg-white" :style="`background-color: ${application.theme}`">
            <main>
                <div class="relative isolate overflow-hidden bg-gray-900">
                    <img
                        v-if="application.featured_image"
                        :src="application.featured_image.url"
                        alt=""
                        class="absolute inset-0 -z-10 h-full w-full object-cover"
                    />
                    <div
                        class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                    >
                        <svg
                            class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                            viewBox="0 0 1155 678"
                        >
                            <path
                                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                                fill-opacity=".2"
                                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                            />
                            <defs>
                                <linearGradient
                                    id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                                    x1="1155.49"
                                    x2="-78.208"
                                    y1=".177"
                                    y2="474.645"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#9089FC" />
                                    <stop offset="1" stop-color="#FF80B5" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div>
                        <div class="py-32 sm:py-48 lg:py-56 items-center justify-start">
                            <h1 class="text-3xl font-bold tracking-tight text-white sm:text-6xl rounded py-1">
                                {{ application.title }}
                            </h1>
                        </div>
                    </div>
                    <div
                        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    >
                        <svg
                            class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                            viewBox="0 0 1155 678"
                        >
                            <path
                                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                                fill-opacity=".2"
                                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                            />
                            <defs>
                                <linearGradient
                                    id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                                    x1="1155.49"
                                    x2="-78.208"
                                    y1=".177"
                                    y2="474.645"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#9089FC" />
                                    <stop offset="1" stop-color="#FF80B5" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div class="px-6 lg:px-8" :style="`background-color: ${application.main_content_background_color}`">
                    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div>
                            <p
                                class="mb-3 text-xl font-bold text-gray-500 md:text-xl dark:text-gray-400"
                                :style="`color: ${application.main_title_color}`"
                            >
                                {{ application.main_title }}
                            </p>
                            <p
                                class="text-gray-500 dark:text-gray-400"
                                :style="`color: ${application.main_content_color}`"
                                v-html="application.main_content"
                            ></p>
                        </div>
                    </div>
                </div>
                <div
                    class="relative bg-white"
                    :style="`background-color: ${application.main_listing_background_color}`"
                >
                    <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                        <div class="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">
                            <div class="mx-auto max-w-2xl lg:mx-0">
                                <p
                                    class="text-gray-500 dark:text-gray-400"
                                    :style="`color: ${application.main_listing_color}`"
                                    v-html="application.main_listing"
                                ></p>
                            </div>
                        </div>
                        <div class="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                            <img
                                v-if="application.main_listing_media"
                                class="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                                :src="application.main_listing_media.url"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div
                    class="px-6 lg:px-8"
                    :style="`background-color: ${application.secondary_content_background_color}`"
                >
                    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div>
                            <p
                                class="mb-3 text-xl font-bold text-gray-500 md:text-xl dark:text-gray-400"
                                :style="`color: ${application.secondary_title_color}`"
                            >
                                {{ application.secondary_title }}
                            </p>
                            <p
                                class="text-gray-500 dark:text-gray-400"
                                :style="`color: ${application.secondary_content_color}`"
                                v-html="application.secondary_content"
                            ></p>
                        </div>
                    </div>
                </div>
                <section v-if="application.products.length > 0" aria-labelledby="related-heading">
                    <h2 id="related-heading" class="text-xl font-bold text-gray-900">Produits apparentés Produits</h2>

                    <Carousel :items-to-show="3" :autoplay="5000" :wrap-around="true">
                        <Slide v-for="product in application.products" :key="product.id">
                            <ProductCard :product="product" />
                        </Slide>
                    </Carousel>
                </section>
                <div
                    class="relative bg-white"
                    :style="`background-color: ${application.secondary_listing_background_color}`"
                >
                    <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                        <div class="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">
                            <div class="mx-auto max-w-2xl lg:mx-0">
                                <p
                                    :style="`color: ${application.secondary_listing_color}`"
                                    class="text-gray-500 dark:text-gray-400"
                                    v-html="application.secondary_listing"
                                ></p>
                            </div>
                        </div>
                        <div class="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                            <img
                                v-if="application.secondary_listing_media"
                                class="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                                :src="application.secondary_listing_media.url"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 p-20">
                    <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
                    <div class="mx-auto max-w-5xl">
                        <!--           <img src="../assets/motorola-banner.png" />
-->
                    </div>
                </div>

                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 p-20">
                    <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
                    <h1
                        :style="`color: ${application.appointment_title_color}`"
                        class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl rounded py-1 text-center mb-10"
                    >
                        PRENDRE RENDEZ-VOUS AVEC UN CONSEILLER
                    </h1>
                    <div
                        class="mx-auto max-w-5xl"
                        :style="`background-color: ${application.appointment_background_color}`"
                    >
                        <AppointmentCalendarApplication :color="application.theme" :id="id" />
                    </div>
                </div>
            </main>
        </div>
        <div class="bg-gray-100">
            <div class="mx-auto">
                <div class="relativebg-gray-100">
                    <h2 class="sr-only">Contactez nous</h2>

                    <div class="grid grid-cols-1 lg:grid-cols-3">
                        <!-- Contact information -->
                        <div class="relative overflow-hidden py-10 px-6 bg-cerulean-700 sm:px-10 xl:p-12">
                            <div class="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                                <svg
                                    class="absolute inset-0 w-full h-full"
                                    width="343"
                                    height="388"
                                    viewBox="0 0 343 388"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid slice"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                                        fill="url(#linear1)"
                                        fill-opacity=".1"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="linear1"
                                            x1="254.553"
                                            y1="107.554"
                                            x2="961.66"
                                            y2="814.66"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#fff"></stop>
                                            <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div
                                class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                                aria-hidden="true"
                            >
                                <svg
                                    class="absolute inset-0 w-full h-full"
                                    width="359"
                                    height="339"
                                    viewBox="0 0 359 339"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid slice"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                                        fill="url(#linear2)"
                                        fill-opacity=".1"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="linear2"
                                            x1="192.553"
                                            y1="28.553"
                                            x2="899.66"
                                            y2="735.66"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#fff"></stop>
                                            <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div
                                class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                                aria-hidden="true"
                            >
                                <svg
                                    class="absolute inset-0 w-full h-full"
                                    width="160"
                                    height="678"
                                    viewBox="0 0 160 678"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid slice"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                                        fill="url(#linear3)"
                                        fill-opacity=".1"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="linear3"
                                            x1="192.553"
                                            y1="325.553"
                                            x2="899.66"
                                            y2="1032.66"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#fff"></stop>
                                            <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
                                <h2 class="text-base font-semibold">
                                    <span
                                        class="bg-gradient-to-r from-cerulean-300 to-cerulean-300 bg-clip-text text-transparent"
                                        >Contactez nous</span
                                    >
                                </h2>
                                <p class="mt-3 text-3xl font-bold tracking-tight text-white">
                                    Parlez à un de nos conseillers dès maintenant !
                                </p>
                                <p class="mt-5 text-lg text-gray-300">
                                    Soutenue par un programme de formation continue, une disponibilité inconditionnelle
                                    ainsi qu’un savoir-faire professionnel, notre équipe de représentant(e)s offre une
                                    approche-conseil qui saura vous séduire. Contactez-nous dès maintenant afin d’en
                                    connaître davantage sur nos produits de radios bidirectionnelles Motorola et nos
                                    services offerts.
                                </p>
                            </div>

                            <dl class="mt-8 space-y-6">
                                <dt><span class="sr-only">Numéro de téléphone</span></dt>
                                <dd class="flex text-base text-cerulean-50">
                                    <!-- Heroicon name: outline/phone -->
                                    <svg
                                        class="flex-shrink-0 w-6 h-6 text-cerulean-200"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                    <span class="ml-3">+33 (555) 123-4567</span>
                                </dd>
                                <dt><span class="sr-only">Email</span></dt>
                                <dd class="flex text-base text-cerulean-50">
                                    <!-- Heroicon name: outline/mail -->
                                    <svg
                                        class="flex-shrink-0 w-6 h-6 text-cerulean-200"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span class="ml-3">support@workcation.com</span>
                                </dd>
                            </dl>
                            <ul role="list" class="mt-8 flex space-x-12">
                                <li>
                                    <a class="text-cerulean-200 hover:text-cerulean-100" href="#">
                                        <span class="sr-only">Facebook</span>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-6 h-6"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a class="text-cerulean-200 hover:text-cerulean-100" href="#">
                                        <span class="sr-only">GitHub</span>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-6 h-6"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a class="text-cerulean-200 hover:text-cerulean-100" href="#">
                                        <span class="sr-only">Twitter</span>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-6 h-6"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <!-- Contact form -->
                        <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                            <h3 class="text-lg font-medium text-gray-900">Envoyer un message</h3>
                            <form
                                @submit.prevent="submitContactForm"
                                class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                            >
                                <div class="sm:col-span-2">
                                    <label for="email" class="block text-sm font-medium text-gray-900">Email</label>
                                    <div class="mt-1">
                                        <input
                                            v-model="contactForm.email"
                                            id="email"
                                            name="email"
                                            type="email"
                                            autocomplete="email"
                                            class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cerulean-500 focus:border-cerulean-500 border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label for="first-name" class="block text-sm font-medium text-gray-900"> Nom</label>
                                    <div class="mt-1">
                                        <input
                                            v-model="contactForm.name"
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autocomplete="given-name"
                                            class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cerulean-500 focus:border-cerulean-500 border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div class="flex justify-between">
                                        <label for="phone" class="block text-sm font-medium text-gray-900"
                                            >Téléphone</label
                                        >
                                        <span id="phone-optional" class="text-sm text-gray-500">Optionnel</span>
                                    </div>
                                    <div class="mt-1">
                                        <input
                                            v-model="contactForm.phone"
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            autocomplete="tel"
                                            class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cerulean-500 focus:border-cerulean-500 border-gray-300 rounded-md"
                                            aria-describedby="phone-optional"
                                        />
                                    </div>
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="subject" class="block text-sm font-medium text-gray-900">Sujet</label>
                                    <div class="mt-1">
                                        <input
                                            v-model="contactForm.subject"
                                            type="text"
                                            name="subject"
                                            id="subject"
                                            class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cerulean-500 focus:border-cerulean-500 border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div class="sm:col-span-2">
                                    <div class="flex justify-between">
                                        <label for="message" class="block text-sm font-medium text-gray-900"
                                            >Message</label
                                        >
                                        <span id="message-max" class="text-sm text-gray-500">Max. 500 caractères</span>
                                    </div>
                                    <div class="mt-1">
                                        <textarea
                                            v-model="contactForm.message"
                                            id="message"
                                            name="message"
                                            rows="4"
                                            class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cerulean-500 focus:border-cerulean-500 border border-gray-300 rounded-md"
                                            aria-describedby="message-max"
                                        ></textarea>
                                    </div>
                                </div>
                                <div class="sm:col-span-2 sm:flex sm:justify-end">
                                    <button
                                        type="submit"
                                        class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-cerulean-600 hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cerulean-500 sm:w-auto"
                                    >
                                        Soumettre
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import {
    ArrowUturnLeftIcon,
    ChatBubbleBottomCenterTextIcon,
    ChatBubbleLeftEllipsisIcon,
    ChatBubbleLeftRightIcon,
    DocumentChartBarIcon,
    HeartIcon,
    InboxIcon,
    PencilSquareIcon,
    QuestionMarkCircleIcon,
    TrashIcon,
    UsersIcon,
} from '@heroicons/vue/24/outline'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

import AppointmentCalendarApplication from '@/Components/AppointmentCalendarApplication.vue'
import ProductCard from '@/Components/ProductCard.vue'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import { defineComponent, defineProps, h, ref, computed } from 'vue'
const props = defineProps({
    application: {
        type: String,
        default: 'all',
    },
})

import { usePage } from '@inertiajs/vue3'

const page = usePage()

const id = computed(() => page.props.application.id)
const solutions = [
    {
        name: 'Inbox',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: InboxIcon,
    },
    {
        name: 'Messaging',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: ChatBubbleBottomCenterTextIcon,
    },
    {
        name: 'Live Chat',
        description: "Your customers' data will be safe and secure.",
        href: '#',
        icon: ChatBubbleLeftRightIcon,
    },
    {
        name: 'Knowledge Base',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: QuestionMarkCircleIcon,
    },
]
const features = [
    {
        name: 'Unlimited Inboxes',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: InboxIcon,
    },
    {
        name: 'Manage Team Members',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: UsersIcon,
    },
    {
        name: 'Spam Report',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: TrashIcon,
    },
    {
        name: 'Compose in Markdown',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: PencilSquareIcon,
    },
    {
        name: 'Team Reporting',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: DocumentChartBarIcon,
    },
    {
        name: 'Saved Replies',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ArrowUturnLeftIcon,
    },
    {
        name: 'Email Commenting',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ChatBubbleLeftEllipsisIcon,
    },
    {
        name: 'Connect with Customers',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: HeartIcon,
    },
]
const metrics = [
    {
        id: 1,
        stat: '8K+',
        emphasis: 'Companies',
        rest: 'use laoreet amet lacus nibh integer quis.',
    },
    {
        id: 2,
        stat: '25K+',
        emphasis: 'Countries around the globe',
        rest: 'lacus nibh integer quis.',
    },
    {
        id: 3,
        stat: '98%',
        emphasis: 'Customer satisfaction',
        rest: 'laoreet amet lacus nibh integer quis.',
    },
    {
        id: 4,
        stat: '12M+',
        emphasis: 'Issues resolved',
        rest: 'lacus nibh integer quis.',
    },
]
const footerNavigation = {
    solutions: [
        { name: 'Marketing', href: '#' },
        { name: 'Analytics', href: '#' },
        { name: 'Commerce', href: '#' },
        { name: 'Insights', href: '#' },
    ],
    support: [
        { name: 'Pricing', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'API Status', href: '#' },
    ],
    company: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Partners', href: '#' },
    ],
    legal: [
        { name: 'Claim', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
    ],
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            'fill-rule': 'evenodd',
                            d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                            'clip-rule': 'evenodd',
                        }),
                    ]),
            }),
        },
        {
            name: 'Instagram',
            href: '#',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            'fill-rule': 'evenodd',
                            d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                            'clip-rule': 'evenodd',
                        }),
                    ]),
            }),
        },
        {
            name: 'Twitter',
            href: '#',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
                        }),
                    ]),
            }),
        },
        {
            name: 'GitHub',
            href: '#',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            'fill-rule': 'evenodd',
                            d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
                            'clip-rule': 'evenodd',
                        }),
                    ]),
            }),
        },
        {
            name: 'Dribbble',
            href: '#',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            'fill-rule': 'evenodd',
                            d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z',
                            'clip-rule': 'evenodd',
                        }),
                    ]),
            }),
        },
    ],
}
import { useForm } from '@inertiajs/vue3'

const contactForm = useForm({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
})

const submitContactForm = () => {
    contactForm.post(route('contact.store'), {
        preserveScroll: true,
        onSuccess: () => {
            contactForm.reset()
        },
    })
}
const date = ref()
</script>
