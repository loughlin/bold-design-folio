import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    
    // If we're not on the home page, navigate there first with the hash
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="text-xl font-serif font-bold border-2 border-foreground px-3 py-1 rounded-lg">
              JL
            </div>
            <span className="text-2xl font-serif font-bold">James Loughlin</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("work")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("approach")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              UX Approach
            </button>
            <button
              onClick={() => {
                navigate("/about");
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0);
              }}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About Me
            </button>
            <Button
              onClick={() => navigate("/about#contact")}
              className="bg-primary hover:bg-primary/90"
            >
              Let's Talk
            </Button>
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
              onClick={() => scrollToSection("work")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("approach")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium"
            >
              UX Approach
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/about");
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0);
              }}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium"
            >
              About Me
            </button>
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/about#contact");
              }}
              className="w-full bg-primary hover:bg-primary/90"
            >
              Let's Talk
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
