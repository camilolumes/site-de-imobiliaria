import { Shield, Zap, Users, Award, TrendingUp, Clock } from "lucide-react"

const advantages = [
  {
    icon: Zap,
    title: "Tecnologia Avançada",
    description: "Plataforma digital moderna com busca inteligente e tours virtuais 360°.",
    color: "text-vibrant-blue",
    bgColor: "bg-blue-50",
  },
  {
    icon: Shield,
    title: "100% Seguro",
    description: "Documentação verificada e processos jurídicos acompanhados por especialistas.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Users,
    title: "Atendimento Humanizado",
    description: "Consultores especializados dedicados ao seu sucesso imobiliário.",
    color: "text-vibrant-orange",
    bgColor: "bg-orange-50",
  },
  {
    icon: TrendingUp,
    title: "Melhores Oportunidades",
    description: "Acesso exclusivo aos lançamentos e melhores negócios do mercado.",
    color: "text-vibrant-turquoise",
    bgColor: "bg-teal-50",
  },
  {
    icon: Clock,
    title: "Agilidade Comprovada",
    description: "Processos otimizados que reduzem o tempo de compra e locação.",
    color: "text-royal-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Award,
    title: "Reconhecimento",
    description: "Premiada como melhor imobiliária da região por 3 anos consecutivos.",
    color: "text-vibrant-yellow",
    bgColor: "bg-yellow-50",
  },
]

export default function ImoblarAdvantages() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Por que escolher a <span className="text-emerald-500">Imoblar</span>?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Somos mais que uma imobiliária. Somos seu parceiro na jornada para encontrar o lar perfeito, combinando
            tecnologia de ponta com atendimento humano excepcional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="group hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-center p-6 rounded-2xl hover:shadow-xl transition-shadow">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 ${advantage.bgColor} rounded-2xl mb-4 group-hover:scale-110 transition-transform`}
                >
                  <advantage.icon className={`h-8 w-8 ${advantage.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-emerald-500 to-royal-500 rounded-3xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-emerald-100">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-emerald-100">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5K+</div>
              <div className="text-emerald-100">Imóveis Vendidos</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-emerald-100">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
