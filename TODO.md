# Performance Optimization for Lighthouse (Target: 90%+)

## Step 1: Configure @nuxt/image in nuxt.config.ts

- Add '@nuxt/image' to modules
- Configure image settings: quality, formats (webp, avif), sizes

## Step 2: Replace <img> with <NuxtImg> in key components

- Hero.vue: Replace img tags with NuxtImg, add loading="lazy"
- Blogs.vue: Replace img in blog cards with NuxtImg, add loading="lazy"
- BlogGrid.vue: Replace img with NuxtImg
- CaseStudyGrid.vue: Replace img with NuxtImg
- Other components with images: Search and replace

## Step 3: Implement lazy loading for components

- Use dynamic imports for heavy components like motion-based ones
- Lazy load non-critical components

## Step 4: Bundle optimization

- Enable compression in nuxt.config
- Minify CSS/JS (default)
- Code splitting with dynamic imports

## Step 5: Test and verify

- Run build and preview
- Run Lighthouse audit
- Adjust as needed
