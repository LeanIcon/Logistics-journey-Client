export default defineNuxtPlugin(() => {
  // 1. Load the GA script
  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-0Y26KC2S47";
  script.async = true;
  document.head.appendChild(script);

  // 2. Initialize GA
  window.dataLayer = window.dataLayer || [];
  
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }

  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", "G-0Y26KC2S47");

  // 3. Track route changes
  const router = useRouter();
  router.afterEach((to) => {
    gtag("config", "G-0Y26KC2S47", {
      page_path: to.fullPath,
    });
  });
});
