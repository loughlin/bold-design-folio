import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="flex flex-col justify-center pt-32 pb-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
              UX Design Leader
            </span>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] max-w-3xl tracking-tight">
              Hi, I'm James.{" "}
              <span className="text-gradient">I design software and build the teams that ship it.</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
