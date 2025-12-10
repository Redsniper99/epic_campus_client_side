"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
    Video, VideoOff, Mic, MicOff, MonitorUp, Hand, MessageSquare,
    Users, Settings, Phone, MoreVertical, Maximize, Volume2,
    Send, Clock, BookOpen, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LiveClassPage() {
    const router = useRouter();
    const [isMuted, setIsMuted] = useState(false);
    const [isVideoOn, setIsVideoOn] = useState(true);
    const [isHandRaised, setIsHandRaised] = useState(false);
    const [showChat, setShowChat] = useState(true);
    const [showParticipants, setShowParticipants] = useState(false);
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
        { name: "Sanjay K.", avatar: "SK", isMuted: false, isVideoOn: false, isHost: false },
    ];

    // Demo chat messages
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
        <main className="h-screen bg-gray-900 flex flex-col overflow-hidden">
            {/* Header */}
            <header className="bg-gray-800 border-b border-gray-700 px-2 sm:px-4 py-2 flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-red-400 text-xs sm:text-sm font-medium">LIVE</span>
                    </div>
                    <div className="h-4 w-px bg-gray-600 hidden sm:block" />
                    <div className="min-w-0">
                        <h1 className="text-white font-semibold text-xs sm:text-sm truncate">{classInfo.name}</h1>
                        <p className="text-gray-400 text-xs hidden sm:block">with {classInfo.instructor}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                    <div className="hidden sm:flex items-center gap-2 text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-mono">{formatTime(elapsedTime)}</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 text-gray-400">
                        <Users className="w-4 h-4" />
                        <span className="text-xs sm:text-sm">{participants.length}</span>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex-1 flex overflow-hidden">
                {/* Video Grid Area */}
                <div className="flex-1 p-4">
                    <div className="h-full flex flex-col">
                        {/* Main Video (Instructor) */}
                        <div className="flex-1 relative rounded-xl overflow-hidden bg-gray-800 mb-4">
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
                            <div className="absolute top-4 left-4 bg-black/60 px-3 py-1.5 rounded-full flex items-center gap-2">
                                <MonitorUp className="w-4 h-4 text-green-400" />
                                <span className="text-white text-sm">Screen Sharing</span>
                            </div>
                        </div>

                        {/* Participant thumbnails */}
                        <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2">
                            {participants.slice(0, 5).map((participant, index) => (
                                <div
                                    key={index}
                                    className={`relative w-20 h-16 sm:w-32 sm:h-24 rounded-lg overflow-hidden flex-shrink-0 ${participant.name === "You" ? "ring-2 ring-primary" : "bg-gray-800"
                                        }`}
                                >
                                    {participant.isVideoOn ? (
                                        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                                            <span className="text-lg sm:text-2xl font-bold text-gray-400">{participant.avatar}</span>
                                        </div>
                                    ) : (
                                        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-700 flex items-center justify-center">
                                                <span className="text-sm sm:text-lg font-bold text-gray-400">{participant.avatar[0]}</span>
                                            </div>
                                        </div>
                                    )}
                                    <div className="absolute bottom-0.5 left-0.5 right-0.5 sm:bottom-1 sm:left-1 sm:right-1 flex items-center justify-between">
                                        <span className="text-[10px] sm:text-xs text-white bg-black/60 px-1 sm:px-1.5 py-0.5 rounded truncate">
                                            {participant.name}
                                        </span>
                                        {participant.isMuted && (
                                            <MicOff className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-400 bg-black/60 rounded p-0.5" />
                                        )}
                                    </div>
                                </div>
                            ))}
                            {participants.length > 5 && (
                                <div className="w-20 h-16 sm:w-32 sm:h-24 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
                                    <span className="text-gray-400 text-xs sm:text-sm">+{participants.length - 5}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Sidebar - Chat / Participants */}
                {(showChat || showParticipants) && (
                    <div className="hidden lg:flex w-80 bg-gray-800 border-l border-gray-700 flex-col">
                        {/* Sidebar Tabs */}
                        <div className="flex border-b border-gray-700">
                            <button
                                onClick={() => { setShowChat(true); setShowParticipants(false); }}
                                className={`flex-1 px-4 py-3 text-sm font-medium ${showChat ? "text-white border-b-2 border-primary" : "text-gray-400"
                                    }`}
                            >
                                Chat
                            </button>
                            <button
                                onClick={() => { setShowParticipants(true); setShowChat(false); }}
                                className={`flex-1 px-4 py-3 text-sm font-medium ${showParticipants ? "text-white border-b-2 border-primary" : "text-gray-400"
                                    }`}
                            >
                                Participants ({participants.length})
                            </button>
                        </div>

                        {/* Chat Panel */}
                        {showChat && (
                            <>
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
                                            className="flex-1 px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                                        />
                                        <Button type="submit" size="icon" className="h-10 w-10">
                                            <Send className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </form>
                            </>
                        )}

                        {/* Participants Panel */}
                        {showParticipants && (
                            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                                {participants.map((participant, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-700/50"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                                                <span className="text-sm font-medium text-gray-300">{participant.avatar[0]}</span>
                                            </div>
                                            <div>
                                                <p className="text-white text-sm flex items-center gap-2">
                                                    {participant.name}
                                                    {participant.isHost && (
                                                        <span className="text-xs bg-accent text-accent-foreground px-1.5 py-0.5 rounded">Host</span>
                                                    )}
                                                    {participant.name === "You" && (
                                                        <span className="text-xs text-gray-400">(You)</span>
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {participant.isMuted ? (
                                                <MicOff className="w-4 h-4 text-red-400" />
                                            ) : (
                                                <Mic className="w-4 h-4 text-green-400" />
                                            )}
                                            {participant.isVideoOn ? (
                                                <Video className="w-4 h-4 text-green-400" />
                                            ) : (
                                                <VideoOff className="w-4 h-4 text-red-400" />
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Control Bar */}
            <div className="bg-gray-800 border-t border-gray-700 px-2 sm:px-4 py-2 sm:py-3 flex items-center justify-center gap-2 sm:gap-4 flex-shrink-0 flex-wrap">
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

                {/* Screen Share - hidden on mobile */}
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

                {/* Chat Toggle - hidden on mobile (sidebar not visible) */}
                <button
                    onClick={() => { setShowChat(!showChat); setShowParticipants(false); }}
                    className={`hidden lg:flex w-10 h-10 sm:w-12 sm:h-12 rounded-full items-center justify-center transition-colors ${showChat ? "bg-primary hover:bg-primary/80" : "bg-gray-700 hover:bg-gray-600"
                        }`}
                >
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </button>

                {/* Participants Toggle - hidden on mobile (sidebar not visible) */}
                <button
                    onClick={() => { setShowParticipants(!showParticipants); setShowChat(false); }}
                    className={`hidden lg:flex w-10 h-10 sm:w-12 sm:h-12 rounded-full items-center justify-center transition-colors ${showParticipants ? "bg-primary hover:bg-primary/80" : "bg-gray-700 hover:bg-gray-600"
                        }`}
                >
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </button>

                <div className="h-8 w-px bg-gray-600 mx-2" />

                <button
                    onClick={handleEndClass}
                    className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-red-500 hover:bg-red-600 text-white text-sm sm:text-base font-medium flex items-center gap-2"
                >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 rotate-135" />
                    <span className="hidden sm:inline">Leave</span>
                </button>
            </div>
        </main>
    );
}
