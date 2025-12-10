"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";
import {
    ChevronRight, Upload, FileText, Image, X, CheckCircle,
    Clock, Calendar, AlertCircle, Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HomeworkSubmitPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const router = useRouter();
    const [files, setFiles] = useState<{ name: string; size: string; type: string }[]>([]);
    const [notes, setNotes] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Demo homework data
    const homework = {
        id: resolvedParams.id,
        title: "Hiragana Writing Practice - Week 3",
        course: "Japanese for Beginners",
        instructor: "Yamamoto Sensei",
        dueDate: "Dec 15, 2024",
        daysLeft: 4,
        description: "Practice writing hiragana characters あ-こ (a-ko). Submit a photo of your handwritten work on grid paper. Make sure each character is clearly visible.",
        requirements: [
            "Write each character (あ, い, う, え, お, か, き, く, け, こ) at least 5 times",
            "Use proper stroke order as taught in class",
            "Submit clear photos or scanned images",
            "Include your name and date on the paper",
        ],
        tips: "Use grid paper for better alignment. Practice each stroke slowly before writing quickly.",
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files).map((file) => ({
                name: file.name,
                size: `${(file.size / 1024).toFixed(1)} KB`,
                type: file.type.includes("image") ? "image" : "document",
            }));
            setFiles([...files, ...newFiles]);
        }
    };

    const removeFile = (index: number) => {
        setFiles(files.filter((_, i) => i !== index));
    };

    const handleSubmit = async () => {
        if (files.length === 0) return;

        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <main className="min-h-screen bg-secondary/30 flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-card rounded-2xl border border-border p-8 text-center">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-card-foreground mb-2">Homework Submitted!</h1>
                    <p className="text-muted-foreground mb-6">
                        Your work has been submitted successfully. {homework.instructor} will review it soon.
                    </p>
                    <div className="bg-secondary/50 rounded-xl p-4 mb-6 text-left">
                        <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-card-foreground">Submitted:</span> {homework.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-card-foreground">Files:</span> {files.length} file(s)
                        </p>
                    </div>
                    <Button onClick={() => router.push("/homework")} className="w-full">
                        Back to Homework
                    </Button>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-secondary/30">
            {/* Header */}
            <header className="bg-card border-b border-border sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex items-center gap-3">
                    <Button variant="ghost" size="sm" onClick={() => router.push("/homework")} className="gap-2">
                        <ChevronRight className="w-4 h-4 rotate-180" />
                        Homework
                    </Button>
                    <div className="h-4 w-px bg-border" />
                    <h1 className="font-bold text-foreground">Submit Work</h1>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto">
                    {/* Assignment Details */}
                    <div className="bg-card rounded-2xl border border-border p-6 mb-6">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h2 className="text-xl font-bold text-card-foreground">{homework.title}</h2>
                                <p className="text-muted-foreground">{homework.course}</p>
                            </div>
                            <Badge variant={homework.daysLeft <= 3 ? "destructive" : "secondary"} className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {homework.daysLeft} days left
                            </Badge>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                Due: {homework.dueDate}
                            </span>
                            <span>Instructor: {homework.instructor}</span>
                        </div>

                        <p className="text-card-foreground mb-4">{homework.description}</p>

                        {/* Requirements */}
                        <div className="bg-secondary/50 rounded-xl p-4 mb-4">
                            <h3 className="font-semibold text-card-foreground mb-2">Requirements:</h3>
                            <ul className="space-y-2">
                                {homework.requirements.map((req, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                        {req}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tips */}
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                            <div className="flex items-start gap-2">
                                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                <div>
                                    <h4 className="font-medium text-blue-800">Tip from Sensei</h4>
                                    <p className="text-sm text-blue-700">{homework.tips}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Upload Section */}
                    <div className="bg-card rounded-2xl border border-border p-6">
                        <h3 className="font-bold text-card-foreground mb-4">Upload Your Work</h3>

                        {/* File Upload Zone */}
                        <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all mb-4">
                            <Upload className="w-10 h-10 text-muted-foreground mb-2" />
                            <p className="text-muted-foreground text-center">
                                <span className="text-primary font-medium">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                                Images, PDFs, or documents (Max 10MB each)
                            </p>
                            <input
                                type="file"
                                accept="image/*,.pdf,.doc,.docx"
                                onChange={handleFileUpload}
                                multiple
                                className="hidden"
                            />
                        </label>

                        {/* Uploaded Files */}
                        {files.length > 0 && (
                            <div className="space-y-2 mb-4">
                                {files.map((file, index) => (
                                    <div key={index} className="flex items-center justify-between bg-secondary/50 rounded-lg p-3">
                                        <div className="flex items-center gap-3">
                                            {file.type === "image" ? (
                                                <Image className="w-5 h-5 text-blue-500" />
                                            ) : (
                                                <FileText className="w-5 h-5 text-red-500" />
                                            )}
                                            <div>
                                                <p className="text-sm font-medium text-card-foreground">{file.name}</p>
                                                <p className="text-xs text-muted-foreground">{file.size}</p>
                                            </div>
                                        </div>
                                        <button onClick={() => removeFile(index)} className="text-muted-foreground hover:text-destructive">
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Notes */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-card-foreground mb-2">
                                Notes to Instructor (Optional)
                            </label>
                            <textarea
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                placeholder="Add any comments or explanations about your work..."
                                className="w-full h-24 px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <Button
                            onClick={handleSubmit}
                            disabled={files.length === 0 || isSubmitting}
                            className="w-full py-6 text-lg font-bold gap-2"
                        >
                            {isSubmitting ? (
                                <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    Submit Homework
                                </>
                            )}
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
