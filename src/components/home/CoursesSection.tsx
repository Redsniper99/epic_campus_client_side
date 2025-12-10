import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CourseCard from "./CourseCard";

const CoursesSection = () => {
  const courses = [
    {
      title: "JLPT N5 Complete Course - Japanese for Beginners",
      instructor: "Sensei Yamamoto",
      price: 12500,
      originalPrice: 18000,
      rating: 4.9,
      students: 1250,
      duration: "45 hours",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&h=400&fit=crop",
      hasLiveClass: true,
      isBestseller: true,
      language: "japanese" as const,
    },
    {
      title: "Korean Beginner - Learn Hangul & Basic Conversations",
      instructor: "Kim Soo-young",
      price: 9500,
      originalPrice: 14000,
      rating: 4.8,
      students: 890,
      duration: "32 hours",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=600&h=400&fit=crop",
      hasLiveClass: true,
      isBestseller: false,
      language: "korean" as const,
    },
    {
      title: "JLPT N4 Preparation - Intermediate Japanese Grammar",
      instructor: "Tanaka Kenji",
      price: 15000,
      originalPrice: 22000,
      rating: 4.7,
      students: 650,
      duration: "60 hours",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&h=400&fit=crop",
      hasLiveClass: true,
      isBestseller: false,
      language: "japanese" as const,
    },
    {
      title: "TOPIK Level 1 - Korean Proficiency Test Prep",
      instructor: "Park Min-jun",
      price: 11000,
      originalPrice: 16000,
      rating: 4.9,
      students: 720,
      duration: "40 hours",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=600&h=400&fit=crop",
      hasLiveClass: false,
      isBestseller: true,
      language: "korean" as const,
    },
    {
      title: "Business Japanese - Professional Communication",
      instructor: "Suzuki Yuki",
      price: 18500,
      originalPrice: 25000,
      rating: 4.8,
      students: 380,
      duration: "35 hours",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&h=400&fit=crop",
      hasLiveClass: true,
      isBestseller: false,
      language: "japanese" as const,
    },
    {
      title: "Korean Drama & K-Pop Language Learning",
      instructor: "Lee Hana",
      price: 7500,
      originalPrice: 12000,
      rating: 4.9,
      students: 1580,
      duration: "28 hours",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop",
      hasLiveClass: false,
      isBestseller: true,
      language: "korean" as const,
    },
  ];

  return (
    <section id="courses" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
            Popular Courses
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Start Your Language Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose from our carefully crafted courses taught by native speakers and certified instructors
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["All Courses", "🇯🇵 Japanese", "🇰🇷 Korean", "Live Classes", "Beginner"].map((filter, index) => (
            <button
              key={filter}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                index === 0
                  ? "bg-primary text-primary-foreground shadow-epic-sm"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {courses.map((course, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CourseCard {...course} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="gap-2 px-8">
            View All Courses
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;