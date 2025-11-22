  // ~/plugins/ga.client.ts
import type { Router, RouteLocationNormalized } from 'vue-router'

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) return; // prevent SSR execution
  console.log("[GA Plugin] Loading Google Analytics plugin.");

  const measurementId = "G-0Y26KC2S47";

  // Load GA script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;

  script.onload = () => {
    console.log("[GA Plugin] gtag.js script loaded.");

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      console.log("[GA Plugin] gtag called with args:", args);
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    // REQUIRED
    gtag("js", new Date());
    gtag("config", measurementId, {
      send_page_view: true,
      page_path: window.location.pathname
    });

    // Track page views AFTER Nuxt router is ready
    const router = (nuxtApp.router as unknown) as Router | undefined;
    if (router && typeof router.afterEach === 'function') {
      router.afterEach((to: RouteLocationNormalized) => {
        console.log("[GA Plugin] Tracking route:", to.fullPath);
        gtag("config", measurementId, {
          page_path: to.fullPath,
        });
      });
    } else {
      console.warn("[GA Plugin] nuxtApp.router or afterEach method not available.");
    }
  };

  document.head.appendChild(script);
});
