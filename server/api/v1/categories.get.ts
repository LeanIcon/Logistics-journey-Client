import { createRouter, defineEventHandler } from "h3";

export default defineEventHandler(async (event) => {
  try {
    // Fetch categories from external API
    const response = await $fetch(
      "https://logisticjourney.onrender.com/api/v1/categories",
      {
        timeout: 10000, // 10 seconds timeout
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching categories:", error);
    // Return a fallback response or throw an error
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch categories from external API",
    });
  }
});
