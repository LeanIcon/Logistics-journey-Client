<template>
  <section class="bg-[#F8FAFC] sm:flex w-full py-20">
    <div class="highest-width  mx-auto">

      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight">{{ data?.headline || 'Introduce the Team' }}</h2>
      </div>

      <!-- Team Members Grid -->
      <div v-if="data?.members && data.members.length > 0" class="flex flex-col sm:flex-row justify-center items-center gap-8 max-w-3xl mx-auto">
        <div v-for="(member, index) in data.members" :key="member.name" class="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="relative">
            <div class="absolute inset-0 bg-[#E9EEFF] rounded-full scale-105 -z-10"></div>
            <img
              v-if="member.image?.path"
              :src="member.image.path"
              :alt="member.name"
              class="w-48 h-48 rounded-full relative z-10 object-cover"
            />
            <img
              v-else
              :src="['/images/Team/Ellipse 84.png', '/images/Team/Ellipse.png'][index % 2]"
              :alt="member.name"
              class="w-48 h-48 rounded-full relative z-10 object-cover"
            />
          </div>
          <h3 class="text-xl font-semibold text-[#23272A] mt-6 mb-2">{{ member.name }}</h3>
          <p class="text-lg text-primary">{{ member.title }}</p>
        </div>
      </div>
      <div v-else class="flex flex-col md:flex-row justify-center items-center gap-8 max-w-3xl mx-auto">
        <div class="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="relative">
            <div class="absolute inset-0 bg-[#E9EEFF] rounded-full scale-105 -z-10"></div>
            <img
              src="/images/Team/Ellipse 84.png"
              alt="Dr. Martin Mensah"
              class="w-48 h-48 rounded-full relative z-10 object-cover"
            />
          </div>
          <h3 class="text-xl font-semibold text-[#23272A] mt-6 mb-2">Dr. Martin Mensah</h3>
          <p class="text-lg text-primary">CEO, Africa Region</p>
        </div>
        <div class="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="relative">
            <div class="absolute inset-0 bg-[#E9EEFF] rounded-full scale-105 -z-10"></div>
            <img
              src="/images/Team/Ellipse.png"
              alt="Mr Osei Cole"
              class="w-48 h-48 rounded-full relative z-10 object-cover"
            />
          </div>
          <h3 class="text-xl font-semibold text-[#23272A] mt-6 mb-2">Mr Osei Cole</h3>
          <p class="text-lg text-primary">CEO, Africa Region</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  data?: {
    headline: string
    members: Array<{
      image?: {
        path: string
        url: string
      }
      name: string
      title: string
      link: string | null
    }>
  }
}>()
</script>

<style scoped>
.highest-width {
  max-width: 1200px;
}

.text-primary {
  color:#225AD6;
}
</style>

  

