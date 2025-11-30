import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "James brings exceptional leadership to our design organization. His ability to balance strategic thinking with hands-on execution has been instrumental in elevating our design culture.",
      author: "Sarah Mitchell",
      role: "Product Director",
      organization: "Kessel Run",
    },
    {
      quote: "Working with James on design systems has transformed how our teams collaborate. His facilitation skills and human-centered approach create environments where innovation thrives.",
      author: "Michael Chen",
      role: "Senior Engineer",
      organization: "USAF",
    },
    {
      quote: "James's dedication to psychological safety and team alignment has made a measurable impact on our delivery capabilities. He's a true advocate for both users and designers.",
      author: "Emily Rodriguez",
      role: "Product Designer",
      organization: "Kessel Run",
    },
    {
      quote: "His deep understanding of warfighter needs combined with technical expertise makes him an invaluable partner in building mission-critical applications.",
      author: "Colonel David Hayes",
      role: "Program Manager",
      organization: "United States Air Force",
    },
  ];

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-16 space-y-4 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold">What Others Say!</h2>
          <p className="text-xl text-muted-foreground">
            Building trust through collaboration
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-full md:w-[500px] hover-lift snap-start animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <Quote className="w-12 h-12 text-primary/20 mb-4" />
                  <blockquote className="text-lg text-foreground leading-relaxed mb-6">
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
        </div>

        {/* Scroll Hint */}
        <p className="text-center text-sm text-muted-foreground mt-4">
          Scroll to see more testimonials →
        </p>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
