export interface CaseStudy {
  id: number;
  title: string;
  slug: string;
  featured_image: { url?: string | null; alt?: string | null } | null;
  client?: {
    name?: string;
    logo?: string | null;
    quote?: string | null;
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
    const res = await $fetch(
      `${config.public.apiBase}/api/v1/case-studies/featured`,
      {
        timeout: 10000,
      }
    );
    return unwrap(res) as CaseStudy | null;
  } catch (err) {
    console.error("fetchFeaturedCaseStudy error", err);
    throw err;
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
