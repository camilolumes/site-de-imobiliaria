import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Shield, Clock } from "lucide-react"

const stats = [
  { number: "15+", label: "Anos de Experiência" },
  { number: "5000+", label: "Imóveis Vendidos" },
  { number: "10000+", label: "Clientes Satisfeitos" },
  { number: "50+", label: "Corretores Especializados" },
]

const values = [
  {
    icon: Shield,
    title: "Confiança",
    description: "Transparência e honestidade em todas as nossas negociações.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Cada cliente é único e merece um atendimento especial.",
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Buscamos sempre a excelência em nossos serviços.",
  },
  {
    icon: Clock,
    title: "Agilidade",
    description: "Processos rápidos e eficientes para sua comodidade.",
  },
]

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-500 to-royal-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Sobre a Imoblar</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Imobiliária moderna e tecnológica, transformando a experiência de comprar, vender e alugar imóveis com
              inovação, transparência e atendimento humanizado.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa História</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  A Imoblar nasceu em 2009 com a visão de revolucionar o mercado imobiliário brasileiro, combinando
                  tecnologia de ponta com atendimento humano excepcional.
                </p>
                <p>
                  Hoje somos reconhecidos como uma das imobiliárias mais inovadoras do país, com uma plataforma digital
                  avançada e uma equipe de especialistas dedicados ao sucesso de nossos clientes.
                </p>
                <p>
                  Nossa missão é simples: encontrar o imóvel perfeito para cada pessoa, seja para morar, investir ou
                  trabalhar. Acreditamos que cada imóvel tem uma história e cada cliente tem um sonho único.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Equipe Imoblar"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Valores</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Os princípios que guiam nosso trabalho e nos tornam únicos no mercado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900 text-white rounded-full mb-4">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Missão</h3>
                <p className="text-gray-600">
                  Conectar pessoas aos seus imóveis ideais, oferecendo soluções personalizadas e um atendimento de
                  excelência.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Visão</h3>
                <p className="text-gray-600">
                  Ser a imobiliária mais confiável e inovadora do mercado, reconhecida pela qualidade dos nossos
                  serviços.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Valores</h3>
                <p className="text-gray-600">
                  Transparência, confiança, excelência, inovação e compromisso com a satisfação dos nossos clientes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
