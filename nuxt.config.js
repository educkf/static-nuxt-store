const routerBase = process.env.ROOT ? {
  router: {
    base: '/' + process.env.ROOT + '/'
  }
} : {}

const isStatic = process.env.MODE === "universal" ? {
  target: 'static'
} : {}


module.exports = {
  ...routerBase,
  ...isStatic,
  mode: process.env.MODE || 'spa',
  components: true,
  server: {
    port: 3333, // default: 3000
    host: 'localhost' // default: localhost
  },

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  env: {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseUrl: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    firestoreUrl: process.env.FIRESTORE_URL,
    deployUrl: process.env.DEPLOY_URL
  },

  loading: { color: '#fff' },

  css: [
    '@assets/css/inter.css'
  ],

  plugins: [],

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/components',
    ['@nuxtjs/dotenv', { systemvars: true }]
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
  ],

  axios: {
  },

  build: {
    extend(config, ctx) {},

    babel: {
      plugins: [
        '@babel/plugin-proposal-optional-chaining'
      ]
    }
  },
  
  generate: {
    exclude: process.env.MODE === 'universal' ? [ /^\/admin/ ] : []
  }
}
