<script setup>
import InputError from '@/Components/InputError.vue'
import InputLabel from '@/Components/InputLabel.vue'
import PrimaryButton from '@/Components/PrimaryButton.vue'
import SelectField from '@/Components/SelectField.vue'
import TextInput from '@/Components/TextInput.vue'
import { Link, useForm, usePage } from '@inertiajs/vue3'
import Edit from '../Edit.vue'
import countries from './countries'

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
})

const user = usePage().props.auth.user

const form = useForm({
    name: user.name,
    email: user.email,
    state: user.state,
    city: user.city,
    address: user.address,
    zip_code: user.zip_code,
    phone: user.phone,
    country: user.country,
})

import vueFilePond from 'vue-filepond'

//ref
import { ref } from 'vue'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import FilePond plugins
// Please note that you need to install these plugins separately

// Import image preview plugin styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview)

const coverPond = ref(null)
const avatarPond = ref(null)
const CoverUrl = user.cover
const AvatarUrl = user.avatar

const coverOnINit = () => {
    coverPond.value.addFile(CoverUrl)
}

const avatarOnINit = () => {
    avatarPond.value.addFile(AvatarUrl)
}

const uploadCover = async (error, file) => {
    const formData = new FormData()
    formData.append('cover', file.file)

    axios
        .post('/profile/upload-cover', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((response) => {})
        .catch((error) => {})
}
const uploadAvatar = async (error, file) => {
    const formData = new FormData()
    formData.append('avatar', file.file)

    axios
        .post('/profile/upload-avatar', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((response) => {})
        .catch((error) => {})
}
</script>

<template>
    <Edit>
        <form class="divide-y divide-gray-200 lg:col-span-9" @submit.prevent="form.patch(route('settings.update'))">
            <div v-if="mustVerifyEmail && user.email_verified_at === null">
                <p class="text-sm mt-2 text-gray-800">
                    Votre adresse électronique n'est pas vérifiée.
                    <Link
                        :href="route('verification.send')"
                        method="post"
                        as="button"
                        class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cerulean-500"
                    >
                        Cliquez ici pour renvoyer l'e-mail de vérification.
                    </Link>
                </p>

                <div v-show="status === 'verification-link-sent'" class="mt-2 font-medium text-sm text-green-600">
                    Un nouveau lien de vérification a été envoyé à votre adresse électronique.
                </div>
            </div>

            <!-- Profile section -->
            <div class="py-6 px-4 sm:p-6 lg:pb-8">
                <div>
                    <h2 class="text-lg font-medium leading-6 text-gray-900">Profil</h2>
                    <p class="mt-1 text-sm text-gray-500">Ces informations seront affichées publiquement. partager.</p>
                </div>

                <div class="grid grid-cols-12 gap-6 mt-6 mr-10">
                    <div class="col-span-12 sm:col-span-8">
                        <div class="sm:col-span-6">
                            <label for="cover-photo" class="block text-sm font-medium text-gray-700"
                                >Photo de couverture</label
                            >

                            <file-pond
                                class="cursor-pointer"
                                ref="coverPond"
                                name="cover"
                                label-idle="Téléchargez l'image de couverture ici"
                                accepted-file-types="image/*"
                                @addfile="uploadCover"
                                @init="coverOnINit"
                            />
                        </div>
                    </div>

                    <div class="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-4">
                        <div class="flex items-center">
                            <div class="ml-5 rounded-md">
                                <div class="group relative flex items-center justify-center rounded-md">
                                    <file-pond
                                        labelIdle="''Glisser-déposer votre image ou  <span class='filepond--label-action'>Parcourir</span>'"
                                        imagePreviewHeight="170,"
                                        imageCropAspectRatio="1:1"
                                        imageResizeTargetWidth="200"
                                        imageResizeTargetHeight="200"
                                        stylePanelLayout="compact circle"
                                        styleLoadIndicatorPosition="center bottom"
                                        styleProgressIndicatorPosition="right botto"
                                        styleButtonRemoveItemPosition="left bottom"
                                        styleButtonProcessItemPosition="right bottom"
                                        class="cursor-pointer avatar-upload"
                                        ref="avatarPond"
                                        name="cover"
                                        label-idle="Téléchargez l'image de Profil ici"
                                        accepted-file-types="image/*"
                                        @addfile="uploadAvatar"
                                        @init="avatarOnINit"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pt-8">
                    <div>
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Informations personnelles</h3>
                        <p class="mt-1 text-sm text-gray-500">
                            Utilisez une adresse permanente où vous pouvez recevoir du courrier.
                        </p>
                    </div>
                    <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div class="sm:col-span-6">
                            <InputLabel for="name" value="Nom" />

                            <TextInput
                                id="name"
                                type="text"
                                class="mt-1 block w-full"
                                v-model="form.name"
                                required
                                autofocus
                                autocomplete="name"
                            />

                            <InputError class="mt-2" :message="form.errors.name" />
                        </div>

                        <div class="sm:col-span-6">
                            <InputLabel for="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                class="mt-1 block w-full"
                                v-model="form.email"
                                required
                                autocomplete="username"
                            />

                            <InputError class="mt-2" :message="form.errors.email" />
                        </div>

                        <div class="sm:col-span-6">
                            <div>
                                <label for="country" class="block text-sm font-medium text-gray-700">Pays</label>
                                <div class="mt-1">
                                    <SelectField v-model="form.country" :options="countries" />
                                </div>
                            </div>
                        </div>

                        <div class="sm:col-span-6">
                            <div class="sm:col-span-6">
                                <InputLabel for="state" value="État" />

                                <TextInput
                                    id="state"
                                    type="text"
                                    class="mt-1 block w-full"
                                    v-model="form.state"
                                    required
                                />

                                <InputError class="mt-2" :message="form.errors.state" />
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <div class="sm:col-span-6">
                                <InputLabel for="city" value="Ville" />

                                <TextInput
                                    id="city"
                                    type="text"
                                    class="mt-1 block w-full"
                                    v-model="form.city"
                                    required
                                />

                                <InputError class="mt-2" :message="form.errors.city" />
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <div class="sm:col-span-6">
                                <InputLabel for="address" value="Adresse" />

                                <TextInput
                                    id="address"
                                    type="text"
                                    class="mt-1 block w-full"
                                    v-model="form.address"
                                    required
                                />

                                <InputError class="mt-2" :message="form.errors.address" />
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <div class="sm:col-span-6">
                                <InputLabel for="zip_code" value="Code postal" />

                                <TextInput
                                    id="zip_code"
                                    type="text"
                                    class="mt-1 block w-full"
                                    v-model="form.zip_code"
                                    required
                                />

                                <InputError class="mt-2" :message="form.errors.zip_code" />
                            </div>
                        </div>
                        <div class="sm:col-span-6">
                            <div class="sm:col-span-6">
                                <InputLabel for="phone" value="Numéro de téléphone" />

                                <TextInput
                                    id="phone"
                                    type="text"
                                    class="mt-1 block w-full"
                                    v-model="form.phone"
                                    required
                                />

                                <InputError class="mt-2" :message="form.errors.phone" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pt-5 m-5">
                <div class="flex justify-end">
                    <PrimaryButton :disabled="form.processing">Save</PrimaryButton>

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
        </form>
    </Edit>
</template>

<style>
.avatar-upload .filepond--root {
    width: 15vw;
    height: 15vw;
}

@media (max-width: 768px) {
    .avatar-upload .filepond--root {
        width: 30vw;
        height: 30vw;
    }
}

@media (max-width: 480px) {
    .avatar-upload .filepond--root {
        width: 50vw;
        height: 50vw;
    }
}

@media (max-width: 320px) {
    .avatar-upload .filepond--root {
        width: 70vw;
        height: 70vw;
    }
}
</style>
