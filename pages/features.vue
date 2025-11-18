﻿﻿﻿<template>
  <div>
    <!-- Pass data to each component as props -->
    <feature-hero :data="getBlockData('Hero')" />
    <feature-dashboard :data="getBlockData('Dashboard')" />
    <feature-journey :data="getBlockData('Journey')" />
    <FeatureCTA :data="getBlockData('Delivery')" />
    <feature-drivers :data="getBlockData('DriverApp')" />
    <home-faqs />
    <home-transform />
  </div>
</template>

<script setup lang="ts">


const { getFeaturesPage } = useApi()

interface Block {
  type: string
  data: any
}

interface FeaturesPageData {
  blocks: Block[]
  meta?: {
    title?: string
    description?: string
  }
}

const pageData = ref<FeaturesPageData | null>(null)

// Helper function to get block data by type
const getBlockData = (blockType: string) => {
  if (!pageData.value?.blocks) return null
  const block = pageData.value.blocks.find(b => b.type === blockType)
  return block?.data || null
}

onMounted(async () => {
  try {
    const response = await getFeaturesPage()
    pageData.value = response.data
  } catch (err) {
    console.error('Error fetching features page:', err)
  }
})

// SEO meta tags
// useHead(() => ({
//   title: pageData.value?.meta?.title || 'Features',
//   meta: [
//     { name: 'description', content: pageData.value?.meta?.description || '' }
//   ]
// }))
</script>

<style scoped>
</style>