<template>
    <ul class="tree">
        <TreeItem class="my-1" v-for="item in categoriesWithLevels" :key="item.id" :item="item" />
    </ul>
</template>

<script setup>
import { useGlobalFilterStore } from '@/stores/GlobalFilterStore'
import { Collapse, initTE } from 'tw-elements'
import { defineProps, onMounted } from 'vue'
import TreeItem from './TreeItem.vue'

onMounted(() => {
    initTE({ Collapse })
})

const props = defineProps({
    categories: {
        type: Array,
        required: true,
    },
})
function assignLevel(items, parentLevel = '') {
    return items.map((item) => {
        const level = parentLevel ? `${parentLevel}` : 'category'
        item.checked = false

        // Recursively assign level to nested items
        if (item.types && item.types.length > 0) {
            item.types = assignLevel(item.types, 'types')
        }

        // Recursively assign level to nested children
        if (item.children && item.children.length > 0) {
            item.children = assignLevel(item.children, 'types')
        }

        // Recursively assign level to nested series
        if (item.series && item.series.length > 0) {
            item.series = assignLevel(item.series, 'series')
        }

        // If it's inside series, it's modele
        if (item.modeles && item.modeles.length > 0) {
            item.modeles = assignLevel(item.modeles, 'modeles')
        }

        return { ...item, level }
    })
}

const globalFilterStore = useGlobalFilterStore()

// Usage
const categoriesWithLevels = assignLevel(props.categories)

import { flatMap } from 'lodash'

function flattenTreeData(treeData) {
    return flatMap(treeData, (item) => {
        const level = item.level || ''
        const flattenedItem = { ...item, level }

        const types = Array.isArray(item.types)
            ? flattenTreeData(item.types.map((type) => ({ ...type, level: 'types' })))
            : []
        const series = Array.isArray(item.series)
            ? flattenTreeData(item.series.map((serie) => ({ ...serie, level: 'series' })))
            : []
        const modeles = Array.isArray(item.modeles)
            ? flattenTreeData(item.modeles.map((modele) => ({ ...modele, level: 'modeles' })))
            : []

        return [flattenedItem, ...types, ...series, ...modeles]
    })
}

// Usage
const flattenedData = flattenTreeData(categoriesWithLevels)

globalFilterStore.updateTreeData(flattenedData)
</script>
<style scoped>
.tree {
    list-style: none;
    padding: 0;
    margin: 0;
}

.tree-item {
    position: relative;
    padding-left: 20px;
    margin-bottom: 5px;
}

.tree-item:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 10px;
    border-left: 2px solid #333;
    /* Adjust the color as needed */
}

.tree-item:last-child:before {
    height: 50%;
}

.tree-item > .tree-content {
    display: flex;
    align-items: center;
}
</style>
