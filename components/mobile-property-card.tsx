"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Square, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Property {
  id: number
  titulo: string
  preco: number
  tipo: string
  transacao: string
  cidade: string
  bairro: string
  quartos: number
  banheiros: number
  area: number
  imagem: string
}

interface MobilePropertyCardProps {
  property: Property
}

export default function MobilePropertyCard({ property }: MobilePropertyCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer rounded-3xl border-0 shadow-lg bg-white">
      <Link href={`/imoveis/${property.id}`}>
        <div className="relative">
          <img src={property.imagem || "/placeholder.svg"} alt={property.titulo} className="w-full h-48 object-cover" />

          {/* Badges */}
          <Badge
            className={`absolute top-3 left-3 ${
              property.transacao === "venda" ? "bg-emerald-500 hover:bg-emerald-600" : "bg-royal-500 hover:bg-royal-600"
            } text-white font-semibold px-3 py-1 rounded-full text-xs`}
          >
            {property.transacao === "venda" ? "Venda" : "Aluguel"}
          </Badge>

          {/* Favorite Button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full shadow-md"
            onClick={(e) => {
              e.preventDefault()
              // Handle favorite logic
            }}
          >
            <Heart className="h-4 w-4 text-gray-600" />
          </Button>
        </div>

        <CardContent className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">{property.titulo}</h3>

          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="h-4 w-4 mr-1 flex-shrink-0 text-vibrant-turquoise" />
            <span className="text-sm truncate">
              {property.bairro}, {property.cidade}
            </span>
          </div>

          {/* Property Details */}
          <div className="flex items-center justify-between text-sm text-gray-600 mb-4 bg-gray-50 rounded-xl p-3">
            {property.quartos > 0 && (
              <div className="flex items-center">
                <Bed className="h-4 w-4 mr-1 text-emerald-500" />
                <span className="font-medium">{property.quartos}</span>
              </div>
            )}
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1 text-royal-500" />
              <span className="font-medium">{property.banheiros}</span>
            </div>
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1 text-vibrant-orange" />
              <span className="font-medium">{property.area}m²</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-emerald-600">
              R$ {property.preco.toLocaleString("pt-BR")}
              {property.transacao === "aluguel" && <span className="text-sm font-normal text-gray-500">/mês</span>}
            </div>

            <Button
              size="sm"
              className="bg-gradient-to-r from-emerald-500 to-royal-500 hover:from-emerald-600 hover:to-royal-600 text-white px-4 py-2 rounded-xl text-xs font-semibold"
              onClick={(e) => {
                e.preventDefault()
                // Handle contact logic
              }}
            >
              Contato
            </Button>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
