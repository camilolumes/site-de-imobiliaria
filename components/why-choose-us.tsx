import { Shield, Users, Clock, Award } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Segurança e Confiança",
    description: "Todos os nossos imóveis passam por rigorosa verificação de documentação e legalidade.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Equipe especializada para te ajudar em cada etapa do processo de compra ou aluguel.",
  },
  {
    icon: Clock,
    title: "15 Anos de Experiência",
    description: "Mais de uma década no mercado imobiliário, com milhares de clientes satisfeitos.",
  },
  {
    icon: Award,
    title: "Melhores Oportunidades",
    description: "Acesso exclusivo aos melhores imóveis do mercado com preços competitivos.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Por que escolher a ImóvelPrime?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Somos referência no mercado imobiliário, oferecendo o melhor serviço para nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900 text-white rounded-full mb-4">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
