"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { Reveal, RevealStagger, staggerItem } from "./Reveal";
import { showcase } from "@/lib/data";

export function Showcase() {
  return (
    <section id="showcase" className="relative bg-abyss py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.25em] text-[var(--color-pink)] uppercase">
            Flagship events
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            The rigs behind the groove
          </h2>
          <p className="mt-4 text-lg text-white/70">
            A taste of the productions we&rsquo;ve powered, from desert dune
            fests to rooftop nightlife takeovers.
          </p>
        </Reveal>

        <RevealStagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {showcase.map((event) => (
            <motion.article
              key={event.title}
              variants={staggerItem}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 sm:aspect-[16/11]"
            >
              <Image
                src={event.image}
                alt={`${event.title} — ${event.description}`}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/25 to-transparent" />

              <span className="absolute top-4 left-4 rounded-full border border-white/20 bg-abyss/60 px-3 py-1 text-xs font-semibold tracking-wide text-[var(--color-cyan)] backdrop-blur-sm">
                {event.tag}
              </span>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                  {event.title}
                </h3>
                <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-white/60">
                  <MapPin className="h-3.5 w-3.5" aria-hidden />
                  {event.location}
                </p>
                <p className="mt-2 max-w-md text-sm text-white/75">
                  {event.description}
                </p>
              </div>
            </motion.article>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
