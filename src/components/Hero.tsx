import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="flex flex-col justify-center pt-24 pb-10 px-6">
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

          {/* Text Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl">
              I like to bring human-centered solutions to your{" "}
              <span className="text-gradient">design problems.</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
