import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import OurValues from "@/components/about/OurValues";
import OurTeam from "@/components/about/OurTeam";
import CulturalBridge from "@/components/about/CulturalBridge";

export const metadata = {
    title: "About Us - Epic Campus",
    description: "Learn about Epic Campus - Sri Lanka's premier Japanese and Korean language learning platform. Our story, mission, and the team behind your language journey.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <AboutHero />
            <OurStory />
            <OurValues />
            <OurTeam />
            <CulturalBridge />
            <Footer />
        </main>
    );
}
