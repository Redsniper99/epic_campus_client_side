import { Search, Play, Users, Star, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const stats = [
    { icon: Users, value: "5,000+", label: "Active Students" },
    { icon: BookOpen, value: "50+", label: "Courses" },
    { icon: Star, value: "4.9", label: "Rating" },
  ];

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

      {/* Floating elements */}
      <div className="absolute top-32 left-10 w-20 h-20 bg-accent/20 rounded-2xl rotate-12 animate-float" />
      <div className="absolute bottom-40 right-10 w-16 h-16 bg-accent/30 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-20 w-12 h-12 border-2 border-primary-foreground/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: "0.5s" }} />

      <div className="relative container mx-auto px-4 pt-12 md:pt-16 pb-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-epic-success animate-pulse" />
            <span className="text-primary-foreground text-sm font-medium">Live Classes Available Now</span>
          </div>

          {/* Heading - 2 lines on desktop */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <span className="block">Master Japanese & Korean</span>
            <span className="block mt-1">
              <span className="relative inline-block">
                Language
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="hsl(var(--epic-orange))" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
              {" "}with Ease
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-6 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Join Sri Lanka's premier language learning platform. Expert instructors,
            live interactive classes, and a supportive community to help you succeed.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative flex items-center bg-primary-foreground rounded-2xl p-2 shadow-epic-lg">
              <Search className="absolute left-5 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for courses (e.g., JLPT N5, Korean Beginner)"
                className="w-full pl-12 pr-4 py-3 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-base md:text-lg"
              />
              <Button className="bg-accent hover:bg-epic-orange-dark text-accent-foreground px-6 py-5 text-base font-semibold shadow-epic-sm whitespace-nowrap">
                Search
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              <span className="text-primary-foreground/60 text-sm">Popular:</span>
              {["JLPT N5", "Korean Basics", "Hiragana", "TOPIK"].map((tag) => (
                <button
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm text-primary-foreground/80 hover:text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-accent hover:bg-epic-orange-dark text-accent-foreground px-8 py-5 text-lg font-semibold shadow-glow animate-pulse-glow">
              Start Free Trial
            </Button>
            <Button size="lg" className="bg-transparent border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-5 text-lg gap-2">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary-foreground/10 mb-2">
                  <stat.icon className="w-5 h-5 text-accent" />
                </div>
                <div className="text-xl md:text-2xl font-bold text-primary-foreground">{stat.value}</div>
                <div className="text-xs md:text-sm text-primary-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Japanese/Korean Characters Decoration */}
        <div className="absolute bottom-10 left-4 md:left-10 text-6xl md:text-8xl font-bold text-primary-foreground/5 select-none">
          日本語
        </div>
        <div className="absolute bottom-10 right-4 md:right-10 text-6xl md:text-8xl font-bold text-primary-foreground/5 select-none">
          한국어
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;