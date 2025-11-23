// Top reads should NOT fetch from external API. Example: filter local posts data for top reads.
import { topReads } from "~/data/blog";

export default defineEventHandler(async (event) => {
  // Return local top reads data
  return {
    data: topReads,
  };
});
