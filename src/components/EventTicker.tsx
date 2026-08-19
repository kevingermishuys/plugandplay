import { Marquee } from "./Marquee";

const items = [
  "SUNSET GROOVE",
  "DEEP IN THE CITY",
  "SOUND OF SUMMER",
  "TECH SUMMIT NAMIBIA",
  "SWAKOPMUND GALA",
  "NAMIBIAN TOURISM BOARD",
];

export function EventTicker() {
  return (
    <div className="relative z-10 border-y border-white/10 bg-surface py-3.5">
      <Marquee duration={26}>
        {items.map((item) => (
          <span key={item} className="flex items-center gap-8">
            <span className="font-display text-sm font-bold tracking-[0.15em] text-white/70 sm:text-base">
              {item}
            </span>
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[var(--color-pink)]" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
