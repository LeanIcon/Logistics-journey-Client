<template>
  <div
    class="highest-width relative flex flex-wrap items-center justify-between w-full bg-white pt-4 pb-3 border-b border-gray-300 shrink-0"
    :class="{ open: isOpen }"
  >
    <!-- Logo -->
    <div>
      <NuxtLink to="/">
        <img
          src="/Navbar/2/Logistics Journey Logo.png"
          alt="logo"
          class="h-10"
        />
      </NuxtLink>
    </div>

    <!-- Mobile Menu Button -->
    <div class="mlg:hidden">
      <button
        @click="toggleMenu"
        class="flex flex-col space-y-1 p-2 border-none"
        :aria-expanded="isOpen"
        aria-label="Toggle menu"
      >
        <span
          class="block w-6 h-0.5 bg-black transition-transform duration-300"
          :class="{ 'rotate-45 translate-y-1.5': isOpen }"
        ></span>
        <span
          class="block w-6 h-0.5 bg-black transition-opacity duration-300"
          :class="{ 'opacity-0': isOpen }"
        ></span>
        <span
          class="block w-6 h-0.5 bg-black transition-transform duration-300"
          :class="{ '-rotate-45 -translate-y-1.5': isOpen }"
        ></span>
      </button>
    </div>

    <!-- Desktop Menu -->
    <div
      ref="desktopMenuRef"
      class="items-center justify-between hidden gap-6 lg:gap-12 text-black mlg:flex"
    >
      <NuxtLink class="nav-link" to="/" active-class="active">Home</NuxtLink>
      <NuxtLink class="nav-link" to="/features" active-class="active"
        >Features</NuxtLink
      >
      <div
        v-if="route.path.startsWith('/resources')"
        ref="resourcesDesktopRef"
        class="relative"
        @mouseenter="showResourcesDropdown = true"
        @mouseleave="showResourcesDropdown = false"
      >
        <NuxtLink
          class="nav-link flex items-center gap-1"
          to="/resources"
          :class="{ active: isResourcesActive }"
          aria-haspopup="true"
          :aria-expanded="showResourcesDropdown"
        >
          Resources
          <svg
            class="w-4 h-4 transition-transform duration-200"
            :class="{ 'rotate-180': showResourcesDropdown }"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </NuxtLink>
        <div
          v-show="showResourcesDropdown"
          class="absolute left-0 top-full mt-2 min-w-[160px] bg-white border border-gray-200 shadow-lg z-50"
        >
          <NuxtLink
            class="block px-4 py-2 hover:bg-gray-100"
            to="/resources/blog"
            >Blog</NuxtLink
          >
          <NuxtLink
            class="block px-4 py-2 hover:bg-gray-100"
            to="/resources/case-study"
            >Case Study</NuxtLink
          >
        </div>
      </div>
      <template v-else>
        <NuxtLink class="nav-link" to="/resources" active-class="active"
          >Resources</NuxtLink
        >
      </template>
      <NuxtLink class="nav-link" to="/about-us" active-class="active"
        >About Us</NuxtLink
      >
      <NuxtLink class="nav-link" to="/contact" active-class="active"
        >Contact Us</NuxtLink
      >
    </div>

    <!-- Right Buttons -->
    <div class="items-center hidden gap-4 mlg:flex">
      <a href="https://app.logisticjourney.com" target="_blank"
        ><button>Log In</button></a
      >
      <button class="solid-btn">Get Started Now</button>
    </div>

    <!-- Mobile Dropdown -->
    <div
      ref="mobileMenuRef"
      class="absolute flex mlg:hidden transition-all duration-300 ease-in-out flex-col items-start z-50 shadow-main justify-center w-full gap-3 overflow-hidden bg-white px-4 top-full"
      :class="isOpen ? 'py-4 max-h-[60vh]' : 'py-0 max-h-0'"
      :aria-hidden="!isOpen"
    >
      <NuxtLink class="nav-link" to="/" active-class="active">Home</NuxtLink>
      <NuxtLink class="nav-link" to="/features" active-class="active"
        >Features</NuxtLink
      >
      <div class="relative w-full">
        <button
          @click="toggleResourcesDropdown"
          ref="resourcesMobileRef"
          class="nav-link w-full text-left flex items-center gap-1 border-none bg-transparent"
          :class="{ active: isResourcesActive }"
          aria-haspopup="true"
          :aria-expanded="showResourcesDropdown"
        >
          Resources
          <svg
            class="w-4 h-4 transition-transform duration-200"
            :class="{ 'rotate-180': showResourcesDropdown }"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <transition name="slide-down">
          <div v-show="showResourcesDropdown" class="pl-4 flex flex-col gap-1">
            <NuxtLink
              class="block px-4 py-2 hover:bg-gray-100"
              to="/resources/blog"
              >Blog</NuxtLink
            >
            <NuxtLink
              class="block px-4 py-2 hover:bg-gray-100"
              to="/resources/case-study"
              >Case Study</NuxtLink
            >
          </div>
        </transition>
      </div>
      <NuxtLink class="nav-link" to="/about-us" active-class="active"
        >About Us</NuxtLink
      >
      <NuxtLink class="nav-link" to="/contact" active-class="active"
        >Contact Us</NuxtLink
      >
      <button class="w-full text-left px-4 py-2">Log In</button>
      <button class="solid-btn w-full">Sign Up</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
