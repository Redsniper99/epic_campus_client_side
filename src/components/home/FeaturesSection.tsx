import { Video, Clock, Shield, CreditCard, Users, Award, Wifi, Smartphone } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Video,
      title: "Live Interactive Classes",
      description: "Join real-time sessions with native speakers. Practice speaking and get instant feedback.",
      color: "bg-epic-info/10 text-epic-info",
    },
    {
      icon: Clock,
      title: "Sri Lanka Time (SLST)",
      description: "All class times automatically displayed in your local timezone. Never miss a session.",
      color: "bg-epic-success/10 text-epic-success",
    },
    {
      icon: Shield,
      title: "Secure Bank Payments",
      description: "Pay easily via bank deposit. Simply upload your receipt and get instant access confirmation.",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Wifi,
      title: "Data Saver Mode",
      description: "Stream lessons in 360p to save mobile data. Perfect for learning on the go.",
      color: "bg-epic-warning/10 text-epic-warning",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with fellow learners, join study groups, and practice together.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Award,
      title: "Certified Courses",
      description: "Earn recognized certificates upon completion. Boost your resume and career prospects.",
      color: "bg-epic-success/10 text-epic-success",
    },
    {
      icon: CreditCard,
      title: "Flexible Payments",
      description: "Pay in LKR with multiple options including card payments and bank transfers.",
      color: "bg-epic-info/10 text-epic-info",
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Learn anywhere on your phone. Our platform is designed for mobile-first experience.",
      color: "bg-accent/10 text-accent",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Why Choose Epic Campus
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Built for Sri Lankan Learners
          </h2>
          <p className="text-lg text-muted-foreground">
            We understand your needs. That's why we've designed features specifically for you.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-accent/30 hover:shadow-epic-md transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;