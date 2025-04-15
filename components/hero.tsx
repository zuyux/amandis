import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Lock, Shield } from "lucide-react"

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-4">
        <div className="mx-auto flex items-center justify-center space-x-2 rounded-full bg-muted px-4 py-1.5 text-sm font-medium">
          <Shield className="h-4 w-4 text-primary" />
          <span>Privacy-First Dating</span>
        </div>
        <h1 className="bg-gradient-to-br from-primary from-30% via-accent to-primary/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Date Without
          <br />
          Compromising Privacy
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Amandis is a decentralized dating app that uses Nostr technology and zero-knowledge proofs to help you connect
          with others while keeping your data private and secure.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
          Join Waitlist
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg">
          Learn More
        </Button>
      </div>

      <div className="mt-8 flex items-center justify-center space-x-4 text-sm text-muted-foreground">
        <div className="flex items-center">
          <Heart className="mr-1 h-4 w-4 text-primary" />
          <span>Open Source</span>
        </div>
        <div className="h-1 w-1 rounded-full bg-muted-foreground"></div>
        <div className="flex items-center">
          <Lock className="mr-1 h-4 w-4 text-primary" />
          <span>Self-Sovereign</span>
        </div>
        <div className="h-1 w-1 rounded-full bg-muted-foreground"></div>
        <div className="flex items-center">
          <Shield className="mr-1 h-4 w-4 text-primary" />
          <span>Zero-Knowledge Proofs</span>
        </div>
      </div>
    </section>
  )
}
