import { About } from "@/components/About";
import { CTASection } from "@/components/CTASection";
import { EventTicker } from "@/components/EventTicker";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Partners } from "@/components/Partners";
import { Services } from "@/components/Services";
import { Showcase } from "@/components/Showcase";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EventTicker />
        <Services />
        <Showcase />
        <About />
        <Partners />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
