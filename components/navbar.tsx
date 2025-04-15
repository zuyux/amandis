import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Heart } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Heart className="h-5 w-5 text-primary" />
          <span className="font-bold">Amandis</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="#features" className="transition-colors hover:text-primary">
            Features
          </Link>
          <Link href="#how-it-works" className="transition-colors hover:text-primary">
            How It Works
          </Link>
          <Link href="#privacy" className="transition-colors hover:text-primary">
            Privacy
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/zuyux/amandis" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
            Join Waitlist
          </Button>
        </div>
      </div>
    </header>
  )
}
