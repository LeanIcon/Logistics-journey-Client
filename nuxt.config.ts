// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  compatibilityDate: "2025-10-31",
  css: ["~/assets/css/main.css", "~/assets/css/fonts.css"],
  modules: ["@nuxtjs/tailwindcss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      apiBase: "https://logisticjourney.onrender.com",
    },
  },

  app: {
    head: {
      title: "Logistics Journey",
      meta: [
        {
          name: "Logistics Journey Management",
          content:
            "Logistics Journey gives you full control, real-time visibility, and reliable deliveries—without the chaos of paper and spreadsheets.",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/Navbar/2/Logistics Journey Logo.png",
        },
        // Preload critical fonts
        {
          rel: "preload",
          as: "font",
          href: "/fonts/Gilroy-Regular.ttf",
          type: "font/ttf",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          href: "/fonts/Gilroy-Medium.ttf",
          type: "font/ttf",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          href: "/fonts/Gilroy-Bold.ttf",
          type: "font/ttf",
          crossorigin: "anonymous",
        },
      ],
    },
  },
});
