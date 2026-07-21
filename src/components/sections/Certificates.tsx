import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCertificate, FaTimes } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'
import { certificates, type Certificate } from '../../data/certificates'

const imageModules = import.meta.glob<{ default: string }>(
  '/src/assets/images/certificates/*.png',
  { eager: true, query: '?url' }
)

function getImageSrc(image?: string): string | undefined {
  if (!image) return undefined
  return imageModules[`/src/assets/images/certificates/${image}`]?.default
}

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setSelectedCert(null)
  }, [])

  useEffect(() => {
    if (selectedCert) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedCert, handleKeyDown])

  return (
    <section id="certificates" className="bg-transparent py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#7288AE]/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#4B5694]/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <SectionTitle
          title="Certificates"
          subtitle="Professional certifications that showcase my technical skills and continuous learning journey."
        />

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.06] overflow-hidden hover:bg-white/[0.06] hover:border-[#7288AE]/30 hover:shadow-[0_8px_30px_rgba(114,136,174,0.15)] hover:-translate-y-1.5 transition-colors transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B5694]"
              tabIndex={0}
              role="button"
              aria-label={`View ${cert.title} certificate`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setSelectedCert(cert)
                }
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                {getImageSrc(cert.image) ? (
                  <img
                    src={getImageSrc(cert.image)}
                    alt={cert.title}
                    className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-44 flex items-center justify-center bg-white/[0.02]">
                    <FaCertificate size={48} className="text-[#7288AE]/30" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-base font-semibold text-[#EAE0CF] group-hover:text-[#7288AE] transition-colors duration-300 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-sm text-[#EAE0CF]/50">
                  {cert.issuer}
                </p>

                <p className="text-xs text-[#EAE0CF]/30">
                  {cert.date}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.06] text-[#EAE0CF]/50"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.06] text-[#EAE0CF]/30">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedCert(null)}
          >
            {/* Backdrop blur */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0F172A] border border-white/[0.08] shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B5694]"
                aria-label="Close modal"
              >
                <FaTimes size={14} />
              </button>

              {/* Modal image */}
              {getImageSrc(selectedCert.image) && (
                <div className="w-full bg-black/10">
                  <img
                    src={getImageSrc(selectedCert.image)}
                    alt={selectedCert.title}
                    className="w-full max-h-[75vh] object-contain"
                  />
                </div>
              )}

              {/* Modal body */}
              <div className="p-6 md:p-8 space-y-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#EAE0CF]">
                    {selectedCert.title}
                  </h2>
                  <p className="text-sm text-[#7288AE] font-medium mt-1">
                    {selectedCert.issuer}
                  </p>
                  <p className="text-xs text-[#EAE0CF]/40 mt-0.5">
                    {selectedCert.date}
                  </p>
                </div>

                <p className="text-sm text-[#EAE0CF]/60 leading-relaxed">
                  {selectedCert.description}
                </p>

                {/* Skills */}
                <div>
                  <h4 className="text-xs font-semibold text-[#EAE0CF]/50 uppercase tracking-wider mb-2">
                    Skills Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-[#7288AE]/10 text-[#7288AE] border border-[#7288AE]/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Credential button — uncomment when credentialUrl is set */}
                {/* {selectedCert.credentialUrl && (
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#4B5694] text-white text-sm font-medium hover:bg-[#7288AE] transition-colors duration-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B5694]"
                  >
                    View Credential
                    <FaExternalLinkAlt size={12} />
                  </a>
                )} */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
