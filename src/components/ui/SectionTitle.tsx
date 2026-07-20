import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle?: string
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#EAE0CF]">
        {title}
      </h2>
      <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-[#4B5694] via-[#7288AE] to-[#4B5694] shadow-[0_0_8px_rgba(114,136,174,0.4)]" />
      {subtitle && (
        <p className="mt-4 text-lg text-[#EAE0CF]/60 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
