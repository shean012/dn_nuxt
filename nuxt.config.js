const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);

export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dn_site',
    htmlAttrs: {
      lang: 'en'
    },
    script: [
      { src: 'https://img.cdn.dn8188.com/skin/js/jquery.min.js' },
      { src: 'https://img.cdn.dn8188.com/skin/js/jquery.cookie.js' },
      { src: 'https://img.cdn.dn8188.com/code/sdk.3.1.js' },
      { src: 'https://img.cdn.dn8188.com/u/dept.js' }   
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  alias: {
    'static': resolve('assets')
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: './assets/style/animate.scss', lang: 'scss' },
    { src: './assets/style/app.scss', lang: 'scss' },
    { src: './assets/style/common.scss', lang: 'scss' },
  ],
  // router
  router: {
    
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src:'~plugins/elementUI',
      ssr: true
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    ssr: true,
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  }
}
