import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-1.5 px-3 py-2 rounded-[14px] bg-background border border-border text-muted-foreground hover:text-foreground hover:shadow-md transition-[color,border-color,box-shadow] duration-300 font-technical text-[10px] font-semibold tracking-[0.14em] uppercase animate-fade-in"
    >
      <ArrowUp className="h-3 w-3" />
      Top
    </button>
  );
};

export default BackToTop;
