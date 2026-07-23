// =====================================
// PROJECTS DATA
// =====================================
// Edit the projects array below to
// showcase your own work.
//
// images: Add images to src/assets/images/
//   and import them at the top of this file.
//   Replace the placeholder paths below.
//   You can add as many images per project
//   as you want.
// =====================================

import projectPlaceholder from '../assets/images/project-placeholder.svg'
import project1Img from '../assets/images/project1-1.jpg'

export interface ProjectData {
  id: string
  title: string
  description: string
  images: string[]
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

export const projects: ProjectData[] = [
  {
    id: 'project-1',
    // ---------- CHANGE PROJECT TITLE ----------
    title: 'Taguro Mobile',
    // ---------- CHANGE PROJECT DESCRIPTION ----------
    description:
      'A full-featured e-commerce web application built with React and Node.js. Includes product browsing, cart management, user authentication, and payment integration.',
    // ---------- CHANGE PROJECT IMAGES ----------
    // Replace with your own imports at the top of this file,
    // then use the variable names below.
    images: [project1Img],
    // ---------- CHANGE TECHNOLOGIES ----------
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://taguro-mobile.netlify.app',
    githubUrl: 'https://github.com/marcku04/taguro-mobile',
  },
  {
    id: 'project-2',
    title: 'DevPath',
    description:
      'A Kanban-style task management application with drag-and-drop functionality, real-time collaboration, and progress tracking features.',
    images: [projectPlaceholder, projectPlaceholder],
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    liveUrl: 'https://devpath-demo.netlify.app',
    githubUrl: 'https://github.com/marcku04/devpath',
  },
  {
    id: 'project-3',
    title: 'Dans Carwash',
    description:
      'A responsive weather dashboard that displays current conditions, hourly and weekly forecasts using the OpenWeather API with dynamic visualizations.',
    images: [projectPlaceholder, projectPlaceholder, projectPlaceholder],
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS'],
    liveUrl: 'https://dans-carwash.netlify.app',
    githubUrl: 'https://github.com/marcku04/dans-carwash',
  },
  {
    id: 'project-4',
    title: 'Maes ',
    description:
      'A modern, responsive personal portfolio built with React, TypeScript, and Tailwind CSS. Features dark mode, animations, and a contact form.',
    images: [projectPlaceholder],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://marcku04.netlify.app',
    githubUrl: 'https://github.com/marcku04/maes-portfolio',
  },
]
