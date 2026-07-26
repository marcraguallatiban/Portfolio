export interface Certificate {
  title: string
  issuer: string
  date: string
  description: string
  skills: string[]
  category: 'Frontend' | 'Backend' | 'Database' | 'Networking' | 'UI/UX'
  credentialUrl?: string
  image?: string
}

export const certificates: Certificate[] = [
  {
    title: 'Database',
    issuer: 'Certiport - Information Technology Specialist (Database)',
    date: 'March 15, 2023',
    description:
      'Comprehensive database design and management covering relational databases, SQL queries, normalization, and indexing strategies.',
    skills: ['SQL', 'Database Design', 'Normalization', 'Indexing'],
    category: 'Database',
    credentialUrl: '#',
    image: 'Database.png',
  },
  {
    title: 'HTML and CSS',
    issuer: 'Certiport - Information Technology Specialist (HTML and CSS)',
    date: 'May 19, 2023',
    description:
      'Mastered responsive design principles, CSS Grid, Flexbox, and mobile-first development workflows.',
    skills: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid', 'Media Queries'],
    category: 'Frontend',
    credentialUrl: '#',
    image: 'HTML and CSS.png',
  },
  {
    title: 'Networking',
    issuer: 'Certiport - Information Technology Specialist (Networking)',
    date: 'December 2023',
    description:
      'Fundamentals of computer networking, TCP/IP, OSI model, routing, switching, and network security concepts.',
    skills: ['TCP/IP', 'OSI Model', 'Routing', 'Network Security'],
    category: 'Networking',
    credentialUrl: '#',
    image: 'networkin.png',
  },
 
  {
    title: 'JS Workshop',
    issuer: 'JavaScript Learning Lab',
    date: 'February 14, 2026',
    description:
      'Hands-on JavaScript workshop covering core concepts, ES6+, and practical problem-solving.',
    skills: ['JavaScript', 'ES6+', 'Problem Solving'],
    category: 'Frontend',
    credentialUrl: '#',
    image: 'JS-Workshop.png',
  },
  {
    title: 'GitHub Workshop',
    issuer: 'GitHub Learning Lab',
    date: 'February 14, 2026',
    description:
      'Version control workflows, branching strategies, pull requests, and open-source collaboration with Git and GitHub.',
    skills: ['Git', 'GitHub', 'Version Control', 'CI/CD'],
    category: 'Backend',
    credentialUrl: '#',
    image: 'GitHub.png',
  },
  // {
  //   title: 'Gender Sensitivity',
  //   issuer: 'Training Certificate',
  //   date: 'March 2025',
  //   description:
  //     'Completed training on gender sensitivity, inclusivity, and workplace equality best practices.',
  //   skills: ['Inclusivity', 'Workplace Ethics', 'Communication'],
  //   category: 'UI/UX',
  //   credentialUrl: '#',
  //   image: 'Gender-Sensitivity.png',
  // },
  // {
  //   title: 'Pre-Deployment',
  //   issuer: 'Training Certificate',
  //   date: 'July 2025',
  //   description:
  //     'Pre-deployment best practices including environment configuration, testing, and release management.',
  //   skills: ['Deployment', 'Testing', 'Configuration'],
  //   category: 'Backend',
  //   credentialUrl: '#',
  //   image: 'Pre-Deployment.png',
  // },
  // {
  //   title: 'Office Etiquette',
  //   issuer: 'Training Certificate',
  //   date: 'February 2025',
  //   description:
  //     'Professional workplace etiquette, communication norms, and office best practices.',
  //   skills: ['Professionalism', 'Communication', 'Workplace Ethics'],
  //   category: 'UI/UX',
  //   credentialUrl: '#',
  //   image: 'Office-Etiqutte.png',
  // },
  // {
  //   title: 'Innovative Culture',
  //   issuer: 'Training Certificate',
  //   date: 'August 2025',
  //   description:
  //     'Explored innovation-driven workplace culture, creative thinking, and team collaboration strategies.',
  //   skills: ['Innovation', 'Team Collaboration', 'Creative Thinking'],
  //   category: 'UI/UX',
  //   credentialUrl: '#',
  //   image: 'Innovative-Culture.png',
  // },
  
]
