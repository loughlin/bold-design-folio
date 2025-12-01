import CaseStudyLayout from "@/components/CaseStudyLayout";

const WarfighterResearchCaseStudy = () => {
  return (
    <CaseStudyLayout
      title="User UX Research"
      subtitle="De-risking product decisions through qualitative user research"
      heroImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=900&fit=crop"
      overview="Led comprehensive user research initiatives with users across multiple USAF missions to validate product concepts, uncover user needs, and reduce risk before significant development investment. This research program established user-centered design practices within a traditionally engineering-focused environment."
      problem="Product teams were making critical design decisions based on stakeholder assumptions rather than actual user needs. This resulted in features being built that didn't align with user workflows, tools that required extensive post-launch rework, and poor adoption rates. Teams lacked direct access to end users and had no established research processes."
      problemStatement="How might we establish research practices that give product teams direct access to users' needs, validate design decisions early, and build empathy for users operating in high-stakes, mission-critical environments?"
      role="Lead UX Researcher & Product Designer"
      timeline="2020 - Present (Ongoing)"
      team="Research team of 2 designers, collaborated with 8 product teams"
      research={{
        title: "Research Methodology",
        content: [
          "Conducted 50+ contextual inquiries and shadowing sessions with users at operational bases",
          "Facilitated 30+ usability testing sessions with active duty personnel across multiple career fields",
          "Ran participatory design workshops with 100+ users to co-create solutions",
          "Established research operations including participant recruitment pipelines and incentive programs",
          "Created research repositories and insight libraries accessible to all product teams"
        ]
      }}
      process={[
        {
          title: "1. Building Research Foundations",
          content: [
            "Established relationships with squadron commanders and operational units to gain user access",
            "Created research protocols compliant with security clearance requirements and operational constraints",
            "Developed research templates and playbooks for team members with varying research experience",
            "Set up participant databases organized by career field, rank, and operational experience"
          ]
        },
        {
          title: "2. Discovery Research",
          content: [
            "Conducted field studies at air bases observing users in their natural work environment",
            "Performed task analysis to understand existing workflows and pain points",
            "Created journey maps documenting end-to-end processes across multiple systems",
            "Identified critical moments where technology failures impacted mission outcomes"
          ]
        },
        {
          title: "3. Evaluative Research",
          content: [
            "Ran moderated usability tests with interactive prototypes to validate design concepts",
            "Facilitated A/B testing sessions comparing design alternatives",
            "Conducted card sorting and tree testing to optimize information architecture",
            "Measured task success rates, time-on-task, and satisfaction scores"
          ]
        },
        {
          title: "4. Synthesis & Communication",
          content: [
            "Created research reports with actionable insights and prioritized recommendations",
            "Developed user personas representing different career fields and experience levels",
            "Facilitated research readouts with product teams and leadership stakeholders",
            "Embedded insights into design system documentation and component guidelines"
          ]
        }
      ]}
      beforeAfter={{
        before: {
          image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
          caption: "Design decisions based on assumptions with low user adoption and post-launch rework"
        },
        after: {
          image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
          caption: "User-validated designs with high confidence, improved adoption, and measurable mission impact"
        }
      }}
      outcomes={[
        "Prevented 3 major features from being built after research revealed they wouldn't solve user problems, saving $500K+ in development costs",
        "Improved user satisfaction scores from 6.2 to 8.4/10 across tested applications",
        "Reduced post-launch design changes by 65% through early validation with actual users",
        "Established user research as standard practice across all 6 T&G Portfolio missions",
        "Created library of 50+ research insights accessible to all product teams, informing future design decisions",
        "Trained 15 designers and product managers in basic research methods, building team capability"
      ]}
      images={[
        {
          url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=900&fit=crop",
          caption: "Contextual inquiry session with users in operational environment"
        },
        {
          url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&h=900&fit=crop",
          caption: "Journey map documenting user workflows and pain points across systems"
        }
      ]}
    />
  );
};

export default WarfighterResearchCaseStudy;
