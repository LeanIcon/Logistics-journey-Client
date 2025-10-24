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
                    <NuxtLink class="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="/">Home</NuxtLink>
                    <NuxtLink class="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" to="/features">Features</NuxtLink>
                    <NuxtLink class="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" to="/resources">Resources</NuxtLink>
                    <NuxtLink class="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" to="/about-us">About Us</NuxtLink>
                    <NuxtLink class="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" to="/contact">Contact Us</NuxtLink>
                </div>
                <div class="items-center hidden gap-4 lg:flex">
                    <button class="">Log In</button>
                    <button class="solid-btn">
                        Get Started Now
                    </button>
                </div>
                <div class="absolute flex lg:hidden transition-all duration-300 ease-in-out flex-col items-start shadow-main justify-center w-full gap-3 overflow-hidden bg-white max-h-0 group-[.open]:py-4 px-4 rounded-2xl group-[.open]:max-h-64 top-full">
                    <a class="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="javascript:void(0)">Product</a>
                    <a class="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="javascript:void(0)">Features</a>
                    <a class="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="javascript:void(0)">Pricing</a>
                    <a class="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="javascript:void(0)">Company</a>
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

<style>

</style>