import { Key, Lock, MessageCircle, UserPlus } from "lucide-react"

const steps = [
  {
    icon: <Key className="h-10 w-10 text-primary" />,
    title: "Create Your Profile",
    description: "Sign up with your Nostr keys or generate new ones. You control your identity from day one.",
  },
  {
    icon: <Lock className="h-10 w-10 text-primary" />,
    title: "Verify Attributes",
    description:
      "Use zero-knowledge proofs to verify attributes like age or location without revealing the actual data.",
  },
  {
    icon: <UserPlus className="h-10 w-10 text-primary" />,
    title: "Find Matches",
    description: "Set your preferences and find matches based on cryptographically verified attributes.",
  },
  {
    icon: <MessageCircle className="h-10 w-10 text-primary" />,
    title: "Connect Genuinely",
    description: "Chat briefly and meet in person. Amandis encourages real connections, not endless messaging.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="container space-y-16 py-24 md:py-32 bg-muted/30 rounded-xl">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">How Amandis Works</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          A simple process designed to protect your privacy while helping you find meaningful connections.
        </p>
      </div>
      <div className="mx-auto max-w-5xl">
        <div className="relative">
          <div className="absolute left-8 top-0 h-full w-[1px] bg-border md:left-[50%] md:-ml-[0.5px]"></div>
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className="relative md:grid md:grid-cols-2 md:gap-10">
                <div className={`md:text-right ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <div className="flex items-center md:justify-end">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">{step.icon}</div>
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
                <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center md:left-[50%] md:-ml-8">
                  <div className="h-4 w-4 rounded-full bg-primary"></div>
                </div>
                {index % 2 === 1 && <div className="hidden md:block"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
