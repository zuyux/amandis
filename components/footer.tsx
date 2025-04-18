import Link from "next/link"
import { Github, Origami, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-primary" />
            <h2 className="font-bold">Amandis</h2>
          </div>
          <p className="text-sm text-muted-foreground">Decentralized dating with privacy at its core.</p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#features" className="text-muted-foreground transition-colors hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-muted-foreground transition-colors hover:text-primary">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#privacy" className="text-muted-foreground transition-colors hover:text-primary">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="https://nostr.com" target="_blank" className="text-muted-foreground transition-colors hover:text-primary">
                  About Nostr
                </Link>
              </li>
              <li>
                <Link href="https://youtu.be/fOGdb1CTu5c" target="_blank" className="text-muted-foreground transition-colors hover:text-primary">
                  Zero-Knowledge Proofs
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground transition-colors hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/zuyux/amandis"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://njump.me/npub1hs9882scwhyv8s9ckqghqd9eet9ndr5y0mwd96sr4vmk8ykqppasr7m0s3"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Origami className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Amandis. Open source and free for users.
        </p>
      </div>
    </footer>
  )
}
