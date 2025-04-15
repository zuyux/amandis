import { Check, Lock, Shield, UserCheck } from "lucide-react"

const privacyFeatures = [
  {
    title: "You Own Your Data",
    description: "Unlike traditional dating apps, Amandis never stores your personal data on centralized servers.",
    icon: <UserCheck className="h-6 w-6 text-primary" />,
  },
  {
    title: "Cryptographic Privacy",
    description: "Zero-knowledge proofs allow you to prove attributes without revealing the actual data.",
    icon: <Shield className="h-6 w-6 text-primary" />,
  },
  {
    title: "No Tracking",
    description: "We don't track your behavior, sell your data, or build profiles to monetize.",
    icon: <Lock className="h-6 w-6 text-primary" />,
  },
]

export default function Privacy() {
  return (
    <section id="privacy" className="container py-24 md:py-32">
      <div className="grid gap-16 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Privacy by Design</h2>
          <p className="text-muted-foreground">
            Amandis is built from the ground up with privacy as its foundation, not as an afterthought.
          </p>
          <ul className="space-y-6">
            {privacyFeatures.map((feature, index) => (
              <li key={index} className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">{feature.icon}</div>
                <div>
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative rounded-lg border bg-muted/30 p-8">
          <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary to-accent opacity-30 blur"></div>
          <div className="relative space-y-6">
            <h3 className="text-2xl font-bold">How Zero-Knowledge Proofs Work</h3>
            <p className="text-muted-foreground">
              Zero-knowledge proofs allow one party (the prover) to prove to another party (the verifier) that a
              statement is true without revealing any additional information.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <Check className="mt-1 h-5 w-5 text-primary" />
                <p>Prove you're over 21 without revealing your exact age</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="mt-1 h-5 w-5 text-primary" />
                <p>Verify you live within 10 miles without sharing your address</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="mt-1 h-5 w-5 text-primary" />
                <p>Confirm shared interests without exposing your entire profile</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
