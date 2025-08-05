import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, MessageCircle, Mail } from "lucide-react"

export default function MobileCTA() {
  return (
    <section className="py-12 bg-gradient-to-r from-emerald-500 to-royal-500">
      <div className="px-4">
        <div className="text-center text-white mb-8">
          <h2 className="text-2xl font-bold mb-3">
            Pronto para encontrar seu <span className="text-vibrant-orange">lar ideal</span>?
          </h2>
          <p className="text-emerald-100 text-sm">Nossa equipe está pronta para te ajudar</p>
        </div>

        <div className="space-y-3">
          <Button
            asChild
            size="lg"
            className="w-full bg-white hover:bg-gray-100 text-emerald-600 font-semibold py-4 rounded-2xl shadow-lg"
          >
            <Link href="tel:+5511999999999" className="flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2" />
              Ligar Agora
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            className="w-full bg-vibrant-orange hover:bg-orange-600 text-white font-semibold py-4 rounded-2xl shadow-lg"
          >
            <Link href="https://wa.me/5511999999999" className="flex items-center justify-center">
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full border-2 border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent py-4 rounded-2xl"
          >
            <Link href="/contato" className="flex items-center justify-center">
              <Mail className="h-5 w-5 mr-2" />
              Enviar E-mail
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
