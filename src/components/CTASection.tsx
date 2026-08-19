"use client";

import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { business } from "@/lib/data";

export function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-abyss py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(121,40,202,0.28), transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="text-xs font-semibold tracking-[0.25em] text-[var(--color-pink)] uppercase">
            Let&rsquo;s make it loud
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Ready to book your production?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
            Send us your rider or event brief on WhatsApp for a rapid quote —
            zero hidden fees, no back-and-forth.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={business.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-whatsapp inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[var(--color-whatsapp)] px-8 py-3.5 text-base font-semibold text-white transition-transform hover:scale-[1.03] active:scale-[0.97] sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Chat on WhatsApp
            </a>
            <a
              href={`mailto:${business.email}`}
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-[var(--color-cyan)]/60 hover:text-[var(--color-cyan)] active:scale-[0.97] sm:w-auto"
            >
              <Mail className="h-5 w-5" aria-hidden />
              Email Us
            </a>
          </div>

          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-4 text-left sm:grid-cols-3">
            <a
              href={`tel:${business.phoneIntl}`}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-surface/70 p-4 transition-colors hover:border-white/25"
            >
              <Phone className="h-5 w-5 shrink-0 text-[var(--color-cyan)]" aria-hidden />
              <span className="text-sm text-white/80">{business.phone}</span>
            </a>
            <a
              href={`mailto:${business.email}`}
              className="flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-surface/70 p-4 transition-colors hover:border-white/25"
            >
              <Mail className="h-5 w-5 shrink-0 text-[var(--color-cyan)]" aria-hidden />
              <span className="min-w-0 overflow-hidden text-xs text-ellipsis whitespace-nowrap text-white/80 sm:text-sm">
                {business.email}
              </span>
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-surface/70 p-4">
              <MapPin className="h-5 w-5 shrink-0 text-[var(--color-cyan)]" aria-hidden />
              <span className="text-sm text-white/80">{business.address}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
