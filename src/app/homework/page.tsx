"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    FileText, CheckCircle, Clock, AlertCircle, Upload,
    ChevronRight, Calendar, BookOpen, Award, Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HomeworkPage() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<"pending" | "submitted" | "graded">("pending");

    // Demo homework data
    const homework = {
        pending: [
            {
                id: 1,
                title: "Hiragana Writing Practice - Week 3",
                course: "Japanese for Beginners",
                dueDate: "Dec 15, 2024",
                daysLeft: 4,
                type: "Writing",
                description: "Practice writing hiragana characters あ-こ (a-ko). Submit a photo of your handwritten work.",
            },
            {
                id: 2,
                title: "Verb Conjugation Worksheet",
                course: "JLPT N5 Grammar",
                dueDate: "Dec 18, 2024",
                daysLeft: 7,
                type: "Worksheet",
                description: "Complete the verb conjugation exercises from page 45-48 in your workbook.",
            },
            {
                id: 3,
                title: "Korean Numbers Quiz Prep",
                course: "Korean Hangul Mastery",
                dueDate: "Dec 20, 2024",
                daysLeft: 9,
                type: "Practice",
                description: "Practice counting 1-100 in native Korean numbers. Record yourself counting.",
            },
        ],
        submitted: [
            {
                id: 4,
                title: "Katakana Reading Exercise",
                course: "Japanese for Beginners",
                submittedDate: "Dec 8, 2024",
                type: "Reading",
                status: "Under Review",
            },
        ],
        graded: [
            {
                id: 5,
                title: "Self Introduction Essay",
                course: "Japanese for Beginners",
                submittedDate: "Dec 1, 2024",
                gradedDate: "Dec 3, 2024",
                type: "Essay",
                score: 92,
                feedback: "Excellent work! Your sentence structure is natural. Practice more keigo for formal situations.",
            },
            {
                id: 6,
                title: "Particle Usage Test",
                course: "JLPT N5 Grammar",
                submittedDate: "Nov 28, 2024",
                gradedDate: "Nov 30, 2024",
                type: "Test",
                score: 85,
                feedback: "Good understanding of は and が. Review the difference between に and へ.",
            },
        ],
    };

    const quizzes = [
        {
            id: 1,
            title: "Hiragana Recognition Quiz",
            course: "Japanese for Beginners",
            questions: 20,
            duration: "15 min",
            status: "available",
            bestScore: null,
        },
        {
            id: 2,
            title: "JLPT N5 Vocabulary - Week 3",
            course: "JLPT N5 Grammar",
            questions: 30,
            duration: "20 min",
            status: "available",
            bestScore: 88,
        },
        {
            id: 3,
            title: "Korean Consonants Test",
            course: "Korean Hangul Mastery",
            questions: 14,
            duration: "10 min",
            status: "completed",
            bestScore: 100,
        },
    ];

    return (
        <main className="min-h-screen bg-secondary/30">
            {/* Header */}
            <header className="bg-card border-b border-border sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" onClick={() => router.push("/dashboard")} className="gap-2">
                            <ChevronRight className="w-4 h-4 rotate-180" />
                            Dashboard
                        </Button>
                        <div className="h-4 w-px bg-border" />
                        <h1 className="font-bold text-foreground flex items-center gap-2">
                            <FileText className="w-5 h-5" />
                            Homework & Quizzes
                        </h1>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8">
                {/* Stats Cards */}
                <div className="grid md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-card rounded-xl border border-border p-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                                <Clock className="w-5 h-5 text-amber-600" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-card-foreground">{homework.pending.length}</p>
                                <p className="text-sm text-muted-foreground">Pending</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card rounded-xl border border-border p-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                <Upload className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-card-foreground">{homework.submitted.length}</p>
                                <p className="text-sm text-muted-foreground">Submitted</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card rounded-xl border border-border p-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-card-foreground">{homework.graded.length}</p>
                                <p className="text-sm text-muted-foreground">Graded</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card rounded-xl border border-border p-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                                <Award className="w-5 h-5 text-purple-600" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-card-foreground">88%</p>
                                <p className="text-sm text-muted-foreground">Avg. Score</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Homework Section */}
                    <div className="lg:col-span-2">
                        <div className="bg-card rounded-2xl border border-border overflow-hidden">
                            {/* Tabs */}
                            <div className="flex border-b border-border">
                                {[
                                    { key: "pending", label: "Pending", count: homework.pending.length },
                                    { key: "submitted", label: "Submitted", count: homework.submitted.length },
                                    { key: "graded", label: "Graded", count: homework.graded.length },
                                ].map((tab) => (
                                    <button
                                        key={tab.key}
                                        onClick={() => setActiveTab(tab.key as typeof activeTab)}
                                        className={`flex-1 px-4 py-4 text-sm font-medium transition-colors ${activeTab === tab.key
                                                ? "text-primary border-b-2 border-primary bg-primary/5"
                                                : "text-muted-foreground hover:text-foreground"
                                            }`}
                                    >
                                        {tab.label}
                                        <Badge variant="secondary" className="ml-2">{tab.count}</Badge>
                                    </button>
                                ))}
                            </div>

                            {/* Content */}
                            <div className="p-4 space-y-4">
                                {activeTab === "pending" && homework.pending.map((hw) => (
                                    <div key={hw.id} className="bg-secondary/30 rounded-xl p-4 hover:bg-secondary/50 transition-colors">
                                        <div className="flex items-start justify-between mb-2">
                                            <div>
                                                <h3 className="font-semibold text-card-foreground">{hw.title}</h3>
                                                <p className="text-sm text-muted-foreground">{hw.course}</p>
                                            </div>
                                            <Badge variant={hw.daysLeft <= 3 ? "destructive" : "secondary"}>
                                                {hw.daysLeft} days left
                                            </Badge>
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-3">{hw.description}</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    Due: {hw.dueDate}
                                                </span>
                                                <Badge variant="outline">{hw.type}</Badge>
                                            </div>
                                            <Button size="sm" onClick={() => router.push(`/homework/${hw.id}`)}>
                                                Submit Work
                                            </Button>
                                        </div>
                                    </div>
                                ))}

                                {activeTab === "submitted" && homework.submitted.map((hw) => (
                                    <div key={hw.id} className="bg-secondary/30 rounded-xl p-4">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="font-semibold text-card-foreground">{hw.title}</h3>
                                                <p className="text-sm text-muted-foreground">{hw.course}</p>
                                                <p className="text-sm text-muted-foreground mt-2">
                                                    Submitted: {hw.submittedDate}
                                                </p>
                                            </div>
                                            <Badge className="bg-blue-100 text-blue-700">{hw.status}</Badge>
                                        </div>
                                    </div>
                                ))}

                                {activeTab === "graded" && homework.graded.map((hw) => (
                                    <div key={hw.id} className="bg-secondary/30 rounded-xl p-4">
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <h3 className="font-semibold text-card-foreground">{hw.title}</h3>
                                                <p className="text-sm text-muted-foreground">{hw.course}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className={`text-2xl font-bold ${hw.score >= 90 ? "text-green-600" : hw.score >= 70 ? "text-amber-600" : "text-red-600"}`}>
                                                    {hw.score}%
                                                </p>
                                                <p className="text-xs text-muted-foreground">Graded: {hw.gradedDate}</p>
                                            </div>
                                        </div>
                                        <div className="bg-card rounded-lg p-3 border border-border">
                                            <p className="text-sm text-muted-foreground">
                                                <span className="font-medium text-card-foreground">Feedback:</span> {hw.feedback}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quizzes Section */}
                    <div>
                        <div className="bg-card rounded-2xl border border-border p-6">
                            <h2 className="font-bold text-card-foreground flex items-center gap-2 mb-4">
                                <BookOpen className="w-5 h-5" />
                                Available Quizzes
                            </h2>

                            <div className="space-y-4">
                                {quizzes.map((quiz) => (
                                    <div key={quiz.id} className="bg-secondary/30 rounded-xl p-4">
                                        <h3 className="font-semibold text-card-foreground mb-1">{quiz.title}</h3>
                                        <p className="text-sm text-muted-foreground mb-3">{quiz.course}</p>

                                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                                            <span>{quiz.questions} questions</span>
                                            <span>•</span>
                                            <span>{quiz.duration}</span>
                                        </div>

                                        {quiz.bestScore !== null && (
                                            <div className="flex items-center gap-2 mb-3">
                                                <Award className={`w-4 h-4 ${quiz.bestScore === 100 ? "text-amber-500" : "text-muted-foreground"}`} />
                                                <span className="text-sm">
                                                    Best Score: <span className="font-bold text-card-foreground">{quiz.bestScore}%</span>
                                                </span>
                                            </div>
                                        )}

                                        <Button
                                            size="sm"
                                            className="w-full gap-2"
                                            variant={quiz.status === "completed" ? "outline" : "default"}
                                            onClick={() => router.push(`/quiz/${quiz.id}`)}
                                        >
                                            <Play className="w-4 h-4" />
                                            {quiz.status === "completed" ? "Retake Quiz" : "Start Quiz"}
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
