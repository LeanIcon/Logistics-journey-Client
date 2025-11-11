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
    const response: CategoriesResponse = await $fetch(
      `${config.public.apiBase}/api/v1/categories`
    );
    return response.data;
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
