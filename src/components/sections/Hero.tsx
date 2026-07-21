import { useCallback } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaDownload, FaChevronDown } from "react-icons/fa";
import Button from "../ui/Button";
import TypingAnimation from "../ui/TypingAnimation";
import { personalInfo } from "../../data/personal";

interface Particle {
  id: number;
  x: string;
  y: string;
  size: number;
  duration: number;
  delay: number;
}

const particles: Particle[] = Array.from({ length: 4 }, (_, i) => ({
  id: i,
  x: `${15 + i * 25}%`,
  y: `${20 + i * 20}%`,
  size: 2 + Math.random() * 2,
  duration: 10 + Math.random() * 8,
  delay: Math.random() * 3,
}));

export default function Hero() {
  const handleScrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  } as const;

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  } as const;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent"
    >
      {/* Static background glow */}
      <div
        className="pointer-events-none fixed inset-0 -z-5"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(600px at 50% 40%, rgba(114,136,174,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Single subtle background blob (CSS animated, no blur) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{
            opacity: [0.08, 0.15, 0.08],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-secondary/20"
        />
      </div>

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          aria-hidden="true"
          animate={{
            y: [0, -20, 0],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none fixed -z-5 rounded-full bg-accent/30"
          style={{
            width: p.size * 2,
            height: p.size * 2,
            left: p.x,
            top: p.y,
          }}
        />
      ))}

      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.p
          variants={childVariants}
          className="text-lg font-medium text-accent"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          variants={childVariants}
          className="mt-2 text-6xl font-extrabold tracking-tight text-[#EAE0CF] sm:text-7xl md:text-8xl leading-[1.05]"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.div
          variants={childVariants}
          className="mt-4 text-xl font-medium text-accent sm:text-2xl md:text-3xl"
        >
          <TypingAnimation
            strings={[
              "Front-End Developer of Taguro Mobile App",
              "UI/UX Designer",
              "Web Designer",
              "Abegai Cantago",
            ]}
            speed={80}
            deleteSpeed={50}
            pauseDuration={2000}
          />
        </motion.div>

        <motion.p
          variants={childVariants}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#EAE0CF]/60 sm:text-lg"
        >
          I craft modern, responsive, and user-friendly web experiences with
          clean code and thoughtful design.
        </motion.p>

        <motion.div
          variants={childVariants}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            onClick={() => handleScrollTo("projects")}
            variant="primary"
            size="lg"
            icon={<FaArrowRight />}
            ariaLabel="View projects"
          >
            View Projects
          </Button>
          <Button
            onClick={() => handleScrollTo("contact")}
            variant="outline"
            size="lg"
            ariaLabel="Contact me"
          >
            Contact Me
          </Button>
          {personalInfo.resumeUrl && (
            <Button
              href={personalInfo.resumeUrl}
              variant="secondary"
              size="lg"
              icon={<FaDownload />}
              ariaLabel="Download resume"
            >
              Resume
            </Button>
          )}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleScrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-accent/50 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-full p-2"
        aria-label="Scroll to about section"
      >
        <span className="text-xs font-medium tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaChevronDown size={14} />
        </motion.div>
      </motion.button>
    </section>
  );
}
