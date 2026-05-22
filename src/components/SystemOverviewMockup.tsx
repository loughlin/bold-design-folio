const SystemOverviewMockup = () => {
  // Multi-line chart data for 4 sources
  const timeLabels = ["00:00", "02:30", "05:00", "07:30", "10:00", "12:30", "15:00", "17:30", "20:00", "22:30", "NOW"];
  const alpha = [50, 80, 90, 250, 350, 400, 550, 750, 1050, 800, 750];
  const bravo = [30, 60, 70, 200, 280, 320, 400, 500, 700, 600, 550];
  const charlie = [20, 40, 50, 100, 180, 200, 230, 250, 270, 260, 250];
  const delta = [10, 20, 30, 60, 80, 90, 120, 150, 200, 190, 180];

  const maxVal = 1400;
  const toY = (v: number) => 100 - (v / maxVal) * 100;
  const toPath = (data: number[]) =>
    data.map((v, i) => `${(i / (data.length - 1)) * 100}%,${toY(v)}%`).join(" ");
  const makeLine = (data: number[]) =>
    `M${data.map((v, i) => `${(i / (data.length - 1)) * 300},${toY(v)}`).join(" L")}`;

  const statCards = [
    { label: "", value: "98%", bar: true },
    { label: "LATENCY", value: "42ms" },
    { label: "UPTIME", value: "99.9%" },
    { label: "REQUESTS", value: "12.4K" },
  ];

  const donutSegments = [
    { label: "Alpha-01", pct: 38, color: "hsl(var(--primary))" },
    { label: "Charlie-02", pct: 20, colorClass: "text-yellow-500 dark:text-yellow-400", color: "#f59e0b" },
    { label: "Bravo-04", pct: 28, color: "hsl(210, 90%, 60%)" },
    { label: "Delta-07", pct: 14, color: "hsl(280, 70%, 60%)" },
  ];

  // Build donut arc paths
  const donutArcs = () => {
    const cx = 80, cy = 80, r = 60, inner = 40;
    let cumAngle = -90;
    return donutSegments.map((seg) => {
      const startAngle = cumAngle;
      const sweep = (seg.pct / 100) * 360;
      cumAngle += sweep;
      const endAngle = cumAngle;
      const toRad = (deg: number) => (deg * Math.PI) / 180;
      const x1o = cx + r * Math.cos(toRad(startAngle));
      const y1o = cy + r * Math.sin(toRad(startAngle));
      const x2o = cx + r * Math.cos(toRad(endAngle));
      const y2o = cy + r * Math.sin(toRad(endAngle));
      const x1i = cx + inner * Math.cos(toRad(endAngle));
      const y1i = cy + inner * Math.sin(toRad(endAngle));
      const x2i = cx + inner * Math.cos(toRad(startAngle));
      const y2i = cy + inner * Math.sin(toRad(startAngle));
      const large = sweep > 180 ? 1 : 0;
      const d = `M${x1o},${y1o} A${r},${r} 0 ${large} 1 ${x2o},${y2o} L${x1i},${y1i} A${inner},${inner} 0 ${large} 0 ${x2i},${y2i} Z`;
      return { d, color: seg.color, label: seg.label, pct: seg.pct };
    });
  };

  return (
    <div className="space-y-5 animate-fade-in">
      <div className="rounded-lg border border-border bg-card overflow-hidden font-mono text-xs">
        {/* Tab bar */}
        <div className="flex items-center justify-between border-b border-border bg-muted/50">
          <div className="flex">
            <span className="px-4 py-2.5 text-[10px] font-semibold tracking-[0.1em] uppercase border-b-2 border-primary text-foreground">
              System Overview
            </span>
            <span className="px-4 py-2.5 text-[10px] tracking-[0.1em] uppercase text-muted-foreground">Data Source</span>
            <span className="px-4 py-2.5 text-[10px] tracking-[0.1em] uppercase text-muted-foreground">Metrics View</span>
          </div>
          <div className="flex items-center gap-2 pr-4">
            <span className="px-3 py-1 rounded bg-primary text-primary-foreground text-[10px] font-semibold">LIVE</span>
            <span className="px-3 py-1 rounded border border-border text-muted-foreground text-[10px]">24H</span>
          </div>
        </div>

        <div className="p-4 space-y-4">
          {/* Main chart + donut row */}
          <div className="grid grid-cols-4 gap-3">
            {/* Line chart */}
            <div className="col-span-3 rounded border border-border p-3 bg-muted/20">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[9px] tracking-[0.1em] uppercase text-muted-foreground">
                  Data Throughput â€” All Sources
                </p>
              </div>
              {/* Legend */}
              <div className="flex gap-4 mb-2">
                {[
                  { label: "Alpha-01", color: "bg-primary" },
                  { label: "Bravo-04", color: "bg-[hsl(210,90%,60%)]" },
                  { label: "Charlie-02", color: "bg-yellow-500 dark:bg-yellow-400", dashed: true },
                  { label: "Delta-07", color: "bg-[hsl(280,70%,60%)]", dashed: true },
                ].map((l, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <span className={`w-3 h-[2px] ${l.color} inline-block ${l.dashed ? "border-t border-dashed" : ""}`} />
                    <span className="text-[9px] text-muted-foreground">{l.label}</span>
                  </div>
                ))}
              </div>
              <div className="relative h-36">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-[8px] text-muted-foreground/60">
                  <span>1400</span><span>1050</span><span>700</span><span>350</span><span>0</span>
                </div>
                <div className="ml-8">
                  <svg viewBox="0 0 300 100" className="w-full h-36" preserveAspectRatio="none">
                    {[0, 25, 50, 75, 100].map(y => (
                      <line key={y} x1="0" y1={y} x2="300" y2={y} className="stroke-border" strokeWidth="0.3" />
                    ))}
                    {/* Delta (bottom) */}
                    <path d={makeLine(delta)} stroke="hsl(280, 70%, 60%)" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
                    {/* Charlie */}
                    <path d={makeLine(charlie)} stroke="#f59e0b" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
                    {/* Bravo */}
                    <path d={makeLine(bravo)} stroke="hsl(210, 90%, 60%)" strokeWidth="1.5" fill="none" />
                    {/* Alpha (top) */}
                    <path d={makeLine(alpha)} className="stroke-primary" strokeWidth="2" fill="none" />
                    {/* Dots on alpha */}
                    {alpha.map((v, i) => (
                      <circle key={i} cx={(i / (alpha.length - 1)) * 300} cy={toY(v)} r="2.5" className="fill-primary" />
                    ))}
                  </svg>
                </div>
              </div>
              {/* X-axis */}
              <div className="flex justify-between ml-8 mt-1">
                {timeLabels.map((t, i) => (
                  <span key={i} className={`text-[7px] ${t === "NOW" ? "text-primary font-semibold" : "text-muted-foreground/60"}`}>{t}</span>
                ))}
              </div>
              <p className="text-[8px] text-muted-foreground/50 mt-1 text-center uppercase tracking-wider">Time (UTC)</p>
            </div>

            {/* Donut chart */}
            <div className="rounded border border-border p-3 bg-muted/20 flex flex-col items-center">
              <p className="text-[9px] tracking-[0.1em] uppercase text-muted-foreground mb-2 self-start">
                Request Distribution
              </p>
              <svg viewBox="0 0 160 160" className="w-28 h-28">
                {donutArcs().map((arc, i) => (
                  <path key={i} d={arc.d} fill={arc.color} />
                ))}
                <text x="80" y="76" textAnchor="middle" className="fill-foreground text-[18px] font-bold">85%</text>
                <text x="80" y="92" textAnchor="middle" className="fill-primary text-[8px] font-semibold tracking-widest">NOMINAL</text>
              </svg>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1 mt-2 w-full">
                {donutSegments.map((seg, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-sm flex-shrink-0" style={{ backgroundColor: seg.color }} />
                    <span className="text-[8px] text-muted-foreground truncate">{seg.label}</span>
                    <span className="text-[8px] text-muted-foreground/60 ml-auto">{seg.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-4 gap-3">
            {statCards.map((card, i) => (
              <div key={i} className="rounded border border-border p-4 bg-muted/30 flex flex-col justify-center">
                {card.bar && (
                  <div className="w-full h-2 bg-muted rounded-full mb-2 overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "98%" }} />
                  </div>
                )}
                {card.label && (
                  <p className="text-[9px] tracking-[0.1em] uppercase text-muted-foreground mb-1">{card.label}</p>
                )}
                <p className="text-2xl font-bold text-foreground font-mono">{card.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-border bg-muted/30">
          <p className="text-[9px] text-muted-foreground/60 italic">
            View 1: System Overview â€” All data sources across the organization. Dummy data shown; actual interface operates on classified networks. Kessel Run, 2019â€“2021.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SystemOverviewMockup;
