<template>
    <h1 class="text-3xl font-extrabold mb-6 text-center">PRENDRE RENDEZ-VOUS AVEC UN CONSEILLER</h1>

    <div class="flex flex-col md:flex-row space-x-4">
        <div class="w-full md:w-1/2">
            <h1 class="text-2xl font-bold mb-6 text-gray-700 text-center">Rencontrer un Conseiller</h1>
            <vue-tailwind-datepicker v-model="dateValue" no-input as-single />
        </div>
        <div>
            <h1 class="text-2xl font-bold my-6 text-gray-700 text-center">De combien de temps avez-vous besoin?</h1>

            <RadioGroup v-model="mem" class="mt-2">
                <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
                    <RadioGroupOption
                        as="template"
                        v-for="option in durations"
                        :key="option.name"
                        :value="option"
                        v-slot="{ active, checked }"
                    >
                        <div
                            :class="[
                                active ? 'ring-2 ring-offset-2 ring-cerulean-500' : '',
                                checked
                                    ? 'bg-cerulean-600 border-transparent text-white hover:bg-cerulean-700'
                                    : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                                'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer',
                            ]"
                        >
                            <RadioGroupLabel as="span">{{ option.name }}</RadioGroupLabel>
                        </div>
                    </RadioGroupOption>
                </div>
            </RadioGroup>
            <h1 class="text-2xl text-gray-700 font-bold my-6 text-center">Quelle heure vous convient le mieux?</h1>

            <RadioGroup v-model="hr" class="mt-2">
                <div class="grid grid-cols-3 sm:grid-cols-6 gap-4 lg:grid-cols-10">
                    <RadioGroupOption
                        as="template"
                        v-for="option in hours"
                        :key="option.name"
                        :value="option"
                        v-slot="{ active, checked }"
                    >
                        <div
                            :class="[
                                active ? 'ring-2 ring-offset-2 ring-cerulean-500' : '',
                                checked
                                    ? 'bg-cerulean-600 border-transparent text-white hover:bg-cerulean-700'
                                    : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                                'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer',
                            ]"
                        >
                            <RadioGroupLabel as="span">{{ option.name }}</RadioGroupLabel>
                        </div>
                    </RadioGroupOption>
                </div>
            </RadioGroup>
            <button
                @click="submitReservation"
                class="mt-4 bg-cerulean-500 hover:bg-cerulean-700 text-white font-bold py-2 px-4 rounded w-full"
            >
                Reserve
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { format, addMinutes, parseISO } from 'date-fns'
import { RadioGroup, RadioGroupOption, RadioGroupLabel } from '@headlessui/vue'
import VueTailwindDatepicker from 'vue-tailwind-datepicker'

const dateValue = ref('')
const mem = ref(null) // Selected duration
const hr = ref(null) // Selected hour

const durations = [
    { name: '15 min', value: 15 },
    { name: '30 min', value: 30 },
    { name: '45 min', value: 45 },
    { name: '60 min', value: 60 },
    { name: '90 min', value: 90 },
    { name: '120 min', value: 120 },
]

const hours = [
    { name: '08:00', value: '08:00', ampm: 'am' },
    { name: '08:30', value: '08:30', ampm: 'am' },
    { name: '09:00', value: '09:00', ampm: 'am' },
    { name: '09:30', value: '09:30', ampm: 'am' },
    { name: '10:00', value: '10:00', ampm: 'am' },
    { name: '10:30', value: '10:30', ampm: 'am' },
    { name: '11:00', value: '11:00', ampm: 'am' },
    { name: '11:30', value: '11:30', ampm: 'am' },
    { name: '12:00', value: '12:00', ampm: 'pm' },
    { name: '12:30', value: '12:30', ampm: 'pm' },
    { name: '13:00', value: '13:00', ampm: 'pm' }, // Note: 13:00 is 1:00 pm
    { name: '13:30', value: '13:30', ampm: 'pm' },
    { name: '14:00', value: '14:00', ampm: 'pm' },
    { name: '14:30', value: '14:30', ampm: 'pm' },
    { name: '15:00', value: '15:00', ampm: 'pm' },
    { name: '15:30', value: '15:30', ampm: 'pm' },
    { name: '16:00', value: '16:00', ampm: 'pm' },
    { name: '16:30', value: '16:30', ampm: 'pm' },
    { name: '17:00', value: '17:00', ampm: 'pm' },
    { name: '17:30', value: '17:30', ampm: 'pm' },
    { name: '18:00', value: '18:00', ampm: 'pm' },
    { name: '18:30', value: '18:30', ampm: 'pm' },
    { name: '19:00', value: '19:00', ampm: 'pm' },
    { name: '19:30', value: '19:30', ampm: 'pm' },
    { name: '20:00', value: '20:00', ampm: 'pm' },
    { name: '20:30', value: '20:30', ampm: 'pm' },
    { name: '21:00', value: '21:00', ampm: 'pm' },
    { name: '21:30', value: '21:30', ampm: 'pm' },
    { name: '22:00', value: '22:00', ampm: 'pm' },
    { name: '22:30', value: '22:30', ampm: 'pm' },
    { name: '23:00', value: '23:00', ampm: 'pm' },
    { name: '23:30', value: '23:30', ampm: 'pm' },
]

const API_ENDPOINT = '/api/reserve'
const ACTIVITY_SECTOR_ID = 1

const submitReservation = async () => {
    if (!dateValue.value || !mem.value || !hr.value) {
        alert('Please select a date, duration, and time.')
        return
    }

    const selectedDate = parseISO(dateValue.value) // Convert selected date to Date object
    const selectedTime = hr.value.value // Use 'value' for consistency
    const [hour, minute] = selectedTime.split(':').map(Number)
    const startTime = new Date(selectedDate.setHours(hour, minute))
    const endTime = addMinutes(startTime, mem.value.value) // Add duration to start time to get end time

    try {
        await axios.post(route('generic.reserve'), {
            reserved_date: format(startTime, 'yyyy-MM-dd'),
            reserved_time: format(startTime, 'HH:mm:ss'),
            end_reserved_date: format(endTime, 'yyyy-MM-dd'),
            end_reserved_time: format(endTime, 'HH:mm:ss'),
        })
        alert('Reservation successful!')
    } catch (error) {
        console.error('Failed to make reservation:', error)
        alert('Failed to make reservation.')
    }
}
</script>

<style scoped>
/* Style adjustments if necessary */
</style>
