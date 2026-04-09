interface ArtifactCardProps {
  label: string;
  items: string[];
  icon?: string;
  className?: string;
}

const ArtifactCard = ({ label, items, icon, className = "" }: ArtifactCardProps) => {
  return (
    <div
      className={`rounded-[24px] border border-border/60 bg-card p-6 shadow-elevated ${className}`}
    >
      <div className="flex items-center gap-2 mb-4">
        {icon && <span className="text-lg">{icon}</span>}
        <p className="text-[10px] font-technical font-semibold tracking-[0.15em] uppercase text-muted-foreground">
          {label}
        </p>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
            <span className="text-sm text-muted-foreground leading-relaxed font-technical">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtifactCard;
