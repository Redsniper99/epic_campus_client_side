"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
    Video, VideoOff, Mic, MicOff, MonitorUp, Hand, MessageSquare,
    Users, Phone, Send, Clock, ChevronLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LiveClassPage() {
    const router = useRouter();
    const [isMuted, setIsMuted] = useState(false);
    const [isVideoOn, setIsVideoOn] = useState(true);
    const [isHandRaised, setIsHandRaised] = useState(false);
    const [activeTab, setActiveTab] = useState<"chat" | "participants">("chat");
    const [message, setMessage] = useState("");
    const [elapsedTime, setElapsedTime] = useState(0);

    // Demo class data
    const classInfo = {
        name: "JLPT N5 Grammar - Lesson 12: Verb Conjugation",
        instructor: "Yamamoto Sensei",
        instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    };

    // Elapsed time counter
    useEffect(() => {
        const timer = setInterval(() => {
            setElapsedTime((prev) => prev + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    // Demo participants
    const participants = [
        { name: "You", avatar: "KP", isMuted: isMuted, isVideoOn: isVideoOn, isHost: false },
        { name: "Yamamoto Sensei", avatar: "YS", isMuted: false, isVideoOn: true, isHost: true },
        { name: "Kasun P.", avatar: "KP", isMuted: true, isVideoOn: false, isHost: false },
        { name: "Nimali F.", avatar: "NF", isMuted: false, isVideoOn: true, isHost: false },
        { name: "Ruwan M.", avatar: "RM", isMuted: true, isVideoOn: true, isHost: false },
        { name: "Tharaka S.", avatar: "TS", isMuted: true, isVideoOn: false, isHost: false },
    ];

    const [chatMessages, setChatMessages] = useState([
        { id: 1, user: "Yamamoto Sensei", message: "Welcome everyone! Today we'll learn verb conjugation.", time: "7:02 PM", isInstructor: true },
        { id: 2, user: "Nimali F.", message: "こんばんは、先生！", time: "7:03 PM", isInstructor: false },
        { id: 3, user: "Ruwan M.", message: "Excited for this lesson! 🎌", time: "7:04 PM", isInstructor: false },
        { id: 4, user: "Yamamoto Sensei", message: "Let's start with the ます form. Look at the screen.", time: "7:05 PM", isInstructor: true },
    ]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim()) return;

        const now = new Date();
        const time = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });

        setChatMessages([
            ...chatMessages,
            { id: chatMessages.length + 1, user: "You", message, time, isInstructor: false },
        ]);
        setMessage("");
    };

    const handleEndClass = () => {
        if (confirm("Are you sure you want to leave the class?")) {
            router.push("/dashboard");
        }
    };

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
                        <div className="flex items-center gap-2 flex-shrink-0">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-red-400 text-xs sm:text-sm font-medium">LIVE</span>
                        </div>
                        <div className="min-w-0">
                            <h1 className="text-white font-semibold text-xs sm:text-sm truncate">{classInfo.name}</h1>
                            <p className="text-gray-400 text-xs hidden sm:block">with {classInfo.instructor}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                        <div className="flex items-center gap-1 sm:gap-2 text-gray-400">
                            <Clock className="w-4 h-4" />
                            <span className="text-xs sm:text-sm font-mono">{formatTime(elapsedTime)}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-400">
                            <Users className="w-4 h-4" />
                            <span className="text-xs sm:text-sm">{participants.length}</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content - Same layout as Course Player */}
            <div className="flex flex-col lg:flex-row">
                {/* Video Area */}
                <div className="flex-1">
                    {/* Main Video Container */}
                    <div className="relative aspect-video bg-black">
                        <img
                            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1280&h=720&fit=crop"
                            alt="Instructor screen share"
                            className="w-full h-full object-cover"
                        />

                        {/* Screen share overlay with content */}
                        <div className="absolute inset-0 bg-gray-900/90 flex items-center justify-center p-2 sm:p-4">
                            <div className="text-center max-w-2xl">
                                <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-6">動詞の活用</h2>
                                <p className="text-sm sm:text-xl md:text-2xl text-gray-300 mb-2 sm:mb-4">Verb Conjugation (ます Form)</p>

                                <div className="grid grid-cols-2 gap-2 sm:gap-4 text-left mt-4 sm:mt-8">
                                    <div className="bg-gray-800 p-2 sm:p-4 rounded-lg sm:rounded-xl">
                                        <p className="text-accent text-sm sm:text-xl font-bold mb-1 sm:mb-2">食べる → 食べます</p>
                                        <p className="text-gray-400 text-xs sm:text-base">taberu → tabemasu</p>
                                    </div>
                                    <div className="bg-gray-800 p-2 sm:p-4 rounded-lg sm:rounded-xl">
                                        <p className="text-accent text-sm sm:text-xl font-bold mb-1 sm:mb-2">飲む → 飲みます</p>
                                        <p className="text-gray-400 text-xs sm:text-base">nomu → nomimasu</p>
                                    </div>
                                    <div className="bg-gray-800 p-2 sm:p-4 rounded-lg sm:rounded-xl">
                                        <p className="text-accent text-sm sm:text-xl font-bold mb-1 sm:mb-2">行く → 行きます</p>
                                        <p className="text-gray-400 text-xs sm:text-base">iku → ikimasu</p>
                                    </div>
                                    <div className="bg-gray-800 p-2 sm:p-4 rounded-lg sm:rounded-xl">
                                        <p className="text-accent text-sm sm:text-xl font-bold mb-1 sm:mb-2">見る → 見ます</p>
                                        <p className="text-gray-400 text-xs sm:text-base">miru → mimasu</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Instructor PIP */}
                        <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-24 h-18 sm:w-36 sm:h-28 md:w-48 md:h-36 rounded-lg overflow-hidden bg-gray-800 border-2 border-primary">
                            <img
                                src={classInfo.instructorImage}
                                alt={classInfo.instructor}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 bg-black/60 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs text-white flex items-center gap-1">
                                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500" />
                                <span className="hidden sm:inline">{classInfo.instructor}</span>
                                <span className="sm:hidden">Sensei</span>
                            </div>
                        </div>

                        {/* Screen share indicator */}
                        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-black/60 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1 sm:gap-2">
                            <MonitorUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                            <span className="text-white text-xs sm:text-sm">Screen Sharing</span>
                        </div>
                    </div>

                    {/* Control Bar */}
                    <div className="bg-gray-800 border-t border-gray-700 px-2 sm:px-4 py-2 sm:py-3 flex items-center justify-center gap-2 sm:gap-3">
                        {/* Mute */}
                        <button
                            onClick={() => setIsMuted(!isMuted)}
                            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-colors ${isMuted ? "bg-red-500 hover:bg-red-600" : "bg-gray-700 hover:bg-gray-600"
                                }`}
                        >
                            {isMuted ? <MicOff className="w-4 h-4 sm:w-5 sm:h-5 text-white" /> : <Mic className="w-4 h-4 sm:w-5 sm:h-5 text-white" />}
                        </button>

                        {/* Video */}
                        <button
                            onClick={() => setIsVideoOn(!isVideoOn)}
                            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-colors ${!isVideoOn ? "bg-red-500 hover:bg-red-600" : "bg-gray-700 hover:bg-gray-600"
                                }`}
                        >
                            {isVideoOn ? <Video className="w-4 h-4 sm:w-5 sm:h-5 text-white" /> : <VideoOff className="w-4 h-4 sm:w-5 sm:h-5 text-white" />}
                        </button>

                        {/* Screen Share - hidden on small mobile */}
                        <button className="hidden sm:flex w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-700 hover:bg-gray-600 items-center justify-center">
                            <MonitorUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </button>

                        {/* Raise Hand */}
                        <button
                            onClick={() => setIsHandRaised(!isHandRaised)}
                            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-colors ${isHandRaised ? "bg-amber-500 hover:bg-amber-600" : "bg-gray-700 hover:bg-gray-600"
                                }`}
                        >
                            <Hand className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </button>

                        <div className="h-8 w-px bg-gray-600 mx-1 sm:mx-2" />

                        <button
                            onClick={handleEndClass}
                            className="px-3 sm:px-6 py-2 sm:py-3 rounded-full bg-red-500 hover:bg-red-600 text-white text-xs sm:text-base font-medium flex items-center gap-1 sm:gap-2"
                        >
                            <Phone className="w-4 h-4 sm:w-5 sm:h-5 rotate-135" />
                            <span className="hidden sm:inline">Leave</span>
                        </button>
                    </div>

                    {/* Participant Thumbnails - Only show on mobile below video */}
                    <div className="lg:hidden bg-gray-800 border-t border-gray-700 p-2 sm:p-3">
                        <div className="flex gap-2 overflow-x-auto pb-1">
                            {participants.slice(0, 5).map((participant, index) => (
                                <div
                                    key={index}
                                    className={`relative w-16 h-12 sm:w-20 sm:h-16 rounded-lg overflow-hidden flex-shrink-0 ${participant.name === "You" ? "ring-2 ring-primary" : "bg-gray-700"
                                        }`}
                                >
                                    <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
                                        <span className="text-sm sm:text-lg font-bold text-gray-400">{participant.avatar}</span>
                                    </div>
                                    <div className="absolute bottom-0.5 left-0.5 right-0.5 flex items-center justify-between">
                                        <span className="text-[8px] sm:text-[10px] text-white bg-black/60 px-1 py-0.5 rounded truncate">
                                            {participant.name.split(" ")[0]}
                                        </span>
                                        {participant.isMuted && (
                                            <MicOff className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-red-400 bg-black/60 rounded p-0.5" />
                                        )}
                                    </div>
                                </div>
                            ))}
                            {participants.length > 5 && (
                                <div className="w-16 h-12 sm:w-20 sm:h-16 rounded-lg bg-gray-700 flex items-center justify-center flex-shrink-0">
                                    <span className="text-gray-400 text-xs">+{participants.length - 5}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Chat/Participants Sidebar - Same structure as Course Player playlist */}
                <div className="lg:w-80 bg-gray-800 border-t lg:border-t-0 lg:border-l border-gray-700 lg:h-[calc(100vh-60px)] flex flex-col">
                    {/* Tab Headers */}
                    <div className="flex border-b border-gray-700">
                        <button
                            onClick={() => setActiveTab("chat")}
                            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${activeTab === "chat"
                                ? "text-white bg-primary/20 border-b-2 border-primary"
                                : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                                }`}
                        >
                            <MessageSquare className="w-4 h-4" />
                            Chat
                        </button>
                        <button
                            onClick={() => setActiveTab("participants")}
                            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${activeTab === "participants"
                                ? "text-white bg-primary/20 border-b-2 border-primary"
                                : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                                }`}
                        >
                            <Users className="w-4 h-4" />
                            <span>{participants.length}</span>
                        </button>
                    </div>

                    {/* Tab Content */}
                    {activeTab === "chat" ? (
                        <div className="flex-1 flex flex-col min-h-0">
                            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                {chatMessages.map((msg) => (
                                    <div key={msg.id}>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className={`text-sm font-medium ${msg.isInstructor ? "text-accent" : msg.user === "You" ? "text-primary" : "text-white"
                                                }`}>
                                                {msg.user}
                                                {msg.isInstructor && " 👨‍🏫"}
                                            </span>
                                            <span className="text-xs text-gray-500">{msg.time}</span>
                                        </div>
                                        <p className="text-gray-200 text-sm">{msg.message}</p>
                                    </div>
                                ))}
                            </div>
                            <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-700">
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Type a message..."
                                        className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-lg text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-primary"
                                    />
                                    <button type="submit" className="p-2 bg-primary rounded-lg hover:bg-primary/80 transition-colors">
                                        <Send className="w-4 h-4 text-white" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div className="flex-1 overflow-y-auto p-4 space-y-2">
                            {participants.map((p, idx) => (
                                <div key={idx} className="flex items-center justify-between py-3 px-3 bg-gray-700/50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-sm font-bold text-white">
                                            {p.avatar}
                                        </div>
                                        <div>
                                            <span className="text-white text-sm block">{p.name}</span>
                                            {p.isHost && <span className="text-xs text-accent">Instructor</span>}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {p.isMuted && <MicOff className="w-4 h-4 text-red-400" />}
                                        {!p.isVideoOn && <VideoOff className="w-4 h-4 text-red-400" />}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
