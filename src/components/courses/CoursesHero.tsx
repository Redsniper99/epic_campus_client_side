import { BookOpen, Award, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const CoursesHero = () => {
    return (
        <section className="relative min-h-[60vh] pt-24 pb-16 overflow-hidden flex items-center">
            {/* Background */}
            <div className="absolute inset-0 gradient-hero" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

            <div className="relative container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-4">
                        <BookOpen className="w-4 h-4 text-accent" />
                        <span className="text-primary-foreground font-medium">50+ Courses Available</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight mb-3">
                        <span className="block">Master Japanese & Korean</span>
                        <span className="block mt-1 text-accent">With Our Expert Courses</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-base md:text-lg text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                        Comprehensive curriculum designed by native speakers. From beginner basics
                        to JLPT & TOPIK certification prep.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
                        {[
                            { icon: BookOpen, value: "50+", label: "Courses" },
                            { icon: Users, value: "5,000+", label: "Students" },
                            { icon: Award, value: "95%", label: "Pass Rate" },
                            { icon: Globe, value: "2", label: "Languages" },
                        ].map((stat, index) => (
                            <div key={index} className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-3 border border-primary-foreground/20">
                                <stat.icon className="w-5 h-5 text-accent mx-auto mb-1" />
                                <div className="text-lg font-bold text-primary-foreground">{stat.value}</div>
                                <div className="text-xs text-primary-foreground/60">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Wave divider */}
            <div className="absolute -bottom-1 left-0 right-0">
                <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path d="M0 60L60 52C120 45 240 30 360 22C480 15 600 15 720 18C840 22 960 30 1080 34C1200 37 1320 37 1380 37L1440 37V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="hsl(var(--background))" />
                </svg>
            </div>
        </section>
    );
};

export default CoursesHero;
