import { Reveal } from "./Reveal";
import { Marquee } from "./Marquee";
import { partners } from "@/lib/data";

export function Partners() {
  return (
    <section id="partners" className="bg-green-lines relative bg-abyss py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="text-xs font-semibold tracking-[0.25em] text-[var(--color-indigo)] uppercase">
            Technology partners
          </span>
          <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
            Industry-standard hardware, rider-ready
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-12">
        <Marquee duration={34}>
          {partners.map((partner) => (
            <span
              key={partner}
              className="rounded-full border border-white/12 bg-surface/70 px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-white/75"
            >
              {partner}
            </span>
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}
