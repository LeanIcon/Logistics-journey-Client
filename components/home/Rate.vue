<template>
  <div
    class="bg-white rounded-xl shadow-[0_6px_25px_-10px_rgba(0,0,0,0.25)] flex items-center justify-between p-2 lg:p-3 w-full max-w-[375px] xl:max-w-sm mx-auto"
  >
    <!-- Date -->
    <div
      class="flex flex-col items-center justify-center bg-gray-100 rounded-lg px-3 py-2 text-center"
    >
      <span class="text-gray-900 font-light text-sm">Tue</span>
      <p class="text-black font-semibold leading-none">20</p>
    </div>

    <!-- Divider -->
    <div class="flex-1 grid grid-cols-3 divide-x divide-gray-200 text-center">
      <!-- Orders -->
      <div class="px-2">
        <span class="text-[#31353a] font-light">Orders</span>
        <p class="text-black font-semibold text-sm">12 Packages</p>
      </div>

      <!-- Time Used -->
      <div class="px-2">
        <span class="text-[#31353a] font-light">Time Used</span>
        <p class="text-black font-semibold text-sm">56 min</p>
      </div>

      <!-- Success Rate -->
      <div class="px-2">
        <span class="text-[#31353a] font-light">Success Rate</span>
        <p class="text-green-600 font-semibold text-sm" style="color: #24983F;">83%</p>
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
    span {
        font-size: 12px;
    }
    p {
        font-size: 14px;
        font-weight: bold;
        color: black;
    }
</style>