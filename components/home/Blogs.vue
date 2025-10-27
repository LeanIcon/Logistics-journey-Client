<template>
 <div class="highest-width text-center space-y-6 py-20 mx-auto">
        <div class="text-center space-y-6 pb-8 mx-auto">
            <div class="bg-[#FEF5E7] flex space-x-1 p-3 rounded-full text-center justify-center max-w-24 mx-auto">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4001 4.62683C13.4001 4.98683 13.2068 5.3135 12.9001 5.48016L11.7401 6.10683L10.7534 6.6335L8.70676 7.74016C8.48676 7.86016 8.24676 7.92016 8.0001 7.92016C7.75343 7.92016 7.51343 7.86016 7.29343 7.74016L3.1001 5.48016C2.79343 5.3135 2.6001 4.98683 2.6001 4.62683C2.6001 4.26683 2.79343 3.94016 3.1001 3.7735L4.41343 3.06683L5.4601 2.50016L7.29343 1.5135C7.73343 1.2735 8.26676 1.2735 8.70676 1.5135L12.9001 3.7735C13.2068 3.94016 13.4001 4.26683 13.4001 4.62683Z" fill="#DF900A"/>
                    <path d="M6.5999 8.52676L2.6999 6.58009C2.3999 6.42676 2.05323 6.44676 1.76657 6.62009C1.4799 6.79343 1.31323 7.10009 1.31323 7.43343V11.1201C1.31323 11.7601 1.66657 12.3334 2.2399 12.6201L6.1399 14.5668C6.27323 14.6334 6.4199 14.6668 6.56657 14.6668C6.7399 14.6668 6.91323 14.6201 7.06657 14.5201C7.35323 14.3468 7.5199 14.0401 7.5199 13.7068V10.0201C7.52657 9.38676 7.17323 8.81343 6.5999 8.52676Z" fill="#DF900A"/>
                    <path d="M14.6867 7.43325V11.1199C14.6867 11.7533 14.3334 12.3266 13.7601 12.6133L9.86006 14.5666C9.72672 14.6333 9.58006 14.6666 9.43339 14.6666C9.26006 14.6666 9.08672 14.6199 8.92672 14.5199C8.64672 14.3466 8.47339 14.0399 8.47339 13.7066V10.0266C8.47339 9.38659 8.82672 8.81325 9.40006 8.52659L10.8334 7.81325L11.8334 7.31325L13.3001 6.57992C13.6001 6.42659 13.9467 6.43992 14.2334 6.61992C14.5134 6.79325 14.6867 7.09992 14.6867 7.43325Z" fill="#DF900A"/>
                    <path d="M11.74 6.10667L10.7533 6.63333L4.41333 3.06667L5.46 2.5L11.58 5.95333C11.6467 5.99333 11.7 6.04667 11.74 6.10667Z" fill="#DF900A"/>
                    <path d="M11.8333 7.31348V8.82681C11.8333 9.10014 11.6066 9.32681 11.3333 9.32681C11.0599 9.32681 10.8333 9.10014 10.8333 8.82681V7.81348L11.8333 7.31348Z" fill="#DF900A"/>
                </svg>
                <span class="text-[15px]" style="color: #DF900A;">Blogs</span>
            </div>
            <h2>Insights & Updates</h2>
            <p class="max-w-lg mx-auto">
                Explore our latest articles on fleet optimization, logistics, and technology.
            </p>    
        </div> 

        <div class="grid sm:grid-cols-2 gap-8 items-stretch mx-auto max-w-5xl">
            <div v-for="blog in blogsList">
                <div class="bg-white flex flex-col h-full rounded-lg mb-6 tracking-wide" >
                    <div class="md:shrink-0">
                        <img :src="blog.image" alt="mountains" class="w-full h-64 rounded-lg object-cover">
                    </div>
                    <div class="flex justify-between px-4 items-center pt-3">
                        <span class="text-xs rounded-md p-1 bg-[#C2F0B2]">{{ blog.type }}</span>
                        <span class="text-xs text-start">{{blog.date}}</span>
                    </div>
                    <div class="px-4 py-2 mt-2">
                        <h6 class="font-bold text-start mb-2 text-xl tracking-normal">{{blog.title}}</h6>
                            <p class="text-sm text-start grow ">
                                {{blog.excerpt}}
                            </p>
                            <div class="flex items-center mt-3 space-x-2">
                                <a :href="blog.link" class="text-[#225AD6] text-xs ">Read More</a>
                                <a :href="blog.link" class="flex text-gray-700">
                                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.876953 0.5C0.977777 0.5 1.05475 0.530412 1.13281 0.608398L6.07715 5.55273C6.13104 5.60665 6.15622 5.64863 6.16797 5.67676V5.67773C6.18275 5.71329 6.19141 5.75306 6.19141 5.80176C6.19141 5.85046 6.18275 5.89022 6.16797 5.92578V5.92676C6.15621 5.95488 6.13103 5.99687 6.07715 6.05078L1.1084 11.0195C1.03063 11.0973 0.963489 11.1192 0.882812 11.1162C0.788784 11.1127 0.707921 11.0809 0.62207 10.9951C0.543947 10.917 0.512697 10.8402 0.512695 10.7393C0.512695 10.6384 0.543945 10.5615 0.62207 10.4834L5.30371 5.80176L0.59668 1.09473C0.519014 1.01703 0.497072 0.95072 0.5 0.870117C0.503448 0.77585 0.536015 0.694453 0.62207 0.608398C0.699995 0.530589 0.776363 0.500076 0.876953 0.5Z" fill="#225AD6" stroke="#225AD6"/>
                                    </svg>
                                </a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center mx-auto mt-4 col-span-2">
            <button
                class="solid-btn"
                type="button">
                See more blogs
            </button>
        </div>
  </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { blogPosts } from '~/data/blogs.js';

    const blogsList = ref<{ id: number; title: string; link: string; excerpt: string; image: string; date: string; type: string }[]>([]);
    onMounted(() => {
        blogsList.value = blogPosts.map(blog => ({
            id: blog.id,
            title: blog.title,
            link: blog.link,
            excerpt: blog.excerpt,
            image: blog.image,
            date: blog.date,
            type: blog.type,
    }));
});

</script>

<style>
    p {
        color: gray;
    }

    span {
        font-weight: 10;
         color: gray;
        }
    a {
        font-size: 14px;
    }
</style>