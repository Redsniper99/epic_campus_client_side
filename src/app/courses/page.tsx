import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CoursesHero from "@/components/courses/CoursesHero";
import CourseFilters from "@/components/courses/CourseFilters";
import CourseGrid from "@/components/courses/CourseGrid";
import CourseCTA from "@/components/courses/CourseCTA";

export const metadata = {
    title: "Courses - Epic Campus",
    description: "Explore our comprehensive Japanese and Korean language courses. From beginner to advanced, JLPT & TOPIK preparation, and specialized programs.",
};

export default function CoursesPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <CoursesHero />
            <CourseFilters />
            <CourseGrid />
            <CourseCTA />
            <Footer />
        </main>
    );
}
