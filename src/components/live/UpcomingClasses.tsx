"use client";

import { useState } from "react";
import { Calendar, Clock, Users, Play, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const UpcomingClasses = () => {
    const [activeTab, setActiveTab] = useState<"japanese" | "korean">("japanese");

    const classes = {
        japanese: [
            {
                id: 1,
                title: "JLPT N5 Grammar Intensive",
                instructor: "Sensei Yamamoto",
                instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                date: "Today",
                time: "7:00 PM SLST",
                duration: "60 min",
                enrolled: 18,
                maxStudents: 25,
                level: "Beginner",
                isLive: true,
            },
            {
                id: 2,
                title: "Japanese Conversation Practice",
                instructor: "Sensei Tanaka",
                instructorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
                date: "Tomorrow",
                time: "6:30 PM SLST",
                duration: "45 min",
                enrolled: 12,
                maxStudents: 20,
                level: "Intermediate",
                isLive: false,
            },
            {
                id: 3,
                title: "Kanji Writing Workshop",
                instructor: "Sensei Suzuki",
                instructorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
                date: "Wed, Dec 13",
                time: "5:00 PM SLST",
                duration: "90 min",
                enrolled: 8,
                maxStudents: 15,
                level: "All Levels",
                isLive: false,
            },
        ],
        korean: [
            {
                id: 4,
                title: "Hangul Mastery for Beginners",
                instructor: "선생님 Kim",
                instructorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                date: "Today",
                time: "8:30 PM SLST",
                duration: "60 min",
                enrolled: 22,
                maxStudents: 25,
                level: "Beginner",
                isLive: false,
            },
            {
                id: 5,
                title: "TOPIK I Preparation",
                instructor: "선생님 Park",
                instructorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
                date: "Tomorrow",
                time: "7:00 PM SLST",
                duration: "75 min",
                enrolled: 15,
                maxStudents: 20,
                level: "Intermediate",
                isLive: false,
            },
            {
                id: 6,
                title: "K-Drama Vocabulary Class",
                instructor: "선생님 Lee",
                instructorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
                date: "Fri, Dec 15",
                time: "6:00 PM SLST",
                duration: "60 min",
                enrolled: 20,
                maxStudents: 25,
                level: "All Levels",
                isLive: false,
            },
        ],
    };

    return (
        <section className="py-20 bg-background" id="schedule">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                        Class Schedule
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                        Upcoming Live Classes
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Join our interactive sessions taught by native speakers
                    </p>
                </div>

                {/* Language Tabs */}
                <div className="flex justify-center gap-4 mb-10">
                    <button
                        onClick={() => setActiveTab("japanese")}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all ${activeTab === "japanese"
                                ? "bg-primary text-primary-foreground shadow-epic-md"
                                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                            }`}
                    >
                        🇯🇵 Japanese
                    </button>
                    <button
                        onClick={() => setActiveTab("korean")}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all ${activeTab === "korean"
                                ? "bg-primary text-primary-foreground shadow-epic-md"
                                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                            }`}
                    >
                        🇰🇷 Korean
                    </button>
                </div>

                {/* Class Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {classes[activeTab].map((classItem) => (
                        <div
                            key={classItem.id}
                            className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-epic-lg transition-all group"
                        >
                            {/* Header */}
                            <div className="p-5 border-b border-border">
                                <div className="flex items-start justify-between mb-3">
                                    <Badge
                                        variant={classItem.isLive ? "destructive" : "secondary"}
                                        className={classItem.isLive ? "animate-pulse" : ""}
                                    >
                                        {classItem.isLive ? "🔴 Live Now" : classItem.level}
                                    </Badge>
                                    {classItem.isLive && (
                                        <span className="text-sm text-muted-foreground">
                                            {classItem.enrolled}/{classItem.maxStudents} joined
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-lg font-bold text-card-foreground group-hover:text-primary transition-colors">
                                    {classItem.title}
                                </h3>
                            </div>

                            {/* Body */}
                            <div className="p-5">
                                {/* Instructor */}
                                <div className="flex items-center gap-3 mb-4">
                                    <img
                                        src={classItem.instructorImage}
                                        alt={classItem.instructor}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div>
                                        <div className="font-medium text-card-foreground">{classItem.instructor}</div>
                                        <div className="text-sm text-muted-foreground">Instructor</div>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Calendar className="w-4 h-4" />
                                        <span>{classItem.date}</span>
                                        <span className="mx-1">•</span>
                                        <Clock className="w-4 h-4" />
                                        <span>{classItem.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Users className="w-4 h-4" />
                                        <span>{classItem.enrolled}/{classItem.maxStudents} students</span>
                                        <span className="mx-1">•</span>
                                        <span>{classItem.duration}</span>
                                    </div>
                                </div>

                                {/* Progress bar */}
                                <div className="mb-4">
                                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                                        <span>Spots filled</span>
                                        <span>{Math.round((classItem.enrolled / classItem.maxStudents) * 100)}%</span>
                                    </div>
                                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-accent rounded-full transition-all"
                                            style={{ width: `${(classItem.enrolled / classItem.maxStudents) * 100}%` }}
                                        />
                                    </div>
                                </div>

                                {/* CTA */}
                                <Button
                                    className={`w-full gap-2 ${classItem.isLive
                                            ? "bg-red-500 hover:bg-red-600 text-white"
                                            : "bg-primary hover:bg-primary/90 text-primary-foreground"
                                        }`}
                                >
                                    {classItem.isLive ? (
                                        <>
                                            <Play className="w-4 h-4" />
                                            Join Now
                                        </>
                                    ) : (
                                        <>
                                            Reserve Spot
                                            <ChevronRight className="w-4 h-4" />
                                        </>
                                    )}
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Link */}
                <div className="text-center mt-10">
                    <Button variant="link" className="text-primary gap-1">
                        View Full Monthly Schedule
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default UpcomingClasses;
