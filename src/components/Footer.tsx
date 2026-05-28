import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-8 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-semibold tracking-tight">James Loughlin</span>
          <div className="flex items-center gap-5">
            <a
              href="mailto:jloughlin87@gmail.com"
              aria-label="Email James"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/jameslloughlin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="James on LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} James Loughlin
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
