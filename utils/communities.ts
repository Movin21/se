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
  return communitiesData.communities
}

/**
 * Get a specific community by ID
 */
export function getCommunityById(id: string): Community | undefined {
  return communitiesData.communities.find((community) => community.id === id)
}
