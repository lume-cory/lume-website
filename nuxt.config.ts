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
    ssr: false,
    app: {
        baseURL: '/lume-website/', // baseURL: '/<repository>/'
        buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
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
