const OurValues = () => {
    const values = [
        {
            japanese: "誠実",
            korean: "성실",
            english: "Integrity",
            description: "We maintain the highest standards in our teaching methods and student interactions.",
            color: "bg-blue-500/10 text-blue-600",
        },
        {
            japanese: "尊重",
            korean: "존중",
            english: "Respect",
            description: "We honor the cultures we teach and the diverse backgrounds of our students.",
            color: "bg-purple-500/10 text-purple-600",
        },
        {
            japanese: "情熱",
            korean: "열정",
            english: "Passion",
            description: "Our love for language and culture drives everything we do.",
            color: "bg-accent/10 text-accent",
        },
        {
            japanese: "革新",
            korean: "혁신",
            english: "Innovation",
            description: "We continuously improve our methods to make learning more effective and engaging.",
            color: "bg-green-500/10 text-green-600",
        },
        {
            japanese: "協力",
            korean: "협력",
            english: "Community",
            description: "We build a supportive community where students learn and grow together.",
            color: "bg-pink-500/10 text-pink-600",
        },
        {
            japanese: "卓越",
            korean: "탁월",
            english: "Excellence",
            description: "We strive for excellence in every lesson, resource, and student outcome.",
            color: "bg-amber-500/10 text-amber-600",
        },
    ];

    return (
        <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                        🎌 Our Values • 価値観 • 가치관
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Guided by Eastern Philosophy
                    </h2>
                    <p className="text-muted-foreground">
                        Our core values are inspired by the rich traditions of Japan and Korea
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-2xl p-6 border border-border hover:shadow-epic-md transition-all group"
                        >
                            {/* Asian characters */}
                            <div className="flex items-center gap-3 mb-4">
                                <span className={`text-3xl font-bold ${value.color} px-3 py-1 rounded-lg`}>
                                    {value.japanese}
                                </span>
                                <span className="text-xl text-muted-foreground font-medium">
                                    {value.korean}
                                </span>
                            </div>

                            {/* English title */}
                            <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                                {value.english}
                            </h3>

                            {/* Description */}
                            <p className="text-muted-foreground text-sm">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurValues;
