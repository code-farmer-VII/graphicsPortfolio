import Hero from "@/components/Hero";
import About from "@/components/About";
import { PortfolioSection } from "@/components/PortfolioSection";
import { portfolios } from "@/constant/portfolio";
import MileStone from "@/components/MileStone";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <About /> */}
      <PortfolioSection data={portfolios} title="My Portfolio" />
      <MileStone />
      <Contact />
      <Footer />
    </div>
  );
}
