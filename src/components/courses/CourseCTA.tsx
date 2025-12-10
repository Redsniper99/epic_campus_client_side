import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CourseCTA = () => {
    return (
        <section className="py-16 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 gradient-hero" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

            <div className="relative container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
                        Can't Decide Which Course to Take?
                    </h2>
                    <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                        Take our free placement test to find the perfect course for your level.
                        Or talk to our advisors for personalized recommendations.
                    </p>

                    {/* Benefits */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {[
                            "Free placement test",
                            "Personalized recommendations",
                            "7-day money-back guarantee",
                        ].map((benefit, index) => (
                            <div key={index} className="flex items-center gap-2 text-primary-foreground/90">
                                <CheckCircle className="w-5 h-5 text-accent" />
                                <span className="text-sm">{benefit}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="bg-accent hover:bg-epic-orange-dark text-accent-foreground px-8 py-6 text-lg font-bold shadow-glow gap-2">
                            Take Free Test
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                        <Button size="lg" className="bg-transparent border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg">
                            Talk to Advisor
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseCTA;
