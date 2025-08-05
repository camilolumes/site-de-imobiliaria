"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria o envio do formulário
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      assunto: "",
      mensagem: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Entre em Contato</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Estamos aqui para ajudar você a encontrar o imóvel ideal. Entre em contato conosco e tire todas as suas
              dúvidas.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Informações de Contato */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <Phone className="h-8 w-8 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Telefone</h3>
                      <p className="text-gray-600">(11) 3456-7890</p>
                      <p className="text-gray-600">(11) 99999-8888</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <Mail className="h-8 w-8 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">E-mail</h3>
                      <p className="text-gray-600">contato@imovelprime.com.br</p>
                      <p className="text-gray-600">vendas@imovelprime.com.br</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <MapPin className="h-8 w-8 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Endereço</h3>
                      <p className="text-gray-600">Rua das Flores, 123</p>
                      <p className="text-gray-600">Centro - São Paulo, SP</p>
                      <p className="text-gray-600">CEP: 01234-567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <Clock className="h-8 w-8 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Horário</h3>
                      <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                      <p className="text-gray-600">Sábado: 8h às 14h</p>
                      <p className="text-gray-600">Domingo: Fechado</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Envie sua Mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <Input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone *
                      </label>
                      <Input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        required
                        value={formData.telefone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div>
                      <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">
                        Assunto
                      </label>
                      <Input
                        id="assunto"
                        name="assunto"
                        type="text"
                        value={formData.assunto}
                        onChange={handleChange}
                        placeholder="Assunto da mensagem"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      rows={6}
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Digite sua mensagem aqui..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-blue-900 hover:bg-blue-800">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Nossa Localização</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Mapa Interativo</h3>
                  <p>Rua das Flores, 123 - Centro</p>
                  <p>São Paulo, SP - CEP: 01234-567</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
