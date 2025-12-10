"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";
import { Play, Pause, Volume2, Maximize, Settings, ChevronLeft, ChevronRight, Download, MessageSquare, FileText, List, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CoursePlayerPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const router = useRouter();
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeTab, setActiveTab] = useState<"overview" | "qa" | "notes" | "downloads">("overview");
    const [showQualityMenu, setShowQualityMenu] = useState(false);
    const [quality, setQuality] = useState("720p");
    const [currentLesson, setCurrentLesson] = useState(5);

    // Demo course data
    const course = {
        name: "JLPT N5 Grammar - Complete Course",
        currentLessonName: "Lesson 5: Particles は, が, を",
        instructor: "Sensei Yamamoto",
    };

    const lessons = [
        { id: 1, title: "Introduction to Japanese Grammar", duration: "12:30", completed: true },
        { id: 2, title: "Hiragana Review", duration: "18:45", completed: true },
        { id: 3, title: "Katakana Review", duration: "15:20", completed: true },
        { id: 4, title: "Basic Sentence Structure", duration: "22:10", completed: true },
        { id: 5, title: "Particles は, が, を", duration: "25:30", completed: false, current: true },
        { id: 6, title: "Particles に, へ, で", duration: "23:15", completed: false },
        { id: 7, title: "Verb Conjugation Basics", duration: "28:40", completed: false },
        { id: 8, title: "て-form Introduction", duration: "30:00", completed: false },
    ];

    const downloads = [
        { name: "Hiragana Writing Sheet.pdf", size: "1.2 MB" },
        { name: "Katakana Practice.pdf", size: "1.4 MB" },
        { name: "Lesson 5 - Particles Worksheet.pdf", size: "850 KB" },
        { name: "Vocabulary Flashcards.pdf", size: "2.1 MB" },
    ];

    const qualityOptions = ["Data Saver", "480p", "720p"];

    return (
        <main className="min-h-screen bg-gray-900">
            {/* Header */}
            <header className="bg-gray-800 border-b border-gray-700 px-2 sm:px-4 py-2 sm:py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                        <Button variant="ghost" size="sm" onClick={() => router.push("/dashboard")} className="text-gray-300 hover:text-white flex-shrink-0">
                            <ChevronLeft className="w-5 h-5" />
                            <span className="hidden sm:inline">Back</span>
                        </Button>
                        <div className="min-w-0">
                            <h1 className="text-white font-semibold text-sm sm:text-base truncate">{course.name}</h1>
                            <p className="text-gray-400 text-xs sm:text-sm truncate hidden sm:block">{course.currentLessonName}</p>
                        </div>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 flex-shrink-0">
                        <span className="hidden sm:inline">Lesson </span>{currentLesson}/{lessons.length}
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row">
                {/* Video Player Section */}
                <div className="flex-1">
                    {/* Video Container */}
                    <div className="relative aspect-video bg-black">
                        {/* Placeholder for video */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img
                                src="https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1280&h=720&fit=crop"
                                alt="Video thumbnail"
                                className="w-full h-full object-cover opacity-50"
                            />
                            {/* Play button overlay */}
                            {!isPlaying && (
                                <button
                                    onClick={() => setIsPlaying(true)}
                                    className="absolute w-20 h-20 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform"
                                >
                                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                                </button>
                            )}
                        </div>

                        {/* Video Controls */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                            {/* Progress bar */}
                            <div className="mb-3">
                                <div className="h-1 bg-gray-600 rounded-full overflow-hidden cursor-pointer hover:h-2 transition-all">
                                    <div className="h-full bg-primary w-[35%]" />
                                </div>
                            </div>

                            {/* Controls */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => setIsPlaying(!isPlaying)}
                                        className="text-white hover:text-primary transition-colors"
                                    >
                                        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                                    </button>
                                    <button className="text-white hover:text-primary transition-colors">
                                        <Volume2 className="w-5 h-5" />
                                    </button>
                                    <span className="text-white text-sm">8:55 / 25:30</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    {/* Quality Selector */}
                                    <div className="relative">
                                        <button
                                            onClick={() => setShowQualityMenu(!showQualityMenu)}
                                            className="flex items-center gap-1 text-white hover:text-primary transition-colors"
                                        >
                                            <Settings className="w-5 h-5" />
                                            <span className="text-sm">{quality}</span>
                                        </button>

                                        {showQualityMenu && (
                                            <div className="absolute bottom-full right-0 mb-2 bg-gray-800 rounded-lg border border-gray-700 py-2 min-w-[120px]">
                                                {qualityOptions.map((q) => (
                                                    <button
                                                        key={q}
                                                        onClick={() => { setQuality(q); setShowQualityMenu(false); }}
                                                        className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-700 ${quality === q ? "text-primary" : "text-white"
                                                            }`}
                                                    >
                                                        {q}
                                                        {quality === q && " ✓"}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <button className="text-white hover:text-primary transition-colors">
                                        <Maximize className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabs Section */}
                    <div className="bg-gray-800 border-t border-gray-700">
                        {/* Tab Headers */}
                        <div className="flex border-b border-gray-700 overflow-x-auto scrollbar-hide">
                            {[
                                { key: "overview", label: "Overview", icon: FileText },
                                { key: "qa", label: "Q&A", icon: MessageSquare },
                                { key: "notes", label: "Notes", icon: FileText },
                                { key: "downloads", label: "Downloads", icon: Download },
                            ].map((tab) => (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key as typeof activeTab)}
                                    className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${activeTab === tab.key
                                            ? "text-white bg-primary/20 border-b-2 border-primary"
                                            : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                                        }`}
                                >
                                    <tab.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="p-6">
                            {activeTab === "overview" && (
                                <div className="space-y-4">
                                    <h3 className="text-white text-lg font-semibold">Lesson 5: Particles は, が, を</h3>
                                    <p className="text-gray-200">
                                        In this lesson, you'll learn the three most essential particles in Japanese grammar.
                                        Understanding these particles is crucial for forming correct sentences.
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-200">
                                        <li><strong className="text-accent">は (wa)</strong> - Topic marker particle</li>
                                        <li><strong className="text-accent">が (ga)</strong> - Subject marker particle</li>
                                        <li><strong className="text-accent">を (wo)</strong> - Object marker particle</li>
                                    </ul>
                                </div>
                            )}

                            {activeTab === "qa" && (
                                <div>
                                    <div className="bg-gray-700/50 rounded-xl p-6 text-center">
                                        <MessageSquare className="w-10 h-10 mx-auto mb-3 text-gray-400" />
                                        <p className="text-gray-200 mb-4">Have a question? Ask your instructor!</p>
                                        <Button>Ask a Question</Button>
                                    </div>
                                </div>
                            )}

                            {activeTab === "notes" && (
                                <div>
                                    <textarea
                                        placeholder="Take notes while watching..."
                                        className="w-full h-40 bg-gray-700 border border-gray-600 rounded-xl p-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    />
                                    <Button className="mt-3">Save Notes</Button>
                                </div>
                            )}

                            {activeTab === "downloads" && (
                                <div className="space-y-3">
                                    {downloads.map((file, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between bg-gray-700/50 rounded-xl p-4 hover:bg-gray-700 transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                                                    <FileText className="w-5 h-5 text-red-400" />
                                                </div>
                                                <div>
                                                    <p className="text-white font-medium">{file.name}</p>
                                                    <p className="text-gray-400 text-sm">{file.size}</p>
                                                </div>
                                            </div>
                                            <Button variant="outline" size="sm" className="gap-2 border-gray-500 text-white hover:bg-gray-600 hover:text-white">
                                                <Download className="w-4 h-4" />
                                                Download
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Playlist Sidebar */}
                <div className="lg:w-80 bg-gray-800 border-l border-gray-700 lg:h-[calc(100vh-60px)] overflow-y-auto">
                    <div className="p-4 border-b border-gray-700">
                        <h3 className="text-white font-semibold flex items-center gap-2">
                            <List className="w-5 h-5" />
                            Course Content
                        </h3>
                        <p className="text-gray-400 text-sm">4/{lessons.length} completed</p>
                    </div>

                    <div className="divide-y divide-gray-700">
                        {lessons.map((lesson) => {
                            const isSelected = currentLesson === lesson.id;
                            return (
                                <button
                                    key={lesson.id}
                                    onClick={() => setCurrentLesson(lesson.id)}
                                    className={`w-full p-4 text-left transition-colors ${isSelected
                                        ? "bg-primary text-white"
                                        : "hover:bg-gray-700/50"
                                        }`}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${lesson.completed
                                            ? "bg-green-500"
                                            : isSelected
                                                ? "bg-white/20"
                                                : "bg-gray-600"
                                            }`}>
                                            {lesson.completed ? (
                                                <CheckCircle className="w-4 h-4 text-white" />
                                            ) : (
                                                <span className={`text-xs font-medium ${isSelected ? "text-white" : "text-gray-300"}`}>
                                                    {lesson.id}
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className={`text-sm font-medium ${isSelected
                                                ? "text-white"
                                                : lesson.completed
                                                    ? "text-gray-300"
                                                    : "text-white"
                                                }`}>
                                                {lesson.title}
                                            </p>
                                            <p className={`text-xs flex items-center gap-1 mt-1 ${isSelected ? "text-white/70" : "text-gray-500"
                                                }`}>
                                                <Clock className="w-3 h-3" />
                                                {lesson.duration}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
}
