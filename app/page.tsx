import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <main className="flex flex-col lg:flex-row">
        {/* Left: 60% — sticky hero */}
        <div className="w-full lg:w-[60%]">
          <Hero />
        </div>

        {/* Right: 40% — scrollable menu */}
        <div className="w-full lg:w-[40%]">
          <MenuSection />
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
