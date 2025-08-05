"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Home, DollarSign, SlidersHorizontal } from "lucide-react"

export default function MobileSearch() {
  const [searchData, setSearchData] = useState({
    tipo: "",
    cidade: "",
    precoMin: "",
    precoMax: "",
    transacao: "",
  })
  const [showFilters, setShowFilters] = useState(false)

  const handleSearch = () => {
    const params = new URLSearchParams()
    Object.entries(searchData).forEach(([key, value]) => {
      if (value) params.append(key, value)
    })
    window.location.href = `/imoveis?${params.toString()}`
  }

  return (
    <section id="busca" className="py-8 bg-gradient-to-br from-neutral-light to-white">
      <div className="px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <span className="text-emerald-500">Busca Rápida</span>
          </h2>
          <p className="text-gray-600 text-sm">Encontre seu imóvel ideal em segundos</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
          {/* Quick Search */}
          <div className="space-y-4">
            {/* Transaction Type */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant={searchData.transacao === "aluguel" ? "default" : "outline"}
                className={`py-3 rounded-xl font-medium ${
                  searchData.transacao === "aluguel"
                    ? "bg-royal-500 hover:bg-royal-600"
                    : "border-2 border-gray-200 hover:border-royal-500"
                }`}
                onClick={() => setSearchData({ ...searchData, transacao: "aluguel" })}
              >
                Aluguel
              </Button>
              <Button
                variant={searchData.transacao === "venda" ? "default" : "outline"}
                className={`py-3 rounded-xl font-medium ${
                  searchData.transacao === "venda"
                    ? "bg-emerald-500 hover:bg-emerald-600"
                    : "border-2 border-gray-200 hover:border-emerald-500"
                }`}
                onClick={() => setSearchData({ ...searchData, transacao: "venda" })}
              >
                Comprar
              </Button>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <MapPin className="h-4 w-4 mr-2 text-vibrant-turquoise" />
                Onde você quer morar?
              </label>
              <Select onValueChange={(value) => setSearchData({ ...searchData, cidade: value })}>
                <SelectTrigger className="border-2 border-gray-200 hover:border-teal-500 transition-colors py-3 rounded-xl">
                  <SelectValue placeholder="Escolha a cidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sao-paulo">São Paulo</SelectItem>
                  <SelectItem value="rio-de-janeiro">Rio de Janeiro</SelectItem>
                  <SelectItem value="belo-horizonte">Belo Horizonte</SelectItem>
                  <SelectItem value="brasilia">Brasília</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Filters Toggle */}
            <Button
              variant="ghost"
              className="w-full py-3 text-gray-600 hover:text-emerald-600"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              {showFilters ? "Ocultar Filtros" : "Mais Filtros"}
            </Button>

            {/* Advanced Filters */}
            {showFilters && (
              <div className="space-y-4 pt-4 border-t border-gray-100">
                {/* Property Type */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-gray-700">
                    <Home className="h-4 w-4 mr-2 text-royal-500" />
                    Tipo de Imóvel
                  </label>
                  <Select onValueChange={(value) => setSearchData({ ...searchData, tipo: value })}>
                    <SelectTrigger className="border-2 border-gray-200 hover:border-royal-500 transition-colors py-3 rounded-xl">
                      <SelectValue placeholder="Apartamento, Casa..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartamento">Apartamento</SelectItem>
                      <SelectItem value="casa">Casa</SelectItem>
                      <SelectItem value="comercial">Comercial</SelectItem>
                      <SelectItem value="terreno">Terreno</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-gray-700">
                    <DollarSign className="h-4 w-4 mr-2 text-vibrant-orange" />
                    Faixa de Preço
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <Input
                      placeholder="Mínimo"
                      type="number"
                      value={searchData.precoMin}
                      onChange={(e) => setSearchData({ ...searchData, precoMin: e.target.value })}
                      className="border-2 border-gray-200 hover:border-orange-500 focus:border-orange-500 transition-colors py-3 rounded-xl"
                    />
                    <Input
                      placeholder="Máximo"
                      type="number"
                      value={searchData.precoMax}
                      onChange={(e) => setSearchData({ ...searchData, precoMax: e.target.value })}
                      className="border-2 border-gray-200 hover:border-orange-500 focus:border-orange-500 transition-colors py-3 rounded-xl"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Search Button */}
            <Button
              onClick={handleSearch}
              className="w-full bg-gradient-to-r from-emerald-500 to-royal-500 hover:from-emerald-600 hover:to-royal-600 text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              size="lg"
            >
              <Search className="h-5 w-5 mr-2" />
              Buscar Imóveis
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
