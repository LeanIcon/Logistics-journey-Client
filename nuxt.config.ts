// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  compatibilityDate: '2025-10-31',
  css: ['~/assets/css/main.css', '~/assets/css/fonts.css'],
  modules: ['@nuxtjs/tailwindcss', '@vueuse/motion/nuxt', 'motion-v/nuxt', '@nuxt/image'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      apiBase: 'https://cms.logisticjourney.com',
      recaptchaSiteKey: '6LdHvRcsAAAAAFDwfHpIaz5RjXMfL6jELHSWdtpL'
    },
  },

  app: {
    head: {
      title: "Logistic Journey",
      script: [
        {
          type: "text/javascript",
          innerHTML: `window.dataLayer = window.dataLayer || [];`,
          tagPosition: "head",
        },
      ],
      meta: [
        {
          name: 'description',
          content:
            'Logistic Journey gives you full control, real-time visibility, and reliable deliveries—without the chaos of paper and spreadsheets.',
        },
        {
          name: 'keywords',
          content: 'logistics, delivery, real-time tracking, shipping solutions',
        },

        // Open Graph 
        { property: 'og:title', content: 'Logistic Journey' },
        { property: 'og:description', content: 'Logistic Journey gives you full control, real-time visibility, and reliable deliveries—without the chaos of paper and spreadsheets.' },
        { property: 'og:image', content: '/Navbar/2/Logistics Journey Logo.png' }, // ideally 1200x630 px with logo + background
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:width', content: '512' },
        { property: 'og:image:height', content: '512' },
        { property: 'og:url', content: 'https://new.logisticjourney.com' },
        { property: 'og:type', content: 'website' },

        // Twitter (optional)
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Logistics Journey' },
        { name: 'twitter:description', content: 'Logistic Journey gives you full control, real-time visibility, and reliable deliveries.' },
        { name: 'twitter:image', content: '/Navbar/2/Logistics Journey Logo.png' },
      ],
      
      link: [
        { rel: 'icon', type: 'image/png', sizes:'16x16', href: '/Navbar/2/Logistics Journey Logo.png' },
        // Preload Google Fonts Poppins stylesheet for performance
        {
          rel: "preload",
          as: "style",
          href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
          onload: "this.onload=null;this.rel='stylesheet'",
        },
      ],
    },
  },

  nitro: {
    compressPublicAssets: true,
  },
});