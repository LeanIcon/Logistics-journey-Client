<template>
  <div class="">
    <div class="highest-width text-center space-y-6 py-20 mx-auto">
        <div class="text-center space-y-6 pb-8 mx-auto">
            <div class="bg-[#FEF5E7] flex space-x-1 p-3 rounded-full text-center justify-center max-w-32 mx-auto">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4001 4.62683C13.4001 4.98683 13.2068 5.3135 12.9001 5.48016L11.7401 6.10683L10.7534 6.6335L8.70676 7.74016C8.48676 7.86016 8.24676 7.92016 8.0001 7.92016C7.75343 7.92016 7.51343 7.86016 7.29343 7.74016L3.1001 5.48016C2.79343 5.3135 2.6001 4.98683 2.6001 4.62683C2.6001 4.26683 2.79343 3.94016 3.1001 3.7735L4.41343 3.06683L5.4601 2.50016L7.29343 1.5135C7.73343 1.2735 8.26676 1.2735 8.70676 1.5135L12.9001 3.7735C13.2068 3.94016 13.4001 4.26683 13.4001 4.62683Z" fill="#DF900A"/>
                    <path d="M6.5999 8.52676L2.6999 6.58009C2.3999 6.42676 2.05323 6.44676 1.76657 6.62009C1.4799 6.79343 1.31323 7.10009 1.31323 7.43343V11.1201C1.31323 11.7601 1.66657 12.3334 2.2399 12.6201L6.1399 14.5668C6.27323 14.6334 6.4199 14.6668 6.56657 14.6668C6.7399 14.6668 6.91323 14.6201 7.06657 14.5201C7.35323 14.3468 7.5199 14.0401 7.5199 13.7068V10.0201C7.52657 9.38676 7.17323 8.81343 6.5999 8.52676Z" fill="#DF900A"/>
                    <path d="M14.6867 7.43325V11.1199C14.6867 11.7533 14.3334 12.3266 13.7601 12.6133L9.86006 14.5666C9.72672 14.6333 9.58006 14.6666 9.43339 14.6666C9.26006 14.6666 9.08672 14.6199 8.92672 14.5199C8.64672 14.3466 8.47339 14.0399 8.47339 13.7066V10.0266C8.47339 9.38659 8.82672 8.81325 9.40006 8.52659L10.8334 7.81325L11.8334 7.31325L13.3001 6.57992C13.6001 6.42659 13.9467 6.43992 14.2334 6.61992C14.5134 6.79325 14.6867 7.09992 14.6867 7.43325Z" fill="#DF900A"/>
                    <path d="M11.74 6.10667L10.7533 6.63333L4.41333 3.06667L5.46 2.5L11.58 5.95333C11.6467 5.99333 11.7 6.04667 11.74 6.10667Z" fill="#DF900A"/>
                    <path d="M11.8333 7.31348V8.82681C11.8333 9.10014 11.6066 9.32681 11.3333 9.32681C11.0599 9.32681 10.8333 9.10014 10.8333 8.82681V7.81348L11.8333 7.31348Z" fill="#DF900A"/>
                </svg>
                <h6 class="text-[#DF900A]">Features</h6>
            </div>
            <h2>All the Tools You Need, in One Platform.</h2>
            <p class="max-w-lg mx-auto">
                Logistic Journey is designed to streamline logistics operations, enhance efficiency, and provide real-time visibility into fleet movements.
            </p> 
        </div>  
        <div class="order-1 md:order-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            <div v-for="tool in toolList" :key="tool.id" class="">
                <div class="text-white bg-[#1A46A7] px-4 py-6 flex flex-col h-full w-full rounded-lg">
                    <div class="">
                         <img :src="tool.icon" alt="Delivery Icon" class="w-12 h-12 mb-4" />
                    </div>
                    <h6 class="text-xl text-start font-semibold mb-4">{{ tool.title }}</h6>
                    <p class="grow text-start">{{ tool.description }}</p>                 
                </div>

            </div>
            <div class="bg-cover border border-[#225AD6] py-18 relative rounded-lg bg-[url('/images/Tools/features.jpg')]">
                <div class="rounded-lg absolute left-0 right-0 top-0 bottom-0 bg-[#102a63de]">
                </div>
                <div class="justify-center flex h-full items-center">
                    <div class="mx-auto relative z-10 text-center text-white">
                        <button class="solid-btn3 text-center flex space-x-2 mx-auto justify-center">
                            <span>More Features</span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 3V4H11.295L3 12.295L3.705 13L12 4.705V11H13V3H5Z" fill="#225AD6"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div> 
        
    </div>
  </div>
</template>

<script lang="ts" setup>
    import { ref, onMounted } from 'vue';
    import { tools } from '~/data/tools';

    const toolList = ref<{ id: number; icon: string; title: string; description: string }[]>([]);
    onMounted(() => {
        toolList.value = tools.map(tool => ({
            id: tool.id,
            icon: tool.icon,
            title: tool.title,
            description: tool.description,
        }));
    });
</script>

<style>

</style>