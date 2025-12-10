"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, LogIn, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";

// Demo credentials - hardcoded for demonstration
const DEMO_USERS = [
    { email: "student@epiccampus.lk", password: "demo123", name: "Kasun Perera" },
    { email: "admin@epiccampus.lk", password: "admin123", name: "Admin User" },
];

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Check against demo credentials
        const user = DEMO_USERS.find(
            (u) => u.email === email && u.password === password
        );

        if (user) {
            // Store user info in localStorage for demo purposes
            localStorage.setItem("epicUser", JSON.stringify(user));
            router.push("/dashboard");
        } else {
            setError("Invalid email or password. Try demo credentials below.");
        }
        setIsLoading(false);
    };

    const fillDemoCredentials = (userIndex: number) => {
        setEmail(DEMO_USERS[userIndex].email);
        setPassword(DEMO_USERS[userIndex].password);
        setError("");
    };

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <section className="pt-24 pb-16 px-4">
                <div className="max-w-md mx-auto">
                    {/* Logo & Title */}
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <GraduationCap className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <h1 className="text-2xl font-bold text-foreground">Welcome Back</h1>
                        <p className="text-muted-foreground">Sign in to your Epic Campus account</p>
                    </div>

                    {/* Login Form */}
                    <div className="bg-card rounded-2xl border border-border p-6 shadow-epic-sm">
                        <form onSubmit={handleLogin} className="space-y-4">
                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-card-foreground mb-1.5">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                    required
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-sm font-medium text-card-foreground mb-1.5">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full px-4 py-3 pr-12 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-lg">
                                    {error}
                                </div>
                            )}

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-6 text-lg font-semibold gap-2"
                            >
                                {isLoading ? (
                                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                ) : (
                                    <>
                                        <LogIn className="w-5 h-5" />
                                        Sign In
                                    </>
                                )}
                            </Button>
                        </form>

                        {/* Forgot Password */}
                        <div className="text-center mt-4">
                            <a href="#" className="text-sm text-primary hover:underline">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    {/* Demo Credentials Box */}
                    <div className="mt-6 bg-accent/10 rounded-2xl border border-accent/30 p-5">
                        <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            🔐 Demo Credentials
                            <span className="text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
                                For Testing
                            </span>
                        </h3>

                        <div className="space-y-3">
                            {DEMO_USERS.map((user, index) => (
                                <div
                                    key={index}
                                    className="bg-card rounded-xl p-3 border border-border flex items-center justify-between"
                                >
                                    <div>
                                        <p className="font-medium text-card-foreground text-sm">{user.name}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {user.email} / {user.password}
                                        </p>
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => fillDemoCredentials(index)}
                                        className="text-xs"
                                    >
                                        Use This
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sign Up Link */}
                    <p className="text-center text-sm text-muted-foreground mt-6">
                        Don't have an account?{" "}
                        <a href="#" className="text-primary font-medium hover:underline">
                            Sign up for free
                        </a>
                    </p>
                </div>
            </section>
        </main>
    );
}
