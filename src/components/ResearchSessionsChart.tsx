const ResearchSessionsChart = () => {
  const sessions = [
    { label: "Contextual\nInquiries", value: "30+", height: "75%" },
    { label: "Usability\nTesting", value: "30+", height: "75%" },
    { label: "Participatory\nWorkshops", value: "8+", height: "25%" },
    { label: "Stakeholder\nInterviews", value: "15+", height: "45%" },
  ];

  return (
    <div className="space-y-4 animate-fade-in">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
        Research Methodology — Session Breakdown
      </p>
      <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
        60+ Research Sessions with Active Duty Personnel
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Direct access to warfighters was the foundation. Every design decision tied back to someone we had actually watched do their job.
      </p>

      <div className="flex items-end justify-center gap-8 md:gap-12 pt-4 pb-2" style={{ height: "220px" }}>
        {sessions.map((s, i) => (
          <div key={i} className="flex flex-col items-center h-full justify-end">
            <p className="text-lg font-bold text-primary mb-1">{s.value}</p>
            <div
              className="w-20 md:w-24 rounded-t-sm"
              style={{
                height: s.height,
                background: `linear-gradient(to bottom, oklch(var(--primary)), oklch(var(--primary) / 0.5))`,
                opacity: 1 - i * 0.15,
              }}
            />
            <p className="text-[11px] text-muted-foreground text-center mt-2 whitespace-pre-line leading-tight">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
          <span className="text-xs font-semibold tracking-[0.1em] uppercase text-primary">
            83+ Sessions Total
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResearchSessionsChart;
