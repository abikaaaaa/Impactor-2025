import { Card } from "@/components/ui/card"

export default function LearnPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-bold text-center mb-4">
          Learn More About <span className="text-primary">Asteroids</span>
        </h1>
        <p className="font-[family-name:var(--font-roboto-condensed)] text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          Explore the science behind asteroid detection, impact risks, and planetary defense strategies
        </p>

        {/* Main Topics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20">
            <div className="text-5xl mb-4">🪐</div>
            <h3 className="font-[family-name:var(--font-orbitron)] text-2xl mb-4 text-primary">What is an Asteroid?</h3>
            <p className="font-[family-name:var(--font-roboto-condensed)] text-foreground/70 mb-4">
              Asteroids are rocky remnants left over from the early formation of our solar system about 4.6 billion
              years ago. Most asteroids orbit the Sun in the asteroid belt between Mars and Jupiter.
            </p>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Composed of rock, metal, and ice</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Range from meters to hundreds of kilometers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Over 1 million known asteroids</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="font-[family-name:var(--font-orbitron)] text-2xl mb-4 text-primary">Dangers to Earth</h3>
            <p className="font-[family-name:var(--font-roboto-condensed)] text-foreground/70 mb-4">
              Near-Earth Objects (NEOs) are asteroids and comets with orbits that bring them close to Earth's orbit.
              Some pose potential impact threats that require monitoring.
            </p>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="text-secondary">•</span>
                <span>28,000+ known Near-Earth Asteroids</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">•</span>
                <span>2,300+ Potentially Hazardous Asteroids</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">•</span>
                <span>Impacts can cause regional to global damage</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="font-[family-name:var(--font-orbitron)] text-2xl mb-4 text-primary">Defense Methods</h3>
            <p className="font-[family-name:var(--font-roboto-condensed)] text-foreground/70 mb-4">
              Scientists have developed several strategies to deflect potentially hazardous asteroids and protect Earth
              from catastrophic impacts.
            </p>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Kinetic impactor (DART mission)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Gravity tractor spacecraft</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Nuclear deflection (last resort)</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* Historical Timeline */}
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl font-bold text-center mb-8">
            Notable Asteroid <span className="text-primary">Events</span>
          </h2>

          <div className="space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/30">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-32 flex-shrink-0">
                  <div className="font-[family-name:var(--font-orbitron)] text-2xl text-primary">66 Million BC</div>
                </div>
                <div>
                  <h4 className="font-[family-name:var(--font-orbitron)] text-xl mb-2">Chicxulub Impact</h4>
                  <p className="font-[family-name:var(--font-roboto-condensed)] text-foreground/70">
                    A 10-kilometer asteroid struck the Yucatán Peninsula, creating a 180-kilometer crater and causing
                    the extinction of the dinosaurs along with 75% of Earth's species.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/30">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-32 flex-shrink-0">
                  <div className="font-[family-name:var(--font-orbitron)] text-2xl text-primary">1908</div>
                </div>
                <div>
                  <h4 className="font-[family-name:var(--font-orbitron)] text-xl mb-2">Tunguska Event</h4>
                  <p className="font-[family-name:var(--font-roboto-condensed)] text-foreground/70">
                    An asteroid or comet exploded over Siberia, flattening 2,000 square kilometers of forest. The
                    explosion was equivalent to 10-15 megatons of TNT.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/30">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-32 flex-shrink-0">
                  <div className="font-[family-name:var(--font-orbitron)] text-2xl text-primary">2013</div>
                </div>
                <div>
                  <h4 className="font-[family-name:var(--font-orbitron)] text-xl mb-2">Chelyabinsk Meteor</h4>
                  <p className="font-[family-name:var(--font-roboto-condensed)] text-foreground/70">
                    A 20-meter asteroid exploded over Russia, generating a shockwave that damaged buildings and injured
                    over 1,500 people. It was the largest impact event since Tunguska.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/30">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-32 flex-shrink-0">
                  <div className="font-[family-name:var(--font-orbitron)] text-2xl text-primary">2022</div>
                </div>
                <div>
                  <h4 className="font-[family-name:var(--font-orbitron)] text-xl mb-2">DART Mission Success</h4>
                  <p className="font-[family-name:var(--font-roboto-condensed)] text-foreground/70">
                    NASA's Double Asteroid Redirection Test successfully altered the orbit of asteroid Dimorphos,
                    proving that kinetic impactor technology can defend Earth from asteroid threats.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/30">
            <h3 className="font-[family-name:var(--font-orbitron)] text-2xl mb-6 text-primary text-center">
              Want to Learn More?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="https://cneos.jpl.nasa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
              >
                <h4 className="font-[family-name:var(--font-roboto-condensed)] font-semibold mb-2">NASA CNEOS</h4>
                <p className="text-sm text-foreground/70">Center for Near-Earth Object Studies</p>
              </a>
              <a
                href="https://www.nasa.gov/planetarydefense"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
              >
                <h4 className="font-[family-name:var(--font-roboto-condensed)] font-semibold mb-2">
                  Planetary Defense
                </h4>
                <p className="text-sm text-foreground/70">NASA's Planetary Defense Coordination Office</p>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
