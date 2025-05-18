import communitiesData from "@/data/collaborated-communities.json"

export type Community = {
  id: string
  name: string
  logoPath: string
  website: string
  description: string
}

/**
 * Get all collaborated communities
 */
export function getAllCommunities(): Community[] {
  try {
    // Ensure logoPath starts with a slash for consistency
    return (communitiesData.communities || []).map((community) => ({
      ...community,
      logoPath: community.logoPath.startsWith("/") ? community.logoPath : `/${community.logoPath}`,
    }))
  } catch (error) {
    console.error("Error loading communities data:", error)
    return []
  }
}

/**
 * Get a specific community by ID
 */
export function getCommunityById(id: string): Community | undefined {
  try {
    const community = communitiesData.communities.find((community) => community.id === id)
    if (community) {
      // Ensure logoPath starts with a slash for consistency
      return {
        ...community,
        logoPath: community.logoPath.startsWith("/") ? community.logoPath : `/${community.logoPath}`,
      }
    }
    return undefined
  } catch (error) {
    console.error(`Error finding community with ID ${id}:`, error)
    return undefined
  }
}
