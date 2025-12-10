import { Heart, Target, Sparkles } from "lucide-react";

const AboutHero = () => {
    return (
        <section className="relative min-h-[70vh] pt-24 pb-16 overflow-hidden flex items-center">
            {/* Background */}
            <div className="absolute inset-0 gradient-hero" />

            {/* Japanese/Korean decorative characters */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
                <div className="absolute top-20 left-10 text-8xl font-bold text-primary-foreground">学</div>
                <div className="absolute top-40 right-20 text-7xl font-bold text-primary-foreground">배움</div>
                <div className="absolute bottom-32 left-1/4 text-6xl font-bold text-primary-foreground">言葉</div>
                <div className="absolute bottom-20 right-1/3 text-7xl font-bold text-primary-foreground">언어</div>
                <div className="absolute top-1/2 left-1/2 text-5xl font-bold text-primary-foreground">夢</div>
            </div>

            <div className="relative container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-4">
                        <Heart className="w-4 h-4 text-accent fill-accent" />
                        <span className="text-primary-foreground font-medium">私たちについて • 우리에 대해</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight mb-4">
                        <span className="block">Bridging Sri Lanka to</span>
                        <span className="block mt-1 text-accent">Japan & Korea</span>
                    </h1>

                    {/* Japanese/Korean tagline */}
                    <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-medium">
                        夢を叶える • 꿈을 이루다
                    </p>
                    <p className="text-sm text-primary-foreground/60 mb-6">
                        "Making Dreams Come True"
                    </p>

                    {/* Subtitle */}
                    <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                        Epic Campus is Sri Lanka's leading language learning platform, dedicated to
                        connecting aspiring learners with the rich cultures of Japan and Korea.
                    </p>
                </div>
            </div>

            {/* Wave divider */}
            <div className="absolute -bottom-1 left-0 right-0">
                <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path d="M0 60L60 52C120 45 240 30 360 22C480 15 600 15 720 18C840 22 960 30 1080 34C1200 37 1320 37 1380 37L1440 37V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="hsl(var(--background))" />
                </svg>
            </div>
        </section>
    );
};

export default AboutHero;
