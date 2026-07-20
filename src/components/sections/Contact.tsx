import { useState, type FocusEvent, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
  FaCheck,
} from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";
import { personalInfo, socialLinks } from "../../data/personal";

// ==========================================
// ✏️ EMAILJS CREDENTIALS — REPLACE THESE
// ==========================================
// 1. Go to https://emailjs.com → sign up free
// 2. Add an email service (connect Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your Service ID, Template ID, and Public Key
//    from the EmailJS dashboard → Account → API Keys
// ==========================================
const EMAILJS_SERVICE_ID = "service_kptkt69";
const EMAILJS_TEMPLATE_ID = "template_rg0mf52";
const EMAILJS_PUBLIC_KEY = "qbm_XL4kvEgq-lYJG";

const iconMap: Record<string, React.ReactNode> = {
  FaGithub: <FaGithub size={22} />,
  FaLinkedin: <FaLinkedin size={22} />,
  FaFacebook: <FaFacebook size={22} />,
  FaEnvelope: <FaEnvelope size={22} />,
};

interface FieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}

function FloatingField({
  id,
  label,
  type = "text",
  value,
  onChange,
  required,
  placeholder,
  rows,
}: FieldProps) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  const shared = `peer w-full rounded-xl bg-white/[0.06] border border-white/10 px-4 pt-6 pb-3 text-[#EAE0CF] placeholder:text-transparent focus:outline-none focus:ring-2 focus:ring-[#4B5694] focus:border-transparent focus:shadow-[0_0_16px_rgba(75,86,148,0.15)] transition-all duration-300`;

  if (rows) {
    return (
      <div className="relative">
        <textarea
          id={id}
          name={id}
          rows={rows}
          required={required}
          value={value}
          placeholder={placeholder || label}
          onFocus={() => setFocused(true)}
          onBlur={(e: FocusEvent<HTMLTextAreaElement>) =>
            setFocused(e.target.value.length > 0)
          }
          onChange={(e) => onChange(e.target.value)}
          className={shared + " resize-none"}
        />
        <label
          htmlFor={id}
          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
            active
              ? "top-2 text-xs text-[#7288AE]"
              : "top-3.5 text-sm text-[#EAE0CF]/40"
          }`}
        >
          {label}
          {required && <span className="text-red-400 ml-0.5">*</span>}
        </label>
      </div>
    );
  }

  return (
    <div className="relative">
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        placeholder={placeholder || label}
        onFocus={() => setFocused(true)}
        onBlur={(e: FocusEvent<HTMLInputElement>) =>
          setFocused(e.target.value.length > 0)
        }
        onChange={(e) => onChange(e.target.value)}
        className={shared}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          active
            ? "top-2 text-xs text-[#7288AE]"
            : "top-3.5 text-sm text-[#EAE0CF]/40"
        }`}
      >
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
    </div>
  );
}

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        e.currentTarget,
        EMAILJS_PUBLIC_KEY,
      );
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch {
      alert("Something went wrong. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-transparent py-20 md:py-28 relative overflow-hidden"
    >
      {/* Floating decorative shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{
            y: [0, -24, 0],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 15, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-16 left-8 w-5 h-5 rounded-full bg-[#4B5694]/20"
        />
        <motion.div
          animate={{
            y: [0, 18, 0],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -20, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-36 right-12 w-7 h-7 rounded-lg bg-[#7288AE]/10 rotate-45"
        />
        <motion.div
          animate={{ y: [0, -14, 0], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-10 w-3 h-3 rounded-full bg-[#4F252E]/20"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.35, 0.2],
            rotate: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-12 w-4 h-4 rounded-full border border-[#4B5694]/20"
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <SectionTitle
          title="Contact"
          subtitle="Get in touch — I'd love to hear from you"
        />

        <div className="grid gap-12 md:grid-cols-5">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-5"
          >
            <FloatingField
              id="name"
              label="Name"
              value={form.name}
              onChange={(v) => setForm((p) => ({ ...p, name: v }))}
              required
              placeholder="Your name"
            />
            <FloatingField
              id="email"
              label="Email"
              type="email"
              value={form.email}
              onChange={(v) => setForm((p) => ({ ...p, email: v }))}
              required
              placeholder="your.email@example.com"
            />
            <FloatingField
              id="message"
              label="Message"
              value={form.message}
              onChange={(v) => setForm((p) => ({ ...p, message: v }))}
              required
              placeholder="Your message..."
              rows={5}
            />

            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex items-center gap-2 rounded-full bg-green-500/20 text-green-400 px-6 py-3 text-sm font-medium w-fit"
                >
                  <FaCheck />
                  Message Sent!
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <button
                    type="submit"
                    disabled={sending}
                    className="relative inline-flex items-center gap-2 overflow-hidden rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B5694] focus-visible:ring-offset-2 px-8 py-3 text-lg bg-gradient-to-r from-[#4B5694] to-[#7288AE] text-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    aria-label="Send message"
                  >
                    <FaPaperPlane />
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/10 p-6 hover:bg-white/[0.08] transition-colors duration-300">
              <h3 className="text-lg font-semibold text-[#EAE0CF] mb-4">
                Contact Info
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-[#EAE0CF]/60 hover:text-[#7288AE] transition-colors group"
                  aria-label={`Email ${personalInfo.email}`}
                >
                  <FaEnvelope
                    className="text-[#4B5694] shrink-0 group-hover:scale-110 transition-transform duration-300"
                    size={18}
                  />
                  <span className="text-sm break-all">
                    {personalInfo.email}
                  </span>
                </a>

                {personalInfo.phone && (
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="flex items-center gap-3 text-[#EAE0CF]/60 hover:text-[#7288AE] transition-colors group"
                    aria-label={`Phone ${personalInfo.phone}`}
                  >
                    <FaPhone
                      className="text-[#4B5694] shrink-0 group-hover:scale-110 transition-transform duration-300"
                      size={18}
                    />
                    <span className="text-sm">{personalInfo.phone}</span>
                  </a>
                )}
              </div>
            </div>

            <div className="rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/10 p-6 hover:bg-white/[0.08] transition-colors duration-300">
              <h3 className="text-lg font-semibold text-[#EAE0CF] mb-4">
                Social
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-[#7288AE] shadow-sm hover:bg-[#4B5694] hover:text-white hover:shadow-lg hover:scale-110 transition-all duration-300"
                  >
                    {iconMap[link.icon]}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
