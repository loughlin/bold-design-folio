import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { useActiveSection } from "@/hooks/useActiveSection";
import { NAV_SECTIONS, RESUME_PDF_PATH } from "@/constants";

const NAV_ITEMS = [
  { id: NAV_SECTIONS.WORK, label: "Work" },
  { id: NAV_SECTIONS.APPROACH, label: "Approach" },
  { id: NAV_SECTIONS.EXPERIENCE, label: "Experience" },
  { id: NAV_SECTIONS.CONTACT, label: "Contact" },
] as const;

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollToSection } = useScrollToSection();
  const location = useLocation();
  const activeSection = useActiveSection();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId, () => setIsMobileMenuOpen(false));
  };

  const navLinkClass = (id: string) =>
    `text-sm font-medium transition-colors duration-300 ${
      isHome && activeSection === id
        ? "text-foreground"
        : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {isHome ? (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:opacity-70 transition-opacity duration-300"
            >
              <span className="text-xl font-semibold tracking-tight">James Loughlin</span>
            </button>
          ) : (
            <Link to="/" className="hover:opacity-70 transition-opacity duration-300">
              <span className="text-xl font-semibold tracking-tight">James Loughlin</span>
            </Link>
          )}

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={navLinkClass(item.id)}
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
            <a
              href={RESUME_PDF_PATH}
              download
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-4 space-y-4 animate-fade-in">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left ${navLinkClass(item.id)}`}
              >
                {item.label}
              </button>
            ))}
            <a
              href={RESUME_PDF_PATH}
              download
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
