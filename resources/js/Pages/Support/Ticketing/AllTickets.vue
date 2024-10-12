<template>
    <TicketsLayout>
        <div class="px-4 sm:px-6 lg:px-8">
            <div class="mt-8 flex flex-col">
                <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-300">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                        >
                                            Titre
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            Message
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            Statut
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            Priorité
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            Résolu
                                        </th>
                                        <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span class="sr-only">Voir</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 bg-white">
                                    <tr v-for="item in props.tickets.data" :key="item.id">
                                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                            <div class="flex items-center">
                                                <!-- <div class="h-10 w-10 flex-shrink-0">
                          <img class="h-10 w-10 rounded-full" :src="person.image" alt="" />
                        </div> -->
                                                <div class="ml-4">
                                                    <div class="font-medium text-gray-900">
                                                        {{ item.title }}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <div class="text-gray-500">{{ item.message }}</div>
                                        </td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <span
                                                v-if="item.status === 'open'"
                                                class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800"
                                                >{{ item.status }}</span
                                            >

                                            <span
                                                v-else-if="item.status === 'closed'"
                                                class="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800"
                                                >{{ item.status }}</span
                                            >
                                        </td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {{ item.priority }}
                                        </td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {{ item.is_resolved ? 'true' : 'false' }}
                                        </td>
                                        <td
                                            class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                                        >
                                            <a
                                                :href="`/tickets/discussion/${item.id}`"
                                                class="text-cerulean-600 hover:text-cerulean-900"
                                                >Voir</a
                                            >
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Pagination :links="props.tickets.links" />
    </TicketsLayout>
</template>

<script setup>
import TicketsLayout from '../TicketsLayout.vue'
import { defineProps } from 'vue'
import Pagination from '@/Components/Pagination.vue'
const props = defineProps({
    tickets: Array,
})

// More people...
</script>
