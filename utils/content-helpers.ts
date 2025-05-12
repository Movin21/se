import blogData from "@/content/blog-partners-data.json"

/**
 * Get all blog posts
 */
export function getBlogPosts() {
  return blogData.posts || []
}

/**
 * Get a specific blog post by ID
 */
export function getBlogPostById(id: string) {
  return blogData.posts?.find((post) => post.id === id) || null
}

/**
 * Get all partners
 */
export function getPartners() {
  return blogData.partners || []
}

/**
 * Get a specific partner by ID
 */
export function getPartnerById(id: string) {
  return blogData.partners?.find((partner) => partner.id === id) || null
}
