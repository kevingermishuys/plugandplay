import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { business, navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-abyss">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="#top" className="font-display text-lg font-bold tracking-tight">
              PLUG<span className="text-gradient-groove">&amp;</span>PLAY
            </Link>
            <p className="mt-3 max-w-xs text-sm text-white/60">
              Namibia&rsquo;s premier technical event production company —
              sound, AV, lighting, staging and live events.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">Navigate</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-[var(--color-cyan)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">Contact</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={`tel:${business.phoneIntl}`}
                  className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-[var(--color-cyan)]"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="flex min-w-0 items-center gap-2 text-sm text-white/60 transition-colors hover:text-[var(--color-cyan)]"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden />
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap">{business.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                {business.address}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">Est. {business.founded}</h3>
            <p className="mt-4 text-sm text-white/60">
              Operating out of Windhoek &amp; Longbeach/Swakopmund. Festival
              promoters, event directors, corporate organizers and nightlife
              activations trust us with their production.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Plug &amp; Play Event Solutions. All rights reserved.</p>
          <p>Built for the groove.</p>
        </div>
      </div>
    </footer>
  );
}
