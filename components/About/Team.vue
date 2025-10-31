<template>
  <section class="bg-[#F8FAFC] w-full py-20">
    <div class="highest-width mx-auto">
      <!-- Heading -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-[#23272A]">Introduce the Team</h2>
      </div>

      <!-- Team Members Grid -->
      <div class="flex flex-col md:flex-row justify-center items-center gap-8 max-w-3xl mx-auto">
        <!-- Team Member 1 -->
        <div class="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="relative">
            <div class="absolute inset-0 bg-[#E9EEFF] rounded-full scale-105 -z-10"></div>
            <img 
              src="/images/Team/Ellipse 84.png" 
              alt="Dr. Martin Mensah"
              class="w-48 h-48 rounded-full relative z-10 object-cover" 
            />
          </div>
          <h3 class="text-2xl font-bold text-[#23272A] mt-6 mb-2">Dr. Martin Mensah,</h3>
          <p class="text-lg text-primary">CEO, Africa Region</p>
        </div>

        <!-- Team Member 2 -->
        <div class="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="relative">
            <div class="absolute inset-0 bg-[#E9EEFF] rounded-full scale-105 -z-10"></div>
            <img 
              src="/images/Team/Ellipse.png" 
              alt="Mr Osei Cole"
              class="w-48 h-48 rounded-full relative z-10 object-cover" 
            />
          </div>
          <h3 class="text-2xl font-bold text-[#23272A] mt-6 mb-2">Mr Osei Cole</h3>
          <p class="text-lg text-primary">CEO, Africa Region</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// No script logic needed for static content
</script>

<style scoped>
.highest-width {
  max-width: 1200px;
}

.text-primary {
  color:#225AD6;
}
</style>

  

