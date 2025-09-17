import logo from "@assets/1_1758097636777.jpg";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigationLinks = [
    { label: "Home", section: "home" },
    { label: "Services", section: "services" },
    { label: "Team", section: "team" },
    { label: "Portfolio", section: "portfolio" },
    { label: "Contact", section: "contact" },
  ];

  return (
    <footer className="py-12 border-t border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img src={logo} alt="Algovist Logo" className="w-8 h-8 rounded" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Algovist
            </span>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Transforming businesses through innovative AI solutions, cutting-edge development, and advanced automation technologies.
          </p>
          <div className="flex justify-center space-x-8 mb-8">
            {navigationLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => scrollToSection(link.section)}
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                data-testid={`footer-nav-${link.section}`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-6 border-t border-border/20">
            <p className="text-muted-foreground text-sm">
              © 2024 Algovist. All rights reserved. | Innovate. Automate. Elevate.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
