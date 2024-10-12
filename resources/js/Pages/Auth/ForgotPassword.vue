<script setup>
import InputError from '@/Components/InputError.vue'
import InputLabel from '@/Components/InputLabel.vue'
import PrimaryButton from '@/Components/PrimaryButton.vue'
import TextInput from '@/Components/TextInput.vue'
import GuestLayout from '@/Layouts/GuestLayout.vue'
import { useForm } from '@inertiajs/vue3'

defineProps({
    status: {
        type: String,
    },
})

const form = useForm({
    email: '',
})

const submit = () => {
    form.post(route('password.email'))
}
</script>

<template>
    <GuestLayout title="Mot De Passe Oublié" description="Mot De Passe Oublié">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 m-20">
            <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
            <div class="mx-auto max-w-3xl">
                <div class="mb-4 text-sm text-gray-600">
                    Vous avez oublié votre mot de passe ? Pas de problème. Indiquez-nous votre adresse électronique et
                    nous vous enverrons par courriel un mot de passe réinitialisation qui vous permettra d'en choisir un
                    nouveau.
                </div>

                <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
                    {{ status }}
                </div>

                <form @submit.prevent="submit">
                    <div>
                        <InputLabel for="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            class="mt-1 block w-full"
                            v-model="form.email"
                            required
                            autofocus
                            autocomplete="username"
                        />

                        <InputError class="mt-2" :message="form.errors.email" />
                    </div>

                    <div class="flex items-center justify-end mt-4">
                        <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            Lien de réinitialisation du mot de passe par courriel
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    </GuestLayout>
</template>
