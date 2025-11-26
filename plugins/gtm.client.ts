// ~/plugins/gtm.client.ts
// Google Tag Manager plugin for Nuxt

export default defineNuxtPlugin(() => {
  if (import.meta.server) return;

  const gtmId = "GTM-NG9TZGFR"; // Replace with your actual GTM Container ID

  try {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];

    // Push initial pageview
    window.dataLayer.push({
      "gtm.start": new Date().getTime(),
      event: "gtm.js",
    });

    // Load GTM script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(script);

    console.log("GTM initialized with container ID:", gtmId);

    // Track route changes
    const router = useRouter();
    router.afterEach((to) => {
      window.dataLayer.push({
        event: "pageview",
        page: to.fullPath,
        pageTitle: to.meta.title || document.title,
      });
    });
  } catch (error) {
    console.error("Failed to initialize GTM:", error);
  }
});
