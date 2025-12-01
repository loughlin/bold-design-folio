import CaseStudyLayout from "@/components/CaseStudyLayout";

const DesignSystemCaseStudy = () => {
  return (
    <CaseStudyLayout
      title="T&G Portfolio Design System"
      subtitle="Establishing design consistency across 6 USAF operational missions"
      heroImage="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&h=900&fit=crop"
      overview="Led the development and implementation of a comprehensive design system for the T&G Portfolio at Kessel Run, establishing design standards and component libraries across six critical USAF operational missions. This initiative improved design velocity, ensured visual consistency, and reduced technical debt across multiple product teams."
      problem="The T&G Portfolio consisted of six distinct applications serving different USAF missions, each developed by separate product teams. Without unified design standards, teams were creating duplicate components, using inconsistent patterns, and spending significant time on basic UI decisions. This fragmentation led to poor user experience across applications, increased maintenance costs, and made it difficult for users who worked across multiple systems."
      problemStatement="How might we create a scalable design system that empowers multiple product teams to build consistent, accessible interfaces quickly while maintaining flexibility for mission-specific requirements?"
      role="Portfolio Design Lead & Design Systems Lead"
      timeline="2022 - Present (Ongoing)"
      team="Cross-functional team of 15+ designers, developers, and product managers across 6 missions"
      research={{
        title: "Research & Discovery Insights",
        content: [
          "Conducted component audits across all 6 applications, identifying 47 unique button variations and 23 different form patterns",
          "Interviewed 15 designers and developers to understand pain points and workflow bottlenecks",
          "Analyzed user feedback showing confusion when switching between applications due to inconsistent interactions",
          "Discovered teams were spending 30-40% of their time rebuilding common components",
          "Identified accessibility gaps in 68% of existing components, creating compliance risks"
        ]
      }}
      process={[
        {
          title: "1. Foundation & Principles",
          content: [
            "Established design principles aligned with USAF mission-critical needs: clarity, efficiency, and reliability",
            "Created design tokens for colors, typography, spacing, and elevation",
            "Defined accessibility standards meeting WCAG 2.1 AA compliance",
            "Set up governance model with monthly design system council meetings"
          ]
        },
        {
          title: "2. Component Library Development",
          content: [
            "Prioritized components based on usage frequency and impact (buttons, forms, tables, navigation)",
            "Built 40+ documented components in Figma with variants for all states and use cases",
            "Collaborated with engineering to create React component library with Storybook documentation",
            "Established contribution process allowing teams to propose new components or variants"
          ]
        },
        {
          title: "3. Adoption & Implementation",
          content: [
            "Created migration guides and training materials for product teams",
            "Ran weekly office hours to support teams adopting the design system",
            "Implemented design system tracking to measure adoption rates across missions",
            "Celebrated wins and shared success stories to build momentum"
          ]
        },
        {
          title: "4. Iteration & Scaling",
          content: [
            "Established feedback loops with quarterly surveys and usage analytics",
            "Created specialized patterns for data visualization and complex workflows",
            "Expanded system to include motion guidelines and illustration libraries",
            "Built design system website with live examples and code snippets"
          ]
        }
      ]}
      beforeAfter={{
        before: {
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
          caption: "Inconsistent UI patterns across applications with duplicate components and varying interactions"
        },
        after: {
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
          caption: "Unified design system with consistent components, improved accessibility, and documented patterns"
        }
      }}
      outcomes={[
        "Reduced design-to-development time by 45% through reusable components and clear documentation",
        "Achieved 85% design system adoption across all 6 missions within 12 months",
        "Improved accessibility compliance from 32% to 94% of components meeting WCAG 2.1 AA standards",
        "Decreased UI-related bug reports by 60% due to battle-tested, consistent components",
        "Enabled 3 new product teams to onboard and ship features 40% faster using established patterns",
        "Received Air Force-wide recognition, with design system being adopted by adjacent portfolios"
      ]}
      images={[
        {
          url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1600&h=900&fit=crop",
          caption: "Design system component library in Figma showing button variants and states"
        },
        {
          url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&h=900&fit=crop",
          caption: "Storybook documentation with live code examples and accessibility guidelines"
        }
      ]}
    />
  );
};

export default DesignSystemCaseStudy;
