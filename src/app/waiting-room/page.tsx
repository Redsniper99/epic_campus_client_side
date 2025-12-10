"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Video, Send, Users, Clock, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WaitingRoomPage() {
    const router = useRouter();
    const [messages, setMessages] = useState([
        { id: 1, user: "Kasun", message: "Excited for today's class! 🎉", time: "6:55 PM" },
        { id: 2, user: "Nimali", message: "Is everyone ready?", time: "6:56 PM" },
        { id: 3, user: "Ruwan", message: "First time joining live class!", time: "6:57 PM" },
    ]);
    const [newMessage, setNewMessage] = useState("");
    const [countdown, setCountdown] = useState({ hours: 0, minutes: 0, seconds: 10 }); // 10 seconds for demo

    // Demo class data
    const liveClass = {
        name: "JLPT N5 Grammar - Lesson 12",
        instructor: "Yamamoto Sensei",
        instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        studentsWaiting: 18,
    };

    // Countdown timer
    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
                    return prev; // Stop at zero
                }

                let newSeconds = prev.seconds - 1;
                let newMinutes = prev.minutes;
                let newHours = prev.hours;

                if (newSeconds < 0) {
                    newSeconds = 59;
                    newMinutes -= 1;
                }
                if (newMinutes < 0) {
                    newMinutes = 59;
                    newHours -= 1;
                }

                return { hours: Math.max(0, newHours), minutes: Math.max(0, newMinutes), seconds: Math.max(0, newSeconds) };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Redirect to live class when countdown ends
    useEffect(() => {
        if (countdown.hours === 0 && countdown.minutes === 0 && countdown.seconds === 0) {
            router.push("/live-class");
        }
    }, [countdown, router]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        const now = new Date();
        const time = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });

        setMessages([
            ...messages,
            { id: messages.length + 1, user: "You", message: newMessage, time },
        ]);
        setNewMessage("");
    };

    const formatTime = (num: number) => num.toString().padStart(2, "0");

    return (
        <main className="min-h-screen bg-gray-900 flex flex-col">
            {/* Header */}
            <header className="bg-gray-800 border-b border-gray-700 px-4 py-3">
                <div className="flex items-center justify-between max-w-6xl mx-auto">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                            <span className="text-primary-foreground font-bold">E</span>
                        </div>
                        <span className="text-white font-semibold">Epic Campus</span>
                    </div>
                    <Button variant="ghost" onClick={() => router.push("/dashboard")} className="text-gray-300 hover:text-white">
                        Leave Room
                    </Button>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex-1 flex flex-col lg:flex-row">
                {/* Main Section */}
                <div className="flex-1 flex flex-col items-center justify-center p-8">
                    {/* Logo */}
                    <div className="w-24 h-24 bg-primary rounded-3xl flex items-center justify-center mb-8 shadow-glow">
                        <Video className="w-12 h-12 text-primary-foreground" />
                    </div>

                    {/* Countdown Timer */}
                    <div className="text-center mb-8">
                        <h2 className="text-gray-400 text-base sm:text-lg mb-4">Class starts in</h2>
                        <div className="flex items-center justify-center gap-2 sm:gap-4">
                            <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 min-w-[70px] sm:min-w-[100px]">
                                <span className="text-3xl sm:text-5xl font-bold text-white">{formatTime(countdown.hours)}</span>
                                <p className="text-gray-500 text-xs sm:text-sm mt-1">Hours</p>
                            </div>
                            <span className="text-2xl sm:text-4xl text-gray-500 font-bold">:</span>
                            <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 min-w-[70px] sm:min-w-[100px]">
                                <span className="text-3xl sm:text-5xl font-bold text-white">{formatTime(countdown.minutes)}</span>
                                <p className="text-gray-500 text-xs sm:text-sm mt-1">Minutes</p>
                            </div>
                            <span className="text-2xl sm:text-4xl text-gray-500 font-bold">:</span>
                            <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 min-w-[70px] sm:min-w-[100px]">
                                <span className="text-3xl sm:text-5xl font-bold text-accent">{formatTime(countdown.seconds)}</span>
                                <p className="text-gray-500 text-xs sm:text-sm mt-1">Seconds</p>
                            </div>
                        </div>
                    </div>

                    {/* Class Info */}
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-white mb-2">{liveClass.name}</h1>
                        <div className="flex items-center justify-center gap-3">
                            <img
                                src={liveClass.instructorImage}
                                alt={liveClass.instructor}
                                className="w-8 h-8 rounded-full"
                            />
                            <p className="text-gray-400">
                                Your Live Class with <span className="text-primary font-medium">{liveClass.instructor}</span> will start soon.
                            </p>
                        </div>
                    </div>

                    {/* Status Indicator */}
                    <div className="flex items-center gap-3 px-6 py-3 bg-amber-500/20 rounded-full border border-amber-500/30">
                        <Radio className="w-5 h-5 text-amber-400 animate-pulse" />
                        <span className="text-amber-400 font-medium">Waiting for Host to start broadcast...</span>
                    </div>

                    {/* Students Waiting */}
                    <div className="mt-8 flex items-center gap-2 text-gray-400">
                        <Users className="w-5 h-5" />
                        <span>{liveClass.studentsWaiting} students waiting</span>
                    </div>
                </div>

                {/* Pre-class Chat */}
                <div className="w-full lg:w-96 bg-gray-800 border-l border-gray-700 flex flex-col h-[400px] lg:h-auto">
                    {/* Chat Header */}
                    <div className="p-4 border-b border-gray-700">
                        <h3 className="text-white font-semibold flex items-center gap-2">
                            💬 Pre-class Chat
                        </h3>
                        <p className="text-gray-500 text-sm">Chat with other students while waiting</p>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`${msg.user === "You" ? "ml-8" : ""}`}>
                                <div className={`rounded-2xl p-3 ${msg.user === "You" ? "bg-primary text-primary-foreground" : "bg-gray-700"
                                    }`}>
                                    <div className="flex items-center justify-between mb-1">
                                        <span className={`text-sm font-medium ${msg.user === "You" ? "text-primary-foreground" : "text-white"
                                            }`}>
                                            {msg.user}
                                        </span>
                                        <span className={`text-xs ${msg.user === "You" ? "text-primary-foreground/70" : "text-gray-500"
                                            }`}>
                                            {msg.time}
                                        </span>
                                    </div>
                                    <p className={msg.user === "You" ? "text-primary-foreground" : "text-gray-300"}>
                                        {msg.message}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Message Input */}
                    <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-700">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder="Type a message..."
                                className="flex-1 px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                            <Button type="submit" size="icon" className="h-12 w-12">
                                <Send className="w-5 h-5" />
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
