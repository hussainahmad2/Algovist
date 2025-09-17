import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedProjectSection from "@/components/FeaturedProjectSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <FeaturedProjectSection />
      <ServicesSection />
      <TeamSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
