// =====================================
// PROJECTS DATA
// =====================================
// Edit the projects array below to
// showcase your own work.
//
// image: Add images to src/assets/images/
//   and import them at the top of this file.
//   Replace the placeholder path below.
// =====================================

import projectPlaceholder from '../assets/images/project-placeholder.svg'

export interface ProjectData {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
}

export const projects: ProjectData[] = [
  {
    id: 'project-1',
    // ---------- CHANGE PROJECT TITLE ----------
    title: 'E-Commerce Platform',
    // ---------- CHANGE PROJECT DESCRIPTION ----------
    description:
      'A full-featured e-commerce web application built with React and Node.js. Includes product browsing, cart management, user authentication, and payment integration.',
    // ---------- CHANGE PROJECT IMAGE ----------
    // Replace with: import myImage from '../assets/images/my-project.jpg'
    image: projectPlaceholder,
    // ---------- CHANGE TECHNOLOGIES ----------
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    // ---------- CHANGE PROJECT LINKS ----------
    githubUrl: 'https://github.com/marclatiban/ecommerce',
    liveUrl: 'https://ecommerce-demo.vercel.app',
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description:
      'A Kanban-style task management application with drag-and-drop functionality, real-time collaboration, and progress tracking features.',
    image: projectPlaceholder,
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/marclatiban/taskmanager',
    liveUrl: 'https://taskmanager-demo.vercel.app',
  },
  {
    id: 'project-3',
    title: 'Weather Dashboard',
    description:
      'A responsive weather dashboard that displays current conditions, hourly and weekly forecasts using the OpenWeather API with dynamic visualizations.',
    image: projectPlaceholder,
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS'],
    githubUrl: 'https://github.com/marclatiban/weather',
    liveUrl: 'https://weather-demo.vercel.app',
  },
  {
    id: 'project-4',
    title: 'Portfolio Website',
    description:
      'A modern, responsive personal portfolio built with React, TypeScript, and Tailwind CSS. Features dark mode, animations, and a contact form.',
    image: projectPlaceholder,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/marclatiban/portfolio',
    liveUrl: 'https://marclatiban.vercel.app',
  },
]
