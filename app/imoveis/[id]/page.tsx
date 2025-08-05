"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { properties } from "@/lib/properties-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Square, Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function PropertyDetailPage() {
  const params = useParams()
  const propertyId = Number.parseInt(params.id as string)
  const property = properties.find((p) => p.id === propertyId)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Imóvel não encontrado</h1>
          <Link href="/imoveis" className="text-blue-900 hover:underline">
            Voltar para imóveis
          </Link>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === property.galeria.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? property.galeria.length - 1 : prev - 1))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/imoveis" className="text-blue-900 hover:underline">
            ← Voltar para imóveis
          </Link>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Galeria de Imagens */}
          <div className="lg:col-span-2">
            <div className="relative mb-4">
              <img
                src={property.galeria[currentImageIndex] || "/placeholder.svg"}
                alt={property.titulo}
                className="w-full h-96 object-cover rounded-lg"
              />

              {/* Navegação da galeria */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Badge de transação */}
              <Badge
                className={`absolute top-4 left-4 ${
                  property.transacao === "venda" ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {property.transacao === "venda" ? "Venda" : "Aluguel"}
              </Badge>
            </div>

            {/* Miniaturas */}
            <div className="grid grid-cols-4 gap-2">
              {property.galeria.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative ${index === currentImageIndex ? "ring-2 ring-blue-900" : ""}`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${property.titulo} - ${index + 1}`}
                    className="w-full h-20 object-cover rounded"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Informações do Imóvel */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">{property.titulo}</h1>

                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>
                    {property.bairro}, {property.cidade}
                  </span>
                </div>

                <div className="text-3xl font-bold text-blue-900 mb-6">
                  R$ {property.preco.toLocaleString("pt-BR")}
                  {property.transacao === "aluguel" && <span className="text-lg font-normal">/mês</span>}
                </div>

                {/* Características principais */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  {property.quartos > 0 && (
                    <div className="text-center">
                      <Bed className="h-6 w-6 mx-auto mb-1 text-gray-600" />
                      <div className="text-sm text-gray-600">Quartos</div>
                      <div className="font-semibold">{property.quartos}</div>
                    </div>
                  )}
                  <div className="text-center">
                    <Bath className="h-6 w-6 mx-auto mb-1 text-gray-600" />
                    <div className="text-sm text-gray-600">Banheiros</div>
                    <div className="font-semibold">{property.banheiros}</div>
                  </div>
                  <div className="text-center">
                    <Square className="h-6 w-6 mx-auto mb-1 text-gray-600" />
                    <div className="text-sm text-gray-600">Área</div>
                    <div className="font-semibold">{property.area}m²</div>
                  </div>
                </div>

                {/* Botões de contato */}
                <div className="space-y-3">
                  <Button className="w-full bg-blue-900 hover:bg-blue-800" size="lg">
                    <Phone className="h-5 w-5 mr-2" />
                    Ligar Agora
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" size="lg">
                    <Mail className="h-5 w-5 mr-2" />
                    Enviar E-mail
                  </Button>
                </div>

                {/* Mapa placeholder */}
                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Localização</h3>
                  <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="h-8 w-8 mx-auto mb-2" />
                      <p>Mapa da localização</p>
                      <p className="text-sm">
                        {property.bairro}, {property.cidade}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Descrição e Características */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Descrição</h2>
              <p className="text-gray-600 leading-relaxed">{property.descricao}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Características</h2>
              <ul className="space-y-2">
                {property.caracteristicas.map((caracteristica, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                    {caracteristica}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
