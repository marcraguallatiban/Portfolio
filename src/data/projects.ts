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

import devpathLoginImg from '../assets/images/devpath-login.png'
import homepageImg from '../assets/images/homepage.png'
import progressImg from '../assets/images/progress.png'
import resourcesImg from '../assets/images/resources.png'
import resultImg from '../assets/images/result.png'
import careerImg from '../assets/images/career.png'
import loginImg from '../assets/images/login.jpg'
import dashboardImg from '../assets/images/dashboard-taguro.jpg'
import spacesImg from '../assets/images/spaces.jpg'
import statusOverviewImg from '../assets/images/Status-Overview.jpg'
import channelImg from '../assets/images/channel.jpg'
import dansCarwash1 from '../assets/images/project1-1.jpg'


export interface ProjectData {
  id: string
  title: string
  description: string
  images: string[]
  technologies?: string[]
  liveUrl?: string
  githubUrl?: string
  playStoreUrl?: string
}

export const projects: ProjectData[] = [
  {
    id: 'project-1',
    // ---------- CHANGE PROJECT TITLE ----------
    title: 'Taguro Mobile',
    // ---------- CHANGE PROJECT DESCRIPTION ----------
    description:
      'A task management mobile app we developed featuring kanban and scrum boards, along with a QR code scanner for inviting collaborators, where I worked as the UI/UX of the app focusing on creating an intuitive and user-friendly experience.',
    // ---------- CHANGE PROJECT IMAGES ----------
    // Replace with your own imports at the top of this file,
    // then use the variable names below.
    images: [loginImg, dashboardImg, spacesImg, statusOverviewImg, channelImg],
    // // ---------- CHANGE TECHNOLOGIES ----------
    // technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://taguro-mobile.netlify.app',
    githubUrl: 'https://github.com/marcku04/taguro-mobile',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.support.taguro&pcampaignid=web_share',
  },
  {
    id: 'project-2',
    title: 'DevPath',
    description:
      'DevPath; Machine Learning; Student Assessment; Career Recommendation; Educational Technology.',
    images: [devpathLoginImg, homepageImg, progressImg, resourcesImg, resultImg, careerImg],
    // technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    liveUrl: 'https://devpath-demo.netlify.app',
    githubUrl: 'https://github.com/marcku04/devpath',
  },
  {
    id: 'project-3',
    title: 'Dans Carwash',
    description:
      'A Windows Forms-based car wash management system designed to streamline daily operations, featuring a clean, user-friendly interface with a car wash-themed design for an intuitive user experience.',
    images: [dansCarwash1],
    // technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS'],
    liveUrl: 'https://dans-carwash.netlify.app',
    githubUrl: 'https://github.com/marcku04/dans-carwash',
  },
]
