<template>
    <div class="highest-width relative flex flex-wrap items-center justify-between w-full bg-white group py-3 border-b border-gray-300 shrink-0" :class="{ open: isOpen }">
                <div>
                    <img class="h-" src="/public/Navbar/2/Logistics Journey Logo.png" alt="logo">
                </div>
                <div class="lg:hidden">
                    <button @click="toggleMenu" class="flex flex-col space-y-1 p-2 border-none">
                        <span class="block w-6 h-0.5 bg-black transition-transform duration-300" :class="{ 'rotate-45 translate-y-1.5': isOpen }"></span>
                        <span class="block w-6 h-0.5 bg-black transition-opacity duration-300" :class="{ 'opacity-0': isOpen }"></span>
                        <span class="block w-6 h-0.5 bg-black transition-transform duration-300" :class="{ '-rotate-45 -translate-y-1.5': isOpen }"></span>
                    </button>
                </div>
                <div class="items-center justify-between hidden gap-12 text-black lg:flex">
                    <NuxtLink class="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" to="/" active-class="active">Home</NuxtLink>
                    <NuxtLink class="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" to="/features" active-class="active">Features</NuxtLink>
                    <NuxtLink class="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" to="/resources" active-class="active">Resources</NuxtLink>
                    <NuxtLink class="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" to="/about-us" active-class="active">About Us</NuxtLink>
                    <NuxtLink class="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" to="/contact" active-class="active">Contact Us</NuxtLink>
                </div>
                <div class="items-center hidden gap-4 lg:flex">
                    <button class="">Log In</button>
                    <button class="solid-btn">
                        Get Started Now
                    </button>
                </div>
                <div class="absolute flex lg:hidden transition-all duration-300 ease-in-out flex-col items-start z-30 shadow-main justify-center w-full gap-3 overflow-hidden bg-white max-h-0 group-[.open]:py-4 px-4 rounded-2xl group-[.open]:max-h-80 top-full">
                    <NuxtLink class="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" to="/" active-class="active">Home</NuxtLink>
                    <NuxtLink class="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" to="/features" active-class="active">Features</NuxtLink>
                    <NuxtLink class="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" to="/resources" active-class="active">Resources</NuxtLink>
                    <NuxtLink class="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" to="/about-us" active-class="active">About Us</NuxtLink>
                    <NuxtLink class="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" to="/contact" active-class="active">Contact Us</NuxtLink>
                    <button class="">Log In</button>
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
.active {
  border-bottom: 2px solid #3b82f6;
}

a {
  position: relative;
  padding-bottom: 10px; /* adjust if needed to match navbar height */
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
