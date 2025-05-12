import boardMembersData from "@/content/board-members.json"

export type BoardMember = {
  id: string
  name: string
  position: string
  image: string
  order: number
}

export type BoardYear = {
  id: string
  label: string
}

/**
 * Get all available board years
 */
export function getBoardYears(): BoardYear[] {
  return boardMembersData.years
}

/**
 * Get board members for a specific year
 * @param year - The year ID to get board members for
 */
export function getBoardMembersByYear(year: string): BoardMember[] {
  const members = boardMembersData.boards[year as keyof typeof boardMembersData.boards] || []
  return members.sort((a, b) => a.order - b.order)
}

/**
 * Get the current/latest board year
 */
export function getCurrentBoardYear(): string {
  return boardMembersData.years[0]?.id || ""
}

/**
 * Check if a year exists in the data
 * @param year - The year ID to check
 */
export function isBoardYearValid(year: string): boolean {
  return Object.keys(boardMembersData.boards).includes(year)
}
