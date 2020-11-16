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
            solid: ['faEnvelope', 'faChevronDown'],
            brands: ['faGithub', 'faKeybase', 'faLinkedin']
        }
    },
    content: {
        markdown : {
            remarkPlugins: () => ['remark-squeeze-paragraphs']
        }
    }
}