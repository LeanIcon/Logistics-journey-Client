// API handler for GET /api/v1/case-study
import { fetchCaseStudy } from "~/api/posts";

export default defineEventHandler(async () => {
  // Fetch case study data dynamically from external API using the same pattern as posts
  return await fetchCaseStudy();
});
