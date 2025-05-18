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
    // Return the communities data directly, paths are already relative in the JSON
    return communitiesData.communities || []
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
    return communitiesData.communities.find((community) => community.id === id)
  } catch (error) {
    console.error(`Error finding community with ID ${id}:`, error)
    return undefined
  }
}
