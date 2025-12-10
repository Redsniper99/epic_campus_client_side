import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const LiveClassCTA = () => {
    const benefits = [
        "Unlimited access to all live classes",
        "Recordings available for 30 days",
        "Small class sizes (max 25 students)",
        "Native speaker instructors",
        "Interactive Q&A sessions",
        "Class materials included",
    ];

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 gradient-hero" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

            <div className="relative container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left - Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                                Start Learning with Live Classes Today
                            </h2>
                            <p className="text-lg text-primary-foreground/80 mb-8">
                                Join thousands of students who have accelerated their language learning
                                through our interactive live sessions.
                            </p>

                            {/* Benefits */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center gap-2 text-primary-foreground/90">
                                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                                        <span className="text-sm">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-accent hover:bg-epic-orange-dark text-accent-foreground px-8 py-6 text-lg font-bold shadow-glow gap-2">
                                    Start Free Trial
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                                <Button size="lg" className="bg-transparent border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg">
                                    View Pricing
                                </Button>
                            </div>
                        </div>

                        {/* Right - Pricing Card */}
                        <div className="bg-card rounded-3xl p-8 shadow-epic-lg border border-border">
                            <div className="text-center mb-6">
                                <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-3">
                                    Most Popular
                                </span>
                                <h3 className="text-2xl font-bold text-card-foreground mb-2">Live Class Pass</h3>
                                <p className="text-muted-foreground">Unlimited monthly access</p>
                            </div>

                            <div className="text-center mb-6">
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-lg text-muted-foreground">LKR</span>
                                    <span className="text-5xl font-bold text-card-foreground">4,999</span>
                                    <span className="text-muted-foreground">/mo</span>
                                </div>
                                <p className="text-sm text-muted-foreground mt-2">
                                    <span className="line-through">LKR 7,999</span>
                                    <span className="text-accent ml-2 font-semibold">Save 38%</span>
                                </p>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {[
                                    "Access all Japanese & Korean classes",
                                    "30-day recording access",
                                    "Class materials & worksheets",
                                    "Priority booking for popular classes",
                                    "Certificate of completion",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-card-foreground">
                                        <svg className="w-5 h-5 text-epic-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button className="w-full py-6 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground">
                                Get Started Now
                            </Button>

                            <p className="text-center text-xs text-muted-foreground mt-4">
                                7-day free trial • Cancel anytime
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LiveClassCTA;
