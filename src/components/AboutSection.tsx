import Reveal from "@/components/Reveal";

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing px-6 scroll-mt-20">
      <Reveal className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              A bit about me.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 space-y-4 max-w-reading">
            <p className="text-base text-muted-foreground leading-relaxed">
              I came up as a software consultant before moving into product
              design, and I shipped software for several years before stepping
              into UX management. The shift happened gradually: design problems
              turned out to be solvable, while the organizational ones were
              messier and needed someone to own them and advocate for design from
              the inside.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Most of my time since then has gone into mentoring people,
              unblocking teams, and laying down the process that lets them work
              uninhibited. I push hard on growing junior designers, keeping teams
              connected to users in the field, and cutting whatever's slowing us
              down. Less glamorous than shipping product, but it's where I feel an
              impact at scale.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Outside of work it's sports with my kids (mostly soccer right now),
              the gym, and reading whatever I can get my hands on, lately AI and
              UX. My wife and three kids fill in the rest.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default AboutSection;
