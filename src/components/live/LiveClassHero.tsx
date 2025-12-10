"use client";

import { Video, Users, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const LiveClassHero = () => {
    return (
        <section className="relative min-h-screen pt-24 pb-32 overflow-hidden flex items-center">
            {/* Background */}
            <div className="absolute inset-0 gradient-hero" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

            {/* Live indicator */}
            <div className="absolute top-24 right-10 w-20 h-20 bg-red-500/20 rounded-full animate-ping" />

            <div className="relative container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Live Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 backdrop-blur-sm border border-red-500/30 mb-4">
                        <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-primary-foreground font-semibold">Live Classes</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight mb-3">
                        <span className="block">Learn with Native Speakers</span>
                        <span className="block mt-1 text-accent">In Real-Time</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-base md:text-lg text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                        Join interactive live sessions with expert instructors from Japan and Korea.
                        Ask questions, practice speaking, and get immediate feedback.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                        {[
                            { icon: Video, value: "100+", label: "Classes/Month" },
                            { icon: Users, value: "25", label: "Max Students" },
                            { icon: Calendar, value: "7 Days", label: "Weekly Schedule" },
                            { icon: Clock, value: "60 min", label: "Per Session" },
                        ].map((stat, index) => (
                            <div key={index} className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-3 border border-primary-foreground/20">
                                <stat.icon className="w-5 h-5 text-accent mx-auto mb-1" />
                                <div className="text-lg font-bold text-primary-foreground">{stat.value}</div>
                                <div className="text-xs text-primary-foreground/60">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Button size="lg" className="bg-accent hover:bg-epic-orange-dark text-accent-foreground px-6 py-5 text-base font-semibold shadow-glow">
                            Join Next Class
                        </Button>
                        <Button size="lg" className="bg-transparent border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-6 py-5 text-base">
                            View Full Schedule
                        </Button>
                    </div>
                </div>
            </div>

            {/* Wave divider - positioned at bottom */}
            <div className="absolute -bottom-1 left-0 right-0">
                <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="hsl(var(--background))" />
                </svg>
            </div>
        </section>
    );
};

export default LiveClassHero;

