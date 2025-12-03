<template>
    <div class="py-20 lg:py-36 w-full items-center justify-center bg-gray-200 bg-cover bg-no-repeat":style="{
        backgroundImage: `url(${DualCtaData?.image.url || '/images/transform.png'})`
        }">
        <div class="h">
            <div class="highest-width h-full relative">
                <div class="relative space-y-6 z-10">
                    <h2 class="text-center sm:text-start">{{ DualCtaData?.headline || "Ready to Transform Your Deliveries?"}}</h2>
                    <div class="flex gap-4 justify-center sm:justify-start mx-auto">
                        <NuxtLink to="/Request_demo"><button class="solid-btn">{{ DualCtaData?.buttons.primary.text || "Book a Demo" }}</button></NuxtLink>
                        <NuxtLink to="/contact">
                            <button class="text-[#225AD6]">
                            {{ DualCtaData?.buttons.secondary.text || "Talk to Our Team" }}
                            </button>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useApi } from '~/composables/useApi'
import { motion } from "motion-v"
import { ref, onMounted } from 'vue'

const { getPagesBySlug } = useApi()

const DualCtaData = ref<any>(null)

onMounted(async () => {
  try {
    const response = await getPagesBySlug('home')
    const blocks = response?.data?.blocks || []
    const DualCtaBlock = blocks.find((b: any) => b.type === 'DualCta')

    if (DualCtaBlock && DualCtaBlock.data) {
      DualCtaData.value = DualCtaBlock.data
    }
  } catch (error) {
    console.error('Failed to load DualCta section:', error)
  }
})
</script>

<style>

</style>