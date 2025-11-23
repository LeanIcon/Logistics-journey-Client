import { createRouter, defineEventHandler, getRouterParam } from "h3";

export default defineEventHandler(async (event) => {
  try {
    const categorySlug = getRouterParam(event, "category_slug");

    // Fetch posts by category from external API
    const config = useRuntimeConfig();
    const response: any = await $fetch(
      `${config.public.apiBase}/api/v1/categories/${categorySlug}/posts`,
      {
        timeout: 10000, // 10 seconds timeout
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching posts by category:", error);
    // Return a fallback response or throw an error
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch posts by category from external API",
    });
  }
});
