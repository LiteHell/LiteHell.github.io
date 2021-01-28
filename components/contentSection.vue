<template>
    <section class="section introduction">
        <div class="container">
            <nuxt-content class="content is-medium" :document="page" />
        </div>
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