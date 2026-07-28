export interface Project {
  slug: string
  title: string
  description: string
  fullDescription?: string
  tech: string[]
  githubUrl?: string
  liveUrl?: string
  image: string
  gallery?: string[]
  featured?: boolean
}

export interface Skill {
  name: string
  category: "language" | "framework" | "tool" | "other"
  icon?: string
  proficiency?: "beginner" | "intermediate" | "advanced"
}

export interface Experience {
  id: string
  role: string
  organization: string
  startDate: string
  endDate?: string // omit or leave undefined for "Present"
  description: string
  tech?: string[]
}
