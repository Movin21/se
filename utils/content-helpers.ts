import blogPartnersData from "@/content/blog-partners-data.json"

export function getBlogPosts() {
  return blogPartnersData.blogPosts
}

export function getActivities() {
  return blogPartnersData.activities
}

export function getPartners() {
  return blogPartnersData.partners
}

export function getTopRowPartners() {
  return blogPartnersData.partners.topRow
}

export function getBottomRowPartners() {
  return blogPartnersData.partners.bottomRow
}

export function getAllPartnersList() {
  return [...blogPartnersData.partners.topRow, ...blogPartnersData.partners.bottomRow]
}

export function getBlogPostById(id: number) {
  return blogPartnersData.blogPosts.find((post) => post.id === id)
}

export function getActivityById(id: number) {
  return blogPartnersData.activities.find((activity) => activity.id === id)
}

export function getBlogPostsByTag(tag: string) {
  return blogPartnersData.blogPosts.filter((post) => post.tags.includes(tag))
}

export function getActivitiesByTag(tag: string) {
  return blogPartnersData.activities.filter((activity) => activity.tags.includes(tag))
}

export default blogPartnersData
