<template>
  <div class="highest-width policy-wrap">
    <div class="policy-container">
      <main class="policy-main prose prose-blue" v-if="cancellationContent">
        <div v-html="renderedContent"></div>
      </main>
     
      <main v-else>
        <div>Loading...</div>
      </main>
      <!-- <aside class="policy-toc mlg:fixed mlg:z-50 right-[100px] xl:right-[200px]" aria-label="Table of contents" v-if="tocItems.length > 0">
        <nav>
          <ul>
            <li v-for="item in tocItems" :key="item.id">
              <a :href="`#${item.id}`">{{ item.text }}</a>
            </li>
          </ul>
        </nav>
      </aside> -->

      <!-- ✅ Dynamic TOC (only when backend policy exists) -->
        <aside
          class="policy-toc mlg:fixed mlg:z-50 right-[100px] xl:right-[200px]"
          aria-label="Table of contents"
          v-if="cancellationContent && tocItems.length > 0"
        >
          <nav>
            <ul>
              <li v-for="item in tocItems" :key="item.id">
                <a :href="`#${item.id}`">{{ item.text }}</a>
              </li>
            </ul>
          </nav>
        </aside>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref, computed } from 'vue'
import { useApi } from '~/composables/useApi'

const { getPolicyBySlug } = useApi()

interface PolicyData {
  id: number
  title: string
  slug: string
  status: string
  content: string
  meta_title: string
  meta_description: string
  created_at: string
  updated_at: string
}

interface TocItem {
  id: string
  text: string
}

const loading = ref(true)

const cancellationContent = ref<PolicyData | null>(null)
const tocItems = ref<TocItem[]>([])

const renderedContent = computed(() => {
  return cancellationContent.value ? cancellationContent.value.content : '';
});


const generateToc = (html: string) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')
  const headings = doc.querySelectorAll('h2, h3')
  const items: TocItem[] = []
  headings.forEach(h => {
    if (h.id) {
      items.push({
        id: h.id,
        text: h.textContent || ''
      })
    }
  })
  tocItems.value = items
}

onMounted(async () => {
  try {
    const response = await getPolicyBySlug('cancellation-policy')
    if (response && response.data) {
      cancellationContent.value = response.data
      const html = renderedContent.value
      generateToc(html)
    }
  } catch (error) {
    console.error('Failed to fetch policy:', error)
    // Fallback to static content
  }

  // Setup TOC functionality if we have content
  if (cancellationContent.value || tocItems.value.length > 0) {
    setupToc()
  }
})

