import { motion } from 'framer-motion'

export default function WaveDivider() {
  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: '100%' }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
      className="mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-[#7288AE]/50 to-transparent"
      aria-hidden="true"
    />
  );
}
