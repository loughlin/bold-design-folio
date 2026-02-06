import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { NAV_SECTIONS } from "@/constants";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollToSection } = useScrollToSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId, () => setIsMobileMenuOpen(false));
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="hover:opacity-80 transition-opacity"
          >
            <span className="text-2xl font-serif font-bold">James Loughlin</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavClick(NAV_SECTIONS.WORK)}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              My Work
            </button>
            <button
              onClick={() => handleNavClick(NAV_SECTIONS.APPROACH)}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              UX Approach
            </button>
            <button
              onClick={() => handleNavClick(NAV_SECTIONS.EXPERIENCE)}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Experience
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <button
              onClick={() => handleNavClick(NAV_SECTIONS.WORK)}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium"
            >
              My Work
            </button>
            <button
              onClick={() => handleNavClick(NAV_SECTIONS.APPROACH)}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium"
            >
              UX Approach
            </button>
            <button
              onClick={() => handleNavClick(NAV_SECTIONS.EXPERIENCE)}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium"
            >
              Experience
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