const isOpen = ref(false);
const route = useRoute();
const showResourcesDropdown = ref(false);
const desktopMenuRef = ref<HTMLElement | null>(null);
const resourcesDesktopRef = ref<HTMLElement | null>(null);
const mobileMenuRef = ref<HTMLElement | null>(null);
const resourcesMobileRef = ref<HTMLElement | null>(null);

const isResourcesActive = computed(() => {
  // Active for /resources, /resources/blog, /resources/case-study, and /blog/[slug] (blog details)
  return route.path.startsWith("/resources") || route.path.startsWith("/blog/");
});

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const toggleResourcesDropdown = () => {
  showResourcesDropdown.value = !showResourcesDropdown.value;
};

// Close dropdowns/menus when clicking outside of nav
const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement;
  const clickedInsideDesktop =
    resourcesDesktopRef.value?.contains(target) ||
    desktopMenuRef.value?.contains(target);
  const clickedInsideMobile =
    resourcesMobileRef.value?.contains(target) ||
    mobileMenuRef.value?.contains(target);

  // If clicked outside desktop resources, close desktop dropdown
  if (!clickedInsideDesktop) {
    showResourcesDropdown.value = false;
  }

  // If clicked outside mobile menu, close mobile menu
  if (!clickedInsideMobile) {
    isOpen.value = false;
    // also close resources dropdown on mobile
    showResourcesDropdown.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

// Lock body scroll when mobile menu is open
watch(isOpen, (val) => {
  if (process.client) {
    document.body.style.overflow = val ? "hidden" : "";
  }
});
</script>

<style scoped>
/* Common link styling */
.nav-link {
  position: relative;
  padding-bottom: 30px;
  border-bottom: 2px solid transparent; /* ensures equal height for all */
  transition: all 0.3s ease;
  color: #374151; /* gray-700 */
  text-decoration: none;
  font-size: 1rem; /* text-base */
  font-weight: 400; /* font-normal */
}

/* Active state */
.nav-link.active {
  color: #3b82f6;
  border-bottom-color: #3b82f6;
}

/* Hover effect */
.nav-link:hover {
  color: #3b82f6;
}

/* Keep perfect alignment with bottom border */
.nav-link {
  margin-bottom: -26px; /* makes blue border sit exactly on gray line */
}

/* Hide border-bottom-color on smaller screens */
@media (max-width: 920px) {
  .nav-link.active {
    border-bottom-color: transparent;
  }
}

/* slide-down transition for mobile submenu */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: max-height 0.25s ease, opacity 0.2s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  max-height: 0;
  opacity: 0;
}
.slide-down-enter-to,
.slide-down-leave-from {
  max-height: 300px;
  opacity: 1;
}

.solid-btn {
  background-color: #2563eb; /* blue-600 */
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}
</style>
