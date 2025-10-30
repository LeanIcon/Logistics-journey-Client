<template>
  <div class="bg-[#E9EFFD] text-center space-y-6 py-20 mx-auto" style="color: white">
        <div class="highest-width text-center space-y-6 pb-8 mx-auto">
            <div class="bg-[#FEF5E7] flex space-x-1 p-3 rounded-full text-center justify-center max-w-32 mx-auto">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4001 4.62683C13.4001 4.98683 13.2068 5.3135 12.9001 5.48016L11.7401 6.10683L10.7534 6.6335L8.70676 7.74016C8.48676 7.86016 8.24676 7.92016 8.0001 7.92016C7.75343 7.92016 7.51343 7.86016 7.29343 7.74016L3.1001 5.48016C2.79343 5.3135 2.6001 4.98683 2.6001 4.62683C2.6001 4.26683 2.79343 3.94016 3.1001 3.7735L4.41343 3.06683L5.4601 2.50016L7.29343 1.5135C7.73343 1.2735 8.26676 1.2735 8.70676 1.5135L12.9001 3.7735C13.2068 3.94016 13.4001 4.26683 13.4001 4.62683Z" fill="#DF900A"/>
                    <path d="M6.5999 8.52676L2.6999 6.58009C2.3999 6.42676 2.05323 6.44676 1.76657 6.62009C1.4799 6.79343 1.31323 7.10009 1.31323 7.43343V11.1201C1.31323 11.7601 1.66657 12.3334 2.2399 12.6201L6.1399 14.5668C6.27323 14.6334 6.4199 14.6668 6.56657 14.6668C6.7399 14.6668 6.91323 14.6201 7.06657 14.5201C7.35323 14.3468 7.5199 14.0401 7.5199 13.7068V10.0201C7.52657 9.38676 7.17323 8.81343 6.5999 8.52676Z" fill="#DF900A"/>
                    <path d="M14.6867 7.43325V11.1199C14.6867 11.7533 14.3334 12.3266 13.7601 12.6133L9.86006 14.5666C9.72672 14.6333 9.58006 14.6666 9.43339 14.6666C9.26006 14.6666 9.08672 14.6199 8.92672 14.5199C8.64672 14.3466 8.47339 14.0399 8.47339 13.7066V10.0266C8.47339 9.38659 8.82672 8.81325 9.40006 8.52659L10.8334 7.81325L11.8334 7.31325L13.3001 6.57992C13.6001 6.42659 13.9467 6.43992 14.2334 6.61992C14.5134 6.79325 14.6867 7.09992 14.6867 7.43325Z" fill="#DF900A"/>
                    <path d="M11.74 6.10667L10.7533 6.63333L4.41333 3.06667L5.46 2.5L11.58 5.95333C11.6467 5.99333 11.7 6.04667 11.74 6.10667Z" fill="#DF900A"/>
                    <path d="M11.8333 7.31348V8.82681C11.8333 9.10014 11.6066 9.32681 11.3333 9.32681C11.0599 9.32681 10.8333 9.10014 10.8333 8.82681V7.81348L11.8333 7.31348Z" fill="#DF900A"/>
                </svg>
                <span class="text-[15px]" style="color: #DF900A;">Testimonials</span>
            </div>
            <h2 class="text-black">Real stories, real success</h2>
            <p class="max-w-lg mx-auto">
                Explore our latest articles on fleet optimization, logistics, and technology.
            </p>    
        </div> 

        <div class="px-4 sm:px-0">
            <div ref="carousel" class="flex gap-6 items-stretch overflow-hidden scroll-smooth" v-if="testimonialList.length > 0" role="list">
                <div v-for="(testimonial, index) in testimonialList" :key="testimonial.id" role="listitem" class="testimonial-card-container">
                    <div
                        class="shrink-0 flex flex-col h-full w-full py-4 border border-white px-6 rounded-xl transition-all duration-300"
                        :class="activeIndex === index ? 'min-w-[470px] bg-[#1E62D8] text-white rounded-3xl shadow-xl scale-100' : 'min-w-[360px] bg-white/50'">
                        <div :class="activeIndex === index ? 'text-white' : ''">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 22.5H9.165C9.44378 20.6435 10.1067 18.8656 11.1114 17.2797C12.1161 15.6939 13.4405 14.3351 15 13.29L17.685 11.49L16.035 9L13.35 10.8C11.0899 12.3061 9.23656 14.3468 7.9544 16.7411C6.67223 19.1353 6.00091 21.8091 6 24.525V34.5C6 35.2957 6.31607 36.0587 6.87868 36.6213C7.44129 37.1839 8.20435 37.5 9 37.5H18C18.7956 37.5 19.5587 37.1839 20.1213 36.6213C20.6839 36.0587 21 35.2957 21 34.5V25.5C21 24.7044 20.6839 23.9413 20.1213 23.3787C19.5587 22.8161 18.7956 22.5 18 22.5Z" fill="currentColor" :style="activeIndex === index ? 'opacity: 0.9' : 'fill: url(#paint0_linear_2095_3882)'"/>
                            <path d="M39 22.5H30.165C30.4438 20.6435 31.1067 18.8656 32.1114 17.2797C33.1161 15.6939 34.4405 14.3351 36 13.29L38.685 11.49L37.05 9L34.35 10.8C32.0899 12.3061 30.2366 14.3468 28.9544 16.7411C27.6722 19.1353 27.0009 21.8091 27 24.525V34.5C27 35.2957 27.3161 36.0587 27.8787 36.6213C28.4413 37.1839 29.2044 37.5 30 37.5H39C39.7957 37.5 40.5587 37.1839 41.1213 36.6213C41.6839 36.0587 42 35.2957 42 34.5V25.5C42 24.7044 41.6839 23.9413 41.1213 23.3787C40.5587 22.8161 39.7957 22.5 39 22.5Z" fill="currentColor" :style="activeIndex === index ? 'opacity: 0.9' : 'fill: url(#paint1_linear_2095_3882)'"/>
                            <defs>
                            <linearGradient id="paint0_linear_2095_3882" x1="24" y1="9" x2="24" y2="37.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#494A50"/>
                            <stop offset="1"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_2095_3882" x1="24" y1="9" x2="24" y2="37.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#494A50"/>
                            <stop offset="1"/>
                            </linearGradient>
                            </defs>
                            </svg>
                            <p class="grow mt-2 text-start" :style="activeIndex === index ? 'color: white' : ''" :class="activeIndex !== index ? 'text-gray-600' : ''">{{ testimonial.feedback }}</p>
                        </div>
                        <div class="flex items-center space-x-4 mt-4" :class="activeIndex === index ? 'text-white' : ''">
                            <div>
                            <img class="w-15 h-15 object-cover rounded-full border-2" :class="activeIndex === index ? 'border-white' : 'border-indigo-500'" :src="testimonial.image">
                            </div>
                            <div>
                                <h6 class="text-start text-lg font-semibold" :class="activeIndex !== index ? 'text-gray-800' : ''">{{ testimonial.name }}</h6>
                                <span class="text-start text-xs opacity-80" :style="activeIndex === index ? 'color: white' : ''" style="font-size: 12px;" :class="activeIndex !== index ? 'text-gray-600' : ''">{{ testimonial.title }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- line tabs / indicators -->
            <div class="mt-8 flex justify-center items-center">
                <div class="flex items-center" role="tablist" aria-label="Testimonials navigation">
                    <button
                        v-for="(t, i) in testimonialList"
                        :key="i"
                        @click="scrollToCard(i)"
                        :aria-selected="activeIndex === i"
                        role="tab"
                        class="mx-3 focus:outline-none"
                        :class="activeIndex === i ? 'indicator-active' : 'indicator'" style="border:none; padding:3px;">
                        <span class="block rounded-full transition-all duration-300"></span>
                    </button>
                </div>
            </div>
        </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { testimonials } from '~/data/testimonials';

const testimonialList = ref<{ id: number; name: string; title: string; image: string; feedback: string }[]>([]);

// carousel refs & state
const carousel = ref<HTMLElement | null>(null);
const cards = ref<HTMLElement[]>([]);
const activeIndex = ref(0);

const scrollToCard = (index: number) => {
    if (!carousel.value) return;
    const el = cards.value[index];
    if (!el) return;
    // smooth scroll so the card moves to center
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    activeIndex.value = index;
};

function handleScroll() {
    if (!carousel.value || cards.value.length === 0) return;
    const containerRect = carousel.value.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;
    let closest = 0;
    let minDist = Infinity;
    cards.value.forEach((cardEl, idx) => {
        const rect = cardEl.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const dist = Math.abs(cardCenter - centerX);
        if (dist < minDist) {
            minDist = dist;
            closest = idx;
        }
    });
    activeIndex.value = closest;
}

onMounted(() => {
    testimonialList.value = testimonials.map((testimonial) => ({
        id: testimonial.id,
        name: testimonial.name,
        title: testimonial.title,
        image: testimonial.image,
        feedback: testimonial.feedback,
    }));

    // wait for DOM
    nextTick(() => {
        if (carousel.value) {
            // container .testimonial-card-container > div is the actual card
            cards.value = Array.from(carousel.value.querySelectorAll('.testimonial-card-container > div')) as HTMLElement[];
            carousel.value.addEventListener('scroll', handleScroll, { passive: true });
            // set initial active index
            handleScroll();
        }
    });
});

onUnmounted(() => {
    if (carousel.value) carousel.value.removeEventListener('scroll', handleScroll);
});
</script>
<style scoped>
.indicator span{ width:64px; height:6px; background: #BBCFF9; transition: all .25s ease; }
.indicator-active span{ width:64px; height:6px; background: #0a2e6c; }

/* responsive tweaks */
@media (max-width: 640px) {
    .indicator span, .indicator-active span { width:40px; height:6px; }
}
</style>