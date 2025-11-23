<template>
  <div class="mb-8 p-4 bg-white rounded-lg shadow flex flex-col gap-2">
    <div class="text-gray-700 italic">
      "<span v-html="decodeHtml(testimonial)"></span>"
    </div>
    <div class="text-sm text-gray-500 mt-2">- {{ author }}</div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  testimonial: { type: String, default: "" },
  author: { type: String, default: "" },
});

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
