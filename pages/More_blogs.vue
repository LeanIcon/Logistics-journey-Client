<template>
  <div class="bg-white">
    <div class="container mx-auto px-4 py-6 sm:py-8 max-w-7xl">
      <!-- Breadcrumb Navigation -->
      <div class="flex items-center gap-2 text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
        <NuxtLink to="/" class="hover:text-blue-600">Blog</NuxtLink>
        <span class="opacity-60">›</span>
        <span class="text-blue-600">Top 5 Tips to Optimize Your Fleet</span>
      </div>

      <!-- Blog Title -->
      <h2 class="text-md sm:text-4xl md:text-5xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8">
        Top 5 Tips to Optimize Your Fleet
      </h2>

      <!-- Author Info -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-10">
        <img
          src="/images/Blog/Avatar.png"
          alt="John Germain"
          class="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0"
        />

        <div class="flex flex-wrap items-center gap-2 text-gray-600 text-sm sm:text-base">
          <span class="font-medium">John Germain</span>
          <span class="hidden sm:inline">•</span>
          <span>24 January, 2024</span>
          <span class="hidden sm:inline">•</span>
          <span>2 min read</span>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <section class="bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-3 md:px-2 lg:px-0 pb-12 space-y-8">
        <!-- Lead Image -->
        <img src="/images/Blog/Space.png" alt="Automation" class="w-full h-auto rounded-lg shadow-sm object-cover" />

        <!-- Lead paragraph -->
        <p class="text-gray-700 text-base sm:text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris
          duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque. Sit turpis pretium eget
          maecenas. Vestibulum dolor mattis consectetur eget commodo vitae.
        </p>

        <!-- Sections List -->
        <div class="space-y-6">
          <article>
            <h3 class="text-lg sm:text-xl md:text-2xl font-medium mb-3">1. AI Driven Financial Tools</h3>
            <p class="text-gray-700 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque. Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae.</p>
          </article>

          <article>
            <h3 class="text-lg sm:text-xl md:text-2xl font-medium mb-3">2. Automated Investment Strategies</h3>
            <p class="text-gray-700 leading-relaxed">Discover cutting-edge algorithms that optimize your investment portfolio based on real-time market data and trends. These strategies are designed to minimize risk while maximizing returns, leveraging machine learning to adapt to changing conditions.</p>
          </article>

          <article>
            <h3 class="text-lg sm:text-xl md:text-2xl font-medium mb-3">3. Personalized Budgeting Solutions</h3>
            <p class="text-gray-700 leading-relaxed">Utilize tools that analyze spending habits and provide tailored budgeting recommendations. These solutions aim to enhance financial literacy and empower users to achieve their financial goals through actionable insights and tracking features.</p>

            <!-- Inline image -->
            <div class="mt-4">
              <img src="/images/Blog/Automation.png" alt="Warehouse" class="w-full rounded-lg shadow-sm object-cover" />
            </div>
          </article>

          <article>
            <h3 class="text-lg sm:text-xl md:text-2xl font-medium mb-3">4. Automated Savings Plans</h3>
            <p class="text-gray-700 leading-relaxed">Implement systems that automatically transfer funds into savings accounts based on user-defined goals. This feature promotes consistent saving habits and helps users quickly build an emergency fund or save for specific purchases without needing to think about it.</p>
          </article>

          <article>
            <h3 class="text-lg sm:text-xl md:text-2xl font-medium mb-3">5. Investment Tracking Tools</h3>
            <ul class="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>Keep your login details private.</li>
              <li>If you suspect unauthorized use of your account, notify us immediately.</li>
              <li>We’re not liable for damages resulting from stolen or misused credentials.</li>
            </ul>

            <p class="text-gray-700 leading-relaxed mt-4">Offer platforms that allow users to monitor their investment portfolios in real-time. These tools provide analytics on performance, diversification, and risk assessment, helping users make informed decisions and optimize their investment strategies.</p>
          </article>
        </div>
      </div>
      <div class="block sm:hidden">
        <home-start />
      </div>
      <div class="hidden sm:block">
        <home-blogs />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
img { display: block; }
</style>