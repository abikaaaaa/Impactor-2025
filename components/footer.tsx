import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-primary/30 bg-background/80 backdrop-blur-md mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-[family-name:var(--font-orbitron)] text-xl text-primary mb-4">IMPACTOR-2025</h3>
            <p className="font-[family-name:var(--font-roboto-condensed)] text-sm text-foreground/70">
              Defending Earth through science, simulation, and education.
            </p>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-roboto-condensed)] text-sm uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://api.nasa.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  NASA NEO API
                </a>
              </li>
              <li>
                <a
                  href="https://www.usgs.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  USGS Data
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  GitHub Project
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-roboto-condensed)] text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-foreground/70 hover:text-primary transition-colors">
                  About Project
                </Link>
              </li>
              <li>
                <Link href="/learn" className="text-foreground/70 hover:text-primary transition-colors">
                  Educational Resources
                </Link>
              </li>
              <li>
                <Link href="/simulation" className="text-foreground/70 hover:text-primary transition-colors">
                  Run Simulation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/20 text-center text-sm text-foreground/50 font-[family-name:var(--font-roboto-condensed)]">
          © 2025 Impactor-2025 Project. Built with NASA-inspired design principles.
        </div>
      </div>
    </footer>
  )
}
