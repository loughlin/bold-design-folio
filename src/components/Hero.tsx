import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="flex flex-col justify-center pt-36 pb-16 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl flex flex-col gap-5">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="font-technical text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
              UX Design Leader
            </span>
          </div>

          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className=”text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground”>
              Eight years designing software.{“ “}
              <span className=”text-primary”>
                Three of them managing the team.
              </span>
            </h1>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? “opacity-100 translate-y-0” : “opacity-0 translate-y-8”
            }`}
          >
            <p className=”text-lg text-muted-foreground leading-relaxed max-w-2xl”>
              Most of that time at Kessel Run, the Air Force's in-house software shop — software that operators use in active missions. I shifted into management after a few years, less because I wanted to and more because the biggest problems were organizational. The design was usually fine. Getting it through the org wasn't.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
