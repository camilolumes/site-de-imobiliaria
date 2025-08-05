"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface PropertyFiltersProps {
  filters: {
    tipo: string
    cidade: string
    transacao: string
    precoMin: string
    precoMax: string
    quartos: string
  }
  setFilters: (filters: any) => void
}

export default function PropertyFilters({ filters, setFilters }: PropertyFiltersProps) {
  const clearFilters = () => {
    setFilters({
      tipo: "",
      cidade: "",
      transacao: "",
      precoMin: "",
      precoMax: "",
      quartos: "",
    })
  }

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Filtros
          <Button variant="outline" size="sm" onClick={clearFilters}>
            Limpar
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Tipo de Transação */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">Transação</label>
          <Select value={filters.transacao} onValueChange={(value) => setFilters({ ...filters, transacao: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="aluguel">Aluguel</SelectItem>
              <SelectItem value="venda">Venda</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tipo de Imóvel */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">Tipo de Imóvel</label>
          <Select value={filters.tipo} onValueChange={(value) => setFilters({ ...filters, tipo: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione" />
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
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">Cidade</label>
          <Select value={filters.cidade} onValueChange={(value) => setFilters({ ...filters, cidade: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="São Paulo">São Paulo</SelectItem>
              <SelectItem value="Rio de Janeiro">Rio de Janeiro</SelectItem>
              <SelectItem value="Belo Horizonte">Belo Horizonte</SelectItem>
              <SelectItem value="Brasília">Brasília</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Quartos */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">Quartos (mínimo)</label>
          <Select value={filters.quartos} onValueChange={(value) => setFilters({ ...filters, quartos: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Faixa de Preço */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">Faixa de Preço</label>
          <div className="space-y-2">
            <Input
              placeholder="Preço mínimo"
              type="number"
              value={filters.precoMin}
              onChange={(e) => setFilters({ ...filters, precoMin: e.target.value })}
            />
            <Input
              placeholder="Preço máximo"
              type="number"
              value={filters.precoMax}
              onChange={(e) => setFilters({ ...filters, precoMax: e.target.value })}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
