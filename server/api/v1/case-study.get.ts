// API handler for GET /api/v1/case-study
import { fetchCaseStudy } from "~/api/posts";

export default defineEventHandler(async () => {
  try {
    // Fetch case study data dynamically from external API using the same pattern as posts
    return await fetchCaseStudy();
  } catch (error) {
    console.error("Error fetching case study:", error);
    // Return a fallback response or throw an error
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch case study from external API",
    });
  }
});
