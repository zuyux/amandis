"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check } from "lucide-react"

export default function Waitlist() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
  
      if (res.ok) {
        setSubmitted(true)
      } else {
        const error = await res.json()
        console.error("Error:", error)
        alert("Something went wrong. Please try again.")
      }
    } catch (err) {
      console.error("Submit failed:", err)
      alert("There was a problem. Try again later.")
    }
  }
  

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-background">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Join the Waitlist</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
          Be among the first to experience privacy-first dating with Amandis.
        </p>

        {submitted ? (
          <div className="max-w-md mx-auto p-6 bg-muted/30 rounded-lg border">
            <div className="flex items-center justify-center mb-4">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">You're on the list!</h3>
            <p className="text-muted-foreground">
              Thank you for joining our waitlist. We'll notify you when Amandis is ready.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background"
            />
            <Button type="submit" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Join Waitlist
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
