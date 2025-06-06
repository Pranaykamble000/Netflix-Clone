"use client"

import { Play, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%), 
                           linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%), 
                           url('/placeholder.svg?height=1080&width=1920')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-4 md:px-12 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Stranger Things</h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying
          supernatural forces, and one strange little girl.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg font-semibold">
            <Play className="w-6 h-6 mr-2 fill-current" />
            Play
          </Button>
          <Button
            variant="secondary"
            className="bg-gray-600/70 text-white hover:bg-gray-600 px-8 py-3 text-lg font-semibold"
          >
            <Info className="w-6 h-6 mr-2" />
            More Info
          </Button>
        </div>
      </div>
    </div>
  )
}
