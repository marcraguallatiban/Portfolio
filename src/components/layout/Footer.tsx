import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaArrowUp, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss } from 'react-icons/si'
import { socialLinks, personalInfo, navLinks } from '../../data/personal'

const iconMap: Record<string, React.ReactNode> = {
  FaGithub: <FaGithub size={20} />,
  FaLinkedin: <FaLinkedin size={20} />,
  FaFacebook: <FaFacebook size={20} />,
  FaEnvelope: <FaEnvelope size={20} />,
}

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const currentYear = new Date().getFullYear()

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0F172A] text-white/80 relative">
      {/* Gradient separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#7288AE]/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Grid layout */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand + Built with */}
          <div>
            <h3 className="text-lg font-bold text-white">
              {personalInfo.name.split(' ')[0]}
              <span className="text-[#7288AE]">.</span>
            </h3>
            <p className="mt-2 text-sm text-[#EAE0CF]/50 max-w-xs">
              Building modern web experiences with clean code and thoughtful design.
            </p>
            <div className="mt-4 flex items-center gap-2 text-[#EAE0CF]/40 text-xs">
              <span>Built with</span>
              <FaReact className="text-[#61DAFB]" size={14} title="React" />
              <SiTypescript className="text-[#3178C6]" size={14} title="TypeScript" />
              <SiTailwindcss className="text-[#06B6D4]" size={14} title="Tailwind CSS" />
              <FaNodeJs className="text-[#339933]" size={14} title="Vite" />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="text-sm text-[#EAE0CF]/50 hover:text-[#7288AE] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B5694] rounded"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Back to top */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-[#7288AE] hover:text-white hover:scale-110 hover:shadow-lg transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {iconMap[link.icon]}
                </a>
              ))}
            </div>

            {/* Desktop back-to-top */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex items-center gap-2 text-sm text-[#EAE0CF]/40 hover:text-[#7288AE] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B5694] rounded px-2 py-1"
            >
              <FaArrowUp size={12} />
              Back to top
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/[0.06] text-center">
          <p className="text-xs text-[#EAE0CF]/40">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
