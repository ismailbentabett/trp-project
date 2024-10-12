<script setup>
import InputError from '@/Components/InputError.vue'
import InputLabel from '@/Components/InputLabel.vue'
import PrimaryButton from '@/Components/PrimaryButton.vue'
import TextInput from '@/Components/TextInput.vue'
import GuestLayout from '@/Layouts/GuestLayout.vue'
import { useForm } from '@inertiajs/vue3'

const form = useForm({
    password: '',
})

const submit = () => {
    form.post(route('password.confirm'), {
        onFinish: () => form.reset(),
    })
}
</script>

<template>
    <GuestLayout title="Confirmer Le Mot De Passe" description="Confirmer Le Mot De Passe">
        <div class="mb-4 text-sm text-gray-600">
            Il s'agit d'une zone sécurisée de l'application. Veuillez confirmer votre mot de passe avant de continuer.
        </div>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="password" value="Password" />
                <TextInput
                    id="password"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    required
                    autocomplete="current-password"
                    autofocus
                />
                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="flex justify-end mt-4">
                <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Confirmer
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template>
