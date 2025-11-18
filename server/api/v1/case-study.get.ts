// API handler for GET /api/v1/case-study (kept for compatibility)
// This proxy uses the new case-studies endpoint internally.
import { fetchCaseStudiesList } from "~/api/caseStudies";

export default defineEventHandler(async () => {
  try {
    return await fetchCaseStudiesList();
  } catch (error) {
    console.error("Error fetching case studies:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch case studies from external API",
    });
  }
});
