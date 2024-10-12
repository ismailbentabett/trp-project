<template>
    <AuthenticatedLayout title="Générateur d'IA" description="Générateur d'IA">
        <div class="relative">
            <!-- Your AI-generated text content here -->
            <div
                v-if="!props.facebookCookies"
                class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity flex items-center justify-center z-50"
            >
                <div class="text-center">
                    <div
                        class="w-40 h-40 mx-auto bg-contain bg-no-repeat bg-center mb-4 opacity-50"
                        style="background-image: url('images/lock.png')"
                    ></div>
                    <a
                        type="button"
                        href="/auth/facebook"
                        class="py-2 px-4 max-w-md flex justify-center items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                    >
                        <div class="text-white flex space-x-2">
                            <svg
                                width="20"
                                height="20"
                                fill="currentColor"
                                class="mr-2"
                                viewBox="0 0 1792 1792"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"
                                ></path>
                            </svg>
                        </div>
                        Se connecter à Facebook / Instagram
                    </a>
                </div>
            </div>
        </div>
        <form id="content">
            <div class="bg-gray-100 p-10">
                <div class="grid grid-cols-12 md:gap-6">
                    <div class="col-span-12 lg:col-span-4">
                        <div class="shadow sm:overflow-hidden sm:rounded-md">
                            <div class="flex flex-col justify-center space-y-6 bg-white px-4 py-5 sm:p-6 h-screen">
                                <div>
                                    <label for="type" class="block text-sm font-medium text-gray-700">Type</label>
                                    <div class="mt-1">
                                        <SelectField v-model="form.type" :options="types" />
                                    </div>
                                </div>
                                <div>
                                    <label for="type" class="block text-sm font-medium text-gray-700"
                                        >Type de média</label
                                    >
                                    <div class="mt-1">
                                        <SelectField v-model="form.MIMETYPE" :options="MIMETYPE" />
                                    </div>
                                </div>

                                <div>
                                    <label for="platform" class="block text-sm font-medium text-gray-700"
                                        >Plateforme</label
                                    >
                                    <div class="mt-1">
                                        <SelectField v-model="form.platform" :options="platforms" />
                                    </div>
                                </div>
                                <div v-if="form.platform == 'Instagram'">
                                    <label for="type" class="block text-sm font-medium text-gray-700"
                                        >INSTAGRAM TYPES</label
                                    >
                                    <div class="mt-1">
                                        <SelectField v-model="form.INSTAGRAMTYPES" :options="filterINSTAGRAMTYPES" />
                                    </div>
                                </div>
                                <div>
                                    <label for="tone" class="block text-sm font-medium text-gray-700">Tonalité</label>
                                    <div class="mt-1">
                                        <SelectField v-model="form.tone" :options="tone" />
                                    </div>
                                </div>
                                <div>
                                    <label for="language" class="block text-sm font-medium text-gray-700">Langue</label>
                                    <div class="mt-1">
                                        <SelectField v-model="form.language" :options="Languages" />
                                    </div>
                                </div>

                                <div v-if="isCustom()">
                                    <label for="topic" class="block text-sm font-medium text-gray-700">Sujet</label>
                                    <div class="relative mt-1 rounded-md shadow-sm">
                                        <input
                                            v-model="form.topic"
                                            type="text"
                                            name="topic"
                                            class=""
                                            :class="[
                                                checkIfThereIsError('topic')
                                                    ? 'block w-full rounded-md border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm'
                                                    : 'block w-full rounded-md pr-10 text-gray-900  focus:outline-none sm:text-sm border-gray-300 focus:ring-cerulean-500 focus:border-cerulean-500',
                                            ]"
                                            aria-invalid="true"
                                        />
                                        <div
                                            v-if="checkIfThereIsError('topic')"
                                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
                                        >
                                            <ExclamationCircleIcon class="h-5 w-5 text-red-500" aria-hidden="true" />
                                        </div>
                                    </div>
                                    <p class="mt-2 text-sm text-red-600" id="email-error">
                                        <span v-for="error of getErrorMessage('topic')" :key="error.$uid">
                                            <strong>{{ error.$message }}</strong>
                                        </span>
                                    </p>
                                </div>
                                <div v-if="isCustom()">
                                    <label for="title" class="block text-sm font-medium text-gray-700">Titre</label>
                                    <div class="relative mt-1 rounded-md shadow-sm">
                                        <input
                                            v-model="form.title"
                                            type="text"
                                            name="title"
                                            class=""
                                            :class="[
                                                checkIfThereIsError('title')
                                                    ? 'block w-full rounded-md border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm'
                                                    : 'block w-full rounded-md pr-10 text-gray-900  focus:outline-none sm:text-sm border-gray-300 focus:ring-cerulean-500 focus:border-cerulean-500',
                                            ]"
                                            aria-invalid="true"
                                        />
                                        <div
                                            v-if="checkIfThereIsError('title')"
                                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
                                        >
                                            <ExclamationCircleIcon class="h-5 w-5 text-red-500" aria-hidden="true" />
                                        </div>
                                    </div>
                                    <p class="mt-2 text-sm text-red-600" id="email-error">
                                        <span v-for="error of getErrorMessage('title')" :key="error.$uid">
                                            <strong>{{ error.$message }}</strong>
                                        </span>
                                    </p>
                                </div>

                                <div>
                                    <label for="title" class="block text-sm font-medium text-gray-700">Longueur</label>
                                    <div class="relative mt-1 rounded-md shadow-sm">
                                        <div class="mt-1">
                                            <div class="flex items-center border border-gray-200 rounded">
                                                <button
                                                    type="button"
                                                    @click="minus()"
                                                    class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                                                >
                                                    &minus;
                                                </button>

                                                <input
                                                    v-model="form.length"
                                                    type="number"
                                                    id="Length"
                                                    minlength="10"
                                                    maxlength="3000"
                                                    pattern="/^-?\d+\.?\d*$/"
                                                    onKeyPress="if(this.value.length==4) return false;"
                                                    :class="[
                                                        checkIfThereIsError('length')
                                                            ? 'block w-full rounded-md border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm h-10 w-full border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none'
                                                            : 'block w-full rounded-md pr-10 text-gray-900  focus:outline-none sm:text-sm border-gray-300 focus:ring-cerulean-500 focus:border-cerulean-500 h-10 w-full border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none',
                                                    ]"
                                                />

                                                <button
                                                    type="button"
                                                    @click="plus()"
                                                    class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                                                >
                                                    &plus;
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="mt-2 text-sm text-red-600" id="email-error">
                                        <span v-for="error of getErrorMessage('length')" :key="error.$uid">
                                            <strong>{{ error.$message }}</strong>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6"></div>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 flex justify-center items-center">
                        <div class="shadow sm:overflow-hidden sm:rounded-md w-full">
                            <div
                                class="space-y-6 bg-white px-4 py-5 sm:p-6 w-full h-screen flex flex-col justify-center"
                            >
                                <div class=" ">
                                    <div class="col-span-3 sm:col-span-2">
                                        <label
                                            v-if="!isCustom()"
                                            for="prompt"
                                            class="block text-sm font-medium text-gray-700"
                                            >Prompt</label
                                        >
                                        <div class="mt-1 flex rounded-md shadow-sm space-x-3">
                                            <input
                                                v-if="!isCustom()"
                                                v-model="form.prompt"
                                                type="text"
                                                name="prompt"
                                                id="cprompt"
                                                class="w-full rounded-none rounded-r-md border-gray-300 focus:border-cerulean-500 focus:ring-cerulean-500 sm:text-sm"
                                                placeholder="Write Prompt"
                                            />

                                            <button
                                                type="button"
                                                @click="generate()"
                                                class="flex-1 inline-flex items-center justify-center cursor-pointer rounded-md border border-transparent bg-cerulean-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2"
                                                :disabled="checkIfThereIsAnyError()"
                                            >
                                                Générer
                                                <SparklesIcon class="h-6 w-6 ml-2 -mr-1 text-white" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label for="content" class="block text-sm font-medium text-gray-700">Contenu</label>
                                    <div class="mt-1">
                                        <quill-editor
                                            v-model:content="form.content"
                                            contentType="text"
                                            style="height: 400px"
                                            theme="snow"
                                            :options="options"
                                        />
                                    </div>
                                </div>

                                <file-pond
                                    class="cursor-pointer"
                                    v-if="
                                        showImageUpload() &&
                                        form.INSTAGRAMTYPES != 'Post' &&
                                        form.INSTAGRAMTYPES != 'Story'
                                    "
                                    ref="imagePond"
                                    name="images"
                                    allow-multiple
                                    label-idle="Télécharger les images ici"
                                    accepted-file-types="image/*"
                                />
                                <file-pond
                                    class="cursor-pointer"
                                    v-if="
                                        showImageUpload() &&
                                        form.INSTAGRAMTYPES != 'Carousel' &&
                                        form.platform == 'Instagram'
                                    "
                                    ref="imagePond"
                                    name="image"
                                    allow-multiple
                                    label-idle="Télécharger les images ici"
                                    v-bind:allow-multiple="false"
                                    accepted-file-types="image/*"
                                />
                                <file-pond
                                    class="cursor-pointer"
                                    v-if="form.MIMETYPE == 'images' && form.platform == 'Facebook'"
                                    ref="imagePond"
                                    name="image"
                                    allow-multiple
                                    label-idle="Télécharger les images ici"
                                    v-bind:allow-multiple="false"
                                    accepted-file-types="image/*"
                                />

                                <file-pond
                                    class="cursor-pointer"
                                    v-if="showVideoUpload()"
                                    name="video"
                                    ref="videoPond"
                                    label-idle="Télécharger la vidéo ici"
                                    v-bind:allow-multiple="false"
                                    accepted-file-types="video/*"
                                    v-bind:files="myFiles"
                                    imageCropAspectRatio="4:5"
                                />
                            </div>
                            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6 mt-10">
                                <button
                                    v-if="form.MIMETYPE == 'images' && form.platform == 'Facebook'"
                                    type="button"
                                    @click="createFacebookPostWithImages()"
                                    class="inline-flex justify-center items-center w-full rounded-md border border-transparent bg-cerulean-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2"
                                    :disabled="checkIfThereIsAnyError()"
                                >
                                    Publier avec des images sur Facebook
                                    <ShareIcon class="h-6 w-6 ml-2 -mr-1 text-white" />
                                </button>
                                <button
                                    v-if="form.MIMETYPE == 'video' && form.platform == 'Facebook'"
                                    type="button"
                                    @click="createFacebookPostWithvideo()"
                                    class="inline-flex justify-center items-center w-full rounded-md border border-transparent bg-cerulean-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2"
                                    :disabled="checkIfThereIsAnyError()"
                                >
                                    Publier une vidéo sur Facebook
                                    <ShareIcon class="h-6 w-6 ml-2 -mr-1 text-white" />
                                </button>
                                <button
                                    v-if="
                                        form.MIMETYPE == 'images' &&
                                        form.platform == 'Instagram' &&
                                        form.INSTAGRAMTYPES == 'Carousel'
                                    "
                                    type="button"
                                    @click="CreateInstagramPostCarousel()"
                                    class="inline-flex justify-center items-center w-full rounded-md border border-transparent bg-cerulean-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2"
                                    :disabled="checkIfThereIsAnyError()"
                                >
                                    Créer un carrousel de posts Instagram
                                    <ShareIcon class="h-6 w-6 ml-2 -mr-1 text-white" />
                                </button>
                                <button
                                    v-if="
                                        form.MIMETYPE == 'video' &&
                                        form.platform == 'Instagram' &&
                                        form.INSTAGRAMTYPES == 'Reel'
                                    "
                                    type="button"
                                    @click="PostInstagramReel()"
                                    class="inline-flex justify-center items-center w-full rounded-md border border-transparent bg-cerulean-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2"
                                    :disabled="checkIfThereIsAnyError()"
                                >
                                    Post Instagram Reel
                                    <ShareIcon class="h-6 w-6 ml-2 -mr-1 text-white" />
                                </button>
                                <button
                                    v-if="
                                        form.MIMETYPE == 'images' &&
                                        form.platform == 'Instagram' &&
                                        form.INSTAGRAMTYPES == 'Story'
                                    "
                                    type="button"
                                    @click="PostInstagramImageStory()"
                                    class="inline-flex justify-center items-center w-full rounded-md border border-transparent bg-cerulean-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2"
                                    :disabled="checkIfThereIsAnyError()"
                                >
                                    Post Instagram Image Story
                                    <ShareIcon class="h-6 w-6 ml-2 -mr-1 text-white" />
                                </button>
                                <button
                                    v-if="
                                        form.MIMETYPE == 'video' &&
                                        form.platform == 'Instagram' &&
                                        form.INSTAGRAMTYPES == 'Story'
                                    "
                                    type="button"
                                    @click="PostInstagramVideoStory()"
                                    class="inline-flex justify-center items-center w-full rounded-md border border-transparent bg-cerulean-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2"
                                    :disabled="checkIfThereIsAnyError()"
                                >
                                    Post Instagram Video Story
                                    <ShareIcon class="h-6 w-6 ml-2 -mr-1 text-white" />
                                </button>
                                <button
                                    v-if="
                                        form.MIMETYPE == 'images' &&
                                        form.platform == 'Instagram' &&
                                        form.INSTAGRAMTYPES == 'Post'
                                    "
                                    type="button"
                                    @click="SingleImagePostOnInstagram()"
                                    class="inline-flex justify-center items-center w-full rounded-md border border-transparent bg-cerulean-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2"
                                    :disabled="checkIfThereIsAnyError()"
                                >
                                    Publication d'une seule image sur Instagram
                                    <ShareIcon class="h-6 w-6 ml-2 -mr-1 text-white" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </AuthenticatedLayout>
