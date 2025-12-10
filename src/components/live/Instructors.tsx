import { Star, Award, GraduationCap } from "lucide-react";

const Instructors = () => {
    const instructors = [
        {
            name: "Yamamoto Sensei",
            role: "Japanese Language Expert",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
            country: "🇯🇵 Tokyo, Japan",
            experience: "15+ years",
            students: "2,000+",
            rating: 4.9,
            specialties: ["JLPT Prep", "Business Japanese", "Grammar"],
        },
        {
            name: "Kim 선생님",
            role: "Korean Language Specialist",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
            country: "🇰🇷 Seoul, Korea",
            experience: "12+ years",
            students: "1,800+",
            rating: 4.9,
            specialties: ["TOPIK Prep", "K-Culture", "Pronunciation"],
        },
        {
            name: "Tanaka Sensei",
            role: "Conversation Coach",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
            country: "🇯🇵 Osaka, Japan",
            experience: "10+ years",
            students: "1,500+",
            rating: 4.8,
            specialties: ["Speaking", "Cultural Exchange", "Anime Japanese"],
        },
        {
            name: "Park 선생님",
            role: "Writing Specialist",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
            country: "🇰🇷 Busan, Korea",
            experience: "8+ years",
            students: "1,200+",
            rating: 4.8,
            specialties: ["Hangul", "Essay Writing", "Grammar"],
        },
    ];

    return (
        <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                        Expert Instructors
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                        Learn from Native Speakers
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Our instructors are certified professionals with years of teaching experience
                    </p>
                </div>

                {/* Instructor Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {instructors.map((instructor, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-epic-lg transition-all group"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={instructor.image}
                                    alt={instructor.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-3 left-3 right-3">
                                    <div className="flex items-center gap-1 text-white text-sm">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <span className="font-semibold">{instructor.rating}</span>
                                        <span className="text-white/70">• {instructor.students} students</span>
                                    </div>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-card-foreground">{instructor.name}</h3>
                                <p className="text-sm text-accent mb-2">{instructor.role}</p>
                                <p className="text-sm text-muted-foreground mb-3">{instructor.country}</p>

                                {/* Stats */}
                                <div className="flex items-center gap-4 mb-4 text-sm">
                                    <div className="flex items-center gap-1 text-muted-foreground">
                                        <Award className="w-4 h-4" />
                                        <span>{instructor.experience}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-muted-foreground">
                                        <GraduationCap className="w-4 h-4" />
                                        <span>Certified</span>
                                    </div>
                                </div>

                                {/* Specialties */}
                                <div className="flex flex-wrap gap-2">
                                    {instructor.specialties.map((specialty, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                                        >
                                            {specialty}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Instructors;
