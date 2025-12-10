"use client";

import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const CourseFilters = () => {
    const [activeLanguage, setActiveLanguage] = useState<"all" | "japanese" | "korean">("all");
    const [activeLevel, setActiveLevel] = useState<string>("all");

    const levels = ["All Levels", "Beginner", "Intermediate", "Advanced", "Certification"];

    return (
        <section className="py-8 bg-background border-b border-border sticky top-16 md:top-20 z-40 backdrop-blur-lg bg-background/95">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Search */}
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search courses..."
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                    </div>

                    {/* Language Filter */}
                    <div className="flex items-center gap-2">
                        {[
                            { key: "all", label: "All" },
                            { key: "japanese", label: "🇯🇵 Japanese" },
                            { key: "korean", label: "🇰🇷 Korean" },
                        ].map((lang) => (
                            <button
                                key={lang.key}
                                onClick={() => setActiveLanguage(lang.key as typeof activeLanguage)}
                                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${activeLanguage === lang.key
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                    }`}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>

                    {/* Level Filter */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
                        {levels.map((level) => (
                            <button
                                key={level}
                                onClick={() => setActiveLevel(level === "All Levels" ? "all" : level.toLowerCase())}
                                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${(level === "All Levels" && activeLevel === "all") ||
                                        level.toLowerCase() === activeLevel
                                        ? "bg-accent text-accent-foreground"
                                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                                    }`}
                            >
                                {level}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseFilters;
