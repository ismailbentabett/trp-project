import { defineStore } from 'pinia'

export const useGlobalFilterStore = defineStore('globalFilter', {
    state: () => ({
        // Define your state properties here
        treeData: [],
        treeItem: {},
        accessorytreeData: [],
        accessorytreeItem: {},
    }),
    getters: {
        // Define your getters here
        getTreeData() {
            return this.treeData
        },
        getTreeItem() {
            return this.treeItem
        },
        getAccessoryTreeData() {
            return this.accessorytreeData
        },
        getAccessoryTreeItem() {
            return this.accessorytreeItem
        },
    },
    actions: {
        updateTreeData(treeItem) {
            this.treeData = treeItem
        },
        updateTreeItem(treeItem) {
            this.treeItem = treeItem
        },
        updateAccessoryTreeData(treeItem) {
            this.accessorytreeData = treeItem
        },
        updateAccessoryTreeItem(treeItem) {
            this.accessorytreeItem = treeItem
        },
    },
})
