import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import CoursesSection from "@/components/home/CoursesSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import DashboardPreview from "@/components/home/DashboardPreview";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CoursesSection />
      <FeaturesSection />
      <DashboardPreview />
      <CTASection />
      <Footer />
    </main>
  );
}
