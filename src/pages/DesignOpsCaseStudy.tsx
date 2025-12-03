import CaseStudyLayout from "@/components/CaseStudyLayout";

const DesignOpsCaseStudy = () => {
  return (
    <CaseStudyLayout
      title="DesignOps & Career Ladders"
      subtitle="Building design culture and establishing career frameworks"
      heroImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&h=900&fit=crop"
      overview="Established design operations practices and career development frameworks supporting 15+ designers across the T&G Portfolio at Kessel Run. Created processes, rituals, and documentation enabling the design team to scale effectively while maintaining quality and fostering professional growth in a defense technology environment."
      problem="As the design team grew from 3 to 15+ designers, the lack of established processes and career frameworks created challenges. Designers had no clear growth paths, inconsistent feedback cycles, and unclear expectations for different experience levels. Without operational processes, work became siloed, knowledge wasn't shared effectively, and team members struggled to understand how to advance their careers."
      problemStatement="How might we establish design operations and career frameworks that enable designers to grow professionally, collaborate effectively, and deliver high-quality work at scale while maintaining psychological safety and team culture?"
      role="Portfolio Design Lead & DesignOps Lead"
      timeline="2022 - Present"
      team="Design team of 15+ designers across 6 operational missions"
      designProcess={[
        {
          name: "Discover",
          type: "divergent",
          description: "Understanding team needs, career aspirations, and operational gaps.",
          activities: ["1:1 interviews", "Team surveys", "Industry research", "Gap analysis"]
        },
        {
          name: "Define",
          type: "convergent",
          description: "Establishing career frameworks and operational requirements.",
          activities: ["Level definitions", "Competency mapping", "Process documentation", "Governance setup"]
        },
        {
          name: "Develop",
          type: "divergent",
          description: "Creating rituals, documentation, and growth pathways for the team.",
          activities: ["Ritual design", "Wiki creation", "Training materials", "Mentorship programs"]
        },
        {
          name: "Deliver",
          type: "convergent",
          description: "Implementing frameworks and measuring team growth and satisfaction.",
          activities: ["Framework rollout", "IDP creation", "Promotion cycles", "Satisfaction tracking"]
        }
      ]}
      research={{
        title: "Team Research & Assessment",
        content: [
          "Conducted 1:1 interviews with all 15 designers to understand pain points and career aspirations",
          "Surveyed team on satisfaction with processes, tools, and growth opportunities (baseline: 6.4/10)",
          "Analyzed similar career frameworks from Google, Airbnb, and government design teams",
          "Identified gaps in design critique culture and lack of formalized feedback mechanisms",
          "Discovered designers were duplicating work due to poor documentation and asset management"
        ]
      }}
      process={[
        {
          title: "1. Career Framework Development",
          content: [
            "Researched industry-standard design career ladders and adapted for defense context",
            "Defined four levels: Associate Designer, Designer, Senior Designer, and Staff Designer",
            "Established competencies across craft, collaboration, communication, and leadership",
            "Created clear criteria for each level with examples and anti-patterns",
            "Aligned framework with government pay scales and promotion cycles"
          ]
        },
        {
          title: "2. Team Rituals & Processes",
          content: [
            "Implemented weekly design critiques with rotating facilitators building feedback skills",
            "Established monthly design guild meetings for knowledge sharing and community building",
            "Created quarterly design reviews providing visibility into work across all missions",
            "Set up bi-weekly design office hours for mentorship and cross-team support",
            "Launched design showcase series highlighting individual contributions and learning"
          ]
        },
        {
          title: "3. Documentation & Knowledge Management",
          content: [
            "Built design wiki documenting processes, standards, and best practices",
            "Created onboarding guides reducing new designer ramp-up time from 8 weeks to 3 weeks",
            "Established centralized Figma organization with clear file naming and permissions",
            "Implemented design review templates ensuring consistent documentation of decisions",
            "Built resource library with design patterns, research insights, and training materials"
          ]
        },
        {
          title: "4. Growth & Development",
          content: [
            "Established Individual Development Plans (IDPs) tied to career framework competencies",
            "Created mentorship program pairing junior and senior designers for skill development",
            "Organized design workshops on topics like facilitation, systems thinking, and leadership",
            "Secured budget for conference attendance and professional development",
            "Implemented peer feedback sessions aligned with promotion cycles"
          ]
        }
      ]}
      beforeAfter={{
        before: {
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
          caption: "Ad-hoc processes with unclear growth paths and limited team collaboration"
        },
        after: {
          image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
          caption: "Established design operations with clear career ladders and thriving team culture"
        }
      }}
      outcomes={[
        "Improved team satisfaction scores from 6.4/10 to 8.9/10 within 18 months",
        "Successfully promoted 6 designers through new career framework based on demonstrated competencies",
        "Reduced new designer onboarding time from 8 weeks to 3 weeks through structured documentation",
        "Achieved 94% participation rate in weekly design critiques, up from sporadic informal reviews",
        "Decreased duplicated design work by 60% through centralized asset management and documentation",
        "Retained 93% of design team members year-over-year, significantly above industry average",
        "Framework adopted by adjacent portfolios supporting 30+ additional designers across USAF",
        "Received Kessel Run leadership award for excellence in team building and operational excellence"
      ]}
      images={[
        {
          url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&h=900&fit=crop",
          caption: "Design career framework documentation showing competencies and level expectations"
        },
        {
          url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=900&fit=crop",
          caption: "Weekly design critique session fostering collaboration and feedback culture"
        }
      ]}
    />
  );
};

export default DesignOpsCaseStudy;
