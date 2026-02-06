import { Card, CardContent } from "@/components/ui/card";
import { skillCategories } from "@/data/skills";

const Skills = () => {
  return (
    <section id="approach" className="py-16 px-6 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-10 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold">Approach + Skills</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((skill, index) => (
            <Card
              key={index}
              className="hover-lift animate-fade-in group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
