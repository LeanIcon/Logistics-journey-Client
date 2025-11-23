<template>
  <div class="highest-width policy-wrap">
    <div class="policy-container">
       <main class="policy-main" v-if="termsContent">
        <div v-html="renderedContent"></div>
      </main>
      <main class="policy-main" v-else>
        <h2 id="overview">Terms of Service - Logistic Journey</h2>

        <p class="lead text-[#16181B]">Logistic Journey (Pty) Ltd is a registered business entity in South Africa. Logistic Journey is a logistics management platform that enables businesses to manage, monitor, and optimize their fleet operations, deliveries, and supply chain processes. By using our website, web app, and mobile app, you agree to these Terms of Service.
          <br><br>These Terms are intended to provide a clear, reliable, and safe framework for your use of Logistic Journey. Please read them carefully. If you have any questions, contact us before continuing.
        </p>

        <h2 id="General-Terms">General Terms</h2>

        <ul>
          <li>Logistic Journey acts as a platform to streamline fleet and logistics operations.</li>
          <li>We are not directly involved in the physical delivery of goods; responsibility lies with you and your drivers.</li>
          <li>By using the platform, you confirm that the information you provide (orders, journey data, billing details) is accurate.</li>
          <li>We reserve the right to update, improve, or change features at any time.</li>
        </ul>

        <h2 id="Rights-to-suspend-or-terminate">Rights to Suspend or Terminate</h2>
        <p>We may suspend or terminate your access if:</p>
        <ol>
          <li>You misuse the platform or violate these Terms.</li>
          <li>Payments for subscriptions are overdue.</li>
          <li>You provide false or misleading information.</li>
          <li>You use the system for unlawful logistics operations.</li>
          <li>Fraudulent or suspicious activity is detected.</li>
        </ol> <br>
        <p>If your account is terminated, you lose access to all services and stored data.</p>

        <h2 id="Your-Conduct">Your Conduct</h2>
        <p>You are responsible for all activity under your account. You must not use Logistic Journey to transport prohibited goods, conduct fraud, or violate South African law. You must not upload viruses, malicious code, or attempt to hack or disrupt the platform. Respect drivers, clients, and other users when communicating through the system.</p>

        <h2 id="Membership-&-Accounts">Membership & Accounts</h2>
        <p>Membership is limited to legally registered businesses and individuals in South Africa (and other permitted regions). You must provide accurate registration details. Logistic Journey may request verification before granting full access.</p>
      
        <h2 id="Sharing-Your-Content-and-Information">Sharing Your Content and Information</h2>
        <p>By uploading journey data, driver information, or order details, you grant Logistic Journey the right to process this data only for operational purposes. You retain ownership of your data. Logistic Journey does not sell or share your data with third parties without your consent (see our Privacy Policy).</p>

        <h2 id="Subscription-&-Payments">Subscription & Payments</h2>
        <ul>
          <li>Logistic Journey operates on a subscription model.</li>
          <li>Subscription fees are billed monthly or annually.</li>
          <li>Payments are non-refundable unless required by law.</li>
          <li>Failure to make payments may result in suspension of services.</li>
        </ul>

        <h2 id="Product-Use">Product Use</h2>
        <p>Logistic Journey provides tools for journey planning, route optimization, and delivery tracking. We do not guarantee delivery outcomes; responsibility remains with you and your logistics team. Service uptime is targeted at 99%, but we cannot guarantee uninterrupted service.</p>
        
        <h2 id="Responsibilities-of-Logistic-Journey">Responsibilities of Logistic Journey</h2>
        <ul>
          <li>Provide access to the platform and maintain system availability.</li>
          <li>Implement security measures to protect your data.</li>
          <li>Offer customer support for technical and account issues.</li>
        </ul>

        <h2 id="Responsibilities-of-the-User">Responsibilities of the User</h2>
        <ul>
          <li>Ensure your staff are trained to use Logistic Journey properly.</li>
          <li>Keep account credentials secure.</li>
          <li>Use the platform only for lawful logistics operations.</li>
        </ul>

        <h2 id="Technical-Requirements">Technical Requirements</h2>
        <ul>
          <li>Logistic Journey works best on the latest versions of Chrome, Edge, or Safari, and iOS/Android for mobile.</li>
          <li>You are responsible for ensuring devices and internet connections meet requirements.</li>
          <li>Jailbroken or rooted devices may cause the app to malfunction and are not supported.</li>
        </ul>
       
        <h2 id="Changes-to-These-Terms">Changes to These Terms</h2>
        <p>We may update these Terms of Service from time to time. Updates will be posted on our website. Continued use of the service after changes means you accept the revised Terms.</p>
        
        <h2 id="Governing-Law">Governing Law</h2>
        <p>We may update these Terms of Service from time to time. Updates will be posted on our website. Continued use of the service after changes means you accept the revised Terms.</p>
        

        <h2 id="contact-us">Contact Us</h2>
        <p>Questions about these Terms? Reach us at: <a class="text-blue-500" href="mailto:support@logisticjourney.com">support@logisticjourney.com</a></p>
        
      </main>

      <!-- <aside class="policy-toc mlg:fixed mlg:z-50 right-[50px] xl:right-[160px]" aria-label="Table of contents">
        <nav>
          <ul>
            <li><a href="#overview">Logistic overview</a></li>
            <li><a href="#General-Terms">Information We Collect</a></li>
            <li><a href="#Rights-to-suspend-or-terminate">Rights to suspend or terminate</a></li>
            <li><a href="#Your-Conduct">Your Conduct</a></li>
            <li><a href="#Membership-&-Accounts">Membership & Accounts</a></li>
            <li><a href="#Sharing-Your-Content-and-Information">Sharing Your Content and Information</a></li>
            <li><a href="#Subscription-&-Payments">Subscription & Payments</a></li>
            <li><a href="#Product-Use">Product Use</a></li>
            <li><a href="#Responsibilities-of-Logistic-Journey">Responsibilities of Logistic Journey</a></li>
            <li><a href="#Responsibilities-of-the-User">Responsibilities of the User</a></li>
            <li><a href="#Technical-Requirements">Technical Requirements</a></li>
            <li><a href="#Changes-to-These-Terms">Changes to These Terms</a></li>
            <li><a href="#Governing-Law">Governing Law</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
          </ul>
        </nav>
      </aside> -->
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

const termsContent = ref<PolicyData | null>(null)
const tocItems = ref<TocItem[]>([])

const renderedContent = computed(() => {
  return termsContent.value ? termsContent.value.content : '';
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
    const response = await getPolicyBySlug('terms-and-conditions')
    if (response && response.data) {
      termsContent.value = response.data
      const html = renderedContent.value
      generateToc(html)
    }
  } catch (error) {
    console.error('Failed to fetch policy:', error)
    // Fallback to static content
  }

  // Setup TOC functionality if we have content
  if (termsContent.value || tocItems.value.length > 0) {
    setupToc()
  }
})

const setupToc = () => {
let observer: IntersectionObserver | null = null
let footerObserver: IntersectionObserver | null = null

onMounted(() => {
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
})

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
  const tocLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.policy-toc a'))
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
.policy-main h1 {
  font-size: 22px;
  margin: 0 0 18px 0;
}
.policy-main a {
  font-weight: 300;
  color: #16181B;
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