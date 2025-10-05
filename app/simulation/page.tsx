import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export default function SimulationPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-bold text-center mb-4">
          Asteroid Impact <span className="text-primary">Simulator</span>
        </h1>
        <p className="font-[family-name:var(--font-roboto-condensed)] text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          Visualize asteroid trajectories and simulate impact scenarios using real orbital mechanics
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Simulation View */}
          <div className="lg:col-span-2">
            <Card className="p-0 bg-card/50 backdrop-blur-sm border-primary/30 h-[600px] overflow-hidden">
              <iframe
                src="/simulation1/index.html"
                className="w-full h-full border-0"
                allowFullScreen
              ></iframe>
            </Card>

          </div>

          {/* Control Panel */}

        </div>

        {/* Impact Parameters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

        </div>
      </div>
    </div>
  )
}
