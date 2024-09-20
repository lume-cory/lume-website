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
            // script: [
            //     {
            //         src: '//js.hsforms.net/forms/embed/v2.js'
            //     },
            //     {
            //         innerHTML: 'hbspt.forms.create({region: "na1",portalId: "46735175",formId: "33188ac9-434f-4549-9404-235dba9a71d0"});'
            //     },
            // ],
        },
    }
})
