import { createRouter, defineEventHandler } from "h3";

export default defineEventHandler(async (event) => {
  // Fetch categories from external API
  const response = await $fetch(
    "https://logisticjourney.onrender.com/api/v1/categories"
  );
  return response;
});
