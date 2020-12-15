<template>
    <fullscreen-scroll-snap>
        <welcome-section>
            <welcome-section-link :icon="['fab', 'github']" href="https://github.com/litehell" title="Github" />
            <welcome-section-link :icon="['fab', 'linkedin']" href="https://linkedin.com/in/litehell" title="LinkedIn" />
            <welcome-section-link :icon="['fab', 'keybase']" href="https://keybase.io/litehell" title="Keybase" />
            <welcome-section-link icon="envelope" href="mailto:litehell@litehell.info" title="E-mail" />
        </welcome-section>
        <div class="content-section-wrapper">
            <content-section :page="page" class="website-content" />
        </div>
        <footer class="footer">
            <div class="content has-text-centered">
                <p>
                    Copyrights (C) 2019~2020 Yeonjin Shin<br>
                    Fox Image : Copyrights (C) 2004 Shiretoko-Shari Torurist Association<br>
                    Distributed under CCL BY 4.0 license
                </p>
            </div>
        </footer>
    </fullscreen-scroll-snap>
</template>

<style scoped>
.content-section-wrapper {
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: none;
    scroll-snap-type: unset;
    width: 100vw;
    height: 100vh;
}
.content-section-wrapper::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}
</style>

<script>
import WelcomeSection from '../components/welcomeSection'
import WelcomeSectionLink from '../components/welcomeSectionLink'
import ContentSection from '../components/contentSection'
import FullscreenScrollSnap from '../components/fullscreenSnap'

export default {
    components: { WelcomeSection, WelcomeSectionLink, ContentSection, FullscreenScrollSnap },
    head() {
        return {
            title: 'Yeonjin Shin',
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
        const page = await $content('index').fetch();

        return {
            page
        };
    }
}
</script>