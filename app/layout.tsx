import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import MobileHeader from "@/components/mobile-header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ImóvelPrime - Aluguel e Venda de Imóveis",
  description: "Encontre seu imóvel ideal. Casas, apartamentos e imóveis comerciais para aluguel e venda.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <MobileHeader />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
