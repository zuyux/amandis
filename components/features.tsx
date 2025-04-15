import { Key, MapPin, MessageCircle, Shield } from "lucide-react"

const features = [
  {
    icon: <Key className="h-8 w-8 text-primary" />,
    title: "Self-Sovereign Identity",
    description: "You control your keys and data. No central authority can access or sell your personal information.",
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Zero-Knowledge Proofs",
    description: "Prove attributes like age or location without revealing the actual data.",
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: "Private Matching",
    description: "Filter potential matches by interests, age, or location without exposing sensitive details.",
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-primary" />,
    title: "Genuine Connections",
    description: "Our system encourages meaningful interactions and real-world meetings, not endless swiping.",
  },
]

export default function Features() {
  return (
    <section id="features" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Privacy-First Dating</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Amandis reimagines dating apps with decentralization and privacy at its core.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.title} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              {feature.icon}
              <h3 className="font-bold">{feature.title}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
