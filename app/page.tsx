import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/space-earth-asteroid-approaching.jpg"
            alt="Space background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <div className="animate-float">
            <h1 className="font-[family-name:var(--font-orbitron)] text-5xl md:text-7xl font-bold mb-6 text-balance">
              <span className="text-primary animate-glow">IMPACTOR-2025</span>
              <br />
              <span className="text-3xl md:text-5xl">Defend the Earth</span>
            </h1>
          </div>

          <p className="font-[family-name:var(--font-roboto-condensed)] text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto text-pretty">
            Advanced asteroid defense simulation platform. Monitor near-Earth objects, simulate impact scenarios, and
            explore planetary defense strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/simulation">
              <Button size="lg" className="text-lg px-8 py-6 hover:shadow-lg hover:shadow-primary/50 transition-all">
                Start Simulation
              </Button>
            </Link>
            <Link href="/learn">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10 bg-transparent"
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Countdown Timer */}
          <Card className="inline-block px-8 py-4 bg-card/50 backdrop-blur-sm border-primary/30">
            <div className="font-[family-name:var(--font-roboto-condensed)] text-sm uppercase tracking-wider text-foreground/70 mb-2">
              Time to Closest Approach
            </div>
            <div className="font-[family-name:var(--font-orbitron)] text-3xl md:text-4xl text-primary">
              127d 14h 32m 18s
            </div>
          </Card>
        </div>
      </section>

      {/* Mission Overview */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-4xl font-bold text-center mb-12">
          Mission <span className="text-primary">Overview</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20">
            <div className="text-4xl mb-4">🛰️</div>
            <h3 className="font-[family-name:var(--font-orbitron)] text-xl mb-3 text-primary">Real-Time Monitoring</h3>
            <p className="font-[family-name:var(--font-roboto-condensed)] text-foreground/70">
              Track near-Earth asteroids using NASA's latest data and advanced orbital mechanics calculations.
            </p>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20">
            <div className="text-4xl mb-4">💥</div>
            <h3 className="font-[family-name:var(--font-orbitron)] text-xl mb-3 text-primary">Impact Simulation</h3>
            <p className="font-[family-name:var(--font-roboto-condensed)] text-foreground/70">
              Visualize potential impact scenarios with accurate physics-based modeling and damage assessment.
            </p>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="font-[family-name:var(--font-orbitron)] text-xl mb-3 text-primary">Defense Strategies</h3>
            <p className="font-[family-name:var(--font-roboto-condensed)] text-foreground/70">
              Explore and test various planetary defense methods including kinetic impactors and gravity tractors.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl text-primary mb-2">
              28,000+
            </div>
            <div className="font-[family-name:var(--font-roboto-condensed)] text-sm uppercase tracking-wider text-foreground/70">
              Known NEOs
            </div>
          </div>
          <div className="text-center">
            <div className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl text-primary mb-2">2,300+</div>
            <div className="font-[family-name:var(--font-roboto-condensed)] text-sm uppercase tracking-wider text-foreground/70">
              Potentially Hazardous
            </div>
          </div>
          <div className="text-center">
            <div className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl text-primary mb-2">24/7</div>
            <div className="font-[family-name:var(--font-roboto-condensed)] text-sm uppercase tracking-wider text-foreground/70">
              Monitoring
            </div>
          </div>
          <div className="text-center">
            <div className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl text-primary mb-2">99.9%</div>
            <div className="font-[family-name:var(--font-roboto-condensed)] text-sm uppercase tracking-wider text-foreground/70">
              Detection Rate
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
