<template>
  <div class="bg-[#102A63]">
    <div class="highest-width text-white text-center space-y-6 py-20 mx-auto">
        <div class="text-center space-y-6 pb-20 mx-auto">
            <h2>The Problem with Deliveries Today</h2>
            <p class="max-w-lg mx-auto">
                Without real-time visibility, your fleet becomes a silent money drain. 
                Here’s what it’s costing you today
            </p> 
        </div>  
        <div class="order-1 md:order-2 grid sm:grid-cols-3 items-stretch gap-8">
            <div v-for="solution in journey_solutions" :key="solution.id" class="">
                <div class="bg-[#1A46A7] px-4 py-6 rounded-lg flex flex-col h-full w-full">
                    <div class="">
                         <img :src="solution.icon" alt="Delivery Icon" class="w-12 h-12 mb-4" />
                    </div>
                    <h6 class="text-xl text-start font-semibold mb-4">{{ solution.title }}</h6>
                    <div class="flex items-center space-x-1">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M8 1C6.61553 1 5.26216 1.41054 4.11101 2.17971C2.95987 2.94888 2.06266 4.04213 1.53285 5.32122C1.00303 6.6003 0.86441 8.00776 1.13451 9.36563C1.4046 10.7235 2.07129 11.9708 3.05026 12.9497C4.02922 13.9287 5.2765 14.5954 6.63437 14.8655C7.99224 15.1356 9.3997 14.997 10.6788 14.4672C11.9579 13.9373 13.0511 13.0401 13.8203 11.889C14.5895 10.7378 15 9.38447 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1ZM7 10.7954L4.5 8.2954L5.2953 7.5L7 9.2046L10.705 5.5L11.5029 6.29295L7 10.7954Z" fill="white"/>
                        </svg>
                        <p class="grow text-start">{{ solution.description }}</p>
                    </div>
                 
                </div>
            </div>
        </div> 

    </div>
  </div>
</template>

<script lang="ts" setup>
    import { ref, onMounted } from 'vue';
    import { solutions } from '~/data/journey_solutions.js';

    const journey_solutions = ref<{ id: number; icon: string; title: string; description: string }[]>([]);
    onMounted(() => {
        journey_solutions.value = solutions.map(solution => ({
            id: solution.id,
            icon: solution.icon,
            title: solution.title,
            description: solution.description,
        }));
    });
</script>

<style>

</style>