import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-12 sm:py-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Discover Local Gastronomy now
          </h1>
          <p className="text-lg text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
            Find the best restaurants, bars, and cafes in your town. Support local gastronomy and discover hidden gems
            near you.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/discover">Przeglądaj restauracje</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="owner/dashboard">Dodaj restauracje</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
