// ~/plugins/ga.client.ts
export default defineNuxtPlugin(() => {
  if (import.meta.server) return;

  const measurementId = "G-ST3S57LEHB";

  try {
    // Initialize dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];

    window.gtag = function (...args: any[]) {
      window.dataLayer.push(args);
    };

    // Set defaults
    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      allow_google_signals: false,
      anonymize_ip: true,
    });

    // Explicit page_view event
    window.gtag("event", "page_view", {
      page_path: window.location.pathname,
      page_title: document.title,
      page_location: window.location.href,
    });

    // Load GA script tag
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.onload = () => {
      console.log("GA script loaded");
    };
    script.onerror = () => {
      console.warn("GA script failed to load");
    };
    document.head.appendChild(script);

    console.log("GA (G-ST3S57LEHB) initialized with explicit page_view event");
  } catch (error) {
    console.error("Failed to initialize GA:", error);
  }

  // Track SPA route changes with explicit page_view events
  const router = useRouter();
  router.afterEach((to) => {
    try {
      if (typeof window.gtag === "function") {
        // Use explicit page_view event instead of config
        window.gtag("event", "page_view", {
          page_path: to.fullPath,
          page_title: to.meta.title || document.title,
          page_location: window.location.href,
        });
        console.log("GA page_view tracked:", to.fullPath);
      }
    } catch (error) {
      console.error("Failed to track page view:", error);
    }
  });
});
