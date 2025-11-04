<template>
  <div
    class="highest-width relative flex flex-wrap items-center justify-between w-full bg-white group py-3 border-b border-gray-300 shrink-0"
    :class="{ open: isOpen }"
  >
    <div>
      <NuxtLink to="/"
        ><img
          class=""
          src="/public/Navbar/2/Logistics Journey Logo.png"
          alt="logo"
      /></NuxtLink>
    </div>

    <div
      class="items-center justify-between hidden gap-6 lg:gap-12 text-black mlg:flex"
    >
      <NuxtLink
        class="text-base font-normal hover:no-underline text-dark-grey-700 hover:text-[#3b82f6]"
        to="/"
        active-class="active"
        >Home</NuxtLink
      >
      <NuxtLink
        class="text-base font-normal hover:no-underline text-dark-grey-700 hover:text-[#3b82f6]"
        to="/features"
        active-class="active"
        >Features</NuxtLink
      >
      <div
        class="relative"
        @mouseenter="showDropdown = true"
        @mouseleave="showDropdown = false"
      >
        <NuxtLink
          class="flex items-center text-base font-normal hover:no-underline text-dark-grey-700 hover:text-[#3b82f6]"
          to="/resources"
          active-class="active"
          @click.prevent="showDropdown = !showDropdown"
        >
          Resources
          <svg
            class="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </NuxtLink>
        <div
          v-if="showDropdown"
          class="absolute left-0 bg-white shadow-lg border border-gray-200 rounded-md py-2 mt-1 w-48 z-50"
        >
          <NuxtLink
            to="/resources/blog"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >Blog</NuxtLink
          >
          <NuxtLink
            to="/resources/case-study"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >Case Studies</NuxtLink
          >
        </div>
      </div>

      <NuxtLink
        class="text-base font-normal hover:no-underline text-dark-grey-700 hover:text-[#3b82f6]"
        to="/about-us"
        active-class="active"
        >About Us</NuxtLink
      >
      <NuxtLink
        class="text-base font-normal hover:no-underline text-dark-grey-700 hover:text-[#3b82f6]"
        to="/contact"
        active-class="active"
        >Contact Us</NuxtLink
      >
    </div>
    <div class="items-center hidden gap-4 mlg:flex">
      <button class="">Log In</button>
      <button class="solid-btn">Get Started Now</button>
    </div>
    <div
      class="absolute flex mlg:hidden transition-all duration-300 ease-in-out flex-col items-start z-50 shadow-main justify-center w-full gap-3 overflow-hidden bg-white max-h-0 group-[.open]:py-4 px-4 group-[.open]:max-h-[26cm] top-full"
    >
      <NuxtLink
        class="text-base font-normal hover:no-underline text-dark-grey-700 hover:text-[#3b82f6]"
        to="/"
        active-class="active"
        >Home</NuxtLink
      >
      <NuxtLink
        class="text-base font-normal hover:no-underline text-dark-grey-700 hover:text-[#3b82f6]"
        to="/features"
        active-class="active"
        >Features</NuxtLink
      >
      <NuxtLink
        class="text-base font-normal hover:no-underline text-dark-grey-700 hover:text-[#3b82f6]"
        to="/resources"
        active-class="active"
        >Resources</NuxtLink
      >
      <NuxtLink
        class="text-base font-normal hover:no-underline text-dark-grey-700 hover:text-[#3b82f6]"
        to="/about-us"
        active-class="active"
        >About Us</NuxtLink
      >
      <NuxtLink
        class="text-base font-normal hover:no-underline text-dark-grey-700 hover:text-[#3b82f6]"
        to="/contact"
        active-class="active"
        >Contact Us</NuxtLink
      >
      <button class="">Log In</button>
      <button class="solid-btn">Sign Up</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const isOpen = ref(false);
const showDropdown = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.active {
  color: #3b82f6;
  border-bottom: 2px solid #3b82f6;
}

a {
  position: relative;
  padding-bottom: 10px;
}

a.active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -1px; /* aligns exactly with the existing border-b */
  width: 100%;
  height: 2px;
  background-color: #3b82f6; /* blue-500 */
}
</style>
