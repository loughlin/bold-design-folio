import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, ChevronDown, ChevronUp } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-12 px-6 overflow-hidden">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-10 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold">What Others Say!</h2>
        </div>

        {/* Testimonials - Vertical Scroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(isExpanded ? testimonials : testimonials.slice(0, 3)).map((testimonial, index) => (
            <Card
              key={index}
              className="hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-primary/20 mb-3" />
                <blockquote className="text-base text-foreground leading-relaxed mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="space-y-1">
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {testimonial.organization}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More/Less Button */}
        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
            className="gap-2"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Show All ({testimonials.length}) <ChevronDown className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
