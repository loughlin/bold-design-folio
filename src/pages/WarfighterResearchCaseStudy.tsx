import CaseStudyLayout from "@/components/CaseStudyLayout";
import userResearchInterview from "@/assets/user-research-interview.jpg";
import designThinkingWorkshop from "@/assets/design-thinking-workshop.jpg";
import teamCollaborationMeeting from "@/assets/team-collaboration-meeting.jpg";

const WarfighterResearchCaseStudy = () => {
  return (
    <CaseStudyLayout
      title="Organizational Research Reboot"
      subtitle="De-risking product decisions through qualitative user research"
      heroImage={userResearchInterview}
      overview="Led comprehensive user research initiatives with users across multiple USAF missions to validate product concepts, uncover user needs, and reduce risk before significant development investment. This research program established user-centered design practices within a traditionally engineering-focused environment."
      problem="Product teams were making critical design decisions based on stakeholder assumptions only. A merger of outside programs needed to be realigned to modern research methods and practices. Teams lacked direct access to end users and relied on second hand information or stakeholder knowledge and had no established standardized research processes for assimilating or disseminating findings to justify and support work."
      problemStatement="How might we establish research practices that give product teams direct access to users' needs, validate design decisions early, and build empathy for users operating in high-stakes mission-critical environments while making that information accessible and digestible to stakeholders?"
      role="Lead UX Researcher & Product Designer"
      timeline="2020 - Present (Ongoing)"
      team="Research team of 2 designers, collaborated with 8 product teams"
      designProcess={[
        {
          name: "Discover",
          type: "divergent",
          description: "Understanding user contexts, workflows, and pain points through immersive research.",
          activities: ["Contextual inquiries", "Field studies", "Stakeholder interviews", "Shadowing sessions"]
        },
        {
          name: "Define",
          type: "convergent",
          description: "Synthesizing research into actionable insights and clear problem definitions.",
          activities: ["Affinity mapping", "Journey mapping", "Persona creation", "Problem framing"]
        },
        {
          name: "Develop",
          type: "divergent",
          description: "Generating and testing multiple solutions through iterative prototyping.",
          activities: ["Concept ideation", "Prototype testing", "A/B comparisons", "Card sorting"]
        },
        {
          name: "Deliver",
          type: "convergent",
          description: "Refining and communicating validated solutions for implementation.",
          activities: ["Research reports", "Design recommendations", "Insight libraries", "Team readouts"]
        }
      ]}
      research={{
        title: "Research Methodology",
        content: [
          "Conducted 30+ contextual inquiries and shadowing sessions with operational users of products in the portfolio both developed internally and inherited from other program offices.",
          "Facilitated 30+ usability testing sessions with active duty personnel in given program offices.",
          "Ran participatory design workshops with operational users to co-create solutions and build application trust.",
          "Established research operations including participant recruitment share outs and common points of contact for research standards.",
          "Created and contributed to research artifacts and repositories accessible to all product teams."
        ]
      }}
      process={[
        {
          title: "1. Research Strategy & Alignment",
          content: [
            "Defined research goals tied to product success metrics including adoption rates, error reduction, and user satisfaction",
            "Established hypotheses before research began to focus on decision-critical questions rather than exploratory curiosity",
            "Embedded researchers early in planning cycles so user evidence could influence roadmaps and feature prioritization",
            "Created Research Briefs for each project outlining objectives, audiences, measures of success, and deliverables"
          ]
        },
        {
          title: "2. Mixed Methods Research",
          content: [
            "Conducted generative research through contextual inquiries, diary studies, and field observations at operational bases",
            "Ran task-based moderated usability sessions with think-aloud protocols to validate design concepts",
            "Deployed large-scale surveys with behavioral segments to quantify pain points and preferences",
            "Triangulated insights across qualitative and quantitative methods to reduce bias and increase confidence"
          ]
        },
        {
          title: "3. Synthesis & Stakeholder Engagement",
          content: [
            "Translated insights into decision-ready artifacts including opportunity maps, impact-effort matrices, and clear recommendations",
            "Facilitated research synthesis workshops with cross-functional teams to co-interpret findings",
            "Delivered findings in digestible sessions tied to product OKRs rather than data dumps",
            "Built centralized research repositories with standard templates for plans, screeners, guides, and reports"
          ]
        },
        {
          title: "4. Documentation & Operationalization",
          content: [
            "Created searchable insight libraries with tagging systems for topics, products, and user segments",
            "Linked research insights directly to product tickets and documentation for traceability",
            "Established research readiness gates in delivery processes to ensure evidence informed decisions",
            "Defined 'Research Done' criteria requiring evidence that directly influences product decisions"
          ]
        }
      ]}
      heuristics={[
        {
          name: "Match Real World",
          description: "Research-informed terminology and workflows replaced engineer assumptions, aligning with actual mission planning language.",
          before: 2,
          after: 5
        },
        {
          name: "User Control & Freedom",
          description: "User feedback drove undo/redo patterns and flexible workflows that matched how operators actually work.",
          before: 2,
          after: 4
        },
        {
          name: "Error Prevention",
          description: "Usability testing identified error-prone workflows, leading to confirmation dialogs and validation patterns.",
          before: 2,
          after: 4
        },
        {
          name: "Recognition over Recall",
          description: "Card sorting and tree testing optimized information architecture, reducing cognitive load during high-stress operations.",
          before: 2,
          after: 5
        },
        {
          name: "Flexibility & Efficiency",
          description: "Research revealed power user shortcuts and customization needs, enabling 25% faster task completion.",
          before: 2,
          after: 4
        },
        {
          name: "Help & Documentation",
          description: "User research insights embedded into component guidelines provided contextual help for designers.",
          before: 1,
          after: 4
        }
      ]}
      engagementMetrics={[
        {
          value: "3 weeks",
          label: "Faster Development",
          description: "Reduced feature cycle through early validation",
          percentage: 60
        },
        {
          value: "$500K+",
          label: "Costs Avoided",
          description: "Features prevented that wouldn't solve problems",
          percentage: 85
        },
        {
          value: "65%",
          label: "Less Rework",
          description: "Reduced post-launch design changes",
          percentage: 65
        },
        {
          value: "35%",
          label: "Higher Adoption",
          description: "User satisfaction 6.2 → 8.4/10",
          percentage: 84
        }
      ]}
      beforeAfter={{
        before: {
          image: teamCollaborationMeeting,
          caption: "Siloed research practices • Decisions based on stakeholder assumptions • No standardized processes • Insights lost between teams • Limited user access"
        },
        after: {
          image: designThinkingWorkshop,
          caption: "Unified research operations • Evidence-based decision making • Centralized insight repositories • Cross-team knowledge sharing • Direct user engagement"
        }
      }}
      outcomes={[
        "Prevented 3 major features from being built after research revealed they wouldn't solve user problems, saving $500K+ in development costs",
        "Improved user satisfaction scores from 6.2 to 8.4/10 across tested applications through research-informed design decisions",
        "Reduced post-launch design changes by 65% through early validation with actual users before development investment",
        "Established user research as standard practice across all 6 T&G Portfolio missions with consistent methodology",
        "Created searchable library of 50+ research insights with tagging systems for topics, products, and user segments",
        "Built centralized research repositories with standard templates for plans, screeners, moderator guides, and reports",
        "Trained 15 designers and product managers in research methods, establishing research readiness gates in delivery processes",
        "Reduced average feature development cycle by 3 weeks through early problem validation and hypothesis-driven research",
        "Established quarterly research impact reporting to leadership, tying research directly to product performance metrics"
      ]}
      images={[]}
    />
  );
};

export default WarfighterResearchCaseStudy;
