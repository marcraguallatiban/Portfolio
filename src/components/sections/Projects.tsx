import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaStar,
  FaImages,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import { projects } from "../../data/projects";

interface LightboxState {
  projectIdx: number;
  imageIdx: number;
}

export default function Projects() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const close = useCallback(() => setLightbox(null), []);

  const goNext = useCallback(() => {
    setLightbox((prev) => {
      if (!prev) return null;
      const project = projects[prev.projectIdx];
      return {
        ...prev,
        imageIdx: (prev.imageIdx + 1) % project.images.length,
      };
    });
  }, []);

  const goPrev = useCallback(() => {
    setLightbox((prev) => {
      if (!prev) return null;
      const project = projects[prev.projectIdx];
      return {
        ...prev,
        imageIdx:
          (prev.imageIdx - 1 + project.images.length) % project.images.length,
      };
    });
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, goNext, goPrev]);

  return (
    <section id="projects" className="bg-transparent py-20 md:py-28 relative">
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <SectionTitle title="Projects" subtitle="Some things I've built" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
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
              <Card className="overflow-hidden h-full flex flex-col relative">
                {idx === 0 && (
                  <div className="absolute top-3 right-3 z-10 flex items-center gap-1 rounded-full bg-secondary/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                    <FaStar size={10} />
                    Featured
                  </div>
                )}

                <div
                  className="relative overflow-hidden cursor-pointer"
                  onClick={() => setLightbox({ projectIdx: idx, imageIdx: 0 })}
                >
                  <img
                    src={project.images[0]}
                    alt={`Screenshot of ${project.title}`}
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                  {project.images.length > 1 && (
                    <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-sm px-2.5 py-1 text-xs text-white/90">
                      <FaImages size={10} />+{project.images.length - 1}
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold text-[#EAE0CF] group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#EAE0CF]/60">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={close}
          >
            <motion.div
              key={`${lightbox.projectIdx}-${lightbox.imageIdx}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={close}
                className="absolute -top-10 right-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
                aria-label="Close lightbox"
              >
                <FaTimes size={16} />
              </button>

              <img
                src={projects[lightbox.projectIdx].images[lightbox.imageIdx]}
                alt={`${projects[lightbox.projectIdx].title} screenshot ${lightbox.imageIdx + 1}`}
                className="w-full rounded-lg max-h-[80vh] object-contain"
              />

              {/* Prev */}
              {projects[lightbox.projectIdx].images.length > 1 && (
                <button
                  onClick={goPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white/80 hover:bg-black/70 hover:text-white transition-colors"
                  aria-label="Previous image"
                >
                  <FaChevronLeft size={18} />
                </button>
              )}

              {/* Next */}
              {projects[lightbox.projectIdx].images.length > 1 && (
                <button
                  onClick={goNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white/80 hover:bg-black/70 hover:text-white transition-colors"
                  aria-label="Next image"
                >
                  <FaChevronRight size={18} />
                </button>
              )}

              {/* Info bar */}
              <div className="mt-4 flex items-center justify-between text-sm text-white/70">
                <span>{projects[lightbox.projectIdx].title}</span>
                {projects[lightbox.projectIdx].images.length > 1 && (
                  <span>
                    {lightbox.imageIdx + 1} /{" "}
                    {projects[lightbox.projectIdx].images.length}
                  </span>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
