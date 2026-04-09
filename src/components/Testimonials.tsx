import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Quote, ChevronDown, ChevronUp } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-24 md:py-32 px-6 bg-muted/40 overflow-hidden">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">What Others Say</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(isExpanded ? testimonials : testimonials.slice(0, 3)).map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-border/60 bg-card transition-all duration-400 hover:border-border hover:shadow-md hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <Quote className="w-8 h-8 text-primary/15 mb-3" />
              <blockquote className="text-sm text-foreground leading-relaxed mb-5">
                "{testimonial.quote}"
              </blockquote>
              <div className="space-y-0.5">
                <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                <p className="text-xs text-primary font-medium">{testimonial.organization}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less */}
        <div className="flex justify-center mt-10">
          <Button
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
            className="gap-2 rounded-full"
          >
            {isExpanded ? (
              <>Show Less <ChevronUp className="h-3.5 w-3.5" /></>
            ) : (
              <>Show All ({testimonials.length}) <ChevronDown className="h-3.5 w-3.5" /></>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
