<template>
  <Head>
      <title>Support</title>
      <meta name="description" content="Support" />
      <meta property="og:type" content="business.business" />
      <meta property="og:title" content="Support Trp - Télécom Radio Professionnel Motorola Solutions" />
      <meta property="og:url" content="https://trp-france.fr/" />
      <meta property="og:image" content="https://trp-algeria.com/wp-content/uploads/2021/08/logo-motorola-1.png" />
      <meta property="og:description" content="EURL Télécom Radio Professionnel Motorola Solutions " />
      <meta property="business:contact_data:street_address" content="" />
      <meta property="business:contact_data:locality" content="" />
      <meta property="business:contact_data:region" content="" />
      <meta property="business:contact_data:country_name" content="France" />

      <!-- Primary Meta Tags -->
      <title>Support Trp - Télécom Radio Professionnel Motorola Solutions</title>
      <meta name="title" content="Trp - Télécom Radio Professionnel Motorola Solutions" />
      <meta name="description" content="Trp - Télécom Radio Professionnel Motorola Solutions" />

      <!-- Open Graph / Facebook -->
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://metatags.io/" />
      <meta property="og:title" content="Support Trp - Télécom Radio Professionnel Motorola Solutions" />
      <meta property="og:description" content="Trp - Télécom Radio Professionnel Motorola Solutions" />
      <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

      <!-- Twitter -->
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta property="twitter:title" content="Support Trp - Télécom Radio Professionnel Motorola Solutions" />
      <meta property="twitter:description" content="Trp - Télécom Radio Professionnel Motorola Solutions" />
      <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />

      <!-- Meta Tags Generated with https://metatags.io -->
      <meta name="title" content="Support Trp - Télécom Radio Professionnel Motorola Solutions" />
      <meta name="description" content="Trp - Télécom Radio Professionnel Motorola Solutions" />
      <meta name="keywords" content="Trp,Télécom,Radio,Professionnel,Motorola,Solutions" />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="French" />
  </Head>
  <AnimatedHeader />
  <Toastr v-if="flash.alert" />
  <div class="bg-white">
      <header class="fixed top-0 left-0 w-full z-50">
          <Popover class="relative bg-cerulean-600 text-white">
              <div class="flex items-center justify-between p-3">
                  <div class="-my-2 -mr-2 md:hidden"></div>
                  <div class="hidden md:flex justify-start">
                      <a href="/" class="cursor-pointer">
                          <span class="sr-only">try</span>
                          <img v-if="Logo" class="block h-20 w-auto" alt="trp" :src="Logo" />
                      </a>
                  </div>
                  <div class="flex-1 w-full">
                      <!-- Mobile menu -->
                      <TransitionRoot as="template" :show="mobileMenuOpen">
                          <Dialog as="div" class="relative z-40 md:hidden" @close="mobileMenuOpen = false">
                              <TransitionChild
                                  as="template"
                                  enter="transition-opacity ease-linear duration-300"
                                  enter-from="opacity-0"
                                  enter-to="opacity-100"
                                  leave="transition-opacity ease-linear duration-300"
                                  leave-from="opacity-100"
                                  leave-to="opacity-0"
                              >
                                  <div class="fixed inset-0 bg-black bg-opacity-25" />
                              </TransitionChild>

                              <div class="fixed inset-0 z-40 flex">
                                  <TransitionChild
                                      as="template"
                                      enter="transition ease-in-out duration-300 transform"
                                      enter-from="-translate-x-full"
                                      enter-to="translate-x-0"
                                      leave="transition ease-in-out duration-300 transform"
                                      leave-from="translate-x-0"
                                      leave-to="-translate-x-full"
                                  >
                                      <DialogPanel
                                          class="relative flex w-full max-w-xs flex-col overflow-y-auto pb-12 shadow-x bg-cerulean-600"
                                      >
                                          <div class="flex px-4 pt-5 pb-2">
                                              <button
                                                  type="button"
                                                  class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-white"
                                                  @click="mobileMenuOpen = false"
                                              >
                                                  <span class="sr-only">Close menu</span>
                                                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                                              </button>
                                          </div>

                                          <!-- Links -->
                                          <TabGroup as="div" class="mt-2">
                                              <div class="">
                                                  <TabList class="-mb-px flex flex-col">
                                                      <Tab
                                                          as="template"
                                                          v-for="category in subnavigation.categories"
                                                          :key="category.name"
                                                          v-slot="{ selected }"
                                                      >
                                                          <button
                                                              :class="[
                                                                  selected
                                                                      ? 'text-cerulean-600 border-cerulean-600'
                                                                      : 'text-white border-transparent',
                                                                  'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium',
                                                              ]"
                                                          >
                                                              {{ category.name }}
                                                          </button>
                                                      </Tab>
                                                  </TabList>
                                              </div>
                                              <TabPanels as="template">
                                                  <TabPanel
                                                      v-for="category in subnavigation.categories"
                                                      :key="category.name"
                                                      class="space-y-10 px-4 pt-10 pb-8"
                                                  >
                                                      <div v-for="section in category.sections" :key="section.name">
                                                          <p
                                                              :id="`${category.id}-${section.id}-heading-mobile`"
                                                              class="font-medium text-white"
                                                          >
                                                              {{ section.name }}
                                                          </p>
                                                          <ul
                                                              role="list"
                                                              :aria-labelledby="`${category.id}-${section.id}-heading-mobile`"
                                                              class="mt-6 flex flex-col space-y-6"
                                                          >
                                                              <li
                                                                  v-for="item in section.items"
                                                                  :key="item.name"
                                                                  class="flow-root"
                                                              >
                                                                  <a
                                                                      :href="item.url"
                                                                      class="-m-2 block p-2 text-white cursor-pointer"
                                                                      >{{ item.name }}</a
                                                                  >
                                                              </li>
                                                          </ul>
                                                      </div>
                                                  </TabPanel>
                                              </TabPanels>
                                          </TabGroup>

                                          <div class="space-y-6 border-t border-gray-200 py-6 px-4">
                                              <div
                                                  v-for="page in subnavigation.pages"
                                                  :key="page.name"
                                                  class="flow-root"
                                              >
                                                  <a
                                                      :href="page.url"
                                                      class="cursor-pointer -m-2 block p-2 font-medium text-white"
                                                      >{{ page.name }}</a
                                                  >
                                              </div>
                                          </div>
                                      </DialogPanel>
                                  </TransitionChild>
                              </div>
                          </Dialog>
                      </TransitionRoot>

                      <header class="relative flex-1 w-full">
                          <nav aria-label="Top" class="w-full px-4 sm:px-6 lg:px-8">
                              <div class="">
                                  <div class="flex h-16 items-center">
                                      <button
                                          v-if="!mobileMenuOpen"
                                          type="button"
                                          class="rounded-md bg-cerulean-600 p-2 text-gray-400 md:hidden z-50 cursor-pointer"
                                          @click="mobileMenuOpen = true"
                                      >
                                          <span class="sr-only">Open menu</span>
                                          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                                      </button>
                                      <!-- close -->
                                      <button
                                          v-if="mobileMenuOpen"
                                          type="button"
                                          class="rounded-md bg-cerulean-600 p-2 text-gray-400 md:hidden z-50 cursor-pointer"
                                          @click="mobileMenuOpen = false"
                                      >
                                          <span class="sr-only">Close menu</span>
                                          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                                      </button>

                                      <!-- Flyout menus -->
                                      <PopoverGroup class="hidden lg:ml-8 md:block lg:self-stretch">
                                          <div class="flex h-full space-x-8">
                                              <Popover
                                                  v-for="category in subnavigation.categories"
                                                  :key="category.name"
                                                  class="flex"
                                                  v-slot="{ open }"
                                              >
                                                  <div class="relative flex">
                                                      <PopoverButton
                                                          :class="[
                                                              open
                                                                  ? 'border-cerulean-600 text-cerulean-600'
                                                                  : 'border-transparent text-white text-white',
                                                              'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out',
                                                          ]"
                                                      >
                                                          {{ category.name }}
                                                          <svg
                                                              class="ml-2 -mr-0.5 h-4 w-4"
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              viewBox="0 0 20 20"
                                                              fill="currentColor"
                                                          >
                                                              <path
                                                                  fill-rule="evenodd"
                                                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                  clip-rule="evenodd"
                                                              />
                                                          </svg>
                                                      </PopoverButton>
                                                  </div>

                                                  <transition
                                                      enter-active-class="transition ease-out duration-200"
                                                      enter-from-class="opacity-0"
                                                      enter-to-class="opacity-100"
                                                      leave-active-class="transition ease-in duration-150"
                                                      leave-from-class="opacity-100"
                                                      leave-to-class="opacity-0"
                                                  >
                                                      <PopoverPanel
                                                          class="absolute inset-x-0 top-full z-20 text-sm text-gray-500"
                                                      >
                                                          <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                                                          <div
                                                              class="absolute inset-0 top-1/2 bg-cerulean-600 shadow"
                                                              aria-hidden="true"
                                                          />

                                                          <div class="relative bg-cerulean-600">
                                                              <div class="w-full px-10 sm:px-10 lg:px-10">
                                                                  <div
                                                                      class="grid grid-cols-2 gap-y-10 gap-x-8 py-16"
                                                                  >
                                                                      <div
                                                                          class="row-start-1 flex space-x-10 text-sm"
                                                                      >
                                                                          <div
                                                                              v-for="section in category.sections"
                                                                              :key="section.name"
                                                                          >
                                                                              <p
                                                                                  :id="`${section.name}-heading`"
                                                                                  class="font-medium text-white"
                                                                              >
                                                                                  {{ section.name }}
                                                                              </p>
                                                                              <ul
                                                                                  role="list"
                                                                                  :aria-labelledby="`${section.name}-heading`"
                                                                                  class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                              >
                                                                                  <li
                                                                                      v-for="item in section.items"
                                                                                      :key="item.name"
                                                                                      class="flex"
                                                                                  >
                                                                                      <a
                                                                                          :href="item.url"
                                                                                          class="hover:text-gray-800 cursor-pointer"
                                                                                          >{{ item.name }}</a
                                                                                      >
                                                                                  </li>
                                                                              </ul>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </PopoverPanel>
                                                  </transition>
                                              </Popover>

                                              <a
                                                  v-for="page in subnavigation.pages"
                                                  :key="page.name"
                                                  :href="page.url"
                                                  class="cursor-pointer flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                                  >{{ page.name }}</a
                                              >
                                          </div>
                                      </PopoverGroup>
                                  </div>
                              </div>
                          </nav>
                      </header>
                  </div>
                  <div v-if="!loggedIn" class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                      <Link class="whitespace-nowrap text-base font-medium text-white hover:text-white" href="/login"
                          >connexion</Link
                      >
                      <Link
                          href="/register"
                          class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-gradient-to-r from-cerulean-600 to-cerulean-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-cerulean-700 hover:to-cerulean-700"
                      >
                          S'inscrire</Link
                      >
                  </div>
                  <Menu v-if="loggedIn" as="div" class="flex-shrink-0 relative ml-4">
                      <div>
                          <MenuButton
                              class="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cerulean-500"
                          >
                              <span class="sr-only">Open user menu</span>
                              <div>
                                  <Avatar :user="user" class="h-8 w-8 rounded-full" alt="" />
                              </div>
                          </MenuButton>
                      </div>
                      <transition
                          enter-active-class="transition ease-out duration-100"
                          enter-from-class="transform opacity-0 scale-95"
                          enter-to-class="transform opacity-100 scale-100"
                          leave-active-class="transition ease-in duration-75"
                          leave-from-class="transform opacity-100 scale-100"
                          leave-to-class="transform opacity-0 scale-95"
                          class="z-50"
                      >
                          <MenuItems
                              class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none"
                          >
                              <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                                  <a
                                      :href="item.href"
                                      @click="item.onclick"
                                      :class="[active ? 'bg-gray-100' : '', 'block py-2 px-4 text-sm text-gray-700']"
                                      >{{ item.name }}</a
                                  >
                              </MenuItem>
                          </MenuItems>
                      </transition>
                  </Menu>
              </div>

              <transition
                  enter-active-class="duration-200 ease-out"
                  enter-from-class="opacity-0 scale-95"
                  enter-to-class="opacity-100 scale-100"
                  leave-active-class="duration-100 ease-in"
                  leave-from-class="opacity-100 scale-100"
                  leave-to-class="opacity-0 scale-95"
              >
                  <PopoverPanel
                      focus
                      class="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
                  >
                      <div
                          class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                      >
                          <div class="px-5 pt-5 pb-6">
                              <div class="flex items-center justify-between">
                                  <div>
                                      <img
                                          class="h-8 w-auto"
                                          src="https://tailwindui.com/img/logos/mark.svg?from-color=cerulean&from-shade=600&to-color=cerulean&to-shade=600&toShade=600"
                                          alt="Your Company"
                                      />
                                  </div>
                                  <div class="-mr-2">
                                      <PopoverButton
                                          class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cerulean-500"
                                      >
                                          <span class="sr-only">Close menu</span>
                                          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                                      </PopoverButton>
                                  </div>
                              </div>
                              <div class="mt-6">
                                  <nav class="grid grid-cols-1 gap-7">
                                      <a
                                          v-for="item in solutions"
                                          :key="item.name"
                                          :href="item.href"
                                          class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                                      >
                                          <div
                                              class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-cerulean-600 to-cerulean-600 text-white"
                                          >
                                              <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                                          </div>
                                          <div class="ml-4 text-base font-medium text-gray-900">
                                              {{ item.name }}
                                          </div>
                                      </a>
                                  </nav>
                              </div>
                          </div>
                          <div class="py-6 px-5">
                              <div class="grid grid-cols-2 gap-4">
                                  <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"
                                      >Tarification</a
                                  >
                                  <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"
                                      >Partenaires</a
                                  >
                                  <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"
                                      >Entreprise</a
                                  >
                              </div>
                              <div class="mt-6">
                                  <Link
                                      href="/login"
                                      class="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-cerulean-600 to-cerulean-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-cerulean-700 hover:to-cerulean-700"
                                  >
                                      S'inscrire</Link
                                  >
                                  <p class="mt-6 text-center text-base font-medium text-gray-500">
                                      Existing customer?
                                      <Link href="/register" class="text-gray-900">Se connecter</Link>
                                  </p>
                              </div>
                          </div>
                      </div>
                  </PopoverPanel>
              </transition>
          </Popover>
      </header>

      <div class="w-full mt-10">
          <div class="bg-cover bg-center h-96" style="background-image: url('images/support/hero-1.jpg')">
              <div class="flex justify-start items-center h-full bg-black bg-opacity-50">
                  <div class="text-start px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                      <p
                          class="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-start"
                      >
                          À propos de nous
                      </p>
                  </div>
              </div>
          </div>
      </div>
      <section class="bg-gray-100 p-8">
          <h2 class="mb-6 text-3xl font-bold text-gray-800 text-center">Notre Histoire</h2>
          <p class="mb-6 text-lg text-gray-600 text-center">Un Voyage de Passion et d'Innovation</p>
          <div class="flex flex-col items-center">
              <p class="mb-6 text-base text-gray-700 w-full md:w-3/4 lg:w-1/2">
                  Au cœur de l'aventure <span class="font-bold">TRP</span>, acronyme de
                  <span class="font-bold">Télécom Radio Professionnel</span>, se trouve une histoire riche et
                  inspirante qui prend racine en <span class="font-bold">1994</span> en Afrique du Nord. Nés d'une
                  modeste ambition, nos débuts étaient marqués par la vente de talkies-walkies sans licence, répondant
                  à un besoin croissant de communication mobile et fiable. Cette période, bien que humble, a jeté les
                  bases de notre expertise et de notre passion pour la radiocommunication.
              </p>
              <p class="mb-6 text-base text-gray-700 w-full md:w-3/4 lg:w-1/2">
                  Au fil des années, notre quête pour l'excellence et notre engagement envers nos clients ont catalysé
                  notre croissance, transformant <span class="font-bold">TRP</span> en un nom reconnu au-delà de nos
                  frontières initiales. Cette expansion a été animée par une vision claire : partager notre
                  savoir-faire et notre expérience unique avec un public plus large.
              </p>
              <p class="mb-6 text-base text-gray-700 w-full md:w-3/4 lg:w-1/2">
                  Aujourd'hui, <span class="font-bold">TRP France</span> incarne l'aboutissement de cette vision.
                  Établie pour rapprocher notre héritage et notre expertise de la scène européenne,
                  <span class="font-bold">TRP France</span> est le pont entre notre passé glorieux et notre avenir
                  prometteur. Ici, nous continuons à innover, à évoluer, et à écrire notre histoire, toujours guidés
                  par notre passion originelle pour la radiocommunication et notre dévouement sans faille à la
                  satisfaction client.
              </p>
              <p class="mb-6 text-base text-gray-700 w-full md:w-3/4 lg:w-1/2">
                  Notre voyage, de nos humbles débuts à notre présence en France, est une histoire de persévérance,
                  d'innovation et de succès partagé avec nos clients et partenaires. Chez
                  <span class="font-bold">TRP</span>, chaque nouveau chapitre est une opportunité de renforcer notre
                  engagement envers l'excellence en radiocommunication, en apportant non seulement des solutions
                  avancées mais aussi en tissant des liens durables avec ceux que nous servons.
              </p>
          </div>
      </section>

      <div class="w-full">
          <div class="bg-cover bg-center h-96" style="background-image: url('images/support/hero-2.jpg')">
              <div class="flex justify-start items-center h-full bg-black bg-opacity-50">
                  <div class="text-start px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-3xl">
                      <p
                          class="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold"
                      >
                          Notre mission est d'augmenter l'efficacité et la sécurité de nos clients en mettant en œuvre
                          des solutions et des technologies avancées et innovantes.
                      </p>
                  </div>
              </div>
          </div>
      </div>

      <!-- Nos Missions Section -->
      <section class="bg-gray-100 p-8">
          <div class="w-full max-w-screen-lg mx-auto py-12 px-6">
              <h2 class="text-3xl font-bold text-center text-cerulean-800 mb-10">Nos Missions</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div class="flex flex-col items-center">
                      <img src="images/support/mission/1.png" alt="Team Meeting" class="w-14 h-14 object-cover" />
                      <p class="mt-4 text-center text-sm text-gray-700">Nous réalisons une étude de pré-conception</p>
                  </div>
                  <div class="flex flex-col items-center">
                      <img src="images/support/mission/2.png" alt="Tech Lab" class="w-14 h-14 object-cover" />
                      <p class="mt-4 text-center text-sm text-gray-700">
                          Nous développons des solutions dans le domaine des infrastructures de télécommunications
                      </p>
                  </div>
                  <div class="flex flex-col items-center">
                      <img src="images/support/mission/3.png" alt="Data Analytics" class="w-14 h-14 object-cover" />
                      <p class="mt-4 text-center text-sm text-gray-700">Nous créons des projets à partir de zéro</p>
                  </div>
                  <div class="flex flex-col items-center">
                      <img src="images/support/mission/4.png" alt="Construction" class="w-14 h-14 object-cover" />
                      <p class="mt-4 text-center text-sm text-gray-700">
                          Nous fournissons et mettons en œuvre du matériel et des logiciels système
                      </p>
                  </div>
                  <div class="flex flex-col items-center">
                      <img
                          src="images/support/mission/5.png"
                          alt="Digital Communication"
                          class="w-14 h-14 object-cover"
                      />
                      <p class="mt-4 text-center text-sm text-gray-700">
                          Nous formons le personnel du client avec les compétences nécessaires pour travailler avec le
                          système
                      </p>
                  </div>
                  <div class="flex flex-col items-center">
                      <img
                          src="images/support/mission/6.png"
                          alt="Digital Communication"
                          class="w-14 h-14 object-cover"
                      />
                      <p class="mt-4 text-center text-sm text-gray-700">
                          Nous maintenons et mettons à niveau les systèmes
                      </p>
                  </div>
              </div>
          </div>
      </section>

      <div class="max-w-full">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div v-for="(image, index) in images" :key="index">
                  <img :src="image" class="rounded-lg w-full h-96" alt="" />
              </div>
          </div>
      </div>

      <section class="bg-gray-100 p-8 flex flex-col justify-center items-center">
          <h2 class="mb-4 text-3xl font-bold text-center">Pourquoi Choisir TRP France ?</h2>
          <p class="mb-4 text-justify">Soyez stratégique dans vos mouvements</p>
          <div class="w-[1000px]">
              <p class="mb-4 text-justify">
                  Choisir <span class="font-bold">TRP France</span>, c'est miser sur une
                  <span class="font-bold">compétitivité</span> hors pair. Grâce à nos
                  <span class="font-bold">stratégies secrètes</span>, nous cassons les prix sans rogner sur la
                  qualité. Nos techniques? Elles restent sous le voile, mais le résultat? Des tarifs qui défient toute
                  concurrence, un équipement de pointe à moindre coût.
              </p>
              <p class="mb-4 text-justify">
                  La <span class="font-bold">qualité</span> est notre credo. Chaque produit passe par un crible de
                  <span class="font-bold">fiabilité et performance</span>, garantissant que votre investissement est
                  solide. Notre équipe, toujours à l'affût des
                  <span class="font-bold">nouveautés technologiques</span>, veille à ce que vous ayez accès au
                  meilleur, adapté à vos besoins.
              </p>
              <p class="mb-4 text-justify">
                  <span class="font-bold">Proximité client</span> et
                  <span class="font-bold">personnalisation</span> sont au cœur de notre démarche. Peu importe
                  l'ampleur de votre projet, notre écoute et notre expertise sont là pour vous guider.
              </p>
              <p class="mb-4 text-justify">
                  En somme, <span class="font-bold">TRP France</span> n'est pas juste un choix ; c'est la décision de
                  privilégier l'<span class="font-bold">excellence et l'innovation</span> à prix compétitif. Pour une
                  expérience sans compromis, c'est vers nous qu'il faut se tourner.
              </p>
          </div>
      </section>

      <div class="mx-auto max-w-5xl py-40">
          <AppointmentCalendarLanding />
      </div>
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 my-10">
          <div class="mx-auto bg-gray-100">
              <div class="relativebg-gray-100">
                  <h2 class="sr-only">Contactez nous</h2>

                  <div class="grid grid-cols-1 lg:grid-cols-3">
                      <!-- Contact information -->
                      <div class="relative overflow-hidden py-10 px-6 bg-gray-200 sm:px-10 xl:p-12">
                          <div class="relative space-y-4">
                              <div class="mb-4 md:mb-0">
                                  <img
                                      src="images/Landing/noforces/trp-tower.png"
                                      alt="Central feature"
                                      class="mx-auto w-24 h-24 md:w-72 md:h-72 transition-transform duration-300 ease-in-out hover:scale-110"
                                  />
                              </div>
                              <h2 class="text-xl font-semibold text-center">
                                  <span class="bg-gradient-to-r text-gray-900 bg-clip-text text-center"
                                      >TRP FRANCE</span
                                  >
                              </h2>
                          </div>

                          <dl class="mt-8 space-y-10 text-black">
                              <dt><span class="sr-only">Numéro de téléphone</span></dt>
                              <dd class="flex text-lg">
                                  <!-- Heroicon name: outline/phone -->
                                  <PhoneIcon class="h-6 w-6 text-gray-900" />
                                  <span class="ml-3">+33 (749) 187-280</span>
                              </dd>
                              <dt><span class="sr-only">Email</span></dt>
                              <dd class="flex text-lg">
                                  <!-- Heroicon name: outline/mail -->
                                  <EnvelopeIcon class="h-6 w-6 text-gray-900" />

                                  <span class="ml-3">contact@trp-france.com</span>
                              </dd>
                              <dt><span class="sr-only">Email</span></dt>
                              <dd class="flex text-lg">
                                  <MapPinIcon class="h-6 w-6 text-gray-900" />

                                  <span class="ml-3">17 Rue Du Chemin De Fer,93500 Pantin</span>
                              </dd>
                          </dl>
                      </div>

                      <!-- Contact form -->
                      <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                          <h3 class="text-lg font-medium text-gray-900">Envoyer un message</h3>
                          <form
                              @submit.prevent="submitContactForm"
                              class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                          >
                              <div class="sm:col-span-2">
                                  <label for="email" class="block text-sm font-medium text-gray-900">Email</label>
                                  <div class="mt-1">
                                      <input
                                          v-model="contactForm.email"
                                          id="email"
                                          name="email"
                                          type="email"
                                          autocomplete="email"
                                          class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cerulean-500 focus:border-cerulean-500 border-gray-300 rounded-md"
                                      />
                                  </div>
                              </div>
                              <div>
                                  <label for="first-name" class="block text-sm font-medium text-gray-900"> Nom</label>
                                  <div class="mt-1">
                                      <input
                                          v-model="contactForm.name"
                                          type="text"
                                          name="first-name"
                                          id="first-name"
                                          autocomplete="given-name"
                                          class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cerulean-500 focus:border-cerulean-500 border-gray-300 rounded-md"
                                      />
                                  </div>
                              </div>

                              <div>
                                  <div class="flex justify-between">
                                      <label for="phone" class="block text-sm font-medium text-gray-900"
                                          >Téléphone</label
                                      >
                                      <span id="phone-optional" class="text-sm text-gray-500">Optionnel</span>
                                  </div>
                                  <div class="mt-1">
                                      <input
                                          v-model="contactForm.phone"
                                          type="text"
                                          name="phone"
                                          id="phone"
                                          autocomplete="tel"
                                          class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cerulean-500 focus:border-cerulean-500 border-gray-300 rounded-md"
                                          aria-describedby="phone-optional"
                                      />
                                  </div>
                              </div>
                              <div class="sm:col-span-2">
                                  <label for="subject" class="block text-sm font-medium text-gray-900">Sujet</label>
                                  <div class="mt-1">
                                      <input
                                          v-model="contactForm.subject"
                                          type="text"
                                          name="subject"
                                          id="subject"
                                          class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cerulean-500 focus:border-cerulean-500 border-gray-300 rounded-md"
                                      />
                                  </div>
                              </div>
                              <div class="sm:col-span-2">
                                  <div class="flex justify-between">
                                      <label for="message" class="block text-sm font-medium text-gray-900"
                                          >Message</label
                                      >
                                      <span id="message-max" class="text-sm text-gray-500">Max. 500 caractères</span>
                                  </div>
                                  <div class="mt-1">
                                      <textarea
                                          v-model="contactForm.message"
                                          id="message"
                                          name="message"
                                          rows="4"
                                          class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cerulean-500 focus:border-cerulean-500 border border-gray-300 rounded-md"
                                          aria-describedby="message-max"
                                      ></textarea>
                                  </div>
                              </div>
                              <div class="sm:col-span-2 sm:flex sm:justify-end">
                                  <button
                                      type="submit"
                                      class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-cerulean-600 hover:bg-cerulean-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cerulean-500 sm:w-auto"
                                  >
                                      Soumettre
                                  </button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <Footer />
  </div>
