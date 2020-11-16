<template>
    <section class="hero is-primary is-fullheight name-hero">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">Yeonjin Shin</h1>
                <h2 class="subtitle">Rookie developer ;D
                    <br>
                    <slot>
                    </slot>    
                </h2>
            </div>
        </div>
        <div class="hero-foot">
            <div class="container scroll-text">
                <div class="content has-text-centered">
                    <p><font-awesome-icon icon="chevron-down" /> Scroll down to see more</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

.name-hero {
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url('~assets/fox.jpg');
    background-size: cover;
    background-attachment: fixed;
}
.scroll-text {
    padding-bottom: 1em;
    font-size: 1.2em;
}
.contact-link:not(:last-of-type)::after {
    content: " | ";
}
</style>

<script>
export default {
    
}
</script>