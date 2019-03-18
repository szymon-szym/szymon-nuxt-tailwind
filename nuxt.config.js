import pkg from "./package.json";

export default {
  mode: "universal",

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Lora" },


      // <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
      ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#3b8070" },

  /*
  ** Global CSS
  */
  css: ["~/assets/css/tailwind.css"],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios"
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {}
  },
  serverMiddleware: ["~/api/contact"]
};
