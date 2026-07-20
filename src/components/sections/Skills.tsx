import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import { skillCategories } from '../../data/skills'

import * as FaIcons from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'

const categoryGradients: Record<string, string> = {
  Frontend: 'from-[#4B5694]/40 to-[#7288AE]/20',
  Backend: 'from-[#4F252E]/40 to-[#7288AE]/20',
  Database: 'from-[#7288AE]/40 to-[#4B5694]/20',
  Languages: 'from-[#4B5694]/40 to-[#4F252E]/20',
  Tools: 'from-[#7288AE]/40 to-[#4B5694]/20',
}

const categoryIconColors: Record<string, string> = {
  Frontend: '#4B5694',
  Backend: '#4F252E',
  Database: '#7288AE',
  Languages: '#4B5694',
  Tools: '#7288AE',
}

function getIcon(iconName: string, color: string) {
  const allIcons = { ...FaIcons, ...SiIcons } as Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>>
  const Icon = allIcons[iconName]
  if (Icon) return <Icon className="text-xl transition-colors duration-300" style={{ color }} />
  return <FaIcons.FaCode className="text-xl transition-colors duration-300" style={{ color }} />
}

export default function Skills() {
  return (
    <section id="skills" className="bg-transparent py-20 md:py-28 relative">
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-[#4B5694]/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <SectionTitle title="Skills" subtitle="Technologies and tools I work with" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="p-0 h-full overflow-hidden group">
                {/* Gradient accent strip */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${categoryGradients[group.category] || 'from-[#4B5694]/40 to-[#7288AE]/20'}`} />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#EAE0CF] mb-4">
                    {group.category}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {group.skills.map((skill, sIdx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 + sIdx * 0.03 }}
                        className="group/skill"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="shrink-0 group-hover/skill:scale-110 transition-transform duration-300">
                            {getIcon(skill.icon, categoryIconColors[group.category] || '#7288AE')}
                          </span>
                          <span className="text-sm font-medium text-[#EAE0CF]/80">{skill.name}</span>
                        </div>
                        {/* Progress bar */}
                        <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.05 + sIdx * 0.03 + 0.2, ease: 'easeOut' }}
                            className="h-full rounded-full bg-gradient-to-r from-[#4B5694] to-[#7288AE]"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
