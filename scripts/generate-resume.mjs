import fs from 'fs'
import path from 'path'
import PdfPrinterModule from 'pdfmake/js/Printer.js'
const PdfPrinter = PdfPrinterModule.default

const FONTS_DIR = path.join(import.meta.dirname, 'fonts')

async function ensureFonts() {
  fs.mkdirSync(FONTS_DIR, { recursive: true })

  const cssUrl = 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400;1,500'
  const cssRes = await fetch(cssUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } })
  if (!cssRes.ok) throw new Error('Failed to fetch Google Fonts CSS')
  const css = await cssRes.text()

  const urls = {}
  const faceRe = /@font-face\s*\{([^}]+)\}/g
  let match
  while ((match = faceRe.exec(css)) !== null) {
    const block = match[1]
    const style = block.match(/font-style:\s*(\w+)/)?.[1] || 'normal'
    const weight = block.match(/font-weight:\s*(\d+)/)?.[1] || '400'
    const urlMatch = block.match(/url\(['"]?([^'")\s]+)['"]?\)/)
    if (!urlMatch) continue
    const key = weight === '400' && style === 'normal' ? 'normal'
      : weight === '500' && style === 'normal' ? 'bold'
      : weight === '400' && style === 'italic' ? 'italics'
      : weight === '500' && style === 'italic' ? 'bolditalics'
      : null
    if (key) urls[key] = urlMatch[1]
  }

  const keyToFile = { normal: 'normal', bold: 'bold', italics: 'italics', bolditalics: 'boldItalics' }
  const needed = ['normal', 'bold', 'italics', 'bolditalics']
  for (const key of needed) {
    if (!urls[key]) throw new Error(`Could not find URL for Roboto ${key}`)
    const fp = path.join(FONTS_DIR, `Roboto-${keyToFile[key]}.ttf`)
    if (!fs.existsSync(fp)) {
      process.stdout.write(`Downloading Roboto-${key}.ttf... `)
      const res = await fetch(urls[key])
      if (!res.ok) throw new Error(`Failed to download Roboto ${key}`)
      fs.writeFileSync(fp, Buffer.from(await res.arrayBuffer()))
      process.stdout.write('OK\n')
    }
  }
}

// ── Data ──────────────────────────────────────────
const personal = {
  name: 'Marc Antolin R. Latiban',
  subtitle: 'Front-End Developer | UI Designer | Student',
  bio: [
    'I am a passionate front-end developer and UI designer with a keen eye for creating modern, responsive, and user-friendly web experiences. I love transforming ideas into elegant, functional interfaces.',
    'Currently pursuing my studies while building real-world projects, I specialize in React, TypeScript, and Tailwind CSS. I enjoy solving problems and continuously learning new technologies to deliver high-quality work.',
  ],
  email: 'marcraguallatiban@gmail.com',
  phone: '+639383885449',
  location: 'Davao City, Philippines',
  github: 'github.com/marcraguallatiban',
  linkedin: 'linkedin.com/in/marclatiban',
}

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Python'],
  },
  {
    category: 'Database',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Vite'],
  },
]

const projects = [
  {
    title: 'Taguro Mobile',
    description: 'A full-featured e-commerce web application built with React and Node.js. Includes product browsing, cart management, user authentication, and payment integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    live: 'https://taguro-mobile.netlify.app',
    github: 'https://github.com/marcku04/taguro-mobile',
  },
  {
    title: 'DevPath',
    description: 'A Kanban-style task management application with drag-and-drop functionality, real-time collaboration, and progress tracking features.',
    tech: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    live: 'https://devpath-demo.netlify.app',
    github: 'https://github.com/marcku04/devpath',
  },
  {
    title: 'Dans Carwash',
    description: 'A responsive weather dashboard that displays current conditions, hourly and weekly forecasts using the OpenWeather API with dynamic visualizations.',
    tech: ['React', 'Chart.js', 'OpenWeather API', 'CSS'],
    live: 'https://dans-carwash.netlify.app',
    github: 'https://github.com/marcku04/dans-carwash',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive personal portfolio built with React, TypeScript, and Tailwind CSS. Features dark mode, animations, and a contact form.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://marcku04.netlify.app',
    github: 'https://github.com/marcku04/maes-portfolio',
  },
]

