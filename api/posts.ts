export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  type: string;
  featured_image: {
    url: string;
    alt: string;
  };
  author: {
    id: number;
    name: string;
    avatar?: string;
    bio?: string;
  };
  categories: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
  published_at: string;
  reading_time?: string;
  body?: string;
  meta?: {
    description: string;
    keywords: string;
  };
}

export interface PostsResponse {
  data: Post[];
  meta: {
    current_page: number;
    total: number;
    per_page: number;
  };
}

export const fetchPostsByCategory = async (
  categorySlug: string,
  page: number = 1
): Promise<PostsResponse> => {
  const config = useRuntimeConfig();
  try {
    const response: PostsResponse = await $fetch(
      `${config.public.apiBase}/api/v1/categories/${categorySlug}/posts?page=${page}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching posts by category:", error);
    throw error;
  }
};

export const fetchAllPosts = async (
  page: number = 1
): Promise<PostsResponse> => {
  const config = useRuntimeConfig();
  try {
    const response: PostsResponse = await $fetch(
      `${config.public.apiBase}/api/v1/posts?page=${page}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching all posts:", error);
    throw error;
  }
};

export const fetchTopReads = async (): Promise<Post[]> => {
  try {
    // Assuming top reads are the latest posts or a specific endpoint
    const response: PostsResponse = await fetchAllPosts(1);
    return response.data.slice(0, 3); // Return first 3 posts as top reads
  } catch (error) {
    console.error("Error fetching top reads:", error);
    throw error;
  }
};

export const fetchPostBySlug = async (slug: string): Promise<Post> => {
  const config = useRuntimeConfig();
  try {
    const response: Post = await $fetch(
      `${config.public.apiBase}/api/v1/posts/${slug}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    throw error;
  }
};

export const fetchCaseStudy = async (): Promise<Post> => {
  // Fetch all posts and find the one with slug "case-study"
  const response = await fetchAllPosts(1);
  const caseStudyPost = response.data.find(
    (post) => post.slug === "case-study"
  );

  if (!caseStudyPost) {
    throw new Error("Case study post not found");
  }

  return caseStudyPost;
};
