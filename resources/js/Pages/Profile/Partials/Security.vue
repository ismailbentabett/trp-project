<script setup>
import InputError from '@/Components/InputError.vue'
import InputLabel from '@/Components/InputLabel.vue'
import PrimaryButton from '@/Components/PrimaryButton.vue'
import TextInput from '@/Components/TextInput.vue'
import { useForm } from '@inertiajs/vue3'
import { ref } from 'vue'
import Edit from '../Edit.vue'

const passwordInput = ref(null)
const currentPasswordInput = ref(null)

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
})

const updatePassword = () => {
    form.put(route('password.update'), {
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {
            if (form.errors.password) {
                form.reset('password', 'password_confirmation')
                passwordInput.value.focus()
            }
            if (form.errors.current_password) {
                form.reset('current_password')
                currentPasswordInput.value.focus()
            }
        },
    })
}
</script>

<template>
    <Edit>
        <form class="divide-y divide-gray-200 lg:col-span-9" @submit.prevent="updatePassword">
            <!-- Profile section -->
            <div class="py-6 px-4 sm:p-6 lg:pb-8">
                <div class="pt-8">
                    <div>
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Mettre à jour le mot de passe</h3>
                    </div>
                    <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div class="sm:col-span-6">
                            <div class="sm:col-span-6">
                                <InputLabel for="current_password" value="Mot de passe actuel" />

                                <TextInput
                                    id="current_password"
                                    ref="currentPasswordInput"
                                    v-model="form.current_password"
                                    type="password"
                                    class="mt-1 block w-full"
                                    autocomplete="current-password"
                                />

                                <InputError :message="form.errors.current_password" class="mt-2" />
                            </div>
                        </div>

                        <div class="sm:col-span-6">
                            <div class="sm:col-span-6">
                                <InputLabel for="password" value="Nouveau mot de passe" />

                                <TextInput
                                    id="password"
                                    ref="passwordInput"
                                    v-model="form.password"
                                    type="password"
                                    class="mt-1 block w-full"
                                    autocomplete="new-password"
                                />

                                <InputError :message="form.errors.password" class="mt-2" />
                            </div>
                        </div>

                        <div class="sm:col-span-6">
                            <div class="sm:col-span-6">
                                <InputLabel for="password_confirmation" value="Confirmer le mot de passe" />

                                <TextInput
                                    id="password_confirmation"
                                    v-model="form.password_confirmation"
                                    type="password"
                                    class="mt-1 block w-full"
                                    autocomplete="new-password"
                                />

                                <InputError :message="form.errors.password_confirmation" class="mt-2" />
                            </div>
                        </div>

                        <div class="sm:col-span-6">
                            <div class="sm:col-span-6">
                                <PrimaryButton :disabled="form.processing">Sauvegarder</PrimaryButton>

                                <Transition
                                    enter-active-class="transition ease-in-out"
                                    enter-from-class="opacity-0"
                                    leave-active-class="transition ease-in-out"
                                    leave-to-class="opacity-0"
                                >
                                    <p v-if="form.recentlySuccessful" class="text-sm text-gray-600">Sauvegardé.</p>
                                </Transition>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </Edit>
</template>
