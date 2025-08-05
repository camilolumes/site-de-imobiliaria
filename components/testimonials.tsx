"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    role: "Compradora",
    content:
      "A Imoblar tornou meu sonho da casa própria realidade! Atendimento excepcional e total transparência no processo.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "João Santos",
    role: "Investidor",
    content:
      "Excelente assessoria para investimentos imobiliários. Equipe profissional e resultados acima das expectativas.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Ana Costa",
    role: "Locatária",
    content: "Encontrei meu apartamento ideal em poucos dias. Processo rápido, seguro e sem complicações. Recomendo!",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-br from-neutral-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            O que nossos <span className="text-emerald-500">clientes dizem</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mais de 10.000 clientes satisfeitos confiam na Imoblar para realizar seus sonhos imobiliários
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
            >
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 text-emerald-500 opacity-20">
                  <Quote className="h-8 w-8" />
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-vibrant-yellow fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>

                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-emerald-500"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-emerald-600">{testimonial.role}</p>
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
