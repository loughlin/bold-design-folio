const DataSourceMockup = () => {
  const endpoints = [
    { path: "/api/v2/missions", method: "GET", methodColor: "bg-primary", requests: "3,685", latency: "48ms", p95: "92ms", p99: "145ms", error: "0.3%", status: "NOMINAL", statusColor: "text-primary", dot: "bg-primary" },
    { path: "/api/v2/intel/feeds", method: "GET", methodColor: "bg-primary", requests: "2,855", latency: "62ms", p95: "118ms", p99: "190ms", error: "0.5%", status: "NOMINAL", statusColor: "text-primary", dot: "bg-primary" },
    { path: "/api/v2/targets/sync", method: "POST", methodColor: "bg-yellow-500", requests: "1,825", latency: "198ms", p95: "384ms", p99: "512ms", error: "2.1%", status: "DEGRADED", statusColor: "text-yellow-500 dark:text-yellow-400", dot: "bg-yellow-500 dark:bg-yellow-400" },
    { path: "/api/v2/sensors/status", method: "GET", methodColor: "bg-primary", requests: "1,355", latency: "35ms", p95: "68ms", p99: "95ms", error: "0.2%", status: "NOMINAL", statusColor: "text-primary", dot: "bg-primary" },
    { path: "/api/v2/reports/export", method: "POST", methodColor: "bg-yellow-500", requests: "1,825", latency: "55ms", p95: "102ms", p99: "160ms", error: "0.4%", status: "NOMINAL", statusColor: "text-primary", dot: "bg-primary" },
  ];

  // Response time chart lines
  const respData = [50, 55, 60, 70, 80, 100, 120, 140];
  const respDashed = [40, 42, 45, 50, 55, 60, 70, 80];
  const maxR = 200;
  const makeL = (data: number[]) =>
    `M${data.map((v, i) => `${(i / (data.length - 1)) * 300},${100 - (v / maxR) * 100}`).join(" L")}`;

  // Request volume
  const volA = [100, 200, 350, 600, 800, 1200, 1800, 2500];
  const volB = [50, 100, 150, 250, 350, 500, 700, 1000];
  const volC = [30, 50, 80, 120, 180, 250, 350, 500];
  const maxV = 3500;
  const makeV = (data: number[]) =>
    `M${data.map((v, i) => `${(i / (data.length - 1)) * 300},${100 - (v / maxV) * 100}`).join(" L")}`;

  const xLabels = ["Jan 1", "Jan 8", "Jan 15", "Jan 22", "Jan 29", "Now"];

  return (
    <div className="space-y-5 animate-fade-in">
      <div className="rounded-lg border border-border bg-card overflow-hidden font-mono text-xs">
        {/* Tab bar */}
        <div className="flex items-center justify-between border-b border-border bg-muted/50">
          <div className="flex">
            <span className="px-4 py-2.5 text-[10px] tracking-[0.1em] uppercase text-muted-foreground">System Overview</span>
            <span className="px-4 py-2.5 text-[10px] font-semibold tracking-[0.1em] uppercase border-b-2 border-primary text-foreground">Data Source</span>
            <span className="px-4 py-2.5 text-[10px] tracking-[0.1em] uppercase text-muted-foreground">Metrics View</span>
          </div>
          <div className="flex items-center gap-2 pr-4">
            <span className="px-3 py-1 rounded bg-primary text-primary-foreground text-[10px] font-semibold">LIVE</span>
            <span className="px-3 py-1 rounded border border-border text-muted-foreground text-[10px]">24H</span>
          </div>
        </div>

        <div className="p-4 space-y-4">
          {/* Breadcrumb + status */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[10px]">
              <span className="text-muted-foreground">System Overview</span>
              <span className="text-muted-foreground/40">›</span>
              <span className="text-foreground font-semibold">Alpha-01</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-[10px] font-semibold text-primary border border-primary/30 px-2 py-0.5 rounded">NOMINAL</span>
              </div>
              <span className="text-[9px] text-muted-foreground">Last updated: 14s</span>
            </div>
          </div>

          {/* Endpoint table */}
          <div className="rounded border border-border overflow-hidden">
            <div className="grid grid-cols-[auto_1fr_60px_70px_55px_50px_50px_55px_70px_60px] gap-0 text-[9px] bg-muted/40 border-b border-border px-3 py-2 tracking-[0.05em] uppercase text-muted-foreground font-semibold">
              <span className="w-4" />
              <span>Endpoint</span>
              <span>Method</span>
              <span>Requests</span>
              <span>Latency</span>
              <span>P95</span>
              <span>P99</span>
              <span>Error Rate</span>
              <span className="text-center">Status</span>
              <span className="text-center">Trend</span>
            </div>
            {endpoints.map((ep, i) => (
              <div key={i} className="grid grid-cols-[auto_1fr_60px_70px_55px_50px_50px_55px_70px_60px] gap-0 items-center px-3 py-2.5 border-b border-border/50 last:border-0">
                <span className={`w-2 h-2 rounded-full mr-2 ${ep.dot}`} />
                <span className="text-foreground text-[10px]">{ep.path}</span>
                <span><span className={`${ep.methodColor} text-[9px] text-primary-foreground px-1.5 py-0.5 rounded font-semibold`}>{ep.method}</span></span>
                <span className="text-foreground">{ep.requests}</span>
                <span className="text-foreground">{ep.latency}</span>
                <span className="text-foreground">{ep.p95}</span>
                <span className="text-foreground">{ep.p99}</span>
                <span className="text-foreground">{ep.error}</span>
                <span className={`text-center text-[9px] font-semibold ${ep.statusColor} border px-1.5 py-0.5 rounded ${ep.status === "DEGRADED" ? "border-yellow-500/30" : "border-primary/30"}`}>{ep.status}</span>
                <span className="flex justify-center">
                  <svg viewBox="0 0 40 16" className="w-10 h-4">
                    <path d={ep.status === "DEGRADED" ? "M0,12 L10,8 L20,10 L30,6 L40,8" : "M0,14 L10,10 L20,8 L30,5 L40,3"} className="stroke-primary" strokeWidth="1.5" fill="none" />
                  </svg>
                </span>
              </div>
            ))}
          </div>

          {/* Two charts row */}
          <div className="grid grid-cols-2 gap-3">
            {/* Response Time */}
            <div className="rounded border border-border p-3 bg-muted/20">
              <p className="text-[9px] tracking-[0.1em] uppercase text-muted-foreground mb-2">Response Time</p>
              <div className="relative h-24">
                <div className="absolute left-0 top-0 bottom-0 w-6 flex flex-col justify-between text-[7px] text-muted-foreground/50">
                  <span>200ms</span><span>150ms</span><span>100ms</span><span>50ms</span>
                </div>
                <div className="ml-6">
                  <svg viewBox="0 0 300 100" className="w-full h-24" preserveAspectRatio="none">
                    {[0, 33, 66, 100].map(y => (
                      <line key={y} x1="0" y1={y} x2="300" y2={y} className="stroke-border" strokeWidth="0.3" />
                    ))}
                    <path d={makeL(respDashed)} stroke="hsl(210, 90%, 60%)" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
                    <path d={makeL(respData)} className="stroke-primary" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </div>
              <div className="flex justify-between ml-6 mt-1">
                {xLabels.map((t, i) => (
                  <span key={i} className={`text-[7px] ${t === "Now" ? "text-primary font-semibold" : "text-muted-foreground/50"}`}>{t}</span>
                ))}
              </div>
            </div>

            {/* Request Volume */}
            <div className="rounded border border-border p-3 bg-muted/20">
              <p className="text-[9px] tracking-[0.1em] uppercase text-muted-foreground mb-2">Request Volume</p>
              <div className="relative h-24">
                <div className="absolute left-0 top-0 bottom-0 w-6 flex flex-col justify-between text-[7px] text-muted-foreground/50">
                  <span>3500</span><span>2500</span><span>1500</span><span>0</span>
                </div>
                <div className="ml-6">
                  <svg viewBox="0 0 300 100" className="w-full h-24" preserveAspectRatio="none">
                    {[0, 33, 66, 100].map(y => (
                      <line key={y} x1="0" y1={y} x2="300" y2={y} className="stroke-border" strokeWidth="0.3" />
                    ))}
                    <path d={makeV(volC)} stroke="#f59e0b" strokeWidth="1.5" fill="none" />
                    <path d={makeV(volB)} stroke="hsl(210, 90%, 60%)" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
                    <path d={makeV(volA)} className="stroke-primary" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </div>
              <div className="flex justify-between ml-6 mt-1">
                {xLabels.map((t, i) => (
                  <span key={i} className={`text-[7px] ${t === "Now" ? "text-primary font-semibold" : "text-muted-foreground/50"}`}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-border bg-muted/30">
          <p className="text-[9px] text-muted-foreground/60 italic">
            View 2: Data Source View — Individual source performance, endpoint table, and trend analysis. Dummy data shown; actual interface operates on classified networks. Kessel Run, 2019–2021.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataSourceMockup;
