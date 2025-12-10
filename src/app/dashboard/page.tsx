"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Calendar, Clock, Video, BookOpen, Bell, CheckCircle, AlertCircle, Play, ChevronRight, LogOut, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
    const router = useRouter();
    const [user, setUser] = useState<{ name: string; email: string } | null>(null);
    const [currentTime, setCurrentTime] = useState(new Date());

    // Check if user is logged in
    useEffect(() => {
        const storedUser = localStorage.getItem("epicUser");
        if (!storedUser) {
            router.push("/login");
            return;
        }
        setUser(JSON.parse(storedUser));
    }, [router]);

    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("epicUser");
        router.push("/login");
    };

    // Demo data for live class
    const nextClass = {
        name: "JLPT N5 Grammar - Lesson 12",
        instructor: "Sensei Yamamoto",
        date: "Today",
        time: "7:00 PM SLST",
        startTime: new Date(new Date().setHours(19, 0, 0, 0)), // 7 PM today
        duration: "60 minutes",
    };

    // Check if class is joinable (5 minutes before)
    const classStartTime = nextClass.startTime.getTime();
    const fiveMinutesBefore = classStartTime - 5 * 60 * 1000;
    const isClassJoinable = currentTime.getTime() >= fiveMinutesBefore && currentTime.getTime() <= classStartTime + 60 * 60 * 1000;
    const minutesUntilJoinable = Math.max(0, Math.ceil((fiveMinutesBefore - currentTime.getTime()) / 60000));

    // Demo courses with progress
    const myCourses = [
        { id: 1, name: "Japanese for Beginners", progress: 65, lessonsCompleted: 21, totalLessons: 32, image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=200&h=120&fit=crop" },
        { id: 2, name: "JLPT N5 Complete", progress: 40, lessonsCompleted: 19, totalLessons: 48, image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=200&h=120&fit=crop" },
        { id: 3, name: "Korean Hangul Mastery", progress: 100, lessonsCompleted: 10, totalLessons: 10, image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=200&h=120&fit=crop" },
        { id: 4, name: "K-Drama Korean", progress: 25, lessonsCompleted: 4, totalLessons: 16, image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=120&fit=crop" },
    ];

    // Demo notifications
    const notifications = [
        { id: 1, type: "success", title: "Payment Approved", message: "Your payment for 'TOPIK I Preparation' has been approved.", time: "2 hours ago" },
        { id: 2, type: "info", title: "Homework Feedback", message: "Sensei Tanaka has reviewed your Kanji writing assignment.", time: "5 hours ago" },
        { id: 3, type: "warning", title: "Class Reminder", message: "Your live class 'JLPT N5 Grammar' starts in 2 hours.", time: "Just now" },
    ];

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-secondary/30">
            {/* Header */}
            <header className="bg-card border-b border-border sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-lg">E</span>
                        </div>
                        <div>
                            <h1 className="font-bold text-foreground">Epic Campus</h1>
                            <p className="text-xs text-muted-foreground">Student Dashboard</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="text-right hidden sm:block">
                            <p className="font-medium text-foreground">{user.name}</p>
                            <p className="text-xs text-muted-foreground">{user.email}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon">
                                <Settings className="w-5 h-5" />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={handleLogout}>
                                <LogOut className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8">
                {/* Welcome Message */}
                <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                        Welcome back, {user.name.split(" ")[0]}! 👋
                    </h2>
                    <p className="text-muted-foreground">
                        {currentTime.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                    </p>
                </div>

                {/* Live Class Schedule Card */}
                <div className="bg-card rounded-2xl border border-border p-6 mb-8 shadow-epic-sm">
                    <div className="flex items-center gap-2 mb-4">
                        <Video className="w-5 h-5 text-red-500" />
                        <h3 className="font-bold text-card-foreground">Live Class Schedule</h3>
                        <Badge variant="secondary" className="ml-auto">Today</Badge>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 items-center">
                        {/* Class Info */}
                        <div className="md:col-span-2">
                            <h4 className="text-xl font-bold text-card-foreground mb-2">
                                {nextClass.name}
                            </h4>
                            <p className="text-muted-foreground mb-3">with {nextClass.instructor}</p>

                            <div className="flex flex-wrap items-center gap-4 text-sm">
                                <span className="flex items-center gap-1 text-muted-foreground">
                                    <Calendar className="w-4 h-4" />
                                    {nextClass.date}
                                </span>
                                <span className="flex items-center gap-1 text-muted-foreground">
                                    <Clock className="w-4 h-4" />
                                    {nextClass.time}
                                </span>
                                <span className="text-muted-foreground">
                                    ⏱️ {nextClass.duration}
                                </span>
                            </div>
                        </div>

                        {/* Join Button with Traffic Light System */}
                        <div className="text-center">
                            {isClassJoinable ? (
                                <Button
                                    size="lg"
                                    className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white py-6 px-8 text-lg font-bold gap-2 animate-pulse"
                                    onClick={() => router.push("/waiting-room")}
                                >
                                    <Play className="w-5 h-5" />
                                    Join Now
                                </Button>
                            ) : (
                                <Button
                                    size="lg"
                                    disabled
                                    className="w-full md:w-auto bg-gray-400 text-gray-600 py-6 px-8 text-lg font-bold gap-2 cursor-not-allowed"
                                >
                                    <Clock className="w-5 h-5" />
                                    Wait
                                </Button>
                            )}
                            <p className="text-xs text-muted-foreground mt-2">
                                {isClassJoinable
                                    ? "🟢 Class is ready to join!"
                                    : `🔴 Opens in ${minutesUntilJoinable} minutes`}
                            </p>
                            {/* Demo Mode - Always accessible */}
                            <button
                                onClick={() => router.push("/waiting-room")}
                                className="mt-3 text-sm text-primary hover:text-accent underline underline-offset-2"
                            >
                                🎬 Try Demo Mode
                            </button>
                        </div>
                    </div>
                </div>

                {/* My Courses Grid */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                            <BookOpen className="w-5 h-5" />
                            My Courses
                        </h3>
                        <Button variant="link" className="text-primary">
                            View All <ChevronRight className="w-4 h-4" />
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {myCourses.map((course) => (
                            <div
                                key={course.id}
                                className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-epic-md transition-all cursor-pointer group"
                                onClick={() => router.push(`/course/${course.id}`)}
                            >
                                <div className="relative h-24 overflow-hidden">
                                    <img
                                        src={course.image}
                                        alt={course.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    {course.progress === 100 && (
                                        <div className="absolute inset-0 bg-green-500/90 flex items-center justify-center">
                                            <CheckCircle className="w-8 h-8 text-white" />
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold text-card-foreground text-sm mb-2 line-clamp-1">
                                        {course.name}
                                    </h4>
                                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                                        <span>{course.lessonsCompleted}/{course.totalLessons} lessons</span>
                                        <span className="font-medium text-primary">{course.progress}%</span>
                                    </div>
                                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                        <div
                                            className={`h-full rounded-full transition-all ${course.progress === 100 ? "bg-green-500" : "bg-primary"
                                                }`}
                                            style={{ width: `${course.progress}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Homework & Quizzes Quick Access */}
                <div className="mb-8">
                    <div
                        onClick={() => router.push("/homework")}
                        className="bg-gradient-to-r from-primary to-epic-navy rounded-2xl p-6 cursor-pointer hover:shadow-epic-lg transition-all"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-primary-foreground mb-2">
                                    📝 Homework & Quizzes
                                </h3>
                                <p className="text-primary-foreground/80">
                                    You have 3 pending assignments and 3 quizzes available
                                </p>
                            </div>
                            <ChevronRight className="w-8 h-8 text-primary-foreground/60" />
                        </div>
                    </div>
                </div>

                {/* Notifications */}
                <div>
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2 mb-4">
                        <Bell className="w-5 h-5" />
                        Notifications
                    </h3>

                    <div className="space-y-3">
                        {notifications.map((notification) => (
                            <div
                                key={notification.id}
                                className={`bg-card rounded-xl border p-4 flex gap-4 ${notification.type === "warning" ? "border-amber-300 bg-amber-50/50" : "border-border"
                                    }`}
                            >
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${notification.type === "success" ? "bg-green-100 text-green-600" :
                                    notification.type === "warning" ? "bg-amber-100 text-amber-600" :
                                        "bg-blue-100 text-blue-600"
                                    }`}>
                                    {notification.type === "success" ? <CheckCircle className="w-5 h-5" /> :
                                        notification.type === "warning" ? <AlertCircle className="w-5 h-5" /> :
                                            <Bell className="w-5 h-5" />}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-card-foreground">{notification.title}</h4>
                                    <p className="text-sm text-muted-foreground">{notification.message}</p>
                                    <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
