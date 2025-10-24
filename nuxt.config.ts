import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
   css: ['~/assets/css/main.css', '~/assets/css/fonts.css'], 
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  app: {
    head: {
      title: 'Logistics Journey',
      meta: [
        {
          name: 'Logistics Journey Management',
          content:
            'Logistics Journey gives you full control, real-time visibility, and reliable deliveries—without the chaos of paper and spreadsheets.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/Navbar/2/Logistics Journey Logo.png' },
      ],
    },
  },
})
