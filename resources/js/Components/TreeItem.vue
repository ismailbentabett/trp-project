<template>
    <li>
        <div v-if="item.level && hasNestedItems" class="mb-2 te-collapse-container">
            <!-- You can add additional styling or icons here if needed -->
        </div>
        <a
            @click="toggleCollapse"
            :class="{
                'flex items-center px-2 hover:bg-secondary-100 focus:text-primary active:text-primary text-sm text-gray-600': true,
                'te-collapse-init': true,
                'te-collapse-active': item.expanded,
            }"
            :href="'#collapse' + item.id"
            role="button"
            :aria-expanded="item.expanded ? 'true' : 'false'"
            :aria-controls="'collapse' + item.id"
        >
            <span v-if="hasNestedItems" class="mr-2">
                <ChevronDownIcon v-if="item.expanded" class="h-4 w-4 text-gray-500" />
                <ChevronRightIcon v-else class="h-4 w-4 text-gray-500" />
            </span>
            <span class="mr-2">
                <input
                    :id="`filter-${item.level}-${item.id}`"
                    :name="`${item.level}-${item.id}[]`"
                    :value="item"
                    @change="submitForm(item)"
                    type="checkbox"
                    :checked="item.checked"
                    class="h-4 w-4 rounded border-gray-300 text-cerulean-600 focus:ring-cerulean-500 cursor-pointer"
                />
            </span>
            <span class="flex-1">{{ item.name }}</span>
            <span class="text-xs text-gray-500">({{ item.level }})</span>
        </a>
        <ul
            v-if="hasNestedItems"
            :class="{
                'pl-8': true,
                'te-collapse': true,
                'te-visible': item.expanded,
            }"
            :id="'collapse' + item.id"
            data-te-collapse-item
        >
            <TreeItem v-for="nestedItem in getNestedItems(item)" :key="nestedItem.id" :item="nestedItem" />
        </ul>
    </li>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'
import { useGlobalFilterStore } from '@/stores/GlobalFilterStore'
const globalFilterStore = useGlobalFilterStore()
const props = defineProps(['item'])

function submitForm(form) {
    form.checked = !form.checked

    // Step 1: Update the tree item in the global filter store
    globalFilterStore.updateTreeItem(form)

    // Step 2: Get the entire flattened tree data from the store
    const flattenedTreeData = globalFilterStore.getTreeData

    // Step 3: Find the index of the updated tree item in the flattened tree data
    const index = flattenedTreeData.findIndex((x) => x.id === form.id && x.level === form.level)

    // Step 4: If the item is found, update it in the flattened tree data
    if (index !== -1) {
        flattenedTreeData[index].checked = form.checked
    }

    // Step 5: Update the entire flattened tree data in the global filter store
    globalFilterStore.updateTreeData(flattenedTreeData)
}

const item = ref(props.item)

const toggleCollapse = () => {
    item.value.expanded = !item.value.expanded
}
const hasNestedItems = computed(() => {
    return (
        item.value &&
        Object.keys(item.value).some((key) => Array.isArray(item.value[key]) && item.value[key].length > 0)
    )
})

const getNestedItems = () => {
    // Extract nested items dynamically
    const nestedItems = Object.values(item.value).flatMap((prop) => {
        return Array.isArray(prop) ? prop : []
    })

    return nestedItems
}
</script>

<style scoped>
.te-collapse-container {
    transition: margin 2s ease-in-out;
}

.te-collapse {
    max-height: 0;
    overflow: hidden;
    transition: max-height 2s ease-in-out;
}

.te-visible {
    max-height: 1000px;
    /* Adjust this value based on your content height */
}
</style>
