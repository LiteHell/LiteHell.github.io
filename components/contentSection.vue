<template>
    <section class="section introduction">
        <nuxt-content class="content is-medium" :document="page" />
    </section>
</template>

<style scoped>
.introduction {
    padding-top: 1rem;
}
.content h3 {
    text-decoration: underline;
}
</style>

<script>
export default {
    props: ['page']
}
</script>