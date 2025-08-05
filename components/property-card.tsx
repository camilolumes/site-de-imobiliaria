import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Square } from "lucide-react"

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

interface PropertyCardProps {
  property: Property
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/imoveis/${property.id}`}>
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer h-full rounded-2xl border-0 shadow-lg">
        <div className="relative">
          <img src={property.imagem || "/placeholder.svg"} alt={property.titulo} className="w-full h-48 object-cover" />
          <Badge
            className={`absolute top-4 left-4 ${
              property.transacao === "venda" ? "bg-emerald-500 hover:bg-emerald-600" : "bg-royal-500 hover:bg-royal-600"
            } text-white font-semibold px-3 py-1 rounded-full`}
          >
            {property.transacao === "venda" ? "Venda" : "Aluguel"}
          </Badge>
        </div>

        <CardContent className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{property.titulo}</h3>

          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="text-sm truncate">
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

          <div className="text-xl font-bold text-emerald-600">
            R$ {property.preco.toLocaleString("pt-BR")}
            {property.transacao === "aluguel" && <span className="text-sm font-normal">/mês</span>}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
