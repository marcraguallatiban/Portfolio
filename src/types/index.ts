export interface NavLink {
  id: string
  label: string
}

export interface Skill {
  name: string
  icon: string
  category: SkillCategory
}

export type SkillCategory = 'Frontend' | 'Backend' | 'Database' | 'Languages' | 'Tools'

export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface PersonalInfo {
  name: string
  subtitle: string
  bio: string[]
  location: string
  email: string
  phone?: string
  resumeUrl?: string
}

export type Theme = 'light' | 'dark'