</template>

<script setup>
import SelectField from '@/Components/SelectField.vue'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import { ExclamationCircleIcon, ShareIcon, SparklesIcon } from '@heroicons/vue/24/solid'

import vueFilePond from 'vue-filepond'

//ref
import { computed, ref } from 'vue'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import FilePond plugins
// Please note that you need to install these plugins separately

// Import image preview plugin styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview)

const page = usePage()
const imagePond = ref(null)
const videoPond = ref(null)
const files = ref([])
const csrf = computed(() => page.props.csrf_token)

let options = {
    debug: 'info',
    modules: {
        toolbar: [
            'bold',
            'italic',
            'underline',
            'strike',
            'blockquote',
            'header',
            'list',
            'indent',
            'align',
            'color',
            'background',
            'font',
            'size',
            'clean',
        ],
    },
    placeholder: 'Compose an epic...',
    theme: 'snow',
    readOnly: false,
    bounds: document.body,
    scrollingContainer: document.documentElement,
    innerHeight: 300,
}

import { usePage } from '@inertiajs/vue3'

let types = [
    { id: 1, label: 'Publication sur les réseaux sociaux', value: 'Social Media Post' },
    { id: 2, label: 'Plan marketing', value: 'Marketing Plan' },
    { id: 3, label: 'Stratégie de création de contenu', value: 'Content Creation Strategy' },
    { id: 4, label: 'Proposition commerciale', value: 'Business Proposal' },
    { id: 5, label: 'Rapport de recherche de marché', value: 'Market Research Report' },
    { id: 6, label: 'Campagne de marketing par e-mail', value: 'Email Marketing Campaign' },
    { id: 7, label: "Article de blog d'entreprise", value: 'Business Blog Post' },
    { id: 8, label: 'Calendrier éditorial', value: 'Content Calendar' },
    { id: 9, label: 'Stratégie publicitaire', value: 'Advertising Strategy' },
    { id: 10, label: 'Présentation commerciale', value: 'Business Presentation' },
    { id: 11, label: 'Personnalisé', value: 'Custom' },
]

