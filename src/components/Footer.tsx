import { Linkedin, Mail, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-foreground text-background py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-serif font-bold">JLoughlin</h3>
            <p className="text-background/80">
              Portfolio Design Lead building human-centered solutions for mission-critical systems.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a
                href="#work"
                className="text-background/80 hover:text-background transition-colors"
              >
                Featured Work
              </a>
              <a
                href="#experience"
                className="text-background/80 hover:text-background transition-colors"
              >
                Experience
              </a>
              <a
                href="#about"
                className="text-background/80 hover:text-background transition-colors"
              >
                About
              </a>
            </nav>
          </div>

          {/* Column 3 - Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:jloughlin87@gmail.com"
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
              >
                <Mail className="w-5 h-5" />
                jloughlin87@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/james-loughlin-11053853/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {currentYear} James Loughlin. All rights reserved.
          </p>
          <p className="text-background/60 text-sm">
            Designed with ❤️ for users and mission success
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
