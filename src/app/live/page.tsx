import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LiveClassHero from "@/components/live/LiveClassHero";
import UpcomingClasses from "@/components/live/UpcomingClasses";
import Instructors from "@/components/live/Instructors";
import HowItWorks from "@/components/live/HowItWorks";
import LiveClassCTA from "@/components/live/LiveClassCTA";

export const metadata = {
    title: "Live Classes - Epic Campus",
    description: "Join live interactive Japanese and Korean language classes with expert instructors. Real-time learning with native speakers.",
};

export default function LiveClassesPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <LiveClassHero />
            <UpcomingClasses />
            <Instructors />
            <HowItWorks />
            <LiveClassCTA />
            <Footer />
        </main>
    );
}
