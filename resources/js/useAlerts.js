import { ref } from 'vue'

const alerts = ref([])

export default function useAlerts() {
    const removeAlert = (id) => {
        setTimeout(() => {
            alerts.value = alerts.value.filter((alert) => alert.id !== id)
        }, 3000)
    }

    const addAlert = (alert) => {
        var uniqid =
            Date.now() +
            Math.random().toString(36).substr(2, 9) +
            Math.random().toString(36).substr(2, 9) +
            Math.random().toString(36).substr(2, 9)

        alerts.value.push({
            id: id,
            ...alert,
        })

        removeAlert(id)

        if (alerts.value.length > 5) {
            alerts.value = alerts.value.slice(1)
        }
    }

    return {
        alerts,
        addAlert,
        removeAlert,
    }
}
