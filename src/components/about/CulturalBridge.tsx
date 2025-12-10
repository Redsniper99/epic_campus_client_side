import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CulturalBridge = () => {
    const culturalElements = [
        {
            country: "Japan",
            flag: "🇯🇵",
            items: [
                { title: "茶道", subtitle: "Sadō", description: "Tea Ceremony" },
                { title: "書道", subtitle: "Shodō", description: "Calligraphy" },
                { title: "武道", subtitle: "Budō", description: "Martial Arts" },
                { title: "華道", subtitle: "Kadō", description: "Flower Arrangement" },
            ],
        },
        {
            country: "Korea",
            flag: "🇰🇷",
            items: [
                { title: "한복", subtitle: "Hanbok", description: "Traditional Dress" },
                { title: "사물놀이", subtitle: "Samulnori", description: "Traditional Percussion" },
                { title: "태권도", subtitle: "Taekwondo", description: "Martial Art" },
                { title: "한글", subtitle: "Hangul", description: "Korean Script" },
            ],
        },
    ];

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 gradient-hero" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

            <div className="relative container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-semibold mb-4">
                        🌏 Cultural Bridge • 文化の架け橋 • 문화의 다리
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                        More Than Just Language
                    </h2>
                    <p className="text-primary-foreground/80">
                        We teach culture alongside language, giving you a complete understanding
                        of Japan and Korea's rich traditions.
                    </p>
                </div>

                {/* Cultural Elements Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                    {culturalElements.map((country, index) => (
                        <div key={index} className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 border border-border">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-4xl">{country.flag}</span>
                                <h3 className="text-2xl font-bold text-card-foreground">{country.country}</h3>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {country.items.map((item, idx) => (
                                    <div key={idx} className="bg-secondary/50 rounded-xl p-4 hover:bg-secondary transition-colors">
                                        <p className="text-2xl font-bold text-foreground">{item.title}</p>
                                        <p className="text-sm text-accent font-medium">{item.subtitle}</p>
                                        <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <p className="text-primary-foreground/80 mb-4">
                        Ready to start your cultural journey?
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="bg-accent hover:bg-epic-orange-dark text-accent-foreground px-8 py-6 text-lg font-bold shadow-glow gap-2">
                            Start Learning Today
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                        <Button size="lg" className="bg-transparent border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg">
                            View All Courses
                        </Button>
                    </div>
                </div>

                {/* Korean proverb */}
                <div className="mt-12 text-center">
                    <p className="text-xl font-medium text-primary-foreground mb-1">
                        「시작이 반이다」
                    </p>
                    <p className="text-sm text-primary-foreground/60">
                        "Starting is half the work" — Korean proverb
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CulturalBridge;
