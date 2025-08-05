import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"

export default function MobileHero() {
  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-emerald-500 via-royal-500 to-vibrant-turquoise flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=400')] bg-cover bg-center" />
      </div>

      {/* Content */}
      <div className="relative w-full px-4 py-8">
        <div className="text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Encontre seu
            <br />
            <span className="text-vibrant-orange">lar ideal</span>
          </h1>

          <p className="text-lg mb-8 text-gray-100 max-w-sm mx-auto leading-relaxed">
            Mais de 15 anos conectando pessoas aos seus sonhos imobiliários
          </p>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              asChild
              size="lg"
              className="w-full bg-vibrant-orange hover:bg-orange-600 text-white font-semibold py-4 rounded-2xl shadow-xl"
            >
              <Link href="/imoveis" className="flex items-center justify-center">
                Ver Imóveis
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full border-2 border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent py-4 rounded-2xl"
            >
              <Link href="#busca" className="flex items-center justify-center">
                <Play className="h-5 w-5 mr-2" />
                Tour Virtual
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-xs text-gray-200">Clientes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">5K+</div>
              <div className="text-xs text-gray-200">Vendidos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-xs text-gray-200">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
