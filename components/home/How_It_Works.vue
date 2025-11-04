<template>
  <div class="highest-width text-center space-y-6 py-20 mx-auto">
    <div class="text-center space-y-6 pb-8 mx-auto">
      <div
        class="bg-[#FEF5E7] flex space-x-1 p-3 rounded-full text-center items-center justify-center max-w-36 mx-auto"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.4001 4.62683C13.4001 4.98683 13.2068 5.3135 12.9001 5.48016L11.7401 6.10683L10.7534 6.6335L8.70676 7.74016C8.48676 7.86016 8.24676 7.92016 8.0001 7.92016C7.75343 7.92016 7.51343 7.86016 7.29343 7.74016L3.1001 5.48016C2.79343 5.3135 2.6001 4.98683 2.6001 4.62683C2.6001 4.26683 2.79343 3.94016 3.1001 3.7735L4.41343 3.06683L5.4601 2.50016L7.29343 1.5135C7.73343 1.2735 8.26676 1.2735 8.70676 1.5135L12.9001 3.7735C13.2068 3.94016 13.4001 4.26683 13.4001 4.62683Z"
            fill="#DF900A"
          />
          <path
            d="M6.5999 8.52676L2.6999 6.58009C2.3999 6.42676 2.05323 6.44676 1.76657 6.62009C1.4799 6.79343 1.31323 7.10009 1.31323 7.43343V11.1201C1.31323 11.7601 1.66657 12.3334 2.2399 12.6201L6.1399 14.5668C6.27323 14.6334 6.4199 14.6668 6.56657 14.6668C6.7399 14.6668 6.91323 14.6201 7.06657 14.5201C7.35323 14.3468 7.5199 14.0401 7.5199 13.7068V10.0201C7.52657 9.38676 7.17323 8.81343 6.5999 8.52676Z"
            fill="#DF900A"
          />
          <path
            d="M14.6867 7.43325V11.1199C14.6867 11.7533 14.3334 12.3266 13.7601 12.6133L9.86006 14.5666C9.72672 14.6333 9.58006 14.6666 9.43339 14.6666C9.26006 14.6666 9.08672 14.6199 8.92672 14.5199C8.64672 14.3466 8.47339 14.0399 8.47339 13.7066V10.0266C8.47339 9.38659 8.82672 8.81325 9.40006 8.52659L10.8334 7.81325L11.8334 7.31325L13.3001 6.57992C13.6001 6.42659 13.9467 6.43992 14.2334 6.61992C14.5134 6.79325 14.6867 7.09992 14.6867 7.43325Z"
            fill="#DF900A"
          />
          <path
            d="M11.74 6.10667L10.7533 6.63333L4.41333 3.06667L5.46 2.5L11.58 5.95333C11.6467 5.99333 11.7 6.04667 11.74 6.10667Z"
            fill="#DF900A"
          />
          <path
            d="M11.8333 7.31348V8.82681C11.8333 9.10014 11.6066 9.32681 11.3333 9.32681C11.0599 9.32681 10.8333 9.10014 10.8333 8.82681V7.81348L11.8333 7.31348Z"
            fill="#DF900A"
          />
        </svg>
        <span class="text-[15px]" style="color: #df900a">How it works</span>
      </div>
      <h2>How To Get Started With Logistics Journey</h2>
      <p class="max-w-lg mx-auto">
        From setup to delivery, we make logistics simple, smart, and efficient.
        Get started in minutes and manage your entire operation with ease.
      </p>
    </div>

    <!-- Steps -->
    <div
      class="flex flex-col max-w-5xl mx-auto md:flex-row items-stretch justify-center gap-8 p-8 min-h-[400px]"
    >
      <!-- Left Steps -->
      <div
        class="flex flex-col justify-center w-full md:w-1/2 bg-white space-y-6 relative"
      >
        <!-- vertical track -->
        <div class="absolute left-3 top-0 bottom-0 w-px bg-gray-200"></div>
        <!-- active progress: single segment highlighted based on currentStep -->
        <div
          class="absolute left-3 w-px bg-blue- transition-all duration-300"
          :style="{ top: progressTop, height: segmentHeight }"
        ></div>
        <div
          v-for="(step, index) in steps"
          :key="index"
          @click="handleStepClick(index)"
          class="flex items-start gap-3 cursor-pointer transition-all"
        >
          <!-- marker column: circle sits above the track (z-10) -->
          <div class="flex flex-col items-center">
            <div
              class="w-6 h-6 rounded-full flex items-center justify-center border shrink-0 relative z-10"
              :class="{
                'bg-blue-600 text-white border-blue-600': currentStep === index,
                'bg-[#E9EFFD] text-[#225AD6] border-gray-300':
                  currentStep !== index,
              }"
            >
              {{ index + 1 }}
            </div>
            <!-- small spacer to keep consistent spacing between markers (the main track is absolute) -->
            <div v-if="index !== steps.length - 1" class="h-6"></div>
          </div>

          <div>
            <h3
              class="text-start"
              :class="
                currentStep === index
                  ? 'text-black font-semibold'
                  : 'font-medium text-[#6B7280]'
              "
            >
              {{ step.title }}
            </h3>
            <p
              v-if="currentStep === index"
              class="text-sm text-gray-500 transition-opacity text-start duration-300"
            >
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Right Image -->
      <div
        class="w-full md:w-1/2 flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden"
      >
        <img
          :src="steps[currentStep].image"
          alt="Step image"
          class="w-full h-full object-cover transition-all duration-500"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const currentStep = ref(0);
let intervalId = null;

// Function to handle auto-switching
const startAutoSwitch = () => {
  // Clear any existing interval
  if (intervalId) clearInterval(intervalId);

  // Set new interval
  intervalId = setInterval(() => {
    currentStep.value = (currentStep.value + 1) % steps.length;
  }, 2000);
};

// Handle manual click
const handleStepClick = (index) => {
  currentStep.value = index;
  // Reset the timer when user clicks
  startAutoSwitch();
};

// Start auto-switching when component mounts
onMounted(() => {
  startAutoSwitch();
});

// Clean up interval when component unmounts
onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});

const steps = [
  {
    title: "Contact",
    description: "Send us an email to show your interest.",
    image: "/images/Steps/Contact.png",
  },
  {
    title: "Access",
    description: "Get login credentials to access your account.",
    image: "/images/Steps/step2.png",
  },
  {
    title: "Setup",
    description: "We’ll help you configure everything properly.",
    image: "/images/Steps/step3.png",
  },
  {
    title: "Orders",
    description: "Easily place and manage your orders online.",
    image: "/images/Steps/step4.png",
  },
  {
    title: "Delivery",
    description: "We’ll handle delivery right to your doorstep.",
    image: "/images/Steps/step5.png",
  },
];

// compute top and height (percentages) so we highlight only one segment at a time
const progressTop = computed(() => {
  if (steps.length <= 1) return "0%";
  const ratio = currentStep.value / (steps.length - 1);
  return `${ratio * 100}%`;
});

const segmentHeight = computed(() => {
  if (steps.length <= 1) return "0%";
  const frac = 1 / (steps.length - 1);
  return `${frac * 100}%`;
});
</script>

<style></style>
