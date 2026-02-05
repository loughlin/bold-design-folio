import CaseStudyLayout from "@/components/CaseStudyLayout";
import dataDashboardPreview from "@/assets/data-dashboard-preview.jpg";
import dashboardApiView from "@/assets/dashboard-api-view.jpg";
import dashboardMetricsView from "@/assets/dashboard-metrics-view.jpg";
import dashboardLoginView from "@/assets/dashboard-login-view.jpg";

const OperationalDashboardCaseStudy = () => {
  return (
    <CaseStudyLayout
      title="Operational Data Dashboard"
      subtitle="Web Dashboards + Data Visualization"
      heroImage={dataDashboardPreview}
      role="UX Manager + Product Designer"
      timeline="2019 - 2021"
      team="2 Product Designers, 6 Engineers, 1 PM"
      overview="I was a UX Designer with Kessel Run, an organization that delivers software to help the Air Force operate more effectively. I designed a web dashboard that visualizes operational data flows and system performance for mission teams. I was responsible for researching, strategizing, and designing, as well as collaborating with product managers and engineers."
      problem="The Kessel Run team wasn't satisfied with the current version of their monitoring tools. They suspected operators were missing key information or the right kind of data to be truly useful for their workflows. As a team of mostly engineers, they were unsure how to move forward with a redesign. My task was to help uncover what operators actually needed."
      problemStatement="How might we design a dashboard that delivers the right value and KPIs to operators, helping them monitor data flows and communicate effectively with engineering teams?"
      research={{
        title: "Understanding Our Users",
        content: [
          "Operators and system administrators prioritize uptime visibility and trend analysis",
          "100% of users cited system health visibility as critical — 6/6 users said this",
          "83% needed historical trend data for pattern recognition — 5/6 users said this",
          "83% wanted configurable alert thresholds to customize notifications — 5/6 users said this",
          "System administrators monitor overall health and ensure systems meet reliability standards",
          "Mission operators track data availability to ensure planning has accurate information"
        ]
      }}
      designProcess={[
        {
          name: "Discover",
          type: "divergent",
          description: "Understanding the monitoring landscape and operator needs",
          activities: [
            "Market research on data visualization dashboards",
            "User interviews to learn what matters most",
            "Analysis of existing fragmented tools"
          ]
        },
        {
          name: "Define",
          type: "convergent",
          description: "Synthesizing insights into design requirements",
          activities: [
            "Defining key metrics and data hierarchies",
            "User journey mapping for monitoring workflows",
            "Establishing design principles for scannability"
          ]
        },
        {
          name: "Develop",
          type: "divergent",
          description: "Exploring dashboard concepts and information architecture",
          activities: [
            "Sketching early concepts with evolving insights",
            "Learning how the dashboard scales from overview to granular",
            "Iterating on filtering and navigation patterns"
          ]
        },
        {
          name: "Deliver",
          type: "convergent",
          description: "Refining designs through testing and collaboration",
          activities: [
            "Testing with operators and administrators",
            "Workshopping with engineers for feasibility",
            "Final design refinement and handoff"
          ]
        }
      ]}
      process={[
        {
          title: "Restructuring Data",
          content: "I met with engineers to better understand how the dashboard works technically. It has three main views: System Overview, Data Source, and Metrics views. Each organization also has an optional sign-in page for team members. Data starts broad at the system level and becomes more detailed as users drill down into specific sources and metrics."
        },
        {
          title: "Enhancing a Basic Dashboard",
          content: "The original dashboard was minimal with just basic status indicators and a page title on each page. I focused my redesign on surfacing more useful information and making the dashboard feel dynamic. I added data cards and tables for quick scanning, filters to help users parse the data, and trend charts to highlight performance patterns. Along the way, I also refined the visual branding to give the tool a clearer identity."
        },
        {
          title: "View 1: System Overview",
          content: "A high-level view showing performance for all data sources across an organization. The line chart shows throughput over time and cards display health status. This information helps teams spot anomalies, compare environments, and monitor trends."
        },
        {
          title: "View 2: Data Source View",
          content: "This view zooms into a specific data source to track its individual performance and recent activity. Here operators can see the performance of all connected feeds, timestamps, latency metrics, and error rates."
        },
        {
          title: "View 3: Metrics View",
          content: "The most granular view, focusing on specific metrics within a data source. Here surfaces detailed statistics about response times from maximum, minimum, average and standard deviation, as well as error rates and error types."
        },
        {
          title: "Improvements Through Feedback",
          content: "I tested my designs with operators and system administrators. They emphasized the need for more contextual data, like timestamps, historical comparisons, and frequency, to better interpret results and communicate effectively with engineers. Testing also revealed that operators may monitor dozens of data sources, far more than the handful I initially assumed. To address this, I reworked the filtering experience by adding a scrollable legend, making it easier to parse and navigate large datasets."
        },
        {
          title: "Overcoming Design Roadblocks",
          content: "Implementing feedback from operators came with challenges. I was still learning technical terms amidst designing and wasn't sure of all my constraints. I workshopped with the engineering team to share the feedback I gathered, and together we figured out which changes were feasible and which were not."
        }
      ]}
      engagementMetrics={[
        {
          value: "90%",
          label: "Success Rate",
          description: "Users completed a task identifying underperforming systems with a 90% success rate",
          percentage: 90
        },
        {
          value: "4/5",
          label: "Confidence Levels",
          description: "Post-completing the task, users rated their confidence in evaluating system performance at 4 out of 5",
          percentage: 80
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
        "Met with engineers to ensure all designs were within their technical constraints before handoff",
        "Conducted usability testing with operators and system administrators to validate the new interface",
        "Uncovered insights the team wouldn't have found on their own, validating the research and design approach",
        "Delivered strong designs that consolidated fragmented tools into a unified, operator-friendly interface"
      ]}
      images={[
        {
          url: dataDashboardPreview,
          caption: "Final Design: System Overview — A high-level view showing performance for all data sources. The line chart shows throughput over time, paired with a scrollable legend for filtering. Summary cards display health status and total endpoints per source."
        },
        {
          url: dashboardApiView,
          caption: "Final Design: Data Source View — Focused on a single data source, this view shows performance trends, request frequency, timestamps, and connected feeds. A scrollable legend supports quick filtering, while the table below lists each route with method and response details."
        },
        {
          url: dashboardMetricsView,
          caption: "Final Design: Metrics View — A detailed breakdown of individual endpoint performance. Metrics include average, max, min, and standard deviation of response times, plus error rates and types split between percentiles for clearer insight."
        },
        {
          url: dashboardLoginView,
          caption: "Final Design: Login Page — Organizations receive a custom login page for their team. Alternatively, users can skip sign-in and access dashboards directly via a private link."
        }
      ]}
    />
  );
};

export default OperationalDashboardCaseStudy;