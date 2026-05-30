const DashboardOutcomesChart = () => {
  const metrics = [
    {
      value: "90%",
      label: "TASK SUCCESS",
      description: "Identifying underperforming systems without assistance",
      footnote: "6/6 operators tested",
    },
    {
      value: "4/5",
      label: "CONFIDENCE SCORE",
      description: "Post-task confidence rating in evaluating system health",
      footnote: "avg across all sessions",
    },
    {
      value: "60%",
      label: "LESS SWITCHING",
      description: "Reduction in time spent across fragmented tools",
      footnote: "consolidated into one view",
    },
    {
      value: "3x",
      label: "FASTER DETECTION",
      description: "Time to identify system anomalies post-redesign",
      footnote: "vs. original tooling",
    },
  ];

  return (
    <div className="space-y-5 animate-fade-in">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
        Usability Testing — Validated Outcomes
      </p>
      <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
        What Testing With Operators Revealed
      </h3>
      <p className="text-sm text-muted-foreground">
        Moderated task-based sessions with active duty operators and system administrators, n=6.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
        {metrics.map((m, i) => (
          <div
            key={i}
            className="relative rounded-md border border-border bg-card p-5 flex flex-col items-center text-center"
          >
            {/* accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-md bg-primary" />

            <p className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-1 font-mono">
              {m.value}
            </p>
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-primary mb-2">
              {m.label}
            </p>
            <p className="text-xs text-muted-foreground leading-snug mb-2">
              {m.description}
            </p>
            <p className="text-[10px] text-muted-foreground/70 italic">
              {m.footnote}
            </p>
          </div>
        ))}
      </div>

      <p className="text-[11px] text-muted-foreground/60 pt-2 leading-relaxed">
        Usability testing conducted with operators and system administrators across USAF mission teams, Kessel Run 2019–2021. Context switching reduction measured against self-reported time-on-task using prior tooling.
      </p>
    </div>
  );
};

export default DashboardOutcomesChart;
