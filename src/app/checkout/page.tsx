"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CreditCard, Building2, Upload, Shield, Clock, CheckCircle, ChevronLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
    const router = useRouter();
    const [paymentMethod, setPaymentMethod] = useState<"card" | "bank">("bank");
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    // Demo course data
    const course = {
        name: "TOPIK I Preparation Course",
        image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=200&h=120&fit=crop",
        instructor: "선생님 Kim",
        originalPrice: 17999,
        price: 12999,
        discount: 28,
    };

    // Bank details
    const bankDetails = {
        bankName: "Bank of Ceylon",
        accountNumber: "12345678901234",
        accountName: "Epic Campus (Pvt) Ltd",
        branch: "Colombo Main Branch",
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setUploadedFile(e.target.files[0]);
        }
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsComplete(true);
    };

    if (isComplete) {
        return (
            <main className="min-h-screen bg-secondary/30 flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-card rounded-2xl border border-border p-8 text-center">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-card-foreground mb-2">Enrollment Submitted!</h1>
                    <p className="text-muted-foreground mb-6">
                        Your bank deposit receipt has been submitted for verification.
                        Access will be granted within 24 hours of approval.
                    </p>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                        <div className="flex items-center gap-2 text-amber-700 mb-1">
                            <Clock className="w-4 h-4" />
                            <span className="font-semibold">Pending Verification</span>
                        </div>
                        <p className="text-sm text-amber-600">
                            Our team will verify your payment and notify you via email.
                        </p>
                    </div>
                    <Button onClick={() => router.push("/dashboard")} className="w-full py-6">
                        Go to Dashboard
                    </Button>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-secondary/30">
            {/* Header */}
            <header className="bg-card border-b border-border">
                <div className="container mx-auto px-4 py-4">
                    <Button variant="ghost" onClick={() => router.back()} className="gap-2">
                        <ChevronLeft className="w-5 h-5" />
                        Back to Course
                    </Button>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Secure Checkout</h1>

                    <div className="grid lg:grid-cols-5 gap-8">
                        {/* Order Summary */}
                        <div className="lg:col-span-2">
                            <div className="bg-card rounded-2xl border border-border p-6 sticky top-8">
                                <h2 className="font-semibold text-card-foreground mb-4">Order Summary</h2>

                                <div className="flex gap-4 mb-6">
                                    <img
                                        src={course.image}
                                        alt={course.name}
                                        className="w-24 h-16 rounded-lg object-cover"
                                    />
                                    <div>
                                        <h3 className="font-medium text-card-foreground">{course.name}</h3>
                                        <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                                    </div>
                                </div>

                                <div className="space-y-3 border-t border-border pt-4">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Original Price</span>
                                        <span className="text-muted-foreground line-through">LKR {course.originalPrice.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Discount ({course.discount}%)</span>
                                        <span className="text-green-600">-LKR {(course.originalPrice - course.price).toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-lg font-bold border-t border-border pt-3">
                                        <span className="text-card-foreground">Total</span>
                                        <span className="text-primary">LKR {course.price.toLocaleString()}</span>
                                    </div>
                                </div>

                                <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                                    <Shield className="w-4 h-4" />
                                    <span>Secure payment • 7-day refund policy</span>
                                </div>
                            </div>
                        </div>

                        {/* Payment Methods */}
                        <div className="lg:col-span-3">
                            <div className="bg-card rounded-2xl border border-border p-6">
                                <h2 className="font-semibold text-card-foreground mb-4">Payment Method</h2>

                                {/* Payment Tabs */}
                                <div className="flex gap-2 mb-6">
                                    <button
                                        onClick={() => setPaymentMethod("card")}
                                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 transition-all ${paymentMethod === "card"
                                                ? "border-primary bg-primary/5 text-primary"
                                                : "border-border text-muted-foreground hover:border-primary/50"
                                            }`}
                                    >
                                        <CreditCard className="w-5 h-5" />
                                        <span className="font-medium">Card Payment</span>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-4" />
                                    </button>
                                    <button
                                        onClick={() => setPaymentMethod("bank")}
                                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 transition-all ${paymentMethod === "bank"
                                                ? "border-primary bg-primary/5 text-primary"
                                                : "border-border text-muted-foreground hover:border-primary/50"
                                            }`}
                                    >
                                        <Building2 className="w-5 h-5" />
                                        <span className="font-medium">Bank Deposit</span>
                                    </button>
                                </div>

                                {/* Card Payment Form */}
                                {paymentMethod === "card" && (
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-card-foreground mb-1.5">Card Number</label>
                                            <input
                                                type="text"
                                                placeholder="1234 5678 9012 3456"
                                                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-card-foreground mb-1.5">Expiry Date</label>
                                                <input
                                                    type="text"
                                                    placeholder="MM/YY"
                                                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-card-foreground mb-1.5">CVV</label>
                                                <input
                                                    type="text"
                                                    placeholder="123"
                                                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Bank Deposit Form */}
                                {paymentMethod === "bank" && (
                                    <div className="space-y-6">
                                        {/* Bank Details Box */}
                                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                                            <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                                                <Building2 className="w-5 h-5" />
                                                Bank Transfer Details
                                            </h3>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-blue-600">Bank Name:</span>
                                                    <span className="font-medium text-blue-800">{bankDetails.bankName}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-blue-600">Account Number:</span>
                                                    <span className="font-medium text-blue-800 font-mono">{bankDetails.accountNumber}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-blue-600">Account Name:</span>
                                                    <span className="font-medium text-blue-800">{bankDetails.accountName}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-blue-600">Branch:</span>
                                                    <span className="font-medium text-blue-800">{bankDetails.branch}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* File Upload Zone */}
                                        <div>
                                            <label className="block text-sm font-medium text-card-foreground mb-2">
                                                Upload Receipt/Slip
                                            </label>

                                            {!uploadedFile ? (
                                                <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all">
                                                    <Upload className="w-10 h-10 text-muted-foreground mb-2" />
                                                    <p className="text-muted-foreground text-center">
                                                        <span className="text-primary font-medium">Click to upload</span> or drag and drop
                                                    </p>
                                                    <p className="text-xs text-muted-foreground mt-1">
                                                        Upload photo of receipt/slip here (PNG, JPG, PDF)
                                                    </p>
                                                    <input
                                                        type="file"
                                                        accept="image/*,.pdf"
                                                        onChange={handleFileUpload}
                                                        className="hidden"
                                                    />
                                                </label>
                                            ) : (
                                                <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl border border-border">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                                                            <CheckCircle className="w-5 h-5 text-green-600" />
                                                        </div>
                                                        <div>
                                                            <p className="font-medium text-card-foreground">{uploadedFile.name}</p>
                                                            <p className="text-xs text-muted-foreground">
                                                                {(uploadedFile.size / 1024).toFixed(1)} KB
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() => setUploadedFile(null)}
                                                        className="text-muted-foreground hover:text-destructive"
                                                    >
                                                        <X className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            )}
                                        </div>

                                        {/* Status Note */}
                                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                                            <div className="flex items-start gap-3">
                                                <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="font-medium text-amber-800">Verification Required</p>
                                                    <p className="text-sm text-amber-700">
                                                        Access will be granted within 24 hours of approval.
                                                        You'll receive an email once verified.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Submit Button */}
                                <Button
                                    onClick={handleSubmit}
                                    disabled={paymentMethod === "bank" && !uploadedFile}
                                    className="w-full mt-6 py-6 text-lg font-bold gap-2"
                                >
                                    {isSubmitting ? (
                                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            Complete Enrollment
                                            <CheckCircle className="w-5 h-5" />
                                        </>
                                    )}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
