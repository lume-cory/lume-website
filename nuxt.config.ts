// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    css: ['@/assets/css/main.scss'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            meta: [],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto Condensed:400,700'},
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open Sans:400,700'},
            ],
            script: [
                {
                    src: '//js.hsforms.net/forms/embed/v2.js'
                },
            ],
        },
    }
})
