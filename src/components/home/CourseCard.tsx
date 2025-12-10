import { Star, Clock, Users, Video, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  title: string;
  instructor: string;
  price: number;
  originalPrice?: number;
  rating: number;
  students: number;
  duration: string;
  level: string;
  image: string;
  hasLiveClass?: boolean;
  isBestseller?: boolean;
  language: "japanese" | "korean";
}

const CourseCard = ({
  title,
  instructor,
  price,
  originalPrice,
  rating,
  students,
  duration,
  level,
  image,
  hasLiveClass,
  isBestseller,
  language,
}: CourseCardProps) => {
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("en-LK", {
      style: "currency",
      currency: "LKR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-epic-sm hover:shadow-epic-lg transition-all duration-300 hover:-translate-y-1 border border-border">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {isBestseller && (
            <Badge className="bg-epic-warning text-foreground font-semibold">
              Bestseller
            </Badge>
          )}
          {hasLiveClass && (
            <Badge className="bg-epic-success text-accent-foreground font-semibold gap-1">
              <Video className="w-3 h-3" />
              Live Included
            </Badge>
          )}
        </div>

        {/* Language Badge */}
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm text-foreground font-medium">
            {language === "japanese" ? "🇯🇵 Japanese" : "🇰🇷 Korean"}
          </Badge>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button className="bg-accent hover:bg-epic-orange-dark text-accent-foreground font-semibold transform scale-90 group-hover:scale-100 transition-transform">
            Preview Course
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Level */}
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground font-medium">{level}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-card-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
          {title}
        </h3>

        {/* Instructor */}
        <p className="text-sm text-muted-foreground mb-3">by {instructor}</p>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-epic-warning fill-epic-warning" />
            <span className="text-sm font-semibold text-card-foreground">{rating}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Users className="w-4 h-4" />
            <span className="text-sm">{students.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{duration}</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-card-foreground">{formatPrice(price)}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">{formatPrice(originalPrice)}</span>
            )}
          </div>
          <Button size="sm" className="bg-accent hover:bg-epic-orange-dark text-accent-foreground font-semibold">
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;