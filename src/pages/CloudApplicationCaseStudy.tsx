import CaseStudyLayout from "@/components/CaseStudyLayout";

const CloudApplicationCaseStudy = () => {
  return (
    <CaseStudyLayout
      title="Cloud-Native Application Suite"
      subtitle="Enterprise B2B applications supporting USAF critical operations"
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop"
      overview="Designed enterprise-grade cloud-native applications supporting critical operations across the United States Air Force. Led design for complex B2B workflows, data visualization, and multi-role access patterns serving thousands of active duty personnel. Focused on creating intuitive experiences for high-stakes, time-sensitive operational decisions."
      problem="USAF personnel were using legacy on-premises software that required extensive training, couldn't be accessed remotely, and lacked modern features like real-time collaboration and mobile access. The existing systems were siloed, creating data inconsistencies and forcing users to switch between multiple applications to complete routine tasks. This resulted in operational delays and increased risk of errors in time-critical situations."
      problemStatement="How might we modernize USAF operational software to provide intuitive, cloud-based tools that support warfighters' workflows while meeting stringent security, reliability, and compliance requirements?"
      role="Product Designer & Design Lead"
      timeline="2019 - Present"
      team="Cross-functional teams including designers, engineers, product managers, and military stakeholders"
      research={{
        title: "User Research Insights",
        content: [
          "Shadowed 25+ warfighters performing mission-critical tasks to understand workflows and decision-making processes",
          "Identified that users spent 40% of their time navigating between disconnected systems and manually reconciling data",
          "Discovered users needed mobile access for on-call situations but existing systems only worked on desktop",
          "Found that new personnel required 2-3 weeks of training to become proficient with legacy systems",
          "Learned that operational tempo demanded interfaces that supported rapid decision-making under pressure"
        ]
      }}
      process={[
        {
          title: "1. User & Workflow Research",
          content: [
            "Conducted contextual inquiries at operational bases to observe workflows in natural environment",
            "Mapped end-to-end processes identifying bottlenecks and opportunities for automation",
            "Created user personas representing different roles: operators, analysts, supervisors, and commanders",
            "Documented technical constraints including security classifications, network restrictions, and compliance requirements"
          ]
        },
        {
          title: "2. Information Architecture",
          content: [
            "Organized complex data structures into intuitive navigation patterns",
            "Designed role-based access controls ensuring users saw only relevant information",
            "Created unified search functionality spanning multiple data sources",
            "Established clear information hierarchy for time-sensitive operational data"
          ]
        },
        {
          title: "3. Interface Design",
          content: [
            "Designed responsive layouts working seamlessly across desktop, tablet, and mobile devices",
            "Created data visualization dashboards highlighting critical metrics and trends",
            "Built complex form flows with smart defaults and validation reducing user errors",
            "Implemented real-time collaboration features allowing teams to work together on shared data"
          ]
        },
        {
          title: "4. Testing & Iteration",
          content: [
            "Ran usability testing with active duty personnel validating design decisions",
            "Conducted accessibility audits ensuring compliance with Section 508 standards",
            "Performed load testing validating performance under operational stress scenarios",
            "Gathered feedback through quarterly user surveys and incorporated into design roadmap"
          ]
        }
      ]}
      beforeAfter={{
        before: {
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
          caption: "Legacy desktop-only systems with complex interfaces requiring weeks of training"
        },
        after: {
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
          caption: "Modern cloud-native interface with intuitive workflows and mobile accessibility"
        }
      }}
      outcomes={[
        "Reduced training time from 2-3 weeks to 2 days for new users through intuitive interface design",
        "Achieved 4.2/5.0 System Usability Scale (SUS) score, significantly above industry average for enterprise software",
        "Decreased time to complete routine operational tasks by 50% through workflow optimization",
        "Enabled remote access for on-call personnel, improving response times by 35%",
        "Supported over 5,000 active users across multiple USAF bases performing 100,000+ transactions monthly",
        "Reduced operational errors by 42% through improved data validation and clear visual feedback",
        "Received Air Force Digital Service award for excellence in user-centered design"
      ]}
      images={[
        {
          url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop",
          caption: "Dashboard view showing real-time operational metrics and mission-critical data"
        },
        {
          url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&h=900&fit=crop",
          caption: "Mobile-responsive interface enabling access to critical systems from any device"
        }
      ]}
    />
  );
};

export default CloudApplicationCaseStudy;