const setupToc = () => {
  let observer: IntersectionObserver | null = null
  let footerObserver: IntersectionObserver | null = null

  const tocLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.policy-toc a'))
  const headings = Array.from(document.querySelectorAll<HTMLElement>('.policy-main h2, .policy-main h3')).filter(h => h.id)

  if (tocLinks.length === 0 || headings.length === 0) return

  // Smooth scroll on click and update history
  tocLinks.forEach(link => {
    const onClick = (e: Event) => {
      e.preventDefault()
      const href = link.getAttribute('href') || ''
      if (!href) return
      const target = document.querySelector<HTMLElement>(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        // update URL without adding a new history entry
        history.replaceState(null, '', href)
      }
    }
    link.addEventListener('click', onClick)
  })

  // IntersectionObserver to toggle active class
  const callback: IntersectionObserverCallback = (entries) => {
    // find the entry that's most visible (largest intersectionRatio) or the first intersecting
    const visible = entries.filter(e => e.isIntersecting)
    let targetId: string | null = null
    if (visible.length > 0) {
      // choose the one with largest intersectionRatio
      visible.sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))
      const first = visible[0]
      if (first && first.target) targetId = (first.target as HTMLElement).id
    } else {
      // fallback: pick the entry closest to top (smallest boundingClientRect.top)
      const sorted = entries.slice().sort((a, b) => {
        const ta = (a.target as HTMLElement).getBoundingClientRect().top
        const tb = (b.target as HTMLElement).getBoundingClientRect().top
        return Math.abs(ta) - Math.abs(tb)
      })
      const firstSorted = sorted[0]
      if (firstSorted && firstSorted.target) targetId = (firstSorted.target as HTMLElement).id
    }

    if (targetId) {
      tocLinks.forEach(l => {
        if (l.getAttribute('href') === `#${targetId}`) l.classList.add('active')
        else l.classList.remove('active')
      })
    }
  }

  observer = new IntersectionObserver(callback, {
    root: null,
    rootMargin: '-40% 0px -40% 0px',
    threshold: [0, 0.01, 0.25, 0.5, 0.75, 1]
  })

  headings.forEach(h => observer && observer.observe(h))

  // Observe footer to stop TOC scrolling
  const footer = document.querySelector('footer')
  if (footer) {
    footerObserver = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry) {
        const aside = document.querySelector('.policy-toc')
        if (entry.isIntersecting) {
          aside?.classList.add('toc-stopped')
        } else {
          aside?.classList.remove('toc-stopped')
        }
      }
    }, {
      root: null,
      threshold: 0
    })
    footerObserver.observe(footer)
  }

  // set initial active based on current scroll position
  // run a small check after a tick to let browser layout
  setTimeout(() => {
    const active = document.querySelector('.policy-toc a.active')
    if (!active) {
      const firstLink = tocLinks[0]
      if (firstLink) firstLink.classList.add('active')
    }
  }, 50)

  onBeforeUnmount(() => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
    if (footerObserver) {
      footerObserver.disconnect()
      footerObserver = null
    }
    // remove click listeners by cloning nodes (simple cleanup)
    tocLinks.forEach(link => {
      const clone = link.cloneNode(true) as HTMLElement
      link.parentNode && link.parentNode.replaceChild(clone, link)
    })
  })
}
</script>

<style>
.policy-wrap {
  padding: 48px 20px;
}
.policy-container {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 32px;
  align-items: start;
}
.policy-main {
  /* font-family: monospace, monospace; */
  color: #16181B;
}

.policy-main a {
  font-weight: 300;
  color: #16181B;
}
.policy-main h1 {
  font-size: 22px;
  margin: 0 0 18px 0;
}
.policy-main h2 {
  font-size: 24px;
  font-weight: 400;
  margin-top: 28px;
  margin-bottom: 12px;
}
.policy-main h3 {
  font-size: 22px;
  font-weight: 500;
  margin-top: 18px;
  margin-bottom: 8px;
}
.lead {
  font-size: 13px;
  line-height: 1.6;
  color: #16181B;
  margin-bottom: 18px;
}
.policy-main p,
.policy-main ul,
.policy-main address {
  font-size: 14px;
  line-height: 1.6;
  color: #16181B;
}
.policy-main ul { 
  margin-left: 20px;
}
.policy-main ul li { 
  list-style: disc;
  margin-bottom: 8px;
}
.contact-info {
  margin-top: 8px;
  font-style: normal;
}
.policy-toc {
  transition: position 0.3s ease;
}
.policy-toc.toc-stopped {
  position: absolute !important;
}
.policy-toc nav {
  position: sticky;
  top: 24px;
  padding: 18px 16px;
  border-left: 1px solid rgba(0,0,0,0.06);
}
.policy-toc ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.policy-toc li {
  margin-bottom: 10px;
}
.policy-toc a {
  color: #111827; /* default: black-ish */
  text-decoration: none;
  font-size: 14px;
}
.policy-toc a:hover,
.policy-toc a:focus,
.policy-toc a:active,
.policy-toc a.active {
  color: #2563eb; /* active/hover color */
  text-decoration: underline;
}

/* Small screens: stack */
@media (max-width: 900px) {
  .policy-container {
    grid-template-columns: 1fr;
  }
  .policy-toc {
    order: -1;
    margin-bottom: 12px;
  }
  .policy-toc nav {
    position: relative;
    border-left: none;
    padding-left: 0;
  }
}
</style>