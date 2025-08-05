"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Home, DollarSign } from "lucide-react"

export default function SmartSearch() {
  const [searchData, setSearchData] = useState({
    tipo: "",
    cidade: "",
    precoMin: "",
    precoMax: "",
    transacao: "",
  })

  const handleSearch = () => {
    const params = new URLSearchParams()
    Object.entries(searchData).forEach(([key, value]) => {
      if (value) params.append(key, value)
    })
    window.location.href = `/imoveis?${params.toString()}`
  }

  return (
    <section className="py-16 bg-gradient-to-br from-neutral-light via-white to-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            <span className="text-emerald-500">Busca Inteligente</span> de Imóveis
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Nossa tecnologia avançada encontra exatamente o que você procura em segundos
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {/* Tipo de Transação */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <Home className="h-4 w-4 mr-2 text-emerald-500" />
                Transação
              </label>
              <Select onValueChange={(value) => setSearchData({ ...searchData, transacao: value })}>
                <SelectTrigger className="border-2 border-gray-200 hover:border-emerald-500 transition-colors">
                  <SelectValue placeholder="Aluguel ou Venda" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aluguel">Aluguel</SelectItem>
                  <SelectItem value="venda">Venda</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Tipo de Imóvel */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <Home className="h-4 w-4 mr-2 text-royal-500" />
                Tipo
              </label>
              <Select onValueChange={(value) => setSearchData({ ...searchData, tipo: value })}>
                <SelectTrigger className="border-2 border-gray-200 hover:border-royal-500 transition-colors">
                  <SelectValue placeholder="Tipo de Imóvel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartamento">Apartamento</SelectItem>
                  <SelectItem value="casa">Casa</SelectItem>
                  <SelectItem value="comercial">Comercial</SelectItem>
                  <SelectItem value="terreno">Terreno</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Cidade */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <MapPin className="h-4 w-4 mr-2 text-vibrant-turquoise" />
                Localização
              </label>
              <Select onValueChange={(value) => setSearchData({ ...searchData, cidade: value })}>
                <SelectTrigger className="border-2 border-gray-200 hover:border-teal-500 transition-colors">
                  <SelectValue placeholder="Cidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sao-paulo">São Paulo</SelectItem>
                  <SelectItem value="rio-de-janeiro">Rio de Janeiro</SelectItem>
                  <SelectItem value="belo-horizonte">Belo Horizonte</SelectItem>
                  <SelectItem value="brasilia">Brasília</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Preço Mínimo */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <DollarSign className="h-4 w-4 mr-2 text-vibrant-orange" />
                Preço Mín.
              </label>
              <Input
                placeholder="R$ 0"
                type="number"
                value={searchData.precoMin}
                onChange={(e) => setSearchData({ ...searchData, precoMin: e.target.value })}
                className="border-2 border-gray-200 hover:border-orange-500 focus:border-orange-500 transition-colors"
              />
            </div>

            {/* Preço Máximo */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <DollarSign className="h-4 w-4 mr-2 text-vibrant-orange" />
                Preço Máx.
              </label>
              <Input
                placeholder="R$ ∞"
                type="number"
                value={searchData.precoMax}
                onChange={(e) => setSearchData({ ...searchData, precoMax: e.target.value })}
                className="border-2 border-gray-200 hover:border-orange-500 focus:border-orange-500 transition-colors"
              />
            </div>

            {/* Botão de Busca */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-transparent">Buscar</label>
              <Button
                onClick={handleSearch}
                className="w-full bg-gradient-to-r from-emerald-500 to-royal-500 hover:from-emerald-600 hover:to-royal-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
              >
                <Search className="h-5 w-5 mr-2" />
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
