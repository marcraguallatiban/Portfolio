import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa'
import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="bg-transparent py-20 md:py-28 relative">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#7288AE]/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <SectionTitle title="Projects" subtitle="Some things I've built" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="group"
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-[0_0_25px_rgba(114,136,174,0.2)] hover:border-[#7288AE]/30 transition-all duration-500 relative">
                {/* Featured badge */}
                {idx === 0 && (
                  <div className="absolute top-3 right-3 z-20 flex items-center gap-1 rounded-full bg-[#4B5694]/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                    <FaStar size={10} />
                    Featured
                  </div>
                )}

                {/* Project image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover reveal buttons */}
                  <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <Button
                      href={project.githubUrl}
                      variant="outline"
                      size="sm"
                      icon={<FaGithub />}
                      ariaLabel={`View ${project.title} on GitHub`}
                      className="flex-1 !border-white/30 !text-white hover:!bg-white/20"
                    >
                      GitHub
                    </Button>
                    <Button
                      href={project.liveUrl}
                      variant="primary"
                      size="sm"
                      icon={<FaExternalLinkAlt />}
                      ariaLabel={`View ${project.title} live demo`}
                      className="flex-1"
                    >
                      Live
                    </Button>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold text-[#EAE0CF] group-hover:text-[#7288AE] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#EAE0CF]/60">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-[#7288AE]/10 px-3 py-1 text-xs font-medium text-[#7288AE]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
