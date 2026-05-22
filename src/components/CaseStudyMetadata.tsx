interface CaseStudyMetadataProps {
  role: string;
  timeline: string;
  team: string;
}

const CaseStudyMetadata = ({ role, timeline, team }: CaseStudyMetadataProps) => {
  const items = [
    { label: "ROLE", value: role },
    { label: "TIMELINE", value: timeline },
    { label: "TEAM", value: team },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {items.map((m, i) => (
        <div key={i} className="rounded-[14px] border border-border/60 bg-card p-6 ring-1 ring-inset ring-[hsl(var(--image-stroke))]">
          <p className="text-[10px] font-technical font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-1">{m.label}</p>
          <p className="text-lg">{m.value}</p>
        </div>
      ))}
    </div>
  );
};

export default CaseStudyMetadata;
