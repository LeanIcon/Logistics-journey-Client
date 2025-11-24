<template>
 <div class="highest-width text-center space-y-6 py-20 mx-auto overflow-x-hidden" ref="sectionRef">
        <motion.div class="text-center space-y-6 pb-8 mx-auto overflow-y-hidden"
            :initial="{ y: 100, opacity: 0 }"
            :animate="inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }"
            :transition="{ duration: 0.8 }"
        >
            <div class="bg-[#FEF5E7] flex space-x-1 p-3 rounded-full text-center justify-cente items-center max-w-24 mx-auto">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4001 4.62683C13.4001 4.98683 13.2068 5.3135 12.9001 5.48016L11.7401 6.10683L10.7534 6.6335L8.70676 7.74016C8.48676 7.86016 8.24676 7.92016 8.0001 7.92016C7.75343 7.92016 7.51343 7.86016 7.29343 7.74016L3.1001 5.48016C2.79343 5.3135 2.6001 4.98683 2.6001 4.62683C2.6001 4.26683 2.79343 3.94016 3.1001 3.7735L4.41343 3.06683L5.4601 2.50016L7.29343 1.5135C7.73343 1.2735 8.26676 1.2735 8.70676 1.5135L12.9001 3.7735C13.2068 3.94016 13.4001 4.26683 13.4001 4.62683Z" fill="#DF900A"/>
                    <path d="M6.5999 8.52676L2.6999 6.58009C2.3999 6.42676 2.05323 6.44676 1.76657 6.62009C1.4799 6.79343 1.31323 7.10009 1.31323 7.43343V11.1201C1.31323 11.7601 1.66657 12.3334 2.2399 12.6201L6.1399 14.5668C6.27323 14.6334 6.4199 14.6668 6.56657 14.6668C6.7399 14.6668 6.91323 14.6201 7.06657 14.5201C7.35323 14.3468 7.5199 14.0401 7.5199 13.7068V10.0201C7.52657 9.38676 7.17323 8.81343 6.5999 8.52676Z" fill="#DF900A"/>
                    <path d="M14.6867 7.43325V11.1199C14.6867 11.7533 14.3334 12.3266 13.7601 12.6133L9.86006 14.5666C9.72672 14.6333 9.58006 14.6666 9.43339 14.6666C9.26006 14.6666 9.08672 14.6199 8.92672 14.5199C8.64672 14.3466 8.47339 14.0399 8.47339 13.7066V10.0266C8.47339 9.38659 8.82672 8.81325 9.40006 8.52659L10.8334 7.81325L11.8334 7.31325L13.3001 6.57992C13.6001 6.42659 13.9467 6.43992 14.2334 6.61992C14.5134 6.79325 14.6867 7.09992 14.6867 7.43325Z" fill="#DF900A"/>
                    <path d="M11.74 6.10667L10.7533 6.63333L4.41333 3.06667L5.46 2.5L11.58 5.95333C11.6467 5.99333 11.7 6.04667 11.74 6.10667Z" fill="#DF900A"/>
                    <path d="M11.8333 7.31348V8.82681C11.8333 9.10014 11.6066 9.32681 11.3333 9.32681C11.0599 9.32681 10.8333 9.10014 10.8333 8.82681V7.81348L11.8333 7.31348Z" fill="#DF900A"/>
                </svg>
                <span class="text-[15px] font-normal" style="color: #DF900A;">Pricing</span>
            </div>
            <h2>Pricing Plan</h2>
            <p class="max-w-lg mx-auto">
                Simple, transparent pricing for your fleet management needs.
            </p>    
        </motion.div> 

        <!-- Pricing Cards -->
         <section class="grid md:grid-cols-2 gap-16 sm:gap-8 justify-between items-center">
            <motion.div class="space-y-6"
                :initial="{ x: -100, opacity: 0 }"
                :animate="inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }"
                :transition="{ duration: 0.8 }"
            >
                <div
                    v-for="(step,) in steps"
                    class=""
                >
                    <div class="text-start">
                        <div class="flex space-x-4 pb-3 items-center">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.8 9.25317C26.8 9.97317 26.4133 10.6265 25.8 10.9598L23.48 12.2132L21.5066 13.2665L17.4133 15.4798C16.9733 15.7198 16.4933 15.8398 16 15.8398C15.5066 15.8398 15.0266 15.7198 14.5866 15.4798L6.19995 10.9598C5.58662 10.6265 5.19995 9.97317 5.19995 9.25317C5.19995 8.53317 5.58662 7.87984 6.19995 7.5465L8.82662 6.13317L10.92 4.99984L14.5866 3.0265C15.4666 2.5465 16.5333 2.5465 17.4133 3.0265L25.8 7.5465C26.4133 7.87984 26.8 8.53317 26.8 9.25317Z" fill="#225AD6"/>
                            <path d="M13.2 17.0535L5.40004 13.1602C4.80004 12.8535 4.10671 12.8935 3.53338 13.2402C2.96004 13.5869 2.62671 14.2002 2.62671 14.8669V22.2402C2.62671 23.5202 3.33338 24.6669 4.48004 25.2402L12.28 29.1335C12.5467 29.2669 12.84 29.3335 13.1334 29.3335C13.48 29.3335 13.8267 29.2402 14.1334 29.0402C14.7067 28.6935 15.04 28.0802 15.04 27.4135V20.0402C15.0534 18.7735 14.3467 17.6269 13.2 17.0535Z" fill="#225AD6"/>
                            <path d="M29.3734 14.8665V22.2398C29.3734 23.5065 28.6668 24.6532 27.5201 25.2265L19.7201 29.1332C19.4534 29.2665 19.1601 29.3332 18.8668 29.3332C18.5201 29.3332 18.1734 29.2398 17.8534 29.0398C17.2934 28.6932 16.9468 28.0798 16.9468 27.4132V20.0532C16.9468 18.7732 17.6534 17.6265 18.8001 17.0532L21.6668 15.6265L23.6668 14.6265L26.6001 13.1598C27.2001 12.8532 27.8934 12.8798 28.4668 13.2398C29.0268 13.5865 29.3734 14.1998 29.3734 14.8665Z" fill="#225AD6"/>
                            <path d="M23.48 12.2133L21.5067 13.2667L8.82666 6.13333L10.92 5L23.16 11.9067C23.2933 11.9867 23.4 12.0933 23.48 12.2133Z" fill="#225AD6"/>
                            <path d="M23.6667 14.6265V17.6531C23.6667 18.1998 23.2134 18.6531 22.6667 18.6531C22.1201 18.6531 21.6667 18.1998 21.6667 17.6531V15.6265L23.6667 14.6265Z" fill="#225AD6"/>
                            </svg>

                            <h6>{{ step.title }}</h6>
                        </div>

                        <div class="ml-12">
                            <p>{{ step.description }}</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <!-- component -->
            <motion.div
                class="relative border border-black bg-clip-border rounded-xl p-8"
                    :initial="{ x: 100, opacity: 0 }"
                    :animate="inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }"
                    :transition="{ duration: 0.8 }"
                >
                <div
                    class="relative pb-4 m-0 flex items-center justify-between space-x-8 mb-8 border-black overflow-hidden text-center border-b rounded-none shadow-none bg-clip-border">
                    <div class="text-start">
                         <p class="pb-2 font-bold text-black">
                          Basic plan
                         </p>
                        <span class="font-light text-[15px] text-black">Perfect for logistics teams </span>
                    </div>
                   
                    <div class="flex antialiased items-end">
                        <h1 class="text-5xl">R129</h1> <p class="text-5xl text-[#000000b7] font-semibold">/</p> <p class="-ml-1 text-2xl text-black font-semibold">mo</p>
                    </div>
                </div>

                <p class="text-black text-start pb-6">Includes:</p>

                <div class="border-b border-black pb-8 text-start">
                    <ul class="grid md:grid-cols-2 gap-4">
                        <li class="flex items-center gap-2">
                            <span class="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4"
                                    stroke="currentColor" class="w-3 h-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                </svg>
                            </span>
                            <p class="block text-base antialiased font-normal leading-relaxed text-inherit">
                               Unlimited Journey Creation
                            </p>
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4"
                                    stroke="currentColor" class="w-3 h-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                </svg>
                            </span>
                            <p class="block text-base antialiased font-normal leading-relaxed text-inherit">
                                Unlimited Dispatchers
                            </p>
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4"
                                    stroke="currentColor" class="w-3 h-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                </svg>
                            </span>
                            <p class="block text-base antialiased font-normal leading-relaxed text-inherit">
                               Unlimited Driver Allocation
                            </p>
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4"
                                    stroke="currentColor" class="w-3 h-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                </svg>
                            </span>
                            <p class="block text-base antialiased font-normal leading-relaxed text-inherit">
                                Unlimited Order Creation
                            </p>
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4"
                                    stroke="currentColor" class="w-3 h-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                </svg>
                            </span>
                            <p class="block text-base antialiased font-normal leading-relaxed text-inherit">
                               Business Analytics
                            </p>
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4"
                                    stroke="currentColor" class="w-3 h-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                </svg>
                            </span>
                            <p class="block text-base antialiased font-normal leading-relaxed text-inherit">
                               Reports
                            </p>
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4"
                                    stroke="currentColor" class="w-3 h-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                </svg>
                            </span>
                            <p class="block text-base antialiased font-normal leading-relaxed text-inherit">
                              Multi-Tier Organisation Structure
                            </p>
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4"
                                    stroke="currentColor" class="w-3 h-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                </svg>
                            </span>
                            <p class="block text-base antialiased font-normal leading-relaxed text-inherit">
                               Free Organisation Setup (Companies & Drivers)
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="p-0 mt-8">
                    <button
                        class="solid-btn w-full"
                        type="button">
                        Get Started
                    </button>
                </div>
            </motion.div>
         </section>
  </div>
</template>

<script setup>
    import { ref } from "vue";
    import { motion } from "motion-v";
    import { useInView } from '~/composables/useInView'
    const { inView, sectionRef } = useInView(0.2)

    const currentStep = ref(0);

    const steps = [
    {
        title: "Simple, Transparent Pricing",
        description: "No hidden fees or complicated tiers. Pay a flat rate per vehicle per month and unlock all the tools you need to manage your fleet.",
    },
    {
        title: "Scalable for Any Fleet Size",
        description: "Whether you run a small delivery team or a nationwide fleet, our flexible pricing grows with you—without additional overhead.",
    },
    {
        title: "Built for Efficiency & Growth",
        description: "No hidden fees or complicated tiers. Pay a flat rate per vehicle per month and unlock all the tools you need to manage your fleet.",
    },
  ];
</script>

<style>
     p {
        color: #343A40;
    }
</style>