import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import Reveal from "@/components/Reveal";

const Testimonials = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="testimonials" className="section-spacing px-6 bg-muted/40 overflow-hidden scroll-mt-20">
      <Reveal className="container mx-auto">
        <div className="section-header-spacing animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">From people I've worked with.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(isExpanded ? testimonials : testimonials.slice(0, 3)).map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-[14px] border border-border/60 bg-card transition-colors duration-300 hover:border-border animate-fade-in flex flex-col"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <blockquote className="text-base text-foreground leading-relaxed flex-1 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="font-technical text-[10px] font-bold text-primary">
                    {testimonial.author.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground font-technical">{testimonial.organization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
            className="gap-2 rounded-[14px]"
          >
            {isExpanded ? (
              <>Show Less <ChevronUp className="h-4 w-4" /></>
            ) : (
              <>Show All ({testimonials.length}) <ChevronDown className="h-4 w-4" /></>
            )}
          </Button>
        </div>
      </Reveal>
    </section>
  );
};

export default Testimonials;
