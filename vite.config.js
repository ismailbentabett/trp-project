import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
    plugins: [
        viteCompression({
            verbose: true,
            threshold: 10240,
            algorithm: 'gzip',
            ext: '.gz',
        }),
        laravel({
            input: ['resources/js/app.js', 'resources/css/app.css', './resources/css/filament/admin/theme.css'],

            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
})
