"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Plus, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContentItem {
  id: number
  title: string
  image: string
  type: string
}

interface ContentRowProps {
  title: string
  items: ContentItem[]
}

export default function ContentRow({ title, items }: ContentRowProps) {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      <h2 className="text-xl md:text-2xl font-semibold text-white">{title}</h2>

      <div className="relative group">
        {/* Scroll buttons */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        {/* Content grid */}
        <div className="flex space-x-2 overflow-x-auto scrollbar-hide pb-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-48 md:w-64 cursor-pointer transition-transform duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />

                {/* Hover overlay */}
                {hoveredItem === item.id && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="flex space-x-2">
                      <Button size="icon" className="bg-white text-black hover:bg-gray-200">
                        <Play className="w-4 h-4 fill-current" />
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-black"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-black"
                      >
                        <ThumbsUp className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              <h3 className="text-white text-sm md:text-base font-medium mt-2 truncate">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
