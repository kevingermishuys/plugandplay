"use client";

import { AudioLines, CheckCircle2, Layers, Sparkles, Zap, type LucideIcon } from "lucide-react";
import { Reveal, RevealStagger, staggerItem } from "./Reveal";
import { services } from "@/lib/data";
import { motion } from "framer-motion";

const icons: Record<string, LucideIcon> = { AudioLines, Sparkles, Layers, Zap };
const accents = ["var(--color-pink)", "var(--color-cyan)", "var(--color-indigo)", "var(--color-amber)"];

export function Services() {
  return (
    <section id="services" className="bg-green-lines relative bg-abyss py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.25em] text-[var(--color-cyan)] uppercase">
            What we run
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            End-to-end event infrastructure
          </h2>
          <p className="mt-4 text-lg text-white/70">
            From individual equipment hire to multi-stage festival production
            — everything is rider-ready and in-house.
          </p>
        </Reveal>

        <RevealStagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            const accent = accents[i % accents.length];
            return (
              <motion.article
                key={service.title}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className="group flex flex-col rounded-2xl border border-white/10 bg-surface/80 p-6 backdrop-blur-sm transition-colors hover:border-white/20"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `color-mix(in srgb, ${accent} 16%, transparent)` }}
                >
                  <Icon className="h-6 w-6" style={{ color: accent }} aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-white/60">{service.blurb}</p>
                <ul className="mt-5 flex flex-col gap-2.5 border-t border-white/10 pt-5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0"
                        style={{ color: accent }}
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
