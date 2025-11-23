import { createRouter, defineEventHandler, getQuery } from "h3";

export default defineEventHandler(async (event) => {
  try {
    // Fetch posts from external API
    const query = getQuery(event);
    const page = parseInt(query.page as string) || 1;
    const limit = parseInt(query.limit as string) || 10;
    const config = useRuntimeConfig();
    const response: any = await $fetch(
      `${config.public.apiBase}/api/v1/posts?page=${page}&limit=${limit}`,
      {
        timeout: 10000, // 10 seconds timeout
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching posts:", error);
    // Return a fallback response or throw an error
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch posts from external API",
    });
  }
});
