// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  compatibilityDate: '2025-10-31',
  css: ['~/assets/css/main.css', '~/assets/css/fonts.css'],
  modules: ['@nuxtjs/tailwindcss', '@vueuse/motion/nuxt', 'motion-v/nuxt'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      apiBase: 'https://logisticjourney.onrender.com/',
      recaptchaSiteKey: '6LdeOxQsAAAAANOxs0ENs6ILBUMlWoHp3_ARnTxd'
    },
  },

  app: {
    head: {
      title: 'Logistics Journey',
      meta: [
        {
          name: 'description',
          content:
            'Logistics Journey gives you full control, real-time visibility, and reliable deliveries—without the chaos of paper and spreadsheets.',
        },
        {
          name: 'keywords',
          content: 'logistics, delivery, real-time tracking, shipping solutions',
        },

        // Open Graph 
        { property: 'og:title', content: 'Logistics Journey' },
        { property: 'og:description', content: 'Logistics Journey gives you full control, real-time visibility, and reliable deliveries—without the chaos of paper and spreadsheets.' },
        { property: 'og:image', content: '/Navbar/2/Logistics Journey Logo.png' }, // ideally 1200x630 px with logo + background
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:width', content: '512' },
        { property: 'og:image:height', content: '512' },
        { property: 'og:url', content: 'https://new.logisticjourney.com' },
        { property: 'og:type', content: 'website' },

        // Twitter (optional)
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Logistics Journey' },
        { name: 'twitter:description', content: 'Logistics Journey gives you full control, real-time visibility, and reliable deliveries.' },
        { name: 'twitter:image', content: '/Navbar/2/Logistics Journey Logo.png' },
      ],
      
      link: [
        { rel: 'icon', type: 'image/png', sizes:'16x16', href: '/Navbar/2/Logistics Journey Logo.png' },
        // Preload critical fonts
        { rel: 'preload', as: 'font', href: '/fonts/Gilroy-Regular.ttf', type: 'font/ttf', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'font', href: '/fonts/Gilroy-Medium.ttf', type: 'font/ttf', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'font', href: '/fonts/Gilroy-Bold.ttf', type: 'font/ttf', crossorigin: 'anonymous' },
      ],
    },
  },
})