let MIMETYPE = [
    { id: 1, label: 'images', value: 'images' },
    { id: 2, label: 'video', value: 'video' },
]

let INSTAGRAMTYPES = [
    { id: 1, label: 'Publication', value: 'Post' },
    { id: 2, label: 'Story', value: 'Story' },
    { id: 3, label: 'Reel', value: 'Reel' },
    { id: 4, label: 'Carousel', value: 'Carousel' },
]

const filterINSTAGRAMTYPES = computed(() => {
    //images & videos
    if (form.MIMETYPE == 'images') {
        form.INSTAGRAMTYPES = 'Story'
        return INSTAGRAMTYPES.filter((item) => item.value !== 'Reel')
    }
    if (form.MIMETYPE == 'video') {
        form.INSTAGRAMTYPES = 'Story'
        return INSTAGRAMTYPES.filter((item) => item.value !== 'Carousel' && item.value !== 'Post')
    }
})

let platforms = [
    { id: 1, label: 'Facebook', value: 'Facebook' },
    { id: 2, label: 'Instagram', value: 'Instagram' },
    { id: 4, label: 'LinkedIn', value: 'LinkedIn' },
]

let tone = [
    { id: 1, label: 'Formel', value: 'Formal' },
    { id: 2, label: 'Décontracté', value: 'Casual' },
    { id: 3, label: 'Humoristique', value: 'Humorous' },
    { id: 4, label: 'Professionnel', value: 'Professional' },
    { id: 5, label: 'Amical', value: 'Friendly' },
    { id: 6, label: 'Informatif', value: 'Informative' },
    { id: 7, label: 'Persuasif', value: 'Persuasive' },
    { id: 8, label: 'Éducatif', value: 'Educational' },
    { id: 9, label: 'Inspirant', value: 'Inspirational' },
    { id: 10, label: 'Conversationnel', value: 'Conversational' },
    { id: 11, label: 'Technique', value: 'Technical' },
    { id: 12, label: 'Analytique', value: 'Analytical' },
    { id: 13, label: 'Données basées', value: 'Data-driven' },
    { id: 14, label: 'Créatif', value: 'Creative' },
    { id: 15, label: 'Captivant', value: 'Engaging' },
    { id: 16, label: 'Crédible', value: 'Credible' },
    { id: 17, label: 'Axé sur la valeur', value: 'Value-driven' },
    { id: 18, label: 'Axé sur le ROI', value: 'ROI-focused' },
    { id: 19, label: 'Axé sur les résultats', value: 'Results-driven' },
    { id: 20, label: 'Visuel', value: 'Visual' },
]

