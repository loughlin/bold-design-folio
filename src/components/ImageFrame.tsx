interface ImageFrameProps {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: string;
  className?: string;
}

const ImageFrame = ({ src, alt, caption, aspectRatio = "16/9", className = "" }: ImageFrameProps) => {
  return (
    <div className={`space-y-3 ${className}`}>
      <div className="relative rounded-[24px] overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          style={{ aspectRatio }}
        />
        {/* Inner stroke */}
        <div className="absolute inset-0 rounded-[24px] ring-1 ring-inset ring-[hsl(var(--image-stroke))] pointer-events-none" />
        {/* Caption overlay tag */}
        {caption && (
          <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-background/70 backdrop-blur-sm text-[11px] font-medium text-muted-foreground rounded-md border border-border/30">
            {caption}
          </span>
        )}
      </div>
    </div>
  );
};

export default ImageFrame;
