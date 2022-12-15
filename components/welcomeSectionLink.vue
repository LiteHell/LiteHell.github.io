<template>
    <a :href="href" :title="title" target="_blank" class="contact-link">
        <span class="icon">
            <font-awesome-icon :icon="icon" />
        </span>
    </a>
</template>

<style scoped>
.icon svg {
    height: 1em;
}
</style>

<script>
export default {
    props: ['href', 'title', 'icon']
}
</script>