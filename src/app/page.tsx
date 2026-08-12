import { Navigation } from "@/components/Navigation";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { Countdown } from "@/components/Countdown";
import { Story } from "@/components/Story";
import { Timeline } from "@/components/Timeline";
import { NumberFour } from "@/components/NumberFour";
import { WeddingDetails } from "@/components/WeddingDetails";
import { DressCode } from "@/components/DressCode";
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
        <Countdown />
        <Story />
        <Timeline />
        <NumberFour />
        <WeddingDetails />
        <DressCode />
        <RSVP />
        <Gifts />
        <FinalMessage />
      </main>
      <Footer />
    </>
  );
}
