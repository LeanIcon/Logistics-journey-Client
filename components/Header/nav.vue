<template>
  <div
    class="group highest-width relative flex flex-wrap items-center justify-between w-full bg-white pt-4 pb-3 border-b border-gray-300 shrink-0"
    :class="{ open: isOpen }"
  >
    <!-- Logo -->
    <div>
      <NuxtLink to="/">
        <img src="/public/Navbar/2/Logistics Journey Logo.png" alt="logo" />
      </NuxtLink>
    </div>

    <!-- Mobile Menu Button -->
    <div class="mlg:hidden">
      <button
        @click="toggleMenu"
        class="flex flex-col space-y-1 p-2 border-none"
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
      class="items-center justify-between hidden gap-6 lg:gap-12 text-black mlg:flex"
    >
      <NuxtLink class="nav-link" to="/" active-class="active">Home</NuxtLink>
      <NuxtLink class="nav-link" to="/features" active-class="active"
        >Features</NuxtLink
      >
      <div
        
        class="relative"
        @mouseenter="showResourcesDropdown = true"
        @mouseleave="showResourcesDropdown = false"
      >
        <div
          class="nav-link flex items-center gap-1"
          :class="{ active: isResourcesActive }"
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
        </div>
        <div
          v-show="showResourcesDropdown"
          class="absolute left-0 top-full mt-2 min-w-[160px] bg-white border border-gray-200 shadow-lg z-50"
        >
          <NuxtLink
            class="font-light block px-4 py-2 hover:bg-gray-100"
            to="/resources/blog"
            >Blog</NuxtLink
          >
          <!-- <NuxtLink
            class="font-light block px-4 py-2 hover:bg-gray-100"
            to="/resources/case-study"
            >Case Study</NuxtLink
          > -->
        </div>
      </div>
     
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
      class="absolute flex mlg:hidden transition-all duration-300 ease-in-out flex-col items-start z-50 shadow-main justify-center w-full gap-3 overflow-hidden bg-white max-h-0 group-[.open]:py-4 px-4 group-[.open]:max-h-[26cm] top-full"
    >
      <NuxtLink @click="isOpen = false" class="nav-link" to="/" active-class="active">Home</NuxtLink>
      <NuxtLink @click="isOpen = false" class="nav-link" to="/features" active-class="active"
        >Features</NuxtLink
      >
      <div class="relative w-full">
        <div
          @click.stop="toggleResourcesDropdown"
          class="nav-link text-left flex items-center gap-1 border-none bg-transparent"
          :class="{ active: isResourcesActive }"
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
        </div>
        <div v-show="showResourcesDropdown" class="pl-4 gap-1 relative z-50">
          <NuxtLink
            @click="isOpen = false"
            class="block px-4 font-light py-2 hover:bg-gray-100"
            to="/resources/blog"
            >Blog</NuxtLink
          >
          <!-- <NuxtLink
            class="block px-4 font-light py-2 hover:bg-gray-100"
            to="/resources/case-study"
            >Case Study</NuxtLink
          > -->
        </div>
      </div>
      <NuxtLink @click="isOpen = false" class="nav-link" to="/about-us" active-class="active"
        >About Us</NuxtLink
      >
      <NuxtLink @click="isOpen = false" class="nav-link" to="/contact" active-class="active"
        >Contact Us</NuxtLink
      >
       <a href="https://app.logisticjourney.com" target="_blank"
        ><button>Log In</button></a
      >
      <button class="solid-btn">Sign Up</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
const isOpen = ref(false);
const route = useRoute();
const showResourcesDropdown = ref(false);

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

// Close dropdown when clicking outside
const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement;
  if (!target.closest(".relative")) {
    showResourcesDropdown.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
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
</style>
