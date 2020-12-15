<template>
    <div class="fullscreen-snap-container">
        <slot>
        </slot>
    </div>
</template>

<style scoped>
.fullscreen-snap-container {
    scroll-snap-type: y proximity;
    height: 100vh;
    width: 100vw;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
}
.fullscreen-snap-container > * {
    scroll-snap-align: start;
}
</style>