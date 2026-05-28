import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="section-spacing px-6 bg-foreground text-background scroll-mt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 space-y-6">
            <p className="font-technical text-[11px] font-semibold uppercase tracking-[0.18em] text-background/50">
              Get in touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-background">
              Let's work together.
            </h2>
            <div className="space-y-4 text-background/70 text-base leading-relaxed">
              <p>
                I'm best on problems with real complexity â€” a team that needs
                structure, a product that needs grounding in actual user research,
                or a system that has to hold together under pressure.
              </p>
              <p>
                If that sounds like your situation, send me an email. I usually
                reply within a day.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                asChild
                size="default"
                className="rounded-[14px] bg-background text-foreground hover:bg-background/90"
              >
                <a href="mailto:jloughlin87@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  jloughlin87@gmail.com
                </a>
              </Button>
              <Button
                asChild
                size="default"
                variant="outline"
                className="rounded-[14px] bg-transparent border-background/30 text-background hover:bg-background/10 hover:text-background"
              >
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

          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-1 gap-px border border-background/10 bg-background/10">
              {[
                ["Location", "Cherokee, Iowa"],
                ["Available for", "Full-time · Contract · Advisory"],
                ["Response time", "Usually within a day"],
                ["Time zone", "Central (CT)"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-baseline justify-between bg-foreground p-5"
                >
                  <dt className="text-[11px] font-technical font-semibold tracking-[0.18em] uppercase text-background/40">
                    {label}
                  </dt>
                  <dd className="text-sm text-background/80">{value}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
