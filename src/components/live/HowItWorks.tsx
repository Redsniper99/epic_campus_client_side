import { CalendarCheck, Video, MessageSquare, Award } from "lucide-react";

const HowItWorks = () => {
    const steps = [
        {
            icon: CalendarCheck,
            step: "01",
            title: "Book a Class",
            description: "Browse our schedule and reserve your spot in any upcoming live class. Classes fill up fast!",
        },
        {
            icon: Video,
            step: "02",
            title: "Join Live Session",
            description: "At class time, click 'Join' to enter the virtual classroom. Works on any device with a browser.",
        },
        {
            icon: MessageSquare,
            step: "03",
            title: "Interact & Learn",
            description: "Ask questions, practice speaking with your instructor, and engage with fellow students.",
        },
        {
            icon: Award,
            step: "04",
            title: "Get Feedback",
            description: "Receive personalized feedback, class recordings, and materials to review at your own pace.",
        },
    ];

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                        Simple Process
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                        How Live Classes Work
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Get started in minutes - no complicated setup required
                    </p>
                </div>

                {/* Steps */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative text-center group">
                                {/* Connector line */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
                                )}

                                {/* Icon */}
                                <div className="relative z-10 mx-auto w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-xl sm:rounded-2xl bg-card border border-border shadow-epic-sm flex items-center justify-center mb-4 md:mb-6 group-hover:shadow-epic-md group-hover:border-accent/50 transition-all">
                                    <step.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-accent" />
                                    <span className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-bold flex items-center justify-center">
                                        {step.step}
                                    </span>
                                </div>

                                {/* Content */}
                                <h3 className="text-sm sm:text-lg md:text-xl font-bold text-foreground mb-1 md:mb-2">{step.title}</h3>
                                <p className="text-muted-foreground text-xs sm:text-sm hidden sm:block">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features */}
                <div className="mt-12 md:mt-16 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                    {[
                        { title: "HD Video Quality", desc: "Crystal clear video & audio" },
                        { title: "Screen Sharing", desc: "See instructor's materials" },
                        { title: "Chat & Raise Hand", desc: "Interact without interrupting" },
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl"
                        >
                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-semibold text-foreground">{feature.title}</div>
                                <div className="text-sm text-muted-foreground">{feature.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
