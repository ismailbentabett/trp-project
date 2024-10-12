import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        './node_modules/flowbite/**/*.js',
        'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
        'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
        './src/**/*.{html,js}',
        './node_modules/tw-elements/dist/js/**/*.js',
        './node_modules/vue-tailwind-datepicker/**/*.js',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                cerulean: {
                    50: '#ecfdff',
                    100: '#cff8fe',
                    200: '#a4f0fd',
                    300: '#66e4fa',
                    400: '#21cdef',
                    500: '#05b9e0',
                    600: '#078cb3',
                    700: '#0d7091',
                    800: '#145b76',
                    900: '#164c63',
                    950: '#083144',
                },
                'vtd-primary': {
                    50: '#ecfdff',
                    100: '#cff8fe',
                    200: '#a4f0fd',
                    300: '#66e4fa',
                    400: '#21cdef',
                    500: '#05b9e0',
                    600: '#078cb3',
                    700: '#0d7091',
                    800: '#145b76',
                    900: '#164c63',
                    950: '#083144',
                },
                'vtd-secondary': colors.gray,
            },
        },
    },

    plugins: [forms, require('flowbite/plugin'), require('tw-elements/dist/plugin.cjs')],
}
