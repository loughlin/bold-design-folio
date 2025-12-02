import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, ChevronDown, ChevronUp } from "lucide-react";

const Testimonials = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const testimonials = [
    {
      quote: "James was a big part in the positive experience I had working at Kessel Run. From my initial job interviews all the way to my last day, I always felt supported as both a designer and person. I learned a lot from him, which was invaluable in a time when I had to work quickly, and it surely helped to keep my head above water. He's very knowledgeable, communicative, compassionate, honest, and just an all-around good person.",
      author: "Peter Nguyen",
      role: "Lead UX Designer",
      organization: "Kessel Run",
    },
    {
      quote: "James is an outstanding Product Designer and a genuine pleasure to work with. We partnered on Marauder, where his creativity, focus, and bias for action helped the team reach a user count of over 10,000. He knows how to drive toward objectives while keeping collaboration front and center, making it easy for everyone to do their best work.",
      author: "Richard Strohecker",
      role: "Problem-solver, striving to transform gov experiences",
      organization: "Kessel Run",
    },
    {
      quote: "I had the opportunity to work with James when he was my manager at Kessel Run, and I saw firsthand his deep mastery of UX and Product Design. He has a rare ability to quickly spot strategic points of focus in complex, fast-moving environments. James is highly skilled at identifying and leveraging opportunities at every level—from individual professional development to improving project execution, guiding programs, and driving organizational change.",
      author: "Michael W. Smith",
      role: "Research and Design for Complex Domains",
      organization: "Kessel Run",
    },
    {
      quote: "James is a fantastic designer to work with. We worked together at the product team level and at the product leader level, and he maintains an unwavering commitment to the user in each, which drives a virtuous cycle of positive business outcomes. James consistently breaks down complex user journeys into clearly digestible formats, identifies the highest value pain points to address, and designs UI/UX solutions to address them.",
      author: "Adam Stoddard",
      role: "Product Leader | Veteran",
      organization: "Kessel Run",
    },
    {
      quote: "James is an outstanding UX Design Lead whose combination of problem-solving expertise and customer-first mindset sets him apart. He excels at collaborating closely with his team, ensuring that solutions are both innovative and grounded in real user needs. James has a remarkable ability to quickly grasp intended outcomes and, once challenges are identified, present a range of thoughtful, well-crafted design solutions.",
      author: "Anita Dudemaine",
      role: "Vice President, Domain Owner – Digital Personal Communications",
      organization: "Kessel Run",
    },
    {
      quote: "I had the privilege of working closely with James during our time at Kessel Run, both in his capacity as a senior product designer embedded with a product team and as a design leader in the product portfolio. In every single interaction, James was an exemplar of candor, drive, and an unwavering focus on the specific needs of our highly demanding user community. Given the opportunity, he would be my first choice for any team, without exception.",
      author: "Ryan Wade",
      role: "Software Product & Security Accelerator",
      organization: "Kessel Run",
    },
    {
      quote: "I had the distinct pleasure of working with James in his role as a portfolio design leader reporting to me, where he championed Warfighter-Centered Design across our targeting and geospatial product portfolio. Overseeing designers on five concurrent product teams, James consistently demonstrated exceptional leadership, guiding cross-functional collaboration among product management, program management, engineering, and design.",
      author: "Uwe Zimmermann",
      role: "Director of Product Design",
      organization: "Kessel Run",
    },
  ];

  return (
    <section className="py-16 px-6 overflow-hidden">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-16 space-y-4 animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-serif font-bold border-2 border-foreground px-4 py-1 rounded-lg">
              JL
            </div>
            <h2 className="text-5xl md:text-6xl font-bold">What Others Say!</h2>
          </div>
          <p className="text-xl text-muted-foreground">
            Building trust through collaboration
          </p>
        </div>

        {/* Testimonials - Carousel or Grid based on expanded state */}
        <div className="relative">
          {!isExpanded ? (
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
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {testimonials.map((testimonial, index) => (
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
          )}
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 mx-auto mt-6 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          {isExpanded ? (
            <>
              Show less <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Click to see all testimonials <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
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
