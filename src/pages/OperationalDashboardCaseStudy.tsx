import CaseStudyLayout from "@/components/CaseStudyLayout";
import dataDashboardPreview from "@/assets/data-dashboard-preview.jpg";

const OperationalDashboardCaseStudy = () => {
  return (
    <CaseStudyLayout
      title="Operational Data Dashboard"
      subtitle="Web Dashboards + Data Visualization"
      heroImage={dataDashboardPreview}
      role="UX Manager + Product Designer"
      timeline="2019 - 2021"
      team="2 Product Designers, 1 UX Researcher, 3 Engineers"
      overview="I led the design effort for an operational data dashboard at Kessel Run, creating a centralized interface that enabled operators to monitor system health, data ingestion rates, and performance metrics across distributed environments. The dashboard consolidated information from multiple data sources into a single, actionable view for mission planners and system administrators."
      problem="The existing monitoring tools were fragmented across multiple systems, requiring operators to switch between different interfaces to piece together a complete picture. This made it difficult to spot issues quickly and created communication gaps between operators and engineering teams. Operators lacked visibility into system performance and data flow health."
      problemStatement="How might we design a centralized dashboard that provides operators with real-time visibility into system health and data flows, enabling them to quickly identify issues and communicate effectively with engineering teams?"
      research={{
        title: "User Research Insights",
        content: [
          "100% of users cited system uptime visibility as critical for their daily workflows",
          "83% needed historical trend data for pattern recognition and anomaly detection",
          "83% wanted configurable alert thresholds to customize notifications",
          "System administrators focus on overall infrastructure health and reliability standards",
          "Mission operators track data availability to ensure planning has accurate information"
        ]
      }}
      designProcess={[
        {
          name: "Discover",
          type: "divergent",
          description: "Understanding the monitoring landscape and operator needs",
          activities: [
            "Stakeholder interviews with operators and admins",
            "Analysis of existing fragmented monitoring tools",
            "Competitive analysis of data visualization dashboards"
          ]
        },
        {
          name: "Define",
          type: "convergent",
          description: "Synthesizing insights into design requirements",
          activities: [
            "User journey mapping for monitoring workflows",
            "Defining key metrics and data hierarchies",
            "Establishing design principles for scannability"
          ]
        },
        {
          name: "Develop",
          type: "divergent",
          description: "Exploring dashboard concepts and information architecture",
          activities: [
            "Sketching multiple dashboard layout concepts",
            "Prototyping three-level view hierarchy",
            "Iterating on filtering and navigation patterns"
          ]
        },
        {
          name: "Deliver",
          type: "convergent",
          description: "Refining designs through testing and collaboration",
          activities: [
            "Usability testing with operators and admins",
            "Engineering collaboration for feasibility",
            "Final design refinement and handoff"
          ]
        }
      ]}
      process={[
        {
          title: "Structuring the Dashboard",
          content: "I worked closely with engineers to understand the technical architecture and data available. The dashboard needed three main views: a System Overview for high-level health, a Data Source view for individual feed monitoring, and a detailed Metrics view for deep-dive analysis. Data starts broad at the system level and becomes more detailed as users drill down into specific sources and metrics."
        },
        {
          title: "View 1: System Overview",
          content: "A high-level view showing health status for all connected data sources. Line charts display throughput over time while status cards show current state at a glance. This helps teams spot anomalies, compare environments, and monitor trends across the entire operational landscape."
        },
        {
          title: "View 2: Data Source View",
          content: "This view zooms into a specific data source to track its individual performance and recent activity. Operators can see ingestion rates, latency metrics, error counts, and historical patterns for each connected system, enabling targeted troubleshooting."
        },
        {
          title: "View 3: Detailed Metrics",
          content: "The most granular view, focusing on specific metrics within a data source. This surfaces detailed statistics including maximum, minimum, and average values, as well as error rates and distribution patterns for comprehensive analysis."
        },
        {
          title: "Improvements Through Feedback",
          content: "Testing revealed that operators might monitor dozens of data sources simultaneously, far more than initially assumed. I reworked the filtering experience by adding a scrollable legend and collapsible sections, making it easier to parse and navigate large datasets. Operators emphasized the need for more contextual data like timestamps and historical comparisons to communicate effectively with engineering teams."
        }
      ]}
      engagementMetrics={[
        {
          value: "85%",
          label: "Task Success Rate",
          description: "Users completed tasks identifying system issues with high accuracy",
          percentage: 85
        },
        {
          value: "4.2/5",
          label: "User Confidence",
          description: "Post-testing confidence rating for monitoring system health",
          percentage: 84
        },
        {
          value: "60%",
          label: "Reduced Context Switching",
          description: "Decrease in time spent switching between monitoring tools",
          percentage: 60
        },
        {
          value: "3x",
          label: "Faster Issue Detection",
          description: "Improvement in time to identify system anomalies",
          percentage: 75
        }
      ]}
      outcomes={[
        "Consolidated fragmented monitoring tools into a single, unified interface that operators could access from one location",
        "Enabled operators to quickly identify system issues through improved data visualization and scannability",
        "Reduced communication gaps between operators and engineering teams by providing contextual data and historical trends",
        "Validated designs through usability testing with real operators and system administrators, achieving an 85% task success rate"
      ]}
    />
  );
};

export default OperationalDashboardCaseStudy;