<script setup>
import PrimaryButton from '@/Components/PrimaryButton.vue'
import GuestLayout from '@/Layouts/GuestLayout.vue'
import { Link, useForm } from '@inertiajs/vue3'
import { computed } from 'vue'

const props = defineProps({
    status: {
        type: String,
    },
})

const form = useForm({})

const submit = () => {
    form.post(route('verification.send'))
}

const verificationLinkSent = computed(() => props.status === 'verification-link-sent')
</script>

<template>
    <GuestLayout title="Vérifier l'e-mail" description="Vérifier l'e-mail">
        <div class="mb-4 text-sm text-gray-600">
            Merci de vous être inscrit ! Avant de commencer, pourriez-vous vérifier votre adresse e-mail en cliquant sur
            le lien que nous venons de vous envoyer ? Si vous n'avez pas reçu l'e-mail, nous vous en enverrons un autre
            avec plaisir.
        </div>

        <div class="mb-4 font-medium text-sm text-green-600" v-if="verificationLinkSent">
            Un nouveau lien de vérification a été envoyé à l'adresse électronique que vous avez fournie lors de votre
            inscription.
        </div>

        <form @submit.prevent="submit">
            <div class="mt-4 flex items-center justify-between">
                <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Renvoyer l'e-mail de vérification
                </PrimaryButton>

                <Link
                    :href="route('logout')"
                    method="post"
                    as="button"
                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cerulean-500"
                >
                    Se déconnecter</Link
                >
            </div>
        </form>
    </GuestLayout>
</template>
