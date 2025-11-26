// ~/plugins/ga.client.ts
export default defineNuxtPlugin(() => {
  if (import.meta.server) return;

  const measurementId = "G-ST3S57LEHB";

  try {
    // Initialize dataLayer and gtag immediately
    window.dataLayer = window.dataLayer || [];

    window.gtag = function (...args: any[]) {
      window.dataLayer.push(args);
    };

    // Send initial page view configuration
    window.gtag("js", new Date());
    window.gtag("config", measurementId, { 
      send_page_view: true,
      page_path: window.location.pathname,
      page_title: document.title
    });

    // Load GA script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    console.log("GA (G-ST3S57LEHB) initialized successfully");
  } catch (error) {
    console.error("Failed to initialize GA:", error);
  }

  // Track SPA route changes
  const router = useRouter();
  router.afterEach((to) => {
    try {
      if (typeof window.gtag === "function") {
        window.gtag("event", "page_view", {
          page_path: to.fullPath,
          page_title: to.meta.title || document.title,
        });
      }
    } catch (error) {
      console.error("Failed to track page view:", error);
    }
  });
});
