import { createRouter, defineEventHandler, getRouterParam } from "h3";

export default defineEventHandler(async (event) => {
  const categorySlug = getRouterParam(event, "category_slug");

  // Mock posts data based on category - replace with your actual data source
  const mockPosts = {
    technology: [
      {
        id: 1,
        title: "The Future of Cloud Computing",
        slug: "future-of-cloud-computing",
        excerpt:
          "Exploring the latest trends in cloud technology and their impact on businesses worldwide.",
        type: "article",
        featured_image: {
          url: "/images/blog/Tech.png",
          alt: "Cloud computing illustration",
        },
        author: { id: 1, name: "John Doe" },
        published_at: "2025-11-01T10:00:00Z",
      },
      {
        id: 2,
        title: "5G Networks: Revolutionizing Connectivity",
        slug: "5g-networks-revolutionizing-connectivity",
        excerpt:
          "How 5G technology is transforming communication and enabling new possibilities.",
        type: "article",
        featured_image: {
          url: "/images/blog/Tech.png",
          alt: "5G network illustration",
        },
        author: { id: 2, name: "Jane Smith" },
        published_at: "2025-10-28T14:30:00Z",
      },
    ],
    ai: [
      {
        id: 3,
        title: "Machine Learning in Healthcare",
        slug: "machine-learning-in-healthcare",
        excerpt:
          "How AI is revolutionizing medical diagnosis and patient care.",
        type: "article",
        featured_image: {
          url: "/images/blog/Ai.jpg",
          alt: "AI in healthcare",
        },
        author: { id: 3, name: "Dr. Sarah Johnson" },
        published_at: "2025-11-02T09:15:00Z",
      },
    ],
    automation: [
      {
        id: 4,
        title: "Robotic Process Automation Success Stories",
        slug: "robotic-process-automation-success-stories",
        excerpt:
          "Real-world examples of how RPA is transforming business operations.",
        type: "article",
        featured_image: {
          url: "/images/blog/Automation.png",
          alt: "RPA automation",
        },
        author: { id: 4, name: "Mike Chen" },
        published_at: "2025-10-30T11:45:00Z",
      },
    ],
    blockchain: [
      {
        id: 5,
        title: "Blockchain Beyond Cryptocurrency",
        slug: "blockchain-beyond-cryptocurrency",
        excerpt:
          "Exploring blockchain applications in supply chain, healthcare, and finance.",
        type: "article",
        featured_image: {
          url: "/images/blog/bt.jpg",
          alt: "Blockchain technology",
        },
        author: { id: 5, name: "Alex Rivera" },
        published_at: "2025-10-25T16:20:00Z",
      },
    ],
  };

  const posts = mockPosts[categorySlug as keyof typeof mockPosts] || [];

  return {
    data: posts,
    meta: {
      current_page: 1,
      total: posts.length,
      per_page: 10,
    },
  };
});
