import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Portfolio thumbnail images for carousel
  const carouselImages = [
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
  ];

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20 pb-24 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12">
          {/* Top - UX Design Leader Banner */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">
              UX Design Leader
            </span>
          </div>

          {/* Animated Image Carousel */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl bg-muted/50 p-8">
              <div className="flex gap-4 animate-scroll">
                {/* Double the images for seamless loop */}
                {[...carouselImages, ...carouselImages].map((img, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-64 h-48 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
                  >
                    <img
                      src={img}
                      alt={`Portfolio thumbnail ${(idx % carouselImages.length) + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text Content - Below Images */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl">
              Bringing human centered solutions to your{" "}
              <span className="text-gradient">design problems.</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
