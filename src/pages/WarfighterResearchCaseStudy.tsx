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
          caption: "Design decisions based on assumptions with low user adoption and post-launch rework"
        },
        after: {
          image: designThinkingWorkshop,
          caption: "User-validated designs with high confidence, improved adoption, and measurable mission impact"
        }
      }}
      outcomes={[
        "Prevented 3 major features from being built after research revealed they wouldn't solve user problems, saving $500K+ in development costs",
        "Improved user satisfaction scores from 6.2 to 8.4/10 across tested applications",
        "Reduced post-launch design changes by 65% through early validation with actual users",
        "Established user research as standard practice across all 6 T&G Portfolio missions",
        "Created library of 50+ research insights accessible to all product teams, informing future design decisions",
        "Trained 15 designers and product managers in basic research methods, building team capability",
        "Stakeholder feedback: 'Research has transformed how we prioritize features—we now have confidence that what we build will actually be used'",
        "Reduced average feature development cycle by 3 weeks through early problem validation",
        "Established accessibility testing protocols that identified 40+ usability barriers for users in operational environments"
      ]}
      images={[
        {
          url: userResearchInterview,
          caption: "Contextual inquiry session with users in operational environment"
        },
        {
          url: designThinkingWorkshop,
          caption: "Journey map documenting user workflows and pain points across systems"
        }
      ]}
    />
  );
};

export default WarfighterResearchCaseStudy;
