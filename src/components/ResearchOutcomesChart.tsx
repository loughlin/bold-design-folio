const ResearchOutcomesChart = () => {
  const metrics = [
    {
      label: "User satisfaction score",
      sublabel: "out of 10, across tested applications",
      bars: [
        { label: "6.2 — BEFORE", width: "62%" },
        { label: "8.4 — AFTER", width: "84%" },
      ],
      value: "6.2/10",
      value2: "8.4/10",
      valueSub: "+ 35%",
    },
    {
      label: "Post-launch design rework",
      sublabel: "reduced by embedding research early",
      barLabel: "65% REDUCTION IN REWORK",
      barWidth: "65%",
      value: "65%",
      valueSub: "LESS REWORK",
    },
    {
      label: "Development costs avoided",
      sublabel: "features prevented that wouldn't solve problems",
      barLabel: "$500K+ IN PREVENTED WASTE",
      barWidth: "78%",
      value: "$500K+",
      valueSub: "AVOIDED",
    },
    {
      label: "Direct user research sessions",
      sublabel: "contextual inquiries + moderated testing",
      barLabel: "60+ SESSIONS WITH ACTIVE DUTY PERSONNEL",
      barWidth: "85%",
      value: "60+",
      valueSub: "SESSIONS",
    },
  ];

  return (
    <div className="space-y-4 animate-fade-in">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
        Research Operations — Measurable Outcomes
      </p>
      <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
        From Assumption-Driven to Evidence-Driven
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Key outcomes across 6 T&G portfolio missions after embedding research into the full product lifecycle, 2021â€“2024.
      </p>

      <div className="space-y-6">
        {metrics.map((m, i) => (
          <div key={i} className="grid grid-cols-[1fr_2fr_auto] gap-4 items-center">
            <div>
              <p className="text-sm font-medium text-foreground">{m.label}</p>
              <p className="text-[11px] text-muted-foreground">{m.sublabel}</p>
            </div>

            <div className="space-y-1.5">
              {m.bars ? (
                m.bars.map((bar, j) => (
                  <div key={j} className="h-8 bg-muted rounded-sm overflow-hidden">
                    <div
                      className={`h-full flex items-center px-3 rounded-sm ${
                        j === 0
                          ? "bg-primary/30 text-primary"
                          : "bg-primary text-primary-foreground"
                      }`}
                      style={{ width: bar.width }}
                    >
                      <span className="text-[10px] font-semibold tracking-[0.1em] uppercase whitespace-nowrap">
                        {bar.label}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="h-8 bg-muted rounded-sm overflow-hidden">
                  <div
                    className="h-full bg-primary flex items-center px-3 rounded-sm"
                    style={{ width: m.barWidth }}
                  >
                    <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-primary-foreground whitespace-nowrap">
                      {m.barLabel}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="text-right w-20">
              {m.value2 ? (
                <>
                  <p className="text-sm text-muted-foreground">{m.value}</p>
                  <p className="text-lg font-bold text-primary">{m.value2}</p>
                  <p className="text-[10px] text-primary/70">{m.valueSub}</p>
                </>
              ) : (
                <>
                  <p className="text-2xl font-bold text-primary">{m.value}</p>
                  <p className="text-[10px] text-muted-foreground tracking-[0.1em] uppercase">{m.valueSub}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="text-[11px] text-muted-foreground italic pt-4 border-t border-border/50">
        Outcomes measured across 6 Targeting & Geo-intelligence portfolio missions, Kessel Run 2021â€“2024.
        Cost avoidance estimated based on average feature development spend prevented through early-stage validation.
      </p>
    </div>
  );
};

export default ResearchOutcomesChart;
