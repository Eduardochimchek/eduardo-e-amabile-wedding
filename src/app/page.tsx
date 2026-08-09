import { Navigation } from "@/components/Navigation";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Timeline } from "@/components/Timeline";
import { NumberFour } from "@/components/NumberFour";
import { Family } from "@/components/Family";
import { WeddingDetails } from "@/components/WeddingDetails";
import { RSVP } from "@/components/RSVP";
import { Gifts } from "@/components/Gifts";
import { FinalMessage } from "@/components/FinalMessage";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main id="conteudo">
        <Hero />
        <Story />
        <Timeline />
        <NumberFour />
        <Family />
        <WeddingDetails />
        <RSVP />
        <Gifts />
        <FinalMessage />
      </main>
      <Footer />
    </>
  );
}
