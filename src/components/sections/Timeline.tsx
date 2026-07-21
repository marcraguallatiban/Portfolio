import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { timelineEvents } from '../../data/timeline'

export default function Timeline() {
  return (
    <section id="timeline" className="bg-transparent py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-[#7288AE]/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="mx-auto max-w-3xl px-6 relative z-10">
        <SectionTitle title="My Journey" subtitle="Milestones that shaped my path" />

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-[2px] origin-top bg-gradient-to-b from-[#4B5694] via-[#7288AE] to-transparent"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            className="relative space-y-12"
          >
            {timelineEvents.map((event, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot on the line */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="absolute left-[10px] md:left-1/2 z-10 h-5 w-5 rounded-full border-2 border-[#7288AE] bg-[#0F172A] -translate-x-1/2 mt-1"
                />

                {/* Card */}
                <div className={`w-full md:w-[calc(50%-2rem)] pl-10 md:pl-0 ${idx % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <div className="rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.06] p-5 hover:bg-white/[0.06] hover:border-[#7288AE]/20 transition-colors transition-shadow duration-300">
                    {/* Year badge */}
                    <span className="inline-block rounded-full bg-[#4B5694]/20 px-3 py-0.5 text-xs font-semibold text-[#7288AE] mb-2">
                      {event.year}
                    </span>
                    <h3 className="text-base font-semibold text-[#EAE0CF]">{event.title}</h3>
                    <p className="text-xs text-[#7288AE] font-medium mt-0.5">{event.subtitle}</p>
                    <p className="mt-2 text-sm text-[#EAE0CF]/60 leading-relaxed">{event.description}</p>
                  </div>
                </div>

                {/* Spacer for the other side on desktop */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
