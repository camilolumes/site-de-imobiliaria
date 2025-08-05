import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Square } from "lucide-react"

const featuredProperties = [
  {
    id: 1,
    titulo: "Apartamento Moderno no Centro",
    preco: 450000,
    tipo: "apartamento",
    transacao: "venda",
    cidade: "São Paulo",
    bairro: "Centro",
    quartos: 2,
    banheiros: 2,
    area: 85,
    imagem: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    titulo: "Casa com Jardim",
    preco: 2800,
    tipo: "casa",
    transacao: "aluguel",
    cidade: "São Paulo",
    bairro: "Vila Madalena",
    quartos: 3,
    banheiros: 2,
    area: 120,
    imagem: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    titulo: "Loft Industrial",
    preco: 380000,
    tipo: "apartamento",
    transacao: "venda",
    cidade: "São Paulo",
    bairro: "Pinheiros",
    quartos: 1,
    banheiros: 1,
    area: 65,
    imagem: "/placeholder.svg?height=300&width=400",
  },
]

export default function FeaturedProperties() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Imóveis em <span className="text-emerald-500">Destaque</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Confira nossa seleção especial de imóveis com as melhores oportunidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <Link key={property.id} href={`/imoveis/${property.id}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative">
                  <img
                    src={property.imagem || "/placeholder.svg"}
                    alt={property.titulo}
                    className="w-full h-48 object-cover"
                  />
                  <Badge
                    className={`absolute top-4 left-4 ${
                      property.transacao === "venda"
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-blue-500 hover:bg-blue-600"
                    }`}
                  >
                    {property.transacao === "venda" ? "Venda" : "Aluguel"}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.titulo}</h3>

                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">
                      {property.bairro}, {property.cidade}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span>{property.quartos}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span>{property.banheiros}</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      <span>{property.area}m²</span>
                    </div>
                  </div>

                  <div className="text-2xl font-bold text-emerald-600">
                    R$ {property.preco.toLocaleString("pt-BR")}
                    {property.transacao === "aluguel" && <span className="text-sm font-normal">/mês</span>}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/imoveis"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-royal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-royal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Ver Todos os Imóveis
          </Link>
        </div>
      </div>
    </section>
  )
}
