<template>
  <div
    class="highest-width relative flex flex-wrap items-center justify-between w-full bg-white group pt-4 pb-3 border-b border-gray-300 shrink-0"
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
      <button @click="toggleMenu" class="flex flex-col space-y-1 p-2 border-none">
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
    <div class="items-center justify-between hidden gap-6 lg:gap-12 text-black mlg:flex">
      <NuxtLink class="nav-link" to="/" active-class="active">Home</NuxtLink>
      <NuxtLink class="nav-link" to="/features" active-class="active">Features</NuxtLink>
      <NuxtLink class="nav-link" to="/resources" active-class="active">Resources</NuxtLink>
      <NuxtLink class="nav-link" to="/about-us" active-class="active">About Us</NuxtLink>
      <NuxtLink class="nav-link" to="/contact" active-class="active">Contact Us</NuxtLink>
    </div>

    <!-- Right Buttons -->
    <div class="items-center hidden gap-4 mlg:flex">
      <a href="https://app.logisticjourney.com" target="_blank"><button>Log In</button></a>
      <button class="solid-btn">Get Started Now</button>
    </div>

    <!-- Mobile Dropdown -->
    <div
      class="absolute flex mlg:hidden transition-all duration-300 ease-in-out flex-col items-start z-50 shadow-main justify-center w-full gap-3 overflow-hidden bg-white max-h-0 group-[.open]:py-4 px-4 group-[.open]:max-h-[26cm] top-full"
    >
      <NuxtLink class="nav-link" to="/" active-class="active">Home</NuxtLink>
      <NuxtLink class="nav-link" to="/features" active-class="active">Features</NuxtLink>
      <NuxtLink class="nav-link" to="/resources" active-class="active">Resources</NuxtLink>
      <NuxtLink class="nav-link" to="/about-us" active-class="active">About Us</NuxtLink>
      <NuxtLink class="nav-link" to="/contact" active-class="active">Contact Us</NuxtLink>
      <button>Log In</button>
      <button class="solid-btn">Sign Up</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
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
