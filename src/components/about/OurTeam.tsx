import { Star, GraduationCap, Globe } from "lucide-react";

const OurTeam = () => {
    const team = [
        {
            name: "Yamamoto Kenji",
            nameJp: "山本 健二",
            role: "Japanese Language Director",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
            country: "🇯🇵 Tokyo, Japan",
            experience: "15+ years",
            description: "Former professor at Waseda University, JLPT N1 certified examiner.",
        },
        {
            name: "Kim Soo-yeon",
            nameKr: "김수연",
            role: "Korean Language Director",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
            country: "🇰🇷 Seoul, Korea",
            experience: "12+ years",
            description: "Graduated from Seoul National University, TOPIK evaluation committee member.",
        },
        {
            name: "Tanaka Yuki",
            nameJp: "田中 由紀",
            role: "Curriculum Designer",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
            country: "🇯🇵 Osaka, Japan",
            experience: "10+ years",
            description: "Specializes in creating engaging content for South Asian learners.",
        },
        {
            name: "Park Ji-hoon",
            nameKr: "박지훈",
            role: "Technology Lead",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
            country: "🇰🇷 Busan, Korea",
            experience: "8+ years",
            description: "Building innovative learning experiences with cutting-edge technology.",
        },
    ];

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                        👥 Our Team • チーム • 팀
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Meet Our Expert Instructors
                    </h2>
                    <p className="text-muted-foreground">
                        Native speakers with decades of combined experience in language education
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-epic-lg transition-all group"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-3 left-3 right-3">
                                    <p className="text-white/80 text-sm flex items-center gap-1">
                                        <GraduationCap className="w-3 h-3" />
                                        {member.experience}
                                    </p>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-card-foreground">{member.name}</h3>
                                <p className="text-sm text-muted-foreground mb-1">
                                    {member.nameJp || member.nameKr}
                                </p>
                                <p className="text-sm text-accent font-medium mb-2">{member.role}</p>
                                <p className="text-xs text-muted-foreground mb-3">{member.country}</p>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    {member.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
