import { Linkedin, Mail, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-foreground text-background py-16 px-6">
      <div className="container mx-auto">
        {/* Top Row - Brand and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-serif font-bold">JLoughlin</h3>
            <p className="text-background/80">
              Portfolio Design Lead building human-centered solutions for mission-critical systems.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="mailto:jloughlin87@gmail.com"
                className="text-background/80 hover:text-background transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/james-loughlin-11053853/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-background transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 md:text-right">
            <nav className="flex flex-col md:flex-row md:justify-end gap-4">
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
        </div>

        {/* Skills, Tools, Talents Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pt-8 border-t border-background/20">
          {/* Skills */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Skills</h4>
            <ul className="space-y-2 text-background/80 text-sm">
              <li>Human-Centered Design</li>
              <li>User Research</li>
              <li>Design Systems</li>
              <li>Prototyping</li>
              <li>User Flows</li>
              <li>Facilitation</li>
              <li>Design Leadership</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Tools</h4>
            <ul className="space-y-2 text-background/80 text-sm">
              <li>Figma</li>
              <li>Sketch</li>
              <li>Miro</li>
              <li>Mural</li>
              <li>Adobe CC</li>
              <li>Framer</li>
              <li>Notion</li>
            </ul>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Technologies</h4>
            <ul className="space-y-2 text-background/80 text-sm">
              <li>Git</li>
              <li>Material Design</li>
              <li>Airtable</li>
              <li>ChatGPT</li>
              <li>Claude</li>
              <li>Lucid</li>
              <li>Warp</li>
            </ul>
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
