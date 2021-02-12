<template>
    <div>
        <welcome-section v-on:lang-switched="changeLang" :lang="this.lang">
            <welcome-section-link :icon="['fab', 'github']" href="https://github.com/litehell" title="Github" />
            <welcome-section-link :icon="['fab', 'linkedin']" href="https://linkedin.com/in/litehell" title="LinkedIn" />
            <welcome-section-link :icon="['fab', 'keybase']" href="https://keybase.io/litehell" title="Keybase" />
            <welcome-section-link :icon="['fas', 'blog']" href="https://blog.litehell.info" title="Blog" />
            <welcome-section-link icon="envelope" href="mailto:litehell@litehell.info" title="E-mail" />
        </welcome-section>
        <content-section :page="page" class="website-content" />
        <footer class="footer">
            <div class="content has-text-centered">
                <p>
                    Copyrights (C) 2019~2020 Yeonjin Shin<br>
                    Fox Image : Copyrights (C) 2004 Shiretoko-Shari Torurist Association<br>
                    Distributed under CCL BY 4.0 license
                </p>
            </div>
        </footer>
    </div>
</template>

<script>
import WelcomeSection from '../components/welcomeSection'
import WelcomeSectionLink from '../components/welcomeSectionLink'
import ContentSection from '../components/contentSection'
import FullscreenScrollSnap from '../components/fullscreenSnap'

const supportedLangs = ['en', 'ko'];
export default {
    components: { WelcomeSection, WelcomeSectionLink, ContentSection, FullscreenScrollSnap },
    head() {
        return {
            title: this.lang === 'en' ? 'Yeonjin Shin' : '신연진',
            meta: [
                {name: 'viewport', content : 'width=device-width, user-scalable=no'},
                {property: 'og:title', content: 'Yeonjin Shin'},
                {property: 'og:description', content: 'Personal website of yeonjin shin'},
                {property: 'og:image', content: 'https://gravatar.com/avatar/837266b567b50fd59e72428220bf69b1'},
                {property: 'og:url', content: 'https://litehell.info'},
            ],
            link: [
                {rel: 'shortcut icon', href: 'https://gravatar.com/avatar/837266b567b50fd59e72428220bf69b1'}
            ]
        }
    },
    async asyncData({ $content }) {
        const pages = {};
        for (const lang of supportedLangs)
            pages[lang] = await $content('index.' + lang).fetch();
        return {
            pages
        }
    },
    data() {
        return {
            lang: 'en'
        }
    },
    computed: {
        page() {
            return this.pages[this.lang];
        }
    },
    methods: {
        changeLang(lang) {
            this.lang = lang;
        }
    }
}
</script>