let Languages = [
    { id: 1, label: 'Anglais', value: 'English' },
    { id: 3, label: 'Français', value: 'French' },
    { id: 4, label: 'Arabe', value: 'Arabic' },
]

import { useVuelidate } from '@vuelidate/core'
import { maxValue, minValue, required } from '@vuelidate/validators'

import { onMounted, reactive } from 'vue'

let form = reactive({
    type: 'Social Media Post',
    title: '',
    length: 20,
    topic: '',
    tone: 'Formal',
    platform: 'Facebook',
    language: 'English',
    prompt: '',
    content: '',
    images: [],
    MIMETYPE: 'images',
    INSTAGRAMTYPES: 'Story',
})
const handleFilePondInit = () => {
    // FilePond instance methods are available on `this.$refs.pond`
}

const isCustom = () => {
    return !(form.type == 'Custom')
}

const rules = computed(() => ({
    type: { required },
    title: isCustom() ? { required, minValue: minValue(10), maxValue: maxValue(3000) } : {},
    length: { minLVaue: minValue(10), maxValue: maxValue(3000) },
    topic: isCustom() ? { required } : {},
    tone: isCustom() ? { required, minValue: minValue(10), maxValue: maxValue(3000) } : {},
    platform: { required },
    language: { required },
}))

const v$ = useVuelidate(rules, form)

