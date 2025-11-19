<template>
  <div class="mb-8">
    <h3 class="text-lg font-semibold mb-4">The Road Ahead</h3>
    <div class="text-gray-700" v-html="decodeHtml(roadAhead)"></div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{ roadAhead: string }>();

function decodeHtml(input?: string | null) {
  if (!input) return "";
  try {
    if (typeof document !== "undefined") {
      const t = document.createElement("textarea");
      t.innerHTML = input;
      return t.value;
    }
  } catch (e) {}
  return String(input)
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}
</script>
