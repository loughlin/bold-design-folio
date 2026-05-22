const AdoptionImpactTable = () => {
  const rows = [
    {
      label: "Design stories / week",
      sublabel: "avg requests per week",
      before: "3.80",
      beforeSub: "requests / week",
      after: "1.95",
      afterSub: "requests / week",
      badge: "â†“ 48%",
      badgeSub: "FEWER",
    },
    {
      label: "Avg story completion",
      sublabel: "days per story",
      before: "22.18",
      beforeSub: "days per story",
      after: "19",
      afterSub: "days per story",
      badge: "â†“ 3 days",
      badgeSub: "14% FASTER",
    },
    {
      label: "Lines of code per commit",
      sublabel: "inserted / deleted",
      before: "Baseline",
      beforeSub: "custom front end",
      after: "âˆ’20% / âˆ’35%",
      afterSub: "lines inserted / deleted",
      badge: "Leaner",
      badgeSub: "COMMITS",
    },
    {
      label: "Story complexity",
      sublabel: "relative to baseline",
      before: "Baseline",
      beforeSub: "pre-adoption",
      after: "+36%",
      afterSub: "more complex â€” still faster",
      badge: "â†‘ Better",
      badgeSub: "QUALITY",
    },
  ];

  return (
    <div className="space-y-4 animate-fade-in">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
        Visual 01 â€” Adoption Impact
      </p>
      <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
        Before & After Design System Adoption
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Measured against one established team with a fully custom front end â€” tracked across 10 months pre and post adoption.
      </p>

      {/* Column headers */}
      <div className="grid grid-cols-[1fr_1.2fr_1.2fr_auto] gap-3 items-center mb-2">
        <div />
        <div className="text-center">
          <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-foreground bg-muted px-4 py-1.5 rounded-sm">
            Before Adoption
          </span>
        </div>
        <div className="text-center">
          <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-sm">
            After Adoption
          </span>
        </div>
        <div className="w-20" />
      </div>

      {/* Data rows */}
      <div className="space-y-2">
        {rows.map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-[1fr_1.2fr_1.2fr_auto] gap-3 items-center border-b border-border/50 py-4"
          >
            {/* Row label */}
            <div>
              <p className="text-sm font-medium text-foreground">{row.label}</p>
              <p className="text-[11px] text-muted-foreground">{row.sublabel}</p>
            </div>

            {/* Before value */}
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-muted-foreground/70">{row.before}</p>
              <p className="text-[10px] text-muted-foreground">{row.beforeSub}</p>
            </div>

            {/* After value */}
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-primary">{row.after}</p>
              <p className="text-[10px] text-primary/70">{row.afterSub}</p>
            </div>

            {/* Badge */}
            <div className="w-20 text-center bg-primary/10 border border-primary/20 rounded-sm py-1.5 px-2">
              <p className="text-xs font-bold text-primary">{row.badge}</p>
              <p className="text-[9px] font-semibold tracking-[0.1em] uppercase text-primary/70">{row.badgeSub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdoptionImpactTable;
