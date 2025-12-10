"use client";

import { useState, useEffect } from "react";
import { Play, Calendar, Clock, CheckCircle2, ArrowRight, BookOpen, TrendingUp, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const DashboardPreview = () => {
  const [timeUntilClass, setTimeUntilClass] = useState({ hours: 2, minutes: 45, seconds: 30 });
  const [isClassReady, setIsClassReady] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeUntilClass((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        setIsClassReady(true);
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const courses = [
    { title: "JLPT N5 Complete Course", progress: 65, lessons: "12/18 Lessons", image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=100&h=100&fit=crop" },
    { title: "Korean Beginner - Hangul", progress: 40, lessons: "8/20 Lessons", image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=100&h=100&fit=crop" },
  ];

  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Student Dashboard
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Your Learning Command Center
          </h2>
          <p className="text-lg text-muted-foreground">
            Track progress, join live classes, and manage your learning journey all in one place
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="relative max-w-5xl mx-auto">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 blur-3xl opacity-30 -z-10" />

          <div className="bg-card rounded-3xl border border-border shadow-epic-lg overflow-hidden">
            {/* Dashboard Header */}
            <div className="gradient-hero p-6 md:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-primary-foreground/80 text-sm mb-1">Welcome back,</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground">Kasun Perera</h3>
                </div>
                <div className="flex items-center gap-3">
                  <button className="relative p-3 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                    <Bell className="w-5 h-5 text-primary-foreground" />
                    <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-accent" />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Live Class Card */}
              <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-accent" />
                  <h4 className="font-semibold text-card-foreground">Next Live Class</h4>
                </div>

                <div className="bg-card rounded-xl p-4 mb-4 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-semibold text-card-foreground truncate">JLPT N5 Grammar</h5>
                      <p className="text-sm text-muted-foreground">Sensei Yamamoto</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Today, 7:00 PM SLST</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Countdown */}
                <div className="text-center mb-4">
                  <p className="text-sm text-muted-foreground mb-2">Class starts in</p>
                  <div className="flex items-center justify-center gap-2">
                    {[
                      { value: timeUntilClass.hours, label: "HRS" },
                      { value: timeUntilClass.minutes, label: "MIN" },
                      { value: timeUntilClass.seconds, label: "SEC" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-16 h-16 rounded-xl bg-primary text-primary-foreground flex flex-col items-center justify-center">
                          <span className="text-2xl font-bold">{String(item.value).padStart(2, "0")}</span>
                          <span className="text-xs opacity-70">{item.label}</span>
                        </div>
                        {index < 2 && <span className="text-2xl font-bold text-muted-foreground">:</span>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Join Button */}
                <Button
                  className={`w-full py-6 text-lg font-semibold gap-2 transition-all ${isClassReady
                      ? "bg-epic-success hover:bg-epic-success/90 text-accent-foreground animate-pulse-glow"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                    }`}
                  disabled={!isClassReady}
                >
                  <Play className="w-5 h-5" />
                  {isClassReady ? "Join Class Now" : "Waiting for Host..."}
                </Button>
              </div>

              {/* My Courses */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-card-foreground flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    My Courses
                  </h4>
                  <button className="text-sm text-accent hover:underline font-medium flex items-center gap-1">
                    View All <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {courses.map((course, index) => (
                  <div key={index} className="bg-secondary/50 rounded-xl p-4 border border-border hover:border-accent/30 transition-colors">
                    <div className="flex gap-4">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h5 className="font-semibold text-card-foreground truncate mb-1">{course.title}</h5>
                        <p className="text-sm text-muted-foreground mb-2">{course.lessons}</p>
                        <div className="flex items-center gap-3">
                          <Progress value={course.progress} className="flex-1 h-2" />
                          <span className="text-sm font-medium text-accent">{course.progress}%</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="w-full mt-3 text-accent hover:text-accent hover:bg-accent/10">
                      <Play className="w-4 h-4 mr-2" />
                      Resume Learning
                    </Button>
                  </div>
                ))}

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-epic-success/10 rounded-xl p-4 text-center">
                    <CheckCircle2 className="w-8 h-8 text-epic-success mx-auto mb-2" />
                    <p className="text-2xl font-bold text-card-foreground">24</p>
                    <p className="text-sm text-muted-foreground">Lessons Done</p>
                  </div>
                  <div className="bg-accent/10 rounded-xl p-4 text-center">
                    <Clock className="w-8 h-8 text-accent mx-auto mb-2" />
                    <p className="text-2xl font-bold text-card-foreground">18h</p>
                    <p className="text-sm text-muted-foreground">Study Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;