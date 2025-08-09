import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustSection } from "@/components/TrustSection";
import { ProductShowcase } from "@/components/ProductShowcase";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { LocationsSection } from "@/components/LocationsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <ProductShowcase />
      <TestimonialsSection />
      <LocationsSection />
      <Footer />
    </div>
  );
};

export default Index;
