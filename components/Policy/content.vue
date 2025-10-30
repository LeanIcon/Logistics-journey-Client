<template>
  <div class="policy-wrap">
    <div class="policy-container">
      <main class="policy-main">
        <h2 id="background">Background</h2>

        <p class="lead">Logistic Journey is committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, and protect information when you use our website, applications, and services.</p>

        <h2 id="information-we-collect">Information We Collect</h2>

        <p>We may collect the following types of information:</p>

        <h3>a. Information You Provide Directly</h3>
        <ul>
          <li>Name, email address, phone number, and company details when you create an account, request a demo, or contact us.</li>
          <li>Billing and payment information when you purchase a subscription.</li>
          <li>Any other information you provide voluntarily through forms, surveys, or communication.</li>
        </ul>

        <h3>b. Information Collected Automatically</h3>
        <ul>
          <li>IP address, browser type, device type, and operating system.</li>
          <li>Usage data such as pages visited, time spent on site, and navigation patterns.</li>
          <li>Cookies and tracking technologies for analytics and personalization.</li>
        </ul>

        <h3>c. Information From Third Parties</h3>
        <ul>
          <li>Data from integrations (e.g., payment processors, CRM tools).</li>
          <li>Publicly available information related to your business or logistics operations.</li>
        </ul>

        <h2 id="how-we-use-your-information">How We Use Your Information</h2>
        <p>We use the information collected to:</p>
        <ul>
          <li>Provide, operate, and improve our services.</li>
          <li>Process payments and manage subscriptions.</li>
          <li>Respond to inquiries and provide customer support.</li>
          <li>Send important updates, service notifications, and promotional offers (you can opt out anytime).</li>
          <li>Analyze usage trends to enhance performance and user experience.</li>
          <li>Ensure security, fraud prevention, and compliance with legal obligations.</li>
        </ul>

        <h2 id="sharing-of-information">Sharing of Information</h2>
        <p>We do not sell your personal information.</p>
        <p>We may share information only with:</p>
        <ul>
          <li><strong>Service Providers:</strong> Third parties that help us operate (hosting, analytics, payments).</li>
          <li><strong>Business Partners:</strong> If you opt into integrations or third-party services.</li>
          <li><strong>Legal Authorities:</strong> If required by law, regulation, or legal process.</li>
          <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets.</li>
        </ul>

        <h2 id="data-security">Data Security</h2>
        <p>We use industry-standard measures to protect your data, including:</p>
        <ul>
          <li>Secure Sockets Layer (SSL) encryption.</li>
          <li>Firewalls and access controls.</li>
          <li>Regular security audits.</li>
        </ul>
        <p>However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.</p>

        <h2 id="data-retention">Data Retention</h2>
        <p>We retain personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.</p>

        <h2 id="your-rights">Data Security</h2>
        <p>Depending on your location, you may have the following rights:</p>
        <ul>
          <li>Access, correct, or delete your personal information.</li>
          <li>Opt-out of marketing communications.</li>
          <li>Restrict or object to certain types of processing.</li>
          <li>Request data portability.</li>
          <li>Withdraw consent (where applicable).</li>
        </ul>
        <p>To exercise these rights, contact us at <a href="mailto:support@logisticjourney.com">support@logisticjourney.com</a>.</p>

        <h2 id="cookies">Cookies &amp; Tracking Technologies</h2>
        <p>We use cookies to:</p>
        <ul>
          <li>Enable essential functionality.</li>
          <li>Understand usage patterns and improve services.</li>
          <li>Deliver relevant content and promotions.</li>
        </ul>
        <p>You can manage cookie preferences through your browser settings.</p>

        <h2 id="contact-us">Contact Us</h2>
        <p>If you have questions about this Privacy Policy or our data practices, please contact us at:</p>
        <address class="contact-info">
          Logistic Journey<br>
          The Workshop, Unit 7<br>
          70 Seventh Avenue<br>
          Parktown North, Johannesburg<br>
          Gauteng, South Africa<br>
          Email: <a href="mailto:support@logisticjourney.com">support@logisticjourney.com</a><br>
          Phone: +27 11 568 7109
        </address>
      </main>

      <aside class="policy-toc" aria-label="Table of contents">
        <nav>
          <ul>
            <li><a href="#background">Background</a></li>
            <li><a href="#information-we-collect">Information We Collect</a></li>
            <li><a href="#how-we-use-your-information">How We Use Your Information</a></li>
            <li><a href="#sharing-of-information">Sharing of Information</a></li>
            <li><a href="#data-security">Data Security</a></li>
            <li><a href="#data-retention">Data Retention</a></li>
            <li><a href="#your-rights">Data Security</a></li>
            <li><a href="#cookies">Cookies &amp; Tracking Technologies</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
          </ul>
        </nav>
      </aside>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount } from 'vue'

let observer: IntersectionObserver | null = null

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
  // remove click listeners by cloning nodes (simple cleanup)
  const tocLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.policy-toc a'))
  tocLinks.forEach(link => {
    const clone = link.cloneNode(true) as HTMLElement
    link.parentNode && link.parentNode.replaceChild(clone, link)
  })
})
</script>

<style scoped>
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  color: #111827;
}
.policy-main h1 {
  font-size: 22px;
  margin: 0 0 18px 0;
}
.policy-main h2 {
  font-size: 30px;
  font-weight: 400;
  margin-top: 28px;
  margin-bottom: 12px;
}
.policy-main h3 {
  font-size: 14px;
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
  color: #111827;
}
.policy-main ul { 
  margin-left: 20px;
}
.policy-main ul li { 
  margin-bottom: 8px;
}
.contact-info {
  margin-top: 8px;
  font-style: normal;
}
.policy-toc {
  position: relative;
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