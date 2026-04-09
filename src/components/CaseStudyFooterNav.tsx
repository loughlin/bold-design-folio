import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudyFooterNavProps {
  currentSlug: string;
}

const caseStudies = [
  { slug: "kessel-run", title: "Leading Design at Kessel Run" },
  { slug: "design-system", title: "Forging the Shared Foundation" },
  { slug: "mission-reporting", title: "Replacing Manual Calculations" },
  { slug: "warfighter-research", title: "Establishing Research from Zero" },
  { slug: "operational-dashboard", title: "Command Center" },
];

const CaseStudyFooterNav = ({ currentSlug }: CaseStudyFooterNavProps) => {
  const currentIndex = caseStudies.findIndex((cs) => cs.slug === currentSlug);
  const next = caseStudies[(currentIndex + 1) % caseStudies.length];
  const prev = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];

  return (
    <section className="py-16 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-reading">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link to={`/case-study/${prev.slug}`}>
            <Button variant="ghost" className="gap-2 rounded-[24px] text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              {prev.title}
            </Button>
          </Link>

          <Link to="/#work">
            <Button variant="outline" size="sm" className="rounded-[24px]">
              All Case Studies
            </Button>
          </Link>

          <Link to={`/case-study/${next.slug}`}>
            <Button variant="ghost" className="gap-2 rounded-[24px] text-muted-foreground hover:text-foreground">
              {next.title}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyFooterNav;
