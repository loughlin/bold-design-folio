const DashboardMockup = () => {
  const dataSources = [
    { name: "ALPHA-01", status: "NOMINAL", color: "text-primary" },
    { name: "BRAVO-04", status: "NOMINAL", color: "text-primary" },
    { name: "DELTA-02", status: "DEGRADED", color: "text-yellow-500 dark:text-yellow-400" },
    { name: "ECHO-07", status: "DEGRADED", color: "text-yellow-500 dark:text-yellow-400" },
  ];

  const statCards = [
    { label: "SYSTEM HEALTH", value: "98.2%", sub: "uptime last 24h" },
    { label: "ACTIVE SOURCES", value: "24/26", sub: "2 degraded" },
    { label: "AVG LATENCY", value: "142ms", sub: "â†“ 11ms from yesterday" },
    { label: "ERROR RATE", value: "0.4%", sub: "within threshold" },
    { label: "ALERTS", value: "2", sub: "active warnings", accent: true },
  ];

  // simplified chart points
  const chartPoints = [20, 22, 25, 23, 28, 35, 42, 50, 55, 58, 60, 62, 65, 63, 60];

  return (
    <div className="space-y-5 animate-fade-in">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
        Information Architecture â€” Three-Tier View Hierarchy
      </p>
      <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
        System Overview â†’ Data Source â†’ Metrics
      </h3>
      <p className="text-sm text-muted-foreground">
        Data starts broad at the system level and becomes more detailed as users drill into specific sources and metrics.
      </p>

      {/* Dashboard mockup */}
      <div className="rounded-lg border border-border bg-card overflow-hidden font-mono text-xs">
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/50">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-foreground">
              Operational Data Dashboard
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded bg-primary text-primary-foreground text-[10px] font-semibold">
              LIVE
            </span>
            <span className="px-3 py-1 rounded border border-border text-muted-foreground text-[10px]">
              LAST 24H
            </span>
          </div>
        </div>

        {/* Tab bar */}
        <div className="flex border-b border-border">
          <span className="px-4 py-2 text-[10px] font-semibold tracking-[0.1em] uppercase border-b-2 border-primary text-foreground">
            System Overview
          </span>
          <span className="px-4 py-2 text-[10px] tracking-[0.1em] uppercase text-muted-foreground">
            Data Source
          </span>
          <span className="px-4 py-2 text-[10px] tracking-[0.1em] uppercase text-muted-foreground">
            Metrics View
          </span>
        </div>

        <div className="p-4 space-y-4">
          {/* Stat cards */}
          <div className="grid grid-cols-5 gap-3">
            {statCards.map((card, i) => (
              <div
                key={i}
                className={`rounded border p-3 ${
                  card.accent
                    ? "border-yellow-500/40 dark:border-yellow-400/40 bg-yellow-500/5"
                    : "border-border bg-muted/30"
                }`}
              >
                <p className="text-[9px] tracking-[0.1em] uppercase text-muted-foreground mb-1">
                  {card.label}
                </p>
                <p className={`text-lg font-bold ${card.accent ? "text-yellow-500 dark:text-yellow-400" : "text-foreground"}`}>
                  {card.value}
                </p>
                <p className="text-[9px] text-muted-foreground">{card.sub}</p>
              </div>
            ))}
          </div>

          {/* Chart + data sources row */}
          <div className="grid grid-cols-3 gap-3">
            {/* Chart */}
            <div className="col-span-2 rounded border border-border p-3 bg-muted/20">
              <p className="text-[9px] tracking-[0.1em] uppercase text-muted-foreground mb-3">
                Throughput â€” Last 24 Hours
              </p>
              <div className="relative h-28">
                <svg
                  viewBox="0 0 300 100"
                  className="w-full h-full"
                  preserveAspectRatio="none"
                >
                  {/* Grid lines */}
                  {[0, 25, 50, 75, 100].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      y1={y}
                      x2="300"
                      y2={y}
                      className="stroke-border"
                      strokeWidth="0.5"
                    />
                  ))}
                  {/* Area fill */}
                  <path
                    d={`M0,${100 - chartPoints[0]} ${chartPoints
                      .map(
                        (p, i) =>
                          `L${(i / (chartPoints.length - 1)) * 300},${100 - p}`
                      )
                      .join(" ")} L300,100 L0,100 Z`}
                    className="fill-primary/15"
                  />
                  {/* Line */}
                  <path
                    d={`M0,${100 - chartPoints[0]} ${chartPoints
                      .map(
                        (p, i) =>
                          `L${(i / (chartPoints.length - 1)) * 300},${100 - p}`
                      )
                      .join(" ")}`}
                    className="stroke-primary"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="flex gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <span className="w-3 h-[2px] bg-primary inline-block" />
                  <span className="text-[9px] text-muted-foreground">Source Alpha</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-[2px] bg-primary/50 inline-block border-t border-dashed border-primary" />
                  <span className="text-[9px] text-muted-foreground">Source Bravo</span>
                </div>
              </div>
            </div>

            {/* Data Sources panel */}
            <div className="rounded border border-border p-3 bg-muted/20">
              <p className="text-[9px] tracking-[0.1em] uppercase text-muted-foreground mb-3">
                Data Sources
              </p>
              <div className="space-y-3">
                {dataSources.map((ds, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          ds.status === "NOMINAL"
                            ? "bg-primary"
                            : "bg-yellow-500 dark:bg-yellow-400"
                        }`}
                      />
                      <span className="text-[10px] text-foreground">{ds.name}</span>
                    </div>
                    <span className={`text-[9px] font-semibold ${ds.color}`}>
                      {ds.status}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[9px] text-muted-foreground/60 mt-4 italic">
                Scroll to view 22 more sources
              </p>
            </div>
          </div>
        </div>

        {/* Footer disclaimer */}
        <div className="px-4 py-2 border-t border-border bg-muted/30">
          <p className="text-[9px] text-muted-foreground/60 italic">
            Representational mock-up. All data and labels anonymized. Actual interface built for classified operational networks, Kessel Run.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;
