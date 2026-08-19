"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRef, useSyncExternalStore } from "react";
import { badges, business } from "@/lib/data";

const TAGLINE = "Blazing lights, deep beats, and pure summer bliss.";

const DESKTOP_QUERY = "(min-width: 768px)";

function subscribeToDesktopQuery(onChange: () => void) {
  const mq = window.matchMedia(DESKTOP_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getIsDesktopSnapshot() {
  return window.matchMedia(DESKTOP_QUERY).matches;
}

function getIsDesktopServerSnapshot() {
  return false;
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const isDesktop = useSyncExternalStore(
    subscribeToDesktopQuery,
    getIsDesktopSnapshot,
    getIsDesktopServerSnapshot,
  );
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 80]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-abyss"
    >
      <motion.div className="absolute inset-0" style={{ scale }}>
        {isDesktop ? (
          <video
            className="h-full w-full object-cover"
            src="/video/hero.mp4"
            poster="/images/night.webp"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden
          />
        ) : (
          <Image
            src="/images/night.webp"
            alt="Crowd at a Plug & Play festival stage lit in red neon, DJ booth under trussing"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-abyss/70 via-abyss/55 to-abyss" />
        <div className="absolute inset-0 bg-gradient-to-t from-abyss via-transparent to-abyss/40" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(255,0,85,0.25), transparent 60%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ opacity, y: contentY }}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-cyan)]/30 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-[var(--color-cyan)] uppercase backdrop-blur-sm"
        >
          Sound · AV · Lighting · Staging · Live Events
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Namibia&rsquo;s Premier{" "}
          <span className="text-gradient-groove">Audiovisual</span> Equipment
          Partner
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-lg text-white/75 sm:text-xl"
        >
          {TAGLINE} From festival main stages to corporate galas, we bring the
          rig, the crew, and the groove.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href={business.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-whatsapp inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[var(--color-whatsapp)] px-7 py-3.5 text-base font-semibold text-white transition-transform hover:scale-[1.03] active:scale-[0.97]"
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
            Chat on WhatsApp
          </a>
          <a
            href="#showcase"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-[var(--color-pink)]/60 hover:text-[var(--color-pink)] active:scale-[0.97]"
          >
            See Our Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.56, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {badges.map((badge, i) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-surface/70 px-3.5 py-2 text-xs font-medium text-white/80 backdrop-blur-sm"
            >
              {i === 0 ? (
                <Sparkles className="h-3.5 w-3.5 text-[var(--color-cyan)]" aria-hidden />
              ) : (
                <ShieldCheck className="h-3.5 w-3.5 text-[var(--color-pink)]" aria-hidden />
              )}
              {badge}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {!reduceMotion && (
        <motion.a
          href="#services"
          aria-label="Scroll to services"
          className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-white/60 hover:text-white"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-7 w-7" />
        </motion.a>
      )}
    </section>
  );
}
