<template>
    <div class="bg-white"></div>
</template>

<script setup>
import {} from '@headlessui/vue'

const navigation = {
    categories: [
        {
            id: 'women',
            name: 'Women',

            sections: [
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [{ name: 'Tops', href: '#' }],
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [{ name: 'Watches', href: '#' }],
                },
                {
                    id: 'brands',
                    name: 'Brands',
                    items: [{ name: 'Full Nelson', href: '#' }],
                },
            ],
        },
        {
            id: 'men',
            name: 'Men',

            sections: [
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [{ name: 'Tops', href: '#' }],
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [{ name: 'Watches', href: '#' }],
                },
                {
                    id: 'brands',
                    name: 'Brands',
                    items: [{ name: 'Re-Arranged', href: '#' }],
                },
            ],
        },
    ],
    pages: [
        { name: 'Company', href: '#' },
        { name: 'Stores', href: '#' },
    ],
}
</script>
