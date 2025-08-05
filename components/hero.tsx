import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-[600px] bg-gradient-to-r from-emerald-500 to-royal-500 flex items-center">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-40"
        style={{
          backgroundImage: `url('/placeholder.svg?height=600&width=1200')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Encontre seu <span className="text-vibrant-orange">lar ideal</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Casas, apartamentos e imóveis comerciais para aluguel e venda. Mais de 15 anos conectando pessoas aos seus
            sonhos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-vibrant-orange hover:bg-orange-600 text-white font-semibold">
              <Link href="/imoveis">Ver Imóveis</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
            >
              <Link href="/contato">Fale Conosco</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