</template>

<script setup>
const images = [
  'images/support/gallery/1.png',
  'images/support/gallery/2.png',
  'images/support/gallery/3.jpg',
  'images/support/gallery/4.jpg',
  'images/support/gallery/5.jpg',
]
import { Head } from '@inertiajs/vue3'

import { Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { computed, defineProps, ref, watch } from 'vue'

import AnimatedHeader from '@/Components/AnimatedHeader.vue'
import AppointmentCalendarLanding from '@/Components/AppointmentCalendarLanding.vue'

import Footer from '@/Components/Footer.vue'
import Toastr from '@/Components/Toastr.vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

import { Bars3Icon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/vue/24/solid'

import 'vue3-carousel/dist/carousel.css'

import { Link } from '@inertiajs/vue3'

const props = defineProps({
  carousel: {
      type: Object,
  },
  featuredProducts: {
      type: Object,
  },
  offers: {
      type: Object,
  },
  posts: {
      type: Array,
      required: true,
  },
})

const videoModalOpen = ref(false)
const video = ref(null)

import { usePage } from '@inertiajs/vue3'

const loggedIn = computed(() => {
  return !!usePage().props.auth.user
})
const signout = () => {
  axios
      .post(route('logout'))
      .then((response) => {
          this.$router.push('/login')
      })
      .catch((error) => {
          location.reload()
      })
}
const userNavigation = [
  { name: 'Votre profil', href: '/profile', onclick: null },
  { name: 'Paramètres', href: '/settings/profile', onclick: null },
  { name: 'Se déconnecter', href: '#', onclick: signout },
]

watch(videoModalOpen, () => {
  videoModalOpen.value ? video.value.play() : video.value.pause()
})

import Avatar from '@/Components/Avatar.vue'
//usepage

const page = usePage()

const user = computed(() => page.props.auth.user)

import {
  Dialog,
  DialogPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import axios from 'axios'
import { watchEffect } from 'vue'

const Logo = ref(null)
const LandingVideo = ref(null)

watchEffect(() => {
  axios.get(route('logo.index')).then((response) => {
      Logo.value = response.data
  })
})
watchEffect(() => {
  axios.get(route('landing.video.index')).then((response) => {
      LandingVideo.value = response.data
  })
})

async function fetchAndBuildHierarchy() {
  try {
      const response = await axios.get('/navbar')
      const data = response.data

      const originalData = JSON.parse(JSON.stringify(data))

      const categories = []

      // Map data into categories
      originalData.forEach((item) => {
          if (!item.parent_id || item.parent_id === -1) {
              const category = {
                  id: item.id,
                  name: item.title,
                  url: item.url,
                  sections: [],
              }

              // Map sections
              category.sections = originalData
                  .filter((section) => section.parent_id === item.id)
                  .map((section) => {
                      return {
                          id: section.id,
                          name: section.title,
                          url: section.url,
                          items: [],
                      }
                  })

              // Map items within sections
              category.sections.forEach((section) => {
                  section.items = originalData
                      .filter((item) => item.parent_id === section.id)
                      .map((item) => {
                          return {
                              name: item.title,
                              url: item.url,
                          }
                      })
              })

              categories.push(category)
          }
      })

      // Check if the data has changed
      const newData = {
          categories,
      }

      const cachedData = JSON.parse(localStorage.getItem('navData'))

      if (JSON.stringify(newData) !== JSON.stringify(cachedData)) {
          localStorage.setItem('navData', JSON.stringify(newData))
      }

      return newData
  } catch (error) {
      console.error('Error fetching data:', error)
      return { categories: [] }
  }
}

const subnavigation = ref({ categories: [] })

fetchAndBuildHierarchy().then((response) => {
  subnavigation.value.categories = response.categories.filter((category) => category.sections.length > 0)

  subnavigation.value.pages = response.categories.filter((category) => category.sections.length == 0)
})

import { useForm } from '@inertiajs/vue3'

const contactForm = useForm({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})

const submitContactForm = () => {
  contactForm.post(route('contact.store'), {
      preserveScroll: true,
      onSuccess: () => {
          contactForm.reset()
      },
  })
}
const { flash } = usePage().props

import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/vue/20/solid'

const mobileMenuOpen = ref(false)
</script>

<style></style>
