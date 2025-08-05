"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Home, Building, Users, Phone, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/", icon: Home, color: "text-emerald-500" },
    { name: "Imóveis", href: "/imoveis", icon: Building, color: "text-royal-500" },
    { name: "Sobre Nós", href: "/sobre", icon: Users, color: "text-vibrant-orange" },
    { name: "Contato", href: "/contato", icon: Phone, color: "text-vibrant-turquoise" },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-emerald-500 to-royal-500 p-2 rounded-xl">
              <Building className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-royal-600 bg-clip-text text-transparent">
              Imoblar
            </span>
          </Link>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="p-2">
              <Search className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="pb-4 border-t border-gray-100 mt-2">
            <nav className="grid grid-cols-2 gap-3 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex flex-col items-center space-y-2 p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="p-3 rounded-xl bg-white shadow-sm">
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="mt-4">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-emerald-500 to-royal-500 hover:from-emerald-600 hover:to-royal-600 text-white font-semibold py-3 rounded-xl shadow-lg"
              >
                <Link href="/contato">Fale Conosco</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
