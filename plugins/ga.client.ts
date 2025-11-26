// ~/plugins/ga.client.ts
export default defineNuxtPlugin(() => {
  if (process.server) return;

  const measurementId = "G-ST3S57LEHB";

  try {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];

    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }

    window.gtag = gtag;

    // Load GA script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    script.defer = true;

    script.onerror = () => {
      console.warn("GA script failed to load");
    };

    document.head.appendChild(script);

    // Initialize gtag config immediately (don't wait for script load)
    gtag("js", new Date());
    gtag("config", measurementId, {
      page_path: window.location.pathname,
      send_page_view: true,
    });

    // Track SPA route changes
    const router = useRouter();
    router.afterEach((to) => {
      if (typeof window.gtag === "function") {
        window.gtag("event", "page_view", {
          page_path: to.fullPath,
          page_title: to.name || document.title,
        });
      }
    });

    console.log("GA initialized with measurement ID:", measurementId);
  } catch (error) {
    console.error("GA initialization error:", error);
  }
});

