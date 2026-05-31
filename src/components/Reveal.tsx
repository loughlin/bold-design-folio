import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Stagger delay in ms, applied only once the element is in view. */
  delay?: number;
}

/**
 * Wrapper that fades + lifts its children in when scrolled into view.
 * Replaces mount-time `animate-fade-in`, which fired offscreen before
 * the user ever reached the section. Under prefers-reduced-motion the
 * global transition override (index.css) makes this resolve instantly.
 */
const Reveal = ({ className, delay = 0, style, children, ...props }: RevealProps) => {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className,
      )}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms", ...style }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Reveal;
