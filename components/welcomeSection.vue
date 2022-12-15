<template>
    <section class="hero is-primary is-fullheight name-hero" v-if="sectionLang === 'en'"> 
        <div class="hero-body">
            <div class="container">
                <h1 class="title">Yeonjin Shin</h1>
                <h2 class="subtitle">Rookie developer ;D</h2>
                    <slot>
                    </slot>
                    <div class="switch-lang">
                        <a href="#" @click.prevent="switchLang">(한국어로 보고 싶으신가요?)</a>  
                    </div>
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
    <section class="hero is-primary is-fullheight name-hero" v-else>
        <div class="hero-body">
            <div class="container">
                <h1 class="title">신연진</h1>
                <h2 class="subtitle">초보 개발자입니다!</h2>
                    <slot>
                    </slot>
                    <div class="switch-lang">
                        <a href="#" @click.prevent="switchLang">(Want english version?)</a>  
                    </div>
            </div>
        </div>
        <div class="hero-foot">
            <div class="container scroll-text">
                <div class="content has-text-centered">
                    <p><font-awesome-icon icon="chevron-down" /> 스크롤을 내려보세요!</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.switch-lang {
    margin-top: 1.5rem;
    font-size: .9rem;
}
h2.subtitle {
    margin-bottom: 0px;
}
.name-hero {
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url('~assets/fox.jpg');
    background-size: cover;
    background-attachment: fixed;
}
.scroll-text {
    padding-bottom: 1em;
    font-size: 1.2em;
}
.scroll-text > * {
    position: relative;
    animation: bounce 1s infinite linear;
}
.scroll-text svg {
    height: 1em;
}
.contact-link:not(:last-of-type)::after {
    content: " | ";
}
@keyframes bounce {
    0%, 55% {
        top: 0em;
    }
    60% {
        top: 0.1em
    }
    70% {
        top: 0.3em;
    }
    100% {
        top: 0em;
    }
}

</style>

<script>
export default {
    props: {
        lang: String
    },
    data() {
        return {
            sectionLang: this.lang
        }
    },
    methods: {
        switchLang() {
            if (this.sectionLang === 'en')
                this.sectionLang = 'ko';
            else
                this.sectionLang = 'en';
            this.$emit('lang-switched', this.sectionLang);
        }
    },
}
</script>