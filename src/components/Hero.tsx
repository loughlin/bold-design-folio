import { Button } from "@/components/ui/button";
import { Linkedin, Mail, ArrowRight } from "lucide-react";
import jamesProfileBw from "@/assets/james-profile-bw.jpg";

const STATS = [
  { value: "8yr", label: "designing software" },
  { value: "12", label: "products shipped" },
  { value: "20+", label: "designers mentored" },
] as const;

const Hero = () => {
  return (
    <section id="hero" className="pt-20 md:pt-24 pb-6 px-6 scroll-mt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left — positioning */}
          <div className="lg:col-span-7 animate-fade-in">
            <p className="font-technical text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.18em] mb-4">
              Design Leadership · Design Systems · Research
            </p>

            <h1 className="text-xl sm:text-2xl lg:text-[clamp(1.25rem,2.2vw,1.75rem)] font-medium tracking-tight leading-[1.35] text-balance">
              15 years in technology.
              <br className="hidden sm:block" /> 8 designing software.
            </h1>

            <p className="mt-5 max-w-reading text-base text-muted-foreground leading-[1.7]">
              I'm James Loughlin, Portfolio Design Lead at Kessel Run (USAF). I
              build design culture inside teams shipping software to active Air
              Force missions, and I care most about the problems that don't have
              a clean answer yet.
            </p>

            {/* Stats */}
            <dl className="mt-6 grid grid-cols-3 gap-6 max-w-md border-y border-border py-5">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xl md:text-2xl font-bold text-foreground tabular-nums">
                    {stat.value}
                  </dt>
                  <dd className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild className="rounded-[14px]">
                <a href="#work">
                  View work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild className="rounded-[14px]">
                <a href="mailto:jloughlin87@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email me
                </a>
              </Button>
              <Button variant="ghost" asChild className="rounded-[14px]">
                <a
                  href="https://www.linkedin.com/in/jameslloughlin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Right — portrait */}
          <div
            className="lg:col-span-5 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <img
              src={jamesProfileBw}
              alt="James Loughlin"
              width={800}
              height={1000}
              fetchPriority="high"
              decoding="async"
              className="w-full max-w-sm mx-auto lg:max-w-none aspect-[3/4] object-cover rounded-[14px] grayscale hover:grayscale-0 transition-[filter] duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
