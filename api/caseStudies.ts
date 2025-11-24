export interface CaseStudy {
  id: number;
  title: string;
  slug: string;
  featured_image: { url?: string | null; alt?: string | null } | null;
  banner: string;
  client?: {
    name?: string;
    logo?: string | null;
    quote?: string | null;
    avatar?: string;
    quote_author?: string | null;
    quote_author_title?: string | null;
  };
  content?: any;
  sidebar?: any;
  meta?: any;
}

/**
 * Helper to normalize responses that may be wrapped in { data: ... }
 */
const unwrap = (res: any) => {
  if (!res) return null;
  if (res.data !== undefined) return res.data;
  return res;
};

// Helper: attempt $fetch with retries and backoff
async function fetchWithRetries(
  url: string,
  options: any = {},
  retries = 2,
  timeout = 10000
) {
  let attempt = 0;
  let lastErr: any = null;
  while (attempt <= retries) {
    try {
      // ensure timeout is set
      const opts = Object.assign({}, options, { timeout });
      const res = await $fetch(url, opts);
      return res;
    } catch (err) {
      lastErr = err;
      attempt++;
      // small backoff
      const backoff = 200 * attempt;
      await new Promise((r) => setTimeout(r, backoff));
    }
  }
  throw lastErr;
}

export const fetchCaseStudiesList = async (): Promise<CaseStudy[]> => {
  const config = useRuntimeConfig();
  try {
    const res = await $fetch(`${config.public.apiBase}/api/v1/case-studies`, {
      timeout: 10000,
    });
    return unwrap(res) as CaseStudy[];
  } catch (err) {
    console.error("fetchCaseStudiesList error", err);
    throw err;
  }
};

export const fetchFeaturedCaseStudy = async (): Promise<CaseStudy | null> => {
  const config = useRuntimeConfig();
  try {
    const base = String(config.public.apiBase || "").replace(/\/+$/g, "");
    const url = `${base}/api/v1/case-studies/featured`;
    try {
      const res = await fetchWithRetries(url, {}, 2, 10000);
      return unwrap(res) as CaseStudy | null;
    } catch (err) {
      // Log detailed info for debugging but return null so callers can handle missing featured case study gracefully
      console.warn("fetchFeaturedCaseStudy timed out or failed after retries", {
        url,
        err,
      });
      return null;
    }
  } catch (err) {
    console.error("fetchFeaturedCaseStudy error", err);
    // Return null as fallback
    return null;
  }
};

export const fetchCaseStudyBySlug = async (
  slug: string
): Promise<CaseStudy | null> => {
  const config = useRuntimeConfig();
  try {
    const res = await $fetch(
      `${config.public.apiBase}/api/v1/case-studies/${slug}`,
      {
        timeout: 10000,
      }
    );
    return unwrap(res) as CaseStudy | null;
  } catch (err) {
    console.error("fetchCaseStudyBySlug error", err);
    throw err;
  }
};
