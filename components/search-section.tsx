"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

export default function SearchSection() {
  const [searchData, setSearchData] = useState({
    tipo: "",
    cidade: "",
    precoMin: "",
    precoMax: "",
    transacao: "",
  })

  const handleSearch = () => {
    // Redirecionar para página de imóveis com filtros
    const params = new URLSearchParams()
    Object.entries(searchData).forEach(([key, value]) => {
      if (value) params.append(key, value)
    })
    window.location.href = `/imoveis?${params.toString()}`
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Busque seu imóvel ideal</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Use nossos filtros para encontrar exatamente o que você procura
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {/* Tipo de Transação */}
            <Select onValueChange={(value) => setSearchData({ ...searchData, transacao: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Aluguel ou Venda" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="aluguel">Aluguel</SelectItem>
                <SelectItem value="venda">Venda</SelectItem>
              </SelectContent>
            </Select>

            {/* Tipo de Imóvel */}
            <Select onValueChange={(value) => setSearchData({ ...searchData, tipo: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Tipo de Imóvel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartamento">Apartamento</SelectItem>
                <SelectItem value="casa">Casa</SelectItem>
                <SelectItem value="comercial">Comercial</SelectItem>
                <SelectItem value="terreno">Terreno</SelectItem>
              </SelectContent>
            </Select>

            {/* Cidade */}
            <Select onValueChange={(value) => setSearchData({ ...searchData, cidade: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Cidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sao-paulo">São Paulo</SelectItem>
                <SelectItem value="rio-de-janeiro">Rio de Janeiro</SelectItem>
                <SelectItem value="belo-horizonte">Belo Horizonte</SelectItem>
                <SelectItem value="brasilia">Brasília</SelectItem>
              </SelectContent>
            </Select>

            {/* Preço Mínimo */}
            <Input
              placeholder="Preço mín."
              type="number"
              value={searchData.precoMin}
              onChange={(e) => setSearchData({ ...searchData, precoMin: e.target.value })}
            />

            {/* Preço Máximo */}
            <Input
              placeholder="Preço máx."
              type="number"
              value={searchData.precoMax}
              onChange={(e) => setSearchData({ ...searchData, precoMax: e.target.value })}
            />

            {/* Botão de Busca */}
            <Button onClick={handleSearch} className="bg-blue-900 hover:bg-blue-800">
              <Search className="h-4 w-4 mr-2" />
              Buscar
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
