const testimonials = [
  {
    quote: "StreamLine has revolutionized our team's workflow. It's a game-changer!",
    author: "Jane Doe",
    company: "Tech Innovators Inc.",
  },
  {
    quote: "The best project management tool we've ever used. Highly recommended!",
    author: "John Smith",
    company: "Creative Solutions LLC",
  },
  {
    quote: "StreamLine helped us increase productivity by 40%. It's incredible!",
    author: "Emily Johnson",
    company: "Startup Ventures",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-gray-600">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
