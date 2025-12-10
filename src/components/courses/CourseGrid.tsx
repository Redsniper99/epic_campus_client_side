"use client";

import { Clock, Users, Star, Play, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CourseGrid = () => {
    const courses = [
        {
            id: 1,
            title: "Japanese for Absolute Beginners",
            description: "Start your journey with hiragana, katakana, and basic conversation skills.",
            image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&h=250&fit=crop",
            language: "japanese",
            level: "Beginner",
            duration: "8 weeks",
            lessons: 32,
            students: 1250,
            rating: 4.9,
            price: "LKR 9,999",
            originalPrice: "LKR 14,999",
            isBestseller: true,
            isNew: false,
        },
        {
            id: 2,
            title: "JLPT N5 Complete Preparation",
            description: "Master all skills needed to pass the JLPT N5 certification exam.",
            image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=400&h=250&fit=crop",
            language: "japanese",
            level: "Beginner",
            duration: "12 weeks",
            lessons: 48,
            students: 890,
            rating: 4.8,
            price: "LKR 14,999",
            originalPrice: "LKR 19,999",
            isBestseller: true,
            isNew: false,
        },
        {
            id: 3,
            title: "Korean Hangul Mastery",
            description: "Learn to read and write Korean alphabet in just 2 weeks.",
            image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=400&h=250&fit=crop",
            language: "korean",
            level: "Beginner",
            duration: "2 weeks",
            lessons: 10,
            students: 2100,
            rating: 4.9,
            price: "LKR 4,999",
            originalPrice: "LKR 7,999",
            isBestseller: false,
            isNew: true,
        },
        {
            id: 4,
            title: "TOPIK I Preparation Course",
            description: "Comprehensive preparation for TOPIK Level 1 & 2 certification.",
            image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=400&h=250&fit=crop",
            language: "korean",
            level: "Intermediate",
            duration: "10 weeks",
            lessons: 40,
            students: 650,
            rating: 4.7,
            price: "LKR 12,999",
            originalPrice: "LKR 17,999",
            isBestseller: false,
            isNew: false,
        },
        {
            id: 5,
            title: "Business Japanese",
            description: "Professional Japanese for workplace communication and etiquette.",
            image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=400&h=250&fit=crop",
            language: "japanese",
            level: "Intermediate",
            duration: "6 weeks",
            lessons: 24,
            students: 420,
            rating: 4.8,
            price: "LKR 11,999",
            originalPrice: "LKR 15,999",
            isBestseller: false,
            isNew: false,
        },
        {
            id: 6,
            title: "K-Drama Korean",
            description: "Learn conversational Korean through popular K-Drama dialogues.",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
            language: "korean",
            level: "Beginner",
            duration: "4 weeks",
            lessons: 16,
            students: 1800,
            rating: 4.9,
            price: "LKR 6,999",
            originalPrice: "LKR 9,999",
            isBestseller: true,
            isNew: false,
        },
        {
            id: 7,
            title: "JLPT N4 Intensive",
            description: "Accelerated preparation for JLPT N4 with practice tests.",
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=250&fit=crop",
            language: "japanese",
            level: "Intermediate",
            duration: "10 weeks",
            lessons: 40,
            students: 580,
            rating: 4.7,
            price: "LKR 16,999",
            originalPrice: "LKR 22,999",
            isBestseller: false,
            isNew: false,
        },
        {
            id: 8,
            title: "Korean Pronunciation Clinic",
            description: "Perfect your Korean accent with native speaker guidance.",
            image: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?w=400&h=250&fit=crop",
            language: "korean",
            level: "All Levels",
            duration: "3 weeks",
            lessons: 12,
            students: 320,
            rating: 4.8,
            price: "LKR 5,999",
            originalPrice: "LKR 8,999",
            isBestseller: false,
            isNew: true,
        },
    ];

    return (
        <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
                {/* Results count */}
                <div className="flex items-center justify-between mb-8">
                    <p className="text-muted-foreground">
                        Showing <span className="font-semibold text-foreground">{courses.length}</span> courses
                    </p>
                    <select className="px-4 py-2 rounded-lg border border-border bg-background text-foreground text-sm">
                        <option>Most Popular</option>
                        <option>Newest</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Highest Rated</option>
                    </select>
                </div>

                {/* Course Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-epic-lg transition-all group"
                        >
                            {/* Image */}
                            <div className="relative h-40 overflow-hidden">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                {/* Badges */}
                                <div className="absolute top-3 left-3 flex gap-2">
                                    {course.isBestseller && (
                                        <Badge className="bg-accent text-accent-foreground">Bestseller</Badge>
                                    )}
                                    {course.isNew && (
                                        <Badge className="bg-epic-success text-white">New</Badge>
                                    )}
                                </div>

                                {/* Language flag */}
                                <div className="absolute top-3 right-3 text-2xl">
                                    {course.language === "japanese" ? "🇯🇵" : "🇰🇷"}
                                </div>

                                {/* Preview button */}
                                <button className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Play className="w-5 h-5 text-primary fill-primary" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                {/* Level */}
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                                        {course.level}
                                    </span>
                                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {course.duration}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="font-bold text-card-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                                    {course.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                                    {course.description}
                                </p>

                                {/* Stats */}
                                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                                    <span className="flex items-center gap-1">
                                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                        {course.rating}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Users className="w-3 h-3" />
                                        {course.students.toLocaleString()}
                                    </span>
                                    <span>{course.lessons} lessons</span>
                                </div>

                                {/* Price & CTA */}
                                <div className="flex items-center justify-between pt-3 border-t border-border">
                                    <div>
                                        <span className="text-lg font-bold text-card-foreground">{course.price}</span>
                                        <span className="text-sm text-muted-foreground line-through ml-2">
                                            {course.originalPrice}
                                        </span>
                                    </div>
                                    <Button size="sm" className="gap-1">
                                        Enroll
                                        <ChevronRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-10">
                    <Button variant="outline" size="lg" className="gap-2">
                        Load More Courses
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CourseGrid;
