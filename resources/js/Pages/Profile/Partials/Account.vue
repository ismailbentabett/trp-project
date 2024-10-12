<script setup>
import DangerButton from '@/Components/DangerButton.vue'
import InputError from '@/Components/InputError.vue'
import InputLabel from '@/Components/InputLabel.vue'
import Modal from '@/Components/Modal.vue'
import SecondaryButton from '@/Components/SecondaryButton.vue'
import TextInput from '@/Components/TextInput.vue'
import { useForm } from '@inertiajs/vue3'
import { nextTick, ref } from 'vue'
import Edit from '../Edit.vue'

const confirmingUserDeletion = ref(false)
const passwordInput = ref(null)

const form = useForm({
    password: '',
})

const confirmUserDeletion = () => {
    confirmingUserDeletion.value = true

    nextTick(() => passwordInput.value.focus())
}

const deleteUser = () => {
    form.delete(route('settings.destroy'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset(),
    })
}

const closeModal = () => {
    confirmingUserDeletion.value = false

    form.reset()
}
</script>

<template>
    <Edit>
        <form class="divide-y divide-gray-200 lg:col-span-9" @submit.prevent="updatePassword">
            <!-- Profile section -->
            <div class="py-6 px-4 sm:p-6 lg:pb-8">
                <div class="pt-8">
                    <div>
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Supprimer le compte</h3>
                    </div>
                    <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div class="sm:col-span-6">
                            <div class="sm:col-span-6">
                                <p class="mt-1 text-sm text-gray-600">
                                    Une fois votre compte supprimé, toutes ses ressources et données seront
                                    définitivement effacées. Avant de supprimer votre compte, veuillez télécharger
                                    toutes les données ou informations que vous souhaitez conserver.
                                </p>
                            </div>
                        </div>
                        <div class="sm:col-span-6">
                            <div class="sm:col-span-6">
                                <DangerButton
                                    class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
                                    @click="confirmUserDeletion"
                                    >Supprimer le compte</DangerButton
                                >

                                <Modal :show="confirmingUserDeletion" @close="closeModal">
                                    <div class="p-6">
                                        <h2 class="text-lg font-medium text-gray-900">
                                            Êtes-vous sûr de vouloir supprimer votre compte ?
                                        </h2>

                                        <p class="mt-1 text-sm text-gray-600">
                                            Une fois votre compte supprimé, toutes ses ressources et données seront
                                            définitivement définitivement. Veuillez saisir votre mot de passe pour
                                            confirmer que vous souhaitez supprimer définitivement votre compte. mot de
                                            passe pour confirmer que vous souhaitez supprimer définitivement votre
                                            compte. compte.
                                        </p>

                                        <div class="mt-6">
                                            <InputLabel for="password" value="Password" class="sr-only" />

                                            <TextInput
                                                id="password"
                                                ref="passwordInput"
                                                v-model="form.password"
                                                type="password"
                                                class="mt-1 block w-3/4"
                                                placeholder="Password"
                                                @keyup.enter="deleteUser"
                                            />

                                            <InputError :message="form.errors.password" class="mt-2" />
                                        </div>

                                        <div class="mt-6 flex justify-end">
                                            <SecondaryButton @click="closeModal"> Annuler </SecondaryButton>

                                            <DangerButton
                                                class="ml-3"
                                                :class="{ 'opacity-25': form.processing }"
                                                :disabled="form.processing"
                                                @click="deleteUser"
                                            >
                                                Supprimer le compte
                                            </DangerButton>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </Edit>
</template>
