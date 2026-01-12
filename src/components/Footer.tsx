import { Linkedin, Mail, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-foreground text-background py-10 px-6">
      <div className="container mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-4xl font-serif font-bold">JL</h3>
            <div className="flex flex-col gap-3 pt-2">
              <a
                href="mailto:jloughlin87@gmail.com"
                className="text-background/80 hover:text-background transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/jameslloughlin/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-background transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
