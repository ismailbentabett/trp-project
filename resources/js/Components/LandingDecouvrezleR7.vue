<!-- This example requires Tailwind CSS v3.0+ -->
<template>
    <div class="relative isolate overflow-hidden bg-gray-900">
        <img src="images/Landing/R7.jpeg" alt="" class="absolute inset-0 -z-10 h-full w-full object-fit" />
        <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
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
        <div class="px-6 lg:px-8">
            <div class="mx-auto py-32 sm:py-48 lg:py-56">
                <div class="text-start ml-20">
                    <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Découvrez le R7</h1>
                    <p class="mt-6 text-lg leading-8 text-gray-300 max-w-2xl">
                        Étendez vos horizons de communication avec le Motorola R7 : compact, puissant, et parfaitement
                        adaptable à tous vos environnements !.
                    </p>
                    <div class="mt-10 flex items-start justify-start gap-x-6">
                        <a
                            href="#"
                            class="rounded-md bg-cerulean-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-cerulean-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cerulean-400"
                            >Découvrir</a
                        >
                    </div>
                </div>
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
</template>

<script setup>
import { ref } from 'vue'
</script>
