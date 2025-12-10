"use client";

import { useState, use, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
    ChevronRight, Clock, CheckCircle, XCircle, Award,
    ArrowRight, RotateCcw, Home
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function QuizPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const router = useRouter();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [answers, setAnswers] = useState<(number | null)[]>([]);
    const [showResult, setShowResult] = useState(false);
    const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
    const [quizStarted, setQuizStarted] = useState(false);

    // Demo quiz data - Hiragana Recognition
    const quiz = {
        id: resolvedParams.id,
        title: "Hiragana Recognition Quiz",
        course: "Japanese for Beginners",
        duration: "15 min",
        passingScore: 70,
        questions: [
            {
                id: 1,
                question: "What is this hiragana character?",
                character: "あ",
                options: ["a", "i", "u", "e"],
                correct: 0,
            },
            {
                id: 2,
                question: "What is this hiragana character?",
                character: "い",
                options: ["a", "i", "u", "e"],
                correct: 1,
            },
            {
                id: 3,
                question: "What is this hiragana character?",
                character: "う",
                options: ["a", "i", "u", "e"],
                correct: 2,
            },
            {
                id: 4,
                question: "What is this hiragana character?",
                character: "か",
                options: ["ka", "ki", "ku", "ke"],
                correct: 0,
            },
            {
                id: 5,
                question: "What is this hiragana character?",
                character: "す",
                options: ["sa", "shi", "su", "se"],
                correct: 2,
            },
            {
                id: 6,
                question: "Which hiragana represents 'na'?",
                character: "?",
                options: ["な", "に", "ぬ", "ね"],
                correct: 0,
            },
            {
                id: 7,
                question: "What is this hiragana character?",
                character: "ま",
                options: ["ma", "mi", "mu", "me"],
                correct: 0,
            },
            {
                id: 8,
                question: "Which hiragana represents 'yo'?",
                character: "?",
                options: ["や", "ゆ", "よ", "わ"],
                correct: 2,
            },
            {
                id: 9,
                question: "What is this hiragana character?",
                character: "ん",
                options: ["wa", "wo", "n", "ya"],
                correct: 2,
            },
            {
                id: 10,
                question: "Which hiragana represents 'to'?",
                character: "?",
                options: ["た", "ち", "つ", "と"],
                correct: 3,
            },
        ],
    };

    // Timer
    useEffect(() => {
        if (!quizStarted || showResult) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    setShowResult(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [quizStarted, showResult]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    const handleAnswer = (optionIndex: number) => {
        setSelectedAnswer(optionIndex);
    };

    const handleNext = () => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = selectedAnswer;
        setAnswers(newAnswers);
        setSelectedAnswer(null);

        if (currentQuestion < quiz.questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const calculateScore = () => {
        let correct = 0;
        answers.forEach((answer, index) => {
            if (answer === quiz.questions[index].correct) {
                correct++;
            }
        });
        return Math.round((correct / quiz.questions.length) * 100);
    };

    // Start Screen
    if (!quizStarted) {
        return (
            <main className="min-h-screen bg-secondary/30 flex items-center justify-center p-4">
                <div className="max-w-lg w-full bg-card rounded-2xl border border-border p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <span className="text-4xl">📝</span>
                    </div>
                    <h1 className="text-2xl font-bold text-card-foreground mb-2">{quiz.title}</h1>
                    <p className="text-muted-foreground mb-6">{quiz.course}</p>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="bg-secondary/50 rounded-xl p-4">
                            <p className="text-2xl font-bold text-card-foreground">{quiz.questions.length}</p>
                            <p className="text-sm text-muted-foreground">Questions</p>
                        </div>
                        <div className="bg-secondary/50 rounded-xl p-4">
                            <p className="text-2xl font-bold text-card-foreground">{quiz.duration}</p>
                            <p className="text-sm text-muted-foreground">Duration</p>
                        </div>
                        <div className="bg-secondary/50 rounded-xl p-4">
                            <p className="text-2xl font-bold text-card-foreground">{quiz.passingScore}%</p>
                            <p className="text-sm text-muted-foreground">To Pass</p>
                        </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-left">
                        <p className="text-sm text-amber-800">
                            <strong>Note:</strong> Once you start, the timer cannot be paused. Make sure you have a stable internet connection.
                        </p>
                    </div>

                    <Button onClick={() => setQuizStarted(true)} className="w-full py-6 text-lg font-bold gap-2">
                        Start Quiz
                        <ArrowRight className="w-5 h-5" />
                    </Button>
                </div>
            </main>
        );
    }

    // Result Screen
    if (showResult) {
        const score = calculateScore();
        const passed = score >= quiz.passingScore;

        return (
            <main className="min-h-screen bg-secondary/30 flex items-center justify-center p-4">
                <div className="max-w-lg w-full bg-card rounded-2xl border border-border p-8 text-center">
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${passed ? "bg-green-100" : "bg-red-100"
                        }`}>
                        {passed ? (
                            <Award className="w-10 h-10 text-green-600" />
                        ) : (
                            <XCircle className="w-10 h-10 text-red-600" />
                        )}
                    </div>

                    <h1 className="text-2xl font-bold text-card-foreground mb-2">
                        {passed ? "Congratulations! 🎉" : "Keep Practicing!"}
                    </h1>
                    <p className="text-muted-foreground mb-6">
                        {passed
                            ? "You've passed the quiz! Great job on your hiragana skills."
                            : "Don't give up! Review the material and try again."}
                    </p>

                    <div className="relative w-40 h-40 mx-auto mb-6">
                        <svg className="w-full h-full -rotate-90">
                            <circle
                                cx="80"
                                cy="80"
                                r="70"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="10"
                                className="text-secondary"
                            />
                            <circle
                                cx="80"
                                cy="80"
                                r="70"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="10"
                                strokeDasharray={440}
                                strokeDashoffset={440 - (440 * score) / 100}
                                className={passed ? "text-green-500" : "text-red-500"}
                                strokeLinecap="round"
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className={`text-4xl font-bold ${passed ? "text-green-600" : "text-red-600"}`}>
                                {score}%
                            </span>
                            <span className="text-sm text-muted-foreground">Score</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-green-50 rounded-xl p-4">
                            <div className="flex items-center justify-center gap-2 text-green-600">
                                <CheckCircle className="w-5 h-5" />
                                <span className="text-xl font-bold">
                                    {answers.filter((a, i) => a === quiz.questions[i].correct).length}
                                </span>
                            </div>
                            <p className="text-sm text-green-700">Correct</p>
                        </div>
                        <div className="bg-red-50 rounded-xl p-4">
                            <div className="flex items-center justify-center gap-2 text-red-600">
                                <XCircle className="w-5 h-5" />
                                <span className="text-xl font-bold">
                                    {answers.filter((a, i) => a !== quiz.questions[i].correct).length}
                                </span>
                            </div>
                            <p className="text-sm text-red-700">Incorrect</p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <Button variant="outline" onClick={() => router.push("/homework")} className="flex-1 gap-2">
                            <Home className="w-4 h-4" />
                            Back
                        </Button>
                        <Button onClick={() => {
                            setCurrentQuestion(0);
                            setAnswers([]);
                            setSelectedAnswer(null);
                            setShowResult(false);
                            setTimeLeft(15 * 60);
                        }} className="flex-1 gap-2">
                            <RotateCcw className="w-4 h-4" />
                            Retry
                        </Button>
                    </div>
                </div>
            </main>
        );
    }

    // Quiz Screen
    const currentQ = quiz.questions[currentQuestion];

    return (
        <main className="min-h-screen bg-secondary/30">
            {/* Header */}
            <header className="bg-card border-b border-border sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <h1 className="font-bold text-foreground">{quiz.title}</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <Badge variant="secondary">
                            Question {currentQuestion + 1} of {quiz.questions.length}
                        </Badge>
                        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${timeLeft < 60 ? "bg-red-100 text-red-600" : "bg-secondary text-muted-foreground"
                            }`}>
                            <Clock className="w-4 h-4" />
                            <span className="font-mono font-medium">{formatTime(timeLeft)}</span>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    {/* Progress Bar */}
                    <div className="h-2 bg-secondary rounded-full overflow-hidden mb-8">
                        <div
                            className="h-full bg-primary transition-all"
                            style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
                        />
                    </div>

                    {/* Question Card */}
                    <div className="bg-card rounded-2xl border border-border p-8">
                        <p className="text-lg text-card-foreground mb-6">{currentQ.question}</p>

                        {/* Character Display */}
                        {currentQ.character !== "?" && (
                            <div className="bg-secondary/50 rounded-2xl p-8 mb-8 text-center">
                                <span className="text-8xl font-bold text-primary">{currentQ.character}</span>
                            </div>
                        )}

                        {/* Options */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {currentQ.options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswer(index)}
                                    className={`p-4 rounded-xl border-2 text-lg font-medium transition-all ${selectedAnswer === index
                                            ? "border-primary bg-primary/10 text-primary"
                                            : "border-border hover:border-primary/50 text-card-foreground"
                                        }`}
                                >
                                    {currentQ.character === "?" ? (
                                        <span className="text-4xl">{option}</span>
                                    ) : (
                                        option
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Next Button */}
                        <Button
                            onClick={handleNext}
                            disabled={selectedAnswer === null}
                            className="w-full py-6 text-lg font-bold gap-2"
                        >
                            {currentQuestion < quiz.questions.length - 1 ? (
                                <>
                                    Next Question
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            ) : (
                                <>
                                    Finish Quiz
                                    <CheckCircle className="w-5 h-5" />
                                </>
                            )}
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
