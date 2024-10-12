<template>
    <ul class="tree">
        <TreeItemAccessory class="my-1" v-for="item in typesWithLevels" :key="item.id" :item="item" />
    </ul>
</template>

<script setup>
import { initTE } from 'tw-elements'
import TreeItemAccessory from './TreeItemAccessory.vue'
import { defineProps, onMounted } from 'vue'
import { flatMap } from 'lodash'

import { useGlobalFilterStore } from '@/stores/GlobalFilterStore'

onMounted(() => {
    initTE() // Initialize your tree elements if needed
})

const props = defineProps({
    type_accessoire: {
        type: Array,
        required: true,
    },
})

function assignLevel(items, parentLevel = '') {
    return items.map((item) => {
        const level = parentLevel ? `${parentLevel}` : 'types'
        item.checked = false
        // Recursively assign level to nested items
        if (item.children && item.children.length > 0) {
            item.children = assignLevel(item.children, 'types')
        }
        // Recursively assign level to nested items
        if (item.series && item.series.length > 0) {
            item.series = assignLevel(item.series, 'series')
        }

        if (item.series && item.series.length > 0 && item.series[0].modeles && item.series[0].modeles.length > 0) {
            item.series[0].modeles = assignLevel(item.series[0].modeles, 'modeles')
        }

        return { ...item, level }
    })
}
const globalFilterStore = useGlobalFilterStore()

// Usage
const typesWithLevels = assignLevel(props.type_accessoire) // Assuming your top-level property is 'types'

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
const flattenedData = flattenTreeData(typesWithLevels)

globalFilterStore.updateAccessoryTreeData(flattenedData)
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
