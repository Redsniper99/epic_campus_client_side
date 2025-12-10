import { MapPin, Calendar, Users, Award } from "lucide-react";

const OurStory = () => {
    const milestones = [
        { year: "2019", event: "Epic Campus founded in Colombo", icon: MapPin },
        { year: "2020", event: "Launched online learning platform", icon: Calendar },
        { year: "2022", event: "Reached 5,000+ active students", icon: Users },
        { year: "2024", event: "95% JLPT & TOPIK pass rate achieved", icon: Award },
    ];

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Left - Story */}
                    <div>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                            🌸 Our Story • 私たちの物語
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            From a Dream to Sri Lanka's
                            <span className="text-accent block">Leading Language School</span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                Epic Campus was born from a simple belief: that language learning should be
                                <span className="text-foreground font-medium"> accessible, engaging, and culturally immersive</span>
                                for every Sri Lankan who dreams of connecting with Japan and Korea.
                            </p>
                            <p>
                                Our founder, inspired by years of studying in Tokyo and Seoul, recognized the gap
                                in quality language education in Sri Lanka. What started as weekend classes in a
                                small Colombo classroom has grown into a comprehensive online platform reaching
                                students across the island.
                            </p>
                            <p>
                                Today, we're proud to have helped thousands of students achieve their JLPT and TOPIK
                                certifications, enabling them to pursue education, careers, and dreams in Japan and Korea.
                            </p>
                        </div>

                        {/* Japanese proverb */}
                        <div className="mt-8 p-4 bg-secondary/50 rounded-xl border-l-4 border-accent">
                            <p className="text-lg font-medium text-foreground mb-1">
                                「千里の道も一歩から」
                            </p>
                            <p className="text-sm text-muted-foreground">
                                "A journey of a thousand miles begins with a single step" — Japanese proverb
                            </p>
                        </div>
                    </div>

                    {/* Right - Timeline */}
                    <div className="bg-card rounded-2xl p-8 border border-border shadow-epic-sm">
                        <h3 className="text-xl font-bold text-card-foreground mb-6">Our Journey</h3>
                        <div className="space-y-6">
                            {milestones.map((milestone, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                            <milestone.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        {index < milestones.length - 1 && (
                                            <div className="w-0.5 h-full bg-border mt-2" />
                                        )}
                                    </div>
                                    <div className="pb-6">
                                        <span className="text-accent font-bold text-lg">{milestone.year}</span>
                                        <p className="text-card-foreground font-medium">{milestone.event}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
