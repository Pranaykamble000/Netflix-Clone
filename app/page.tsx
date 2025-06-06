import Header from "@/components/header"
import Hero from "@/components/hero"
import ContentRow from "@/components/content-row"

// Mock data for different content categories
const trendingNow = [
  { id: 1, title: "Stranger Things", image: "/placeholder.svg?height=300&width=200", type: "series" },
  { id: 2, title: "The Crown", image: "/placeholder.svg?height=300&width=200", type: "series" },
  { id: 3, title: "Ozark", image: "/placeholder.svg?height=300&width=200", type: "series" },
  { id: 4, title: "The Witcher", image: "/placeholder.svg?height=300&width=200", type: "series" },
  { id: 5, title: "Bridgerton", image: "/placeholder.svg?height=300&width=200", type: "series" },
  { id: 6, title: "Money Heist", image: "/placeholder.svg?height=300&width=200", type: "series" },
]

const netflixOriginals = [
  { id: 7, title: "House of Cards", image: "/placeholder.svg?height=300&width=200", type: "series" },
  { id: 8, title: "Orange is the New Black", image: "/placeholder.svg?height=300&width=200", type: "series" },
  { id: 9, title: "Narcos", image: "/placeholder.svg?height=300&width=200", type: "series" },
  { id: 10, title: "The Umbrella Academy", image: "/placeholder.svg?height=300&width=200", type: "series" },
  { id: 11, title: "Dark", image: "/placeholder.svg?height=300&width=200", type: "series" },
  { id: 12, title: "Mindhunter", image: "/placeholder.svg?height=300&width=200", type: "series" },
]

const topRated = [
  { id: 13, title: "Breaking Bad", image: "/placeholder.svg?height=300&width=200", type: "series" },
  { id: 14, title: "Better Call Saul", image: "/placeholder.svg?height=300&width=200", type: "series" },
  { id: 15, title: "The Office", image: "/placeholder.svg?height=300&width=200", type: "series" },
  { id: 16, title: "Friends", image: "/placeholder.svg?height=300&width=200", type: "series" },
  { id: 17, title: "The Good Place", image: "/placeholder.svg?height=300&width=200", type: "series" },
  { id: 18, title: "Sherlock", image: "/placeholder.svg?height=300&width=200", type: "series" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <div className="px-4 md:px-12 pb-20 space-y-8">
        <ContentRow title="Trending Now" items={trendingNow} />
        <ContentRow title="Netflix Originals" items={netflixOriginals} />
        <ContentRow title="Top Rated" items={topRated} />
      </div>
    </div>
  )
}