// ── Document definition ───────────────────────────
function buildDoc() {
  const accent = '#4B5694'
  const muted = '#64748b'
  const dark = '#1e293b'
  const border = '#e2e8f0'

  function section(title) {
    return {
      table: {
        widths: ['*'],
        body: [
          [
            {
              text: title,
              fontSize: 14,
              bold: true,
              color: accent,
              margin: [0, 16, 0, 4],
            },
          ],
          [
            {
              canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1, lineColor: border }],
              margin: [0, 0, 0, 8],
            },
          ],
        ],
      },
      layout: 'noBorders',
      margin: [0, 0, 0, 0],
    }
  }

  // Skills as inline comma-separated text per category
  const skillRows = []
  for (const cat of skillCategories) {
    skillRows.push([
      { text: cat.category, bold: true, fontSize: 11, color: dark, width: 90 },
      { text: cat.skills.join(', '), fontSize: 11, color: muted },
    ])
  }

  const projectItems = projects.map((p) => {
    return {
      stack: [
        { text: p.title, fontSize: 12, bold: true, color: dark, margin: [0, 8, 0, 2] },
        { text: p.description, fontSize: 10, color: muted, margin: [0, 0, 0, 4] },
        {
          text: p.tech.join('  •  '),
          fontSize: 9,
          color: accent,
          margin: [0, 0, 0, 2],
        },
      ],
    }
  })

  return {
    pageSize: 'A4',
    pageMargins: [48, 48, 48, 48],
    defaultStyle: { font: 'Roboto', fontSize: 10, color: dark },
    content: [
      // Header
      {
        alignment: 'center',
        stack: [
          { text: personal.name, fontSize: 24, bold: true, color: dark, margin: [0, 0, 0, 2] },
          { text: personal.subtitle, fontSize: 13, color: accent, margin: [0, 0, 0, 8] },
          {
            columns: [
              { text: personal.location, alignment: 'center', fontSize: 9, color: muted },
              { text: personal.email, alignment: 'center', fontSize: 9, color: accent, link: `mailto:${personal.email}` },
              { text: personal.phone, alignment: 'center', fontSize: 9, color: muted },
              { text: personal.github, alignment: 'center', fontSize: 9, color: accent, link: `https://${personal.github}` },
              { text: personal.linkedin, alignment: 'center', fontSize: 9, color: accent, link: `https://${personal.linkedin}` },
            ],
            columnGap: 8,
            margin: [0, 0, 0, 4],
          },
        ],
      },
      // Divider
      {
        canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 2, lineColor: accent }],
        margin: [0, 0, 0, 4],
      },

      // Summary
      section('SUMMARY'),
      ...personal.bio.map((p) => ({ text: p, fontSize: 10, color: dark, margin: [0, 0, 0, 4], alignment: 'justify' })),

      // Skills
      section('SKILLS'),
      {
        table: {
          widths: [90, '*'],
          body: skillRows,
        },
        layout: 'noBorders',
        margin: [0, 0, 0, 4],
      },

      // Projects
      section('PROJECTS'),
      ...projectItems,

      // Education
      section('EDUCATION'),
      {
        stack: [
          { text: 'University of Mindanao', fontSize: 12, bold: true, color: dark, margin: [0, 4, 0, 2] },
          { text: 'Bachelor of Science in Information Technology — 4th Year', fontSize: 10, color: muted },
        ],
      },
    ],
  }
}

// ── Main ──────────────────────────────────────────
async function main() {
  process.stdout.write('Ensuring fonts... ')
  await ensureFonts()
  process.stdout.write('done\n')

  const printer = new PdfPrinter(
    {
      Roboto: {
        normal: path.join(FONTS_DIR, 'Roboto-normal.ttf'),
        bold: path.join(FONTS_DIR, 'Roboto-bold.ttf'),
        italics: path.join(FONTS_DIR, 'Roboto-italics.ttf'),
        bolditalics: path.join(FONTS_DIR, 'Roboto-boldItalics.ttf'),
      },
    },
    null,
    {
      resolve: () => {},
      resolved: () => Promise.resolve(),
    },
  )

  const docDefinition = buildDoc()
  const pdfDoc = await printer.createPdfKitDocument(docDefinition)

  const outPath = path.join(import.meta.dirname, '..', 'public', 'resume.pdf')
  const writeStream = fs.createWriteStream(outPath)

  pdfDoc.pipe(writeStream)
  pdfDoc.end()

  await new Promise((resolve, reject) => {
    writeStream.on('finish', resolve)
    writeStream.on('error', reject)
  })

  const size = fs.statSync(outPath).size
  process.stdout.write(`Resume PDF generated: public/resume.pdf (${(size / 1024).toFixed(1)} KB)\n`)
}

main().catch((err) => {
  console.error('Error:', err)
  process.exit(1)
})
