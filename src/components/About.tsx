"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal, RevealStagger, staggerItem } from "./Reveal";
import { stats } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative bg-abyss py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.25em] text-[var(--color-cyan)] uppercase">
              Behind the rig
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              A warehouse full of options. A crew that knows every cable.
            </h2>
            <p className="mt-5 text-lg text-white/70">
              Founded in 2023 and based out of Windhoek with a satellite crew
              in Swakopmund, Plug & Play carries a fully in-house inventory —
              no last-minute sub-hires, no surprises on the invoice.
            </p>

            <RevealStagger className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={staggerItem}>
                  <p className="font-display text-xl font-extrabold text-gradient-groove sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-white/60">{stat.label}</p>
                </motion.div>
              ))}
            </RevealStagger>
          </Reveal>

          <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/images/work.webp"
                alt="Plug & Play warehouse stocked with trussing, LED fixtures and flight cases"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/images/team.webp"
                alt="The Plug & Play crew posing with their line array PA system and flight cases"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss/70 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 font-display text-sm font-bold tracking-wide text-white">
                The crew, Windhoek HQ
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
