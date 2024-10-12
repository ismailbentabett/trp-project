<template>
    <TicketsLayout>
        <div v-if="is_admin || is_super_admin || is_editor" class="bg-white shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
                <h3 class="text-lg font-medium leading-6 text-gray-900">Assigner un utilisateur</h3>

                <div class="flex flex-1 w-full items-center justify-center flex-wrap space-y-1">
                    <Combobox as="div" class="flex-1 w-full" v-model="selectedPerson">
                        <div class="relative mt-1">
                            <ComboboxInput
                                class="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-cerulean-500 focus:outline-none focus:ring-1 focus:ring-cerulean-500 sm:text-sm"
                                @change="query = $event.target.value"
                                :display-value="(person) => person?.name"
                            />
                            <ComboboxButton
                                class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"
                            >
                                <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </ComboboxButton>

                            <ComboboxOptions
                                v-if="filteredPeople.length > 0"
                                class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                            >
                                <ComboboxOption
                                    v-for="person in filteredPeople"
                                    :key="person.id"
                                    :value="person"
                                    as="template"
                                    v-slot="{ active, selected }"
                                >
                                    <li
                                        :class="[
                                            'relative cursor-default select-none py-2 pl-3 pr-9',
                                            active ? 'bg-cerulean-600 text-white' : 'text-gray-900',
                                        ]"
                                    >
                                        <div class="flex items-center">
                                            <img
                                                :src="person.imageUrl"
                                                alt=""
                                                class="h-6 w-6 flex-shrink-0 rounded-full"
                                            />
                                            <span :class="['ml-3 truncate', selected && 'font-semibold']">
                                                {{ person.name }}
                                            </span>
                                        </div>

                                        <span
                                            v-if="selected"
                                            :class="[
                                                'absolute inset-y-0 right-0 flex items-center pr-4',
                                                active ? 'text-white' : 'text-cerulean-600',
                                            ]"
                                        >
                                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                        </span>
                                    </li>
                                </ComboboxOption>
                            </ComboboxOptions>
                        </div>
                    </Combobox>
                    <button
                        @click="assignToUser()"
                        class="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-cerulean-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                        Assign
                    </button>
                </div>
            </div>
        </div>
        <div class="py-8 xl:py-10">
            <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 xl:grid xl:max-w-5xl xl:grid-cols-3">
                <div class="xl:col-span-2 xl:border-r xl:border-gray-200 xl:pr-8">
                    <div>
                        <div>
                            <div class="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
                                <div>
                                    <h1 class="text-2xl font-bold text-gray-900">
                                        {{ ticket.title }}
                                    </h1>
                                    <p class="mt-2 text-sm text-gray-500">
                                        #{{ String(ticket.id).padStart(2, '00') }} ouvert par
                                        {{ ' ' }}
                                        <a class="font-medium text-gray-900">{{ openUser.name }}</a>
                                        {{ ' ' }}
                                    </p>
                                </div>
                                <div
                                    class="mt-4 flex flex-wrap justify-center items-center md:space-x-3 md:mt-0 text-white"
                                >
                                    <button
                                        type="button"
                                        v-if="ticket.status === 'open'"
                                        @click="closeTicketAsResolved"
                                        class="w-full md:w-auto inline-flex justify-center rounded-md border border-gray-300 bg-green-500 px-4 py-2 text-sm font-medium shadow-sm hover:text-gray-500 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                                    >
                                        <CheckBadgeIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                                        <span>Fermer comme résolu</span>
                                    </button>

                                    <button
                                        type="button"
                                        v-if="ticket.status === 'open'"
                                        @click="closeTicketAsUnresolved"
                                        class="w-full md:w-auto mt-3 md:mt-0 inline-flex justify-center rounded-md border border-gray-300 bg-red-500 px-4 py-2 text-sm font-medium shadow-sm hover:text-gray-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                                    >
                                        <XCircleIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                                        <span>Fermer comme non résolu</span>
                                    </button>

                                    <button
                                        type="button"
                                        @click="reopenTicketAsUnreSolved"
                                        v-if="ticket.status === 'closed'"
                                        class="w-full md:w-auto mt-3 md:mt-0 inline-flex justify-center rounded-md border border-gray-300 bg-red-500 px-4 py-2 text-sm font-medium shadow-sm hover:text-gray-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                                    >
                                        <ArrowPathIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                                        <span>Rouvrir comme non résolu</span>
                                    </button>
                                    <button
                                        type="button"
                                        @click="reopenTicket"
                                        v-if="ticket.status === 'closed'"
                                        class="w-full md:w-auto mt-3 md:mt-0 inline-flex justify-center rounded-md border border-gray-300 bg-cerulean-500 px-4 py-2 text-sm font-medium shadow-sm hover:text-gray-500 hover:bg-cerulean-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                                    >
                                        <ArrowPathIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                                        <span>Rouvrir</span>
                                    </button>
                                </div>
                            </div>
                            <aside class="mt-8 xl:hidden">
                                <h2 class="sr-only">Détails</h2>
                                <div class="space-y-5">
                                    <div class="flex items-center space-x-2">
                                        <LockOpenIcon
                                            v-if="ticket.is_resolved && ticket.status === 'open'"
                                            class="h-5 w-5 text-green-500"
                                            aria-hidden="true"
                                        />
                                        <LockOpenIcon
                                            v-if="ticket.is_resolved == false && ticket.status === 'open'"
                                            class="h-5 w-5 text-red-500"
                                            aria-hidden="true"
                                        />
                                        <LockClosedIcon
                                            v-if="ticket.is_resolved && ticket.status === 'closed'"
                                            class="h-5 w-5 text-green-500"
                                            aria-hidden="true"
                                        />
                                        <LockClosedIcon
                                            v-if="ticket.is_resolved == false && ticket.status === 'closed'"
                                            class="h-5 w-5 text-red-500"
                                            aria-hidden="true"
                                        />
                                        <span
                                            :class="[
                                                ticket.is_resolved ? 'text-green-500' : 'text-red-500',
                                                'text-sm font-medium',
                                            ]"
                                            >{{ ticket.status }} &

                                            {{ ticket.is_resolved ? 'Resolved' : 'Unresolved' }}
                                        </span>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <ChatBubbleLeftEllipsisIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        <span class="text-sm font-medium text-gray-900"
                                            >{{ ticket.messages.length }} commentaires</span
                                        >
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <CalendarIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        <span class="text-sm font-medium text-gray-900"
                                            >Créé le<time datetime="2020-12-02"
                                                >{{ ' ' }}{{ formatDate(ticket.created_at) }}</time
                                            ></span
                                        >
                                    </div>
                                </div>
                                <div class="mt-6 space-y-8 border-t border-b border-gray-200 py-6">
                                    <div>
                                        <h2 class="text-sm font-medium text-gray-500">Bénéficiaire</h2>
                                        <ul v-if="props.assignedtouser" role="list" class="mt-3 space-y-3">
                                            <li class="flex justify-start">
                                                <div class="flex items-center space-x-3">
                                                    <div class="flex-shrink-0">
                                                        <img
                                                            v-if="props.assignedtouser.avatar"
                                                            class="h-5 w-5 rounded-full"
                                                            :src="props.assignedtouser.avatar"
                                                            alt=""
                                                        />
                                                        <img
                                                            v-else
                                                            class="h-5 w-5 rounded-full"
                                                            :src="`https://api.dicebear.com/7.x/initials/svg?seed=${props.assignedtouser.name}`"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div class="text-sm font-medium text-gray-900">
                                                        {{ props.assignedtouser.name }}
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 class="text-sm font-medium text-gray-500">Étiquettes</h2>
                                        <ul role="list" class="mt-2 leading-8">
                                            <li class="inline">
                                                <a
                                                    href="#"
                                                    class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
                                                >
                                                    <div
                                                        class="absolute flex flex-shrink-0 items-center justify-center"
                                                    >
                                                        <span
                                                            class="h-1.5 w-1.5 rounded-full bg-cerulean-500"
                                                            aria-hidden="true"
                                                        />
                                                    </div>
                                                    <div class="ml-3.5 text-sm font-medium text-gray-900">Bug</div>
                                                </a>
                                                {{ ' ' }}
                                            </li>
                                            <li class="inline">
                                                <a
                                                    href="#"
                                                    class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
                                                >
                                                    <div
                                                        class="absolute flex flex-shrink-0 items-center justify-center"
                                                    >
                                                        <span
                                                            class="h-1.5 w-1.5 rounded-full bg-cerulean-500"
                                                            aria-hidden="true"
                                                        />
                                                    </div>
                                                    <div class="ml-3.5 text-sm font-medium text-gray-900">
                                                        Accessibilité
                                                    </div>
                                                </a>
                                                {{ ' ' }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </aside>
                            <div class="py-3 xl:pt-6 xl:pb-0">
                                <h2 class="sr-only">Description</h2>
                                <div class="pcerulean max-w-none">
                                    <div class="prose max-w-none">
                                        <p>{{ ticket.message }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section aria-labelledby="activity-title" class="mt-8 xl:mt-10">
                        <div>
                            <div class="divide-y divide-gray-200">
                                <div class="pb-4">
                                    <h2 id="activity-title" class="text-lg font-medium text-gray-900">
                                        Discussions & Activité
                                    </h2>
                                </div>
                                <div class="pt-6">
                                    <!-- Activity feed-->
                                    <div class="flow-root">
                                        <ul role="list" class="-mb-8">
                                            <li v-for="(item, itemIdx) in trackingData" :key="item.id">
                                                <div class="relative pb-8">
                                                    <span
                                                        v-if="itemIdx !== activity.length - 1"
                                                        class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                                                        aria-hidden="true"
                                                    />
                                                    <div class="relative flex items-start space-x-3">
                                                        <template v-if="item.type === 'message-sent'">
                                                            <div class="relative">
                                                                <Avatar
                                                                    :user="item.person"
                                                                    class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                                                                />

                                                                <span
                                                                    class="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px"
                                                                >
                                                                    <ChatBubbleLeftEllipsisIcon
                                                                        class="h-5 w-5 text-gray-400"
                                                                        aria-hidden="true"
                                                                    />
                                                                </span>
                                                            </div>
                                                            <div class="min-w-0 flex-1">
                                                                <div>
                                                                    <div class="text-sm">
                                                                        <a href="#" class="font-medium text-gray-900">{{
                                                                            item.person.name
                                                                        }}</a>
                                                                    </div>
                                                                    <p class="mt-0.5 text-sm text-gray-500">
                                                                        {{ item.comment }}
                                                                    </p>
                                                                </div>
                                                                <span class="text-xs font-xs text-gray-500">
                                                                    <time datetime="2020-12-02"
                                                                        >{{ ' ' }}{{ item.created_at }}</time
                                                                    ></span
                                                                >
                                                            </div>
                                                        </template>
                                                        <template v-if="item.type === 'reopened-as-unresolved'">
                                                            <div>
                                                                <div class="relative px-1">
                                                                    <div
                                                                        class="flex h-8 w-8 items-center justify-center rounded-full"
                                                                    >
                                                                        <LockOpenIcon
                                                                            class="h-5 w-5 text-red-500"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="min-w-0 flex-1 py-1.5">
                                                                <div class="text-sm text-gray-500">
                                                                    <a class="font-medium text-gray-900">{{
                                                                        item.person.name
                                                                    }}</a>
                                                                    {{ ' ' }}
                                                                    Réouvert comme non résolu

                                                                    {{ ' ' }}
                                                                    <span class="whitespace-nowrap">{{
                                                                        item.created_at
                                                                    }}</span>
                                                                </div>
                                                            </div>
                                                        </template>

                                                        <template v-if="item.type === 'reopened'">
                                                            <div>
                                                                <div class="relative px-1">
                                                                    <div
                                                                        class="flex h-8 w-8 items-center justify-center rounded-full"
                                                                    >
                                                                        <LockOpenIcon
                                                                            class="h-5 w-5 text-green-500"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="min-w-0 flex-1 py-1.5">
                                                                <div class="text-sm text-gray-500">
                                                                    <a class="font-medium text-gray-900">{{
                                                                        item.person.name
                                                                    }}</a>
                                                                    {{ ' ' }}
                                                                    Réouvert
                                                                    {{ ' ' }}

                                                                    <span class="whitespace-nowrap">{{
                                                                        item.created_at
                                                                    }}</span>
                                                                </div>
                                                            </div>
                                                        </template>
                                                        <template v-if="item.type === 'closed-as-resolved'">
                                                            <div>
                                                                <div class="relative px-1">
                                                                    <div
                                                                        class="flex h-8 w-8 items-center justify-center rounded-full"
                                                                    >
                                                                        <LockClosedIcon
                                                                            class="h-5 w-5 text-green-500"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="min-w-0 flex-1 py-1.5">
                                                                <div class="text-sm text-gray-500">
                                                                    <a class="font-medium text-gray-900">{{
                                                                        item.person.name
                                                                    }}</a>
                                                                    {{ ' ' }}
                                                                    Classé comme résolu

                                                                    {{ ' ' }}
                                                                    <span class="whitespace-nowrap">{{
                                                                        item.created_at
                                                                    }}</span>
                                                                </div>
                                                            </div>
                                                        </template>
                                                        <template v-if="item.type === 'closed-as-unresolved'">
                                                            <div>
                                                                <div class="relative px-1">
                                                                    <div
                                                                        class="flex h-8 w-8 items-center justify-center rounded-full"
                                                                    >
                                                                        <LockClosedIcon
                                                                            class="h-5 w-5 text-red-500"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="min-w-0 flex-1 py-1.5">
                                                                <div class="text-sm text-gray-500">
                                                                    <a class="font-medium text-gray-900">{{
                                                                        item.person.name
                                                                    }}</a>
                                                                    {{ ' ' }}
                                                                    Classé comme non résolu

                                                                    {{ ' ' }}
                                                                    <span class="whitespace-nowrap">{{
                                                                        item.created_at
                                                                    }}</span>
                                                                </div>
                                                            </div>
                                                        </template>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="mt-6">
                                        <div class="flex space-x-3">
                                            <div class="flex-shrink-0">
                                                <div class="relative">
                                                    <Avatar
                                                        :user="user"
                                                        class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                                                    />

                                                    <span
                                                        class="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px"
                                                    >
                                                        <ChatBubbleLeftEllipsisIcon
                                                            class="h-5 w-5 text-gray-400"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="min-w-0 flex-1">
                                                <form @submit.prevent="sendMessage">
                                                    <div>
                                                        <label for="comment" class="sr-only">Commentaire</label>
                                                        <textarea
                                                            id="comment"
                                                            name="comment"
                                                            rows="3"
                                                            v-model="form.message"
                                                            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                                                            placeholder="Leave a comment"
                                                        />
                                                    </div>
                                                    <div class="mt-6 flex items-center justify-end space-x-4">
                                                        <button
                                                            type="submit"
                                                            class="inline-flex items-center justify-center rounded-md border border-transparent bg-cerulean-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                                                        >
                                                            soumettre un commentaire
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <aside class="hidden xl:block xl:pl-8">
                    <h2 class="sr-only">Détails</h2>
                    <div class="space-y-5">
                        <div class="flex items-end space-x-2">
                            <LockOpenIcon
                                v-if="ticket.is_resolved && ticket.status === 'open'"
                                class="h-5 w-5 text-green-500"
                                aria-hidden="true"
                            />
                            <LockOpenIcon
                                v-if="ticket.is_resolved == false && ticket.status === 'open'"
                                class="h-5 w-5 text-red-500"
                                aria-hidden="true"
                            />
                            <LockOpenIcon
                                v-if="ticket.is_resolved && ticket.status === 'closed'"
                                class="h-5 w-5 text-green-500"
                                aria-hidden="true"
                            />
                            <LockOpenIcon
                                v-if="ticket.is_resolved == false && ticket.status === 'closed'"
                                class="h-5 w-5 text-red-500"
                                aria-hidden="true"
                            />
                            <span
                                :class="[
                                    ticket.is_resolved && ticket.status === 'open' ? 'text-green-500' : 'text-red-500',
                                    'text-sm font-medium',
                                ]"
                                >{{ ticket.status }} Ticket</span
                            >
                        </div>
                        <div class="flex items-center space-x-2">
                            <ChatBubbleLeftEllipsisIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                            <span class="text-sm font-medium text-gray-900"
                                >{{ ticket.messages.length }} commentaires</span
                            >
                        </div>
                        <div class="flex items-center space-x-2">
                            <CalendarIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                            <span class="text-sm font-medium text-gray-900"
                                >Créé le
                                <time datetime="2020-12-02">{{ ' ' }}{{ formatDate(ticket.created_at) }}</time></span
                            >
                        </div>
                    </div>
                    <div class="mt-6 space-y-8 border-t border-gray-200 py-6">
                        <div>
                            <h2 class="text-sm font-medium text-gray-500">Bénéficiaire</h2>
                            <ul v-if="props.assignedtouser" role="list" class="mt-3 space-y-3">
                                <li class="flex justify-start">
                                    <div class="flex items-center space-x-3">
                                        <div class="flex-shrink-0">
                                            <img
                                                v-if="props.assignedtouser.avatar"
                                                class="h-5 w-5 rounded-full"
                                                :src="props.assignedtouser.avatar"
                                                alt=""
                                            />
                                            <img
                                                v-else
                                                class="h-5 w-5 rounded-full"
                                                :src="`https://api.dicebear.com/7.x/initials/svg?seed=${props.assignedtouser.name}`"
                                                alt=""
                                            />
                                        </div>
                                        <div class="text-sm font-medium text-gray-900">
                                            {{ props.assignedtouser.name }}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="text-sm font-medium text-gray-500">Catégories</h2>
                            <ul role="list" class="mt-2 leading-8">
                                <template v-for="category in ticket.categories" :key="category.id">
                                    <a
                                        href=""
                                        class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                                    >
                                        <span class="absolute flex flex-shrink-0 items-center justify-center">
                                            <span class="bg-red-500 h-1.5 w-1.5 rounded-full" aria-hidden="true" />
                                        </span>
                                        <span class="ml-3.5 font-medium text-gray-900">{{ category.name }}</span>
                                    </a>
                                    {{ ' ' }}
                                </template>
                            </ul>
                        </div>
                        <div>
                            <h2 class="text-sm font-medium text-gray-500">Labels</h2>
                            <ul role="list" class="mt-2 leading-8">
                                <template v-for="label in ticket.labels" :key="label.id">
                                    <a
                                        href=""
                                        class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                                    >
                                        <span class="absolute flex flex-shrink-0 items-center justify-center">
                                            <span class="bg-blue-500 h-1.5 w-1.5 rounded-full" aria-hidden="true" />
                                        </span>
                                        <span class="ml-3.5 font-medium text-gray-900">{{ label.name }}</span>
                                    </a>
                                    {{ ' ' }}
                                </template>
                            </ul>
                        </div>
                        <div>
                            <h2 class="text-sm font-medium text-gray-500">Produits</h2>
                            <ul role="list" class="mt-2 leading-8">
                                <template v-for="product in ticket.products" :key="product.id">
                                    <a
                                        :href="`product/${product.id}`"
                                        class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                                    >
                                        <span class="absolute flex flex-shrink-0 items-center justify-center">
                                            <span class="bg-green-500 h-1.5 w-1.5 rounded-full" aria-hidden="true" />
                                        </span>
                                        <span class="ml-3.5 font-medium text-gray-900">{{ product.name }}</span>
                                    </a>
                                    {{ ' ' }}
                                </template>
                            </ul>
                        </div>
                        <div>
                            <h2 class="text-sm font-medium text-gray-500">Accessoires</h2>
                            <ul role="list" class="mt-2 leading-8">
                                <template v-for="accessory in ticket.accessories" :key="accessory.id">
                                    <a
                                        :href="`accessory/${accessory.id}`"
                                        class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                                    >
                                        <span class="absolute flex flex-shrink-0 items-center justify-center">
                                            <span class="bg-yellow-500 h-1.5 w-1.5 rounded-full" aria-hidden="true" />
                                        </span>
                                        <span class="ml-3.5 font-medium text-gray-900">{{ accessory.name }}</span>
                                    </a>
                                    {{ ' ' }}
                                </template>
                            </ul>
                        </div>
                        <div>
                            <h2 class="text-sm font-medium text-gray-500">Commandes</h2>
                            <ul role="list" class="mt-2 leading-8">
                                <template v-for="order in ticket.orders" :key="order.id">
                                    <a
                                        :href="`/admin/orders/${order.id}/edit`"
                                        class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                                    >
                                        <span class="absolute flex flex-shrink-0 items-center justify-center">
                                            <span class="bg-cerulean-500 h-1.5 w-1.5 rounded-full" aria-hidden="true" />
                                        </span>
                                        <span class="ml-3.5 font-medium text-gray-900">#00{{ order.id }}</span>
                                    </a>
                                    {{ ' ' }}
                                </template>
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </TicketsLayout>
</template>

<script setup>
import { ref } from 'vue'
import TicketsLayout from '../TicketsLayout.vue'

import Avatar from '@/Components/Avatar.vue'
import {
    ArrowPathIcon,
    CalendarIcon,
    ChatBubbleLeftEllipsisIcon,
    CheckBadgeIcon,
    LockClosedIcon,
    LockOpenIcon,
    XCircleIcon,
} from '@heroicons/vue/20/solid'

//usepage
import { usePage } from '@inertiajs/vue3'
import moment from 'moment'

const page = usePage()

const user = computed(() => page.props.auth.user)
const props = defineProps({
    ticket: {
        type: Array,
        required: true,
    },
    openUser: {
        type: Object,
        required: true,
    },
    tracking: {
        type: Object,
        required: true,
    },
    admins: {
        type: Array,
        required: true,
    },
    assignedtouser: {
        type: Object,
        required: true,
    },
})

const activity = [
    {
        id: 1,
        type: 'comment',
        person: { name: 'Eduardo Benz', href: '#' },
        imageUrl:
            'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ',
        date: '6d ago',
    },
    {
        id: 2,
        type: 'assignment',
        person: { name: 'Hilary Mahy', href: '#' },
        assigned: { name: 'Kristin Watson', href: '#' },
        date: '2d ago',
    },
    {
        id: 3,
        type: 'tags',
        person: { name: 'Hilary Mahy', href: '#' },
        tags: [
            { name: 'Bug', href: '#', color: 'bg-cerulean-500' },
            { name: 'Accessibility', href: '#', color: 'bg-cerulean-500' },
        ],
        date: '6h ago',
    },
    {
        id: 4,
        type: 'comment',
        person: { name: 'Jason Meyers', href: '#' },
        imageUrl:
            'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.',
        date: '2h ago',
    },
]

const sidebarOpen = ref(false)
const formatDate = (date) => {
    if (date) {
        return moment(String(date)).format('YYYY - MM - DD')
    }
}

const reloadPage = () => {
    window.location.reload()
}

const closeTicketAsResolved = () => {
    axios
        .post('/tickets/close-as-resolved', {
            ticket_id: props.ticket.id,
        })
        .then((response) => {
            reloadPage()
        })
}

const closeTicketAsUnresolved = () => {
    axios
        .post('/tickets/close-as-unresolved', {
            ticket_id: props.ticket.id,
        })
        .then((response) => {
            reloadPage()
        })
}

const reopenTicket = () => {
    axios
        .post('/tickets/reopen', {
            ticket_id: props.ticket.id,
        })
        .then((response) => {
            reloadPage()
        })
}

const reopenTicketAsUnreSolved = () => {
    axios
        .post('/tickets/reopen-as-unresolved', {
            ticket_id: props.ticket.id,
        })
        .then((response) => {
            reloadPage()
        })
}

import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { computed, onMounted, reactive } from 'vue'

let form = reactive({
    message: '',
})

const rules = computed(() => ({
    message: { required },
}))

const v$ = useVuelidate(rules, form)

onMounted(() => {
    v$.value.$touch()
})

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

const sendMessage = () => {
    axios
        .post('/tickets/message', {
            ticket_id: props.ticket.id,
            message: form.message,
        })
        .then((response) => {
            reloadPage()
        })
}

const trackingData = props.tracking.map((item) => {
    return {
        id: item.id,
        type: item.status,
        person: item.user,
        date: item.created_at,
        comment: item.comment_id ? item.comment.message : null,
        created_at: formatDate(item.created_at),
    }
})

import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
const query = ref('')
const selectedPerson = ref(null)
/*

    {{ props.assignedtouser.name }}
        {{ props.assignedtouser.id }}
        {{ props.assignedtouser.avatar }}*/

import { watchEffect } from 'vue'

watchEffect(() => {
    selectedPerson.value = props.assignedtouser
        ? {
              id: props.assignedtouser.id,
              name: props.assignedtouser.name,
              imageUrl: props.assignedtouser.avatar
                  ? props.assignedtouser.avatar
                  : `https://api.dicebear.com/7.x/initials/svg?seed=${props.assignedtouser.name}`,
          }
        : null
})
const filteredPeople = computed(() =>
    query.value === ''
        ? people
        : people.filter((person) => {
              return person.name.toLowerCase().includes(query.value.toLowerCase())
          }),
)

const assignToUser = () => {
    if (selectedPerson.value === null) {
        return
    }

    axios
        .post('/tickets/assign', {
            ticket_id: props.ticket.id,
            user_id: selectedPerson.value.id,
        })
        .then((response) => {
            reloadPage()
        })
}
const people = props.admins.map((item) => {
    return {
        id: item.id,
        name: item.name,
        imageUrl: item.avatar ? item.avatar : `https://api.dicebear.com/7.x/initials/svg?seed=${item.name}`,
    }
})

const pageProps = usePage().props

const auth = computed(() => pageProps.auth)
const is_user = computed(() => auth.value.is_user)
const is_admin = computed(() => auth.value.is_admin)
const is_editor = computed(() => auth.value.is_editor)
const is_super_admin = computed(() => auth.value.is_super_admin)
const is_customer = computed(() => auth.value.is_customer)
</script>
