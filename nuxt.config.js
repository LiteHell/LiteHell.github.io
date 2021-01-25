module.exports = {
    target: 'static',
    buildModules: [
        '@nuxtjs/fontawesome'
    ],
    modules: [
        '@nuxt/content'
    ],
    css: [
        'bulma/css/bulma.min.css'
    ],
    fontawesome: {
        icons: {
            solid: ['faEnvelope', 'faChevronDown', 'faBlog'],
            brands: ['faGithub', 'faKeybase', 'faLinkedin']
        }
    },
    content: {
        markdown : {
            remarkPlugins: () => ['remark-squeeze-paragraphs']
        }
    }
}