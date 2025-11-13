<template>
  <div class="bg-cover py-[2cm] block sm:hidden xs:py-[3cm] lg:py-[3cm] xl:py-[5cm] relative bg-[url('/images/ready.png')]">
    <div class="rounded-lg absolute left-0 right-0 top-0 bottom-0">
    </div>
    <div class="highest-width flex h-full items-center">
      <div class="relative space-y-6 text-center z-10">
        <h2>{{ data?.headline || 'Ready to Transform Your Deliveries?' }}</h2>
        <h3>{{ data?.description || 'Stop firefighting and start running logistics with confidence.' }}</h3>
        <div class="flex justify-center items-center mx-auto">
          <div class="flex gap-4">
            <NuxtLink :to="data?.buttons?.primary?.url || '/Request_demo'">
              <button class="solid-btn">{{ data?.buttons?.primary?.text || 'Book a Demo' }}</button>
            </NuxtLink>
            <NuxtLink :to="data?.buttons?.secondary?.url || '/contact'">
              <button class="text-[#225AD6]">
                {{ data?.buttons?.secondary?.text || 'Talk to Our Team' }}
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  data?: {
    headline: string
    description: string | null
    buttons: {
      primary: {
        text: string
        url: string
        style: string
      }
      secondary: {
        text: string
        url: string
        style: string
      }
    }
    image?: {
      path: string
      url: string
      alt: string
    }
  }
}>()
</script>

<style></style>

