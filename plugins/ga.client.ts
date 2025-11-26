// ~/plugins/ga.client.ts
export default defineNuxtPlugin(() => {
  if (import.meta.server) return;

  const measurementId = "G-ST3S57LEHB";

  // Load GA script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];

    window.gtag = function (...args: any[]) {
      window.dataLayer.push(args);
    };

    window.gtag("js", new Date());
    window.gtag("config", measurementId, { send_page_view: true });
  };

  document.head.appendChild(script);

  // Track SPA route changes
  const router = useRouter();
  router.afterEach((to) => {
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_path: to.fullPath,
        page_title: document.title,
      });
    }
  });
});
