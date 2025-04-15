const testimonials = [
  {
    quote:
      "Finally, a dating app that respects my privacy. I can connect with people without worrying about my data being sold.",
    author: "Alex M.",
    location: "Early Tester",
  },
  {
    quote:
      "The zero-knowledge proofs are brilliant. I can verify someone's age without them knowing my exact age. That's revolutionary.",
    author: "Jamie L.",
    location: "Beta User",
  },
  {
    quote:
      "I love that Amandis encourages real-world meetings instead of endless chatting. I've had more meaningful connections here than on any other app.",
    author: "Sam K.",
    location: "Early Adopter",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Early Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background p-6 rounded-lg border">
              <p className="text-lg mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-muted-foreground">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
