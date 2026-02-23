const MetricsViewMockup = () => {
  const statCards = [
    { label: "AVERAGE", value: "145", unit: "ms" },
    { label: "MAXIMUM", value: "892", unit: "ms" },
    { label: "MINIMUM", value: "12", unit: "ms" },
    { label: "STD DEVIATION", value: "67", unit: "ms" },
  ];

  // Percentile breakdown chart
  const p75 = [300, 310, 320, 350, 380, 400, 420, 410, 430, 450, 440];
  const p95 = [500, 520, 530, 560, 580, 600, 620, 610, 630, 650, 640];
  const p99 = [700, 730, 720, 750, 780, 800, 820, 810, 830, 850, 840];
  const maxP = 900;
  const makeL = (data: number[]) =>
    `M${data.map((v, i) => `${(i / (data.length - 1)) * 300},${100 - (v / maxP) * 100}`).join(" L")}`;
  const timeLabels = ["00:00", "02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "18:00", "20:00", "NOW"];

  // Error distribution bar chart data
  const errorBars = [
    { label: "Jun 1", vals: [8, 12] },
    { label: "Jun 8", vals: [15, 20] },
    { label: "Jun 15", vals: [10, 30] },
    { label: "Jun 22", vals: [25, 18] },
    { label: "Jun 29", vals: [12, 8] },
    { label: "Jul 6", vals: [5, 10] },
    { label: "Jul 13", vals: [8, 6] },
    { label: "Now", isNow: true, vals: [4, 3] },
  ];
  const maxBar = 50;

  // Donut for status distribution
  const successPct = 94;
  const errorPct = 6;

  const donutArc = (startPct: number, endPct: number) => {
    const cx = 60, cy = 60, r = 50, inner = 35;
    const toRad = (pct: number) => ((pct / 100) * 360 - 90) * (Math.PI / 180);
    const s = toRad(startPct), e = toRad(endPct);
    const large = (endPct - startPct) > 50 ? 1 : 0;
    return `M${cx + r * Math.cos(s)},${cy + r * Math.sin(s)} A${r},${r} 0 ${large} 1 ${cx + r * Math.cos(e)},${cy + r * Math.sin(e)} L${cx + inner * Math.cos(e)},${cy + inner * Math.sin(e)} A${inner},${inner} 0 ${large} 0 ${cx + inner * Math.cos(s)},${cy + inner * Math.sin(s)} Z`;
  };

  return (
    <div className="space-y-5 animate-fade-in">
      <div className="rounded-lg border border-border bg-card overflow-hidden font-mono text-xs">
        {/* Tab bar */}
        <div className="flex items-center justify-between border-b border-border bg-muted/50">
          <div className="flex">
            <span className="px-4 py-2.5 text-[10px] tracking-[0.1em] uppercase text-muted-foreground">System Overview</span>
            <span className="px-4 py-2.5 text-[10px] tracking-[0.1em] uppercase text-muted-foreground">Data Source</span>
            <span className="px-4 py-2.5 text-[10px] font-semibold tracking-[0.1em] uppercase border-b-2 border-primary text-foreground">Metrics View</span>
          </div>
          <div className="flex items-center gap-2 pr-4">
            <span className="px-3 py-1 rounded bg-primary text-primary-foreground text-[10px] font-semibold">LIVE</span>
            <span className="px-3 py-1 rounded border border-border text-muted-foreground text-[10px]">24H</span>
          </div>
        </div>

        <div className="p-4 space-y-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[10px]">
            <span className="text-muted-foreground">System Overview</span>
            <span className="text-muted-foreground/40">›</span>
            <span className="text-muted-foreground">Alpha-01</span>
            <span className="text-muted-foreground/40">›</span>
            <span className="text-primary font-semibold">/api/v2/missions</span>
          </div>
          <p className="text-sm font-semibold text-foreground">Metrics Detail</p>

          {/* Stat cards */}
          <div className="grid grid-cols-4 gap-3">
            {statCards.map((card, i) => (
              <div key={i} className="rounded border border-border p-4 bg-muted/30">
                <p className="text-[9px] tracking-[0.1em] uppercase text-muted-foreground mb-1">{card.label}</p>
                <p className="text-foreground">
                  <span className="text-2xl font-bold font-mono">{card.value}</span>
                  <span className="text-sm text-muted-foreground ml-1">{card.unit}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Percentile breakdown chart */}
          <div className="rounded border border-border p-3 bg-muted/20">
            <div className="flex items-center gap-4 mb-2">
              <p className="text-[9px] tracking-[0.1em] uppercase text-muted-foreground">
                Response Time — Percentile Breakdown
              </p>
              <div className="flex gap-3">
                {[
                  { label: "P75", color: "bg-primary" },
                  { label: "P95", color: "bg-yellow-500" },
                  { label: "P99", color: "bg-[hsl(280,70%,60%)]", dashed: true },
                ].map((l, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <span className={`w-3 h-[2px] ${l.color} inline-block ${l.dashed ? "border-t border-dashed" : ""}`} />
                    <span className="text-[8px] text-muted-foreground">{l.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-28">
              <div className="absolute left-0 top-0 bottom-0 w-6 flex flex-col justify-between text-[7px] text-muted-foreground/50">
                <span>900ms</span><span>600ms</span><span>300ms</span><span>0</span>
              </div>
              <div className="ml-6">
                <svg viewBox="0 0 300 100" className="w-full h-28" preserveAspectRatio="none">
                  {[0, 33, 66, 100].map(y => (
                    <line key={y} x1="0" y1={y} x2="300" y2={y} className="stroke-border" strokeWidth="0.3" />
                  ))}
                  <path d={makeL(p99)} stroke="hsl(280, 70%, 60%)" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
                  <path d={makeL(p95)} stroke="#f59e0b" strokeWidth="1.5" fill="none" />
                  <path d={makeL(p75)} className="stroke-primary" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
            <div className="flex justify-between ml-6 mt-1">
              {timeLabels.map((t, i) => (
                <span key={i} className={`text-[7px] ${t === "NOW" ? "text-primary font-semibold" : "text-muted-foreground/50"}`}>{t}</span>
              ))}
            </div>
          </div>

          {/* Error distribution + Status donut */}
          <div className="grid grid-cols-2 gap-3">
            {/* Error distribution bars */}
            <div className="rounded border border-border p-3 bg-muted/20">
              <p className="text-[9px] tracking-[0.1em] uppercase text-muted-foreground mb-3">Error Distribution</p>
              <div className="flex items-end gap-2 h-24">
                {errorBars.map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                    <div className="flex flex-col-reverse gap-0.5 w-full h-20">
                      {bar.vals.map((v, j) => (
                        <div
                          key={j}
                          className={`w-full rounded-sm ${j === 0 ? "bg-primary" : "bg-yellow-500"}`}
                          style={{ height: `${(v / maxBar) * 100}%` }}
                        />
                      ))}
                    </div>
                    <span className={`text-[7px] ${bar.isNow ? "text-primary font-semibold" : "text-muted-foreground/50"}`}>{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Status distribution donut */}
            <div className="rounded border border-border p-3 bg-muted/20">
              <p className="text-[9px] tracking-[0.1em] uppercase text-muted-foreground mb-3">Status Distribution</p>
              <div className="flex items-center gap-4">
                <svg viewBox="0 0 120 120" className="w-24 h-24">
                  <path d={donutArc(0, successPct)} className="fill-primary" />
                  <path d={donutArc(successPct, 100)} fill="#ef4444" />
                </svg>
                <div className="space-y-2">
                  <div>
                    <p className="text-[9px] tracking-[0.1em] uppercase text-muted-foreground">Success</p>
                    <p className="text-2xl font-bold text-foreground font-mono">{successPct}%</p>
                  </div>
                  <div>
                    <p className="text-[9px] tracking-[0.1em] uppercase text-muted-foreground">Errors</p>
                    <p className="text-2xl font-bold text-foreground font-mono">{errorPct}%</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-2">
                {[
                  { label: "2xx Success", color: "bg-primary" },
                  { label: "4xx Client", color: "bg-yellow-500" },
                  { label: "5xx Server", color: "bg-red-500" },
                ].map((l, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <span className={`w-2 h-2 rounded-sm ${l.color}`} />
                    <span className="text-[8px] text-muted-foreground">{l.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-border bg-muted/30">
          <p className="text-[9px] text-muted-foreground/60 italic">
            View 3: Metrics View — Endpoint-level response time statistics, percentile breakdown, error distribution, and status split. Dummy data shown. Actual interface operates on classified networks. Kessel Run, 2019–2021.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MetricsViewMockup;
