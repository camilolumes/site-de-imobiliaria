"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import MobilePropertyCard from "@/components/mobile-property-card"
import PropertyFilters from "@/components/property-filters"
import { properties } from "@/lib/properties-data"

export default function ImoveisPage() {
  const searchParams = useSearchParams()
  const [filteredProperties, setFilteredProperties] = useState(properties)
  const [filters, setFilters] = useState({
    tipo: searchParams.get("tipo") || "",
    cidade: searchParams.get("cidade") || "",
    transacao: searchParams.get("transacao") || "",
    precoMin: searchParams.get("precoMin") || "",
    precoMax: searchParams.get("precoMax") || "",
    quartos: searchParams.get("quartos") || "",
  })

  useEffect(() => {
    let filtered = properties

    // Aplicar filtros
    if (filters.tipo) {
      filtered = filtered.filter((p) => p.tipo === filters.tipo)
    }
    if (filters.cidade) {
      filtered = filtered.filter((p) => p.cidade.toLowerCase().includes(filters.cidade.toLowerCase()))
    }
    if (filters.transacao) {
      filtered = filtered.filter((p) => p.transacao === filters.transacao)
    }
    if (filters.precoMin) {
      filtered = filtered.filter((p) => p.preco >= Number.parseInt(filters.precoMin))
    }
    if (filters.precoMax) {
      filtered = filtered.filter((p) => p.preco <= Number.parseInt(filters.precoMax))
    }
    if (filters.quartos) {
      filtered = filtered.filter((p) => p.quartos >= Number.parseInt(filters.quartos))
    }

    setFilteredProperties(filtered)
  }, [filters])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Nossos Imóveis</h1>
          <p className="text-gray-600">Encontrados {filteredProperties.length} imóveis</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filtros */}
          <div className="lg:col-span-1">
            <PropertyFilters filters={filters} setFilters={setFilters} />
          </div>

          {/* Lista de Imóveis */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
              {filteredProperties.map((property) => (
                <MobilePropertyCard key={property.id} property={property} />
              ))}
            </div>

            {filteredProperties.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Nenhum imóvel encontrado com os filtros selecionados.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
