'use client'
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Heart, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Heart className="h-5 w-5 text-primary" />
          <span className="font-bold">Amandis</span>
        </Link>
        <div className="flex items-center space-x-4 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } absolute top-14 left-0 w-full bg-background p-4 lg:static lg:flex lg:flex-1 lg:items-center lg:space-x-6 lg:p-0 lg:text-sm lg:font-medium`}
        >
          <Link href="#features" className="block py-2 transition-colors hover:text-primary lg:inline">
            Features
          </Link>
          <Link href="#how-it-works" className="block py-2 transition-colors hover:text-primary lg:inline">
            How It Works
          </Link>
          <Link href="#privacy" className="block py-2 transition-colors hover:text-primary lg:inline">
            Privacy
          </Link>
        </nav>
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="https://github.com/zuyux/amandis" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="#waitlist">
            <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Join Waitlist
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
