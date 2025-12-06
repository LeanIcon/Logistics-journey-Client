<template>
    <div class="the-width mx-auto overflow-hidden" ref="sectionRef">
        <div class="hidden md:flex gap-6 justify-between items-center pl-4 md:pl-6 lg:pl-16 py-20">
            <motion.div class="space-y-6 pb-8"
                :initial="{ x: -100, opacity: 0 }"
                :animate="inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }"
                :transition="{ duration: 0.8 }"
            >
                <h2 class="text-black">Logistics in Your Pocket</h2>
                <p class="">
                    Download the app for real-time updates, navigation, and seamless deliveries.
                </p>
                <div class="flex gap-6 max-w-[160px]">   
                    <img src="/public/images/logistics-playstore.png" alt="">  
                    <img src="/public/images/logistic=appstore.png" alt=""> 
                </div> 
            </motion.div> 
            <motion.div
                :initial="{ x: 100, opacity: 0 }"
                :animate="inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }"
                :transition="{ duration: 0.8 }" 
            >
                <img src="/public/images/mobile_app.png" alt="">
            </motion.div>
        </div>

        <div class="flex md:hidden overflow-hidden">
            <motion.div class="highest-width gap-6 justify-between items-center py-20 mx-auto"
                :initial="{ y: 100, opacity: 0 }"
                :animate="inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }"
                :transition="{ duration: 0.8 }"
            >
                <div class="space-y-6 pb-8">
                    <h2 class="text-black">Logistics in Your Pocket</h2>
                    <p class="">
                        Download the app for real-time updates, navigation, and seamless deliveries.
                    </p>           
                </div> 
                <div class="max-w-[80px] xss:max-w-[160px] flex gap-3 xss:gap-6">
                    <img src="/public/images/logistics-playstore.png" alt="">  
                    <img src="/public/images/logistic=appstore.png" alt=""> 
                </div> 
            </motion.div>
        </div>
    </div>    
</template>

<script lang="ts" setup>
    import { motion } from "motion-v";
    import { useInView } from '~/composables/useInView'
    
    const { inView, sectionRef } = useInView(0.2)
</script>

<style>
    .the-width {
  @apply max-w-[1500px];
}
</style>