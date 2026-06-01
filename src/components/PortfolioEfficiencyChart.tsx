const PortfolioEfficiencyChart = () => {
  const metrics = [
    {
      label: "Dev days saved / year",
      sublabel: "per 10-dev team",
      barLabel: "2,000+ DAYS / PER 10-DEV TEAM",
      barWidth: "80%",
      value: "2,000+",
      valueSub: "DAYS/YR",
    },
    {
      label: "Fewer design stories",
      sublabel: "requested per week",
      barLabel: "48% REDUCTION",
      barWidth: "52%",
      value: "48%",
      valueSub: "REDUCTION",
    },
    {
      label: "Designer onboarding",
      sublabel: "before → after",
      barLabel: null,
      bars: [
        { label: "6 WEEKS — BEFORE", width: "85%" },
        { label: "2 WEEKS — AFTER", width: "33%" },
      ],
      value: "6 wks",
      value2: "2 wks",
      valueSub: "↓ 67%",
    },
    {
      label: "Spec documentation",
      sublabel: "reduction post-handoff",
      barLabel: "60% LESS SPEC OVERHEAD",
      barWidth: "60%",
      value: "60%",
      valueSub: "LESS DOCS",
    },
  ];

  return (
    <div className="space-y-4 animate-fade-in">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
        Visual 02 — Organizational Efficiency
      </p>
      <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
        Time to Value Across the Portfolio
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Efficiency gains measured across all eligible product teams following full design system rollout.
      </p>

      <div className="space-y-6">
        {metrics.map((m, i) => (
          <div key={i} className="grid grid-cols-[1fr_2fr_auto] gap-4 items-center">
            {/* Label */}
            <div>
              <p className="text-sm font-medium text-foreground">{m.label}</p>
              <p className="text-[11px] text-muted-foreground">{m.sublabel}</p>
            </div>

            {/* Bar(s) */}
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

            {/* Value */}
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
        All metrics sourced from internal team tracking across Kessel Run product teams, 2019–2023. Developer day savings calculated per 10-person development team.
      </p>
    </div>
  );
};

export default PortfolioEfficiencyChart;
