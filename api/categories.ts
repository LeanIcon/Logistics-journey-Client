export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  featured_image: {
    url: string;
    alt: string;
  };
}

export interface CategoriesResponse {
  data: Category[];
}

export const fetchCategories = async (): Promise<Category[]> => {
  const config = useRuntimeConfig();
  try {
    const base = String(config.public.apiBase || "").replace(/\/+$/g, "");
    const url = `${base}/api/v1/categories`;
    const res = await fetch(url);
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(
        `Failed to fetch categories: ${res.status} ${res.statusText} ${text}`
      );
    }
    const json = (await res.json()) as any;
    return (json && Array.isArray(json.data) ? json.data : []) as Category[];
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const fetchCategoryBySlug = async (
  slug: string
): Promise<Category | null> => {
  try {
    const categories = await fetchCategories();
    return categories.find((category) => category.slug === slug) || null;
  } catch (error) {
    console.error("Error fetching category by slug:", error);
    throw error;
  }
};