onMounted(() => {
    v$.value.$touch()
})

const generate = () => {
    if (!v$.value.$error) {
        axios
            .post(route('generate'), {
                type: form.type,
                title: form.title,
                length: form.length,
                topic: form.topic,
                tone: form.tone,
                platform: form.platform,
                prompt: form.prompt,
            })
            .then((response) => {
                form.content = response.data.content
            })
            .catch((error) => {})
    }
}
const getErrorMessage = (property) => {
    if (v$.value[property] !== undefined) {
        return v$.value[property].$errors
    }

    return []
}

const checkIfThereIsError = (property) => {
    return v$.value[property].$error
}

const checkIfThereIsAnyError = () => {
    return v$.value.$error
}

const plus = () => {
    form.length++
}
const minus = () => {
    if (form.length >= 11) {
        form.length--
    }
}

const myFiles = ref([])

const createFacebookPostWithImages = () => {
    const formData = new FormData()
    myFiles.value = imagePond.value.getFiles()
    myFiles.value.forEach((file) => {
        formData.append('images[]', file.file)
    })

    const response = axios
        .post(route('facebook.post.images.cloudinary'), formData)
        .then((response) => {
            axios
                .post(route('facebook.post.images'), {
                    caption: form.content,
                    images: response.data,
                })
                .then((response) => {})
                .catch((error) => {})
        })
        .catch((error) => {})
}
const createFacebookPostWithvideo = () => {
    const formData = new FormData()
    myFiles.value = videoPond.value.getFiles()
    //one video

    formData.append('video', myFiles.value[0].file)

    const response = axios
        .post(route('facebook.post.video.cloudinary'), formData)
        .then((response) => {
            axios
                .post(route('facebook.post.videos'), {
                    caption: form.content,
                    video: response.data,
                })
                .then((response) => {})
                .catch((error) => {})
        })
        .catch((error) => {})
}
const CreateInstagramPostCarousel = async () => {
    const formData = new FormData()
    let images = imagePond.value.getFiles()

    images.forEach((file) => {
        formData.append('images[]', file.file)
    })

    let imageResponse = await axios.post(route('facebook.post.images.cloudinary'), formData)

    let carouselItems = []

    imageResponse.data.forEach((image) => {
        carouselItems.push({
            type: 'image',
            url: image,
        })
    })

    await axios
        .post(route('instagram.post.carousel'), {
            caption: form.content,
            items: carouselItems,
        })
        .then((response) => {})
        .catch((error) => {})
}

