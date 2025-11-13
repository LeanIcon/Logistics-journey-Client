<template>
  <div>
    <!-- Pass data to each component as props -->
    <about-hero :data="getBlockData('Banner')" />
    <about-our-story :data="getBlockData('OurStory')" />
    <about-so-we-built :data="getBlockData('Features')" />
    <about-truth :data="getBlockData('Mission')" />
    <about-team :data="getBlockData('Team')" />
    <about-cta :data="getBlockData('Cta')" />
    <about-insight v-if="getBlockData('Insight')" :data="getBlockData('Insight')" />
    <about-ready :data="getBlockData('DualCta')" />
  </div>
</template>

<!-- 
  File: pages/about-us.vue
  This will be accessible at: /about-us
-->

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const { getAboutUsPage } = useApi()

interface Block {
  type: string
  data: any
}

interface AboutPageData {
  blocks: Block[]
  meta?: {
    title?: string
    description?: string
  }
}

const pageData = ref<AboutPageData | null>(null)

// Helper function to get block data by type
const getBlockData = (blockType: string) => {
  if (!pageData.value?.blocks) return null
  const block = pageData.value.blocks.find(b => b.type === blockType)
  return block?.data || null
}

onMounted(async () => {
  try {
    const response = await getAboutUsPage()
    pageData.value = response.data
  } catch (err) {
    console.error('Error fetching about page:', err)
  }
})

// SEO meta tags
useHead(() => ({
  title: pageData.value?.meta?.title || 'About Us',
  meta: [
    { name: 'description', content: pageData.value?.meta?.description || '' }
  ]
}))
</script>

<style scoped>
</style>

