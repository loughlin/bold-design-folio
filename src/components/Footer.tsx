import { Linkedin, Mail, Download } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-foreground text-background py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex gap-4">
              <a href="mailto:jloughlin87@gmail.com" className="text-background/60 hover:text-background transition-colors duration-300">
                <Mail className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/jameslloughlin/" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-background transition-colors duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="/James_Loughlin_Resume_2026_v6.pdf" download className="text-background/60 hover:text-background transition-colors duration-300">
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>

          {[
            {
              heading: "What I Do",
              items: ["Design Org Leadership", "Research Operations", "Design Systems", "Portfolio Design", "Workshop Facilitation", "Stakeholder Alignment"],
            },
            {
              heading: "Tools",
              items: ["Figma", "Miro", "Notion", "Framer", "Adobe CC", "Airtable"],
            },
            {
              heading: "Focus Areas",
              items: ["Military Software", "Enterprise UX", "Complex Systems", "Warfighter-Centered Design", "Career Development"],
            },
          ].map((section) => (
            <div key={section.heading} className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-background/40 mb-4">{section.heading}</h4>
              <ul className="space-y-2 text-background/60 text-sm">
                {section.items.map(i => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-background/10">
          <p className="text-background/40 text-xs">
            Â© {currentYear} James Loughlin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;