const PostInstagramReel = async () => {
    const formData = new FormData()
    const video = videoPond.value.getFiles()
    formData.append('video', video[0].file)
    let videoResponse = await axios.post(route('facebook.post.video.cloudinary'), formData)

    await axios
        .post(route('instagram.post.reel'), {
            caption: form.content,
            video: videoResponse.data,
        })
        .then((response) => {})
}

const PostInstagramImageStory = async () => {
    const formData = new FormData()
    const image = imagePond.value.getFiles()
    formData.append('images[]', image[0].file)
    let imageResponse = await axios.post(route('facebook.post.images.cloudinary'), formData)

    await axios
        .post(route('instagram.post.story.image'), {
            caption: form.content,
            image: imageResponse.data,
        })
        .then((response) => {})
}

const PostInstagramVideoStory = async () => {
    const formData = new FormData()
    const video = videoPond.value.getFiles()
    formData.append('video', video[0].file)
    let videoResponse = await axios.post(route('facebook.post.video.cloudinary'), formData)
    await axios
        .post(route('instagram.post.story.video'), {
            caption: form.content,
            video: videoResponse.data,
        })
        .then((response) => {})
}

const SingleImagePostOnInstagram = async () => {
    const formData = new FormData()
    const image = imagePond.value.getFiles()
    formData.append('images[]', image[0].file)
    let imageResponse = await axios.post(route('facebook.post.images.cloudinary'), formData)

    await axios
        .post(route('instagram.post.image'), {
            caption: form.content,
            image: imageResponse.data,
        })
        .then((response) => {})
}

const showImageUpload = () => {
    if (form.MIMETYPE == 'images') {
        return true
    }
}

const showVideoUpload = () => {
    if (form.MIMETYPE == 'video') {
        return true
    }
}

import { defineProps } from 'vue'
const props = defineProps({
    facebookCookies: {
        type: Object,
        default: () => ({}),
    },
})
</script>

<style>
@media (min-width: 30em) {
    .filepond--item {
        width: calc(50% - 0.5em);
    }
}

@media (min-width: 50em) {
    .filepond--item {
        width: calc(33.33% - 0.5em);
    }
}

.filepond--root {
    max-height: 20em;
}
</style>
