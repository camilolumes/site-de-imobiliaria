"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    role: "Compradora",
    content: "A Imoblar tornou meu sonho da casa própria realidade! Atendimento excepcional.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "João Santos",
    role: "Investidor",
    content: "Excelente assessoria para investimentos. Resultados acima das expectativas.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Ana Costa",
    role: "Locatária",
    content: "Encontrei meu apartamento ideal em poucos dias. Processo rápido e seguro.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
]

export default function MobileTestimonials() {
  return (
    <section className="py-12 bg-gradient-to-br from-neutral-light to-white">
      <div className="px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            O que nossos <span className="text-emerald-500">clientes dizem</span>
          </h2>
          <p className="text-gray-600 text-sm">+10.000 clientes satisfeitos</p>
        </div>

        <div className="space-y-4">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative overflow-hidden border-0 shadow-lg rounded-3xl bg-white">
              <CardContent className="p-5">
                <div className="absolute top-3 right-3 text-emerald-500 opacity-20">
                  <Quote className="h-6 w-6" />
                </div>

                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-vibrant-yellow fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 mb-4 text-sm leading-relaxed italic">"{testimonial.content}"</p>

                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-emerald-500"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-emerald-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
