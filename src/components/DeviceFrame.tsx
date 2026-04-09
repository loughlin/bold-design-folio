interface DeviceFrameProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

const DeviceFrame = ({ src, alt, caption, className = "" }: DeviceFrameProps) => {
  return (
    <div className={`space-y-3 ${className}`}>
      <div className="rounded-[24px] overflow-hidden border border-border/60 bg-card shadow-elevated ring-1 ring-inset ring-[hsl(var(--image-stroke))]">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/40">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[hsl(0_84%_60%/0.7)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[hsl(45_93%_58%/0.7)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[hsl(142_71%_45%/0.7)]" />
          </div>
          <div className="flex-1 mx-8">
            <div className="h-5 bg-background/60 rounded-md max-w-xs mx-auto" />
          </div>
        </div>
        {/* Image with inner stroke */}
        <div className="relative">
          <img src={src} alt={alt} className="w-full h-auto block" />
          <div className="absolute inset-0 rounded-none ring-1 ring-inset ring-[hsl(var(--image-stroke))] pointer-events-none" />
          {/* Caption overlay tag */}
          {caption && (
            <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-background/70 backdrop-blur-sm text-[11px] font-medium text-muted-foreground rounded-md border border-border/30">
              {caption}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeviceFrame;
