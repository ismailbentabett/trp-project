<template>
    <div class="iframe-container">
        <iframe
            width="100%"
            :height="iframeHeight"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            :src="iframeSrc"
            class="fill-window"
        >
        </iframe>
    </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'

export default {
    props: {
        src: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const iframeHeight = ref('100%')

        const setIframeHeight = () => {
            iframeHeight.value = `${window.innerHeight}px`
        }

        // Watch for window resize and update iframe height
        watch(
            () => window.innerHeight,
            () => {
                setIframeHeight()
            },
        )

        // Lifecycle hook to set initial iframe height
        onMounted(() => {
            setIframeHeight()
        })

        return {
            iframeHeight,
            iframeSrc: props.src,
        }
    },
}
</script>

<style>
.iframe-container {
    width: 100%;
}
.fill-window {
    height: 100%;
    position: absolute;
    width: 100%;
    overflow: hidden;
}
</style>
