// ~/plugins/ga.client.ts
export default defineNuxtPlugin(() => {
  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-0Y26KC2S47";
  script.async = true;

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];

    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }

    window.gtag = gtag;

    // Send initial page view
    gtag("js", new Date());
    gtag("config", "G-0Y26KC2S47", {
      page_path: window.location.pathname,
    });

    // Track SPA route changes
    const router = useRouter();
    router.afterEach((to) => {
      if (typeof window.gtag === "function") {
        window.gtag("config", "G-0Y26KC2S47", {
          page_path: to.fullPath,
        });
      }
    });
  };

  document.head.appendChild(script);
});

export {};

